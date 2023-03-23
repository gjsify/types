
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Farstream-0.2
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Farstream {

/**
 * An enum for the type of candidate used/reported
 */
enum CandidateType {
    /**
     * A host candidate (local)
     */
    HOST,
    /**
     * A server reflexive candidate.
     */
    SRFLX,
    /**
     * A peer reflexive candidate
     */
    PRFLX,
    /**
     * An relay candidate
     */
    RELAY,
    /**
     * A multicast address
     */
    MULTICAST,
}
/**
 * This enum contains the component IDs defined in ICE-19
 */
enum ComponentType {
    /**
     * Use this when specifying a component is innapropriate
     */
    NONE,
    /**
     * This component is for RTP data
     */
    RTP,
    /**
     * This component is for RTCP control
     */
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
    /**
     * Send as a special payload type defined by RFC 4733
     * (which obsoletes RFC 2833)
     */
    RTP_RFC4733,
    /**
     * Send as tones as in-band audio sound
     */
    SOUND,
}
/**
 * This is the enum of error numbers that will come either on the "error"
 * signal, from the Gst Bus or for error in the FS_ERROR domain in GErrors
 */
enum Error {
    /**
     * Error constructing some of the sub-elements, this
     * probably denotes an error in the installation of the gstreamer elements.
     * It is a fatal error.
     */
    CONSTRUCTION,
    /**
     * An internal error happened in Farstream, it may be in
     * an inconsistent state. The object from which this error comes should be
     * discarded.
     */
    INTERNAL,
    /**
     * Invalid arguments to the function, this
     * is a programming error and should not be reported to the user
     */
    INVALID_ARGUMENTS,
    /**
     * A network related error, this should probably be
     *  reported to the user.
     */
    NETWORK,
    /**
     * The optional functionality is not implemented by
     * this plugin.
     */
    NOT_IMPLEMENTED,
    /**
     * The codec negotiation has failed, this means
     * that there are no common codecs between the local and remote codecs.
     */
    NEGOTIATION_FAILED,
    /**
     * Data is received on an unknown codec, this most
     * likely denotes an error on the remote side, the buffers will be ignored.
     * It can safely be ignored in most cases (but may result in a call with no
     * media received).
     */
    UNKNOWN_CODEC,
    /**
     * There are no codecs detected for that media type.
     */
    NO_CODECS,
    /**
     * All of the codecs have been disabled by the
     * codec preferences, one should try less strict codec preferences.
     */
    NO_CODECS_LEFT,
    /**
     * Could not connect to the to remote party.
     */
    CONNECTION_FAILED,
    /**
     * The object has been disposed.
     */
    DISPOSED,
    /**
     * The object already exists
     */
    ALREADY_EXISTS,
}
/**
 * Enum used to signify the media type of a codec or stream.
 */
enum MediaType {
    /**
     * A media type that encodes audio.
     */
    AUDIO,
    /**
     * A media type that encodes video.
     */
    VIDEO,
    /**
     * A media type for application data.
     */
    APPLICATION,
    /**
     * Largest valid #FsMediaType
     */
    LAST,
}
/**
 * An enum for the base IP protocol
 */
enum NetworkProtocol {
    /**
     * A UDP based protocol
     */
    UDP,
    /**
     * A TCP based protocol, will listen for
     * incoming connections
     */
    TCP,
    /**
     * A TCP based protocol, will listen for
     * incoming connections
     */
    TCP_PASSIVE,
    /**
     * A TCP based protocol, will attempt to
     * open an outbound connection
     */
    TCP_ACTIVE,
    /**
     * A TCP based protocol, will listen for
     * incoming connections and attempt an outbound connection at the same time
     * as the peer (Simultanuous-Open)
     */
    TCP_SO,
}
/**
 * These are the possible states of a stream, a simple multicast stream
 * could only be in "disconnected" or "ready" state.
 * An stream using an ICE transmitter would use all of these.
 */
enum StreamState {
    /**
     * connectivity checks have been completed,
     *                          but connectivity was not established
     */
    FAILED,
    /**
     * no activity scheduled
     */
    DISCONNECTED,
    /**
     * gathering local candidates
     */
    GATHERING,
    /**
     * establishing connectivity
     */
    CONNECTING,
    /**
     * at least one working candidate pair
     */
    CONNECTED,
    /**
     * ICE concluded, candidate pair selection is now final
     */
    READY,
}
/**
 * An enum for specifying the direction of a stream
 * @bitfield 
 */
enum StreamDirection {
    /**
     * No direction specified
     */
    NONE,
    /**
     * Send only
     */
    SEND,
    /**
     * Receive only
     */
    RECV,
    /**
     * Send and receive
     */
    BOTH,
}
/**
 * A format that can be used in printf like format strings to format a FsCodec
 */
const CODEC_FORMAT: string | null
/**
 * If the id of a #FsCodec is #FS_CODEC_ID_ANY, then it will be replaced
 * with a dynamic payload type at runtime
 */
const CODEC_ID_ANY: number
/**
 * If the id of a #FsCodec is #FS_CODEC_ID_DISABLE, then this codec will
 * not be used
 */
const CODEC_ID_DISABLE: number
/**
 * A format that can be used in printf like format strings to format a
 * FsRtpHeaderExtension
 */
const RTP_HEADER_EXTENSION_FORMAT: string | null
/**
 * Copies a GList of #FsCandidate and its contents
 * @param candidate_list A GList of #FsCandidate
 * @returns a new GList of #FsCandidate
 */
function candidate_list_copy(candidate_list: Codec[]): Codec[]
/**
 * Verifies if two glist of fscodecs are identical
 * @param list1 a #GList of #FsCodec
 * @param list2 a #GList of #FsCodec
 * @returns %TRUE if they are identical, %FALSE otherwise
 */
function codec_list_are_equal(list1: Codec[] | null, list2: Codec[] | null): boolean
/**
 * Copies a list of #FsCodec structures.
 * @param codec_list    a GList of #FsCodec to copy
 * @returns The new list.
 */
function codec_list_copy(codec_list: Codec[]): Codec[]
/**
 * Reads the content of a #GKeyFile of the following format into
 * a #GList of #FsCodec structures.
 * 
 * 
 * Example:
 * 
 * ```
 * [audio/codec1]
 * clock-rate=8000
 * 
 * [audio/codec1:1]
 * clock-rate=16000
 * 
 * [audio/codec2]
 * one_param=QCIF
 * another_param=WOW
 * 
 * [video/codec3]
 * wierd_param=42
 * feedback:nack/pli=1
 * feedback:tfrc=
 * ```
 * 
 * @param filename Name of the #GKeyFile to read the codecs parameters from
 * @returns  The #GList of #FsCodec or %NULL if the keyfile was empty or an error occured.
 */
function codec_list_from_keyfile(filename: string | null): Codec[]
function error_quark(): GLib.Quark
/**
 * Gives a user-printable string representing the media type
 * @param media_type A media type
 * @returns a static string representing the media type
 */
function media_type_to_string(media_type: MediaType): string | null
/**
 * Parses a "farstream-farstream" message and checks if it matches
 * the `object` parameters.
 * @param object a #GObject to match against the message
 * @param message a #GstMessage to parse
 * @returns %TRUE if the message matches the object and is valid.
 */
function parse_error(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* error_msg */ string | null ]
/**
 * Does a deep copy of a #GList of #FsRtpHeaderExtension
 * @param extensions    a #GList of #FsRtpHeaderExtension
 * @returns a new #GList of #FsRtpHeaderExtension
 */
function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[]
/**
 * Reads the content of a #GKeyFile of the following format into a
 * #GList of #FsRtpHeaderExtension structures.
 * 
 * The groups have a format "rtp-hdrext:audio:XXX" or
 * "rtp-hdrext:video:XXX" where XXX is a unique string (per media type).
 * 
 * The valid keys are:
 * <itemizedlist>
 *  <listitem>id: a int between in the 1-255 and 4096-4351 ranges</listitem>
 *  <listitem>uri: a URI describing the RTP Header Extension</listitem>
 *  <listitem>direction (optional): To only send or receive a RTP Header
 *      Extension, possible values are "send", "receive", "none" or "both".
 *      Defaults to "both"</listitem>
 * </itemizedlist>
 * 
 * Example:
 * 
 * ```
 * [rtp-hdrext:audio:a]
 * id=1
 * uri=urn:ietf:params:rtp-hdrext:toffset
 * 
 * [rtp-hdrext:audio:abc]
 * id=3
 * uri=urn:ietf:params:rtp-hdrext:ntp-64
 * direction=receive
 * ```
 * 
 * @param filename Name of the #GKeyFile to read the RTP Header Extensions from
 * @param media_type The media type for which to get header extensions
 * @returns a #GList of #FsRtpHeaderExtension that must be freed with fs_rtp_header_extension_list_destroy()
 */
function rtp_header_extension_list_from_keyfile(filename: string | null, media_type: MediaType): RtpHeaderExtension[]
/**
 * These default codec preferences should work with the elements that are
 * available in the main GStreamer element repositories.
 * They should be suitable for standards based protocols like SIP or XMPP.
 * @param element Element for which to fetch default codec preferences
 * @returns  The default codec preferences for this plugin. This #GList should be freed with fs_codec_list_destroy()
 */
function utils_get_default_codec_preferences(element: Gst.Element): Codec[]
/**
 * These default rtp header extension preferences should work with the elements
 * that are available in the main GStreamer element repositories.
 * They should be suitable for standards based protocols like SIP or XMPP.
 * @param element Element for which to fetch default RTP Header Extension preferences
 * @param media_type The #FsMediaType for which to get default RTP Header Extension  preferences
 * @returns The default rtp header extension preferences for this plugin, this #GList should be freed with fs_codec_list_destroy()
 */
function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[]
/**
 * This allows setting the bitrate on all elements that have a "bitrate"
 * property without having to know the type or of the unit used by that element.
 * 
 * This will be obsolete in 0.11 (when all elements use bit/sec for the
 * "bitrate" property.
 * @param element The #GstElement
 * @param bitrate The bitrate in bits/sec
 */
function utils_set_bitrate(element: Gst.Element, bitrate: number): void
/**
 * This is for the bindings benefit. Works around the limitations of GObject
 * introspection.
 * @param value a #GValue of type #FS_TYPE_CANDIDATE_LIST
 * @param candidates A #GList of #FsCandidate
 */
function value_set_candidate_list(value: any, candidates: Candidate[] | null): void
module Conference {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.ChildProxy.ConstructorProperties, Gst.Bin.ConstructorProperties {
    }

}

interface Conference extends Gst.ChildProxy {

    // Conflicting properties

    object: any

    // Own fields of Farstream-0.2.Farstream.Conference

    parent: Gst.Bin & Gst.Object

    // Owm methods of Farstream-0.2.Farstream.Conference

    /**
     * Create a new Farstream Participant for the type of the given conference.
     * @returns the new #FsParticipant that has been created. The #FsParticipant is owned by the user and he must unref it when he is done with it.
     */
    new_participant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @param media_type #FsMediaType of the new session
     * @returns the new #FsSession that has been created. The #FsSession must be unref'd by the user when closing the session.
     */
    new_session(media_type: MediaType): Session

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    get_property(name: string | null): /* value */ any

    // Overloads of get_property

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
    get_property(property_name: string | null, value: any): void
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
    get_property(property_name: string | null, value: any): void
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
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

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

    // Own virtual methods of Farstream-0.2.Farstream.Conference

    /**
     * Create a new Farstream Participant for the type of the given conference.
     * @virtual 
     * @returns the new #FsParticipant that has been created. The #FsParticipant is owned by the user and he must unref it when he is done with it.
     */
    vfunc_new_participant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @virtual 
     * @param media_type #FsMediaType of the new session
     * @returns the new #FsSession that has been created. The #FsSession must be unref'd by the user when closing the session.
     */
    vfunc_new_session(media_type: MediaType): Session

    // Class property signals of Farstream-0.2.Farstream.Conference

    connect(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #FsConference structure, all the members are private
 * @class 
 */
class Conference extends Gst.Bin {

    // Own properties of Farstream-0.2.Farstream.Conference

    static name: string
    static $gtype: GObject.GType<Conference>

    // Constructors of Farstream-0.2.Farstream.Conference

    constructor(config?: Conference.ConstructorProperties) 
    _init(config?: Conference.ConstructorProperties): void
}

module ElementAddedNotifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `element-added`
     */
    interface ElementAddedSignalCallback {
        ($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ElementAddedNotifier {

    // Own fields of Farstream-0.2.Farstream.ElementAddedNotifier

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.ElementAddedNotifier

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
     * @returns %TRUE if the #GstBin was being watched, %FALSE otherwise
     */
    remove(bin: Gst.Bin): boolean
    /**
     * Same as first calling fs_utils_get_default_element_properties() and using
     * the result with
     * fs_element_added_notifier_set_properties_from_keyfile() .
     * 
     * This is binding friendly (since GKeyFile doesn't have a boxed type).
     * @param element Element for which to set the default codec   preferences
     * @returns The id of the signal connection, this can be used to disconnect this property setter using g_signal_handler_disconnect().
     */
    set_default_properties(element: Gst.Element): number
    /**
     * Same as fs_element_added_notifier_set_properties_from_keyfile() but using
     * the name of the file to load instead of the #GKeyFile directly.
     * @param filename The name of the keyfile to use
     * @returns %TRUE if the file was successfully loaded, %FALSE otherwise
     */
    set_properties_from_file(filename: string | null): boolean
    /**
     * Using a #GKeyFile where the groups are the element's type or name
     * and the key=value are the property and its value, this function
     * will set the properties on the elements added to this object after
     * this function has been called.  It will take ownership of the
     * GKeyFile structure. It will first try the group as the element type, if that
     * does not match, it will check its name.
     * @param keyfile a #GKeyFile
     * @returns The id of the signal connection, this can be used to disconnect this property setter using g_signal_handler_disconnect().
     */
    set_properties_from_keyfile(keyfile: GLib.KeyFile): number

    // Own signals of Farstream-0.2.Farstream.ElementAddedNotifier

    connect(sigName: "element-added", callback: ElementAddedNotifier.ElementAddedSignalCallback): number
    connect_after(sigName: "element-added", callback: ElementAddedNotifier.ElementAddedSignalCallback): number
    emit(sigName: "element-added", bin: Gst.Bin, element: Gst.Element, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.ElementAddedNotifier

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private
 * @class 
 */
class ElementAddedNotifier extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.ElementAddedNotifier

    static name: string
    static $gtype: GObject.GType<ElementAddedNotifier>

    // Constructors of Farstream-0.2.Farstream.ElementAddedNotifier

    constructor(config?: ElementAddedNotifier.ConstructorProperties) 
    /**
     * Creates a new #FsElementAddedNotifier object
     * @constructor 
     * @returns the newly-created #FsElementAddedNotifier
     */
    constructor() 
    /**
     * Creates a new #FsElementAddedNotifier object
     * @constructor 
     * @returns the newly-created #FsElementAddedNotifier
     */
    static new(): ElementAddedNotifier
    _init(config?: ElementAddedNotifier.ConstructorProperties): void
}

module Participant {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Participant {

    // Own fields of Farstream-0.2.Farstream.Participant

    parent: GObject.Object

    // Class property signals of Farstream-0.2.Farstream.Participant

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private (access them using the properties)
 * @class 
 */
class Participant extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Participant

    static name: string
    static $gtype: GObject.GType<Participant>

    // Constructors of Farstream-0.2.Farstream.Participant

    constructor(config?: Participant.ConstructorProperties) 
    _init(config?: Participant.ConstructorProperties): void
}

module Plugin {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.TypePlugin.ConstructorProperties, GObject.TypeModule.ConstructorProperties {
    }

}

interface Plugin extends GObject.TypePlugin {

    // Own fields of Farstream-0.2.Farstream.Plugin

    /**
     * the parent object
     * @field 
     */
    parent: GObject.TypeModule

    // Conflicting methods

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     * @returns %FALSE if the plugin needed to be loaded and  loading the plugin failed.
     */
    use(): boolean

    // Overloads of use

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void

    // Class property signals of Farstream-0.2.Farstream.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This structure represents a plugin, it is opaque.
 * @class 
 */
class Plugin extends GObject.TypeModule {

    // Own properties of Farstream-0.2.Farstream.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Farstream-0.2.Farstream.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
    /**
     * Gets the list of all available plugins of a certain type
     * @param type_suffix Get list of plugins with this type suffix
     * @returns a newly allocated NULL terminated array of strings or %NULL if no strings were found. It should be freed with g_strfreev().
     */
    static list_available(type_suffix: string | null): string[]
}

module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        ($obj: Session, object: GObject.Object, error_no: Error, error_msg: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.Session

        /**
         * The #FsConference parent of this session. This property is a
         * construct param and is read-only.
         */
        conference?: Conference | null
        /**
         * The ID of the session, the first number of the pads linked to this session
         * will be this id
         */
        id?: number | null
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         */
        media_type?: MediaType | null
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        tos?: number | null
    }

}

interface Session {

    // Own properties of Farstream-0.2.Farstream.Session

    /**
     * These are the #GstCaps that can be fed into the session,
     * they are used to filter the codecs to only those that can
     * accepted those caps as input.
     */
    readonly allowed_sink_caps: Gst.Caps
    /**
     * These are the #GstCaps that the session can produce,
     * they are used to filter the codecs to only those that can
     * accepted those caps as output.
     */
    readonly allowed_src_caps: Gst.Caps
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
     * Retrieves previously set encryption parameters
     */
    readonly encryption_parameters: Gst.Structure
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

    // Own fields of Farstream-0.2.Farstream.Session

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.Session

    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @param old_codecs   Codecs previously retrieved from the #FsSession:codecs property
     * @param new_codecs    Codecs recently retrieved from the #FsSession:codecs property
     * @returns A new #GList of  #FsCodec that need to be resent or %NULL if there are none. This  list must be freed with fs_codec_list_destroy().
     */
    codecs_need_resend(old_codecs: Codec[] | null, new_codecs: Codec[] | null): Codec[]
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
    emit_error(error_no: number, error_msg: string | null): void
    /**
     * Returns the GType of the stream transmitter, bindings can use it
     * to validate/convert the parameters passed to fs_session_new_stream().
     * @param transmitter The name of the transmitter
     * @returns The #GType of the stream transmitter
     */
    get_stream_transmitter_type(transmitter: string | null): GObject.GType
    /**
     * Get the list of all available transmitters for this session.
     * @returns a newly-allocagted %NULL terminated array of named of transmitters or %NULL if no transmitter is needed for this type of session. It should be freed with g_strfreev().
     */
    list_transmitters(): string[]
    /**
     * This function creates a stream for the given participant into the active session.
     * @param participant #FsParticipant of a participant for the new stream
     * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
     * @returns the new #FsStream that has been created. User must unref the #FsStream when the stream is ended. If an error occured, returns NULL.
     */
    new_stream(participant: Participant, direction: StreamDirection): Stream
    /**
     * Parses a "farstream-codecs-changed" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the session and is valid.
     */
    parse_codecs_changed(message: Gst.Message): boolean
    /**
     * Parses a "farstream-send-codec-changed" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the session and is valid.
     */
    parse_send_codec_changed(message: Gst.Message): [ /* returnType */ boolean, /* codec */ Codec, /* secondary_codecs */ Codec[] ]
    /**
     * Parses a "farstream-telephony-event-started" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the session and is valid.
     */
    parse_telephony_event_started(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod, /* event */ DTMFEvent, /* volume */ number ]
    /**
     * Parses a "farstream-telephony-event-stopped" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the session and is valid.
     */
    parse_telephony_event_stopped(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod ]
    /**
     * Sets the allowed caps for the sink and source pads for this #FsSession.
     * Only codecs that can take the input specified by the `sink_caps` and
     * can produce output as specified by the `src_caps` will be produced
     * in the #FsSession:codecs property and so only those will be negotiated.
     * 
     * If %NULL is passed to either `src_caps` or `sink_caps,` it is not changed.
     * 
     * The default is "video/x-raw" for a video stream, "audio/x-raw" for an audio
     * stream and "ANY" for an application stream.
     * 
     * The values can be retrived using the #FsSession:allowed-src-caps and
     * #FsSession:allowed-sink-caps properties.
     * @param sink_caps Caps for the sink pad or %NULL
     * @param src_caps Caps for the src pad or %NULL
     * @returns %TRUE if the new filter caps were acceptable.
     */
    set_allowed_caps(sink_caps: Gst.Caps | null, src_caps: Gst.Caps | null): boolean
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
     * @param codec_preferences a #GList of #FsCodec with the   desired configuration
     * @returns %TRUE on success, %FALSE on error.
     */
    set_codec_preferences(codec_preferences: Codec[] | null): boolean
    /**
     * Sets encryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
     * @returns %TRUE if the encryption parameters could be set, %FALSE otherwise
     */
    set_encryption_parameters(parameters: Gst.Structure | null): boolean
    /**
     * This function will set the currently being sent codec for all streams in this
     * session. The given #FsCodec must be taken directly from the #codecs
     * property of the session. If the given codec is not in the codecs
     * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
     * copied so it must be free'd using fs_codec_destroy() when done.
     * @param send_codec a #FsCodec representing the codec to send
     * @returns %FALSE if the send codec couldn't be set.
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
     * @returns %TRUE if sucessful, it can return %FALSE if the #FsStream does not support this telephony event.
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
     * @returns %TRUE if sucessful, it can return %FALSE if the #FsSession does not support telephony events or if no telephony event is being sent
     */
    stop_telephony_event(): boolean

    // Own virtual methods of Farstream-0.2.Farstream.Session

    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @virtual 
     * @param old_codecs   Codecs previously retrieved from the #FsSession:codecs property
     * @param new_codecs    Codecs recently retrieved from the #FsSession:codecs property
     * @returns A new #GList of  #FsCodec that need to be resent or %NULL if there are none. This  list must be freed with fs_codec_list_destroy().
     */
    vfunc_codecs_need_resend(old_codecs: Codec[] | null, new_codecs: Codec[] | null): Codec[]
    /**
     * Returns the GType of the stream transmitter, bindings can use it
     * to validate/convert the parameters passed to fs_session_new_stream().
     * @virtual 
     * @param transmitter The name of the transmitter
     * @returns The #GType of the stream transmitter
     */
    vfunc_get_stream_transmitter_type(transmitter: string | null): GObject.GType
    /**
     * Get the list of all available transmitters for this session.
     * @virtual 
     * @returns a newly-allocagted %NULL terminated array of named of transmitters or %NULL if no transmitter is needed for this type of session. It should be freed with g_strfreev().
     */
    vfunc_list_transmitters(): string[]
    /**
     * This function creates a stream for the given participant into the active session.
     * @virtual 
     * @param participant #FsParticipant of a participant for the new stream
     * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
     * @returns the new #FsStream that has been created. User must unref the #FsStream when the stream is ended. If an error occured, returns NULL.
     */
    vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream
    /**
     * Sets the allowed caps for the sink and source pads for this #FsSession.
     * Only codecs that can take the input specified by the `sink_caps` and
     * can produce output as specified by the `src_caps` will be produced
     * in the #FsSession:codecs property and so only those will be negotiated.
     * 
     * If %NULL is passed to either `src_caps` or `sink_caps,` it is not changed.
     * 
     * The default is "video/x-raw" for a video stream, "audio/x-raw" for an audio
     * stream and "ANY" for an application stream.
     * 
     * The values can be retrived using the #FsSession:allowed-src-caps and
     * #FsSession:allowed-sink-caps properties.
     * @virtual 
     * @param sink_caps Caps for the sink pad or %NULL
     * @param src_caps Caps for the src pad or %NULL
     * @returns %TRUE if the new filter caps were acceptable.
     */
    vfunc_set_allowed_caps(sink_caps: Gst.Caps | null, src_caps: Gst.Caps | null): boolean
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
     * @virtual 
     * @param codec_preferences a #GList of #FsCodec with the   desired configuration
     * @returns %TRUE on success, %FALSE on error.
     */
    vfunc_set_codec_preferences(codec_preferences: Codec[] | null): boolean
    /**
     * Sets encryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @virtual 
     * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
     * @returns %TRUE if the encryption parameters could be set, %FALSE otherwise
     */
    vfunc_set_encryption_parameters(parameters: Gst.Structure | null): boolean
    /**
     * This function will set the currently being sent codec for all streams in this
     * session. The given #FsCodec must be taken directly from the #codecs
     * property of the session. If the given codec is not in the codecs
     * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
     * copied so it must be free'd using fs_codec_destroy() when done.
     * @virtual 
     * @param send_codec a #FsCodec representing the codec to send
     * @returns %FALSE if the send codec couldn't be set.
     */
    vfunc_set_send_codec(send_codec: Codec): boolean
    /**
     * This function will start sending a telephony event (such as a DTMF
     * tone) on the #FsSession. You have to call the function
     * fs_session_stop_telephony_event() to stop it.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-started" will
     * always be emitted when the event is actually played out.
     * @virtual 
     * @param event A #FsStreamDTMFEvent or another number defined at http://www.iana.org/assignments/audio-telephone-event-registry
     * @param volume The volume in dBm0 without the negative sign. Should be between 0 and 36. Higher values mean lower volume
     * @returns %TRUE if sucessful, it can return %FALSE if the #FsStream does not support this telephony event.
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
     * @virtual 
     * @returns %TRUE if sucessful, it can return %FALSE if the #FsSession does not support telephony events or if no telephony event is being sent
     */
    vfunc_stop_telephony_event(): boolean

    // Own signals of Farstream-0.2.Farstream.Session

    connect(sigName: "error", callback: Session.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Session.ErrorSignalCallback): number
    emit(sigName: "error", object: GObject.Object, error_no: Error, error_msg: string | null, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.Session

    connect(sigName: "notify::allowed-sink-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-sink-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowed-sink-caps", ...args: any[]): void
    connect(sigName: "notify::allowed-src-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-src-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowed-src-caps", ...args: any[]): void
    connect(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codec-preferences", ...args: any[]): void
    connect(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codecs", ...args: any[]): void
    connect(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codecs-without-config", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codecs-without-config", ...args: any[]): void
    connect(sigName: "notify::conference", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::conference", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::conference", ...args: any[]): void
    connect(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-send-codec", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-send-codec", ...args: any[]): void
    connect(sigName: "notify::encryption-parameters", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encryption-parameters", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encryption-parameters", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-type", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink-pad", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sink-pad", ...args: any[]): void
    connect(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
class Session extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of Farstream-0.2.Farstream.Session

    constructor(config?: Session.ConstructorProperties) 
    _init(config?: Session.ConstructorProperties): void
}

module Stream {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        ($obj: Stream, errorno: Error, error_msg: string | null): void
    }

    /**
     * Signal callback interface for `src-pad-added`
     */
    interface SrcPadAddedSignalCallback {
        ($obj: Stream, pad: Gst.Pad, codec: Codec): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.Stream

        /**
         * The direction of the stream. This property is set initially as a parameter
         * to the fs_session_new_stream() function. It can be changed later if
         * required by setting this property.
         */
        direction?: StreamDirection | null
        /**
         * The #FsParticipant for this stream. This property is a construct param and
         * is read-only construction.
         */
        participant?: Participant | null
        /**
         * The #FsSession for this stream. This property is a construct param and
         * is read-only construction.
         */
        session?: Session | null
    }

}

interface Stream {

    // Own properties of Farstream-0.2.Farstream.Stream

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
     * Retrieves previously set decryption parameters
     */
    readonly decryption_parameters: Gst.Structure
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

    // Own fields of Farstream-0.2.Farstream.Stream

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.Stream

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
     * @param candidates an #GList of #FsCandidate  representing the remote candidates
     * @returns TRUE if the candidate was valid, FALSE otherwise
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
    emit_error(error_no: number, error_msg: string | null): void
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
     * @param remote_candidates    a #GList of #FsCandidate to force
     * @returns %TRUE if the candidates could be forced, %FALSE otherwise
     */
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * Creates a #GstIterator that can be used to iterate the src pads of this
     * stream. These are the pads that were announced by #FsStream:src-pad-added
     * and are still valid.
     * @returns The #GstIterator
     */
    iterate_src_pads(): Gst.Iterator
    /**
     * Parses a "farstream-component-state-changed" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the stream and is valid.
     */
    parse_component_state_changed(message: Gst.Message): [ /* returnType */ boolean, /* component */ number, /* state */ StreamState ]
    /**
     * Parses a "farstream-local-candidates-prepared" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the stream and is valid.
     */
    parse_local_candidates_prepared(message: Gst.Message): boolean
    /**
     * Parses a "farstream-new-active-candidate-pair" message and checks
     * if it matches the `stream` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the stream and is valid.
     */
    parse_new_active_candidate_pair(message: Gst.Message): [ /* returnType */ boolean, /* local_candidate */ Candidate, /* remote_candidate */ Candidate ]
    /**
     * Parses a "farstream-new-local-candidate" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the stream and is valid.
     */
    parse_new_local_candidate(message: Gst.Message): [ /* returnType */ boolean, /* candidate */ Candidate ]
    /**
     * Parses a "farstream-recv-codecs-changed" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the stream and is valid.
     */
    parse_recv_codecs_changed(message: Gst.Message): [ /* returnType */ boolean, /* codecs */ Codec[] ]
    /**
     * Sets decryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @param parameters a #GstStructure containing the decryption  parameters
     * @returns %TRUE if the decryption parameters could be set, %FALSE otherwise
     */
    set_decryption_parameters(parameters: Gst.Structure): boolean
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @param remote_codecs a #GList of #FsCodec representing   the remote codecs
     * @returns %FALSE if the remote codecs couldn't be set.
     */
    set_remote_codecs(remote_codecs: Codec[]): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param stream_transmitter_parameters    an array of n_parameters #GParameter struct that will be passed   to the newly-create #FsStreamTransmitter
     * @returns %TRUE if the transmitter could be set, %FALSE otherwise
     */
    set_transmitter(transmitter: string | null, stream_transmitter_parameters: GObject.Parameter[] | null): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * 
     * This is the same as fs_stream_set_transmitter() except that the parameters
     * are passed in a #GHashTable to make it more friendly to GObject introspection
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param stream_transmitter_parameters    A #GHashTable of string->GValue containing the parameters.
     * @returns %TRUE if the transmitter could be set, %FALSE otherwise
     */
    set_transmitter_ht(transmitter: string | null, stream_transmitter_parameters: GLib.HashTable | null): boolean

    // Own virtual methods of Farstream-0.2.Farstream.Stream

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
     * @virtual 
     * @param id The id to add to the stream
     */
    vfunc_add_id(id: number): void
    /**
     * This function adds remote candidates. Any new candidates are
     * added to the list. The candidates will be used to establish a connection
     * with the peer. A copy will be made so the user must free the
     * passed candidate using fs_candidate_destroy() when done.
     * @virtual 
     * @param candidates an #GList of #FsCandidate  representing the remote candidates
     * @returns TRUE if the candidate was valid, FALSE otherwise
     */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @virtual 
     * @param remote_candidates    a #GList of #FsCandidate to force
     * @returns %TRUE if the candidates could be forced, %FALSE otherwise
     */
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * Sets decryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @virtual 
     * @param parameters a #GstStructure containing the decryption  parameters
     * @returns %TRUE if the decryption parameters could be set, %FALSE otherwise
     */
    vfunc_set_decryption_parameters(parameters: Gst.Structure): boolean
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @virtual 
     * @param remote_codecs a #GList of #FsCodec representing   the remote codecs
     * @returns %FALSE if the remote codecs couldn't be set.
     */
    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * @virtual 
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param stream_transmitter_parameters    an array of n_parameters #GParameter struct that will be passed   to the newly-create #FsStreamTransmitter
     * @returns %TRUE if the transmitter could be set, %FALSE otherwise
     */
    vfunc_set_transmitter(transmitter: string | null, stream_transmitter_parameters: GObject.Parameter[] | null): boolean

    // Own signals of Farstream-0.2.Farstream.Stream

    connect(sigName: "error", callback: Stream.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Stream.ErrorSignalCallback): number
    emit(sigName: "error", errorno: Error, error_msg: string | null, ...args: any[]): void
    connect(sigName: "src-pad-added", callback: Stream.SrcPadAddedSignalCallback): number
    connect_after(sigName: "src-pad-added", callback: Stream.SrcPadAddedSignalCallback): number
    emit(sigName: "src-pad-added", pad: Gst.Pad, codec: Codec, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.Stream

    connect(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-recv-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-recv-codecs", ...args: any[]): void
    connect(sigName: "notify::decryption-parameters", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decryption-parameters", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decryption-parameters", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::negotiated-codecs", ...args: any[]): void
    connect(sigName: "notify::participant", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::participant", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::participant", ...args: any[]): void
    connect(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-codecs", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-codecs", ...args: any[]): void
    connect(sigName: "notify::session", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
class Stream extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Stream

    static name: string
    static $gtype: GObject.GType<Stream>

    // Constructors of Farstream-0.2.Farstream.Stream

    constructor(config?: Stream.ConstructorProperties) 
    _init(config?: Stream.ConstructorProperties): void
}

module StreamTransmitter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        ($obj: StreamTransmitter, errorno: Error, error_msg: string | null): void
    }

    /**
     * Signal callback interface for `known-source-packet-received`
     */
    interface KnownSourcePacketReceivedSignalCallback {
        ($obj: StreamTransmitter, component: number, buffer: any): void
    }

    /**
     * Signal callback interface for `local-candidates-prepared`
     */
    interface LocalCandidatesPreparedSignalCallback {
        ($obj: StreamTransmitter): void
    }

    /**
     * Signal callback interface for `new-active-candidate-pair`
     */
    interface NewActiveCandidatePairSignalCallback {
        ($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate): void
    }

    /**
     * Signal callback interface for `new-local-candidate`
     */
    interface NewLocalCandidateSignalCallback {
        ($obj: StreamTransmitter, local_candidate: Candidate): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: StreamTransmitter, component: number, state: StreamState): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.StreamTransmitter

        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         */
        associate_on_source?: boolean | null
        preferred_local_candidates?: any | null
        /**
         * A network source #GstElement to be used by the #FsSession
         */
        sending?: boolean | null
    }

}

interface StreamTransmitter {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitter

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

    // Own fields of Farstream-0.2.Farstream.StreamTransmitter

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.StreamTransmitter

    /**
     * This function is used to add remote candidates to the transmitter
     * @param candidates a #GList of the remote candidates
     * @returns TRUE of the candidate could be added, FALSE if it couldnt   (and the #GError will be set)
     */
    add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function emit the "error" signal on a #FsStreamTransmitter, it should
     * only be called by subclasses.
     * @param error_no The number of the error
     * @param error_msg Error message (for the programmer)
     */
    emit_error(error_no: number, error_msg: string | null): void
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates a #GList of #FsCandidate to   force
     * @returns %TRUE if the candidates could be forced, %FALSE otherwise
     */
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * This function tells the transmitter to start gathering local candidates,
     * signals for new candidates and newly active candidates can be emitted
     * during the call to this function.
     * @returns %TRUE if it succeeds (or is not implemented), %FALSE otherwise
     */
    gather_local_candidates(): boolean
    /**
     * This functions stops the #FsStreamTransmitter, it must be called before
     * the last reference is dropped.
     */
    stop(): void

    // Own virtual methods of Farstream-0.2.Farstream.StreamTransmitter

    /**
     * This function is used to add remote candidates to the transmitter
     * @virtual 
     * @param candidates a #GList of the remote candidates
     * @returns TRUE of the candidate could be added, FALSE if it couldnt   (and the #GError will be set)
     */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @virtual 
     * @param remote_candidates a #GList of #FsCandidate to   force
     * @returns %TRUE if the candidates could be forced, %FALSE otherwise
     */
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * This function tells the transmitter to start gathering local candidates,
     * signals for new candidates and newly active candidates can be emitted
     * during the call to this function.
     * @virtual 
     * @returns %TRUE if it succeeds (or is not implemented), %FALSE otherwise
     */
    vfunc_gather_local_candidates(): boolean
    /**
     * This functions stops the #FsStreamTransmitter, it must be called before
     * the last reference is dropped.
     * @virtual 
     */
    vfunc_stop(): void

    // Own signals of Farstream-0.2.Farstream.StreamTransmitter

    connect(sigName: "error", callback: StreamTransmitter.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: StreamTransmitter.ErrorSignalCallback): number
    emit(sigName: "error", errorno: Error, error_msg: string | null, ...args: any[]): void
    connect(sigName: "known-source-packet-received", callback: StreamTransmitter.KnownSourcePacketReceivedSignalCallback): number
    connect_after(sigName: "known-source-packet-received", callback: StreamTransmitter.KnownSourcePacketReceivedSignalCallback): number
    emit(sigName: "known-source-packet-received", component: number, buffer: any, ...args: any[]): void
    connect(sigName: "local-candidates-prepared", callback: StreamTransmitter.LocalCandidatesPreparedSignalCallback): number
    connect_after(sigName: "local-candidates-prepared", callback: StreamTransmitter.LocalCandidatesPreparedSignalCallback): number
    emit(sigName: "local-candidates-prepared", ...args: any[]): void
    connect(sigName: "new-active-candidate-pair", callback: StreamTransmitter.NewActiveCandidatePairSignalCallback): number
    connect_after(sigName: "new-active-candidate-pair", callback: StreamTransmitter.NewActiveCandidatePairSignalCallback): number
    emit(sigName: "new-active-candidate-pair", local_candidate: Candidate, remote_candidate: Candidate, ...args: any[]): void
    connect(sigName: "new-local-candidate", callback: StreamTransmitter.NewLocalCandidateSignalCallback): number
    connect_after(sigName: "new-local-candidate", callback: StreamTransmitter.NewLocalCandidateSignalCallback): number
    emit(sigName: "new-local-candidate", local_candidate: Candidate, ...args: any[]): void
    connect(sigName: "state-changed", callback: StreamTransmitter.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: StreamTransmitter.StateChangedSignalCallback): number
    emit(sigName: "state-changed", component: number, state: StreamState, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.StreamTransmitter

    connect(sigName: "notify::associate-on-source", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associate-on-source", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::associate-on-source", ...args: any[]): void
    connect(sigName: "notify::preferred-local-candidates", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preferred-local-candidates", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preferred-local-candidates", ...args: any[]): void
    connect(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sending", callback: (($obj: StreamTransmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sending", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
class StreamTransmitter extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitter

    static name: string
    static $gtype: GObject.GType<StreamTransmitter>

    // Constructors of Farstream-0.2.Farstream.StreamTransmitter

    constructor(config?: StreamTransmitter.ConstructorProperties) 
    _init(config?: StreamTransmitter.ConstructorProperties): void
}

module Transmitter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        ($obj: Transmitter, errorno: Error, error_msg: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.Transmitter

        /**
         * The number of components to create
         */
        components?: number | null
        /**
         * Apply current stream time to buffers or provide buffers without
         * timestamps. Must be set before creating a stream transmitter.
         */
        do_timestamp?: boolean | null
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        tos?: number | null
    }

}

interface Transmitter {

    // Own properties of Farstream-0.2.Farstream.Transmitter

    /**
     * The number of components to create
     */
    readonly components: number
    /**
     * Apply current stream time to buffers or provide buffers without
     * timestamps. Must be set before creating a stream transmitter.
     */
    do_timestamp: boolean
    /**
     * A network source #GstElement to be used by the #FsSession
     * These element's sink must have async=FALSE
     * This element MUST provide a pad named "sink_\%u" per component.
     * These pads number must start at 1 (the \%u corresponds to the component
     * number).
     * These pads MUST be static pads.
     */
    readonly gst_sink: Gst.Element
    /**
     * A network source #GstElement to be used by the #FsSession
     * This element MUST provide a source pad named "src_%u" per component.
     * These pads number must start at 1 (the %u corresponds to the component
     * number).
     * These pads MUST be static pads.
     */
    readonly gst_src: Gst.Element
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos: number

    // Own fields of Farstream-0.2.Farstream.Transmitter

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.Transmitter

    /**
     * This function emit the "error" signal on a #FsTransmitter, it should
     * only be called by subclasses.
     * @param error_no The number of the error
     * @param error_msg Error message to be displayed to user
     */
    emit_error(error_no: number, error_msg: string | null): void
    /**
     * This function returns the GObject type for the stream transmitter.
     * This is meant for bindings that need to introspect the type of arguments
     * that can be passed to the _new_stream_transmitter.
     * @returns the #GType
     */
    get_stream_transmitter_type(): GObject.GType
    /**
     * This function will create a new #FsStreamTransmitter element for a
     * specific participant for this #FsTransmitter
     * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
     * @param n_parameters The number of parameters to pass to the newly created #FsStreamTransmitter
     * @param parameters an array of #GParameter
     * @returns a new #FsStreamTransmitter, or NULL if there is an  error
     */
    new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter

    // Own virtual methods of Farstream-0.2.Farstream.Transmitter

    /**
     * This function returns the GObject type for the stream transmitter.
     * This is meant for bindings that need to introspect the type of arguments
     * that can be passed to the _new_stream_transmitter.
     * @virtual 
     * @returns the #GType
     */
    vfunc_get_stream_transmitter_type(): GObject.GType
    /**
     * This function will create a new #FsStreamTransmitter element for a
     * specific participant for this #FsTransmitter
     * @virtual 
     * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
     * @param n_parameters The number of parameters to pass to the newly created #FsStreamTransmitter
     * @param parameters an array of #GParameter
     * @returns a new #FsStreamTransmitter, or NULL if there is an  error
     */
    vfunc_new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter

    // Own signals of Farstream-0.2.Farstream.Transmitter

    connect(sigName: "error", callback: Transmitter.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Transmitter.ErrorSignalCallback): number
    emit(sigName: "error", errorno: Error, error_msg: string | null, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.Transmitter

    connect(sigName: "notify::components", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::components", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::components", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-sink", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gst-sink", ...args: any[]): void
    connect(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gst-src", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gst-src", ...args: any[]): void
    connect(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tos", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
class Transmitter extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Transmitter

    static name: string
    static $gtype: GObject.GType<Transmitter>

    // Constructors of Farstream-0.2.Farstream.Transmitter

    constructor(config?: Transmitter.ConstructorProperties) 
    /**
     * This function creates a new transmitter of the requested type.
     * It will load the appropriate plugin as required.
     * @constructor 
     * @param type The type of transmitter to create
     * @param components The number of components to create
     * @param tos The Type of Service of the socket, max is 255
     * @returns a newly-created #FsTransmitter of the requested type    (or NULL if there is an error)
     */
    constructor(type: string | null, components: number, tos: number) 
    /**
     * This function creates a new transmitter of the requested type.
     * It will load the appropriate plugin as required.
     * @constructor 
     * @param type The type of transmitter to create
     * @param components The number of components to create
     * @param tos The Type of Service of the socket, max is 255
     * @returns a newly-created #FsTransmitter of the requested type    (or NULL if there is an error)
     */
    static new(type: string | null, components: number, tos: number): Transmitter
    _init(config?: Transmitter.ConstructorProperties): void
    /**
     * Get the list of all available transmitters
     * @returns a newly allocated array of strings containing the list of all available transmitters or %NULL if there are none. It should  be freed with g_strfreev().
     */
    static list_available(): string[]
}

interface Candidate {

    // Own fields of Farstream-0.2.Farstream.Candidate

    /**
     * a string representing the foundation of this candidate (maximum 32 chars)
     * @field 
     */
    foundation: string | null
    /**
     * value between 1 and 256 indicating which component this candidate represents (1 is RTP, 2 is RTCP, #FsComponentType can be used here)
     * @field 
     */
    component_id: number
    /**
     * IP in dotted format
     * @field 
     */
    ip: string | null
    /**
     * Port to use
     * @field 
     */
    port: number
    /**
     * IP of base in dotted format as defined in ICE-19.
     * @field 
     */
    base_ip: string | null
    /**
     * Port of base as defined in ICE-19.
     * @field 
     */
    base_port: number
    /**
     * #FsNetworkProtocol for ip protocol to use as candidate
     * @field 
     */
    proto: NetworkProtocol
    /**
     * Value between 0 and (2^31 - 1) representing the priority
     * @field 
     */
    priority: number
    /**
     * The #FsCandidateType of the candidate
     * @field 
     */
    type: CandidateType
    /**
     * Username to use to connect to client if necessary,
     *            NULL otherwise
     * @field 
     */
    username: string | null
    /**
     * Username to use to connect to client if necessary,
     *            NULL otherwise
     * @field 
     */
    password: string | null
    /**
     * The TTL used when sending Multicast packet (0 = auto)
     * @field 
     */
    ttl: number

    // Owm methods of Farstream-0.2.Farstream.Candidate

    /**
     * Copies a #FsCandidate and its contents.
     * @returns a new #FsCandidate
     */
    copy(): Candidate
}

/**
 * Struct to hold information about ICE-19 compliant candidates
 * @record 
 */
class Candidate {

    // Own properties of Farstream-0.2.Farstream.Candidate

    static name: string

    // Constructors of Farstream-0.2.Farstream.Candidate

    /**
     * Allocates a new #FsCandidate, the rest of the fields can be optionally
     * filled manually. See also fs_candidate_new_full()
     * @constructor 
     * @param foundation The foundation of the candidate
     * @param component_id The component this candidate is for
     * @param type The type of candidate
     * @param proto The protocol this component is for
     * @param ip The IP address of this component (can be NULL for local candidate to     mean any address)
     * @param port the UDP/TCP port
     * @returns a newly-allocated #FsCandidate
     */
    constructor(foundation: string | null, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number) 
    /**
     * Allocates a new #FsCandidate, the rest of the fields can be optionally
     * filled manually. See also fs_candidate_new_full()
     * @constructor 
     * @param foundation The foundation of the candidate
     * @param component_id The component this candidate is for
     * @param type The type of candidate
     * @param proto The protocol this component is for
     * @param ip The IP address of this component (can be NULL for local candidate to     mean any address)
     * @param port the UDP/TCP port
     * @returns a newly-allocated #FsCandidate
     */
    static new(foundation: string | null, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number): Candidate
    /**
     * Allocates a new #FsCandidate, filling all the fields. See also
     * fs_candidate_new()
     * @constructor 
     * @param foundation The foundation of the candidate
     * @param component_id The component this candidate is for
     * @param ip The IP address of this component (can be NULL for local candidate to     mean any address)
     * @param port the UDP/TCP port
     * @param base_ip IP of base in dotted format as defined in ICE-19.
     * @param base_port Port of base as defined in ICE-19.
     * @param proto The protocol this component is for
     * @param priority Value between 0 and (2^31 - 1) representing the priority
     * @param type The type of candidate
     * @param username Username to use to connect to client if necessary,            NULL otherwise
     * @param password Username to use to connect to client if necessary,            NULL otherwise
     * @param ttl The TTL used when sending Multicast packet (0 = auto)
     * @returns a newly-allocated #FsCandidate
     */
    static new_full(foundation: string | null, component_id: number, ip: string | null, port: number, base_ip: string | null, base_port: number, proto: NetworkProtocol, priority: number, type: CandidateType, username: string | null, password: string | null, ttl: number): Candidate
}

interface Codec {

    // Own fields of Farstream-0.2.Farstream.Codec

    /**
     * numeric identifier for encoding, eg. PT for SDP
     * @field 
     */
    id: number
    /**
     * the name of the codec
     * @field 
     */
    encoding_name: string | null
    /**
     * type of media this codec is for
     * @field 
     */
    media_type: MediaType
    /**
     * clock rate of this stream
     * @field 
     */
    clock_rate: number
    /**
     * Number of channels codec should decode
     * @field 
     */
    channels: number
    /**
     * The minimum interval between two RTCP reports,
     *  If it is not specified (G_MAXUINT), it is up to the protocol to decide
     * (it is 5 seconds for RTP).
     * @field 
     */
    minimum_reporting_interval: number
    /**
     * key pairs of param name to param data
     * @field 
     */
    optional_params: CodecParameter[]
    /**
     * key triplets of
     * feedbck param type, subtype and extra string that is supported for this codec
     * @field 
     */
    feedback_params: FeedbackParameter[]

    // Owm methods of Farstream-0.2.Farstream.Codec

    /**
     * This function adds an new feedback parameter to a #FsCodec
     * @param type The type of the feedback parameter
     * @param subtype The subtype of the feedback parameter
     * @param extra_params The extra_params of the feeback parameter
     */
    add_feedback_parameter(type: string | null, subtype: string | null, extra_params: string | null): void
    /**
     * This function adds an new optional parameter to a #FsCodec
     * @param name The name of the optional parameter
     * @param value The extra_params of the optional parameter
     */
    add_optional_parameter(name: string | null, value: string | null): void
    /**
     * Compare two codecs, it will declare two codecs to be identical even
     * if their optional parameters are in a different order. %NULL encoding names
     * are ignored.
     * @param codec2 Second codec
     * @returns %TRUE of the codecs are identical, %FALSE otherwise
     */
    are_equal(codec2: Codec): boolean
    /**
     * Copies a #FsCodec structure.
     * @returns a copy of the codec
     */
    copy(): Codec
    /**
     * Finds the #FsFeedbackParameter in the #FsCodec that has the requested
     * subtype, type and extra_params. One of which must be non-NULL;
     * @param type The subtype of the parameter to search for or %NULL for any type
     * @param subtype The subtype of the parameter to search for or %NULL for any subtype
     * @param extra_params The extra_params of the parameter to search for or %NULL for any extra_params
     * @returns the #FsFeedbackParameter from the #FsCodec or %NULL
     */
    get_feedback_parameter(type: string | null, subtype: string | null, extra_params: string | null): FeedbackParameter
    /**
     * Finds the #FsCodecParameter in the #FsCodec that has the requested name
     * and, if not %NULL, the requested value
     * @param name The name of the parameter to search for
     * @param value The value of the parameter to search for or %NULL for any value
     * @returns the #FsCodecParameter from the #FsCodec or %NULL
     */
    get_optional_parameter(name: string | null, value: string | null): CodecParameter
    /**
     * Removes an optional parameter from a codec.
     * 
     * NULL param will do nothing.
     * @param item     a pointer to the #GList element to remove that contains a #FsFeedbackParameter
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
     * @returns the newly-allocated string
     */
    to_string(): string | null
}

/**
 * This structure reprensents one codec that can be offered or received
 * @record 
 */
class Codec {

    // Own properties of Farstream-0.2.Farstream.Codec

    static name: string

    // Constructors of Farstream-0.2.Farstream.Codec

    /**
     * Allocates and initializes a #FsCodec structure
     * @constructor 
     * @param id codec identifier, if RTP this should be based on IETF RTP payload types
     * @param encoding_name Name of media type this encodes
     * @param media_type #FsMediaType for type of codec
     * @param clock_rate The clock rate this codec encodes at, if applicable
     * @returns A newly allocated #FsCodec
     */
    constructor(id: number, encoding_name: string | null, media_type: MediaType, clock_rate: number) 
    /**
     * Allocates and initializes a #FsCodec structure
     * @constructor 
     * @param id codec identifier, if RTP this should be based on IETF RTP payload types
     * @param encoding_name Name of media type this encodes
     * @param media_type #FsMediaType for type of codec
     * @param clock_rate The clock rate this codec encodes at, if applicable
     * @returns A newly allocated #FsCodec
     */
    static new(id: number, encoding_name: string | null, media_type: MediaType, clock_rate: number): Codec
}

interface CodecParameter {

    // Own fields of Farstream-0.2.Farstream.CodecParameter

    /**
     * paramter name.
     * @field 
     */
    name: string | null
    /**
     * parameter value.
     * @field 
     */
    value: string | null

    // Owm methods of Farstream-0.2.Farstream.CodecParameter

    /**
     * Makes a copy of a #FsCodecParameter
     * @returns a newly allocated #FsCodecParameter
     */
    copy(): CodecParameter
    /**
     * Frees a #FsCodecParameter
     */
    free(): void
}

/**
 * Used to store arbitary parameters for a codec
 * @record 
 */
class CodecParameter {

    // Own properties of Farstream-0.2.Farstream.CodecParameter

    static name: string
}

interface ConferenceClass {

    // Own fields of Farstream-0.2.Farstream.ConferenceClass

    /**
     * parent GstBin class
     * @field 
     */
    parent: Gst.BinClass
    new_session: (conference: Conference, media_type: MediaType) => Session
    new_participant: (conference: Conference) => Participant
}

/**
 * #FsConferenceClass class structure.
 * @record 
 */
abstract class ConferenceClass {

    // Own properties of Farstream-0.2.Farstream.ConferenceClass

    static name: string
}

interface ElementAddedNotifierClass {

    // Own fields of Farstream-0.2.Farstream.ElementAddedNotifierClass

    /**
     * the #GObjectClass parent
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * All members are private
 * @record 
 */
abstract class ElementAddedNotifierClass {

    // Own properties of Farstream-0.2.Farstream.ElementAddedNotifierClass

    static name: string
}

interface ElementAddedNotifierPrivate {
}

class ElementAddedNotifierPrivate {

    // Own properties of Farstream-0.2.Farstream.ElementAddedNotifierPrivate

    static name: string
}

interface FeedbackParameter {

    // Own fields of Farstream-0.2.Farstream.FeedbackParameter

    /**
     * the type of feedback, like "ack", "name", "ccm"
     * @field 
     */
    type: string | null
    /**
     * the subtype of feedback (can be an empty string)
     * @field 
     */
    subtype: string | null
    /**
     * a string containing extra parameters (can be empty)
     * @field 
     */
    extra_params: string | null

    // Owm methods of Farstream-0.2.Farstream.FeedbackParameter

    /**
     * Makes a copy of a #FsFeedbackParameter
     * @returns a newly allocated #FsFeedbackParameter
     */
    copy(): FeedbackParameter
    /**
     * Frees a #FsFeedbackParameter
     */
    free(): void
}

/**
 * Use to store feedback parameters
 * @record 
 */
class FeedbackParameter {

    // Own properties of Farstream-0.2.Farstream.FeedbackParameter

    static name: string
}

interface ParticipantClass {

    // Own fields of Farstream-0.2.Farstream.ParticipantClass

    /**
     * Our parent
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * The FsParticipant class has no virtual methods to implement,
 * but you may want to override the properties or attach more date to it
 * @record 
 */
abstract class ParticipantClass {

    // Own properties of Farstream-0.2.Farstream.ParticipantClass

    static name: string
}

interface ParticipantPrivate {
}

class ParticipantPrivate {

    // Own properties of Farstream-0.2.Farstream.ParticipantPrivate

    static name: string
}

interface PluginClass {

    // Own fields of Farstream-0.2.Farstream.PluginClass

    parent_class: GObject.TypeModuleClass
}

abstract class PluginClass {

    // Own properties of Farstream-0.2.Farstream.PluginClass

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of Farstream-0.2.Farstream.PluginPrivate

    static name: string
}

interface RtpHeaderExtension {

    // Own fields of Farstream-0.2.Farstream.RtpHeaderExtension

    /**
     * The identifier of the RTP header extension
     * @field 
     */
    id: number
    /**
     * the direction in which this extension can be used
     * @field 
     */
    direction: StreamDirection
    /**
     * The URI that defines this extension
     * @field 
     */
    uri: string | null

    // Owm methods of Farstream-0.2.Farstream.RtpHeaderExtension

    /**
     * Compares two #FsRtpHeaderExtension structures
     * @param extension2 The second #FsRtpHeaderExtension
     * @returns %TRUE if they are identical, %FALSE otherwise
     */
    are_equal(extension2: RtpHeaderExtension): boolean
}

/**
 * Defines a RTP header extension with its negotiated identifier, direction
 * and URI. They should only be created with fs_rtp_header_extension_new().
 * @record 
 */
class RtpHeaderExtension {

    // Own properties of Farstream-0.2.Farstream.RtpHeaderExtension

    static name: string

    // Constructors of Farstream-0.2.Farstream.RtpHeaderExtension

    /**
     * Creates a new #FsRtpHeaderExtension
     * @constructor 
     * @param id The identifier of the RTP header extension
     * @param direction the direction in which this extension can be used
     * @param uri The URI that defines this extension
     * @returns a new #FsRtpHeaderExtension
     */
    constructor(id: number, direction: StreamDirection, uri: string | null) 
    /**
     * Creates a new #FsRtpHeaderExtension
     * @constructor 
     * @param id The identifier of the RTP header extension
     * @param direction the direction in which this extension can be used
     * @param uri The URI that defines this extension
     * @returns a new #FsRtpHeaderExtension
     */
    static new(id: number, direction: StreamDirection, uri: string | null): RtpHeaderExtension
}

interface SessionClass {

    // Own fields of Farstream-0.2.Farstream.SessionClass

    /**
     * Our parent
     * @field 
     */
    parent_class: GObject.ObjectClass
    new_stream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    start_telephony_event: (session: Session, event: number, volume: number) => boolean
    stop_telephony_event: (session: Session) => boolean
    set_send_codec: (session: Session, send_codec: Codec) => boolean
    set_codec_preferences: (session: Session, codec_preferences: Codec[] | null) => boolean
    list_transmitters: (session: Session) => string[]
    get_stream_transmitter_type: (session: Session, transmitter: string | null) => GObject.GType
    codecs_need_resend: (session: Session, old_codecs: Codec[] | null, new_codecs: Codec[] | null) => Codec[]
    set_allowed_caps: (session: Session, sink_caps: Gst.Caps | null, src_caps: Gst.Caps | null) => boolean
    set_encryption_parameters: (session: Session, parameters: Gst.Structure | null) => boolean
}

/**
 * You must override at least new_stream in a subclass.
 * @record 
 */
abstract class SessionClass {

    // Own properties of Farstream-0.2.Farstream.SessionClass

    static name: string
}

interface SessionPrivate {
}

class SessionPrivate {

    // Own properties of Farstream-0.2.Farstream.SessionPrivate

    static name: string
}

interface StreamClass {

    // Own fields of Farstream-0.2.Farstream.StreamClass

    /**
     * Our parent
     * @field 
     */
    parent_class: GObject.ObjectClass
    add_remote_candidates: (stream: Stream, candidates: Candidate[]) => boolean
    force_remote_candidates: (stream: Stream, remote_candidates: Candidate[]) => boolean
    set_remote_codecs: (stream: Stream, remote_codecs: Codec[]) => boolean
    add_id: (stream: Stream, id: number) => void
    set_transmitter: (stream: Stream, transmitter: string | null, stream_transmitter_parameters: GObject.Parameter[] | null) => boolean
    set_decryption_parameters: (stream: Stream, parameters: Gst.Structure) => boolean
}

/**
 * You must override add_remote_candidate in a subclass.
 * If you have to negotiate codecs, then you must override set_remote_codecs too
 * @record 
 */
abstract class StreamClass {

    // Own properties of Farstream-0.2.Farstream.StreamClass

    static name: string
}

interface StreamPrivate {
}

class StreamPrivate {

    // Own properties of Farstream-0.2.Farstream.StreamPrivate

    static name: string
}

interface StreamTransmitterClass {

    // Own fields of Farstream-0.2.Farstream.StreamTransmitterClass

    /**
     * Our parent
     * @field 
     */
    parent_class: GObject.ObjectClass
    add_remote_candidates: (streamtransmitter: StreamTransmitter, candidates: Candidate[]) => boolean
    force_remote_candidates: (streamtransmitter: StreamTransmitter, remote_candidates: Candidate[]) => boolean
    gather_local_candidates: (streamtransmitter: StreamTransmitter) => boolean
    stop: (streamtransmitter: StreamTransmitter) => void
}

/**
 * You must override the add_remote_candidate in a subclass
 * @record 
 */
abstract class StreamTransmitterClass {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitterClass

    static name: string
}

interface StreamTransmitterPrivate {
}

class StreamTransmitterPrivate {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitterPrivate

    static name: string
}

interface TransmitterClass {

    // Own fields of Farstream-0.2.Farstream.TransmitterClass

    /**
     * Our parent
     * @field 
     */
    parent_class: GObject.ObjectClass
    new_stream_transmitter: (transmitter: Transmitter, participant: Participant, n_parameters: number, parameters: GObject.Parameter) => StreamTransmitter
    get_stream_transmitter_type: (transmitter: Transmitter) => GObject.GType
}

/**
 * You must override both methods in a subclass.
 * @record 
 */
abstract class TransmitterClass {

    // Own properties of Farstream-0.2.Farstream.TransmitterClass

    static name: string
}

interface TransmitterPrivate {
}

class TransmitterPrivate {

    // Own properties of Farstream-0.2.Farstream.TransmitterPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Farstream;
// END