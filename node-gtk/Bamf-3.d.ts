/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bamf-3
 */

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
    (self: Tab, previewData: string): void
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
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Application */
    /**
     * Used to fetch the bus name and the object path of the remote application menu.
     */
    getApplicationMenu(): [ /* returnType */ boolean, /* name */ string, /* objectPath */ string ]
    getApplicationType(): string
    /**
     * Used to fetch the path to the .desktop file associated with the passed application. If
     * none exists, the result is NULL.
     */
    getDesktopFile(): string
    getFocusableChild(): View
    /**
     * Used to discover whether the application wants menu stubs shown.
     */
    getShowMenuStubs(): boolean
    getSupportedMimeTypes(): string[]
    /**
     * Used to fetch the application contains a Window with given `xid`.
     * @param xid an X11 Window ID
     */
    getWindowForXid(xid: number): Window
    /**
     * Used to fetch all #BamfWindow's associated with the passed #BamfApplication.
     */
    getWindows(): Window[]
    /**
     * Used to fetch all #BamfWindow's xids associated with the passed #BamfApplication.
     */
    getXids(): number[]
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    getIcon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    getName(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    getViewType(): string
    hasChild(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    isActive(): boolean
    /**
     * Determines if the view is closed or not.
     */
    isClosed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    isRunning(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    isStarting(): boolean
    isSticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    isUrgent(): boolean
    isUserVisible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peekChildren(): View[]
    setSticky(value: boolean): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.Application */
    connect(sigName: "desktop-file-updated", callback: ((object: string) => void)): number
    on(sigName: "desktop-file-updated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "desktop-file-updated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "desktop-file-updated", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "desktop-file-updated", object: string): void
    connect(sigName: "window-added", callback: ((object: Window) => void)): number
    on(sigName: "window-added", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (object: Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-added", object: Window): void
    connect(sigName: "window-removed", callback: ((object: Window) => void)): number
    on(sigName: "window-removed", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (object: Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-removed", object: Window): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
interface Control_ConstructProps extends GObject.Object_ConstructProps {
}
class Control {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Control */
    createLocalDesktopFile(application: Application): void
    insertDesktopFile(desktopFile: string): void
    registerApplicationForPid(desktopFile: string, pid: number): void
    setApproverBehavior(behavior: number): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Control
    static $gtype: GObject.Type
}
interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}
class Matcher {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Matcher */
    applicationIsRunning(desktopFile: string): boolean
    /**
     * Used to fetch the active #BamfApplication.
     */
    getActiveApplication(): Application
    /**
     * Used to fetch the active #BamfWindow.
     */
    getActiveWindow(): Window
    getApplicationForDesktopFile(desktopFilePath: string, createIfNotFound: boolean): Application
    /**
     * Used to fetch the #BamfApplication containing the passed window.
     * @param window The window to look for
     */
    getApplicationForWindow(window: Window): Application
    /**
     * Used to fetch the #BamfApplication containing the passed xid.
     * @param xid The XID to search for
     */
    getApplicationForXid(xid: number): Application
    /**
     * Used to fetch all #BamfApplication's running or not. Application authors who wish to only
     * see running applications should use bamf_matcher_get_running_applications instead. The reason
     * this method is needed is bamf will occasionally track applications which are not currently
     * running for nefarious purposes.
     */
    getApplications(): Application[]
    /**
     * Used to fetch all #BamfApplication's which are running.
     */
    getRunningApplications(): Application[]
    /**
     * Used to fetch all #BamfView's representing tabs. Currently unused.
     */
    getTabs(): Tab[]
    /**
     * Used to fetch the #BamfWindow that wraps the given `window`.
     * @param xid The X11 Window ID to search for
     */
    getWindowForXid(xid: number): Window
    /**
     * Used to fetch all windows that BAMF knows about in the requested screen,
     * in stacking bottom-to-top order. If the `monitor` is set to a negative value,
     * then it fetches all the available windows in all monitors.
     * @param monitor the monitor you want the stack from, negative value to get all
     */
    getWindowStackForMonitor(monitor: number): Window[]
    /**
     * Used to fetch all windows that BAMF knows about.
     */
    getWindows(): Window[]
    /**
     * Used to fetch all xid's associated with an application. Useful for performing window
     * @param desktopFile 
     */
    getXidsForApplication(desktopFile: string): number[]
    /**
     * Used to effect how bamf performs matching. Desktop files passed to this method will
     * be prefered by bamf to system desktop files.
     * @param favorites an array of strings, each containing an absolute path to a .desktop file
     */
    registerFavorites(favorites: string[]): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.Matcher */
    connect(sigName: "active-application-changed", callback: ((object: Application, p0: Application) => void)): number
    on(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void): NodeJS.EventEmitter
    emit(sigName: "active-application-changed", object: Application, p0: Application): void
    connect(sigName: "active-window-changed", callback: ((object: Window, p0: Window) => void)): number
    on(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void): NodeJS.EventEmitter
    emit(sigName: "active-window-changed", object: Window, p0: Window): void
    connect(sigName: "stacking-order-changed", callback: (() => void)): number
    on(sigName: "stacking-order-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stacking-order-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stacking-order-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stacking-order-changed"): void
    connect(sigName: "view-closed", callback: ((object: View) => void)): number
    on(sigName: "view-closed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-closed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-closed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "view-closed", object: View): void
    connect(sigName: "view-opened", callback: ((object: View) => void)): number
    on(sigName: "view-opened", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-opened", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-opened", callback: (object: View) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Matcher_ConstructProps)
    _init (config?: Matcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Returns the default matcher. This matcher is owned by bamf and shared between other callers.
     */
    static getDefault(): Matcher
    static $gtype: GObject.Type
}
interface Tab_ConstructProps extends View_ConstructProps {
}
class Tab {
    /* Properties of Bamf-3.Bamf.Tab */
    readonly desktopId: string
    readonly isForegroundTab: boolean
    readonly location: string
    readonly xid: number
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Tab */
    /**
     * Closes the selected `self` tab.
     */
    close(): boolean
    /**
     * Returns the desktop file for the tab.
     */
    getDesktopName(): string
    getIsForegroundTab(): boolean
    getLocation(): string
    /**
     * The desktop file for the tab.
     */
    getXid(): number
    /**
     * Selects the `self` tab in the parent window.
     */
    raise(): boolean
    requestPreview(callback: TabPreviewReadyCallback): void
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    getIcon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    getName(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    getViewType(): string
    hasChild(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    isActive(): boolean
    /**
     * Determines if the view is closed or not.
     */
    isClosed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    isRunning(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    isStarting(): boolean
    isSticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    isUrgent(): boolean
    isUserVisible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peekChildren(): View[]
    setSticky(value: boolean): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-foreground-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-foreground-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly userVisible: boolean
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    getIcon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    getName(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    getViewType(): string
    hasChild(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    isActive(): boolean
    /**
     * Determines if the view is closed or not.
     */
    isClosed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    isRunning(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    isStarting(): boolean
    isSticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    isUrgent(): boolean
    isUserVisible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peekChildren(): View[]
    setSticky(value: boolean): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    parent: GObject.InitiallyUnowned
    priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Window */
    getMonitor(): number
    getPid(): number
    getTransient(): Window
    getUtf8Prop(prop: string): string
    getWindowType(): WindowType
    getXid(): number
    lastActive(): number
    maximized(): WindowMaximizationType
    /* Methods of Bamf-3.Bamf.View */
    /**
     * Note: Makes sever dbus calls the first time this is called on a view. Dbus messaging is reduced afterwards.
     */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    /**
     * Gets the icon of a view. This icon is used to visually represent the view.
     */
    getIcon(): string
    /**
     * Gets the name of a view. This name is a short name best used to represent the view with text.
     */
    getName(): string
    /**
     * The view type of a window is a short string used to represent all views of the same class. These
     * descriptions should not be used to do casting as they are not considered stable.
     */
    getViewType(): string
    hasChild(child: View): boolean
    /**
     * Determines if the view is currently active and focused by the user. Useful for an active window indicator.
     */
    isActive(): boolean
    /**
     * Determines if the view is closed or not.
     */
    isClosed(): boolean
    /**
     * Determines if the view is currently running. Useful for a running window indicator.
     */
    isRunning(): boolean
    /**
     * Determines if the view is currently starting. Useful for the startup animation.
     */
    isStarting(): boolean
    isSticky(): boolean
    /**
     * Determines if the view is currently requiring attention. Useful for a running window indicator.
     */
    isUrgent(): boolean
    isUserVisible(): boolean
    /**
     * Note: Makes sever dbus calls the first time this is called on a view.
     * Dbus messaging is reduced afterwards.
     */
    peekChildren(): View[]
    setSticky(value: boolean): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.Window */
    connect(sigName: "maximized-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "maximized-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximized-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximized-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "maximized-changed", object: number, p0: number): void
    connect(sigName: "monitor-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "monitor-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-changed", object: number, p0: number): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ApplicationClass {
    /* Fields of Bamf-3.Bamf.ApplicationClass */
    parentClass: ViewClass
    static name: string
}
class ApplicationPrivate {
    static name: string
}
abstract class ControlClass {
    /* Fields of Bamf-3.Bamf.ControlClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class ControlPrivate {
    static name: string
}
abstract class MatcherClass {
    /* Fields of Bamf-3.Bamf.MatcherClass */
    parentClass: GObject.ObjectClass
    static name: string
}
class MatcherPrivate {
    static name: string
}
abstract class TabClass {
    /* Fields of Bamf-3.Bamf.TabClass */
    parentClass: ViewClass
    getDesktopName: (self: Tab) => string
    getLocation: (self: Tab) => string
    getXid: (self: Tab) => number
    getIsForegroundTab: (self: Tab) => boolean
    static name: string
}
class TabPrivate {
    static name: string
}
abstract class ViewClass {
    /* Fields of Bamf-3.Bamf.ViewClass */
    parentClass: GObject.InitiallyUnownedClass
    getChildren: (view: View) => View[]
    isActive: (view: View) => boolean
    isRunning: (view: View) => boolean
    isUrgent: (view: View) => boolean
    isUserVisible: (view: View) => boolean
    getName: (view: View) => string
    getIcon: (view: View) => string
    viewType: (view: View) => string
    setPath: (view: View, path: string) => void
    setSticky: (view: View, value: boolean) => void
    clickBehavior: (view: View) => ClickBehavior
    activeChanged: (view: View, active: boolean) => void
    closed: (view: View) => void
    childAdded: (view: View, child: View) => void
    childRemoved: (view: View, child: View) => void
    runningChanged: (view: View, running: boolean) => void
    urgentChanged: (view: View, urgent: boolean) => void
    userVisibleChanged: (view: View, userVisible: boolean) => void
    nameChanged: (view: View, oldName: string, newName: string) => void
    iconChanged: (view: View, icon: string) => void
    childMoved: (view: View, child: View) => void
    isStarting: (view: View) => boolean
    startingChanged: (view: View, starting: boolean) => void
    static name: string
}
class ViewPrivate {
    static name: string
}
abstract class WindowClass {
    /* Fields of Bamf-3.Bamf.WindowClass */
    parentClass: ViewClass
    getTransient: (self: Window) => Window
    getWindowType: (self: Window) => WindowType
    getXid: (self: Window) => number
    getPid: (self: Window) => number
    getMonitor: (self: Window) => number
    getUtf8Prop: (self: Window, prop: string) => string
    maximized: (self: Window) => WindowMaximizationType
    lastActive: (self: Window) => number
    monitorChanged: (window: Window, oldValue: number, newValue: number) => void
    maximizedChanged: (window: Window, oldValue: number, newValue: number) => void
    static name: string
}
class WindowPrivate {
    static name: string
}
}
export default Bamf;