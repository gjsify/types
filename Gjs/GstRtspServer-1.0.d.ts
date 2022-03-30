/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtspServer-1.0
 */

import type * as Gjs from './Gjs';
import type GstRtsp from './GstRtsp-1.0';
import type GstSdp from './GstSdp-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstBase from './GstBase-1.0';
import type Gio from './Gio-2.0';
import type GstNet from './GstNet-1.0';

export namespace GstRtspServer {

/**
 * Result codes from RTSP address pool functions.
 */
enum RTSPAddressPoolResult {
    /**
     * no error
     */
    OK,
    /**
     * invalid arguments were provided to a function
     */
    EINVAL,
    /**
     * the addres has already been reserved
     */
    ERESERVED,
    /**
     * the address is not in the pool
     */
    ERANGE,
    /**
     * last error
     */
    ELAST,
}
/**
 * Possible return values for gst_rtsp_session_pool_filter().
 */
enum RTSPFilterResult {
    /**
     * Remove session
     */
    REMOVE,
    /**
     * Keep session in the pool
     */
    KEEP,
    /**
     * Ref session in the result list
     */
    REF,
}
/**
 * The state of the media pipeline.
 */
enum RTSPMediaStatus {
    /**
     * media pipeline not prerolled
     */
    UNPREPARED,
    /**
     * media pipeline is busy doing a clean
     *                                     shutdown.
     */
    UNPREPARING,
    /**
     * media pipeline is prerolling
     */
    PREPARING,
    /**
     * media pipeline is prerolled
     */
    PREPARED,
    /**
     * media is suspended
     */
    SUSPENDED,
    /**
     * media pipeline is in error
     */
    ERROR,
}
/**
 * Whether the clock and possibly RTP/clock offset should be published according to RFC7273.
 */
enum RTSPPublishClockMode {
    /**
     * Publish nothing
     */
    NONE,
    /**
     * Publish the clock but not the offset
     */
    CLOCK,
    /**
     * Publish the clock and offset
     */
    CLOCK_AND_OFFSET,
}
/**
 * The suspend mode of the media pipeline. A media pipeline is suspended right
 * after creating the SDP and when the client performs a PAUSED request.
 */
enum RTSPSuspendMode {
    /**
     * Media is not suspended
     */
    NONE,
    /**
     * Media is PAUSED in suspend
     */
    PAUSE,
    /**
     * The media is set to NULL when suspended
     */
    RESET,
}
/**
 * Different thread types
 */
enum RTSPThreadType {
    /**
     * a thread to handle the client communication
     */
    CLIENT,
    /**
     * a thread to handle media
     */
    MEDIA,
}
/**
 * Flags used to control allocation of addresses
 */
enum RTSPAddressFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * an IPv4 address
     */
    IPV4,
    /**
     * and IPv6 address
     */
    IPV6,
    /**
     * address with an even port
     */
    EVEN_PORT,
    /**
     * a multicast address
     */
    MULTICAST,
    /**
     * a unicast address
     */
    UNICAST,
}
/**
 * The supported modes of the media.
 */
enum RTSPTransportMode {
    /**
     * Transport supports PLAY mode
     */
    PLAY,
    /**
     * Transport supports RECORD mode
     */
    RECORD,
}
/**
 * Used with gst_rtsp_address_pool_add_range() to bind to all
 * IPv4 addresses
 */
const RTSP_ADDRESS_POOL_ANY_IPV4: string
/**
 * Used with gst_rtsp_address_pool_add_range() to bind to all
 * IPv6 addresses
 */
const RTSP_ADDRESS_POOL_ANY_IPV6: string
/**
 * Check a new connection
 */
const RTSP_AUTH_CHECK_CONNECT: string
/**
 * Check if access is allowed to a factory.
 * When access is not allowed an 404 Not Found is sent in the response.
 */
const RTSP_AUTH_CHECK_MEDIA_FACTORY_ACCESS: string
/**
 * Check if media can be constructed from a media factory
 * A response should be sent on error.
 */
const RTSP_AUTH_CHECK_MEDIA_FACTORY_CONSTRUCT: string
/**
 * Check if the client can specify TTL, destination and
 * port pair in multicast. No response is sent when the check returns
 * %FALSE.
 */
const RTSP_AUTH_CHECK_TRANSPORT_CLIENT_SETTINGS: string
/**
 * Check the URL and methods
 */
const RTSP_AUTH_CHECK_URL: string
const RTSP_ONVIF_BACKCHANNEL_REQUIREMENT: string
const RTSP_ONVIF_REPLAY_REQUIREMENT: string
/**
 * G_TYPE_BOOLEAN, %TRUE if the media can be accessed, %FALSE will
 * return a 404 Not Found error when trying to access the media.
 */
const RTSP_PERM_MEDIA_FACTORY_ACCESS: string
/**
 * G_TYPE_BOOLEAN, %TRUE if the media can be constructed, %FALSE will
 * return a 404 Not Found error when trying to access the media.
 */
const RTSP_PERM_MEDIA_FACTORY_CONSTRUCT: string
/**
 * G_TYPE_STRING, the role to use when dealing with media factories
 * 
 * The default #GstRTSPAuth object uses this string in the token to find the
 * role of the media factory. It will then retrieve the #GstRTSPPermissions of
 * the media factory and retrieve the role with the same name.
 */
const RTSP_TOKEN_MEDIA_FACTORY_ROLE: string
/**
 * G_TYPE_BOOLEAN, %TRUE if the client can specify TTL, destination and
 *     port pair in multicast.
 */
