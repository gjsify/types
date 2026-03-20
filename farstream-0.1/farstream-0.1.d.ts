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
import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Farstream {
    /**
     * Farstream-0.1
     */

    /**
     * @gir-type Enum
     */
    export namespace CandidateType {
        export const $gtype: GObject.GType<CandidateType>;
    }

    /**
     * An enum for the type of candidate used/reported
     * @gir-type Enum
     */
    enum CandidateType {
        HOST,
        SRFLX,
        PRFLX,
        RELAY,
        MULTICAST,
    }

    /**
     * @gir-type Enum
     */
    export namespace ComponentType {
        export const $gtype: GObject.GType<ComponentType>;
    }

    /**
     * This enum contains the component IDs defined in ICE-19
     * @gir-type Enum
     */
    enum ComponentType {
        NONE,
        RTP,
        RTCP,
    }

    /**
     * An enum that represents the different DTMF event that can be sent to a
     * {@link Farstream.Session}. The values corresponds those those defined in RFC 4733
     * The rest of the possibles values are in the IANA registry at:
     * http://www.iana.org/assignments/audio-telephone-event-registry
     * @gir-type Struct
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
    }

    /**
     * @gir-type Enum
     */
    export namespace DTMFMethod {
        export const $gtype: GObject.GType<DTMFMethod>;
    }

    /**
     * An enum that represents the different ways a DTMF event can be sent
     * @gir-type Enum
     */
    enum DTMFMethod {
        RTP_RFC4733,
        SOUND,
    }

    /**
     * This is the enum of error numbers that will come either on the "error"
     * signal, from the Gst Bus or for error in the FS_ERROR domain in GErrors
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static CONSTRUCTION: number;
        static INTERNAL: number;
        static INVALID_ARGUMENTS: number;
        static NETWORK: number;
        static NOT_IMPLEMENTED: number;
        static NEGOTIATION_FAILED: number;
        static UNKNOWN_CODEC: number;
        static NO_CODECS: number;
        static NO_CODECS_LEFT: number;
        static CONNECTION_FAILED: number;
        static DISPOSED: number;
        static ALREADY_EXISTS: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace MediaType {
        export const $gtype: GObject.GType<MediaType>;
    }

    /**
     * Enum used to signify the media type of a codec or stream.
     * @gir-type Enum
     */
    enum MediaType {
        AUDIO,
        VIDEO,
        LAST,
    }

    /**
     * @gir-type Enum
     */
    export namespace NetworkProtocol {
        export const $gtype: GObject.GType<NetworkProtocol>;
    }

    /**
     * An enum for the base IP protocol
     * @gir-type Enum
     */
    enum NetworkProtocol {
        UDP,
        TCP,
    }

    /**
     * @gir-type Enum
     */
    export namespace StreamState {
        export const $gtype: GObject.GType<StreamState>;
    }

    /**
     * These are the possible states of a stream, a simple multicast stream
     * could only be in "disconnected" or "ready" state.
     * An stream using an ICE transmitter would use all of these.
     * @gir-type Enum
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
     * Copies a GList of {@link Farstream.Candidate} and its contents
     * @param candidate_list A GList of {@link Farstream.Candidate}
     * @returns a new GList of {@link Farstream.Candidate}
     */
    function candidate_list_copy(candidate_list: Codec[]): Codec[];
    /**
     * Verifies if two glist of fscodecs are identical
     * @param list1 a {@link GLib.List} of {@link Farstream.Codec}
     * @param list2 a {@link GLib.List} of {@link Farstream.Codec}
     * @returns `true` if they are identical, `false` otherwise
     */
    function codec_list_are_equal(list1: Codec[], list2: Codec[]): boolean;
    /**
     * Copies a list of {@link Farstream.Codec} structures.
     * @param codec_list a GList of {@link Farstream.Codec} to copy
     * @returns The new list.
     */
    function codec_list_copy(codec_list: Codec[]): Codec[];
    /**
     * Reads the content of a {@link GLib.KeyFile} of the following format into
     * a {@link GLib.List} of {@link Farstream.Codec} structures.
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
     * @param filename Name of the {@link GLib.KeyFile} to read the codecs parameters from
     * @returns The {@link GLib.List} of {@link Farstream.Codec} or `null` if the keyfile was empty or an error occured.
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
     * @param object a {@link GObject.Object} to match against the message
     * @param message a {@link Gst.Message} to parse
     * @returns `true` if the message matches the object and is valid.
     */
    function parse_error(object: GObject.Object, message: Gst.Message): [boolean, Error, string];
    /**
     * Does a deep copy of a {@link GLib.List} of {@link Farstream.RtpHeaderExtension}
     * @param extensions a {@link GLib.List} of {@link Farstream.RtpHeaderExtension}
     * @returns a new {@link GLib.List} of {@link Farstream.RtpHeaderExtension}
     */
    function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[];
    /**
     * Reads the content of a {@link GLib.KeyFile} of the following format into a
     * {@link GLib.List} of {@link Farstream.RtpHeaderExtension} structures.
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
     * @param filename Name of the {@link GLib.KeyFile} to read the RTP Header Extensions from
     * @param media_type The media type for which to get header extensions
     * @returns a {@link GLib.List} of {@link Farstream.RtpHeaderExtension} that must be freed with `fs_rtp_header_extension_list_destroy()`
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
     * @returns The default codec preferences for this plugin. This {@link GLib.List} should be freed with `fs_codec_list_destroy()`
     */
    function utils_get_default_codec_preferences(element: Gst.Element): Codec[];
    /**
     * @param element
     */
    function utils_get_default_element_properties(element: Gst.Element): GLib.KeyFile;
    /**
     * These default rtp header extension preferences should work with the elements
     * that are available in the main GStreamer element repositories.
     * They should be suitable for standards based protocols like SIP or XMPP.
     * @param element Element for which to fetch default RTP Header Extension preferences
     * @param media_type The {@link Farstream.MediaType} for which to get default RTP Header Extension preferences
     * @returns The default rtp header extension preferences for this plugin, this {@link GLib.List} should be freed with `fs_codec_list_destroy()`
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
     * @param element The {@link Gst.Element}
     * @param bitrate The bitrate in bits/sec
     */
    function utils_set_bitrate(element: Gst.Element, bitrate: number): void;
    /**
     * @gir-type Alias
     */
    type CandidateList = object | null;
    /**
     * @gir-type Alias
     */
    type CodecGList = object | null;
    /**
     * @gir-type Alias
     */
    type RtpHeaderExtension = object | null;
    /**
     * @gir-type Alias
     */
    type RtpHeaderExtensionGList = object | null;
    /**
     * @gir-type Flags
     */
    export namespace StreamDirection {
        export const $gtype: GObject.GType<StreamDirection>;
    }

    /**
     * An enum for specifying the direction of a stream
     * @gir-type Flags
     */
    enum StreamDirection {
        NONE,
        SEND,
        RECV,
        BOTH,
    }

    namespace Conference {
        // Signal signatures
        interface SignalSignatures extends Gst.Bin.SignalSignatures {
            'notify::async-handling': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Bin.ConstructorProps, Gst.ChildProxy.ConstructorProps {}
    }

    /**
     * The {@link Farstream.Conference} structure, all the members are private
     * @gir-type Class
     */
    class Conference extends Gst.Bin implements Gst.ChildProxy {
        static $gtype: GObject.GType<Conference>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Conference.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Conference.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Conference.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Conference.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Conference.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Conference.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Conference.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Conference.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Create a new Farstream Participant for the type of the given conference.
         * @virtual
         */
        vfunc_new_participant(): Participant;
        /**
         * Create a new Farstream session for the given conference.
         * @param media_type {@link Farstream.MediaType} of the new session
         * @virtual
         */
        vfunc_new_session(media_type: MediaType): Session;

        // Methods

        /**
         * Create a new Farstream Participant for the type of the given conference.
         * @returns the new {@link Farstream.Participant} that has been created. The {@link Farstream.Participant} is owned by the user and he must unref it when he is done with it.
         */
        new_participant(): Participant;
        /**
         * Create a new Farstream session for the given conference.
         * @param media_type {@link Farstream.MediaType} of the new session
         * @returns the new {@link Farstream.Session} that has been created. The {@link Farstream.Session} must be unref'd by the user when closing the session.
         */
        new_session(media_type: MediaType | null): Session;
        /** @category Inherited from Gst.Object */
        get name(): string;
        set name(val: string);
        /**
         * @param name
         */
        get_child_by_name(name: string): Gst.Object;
        /**
         * @param index
         */
        get_child_by_index(index: number): Gst.Object;
        get_children_count(): number;
        /**
         * @param index
         * @virtual
         */
        vfunc_get_child_by_index(index: number): Gst.Object;
        /**
         * @virtual
         */
        vfunc_get_children_count(): number;
        /**
         * @param name
         */
        set_name(name: string): boolean;
        get_name(): string;
        /**
         * @param name_prefix
         */
        set_name_prefix(name_prefix: string): void;
        get_name_prefix(): string;
        /**
         * @param parent
         */
        set_parent(parent: Gst.Object): boolean;
        get_parent(): Gst.Object;
        unparent(): void;
        /**
         * @param ancestor
         */
        has_ancestor(ancestor: Gst.Object): boolean;
        /**
         * @param newobj
         */
        replace(newobj: Gst.Object): void;
        get_path_string(): string;
        /**
         * @param parent
         */
        save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        /**
         * @param self
         */
        restore_thyself(self: libxml2.NodePtr): void;
        /**
         * @param error
         * @param debug
         */
        default_error(error: GLib.Error, debug: string): void;
        /**
         * @param parent
         * @virtual
         */
        vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        /**
         * @param self
         * @virtual
         */
        vfunc_restore_thyself(self: libxml2.NodePtr): void;
    }

    namespace ElementAddedNotifier {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when an element is added to a {@link Gst.Bin} that was added
             * to this object or one of its sub-bins.
             * Be careful, there is no guarantee that this will be emitted on your
             * main thread, it will be emitted in the thread that added the element.
             * The bin may be `null` if this is the top-level bin.
             * @signal
             * @run-last
             */
            'element-added': (arg0: Gst.Bin, arg1: Gst.Element) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * All members are private
     * @gir-type Class
     */
    class ElementAddedNotifier extends GObject.Object {
        static $gtype: GObject.GType<ElementAddedNotifier>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ElementAddedNotifier.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ElementAddedNotifier.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ElementAddedNotifier;

        // Signals

        /** @signal */
        connect<K extends keyof ElementAddedNotifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ElementAddedNotifier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ElementAddedNotifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ElementAddedNotifier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ElementAddedNotifier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ElementAddedNotifier.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a {@link Gst.Bin} to on which the {@link Farstream.ElementAddedNotifier.SignalSignatures.element_added | Farstream.ElementAddedNotifier::element-added} signal
         * will be called on every element and sub-element present and added in the
         * future.
         * @param bin A {@link Gst.Bin} to watch to added elements
         */
        add(bin: Gst.Bin): void;
        /**
         * Stop watching the passed bin and its subbins.
         * @param bin A {@link Gst.Bin} to stop watching
         * @returns `true` if the {@link Gst.Bin} was being watched, `false` otherwise
         */
        remove(bin: Gst.Bin): boolean;
        /**
         * Same as first calling `fs_utils_get_default_element_properties()` and using
         * the result with
         * `fs_element_added_notifier_set_properties_from_keyfile()` .
         *
         * This is binding friendly (since GKeyFile doesn't have a boxed type).
         * @param element Element for which to set the default codec preferences
         */
        set_default_properties(element: Gst.Element): void;
        /**
         * Same as `fs_element_added_notifier_set_properties_from_keyfile()` but using
         * the name of the file to load instead of the {@link GLib.KeyFile} directly.
         * @param filename The name of the keyfile to use
         * @returns `true` if the file was successfully loaded, `false` otherwise
         */
        set_properties_from_file(filename: string): boolean;
        /**
         * Using a {@link GLib.KeyFile} where the groups are the element's type or name
         * and the key=value are the property and its value, this function
         * will set the properties on the elements added to this object after
         * this function has been called.  It will take ownership of the
         * GKeyFile structure. It will first try the group as the element type, if that
         * does not match, it will check its name.
         * @param keyfile a {@link GLib.KeyFile}
         */
        set_properties_from_keyfile(keyfile: GLib.KeyFile): void;
    }

    namespace Participant {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * All members are private (access them using the properties)
     * @gir-type Class
     */
    abstract class Participant extends Gst.Object {
        static $gtype: GObject.GType<Participant>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Participant.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Participant.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Participant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Participant.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Participant.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Participant.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Participant.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Participant.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.TypeModule.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.TypeModule.ConstructorProps, GObject.TypePlugin.ConstructorProps {}
    }

    /**
     * This structure represents a plugin, it is opaque.
     * @gir-type Class
     */
    class Plugin extends GObject.TypeModule implements GObject.TypePlugin {
        static $gtype: GObject.GType<Plugin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the list of all available plugins of a certain type
         * @param type_suffix Get list of plugins with this type suffix
         */
        static list_available(type_suffix: string): string[];
        /**
         * Calls the `complete_interface_info` function from the
         * {@link GObject.TypePluginClass} of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         * @param instance_type the {@link GObject.GType} of an instantiatable type to which the interface  is added
         * @param interface_type the {@link GObject.GType} of the interface whose info is completed
         * @param info the {@link GObject.InterfaceInfo} to fill in
         */
        complete_interface_info(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            info: GObject.InterfaceInfo,
        ): void;
        /**
         * Calls the `complete_type_info` function from the {@link GObject.TypePluginClass} of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         * @param g_type the {@link GObject.GType} whose info is completed
         * @param info the {@link GObject.TypeInfo} struct to fill in
         * @param value_table the {@link GObject.TypeValueTable} to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
        /**
         * Calls the `unuse_plugin` function from the {@link GObject.TypePluginClass} of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the {@link GObject.TypePluginClass} of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;
        /**
         * @param args
         */
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * This signal is emitted in any error condition, it can be emitted on any
             * thread. Applications should listen to the GstBus for errors.
             * @signal
             * @run-last
             */
            error: (arg0: GObject.Object, arg1: Error, arg2: string) => void;
            'notify::codec-preferences': (pspec: GObject.ParamSpec) => void;
            'notify::codecs': (pspec: GObject.ParamSpec) => void;
            'notify::codecs-without-config': (pspec: GObject.ParamSpec) => void;
            'notify::conference': (pspec: GObject.ParamSpec) => void;
            'notify::current-send-codec': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::media-type': (pspec: GObject.ParamSpec) => void;
            'notify::sink-pad': (pspec: GObject.ParamSpec) => void;
            'notify::tos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            codec_preferences: Codec[];
            codecPreferences: Codec[];
            codecs: Codec[];
            codecs_without_config: Codec[];
            codecsWithoutConfig: Codec[];
            conference: Conference;
            current_send_codec: Codec;
            currentSendCodec: Codec;
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
     * @gir-type Class
     */
    abstract class Session extends Gst.Object {
        static $gtype: GObject.GType<Session>;

        // Properties

        /**
         * This is the current preferences list for the local codecs. It is
         * set by the user to specify the codec options and priorities. The user may
         * change its value with `fs_session_set_codec_preferences()` at any time
         * during a session. It is a {@link GLib.List} of {@link Farstream.Codec}.
         * The user must free this codec list using `fs_codec_list_destroy()` when done.
         *
         * The payload type may be a valid dynamic PT (96-127), `FS_CODEC_ID_DISABLE`
         * or `FS_CODEC_ID_ANY`. If the encoding name is "reserve-pt", then the
         * payload type of the codec will be "reserved" and not be used by any
         * dynamically assigned payload type.
         * @read-only
         */
        get codec_preferences(): Codec[];
        /**
         * This is the current preferences list for the local codecs. It is
         * set by the user to specify the codec options and priorities. The user may
         * change its value with `fs_session_set_codec_preferences()` at any time
         * during a session. It is a {@link GLib.List} of {@link Farstream.Codec}.
         * The user must free this codec list using `fs_codec_list_destroy()` when done.
         *
         * The payload type may be a valid dynamic PT (96-127), `FS_CODEC_ID_DISABLE`
         * or `FS_CODEC_ID_ANY`. If the encoding name is "reserve-pt", then the
         * payload type of the codec will be "reserved" and not be used by any
         * dynamically assigned payload type.
         * @read-only
         */
        get codecPreferences(): Codec[];
        /**
         * This is the list of codecs used for this session. It will include the
         * codecs and payload type used to receive media on this session. It will
         * also include any configuration parameter that must be transmitted reliably
         * for the other end to decode the content.
         *
         * It may change when the codec preferences are set, when codecs are set
         * on a {@link Farstream.Stream} in this session, when a {@link Farstream.Stream} is destroyed or
         * asynchronously when new config data is discovered.
         *
         * If any configuration parameter needs to be discovered, this property
         * will be `null` until they have been discovered. One can always get
         * the codecs from {@link Farstream.Session.codecs_without_config}.
         * The "farstream-codecs-changed" message will be emitted whenever the value
         * of this property changes.
         *
         * It is a {@link GLib.List} of {@link Farstream.Codec}. User must free this codec list using
         * `fs_codec_list_destroy()` when done.
         * @read-only
         */
        get codecs(): Codec[];
        /**
         * This is the same list of codecs as {@link Farstream.Session.codecs} without
         * the configuration information that describes the data sent. It is suitable
         * for configurations where a list of codecs is shared by many senders.
         * If one is using codecs such as Theora, Vorbis or H.264 that require
         * such information to be transmitted, the configuration data should be
         * included in the stream and retransmitted regularly.
         *
         * It may change when the codec preferences are set, when codecs are set
         * on a {@link Farstream.Stream} in this session, when a {@link Farstream.Stream} is destroyed or
         * asynchronously when new config data is discovered.
         *
         * The "farstream-codecs-changed" message will be emitted whenever the value
         * of this property changes.
         *
         * It is a {@link GLib.List} of {@link Farstream.Codec}. User must free this codec list using
         * `fs_codec_list_destroy()` when done.
         * @read-only
         */
        get codecs_without_config(): Codec[];
        /**
         * This is the same list of codecs as {@link Farstream.Session.codecs} without
         * the configuration information that describes the data sent. It is suitable
         * for configurations where a list of codecs is shared by many senders.
         * If one is using codecs such as Theora, Vorbis or H.264 that require
         * such information to be transmitted, the configuration data should be
         * included in the stream and retransmitted regularly.
         *
         * It may change when the codec preferences are set, when codecs are set
         * on a {@link Farstream.Stream} in this session, when a {@link Farstream.Stream} is destroyed or
         * asynchronously when new config data is discovered.
         *
         * The "farstream-codecs-changed" message will be emitted whenever the value
         * of this property changes.
         *
         * It is a {@link GLib.List} of {@link Farstream.Codec}. User must free this codec list using
         * `fs_codec_list_destroy()` when done.
         * @read-only
         */
        get codecsWithoutConfig(): Codec[];
        /**
         * The {@link Farstream.Conference} parent of this session. This property is a
         * construct param and is read-only.
         * @construct-only
         */
        get conference(): Conference;
        /**
         * Indicates the currently active send codec. A user can change the active
         * send codec by calling `fs_session_set_send_codec()`. The send codec could
         * also be automatically changed by Farstream. This property is an
         * {@link Farstream.Codec}. User must free the codec using `fs_codec_destroy()` when done.
         * The "farstream-send-codec-changed" message is emitted on the bus when
         * the value of this property changes.
         * @read-only
         */
        get current_send_codec(): Codec;
        /**
         * Indicates the currently active send codec. A user can change the active
         * send codec by calling `fs_session_set_send_codec()`. The send codec could
         * also be automatically changed by Farstream. This property is an
         * {@link Farstream.Codec}. User must free the codec using `fs_codec_destroy()` when done.
         * The "farstream-send-codec-changed" message is emitted on the bus when
         * the value of this property changes.
         * @read-only
         */
        get currentSendCodec(): Codec;
        /**
         * The ID of the session, the first number of the pads linked to this session
         * will be this id
         * @construct-only
         */
        get id(): number;
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         * @construct-only
         */
        get media_type(): MediaType;
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         * @construct-only
         */
        get mediaType(): MediaType;
        /**
         * The Gstreamer sink pad that must be used to send media data on this
         * session. User must unref this GstPad when done with it.
         * @read-only
         */
        get sink_pad(): Gst.Pad;
        /**
         * The Gstreamer sink pad that must be used to send media data on this
         * session. User must unref this GstPad when done with it.
         * @read-only
         */
        get sinkPad(): Gst.Pad;
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        get tos(): number;
        set tos(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Session.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Some codec updates need to be reliably transmitted to the other side
         * because they contain important parameters required to decode the media.
         * Other codec updates, caused by user action, don't.
         * @param old_codecs Codecs previously retrieved from the {@link Farstream.Session.codecs} property
         * @param new_codecs Codecs recently retrieved from the {@link Farstream.Session.codecs} property
         * @virtual
         */
        vfunc_codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[];
        /**
         * Returns the GType of the stream transmitter, bindings can use it
         * to validate/convert the parameters passed to `fs_session_new_stream()`.
         * @param transmitter The name of the transmitter
         * @virtual
         */
        vfunc_get_stream_transmitter_type(transmitter: string): GObject.GType;
        /**
         * Get the list of all available transmitters for this session.
         * @virtual
         */
        vfunc_list_transmitters(): string[];
        /**
         * This function creates a stream for the given participant into the active session.
         * @param participant {@link Farstream.Participant} of a participant for the new stream
         * @param direction {@link Farstream.StreamDirection} describing the direction of the new stream that will be created for this participant
         * @virtual
         */
        vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream;
        /**
         * Set the list of desired codec preferences. The user may
         * change this value during an ongoing session. Note that doing this can cause
         * the codecs to change. Therefore this requires the user to fetch
         * the new codecs and renegotiate them with the peers. It is a {@link GLib.List}
         * of {@link Farstream.Codec}. The changes are immediately effective.
         * The function does not take ownership of the list.
         *
         * The payload type may be a valid dynamic PT (96-127), `FS_CODEC_ID_DISABLE`
         * or `FS_CODEC_ID_ANY`. If the encoding name is "reserve-pt", then the
         * payload type of the codec will be "reserved" and not be used by any
         * dynamically assigned payload type.
         *
         * If the list of specifications would invalidate all codecs, an error will
         * be returned.
         * @param codec_preferences a {@link GLib.List} of {@link Farstream.Codec} with the desired configuration
         * @virtual
         */
        vfunc_set_codec_preferences(codec_preferences: Codec[]): boolean;
        /**
         * This function will set the currently being sent codec for all streams in this
         * session. The given {@link Farstream.Codec} must be taken directly from the #codecs
         * property of the session. If the given codec is not in the codecs
         * list, `error` will be set and `false` will be returned. The `send_codec` will be
         * copied so it must be free'd using `fs_codec_destroy()` when done.
         * @param send_codec a {@link Farstream.Codec} representing the codec to send
         * @virtual
         */
        vfunc_set_send_codec(send_codec: Codec): boolean;
        /**
         * This function will start sending a telephony event (such as a DTMF
         * tone) on the {@link Farstream.Session}. You have to call the function
         * `fs_session_stop_telephony_event()` to stop it.
         *
         * If this function returns `true`, a "farstream-telephony-event-started" will
         * always be emitted when the event is actually played out.
         * @param event A `FsStreamDTMFEvent` or another number defined at http://www.iana.org/assignments/audio-telephone-event-registry
         * @param volume The volume in dBm0 without the negative sign. Should be between 0 and 36. Higher values mean lower volume
         * @virtual
         */
        vfunc_start_telephony_event(event: number, volume: number): boolean;
        /**
         * This function will stop sending a telephony event started by
         * `fs_session_start_telephony_event()`. If the event was being sent
         * for less than 50ms, it will be sent for 50ms minimum. If the
         * duration was a positive and the event is not over, it will cut it
         * short.
         *
         * If this function returns `true`, a "farstream-telephony-event-stopped" will
         * always be emitted when the event is actually stopped.
         * @virtual
         */
        vfunc_stop_telephony_event(): boolean;

        // Methods

        /**
         * Some codec updates need to be reliably transmitted to the other side
         * because they contain important parameters required to decode the media.
         * Other codec updates, caused by user action, don't.
         * @param old_codecs Codecs previously retrieved from the {@link Farstream.Session.codecs} property
         * @param new_codecs Codecs recently retrieved from the {@link Farstream.Session.codecs} property
         * @returns A new {@link GLib.List} of {@link Farstream.Codec} that need to be resent or `null` if there are none. This list must be freed with `fs_codec_list_destroy()`.
         */
        codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[];
        /**
         * This will cause the session to remove all links to other objects and to
         * remove itself from the {@link Farstream.Conference}, it will also destroy all {@link Farstream.Stream}
         * inside this {@link Farstream.Session} Once a {@link Farstream.Session} has been destroyed, it
         * can not be used anymore.
         *
         * It is strongly recommended to call this function from the main thread because
         * releasing the application's reference to a session.
         */
        destroy(): void;
        /**
         * This function emit the "error" signal on a {@link Farstream.Session}, it should only be
         * called by subclasses.
         * @param error_no The number of the error of type {@link Farstream.Error}
         * @param error_msg Error message
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * Returns the GType of the stream transmitter, bindings can use it
         * to validate/convert the parameters passed to `fs_session_new_stream()`.
         * @param transmitter The name of the transmitter
         * @returns The {@link GObject.GType} of the stream transmitter
         */
        get_stream_transmitter_type(transmitter: string): GObject.GType;
        /**
         * Get the list of all available transmitters for this session.
         * @returns a newly-allocagted `null` terminated array of named of transmitters or `null` if no transmitter is needed for this type of session. It should be freed with `g_strfreev()`.
         */
        list_transmitters(): string[];
        /**
         * This function creates a stream for the given participant into the active session.
         * @param participant {@link Farstream.Participant} of a participant for the new stream
         * @param direction {@link Farstream.StreamDirection} describing the direction of the new stream that will be created for this participant
         * @returns the new {@link Farstream.Stream} that has been created. User must unref the {@link Farstream.Stream} when the stream is ended. If an error occured, returns NULL.
         */
        new_stream(participant: Participant, direction: StreamDirection | null): Stream;
        /**
         * Parses a "farstream-codecs-changed" message and checks if it matches
         * the `session` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the session and is valid.
         */
        parse_codecs_changed(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-send-codec-changed" message and checks if it matches
         * the `session` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the session and is valid.
         */
        parse_send_codec_changed(message: Gst.Message): [boolean, Codec, Codec[]];
        /**
         * Parses a "farstream-telephony-event-started" message and checks if it matches
         * the `session` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the session and is valid.
         */
        parse_telephony_event_started(message: Gst.Message): [boolean, DTMFMethod, DTMFEvent, number];
        /**
         * Parses a "farstream-telephony-event-stopped" message and checks if it matches
         * the `session` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the session and is valid.
         */
        parse_telephony_event_stopped(message: Gst.Message): [boolean, DTMFMethod];
        /**
         * Set the list of desired codec preferences. The user may
         * change this value during an ongoing session. Note that doing this can cause
         * the codecs to change. Therefore this requires the user to fetch
         * the new codecs and renegotiate them with the peers. It is a {@link GLib.List}
         * of {@link Farstream.Codec}. The changes are immediately effective.
         * The function does not take ownership of the list.
         *
         * The payload type may be a valid dynamic PT (96-127), `FS_CODEC_ID_DISABLE`
         * or `FS_CODEC_ID_ANY`. If the encoding name is "reserve-pt", then the
         * payload type of the codec will be "reserved" and not be used by any
         * dynamically assigned payload type.
         *
         * If the list of specifications would invalidate all codecs, an error will
         * be returned.
         * @param codec_preferences a {@link GLib.List} of {@link Farstream.Codec} with the desired configuration
         * @returns `true` on success, `false` on error.
         */
        set_codec_preferences(codec_preferences: Codec[]): boolean;
        /**
         * This function will set the currently being sent codec for all streams in this
         * session. The given {@link Farstream.Codec} must be taken directly from the #codecs
         * property of the session. If the given codec is not in the codecs
         * list, `error` will be set and `false` will be returned. The `send_codec` will be
         * copied so it must be free'd using `fs_codec_destroy()` when done.
         * @param send_codec a {@link Farstream.Codec} representing the codec to send
         * @returns `false` if the send codec couldn't be set.
         */
        set_send_codec(send_codec: Codec): boolean;
        /**
         * This function will start sending a telephony event (such as a DTMF
         * tone) on the {@link Farstream.Session}. You have to call the function
         * `fs_session_stop_telephony_event()` to stop it.
         *
         * If this function returns `true`, a "farstream-telephony-event-started" will
         * always be emitted when the event is actually played out.
         * @param event A `FsStreamDTMFEvent` or another number defined at http://www.iana.org/assignments/audio-telephone-event-registry
         * @param volume The volume in dBm0 without the negative sign. Should be between 0 and 36. Higher values mean lower volume
         * @returns `true` if sucessful, it can return `false` if the {@link Farstream.Stream} does not support this telephony event.
         */
        start_telephony_event(event: number, volume: number): boolean;
        /**
         * This function will stop sending a telephony event started by
         * `fs_session_start_telephony_event()`. If the event was being sent
         * for less than 50ms, it will be sent for 50ms minimum. If the
         * duration was a positive and the event is not over, it will cut it
         * short.
         *
         * If this function returns `true`, a "farstream-telephony-event-stopped" will
         * always be emitted when the event is actually stopped.
         * @returns `true` if sucessful, it can return `false` if the {@link Farstream.Session} does not support telephony events or if no telephony event is being sent
         */
        stop_telephony_event(): boolean;
    }

    namespace Stream {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * This signal is emitted in any error condition
             * @signal
             * @run-last
             */
            error: (arg0: Error, arg1: string) => void;
            /**
             * This signal is emitted when a new gst source pad has been created for a
             * specific codec being received. There will be a different source pad for
             * each codec that is received. The user must ref the {@link Gst.Pad} if he wants to
             * keep it. The user should not modify the {@link Farstream.Codec} and must copy it if he
             * wants to use it outside the callback scope.
             *
             * This signal is not emitted on the main thread, but on GStreamer's streaming
             * thread!
             * @signal
             * @run-last
             */
            'src-pad-added': (arg0: Gst.Pad, arg1: Codec) => void;
            'notify::current-recv-codecs': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::negotiated-codecs': (pspec: GObject.ParamSpec) => void;
            'notify::participant': (pspec: GObject.ParamSpec) => void;
            'notify::remote-codecs': (pspec: GObject.ParamSpec) => void;
            'notify::session': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            current_recv_codecs: Codec[];
            currentRecvCodecs: Codec[];
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
     * @gir-type Class
     */
    abstract class Stream extends Gst.Object {
        static $gtype: GObject.GType<Stream>;

        // Properties

        /**
         * This is the list of codecs that have been received by this stream.
         * The user must free the list if `fs_codec_list_destroy()`.
         * The "farstream-recv-codecs-changed" message is send on the {@link Gst.Bus}
         * when the value of this property changes.
         * It is normally emitted right after {@link Farstream.Stream.SignalSignatures.src_pad_added | Farstream.Stream::src-pad-added}
         * only if that codec was not previously received in this stream, but it can
         * also be emitted if the pad already exists, but the source material that
         * will come to it is different.
         * @read-only
         */
        get current_recv_codecs(): Codec[];
        /**
         * This is the list of codecs that have been received by this stream.
         * The user must free the list if `fs_codec_list_destroy()`.
         * The "farstream-recv-codecs-changed" message is send on the {@link Gst.Bus}
         * when the value of this property changes.
         * It is normally emitted right after {@link Farstream.Stream.SignalSignatures.src_pad_added | Farstream.Stream::src-pad-added}
         * only if that codec was not previously received in this stream, but it can
         * also be emitted if the pad already exists, but the source material that
         * will come to it is different.
         * @read-only
         */
        get currentRecvCodecs(): Codec[];
        /**
         * The direction of the stream. This property is set initially as a parameter
         * to the `fs_session_new_stream()` function. It can be changed later if
         * required by setting this property.
         */
        get direction(): StreamDirection;
        set direction(val: StreamDirection);
        /**
         * This is the list of negotiatied codecs, it is the same list as the list
         * of {@link Farstream.Codec} from the parent {@link Farstream.Session}, except that the codec config data
         * has been replaced with the data from the remote codecs for this stream.
         * This is the list of {@link Farstream.Codec} used to receive data from this stream.
         * It is a {@link GLib.List} of {@link Farstream.Codec}.
         * @read-only
         */
        get negotiated_codecs(): Codec[];
        /**
         * This is the list of negotiatied codecs, it is the same list as the list
         * of {@link Farstream.Codec} from the parent {@link Farstream.Session}, except that the codec config data
         * has been replaced with the data from the remote codecs for this stream.
         * This is the list of {@link Farstream.Codec} used to receive data from this stream.
         * It is a {@link GLib.List} of {@link Farstream.Codec}.
         * @read-only
         */
        get negotiatedCodecs(): Codec[];
        /**
         * The {@link Farstream.Participant} for this stream. This property is a construct param and
         * is read-only construction.
         * @construct-only
         */
        get participant(): Participant;
        /**
         * This is the list of remote codecs for this stream. They must be set by the
         * user as soon as they are known using `fs_stream_set_remote_codecs()`
         * (generally through external signaling). It is a {@link GLib.List} of {@link Farstream.Codec}.
         * @read-only
         */
        get remote_codecs(): Codec[];
        /**
         * This is the list of remote codecs for this stream. They must be set by the
         * user as soon as they are known using `fs_stream_set_remote_codecs()`
         * (generally through external signaling). It is a {@link GLib.List} of {@link Farstream.Codec}.
         * @read-only
         */
        get remoteCodecs(): Codec[];
        /**
         * The {@link Farstream.Session} for this stream. This property is a construct param and
         * is read-only construction.
         * @construct-only
         */
        get session(): Session;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Stream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
         * @virtual
         */
        vfunc_add_id(id: number): void;
        /**
         * This function adds remote candidates. Any new candidates are
         * added to the list. The candidates will be used to establish a connection
         * with the peer. A copy will be made so the user must free the
         * passed candidate using `fs_candidate_destroy()` when done.
         * @param candidates an {@link GLib.List} of {@link Farstream.Candidate} representing the remote candidates
         * @virtual
         */
        vfunc_add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a {@link GLib.List} of {@link Farstream.Candidate} to force
         * @virtual
         */
        vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * This function will set the list of remote codecs for this stream. If
         * the given remote codecs couldn't be negotiated with the list of local
         * codecs or already negotiated codecs for the corresponding {@link Farstream.Session}, `error`
         * will be set and `false` will be returned. The `remote_codecs` list will be
         * copied so it must be free'd using `fs_codec_list_destroy()` when done.
         * @param remote_codecs a {@link GLib.List} of {@link Farstream.Codec} representing the remote codecs
         * @virtual
         */
        vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean;
        /**
         * Set the transmitter to use for this stream. This function will only succeed
         * once.
         *
         * The parameters correspond to the varios GObject properties of the
         * selected stream transmitter.
         * @param transmitter Name of the type of transmitter to use for this stream
         * @param stream_transmitter_parameters (array length=stream_transmitter_n_parameters) (allow-none): an array of n_parameters {@link GObject.Parameter} struct that will be passed to the newly-create {@link Farstream.StreamTransmitter}
         * @param stream_transmitter_n_parameters Number of parametrs passed to the stream transmitter
         * @virtual
         */
        vfunc_set_transmitter(
            transmitter: string,
            stream_transmitter_parameters: GObject.Parameter,
            stream_transmitter_n_parameters: number,
        ): boolean;

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
         * passed candidate using `fs_candidate_destroy()` when done.
         * @param candidates an {@link GLib.List} of {@link Farstream.Candidate} representing the remote candidates
         * @returns TRUE if the candidate was valid, FALSE otherwise
         */
        add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This will cause the stream to remove all links to other objects and to
         * remove itself from the {@link Farstream.Session}. Once a {@link Farstream.Stream} has been destroyed, it
         * can not be used anymore.
         *
         * It is strongly recommended to call this function from the main thread because
         * releasing the application's reference to a stream.
         */
        destroy(): void;
        /**
         * This function emits the {@link Farstream.Stream.SignalSignatures.error | Farstream.Stream::error}" signal, it should only be
         * called by subclasses.
         * @param error_no The number of the error
         * @param error_msg Error message to be displayed to user
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * Emits the {@link Farstream.Stream.SignalSignatures.src_pad_added | Farstream.Stream::src-pad-added}" signal, it should only be
         * called by subclasses.
         * @param pad the {@link Gst.Pad} that this {@link Farstream.Stream} has created
         * @param codec The {@link Farstream.Codec} for this pad
         */
        emit_src_pad_added(pad: Gst.Pad, codec: Codec): void;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a {@link GLib.List} of {@link Farstream.Candidate} to force
         * @returns `true` if the candidates could be forced, `false` otherwise
         */
        force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * Parses a "farstream-component-state-changed" message and checks if it matches
         * the `stream` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the stream and is valid.
         */
        parse_component_state_changed(message: Gst.Message): [boolean, number, StreamState];
        /**
         * Parses a "farstream-local-candidates-prepared" message and checks if it matches
         * the `stream` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the stream and is valid.
         */
        parse_local_candidates_prepared(message: Gst.Message): boolean;
        /**
         * Parses a "farstream-new-active-candidate-pair" message and checks
         * if it matches the `stream` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the stream and is valid.
         */
        parse_new_active_candidate_pair(message: Gst.Message): [boolean, Candidate, Candidate];
        /**
         * Parses a "farstream-new-local-candidate" message and checks if it matches
         * the `stream` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the stream and is valid.
         */
        parse_new_local_candidate(message: Gst.Message): [boolean, Candidate];
        /**
         * Parses a "farstream-recv-codecs-changed" message and checks if it matches
         * the `stream` parameters.
         * @param message a {@link Gst.Message} to parse
         * @returns `true` if the message matches the stream and is valid.
         */
        parse_recv_codecs_changed(message: Gst.Message): [boolean, Codec[]];
        /**
         * This function will set the list of remote codecs for this stream. If
         * the given remote codecs couldn't be negotiated with the list of local
         * codecs or already negotiated codecs for the corresponding {@link Farstream.Session}, `error`
         * will be set and `false` will be returned. The `remote_codecs` list will be
         * copied so it must be free'd using `fs_codec_list_destroy()` when done.
         * @param remote_codecs a {@link GLib.List} of {@link Farstream.Codec} representing the remote codecs
         * @returns `false` if the remote codecs couldn't be set.
         */
        set_remote_codecs(remote_codecs: Codec[]): boolean;
        /**
         * Set the transmitter to use for this stream. This function will only succeed
         * once.
         *
         * The parameters correspond to the varios GObject properties of the
         * selected stream transmitter.
         * @param transmitter Name of the type of transmitter to use for this stream
         * @param stream_transmitter_parameters (array length=stream_transmitter_n_parameters) (allow-none): an array of n_parameters {@link GObject.Parameter} struct that will be passed to the newly-create {@link Farstream.StreamTransmitter}
         * @param stream_transmitter_n_parameters Number of parametrs passed to the stream transmitter
         * @returns `true` if the transmitter could be set, `false` otherwise
         */
        set_transmitter(
            transmitter: string,
            stream_transmitter_parameters: GObject.Parameter,
            stream_transmitter_n_parameters: number,
        ): boolean;
    }

    namespace StreamTransmitter {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * This signal is emitted in any error condition
             * @signal
             * @run-last
             */
            error: (arg0: Error, arg1: string) => void;
            /**
             * This signal is emitted when a buffer coming from a confirmed known source
             * is received.
             * @signal
             * @run-last
             */
            'known-source-packet-received': (arg0: number, arg1: any) => void;
            /**
             * This signal is emitted when all local candidates have been
             * prepared, an ICE implementation would send its SDP offer or answer.
             * @signal
             * @run-last
             */
            'local-candidates-prepared': () => void;
            /**
             * This signal is emitted when there is a new active chandidate pair that has
             * been established. This is specially useful for ICE where the active
             * candidate pair can change automatically due to network conditions. The user
             * must not modify the candidates and must copy them if he wants to use them
             * outside the callback scope.
             * @signal
             * @run-last
             */
            'new-active-candidate-pair': (arg0: Candidate, arg1: Candidate) => void;
            /**
             * This signal is emitted when a new local candidate is discovered.
             * @signal
             * @run-last
             */
            'new-local-candidate': (arg0: Candidate) => void;
            /**
             * This signal is emitted when the ICE state (or equivalent) of the component
             * changes
             * @signal
             * @run-last
             */
            'state-changed': (arg0: number, arg1: StreamState) => void;
            'notify::associate-on-source': (pspec: GObject.ParamSpec) => void;
            'notify::preferred-local-candidates': (pspec: GObject.ParamSpec) => void;
            'notify::sending': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            associate_on_source: boolean;
            associateOnSource: boolean;
            preferred_local_candidates: CandidateList;
            preferredLocalCandidates: CandidateList;
            sending: boolean;
        }
    }

    /**
     * All members are private, access them using methods and properties
     * @gir-type Class
     */
    abstract class StreamTransmitter extends Gst.Object {
        static $gtype: GObject.GType<StreamTransmitter>;

        // Properties

        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         * @construct-only
         */
        get associate_on_source(): boolean;
        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         * @construct-only
         */
        get associateOnSource(): boolean;
        /**
         * @construct-only
         */
        get preferred_local_candidates(): CandidateList;
        /**
         * @construct-only
         */
        get preferredLocalCandidates(): CandidateList;
        /**
         * A network source {@link Gst.Element} to be used by the {@link Farstream.Session}
         */
        get sending(): boolean;
        set sending(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StreamTransmitter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StreamTransmitter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StreamTransmitter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamTransmitter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StreamTransmitter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamTransmitter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StreamTransmitter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamTransmitter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * This function is used to add remote candidates to the transmitter
         * @param candidates a {@link GLib.List} of the remote candidates
         * @virtual
         */
        vfunc_add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a {@link GLib.List} of {@link Farstream.Candidate} to force
         * @virtual
         */
        vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * This function tells the transmitter to start gathering local candidates,
         * signals for new candidates and newly active candidates can be emitted
         * during the call to this function.
         * @virtual
         */
        vfunc_gather_local_candidates(): boolean;
        /**
         * This functions stops the {@link Farstream.StreamTransmitter}, it must be called before
         * the last reference is dropped.
         * @virtual
         */
        vfunc_stop(): void;

        // Methods

        /**
         * This function is used to add remote candidates to the transmitter
         * @param candidates a {@link GLib.List} of the remote candidates
         * @returns TRUE of the candidate could be added, FALSE if it couldnt (and the {@link Gst.GError} will be set)
         */
        add_remote_candidates(candidates: Candidate[]): boolean;
        /**
         * This function emit the "error" signal on a {@link Farstream.StreamTransmitter}, it should
         * only be called by subclasses.
         * @param error_no The number of the error
         * @param error_msg Error message (for the programmer)
         */
        emit_error(error_no: number, error_msg: string): void;
        /**
         * This function forces data to be sent immediately to the selected remote
         * candidate, by-passing any connectivity checks. There should be at most
         * one candidate per component.
         * @param remote_candidates a {@link GLib.List} of {@link Farstream.Candidate} to force
         * @returns `true` if the candidates could be forced, `false` otherwise
         */
        force_remote_candidates(remote_candidates: Candidate[]): boolean;
        /**
         * This function tells the transmitter to start gathering local candidates,
         * signals for new candidates and newly active candidates can be emitted
         * during the call to this function.
         * @returns `true` if it succeeds (or is not implemented), `false` otherwise
         */
        gather_local_candidates(): boolean;
        /**
         * This functions stops the {@link Farstream.StreamTransmitter}, it must be called before
         * the last reference is dropped.
         */
        stop(): void;
    }

    namespace Transmitter {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * This signal is emitted in any error condition
             * @signal
             * @run-last
             */
            error: (arg0: Error, arg1: string) => void;
            /**
             * This signal is emitted when the transmitter wants to get a filter for
             * to use if sending is disabled. If you want to drop all buffers, just
             * don't listen to the signal.
             *
             * This element should have a "sending" property that can be changed with the
             * sending state of the stream. It should default to `true`.
             * @signal
             * @run-last
             */
            'get-recvonly-filter': (arg0: number) => Gst.Element;
            'notify::components': (pspec: GObject.ParamSpec) => void;
            'notify::gst-sink': (pspec: GObject.ParamSpec) => void;
            'notify::gst-src': (pspec: GObject.ParamSpec) => void;
            'notify::tos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            components: number;
            gst_sink: Gst.Element;
            gstSink: Gst.Element;
            gst_src: Gst.Element;
            gstSrc: Gst.Element;
            tos: number;
        }
    }

    /**
     * All members are private, access them using methods and properties
     * @gir-type Class
     */
    abstract class Transmitter extends Gst.Object {
        static $gtype: GObject.GType<Transmitter>;

        // Properties

        /**
         * The number of components to create
         * @construct-only
         */
        get components(): number;
        /**
         * A network source {@link Gst.Element} to be used by the {@link Farstream.Session}
         * These element's sink must have async=FALSE
         * This element MUST provide a pad named "sink\%d" per component.
         * These pads number must start at 1 (the \%d corresponds to the component
         * number).
         * These pads MUST be static pads.
         * @read-only
         */
        get gst_sink(): Gst.Element;
        /**
         * A network source {@link Gst.Element} to be used by the {@link Farstream.Session}
         * These element's sink must have async=FALSE
         * This element MUST provide a pad named "sink\%d" per component.
         * These pads number must start at 1 (the \%d corresponds to the component
         * number).
         * These pads MUST be static pads.
         * @read-only
         */
        get gstSink(): Gst.Element;
        /**
         * A network source {@link Gst.Element} to be used by the {@link Farstream.Session}
         * This element MUST provide a source pad named "src%d" per component.
         * These pads number must start at 1 (the %d corresponds to the component
         * number).
         * These pads MUST be static pads.
         * @read-only
         */
        get gst_src(): Gst.Element;
        /**
         * A network source {@link Gst.Element} to be used by the {@link Farstream.Session}
         * This element MUST provide a source pad named "src%d" per component.
         * These pads number must start at 1 (the %d corresponds to the component
         * number).
         * These pads MUST be static pads.
         * @read-only
         */
        get gstSrc(): Gst.Element;
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        get tos(): number;
        set tos(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transmitter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Transmitter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: string, components: number, tos: number): Transmitter;

        // Signals

        /** @signal */
        connect<K extends keyof Transmitter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transmitter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Transmitter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transmitter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Transmitter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Transmitter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
         * @virtual
         */
        vfunc_get_stream_transmitter_type(): GObject.GType;
        /**
         * This function will create a new {@link Farstream.StreamTransmitter} element for a
         * specific participant for this {@link Farstream.Transmitter}
         * @param participant the {@link Farstream.Participant} for which the {@link Farstream.Stream} using this new {@link Farstream.StreamTransmitter} is created
         * @param n_parameters The number of parameters to pass to the newly created {@link Farstream.StreamTransmitter}
         * @param parameters an array of {@link GObject.Parameter}
         * @virtual
         */
        vfunc_new_stream_transmitter(
            participant: Participant,
            n_parameters: number,
            parameters: GObject.Parameter,
        ): StreamTransmitter;

        // Methods

        /**
         * This function emit the "error" signal on a {@link Farstream.Transmitter}, it should
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
         * @returns a {@link Gst.Element} to use as the filter or `null`
         */
        get_recvonly_filter(component: number): Gst.Element;
        /**
         * This function returns the GObject type for the stream transmitter.
         * This is meant for bindings that need to introspect the type of arguments
         * that can be passed to the _new_stream_transmitter.
         * @returns the {@link GObject.GType}
         */
        get_stream_transmitter_type(): GObject.GType;
        /**
         * This function will create a new {@link Farstream.StreamTransmitter} element for a
         * specific participant for this {@link Farstream.Transmitter}
         * @param participant the {@link Farstream.Participant} for which the {@link Farstream.Stream} using this new {@link Farstream.StreamTransmitter} is created
         * @param n_parameters The number of parameters to pass to the newly created {@link Farstream.StreamTransmitter}
         * @param parameters an array of {@link GObject.Parameter}
         * @returns a new {@link Farstream.StreamTransmitter}, or NULL if there is an error
         */
        new_stream_transmitter(
            participant: Participant,
            n_parameters: number,
            parameters: GObject.Parameter,
        ): StreamTransmitter;
    }

    /**
     * Struct to hold information about ICE-19 compliant candidates
     * @gir-type Struct
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

        // Methods

        /**
         * Copies a {@link Farstream.Candidate} and its contents.
         * @returns a new {@link Farstream.Candidate}
         */
        copy(): Candidate;
        destroy(): void;
    }

    /**
     * This structure reprensents one codec that can be offered or received
     * @gir-type Struct
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

        static ['new'](id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec;

        // Methods

        /**
         * This function adds an new feedback parameter to a {@link Farstream.Codec}
         * @param type The type of the feedback parameter
         * @param subtype The subtype of the feedback parameter
         * @param extra_params The extra_params of the feeback parameter
         */
        add_feedback_parameter(type: string, subtype: string, extra_params: string): void;
        /**
         * This function adds an new optional parameter to a {@link Farstream.Codec}
         * @param name The name of the optional parameter
         * @param value The extra_params of the optional parameter
         */
        add_optional_parameter(name: string, value: string): void;
        /**
         * Compare two codecs, it will declare two codecs to be identical even
         * if their optional parameters are in a different order. `null` encoding names
         * are ignored.
         * @param codec2 Second codec
         * @returns `true` of the codecs are identical, `false` otherwise
         */
        are_equal(codec2: Codec): boolean;
        /**
         * Copies a {@link Farstream.Codec} structure.
         * @returns a copy of the codec
         */
        copy(): Codec;
        destroy(): void;
        /**
         * Finds the {@link Farstream.FeedbackParameter} in the {@link Farstream.Codec} that has the requested
         * subtype, type and extra_params. One of which must be non-NULL;
         * @param type The subtype of the parameter to search for or `null` for any type
         * @param subtype The subtype of the parameter to search for or `null` for any subtype
         * @param extra_params The extra_params of the parameter to search for or `null` for any extra_params
         * @returns the {@link Farstream.FeedbackParameter} from the {@link Farstream.Codec} or `null`
         */
        get_feedback_parameter(type: string, subtype: string, extra_params: string): FeedbackParameter;
        /**
         * Finds the {@link Farstream.CodecParameter} in the {@link Farstream.Codec} that has the requested name
         * and, if not `null`, the requested value
         * @param name The name of the parameter to search for
         * @param value The value of the parameter to search for or `null` for any value
         * @returns the {@link Farstream.CodecParameter} from the {@link Farstream.Codec} or `null`
         */
        get_optional_parameter(name: string, value: string): CodecParameter;
        /**
         * Removes an optional parameter from a codec.
         *
         * NULL param will do nothing.
         * @param item a pointer to the {@link GLib.List} element to remove that contains a {@link Farstream.FeedbackParameter}
         */
        remove_feedback_parameter(item: FeedbackParameter[]): void;
        /**
         * Removes an optional parameter from a codec.
         *
         * NULL param will do nothing.
         * @param param a pointer to the {@link Farstream.CodecParameter} to remove
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
     * @gir-type Struct
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

        // Methods

        copy(): CodecParameter;
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type ConferenceClass = typeof Conference;
    /**
     * @gir-type Alias
     */
    type ElementAddedNotifierClass = typeof ElementAddedNotifier;
    /**
     * @gir-type Struct
     */
    abstract class ElementAddedNotifierPrivate {
        static $gtype: GObject.GType<ElementAddedNotifierPrivate>;
    }

    /**
     * Use to store feedback parameters
     * @gir-type Struct
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

        // Methods

        copy(): FeedbackParameter;
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type ParticipantClass = typeof Participant;
    /**
     * @gir-type Struct
     */
    abstract class ParticipantPrivate {
        static $gtype: GObject.GType<ParticipantPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;
    /**
     * @gir-type Struct
     */
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SessionClass = typeof Session;
    /**
     * @gir-type Struct
     */
    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StreamClass = typeof Stream;
    /**
     * @gir-type Struct
     */
    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StreamTransmitterClass = typeof StreamTransmitter;
    /**
     * @gir-type Struct
     */
    abstract class StreamTransmitterPrivate {
        static $gtype: GObject.GType<StreamTransmitterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TransmitterClass = typeof Transmitter;
    /**
     * @gir-type Struct
     */
    abstract class TransmitterPrivate {
        static $gtype: GObject.GType<TransmitterPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class _RtpHeaderExtension {
        static $gtype: GObject.GType<_RtpHeaderExtension>;

        // Fields

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
