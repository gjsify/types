/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './farstream-0.1-ambient.d.ts';
import './farstream-0.1-import.d.ts';
/**
 * Farstream-0.1
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
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
    class Error extends GLib.Error {
        // Own fields of Farstream-0.1.Error

        CONSTRUCTION: number;
        INTERNAL: number;
        INVALID_ARGUMENTS: number;
        NETWORK: number;
        NOT_IMPLEMENTED: number;
        NEGOTIATION_FAILED: number;
        UNKNOWN_CODEC: number;
        NO_CODECS: number;
        NO_CODECS_LEFT: number;
        CONNECTION_FAILED: number;
        DISPOSED: number;
        ALREADY_EXISTS: number;

        // Constructors of Farstream-0.1.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Farstream-0.1.Error

        static quark(): GLib.Quark;
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
    const CODEC_FORMAT: string;
    const CODEC_ID_ANY: number;
    const CODEC_ID_DISABLE: number;
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
    function codec_list_are_equal(list1: Codec[], list2: Codec[]): boolean;
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
    function media_type_to_string(media_type: MediaType): string;
    /**
     * Parses a "farstream-farstream" message and checks if it matches
     * the `object` parameters.
     * @param object a #GObject to match against the message
     * @param message a #GstMessage to parse
     * @returns %TRUE if the message matches the object and is valid.
     */
    function parse_error(object: GObject.Object, message: Gst.Message): boolean;
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
    function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): RtpHeaderExtension[];
    /**
     * These default codec preferences should work with the elements that are
     * available in the main GStreamer element repositories.
     * They should be suitable for standards based protocols like SIP or XMPP.
     * @param element Element for which to fetch default codec preferences
     * @returns The default codec preferences for this plugin. This #GList should be freed with fs_codec_list_destroy()
     */
    function utils_get_default_codec_preferences(element: Gst.Element): Codec[];
    function utils_get_default_element_properties(element: Gst.Element): GLib.KeyFile;
    /**
     * These default rtp header extension preferences should work with the elements
     * that are available in the main GStreamer element repositories.
     * They should be suitable for standards based protocols like SIP or XMPP.
     * @param element Element for which to fetch default RTP Header Extension preferences
     * @param media_type The #FsMediaType for which to get default RTP Header Extension preferences
     * @returns The default rtp header extension preferences for this plugin, this #GList should be freed with fs_codec_list_destroy()
     */
    function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[];
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
    type CandidateList = object | null;
    type CodecGList = object | null;
    type RtpHeaderExtension = object | null;
    type RtpHeaderExtensionGList = object | null;
    /**
     * An enum for specifying the direction of a stream
     */
    enum StreamDirection {
        NONE,
        SEND,
        RECV,
        BOTH,
    }
    module Conference {
        // Constructor properties interface
    }

    /**
     * The #FsConference structure, all the members are private
     */
    class Conference extends Gst.Bin {
        // Owm methods of Farstream-0.1.Conference

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
        new_session(media_type: MediaType): Session;
    }

    module ElementAddedNotifier {
        // Signal callback interfaces

        interface ElementAdded {
            (bin: Gst.Bin, element: Gst.Element): void;
        }

        // Constructor properties interface
    }

    /**
     * All members are private
     */
    class ElementAddedNotifier extends GObject.Object {
        // Constructors of Farstream-0.1.ElementAddedNotifier

        static ['new'](): ElementAddedNotifier;

        // Owm methods of Farstream-0.1.ElementAddedNotifier

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
         * @param element Element for which to set the default codec preferences
         */
        set_default_properties(element: Gst.Element): void;
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
         */
        set_properties_from_keyfile(keyfile: GLib.KeyFile): void;
    }

    module Participant {
        // Constructor properties interface
    }

    /**
     * All members are private (access them using the properties)
     */
    abstract class Participant extends Gst.Object {}

    module Plugin {
        // Constructor properties interface
    }

    /**
     * This structure represents a plugin, it is opaque.
     */
    class Plugin extends GObject.TypeModule {
        // Owm methods of Farstream-0.1.Plugin

        /**
         * Gets the list of all available plugins of a certain type
         * @param type_suffix Get list of plugins with this type suffix
         */
        static list_available(type_suffix: string): string[];
    }

    module Session {
        // Signal callback interfaces

        interface Error {
            (object: GObject.Object, error_no: Error, error_msg: string): void;
        }

        // Constructor properties interface
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class Session extends Gst.Object {
        // Own properties of Farstream-0.1.Session

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
        readonly codec_preferences: Codec[];
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
        readonly codecPreferences: Codec[];
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
        readonly codecs: Codec[];
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
        readonly codecs_without_config: Codec[];
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
        readonly codecsWithoutConfig: Codec[];
        /**
         * The #FsConference parent of this session. This property is a
         * construct param and is read-only.
         */
        conference: Conference;
        /**
         * Indicates the currently active send codec. A user can change the active
         * send codec by calling fs_session_set_send_codec(). The send codec could
         * also be automatically changed by Farstream. This property is an
         * #FsCodec. User must free the codec using fs_codec_destroy() when done.
         * The "farstream-send-codec-changed" message is emitted on the bus when
         * the value of this property changes.
         */
        readonly current_send_codec: Codec;
        /**
         * Indicates the currently active send codec. A user can change the active
         * send codec by calling fs_session_set_send_codec(). The send codec could
         * also be automatically changed by Farstream. This property is an
         * #FsCodec. User must free the codec using fs_codec_destroy() when done.
         * The "farstream-send-codec-changed" message is emitted on the bus when
         * the value of this property changes.
         */
        readonly currentSendCodec: Codec;
        /**
         * The ID of the session, the first number of the pads linked to this session
         * will be this id
         */
        id: number;
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         */
        media_type: MediaType;
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         */
        mediaType: MediaType;
        /**
         * The Gstreamer sink pad that must be used to send media data on this
         * session. User must unref this GstPad when done with it.
         */
        readonly sink_pad: Gst.Pad;
        /**
         * The Gstreamer sink pad that must be used to send media data on this
         * session. User must unref this GstPad when done with it.
         */
        readonly sinkPad: Gst.Pad;
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        tos: number;

        // Owm methods of Farstream-0.1.Session

        /**
         * Some codec updates need to be reliably transmitted to the other side
         * because they contain important parameters required to decode the media.
         * Other codec updates, caused by user action, don't.
         * @param old_codecs Codecs previously retrieved from the #FsSession:codecs property
         * @param new_codecs Codecs recently retrieved from the #FsSession:codecs property
         * @returns A new #GList of #FsCodec that need to be resent or %NULL if there are none. This list must be freed with fs_codec_list_destroy().
         */
        codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[];
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
        new_stream(participant: Participant, direction: StreamDirection): Stream;
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
        parse_send_codec_changed(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-telephony-event-started" message and checks if it matches
         * the `session` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the session and is valid.
         */
        parse_telephony_event_started(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-telephony-event-stopped" message and checks if it matches
         * the `session` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the session and is valid.
         */
        parse_telephony_event_stopped(message: Gst.Message): boolean;
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
         * @returns %TRUE on success, %FALSE on error.
         */
        set_codec_preferences(codec_preferences: Codec[]): boolean;
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

    module Stream {
        // Signal callback interfaces

        interface Error {
            (errorno: Error, error_msg: string): void;
        }

        interface SrcPadAdded {
            (pad: Gst.Pad, codec: Codec): void;
        }

        // Constructor properties interface
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class Stream extends Gst.Object {
        // Own properties of Farstream-0.1.Stream

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
        readonly current_recv_codecs: Codec[];
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
        readonly currentRecvCodecs: Codec[];
        /**
         * The direction of the stream. This property is set initially as a parameter
         * to the fs_session_new_stream() function. It can be changed later if
         * required by setting this property.
         */
        direction: StreamDirection;
        /**
         * This is the list of negotiatied codecs, it is the same list as the list
         * of #FsCodec from the parent #FsSession, except that the codec config data
         * has been replaced with the data from the remote codecs for this stream.
         * This is the list of #FsCodec used to receive data from this stream.
         * It is a #GList of #FsCodec.
         */
        readonly negotiated_codecs: Codec[];
        /**
         * This is the list of negotiatied codecs, it is the same list as the list
         * of #FsCodec from the parent #FsSession, except that the codec config data
         * has been replaced with the data from the remote codecs for this stream.
         * This is the list of #FsCodec used to receive data from this stream.
         * It is a #GList of #FsCodec.
         */
        readonly negotiatedCodecs: Codec[];
        /**
         * The #FsParticipant for this stream. This property is a construct param and
         * is read-only construction.
         */
        participant: Participant;
        /**
         * This is the list of remote codecs for this stream. They must be set by the
         * user as soon as they are known using fs_stream_set_remote_codecs()
         * (generally through external signaling). It is a #GList of #FsCodec.
         */
        readonly remote_codecs: Codec[];
        /**
         * This is the list of remote codecs for this stream. They must be set by the
         * user as soon as they are known using fs_stream_set_remote_codecs()
         * (generally through external signaling). It is a #GList of #FsCodec.
         */
        readonly remoteCodecs: Codec[];
        /**
         * The #FsSession for this stream. This property is a construct param and
         * is read-only construction.
         */
        session: Session;

        // Owm methods of Farstream-0.1.Stream

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
         * @param candidates an #GList of #FsCandidate representing the remote candidates
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
         * Parses a "farstream-component-state-changed" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_component_state_changed(message: Gst.Message): boolean;
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
        parse_new_active_candidate_pair(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-new-local-candidate" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_new_local_candidate(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-recv-codecs-changed" message and checks if it matches
         * the `stream` parameters.
         * @param message a #GstMessage to parse
         * @returns %TRUE if the message matches the stream and is valid.
         */
        parse_recv_codecs_changed(message: Gst.Message): boolean;
        /**
         * This function will set the list of remote codecs for this stream. If
         * the given remote codecs couldn't be negotiated with the list of local
         * codecs or already negotiated codecs for the corresponding #FsSession, `error`
         * will be set and %FALSE will be returned. The `remote_codecs` list will be
         * copied so it must be free'd using fs_codec_list_destroy() when done.
         * @param remote_codecs a #GList of #FsCodec representing the remote codecs
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
         * @param stream_transmitter_parameters (array length=stream_transmitter_n_parameters) (allow-none): an array of n_parameters #GParameter struct that will be passed to the newly-create #FsStreamTransmitter
         * @param stream_transmitter_n_parameters Number of parametrs passed to the stream transmitter
         * @returns %TRUE if the transmitter could be set, %FALSE otherwise
         */
        set_transmitter(
            transmitter: string,
            stream_transmitter_parameters: GObject.Parameter,
            stream_transmitter_n_parameters: number,
        ): boolean;
    }

    module StreamTransmitter {
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

        // Constructor properties interface
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class StreamTransmitter extends Gst.Object {
        // Own properties of Farstream-0.1.StreamTransmitter

        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         */
        associate_on_source: boolean;
        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         */
        associateOnSource: boolean;
        preferred_local_candidates: CandidateList;
        preferredLocalCandidates: CandidateList;
        /**
         * A network source #GstElement to be used by the #FsSession
         */
        sending: boolean;

        // Owm methods of Farstream-0.1.StreamTransmitter

        /**
         * This function is used to add remote candidates to the transmitter
         * @param candidates a #GList of the remote candidates
         * @returns TRUE of the candidate could be added, FALSE if it couldnt (and the #GError will be set)
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
         * @param remote_candidates a #GList of #FsCandidate to force
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

    module Transmitter {
        // Signal callback interfaces

        interface Error {
            (errorno: Error, error_msg: string): void;
        }

        interface GetRecvonlyFilter {
            (component: number): Gst.Element;
        }

        // Constructor properties interface
    }

    /**
     * All members are private, access them using methods and properties
     */
    abstract class Transmitter extends Gst.Object {
        // Own properties of Farstream-0.1.Transmitter

        /**
         * The number of components to create
         */
        components: number;
        /**
         * A network source #GstElement to be used by the #FsSession
         * These element's sink must have async=FALSE
         * This element MUST provide a pad named "sink\%d" per component.
         * These pads number must start at 1 (the \%d corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        readonly gst_sink: Gst.Element;
        /**
         * A network source #GstElement to be used by the #FsSession
         * These element's sink must have async=FALSE
         * This element MUST provide a pad named "sink\%d" per component.
         * These pads number must start at 1 (the \%d corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        readonly gstSink: Gst.Element;
        /**
         * A network source #GstElement to be used by the #FsSession
         * This element MUST provide a source pad named "src%d" per component.
         * These pads number must start at 1 (the %d corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        readonly gst_src: Gst.Element;
        /**
         * A network source #GstElement to be used by the #FsSession
         * This element MUST provide a source pad named "src%d" per component.
         * These pads number must start at 1 (the %d corresponds to the component
         * number).
         * These pads MUST be static pads.
         */
        readonly gstSrc: Gst.Element;
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        tos: number;

        // Constructors of Farstream-0.1.Transmitter

        static ['new'](type: string, components: number, tos: number): Transmitter;

        // Owm methods of Farstream-0.1.Transmitter

        /**
         * Get the list of all available transmitters
         */
        static list_available(): string[];

        // Owm methods of Farstream-0.1.Transmitter

        /**
         * This function emit the "error" signal on a #FsTransmitter, it should
         * only be called by subclasses.
         * @param error_no The number of the error
         * @param error_msg Error message to be displayed to user
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * Get the filter to add on the send pipeline if sending is disabled.
         *
         * Only for use by subclasses.
         * @param component The component to get the filter for
         * @returns a #GstElement to use as the filter or %NULL
         */
        get_recvonly_filter(component: number): Gst.Element;
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
         * @returns a new #FsStreamTransmitter, or NULL if there is an error
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
        // Own fields of Farstream-0.1.Candidate

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

        // Constructors of Farstream-0.1.Candidate

        constructor(
            foundation: string,
            component_id: number,
            type: CandidateType,
            proto: NetworkProtocol,
            ip: string,
            port: number,
        );

        static ['new'](
            foundation: string,
            component_id: number,
            type: CandidateType,
            proto: NetworkProtocol,
            ip: string,
            port: number,
        ): Candidate;

        // Owm methods of Farstream-0.1.Candidate

        /**
         * Copies a #FsCandidate and its contents.
         * @returns a new #FsCandidate
         */
        copy(): Candidate;
        destroy(): void;
    }

    /**
     * This structure reprensents one codec that can be offered or received
     */
    class Codec {
        // Own fields of Farstream-0.1.Codec

        id: number;
        encoding_name: string;
        media_type: MediaType;
        clock_rate: number;
        channels: number;
        minimum_reporting_interval: number;
        optional_params: CodecParameter[];
        feedback_params: FeedbackParameter[];

        // Constructors of Farstream-0.1.Codec

        constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number);

        static ['new'](id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec;

        // Owm methods of Farstream-0.1.Codec

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
        destroy(): void;
        /**
         * Finds the #FsFeedbackParameter in the #FsCodec that has the requested
         * subtype, type and extra_params. One of which must be non-NULL;
         * @param type The subtype of the parameter to search for or %NULL for any type
         * @param subtype The subtype of the parameter to search for or %NULL for any subtype
         * @param extra_params The extra_params of the parameter to search for or %NULL for any extra_params
         * @returns the #FsFeedbackParameter from the #FsCodec or %NULL
         */
        get_feedback_parameter(type: string, subtype: string, extra_params: string): FeedbackParameter;
        /**
         * Finds the #FsCodecParameter in the #FsCodec that has the requested name
         * and, if not %NULL, the requested value
         * @param name The name of the parameter to search for
         * @param value The value of the parameter to search for or %NULL for any value
         * @returns the #FsCodecParameter from the #FsCodec or %NULL
         */
        get_optional_parameter(name: string, value: string): CodecParameter;
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
        // Own fields of Farstream-0.1.CodecParameter

        name: string;
        value: string;

        // Constructors of Farstream-0.1.CodecParameter

        constructor(
            properties?: Partial<{
                name: string;
                value: string;
            }>,
        );

        // Owm methods of Farstream-0.1.CodecParameter

        copy(): CodecParameter;
        free(): void;
    }

    /**
     * #FsConferenceClass class structure.
     */
    class ConferenceClass {}

    /**
     * All members are private
     */
    class ElementAddedNotifierClass {}

    class ElementAddedNotifierPrivate {}

    /**
     * Use to store feedback parameters
     */
    class FeedbackParameter {
        // Own fields of Farstream-0.1.FeedbackParameter

        type: string;
        subtype: string;
        extra_params: string;

        // Constructors of Farstream-0.1.FeedbackParameter

        constructor(
            properties?: Partial<{
                type: string;
                subtype: string;
                extra_params: string;
            }>,
        );

        // Owm methods of Farstream-0.1.FeedbackParameter

        copy(): FeedbackParameter;
        free(): void;
    }

    /**
     * The FsParticipant class has no virtual methods to implement,
     * but you may want to override the properties or attach more date to it
     */
    class ParticipantClass {}

    class ParticipantPrivate {}

    class PluginClass {}

    class PluginPrivate {}

    /**
     * You must override at least new_stream in a subclass.
     */
    class SessionClass {}

    class SessionPrivate {}

    /**
     * You must override add_remote_candidate in a subclass.
     * If you have to negotiate codecs, then you must override set_remote_codecs too
     */
    class StreamClass {}

    class StreamPrivate {}

    /**
     * You must override the add_remote_candidate in a subclass
     */
    class StreamTransmitterClass {}

    class StreamTransmitterPrivate {}

    /**
     * You must override both methods in a subclass.
     */
    class TransmitterClass {}

    class TransmitterPrivate {}

    class _RtpHeaderExtension {
        // Own fields of Farstream-0.1._RtpHeaderExtension

        id: number;
        direction: StreamDirection;
        uri: string;
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
