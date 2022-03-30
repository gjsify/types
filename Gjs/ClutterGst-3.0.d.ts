/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-3.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type Gio from './Gio-2.0';
import type Cogl from './Cogl-1.0';
import type GL from './GL-1.0';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Atk from './Atk-1.0';

export namespace ClutterGst {

/**
 * Different buffering policies clutter-gst supports
 */
enum BufferingMode {
    /**
     * In-memory buffering
     */
    STREAM,
    /**
     * On-disk buffering
     */
    DOWNLOAD,
}
/**
 * Flags that can be given to clutter_gst_player_set_seek_flags().
 */
enum SeekFlags {
    /**
     * Fast seeks (key frame boundaries, default)
     */
    NONE,
    /**
     * Accurate seeks (potentially slower)
     */
    ACCURATE,
}
/**
 * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MAJOR_VERSION: number
/**
 * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MICRO_VERSION: number
/**
 * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MINOR_VERSION: number
/**
 * ClutterGst full version (e.g. "1.2.3")
 */
const VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
const VERSION_S: string
function create_video_sink(): Gst.Element
function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function init_with_args(argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
class Player {
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume: number
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing: boolean
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    /**
     * Retrieves the playback volume of `self`.
     */
    get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    get_video_sink(): VideoSink
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    set_playing(playing: boolean): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Player */
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /**
     * Retrieves the playback volume of `self`.
     */
    vfunc_get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    vfunc_get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    vfunc_get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    vfunc_get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    vfunc_set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (($obj: Player) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Player) => void)): number
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     * @param error the #GError
     */
    connect(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /**
     * The ::new-frame signal is emitted each time a frame is received
     * from the video sink.
     * @param frame the #ClutterGstFrame newly received from the video sink
     */
    connect(sigName: "new-frame", callback: (($obj: Player, frame: Frame) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Player, frame: Frame) => void)): number
    emit(sigName: "new-frame", frame: Frame): void
    /**
     * The ::ready signal is emitted each time the gstreamer pipeline
     * becomes ready.
     */
    connect(sigName: "ready", callback: (($obj: Player) => void)): number
    connect_after(sigName: "ready", callback: (($obj: Player) => void)): number
    emit(sigName: "ready"): void
    /**
     * The ::size-change signal is emitted each time the new frame
     * has different dimensions to the previous frame.
     * @param width new width of the frames
     * @param height new height of the frames
     */
    connect(sigName: "size-change", callback: (($obj: Player, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Player, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    static name: string
}
interface Aspectratio_ConstructProps extends Content_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Aspectratio */
    /**
     * Whether the content should fill its allocation with video rather
     * than adding borders.
     */
    fill_allocation?: boolean
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders?: boolean
}
class Aspectratio {
    /* Properties of ClutterGst-3.0.ClutterGst.Aspectratio */
    /**
     * Whether the content should fill its allocation with video rather
     * than adding borders.
     */
    fill_allocation: boolean
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders: boolean
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    /**
     * Set the current frame.
     * @param frame A #ClutterGstFrame
     */
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    invalidate(): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Aspectratio */
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Content */
    vfunc_has_painting_content(): boolean
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    /**
     * The ::size-change signal is emitted each time the video size changes.
     * @param width new width of the frames
     * @param height new height of the frames
     */
    connect(sigName: "size-change", callback: (($obj: Aspectratio, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Aspectratio, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
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
    connect(sigName: "notify", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    /**
     * This signal is emitted each time a #ClutterContent implementation is
     * assigned to a #ClutterActor.
     * @param actor a #ClutterActor
     */
    connect(sigName: "attached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    /**
     * This signal is emitted each time a #ClutterContent implementation is
     * removed from a #ClutterActor.
     * @param actor a #ClutterActor
     */
    connect(sigName: "detached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Aspectratio_ConstructProps)
    _init (config?: Aspectratio_ConstructProps): void
    static $gtype: GObject.Type
}
interface Camera_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Camera */
    device?: CameraDevice
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume?: number
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing?: boolean
}
class Camera {
    /* Properties of ClutterGst-3.0.ClutterGst.Camera */
    device: CameraDevice
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume: number
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Camera */
    get_brightness(cur_value: number): boolean
    get_brightness_range(min_value: number, max_value: number, default_value: number): boolean
    /**
     * Retrieve the current selected camera device.
     */
    get_camera_device(): CameraDevice
    /**
     * Retrieve the current value for the color balance property `property,`
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param cur_value Pointer to store the current value of `property`
     */
    get_color_balance_property(property: string, cur_value: number): boolean
    /**
     * Retrieve the minimum, maximum and default values for the color balance property `property,`
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param min_value Pointer to store the minimum value of `property,` or %NULL
     * @param max_value Pointer to store the maximum value of `property,` or %NULL
     * @param default_value Pointer to store the default value of `property,` or %NULL
     */
    get_color_balance_property_range(property: string, min_value: number, max_value: number, default_value: number): boolean
    get_contrast(cur_value: number): boolean
    get_contrast_range(min_value: number, max_value: number, default_value: number): boolean
    /**
     * Retrieve the current filter being used.
     */
    get_filter(): Gst.Element
    /**
     * Retrieve the current gamma value.
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param cur_value Pointer to store the current gamma value
     */
    get_gamma(cur_value: number): boolean
    /**
     * Retrieve the minimum, maximum and default gamma values.
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param min_value Pointer to store the minimum gamma value, or %NULL
     * @param max_value Pointer to store the maximum gamma value, or %NULL
     * @param default_value Pointer to store the default gamma value, or %NULL
     */
    get_gamma_range(min_value: number, max_value: number, default_value: number): boolean
    get_hue(cur_value: number): boolean
    get_hue_range(min_value: number, max_value: number, default_value: number): boolean
    get_saturation(cur_value: number): boolean
    get_saturation_range(min_value: number, max_value: number, default_value: number): boolean
    /**
     * Check whether the `self` is ready for video/photo capture.
     */
    is_ready_for_capture(): boolean
    /**
     * Check whether the `self` is recording video.
     */
    is_recording_video(): boolean
    /**
     * Remove the current filter, if any.
     */
    remove_filter(): boolean
    set_brightness(value: number): boolean
    /**
     * Set the new active camera device.
     * @param device a #ClutterGstCameraDevice
     */
    set_camera_device(device: CameraDevice): boolean
    /**
     * Set the value for the color balance property `property` to `value`.
     * Allowed values can be retrieved with
     * clutter_gst_camera_get_color_balance_property_range().
     * 
     * This method will return FALSE if `property` does not exist or color balance is not
     * supported on `self`.
     * See clutter_gst_camera_supports_color_balance().
     * @param property Property name
     * @param value The value to set
     */
    set_color_balance_property(property: string, value: number): boolean
    set_contrast(value: number): boolean
    /**
     * Set the filter element to be used.
     * Filters can be used for effects, image processing, etc.
     * @param filter a #GstElement for the filter
     */
    set_filter(filter: Gst.Element): boolean
    /**
     * Set the gamma value.
     * Allowed values can be retrieved with
     * clutter_gst_camera_get_gamma_range().
     * 
     * This method will return FALSE if gamma correction is not
     * supported on `self`.
     * See clutter_gst_camera_supports_gamma_correction().
     * @param value The value to set
     */
    set_gamma(value: number): boolean
    set_hue(value: number): boolean
    /**
     * Set the encoding profile to be used for photo captures.
     * The default profile saves photos as JPEG images.
     * @param profile A #GstEncodingProfile to be used for photo captures.
     */
    set_photo_profile(profile: GstPbutils.EncodingProfile): void
    set_saturation(value: number): boolean
    /**
     * Set the encoding profile to be used for video recording.
     * The default profile saves videos as Ogg/Theora videos.
     * @param profile A #GstEncodingProfile to be used for video recording.
     */
    set_video_profile(profile: GstPbutils.EncodingProfile): void
    /**
     * Start a video recording with the `self` and save it to `filename`.
     * This method requires that `self` is playing and ready for capture.
     * 
     * The ::video-saved signal will be emitted when the video is saved.
     * @param filename the name of the video file to where the recording will be saved
     */
    start_video_recording(filename: string): boolean
    /**
     * Stop recording video on the `self`.
     */
    stop_video_recording(): void
    /**
     * Check whether the `self` supports color balance.
     */
    supports_color_balance(): boolean
    /**
     * Check whether the `self` supports gamma correction.
     */
    supports_gamma_correction(): boolean
    /**
     * Take a photo with the `self` and save it to `filename`.
     * This method requires that `self` is playing and ready for capture.
     * 
     * The ::photo-saved signal will be emitted when the video is saved.
     * @param filename the name of the file to where the photo will be saved
     */
    take_photo(filename: string): boolean
    /**
     * Take a photo with the `self` and emit it in the ::photo-taken signal as a
     * #GdkPixbuf.
     * This method requires that `self` is playing and ready for capture.
     */
    take_photo_pixbuf(): boolean
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
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    /**
     * Retrieves the playback volume of `self`.
     */
    get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    get_video_sink(): VideoSink
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    set_playing(playing: boolean): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Camera */
    vfunc_photo_saved(): void
    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_ready_for_capture(ready: boolean): void
    vfunc_video_saved(): void
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /**
     * Retrieves the playback volume of `self`.
     */
    vfunc_get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    vfunc_get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    vfunc_get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    vfunc_get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    vfunc_set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.Camera */
    /**
     * The ::photo-saved signal is emitted when a photo was saved to disk.
     */
    connect(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    emit(sigName: "photo-saved"): void
    /**
     * The ::photo-taken signal is emitted when a photo was taken.
     * @param pixbuf the photo taken as a #GdkPixbuf
     */
    connect(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    connect_after(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * The ::ready-for-capture signal is emitted whenever the value of
     * clutter_gst_camera_is_ready_for_capture changes.
     * @param ready whether the `self` is ready for a new capture
     */
    connect(sigName: "ready-for-capture", callback: (($obj: Camera, ready: boolean) => void)): number
    connect_after(sigName: "ready-for-capture", callback: (($obj: Camera, ready: boolean) => void)): number
    emit(sigName: "ready-for-capture", ready: boolean): void
    /**
     * The ::video-saved signal is emitted when a video was saved to disk.
     */
    connect(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    emit(sigName: "video-saved"): void
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
    connect(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Camera) => void)): number
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     * @param error the #GError
     */
    connect(sigName: "error", callback: (($obj: Camera, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Camera, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /**
     * The ::new-frame signal is emitted each time a frame is received
     * from the video sink.
     * @param frame the #ClutterGstFrame newly received from the video sink
     */
    connect(sigName: "new-frame", callback: (($obj: Camera, frame: Frame) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Camera, frame: Frame) => void)): number
    emit(sigName: "new-frame", frame: Frame): void
    /**
     * The ::ready signal is emitted each time the gstreamer pipeline
     * becomes ready.
     */
    connect(sigName: "ready", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "ready", callback: (($obj: Camera) => void)): number
    emit(sigName: "ready"): void
    /**
     * The ::size-change signal is emitted each time the new frame
     * has different dimensions to the previous frame.
     * @param width new width of the frames
     * @param height new height of the frames
     */
    connect(sigName: "size-change", callback: (($obj: Camera, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Camera, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Camera_ConstructProps)
    _init (config?: Camera_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Camera
    static $gtype: GObject.Type
}
interface CameraDevice_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.CameraDevice */
    /**
     * The GstElementFactory for this device.
     */
    element_factory?: Gst.ElementFactory
    /**
     * The device name.
     */
    name?: string
    /**
     * The device node.
     */
    node?: string
}
class CameraDevice {
    /* Properties of ClutterGst-3.0.ClutterGst.CameraDevice */
    /**
     * The GstElementFactory for this device.
     */
    readonly element_factory: Gst.ElementFactory
    /**
     * The device name.
     */
    readonly name: string
    /**
     * The device node.
     */
    readonly node: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.CameraDevice */
    /**
     * Retrieve the current capture resolution being used by `device`.
     */
    get_capture_resolution(): [ /* width */ number, /* height */ number ]
    /**
     * Retrieve the name of the `device`.
     */
    get_name(): string
    /**
     * Retrieve the node (location) of the `device`.
     */
    get_node(): string
    /**
     * Retrieve the supported resolutions of the `device`.
     */
    get_supported_resolutions(): VideoResolution[]
    /**
     * Set the capture resolution to be used by `device`.
     * @param width The new capture resolution width to use
     * @param height The new capture resolution height to use
     */
    set_capture_resolution(width: number, height: number): void
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
    /* Virtual methods of ClutterGst-3.0.ClutterGst.CameraDevice */
    vfunc_capture_resolution_changed(width: number, height: number): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.CameraDevice */
    /**
     * The ::capture-resolution-changed signal is emitted whenever the value of
     * clutter_gst_camera_device_get_capture_resolution changes.
     * @param width The new width
     * @param height The new height
     */
    connect(sigName: "capture-resolution-changed", callback: (($obj: CameraDevice, width: number, height: number) => void)): number
    connect_after(sigName: "capture-resolution-changed", callback: (($obj: CameraDevice, width: number, height: number) => void)): number
    emit(sigName: "capture-resolution-changed", width: number, height: number): void
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
    connect(sigName: "notify", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-factory", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-factory", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CameraDevice_ConstructProps)
    _init (config?: CameraDevice_ConstructProps): void
    static $gtype: GObject.Type
}
interface CameraManager_ConstructProps extends GObject.Object_ConstructProps {
}
class CameraManager {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.CameraManager */
    /**
     * Retrieve an array of supported camera devices.
     */
    get_camera_devices(): CameraDevice[]
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
    /* Signals of ClutterGst-3.0.ClutterGst.CameraManager */
    /**
     * The ::camera-added signal is emitted whenever a new camera device
     * is available.
     * @param camera_device a camera device added
     */
    connect(sigName: "camera-added", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    connect_after(sigName: "camera-added", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    emit(sigName: "camera-added", camera_device: CameraDevice): void
    /**
     * The ::camera-removed signal is emitted whenever a camera device
     * is unplugged/removed from the system.
     * @param camera_device a camera device
     */
    connect(sigName: "camera-removed", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    connect_after(sigName: "camera-removed", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    emit(sigName: "camera-removed", camera_device: CameraDevice): void
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
    connect(sigName: "notify", callback: (($obj: CameraManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CameraManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CameraManager_ConstructProps)
    _init (config?: CameraManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Get the camera manager.
     * 
     * <note>This function has to be called from Clutter's main
     * thread.</note>
     */
    static get_default(): CameraManager
    static $gtype: GObject.Type
}
interface Content_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Content */
    frame?: Frame
    paint_frame?: boolean
    paint_overlays?: boolean
    player?: GObject.Object
    sink?: VideoSink
}
class Content {
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    /**
     * Set the current frame.
     * @param frame A #ClutterGstFrame
     */
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    invalidate(): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Content */
    vfunc_has_painting_content(): boolean
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    /**
     * The ::size-change signal is emitted each time the video size changes.
     * @param width new width of the frames
     * @param height new height of the frames
     */
    connect(sigName: "size-change", callback: (($obj: Content, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Content, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
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
    connect(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    /**
     * This signal is emitted each time a #ClutterContent implementation is
     * assigned to a #ClutterActor.
     * @param actor a #ClutterActor
     */
    connect(sigName: "attached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    /**
     * This signal is emitted each time a #ClutterContent implementation is
     * removed from a #ClutterActor.
     * @param actor a #ClutterActor
     */
    connect(sigName: "detached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Content_ConstructProps)
    _init (config?: Content_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_sink(sink: VideoSink): Clutter.Content
    static $gtype: GObject.Type
}
interface Crop_ConstructProps extends Content_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Crop */
    /**
     * Whether to cull the backface of the actor
     */
    cull_backface?: boolean
    /**
     * Input region in the video frame (all values between 0 and 1).
     */
    input_region?: Box
    /**
     * Output region in the actor's allocation (all values between 0 and 1).
     */
    output_region?: Box
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders?: boolean
}
class Crop {
    /* Properties of ClutterGst-3.0.ClutterGst.Crop */
    /**
     * Whether to cull the backface of the actor
     */
    cull_backface: boolean
    /**
     * Input region in the video frame (all values between 0 and 1).
     */
    input_region: Box
    /**
     * Output region in the actor's allocation (all values between 0 and 1).
     */
    output_region: Box
    /**
     * Whether or not paint borders on the sides of the video
     */
    paint_borders: boolean
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    /**
     * Set the current frame.
     * @param frame A #ClutterGstFrame
     */
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    invalidate(): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Crop */
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Content */
    vfunc_has_painting_content(): boolean
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    /**
     * Retrieves the natural size of the `content,` if any.
     * 
     * The natural size of a #ClutterContent is defined as the size the content
     * would have regardless of the allocation of the actor that is painting it,
     * for instance the size of an image data.
     */
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Invalidates a #ClutterContent.
     * 
     * This function should be called by #ClutterContent implementations when
     * they change the way a the content should be painted regardless of the
     * actor state.
     */
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    /**
     * The ::size-change signal is emitted each time the video size changes.
     * @param width new width of the frames
     * @param height new height of the frames
     */
    connect(sigName: "size-change", callback: (($obj: Crop, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Crop, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
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
    connect(sigName: "notify", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    /**
     * This signal is emitted each time a #ClutterContent implementation is
     * assigned to a #ClutterActor.
     * @param actor a #ClutterActor
     */
    connect(sigName: "attached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    /**
     * This signal is emitted each time a #ClutterContent implementation is
     * removed from a #ClutterActor.
     * @param actor a #ClutterActor
     */
    connect(sigName: "detached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Crop_ConstructProps)
    _init (config?: Crop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Crop
    static $gtype: GObject.Type
}
interface Playback_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Playback */
    /**
     * Index of the current audio stream.
     */
    audio_stream?: number
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress?: number
    /**
     * Flags to use when seeking.
     */
    seek_flags?: SeekFlags
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name?: string
    /**
     * Current subtitle track being displayed.
     */
    subtitle_track?: number
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri?: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri?: string
    /**
     * The User Agent used by #ClutterGstPlayback with network protocols.
     */
    user_agent?: string
    /* Constructor properties of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume?: number
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing?: boolean
}
class Playback {
    /* Properties of ClutterGst-3.0.ClutterGst.Playback */
    /**
     * Index of the current audio stream.
     */
    audio_stream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audio_streams: object
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly buffer_fill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly can_seek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether or not the stream is being seeked.
     */
    readonly in_seek: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * Flags to use when seeking.
     */
    seek_flags: SeekFlags
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitle_font_name: string
    /**
     * Current subtitle track being displayed.
     */
    subtitle_track: number
    /**
     * List of subtitle tracks available.
     */
    readonly subtitle_tracks: object
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitle_uri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /**
     * The User Agent used by #ClutterGstPlayback with network protocols.
     */
    user_agent: string
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audio_volume: number
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether the #ClutterGstPlayer actor is playing.
     */
    playing: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Playback */
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_playback_get_audio_streams().
     */
    get_audio_stream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    get_audio_streams(): string[]
    /**
     * Retrieves the buffer duration when buffering network streams.
     */
    get_buffer_duration(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    get_buffer_fill(): number
    /**
     * Retrieves the buffer size when buffering network streams.
     */
    get_buffer_size(): number
    get_buffering_mode(): BufferingMode
    /**
     * Retrieves the duration of the media stream that `self` represents.
     */
    get_duration(): number
    /**
     * Whether the player is seeking.
     */
    get_in_seek(): boolean
    /**
     * Retrieves the position in the media stream that `self` represents.
     */
    get_position(): number
    /**
     * Retrieves the playback progress of `self`.
     */
    get_progress(): number
    /**
     * Get the current value of the seek-flags property.
     */
    get_seek_flags(): SeekFlags
    /**
     * Retrieves the font name currently used.
     */
    get_subtitle_font_name(): string
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_playback_get_subtitle_tracks().
     */
    get_subtitle_track(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    get_subtitle_tracks(): string[]
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    get_subtitle_uri(): string
    /**
     * Retrieves the URI from `self`.
     */
    get_uri(): string
    /**
     * Retrieves the user agent used when streaming.
     */
    get_user_agent(): string
    /**
     * Whether the player is using a live media.
     */
    is_live_media(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_playback_get_audio_streams().
     * @param index_ the index of the audio stream
     */
    set_audio_stream(index_: number): void
    /**
     * Sets the buffer duration to be used when buffering network streams.
     * @param duration The new duration
     */
    set_buffer_duration(duration: number): void
    /**
     * Sets the buffer size to be used when buffering network streams.
     * @param size The new size
     */
    set_buffer_size(size: number): void
    set_buffering_mode(mode: BufferingMode): void
    /**
     * Sets the source of `self` using a file path.
     * @param filename A filename
     */
    set_filename(filename: string): void
    /**
     * Sets the playback progress of `self`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     * @param progress the progress of the playback, between 0.0 and 1.0
     */
    set_progress(progress: number): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    set_seek_flags(flags: SeekFlags): void
    /**
     * Sets the font used by the subtitle renderer. The `font_name` string must be
     * either %NULL, which means that the default font name of the underlying
     * implementation will be used; or must follow the grammar recognized by
     * pango_font_description_from_string() like:
     * 
     * |[
     *   clutter_gst_playback_set_subtitle_font_name (player, "Sans 24pt");
     * ```
     * 
     * @param font_name a font name, or %NULL to set the default font name
     */
    set_subtitle_font_name(font_name: string): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_playback_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index_ the index of the subtitles track
     */
    set_subtitle_track(index_: number): void
    /**
     * Sets the location of a subtitle file to display while playing `self`.
     * @param uri the URI of a subtitle file
     */
    set_subtitle_uri(uri: string): void
    /**
     * Sets the URI of `self` to `uri`.
     * @param uri the URI of the media stream
     */
    set_uri(uri: string): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param user_agent the user agent
     */
    set_user_agent(user_agent: string): void
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
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    /**
     * Retrieves the playback volume of `self`.
     */
    get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    get_video_sink(): VideoSink
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    set_playing(playing: boolean): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Playback */
    vfunc_should_buffer(query: Gst.Query): boolean
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    /**
     * Retrieves the playback volume of `self`.
     */
    vfunc_get_audio_volume(): number
    /**
     * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
     */
    vfunc_get_frame(): Frame
    /**
     * Get the idle state of the pipeline.
     */
    vfunc_get_idle(): boolean
    /**
     * Retrieves the #GstPipeline used by the `self,` for direct use with
     * GStreamer API.
     */
    vfunc_get_pipeline(): Gst.Element
    /**
     * Retrieves the playing status of `self`.
     */
    vfunc_get_playing(): boolean
    /**
     * Retrieves the #ClutterGstVideoSink used by the `self`.
     */
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    /**
     * Sets the playback volume of `self` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    vfunc_set_audio_volume(volume: number): void
    /**
     * Starts or stops playing of `self`.
     * 
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `self` is to use the #GObject::notify
     * signal on the #ClutterGstPlayer:playing property and then retrieve the
     * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.Playback */
    /**
     * The ::should-buffer signal is emitted every time the base class needs to
     * decide whether it should continue buffering in download-buffering mode.
     * @param query A gst buffering query of format bytes
     */
    connect(sigName: "should-buffer", callback: (($obj: Playback, query: Gst.Query) => boolean)): number
    connect_after(sigName: "should-buffer", callback: (($obj: Playback, query: Gst.Query) => boolean)): number
    emit(sigName: "should-buffer", query: Gst.Query): void
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
    connect(sigName: "notify", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (($obj: Playback) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Playback) => void)): number
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     * @param error the #GError
     */
    connect(sigName: "error", callback: (($obj: Playback, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Playback, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /**
     * The ::new-frame signal is emitted each time a frame is received
     * from the video sink.
     * @param frame the #ClutterGstFrame newly received from the video sink
     */
    connect(sigName: "new-frame", callback: (($obj: Playback, frame: Frame) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Playback, frame: Frame) => void)): number
    emit(sigName: "new-frame", frame: Frame): void
    /**
     * The ::ready signal is emitted each time the gstreamer pipeline
     * becomes ready.
     */
    connect(sigName: "ready", callback: (($obj: Playback) => void)): number
    connect_after(sigName: "ready", callback: (($obj: Playback) => void)): number
    emit(sigName: "ready"): void
    /**
     * The ::size-change signal is emitted each time the new frame
     * has different dimensions to the previous frame.
     * @param width new width of the frames
     * @param height new height of the frames
     */
    connect(sigName: "size-change", callback: (($obj: Playback, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Playback, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    connect(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Playback_ConstructProps)
    _init (config?: Playback_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playback
    static $gtype: GObject.Type
}
interface VideoSink_ConstructProps extends GstVideo.VideoSink_ConstructProps {
    /* Constructor properties of ClutterGst-3.0.ClutterGst.VideoSink */
    update_priority?: number
}
class VideoSink {
    /* Properties of ClutterGst-3.0.ClutterGst.VideoSink */
    update_priority: number
    /* Properties of GstVideo-1.0.GstVideo.VideoSink */
    /**
     * Whether to show video frames during preroll. If set to %FALSE, video
     * frames will only be rendered in PLAYING state.
     */
    show_preroll_frame: boolean
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    /**
     * If set to %TRUE, the basesink will perform asynchronous state changes.
     * When set to %FALSE, the sink will not signal the parent when it prerolls.
     * Use this option when dealing with sparse streams or when synchronisation is
     * not required.
     */
    async: boolean
    /**
     * The amount of bytes to pull when operating in pull mode.
     */
    blocksize: number
    /**
     * Enable the last-sample property. If %FALSE, basesink doesn't keep a
     * reference to the last buffer arrived and the last-sample property is always
     * set to %NULL. This can be useful if you need buffers to be released as soon
     * as possible, eg. if you're using a buffer pool.
     */
    enable_last_sample: boolean
    /**
     * The last buffer that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails. This property
     * can be %NULL when the sink has not yet received a buffer.
     */
    readonly last_sample: Gst.Sample
    /**
     * Control the maximum amount of bits that will be rendered per second.
     * Setting this property to a value bigger than 0 will make the sink delay
     * rendering of the buffers when it would exceed to max-bitrate.
     */
    max_bitrate: number
    max_lateness: number
    /**
     * Maximum amount of time (in nanoseconds) that the pipeline can take
     * for processing the buffer. This is added to the latency of live
     * pipelines.
     */
    processing_deadline: number
    qos: boolean
    /**
     * The additional delay between synchronisation and actual rendering of the
     * media. This property will add additional latency to the device in order to
     * make other sinks compensate for the delay.
     */
    render_delay: number
    /**
     * Various #GstBaseSink statistics. This property returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate"  G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     */
    readonly stats: Gst.Structure
    sync: boolean
    /**
     * The time to insert between buffers. This property can be used to control
     * the maximum amount of buffers per second to render. Setting this property
     * to a value bigger than 0 will make the sink create THROTTLE QoS events.
     */
    throttle_time: number
    /**
     * Controls the final synchronisation, a negative value will render the buffer
     * earlier while a positive value delays playback. This property can be
     * used to fix synchronisation in bad files.
     */
    ts_offset: number
    /* Fields of GstVideo-1.0.GstVideo.VideoSink */
    element: GstBase.BaseSink
    /**
     * video width (derived class needs to set this)
     */
    width: number
    /**
     * video height (derived class needs to set this)
     */
    height: number
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    eos: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    state_lock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    state_cond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    state_cookie: number
    /**
     * the target state of an element as set by the application
     */
    target_state: Gst.State
    /**
     * the current state of an element
     */
    current_state: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    next_state: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pending_state: Gst.State
    /**
     * the last return value of an element state change
     */
    last_return: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    base_time: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    start_time: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    pads_cookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.VideoSink */
    /**
     * Returns a #ClutterGstFrame object suitable to render the current
     * frame of the given video sink. An application is free to make a
     * copy of this pipeline and modify it for custom rendering.
     */
    get_frame(): Frame
    get_overlays(): Overlays
    /**
     * Returns whether the pipeline is ready and so
     * clutter_gst_video_sink_get_pipeline() and
     * clutter_gst_video_sink_setup_pipeline() can be called without causing error.
     * 
     * Note: Normally an application will wait until the
     * #ClutterGstVideoSink::pipeline-ready signal is emitted instead of
     * polling the ready status with this api, but sometimes when a sink
     * is passed between components that didn't have an opportunity to
     * connect a signal handler this can be useful.
     */
    is_ready(): boolean
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    /**
     * If the `sink` spawns its own thread for pulling buffers from upstream it
     * should call this method after it has pulled a buffer. If the element needed
     * to preroll, this function will perform the preroll and will then block
     * until the element state is changed.
     * 
     * This function should be called with the PREROLL_LOCK held.
     * @param obj the mini object that caused the preroll
     */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    /**
     * Get the number of bytes that the sink will pull when it is operating in pull
     * mode.
     */
    get_blocksize(): number
    /**
     * Checks if `sink` is currently configured to drop buffers which are outside
     * the current segment
     */
    get_drop_out_of_segment(): boolean
    /**
     * Get the last sample that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails.
     * 
     * The #GstCaps on the sample can be used to determine the type of the buffer.
     * 
     * Free-function: gst_sample_unref
     */
    get_last_sample(): Gst.Sample | null
    /**
     * Get the currently configured latency.
     */
    get_latency(): Gst.ClockTime
    /**
     * Get the maximum amount of bits per second that the sink will render.
     */
    get_max_bitrate(): number
    /**
     * Gets the max lateness value. See gst_base_sink_set_max_lateness() for
     * more details.
     */
    get_max_lateness(): number
    /**
     * Get the processing deadline of `sink`. see
     * gst_base_sink_set_processing_deadline() for more information about
     * the processing deadline.
     */
    get_processing_deadline(): Gst.ClockTime
    /**
     * Get the render delay of `sink`. see gst_base_sink_set_render_delay() for more
     * information about the render delay.
     */
    get_render_delay(): Gst.ClockTime
    /**
     * Return various #GstBaseSink statistics. This function returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate" G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     */
    get_stats(): Gst.Structure
    /**
     * Checks if `sink` is currently configured to synchronize against the
     * clock.
     */
    get_sync(): boolean
    /**
     * Get the time that will be inserted between frames to control the
     * maximum buffers per second.
     */
    get_throttle_time(): number
    /**
     * Get the synchronisation offset of `sink`.
     */
    get_ts_offset(): Gst.ClockTimeDiff
    /**
     * Checks if `sink` is currently configured to perform asynchronous state
     * changes to PAUSED.
     */
    is_async_enabled(): boolean
    /**
     * Checks if `sink` is currently configured to store the last received sample in
     * the last-sample property.
     */
    is_last_sample_enabled(): boolean
    /**
     * Checks if `sink` is currently configured to send Quality-of-Service events
     * upstream.
     */
    is_qos_enabled(): boolean
    /**
     * Query the sink for the latency parameters. The latency will be queried from
     * the upstream elements. `live` will be %TRUE if `sink` is configured to
     * synchronize against the clock. `upstream_live` will be %TRUE if an upstream
     * element is live.
     * 
     * If both `live` and `upstream_live` are %TRUE, the sink will want to compensate
     * for the latency introduced by the upstream elements by setting the
     * `min_latency` to a strictly positive value.
     * 
     * This function is mostly used by subclasses.
     */
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    /**
     * Configures `sink` to perform all state changes asynchronously. When async is
     * disabled, the sink will immediately go to PAUSED instead of waiting for a
     * preroll buffer. This feature is useful if the sink does not synchronize
     * against the clock or when it is dealing with sparse streams.
     * @param enabled the new async value.
     */
    set_async_enabled(enabled: boolean): void
    /**
     * Set the number of bytes that the sink will pull when it is operating in pull
     * mode.
     * @param blocksize the blocksize in bytes
     */
    set_blocksize(blocksize: number): void
    /**
     * Configure `sink` to drop buffers which are outside the current segment
     * @param drop_out_of_segment drop buffers outside the segment
     */
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    /**
     * Configures `sink` to store the last received sample in the last-sample
     * property.
     * @param enabled the new enable-last-sample value.
     */
    set_last_sample_enabled(enabled: boolean): void
    /**
     * Set the maximum amount of bits per second that the sink will render.
     * @param max_bitrate the max_bitrate in bits per second
     */
    set_max_bitrate(max_bitrate: number): void
    /**
     * Sets the new max lateness value to `max_lateness`. This value is
     * used to decide if a buffer should be dropped or not based on the
     * buffer timestamp and the current clock time. A value of -1 means
     * an unlimited time.
     * @param max_lateness the new max lateness value.
     */
    set_max_lateness(max_lateness: number): void
    /**
     * Maximum amount of time (in nanoseconds) that the pipeline can take
     * for processing the buffer. This is added to the latency of live
     * pipelines.
     * 
     * This function is usually called by subclasses.
     * @param processing_deadline the new processing deadline in nanoseconds.
     */
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    /**
     * Configures `sink` to send Quality-of-Service events upstream.
     * @param enabled the new qos value.
     */
    set_qos_enabled(enabled: boolean): void
    /**
     * Set the render delay in `sink` to `delay`. The render delay is the time
     * between actual rendering of a buffer and its synchronisation time. Some
     * devices might delay media rendering which can be compensated for with this
     * function.
     * 
     * After calling this function, this sink will report additional latency and
     * other sinks will adjust their latency to delay the rendering of their media.
     * 
     * This function is usually called by subclasses.
     * @param delay the new delay
     */
    set_render_delay(delay: Gst.ClockTime): void
    /**
     * Configures `sink` to synchronize on the clock or not. When
     * `sync` is %FALSE, incoming samples will be played as fast as
     * possible. If `sync` is %TRUE, the timestamps of the incoming
     * buffers will be used to schedule the exact render time of its
     * contents.
     * @param sync the new sync value.
     */
    set_sync(sync: boolean): void
    /**
     * Set the time that will be inserted between rendered buffers. This
     * can be used to control the maximum buffers per second that the sink
     * will render.
     * @param throttle the throttle time in nanoseconds
     */
    set_throttle_time(throttle: number): void
    /**
     * Adjust the synchronisation of `sink` with `offset`. A negative value will
     * render buffers earlier than their timestamp. A positive value will delay
     * rendering. This function can be used to fix playback of badly timestamped
     * buffers.
     * @param offset the new offset
     */
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    /**
     * This function will wait for preroll to complete and will then block until `time`
     * is reached. It is usually called by subclasses that use their own internal
     * synchronisation but want to let some synchronization (like EOS) be handled
     * by the base class.
     * 
     * This function should only be called with the PREROLL_LOCK held (like when
     * receiving an EOS event in the ::event vmethod or when handling buffers in
     * ::render).
     * 
     * The `time` argument should be the running_time of when the timeout should happen
     * and will be adjusted with any latency and offset configured in the sink.
     * @param time the running_time to be reached
     */
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    /**
     * This function will block until `time` is reached. It is usually called by
     * subclasses that use their own internal synchronisation.
     * 
     * If `time` is not valid, no synchronisation is done and %GST_CLOCK_BADTIME is
     * returned. Likewise, if synchronisation is disabled in the element or there
     * is no clock, no synchronisation is done and %GST_CLOCK_BADTIME is returned.
     * 
     * This function should only be called with the PREROLL_LOCK held, like when
     * receiving an EOS event in the #GstBaseSinkClass::event vmethod or when
     * receiving a buffer in
     * the #GstBaseSinkClass::render vmethod.
     * 
     * The `time` argument should be the running_time of when this method should
     * return and is not adjusted with any latency or offset configured in the
     * sink.
     * @param time the running_time to be reached
     */
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    /**
     * If the #GstBaseSinkClass::render method performs its own synchronisation
     * against the clock it must unblock when going from PLAYING to the PAUSED state
     * and call this method before continuing to render the remaining data.
     * 
     * If the #GstBaseSinkClass::render method can block on something else than
     * the clock, it must also be ready to unblock immediately on
     * the #GstBaseSinkClass::unlock method and cause the
     * #GstBaseSinkClass::render method to immediately call this function.
     * In this case, the subclass must be prepared to continue rendering where it
     * left off if this function returns %GST_FLOW_OK.
     * 
     * This function will block until a state change to PLAYING happens (in which
     * case this function returns %GST_FLOW_OK) or the processing must be stopped due
     * to a state change to READY or a FLUSH event (in which case this function
     * returns %GST_FLOW_FLUSHING).
     * 
     * This function should only be called with the PREROLL_LOCK held, like in the
     * render function.
     */
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abort_state(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    call_async(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    create_all_pads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    get_clock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param context_type a name of a context to retrieve
     */
    get_context(context_type: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param context_type a name of a context to retrieve
     */
    get_context_unlocked(context_type: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    get_contexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    get_current_clock_time(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    get_current_running_time(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    get_factory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    get_pad_template_list(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    get_request_pad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    get_start_time(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    get_static_pad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    is_locked_state(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_sink_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_src_pads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lost_state(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    no_more_pads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    release_request_pad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    request_pad_simple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param start_type The type and flags for the new start position
     * @param start The value of the new start position
     * @param stop_type The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seek_flags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seek_pos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    send_event(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_base_time(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param locked_state %TRUE to lock the element's state
     */
    set_locked_state(locked_state: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_start_time(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    set_state(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    sync_state_with_parent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
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
    /* Methods of GstVideo-1.0.GstVideo.ColorBalance */
    /**
     * Get the #GstColorBalanceType of this implementation.
     */
    get_balance_type(): GstVideo.ColorBalanceType
    /**
     * Retrieve the current value of the indicated channel, between min_value
     * and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     * @param channel A #GstColorBalanceChannel instance
     */
    get_value(channel: GstVideo.ColorBalanceChannel): number
    /**
     * Retrieve a list of the available channels.
     */
    list_channels(): GstVideo.ColorBalanceChannel[]
    /**
     * Sets the current value of the channel to the passed value, which must
     * be between min_value and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     * @param channel A #GstColorBalanceChannel instance
     * @param value The new value for the channel.
     */
    set_value(channel: GstVideo.ColorBalanceChannel, value: number): void
    /**
     * A helper function called by implementations of the GstColorBalance
     * interface. It fires the #GstColorBalance::value-changed signal on the
     * instance, and the #GstColorBalanceChannel::value-changed signal on the
     * channel object.
     * @param channel A #GstColorBalanceChannel whose value has changed
     * @param value The new value of the channel
     */
    value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    /**
     * Sends the indicated command to the navigation interface.
     * @param command The command to issue
     */
    send_command(command: GstVideo.NavigationCommand): void
    send_event(structure: Gst.Structure): void
    /**
     * Sends an event to the navigation interface.
     * @param event The event to send
     */
    send_event_simple(event: Gst.Event): void
    send_key_event(event: string, key: string): void
    /**
     * Sends a mouse event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
     * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     */
    send_mouse_event(event: string, button: number, x: number, y: number): void
    /**
     * Sends a mouse scroll event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     * @param delta_x The delta_x coordinate of the mouse event.
     * @param delta_y The delta_y coordinate of the mouse event.
     */
    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.VideoSink */
    vfunc_new_frame(): void
    vfunc_new_overlays(): void
    vfunc_pipeline_ready(): void
    /**
     * Get the #GstColorBalanceType of this implementation.
     */
    vfunc_get_balance_type(): GstVideo.ColorBalanceType
    /**
     * Retrieve the current value of the indicated channel, between min_value
     * and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     * @param channel A #GstColorBalanceChannel instance
     */
    vfunc_get_value(channel: GstVideo.ColorBalanceChannel): number
    /**
     * Retrieve a list of the available channels.
     */
    vfunc_list_channels(): GstVideo.ColorBalanceChannel[]
    /**
     * Sets the current value of the channel to the passed value, which must
     * be between min_value and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     * @param channel A #GstColorBalanceChannel instance
     * @param value The new value for the channel.
     */
    vfunc_set_value(channel: GstVideo.ColorBalanceChannel, value: number): void
    /**
     * A helper function called by implementations of the GstColorBalance
     * interface. It fires the #GstColorBalance::value-changed signal on the
     * instance, and the #GstColorBalanceChannel::value-changed signal on the
     * channel object.
     * @param channel A #GstColorBalanceChannel whose value has changed
     * @param value The new value of the channel
     */
    vfunc_value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void
    /**
     * sending a navigation event.
     * @param structure 
     */
    vfunc_send_event(structure: Gst.Structure): void
    /* Function overloads */
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Gst.Event): boolean
    /**
     * Sends an event to the navigation interface.
     * @param event The event to send
     */
    vfunc_send_event_simple(event: Gst.Event): void
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoSink */
    /**
     * Notifies the subclass of changed #GstVideoInfo.
     * @param caps A #GstCaps.
     * @param info A #GstVideoInfo corresponding to `caps`.
     */
    vfunc_set_info(caps: Gst.Caps, info: GstVideo.VideoInfo): boolean
    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    /**
     * Called to get sink pad caps from the subclass.
     * @param filter 
     */
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Get the start and end times for syncing on this buffer.
     * @param buffer 
     */
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst-1.0.Gst.Element */
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    vfunc_post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    vfunc_provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Gst.Event): boolean
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    vfunc_set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    vfunc_set_context(context: Gst.Context): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
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
    /* Signals of ClutterGst-3.0.ClutterGst.VideoSink */
    /**
     * The sink will emit this signal whenever there are new textures
     * available for a new frame of the video. After this signal is
     * emitted, an application can call clutter_gst_video_sink_get_pipeline()
     * to get a pipeline suitable for rendering the frame. If the
     * application is using a custom pipeline it can alternatively call
     * clutter_gst_video_sink_attach_frame() to attach the textures.
     */
    connect(sigName: "new-frame", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "new-frame"): void
    /**
     * The sink will emit this signal whenever there are new textures
     * available for set of overlays on the video. After this signal is
     * emitted, an application can call
     * clutter_gst_video_sink_get_overlays() to get a set of pipelines
     * suitable for rendering overlays on a video frame.
     */
    connect(sigName: "new-overlays", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "new-overlays", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "new-overlays"): void
    /**
     * The sink will emit this signal as soon as it has gathered enough
     * information from the video to configure a pipeline. If the
     * application wants to do some customized rendering, it can setup its
     * pipeline after this signal is emitted. The application's pipeline
     * will typically either be a copy of the one returned by
     * clutter_gst_video_sink_get_pipeline() or it can be a completely custom
     * pipeline which is setup using clutter_gst_video_sink_setup_pipeline().
     * 
     * Note that it is an error to call either of those functions before
     * this signal is emitted. The #ClutterGstVideoSink::new-frame signal
     * will only be emitted after the pipeline is ready so the application
     * could also create its pipeline in the handler for that.
     */
    connect(sigName: "pipeline-ready", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "pipeline-ready", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "pipeline-ready"): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param new_pad the pad that has been added
     */
    connect(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param old_pad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalance */
    /**
     * Fired when the value of the indicated channel has changed.
     * @param channel The #GstColorBalanceChannel
     * @param value The new value
     */
    connect(sigName: "value-changed", callback: (($obj: VideoSink, channel: GstVideo.ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: VideoSink, channel: GstVideo.ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", channel: GstVideo.ColorBalanceChannel, value: number): void
    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoSink
    /**
     * Try to retrieve x and y coordinates of a #GstNavigation event.
     * @param event The #GstEvent to inspect.
     */
    static event_get_coordinates(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
     * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
     * @param event A #GstEvent to inspect.
     */
    static event_get_type(event: Gst.Event): GstVideo.NavigationEventType
    /**
     * Create a new navigation event given navigation command..
     * @param command The navigation command to use.
     */
    static event_new_command(command: GstVideo.NavigationCommand): Gst.Event
    /**
     * Create a new navigation event for the given key press.
     * @param key A string identifying the key press.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_key_press(key: string, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key release.
     * @param key A string identifying the released key.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_key_release(key: string, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button press.
     * @param button The number of the pressed mouse button.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_mouse_button_press(button: number, x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button release.
     * @param button The number of the released mouse button.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_mouse_button_release(button: number, x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the new mouse location.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_mouse_move(x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the mouse scroll.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param delta_x The x component of the scroll movement.
     * @param delta_y The y component of the scroll movement.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_mouse_scroll(x: number, y: number, delta_x: number, delta_y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event signalling that all currently active touch
     * points are cancelled and should be discarded. For example, under Wayland
     * this event might be sent when a swipe passes the threshold to be recognized
     * as a gesture by the compositor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_touch_cancel(state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for an added touch point.
     * @param identifier A number uniquely identifying this touch point. It must stay    unique to this touch point at least until an up event is sent for    the same identifier, or all touch points are cancelled.
     * @param x The x coordinate of the new touch point.
     * @param y The y coordinate of the new touch point.
     * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_touch_down(identifier: number, x: number, y: number, pressure: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event signalling the end of a touch frame. Touch
     * frames signal that all previous down, motion and up events not followed by
     * another touch frame event already should be considered simultaneous.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_touch_frame(state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for a moved touch point.
     * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous touch_start event.
     * @param x The x coordinate of the touch point.
     * @param y The y coordinate of the touch point.
     * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_touch_motion(identifier: number, x: number, y: number, pressure: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for a removed touch point.
     * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous down event, but can be reused    after sending this event.
     * @param x The x coordinate of the touch point.
     * @param y The y coordinate of the touch point.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static event_new_touch_up(identifier: number, x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Inspect a #GstNavigation command event and retrieve the enum value of the
     * associated command.
     * @param event A #GstEvent to inspect.
     */
    static event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ GstVideo.NavigationCommand | null ]
    /**
     * Note: Modifier keys (as defined in #GstNavigationModifierType)
     * [press](GST_NAVIGATION_EVENT_KEY_PRESS) and
     * [release](GST_NAVIGATION_KEY_PRESS) events are generated even if those states are
     * present on all other related events
     * @param event A #GstEvent to inspect.
     */
    static event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    /**
     * Retrieve the details of either a #GstNavigation mouse button press event or
     * a mouse button release event. Determine which type the event is using
     * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
     * @param event A #GstEvent to inspect.
     */
    static event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstNavigation mouse movement event and extract the coordinates
     * of the event.
     * @param event A #GstEvent to inspect.
     */
    static event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstNavigation mouse scroll event and extract the coordinates
     * of the event.
     * @param event A #GstEvent to inspect.
     */
    static event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
    static event_parse_state(event: Gst.Event, state: GstVideo.NavigationModifierType): boolean
    /**
     * Retrieve the details of a #GstNavigation touch-down or touch-motion event.
     * Determine which type the event is using gst_navigation_event_get_type()
     * to retrieve the #GstNavigationEventType.
     * @param event A #GstEvent to inspect.
     */
    static event_parse_touch_event(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number | null, /* x */ number | null, /* y */ number | null, /* pressure */ number | null ]
    /**
     * Retrieve the details of a #GstNavigation touch-up event.
     * @param event A #GstEvent to inspect.
     */
    static event_parse_touch_up_event(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Try to set x and y coordinates on a #GstNavigation event. The event must
     * be writable.
     * @param event The #GstEvent to modify.
     * @param x The x coordinate to set.
     * @param y The y coordinate to set.
     */
    static event_set_coordinates(event: Gst.Event, x: number, y: number): boolean
    /**
     * Check a bus message to see if it is a #GstNavigation event, and return
     * the #GstNavigationMessageType identifying the type of the message if so.
     * @param message A #GstMessage to inspect.
     */
    static message_get_type(message: Gst.Message): GstVideo.NavigationMessageType
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
     * that the current angle, or current number of angles available in a
     * multiangle video has changed.
     * @param src A #GstObject to set as source of the new message.
     * @param cur_angle The currently selected angle.
     * @param n_angles The number of viewing angles now available.
     */
    static message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
     * @param src A #GstObject to set as source of the new message.
     */
    static message_new_commands_changed(src: Gst.Object): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_EVENT.
     * @param src A #GstObject to set as source of the new message.
     * @param event A navigation #GstEvent
     */
    static message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
     * @param src A #GstObject to set as source of the new message.
     * @param active %TRUE if the mouse has entered a clickable area of the display. %FALSE if it over a non-clickable area.
     */
    static message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
    /**
     * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
     * and extract the `cur_angle` and `n_angles` parameters.
     * @param message A #GstMessage to inspect.
     */
    static message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
     * and extract contained #GstEvent. The caller must unref the `event` when done
     * with it.
     * @param message A #GstMessage to inspect.
     */
    static message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
     * and extract the active/inactive flag. If the mouse over event is marked
     * active, it indicates that the mouse is over a clickable area.
     * @param message A #GstMessage to inspect.
     */
    static message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    /**
     * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
     * it if it is a #GstNavigation query.
     * @param query The query to inspect
     */
    static query_get_type(query: Gst.Query): GstVideo.NavigationQueryType
    /**
     * Create a new #GstNavigation angles query. When executed, it will
     * query the pipeline for the set of currently available angles, which may be
     * greater than one in a multiangle video.
     */
    static query_new_angles(): Gst.Query
    /**
     * Create a new #GstNavigation commands query. When executed, it will
     * query the pipeline for the set of currently available commands.
     */
    static query_new_commands(): Gst.Query
    /**
     * Parse the current angle number in the #GstNavigation angles `query` into the
     * #guint pointed to by the `cur_angle` variable, and the number of available
     * angles into the #guint pointed to by the `n_angles` variable.
     * @param query a #GstQuery
     */
    static query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    /**
     * Parse the number of commands in the #GstNavigation commands `query`.
     * @param query a #GstQuery
     */
    static query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
    /**
     * Parse the #GstNavigation command query and retrieve the `nth` command from
     * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
     * set to #GST_NAVIGATION_COMMAND_INVALID.
     * @param query a #GstQuery
     * @param nth the nth command to retrieve.
     */
    static query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ GstVideo.NavigationCommand | null ]
    /**
     * Set the #GstNavigation angles query result field in `query`.
     * @param query a #GstQuery
     * @param cur_angle the current viewing angle to set.
     * @param n_angles the number of viewing angles to set.
     */
    static query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
    /**
     * Set the #GstNavigation command query result fields in `query`. The number
     * of commands passed must be equal to `n_commands`.
     * @param query a #GstQuery
     * @param cmds An array containing `n_cmds`     `GstNavigationCommand` values.
     */
    static query_set_commandsv(query: Gst.Query, cmds: GstVideo.NavigationCommand[]): void
    static $gtype: GObject.Type
}
abstract class AspectratioClass {
    static name: string
}
class AspectratioPrivate {
    static name: string
}
class Box {
    /* Fields of ClutterGst-3.0.ClutterGst.Box */
    /**
     * X coordinate of the top left corner
     */
    x1: number
    /**
     * Y coordinate of the top left corner
     */
    y1: number
    /**
     * X coordinate of the bottom right corner
     */
    x2: number
    /**
     * Y coordinate of the bottom right corner
     */
    y2: number
    /* Methods of ClutterGst-3.0.ClutterGst.Box */
    /**
     * Retrieves the height of the `box`
     */
    get_height(): number
    /**
     * Retrieves the width of the `box`
     */
    get_width(): number
    static name: string
}
abstract class CameraClass {
    /* Fields of ClutterGst-3.0.ClutterGst.CameraClass */
    ready_for_capture: (self: Camera, ready: boolean) => void
    photo_saved: (self: Camera) => void
    photo_taken: (self: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    video_saved: (self: Camera) => void
    static name: string
}
abstract class CameraDeviceClass {
    /* Fields of ClutterGst-3.0.ClutterGst.CameraDeviceClass */
    capture_resolution_changed: (device: CameraDevice, width: number, height: number) => void
    static name: string
}
class CameraDevicePrivate {
    static name: string
}
abstract class CameraManagerClass {
    static name: string
}
class CameraManagerPrivate {
    static name: string
}
class CameraPrivate {
    static name: string
}
abstract class ContentClass {
    /* Fields of ClutterGst-3.0.ClutterGst.ContentClass */
    has_painting_content: (self: Content) => boolean
    static name: string
}
class ContentPrivate {
    static name: string
}
abstract class CropClass {
    static name: string
}
class CropPrivate {
    static name: string
}
class Frame {
    /* Fields of ClutterGst-3.0.ClutterGst.Frame */
    /**
     * a #ClutterGstVideoResolution
     */
    resolution: VideoResolution
    static name: string
}
class Overlay {
    /* Fields of ClutterGst-3.0.ClutterGst.Overlay */
    /**
     * a #ClutterGstBox representing the position of the
     *            overlay within a #ClutterGstFrame.
     */
    position: Box
    static name: string
}
class Overlays {
    /* Fields of ClutterGst-3.0.ClutterGst.Overlays */
    /**
     * an array of #ClutterGstOverlay
     */
    overlays: object[]
    static name: string
}
abstract class PlaybackClass {
    /* Fields of ClutterGst-3.0.ClutterGst.PlaybackClass */
    should_buffer: (self: Playback, query: Gst.Query) => boolean
    static name: string
}
class PlaybackPrivate {
    static name: string
}
abstract class PlayerIface {
    /* Fields of ClutterGst-3.0.ClutterGst.PlayerIface */
    get_frame: (self: Player) => Frame
    get_pipeline: (self: Player) => Gst.Element
    get_video_sink: (self: Player) => VideoSink
    get_idle: (self: Player) => boolean
    get_audio_volume: (self: Player) => number
    set_audio_volume: (self: Player, volume: number) => void
    get_playing: (self: Player) => boolean
    set_playing: (self: Player, playing: boolean) => void
    new_frame: (self: Player, frame: Frame) => void
    ready: (self: Player) => void
    eos: (self: Player) => void
    error: (self: Player, error: GLib.Error) => void
    size_change: (self: Player, width: number, height: number) => void
    static name: string
}
class PlayerIfacePrivate {
    static name: string
}
class VideoResolution {
    /* Fields of ClutterGst-3.0.ClutterGst.VideoResolution */
    /**
     * the width, in pixels
     */
    width: number
    /**
     * the height, in pixels
     */
    height: number
    par_n: number
    par_d: number
    static name: string
}
abstract class VideoSinkClass {
    /* Fields of ClutterGst-3.0.ClutterGst.VideoSinkClass */
    new_frame: (sink: VideoSink) => void
    pipeline_ready: (sink: VideoSink) => void
    new_overlays: (sink: VideoSink) => void
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
}
export default ClutterGst;