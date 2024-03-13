
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rygelrenderergst-2.8-ambient.d.ts';
import './rygelrenderergst-2.8-import.d.ts';
/**
 * RygelRendererGst-2.8
 */

import type RygelRenderer from '@girs/rygelrenderer-2.8';
import type RygelCore from '@girs/rygelcore-2.8';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.6';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type GSSDP from '@girs/gssdp-1.6';
import type GUPnPAV from '@girs/gupnpav-1.0';
import type Gst from '@girs/gst-1.0';
import type GModule from '@girs/gmodule-2.0';

export namespace RygelRendererGst {

class PlaybinPlayerError extends GLib.Error {

    // Static fields of RygelRendererGst.PlaybinPlayerError

static NO_ELEMENT: number

    // Constructors of RygelRendererGst.PlaybinPlayerError

constructor(options: { message: string, code: number});
_init(...args: any[]): void;

}

module PlaybinPlayer {

    // Constructor properties interface

    interface ConstructorProps extends GObject.Object.ConstructorProps, RygelRenderer.MediaPlayer.ConstructorProps {
playbin: Gst.Element;
    supported_profiles: RygelCore.DLNAProfile[];
    supportedProfiles: RygelCore.DLNAProfile[];
    }

}

class PlaybinPlayer extends GObject.Object implements RygelRenderer.MediaPlayer {

    // Own properties of RygelRendererGst.PlaybinPlayer

    get playbin(): Gst.Element;
    set playbin(val: Gst.Element);
    get supported_profiles(): RygelCore.DLNAProfile[];
    get supportedProfiles(): RygelCore.DLNAProfile[];

    // Constructors of RygelRendererGst.PlaybinPlayer


constructor(properties?: Partial<PlaybinPlayer.ConstructorProps>, ...args: any[]);

_init(...args: any[]): void;


    // Own static methods of RygelRendererGst.PlaybinPlayer

    static instance(): PlaybinPlayer

    // Own methods of RygelRendererGst.PlaybinPlayer