const RTSP_TOKEN_TRANSPORT_CLIENT_SETTINGS: string
function rtsp_context_get_type(): GObject.Type
function rtsp_params_get(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
function rtsp_params_set(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
function rtsp_sdp_from_media(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean
function rtsp_sdp_from_stream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean
function rtsp_sdp_make_media(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream, caps: Gst.Caps, profile: GstRtsp.RTSPProfile): boolean
/**
 * This callback is called when `client` wants to send `message`. When `close` is
 * %TRUE, the connection should be closed when the message has been sent.
 */
interface RTSPClientSendFunc {
    (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean): boolean
}
/**
 * This callback is called when `client` wants to send `messages`. When `close` is
 * %TRUE, the connection should be closed when the message has been sent.
 */
interface RTSPClientSendMessagesFunc {
    (client: RTSPClient, messages: GstRtsp.RTSPMessage, n_messages: number, close: boolean): boolean
}
/**
 * This function will be called by the gst_rtsp_client_session_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `sess` will be removed
 * from `client`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `sess` untouched in
 * `client`.
 * 
 * A value of #GST_RTSP_FILTER_REF will add `sess` to the result #GList of
 * gst_rtsp_client_session_filter().
 */
interface RTSPClientSessionFilterFunc {
    (client: RTSPClient, sess: RTSPSession): RTSPFilterResult
}
/**
 * Function registered with gst_rtsp_stream_transport_set_keepalive() and called
 * when the stream is active.
 */
interface RTSPKeepAliveFunc {
    (): void
}
/**
 * Function registered with gst_rtsp_stream_transport_set_message_sent()
 * and called when a message has been sent on the transport.
 */
interface RTSPMessageSentFunc {
    (): void
}
/**
 * Function registered with gst_rtsp_stream_transport_set_message_sent_full()
 * and called when a message has been sent on the transport.
 */
interface RTSPMessageSentFuncFull {
    (trans: RTSPStreamTransport): void
}
/**
 * Function registered with gst_rtsp_stream_transport_set_callbacks() and
 * called when `buffer` must be sent on `channel`.
 */
interface RTSPSendFunc {
    (buffer: Gst.Buffer, channel: number): boolean
}
/**
 * Function registered with gst_rtsp_stream_transport_set_callbacks() and
 * called when `buffer_list` must be sent on `channel`.
 */
interface RTSPSendListFunc {
    (buffer_list: Gst.BufferList, channel: number): boolean
}
/**
 * This function will be called by the gst_rtsp_server_client_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `client` will be removed
 * from `server`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `client` untouched in
 * `server`.
 * 
 * A value of #GST_RTSP_FILTER_REF will add `client` to the result #GList of
 * gst_rtsp_server_client_filter().
 */
interface RTSPServerClientFilterFunc {
    (server: RTSPServer, client: RTSPClient): RTSPFilterResult
}
/**
 * This function will be called by the gst_rtsp_session_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `media` will be removed
 * from `sess`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `media` untouched in
 * `sess`.
 * 
 * A value of GST_RTSP_FILTER_REF will add `media` to the result #GList of
 * gst_rtsp_session_filter().
 */
interface RTSPSessionFilterFunc {
    (sess: RTSPSession, media: RTSPSessionMedia): RTSPFilterResult
}
/**
 * This function will be called by the gst_rtsp_session_pool_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `session` will be removed
 * from `pool`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `session` untouched in
 * `pool`.
 * 
 * A value of GST_RTSP_FILTER_REF will add `session` to the result #GList of
 * gst_rtsp_session_pool_filter().
 */
interface RTSPSessionPoolFilterFunc {
    (pool: RTSPSessionPool, session: RTSPSession): RTSPFilterResult
}
/**
 * The function that will be called from the GSource watch on the session pool.
 * 
 * The function will be called when the pool must be cleaned up because one or
 * more sessions timed out.
 */
interface RTSPSessionPoolFunc {
    (pool: RTSPSessionPool): boolean
}
/**
 * This function will be called by the gst_rtsp_stream_transport_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `trans` will be removed
 * from `stream`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `trans` untouched in
 * `stream`.
 * 
 * A value of #GST_RTSP_FILTER_REF will add `trans` to the result #GList of
 * gst_rtsp_stream_transport_filter().
 */
interface RTSPStreamTransportFilterFunc {
    (stream: RTSPStream, trans: RTSPStreamTransport): RTSPFilterResult
}
interface RTSPAddressPool_ConstructProps extends GObject.Object_ConstructProps {
}
class RTSPAddressPool {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool */
    /**
     * Take an address and ports from `pool`. `flags` can be used to control the
     * allocation. `n_ports` consecutive ports will be allocated of which the first
     * one can be found in `port`.
     * @param flags flags
     * @param n_ports the amount of ports
     */
    acquire_address(flags: RTSPAddressFlags, n_ports: number): RTSPAddress | null
    /**
     * Adds the addresses from `min_addess` to `max_address` (inclusive)
     * to `pool`. The valid port range for the addresses will be from `min_port` to
     * `max_port` inclusive.
     * 
     * When `ttl` is 0, `min_address` and `max_address` should be unicast addresses.
     * `min_address` and `max_address` can be set to
     * #GST_RTSP_ADDRESS_POOL_ANY_IPV4 or #GST_RTSP_ADDRESS_POOL_ANY_IPV6 to bind
     * to all available IPv4 or IPv6 addresses.
     * 
     * When `ttl` > 0, `min_address` and `max_address` should be multicast addresses.
     * @param min_address a minimum address to add
     * @param max_address a maximum address to add
     * @param min_port the minimum port
     * @param max_port the maximum port
     * @param ttl a TTL or 0 for unicast addresses
     */
    add_range(min_address: string, max_address: string, min_port: number, max_port: number, ttl: number): boolean
    /**
     * Clear all addresses in `pool`. There should be no outstanding
     * allocations.
     */
    clear(): void
    /**
     * Dump the free and allocated addresses to stdout.
     */
    dump(): void
    /**
     * Used to know if the pool includes any unicast addresses.
     */
    has_unicast_addresses(): boolean
    /**
     * Take a specific address and ports from `pool`. `n_ports` consecutive
     * ports will be allocated of which the first one can be found in
     * `port`.
     * 
     * If `ttl` is 0, `address` should be a unicast address. If `ttl` > 0, `address`
     * should be a valid multicast address.
     * @param ip_address The IP address to reserve
     * @param port The first port to reserve
     * @param n_ports The number of ports
     * @param ttl The requested ttl
     */
    reserve_address(ip_address: string, port: number, n_ports: number, ttl: number): [ /* returnType */ RTSPAddressPoolResult, /* address */ RTSPAddress ]
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
    connect(sigName: "notify", callback: (($obj: RTSPAddressPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPAddressPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPAddressPool_ConstructProps)
    _init (config?: RTSPAddressPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPAddressPool
    static $gtype: GObject.Type
}
interface RTSPAuth_ConstructProps extends GObject.Object_ConstructProps {
}
class RTSPAuth {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPAuth */
    /**
     * Add a basic token for the default authentication algorithm that
     * enables the client with privileges listed in `token`.
     * @param basic the basic token
     * @param token authorisation token
     */
    add_basic(basic: string, token: RTSPToken): void
    /**
     * Add a digest `user` and `pass` for the default authentication algorithm that
     * enables the client with privileges listed in `token`.
     * @param user the digest user name
     * @param pass the digest password
     * @param token authorisation token
     */
    add_digest(user: string, pass: string, token: RTSPToken): void
    /**
     * Get the default token for `auth`. This token will be used for unauthenticated
     * users.
     */
    get_default_token(): RTSPToken | null
    get_realm(): string
    /**
     * Gets the supported authentication methods of `auth`.
     */
    get_supported_methods(): GstRtsp.RTSPAuthMethod
    /**
     * Get the #GTlsAuthenticationMode.
     */
    get_tls_authentication_mode(): Gio.TlsAuthenticationMode
    /**
     * Get the #GTlsCertificate used for negotiating TLS `auth`.
     */
    get_tls_certificate(): Gio.TlsCertificate | null
    /**
     * Get the #GTlsDatabase used for verifying client certificate.
     */
    get_tls_database(): Gio.TlsDatabase | null
    /**
     * Parse the contents of the file at `path` and enable the privileges
     * listed in `token` for the users it describes.
     * 
     * The format of the file is expected to match the format described by
     * <https://en.wikipedia.org/wiki/Digest_access_authentication#The_.htdigest_file>,
     * as output by the `htdigest` command.
     * @param path Path to the htdigest file
     * @param token authorisation token
     */
    parse_htdigest(path: string, token: RTSPToken): boolean
    /**
     * Removes `basic` authentication token.
     * @param basic the basic token
     */
    remove_basic(basic: string): void
    /**
     * Removes a digest user.
     * @param user the digest user name
     */
    remove_digest(user: string): void
    /**
     * Set the default #GstRTSPToken to `token` in `auth`. The default token will
     * be used for unauthenticated users.
     * @param token a #GstRTSPToken
     */
    set_default_token(token?: RTSPToken | null): void
    /**
     * Set the `realm` of `auth`
     * @param realm 
     */
    set_realm(realm: string): void
    /**
     * Sets the supported authentication `methods` for `auth`.
     * @param methods supported methods
     */
    set_supported_methods(methods: GstRtsp.RTSPAuthMethod): void
    /**
     * The #GTlsAuthenticationMode to set on the underlying GTlsServerConnection.
     * When set to another value than %G_TLS_AUTHENTICATION_NONE,
     * #GstRTSPAuth::accept-certificate signal will be emitted and must be handled.
     * @param mode a #GTlsAuthenticationMode
     */
    set_tls_authentication_mode(mode: Gio.TlsAuthenticationMode): void
    /**
     * Set the TLS certificate for the auth. Client connections will only
     * be accepted when TLS is negotiated.
     * @param cert a #GTlsCertificate
     */
    set_tls_certificate(cert?: Gio.TlsCertificate | null): void
    /**
     * Sets the certificate database that is used to verify peer certificates.
     * If set to %NULL (the default), then peer certificate validation will always
     * set the %G_TLS_CERTIFICATE_UNKNOWN_CA error.
     * @param database a #GTlsDatabase
     */
    set_tls_database(database?: Gio.TlsDatabase | null): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPAuth */
    vfunc_accept_certificate(connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_authenticate(ctx: RTSPContext): boolean
    vfunc_check(ctx: RTSPContext, check: string): boolean
    vfunc_generate_authenticate_header(ctx: RTSPContext): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPAuth */
    /**
     * Emitted during the TLS handshake after the client certificate has
     * been received. See also gst_rtsp_auth_set_tls_authentication_mode().
     * @param connection a #GTlsConnection
     * @param peer_cert the peer's #GTlsCertificate
     * @param errors the problems with `peer_cert`.
     */
    connect(sigName: "accept-certificate", callback: (($obj: RTSPAuth, connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: RTSPAuth, connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
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
    connect(sigName: "notify", callback: (($obj: RTSPAuth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPAuth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPAuth_ConstructProps)
    _init (config?: RTSPAuth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPAuth
    /**
     * Check if `check` is allowed in the current context.
     * @param check the item to check
     */
    static check(check: string): boolean
    /**
     * Construct a Basic authorisation token from `user` and `pass`.
     * @param user a userid
     * @param pass a password
     */
    static make_basic(user: string, pass: string): string
    static $gtype: GObject.Type
}
interface RTSPClient_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    drop_backlog?: boolean
    mount_points?: RTSPMountPoints
    post_session_timeout?: number
    session_pool?: RTSPSessionPool
}
class RTSPClient {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    drop_backlog: boolean
    mount_points: RTSPMountPoints
    post_session_timeout: number
    session_pool: RTSPSessionPool
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    /**
     * Attaches `client` to `context`. When the mainloop for `context` is run, the
     * client will be dispatched. When `context` is %NULL, the default context will be
     * used).
     * 
     * This function should be called when the client properties and urls are fully
     * configured and the client is ready to start.
     * @param context a #GMainContext
     */
    attach(context?: GLib.MainContext | null): number
    /**
     * Close the connection of `client` and remove all media it was managing.
     */
    close(): void
    /**
     * Get the #GstRTSPAuth used as the authentication manager of `client`.
     */
    get_auth(): RTSPAuth | null
    /**
     * Get the #GstRTSPConnection of `client`.
     */
    get_connection(): GstRtsp.RTSPConnection | null
    /**
     * Get the Content-Length limit of `client`.
     */
    get_content_length_limit(): number
    /**
     * Get the #GstRTSPMountPoints object that `client` uses to manage its sessions.
     */
    get_mount_points(): RTSPMountPoints | null
    /**
     * Get the #GstRTSPSessionPool object that `client` uses to manage its sessions.
     */
    get_session_pool(): RTSPSessionPool | null
    /**
     * This is useful when providing a send function through
     * gst_rtsp_client_set_send_func() when doing RTSP over TCP:
     * the send function must call gst_rtsp_stream_transport_message_sent ()
     * on the appropriate transport when data has been received for streaming
     * to continue.
     * @param channel 
     */
    get_stream_transport(channel: number): RTSPStreamTransport | null
    /**
     * Get the #GstRTSPThreadPool used as the thread pool of `client`.
     */
    get_thread_pool(): RTSPThreadPool | null
    /**
     * Let the client handle `message`.
     * @param message an #GstRTSPMessage
     */
    handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    /**
     * Send a message message to the remote end. `message` must be a
     * #GST_RTSP_MESSAGE_REQUEST or a #GST_RTSP_MESSAGE_RESPONSE.
     * @param session a #GstRTSPSession to send   the message to or %NULL
     * @param message The #GstRTSPMessage to send
     */
    send_message(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    /**
     * Call `func` for each session managed by `client`. The result value of `func`
     * determines what happens to the session. `func` will be called with `client`
     * locked so no further actions on `client` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the session will be removed from
     * `client`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the session will remain in `client`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the session will remain in `client` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each session.
     * @param func a callback
     */
    session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[]
    /**
     * configure `auth` to be used as the authentication manager of `client`.
     * @param auth a #GstRTSPAuth
     */
    set_auth(auth?: RTSPAuth | null): void
    /**
     * Set the #GstRTSPConnection of `client`. This function takes ownership of
     * `conn`.
     * @param conn a #GstRTSPConnection
     */
    set_connection(conn: GstRtsp.RTSPConnection): boolean
    /**
     * Configure `client` to use the specified Content-Length limit.
     * 
     * Define an appropriate request size limit and reject requests exceeding the
     * limit with response status 413 Request Entity Too Large
     * @param limit Content-Length limit
     */
    set_content_length_limit(limit: number): void
    /**
     * Set `mounts` as the mount points for `client` which it will use to map urls
     * to media streams. These mount points are usually inherited from the server that
     * created the client but can be overriden later.
     * @param mounts a #GstRTSPMountPoints
     */
    set_mount_points(mounts?: RTSPMountPoints | null): void
    /**
     * Set `func` as the callback that will be called when a new message needs to be
     * sent to the client. `user_data` is passed to `func` and `notify` is called when
     * `user_data` is no longer in use.
     * 
     * By default, the client will send the messages on the #GstRTSPConnection that
     * was configured with gst_rtsp_client_attach() was called.
     * 
     * It is only allowed to set either a `send_func` or a `send_messages_func`
     * but not both at the same time.
     * @param func a #GstRTSPClientSendFunc
     */
    set_send_func(func: RTSPClientSendFunc): void
    /**
     * Set `func` as the callback that will be called when new messages needs to be
     * sent to the client. `user_data` is passed to `func` and `notify` is called when
     * `user_data` is no longer in use.
     * 
     * By default, the client will send the messages on the #GstRTSPConnection that
     * was configured with gst_rtsp_client_attach() was called.
     * 
     * It is only allowed to set either a `send_func` or a `send_messages_func`
     * but not both at the same time.
     * @param func a #GstRTSPClientSendMessagesFunc
     */
    set_send_messages_func(func: RTSPClientSendMessagesFunc): void
    /**
     * Set `pool` as the sessionpool for `client` which it will use to find
     * or allocate sessions. the sessionpool is usually inherited from the server
     * that created the client but can be overridden later.
     * @param pool a #GstRTSPSessionPool
     */
    set_session_pool(pool?: RTSPSessionPool | null): void
    /**
     * configure `pool` to be used as the thread pool of `client`.
     * @param pool a #GstRTSPThreadPool
     */
    set_thread_pool(pool?: RTSPThreadPool | null): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    vfunc_adjust_play_mode(context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime, enable_rate_control: boolean): GstRtsp.RTSPStatusCode
    vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_announce_request(ctx: RTSPContext): void
    vfunc_check_requirements(ctx: RTSPContext, arr: string): string
    vfunc_closed(): void
    vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean
    vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean
    vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage
    vfunc_describe_request(ctx: RTSPContext): void
    vfunc_get_parameter_request(ctx: RTSPContext): void
    vfunc_handle_response(ctx: RTSPContext): void
    vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean
    vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string
    vfunc_new_session(session: RTSPSession): void
    vfunc_options_request(ctx: RTSPContext): void
    vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_pause_request(ctx: RTSPContext): void
    vfunc_play_request(ctx: RTSPContext): void
    vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_record_request(ctx: RTSPContext): void
    vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void
    vfunc_set_parameter_request(ctx: RTSPContext): void
    vfunc_setup_request(ctx: RTSPContext): void
    vfunc_teardown_request(ctx: RTSPContext): void
    vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    connect(sigName: "announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "announce-request", ctx: RTSPContext): void
    connect(sigName: "check-requirements", callback: (($obj: RTSPClient, ctx: RTSPContext, arr: string[]) => string)): number
    connect_after(sigName: "check-requirements", callback: (($obj: RTSPClient, ctx: RTSPContext, arr: string[]) => string)): number
    emit(sigName: "check-requirements", ctx: RTSPContext, arr: string[]): void
    connect(sigName: "closed", callback: (($obj: RTSPClient) => void)): number
    connect_after(sigName: "closed", callback: (($obj: RTSPClient) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "describe-request", ctx: RTSPContext): void
    connect(sigName: "get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "handle-response", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "handle-response", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "handle-response", ctx: RTSPContext): void
    connect(sigName: "new-session", callback: (($obj: RTSPClient, object: RTSPSession) => void)): number
    connect_after(sigName: "new-session", callback: (($obj: RTSPClient, object: RTSPSession) => void)): number
    emit(sigName: "new-session", object: RTSPSession): void
    connect(sigName: "options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "options-request", ctx: RTSPContext): void
    connect(sigName: "pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "pause-request", ctx: RTSPContext): void
    connect(sigName: "play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "play-request", ctx: RTSPContext): void
    connect(sigName: "pre-announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-announce-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-announce-request", ctx: RTSPContext): void
    connect(sigName: "pre-describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-describe-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-describe-request", ctx: RTSPContext): void
    connect(sigName: "pre-get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-get-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-options-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-options-request", ctx: RTSPContext): void
    connect(sigName: "pre-pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-pause-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-pause-request", ctx: RTSPContext): void
    connect(sigName: "pre-play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-play-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-play-request", ctx: RTSPContext): void
    connect(sigName: "pre-record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-record-request", ctx: RTSPContext): void
    connect(sigName: "pre-set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-setup-request", ctx: RTSPContext): void
    connect(sigName: "pre-teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-teardown-request", ctx: RTSPContext): void
    connect(sigName: "record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "record-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "record-request", ctx: RTSPContext): void
    connect(sigName: "send-message", callback: (($obj: RTSPClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    connect_after(sigName: "send-message", callback: (($obj: RTSPClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    emit(sigName: "send-message", session: RTSPSession, message: GstRtsp.RTSPMessage): void
    connect(sigName: "set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "set-parameter-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "setup-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "setup-request", ctx: RTSPContext): void
    connect(sigName: "teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "teardown-request", callback: (($obj: RTSPClient, ctx: RTSPContext) => void)): number
    emit(sigName: "teardown-request", ctx: RTSPContext): void
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
    connect(sigName: "notify", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drop-backlog", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop-backlog", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::post-session-timeout", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::post-session-timeout", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPClient_ConstructProps)
    _init (config?: RTSPClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPClient
    static $gtype: GObject.Type
}
interface RTSPMedia_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    bind_mcast_address?: boolean
    buffer_size?: number
    clock?: Gst.Clock
    dscp_qos?: number
    element?: Gst.Element
    eos_shutdown?: boolean
    latency?: number
    max_mcast_ttl?: number
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
    reusable?: boolean
    shared?: boolean
    stop_on_disconnect?: boolean
    suspend_mode?: RTSPSuspendMode
    time_provider?: boolean
    transport_mode?: RTSPTransportMode
}
class RTSPMedia {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    readonly element: Gst.Element
    eos_shutdown: boolean
    latency: number
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    time_provider: boolean
    transport_mode: RTSPTransportMode
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    /**
     * Find all payloader elements, they should be named pay\%d in the
     * element of `media,` and create #GstRTSPStreams for them.
     * 
     * Collect all dynamic elements, named dynpay\%d, and add them to
     * the list of dynamic elements.
     * 
     * Find all depayloader elements, they should be named depay\%d in the
     * element of `media,` and create #GstRTSPStreams for them.
     */
    collect_streams(): void
    /**
     * Add a receiver and sender parts to the pipeline based on the transport from
     * SETUP.
     * @param transports a list of #GstRTSPTransport
     */
    complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean
    /**
     * Create a new stream in `media` that provides RTP data on `pad`.
     * `pad` should be a pad of an element inside `media->`element.
     * @param payloader a #GstElement
     * @param pad a #GstPad
     */
    create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    /**
     * Find a stream in `media` with `control` as the control uri.
     * @param control the control of the stream
     */
    find_stream(control: string): RTSPStream | null
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `media`.
     */
    get_address_pool(): RTSPAddressPool | null
    /**
     * Get the base_time that is used by the pipeline in `media`.
     * 
     * `media` must be prepared before this method returns a valid base_time.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Get the kernel UDP buffer size.
     */
    get_buffer_size(): number
    /**
     * Get the clock that is used by the pipeline in `media`.
     * 
     * `media` must be prepared before this method returns a valid clock object.
     */
    get_clock(): Gst.Clock | null
    get_do_retransmission(): boolean
    /**
     * Get the configured DSCP QoS of attached media.
     */
    get_dscp_qos(): number
    /**
     * Get the element that was used when constructing `media`.
     */
    get_element(): Gst.Element
    /**
     * Get the latency that is used for receiving media.
     */
    get_latency(): number
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    get_max_mcast_ttl(): number
    /**
     * Get the multicast interface used for `media`.
     */
    get_multicast_iface(): string | null
    /**
     * Get the permissions object from `media`.
     */
    get_permissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `media`.
     */
    get_profiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `media`.
     */
    get_protocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    get_publish_clock_mode(): RTSPPublishClockMode
    /**
     * Get the current range as a string. `media` must be prepared with
     * gst_rtsp_media_prepare ().
     * @param play for the PLAY request
     * @param unit the unit to use for the string
     */
    get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    get_rate_control(): boolean
    /**
     * Get the rate and applied_rate of the current segment.
     */
    get_rates(): [ /* returnType */ boolean, /* rate */ number | null, /* applied_rate */ number | null ]
    /**
     * Get the amount of time to store retransmission data.
     */
    get_retransmission_time(): Gst.ClockTime
    /**
     * Get the status of `media`. When `media` is busy preparing, this function waits
     * until `media` is prepared or in error.
     */
    get_status(): RTSPMediaStatus
    /**
     * Retrieve the stream with index `idx` from `media`.
     * @param idx the stream index
     */
    get_stream(idx: number): RTSPStream | null
    /**
     * Get how `media` will be suspended.
     */
    get_suspend_mode(): RTSPSuspendMode
    /**
     * Get the #GstNetTimeProvider for the clock used by `media`. The time provider
     * will listen on `address` and `port` for client time requests.
     * @param address an address or %NULL
     * @param port a port or 0
     */
    get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider
    /**
     * Check if the pipeline for `media` can be used for PLAY or RECORD methods.
     */
    get_transport_mode(): RTSPTransportMode
    /**
     * Configure an SDP on `media` for receiving streams
     * @param sdp a #GstSDPMessage
     */
    handle_sdp(sdp: GstSdp.SDPMessage): boolean
    /**
     * See gst_rtsp_stream_is_complete(), gst_rtsp_stream_is_sender().
     */
    has_completed_sender(): boolean
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    is_bind_mcast_address(): boolean
    /**
     * Check if the pipeline for `media` will send an EOS down the pipeline before
     * unpreparing.
     */
    is_eos_shutdown(): boolean
    is_receive_only(): boolean
    /**
     * Check if the pipeline for `media` can be reused after an unprepare.
     */
    is_reusable(): boolean
    /**
     * Check if the pipeline for `media` can be shared between multiple clients.
     */
    is_shared(): boolean
    /**
     * Check if the pipeline for `media` will be stopped when a client disconnects
     * without sending TEARDOWN.
     */
    is_stop_on_disconnect(): boolean
    /**
     * Check if `media` can provide a #GstNetTimeProvider for its pipeline clock.
     * 
     * Use gst_rtsp_media_get_time_provider() to get the network clock.
     */
    is_time_provider(): boolean
    /**
     * Lock the entire media. This is needed by callers such as rtsp_client to
     * protect the media when it is shared by many clients.
     * The lock prevents that concurrent clients alters the shared media,
     * while one client already is working with it.
     * Typically the lock is taken in external RTSP API calls that uses shared media
     * such as DESCRIBE, SETUP, ANNOUNCE, TEARDOWN, PLAY, PAUSE.
     * 
     * As best practice take the lock as soon as the function get hold of a shared
     * media object. Release the lock right before the function returns.
     */
    lock(): void
    /**
     * Get the number of streams in this media.
     */
    n_streams(): number
    /**
     * Prepare `media` for streaming. This function will create the objects
     * to manage the streaming. A pipeline must have been set on `media` with
     * gst_rtsp_media_take_pipeline().
     * 
     * It will preroll the pipeline and collect vital information about the streams
     * such as the duration.
     * @param thread a #GstRTSPThread to run the   bus handler or %NULL
     */
    prepare(thread?: RTSPThread | null): boolean
    /**
     * Seek the pipeline of `media` to `range`. `media` must be prepared with
     * gst_rtsp_media_prepare().
     * @param range a #GstRTSPTimeRange
     */
    seek(range: GstRtsp.RTSPTimeRange): boolean
    /**
     * Seek the pipeline of `media` to `range` with the given `flags`.
     * `media` must be prepared with gst_rtsp_media_prepare().
     * @param range a #GstRTSPTimeRange
     * @param flags The minimal set of #GstSeekFlags to use
     */
    seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    /**
     * Seek the pipeline of `media` to `range` with the given `flags` and `rate,`
     * and `trickmode_interval`.
     * `media` must be prepared with gst_rtsp_media_prepare().
     * In order to perform the seek operation, the pipeline must contain all
     * needed transport parts (transport sinks).
     * @param range a #GstRTSPTimeRange
     * @param flags The minimal set of #GstSeekFlags to use
     * @param rate the rate to use in the seek
     * @param trickmode_interval The trickmode interval to use for KEY_UNITS trick mode
     */
    seek_trickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime): boolean
    /**
     * Check if the pipeline for `media` seek and up to what point in time,
     * it can seek.
     */
    seekable(): Gst.ClockTimeDiff
    /**
     * configure `pool` to be used as the address pool of `media`.
     * @param pool a #GstRTSPAddressPool
     */
    set_address_pool(pool?: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bind_mcast_addr the new value
     */
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    set_buffer_size(size: number): void
    /**
     * Configure the clock used for the media.
     * @param clock #GstClock to be used
     */
    set_clock(clock?: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent
     * @param do_retransmission 
     */
    set_do_retransmission(do_retransmission: boolean): void
    /**
     * Configure the dscp qos of attached streams to `dscp_qos`.
     * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
     */
    set_dscp_qos(dscp_qos: number): void
    /**
     * Set or unset if an EOS event will be sent to the pipeline for `media` before
     * it is unprepared.
     * @param eos_shutdown the new value
     */
    set_eos_shutdown(eos_shutdown: boolean): void
    /**
     * Configure the latency used for receiving media.
     * @param latency latency in milliseconds
     */
    set_latency(latency: number): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    set_max_mcast_ttl(ttl: number): boolean
    /**
     * configure `multicast_iface` to be used for `media`.
     * @param multicast_iface a multicast interface name
     */
    set_multicast_iface(multicast_iface?: string | null): void
    /**
     * Set `permissions` on `media`.
     * @param permissions a #GstRTSPPermissions
     */
    set_permissions(permissions?: RTSPPermissions | null): void
    /**
     * Set the state of the pipeline managed by `media` to `state`
     * @param state the target state of the pipeline
     */
    set_pipeline_state(state: Gst.State): void
    /**
     * Configure the allowed lower transport for `media`.
     * @param profiles the new flags
     */
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `media`.
     * @param protocols the new flags
     */
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    /**
     * Define whether `media` will follow the Rate-Control=no behaviour as specified
     * in the ONVIF replay spec.
     * @param enabled 
     */
    set_rate_control(enabled: boolean): void
    /**
     * Set the amount of time to store retransmission packets.
     * @param time the new value
     */
    set_retransmission_time(time: Gst.ClockTime): void
    /**
     * Set or unset if the pipeline for `media` can be reused after the pipeline has
     * been unprepared.
     * @param reusable the new value
     */
    set_reusable(reusable: boolean): void
    /**
     * Set or unset if the pipeline for `media` can be shared will multiple clients.
     * When `shared` is %TRUE, client requests for this media will share the media
     * pipeline.
     * @param shared the new value
     */
    set_shared(shared: boolean): void
    /**
     * Set the state of `media` to `state` and for the transports in `transports`.
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     * @param state the target state of the media
     * @param transports  a #GPtrArray of #GstRTSPStreamTransport pointers
     */
    set_state(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    /**
     * Set or unset if the pipeline for `media` should be stopped when a
     * client disconnects without sending TEARDOWN.
     * @param stop_on_disconnect the new value
     */
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    /**
     * Control how @ media will be suspended after the SDP has been generated and
     * after a PAUSE request has been performed.
     * 
     * Media must be unprepared when setting the suspend mode.
     * @param mode the new #GstRTSPSuspendMode
     */
    set_suspend_mode(mode: RTSPSuspendMode): void
    /**
     * Sets if the media pipeline can work in PLAY or RECORD mode
     * @param mode the new value
     */
    set_transport_mode(mode: RTSPTransportMode): void
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     */
    setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    /**
     * Suspend `media`. The state of the pipeline managed by `media` is set to
     * GST_STATE_NULL but all streams are kept. `media` can be prepared again
     * with gst_rtsp_media_unsuspend()
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     */
    suspend(): boolean
    /**
     * Set `pipeline` as the #GstPipeline for `media`. Ownership is
     * taken of `pipeline`.
     * @param pipeline a #GstPipeline
     */
    take_pipeline(pipeline: Gst.Pipeline): void
    /**
     * Unlock the media.
     */
    unlock(): void
    /**
     * Unprepare `media`. After this call, the media should be prepared again before
     * it can be used again. If the media is set to be non-reusable, a new instance
     * must be created.
     */
    unprepare(): boolean
    /**
     * Unsuspend `media` if it was in a suspended state. This method does nothing
     * when the media was not in the suspended state.
     */
    unsuspend(): boolean
    /**
     * Set `media` to provide a #GstNetTimeProvider.
     * @param time_provider if a #GstNetTimeProvider should be used
     */
    use_time_provider(time_provider: boolean): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean
    vfunc_handle_message(message: Gst.Message): boolean
    /**
     * Configure an SDP on `media` for receiving streams
     * @param sdp a #GstSDPMessage
     */
    vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean
    vfunc_new_state(state: Gst.State): void
    vfunc_new_stream(stream: RTSPStream): void
    /**
     * Prepare `media` for streaming. This function will create the objects
     * to manage the streaming. A pipeline must have been set on `media` with
     * gst_rtsp_media_take_pipeline().
     * 
     * It will preroll the pipeline and collect vital information about the streams
     * such as the duration.
     * @param thread a #GstRTSPThread to run the   bus handler or %NULL
     */
    vfunc_prepare(thread?: RTSPThread | null): boolean
    vfunc_prepared(): void
    vfunc_query_position(position: number): boolean
    vfunc_query_stop(stop: number): boolean
    vfunc_removed_stream(stream: RTSPStream): void
    vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     */
    vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    /**
     * Suspend `media`. The state of the pipeline managed by `media` is set to
     * GST_STATE_NULL but all streams are kept. `media` can be prepared again
     * with gst_rtsp_media_unsuspend()
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     */
    vfunc_suspend(): boolean
    vfunc_target_state(state: Gst.State): void
    /**
     * Unprepare `media`. After this call, the media should be prepared again before
     * it can be used again. If the media is set to be non-reusable, a new instance
     * must be created.
     */
    vfunc_unprepare(): boolean
    vfunc_unprepared(): void
    /**
     * Unsuspend `media` if it was in a suspended state. This method does nothing
     * when the media was not in the suspended state.
     */
    vfunc_unsuspend(): boolean
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    connect(sigName: "new-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    connect_after(sigName: "new-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    emit(sigName: "new-state", object: number): void
    connect(sigName: "new-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "new-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    emit(sigName: "new-stream", object: RTSPStream): void
    connect(sigName: "prepared", callback: (($obj: RTSPMedia) => void)): number
    connect_after(sigName: "prepared", callback: (($obj: RTSPMedia) => void)): number
    emit(sigName: "prepared"): void
    connect(sigName: "removed-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "removed-stream", callback: (($obj: RTSPMedia, object: RTSPStream) => void)): number
    emit(sigName: "removed-stream", object: RTSPStream): void
    connect(sigName: "target-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    connect_after(sigName: "target-state", callback: (($obj: RTSPMedia, object: number) => void)): number
    emit(sigName: "target-state", object: number): void
    connect(sigName: "unprepared", callback: (($obj: RTSPMedia) => void)): number
    connect_after(sigName: "unprepared", callback: (($obj: RTSPMedia) => void)): number
    emit(sigName: "unprepared"): void
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
    connect(sigName: "notify", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reusable", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reusable", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-provider", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-provider", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPMedia_ConstructProps)
    _init (config?: RTSPMedia_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(element: Gst.Element): RTSPMedia
    static $gtype: GObject.Type
}
interface RTSPMediaFactory_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bind_mcast_address?: boolean
    buffer_size?: number
    clock?: Gst.Clock
    dscp_qos?: number
    /**
     * Whether the created media should send and receive RTCP
     */
    enable_rtcp?: boolean
    eos_shutdown?: boolean
    latency?: number
    launch?: string
    max_mcast_ttl?: number
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
    shared?: boolean
    stop_on_disconnect?: boolean
    suspend_mode?: RTSPSuspendMode
    transport_mode?: RTSPTransportMode
}
class RTSPMediaFactory {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    /**
     * Whether the created media should send and receive RTCP
     */
    enable_rtcp: boolean
    eos_shutdown: boolean
    latency: number
    launch: string
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    transport_mode: RTSPTransportMode
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    /**
     * A convenience wrapper around gst_rtsp_permissions_add_role_from_structure().
     * If `factory` had no permissions, new permissions will be created and the
     * role will be added to it.
     * @param structure 
     */
    add_role_from_structure(structure: Gst.Structure): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    create_element(url: GstRtsp.RTSPUrl): Gst.Element
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `factory`.
     */
    get_address_pool(): RTSPAddressPool | null
    /**
     * Get the kernel UDP buffer size.
     */
    get_buffer_size(): number
    /**
     * Returns the clock that is going to be used by the pipelines
     * of all medias created from this factory.
     */
    get_clock(): Gst.Clock
    get_do_retransmission(): boolean
    /**
     * Get the configured media DSCP QoS.
     */
    get_dscp_qos(): number
    /**
     * Get the latency that is used for receiving media
     */
    get_latency(): number
    /**
     * Get the gst_parse_launch() pipeline description that will be used in the
     * default prepare vmethod.
     */
    get_launch(): string | null
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    get_max_mcast_ttl(): number
    /**
     * Return the GType of the GstRTSPMedia subclass this
     * factory will create.
     */
    get_media_gtype(): GObject.Type
    /**
     * Get the multicast interface used for `factory`.
     */
    get_multicast_iface(): string | null
    /**
     * Get the permissions object from `factory`.
     */
    get_permissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `factory`.
     */
    get_profiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `factory`.
     */
    get_protocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    get_publish_clock_mode(): RTSPPublishClockMode
    /**
     * Get the time that is stored for retransmission purposes
     */
    get_retransmission_time(): Gst.ClockTime
    /**
     * Get how media created from this factory will be suspended.
     */
    get_suspend_mode(): RTSPSuspendMode
    /**
     * Get if media created from this factory can be used for PLAY or RECORD
     * methods.
     */
    get_transport_mode(): RTSPTransportMode
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    is_bind_mcast_address(): boolean
    /**
     * Check if created media will send and receive RTCP
     */
    is_enable_rtcp(): boolean
    /**
     * Get if media created from this factory will have an EOS event sent to the
     * pipeline before shutdown.
     */
    is_eos_shutdown(): boolean
    /**
     * Get if media created from this factory can be shared between clients.
     */
    is_shared(): boolean
    is_stop_on_disonnect(): boolean
    /**
     * configure `pool` to be used as the address pool of `factory`.
     * @param pool a #GstRTSPAddressPool
     */
    set_address_pool(pool?: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bind_mcast_addr the new value
     */
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    set_buffer_size(size: number): void
    /**
     * Configures a specific clock to be used by the pipelines
     * of all medias created from this factory.
     * @param clock the clock to be used by the media factory
     */
    set_clock(clock?: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent for
     * receiving media
     * @param do_retransmission 
     */
    set_do_retransmission(do_retransmission: boolean): void
    /**
     * Configure the media dscp qos to `dscp_qos`.
     * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
     */
    set_dscp_qos(dscp_qos: number): void
    /**
     * Decide whether the created media should send and receive RTCP
     * @param enable the new value
     */
    set_enable_rtcp(enable: boolean): void
    /**
     * Configure if media created from this factory will have an EOS sent to the
     * pipeline before shutdown.
     * @param eos_shutdown the new value
     */
    set_eos_shutdown(eos_shutdown: boolean): void
    /**
     * Configure the latency used for receiving media
     * @param latency latency in milliseconds
     */
    set_latency(latency: number): void
    /**
     * The gst_parse_launch() line to use for constructing the pipeline in the
     * default prepare vmethod.
     * 
     * The pipeline description should return a GstBin as the toplevel element
     * which can be accomplished by enclosing the description with brackets '('
     * ')'.
     * 
     * The description should return a pipeline with payloaders named pay0, pay1,
     * etc.. Each of the payloaders will result in a stream.
     * @param launch the launch description
     */
    set_launch(launch: string): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    set_max_mcast_ttl(ttl: number): boolean
    /**
     * Configure the GType of the GstRTSPMedia subclass to
     * create (by default, overridden construct vmethods
     * may of course do something different)
     * @param media_gtype the GType of the class to create
     */
    set_media_gtype(media_gtype: GObject.Type): void
    /**
     * configure `multicast_iface` to be used for `factory`.
     * @param multicast_iface a multicast interface name
     */
    set_multicast_iface(multicast_iface?: string | null): void
    /**
     * Set `permissions` on `factory`.
     * @param permissions a #GstRTSPPermissions
     */
    set_permissions(permissions?: RTSPPermissions | null): void
    /**
     * Configure the allowed profiles for `factory`.
     * @param profiles the new flags
     */
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `factory`.
     * @param protocols the new flags
     */
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    /**
     * Configure the time to store for possible retransmission
     * @param time a #GstClockTime
     */
    set_retransmission_time(time: Gst.ClockTime): void
    /**
     * Configure if media created from this factory can be shared between clients.
     * @param shared the new value
     */
    set_shared(shared: boolean): void
    /**
     * Configure if media created from this factory should be stopped
     * when a client disconnects without sending TEARDOWN.
     * @param stop_on_disconnect the new value
     */
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    /**
     * Configure how media created from this factory will be suspended.
     * @param mode the new #GstRTSPSuspendMode
     */
    set_suspend_mode(mode: RTSPSuspendMode): void
    /**
     * Configure if this factory creates media for PLAY or RECORD modes.
     * @param mode the new value
     */
    set_transport_mode(mode: RTSPTransportMode): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    vfunc_configure(media: RTSPMedia): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element
    vfunc_gen_key(url: GstRtsp.RTSPUrl): string
    vfunc_media_configure(media: RTSPMedia): void
    vfunc_media_constructed(media: RTSPMedia): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-configure", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-constructed", callback: (($obj: RTSPMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-constructed", object: RTSPMedia): void
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
    connect(sigName: "notify", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::launch", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPMediaFactory_ConstructProps)
    _init (config?: RTSPMediaFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMediaFactory
    static $gtype: GObject.Type
}
interface RTSPMediaFactoryURI_ConstructProps extends RTSPMediaFactory_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI */
    uri?: string
    use_gstpay?: boolean
}
class RTSPMediaFactoryURI {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI */
    uri: string
    use_gstpay: boolean
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    /**
     * Whether the created media should send and receive RTCP
     */
    enable_rtcp: boolean
    eos_shutdown: boolean
    latency: number
    launch: string
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI */
    /**
     * Get the URI that will provide media for this factory.
     */
    get_uri(): string
    /**
     * Set the URI of the resource that will be streamed by this factory.
     * @param uri the uri the stream
     */
    set_uri(uri: string): void
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    /**
     * A convenience wrapper around gst_rtsp_permissions_add_role_from_structure().
     * If `factory` had no permissions, new permissions will be created and the
     * role will be added to it.
     * @param structure 
     */
    add_role_from_structure(structure: Gst.Structure): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    create_element(url: GstRtsp.RTSPUrl): Gst.Element
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `factory`.
     */
    get_address_pool(): RTSPAddressPool | null
    /**
     * Get the kernel UDP buffer size.
     */
    get_buffer_size(): number
    /**
     * Returns the clock that is going to be used by the pipelines
     * of all medias created from this factory.
     */
    get_clock(): Gst.Clock
    get_do_retransmission(): boolean
    /**
     * Get the configured media DSCP QoS.
     */
    get_dscp_qos(): number
    /**
     * Get the latency that is used for receiving media
     */
    get_latency(): number
    /**
     * Get the gst_parse_launch() pipeline description that will be used in the
     * default prepare vmethod.
     */
    get_launch(): string | null
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    get_max_mcast_ttl(): number
    /**
     * Return the GType of the GstRTSPMedia subclass this
     * factory will create.
     */
    get_media_gtype(): GObject.Type
    /**
     * Get the multicast interface used for `factory`.
     */
    get_multicast_iface(): string | null
    /**
     * Get the permissions object from `factory`.
     */
    get_permissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `factory`.
     */
    get_profiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `factory`.
     */
    get_protocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    get_publish_clock_mode(): RTSPPublishClockMode
    /**
     * Get the time that is stored for retransmission purposes
     */
    get_retransmission_time(): Gst.ClockTime
    /**
     * Get how media created from this factory will be suspended.
     */
    get_suspend_mode(): RTSPSuspendMode
    /**
     * Get if media created from this factory can be used for PLAY or RECORD
     * methods.
     */
    get_transport_mode(): RTSPTransportMode
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    is_bind_mcast_address(): boolean
    /**
     * Check if created media will send and receive RTCP
     */
    is_enable_rtcp(): boolean
    /**
     * Get if media created from this factory will have an EOS event sent to the
     * pipeline before shutdown.
     */
    is_eos_shutdown(): boolean
    /**
     * Get if media created from this factory can be shared between clients.
     */
    is_shared(): boolean
    is_stop_on_disonnect(): boolean
    /**
     * configure `pool` to be used as the address pool of `factory`.
     * @param pool a #GstRTSPAddressPool
     */
    set_address_pool(pool?: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bind_mcast_addr the new value
     */
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    set_buffer_size(size: number): void
    /**
     * Configures a specific clock to be used by the pipelines
     * of all medias created from this factory.
     * @param clock the clock to be used by the media factory
     */
    set_clock(clock?: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent for
     * receiving media
     * @param do_retransmission 
     */
    set_do_retransmission(do_retransmission: boolean): void
    /**
     * Configure the media dscp qos to `dscp_qos`.
     * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
     */
    set_dscp_qos(dscp_qos: number): void
    /**
     * Decide whether the created media should send and receive RTCP
     * @param enable the new value
     */
    set_enable_rtcp(enable: boolean): void
    /**
     * Configure if media created from this factory will have an EOS sent to the
     * pipeline before shutdown.
     * @param eos_shutdown the new value
     */
    set_eos_shutdown(eos_shutdown: boolean): void
    /**
     * Configure the latency used for receiving media
     * @param latency latency in milliseconds
     */
    set_latency(latency: number): void
    /**
     * The gst_parse_launch() line to use for constructing the pipeline in the
     * default prepare vmethod.
     * 
     * The pipeline description should return a GstBin as the toplevel element
     * which can be accomplished by enclosing the description with brackets '('
     * ')'.
     * 
     * The description should return a pipeline with payloaders named pay0, pay1,
     * etc.. Each of the payloaders will result in a stream.
     * @param launch the launch description
     */
    set_launch(launch: string): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    set_max_mcast_ttl(ttl: number): boolean
    /**
     * Configure the GType of the GstRTSPMedia subclass to
     * create (by default, overridden construct vmethods
     * may of course do something different)
     * @param media_gtype the GType of the class to create
     */
    set_media_gtype(media_gtype: GObject.Type): void
    /**
     * configure `multicast_iface` to be used for `factory`.
     * @param multicast_iface a multicast interface name
     */
    set_multicast_iface(multicast_iface?: string | null): void
    /**
     * Set `permissions` on `factory`.
     * @param permissions a #GstRTSPPermissions
     */
    set_permissions(permissions?: RTSPPermissions | null): void
    /**
     * Configure the allowed profiles for `factory`.
     * @param profiles the new flags
     */
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `factory`.
     * @param protocols the new flags
     */
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    /**
     * Configure the time to store for possible retransmission
     * @param time a #GstClockTime
     */
    set_retransmission_time(time: Gst.ClockTime): void
    /**
     * Configure if media created from this factory can be shared between clients.
     * @param shared the new value
     */
    set_shared(shared: boolean): void
    /**
     * Configure if media created from this factory should be stopped
     * when a client disconnects without sending TEARDOWN.
     * @param stop_on_disconnect the new value
     */
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    /**
     * Configure how media created from this factory will be suspended.
     * @param mode the new #GstRTSPSuspendMode
     */
    set_suspend_mode(mode: RTSPSuspendMode): void
    /**
     * Configure if this factory creates media for PLAY or RECORD modes.
     * @param mode the new value
     */
    set_transport_mode(mode: RTSPTransportMode): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    vfunc_configure(media: RTSPMedia): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element
    vfunc_gen_key(url: GstRtsp.RTSPUrl): string
    vfunc_media_configure(media: RTSPMedia): void
    vfunc_media_constructed(media: RTSPMedia): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-configure", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-constructed", callback: (($obj: RTSPMediaFactoryURI, object: RTSPMedia) => void)): number
    emit(sigName: "media-constructed", object: RTSPMedia): void
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
    connect(sigName: "notify", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-gstpay", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gstpay", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::launch", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPMediaFactoryURI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPMediaFactoryURI_ConstructProps)
    _init (config?: RTSPMediaFactoryURI_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMediaFactoryURI
    /* Function overloads */
    static new(): RTSPMediaFactoryURI
    static $gtype: GObject.Type
}
interface RTSPMountPoints_ConstructProps extends GObject.Object_ConstructProps {
}
class RTSPMountPoints {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints */
    /**
     * Attach `factory` to the mount point `path` in `mounts`.
     * 
     * `path` is either of the form (/node)+ or the root path '/'. (An empty path is
     * not allowed.) Any previous mount point will be freed.
     * 
     * Ownership is taken of the reference on `factory` so that `factory` should not be
     * used after calling this function.
     * @param path a mount point
     * @param factory a #GstRTSPMediaFactory
     */
    add_factory(path: string, factory: RTSPMediaFactory): void
    /**
     * Make a path string from `url`.
     * @param url a #GstRTSPUrl
     */
    make_path(url: GstRtsp.RTSPUrl): string | null
    /**
     * Find the factory in `mounts` that has the longest match with `path`.
     * 
     * If `matched` is %NULL, `path` will match the factory exactly otherwise
     * the amount of characters that matched is returned in `matched`.
     * @param path a mount point
     */
    match(path: string): [ /* returnType */ RTSPMediaFactory, /* matched */ number | null ]
    /**
     * Remove the #GstRTSPMediaFactory associated with `path` in `mounts`.
     * @param path a mount point
     */
    remove_factory(path: string): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints */
    /**
     * Make a path string from `url`.
     * @param url a #GstRTSPUrl
     */
    vfunc_make_path(url: GstRtsp.RTSPUrl): string | null
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
    connect(sigName: "notify", callback: (($obj: RTSPMountPoints, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPMountPoints, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPMountPoints_ConstructProps)
    _init (config?: RTSPMountPoints_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPMountPoints
    static $gtype: GObject.Type
}
interface RTSPOnvifClient_ConstructProps extends RTSPClient_ConstructProps {
}
class RTSPOnvifClient {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    drop_backlog: boolean
    mount_points: RTSPMountPoints
    post_session_timeout: number
    session_pool: RTSPSessionPool
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    /**
     * Attaches `client` to `context`. When the mainloop for `context` is run, the
     * client will be dispatched. When `context` is %NULL, the default context will be
     * used).
     * 
     * This function should be called when the client properties and urls are fully
     * configured and the client is ready to start.
     * @param context a #GMainContext
     */
    attach(context?: GLib.MainContext | null): number
    /**
     * Close the connection of `client` and remove all media it was managing.
     */
    close(): void
    /**
     * Get the #GstRTSPAuth used as the authentication manager of `client`.
     */
    get_auth(): RTSPAuth | null
    /**
     * Get the #GstRTSPConnection of `client`.
     */
    get_connection(): GstRtsp.RTSPConnection | null
    /**
     * Get the Content-Length limit of `client`.
     */
    get_content_length_limit(): number
    /**
     * Get the #GstRTSPMountPoints object that `client` uses to manage its sessions.
     */
    get_mount_points(): RTSPMountPoints | null
    /**
     * Get the #GstRTSPSessionPool object that `client` uses to manage its sessions.
     */
    get_session_pool(): RTSPSessionPool | null
    /**
     * This is useful when providing a send function through
     * gst_rtsp_client_set_send_func() when doing RTSP over TCP:
     * the send function must call gst_rtsp_stream_transport_message_sent ()
     * on the appropriate transport when data has been received for streaming
     * to continue.
     * @param channel 
     */
    get_stream_transport(channel: number): RTSPStreamTransport | null
    /**
     * Get the #GstRTSPThreadPool used as the thread pool of `client`.
     */
    get_thread_pool(): RTSPThreadPool | null
    /**
     * Let the client handle `message`.
     * @param message an #GstRTSPMessage
     */
    handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    /**
     * Send a message message to the remote end. `message` must be a
     * #GST_RTSP_MESSAGE_REQUEST or a #GST_RTSP_MESSAGE_RESPONSE.
     * @param session a #GstRTSPSession to send   the message to or %NULL
     * @param message The #GstRTSPMessage to send
     */
    send_message(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    /**
     * Call `func` for each session managed by `client`. The result value of `func`
     * determines what happens to the session. `func` will be called with `client`
     * locked so no further actions on `client` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the session will be removed from
     * `client`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the session will remain in `client`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the session will remain in `client` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each session.
     * @param func a callback
     */
    session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[]
    /**
     * configure `auth` to be used as the authentication manager of `client`.
     * @param auth a #GstRTSPAuth
     */
    set_auth(auth?: RTSPAuth | null): void
    /**
     * Set the #GstRTSPConnection of `client`. This function takes ownership of
     * `conn`.
     * @param conn a #GstRTSPConnection
     */
    set_connection(conn: GstRtsp.RTSPConnection): boolean
    /**
     * Configure `client` to use the specified Content-Length limit.
     * 
     * Define an appropriate request size limit and reject requests exceeding the
     * limit with response status 413 Request Entity Too Large
     * @param limit Content-Length limit
     */
    set_content_length_limit(limit: number): void
    /**
     * Set `mounts` as the mount points for `client` which it will use to map urls
     * to media streams. These mount points are usually inherited from the server that
     * created the client but can be overriden later.
     * @param mounts a #GstRTSPMountPoints
     */
    set_mount_points(mounts?: RTSPMountPoints | null): void
    /**
     * Set `func` as the callback that will be called when a new message needs to be
     * sent to the client. `user_data` is passed to `func` and `notify` is called when
     * `user_data` is no longer in use.
     * 
     * By default, the client will send the messages on the #GstRTSPConnection that
     * was configured with gst_rtsp_client_attach() was called.
     * 
     * It is only allowed to set either a `send_func` or a `send_messages_func`
     * but not both at the same time.
     * @param func a #GstRTSPClientSendFunc
     */
    set_send_func(func: RTSPClientSendFunc): void
    /**
     * Set `func` as the callback that will be called when new messages needs to be
     * sent to the client. `user_data` is passed to `func` and `notify` is called when
     * `user_data` is no longer in use.
     * 
     * By default, the client will send the messages on the #GstRTSPConnection that
     * was configured with gst_rtsp_client_attach() was called.
     * 
     * It is only allowed to set either a `send_func` or a `send_messages_func`
     * but not both at the same time.
     * @param func a #GstRTSPClientSendMessagesFunc
     */
    set_send_messages_func(func: RTSPClientSendMessagesFunc): void
    /**
     * Set `pool` as the sessionpool for `client` which it will use to find
     * or allocate sessions. the sessionpool is usually inherited from the server
     * that created the client but can be overridden later.
     * @param pool a #GstRTSPSessionPool
     */
    set_session_pool(pool?: RTSPSessionPool | null): void
    /**
     * configure `pool` to be used as the thread pool of `client`.
     * @param pool a #GstRTSPThreadPool
     */
    set_thread_pool(pool?: RTSPThreadPool | null): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    vfunc_adjust_play_mode(context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime, enable_rate_control: boolean): GstRtsp.RTSPStatusCode
    vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_announce_request(ctx: RTSPContext): void
    vfunc_check_requirements(ctx: RTSPContext, arr: string): string
    vfunc_closed(): void
    vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean
    vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean
    vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage
    vfunc_describe_request(ctx: RTSPContext): void
    vfunc_get_parameter_request(ctx: RTSPContext): void
    vfunc_handle_response(ctx: RTSPContext): void
    vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean
    vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string
    vfunc_new_session(session: RTSPSession): void
    vfunc_options_request(ctx: RTSPContext): void
    vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult
    vfunc_pause_request(ctx: RTSPContext): void
    vfunc_play_request(ctx: RTSPContext): void
    vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode
    vfunc_record_request(ctx: RTSPContext): void
    vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void
    vfunc_set_parameter_request(ctx: RTSPContext): void
    vfunc_setup_request(ctx: RTSPContext): void
    vfunc_teardown_request(ctx: RTSPContext): void
    vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPClient */
    connect(sigName: "announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "announce-request", ctx: RTSPContext): void
    connect(sigName: "check-requirements", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext, arr: string[]) => string)): number
    connect_after(sigName: "check-requirements", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext, arr: string[]) => string)): number
    emit(sigName: "check-requirements", ctx: RTSPContext, arr: string[]): void
    connect(sigName: "closed", callback: (($obj: RTSPOnvifClient) => void)): number
    connect_after(sigName: "closed", callback: (($obj: RTSPOnvifClient) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "describe-request", ctx: RTSPContext): void
    connect(sigName: "get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "handle-response", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "handle-response", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "handle-response", ctx: RTSPContext): void
    connect(sigName: "new-session", callback: (($obj: RTSPOnvifClient, object: RTSPSession) => void)): number
    connect_after(sigName: "new-session", callback: (($obj: RTSPOnvifClient, object: RTSPSession) => void)): number
    emit(sigName: "new-session", object: RTSPSession): void
    connect(sigName: "options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "options-request", ctx: RTSPContext): void
    connect(sigName: "pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "pause-request", ctx: RTSPContext): void
    connect(sigName: "play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "play-request", ctx: RTSPContext): void
    connect(sigName: "pre-announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-announce-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-announce-request", ctx: RTSPContext): void
    connect(sigName: "pre-describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-describe-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-describe-request", ctx: RTSPContext): void
    connect(sigName: "pre-get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-get-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-get-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-options-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-options-request", ctx: RTSPContext): void
    connect(sigName: "pre-pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-pause-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-pause-request", ctx: RTSPContext): void
    connect(sigName: "pre-play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-play-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-play-request", ctx: RTSPContext): void
    connect(sigName: "pre-record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-record-request", ctx: RTSPContext): void
    connect(sigName: "pre-set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "pre-setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-setup-request", ctx: RTSPContext): void
    connect(sigName: "pre-teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    connect_after(sigName: "pre-teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode)): number
    emit(sigName: "pre-teardown-request", ctx: RTSPContext): void
    connect(sigName: "record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "record-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "record-request", ctx: RTSPContext): void
    connect(sigName: "send-message", callback: (($obj: RTSPOnvifClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    connect_after(sigName: "send-message", callback: (($obj: RTSPOnvifClient, session: RTSPSession, message: GstRtsp.RTSPMessage) => void)): number
    emit(sigName: "send-message", session: RTSPSession, message: GstRtsp.RTSPMessage): void
    connect(sigName: "set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "set-parameter-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "set-parameter-request", ctx: RTSPContext): void
    connect(sigName: "setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "setup-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "setup-request", ctx: RTSPContext): void
    connect(sigName: "teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    connect_after(sigName: "teardown-request", callback: (($obj: RTSPOnvifClient, ctx: RTSPContext) => void)): number
    emit(sigName: "teardown-request", ctx: RTSPContext): void
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
    connect(sigName: "notify", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drop-backlog", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drop-backlog", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::post-session-timeout", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::post-session-timeout", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPOnvifClient_ConstructProps)
    _init (config?: RTSPOnvifClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifClient
    static $gtype: GObject.Type
}
interface RTSPOnvifMedia_ConstructProps extends RTSPMedia_ConstructProps {
}
class RTSPOnvifMedia {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    readonly element: Gst.Element
    eos_shutdown: boolean
    latency: number
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    time_provider: boolean
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia */
    /**
     * Find the ONVIF backchannel depayloader element. It should be named
     * 'depay_backchannel', be placed in a bin called 'onvif-backchannel'
     * and return all supported RTP caps on a caps query. Complete RTP caps with
     * at least the payload type, clock-rate and encoding-name are required.
     * 
     * A new #GstRTSPStream is created for the backchannel if found.
     */
    collect_backchannel(): boolean
    /**
     * Get the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     */
    get_backchannel_bandwidth(): number
    /**
     * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     * @param bandwidth the bandwidth in bits per second
     */
    set_backchannel_bandwidth(bandwidth: number): void
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    /**
     * Find all payloader elements, they should be named pay\%d in the
     * element of `media,` and create #GstRTSPStreams for them.
     * 
     * Collect all dynamic elements, named dynpay\%d, and add them to
     * the list of dynamic elements.
     * 
     * Find all depayloader elements, they should be named depay\%d in the
     * element of `media,` and create #GstRTSPStreams for them.
     */
    collect_streams(): void
    /**
     * Add a receiver and sender parts to the pipeline based on the transport from
     * SETUP.
     * @param transports a list of #GstRTSPTransport
     */
    complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean
    /**
     * Create a new stream in `media` that provides RTP data on `pad`.
     * `pad` should be a pad of an element inside `media->`element.
     * @param payloader a #GstElement
     * @param pad a #GstPad
     */
    create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    /**
     * Find a stream in `media` with `control` as the control uri.
     * @param control the control of the stream
     */
    find_stream(control: string): RTSPStream | null
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `media`.
     */
    get_address_pool(): RTSPAddressPool | null
    /**
     * Get the base_time that is used by the pipeline in `media`.
     * 
     * `media` must be prepared before this method returns a valid base_time.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Get the kernel UDP buffer size.
     */
    get_buffer_size(): number
    /**
     * Get the clock that is used by the pipeline in `media`.
     * 
     * `media` must be prepared before this method returns a valid clock object.
     */
    get_clock(): Gst.Clock | null
    get_do_retransmission(): boolean
    /**
     * Get the configured DSCP QoS of attached media.
     */
    get_dscp_qos(): number
    /**
     * Get the element that was used when constructing `media`.
     */
    get_element(): Gst.Element
    /**
     * Get the latency that is used for receiving media.
     */
    get_latency(): number
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    get_max_mcast_ttl(): number
    /**
     * Get the multicast interface used for `media`.
     */
    get_multicast_iface(): string | null
    /**
     * Get the permissions object from `media`.
     */
    get_permissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `media`.
     */
    get_profiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `media`.
     */
    get_protocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    get_publish_clock_mode(): RTSPPublishClockMode
    /**
     * Get the current range as a string. `media` must be prepared with
     * gst_rtsp_media_prepare ().
     * @param play for the PLAY request
     * @param unit the unit to use for the string
     */
    get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    get_rate_control(): boolean
    /**
     * Get the rate and applied_rate of the current segment.
     */
    get_rates(): [ /* returnType */ boolean, /* rate */ number | null, /* applied_rate */ number | null ]
    /**
     * Get the amount of time to store retransmission data.
     */
    get_retransmission_time(): Gst.ClockTime
    /**
     * Get the status of `media`. When `media` is busy preparing, this function waits
     * until `media` is prepared or in error.
     */
    get_status(): RTSPMediaStatus
    /**
     * Retrieve the stream with index `idx` from `media`.
     * @param idx the stream index
     */
    get_stream(idx: number): RTSPStream | null
    /**
     * Get how `media` will be suspended.
     */
    get_suspend_mode(): RTSPSuspendMode
    /**
     * Get the #GstNetTimeProvider for the clock used by `media`. The time provider
     * will listen on `address` and `port` for client time requests.
     * @param address an address or %NULL
     * @param port a port or 0
     */
    get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider
    /**
     * Check if the pipeline for `media` can be used for PLAY or RECORD methods.
     */
    get_transport_mode(): RTSPTransportMode
    /**
     * Configure an SDP on `media` for receiving streams
     * @param sdp a #GstSDPMessage
     */
    handle_sdp(sdp: GstSdp.SDPMessage): boolean
    /**
     * See gst_rtsp_stream_is_complete(), gst_rtsp_stream_is_sender().
     */
    has_completed_sender(): boolean
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    is_bind_mcast_address(): boolean
    /**
     * Check if the pipeline for `media` will send an EOS down the pipeline before
     * unpreparing.
     */
    is_eos_shutdown(): boolean
    is_receive_only(): boolean
    /**
     * Check if the pipeline for `media` can be reused after an unprepare.
     */
    is_reusable(): boolean
    /**
     * Check if the pipeline for `media` can be shared between multiple clients.
     */
    is_shared(): boolean
    /**
     * Check if the pipeline for `media` will be stopped when a client disconnects
     * without sending TEARDOWN.
     */
    is_stop_on_disconnect(): boolean
    /**
     * Check if `media` can provide a #GstNetTimeProvider for its pipeline clock.
     * 
     * Use gst_rtsp_media_get_time_provider() to get the network clock.
     */
    is_time_provider(): boolean
    /**
     * Lock the entire media. This is needed by callers such as rtsp_client to
     * protect the media when it is shared by many clients.
     * The lock prevents that concurrent clients alters the shared media,
     * while one client already is working with it.
     * Typically the lock is taken in external RTSP API calls that uses shared media
     * such as DESCRIBE, SETUP, ANNOUNCE, TEARDOWN, PLAY, PAUSE.
     * 
     * As best practice take the lock as soon as the function get hold of a shared
     * media object. Release the lock right before the function returns.
     */
    lock(): void
    /**
     * Get the number of streams in this media.
     */
    n_streams(): number
    /**
     * Prepare `media` for streaming. This function will create the objects
     * to manage the streaming. A pipeline must have been set on `media` with
     * gst_rtsp_media_take_pipeline().
     * 
     * It will preroll the pipeline and collect vital information about the streams
     * such as the duration.
     * @param thread a #GstRTSPThread to run the   bus handler or %NULL
     */
    prepare(thread?: RTSPThread | null): boolean
    /**
     * Seek the pipeline of `media` to `range`. `media` must be prepared with
     * gst_rtsp_media_prepare().
     * @param range a #GstRTSPTimeRange
     */
    seek(range: GstRtsp.RTSPTimeRange): boolean
    /**
     * Seek the pipeline of `media` to `range` with the given `flags`.
     * `media` must be prepared with gst_rtsp_media_prepare().
     * @param range a #GstRTSPTimeRange
     * @param flags The minimal set of #GstSeekFlags to use
     */
    seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    /**
     * Seek the pipeline of `media` to `range` with the given `flags` and `rate,`
     * and `trickmode_interval`.
     * `media` must be prepared with gst_rtsp_media_prepare().
     * In order to perform the seek operation, the pipeline must contain all
     * needed transport parts (transport sinks).
     * @param range a #GstRTSPTimeRange
     * @param flags The minimal set of #GstSeekFlags to use
     * @param rate the rate to use in the seek
     * @param trickmode_interval The trickmode interval to use for KEY_UNITS trick mode
     */
    seek_trickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime): boolean
    /**
     * Check if the pipeline for `media` seek and up to what point in time,
     * it can seek.
     */
    seekable(): Gst.ClockTimeDiff
    /**
     * configure `pool` to be used as the address pool of `media`.
     * @param pool a #GstRTSPAddressPool
     */
    set_address_pool(pool?: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bind_mcast_addr the new value
     */
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    set_buffer_size(size: number): void
    /**
     * Configure the clock used for the media.
     * @param clock #GstClock to be used
     */
    set_clock(clock?: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent
     * @param do_retransmission 
     */
    set_do_retransmission(do_retransmission: boolean): void
    /**
     * Configure the dscp qos of attached streams to `dscp_qos`.
     * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
     */
    set_dscp_qos(dscp_qos: number): void
    /**
     * Set or unset if an EOS event will be sent to the pipeline for `media` before
     * it is unprepared.
     * @param eos_shutdown the new value
     */
    set_eos_shutdown(eos_shutdown: boolean): void
    /**
     * Configure the latency used for receiving media.
     * @param latency latency in milliseconds
     */
    set_latency(latency: number): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    set_max_mcast_ttl(ttl: number): boolean
    /**
     * configure `multicast_iface` to be used for `media`.
     * @param multicast_iface a multicast interface name
     */
    set_multicast_iface(multicast_iface?: string | null): void
    /**
     * Set `permissions` on `media`.
     * @param permissions a #GstRTSPPermissions
     */
    set_permissions(permissions?: RTSPPermissions | null): void
    /**
     * Set the state of the pipeline managed by `media` to `state`
     * @param state the target state of the pipeline
     */
    set_pipeline_state(state: Gst.State): void
    /**
     * Configure the allowed lower transport for `media`.
     * @param profiles the new flags
     */
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `media`.
     * @param protocols the new flags
     */
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    /**
     * Define whether `media` will follow the Rate-Control=no behaviour as specified
     * in the ONVIF replay spec.
     * @param enabled 
     */
    set_rate_control(enabled: boolean): void
    /**
     * Set the amount of time to store retransmission packets.
     * @param time the new value
     */
    set_retransmission_time(time: Gst.ClockTime): void
    /**
     * Set or unset if the pipeline for `media` can be reused after the pipeline has
     * been unprepared.
     * @param reusable the new value
     */
    set_reusable(reusable: boolean): void
    /**
     * Set or unset if the pipeline for `media` can be shared will multiple clients.
     * When `shared` is %TRUE, client requests for this media will share the media
     * pipeline.
     * @param shared the new value
     */
    set_shared(shared: boolean): void
    /**
     * Set the state of `media` to `state` and for the transports in `transports`.
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     * @param state the target state of the media
     * @param transports  a #GPtrArray of #GstRTSPStreamTransport pointers
     */
    set_state(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    /**
     * Set or unset if the pipeline for `media` should be stopped when a
     * client disconnects without sending TEARDOWN.
     * @param stop_on_disconnect the new value
     */
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    /**
     * Control how @ media will be suspended after the SDP has been generated and
     * after a PAUSE request has been performed.
     * 
     * Media must be unprepared when setting the suspend mode.
     * @param mode the new #GstRTSPSuspendMode
     */
    set_suspend_mode(mode: RTSPSuspendMode): void
    /**
     * Sets if the media pipeline can work in PLAY or RECORD mode
     * @param mode the new value
     */
    set_transport_mode(mode: RTSPTransportMode): void
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     */
    setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    /**
     * Suspend `media`. The state of the pipeline managed by `media` is set to
     * GST_STATE_NULL but all streams are kept. `media` can be prepared again
     * with gst_rtsp_media_unsuspend()
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     */
    suspend(): boolean
    /**
     * Set `pipeline` as the #GstPipeline for `media`. Ownership is
     * taken of `pipeline`.
     * @param pipeline a #GstPipeline
     */
    take_pipeline(pipeline: Gst.Pipeline): void
    /**
     * Unlock the media.
     */
    unlock(): void
    /**
     * Unprepare `media`. After this call, the media should be prepared again before
     * it can be used again. If the media is set to be non-reusable, a new instance
     * must be created.
     */
    unprepare(): boolean
    /**
     * Unsuspend `media` if it was in a suspended state. This method does nothing
     * when the media was not in the suspended state.
     */
    unsuspend(): boolean
    /**
     * Set `media` to provide a #GstNetTimeProvider.
     * @param time_provider if a #GstNetTimeProvider should be used
     */
    use_time_provider(time_provider: boolean): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean
    vfunc_handle_message(message: Gst.Message): boolean
    /**
     * Configure an SDP on `media` for receiving streams
     * @param sdp a #GstSDPMessage
     */
    vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean
    vfunc_new_state(state: Gst.State): void
    vfunc_new_stream(stream: RTSPStream): void
    /**
     * Prepare `media` for streaming. This function will create the objects
     * to manage the streaming. A pipeline must have been set on `media` with
     * gst_rtsp_media_take_pipeline().
     * 
     * It will preroll the pipeline and collect vital information about the streams
     * such as the duration.
     * @param thread a #GstRTSPThread to run the   bus handler or %NULL
     */
    vfunc_prepare(thread?: RTSPThread | null): boolean
    vfunc_prepared(): void
    vfunc_query_position(position: number): boolean
    vfunc_query_stop(stop: number): boolean
    vfunc_removed_stream(stream: RTSPStream): void
    vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     */
    vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    /**
     * Suspend `media`. The state of the pipeline managed by `media` is set to
     * GST_STATE_NULL but all streams are kept. `media` can be prepared again
     * with gst_rtsp_media_unsuspend()
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     */
    vfunc_suspend(): boolean
    vfunc_target_state(state: Gst.State): void
    /**
     * Unprepare `media`. After this call, the media should be prepared again before
     * it can be used again. If the media is set to be non-reusable, a new instance
     * must be created.
     */
    vfunc_unprepare(): boolean
    vfunc_unprepared(): void
    /**
     * Unsuspend `media` if it was in a suspended state. This method does nothing
     * when the media was not in the suspended state.
     */
    vfunc_unsuspend(): boolean
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMedia */
    connect(sigName: "new-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    connect_after(sigName: "new-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    emit(sigName: "new-state", object: number): void
    connect(sigName: "new-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "new-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    emit(sigName: "new-stream", object: RTSPStream): void
    connect(sigName: "prepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    connect_after(sigName: "prepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    emit(sigName: "prepared"): void
    connect(sigName: "removed-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    connect_after(sigName: "removed-stream", callback: (($obj: RTSPOnvifMedia, object: RTSPStream) => void)): number
    emit(sigName: "removed-stream", object: RTSPStream): void
    connect(sigName: "target-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    connect_after(sigName: "target-state", callback: (($obj: RTSPOnvifMedia, object: number) => void)): number
    emit(sigName: "target-state", object: number): void
    connect(sigName: "unprepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    connect_after(sigName: "unprepared", callback: (($obj: RTSPOnvifMedia) => void)): number
    emit(sigName: "unprepared"): void
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
    connect(sigName: "notify", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reusable", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reusable", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-provider", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-provider", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMedia, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPOnvifMedia_ConstructProps)
    _init (config?: RTSPOnvifMedia_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTSPOnvifMediaFactory_ConstructProps extends RTSPMediaFactory_ConstructProps {
}
class RTSPOnvifMediaFactory {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    bind_mcast_address: boolean
    buffer_size: number
    clock: Gst.Clock
    dscp_qos: number
    /**
     * Whether the created media should send and receive RTCP
     */
    enable_rtcp: boolean
    eos_shutdown: boolean
    latency: number
    launch: string
    max_mcast_ttl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stop_on_disconnect: boolean
    suspend_mode: RTSPSuspendMode
    transport_mode: RTSPTransportMode
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory */
    /**
     * Get the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     */
    get_backchannel_bandwidth(): number
    /**
     * Get the gst_parse_launch() pipeline description that will be used in the
     * default prepare vmethod for generating the ONVIF backchannel pipeline.
     */
    get_backchannel_launch(): string
    /**
     * Returns %TRUE if an ONVIF backchannel is supported by the media factory.
     */
    has_backchannel_support(): boolean
    has_replay_support(): boolean
    /**
     * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     * @param bandwidth the bandwidth in bits per second
     */
    set_backchannel_bandwidth(bandwidth: number): void
    /**
     * The gst_parse_launch() line to use for constructing the ONVIF backchannel
     * pipeline in the default prepare vmethod if requested by the client.
     * 
     * The pipeline description should return a GstBin as the toplevel element
     * which can be accomplished by enclosing the description with brackets '('
     * ')'.
     * 
     * The description should return a pipeline with a single depayloader named
     * depay_backchannel. A caps query on the depayloader's sinkpad should return
     * all possible, complete RTP caps that are going to be supported. At least
     * the payload type, clock-rate and encoding-name need to be specified.
     * 
     * Note: The pipeline part passed here must end in sinks that are not waiting
     * until pre-rolling before reaching the PAUSED state, i.e. setting
     * async=false on #GstBaseSink. Otherwise the whole media will not be able to
     * prepare.
     * @param launch the launch description
     */
    set_backchannel_launch(launch: string): void
    /**
     * Set to %TRUE if ONVIF replay is supported by the media factory.
     * @param has_replay_support 
     */
    set_replay_support(has_replay_support: boolean): void
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    /**
     * A convenience wrapper around gst_rtsp_permissions_add_role_from_structure().
     * If `factory` had no permissions, new permissions will be created and the
     * role will be added to it.
     * @param structure 
     */
    add_role_from_structure(structure: Gst.Structure): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    create_element(url: GstRtsp.RTSPUrl): Gst.Element
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `factory`.
     */
    get_address_pool(): RTSPAddressPool | null
    /**
     * Get the kernel UDP buffer size.
     */
    get_buffer_size(): number
    /**
     * Returns the clock that is going to be used by the pipelines
     * of all medias created from this factory.
     */
    get_clock(): Gst.Clock
    get_do_retransmission(): boolean
    /**
     * Get the configured media DSCP QoS.
     */
    get_dscp_qos(): number
    /**
     * Get the latency that is used for receiving media
     */
    get_latency(): number
    /**
     * Get the gst_parse_launch() pipeline description that will be used in the
     * default prepare vmethod.
     */
    get_launch(): string | null
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    get_max_mcast_ttl(): number
    /**
     * Return the GType of the GstRTSPMedia subclass this
     * factory will create.
     */
    get_media_gtype(): GObject.Type
    /**
     * Get the multicast interface used for `factory`.
     */
    get_multicast_iface(): string | null
    /**
     * Get the permissions object from `factory`.
     */
    get_permissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `factory`.
     */
    get_profiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `factory`.
     */
    get_protocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    get_publish_clock_mode(): RTSPPublishClockMode
    /**
     * Get the time that is stored for retransmission purposes
     */
    get_retransmission_time(): Gst.ClockTime
    /**
     * Get how media created from this factory will be suspended.
     */
    get_suspend_mode(): RTSPSuspendMode
    /**
     * Get if media created from this factory can be used for PLAY or RECORD
     * methods.
     */
    get_transport_mode(): RTSPTransportMode
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    is_bind_mcast_address(): boolean
    /**
     * Check if created media will send and receive RTCP
     */
    is_enable_rtcp(): boolean
    /**
     * Get if media created from this factory will have an EOS event sent to the
     * pipeline before shutdown.
     */
    is_eos_shutdown(): boolean
    /**
     * Get if media created from this factory can be shared between clients.
     */
    is_shared(): boolean
    is_stop_on_disonnect(): boolean
    /**
     * configure `pool` to be used as the address pool of `factory`.
     * @param pool a #GstRTSPAddressPool
     */
    set_address_pool(pool?: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bind_mcast_addr the new value
     */
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    set_buffer_size(size: number): void
    /**
     * Configures a specific clock to be used by the pipelines
     * of all medias created from this factory.
     * @param clock the clock to be used by the media factory
     */
    set_clock(clock?: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent for
     * receiving media
     * @param do_retransmission 
     */
    set_do_retransmission(do_retransmission: boolean): void
    /**
     * Configure the media dscp qos to `dscp_qos`.
     * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
     */
    set_dscp_qos(dscp_qos: number): void
    /**
     * Decide whether the created media should send and receive RTCP
     * @param enable the new value
     */
    set_enable_rtcp(enable: boolean): void
    /**
     * Configure if media created from this factory will have an EOS sent to the
     * pipeline before shutdown.
     * @param eos_shutdown the new value
     */
    set_eos_shutdown(eos_shutdown: boolean): void
    /**
     * Configure the latency used for receiving media
     * @param latency latency in milliseconds
     */
    set_latency(latency: number): void
    /**
     * The gst_parse_launch() line to use for constructing the pipeline in the
     * default prepare vmethod.
     * 
     * The pipeline description should return a GstBin as the toplevel element
     * which can be accomplished by enclosing the description with brackets '('
     * ')'.
     * 
     * The description should return a pipeline with payloaders named pay0, pay1,
     * etc.. Each of the payloaders will result in a stream.
     * @param launch the launch description
     */
    set_launch(launch: string): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    set_max_mcast_ttl(ttl: number): boolean
    /**
     * Configure the GType of the GstRTSPMedia subclass to
     * create (by default, overridden construct vmethods
     * may of course do something different)
     * @param media_gtype the GType of the class to create
     */
    set_media_gtype(media_gtype: GObject.Type): void
    /**
     * configure `multicast_iface` to be used for `factory`.
     * @param multicast_iface a multicast interface name
     */
    set_multicast_iface(multicast_iface?: string | null): void
    /**
     * Set `permissions` on `factory`.
     * @param permissions a #GstRTSPPermissions
     */
    set_permissions(permissions?: RTSPPermissions | null): void
    /**
     * Configure the allowed profiles for `factory`.
     * @param profiles the new flags
     */
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `factory`.
     * @param protocols the new flags
     */
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    /**
     * Configure the time to store for possible retransmission
     * @param time a #GstClockTime
     */
    set_retransmission_time(time: Gst.ClockTime): void
    /**
     * Configure if media created from this factory can be shared between clients.
     * @param shared the new value
     */
    set_shared(shared: boolean): void
    /**
     * Configure if media created from this factory should be stopped
     * when a client disconnects without sending TEARDOWN.
     * @param stop_on_disconnect the new value
     */
    set_stop_on_disconnect(stop_on_disconnect: boolean): void
    /**
     * Configure how media created from this factory will be suspended.
     * @param mode the new #GstRTSPSuspendMode
     */
    set_suspend_mode(mode: RTSPSuspendMode): void
    /**
     * Configure if this factory creates media for PLAY or RECORD modes.
     * @param mode the new value
     */
    set_transport_mode(mode: RTSPTransportMode): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory */
    /**
     * Returns %TRUE if an ONVIF backchannel is supported by the media factory.
     */
    vfunc_has_backchannel_support(): boolean
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    vfunc_configure(media: RTSPMedia): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element
    vfunc_gen_key(url: GstRtsp.RTSPUrl): string
    vfunc_media_configure(media: RTSPMedia): void
    vfunc_media_constructed(media: RTSPMedia): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory */
    connect(sigName: "media-configure", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-configure", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-configure", object: RTSPMedia): void
    connect(sigName: "media-constructed", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    connect_after(sigName: "media-constructed", callback: (($obj: RTSPOnvifMediaFactory, object: RTSPMedia) => void)): number
    emit(sigName: "media-constructed", object: RTSPMedia): void
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
    connect(sigName: "notify", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind-mcast-address", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dscp-qos", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-rtcp", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-rtcp", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eos-shutdown", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::launch", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::launch", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-mcast-ttl", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stop-on-disconnect", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suspend-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: RTSPOnvifMediaFactory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPOnvifMediaFactory_ConstructProps)
    _init (config?: RTSPOnvifMediaFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifMediaFactory
    /**
     * Checks whether the client request requires backchannel.
     * @param factory a #GstRTSPMediaFactory
     * @param ctx 
     */
    static requires_backchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean
    static $gtype: GObject.Type
}
interface RTSPOnvifServer_ConstructProps extends RTSPServer_ConstructProps {
}
class RTSPOnvifServer {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    address: string
    backlog: number
    readonly bound_port: number
    content_length_limit: number
    mount_points: RTSPMountPoints
    service: string
    session_pool: RTSPSessionPool
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    /**
     * Attaches `server` to `context`. When the mainloop for `context` is run, the
     * server will be dispatched. When `context` is %NULL, the default context will be
     * used).
     * 
     * This function should be called when the server properties and urls are fully
     * configured and the server is ready to start.
     * 
     * This takes a reference on `server` until the source is destroyed. Note that
     * if `context` is not the default main context as returned by
     * g_main_context_default() (or %NULL), g_source_remove() cannot be used to
     * destroy the source. In that case it is recommended to use
     * gst_rtsp_server_create_source() and attach it to `context` manually.
     * @param context a #GMainContext
     */
    attach(context?: GLib.MainContext | null): number
    /**
     * Call `func` for each client managed by `server`. The result value of `func`
     * determines what happens to the client. `func` will be called with `server`
     * locked so no further actions on `server` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the client will be removed from
     * `server`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the client will remain in `server`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the client will remain in `server` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each client.
     * @param func a callback
     */
    client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[]
    /**
     * Create a #GSocket for `server`. The socket will listen on the
     * configured service.
     * @param cancellable a #GCancellable
     */
    create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket
    /**
     * Create a #GSource for `server`. The new source will have a default
     * #GSocketSourceFunc of gst_rtsp_server_io_func().
     * 
     * `cancellable` if not %NULL can be used to cancel the source, which will cause
     * the source to trigger, reporting the current condition (which is likely 0
     * unless cancellation happened at the same time as a condition change). You can
     * check for this in the callback using g_cancellable_is_cancelled().
     * 
     * This takes a reference on `server` until `source` is destroyed.
     * @param cancellable a #GCancellable or %NULL.
     */
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    /**
     * Get the address on which the server will accept connections.
     */
    get_address(): string | null
    /**
     * Get the #GstRTSPAuth used as the authentication manager of `server`.
     */
    get_auth(): RTSPAuth | null
    /**
     * The maximum amount of queued requests for the server.
     */
    get_backlog(): number
    /**
     * Get the port number where the server was bound to.
     */
    get_bound_port(): number
    /**
     * Get the Content-Length limit of `server`.
     */
    get_content_length_limit(): number
    /**
     * Get the #GstRTSPMountPoints used as the mount points of `server`.
     */
    get_mount_points(): RTSPMountPoints | null
    /**
     * Get the service on which the server will accept connections.
     */
    get_service(): string | null
    /**
     * Get the #GstRTSPSessionPool used as the session pool of `server`.
     */
    get_session_pool(): RTSPSessionPool | null
    /**
     * Get the #GstRTSPThreadPool used as the thread pool of `server`.
     */
    get_thread_pool(): RTSPThreadPool | null
    /**
     * Configure `server` to accept connections on the given address.
     * 
     * This function must be called before the server is bound.
     * @param address the address
     */
    set_address(address: string): void
    /**
     * configure `auth` to be used as the authentication manager of `server`.
     * @param auth a #GstRTSPAuth
     */
    set_auth(auth?: RTSPAuth | null): void
    /**
     * configure the maximum amount of requests that may be queued for the
     * server.
     * 
     * This function must be called before the server is bound.
     * @param backlog the backlog
     */
    set_backlog(backlog: number): void
    /**
     * Define an appropriate request size limit and reject requests exceeding the
     * limit.
     * @param limit 
     */
    set_content_length_limit(limit: number): void
    /**
     * configure `mounts` to be used as the mount points of `server`.
     * @param mounts a #GstRTSPMountPoints
     */
    set_mount_points(mounts?: RTSPMountPoints | null): void
    /**
     * Configure `server` to accept connections on the given service.
     * `service` should be a string containing the service name (see services(5)) or
     * a string containing a port number between 1 and 65535.
     * 
     * When `service` is set to "0", the server will listen on a random free
     * port. The actual used port can be retrieved with
     * gst_rtsp_server_get_bound_port().
     * 
     * This function must be called before the server is bound.
     * @param service the service
     */
    set_service(service: string): void
    /**
     * configure `pool` to be used as the session pool of `server`.
     * @param pool a #GstRTSPSessionPool
     */
    set_session_pool(pool?: RTSPSessionPool | null): void
    /**
     * configure `pool` to be used as the thread pool of `server`.
     * @param pool a #GstRTSPThreadPool
     */
    set_thread_pool(pool?: RTSPThreadPool | null): void
    /**
     * Take an existing network socket and use it for an RTSP connection. This
     * is used when transferring a socket from an HTTP server which should be used
     * as an RTSP over HTTP tunnel. The `initial_buffer` contains any remaining data
     * that the HTTP server read from the socket while parsing the HTTP header.
     * @param socket a network socket
     * @param ip the IP address of the remote client
     * @param port the port used by the other end
     * @param initial_buffer any initial data that was already read from the socket
     */
    transfer_connection(socket: Gio.Socket, ip: string, port: number, initial_buffer?: string | null): boolean
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    vfunc_client_connected(client: RTSPClient): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    connect(sigName: "client-connected", callback: (($obj: RTSPOnvifServer, object: RTSPClient) => void)): number
    connect_after(sigName: "client-connected", callback: (($obj: RTSPOnvifServer, object: RTSPClient) => void)): number
    emit(sigName: "client-connected", object: RTSPClient): void
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
    connect(sigName: "notify", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backlog", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backlog", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bound-port", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bound-port", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-length-limit", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length-limit", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPOnvifServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPOnvifServer_ConstructProps)
    _init (config?: RTSPOnvifServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPOnvifServer
    static $gtype: GObject.Type
}
interface RTSPServer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    address?: string
    backlog?: number
    content_length_limit?: number
    mount_points?: RTSPMountPoints
    service?: string
    session_pool?: RTSPSessionPool
}
class RTSPServer {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    address: string
    backlog: number
    readonly bound_port: number
    content_length_limit: number
    mount_points: RTSPMountPoints
    service: string
    session_pool: RTSPSessionPool
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    /**
     * Attaches `server` to `context`. When the mainloop for `context` is run, the
     * server will be dispatched. When `context` is %NULL, the default context will be
     * used).
     * 
     * This function should be called when the server properties and urls are fully
     * configured and the server is ready to start.
     * 
     * This takes a reference on `server` until the source is destroyed. Note that
     * if `context` is not the default main context as returned by
     * g_main_context_default() (or %NULL), g_source_remove() cannot be used to
     * destroy the source. In that case it is recommended to use
     * gst_rtsp_server_create_source() and attach it to `context` manually.
     * @param context a #GMainContext
     */
    attach(context?: GLib.MainContext | null): number
    /**
     * Call `func` for each client managed by `server`. The result value of `func`
     * determines what happens to the client. `func` will be called with `server`
     * locked so no further actions on `server` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the client will be removed from
     * `server`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the client will remain in `server`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the client will remain in `server` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each client.
     * @param func a callback
     */
    client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[]
    /**
     * Create a #GSocket for `server`. The socket will listen on the
     * configured service.
     * @param cancellable a #GCancellable
     */
    create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket
    /**
     * Create a #GSource for `server`. The new source will have a default
     * #GSocketSourceFunc of gst_rtsp_server_io_func().
     * 
     * `cancellable` if not %NULL can be used to cancel the source, which will cause
     * the source to trigger, reporting the current condition (which is likely 0
     * unless cancellation happened at the same time as a condition change). You can
     * check for this in the callback using g_cancellable_is_cancelled().
     * 
     * This takes a reference on `server` until `source` is destroyed.
     * @param cancellable a #GCancellable or %NULL.
     */
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    /**
     * Get the address on which the server will accept connections.
     */
    get_address(): string | null
    /**
     * Get the #GstRTSPAuth used as the authentication manager of `server`.
     */
    get_auth(): RTSPAuth | null
    /**
     * The maximum amount of queued requests for the server.
     */
    get_backlog(): number
    /**
     * Get the port number where the server was bound to.
     */
    get_bound_port(): number
    /**
     * Get the Content-Length limit of `server`.
     */
    get_content_length_limit(): number
    /**
     * Get the #GstRTSPMountPoints used as the mount points of `server`.
     */
    get_mount_points(): RTSPMountPoints | null
    /**
     * Get the service on which the server will accept connections.
     */
    get_service(): string | null
    /**
     * Get the #GstRTSPSessionPool used as the session pool of `server`.
     */
    get_session_pool(): RTSPSessionPool | null
    /**
     * Get the #GstRTSPThreadPool used as the thread pool of `server`.
     */
    get_thread_pool(): RTSPThreadPool | null
    /**
     * Configure `server` to accept connections on the given address.
     * 
     * This function must be called before the server is bound.
     * @param address the address
     */
    set_address(address: string): void
    /**
     * configure `auth` to be used as the authentication manager of `server`.
     * @param auth a #GstRTSPAuth
     */
    set_auth(auth?: RTSPAuth | null): void
    /**
     * configure the maximum amount of requests that may be queued for the
     * server.
     * 
     * This function must be called before the server is bound.
     * @param backlog the backlog
     */
    set_backlog(backlog: number): void
    /**
     * Define an appropriate request size limit and reject requests exceeding the
     * limit.
     * @param limit 
     */
    set_content_length_limit(limit: number): void
    /**
     * configure `mounts` to be used as the mount points of `server`.
     * @param mounts a #GstRTSPMountPoints
     */
    set_mount_points(mounts?: RTSPMountPoints | null): void
    /**
     * Configure `server` to accept connections on the given service.
     * `service` should be a string containing the service name (see services(5)) or
     * a string containing a port number between 1 and 65535.
     * 
     * When `service` is set to "0", the server will listen on a random free
     * port. The actual used port can be retrieved with
     * gst_rtsp_server_get_bound_port().
     * 
     * This function must be called before the server is bound.
     * @param service the service
     */
    set_service(service: string): void
    /**
     * configure `pool` to be used as the session pool of `server`.
     * @param pool a #GstRTSPSessionPool
     */
    set_session_pool(pool?: RTSPSessionPool | null): void
    /**
     * configure `pool` to be used as the thread pool of `server`.
     * @param pool a #GstRTSPThreadPool
     */
    set_thread_pool(pool?: RTSPThreadPool | null): void
    /**
     * Take an existing network socket and use it for an RTSP connection. This
     * is used when transferring a socket from an HTTP server which should be used
     * as an RTSP over HTTP tunnel. The `initial_buffer` contains any remaining data
     * that the HTTP server read from the socket while parsing the HTTP header.
     * @param socket a network socket
     * @param ip the IP address of the remote client
     * @param port the port used by the other end
     * @param initial_buffer any initial data that was already read from the socket
     */
    transfer_connection(socket: Gio.Socket, ip: string, port: number, initial_buffer?: string | null): boolean
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    vfunc_client_connected(client: RTSPClient): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPServer */
    connect(sigName: "client-connected", callback: (($obj: RTSPServer, object: RTSPClient) => void)): number
    connect_after(sigName: "client-connected", callback: (($obj: RTSPServer, object: RTSPClient) => void)): number
    emit(sigName: "client-connected", object: RTSPClient): void
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
    connect(sigName: "notify", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backlog", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backlog", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bound-port", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bound-port", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-length-limit", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length-limit", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mount-points", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-points", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::session-pool", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-pool", callback: (($obj: RTSPServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPServer_ConstructProps)
    _init (config?: RTSPServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPServer
    /**
     * A default #GSocketSourceFunc that creates a new #GstRTSPClient to accept and handle a
     * new connection on `socket` or `server`.
     * @param socket a #GSocket
     * @param condition the condition on `source`
     * @param server a #GstRTSPServer
     */
    static io_func(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean
    static $gtype: GObject.Type
}
interface RTSPSession_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPSession */
    extra_timeout?: number
    sessionid?: string
    timeout?: number
    timeout_always_visible?: boolean
}
class RTSPSession {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPSession */
    extra_timeout: number
    readonly sessionid: string
    timeout: number
    timeout_always_visible: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPSession */
    /**
     * Allow `session` to expire. This method must be called an equal
     * amount of time as gst_rtsp_session_prevent_expire().
     */
    allow_expire(): void
    /**
     * Gets the session media for `path,` increasing its reference count. `matched`
     * will contain the number of matched characters of `path`.
     * @param path the path for the media
     */
    dup_media(path: string): [ /* returnType */ RTSPSessionMedia | null, /* matched */ number ]
    /**
     * Call `func` for each media in `sess`. The result value of `func` determines
     * what happens to the media. `func` will be called with `sess`
     * locked so no further actions on `sess` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the media will be removed from
     * `sess`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the media will remain in `sess`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the media will remain in `sess` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for all media.
     * @param func a callback
     */
    filter(func?: RTSPSessionFilterFunc | null): RTSPSessionMedia[]
    /**
     * Get the string that can be placed in the Session header field.
     */
    get_header(): string | null
    /**
     * Gets the session media for `path`. `matched` will contain the number of matched
     * characters of `path`.
     * @param path the path for the media
     */
    get_media(path: string): [ /* returnType */ RTSPSessionMedia | null, /* matched */ number ]
    /**
     * Get the sessionid of `session`.
     */
    get_sessionid(): string | null
    /**
     * Get the timeout value of `session`.
     */
    get_timeout(): number
    /**
     * Check if `session` timeout out.
     * @param now the current system time
     */
    is_expired(now: GLib.TimeVal): boolean
    /**
     * Check if `session` timeout out.
     * @param now the current monotonic time
     */
    is_expired_usec(now: number): boolean
    /**
     * Manage the media object `obj` in `sess`. `path` will be used to retrieve this
     * media from the session with gst_rtsp_session_get_media().
     * 
     * Ownership is taken from `media`.
     * @param path the path for the media
     * @param media a #GstRTSPMedia
     */
    manage_media(path: string, media: RTSPMedia): RTSPSessionMedia
    /**
     * Get the amount of milliseconds till the session will expire.
     * @param now the current system time
     */
    next_timeout(now: GLib.TimeVal): number
    /**
     * Get the amount of milliseconds till the session will expire.
     * @param now the current monotonic time
     */
    next_timeout_usec(now: number): number
    /**
     * Prevent `session` from expiring.
     */
    prevent_expire(): void
    /**
     * Release the managed `media` in `sess,` freeing the memory allocated by it.
     * @param media a #GstRTSPMedia
     */
    release_media(media: RTSPSessionMedia): boolean
    /**
     * Configure `session` for a timeout of `timeout` seconds. The session will be
     * cleaned up when there is no activity for `timeout` seconds.
     * @param timeout the new timeout
     */
    set_timeout(timeout: number): void
    /**
     * Update the last_access time of the session to the current time.
     */
    touch(): void
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
    connect(sigName: "notify", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sessionid", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sessionid", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout-always-visible", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout-always-visible", callback: (($obj: RTSPSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPSession_ConstructProps)
    _init (config?: RTSPSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sessionid: string): RTSPSession
    static $gtype: GObject.Type
}
interface RTSPSessionMedia_ConstructProps extends GObject.Object_ConstructProps {
}
class RTSPSessionMedia {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia */
    /**
     * Fill `range` with the next available min and max channels for
     * interleaved transport.
     */
    alloc_channels(): [ /* returnType */ boolean, /* range */ GstRtsp.RTSPRange ]
    /**
     * Get the base_time of the #GstRTSPMedia in `media`
     */
    get_base_time(): Gst.ClockTime
    /**
     * Get the #GstRTSPMedia that was used when constructing `media`
     */
    get_media(): RTSPMedia | null
    /**
     * Retrieve the RTP-Info header string for all streams in `media`
     * with configured transports.
     */
    get_rtpinfo(): string | null
    /**
     * Get the current RTSP state of `media`.
     */
    get_rtsp_state(): GstRtsp.RTSPState
    /**
     * Get a previously created #GstRTSPStreamTransport for the stream at `idx`.
     * @param idx the stream index
     */
    get_transport(idx: number): RTSPStreamTransport | null
    /**
     * Get a list of all available #GstRTSPStreamTransport in this session.
     */
    get_transports(): RTSPStreamTransport[]
    /**
     * Check if the path of `media` matches `path`. It `path` matches, the amount of
     * matched characters is returned in `matched`.
     * @param path a path
     */
    matches(path: string): [ /* returnType */ boolean, /* matched */ number ]
    /**
     * Set the RTSP state of `media` to `state`.
     * @param state a #GstRTSPState
     */
    set_rtsp_state(state: GstRtsp.RTSPState): void
    /**
     * Tell the media object `media` to change to `state`.
     * @param state the new state
     */
    set_state(state: Gst.State): boolean
    /**
     * Configure the transport for `stream` to `tr` in `media`.
     * @param stream a #GstRTSPStream
     * @param tr a #GstRTSPTransport
     */
    set_transport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
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
    connect(sigName: "notify", callback: (($obj: RTSPSessionMedia, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPSessionMedia, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPSessionMedia_ConstructProps)
    _init (config?: RTSPSessionMedia_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, media: RTSPMedia): RTSPSessionMedia
    static $gtype: GObject.Type
}
interface RTSPSessionPool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    max_sessions?: number
}
class RTSPSessionPool {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    max_sessions: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    /**
     * Inspect all the sessions in `pool` and remove the sessions that are inactive
     * for more than their timeout.
     */
    cleanup(): number
    /**
     * Create a new #GstRTSPSession object in `pool`.
     */
    create(): RTSPSession | null
    /**
     * Create a #GSource that will be dispatched when the session should be cleaned
     * up.
     */
    create_watch(): GLib.Source
    /**
     * Call `func` for each session in `pool`. The result value of `func` determines
     * what happens to the session. `func` will be called with the session pool
     * locked so no further actions on `pool` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the session will be set to the
     * expired state and removed from `pool`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the session will remain in `pool`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the session will remain in `pool` but
     * will also be added with an additional ref to the result GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for all sessions.
     * @param func a callback
     */
    filter(func?: RTSPSessionPoolFilterFunc | null): RTSPSession[]
    /**
     * Find the session with `sessionid` in `pool`. The access time of the session
     * will be updated with gst_rtsp_session_touch().
     * @param sessionid the session id
     */
    find(sessionid: string): RTSPSession | null
    /**
     * Get the maximum allowed number of sessions in `pool`. 0 means an unlimited
     * amount of sessions.
     */
    get_max_sessions(): number
    /**
     * Get the amount of active sessions in `pool`.
     */
    get_n_sessions(): number
    /**
     * Remove `sess` from `pool,` releasing the ref that the pool has on `sess`.
     * @param sess a #GstRTSPSession
     */
    remove(sess: RTSPSession): boolean
    /**
     * Configure the maximum allowed number of sessions in `pool` to `max`.
     * A value of 0 means an unlimited amount of sessions.
     * @param max the maximum number of sessions
     */
    set_max_sessions(max: number): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    vfunc_create_session_id(): string
    vfunc_session_removed(session: RTSPSession): void
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool */
    connect(sigName: "session-removed", callback: (($obj: RTSPSessionPool, object: RTSPSession) => void)): number
    connect_after(sigName: "session-removed", callback: (($obj: RTSPSessionPool, object: RTSPSession) => void)): number
    emit(sigName: "session-removed", object: RTSPSession): void
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
    connect(sigName: "notify", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-sessions", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-sessions", callback: (($obj: RTSPSessionPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPSessionPool_ConstructProps)
    _init (config?: RTSPSessionPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPSessionPool
    static $gtype: GObject.Type
}
interface RTSPStream_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    control?: string
    profiles?: GstRtsp.RTSPProfile
    protocols?: GstRtsp.RTSPLowerTrans
}
class RTSPStream {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    control: string
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    /**
     * Add multicast client address to stream. At this point, the sockets that
     * will stream RTP and RTCP data to `destination` are supposed to be
     * allocated.
     * @param destination a multicast address to add
     * @param rtp_port RTP port
     * @param rtcp_port RTCP port
     * @param family socket family
     */
    add_multicast_client_address(destination: string, rtp_port: number, rtcp_port: number, family: Gio.SocketFamily): boolean
    /**
     * Add the transport in `trans` to `stream`. The media of `stream` will
     * then also be send to the values configured in `trans`. Adding the
     * same transport twice will not add it a second time.
     * 
     * `stream` must be joined to a bin.
     * 
     * `trans` must contain a valid #GstRTSPTransport.
     * @param trans a #GstRTSPStreamTransport
     */
    add_transport(trans: RTSPStreamTransport): boolean
    /**
     * Allocates RTP and RTCP ports.
     * @param family protocol family
     * @param transport transport method
     * @param use_client_settings Whether to use client settings or not
     */
    allocate_udp_sockets(family: Gio.SocketFamily, transport: GstRtsp.RTSPTransport, use_client_settings: boolean): boolean
    /**
     * Add a receiver and sender part to the pipeline based on the transport from
     * SETUP.
     * @param transport a #GstRTSPTransport
     */
    complete_stream(transport: GstRtsp.RTSPTransport): boolean
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `stream`.
     */
    get_address_pool(): RTSPAddressPool | null
    /**
     * Get the size of the UDP transmission buffer (in bytes)
     */
    get_buffer_size(): number
    /**
     * Retrieve the current caps of `stream`.
     */
    get_caps(): Gst.Caps | null
    /**
     * Get the control string to identify this stream.
     */
    get_control(): string | null
    get_current_seqnum(): number
    /**
     * Get the configured DSCP QoS in of the outgoing sockets.
     */
    get_dscp_qos(): number
    /**
     * Get the stream index.
     */
    get_index(): number
    /**
     * Get the previous joined bin with gst_rtsp_stream_join_bin() or NULL.
     */
    get_joined_bin(): Gst.Bin | null
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    get_max_mcast_ttl(): number
    /**
     * Get the configured MTU in the payloader of `stream`.
     */
    get_mtu(): number
    /**
     * Get the multicast address of `stream` for `family`. The original
     * #GstRTSPAddress is cached and copy is returned, so freeing the return value
     * won't release the address from the pool.
     * @param family the #GSocketFamily
     */
    get_multicast_address(family: Gio.SocketFamily): RTSPAddress | null
    /**
     * Get all multicast client addresses that RTP data will be sent to
     */
    get_multicast_client_addresses(): string
    /**
     * Get the multicast interface used for `stream`.
     */
    get_multicast_iface(): string | null
    /**
     * Get the allowed profiles of `stream`.
     */
    get_profiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `stream`.
     */
    get_protocols(): GstRtsp.RTSPLowerTrans
    /**
     * Get the stream payload type.
     */
    get_pt(): number
    /**
     * Gets if and how the stream clock should be published according to RFC7273.
     */
    get_publish_clock_mode(): RTSPPublishClockMode
    get_rate_control(): boolean
    /**
     * Retrieve the current rate and/or applied_rate.
     */
    get_rates(): [ /* returnType */ boolean, /* rate */ number | null, /* applied_rate */ number | null ]
    /**
     * Get the payload-type used for retransmission of this stream
     */
    get_retransmission_pt(): number
    /**
     * Get the amount of time to store retransmission data.
     */
    get_retransmission_time(): Gst.ClockTime
    /**
     * Get the multicast RTCP socket from `stream` for a `family`.
     * @param family the socket family
     */
    get_rtcp_multicast_socket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Get the RTCP socket from `stream` for a `family`.
     * 
     * `stream` must be joined to a bin.
     * @param family the socket family
     */
    get_rtcp_socket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Get the multicast RTP socket from `stream` for a `family`.
     * @param family the socket family
     */
    get_rtp_multicast_socket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Get the RTP socket from `stream` for a `family`.
     * 
     * `stream` must be joined to a bin.
     * @param family the socket family
     */
    get_rtp_socket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Retrieve the current rtptime, seq and running-time. This is used to
     * construct a RTPInfo reply header.
     */
    get_rtpinfo(): [ /* returnType */ boolean, /* rtptime */ number | null, /* seq */ number | null, /* clock_rate */ number | null, /* running_time */ Gst.ClockTime ]
    /**
     * Get the RTP session of this stream.
     */
    get_rtpsession(): GObject.Object
    /**
     * Fill `server_port` with the port pair used by the server. This function can
     * only be called when `stream` has been joined.
     * @param family the port family to get
     */
    get_server_port(family: Gio.SocketFamily): /* server_port */ GstRtsp.RTSPRange
    /**
     * Get the sinkpad associated with `stream`.
     */
    get_sinkpad(): Gst.Pad | null
    /**
     * Get the srcpad associated with `stream`.
     */
    get_srcpad(): Gst.Pad | null
    /**
     * Get the SRTP encoder for this stream.
     */
    get_srtp_encoder(): Gst.Element
    /**
     * Get the SSRC used by the RTP session of this stream. This function can only
     * be called when `stream` has been joined.
     */
    get_ssrc(): /* ssrc */ number
    get_ulpfec_enabled(): boolean
    get_ulpfec_percentage(): number
    get_ulpfec_pt(): number
    /**
     * Parse and handle a KeyMgmt header.
     * @param keymgmt a keymgmt header
     */
    handle_keymgmt(keymgmt: string): boolean
    /**
     * Check if `stream` has the control string `control`.
     * @param control a control string
     */
    has_control(control?: string | null): boolean
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    is_bind_mcast_address(): boolean
    /**
     * Check if `stream` is blocking on a #GstBuffer.
     */
    is_blocking(): boolean
    /**
     * See gst_rtsp_stream_set_client_side()
     */
    is_client_side(): boolean
    /**
     * Checks whether the stream is complete, contains the receiver and the sender
     * parts. As the stream contains sink(s) element(s), it's possible to perform
     * seek operations on it.
     */
    is_complete(): boolean
    /**
     * Checks whether the stream is a receiver.
     */
    is_receiver(): boolean
    /**
     * Checks whether the stream is a sender.
     */
    is_sender(): boolean
    /**
     * Check if `transport` can be handled by stream
     * @param transport a #GstRTSPTransport
     */
    is_transport_supported(transport: GstRtsp.RTSPTransport): boolean
    /**
     * Join the #GstBin `bin` that contains the element `rtpbin`.
     * 
     * `stream` will link to `rtpbin,` which must be inside `bin`. The elements
     * added to `bin` will be set to the state given in `state`.
     * @param bin a #GstBin to join
     * @param rtpbin a rtpbin element in `bin`
     * @param state the target state of the new elements
     */
    join_bin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State): boolean
    /**
     * Remove the elements of `stream` from `bin`.
     * @param bin a #GstBin
     * @param rtpbin a rtpbin #GstElement
     */
    leave_bin(bin: Gst.Bin, rtpbin: Gst.Element): boolean
    /**
     * Query the position of the stream in %GST_FORMAT_TIME. This only considers
     * the RTP parts of the pipeline and not the RTCP parts.
     */
    query_position(): [ /* returnType */ boolean, /* position */ number ]
    /**
     * Query the stop of the stream in %GST_FORMAT_TIME. This only considers
     * the RTP parts of the pipeline and not the RTCP parts.
     */
    query_stop(): [ /* returnType */ boolean, /* stop */ number ]
    /**
     * Handle an RTCP buffer for the stream. This method is usually called when a
     * message has been received from a client using the TCP transport.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     */
    recv_rtcp(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Handle an RTP buffer for the stream. This method is usually called when a
     * message has been received from a client using the TCP transport.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     */
    recv_rtp(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Remove the transport in `trans` from `stream`. The media of `stream` will
     * not be sent to the values configured in `trans`.
     * 
     * `stream` must be joined to a bin.
     * 
     * `trans` must contain a valid #GstRTSPTransport.
     * @param trans a #GstRTSPStreamTransport
     */
    remove_transport(trans: RTSPStreamTransport): boolean
    /**
     * Creating a rtxreceive bin
     * @param sessid the session id
     */
    request_aux_receiver(sessid: number): Gst.Element | null
    /**
     * Creating a rtxsend bin
     * @param sessid the session id
     */
    request_aux_sender(sessid: number): Gst.Element | null
    /**
     * Creating a rtpulpfecdec element
     * @param rtpbin 
     * @param sessid 
     */
    request_ulpfec_decoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null
    /**
     * Creating a rtpulpfecenc element
     * @param sessid 
     */
    request_ulpfec_encoder(sessid: number): Gst.Element | null
    /**
     * Reserve `address` and `port` as the address and port of `stream`. The original
     * #GstRTSPAddress is cached and copy is returned, so freeing the return value
     * won't release the address from the pool.
     * @param address an address
     * @param port a port
     * @param n_ports n_ports
     * @param ttl a TTL
     */
    reserve_address(address: string, port: number, n_ports: number, ttl: number): RTSPAddress | null
    /**
     * Checks whether the individual `stream` is seekable.
     */
    seekable(): boolean
    /**
     * configure `pool` to be used as the address pool of `stream`.
     * @param pool a #GstRTSPAddressPool
     */
    set_address_pool(pool?: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bind_mcast_addr the new value
     */
    set_bind_mcast_address(bind_mcast_addr: boolean): void
    /**
     * Blocks or unblocks the dataflow on `stream`.
     * @param blocked boolean indicating we should block or unblock
     */
    set_blocked(blocked: boolean): boolean
    /**
     * Set the size of the UDP transmission buffer (in bytes)
     * Needs to be set before the stream is joined to a bin.
     * @param size the buffer size
     */
    set_buffer_size(size: number): void
    /**
     * Sets the #GstRTSPStream as a 'client side' stream - used for sending
     * streams to an RTSP server via RECORD. This has the practical effect
     * of changing which UDP port numbers are used when setting up the local
     * side of the stream sending to be either the 'server' or 'client' pair
     * of a configured UDP transport.
     * @param client_side TRUE if this #GstRTSPStream is running on the 'client' side of an RTSP connection.
     */
    set_client_side(client_side: boolean): void
    /**
     * Set the control string in `stream`.
     * @param control a control string
     */
    set_control(control?: string | null): void
    /**
     * Configure the dscp qos of the outgoing sockets to `dscp_qos`.
     * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
     */
    set_dscp_qos(dscp_qos: number): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    set_max_mcast_ttl(ttl: number): boolean
    /**
     * Configure the mtu in the payloader of `stream` to `mtu`.
     * @param mtu a new MTU
     */
    set_mtu(mtu: number): void
    /**
     * configure `multicast_iface` to be used for `stream`.
     * @param multicast_iface a multicast interface name
     */
    set_multicast_iface(multicast_iface?: string | null): void
    /**
     * Configure the allowed profiles for `stream`.
     * @param profiles the new profiles
     */
    set_profiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `stream`.
     * @param protocols the new flags
     */
    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Configure a pt map between `pt` and `caps`.
     * @param pt the pt
     * @param caps a #GstCaps
     */
    set_pt_map(pt: number, caps: Gst.Caps): void
    /**
     * Sets if and how the stream clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    set_publish_clock_mode(mode: RTSPPublishClockMode): void
    /**
     * Define whether `stream` will follow the Rate-Control=no behaviour as specified
     * in the ONVIF replay spec.
     * @param enabled 
     */
    set_rate_control(enabled: boolean): void
    /**
     * Set the payload type (pt) for retransmission of this stream.
     * @param rtx_pt a #guint
     */
    set_retransmission_pt(rtx_pt: number): void
    /**
     * Set the amount of time to store retransmission packets.
     * @param time a #GstClockTime
     */
    set_retransmission_time(time: Gst.ClockTime): void
    set_seqnum_offset(seqnum: number): void
    /**
     * Sets the amount of redundancy to apply when creating ULPFEC
     * protection packets.
     * @param percentage 
     */
    set_ulpfec_percentage(percentage: number): void
    /**
     * Set the payload type to be used for ULPFEC protection packets
     * @param pt 
     */
    set_ulpfec_pt(pt: number): void
    /**
     * Call `func` for each transport managed by `stream`. The result value of `func`
     * determines what happens to the transport. `func` will be called with `stream`
     * locked so no further actions on `stream` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the transport will be removed from
     * `stream`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the transport will remain in `stream`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the transport will remain in `stream` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each transport.
     * @param func a callback
     */
    transport_filter(func?: RTSPStreamTransportFilterFunc | null): RTSPStreamTransport[]
    unblock_linked(): boolean
    /**
     * Remove blocking probe from the RTCP source. When creating an UDP source for
     * RTCP it is initially blocked until this function is called.
     * This functions should be called once the pipeline is ready for handling RTCP
     * packets.
     */
    unblock_rtcp(): void
    /**
     * Update the new crypto information for `ssrc` in `stream`. If information
     * for `ssrc` did not exist, it will be added. If information
     * for `ssrc` existed, it will be replaced. If `crypto` is %NULL, it will
     * be removed from `stream`.
     * @param ssrc the SSRC
     * @param crypto a #GstCaps with crypto info
     */
    update_crypto(ssrc: number, crypto?: Gst.Caps | null): boolean
    /**
     * Check if the requested multicast ttl value is allowed.
     * @param ttl a requested multicast ttl
     */
    verify_mcast_ttl(ttl: number): boolean
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
    /* Signals of GstRtspServer-1.0.GstRtspServer.RTSPStream */
    connect(sigName: "new-rtcp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    connect_after(sigName: "new-rtcp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    emit(sigName: "new-rtcp-encoder", object: Gst.Element): void
    connect(sigName: "new-rtp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    connect_after(sigName: "new-rtp-encoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    emit(sigName: "new-rtp-encoder", object: Gst.Element): void
    connect(sigName: "new-rtp-rtcp-decoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    connect_after(sigName: "new-rtp-rtcp-decoder", callback: (($obj: RTSPStream, object: Gst.Element) => void)): number
    emit(sigName: "new-rtp-rtcp-decoder", object: Gst.Element): void
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
    connect(sigName: "notify", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::profiles", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::profiles", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocols", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocols", callback: (($obj: RTSPStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPStream_ConstructProps)
    _init (config?: RTSPStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(idx: number, payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    static $gtype: GObject.Type
}
interface RTSPStreamTransport_ConstructProps extends GObject.Object_ConstructProps {
}
class RTSPStreamTransport {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport */
    /**
     * Get the RTP-Info string for `trans` and `start_time`.
     * @param start_time a star time
     */
    get_rtpinfo(start_time: Gst.ClockTime): string | null
    /**
     * Get the #GstRTSPStream used when constructing `trans`.
     */
    get_stream(): RTSPStream | null
    /**
     * Get the transport configured in `trans`.
     */
    get_transport(): GstRtsp.RTSPTransport | null
    /**
     * Get the url configured in `trans`.
     */
    get_url(): GstRtsp.RTSPUrl | null
    /**
     * Check if `trans` is timed out.
     */
    is_timed_out(): boolean
    /**
     * Signal the installed keep_alive callback for `trans`.
     */
    keep_alive(): void
    /**
     * Signal the installed message_sent / message_sent_full callback for `trans`.
     */
    message_sent(): void
    /**
     * Receive `buffer` on `channel` `trans`.
     * @param channel a channel
     * @param buffer a #GstBuffer
     */
    recv_data(channel: number, buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Send `buffer` to the installed RTCP callback for `trans`.
     * @param buffer a #GstBuffer
     */
    send_rtcp(buffer: Gst.Buffer): boolean
    /**
     * Send `buffer_list` to the installed RTCP callback for `trans`.
     * @param buffer_list a #GstBuffer
     */
    send_rtcp_list(buffer_list: Gst.BufferList): boolean
    /**
     * Send `buffer` to the installed RTP callback for `trans`.
     * @param buffer a #GstBuffer
     */
    send_rtp(buffer: Gst.Buffer): boolean
    /**
     * Send `buffer_list` to the installed RTP callback for `trans`.
     * @param buffer_list a #GstBufferList
     */
    send_rtp_list(buffer_list: Gst.BufferList): boolean
    /**
     * Activate or deactivate datatransfer configured in `trans`.
     * @param active new state of `trans`
     */
    set_active(active: boolean): boolean
    /**
     * Install callbacks that will be called when data for a stream should be sent
     * to a client. This is usually used when sending RTP/RTCP over TCP.
     * @param send_rtp a callback called when RTP should be sent
     * @param send_rtcp a callback called when RTCP should be sent
     */
    set_callbacks(send_rtp: RTSPSendFunc, send_rtcp: RTSPSendFunc): void
    /**
     * Install callbacks that will be called when RTCP packets are received from the
     * receiver of `trans`.
     * @param keep_alive a callback called when the receiver is active
     */
    set_keepalive(keep_alive: RTSPKeepAliveFunc): void
    /**
     * Install callbacks that will be called when data for a stream should be sent
     * to a client. This is usually used when sending RTP/RTCP over TCP.
     * @param send_rtp_list a callback called when RTP should be sent
     * @param send_rtcp_list a callback called when RTCP should be sent
     */
    set_list_callbacks(send_rtp_list: RTSPSendListFunc, send_rtcp_list: RTSPSendListFunc): void
    /**
     * Install a callback that will be called when a message has been sent on `trans`.
     * @param message_sent a callback called when a message has been sent
     */
    set_message_sent(message_sent: RTSPMessageSentFunc): void
    /**
     * Install a callback that will be called when a message has been sent on `trans`.
     * @param message_sent a callback called when a message has been sent
     */
    set_message_sent_full(message_sent: RTSPMessageSentFuncFull): void
    /**
     * Set the timed out state of `trans` to `timedout`
     * @param timedout timed out value
     */
    set_timed_out(timedout: boolean): void
    /**
     * Set `tr` as the client transport. This function takes ownership of the
     * passed `tr`.
     * @param tr a client #GstRTSPTransport
     */
    set_transport(tr: GstRtsp.RTSPTransport): void
    /**
     * Set `url` as the client url.
     * @param url a client #GstRTSPUrl
     */
    set_url(url?: GstRtsp.RTSPUrl | null): void
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
    connect(sigName: "notify", callback: (($obj: RTSPStreamTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPStreamTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPStreamTransport_ConstructProps)
    _init (config?: RTSPStreamTransport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
    static $gtype: GObject.Type
}
interface RTSPThreadPool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    max_threads?: number
}
class RTSPThreadPool {
    /* Properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    max_threads: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    /**
     * Get the maximum number of threads used for client connections.
     * See gst_rtsp_thread_pool_set_max_threads().
     */
    get_max_threads(): number
    /**
     * Get a new #GstRTSPThread for `type` and `ctx`.
     * @param type the #GstRTSPThreadType
     * @param ctx a #GstRTSPContext
     */
    get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null
    /**
     * Set the maximum threads used by the pool to handle client requests.
     * A value of 0 will use the pool mainloop, a value of -1 will use an
     * unlimited number of threads.
     * @param max_threads maximum threads
     */
    set_max_threads(max_threads: number): void
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
    /* Virtual methods of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool */
    vfunc_configure_thread(thread: RTSPThread, ctx: RTSPContext): void
    /**
     * Get a new #GstRTSPThread for `type` and `ctx`.
     * @param type the #GstRTSPThreadType
     * @param ctx a #GstRTSPContext
     */
    vfunc_get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null
    vfunc_thread_enter(thread: RTSPThread): void
    vfunc_thread_leave(thread: RTSPThread): void
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
    connect(sigName: "notify", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-threads", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-threads", callback: (($obj: RTSPThreadPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTSPThreadPool_ConstructProps)
    _init (config?: RTSPThreadPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RTSPThreadPool
    /**
     * Wait for all tasks to be stopped and free all allocated resources. This is
     * mainly used in test suites to ensure proper cleanup of internal data
     * structures.
     */
    static cleanup(): void
    static $gtype: GObject.Type
}
class RTSPAddress {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAddress */
    /**
     * the #GstRTSPAddressPool owner of this address
     */
    pool: RTSPAddressPool
    /**
     * the address
     */
    address: string
    /**
     * the port number
     */
    port: number
    /**
     * number of ports
     */
    n_ports: number
    /**
     * TTL or 0 for unicast addresses
     */
    ttl: number
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPAddress */
    /**
     * Make a copy of `addr`.
     */
    copy(): RTSPAddress
    /**
     * Free `addr` and releasing it back into the pool when owned by a
     * pool.
     */
    free(): void
    static name: string
}
abstract class RTSPAddressPoolClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAddressPoolClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class RTSPAddressPoolPrivate {
    static name: string
}
abstract class RTSPAuthClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPAuthClass */
    parent_class: GObject.ObjectClass
    authenticate: (auth: RTSPAuth, ctx: RTSPContext) => boolean
    check: (auth: RTSPAuth, ctx: RTSPContext, check: string) => boolean
    generate_authenticate_header: (auth: RTSPAuth, ctx: RTSPContext) => void
    accept_certificate: (auth: RTSPAuth, connection: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    static name: string
}
class RTSPAuthPrivate {
    static name: string
}
abstract class RTSPClientClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPClientClass */
    parent_class: GObject.ObjectClass
    create_sdp: (client: RTSPClient, media: RTSPMedia) => GstSdp.SDPMessage
    configure_client_media: (client: RTSPClient, media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext) => boolean
    configure_client_transport: (client: RTSPClient, ctx: RTSPContext, ct: GstRtsp.RTSPTransport) => boolean
    params_set: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    params_get: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    make_path_from_uri: (client: RTSPClient, uri: GstRtsp.RTSPUrl) => string
    adjust_play_mode: (client: RTSPClient, context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmode_interval: Gst.ClockTime, enable_rate_control: boolean) => GstRtsp.RTSPStatusCode
    adjust_play_response: (client: RTSPClient, context: RTSPContext) => GstRtsp.RTSPStatusCode
    closed: (client: RTSPClient) => void
    new_session: (client: RTSPClient, session: RTSPSession) => void
    options_request: (client: RTSPClient, ctx: RTSPContext) => void
    describe_request: (client: RTSPClient, ctx: RTSPContext) => void
    setup_request: (client: RTSPClient, ctx: RTSPContext) => void
    play_request: (client: RTSPClient, ctx: RTSPContext) => void
    pause_request: (client: RTSPClient, ctx: RTSPContext) => void
    teardown_request: (client: RTSPClient, ctx: RTSPContext) => void
    set_parameter_request: (client: RTSPClient, ctx: RTSPContext) => void
    get_parameter_request: (client: RTSPClient, ctx: RTSPContext) => void
    handle_response: (client: RTSPClient, ctx: RTSPContext) => void
    tunnel_http_response: (client: RTSPClient, request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage) => void
    send_message: (client: RTSPClient, ctx: RTSPContext, response: GstRtsp.RTSPMessage) => void
    handle_sdp: (client: RTSPClient, ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    announce_request: (client: RTSPClient, ctx: RTSPContext) => void
    record_request: (client: RTSPClient, ctx: RTSPContext) => void
    check_requirements: (client: RTSPClient, ctx: RTSPContext, arr: string) => string
    pre_options_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_describe_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_setup_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_play_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_pause_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_teardown_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_set_parameter_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_get_parameter_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_announce_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    pre_record_request: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    static name: string
}
class RTSPClientPrivate {
    static name: string
}
class RTSPContext {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPContext */
    /**
     * the server
     */
    server: RTSPServer
    /**
     * the connection
     */
    conn: GstRtsp.RTSPConnection
    /**
     * the client
     */
    client: RTSPClient
    /**
     * the complete request
     */
    request: GstRtsp.RTSPMessage
    /**
     * the complete url parsed from `request`
     */
    uri: GstRtsp.RTSPUrl
    /**
     * the parsed method of `uri`
     */
    method: GstRtsp.RTSPMethod
    /**
     * the current auth object or %NULL
     */
    auth: RTSPAuth
    /**
     * authorisation token
     */
    token: RTSPToken
    /**
     * the session, can be %NULL
     */
    session: RTSPSession
    /**
     * the session media for the url can be %NULL
     */
    sessmedia: RTSPSessionMedia
    /**
     * the media factory for the url, can be %NULL
     */
    factory: RTSPMediaFactory
    /**
     * the media for the url can be %NULL
     */
    media: RTSPMedia
    /**
     * the stream for the url can be %NULL
     */
    stream: RTSPStream
    /**
     * the response
     */
    response: GstRtsp.RTSPMessage
    /**
     * the stream transport, can be %NULL
     */
    trans: RTSPStreamTransport
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPContext */
    /**
     * Pops `ctx` off the context stack (verifying that `ctx`
     * is on the top of the stack).
     */
    pop_current(): void
    /**
     * Pushes `ctx` onto the context stack. The current
     * context can then be received using gst_rtsp_context_get_current().
     */
    push_current(): void
    static name: string
}
abstract class RTSPMediaClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaClass */
    parent_class: GObject.ObjectClass
    handle_message: (media: RTSPMedia, message: Gst.Message) => boolean
    prepare: (media: RTSPMedia, thread?: RTSPThread | null) => boolean
    unprepare: (media: RTSPMedia) => boolean
    suspend: (media: RTSPMedia) => boolean
    unsuspend: (media: RTSPMedia) => boolean
    convert_range: (media: RTSPMedia, range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit) => boolean
    query_position: (media: RTSPMedia, position: number) => boolean
    query_stop: (media: RTSPMedia, stop: number) => boolean
    setup_rtpbin: (media: RTSPMedia, rtpbin: Gst.Element) => boolean
    setup_sdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage, info: SDPInfo) => boolean
    new_stream: (media: RTSPMedia, stream: RTSPStream) => void
    removed_stream: (media: RTSPMedia, stream: RTSPStream) => void
    prepared: (media: RTSPMedia) => void
    unprepared: (media: RTSPMedia) => void
    target_state: (media: RTSPMedia, state: Gst.State) => void
    new_state: (media: RTSPMedia, state: Gst.State) => void
    handle_sdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    static name: string
}
abstract class RTSPMediaFactoryClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryClass */
    parent_class: GObject.ObjectClass
    gen_key: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => string
    create_element: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => Gst.Element
    construct: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => RTSPMedia
    configure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    media_constructed: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    media_configure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    static name: string
}
class RTSPMediaFactoryPrivate {
    static name: string
}
abstract class RTSPMediaFactoryURIClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURIClass */
    parent_class: RTSPMediaFactoryClass
    static name: string
}
class RTSPMediaFactoryURIPrivate {
    static name: string
}
class RTSPMediaPrivate {
    static name: string
}
abstract class RTSPMountPointsClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPMountPointsClass */
    parent_class: GObject.ObjectClass
    make_path: (mounts: RTSPMountPoints, url: GstRtsp.RTSPUrl) => string | null
    static name: string
}
class RTSPMountPointsPrivate {
    static name: string
}
abstract class RTSPOnvifClientClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClientClass */
    parent: RTSPClientClass
    static name: string
}
abstract class RTSPOnvifMediaClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaClass */
    parent: RTSPMediaClass
    static name: string
}
abstract class RTSPOnvifMediaFactoryClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactoryClass */
    parent: RTSPMediaFactoryClass
    has_backchannel_support: (factory: RTSPOnvifMediaFactory) => boolean
    static name: string
}
class RTSPOnvifMediaFactoryPrivate {
    static name: string
}
class RTSPOnvifMediaPrivate {
    static name: string
}
abstract class RTSPOnvifServerClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServerClass */
    parent: RTSPServerClass
    static name: string
}
class RTSPPermissions {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPPermissions */
    mini_object: Gst.MiniObject
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPPermissions */
    /**
     * Add a new `permission` for `role` to `permissions` with the access in `allowed`.
     * @param role a role
     * @param permission the permission
     * @param allowed whether the role has this permission or not
     */
    add_permission_for_role(role: string, permission: string, allowed: boolean): void
    /**
     * Add a new `role` to `permissions` without any permissions. You can add
     * permissions for the role with gst_rtsp_permissions_add_permission_for_role().
     * @param role a role
     */
    add_role(role: string): void
    /**
     * Add a new role to `permissions` based on `structure,` for example
     * given a role named `tester`, which should be granted a permission named
     * `permission1`, the structure could be created with:
     * 
     * ```
     * gst_structure_new ("tester", "permission1", G_TYPE_BOOLEAN, TRUE, NULL);
     * ```
     * @param structure 
     */
    add_role_from_structure(structure: Gst.Structure): void
    /**
     * Get all permissions for `role` in `permissions`.
     * @param role a role
     */
    get_role(role: string): Gst.Structure
    /**
     * Check if `role` in `permissions` is given permission for `permission`.
     * @param role a role
     * @param permission a permission
     */
    is_allowed(role: string, permission: string): boolean
    /**
     * Remove all permissions for `role` in `permissions`.
     * @param role a role
     */
    remove_role(role: string): void
    static name: string
    static new(): RTSPPermissions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RTSPPermissions
}
abstract class RTSPServerClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPServerClass */
    parent_class: GObject.ObjectClass
    client_connected: (server: RTSPServer, client: RTSPClient) => void
    static name: string
}
class RTSPServerPrivate {
    static name: string
}
abstract class RTSPSessionClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class RTSPSessionMediaClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionMediaClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class RTSPSessionMediaPrivate {
    static name: string
}
abstract class RTSPSessionPoolClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionPoolClass */
    parent_class: GObject.ObjectClass
    create_session_id: (pool: RTSPSessionPool) => string
    session_removed: (pool: RTSPSessionPool, session: RTSPSession) => void
    static name: string
}
class RTSPSessionPoolPrivate {
    static name: string
}
class RTSPSessionPrivate {
    static name: string
}
abstract class RTSPStreamClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class RTSPStreamPrivate {
    static name: string
}
abstract class RTSPStreamTransportClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransportClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class RTSPStreamTransportPrivate {
    static name: string
}
class RTSPThread {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPThread */
    /**
     * parent #GstMiniObject
     */
    mini_object: Gst.MiniObject
    /**
     * the thread type
     */
    type: RTSPThreadType
    /**
     * a #GMainContext
     */
    context: GLib.MainContext
    /**
     * a #GMainLoop
     */
    loop: GLib.MainLoop
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPThread */
    /**
     * Reuse the mainloop of `thread`
     */
    reuse(): boolean
    /**
     * Stop and unref `thread`. When no threads are using the mainloop, the thread
     * will be stopped and the final ref to `thread` will be released.
     */
    stop(): void
    static name: string
    static new(type: RTSPThreadType): RTSPThread
    constructor(type: RTSPThreadType)
    /* Static methods and pseudo-constructors */
    static new(type: RTSPThreadType): RTSPThread
}
abstract class RTSPThreadPoolClass {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPThreadPoolClass */
    parent_class: GObject.ObjectClass
    /**
     * a #GThreadPool used internally
     */
    pool: GLib.ThreadPool
    get_thread: (pool: RTSPThreadPool, type: RTSPThreadType, ctx: RTSPContext) => RTSPThread | null
    configure_thread: (pool: RTSPThreadPool, thread: RTSPThread, ctx: RTSPContext) => void
    thread_enter: (pool: RTSPThreadPool, thread: RTSPThread) => void
    thread_leave: (pool: RTSPThreadPool, thread: RTSPThread) => void
    static name: string
}
class RTSPThreadPoolPrivate {
    static name: string
}
class RTSPToken {
    /* Fields of GstRtspServer-1.0.GstRtspServer.RTSPToken */
    mini_object: Gst.MiniObject
    /* Methods of GstRtspServer-1.0.GstRtspServer.RTSPToken */
    /**
     * Get the string value of `field` in `token`.
     * @param field a field name
     */
    get_string(field: string): string | null
    /**
     * Access the structure of the token.
     */
    get_structure(): Gst.Structure
    /**
     * Check if `token` has a boolean `field` and if it is set to %TRUE.
     * @param field a field name
     */
    is_allowed(field: string): boolean
    /**
     * Sets a boolean value on `token`.
     * @param field field to set
     * @param bool_value boolean value to set
     */
    set_bool(field: string, bool_value: boolean): void
    /**
     * Sets a string value on `token`.
     * @param field field to set
     * @param string_value string value to set
     */
    set_string(field: string, string_value: string): void
    /**
     * Get a writable version of the structure.
     */
    writable_structure(): Gst.Structure
    static name: string
    static new(): RTSPToken
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): RTSPToken
}
class SDPInfo {
    /* Fields of GstRtspServer-1.0.GstRtspServer.SDPInfo */
    is_ipv6: boolean
    server_ip: string
    static name: string
}
}
export default GstRtspServer;