/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Farstream-0.1
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Farstream {

/**
 * An enum for the type of candidate used/reported
 */
enum CandidateType {
    HOST,
    SRFLX,
    PRFLX,
    RELAY,
    MULTICAST,
}
/**
 * This enum contains the component IDs defined in ICE-19
 */
enum ComponentType {
    NONE,
    RTP,
    RTCP,
}
/**
 * An enum that represents the different DTMF event that can be sent to a
 * #FsSession. The values corresponds those those defined in RFC 4733
 * The rest of the possibles values are in the IANA registry at:
 * http://www.iana.org/assignments/audio-telephone-event-registry
 */
enum DTMFEvent {
    TODO_0,
    TODO_1,
    TODO_2,
    TODO_3,
    TODO_4,
    TODO_5,
    TODO_6,
    TODO_7,
    TODO_8,
    TODO_9,
    STAR,
    POUND,
    A,
    B,
    C,
    D,
}
/**
 * An enum that represents the different ways a DTMF event can be sent
 */
enum DTMFMethod {
    RTP_RFC4733,
    SOUND,
}
/**
 * This is the enum of error numbers that will come either on the "error"
 * signal, from the Gst Bus or for error in the FS_ERROR domain in GErrors
 */
enum Error {
    CONSTRUCTION,
    INTERNAL,
    INVALID_ARGUMENTS,
    NETWORK,
    NOT_IMPLEMENTED,
    NEGOTIATION_FAILED,
    UNKNOWN_CODEC,
    NO_CODECS,
    NO_CODECS_LEFT,
    CONNECTION_FAILED,
    DISPOSED,
    ALREADY_EXISTS,
}
/**
 * Enum used to signify the media type of a codec or stream.
 */
enum MediaType {
    AUDIO,
    VIDEO,
    LAST,
}
/**
 * An enum for the base IP protocol
 */
enum NetworkProtocol {
    UDP,
    TCP,
}
/**
 * These are the possible states of a stream, a simple multicast stream
 * could only be in "disconnected" or "ready" state.
 * An stream using an ICE transmitter would use all of these.
 */
enum StreamState {
    FAILED,
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
}
/**
 * An enum for specifying the direction of a stream
 */
enum StreamDirection {
    NONE,
    SEND,
    RECV,
    BOTH,
}
const CODEC_FORMAT: string
const CODEC_ID_ANY: number
const CODEC_ID_DISABLE: number
const RTP_HEADER_EXTENSION_FORMAT: string
function candidate_list_copy(candidate_list: Codec[]): Codec[]
function codec_list_are_equal(list1: Codec[], list2: Codec[]): boolean
function codec_list_copy(codec_list: Codec[]): Codec[]
function codec_list_from_keyfile(filename: string): Codec[]
function error_quark(): GLib.Quark
function media_type_to_string(media_type: MediaType): string
function parse_error(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* error_msg */ string ]
function rtp_header_extension_list_copy(extensions: any[]): any[]
function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): any[]
function utils_get_default_codec_preferences(element: Gst.Element): Codec[]
function utils_get_default_element_properties(element: Gst.Element): GLib.KeyFile
function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[]
function utils_set_bitrate(element: Gst.Element, bitrate: number): void
interface Conference_ConstructProps extends Gst.Bin_ConstructProps {
}
class Conference {
    /* Properties of Gst-0.10.Gst.Bin */
    async_handling: boolean
    /* Fields of Gst-0.10.Gst.Bin */
    element: Gst.Element
    numchildren: number
    children: object[]
    children_cookie: number
    child_bus: Gst.Bus
    messages: object[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Gst.Clock
    clock_provider: Gst.Element
    priv: Gst.BinPrivate
    _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    object: Gst.Object
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: number
    current_state: Gst.State
    next_state: Gst.State
    pending_state: Gst.State
    last_return: Gst.StateChangeReturn
    bus: Gst.Bus
    clock: Gst.Clock
    base_time: Gst.ClockTimeDiff
    numpads: number
    pads: object[]
    numsrcpads: number
    srcpads: object[]
    numsinkpads: number
    sinkpads: object[]
    pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    refcount: number
    lock: GLib.Mutex
    name: string
    name_prefix: string
    parent: Gst.Object
    flags: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Conference */
    /**
     * Create a new Farstream Participant for the type of the given conference.
     */
    new_participant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @param media_type #FsMediaType of the new session
     */
    new_session(media_type: MediaType): Session
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Gst.Element): boolean
    remove(element: Gst.Element): boolean
    get_by_name(name: string): Gst.Element
    get_by_name_recurse_up(name: string): Gst.Element
    get_by_interface(iface: GObject.Type): Gst.Element
    iterate_elements(): Gst.Iterator
    iterate_sorted(): Gst.Iterator
    iterate_recurse(): Gst.Iterator
    iterate_sinks(): Gst.Iterator
    iterate_sources(): Gst.Iterator
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator
    recalculate_latency(): boolean
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad
    find_unconnected_pad(direction: Gst.PadDirection): Gst.Pad
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Gst.Object
    get_child_by_index(index: number): Gst.Object
    get_children_count(): number
    /* Virtual methods of Farstream-0.1.Farstream.Conference */
    /**
     * Create a new Farstream Participant for the type of the given conference.
     */
    vfunc_new_participant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @param media_type #FsMediaType of the new session
     */
    vfunc_new_session(media_type: MediaType): Session
    vfunc_get_child_by_index(index: number): Gst.Object
    vfunc_get_children_count(): number
    /* Virtual methods of Gst-0.10.Gst.Bin */
    vfunc_add_element(element: Gst.Element): boolean
    vfunc_remove_element(element: Gst.Element): boolean
    vfunc_handle_message(message: Gst.Message): void
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
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
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Conference, object: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Conference, object: Gst.Element) => void)): number
    emit(sigName: "element-added", object: Gst.Element): void
    connect(sigName: "element-removed", callback: (($obj: Conference, object: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Conference, object: Gst.Element) => void)): number
    emit(sigName: "element-removed", object: Gst.Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Conference, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Conference, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Conference, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Conference, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Conference, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Conference, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Conference, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Conference, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Conference, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    connect(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    connect(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Conference_ConstructProps)
    _init (config?: Conference_ConstructProps): void
    static $gtype: GObject.Type
}
interface ElementAddedNotifier_ConstructProps extends GObject.Object_ConstructProps {
}
class ElementAddedNotifier {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.ElementAddedNotifier */
    /**
     * Add a #GstBin to on which the #FsElementAddedNotifier::element-added signal
     * will be called on every element and sub-element present and added in the
     * future.
     * @param bin A #GstBin to watch to added elements
     */
    add(bin: Gst.Bin): void
    /**
     * Stop watching the passed bin and its subbins.
     * @param bin A #GstBin to stop watching
     */
    remove(bin: Gst.Bin): boolean
    /**
     * Same as first calling fs_utils_get_default_element_properties() and using
     * the result with
     * fs_element_added_notifier_set_properties_from_keyfile() .
     * 
     * This is binding friendly (since GKeyFile doesn't have a boxed type).
     * @param element Element for which to set the default codec preferences
     */
    set_default_properties(element: Gst.Element): void
    /**
     * Same as fs_element_added_notifier_set_properties_from_keyfile() but using
     * the name of the file to load instead of the #GKeyFile directly.
     * @param filename The name of the keyfile to use
     */
    set_properties_from_file(filename: string): boolean
    /**
     * Using a #GKeyFile where the groups are the element's type or name
     * and the key=value are the property and its value, this function
     * will set the properties on the elements added to this object after
     * this function has been called.  It will take ownership of the
     * GKeyFile structure. It will first try the group as the element type, if that
     * does not match, it will check its name.
     * @param keyfile a #GKeyFile
     */
    set_properties_from_keyfile(keyfile: GLib.KeyFile): void
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
    /* Signals of Farstream-0.1.Farstream.ElementAddedNotifier */
    /**
     * This signal is emitted when an element is added to a #GstBin that was added
     * to this object or one of its sub-bins.
     * Be careful, there is no guarantee that this will be emitted on your
     * main thread, it will be emitted in the thread that added the element.
     * The bin may be %NULL if this is the top-level bin.
     * @param bin The #GstBin to which this object was added
     * @param element The #GstElement that was added
     */
    connect(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "element-added", bin: Gst.Bin, element: Gst.Element): void
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
    connect(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ElementAddedNotifier_ConstructProps)
    _init (config?: ElementAddedNotifier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ElementAddedNotifier
    static $gtype: GObject.Type
}
interface Participant_ConstructProps extends Gst.Object_ConstructProps {
}
class Participant {
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string
    name_prefix: string
    parent: Gst.Object
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Participant, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Participant, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Participant, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Participant, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Participant, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Participant, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Participant, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Participant, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    connect(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Participant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Participant_ConstructProps)
    _init (config?: Participant_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends GObject.TypeModule_ConstructProps {
}
class Plugin {
    /* Fields of GObject-2.0.GObject.TypeModule */
    parent_instance: GObject.Object
    use_count: number
    type_infos: object[]
    interface_infos: object[]
    /**
     * the name of the module
     */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    /**
     * Registers an additional interface for a type, whose interface lives
     * in the given type plugin. If the interface was already registered
     * for the type in this plugin, nothing will be done.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_add_interface_static()
     * instead. This can be used when making a static build of the module.
     * @param instance_type type to which to add the interface.
     * @param interface_type interface type to add
     * @param interface_info type information structure
     */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    /**
     * Looks up or registers an enumeration that is implemented with a particular
     * type plugin. If a type with name `type_name` was previously registered,
     * the #GType identifier for the type is returned, otherwise the type
     * is newly registered, and the resulting #GType identifier returned.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_register_static()
     * instead. This can be used when making a static build of the module.
     * @param name name for the type
     * @param const_static_values an array of #GEnumValue structs for the                       possible enumeration values. The array is                       terminated by a struct with all members being                       0.
     */
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    /**
     * Looks up or registers a flags type that is implemented with a particular
     * type plugin. If a type with name `type_name` was previously registered,
     * the #GType identifier for the type is returned, otherwise the type
     * is newly registered, and the resulting #GType identifier returned.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_register_static()
     * instead. This can be used when making a static build of the module.
     * @param name name for the type
     * @param const_static_values an array of #GFlagsValue structs for the                       possible flags values. The array is                       terminated by a struct with all members being                       0.
     */
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    /**
     * Looks up or registers a type that is implemented with a particular
     * type plugin. If a type with name `type_name` was previously registered,
     * the #GType identifier for the type is returned, otherwise the type
     * is newly registered, and the resulting #GType identifier returned.
     * 
     * When reregistering a type (typically because a module is unloaded
     * then reloaded, and reinitialized), `module` and `parent_type` must
     * be the same as they were previously.
     * 
     * As long as any instances of the type exist, the type plugin will
     * not be unloaded.
     * 
     * Since 2.56 if `module` is %NULL this will call g_type_register_static()
     * instead. This can be used when making a static build of the module.
     * @param parent_type the type for the parent class
     * @param type_name name for the type
     * @param type_info type information structure
     * @param flags flags field providing details about the type
     */
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    /**
     * Sets the name for a #GTypeModule
     * @param name a human-readable name to use in error messages.
     */
    set_name(name: string): void
    /**
     * Decreases the use count of a #GTypeModule by one. If the
     * result is zero, the module will be unloaded. (However, the
     * #GTypeModule will not be freed, and types associated with the
     * #GTypeModule are not unregistered. Once a #GTypeModule is
     * initialized, it must exist forever.)
     */
    unuse(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     */
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    /**
     * Calls the `complete_interface_info` function from the
     * #GTypePluginClass of `plugin`. There should be no need to use this
     * function outside of the GObject type system itself.
     * @param instance_type the #GType of an instantiatable type to which the interface  is added
     * @param interface_type the #GType of the interface whose info is completed
     * @param info the #GInterfaceInfo to fill in
     */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    /**
     * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
     * There should be no need to use this function outside of the GObject
     * type system itself.
     * @param g_type the #GType whose info is completed
     * @param info the #GTypeInfo struct to fill in
     * @param value_table the #GTypeValueTable to fill in
     */
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /* Virtual methods of GObject-2.0.GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
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
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the list of all available plugins of a certain type
     * @param type_suffix Get list of plugins with this type suffix
     */
    static list_available(type_suffix: string): string[]
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of Farstream-0.1.Farstream.Session */
    /**
     * The #FsConference parent of this session. This property is a
     * construct param and is read-only.
     */
    conference?: Conference
    /**
     * The ID of the session, the first number of the pads linked to this session
     * will be this id
     */
    id?: number
    /**
     * The media-type of the session. This is either Audio, Video or both.
     * This is a constructor parameter that cannot be changed.
     */
    media_type?: MediaType
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos?: number
}
class Session {
    /* Properties of Farstream-0.1.Farstream.Session */
    /**
     * This is the current preferences list for the local codecs. It is
     * set by the user to specify the codec options and priorities. The user may
     * change its value with fs_session_set_codec_preferences() at any time
     * during a session. It is a #GList of #FsCodec.
     * The user must free this codec list using fs_codec_list_destroy() when done.
     * 
     * The payload type may be a valid dynamic PT (96-127), %FS_CODEC_ID_DISABLE
     * or %FS_CODEC_ID_ANY. If the encoding name is "reserve-pt", then the
     * payload type of the codec will be "reserved" and not be used by any
     * dynamically assigned payload type.
     */
    readonly codec_preferences: Codec[]
    /**
     * This is the list of codecs used for this session. It will include the
     * codecs and payload type used to receive media on this session. It will
     * also include any configuration parameter that must be transmitted reliably
     * for the other end to decode the content.
     * 
     * It may change when the codec preferences are set, when codecs are set
     * on a #FsStream in this session, when a #FsStream is destroyed or
     * asynchronously when new config data is discovered.
     * 
     * If any configuration parameter needs to be discovered, this property
     * will be %NULL until they have been discovered. One can always get
     * the codecs from #FsSession:codecs-without-config.
     * The "farstream-codecs-changed" message will be emitted whenever the value
     * of this property changes.
     * 
     * It is a #GList of #FsCodec. User must free this codec list using
     * fs_codec_list_destroy() when done.
     */
    readonly codecs: Codec[]
    /**
     * This is the same list of codecs as #FsSession:codecs without
     * the configuration information that describes the data sent. It is suitable
     * for configurations where a list of codecs is shared by many senders.
     * If one is using codecs such as Theora, Vorbis or H.264 that require
     * such information to be transmitted, the configuration data should be
     * included in the stream and retransmitted regularly.
     * 
     * It may change when the codec preferences are set, when codecs are set
     * on a #FsStream in this session, when a #FsStream is destroyed or
     * asynchronously when new config data is discovered.
     * 
     * The "farstream-codecs-changed" message will be emitted whenever the value
     * of this property changes.
     * 
     * It is a #GList of #FsCodec. User must free this codec list using
     * fs_codec_list_destroy() when done.
     */
    readonly codecs_without_config: Codec[]
    /**
     * The #FsConference parent of this session. This property is a
     * construct param and is read-only.
     */
    readonly conference: Conference
    /**
     * Indicates the currently active send codec. A user can change the active
     * send codec by calling fs_session_set_send_codec(). The send codec could
     * also be automatically changed by Farstream. This property is an
     * #FsCodec. User must free the codec using fs_codec_destroy() when done.
     * The "farstream-send-codec-changed" message is emitted on the bus when
     * the value of this property changes.
     */
    readonly current_send_codec: Codec
    /**
     * The ID of the session, the first number of the pads linked to this session
     * will be this id
     */
    readonly id: number
    /**
     * The media-type of the session. This is either Audio, Video or both.
     * This is a constructor parameter that cannot be changed.
     */
    readonly media_type: MediaType
    /**
     * The Gstreamer sink pad that must be used to send media data on this
     * session. User must unref this GstPad when done with it.
     */
    readonly sink_pad: Gst.Pad
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos: number
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string
    name_prefix: string
    parent: Gst.Object
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Session */
    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @param old_codecs Codecs previously retrieved from the #FsSession:codecs property
     * @param new_codecs Codecs recently retrieved from the #FsSession:codecs property
     */
    codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[]
    /**
     * This will cause the session to remove all links to other objects and to
     * remove itself from the #FsConference, it will also destroy all #FsStream
     * inside this #FsSession Once a #FsSession has been destroyed, it
     * can not be used anymore.
     * 
     * It is strongly recommended to call this function from the main thread because
     * releasing the application's reference to a session.
     */
    destroy(): void
    /**
     * This function emit the "error" signal on a #FsSession, it should only be
     * called by subclasses.
     * @param error_no The number of the error of type #FsError
     * @param error_msg Error message
     */
    emit_error(error_no: number, error_msg: string): void
    /**
     * Returns the GType of the stream transmitter, bindings can use it
     * to validate/convert the parameters passed to fs_session_new_stream().
     * @param transmitter The name of the transmitter
     */
    get_stream_transmitter_type(transmitter: string): GObject.Type
    /**
     * Get the list of all available transmitters for this session.
     */
    list_transmitters(): string[]
    /**
     * This function creates a stream for the given participant into the active session.
     * @param participant #FsParticipant of a participant for the new stream
     * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
     */
    new_stream(participant: Participant, direction: StreamDirection): Stream
    /**
     * Parses a "farstream-codecs-changed" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parse_codecs_changed(message: Gst.Message): boolean
    /**
     * Parses a "farstream-send-codec-changed" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parse_send_codec_changed(message: Gst.Message): [ /* returnType */ boolean, /* codec */ Codec, /* secondary_codecs */ Codec[] ]
    /**
     * Parses a "farstream-telephony-event-started" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parse_telephony_event_started(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod, /* event */ DTMFEvent, /* volume */ number ]
    /**
     * Parses a "farstream-telephony-event-stopped" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parse_telephony_event_stopped(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod ]
    /**
     * Set the list of desired codec preferences. The user may
     * change this value during an ongoing session. Note that doing this can cause
     * the codecs to change. Therefore this requires the user to fetch
     * the new codecs and renegotiate them with the peers. It is a #GList
     * of #FsCodec. The changes are immediately effective.
     * The function does not take ownership of the list.
     * 
     * The payload type may be a valid dynamic PT (96-127), %FS_CODEC_ID_DISABLE
     * or %FS_CODEC_ID_ANY. If the encoding name is "reserve-pt", then the
     * payload type of the codec will be "reserved" and not be used by any
     * dynamically assigned payload type.
     * 
     * If the list of specifications would invalidate all codecs, an error will
     * be returned.
     * @param codec_preferences a #GList of #FsCodec with the desired configuration
     */
    set_codec_preferences(codec_preferences: Codec[]): boolean
    /**
     * This function will set the currently being sent codec for all streams in this
     * session. The given #FsCodec must be taken directly from the #codecs
     * property of the session. If the given codec is not in the codecs
     * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
     * copied so it must be free'd using fs_codec_destroy() when done.
     * @param send_codec a #FsCodec representing the codec to send
     */
    set_send_codec(send_codec: Codec): boolean
    /**
     * This function will start sending a telephony event (such as a DTMF
     * tone) on the #FsSession. You have to call the function
     * fs_session_stop_telephony_event() to stop it.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-started" will
     * always be emitted when the event is actually played out.
     * @param event A #FsStreamDTMFEvent or another number defined at http://www.iana.org/assignments/audio-telephone-event-registry
     * @param volume The volume in dBm0 without the negative sign. Should be between 0 and 36. Higher values mean lower volume
     */
    start_telephony_event(event: number, volume: number): boolean
    /**
     * This function will stop sending a telephony event started by
     * fs_session_start_telephony_event(). If the event was being sent
     * for less than 50ms, it will be sent for 50ms minimum. If the
     * duration was a positive and the event is not over, it will cut it
     * short.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-stopped" will
     * always be emitted when the event is actually stopped.
     */
    stop_telephony_event(): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.Session */
    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @param old_codecs Codecs previously retrieved from the #FsSession:codecs property
     * @param new_codecs Codecs recently retrieved from the #FsSession:codecs property
     */
    vfunc_codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[]
    /**
     * Returns the GType of the stream transmitter, bindings can use it
     * to validate/convert the parameters passed to fs_session_new_stream().
     * @param transmitter The name of the transmitter
     */
    vfunc_get_stream_transmitter_type(transmitter: string): GObject.Type
    /**
     * Get the list of all available transmitters for this session.
     */
    vfunc_list_transmitters(): string[]
    /**
     * This function creates a stream for the given participant into the active session.
     * @param participant #FsParticipant of a participant for the new stream
     * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
     */
    vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream
    /**
     * Set the list of desired codec preferences. The user may
     * change this value during an ongoing session. Note that doing this can cause
     * the codecs to change. Therefore this requires the user to fetch
     * the new codecs and renegotiate them with the peers. It is a #GList
     * of #FsCodec. The changes are immediately effective.
     * The function does not take ownership of the list.
     * 
     * The payload type may be a valid dynamic PT (96-127), %FS_CODEC_ID_DISABLE
     * or %FS_CODEC_ID_ANY. If the encoding name is "reserve-pt", then the
     * payload type of the codec will be "reserved" and not be used by any
     * dynamically assigned payload type.
     * 
     * If the list of specifications would invalidate all codecs, an error will
     * be returned.
     * @param codec_preferences a #GList of #FsCodec with the desired configuration
     */
    vfunc_set_codec_preferences(codec_preferences: Codec[]): boolean
    /**
     * This function will set the currently being sent codec for all streams in this
     * session. The given #FsCodec must be taken directly from the #codecs
     * property of the session. If the given codec is not in the codecs
     * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
     * copied so it must be free'd using fs_codec_destroy() when done.
     * @param send_codec a #FsCodec representing the codec to send
     */
    vfunc_set_send_codec(send_codec: Codec): boolean
    /**
     * This function will start sending a telephony event (such as a DTMF
     * tone) on the #FsSession. You have to call the function
     * fs_session_stop_telephony_event() to stop it.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-started" will
     * always be emitted when the event is actually played out.
     * @param event A #FsStreamDTMFEvent or another number defined at http://www.iana.org/assignments/audio-telephone-event-registry
     * @param volume The volume in dBm0 without the negative sign. Should be between 0 and 36. Higher values mean lower volume
     */
    vfunc_start_telephony_event(event: number, volume: number): boolean
    /**
     * This function will stop sending a telephony event started by
     * fs_session_start_telephony_event(). If the event was being sent
     * for less than 50ms, it will be sent for 50ms minimum. If the
     * duration was a positive and the event is not over, it will cut it
     * short.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-stopped" will
     * always be emitted when the event is actually stopped.
     */
    vfunc_stop_telephony_event(): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
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
    /* Signals of Farstream-0.1.Farstream.Session */
    /**
     * This signal is emitted in any error condition, it can be emitted on any
     * thread. Applications should listen to the GstBus for errors.
     * @param object The #Gobject that emitted the signal
     * @param error_no The number of the error
     * @param error_msg Error message
     */
    connect(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    emit(sigName: "error", object: GObject.Object, error_no: Error, error_msg: string): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Session, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Session, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Session, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Session, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Session, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Session, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Session, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Session, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::conference", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::conference", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-type", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of Farstream-0.1.Farstream.Stream */
    /**
     * The direction of the stream. This property is set initially as a parameter
     * to the fs_session_new_stream() function. It can be changed later if
     * required by setting this property.
     */
    direction?: StreamDirection
    /**
     * The #FsParticipant for this stream. This property is a construct param and
     * is read-only construction.
     */
    participant?: Participant
    /**
     * The #FsSession for this stream. This property is a construct param and
     * is read-only construction.
     */
    session?: Session
}
class Stream {
    /* Properties of Farstream-0.1.Farstream.Stream */
    /**
     * This is the list of codecs that have been received by this stream.
     * The user must free the list if fs_codec_list_destroy().
     * The "farstream-recv-codecs-changed" message is send on the #GstBus
     * when the value of this property changes.
     * It is normally emitted right after #FsStream::src-pad-added
     * only if that codec was not previously received in this stream, but it can
     * also be emitted if the pad already exists, but the source material that
     * will come to it is different.
     */
    readonly current_recv_codecs: Codec[]
    /**
     * The direction of the stream. This property is set initially as a parameter
     * to the fs_session_new_stream() function. It can be changed later if
     * required by setting this property.
     */
    direction: StreamDirection
    /**
     * This is the list of negotiatied codecs, it is the same list as the list
     * of #FsCodec from the parent #FsSession, except that the codec config data
     * has been replaced with the data from the remote codecs for this stream.
     * This is the list of #FsCodec used to receive data from this stream.
     * It is a #GList of #FsCodec.
     */
    readonly negotiated_codecs: Codec[]
    /**
     * The #FsParticipant for this stream. This property is a construct param and
     * is read-only construction.
     */
    readonly participant: Participant
    /**
     * This is the list of remote codecs for this stream. They must be set by the
     * user as soon as they are known using fs_stream_set_remote_codecs()
     * (generally through external signaling). It is a #GList of #FsCodec.
     */
    readonly remote_codecs: Codec[]
    /**
     * The #FsSession for this stream. This property is a construct param and
     * is read-only construction.
     */
    readonly session: Session
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string
    name_prefix: string
    parent: Gst.Object
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Stream */
    /**
     * This function is used to add data identifiers that allow the
     * plugin to recognize packets that are meant for id. For example, in RTP,
     * one would set the SSRCs that are expected.
     * 
     * Depending on the protocol, one may be able to add more than one ID
     * to a stream (in RTP you can have multiple SSRCs in a stream).
     * If a protocol supports only one id, adding a new one will overwrite it.
     * If an ID was already set on a stream, adding it to another stream will
     * override the previdous decision.
     * 
     * For most protocols, calling this function is optional as the incoming data
     * can be matched with a stream by its source IP address. This is mostly useful
     * if one is using multicast or is behind a muxer server.
     * @param id The id to add to the stream
     */
    add_id(id: number): void
    /**
     * This function adds remote candidates. Any new candidates are
     * added to the list. The candidates will be used to establish a connection
     * with the peer. A copy will be made so the user must free the
     * passed candidate using fs_candidate_destroy() when done.
     * @param candidates an #GList of #FsCandidate representing the remote candidates
     */
    add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This will cause the stream to remove all links to other objects and to
     * remove itself from the #FsSession. Once a #FsStream has been destroyed, it
     * can not be used anymore.
     * 
     * It is strongly recommended to call this function from the main thread because
     * releasing the application's reference to a stream.
     */
    destroy(): void
    /**
     * This function emits the #FsStream::error" signal, it should only be
     * called by subclasses.
     * @param error_no The number of the error
     * @param error_msg Error message to be displayed to user
     */
    emit_error(error_no: number, error_msg: string): void
    /**
     * Emits the #FsStream::src-pad-added" signal, it should only be
     * called by subclasses.
     * @param pad the #GstPad that this #FsStream has created
     * @param codec The #FsCodec for this pad
     */
    emit_src_pad_added(pad: Gst.Pad, codec: Codec): void
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates a #GList of #FsCandidate to force
     */
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * Parses a "farstream-component-state-changed" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parse_component_state_changed(message: Gst.Message): [ /* returnType */ boolean, /* component */ number, /* state */ StreamState ]
    /**
     * Parses a "farstream-local-candidates-prepared" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parse_local_candidates_prepared(message: Gst.Message): boolean
    /**
     * Parses a "farstream-new-active-candidate-pair" message and checks
     * if it matches the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parse_new_active_candidate_pair(message: Gst.Message): [ /* returnType */ boolean, /* local_candidate */ Candidate, /* remote_candidate */ Candidate ]
    /**
     * Parses a "farstream-new-local-candidate" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parse_new_local_candidate(message: Gst.Message): [ /* returnType */ boolean, /* candidate */ Candidate ]
    /**
     * Parses a "farstream-recv-codecs-changed" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parse_recv_codecs_changed(message: Gst.Message): [ /* returnType */ boolean, /* codecs */ Codec[] ]
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @param remote_codecs a #GList of #FsCodec representing the remote codecs
     */
    set_remote_codecs(remote_codecs: Codec[]): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param stream_transmitter_parameters (array length=stream_transmitter_n_parameters) (allow-none): an array of n_parameters #GParameter struct that will be passed to the newly-create #FsStreamTransmitter
     * @param stream_transmitter_n_parameters Number of parametrs passed to the stream transmitter
     */
    set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.Stream */
    /**
     * This function is used to add data identifiers that allow the
     * plugin to recognize packets that are meant for id. For example, in RTP,
     * one would set the SSRCs that are expected.
     * 
     * Depending on the protocol, one may be able to add more than one ID
     * to a stream (in RTP you can have multiple SSRCs in a stream).
     * If a protocol supports only one id, adding a new one will overwrite it.
     * If an ID was already set on a stream, adding it to another stream will
     * override the previdous decision.
     * 
     * For most protocols, calling this function is optional as the incoming data
     * can be matched with a stream by its source IP address. This is mostly useful
     * if one is using multicast or is behind a muxer server.
     * @param id The id to add to the stream
     */
    vfunc_add_id(id: number): void
    /**
     * This function adds remote candidates. Any new candidates are
     * added to the list. The candidates will be used to establish a connection
     * with the peer. A copy will be made so the user must free the
     * passed candidate using fs_candidate_destroy() when done.
     * @param candidates an #GList of #FsCandidate representing the remote candidates
     */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates a #GList of #FsCandidate to force
     */
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @param remote_codecs a #GList of #FsCodec representing the remote codecs
     */
    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param stream_transmitter_parameters (array length=stream_transmitter_n_parameters) (allow-none): an array of n_parameters #GParameter struct that will be passed to the newly-create #FsStreamTransmitter
     * @param stream_transmitter_n_parameters Number of parametrs passed to the stream transmitter
     */
    vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
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
    /* Signals of Farstream-0.1.Farstream.Stream */
    /**
     * This signal is emitted in any error condition
     * @param errorno The number of the error
     * @param error_msg Error message to be displayed to user
     */
    connect(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    /**
     * This signal is emitted when a new gst source pad has been created for a
     * specific codec being received. There will be a different source pad for
     * each codec that is received. The user must ref the #GstPad if he wants to
     * keep it. The user should not modify the #FsCodec and must copy it if he
     * wants to use it outside the callback scope.
     * 
     * This signal is not emitted on the main thread, but on GStreamer's streaming
     * thread!
     * @param pad #GstPad of the new source pad
     * @param codec #FsCodec of the codec being received on the new source pad
     */
    connect(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    connect_after(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    emit(sigName: "src-pad-added", pad: Gst.Pad, codec: Codec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Stream, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Stream, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Stream, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Stream, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Stream, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Stream, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Stream, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Stream, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::participant", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::participant", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
interface StreamTransmitter_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of Farstream-0.1.Farstream.StreamTransmitter */
    /**
     * This tells the stream transmitter to associate incoming data with this
     * based on the source without looking at the content if possible.
     */
    associate_on_source?: boolean
    preferred_local_candidates?: any
    /**
     * A network source #GstElement to be used by the #FsSession
     */
    sending?: boolean
}
class StreamTransmitter {
    /* Properties of Farstream-0.1.Farstream.StreamTransmitter */
    /**
     * This tells the stream transmitter to associate incoming data with this
     * based on the source without looking at the content if possible.
     */
    readonly associate_on_source: boolean
    readonly preferred_local_candidates: any
    /**
     * A network source #GstElement to be used by the #FsSession
     */
    sending: boolean
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string
    name_prefix: string
    parent: Gst.Object
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.StreamTransmitter */
    /**
     * This function is used to add remote candidates to the transmitter
     * @param candidates a #GList of the remote candidates
     */
    add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function emit the "error" signal on a #FsStreamTransmitter, it should
     * only be called by subclasses.
     * @param error_no The number of the error
     * @param error_msg Error message (for the programmer)
     */
    emit_error(error_no: number, error_msg: string): void
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates a #GList of #FsCandidate to force
     */
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * This function tells the transmitter to start gathering local candidates,
     * signals for new candidates and newly active candidates can be emitted
     * during the call to this function.
     */
    gather_local_candidates(): boolean
    /**
     * This functions stops the #FsStreamTransmitter, it must be called before
     * the last reference is dropped.
     */
    stop(): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.StreamTransmitter */
    /**
     * This function is used to add remote candidates to the transmitter
     * @param candidates a #GList of the remote candidates
     */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates a #GList of #FsCandidate to force
     */
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * This function tells the transmitter to start gathering local candidates,
     * signals for new candidates and newly active candidates can be emitted
     * during the call to this function.
     */
    vfunc_gather_local_candidates(): boolean
    /**
     * This functions stops the #FsStreamTransmitter, it must be called before
     * the last reference is dropped.
     */
    vfunc_stop(): void
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
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
    /* Signals of Farstream-0.1.Farstream.StreamTransmitter */
    /**
     * This signal is emitted in any error condition
     * @param errorno The number of the error
     * @param error_msg Error message (for the programmer)
     */
    connect(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    /**
     * This signal is emitted when a buffer coming from a confirmed known source
     * is received.
     * @param component The Component on which this buffer was received
     * @param buffer the #GstBuffer coming from the known source
     */
    connect(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    connect_after(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    emit(sigName: "known-source-packet-received", component: number, buffer: object): void
    /**
     * This signal is emitted when all local candidates have been
     * prepared, an ICE implementation would send its SDP offer or answer.
     */
    connect(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    connect_after(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    emit(sigName: "local-candidates-prepared"): void
    /**
     * This signal is emitted when there is a new active chandidate pair that has
     * been established. This is specially useful for ICE where the active
     * candidate pair can change automatically due to network conditions. The user
     * must not modify the candidates and must copy them if he wants to use them
     * outside the callback scope.
     * @param local_candidate #FsCandidate of the local candidate being used
     * @param remote_candidate #FsCandidate of the remote candidate being used
     */
    connect(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate) => void)): number
    connect_after(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate) => void)): number
    emit(sigName: "new-active-candidate-pair", local_candidate: Candidate, remote_candidate: Candidate): void
    /**
     * This signal is emitted when a new local candidate is discovered.
     * @param local_candidate #FsCandidate of the local candidate
     */
    connect(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, local_candidate: Candidate) => void)): number
    connect_after(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, local_candidate: Candidate) => void)): number
    emit(sigName: "new-local-candidate", local_candidate: Candidate): void
    /**
     * This signal is emitted when the ICE state (or equivalent) of the component
     * changes
     * @param component the id of the component which state has changed
     * @param state the new state of the component
     */
    connect(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    emit(sigName: "state-changed", component: number, state: StreamState): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: StreamTransmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: StreamTransmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: StreamTransmitter, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: StreamTransmitter, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: StreamTransmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    connect(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associate-on-source", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associate-on-source", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preferred-local-candidates", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-local-candidates", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamTransmitter_ConstructProps)
    _init (config?: StreamTransmitter_ConstructProps): void
    static $gtype: GObject.Type
}
interface Transmitter_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of Farstream-0.1.Farstream.Transmitter */
    /**
     * The number of components to create
     */
    components?: number
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos?: number
}
class Transmitter {
    /* Properties of Farstream-0.1.Farstream.Transmitter */
    /**
     * The number of components to create
     */
    readonly components: number
    /**
     * A network source #GstElement to be used by the #FsSession
     * These element's sink must have async=FALSE
     * This element MUST provide a pad named "sink\%d" per component.
     * These pads number must start at 1 (the \%d corresponds to the component
     * number).
     * These pads MUST be static pads.
     */
    readonly gst_sink: Gst.Element
    /**
     * A network source #GstElement to be used by the #FsSession
     * This element MUST provide a source pad named "src%d" per component.
     * These pads number must start at 1 (the %d corresponds to the component
     * number).
     * These pads MUST be static pads.
     */
    readonly gst_src: Gst.Element
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos: number
    /* Fields of Gst-0.10.Gst.Object */
    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string
    name_prefix: string
    parent: Gst.Object
    flags: number
    _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.1.Farstream.Transmitter */
    /**
     * This function emit the "error" signal on a #FsTransmitter, it should
     * only be called by subclasses.
     * @param error_no The number of the error
     * @param error_msg Error message to be displayed to user
     */
    emit_error(error_no: number, error_msg: string): void
    /**
     * Get the filter to add on the send pipeline if sending is disabled.
     * 
     * Only for use by subclasses.
     * @param component The component to get the filter for
     */
    get_recvonly_filter(component: number): Gst.Element
    /**
     * This function returns the GObject type for the stream transmitter.
     * This is meant for bindings that need to introspect the type of arguments
     * that can be passed to the _new_stream_transmitter.
     */
    get_stream_transmitter_type(): GObject.Type
    /**
     * This function will create a new #FsStreamTransmitter element for a
     * specific participant for this #FsTransmitter
     * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
     * @param n_parameters The number of parameters to pass to the newly created #FsStreamTransmitter
     * @param parameters an array of #GParameter
     */
    new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Farstream-0.1.Farstream.Transmitter */
    /**
     * This function returns the GObject type for the stream transmitter.
     * This is meant for bindings that need to introspect the type of arguments
     * that can be passed to the _new_stream_transmitter.
     */
    vfunc_get_stream_transmitter_type(): GObject.Type
    /**
     * This function will create a new #FsStreamTransmitter element for a
     * specific participant for this #FsTransmitter
     * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
     * @param n_parameters The number of parameters to pass to the newly created #FsStreamTransmitter
     * @param parameters an array of #GParameter
     */
    vfunc_new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
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
    /* Signals of Farstream-0.1.Farstream.Transmitter */
    /**
     * This signal is emitted in any error condition
     * @param errorno The number of the error
     * @param error_msg Error message to be displayed to user
     */
    connect(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    /**
     * This signal is emitted when the transmitter wants to get a filter for
     * to use if sending is disabled. If you want to drop all buffers, just
     * don't listen to the signal.
     * 
     * This element should have a "sending" property that can be changed with the
     * sending state of the stream. It should default to %TRUE.
     * @param component The component that the filter will be used for
     */
    connect(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => Gst.Element)): number
    connect_after(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => Gst.Element)): number
    emit(sigName: "get-recvonly-filter", component: number): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Transmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Transmitter, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Transmitter, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Transmitter, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Transmitter, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
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
    connect(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::components", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::components", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transmitter_ConstructProps)
    _init (config?: Transmitter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: string, components: number, tos: number): Transmitter
    /**
     * Get the list of all available transmitters
     */
    static list_available(): string[]
    static $gtype: GObject.Type
}
class Candidate {
    /* Fields of Farstream-0.1.Farstream.Candidate */
    foundation: string
    component_id: number
    ip: string
    port: number
    base_ip: string
    base_port: number
    proto: NetworkProtocol
    priority: number
    type: CandidateType
    username: string
    password: string
    ttl: number
    /* Methods of Farstream-0.1.Farstream.Candidate */
    /**
     * Copies a #FsCandidate and its contents.
     */
    copy(): Candidate
    destroy(): void
    static name: string
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
    constructor(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number)
    /* Static methods and pseudo-constructors */
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
}
class Codec {
    /* Fields of Farstream-0.1.Farstream.Codec */
    id: number
    encoding_name: string
    media_type: MediaType
    clock_rate: number
    channels: number
    minimum_reporting_interval: number
    optional_params: CodecParameter[]
    feedback_params: FeedbackParameter[]
    /* Methods of Farstream-0.1.Farstream.Codec */
    /**
     * This function adds an new feedback parameter to a #FsCodec
     * @param type The type of the feedback parameter
     * @param subtype The subtype of the feedback parameter
     * @param extra_params The extra_params of the feeback parameter
     */
    add_feedback_parameter(type: string, subtype: string, extra_params: string): void
    /**
     * This function adds an new optional parameter to a #FsCodec
     * @param name The name of the optional parameter
     * @param value The extra_params of the optional parameter
     */
    add_optional_parameter(name: string, value: string): void
    /**
     * Compare two codecs, it will declare two codecs to be identical even
     * if their optional parameters are in a different order. %NULL encoding names
     * are ignored.
     * @param codec2 Second codec
     */
    are_equal(codec2: Codec): boolean
    /**
     * Copies a #FsCodec structure.
     */
    copy(): Codec
    destroy(): void
    /**
     * Finds the #FsFeedbackParameter in the #FsCodec that has the requested
     * subtype, type and extra_params. One of which must be non-NULL;
     * @param type The subtype of the parameter to search for or %NULL for any type
     * @param subtype The subtype of the parameter to search for or %NULL for any subtype
     * @param extra_params The extra_params of the parameter to search for or %NULL for any extra_params
     */
    get_feedback_parameter(type: string, subtype: string, extra_params: string): FeedbackParameter
    /**
     * Finds the #FsCodecParameter in the #FsCodec that has the requested name
     * and, if not %NULL, the requested value
     * @param name The name of the parameter to search for
     * @param value The value of the parameter to search for or %NULL for any value
     */
    get_optional_parameter(name: string, value: string): CodecParameter
    /**
     * Removes an optional parameter from a codec.
     * 
     * NULL param will do nothing.
     * @param item a pointer to the #GList element to remove that contains a #FsFeedbackParameter
     */
    remove_feedback_parameter(item: FeedbackParameter[]): void
    /**
     * Removes an optional parameter from a codec.
     * 
     * NULL param will do nothing.
     * @param param a pointer to the #FsCodecParameter to remove
     */
    remove_optional_parameter(param: CodecParameter): void
    /**
     * Returns a newly-allocated string representing the codec
     */
    to_string(): string
    static name: string
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
    constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number)
    /* Static methods and pseudo-constructors */
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
}
class CodecParameter {
    /* Fields of Farstream-0.1.Farstream.CodecParameter */
    name: string
    value: string
    /* Methods of Farstream-0.1.Farstream.CodecParameter */
    copy(): CodecParameter
    free(): void
    static name: string
}
abstract class ConferenceClass {
    /* Fields of Farstream-0.1.Farstream.ConferenceClass */
    parent: Gst.BinClass
    new_session: (conference: Conference, media_type: MediaType) => Session
    new_participant: (conference: Conference) => Participant
    static name: string
}
abstract class ElementAddedNotifierClass {
    /* Fields of Farstream-0.1.Farstream.ElementAddedNotifierClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ElementAddedNotifierPrivate {
    static name: string
}
class FeedbackParameter {
    /* Fields of Farstream-0.1.Farstream.FeedbackParameter */
    type: string
    subtype: string
    extra_params: string
    /* Methods of Farstream-0.1.Farstream.FeedbackParameter */
    copy(): FeedbackParameter
    free(): void
    static name: string
}
abstract class ParticipantClass {
    /* Fields of Farstream-0.1.Farstream.ParticipantClass */
    parent_class: Gst.ObjectClass
    static name: string
}
class ParticipantPrivate {
    static name: string
}
abstract class PluginClass {
    /* Fields of Farstream-0.1.Farstream.PluginClass */
    parent_class: GObject.TypeModuleClass
    static name: string
}
class PluginPrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of Farstream-0.1.Farstream.SessionClass */
    parent_class: Gst.ObjectClass
    new_stream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    start_telephony_event: (session: Session, event: number, volume: number) => boolean
    stop_telephony_event: (session: Session) => boolean
    set_send_codec: (session: Session, send_codec: Codec) => boolean
    set_codec_preferences: (session: Session, codec_preferences: Codec[]) => boolean
    list_transmitters: (session: Session) => string[]
    get_stream_transmitter_type: (session: Session, transmitter: string) => GObject.Type
    codecs_need_resend: (session: Session, old_codecs: Codec[], new_codecs: Codec[]) => Codec[]
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class StreamClass {
    /* Fields of Farstream-0.1.Farstream.StreamClass */
    parent_class: Gst.ObjectClass
    add_remote_candidates: (stream: Stream, candidates: Candidate[]) => boolean
    force_remote_candidates: (stream: Stream, remote_candidates: Candidate[]) => boolean
    set_remote_codecs: (stream: Stream, remote_codecs: Codec[]) => boolean
    add_id: (stream: Stream, id: number) => void
    set_transmitter: (stream: Stream, transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number) => boolean
    static name: string
}
class StreamPrivate {
    static name: string
}
abstract class StreamTransmitterClass {
    /* Fields of Farstream-0.1.Farstream.StreamTransmitterClass */
    parent_class: Gst.ObjectClass
    add_remote_candidates: (streamtransmitter: StreamTransmitter, candidates: Candidate[]) => boolean
    force_remote_candidates: (streamtransmitter: StreamTransmitter, remote_candidates: Candidate[]) => boolean
    gather_local_candidates: (streamtransmitter: StreamTransmitter) => boolean
    stop: (streamtransmitter: StreamTransmitter) => void
    static name: string
}
class StreamTransmitterPrivate {
    static name: string
}
abstract class TransmitterClass {
    /* Fields of Farstream-0.1.Farstream.TransmitterClass */
    parent_class: Gst.ObjectClass
    new_stream_transmitter: (transmitter: Transmitter, participant: Participant, n_parameters: number, parameters: GObject.Parameter) => StreamTransmitter
    get_stream_transmitter_type: (transmitter: Transmitter) => GObject.Type
    static name: string
}
class TransmitterPrivate {
    static name: string
}
class _RtpHeaderExtension {
    /* Fields of Farstream-0.1.Farstream._RtpHeaderExtension */
    id: number
    direction: StreamDirection
    uri: string
    static name: string
}
}
export default Farstream;