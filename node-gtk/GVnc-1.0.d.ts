/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVnc-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GVnc {

enum AudioFormatType {
    U8,
    S8,
    U16,
    S16,
    U32,
    S32,
}
enum ConnectionAuth {
    INVALID,
    /**
     * No authentication is needed and protocol data is to be sent unencrypted.
     */
    NONE,
    /**
     * VNC authentication is to be used and protocol data is to be sent unencrypted.
     */
    VNC,
    /**
     * RealVNC authentication.
     */
    RA2,
    /**
     * RealVNC authentication.
     */
    RA2NE,
    /**
     * The Tight security type is a generic protocol extension.
     */
    TIGHT,
    /**
     * Ultra authentication.
     */
    ULTRA,
    /**
     * TLS authentication.
     */
    TLS,
    /**
     * The VeNCrypt security type is a generic authentication method which encapsulates multiple authentication subtypes.
     */
    VENCRYPT,
    /**
     * SASL authentication.
     */
    SASL,
    /**
     * Apple remote desktop (screen sharing) authentication.
     */
    ARD,
    /**
     * Authentication used by UltraVNC.
     */
    MSLOGONII,
    /**
     * Authentication used by UltraVNC.
     */
    MSLOGON,
}
enum ConnectionAuthVencrypt {
    PLAIN,
    TLSNONE,
    TLSVNC,
    TLSPLAIN,
    X509NONE,
    X509VNC,
    X509PLAIN,
    X509SASL,
    TLSSASL,
}
enum ConnectionCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
enum ConnectionEncoding {
    RAW,
    COPY_RECT,
    RRE,
    CORRE,
    HEXTILE,
    TIGHT,
    ZRLE,
    TIGHT_JPEG0,
    TIGHT_JPEG1,
    TIGHT_JPEG2,
    TIGHT_JPEG3,
    TIGHT_JPEG4,
    TIGHT_JPEG5,
    TIGHT_JPEG6,
    TIGHT_JPEG7,
    TIGHT_JPEG8,
    TIGHT_JPEG9,
    DESKTOP_RESIZE,
    LAST_RECT,
    WMVI,
    CURSOR_POS,
    RICH_CURSOR,
    XCURSOR,
    POINTER_CHANGE,
    EXT_KEY_EVENT,
    AUDIO,
    LED_STATE,
    DESKTOP_NAME,
    EXTENDED_DESKTOP_RESIZE,
    XVP,
    ALPHA_CURSOR,
}
enum ConnectionPowerAction {
    SHUTDOWN,
    REBOOT,
    RESET,
}
enum ConnectionResizeStatus {
    UNSUPPORTED,
    OK,
    ADMIN_PROHIBITED,
    OUT_OF_RESOURCES,
    INVALID_LAOUT,
    FORWARDED,
}
const LEDSTATE_CAPS_LOCK: number
const LEDSTATE_NUM_LOCK: number
const LEDSTATE_SCROLL_LOCK: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PADDING: number
const PADDING_LARGE: number
function utilCheckVersion(major: number, minor: number, micro: number): boolean
function utilGetDebug(): boolean
function utilGetVersion(): number
function utilGetVersionString(): string
function utilSetDebug(enabled: boolean): void
class Audio {
    /* Methods of GVnc-1.0.GVnc.Audio */
    /**
     * Request playback of a single audio sample in `sample`
     * @param sample the audio sample
     */
    playbackData(sample: AudioSample): void
    /**
     * Indicate that the remote desktop is about to start
     * audio playback in format `format`.
     * @param format the new audio format
     */
    playbackStart(format: AudioFormat): void
    /**
     * Indicate that the remote desktop has completed
     * audio playback
     */
    playbackStop(): void
    static name: string
}
class Framebuffer {
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Copies data from the range (`srcx,` `srcy)` to
     * (`srcx+``width,` `srcy+``height)` over to the
     * range starting at (`dstx,` `dsty)`.
     * @param srcx the horizontal starting pixel
     * @param srcy the vertical starting pixel
     * @param dstx the horizontal target pixel
     * @param dsty the vertical target pixel
     * @param width the width of the region
     * @param height the height of the region
     */
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    /**
     * Get a pointer to the framebuffer contents
     */
    getBuffer(): Uint8Array
    /**
     * Query the height of the remote framebuffer
     */
    getHeight(): number
    /**
     * Get the pixel format used to store the framebuffer locally
     */
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    /**
     * Get the number of bytes per line of the framebuffer
     */
    getRowstride(): number
    /**
     * Query the width of the remote framebuffer
     */
    getWidth(): number
    /**
     * Determine if the local and remote pixel formats match
     */
    perfectFormatMatch(): boolean
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is always
     * 3 as it must be in plain RGB24 format.
     * @param src the new pixel data
     * @param rowstride the number of bytes per row
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Set the color map to use for the framebuffer
     * @param map the new color map
     */
    setColorMap(map: ColorMap): void
    /**
     * Sets a pixel in the framebuffer at (`x,` `y)` to the
     * value in `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to set
     * @param y the vertical pixel to set
     */
    setPixelAt(src: Uint8Array, x: number, y: number): void
    static name: string
}
interface BaseAudio_ConstructProps extends GObject.Object_ConstructProps {
}
class BaseAudio {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of GVnc-1.0.GVnc.Audio */
    /**
     * Request playback of a single audio sample in `sample`
     * @param sample the audio sample
     */
    playbackData(sample: AudioSample): void
    /**
     * Indicate that the remote desktop is about to start
     * audio playback in format `format`.
     * @param format the new audio format
     */
    playbackStart(format: AudioFormat): void
    /**
     * Indicate that the remote desktop has completed
     * audio playback
     */
    playbackStop(): void
    /* Signals of GVnc-1.0.GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: ((object: AudioSample) => void)): number
    on(sigName: "vnc-audio-playback-data", callback: (object: AudioSample) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-data", callback: (object: AudioSample) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-data", callback: (object: AudioSample) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-data", object: AudioSample): void
    connect(sigName: "vnc-audio-playback-start", callback: ((object: AudioFormat) => void)): number
    on(sigName: "vnc-audio-playback-start", callback: (object: AudioFormat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-start", callback: (object: AudioFormat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-start", callback: (object: AudioFormat) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-start", object: AudioFormat): void
    connect(sigName: "vnc-audio-playback-stop", callback: (() => void)): number
    on(sigName: "vnc-audio-playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-stop", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-stop"): void
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
    constructor (config?: BaseAudio_ConstructProps)
    _init (config?: BaseAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BaseAudio
    static $gtype: GObject.Type
}
interface BaseFramebuffer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GVnc-1.0.GVnc.BaseFramebuffer */
    buffer?: object
    colorMap?: ColorMap
    height?: number
    localFormat?: PixelFormat
    remoteFormat?: PixelFormat
    rowstride?: number
    width?: number
}
class BaseFramebuffer {
    /* Properties of GVnc-1.0.GVnc.BaseFramebuffer */
    readonly buffer: object
    colorMap: ColorMap
    readonly height: number
    readonly localFormat: PixelFormat
    readonly remoteFormat: PixelFormat
    readonly rowstride: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Copies data from the range (`srcx,` `srcy)` to
     * (`srcx+``width,` `srcy+``height)` over to the
     * range starting at (`dstx,` `dsty)`.
     * @param srcx the horizontal starting pixel
     * @param srcy the vertical starting pixel
     * @param dstx the horizontal target pixel
     * @param dsty the vertical target pixel
     * @param width the width of the region
     * @param height the height of the region
     */
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    /**
     * Get a pointer to the framebuffer contents
     */
    getBuffer(): Uint8Array
    /**
     * Query the height of the remote framebuffer
     */
    getHeight(): number
    /**
     * Get the pixel format used to store the framebuffer locally
     */
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    /**
     * Get the number of bytes per line of the framebuffer
     */
    getRowstride(): number
    /**
     * Query the width of the remote framebuffer
     */
    getWidth(): number
    /**
     * Determine if the local and remote pixel formats match
     */
    perfectFormatMatch(): boolean
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is always
     * 3 as it must be in plain RGB24 format.
     * @param src the new pixel data
     * @param rowstride the number of bytes per row
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Set the color map to use for the framebuffer
     * @param map the new color map
     */
    setColorMap(map: ColorMap): void
    /**
     * Sets a pixel in the framebuffer at (`x,` `y)` to the
     * value in `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @param src the new pixel data
     * @param x the horizontal pixel to set
     * @param y the vertical pixel to set
     */
    setPixelAt(src: Uint8Array, x: number, y: number): void
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
    connect(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rowstride", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rowstride", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: BaseFramebuffer_ConstructProps)
    _init (config?: BaseFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer
    static $gtype: GObject.Type
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GVnc-1.0.GVnc.Connection */
    framebuffer?: Framebuffer
}
class Connection {
    /* Properties of GVnc-1.0.GVnc.Connection */
    framebuffer: Framebuffer
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GVnc-1.0.GVnc.Connection */
    /**
     * Tell the server that it is no longer permitted to send
     * audio. The client may continue to receive audio for a
     * time after this, since packets may already be in flight.
     */
    audioDisable(): boolean
    /**
     * Tell the server that it is permitted to send audio
     * data.
     */
    audioEnable(): boolean
    clientCutText(data: object | null, length: number): boolean
    /**
     * Request that the server send a framebuffer update when the
     * region positioned at (`x,` `y)` wth size (`width,` `height)`
     * sees damage. The update sent may be a subset of the region
     * requested, if `incremental` is FALSE.
     * @param incremental TRUE to only receive region with changes
     * @param x horizontal offset to region of update
     * @param y vertical offset to region of update
     * @param width horizontal size of region of update
     * @param height vertical size of region of update
     */
    framebufferUpdateRequest(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    /**
     * Determine if the remote server supports absolute pointer
     * motion events. This will only be valid once the
     * "vnc-initialized" signal has been emitted.
     */
    getAbsPointer(): boolean
    /**
     * Get the current audio format specification
     */
    getAudioFormat(): AudioFormat
    /**
     * Get the cursor currently associated with the desktop,
     * if any.
     */
    getCursor(): Cursor
    /**
     * Determine if the remote server supports the extended
     * keyboard event which transmits raw XT scancodes.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted
     */
    getExtKeyEvent(): boolean
    /**
     * Get the height of the remote display. The height will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    getHeight(): number
    /**
     * Get the current LED state bitmap. This is only
     * valid once the "vnc-initialized" signal has been
     * emitted.
     */
    getLedstate(): number
    /**
     * Get the name of the remote display. A name will only
     * be available once the "vnc-initialized" signal has
     * been emitted
     */
    getName(): string
    /**
     * Get a specification of the current pixel format
     */
    getPixelFormat(): PixelFormat
    /**
     * Determine if the remote server supports power control.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted.
     */
    getPowerControl(): boolean
    /**
     * Get the sharing state for the connection
     */
    getShared(): boolean
    /**
     * Get the width of the remote display. The width will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    getWidth(): number
    /**
     * Determine if the current connection is in an error
     * state
     */
    hasError(): boolean
    /**
     * Determine if the connection to the remote desktop is
     * fully initialized and thus receiving framebuffer
     * updates.
     */
    isInitialized(): boolean
    /**
     * Check if the connection is currently open
     */
    isOpen(): boolean
    /**
     * Send a key press/release event to the server. By default the
     * event will be sent with the X11 key code from `key`. If the
     * extended key event protocol extension is active, the `scancode`
     * will be sent instead.
     * @param downFlag TRUE if this is a key press, FALSE for a key release
     * @param key the X11 key code
     * @param scancode the XT scan code
     */
    keyEvent(downFlag: boolean, key: number, scancode: number): boolean
    /**
     * Open a socket connection to server identified by `addr`.
     * `addr` may refer to either a TCP address (IPv4/6) or
     * a UNIX socket address. The `hostname` provided should
     * reflect the name of the host that the `addr` provides a
     * connection to, if it is not already available in `addr`.
     * For example, if `addr` points to a proxy server, then
     * `hostname` can be used to provide the name of the final
     * endpoint. This will be used by some authentication
     * schemes, for example x509 certificate validation
     * against `hostname`.
     * @param addr the socket address
     * @param hostname the hostname
     */
    openAddr(addr: Gio.SocketAddress, hostname?: string | null): boolean
    /**
     * Open a connection using `fd` as the transport. If `fd`
     * refers to a TCP connection, it is recommended to use
     * vnc_connection_open_fd_with_hostname instead, to
     * provide the remote hostname. This allows use of
     * x509 based authentication which requires a hostname
     * to be available.
     * @param fd file descriptor to use for the connection
     */
    openFd(fd: number): boolean
    /**
     * Open a connection using `fd` as the transport. The
     * `hostname` provided should reflect the name of the
     * host that the `fd` provides a connection to. This
     * will be used by some authentication schemes, for
     * example x509 certificate validation against `hostname`.
     * @param fd file descriptor to use for the connection
     * @param hostname the host associated with the connection
     */
    openFdWithHostname(fd: number, hostname?: string | null): boolean
    /**
     * Open a TCP connection to the remote desktop at `host`
     * listening on `port`.
     * @param host the host name or IP address
     * @param port the service name or port number
     */
    openHost(host: string, port: string): boolean
    /**
     * Send a pointer event to the server, reflecting either movement
     * of the pointer, or a change in state of its buttons, or both.
     * @param buttonMask the new state of the buttons
     * @param x the new horizontal position of the pointer
     * @param y the new veritical position of the pointer
     */
    pointerEvent(buttonMask: number, x: number, y: number): boolean
    /**
     * Perform a power control action on the remote server.
     * 
     * This is only valid if the "vnc-power-control" signal
     * has been emitted with a VNC_CONNECTION_POWER_STATUS_INIT
     * code.
     * 
     * The action should be assumed to be accepted unless
     * "vnc-power-control" signal is emitted with a
     * VNC_CONNECTION_POWER_STATUS_FAIL code.
     * @param action 
     */
    powerControl(action: ConnectionPowerAction): boolean
    /**
     * Set the audio sink to use for playing back audio from
     * the remote session.
     * @param audio the audio sink
     */
    setAudio(audio: Audio): boolean
    /**
     * Set the audio format specification to use for playback
     * from the remote session. The format should only be set
     * when the audio stream is not active, otherwise it will
     * be impossible to determine when the server has switched
     * to sending data in the new format
     * @param fmt the audio format
     */
    setAudioFormat(fmt: AudioFormat): boolean
    /**
     * If a multi-level authentication scheme was requested, this
     * identifies which auth type to use for the second phase.
     * @param type the auth sub-type
     */
    setAuthSubtype(type: number): boolean
    /**
     * Set the authentication type to use to complete the
     * connection.
     * @param type the requested auth type
     */
    setAuthType(type: number): boolean
    /**
     * Sets the value of the authentication credential
     * `type` to the string `data`.
     * 
     * `type` is one of the VncConnectionCredential enum vlaues
     * @param type the authentication credential type
     * @param data the value associated with the credential
     */
    setCredential(type: number, data: string): boolean
    /**
     * Inform the server of the list of encodings that it is
     * allowed to send. This should be done before requesting
     * any framebuffer updates
     * @param encoding the list of permitted encodings
     */
    setEncodings(encoding: number[]): boolean
    /**
     * Set the framebuffer object to which frame buffer updates
     * will be written.
     * @param fb the framebuffer object
     */
    setFramebuffer(fb: Framebuffer): boolean
    /**
     * Tell the server what pixel format  to use for
     * framebuffer updates. It is only safe to use this
     * when no framebuffer updates are pending, otherwise
     * it is impossible to determine when the server has
     * switched over to using the new format.
     * @param fmt the new pixel format
     */
    setPixelFormat(fmt: PixelFormat): boolean
    /**
     * Set the shared state for the connection. A TRUE value
     * allow allow this client to co-exist with other existing
     * clients. A FALSE value will cause other clients to be
     * dropped
     * @param shared the new sharing state
     */
    setShared(shared: boolean): boolean
    setSize(width: number, height: number): ConnectionResizeStatus
    /**
     * Initiate a shutdown of the current connection
     * by closing its socket
     */
    shutdown(): void
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
    /* Signals of GVnc-1.0.GVnc.Connection */
    connect(sigName: "vnc-auth-choose-subtype", callback: ((object: number, p0: GObject.ValueArray) => void)): number
    on(sigName: "vnc-auth-choose-subtype", callback: (object: number, p0: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-subtype", callback: (object: number, p0: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-subtype", callback: (object: number, p0: GObject.ValueArray) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-choose-subtype", object: number, p0: GObject.ValueArray): void
    connect(sigName: "vnc-auth-choose-type", callback: ((object: GObject.ValueArray) => void)): number
    on(sigName: "vnc-auth-choose-type", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-type", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-type", callback: (object: GObject.ValueArray) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-choose-type", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-credential", callback: ((object: GObject.ValueArray) => void)): number
    on(sigName: "vnc-auth-credential", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-credential", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-credential", callback: (object: GObject.ValueArray) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-failure", callback: ((object: string) => void)): number
    on(sigName: "vnc-auth-failure", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-failure", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-failure", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-failure", object: string): void
    connect(sigName: "vnc-auth-unsupported", callback: ((object: number) => void)): number
    on(sigName: "vnc-auth-unsupported", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-unsupported", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-unsupported", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-unsupported", object: number): void
    connect(sigName: "vnc-bell", callback: (() => void)): number
    on(sigName: "vnc-bell", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-bell", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-bell", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-bell"): void
    connect(sigName: "vnc-connected", callback: (() => void)): number
    on(sigName: "vnc-connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-connected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-connected"): void
    /**
     * Emitted when the cursor is changed.
     * @param cursor the new cursor
     */
    connect(sigName: "vnc-cursor-changed", callback: ((cursor?: Cursor | null) => void)): number
    on(sigName: "vnc-cursor-changed", callback: (cursor?: Cursor | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-cursor-changed", callback: (cursor?: Cursor | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-cursor-changed", callback: (cursor?: Cursor | null) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-cursor-changed", cursor?: Cursor | null): void
    connect(sigName: "vnc-desktop-rename", callback: ((object: string) => void)): number
    on(sigName: "vnc-desktop-rename", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-rename", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-rename", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-rename", object: string): void
    connect(sigName: "vnc-desktop-resize", callback: ((object: number, p0: number) => void)): number
    on(sigName: "vnc-desktop-resize", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-resize", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-resize", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-resize", object: number, p0: number): void
    connect(sigName: "vnc-disconnected", callback: (() => void)): number
    on(sigName: "vnc-disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-disconnected"): void
    connect(sigName: "vnc-error", callback: ((object: string) => void)): number
    on(sigName: "vnc-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-error", object: string): void
    connect(sigName: "vnc-framebuffer-update", callback: ((object: number, p0: number, p1: number, p2: number) => void)): number
    on(sigName: "vnc-framebuffer-update", callback: (object: number, p0: number, p1: number, p2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-framebuffer-update", callback: (object: number, p0: number, p1: number, p2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-framebuffer-update", callback: (object: number, p0: number, p1: number, p2: number) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-framebuffer-update", object: number, p0: number, p1: number, p2: number): void
    connect(sigName: "vnc-initialized", callback: (() => void)): number
    on(sigName: "vnc-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-initialized", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-initialized"): void
    connect(sigName: "vnc-led-state", callback: (() => void)): number
    on(sigName: "vnc-led-state", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-led-state", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-led-state", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-led-state"): void
    connect(sigName: "vnc-pixel-format-changed", callback: ((object: PixelFormat) => void)): number
    on(sigName: "vnc-pixel-format-changed", callback: (object: PixelFormat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pixel-format-changed", callback: (object: PixelFormat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pixel-format-changed", callback: (object: PixelFormat) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-pixel-format-changed", object: PixelFormat): void
    connect(sigName: "vnc-pointer-mode-changed", callback: ((object: boolean) => void)): number
    on(sigName: "vnc-pointer-mode-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-mode-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-mode-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-pointer-mode-changed", object: boolean): void
    connect(sigName: "vnc-power-control-failed", callback: (() => void)): number
    on(sigName: "vnc-power-control-failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-failed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-failed"): void
    connect(sigName: "vnc-power-control-initialized", callback: (() => void)): number
    on(sigName: "vnc-power-control-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-initialized", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-initialized"): void
    connect(sigName: "vnc-server-cut-text", callback: ((object: string) => void)): number
    on(sigName: "vnc-server-cut-text", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-server-cut-text", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-server-cut-text", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-server-cut-text", object: string): void
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
    connect(sigName: "notify::framebuffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::framebuffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static $gtype: GObject.Type
}
interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GVnc-1.0.GVnc.Cursor */
    data?: object
    height?: number
    hotx?: number
    hoty?: number
    width?: number
}
class Cursor {
    /* Properties of GVnc-1.0.GVnc.Cursor */
    data: object
    height: number
    hotx: number
    hoty: number
    width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GVnc-1.0.GVnc.Cursor */
    /**
     * Get the bitmap data representing the cursor
     */
    getData(): Uint8Array
    /**
     * Get the height of the cursor bitmap
     */
    getHeight(): number
    /**
     * Get the horizontal position of the cursor hot point
     */
    getHotx(): number
    /**
     * Get the vertical position of the cursor hot point
     */
    getHoty(): number
    /**
     * Get the width of the cursor bitmap
     */
    getWidth(): number
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
    connect(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hotx", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotx", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hoty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hoty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array, hotx: number, hoty: number, width: number, height: number): Cursor
    static $gtype: GObject.Type
}
class AudioFormat {
    /* Fields of GVnc-1.0.GVnc.AudioFormat */
    format: number
    nchannels: number
    frequency: number
    /* Methods of GVnc-1.0.GVnc.AudioFormat */
    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized with the data found
     * in `format`. The struct must be released using
     * vnc_audio_format_free when no longer required.
     */
    copy(): AudioFormat
    /**
     * Release the memory associated with `format`
     */
    free(): void
    static name: string
    static new(): AudioFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AudioFormat
}
abstract class AudioInterface {
    /* Fields of GVnc-1.0.GVnc.AudioInterface */
    parent: GObject.TypeInterface
    playbackStart: (audio: Audio, format: AudioFormat) => boolean
    playbackStop: (audio: Audio) => boolean
    playbackData: (audio: Audio, sample: AudioSample) => boolean
    static name: string
}
class AudioSample {
    /* Fields of GVnc-1.0.GVnc.AudioSample */
    data: number
    length: number
    capacity: number
    /* Methods of GVnc-1.0.GVnc.AudioSample */
    /**
     * Allocate a new audio sample, initializing it with a copy
     * of the data in `sample`.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     */
    copy(): AudioSample
    /**
     * Release memory associated with the audio sample
     * `sample`
     */
    free(): void
    static name: string
    static new(capacity: number): AudioSample
    constructor(capacity: number)
    /* Static methods and pseudo-constructors */
    static new(capacity: number): AudioSample
}
abstract class BaseAudioClass {
    /* Fields of GVnc-1.0.GVnc.BaseAudioClass */
    parentClass: GObject.ObjectClass
    playbackStart: (audio: BaseAudio, format: AudioFormat) => boolean
    playbackStop: (audio: BaseAudio) => boolean
    playbackData: (audio: BaseAudio, sample: AudioSample) => boolean
    static name: string
}
class BaseAudioPrivate {
    static name: string
}
abstract class BaseFramebufferClass {
    /* Fields of GVnc-1.0.GVnc.BaseFramebufferClass */
    parentClass: GObject.ObjectClass
    vncReserved: object[]
    static name: string
}
class BaseFramebufferPrivate {
    static name: string
}
class ColorMap {
    /* Fields of GVnc-1.0.GVnc.ColorMap */
    offset: number
    size: number
    colors: ColorMapEntry
    /* Methods of GVnc-1.0.GVnc.ColorMap */
    /**
     * Allocate a new color map initializing it with a
     * copy of the data stored in `map`.
     */
    copy(): ColorMap
    /**
     * Release the memory associated with the
     * color map `map`
     */
    free(): void
    /**
     * Lookup the RGB values associated with the
     * colour map entry at position `idx`
     * @param idx the index to set
     */
    lookup(idx: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    /**
     * Update the RGB value associated with the
     * color map entry at position `idx`.
     * @param idx the index to set
     * @param red the new red value
     * @param green the new green value
     * @param blue the new blue value
     */
    set(idx: number, red: number, green: number, blue: number): boolean
    static name: string
    static new(offset: number, size: number): ColorMap
    constructor(offset: number, size: number)
    /* Static methods and pseudo-constructors */
    static new(offset: number, size: number): ColorMap
}
class ColorMapEntry {
    /* Fields of GVnc-1.0.GVnc.ColorMapEntry */
    red: number
    green: number
    blue: number
    static name: string
}
abstract class ConnectionClass {
    /* Fields of GVnc-1.0.GVnc.ConnectionClass */
    parentClass: GObject.ObjectClass
    vncCursorChanged: (conn: Connection, cursor: Cursor) => void
    vncPointerModeChanged: (conn: Connection, absPointer: boolean) => void
    vncBell: (conn: Connection) => void
    vncServerCutText: (conn: Connection, text: GLib.String) => void
    vncFramebufferUpdate: (conn: Connection, x: number, y: number, width: number, height: number) => void
    vncDesktopResize: (conn: Connection, width: number, height: number) => void
    vncPixelFormatChanged: (conn: Connection, format: PixelFormat) => void
    vncAuthFailure: (conn: Connection, reason: string) => void
    vncAuthUnsupported: (conn: Connection, authType: number) => void
    vncAuthCredential: (conn: Connection, creds: GObject.ValueArray) => void
    vncAuthChooseType: (conn: Connection, types: GObject.ValueArray) => void
    vncAuthChooseSubtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    vncConnected: (conn: Connection) => void
    vncInitialized: (conn: Connection) => void
    vncDisconnected: (conn: Connection) => void
    vncLedState: (conn: Connection) => void
    vncError: (conn: Connection, message: string) => void
    vncPowerControlInitialized: (conn: Connection) => void
    vncPowerControlFailed: (conn: Connection) => void
    vncDesktopRename: (conn: Connection, name: string) => void
    vncReserved: object[]
    static name: string
}
class ConnectionPrivate {
    static name: string
}
abstract class CursorClass {
    /* Fields of GVnc-1.0.GVnc.CursorClass */
    parentClass: GObject.ObjectClass
    vncReserved: object[]
    static name: string
}
class CursorPrivate {
    static name: string
}
abstract class FramebufferInterface {
    /* Fields of GVnc-1.0.GVnc.FramebufferInterface */
    parent: GObject.TypeInterface
    getWidth: (fb: Framebuffer) => number
    getHeight: (fb: Framebuffer) => number
    getRowstride: (fb: Framebuffer) => number
    getBuffer: (fb: Framebuffer) => number
    getLocalFormat: (fb: Framebuffer) => PixelFormat
    getRemoteFormat: (fb: Framebuffer) => PixelFormat
    perfectFormatMatch: (fb: Framebuffer) => boolean
    setPixelAt: (fb: Framebuffer, src: Uint8Array, x: number, y: number) => void
    fill: (fb: Framebuffer, src: Uint8Array, x: number, y: number, width: number, height: number) => void
    copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    rgb24Blt: (fb: Framebuffer, src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number) => void
    setColorMap: (fb: Framebuffer, map: ColorMap) => void
    static name: string
}
class PixelFormat {
    /* Fields of GVnc-1.0.GVnc.PixelFormat */
    bitsPerPixel: number
    depth: number
    byteOrder: number
    trueColorFlag: number
    redMax: number
    greenMax: number
    blueMax: number
    redShift: number
    greenShift: number
    blueShift: number
    /* Methods of GVnc-1.0.GVnc.PixelFormat */
    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized with the data found
     * in `srcFormat`. The struct must be released using
     * vnc_pixel_format_free when no longer required.
     */
    copy(): PixelFormat
    /**
     * Release the memory associated with `format`
     */
    free(): void
    match(other: PixelFormat): boolean
    static name: string
    static new(): PixelFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PixelFormat
}
}
export default GVnc;