/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Farstream {
    /**
     * Farstream-0.2
     */

    /**
     * An enum for the type of candidate used/reported
     */

    /**
     * An enum for the type of candidate used/reported
     */
    export namespace CandidateType {
        export const $gtype: GObject.GType<CandidateType>;
    }

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

    /**
     * This enum contains the component IDs defined in ICE-19
     */
    export namespace ComponentType {
        export const $gtype: GObject.GType<ComponentType>;
    }

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
    /**
     * An enum that represents the different DTMF event that can be sent to a
     * #FsSession. The values corresponds those those defined in RFC 4733
     * The rest of the possibles values are in the IANA registry at:
     * http://www.iana.org/assignments/audio-telephone-event-registry
     */
    class DTMFEvent {
        static $gtype: GObject.GType<DTMFEvent>;

        // Static fields

        static '0': number;
        static '1': number;
        static '2': number;
        static '3': number;
        static '4': number;
        static '5': number;
        static '6': number;
        static '7': number;
        static '8': number;
        static '9': number;
        static STAR: number;
        static POUND: number;
        static A: number;
        static B: number;
        static C: number;
        static D: number;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * An enum that represents the different ways a DTMF event can be sent
     */

    /**
     * An enum that represents the different ways a DTMF event can be sent
     */
    export namespace DTMFMethod {
        export const $gtype: GObject.GType<DTMFMethod>;
    }

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
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * Error constructing some of the sub-elements, this
         * probably denotes an error in the installation of the gstreamer elements.
         * It is a fatal error.
         */
        static CONSTRUCTION: number;
        /**
         * An internal error happened in Farstream, it may be in
         * an inconsistent state. The object from which this error comes should be
         * discarded.
         */
        static INTERNAL: number;
        /**
         * Invalid arguments to the function, this
         * is a programming error and should not be reported to the user
         */
        static INVALID_ARGUMENTS: number;
        /**
         * A network related error, this should probably be
         *  reported to the user.
         */
        static NETWORK: number;
        /**
         * The optional functionality is not implemented by
         * this plugin.
         */
        static NOT_IMPLEMENTED: number;
        /**
         * The codec negotiation has failed, this means
         * that there are no common codecs between the local and remote codecs.
         */
        static NEGOTIATION_FAILED: number;
        /**
         * Data is received on an unknown codec, this most
         * likely denotes an error on the remote side, the buffers will be ignored.
         * It can safely be ignored in most cases (but may result in a call with no
         * media received).
         */
        static UNKNOWN_CODEC: number;
        /**
         * There are no codecs detected for that media type.
         */
        static NO_CODECS: number;
        /**
         * All of the codecs have been disabled by the
         * codec preferences, one should try less strict codec preferences.
         */
        static NO_CODECS_LEFT: number;
        /**
         * Could not connect to the to remote party.
         */
        static CONNECTION_FAILED: number;
        /**
         * The object has been disposed.
         */
        static DISPOSED: number;
        /**
         * The object already exists
         */
        static ALREADY_EXISTS: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * Enum used to signify the media type of a codec or stream.
     */

    /**
     * Enum used to signify the media type of a codec or stream.
     */
    export namespace MediaType {
        export const $gtype: GObject.GType<MediaType>;
    }

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

    /**
     * An enum for the base IP protocol
     */
    export namespace NetworkProtocol {
        export const $gtype: GObject.GType<NetworkProtocol>;
    }

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

    /**
     * These are the possible states of a stream, a simple multicast stream
     * could only be in "disconnected" or "ready" state.
     * An stream using an ICE transmitter would use all of these.
     */
    export namespace StreamState {
        export const $gtype: GObject.GType<StreamState>;
    }

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
     * A format that can be used in printf like format strings to format a FsCodec
     */
    const CODEC_FORMAT: string;
    /**
     * If the id of a #FsCodec is #FS_CODEC_ID_ANY, then it will be replaced
     * with a dynamic payload type at runtime
     */
    const CODEC_ID_ANY: number;
    /**
     * If the id of a #FsCodec is #FS_CODEC_ID_DISABLE, then this codec will
     * not be used
     */
    const CODEC_ID_DISABLE: number;
    /**
     * A format that can be used in printf like format strings to format a
     * FsRtpHeaderExtension
     */
    const RTP_HEADER_EXTENSION_FORMAT: string;
    /**
     * Copies a GList of #FsCandidate and its contents
     * @param candidate_list A GList of #FsCandidate
     * @returns a new GList of #FsCandidate
     */
    function candidate_list_copy(candidate_list: Codec[]): Codec[];
    /**
     * Verifies if two glist of fscodecs are identical
     * @param list1 a #GList of #FsCodec
     * @param list2 a #GList of #FsCodec
     * @returns %TRUE if they are identical, %FALSE otherwise
     */
    function codec_list_are_equal(list1?: Codec[] | null, list2?: Codec[] | null): boolean;
    /**
     * Copies a list of #FsCodec structures.
     * @param codec_list a GList of #FsCodec to copy
     * @returns The new list.
     */
    function codec_list_copy(codec_list: Codec[]): Codec[];
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
     * @returns The #GList of #FsCodec or %NULL if the keyfile was empty or an error occured.
     */
    function codec_list_from_keyfile(filename: string): Codec[];
    function error_quark(): GLib.Quark;
    /**
     * Gives a user-printable string representing the media type
     * @param media_type A media type
     * @returns a static string representing the media type
     */
    function media_type_to_string(media_type: MediaType | null): string;
    /**
     * Parses a "farstream-farstream" message and checks if it matches
     * the `object` parameters.
     * @param object a #GObject to match against the message
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the object and is valid.
     */
    function parse_error(object: GObject.Object, message: Gst.Message): [boolean, Error, string];
    /**
     * Does a deep copy of a #GList of #FsRtpHeaderExtension
     * @param extensions a #GList of #FsRtpHeaderExtension
     * @returns a new #GList of #FsRtpHeaderExtension
     */
    function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[];
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
    function rtp_header_extension_list_from_keyfile(
        filename: string,
        media_type: MediaType | null,
    ): RtpHeaderExtension[];
    /**
     * These default codec preferences should work with the elements that are
     * available in the main GStreamer element repositories.
     * They should be suitable for standards based protocols like SIP or XMPP.
     * @param element Element for which to fetch default codec preferences
     * @returns The default codec preferences for this plugin. This #GList should be freed with fs_codec_list_destroy()
     */
    function utils_get_default_codec_preferences(element: Gst.Element): Codec[];
    /**
     * These default rtp header extension preferences should work with the elements
     * that are available in the main GStreamer element repositories.
     * They should be suitable for standards based protocols like SIP or XMPP.
     * @param element Element for which to fetch default RTP Header Extension preferences
     * @param media_type The #FsMediaType for which to get default RTP Header Extension  preferences
     * @returns The default rtp header extension preferences for this plugin, this #GList should be freed with fs_codec_list_destroy()
     */
    function utils_get_default_rtp_header_extension_preferences(
        element: Gst.Element,
        media_type: MediaType | null,
    ): Codec[];
    /**
     * This allows setting the bitrate on all elements that have a "bitrate"
     * property without having to know the type or of the unit used by that element.
     *
     * This will be obsolete in 0.11 (when all elements use bit/sec for the
     * "bitrate" property.
     * @param element The #GstElement
     * @param bitrate The bitrate in bits/sec
     */
    function utils_set_bitrate(element: Gst.Element, bitrate: number): void;
    /**
     * This is for the bindings benefit. Works around the limitations of GObject
     * introspection.
     * @param value a #GValue of type #FS_TYPE_CANDIDATE_LIST
     * @param candidates A #GList of #FsCandidate
     */
    function value_set_candidate_list(value: GObject.Value | any, candidates?: Candidate[] | null): void;
    type CandidateList = object | null;
    type CodecGList = object | null;
    type RtpHeaderExtensionGList = object | null;
    /**
     * An enum for specifying the direction of a stream
     */

    /**
     * An enum for specifying the direction of a stream
     */
    export namespace StreamDirection {
        export const $gtype: GObject.GType<StreamDirection>;
    }

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
    namespace Conference {
        // Signal signatures
        interface SignalSignatures extends Gst.Bin.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gst.Bin.ConstructorProps, Gst.ChildProxy.ConstructorProps {}
    }

    /**
     * The #FsConference structure, all the members are private
     */
    abstract class Conference extends Gst.Bin implements Gst.ChildProxy {
        static $gtype: GObject.GType<Conference>;
        declare static readonly __signalSignatures: Conference.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Conference.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Create a new Farstream Participant for the type of the given conference.
         */
        vfunc_new_participant(): Participant;
        /**
         * Create a new Farstream session for the given conference.
         * @param media_type #FsMediaType of the new session
         */
        vfunc_new_session(media_type: MediaType): Session;

        // Methods

        /**
         * Create a new Farstream Participant for the type of the given conference.
         * @returns the new #FsParticipant that has been created. The #FsParticipant is owned by the user and he must unref it when he is done with it.
         */
        new_participant(): Participant;
        /**
         * Create a new Farstream session for the given conference.
         * @param media_type #FsMediaType of the new session
         * @returns the new #FsSession that has been created. The #FsSession must be unref'd by the user when closing the session.
         */
        new_session(media_type: MediaType | null): Session;

        // Inherited methods
        /**
         * Emits the #GstChildProxy::child-added signal.
         * @param child the newly added child
         * @param name the name of the new child
         */
        child_added(child: GObject.Object, name: string): void;
        /**
         * Emits the #GstChildProxy::child-removed signal.
         * @param child the removed child
         * @param name the name of the old child
         */
        child_removed(child: GObject.Object, name: string): void;
        /**
         * Fetches a child by its number.
         * @param index the child's position in the child list
         * @returns the child object or %NULL if     not found (index too high).
         */
        get_child_by_index<T = GObject.Object>(index: number): T;
        /**
         * Looks up a child element by the given name.
         *
         * This virtual method has a default implementation that uses #GstObject
         * together with gst_object_get_name(). If the interface is to be used with
         * #GObjects, this methods needs to be overridden.
         * @param name the child's name
         * @returns the child object or %NULL if     not found.
         */
        get_child_by_name<T = GObject.Object>(name: string): T;
        /**
         * Looks up a child element by the given full-path name.
         *
         * Similar to gst_child_proxy_get_child_by_name(), this method
         * searches and returns a child given a name. The difference is that
         * this method allows a hierarchical path in the form of
         * child1::child2::child3. In the later example this method would
         * return a reference to child3, if found. The name should be made of
         * element names only and should not contain any property names.
         * @param name the full-path child's name
         * @returns the child object or %NULL if     not found.
         */
        get_child_by_name_recurse<T = GObject.Object>(name: string): T;
        /**
         * Gets the number of child objects this parent contains.
         * @returns the number of child objects
         */
        get_children_count(): number;
        /**
         * Gets a single property using the GstChildProxy mechanism.
         * You are responsible for freeing it by calling g_value_unset()
         * @param name name of the property
         */
        get_property(name: string): unknown;
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        /**
         * Looks up which object and #GParamSpec would be effected by the given `name`.
         * @param name name of the property to look up
         * @returns %TRUE if @target and @pspec could be found. %FALSE otherwise. In that case the values for @pspec and @target are not modified. Unref @target after usage. For plain #GObject @target is the same as @object.
         */
        lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];
        /**
         * Sets a single property using the GstChildProxy mechanism.
         * @param name name of the property to set
         * @param value new #GValue for the property
         */
        set_property(name: string, value: GObject.Value | any): void;
        /**
         * Emits the #GstChildProxy::child-added signal.
         * @param child the newly added child
         * @param name the name of the new child
         */
        vfunc_child_added(child: GObject.Object, name: string): void;
        /**
         * Emits the #GstChildProxy::child-removed signal.
         * @param child the removed child
         * @param name the name of the old child
         */
        vfunc_child_removed(child: GObject.Object, name: string): void;
        /**
         * Fetches a child by its number.
         * @param index the child's position in the child list
         */
        vfunc_get_child_by_index<T = GObject.Object>(index: number): T;
        /**
         * Looks up a child element by the given name.
         *
         * This virtual method has a default implementation that uses #GstObject
         * together with gst_object_get_name(). If the interface is to be used with
         * #GObjects, this methods needs to be overridden.
         * @param name the child's name
         */
        vfunc_get_child_by_name<T = GObject.Object>(name: string): T;
        /**
         * Gets the number of child objects this parent contains.
         */
        vfunc_get_children_count(): number;
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
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
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
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
        notify(property_name: string): void;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
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
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;
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
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
        set_data(key: string, data?: any | null): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ElementAddedNotifier {
        // Signal callback interfaces

        interface ElementAdded {
            (bin: Gst.Bin, element: Gst.Element): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'element-added': ElementAdded;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All members are private
     */
    class ElementAddedNotifier extends GObject.Object {
        static $gtype: GObject.GType<ElementAddedNotifier>;
        declare static readonly __signalSignatures: ElementAddedNotifier.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ElementAddedNotifier.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ElementAddedNotifier;

        // Signals

        connect<K extends keyof ElementAddedNotifier.SignalSignatures>(
            signal: K,
            callback: ElementAddedNotifier.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ElementAddedNotifier.SignalSignatures>(
            signal: K,
            callback: ElementAddedNotifier.SignalSignatures[K],
        ): number;
        emit<K extends keyof ElementAddedNotifier.SignalSignatures>(
            signal: K,
            ...args: Parameters<ElementAddedNotifier.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'element-added', callback: (_source: this, bin: Gst.Bin, element: Gst.Element) => void): number;
        connect_after(
            signal: 'element-added',
            callback: (_source: this, bin: Gst.Bin, element: Gst.Element) => void,
        ): number;
        emit(signal: 'element-added', bin: Gst.Bin, element: Gst.Element): void;

        // Methods

        /**
         * Add a #GstBin to on which the #FsElementAddedNotifier::element-added signal
         * will be called on every element and sub-element present and added in the
         * future.
         * @param bin A #GstBin to watch to added elements
         */
        add(bin: Gst.Bin): void;
        /**
         * Stop watching the passed bin and its subbins.
         * @param bin A #GstBin to stop watching
         * @returns %TRUE if the #GstBin was being watched, %FALSE otherwise
         */
        remove(bin: Gst.Bin): boolean;
        /**
         * Same as first calling fs_utils_get_default_element_properties() and using
         * the result with
         * fs_element_added_notifier_set_properties_from_keyfile() .
         *
         * This is binding friendly (since GKeyFile doesn't have a boxed type).
         * @param element Element for which to set the default codec   preferences
         * @returns The id of the signal connection, this can be used to disconnect this property setter using g_signal_handler_disconnect().
         */
        set_default_properties(element: Gst.Element): number;
        /**
         * Same as fs_element_added_notifier_set_properties_from_keyfile() but using
         * the name of the file to load instead of the #GKeyFile directly.
         * @param filename The name of the keyfile to use
         * @returns %TRUE if the file was successfully loaded, %FALSE otherwise
         */
        set_properties_from_file(filename: string): boolean;
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
        set_properties_from_keyfile(keyfile: GLib.KeyFile): number;
    }

    namespace Participant {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All members are private (access them using the properties)
     */
    abstract class Participant extends GObject.Object {
        static $gtype: GObject.GType<Participant>;
        declare static readonly __signalSignatures: Participant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Participant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.TypeModule.ConstructorProps, GObject.TypePlugin.ConstructorProps {}
    }

    /**
     * This structure represents a plugin, it is opaque.
     */
    class Plugin extends GObject.TypeModule implements GObject.TypePlugin {
        static $gtype: GObject.GType<Plugin>;
        declare static readonly __signalSignatures: Plugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the list of all available plugins of a certain type
         * @param type_suffix Get list of plugins with this type suffix
         */
        static list_available(type_suffix: string): string[];

        // Inherited methods
        /**
         * Calls the `complete_interface_info` function from the
         * #GTypePluginClass of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the #GType of an instantiatable type to which the interface  is added
         * @param interface_type the #GType of the interface whose info is completed
         * @param info the #GInterfaceInfo to fill in
         */
        complete_interface_info(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            info: GObject.InterfaceInfo,
        ): void;
        /**
         * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the #GType whose info is completed
         * @param info the #GTypeInfo struct to fill in
         * @param value_table the #GTypeValueTable to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
        /**
         * Calls the `unuse_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;
        // Conflicted with GObject.TypeModule.use
        use(...args: never[]): any;
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
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
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
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
        notify(property_name: string): void;
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
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
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
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Session {
        // Signal callback interfaces

        interface Error {
            (object: GObject.Object, error_no: Error, error_msg: string): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            error: Error;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allowed_sink_caps: Gst.Caps;
            allowedSinkCaps: Gst.Caps;
            allowed_src_caps: Gst.Caps;
            allowedSrcCaps: Gst.Caps;
            codec_preferences: Codec[];
            codecPreferences: Codec[];
            codecs: Codec[];
            codecs_without_config: Codec[];
            codecsWithoutConfig: Codec[];
            conference: Conference;
            current_send_codec: Codec;
            currentSendCodec: Codec;
            encryption_parameters: Gst.Structure;
            encryptionParameters: Gst.Structure;
            id: number;
            media_type: MediaType;
            mediaType: MediaType;
            sink_pad: Gst.Pad;
            sinkPad: Gst.Pad;
            tos: number;
        }
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;
        declare static readonly __signalSignatures: Session.SignalSignatures;

        // Properties

        /**
         * These are the #GstCaps that can be fed into the session,
         * they are used to filter the codecs to only those that can
         * accepted those caps as input.
         */
        get allowed_sink_caps(): Gst.Caps;
        /**
         * These are the #GstCaps that can be fed into the session,
         * they are used to filter the codecs to only those that can
         * accepted those caps as input.
         */
        get allowedSinkCaps(): Gst.Caps;
        /**
         * These are the #GstCaps that the session can produce,
         * they are used to filter the codecs to only those that can
         * accepted those caps as output.
         */
        get allowed_src_caps(): Gst.Caps;
        /**
         * These are the #GstCaps that the session can produce,
         * they are used to filter the codecs to only those that can
         * accepted those caps as output.
         */
        get allowedSrcCaps(): Gst.Caps;
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
        get codec_preferences(): Codec[];
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
        get codecPreferences(): Codec[];
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
        get codecs(): Codec[];
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
        get codecs_without_config(): Codec[];
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
        get codecsWithoutConfig(): Codec[];
        /**
         * The #FsConference parent of this session. This property is a
         * construct param and is read-only.
         */
        get conference(): Conference;
        /**
         * Indicates the currently active send codec. A user can change the active
         * send codec by calling fs_session_set_send_codec(). The send codec could
         * also be automatically changed by Farstream. This property is an
         * #FsCodec. User must free the codec using fs_codec_destroy() when done.
         * The "farstream-send-codec-changed" message is emitted on the bus when
         * the value of this property changes.
         */
        get current_send_codec(): Codec;
        /**
         * Indicates the currently active send codec. A user can change the active
         * send codec by calling fs_session_set_send_codec(). The send codec could
         * also be automatically changed by Farstream. This property is an
         * #FsCodec. User must free the codec using fs_codec_destroy() when done.
         * The "farstream-send-codec-changed" message is emitted on the bus when
         * the value of this property changes.
         */
        get currentSendCodec(): Codec;
        /**
         * Retrieves previously set encryption parameters
         */
        get encryption_parameters(): Gst.Structure;
        /**
         * Retrieves previously set encryption parameters
         */
        get encryptionParameters(): Gst.Structure;
        /**
         * The ID of the session, the first number of the pads linked to this session
         * will be this id
         */
        get id(): number;
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         */
        get media_type(): MediaType;
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         */
        get mediaType(): MediaType;
        /**
         * The Gstreamer sink pad that must be used to send media data on this
         * session. User must unref this GstPad when done with it.
         */
        get sink_pad(): Gst.Pad;
        /**
         * The Gstreamer sink pad that must be used to send media data on this
         * session. User must unref this GstPad when done with it.
         */
        get sinkPad(): Gst.Pad;
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        get tos(): number;
        set tos(val: number);

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Session.SignalSignatures>(signal: K, callback: Session.SignalSignatures[K]): number;
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: Session.SignalSignatures[K],
        ): number;
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: Parameters<Session.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'error',
            callback: (_source: this, object: GObject.Object, error_no: Error, error_msg: string) => void,
        ): number;
        connect_after(
            signal: 'error',
            callback: (_source: this, object: GObject.Object, error_no: Error, error_msg: string) => void,
        ): number;
        emit(signal: 'error', object: GObject.Object, error_no: Error, error_msg: string): void;

        // Virtual methods

        /**
         * Some codec updates need to be reliably transmitted to the other side
         * because they contain important parameters required to decode the media.
         * Other codec updates, caused by user action, don't.
         * @param old_codecs Codecs previously retrieved from the #FsSession:codecs property
         * @param new_codecs Codecs recently retrieved from the #FsSession:codecs property
         */
        vfunc_codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[];
        /**
         * Returns the GType of the stream transmitter, bindings can use it
         * to validate/convert the parameters passed to fs_session_new_stream().
         * @param transmitter The name of the transmitter
         */
        vfunc_get_stream_transmitter_type(transmitter: string): GObject.GType;
        /**
         * Get the list of all available transmitters for this session.
         */
        vfunc_list_transmitters(): string[];
        /**
         * This function creates a stream for the given participant into the active session.
         * @param participant #FsParticipant of a participant for the new stream
         * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
         */
        vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream;
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
         */
        vfunc_set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean;
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
         */
        vfunc_set_codec_preferences(codec_preferences?: Codec[] | null): boolean;
        /**
         * Sets encryption parameters. The exact parameters depend on the type of
         * plugin being used.
         * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
         */
        vfunc_set_encryption_parameters(parameters?: Gst.Structure | null): boolean;
        /**
         * This function will set the currently being sent codec for all streams in this
         * session. The given #FsCodec must be taken directly from the #codecs
         * property of the session. If the given codec is not in the codecs
         * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
         * copied so it must be free'd using fs_codec_destroy() when done.
         * @param send_codec a #FsCodec representing the codec to send
         */
        vfunc_set_send_codec(send_codec: Codec): boolean;
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
        vfunc_start_telephony_event(event: number, volume: number): boolean;
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
        vfunc_stop_telephony_event(): boolean;

        // Methods

        /**
         * Some codec updates need to be reliably transmitted to the other side
         * because they contain important parameters required to decode the media.
         * Other codec updates, caused by user action, don't.
         * @param old_codecs Codecs previously retrieved from the #FsSession:codecs property
         * @param new_codecs Codecs recently retrieved from the #FsSession:codecs property
         * @returns A new #GList of  #FsCodec that need to be resent or %NULL if there are none. This  list must be freed with fs_codec_list_destroy().
         */
        codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[];
        /**
         * This will cause the session to remove all links to other objects and to
         * remove itself from the #FsConference, it will also destroy all #FsStream
         * inside this #FsSession Once a #FsSession has been destroyed, it
         * can not be used anymore.
         *
         * It is strongly recommended to call this function from the main thread because
         * releasing the application's reference to a session.
         */
        destroy(): void;
        /**
         * This function emit the "error" signal on a #FsSession, it should only be
         * called by subclasses.
         * @param error_no The number of the error of type #FsError
         * @param error_msg Error message
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * Returns the GType of the stream transmitter, bindings can use it
         * to validate/convert the parameters passed to fs_session_new_stream().
         * @param transmitter The name of the transmitter
         * @returns The #GType of the stream transmitter
         */
        get_stream_transmitter_type(transmitter: string): GObject.GType;
        /**
         * Get the list of all available transmitters for this session.
         * @returns a newly-allocagted %NULL terminated array of named of transmitters or %NULL if no transmitter is needed for this type of session. It should be freed with g_strfreev().
         */
        list_transmitters(): string[];
        /**
         * This function creates a stream for the given participant into the active session.
         * @param participant #FsParticipant of a participant for the new stream
         * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
         * @returns the new #FsStream that has been created. User must unref the #FsStream when the stream is ended. If an error occured, returns NULL.
         */
        new_stream(participant: Participant, direction: StreamDirection | null): Stream;
        /**
         * Parses a "farstream-codecs-changed" message and checks if it matches
         * the `session` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the session and is valid.
         */
        parse_codecs_changed(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-send-codec-changed" message and checks if it matches
         * the `session` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the session and is valid.
         */
        parse_send_codec_changed(message: Gst.Message): [boolean, Codec, Codec[]];
        /**
         * Parses a "farstream-telephony-event-started" message and checks if it matches
         * the `session` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the session and is valid.
         */
        parse_telephony_event_started(message: Gst.Message): [boolean, DTMFMethod, DTMFEvent, number];
        /**
         * Parses a "farstream-telephony-event-stopped" message and checks if it matches
         * the `session` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the session and is valid.
         */
        parse_telephony_event_stopped(message: Gst.Message): [boolean, DTMFMethod];
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
        set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean;
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
        set_codec_preferences(codec_preferences?: Codec[] | null): boolean;
        /**
         * Sets encryption parameters. The exact parameters depend on the type of
         * plugin being used.
         * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
         * @returns %TRUE if the encryption parameters could be set, %FALSE otherwise
         */
        set_encryption_parameters(parameters?: Gst.Structure | null): boolean;
        /**
         * This function will set the currently being sent codec for all streams in this
         * session. The given #FsCodec must be taken directly from the #codecs
         * property of the session. If the given codec is not in the codecs
         * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
         * copied so it must be free'd using fs_codec_destroy() when done.
         * @param send_codec a #FsCodec representing the codec to send
         * @returns %FALSE if the send codec couldn't be set.
         */
        set_send_codec(send_codec: Codec): boolean;
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
        start_telephony_event(event: number, volume: number): boolean;
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
        stop_telephony_event(): boolean;
    }

    namespace Stream {
        // Signal callback interfaces

        interface Error {
            (errorno: Error, error_msg: string): void;
        }

        interface SrcPadAdded {
            (pad: Gst.Pad, codec: Codec): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            error: Error;
            'src-pad-added': SrcPadAdded;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            current_recv_codecs: Codec[];
            currentRecvCodecs: Codec[];
            decryption_parameters: Gst.Structure;
            decryptionParameters: Gst.Structure;
            direction: StreamDirection;
            negotiated_codecs: Codec[];
            negotiatedCodecs: Codec[];
            participant: Participant;
            remote_codecs: Codec[];
            remoteCodecs: Codec[];
            session: Session;
        }
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class Stream extends GObject.Object {
        static $gtype: GObject.GType<Stream>;
        declare static readonly __signalSignatures: Stream.SignalSignatures;

        // Properties

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
        get current_recv_codecs(): Codec[];
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
        get currentRecvCodecs(): Codec[];
        /**
         * Retrieves previously set decryption parameters
         */
        get decryption_parameters(): Gst.Structure;
        /**
         * Retrieves previously set decryption parameters
         */
        get decryptionParameters(): Gst.Structure;
        /**
         * The direction of the stream. This property is set initially as a parameter
         * to the fs_session_new_stream() function. It can be changed later if
         * required by setting this property.
         */
        get direction(): StreamDirection;
        set direction(val: StreamDirection);
        /**
         * This is the list of negotiatied codecs, it is the same list as the list
         * of #FsCodec from the parent #FsSession, except that the codec config data
         * has been replaced with the data from the remote codecs for this stream.
         * This is the list of #FsCodec used to receive data from this stream.
         * It is a #GList of #FsCodec.
         */
        get negotiated_codecs(): Codec[];
        /**
         * This is the list of negotiatied codecs, it is the same list as the list
         * of #FsCodec from the parent #FsSession, except that the codec config data
         * has been replaced with the data from the remote codecs for this stream.
         * This is the list of #FsCodec used to receive data from this stream.
         * It is a #GList of #FsCodec.
         */
        get negotiatedCodecs(): Codec[];
        /**
         * The #FsParticipant for this stream. This property is a construct param and
         * is read-only construction.
         */
        get participant(): Participant;
        /**
         * This is the list of remote codecs for this stream. They must be set by the
         * user as soon as they are known using fs_stream_set_remote_codecs()
         * (generally through external signaling). It is a #GList of #FsCodec.
         */
        get remote_codecs(): Codec[];
        /**
         * This is the list of remote codecs for this stream. They must be set by the
         * user as soon as they are known using fs_stream_set_remote_codecs()
         * (generally through external signaling). It is a #GList of #FsCodec.
         */
        get remoteCodecs(): Codec[];
        /**
         * The #FsSession for this stream. This property is a construct param and
         * is read-only construction.
         */
        get session(): Session;

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Stream.SignalSignatures>(signal: K, callback: Stream.SignalSignatures[K]): number;
        connect_after<K extends keyof Stream.SignalSignatures>(signal: K, callback: Stream.SignalSignatures[K]): number;
        emit<K extends keyof Stream.SignalSignatures>(signal: K, ...args: Parameters<Stream.SignalSignatures[K]>): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;
        connect_after(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;
        emit(signal: 'error', errorno: Error, error_msg: string): void;
        connect(signal: 'src-pad-added', callback: (_source: this, pad: Gst.Pad, codec: Codec) => void): number;
        connect_after(signal: 'src-pad-added', callback: (_source: this, pad: Gst.Pad, codec: Codec) => void): number;
        emit(signal: 'src-pad-added', pad: Gst.Pad, codec: Codec): void;

        // Virtual methods

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
        vfunc_add_id(id: number): void;
        /**
         * This function adds remote candidates. Any new candidates are
         * added to the list. The candidates will be used to establish a connection
         * with the peer. A copy will be made so the user must free the
         * passed candidate using fs_candidate_destroy() when done.
         * @param candidates an #GList of #FsCandidate  representing the remote candidates
         */
        vfunc_add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a #GList of #FsCandidate to force
         */
        vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * Sets decryption parameters. The exact parameters depend on the type of
         * plugin being used.
         * @param parameters a #GstStructure containing the decryption  parameters
         */
        vfunc_set_decryption_parameters(parameters: Gst.Structure): boolean;
        /**
         * This function will set the list of remote codecs for this stream. If
         * the given remote codecs couldn't be negotiated with the list of local
         * codecs or already negotiated codecs for the corresponding #FsSession, `error`
         * will be set and %FALSE will be returned. The `remote_codecs` list will be
         * copied so it must be free'd using fs_codec_list_destroy() when done.
         * @param remote_codecs a #GList of #FsCodec representing   the remote codecs
         */
        vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean;
        /**
         * Set the transmitter to use for this stream. This function will only succeed
         * once.
         *
         * The parameters correspond to the varios GObject properties of the
         * selected stream transmitter.
         * @param transmitter Name of the type of transmitter to use for this stream
         * @param stream_transmitter_parameters an array of n_parameters #GParameter struct that will be passed   to the newly-create #FsStreamTransmitter
         */
        vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters?: GObject.Parameter[] | null): boolean;

        // Methods

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
        add_id(id: number): void;
        /**
         * This function adds remote candidates. Any new candidates are
         * added to the list. The candidates will be used to establish a connection
         * with the peer. A copy will be made so the user must free the
         * passed candidate using fs_candidate_destroy() when done.
         * @param candidates an #GList of #FsCandidate  representing the remote candidates
         * @returns TRUE if the candidate was valid, FALSE otherwise
         */
        add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This will cause the stream to remove all links to other objects and to
         * remove itself from the #FsSession. Once a #FsStream has been destroyed, it
         * can not be used anymore.
         *
         * It is strongly recommended to call this function from the main thread because
         * releasing the application's reference to a stream.
         */
        destroy(): void;
        /**
         * This function emits the #FsStream::error" signal, it should only be
         * called by subclasses.
         * @param error_no The number of the error
         * @param error_msg Error message to be displayed to user
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * Emits the #FsStream::src-pad-added" signal, it should only be
         * called by subclasses.
         * @param pad the #GstPad that this #FsStream has created
         * @param codec The #FsCodec for this pad
         */
        emit_src_pad_added(pad: Gst.Pad, codec: Codec): void;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a #GList of #FsCandidate to force
         * @returns %TRUE if the candidates could be forced, %FALSE otherwise
         */
        force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * Creates a #GstIterator that can be used to iterate the src pads of this
         * stream. These are the pads that were announced by #FsStream:src-pad-added
         * and are still valid.
         * @returns The #GstIterator
         */
        iterate_src_pads(): Gst.Iterator;
        /**
         * Parses a "farstream-component-state-changed" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_component_state_changed(message: Gst.Message): [boolean, number, StreamState];
        /**
         * Parses a "farstream-local-candidates-prepared" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_local_candidates_prepared(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-new-active-candidate-pair" message and checks
         * if it matches the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_new_active_candidate_pair(message: Gst.Message): [boolean, Candidate, Candidate];
        /**
         * Parses a "farstream-new-local-candidate" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_new_local_candidate(message: Gst.Message): [boolean, Candidate];
        /**
         * Parses a "farstream-recv-codecs-changed" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_recv_codecs_changed(message: Gst.Message): [boolean, Codec[]];
        /**
         * Sets decryption parameters. The exact parameters depend on the type of
         * plugin being used.
         * @param parameters a #GstStructure containing the decryption  parameters
         * @returns %TRUE if the decryption parameters could be set, %FALSE otherwise
         */
        set_decryption_parameters(parameters: Gst.Structure): boolean;
        /**
         * This function will set the list of remote codecs for this stream. If
         * the given remote codecs couldn't be negotiated with the list of local
         * codecs or already negotiated codecs for the corresponding #FsSession, `error`
         * will be set and %FALSE will be returned. The `remote_codecs` list will be
         * copied so it must be free'd using fs_codec_list_destroy() when done.
         * @param remote_codecs a #GList of #FsCodec representing   the remote codecs
         * @returns %FALSE if the remote codecs couldn't be set.
         */
        set_remote_codecs(remote_codecs: Codec[]): boolean;
        /**
         * Set the transmitter to use for this stream. This function will only succeed
         * once.
         *
         * The parameters correspond to the varios GObject properties of the
         * selected stream transmitter.
         * @param transmitter Name of the type of transmitter to use for this stream
         * @param stream_transmitter_parameters an array of n_parameters #GParameter struct that will be passed   to the newly-create #FsStreamTransmitter
         * @returns %TRUE if the transmitter could be set, %FALSE otherwise
         */
        set_transmitter(transmitter: string, stream_transmitter_parameters?: GObject.Parameter[] | null): boolean;
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
         * @param stream_transmitter_parameters A #GHashTable of string->GValue containing the parameters.
         * @returns %TRUE if the transmitter could be set, %FALSE otherwise
         */
        set_transmitter_ht(
            transmitter: string,
            stream_transmitter_parameters?: GLib.HashTable<string, GObject.Value> | null,
        ): boolean;
    }

    namespace StreamTransmitter {
        // Signal callback interfaces

        interface Error {
            (errorno: Error, error_msg: string): void;
        }

        interface KnownSourcePacketReceived {
            (component: number, buffer: any): void;
        }

        interface LocalCandidatesPrepared {
            (): void;
        }

        interface NewActiveCandidatePair {
            (local_candidate: Candidate, remote_candidate: Candidate): void;
        }

        interface NewLocalCandidate {
            (local_candidate: Candidate): void;
        }

        interface StateChanged {
            (component: number, state: StreamState): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            error: Error;
            'known-source-packet-received': KnownSourcePacketReceived;
            'local-candidates-prepared': LocalCandidatesPrepared;
            'new-active-candidate-pair': NewActiveCandidatePair;
            'new-local-candidate': NewLocalCandidate;
            'state-changed': StateChanged;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            associate_on_source: boolean;
            associateOnSource: boolean;
            preferred_local_candidates: CandidateList;
            preferredLocalCandidates: CandidateList;
            sending: boolean;
        }
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class StreamTransmitter extends GObject.Object {
        static $gtype: GObject.GType<StreamTransmitter>;
        declare static readonly __signalSignatures: StreamTransmitter.SignalSignatures;

        // Properties

        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         */
        get associate_on_source(): boolean;
        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         */
        get associateOnSource(): boolean;
        get preferred_local_candidates(): CandidateList;
        get preferredLocalCandidates(): CandidateList;
        /**
         * A network source #GstElement to be used by the #FsSession
         */
        get sending(): boolean;
        set sending(val: boolean);

        // Constructors

        constructor(properties?: Partial<StreamTransmitter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof StreamTransmitter.SignalSignatures>(
            signal: K,
            callback: StreamTransmitter.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamTransmitter.SignalSignatures>(
            signal: K,
            callback: StreamTransmitter.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamTransmitter.SignalSignatures>(
            signal: K,
            ...args: Parameters<StreamTransmitter.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;
        connect_after(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;
        emit(signal: 'error', errorno: Error, error_msg: string): void;
        connect(
            signal: 'known-source-packet-received',
            callback: (_source: this, component: number, buffer: any) => void,
        ): number;
        connect_after(
            signal: 'known-source-packet-received',
            callback: (_source: this, component: number, buffer: any) => void,
        ): number;
        emit(signal: 'known-source-packet-received', component: number, buffer: any): void;
        connect(signal: 'local-candidates-prepared', callback: (_source: this) => void): number;
        connect_after(signal: 'local-candidates-prepared', callback: (_source: this) => void): number;
        emit(signal: 'local-candidates-prepared'): void;
        connect(
            signal: 'new-active-candidate-pair',
            callback: (_source: this, local_candidate: Candidate, remote_candidate: Candidate) => void,
        ): number;
        connect_after(
            signal: 'new-active-candidate-pair',
            callback: (_source: this, local_candidate: Candidate, remote_candidate: Candidate) => void,
        ): number;
        emit(signal: 'new-active-candidate-pair', local_candidate: Candidate, remote_candidate: Candidate): void;
        connect(signal: 'new-local-candidate', callback: (_source: this, local_candidate: Candidate) => void): number;
        connect_after(
            signal: 'new-local-candidate',
            callback: (_source: this, local_candidate: Candidate) => void,
        ): number;
        emit(signal: 'new-local-candidate', local_candidate: Candidate): void;
        connect(
            signal: 'state-changed',
            callback: (_source: this, component: number, state: StreamState) => void,
        ): number;
        connect_after(
            signal: 'state-changed',
            callback: (_source: this, component: number, state: StreamState) => void,
        ): number;
        emit(signal: 'state-changed', component: number, state: StreamState): void;

        // Virtual methods

        /**
         * This function is used to add remote candidates to the transmitter
         * @param candidates a #GList of the remote candidates
         */
        vfunc_add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a #GList of #FsCandidate to   force
         */
        vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * This function tells the transmitter to start gathering local candidates,
         * signals for new candidates and newly active candidates can be emitted
         * during the call to this function.
         */
        vfunc_gather_local_candidates(): boolean;
        /**
         * This functions stops the #FsStreamTransmitter, it must be called before
         * the last reference is dropped.
         */
        vfunc_stop(): void;

        // Methods

        /**
         * This function is used to add remote candidates to the transmitter
         * @param candidates a #GList of the remote candidates
         * @returns TRUE of the candidate could be added, FALSE if it couldnt   (and the #GError will be set)
         */
        add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This function emit the "error" signal on a #FsStreamTransmitter, it should
         * only be called by subclasses.
         * @param error_no The number of the error
         * @param error_msg Error message (for the programmer)
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a #GList of #FsCandidate to   force
         * @returns %TRUE if the candidates could be forced, %FALSE otherwise
         */
        force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * This function tells the transmitter to start gathering local candidates,
         * signals for new candidates and newly active candidates can be emitted
         * during the call to this function.
         * @returns %TRUE if it succeeds (or is not implemented), %FALSE otherwise
         */
        gather_local_candidates(): boolean;
        /**
         * This functions stops the #FsStreamTransmitter, it must be called before
         * the last reference is dropped.
         */
        stop(): void;
    }

    namespace Transmitter {
        // Signal callback interfaces

        interface Error {
            (errorno: Error, error_msg: string): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            error: Error;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            components: number;
            do_timestamp: boolean;
            doTimestamp: boolean;
            gst_sink: Gst.Element;
            gstSink: Gst.Element;
            gst_src: Gst.Element;
            gstSrc: Gst.Element;
            tos: number;
        }
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class Transmitter extends GObject.Object {
        static $gtype: GObject.GType<Transmitter>;
        declare static readonly __signalSignatures: Transmitter.SignalSignatures;

        // Properties

        /**
         * The number of components to create
         */
        get components(): number;
        /**
         * Apply current stream time to buffers or provide buffers without
         * timestamps. Must be set before creating a stream transmitter.
         */
        get do_timestamp(): boolean;
        set do_timestamp(val: boolean);
        /**
         * Apply current stream time to buffers or provide buffers without
         * timestamps. Must be set before creating a stream transmitter.
         */
        get doTimestamp(): boolean;
        set doTimestamp(val: boolean);
        /**
         * A network source #GstElement to be used by the #FsSession
         * These element's sink must have async=FALSE
         * This element MUST provide a pad named "sink_\%u" per component.
         * These pads number must start at 1 (the \%u corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        get gst_sink(): Gst.Element;
        /**
         * A network source #GstElement to be used by the #FsSession
         * These element's sink must have async=FALSE
         * This element MUST provide a pad named "sink_\%u" per component.
         * These pads number must start at 1 (the \%u corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        get gstSink(): Gst.Element;
        /**
         * A network source #GstElement to be used by the #FsSession
         * This element MUST provide a source pad named "src_%u" per component.
         * These pads number must start at 1 (the %u corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        get gst_src(): Gst.Element;
        /**
         * A network source #GstElement to be used by the #FsSession
         * This element MUST provide a source pad named "src_%u" per component.
         * These pads number must start at 1 (the %u corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        get gstSrc(): Gst.Element;
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        get tos(): number;
        set tos(val: number);

        // Constructors

        constructor(properties?: Partial<Transmitter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: string, components: number, tos: number): Transmitter;

        // Signals

        connect<K extends keyof Transmitter.SignalSignatures>(
            signal: K,
            callback: Transmitter.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Transmitter.SignalSignatures>(
            signal: K,
            callback: Transmitter.SignalSignatures[K],
        ): number;
        emit<K extends keyof Transmitter.SignalSignatures>(
            signal: K,
            ...args: Parameters<Transmitter.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;
        connect_after(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;
        emit(signal: 'error', errorno: Error, error_msg: string): void;

        // Static methods

        /**
         * Get the list of all available transmitters
         */
        static list_available(): string[];

        // Virtual methods

        /**
         * This function returns the GObject type for the stream transmitter.
         * This is meant for bindings that need to introspect the type of arguments
         * that can be passed to the _new_stream_transmitter.
         */
        vfunc_get_stream_transmitter_type(): GObject.GType;
        /**
         * This function will create a new #FsStreamTransmitter element for a
         * specific participant for this #FsTransmitter
         * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
         * @param n_parameters The number of parameters to pass to the newly created #FsStreamTransmitter
         * @param parameters an array of #GParameter
         */
        vfunc_new_stream_transmitter(
            participant: Participant,
            n_parameters: number,
            parameters: GObject.Parameter,
        ): StreamTransmitter;

        // Methods

        /**
         * This function emit the "error" signal on a #FsTransmitter, it should
         * only be called by subclasses.
         * @param error_no The number of the error
         * @param error_msg Error message to be displayed to user
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * This function returns the GObject type for the stream transmitter.
         * This is meant for bindings that need to introspect the type of arguments
         * that can be passed to the _new_stream_transmitter.
         * @returns the #GType
         */
        get_stream_transmitter_type(): GObject.GType;
        /**
         * This function will create a new #FsStreamTransmitter element for a
         * specific participant for this #FsTransmitter
         * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
         * @param n_parameters The number of parameters to pass to the newly created #FsStreamTransmitter
         * @param parameters an array of #GParameter
         * @returns a new #FsStreamTransmitter, or NULL if there is an  error
         */
        new_stream_transmitter(
            participant: Participant,
            n_parameters: number,
            parameters: GObject.Parameter,
        ): StreamTransmitter;
    }

    /**
     * Struct to hold information about ICE-19 compliant candidates
     */
    class Candidate {
        static $gtype: GObject.GType<Candidate>;

        // Fields

        foundation: string;
        component_id: number;
        ip: string;
        port: number;
        base_ip: string;
        base_port: number;
        proto: NetworkProtocol;
        priority: number;
        type: CandidateType;
        username: string;
        password: string;
        ttl: number;

        // Constructors

        constructor(
            foundation: string,
            component_id: number,
            type: CandidateType,
            proto: NetworkProtocol,
            ip: string | null,
            port: number,
        );
        _init(...args: any[]): void;

        static ['new'](
            foundation: string,
            component_id: number,
            type: CandidateType,
            proto: NetworkProtocol,
            ip: string | null,
            port: number,
        ): Candidate;

        static new_full(
            foundation: string,
            component_id: number,
            ip: string | null,
            port: number,
            base_ip: string | null,
            base_port: number,
            proto: NetworkProtocol,
            priority: number,
            type: CandidateType,
            username: string | null,
            password: string | null,
            ttl: number,
        ): Candidate;

        // Methods

        /**
         * Copies a #FsCandidate and its contents.
         * @returns a new #FsCandidate
         */
        copy(): Candidate;
    }

    /**
     * This structure reprensents one codec that can be offered or received
     */
    class Codec {
        static $gtype: GObject.GType<Codec>;

        // Fields

        id: number;
        encoding_name: string;
        media_type: MediaType;
        clock_rate: number;
        channels: number;
        minimum_reporting_interval: number;
        optional_params: CodecParameter[];
        feedback_params: FeedbackParameter[];

        // Constructors

        constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number);
        _init(...args: any[]): void;

        static ['new'](id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec;

        // Methods

        /**
         * This function adds an new feedback parameter to a #FsCodec
         * @param type The type of the feedback parameter
         * @param subtype The subtype of the feedback parameter
         * @param extra_params The extra_params of the feeback parameter
         */
        add_feedback_parameter(type: string, subtype: string, extra_params: string): void;
        /**
         * This function adds an new optional parameter to a #FsCodec
         * @param name The name of the optional parameter
         * @param value The extra_params of the optional parameter
         */
        add_optional_parameter(name: string, value: string): void;
        /**
         * Compare two codecs, it will declare two codecs to be identical even
         * if their optional parameters are in a different order. %NULL encoding names
         * are ignored.
         * @param codec2 Second codec
         * @returns %TRUE of the codecs are identical, %FALSE otherwise
         */
        are_equal(codec2: Codec): boolean;
        /**
         * Copies a #FsCodec structure.
         * @returns a copy of the codec
         */
        copy(): Codec;
        /**
         * Finds the #FsFeedbackParameter in the #FsCodec that has the requested
         * subtype, type and extra_params. One of which must be non-NULL;
         * @param type The subtype of the parameter to search for or %NULL for any type
         * @param subtype The subtype of the parameter to search for or %NULL for any subtype
         * @param extra_params The extra_params of the parameter to search for or %NULL for any extra_params
         * @returns the #FsFeedbackParameter from the #FsCodec or %NULL
         */
        get_feedback_parameter(
            type?: string | null,
            subtype?: string | null,
            extra_params?: string | null,
        ): FeedbackParameter;
        /**
         * Finds the #FsCodecParameter in the #FsCodec that has the requested name
         * and, if not %NULL, the requested value
         * @param name The name of the parameter to search for
         * @param value The value of the parameter to search for or %NULL for any value
         * @returns the #FsCodecParameter from the #FsCodec or %NULL
         */
        get_optional_parameter(name: string, value?: string | null): CodecParameter;
        /**
         * Removes an optional parameter from a codec.
         *
         * NULL param will do nothing.
         * @param item a pointer to the #GList element to remove that contains a #FsFeedbackParameter
         */
        remove_feedback_parameter(item: FeedbackParameter[]): void;
        /**
         * Removes an optional parameter from a codec.
         *
         * NULL param will do nothing.
         * @param param a pointer to the #FsCodecParameter to remove
         */
        remove_optional_parameter(param: CodecParameter): void;
        /**
         * Returns a newly-allocated string representing the codec
         * @returns the newly-allocated string
         */
        to_string(): string;
    }

    /**
     * Used to store arbitary parameters for a codec
     */
    class CodecParameter {
        static $gtype: GObject.GType<CodecParameter>;

        // Fields

        name: string;
        value: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                value: string;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        /**
         * Makes a copy of a #FsCodecParameter
         * @returns a newly allocated #FsCodecParameter
         */
        copy(): CodecParameter;
        /**
         * Frees a #FsCodecParameter
         */
        free(): void;
    }

    type ConferenceClass = typeof Conference;
    type ElementAddedNotifierClass = typeof ElementAddedNotifier;
    abstract class ElementAddedNotifierPrivate {
        static $gtype: GObject.GType<ElementAddedNotifierPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Use to store feedback parameters
     */
    class FeedbackParameter {
        static $gtype: GObject.GType<FeedbackParameter>;

        // Fields

        type: string;
        subtype: string;
        extra_params: string;

        // Constructors

        constructor(
            properties?: Partial<{
                type: string;
                subtype: string;
                extra_params: string;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        /**
         * Makes a copy of a #FsFeedbackParameter
         * @returns a newly allocated #FsFeedbackParameter
         */
        copy(): FeedbackParameter;
        /**
         * Frees a #FsFeedbackParameter
         */
        free(): void;
    }

    type ParticipantClass = typeof Participant;
    abstract class ParticipantPrivate {
        static $gtype: GObject.GType<ParticipantPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PluginClass = typeof Plugin;
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Defines a RTP header extension with its negotiated identifier, direction
     * and URI. They should only be created with fs_rtp_header_extension_new().
     */
    class RtpHeaderExtension {
        static $gtype: GObject.GType<RtpHeaderExtension>;

        // Fields

        id: number;
        direction: StreamDirection;
        uri: string;

        // Constructors

        constructor(id: number, direction: StreamDirection, uri: string);
        _init(...args: any[]): void;

        static ['new'](id: number, direction: StreamDirection, uri: string): RtpHeaderExtension;

        // Methods

        /**
         * Compares two #FsRtpHeaderExtension structures
         * @param extension2 The second #FsRtpHeaderExtension
         * @returns %TRUE if they are identical, %FALSE otherwise
         */
        are_equal(extension2: RtpHeaderExtension): boolean;
    }

    type SessionClass = typeof Session;
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StreamClass = typeof Stream;
    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StreamTransmitterClass = typeof StreamTransmitter;
    abstract class StreamTransmitterPrivate {
        static $gtype: GObject.GType<StreamTransmitterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TransmitterClass = typeof Transmitter;
    abstract class TransmitterPrivate {
        static $gtype: GObject.GType<TransmitterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Farstream;

// END
