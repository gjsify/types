/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Retro-2
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-4.0';
import type Gsk from './Gsk-4.0';
import type Graphene from './Graphene-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Retro {

/**
 * Represents the axes of the analog sticks for the Libretro gamepad.
 */
enum AnalogId {
    /**
     * the X axis of an analog stick
     */
    X,
    /**
     * the Y axis of an analog stick
     */
    Y,
}
/**
 * Represents the analog sticks for the Libretro gamepad.
 */
enum AnalogIndex {
    /**
     * the left analog stick
     */
    LEFT,
    /**
     * the right analog stick
     */
    RIGHT,
}
/**
 * Represents the base types for Libretro controllers.
 */
enum ControllerType {
    /**
     * no controller
     */
    NONE,
    /**
     * a classic gamepad
     */
    JOYPAD,
    /**
     * a simple mouse
     */
    MOUSE,
    /**
     * a keyboard
     */
    KEYBOARD,
    /**
     * a lightgun
     */
    LIGHTGUN,
    /**
     * a gamepad with analog sticks
     */
    ANALOG,
    /**
     * a screen pointer
     */
    POINTER,
    /**
     * a mask to get the super type of a derived one
     */
    TYPE_MASK,
}
/**
 * Represents the buttons for the Libretro gamepad. The available buttons are
 * the same as the W3C Standard Gamepad, the SDL GameController and many other
 * modern standard gamepads, but the name of the buttons may differ. See the
 * <ulink url="https://w3c.github.io/gamepad/">W3C Gamepad Specification</ulink>
 * and the <ulink url="https://wiki.libsdl.org/CategoryGameController">SDL
 * GamepadController definition</ulink> for more information.
 */
enum JoypadId {
    /**
     * the bottom action button
     */
    B,
    /**
     * the left action button
     */
    Y,
    /**
     * the Select button
     */
    SELECT,
    /**
     * the Start button
     */
    START,
    /**
     * the up directional button
     */
    UP,
    /**
     * the down directional button
     */
    DOWN,
    /**
     * the left directional button
     */
    LEFT,
    /**
     * the right directional button
     */
    RIGHT,
    /**
     * the right action button
     */
    A,
    /**
     * the top action button
     */
    X,
    /**
     * the first left shoulder button
     */
    L,
    /**
     * the first right shoulder button
     */
    R,
    /**
     * the second left shoulder button
     */
    L2,
    /**
     * the second right shoulder button
     */
    R2,
    /**
     * the left thumb button
     */
    L3,
    /**
     * the right thumb button
     */
    R3,
}
/**
 * Represents the inputs for the Libretro lightgun.
 */
enum LightgunId {
    /**
     * the X axis of a lightgun
     */
    X,
    /**
     * the Y axis of a lightgun
     */
    Y,
    /**
     * the trigger of a lightgun
     */
    TRIGGER,
    /**
     * the cursor of a lightgun
     */
    CURSOR,
    /**
     * the turbo button of a lightgun
     */
    TURBO,
    /**
     * the pause button of a lightgun
     */
    PAUSE,
    /**
     * the start button of a lightgun
     */
    START,
}
/**
 * Represents the memory types for the Libretro core.
 */
enum MemoryType {
    /**
     * the save RAM
     */
    SAVE_RAM,
    /**
     * the real time clock
     */
    RTC,
    /**
     * the system RAM
     */
    SYSTEM_RAM,
    /**
     * the video RAM
     */
    VIDEO_RAM,
}
/**
 * Represents the inputs for the Libretro mouse.
 */
enum MouseId {
    /**
     * the X axis of a mouse
     */
    X,
    /**
     * the Y axis of a mouse
     */
    Y,
    /**
     * the left button of a mouse
     */
    LEFT,
    /**
     * the right button of a mouse
     */
    RIGHT,
    /**
     * the up direction of a mouse wheel
     */
    WHEELUP,
    /**
     * the down direction of a mouse wheel
     */
    WHEELDOWN,
    /**
     * the middle button of a mouse
     */
    MIDDLE,
    /**
     * the horizontal up direction of a mouse wheel
     */
    HORIZ_WHEELUP,
    /**
     * the horizontal down direction of a mouse wheel
     */
    HORIZ_WHEELDOWN,
    /**
     * the fourth button of a mouse
     */
    BUTTON_4,
    /**
     * the fifth button of a mouse
     */
    BUTTON_5,
}
/**
 * Represents the inputs for the Libretro pointer.
 */
enum PointerId {
    /**
     * the X axis of a pointer
     */
    X,
    /**
     * the Y axis of a pointer
     */
    Y,
    /**
     * the pression of a pointer
     */
    PRESSED,
}
/**
 * Represents the strength of the rumble effect.
 */
enum RumbleEffect {
    /**
     * the strong rumble effect
     */
    STRONG,
    /**
     * the weak rumble effect
     */
    WEAK,
}
/**
 * Represents the filters that can be applied to the video output.
 */
