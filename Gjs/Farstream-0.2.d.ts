/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Farstream-0.2
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
const CODEC_FORMAT: string
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
const RTP_HEADER_EXTENSION_FORMAT: string
function candidate_list_copy(candidate_list: Codec[]): Codec[]
function codec_list_are_equal(list1?: Codec[] | null, list2?: Codec[] | null): boolean
function codec_list_copy(codec_list: Codec[]): Codec[]
function codec_list_from_keyfile(filename: string): Codec[]
function error_quark(): GLib.Quark
function media_type_to_string(media_type: MediaType): string
function parse_error(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* error_msg */ string ]
function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[]
function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): RtpHeaderExtension[]
function utils_get_default_codec_preferences(element: Gst.Element): Codec[]
function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[]
function utils_set_bitrate(element: Gst.Element, bitrate: number): void
function value_set_candidate_list(value: any, candidates?: Candidate[] | null): void
interface Conference_ConstructProps extends Gst.Bin_ConstructProps {
}
class Conference {
    /* Properties of Gst-1.0.Gst.Bin */
    /**
     * If set to %TRUE, the bin will handle asynchronous state changes.
     * This should be used only if the bin subclass is modifying the state
     * of its children on its own.
     */
    async_handling: boolean
    /**
     * Forward all children messages, even those that would normally be filtered by
     * the bin. This can be interesting when one wants to be notified of the EOS
     * state of individual elements, for example.
     * 
     * The messages are converted to an ELEMENT message with the bin as the
     * source. The structure of the message is named `GstBinForwarded` and contains
     * a field named `message` that contains the original forwarded #GstMessage.
     */
    message_forward: boolean
    /* Fields of Gst-1.0.Gst.Bin */
    element: Gst.Element
    /**
     * the number of children in this bin
     */
    numchildren: number
    /**
     * the list of children in this bin
     */
    children: Gst.Element[]
    /**
     * updated whenever `children` changes
     */
    children_cookie: number
    /**
     * internal bus for handling child messages
     */
    child_bus: Gst.Bus
    /**
     * queued and cached messages
     */
    messages: Gst.Message[]
    /**
     * the bin is currently calculating its state
     */
    polling: boolean
    /**
     * the bin needs to recalculate its state (deprecated)
     */
    state_dirty: boolean
    /**
     * the bin needs to select a new clock
     */
    clock_dirty: boolean
    /**
     * the last clock selected
     */
    provided_clock: Gst.Clock
    /**
     * the element that provided `provided_clock`
     */
    clock_provider: Gst.Element
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
    /* Methods of Farstream-0.2.Farstream.Conference */
    /**
     * Create a new Farstream Participant for the type of the given conference.
     */
    new_participant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @param media_type #FsMediaType of the new session
     */
    new_session(media_type: MediaType): Session
    /* Methods of Gst-1.0.Gst.Bin */
    /**
     * Adds the given element to the bin.  Sets the element's parent, and thus
     * takes ownership of the element. An element can only be added to one bin.
     * 
     * If the element's pads are linked to other pads, the pads will be unlinked
     * before the element is added to the bin.
     * 
     * > When you add an element to an already-running pipeline, you will have to
     * > take care to set the state of the newly-added element to the desired
     * > state (usually PLAYING or PAUSED, same you set the pipeline to originally)
     * > with gst_element_set_state(), or use gst_element_sync_state_with_parent().
     * > The bin or pipeline will not take care of this for you.
     * @param element the #GstElement to add
     */
    add(element: Gst.Element): boolean
    /**
     * Recursively looks for elements with an unlinked pad of the given
     * direction within the specified bin and returns an unlinked pad
     * if one is found, or %NULL otherwise. If a pad is found, the caller
     * owns a reference to it and should use gst_object_unref() on the
     * pad when it is not needed any longer.
     * @param direction whether to look for an unlinked source or sink pad
     */
    find_unlinked_pad(direction: Gst.PadDirection): Gst.Pad | null
    /**
     * Looks for an element inside the bin that implements the given
     * interface. If such an element is found, it returns the element.
     * You can cast this element to the given interface afterwards.  If you want
     * all elements that implement the interface, use
     * gst_bin_iterate_all_by_interface(). This function recurses into child bins.
     * @param iface the #GType of an interface
     */
    get_by_interface(iface: GObject.Type): Gst.Element | null
    /**
     * Gets the element with the given name from a bin. This
     * function recurses into child bins.
     * @param name the element name to search for
     */
    get_by_name(name: string): Gst.Element | null
    /**
     * Gets the element with the given name from this bin. If the
     * element is not found, a recursion is performed on the parent bin.
     * @param name the element name to search for
     */
    get_by_name_recurse_up(name: string): Gst.Element | null
    get_suppressed_flags(): Gst.ElementFlags
    /**
     * Looks for all elements inside the bin with the given element factory name.
     * The function recurses inside child bins. The iterator will yield a series of
     * #GstElement.
     * @param factory_name the name of the #GstElementFactory
     */
    iterate_all_by_element_factory_name(factory_name: string): Gst.Iterator | null
    /**
     * Looks for all elements inside the bin that implements the given
     * interface. You can safely cast all returned elements to the given interface.
     * The function recurses inside child bins. The iterator will yield a series
     * of #GstElement.
     * @param iface the #GType of an interface
     */
    iterate_all_by_interface(iface: GObject.Type): Gst.Iterator | null
    /**
     * Gets an iterator for the elements in this bin.
     */
    iterate_elements(): Gst.Iterator | null
    /**
     * Gets an iterator for the elements in this bin.
     * This iterator recurses into GstBin children.
     */
    iterate_recurse(): Gst.Iterator | null
    /**
     * Gets an iterator for all elements in the bin that have the
     * #GST_ELEMENT_FLAG_SINK flag set.
     */
    iterate_sinks(): Gst.Iterator | null
    /**
     * Gets an iterator for the elements in this bin in topologically
     * sorted order. This means that the elements are returned from
     * the most downstream elements (sinks) to the sources.
     * 
     * This function is used internally to perform the state changes
     * of the bin elements and for clock selection.
     */
    iterate_sorted(): Gst.Iterator | null
    /**
     * Gets an iterator for all elements in the bin that have the
     * #GST_ELEMENT_FLAG_SOURCE flag set.
     */
    iterate_sources(): Gst.Iterator | null
    /**
     * Queries `bin` for the current latency and reconfigures this latency on all the
     * elements using a LATENCY event.
     * 
     * This method is typically called on the pipeline when a #GST_MESSAGE_LATENCY
     * is posted on the bus.
     * 
     * This function simply emits the #GstBin::do-latency signal so any custom latency
     * calculations will be performed.
     */
    recalculate_latency(): boolean
    /**
     * Removes the element from the bin, unparenting it as well.
     * Unparenting the element means that the element will be dereferenced,
     * so if the bin holds the only reference to the element, the element
     * will be freed in the process of removing it from the bin.  If you
     * want the element to still exist after removing, you need to call
     * gst_object_ref() before removing it from the bin.
     * 
     * If the element's pads are linked to other pads, the pads will be unlinked
     * before the element is removed from the bin.
     * @param element the #GstElement to remove
     */
    remove(element: Gst.Element): boolean
    /**
     * Suppresses the given flags on the bin. #GstElementFlags of a
     * child element are propagated when it is added to the bin.
     * When suppressed flags are set, those specified flags will
     * not be propagated to the bin.
     * @param flags the #GstElementFlags to suppress
     */
    set_suppressed_flags(flags: Gst.ElementFlags): void
    /**
     * Synchronizes the state of every child of `bin` with the state
     * of `bin`. See also gst_element_sync_state_with_parent().
     */
    sync_children_states(): boolean
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
    /* Methods of Gst-1.0.Gst.ChildProxy */
    /**
     * Emits the #GstChildProxy::child-added signal.
     * @param child the newly added child
     * @param name the name of the new child
     */
    child_added(child: GObject.Object, name: string): void
    /**
     * Emits the #GstChildProxy::child-removed signal.
     * @param child the removed child
     * @param name the name of the old child
     */
    child_removed(child: GObject.Object, name: string): void
    /**
     * Fetches a child by its number.
     * @param index the child's position in the child list
     */
    get_child_by_index(index: number): GObject.Object | null
    /**
     * Looks up a child element by the given name.
     * 
     * This virtual method has a default implementation that uses #GstObject
     * together with gst_object_get_name(). If the interface is to be used with
     * #GObjects, this methods needs to be overridden.
     * @param name the child's name
     */
    get_child_by_name(name: string): GObject.Object | null
    /**
     * Gets the number of child objects this parent contains.
     */
    get_children_count(): number
    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    get_property(name: string): /* value */ any
    /**
     * Looks up which object and #GParamSpec would be effected by the given `name`.
     * @param name name of the property to look up
     */
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    set_property(name: string, value: any): void
    /* Virtual methods of Farstream-0.2.Farstream.Conference */
    /**
     * Create a new Farstream Participant for the type of the given conference.
     */
    vfunc_new_participant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @param media_type #FsMediaType of the new session
     */
    vfunc_new_session(media_type: MediaType): Session
    /**
     * Emits the #GstChildProxy::child-added signal.
     * @param child the newly added child
     * @param name the name of the new child
     */
    vfunc_child_added(child: GObject.Object, name: string): void
    /**
     * Emits the #GstChildProxy::child-removed signal.
     * @param child the removed child
     * @param name the name of the old child
     */
    vfunc_child_removed(child: GObject.Object, name: string): void
    /**
     * Fetches a child by its number.
     * @param index the child's position in the child list
     */
    vfunc_get_child_by_index(index: number): GObject.Object | null
    /**
     * Looks up a child element by the given name.
     * 
     * This virtual method has a default implementation that uses #GstObject
     * together with gst_object_get_name(). If the interface is to be used with
     * #GObjects, this methods needs to be overridden.
     * @param name the child's name
     */
    vfunc_get_child_by_name(name: string): GObject.Object | null
    /**
     * Gets the number of child objects this parent contains.
     */
    vfunc_get_children_count(): number
    /* Virtual methods of Gst-1.0.Gst.Bin */
    /**
     * Method to add an element to the bin.
     * @param element the element to be added
     */
    vfunc_add_element(element: Gst.Element): boolean
    /**
     * Method called when an element was added somewhere in the bin hierarchy.
     * @param sub_bin the #GstBin to which the element was added
     * @param child the element that was added
     */
    vfunc_deep_element_added(sub_bin: Gst.Bin, child: Gst.Element): void
    /**
     * Method called when an element was removed somewhere in the bin hierarchy.
     * @param sub_bin the #GstBin from which the element was removed
     * @param child the element that was removed
     */
    vfunc_deep_element_removed(sub_bin: Gst.Bin, child: Gst.Element): void
    vfunc_do_latency(): boolean
    /**
     * Method called when an element was added to the bin.
     * @param child the element that was added
     */
    vfunc_element_added(child: Gst.Element): void
    /**
     * Method called when an element was removed from the bin.
     * @param child the element that was removed
     */
    vfunc_element_removed(child: Gst.Element): void
    /**
     * Method to handle a message from the children.
     * @param message the message to be handled
     */
    vfunc_handle_message(message: Gst.Message): void
    /**
     * Method to remove an element from the bin.
     * @param element the element to be removed
     */
    vfunc_remove_element(element: Gst.Element): boolean
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
    /* Signals of Gst-1.0.Gst.Bin */
    /**
     * Will be emitted after the element was added to `sub_bin`.
     * @param sub_bin the #GstBin the element was added to
     * @param element the #GstElement that was added to `sub_bin`
     */
    connect(sigName: "deep-element-added", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Gst.Bin, element: Gst.Element): void
    /**
     * Will be emitted after the element was removed from `sub_bin`.
     * @param sub_bin the #GstBin the element was removed from
     * @param element the #GstElement that was removed from `sub_bin`
     */
    connect(sigName: "deep-element-removed", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Conference, sub_bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Gst.Bin, element: Gst.Element): void
    /**
     * Will be emitted when the bin needs to perform latency calculations. This
     * signal is only emitted for toplevel bins or when #GstBin:async-handling is
     * enabled.
     * 
     * Only one signal handler is invoked. If no signals are connected, the
     * default handler is invoked, which will query and distribute the lowest
     * possible latency to all sinks.
     * 
     * Connect to this signal if the default latency calculations are not
     * sufficient, like when you need different latencies for different sinks in
     * the same pipeline.
     */
    connect(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Conference) => boolean)): number
    emit(sigName: "do-latency"): void
    /**
     * Will be emitted after the element was added to the bin.
     * @param element the #GstElement that was added to the bin
     */
    connect(sigName: "element-added", callback: (($obj: Conference, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Conference, element: Gst.Element) => void)): number
    emit(sigName: "element-added", element: Gst.Element): void
    /**
     * Will be emitted after the element was removed from the bin.
     * @param element the #GstElement that was removed from the bin
     */
    connect(sigName: "element-removed", callback: (($obj: Conference, element: Gst.Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Conference, element: Gst.Element) => void)): number
    emit(sigName: "element-removed", element: Gst.Element): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Conference) => void)): number
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param new_pad the pad that has been added
     */
    connect(sigName: "pad-added", callback: (($obj: Conference, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Conference, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param old_pad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: (($obj: Conference, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Conference, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: Conference, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Conference, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    /**
     * Will be emitted after the `object` was added to the `child_proxy`.
     * @param object the #GObject that was added
     * @param name the name of the new child
     */
    connect(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    /**
     * Will be emitted after the `object` was removed from the `child_proxy`.
     * @param object the #GObject that was removed
     * @param name the name of the old child
     */
    connect(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Conference, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    connect(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Conference, pspec: GObject.ParamSpec) => void)): number
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
    /* Methods of Farstream-0.2.Farstream.ElementAddedNotifier */
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
     * @param element Element for which to set the default codec   preferences
     */
    set_default_properties(element: Gst.Element): number
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
    set_properties_from_keyfile(keyfile: GLib.KeyFile): number
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
    /* Signals of Farstream-0.2.Farstream.ElementAddedNotifier */
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
interface Participant_ConstructProps extends GObject.Object_ConstructProps {
}
class Participant {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Farstream-0.2.Farstream.Session */
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
    /* Properties of Farstream-0.2.Farstream.Session */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.2.Farstream.Session */
    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @param old_codecs   Codecs previously retrieved from the #FsSession:codecs property
     * @param new_codecs    Codecs recently retrieved from the #FsSession:codecs property
     */
    codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[]
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
    set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean
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
    set_codec_preferences(codec_preferences?: Codec[] | null): boolean
    /**
     * Sets encryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
     */
    set_encryption_parameters(parameters?: Gst.Structure | null): boolean
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
    /* Virtual methods of Farstream-0.2.Farstream.Session */
    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @param old_codecs   Codecs previously retrieved from the #FsSession:codecs property
     * @param new_codecs    Codecs recently retrieved from the #FsSession:codecs property
     */
    vfunc_codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[]
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
    vfunc_set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean
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
    vfunc_set_codec_preferences(codec_preferences?: Codec[] | null): boolean
    /**
     * Sets encryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
     */
    vfunc_set_encryption_parameters(parameters?: Gst.Structure | null): boolean
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
    /* Signals of Farstream-0.2.Farstream.Session */
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
    connect(sigName: "notify::allowed-sink-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-sink-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allowed-src-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-src-caps", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify::encryption-parameters", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encryption-parameters", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
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
interface Stream_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Farstream-0.2.Farstream.Stream */
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
    /* Properties of Farstream-0.2.Farstream.Stream */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.2.Farstream.Stream */
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
     * @param remote_candidates    a #GList of #FsCandidate to force
     */
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * Creates a #GstIterator that can be used to iterate the src pads of this
     * stream. These are the pads that were announced by #FsStream:src-pad-added
     * and are still valid.
     */
    iterate_src_pads(): Gst.Iterator
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
     * Sets decryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @param parameters a #GstStructure containing the decryption  parameters
     */
    set_decryption_parameters(parameters: Gst.Structure): boolean
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @param remote_codecs a #GList of #FsCodec representing   the remote codecs
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
     */
    set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null): boolean
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
     */
    set_transmitter_ht(transmitter: string, stream_transmitter_parameters?: GLib.HashTable | null): boolean
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
    /* Virtual methods of Farstream-0.2.Farstream.Stream */
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
     * @param candidates an #GList of #FsCandidate  representing the remote candidates
     */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates    a #GList of #FsCandidate to force
     */
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    /**
     * Sets decryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @param parameters a #GstStructure containing the decryption  parameters
     */
    vfunc_set_decryption_parameters(parameters: Gst.Structure): boolean
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @param remote_codecs a #GList of #FsCodec representing   the remote codecs
     */
    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param stream_transmitter_parameters    an array of n_parameters #GParameter struct that will be passed   to the newly-create #FsStreamTransmitter
     */
    vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null): boolean
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
    /* Signals of Farstream-0.2.Farstream.Stream */
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
    connect(sigName: "notify::decryption-parameters", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decryption-parameters", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
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
interface StreamTransmitter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Farstream-0.2.Farstream.StreamTransmitter */
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
    /* Properties of Farstream-0.2.Farstream.StreamTransmitter */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.2.Farstream.StreamTransmitter */
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
     * @param remote_candidates a #GList of #FsCandidate to   force
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
    /* Virtual methods of Farstream-0.2.Farstream.StreamTransmitter */
    /**
     * This function is used to add remote candidates to the transmitter
     * @param candidates a #GList of the remote candidates
     */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @param remote_candidates a #GList of #FsCandidate to   force
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
    /* Signals of Farstream-0.2.Farstream.StreamTransmitter */
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
interface Transmitter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Farstream-0.2.Farstream.Transmitter */
    /**
     * The number of components to create
     */
    components?: number
    /**
     * Apply current stream time to buffers or provide buffers without
     * timestamps. Must be set before creating a stream transmitter.
     */
    do_timestamp?: boolean
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos?: number
}
class Transmitter {
    /* Properties of Farstream-0.2.Farstream.Transmitter */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream-0.2.Farstream.Transmitter */
    /**
     * This function emit the "error" signal on a #FsTransmitter, it should
     * only be called by subclasses.
     * @param error_no The number of the error
     * @param error_msg Error message to be displayed to user
     */
    emit_error(error_no: number, error_msg: string): void
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
    /* Virtual methods of Farstream-0.2.Farstream.Transmitter */
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
    /* Signals of Farstream-0.2.Farstream.Transmitter */
    /**
     * This signal is emitted in any error condition
     * @param errorno The number of the error
     * @param error_msg Error message to be displayed to user
     */
    connect(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
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
    connect(sigName: "notify::do-timestamp", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: Transmitter, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of Farstream-0.2.Farstream.Candidate */
    /**
     * a string representing the foundation of this candidate (maximum 32 chars)
     */
    foundation: string
    /**
     * value between 1 and 256 indicating which component this candidate represents (1 is RTP, 2 is RTCP, #FsComponentType can be used here)
     */
    component_id: number
    /**
     * IP in dotted format
     */
    ip: string
    /**
     * Port to use
     */
    port: number
    /**
     * IP of base in dotted format as defined in ICE-19.
     */
    base_ip: string
    /**
     * Port of base as defined in ICE-19.
     */
    base_port: number
    /**
     * #FsNetworkProtocol for ip protocol to use as candidate
     */
    proto: NetworkProtocol
    /**
     * Value between 0 and (2^31 - 1) representing the priority
     */
    priority: number
    /**
     * The #FsCandidateType of the candidate
     */
    type: CandidateType
    /**
     * Username to use to connect to client if necessary,
     *            NULL otherwise
     */
    username: string
    /**
     * Username to use to connect to client if necessary,
     *            NULL otherwise
     */
    password: string
    /**
     * The TTL used when sending Multicast packet (0 = auto)
     */
    ttl: number
    /* Methods of Farstream-0.2.Farstream.Candidate */
    /**
     * Copies a #FsCandidate and its contents.
     */
    copy(): Candidate
    static name: string
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number): Candidate
    constructor(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number)
    /* Static methods and pseudo-constructors */
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number): Candidate
    static new_full(foundation: string, component_id: number, ip: string | null, port: number, base_ip: string | null, base_port: number, proto: NetworkProtocol, priority: number, type: CandidateType, username: string | null, password: string | null, ttl: number): Candidate
}
class Codec {
    /* Fields of Farstream-0.2.Farstream.Codec */
    /**
     * numeric identifier for encoding, eg. PT for SDP
     */
    id: number
    /**
     * the name of the codec
     */
    encoding_name: string
    /**
     * type of media this codec is for
     */
    media_type: MediaType
    /**
     * clock rate of this stream
     */
    clock_rate: number
    /**
     * Number of channels codec should decode
     */
    channels: number
    /**
     * The minimum interval between two RTCP reports,
     *  If it is not specified (G_MAXUINT), it is up to the protocol to decide
     * (it is 5 seconds for RTP).
     */
    minimum_reporting_interval: number
    /**
     * key pairs of param name to param data
     */
    optional_params: CodecParameter[]
    /**
     * key triplets of
     * feedbck param type, subtype and extra string that is supported for this codec
     */
    feedback_params: FeedbackParameter[]
    /* Methods of Farstream-0.2.Farstream.Codec */
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
    /**
     * Finds the #FsFeedbackParameter in the #FsCodec that has the requested
     * subtype, type and extra_params. One of which must be non-NULL;
     * @param type The subtype of the parameter to search for or %NULL for any type
     * @param subtype The subtype of the parameter to search for or %NULL for any subtype
     * @param extra_params The extra_params of the parameter to search for or %NULL for any extra_params
     */
    get_feedback_parameter(type?: string | null, subtype?: string | null, extra_params?: string | null): FeedbackParameter
    /**
     * Finds the #FsCodecParameter in the #FsCodec that has the requested name
     * and, if not %NULL, the requested value
     * @param name The name of the parameter to search for
     * @param value The value of the parameter to search for or %NULL for any value
     */
    get_optional_parameter(name: string, value?: string | null): CodecParameter
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
     */
    to_string(): string
    static name: string
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
    constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number)
    /* Static methods and pseudo-constructors */
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
}
class CodecParameter {
    /* Fields of Farstream-0.2.Farstream.CodecParameter */
    /**
     * paramter name.
     */
    name: string
    /**
     * parameter value.
     */
    value: string
    /* Methods of Farstream-0.2.Farstream.CodecParameter */
    /**
     * Makes a copy of a #FsCodecParameter
     */
    copy(): CodecParameter
    /**
     * Frees a #FsCodecParameter
     */
    free(): void
    static name: string
}
abstract class ConferenceClass {
    /* Fields of Farstream-0.2.Farstream.ConferenceClass */
    /**
     * parent GstBin class
     */
    parent: Gst.BinClass
    new_session: (conference: Conference, media_type: MediaType) => Session
    new_participant: (conference: Conference) => Participant
    static name: string
}
abstract class ElementAddedNotifierClass {
    /* Fields of Farstream-0.2.Farstream.ElementAddedNotifierClass */
    /**
     * the #GObjectClass parent
     */
    parent_class: GObject.ObjectClass
    static name: string
}
class ElementAddedNotifierPrivate {
    static name: string
}
class FeedbackParameter {
    /* Fields of Farstream-0.2.Farstream.FeedbackParameter */
    /**
     * the type of feedback, like "ack", "name", "ccm"
     */
    type: string
    /**
     * the subtype of feedback (can be an empty string)
     */
    subtype: string
    /**
     * a string containing extra parameters (can be empty)
     */
    extra_params: string
    /* Methods of Farstream-0.2.Farstream.FeedbackParameter */
    /**
     * Makes a copy of a #FsFeedbackParameter
     */
    copy(): FeedbackParameter
    /**
     * Frees a #FsFeedbackParameter
     */
    free(): void
    static name: string
}
abstract class ParticipantClass {
    /* Fields of Farstream-0.2.Farstream.ParticipantClass */
    /**
     * Our parent
     */
    parent_class: GObject.ObjectClass
    static name: string
}
class ParticipantPrivate {
    static name: string
}
abstract class PluginClass {
    /* Fields of Farstream-0.2.Farstream.PluginClass */
    parent_class: GObject.TypeModuleClass
    static name: string
}
class PluginPrivate {
    static name: string
}
class RtpHeaderExtension {
    /* Fields of Farstream-0.2.Farstream.RtpHeaderExtension */
    /**
     * The identifier of the RTP header extension
     */
    id: number
    /**
     * the direction in which this extension can be used
     */
    direction: StreamDirection
    /**
     * The URI that defines this extension
     */
    uri: string
    /* Methods of Farstream-0.2.Farstream.RtpHeaderExtension */
    /**
     * Compares two #FsRtpHeaderExtension structures
     * @param extension2 The second #FsRtpHeaderExtension
     */
    are_equal(extension2: RtpHeaderExtension): boolean
    static name: string
    static new(id: number, direction: StreamDirection, uri: string): RtpHeaderExtension
    constructor(id: number, direction: StreamDirection, uri: string)
    /* Static methods and pseudo-constructors */
    static new(id: number, direction: StreamDirection, uri: string): RtpHeaderExtension
}
abstract class SessionClass {
    /* Fields of Farstream-0.2.Farstream.SessionClass */
    /**
     * Our parent
     */
    parent_class: GObject.ObjectClass
    new_stream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    start_telephony_event: (session: Session, event: number, volume: number) => boolean
    stop_telephony_event: (session: Session) => boolean
    set_send_codec: (session: Session, send_codec: Codec) => boolean
    set_codec_preferences: (session: Session, codec_preferences?: Codec[] | null) => boolean
    list_transmitters: (session: Session) => string[]
    get_stream_transmitter_type: (session: Session, transmitter: string) => GObject.Type
    codecs_need_resend: (session: Session, old_codecs?: Codec[] | null, new_codecs?: Codec[] | null) => Codec[]
    set_allowed_caps: (session: Session, sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null) => boolean
    set_encryption_parameters: (session: Session, parameters?: Gst.Structure | null) => boolean
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class StreamClass {
    /* Fields of Farstream-0.2.Farstream.StreamClass */
    /**
     * Our parent
     */
    parent_class: GObject.ObjectClass
    add_remote_candidates: (stream: Stream, candidates: Candidate[]) => boolean
    force_remote_candidates: (stream: Stream, remote_candidates: Candidate[]) => boolean
    set_remote_codecs: (stream: Stream, remote_codecs: Codec[]) => boolean
    add_id: (stream: Stream, id: number) => void
    set_transmitter: (stream: Stream, transmitter: string, stream_transmitter_parameters: GObject.Parameter[] | null) => boolean
    set_decryption_parameters: (stream: Stream, parameters: Gst.Structure) => boolean
    static name: string
}
class StreamPrivate {
    static name: string
}
abstract class StreamTransmitterClass {
    /* Fields of Farstream-0.2.Farstream.StreamTransmitterClass */
    /**
     * Our parent
     */
    parent_class: GObject.ObjectClass
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
    /* Fields of Farstream-0.2.Farstream.TransmitterClass */
    /**
     * Our parent
     */
    parent_class: GObject.ObjectClass
    new_stream_transmitter: (transmitter: Transmitter, participant: Participant, n_parameters: number, parameters: GObject.Parameter) => StreamTransmitter
    get_stream_transmitter_type: (transmitter: Transmitter) => GObject.Type
    static name: string
}
class TransmitterPrivate {
    static name: string
}
}
export default Farstream;