    get_playbin(): Gst.Element
    get_supported_profiles(): RygelCore.DLNAProfile[]

// Inherited properties
get playback_state(): string;
set playback_state(val: string);
get playbackState(): string;
set playbackState(val: string);
get allowed_playback_speeds(): string[];
get allowedPlaybackSpeeds(): string[];
get playback_speed(): string;
set playback_speed(val: string);
get playbackSpeed(): string;
set playbackSpeed(val: string);
get uri(): string;
set uri(val: string);
get volume(): number;
set volume(val: number);
get duration(): number;
get size(): number;
get metadata(): string;
set metadata(val: string);
get mime_type(): string;
set mime_type(val: string);
get mimeType(): string;
set mimeType(val: string);
get can_seek(): boolean;
get canSeek(): boolean;
get can_seek_bytes(): boolean;
get canSeekBytes(): boolean;
get content_features(): string;
set content_features(val: string);
get contentFeatures(): string;
set contentFeatures(val: string);
get position(): number;
get byte_position(): number;
get bytePosition(): number;
get user_agent(): string;
set user_agent(val: string);
get userAgent(): string;
set userAgent(val: string);

// Inherited methods
seek(time: number): boolean
seek_bytes(bytes: number): boolean
get_protocols(): string[]
get_mime_types(): string[]
play_speed_to_double(speed: string): number
get_playback_state(): string
set_playback_state(value: string): void
get_allowed_playback_speeds(): string[]
get_playback_speed(): string
set_playback_speed(value: string): void
get_uri(): (string | null)
set_uri(value?: (string | null)): void
get_volume(): number
set_volume(value: number): void
get_duration(): number
get_size(): number
get_metadata(): (string | null)
set_metadata(value?: (string | null)): void
get_mime_type(): (string | null)
set_mime_type(value?: (string | null)): void
get_can_seek(): boolean
get_can_seek_bytes(): boolean
get_content_features(): (string | null)
set_content_features(value?: (string | null)): void
get_duration_as_str(): string
get_position(): number
get_byte_position(): number
get_position_as_str(): string
get_user_agent(): (string | null)
set_user_agent(value?: (string | null)): void
get_protocol_info(): string
vfunc_seek(time: number): boolean
vfunc_seek_bytes(bytes: number): boolean
vfunc_get_protocols(): string[]
vfunc_get_mime_types(): string[]
vfunc_get_playback_state(): string
vfunc_set_playback_state(value: string): void
vfunc_get_allowed_playback_speeds(): string[]
vfunc_get_playback_speed(): string
vfunc_set_playback_speed(value: string): void
vfunc_get_uri(): (string | null)
vfunc_set_uri(value?: (string | null)): void
vfunc_get_volume(): number
vfunc_set_volume(value: number): void
vfunc_get_duration(): number
vfunc_get_size(): number
vfunc_get_metadata(): (string | null)
vfunc_set_metadata(value?: (string | null)): void
vfunc_get_mime_type(): (string | null)
vfunc_set_mime_type(value?: (string | null)): void
vfunc_get_can_seek(): boolean
vfunc_get_can_seek_bytes(): boolean
vfunc_get_content_features(): (string | null)
vfunc_set_content_features(value?: (string | null)): void
vfunc_get_position(): number
vfunc_get_byte_position(): number
vfunc_get_user_agent(): (string | null)
vfunc_set_user_agent(value?: (string | null)): void
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
bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
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
bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: (GObject.BindingTransformFunc | null), transform_from?: (GObject.BindingTransformFunc | null), notify?: (GLib.DestroyNotify | null)): GObject.Binding
bind_property_full(...args: never[]): any
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
 * @returns the data if found,          or %NULL if no such data exists.
 */
get_data(key: string): (any | null)
get_property(property_name: string): any
/**
 * This function gets back user data pointers stored via
 * g_object_set_qdata().
 * @param quark A #GQuark, naming the user data pointer
 * @returns The user data pointer set, or %NULL
 */
get_qdata(quark: GLib.Quark): (any | null)
/**
 * Gets `n_properties` properties for an `object`.
 * Obtained properties will be set to `values`. All properties must be valid.
 * Warnings will be emitted and undefined behaviour may result if invalid
 * properties are passed in.
 * @param names the names of each property to get
 * @param values the values of each property to get
 */
getv(names: string[], values: GObject.Value[]): void
/**
 * Checks whether `object` has a [floating][floating-ref] reference.
 * @returns %TRUE if @object has a floating reference
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
 * @param property_name the name of a property installed on the class of @object.
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
 *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
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
notify_by_pspec(pspec: GObject.ParamSpec): void
/**
 * Increases the reference count of `object`.
 * 
 * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
 * of `object` will be propagated to the return type (using the GCC typeof()
 * extension), so any casting the caller needs to do on the return type must be
 * explicit.
 * @returns the same @object
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
 * @returns @object
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
set_data(key: string, data?: (any | null)): void
set_property(property_name: string, value: any): void
/**
 * Remove a specified datum from the object's data associations,
 * without invoking the association's destroy handler.
 * @param key name of the key
 * @returns the data if found, or %NULL          if no such data exists.
 */
steal_data(key: string): (any | null)
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
steal_qdata(quark: GLib.Quark): (any | null)
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
watch_closure(closure: GObject.Closure): void
vfunc_constructed(): void
vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
vfunc_dispose(): void
vfunc_finalize(): void
vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
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
vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
disconnect(id: number): void
set(properties: { [key: string]: any }): void
block_signal_handler(id: number): any
unblock_signal_handler(id: number): any
stop_emission_by_name(detailedName: string): any
}

module PlaybinRenderer {

    // Constructor properties interface

    interface ConstructorProps extends RygelRenderer.MediaRenderer.ConstructorProps {

    }

}

class PlaybinRenderer extends RygelRenderer.MediaRenderer {

    // Constructors of RygelRendererGst.PlaybinRenderer


constructor(properties?: Partial<PlaybinRenderer.ConstructorProps>, ...args: any[]);

_init(...args: any[]): void;


static ["new"](title: string): PlaybinRenderer;

    // Own methods of RygelRendererGst.PlaybinRenderer

    get_playbin(): (Gst.Element | null)
}

type PlaybinPlayerClass = typeof PlaybinPlayer
abstract class PlaybinPlayerPrivate {

    // Constructors of RygelRendererGst.PlaybinPlayerPrivate

_init(...args: any[]): void;

}

type PlaybinRendererClass = typeof PlaybinRenderer
abstract class PlaybinRendererPrivate {

    // Constructors of RygelRendererGst.PlaybinRendererPrivate

_init(...args: any[]): void;

}

/**
 * Name of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default RygelRendererGst;
// END