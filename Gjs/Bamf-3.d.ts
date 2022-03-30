/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bamf-3
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Bamf {

enum ClickBehavior {
    NONE,
    OPEN,
    FOCUS,
    FOCUS_ALL,
    MINIMIZE,
    RESTORE,
    RESTORE_ALL,
    PICKER,
}
enum WindowMaximizationType {
    FLOATING,
    HORIZONTAL_MAXIMIZED,
    VERTICAL_MAXIMIZED,
    MAXIMIZED,
}
enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
    UNKNOWN,
}
const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string
const APPLICATION_SIGNAL_WINDOW_ADDED: string
const APPLICATION_SIGNAL_WINDOW_REMOVED: string
const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string
const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string
const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string
const MATCHER_SIGNAL_VIEW_CLOSED: string
const MATCHER_SIGNAL_VIEW_OPENED: string
const VIEW_SIGNAL_ACTIVE_CHANGED: string
const VIEW_SIGNAL_CHILD_ADDED: string
const VIEW_SIGNAL_CHILD_MOVED: string
const VIEW_SIGNAL_CHILD_REMOVED: string
const VIEW_SIGNAL_CLOSED: string
const VIEW_SIGNAL_ICON_CHANGED: string
const VIEW_SIGNAL_NAME_CHANGED: string
const VIEW_SIGNAL_RUNNING_CHANGED: string
const VIEW_SIGNAL_STARTING_CHANGED: string
const VIEW_SIGNAL_URGENT_CHANGED: string
const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string
const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string
const WINDOW_SIGNAL_MONITOR_CHANGED: string
interface TabPreviewReadyCallback {
    (self: Tab, preview_data: string): void
}
interface Application_ConstructProps extends View_ConstructProps {
}
class Application {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Application */
    /**
     * Used to fetch the bus name and the object path of the remote application menu.
     */
    get_application_menu(): [ /* returnType */ boolean, /* name */ string, /* object_path */ string ]
    get_application_type(): string
    /**
     * Used to fetch the path to the .desktop file associated with the passed application. If
     * none exists, the result is NULL.
     */
    get_desktop_file(): string
    get_focusable_child(): View
    /**
     * Used to discover whether the application wants menu stubs shown.
     */
    get_show_menu_stubs(): boolean
    get_supported_mime_types(): string[]
    /**
     * Used to fetch the application contains a Window with given `xid`.
     * @param xid an X11 Window ID
     */
    get_window_for_xid(xid: number): Window
    /**
     * Used to fetch all #BamfWindow's associated with the passed #BamfApplication.
     */
    get_windows(): Window[]
    /**
     * Used to fetch all #BamfWindow's xids associated with the passed #BamfApplication.
     */
    get_xids(): number[]
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    get_name(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    get_view_type(): string
    has_child(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    is_active(): boolean
    /**
     * Determines if the view is closed or not.
     */
    is_closed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    is_starting(): boolean
    is_sticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    is_urgent(): boolean
    is_user_visible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    vfunc_get_children(): View[]
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    vfunc_get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    vfunc_is_active(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    vfunc_is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    vfunc_is_starting(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    vfunc_view_type(): string
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
    /* Signals of Bamf-3.Bamf.Application */
    connect(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    connect_after(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    emit(sigName: "desktop-file-updated", object: string): void
    connect(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    emit(sigName: "window-added", object: Window): void
    connect(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    emit(sigName: "window-removed", object: Window): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Application) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
interface Control_ConstructProps extends GObject.Object_ConstructProps {
}
class Control {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Control */
    create_local_desktop_file(application: Application): void
    insert_desktop_file(desktop_file: string): void
    register_application_for_pid(desktop_file: string, pid: number): void
    set_approver_behavior(behavior: number): void
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
    connect(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Control
    static $gtype: GObject.Type
}
interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}
class Matcher {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Matcher */
    application_is_running(desktop_file: string): boolean
    /**
     * Used to fetch the active #BamfApplication.
     */
    get_active_application(): Application
    /**
     * Used to fetch the active #BamfWindow.
     */
    get_active_window(): Window
    get_application_for_desktop_file(desktop_file_path: string, create_if_not_found: boolean): Application
    /**
     * Used to fetch the #BamfApplication containing the passed window.
     * @param window The window to look for
     */
    get_application_for_window(window: Window): Application
    /**
     * Used to fetch the #BamfApplication containing the passed xid.
     * @param xid The XID to search for
     */
    get_application_for_xid(xid: number): Application
    /**
     * Used to fetch all #BamfApplication's running or not. Application authors who wish to only
     * see running applications should use bamf_matcher_get_running_applications instead. The reason
     * this method is needed is bamf will occasionally track applications which are not currently
     * running for nefarious purposes.
     */
    get_applications(): Application[]
    /**
     * Used to fetch all #BamfApplication's which are running.
     */
    get_running_applications(): Application[]
    /**
     * Used to fetch all #BamfView's representing tabs. Currently unused.
     */
    get_tabs(): Tab[]
    /**
     * Used to fetch the #BamfWindow that wraps the given `window`.
     * @param xid The X11 Window ID to search for
     */
    get_window_for_xid(xid: number): Window
    /**
     * Used to fetch all windows that BAMF knows about in the requested screen,
     * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
     * then it fetches all the available windows in all monitors.
     * @param monitor the monitor you want the stack from, negative value to get all
     */
    get_window_stack_for_monitor(monitor: number): Window[]
    /**
     * Used to fetch all windows that BAMF knows about.
     */
    get_windows(): Window[]
    /**
     * Used to fetch all xid's associated with an application. Useful for performing window
     * @param desktop_file 
     */
    get_xids_for_application(desktop_file: string): number[]
    /**
     * Used to effect how bamf performs matching. Desktop files passed to this method will
     * be prefered by bamf to system desktop files.
     * @param favorites an array of strings, each containing an absolute path to a .desktop file
     */
    register_favorites(favorites: string[]): void
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
    /* Signals of Bamf-3.Bamf.Matcher */
    connect(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    connect_after(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    emit(sigName: "active-application-changed", object: Application, p0: Application): void
    connect(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    connect_after(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    emit(sigName: "active-window-changed", object: Window, p0: Window): void
    connect(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    connect_after(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    emit(sigName: "stacking-order-changed"): void
    connect(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    connect_after(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    emit(sigName: "view-closed", object: View): void
    connect(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    connect_after(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    emit(sigName: "view-opened", object: View): void
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
    connect(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Matcher_ConstructProps)
    _init (config?: Matcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
     */
    static get_default(): Matcher
    static $gtype: GObject.Type
}
interface Tab_ConstructProps extends View_ConstructProps {
}
class Tab {
    /* Properties of Bamf-3.Bamf.Tab */
    readonly desktop_id: string
    readonly is_foreground_tab: boolean
    readonly location: string
    readonly xid: number
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Tab */
    /**
     * Closes the selected `self` tab.
     */
    close(): boolean
    /**
     * Returns the desktop file for the tab.
     */
    get_desktop_name(): string
    get_is_foreground_tab(): boolean
    get_location(): string
    /**
     * The desktop file for the tab.
     */
    get_xid(): number
    /**
     * Selects the `self` tab in the parent window.
     */
    raise(): boolean
    request_preview(callback: TabPreviewReadyCallback): void
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    get_name(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    get_view_type(): string
    has_child(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    is_active(): boolean
    /**
     * Determines if the view is closed or not.
     */
    is_closed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    is_starting(): boolean
    is_sticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    is_urgent(): boolean
    is_user_visible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.Tab */
    /**
     * Returns the desktop file for the tab.
     */
    vfunc_get_desktop_name(): string
    vfunc_get_is_foreground_tab(): boolean
    vfunc_get_location(): string
    /**
     * The desktop file for the tab.
     */
    vfunc_get_xid(): number
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    vfunc_get_children(): View[]
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    vfunc_get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    vfunc_is_active(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    vfunc_is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    vfunc_is_starting(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    vfunc_view_type(): string
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
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Tab) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tab_ConstructProps)
    _init (config?: Tab_ConstructProps): void
    static $gtype: GObject.Type
}
interface View_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class View {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    get_name(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    get_view_type(): string
    has_child(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    is_active(): boolean
    /**
     * Determines if the view is closed or not.
     */
    is_closed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    is_starting(): boolean
    is_sticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    is_urgent(): boolean
    is_user_visible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    vfunc_get_children(): View[]
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    vfunc_get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    vfunc_is_active(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    vfunc_is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    vfunc_is_starting(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    vfunc_view_type(): string
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
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: View) => void)): number
    connect_after(sigName: "closed", callback: (($obj: View) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    static $gtype: GObject.Type
}
interface Window_ConstructProps extends View_ConstructProps {
}
class Window {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Window */
    get_monitor(): number
    get_pid(): number
    get_transient(): Window
    get_utf8_prop(prop: string): string
    get_window_type(): WindowType
    get_xid(): number
    last_active(): number
    maximized(): WindowMaximizationType
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    get_name(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    get_view_type(): string
    has_child(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    is_active(): boolean
    /**
     * Determines if the view is closed or not.
     */
    is_closed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    is_starting(): boolean
    is_sticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    is_urgent(): boolean
    is_user_visible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.Window */
    vfunc_get_monitor(): number
    vfunc_get_pid(): number
    vfunc_get_transient(): Window
    vfunc_get_utf8_prop(prop: string): string
    vfunc_get_window_type(): WindowType
    vfunc_get_xid(): number
    vfunc_last_active(): number
    vfunc_maximized(): WindowMaximizationType
    vfunc_maximized_changed(old_value: number, new_value: number): void
    vfunc_monitor_changed(old_value: number, new_value: number): void
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    vfunc_get_children(): View[]
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    vfunc_get_icon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    vfunc_is_active(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    vfunc_is_running(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    vfunc_is_starting(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    vfunc_view_type(): string
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
    /* Signals of Bamf-3.Bamf.Window */
    connect(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    connect_after(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    emit(sigName: "maximized-changed", object: number, p0: number): void
    connect(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    connect_after(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    emit(sigName: "monitor-changed", object: number, p0: number): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Window) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ApplicationClass {
    /* Fields of Bamf-3.Bamf.ApplicationClass */
    parent_class: ViewClass
    static name: string
}
class ApplicationPrivate {
    static name: string
}
abstract class ControlClass {
    /* Fields of Bamf-3.Bamf.ControlClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ControlPrivate {
    static name: string
}
abstract class MatcherClass {
    /* Fields of Bamf-3.Bamf.MatcherClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class MatcherPrivate {
    static name: string
}
abstract class TabClass {
    /* Fields of Bamf-3.Bamf.TabClass */
    parent_class: ViewClass
    get_desktop_name: (self: Tab) => string
    get_location: (self: Tab) => string
    get_xid: (self: Tab) => number
    get_is_foreground_tab: (self: Tab) => boolean
    static name: string
}
class TabPrivate {
    static name: string
}
abstract class ViewClass {
    /* Fields of Bamf-3.Bamf.ViewClass */
    parent_class: GObject.InitiallyUnownedClass
    get_children: (view: View) => View[]
    is_active: (view: View) => boolean
    is_running: (view: View) => boolean
    is_urgent: (view: View) => boolean
    is_user_visible: (view: View) => boolean
    get_name: (view: View) => string
    get_icon: (view: View) => string
    view_type: (view: View) => string
    set_path: (view: View, path: string) => void
    set_sticky: (view: View, value: boolean) => void
    click_behavior: (view: View) => ClickBehavior
    active_changed: (view: View, active: boolean) => void
    closed: (view: View) => void
    child_added: (view: View, child: View) => void
    child_removed: (view: View, child: View) => void
    running_changed: (view: View, running: boolean) => void
    urgent_changed: (view: View, urgent: boolean) => void
    user_visible_changed: (view: View, user_visible: boolean) => void
    name_changed: (view: View, old_name: string, new_name: string) => void
    icon_changed: (view: View, icon: string) => void
    child_moved: (view: View, child: View) => void
    is_starting: (view: View) => boolean
    starting_changed: (view: View, starting: boolean) => void
    static name: string
}
class ViewPrivate {
    static name: string
}
abstract class WindowClass {
    /* Fields of Bamf-3.Bamf.WindowClass */
    parent_class: ViewClass
    get_transient: (self: Window) => Window
    get_window_type: (self: Window) => WindowType
    get_xid: (self: Window) => number
    get_pid: (self: Window) => number
    get_monitor: (self: Window) => number
    get_utf8_prop: (self: Window, prop: string) => string
    maximized: (self: Window) => WindowMaximizationType
    last_active: (self: Window) => number
    monitor_changed: (window: Window, old_value: number, new_value: number) => void
    maximized_changed: (window: Window, old_value: number, new_value: number) => void
    static name: string
}
class WindowPrivate {
    static name: string
}
}
export default Bamf;