enum VideoFilter {
    /**
     * a smooth but blurry video filer
     */
    SMOOTH,
    /**
     * a sharp video filter showing every pixel
     */
    SHARP,
    /**
     * a video filter mimicking CRT screens
     */
    CRT,
}
function controller_type_get_id_count(type: ControllerType): number
function controller_type_get_index_count(type: ControllerType): number
function g_log(sender: Core, log_domain: string | null, log_level: GLib.LogLevelFlags, message: string): void
function gtk_get_resource(): Gio.Resource
function joypad_id_from_button_code(button_code: number): JoypadId
function joypad_id_to_button_code(joypad_id: JoypadId): number
function pixbuf_get_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf): number
function pixbuf_set_aspect_ratio(pixbuf: GdkPixbuf.Pixbuf, aspect_ratio: number): void
function video_filter_from_string(filter: string): VideoFilter
class Controller {
    /* Methods of Retro-2.Retro.Controller */
    emit_state_changed(): void
    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     */
    get_capabilities(): number
    /**
     * Gets the main type of the controller.
     */
    get_controller_type(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     */
    get_input_state(input: Input): number
    /**
     * Gets whether `self` supports rumble effects.
     */
    get_supports_rumble(): boolean
    /**
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controller_type a #RetroControllerType
     */
    has_capability(controller_type: ControllerType): boolean
    /**
     * Sets the rumble state of `self`.
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    set_rumble_state(effect: RumbleEffect, strength: number): void
    /* Virtual methods of Retro-2.Retro.Controller */
    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     */
    vfunc_get_capabilities(): number
    /**
     * Gets the main type of the controller.
     */
    vfunc_get_controller_type(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     */
    vfunc_get_input_state(input: Input): number
    /**
     * Gets whether `self` supports rumble effects.
     */
    vfunc_get_supports_rumble(): boolean
    /**
     * Sets the rumble state of `self`.
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    vfunc_set_rumble_state(effect: RumbleEffect, strength: number): void
    /* Signals of Retro-2.Retro.Controller */
    connect(sigName: "state-changed", callback: (($obj: Controller) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Controller) => void)): number
    emit(sigName: "state-changed"): void
    static name: string
}
interface ControllerIterator_ConstructProps extends GObject.Object_ConstructProps {
}
class ControllerIterator {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.ControllerIterator */
    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     */
    next(): [ /* returnType */ boolean, /* port */ number | null, /* controller */ Controller | null ]
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
    connect(sigName: "notify", callback: (($obj: ControllerIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControllerIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ControllerIterator_ConstructProps)
    _init (config?: ControllerIterator_ConstructProps): void
    static $gtype: GObject.Type
}
interface Core_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Retro-2.Retro.Core */
    core_assets_directory?: string
    /**
     * The filename of the core.
     */
    filename?: string
    /**
     * The number of frames to run ahead of time. This allows to know in advance
     * what should happen in the given number of frames, allowing to react in
     * advance.
     * 
     * Note that this is resource intensive as the core will be iterated over
     * multiple times for each perceived iteration. In order to work, this
     * requires the cores to properly support serialization, otherwise the
     * behavior is undefined.
     */
    runahead?: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    save_directory?: string
    /**
     * The speed ratio at wich the core will run.
     */
    speed_rate?: number
    /**
     * The system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    system_directory?: string
    /**
     * The name of the user.
     */
    user_name?: string
}
class Core {
    /* Properties of Retro-2.Retro.Core */
    /**
     * The Libretro API version implement by the core.
     */
    readonly api_version: number
    core_assets_directory: string
    /**
     * The filename of the core.
     */
    readonly filename: string
    /**
     * The FPS rate for the core's video output.
     */
    readonly frames_per_second: number
    /**
     * Whether a game has been loaded.
     */
    readonly game_loaded: boolean
    /**
     * Whether the core has been initiated.
     */
    readonly is_initiated: boolean
    /**
     * The number of frames to run ahead of time. This allows to know in advance
     * what should happen in the given number of frames, allowing to react in
     * advance.
     * 
     * Note that this is resource intensive as the core will be iterated over
     * multiple times for each perceived iteration. In order to work, this
     * requires the cores to properly support serialization, otherwise the
     * behavior is undefined.
     */
    runahead: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    save_directory: string
    /**
     * The speed ratio at wich the core will run.
     */
    speed_rate: number
    /**
     * Whether the core supports running with no game.
     */
    readonly support_no_game: boolean
    /**
     * The system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    system_directory: string
    /**
     * The name of the user.
     */
    user_name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.Core */
    /**
     * This initializes `self,` loads its available options and loads the medias. You
     * need to boot `self` before using some of its methods.
     */
    boot(): void
    /**
     * Gets the Libretro API version implement by the core.
     */
    get_api_version(): number
    /**
     * Gets whether the state of `self` can be accessed.
     */
    get_can_access_state(): boolean
    get_core_assets_directory(): string
    /**
     * Gets the filename of the core.
     */
    get_filename(): string
    /**
     * Gets the FPS rate for the core's video output.
     */
    get_frames_per_second(): number
    /**
     * Gets whether a game has been loaded.
     */
    get_game_loaded(): boolean
    /**
     * Gets whether the core has been initiated.
     */
    get_is_initiated(): boolean
    /**
     * Gets the size of a memory region of `self`.
     * @param memory_type the type of memory
     */
    get_memory_size(memory_type: MemoryType): number
    /**
     * Gets the option for the given key.
     * @param key the key of the option
     */
    get_option(key: string): Option
    get_runahead(): number
    /**
     * Gets the save directory of the core.
     * 
     * The core will save some data here.
     */
    get_save_directory(): string
    /**
     * Gets the speed rate at which to run the core.
     */
    get_speed_rate(): number
    /**
     * Gets whether the core supports running with no game.
     */
    get_support_no_game(): boolean
    /**
     * Gets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    get_system_directory(): string
    /**
     * Gets the name of the user.
     */
    get_user_name(): string
    /**
     * Gets whether the core has an option for the given key.
     * @param key the key of the option
     */
    has_option(key: string): boolean
    /**
     * Creates a new #RetroControllerIterator which can be used to iterate through
     * the controllers plugged into `self`.
     */
    iterate_controllers(): ControllerIterator
    /**
     * Creates a new #RetroOptionIterator which can be used to iterate through the
     * options of `self`.
     */
    iterate_options(): OptionIterator
    /**
     * Iterate `self` for a frame.
     */
    iteration(): void
    /**
     * Loads a memory region of `self`.
     * @param memory_type the type of memory
     * @param filename a file to load the data from
     */
    load_memory(memory_type: MemoryType, filename: string): void
    /**
     * Loads the state of the `self`.
     * @param filename the file to load the state from
     */
    load_state(filename: string): void
    /**
     * Overrides default value for the option `key`. This can be used to set value
     * for a startup-only option.
     * 
     * You can use this before booting the core.
     * @param key the key of the option
     * @param value the default value
     */
    override_option_default(key: string, value: string): void
    /**
     * Resets `self`.
     */
    reset(): void
    /**
     * Starts running the core. If the core was stopped, it will restart from this
     * moment.
     */
    run(): void
    /**
     * Saves a memory region of `self`.
     * @param memory_type the type of memory
     * @param filename a file to save the data to
     */
    save_memory(memory_type: MemoryType, filename: string): void
    /**
     * Saves the state of `self`.
     * @param filename the file to save the state to
     */
    save_state(filename: string): void
    /**
     * Plugs `controller` into the specified port number of `self`.
     * @param port the port number
     * @param controller a #RetroController
     */
    set_controller(port: number, controller?: Controller | null): void
    set_core_assets_directory(core_assets_directory: string): void
    /**
     * Sets the current media index.
     * 
     * You can use this after booting the core.
     * @param media_index the media index
     */
    set_current_media(media_index: number): void
    /**
     * Uses `controller` as the default controller for the given type. When a port
     * has no controller plugged plugged into it, the core will use the default
     * controllers instead.
     * @param controller_type a #RetroControllerType
     * @param controller a #RetroController
     */
    set_default_controller(controller_type: ControllerType, controller?: Controller | null): void
    /**
     * Sets the widget whose key events will be forwarded to `self`.
     * @param widget a #GtkWidget, or %NULL
     */
    set_keyboard(widget?: Gtk.Widget | null): void
    /**
     * Sets the medias to load into the core.
     * 
     * You can use this before booting the core.
     * @param uris the URIs
     */
    set_medias(uris: string[]): void
    set_runahead(runahead: number): void
    /**
     * Sets the save directory of the core.
     * 
     * The core will save some data here.
     * @param save_directory the save directory
     */
    set_save_directory(save_directory: string): void
    /**
     * Sets the speed rate at which to run the core.
     * @param speed_rate a speed rate
     */
    set_speed_rate(speed_rate: number): void
    /**
     * Sets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @param system_directory the system directory
     */
    set_system_directory(system_directory: string): void
    /**
     * Sets the name of the user.
     * @param user_name the user name
     */
    set_user_name(user_name: string): void
    /**
     * Stops running the core.
     */
    stop(): void
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
    /* Signals of Retro-2.Retro.Core */
    /**
     * The ::crash signal is emitted when the core crashes.
     * @param message the message to show to the user
     */
    connect(sigName: "crashed", callback: (($obj: Core, message: string) => void)): number
    connect_after(sigName: "crashed", callback: (($obj: Core, message: string) => void)): number
    emit(sigName: "crashed", message: string): void
    /**
     * The ::log signal is emitted each time the core emits a message to log.
     * @param log_domain the log domain
     * @param log_level the log level
     * @param message the message
     */
    connect(sigName: "log", callback: (($obj: Core, log_domain: string, log_level: GLib.LogLevelFlags, message: string) => void)): number
    connect_after(sigName: "log", callback: (($obj: Core, log_domain: string, log_level: GLib.LogLevelFlags, message: string) => void)): number
    emit(sigName: "log", log_domain: string, log_level: GLib.LogLevelFlags, message: string): void
    /**
     * The ::message signal is emitted each time the core emits a message to
     * display during a given amount of frames.
     * @param message the message
     * @param frames the number of frames the message should be displayed
     */
    connect(sigName: "message", callback: (($obj: Core, message: string, frames: number) => void)): number
    connect_after(sigName: "message", callback: (($obj: Core, message: string, frames: number) => void)): number
    emit(sigName: "message", message: string, frames: number): void
    /**
     * The ::shutdown signal is emitted when the core shut down.
     * 
     * The core must be released or re-started in order to function anew.
     */
    connect(sigName: "shutdown", callback: (($obj: Core) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: Core) => void)): number
    emit(sigName: "shutdown"): void
    /**
     * The ::video-output signal is emitted each time a new video frame is emitted
     * by the core.
     * 
     * `pixdata` will be invalid after the signal emission, copy it in some way if
     * you want to keep it.
     * @param pixdata the #RetroPixdata
     */
    connect(sigName: "video-output", callback: (($obj: Core, pixdata: Pixdata) => void)): number
    connect_after(sigName: "video-output", callback: (($obj: Core, pixdata: Pixdata) => void)): number
    emit(sigName: "video-output", pixdata: Pixdata): void
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
    connect(sigName: "notify", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::api-version", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api-version", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::core-assets-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::core-assets-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frames-per-second", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frames-per-second", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::game-loaded", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::game-loaded", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-initiated", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-initiated", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::runahead", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::runahead", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::save-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::save-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed-rate", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed-rate", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::support-no-game", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-no-game", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-directory", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-name", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: Core, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Core_ConstructProps)
    _init (config?: Core_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): Core
    static $gtype: GObject.Type
}
interface CoreDescriptor_ConstructProps extends GObject.Object_ConstructProps {
}
class CoreDescriptor {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.CoreDescriptor */
    /**
     * Gets the MD5 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    get_firmware_md5(firmware: string): string | null
    /**
     * Gets the demanded path to the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    get_firmware_path(firmware: string): string | null
    /**
     * Gets the SHA512 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    get_firmware_sha512(firmware: string): string | null
    /**
     * Gets the list of firmwares used by the core for this platform.
     * @param platform a platform name
     */
    get_firmwares(platform: string): string[]
    /**
     * Gets the icon, or %NULL if it doesn't exist.
     */
    get_icon(): Gio.Icon | null
    /**
     * Gets the ID of `self`.
     */
    get_id(): string
    /**
     * Gets whether the core is an emulator, and hence need games to be loaded.
     */
    get_is_emulator(): boolean
    /**
     * Gets whether the firmware is mandatory for the core to function.
     * @param firmware a firmware name
     */
    get_is_firmware_mandatory(firmware: string): boolean
    /**
     * Gets whether the core is a game, and hence can't load games.
     */
    get_is_game(): boolean
    /**
     * Gets the list of MIME types accepted used by the core for this platform.
     * @param platform a platform name
     */
    get_mime_type(platform: string): string[]
    /**
     * Gets the module file name, or %NULL if it doesn't exist.
     */
    get_module(): string | null
    /**
     * Gets the module file, or %NULL if it doesn't exist.
     */
    get_module_file(): Gio.File | null
    /**
     * Gets the name, or %NULL if it doesn't exist.
     */
    get_name(): string | null
    /**
     * Gets whether the platform supports all of the given MIME types.
     * @param platform a platform name
     * @param mime_types the MIME types
     */
    get_platform_supports_mime_types(platform: string, mime_types: string[]): boolean
    /**
     * Gets the URI of the file of `self`.
     */
    get_uri(): string
    /**
     * Gets whether the firmware declares its MD5 fingerprint.
     * @param firmware a firmware name
     */
    has_firmware_md5(firmware: string): boolean
    /**
     * Gets whether the firmware declares its SHA512 fingerprint.
     * @param firmware a firmware name
     */
    has_firmware_sha512(firmware: string): boolean
    /**
     * Gets whether the platform has associated firmwares.
     * @param platform a platform name
     */
    has_firmwares(platform: string): boolean
    /**
     * Gets whether the core has an icon.
     */
    has_icon(): boolean
    /**
     * Gets whether the core descriptor declares the given platform.
     * @param platform a platform name
     */
    has_platform(platform: string): boolean
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
    connect(sigName: "notify", callback: (($obj: CoreDescriptor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CoreDescriptor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CoreDescriptor_ConstructProps)
    _init (config?: CoreDescriptor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): CoreDescriptor
    static $gtype: GObject.Type
}
interface CoreView_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Retro-2.Retro.CoreView */
    can_grab_pointer?: boolean
    snap_pointer_to_borders?: boolean
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    /**
     * The accessible role of the given `GtkAccessible` implementation.
     * 
     * The accessible role cannot be changed once set.
     */
    accessible_role?: Gtk.AccessibleRole
}
class CoreView {
    /* Properties of Retro-2.Retro.CoreView */
    can_grab_pointer: boolean
    snap_pointer_to_borders: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    /**
     * Whether the widget or any of its descendents can accept
     * the input focus.
     * 
     * This property is meant to be set by widget implementations,
     * typically in their instance init function.
     */
    can_focus: boolean
    /**
     * Whether the widget can receive pointer events.
     */
    can_target: boolean
    /**
     * A list of css classes applied to this widget.
     */
    css_classes: string[]
    /**
     * The name of this widget in the CSS tree.
     * 
     * This property is meant to be set by widget implementations,
     * typically in their instance init function.
     */
    readonly css_name: string
    /**
     * The cursor used by `widget`.
     */
    cursor: Gdk.Cursor
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * 
     * This property is only relevant for widgets that can take focus.
     */
    focus_on_click: boolean
    /**
     * Whether this widget itself will accept the input focus.
     */
    focusable: boolean
    /**
     * How to distribute horizontal space if widget gets extra space.
     */
    halign: Gtk.Align
    /**
     * Whether the widget is the default widget.
     */
    readonly has_default: boolean
    /**
     * Whether the widget has the input focus.
     */
    readonly has_focus: boolean
    /**
     * Enables or disables the emission of the ::query-tooltip signal on `widget`.
     * 
     * A value of %TRUE indicates that `widget` can have a tooltip, in this case
     * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
     * determine whether it will provide a tooltip or not.
     */
    has_tooltip: boolean
    /**
     * Override for height request of the widget.
     * 
     * If this is -1, the natural request will be used.
     */
    height_request: number
    /**
     * Whether to expand horizontally.
     */
    hexpand: boolean
    /**
     * Whether to use the `hexpand` property.
     */
    hexpand_set: boolean
    /**
     * The `GtkLayoutManager` instance to use to compute the preferred size
     * of the widget, and allocate its children.
     * 
     * This property is meant to be set by widget implementations,
     * typically in their instance init function.
     */
    layout_manager: Gtk.LayoutManager
    /**
     * Margin on bottom side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * [method`Gtk`.Widget.set_size_request] for example.
     */
    margin_bottom: number
    /**
     * Margin on end of widget, horizontally.
     * 
     * This property supports left-to-right and right-to-left text
     * directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * [method`Gtk`.Widget.set_size_request] for example.
     */
    margin_end: number
    /**
     * Margin on start of widget, horizontally.
     * 
     * This property supports left-to-right and right-to-left text
     * directions.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * [method`Gtk`.Widget.set_size_request] for example.
     */
    margin_start: number
    /**
     * Margin on top side of widget.
     * 
     * This property adds margin outside of the widget's normal size
     * request, the margin will be added in addition to the size from
     * [method`Gtk`.Widget.set_size_request] for example.
     */
    margin_top: number
    /**
     * The name of the widget.
     */
    name: string
    /**
     * The requested opacity of the widget.
     */
    opacity: number
    /**
     * How content outside the widget's content area is treated.
     * 
     * This property is meant to be set by widget implementations,
     * typically in their instance init function.
     */
    overflow: Gtk.Overflow
    /**
     * The parent widget of this widget.
     */
    readonly parent: Gtk.Widget
    /**
     * Whether the widget will receive the default action when it is focused.
     */
    receives_default: boolean
    /**
     * The `GtkRoot` widget of the widget tree containing this widget.
     * 
     * This will be %NULL if the widget is not contained in a root widget.
     */
    readonly root: Gtk.Root
    /**
     * The scale factor of the widget.
     */
    readonly scale_factor: number
    /**
     * Whether the widget responds to input.
     */
    sensitive: boolean
    /**
     * Sets the text of tooltip to be the given string, which is marked up
     * with Pango markup.
     * 
     * Also see [method`Gtk`.Tooltip.set_markup].
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL:
     * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
     * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
     * the default signal handler.
     * 
     * Note that if both [property`Gtk`.Widget:tooltip-text] and
     * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
     */
    tooltip_markup: string
    /**
     * Sets the text of tooltip to be the given string.
     * 
     * Also see [method`Gtk`.Tooltip.set_text].
     * 
     * This is a convenience property which will take care of getting the
     * tooltip shown if the given string is not %NULL:
     * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
     * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
     * the default signal handler.
     * 
     * Note that if both [property`Gtk`.Widget:tooltip-text] and
     * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
     */
    tooltip_text: string
    /**
     * How to distribute vertical space if widget gets extra space.
     */
    valign: Gtk.Align
    /**
     * Whether to expand vertically.
     */
    vexpand: boolean
    /**
     * Whether to use the `vexpand` property.
     */
    vexpand_set: boolean
    /**
     * Whether the widget is visible.
     */
    visible: boolean
    /**
     * Override for width request of the widget.
     * 
     * If this is -1, the natural request will be used.
     */
    width_request: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    /**
     * The accessible role of the given `GtkAccessible` implementation.
     * 
     * The accessible role cannot be changed once set.
     */
    accessible_role: Gtk.AccessibleRole
    /* Fields of Gtk-4.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.CoreView */
    /**
     * Creates a new #RetroController exposing `self` as the specified controller
     * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
     * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param controller_type the controller type to expose `self` as
     */
    as_controller(controller_type: ControllerType): Controller
    /**
     * Gets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     */
    get_can_grab_pointer(): boolean
    /**
     * Gets a flag representing the capabilities of `self` when exposed as a
     * controller. See retro_controller_get_capabilities() for more information on
     * the flag.
     * 
     * See retro_core_view_as_controller() to know the capabilities of
     * #RetroCoreView when exposed as a controller.
     */
    get_controller_capabilities(): number
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     */
    get_input_state(input: Input): number
    /**
     * Gets the currently set key joypad mapping.
     */
    get_key_joypad_mapping(): KeyJoypadMapping
    /**
     * Gets the currently displayed video frame.
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     */
    get_snap_pointer_to_borders(): boolean
    /**
     * Sets the `self` as the default controllers of `core`.
     * @param core a #RetroCore
     */
    set_as_default_controller(core?: Core | null): void
    /**
     * Sets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param can_grab_pointer whether the pointer should be grabbed when clicking on the view
     */
    set_can_grab_pointer(can_grab_pointer: boolean): void
    /**
     * Sets `core` as the #RetroCore handled by `self`.
     * @param core a #RetroCore, or %NULL
     */
    set_core(core?: Core | null): void
    /**
     * Sets the video filter to use to render the core's video on `self`.
     * @param filter a #RetroVideoFilter
     */
    set_filter(filter: VideoFilter): void
    /**
     * Sets the key joypad mapping on `self`. If given mapping is %NULL, then set to
     * an empty configuration.
     * @param mapping a #RetroKeyJoypadMapping
     */
    set_key_joypad_mapping(mapping?: KeyJoypadMapping | null): void
    /**
     * Sets `pixbuf` as the currently displayed video frame.
     * 
     * retro_pixbuf_set_aspect_ratio() can be used to specify the aspect ratio for
     * the pixbuf. Otherwise the core's aspect ratio will be used.
     * @param pixbuf a #GdkPixbuf
     */
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     * @param snap_pointer_to_borders whether the pointer should snap to the borders
     */
    set_snap_pointer_to_borders(snap_pointer_to_borders: boolean): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    /**
     * Enable or disable an action installed with
     * gtk_widget_class_install_action().
     * @param action_name action name, such as "clipboard.paste"
     * @param enabled whether the action is now enabled
     */
    action_set_enabled(action_name: string, enabled: boolean): void
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Looks up the action in the action groups associated with
     * `widget` and its ancestors, and activates it.
     * 
     * If the action is in an action group added with
     * [method`Gtk`.Widget.insert_action_group], the `name` is expected
     * to be prefixed with the prefix that was used when the group was
     * inserted.
     * 
     * The arguments must match the actions expected parameter type,
     * as returned by `g_action_get_parameter_type()`.
     * @param name the name of the action to activate
     * @param args parameters to use
     */
    activate_action(name: string, args?: GLib.Variant | null): boolean
    /**
     * Activates the `default.activate` action from `widget`.
     */
    activate_default(): void
    /**
     * Adds `controller` to `widget` so that it will receive events.
     * 
     * You will usually want to call this function right after
     * creating any kind of [class`Gtk`.EventController].
     * @param controller a `GtkEventController` that hasn't been   added to a widget yet
     */
    add_controller(controller: Gtk.EventController): void
    /**
     * Adds a style class to `widget`.
     * 
     * After calling this function, the widgets style will match
     * for `css_class,` according to CSS matching rules.
     * 
     * Use [method`Gtk`.Widget.remove_css_class] to remove the
     * style again.
     * @param css_class The style class to add to `widget,` without   the leading '.' used for notation of style classes
     */
    add_css_class(css_class: string): void
    /**
     * Adds a widget to the list of mnemonic labels for this widget.
     * 
     * See [method`Gtk`.Widget.list_mnemonic_labels]. Note the
     * list of mnemonic labels for the widget is cleared when the
     * widget is destroyed, so the caller must make sure to update
     * its internal state at this point as well.
     * @param label a `GtkWidget` that acts as a mnemonic label for `widget`
     */
    add_mnemonic_label(label: Gtk.Widget): void
    /**
     * Queues an animation frame update and adds a callback to be called
     * before each frame.
     * 
     * Until the tick callback is removed, it will be called frequently
     * (usually at the frame rate of the output device or as quickly as
     * the application can be repainted, whichever is slower). For this
     * reason, is most suitable for handling graphics that change every
     * frame or every few frames. The tick callback does not automatically
     * imply a relayout or repaint. If you want a repaint or relayout, and
     * aren’t changing widget properties that would trigger that (for example,
     * changing the text of a `GtkLabel`), then you will have to call
     * [method`Gtk`.Widget.queue_resize] or [method`Gtk`.Widget.queue_draw]
     * yourself.
     * 
     * [method`Gdk`.FrameClock.get_frame_time] should generally be used
     * for timing continuous animations and
     * [method`Gdk`.FrameTimings.get_predicted_presentation_time] if you are
     * trying to display isolated frames at particular times.
     * 
     * This is a more convenient alternative to connecting directly to the
     * [signal`Gdk`.FrameClock::update] signal of `GdkFrameClock`, since you
     * don't have to worry about when a `GdkFrameClock` is assigned to a widget.
     * @param callback function to call for updating animations
     */
    add_tick_callback(callback: Gtk.TickCallback): number
    /**
     * This function is only used by `GtkWidget` subclasses, to
     * assign a size, position and (optionally) baseline to their
     * child widgets.
     * 
     * In this function, the allocation and baseline may be adjusted.
     * The given allocation will be forced to be bigger than the
     * widget's minimum size, as well as at least 0×0 in size.
     * 
     * For a version that does not take a transform, see
     * [method`Gtk`.Widget.size_allocate].
     * @param width New width of `widget`
     * @param height New height of `widget`
     * @param baseline New baseline of `widget,` or -1
     * @param transform Transformation to be applied to `widget`
     */
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    /**
     * Called by widgets as the user moves around the window using
     * keyboard shortcuts.
     * 
     * The `direction` argument indicates what kind of motion is taking place (up,
     * down, left, right, tab forward, tab backward).
     * 
     * This function calls the [vfunc`Gtk`.Widget.focus] virtual function; widgets
     * can override the virtual function in order to implement appropriate focus
     * behavior.
     * 
     * The default `focus()` virtual function for a widget should return `TRUE` if
     * moving in `direction` left the focus on a focusable location inside that
     * widget, and `FALSE` if moving in `direction` moved the focus outside the
     * widget. When returning `TRUE`, widgets normallycall [method`Gtk`.Widget.grab_focus]
     * to place the focus accordingly; when returning `FALSE`, they don’t modify
     * the current focus location.
     * 
     * This function is used by custom widget implementations; if you're
     * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
     * the focus to a particular widget.
     * @param direction direction of focus movement
     */
    child_focus(direction: Gtk.DirectionType): boolean
    /**
     * Computes the bounds for `widget` in the coordinate space of `target`.
     * 
     * FIXME: Explain what "bounds" are.
     * 
     * If the operation is successful, %TRUE is returned. If `widget` has no
     * bounds or the bounds cannot be expressed in `target'`s coordinate space
     * (for example if both widgets are in different windows), %FALSE is
     * returned and `bounds` is set to the zero rectangle.
     * 
     * It is valid for `widget` and `target` to be the same widget.
     * @param target the `GtkWidget`
     */
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    /**
     * Computes whether a container should give this widget
     * extra space when possible.
     * 
     * Containers should check this, rather than looking at
     * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
     * 
     * This function already checks whether the widget is visible, so
     * visibility does not need to be checked separately. Non-visible
     * widgets are not expanded.
     * 
     * The computed expand value uses either the expand setting explicitly
     * set on the widget itself, or, if none has been explicitly set,
     * the widget may expand if some of its children do.
     * @param orientation expand direction
     */
    compute_expand(orientation: Gtk.Orientation): boolean
    /**
     * Translates the given `point` in `widget'`s coordinates to coordinates
     * relative to `target’`s coordinate system.
     * 
     * In order to perform this operation, both widgets must share a
     * common ancestor.
     * @param target the `GtkWidget` to transform into
     * @param point a point in `widget'`s coordinate system
     */
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    /**
     * Computes a matrix suitable to describe a transformation from
     * `widget'`s coordinate system into `target'`s coordinate system.
     * 
     * The transform can not be computed in certain cases, for example
     * when `widget` and `target` do not share a common ancestor. In that
     * case `out_transform` gets set to the identity matrix.
     * @param target the target widget that the matrix will transform to
     */
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    /**
     * Tests if the point at (`x,` `y)` is contained in `widget`.
     * 
     * The coordinates for (`x,` `y)` must be in widget coordinates, so
     * (0, 0) is assumed to be the top left of `widget'`s content area.
     * @param x X coordinate to test, relative to `widget'`s origin
     * @param y Y coordinate to test, relative to `widget'`s origin
     */
    contains(x: number, y: number): boolean
    /**
     * Creates a new `PangoContext` with the appropriate font map,
     * font options, font description, and base direction for drawing
     * text for this widget.
     * 
     * See also [method`Gtk`.Widget.get_pango_context].
     */
    create_pango_context(): Pango.Context
    /**
     * Creates a new `PangoLayout` with the appropriate font map,
     * font description, and base direction for drawing text for
     * this widget.
     * 
     * If you keep a `PangoLayout` created in this way around,
     * you need to re-create it when the widget `PangoContext`
     * is replaced. This can be tracked by listening to changes
     * of the [property`Gtk`.Widget:root] property on the widget.
     * @param text text to set on the layout
     */
    create_pango_layout(text?: string | null): Pango.Layout
    /**
     * Checks to see if a drag movement has passed the GTK drag threshold.
     * @param start_x X coordinate of start of drag
     * @param start_y Y coordinate of start of drag
     * @param current_x current X coordinate
     * @param current_y current Y coordinate
     */
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    /**
     * Notifies the user about an input-related error on this widget.
     * 
     * If the [property`Gtk`.Settings:gtk-error-bell] setting is %TRUE,
     * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
     * 
     * Note that the effect of [method`Gdk`.Surface.beep] can be configured
     * in many ways, depending on the windowing backend and the desktop
     * environment or window manager that is used.
     */
    error_bell(): void
    /**
     * Returns the baseline that has currently been allocated to `widget`.
     * 
     * This function is intended to be used when implementing handlers
     * for the `GtkWidget`Class.snapshot() function, and when allocating
     * child widgets in `GtkWidget`Class.size_allocate().
     */
    get_allocated_baseline(): number
    /**
     * Returns the height that has currently been allocated to `widget`.
     */
    get_allocated_height(): number
    /**
     * Returns the width that has currently been allocated to `widget`.
     */
    get_allocated_width(): number
    /**
     * Retrieves the widget’s allocation.
     * 
     * Note, when implementing a layout container: a widget’s allocation
     * will be its “adjusted” allocation, that is, the widget’s parent
     * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
     * and that allocation is then adjusted (to handle margin
     * and alignment for example) before assignment to the widget.
     * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
     * was actually assigned to the widget. The adjusted allocation is
     * guaranteed to be completely contained within the
     * [method`Gtk`.Widget.size_allocate] allocation, however.
     * 
     * So a layout container is guaranteed that its children stay inside
     * the assigned bounds, but not that they have exactly the bounds the
     * container assigned.
     */
    get_allocation(): /* allocation */ Gtk.Allocation
    /**
     * Gets the first ancestor of `widget` with type `widget_type`.
     * 
     * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
     * gets the first `GtkBox` that’s an ancestor of `widget`. No
     * reference will be added to the returned widget; it should
     * not be unreferenced.
     * 
     * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
     * considers `widget` to be an ancestor of itself.
     * @param widget_type ancestor type
     */
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    /**
     * Determines whether the input focus can enter `widget` or any
     * of its children.
     * 
     * See [method`Gtk`.Widget.set_focusable].
     */
    get_can_focus(): boolean
    /**
     * Queries whether `widget` can be the target of pointer events.
     */
    get_can_target(): boolean
    /**
     * Gets the value set with gtk_widget_set_child_visible().
     * 
     * If you feel a need to use this function, your code probably
     * needs reorganization.
     * 
     * This function is only useful for container implementations
     * and should never be called by an application.
     */
    get_child_visible(): boolean
    /**
     * Gets the clipboard object for `widget`.
     * 
     * This is a utility function to get the clipboard object for the
     * `GdkDisplay` that `widget` is using.
     * 
     * Note that this function always works, even when `widget` is not
     * realized yet.
     */
    get_clipboard(): Gdk.Clipboard
    /**
     * Returns the list of style classes applied to `widget`.
     */
    get_css_classes(): string[]
    /**
     * Returns the CSS name that is used for `self`.
     */
    get_css_name(): string
    /**
     * Queries the cursor set on `widget`.
     * 
     * See [method`Gtk`.Widget.set_cursor] for details.
     */
    get_cursor(): Gdk.Cursor | null
    /**
     * Gets the reading direction for a particular widget.
     * 
     * See [method`Gtk`.Widget.set_direction].
     */
    get_direction(): Gtk.TextDirection
    /**
     * Get the `GdkDisplay` for the toplevel window associated with
     * this widget.
     * 
     * This function can only be called after the widget has been
     * added to a widget hierarchy with a `GtkWindow` at the top.
     * 
     * In general, you should only create display specific
     * resources when a widget has been realized, and you should
     * free those resources when the widget is unrealized.
     */
    get_display(): Gdk.Display
    /**
     * Returns the widgets first child.
     * 
     * This API is primarily meant for widget implementations.
     */
    get_first_child(): Gtk.Widget | null
    /**
     * Returns the current focus child of `widget`.
     */
    get_focus_child(): Gtk.Widget | null
    /**
     * Returns whether the widget should grab focus when it is clicked
     * with the mouse.
     * 
     * See [method`Gtk`.Widget.set_focus_on_click].
     */
    get_focus_on_click(): boolean
    /**
     * Determines whether `widget` can own the input focus.
     * 
     * See [method`Gtk`.Widget.set_focusable].
     */
    get_focusable(): boolean
    /**
     * Gets the font map of `widget`.
     * 
     * See [method`Gtk`.Widget.set_font_map].
     */
    get_font_map(): Pango.FontMap | null
    /**
     * Returns the `cairo_font_options_t` of widget.
     * 
     * Seee [method`Gtk`.Widget.set_font_options].
     */
    get_font_options(): cairo.FontOptions | null
    /**
     * Obtains the frame clock for a widget.
     * 
     * The frame clock is a global “ticker” that can be used to drive
     * animations and repaints. The most common reason to get the frame
     * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
     * to get a time to use for animating. For example you might record
     * the start of the animation with an initial value from
     * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
     * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
     * 
     * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
     * clock, but won’t necessarily repaint any widgets. To repaint a
     * widget, you have to use [method`Gtk`.Widget.queue_draw] which invalidates
     * the widget (thus scheduling it to receive a draw on the next
     * frame). gtk_widget_queue_draw() will also end up requesting a frame
     * on the appropriate frame clock.
     * 
     * A widget’s frame clock will not change while the widget is
     * mapped. Reparenting a widget (which implies a temporary unmap) can
     * change the widget’s frame clock.
     * 
     * Unrealized widgets do not have a frame clock.
     */
    get_frame_clock(): Gdk.FrameClock | null
    /**
     * Gets the horizontal alignment of `widget`.
     * 
     * For backwards compatibility reasons this method will never return
     * %GTK_ALIGN_BASELINE, but instead it will convert it to
     * %GTK_ALIGN_FILL. Baselines are not supported for horizontal
     * alignment.
     */
    get_halign(): Gtk.Align
    /**
     * Returns the current value of the `has-tooltip` property.
     */
    get_has_tooltip(): boolean
    /**
     * Returns the content height of the widget.
     * 
     * This function returns the height passed to its
     * size-allocate implementation, which is the height you
     * should be using in [vfunc`Gtk`.Widget.snapshot].
     * 
     * For pointer events, see [method`Gtk`.Widget.contains].
     */
    get_height(): number
    /**
     * Gets whether the widget would like any available extra horizontal
     * space.
     * 
     * When a user resizes a `GtkWindow`, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Containers should use [method`Gtk`.Widget.compute_expand] rather
     * than this function, to see whether a widget, or any of its children,
     * has the expand flag set. If any child of a widget wants to
     * expand, the parent may ask to expand also.
     * 
     * This function only looks at the widget’s own hexpand flag, rather
     * than computing whether the entire widget tree rooted at this widget
     * wants to expand.
     */
    get_hexpand(): boolean
    /**
     * Gets whether gtk_widget_set_hexpand() has been used
     * to explicitly set the expand flag on this widget.
     * 
     * If [property`Gtk`.Widget:hexpand] property is set, then it
     * overrides any computed expand value based on child widgets.
     * If `hexpand` is not set, then the expand value depends on
     * whether any children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     */
    get_hexpand_set(): boolean
    /**
     * Returns the widgets last child.
     * 
     * This API is primarily meant for widget implementations.
     */
    get_last_child(): Gtk.Widget | null
    /**
     * Retrieves the layout manager used by `widget`.
     * 
     * See [method`Gtk`.Widget.set_layout_manager].
     */
    get_layout_manager(): Gtk.LayoutManager | null
    /**
     * Whether the widget is mapped.
     */
    get_mapped(): boolean
    /**
     * Gets the bottom margin of `widget`.
     */
    get_margin_bottom(): number
    /**
     * Gets the end margin of `widget`.
     */
    get_margin_end(): number
    /**
     * Gets the start margin of `widget`.
     */
    get_margin_start(): number
    /**
     * Gets the top margin of `widget`.
     */
    get_margin_top(): number
    /**
     * Retrieves the name of a widget.
     * 
     * See [method`Gtk`.Widget.set_name] for the significance of widget names.
     */
    get_name(): string
    /**
     * Returns the nearest `GtkNative` ancestor of `widget`.
     * 
     * This function will return %NULL if the widget is not
     * contained inside a widget tree with a native ancestor.
     * 
     * `GtkNative` widgets will return themselves here.
     */
    get_native(): Gtk.Native | null
    /**
     * Returns the widgets next sibling.
     * 
     * This API is primarily meant for widget implementations.
     */
    get_next_sibling(): Gtk.Widget | null
    /**
     * #Fetches the requested opacity for this widget.
     * 
     * See [method`Gtk`.Widget.set_opacity].
     */
    get_opacity(): number
    /**
     * Returns the widgets overflow value.
     */
    get_overflow(): Gtk.Overflow
    /**
     * Gets a `PangoContext` with the appropriate font map, font description,
     * and base direction for this widget.
     * 
     * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
     * this context is owned by the widget (it can be used until the screen
     * for the widget changes or the widget is removed from its toplevel),
     * and will be updated to match any changes to the widget’s attributes.
     * This can be tracked by listening to changes of the
     * [property`Gtk`.Widget:root] property on the widget.
     */
    get_pango_context(): Pango.Context
    /**
     * Returns the parent widget of `widget`.
     */
    get_parent(): Gtk.Widget | null
    /**
     * Retrieves the minimum and natural size of a widget, taking
     * into account the widget’s preference for height-for-width management.
     * 
     * This is used to retrieve a suitable size by container widgets which do
     * not impose any restrictions on the child placement. It can be used
     * to deduce toplevel window and menu sizes as well as child widgets in
     * free-form containers such as `GtkFixed`.
     * 
     * Handle with care. Note that the natural height of a height-for-width
     * widget will generally be a smaller size than the minimum height, since
     * the required height for the natural width is generally smaller than the
     * required height for the minimum width.
     * 
     * Use [id`gtk_widget_measure]` if you want to support baseline alignment.
     */
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    /**
     * Returns the widgets previous sibling.
     * 
     * This API is primarily meant for widget implementations.
     */
    get_prev_sibling(): Gtk.Widget | null
    /**
     * Gets the primary clipboard of `widget`.
     * 
     * This is a utility function to get the primary clipboard object
     * for the `GdkDisplay` that `widget` is using.
     * 
     * Note that this function always works, even when `widget` is not
     * realized yet.
     */
    get_primary_clipboard(): Gdk.Clipboard
    /**
     * Determines whether `widget` is realized.
     */
    get_realized(): boolean
    /**
     * Determines whether `widget` is always treated as the default widget
     * within its toplevel when it has the focus, even if another widget
     * is the default.
     * 
     * See [method`Gtk`.Widget.set_receives_default].
     */
    get_receives_default(): boolean
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * Single-child widgets generally propagate the preference of
     * their child, more complex widgets need to request something
     * either in context of their children or in context of their
     * allocation capabilities.
     */
    get_request_mode(): Gtk.SizeRequestMode
    /**
     * Returns the `GtkRoot` widget of `widget`.
     * 
     * This function will return %NULL if the widget is not contained
     * inside a widget tree with a root widget.
     * 
     * `GtkRoot` widgets will return themselves here.
     */
    get_root(): Gtk.Root | null
    /**
     * Retrieves the internal scale factor that maps from window
     * coordinates to the actual device pixels.
     * 
     * On traditional systems this is 1, on high density outputs,
     * it can be a higher value (typically 2).
     * 
     * See [method`Gdk`.Surface.get_scale_factor].
     */
    get_scale_factor(): number
    /**
     * Returns the widget’s sensitivity.
     * 
     * This function returns the value that has been set using
     * [method`Gtk`.Widget.set_sensitive]).
     * 
     * The effective sensitivity of a widget is however determined
     * by both its own and its parent widget’s sensitivity.
     * See [method`Gtk`.Widget.is_sensitive].
     */
    get_sensitive(): boolean
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the `GtkWidget`
     * is attached to a toplevel, since the settings object is specific
     * to a particular `GdkDisplay`. If you want to monitor the widget for
     * changes in its settings, connect to the `notify::display` signal.
     */
    get_settings(): Gtk.Settings
    /**
     * Returns the content width or height of the widget.
     * 
     * Which dimension is returned depends on `orientation`.
     * 
     * This is equivalent to calling [method`Gtk`.Widget.get_width]
     * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
     * for %GTK_ORIENTATION_VERTICAL, but can be used when
     * writing orientation-independent code, such as when
     * implementing [iface`Gtk`.Orientable] widgets.
     * @param orientation the orientation to query
     */
    get_size(orientation: Gtk.Orientation): number
    /**
     * Gets the size request that was explicitly set for the widget using
     * gtk_widget_set_size_request().
     * 
     * A value of -1 stored in `width` or `height` indicates that that
     * dimension has not been set explicitly and the natural requisition
     * of the widget will be used instead. See
     * [method`Gtk`.Widget.set_size_request]. To get the size a widget will
     * actually request, call [method`Gtk`.Widget.measure] instead of
     * this function.
     */
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the widget state as a flag set.
     * 
     * It is worth mentioning that the effective %GTK_STATE_FLAG_INSENSITIVE
     * state will be returned, that is, also based on parent insensitivity,
     * even if `widget` itself is sensitive.
     * 
     * Also note that if you are looking for a way to obtain the
     * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
     * method, you should look at [method`Gtk`.StyleContext.get_state].
     */
    get_state_flags(): Gtk.StateFlags
    /**
     * Returns the style context associated to `widget`.
     * 
     * The returned object is guaranteed to be the same
     * for the lifetime of `widget`.
     */
    get_style_context(): Gtk.StyleContext
    /**
     * Fetch an object build from the template XML for `widget_type` in
     * this `widget` instance.
     * 
     * This will only report children which were previously declared
     * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
     * variants.
     * 
     * This function is only meant to be called for code which is private
     * to the `widget_type` which declared the child and is meant for language
     * bindings which cannot easily make use of the GObject structure offsets.
     * @param widget_type The `GType` to get a template child for
     * @param name The “id” of the child defined in the template XML
     */
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    /**
     * Gets the contents of the tooltip for `widget`.
     * 
     * If the tooltip has not been set using
     * [method`Gtk`.Widget.set_tooltip_markup], this
     * function returns %NULL.
     */
    get_tooltip_markup(): string | null
    /**
     * Gets the contents of the tooltip for `widget`.
     * 
     * If the `widget'`s tooltip was set using
     * [method`Gtk`.Widget.set_tooltip_markup],
     * this function will return the escaped text.
     */
    get_tooltip_text(): string | null
    /**
     * Gets the vertical alignment of `widget`.
     */
    get_valign(): Gtk.Align
    /**
     * Gets whether the widget would like any available extra vertical
     * space.
     * 
     * See [method`Gtk`.Widget.get_hexpand] for more detail.
     */
    get_vexpand(): boolean
    /**
     * Gets whether gtk_widget_set_vexpand() has been used to
     * explicitly set the expand flag on this widget.
     * 
     * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
     */
    get_vexpand_set(): boolean
    /**
     * Determines whether the widget is visible.
     * 
     * If you want to take into account whether the widget’s
     * parent is also marked as visible, use
     * [method`Gtk`.Widget.is_visible] instead.
     * 
     * This function does not check if the widget is
     * obscured in any way.
     * 
     * See [method`Gtk`.Widget.set_visible].
     */
    get_visible(): boolean
    /**
     * Returns the content width of the widget.
     * 
     * This function returns the width passed to its
     * size-allocate implementation, which is the width you
     * should be using in [vfunc`Gtk`.Widget.snapshot].
     * 
     * For pointer events, see [method`Gtk`.Widget.contains].
     */
    get_width(): number
    /**
     * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
     * 
     * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
     * implementation cannot transfer the focus to a descendant of `widget`
     * that is focusable, it will not take focus and %FALSE will be returned.
     * 
     * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
     * is allowed, should not have an effect, and return %TRUE.
     */
    grab_focus(): boolean
    /**
     * Returns whether `css_class` is currently applied to `widget`.
     * @param css_class A style class, without the leading '.'   used for notation of style classes
     */
    has_css_class(css_class: string): boolean
    /**
     * Determines if the widget should show a visible indication that
     * it has the global input focus.
     * 
     * This is a convenience function that takes into account whether
     * focus indication should currently be shown in the toplevel window
     * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
     * information about focus indication.
     * 
     * To find out if the widget has the global input focus, use
     * [method`Gtk`.Widget.has_focus].
     */
    has_visible_focus(): boolean
    /**
     * Reverses the effects of gtk_widget_show().
     * 
     * This is causing the widget to be hidden (invisible to the user).
     */
    hide(): void
    /**
     * Returns whether the widget is currently being destroyed.
     * 
     * This information can sometimes be used to avoid doing
     * unnecessary work.
     */
    in_destruction(): boolean
    /**
     * Creates and initializes child widgets defined in templates.
     * 
     * This function must be called in the instance initializer
     * for any class which assigned itself a template using
     * [method`Gtk`.WidgetClass.set_template].
     * 
     * It is important to call this function in the instance initializer
     * of a `GtkWidget` subclass and not in `GObject.constructed()` or
     * `GObject.constructor()` for two reasons:
     * 
     *  - derived widgets will assume that the composite widgets
     *    defined by its parent classes have been created in their
     *    relative instance initializers
     *  - when calling `g_object_new()` on a widget with composite templates,
     *    it’s important to build the composite widgets before the construct
     *    properties are set. Properties passed to `g_object_new()` should
     *    take precedence over properties set in the private template XML
     * 
     * A good rule of thumb is to call this function as the first thing in
     * an instance initialization function.
     */
    init_template(): void
    /**
     * Inserts `group` into `widget`.
     * 
     * Children of `widget` that implement [iface`Gtk`.Actionable] can
     * then be associated with actions in `group` by setting their
     * “action-name” to `prefix`.`action-name`.
     * 
     * Note that inheritance is defined for individual actions. I.e.
     * even if you insert a group with prefix `prefix,` actions with
     * the same prefix will still be inherited from the parent, unless
     * the group contains an action with the same name.
     * 
     * If `group` is %NULL, a previously inserted group for `name` is
     * removed from `widget`.
     * @param name the prefix for actions in `group`
     * @param group a `GActionGroup`, or %NULL to remove   the previously inserted group for `name`
     */
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    /**
     * Inserts `widget` into the child widget list of `parent`.
     * 
     * It will be placed after `previous_sibling,` or at the beginning if
     * `previous_sibling` is %NULL.
     * 
     * After calling this function, `gtk_widget_get_prev_sibling(widget)`
     * will return `previous_sibling`.
     * 
     * If `parent` is already set as the parent widget of `widget,` this
     * function can also be used to reorder `widget` in the child widget
     * list of `parent`.
     * 
     * This API is primarily meant for widget implementations; if you are
     * just using a widget, you *must* use its own API for adding children.
     * @param parent the parent `GtkWidget` to insert `widget` into
     * @param previous_sibling the new previous sibling of `widget`
     */
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    /**
     * Inserts `widget` into the child widget list of `parent`.
     * 
     * It will be placed before `next_sibling,` or at the end if
     * `next_sibling` is %NULL.
     * 
     * After calling this function, `gtk_widget_get_next_sibling(widget)`
     * will return `next_sibling`.
     * 
     * If `parent` is already set as the parent widget of `widget,` this function
     * can also be used to reorder `widget` in the child widget list of `parent`.
     * 
     * This API is primarily meant for widget implementations; if you are
     * just using a widget, you *must* use its own API for adding children.
     * @param parent the parent `GtkWidget` to insert `widget` into
     * @param next_sibling the new next sibling of `widget`
     */
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    /**
     * Determines whether `widget` is somewhere inside `ancestor,`
     * possibly with intermediate containers.
     * @param ancestor another `GtkWidget`
     */
    is_ancestor(ancestor: Gtk.Widget): boolean
    /**
     * Determines whether `widget` can be drawn to.
     * 
     * A widget can be drawn if it is mapped and visible.
     */
    is_drawable(): boolean
    /**
     * Determines if the widget is the focus widget within its
     * toplevel.
     * 
     * This does not mean that the [property`Gtk`.Widget:has-focus]
     * property is necessarily set; [property`Gtk`.Widget:has-focus]
     * will only be set if the toplevel widget additionally has the
     * global input focus.
     */
    is_focus(): boolean
    /**
     * Returns the widget’s effective sensitivity.
     * 
     * This means it is sensitive itself and also its
     * parent widget is sensitive.
     */
    is_sensitive(): boolean
    /**
     * Determines whether the widget and all its parents are marked as
     * visible.
     * 
     * This function does not check if the widget is obscured in any way.
     * 
     * See also [method`Gtk`.Widget.get_visible] and
     * [method`Gtk`.Widget.set_visible].
     */
    is_visible(): boolean
    /**
     * Emits the `::keynav-failed` signal on the widget.
     * 
     * This function should be called whenever keyboard navigation
     * within a single widget hits a boundary.
     * 
     * The return value of this function should be interpreted
     * in a way similar to the return value of
     * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
     * stay in the widget, the failed keyboard  navigation is OK
     * and/or there is nowhere we can/should move the focus to.
     * When %FALSE is returned, the caller should continue with
     * keyboard navigation outside the widget, e.g. by calling
     * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
     * 
     * The default [signal`Gtk`.Widget::keynav-failed] handler returns
     * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
     * For the other values of `GtkDirectionType` it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * [method`Gtk`.Widget.error_bell] to notify the user of the
     * failed keyboard navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * [class`Gtk`.Entry] widgets where the user should be able to navigate
     * the entire row with the cursor keys, as e.g. known from user
     * interfaces that require entering license keys.
     * @param direction direction of focus movement
     */
    keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Returns the widgets for which this widget is the target of a
     * mnemonic.
     * 
     * Typically, these widgets will be labels. See, for example,
     * [method`Gtk`.Label.set_mnemonic_widget].
     * 
     * The widgets in the list are not individually referenced.
     * If you want to iterate through the list and perform actions
     * involving callbacks that might destroy the widgets, you
     * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
     * first, and then unref all the widgets afterwards.
     */
    list_mnemonic_labels(): Gtk.Widget[]
    /**
     * Causes a widget to be mapped if it isn’t already.
     * 
     * This function is only for use in widget implementations.
     */
    map(): void
    /**
     * Measures `widget` in the orientation `orientation` and for the given `for_size`.
     * 
     * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
     * is 300, this functions will compute the minimum and natural width of `widget`
     * if it is allocated at a height of 300 pixels.
     * 
     * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
     * a more details on implementing `GtkWidgetClass.measure()`.
     * @param orientation the orientation to measure
     * @param for_size Size for the opposite of `orientation,` i.e.   if `orientation` is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
     */
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Emits the ::mnemonic-activate signal.
     * 
     * See [signal`Gtk`.Widget::mnemonic-activate].
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Returns a `GListModel` to track the children of `widget`.
     * 
     * Calling this function will enable extra internal bookkeeping
     * to track children and emit signals on the returned listmodel.
     * It may slow down operations a lot.
     * 
     * Applications should try hard to avoid calling this function
     * because of the slowdowns.
     */
    observe_children(): Gio.ListModel
    /**
     * Returns a `GListModel` to track the [class`Gtk`.EventController]s
     * of `widget`.
     * 
     * Calling this function will enable extra internal bookkeeping
     * to track controllers and emit signals on the returned listmodel.
     * It may slow down operations a lot.
     * 
     * Applications should try hard to avoid calling this function
     * because of the slowdowns.
     */
    observe_controllers(): Gio.ListModel
    /**
     * Finds the descendant of `widget` closest to the point (`x,` `y)`.
     * 
     * The point must be given in widget coordinates, so (0, 0) is assumed
     * to be the top left of `widget'`s content area.
     * 
     * Usually widgets will return %NULL if the given coordinate is not
     * contained in `widget` checked via [method`Gtk`.Widget.contains].
     * Otherwise they will recursively try to find a child that does
     * not return %NULL. Widgets are however free to customize their
     * picking algorithm.
     * 
     * This function is used on the toplevel to determine the widget
     * below the mouse cursor for purposes of hover highlighting and
     * delivering events.
     * @param x X coordinate to test, relative to `widget'`s origin
     * @param y Y coordinate to test, relative to `widget'`s origin
     * @param flags Flags to influence what is picked
     */
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    /**
     * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
     * function.
     * 
     * Use this function instead of [method`Gtk`.Widget.queue_resize]
     * when the `widget'`s size request didn't change but it wants to
     * reposition its contents.
     * 
     * An example user of this function is [method`Gtk`.Widget.set_halign].
     * 
     * This function is only for use in widget implementations.
     */
    queue_allocate(): void
    /**
     * Schedules this widget to be redrawn in the paint phase
     * of the current or the next frame.
     * 
     * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
     * implementation will be called.
     */
    queue_draw(): void
    /**
     * Flags a widget to have its size renegotiated.
     * 
     * This should be called when a widget for some reason has a new
     * size request. For example, when you change the text in a
     * [class`Gtk`.Label], the label queues a resize to ensure there’s
     * enough space for the new text.
     * 
     * Note that you cannot call gtk_widget_queue_resize() on a widget
     * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
     * virtual method. Calls to gtk_widget_queue_resize() from inside
     * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
     * 
     * This function is only for use in widget implementations.
     */
    queue_resize(): void
    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     */
    realize(): void
    /**
     * Removes `controller` from `widget,` so that it doesn't process
     * events anymore.
     * 
     * It should not be used again.
     * 
     * Widgets will remove all event controllers automatically when they
     * are destroyed, there is normally no need to call this function.
     * @param controller a `GtkEventController`
     */
    remove_controller(controller: Gtk.EventController): void
    /**
     * Removes a style from `widget`.
     * 
     * After this, the style of `widget` will stop matching for `css_class`.
     * @param css_class The style class to remove from `widget,` without   the leading '.' used for notation of style classes
     */
    remove_css_class(css_class: string): void
    /**
     * Removes a widget from the list of mnemonic labels for this widget.
     * 
     * See [method`Gtk`.Widget.list_mnemonic_labels]. The widget must
     * have previously been added to the list with
     * [method`Gtk`.Widget.add_mnemonic_label].
     * @param label a `GtkWidget` that was previously set as a mnemonic   label for `widget` with [method`Gtk`.Widget.add_mnemonic_label]
     */
    remove_mnemonic_label(label: Gtk.Widget): void
    /**
     * Removes a tick callback previously registered with
     * gtk_widget_add_tick_callback().
     * @param id an id returned by [method`Gtk`.Widget.add_tick_callback]
     */
    remove_tick_callback(id: number): void
    /**
     * Specifies whether the input focus can enter the widget
     * or any of its children.
     * 
     * Applications should set `can_focus` to %FALSE to mark a
     * widget as for pointer/touch use only.
     * 
     * Note that having `can_focus` be %TRUE is only one of the
     * necessary conditions for being focusable. A widget must
     * also be sensitive and focusable and not have an ancestor
     * that is marked as not can-focus in order to receive input
     * focus.
     * 
     * See [method`Gtk`.Widget.grab_focus] for actually setting
     * the input focus on a widget.
     * @param can_focus whether or not the input focus can enter   the widget or any of its children
     */
    set_can_focus(can_focus: boolean): void
    /**
     * Sets whether `widget` can be the target of pointer events.
     * @param can_target whether this widget should be able to   receive pointer events
     */
    set_can_target(can_target: boolean): void
    /**
     * Sets whether `widget` should be mapped along with its parent.
     * 
     * The child visibility can be set for widget before it is added
     * to a container with [method`Gtk`.Widget.set_parent], to avoid
     * mapping children unnecessary before immediately unmapping them.
     * However it will be reset to its default state of %TRUE when the
     * widget is removed from a container.
     * 
     * Note that changing the child visibility of a widget does not
     * queue a resize on the widget. Most of the time, the size of
     * a widget is computed from all visible children, whether or
     * not they are mapped. If this is not the case, the container
     * can queue a resize itself.
     * 
     * This function is only useful for container implementations
     * and should never be called by an application.
     * @param child_visible if %TRUE, `widget` should be mapped along   with its parent.
     */
    set_child_visible(child_visible: boolean): void
    /**
     * Clear all style classes applied to `widget`
     * and replace them with `classes`.
     * @param classes    %NULL-terminated list of style classes to apply to `widget`.
     */
    set_css_classes(classes: string[]): void
    /**
     * Sets the cursor to be shown when pointer devices point
     * towards `widget`.
     * 
     * If the `cursor` is NULL, `widget` will use the cursor
     * inherited from the parent widget.
     * @param cursor the new cursor
     */
    set_cursor(cursor?: Gdk.Cursor | null): void
    /**
     * Sets a named cursor to be shown when pointer devices point
     * towards `widget`.
     * 
     * This is a utility function that creates a cursor via
     * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
     * with [method`Gtk`.Widget.set_cursor]. See those functions for
     * details.
     * 
     * On top of that, this function allows `name` to be %NULL, which
     * will do the same as calling [method`Gtk`.Widget.set_cursor]
     * with a %NULL cursor.
     * @param name The name of the cursor
     */
    set_cursor_from_name(name?: string | null): void
    /**
     * Sets the reading direction on a particular widget.
     * 
     * This direction controls the primary direction for widgets
     * containing text, and also the direction in which the children
     * of a container are packed. The ability to set the direction is
     * present in order so that correct localization into languages with
     * right-to-left reading directions can be done. Generally, applications
     * will let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by [func`Gtk`.Widget.set_default_direction] will be used.
     * @param dir the new direction
     */
    set_direction(dir: Gtk.TextDirection): void
    /**
     * Set `child` as the current focus child of `widget`.
     * 
     * This function is only suitable for widget implementations.
     * If you want a certain widget to get the input focus, call
     * [method`Gtk`.Widget.grab_focus] on it.
     * @param child a direct child widget of `widget` or %NULL   to unset the focus child of `widget`
     */
    set_focus_child(child?: Gtk.Widget | null): void
    /**
     * Sets whether the widget should grab focus when it is clicked
     * with the mouse.
     * 
     * Making mouse clicks not grab focus is useful in places like
     * toolbars where you don’t want the keyboard focus removed from
     * the main area of the application.
     * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
     */
    set_focus_on_click(focus_on_click: boolean): void
    /**
     * Specifies whether `widget` can own the input focus.
     * 
     * Widget implementations should set `focusable` to %TRUE in
     * their init() function if they want to receive keyboard input.
     * 
     * Note that having `focusable` be %TRUE is only one of the
     * necessary conditions for being focusable. A widget must
     * also be sensitive and can-focus and not have an ancestor
     * that is marked as not can-focus in order to receive input
     * focus.
     * 
     * See [method`Gtk`.Widget.grab_focus] for actually setting
     * the input focus on a widget.
     * @param focusable whether or not `widget` can own the input focus
     */
    set_focusable(focusable: boolean): void
    /**
     * Sets the font map to use for Pango rendering.
     * 
     * The font map is the object that is used to look up fonts.
     * Setting a custom font map can be useful in special situations,
     * e.g. when you need to add application-specific fonts to the set
     * of available fonts.
     * 
     * When not set, the widget will inherit the font map from its parent.
     * @param font_map a `PangoFontMap`, or %NULL to unset any   previously set font map
     */
    set_font_map(font_map?: Pango.FontMap | null): void
    /**
     * Sets the `cairo_font_options_t` used for Pango rendering
     * in this widget.
     * 
     * When not set, the default font options for the `GdkDisplay`
     * will be used.
     * @param options a `cairo_font_options_t`   to unset any previously set default font options
     */
    set_font_options(options?: cairo.FontOptions | null): void
    /**
     * Sets the horizontal alignment of `widget`.
     * @param align the horizontal alignment
     */
    set_halign(align: Gtk.Align): void
    /**
     * Sets the `has-tooltip` property on `widget` to `has_tooltip`.
     * @param has_tooltip whether or not `widget` has a tooltip.
     */
    set_has_tooltip(has_tooltip: boolean): void
    /**
     * Sets whether the widget would like any available extra horizontal
     * space.
     * 
     * When a user resizes a `GtkWindow`, widgets with expand=TRUE
     * generally receive the extra space. For example, a list or
     * scrollable area or document in your window would often be set to
     * expand.
     * 
     * Call this function to set the expand flag if you would like your
     * widget to become larger horizontally when the window has extra
     * room.
     * 
     * By default, widgets automatically expand if any of their children
     * want to expand. (To see if a widget will automatically expand given
     * its current children and state, call [method`Gtk`.Widget.compute_expand].
     * A container can decide how the expandability of children affects the
     * expansion of the container by overriding the compute_expand virtual
     * method on `GtkWidget`.).
     * 
     * Setting hexpand explicitly with this function will override the
     * automatic expand behavior.
     * 
     * This function forces the widget to expand or not to expand,
     * regardless of children.  The override occurs because
     * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
     * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
     * value to be used, rather than looking at children and widget state.
     * @param expand whether to expand
     */
    set_hexpand(expand: boolean): void
    /**
     * Sets whether the hexpand flag will be used.
     * 
     * The [property`Gtk`.Widget:hexpand-set] property will be set
     * automatically when you call [method`Gtk`.Widget.set_hexpand]
     * to set hexpand, so the most likely reason to use this function
     * would be to unset an explicit expand flag.
     * 
     * If hexpand is set, then it overrides any computed
     * expand value based on child widgets. If hexpand is not
     * set, then the expand value depends on whether any
     * children of the widget would like to expand.
     * 
     * There are few reasons to use this function, but it’s here
     * for completeness and consistency.
     * @param set value for hexpand-set property
     */
    set_hexpand_set(set: boolean): void
    /**
     * Sets the layout manager delegate instance that provides an
     * implementation for measuring and allocating the children of `widget`.
     * @param layout_manager a `GtkLayoutManager`
     */
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    /**
     * Sets the bottom margin of `widget`.
     * @param margin the bottom margin
     */
    set_margin_bottom(margin: number): void
    /**
     * Sets the end margin of `widget`.
     * @param margin the end margin
     */
    set_margin_end(margin: number): void
    /**
     * Sets the start margin of `widget`.
     * @param margin the start margin
     */
    set_margin_start(margin: number): void
    /**
     * Sets the top margin of `widget`.
     * @param margin the top margin
     */
    set_margin_top(margin: number): void
    /**
     * Sets a widgets name.
     * 
     * Setting a name allows you to refer to the widget from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for [class`Gtk`.StyleContext].
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    set_name(name: string): void
    /**
     * Request the `widget` to be rendered partially transparent.
     * 
     * An opacity of 0 is fully transparent and an opacity of 1
     * is fully opaque.
     * 
     * Opacity works on both toplevel widgets and child widgets, although
     * there are some limitations: For toplevel widgets, applying opacity
     * depends on the capabilities of the windowing system. On X11, this
     * has any effect only on X displays with a compositing manager,
     * see gdk_display_is_composited(). On Windows and Wayland it should
     * always work, although setting a window’s opacity after the window
     * has been shown may cause some flicker.
     * 
     * Note that the opacity is inherited through inclusion — if you set
     * a toplevel to be partially translucent, all of its content will
     * appear translucent, since it is ultimatively rendered on that
     * toplevel. The opacity value itself is not inherited by child
     * widgets (since that would make widgets deeper in the hierarchy
     * progressively more translucent). As a consequence, [class`Gtk`.Popover]s
     * and other [iface`Gtk`.Native] widgets with their own surface will use their
     * own opacity value, and thus by default appear non-translucent,
     * even if they are attached to a toplevel that is translucent.
     * @param opacity desired opacity, between 0 and 1
     */
    set_opacity(opacity: number): void
    /**
     * Sets how `widget` treats content that is drawn outside the
     * widget's content area.
     * 
     * See the definition of [enum`Gtk`.Overflow] for details.
     * 
     * This setting is provided for widget implementations and
     * should not be used by application code.
     * 
     * The default value is %GTK_OVERFLOW_VISIBLE.
     * @param overflow desired overflow
     */
    set_overflow(overflow: Gtk.Overflow): void
    /**
     * Sets `parent` as the parent widget of `widget`.
     * 
     * This takes care of details such as updating the state and style
     * of the child to reflect its new location and resizing the parent.
     * The opposite function is [method`Gtk`.Widget.unparent].
     * 
     * This function is useful only when implementing subclasses of
     * `GtkWidget`.
     * @param parent parent widget
     */
    set_parent(parent: Gtk.Widget): void
    /**
     * Specifies whether `widget` will be treated as the default
     * widget within its toplevel when it has the focus, even if
     * another widget is the default.
     * @param receives_default whether or not `widget` can be a default widget.
     */
    set_receives_default(receives_default: boolean): void
    /**
     * Sets the sensitivity of a widget.
     * 
     * A widget is sensitive if the user can interact with it.
     * Insensitive widgets are “grayed out” and the user can’t
     * interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Sets the minimum size of a widget.
     * 
     * That is, the widget’s size request will be at least `width`
     * by `height`. You can use this function to force a widget to
     * be larger than it normally would be.
     * 
     * In most cases, [method`Gtk`.Window.set_default_size] is a better
     * choice for toplevel windows than this function; setting the default
     * size will still allow users to shrink the window. Setting the size
     * request will force them to leave the window at least as large as
     * the size request.
     * 
     * Note the inherent danger of setting any fixed size - themes,
     * translations into other languages, different fonts, and user action
     * can all change the appropriate size for a given widget. So, it's
     * basically impossible to hardcode a size that will always be
     * correct.
     * 
     * The size request of a widget is the smallest size a widget can
     * accept while still functioning well and drawing itself correctly.
     * However in some strange cases a widget may be allocated less than
     * its requested size, and in many cases a widget may be allocated more
     * space than it requested.
     * 
     * If the size request in a given direction is -1 (unset), then
     * the “natural” size request of the widget will be used instead.
     * 
     * The size request set here does not include any margin from the
     * properties
     * [property`Gtk`.Widget:margin-start],
     * [property`Gtk`.Widget:margin-end],
     * [property`Gtk`.Widget:margin-top], and
     * [property`Gtk`.Widget:margin-bottom], but it does include pretty
     * much all other padding or border properties set by any subclass
     * of `GtkWidget`.
     * @param width width `widget` should request, or -1 to unset
     * @param height height `widget` should request, or -1 to unset
     */
    set_size_request(width: number, height: number): void
    /**
     * Turns on flag values in the current widget state.
     * 
     * Typical widget states are insensitive, prelighted, etc.
     * 
     * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
     * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set
     * the widget's direction, use [method`Gtk`.Widget.set_direction].
     * 
     * This function is for use in widget implementations.
     * @param flags State flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    /**
     * Sets `markup` as the contents of the tooltip, which is marked
     * up with Pango markup.
     * 
     * This function will take care of setting the
     * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
     * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
     * 
     * See also [method`Gtk`.Tooltip.set_markup].
     * @param markup the contents of the tooltip for `widget`
     */
    set_tooltip_markup(markup?: string | null): void
    /**
     * Sets `text` as the contents of the tooltip.
     * 
     * If `text` contains any markup, it will be escaped.
     * 
     * This function will take care of setting
     * [property`Gtk`.Widget:has-tooltip] as a side effect,
     * and of the default handler for the
     * [signal`Gtk`.Widget::query-tooltip] signal.
     * 
     * See also [method`Gtk`.Tooltip.set_text].
     * @param text the contents of the tooltip for `widget`
     */
    set_tooltip_text(text?: string | null): void
    /**
     * Sets the vertical alignment of `widget`.
     * @param align the vertical alignment
     */
    set_valign(align: Gtk.Align): void
    /**
     * Sets whether the widget would like any available extra vertical
     * space.
     * 
     * See [method`Gtk`.Widget.set_hexpand] for more detail.
     * @param expand whether to expand
     */
    set_vexpand(expand: boolean): void
    /**
     * Sets whether the vexpand flag will be used.
     * 
     * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
     * @param set value for vexpand-set property
     */
    set_vexpand_set(set: boolean): void
    /**
     * Sets the visibility state of `widget`.
     * 
     * Note that setting this to %TRUE doesn’t mean the widget is
     * actually viewable, see [method`Gtk`.Widget.get_visible].
     * 
     * This function simply calls [method`Gtk`.Widget.show] or
     * [method`Gtk`.Widget.hide] but is nicer to use when the
     * visibility of the widget depends on some condition.
     * @param visible whether the widget should be shown or not
     */
    set_visible(visible: boolean): void
    /**
     * Returns whether `widget` should contribute to
     * the measuring and allocation of its parent.
     * 
     * This is %FALSE for invisible children, but also
     * for children that have their own surface.
     */
    should_layout(): boolean
    /**
     * Flags a widget to be displayed.
     * 
     * Any widget that isn’t shown will not appear on the screen.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    show(): void
    /**
     * Allocates widget with a transformation that translates
     * the origin to the position in `allocation`.
     * 
     * This is a simple form of [method`Gtk`.Widget.allocate].
     * @param allocation position and size to be allocated to `widget`
     * @param baseline The baseline of the child, or -1
     */
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    /**
     * Snapshot the a child of `widget`.
     * 
     * When a widget receives a call to the snapshot function,
     * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
     * to all children. This function provides a convenient way
     * of doing this. A widget, when it receives a call to its
     * [vfunc`Gtk`.Widget.snapshot] function, calls
     * gtk_widget_snapshot_child() once for each child, passing in
     * the `snapshot` the widget received.
     * 
     * gtk_widget_snapshot_child() takes care of translating the origin of
     * `snapshot,` and deciding whether the child needs to be snapshot.
     * 
     * This function does nothing for children that implement `GtkNative`.
     * @param child a child of `widget`
     * @param snapshot `GtkSnapshot` as passed to the widget. In particular, no   calls to gtk_snapshot_translate() or other transform calls should   have been made.
     */
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    /**
     * Translate coordinates relative to `src_widget’`s allocation
     * to coordinates relative to `dest_widget’`s allocations.
     * 
     * In order to perform this operation, both widget must share
     * a common ancestor.
     * @param dest_widget a `GtkWidget`
     * @param src_x X position relative to `src_widget`
     * @param src_y Y position relative to `src_widget`
     */
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    /**
     * Triggers a tooltip query on the display where the toplevel
     * of `widget` is located.
     */
    trigger_tooltip_query(): void
    /**
     * Causes a widget to be unmapped if it’s currently mapped.
     * 
     * This function is only for use in widget implementations.
     */
    unmap(): void
    /**
     * Dissociate `widget` from its parent.
     * 
     * This function is only for use in widget implementations,
     * typically in dispose.
     */
    unparent(): void
    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     */
    unrealize(): void
    /**
     * Turns off flag values for the current widget state.
     * 
     * See [method`Gtk`.Widget.set_state_flags].
     * 
     * This function is for use in widget implementations.
     * @param flags State flags to turn off
     */
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    /**
     * Retrieves the `GtkAccessibleRole` for the given `GtkAccessible`.
     */
    get_accessible_role(): Gtk.AccessibleRole
    /**
     * Resets the accessible `property` to its default value.
     * @param property a `GtkAccessibleProperty`
     */
    reset_property(property: Gtk.AccessibleProperty): void
    /**
     * Resets the accessible `relation` to its default value.
     * @param relation a `GtkAccessibleRelation`
     */
    reset_relation(relation: Gtk.AccessibleRelation): void
    /**
     * Resets the accessible `state` to its default value.
     * @param state a `GtkAccessibleState`
     */
    reset_state(state: Gtk.AccessibleState): void
    /**
     * Updates an array of accessible properties.
     * 
     * This function should be called by `GtkWidget` types whenever an accessible
     * property change must be communicated to assistive technologies.
     * 
     * This function is meant to be used by language bindings.
     * @param properties an array of `GtkAccessibleProperty`
     * @param values an array of `GValues`, one for each property
     */
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    /**
     * Updates an array of accessible relations.
     * 
     * This function should be called by `GtkWidget` types whenever an accessible
     * relation change must be communicated to assistive technologies.
     * 
     * This function is meant to be used by language bindings.
     * @param relations an array of `GtkAccessibleRelation`
     * @param values an array of `GValues`, one for each relation
     */
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    /**
     * Updates an array of accessible states.
     * 
     * This function should be called by `GtkWidget` types whenever an accessible
     * state change must be communicated to assistive technologies.
     * 
     * This function is meant to be used by language bindings.
     * @param states an array of `GtkAccessibleState`
     * @param values an array of `GValues`, one for each state
     */
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    /**
     * Gets the ID of the `buildable` object.
     * 
     * `GtkBuilder` sets the name based on the ID attribute
     * of the <object> tag used to construct the `buildable`.
     */
    get_buildable_id(): string | null
    /* Virtual methods of Retro-2.Retro.CoreView */
    /**
     * Adds a child to `buildable`. `type` is an optional string
     * describing how the child should be added.
     * @param builder a `GtkBuilder`
     * @param child child to add
     * @param type kind of child or %NULL
     */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    /**
     * Similar to gtk_buildable_parser_finished() but is
     * called once for each custom tag handled by the `buildable`.
     * @param builder a `GtkBuilder`
     * @param child child object or %NULL for non-child tags
     * @param tagname the name of the tag
     * @param data user data created in custom_tag_start
     */
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * Called at the end of each custom element handled by
     * the buildable.
     * @param builder `GtkBuilder` used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     * @param data user data that will be passed in to parser functions
     */
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    /**
     * Called for each unknown element under `<child>`.
     * @param builder a `GtkBuilder` used to construct this object
     * @param child child object or %NULL for non-child tags
     * @param tagname name of tag
     */
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    /**
     * Retrieves the internal child called `childname` of the `buildable` object.
     * @param builder a `GtkBuilder`
     * @param childname name of child
     */
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    /**
     * Tests if the point at (`x,` `y)` is contained in `widget`.
     * 
     * The coordinates for (`x,` `y)` must be in widget coordinates, so
     * (0, 0) is assumed to be the top left of `widget'`s content area.
     * @param x X coordinate to test, relative to `widget'`s origin
     * @param y Y coordinate to test, relative to `widget'`s origin
     */
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    /**
     * Gets whether the widget prefers a height-for-width layout
     * or a width-for-height layout.
     * 
     * Single-child widgets generally propagate the preference of
     * their child, more complex widgets need to request something
     * either in context of their children or in context of their
     * allocation capabilities.
     */
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    /**
     * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
     * 
     * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
     * implementation cannot transfer the focus to a descendant of `widget`
     * that is focusable, it will not take focus and %FALSE will be returned.
     * 
     * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
     * is allowed, should not have an effect, and return %TRUE.
     */
    vfunc_grab_focus(): boolean
    /**
     * Reverses the effects of gtk_widget_show().
     * 
     * This is causing the widget to be hidden (invisible to the user).
     */
    vfunc_hide(): void
    /**
     * Emits the `::keynav-failed` signal on the widget.
     * 
     * This function should be called whenever keyboard navigation
     * within a single widget hits a boundary.
     * 
     * The return value of this function should be interpreted
     * in a way similar to the return value of
     * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
     * stay in the widget, the failed keyboard  navigation is OK
     * and/or there is nowhere we can/should move the focus to.
     * When %FALSE is returned, the caller should continue with
     * keyboard navigation outside the widget, e.g. by calling
     * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
     * 
     * The default [signal`Gtk`.Widget::keynav-failed] handler returns
     * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
     * For the other values of `GtkDirectionType` it returns %TRUE.
     * 
     * Whenever the default handler returns %TRUE, it also calls
     * [method`Gtk`.Widget.error_bell] to notify the user of the
     * failed keyboard navigation.
     * 
     * A use case for providing an own implementation of ::keynav-failed
     * (either by connecting to it or by overriding it) would be a row of
     * [class`Gtk`.Entry] widgets where the user should be able to navigate
     * the entire row with the cursor keys, as e.g. known from user
     * interfaces that require entering license keys.
     * @param direction direction of focus movement
     */
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    /**
     * Causes a widget to be mapped if it isn’t already.
     * 
     * This function is only for use in widget implementations.
     */
    vfunc_map(): void
    /**
     * Measures `widget` in the orientation `orientation` and for the given `for_size`.
     * 
     * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
     * is 300, this functions will compute the minimum and natural width of `widget`
     * if it is allocated at a height of 300 pixels.
     * 
     * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
     * a more details on implementing `GtkWidgetClass.measure()`.
     * @param orientation the orientation to measure
     * @param for_size Size for the opposite of `orientation,` i.e.   if `orientation` is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
     */
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    /**
     * Emits the ::mnemonic-activate signal.
     * 
     * See [signal`Gtk`.Widget::mnemonic-activate].
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     */
    vfunc_realize(): void
    vfunc_root(): void
    /**
     * Set `child` as the current focus child of `widget`.
     * 
     * This function is only suitable for widget implementations.
     * If you want a certain widget to get the input focus, call
     * [method`Gtk`.Widget.grab_focus] on it.
     * @param child a direct child widget of `widget` or %NULL   to unset the focus child of `widget`
     */
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    /**
     * Flags a widget to be displayed.
     * 
     * Any widget that isn’t shown will not appear on the screen.
     * 
     * Remember that you have to show the containers containing a widget,
     * in addition to the widget itself, before it will appear onscreen.
     * 
     * When a toplevel container is shown, it is immediately realized and
     * mapped; other shown widgets are realized and mapped when their
     * toplevel container is realized and mapped.
     */
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    /**
     * Causes a widget to be unmapped if it’s currently mapped.
     * 
     * This function is only for use in widget implementations.
     */
    vfunc_unmap(): void
    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     */
    vfunc_unrealize(): void
    vfunc_unroot(): void
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
    /* Signals of Retro-2.Retro.CoreView */
    /**
     * The ::controller-state-changed signal is emitted when a key is pressed
     * or released, mouse pointer is moved, or a mouse button is pressed or
     * released.
     * 
     * Applications should not connect to it.
     */
    connect(sigName: "controller-state-changed", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "controller-state-changed", callback: (($obj: CoreView) => void)): number
    emit(sigName: "controller-state-changed"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    /**
     * Signals that all holders of a reference to the widget should release
     * the reference that they hold.
     * 
     * May result in finalization of the widget if all references are released.
     * 
     * This signal is not suitable for saving widget state.
     */
    connect(sigName: "destroy", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: CoreView) => void)): number
    emit(sigName: "destroy"): void
    /**
     * Emitted when the text direction of a widget changes.
     * @param previous_direction the previous text direction of `widget`
     */
    connect(sigName: "direction-changed", callback: (($obj: CoreView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: CoreView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    /**
     * Emitted when `widget` is hidden.
     */
    connect(sigName: "hide", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: CoreView) => void)): number
    emit(sigName: "hide"): void
    /**
     * Emitted if keyboard navigation fails.
     * 
     * See [method`Gtk`.Widget.keynav_failed] for details.
     * @param direction the direction of movement
     */
    connect(sigName: "keynav-failed", callback: (($obj: CoreView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: CoreView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    /**
     * Emitted when `widget` is going to be mapped.
     * 
     * A widget is mapped when the widget is visible (which is controlled with
     * [property`Gtk`.Widget:visible]) and all its parents up to the toplevel widget
     * are also visible.
     * 
     * The ::map signal can be used to determine whether a widget will be drawn,
     * for instance it can resume an animation that was stopped during the
     * emission of [signal`Gtk`.Widget::unmap].
     */
    connect(sigName: "map", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "map", callback: (($obj: CoreView) => void)): number
    emit(sigName: "map"): void
    /**
     * Emitted when a widget is activated via a mnemonic.
     * 
     * The default handler for this signal activates `widget` if `group_cycling`
     * is %FALSE, or just makes `widget` grab focus if `group_cycling` is %TRUE.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     */
    connect(sigName: "mnemonic-activate", callback: (($obj: CoreView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: CoreView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    /**
     * Emitted when the focus is moved.
     * @param direction the direction of the focus move
     */
    connect(sigName: "move-focus", callback: (($obj: CoreView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: CoreView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    /**
     * Emitted when the widgets tooltip is about to be shown.
     * 
     * This happens when the [property`Gtk`.Widget:has-tooltip] property
     * is %TRUE and the hover timeout has expired with the cursor hovering
     * "above" `widget;` or emitted when `widget` got focus in keyboard mode.
     * 
     * Using the given coordinates, the signal handler should determine
     * whether a tooltip should be shown for `widget`. If this is the case
     * %TRUE should be returned, %FALSE otherwise.  Note that if
     * `keyboard_mode` is %TRUE, the values of `x` and `y` are undefined and
     * should not be used.
     * 
     * The signal handler is free to manipulate `tooltip` with the therefore
     * destined function calls.
     * @param x the x coordinate of the cursor position where the request has   been emitted, relative to `widget'`s left side
     * @param y the y coordinate of the cursor position where the request has   been emitted, relative to `widget'`s top
     * @param keyboard_mode %TRUE if the tooltip was triggered using the keyboard
     * @param tooltip a `GtkTooltip`
     */
    connect(sigName: "query-tooltip", callback: (($obj: CoreView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: CoreView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    /**
     * Emitted when `widget` is associated with a `GdkSurface`.
     * 
     * This means that [method`Gtk`.Widget.realize] has been called
     * or the widget has been mapped (that is, it is going to be drawn).
     */
    connect(sigName: "realize", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: CoreView) => void)): number
    emit(sigName: "realize"): void
    /**
     * Emitted when `widget` is shown.
     */
    connect(sigName: "show", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "show", callback: (($obj: CoreView) => void)): number
    emit(sigName: "show"): void
    /**
     * Emitted when the widget state changes.
     * 
     * See [method`Gtk`.Widget.get_state_flags].
     * @param flags The previous state flags.
     */
    connect(sigName: "state-flags-changed", callback: (($obj: CoreView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: CoreView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    /**
     * Emitted when `widget` is going to be unmapped.
     * 
     * A widget is unmapped when either it or any of its parents up to the
     * toplevel widget have been set as hidden.
     * 
     * As ::unmap indicates that a widget will not be shown any longer,
     * it can be used to, for example, stop an animation on the widget.
     */
    connect(sigName: "unmap", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: CoreView) => void)): number
    emit(sigName: "unmap"): void
    /**
     * Emitted when the `GdkSurface` associated with `widget` is destroyed.
     * 
     * This means that [method`Gtk`.Widget.unrealize] has been called
     * or the widget has been unmapped (that is, it is going to be hidden).
     */
    connect(sigName: "unrealize", callback: (($obj: CoreView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: CoreView) => void)): number
    emit(sigName: "unrealize"): void
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
    connect(sigName: "notify", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-grab-pointer", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-grab-pointer", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::snap-pointer-to-borders", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-pointer-to-borders", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-name", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: CoreView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CoreView_ConstructProps)
    _init (config?: CoreView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CoreView
    static $gtype: GObject.Type
}
interface KeyJoypadMapping_ConstructProps extends GObject.Object_ConstructProps {
}
class KeyJoypadMapping {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.KeyJoypadMapping */
    /**
     * Gets the mapping key code for the joypad button id.
     * @param button joypad button id
     */
    get_button_key(button: JoypadId): number
    /**
     * Maps the joypad button id to mapping key code.
     * @param button joypad button id
     * @param hardware_keycode mapping key code
     */
    set_button_key(button: JoypadId, hardware_keycode: number): void
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
    connect(sigName: "notify", callback: (($obj: KeyJoypadMapping, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyJoypadMapping, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyJoypadMapping_ConstructProps)
    _init (config?: KeyJoypadMapping_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): KeyJoypadMapping
    static new_default(): KeyJoypadMapping
    static $gtype: GObject.Type
}
interface ModuleIterator_ConstructProps extends GObject.Object_ConstructProps {
}
class ModuleIterator {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.ModuleIterator */
    /**
     * Gets the last #RetroCoreDescriptor fetched by retro_module_iterator_next(),
     * or %NULL if the end was reached.
     */
    get(): CoreDescriptor | null
    /**
     * Fetch the next #RetroModuleIterator.
     */
    next(): boolean
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
    connect(sigName: "notify", callback: (($obj: ModuleIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModuleIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModuleIterator_ConstructProps)
    _init (config?: ModuleIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(lookup_paths: string[], recursive: boolean): ModuleIterator
    static $gtype: GObject.Type
}
interface ModuleQuery_ConstructProps extends GObject.Object_ConstructProps {
}
class ModuleQuery {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.ModuleQuery */
    /**
     * Creates a new #RetroModuleIterator.
     */
    iterator(): ModuleIterator
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
    connect(sigName: "notify", callback: (($obj: ModuleQuery, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ModuleQuery, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ModuleQuery_ConstructProps)
    _init (config?: ModuleQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(recursive: boolean): ModuleQuery
    static $gtype: GObject.Type
}
interface Option_ConstructProps extends GObject.Object_ConstructProps {
}
class Option {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.Option */
    /**
     * Gets the description of `self`.
     */
    get_description(): string
    /**
     * Gets the key of `self`.
     */
    get_key(): string
    /**
     * Gets the value of `self`.
     */
    get_value(): string
    /**
     * Gets the value of `self`.
     */
    get_values(): string[]
    /**
     * Sets the value for `self`. An error will be thrown if the value is invalid for
     * `self`.
     * @param value the value
     */
    set_value(value: string): void
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
    /* Signals of Retro-2.Retro.Option */
    connect(sigName: "value-changed", callback: (($obj: Option) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: Option) => void)): number
    emit(sigName: "value-changed"): void
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
    connect(sigName: "notify", callback: (($obj: Option, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Option, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Option_ConstructProps)
    _init (config?: Option_ConstructProps): void
    static $gtype: GObject.Type
}
interface OptionIterator_ConstructProps extends GObject.Object_ConstructProps {
}
class OptionIterator {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Retro-2.Retro.OptionIterator */
    /**
     * Fetch the next #RetroOption and its key.
     */
    next(): [ /* returnType */ boolean, /* key */ number | null, /* option */ Option | null ]
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
    connect(sigName: "notify", callback: (($obj: OptionIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OptionIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OptionIterator_ConstructProps)
    _init (config?: OptionIterator_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ControllerInterface {
    /* Fields of Retro-2.Retro.ControllerInterface */
    /**
     * The parent interface.
     */
    parent_iface: GObject.TypeInterface
    get_input_state: (self: Controller, input: Input) => number
    get_controller_type: (self: Controller) => ControllerType
    get_capabilities: (self: Controller) => number
    get_supports_rumble: (self: Controller) => boolean
    set_rumble_state: (self: Controller, effect: RumbleEffect, strength: number) => void
    static name: string
}
abstract class ControllerIteratorClass {
    /* Fields of Retro-2.Retro.ControllerIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class CoreClass {
    /* Fields of Retro-2.Retro.CoreClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class CoreDescriptorClass {
    /* Fields of Retro-2.Retro.CoreDescriptorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class CoreViewClass {
    /* Fields of Retro-2.Retro.CoreViewClass */
    parent_class: Gtk.WidgetClass
    static name: string
}
abstract class KeyJoypadMappingClass {
    /* Fields of Retro-2.Retro.KeyJoypadMappingClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class ModuleIteratorClass {
    /* Fields of Retro-2.Retro.ModuleIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class ModuleQueryClass {
    /* Fields of Retro-2.Retro.ModuleQueryClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class OptionClass {
    /* Fields of Retro-2.Retro.OptionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class OptionIteratorClass {
    /* Fields of Retro-2.Retro.OptionIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class Pixdata {
    /* Methods of Retro-2.Retro.Pixdata */
    /**
     * Copies `self` into a new #RetroPixdata.
     */
    copy(): Pixdata
    /**
     * Frees the given #RetroPixdata object.
     */
    free(): void
    /**
     * Gets the aspect ratio the video should be rendered with.
     */
    get_aspect_ratio(): number
    /**
     * Gets the height of `self`.
     */
    get_height(): number
    /**
     * Gets the width of `self`.
     */
    get_width(): number
    /**
     * Loads an OpenGL texture from `self`.
     */
    load_gl_texture(): boolean
    /**
     * Creates a new #GdkPixbuf from `self`.
     * 
     * The #GdkPixbuf stores the intended aspect-ratio, you can access it via
     * retro_pixbuf_get_aspect_ratio().
     */
    to_pixbuf(): GdkPixbuf.Pixbuf
    static name: string
}
class Input {
    /* Methods of Retro-2.Retro.Input */
    /**
     * Copies `self` into a new #RetroInput.
     */
    copy(): Input
    /**
     * Frees the given #RetroInput.
     */
    free(): void
    /**
     * Gets the analog id and index of `self,` if any.
     */
    get_analog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     */
    get_controller_type(): ControllerType
    /**
     * Gets the joypad id of `self,` if any.
     */
    get_joypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of `self,` if any.
     */
    get_lightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of `self,` if any.
     */
    get_mouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of `self,` if any.
     */
    get_pointer(): [ /* returnType */ boolean, /* id */ PointerId ]
    static name: string
    static new(): Input
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Input
}
}
export default Retro;