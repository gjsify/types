/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkWayland-4.0
 */

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

export namespace GdkWayland {

/**
 * Callback that gets called when the handle for a surface has been
 * obtained from the Wayland compositor.
 * 
 * This callback is used in [method`GdkWayland`.WaylandToplevel.export_handle].
 * 
 * The `handle` can be passed to other processes, for the purpose of
 * marking surfaces as transient for out-of-process surfaces.
 */
interface WaylandToplevelExported {
    (toplevel: WaylandToplevel, handle: string): void
}
interface WaylandDevice_ConstructProps extends Gdk.Device_ConstructProps {
}
class WaylandDevice {
    /* Properties of Gdk-4.0.Gdk.Device */
    /**
     * Whether Caps Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly capsLockState: boolean
    /**
     * The direction of the current layout.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly direction: Pango.Direction
    /**
     * Whether the device has both right-to-left and left-to-right layouts.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly hasBidiLayouts: boolean
    /**
     * The current modifier state of the device.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly modifierState: Gdk.ModifierType
    /**
     * Number of axes in the device.
     */
    readonly nAxes: number
    /**
     * Whether Num Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly numLockState: boolean
    /**
     * Whether Scroll Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly scrollLockState: boolean
    /**
     * `GdkSeat` of this device.
     */
    seat: Gdk.Seat
    /**
     * The `GdkDeviceTool` that is currently used with this device.
     */
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandDevice */
    /**
     * Returns the `/dev/input/event*` path of this device.
     * 
     * For `GdkDevice`s that possibly coalesce multiple hardware
     * devices (eg. mouse, keyboard, touch,...), this function
     * will return %NULL.
     * 
     * This is most notably implemented for devices of type
     * %GDK_SOURCE_PEN, %GDK_SOURCE_TABLET_PAD.
     */
    getNodePath(): string | null
    /**
     * Returns the `xkb_keymap` of a `GdkDevice`.
     */
    getXkbKeymap(): object | null
    /* Methods of Gdk-4.0.Gdk.Device */
    /**
     * Retrieves whether the Caps Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getCapsLockState(): boolean
    /**
     * Retrieves the current tool for `device`.
     */
    getDeviceTool(): Gdk.DeviceTool | null
    /**
     * Returns the direction of effective layout of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     * 
     * The direction of a layout is the direction of the majority
     * of its symbols. See [func`Pango`.unichar_direction].
     */
    getDirection(): Pango.Direction
    /**
     * Returns the `GdkDisplay` to which `device` pertains.
     */
    getDisplay(): Gdk.Display
    /**
     * Determines whether the pointer follows device motion.
     * 
     * This is not meaningful for keyboard devices, which
     * don't have a pointer.
     */
    getHasCursor(): boolean
    /**
     * Retrieves the current modifier state of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     */
    getModifierState(): Gdk.ModifierType
    /**
     * The name of the device, suitable for showing in a user interface.
     */
    getName(): string
    /**
     * Retrieves whether the Num Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getNumLockState(): boolean
    /**
     * Retrieves the number of touch points associated to `device`.
     */
    getNumTouches(): number
    /**
     * Returns the product ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * See [method`Gdk`.Device.get_vendor_id] for more information.
     */
    getProductId(): string | null
    /**
     * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getScrollLockState(): boolean
    /**
     * Returns the `GdkSeat` the device belongs to.
     */
    getSeat(): Gdk.Seat
    /**
     * Determines the type of the device.
     */
    getSource(): Gdk.InputSource
    /**
     * Obtains the surface underneath `device,` returning the location of the
     * device in `win_x` and `win_y`.
     * 
     * Returns %NULL if the surface tree under `device` is not known to GDK
     * (for example, belongs to another application).
     */
    getSurfaceAtPosition(): [ /* returnType */ Gdk.Surface | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Returns the timestamp of the last activity for this device.
     * 
     * In practice, this means the timestamp of the last event that was
     * received from the OS for this device. (GTK may occasionally produce
     * events for a device that are not received from the OS, and will not
     * update the timestamp).
     */
    getTimestamp(): number
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
    getVendorId(): string | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
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
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * Emitted on pen/eraser devices whenever tools enter or leave proximity.
     */
    connect(sigName: "tool-changed", callback: ((tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandDevice_ConstructProps)
    _init (config?: WaylandDevice_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandDisplay_ConstructProps extends Gdk.Display_ConstructProps {
}
class WaylandDisplay {
    /* Properties of Gdk-4.0.Gdk.Display */
    /**
     * %TRUE if the display properly composites the alpha channel.
     */
    readonly composited: boolean
    /**
     * %TRUE if the display supports input shapes.
     */
    readonly inputShapes: boolean
    /**
     * %TRUE if the display supports an alpha channel.
     */
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandDisplay */
    /**
     * Retrieves the EGL display connection object for the given GDK display.
     */
    getEglDisplay(): object | null
    /**
     * Gets the startup notification ID for a Wayland display, or %NULL
     * if no ID has been defined.
     */
    getStartupNotificationId(): string | null
    /**
     * Returns %TRUE if the interface was found in the display
     * `wl_registry.global` handler.
     */
    queryRegistry(global: string): boolean
    /**
     * Sets the cursor theme for the given `display`.
     */
    setCursorTheme(name: string, size: number): void
    /**
     * Sets the startup notification ID for a display.
     * 
     * This is usually taken from the value of the `DESKTOP_STARTUP_ID`
     * environment variable, but in some cases (such as the application not
     * being launched using exec()) it can come from other sources.
     * 
     * The startup ID is also what is used to signal that the startup is
     * complete (for example, when opening a window or when calling
     * [method`Gdk`.Display.notify_startup_complete]).
     */
    setStartupNotificationId(startupId: string): void
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
    createGlContext(): Gdk.GLContext
    /**
     * Returns %TRUE if there is an ongoing grab on `device` for `display`.
     */
    deviceIsGrabbed(device: Gdk.Device): boolean
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
    getAppLaunchContext(): Gdk.AppLaunchContext
    /**
     * Gets the clipboard used for copy/paste operations.
     */
    getClipboard(): Gdk.Clipboard
    /**
     * Returns the default `GdkSeat` for this display.
     * 
     * Note that a display may not have a seat. In this case,
     * this function will return %NULL.
     */
    getDefaultSeat(): Gdk.Seat | null
    /**
     * Gets the monitor in which the largest area of `surface`
     * resides.
     * 
     * Returns a monitor close to `surface` if it is outside
     * of all monitors.
     */
    getMonitorAtSurface(surface: Gdk.Surface): Gdk.Monitor
    /**
     * Gets the list of monitors associated with this display.
     * 
     * Subsequent calls to this function will always return the
     * same list for the same display.
     * 
     * You can listen to the GListModel::items-changed signal on
     * this list to monitor changes to the monitor of this display.
     */
    getMonitors(): Gio.ListModel
    /**
     * Gets the name of the display.
     */
    getName(): string
    /**
     * Gets the clipboard used for the primary selection.
     * 
     * On backends where the primary clipboard is not supported natively,
     * GDK emulates this clipboard locally.
     */
    getPrimaryClipboard(): Gdk.Clipboard
    /**
     * Retrieves a desktop-wide setting such as double-click time
     * for the `display`.
     */
    getSetting(name: string, value: any): boolean
    /**
     * Finds out if the display has been closed.
     */
    isClosed(): boolean
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
    isComposited(): boolean
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
    isRgba(): boolean
    /**
     * Returns the list of seats known to `display`.
     */
    listSeats(): Gdk.Seat[]
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
     */
    mapKeycode(keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
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
     */
    mapKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK will call this function automatically for [class`Gtk`.Window]
     * with custom startup-notification identifier unless
     * [method`Gtk`.Window.set_auto_startup_notification]
     * is called to disable that feature.
     */
    notifyStartupComplete(startupId: string): void
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
    prepareGl(): boolean
    /**
     * Appends the given event onto the front of the event
     * queue for `display`.
     * 
     * This function is only useful in very special situations
     * and should not be used by applications.
     */
    putEvent(event: Gdk.Event): void
    /**
     * Returns %TRUE if the display supports input shapes.
     * 
     * This means that [method`Gdk`.Surface.set_input_region] can
     * be used to modify the input shape of surfaces on `display`.
     * 
     * On modern displays, this value is always %TRUE.
     */
    supportsInputShapes(): boolean
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
     */
    translateKey(keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumed */ Gdk.ModifierType | null ]
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Display */
    /**
     * Emitted when the connection to the windowing system for `display` is closed.
     */
    connect(sigName: "closed", callback: ((isError: boolean) => void)): number
    on(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (isError: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "closed", isError: boolean): void
    /**
     * Emitted when the connection to the windowing system for `display` is opened.
     */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    /**
     * Emitted whenever a new seat is made known to the windowing system.
     */
    connect(sigName: "seat-added", callback: ((seat: Gdk.Seat) => void)): number
    on(sigName: "seat-added", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (seat: Gdk.Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    /**
     * Emitted whenever a seat is removed by the windowing system.
     */
    connect(sigName: "seat-removed", callback: ((seat: Gdk.Seat) => void)): number
    on(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    /**
     * Emitted whenever a setting changes its value.
     */
    connect(sigName: "setting-changed", callback: ((setting: string) => void)): number
    on(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (setting: string) => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-shapes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandDisplay_ConstructProps)
    _init (config?: WaylandDisplay_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandGLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
class WaylandGLContext {
    /* Properties of Gdk-4.0.Gdk.GLContext */
    /**
     * The allowed APIs.
     */
    allowedApis: Gdk.GLAPI
    /**
     * The API currently in use.
     */
    readonly api: Gdk.GLAPI
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    /**
     * Gets the allowed APIs set via gdk_gl_context_set_allowed_apis().
     */
    getAllowedApis(): Gdk.GLAPI
    /**
     * Gets the API currently in use.
     * 
     * If the renderer has not been realized yet, 0 is returned.
     */
    getApi(): Gdk.GLAPI
    /**
     * Retrieves whether the context is doing extra validations and runtime checking.
     * 
     * See [method`Gdk`.GLContext.set_debug_enabled].
     */
    getDebugEnabled(): boolean
    /**
     * Retrieves the display the `context` is created for
     */
    getDisplay(): Gdk.Display | null
    /**
     * Retrieves whether the context is forward-compatible.
     * 
     * See [method`Gdk`.GLContext.set_forward_compatible].
     */
    getForwardCompatible(): boolean
    /**
     * Retrieves required OpenGL version.
     * 
     * See [method`Gdk`.GLContext.set_required_version].
     */
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    /**
     * Used to retrieves the `GdkGLContext` that this `context` share data with.
     * 
     * As many contexts can share data now and no single shared context exists
     * anymore, this function has been deprecated and now always returns %NULL.
     */
    getSharedContext(): Gdk.GLContext | null
    /**
     * Retrieves the surface used by the `context`.
     */
    getSurface(): Gdk.Surface | null
    /**
     * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
     */
    getUseEs(): boolean
    /**
     * Retrieves the OpenGL version of the `context`.
     * 
     * The `context` must be realized prior to calling this function.
     */
    getVersion(): [ /* major */ number, /* minor */ number ]
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
    isLegacy(): boolean
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
     */
    isShared(other: Gdk.GLContext): boolean
    /**
     * Makes the `context` the current one.
     */
    makeCurrent(): void
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
     */
    setAllowedApis(apis: Gdk.GLAPI): void
    /**
     * Sets whether the `GdkGLContext` should perform extra validations and
     * runtime checking.
     * 
     * This is useful during development, but has additional overhead.
     * 
     * The `GdkGLContext` must not be realized or made current prior to
     * calling this function.
     */
    setDebugEnabled(enabled: boolean): void
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
     */
    setForwardCompatible(compatible: boolean): void
    /**
     * Sets the major and minor version of OpenGL to request.
     * 
     * Setting `major` and `minor` to zero will use the default values.
     * 
     * The `GdkGLContext` must not be realized or made current prior to calling
     * this function.
     */
    setRequiredVersion(major: number, minor: number): void
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
     */
    setUseEs(useEs: number): void
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
     */
    beginFrame(region: cairo.Region): void
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
    endFrame(): void
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
    getFrameRegion(): cairo.Region | null
    /**
     * Returns %TRUE if `context` is in the process of drawing to its surface.
     * 
     * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
     * may be effecting the contents of the `context'`s surface.
     */
    isInFrame(): boolean
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-apis", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::api", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandGLContext_ConstructProps)
    _init (config?: WaylandGLContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandMonitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
class WaylandMonitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
    /**
     * The connector name.
     */
    readonly connector: string
    /**
     * The geometry of the monitor.
     */
    readonly geometry: Gdk.Rectangle
    /**
     * The height of the monitor, in millimeters.
     */
    readonly heightMm: number
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
    readonly refreshRate: number
    /**
     * The scale factor.
     */
    readonly scaleFactor: number
    /**
     * The subpixel layout.
     */
    readonly subpixelLayout: Gdk.SubpixelLayout
    /**
     * Whether the object is still valid.
     */
    readonly valid: boolean
    /**
     * The width of the monitor, in millimeters.
     */
    readonly widthMm: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Monitor */
    /**
     * Gets the name of the monitor's connector, if available.
     */
    getConnector(): string | null
    /**
     * Gets the display that this monitor belongs to.
     */
    getDisplay(): Gdk.Display
    /**
     * Retrieves the size and position of the monitor within the
     * display coordinate space.
     * 
     * The returned geometry is in  ”application pixels”, not in
     * ”device pixels” (see [method`Gdk`.Monitor.get_scale_factor]).
     */
    getGeometry(): /* geometry */ Gdk.Rectangle
    /**
     * Gets the height in millimeters of the monitor.
     */
    getHeightMm(): number
    /**
     * Gets the name or PNP ID of the monitor's manufacturer.
     * 
     * Note that this value might also vary depending on actual
     * display backend.
     * 
     * The PNP ID registry is located at
     * [https://uefi.org/pnp_id_list](https://uefi.org/pnp_id_list).
     */
    getManufacturer(): string | null
    /**
     * Gets the string identifying the monitor model, if available.
     */
    getModel(): string | null
    /**
     * Gets the refresh rate of the monitor, if available.
     * 
     * The value is in milli-Hertz, so a refresh rate of 60Hz
     * is returned as 60000.
     */
    getRefreshRate(): number
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
    getScaleFactor(): number
    /**
     * Gets information about the layout of red, green and blue
     * primaries for pixels.
     */
    getSubpixelLayout(): Gdk.SubpixelLayout
    /**
     * Gets the width in millimeters of the monitor.
     */
    getWidthMm(): number
    /**
     * Returns %TRUE if the `monitor` object corresponds to a
     * physical monitor.
     * 
     * The `monitor` becomes invalid when the physical monitor
     * is unplugged or removed.
     */
    isValid(): boolean
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Monitor */
    /**
     * Emitted when the output represented by `monitor` gets disconnected.
     */
    connect(sigName: "invalidate", callback: (() => void)): number
    on(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: () => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandMonitor_ConstructProps)
    _init (config?: WaylandMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandPopup_ConstructProps extends WaylandSurface_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Popup */
    /**
     * Whether to hide on outside clicks.
     */
    autohide?: boolean
    /**
     * The parent surface.
     */
    parent?: Gdk.Surface
}
class WaylandPopup {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Gdk.Cursor
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
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    createCairoContext(): Gdk.CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): Gdk.GLContext
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
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): Gdk.VulkanContext
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
    getCursor(): Gdk.Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Gdk.Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): Gdk.FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
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
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
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
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Gdk.Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Gdk.Device, cursor: Gdk.Cursor): void
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
     */
    setInputRegion(region: cairo.Region): void
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
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Popup */
    /**
     * Returns whether this popup is set to hide on outside clicks.
     */
    getAutohide(): boolean
    /**
     * Returns the parent surface of a popup.
     */
    getParent(): Gdk.Surface | null
    /**
     * Obtains the position of the popup relative to its parent.
     */
    getPositionX(): number
    /**
     * Obtains the position of the popup relative to its parent.
     */
    getPositionY(): number
    /**
     * Gets the current popup rectangle anchor.
     * 
     * The value returned may change after calling [method`Gdk`.Popup.present],
     * or after the [signal`Gdk`.Surface::layout] signal is emitted.
     */
    getRectAnchor(): Gdk.Gravity
    /**
     * Gets the current popup surface anchor.
     * 
     * The value returned may change after calling [method`Gdk`.Popup.present],
     * or after the [signal`Gdk`.Surface::layout] signal is emitted.
     */
    getSurfaceAnchor(): Gdk.Gravity
    /**
     * Present `popup` after having processed the `GdkPopupLayout` rules.
     * 
     * If the popup was previously now showing, it will be showed,
     * otherwise it will change position according to `layout`.
     * 
     * After calling this function, the result should be handled in response
     * to the [signal`GdkSurface:`:layout] signal being emitted. The resulting
     * popup position can be queried using [method`Gdk`.Popup.get_position_x],
     * [method`Gdk`.Popup.get_position_y], and the resulting size will be sent as
     * parameters in the layout signal. Use [method`Gdk`.Popup.get_rect_anchor]
     * and [method`Gdk`.Popup.get_surface_anchor] to get the resulting anchors.
     * 
     * Presenting may fail, for example if the `popup` is set to autohide
     * and is immediately hidden upon being presented. If presenting failed,
     * the [signal`Gdk`.Surface::layout] signal will not me emitted.
     */
    present(width: number, height: number, layout: Gdk.PopupLayout): boolean
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandPopup_ConstructProps)
    _init (config?: WaylandPopup_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandSeat_ConstructProps extends Gdk.Seat_ConstructProps {
}
class WaylandSeat {
    /* Fields of Gdk-4.0.Gdk.Seat */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Seat */
    /**
     * Returns the capabilities this `GdkSeat` currently has.
     */
    getCapabilities(): Gdk.SeatCapabilities
    /**
     * Returns the devices that match the given capabilities.
     */
    getDevices(capabilities: Gdk.SeatCapabilities): Gdk.Device[]
    /**
     * Returns the `GdkDisplay` this seat belongs to.
     */
    getDisplay(): Gdk.Display
    /**
     * Returns the device that routes keyboard events.
     */
    getKeyboard(): Gdk.Device | null
    /**
     * Returns the device that routes pointer events.
     */
    getPointer(): Gdk.Device | null
    /**
     * Returns all `GdkDeviceTools` that are known to the application.
     */
    getTools(): Gdk.DeviceTool[]
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Seat */
    /**
     * Emitted when a new input device is related to this seat.
     */
    connect(sigName: "device-added", callback: ((device: Gdk.Device) => void)): number
    on(sigName: "device-added", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Gdk.Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Gdk.Device): void
    /**
     * Emitted when an input device is removed (e.g. unplugged).
     */
    connect(sigName: "device-removed", callback: ((device: Gdk.Device) => void)): number
    on(sigName: "device-removed", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Gdk.Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Gdk.Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Gdk.Device): void
    /**
     * Emitted whenever a new tool is made known to the seat.
     * 
     * The tool may later be assigned to a device (i.e. on
     * proximity with a tablet). The device will emit the
     * [signal`Gdk`.Device::tool-changed] signal accordingly.
     * 
     * A same tool may be used by several devices.
     */
    connect(sigName: "tool-added", callback: ((tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-added", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-added", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-added", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-added", tool: Gdk.DeviceTool): void
    /**
     * Emitted whenever a tool is no longer known to this `seat`.
     */
    connect(sigName: "tool-removed", callback: ((tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-removed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-removed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-removed", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-removed", tool: Gdk.DeviceTool): void
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
    constructor (config?: WaylandSeat_ConstructProps)
    _init (config?: WaylandSeat_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandSurface_ConstructProps extends Gdk.Surface_ConstructProps {
}
class WaylandSurface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Gdk.Cursor
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
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    createCairoContext(): Gdk.CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): Gdk.GLContext
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
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): Gdk.VulkanContext
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
    getCursor(): Gdk.Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Gdk.Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): Gdk.FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
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
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
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
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Gdk.Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Gdk.Device, cursor: Gdk.Cursor): void
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
     */
    setInputRegion(region: cairo.Region): void
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
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandSurface_ConstructProps)
    _init (config?: WaylandSurface_ConstructProps): void
    static $gtype: GObject.Type
}
interface WaylandToplevel_ConstructProps extends WaylandSurface_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Toplevel */
    /**
     * Whether the window manager should add decorations.
     */
    decorated?: boolean
    /**
     * Whether the window manager should allow to close the surface.
     */
    deletable?: boolean
    /**
     * The fullscreen mode of the surface.
     */
    fullscreenMode?: Gdk.FullscreenMode
    /**
     * A list of textures to use as icon.
     */
    iconList?: object
    /**
     * Whether the surface is modal.
     */
    modal?: boolean
    /**
     * The startup ID of the surface.
     * 
     * See [class`Gdk`.AppLaunchContext] for more information about
     * startup feedback.
     */
    startupId?: string
    /**
     * The title of the surface.
     */
    title?: string
    /**
     * The transient parent of the surface.
     */
    transientFor?: Gdk.Surface
}
class WaylandToplevel {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Gdk.Cursor
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
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Properties of Gdk-4.0.Gdk.Toplevel */
    /**
     * Whether the window manager should add decorations.
     */
    decorated: boolean
    /**
     * Whether the window manager should allow to close the surface.
     */
    deletable: boolean
    /**
     * The fullscreen mode of the surface.
     */
    fullscreenMode: Gdk.FullscreenMode
    /**
     * A list of textures to use as icon.
     */
    iconList: object
    /**
     * Whether the surface is modal.
     */
    modal: boolean
    /**
     * Whether the surface should inhibit keyboard shortcuts.
     */
    readonly shortcutsInhibited: boolean
    /**
     * The startup ID of the surface.
     * 
     * See [class`Gdk`.AppLaunchContext] for more information about
     * startup feedback.
     */
    startupId: string
    /**
     * The state of the toplevel.
     */
    readonly state: Gdk.ToplevelState
    /**
     * The title of the surface.
     */
    title: string
    /**
     * The transient parent of the surface.
     */
    transientFor: Gdk.Surface
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkWayland-4.0.GdkWayland.WaylandToplevel */
    /**
     * Asynchronously obtains a handle for a surface that can be passed
     * to other processes.
     * 
     * When the handle has been obtained, `callback` will be called.
     * 
     * It is an error to call this function on a surface that is already
     * exported.
     * 
     * When the handle is no longer needed, [method`GdkWayland`.WaylandToplevel.unexport_handle]
     * should be called to clean up resources.
     * 
     * The main purpose for obtaining a handle is to mark a surface
     * from another surface as transient for this one, see
     * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     */
    exportHandle(callback: WaylandToplevelExported): boolean
    /**
     * Sets the application id on a `GdkToplevel`.
     */
    setApplicationId(applicationId: string): void
    /**
     * Marks `toplevel` as transient for the surface to which the given
     * `parent_handle_str` refers.
     * 
     * Typically, the handle will originate from a
     * [method`GdkWayland`.WaylandToplevel.export_handle] call in another process.
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     */
    setTransientForExported(parentHandleStr: string): boolean
    /**
     * Destroys the handle that was obtained with
     * gdk_wayland_toplevel_export_handle().
     * 
     * It is an error to call this function on a surface that
     * does not have a handle.
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     */
    unexportHandle(): void
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
    createCairoContext(): Gdk.CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): Gdk.GLContext
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
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): Gdk.VulkanContext
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
    getCursor(): Gdk.Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Gdk.Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): Gdk.FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
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
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
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
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Gdk.Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Gdk.Device, cursor: Gdk.Cursor): void
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
     */
    setInputRegion(region: cairo.Region): void
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
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watchClosure(closure: Function): void
    /* Methods of Gdk-4.0.Gdk.Toplevel */
    /**
     * Begins an interactive move operation.
     * 
     * You might use this function to implement draggable titlebars.
     */
    beginMove(device: Gdk.Device, button: number, x: number, y: number, timestamp: number): void
    /**
     * Begins an interactive resize operation.
     * 
     * You might use this function to implement a “window resize grip.”
     */
    beginResize(edge: Gdk.SurfaceEdge, device: Gdk.Device | null, button: number, x: number, y: number, timestamp: number): void
    /**
     * Sets keyboard focus to `surface`.
     * 
     * In most cases, [method`Gtk`.Window.present_with_time] should be
     * used on a [class`Gtk`.Window], rather than calling this function.
     */
    focus(timestamp: number): void
    /**
     * Gets the bitwise or of the currently active surface state flags,
     * from the `GdkToplevelState` enumeration.
     */
    getState(): Gdk.ToplevelState
    /**
     * Requests that the `toplevel` inhibit the system shortcuts.
     * 
     * This is asking the desktop environment/windowing system to let all
     * keyboard events reach the surface, as long as it is focused, instead
     * of triggering system actions.
     * 
     * If granted, the rerouting remains active until the default shortcuts
     * processing is restored with [method`Gdk`.Toplevel.restore_system_shortcuts],
     * or the request is revoked by the desktop environment, windowing system
     * or the user.
     * 
     * A typical use case for this API is remote desktop or virtual machine
     * viewers which need to inhibit the default system keyboard shortcuts
     * so that the remote session or virtual host gets those instead of the
     * local environment.
     * 
     * The windowing system or desktop environment may ask the user to grant
     * or deny the request or even choose to ignore the request entirely.
     * 
     * The caller can be notified whenever the request is granted or revoked
     * by listening to the [property`Gdk`.Toplevel:shortcuts-inhibited] property.
     */
    inhibitSystemShortcuts(event?: Gdk.Event | null): void
    /**
     * Asks to lower the `toplevel` below other windows.
     * 
     * The windowing system may choose to ignore the request.
     */
    lower(): boolean
    /**
     * Asks to minimize the `toplevel`.
     * 
     * The windowing system may choose to ignore the request.
     */
    minimize(): boolean
    /**
     * Present `toplevel` after having processed the `GdkToplevelLayout` rules.
     * 
     * If the toplevel was previously not showing, it will be showed,
     * otherwise it will change layout according to `layout`.
     * 
     * GDK may emit the [signal`Gdk`.Toplevel::compute-size] signal to let
     * the user of this toplevel compute the preferred size of the toplevel
     * surface.
     * 
     * Presenting is asynchronous and the specified layout parameters are not
     * guaranteed to be respected.
     */
    present(layout: Gdk.ToplevelLayout): void
    /**
     * Restore default system keyboard shortcuts which were previously
     * inhibited.
     * 
     * This undoes the effect of [method`Gdk`.Toplevel.inhibit_system_shortcuts].
     */
    restoreSystemShortcuts(): void
    /**
     * Sets the toplevel to be decorated.
     * 
     * Setting `decorated` to %FALSE hints the desktop environment
     * that the surface has its own, client-side decorations and
     * does not need to have window decorations added.
     */
    setDecorated(decorated: boolean): void
    /**
     * Sets the toplevel to be deletable.
     * 
     * Setting `deletable` to %TRUE hints the desktop environment
     * that it should offer the user a way to close the surface.
     */
    setDeletable(deletable: boolean): void
    /**
     * Sets a list of icons for the surface.
     * 
     * One of these will be used to represent the surface in iconic form.
     * The icon may be shown in window lists or task bars. Which icon
     * size is shown depends on the window manager. The window manager
     * can scale the icon but setting several size icons can give better
     * image quality.
     * 
     * Note that some platforms don't support surface icons.
     */
    setIconList(surfaces: Gdk.Texture[]): void
    /**
     * Sets the toplevel to be modal.
     * 
     * The application can use this hint to tell the
     * window manager that a certain surface has modal
     * behaviour. The window manager can use this information
     * to handle modal surfaces in a special way.
     * 
     * You should only use this on surfaces for which you have
     * previously called [method`Gdk`.Toplevel.set_transient_for].
     */
    setModal(modal: boolean): void
    /**
     * Sets the startup notification ID.
     * 
     * When using GTK, typically you should use
     * [method`Gtk`.Window.set_startup_id] instead of this
     * low-level function.
     */
    setStartupId(startupId: string): void
    /**
     * Sets the title of a toplevel surface.
     * 
     * The title maybe be displayed in the titlebar,
     * in lists of windows, etc.
     */
    setTitle(title: string): void
    /**
     * Sets a transient-for parent.
     * 
     * Indicates to the window manager that `surface` is a transient
     * dialog associated with the application surface `parent`. This
     * allows the window manager to do things like center `surface`
     * on `parent` and keep `surface` above `parent`.
     * 
     * See [method`Gtk`.Window.set_transient_for] if you’re using
     * [class`Gtk`.Window] or [class`Gtk`.Dialog].
     */
    setTransientFor(parent: Gdk.Surface): void
    /**
     * Asks the windowing system to show the window menu.
     * 
     * The window menu is the menu shown when right-clicking the titlebar
     * on traditional windows managed by the window manager. This is useful
     * for windows using client-side decorations, activating it with a
     * right-click on the window decorations.
     */
    showWindowMenu(event: Gdk.Event): boolean
    /**
     * Returns whether the desktop environment supports
     * tiled window states.
     */
    supportsEdgeConstraints(): boolean
    titlebarGesture(gesture: Gdk.TitlebarGesture): boolean
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdk-4.0.Gdk.Toplevel */
    /**
     * Emitted when the size for the surface needs to be computed, when
     * it is present.
     * 
     * It will normally be emitted during or after [method`Gdk`.Toplevel.present],
     * depending on the configuration received by the windowing system.
     * It may also be emitted at any other point in time, in response
     * to the windowing system spontaneously changing the configuration.
     * 
     * It is the responsibility of the toplevel user to handle this signal
     * and compute the desired size of the toplevel, given the information
     * passed via the [struct`Gdk`.ToplevelSize] object. Failing to do so
     * will result in an arbitrary size being used as a result.
     */
    connect(sigName: "compute-size", callback: (() => void)): number
    on(sigName: "compute-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "compute-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "compute-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "compute-size"): void
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shortcuts-inhibited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WaylandToplevel_ConstructProps)
    _init (config?: WaylandToplevel_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class WaylandDeviceClass {
    static name: string
}
abstract class WaylandDisplayClass {
    static name: string
}
abstract class WaylandGLContextClass {
    static name: string
}
abstract class WaylandMonitorClass {
    static name: string
}
abstract class WaylandSeatClass {
    static name: string
}
}
export default GdkWayland;