// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gst-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Gst {

/**
 * The different types of buffering methods.
 */
enum BufferingMode {
    /**
     * a small amount of data is buffered
     */
    STREAM,
    /**
     * the stream is being downloaded
     */
    DOWNLOAD,
    /**
     * the stream is being downloaded in a ringbuffer
     */
    TIMESHIFT,
    /**
     * the stream is a live stream
     */
    LIVE,
}
/**
 * The result values for a GstBusSyncHandler.
 */
enum BusSyncReply {
    /**
     * drop the message
     */
    DROP,
    /**
     * pass the message to the async queue
     */
    PASS,
    /**
     * pass message to async queue, continue if message is handled
     */
    ASYNC,
}
/**
 * Modes of caps intersection
 * 
 * %GST_CAPS_INTERSECT_ZIG_ZAG tries to preserve overall order of both caps
 * by iterating on the caps' structures as the following matrix shows:
 * 
 * ```
 *          caps1
 *       +-------------
 *       | 1  2  4  7
 * caps2 | 3  5  8 10
 *       | 6  9 11 12
 * ```
 * 
 * Used when there is no explicit precedence of one caps over the other. e.g.
 * tee's sink pad getcaps function, it will probe its src pad peers' for their
 * caps and intersect them with this mode.
 * 
 * %GST_CAPS_INTERSECT_FIRST is useful when an element wants to preserve
 * another element's caps priority order when intersecting with its own caps.
 * Example: If caps1 is `[A, B, C]` and caps2 is `[E, B, D, A]`, the result
 * would be `[A, B]`, maintaining the first caps priority on the intersection.
 */
enum CapsIntersectMode {
    /**
     * Zig-zags over both caps.
     */
    ZIG_ZAG,
    /**
     * Keeps the first caps order.
     */
    FIRST,
}
/**
 * The type of the clock entry
 */
enum ClockEntryType {
    /**
     * a single shot timeout
     */
    SINGLE,
    /**
     * a periodic timeout request
     */
    PERIODIC,
}
/**
 * The return value of a clock operation.
 */
enum ClockReturn {
    /**
     * The operation succeeded.
     */
    OK,
    /**
     * The operation was scheduled too late.
     */
    EARLY,
    /**
     * The clockID was unscheduled
     */
    UNSCHEDULED,
    /**
     * The ClockID is busy
     */
    BUSY,
    /**
     * A bad time was provided to a function.
     */
    BADTIME,
    /**
     * An error occurred
     */
    ERROR,
    /**
     * Operation is not supported
     */
    UNSUPPORTED,
    /**
     * The ClockID is done waiting
     */
    DONE,
}
/**
 * The different kind of clocks.
 */
enum ClockType {
    /**
     * time since Epoch
     */
    REALTIME,
    /**
     * monotonic time since some unspecified starting
     *                            point
     */
    MONOTONIC,
    /**
     * some other time source is used (Since: 1.0.5)
     */
    OTHER,
    /**
     * time since Epoch, but using International Atomic Time
     *                      as reference (Since: 1.18)
     */
    TAI,
}
/**
 * Core errors are errors inside the core GStreamer library.
 */
enum CoreError {
    /**
     * a general error which doesn't fit in any other
     * category.  Make sure you add a custom message to the error call.
     */
    FAILED,
    /**
     * do not use this except as a placeholder for
     * deciding where to go while developing code.
     */
    TOO_LAZY,
    /**
     * use this when you do not want to implement
     * this functionality yet.
     */
    NOT_IMPLEMENTED,
    /**
     * used for state change errors.
     */
    STATE_CHANGE,
    /**
     * used for pad-related errors.
     */
    PAD,
    /**
     * used for thread-related errors.
     */
    THREAD,
    /**
     * used for negotiation-related errors.
     */
    NEGOTIATION,
    /**
     * used for event-related errors.
     */
    EVENT,
    /**
     * used for seek-related errors.
     */
    SEEK,
    /**
     * used for caps-related errors.
     */
    CAPS,
    /**
     * used for negotiation-related errors.
     */
    TAG,
    /**
     * used if a plugin is missing.
     */
    MISSING_PLUGIN,
    /**
     * used for clock related errors.
     */
    CLOCK,
    /**
     * used if functionality has been disabled at
     *                           compile time.
     */
    DISABLED,
    /**
     * the number of core error types.
     */
    NUM_ERRORS,
}
enum DebugColorMode {
    /**
     * Do not use colors in logs.
     */
    OFF,
    /**
     * Paint logs in a platform-specific way.
     */
    ON,
    /**
     * Paint logs with UNIX terminal color codes
     *                             no matter what platform GStreamer is running on.
     */
    UNIX,
}
/**
 * The level defines the importance of a debugging message. The more important a
 * message is, the greater the probability that the debugging system outputs it.
 */
enum DebugLevel {
    /**
     * No debugging level specified or desired. Used to deactivate
     *  debugging output.
     */
    NONE,
    /**
     * Error messages are to be used only when an error occurred
     *  that stops the application from keeping working correctly.
     *  An examples is gst_element_error, which outputs a message with this priority.
     *  It does not mean that the application is terminating as with g_error.
     */
    ERROR,
    /**
     * Warning messages are to inform about abnormal behaviour
     *  that could lead to problems or weird behaviour later on. An example of this
     *  would be clocking issues ("your computer is pretty slow") or broken input
     *  data ("Can't synchronize to stream.")
     */
    WARNING,
    /**
     * Fixme messages are messages that indicate that something
     *  in the executed code path is not fully implemented or handled yet. Note
     *  that this does not replace proper error handling in any way, the purpose
     *  of this message is to make it easier to spot incomplete/unfinished pieces
     *  of code when reading the debug log.
     */
    FIXME,
    /**
     * Informational messages should be used to keep the developer
     *  updated about what is happening.
     *  Examples where this should be used are when a typefind function has
     *  successfully determined the type of the stream or when an mp3 plugin detects
     *  the format to be used. ("This file has mono sound.")
     */
    INFO,
    /**
     * Debugging messages should be used when something common
     *  happens that is not the expected default behavior, or something that's
     *  useful to know but doesn't happen all the time (ie. per loop iteration or
     *  buffer processed or event handled).
     *  An example would be notifications about state changes or receiving/sending
     *  of events.
     */
    DEBUG,
    /**
     * Log messages are messages that are very common but might be
     *  useful to know. As a rule of thumb a pipeline that is running as expected
     *  should never output anything else but LOG messages whilst processing data.
     *  Use this log level to log recurring information in chain functions and
     *  loop functions, for example.
     */
    LOG,
    /**
     * Tracing-related messages.
     *  Examples for this are referencing/dereferencing of objects.
     */
    TRACE,
    /**
     * memory dump messages are used to log (small) chunks of
     *  data as memory dumps in the log. They will be displayed as hexdump with
     *  ASCII characters.
     */
    MEMDUMP,
    /**
     * The number of defined debugging levels.
     */
    COUNT,
}
/**
 * #GstEventType lists the standard event types that can be sent in a pipeline.
 * 
 * The custom event types can be used for private messages between elements
 * that can't be expressed using normal
 * GStreamer buffer passing semantics. Custom events carry an arbitrary
 * #GstStructure.
 * Specific custom events are distinguished by the name of the structure.
 */
enum EventType {
    /**
     * unknown event.
     */
    UNKNOWN,
    /**
     * Start a flush operation. This event clears all data
     *                 from the pipeline and unblock all streaming threads.
     */
    FLUSH_START,
    /**
     * Stop a flush operation. This event resets the
     *                 running-time of the pipeline.
     */
    FLUSH_STOP,
    /**
     * Event to mark the start of a new stream. Sent before any
     *                 other serialized event and only sent at the start of a new stream,
     *                 not after flushing seeks.
     */
    STREAM_START,
    /**
     * #GstCaps event. Notify the pad of a new media type.
     */
    CAPS,
    /**
     * A new media segment follows in the dataflow. The
     *                 segment events contains information for clipping buffers and
     *                 converting buffer timestamps to running-time and
     *                 stream-time.
     */
    SEGMENT,
    /**
     * A new #GstStreamCollection is available (Since: 1.10)
     */
    STREAM_COLLECTION,
    /**
     * A new set of metadata tags has been found in the stream.
     */
    TAG,
    /**
     * Notification of buffering requirements. Currently not
     *                 used yet.
     */
    BUFFERSIZE,
    /**
     * An event that sinks turn into a message. Used to
     *                          send messages that should be emitted in sync with
     *                          rendering.
     */
    SINK_MESSAGE,
    /**
     * Indicates that there is no more data for
     *                 the stream group ID in the message. Sent before EOS
     *                 in some instances and should be handled mostly the same. (Since: 1.10)
     */
    STREAM_GROUP_DONE,
    /**
     * End-Of-Stream. No more data is to be expected to follow
     *                 without either a STREAM_START event, or a FLUSH_STOP and a SEGMENT
     *                 event.
     */
    EOS,
    /**
     * An event which indicates that a new table of contents (TOC)
     *                 was found or updated.
     */
    TOC,
    /**
     * An event which indicates that new or updated
     *                 encryption information has been found in the stream.
     */
    PROTECTION,
    /**
     * Marks the end of a segment playback.
     */
    SEGMENT_DONE,
    /**
     * Marks a gap in the datastream.
     */
    GAP,
    /**
     * Notify downstream that a playback rate override
     *                                 should be applied as soon as possible. (Since: 1.18)
     */
    INSTANT_RATE_CHANGE,
    /**
     * A quality message. Used to indicate to upstream elements
     *                 that the downstream elements should adjust their processing
     *                 rate.
     */
    QOS,
    /**
     * A request for a new playback position and rate.
     */
    SEEK,
    /**
     * Navigation events are usually used for communicating
     *                        user requests, such as mouse or keyboard movements,
     *                        to upstream elements.
     */
    NAVIGATION,
    /**
     * Notification of new latency adjustment. Sinks will use
     *                     the latency information to adjust their synchronisation.
     */
    LATENCY,
    /**
     * A request for stepping through the media. Sinks will usually
     *                  execute the step operation.
     */
    STEP,
    /**
     * A request for upstream renegotiating caps and reconfiguring.
     */
    RECONFIGURE,
    /**
     * A request for a new playback position based on TOC
     *                        entry's UID.
     */
    TOC_SELECT,
    /**
     * A request to select one or more streams (Since: 1.10)
     */
    SELECT_STREAMS,
    /**
     * Sent by the pipeline to notify elements that handle the
     *                                    instant-rate-change event about the running-time when
     *                                    the rate multiplier should be applied (or was applied). (Since: 1.18)
     */
    INSTANT_RATE_SYNC_TIME,
    /**
     * Upstream custom event
     */
    CUSTOM_UPSTREAM,
    /**
     * Downstream custom event that travels in the
     *                        data flow.
     */
    CUSTOM_DOWNSTREAM,
    /**
     * Custom out-of-band downstream event.
     */
    CUSTOM_DOWNSTREAM_OOB,
    /**
     * Custom sticky downstream event.
     */
    CUSTOM_DOWNSTREAM_STICKY,
    /**
     * Custom upstream or downstream event.
     *                         In-band when travelling downstream.
     */
    CUSTOM_BOTH,
    /**
     * Custom upstream or downstream out-of-band event.
     */
    CUSTOM_BOTH_OOB,
}
/**
 * The result of passing data to a pad.
 * 
 * Note that the custom return values should not be exposed outside of the
 * element scope.
 */
enum FlowReturn {
    /**
     * Pre-defined custom success code.
     */
    CUSTOM_SUCCESS_2,
    /**
     * Pre-defined custom success code (define your
     *                               custom success code to this to avoid compiler
     *                               warnings).
     */
    CUSTOM_SUCCESS_1,
    /**
     * Elements can use values starting from
     *                               this (and higher) to define custom success
     *                               codes.
     */
    CUSTOM_SUCCESS,
    /**
     * Data passing was ok.
     */
    OK,
    /**
     * Pad is not linked.
     */
    NOT_LINKED,
    /**
     * Pad is flushing.
     */
    FLUSHING,
    /**
     * Pad is EOS.
     */
    EOS,
    /**
     * Pad is not negotiated.
     */
    NOT_NEGOTIATED,
    /**
     * Some (fatal) error occurred. Element generating
     *                               this error should post an error message using
     *                               GST_ELEMENT_ERROR() with more details.
     */
    ERROR,
    /**
     * This operation is not supported.
     */
    NOT_SUPPORTED,
    /**
     * Elements can use values starting from
     *                               this (and lower) to define custom error codes.
     */
    CUSTOM_ERROR,
    /**
     * Pre-defined custom error code (define your
     *                               custom error code to this to avoid compiler
     *                               warnings).
     */
    CUSTOM_ERROR_1,
    /**
     * Pre-defined custom error code.
     */
    CUSTOM_ERROR_2,
}
/**
 * Standard predefined formats
 */
enum Format {
    /**
     * undefined format
     */
    UNDEFINED,
    /**
     * the default format of the pad/element. This can be
     *    samples for raw audio, frames/fields for raw video (some, but not all,
     *    elements support this; use `GST_FORMAT_TIME` if you don't have a good
     *    reason to query for samples/frames)
     */
    DEFAULT,
    /**
     * bytes
     */
    BYTES,
    /**
     * time in nanoseconds
     */
    TIME,
    /**
     * buffers (few, if any, elements implement this as of
     *     May 2009)
     */
    BUFFERS,
    /**
     * percentage of stream (few, if any, elements implement
     *     this as of May 2009)
     */
    PERCENT,
}
/**
 * The result of a #GstIteratorItemFunction.
 */
enum IteratorItem {
    /**
     * Skip this item
     */
    SKIP,
    /**
     * Return item
     */
    PASS,
    /**
     * Stop after this item.
     */
    END,
}
/**
 * The result of gst_iterator_next().
 */
enum IteratorResult {
    /**
     * No more items in the iterator
     */
    DONE,
    /**
     * An item was retrieved
     */
    OK,
    /**
     * Datastructure changed while iterating
     */
    RESYNC,
    /**
     * An error happened
     */
    ERROR,
}
/**
 * Library errors are for errors from the library being used by elements
 * (initializing, finalizing, settings, ...)
 */
enum LibraryError {
    /**
     * a general error which doesn't fit in any other
     * category.  Make sure you add a custom message to the error call.
     */
    FAILED,
    /**
     * do not use this except as a placeholder for
     * deciding where to go while developing code.
     */
    TOO_LAZY,
    /**
     * used when the library could not be opened.
     */
    INIT,
    /**
     * used when the library could not be closed.
     */
    SHUTDOWN,
    /**
     * used when the library doesn't accept settings.
     */
    SETTINGS,
    /**
     * used when the library generated an encoding error.
     */
    ENCODE,
    /**
     * the number of library error types.
     */
    NUM_ERRORS,
}
/**
 * The direction of a pad.
 */
enum PadDirection {
    /**
     * direction is unknown.
     */
    UNKNOWN,
    /**
     * the pad is a source pad.
     */
    SRC,
    /**
     * the pad is a sink pad.
     */
    SINK,
}
/**
 * Result values from gst_pad_link and friends.
 */
enum PadLinkReturn {
    /**
     * link succeeded
     */
    OK,
    /**
     * pads have no common grandparent
     */
    WRONG_HIERARCHY,
    /**
     * pad was already linked
     */
    WAS_LINKED,
    /**
     * pads have wrong direction
     */
    WRONG_DIRECTION,
    /**
     * pads do not have common format
     */
    NOFORMAT,
    /**
     * pads cannot cooperate in scheduling
     */
    NOSCHED,
    /**
     * refused for some reason
     */
    REFUSED,
}
/**
 * The status of a GstPad. After activating a pad, which usually happens when the
 * parent element goes from READY to PAUSED, the GstPadMode defines if the
 * pad operates in push or pull mode.
 */
enum PadMode {
    /**
     * Pad will not handle dataflow
     */
    NONE,
    /**
     * Pad handles dataflow in downstream push mode
     */
    PUSH,
    /**
     * Pad handles dataflow in upstream pull mode
     */
    PULL,
}
/**
 * Indicates when this pad will become available.
 */
enum PadPresence {
    /**
     * the pad is always available
     */
    ALWAYS,
    /**
     * the pad will become available depending on the media stream
     */
    SOMETIMES,
    /**
     * the pad is only available on request with
     *  gst_element_request_pad().
     */
    REQUEST,
}
/**
 * Different return values for the #GstPadProbeCallback.
 */
enum PadProbeReturn {
    /**
     * drop data in data probes. For push mode this means that
     *        the data item is not sent downstream. For pull mode, it means that
     *        the data item is not passed upstream. In both cases, no other probes
     *        are called for this item and %GST_FLOW_OK or %TRUE is returned to the
     *        caller.
     */
    DROP,
    /**
     * normal probe return value. This leaves the probe in
     *        place, and defers decisions about dropping or passing data to other
     *        probes, if any. If there are no other probes, the default behaviour
     *        for the probe type applies ('block' for blocking probes,
     *        and 'pass' for non-blocking probes).
     */
    OK,
    /**
     * remove this probe, passing the data. For blocking probes
     *        this will cause data flow to unblock, unless there are also other
     *        blocking probes installed.
     */
    REMOVE,
    /**
     * pass the data item in the block probe and block on the
     *        next item. Note, that if there are multiple pad probes installed and
     *        any probe returns PASS, the data will be passed.
     */
    PASS,
    /**
     * Data has been handled in the probe and will not be
     *        forwarded further. For events and buffers this is the same behaviour as
     *        %GST_PAD_PROBE_DROP (except that in this case you need to unref the buffer
     *        or event yourself). For queries it will also return %TRUE to the caller.
     *        The probe can also modify the #GstFlowReturn value by using the
     *        #GST_PAD_PROBE_INFO_FLOW_RETURN() accessor.
     *        Note that the resulting query must contain valid entries.
     *        Since: 1.6
     */
    HANDLED,
}
/**
 * The different parsing errors that can occur.
 */
enum ParseError {
    /**
     * A syntax error occurred.
     */
    SYNTAX,
    /**
     * The description contained an unknown element
     */
    NO_SUCH_ELEMENT,
    /**
     * An element did not have a specified property
     */
    NO_SUCH_PROPERTY,
    /**
     * There was an error linking two pads.
     */
    LINK,
    /**
     * There was an error setting a property
     */
    COULD_NOT_SET_PROPERTY,
    /**
     * An empty bin was specified.
     */
    EMPTY_BIN,
    /**
     * An empty description was specified
     */
    EMPTY,
    /**
     * A delayed link did not get resolved.
     */
    DELAYED_LINK,
}
/**
 * The plugin loading errors
 */
enum PluginError {
    /**
     * The plugin could not be loaded
     */
    MODULE,
    /**
     * The plugin has unresolved dependencies
     */
    DEPENDENCIES,
    /**
     * The plugin has already be loaded from a different file
     */
    NAME_MISMATCH,
}
/**
 * The type of a %GST_MESSAGE_PROGRESS. The progress messages inform the
 * application of the status of asynchronous tasks.
 */
enum ProgressType {
    /**
     * A new task started.
     */
    START,
    /**
     * A task completed and a new one continues.
     */
    CONTINUE,
    /**
     * A task completed.
     */
    COMPLETE,
    /**
     * A task was canceled.
     */
    CANCELED,
    /**
     * A task caused an error. An error message is also
     *          posted on the bus.
     */
    ERROR,
}
/**
 * The result of a #GstPromise
 */
enum PromiseResult {
    /**
     * Initial state. Waiting for transition to any
     * 	other state.
     */
    PENDING,
    /**
     * Interrupted by the consumer as it doesn't
     * 	want the value anymore.
     */
    INTERRUPTED,
    /**
     * A producer marked a reply
     */
    REPLIED,
    /**
     * The promise expired (the carrying object
     * 	lost all refs) and the promise will never be fulfilled.
     */
    EXPIRED,
}
/**
 * The different types of QoS events that can be given to the
 * gst_event_new_qos() method.
 */
enum QOSType {
    /**
     * The QoS event type that is produced when upstream
     *    elements are producing data too quickly and the element can't keep up
     *    processing the data. Upstream should reduce their production rate. This
     *    type is also used when buffers arrive early or in time.
     */
    OVERFLOW,
    /**
     * The QoS event type that is produced when upstream
     *    elements are producing data too slowly and need to speed up their
     *    production rate.
     */
    UNDERFLOW,
    /**
     * The QoS event type that is produced when the
     *    application enabled throttling to limit the data rate.
     */
    THROTTLE,
}
/**
 * Standard predefined Query types
 */
enum QueryType {
    /**
     * unknown query type
     */
    UNKNOWN,
    /**
     * current position in stream
     */
    POSITION,
    /**
     * total duration of the stream
     */
    DURATION,
    /**
     * latency of stream
     */
    LATENCY,
    /**
     * current jitter of stream
     */
    JITTER,
    /**
     * current rate of the stream
     */
    RATE,
    /**
     * seeking capabilities
     */
    SEEKING,
    /**
     * segment start/stop positions
     */
    SEGMENT,
    /**
     * convert values between formats
     */
    CONVERT,
    /**
     * query supported formats for convert
     */
    FORMATS,
    /**
     * query available media for efficient seeking.
     */
    BUFFERING,
    /**
     * a custom application or element defined query.
     */
    CUSTOM,
    /**
     * query the URI of the source or sink.
     */
    URI,
    /**
     * the buffer allocation properties
     */
    ALLOCATION,
    /**
     * the scheduling properties
     */
    SCHEDULING,
    /**
     * the accept caps query
     */
    ACCEPT_CAPS,
    /**
     * the caps query
     */
    CAPS,
    /**
     * wait till all serialized data is consumed downstream
     */
    DRAIN,
    /**
     * query the pipeline-local context from
     *     downstream or upstream (since 1.2)
     */
    CONTEXT,
    /**
     * the bitrate query (since 1.16)
     */
    BITRATE,
}
/**
 * Element priority ranks. Defines the order in which the autoplugger (or
 * similar rank-picking mechanisms, such as e.g. gst_element_make_from_uri())
 * will choose this element over an alternative one with the same function.
 * 
 * These constants serve as a rough guidance for defining the rank of a
 * #GstPluginFeature. Any value is valid, including values bigger than
 * `GST_RANK_PRIMARY`.
 */
enum Rank {
    /**
     * will be chosen last or not at all
     */
    NONE,
    /**
     * unlikely to be chosen
     */
    MARGINAL,
    /**
     * likely to be chosen
     */
    SECONDARY,
    /**
     * will be chosen first
     */
    PRIMARY,
}
/**
 * Resource errors are for any resource used by an element:
 * memory, files, network connections, process space, ...
 * They're typically used by source and sink elements.
 */
enum ResourceError {
    /**
     * a general error which doesn't fit in any other
     * category.  Make sure you add a custom message to the error call.
     */
    FAILED,
    /**
     * do not use this except as a placeholder for
     * deciding where to go while developing code.
     */
    TOO_LAZY,
    /**
     * used when the resource could not be found.
     */
    NOT_FOUND,
    /**
     * used when resource is busy.
     */
    BUSY,
    /**
     * used when resource fails to open for reading.
     */
    OPEN_READ,
    /**
     * used when resource fails to open for writing.
     */
    OPEN_WRITE,
    /**
     * used when resource cannot be opened for
     * both reading and writing, or either (but unspecified which).
     */
    OPEN_READ_WRITE,
    /**
     * used when the resource can't be closed.
     */
    CLOSE,
    /**
     * used when the resource can't be read from.
     */
    READ,
    /**
     * used when the resource can't be written to.
     */
    WRITE,
    /**
     * used when a seek on the resource fails.
     */
    SEEK,
    /**
     * used when a synchronize on the resource fails.
     */
    SYNC,
    /**
     * used when settings can't be manipulated on.
     */
    SETTINGS,
    /**
     * used when the resource has no space left.
     */
    NO_SPACE_LEFT,
    /**
     * used when the resource can't be opened
     *                                     due to missing authorization.
     *                                     (Since: 1.2.4)
     */
    NOT_AUTHORIZED,
    /**
     * the number of resource error types.
     */
    NUM_ERRORS,
}
/**
 * The different search modes.
 */
enum SearchMode {
    /**
     * Only search for exact matches.
     */
    EXACT,
    /**
     * Search for an exact match or the element just before.
     */
    BEFORE,
    /**
     * Search for an exact match or the element just after.
     */
    AFTER,
}
/**
 * The different types of seek events. When constructing a seek event with
 * gst_event_new_seek() or when doing gst_segment_do_seek ().
 */
enum SeekType {
    /**
     * no change in position is required
     */
    NONE,
    /**
     * absolute position is requested
     */
    SET,
    /**
     * relative position to duration is requested
     */
    END,
}
/**
 * The possible states an element can be in. States can be changed using
 * gst_element_set_state() and checked using gst_element_get_state().
 */
enum State {
    /**
     * no pending state.
     */
    VOID_PENDING,
    /**
     * the NULL state or initial state of an element.
     */
    NULL,
    /**
     * the element is ready to go to PAUSED.
     */
    READY,
    /**
     * the element is PAUSED, it is ready to accept and
     *                          process data. Sink elements however only accept one
     *                          buffer and then block.
     */
    PAUSED,
    /**
     * the element is PLAYING, the #GstClock is running and
     *                          the data is flowing.
     */
    PLAYING,
}
/**
 * These are the different state changes an element goes through.
 * %GST_STATE_NULL &rArr; %GST_STATE_PLAYING is called an upwards state change
 * and %GST_STATE_PLAYING &rArr; %GST_STATE_NULL a downwards state change.
 */
enum StateChange {
    /**
     * state change from NULL to READY.
     *   * The element must check if the resources it needs are available. Device
     *     sinks and -sources typically try to probe the device to constrain their
     *     caps.
     *   * The element opens the device (in case feature need to be probed).
     */
    NULL_TO_READY,
    /**
     * state change from READY to PAUSED.
     *   * The element pads are activated in order to receive data in PAUSED.
     *     Streaming threads are started.
     *   * Some elements might need to return %GST_STATE_CHANGE_ASYNC and complete
     *     the state change when they have enough information. It is a requirement
     *     for sinks to return %GST_STATE_CHANGE_ASYNC and complete the state change
     *     when they receive the first buffer or %GST_EVENT_EOS (preroll).
     *     Sinks also block the dataflow when in PAUSED.
     *   * A pipeline resets the running_time to 0.
     *   * Live sources return %GST_STATE_CHANGE_NO_PREROLL and don't generate data.
     */
    READY_TO_PAUSED,
    /**
     * state change from PAUSED to PLAYING.
     *   * Most elements ignore this state change.
     *   * The pipeline selects a #GstClock and distributes this to all the children
     *     before setting them to PLAYING. This means that it is only allowed to
     *     synchronize on the #GstClock in the PLAYING state.
     *   * The pipeline uses the #GstClock and the running_time to calculate the
     *     base_time. The base_time is distributed to all children when performing
     *     the state change.
     *   * Sink elements stop blocking on the preroll buffer or event and start
     *     rendering the data.
     *   * Sinks can post %GST_MESSAGE_EOS in the PLAYING state. It is not allowed
     *     to post %GST_MESSAGE_EOS when not in the PLAYING state.
     *   * While streaming in PAUSED or PLAYING elements can create and remove
     *     sometimes pads.
     *   * Live sources start generating data and return %GST_STATE_CHANGE_SUCCESS.
     */
    PAUSED_TO_PLAYING,
    /**
     * state change from PLAYING to PAUSED.
     *   * Most elements ignore this state change.
     *   * The pipeline calculates the running_time based on the last selected
     *     #GstClock and the base_time. It stores this information to continue
     *     playback when going back to the PLAYING state.
     *   * Sinks unblock any #GstClock wait calls.
     *   * When a sink does not have a pending buffer to play, it returns
     *     #GST_STATE_CHANGE_ASYNC from this state change and completes the state
     *     change when it receives a new buffer or an %GST_EVENT_EOS.
     *   * Any queued %GST_MESSAGE_EOS items are removed since they will be reposted
     *     when going back to the PLAYING state. The EOS messages are queued in
     *     #GstBin containers.
     *   * Live sources stop generating data and return %GST_STATE_CHANGE_NO_PREROLL.
     */
    PLAYING_TO_PAUSED,
    /**
     * state change from PAUSED to READY.
     *   * Sinks unblock any waits in the preroll.
     *   * Elements unblock any waits on devices
     *   * Chain or get_range functions return %GST_FLOW_FLUSHING.
     *   * The element pads are deactivated so that streaming becomes impossible and
     *     all streaming threads are stopped.
     *   * The sink forgets all negotiated formats
     *   * Elements remove all sometimes pads
     */
    PAUSED_TO_READY,
    /**
     * state change from READY to NULL.
     *   * Elements close devices
     *   * Elements reset any internal state.
     */
    READY_TO_NULL,
    /**
     * state change from NULL to NULL. (Since: 1.14)
     */
    NULL_TO_NULL,
    /**
     * state change from READY to READY,
     * This might happen when going to PAUSED asynchronously failed, in that case
     * elements should make sure they are in a proper, coherent READY state. (Since: 1.14)
     */
    READY_TO_READY,
    /**
     * state change from PAUSED to PAUSED.
     * This might happen when elements were in PLAYING state and 'lost state',
     * they should make sure to go back to real 'PAUSED' state (prerolling for example). (Since: 1.14)
     */
    PAUSED_TO_PAUSED,
    /**
     * state change from PLAYING to PLAYING. (Since: 1.14)
     */
    PLAYING_TO_PLAYING,
}
/**
 * The possible return values from a state change function such as
 * gst_element_set_state(). Only `GST_STATE_CHANGE_FAILURE` is a real failure.
 */
enum StateChangeReturn {
    /**
     * the state change failed
     */
    FAILURE,
    /**
     * the state change succeeded
     */
    SUCCESS,
    /**
     * the state change will happen asynchronously
     */
    ASYNC,
    /**
     * the state change succeeded but the element
     *                               cannot produce data in %GST_STATE_PAUSED.
     *                               This typically happens with live sources.
     */
    NO_PREROLL,
}
/**
 * Stream errors are for anything related to the stream being processed:
 * format errors, media type errors, ...
 * They're typically used by decoders, demuxers, converters, ...
 */
enum StreamError {
    /**
     * a general error which doesn't fit in any other
     * category.  Make sure you add a custom message to the error call.
     */
    FAILED,
    /**
     * do not use this except as a placeholder for
     * deciding where to go while developing code.
     */
    TOO_LAZY,
    /**
     * use this when you do not want to implement
     * this functionality yet.
     */
    NOT_IMPLEMENTED,
    /**
     * used when the element doesn't know the
     * stream's type.
     */
    TYPE_NOT_FOUND,
    /**
     * used when the element doesn't handle this type
     * of stream.
     */
    WRONG_TYPE,
    /**
     * used when there's no codec to handle the
     * stream's type.
     */
    CODEC_NOT_FOUND,
    /**
     * used when decoding fails.
     */
    DECODE,
    /**
     * used when encoding fails.
     */
    ENCODE,
    /**
     * used when demuxing fails.
     */
    DEMUX,
    /**
     * used when muxing fails.
     */
    MUX,
    /**
     * used when the stream is of the wrong format
     * (for example, wrong caps).
     */
    FORMAT,
    /**
     * used when the stream is encrypted and can't be
     * decrypted because this is not supported by the element.
     */
    DECRYPT,
    /**
     * used when the stream is encrypted and
     * can't be decrypted because no suitable key is available.
     */
    DECRYPT_NOKEY,
    /**
     * the number of stream error types.
     */
    NUM_ERRORS,
}
/**
 * The type of a %GST_MESSAGE_STREAM_STATUS. The stream status messages inform the
 * application of new streaming threads and their status.
 */
enum StreamStatusType {
    /**
     * A new thread need to be created.
     */
    CREATE,
    /**
     * a thread entered its loop function
     */
    ENTER,
    /**
     * a thread left its loop function
     */
    LEAVE,
    /**
     * a thread is destroyed
     */
    DESTROY,
    /**
     * a thread is started
     */
    START,
    /**
     * a thread is paused
     */
    PAUSE,
    /**
     * a thread is stopped
     */
    STOP,
}
/**
 * The type of a %GST_MESSAGE_STRUCTURE_CHANGE.
 */
enum StructureChangeType {
    /**
     * Pad linking is starting or done.
     */
    LINK,
    /**
     * Pad unlinking is starting or done.
     */
    UNLINK,
}
/**
 * Extra tag flags used when registering tags.
 */
enum TagFlag {
    /**
     * undefined flag
     */
    UNDEFINED,
    /**
     * tag is meta data
     */
    META,
    /**
     * tag is encoded
     */
    ENCODED,
    /**
     * tag is decoded
     */
    DECODED,
    /**
     * number of tag flags
     */
    COUNT,
}
/**
 * The different tag merging modes are basically replace, overwrite and append,
 * but they can be seen from two directions. Given two taglists: (A) the tags
 * already in the element and (B) the ones that are supplied to the element (
 * e.g. via gst_tag_setter_merge_tags() / gst_tag_setter_add_tags() or a
 * %GST_EVENT_TAG), how are these tags merged?
 * In the table below this is shown for the cases that a tag exists in the list
 * (A) or does not exists (!A) and combinations thereof.
 * 
 * | merge mode  | A + B | A + !B | !A + B | !A + !B |
 * | ----------- | ----- | ------ | ------ | ------- |
 * | REPLACE_ALL | B     | ø      | B      | ø       |
 * | REPLACE     | B     | A      | B      | ø       |
 * | APPEND      | A, B  | A      | B      | ø       |
 * | PREPEND     | B, A  | A      | B      | ø       |
 * | KEEP        | A     | A      | B      | ø       |
 * | KEEP_ALL    | A     | A      | ø      | ø       |
 */
enum TagMergeMode {
    /**
     * undefined merge mode
     */
    UNDEFINED,
    /**
     * replace all tags (clear list and append)
     */
    REPLACE_ALL,
    /**
     * replace tags
     */
    REPLACE,
    /**
     * append tags
     */
    APPEND,
    /**
     * prepend tags
     */
    PREPEND,
    /**
     * keep existing tags
     */
    KEEP,
    /**
     * keep all existing tags
     */
    KEEP_ALL,
    /**
     * the number of merge modes
     */
    COUNT,
}
/**
 * GstTagScope specifies if a taglist applies to the complete
 * medium or only to one single stream.
 */
enum TagScope {
    /**
     * tags specific to this single stream
     */
    STREAM,
    /**
     * global tags for the complete medium
     */
    GLOBAL,
}
/**
 * The different states a task can be in
 */
enum TaskState {
    /**
     * the task is started and running
     */
    STARTED,
    /**
     * the task is stopped
     */
    STOPPED,
    /**
     * the task is paused
     */
    PAUSED,
}
/**
 * The different types of TOC entries (see #GstTocEntry).
 * 
 * There are two types of TOC entries: alternatives or parts in a sequence.
 */
enum TocEntryType {
    /**
     * entry is an angle (i.e. an alternative)
     */
    ANGLE,
    /**
     * entry is a version (i.e. alternative)
     */
    VERSION,
    /**
     * entry is an edition (i.e. alternative)
     */
    EDITION,
    /**
     * invalid entry type value
     */
    INVALID,
    /**
     * entry is a title (i.e. a part of a sequence)
     */
    TITLE,
    /**
     * entry is a track (i.e. a part of a sequence)
     */
    TRACK,
    /**
     * entry is a chapter (i.e. a part of a sequence)
     */
    CHAPTER,
}
/**
 * How a #GstTocEntry should be repeated. By default, entries are played a
 * single time.
 */
enum TocLoopType {
    /**
     * single forward playback
     */
    NONE,
    /**
     * repeat forward
     */
    FORWARD,
    /**
     * repeat backward
     */
    REVERSE,
    /**
     * repeat forward and backward
     */
    PING_PONG,
}
/**
 * The scope of a TOC.
 */
enum TocScope {
    /**
     * global TOC representing all selectable options
     *     (this is what applications are usually interested in)
     */
    GLOBAL,
    /**
     * TOC for the currently active/selected stream
     *     (this is a TOC representing the current stream from start to EOS,
     *     and is what a TOC writer / muxer is usually interested in; it will
     *     usually be a subset of the global TOC, e.g. just the chapters of
     *     the current title, or the chapters selected for playback from the
     *     current title)
     */
    CURRENT,
}
/**
 * Tracing record will contain fields that contain a measured value or extra
 * meta-data. One such meta data are values that tell where a measurement was
 * taken. This enumerating declares to which scope such a meta data field
 * relates to. If it is e.g. %GST_TRACER_VALUE_SCOPE_PAD, then each of the log
 * events may contain values for different #GstPads.
 */
enum TracerValueScope {
    /**
     * the value is related to the process
     */
    PROCESS,
    /**
     * the value is related to a thread
     */
    THREAD,
    /**
     * the value is related to an #GstElement
     */
    ELEMENT,
    /**
     * the value is related to a #GstPad
     */
    PAD,
}
/**
 * The probability of the typefind function. Higher values have more certainty
 * in doing a reliable typefind.
 */
enum TypeFindProbability {
    /**
     * type undetected.
     */
    NONE,
    /**
     * unlikely typefind.
     */
    MINIMUM,
    /**
     * possible type detected.
     */
    POSSIBLE,
    /**
     * likely a type was detected.
     */
    LIKELY,
    /**
     * nearly certain that a type was detected.
     */
    NEARLY_CERTAIN,
    /**
     * very certain a type was detected.
     */
    MAXIMUM,
}
/**
 * Different URI-related errors that can occur.
 */
enum URIError {
    /**
     * The protocol is not supported
     */
    UNSUPPORTED_PROTOCOL,
    /**
     * There was a problem with the URI
     */
    BAD_URI,
    /**
     * Could not set or change the URI because the
     *     URI handler was in a state where that is not possible or not permitted
     */
    BAD_STATE,
    /**
     * There was a problem with the entity that
     *     the URI references
     */
    BAD_REFERENCE,
}
/**
 * The different types of URI direction.
 */
enum URIType {
    /**
     * The URI direction is unknown
     */
    UNKNOWN,
    /**
     * The URI is a consumer.
     */
    SINK,
    /**
     * The URI is a producer.
     */
    SRC,
}
/**
 * Flags for allocators.
 * @bitfield 
 */
enum AllocatorFlags {
    /**
     * The allocator has a custom alloc function.
     */
    CUSTOM_ALLOC,
    /**
     * first flag that can be used for custom purposes
     */
    LAST,
}
/**
 * GstBinFlags are a set of flags specific to bins. Most are set/used
 * internally. They can be checked using the GST_OBJECT_FLAG_IS_SET() macro,
 * and (un)set using GST_OBJECT_FLAG_SET() and GST_OBJECT_FLAG_UNSET().
 * @bitfield 
 */
enum BinFlags {
    /**
     * Don't resync a state change when elements are added or linked in the bin
     */
    NO_RESYNC,
    /**
     * Indicates whether the bin can handle elements that add/remove source pads
     * at any point in time without first posting a no-more-pads signal.
     */
    STREAMS_AWARE,
    /**
     * The last enum in the series of flags for bins. Derived classes can use this
     * as first value in a list of flags.
     */
    LAST,
}
/**
 * A set of flags that can be provided to the gst_buffer_copy_into()
 * function to specify which items should be copied.
 * @bitfield 
 */
enum BufferCopyFlags {
    /**
     * copy nothing
     */
    NONE,
    /**
     * flag indicating that buffer flags should be copied
     */
    FLAGS,
    /**
     * flag indicating that buffer pts, dts,
     *   duration, offset and offset_end should be copied
     */
    TIMESTAMPS,
    /**
     * flag indicating that buffer meta should be
     *   copied
     */
    META,
    /**
     * flag indicating that buffer memory should be reffed
     *   and appended to already existing memory. Unless the memory is marked as
     *   NO_SHARE, no actual copy of the memory is made but it is simply reffed.
     *   Add `GST_BUFFER_COPY_DEEP` to force a real copy.
     */
    MEMORY,
    /**
     * flag indicating that buffer memory should be
     *   merged
     */
    MERGE,
    /**
     * flag indicating that memory should always be copied instead of reffed
     */
    DEEP,
}
/**
 * A set of buffer flags used to describe properties of a #GstBuffer.
 * @bitfield 
 */
enum BufferFlags {
    /**
     * the buffer is live data and should be discarded in
     *                                 the PAUSED state.
     */
    LIVE,
    /**
     * the buffer contains data that should be dropped
     *                                 because it will be clipped against the segment
     *                                 boundaries or because it does not contain data
     *                                 that should be shown to the user.
     */
    DECODE_ONLY,
    /**
     * the buffer marks a data discontinuity in the stream.
     *                                 This typically occurs after a seek or a dropped buffer
     *                                 from a live or network source.
     */
    DISCONT,
    /**
     * the buffer timestamps might have a discontinuity
     *                                 and this buffer is a good point to resynchronize.
     */
    RESYNC,
    /**
     * the buffer data is corrupted.
     */
    CORRUPTED,
    /**
     * the buffer contains a media specific marker. for
     *                                 video this is the end of a frame boundary, for audio
     *                                 this is the start of a talkspurt. for RTP
     *                                 packets this matches the marker flag in the
     *                                 RTP packet header.
     */
    MARKER,
    /**
     * the buffer contains header information that is
     *                                 needed to decode the following data.
     */
    HEADER,
    /**
     * the buffer has been created to fill a gap in the
     *                                 stream and contains media neutral data (elements can
     *                                 switch to optimized code path that ignores the buffer
     *                                 content).
     */
    GAP,
    /**
     * the buffer can be dropped without breaking the
     *                                 stream, for example to reduce bandwidth.
     */
    DROPPABLE,
    /**
     * this unit cannot be decoded independently.
     */
    DELTA_UNIT,
    /**
     * this flag is set when memory of the buffer
     *                                 is added/removed
     */
    TAG_MEMORY,
    /**
     * Elements which write to disk or permanent storage should ensure the data
     * is synced after writing the contents of this buffer.
     */
    SYNC_AFTER,
    /**
     * This buffer is important and should not be dropped.
     * 
     * This can be used to mark important buffers, e.g. to flag RTP packets
     * carrying keyframes or codec setup data for RTP Forward Error Correction
     * purposes, or to prevent still video frames from being dropped by elements
     * due to QoS.
     */
    NON_DROPPABLE,
    /**
     * additional media specific flags can be added starting from
     *                                 this flag.
     */
    LAST,
}
/**
 * Additional flags to control the allocation of a buffer
 * @bitfield 
 */
enum BufferPoolAcquireFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * buffer is keyframe
     */
    KEY_UNIT,
    /**
     * when the bufferpool is empty, acquire_buffer
     * will by default block until a buffer is released into the pool again. Setting
     * this flag makes acquire_buffer return #GST_FLOW_EOS instead of blocking.
     */
    DONTWAIT,
    /**
     * buffer is discont
     */
    DISCONT,
    /**
     * last flag, subclasses can use private flags
     *    starting from this value.
     */
    LAST,
}
/**
 * The standard flags that a bus may have.
 * @bitfield 
 */
enum BusFlags {
    /**
     * The bus is currently dropping all messages
     */
    FLUSHING,
    /**
     * offset to define more flags
     */
    FLAG_LAST,
}
/**
 * Extra flags for a caps.
 * @bitfield 
 */
enum CapsFlags {
    /**
     * Caps has no specific content, but can contain
     *    anything.
     */
    ANY,
}
/**
 * The capabilities of this clock
 * @bitfield 
 */
enum ClockFlags {
    /**
     * clock can do a single sync timeout request
     */
    CAN_DO_SINGLE_SYNC,
    /**
     * clock can do a single async timeout request
     */
    CAN_DO_SINGLE_ASYNC,
    /**
     * clock can do sync periodic timeout requests
     */
    CAN_DO_PERIODIC_SYNC,
    /**
     * clock can do async periodic timeout callbacks
     */
    CAN_DO_PERIODIC_ASYNC,
    /**
     * clock's resolution can be changed
     */
    CAN_SET_RESOLUTION,
    /**
     * clock can be slaved to a master clock
     */
    CAN_SET_MASTER,
    /**
     * clock needs to be synced before it can be used
     */
    NEEDS_STARTUP_SYNC,
    /**
     * subclasses can add additional flags starting from this flag
     */
    LAST,
}
/**
 * These are some terminal style flags you can use when creating your
 * debugging categories to make them stand out in debugging output.
 * @bitfield 
 */
enum DebugColorFlags {
    /**
     * Use black as foreground color.
     */
    FG_BLACK,
    /**
     * Use red as foreground color.
     */
    FG_RED,
    /**
     * Use green as foreground color.
     */
    FG_GREEN,
    /**
     * Use yellow as foreground color.
     */
    FG_YELLOW,
    /**
     * Use blue as foreground color.
     */
    FG_BLUE,
    /**
     * Use magenta as foreground color.
     */
    FG_MAGENTA,
    /**
     * Use cyan as foreground color.
     */
    FG_CYAN,
    /**
     * Use white as foreground color.
     */
    FG_WHITE,
    /**
     * Use black as background color.
     */
    BG_BLACK,
    /**
     * Use red as background color.
     */
    BG_RED,
    /**
     * Use green as background color.
     */
    BG_GREEN,
    /**
     * Use yellow as background color.
     */
    BG_YELLOW,
    /**
     * Use blue as background color.
     */
    BG_BLUE,
    /**
     * Use magenta as background color.
     */
    BG_MAGENTA,
    /**
     * Use cyan as background color.
     */
    BG_CYAN,
    /**
     * Use white as background color.
     */
    BG_WHITE,
    /**
     * Make the output bold.
     */
    BOLD,
    /**
     * Underline the output.
     */
    UNDERLINE,
}
/**
 * Available details for pipeline graphs produced by GST_DEBUG_BIN_TO_DOT_FILE()
 * and GST_DEBUG_BIN_TO_DOT_FILE_WITH_TS().
 * @bitfield 
 */
enum DebugGraphDetails {
    /**
     * show caps-name on edges
     */
    MEDIA_TYPE,
    /**
     * show caps-details on edges
     */
    CAPS_DETAILS,
    /**
     * show modified parameters on
     *                                           elements
     */
    NON_DEFAULT_PARAMS,
    /**
     * show element states
     */
    STATES,
    /**
     * show full element parameter values even
     *                                    if they are very long
     */
    FULL_PARAMS,
    /**
     * show all the typical details that one might want
     */
    ALL,
    /**
     * show all details regardless of how large or
     *                                verbose they make the resulting output
     */
    VERBOSE,
}
/**
 * The standard flags that an element may have.
 * @bitfield 
 */
enum ElementFlags {
    /**
     * ignore state changes from parent
     */
    LOCKED_STATE,
    /**
     * the element is a sink
     */
    SINK,
    /**
     * the element is a source.
     */
    SOURCE,
    /**
     * the element can provide a clock
     */
    PROVIDE_CLOCK,
    /**
     * the element requires a clock
     */
    REQUIRE_CLOCK,
    /**
     * the element can use an index
     */
    INDEXABLE,
    /**
     * offset to define more flags
     */
    LAST,
}
/**
 * #GstEventTypeFlags indicate the aspects of the different #GstEventType
 * values. You can get the type flags of a #GstEventType with the
 * gst_event_type_get_flags() function.
 * @bitfield 
 */
enum EventTypeFlags {
    /**
     * Set if the event can travel upstream.
     */
    UPSTREAM,
    /**
     * Set if the event can travel downstream.
     */
    DOWNSTREAM,
    /**
     * Set if the event should be serialized with data
     *                               flow.
     */
    SERIALIZED,
    /**
     * Set if the event is sticky on the pads.
     */
    STICKY,
    /**
     * Multiple sticky events can be on a pad, each
     *                               identified by the event name.
     */
    STICKY_MULTI,
}
/**
 * The different flags that can be set on #GST_EVENT_GAP events. See
 * gst_event_set_gap_flags() for details.
 * @bitfield 
 */
enum GapFlags {
    /**
     * The #GST_EVENT_GAP signals missing data,
     *    for example because of packet loss.
     */
    DATA,
}
/**
 * Flags used when locking miniobjects
 * @bitfield 
 */
enum LockFlags {
    /**
     * lock for read access
     */
    READ,
    /**
     * lock for write access
     */
    WRITE,
    /**
     * lock for exclusive access
     */
    EXCLUSIVE,
    /**
     * first flag that can be used for custom purposes
     */
    LAST,
}
/**
 * Flags used when mapping memory
 * @bitfield 
 */
enum MapFlags {
    /**
     * map for read access
     */
    READ,
    /**
     * map for write access
     */
    WRITE,
    /**
     * first flag that can be used for custom purposes
     */
    FLAG_LAST,
}
/**
 * Flags for wrapped memory.
 * @bitfield 
 */
enum MemoryFlags {
    /**
     * memory is readonly. It is not allowed to map the
     * memory with #GST_MAP_WRITE.
     */
    READONLY,
    /**
     * memory must not be shared. Copies will have to be
     * made when this memory needs to be shared between buffers. (DEPRECATED:
     * do not use in new code, instead you should create a custom GstAllocator for
     * memory pooling instead of relying on the GstBuffer they were originally
     * attached to.)
     */
    NO_SHARE,
    /**
     * the memory prefix is filled with 0 bytes
     */
    ZERO_PREFIXED,
    /**
     * the memory padding is filled with 0 bytes
     */
    ZERO_PADDED,
    /**
     * the memory is physically
     * contiguous. (Since: 1.2)
     */
    PHYSICALLY_CONTIGUOUS,
    /**
     * the memory can't be mapped via
     * gst_memory_map() without any preconditions. (Since: 1.2)
     */
    NOT_MAPPABLE,
    /**
     * first flag that can be used for custom purposes
     */
    LAST,
}
/**
 * The different message types that are available.
 * @bitfield 
 */
enum MessageType {
    /**
     * an undefined message
     */
    UNKNOWN,
    /**
     * end-of-stream reached in a pipeline. The application will
     * only receive this message in the PLAYING state and every time it sets a
     * pipeline to PLAYING that is in the EOS state. The application can perform a
     * flushing seek in the pipeline, which will undo the EOS state again.
     */
    EOS,
    /**
     * an error occurred. When the application receives an error
     * message it should stop playback of the pipeline and not assume that more
     * data will be played. It is possible to specify a redirection url to the error
     * messages by setting a `redirect-location` field into the error message, application
     * or high level bins might use the information as required.
     */
    ERROR,
    /**
     * a warning occurred.
     */
    WARNING,
    /**
     * an info message occurred
     */
    INFO,
    /**
     * a tag was found.
     */
    TAG,
    /**
     * the pipeline is buffering. When the application
     * receives a buffering message in the PLAYING state for a non-live pipeline it
     * must PAUSE the pipeline until the buffering completes, when the percentage
     * field in the message is 100%. For live pipelines, no action must be
     * performed and the buffering percentage can be used to inform the user about
     * the progress.
     */
    BUFFERING,
    /**
     * a state change happened
     */
    STATE_CHANGED,
    /**
     * an element changed state in a streaming thread.
     * This message is deprecated.
     */
    STATE_DIRTY,
    /**
     * a stepping operation finished.
     */
    STEP_DONE,
    /**
     * an element notifies its capability of providing
     *                             a clock. This message is used internally and
     *                             never forwarded to the application.
     */
    CLOCK_PROVIDE,
    /**
     * The current clock as selected by the pipeline became
     *                          unusable. The pipeline will select a new clock on
     *                          the next PLAYING state change. The application
     *                          should set the pipeline to PAUSED and back to
     *                          PLAYING when this message is received.
     */
    CLOCK_LOST,
    /**
     * a new clock was selected in the pipeline.
     */
    NEW_CLOCK,
    /**
     * the structure of the pipeline changed. This
     * message is used internally and never forwarded to the application.
     */
    STRUCTURE_CHANGE,
    /**
     * status about a stream, emitted when it starts,
     *                             stops, errors, etc..
     */
    STREAM_STATUS,
    /**
     * message posted by the application, possibly
     *                           via an application-specific element.
     */
    APPLICATION,
    /**
     * element-specific message, see the specific element's
     *                       documentation
     */
    ELEMENT,
    /**
     * pipeline started playback of a segment. This
     * message is used internally and never forwarded to the application.
     */
    SEGMENT_START,
    /**
     * pipeline completed playback of a segment. This
     * message is forwarded to the application after all elements that posted
     * `GST_MESSAGE_SEGMENT_START` posted a GST_MESSAGE_SEGMENT_DONE message.
     */
    SEGMENT_DONE,
    /**
     * The duration of a pipeline changed. The
     * application can get the new duration with a duration query.
     */
    DURATION_CHANGED,
    /**
     * Posted by elements when their latency changes. The
     * application should recalculate and distribute a new latency.
     */
    LATENCY,
    /**
     * Posted by elements when they start an ASYNC
     * #GstStateChange. This message is not forwarded to the application but is used
     * internally.
     */
    ASYNC_START,
    /**
     * Posted by elements when they complete an ASYNC
     * #GstStateChange. The application will only receive this message from the toplevel
     * pipeline.
     */
    ASYNC_DONE,
    /**
     * Posted by elements when they want the pipeline to
     * change state. This message is a suggestion to the application which can
     * decide to perform the state change on (part of) the pipeline.
     */
    REQUEST_STATE,
    /**
     * A stepping operation was started.
     */
    STEP_START,
    /**
     * A buffer was dropped or an element changed its processing
     * strategy for Quality of Service reasons.
     */
    QOS,
    /**
     * A progress message.
     */
    PROGRESS,
    /**
     * A new table of contents (TOC) was found or previously found TOC
     * was updated.
     */
    TOC,
    /**
     * Message to request resetting the pipeline's
     *     running time from the pipeline. This is an internal message which
     *     applications will likely never receive.
     */
    RESET_TIME,
    /**
     * Message indicating start of a new stream. Useful
     *     e.g. when using playbin in gapless playback mode, to get notified when
     *     the next title actually starts playing (which will be some time after
     *     the URI for the next title has been set).
     */
    STREAM_START,
    /**
     * Message indicating that an element wants a specific context (Since: 1.2)
     */
    NEED_CONTEXT,
    /**
     * Message indicating that an element created a context (Since: 1.2)
     */
    HAVE_CONTEXT,
    /**
     * Message is an extended message type (see below).
     *     These extended message IDs can't be used directly with mask-based API
     *     like gst_bus_poll() or gst_bus_timed_pop_filtered(), but you can still
     *     filter for GST_MESSAGE_EXTENDED and then check the result for the
     *     specific type. (Since: 1.4)
     */
    EXTENDED,
    /**
     * Message indicating a #GstDevice was added to
     *     a #GstDeviceProvider (Since: 1.4)
     */
    DEVICE_ADDED,
    /**
     * Message indicating a #GstDevice was removed
     *     from a #GstDeviceProvider (Since: 1.4)
     */
    DEVICE_REMOVED,
    /**
     * Message indicating a #GObject property has
     *     changed (Since: 1.10)
     */
    PROPERTY_NOTIFY,
    /**
     * Message indicating a new #GstStreamCollection
     *     is available (Since: 1.10)
     */
    STREAM_COLLECTION,
    /**
     * Message indicating the active selection of
     *     #GstStreams has changed (Since: 1.10)
     */
    STREAMS_SELECTED,
    /**
     * Message indicating to request the application to
     *     try to play the given URL(s). Useful if for example a HTTP 302/303
     *     response is received with a non-HTTP URL inside. (Since: 1.10)
     */
    REDIRECT,
    /**
     * Message indicating a #GstDevice was changed
     *     a #GstDeviceProvider (Since: 1.16)
     */
    DEVICE_CHANGED,
    /**
     * Message sent by elements to request the
     *     running time from the pipeline when an instant rate change should
     *     be applied (which may be in the past when the answer arrives). (Since: 1.18)
     */
    INSTANT_RATE_REQUEST,
    /**
     * mask for all of the above messages.
     */
    ANY,
}
/**
 * Extra metadata flags.
 * @bitfield 
 */
enum MetaFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * metadata should not be modified
     */
    READONLY,
    /**
     * metadata is managed by a bufferpool
     */
    POOLED,
    /**
     * metadata should not be removed
     */
    LOCKED,
    /**
     * additional flags can be added starting from this flag.
     */
    LAST,
}
/**
 * Flags for the mini object
 * @bitfield 
 */
enum MiniObjectFlags {
    /**
     * the object can be locked and unlocked with
     * gst_mini_object_lock() and gst_mini_object_unlock().
     */
    LOCKABLE,
    /**
     * the object is permanently locked in
     * READONLY mode. Only read locks can be performed on the object.
     */
    LOCK_READONLY,
    /**
     * the object is expected to stay alive
     * even after gst_deinit() has been called and so should be ignored by leak
     * detection tools. (Since: 1.10)
     */
    MAY_BE_LEAKED,
    /**
     * first flag that can be used by subclasses.
     */
    LAST,
}
/**
 * The standard flags that an gstobject may have.
 * @bitfield 
 */
enum ObjectFlags {
    /**
     * the object is expected to stay alive even
     * after gst_deinit() has been called and so should be ignored by leak
     * detection tools. (Since: 1.10)
     */
    MAY_BE_LEAKED,
    /**
     * subclasses can add additional flags starting from this flag
     */
    LAST,
}
/**
 * Pad state flags
 * @bitfield 
 */
enum PadFlags {
    /**
     * is dataflow on a pad blocked
     */
    BLOCKED,
    /**
     * is pad flushing
     */
    FLUSHING,
    /**
     * is pad in EOS state
     */
    EOS,
    /**
     * is pad currently blocking on a buffer or event
     */
    BLOCKING,
    /**
     * ensure that there is a parent object before calling
     *                       into the pad callbacks.
     */
    NEED_PARENT,
    /**
     * the pad should be reconfigured/renegotiated.
     *                            The flag has to be unset manually after
     *                            reconfiguration happened.
     */
    NEED_RECONFIGURE,
    /**
     * the pad has pending events
     */
    PENDING_EVENTS,
    /**
     * the pad is using fixed caps. This means that
     *     once the caps are set on the pad, the default caps query function
     *     will only return those caps.
     */
    FIXED_CAPS,
    /**
     * the default event and query handler will forward
     *                      all events and queries to the internally linked pads
     *                      instead of discarding them.
     */
    PROXY_CAPS,
    /**
     * the default query handler will forward
     *                      allocation queries to the internally linked pads
     *                      instead of discarding them.
     */
    PROXY_ALLOCATION,
    /**
     * the default query handler will forward
     *                      scheduling queries to the internally linked pads
     *                      instead of discarding them.
     */
    PROXY_SCHEDULING,
    /**
     * the default accept-caps handler will check
     *                      it the caps intersect the query-caps result instead
     *                      of checking for a subset. This is interesting for
     *                      parsers that can accept incompletely specified caps.
     */
    ACCEPT_INTERSECT,
    /**
     * the default accept-caps handler will use
     *                      the template pad caps instead of query caps to
     *                      compare with the accept caps. Use this in combination
     *                      with %GST_PAD_FLAG_ACCEPT_INTERSECT. (Since: 1.6)
     */
    ACCEPT_TEMPLATE,
    /**
     * offset to define more flags
     */
    LAST,
}
/**
 * The amount of checking to be done when linking pads. `GST_PAD_LINK_CHECK_CAPS`
 * and `GST_PAD_LINK_CHECK_TEMPLATE_CAPS` are mutually exclusive. If both are
 * specified, expensive but safe `GST_PAD_LINK_CHECK_CAPS` are performed.
 * 
 * > Only disable some of the checks if you are 100% certain you know the link
 * > will not fail because of hierarchy/caps compatibility failures. If uncertain,
 * > use the default checks (%GST_PAD_LINK_CHECK_DEFAULT) or the regular methods
 * > for linking the pads.
 * @bitfield 
 */
enum PadLinkCheck {
    /**
     * Don't check hierarchy or caps compatibility.
     */
    NOTHING,
    /**
     * Check the pads have same parents/grandparents.
     *   Could be omitted if it is already known that the two elements that own the
     *   pads are in the same bin.
     */
    HIERARCHY,
    /**
     * Check if the pads are compatible by using
     *   their template caps. This is much faster than `GST_PAD_LINK_CHECK_CAPS,` but
     *   would be unsafe e.g. if one pad has %GST_CAPS_ANY.
     */
    TEMPLATE_CAPS,
    /**
     * Check if the pads are compatible by comparing the
     *   caps returned by gst_pad_query_caps().
     */
    CAPS,
    /**
     * Disables pushing a reconfigure event when pads are
     *   linked.
     */
    NO_RECONFIGURE,
    /**
     * The default checks done when linking
     *   pads (i.e. the ones used by gst_pad_link()).
     */
    DEFAULT,
}
/**
 * The different probing types that can occur. When either one of
 * `GST_PAD_PROBE_TYPE_IDLE` or `GST_PAD_PROBE_TYPE_BLOCK` is used, the probe will be a
 * blocking probe.
 * @bitfield 
 */
enum PadProbeType {
    /**
     * invalid probe type
     */
    INVALID,
    /**
     * probe idle pads and block while the callback is called
     */
    IDLE,
    /**
     * probe and block pads
     */
    BLOCK,
    /**
     * probe buffers
     */
    BUFFER,
    /**
     * probe buffer lists
     */
    BUFFER_LIST,
    /**
     * probe downstream events
     */
    EVENT_DOWNSTREAM,
    /**
     * probe upstream events
     */
    EVENT_UPSTREAM,
    /**
     * probe flush events. This probe has to be
     *     explicitly enabled and is not included in the
     *     `@`GST_PAD_PROBE_TYPE_EVENT_DOWNSTREAM or
     *     `@`GST_PAD_PROBE_TYPE_EVENT_UPSTREAM probe types.
     */
    EVENT_FLUSH,
    /**
     * probe downstream queries
     */
    QUERY_DOWNSTREAM,
    /**
     * probe upstream queries
     */
    QUERY_UPSTREAM,
    /**
     * probe push
     */
    PUSH,
    /**
     * probe pull
     */
    PULL,
    /**
     * probe and block at the next opportunity, at data flow or when idle
     */
    BLOCKING,
    /**
     * probe downstream data (buffers, buffer lists, and events)
     */
    DATA_DOWNSTREAM,
    /**
     * probe upstream data (events)
     */
    DATA_UPSTREAM,
    /**
     * probe upstream and downstream data (buffers, buffer lists, and events)
     */
    DATA_BOTH,
    /**
     * probe and block downstream data (buffers, buffer lists, and events)
     */
    BLOCK_DOWNSTREAM,
    /**
     * probe and block upstream data (events)
     */
    BLOCK_UPSTREAM,
    /**
     * probe upstream and downstream events
     */
    EVENT_BOTH,
    /**
     * probe upstream and downstream queries
     */
    QUERY_BOTH,
    /**
     * probe upstream events and queries and downstream buffers, buffer lists, events and queries
     */
    ALL_BOTH,
    /**
     * probe push and pull
     */
    SCHEDULING,
}
/**
 * Flags for the padtemplate
 * @bitfield 
 */
enum PadTemplateFlags {
    /**
     * first flag that can be used by subclasses.
     */
    LAST,
}
/**
 * Parsing options.
 * @bitfield 
 */
enum ParseFlags {
    /**
     * Do not use any special parsing options.
     */
    NONE,
    /**
     * Always return %NULL when an error occurs
     *     (default behaviour is to return partially constructed bins or elements
     *      in some cases)
     */
    FATAL_ERRORS,
    /**
     * If a bin only has a single element,
     *     just return the element.
     */
    NO_SINGLE_ELEMENT_BINS,
    /**
     * If more than one toplevel element is described
     *     by the pipeline description string, put them in a #GstBin instead of a
     *     #GstPipeline. (Since: 1.10)
     */
    PLACE_IN_BIN,
}
/**
 * Pipeline flags
 * @bitfield 
 */
enum PipelineFlags {
    /**
     * this pipeline works with a fixed clock
     */
    FIXED_CLOCK,
    /**
     * offset to define more flags
     */
    LAST,
}
enum PluginAPIFlags {
    /**
     * Ignore enum members when generating
     *   the plugins cache. This is useful if the members of the enum are generated
     *   dynamically, in order not to expose incorrect documentation to the end user.
     */
    MEMBERS,
}
/**
 * Flags used in connection with gst_plugin_add_dependency().
 * @bitfield 
 */
enum PluginDependencyFlags {
    /**
     * no special flags
     */
    NONE,
    /**
     * recurse into subdirectories
     */
    RECURSE,
    /**
     * use paths
     *         argument only if none of the environment variables is set
     */
    PATHS_ARE_DEFAULT_ONLY,
    /**
     * interpret
     *         filename argument as filter suffix and check all matching files in
     *         the directory
     */
    FILE_NAME_IS_SUFFIX,
    /**
     * interpret
     *         filename argument as filter prefix and check all matching files in
     *         the directory. Since: 1.8.
     */
    FILE_NAME_IS_PREFIX,
    /**
     * interpret
     *   non-absolute paths as relative to the main executable directory. Since
     *   1.14.
     */
    PATHS_ARE_RELATIVE_TO_EXE,
}
/**
 * The plugin loading state
 * @bitfield 
 */
enum PluginFlags {
    /**
     * Temporarily loaded plugins
     */
    CACHED,
    /**
     * The plugin won't be scanned (again)
     */
    BLACKLISTED,
}
/**
 * #GstQueryTypeFlags indicate the aspects of the different #GstQueryType
 * values. You can get the type flags of a #GstQueryType with the
 * gst_query_type_get_flags() function.
 * @bitfield 
 */
enum QueryTypeFlags {
    /**
     * Set if the query can travel upstream.
     */
    UPSTREAM,
    /**
     * Set if the query can travel downstream.
     */
    DOWNSTREAM,
    /**
     * Set if the query should be serialized with data
     *                               flow.
     */
    SERIALIZED,
}
/**
 * The different scheduling flags.
 * @bitfield 
 */
enum SchedulingFlags {
    /**
     * if seeking is possible
     */
    SEEKABLE,
    /**
     * if sequential access is recommended
     */
    SEQUENTIAL,
    /**
     * if bandwidth is limited and buffering possible (since 1.2)
     */
    BANDWIDTH_LIMITED,
}
/**
 * Flags to be used with gst_element_seek() or gst_event_new_seek(). All flags
 * can be used together.
 * 
 * A non flushing seek might take some time to perform as the currently
 * playing data in the pipeline will not be cleared.
 * 
 * An accurate seek might be slower for formats that don't have any indexes
 * or timestamp markers in the stream. Specifying this flag might require a
 * complete scan of the file in those cases.
 * 
 * When performing a segment seek: after the playback of the segment completes,
 * no EOS will be emitted by the element that performed the seek, but a
 * %GST_MESSAGE_SEGMENT_DONE message will be posted on the bus by the element.
 * When this message is posted, it is possible to send a new seek event to
 * continue playback. With this seek method it is possible to perform seamless
 * looping or simple linear editing.
 * 
 * When only changing the playback rate and not the direction, the
 * %GST_SEEK_FLAG_INSTANT_RATE_CHANGE flag can be used for a non-flushing seek
 * to signal that the rate change should be applied immediately. This requires
 * special support in the seek handlers (e.g. demuxers) and any elements
 * synchronizing to the clock, and in general can't work in all cases (for example
 * UDP streaming where the delivery rate is controlled by a remote server). The
 * instant-rate-change mode supports changing the trickmode-related GST_SEEK_ flags,
 * but can't be used in conjunction with other seek flags that affect the new
 * playback position - as the playback position will not be changing.
 * 
 * When doing fast forward (rate > 1.0) or fast reverse (rate < -1.0) trickmode
 * playback, the %GST_SEEK_FLAG_TRICKMODE flag can be used to instruct decoders
 * and demuxers to adjust the playback rate by skipping frames. This can improve
 * performance and decrease CPU usage because not all frames need to be decoded.
 * 
 * Beyond that, the %GST_SEEK_FLAG_TRICKMODE_KEY_UNITS flag can be used to
 * request that decoders skip all frames except key units, and
 * %GST_SEEK_FLAG_TRICKMODE_NO_AUDIO flags can be used to request that audio
 * decoders do no decoding at all, and simple output silence.
 * 
 * The %GST_SEEK_FLAG_SNAP_BEFORE flag can be used to snap to the previous
 * relevant location, and the %GST_SEEK_FLAG_SNAP_AFTER flag can be used to
 * select the next relevant location. If %GST_SEEK_FLAG_KEY_UNIT is specified,
 * the relevant location is a keyframe. If both flags are specified, the nearest
 * of these locations will be selected. If none are specified, the implementation is
 * free to select whichever it wants.
 * 
 * The before and after here are in running time, so when playing backwards,
 * the next location refers to the one that will played in next, and not the
 * one that is located after in the actual source stream.
 * 
 * Also see part-seeking.txt in the GStreamer design documentation for more
 * details on the meaning of these flags and the behaviour expected of
 * elements that handle them.
 * @bitfield 
 */
enum SeekFlags {
    /**
     * no flag
     */
    NONE,
    /**
     * flush pipeline
     */
    FLUSH,
    /**
     * accurate position is requested, this might
     *                     be considerably slower for some formats.
     */
    ACCURATE,
    /**
     * seek to the nearest keyframe. This might be
     *                     faster but less accurate.
     */
    KEY_UNIT,
    /**
     * perform a segment seek.
     */
    SEGMENT,
    /**
     * when doing fast forward or fast reverse playback, allow
     *                     elements to skip frames instead of generating all
     *                     frames. (Since: 1.6)
     */
    TRICKMODE,
    /**
     * Deprecated backward compatibility flag, replaced
     *                     by %GST_SEEK_FLAG_TRICKMODE
     */
    SKIP,
    /**
     * go to a location before the requested position,
     *                     if %GST_SEEK_FLAG_KEY_UNIT this means the keyframe at or before
     *                     the requested position the one at or before the seek target.
     */
    SNAP_BEFORE,
    /**
     * go to a location after the requested position,
     *                     if %GST_SEEK_FLAG_KEY_UNIT this means the keyframe at of after the
     *                     requested position.
     */
    SNAP_AFTER,
    /**
     * go to a position near the requested position,
     *                     if %GST_SEEK_FLAG_KEY_UNIT this means the keyframe closest
     *                     to the requested position, if both keyframes are at an equal
     *                     distance, behaves like %GST_SEEK_FLAG_SNAP_BEFORE.
     */
    SNAP_NEAREST,
    /**
     * when doing fast forward or fast reverse
     *                     playback, request that elements only decode keyframes
     *                     and skip all other content, for formats that have
     *                     keyframes. (Since: 1.6)
     */
    TRICKMODE_KEY_UNITS,
    /**
     * when doing fast forward or fast reverse
     *                     playback, request that audio decoder elements skip
     *                     decoding and output only gap events or silence. (Since: 1.6)
     */
    TRICKMODE_NO_AUDIO,
    /**
     * When doing fast forward or fast reverse
     *                     playback, request that elements only decode keyframes and
     *                     forward predicted frames and skip all other content (for example
     *                     B-Frames), for formats that have keyframes and forward predicted
     *                     frames. (Since: 1.18)
     */
    TRICKMODE_FORWARD_PREDICTED,
    /**
     * Signals that a rate change should be
     *                     applied immediately. Only valid if start/stop position
     *                     are GST_CLOCK_TIME_NONE, the playback direction does not change
     *                     and the seek is not flushing. (Since: 1.18)
     */
    INSTANT_RATE_CHANGE,
}
/**
 * Flags for the GstSegment structure. Currently mapped to the corresponding
 * values of the seek flags.
 * @bitfield 
 */
enum SegmentFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * reset the pipeline running_time to the segment
     *                          running_time
     */
    RESET,
    /**
     * perform skip playback (Since: 1.6)
     */
    TRICKMODE,
    /**
     * Deprecated backward compatibility flag, replaced
     *                         by `GST_SEGMENT_FLAG_TRICKMODE`
     */
    SKIP,
    /**
     * send SEGMENT_DONE instead of EOS
     */
    SEGMENT,
    /**
     * Decode only keyframes, where
     *                                        possible (Since: 1.6)
     */
    TRICKMODE_KEY_UNITS,
    /**
     * Decode only keyframes or forward
     *                                        predicted frames, where possible (Since: 1.18)
     */
    TRICKMODE_FORWARD_PREDICTED,
    /**
     * Do not decode any audio, where
     *                                        possible (Since: 1.6)
     */
    TRICKMODE_NO_AUDIO,
}
enum SerializeFlags {
    /**
     * No special flags specified.
     */
    NONE,
    /**
     * Serialize using the old format for
     *                                      nested structures.
     */
    BACKWARD_COMPAT,
}
enum StackTraceFlags {
    /**
     * Try to retrieve the minimum information
     *                             available, which may be none on some platforms
     *                             (Since: 1.18)
     */
    NONE,
    /**
     * Try to retrieve as much information as possible,
     *                             including source information when getting the
     *                             stack trace
     */
    FULL,
}
enum StreamFlags {
    /**
     * This stream has no special attributes
     */
    NONE,
    /**
     * This stream is a sparse stream (e.g. a subtitle
     *    stream), data may flow only in irregular intervals with large gaps in
     *    between.
     */
    SPARSE,
    /**
     * This stream should be selected by default. This
     *    flag may be used by demuxers to signal that a stream should be selected
     *    by default in a playback scenario.
     */
    SELECT,
    /**
     * This stream should not be selected by default.
     *    This flag may be used by demuxers to signal that a stream should not
     *    be selected by default in a playback scenario, but only if explicitly
     *    selected by the user (e.g. an audio track for the hard of hearing or
     *    a director's commentary track).
     */
    UNSELECT,
}
/**
 * #GstStreamType describes a high level classification set for
 * flows of data in #GstStream objects.
 * 
 * Note that this is a flag, and therefore users should not assume it
 * will be a single value. Do not use the equality operator for checking
 * whether a stream is of a certain type.
 * @bitfield 
 */
enum StreamType {
    /**
     * The stream is of unknown (unclassified) type.
     */
    UNKNOWN,
    /**
     * The stream is of audio data
     */
    AUDIO,
    /**
     * The stream carries video data
     */
    VIDEO,
    /**
     * The stream is a muxed container type
     */
    CONTAINER,
    /**
     * The stream contains subtitle / subpicture data.
     */
    TEXT,
}
/**
 * Flag that describe the value. These flags help applications processing the
 * logs to understand the values.
 * @bitfield 
 */
enum TracerValueFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * the value is optional. When using this flag
     *   one need to have an additional boolean arg before this value in the
     *   var-args list passed to  gst_tracer_record_log().
     */
    OPTIONAL,
    /**
     * the value is a combined figure, since the
     *   start of tracing. Examples are averages or timestamps.
     */
    AGGREGATED,
}
/**
 * The allocator name for the default system memory allocator
 */
const ALLOCATOR_SYSMEM: string
/**
 * Combination of all possible fields that can be copied with
 * gst_buffer_copy_into().
 */
const BUFFER_COPY_ALL: BufferCopyFlags
/**
 * Combination of all possible metadata fields that can be copied with
 * gst_buffer_copy_into().
 */
const BUFFER_COPY_METADATA: BufferCopyFlags
/**
 * Constant for no-offset return results.
 */
const BUFFER_OFFSET_NONE: number
const CAN_INLINE: number
const CAPS_FEATURE_MEMORY_SYSTEM_MEMORY: string
/**
 * Constant to define an undefined clock time.
 */
const CLOCK_TIME_NONE: ClockTime
const DEBUG_BG_MASK: number
const DEBUG_FG_MASK: number
const DEBUG_FORMAT_MASK: number
const ELEMENT_FACTORY_KLASS_DECODER: string
const ELEMENT_FACTORY_KLASS_DECRYPTOR: string
const ELEMENT_FACTORY_KLASS_DEMUXER: string
const ELEMENT_FACTORY_KLASS_DEPAYLOADER: string
const ELEMENT_FACTORY_KLASS_ENCODER: string
const ELEMENT_FACTORY_KLASS_ENCRYPTOR: string
const ELEMENT_FACTORY_KLASS_FORMATTER: string
/**
 * Elements interacting with hardware devices should specify this classifier in
 * their metadata. You may need to put the element in "READY" state to test if
 * the hardware is present in the system.
 */
const ELEMENT_FACTORY_KLASS_HARDWARE: string
const ELEMENT_FACTORY_KLASS_MEDIA_AUDIO: string
const ELEMENT_FACTORY_KLASS_MEDIA_IMAGE: string
const ELEMENT_FACTORY_KLASS_MEDIA_METADATA: string
const ELEMENT_FACTORY_KLASS_MEDIA_SUBTITLE: string
const ELEMENT_FACTORY_KLASS_MEDIA_VIDEO: string
const ELEMENT_FACTORY_KLASS_MUXER: string
const ELEMENT_FACTORY_KLASS_PARSER: string
const ELEMENT_FACTORY_KLASS_PAYLOADER: string
const ELEMENT_FACTORY_KLASS_SINK: string
const ELEMENT_FACTORY_KLASS_SRC: string
/**
 * Elements of any of the defined GST_ELEMENT_FACTORY_LIST types
 */
const ELEMENT_FACTORY_TYPE_ANY: ElementFactoryListType
/**
 * All sinks handling audio, video or image media types
 */
const ELEMENT_FACTORY_TYPE_AUDIOVIDEO_SINKS: ElementFactoryListType
/**
 * All encoders handling audio media types
 */
const ELEMENT_FACTORY_TYPE_AUDIO_ENCODER: ElementFactoryListType
/**
 * All elements used to 'decode' streams (decoders, demuxers, parsers, depayloaders)
 */
const ELEMENT_FACTORY_TYPE_DECODABLE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DECODER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DECRYPTOR: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DEMUXER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DEPAYLOADER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_ENCODER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_ENCRYPTOR: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_FORMATTER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_HARDWARE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MAX_ELEMENTS: ElementFactoryListType
/**
 * Elements matching any of the defined GST_ELEMENT_FACTORY_TYPE_MEDIA types
 * 
 * Note: Do not use this if you wish to not filter against any of the defined
 * media types. If you wish to do this, simply don't specify any
 * GST_ELEMENT_FACTORY_TYPE_MEDIA flag.
 */
const ELEMENT_FACTORY_TYPE_MEDIA_ANY: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_AUDIO: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_IMAGE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_METADATA: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_SUBTITLE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_VIDEO: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MUXER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_PARSER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_PAYLOADER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_SINK: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_SRC: ElementFactoryListType
/**
 * All encoders handling video or image media types
 */
const ELEMENT_FACTORY_TYPE_VIDEO_ENCODER: ElementFactoryListType
/**
 * Name and contact details of the author(s). Use \n to separate
 * multiple author details.
 * E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
 */
const ELEMENT_METADATA_AUTHOR: string
/**
 * Sentence describing the purpose of the element.
 * E.g: "Write stream to a file"
 */
const ELEMENT_METADATA_DESCRIPTION: string
/**
 * Set uri pointing to user documentation. Applications can use this to show
 * help for e.g. effects to users.
 */
const ELEMENT_METADATA_DOC_URI: string
/**
 * Elements that bridge to certain other products can include an icon of that
 * used product. Application can show the icon in menus/selectors to help
 * identifying specific elements.
 */
const ELEMENT_METADATA_ICON_NAME: string
/**
 * String describing the type of element, as an unordered list
 * separated with slashes ('/'). See draft-klass.txt of the design docs
 * for more details and common types. E.g: "Sink/File"
 */
const ELEMENT_METADATA_KLASS: string
/**
 * The long English name of the element. E.g. "File Sink"
 */
const ELEMENT_METADATA_LONGNAME: string
const EVENT_NUM_SHIFT: number
/**
 * The same thing as #GST_EVENT_TYPE_UPSTREAM | #GST_EVENT_TYPE_DOWNSTREAM.
 */
const EVENT_TYPE_BOTH: EventTypeFlags
/**
 * A mask value with all bits set, for use as a
 * GstFlagSet mask where all flag bits must match
 * exactly
 */
const FLAG_SET_MASK_EXACT: number
/**
 * The PERCENT format is between 0 and this value
 */
const FORMAT_PERCENT_MAX: number
/**
 * The value used to scale down the reported PERCENT format value to
 * its real value.
 */
const FORMAT_PERCENT_SCALE: number
/**
 * A value which is guaranteed to never be returned by
 * gst_util_group_id_next().
 * 
 * Can be used as a default value in variables used to store group_id.
 */
const GROUP_ID_INVALID: number
/**
 * To be used in GST_PLUGIN_DEFINE if unsure about the licence.
 */
const LICENSE_UNKNOWN: string
/**
 * GstLockFlags value alias for GST_LOCK_FLAG_READ | GST_LOCK_FLAG_WRITE
 */
const LOCK_FLAG_READWRITE: LockFlags
/**
 * GstMapFlags value alias for GST_MAP_READ | GST_MAP_WRITE
 */
const MAP_READWRITE: MapFlags
/**
 * This metadata stays relevant as long as memory layout is unchanged.
 */
const META_TAG_MEMORY_STR: string
/**
 * Constant that defines one GStreamer millisecond.
 */
const MSECOND: ClockTimeDiff
/**
 * Constant that defines one GStreamer nanosecond
 */
const NSECOND: ClockTimeDiff
/**
 * Use this flag on GObject properties of GstObject to indicate that
 * they might not be available depending on environment such as OS, device, etc,
 * so such properties will be installed conditionally only if the GstObject is
 * able to support it.
 */
const PARAM_CONDITIONALLY_AVAILABLE: number
/**
 * Use this flag on GObject properties to signal they can make sense to be.
 * controlled over time. This hint is used by the GstController.
 */
const PARAM_CONTROLLABLE: number
/**
 * Use this flag on GObject properties of GstObject to indicate that
 * during `gst-inspect` and friends, the default value should be used
 * as default instead of the current value.
 */
const PARAM_DOC_SHOW_DEFAULT: number
/**
 * Use this flag on GObject properties of GstElements to indicate that
 * they can be changed when the element is in the PAUSED or lower state.
 * This flag implies GST_PARAM_MUTABLE_READY.
 */
const PARAM_MUTABLE_PAUSED: number
/**
 * Use this flag on GObject properties of GstElements to indicate that
 * they can be changed when the element is in the PLAYING or lower state.
 * This flag implies GST_PARAM_MUTABLE_PAUSED.
 */
const PARAM_MUTABLE_PLAYING: number
/**
 * Use this flag on GObject properties of GstElements to indicate that
 * they can be changed when the element is in the READY or lower state.
 */
const PARAM_MUTABLE_READY: number
/**
 * Bits based on GST_PARAM_USER_SHIFT can be used by 3rd party applications.
 */
const PARAM_USER_SHIFT: number
/**
 * The field name in a GstCaps that is used to signal the UUID of the protection
 * system.
 */
const PROTECTION_SYSTEM_ID_CAPS_FIELD: string
/**
 * The protection system value of the unspecified UUID.
 * In some cases the system protection ID is not present in the contents or in their
 * metadata, as encrypted WebM.
 * This define is used to set the value of the "system_id" field in GstProtectionEvent,
 * with this value, the application will use an external information to choose which
 * protection system to use.
 * 
 * Example: The matroskademux uses this value in the case of encrypted WebM,
 * the application will choose the appropriate protection system based on the information
 * received through EME API.
 */
const PROTECTION_UNSPECIFIED_SYSTEM_ID: string
const QUERY_NUM_SHIFT: number
/**
 * The same thing as #GST_QUERY_TYPE_UPSTREAM | #GST_QUERY_TYPE_DOWNSTREAM.
 */
const QUERY_TYPE_BOTH: QueryTypeFlags
/**
 * Constant that defines one GStreamer second.
 */
const SECOND: ClockTimeDiff
const SEGMENT_INSTANT_FLAGS: number
/**
 * A value which is guaranteed to never be returned by
 * gst_util_seqnum_next().
 * 
 * Can be used as a default value in variables used to store seqnum.
 */
const SEQNUM_INVALID: number
/**
 * album containing this data (string)
 * 
 * The album name as it should be displayed, e.g. 'The Jazz Guitar'
 */
const TAG_ALBUM: string
/**
 * The artist of the entire album, as it should be displayed.
 */
const TAG_ALBUM_ARTIST: string
/**
 * The artist of the entire album, as it should be sorted.
 */
const TAG_ALBUM_ARTIST_SORTNAME: string
/**
 * album gain in db (double)
 */
const TAG_ALBUM_GAIN: string
/**
 * peak of the album (double)
 */
const TAG_ALBUM_PEAK: string
/**
 * album containing this data, as used for sorting (string)
 * 
 * The album name as it should be sorted, e.g. 'Jazz Guitar, The'
 */
const TAG_ALBUM_SORTNAME: string
/**
 * count of discs inside collection this disc belongs to (unsigned integer)
 */
const TAG_ALBUM_VOLUME_COUNT: string
/**
 * disc number inside a collection (unsigned integer)
 */
const TAG_ALBUM_VOLUME_NUMBER: string
/**
 * Arbitrary application data (sample)
 * 
 * Some formats allow applications to add their own arbitrary data
 * into files. This data is application dependent.
 */
const TAG_APPLICATION_DATA: string
/**
 * Name of the application used to create the media (string)
 */
const TAG_APPLICATION_NAME: string
/**
 * person(s) responsible for the recording (string)
 * 
 * The artist name as it should be displayed, e.g. 'Jimi Hendrix' or
 * 'The Guitar Heroes'
 */
const TAG_ARTIST: string
/**
 * person(s) responsible for the recording, as used for sorting (string)
 * 
 * The artist name as it should be sorted, e.g. 'Hendrix, Jimi' or
 * 'Guitar Heroes, The'
 */
const TAG_ARTIST_SORTNAME: string
/**
 * generic file attachment (sample) (sample taglist should specify the content
 * type and if possible set "filename" to the file name of the
 * attachment)
 */
const TAG_ATTACHMENT: string
/**
 * codec the audio data is stored in (string)
 */
const TAG_AUDIO_CODEC: string
/**
 * number of beats per minute in audio (double)
 */
const TAG_BEATS_PER_MINUTE: string
/**
 * exact or average bitrate in bits/s (unsigned integer)
 */
const TAG_BITRATE: string
/**
 * codec the data is stored in (string)
 */
const TAG_CODEC: string
/**
 * free text commenting the data (string)
 */
const TAG_COMMENT: string
/**
 * person(s) who composed the recording (string)
 */
const TAG_COMPOSER: string
/**
 * The composer's name, used for sorting (string)
 */
const TAG_COMPOSER_SORTNAME: string
/**
 * conductor/performer refinement (string)
 */
const TAG_CONDUCTOR: string
/**
 * contact information (string)
 */
const TAG_CONTACT: string
/**
 * container format the data is stored in (string)
 */
const TAG_CONTAINER_FORMAT: string
/**
 * copyright notice of the data (string)
 */
const TAG_COPYRIGHT: string
/**
 * URI to location where copyright details can be found (string)
 */
const TAG_COPYRIGHT_URI: string
/**
 * date the data was created (#GDate structure)
 */
const TAG_DATE: string
/**
 * date and time the data was created (#GstDateTime structure)
 */
const TAG_DATE_TIME: string
/**
 * short text describing the content of the data (string)
 */
const TAG_DESCRIPTION: string
/**
 * Manufacturer of the device used to create the media (string)
 */
const TAG_DEVICE_MANUFACTURER: string
/**
 * Model of the device used to create the media (string)
 */
const TAG_DEVICE_MODEL: string
/**
 * length in GStreamer time units (nanoseconds) (unsigned 64-bit integer)
 */
const TAG_DURATION: string
/**
 * name of the person or organisation that encoded the file. May contain a
 * copyright message if the person or organisation also holds the copyright
 * (string)
 * 
 * Note: do not use this field to describe the encoding application. Use
 * #GST_TAG_APPLICATION_NAME or #GST_TAG_COMMENT for that.
 */
const TAG_ENCODED_BY: string
/**
 * encoder used to encode this stream (string)
 */
const TAG_ENCODER: string
/**
 * version of the encoder used to encode this stream (unsigned integer)
 */
const TAG_ENCODER_VERSION: string
/**
 * key/value text commenting the data (string)
 * 
 * Must be in the form of 'key=comment' or
 * 'key[lc]=comment' where 'lc' is an ISO-639
 * language code.
 * 
 * This tag is used for unknown Vorbis comment tags,
 * unknown APE tags and certain ID3v2 comment fields.
 */
const TAG_EXTENDED_COMMENT: string
/**
 * genre this data belongs to (string)
 */
const TAG_GENRE: string
/**
 * Indicates the direction the device is pointing to when capturing
 * a media. It is represented as degrees in floating point representation,
 * 0 means the geographic north, and increases clockwise (double from 0 to 360)
 * 
 * See also #GST_TAG_GEO_LOCATION_MOVEMENT_DIRECTION
 */
const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string
/**
 * The city (english name) where the media has been produced (string).
 */
const TAG_GEO_LOCATION_CITY: string
/**
 * The country (english name) where the media has been produced (string).
 */
const TAG_GEO_LOCATION_COUNTRY: string
/**
 * geo elevation of where the media has been recorded or produced in meters
 * according to WGS84 (zero is average sea level) (double).
 */
const TAG_GEO_LOCATION_ELEVATION: string
/**
 * Represents the expected error on the horizontal positioning in
 * meters (double).
 */
const TAG_GEO_LOCATION_HORIZONTAL_ERROR: string
/**
 * geo latitude location of where the media has been recorded or produced in
 * degrees according to WGS84 (zero at the equator, negative values for southern
 * latitudes) (double).
 */
const TAG_GEO_LOCATION_LATITUDE: string
/**
 * geo longitude location of where the media has been recorded or produced in
 * degrees according to WGS84 (zero at the prime meridian in Greenwich/UK,
 * negative values for western longitudes). (double).
 */
const TAG_GEO_LOCATION_LONGITUDE: string
/**
 * Indicates the movement direction of the device performing the capture
 * of a media. It is represented as degrees in floating point representation,
 * 0 means the geographic north, and increases clockwise (double from 0 to 360)
 * 
 * See also #GST_TAG_GEO_LOCATION_CAPTURE_DIRECTION
 */
const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string
/**
 * Speed of the capturing device when performing the capture.
 * Represented in m/s. (double)
 * 
 * See also #GST_TAG_GEO_LOCATION_MOVEMENT_DIRECTION
 */
const TAG_GEO_LOCATION_MOVEMENT_SPEED: string
/**
 * human readable descriptive location of where the media has been recorded or
 * produced. (string).
 */
const TAG_GEO_LOCATION_NAME: string
/**
 * A location 'smaller' than GST_TAG_GEO_LOCATION_CITY that specifies better
 * where the media has been produced. (e.g. the neighborhood) (string).
 * 
 * This tag has been added as this is how it is handled/named in XMP's
 * Iptc4xmpcore schema.
 */
const TAG_GEO_LOCATION_SUBLOCATION: string
/**
 * Groups together media that are related and spans multiple tracks. An
 * example are multiple pieces of a concerto. (string)
 */
const TAG_GROUPING: string
/**
 * Homepage for this media (i.e. artist or movie homepage) (string)
 */
const TAG_HOMEPAGE: string
/**
 * image (sample) (sample taglist should specify the content type and preferably
 * also set "image-type" field as `GstTagImageType`)
 */
const TAG_IMAGE: string
/**
 * Represents the 'Orientation' tag from EXIF. Defines how the image
 * should be rotated and mirrored for display. (string)
 * 
 * This tag has a predefined set of allowed values:
 *   "rotate-0"
 *   "rotate-90"
 *   "rotate-180"
 *   "rotate-270"
 *   "flip-rotate-0"
 *   "flip-rotate-90"
 *   "flip-rotate-180"
 *   "flip-rotate-270"
 * 
 * The naming is adopted according to a possible transformation to perform
 * on the image to fix its orientation, obviously equivalent operations will
 * yield the same result.
 * 
 * Rotations indicated by the values are in clockwise direction and
 * 'flip' means an horizontal mirroring.
 */
const TAG_IMAGE_ORIENTATION: string
/**
 * Information about the people behind a remix and similar
 * interpretations of another existing piece (string)
 */
const TAG_INTERPRETED_BY: string
/**
 * International Standard Recording Code - see http://www.ifpi.org/isrc/ (string)
 */
const TAG_ISRC: string
/**
 * comma separated keywords describing the content (string).
 */
const TAG_KEYWORDS: string
/**
 * ISO-639-2 or ISO-639-1 code for the language the content is in (string)
 * 
 * There is utility API in libgsttag in gst-plugins-base to obtain a translated
 * language name from the language code: `gst_tag_get_language_name()`
 */
const TAG_LANGUAGE_CODE: string
/**
 * Name of the language the content is in (string)
 * 
 * Free-form name of the language the content is in, if a language code
 * is not available. This tag should not be set in addition to a language
 * code. It is undefined what language or locale the language name is in.
 */
const TAG_LANGUAGE_NAME: string
/**
 * license of data (string)
 */
const TAG_LICENSE: string
/**
 * URI to location where license details can be found (string)
 */
const TAG_LICENSE_URI: string
/**
 * Origin of media as a URI (location, where the original of the file or stream
 * is hosted) (string)
 */
const TAG_LOCATION: string
/**
 * The lyrics of the media (string)
 */
const TAG_LYRICS: string
/**
 * maximum bitrate in bits/s (unsigned integer)
 */
const TAG_MAXIMUM_BITRATE: string
/**
 * [Midi note number](http://en.wikipedia.org/wiki/Note#Note_designation_in_accordance_with_octave_name)
 * of the audio track. This is useful for sample instruments and in particular
 * for multi-samples.
 */
const TAG_MIDI_BASE_NOTE: string
/**
 * minimum bitrate in bits/s (unsigned integer)
 */
const TAG_MINIMUM_BITRATE: string
/**
 * nominal bitrate in bits/s (unsigned integer). The actual bitrate might be
 * different from this target bitrate.
 */
const TAG_NOMINAL_BITRATE: string
/**
 * organization (string)
 */
const TAG_ORGANIZATION: string
/**
 * person(s) performing (string)
 */
const TAG_PERFORMER: string
/**
 * image that is meant for preview purposes, e.g. small icon-sized version
 * (sample) (sample taglist should specify the content type)
 */
const TAG_PREVIEW_IMAGE: string
/**
 * Any private data that may be contained in tags (sample).
 * 
 * It is represented by #GstSample in which #GstBuffer contains the
 * binary data and the sample's info #GstStructure may contain any
 * extra information that identifies the origin or meaning of the data.
 * 
 * Private frames in ID3v2 tags ('PRIV' frames) will be represented
 * using this tag, in which case the GstStructure will be named
 * "ID3PrivateFrame" and contain a field named "owner" of type string
 * which contains the owner-identification string from the tag.
 */
const TAG_PRIVATE_DATA: string
/**
 * Name of the label or publisher (string)
 */
const TAG_PUBLISHER: string
/**
 * reference level of track and album gain values (double)
 */
const TAG_REFERENCE_LEVEL: string
/**
 * serial number of track (unsigned integer)
 */
const TAG_SERIAL: string
/**
 * Number of the episode within a season/show (unsigned integer)
 */
const TAG_SHOW_EPISODE_NUMBER: string
/**
 * Name of the show, used for displaying (string)
 */
const TAG_SHOW_NAME: string
/**
 * Number of the season of a show/series (unsigned integer)
 */
const TAG_SHOW_SEASON_NUMBER: string
/**
 * Name of the show, used for sorting (string)
 */
const TAG_SHOW_SORTNAME: string
/**
 * codec/format the subtitle data is stored in (string)
 */
const TAG_SUBTITLE_CODEC: string
/**
 * commonly used title (string)
 * 
 * The title as it should be displayed, e.g. 'The Doll House'
 */
const TAG_TITLE: string
/**
 * commonly used title, as used for sorting (string)
 * 
 * The title as it should be sorted, e.g. 'Doll House, The'
 */
const TAG_TITLE_SORTNAME: string
/**
 * count of tracks inside collection this track belongs to (unsigned integer)
 */
const TAG_TRACK_COUNT: string
/**
 * track gain in db (double)
 */
const TAG_TRACK_GAIN: string
/**
 * track number inside a collection (unsigned integer)
 */
const TAG_TRACK_NUMBER: string
/**
 * peak of the track (double)
 */
const TAG_TRACK_PEAK: string
/**
 * Rating attributed by a person (likely the application user).
 * The higher the value, the more the user likes this media
 * (unsigned int from 0 to 100)
 */
const TAG_USER_RATING: string
/**
 * version of this data (string)
 */
const TAG_VERSION: string
/**
 * codec the video data is stored in (string)
 */
const TAG_VIDEO_CODEC: string
/**
 * Special value for the repeat_count set in gst_toc_entry_set_loop() or
 * returned by gst_toc_entry_set_loop() to indicate infinite looping.
 */
const TOC_REPEAT_COUNT_INFINITE: number
/**
 * Value for #GstUri<!-- -->.port to indicate no port number.
 */
const URI_NO_PORT: number
/**
 * Constant that defines one GStreamer microsecond.
 */
const USECOND: ClockTimeDiff
/**
 * Indicates that the first value provided to a comparison function
 * (gst_value_compare()) is equal to the second one.
 */
const VALUE_EQUAL: number
/**
 * Indicates that the first value provided to a comparison function
 * (gst_value_compare()) is greater than the second one.
 */
const VALUE_GREATER_THAN: number
/**
 * Indicates that the first value provided to a comparison function
 * (gst_value_compare()) is lesser than the second one.
 */
const VALUE_LESS_THAN: number
/**
 * Indicates that the comparison function (gst_value_compare()) can not
 * determine a order for the two provided values.
 */
const VALUE_UNORDERED: number
/**
 * The major version of GStreamer at compile time:
 */
const VERSION_MAJOR: number
/**
 * The micro version of GStreamer at compile time:
 */
const VERSION_MICRO: number
/**
 * The minor version of GStreamer at compile time:
 */
const VERSION_MINOR: number
/**
 * The nano version of GStreamer at compile time:
 * Actual releases have 0, GIT versions have 1, prerelease versions have 2-...
 */
const VERSION_NANO: number
/**
 * Gets the maximum amount of memory blocks that a buffer can hold. This is a
 * compile time constant that can be queried with the function.
 * 
 * When more memory blocks are added, existing memory blocks will be merged
 * together to make room for the new block.
 */
function buffer_get_max_memory(): number
/**
 * Modifies a pointer to a #GstBufferList to point to a different
 * #GstBufferList. The modification is done atomically (so this is useful for
 * ensuring thread safety in some cases), and the reference counts are updated
 * appropriately (the old buffer list is unreffed, the new is reffed).
 * 
 * Either `new_list` or the #GstBufferList pointed to by `old_list` may be %NULL.
 * @param old_list pointer to a pointer to a     #GstBufferList to be replaced.
 * @param new_list pointer to a #GstBufferList that     will replace the buffer list pointed to by `old_list`.
 */
function buffer_list_replace(old_list: BufferList | null, new_list: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList | null ]
/**
 * Modifies a pointer to a #GstBufferList to point to a different
 * #GstBufferList. This function is similar to gst_buffer_list_replace() except
 * that it takes ownership of `new_list`.
 * @param old_list pointer to a pointer to a #GstBufferList     to be replaced.
 * @param new_list pointer to a #GstBufferList     that will replace the bufferlist pointed to by `old_list`.
 */
function buffer_list_take(old_list: BufferList, new_list: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList ]
/**
 * Creates a #GstCapsFeatures from a string representation.
 * @param features a string representation of a #GstCapsFeatures.
 */
function caps_features_from_string(features: string): CapsFeatures | null
/**
 * Converts `caps` from a string representation.
 * 
 * The implementation of serialization up to 1.20 would lead to unexpected results
 * when there were nested #GstCaps / #GstStructure deeper than one level.
 * @param string a string to convert to #GstCaps
 */
function caps_from_string(string: string): Caps | null
/**
 * Modifies a pointer to a #GstContext to point to a different #GstContext. The
 * modification is done atomically (so this is useful for ensuring thread safety
 * in some cases), and the reference counts are updated appropriately (the old
 * context is unreffed, the new one is reffed).
 * 
 * Either `new_context` or the #GstContext pointed to by `old_context` may be %NULL.
 * @param old_context pointer to a pointer to a #GstContext     to be replaced.
 * @param new_context pointer to a #GstContext that will     replace the context pointed to by `old_context`.
 */
function context_replace(old_context: Context, new_context: Context | null): [ /* returnType */ boolean, /* old_context */ Context ]
function core_error_quark(): GLib.Quark
/**
 * Adds the logging function to the list of logging functions.
 * Be sure to use #G_GNUC_NO_INSTRUMENT on that function, it is needed.
 * @param func the function to use
 */
function debug_add_log_function(func: LogFunction): void
/**
 * Adds a memory ringbuffer based debug logger that stores up to
 * `max_size_per_thread` bytes of logs per thread and times out threads after
 * `thread_timeout` seconds of inactivity.
 * 
 * Logs can be fetched with gst_debug_ring_buffer_logger_get_logs() and the
 * logger can be removed again with gst_debug_remove_ring_buffer_logger().
 * Only one logger at a time is possible.
 * @param max_size_per_thread Maximum size of log per thread in bytes
 * @param thread_timeout Timeout for threads in seconds
 */
function debug_add_ring_buffer_logger(max_size_per_thread: number, thread_timeout: number): void
/**
 * To aid debugging applications one can use this method to obtain the whole
 * network of gstreamer elements that form the pipeline into a dot file.
 * This data can be processed with graphviz to get an image.
 * @param bin the top-level pipeline that should be analyzed
 * @param details type of #GstDebugGraphDetails to use
 */
function debug_bin_to_dot_data(bin: Bin, details: DebugGraphDetails): string
/**
 * To aid debugging applications one can use this method to write out the whole
 * network of gstreamer elements that form the pipeline into a dot file.
 * This file can be processed with graphviz to get an image.
 * 
 * ``` shell
 *  dot -Tpng -oimage.png graph_lowlevel.dot
 * ```
 * @param bin the top-level pipeline that should be analyzed
 * @param details type of #GstDebugGraphDetails to use
 * @param file_name output base filename (e.g. "myplayer")
 */
function debug_bin_to_dot_file(bin: Bin, details: DebugGraphDetails, file_name: string): void
/**
 * This works like gst_debug_bin_to_dot_file(), but adds the current timestamp
 * to the filename, so that it can be used to take multiple snapshots.
 * @param bin the top-level pipeline that should be analyzed
 * @param details type of #GstDebugGraphDetails to use
 * @param file_name output base filename (e.g. "myplayer")
 */
function debug_bin_to_dot_file_with_ts(bin: Bin, details: DebugGraphDetails, file_name: string): void
/**
 * Constructs a string that can be used for getting the desired color in color
 * terminals.
 * You need to free the string after use.
 * @param colorinfo the color info
 */
function debug_construct_term_color(colorinfo: number): string
/**
 * Constructs an integer that can be used for getting the desired color in
 * windows' terminals (cmd.exe). As there is no mean to underline, we simply
 * ignore this attribute.
 * 
 * This function returns 0 on non-windows machines.
 * @param colorinfo the color info
 */
function debug_construct_win_color(colorinfo: number): number
/**
 * Returns a snapshot of a all categories that are currently in use . This list
 * may change anytime.
 * The caller has to free the list after use.
 */
function debug_get_all_categories(): DebugCategory[]
/**
 * Changes the coloring mode for debug output.
 */
function debug_get_color_mode(): DebugColorMode
/**
 * Returns the default threshold that is used for new categories.
 */
function debug_get_default_threshold(): DebugLevel
function debug_get_stack_trace(flags: StackTraceFlags): string | null
/**
 * Checks if debugging output is activated.
 */
function debug_is_active(): boolean
/**
 * Checks if the debugging output should be colored.
 */
function debug_is_colored(): boolean
/**
 * Get the string representation of a debugging level
 * @param level the level to get the name for
 */
function debug_level_get_name(level: DebugLevel): string
/**
 * The default logging handler used by GStreamer. Logging functions get called
 * whenever a macro like GST_DEBUG or similar is used. By default this function
 * is setup to output the message and additional info to stderr (or the log file
 * specified via the GST_DEBUG_FILE environment variable) as received via
 * `user_data`.
 * 
 * You can add other handlers by using gst_debug_add_log_function().
 * And you can remove this handler by calling
 * gst_debug_remove_log_function(gst_debug_log_default);
 * @param category category to log
 * @param level level of the message
 * @param file the file that emitted the message, usually the __FILE__ identifier
 * @param function_ the function that emitted the message
 * @param line the line from that the message was emitted, usually __LINE__
 * @param object the object this message relates to,     or %NULL if none
 * @param message the actual message
 * @param user_data the FILE* to log to
 */
function debug_log_default(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage, user_data: object | null): void
/**
 * Returns the string representation for the specified debug log message
 * formatted in the same way as gst_debug_log_default() (the default handler),
 * without color. The purpose is to make it easy for custom log output
 * handlers to get a log output that is identical to what the default handler
 * would write out.
 * @param category category to log
 * @param level level of the message
 * @param file the file that emitted the message, usually the __FILE__ identifier
 * @param function_ the function that emitted the message
 * @param line the line from that the message was emitted, usually __LINE__
 * @param object the object this message relates to,     or %NULL if none
 * @param message the actual message
 */
function debug_log_get_line(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage): string
/**
 * Logs the given message using the currently registered debugging handlers.
 * @param category category to log
 * @param level level of the message is in
 * @param file the file that emitted the message, usually the __FILE__ identifier
 * @param function_ the function that emitted the message
 * @param line the line from that the message was emitted, usually __LINE__
 * @param object the object this message relates to,     or %NULL if none
 * @param message_string a message string
 */
function debug_log_literal(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message_string: string): void
/**
 * If libunwind, glibc backtrace or DbgHelp are present
 * a stack trace is printed.
 */
function debug_print_stack_trace(): void
/**
 * Removes all registered instances of the given logging functions.
 * @param func the log function to remove, or %NULL to     remove the default log function
 */
function debug_remove_log_function(func: LogFunction | null): number
/**
 * Removes all registered instances of log functions with the given user data.
 * @param data user data of the log function to remove
 */
function debug_remove_log_function_by_data(data: object | null): number
/**
 * Removes any previously added ring buffer logger with
 * gst_debug_add_ring_buffer_logger().
 */
function debug_remove_ring_buffer_logger(): void
/**
 * Fetches the current logs per thread from the ring buffer logger. See
 * gst_debug_add_ring_buffer_logger() for details.
 */
function debug_ring_buffer_logger_get_logs(): string[]
/**
 * If activated, debugging messages are sent to the debugging
 * handlers.
 * It makes sense to deactivate it for speed issues.
 * > This function is not threadsafe. It makes sense to only call it
 * during initialization.
 * @param active Whether to use debugging output or not
 */
function debug_set_active(active: boolean): void
/**
 * Changes the coloring mode for debug output.
 * 
 * This function may be called before gst_init().
 * @param mode The coloring mode for debug output. See `GstDebugColorMode`.
 */
function debug_set_color_mode(mode: DebugColorMode): void
/**
 * Changes the coloring mode for debug output.
 * 
 * This function may be called before gst_init().
 * @param mode The coloring mode for debug output. One of the following: "on", "auto", "off", "disable", "unix".
 */
function debug_set_color_mode_from_string(mode: string): void
/**
 * Sets or unsets the use of coloured debugging output.
 * Same as gst_debug_set_color_mode () with the argument being
 * being GST_DEBUG_COLOR_MODE_ON or GST_DEBUG_COLOR_MODE_OFF.
 * 
 * This function may be called before gst_init().
 * @param colored Whether to use colored output or not
 */
function debug_set_colored(colored: boolean): void
/**
 * Sets the default threshold to the given level and updates all categories to
 * use this threshold.
 * 
 * This function may be called before gst_init().
 * @param level level to set
 */
function debug_set_default_threshold(level: DebugLevel): void
/**
 * Sets all categories which match the given glob style pattern to the given
 * level.
 * @param name name of the categories to set
 * @param level level to set them to
 */
function debug_set_threshold_for_name(name: string, level: DebugLevel): void
/**
 * Sets the debug logging wanted in the same form as with the GST_DEBUG
 * environment variable. You can use wildcards such as '*', but note that
 * the order matters when you use wild cards, e.g. "foosrc:6,*src:3,*:2" sets
 * everything to log level 2.
 * @param list comma-separated list of "category:level" pairs to be used     as debug logging levels
 * @param reset %TRUE to clear all previously-set debug levels before setting     new thresholds %FALSE if adding the threshold described by `list` to the one already set.
 */
function debug_set_threshold_from_string(list: string, reset: boolean): void
/**
 * Resets all categories with the given name back to the default level.
 * @param name name of the categories to set
 */
function debug_unset_threshold_for_name(name: string): void
/**
 * Clean up any resources created by GStreamer in gst_init().
 * 
 * It is normally not needed to call this function in a normal application
 * as the resources will automatically be freed when the program terminates.
 * This function is therefore mostly used by testsuites and other memory
 * profiling tools.
 * 
 * After this call GStreamer (including this method) should not be used anymore.
 */
function deinit(): void
/**
 * Registers a new #GstDynamicTypeFactory in the registry
 * @param plugin The #GstPlugin to register `dyn_type` for
 * @param type The #GType to register dynamically
 */
function dynamic_type_register(plugin: Plugin, type: GObject.GType): boolean
/**
 * Get a string describing the error message in the current locale.
 * @param domain the GStreamer error domain this error belongs to.
 * @param code the error code belonging to the domain.
 */
function error_get_message(domain: GLib.Quark, code: number): string
/**
 * Gets the #GstEventTypeFlags associated with `type`.
 * @param type a #GstEventType
 */
function event_type_get_flags(type: EventType): EventTypeFlags
/**
 * Get a printable name for the given event type. Do not modify or free.
 * @param type the event type
 */
function event_type_get_name(type: EventType): string
/**
 * Get the unique quark for the given event type.
 * @param type the event type
 */
function event_type_to_quark(type: EventType): GLib.Quark
/**
 * Similar to g_filename_to_uri(), but attempts to handle relative file paths
 * as well. Before converting `filename` into an URI, it will be prefixed by
 * the current working directory if it is a relative path, and then the path
 * will be canonicalised so that it doesn't contain any './' or '../' segments.
 * 
 * On Windows `filename` should be in UTF-8 encoding.
 * @param filename absolute or relative file name path
 */
function filename_to_uri(filename: string): string
/**
 * Gets a string representing the given flow return.
 * @param ret a #GstFlowReturn to get the name of.
 */
function flow_get_name(ret: FlowReturn): string
/**
 * Get the unique quark for the given GstFlowReturn.
 * @param ret a #GstFlowReturn to get the quark of.
 */
function flow_to_quark(ret: FlowReturn): GLib.Quark
/**
 * Return the format registered with the given nick.
 * @param nick The nick of the format
 */
function format_get_by_nick(nick: string): Format
/**
 * Get details about the given format.
 * @param format The format to get details of
 */
function format_get_details(format: Format): FormatDefinition | null
/**
 * Get a printable name for the given format. Do not modify or free.
 * @param format a #GstFormat
 */
function format_get_name(format: Format): string | null
/**
 * Iterate all the registered formats. The format definition is read
 * only.
 */
function format_iterate_definitions(): Iterator
/**
 * Create a new GstFormat based on the nick or return an
 * already registered format with that nick.
 * @param nick The nick of the new format
 * @param description The description of the new format
 */
function format_register(nick: string, description: string): Format
/**
 * Get the unique quark for the given format.
 * @param format a #GstFormat
 */
function format_to_quark(format: Format): GLib.Quark
/**
 * See if the given format is inside the format array.
 * @param formats The format array to search
 * @param format the format to find
 */
function formats_contains(formats: Format[], format: Format): boolean
/**
 * This helper is mostly helpful for plugins that need to
 * inspect the folder of the main executable to determine
 * their set of features.
 * 
 * When a plugin is initialized from the gst-plugin-scanner
 * external process, the returned path will be the same as from the
 * parent process.
 */
function get_main_executable_path(): string | null
/**
 * Initializes the GStreamer library, setting up internal path lists,
 * registering built-in elements, and loading standard plugins.
 * 
 * Unless the plugin registry is disabled at compile time, the registry will be
 * loaded. By default this will also check if the registry cache needs to be
 * updated and rescan all plugins if needed. See gst_update_registry() for
 * details and section
 * <link linkend="gst-running">Running GStreamer Applications</link>
 * for how to disable automatic registry updates.
 * 
 * WARNING: This function will terminate your program if it was unable to
 * initialize GStreamer for some reason. If you want your program to fall back,
 * use gst_init_check() instead.
 * 
 * WARNING: This function does not work in the same way as corresponding
 * functions in other glib-style libraries, such as gtk_init\(\). In
 * particular, unknown command line options cause this function to
 * abort program execution.
 * @param argv pointer to application's argv
 */
function init(argv: string[] | null): /* argv */ string[] | null
/**
 * Initializes the GStreamer library, setting up internal path lists,
 * registering built-in elements, and loading standard plugins.
 * 
 * This function will return %FALSE if GStreamer could not be initialized
 * for some reason.  If you want your program to fail fatally,
 * use gst_init() instead.
 * @param argv pointer to application's argv
 */
function init_check(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
/**
 * Checks if `obj` is a #GstCapsFeatures
 * @param obj 
 */
function is_caps_features(obj: object | null): boolean
/**
 * Use this function to check if GStreamer has been initialized with gst_init()
 * or gst_init_check().
 */
function is_initialized(): boolean
function library_error_quark(): GLib.Quark
/**
 * Modifies a pointer to a #GstMessage to point to a different #GstMessage. This
 * function is similar to gst_message_replace() except that it takes ownership
 * of `new_message`.
 * @param old_message pointer to a pointer to a #GstMessage     to be replaced.
 * @param new_message pointer to a #GstMessage that     will replace the message pointed to by `old_message`.
 */
function message_take(old_message: Message, new_message: Message | null): [ /* returnType */ boolean, /* old_message */ Message ]
/**
 * Get a printable name for the given message type. Do not modify or free.
 * @param type the message type
 */
function message_type_get_name(type: MessageType): string
/**
 * Get the unique quark for the given message type.
 * @param type the message type
 */
function message_type_to_quark(type: MessageType): GLib.Quark
function meta_api_type_get_tags(api: GObject.GType): string[]
/**
 * Check if `api` was registered with `tag`.
 * @param api an API
 * @param tag the tag to check
 */
function meta_api_type_has_tag(api: GObject.GType, tag: GLib.Quark): boolean
/**
 * Register and return a GType for the `api` and associate it with
 * `tags`.
 * @param api an API to register
 * @param tags tags for `api`
 */
function meta_api_type_register(api: string, tags: string[]): GObject.GType
/**
 * Lookup a previously registered meta info structure by its implementation name
 * `impl`.
 * @param impl the name
 */
function meta_get_info(impl: string): MetaInfo | null
/**
 * Register a new #GstMeta implementation.
 * 
 * The same `info` can be retrieved later with gst_meta_get_info() by using
 * `impl` as the key.
 * @param api the type of the #GstMeta API
 * @param impl the name of the #GstMeta implementation
 * @param size the size of the #GstMeta structure
 * @param init_func a #GstMetaInitFunction
 * @param free_func a #GstMetaFreeFunction
 * @param transform_func a #GstMetaTransformFunction
 */
function meta_register(api: GObject.GType, impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo
/**
 * Register a new custom #GstMeta implementation, backed by an opaque
 * structure holding a #GstStructure.
 * 
 * The registered info can be retrieved later with gst_meta_get_info() by using
 * `name` as the key.
 * 
 * The backing #GstStructure can be retrieved with
 * gst_custom_meta_get_structure(), its mutability is conditioned by the
 * writability of the buffer the meta is attached to.
 * 
 * When `transform_func` is %NULL, the meta and its backing #GstStructure
 * will always be copied when the transform operation is copy, other operations
 * are discarded, copy regions are ignored.
 * @param name the name of the #GstMeta implementation
 * @param tags tags for `api`
 * @param transform_func a #GstMetaTransformFunction
 */
function meta_register_custom(name: string, tags: string[], transform_func: CustomMetaTransformFunction | null): MetaInfo
/**
 * Atomically modifies a pointer to point to a new mini-object.
 * The reference count of `olddata` is decreased and the reference count of
 * `newdata` is increased.
 * 
 * Either `newdata` and the value pointed to by `olddata` may be %NULL.
 * @param olddata pointer to a pointer to a     mini-object to be replaced
 * @param newdata pointer to new mini-object
 */
function mini_object_replace(olddata: MiniObject | null, newdata: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
/**
 * Modifies a pointer to point to a new mini-object. The modification
 * is done atomically. This version is similar to gst_mini_object_replace()
 * except that it does not increase the refcount of `newdata` and thus
 * takes ownership of `newdata`.
 * 
 * Either `newdata` and the value pointed to by `olddata` may be %NULL.
 * @param olddata pointer to a pointer to a mini-object to     be replaced
 * @param newdata pointer to new mini-object
 */
function mini_object_take(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
/**
 * Return the name of a pad mode, for use in debug messages mostly.
 * @param mode the pad mode
 */
function pad_mode_get_name(mode: PadMode): string
/**
 * This function creates a GstArray GParamSpec for use by objects/elements
 * that want to expose properties of GstArray type. This function is
 * typically * used in connection with g_object_class_install_property() in a
 * GObjects's instance_init function.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param element_spec GParamSpec of the array
 * @param flags flags for the property specified
 */
function param_spec_array(name: string, nick: string, blurb: string, element_spec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * This function creates a fraction GParamSpec for use by objects/elements
 * that want to expose properties of fraction type. This function is typically
 * used in connection with g_object_class_install_property() in a GObjects's
 * instance_init function.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param min_num minimum value (fraction numerator)
 * @param min_denom minimum value (fraction denominator)
 * @param max_num maximum value (fraction numerator)
 * @param max_denom maximum value (fraction denominator)
 * @param default_num default value (fraction numerator)
 * @param default_denom default value (fraction denominator)
 * @param flags flags for the property specified
 */
function param_spec_fraction(name: string, nick: string, blurb: string, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec | null
function parent_buffer_meta_api_get_type(): GObject.GType
/**
 * Gets the global #GstMetaInfo describing  the #GstParentBufferMeta meta.
 */
function parent_buffer_meta_get_info(): MetaInfo
/**
 * This is a convenience wrapper around gst_parse_launch() to create a
 * #GstBin from a gst-launch-style pipeline description. See
 * gst_parse_launch() and the gst-launch man page for details about the
 * syntax. Ghost pads on the bin for unlinked source or sink pads
 * within the bin can automatically be created (but only a maximum of
 * one ghost pad for each direction will be created; if you expect
 * multiple unlinked source pads or multiple unlinked sink pads
 * and want them all ghosted, you will have to create the ghost pads
 * yourself).
 * @param bin_description command line describing the bin
 * @param ghost_unlinked_pads whether to automatically create ghost pads     for unlinked source or sink pads within the bin
 */
function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Bin
/**
 * This is a convenience wrapper around gst_parse_launch() to create a
 * #GstBin from a gst-launch-style pipeline description. See
 * gst_parse_launch() and the gst-launch man page for details about the
 * syntax. Ghost pads on the bin for unlinked source or sink pads
 * within the bin can automatically be created (but only a maximum of
 * one ghost pad for each direction will be created; if you expect
 * multiple unlinked source pads or multiple unlinked sink pads
 * and want them all ghosted, you will have to create the ghost pads
 * yourself).
 * @param bin_description command line describing the bin
 * @param ghost_unlinked_pads whether to automatically create ghost pads     for unlinked source or sink pads within the bin
 * @param context a parse context allocated with     gst_parse_context_new(), or %NULL
 * @param flags parsing options, or #GST_PARSE_FLAG_NONE
 */
function parse_bin_from_description_full(bin_description: string, ghost_unlinked_pads: boolean, context: ParseContext | null, flags: ParseFlags): Element
/**
 * Get the error quark used by the parsing subsystem.
 */
function parse_error_quark(): GLib.Quark
/**
 * Create a new pipeline based on command line syntax.
 * Please note that you might get a return value that is not %NULL even though
 * the `error` is set. In this case there was a recoverable parsing error and you
 * can try to play the pipeline.
 * 
 * To create a sub-pipeline (bin) for embedding into an existing pipeline
 * use gst_parse_bin_from_description().
 * @param pipeline_description the command line describing the pipeline
 */
function parse_launch(pipeline_description: string): Element
/**
 * Create a new pipeline based on command line syntax.
 * Please note that you might get a return value that is not %NULL even though
 * the `error` is set. In this case there was a recoverable parsing error and you
 * can try to play the pipeline.
 * 
 * To create a sub-pipeline (bin) for embedding into an existing pipeline
 * use gst_parse_bin_from_description_full().
 * @param pipeline_description the command line describing the pipeline
 * @param context a parse context allocated with      gst_parse_context_new(), or %NULL
 * @param flags parsing options, or #GST_PARSE_FLAG_NONE
 */
function parse_launch_full(pipeline_description: string, context: ParseContext | null, flags: ParseFlags): Element
/**
 * Create a new element based on command line syntax.
 * `error` will contain an error message if an erroneous pipeline is specified.
 * An error does not mean that the pipeline could not be constructed.
 * @param argv null-terminated array of arguments
 */
function parse_launchv(argv: string[]): Element
/**
 * Create a new element based on command line syntax.
 * `error` will contain an error message if an erroneous pipeline is specified.
 * An error does not mean that the pipeline could not be constructed.
 * @param argv null-terminated array of arguments
 * @param context a parse context allocated with     gst_parse_context_new(), or %NULL
 * @param flags parsing options, or #GST_PARSE_FLAG_NONE
 */
function parse_launchv_full(argv: string[], context: ParseContext | null, flags: ParseFlags): Element
/**
 * Get the error quark.
 */
function plugin_error_quark(): GLib.Quark
/**
 * Gets the directory for application specific presets if set by the
 * application.
 */
function preset_get_app_dir(): string | null
/**
 * Sets an extra directory as an absolute path that should be considered when
 * looking for presets. Any presets in the application dir will shadow the
 * system presets.
 * @param app_dir the application specific preset dir
 */
function preset_set_app_dir(app_dir: string): boolean
/**
 * Iterates the supplied list of UUIDs and checks the GstRegistry for
 * all the decryptors supporting one of the supplied UUIDs.
 * @param system_identifiers  A null terminated array of strings that contains the UUID values of each protection system that is to be checked.
 */
function protection_filter_systems_by_available_decryptors(system_identifiers: string[]): string[] | null
function protection_meta_api_get_type(): GObject.GType
function protection_meta_get_info(): MetaInfo
/**
 * Iterates the supplied list of UUIDs and checks the GstRegistry for
 * an element that supports one of the supplied UUIDs. If more than one
 * element matches, the system ID of the highest ranked element is selected.
 * @param system_identifiers A null terminated array of strings that contains the UUID values of each protection system that is to be checked.
 */
function protection_select_system(system_identifiers: string[]): string | null
/**
 * Modifies a pointer to a #GstQuery to point to a different #GstQuery. This
 * function is similar to gst_query_replace() except that it takes ownership of
 * `new_query`.
 * 
 * Either `new_query` or the #GstQuery pointed to by `old_query` may be %NULL.
 * @param old_query pointer to a     pointer to a #GstQuery to be stolen.
 * @param new_query pointer to a #GstQuery that will     replace the query pointed to by `old_query`.
 */
function query_take(old_query: Query | null, new_query: Query | null): [ /* returnType */ boolean, /* old_query */ Query | null ]
/**
 * Gets the #GstQueryTypeFlags associated with `type`.
 * @param type a #GstQueryType
 */
function query_type_get_flags(type: QueryType): QueryTypeFlags
/**
 * Get a printable name for the given query type. Do not modify or free.
 * @param type the query type
 */
function query_type_get_name(type: QueryType): string
/**
 * Get the unique quark for the given query type.
 * @param type the query type
 */
function query_type_to_quark(type: QueryType): GLib.Quark
function reference_timestamp_meta_api_get_type(): GObject.GType
/**
 * Gets the global #GstMetaInfo describing the #GstReferenceTimestampMeta meta.
 */
function reference_timestamp_meta_get_info(): MetaInfo
function resource_error_quark(): GLib.Quark
/**
 * Some functions in the GStreamer core might install a custom SIGSEGV handler
 * to better catch and report errors to the application. Currently this feature
 * is enabled by default when loading plugins.
 * 
 * Applications might want to disable this behaviour with the
 * gst_segtrap_set_enabled() function. This is typically done if the application
 * wants to install its own handler without GStreamer interfering.
 */
function segtrap_is_enabled(): boolean
/**
 * Applications might want to disable/enable the SIGSEGV handling of
 * the GStreamer core. See gst_segtrap_is_enabled() for more information.
 * @param enabled whether a custom SIGSEGV handler should be installed.
 */
function segtrap_set_enabled(enabled: boolean): void
/**
 * Gets a string representing the given state transition.
 * @param transition a #GstStateChange to get the name of.
 */
function state_change_get_name(transition: StateChange): string
function static_caps_get_type(): GObject.GType
function static_pad_template_get_type(): GObject.GType
function stream_error_quark(): GLib.Quark
/**
 * Get a descriptive string for a given #GstStreamType
 * @param stype a #GstStreamType
 */
function stream_type_get_name(stype: StreamType): string
/**
 * Atomically modifies a pointer to point to a new structure.
 * The #GstStructure `oldstr_ptr` is pointing to is freed and
 * `newstr` is taken ownership over.
 * 
 * Either `newstr` and the value pointed to by `oldstr_ptr` may be %NULL.
 * 
 * It is a programming error if both `newstr` and the value pointed to by
 * `oldstr_ptr` refer to the same, non-%NULL structure.
 * @param oldstr_ptr pointer to a place of     a #GstStructure to take
 * @param newstr a new #GstStructure
 */
function structure_take(oldstr_ptr: Structure | null, newstr: Structure | null): [ /* returnType */ boolean, /* oldstr_ptr */ Structure | null ]
/**
 * Checks if the given type is already registered.
 * @param tag name of the tag
 */
function tag_exists(tag: string): boolean
/**
 * Returns the human-readable description of this tag, You must not change or
 * free this string.
 * @param tag the tag
 */
function tag_get_description(tag: string): string | null
/**
 * Gets the flag of `tag`.
 * @param tag the tag
 */
function tag_get_flag(tag: string): TagFlag
/**
 * Returns the human-readable name of this tag, You must not change or free
 * this string.
 * @param tag the tag
 */
function tag_get_nick(tag: string): string | null
/**
 * Gets the #GType used for this tag.
 * @param tag the tag
 */
function tag_get_type(tag: string): GObject.GType
/**
 * Checks if the given tag is fixed. A fixed tag can only contain one value.
 * Unfixed tags can contain lists of values.
 * @param tag tag to check
 */
function tag_is_fixed(tag: string): boolean
/**
 * Copies the contents for the given tag into the value,
 * merging multiple values into one if multiple values are associated
 * with the tag.
 * You must g_value_unset() the value after use.
 * @param list list to get the tag from
 * @param tag tag to read out
 */
function tag_list_copy_value(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
/**
 * Modifies a pointer to a #GstTagList to point to a different #GstTagList. The
 * modification is done atomically (so this is useful for ensuring thread
 * safety in some cases), and the reference counts are updated appropriately
 * (the old tag list is unreffed, the new is reffed).
 * 
 * Either `new_taglist` or the #GstTagList pointed to by `old_taglist` may be
 * %NULL.
 * @param old_taglist pointer to a pointer to a     #GstTagList to be replaced.
 * @param new_taglist pointer to a #GstTagList that     will replace the tag list pointed to by `old_taglist`.
 */
function tag_list_replace(old_taglist: TagList | null, new_taglist: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList | null ]
/**
 * Modifies a pointer to a #GstTagList to point to a different #GstTagList.
 * This function is similar to gst_tag_list_replace() except that it takes
 * ownership of `new_taglist`.
 * @param old_taglist pointer to a pointer to a #GstTagList     to be replaced.
 * @param new_taglist pointer to a #GstTagList that     will replace the taglist pointed to by `old_taglist`.
 */
function tag_list_take(old_taglist: TagList, new_taglist: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList ]
/**
 * This is a convenience function for the func argument of gst_tag_register().
 * It concatenates all given strings using a comma. The tag must be registered
 * as a G_TYPE_STRING or this function will fail.
 * @param src GValue to copy from
 */
function tag_merge_strings_with_comma(src: any): /* dest */ any
/**
 * This is a convenience function for the func argument of gst_tag_register().
 * It creates a copy of the first value from the list.
 * @param src GValue to copy from
 */
function tag_merge_use_first(src: any): /* dest */ any
/**
 * Converts `type` to a string representation.
 * @param type a #GstTocEntryType.
 */
function toc_entry_type_get_nick(type: TocEntryType): string
/**
 * Get a list of all active tracer objects owned by the tracing framework for
 * the entirety of the run-time of the process or till gst_deinit() is called.
 */
function tracing_get_active_tracers(): Tracer[]
/**
 * Register `func` to be called when the trace hook `detail` is getting invoked.
 * Use %NULL for `detail` to register to all hooks.
 * @param tracer the tracer
 * @param detail the detailed hook
 * @param func the callback
 */
function tracing_register_hook(tracer: Tracer, detail: string, func: GObject.Callback): void
function type_find_get_type(): GObject.GType
/**
 * Registers a new typefind function to be used for typefinding. After
 * registering this function will be available for typefinding.
 * This function is typically called during an element's plugin initialization.
 * @param plugin A #GstPlugin, or %NULL for a static typefind function
 * @param name The name for registering
 * @param rank The rank (or importance) of this typefind function
 * @param func The #GstTypeFindFunction to use
 * @param extensions Optional comma-separated list of extensions     that could belong to this type
 * @param possible_caps Optionally the caps that could be returned when typefinding                 succeeds
 */
function type_find_register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps | null): boolean
/**
 * Checks if `type` is plugin API. See gst_type_mark_as_plugin_api() for
 * details.
 * @param type a GType
 */
function type_is_plugin_api(type: GObject.GType): [ /* returnType */ boolean, /* flags */ PluginAPIFlags | null ]
/**
 * Marks `type` as plugin API. This should be called in `class_init` of
 * elements that expose new types (i.e. enums, flags or internal GObjects) via
 * properties, signals or pad templates.
 * 
 * Types exposed by plugins are not automatically added to the documentation
 * as they might originate from another library and should in that case be
 * documented via that library instead.
 * 
 * By marking a type as plugin API it will be included in the documentation of
 * the plugin that defines it.
 * @param type a GType
 * @param flags a set of #GstPluginAPIFlags to further inform cache generation.
 */
function type_mark_as_plugin_api(type: GObject.GType, flags: PluginAPIFlags): void
/**
 * Forces GStreamer to re-scan its plugin paths and update the default
 * plugin registry.
 * 
 * Applications will almost never need to call this function, it is only
 * useful if the application knows new plugins have been installed (or old
 * ones removed) since the start of the application (or, to be precise, the
 * first call to gst_init()) and the application wants to make use of any
 * newly-installed plugins without restarting the application.
 * 
 * Applications should assume that the registry update is neither atomic nor
 * thread-safe and should therefore not have any dynamic pipelines running
 * (including the playbin and decodebin elements) and should also not create
 * any elements or access the GStreamer registry while the update is in
 * progress.
 * 
 * Note that this function may block for a significant amount of time.
 */
function update_registry(): boolean
/**
 * Constructs a URI for a given valid protocol and location.
 * 
 * Free-function: g_free
 * @param protocol Protocol for URI
 * @param location Location for URI
 */
function uri_construct(protocol: string, location: string): string
function uri_error_quark(): GLib.Quark
/**
 * Parses a URI string into a new #GstUri object. Will return NULL if the URI
 * cannot be parsed.
 * @param uri The URI string to parse.
 */
function uri_from_string(uri: string): Uri | null
/**
 * Parses a URI string into a new #GstUri object. Will return NULL if the URI
 * cannot be parsed. This is identical to gst_uri_from_string() except that
 * the userinfo and fragment components of the URI will not be unescaped while
 * parsing.
 * 
 * Use this when you need to extract a username and password from the userinfo
 * such as https://user:password`example`.com since either may contain
 * a URI-escaped ':' character. gst_uri_from_string() will unescape the entire
 * userinfo component, which will make it impossible to know which ':'
 * delineates the username and password.
 * 
 * The same applies to the fragment component of the URI, such as
 * https://example.com/path#fragment which may contain a URI-escaped '#'.
 * @param uri The URI string to parse.
 */
function uri_from_string_escaped(uri: string): Uri | null
/**
 * Extracts the location out of a given valid URI, ie. the protocol and "://"
 * are stripped from the URI, which means that the location returned includes
 * the hostname if one is specified. The returned string must be freed using
 * g_free().
 * 
 * Free-function: g_free
 * @param uri A URI string
 */
function uri_get_location(uri: string): string | null
/**
 * Extracts the protocol out of a given valid URI. The returned string must be
 * freed using g_free().
 * @param uri A URI string
 */
function uri_get_protocol(uri: string): string | null
/**
 * Checks if the protocol of a given valid URI matches `protocol`.
 * @param uri a URI string
 * @param protocol a protocol string (e.g. "http")
 */
function uri_has_protocol(uri: string, protocol: string): boolean
/**
 * Tests if the given string is a valid URI identifier. URIs start with a valid
 * scheme followed by ":" and maybe a string identifying the location.
 * @param uri A URI string
 */
function uri_is_valid(uri: string): boolean
/**
 * This is a convenience function to join two URI strings and return the result.
 * The returned string should be g_free()'d after use.
 * @param base_uri The percent-encoded base URI.
 * @param ref_uri The percent-encoded reference URI to join to the `base_uri`.
 */
function uri_join_strings(base_uri: string, ref_uri: string): string
/**
 * Checks if an element exists that supports the given URI protocol. Note
 * that a positive return value does not imply that a subsequent call to
 * gst_element_make_from_uri() is guaranteed to work.
 * @param type Whether to check for a source or a sink
 * @param protocol Protocol that should be checked for (e.g. "http" or "smb")
 */
function uri_protocol_is_supported(type: URIType, protocol: string): boolean
/**
 * Tests if the given string is a valid protocol identifier. Protocols
 * must consist of alphanumeric characters, '+', '-' and '.' and must
 * start with a alphabetic character. See RFC 3986 Section 3.1.
 * @param protocol A string
 */
function uri_protocol_is_valid(protocol: string): boolean
/**
 * Searches inside `array` for `search_data` by using the comparison function
 * `search_func`. `array` must be sorted ascending.
 * 
 * As `search_data` is always passed as second argument to `search_func` it's
 * not required that `search_data` has the same type as the array elements.
 * 
 * The complexity of this search function is O(log (num_elements)).
 * @param array the sorted input array
 * @param num_elements number of elements in the array
 * @param element_size size of every element in bytes
 * @param search_func function to compare two elements, `search_data` will always be passed as second argument
 * @param mode search mode that should be used
 * @param search_data element that should be found
 */
function util_array_binary_search(array: object | null, num_elements: number, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: object | null): object | null
/**
 * Transforms a #gdouble to a fraction and simplifies
 * the result.
 * @param src #gdouble to transform
 */
function util_double_to_fraction(src: number): [ /* dest_n */ number, /* dest_d */ number ]
/**
 * Dumps the buffer memory into a hex representation. Useful for debugging.
 * @param buf a #GstBuffer whose memory to dump
 */
function util_dump_buffer(buf: Buffer): void
/**
 * Dumps the memory block into a hex representation. Useful for debugging.
 * @param mem a pointer to the memory to dump
 */
function util_dump_mem(mem: Uint8Array): void
/**
 * Adds the fractions `a_n/``a_d` and `b_n/``b_d` and stores
 * the result in `res_n` and `res_d`.
 * @param a_n Numerator of first value
 * @param a_d Denominator of first value
 * @param b_n Numerator of second value
 * @param b_d Denominator of second value
 */
function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
/**
 * Compares the fractions `a_n/``a_d` and `b_n/``b_d` and returns
 * -1 if a < b, 0 if a = b and 1 if a > b.
 * @param a_n Numerator of first value
 * @param a_d Denominator of first value
 * @param b_n Numerator of second value
 * @param b_d Denominator of second value
 */
function util_fraction_compare(a_n: number, a_d: number, b_n: number, b_d: number): number
/**
 * Multiplies the fractions `a_n/``a_d` and `b_n/``b_d` and stores
 * the result in `res_n` and `res_d`.
 * @param a_n Numerator of first value
 * @param a_d Denominator of first value
 * @param b_n Numerator of second value
 * @param b_d Denominator of second value
 */
function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
/**
 * Transforms a fraction to a #gdouble.
 * @param src_n Fraction numerator as #gint
 * @param src_d Fraction denominator #gint
 */
function util_fraction_to_double(src_n: number, src_d: number): /* dest */ number
function util_gdouble_to_guint64(value: number): number
/**
 * Get a property of type %GST_TYPE_ARRAY and transform it into a
 * #GValueArray. This allow language bindings to get GST_TYPE_ARRAY
 * properties which are otherwise not an accessible type.
 * @param object the object to set the array to
 * @param name the name of the property to set
 */
function util_get_object_array(object: GObject.Object, name: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
/**
 * Get a timestamp as GstClockTime to be used for interval measurements.
 * The timestamp should not be interpreted in any other way.
 */
function util_get_timestamp(): ClockTime
/**
 * Calculates the greatest common divisor of `a`
 * and `b`.
 * @param a First value as #gint
 * @param b Second value as #gint
 */
function util_greatest_common_divisor(a: number, b: number): number
/**
 * Calculates the greatest common divisor of `a`
 * and `b`.
 * @param a First value as #gint64
 * @param b Second value as #gint64
 */
function util_greatest_common_divisor_int64(a: number, b: number): number
/**
 * Return a constantly incrementing group id.
 * 
 * This function is used to generate a new group-id for the
 * stream-start event.
 * 
 * This function never returns %GST_GROUP_ID_INVALID (which is 0)
 */
function util_group_id_next(): number
function util_guint64_to_gdouble(value: number): number
/**
 * Compare two sequence numbers, handling wraparound.
 * 
 * The current implementation just returns (gint32)(`s1` - `s2`).
 * @param s1 A sequence number.
 * @param s2 Another sequence number.
 */
function util_seqnum_compare(s1: number, s2: number): number
/**
 * Return a constantly incrementing sequence number.
 * 
 * This function is used internally to GStreamer to be able to determine which
 * events and messages are "the same". For example, elements may set the seqnum
 * on a segment-done message to be the same as that of the last seek event, to
 * indicate that event and the message correspond to the same segment.
 * 
 * This function never returns %GST_SEQNUM_INVALID (which is 0).
 */
function util_seqnum_next(): number
/**
 * Converts the string value to the type of the objects argument and
 * sets the argument with it.
 * 
 * Note that this function silently returns if `object` has no property named
 * `name` or when `value` cannot be converted to the type of the property.
 * @param object the object to set the argument of
 * @param name the name of the argument to set
 * @param value the string value to set
 */
function util_set_object_arg(object: GObject.Object, name: string, value: string): void
/**
 * Transfer a #GValueArray to %GST_TYPE_ARRAY and set this value on the
 * specified property name. This allow language bindings to set GST_TYPE_ARRAY
 * properties which are otherwise not an accessible type.
 * @param object the object to set the array to
 * @param name the name of the property to set
 * @param array a #GValueArray containing the values
 */
function util_set_object_array(object: GObject.Object, name: string, array: GObject.ValueArray): boolean
/**
 * Converts the string to the type of the value and
 * sets the value with it.
 * 
 * Note that this function is dangerous as it does not return any indication
 * if the conversion worked or not.
 * @param value_str the string to get the value from
 */
function util_set_value_from_string(value_str: string): /* value */ any
/**
 * Scale `val` by the rational number `num` / `denom,` avoiding overflows and
 * underflows and without loss of precision.
 * 
 * This function can potentially be very slow if val and num are both
 * greater than G_MAXUINT32.
 * @param val the number to scale
 * @param num the numerator of the scale ratio
 * @param denom the denominator of the scale ratio
 */
function util_uint64_scale(val: number, num: number, denom: number): number
/**
 * Scale `val` by the rational number `num` / `denom,` avoiding overflows and
 * underflows and without loss of precision.
 * 
 * This function can potentially be very slow if val and num are both
 * greater than G_MAXUINT32.
 * @param val the number to scale
 * @param num the numerator of the scale ratio
 * @param denom the denominator of the scale ratio
 */
function util_uint64_scale_ceil(val: number, num: number, denom: number): number
/**
 * Scale `val` by the rational number `num` / `denom,` avoiding overflows and
 * underflows and without loss of precision.  `num` must be non-negative and
 * `denom` must be positive.
 * @param val guint64 (such as a #GstClockTime) to scale.
 * @param num numerator of the scale factor.
 * @param denom denominator of the scale factor.
 */
function util_uint64_scale_int(val: number, num: number, denom: number): number
/**
 * Scale `val` by the rational number `num` / `denom,` avoiding overflows and
 * underflows and without loss of precision.  `num` must be non-negative and
 * `denom` must be positive.
 * @param val guint64 (such as a #GstClockTime) to scale.
 * @param num numerator of the scale factor.
 * @param denom denominator of the scale factor.
 */
function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number
/**
 * Scale `val` by the rational number `num` / `denom,` avoiding overflows and
 * underflows and without loss of precision.  `num` must be non-negative and
 * `denom` must be positive.
 * @param val guint64 (such as a #GstClockTime) to scale.
 * @param num numerator of the scale factor.
 * @param denom denominator of the scale factor.
 */
function util_uint64_scale_int_round(val: number, num: number, denom: number): number
/**
 * Scale `val` by the rational number `num` / `denom,` avoiding overflows and
 * underflows and without loss of precision.
 * 
 * This function can potentially be very slow if val and num are both
 * greater than G_MAXUINT32.
 * @param val the number to scale
 * @param num the numerator of the scale ratio
 * @param denom the denominator of the scale ratio
 */
function util_uint64_scale_round(val: number, num: number, denom: number): number
/**
 * Determines if `value1` and `value2` can be compared.
 * @param value1 a value to compare
 * @param value2 another value to compare
 */
function value_can_compare(value1: any, value2: any): boolean
/**
 * Determines if intersecting two values will produce a valid result.
 * Two values will produce a valid intersection if they have the same
 * type.
 * @param value1 a value to intersect
 * @param value2 another value to intersect
 */
function value_can_intersect(value1: any, value2: any): boolean
/**
 * Checks if it's possible to subtract `subtrahend` from `minuend`.
 * @param minuend the value to subtract from
 * @param subtrahend the value to subtract
 */
function value_can_subtract(minuend: any, subtrahend: any): boolean
/**
 * Determines if `value1` and `value2` can be non-trivially unioned.
 * Any two values can be trivially unioned by adding both of them
 * to a GstValueList.  However, certain types have the possibility
 * to be unioned in a simpler way.  For example, an integer range
 * and an integer can be unioned if the integer is a subset of the
 * integer range.  If there is the possibility that two values can
 * be unioned, this function returns %TRUE.
 * @param value1 a value to union
 * @param value2 another value to union
 */
function value_can_union(value1: any, value2: any): boolean
/**
 * Compares `value1` and `value2`.  If `value1` and `value2` cannot be
 * compared, the function returns GST_VALUE_UNORDERED.  Otherwise,
 * if `value1` is greater than `value2`, GST_VALUE_GREATER_THAN is returned.
 * If `value1` is less than `value2`, GST_VALUE_LESS_THAN is returned.
 * If the values are equal, GST_VALUE_EQUAL is returned.
 * @param value1 a value to compare
 * @param value2 another value to compare
 */
function value_compare(value1: any, value2: any): number
/**
 * Tries to deserialize a string into the type specified by the given GValue.
 * If the operation succeeds, %TRUE is returned, %FALSE otherwise.
 * @param src string to deserialize
 */
function value_deserialize(src: string): [ /* returnType */ boolean, /* dest */ any ]
/**
 * Tries to deserialize a string into the type specified by the given GValue.
 * `pspec` may be used to guide the deserializing of nested members.
 * If the operation succeeds, %TRUE is returned, %FALSE otherwise.
 * @param src string to deserialize
 * @param pspec the #GParamSpec describing the expected value
 */
function value_deserialize_with_pspec(src: string, pspec: GObject.ParamSpec | null): [ /* returnType */ boolean, /* dest */ any ]
/**
 * Fixate `src` into a new value `dest`.
 * For ranges, the first element is taken. For lists and arrays, the
 * first item is fixated and returned.
 * If `src` is already fixed, this function returns %FALSE.
 * @param dest the #GValue destination
 * @param src the #GValue to fixate
 */
function value_fixate(dest: any, src: any): boolean
/**
 * Multiplies the two #GValue items containing a #GST_TYPE_FRACTION and sets
 * `product` to the product of the two fractions.
 * @param product a GValue initialized to #GST_TYPE_FRACTION
 * @param factor1 a GValue initialized to #GST_TYPE_FRACTION
 * @param factor2 a GValue initialized to #GST_TYPE_FRACTION
 */
function value_fraction_multiply(product: any, factor1: any, factor2: any): boolean
/**
 * Subtracts the `subtrahend` from the `minuend` and sets `dest` to the result.
 * @param dest a GValue initialized to #GST_TYPE_FRACTION
 * @param minuend a GValue initialized to #GST_TYPE_FRACTION
 * @param subtrahend a GValue initialized to #GST_TYPE_FRACTION
 */
function value_fraction_subtract(dest: any, minuend: any, subtrahend: any): boolean
/**
 * Gets the bitmask specified by `value`.
 * @param value a GValue initialized to #GST_TYPE_BITMASK
 */
function value_get_bitmask(value: any): number
/**
 * Gets the contents of `value`. The reference count of the returned
 * #GstCaps will not be modified, therefore the caller must take one
 * before getting rid of the `value`.
 * @param value a GValue initialized to GST_TYPE_CAPS
 */
function value_get_caps(value: any): Caps
/**
 * Gets the contents of `value`.
 * @param value a GValue initialized to GST_TYPE_CAPS_FEATURES
 */
function value_get_caps_features(value: any): CapsFeatures
/**
 * Gets the maximum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_DOUBLE_RANGE
 */
function value_get_double_range_max(value: any): number
/**
 * Gets the minimum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_DOUBLE_RANGE
 */
function value_get_double_range_min(value: any): number
/**
 * Retrieve the flags field of a GstFlagSet `value`.
 * @param value a GValue initialized to #GST_TYPE_FLAG_SET
 */
function value_get_flagset_flags(value: any): number
/**
 * Retrieve the mask field of a GstFlagSet `value`.
 * @param value a GValue initialized to #GST_TYPE_FLAG_SET
 */
function value_get_flagset_mask(value: any): number
/**
 * Gets the denominator of the fraction specified by `value`.
 * @param value a GValue initialized to #GST_TYPE_FRACTION
 */
function value_get_fraction_denominator(value: any): number
/**
 * Gets the numerator of the fraction specified by `value`.
 * @param value a GValue initialized to #GST_TYPE_FRACTION
 */
function value_get_fraction_numerator(value: any): number
/**
 * Gets the maximum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_FRACTION_RANGE
 */
function value_get_fraction_range_max(value: any): any | null
/**
 * Gets the minimum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_FRACTION_RANGE
 */
function value_get_fraction_range_min(value: any): any | null
/**
 * Gets the maximum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_INT64_RANGE
 */
function value_get_int64_range_max(value: any): number
/**
 * Gets the minimum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_INT64_RANGE
 */
function value_get_int64_range_min(value: any): number
/**
 * Gets the step of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_INT64_RANGE
 */
function value_get_int64_range_step(value: any): number
/**
 * Gets the maximum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_INT_RANGE
 */
function value_get_int_range_max(value: any): number
/**
 * Gets the minimum of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_INT_RANGE
 */
function value_get_int_range_min(value: any): number
/**
 * Gets the step of the range specified by `value`.
 * @param value a GValue initialized to GST_TYPE_INT_RANGE
 */
function value_get_int_range_step(value: any): number
/**
 * Gets the contents of `value`.
 * @param value a GValue initialized to GST_TYPE_STRUCTURE
 */
function value_get_structure(value: any): Structure
/**
 * Initialises the target value to be of the same type as source and then copies
 * the contents from source to target.
 * @param src the source value
 */
function value_init_and_copy(src: any): /* dest */ any
/**
 * Calculates the intersection of two values.  If the values have
 * a non-empty intersection, the value representing the intersection
 * is placed in `dest,` unless %NULL.  If the intersection is non-empty,
 * `dest` is not modified.
 * @param value1 a value to intersect
 * @param value2 another value to intersect
 */
function value_intersect(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any ]
/**
 * Tests if the given GValue, if available in a GstStructure (or any other
 * container) contains a "fixed" (which means: one value) or an "unfixed"
 * (which means: multiple possible values, such as data lists or data
 * ranges) value.
 * @param value the #GValue to check
 */
function value_is_fixed(value: any): boolean
/**
 * Check that `value1` is a subset of `value2`.
 * @param value1 a #GValue
 * @param value2 a #GValue
 */
function value_is_subset(value1: any, value2: any): boolean
/**
 * Registers functions to perform calculations on #GValue items of a given
 * type. Each type can only be added once.
 * @param table structure containing functions to register
 */
function value_register(table: ValueTable): void
/**
 * tries to transform the given `value` into a string representation that allows
 * getting back this string later on using gst_value_deserialize().
 * 
 * Free-function: g_free
 * @param value a #GValue to serialize
 */
function value_serialize(value: any): string | null
/**
 * Sets `value` to the bitmask specified by `bitmask`.
 * @param value a GValue initialized to #GST_TYPE_BITMASK
 * @param bitmask the bitmask
 */
function value_set_bitmask(value: any, bitmask: number): void
/**
 * Sets the contents of `value` to `caps`. A reference to the
 * provided `caps` will be taken by the `value`.
 * @param value a GValue initialized to GST_TYPE_CAPS
 * @param caps the caps to set the value to
 */
function value_set_caps(value: any, caps: Caps): void
/**
 * Sets the contents of `value` to `features`.
 * @param value a GValue initialized to GST_TYPE_CAPS_FEATURES
 * @param features the features to set the value to
 */
function value_set_caps_features(value: any, features: CapsFeatures): void
/**
 * Sets `value` to the range specified by `start` and `end`.
 * @param value a GValue initialized to GST_TYPE_DOUBLE_RANGE
 * @param start the start of the range
 * @param end the end of the range
 */
function value_set_double_range(value: any, start: number, end: number): void
/**
 * Sets `value` to the flags and mask values provided in `flags` and `mask`.
 * The `flags` value indicates the values of flags, the `mask` represents
 * which bits in the flag value have been set, and which are "don't care"
 * @param value a GValue initialized to %GST_TYPE_FLAG_SET
 * @param flags The value of the flags set or unset
 * @param mask The mask indicate which flags bits must match for comparisons
 */
function value_set_flagset(value: any, flags: number, mask: number): void
/**
 * Sets `value` to the fraction specified by `numerator` over `denominator`.
 * The fraction gets reduced to the smallest numerator and denominator,
 * and if necessary the sign is moved to the numerator.
 * @param value a GValue initialized to #GST_TYPE_FRACTION
 * @param numerator the numerator of the fraction
 * @param denominator the denominator of the fraction
 */
function value_set_fraction(value: any, numerator: number, denominator: number): void
/**
 * Sets `value` to the range specified by `start` and `end`.
 * @param value a GValue initialized to GST_TYPE_FRACTION_RANGE
 * @param start the start of the range (a GST_TYPE_FRACTION GValue)
 * @param end the end of the range (a GST_TYPE_FRACTION GValue)
 */
function value_set_fraction_range(value: any, start: any, end: any): void
/**
 * Sets `value` to the range specified by `numerator_start/``denominator_start`
 * and `numerator_end/``denominator_end`.
 * @param value a GValue initialized to GST_TYPE_FRACTION_RANGE
 * @param numerator_start the numerator start of the range
 * @param denominator_start the denominator start of the range
 * @param numerator_end the numerator end of the range
 * @param denominator_end the denominator end of the range
 */
function value_set_fraction_range_full(value: any, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void
/**
 * Sets `value` to the range specified by `start` and `end`.
 * @param value a GValue initialized to GST_TYPE_INT64_RANGE
 * @param start the start of the range
 * @param end the end of the range
 */
function value_set_int64_range(value: any, start: number, end: number): void
/**
 * Sets `value` to the range specified by `start,` `end` and `step`.
 * @param value a GValue initialized to GST_TYPE_INT64_RANGE
 * @param start the start of the range
 * @param end the end of the range
 * @param step the step of the range
 */
function value_set_int64_range_step(value: any, start: number, end: number, step: number): void
/**
 * Sets `value` to the range specified by `start` and `end`.
 * @param value a GValue initialized to GST_TYPE_INT_RANGE
 * @param start the start of the range
 * @param end the end of the range
 */
function value_set_int_range(value: any, start: number, end: number): void
/**
 * Sets `value` to the range specified by `start,` `end` and `step`.
 * @param value a GValue initialized to GST_TYPE_INT_RANGE
 * @param start the start of the range
 * @param end the end of the range
 * @param step the step of the range
 */
function value_set_int_range_step(value: any, start: number, end: number, step: number): void
/**
 * Sets the contents of `value` to `structure`.
 * @param value a GValue initialized to GST_TYPE_STRUCTURE
 * @param structure the structure to set the value to
 */
function value_set_structure(value: any, structure: Structure): void
/**
 * Subtracts `subtrahend` from `minuend` and stores the result in `dest`.
 * Note that this means subtraction as in sets, not as in mathematics.
 * @param minuend the value to subtract from
 * @param subtrahend the value to subtract
 */
function value_subtract(minuend: any, subtrahend: any): [ /* returnType */ boolean, /* dest */ any ]
/**
 * Creates a GValue corresponding to the union of `value1` and `value2`.
 * @param value1 a value to union
 * @param value2 another value to union
 */
function value_union(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any ]
/**
 * Gets the version number of the GStreamer library.
 */
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
/**
 * This function returns a string that is useful for describing this version
 * of GStreamer to the outside world: user agent strings, logging, ...
 */
function version_string(): string
/**
 * A function that will be called from gst_buffer_foreach_meta(). The `meta`
 * field will point to a the reference of the meta.
 * 
 * `buffer` should not be modified from this callback.
 * 
 * When this function returns %TRUE, the next meta will be
 * returned. When %FALSE is returned, gst_buffer_foreach_meta() will return.
 * 
 * When `meta` is set to %NULL, the item will be removed from the buffer.
 * @callback 
 * @param buffer a #GstBuffer
 */
interface BufferForeachMetaFunc {
    (buffer: Buffer): boolean
}
/**
 * A function that will be called from gst_buffer_list_foreach(). The `buffer`
 * field will point to a the reference of the buffer at `idx`.
 * 
 * When this function returns %TRUE, the next buffer will be
 * returned. When %FALSE is returned, gst_buffer_list_foreach() will return.
 * 
 * When `buffer` is set to %NULL, the item will be removed from the bufferlist.
 * When `buffer` has been made writable, the new buffer reference can be assigned
 * to `buffer`. This function is responsible for unreffing the old buffer when
 * removing or modifying.
 * @callback 
 * @param idx the index of `buffer`
 */
interface BufferListFunc {
    (idx: number): boolean
}
/**
 * Specifies the type of function passed to gst_bus_add_watch() or
 * gst_bus_add_watch_full(), which is called from the mainloop when a message
 * is available on the bus.
 * 
 * The message passed to the function will be unreffed after execution of this
 * function so it should not be freed in the function.
 * 
 * Note that this function is used as a #GSourceFunc which means that returning
 * %FALSE will remove the #GSource from the mainloop.
 * @callback 
 * @param bus the #GstBus that sent the message
 * @param message the #GstMessage
 */
interface BusFunc {
    (bus: Bus, message: Message): boolean
}
/**
 * Handler will be invoked synchronously, when a new message has been injected
 * into the bus. This function is mostly used internally. Only one sync handler
 * can be attached to a given bus.
 * 
 * If the handler returns %GST_BUS_DROP, it should unref the message, else the
 * message should not be unreffed by the sync handler.
 * @callback 
 * @param bus the #GstBus that sent the message
 * @param message the #GstMessage
 */
interface BusSyncHandler {
    (bus: Bus, message: Message): BusSyncReply
}
/**
 * A function that will be called in gst_caps_filter_and_map_in_place().
 * The function may modify `features` and `structure,` and both will be
 * removed from the caps if %FALSE is returned.
 * @callback 
 * @param features the #GstCapsFeatures
 * @param structure the #GstStructure
 */
interface CapsFilterMapFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
/**
 * A function that will be called in gst_caps_foreach(). The function may
 * not modify `features` or `structure`.
 * @callback 
 * @param features the #GstCapsFeatures
 * @param structure the #GstStructure
 */
interface CapsForeachFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
/**
 * A function that will be called in gst_caps_map_in_place(). The function
 * may modify `features` and `structure`.
 * @callback 
 * @param features the #GstCapsFeatures
 * @param structure the #GstStructure
 */
interface CapsMapFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
/**
 * The function prototype of the callback.
 * @callback 
 * @param clock The clock that triggered the callback
 * @param time The time it was triggered
 * @param id The #GstClockID that expired
 */
interface ClockCallback {
    (clock: Clock, time: ClockTime, id: ClockID): boolean
}
/**
 * FIXME(2.0): remove, this is unused
 * @callback 
 * @param binding 
 * @param src_value 
 * @param dest_value 
 */
interface ControlBindingConvert {
    (binding: ControlBinding, src_value: number, dest_value: any): void
}
/**
 * Function for returning a value for a given timestamp.
 * @callback 
 * @param self the #GstControlSource instance
 * @param timestamp timestamp for which a value should be calculated
 * @param value a value which will be set to the result.
 */
interface ControlSourceGetValue {
    (self: ControlSource, timestamp: ClockTime, value: number): boolean
}
/**
 * Function for returning an array of values starting at a given timestamp.
 * @callback 
 * @param self the #GstControlSource instance
 * @param timestamp timestamp for which a value should be calculated
 * @param interval the time spacing between subsequent values
 * @param n_values the number of values
 * @param values array to put control-values in
 */
interface ControlSourceGetValueArray {
    (self: ControlSource, timestamp: ClockTime, interval: ClockTime, n_values: number, values: number): boolean
}
/**
 * Function called for each `meta` in `buffer` as a result of performing a
 * transformation on `transbuf`. Additional `type` specific transform data
 * is passed to the function as `data`.
 * 
 * Implementations should check the `type` of the transform and parse
 * additional type specific fields in `data` that should be used to update
 * the metadata on `transbuf`.
 * @callback 
 * @param transbuf a #GstBuffer
 * @param meta a #GstCustomMeta
 * @param buffer a #GstBuffer
 * @param type the transform type
 * @param data transform specific data.
 */
interface CustomMetaTransformFunction {
    (transbuf: Buffer, meta: CustomMeta, buffer: Buffer, type: GLib.Quark, data: object | null): boolean
}
/**
 * we define this to avoid a compiler warning regarding a cast from a function
 * pointer to a void pointer
 * (see https://bugzilla.gnome.org/show_bug.cgi?id=309253)
 * @callback 
 */
interface DebugFuncPtr {
    (): void
}
/**
 * Callback prototype used in #gst_element_call_async
 * @callback 
 * @param element The #GstElement this function has been called against
 */
interface ElementCallAsyncFunc {
    (element: Element): void
}
/**
 * Function called for each pad when using gst_element_foreach_sink_pad(),
 * gst_element_foreach_src_pad(), or gst_element_foreach_pad().
 * @callback 
 * @param element the #GstElement
 * @param pad a #GstPad
 */
interface ElementForeachPadFunc {
    (element: Element, pad: Pad): boolean
}
/**
 * This function will be called when creating a copy of `it` and should
 * create a copy of all custom iterator fields or increase their
 * reference counts.
 * @callback 
 * @param it The original iterator
 * @param copy The copied iterator
 */
interface IteratorCopyFunction {
    (it: Iterator, copy: Iterator): void
}
/**
 * A function to be passed to gst_iterator_fold().
 * @callback 
 * @param item the item to fold
 * @param ret a #GValue collecting the result
 */
interface IteratorFoldFunction {
    (item: any, ret: any): boolean
}
/**
 * A function that is called by gst_iterator_foreach() for every element.
 * @callback 
 * @param item The item
 */
interface IteratorForeachFunction {
    (item: any): void
}
/**
 * This function will be called when the iterator is freed.
 * 
 * Implementors of a #GstIterator should implement this
 * function and pass it to the constructor of the custom iterator.
 * The function will be called with the iterator lock held.
 * @callback 
 * @param it the iterator
 */
interface IteratorFreeFunction {
    (it: Iterator): void
}
/**
 * The function that will be called after the next item of the iterator
 * has been retrieved. This function can be used to skip items or stop
 * the iterator.
 * 
 * The function will be called with the iterator lock held.
 * @callback 
 * @param it the iterator
 * @param item the item being retrieved.
 */
interface IteratorItemFunction {
    (it: Iterator, item: any): IteratorItem
}
/**
 * The function that will be called when the next element of the iterator
 * should be retrieved.
 * 
 * Implementors of a #GstIterator should implement this
 * function and pass it to the constructor of the custom iterator.
 * The function will be called with the iterator lock held.
 * @callback 
 * @param it the iterator
 * @param result a pointer to hold the next item
 */
interface IteratorNextFunction {
    (it: Iterator, result: any): IteratorResult
}
/**
 * This function will be called whenever a concurrent update happened
 * to the iterated datastructure. The implementor of the iterator should
 * restart the iterator from the beginning and clean up any state it might
 * have.
 * 
 * Implementors of a #GstIterator should implement this
 * function and pass it to the constructor of the custom iterator.
 * The function will be called with the iterator lock held.
 * @callback 
 * @param it the iterator
 */
interface IteratorResyncFunction {
    (it: Iterator): void
}
/**
 * Function prototype for a logging function that can be registered with
 * gst_debug_add_log_function().
 * Use G_GNUC_NO_INSTRUMENT on that function.
 * @callback 
 * @param category a #GstDebugCategory
 * @param level a #GstDebugLevel
 * @param file file name
 * @param function_ function name
 * @param line line number
 * @param object a #GObject
 * @param message the message
 */
interface LogFunction {
    (category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage): void
}
/**
 * Copy `size` bytes from `mem` starting at `offset` and return them wrapped in a
 * new GstMemory object.
 * If `size` is set to -1, all bytes starting at `offset` are copied.
 * @callback 
 * @param mem a #GstMemory
 * @param offset an offset
 * @param size a size or -1
 */
interface MemoryCopyFunction {
    (mem: Memory, offset: number, size: number): Memory
}
/**
 * Check if `mem1` and `mem2` occupy contiguous memory and return the offset of
 * `mem1` in the parent buffer in `offset`.
 * @callback 
 * @param mem1 a #GstMemory
 * @param mem2 a #GstMemory
 * @param offset a result offset
 */
interface MemoryIsSpanFunction {
    (mem1: Memory, mem2: Memory, offset: number): boolean
}
/**
 * Get the memory of `mem` that can be accessed according to the mode specified
 * in `info'`s flags. The function should return a pointer that contains at least
 * `maxsize` bytes.
 * @callback 
 * @param mem a #GstMemory
 * @param info the #GstMapInfo to map with
 * @param maxsize size to map
 */
interface MemoryMapFullFunction {
    (mem: Memory, info: MapInfo, maxsize: number): object | null
}
/**
 * Get the memory of `mem` that can be accessed according to the mode specified
 * in `flags`. The function should return a pointer that contains at least
 * `maxsize` bytes.
 * @callback 
 * @param mem a #GstMemory
 * @param maxsize size to map
 * @param flags access mode for the memory
 */
interface MemoryMapFunction {
    (mem: Memory, maxsize: number, flags: MapFlags): object | null
}
/**
 * Share `size` bytes from `mem` starting at `offset` and return them wrapped in a
 * new GstMemory object. If `size` is set to -1, all bytes starting at `offset` are
 * shared. This function does not make a copy of the bytes in `mem`.
 * @callback 
 * @param mem a #GstMemory
 * @param offset an offset
 * @param size a size or -1
 */
interface MemoryShareFunction {
    (mem: Memory, offset: number, size: number): Memory
}
/**
 * Release the pointer previously retrieved with gst_memory_map() with `info`.
 * @callback 
 * @param mem a #GstMemory
 * @param info a #GstMapInfo
 */
interface MemoryUnmapFullFunction {
    (mem: Memory, info: MapInfo): void
}
/**
 * Release the pointer previously retrieved with gst_memory_map().
 * @callback 
 * @param mem a #GstMemory
 */
interface MemoryUnmapFunction {
    (mem: Memory): void
}
/**
 * Function called when `meta` is freed in `buffer`.
 * @callback 
 * @param meta a #GstMeta
 * @param buffer a #GstBuffer
 */
interface MetaFreeFunction {
    (meta: Meta, buffer: Buffer): void
}
/**
 * Function called when `meta` is initialized in `buffer`.
 * @callback 
 * @param meta a #GstMeta
 * @param params parameters passed to the init function
 * @param buffer a #GstBuffer
 */
interface MetaInitFunction {
    (meta: Meta, params: object | null, buffer: Buffer): boolean
}
/**
 * Function called for each `meta` in `buffer` as a result of performing a
 * transformation on `transbuf`. Additional `type` specific transform data
 * is passed to the function as `data`.
 * 
 * Implementations should check the `type` of the transform and parse
 * additional type specific fields in `data` that should be used to update
 * the metadata on `transbuf`.
 * @callback 
 * @param transbuf a #GstBuffer
 * @param meta a #GstMeta
 * @param buffer a #GstBuffer
 * @param type the transform type
 * @param data transform specific data.
 */
interface MetaTransformFunction {
    (transbuf: Buffer, meta: Meta, buffer: Buffer, type: GLib.Quark, data: object | null): boolean
}
/**
 * Function prototype for methods to create copies of instances.
 * @callback 
 * @param obj MiniObject to copy
 */
interface MiniObjectCopyFunction {
    (obj: MiniObject): MiniObject
}
/**
 * Function prototype for when a miniobject has lost its last refcount.
 * Implementation of the mini object are allowed to revive the
 * passed object by doing a gst_mini_object_ref(). If the object is not
 * revived after the dispose function, the function should return %TRUE
 * and the memory associated with the object is freed.
 * @callback 
 * @param obj MiniObject to dispose
 */
interface MiniObjectDisposeFunction {
    (obj: MiniObject): boolean
}
/**
 * Virtual function prototype for methods to free resources used by
 * mini-objects.
 * @callback 
 * @param obj MiniObject to free
 */
interface MiniObjectFreeFunction {
    (obj: MiniObject): void
}
/**
 * A #GstMiniObjectNotify function can be added to a mini object as a
 * callback that gets triggered when gst_mini_object_unref() drops the
 * last ref and `obj` is about to be freed.
 * @callback 
 * @param obj the mini object
 */
interface MiniObjectNotify {
    (obj: MiniObject): void
}
/**
 * This function is called when the pad is activated during the element
 * READY to PAUSED state change. By default this function will call the
 * activate function that puts the pad in push mode but elements can
 * override this function to activate the pad in pull mode if they wish.
 * @callback 
 * @param pad a #GstPad
 * @param parent the parent of `pad`
 */
interface PadActivateFunction {
    (pad: Pad, parent: Object): boolean
}
/**
 * The prototype of the push and pull activate functions.
 * @callback 
 * @param pad a #GstPad
 * @param parent the parent of `pad`
 * @param mode the requested activation mode of `pad`
 * @param active activate or deactivate the pad.
 */
interface PadActivateModeFunction {
    (pad: Pad, parent: Object, mode: PadMode, active: boolean): boolean
}
/**
 * A function that will be called on sinkpads when chaining buffers.
 * The function typically processes the data contained in the buffer and
 * either consumes the data or passes it on to the internally linked pad(s).
 * 
 * The implementer of this function receives a refcount to `buffer` and should
 * gst_buffer_unref() when the buffer is no longer needed.
 * 
 * When a chain function detects an error in the data stream, it must post an
 * error on the bus and return an appropriate #GstFlowReturn value.
 * @callback 
 * @param pad the sink #GstPad that performed the chain.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param buffer the #GstBuffer that is chained, not %NULL.
 */
interface PadChainFunction {
    (pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
}
/**
 * A function that will be called on sinkpads when chaining buffer lists.
 * The function typically processes the data contained in the buffer list and
 * either consumes the data or passes it on to the internally linked pad(s).
 * 
 * The implementer of this function receives a refcount to `list` and
 * should gst_buffer_list_unref() when the list is no longer needed.
 * 
 * When a chainlist function detects an error in the data stream, it must
 * post an error on the bus and return an appropriate #GstFlowReturn value.
 * @callback 
 * @param pad the sink #GstPad that performed the chain.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param list the #GstBufferList that is chained, not %NULL.
 */
interface PadChainListFunction {
    (pad: Pad, parent: Object | null, list: BufferList): FlowReturn
}
/**
 * Function signature to handle an event for the pad.
 * 
 * This variant is for specific elements that will take into account the
 * last downstream flow return (from a pad push), in which case they can
 * return it.
 * @callback 
 * @param pad the #GstPad to handle the event.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param event the #GstEvent to handle.
 */
interface PadEventFullFunction {
    (pad: Pad, parent: Object | null, event: Event): FlowReturn
}
/**
 * Function signature to handle an event for the pad.
 * @callback 
 * @param pad the #GstPad to handle the event.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param event the #GstEvent to handle.
 */
interface PadEventFunction {
    (pad: Pad, parent: Object | null, event: Event): boolean
}
/**
 * A forward function is called for all internally linked pads, see
 * gst_pad_forward().
 * @callback 
 * @param pad the #GstPad that is forwarded.
 */
interface PadForwardFunction {
    (pad: Pad): boolean
}
/**
 * This function will be called on source pads when a peer element
 * request a buffer at the specified `offset` and `length`. If this function
 * returns #GST_FLOW_OK, the result buffer will be stored in `buffer`. The
 * contents of `buffer` is invalid for any other return value.
 * 
 * This function is installed on a source pad with
 * gst_pad_set_getrange_function() and can only be called on source pads after
 * they are successfully activated with gst_pad_activate_mode() with the
 * #GST_PAD_MODE_PULL.
 * 
 * `offset` and `length` are always given in byte units. `offset` must normally be a value
 * between 0 and the length in bytes of the data available on `pad`. The
 * length (duration in bytes) can be retrieved with a #GST_QUERY_DURATION or with a
 * #GST_QUERY_SEEKING.
 * 
 * Any `offset` larger or equal than the length will make the function return
 * #GST_FLOW_EOS, which corresponds to EOS. In this case `buffer` does not
 * contain a valid buffer.
 * 
 * The buffer size of `buffer` will only be smaller than `length` when `offset` is
 * near the end of the stream. In all other cases, the size of `buffer` must be
 * exactly the requested size.
 * 
 * It is allowed to call this function with a 0 `length` and valid `offset,` in
 * which case `buffer` will contain a 0-sized buffer and the function returns
 * #GST_FLOW_OK.
 * 
 * When this function is called with a -1 `offset,` the sequentially next buffer
 * of length `length` in the stream is returned.
 * 
 * When this function is called with a -1 `length,` a buffer with a default
 * optimal length is returned in `buffer`. The length might depend on the value
 * of `offset`.
 * @callback 
 * @param pad the src #GstPad to perform the getrange on.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param offset the offset of the range
 * @param length the length of the range
 * @param buffer a memory location to hold the result buffer, cannot be %NULL.
 */
interface PadGetRangeFunction {
    (pad: Pad, parent: Object | null, offset: number, length: number, buffer: Buffer): FlowReturn
}
/**
 * The signature of the internal pad link iterator function.
 * @callback 
 * @param pad The #GstPad to query.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 */
interface PadIterIntLinkFunction {
    (pad: Pad, parent: Object | null): Iterator
}
/**
 * Function signature to handle a new link on the pad.
 * @callback 
 * @param pad the #GstPad that is linked.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param peer the peer #GstPad of the link
 */
interface PadLinkFunction {
    (pad: Pad, parent: Object | null, peer: Pad): PadLinkReturn
}
/**
 * Callback used by gst_pad_add_probe(). Gets called to notify about the current
 * blocking type.
 * 
 * The callback is allowed to modify the data pointer in `info`.
 * @callback 
 * @param pad the #GstPad that is blocked
 * @param info #GstPadProbeInfo
 */
interface PadProbeCallback {
    (pad: Pad, info: PadProbeInfo): PadProbeReturn
}
/**
 * The signature of the query function.
 * @callback 
 * @param pad the #GstPad to query.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 * @param query the #GstQuery object to execute
 */
interface PadQueryFunction {
    (pad: Pad, parent: Object | null, query: Query): boolean
}
/**
 * Callback used by gst_pad_sticky_events_foreach().
 * 
 * When this function returns %TRUE, the next event will be
 * returned. When %FALSE is returned, gst_pad_sticky_events_foreach() will return.
 * 
 * When `event` is set to %NULL, the item will be removed from the list of sticky events.
 * `event` can be replaced by assigning a new reference to it.
 * This function is responsible for unreffing the old event when
 * removing or modifying.
 * @callback 
 * @param pad the #GstPad.
 * @param event a sticky #GstEvent.
 */
interface PadStickyEventsForeachFunction {
    (pad: Pad, event: Event | null): boolean
}
/**
 * Function signature to handle a unlinking the pad prom its peer.
 * 
 * The pad's lock is already held when the unlink function is called, so most
 * pad functions cannot be called from within the callback.
 * @callback 
 * @param pad the #GstPad that is linked.
 * @param parent the parent of `pad`. If the #GST_PAD_FLAG_NEED_PARENT          flag is set, `parent` is guaranteed to be not-%NULL and remain valid          during the execution of this function.
 */
interface PadUnlinkFunction {
    (pad: Pad, parent: Object | null): void
}
/**
 * A function that can be used with e.g. gst_registry_feature_filter()
 * to get a list of pluginfeature that match certain criteria.
 * @callback 
 * @param feature the pluginfeature to check
 */
interface PluginFeatureFilter {
    (feature: PluginFeature): boolean
}
/**
 * A function that can be used with e.g. gst_registry_plugin_filter()
 * to get a list of plugins that match certain criteria.
 * @callback 
 * @param plugin the plugin to check
 */
interface PluginFilter {
    (plugin: Plugin): boolean
}
/**
 * A plugin should provide a pointer to a function of either #GstPluginInitFunc
 * or this type in the plugin_desc struct.
 * The function will be called by the loader at startup. One would then
 * register each #GstPluginFeature. This version allows
 * user data to be passed to init function (useful for bindings).
 * @callback 
 * @param plugin The plugin object
 */
interface PluginInitFullFunc {
    (plugin: Plugin): boolean
}
/**
 * A plugin should provide a pointer to a function of this type in the
 * plugin_desc struct.
 * This function will be called by the loader at startup. One would then
 * register each #GstPluginFeature.
 * @callback 
 * @param plugin The plugin object
 */
interface PluginInitFunc {
    (plugin: Plugin): boolean
}
interface PromiseChangeFunc {
    (promise: Promise): void
}
/**
 * A function that will be called in gst_structure_filter_and_map_in_place().
 * The function may modify `value,` and the value will be removed from
 * the structure if %FALSE is returned.
 * @callback 
 * @param field_id the #GQuark of the field name
 * @param value the #GValue of the field
 */
interface StructureFilterMapFunc {
    (field_id: GLib.Quark, value: any): boolean
}
/**
 * A function that will be called in gst_structure_foreach(). The function may
 * not modify `value`.
 * @callback 
 * @param field_id the #GQuark of the field name
 * @param value the #GValue of the field
 */
interface StructureForeachFunc {
    (field_id: GLib.Quark, value: any): boolean
}
/**
 * A function that will be called in gst_structure_map_in_place(). The function
 * may modify `value`.
 * @callback 
 * @param field_id the #GQuark of the field name
 * @param value the #GValue of the field
 */
interface StructureMapFunc {
    (field_id: GLib.Quark, value: any): boolean
}
/**
 * A function that will be called in gst_tag_list_foreach(). The function may
 * not modify the tag list.
 * @callback 
 * @param list the #GstTagList
 * @param tag a name of a tag in `list`
 */
interface TagForeachFunc {
    (list: TagList, tag: string): void
}
/**
 * A function for merging multiple values of a tag used when registering
 * tags.
 * @callback 
 * @param dest the destination #GValue
 * @param src the source #GValue
 */
interface TagMergeFunc {
    (dest: any, src: any): void
}
/**
 * A function that will repeatedly be called in the thread created by
 * a #GstTask.
 * @callback 
 */
interface TaskFunction {
    (): void
}
/**
 * Task function, see gst_task_pool_push().
 * @callback 
 */
interface TaskPoolFunction {
    (): void
}
/**
 * Custom GstTask thread callback functions that can be installed.
 * @callback 
 * @param task The #GstTask
 * @param thread The #GThread
 */
interface TaskThreadFunc {
    (task: Task, thread: GLib.Thread): void
}
/**
 * A function that will be called by typefinding.
 * @callback 
 * @param find A #GstTypeFind structure
 */
interface TypeFindFunction {
    (find: TypeFind): void
}
/**
 * Used together with gst_value_compare() to compare #GValue items.
 * @callback 
 * @param value1 first value for comparison
 * @param value2 second value for comparison
 */
interface ValueCompareFunc {
    (value1: any, value2: any): number
}
/**
 * Used by gst_value_deserialize() to parse a non-binary form into the #GValue.
 * @callback 
 * @param dest a #GValue
 * @param s a string
 */
interface ValueDeserializeFunc {
    (dest: any, s: string): boolean
}
/**
 * Used by gst_value_deserialize_with_pspec() to parse a non-binary form into the #GValue.
 * @callback 
 * @param dest a #GValue
 * @param s a string
 * @param pspec a #GParamSpec describing the expected value
 */
interface ValueDeserializeWithPSpecFunc {
    (dest: any, s: string, pspec: GObject.ParamSpec): boolean
}
/**
 * Used by gst_value_serialize() to obtain a non-binary form of the #GValue.
 * 
 * Free-function: g_free
 * @callback 
 * @param value1 a #GValue
 */
interface ValueSerializeFunc {
    (value1: any): string
}
interface ChildProxy_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `child-added`
 */
interface ChildProxy_ChildAddedSignalCallback {
    ($obj: ChildProxy, object: GObject.Object, name: string): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface ChildProxy_ChildRemovedSignalCallback {
    ($obj: ChildProxy, object: GObject.Object, name: string): void
}

interface ChildProxy {

    // Owm methods of Gst-1.0.Gst.ChildProxy

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
    get_property(property_name?: string, value?: any): void
    get_property(...args: any[]): any
    get_property(args_or_property_name: any[] | string, value?: any): void | any
    /**
     * Looks up which object and #GParamSpec would be effected by the given `name`.
     * @param name name of the property to look up
     */
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    set_property(name: string, value?: any): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value?: any): void
    set_property(...args: any[]): any
    set_property(args_or_property_name: any[] | string, value?: any): void | any

    // Own virtual methods of Gst-1.0.Gst.ChildProxy

    /**
     * Emits the #GstChildProxy::child-added signal.
     * @virtual 
     * @param child the newly added child
     * @param name the name of the new child
     */
    vfunc_child_added(child: GObject.Object, name: string): void
    /**
     * Emits the #GstChildProxy::child-removed signal.
     * @virtual 
     * @param child the removed child
     * @param name the name of the old child
     */
    vfunc_child_removed(child: GObject.Object, name: string): void
    /**
     * Fetches a child by its number.
     * @virtual 
     * @param index the child's position in the child list
     */
    vfunc_get_child_by_index(index: number): GObject.Object | null
    /**
     * Looks up a child element by the given name.
     * 
     * This virtual method has a default implementation that uses #GstObject
     * together with gst_object_get_name(). If the interface is to be used with
     * #GObjects, this methods needs to be overridden.
     * @virtual 
     * @param name the child's name
     */
    vfunc_get_child_by_name(name: string): GObject.Object | null
    /**
     * Gets the number of child objects this parent contains.
     * @virtual 
     */
    vfunc_get_children_count(): number

    // Own signals of Gst-1.0.Gst.ChildProxy

    connect(sigName: "child-added", callback: ChildProxy_ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: ChildProxy_ChildAddedSignalCallback): number
    emit(sigName: "child-added", object: GObject.Object, name: string, ...args: any[]): void
    connect(sigName: "child-removed", callback: ChildProxy_ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: ChildProxy_ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", object: GObject.Object, name: string, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.ChildProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This interface abstracts handling of property sets for elements with
 * children. Imagine elements such as mixers or polyphonic generators. They all
 * have multiple #GstPad or some kind of voice objects. Another use case are
 * container elements like #GstBin.
 * The element implementing the interface acts as a parent for those child
 * objects.
 * 
 * By implementing this interface the child properties can be accessed from the
 * parent element by using gst_child_proxy_get() and gst_child_proxy_set().
 * 
 * Property names are written as `child-name::property-name`. The whole naming
 * scheme is recursive. Thus `child1::child2::property` is valid too, if
 * `child1` and `child2` implement the #GstChildProxy interface.
 * @interface 
 */
class ChildProxy extends GObject.Object {

    // Own properties of Gst-1.0.Gst.ChildProxy

    static name: string
    static $gtype: GObject.GType<ChildProxy>

    // Constructors of Gst-1.0.Gst.ChildProxy

    constructor(config?: ChildProxy_ConstructProps) 
    _init(config?: ChildProxy_ConstructProps): void
}

interface Preset_ConstructProps extends GObject.Object_ConstructProps {
}

interface Preset {

    // Owm methods of Gst-1.0.Gst.Preset

    /**
     * Delete the given preset.
     * @param name preset name to remove
     */
    delete_preset(name: string): boolean
    /**
     * Gets the `value` for an existing meta data `tag`. Meta data `tag` names can be
     * something like e.g. "comment". Returned values need to be released when done.
     * @param name preset name
     * @param tag meta data item name
     */
    get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Get a copy of preset names as a %NULL terminated string array.
     */
    get_preset_names(): string[]
    /**
     * Get a the names of the GObject properties that can be used for presets.
     */
    get_property_names(): string[]
    /**
     * Check if one can add new presets, change existing ones and remove presets.
     */
    is_editable(): boolean
    /**
     * Load the given preset.
     * @param name preset name to load
     */
    load_preset(name: string): boolean
    /**
     * Renames a preset. If there is already a preset by the `new_name` it will be
     * overwritten.
     * @param old_name current preset name
     * @param new_name new preset name
     */
    rename_preset(old_name: string, new_name: string): boolean
    /**
     * Save the current object settings as a preset under the given name. If there
     * is already a preset by this `name` it will be overwritten.
     * @param name preset name to save
     */
    save_preset(name: string): boolean
    /**
     * Sets a new `value` for an existing meta data item or adds a new item. Meta
     * data `tag` names can be something like e.g. "comment". Supplying %NULL for the
     * `value` will unset an existing value.
     * @param name preset name
     * @param tag meta data item name
     * @param value new value
     */
    set_meta(name: string, tag: string, value: string | null): boolean

    // Own virtual methods of Gst-1.0.Gst.Preset

    /**
     * Delete the given preset.
     * @virtual 
     * @param name preset name to remove
     */
    vfunc_delete_preset(name: string): boolean
    /**
     * Gets the `value` for an existing meta data `tag`. Meta data `tag` names can be
     * something like e.g. "comment". Returned values need to be released when done.
     * @virtual 
     * @param name preset name
     * @param tag meta data item name
     */
    vfunc_get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Get a copy of preset names as a %NULL terminated string array.
     * @virtual 
     */
    vfunc_get_preset_names(): string[]
    /**
     * Get a the names of the GObject properties that can be used for presets.
     * @virtual 
     */
    vfunc_get_property_names(): string[]
    /**
     * Load the given preset.
     * @virtual 
     * @param name preset name to load
     */
    vfunc_load_preset(name: string): boolean
    /**
     * Renames a preset. If there is already a preset by the `new_name` it will be
     * overwritten.
     * @virtual 
     * @param old_name current preset name
     * @param new_name new preset name
     */
    vfunc_rename_preset(old_name: string, new_name: string): boolean
    /**
     * Save the current object settings as a preset under the given name. If there
     * is already a preset by this `name` it will be overwritten.
     * @virtual 
     * @param name preset name to save
     */
    vfunc_save_preset(name: string): boolean
    /**
     * Sets a new `value` for an existing meta data item or adds a new item. Meta
     * data `tag` names can be something like e.g. "comment". Supplying %NULL for the
     * `value` will unset an existing value.
     * @virtual 
     * @param name preset name
     * @param tag meta data item name
     * @param value new value
     */
    vfunc_set_meta(name: string, tag: string, value: string | null): boolean

    // Class property signals of Gst-1.0.Gst.Preset

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This interface offers methods to query and manipulate parameter preset sets.
 * A preset is a bunch of property settings, together with meta data and a name.
 * The name of a preset serves as key for subsequent method calls to manipulate
 * single presets.
 * All instances of one type will share the list of presets. The list is created
 * on demand, if presets are not used, the list is not created.
 * 
 * The interface comes with a default implementation that serves most plugins.
 * Wrapper plugins will override most methods to implement support for the
 * native preset format of those wrapped plugins.
 * One method that is useful to be overridden is gst_preset_get_property_names().
 * With that one can control which properties are saved and in which order.
 * When implementing support for read-only presets, one should set the vmethods
 * for gst_preset_save_preset() and gst_preset_delete_preset() to %NULL.
 * Applications can use gst_preset_is_editable() to check for that.
 * 
 * The default implementation supports presets located in a system directory,
 * application specific directory and in the users home directory. When getting
 * a list of presets individual presets are read and overlaid in 1) system,
 * 2) application and 3) user order. Whenever an earlier entry is newer, the
 * later entries will be updated. Since 1.8 you can also provide extra paths
 * where to find presets through the GST_PRESET_PATH environment variable.
 * Presets found in those paths will be considered as "app presets".
 * @interface 
 */
class Preset extends GObject.Object {

    // Own properties of Gst-1.0.Gst.Preset

    static name: string
    static $gtype: GObject.GType<Preset>

    // Constructors of Gst-1.0.Gst.Preset

    constructor(config?: Preset_ConstructProps) 
    _init(config?: Preset_ConstructProps): void
    /**
     * Gets the directory for application specific presets if set by the
     * application.
     */
    static get_app_dir(): string | null
    /**
     * Sets an extra directory as an absolute path that should be considered when
     * looking for presets. Any presets in the application dir will shadow the
     * system presets.
     * @param app_dir the application specific preset dir
     */
    static set_app_dir(app_dir: string): boolean
}

interface TagSetter_ConstructProps extends Element_ConstructProps, GObject.Object_ConstructProps {
}

interface TagSetter extends Element {

    // Conflicting properties

    object: any

    // Owm methods of Gst-1.0.Gst.TagSetter

    /**
     * Adds the given tag / GValue pair on the setter using the given merge mode.
     * @param mode the mode to use
     * @param tag tag to set
     * @param value GValue to set for the tag
     */
    add_tag_value(mode: TagMergeMode, tag: string, value: any): void
    /**
     * Returns the current list of tags the setter uses.  The list should not be
     * modified or freed.
     * 
     * This function is not thread-safe.
     */
    get_tag_list(): TagList | null
    /**
     * Queries the mode by which tags inside the setter are overwritten by tags
     * from events
     */
    get_tag_merge_mode(): TagMergeMode
    /**
     * Merges the given list into the setter's list using the given mode.
     * @param list a tag list to merge from
     * @param mode the mode to merge with
     */
    merge_tags(list: TagList, mode: TagMergeMode): void
    /**
     * Reset the internal taglist. Elements should call this from within the
     * state-change handler.
     */
    reset_tags(): void
    /**
     * Sets the given merge mode that is used for adding tags from events to tags
     * specified by this interface. The default is #GST_TAG_MERGE_KEEP, which keeps
     * the tags set with this interface and discards tags from events.
     * @param mode The mode with which tags are added
     */
    set_tag_merge_mode(mode: TagMergeMode): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.TagSetter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Element interface that allows setting of media metadata.
 * 
 * Elements that support changing a stream's metadata will implement this
 * interface. Examples of such elements are 'vorbisenc', 'theoraenc' and
 * 'id3v2mux'.
 * 
 * If you just want to retrieve metadata in your application then all you
 * need to do is watch for tag messages on your pipeline's bus. This
 * interface is only for setting metadata, not for extracting it. To set tags
 * from the application, find tagsetter elements and set tags using e.g.
 * gst_tag_setter_merge_tags() or gst_tag_setter_add_tags(). Also consider
 * setting the #GstTagMergeMode that is used for tag events that arrive at the
 * tagsetter element (default mode is to keep existing tags).
 * The application should do that before the element goes to %GST_STATE_PAUSED.
 * 
 * Elements implementing the #GstTagSetter interface often have to merge
 * any tags received from upstream and the tags set by the application via
 * the interface. This can be done like this:
 * 
 * 
 * ```c
 * GstTagMergeMode merge_mode;
 * const GstTagList *application_tags;
 * const GstTagList *event_tags;
 * GstTagSetter *tagsetter;
 * GstTagList *result;
 * 
 * tagsetter = GST_TAG_SETTER (element);
 * 
 * merge_mode = gst_tag_setter_get_tag_merge_mode (tagsetter);
 * application_tags = gst_tag_setter_get_tag_list (tagsetter);
 * event_tags = (const GstTagList *) element->event_tags;
 * 
 * GST_LOG_OBJECT (tagsetter, "merging tags, merge mode = %d", merge_mode);
 * GST_LOG_OBJECT (tagsetter, "event tags: %" GST_PTR_FORMAT, event_tags);
 * GST_LOG_OBJECT (tagsetter, "set   tags: %" GST_PTR_FORMAT, application_tags);
 * 
 * result = gst_tag_list_merge (application_tags, event_tags, merge_mode);
 * 
 * GST_LOG_OBJECT (tagsetter, "final tags: %" GST_PTR_FORMAT, result);
 * ```
 * 
 * @interface 
 */
class TagSetter extends GObject.Object {

    // Own properties of Gst-1.0.Gst.TagSetter

    static name: string
    static $gtype: GObject.GType<TagSetter>

    // Constructors of Gst-1.0.Gst.TagSetter

    constructor(config?: TagSetter_ConstructProps) 
    _init(config?: TagSetter_ConstructProps): void
}

interface TocSetter_ConstructProps extends Element_ConstructProps, GObject.Object_ConstructProps {
}

interface TocSetter extends Element {

    // Conflicting properties

    object: any

    // Owm methods of Gst-1.0.Gst.TocSetter

    /**
     * Return current TOC the setter uses. The TOC should not be
     * modified without making it writable first.
     */
    get_toc(): Toc | null
    /**
     * Reset the internal TOC. Elements should call this from within the
     * state-change handler.
     */
    reset(): void
    /**
     * Set the given TOC on the setter. Previously set TOC will be
     * unreffed before setting a new one.
     * @param toc a #GstToc to set.
     */
    set_toc(toc: Toc | null): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.TocSetter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Element interface that allows setting of the TOC.
 * 
 * Elements that support some kind of chapters or editions (or tracks like in
 * the FLAC cue sheet) will implement this interface.
 * 
 * If you just want to retrieve the TOC in your application then all you
 * need to do is watch for TOC messages on your pipeline's bus (or you can
 * perform TOC query). This interface is only for setting TOC data, not for
 * extracting it. To set TOC from the application, find proper tocsetter element
 * and set TOC using gst_toc_setter_set_toc().
 * 
 * Elements implementing the #GstTocSetter interface can extend existing TOC
 * by getting extend UID for that (you can use gst_toc_find_entry() to retrieve it)
 * with any TOC entries received from downstream.
 * @interface 
 */
class TocSetter extends GObject.Object {

    // Own properties of Gst-1.0.Gst.TocSetter

    static name: string
    static $gtype: GObject.GType<TocSetter>

    // Constructors of Gst-1.0.Gst.TocSetter

    constructor(config?: TocSetter_ConstructProps) 
    _init(config?: TocSetter_ConstructProps): void
}

interface URIHandler_ConstructProps extends GObject.Object_ConstructProps {
}

interface URIHandler {

    // Owm methods of Gst-1.0.Gst.URIHandler

    /**
     * Gets the list of protocols supported by `handler`. This list may not be
     * modified.
     */
    get_protocols(): string[] | null
    /**
     * Gets the currently handled URI.
     */
    get_uri(): string | null
    /**
     * Gets the type of the given URI handler
     */
    get_uri_type(): URIType
    /**
     * Tries to set the URI of the given handler.
     * @param uri URI to set
     */
    set_uri(uri: string): boolean

    // Own virtual methods of Gst-1.0.Gst.URIHandler

    /**
     * Gets the currently handled URI.
     * @virtual 
     */
    vfunc_get_uri(): string | null
    /**
     * Tries to set the URI of the given handler.
     * @virtual 
     * @param uri URI to set
     */
    vfunc_set_uri(uri: string): boolean

    // Class property signals of Gst-1.0.Gst.URIHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GstURIHandler is an interface that is implemented by Source and Sink
 * #GstElement to unify handling of URI.
 * 
 * An application can use the following functions to quickly get an element
 * that handles the given URI for reading or writing
 * (gst_element_make_from_uri()).
 * 
 * Source and Sink plugins should implement this interface when possible.
 * @interface 
 */
class URIHandler extends GObject.Object {

    // Own properties of Gst-1.0.Gst.URIHandler

    static name: string
    static $gtype: GObject.GType<URIHandler>

    // Constructors of Gst-1.0.Gst.URIHandler

    constructor(config?: URIHandler_ConstructProps) 
    _init(config?: URIHandler_ConstructProps): void
}

interface Allocator_ConstructProps extends Object_ConstructProps {
}

interface Allocator {

    // Own fields of Gst-1.0.Gst.Allocator

    object: Object
    mem_type: string
    /**
     * the implementation of the GstMemoryMapFunction
     * @field 
     */
    mem_map: MemoryMapFunction
    /**
     * the implementation of the GstMemoryUnmapFunction
     * @field 
     */
    mem_unmap: MemoryUnmapFunction
    /**
     * the implementation of the GstMemoryCopyFunction
     * @field 
     */
    mem_copy: MemoryCopyFunction
    /**
     * the implementation of the GstMemoryShareFunction
     * @field 
     */
    mem_share: MemoryShareFunction
    /**
     * the implementation of the GstMemoryIsSpanFunction
     * @field 
     */
    mem_is_span: MemoryIsSpanFunction
    /**
     * the implementation of the GstMemoryMapFullFunction.
     *      Will be used instead of `mem_map` if present. (Since: 1.6)
     * @field 
     */
    mem_map_full: MemoryMapFullFunction
    /**
     * the implementation of the GstMemoryUnmapFullFunction.
     *      Will be used instead of `mem_unmap` if present. (Since: 1.6)
     * @field 
     */
    mem_unmap_full: MemoryUnmapFullFunction

    // Owm methods of Gst-1.0.Gst.Allocator

    /**
     * Use `allocator` to allocate a new memory block with memory that is at least
     * `size` big.
     * 
     * The optional `params` can specify the prefix and padding for the memory. If
     * %NULL is passed, no flags, no extra prefix/padding and a default alignment is
     * used.
     * 
     * The prefix/padding will be filled with 0 if flags contains
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED respectively.
     * 
     * When `allocator` is %NULL, the default allocator will be used.
     * 
     * The alignment in `params` is given as a bitmask so that `align` + 1 equals
     * the amount of bytes to align to. For example, to align to 8 bytes,
     * use an alignment of 7.
     * @param size size of the visible memory area
     * @param params optional parameters
     */
    alloc(size: number, params: AllocationParams | null): Memory | null
    /**
     * Free `memory` that was previously allocated with gst_allocator_alloc().
     * @param memory the memory to free
     */
    free(memory: Memory): void
    /**
     * Set the default allocator.
     */
    set_default(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Allocator

    /**
     * Use `allocator` to allocate a new memory block with memory that is at least
     * `size` big.
     * 
     * The optional `params` can specify the prefix and padding for the memory. If
     * %NULL is passed, no flags, no extra prefix/padding and a default alignment is
     * used.
     * 
     * The prefix/padding will be filled with 0 if flags contains
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED respectively.
     * 
     * When `allocator` is %NULL, the default allocator will be used.
     * 
     * The alignment in `params` is given as a bitmask so that `align` + 1 equals
     * the amount of bytes to align to. For example, to align to 8 bytes,
     * use an alignment of 7.
     * @virtual 
     * @param size size of the visible memory area
     * @param params optional parameters
     */
    vfunc_alloc(size: number, params?: AllocationParams | null): Memory | null
    /**
     * Free `memory` that was previously allocated with gst_allocator_alloc().
     * @virtual 
     * @param memory the memory to free
     */
    vfunc_free(memory: Memory): void

    // Class property signals of Gst-1.0.Gst.Allocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Memory is usually created by allocators with a gst_allocator_alloc()
 * method call. When %NULL is used as the allocator, the default allocator will
 * be used.
 * 
 * New allocators can be registered with gst_allocator_register().
 * Allocators are identified by name and can be retrieved with
 * gst_allocator_find(). gst_allocator_set_default() can be used to change the
 * default allocator.
 * 
 * New memory can be created with gst_memory_new_wrapped() that wraps the memory
 * allocated elsewhere.
 * @class 
 */
class Allocator extends Object {

    // Own properties of Gst-1.0.Gst.Allocator

    static name: string
    static $gtype: GObject.GType<Allocator>

    // Constructors of Gst-1.0.Gst.Allocator

    constructor(config?: Allocator_ConstructProps) 
    _init(config?: Allocator_ConstructProps): void
    /**
     * Find a previously registered allocator with `name`. When `name` is %NULL, the
     * default allocator will be returned.
     * @param name the name of the allocator
     */
    static find(name: string | null): Allocator | null
    /**
     * Registers the memory `allocator` with `name`.
     * @param name the name of the allocator
     * @param allocator #GstAllocator
     */
    static register(name: string, allocator: Allocator): void
}

interface Bin_ConstructProps extends ChildProxy_ConstructProps, Element_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Bin

    /**
     * If set to %TRUE, the bin will handle asynchronous state changes.
     * This should be used only if the bin subclass is modifying the state
     * of its children on its own.
     */
    async_handling?: boolean | null
    /**
     * Forward all children messages, even those that would normally be filtered by
     * the bin. This can be interesting when one wants to be notified of the EOS
     * state of individual elements, for example.
     * 
     * The messages are converted to an ELEMENT message with the bin as the
     * source. The structure of the message is named `GstBinForwarded` and contains
     * a field named `message` that contains the original forwarded #GstMessage.
     */
    message_forward?: boolean | null
}

/**
 * Signal callback interface for `deep-element-added`
 */
interface Bin_DeepElementAddedSignalCallback {
    ($obj: Bin, sub_bin: Bin, element: Element): void
}

/**
 * Signal callback interface for `deep-element-removed`
 */
interface Bin_DeepElementRemovedSignalCallback {
    ($obj: Bin, sub_bin: Bin, element: Element): void
}

/**
 * Signal callback interface for `do-latency`
 */
interface Bin_DoLatencySignalCallback {
    ($obj: Bin): boolean
}

/**
 * Signal callback interface for `element-added`
 */
interface Bin_ElementAddedSignalCallback {
    ($obj: Bin, element: Element): void
}

/**
 * Signal callback interface for `element-removed`
 */
interface Bin_ElementRemovedSignalCallback {
    ($obj: Bin, element: Element): void
}

interface Bin extends ChildProxy {

    // Own properties of Gst-1.0.Gst.Bin

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

    // Conflicting properties

    object: any

    // Own fields of Gst-1.0.Gst.Bin

    element: Element
    /**
     * the number of children in this bin
     * @field 
     */
    numchildren: number
    /**
     * the list of children in this bin
     * @field 
     */
    children: Element[]
    /**
     * updated whenever `children` changes
     * @field 
     */
    children_cookie: number
    /**
     * internal bus for handling child messages
     * @field 
     */
    child_bus: Bus
    /**
     * queued and cached messages
     * @field 
     */
    messages: Message[]
    /**
     * the bin is currently calculating its state
     * @field 
     */
    polling: boolean
    /**
     * the bin needs to recalculate its state (deprecated)
     * @field 
     */
    state_dirty: boolean
    /**
     * the bin needs to select a new clock
     * @field 
     */
    clock_dirty: boolean
    /**
     * the last clock selected
     * @field 
     */
    provided_clock: Clock
    /**
     * the element that provided `provided_clock`
     * @field 
     */
    clock_provider: Element

    // Owm methods of Gst-1.0.Gst.Bin

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
    add(element: Element): boolean
    /**
     * Recursively looks for elements with an unlinked pad of the given
     * direction within the specified bin and returns an unlinked pad
     * if one is found, or %NULL otherwise. If a pad is found, the caller
     * owns a reference to it and should use gst_object_unref() on the
     * pad when it is not needed any longer.
     * @param direction whether to look for an unlinked source or sink pad
     */
    find_unlinked_pad(direction: PadDirection): Pad | null
    /**
     * Looks for an element inside the bin that implements the given
     * interface. If such an element is found, it returns the element.
     * You can cast this element to the given interface afterwards.  If you want
     * all elements that implement the interface, use
     * gst_bin_iterate_all_by_interface(). This function recurses into child bins.
     * @param iface the #GType of an interface
     */
    get_by_interface(iface: GObject.GType): Element | null
    /**
     * Gets the element with the given name from a bin. This
     * function recurses into child bins.
     * @param name the element name to search for
     */
    get_by_name(name: string): Element | null
    /**
     * Gets the element with the given name from this bin. If the
     * element is not found, a recursion is performed on the parent bin.
     * @param name the element name to search for
     */
    get_by_name_recurse_up(name: string): Element | null
    get_suppressed_flags(): ElementFlags
    /**
     * Looks for all elements inside the bin with the given element factory name.
     * The function recurses inside child bins. The iterator will yield a series of
     * #GstElement.
     * @param factory_name the name of the #GstElementFactory
     */
    iterate_all_by_element_factory_name(factory_name: string): Iterator | null
    /**
     * Looks for all elements inside the bin that implements the given
     * interface. You can safely cast all returned elements to the given interface.
     * The function recurses inside child bins. The iterator will yield a series
     * of #GstElement.
     * @param iface the #GType of an interface
     */
    iterate_all_by_interface(iface: GObject.GType): Iterator | null
    /**
     * Gets an iterator for the elements in this bin.
     */
    iterate_elements(): Iterator | null
    /**
     * Gets an iterator for the elements in this bin.
     * This iterator recurses into GstBin children.
     */
    iterate_recurse(): Iterator | null
    /**
     * Gets an iterator for all elements in the bin that have the
     * #GST_ELEMENT_FLAG_SINK flag set.
     */
    iterate_sinks(): Iterator | null
    /**
     * Gets an iterator for the elements in this bin in topologically
     * sorted order. This means that the elements are returned from
     * the most downstream elements (sinks) to the sources.
     * 
     * This function is used internally to perform the state changes
     * of the bin elements and for clock selection.
     */
    iterate_sorted(): Iterator | null
    /**
     * Gets an iterator for all elements in the bin that have the
     * #GST_ELEMENT_FLAG_SOURCE flag set.
     */
    iterate_sources(): Iterator | null
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
    remove(element: Element): boolean
    /**
     * Suppresses the given flags on the bin. #GstElementFlags of a
     * child element are propagated when it is added to the bin.
     * When suppressed flags are set, those specified flags will
     * not be propagated to the bin.
     * @param flags the #GstElementFlags to suppress
     */
    set_suppressed_flags(flags: ElementFlags): void
    /**
     * Synchronizes the state of every child of `bin` with the state
     * of `bin`. See also gst_element_sync_state_with_parent().
     */
    sync_children_states(): boolean

    // Conflicting methods

    get_property(...args: any[]): any
    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Bin

    /**
     * Method to add an element to the bin.
     * @virtual 
     * @param element the element to be added
     */
    vfunc_add_element(element: Element): boolean
    /**
     * Method called when an element was added somewhere in the bin hierarchy.
     * @virtual 
     * @param sub_bin the #GstBin to which the element was added
     * @param child the element that was added
     */
    vfunc_deep_element_added(sub_bin: Bin, child: Element): void
    /**
     * Method called when an element was removed somewhere in the bin hierarchy.
     * @virtual 
     * @param sub_bin the #GstBin from which the element was removed
     * @param child the element that was removed
     */
    vfunc_deep_element_removed(sub_bin: Bin, child: Element): void
    vfunc_do_latency(): boolean
    /**
     * Method called when an element was added to the bin.
     * @virtual 
     * @param child the element that was added
     */
    vfunc_element_added(child: Element): void
    /**
     * Method called when an element was removed from the bin.
     * @virtual 
     * @param child the element that was removed
     */
    vfunc_element_removed(child: Element): void
    /**
     * Method to handle a message from the children.
     * @virtual 
     * @param message the message to be handled
     */
    vfunc_handle_message(message: Message): void
    /**
     * Method to remove an element from the bin.
     * @virtual 
     * @param element the element to be removed
     */
    vfunc_remove_element(element: Element): boolean

    // Own signals of Gst-1.0.Gst.Bin

    connect(sigName: "deep-element-added", callback: Bin_DeepElementAddedSignalCallback): number
    connect_after(sigName: "deep-element-added", callback: Bin_DeepElementAddedSignalCallback): number
    emit(sigName: "deep-element-added", sub_bin: Bin, element: Element, ...args: any[]): void
    connect(sigName: "deep-element-removed", callback: Bin_DeepElementRemovedSignalCallback): number
    connect_after(sigName: "deep-element-removed", callback: Bin_DeepElementRemovedSignalCallback): number
    emit(sigName: "deep-element-removed", sub_bin: Bin, element: Element, ...args: any[]): void
    connect(sigName: "do-latency", callback: Bin_DoLatencySignalCallback): number
    connect_after(sigName: "do-latency", callback: Bin_DoLatencySignalCallback): number
    emit(sigName: "do-latency", ...args: any[]): void
    connect(sigName: "element-added", callback: Bin_ElementAddedSignalCallback): number
    connect_after(sigName: "element-added", callback: Bin_ElementAddedSignalCallback): number
    emit(sigName: "element-added", element: Element, ...args: any[]): void
    connect(sigName: "element-removed", callback: Bin_ElementRemovedSignalCallback): number
    connect_after(sigName: "element-removed", callback: Bin_ElementRemovedSignalCallback): number
    emit(sigName: "element-removed", element: Element, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Bin

    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstBin is an element that can contain other #GstElement, allowing them to be
 * managed as a group.
 * Pads from the child elements can be ghosted to the bin, see #GstGhostPad.
 * This makes the bin look like any other elements and enables creation of
 * higher-level abstraction elements.
 * 
 * A new #GstBin is created with gst_bin_new(). Use a #GstPipeline instead if you
 * want to create a toplevel bin because a normal bin doesn't have a bus or
 * handle clock distribution of its own.
 * 
 * After the bin has been created you will typically add elements to it with
 * gst_bin_add(). You can remove elements with gst_bin_remove().
 * 
 * An element can be retrieved from a bin with gst_bin_get_by_name(), using the
 * elements name. gst_bin_get_by_name_recurse_up() is mainly used for internal
 * purposes and will query the parent bins when the element is not found in the
 * current bin.
 * 
 * An iterator of elements in a bin can be retrieved with
 * gst_bin_iterate_elements(). Various other iterators exist to retrieve the
 * elements in a bin.
 * 
 * gst_object_unref() is used to drop your reference to the bin.
 * 
 * The #GstBin::element-added signal is fired whenever a new element is added to
 * the bin. Likewise the #GstBin::element-removed signal is fired whenever an
 * element is removed from the bin.
 * 
 * A #GstBin internally intercepts every #GstMessage posted by its children and
 * implements the following default behaviour for each of them:
 * 
 * * %GST_MESSAGE_EOS: This message is only posted by sinks in the PLAYING
 * state. If all sinks posted the EOS message, this bin will post and EOS
 * message upwards.
 * 
 * * %GST_MESSAGE_SEGMENT_START: Just collected and never forwarded upwards.
 *   The messages are used to decide when all elements have completed playback
 *   of their segment.
 * 
 * * %GST_MESSAGE_SEGMENT_DONE: Is posted by #GstBin when all elements that posted
 *   a SEGMENT_START have posted a SEGMENT_DONE.
 * 
 * * %GST_MESSAGE_DURATION_CHANGED: Is posted by an element that detected a change
 *   in the stream duration. The duration change is posted to the
 *   application so that it can refetch the new duration with a duration
 *   query.
 * 
 *   Note that these messages can be posted before the bin is prerolled, in which
 *   case the duration query might fail.
 * 
 *   Note also that there might be a discrepancy (due to internal buffering/queueing)
 *   between the stream being currently displayed and the returned duration query.
 * 
 *   Applications might want to also query for duration (and changes) by
 *   listening to the %GST_MESSAGE_STREAM_START message, signaling the active start
 *   of a (new) stream.
 * 
 * * %GST_MESSAGE_CLOCK_LOST: This message is posted by an element when it
 *   can no longer provide a clock.
 * 
 *   The default bin behaviour is to check if the lost clock was the one provided
 *   by the bin. If so and the bin is currently in the PLAYING state, the message
 *   is forwarded to the bin parent.
 * 
 *   This message is also generated when a clock provider is removed from
 *   the bin. If this message is received by the application, it should
 *   PAUSE the pipeline and set it back to PLAYING to force a new clock
 *   distribution.
 * 
 * * %GST_MESSAGE_CLOCK_PROVIDE: This message is generated when an element
 *   can provide a clock. This mostly happens when a new clock
 *   provider is added to the bin.
 * 
 *   The default behaviour of the bin is to mark the currently selected clock as
 *   dirty, which will perform a clock recalculation the next time the bin is
 *   asked to provide a clock.
 * 
 *   This message is never sent to the application but is forwarded to
 *   the parent of the bin.
 * 
 * * OTHERS: posted upwards.
 * 
 * A #GstBin implements the following default behaviour for answering to a
 * #GstQuery:
 * 
 * * %GST_QUERY_DURATION: The bin will forward the query to all sink
 *   elements contained within and will return the maximum value.
 *   If no sinks are available in the bin, the query fails.
 * 
 * * %GST_QUERY_POSITION: The query is sent to all sink elements in the bin and the
 *   MAXIMUM of all values is returned. If no sinks are available in the bin,
 *   the query fails.
 * 
 * * OTHERS: the query is forwarded to all sink elements, the result
 *   of the first sink that answers the query successfully is returned. If no
 *   sink is in the bin, the query fails.
 * 
 * A #GstBin will by default forward any event sent to it to all sink
 * ( %GST_EVENT_TYPE_DOWNSTREAM ) or source ( %GST_EVENT_TYPE_UPSTREAM ) elements
 * depending on the event type.
 * 
 * If all the elements return %TRUE, the bin will also return %TRUE, else %FALSE
 * is returned. If no elements of the required type are in the bin, the event
 * handler will return %TRUE.
 * @class 
 */
class Bin extends Element {

    // Own properties of Gst-1.0.Gst.Bin

    static name: string
    static $gtype: GObject.GType<Bin>

    // Constructors of Gst-1.0.Gst.Bin

    constructor(config?: Bin_ConstructProps) 
    /**
     * Creates a new bin with the given name.
     * @constructor 
     * @param name the name of the new bin
     */
    constructor(name: string | null) 
    /**
     * Creates a new bin with the given name.
     * @constructor 
     * @param name the name of the new bin
     */
    static new(name: string | null): Bin
    _init(config?: Bin_ConstructProps): void
}

interface Bitmask {
}

/**
 * A fundamental type that describes a 64-bit bitmask
 * @class 
 */
class Bitmask {

    // Own properties of Gst-1.0.Gst.Bitmask

    static name: string
}

interface BufferPool_ConstructProps extends Object_ConstructProps {
}

interface BufferPool {

    // Own fields of Gst-1.0.Gst.BufferPool

    /**
     * the parent structure
     * @field 
     */
    object: Object
    /**
     * whether the pool is currently gathering back outstanding buffers
     * @field 
     */
    flushing: number

    // Owm methods of Gst-1.0.Gst.BufferPool

    /**
     * Acquires a buffer from `pool`. `buffer` should point to a memory location that
     * can hold a pointer to the new buffer.
     * 
     * `params` can contain optional parameters to influence the allocation.
     * @param params parameters.
     */
    acquire_buffer(params: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    /**
     * Gets a copy of the current configuration of the pool. This configuration
     * can be modified and used for the gst_buffer_pool_set_config() call.
     */
    get_config(): Structure
    /**
     * Gets a %NULL terminated array of string with supported bufferpool options for
     * `pool`. An option would typically be enabled with
     * gst_buffer_pool_config_add_option().
     */
    get_options(): string[]
    /**
     * Checks if the bufferpool supports `option`.
     * @param option an option
     */
    has_option(option: string): boolean
    /**
     * Checks if `pool` is active. A pool can be activated with the
     * gst_buffer_pool_set_active() call.
     */
    is_active(): boolean
    /**
     * Releases `buffer` to `pool`. `buffer` should have previously been allocated from
     * `pool` with gst_buffer_pool_acquire_buffer().
     * 
     * This function is usually called automatically when the last ref on `buffer`
     * disappears.
     * @param buffer a #GstBuffer
     */
    release_buffer(buffer: Buffer): void
    /**
     * Controls the active state of `pool`. When the pool is inactive, new calls to
     * gst_buffer_pool_acquire_buffer() will return with %GST_FLOW_FLUSHING.
     * 
     * Activating the bufferpool will preallocate all resources in the pool based on
     * the configuration of the pool.
     * 
     * Deactivating will free the resources again when there are no outstanding
     * buffers. When there are outstanding buffers, they will be freed as soon as
     * they are all returned to the pool.
     * @param active the new active state
     */
    set_active(active: boolean): boolean
    /**
     * Sets the configuration of the pool. If the pool is already configured, and
     * the configuration hasn't changed, this function will return %TRUE. If the
     * pool is active, this method will return %FALSE and active configuration
     * will remain. Buffers allocated from this pool must be returned or else this
     * function will do nothing and return %FALSE.
     * 
     * `config` is a #GstStructure that contains the configuration parameters for
     * the pool. A default and mandatory set of parameters can be configured with
     * gst_buffer_pool_config_set_params(), gst_buffer_pool_config_set_allocator()
     * and gst_buffer_pool_config_add_option().
     * 
     * If the parameters in `config` can not be set exactly, this function returns
     * %FALSE and will try to update as much state as possible. The new state can
     * then be retrieved and refined with gst_buffer_pool_get_config().
     * 
     * This function takes ownership of `config`.
     * @param config a #GstStructure
     */
    set_config(config: Structure): boolean
    /**
     * Enables or disables the flushing state of a `pool` without freeing or
     * allocating buffers.
     * @param flushing whether to start or stop flushing
     */
    set_flushing(flushing: boolean): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.BufferPool

    /**
     * Acquires a buffer from `pool`. `buffer` should point to a memory location that
     * can hold a pointer to the new buffer.
     * 
     * `params` can contain optional parameters to influence the allocation.
     * @virtual 
     * @param params parameters.
     */
    vfunc_acquire_buffer(params: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    /**
     * Allocate a buffer. the default implementation allocates
     * buffers from the configured memory allocator and with the configured
     * parameters. All metadata that is present on the allocated buffer will
     * be marked as #GST_META_FLAG_POOLED and #GST_META_FLAG_LOCKED and will
     * not be removed from the buffer in #GstBufferPoolClass::reset_buffer.
     * The buffer should have the #GST_BUFFER_FLAG_TAG_MEMORY cleared.
     * @virtual 
     * @param params parameters.
     */
    vfunc_alloc_buffer(params: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    /**
     * Enter the flushing state.
     * @virtual 
     */
    vfunc_flush_start(): void
    /**
     * Leave the flushing state.
     * @virtual 
     */
    vfunc_flush_stop(): void
    /**
     * Free a buffer. The default implementation unrefs the buffer.
     * @virtual 
     * @param buffer the #GstBuffer to free
     */
    vfunc_free_buffer(buffer: Buffer): void
    /**
     * Gets a %NULL terminated array of string with supported bufferpool options for
     * `pool`. An option would typically be enabled with
     * gst_buffer_pool_config_add_option().
     * @virtual 
     */
    vfunc_get_options(): string[]
    /**
     * Releases `buffer` to `pool`. `buffer` should have previously been allocated from
     * `pool` with gst_buffer_pool_acquire_buffer().
     * 
     * This function is usually called automatically when the last ref on `buffer`
     * disappears.
     * @virtual 
     * @param buffer a #GstBuffer
     */
    vfunc_release_buffer(buffer: Buffer): void
    /**
     * Reset the buffer to its state when it was freshly allocated.
     * The default implementation will clear the flags, timestamps and
     * will remove the metadata without the #GST_META_FLAG_POOLED flag (even
     * the metadata with #GST_META_FLAG_LOCKED). If the
     * #GST_BUFFER_FLAG_TAG_MEMORY was set, this function can also try to
     * restore the memory and clear the #GST_BUFFER_FLAG_TAG_MEMORY again.
     * @virtual 
     * @param buffer the #GstBuffer to reset
     */
    vfunc_reset_buffer(buffer: Buffer): void
    /**
     * Sets the configuration of the pool. If the pool is already configured, and
     * the configuration hasn't changed, this function will return %TRUE. If the
     * pool is active, this method will return %FALSE and active configuration
     * will remain. Buffers allocated from this pool must be returned or else this
     * function will do nothing and return %FALSE.
     * 
     * `config` is a #GstStructure that contains the configuration parameters for
     * the pool. A default and mandatory set of parameters can be configured with
     * gst_buffer_pool_config_set_params(), gst_buffer_pool_config_set_allocator()
     * and gst_buffer_pool_config_add_option().
     * 
     * If the parameters in `config` can not be set exactly, this function returns
     * %FALSE and will try to update as much state as possible. The new state can
     * then be retrieved and refined with gst_buffer_pool_get_config().
     * 
     * This function takes ownership of `config`.
     * @virtual 
     * @param config a #GstStructure
     */
    vfunc_set_config(config: Structure): boolean
    /**
     * Start the bufferpool. The default implementation will preallocate
     * min-buffers buffers and put them in the queue.
     * @virtual 
     */
    vfunc_start(): boolean
    /**
     * Stop the bufferpool. the default implementation will free the
     * preallocated buffers. This function is called when all the buffers are
     * returned to the pool.
     * @virtual 
     */
    vfunc_stop(): boolean

    // Class property signals of Gst-1.0.Gst.BufferPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstBufferPool is an object that can be used to pre-allocate and recycle
 * buffers of the same size and with the same properties.
 * 
 * A #GstBufferPool is created with gst_buffer_pool_new().
 * 
 * Once a pool is created, it needs to be configured. A call to
 * gst_buffer_pool_get_config() returns the current configuration structure from
 * the pool. With gst_buffer_pool_config_set_params() and
 * gst_buffer_pool_config_set_allocator() the bufferpool parameters and
 * allocator can be configured. Other properties can be configured in the pool
 * depending on the pool implementation.
 * 
 * A bufferpool can have extra options that can be enabled with
 * gst_buffer_pool_config_add_option(). The available options can be retrieved
 * with gst_buffer_pool_get_options(). Some options allow for additional
 * configuration properties to be set.
 * 
 * After the configuration structure has been configured,
 * gst_buffer_pool_set_config() updates the configuration in the pool. This can
 * fail when the configuration structure is not accepted.
 * 
 * After the pool has been configured, it can be activated with
 * gst_buffer_pool_set_active(). This will preallocate the configured resources
 * in the pool.
 * 
 * When the pool is active, gst_buffer_pool_acquire_buffer() can be used to
 * retrieve a buffer from the pool.
 * 
 * Buffers allocated from a bufferpool will automatically be returned to the
 * pool with gst_buffer_pool_release_buffer() when their refcount drops to 0.
 * 
 * The bufferpool can be deactivated again with gst_buffer_pool_set_active().
 * All further gst_buffer_pool_acquire_buffer() calls will return an error. When
 * all buffers are returned to the pool they will be freed.
 * @class 
 */
class BufferPool extends Object {

    // Own properties of Gst-1.0.Gst.BufferPool

    static name: string
    static $gtype: GObject.GType<BufferPool>

    // Constructors of Gst-1.0.Gst.BufferPool

    constructor(config?: BufferPool_ConstructProps) 
    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     */
    static new(): BufferPool
    _init(config?: BufferPool_ConstructProps): void
    /**
     * Enables the option in `config`. This will instruct the `bufferpool` to enable
     * the specified option on the buffers that it allocates.
     * 
     * The options supported by `pool` can be retrieved with gst_buffer_pool_get_options().
     * @param config a #GstBufferPool configuration
     * @param option an option to add
     */
    static config_add_option(config: Structure, option: string): void
    /**
     * Gets the `allocator` and `params` from `config`.
     * @param config a #GstBufferPool configuration
     */
    static config_get_allocator(config: Structure): [ /* returnType */ boolean, /* allocator */ Allocator | null, /* params */ AllocationParams ]
    /**
     * Parses an available `config` and gets the option at `index` of the options API
     * array.
     * @param config a #GstBufferPool configuration
     * @param index position in the option array to read
     */
    static config_get_option(config: Structure, index: number): string | null
    /**
     * Gets the configuration values from `config`.
     * @param config a #GstBufferPool configuration
     */
    static config_get_params(config: Structure): [ /* returnType */ boolean, /* caps */ Caps | null, /* size */ number, /* min_buffers */ number, /* max_buffers */ number ]
    /**
     * Checks if `config` contains `option`.
     * @param config a #GstBufferPool configuration
     * @param option an option
     */
    static config_has_option(config: Structure, option: string): boolean
    /**
     * Retrieves the number of values currently stored in the options array of the
     * `config` structure.
     * @param config a #GstBufferPool configuration
     */
    static config_n_options(config: Structure): number
    /**
     * Sets the `allocator` and `params` on `config`.
     * 
     * One of `allocator` and `params` can be %NULL, but not both. When `allocator`
     * is %NULL, the default allocator of the pool will use the values in `param`
     * to perform its allocation. When `param` is %NULL, the pool will use the
     * provided `allocator` with its default #GstAllocationParams.
     * 
     * A call to gst_buffer_pool_set_config() can update the allocator and params
     * with the values that it is able to do. Some pools are, for example, not able
     * to operate with different allocators or cannot allocate with the values
     * specified in `params`. Use gst_buffer_pool_get_config() to get the currently
     * used values.
     * @param config a #GstBufferPool configuration
     * @param allocator a #GstAllocator
     * @param params #GstAllocationParams
     */
    static config_set_allocator(config: Structure, allocator: Allocator | null, params: AllocationParams | null): void
    /**
     * Configures `config` with the given parameters.
     * @param config a #GstBufferPool configuration
     * @param caps caps for the buffers
     * @param size the size of each buffer, not including prefix and padding
     * @param min_buffers the minimum amount of buffers to allocate.
     * @param max_buffers the maximum amount of buffers to allocate or 0 for unlimited.
     */
    static config_set_params(config: Structure, caps: Caps | null, size: number, min_buffers: number, max_buffers: number): void
    /**
     * Validates that changes made to `config` are still valid in the context of the
     * expected parameters. This function is a helper that can be used to validate
     * changes made by a pool to a config when gst_buffer_pool_set_config()
     * returns %FALSE. This expects that `caps` haven't changed and that
     * `min_buffers` aren't lower then what we initially expected.
     * This does not check if options or allocator parameters are still valid,
     * won't check if size have changed, since changing the size is valid to adapt
     * padding.
     * @param config a #GstBufferPool configuration
     * @param caps the excepted caps of buffers
     * @param size the expected size of each buffer, not including prefix and padding
     * @param min_buffers the expected minimum amount of buffers to allocate.
     * @param max_buffers the expect maximum amount of buffers to allocate or 0 for unlimited.
     */
    static config_validate_params(config: Structure, caps: Caps | null, size: number, min_buffers: number, max_buffers: number): boolean
}

interface Bus_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Bus

    /**
     * Enables async message delivery support for bus watches,
     * gst_bus_pop() and similar API. Without this only the
     * synchronous message handlers are called.
     * 
     * This property is used to create the child element buses
     * in #GstBin.
     */
    enable_async?: boolean | null
}

/**
 * Signal callback interface for `message`
 */
interface Bus_MessageSignalCallback {
    ($obj: Bus, message: Message): void
}

/**
 * Signal callback interface for `sync-message`
 */
interface Bus_SyncMessageSignalCallback {
    ($obj: Bus, message: Message): void
}

interface Bus {

    // Own properties of Gst-1.0.Gst.Bus

    /**
     * Enables async message delivery support for bus watches,
     * gst_bus_pop() and similar API. Without this only the
     * synchronous message handlers are called.
     * 
     * This property is used to create the child element buses
     * in #GstBin.
     */
    readonly enable_async: boolean

    // Own fields of Gst-1.0.Gst.Bus

    /**
     * the parent structure
     * @field 
     */
    object: Object

    // Owm methods of Gst-1.0.Gst.Bus

    /**
     * Adds a bus signal watch to the default main context with the default priority
     * ( %G_PRIORITY_DEFAULT ). It is also possible to use a non-default
     * main context set up using g_main_context_push_thread_default() (before
     * one had to create a bus watch source and attach it to the desired main
     * context 'manually').
     * 
     * After calling this statement, the bus will emit the "message" signal for each
     * message posted on the bus.
     * 
     * This function may be called multiple times. To clean up, the caller is
     * responsible for calling gst_bus_remove_signal_watch() as many times as this
     * function is called.
     */
    add_signal_watch(): void
    /**
     * Adds a bus signal watch to the default main context with the given `priority`
     * (e.g. %G_PRIORITY_DEFAULT). It is also possible to use a non-default main
     * context set up using g_main_context_push_thread_default()
     * (before one had to create a bus watch source and attach it to the desired
     * main context 'manually').
     * 
     * After calling this statement, the bus will emit the "message" signal for each
     * message posted on the bus when the #GMainLoop is running.
     * 
     * This function may be called multiple times. To clean up, the caller is
     * responsible for calling gst_bus_remove_signal_watch() as many times as this
     * function is called.
     * 
     * There can only be a single bus watch per bus, you must remove any signal
     * watch before you can set another type of watch.
     * @param priority The priority of the watch.
     */
    add_signal_watch_full(priority: number): void
    /**
     * Adds a bus watch to the default main context with the given `priority` (e.g.
     * %G_PRIORITY_DEFAULT). It is also possible to use a non-default  main
     * context set up using g_main_context_push_thread_default() (before
     * one had to create a bus watch source and attach it to the desired main
     * context 'manually').
     * 
     * This function is used to receive asynchronous messages in the main loop.
     * There can only be a single bus watch per bus, you must remove it before you
     * can set a new one.
     * 
     * The bus watch will only work if a #GMainLoop is being run.
     * 
     * When `func` is called, the message belongs to the caller; if you want to
     * keep a copy of it, call gst_message_ref() before leaving `func`.
     * 
     * The watch can be removed using gst_bus_remove_watch() or by returning %FALSE
     * from `func`. If the watch was added to the default main context it is also
     * possible to remove the watch using g_source_remove().
     * 
     * The bus watch will take its own reference to the `bus,` so it is safe to unref
     * `bus` using gst_object_unref() after setting the bus watch.
     * @param priority The priority of the watch.
     * @param func A function to call when a message is received.
     */
    add_watch(priority: number, func: BusFunc): number
    /**
     * A helper #GstBusFunc that can be used to convert all asynchronous messages
     * into signals.
     * @param message the #GstMessage received
     * @param data user data
     */
    async_signal_func(message: Message, data: object | null): boolean
    /**
     * Create watch for this bus. The #GSource will be dispatched whenever
     * a message is on the bus. After the GSource is dispatched, the
     * message is popped off the bus and unreffed.
     * 
     * As with other watches, there can only be one watch on the bus, including
     * any signal watch added with #gst_bus_add_signal_watch.
     */
    create_watch(): GLib.Source | null
    /**
     * Instructs GStreamer to stop emitting the "sync-message" signal for this bus.
     * See gst_bus_enable_sync_message_emission() for more information.
     * 
     * In the event that multiple pieces of code have called
     * gst_bus_enable_sync_message_emission(), the sync-message emissions will only
     * be stopped after all calls to gst_bus_enable_sync_message_emission() were
     * "cancelled" by calling this function. In this way the semantics are exactly
     * the same as gst_object_ref() that which calls enable should also call
     * disable.
     */
    disable_sync_message_emission(): void
    /**
     * Instructs GStreamer to emit the "sync-message" signal after running the bus's
     * sync handler. This function is here so that code can ensure that they can
     * synchronously receive messages without having to affect what the bin's sync
     * handler is.
     * 
     * This function may be called multiple times. To clean up, the caller is
     * responsible for calling gst_bus_disable_sync_message_emission() as many times
     * as this function is called.
     * 
     * While this function looks similar to gst_bus_add_signal_watch(), it is not
     * exactly the same -- this function enables *synchronous* emission of
     * signals when messages arrive; gst_bus_add_signal_watch() adds an idle callback
     * to pop messages off the bus *asynchronously*. The sync-message signal
     * comes from the thread of whatever object posted the message; the "message"
     * signal is marshalled to the main thread via the #GMainLoop.
     */
    enable_sync_message_emission(): void
    /**
     * Gets the file descriptor from the bus which can be used to get notified about
     * messages being available with functions like g_poll(), and allows integration
     * into other event loops based on file descriptors.
     * Whenever a message is available, the POLLIN / %G_IO_IN event is set.
     * 
     * Warning: NEVER read or write anything to the returned fd but only use it
     * for getting notifications via g_poll() or similar and then use the normal
     * GstBus API, e.g. gst_bus_pop().
     */
    get_pollfd(): /* fd */ GLib.PollFD
    /**
     * Checks if there are pending messages on the bus that
     * should be handled.
     */
    have_pending(): boolean
    /**
     * Peeks the message on the top of the bus' queue. The message will remain
     * on the bus' message queue.
     */
    peek(): Message | null
    /**
     * Polls the bus for messages. Will block while waiting for messages to come.
     * You can specify a maximum time to poll with the `timeout` parameter. If
     * `timeout` is negative, this function will block indefinitely.
     * 
     * All messages not in `events` will be popped off the bus and will be ignored.
     * It is not possible to use message enums beyond #GST_MESSAGE_EXTENDED in the
     * `events` mask
     * 
     * Because poll is implemented using the "message" signal enabled by
     * gst_bus_add_signal_watch(), calling gst_bus_poll() will cause the "message"
     * signal to be emitted for every message that poll sees. Thus a "message"
     * signal handler will see the same messages that this function sees -- neither
     * will steal messages from the other.
     * 
     * This function will run a #GMainLoop from the default main context when
     * polling.
     * 
     * You should never use this function, since it is pure evil. This is
     * especially true for GUI applications based on Gtk+ or Qt, but also for any
     * other non-trivial application that uses the GLib main loop. As this function
     * runs a GLib main loop, any callback attached to the default GLib main
     * context may be invoked. This could be timeouts, GUI events, I/O events etc.;
     * even if gst_bus_poll() is called with a 0 timeout. Any of these callbacks
     * may do things you do not expect, e.g. destroy the main application window or
     * some other resource; change other application state; display a dialog and
     * run another main loop until the user clicks it away. In short, using this
     * function may add a lot of complexity to your code through unexpected
     * re-entrancy and unexpected changes to your application's state.
     * 
     * For 0 timeouts use gst_bus_pop_filtered() instead of this function; for
     * other short timeouts use gst_bus_timed_pop_filtered(); everything else is
     * better handled by setting up an asynchronous bus watch and doing things
     * from there.
     * @param events a mask of #GstMessageType, representing the set of message types to poll for (note special handling of extended message types below)
     * @param timeout the poll timeout, as a #GstClockTime, or #GST_CLOCK_TIME_NONE to poll indefinitely.
     */
    poll(events: MessageType, timeout: ClockTime): Message | null
    /**
     * Gets a message from the bus.
     */
    pop(): Message | null
    /**
     * Gets a message matching `type` from the bus.  Will discard all messages on
     * the bus that do not match `type` and that have been posted before the first
     * message that does match `type`.  If there is no message matching `type` on
     * the bus, all messages will be discarded. It is not possible to use message
     * enums beyond #GST_MESSAGE_EXTENDED in the `events` mask.
     * @param types message types to take into account
     */
    pop_filtered(types: MessageType): Message | null
    /**
     * Posts a message on the given bus. Ownership of the message
     * is taken by the bus.
     * @param message the #GstMessage to post
     */
    post(message: Message): boolean
    /**
     * Removes a signal watch previously added with gst_bus_add_signal_watch().
     */
    remove_signal_watch(): void
    /**
     * Removes an installed bus watch from `bus`.
     */
    remove_watch(): boolean
    /**
     * If `flushing,` flushes out and unrefs any messages queued in the bus. Releases
     * references to the message origin objects. Will flush future messages until
     * gst_bus_set_flushing() sets `flushing` to %FALSE.
     * @param flushing whether or not to flush the bus
     */
    set_flushing(flushing: boolean): void
    /**
     * Sets the synchronous handler on the bus. The function will be called
     * every time a new message is posted on the bus. Note that the function
     * will be called in the same thread context as the posting object. This
     * function is usually only called by the creator of the bus. Applications
     * should handle messages asynchronously using the gst_bus watch and poll
     * functions.
     * 
     * Before 1.16.3 it was not possible to replace an existing handler and
     * clearing an existing handler with %NULL was not thread-safe.
     * @param func The handler function to install
     */
    set_sync_handler(func: BusSyncHandler | null): void
    /**
     * A helper #GstBusSyncHandler that can be used to convert all synchronous
     * messages into signals.
     * @param message the #GstMessage received
     * @param data user data
     */
    sync_signal_handler(message: Message, data: object | null): BusSyncReply
    /**
     * Gets a message from the bus, waiting up to the specified timeout.
     * 
     * If `timeout` is 0, this function behaves like gst_bus_pop(). If `timeout` is
     * #GST_CLOCK_TIME_NONE, this function will block forever until a message was
     * posted on the bus.
     * @param timeout a timeout
     */
    timed_pop(timeout: ClockTime): Message | null
    /**
     * Gets a message from the bus whose type matches the message type mask `types,`
     * waiting up to the specified timeout (and discarding any messages that do not
     * match the mask provided).
     * 
     * If `timeout` is 0, this function behaves like gst_bus_pop_filtered(). If
     * `timeout` is #GST_CLOCK_TIME_NONE, this function will block forever until a
     * matching message was posted on the bus.
     * @param timeout a timeout in nanoseconds, or %GST_CLOCK_TIME_NONE to wait forever
     * @param types message types to take into account, %GST_MESSAGE_ANY for any type
     */
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message | null

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Bus

    /**
     * A message has been posted on the bus.
     * @virtual 
     * @param message the message that has been posted asynchronously
     */
    vfunc_message(message: Message): void
    /**
     * A message has been posted on the bus.
     * @virtual 
     * @param message the message that has been posted synchronously
     */
    vfunc_sync_message(message: Message): void

    // Own signals of Gst-1.0.Gst.Bus

    connect(sigName: "message", callback: Bus_MessageSignalCallback): number
    connect_after(sigName: "message", callback: Bus_MessageSignalCallback): number
    emit(sigName: "message", message: Message, ...args: any[]): void
    connect(sigName: "sync-message", callback: Bus_SyncMessageSignalCallback): number
    connect_after(sigName: "sync-message", callback: Bus_SyncMessageSignalCallback): number
    emit(sigName: "sync-message", message: Message, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Bus

    connect(sigName: "notify::enable-async", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-async", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-async", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GstBus is an object responsible for delivering #GstMessage packets in
 * a first-in first-out way from the streaming threads (see #GstTask) to the
 * application.
 * 
 * Since the application typically only wants to deal with delivery of these
 * messages from one thread, the GstBus will marshall the messages between
 * different threads. This is important since the actual streaming of media
 * is done in another thread than the application.
 * 
 * The GstBus provides support for #GSource based notifications. This makes it
 * possible to handle the delivery in the glib #GMainLoop.
 * 
 * The #GSource callback function gst_bus_async_signal_func() can be used to
 * convert all bus messages into signal emissions.
 * 
 * A message is posted on the bus with the gst_bus_post() method. With the
 * gst_bus_peek() and gst_bus_pop() methods one can look at or retrieve a
 * previously posted message.
 * 
 * The bus can be polled with the gst_bus_poll() method. This methods blocks
 * up to the specified timeout value until one of the specified messages types
 * is posted on the bus. The application can then gst_bus_pop() the messages
 * from the bus to handle them.
 * Alternatively the application can register an asynchronous bus function
 * using gst_bus_add_watch_full() or gst_bus_add_watch(). This function will
 * install a #GSource in the default glib main loop and will deliver messages
 * a short while after they have been posted. Note that the main loop should
 * be running for the asynchronous callbacks.
 * 
 * It is also possible to get messages from the bus without any thread
 * marshalling with the gst_bus_set_sync_handler() method. This makes it
 * possible to react to a message in the same thread that posted the
 * message on the bus. This should only be used if the application is able
 * to deal with messages from different threads.
 * 
 * Every #GstPipeline has one bus.
 * 
 * Note that a #GstPipeline will set its bus into flushing state when changing
 * from READY to NULL state.
 * @class 
 */
class Bus extends Object {

    // Own properties of Gst-1.0.Gst.Bus

    static name: string
    static $gtype: GObject.GType<Bus>

    // Constructors of Gst-1.0.Gst.Bus

    constructor(config?: Bus_ConstructProps) 
    /**
     * Creates a new #GstBus instance.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GstBus instance.
     * @constructor 
     */
    static new(): Bus
    _init(config?: Bus_ConstructProps): void
}

interface Clock_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Clock

    timeout?: number | null
    window_size?: number | null
    window_threshold?: number | null
}

/**
 * Signal callback interface for `synced`
 */
interface Clock_SyncedSignalCallback {
    ($obj: Clock, synced: boolean): void
}

interface Clock {

    // Own properties of Gst-1.0.Gst.Clock

    timeout: number
    window_size: number
    window_threshold: number

    // Own fields of Gst-1.0.Gst.Clock

    /**
     * the parent structure
     * @field 
     */
    object: Object

    // Owm methods of Gst-1.0.Gst.Clock

    /**
     * The time `master` of the master clock and the time `slave` of the slave
     * clock are added to the list of observations. If enough observations
     * are available, a linear regression algorithm is run on the
     * observations and `clock` is recalibrated.
     * 
     * If this functions returns %TRUE, `r_squared` will contain the
     * correlation coefficient of the interpolation. A value of 1.0
     * means a perfect regression was performed. This value can
     * be used to control the sampling frequency of the master and slave
     * clocks.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    /**
     * Add a clock observation to the internal slaving algorithm the same as
     * gst_clock_add_observation(), and return the result of the master clock
     * estimation, without updating the internal calibration.
     * 
     * The caller can then take the results and call gst_clock_set_calibration()
     * with the values, or some modified version of them.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation_unapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ ClockTime, /* external */ ClockTime, /* rate_num */ ClockTime, /* rate_denom */ ClockTime ]
    /**
     * Converts the given `internal` clock time to the external time, adjusting for the
     * rate and reference time set with gst_clock_set_calibration() and making sure
     * that the returned time is increasing. This function should be called with the
     * clock's OBJECT_LOCK held and is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_unadjust_unlocked().
     * @param internal a clock time
     */
    adjust_unlocked(internal: ClockTime): ClockTime
    /**
     * Converts the given `internal_target` clock time to the external time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_adjust_unlocked() when called using the
     * current calibration parameters, but doesn't ensure a monotonically
     * increasing result as gst_clock_adjust_unlocked() does.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param internal_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    adjust_with_calibration(internal_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    /**
     * Gets the internal rate and reference time of `clock`. See
     * gst_clock_set_calibration() for more information.
     * 
     * `internal,` `external,` `rate_num,` and `rate_denom` can be left %NULL if the
     * caller is not interested in the values.
     */
    get_calibration(): [ /* internal */ ClockTime, /* external */ ClockTime, /* rate_num */ ClockTime, /* rate_denom */ ClockTime ]
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     */
    get_internal_time(): ClockTime
    /**
     * Gets the master clock that `clock` is slaved to or %NULL when the clock is
     * not slaved to any master clock.
     */
    get_master(): Clock | null
    /**
     * Gets the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     */
    get_resolution(): ClockTime
    /**
     * Gets the current time of the given clock. The time is always
     * monotonically increasing and adjusted according to the current
     * offset and rate.
     */
    get_time(): ClockTime
    /**
     * Gets the amount of time that master and slave clocks are sampled.
     */
    get_timeout(): ClockTime
    /**
     * Checks if the clock is currently synced, by looking at whether
     * %GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC is set.
     */
    is_synced(): boolean
    /**
     * Gets an ID from `clock` to trigger a periodic notification.
     * The periodic notifications will start at time `start_time` and
     * will then be fired with the given `interval`.
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    /**
     * Gets a #GstClockID from `clock` to trigger a single shot
     * notification at the requested time.
     * @param time the requested time
     */
    new_single_shot_id(time: ClockTime): ClockID
    /**
     * Reinitializes the provided periodic `id` to the provided start time and
     * interval. Does not modify the reference count.
     * @param id a #GstClockID
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    periodic_id_reinit(id: ClockID, start_time: ClockTime, interval: ClockTime): boolean
    /**
     * Adjusts the rate and time of `clock`. A rate of 1/1 is the normal speed of
     * the clock. Values bigger than 1/1 make the clock go faster.
     * 
     * `internal` and `external` are calibration parameters that arrange that
     * gst_clock_get_time() should have been `external` at internal time `internal`.
     * This internal time should not be in the future; that is, it should be less
     * than the value of gst_clock_get_internal_time() when this function is called.
     * 
     * Subsequent calls to gst_clock_get_time() will return clock times computed as
     * follows:
     * 
     * ``` C
     *   time = (internal_time - internal) * rate_num / rate_denom + external
     * ```
     * 
     * This formula is implemented in gst_clock_adjust_unlocked(). Of course, it
     * tries to do the integer arithmetic as precisely as possible.
     * 
     * Note that gst_clock_get_time() always returns increasing values so when you
     * move the clock backwards, gst_clock_get_time() will report the previous value
     * until the clock catches up.
     * @param internal a reference internal time
     * @param external a reference external time
     * @param rate_num the numerator of the rate of the clock relative to its            internal time
     * @param rate_denom the denominator of the rate of the clock
     */
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    /**
     * Sets `master` as the master clock for `clock`. `clock` will be automatically
     * calibrated so that gst_clock_get_time() reports the same time as the
     * master clock.
     * 
     * A clock provider that slaves its clock to a master can get the current
     * calibration values with gst_clock_get_calibration().
     * 
     * `master` can be %NULL in which case `clock` will not be slaved anymore. It will
     * however keep reporting its time adjusted with the last configured rate
     * and time offsets.
     * @param master a master #GstClock
     */
    set_master(master: Clock | null): boolean
    /**
     * Sets the accuracy of the clock. Some clocks have the possibility to operate
     * with different accuracy at the expense of more resource usage. There is
     * normally no need to change the default resolution of a clock. The resolution
     * of a clock can only be changed if the clock has the
     * #GST_CLOCK_FLAG_CAN_SET_RESOLUTION flag set.
     * @param resolution The resolution to set
     */
    set_resolution(resolution: ClockTime): ClockTime
    /**
     * Sets `clock` to synced and emits the #GstClock::synced signal, and wakes up any
     * thread waiting in gst_clock_wait_for_sync().
     * 
     * This function must only be called if %GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is set on the clock, and is intended to be called by subclasses only.
     * @param synced if the clock is synced
     */
    set_synced(synced: boolean): void
    /**
     * Sets the amount of time, in nanoseconds, to sample master and slave
     * clocks
     * @param timeout a timeout
     */
    set_timeout(timeout: ClockTime): void
    /**
     * Reinitializes the provided single shot `id` to the provided time. Does not
     * modify the reference count.
     * @param id a #GstClockID
     * @param time The requested time.
     */
    single_shot_id_reinit(id: ClockID, time: ClockTime): boolean
    /**
     * Converts the given `external` clock time to the internal time of `clock,`
     * using the rate and reference time set with gst_clock_set_calibration().
     * This function should be called with the clock's OBJECT_LOCK held and
     * is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_adjust_unlocked().
     * @param external an external clock time
     */
    unadjust_unlocked(external: ClockTime): ClockTime
    /**
     * Converts the given `external_target` clock time to the internal time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_unadjust_unlocked() when called using the
     * current calibration parameters.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param external_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    unadjust_with_calibration(external_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    /**
     * Waits until `clock` is synced for reporting the current time. If `timeout`
     * is %GST_CLOCK_TIME_NONE it will wait forever, otherwise it will time out
     * after `timeout` nanoseconds.
     * 
     * For asynchronous waiting, the #GstClock::synced signal can be used.
     * 
     * This returns immediately with %TRUE if %GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is not set on the clock, or if the clock is already synced.
     * @param timeout timeout for waiting or %GST_CLOCK_TIME_NONE
     */
    wait_for_sync(timeout: ClockTime): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Clock

    /**
     * Change the resolution of the clock. Not all values might
     * be acceptable.
     * @virtual 
     * @param old_resolution the previous resolution
     * @param new_resolution the new resolution
     */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     * @virtual 
     */
    vfunc_get_internal_time(): ClockTime
    /**
     * Gets the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     * @virtual 
     */
    vfunc_get_resolution(): ClockTime
    /**
     * Unblock a blocking or async wait operation.
     * @virtual 
     * @param entry the entry to unschedule
     */
    vfunc_unschedule(entry: ClockEntry): void
    /**
     * Perform a blocking wait on the given #GstClockEntry and return
     * the jitter.
     * @virtual 
     * @param entry the entry to wait on
     */
    vfunc_wait(entry: ClockEntry): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff ]
    /**
     * Perform an asynchronous wait on the given #GstClockEntry.
     * @virtual 
     * @param entry the entry to wait on
     */
    vfunc_wait_async(entry: ClockEntry): ClockReturn

    // Own signals of Gst-1.0.Gst.Clock

    connect(sigName: "synced", callback: Clock_SyncedSignalCallback): number
    connect_after(sigName: "synced", callback: Clock_SyncedSignalCallback): number
    emit(sigName: "synced", synced: boolean, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Clock

    connect(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GStreamer uses a global clock to synchronize the plugins in a pipeline.
 * Different clock implementations are possible by implementing this abstract
 * base class or, more conveniently, by subclassing #GstSystemClock.
 * 
 * The #GstClock returns a monotonically increasing time with the method
 * gst_clock_get_time(). Its accuracy and base time depend on the specific
 * clock implementation but time is always expressed in nanoseconds. Since the
 * baseline of the clock is undefined, the clock time returned is not
 * meaningful in itself, what matters are the deltas between two clock times.
 * The time returned by a clock is called the absolute time.
 * 
 * The pipeline uses the clock to calculate the running time. Usually all
 * renderers synchronize to the global clock using the buffer timestamps, the
 * #GST_EVENT_SEGMENT events and the element's base time, see #GstPipeline.
 * 
 * A clock implementation can support periodic and single shot clock
 * notifications both synchronous and asynchronous.
 * 
 * One first needs to create a #GstClockID for the periodic or single shot
 * notification using gst_clock_new_single_shot_id() or
 * gst_clock_new_periodic_id().
 * 
 * To perform a blocking wait for the specific time of the #GstClockID use
 * gst_clock_id_wait(). To receive a callback when the specific time is reached
 * in the clock use gst_clock_id_wait_async(). Both these calls can be
 * interrupted with the gst_clock_id_unschedule() call. If the blocking wait is
 * unscheduled a return value of #GST_CLOCK_UNSCHEDULED is returned.
 * 
 * Periodic callbacks scheduled async will be repeatedly called automatically
 * until they are unscheduled. To schedule a sync periodic callback,
 * gst_clock_id_wait() should be called repeatedly.
 * 
 * The async callbacks can happen from any thread, either provided by the core
 * or from a streaming thread. The application should be prepared for this.
 * 
 * A #GstClockID that has been unscheduled cannot be used again for any wait
 * operation, a new #GstClockID should be created and the old unscheduled one
 * should be destroyed with gst_clock_id_unref().
 * 
 * It is possible to perform a blocking wait on the same #GstClockID from
 * multiple threads. However, registering the same #GstClockID for multiple
 * async notifications is not possible, the callback will only be called for
 * the thread registering the entry last.
 * 
 * None of the wait operations unref the #GstClockID, the owner is responsible
 * for unreffing the ids itself. This holds for both periodic and single shot
 * notifications. The reason being that the owner of the #GstClockID has to
 * keep a handle to the #GstClockID to unblock the wait on FLUSHING events or
 * state changes and if the entry would be unreffed automatically, the handle
 * might become invalid without any notification.
 * 
 * These clock operations do not operate on the running time, so the callbacks
 * will also occur when not in PLAYING state as if the clock just keeps on
 * running. Some clocks however do not progress when the element that provided
 * the clock is not PLAYING.
 * 
 * When a clock has the #GST_CLOCK_FLAG_CAN_SET_MASTER flag set, it can be
 * slaved to another #GstClock with gst_clock_set_master(). The clock will
 * then automatically be synchronized to this master clock by repeatedly
 * sampling the master clock and the slave clock and recalibrating the slave
 * clock with gst_clock_set_calibration(). This feature is mostly useful for
 * plugins that have an internal clock but must operate with another clock
 * selected by the #GstPipeline.  They can track the offset and rate difference
 * of their internal clock relative to the master clock by using the
 * gst_clock_get_calibration() function.
 * 
 * The master/slave synchronisation can be tuned with the #GstClock:timeout,
 * #GstClock:window-size and #GstClock:window-threshold properties.
 * The #GstClock:timeout property defines the interval to sample the master
 * clock and run the calibration functions. #GstClock:window-size defines the
 * number of samples to use when calibrating and #GstClock:window-threshold
 * defines the minimum number of samples before the calibration is performed.
 * @class 
 */
class Clock extends Object {

    // Own properties of Gst-1.0.Gst.Clock

    static name: string
    static $gtype: GObject.GType<Clock>

    // Constructors of Gst-1.0.Gst.Clock

    constructor(config?: Clock_ConstructProps) 
    _init(config?: Clock_ConstructProps): void
    /**
     * Compares the two #GstClockID instances. This function can be used
     * as a GCompareFunc when sorting ids.
     * @param id1 A #GstClockID
     * @param id2 A #GstClockID to compare with
     */
    static id_compare_func(id1: object | null, id2: object | null): number
    /**
     * This function returns the underlying clock.
     * @param id a #GstClockID
     */
    static id_get_clock(id: ClockID): Clock | null
    /**
     * Gets the time of the clock ID
     * @param id The #GstClockID to query
     */
    static id_get_time(id: ClockID): ClockTime
    /**
     * Increases the refcount of given `id`.
     * @param id The #GstClockID to ref
     */
    static id_ref(id: ClockID): ClockID
    /**
     * Unrefs given `id`. When the refcount reaches 0 the
     * #GstClockID will be freed.
     * @param id The #GstClockID to unref
     */
    static id_unref(id: ClockID): void
    /**
     * Cancels an outstanding request with `id`. This can either
     * be an outstanding async notification or a pending sync notification.
     * After this call, `id` cannot be used anymore to receive sync or
     * async notifications, you need to create a new #GstClockID.
     * @param id The id to unschedule
     */
    static id_unschedule(id: ClockID): void
    /**
     * This function returns whether `id` uses `clock` as the underlying clock.
     * `clock` can be NULL, in which case the return value indicates whether
     * the underlying clock has been freed.  If this is the case, the `id` is
     * no longer usable and should be freed.
     * @param id a #GstClockID to check
     * @param clock a #GstClock to compare against
     */
    static id_uses_clock(id: ClockID, clock: Clock): boolean
    /**
     * Performs a blocking wait on `id`.
     * `id` should have been created with gst_clock_new_single_shot_id()
     * or gst_clock_new_periodic_id() and should not have been unscheduled
     * with a call to gst_clock_id_unschedule().
     * 
     * If the `jitter` argument is not %NULL and this function returns #GST_CLOCK_OK
     * or #GST_CLOCK_EARLY, it will contain the difference
     * against the clock and the time of `id` when this method was
     * called.
     * Positive values indicate how late `id` was relative to the clock
     * (in which case this function will return #GST_CLOCK_EARLY).
     * Negative values indicate how much time was spent waiting on the clock
     * before this function returned.
     * @param id The #GstClockID to wait on
     */
    static id_wait(id: ClockID): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff ]
    /**
     * Registers a callback on the given #GstClockID `id` with the given
     * function and user_data. When passing a #GstClockID with an invalid
     * time to this function, the callback will be called immediately
     * with  a time set to %GST_CLOCK_TIME_NONE. The callback will
     * be called when the time of `id` has been reached.
     * 
     * The callback `func` can be invoked from any thread, either provided by the
     * core or from a streaming thread. The application should be prepared for this.
     * @param id a #GstClockID to wait on
     * @param func The callback function
     */
    static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn
}

interface ControlBinding_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.ControlBinding

    name?: string | null
    object?: Object | null
}

interface ControlBinding {

    // Own properties of Gst-1.0.Gst.ControlBinding

    readonly object: Object

    // Own fields of Gst-1.0.Gst.ControlBinding

    /**
     * the parent structure
     * @field 
     */
    parent: Object
    /**
     * name of the property of this binding
     * @field 
     */
    name: string
    /**
     * #GParamSpec for this property
     * @field 
     */
    pspec: GObject.ParamSpec

    // Owm methods of Gst-1.0.Gst.ControlBinding

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(timestamp: ClockTime, interval?: ClockTime, values?: any[]): boolean

    // Overloads of get_g_value_array

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
    get_g_value_array(property_name: string, timestamp?: ClockTime, interval?: ClockTime, values?: any[]): boolean
    get_g_value_array(...args: any[]): any
    get_g_value_array(args_or_property_name: any[] | string, timestamp?: ClockTime, interval?: ClockTime, values?: any[]): boolean | any
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param timestamp the time the control-change should be read from
     */
    get_value(timestamp: ClockTime): any | null

    // Overloads of get_value

    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp?: ClockTime): any | null
    get_value(...args: any[]): any
    get_value(args_or_property_name: any[] | string, timestamp?: ClockTime): any | null | any
    /**
     * Checks if the control binding is disabled.
     */
    is_disabled(): boolean
    /**
     * This function is used to disable a control binding for some time, i.e.
     * gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_disabled(disabled: boolean): void
    /**
     * Sets the property of the `object,` according to the #GstControlSources that
     * handles it and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param object the object that has controlled properties
     * @param timestamp the time that should be processed
     * @param last_sync the last time this was called
     */
    sync_values(object: Object, timestamp?: ClockTime, last_sync?: ClockTime): boolean

    // Overloads of sync_values

    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: ClockTime): boolean
    sync_values(...args: any[]): any
    sync_values(args_or_timestamp: any[] | ClockTime): boolean | any

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.ControlBinding

    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @virtual 
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    vfunc_get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    /**
     * Gets the value for the given controlled property at the requested time.
     * @virtual 
     * @param timestamp the time the control-change should be read from
     */
    vfunc_get_value(timestamp: ClockTime): any | null
    /**
     * Sets the property of the `object,` according to the #GstControlSources that
     * handles it and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @virtual 
     * @param object the object that has controlled properties
     * @param timestamp the time that should be processed
     * @param last_sync the last time this was called
     */
    vfunc_sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean

    // Class property signals of Gst-1.0.Gst.ControlBinding

    connect(sigName: "notify::object", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A base class for value mapping objects that attaches control sources to #GObject
 * properties. Such an object is taking one or more #GstControlSource instances,
 * combines them and maps the resulting value to the type and value range of the
 * bound property.
 * @class 
 */
class ControlBinding extends Object {

    // Own properties of Gst-1.0.Gst.ControlBinding

    static name: string
    static $gtype: GObject.GType<ControlBinding>

    // Constructors of Gst-1.0.Gst.ControlBinding

    constructor(config?: ControlBinding_ConstructProps) 
    _init(config?: ControlBinding_ConstructProps): void
}

interface ControlSource_ConstructProps extends Object_ConstructProps {
}

interface ControlSource {

    // Own fields of Gst-1.0.Gst.ControlSource

    /**
     * the parent structure
     * @field 
     */
    parent: Object
    /**
     * Function for returning a value for a given timestamp
     * @field 
     */
    // TODO fix conflict: get_value: ControlSourceGetValue
    /**
     * Function for returning a values array for a given timestamp
     * @field 
     */
    get_value_array: ControlSourceGetValueArray

    // Owm methods of Gst-1.0.Gst.ControlSource

    /**
     * Gets the value for this #GstControlSource at a given timestamp.
     * @param timestamp the time for which the value should be returned
     */
    control_source_get_value(timestamp: ClockTime): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets an array of values for for this #GstControlSource. Values that are
     * undefined contain NANs.
     * @param timestamp the first timestamp
     * @param interval the time steps
     * @param values array to put control-values in
     */
    control_source_get_value_array(timestamp: ClockTime, interval: ClockTime, values: number[]): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.ControlSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GstControlSource is a base class for control value sources that could
 * be used to get timestamp-value pairs. A control source essentially is a
 * function over time.
 * 
 * A #GstControlSource is used by first getting an instance of a specific
 * control-source, creating a binding for the control-source to the target property
 * of the element and then adding the binding to the element. The binding will
 * convert the data types and value range to fit to the bound property.
 * 
 * For implementing a new #GstControlSource one has to implement
 * #GstControlSourceGetValue and #GstControlSourceGetValueArray functions.
 * These are then used by gst_control_source_get_value() and
 * gst_control_source_get_value_array() to get values for specific timestamps.
 * @class 
 */
class ControlSource extends Object {

    // Own properties of Gst-1.0.Gst.ControlSource

    static name: string
    static $gtype: GObject.GType<ControlSource>

    // Constructors of Gst-1.0.Gst.ControlSource

    constructor(config?: ControlSource_ConstructProps) 
    _init(config?: ControlSource_ConstructProps): void
}

interface Device_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Device

    caps?: Caps | null
    device_class?: string | null
    display_name?: string | null
    properties?: Structure | null
}

/**
 * Signal callback interface for `removed`
 */
interface Device_RemovedSignalCallback {
    ($obj: Device): void
}

interface Device {

    // Own properties of Gst-1.0.Gst.Device

    readonly caps: Caps
    readonly device_class: string
    readonly display_name: string
    readonly properties: Structure

    // Own fields of Gst-1.0.Gst.Device

    /**
     * The parent #GstObject structure.
     * @field 
     */
    parent: Object

    // Owm methods of Gst-1.0.Gst.Device

    /**
     * Creates the element with all of the required parameters set to use
     * this device.
     * @param name name of new element, or %NULL to automatically create a unique name.
     */
    create_element(name: string | null): Element | null
    /**
     * Getter for the #GstCaps that this device supports.
     */
    get_caps(): Caps | null
    /**
     * Gets the "class" of a device. This is a "/" separated list of
     * classes that represent this device. They are a subset of the
     * classes of the #GstDeviceProvider that produced this device.
     */
    get_device_class(): string
    /**
     * Gets the user-friendly name of the device.
     */
    get_display_name(): string
    /**
     * Gets the extra properties of a device.
     */
    get_properties(): Structure | null
    /**
     * Check if `device` matches all of the given classes
     * @param classes a "/"-separated list of device classes to match, only match if  all classes are matched
     */
    has_classes(classes: string): boolean
    /**
     * Check if `factory` matches all of the given classes
     * @param classes a %NULL terminated array of classes   to match, only match if all classes are matched
     */
    has_classesv(classes: string[]): boolean
    /**
     * Tries to reconfigure an existing element to use the device. If this
     * function fails, then one must destroy the element and create a new one
     * using gst_device_create_element().
     * 
     * Note: This should only be implemented for elements can change their
     * device in the PLAYING state.
     * @param element a #GstElement
     */
    reconfigure_element(element: Element): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Device

    /**
     * Creates the element with all of the required parameters set to use
     * this device.
     * @virtual 
     * @param name name of new element, or %NULL to automatically create a unique name.
     */
    vfunc_create_element(name: string | null): Element | null
    /**
     * Tries to reconfigure an existing element to use the device. If this
     * function fails, then one must destroy the element and create a new one
     * using gst_device_create_element().
     * 
     * Note: This should only be implemented for elements can change their
     * device in the PLAYING state.
     * @virtual 
     * @param element a #GstElement
     */
    vfunc_reconfigure_element(element: Element): boolean

    // Own signals of Gst-1.0.Gst.Device

    connect(sigName: "removed", callback: Device_RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: Device_RemovedSignalCallback): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Device

    connect(sigName: "notify::caps", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::device-class", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-class", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-class", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::properties", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::properties", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDevice are objects representing a device, they contain
 * relevant metadata about the device, such as its class and the #GstCaps
 * representing the media types it can produce or handle.
 * 
 * #GstDevice are created by #GstDeviceProvider objects which can be
 * aggregated by #GstDeviceMonitor objects.
 * @class 
 */
class Device extends Object {

    // Own properties of Gst-1.0.Gst.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Gst-1.0.Gst.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
}

interface DeviceMonitor_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.DeviceMonitor

    show_all?: boolean | null
}

interface DeviceMonitor {

    // Own properties of Gst-1.0.Gst.DeviceMonitor

    show_all: boolean

    // Own fields of Gst-1.0.Gst.DeviceMonitor

    /**
     * the parent #GstObject structure
     * @field 
     */
    parent: Object

    // Owm methods of Gst-1.0.Gst.DeviceMonitor

    /**
     * Adds a filter for which #GstDevice will be monitored, any device that matches
     * all these classes and the #GstCaps will be returned.
     * 
     * If this function is called multiple times to add more filters, each will be
     * matched independently. That is, adding more filters will not further restrict
     * what devices are matched.
     * 
     * The #GstCaps supported by the device as returned by gst_device_get_caps() are
     * not intersected with caps filters added using this function.
     * 
     * Filters must be added before the #GstDeviceMonitor is started.
     * @param classes device classes to use as filter or %NULL for any class
     * @param caps the #GstCaps to filter or %NULL for ANY
     */
    add_filter(classes: string | null, caps: Caps | null): number
    /**
     * Gets the #GstBus of this #GstDeviceMonitor
     */
    get_bus(): Bus
    /**
     * Gets a list of devices from all of the relevant monitors. This may actually
     * probe the hardware if the monitor is not currently started.
     */
    get_devices(): Device[] | null
    /**
     * Get a list of the currently selected device provider factories.
     * 
     * This
     */
    get_providers(): string[]
    /**
     * Get if `monitor` is currently showing all devices, even those from hidden
     * providers.
     */
    get_show_all_devices(): boolean
    /**
     * Removes a filter from the #GstDeviceMonitor using the id that was returned
     * by gst_device_monitor_add_filter().
     * @param filter_id the id of the filter
     */
    remove_filter(filter_id: number): boolean
    /**
     * Set if all devices should be visible, even those devices from hidden
     * providers. Setting `show_all` to true might show some devices multiple times.
     * @param show_all show all devices
     */
    set_show_all_devices(show_all: boolean): void
    /**
     * Starts monitoring the devices, one this has succeeded, the
     * %GST_MESSAGE_DEVICE_ADDED and %GST_MESSAGE_DEVICE_REMOVED messages
     * will be emitted on the bus when the list of devices changes.
     */
    start(): boolean
    /**
     * Stops monitoring the devices.
     */
    stop(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.DeviceMonitor

    connect(sigName: "notify::show-all", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-all", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Applications should create a #GstDeviceMonitor when they want
 * to probe, list and monitor devices of a specific type. The
 * #GstDeviceMonitor will create the appropriate
 * #GstDeviceProvider objects and manage them. It will then post
 * messages on its #GstBus for devices that have been added and
 * removed.
 * 
 * The device monitor will monitor all devices matching the filters that
 * the application has set.
 * 
 * The basic use pattern of a device monitor is as follows:
 * |[
 *   static gboolean
 *   my_bus_func (GstBus * bus, GstMessage * message, gpointer user_data)
 *   {
 *      GstDevice *device;
 *      gchar *name;
 * 
 *      switch (GST_MESSAGE_TYPE (message)) {
 *        case GST_MESSAGE_DEVICE_ADDED:
 *          gst_message_parse_device_added (message, &device);
 *          name = gst_device_get_display_name (device);
 *          g_print("Device added: %s\n", name);
 *          g_free (name);
 *          gst_object_unref (device);
 *          break;
 *        case GST_MESSAGE_DEVICE_REMOVED:
 *          gst_message_parse_device_removed (message, &device);
 *          name = gst_device_get_display_name (device);
 *          g_print("Device removed: %s\n", name);
 *          g_free (name);
 *          gst_object_unref (device);
 *          break;
 *        default:
 *          break;
 *      }
 * 
 *      return G_SOURCE_CONTINUE;
 *   }
 * 
 *   GstDeviceMonitor *
 *   setup_raw_video_source_device_monitor (void) {
 *      GstDeviceMonitor *monitor;
 *      GstBus *bus;
 *      GstCaps *caps;
 * 
 *      monitor = gst_device_monitor_new ();
 * 
 *      bus = gst_device_monitor_get_bus (monitor);
 *      gst_bus_add_watch (bus, my_bus_func, NULL);
 *      gst_object_unref (bus);
 * 
 *      caps = gst_caps_new_empty_simple ("video/x-raw");
 *      gst_device_monitor_add_filter (monitor, "Video/Source", caps);
 *      gst_caps_unref (caps);
 * 
 *      gst_device_monitor_start (monitor);
 * 
 *      return monitor;
 *   }
 * ```
 * 
 * @class 
 */
class DeviceMonitor extends Object {

    // Own properties of Gst-1.0.Gst.DeviceMonitor

    static name: string
    static $gtype: GObject.GType<DeviceMonitor>

    // Constructors of Gst-1.0.Gst.DeviceMonitor

    constructor(config?: DeviceMonitor_ConstructProps) 
    /**
     * Create a new #GstDeviceMonitor
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstDeviceMonitor
     * @constructor 
     */
    static new(): DeviceMonitor
    _init(config?: DeviceMonitor_ConstructProps): void
}

interface DeviceProvider_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `provider-hidden`
 */
interface DeviceProvider_ProviderHiddenSignalCallback {
    ($obj: DeviceProvider, object: string): void
}

/**
 * Signal callback interface for `provider-unhidden`
 */
interface DeviceProvider_ProviderUnhiddenSignalCallback {
    ($obj: DeviceProvider, object: string): void
}

interface DeviceProvider {

    // Own fields of Gst-1.0.Gst.DeviceProvider

    /**
     * The parent #GstObject
     * @field 
     */
    parent: Object
    /**
     * a #GList of the #GstDevice objects
     * @field 
     */
    devices: object[]

    // Owm methods of Gst-1.0.Gst.DeviceProvider

    can_monitor(): boolean
    /**
     * Posts a message on the provider's #GstBus to inform applications that
     * a new device has been added.
     * 
     * This is for use by subclasses.
     * 
     * `device'`s reference count will be incremented, and any floating reference
     * will be removed (see gst_object_ref_sink()).
     * @param device a #GstDevice that has been added
     */
    device_add(device: Device): void
    /**
     * This function is used when `changed_device` was modified into its new form
     * `device`. This will post a `DEVICE_CHANGED` message on the bus to let
     * the application know that the device was modified. #GstDevice is immutable
     * for MT. safety purposes so this is an "atomic" way of letting the application
     * know when a device was modified.
     * @param device the new version of `changed_device`
     * @param changed_device the old version of the device that has been updated
     */
    device_changed(device: Device, changed_device: Device): void
    /**
     * Posts a message on the provider's #GstBus to inform applications that
     * a device has been removed.
     * 
     * This is for use by subclasses.
     * @param device a #GstDevice that has been removed
     */
    device_remove(device: Device): void
    /**
     * Gets the #GstBus of this #GstDeviceProvider
     */
    get_bus(): Bus
    /**
     * Gets a list of devices that this provider understands. This may actually
     * probe the hardware if the provider is not currently started.
     * 
     * If the provider has been started, this will returned the same #GstDevice
     * objedcts that have been returned by the #GST_MESSAGE_DEVICE_ADDED messages.
     */
    get_devices(): Device[]
    /**
     * Retrieves the factory that was used to create this device provider.
     */
    get_factory(): DeviceProviderFactory | null
    /**
     * Get the provider factory names of the #GstDeviceProvider instances that
     * are hidden by `provider`.
     */
    get_hidden_providers(): string[]
    /**
     * Get metadata with `key` in `provider`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Make `provider` hide the devices from the factory with `name`.
     * 
     * This function is used when `provider` will also provide the devices reported
     * by provider factory `name`. A monitor should stop monitoring the
     * device provider with `name` to avoid duplicate devices.
     * @param name a provider factory name
     */
    hide_provider(name: string): void
    /**
     * This function can be used to know if the `provider` was successfully started.
     */
    is_started(): boolean
    /**
     * Starts providering the devices. This will cause #GST_MESSAGE_DEVICE_ADDED
     * and #GST_MESSAGE_DEVICE_REMOVED messages to be posted on the provider's bus
     * when devices are added or removed from the system.
     * 
     * Since the #GstDeviceProvider is a singleton,
     * gst_device_provider_start() may already have been called by another
     * user of the object, gst_device_provider_stop() needs to be called the same
     * number of times.
     * 
     * After this function has been called, gst_device_provider_get_devices() will
     * return the same objects that have been received from the
     * #GST_MESSAGE_DEVICE_ADDED messages and will no longer probe.
     */
    start(): boolean
    /**
     * Decreases the use-count by one. If the use count reaches zero, this
     * #GstDeviceProvider will stop providering the devices. This needs to be
     * called the same number of times that gst_device_provider_start() was called.
     */
    stop(): void
    /**
     * Make `provider` unhide the devices from factory `name`.
     * 
     * This function is used when `provider` will no longer provide the devices
     * reported by provider factory `name`. A monitor should start
     * monitoring the devices from provider factory `name` in order to see
     * all devices again.
     * @param name a provider factory name
     */
    unhide_provider(name: string): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.DeviceProvider

    /**
     * Starts providering the devices. This will cause #GST_MESSAGE_DEVICE_ADDED
     * and #GST_MESSAGE_DEVICE_REMOVED messages to be posted on the provider's bus
     * when devices are added or removed from the system.
     * 
     * Since the #GstDeviceProvider is a singleton,
     * gst_device_provider_start() may already have been called by another
     * user of the object, gst_device_provider_stop() needs to be called the same
     * number of times.
     * 
     * After this function has been called, gst_device_provider_get_devices() will
     * return the same objects that have been received from the
     * #GST_MESSAGE_DEVICE_ADDED messages and will no longer probe.
     * @virtual 
     */
    vfunc_start(): boolean
    /**
     * Decreases the use-count by one. If the use count reaches zero, this
     * #GstDeviceProvider will stop providering the devices. This needs to be
     * called the same number of times that gst_device_provider_start() was called.
     * @virtual 
     */
    vfunc_stop(): void

    // Own signals of Gst-1.0.Gst.DeviceProvider

    connect(sigName: "provider-hidden", callback: DeviceProvider_ProviderHiddenSignalCallback): number
    connect_after(sigName: "provider-hidden", callback: DeviceProvider_ProviderHiddenSignalCallback): number
    emit(sigName: "provider-hidden", object: string, ...args: any[]): void
    connect(sigName: "provider-unhidden", callback: DeviceProvider_ProviderUnhiddenSignalCallback): number
    connect_after(sigName: "provider-unhidden", callback: DeviceProvider_ProviderUnhiddenSignalCallback): number
    emit(sigName: "provider-unhidden", object: string, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.DeviceProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstDeviceProvider subclass is provided by a plugin that handles devices
 * if there is a way to programmatically list connected devices. It can also
 * optionally provide updates to the list of connected devices.
 * 
 * Each #GstDeviceProvider subclass is a singleton, a plugin should
 * normally provide a single subclass for all devices.
 * 
 * Applications would normally use a #GstDeviceMonitor to monitor devices
 * from all relevant providers.
 * @class 
 */
class DeviceProvider extends Object {

    // Own properties of Gst-1.0.Gst.DeviceProvider

    static name: string
    static $gtype: GObject.GType<DeviceProvider>

    // Constructors of Gst-1.0.Gst.DeviceProvider

    constructor(config?: DeviceProvider_ConstructProps) 
    _init(config?: DeviceProvider_ConstructProps): void
    /**
     * Create a new device providerfactory capable of instantiating objects of the
     * `type` and add the factory to `plugin`.
     * @param plugin #GstPlugin to register the device provider with, or %NULL for     a static device provider.
     * @param name name of device providers of this type
     * @param rank rank of device provider (higher rank means more importance when autoplugging)
     * @param type GType of device provider to register
     */
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.GType): boolean
    /**
     * Set `key` with `value` as metadata in `klass`.
     * @param key the key to set
     * @param value the value to set
     */
    static add_metadata(klass: DeviceProvider | Function | GObject.GType, key: string, value: string): void
    /**
     * Set `key` with `value` as metadata in `klass`.
     * 
     * Same as gst_device_provider_class_add_metadata(), but `value` must be a static string
     * or an inlined string, as it will not be copied. (GStreamer plugins will
     * be made resident once loaded, so this function can be used even from
     * dynamically loaded plugins.)
     * @param key the key to set
     * @param value the value to set
     */
    static add_static_metadata(klass: DeviceProvider | Function | GObject.GType, key: string, value: string): void
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    static get_metadata(klass: DeviceProvider | Function | GObject.GType, key: string): string | null
    /**
     * Sets the detailed information for a #GstDeviceProviderClass.
     * 
     * > This function is for use in _class_init functions only.
     * @param longname The long English name of the device provider. E.g. "File Sink"
     * @param classification String describing the type of device provider, as an  unordered list separated with slashes ('/'). See draft-klass.txt of the  design docs for more details and common types. E.g: "Sink/File"
     * @param description Sentence describing the purpose of the device provider. E.g: "Write stream to a file"
     * @param author Name and contact details of the author(s). Use \n to separate multiple author metadata. E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
     */
    static set_metadata(klass: DeviceProvider | Function | GObject.GType, longname: string, classification: string, description: string, author: string): void
    /**
     * Sets the detailed information for a #GstDeviceProviderClass.
     * 
     * > This function is for use in _class_init functions only.
     * 
     * Same as gst_device_provider_class_set_metadata(), but `longname,` `classification,`
     * `description,` and `author` must be static strings or inlined strings, as
     * they will not be copied. (GStreamer plugins will be made resident once
     * loaded, so this function can be used even from dynamically loaded plugins.)
     * @param longname The long English name of the element. E.g. "File Sink"
     * @param classification String describing the type of element, as an unordered list separated with slashes ('/'). See draft-klass.txt of the design docs for more details and common types. E.g: "Sink/File"
     * @param description Sentence describing the purpose of the element.  E.g: "Write stream to a file"
     * @param author Name and contact details of the author(s). Use \n to separate multiple author metadata. E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
     */
    static set_static_metadata(klass: DeviceProvider | Function | GObject.GType, longname: string, classification: string, description: string, author: string): void
}

interface DeviceProviderFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface DeviceProviderFactory {

    // Owm methods of Gst-1.0.Gst.DeviceProviderFactory

    /**
     * Returns the device provider of the type defined by the given device
     * providerfactory.
     */
    get(): DeviceProvider | null
    /**
     * Get the #GType for device providers managed by this factory. The type can
     * only be retrieved if the device provider factory is loaded, which can be
     * assured with gst_plugin_feature_load().
     */
    get_device_provider_type(): GObject.GType
    /**
     * Get the metadata on `factory` with `key`.
     * @param key a key
     */
    get_metadata(key: string): string | null
    /**
     * Get the available keys for the metadata on `factory`.
     */
    get_metadata_keys(): string[] | null
    /**
     * Check if `factory` matches all of the given `classes`
     * @param classes a "/" separate list of classes to match, only match     if all classes are matched
     */
    has_classes(classes: string | null): boolean
    /**
     * Check if `factory` matches all of the given classes
     * @param classes a %NULL terminated array   of classes to match, only match if all classes are matched
     */
    has_classesv(classes: string[] | null): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.DeviceProviderFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDeviceProviderFactory is used to create instances of device providers. A
 * GstDeviceProviderfactory can be added to a #GstPlugin as it is also a
 * #GstPluginFeature.
 * 
 * Use the gst_device_provider_factory_find() and
 * gst_device_provider_factory_get() functions to create device
 * provider instances or use gst_device_provider_factory_get_by_name() as a
 * convenient shortcut.
 * @class 
 */
class DeviceProviderFactory extends PluginFeature {

    // Own properties of Gst-1.0.Gst.DeviceProviderFactory

    static name: string
    static $gtype: GObject.GType<DeviceProviderFactory>

    // Constructors of Gst-1.0.Gst.DeviceProviderFactory

    constructor(config?: DeviceProviderFactory_ConstructProps) 
    _init(config?: DeviceProviderFactory_ConstructProps): void
    /**
     * Search for an device provider factory of the given name. Refs the returned
     * device provider factory; caller is responsible for unreffing.
     * @param name name of factory to find
     */
    static find(name: string): DeviceProviderFactory | null
    /**
     * Returns the device provider of the type defined by the given device
     * provider factory.
     * @param factoryname a named factory to instantiate
     */
    static get_by_name(factoryname: string): DeviceProvider | null
    /**
     * Get a list of factories with a rank greater or equal to `minrank`.
     * The list of factories is returned by decreasing rank.
     * @param minrank Minimum rank
     */
    static list_get_device_providers(minrank: Rank): DeviceProviderFactory[]
}

interface DoubleRange {
}

/**
 * A fundamental type that describes a #gdouble range
 * @class 
 */
class DoubleRange {

    // Own properties of Gst-1.0.Gst.DoubleRange

    static name: string
}

interface DynamicTypeFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface DynamicTypeFactory {

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.DynamicTypeFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstDynamicTypeFactory is used to represent a type that can be
 * automatically loaded the first time it is used. For example,
 * a non-standard type for use in caps fields.
 * 
 * In general, applications and plugins don't need to use the factory
 * beyond registering the type in a plugin init function. Once that is
 * done, the type is stored in the registry, and ready as soon as the
 * registry is loaded.
 * 
 * ## Registering a type for dynamic loading
 * 
 * 
 * ```c
 * 
 * static gboolean
 * plugin_init (GstPlugin * plugin)
 * {
 *   return gst_dynamic_type_register (plugin, GST_TYPE_CUSTOM_CAPS_FIELD);
 * }
 * ```
 * 
 * @class 
 */
class DynamicTypeFactory extends PluginFeature {

    // Own properties of Gst-1.0.Gst.DynamicTypeFactory

    static name: string
    static $gtype: GObject.GType<DynamicTypeFactory>

    // Constructors of Gst-1.0.Gst.DynamicTypeFactory

    constructor(config?: DynamicTypeFactory_ConstructProps) 
    _init(config?: DynamicTypeFactory_ConstructProps): void
    static load(factoryname: string): GObject.GType
}

interface Element_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `no-more-pads`
 */
interface Element_NoMorePadsSignalCallback {
    ($obj: Element): void
}

/**
 * Signal callback interface for `pad-added`
 */
interface Element_PadAddedSignalCallback {
    ($obj: Element, new_pad: Pad): void
}

/**
 * Signal callback interface for `pad-removed`
 */
interface Element_PadRemovedSignalCallback {
    ($obj: Element, old_pad: Pad): void
}

interface Element {

    // Own fields of Gst-1.0.Gst.Element

    object: Object
    /**
     * Used to serialize execution of gst_element_set_state()
     * @field 
     */
    state_lock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     * @field 
     */
    state_cond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     * @field 
     */
    state_cookie: number
    /**
     * the target state of an element as set by the application
     * @field 
     */
    target_state: State
    /**
     * the current state of an element
     * @field 
     */
    current_state: State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     * @field 
     */
    next_state: State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     * @field 
     */
    pending_state: State
    /**
     * the last return value of an element state change
     * @field 
     */
    last_return: StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     * @field 
     */
    bus: Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     * @field 
     */
    clock: Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     * @field 
     */
    base_time: ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     * @field 
     */
    start_time: ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     * @field 
     */
    numpads: number
    /**
     * list of pads
     * @field 
     */
    pads: Pad[]
    /**
     * number of source pads of the element.
     * @field 
     */
    numsrcpads: number
    /**
     * list of source pads
     * @field 
     */
    srcpads: Pad[]
    /**
     * number of sink pads of the element.
     * @field 
     */
    numsinkpads: number
    /**
     * list of sink pads
     * @field 
     */
    sinkpads: Pad[]
    /**
     * updated whenever the a pad is added or removed
     * @field 
     */
    pads_cookie: number
    /**
     * list of contexts
     * @field 
     */
    contexts: Context[]

    // Owm methods of Gst-1.0.Gst.Element

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
    add_pad(pad: Pad): boolean
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
    call_async(func: ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    change_state(transition: StateChange): StateChangeReturn
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
    continue_state(ret: StateChangeReturn): StateChangeReturn
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
    foreach_pad(func: ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreach_sink_pad(func: ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreach_src_pad(func: ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    get_base_time(): ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    get_clock(): Clock | null
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
    get_compatible_pad(pad: Pad, caps: Caps | null): Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param context_type a name of a context to retrieve
     */
    get_context(context_type: string): Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param context_type a name of a context to retrieve
     */
    get_context_unlocked(context_type: string): Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    get_contexts(): Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    get_current_clock_time(): ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    get_current_running_time(): ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    get_factory(): ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(name: string): PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    get_pad_template_list(): PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    get_request_pad(name: string): Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    get_start_time(): ClockTime
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
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    get_static_pad(name: string): Pad | null
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
    iterate_pads(): Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_sink_pads(): Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_src_pads(): Iterator
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
    link(dest: Element): boolean
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
    link_filtered(dest: Element, filter: Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    link_pads(srcpadname: string | null, dest: Element, destpadname: string | null): boolean
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
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname: string | null, filter: Caps | null): boolean
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
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
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
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
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
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
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
    post_message(message: Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provide_clock(): Clock | null
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
    query(query: Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
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
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
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
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
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
    release_request_pad(pad: Pad): void
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
    remove_pad(pad: Pad): boolean
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
    request_pad(templ: PadTemplate, name: string | null, caps: Caps | null): Pad | null
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
    request_pad_simple(name: string): Pad | null
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
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean
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
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
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
    send_event(event: Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_base_time(time: ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    set_bus(bus: Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    set_clock(clock: Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Context): void
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
    set_start_time(time: ClockTime): void
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
    set_state(state: State): StateChangeReturn
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
    unlink(dest: Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Element

    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @virtual 
     * @param transition the requested transition
     */
    vfunc_change_state(transition: StateChange): StateChangeReturn
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
     * @virtual 
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
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
     * @virtual 
     */
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Pad): void
    vfunc_pad_removed(pad: Pad): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @virtual 
     * @param message a #GstMessage to post
     */
    vfunc_post_message(message: Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     * @virtual 
     */
    vfunc_provide_clock(): Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     */
    vfunc_query(query: Query): boolean
    vfunc_release_pad(pad: Pad): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @virtual 
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    vfunc_request_new_pad(templ: PadTemplate, name: string | null, caps: Caps | null): Pad | null
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @virtual 
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Event): boolean
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @virtual 
     * @param bus the #GstBus to set.
     */
    vfunc_set_bus(bus: Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @virtual 
     * @param clock the #GstClock to set for the element.
     */
    vfunc_set_clock(clock: Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @virtual 
     * @param context the #GstContext to set.
     */
    vfunc_set_context(context: Context): void
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
     * @virtual 
     * @param state the element's new #GstState.
     */
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void

    // Own signals of Gst-1.0.Gst.Element

    connect(sigName: "no-more-pads", callback: Element_NoMorePadsSignalCallback): number
    connect_after(sigName: "no-more-pads", callback: Element_NoMorePadsSignalCallback): number
    emit(sigName: "no-more-pads", ...args: any[]): void
    connect(sigName: "pad-added", callback: Element_PadAddedSignalCallback): number
    connect_after(sigName: "pad-added", callback: Element_PadAddedSignalCallback): number
    emit(sigName: "pad-added", new_pad: Pad, ...args: any[]): void
    connect(sigName: "pad-removed", callback: Element_PadRemovedSignalCallback): number
    connect_after(sigName: "pad-removed", callback: Element_PadRemovedSignalCallback): number
    emit(sigName: "pad-removed", old_pad: Pad, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Element

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GstElement is the abstract base class needed to construct an element that
 * can be used in a GStreamer pipeline. Please refer to the plugin writers
 * guide for more information on creating #GstElement subclasses.
 * 
 * The name of a #GstElement can be get with gst_element_get_name() and set with
 * gst_element_set_name().  For speed, GST_ELEMENT_NAME() can be used in the
 * core when using the appropriate locking. Do not use this in plug-ins or
 * applications in order to retain ABI compatibility.
 * 
 * Elements can have pads (of the type #GstPad).  These pads link to pads on
 * other elements.  #GstBuffer flow between these linked pads.
 * A #GstElement has a #GList of #GstPad structures for all their input (or sink)
 * and output (or source) pads.
 * Core and plug-in writers can add and remove pads with gst_element_add_pad()
 * and gst_element_remove_pad().
 * 
 * An existing pad of an element can be retrieved by name with
 * gst_element_get_static_pad(). A new dynamic pad can be created using
 * gst_element_request_pad() with a #GstPadTemplate.
 * An iterator of all pads can be retrieved with gst_element_iterate_pads().
 * 
 * Elements can be linked through their pads.
 * If the link is straightforward, use the gst_element_link()
 * convenience function to link two elements, or gst_element_link_many()
 * for more elements in a row.
 * Use gst_element_link_filtered() to link two elements constrained by
 * a specified set of #GstCaps.
 * For finer control, use gst_element_link_pads() and
 * gst_element_link_pads_filtered() to specify the pads to link on
 * each element by name.
 * 
 * Each element has a state (see #GstState).  You can get and set the state
 * of an element with gst_element_get_state() and gst_element_set_state().
 * Setting a state triggers a #GstStateChange. To get a string representation
 * of a #GstState, use gst_element_state_get_name().
 * 
 * You can get and set a #GstClock on an element using gst_element_get_clock()
 * and gst_element_set_clock().
 * Some elements can provide a clock for the pipeline if
 * the #GST_ELEMENT_FLAG_PROVIDE_CLOCK flag is set. With the
 * gst_element_provide_clock() method one can retrieve the clock provided by
 * such an element.
 * Not all elements require a clock to operate correctly. If the
 * #GST_ELEMENT_FLAG_REQUIRE_CLOCK() flag is set, a clock should be set on the
 * element with gst_element_set_clock().
 * 
 * Note that clock selection and distribution is normally handled by the
 * toplevel #GstPipeline so the clock functions are only to be used in very
 * specific situations.
 * @class 
 */
class Element extends Object {

    // Own properties of Gst-1.0.Gst.Element

    static name: string
    static $gtype: GObject.GType<Element>

    // Constructors of Gst-1.0.Gst.Element

    constructor(config?: Element_ConstructProps) 
    _init(config?: Element_ConstructProps): void
    /**
     * Creates an element for handling the given URI.
     * @param type Whether to create a source or a sink
     * @param uri URI to create an element for
     * @param elementname Name of created element, can be %NULL.
     */
    static make_from_uri(type: URIType, uri: string, elementname: string | null): Element
    /**
     * Create a new elementfactory capable of instantiating objects of the
     * `type` and add the factory to `plugin`.
     * @param plugin #GstPlugin to register the element with, or %NULL for     a static element.
     * @param name name of elements of this type
     * @param rank rank of element (higher rank means more importance when autoplugging)
     * @param type GType of element to register
     */
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.GType): boolean
    /**
     * Gets a string representing the given state change result.
     * @param state_ret a #GstStateChangeReturn to get the name of.
     */
    static state_change_return_get_name(state_ret: StateChangeReturn): string
    /**
     * Gets a string representing the given state.
     * @param state a #GstState to get the name of.
     */
    static state_get_name(state: State): string
    /**
     * Marks `type` as "documentation should be skipped".
     * Can be useful for dynamically registered element to be excluded from
     * plugin documentation system.
     * 
     * Example:
     * ```c
     * GType my_type;
     * GTypeInfo my_type_info;
     * 
     * // Fill "my_type_info"
     * ...
     * 
     * my_type = g_type_register_static (GST_TYPE_MY_ELEMENT, "my-type-name",
     *    &my_type_info, 0);
     * gst_element_type_set_skip_documentation (my_type);
     * gst_element_register (plugin, "my-plugin-feature-name", rank, my_type);
     * ```
     * @param type a #GType of element
     */
    static type_set_skip_documentation(type: GObject.GType): void
}

interface ElementFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface ElementFactory {

    // Owm methods of Gst-1.0.Gst.ElementFactory

    /**
     * Checks if the factory can sink all possible capabilities.
     * @param caps the caps to check
     */
    can_sink_all_caps(caps: Caps): boolean
    /**
     * Checks if the factory can sink any possible capability.
     * @param caps the caps to check
     */
    can_sink_any_caps(caps: Caps): boolean
    /**
     * Checks if the factory can src all possible capabilities.
     * @param caps the caps to check
     */
    can_src_all_caps(caps: Caps): boolean
    /**
     * Checks if the factory can src any possible capability.
     * @param caps the caps to check
     */
    can_src_any_caps(caps: Caps): boolean
    /**
     * Create a new element of the type defined by the given elementfactory.
     * It will be given the name supplied, since all elements require a name as
     * their first argument.
     * @param name name of new element, or %NULL to automatically create    a unique name
     */
    create(name: string | null): Element | null
    /**
     * Create a new element of the type defined by the given elementfactory.
     * The supplied list of properties, will be passed at object construction.
     * @param names array of properties names
     * @param values array of associated properties values
     */
    create_with_properties(names: string[] | null, values: any[] | null): Element | null
    /**
     * Get the #GType for elements managed by this factory. The type can
     * only be retrieved if the element factory is loaded, which can be
     * assured with gst_plugin_feature_load().
     */
    get_element_type(): GObject.GType
    /**
     * Get the metadata on `factory` with `key`.
     * @param key a key
     */
    get_metadata(key: string): string | null
    /**
     * Get the available keys for the metadata on `factory`.
     */
    get_metadata_keys(): string[] | null
    /**
     * Gets the number of pad_templates in this factory.
     */
    get_num_pad_templates(): number
    /**
     * Queries whether registered element managed by `factory` needs to
     * be excluded from documentation system or not.
     */
    get_skip_documentation(): boolean
    /**
     * Gets the #GList of #GstStaticPadTemplate for this factory.
     */
    get_static_pad_templates(): StaticPadTemplate[]
    /**
     * Gets a %NULL-terminated array of protocols this element supports or %NULL if
     * no protocols are supported. You may not change the contents of the returned
     * array, as it is still owned by the element factory. Use g_strdupv() to
     * make a copy of the protocol string array if you need to.
     */
    get_uri_protocols(): string[]
    /**
     * Gets the type of URIs the element supports or #GST_URI_UNKNOWN if none.
     */
    get_uri_type(): URIType
    /**
     * Check if `factory` implements the interface with name `interfacename`.
     * @param interfacename an interface name
     */
    has_interface(interfacename: string): boolean
    /**
     * Check if `factory` is of the given types.
     * @param type a #GstElementFactoryListType
     */
    list_is_type(type: ElementFactoryListType): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.ElementFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstElementFactory is used to create instances of elements. A
 * GstElementFactory can be added to a #GstPlugin as it is also a
 * #GstPluginFeature.
 * 
 * Use the gst_element_factory_find() and gst_element_factory_create()
 * functions to create element instances or use gst_element_factory_make() as a
 * convenient shortcut.
 * 
 * The following code example shows you how to create a GstFileSrc element.
 * 
 * ## Using an element factory
 * 
 * ```c
 *   #include <gst/gst.h>
 * 
 *   GstElement *src;
 *   GstElementFactory *srcfactory;
 * 
 *   gst_init (&argc, &argv);
 * 
 *   srcfactory = gst_element_factory_find ("filesrc");
 *   g_return_if_fail (srcfactory != NULL);
 *   src = gst_element_factory_create (srcfactory, "src");
 *   g_return_if_fail (src != NULL);
 *   ...
 * ```
 * 
 * @class 
 */
class ElementFactory extends PluginFeature {

    // Own properties of Gst-1.0.Gst.ElementFactory

    static name: string
    static $gtype: GObject.GType<ElementFactory>

    // Constructors of Gst-1.0.Gst.ElementFactory

    constructor(config?: ElementFactory_ConstructProps) 
    _init(config?: ElementFactory_ConstructProps): void
    /**
     * Search for an element factory of the given name. Refs the returned
     * element factory; caller is responsible for unreffing.
     * @param name name of factory to find
     */
    static find(name: string): ElementFactory | null
    /**
     * Filter out all the elementfactories in `list` that can handle `caps` in
     * the given direction.
     * 
     * If `subsetonly` is %TRUE, then only the elements whose pads templates
     * are a complete superset of `caps` will be returned. Else any element
     * whose pad templates caps can intersect with `caps` will be returned.
     * @param list a #GList of     #GstElementFactory to filter
     * @param caps a #GstCaps
     * @param direction a #GstPadDirection to filter on
     * @param subsetonly whether to filter on caps subsets or not.
     */
    static list_filter(list: ElementFactory[], caps: Caps, direction: PadDirection, subsetonly: boolean): ElementFactory[]
    /**
     * Get a list of factories that match the given `type`. Only elements
     * with a rank greater or equal to `minrank` will be returned.
     * The list of factories is returned by decreasing rank.
     * @param type a #GstElementFactoryListType
     * @param minrank Minimum rank
     */
    static list_get_elements(type: ElementFactoryListType, minrank: Rank): ElementFactory[]
    /**
     * Create a new element of the type defined by the given element factory.
     * If name is %NULL, then the element will receive a guaranteed unique name,
     * consisting of the element factory name and a number.
     * If name is given, it will be given the name supplied.
     * @param factoryname a named factory to instantiate
     * @param name name of new element, or %NULL to automatically create    a unique name
     */
    static make(factoryname: string, name: string | null): Element | null
    /**
     * Create a new element of the type defined by the given elementfactory.
     * The supplied list of properties, will be passed at object construction.
     * @param factoryname a named factory to instantiate
     * @param names array of properties names
     * @param values array of associated properties values
     */
    static make_with_properties(factoryname: string, names: string[] | null, values: any[] | null): Element | null
}

interface FlagSet {
}

/**
 * A fundamental type that describes a 32-bit flag bitfield, with 32-bit
 * mask indicating which of the bits in the field are explicitly set.
 * @class 
 */
class FlagSet {

    // Own properties of Gst-1.0.Gst.FlagSet

    static name: string

    // Constructors of Gst-1.0.Gst.FlagSet

    /**
     * Create a new sub-class of #GST_TYPE_FLAG_SET
     * which will pretty-print the human-readable flags
     * when serializing, for easier debugging.
     * @param flags_type a #GType of a #G_TYPE_FLAGS type.
     */
    static register(flags_type: GObject.GType): GObject.GType
}

interface Fraction {
}

/**
 * A fundamental type that describes a fraction of an integer numerator
 * over an integer denominator
 * @class 
 */
class Fraction {

    // Own properties of Gst-1.0.Gst.Fraction

    static name: string
}

interface FractionRange {
}

/**
 * A fundamental type that describes a #GstFractionRange range
 * @class 
 */
class FractionRange {

    // Own properties of Gst-1.0.Gst.FractionRange

    static name: string
}

interface GhostPad_ConstructProps extends ProxyPad_ConstructProps {
}

interface GhostPad {

    // Conflicting properties

    object: any

    // Own fields of Gst-1.0.Gst.GhostPad

    pad: ProxyPad

    // Owm methods of Gst-1.0.Gst.GhostPad

    /**
     * Finish initialization of a newly allocated ghost pad.
     * 
     * This function is most useful in language bindings and when subclassing
     * #GstGhostPad; plugin and application developers normally will not call this
     * function. Call this function directly after a call to g_object_new
     * (GST_TYPE_GHOST_PAD, "direction", `dir,` ..., NULL).
     */
    construct(): boolean
    /**
     * Get the target pad of `gpad`. Unref target pad after usage.
     */
    get_target(): Pad | null
    /**
     * Set the new target of the ghostpad `gpad`. Any existing target
     * is unlinked and links to the new target are established. if `newtarget` is
     * %NULL the target will be cleared.
     * @param newtarget the new pad target
     */
    set_target(newtarget: Pad | null): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.GhostPad

    connect(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GhostPads are useful when organizing pipelines with #GstBin like elements.
 * The idea here is to create hierarchical element graphs. The bin element
 * contains a sub-graph. Now one would like to treat the bin-element like any
 * other #GstElement. This is where GhostPads come into play. A GhostPad acts as
 * a proxy for another pad. Thus the bin can have sink and source ghost-pads
 * that are associated with sink and source pads of the child elements.
 * 
 * If the target pad is known at creation time, gst_ghost_pad_new() is the
 * function to use to get a ghost-pad. Otherwise one can use gst_ghost_pad_new_no_target()
 * to create the ghost-pad and use gst_ghost_pad_set_target() to establish the
 * association later on.
 * 
 * Note that GhostPads add overhead to the data processing of a pipeline.
 * @class 
 */
class GhostPad extends ProxyPad {

    // Own properties of Gst-1.0.Gst.GhostPad

    static name: string
    static $gtype: GObject.GType<GhostPad>

    // Constructors of Gst-1.0.Gst.GhostPad

    constructor(config?: GhostPad_ConstructProps) 
    /**
     * Create a new ghostpad with `target` as the target. The direction will be taken
     * from the target pad. `target` must be unlinked.
     * 
     * Will ref the target.
     * @constructor 
     * @param name the name of the new pad, or %NULL to assign a default name
     * @param target the pad to ghost.
     */
    constructor(name: string | null, target: Pad) 
    /**
     * Create a new ghostpad with `target` as the target. The direction will be taken
     * from the target pad. `target` must be unlinked.
     * 
     * Will ref the target.
     * @constructor 
     * @param name the name of the new pad, or %NULL to assign a default name
     * @param target the pad to ghost.
     */
    static new(name: string | null, target: Pad): GhostPad

    // Overloads of new

    /**
     * Creates a new pad with the given name in the given direction.
     * If name is %NULL, a guaranteed unique name (across all pads)
     * will be assigned.
     * This function makes a copy of the name so you can safely free the name.
     * @constructor 
     * @param name the name of the new pad.
     * @param direction the #GstPadDirection of the pad.
     */
    static new(name: string | null, direction: PadDirection): Pad
    /**
     * Create a new ghostpad with `target` as the target. The direction will be taken
     * from the target pad. The template used on the ghostpad will be `template`.
     * 
     * Will ref the target.
     * @constructor 
     * @param name the name of the new pad, or %NULL to assign a default name.
     * @param target the pad to ghost.
     * @param templ the #GstPadTemplate to use on the ghostpad.
     */
    static new_from_template(name: string | null, target: Pad, templ: PadTemplate): GhostPad

    // Overloads of new_from_template

    /**
     * Creates a new pad with the given name from the given template.
     * If name is %NULL, a guaranteed unique name (across all pads)
     * will be assigned.
     * This function makes a copy of the name so you can safely free the name.
     * @constructor 
     * @param templ the pad template to use
     * @param name the name of the pad
     */
    static new_from_template(templ: PadTemplate, name: string | null): Pad
    /**
     * Create a new ghostpad without a target with the given direction.
     * A target can be set on the ghostpad later with the
     * gst_ghost_pad_set_target() function.
     * 
     * The created ghostpad will not have a padtemplate.
     * @constructor 
     * @param name the name of the new pad, or %NULL to assign a default name.
     * @param dir the direction of the ghostpad
     */
    static new_no_target(name: string | null, dir: PadDirection): GhostPad
    /**
     * Create a new ghostpad based on `templ,` without setting a target. The
     * direction will be taken from the `templ`.
     * @constructor 
     * @param name the name of the new pad, or %NULL to assign a default name
     * @param templ the #GstPadTemplate to create the ghostpad from.
     */
    static new_no_target_from_template(name: string | null, templ: PadTemplate): GhostPad
    _init(config?: GhostPad_ConstructProps): void
    /**
     * Invoke the default activate mode function of a ghost pad.
     * @param pad the #GstPad to activate or deactivate.
     * @param parent the parent of `pad` or %NULL
     * @param mode the requested activation mode
     * @param active whether the pad should be active or not.
     */
    static activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
    /**
     * Invoke the default activate mode function of a proxy pad that is
     * owned by a ghost pad.
     * @param pad the #GstPad to activate or deactivate.
     * @param parent the parent of `pad` or %NULL
     * @param mode the requested activation mode
     * @param active whether the pad should be active or not.
     */
    static internal_activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
}

interface Int64Range {
}

/**
 * A fundamental type that describes a #gint64 range
 * @class 
 */
class Int64Range {

    // Own properties of Gst-1.0.Gst.Int64Range

    static name: string
}

interface IntRange {
}

/**
 * A fundamental type that describes a #gint range
 * @class 
 */
class IntRange {

    // Own properties of Gst-1.0.Gst.IntRange

    static name: string
}

interface Object_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Object

    name?: string | null
    /**
     * The parent of the object. Please note, that when changing the 'parent'
     * property, we don't emit #GObject::notify and #GstObject::deep-notify
     * signals due to locking issues. In some cases one can use
     * #GstBin::element-added or #GstBin::element-removed signals on the parent to
     * achieve a similar effect.
     */
    parent?: Object | null
}

/**
 * Signal callback interface for `deep-notify`
 */
interface Object_DeepNotifySignalCallback {
    ($obj: Object, prop_object: Object, prop: GObject.ParamSpec): void
}

interface Object {

    // Own fields of Gst-1.0.Gst.Object

    object: GObject.InitiallyUnowned
    /**
     * object LOCK
     * @field 
     */
    // TODO fix conflict: lock: GLib.Mutex
    /**
     * The name of the object
     * @field 
     */
    name: string
    /**
     * this object's parent, weak ref
     * @field 
     */
    parent: Object
    /**
     * flags for this object
     * @field 
     */
    flags: number

    // Owm methods of Gst-1.0.Gst.Object

    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): ControlBinding | null
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
    get_control_rate(): ClockTime
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
    get_g_value_array(property_name: string, timestamp?: ClockTime, interval?: ClockTime, values?: any[]): boolean
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
    get_parent(): Object | null
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
    get_value(property_name: string, timestamp?: ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    ref(...args: any[]): any
    ref(...args: any[]): Object | GObject.Object | any
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: ControlBinding): boolean
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
    set_control_rate(control_rate: ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: ClockTime): boolean
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

    // Own virtual methods of Gst-1.0.Gst.Object

    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void

    // Own signals of Gst-1.0.Gst.Object

    connect(sigName: "deep-notify", callback: Object_DeepNotifySignalCallback): number
    connect_after(sigName: "deep-notify", callback: Object_DeepNotifySignalCallback): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Object

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstObject provides a root for the object hierarchy tree filed in by the
 * GStreamer library.  It is currently a thin wrapper on top of
 * #GInitiallyUnowned. It is an abstract class that is not very usable on its own.
 * 
 * #GstObject gives us basic refcounting, parenting functionality and locking.
 * Most of the functions are just extended for special GStreamer needs and can be
 * found under the same name in the base class of #GstObject which is #GObject
 * (e.g. g_object_ref() becomes gst_object_ref()).
 * 
 * Since #GstObject derives from #GInitiallyUnowned, it also inherits the
 * floating reference. Be aware that functions such as gst_bin_add() and
 * gst_element_add_pad() take ownership of the floating reference.
 * 
 * In contrast to #GObject instances, #GstObject adds a name property. The functions
 * gst_object_set_name() and gst_object_get_name() are used to set/get the name
 * of the object.
 * 
 * ## controlled properties
 * 
 * Controlled properties offers a lightweight way to adjust gobject properties
 * over stream-time. It works by using time-stamped value pairs that are queued
 * for element-properties. At run-time the elements continuously pull value
 * changes for the current stream-time.
 * 
 * What needs to be changed in a #GstElement?
 * Very little - it is just two steps to make a plugin controllable!
 * 
 *   * mark gobject-properties paramspecs that make sense to be controlled,
 *     by GST_PARAM_CONTROLLABLE.
 * 
 *   * when processing data (get, chain, loop function) at the beginning call
 *     gst_object_sync_values(element,timestamp).
 *     This will make the controller update all GObject properties that are
 *     under its control with the current values based on the timestamp.
 * 
 * What needs to be done in applications? Again it's not a lot to change.
 * 
 *   * create a #GstControlSource.
 *     csource = gst_interpolation_control_source_new ();
 *     g_object_set (csource, "mode", GST_INTERPOLATION_MODE_LINEAR, NULL);
 * 
 *   * Attach the #GstControlSource on the controller to a property.
 *     gst_object_add_control_binding (object, gst_direct_control_binding_new (object, "prop1", csource));
 * 
 *   * Set the control values
 *     gst_timed_value_control_source_set ((GstTimedValueControlSource *)csource,0 * GST_SECOND, value1);
 *     gst_timed_value_control_source_set ((GstTimedValueControlSource *)csource,1 * GST_SECOND, value2);
 * 
 *   * start your pipeline
 * @class 
 */
class Object extends GObject.InitiallyUnowned {

    // Own properties of Gst-1.0.Gst.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Gst-1.0.Gst.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
    /**
     * Checks to see if there is any object named `name` in `list`. This function
     * does not do any locking of any kind. You might want to protect the
     * provided list with the lock of the owner of the list. This function
     * will lock each #GstObject in the list to compare the name, so be
     * careful when passing a list with a locked object.
     * @param list a list of #GstObject to      check through
     * @param name the name to search for
     */
    static check_uniqueness(list: Object[], name: string): boolean
    /**
     * A default deep_notify signal callback for an object. The user data
     * should contain a pointer to an array of strings that should be excluded
     * from the notify. The default handler will print the new value of the property
     * using g_print.
     * 
     * MT safe. This function grabs and releases `object'`s LOCK for getting its
     *          path string.
     * @param object the #GObject that signalled the notify.
     * @param orig a #GstObject that initiated the notify.
     * @param pspec a #GParamSpec of the property.
     * @param excluded_props      a set of user-specified properties to exclude or %NULL to show     all changes.
     */
    static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[] | null): void
    /**
     * Atomically modifies a pointer to point to a new object.
     * The reference count of `oldobj` is decreased and the reference count of
     * `newobj` is increased.
     * 
     * Either `newobj` and the value pointed to by `oldobj` may be %NULL.
     * @param oldobj pointer to a place of     a #GstObject to replace
     * @param newobj a new #GstObject
     */
    static replace(oldobj: Object | null, newobj: Object | null): [ /* returnType */ boolean, /* oldobj */ Object | null ]
}

interface Pad_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Pad

    direction?: PadDirection | null
    /**
     * The offset that will be applied to the running time of the pad.
     */
    offset?: number | null
    template?: PadTemplate | null
}

/**
 * Signal callback interface for `linked`
 */
interface Pad_LinkedSignalCallback {
    ($obj: Pad, peer: Pad): void
}

/**
 * Signal callback interface for `unlinked`
 */
interface Pad_UnlinkedSignalCallback {
    ($obj: Pad, peer: Pad): void
}

interface Pad {

    // Own properties of Gst-1.0.Gst.Pad

    readonly caps: Caps
    /**
     * The offset that will be applied to the running time of the pad.
     */
    offset: number
    template: PadTemplate

    // Own fields of Gst-1.0.Gst.Pad

    object: Object
    /**
     * private data owned by the parent element
     * @field 
     */
    element_private: object
    /**
     * padtemplate for this pad
     * @field 
     */
    padtemplate: PadTemplate
    /**
     * the direction of the pad, cannot change after creating
     *             the pad.
     * @field 
     */
    direction: PadDirection

    // Owm methods of Gst-1.0.Gst.Pad

    /**
     * Activates or deactivates the given pad in `mode` via dispatching to the
     * pad's activatemodefunc. For use from within pad activation functions only.
     * 
     * If you don't know what this is, you probably don't want to call it.
     * @param mode the requested activation mode
     * @param active whether or not the pad should be active.
     */
    activate_mode(mode: PadMode, active: boolean): boolean
    /**
     * Be notified of different states of pads. The provided callback is called for
     * every state that matches `mask`.
     * 
     * Probes are called in groups: First GST_PAD_PROBE_TYPE_BLOCK probes are
     * called, then others, then finally GST_PAD_PROBE_TYPE_IDLE. The only
     * exception here are GST_PAD_PROBE_TYPE_IDLE probes that are called
     * immediately if the pad is already idle while calling gst_pad_add_probe().
     * In each of the groups, probes are called in the order in which they were
     * added.
     * @param mask the probe mask
     * @param callback #GstPadProbeCallback that will be called with notifications of           the pad state
     */
    add_probe(mask: PadProbeType, callback: PadProbeCallback): number
    /**
     * Checks if the source pad and the sink pad are compatible so they can be
     * linked.
     * @param sinkpad the sink #GstPad.
     */
    can_link(sinkpad: Pad): boolean
    /**
     * Chain a buffer to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If the buffer type is not acceptable for `pad` (as negotiated with a
     * preceding GST_EVENT_CAPS event), this function returns
     * #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chain function installed on `pad` (see
     * gst_pad_set_chain_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chain function.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     * @param buffer the #GstBuffer to send, return GST_FLOW_ERROR     if not.
     */
    chain(buffer: Buffer): FlowReturn
    /**
     * Chain a bufferlist to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If `pad` was not negotiated properly with a CAPS event, this function
     * returns #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chainlist function installed on `pad` (see
     * gst_pad_set_chain_list_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chainlist function.
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     * 
     * MT safe.
     * @param list the #GstBufferList to send, return GST_FLOW_ERROR     if not.
     */
    chain_list(list: BufferList): FlowReturn
    /**
     * Check and clear the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    check_reconfigure(): boolean
    /**
     * Creates a stream-id for the source #GstPad `pad` by combining the
     * upstream information with the optional `stream_id` of the stream
     * of `pad`. `pad` must have a parent #GstElement and which must have zero
     * or one sinkpad. `stream_id` can only be %NULL if the parent element
     * of `pad` has only a single source pad.
     * 
     * This function generates an unique stream-id by getting the upstream
     * stream-start event stream ID and appending `stream_id` to it. If the
     * element has no sinkpad it will generate an upstream stream-id by
     * doing an URI query on the element and in the worst case just uses
     * a random number. Source elements that don't implement the URI
     * handler interface should ideally generate a unique, deterministic
     * stream-id manually instead.
     * 
     * Since stream IDs are sorted alphabetically, any numbers in the
     * stream ID should be printed with a fixed number of characters,
     * preceded by 0's, such as by using the format \%03u instead of \%u.
     * @param parent Parent #GstElement of `pad`
     * @param stream_id The stream-id
     */
    create_stream_id(parent: Element, stream_id: string | null): string
    /**
     * Invokes the default event handler for the given pad.
     * 
     * The EOS event will pause the task associated with `pad` before it is forwarded
     * to all internally linked pads,
     * 
     * The event is sent to all pads internally linked to `pad`. This function
     * takes ownership of `event`.
     * @param parent the parent of `pad` or %NULL
     * @param event the #GstEvent to handle.
     */
    event_default(parent: Object | null, event: Event): boolean
    /**
     * Calls `forward` for all internally linked pads of `pad`. This function deals with
     * dynamically changing internal pads and will make sure that the `forward`
     * function is only called once for each pad.
     * 
     * When `forward` returns %TRUE, no further pads will be processed.
     * @param forward a #GstPadForwardFunction
     */
    forward(forward: PadForwardFunction): boolean
    /**
     * Gets the capabilities of the allowed media types that can flow through
     * `pad` and its peer.
     * 
     * The allowed capabilities is calculated as the intersection of the results of
     * calling gst_pad_query_caps() on `pad` and its peer. The caller owns a reference
     * on the resulting caps.
     */
    get_allowed_caps(): Caps | null
    /**
     * Gets the capabilities currently configured on `pad` with the last
     * #GST_EVENT_CAPS event.
     */
    get_current_caps(): Caps | null
    /**
     * Gets the direction of the pad. The direction of the pad is
     * decided at construction time so this function does not take
     * the LOCK.
     */
    get_direction(): PadDirection
    /**
     * Gets the private data of a pad.
     * No locking is performed in this function.
     */
    get_element_private(): object | null
    /**
     * Gets the #GstFlowReturn return from the last data passed by this pad.
     */
    get_last_flow_return(): FlowReturn
    /**
     * Get the offset applied to the running time of `pad`. `pad` has to be a source
     * pad.
     */
    get_offset(): number
    /**
     * Gets the template for `pad`.
     */
    get_pad_template(): PadTemplate | null
    /**
     * Gets the capabilities for `pad'`s template.
     */
    get_pad_template_caps(): Caps
    /**
     * Gets the parent of `pad,` cast to a #GstElement. If a `pad` has no parent or
     * its parent is not an element, return %NULL.
     */
    get_parent_element(): Element | null
    /**
     * Gets the peer of `pad`. This function refs the peer pad so
     * you need to unref it after use.
     */
    get_peer(): Pad | null
    /**
     * When `pad` is flushing this function returns #GST_FLOW_FLUSHING
     * immediately and `buffer` is %NULL.
     * 
     * Calls the getrange function of `pad,` see #GstPadGetRangeFunction for a
     * description of a getrange function. If `pad` has no getrange function
     * installed (see gst_pad_set_getrange_function()) this function returns
     * #GST_FLOW_NOT_SUPPORTED.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     * 
     * When this function returns any other result value than #GST_FLOW_OK, `buffer`
     * will be unchanged.
     * 
     * This is a lowlevel function. Usually gst_pad_pull_range() is used.
     * @param offset The start offset of the buffer
     * @param size The length of the buffer
     */
    get_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    /**
     * If there is a single internal link of the given pad, this function will
     * return it. Otherwise, it will return NULL.
     */
    get_single_internal_link(): Pad | null
    /**
     * Returns a new reference of the sticky event of type `event_type`
     * from the event.
     * @param event_type the #GstEventType that should be retrieved.
     * @param idx the index of the event
     */
    get_sticky_event(event_type: EventType, idx: number): Event | null
    /**
     * Returns the current #GstStream for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream().
     */
    get_stream(): Stream | null
    /**
     * Returns the current stream-id for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream_start().
     * 
     * The returned stream-id string should be treated as an opaque string, its
     * contents should not be interpreted.
     */
    get_stream_id(): string | null
    /**
     * Get `pad` task state. If no task is currently
     * set, #GST_TASK_STOPPED is returned.
     */
    get_task_state(): TaskState
    /**
     * Check if `pad` has caps set on it with a #GST_EVENT_CAPS event.
     */
    has_current_caps(): boolean
    /**
     * Query if a pad is active
     */
    is_active(): boolean
    /**
     * Checks if the pad is blocked or not. This function returns the
     * last requested state of the pad. It is not certain that the pad
     * is actually blocking at this point (see gst_pad_is_blocking()).
     */
    is_blocked(): boolean
    /**
     * Checks if the pad is blocking or not. This is a guaranteed state
     * of whether the pad is actually blocking on a #GstBuffer or a #GstEvent.
     */
    is_blocking(): boolean
    /**
     * Checks if a `pad` is linked to another pad or not.
     */
    is_linked(): boolean
    /**
     * Gets an iterator for the pads to which the given pad is linked to inside
     * of the parent element.
     * 
     * Each #GstPad element yielded by the iterator will have its refcount increased,
     * so unref after use.
     * 
     * Free-function: gst_iterator_free
     */
    iterate_internal_links(): Iterator | null
    /**
     * Iterate the list of pads to which the given pad is linked to inside of
     * the parent element.
     * This is the default handler, and thus returns an iterator of all of the
     * pads inside the parent element with opposite direction.
     * 
     * The caller must free this iterator after use with gst_iterator_free().
     * @param parent the parent of `pad` or %NULL
     */
    iterate_internal_links_default(parent: Object | null): Iterator | null
    /**
     * Links the source pad and the sink pad.
     * @param sinkpad the sink #GstPad to link.
     */
    link(sinkpad: Pad): PadLinkReturn
    /**
     * Links the source pad and the sink pad.
     * 
     * This variant of #gst_pad_link provides a more granular control on the
     * checks being done when linking. While providing some considerable speedups
     * the caller of this method must be aware that wrong usage of those flags
     * can cause severe issues. Refer to the documentation of #GstPadLinkCheck
     * for more information.
     * 
     * MT Safe.
     * @param sinkpad the sink #GstPad to link.
     * @param flags the checks to validate when linking
     */
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     * @param sink a #GstPad
     */
    link_maybe_ghosting(sink: Pad): boolean
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     * 
     * Calling gst_pad_link_maybe_ghosting_full() with
     * `flags` == %GST_PAD_LINK_CHECK_DEFAULT is the recommended way of linking
     * pads with safety checks applied.
     * @param sink a #GstPad
     * @param flags some #GstPadLinkCheck flags
     */
    link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean
    /**
     * Mark a pad for needing reconfiguration. The next call to
     * gst_pad_check_reconfigure() will return %TRUE after this call.
     */
    mark_reconfigure(): void
    /**
     * Check the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    needs_reconfigure(): boolean
    /**
     * Pause the task of `pad`. This function will also wait until the
     * function executed by the task is finished if this function is not
     * called from the task function.
     */
    pause_task(): boolean
    /**
     * Performs gst_pad_query() on the peer of `pad`.
     * 
     * The caller is responsible for both the allocation and deallocation of
     * the query structure.
     * @param query the #GstQuery to perform.
     */
    peer_query(query: Query): boolean
    /**
     * Check if the peer of `pad` accepts `caps`. If `pad` has no peer, this function
     * returns %TRUE.
     * @param caps a #GstCaps to check on the pad
     */
    peer_query_accept_caps(caps: Caps): boolean
    /**
     * Gets the capabilities of the peer connected to this pad. Similar to
     * gst_pad_query_caps().
     * 
     * When called on srcpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on sinkpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     * @param filter a #GstCaps filter, or %NULL.
     */
    peer_query_caps(filter: Caps | null): Caps
    /**
     * Queries the peer pad of a given sink pad to convert `src_val` in `src_format`
     * to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    peer_query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Queries the peer pad of a given sink pad for the total stream duration.
     * @param format the #GstFormat requested
     */
    peer_query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    /**
     * Queries the peer of a given sink pad for the stream position.
     * @param format the #GstFormat requested
     */
    peer_query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    /**
     * Checks if all internally linked pads of `pad` accepts the caps in `query` and
     * returns the intersection of the results.
     * 
     * This function is useful as a default accept caps query function for an element
     * that can handle any stream format, but requires caps that are acceptable for
     * all opposite pads.
     * @param query an ACCEPT_CAPS #GstQuery.
     */
    proxy_query_accept_caps(query: Query): boolean
    /**
     * Calls gst_pad_query_caps() for all internally linked pads of `pad` and returns
     * the intersection of the results.
     * 
     * This function is useful as a default caps query function for an element
     * that can handle any stream format, but requires all its pads to have
     * the same caps.  Two such elements are tee and adder.
     * @param query a CAPS #GstQuery.
     */
    proxy_query_caps(query: Query): boolean
    /**
     * Pulls a `buffer` from the peer pad or fills up a provided buffer.
     * 
     * This function will first trigger the pad block signal if it was
     * installed.
     * 
     * When `pad` is not linked #GST_FLOW_NOT_LINKED is returned else this
     * function returns the result of gst_pad_get_range() on the peer pad.
     * See gst_pad_get_range() for a list of return values and for the
     * semantics of the arguments of this function.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage. When this function
     * returns any other result value, `buffer` will still point to %NULL.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. When this function returns any other result value,
     * `buffer` will be unchanged. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     * @param offset The start offset of the buffer
     * @param size The length of the buffer
     */
    pull_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    /**
     * Pushes a buffer to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling gst_pad_chain() on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     * @param buffer the #GstBuffer to push returns GST_FLOW_ERROR     if not.
     */
    push(buffer: Buffer): FlowReturn
    /**
     * Sends the event to the peer of the given pad. This function is
     * mainly used by elements to send events to their peer
     * elements.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * @param event the #GstEvent to send to the pad.
     */
    push_event(event: Event): boolean
    /**
     * Pushes a buffer list to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling the chain function on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned. If the peer pad does not have any installed chainlist function
     * every group buffer of the list will be merged into a normal #GstBuffer and
     * chained via gst_pad_chain().
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     * @param list the #GstBufferList to push returns GST_FLOW_ERROR     if not.
     */
    push_list(list: BufferList): FlowReturn
    /**
     * Dispatches a query to a pad. The query should have been allocated by the
     * caller via one of the type-specific allocation functions. The element that
     * the pad belongs to is responsible for filling the query with an appropriate
     * response, which should then be parsed with a type-specific query parsing
     * function.
     * 
     * Again, the caller is responsible for both the allocation and deallocation of
     * the query structure.
     * 
     * Please also note that some queries might need a running pipeline to work.
     * @param query the #GstQuery to perform.
     */
    query(query: Query): boolean
    /**
     * Check if the given pad accepts the caps.
     * @param caps a #GstCaps to check on the pad
     */
    query_accept_caps(caps: Caps): boolean
    /**
     * Gets the capabilities this pad can produce or consume.
     * Note that this method doesn't necessarily return the caps set by sending a
     * gst_event_new_caps() - use gst_pad_get_current_caps() for that instead.
     * gst_pad_query_caps returns all possible caps a pad can operate with, using
     * the pad's CAPS query function, If the query fails, this function will return
     * `filter,` if not %NULL, otherwise ANY.
     * 
     * When called on sinkpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on srcpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     * 
     * Note that this function does not return writable #GstCaps, use
     * gst_caps_make_writable() before modifying the caps.
     * @param filter suggested #GstCaps, or %NULL
     */
    query_caps(filter: Caps | null): Caps
    /**
     * Queries a pad to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Invokes the default query handler for the given pad.
     * The query is sent to all pads internally linked to `pad`. Note that
     * if there are many possible sink pads that are internally linked to
     * `pad,` only one will be sent the query.
     * Multi-sinkpad elements should implement custom query handlers.
     * @param parent the parent of `pad` or %NULL
     * @param query the #GstQuery to handle.
     */
    query_default(parent: Object | null, query: Query): boolean
    /**
     * Queries a pad for the total stream duration.
     * @param format the #GstFormat requested
     */
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    /**
     * Queries a pad for the stream position.
     * @param format the #GstFormat requested
     */
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    /**
     * Remove the probe with `id` from `pad`.
     * 
     * MT safe.
     * @param id the probe id to remove
     */
    remove_probe(id: number): void
    /**
     * Sends the event to the pad. This function can be used
     * by applications to send events in the pipeline.
     * 
     * If `pad` is a source pad, `event` should be an upstream event. If `pad` is a
     * sink pad, `event` should be a downstream event. For example, you would not
     * send a #GST_EVENT_EOS on a src pad; EOS events only propagate downstream.
     * Furthermore, some downstream events have to be serialized with data flow,
     * like EOS, while some can travel out-of-band, like #GST_EVENT_FLUSH_START. If
     * the event needs to be serialized with data flow, this function will take the
     * pad's stream lock while calling its event function.
     * 
     * To find out whether an event type is upstream, downstream, or downstream and
     * serialized, see #GstEventTypeFlags, gst_event_type_get_flags(),
     * #GST_EVENT_IS_UPSTREAM, #GST_EVENT_IS_DOWNSTREAM, and
     * #GST_EVENT_IS_SERIALIZED. Note that in practice that an application or
     * plugin doesn't need to bother itself with this information; the core handles
     * all necessary locks and checks.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * @param event the #GstEvent to send to the pad.
     */
    send_event(event: Event): boolean
    /**
     * Sets the given activate function for `pad`. The activate function will
     * dispatch to gst_pad_activate_mode() to perform the actual activation.
     * Only makes sense to set on sink pads.
     * 
     * Call this function if your sink pad can start a pull-based task.
     * @param activate the #GstPadActivateFunction to set.
     */
    set_activate_function_full(activate: PadActivateFunction): void
    /**
     * Sets the given activate_mode function for the pad. An activate_mode function
     * prepares the element for data passing.
     * @param activatemode the #GstPadActivateModeFunction to set.
     */
    set_activatemode_function_full(activatemode: PadActivateModeFunction): void
    /**
     * Activates or deactivates the given pad.
     * Normally called from within core state change functions.
     * 
     * If `active,` makes sure the pad is active. If it is already active, either in
     * push or pull mode, just return. Otherwise dispatches to the pad's activate
     * function to perform the actual activation.
     * 
     * If not `active,` calls gst_pad_activate_mode() with the pad's current mode
     * and a %FALSE argument.
     * @param active whether or not the pad should be active.
     */
    set_active(active: boolean): boolean
    /**
     * Sets the given chain function for the pad. The chain function is called to
     * process a #GstBuffer input buffer. see #GstPadChainFunction for more details.
     * @param chain the #GstPadChainFunction to set.
     */
    set_chain_function_full(chain: PadChainFunction): void
    /**
     * Sets the given chain list function for the pad. The chainlist function is
     * called to process a #GstBufferList input buffer list. See
     * #GstPadChainListFunction for more details.
     * @param chainlist the #GstPadChainListFunction to set.
     */
    set_chain_list_function_full(chainlist: PadChainListFunction): void
    /**
     * Set the given private data gpointer on the pad.
     * This function can only be used by the element that owns the pad.
     * No locking is performed in this function.
     * @param priv The private data to attach to the pad.
     */
    set_element_private(priv: object | null): void
    /**
     * Sets the given event handler for the pad.
     * @param event the #GstPadEventFullFunction to set.
     */
    set_event_full_function_full(event: PadEventFullFunction): void
    /**
     * Sets the given event handler for the pad.
     * @param event the #GstPadEventFunction to set.
     */
    set_event_function_full(event: PadEventFunction): void
    /**
     * Sets the given getrange function for the pad. The getrange function is
     * called to produce a new #GstBuffer to start the processing pipeline. see
     * #GstPadGetRangeFunction for a description of the getrange function.
     * @param get the #GstPadGetRangeFunction to set.
     */
    set_getrange_function_full(get: PadGetRangeFunction): void
    /**
     * Sets the given internal link iterator function for the pad.
     * @param iterintlink the #GstPadIterIntLinkFunction to set.
     */
    set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction): void
    /**
     * Sets the given link function for the pad. It will be called when
     * the pad is linked with another pad.
     * 
     * The return value #GST_PAD_LINK_OK should be used when the connection can be
     * made.
     * 
     * The return value #GST_PAD_LINK_REFUSED should be used when the connection
     * cannot be made for some reason.
     * 
     * If `link` is installed on a source pad, it should call the #GstPadLinkFunction
     * of the peer sink pad, if present.
     * @param link the #GstPadLinkFunction to set.
     */
    set_link_function_full(link: PadLinkFunction): void
    /**
     * Set the offset that will be applied to the running time of `pad`.
     * @param offset the offset
     */
    set_offset(offset: number): void
    /**
     * Set the given query function for the pad.
     * @param query the #GstPadQueryFunction to set.
     */
    set_query_function_full(query: PadQueryFunction): void
    /**
     * Sets the given unlink function for the pad. It will be called
     * when the pad is unlinked.
     * 
     * Note that the pad's lock is already held when the unlink
     * function is called, so most pad functions cannot be called
     * from within the callback.
     * @param unlink the #GstPadUnlinkFunction to set.
     */
    set_unlink_function_full(unlink: PadUnlinkFunction): void
    /**
     * Starts a task that repeatedly calls `func` with `user_data`. This function
     * is mostly used in pad activation functions to start the dataflow.
     * The #GST_PAD_STREAM_LOCK of `pad` will automatically be acquired
     * before `func` is called.
     * @param func the task function to call
     */
    start_task(func: TaskFunction): boolean
    /**
     * Iterates all sticky events on `pad` and calls `foreach_func` for every
     * event. If `foreach_func` returns %FALSE the iteration is immediately stopped.
     * @param foreach_func the #GstPadStickyEventsForeachFunction that                should be called for every event.
     */
    sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction): void
    /**
     * Stop the task of `pad`. This function will also make sure that the
     * function executed by the task will effectively stop if not called
     * from the GstTaskFunction.
     * 
     * This function will deadlock if called from the GstTaskFunction of
     * the task. Use gst_task_pause() instead.
     * 
     * Regardless of whether the pad has a task, the stream lock is acquired and
     * released so as to ensure that streaming through this pad has finished.
     */
    stop_task(): boolean
    /**
     * Store the sticky `event` on `pad`
     * @param event a #GstEvent
     */
    store_sticky_event(event: Event): FlowReturn
    /**
     * Unlinks the source pad from the sink pad. Will emit the #GstPad::unlinked
     * signal on both pads.
     * @param sinkpad the sink #GstPad to unlink.
     */
    unlink(sinkpad: Pad): boolean
    /**
     * A helper function you can use that sets the FIXED_CAPS flag
     * This way the default CAPS query will always return the negotiated caps
     * or in case the pad is not negotiated, the padtemplate caps.
     * 
     * The negotiated caps are the caps of the last CAPS event that passed on the
     * pad. Use this function on a pad that, once it negotiated to a CAPS, cannot
     * be renegotiated to something else.
     */
    use_fixed_caps(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.Pad

    vfunc_linked(peer: Pad): void
    vfunc_unlinked(peer: Pad): void

    // Own signals of Gst-1.0.Gst.Pad

    connect(sigName: "linked", callback: Pad_LinkedSignalCallback): number
    connect_after(sigName: "linked", callback: Pad_LinkedSignalCallback): number
    emit(sigName: "linked", peer: Pad, ...args: any[]): void
    connect(sigName: "unlinked", callback: Pad_UnlinkedSignalCallback): number
    connect_after(sigName: "unlinked", callback: Pad_UnlinkedSignalCallback): number
    emit(sigName: "unlinked", peer: Pad, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Pad

    connect(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstElement is linked to other elements via "pads", which are extremely
 * light-weight generic link points.
 * 
 * Pads have a #GstPadDirection, source pads produce data, sink pads consume
 * data.
 * 
 * Pads are typically created from a #GstPadTemplate with
 * gst_pad_new_from_template() and are then added to a #GstElement. This usually
 * happens when the element is created but it can also happen dynamically based
 * on the data that the element is processing or based on the pads that the
 * application requests.
 * 
 * Pads without pad templates can be created with gst_pad_new(),
 * which takes a direction and a name as an argument.  If the name is %NULL,
 * then a guaranteed unique name will be assigned to it.
 * 
 * A #GstElement creating a pad will typically use the various
 * gst_pad_set_*_function\() calls to register callbacks for events, queries or
 * dataflow on the pads.
 * 
 * gst_pad_get_parent() will retrieve the #GstElement that owns the pad.
 * 
 * After two pads are retrieved from an element by gst_element_get_static_pad(),
 * the pads can be linked with gst_pad_link(). (For quick links,
 * you can also use gst_element_link(), which will make the obvious
 * link for you if it's straightforward.). Pads can be unlinked again with
 * gst_pad_unlink(). gst_pad_get_peer() can be used to check what the pad is
 * linked to.
 * 
 * Before dataflow is possible on the pads, they need to be activated with
 * gst_pad_set_active().
 * 
 * gst_pad_query() and gst_pad_peer_query() can be used to query various
 * properties of the pad and the stream.
 * 
 * To send a #GstEvent on a pad, use gst_pad_send_event() and
 * gst_pad_push_event(). Some events will be sticky on the pad, meaning that
 * after they pass on the pad they can be queried later with
 * gst_pad_get_sticky_event() and gst_pad_sticky_events_foreach().
 * gst_pad_get_current_caps() and gst_pad_has_current_caps() are convenience
 * functions to query the current sticky CAPS event on a pad.
 * 
 * GstElements will use gst_pad_push() and gst_pad_pull_range() to push out
 * or pull in a buffer.
 * 
 * The dataflow, events and queries that happen on a pad can be monitored with
 * probes that can be installed with gst_pad_add_probe(). gst_pad_is_blocked()
 * can be used to check if a block probe is installed on the pad.
 * gst_pad_is_blocking() checks if the blocking probe is currently blocking the
 * pad. gst_pad_remove_probe() is used to remove a previously installed probe
 * and unblock blocking probes if any.
 * 
 * Pad have an offset that can be retrieved with gst_pad_get_offset(). This
 * offset will be applied to the running_time of all data passing over the pad.
 * gst_pad_set_offset() can be used to change the offset.
 * 
 * Convenience functions exist to start, pause and stop the task on a pad with
 * gst_pad_start_task(), gst_pad_pause_task() and gst_pad_stop_task()
 * respectively.
 * @class 
 */
class Pad extends Object {

    // Own properties of Gst-1.0.Gst.Pad

    static name: string
    static $gtype: GObject.GType<Pad>

    // Constructors of Gst-1.0.Gst.Pad

    constructor(config?: Pad_ConstructProps) 
    /**
     * Creates a new pad with the given name in the given direction.
     * If name is %NULL, a guaranteed unique name (across all pads)
     * will be assigned.
     * This function makes a copy of the name so you can safely free the name.
     * @constructor 
     * @param name the name of the new pad.
     * @param direction the #GstPadDirection of the pad.
     */
    constructor(name: string | null, direction: PadDirection) 
    /**
     * Creates a new pad with the given name in the given direction.
     * If name is %NULL, a guaranteed unique name (across all pads)
     * will be assigned.
     * This function makes a copy of the name so you can safely free the name.
     * @constructor 
     * @param name the name of the new pad.
     * @param direction the #GstPadDirection of the pad.
     */
    static new(name: string | null, direction: PadDirection): Pad
    /**
     * Creates a new pad with the given name from the given static template.
     * If name is %NULL, a guaranteed unique name (across all pads)
     * will be assigned.
     * This function makes a copy of the name so you can safely free the name.
     * @constructor 
     * @param templ the #GstStaticPadTemplate to use
     * @param name the name of the pad
     */
    static new_from_static_template(templ: StaticPadTemplate, name: string): Pad
    /**
     * Creates a new pad with the given name from the given template.
     * If name is %NULL, a guaranteed unique name (across all pads)
     * will be assigned.
     * This function makes a copy of the name so you can safely free the name.
     * @constructor 
     * @param templ the pad template to use
     * @param name the name of the pad
     */
    static new_from_template(templ: PadTemplate, name: string | null): Pad
    _init(config?: Pad_ConstructProps): void
    /**
     * Gets a string representing the given pad-link return.
     * @param ret a #GstPadLinkReturn to get the name of.
     */
    static link_get_name(ret: PadLinkReturn): string
}

interface PadTemplate_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.PadTemplate

    /**
     * The capabilities of the pad described by the pad template.
     */
    caps?: Caps | null
    /**
     * The direction of the pad described by the pad template.
     */
    direction?: PadDirection | null
    /**
     * The type of the pad described by the pad template.
     */
    gtype?: GObject.GType | null
    /**
     * The name template of the pad template.
     */
    name_template?: string | null
    /**
     * When the pad described by the pad template will become available.
     */
    presence?: PadPresence | null
}

/**
 * Signal callback interface for `pad-created`
 */
interface PadTemplate_PadCreatedSignalCallback {
    ($obj: PadTemplate, pad: Pad): void
}

interface PadTemplate {

    // Own properties of Gst-1.0.Gst.PadTemplate

    /**
     * The type of the pad described by the pad template.
     */
    readonly gtype: GObject.GType

    // Own fields of Gst-1.0.Gst.PadTemplate

    object: Object
    name_template: string
    direction: PadDirection
    presence: PadPresence
    caps: Caps

    // Owm methods of Gst-1.0.Gst.PadTemplate

    /**
     * Gets the capabilities of the pad template.
     */
    get_caps(): Caps
    /**
     * See gst_pad_template_set_documentation_caps().
     */
    get_documentation_caps(): Caps
    /**
     * Emit the pad-created signal for this template when created by this pad.
     * @param pad the #GstPad that created it
     */
    pad_created(pad: Pad): void
    /**
     * Certain elements will dynamically construct the caps of their
     * pad templates. In order not to let environment-specific information
     * into the documentation, element authors should use this method to
     * expose "stable" caps to the reader.
     * @param caps the documented capabilities
     */
    set_documentation_caps(caps: Caps): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.PadTemplate

    /**
     * Emit the pad-created signal for this template when created by this pad.
     * @virtual 
     * @param pad the #GstPad that created it
     */
    vfunc_pad_created(pad: Pad): void

    // Own signals of Gst-1.0.Gst.PadTemplate

    connect(sigName: "pad-created", callback: PadTemplate_PadCreatedSignalCallback): number
    connect_after(sigName: "pad-created", callback: PadTemplate_PadCreatedSignalCallback): number
    emit(sigName: "pad-created", pad: Pad, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.PadTemplate

    connect(sigName: "notify::gtype", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtype", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Padtemplates describe the possible media types a pad or an elementfactory can
 * handle. This allows for both inspection of handled types before loading the
 * element plugin as well as identifying pads on elements that are not yet
 * created (request or sometimes pads).
 * 
 * Pad and PadTemplates have #GstCaps attached to it to describe the media type
 * they are capable of dealing with. gst_pad_template_get_caps() or
 * GST_PAD_TEMPLATE_CAPS() are used to get the caps of a padtemplate. It's not
 * possible to modify the caps of a padtemplate after creation.
 * 
 * PadTemplates have a #GstPadPresence property which identifies the lifetime
 * of the pad and that can be retrieved with GST_PAD_TEMPLATE_PRESENCE(). Also
 * the direction of the pad can be retrieved from the #GstPadTemplate with
 * GST_PAD_TEMPLATE_DIRECTION().
 * 
 * The GST_PAD_TEMPLATE_NAME_TEMPLATE () is important for GST_PAD_REQUEST pads
 * because it has to be used as the name in the gst_element_request_pad_simple()
 * call to instantiate a pad from this template.
 * 
 * Padtemplates can be created with gst_pad_template_new() or with
 * gst_static_pad_template_get (), which creates a #GstPadTemplate from a
 * #GstStaticPadTemplate that can be filled with the
 * convenient GST_STATIC_PAD_TEMPLATE() macro.
 * 
 * A padtemplate can be used to create a pad (see gst_pad_new_from_template()
 * or gst_pad_new_from_static_template ()) or to add to an element class
 * (see gst_element_class_add_static_pad_template ()).
 * 
 * The following code example shows the code to create a pad from a padtemplate.
 * 
 * ```c
 *   GstStaticPadTemplate my_template =
 *   GST_STATIC_PAD_TEMPLATE (
 *     "sink",          // the name of the pad
 *     GST_PAD_SINK,    // the direction of the pad
 *     GST_PAD_ALWAYS,  // when this pad will be present
 *     GST_STATIC_CAPS (        // the capabilities of the padtemplate
 *       "audio/x-raw, "
 *         "channels = (int) [ 1, 6 ]"
 *     )
 *   );
 *   void
 *   my_method (void)
 *   {
 *     GstPad *pad;
 *     pad = gst_pad_new_from_static_template (&my_template, "sink");
 *     ...
 *   }
 * ```
 * 
 * 
 * The following example shows you how to add the padtemplate to an
 * element class, this is usually done in the class_init of the class:
 * 
 * ```c
 *   static void
 *   my_element_class_init (GstMyElementClass *klass)
 *   {
 *     GstElementClass *gstelement_class = GST_ELEMENT_CLASS (klass);
 * 
 *     gst_element_class_add_static_pad_template (gstelement_class, &my_template);
 *   }
 * ```
 * 
 * @class 
 */
class PadTemplate extends Object {

    // Own properties of Gst-1.0.Gst.PadTemplate

    static name: string
    static $gtype: GObject.GType<PadTemplate>

    // Constructors of Gst-1.0.Gst.PadTemplate

    constructor(config?: PadTemplate_ConstructProps) 
    /**
     * Creates a new pad template with a name according to the given template
     * and with the given arguments.
     * @constructor 
     * @param name_template the name template.
     * @param direction the #GstPadDirection of the template.
     * @param presence the #GstPadPresence of the pad.
     * @param caps a #GstCaps set for the template.
     */
    constructor(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps) 
    /**
     * Creates a new pad template with a name according to the given template
     * and with the given arguments.
     * @constructor 
     * @param name_template the name template.
     * @param direction the #GstPadDirection of the template.
     * @param presence the #GstPadPresence of the pad.
     * @param caps a #GstCaps set for the template.
     */
    static new(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    /**
     * Converts a #GstStaticPadTemplate into a #GstPadTemplate with a type.
     * @constructor 
     * @param pad_template the static pad template
     * @param pad_type The #GType of the pad to create
     */
    static new_from_static_pad_template_with_gtype(pad_template: StaticPadTemplate, pad_type: GObject.GType): PadTemplate
    /**
     * Creates a new pad template with a name according to the given template
     * and with the given arguments.
     * @constructor 
     * @param name_template the name template.
     * @param direction the #GstPadDirection of the template.
     * @param presence the #GstPadPresence of the pad.
     * @param caps a #GstCaps set for the template.
     * @param pad_type The #GType of the pad to create
     */
    static new_with_gtype(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps, pad_type: GObject.GType): PadTemplate
    _init(config?: PadTemplate_ConstructProps): void
}

interface ParamArray {
}

/**
 * A fundamental type that describes a #GParamSpec for arrays of
 * values
 * @class 
 */
class ParamArray extends GObject.ParamSpec {

    // Own properties of Gst-1.0.Gst.ParamArray

    static name: string
}

interface ParamFraction {
}

/**
 * A fundamental type that describes a #GParamSpec for fractional
 * properties
 * @class 
 */
class ParamFraction extends GObject.ParamSpec {

    // Own properties of Gst-1.0.Gst.ParamFraction

    static name: string
}

interface Pipeline_ConstructProps extends ChildProxy_ConstructProps, Bin_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Pipeline

    /**
     * Whether or not to automatically flush all messages on the
     * pipeline's bus when going from READY to NULL state. Please see
     * gst_pipeline_set_auto_flush_bus() for more information on this option.
     */
    auto_flush_bus?: boolean | null
    /**
     * The expected delay needed for elements to spin up to the
     * PLAYING state expressed in nanoseconds.
     * see gst_pipeline_set_delay() for more information on this option.
     */
    delay?: number | null
    /**
     * Latency to configure on the pipeline. See gst_pipeline_set_latency().
     */
    latency?: number | null
}

interface Pipeline extends ChildProxy {

    // Own properties of Gst-1.0.Gst.Pipeline

    /**
     * Whether or not to automatically flush all messages on the
     * pipeline's bus when going from READY to NULL state. Please see
     * gst_pipeline_set_auto_flush_bus() for more information on this option.
     */
    auto_flush_bus: boolean
    /**
     * Latency to configure on the pipeline. See gst_pipeline_set_latency().
     */
    latency: number

    // Conflicting properties

    object: any

    // Own fields of Gst-1.0.Gst.Pipeline

    bin: Bin
    /**
     * The fixed clock of the pipeline, used when
     *               GST_PIPELINE_FLAG_FIXED_CLOCK is set.
     * @field 
     */
    fixed_clock: Clock
    /**
     * The stream time of the pipeline. A better name for this
     *         property would be the running_time, the total time spent in the
     *         PLAYING state without being flushed. (deprecated, use the start_time
     *         on GstElement).
     * @field 
     */
    stream_time: ClockTime
    /**
     * Extra delay added to base_time to compensate for computing delays
     *         when setting elements to PLAYING.
     * @field 
     */
    delay: ClockTime

    // Owm methods of Gst-1.0.Gst.Pipeline

    /**
     * Let `pipeline` select a clock automatically. This is the default
     * behaviour.
     * 
     * Use this function if you previous forced a fixed clock with
     * gst_pipeline_use_clock() and want to restore the default
     * pipeline clock selection algorithm.
     * 
     * MT safe.
     */
    auto_clock(): void
    /**
     * Check if `pipeline` will automatically flush messages when going to
     * the NULL state.
     */
    get_auto_flush_bus(): boolean
    /**
     * Gets the #GstBus of `pipeline`. The bus allows applications to receive
     * #GstMessage packets.
     */
    get_bus(): Bus

    // Overloads of get_bus

    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Bus | null
    get_bus(...args: any[]): any
    get_bus(...args: any[]): Bus | Bus | null | any
    /**
     * Get the configured delay (see gst_pipeline_set_delay()).
     */
    get_delay(): ClockTime
    /**
     * Gets the latency that should be configured on the pipeline. See
     * gst_pipeline_set_latency().
     */
    get_latency(): ClockTime
    /**
     * Gets the current clock used by `pipeline`.
     * 
     * Unlike gst_element_get_clock(), this function will always return a
     * clock, even if the pipeline is not in the PLAYING state.
     */
    get_pipeline_clock(): Clock
    /**
     * Usually, when a pipeline goes from READY to NULL state, it automatically
     * flushes all pending messages on the bus, which is done for refcounting
     * purposes, to break circular references.
     * 
     * This means that applications that update state using (async) bus messages
     * (e.g. do certain things when a pipeline goes from PAUSED to READY) might
     * not get to see messages when the pipeline is shut down, because they might
     * be flushed before they can be dispatched in the main thread. This behaviour
     * can be disabled using this function.
     * 
     * It is important that all messages on the bus are handled when the
     * automatic flushing is disabled else memory leaks will be introduced.
     * 
     * MT safe.
     * @param auto_flush whether or not to automatically flush the bus when the pipeline goes from READY to NULL state
     */
    set_auto_flush_bus(auto_flush: boolean): void
    /**
     * Set the expected delay needed for all elements to perform the
     * PAUSED to PLAYING state change. `delay` will be added to the
     * base time of the elements so that they wait an additional `delay`
     * amount of time before starting to process buffers and cannot be
     * #GST_CLOCK_TIME_NONE.
     * 
     * This option is used for tuning purposes and should normally not be
     * used.
     * 
     * MT safe.
     * @param delay the delay
     */
    set_delay(delay: ClockTime): void
    /**
     * Sets the latency that should be configured on the pipeline. Setting
     * GST_CLOCK_TIME_NONE will restore the default behaviour of using the minimum
     * latency from the LATENCY query. Setting this is usually not required and
     * the pipeline will figure out an appropriate latency automatically.
     * 
     * Setting a too low latency, especially lower than the minimum latency from
     * the LATENCY query, will most likely cause the pipeline to fail.
     * @param latency latency to configure
     */
    set_latency(latency: ClockTime): void
    /**
     * Force `pipeline` to use the given `clock`. The pipeline will
     * always use the given clock even if new clock providers are added
     * to this pipeline.
     * 
     * If `clock` is %NULL all clocking will be disabled which will make
     * the pipeline run as fast as possible.
     * 
     * MT safe.
     * @param clock the clock to use
     */
    use_clock(clock: Clock | null): void

    // Conflicting methods

    get_property(...args: any[]): any
    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.Pipeline

    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-flush-bus", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstPipeline is a special #GstBin used as the toplevel container for
 * the filter graph. The #GstPipeline will manage the selection and
 * distribution of a global #GstClock as well as provide a #GstBus to the
 * application.
 * 
 * gst_pipeline_new() is used to create a pipeline. when you are done with
 * the pipeline, use gst_object_unref() to free its resources including all
 * added #GstElement objects (if not otherwise referenced).
 * 
 * Elements are added and removed from the pipeline using the #GstBin
 * methods like gst_bin_add() and gst_bin_remove() (see #GstBin).
 * 
 * Before changing the state of the #GstPipeline (see #GstElement) a #GstBus
 * should be retrieved with gst_pipeline_get_bus(). This #GstBus should then
 * be used to receive #GstMessage from the elements in the pipeline. Listening
 * to the #GstBus is necessary for retrieving error messages from the
 * #GstPipeline and otherwise the #GstPipeline might stop without any
 * indication, why. Furthermore, the #GstPipeline posts messages even if
 * nobody listens on the #GstBus, which will pile up and use up memory.
 * 
 * By default, a #GstPipeline will automatically flush the pending #GstBus
 * messages when going to the NULL state to ensure that no circular
 * references exist when no messages are read from the #GstBus. This
 * behaviour can be changed with gst_pipeline_set_auto_flush_bus().
 * 
 * When the #GstPipeline performs the PAUSED to PLAYING state change it will
 * select a clock for the elements. The clock selection algorithm will by
 * default select a clock provided by an element that is most upstream
 * (closest to the source). For live pipelines (ones that return
 * #GST_STATE_CHANGE_NO_PREROLL from the gst_element_set_state() call) this
 * will select the clock provided by the live source. For normal pipelines
 * this will select a clock provided by the sinks (most likely the audio
 * sink). If no element provides a clock, a default #GstSystemClock is used.
 * 
 * The clock selection can be controlled with the gst_pipeline_use_clock()
 * method, which will enforce a given clock on the pipeline. With
 * gst_pipeline_auto_clock() the default clock selection algorithm can be
 * restored.
 * 
 * A #GstPipeline maintains a running time for the elements. The running
 * time is defined as the difference between the current clock time and
 * the base time. When the pipeline goes to READY or a flushing seek is
 * performed on it, the running time is reset to 0. When the pipeline is
 * set from PLAYING to PAUSED, the current clock time is sampled and used to
 * configure the base time for the elements when the pipeline is set
 * to PLAYING again. The effect is that the running time (as the difference
 * between the clock time and the base time) will count how much time was spent
 * in the PLAYING state. This default behaviour can be changed with the
 * gst_element_set_start_time() method.
 * @class 
 */
class Pipeline extends Bin {

    // Own properties of Gst-1.0.Gst.Pipeline

    static name: string
    static $gtype: GObject.GType<Pipeline>

    // Constructors of Gst-1.0.Gst.Pipeline

    constructor(config?: Pipeline_ConstructProps) 
    /**
     * Create a new pipeline with the given name.
     * @constructor 
     * @param name name of new pipeline
     */
    constructor(name: string | null) 
    /**
     * Create a new pipeline with the given name.
     * @constructor 
     * @param name name of new pipeline
     */
    static new(name: string | null): Pipeline
    _init(config?: Pipeline_ConstructProps): void
}

interface Plugin_ConstructProps extends Object_ConstructProps {
}

interface Plugin {

    // Owm methods of Gst-1.0.Gst.Plugin

    /**
     * Make GStreamer aware of external dependencies which affect the feature
     * set of this plugin (ie. the elements or typefinders associated with it).
     * 
     * GStreamer will re-inspect plugins with external dependencies whenever any
     * of the external dependencies change. This is useful for plugins which wrap
     * other plugin systems, e.g. a plugin which wraps a plugin-based visualisation
     * library and makes visualisations available as GStreamer elements, or a
     * codec loader which exposes elements and/or caps dependent on what external
     * codec libraries are currently installed.
     * @param env_vars %NULL-terminated array of environment variables affecting the     feature set of the plugin (e.g. an environment variable containing     paths where to look for additional modules/plugins of a library),     or %NULL. Environment variable names may be followed by a path component      which will be added to the content of the environment variable, e.g.      "HOME/.mystuff/plugins".
     * @param paths %NULL-terminated array of directories/paths where dependent files     may be, or %NULL.
     * @param names %NULL-terminated array of file names (or file name suffixes,     depending on `flags)` to be used in combination with the paths from     `paths` and/or the paths extracted from the environment variables in     `env_vars,` or %NULL.
     * @param flags optional flags, or #GST_PLUGIN_DEPENDENCY_FLAG_NONE
     */
    add_dependency(env_vars: string[] | null, paths: string[] | null, names: string[] | null, flags: PluginDependencyFlags): void
    /**
     * Make GStreamer aware of external dependencies which affect the feature
     * set of this plugin (ie. the elements or typefinders associated with it).
     * 
     * GStreamer will re-inspect plugins with external dependencies whenever any
     * of the external dependencies change. This is useful for plugins which wrap
     * other plugin systems, e.g. a plugin which wraps a plugin-based visualisation
     * library and makes visualisations available as GStreamer elements, or a
     * codec loader which exposes elements and/or caps dependent on what external
     * codec libraries are currently installed.
     * 
     * Convenience wrapper function for gst_plugin_add_dependency() which
     * takes simple strings as arguments instead of string arrays, with multiple
     * arguments separated by predefined delimiters (see above).
     * @param env_vars one or more environment variables (separated by ':', ';' or ','),      or %NULL. Environment variable names may be followed by a path component      which will be added to the content of the environment variable, e.g.      "HOME/.mystuff/plugins:MYSTUFF_PLUGINS_PATH"
     * @param paths one ore more directory paths (separated by ':' or ';' or ','),      or %NULL. Example: "/usr/lib/mystuff/plugins"
     * @param names one or more file names or file name suffixes (separated by commas),      or %NULL
     * @param flags optional flags, or #GST_PLUGIN_DEPENDENCY_FLAG_NONE
     */
    add_dependency_simple(env_vars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void
    /**
     * Gets the plugin specific data cache. If it is %NULL there is no cached data
     * stored. This is the case when the registry is getting rebuilt.
     */
    get_cache_data(): Structure | null
    /**
     * Get the long descriptive name of the plugin
     */
    get_description(): string
    /**
     * get the filename of the plugin
     */
    get_filename(): string | null
    /**
     * get the license of the plugin
     */
    get_license(): string
    /**
     * Get the short name of the plugin
     */
    get_name(): string

    // Overloads of get_name

    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    get_name(...args: any[]): any
    get_name(...args: any[]): string | string | null | any
    /**
     * get the URL where the plugin comes from
     */
    get_origin(): string
    /**
     * get the package the plugin belongs to.
     */
    get_package(): string
    /**
     * Get the release date (and possibly time) in form of a string, if available.
     * 
     * For normal GStreamer plugin releases this will usually just be a date in
     * the form of "YYYY-MM-DD", while pre-releases and builds from git may contain
     * a time component after the date as well, in which case the string will be
     * formatted like "YYYY-MM-DDTHH:MMZ" (e.g. "2012-04-30T09:30Z").
     * 
     * There may be plugins that do not have a valid release date set on them.
     */
    get_release_date_string(): string | null
    /**
     * get the source module the plugin belongs to.
     */
    get_source(): string
    /**
     * get the version of the plugin
     */
    get_version(): string
    /**
     * queries if the plugin is loaded into memory
     */
    is_loaded(): boolean
    /**
     * Loads `plugin`. Note that the *return value* is the loaded plugin; `plugin` is
     * untouched. The normal use pattern of this function goes like this:
     * 
     * |[
     * GstPlugin *loaded_plugin;
     * loaded_plugin = gst_plugin_load (plugin);
     * // presumably, we're no longer interested in the potentially-unloaded plugin
     * gst_object_unref (plugin);
     * plugin = loaded_plugin;
     * ```
     * 
     */
    load(): Plugin | null
    /**
     * Adds plugin specific data to cache. Passes the ownership of the structure to
     * the `plugin`.
     * 
     * The cache is flushed every time the registry is rebuilt.
     * @param cache_data a structure containing the data to cache
     */
    set_cache_data(cache_data: Structure): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GStreamer is extensible, so #GstElement instances can be loaded at runtime.
 * A plugin system can provide one or more of the basic GStreamer
 * #GstPluginFeature subclasses.
 * 
 * A plugin should export a symbol `gst_plugin_desc` that is a
 * struct of type #GstPluginDesc.
 * the plugin loader will check the version of the core library the plugin was
 * linked against and will create a new #GstPlugin. It will then call the
 * #GstPluginInitFunc function that was provided in the
 * `gst_plugin_desc`.
 * 
 * Once you have a handle to a #GstPlugin (e.g. from the #GstRegistry), you
 * can add any object that subclasses #GstPluginFeature.
 * 
 * Usually plugins are always automatically loaded so you don't need to call
 * gst_plugin_load() explicitly to bring it into memory. There are options to
 * statically link plugins to an app or even use GStreamer without a plugin
 * repository in which case gst_plugin_load() can be needed to bring the plugin
 * into memory.
 * @class 
 */
class Plugin extends Object {

    // Own properties of Gst-1.0.Gst.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Gst-1.0.Gst.Plugin

    constructor(config?: Plugin_ConstructProps) 
    _init(config?: Plugin_ConstructProps): void
    /**
     * Unrefs each member of `list,` then frees the list.
     * @param list list of #GstPlugin
     */
    static list_free(list: Plugin[]): void
    /**
     * Load the named plugin. Refs the plugin.
     * @param name name of plugin to load
     */
    static load_by_name(name: string): Plugin | null
    /**
     * Loads the given plugin and refs it.  Caller needs to unref after use.
     * @param filename the plugin filename to load
     */
    static load_file(filename: string): Plugin
    /**
     * Registers a static plugin, ie. a plugin which is private to an application
     * or library and contained within the application or library (as opposed to
     * being shipped as a separate module file).
     * 
     * You must make sure that GStreamer has been initialised (with gst_init() or
     * via gst_init_get_option_group()) before calling this function.
     * @param major_version the major version number of the GStreamer core that the     plugin was compiled for, you can just use GST_VERSION_MAJOR here
     * @param minor_version the minor version number of the GStreamer core that the     plugin was compiled for, you can just use GST_VERSION_MINOR here
     * @param name a unique name of the plugin (ideally prefixed with an application- or     library-specific namespace prefix in order to avoid name conflicts in     case a similar plugin with the same name ever gets added to GStreamer)
     * @param description description of the plugin
     * @param init_func pointer to the init function of this plugin.
     * @param version version string of the plugin
     * @param license effective license of plugin. Must be one of the approved licenses     (see #GstPluginDesc above) or the plugin will not be registered.
     * @param source source module plugin belongs to
     * @param package shipped package plugin belongs to
     * @param origin URL to provider of plugin
     */
    static register_static(major_version: number, minor_version: number, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    /**
     * Registers a static plugin, ie. a plugin which is private to an application
     * or library and contained within the application or library (as opposed to
     * being shipped as a separate module file) with a #GstPluginInitFullFunc
     * which allows user data to be passed to the callback function (useful
     * for bindings).
     * 
     * You must make sure that GStreamer has been initialised (with gst_init() or
     * via gst_init_get_option_group()) before calling this function.
     * @param major_version the major version number of the GStreamer core that the     plugin was compiled for, you can just use GST_VERSION_MAJOR here
     * @param minor_version the minor version number of the GStreamer core that the     plugin was compiled for, you can just use GST_VERSION_MINOR here
     * @param name a unique name of the plugin (ideally prefixed with an application- or     library-specific namespace prefix in order to avoid name conflicts in     case a similar plugin with the same name ever gets added to GStreamer)
     * @param description description of the plugin
     * @param init_full_func pointer to the init function with user data     of this plugin.
     * @param version version string of the plugin
     * @param license effective license of plugin. Must be one of the approved licenses     (see #GstPluginDesc above) or the plugin will not be registered.
     * @param source source module plugin belongs to
     * @param package shipped package plugin belongs to
     * @param origin URL to provider of plugin
     */
    static register_static_full(major_version: number, minor_version: number, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string): boolean
}

interface PluginFeature_ConstructProps extends Object_ConstructProps {
}

interface PluginFeature {

    // Owm methods of Gst-1.0.Gst.PluginFeature

    /**
     * Checks whether the given plugin feature is at least
     *  the required version
     * @param min_major minimum required major version
     * @param min_minor minimum required minor version
     * @param min_micro minimum required micro version
     */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    /**
     * Get the plugin that provides this feature.
     */
    get_plugin(): Plugin | null
    /**
     * Get the name of the plugin that provides this feature.
     */
    get_plugin_name(): string | null
    /**
     * Gets the rank of a plugin feature.
     */
    get_rank(): number
    /**
     * Loads the plugin containing `feature` if it's not already loaded. `feature` is
     * unaffected; use the return value instead.
     * 
     * Normally this function is used like this:
     * 
     * ```c
     * GstPluginFeature *loaded_feature;
     * 
     * loaded_feature = gst_plugin_feature_load (feature);
     * // presumably, we're no longer interested in the potentially-unloaded feature
     * gst_object_unref (feature);
     * feature = loaded_feature;
     * ```
     * 
     */
    load(): PluginFeature | null
    /**
     * Specifies a rank for a plugin feature, so that autoplugging uses
     * the most appropriate feature.
     * @param rank rank value - higher number means more priority rank
     */
    set_rank(rank: number): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.PluginFeature

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This is a base class for anything that can be added to a #GstPlugin.
 * @class 
 */
class PluginFeature extends Object {

    // Own properties of Gst-1.0.Gst.PluginFeature

    static name: string
    static $gtype: GObject.GType<PluginFeature>

    // Constructors of Gst-1.0.Gst.PluginFeature

    constructor(config?: PluginFeature_ConstructProps) 
    _init(config?: PluginFeature_ConstructProps): void
    /**
     * Copies the list of features. Caller should call `gst_plugin_feature_list_free`
     * when done with the list.
     * @param list list     of #GstPluginFeature
     */
    static list_copy(list: PluginFeature[]): PluginFeature[]
    /**
     * Debug the plugin feature names in `list`.
     * @param list a #GList of     plugin features
     */
    static list_debug(list: PluginFeature[]): void
    /**
     * Unrefs each member of `list,` then frees the list.
     * @param list list     of #GstPluginFeature
     */
    static list_free(list: PluginFeature[]): void
    /**
     * Compares the two given #GstPluginFeature instances. This function can be
     * used as a #GCompareFunc when sorting by rank and then by name.
     * @param p1 a #GstPluginFeature
     * @param p2 a #GstPluginFeature
     */
    static rank_compare_func(p1: object | null, p2: object | null): number
}

interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}

interface ProxyPad {

    // Conflicting properties

    object: any

    // Own fields of Gst-1.0.Gst.ProxyPad

    pad: Pad

    // Owm methods of Gst-1.0.Gst.ProxyPad

    /**
     * Get the internal pad of `pad`. Unref target pad after usage.
     * 
     * The internal pad of a #GstGhostPad is the internally used
     * pad of opposite direction, which is used to link to the target.
     */
    get_internal(): ProxyPad | null

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.ProxyPad

    connect(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProxyPad extends Pad {

    // Own properties of Gst-1.0.Gst.ProxyPad

    static name: string
    static $gtype: GObject.GType<ProxyPad>

    // Constructors of Gst-1.0.Gst.ProxyPad

    constructor(config?: ProxyPad_ConstructProps) 
    _init(config?: ProxyPad_ConstructProps): void
    /**
     * Invoke the default chain function of the proxy pad.
     * @param pad a sink #GstPad, returns GST_FLOW_ERROR if not.
     * @param parent the parent of `pad` or %NULL
     * @param buffer the #GstBuffer to send, return GST_FLOW_ERROR     if not.
     */
    static chain_default(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
    /**
     * Invoke the default chain list function of the proxy pad.
     * @param pad a sink #GstPad, returns GST_FLOW_ERROR if not.
     * @param parent the parent of `pad` or %NULL
     * @param list the #GstBufferList to send, return GST_FLOW_ERROR     if not.
     */
    static chain_list_default(pad: Pad, parent: Object | null, list: BufferList): FlowReturn
    /**
     * Invoke the default getrange function of the proxy pad.
     * @param pad a src #GstPad, returns #GST_FLOW_ERROR if not.
     * @param parent the parent of `pad`
     * @param offset The start offset of the buffer
     * @param size The length of the buffer
     */
    static getrange_default(pad: Pad, parent: Object, offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    /**
     * Invoke the default iterate internal links function of the proxy pad.
     * @param pad the #GstPad to get the internal links of.
     * @param parent the parent of `pad` or %NULL
     */
    static iterate_internal_links_default(pad: Pad, parent: Object | null): Iterator | null
}

interface Registry_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `feature-added`
 */
interface Registry_FeatureAddedSignalCallback {
    ($obj: Registry, feature: PluginFeature): void
}

/**
 * Signal callback interface for `plugin-added`
 */
interface Registry_PluginAddedSignalCallback {
    ($obj: Registry, plugin: Plugin): void
}

interface Registry {

    // Own fields of Gst-1.0.Gst.Registry

    object: Object

    // Owm methods of Gst-1.0.Gst.Registry

    /**
     * Add the feature to the registry. The feature-added signal will be emitted.
     * 
     * `feature'`s reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param feature the feature to add
     */
    add_feature(feature: PluginFeature): boolean
    /**
     * Add the plugin to the registry. The plugin-added signal will be emitted.
     * 
     * `plugin'`s reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param plugin the plugin to add
     */
    add_plugin(plugin: Plugin): boolean
    /**
     * Checks whether a plugin feature by the given name exists in
     * `registry` and whether its version is at least the
     * version required.
     * @param feature_name the name of the feature (e.g. "oggdemux")
     * @param min_major the minimum major version number
     * @param min_minor the minimum minor version number
     * @param min_micro the minimum micro version number
     */
    check_feature_version(feature_name: string, min_major: number, min_minor: number, min_micro: number): boolean
    /**
     * Runs a filter against all features of the plugins in the registry
     * and returns a GList with the results.
     * If the first flag is set, only the first match is
     * returned (as a list with a single object).
     * @param filter the filter to use
     * @param first only return first match
     */
    feature_filter(filter: PluginFeatureFilter, first: boolean): PluginFeature[]
    /**
     * Find the pluginfeature with the given name and type in the registry.
     * @param name the pluginfeature name to find
     * @param type the pluginfeature type to find
     */
    find_feature(name: string, type: GObject.GType): PluginFeature | null
    /**
     * Find the plugin with the given name in the registry.
     * The plugin will be reffed; caller is responsible for unreffing.
     * @param name the plugin name to find
     */
    find_plugin(name: string): Plugin | null
    /**
     * Retrieves a #GList of #GstPluginFeature of `type`.
     * @param type a #GType.
     */
    get_feature_list(type: GObject.GType): PluginFeature[]
    /**
     * Retrieves a #GList of features of the plugin with name `name`.
     * @param name a plugin name.
     */
    get_feature_list_by_plugin(name: string): PluginFeature[]
    /**
     * Returns the registry's feature list cookie. This changes
     * every time a feature is added or removed from the registry.
     */
    get_feature_list_cookie(): number
    /**
     * Get a copy of all plugins registered in the given registry. The refcount
     * of each element in the list in incremented.
     */
    get_plugin_list(): Plugin[]
    /**
     * Look up a plugin in the given registry with the given filename.
     * If found, plugin is reffed.
     * @param filename the name of the file to look up
     */
    lookup(filename: string): Plugin | null
    /**
     * Find a #GstPluginFeature with `name` in `registry`.
     * @param name a #GstPluginFeature name
     */
    lookup_feature(name: string): PluginFeature | null
    /**
     * Runs a filter against all plugins in the registry and returns a #GList with
     * the results. If the first flag is set, only the first match is
     * returned (as a list with a single object).
     * Every plugin is reffed; use gst_plugin_list_free() after use, which
     * will unref again.
     * @param filter the filter to use
     * @param first only return first match
     */
    plugin_filter(filter: PluginFilter, first: boolean): Plugin[]
    /**
     * Remove the feature from the registry.
     * 
     * MT safe.
     * @param feature the feature to remove
     */
    remove_feature(feature: PluginFeature): void
    /**
     * Remove the plugin from the registry.
     * 
     * MT safe.
     * @param plugin the plugin to remove
     */
    remove_plugin(plugin: Plugin): void
    /**
     * Scan the given path for plugins to add to the registry. The syntax of the
     * path is specific to the registry.
     * @param path the path to scan
     */
    scan_path(path: string): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of Gst-1.0.Gst.Registry

    connect(sigName: "feature-added", callback: Registry_FeatureAddedSignalCallback): number
    connect_after(sigName: "feature-added", callback: Registry_FeatureAddedSignalCallback): number
    emit(sigName: "feature-added", feature: PluginFeature, ...args: any[]): void
    connect(sigName: "plugin-added", callback: Registry_PluginAddedSignalCallback): number
    connect_after(sigName: "plugin-added", callback: Registry_PluginAddedSignalCallback): number
    emit(sigName: "plugin-added", plugin: Plugin, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.Registry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * One registry holds the metadata of a set of plugins.
 * 
 * <emphasis role="bold">Design:</emphasis>
 * 
 * The #GstRegistry object is a list of plugins and some functions for dealing
 * with them. Each #GstPlugin is matched 1-1 with a file on disk, and may or may
 * not be loaded at a given time.
 * 
 * The primary source, at all times, of plugin information is each plugin file
 * itself. Thus, if an application wants information about a particular plugin,
 * or wants to search for a feature that satisfies given criteria, the primary
 * means of doing so is to load every plugin and look at the resulting
 * information that is gathered in the default registry. Clearly, this is a time
 * consuming process, so we cache information in the registry file. The format
 * and location of the cache file is internal to gstreamer.
 * 
 * On startup, plugins are searched for in the plugin search path. The following
 * locations are checked in this order:
 * 
 * * location from --gst-plugin-path commandline option.
 * * the GST_PLUGIN_PATH environment variable.
 * * the GST_PLUGIN_SYSTEM_PATH environment variable.
 * * default locations (if GST_PLUGIN_SYSTEM_PATH is not set).
 *   Those default locations are:
 *   `$XDG_DATA_HOME/gstreamer-$GST_API_VERSION/plugins/`
 *   and `$prefix/libs/gstreamer-$GST_API_VERSION/`.
 *   [$XDG_DATA_HOME](http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html) defaults to
 *   `$HOME/.local/share`.
 * 
 * The registry cache file is loaded from
 * `$XDG_CACHE_HOME/gstreamer-$GST_API_VERSION/registry-$ARCH.bin`
 * (where $XDG_CACHE_HOME defaults to `$HOME/.cache`) or the file listed in the `GST_REGISTRY`
 * env var. One reason to change the registry location is for testing.
 * 
 * For each plugin that is found in the plugin search path, there could be 3
 * possibilities for cached information:
 * 
 *   * the cache may not contain information about a given file.
 *   * the cache may have stale information.
 *   * the cache may have current information.
 * 
 * In the first two cases, the plugin is loaded and the cache updated. In
 * addition to these cases, the cache may have entries for plugins that are not
 * relevant to the current process. These are marked as not available to the
 * current process. If the cache is updated for whatever reason, it is marked
 * dirty.
 * 
 * A dirty cache is written out at the end of initialization. Each entry is
 * checked to make sure the information is minimally valid. If not, the entry is
 * simply dropped.
 * 
 * ## Implementation notes:
 * 
 * The "cache" and "registry" are different concepts and can represent
 * different sets of plugins. For various reasons, at init time, the cache is
 * stored in the default registry, and plugins not relevant to the current
 * process are marked with the %GST_PLUGIN_FLAG_CACHED bit. These plugins are
 * removed at the end of initialization.
 * @class 
 */
class Registry extends Object {

    // Own properties of Gst-1.0.Gst.Registry

    static name: string
    static $gtype: GObject.GType<Registry>

    // Constructors of Gst-1.0.Gst.Registry

    constructor(config?: Registry_ConstructProps) 
    _init(config?: Registry_ConstructProps): void
    /**
     * By default GStreamer will perform scanning and rebuilding of the
     * registry file using a helper child process.
     * 
     * Applications might want to disable this behaviour with the
     * gst_registry_fork_set_enabled() function, in which case new plugins
     * are scanned (and loaded) into the application process.
     */
    static fork_is_enabled(): boolean
    /**
     * Applications might want to disable/enable spawning of a child helper process
     * when rebuilding the registry. See gst_registry_fork_is_enabled() for more
     * information.
     * @param enabled whether rebuilding the registry can use a temporary child helper process.
     */
    static fork_set_enabled(enabled: boolean): void
    /**
     * Retrieves the singleton plugin registry. The caller does not own a
     * reference on the registry, as it is alive as long as GStreamer is
     * initialized.
     */
    static get(): Registry
}

interface SharedTaskPool_ConstructProps extends TaskPool_ConstructProps {
}

interface SharedTaskPool {

    // Conflicting properties

    object: any

    // Own fields of Gst-1.0.Gst.SharedTaskPool

    parent: TaskPool

    // Owm methods of Gst-1.0.Gst.SharedTaskPool

    get_max_threads(): number
    /**
     * Update the maximal number of threads the `pool` may spawn. When
     * the maximal number of threads is reduced, existing threads are not
     * immediately shut down, see g_thread_pool_set_max_threads().
     * 
     * Setting `max_threads` to 0 effectively freezes the pool.
     * @param max_threads Maximum number of threads to spawn.
     */
    set_max_threads(max_threads: number): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.SharedTaskPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GstSharedTaskPool object.
 * @class 
 */
class SharedTaskPool extends TaskPool {

    // Own properties of Gst-1.0.Gst.SharedTaskPool

    static name: string
    static $gtype: GObject.GType<SharedTaskPool>

    // Constructors of Gst-1.0.Gst.SharedTaskPool

    constructor(config?: SharedTaskPool_ConstructProps) 
    /**
     * Create a new shared task pool. The shared task pool will queue tasks on
     * a maximum number of threads, 1 by default.
     * 
     * Do not use a #GstSharedTaskPool to manage potentially inter-dependent tasks such
     * as pad tasks, as having one task waiting on another to return before returning
     * would cause obvious deadlocks if they happen to share the same thread.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new shared task pool. The shared task pool will queue tasks on
     * a maximum number of threads, 1 by default.
     * 
     * Do not use a #GstSharedTaskPool to manage potentially inter-dependent tasks such
     * as pad tasks, as having one task waiting on another to return before returning
     * would cause obvious deadlocks if they happen to share the same thread.
     * @constructor 
     */
    static new(): SharedTaskPool
    _init(config?: SharedTaskPool_ConstructProps): void
}

interface Stream_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Stream

    /**
     * The #GstCaps of the #GstStream.
     */
    caps?: Caps | null
    stream_flags?: StreamFlags | null
    /**
     * The unique identifier of the #GstStream. Can only be set at construction
     * time.
     */
    stream_id?: string | null
    /**
     * The #GstStreamType of the #GstStream. Can only be set at construction time.
     */
    stream_type?: StreamType | null
    /**
     * The #GstTagList of the #GstStream.
     */
    tags?: TagList | null
}

interface Stream {

    // Own properties of Gst-1.0.Gst.Stream

    /**
     * The #GstCaps of the #GstStream.
     */
    caps: Caps
    stream_flags: StreamFlags
    /**
     * The #GstStreamType of the #GstStream. Can only be set at construction time.
     */
    stream_type: StreamType
    /**
     * The #GstTagList of the #GstStream.
     */
    tags: TagList

    // Own fields of Gst-1.0.Gst.Stream

    /**
     * The Stream Identifier for this #GstStream
     * @field 
     */
    stream_id: string

    // Owm methods of Gst-1.0.Gst.Stream

    /**
     * Retrieve the caps for `stream,` if any
     */
    get_caps(): Caps | null
    /**
     * Retrieve the current stream flags for `stream`
     */
    get_stream_flags(): StreamFlags
    /**
     * Returns the stream ID of `stream`.
     */
    get_stream_id(): string | null
    /**
     * Retrieve the stream type for `stream`
     */
    get_stream_type(): StreamType
    /**
     * Retrieve the tags for `stream,` if any
     */
    get_tags(): TagList | null
    /**
     * Set the caps for the #GstStream
     * @param caps a #GstCaps
     */
    set_caps(caps: Caps | null): void
    /**
     * Set the `flags` for the `stream`.
     * @param flags the flags to set on `stream`
     */
    set_stream_flags(flags: StreamFlags): void
    /**
     * Set the stream type of `stream`
     * @param stream_type the type to set on `stream`
     */
    set_stream_type(stream_type: StreamType): void
    /**
     * Set the tags for the #GstStream
     * @param tags a #GstTagList
     */
    set_tags(tags: TagList | null): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.Stream

    connect(sigName: "notify::caps", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::stream-flags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-flags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream-flags", ...args: any[]): void
    connect(sigName: "notify::stream-type", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream-type", ...args: any[]): void
    connect(sigName: "notify::tags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A high-level object representing a single stream. It might be backed, or
 * not, by an actual flow of data in a pipeline (#GstPad).
 * 
 * A #GstStream does not care about data changes (such as decoding, encoding,
 * parsing,...) as long as the underlying data flow corresponds to the same
 * high-level flow (ex: a certain audio track).
 * 
 * A #GstStream contains all the information pertinent to a stream, such as
 * stream-id, tags, caps, type, ...
 * 
 * Elements can subclass a #GstStream for internal usage (to contain information
 * pertinent to streams of data).
 * @class 
 */
class Stream extends Object {

    // Own properties of Gst-1.0.Gst.Stream

    static name: string
    static $gtype: GObject.GType<Stream>

    // Constructors of Gst-1.0.Gst.Stream

    constructor(config?: Stream_ConstructProps) 
    /**
     * Create a new #GstStream for the given `stream_id,` `caps,` `type`
     * and `flags`
     * @constructor 
     * @param stream_id the id for the new stream. If %NULL, a new one will be automatically generated
     * @param caps the #GstCaps of the stream
     * @param type the #GstStreamType of the stream
     * @param flags the #GstStreamFlags of the stream
     */
    constructor(stream_id: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags) 
    /**
     * Create a new #GstStream for the given `stream_id,` `caps,` `type`
     * and `flags`
     * @constructor 
     * @param stream_id the id for the new stream. If %NULL, a new one will be automatically generated
     * @param caps the #GstCaps of the stream
     * @param type the #GstStreamType of the stream
     * @param flags the #GstStreamFlags of the stream
     */
    static new(stream_id: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags): Stream
    _init(config?: Stream_ConstructProps): void
}

interface StreamCollection_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.StreamCollection

    upstream_id?: string | null
}

/**
 * Signal callback interface for `stream-notify`
 */
interface StreamCollection_StreamNotifySignalCallback {
    ($obj: StreamCollection, object: Stream, p0: GObject.ParamSpec): void
}

interface StreamCollection {

    // Own properties of Gst-1.0.Gst.StreamCollection

    upstream_id: string

    // Owm methods of Gst-1.0.Gst.StreamCollection

    /**
     * Add the given `stream` to the `collection`.
     * @param stream the #GstStream to add
     */
    add_stream(stream: Stream): boolean
    /**
     * Get the number of streams this collection contains
     */
    get_size(): number
    /**
     * Retrieve the #GstStream with index `index` from the collection.
     * 
     * The caller should not modify the returned #GstStream
     * @param index Index of the stream to retrieve
     */
    get_stream(index: number): Stream | null
    /**
     * Returns the upstream id of the `collection`.
     */
    get_upstream_id(): string | null

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.StreamCollection

    vfunc_stream_notify(stream: Stream, pspec: GObject.ParamSpec): void

    // Own signals of Gst-1.0.Gst.StreamCollection

    connect(sigName: "stream-notify", callback: StreamCollection_StreamNotifySignalCallback): number
    connect_after(sigName: "stream-notify", callback: StreamCollection_StreamNotifySignalCallback): number
    emit(sigName: "stream-notify", object: Stream, p0: GObject.ParamSpec, ...args: any[]): void

    // Class property signals of Gst-1.0.Gst.StreamCollection

    connect(sigName: "notify::upstream-id", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upstream-id", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upstream-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A collection of #GstStream that are available.
 * 
 * A #GstStreamCollection will be provided by elements that can make those
 * streams available. Applications can use the collection to show the user
 * what streams are available by using %gst_stream_collection_get_stream()
 * 
 * Once posted, a #GstStreamCollection is immutable. Updates are made by sending
 * a new #GstStreamCollection message, which may or may not share some of
 * the #GstStream objects from the collection it replaces. The receiver can check
 * the sender of a stream collection message to know which collection is
 * obsoleted.
 * 
 * Several elements in a pipeline can provide #GstStreamCollection.
 * 
 * Applications can activate streams from a collection by using the
 * #GST_EVENT_SELECT_STREAMS event on a pipeline, bin or element.
 * @class 
 */
class StreamCollection extends Object {

    // Own properties of Gst-1.0.Gst.StreamCollection

    static name: string
    static $gtype: GObject.GType<StreamCollection>

    // Constructors of Gst-1.0.Gst.StreamCollection

    constructor(config?: StreamCollection_ConstructProps) 
    /**
     * Create a new #GstStreamCollection.
     * @constructor 
     * @param upstream_id The stream id of the parent stream
     */
    constructor(upstream_id: string | null) 
    /**
     * Create a new #GstStreamCollection.
     * @constructor 
     * @param upstream_id The stream id of the parent stream
     */
    static new(upstream_id: string | null): StreamCollection
    _init(config?: StreamCollection_ConstructProps): void
}

interface SystemClock_ConstructProps extends Clock_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.SystemClock

    clock_type?: ClockType | null
}

interface SystemClock {

    // Own properties of Gst-1.0.Gst.SystemClock

    clock_type: ClockType

    // Conflicting properties

    object: any

    // Own fields of Gst-1.0.Gst.SystemClock

    clock: Clock

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.SystemClock

    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The GStreamer core provides a GstSystemClock based on the system time.
 * Asynchronous callbacks are scheduled from an internal thread.
 * 
 * Clock implementors are encouraged to subclass this systemclock as it
 * implements the async notification.
 * 
 * Subclasses can however override all of the important methods for sync and
 * async notifications to implement their own callback methods or blocking
 * wait operations.
 * @class 
 */
class SystemClock extends Clock {

    // Own properties of Gst-1.0.Gst.SystemClock

    static name: string
    static $gtype: GObject.GType<SystemClock>

    // Constructors of Gst-1.0.Gst.SystemClock

    constructor(config?: SystemClock_ConstructProps) 
    _init(config?: SystemClock_ConstructProps): void
    /**
     * Get a handle to the default system clock. The refcount of the
     * clock will be increased so you need to unref the clock after
     * usage.
     */
    static obtain(): Clock
    /**
     * Sets the default system clock that can be obtained with
     * gst_system_clock_obtain().
     * 
     * This is mostly used for testing and debugging purposes when you
     * want to have control over the time reported by the default system
     * clock.
     * 
     * MT safe.
     * @param new_clock a #GstClock
     */
    static set_default(new_clock: Clock | null): void
}

interface Task_ConstructProps extends Object_ConstructProps {
}

interface Task {

    // Own fields of Gst-1.0.Gst.Task

    object: Object
    /**
     * the state of the task
     * @field 
     */
    state: TaskState
    /**
     * used to pause/resume the task
     * @field 
     */
    cond: GLib.Cond
    /**
     * The lock taken when iterating the task function
     * @field 
     */
    lock: GLib.RecMutex
    /**
     * the function executed by this task
     * @field 
     */
    func: TaskFunction
    /**
     * user_data passed to the task function
     * @field 
     */
    user_data: object
    /**
     * GDestroyNotify for `user_data`
     * @field 
     */
    // TODO fix conflict: notify: GLib.DestroyNotify
    /**
     * a flag indicating that the task is running
     * @field 
     */
    running: boolean

    // Owm methods of Gst-1.0.Gst.Task

    /**
     * Get the #GstTaskPool that this task will use for its streaming
     * threads.
     * 
     * MT safe.
     */
    get_pool(): TaskPool
    /**
     * Get the current state of the task.
     */
    get_state(): TaskState
    /**
     * Joins `task`. After this call, it is safe to unref the task
     * and clean up the lock set with gst_task_set_lock().
     * 
     * The task will automatically be stopped with this call.
     * 
     * This function cannot be called from within a task function as this
     * would cause a deadlock. The function will detect this and print a
     * g_warning.
     */
    join(): boolean
    /**
     * Pauses `task`. This method can also be called on a task in the
     * stopped state, in which case a thread will be started and will remain
     * in the paused state. This function does not wait for the task to complete
     * the paused state.
     */
    pause(): boolean
    /**
     * Resume `task` in case it was paused. If the task was stopped, it will
     * remain in that state and this function will return %FALSE.
     */
    resume(): boolean
    /**
     * Call `enter_func` when the task function of `task` is entered. `user_data` will
     * be passed to `enter_func` and `notify` will be called when `user_data` is no
     * longer referenced.
     * @param enter_func a #GstTaskThreadFunc
     */
    set_enter_callback(enter_func: TaskThreadFunc): void
    /**
     * Call `leave_func` when the task function of `task` is left. `user_data` will
     * be passed to `leave_func` and `notify` will be called when `user_data` is no
     * longer referenced.
     * @param leave_func a #GstTaskThreadFunc
     */
    set_leave_callback(leave_func: TaskThreadFunc): void
    /**
     * Set the mutex used by the task. The mutex will be acquired before
     * calling the #GstTaskFunction.
     * 
     * This function has to be called before calling gst_task_pause() or
     * gst_task_start().
     * 
     * MT safe.
     * @param mutex The #GRecMutex to use
     */
    set_lock(mutex: GLib.RecMutex): void
    /**
     * Set `pool` as the new GstTaskPool for `task`. Any new streaming threads that
     * will be created by `task` will now use `pool`.
     * 
     * MT safe.
     * @param pool a #GstTaskPool
     */
    set_pool(pool: TaskPool): void
    /**
     * Sets the state of `task` to `state`.
     * 
     * The `task` must have a lock associated with it using
     * gst_task_set_lock() when going to GST_TASK_STARTED or GST_TASK_PAUSED or
     * this function will return %FALSE.
     * 
     * MT safe.
     * @param state the new task state
     */
    set_state(state: TaskState): boolean
    /**
     * Starts `task`. The `task` must have a lock associated with it using
     * gst_task_set_lock() or this function will return %FALSE.
     */
    start(): boolean
    /**
     * Stops `task`. This method merely schedules the task to stop and
     * will not wait for the task to have completely stopped. Use
     * gst_task_join() to stop and wait for completion.
     */
    stop(): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.Task

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstTask is used by #GstElement and #GstPad to provide the data passing
 * threads in a #GstPipeline.
 * 
 * A #GstPad will typically start a #GstTask to push or pull data to/from the
 * peer pads. Most source elements start a #GstTask to push data. In some cases
 * a demuxer element can start a #GstTask to pull data from a peer element. This
 * is typically done when the demuxer can perform random access on the upstream
 * peer element for improved performance.
 * 
 * Although convenience functions exist on #GstPad to start/pause/stop tasks, it
 * might sometimes be needed to create a #GstTask manually if it is not related to
 * a #GstPad.
 * 
 * Before the #GstTask can be run, it needs a #GRecMutex that can be set with
 * gst_task_set_lock().
 * 
 * The task can be started, paused and stopped with gst_task_start(), gst_task_pause()
 * and gst_task_stop() respectively or with the gst_task_set_state() function.
 * 
 * A #GstTask will repeatedly call the #GstTaskFunction with the user data
 * that was provided when creating the task with gst_task_new(). While calling
 * the function it will acquire the provided lock. The provided lock is released
 * when the task pauses or stops.
 * 
 * Stopping a task with gst_task_stop() will not immediately make sure the task is
 * not running anymore. Use gst_task_join() to make sure the task is completely
 * stopped and the thread is stopped.
 * 
 * After creating a #GstTask, use gst_object_unref() to free its resources. This can
 * only be done when the task is not running anymore.
 * 
 * Task functions can send a #GstMessage to send out-of-band data to the
 * application. The application can receive messages from the #GstBus in its
 * mainloop.
 * 
 * For debugging purposes, the task will configure its object name as the thread
 * name on Linux. Please note that the object name should be configured before the
 * task is started; changing the object name after the task has been started, has
 * no effect on the thread name.
 * @class 
 */
class Task extends Object {

    // Own properties of Gst-1.0.Gst.Task

    static name: string
    static $gtype: GObject.GType<Task>

    // Constructors of Gst-1.0.Gst.Task

    constructor(config?: Task_ConstructProps) 
    /**
     * Create a new Task that will repeatedly call the provided `func`
     * with `user_data` as a parameter. Typically the task will run in
     * a new thread.
     * 
     * The function cannot be changed after the task has been created. You
     * must create a new #GstTask to change the function.
     * 
     * This function will not yet create and start a thread. Use gst_task_start() or
     * gst_task_pause() to create and start the GThread.
     * 
     * Before the task can be used, a #GRecMutex must be configured using the
     * gst_task_set_lock() function. This lock will always be acquired while
     * `func` is called.
     * @constructor 
     * @param func The #GstTaskFunction to use
     */
    constructor(func: TaskFunction) 
    /**
     * Create a new Task that will repeatedly call the provided `func`
     * with `user_data` as a parameter. Typically the task will run in
     * a new thread.
     * 
     * The function cannot be changed after the task has been created. You
     * must create a new #GstTask to change the function.
     * 
     * This function will not yet create and start a thread. Use gst_task_start() or
     * gst_task_pause() to create and start the GThread.
     * 
     * Before the task can be used, a #GRecMutex must be configured using the
     * gst_task_set_lock() function. This lock will always be acquired while
     * `func` is called.
     * @constructor 
     * @param func The #GstTaskFunction to use
     */
    static new(func: TaskFunction): Task
    _init(config?: Task_ConstructProps): void
    /**
     * Wait for all tasks to be stopped. This is mainly used internally
     * to ensure proper cleanup of internal data structures in test suites.
     * 
     * MT safe.
     */
    static cleanup_all(): void
}

interface TaskPool_ConstructProps extends Object_ConstructProps {
}

interface TaskPool {

    // Own fields of Gst-1.0.Gst.TaskPool

    object: Object

    // Owm methods of Gst-1.0.Gst.TaskPool

    /**
     * Wait for all tasks to be stopped. This is mainly used internally
     * to ensure proper cleanup of internal data structures in test suites.
     * 
     * MT safe.
     */
    cleanup(): void
    /**
     * Dispose of the handle returned by gst_task_pool_push(). This does
     * not need to be called with the default implementation as the default
     * #GstTaskPoolClass::push implementation always returns %NULL. This does not need to be
     * called either when calling gst_task_pool_join(), but should be called
     * when joining is not necessary, but gst_task_pool_push() returned a
     * non-%NULL value.
     * 
     * This method should only be called with the same `pool` instance that provided
     * `id`.
     * @param id the id
     */
    dispose_handle(id: object | null): void
    /**
     * Join a task and/or return it to the pool. `id` is the id obtained from
     * gst_task_pool_push(). The default implementation does nothing, as the
     * default #GstTaskPoolClass::push implementation always returns %NULL.
     * 
     * This method should only be called with the same `pool` instance that provided
     * `id`.
     * @param id the id
     */
    join(id: object | null): void
    /**
     * Prepare the taskpool for accepting gst_task_pool_push() operations.
     * 
     * MT safe.
     */
    prepare(): void
    /**
     * Start the execution of a new thread from `pool`.
     * @param func the function to call
     */
    push(func: TaskPoolFunction): object | null

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of Gst-1.0.Gst.TaskPool

    /**
     * Wait for all tasks to be stopped. This is mainly used internally
     * to ensure proper cleanup of internal data structures in test suites.
     * 
     * MT safe.
     * @virtual 
     */
    vfunc_cleanup(): void
    /**
     * Dispose of the handle returned by gst_task_pool_push(). This does
     * not need to be called with the default implementation as the default
     * #GstTaskPoolClass::push implementation always returns %NULL. This does not need to be
     * called either when calling gst_task_pool_join(), but should be called
     * when joining is not necessary, but gst_task_pool_push() returned a
     * non-%NULL value.
     * 
     * This method should only be called with the same `pool` instance that provided
     * `id`.
     * @virtual 
     * @param id the id
     */
    vfunc_dispose_handle(id: object | null): void
    /**
     * Join a task and/or return it to the pool. `id` is the id obtained from
     * gst_task_pool_push(). The default implementation does nothing, as the
     * default #GstTaskPoolClass::push implementation always returns %NULL.
     * 
     * This method should only be called with the same `pool` instance that provided
     * `id`.
     * @virtual 
     * @param id the id
     */
    vfunc_join(id: object | null): void
    /**
     * Prepare the taskpool for accepting gst_task_pool_push() operations.
     * 
     * MT safe.
     * @virtual 
     */
    vfunc_prepare(): void
    /**
     * Start the execution of a new thread from `pool`.
     * @virtual 
     * @param func the function to call
     */
    vfunc_push(func: TaskPoolFunction): object | null

    // Class property signals of Gst-1.0.Gst.TaskPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This object provides an abstraction for creating threads. The default
 * implementation uses a regular GThreadPool to start tasks.
 * 
 * Subclasses can be made to create custom threads.
 * @class 
 */
class TaskPool extends Object {

    // Own properties of Gst-1.0.Gst.TaskPool

    static name: string
    static $gtype: GObject.GType<TaskPool>

    // Constructors of Gst-1.0.Gst.TaskPool

    constructor(config?: TaskPool_ConstructProps) 
    /**
     * Create a new default task pool. The default task pool will use a regular
     * GThreadPool for threads.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new default task pool. The default task pool will use a regular
     * GThreadPool for threads.
     * @constructor 
     */
    static new(): TaskPool
    _init(config?: TaskPool_ConstructProps): void
}

interface Tracer_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-1.0.Gst.Tracer

    params?: string | null
}

interface Tracer {

    // Own properties of Gst-1.0.Gst.Tracer

    params: string

    // Own fields of Gst-1.0.Gst.Tracer

    parent: Object

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.Tracer

    connect(sigName: "notify::params", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Tracing modules will subclass #GstTracer and register through
 * gst_tracer_register(). Modules can attach to various hook-types - see
 * gst_tracing_register_hook(). When invoked they receive hook specific
 * contextual data, which they must not modify.
 * @class 
 */
class Tracer extends Object {

    // Own properties of Gst-1.0.Gst.Tracer

    static name: string
    static $gtype: GObject.GType<Tracer>

    // Constructors of Gst-1.0.Gst.Tracer

    constructor(config?: Tracer_ConstructProps) 
    _init(config?: Tracer_ConstructProps): void
    /**
     * Create a new tracer-factory  capable of instantiating objects of the
     * `type` and add the factory to `plugin`.
     * @param plugin A #GstPlugin, or %NULL for a static typefind function
     * @param name The name for registering
     * @param type GType of tracer to register
     */
    static register(plugin: Plugin | null, name: string, type: GObject.GType): boolean
}

interface TracerFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface TracerFactory {

    // Owm methods of Gst-1.0.Gst.TracerFactory

    /**
     * Get the #GType for elements managed by this factory. The type can
     * only be retrieved if the element factory is loaded, which can be
     * assured with gst_plugin_feature_load().
     */
    get_tracer_type(): GObject.GType

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.TracerFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Use gst_tracer_factory_get_list() to get a list of tracer factories known to
 * GStreamer.
 * @class 
 */
class TracerFactory extends PluginFeature {

    // Own properties of Gst-1.0.Gst.TracerFactory

    static name: string
    static $gtype: GObject.GType<TracerFactory>

    // Constructors of Gst-1.0.Gst.TracerFactory

    constructor(config?: TracerFactory_ConstructProps) 
    _init(config?: TracerFactory_ConstructProps): void
    /**
     * Gets the list of all registered tracer factories. You must free the
     * list using gst_plugin_feature_list_free().
     * 
     * The returned factories are sorted by factory name.
     * 
     * Free-function: gst_plugin_feature_list_free
     */
    static get_list(): TracerFactory[]
}

interface TracerRecord_ConstructProps extends Object_ConstructProps {
}

interface TracerRecord {

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.TracerRecord

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Tracing modules will create instances of this class to announce the data they
 * will log and create a log formatter.
 * @class 
 */
class TracerRecord extends Object {

    // Own properties of Gst-1.0.Gst.TracerRecord

    static name: string
    static $gtype: GObject.GType<TracerRecord>

    // Constructors of Gst-1.0.Gst.TracerRecord

    constructor(config?: TracerRecord_ConstructProps) 
    _init(config?: TracerRecord_ConstructProps): void
}

interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface TypeFindFactory {

    // Owm methods of Gst-1.0.Gst.TypeFindFactory

    /**
     * Calls the #GstTypeFindFunction associated with this factory.
     * @param find a properly setup #GstTypeFind entry. The get_data     and suggest_type members must be set.
     */
    call_function(find: TypeFind): void
    /**
     * Gets the #GstCaps associated with a typefind factory.
     */
    get_caps(): Caps | null
    /**
     * Gets the extensions associated with a #GstTypeFindFactory. The returned
     * array should not be changed. If you need to change stuff in it, you should
     * copy it using g_strdupv().  This function may return %NULL to indicate
     * a 0-length list.
     */
    get_extensions(): string[] | null
    /**
     * Check whether the factory has a typefind function. Typefind factories
     * without typefind functions are a last-effort fallback mechanism to
     * e.g. assume a certain media type based on the file extension.
     */
    has_function(): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of Gst-1.0.Gst.TypeFindFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * These functions allow querying information about registered typefind
 * functions. How to create and register these functions is described in
 * the section <link linkend="gstreamer-Writing-typefind-functions">
 * "Writing typefind functions"</link>.
 * 
 * The following example shows how to write a very simple typefinder that
 * identifies the given data. You can get quite a bit more complicated than
 * that though.
 * 
 * ```c
 *   typedef struct {
 *     guint8 *data;
 *     guint size;
 *     guint probability;
 *     GstCaps *data;
 *   } MyTypeFind;
 *   static void
 *   my_peek (gpointer data, gint64 offset, guint size)
 *   {
 *     MyTypeFind *find = (MyTypeFind *) data;
 *     if (offset >= 0 && offset + size <= find->size) {
 *       return find->data + offset;
 *     }
 *     return NULL;
 *   }
 *   static void
 *   my_suggest (gpointer data, guint probability, GstCaps *caps)
 *   {
 *     MyTypeFind *find = (MyTypeFind *) data;
 *     if (probability > find->probability) {
 *       find->probability = probability;
 *       gst_caps_replace (&find->caps, caps);
 *     }
 *   }
 *   static GstCaps *
 *   find_type (guint8 *data, guint size)
 *   {
 *     GList *walk, *type_list;
 *     MyTypeFind find = {data, size, 0, NULL};
 *     GstTypeFind gst_find = {my_peek, my_suggest, &find, };
 *     walk = type_list = gst_type_find_factory_get_list ();
 *     while (walk) {
 *       GstTypeFindFactory *factory = GST_TYPE_FIND_FACTORY (walk->data);
 *       walk = g_list_next (walk)
 *       gst_type_find_factory_call_function (factory, &gst_find);
 *     }
 *     g_list_free (type_list);
 *     return find.caps;
 *   };
 * ```
 * 
 * @class 
 */
class TypeFindFactory extends PluginFeature {

    // Own properties of Gst-1.0.Gst.TypeFindFactory

    static name: string
    static $gtype: GObject.GType<TypeFindFactory>

    // Constructors of Gst-1.0.Gst.TypeFindFactory

    constructor(config?: TypeFindFactory_ConstructProps) 
    _init(config?: TypeFindFactory_ConstructProps): void
    /**
     * Gets the list of all registered typefind factories. You must free the
     * list using gst_plugin_feature_list_free().
     * 
     * The returned factories are sorted by highest rank first, and then by
     * factory name.
     * 
     * Free-function: gst_plugin_feature_list_free
     */
    static get_list(): TypeFindFactory[]
}

interface ValueArray {
}

/**
 * A fundamental type that describes an ordered list of #GValue
 * @class 
 */
class ValueArray {

    // Own properties of Gst-1.0.Gst.ValueArray

    static name: string

    // Constructors of Gst-1.0.Gst.ValueArray

    /**
     * Appends `append_value` to the GstValueArray in `value`.
     * @param value a #GValue of type #GST_TYPE_ARRAY
     * @param append_value the value to append
     */
    static append_and_take_value(value: any, append_value: any): void
    /**
     * Appends `append_value` to the GstValueArray in `value`.
     * @param value a #GValue of type #GST_TYPE_ARRAY
     * @param append_value the value to append
     */
    static append_value(value: any, append_value: any): void
    /**
     * Gets the number of values contained in `value`.
     * @param value a #GValue of type #GST_TYPE_ARRAY
     */
    static get_size(value: any): number
    /**
     * Gets the value that is a member of the array contained in `value` and
     * has the index `index`.
     * @param value a #GValue of type #GST_TYPE_ARRAY
     * @param index index of value to get from the array
     */
    static get_value(value: any, index: number): any
    /**
     * Initializes and pre-allocates a #GValue of type #GST_TYPE_ARRAY.
     * @param value A zero-filled (uninitialized) #GValue structure
     * @param prealloc The number of entries to pre-allocate in the array
     */
    static init(value: any, prealloc: number): any
    /**
     * Prepends `prepend_value` to the GstValueArray in `value`.
     * @param value a #GValue of type #GST_TYPE_ARRAY
     * @param prepend_value the value to prepend
     */
    static prepend_value(value: any, prepend_value: any): void
}

interface ValueList {
}

/**
 * A fundamental type that describes an unordered list of #GValue
 * @class 
 */
class ValueList {

    // Own properties of Gst-1.0.Gst.ValueList

    static name: string

    // Constructors of Gst-1.0.Gst.ValueList

    /**
     * Appends `append_value` to the GstValueList in `value`.
     * @param value a #GValue of type #GST_TYPE_LIST
     * @param append_value the value to append
     */
    static append_and_take_value(value: any, append_value: any): void
    /**
     * Appends `append_value` to the GstValueList in `value`.
     * @param value a #GValue of type #GST_TYPE_LIST
     * @param append_value the value to append
     */
    static append_value(value: any, append_value: any): void
    /**
     * Concatenates copies of `value1` and `value2` into a list.  Values that are not
     * of type #GST_TYPE_LIST are treated as if they were lists of length 1.
     * `dest` will be initialized to the type #GST_TYPE_LIST.
     * @param value1 a #GValue
     * @param value2 a #GValue
     */
    static concat(value1: any, value2: any): /* dest */ any
    /**
     * Gets the number of values contained in `value`.
     * @param value a #GValue of type #GST_TYPE_LIST
     */
    static get_size(value: any): number
    /**
     * Gets the value that is a member of the list contained in `value` and
     * has the index `index`.
     * @param value a #GValue of type #GST_TYPE_LIST
     * @param index index of value to get from the list
     */
    static get_value(value: any, index: number): any
    /**
     * Initializes and pre-allocates a #GValue of type #GST_TYPE_LIST.
     * @param value A zero-filled (uninitialized) #GValue structure
     * @param prealloc The number of entries to pre-allocate in the list
     */
    static init(value: any, prealloc: number): any
    /**
     * Merges copies of `value1` and `value2`.  Values that are not
     * of type #GST_TYPE_LIST are treated as if they were lists of length 1.
     * 
     * The result will be put into `dest` and will either be a list that will not
     * contain any duplicates, or a non-list type (if `value1` and `value2`
     * were equal).
     * @param value1 a #GValue
     * @param value2 a #GValue
     */
    static merge(value1: any, value2: any): /* dest */ any
    /**
     * Prepends `prepend_value` to the GstValueList in `value`.
     * @param value a #GValue of type #GST_TYPE_LIST
     * @param prepend_value the value to prepend
     */
    static prepend_value(value: any, prepend_value: any): void
}

interface AllocationParams {

    // Own fields of Gst-1.0.Gst.AllocationParams

    /**
     * flags to control allocation
     * @field 
     */
    flags: MemoryFlags
    /**
     * the desired alignment of the memory
     * @field 
     */
    align: number
    /**
     * the desired prefix
     * @field 
     */
    prefix: number
    /**
     * the desired padding
     * @field 
     */
    padding: number

    // Owm methods of Gst-1.0.Gst.AllocationParams

    /**
     * Create a copy of `params`.
     */
    copy(): AllocationParams | null
    /**
     * Free `params`
     */
    free(): void
    /**
     * Initialize `params` to its default values
     */
    init(): void
}

/**
 * Parameters to control the allocation of memory
 * @record 
 */
class AllocationParams {

    // Own properties of Gst-1.0.Gst.AllocationParams

    static name: string

    // Constructors of Gst-1.0.Gst.AllocationParams

    /**
     * Create a new #GstAllocationParams on the heap.  This function is for
     * use in GStreamer language bindings.  In your own code, you can just
     * declare a #GstAllocationParams on the stack or in a struct, and
     * call gst_allocation_params_init() to initialize it.
     * 
     * You do not need to call gst_allocation_params_init() on the instance
     * returned by this function.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstAllocationParams on the heap.  This function is for
     * use in GStreamer language bindings.  In your own code, you can just
     * declare a #GstAllocationParams on the stack or in a struct, and
     * call gst_allocation_params_init() to initialize it.
     * 
     * You do not need to call gst_allocation_params_init() on the instance
     * returned by this function.
     * @constructor 
     */
    static new(): AllocationParams
}

interface AllocatorClass {

    // Own fields of Gst-1.0.Gst.AllocatorClass

    /**
     * Object parent class
     * @field 
     */
    object_class: ObjectClass
    alloc: (allocator: Allocator | null, size: number, params: AllocationParams | null) => Memory | null
    free: (allocator: Allocator, memory: Memory) => void
}

/**
 * The #GstAllocator is used to create new memory.
 * @record 
 */
abstract class AllocatorClass {

    // Own properties of Gst-1.0.Gst.AllocatorClass

    static name: string
}

interface AllocatorPrivate {
}

class AllocatorPrivate {

    // Own properties of Gst-1.0.Gst.AllocatorPrivate

    static name: string
}

interface AtomicQueue {

    // Owm methods of Gst-1.0.Gst.AtomicQueue

    /**
     * Get the amount of items in the queue.
     */
    length(): number
    /**
     * Peek the head element of the queue without removing it from the queue.
     */
    peek(): object | null
    /**
     * Get the head element of the queue.
     */
    pop(): object | null
    /**
     * Append `data` to the tail of the queue.
     * @param data the data
     */
    push(data: object | null): void
    /**
     * Increase the refcount of `queue`.
     */
    ref(): void
    /**
     * Unref `queue` and free the memory when the refcount reaches 0.
     */
    unref(): void
}

/**
 * The #GstAtomicQueue object implements a queue that can be used from multiple
 * threads without performing any blocking operations.
 * @record 
 */
class AtomicQueue {

    // Own properties of Gst-1.0.Gst.AtomicQueue

    static name: string

    // Constructors of Gst-1.0.Gst.AtomicQueue

    /**
     * Create a new atomic queue instance. `initial_size` will be rounded up to the
     * nearest power of 2 and used as the initial size of the queue.
     * @constructor 
     * @param initial_size initial queue size
     */
    constructor(initial_size: number) 
    /**
     * Create a new atomic queue instance. `initial_size` will be rounded up to the
     * nearest power of 2 and used as the initial size of the queue.
     * @constructor 
     * @param initial_size initial queue size
     */
    static new(initial_size: number): AtomicQueue
}

interface BinClass {

    // Own fields of Gst-1.0.Gst.BinClass

    /**
     * bin parent class
     * @field 
     */
    parent_class: ElementClass
    element_added: (bin: Bin, child: Element) => void
    element_removed: (bin: Bin, child: Element) => void
    add_element: (bin: Bin, element: Element) => boolean
    remove_element: (bin: Bin, element: Element) => boolean
    handle_message: (bin: Bin, message: Message) => void
    do_latency: (bin: Bin) => boolean
    deep_element_added: (bin: Bin, sub_bin: Bin, child: Element) => void
    deep_element_removed: (bin: Bin, sub_bin: Bin, child: Element) => void
}

/**
 * Subclasses can override #GstBinClass::add_element and #GstBinClass::remove_element
 * to update the list of children in the bin.
 * 
 * The #GstBinClass::handle_message method can be overridden to implement custom
 * message handling.
 * 
 * #GstBinClass::deep_element_added will be called when a new element has been
 * added to any bin inside this bin, so it will also be called if a new child
 * was added to a sub-bin of this bin. #GstBin implementations that override
 * this message should chain up to the parent class implementation so the
 * #GstBin::deep-element-added signal is emitted on all parents.
 * @record 
 */
abstract class BinClass {

    // Own properties of Gst-1.0.Gst.BinClass

    static name: string
}

interface BinPrivate {
}

class BinPrivate {

    // Own properties of Gst-1.0.Gst.BinPrivate

    static name: string
}

interface Buffer {

    // Own fields of Gst-1.0.Gst.Buffer

    /**
     * the parent structure
     * @field 
     */
    mini_object: MiniObject
    /**
     * pointer to the pool owner of the buffer
     * @field 
     */
    pool: BufferPool
    /**
     * presentation timestamp of the buffer, can be #GST_CLOCK_TIME_NONE when the
     *     pts is not known or relevant. The pts contains the timestamp when the
     *     media should be presented to the user.
     * @field 
     */
    pts: ClockTime
    /**
     * decoding timestamp of the buffer, can be #GST_CLOCK_TIME_NONE when the
     *     dts is not known or relevant. The dts contains the timestamp when the
     *     media should be processed.
     * @field 
     */
    dts: ClockTime
    /**
     * duration in time of the buffer data, can be #GST_CLOCK_TIME_NONE
     *     when the duration is not known or relevant.
     * @field 
     */
    duration: ClockTime
    /**
     * a media specific offset for the buffer data.
     *     For video frames, this is the frame number of this buffer.
     *     For audio samples, this is the offset of the first sample in this buffer.
     *     For file data or compressed data this is the byte offset of the first
     *       byte in this buffer.
     * @field 
     */
    offset: number
    /**
     * the last offset contained in this buffer. It has the same
     *     format as `offset`.
     * @field 
     */
    offset_end: number

    // Owm methods of Gst-1.0.Gst.Buffer

    /**
     * Creates and adds a #GstCustomMeta for the desired `name`. `name` must have
     * been successfully registered with gst_meta_register_custom().
     * @param name the registered name of the desired custom meta
     */
    add_custom_meta(name: string): CustomMeta | null
    /**
     * Adds metadata for `info` to `buffer` using the parameters in `params`.
     * @param info a #GstMetaInfo
     * @param params params for `info`
     */
    add_meta(info: MetaInfo, params: object | null): Meta | null
    /**
     * Adds a #GstParentBufferMeta to `buffer` that holds a reference on
     * `ref` until the buffer is freed.
     * @param ref a #GstBuffer to ref
     */
    add_parent_buffer_meta(ref: Buffer): ParentBufferMeta | null
    /**
     * Attaches protection metadata to a #GstBuffer.
     * @param info a #GstStructure holding cryptographic     information relating to the sample contained in `buffer`. This     function takes ownership of `info`.
     */
    add_protection_meta(info: Structure): ProtectionMeta
    /**
     * Adds a #GstReferenceTimestampMeta to `buffer` that holds a `timestamp` and
     * optionally `duration` based on a specific timestamp `reference`. See the
     * documentation of #GstReferenceTimestampMeta for details.
     * @param reference identifier for the timestamp reference.
     * @param timestamp timestamp
     * @param duration duration, or %GST_CLOCK_TIME_NONE
     */
    add_reference_timestamp_meta(reference: Caps, timestamp: ClockTime, duration: ClockTime): ReferenceTimestampMeta | null
    /**
     * Appends all the memory from `buf2` to `buf1`. The result buffer will contain a
     * concatenation of the memory of `buf1` and `buf2`.
     * @param buf2 the second source #GstBuffer to append.
     */
    append(buf2: Buffer): Buffer
    /**
     * Appends the memory block `mem` to `buffer`. This function takes
     * ownership of `mem` and thus doesn't increase its refcount.
     * 
     * This function is identical to gst_buffer_insert_memory() with an index of -1.
     * See gst_buffer_insert_memory() for more details.
     * @param mem a #GstMemory.
     */
    append_memory(mem: Memory): void
    /**
     * Appends `size` bytes at `offset` from `buf2` to `buf1`. The result buffer will
     * contain a concatenation of the memory of `buf1` and the requested region of
     * `buf2`.
     * @param buf2 the second source #GstBuffer to append.
     * @param offset the offset in `buf2`
     * @param size the size or -1 of `buf2`
     */
    append_region(buf2: Buffer, offset: number, size: number): Buffer
    /**
     * Creates a copy of the given buffer. This will make a newly allocated
     * copy of the data the source buffer contains.
     */
    copy_deep(): Buffer
    /**
     * Copies the information from `src` into `dest`.
     * 
     * If `dest` already contains memory and `flags` contains GST_BUFFER_COPY_MEMORY,
     * the memory from `src` will be appended to `dest`.
     * 
     * `flags` indicate which fields will be copied.
     * @param src a source #GstBuffer
     * @param flags flags indicating what metadata fields should be copied.
     * @param offset offset to copy from
     * @param size total size to copy. If -1, all data is copied.
     */
    copy_into(src: Buffer, flags: BufferCopyFlags, offset: number, size: number): boolean
    /**
     * Creates a sub-buffer from `parent` at `offset` and `size`.
     * This sub-buffer uses the actual memory space of the parent buffer.
     * This function will copy the offset and timestamp fields when the
     * offset is 0. If not, they will be set to #GST_CLOCK_TIME_NONE and
     * #GST_BUFFER_OFFSET_NONE.
     * If `offset` equals 0 and `size` equals the total size of `buffer,` the
     * duration and offset end fields are also copied. If not they will be set
     * to #GST_CLOCK_TIME_NONE and #GST_BUFFER_OFFSET_NONE.
     * @param flags the #GstBufferCopyFlags
     * @param offset the offset into parent #GstBuffer at which the new sub-buffer          begins.
     * @param size the size of the new #GstBuffer sub-buffer, in bytes. If -1, all        data is copied.
     */
    copy_region(flags: BufferCopyFlags, offset: number, size: number): Buffer
    /**
     * Copies `size` bytes starting from `offset` in `buffer` to `dest`.
     * @param offset the offset to extract
     */
    extract(offset: number): [ /* returnType */ number, /* dest */ Uint8Array ]
    /**
     * Extracts a copy of at most `size` bytes the data at `offset` into
     * newly-allocated memory. `dest` must be freed using g_free() when done.
     * @param offset the offset to extract
     * @param size the size to extract
     */
    extract_dup(offset: number, size: number): /* dest */ Uint8Array
    /**
     * Copies `size` bytes from `src` to `buffer` at `offset`.
     * @param offset the offset to fill
     * @param src the source address
     */
    fill(offset: number, src: Uint8Array): number
    /**
     * Finds the memory blocks that span `size` bytes starting from `offset`
     * in `buffer`.
     * 
     * When this function returns %TRUE, `idx` will contain the index of the first
     * memory block where the byte for `offset` can be found and `length` contains the
     * number of memory blocks containing the `size` remaining bytes. `skip` contains
     * the number of bytes to skip in the memory block at `idx` to get to the byte
     * for `offset`.
     * 
     * `size` can be -1 to get all the memory blocks after `idx`.
     * @param offset an offset
     * @param size a size
     */
    find_memory(offset: number, size: number): [ /* returnType */ boolean, /* idx */ number, /* length */ number, /* skip */ number ]
    /**
     * Calls `func` with `user_data` for each meta in `buffer`.
     * 
     * `func` can modify the passed meta pointer or its contents. The return value
     * of `func` defines if this function returns or if the remaining metadata items
     * in the buffer should be skipped.
     * @param func a #GstBufferForeachMetaFunc to call
     */
    foreach_meta(func: BufferForeachMetaFunc): boolean
    /**
     * Gets all the memory blocks in `buffer`. The memory blocks will be merged
     * into one large #GstMemory.
     */
    get_all_memory(): Memory | null
    /**
     * Finds the first #GstCustomMeta on `buffer` for the desired `name`.
     * @param name the registered name of the custom meta to retrieve.
     */
    get_custom_meta(name: string): CustomMeta | null
    /**
     * Gets the #GstBufferFlags flags set on this buffer.
     */
    get_flags(): BufferFlags
    /**
     * Gets the memory block at index `idx` in `buffer`.
     * @param idx an index
     */
    get_memory(idx: number): Memory | null
    /**
     * Gets `length` memory blocks in `buffer` starting at `idx`. The memory blocks will
     * be merged into one large #GstMemory.
     * 
     * If `length` is -1, all memory starting from `idx` is merged.
     * @param idx an index
     * @param length a length
     */
    get_memory_range(idx: number, length: number): Memory | null
    /**
     * Gets the metadata for `api` on buffer. When there is no such metadata, %NULL is
     * returned. If multiple metadata with the given `api` are attached to this
     * buffer only the first one is returned.  To handle multiple metadata with a
     * given API use gst_buffer_iterate_meta() or gst_buffer_foreach_meta() instead
     * and check the `meta->info.api` member for the API type.
     * @param api the #GType of an API
     */
    get_meta(api: GObject.GType): Meta | null
    get_n_meta(api_type: GObject.GType): number
    /**
     * Finds the first #GstReferenceTimestampMeta on `buffer` that conforms to
     * `reference`. Conformance is tested by checking if the meta's reference is a
     * subset of `reference`.
     * 
     * Buffers can contain multiple #GstReferenceTimestampMeta metadata items.
     * @param reference a reference #GstCaps
     */
    get_reference_timestamp_meta(reference: Caps | null): ReferenceTimestampMeta | null
    /**
     * Gets the total size of the memory blocks in `buffer`.
     */
    get_size(): number
    /**
     * Gets the total size of the memory blocks in `buffer`.
     * 
     * When not %NULL, `offset` will contain the offset of the data in the
     * first memory block in `buffer` and `maxsize` will contain the sum of
     * the size and `offset` and the amount of extra padding on the last
     * memory block.  `offset` and `maxsize` can be used to resize the
     * buffer memory blocks with gst_buffer_resize().
     */
    get_sizes(): [ /* returnType */ number, /* offset */ number, /* maxsize */ number ]
    /**
     * Gets the total size of `length` memory blocks stating from `idx` in `buffer`.
     * 
     * When not %NULL, `offset` will contain the offset of the data in the
     * memory block in `buffer` at `idx` and `maxsize` will contain the sum of the size
     * and `offset` and the amount of extra padding on the memory block at `idx` +
     * `length` -1.
     * `offset` and `maxsize` can be used to resize the buffer memory blocks with
     * gst_buffer_resize_range().
     * @param idx an index
     * @param length a length
     */
    get_sizes_range(idx: number, length: number): [ /* returnType */ number, /* offset */ number, /* maxsize */ number ]
    /**
     * Gives the status of a specific flag on a buffer.
     * @param flags the #GstBufferFlags flag to check.
     */
    has_flags(flags: BufferFlags): boolean
    /**
     * Inserts the memory block `mem` into `buffer` at `idx`. This function takes ownership
     * of `mem` and thus doesn't increase its refcount.
     * 
     * Only gst_buffer_get_max_memory() can be added to a buffer. If more memory is
     * added, existing memory blocks will automatically be merged to make room for
     * the new memory.
     * @param idx the index to add the memory at, or -1 to append it to the end
     * @param mem a #GstMemory.
     */
    insert_memory(idx: number, mem: Memory): void
    /**
     * Checks if all memory blocks in `buffer` are writable.
     * 
     * Note that this function does not check if `buffer` is writable, use
     * gst_buffer_is_writable() to check that if needed.
     */
    is_all_memory_writable(): boolean
    /**
     * Checks if `length` memory blocks in `buffer` starting from `idx` are writable.
     * 
     * `length` can be -1 to check all the memory blocks after `idx`.
     * 
     * Note that this function does not check if `buffer` is writable, use
     * gst_buffer_is_writable() to check that if needed.
     * @param idx an index
     * @param length a length, should not be 0
     */
    is_memory_range_writable(idx: number, length: number): boolean
    /**
     * Fills `info` with the #GstMapInfo of all merged memory blocks in `buffer`.
     * 
     * `flags` describe the desired access of the memory. When `flags` is
     * #GST_MAP_WRITE, `buffer` should be writable (as returned from
     * gst_buffer_is_writable()).
     * 
     * When `buffer` is writable but the memory isn't, a writable copy will
     * automatically be created and returned. The readonly copy of the
     * buffer memory will then also be replaced with this writable copy.
     * 
     * The memory in `info` should be unmapped with gst_buffer_unmap() after
     * usage.
     * @param flags flags for the mapping
     */
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    /**
     * Fills `info` with the #GstMapInfo of `length` merged memory blocks
     * starting at `idx` in `buffer`. When `length` is -1, all memory blocks starting
     * from `idx` are merged and mapped.
     * 
     * `flags` describe the desired access of the memory. When `flags` is
     * #GST_MAP_WRITE, `buffer` should be writable (as returned from
     * gst_buffer_is_writable()).
     * 
     * When `buffer` is writable but the memory isn't, a writable copy will
     * automatically be created and returned. The readonly copy of the buffer memory
     * will then also be replaced with this writable copy.
     * 
     * The memory in `info` should be unmapped with gst_buffer_unmap() after usage.
     * @param idx an index
     * @param length a length
     * @param flags flags for the mapping
     */
    map_range(idx: number, length: number, flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    /**
     * Compares `size` bytes starting from `offset` in `buffer` with the memory in `mem`.
     * @param offset the offset in `buffer`
     * @param mem the memory to compare
     */
    memcmp(offset: number, mem: Uint8Array): number
    /**
     * Fills `buf` with `size` bytes with `val` starting from `offset`.
     * @param offset the offset in `buffer`
     * @param val the value to set
     * @param size the size to set
     */
    memset(offset: number, val: number, size: number): number
    /**
     * Gets the amount of memory blocks that this buffer has. This amount is never
     * larger than what gst_buffer_get_max_memory() returns.
     */
    n_memory(): number
    /**
     * Gets the memory block at `idx` in `buffer`. The memory block stays valid until
     * the memory block in `buffer` is removed, replaced or merged, typically with
     * any call that modifies the memory in `buffer`.
     * @param idx an index
     */
    peek_memory(idx: number): Memory | null
    /**
     * Prepends the memory block `mem` to `buffer`. This function takes
     * ownership of `mem` and thus doesn't increase its refcount.
     * 
     * This function is identical to gst_buffer_insert_memory() with an index of 0.
     * See gst_buffer_insert_memory() for more details.
     * @param mem a #GstMemory.
     */
    prepend_memory(mem: Memory): void
    /**
     * Removes all the memory blocks in `buffer`.
     */
    remove_all_memory(): void
    /**
     * Removes the memory block in `b` at index `i`.
     * @param idx an index
     */
    remove_memory(idx: number): void
    /**
     * Removes `length` memory blocks in `buffer` starting from `idx`.
     * 
     * `length` can be -1, in which case all memory starting from `idx` is removed.
     * @param idx an index
     * @param length a length
     */
    remove_memory_range(idx: number, length: number): void
    /**
     * Removes the metadata for `meta` on `buffer`.
     * @param meta a #GstMeta
     */
    remove_meta(meta: Meta): boolean
    /**
     * Replaces all memory in `buffer` with `mem`.
     * @param mem a #GstMemory
     */
    replace_all_memory(mem: Memory): void
    /**
     * Replaces the memory block at index `idx` in `buffer` with `mem`.
     * @param idx an index
     * @param mem a #GstMemory
     */
    replace_memory(idx: number, mem: Memory): void
    /**
     * Replaces `length` memory blocks in `buffer` starting at `idx` with `mem`.
     * 
     * If `length` is -1, all memory starting from `idx` will be removed and
     * replaced with `mem`.
     * 
     * `buffer` should be writable.
     * @param idx an index
     * @param length a length, should not be 0
     * @param mem a #GstMemory
     */
    replace_memory_range(idx: number, length: number, mem: Memory): void
    /**
     * Sets the offset and total size of the memory blocks in `buffer`.
     * @param offset the offset adjustment
     * @param size the new size or -1 to just adjust the offset
     */
    resize(offset: number, size: number): void
    /**
     * Sets the total size of the `length` memory blocks starting at `idx` in
     * `buffer`
     * @param idx an index
     * @param length a length
     * @param offset the offset adjustment
     * @param size the new size or -1 to just adjust the offset
     */
    resize_range(idx: number, length: number, offset: number, size: number): boolean
    /**
     * Sets one or more buffer flags on a buffer.
     * @param flags the #GstBufferFlags to set.
     */
    set_flags(flags: BufferFlags): boolean
    /**
     * Sets the total size of the memory blocks in `buffer`.
     * @param size the new size
     */
    set_size(size: number): void
    /**
     * Releases the memory previously mapped with gst_buffer_map().
     * @param info a #GstMapInfo
     */
    unmap(info: MapInfo): void
    /**
     * Clears one or more buffer flags.
     * @param flags the #GstBufferFlags to clear
     */
    unset_flags(flags: BufferFlags): boolean
}

/**
 * Buffers are the basic unit of data transfer in GStreamer. They contain the
 * timing and offset along with other arbitrary metadata that is associated
 * with the #GstMemory blocks that the buffer contains.
 * 
 * Buffers are usually created with gst_buffer_new(). After a buffer has been
 * created one will typically allocate memory for it and add it to the buffer.
 * The following example creates a buffer that can hold a given video frame
 * with a given width, height and bits per plane.
 * 
 * ``` C
 *   GstBuffer *buffer;
 *   GstMemory *memory;
 *   gint size, width, height, bpp;
 *   ...
 *   size = width * height * bpp;
 *   buffer = gst_buffer_new ();
 *   memory = gst_allocator_alloc (NULL, size, NULL);
 *   gst_buffer_insert_memory (buffer, -1, memory);
 *   ...
 * ```
 * 
 * Alternatively, use gst_buffer_new_allocate() to create a buffer with
 * preallocated data of a given size.
 * 
 * Buffers can contain a list of #GstMemory objects. You can retrieve how many
 * memory objects with gst_buffer_n_memory() and you can get a pointer
 * to memory with gst_buffer_peek_memory()
 * 
 * A buffer will usually have timestamps, and a duration, but neither of these
 * are guaranteed (they may be set to #GST_CLOCK_TIME_NONE). Whenever a
 * meaningful value can be given for these, they should be set. The timestamps
 * and duration are measured in nanoseconds (they are #GstClockTime values).
 * 
 * The buffer DTS refers to the timestamp when the buffer should be decoded and
 * is usually monotonically increasing. The buffer PTS refers to the timestamp when
 * the buffer content should be presented to the user and is not always
 * monotonically increasing.
 * 
 * A buffer can also have one or both of a start and an end offset. These are
 * media-type specific. For video buffers, the start offset will generally be
 * the frame number. For audio buffers, it will be the number of samples
 * produced so far. For compressed data, it could be the byte offset in a
 * source or destination file. Likewise, the end offset will be the offset of
 * the end of the buffer. These can only be meaningfully interpreted if you
 * know the media type of the buffer (the preceding CAPS event). Either or both
 * can be set to #GST_BUFFER_OFFSET_NONE.
 * 
 * gst_buffer_ref() is used to increase the refcount of a buffer. This must be
 * done when you want to keep a handle to the buffer after pushing it to the
 * next element. The buffer refcount determines the writability of the buffer, a
 * buffer is only writable when the refcount is exactly 1, i.e. when the caller
 * has the only reference to the buffer.
 * 
 * To efficiently create a smaller buffer out of an existing one, you can
 * use gst_buffer_copy_region(). This method tries to share the memory objects
 * between the two buffers.
 * 
 * If a plug-in wants to modify the buffer data or metadata in-place, it should
 * first obtain a buffer that is safe to modify by using
 * gst_buffer_make_writable(). This function is optimized so that a copy will
 * only be made when it is necessary.
 * 
 * Several flags of the buffer can be set and unset with the
 * GST_BUFFER_FLAG_SET() and GST_BUFFER_FLAG_UNSET() macros. Use
 * GST_BUFFER_FLAG_IS_SET() to test if a certain #GstBufferFlags flag is set.
 * 
 * Buffers can be efficiently merged into a larger buffer with
 * gst_buffer_append(). Copying of memory will only be done when absolutely
 * needed.
 * 
 * Arbitrary extra metadata can be set on a buffer with gst_buffer_add_meta().
 * Metadata can be retrieved with gst_buffer_get_meta(). See also #GstMeta.
 * 
 * An element should either unref the buffer or push it out on a src pad
 * using gst_pad_push() (see #GstPad).
 * 
 * Buffers are usually freed by unreffing them with gst_buffer_unref(). When
 * the refcount drops to 0, any memory and metadata pointed to by the buffer is
 * unreffed as well. Buffers allocated from a #GstBufferPool will be returned to
 * the pool when the refcount drops to 0.
 * 
 * The #GstParentBufferMeta is a meta which can be attached to a #GstBuffer
 * to hold a reference to another buffer that is only released when the child
 * #GstBuffer is released.
 * 
 * Typically, #GstParentBufferMeta is used when the child buffer is directly
 * using the #GstMemory of the parent buffer, and wants to prevent the parent
 * buffer from being returned to a buffer pool until the #GstMemory is available
 * for re-use. (Since: 1.6)
 * @record 
 */
class Buffer {

    // Own properties of Gst-1.0.Gst.Buffer

    static name: string

    // Constructors of Gst-1.0.Gst.Buffer

    /**
     * Creates a newly allocated buffer without any data.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a newly allocated buffer without any data.
     * @constructor 
     */
    static new(): Buffer
    /**
     * Tries to create a newly allocated buffer with data of the given size and
     * extra parameters from `allocator`. If the requested amount of memory can't be
     * allocated, %NULL will be returned. The allocated buffer memory is not cleared.
     * 
     * When `allocator` is %NULL, the default memory allocator will be used.
     * 
     * Note that when `size` == 0, the buffer will not have memory associated with it.
     * @constructor 
     * @param allocator the #GstAllocator to use, or %NULL to use the     default allocator
     * @param size the size in bytes of the new buffer's data.
     * @param params optional parameters
     */
    static new_allocate(allocator: Allocator | null, size: number, params: AllocationParams | null): Buffer
    /**
     * Creates a new buffer of size `size` and fills it with a copy of `data`.
     * @constructor 
     * @param data data to copy into new buffer
     */
    static new_memdup(data: Uint8Array): Buffer
    /**
     * Creates a new buffer that wraps the given `data`. The memory will be freed
     * with g_free() and will be marked writable.
     * @constructor 
     * @param data data to wrap
     */
    static new_wrapped(data: Uint8Array): Buffer
    /**
     * Creates a new #GstBuffer that wraps the given `bytes`. The data inside
     * `bytes` cannot be %NULL and the resulting buffer will be marked as read only.
     * @constructor 
     * @param bytes a #GBytes to wrap
     */
    static new_wrapped_bytes(bytes: GLib.Bytes): Buffer
    /**
     * Allocates a new buffer that wraps the given memory. `data` must point to
     * `maxsize` of memory, the wrapped buffer will have the region from `offset` and
     * `size` visible.
     * 
     * When the buffer is destroyed, `notify` will be called with `user_data`.
     * 
     * The prefix/padding must be filled with 0 if `flags` contains
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED respectively.
     * @constructor 
     * @param flags #GstMemoryFlags
     * @param data data to wrap
     * @param maxsize allocated size of `data`
     * @param offset offset in `data`
     * @param notify called with `user_data` when the memory is freed
     */
    static new_wrapped_full(flags: MemoryFlags, data: Uint8Array, maxsize: number, offset: number, notify: GLib.DestroyNotify | null): Buffer
    /**
     * Gets the maximum amount of memory blocks that a buffer can hold. This is a
     * compile time constant that can be queried with the function.
     * 
     * When more memory blocks are added, existing memory blocks will be merged
     * together to make room for the new block.
     */
    static get_max_memory(): number
}

interface BufferList {

    // Owm methods of Gst-1.0.Gst.BufferList

    /**
     * Calculates the size of the data contained in `list` by adding the
     * size of all buffers.
     */
    calculate_size(): number
    /**
     * Creates a copy of the given buffer list. This will make a newly allocated
     * copy of the buffers that the source buffer list contains.
     */
    copy_deep(): BufferList
    /**
     * Calls `func` with `data` for each buffer in `list`.
     * 
     * `func` can modify the passed buffer pointer or its contents. The return value
     * of `func` defines if this function returns or if the remaining buffers in
     * the list should be skipped.
     * @param func a #GstBufferListFunc to call
     */
    foreach(func: BufferListFunc): boolean
    /**
     * Gets the buffer at `idx`.
     * 
     * You must make sure that `idx` does not exceed the number of
     * buffers available.
     * @param idx the index
     */
    get(idx: number): Buffer | null
    /**
     * Gets the buffer at `idx,` ensuring it is a writable buffer.
     * 
     * You must make sure that `idx` does not exceed the number of
     * buffers available.
     * @param idx the index
     */
    get_writable(idx: number): Buffer | null
    /**
     * Inserts `buffer` at `idx` in `list`. Other buffers are moved to make room for
     * this new buffer.
     * 
     * A -1 value for `idx` will append the buffer at the end.
     * @param idx the index
     * @param buffer a #GstBuffer
     */
    insert(idx: number, buffer: Buffer): void
    /**
     * Returns the number of buffers in `list`.
     */
    length(): number
    /**
     * Removes `length` buffers starting from `idx` in `list`. The following buffers
     * are moved to close the gap.
     * @param idx the index
     * @param length the amount to remove
     */
    remove(idx: number, length: number): void
}

/**
 * Buffer lists are an object containing a list of buffers.
 * 
 * Buffer lists are created with gst_buffer_list_new() and filled with data
 * using gst_buffer_list_insert().
 * 
 * Buffer lists can be pushed on a srcpad with gst_pad_push_list(). This is
 * interesting when multiple buffers need to be pushed in one go because it
 * can reduce the amount of overhead for pushing each buffer individually.
 * @record 
 */
class BufferList {

    // Own properties of Gst-1.0.Gst.BufferList

    static name: string

    // Constructors of Gst-1.0.Gst.BufferList

    /**
     * Creates a new, empty #GstBufferList.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new, empty #GstBufferList.
     * @constructor 
     */
    static new(): BufferList
    /**
     * Creates a new, empty #GstBufferList. The list will have `size` space
     * preallocated so that memory reallocations can be avoided.
     * @constructor 
     * @param size an initial reserved size
     */
    static new_sized(size: number): BufferList
    /**
     * Modifies a pointer to a #GstBufferList to point to a different
     * #GstBufferList. The modification is done atomically (so this is useful for
     * ensuring thread safety in some cases), and the reference counts are updated
     * appropriately (the old buffer list is unreffed, the new is reffed).
     * 
     * Either `new_list` or the #GstBufferList pointed to by `old_list` may be %NULL.
     * @param old_list pointer to a pointer to a     #GstBufferList to be replaced.
     * @param new_list pointer to a #GstBufferList that     will replace the buffer list pointed to by `old_list`.
     */
    static replace(old_list: BufferList | null, new_list: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList | null ]
    /**
     * Modifies a pointer to a #GstBufferList to point to a different
     * #GstBufferList. This function is similar to gst_buffer_list_replace() except
     * that it takes ownership of `new_list`.
     * @param old_list pointer to a pointer to a #GstBufferList     to be replaced.
     * @param new_list pointer to a #GstBufferList     that will replace the bufferlist pointed to by `old_list`.
     */
    static take(old_list: BufferList, new_list: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList ]
}

interface BufferPoolAcquireParams {

    // Own fields of Gst-1.0.Gst.BufferPoolAcquireParams

    /**
     * the format of `start` and `stop`
     * @field 
     */
    format: Format
    /**
     * the start position
     * @field 
     */
    start: number
    /**
     * the stop position
     * @field 
     */
    stop: number
    /**
     * additional flags
     * @field 
     */
    flags: BufferPoolAcquireFlags
}

/**
 * Parameters passed to the gst_buffer_pool_acquire_buffer() function to control the
 * allocation of the buffer.
 * 
 * The default implementation ignores the `start` and `stop` members but other
 * implementations can use this extra information to decide what buffer to
 * return.
 * @record 
 */
class BufferPoolAcquireParams {

    // Own properties of Gst-1.0.Gst.BufferPoolAcquireParams

    static name: string
}

interface BufferPoolClass {

    // Own fields of Gst-1.0.Gst.BufferPoolClass

    /**
     * Object parent class
     * @field 
     */
    object_class: ObjectClass
    get_options: (pool: BufferPool) => string[]
    set_config: (pool: BufferPool, config: Structure) => boolean
    start: (pool: BufferPool) => boolean
    stop: (pool: BufferPool) => boolean
    acquire_buffer: (pool: BufferPool, params: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    alloc_buffer: (pool: BufferPool, params: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    reset_buffer: (pool: BufferPool, buffer: Buffer) => void
    release_buffer: (pool: BufferPool, buffer: Buffer) => void
    free_buffer: (pool: BufferPool, buffer: Buffer) => void
    flush_start: (pool: BufferPool) => void
    flush_stop: (pool: BufferPool) => void
}

/**
 * The #GstBufferPool class.
 * @record 
 */
abstract class BufferPoolClass {

    // Own properties of Gst-1.0.Gst.BufferPoolClass

    static name: string
}

interface BufferPoolPrivate {
}

class BufferPoolPrivate {

    // Own properties of Gst-1.0.Gst.BufferPoolPrivate

    static name: string
}

interface BusClass {

    // Own fields of Gst-1.0.Gst.BusClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: ObjectClass
    message: (bus: Bus, message: Message) => void
    sync_message: (bus: Bus, message: Message) => void
}

/**
 * GStreamer bus class.
 * @record 
 */
abstract class BusClass {

    // Own properties of Gst-1.0.Gst.BusClass

    static name: string
}

interface BusPrivate {
}

class BusPrivate {

    // Own properties of Gst-1.0.Gst.BusPrivate

    static name: string
}

interface Caps {

    // Own fields of Gst-1.0.Gst.Caps

    /**
     * the parent type
     * @field 
     */
    mini_object: MiniObject

    // Owm methods of Gst-1.0.Gst.Caps

    /**
     * Appends the structures contained in `caps2` to `caps1`. The structures in
     * `caps2` are not copied -- they are transferred to `caps1`, and then `caps2` is
     * freed. If either caps is ANY, the resulting caps will be ANY.
     * @param caps2 the #GstCaps to append
     */
    append(caps2: Caps): void
    /**
     * Appends `structure` to `caps`.  The structure is not copied; `caps`
     * becomes the owner of `structure`.
     * @param structure the #GstStructure to append
     */
    append_structure(structure: Structure): void
    /**
     * Appends `structure` with `features` to `caps`.  The structure is not copied; `caps`
     * becomes the owner of `structure`.
     * @param structure the #GstStructure to append
     * @param features the #GstCapsFeatures to append
     */
    append_structure_full(structure: Structure, features: CapsFeatures | null): void
    /**
     * Tries intersecting `caps1` and `caps2` and reports whether the result would not
     * be empty
     * @param caps2 a #GstCaps to intersect
     */
    can_intersect(caps2: Caps): boolean
    /**
     * Creates a new #GstCaps as a copy of the old `caps`. The new caps will have a
     * refcount of 1, owned by the caller. The structures are copied as well.
     * 
     * Note that this function is the semantic equivalent of a gst_caps_ref()
     * followed by a gst_caps_make_writable(). If you only want to hold on to a
     * reference to the data, you should use gst_caps_ref().
     */
    copy(): Caps
    /**
     * Creates a new #GstCaps and appends a copy of the nth structure
     * contained in `caps`.
     * @param nth the nth structure to copy
     */
    copy_nth(nth: number): Caps
    /**
     * Calls the provided function once for each structure and caps feature in the
     * #GstCaps. In contrast to gst_caps_foreach(), the function may modify the
     * structure and features. In contrast to gst_caps_filter_and_map_in_place(),
     * the structure and features are removed from the caps if %FALSE is returned
     * from the function.
     * The caps must be mutable.
     * @param func a function to call for each field
     */
    filter_and_map_in_place(func: CapsFilterMapFunc): void
    /**
     * Modifies the given `caps` into a representation with only fixed
     * values. First the caps will be truncated and then the first structure will be
     * fixated with gst_structure_fixate().
     * 
     * This function takes ownership of `caps` and will call gst_caps_make_writable()
     * on it so you must not use `caps` afterwards unless you keep an additional
     * reference to it with gst_caps_ref().
     * 
     * Note that it is not guaranteed that the returned caps have exactly one
     * structure. If `caps` are empty caps then the returned caps will be
     * the empty too and contain no structure at all.
     * 
     * Calling this function with ANY caps is not allowed.
     */
    fixate(): Caps
    /**
     * Calls the provided function once for each structure and caps feature in the
     * #GstCaps. The function must not modify the fields.
     * Also see gst_caps_map_in_place() and gst_caps_filter_and_map_in_place().
     * @param func a function to call for each field
     */
    foreach(func: CapsForeachFunc): boolean
    /**
     * Finds the features in `caps` at `index,` and returns it.
     * 
     * WARNING: This function takes a `const GstCaps *`, but returns a
     * non-const `GstCapsFeatures *`.  This is for programming convenience --
     * the caller should be aware that features inside a constant
     * #GstCaps should not be modified. However, if you know the caps
     * are writable, either because you have just copied them or made
     * them writable with gst_caps_make_writable(), you may modify the
     * features returned in the usual way, e.g. with functions like
     * gst_caps_features_add().
     * @param index the index of the structure
     */
    get_features(index: number): CapsFeatures | null
    /**
     * Gets the number of structures contained in `caps`.
     */
    get_size(): number
    /**
     * Finds the structure in `caps` at `index,` and returns it.
     * 
     * WARNING: This function takes a `const GstCaps *`, but returns a
     * non-const `GstStructure *`.  This is for programming convenience --
     * the caller should be aware that structures inside a constant
     * #GstCaps should not be modified. However, if you know the caps
     * are writable, either because you have just copied them or made
     * them writable with gst_caps_make_writable(), you may modify the
     * structure returned in the usual way, e.g. with functions like
     * gst_structure_set().
     * @param index the index of the structure
     */
    get_structure(index: number): Structure
    /**
     * Creates a new #GstCaps that contains all the formats that are common
     * to both `caps1` and `caps2`. Defaults to %GST_CAPS_INTERSECT_ZIG_ZAG mode.
     * @param caps2 a #GstCaps to intersect
     */
    intersect(caps2: Caps): Caps
    /**
     * Creates a new #GstCaps that contains all the formats that are common
     * to both `caps1` and `caps2`, the order is defined by the #GstCapsIntersectMode
     * used.
     * @param caps2 a #GstCaps to intersect
     * @param mode The intersection algorithm/mode to use
     */
    intersect_full(caps2: Caps, mode: CapsIntersectMode): Caps
    /**
     * A given #GstCaps structure is always compatible with another if
     * every media format that is in the first is also contained in the
     * second.  That is, `caps1` is a subset of `caps2`.
     * @param caps2 the #GstCaps to test
     */
    is_always_compatible(caps2: Caps): boolean
    /**
     * Determines if `caps` represents any media format.
     */
    is_any(): boolean
    /**
     * Determines if `caps` represents no media formats.
     */
    is_empty(): boolean
    /**
     * Checks if the given caps represent the same set of caps.
     * @param caps2 another #GstCaps
     */
    is_equal(caps2: Caps): boolean
    /**
     * Tests if two #GstCaps are equal.  This function only works on fixed
     * #GstCaps.
     * @param caps2 the #GstCaps to test
     */
    is_equal_fixed(caps2: Caps): boolean
    /**
     * Fixed #GstCaps describe exactly one format, that is, they have exactly
     * one structure, and each field in the structure describes a fixed type.
     * Examples of non-fixed types are GST_TYPE_INT_RANGE and GST_TYPE_LIST.
     */
    is_fixed(): boolean
    /**
     * Checks if the given caps are exactly the same set of caps.
     * @param caps2 another #GstCaps
     */
    is_strictly_equal(caps2: Caps): boolean
    /**
     * Checks if all caps represented by `subset` are also represented by `superset`.
     * @param superset a potentially greater #GstCaps
     */
    is_subset(superset: Caps): boolean
    /**
     * Checks if `structure` is a subset of `caps`. See gst_caps_is_subset()
     * for more information.
     * @param structure a potential #GstStructure subset of `caps`
     */
    is_subset_structure(structure: Structure): boolean
    /**
     * Checks if `structure` is a subset of `caps`. See gst_caps_is_subset()
     * for more information.
     * @param structure a potential #GstStructure subset of `caps`
     * @param features a #GstCapsFeatures for `structure`
     */
    is_subset_structure_full(structure: Structure, features: CapsFeatures | null): boolean
    /**
     * Calls the provided function once for each structure and caps feature in the
     * #GstCaps. In contrast to gst_caps_foreach(), the function may modify but not
     * delete the structures and features. The caps must be mutable.
     * @param func a function to call for each field
     */
    map_in_place(func: CapsMapFunc): boolean
    /**
     * Appends the structures contained in `caps2` to `caps1` if they are not yet
     * expressed by `caps1`. The structures in `caps2` are not copied -- they are
     * transferred to a writable copy of `caps1`, and then `caps2` is freed.
     * If either caps is ANY, the resulting caps will be ANY.
     * @param caps2 the #GstCaps to merge in
     */
    merge(caps2: Caps): Caps
    /**
     * Appends `structure` to `caps` if it is not already expressed by `caps`.
     * @param structure the #GstStructure to merge
     */
    merge_structure(structure: Structure): Caps
    /**
     * Appends `structure` with `features` to `caps` if its not already expressed by `caps`.
     * @param structure the #GstStructure to merge
     * @param features the #GstCapsFeatures to merge
     */
    merge_structure_full(structure: Structure, features: CapsFeatures | null): Caps
    /**
     * Returns a #GstCaps that represents the same set of formats as
     * `caps,` but contains no lists.  Each list is expanded into separate
     * #GstStructure.
     * 
     * This function takes ownership of `caps` and will call gst_caps_make_writable()
     * on it so you must not use `caps` afterwards unless you keep an additional
     * reference to it with gst_caps_ref().
     */
    normalize(): Caps
    /**
     * Removes the structure with the given index from the list of structures
     * contained in `caps`.
     * @param idx Index of the structure to remove
     */
    remove_structure(idx: number): void
    /**
     * Converts `caps` to a string representation.  This string representation can be
     * converted back to a #GstCaps by gst_caps_from_string().
     * 
     * This prints the caps in human readable form.
     * 
     * This version of the caps serialization function introduces support for nested
     * structures and caps but the resulting strings won't be parsable with
     * GStreamer prior to 1.20 unless #GST_SERIALIZE_FLAG_BACKWARD_COMPAT is passed
     * as `flag`.
     * @param flags a #GstSerializeFlags
     */
    serialize(flags: SerializeFlags): string
    /**
     * Sets the `features` for the structure at `index`.
     * @param index the index of the structure
     * @param features the #GstCapsFeatures to set
     */
    set_features(index: number, features: CapsFeatures | null): void
    /**
     * Sets the `features` for all the structures of `caps`.
     * @param features the #GstCapsFeatures to set
     */
    set_features_simple(features: CapsFeatures | null): void
    /**
     * Sets the given `field` on all structures of `caps` to the given `value`.
     * This is a convenience function for calling gst_structure_set_value() on
     * all structures of `caps`.
     * @param field name of the field to set
     * @param value value to set the field to
     */
    set_value(field: string, value: any): void
    /**
     * Converts the given `caps` into a representation that represents the
     * same set of formats, but in a simpler form.  Component structures that are
     * identical are merged.  Component structures that have values that can be
     * merged are also merged.
     * 
     * This function takes ownership of `caps` and will call gst_caps_make_writable()
     * on it if necessary, so you must not use `caps` afterwards unless you keep an
     * additional reference to it with gst_caps_ref().
     * 
     * This method does not preserve the original order of `caps`.
     */
    simplify(): Caps
    /**
     * Retrieves the structure with the given index from the list of structures
     * contained in `caps`. The caller becomes the owner of the returned structure.
     * @param index Index of the structure to retrieve
     */
    steal_structure(index: number): Structure | null
    /**
     * Subtracts the `subtrahend` from the `minuend`.
     * > This function does not work reliably if optional properties for caps
     * > are included on one caps and omitted on the other.
     * @param subtrahend #GstCaps to subtract
     */
    subtract(subtrahend: Caps): Caps
    /**
     * Converts `caps` to a string representation.  This string representation
     * can be converted back to a #GstCaps by gst_caps_from_string().
     * 
     * For debugging purposes its easier to do something like this:
     * 
     * ``` C
     * GST_LOG ("caps are %" GST_PTR_FORMAT, caps);
     * ```
     * 
     * This prints the caps in human readable form.
     * 
     * The implementation of serialization up to 1.20 would lead to unexpected results
     * when there were nested #GstCaps / #GstStructure deeper than one level.
     */
    to_string(): string
    /**
     * Discards all but the first structure from `caps`. Useful when
     * fixating.
     * 
     * This function takes ownership of `caps` and will call gst_caps_make_writable()
     * on it if necessary, so you must not use `caps` afterwards unless you keep an
     * additional reference to it with gst_caps_ref().
     * 
     * Note that it is not guaranteed that the returned caps have exactly one
     * structure. If `caps` is any or empty caps then the returned caps will be
     * the same and contain no structure at all.
     */
    truncate(): Caps
}

/**
 * Caps (capabilities) are lightweight refcounted objects describing media types.
 * They are composed of an array of #GstStructure.
 * 
 * Caps are exposed on #GstPadTemplate to describe all possible types a
 * given pad can handle. They are also stored in the #GstRegistry along with
 * a description of the #GstElement.
 * 
 * Caps are exposed on the element pads using the gst_pad_query_caps() pad
 * function. This function describes the possible types that the pad can
 * handle or produce at runtime.
 * 
 * A #GstCaps can be constructed with the following code fragment:
 * 
 * ``` C
 *   GstCaps *caps = gst_caps_new_simple ("video/x-raw",
 *      "format", G_TYPE_STRING, "I420",
 *      "framerate", GST_TYPE_FRACTION, 25, 1,
 *      "pixel-aspect-ratio", GST_TYPE_FRACTION, 1, 1,
 *      "width", G_TYPE_INT, 320,
 *      "height", G_TYPE_INT, 240,
 *      NULL);
 * ```
 * 
 * A #GstCaps is fixed when it has no fields with ranges or lists. Use
 * gst_caps_is_fixed() to test for fixed caps. Fixed caps can be used in a
 * caps event to notify downstream elements of the current media type.
 * 
 * Various methods exist to work with the media types such as subtracting
 * or intersecting.
 * 
 * Be aware that until 1.20 the #GstCaps / #GstStructure serialization into string
 * had limited support for nested #GstCaps / #GstStructure fields. It could only
 * support one level of nesting. Using more levels would lead to unexpected
 * behavior when using serialization features, such as gst_caps_to_string() or
 * gst_value_serialize() and their counterparts.
 * @record 
 */
class Caps {

    // Own properties of Gst-1.0.Gst.Caps

    static name: string

    // Constructors of Gst-1.0.Gst.Caps

    /**
     * Creates a new #GstCaps that indicates that it is compatible with
     * any media format.
     * @constructor 
     */
    static new_any(): Caps
    /**
     * Creates a new #GstCaps that is empty.  That is, the returned
     * #GstCaps contains no media formats.
     * The #GstCaps is guaranteed to be writable.
     * @constructor 
     */
    static new_empty(): Caps
    /**
     * Creates a new #GstCaps that contains one #GstStructure with name
     * `media_type`.
     * @constructor 
     * @param media_type the media type of the structure
     */
    static new_empty_simple(media_type: string): Caps
    /**
     * Converts `caps` from a string representation.
     * 
     * The implementation of serialization up to 1.20 would lead to unexpected results
     * when there were nested #GstCaps / #GstStructure deeper than one level.
     * @param string a string to convert to #GstCaps
     */
    static from_string(string: string): Caps | null
}

interface CapsFeatures {

    // Owm methods of Gst-1.0.Gst.CapsFeatures

    /**
     * Adds `feature` to `features`.
     * @param feature a feature.
     */
    add(feature: string): void
    /**
     * Adds `feature` to `features`.
     * @param feature a feature.
     */
    add_id(feature: GLib.Quark): void
    /**
     * Checks if `features` contains `feature`.
     * @param feature a feature
     */
    contains(feature: string): boolean
    /**
     * Checks if `features` contains `feature`.
     * @param feature a feature
     */
    contains_id(feature: GLib.Quark): boolean
    /**
     * Duplicates a #GstCapsFeatures and all its values.
     */
    copy(): CapsFeatures
    /**
     * Frees a #GstCapsFeatures and all its values. The caps features must not
     * have a parent when this function is called.
     */
    free(): void
    /**
     * Returns the `i-th` feature of `features`.
     * @param i index of the feature
     */
    get_nth(i: number): string | null
    /**
     * Returns the `i-th` feature of `features`.
     * @param i index of the feature
     */
    get_nth_id(i: number): GLib.Quark
    /**
     * Returns the number of features in `features`.
     */
    get_size(): number
    /**
     * Checks if `features` is %GST_CAPS_FEATURES_ANY.
     */
    is_any(): boolean
    /**
     * Checks if `features1` and `features2` are equal.
     * @param features2 a #GstCapsFeatures.
     */
    is_equal(features2: CapsFeatures): boolean
    /**
     * Removes `feature` from `features`.
     * @param feature a feature.
     */
    remove(feature: string): void
    /**
     * Removes `feature` from `features`.
     * @param feature a feature.
     */
    remove_id(feature: GLib.Quark): void
    /**
     * Sets the parent_refcount field of #GstCapsFeatures. This field is used to
     * determine whether a caps features is mutable or not. This function should only be
     * called by code implementing parent objects of #GstCapsFeatures, as described in
     * [the MT refcounting design document](additional/design/MT-refcounting.md).
     * @param refcount a pointer to the parent's refcount
     */
    set_parent_refcount(refcount: number): boolean
    /**
     * Converts `features` to a human-readable string representation.
     * 
     * For debugging purposes its easier to do something like this:
     * 
     * ``` C
     * GST_LOG ("features is %" GST_PTR_FORMAT, features);
     * ```
     * 
     * This prints the features in human readable form.
     */
    to_string(): string
}

/**
 * #GstCapsFeatures can optionally be set on a #GstCaps to add requirements
 * for additional features for a specific #GstStructure. Caps structures with
 * the same name but with a non-equal set of caps features are not compatible.
 * If a pad supports multiple sets of features it has to add multiple equal
 * structures with different feature sets to the caps.
 * 
 * Empty #GstCapsFeatures are equivalent with the #GstCapsFeatures that only
 * contain #GST_CAPS_FEATURE_MEMORY_SYSTEM_MEMORY. ANY #GstCapsFeatures as
 * created by gst_caps_features_new_any() are equal to any other #GstCapsFeatures
 * and can be used to specify that any #GstCapsFeatures would be supported, e.g.
 * for elements that don't touch buffer memory. #GstCaps with ANY #GstCapsFeatures
 * are considered non-fixed and during negotiation some #GstCapsFeatures have
 * to be selected.
 * 
 * Examples for caps features would be the requirement of a specific #GstMemory
 * types or the requirement of having a specific #GstMeta on the buffer. Features
 * are given as a string of the format `memory:GstMemoryTypeName` or
 * `meta:GstMetaAPIName`.
 * @record 
 */
class CapsFeatures {

    // Own properties of Gst-1.0.Gst.CapsFeatures

    static name: string

    // Constructors of Gst-1.0.Gst.CapsFeatures

    /**
     * Creates a new, ANY #GstCapsFeatures. This will be equal
     * to any other #GstCapsFeatures but caps with these are
     * unfixed.
     * @constructor 
     */
    static new_any(): CapsFeatures
    /**
     * Creates a new, empty #GstCapsFeatures.
     * @constructor 
     */
    static new_empty(): CapsFeatures
    /**
     * Creates a new #GstCapsFeatures with a single feature.
     * @constructor 
     * @param feature The feature
     */
    static new_single(feature: string): CapsFeatures
    /**
     * Creates a #GstCapsFeatures from a string representation.
     * @param features a string representation of a #GstCapsFeatures.
     */
    static from_string(features: string): CapsFeatures | null
}

interface ChildProxyInterface {

    // Own fields of Gst-1.0.Gst.ChildProxyInterface

    /**
     * parent interface type.
     * @field 
     */
    parent: GObject.TypeInterface
    get_child_by_name: (parent: ChildProxy, name: string) => GObject.Object | null
    get_child_by_index: (parent: ChildProxy, index: number) => GObject.Object | null
    get_children_count: (parent: ChildProxy) => number
    child_added: (parent: ChildProxy, child: GObject.Object, name: string) => void
    child_removed: (parent: ChildProxy, child: GObject.Object, name: string) => void
}

/**
 * #GstChildProxy interface.
 * @record 
 */
abstract class ChildProxyInterface {

    // Own properties of Gst-1.0.Gst.ChildProxyInterface

    static name: string
}

interface ClockClass {

    // Own fields of Gst-1.0.Gst.ClockClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: ObjectClass
    change_resolution: (clock: Clock, old_resolution: ClockTime, new_resolution: ClockTime) => ClockTime
    get_resolution: (clock: Clock) => ClockTime
    get_internal_time: (clock: Clock) => ClockTime
    wait: (clock: Clock, entry: ClockEntry) => [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff ]
    wait_async: (clock: Clock, entry: ClockEntry) => ClockReturn
    unschedule: (clock: Clock, entry: ClockEntry) => void
}

/**
 * GStreamer clock class. Override the vmethods to implement the clock
 * functionality.
 * @record 
 */
abstract class ClockClass {

    // Own properties of Gst-1.0.Gst.ClockClass

    static name: string
}

interface ClockEntry {

    // Own fields of Gst-1.0.Gst.ClockEntry

    /**
     * reference counter (read-only)
     * @field 
     */
    refcount: number
}

/**
 * All pending timeouts or periodic notifies are converted into
 * an entry.
 * Note that GstClockEntry should be treated as an opaque structure. It must
 * not be extended or allocated using a custom allocator.
 * @record 
 */
class ClockEntry {

    // Own properties of Gst-1.0.Gst.ClockEntry

    static name: string
}

interface ClockPrivate {
}

class ClockPrivate {

    // Own properties of Gst-1.0.Gst.ClockPrivate

    static name: string
}

interface Context {

    // Owm methods of Gst-1.0.Gst.Context

    /**
     * Creates a copy of the context. Returns a copy of the context.
     */
    copy(): Context
    /**
     * Gets the type of `context`.
     */
    get_context_type(): string
    /**
     * Accesses the structure of the context.
     */
    get_structure(): Structure
    /**
     * Checks if `context` has `context_type`.
     * @param context_type Context type to check.
     */
    has_context_type(context_type: string): boolean
    /**
     * Checks if `context` is persistent.
     */
    is_persistent(): boolean
    /**
     * Convenience macro to increase the reference count of the context.
     */
    ref(): Context
    /**
     * Convenience macro to decrease the reference count of the context, possibly
     * freeing it.
     */
    unref(): void
    /**
     * Gets a writable version of the structure.
     */
    writable_structure(): Structure
}

/**
 * #GstContext is a container object used to store contexts like a device
 * context, a display server connection and similar concepts that should
 * be shared between multiple elements.
 * 
 * Applications can set a context on a complete pipeline by using
 * gst_element_set_context(), which will then be propagated to all
 * child elements. Elements can handle these in #GstElementClass::set_context
 * and merge them with the context information they already have.
 * 
 * When an element needs a context it will do the following actions in this
 * order until one step succeeds:
 * 
 * 1. Check if the element already has a context
 * 2. Query downstream with %GST_QUERY_CONTEXT for the context
 * 3. Query upstream with %GST_QUERY_CONTEXT for the context
 * 4. Post a %GST_MESSAGE_NEED_CONTEXT message on the bus with the required
 *    context types and afterwards check if a usable context was set now
 * 5. Create a context by itself and post a %GST_MESSAGE_HAVE_CONTEXT message
 *    on the bus.
 * 
 * Bins will catch %GST_MESSAGE_NEED_CONTEXT messages and will set any previously
 * known context on the element that asks for it if possible. Otherwise the
 * application should provide one if it can.
 * 
 * #GstContext can be persistent.
 * A persistent #GstContext is kept in elements when they reach
 * %GST_STATE_NULL, non-persistent ones will be removed.
 * Also, a non-persistent context won't override a previous persistent
 * context set to an element.
 * @record 
 */
class Context {

    // Own properties of Gst-1.0.Gst.Context

    static name: string

    // Constructors of Gst-1.0.Gst.Context

    /**
     * Creates a new context.
     * @constructor 
     * @param context_type Context type
     * @param persistent Persistent context
     */
    constructor(context_type: string, persistent: boolean) 
    /**
     * Creates a new context.
     * @constructor 
     * @param context_type Context type
     * @param persistent Persistent context
     */
    static new(context_type: string, persistent: boolean): Context
    /**
     * Modifies a pointer to a #GstContext to point to a different #GstContext. The
     * modification is done atomically (so this is useful for ensuring thread safety
     * in some cases), and the reference counts are updated appropriately (the old
     * context is unreffed, the new one is reffed).
     * 
     * Either `new_context` or the #GstContext pointed to by `old_context` may be %NULL.
     * @param old_context pointer to a pointer to a #GstContext     to be replaced.
     * @param new_context pointer to a #GstContext that will     replace the context pointed to by `old_context`.
     */
    static replace(old_context: Context, new_context: Context | null): [ /* returnType */ boolean, /* old_context */ Context ]
}

interface ControlBindingClass {

    // Own fields of Gst-1.0.Gst.ControlBindingClass

    /**
     * Parent class
     * @field 
     */
    parent_class: ObjectClass
    sync_values: (binding: ControlBinding, object: Object, timestamp: ClockTime, last_sync: ClockTime) => boolean
    get_value: (binding: ControlBinding, timestamp: ClockTime) => any | null
    get_g_value_array: (binding: ControlBinding, timestamp: ClockTime, interval: ClockTime, values: any[]) => boolean
}

/**
 * The class structure of #GstControlBinding.
 * @record 
 */
abstract class ControlBindingClass {

    // Own properties of Gst-1.0.Gst.ControlBindingClass

    static name: string
}

interface ControlBindingPrivate {
}

class ControlBindingPrivate {

    // Own properties of Gst-1.0.Gst.ControlBindingPrivate

    static name: string
}

interface ControlSourceClass {

    // Own fields of Gst-1.0.Gst.ControlSourceClass

    /**
     * Parent class
     * @field 
     */
    parent_class: ObjectClass
}

/**
 * The class structure of #GstControlSource.
 * @record 
 */
abstract class ControlSourceClass {

    // Own properties of Gst-1.0.Gst.ControlSourceClass

    static name: string
}

interface CustomMeta {

    // Own fields of Gst-1.0.Gst.CustomMeta

    meta: Meta

    // Owm methods of Gst-1.0.Gst.CustomMeta

    /**
     * Retrieve the #GstStructure backing a custom meta, the structure's mutability
     * is conditioned to the writability of the #GstBuffer `meta` is attached to.
     */
    get_structure(): Structure
    /**
     * Checks whether the name of the custom meta is `name`
     * @param name 
     */
    has_name(name: string): boolean
}

/**
 * Simple typing wrapper around #GstMeta
 * @record 
 */
class CustomMeta {

    // Own properties of Gst-1.0.Gst.CustomMeta

    static name: string
}

interface DateTime {

    // Owm methods of Gst-1.0.Gst.DateTime

    /**
     * Returns the day of the month of this #GstDateTime.
     */
    get_day(): number
    /**
     * Retrieves the hour of the day represented by `datetime` in the gregorian
     * calendar. The return is in the range of 0 to 23.
     */
    get_hour(): number
    /**
     * Retrieves the fractional part of the seconds in microseconds represented by
     * `datetime` in the gregorian calendar.
     */
    get_microsecond(): number
    /**
     * Retrieves the minute of the hour represented by `datetime` in the gregorian
     * calendar.
     */
    get_minute(): number
    /**
     * Returns the month of this #GstDateTime. January is 1, February is 2, etc..
     */
    get_month(): number
    /**
     * Retrieves the second of the minute represented by `datetime` in the gregorian
     * calendar.
     */
    get_second(): number
    /**
     * Retrieves the offset from UTC in hours that the timezone specified
     * by `datetime` represents. Timezones ahead (to the east) of UTC have positive
     * values, timezones before (to the west) of UTC have negative values.
     * If `datetime` represents UTC time, then the offset is zero.
     */
    get_time_zone_offset(): number
    /**
     * Returns the year of this #GstDateTime.
     * Call gst_date_time_has_year() before, to avoid warnings.
     */
    get_year(): number
    has_day(): boolean
    has_month(): boolean
    has_second(): boolean
    has_time(): boolean
    has_year(): boolean
    /**
     * Atomically increments the reference count of `datetime` by one.
     */
    ref(): DateTime
    /**
     * Creates a new #GDateTime from a fully defined #GstDateTime object.
     */
    to_g_date_time(): GLib.DateTime | null
    /**
     * Create a minimal string compatible with ISO-8601. Possible output formats
     * are (for example): `2012`, `2012-06`, `2012-06-23`, `2012-06-23T23:30Z`,
     * `2012-06-23T23:30+0100`, `2012-06-23T23:30:59Z`, `2012-06-23T23:30:59+0100`
     */
    to_iso8601_string(): string | null
    /**
     * Atomically decrements the reference count of `datetime` by one.  When the
     * reference count reaches zero, the structure is freed.
     */
    unref(): void
}

/**
 * Struct to store date, time and timezone information altogether.
 * #GstDateTime is refcounted and immutable.
 * 
 * Date information is handled using the [proleptic Gregorian calendar].
 * 
 * Provides basic creation functions and accessor functions to its fields.
 * 
 * [proleptic Gregorian calendar]: https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar
 * @record 
 */
class DateTime {

    // Own properties of Gst-1.0.Gst.DateTime

    static name: string

    // Constructors of Gst-1.0.Gst.DateTime

    /**
     * Creates a new #GstDateTime using the date and times in the gregorian calendar
     * in the supplied timezone.
     * 
     * `year` should be from 1 to 9999, `month` should be from 1 to 12, `day` from
     * 1 to 31, `hour` from 0 to 23, `minutes` and `seconds` from 0 to 59.
     * 
     * Note that `tzoffset` is a float and was chosen so for being able to handle
     * some fractional timezones, while it still keeps the readability of
     * representing it in hours for most timezones.
     * 
     * If value is -1 then all over value will be ignored. For example
     * if `month` == -1, then #GstDateTime will be created only for `year`. If
     * `day` == -1, then #GstDateTime will be created for `year` and `month` and
     * so on.
     * @constructor 
     * @param tzoffset Offset from UTC in hours.
     * @param year the gregorian year
     * @param month the gregorian month
     * @param day the day of the gregorian month
     * @param hour the hour of the day
     * @param minute the minute of the hour
     * @param seconds the second of the minute
     */
    constructor(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number) 
    /**
     * Creates a new #GstDateTime using the date and times in the gregorian calendar
     * in the supplied timezone.
     * 
     * `year` should be from 1 to 9999, `month` should be from 1 to 12, `day` from
     * 1 to 31, `hour` from 0 to 23, `minutes` and `seconds` from 0 to 59.
     * 
     * Note that `tzoffset` is a float and was chosen so for being able to handle
     * some fractional timezones, while it still keeps the readability of
     * representing it in hours for most timezones.
     * 
     * If value is -1 then all over value will be ignored. For example
     * if `month` == -1, then #GstDateTime will be created only for `year`. If
     * `day` == -1, then #GstDateTime will be created for `year` and `month` and
     * so on.
     * @constructor 
     * @param tzoffset Offset from UTC in hours.
     * @param year the gregorian year
     * @param month the gregorian month
     * @param day the day of the gregorian month
     * @param hour the hour of the day
     * @param minute the minute of the hour
     * @param seconds the second of the minute
     */
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    /**
     * Creates a new #GstDateTime from a #GDateTime object.
     * @constructor 
     * @param dt the #GDateTime.
     */
    static new_from_g_date_time(dt: GLib.DateTime | null): DateTime
    /**
     * Tries to parse common variants of ISO-8601 datetime strings into a
     * #GstDateTime. Possible input formats are (for example):
     * `2012-06-30T22:46:43Z`, `2012`, `2012-06`, `2012-06-30`, `2012-06-30T22:46:43-0430`,
     * `2012-06-30T22:46Z`, `2012-06-30T22:46-0430`, `2012-06-30 22:46`,
     * `2012-06-30 22:46:43`, `2012-06-00`, `2012-00-00`, `2012-00-30`, `22:46:43Z`, `22:46Z`,
     * `22:46:43-0430`, `22:46-0430`, `22:46:30`, `22:46`
     * If no date is provided, it is assumed to be "today" in the timezone
     * provided (if any), otherwise UTC.
     * @constructor 
     * @param string ISO 8601-formatted datetime string.
     */
    static new_from_iso8601_string(string: string): DateTime
    /**
     * Creates a new #GstDateTime using the time since Jan 1, 1970 specified by
     * `secs`. The #GstDateTime is in the local timezone.
     * @constructor 
     * @param secs seconds from the Unix epoch
     */
    static new_from_unix_epoch_local_time(secs: number): DateTime
    /**
     * Creates a new #GstDateTime using the time since Jan 1, 1970 specified by
     * `usecs`. The #GstDateTime is in the local timezone.
     * @constructor 
     * @param usecs microseconds from the Unix epoch
     */
    static new_from_unix_epoch_local_time_usecs(usecs: number): DateTime
    /**
     * Creates a new #GstDateTime using the time since Jan 1, 1970 specified by
     * `secs`. The #GstDateTime is in the UTC timezone.
     * @constructor 
     * @param secs seconds from the Unix epoch
     */
    static new_from_unix_epoch_utc(secs: number): DateTime
    /**
     * Creates a new #GstDateTime using the time since Jan 1, 1970 specified by
     * `usecs`. The #GstDateTime is in UTC.
     * @constructor 
     * @param usecs microseconds from the Unix epoch
     */
    static new_from_unix_epoch_utc_usecs(usecs: number): DateTime
    /**
     * Creates a new #GstDateTime using the date and times in the gregorian calendar
     * in the local timezone.
     * 
     * `year` should be from 1 to 9999, `month` should be from 1 to 12, `day` from
     * 1 to 31, `hour` from 0 to 23, `minutes` and `seconds` from 0 to 59.
     * 
     * If `month` is -1, then the #GstDateTime created will only contain `year,`
     * and all other fields will be considered not set.
     * 
     * If `day` is -1, then the #GstDateTime created will only contain `year` and
     * `month` and all other fields will be considered not set.
     * 
     * If `hour` is -1, then the #GstDateTime created will only contain `year` and
     * `month` and `day,` and the time fields will be considered not set. In this
     * case `minute` and `seconds` should also be -1.
     * @constructor 
     * @param year the gregorian year
     * @param month the gregorian month, or -1
     * @param day the day of the gregorian month, or -1
     * @param hour the hour of the day, or -1
     * @param minute the minute of the hour, or -1
     * @param seconds the second of the minute, or -1
     */
    static new_local_time(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    /**
     * Creates a new #GstDateTime representing the current date and time.
     * @constructor 
     */
    static new_now_local_time(): DateTime
    /**
     * Creates a new #GstDateTime that represents the current instant at Universal
     * coordinated time.
     * @constructor 
     */
    static new_now_utc(): DateTime
    /**
     * Creates a new #GstDateTime using the date and times in the gregorian calendar
     * in the local timezone.
     * 
     * `year` should be from 1 to 9999.
     * @constructor 
     * @param year the gregorian year
     */
    static new_y(year: number): DateTime
    /**
     * Creates a new #GstDateTime using the date and times in the gregorian calendar
     * in the local timezone.
     * 
     * `year` should be from 1 to 9999, `month` should be from 1 to 12.
     * 
     * If value is -1 then all over value will be ignored. For example
     * if `month` == -1, then #GstDateTime will created only for `year`.
     * @constructor 
     * @param year the gregorian year
     * @param month the gregorian month
     */
    static new_ym(year: number, month: number): DateTime
    /**
     * Creates a new #GstDateTime using the date and times in the gregorian calendar
     * in the local timezone.
     * 
     * `year` should be from 1 to 9999, `month` should be from 1 to 12, `day` from
     * 1 to 31.
     * 
     * If value is -1 then all over value will be ignored. For example
     * if `month` == -1, then #GstDateTime will created only for `year`. If
     * `day` == -1, then #GstDateTime will created for `year` and `month` and
     * so on.
     * @constructor 
     * @param year the gregorian year
     * @param month the gregorian month
     * @param day the day of the gregorian month
     */
    static new_ymd(year: number, month: number, day: number): DateTime
}

interface DebugCategory {

    // Owm methods of Gst-1.0.Gst.DebugCategory

    /**
     * Removes and frees the category and all associated resources.
     */
    free(): void
    /**
     * Returns the color of a debug category used when printing output in this
     * category.
     */
    get_color(): number
    /**
     * Returns the description of a debug category.
     */
    get_description(): string
    /**
     * Returns the name of a debug category.
     */
    get_name(): string
    /**
     * Returns the threshold of a #GstDebugCategory.
     */
    get_threshold(): DebugLevel
    /**
     * Resets the threshold of the category to the default level. Debug information
     * will only be output if the threshold is lower or equal to the level of the
     * debugging message.
     * Use this function to set the threshold back to where it was after using
     * gst_debug_category_set_threshold().
     */
    reset_threshold(): void
    /**
     * Sets the threshold of the category to the given level. Debug information will
     * only be output if the threshold is lower or equal to the level of the
     * debugging message.
     * > Do not use this function in production code, because other functions may
     * > change the threshold of categories as side effect. It is however a nice
     * > function to use when debugging (even from gdb).
     * @param level the #GstDebugLevel threshold to set.
     */
    set_threshold(level: DebugLevel): void
}

/**
 * This is the struct that describes the categories. Once initialized with
 * #GST_DEBUG_CATEGORY_INIT, its values can't be changed anymore.
 * @record 
 */
class DebugCategory {

    // Own properties of Gst-1.0.Gst.DebugCategory

    static name: string
}

interface DebugMessage {

    // Owm methods of Gst-1.0.Gst.DebugMessage

    /**
     * Gets the string representation of a #GstDebugMessage. This function is used
     * in debug handlers to extract the message.
     */
    get(): string | null
}

class DebugMessage {

    // Own properties of Gst-1.0.Gst.DebugMessage

    static name: string
}

interface DeviceClass {

    // Own fields of Gst-1.0.Gst.DeviceClass

    /**
     * The parent #GstObjectClass structure.
     * @field 
     */
    parent_class: ObjectClass
    create_element: (device: Device, name: string | null) => Element | null
    reconfigure_element: (device: Device, element: Element) => boolean
}

/**
 * The class structure for a #GstDevice object.
 * @record 
 */
abstract class DeviceClass {

    // Own properties of Gst-1.0.Gst.DeviceClass

    static name: string
}

interface DeviceMonitorClass {

    // Own fields of Gst-1.0.Gst.DeviceMonitorClass

    /**
     * the parent #GstObjectClass structure
     * @field 
     */
    parent_class: ObjectClass
}

/**
 * Opaque device monitor class structure.
 * @record 
 */
abstract class DeviceMonitorClass {

    // Own properties of Gst-1.0.Gst.DeviceMonitorClass

    static name: string
}

interface DeviceMonitorPrivate {
}

class DeviceMonitorPrivate {

    // Own properties of Gst-1.0.Gst.DeviceMonitorPrivate

    static name: string
}

interface DevicePrivate {
}

class DevicePrivate {

    // Own properties of Gst-1.0.Gst.DevicePrivate

    static name: string
}

interface DeviceProviderClass {

    // Own fields of Gst-1.0.Gst.DeviceProviderClass

    /**
     * the parent #GstObjectClass structure
     * @field 
     */
    parent_class: ObjectClass
    /**
     * a pointer to the #GstDeviceProviderFactory that creates this
     *  provider
     * @field 
     */
    factory: DeviceProviderFactory
    start: (provider: DeviceProvider) => boolean
    stop: (provider: DeviceProvider) => void
}

/**
 * The structure of the base #GstDeviceProviderClass
 * @record 
 */
abstract class DeviceProviderClass {

    // Own properties of Gst-1.0.Gst.DeviceProviderClass

    static name: string

    // Owm static methods of Gst-1.0.Gst.DeviceProviderClass

    /**
     * Set `key` with `value` as metadata in `klass`.
     * @param key the key to set
     * @param value the value to set
     */
    static add_metadata(klass: DeviceProvider | Function | GObject.GType, key: string, value: string): void
    /**
     * Set `key` with `value` as metadata in `klass`.
     * 
     * Same as gst_device_provider_class_add_metadata(), but `value` must be a static string
     * or an inlined string, as it will not be copied. (GStreamer plugins will
     * be made resident once loaded, so this function can be used even from
     * dynamically loaded plugins.)
     * @param key the key to set
     * @param value the value to set
     */
    static add_static_metadata(klass: DeviceProvider | Function | GObject.GType, key: string, value: string): void
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    static get_metadata(klass: DeviceProvider | Function | GObject.GType, key: string): string | null
    /**
     * Sets the detailed information for a #GstDeviceProviderClass.
     * 
     * > This function is for use in _class_init functions only.
     * @param longname The long English name of the device provider. E.g. "File Sink"
     * @param classification String describing the type of device provider, as an  unordered list separated with slashes ('/'). See draft-klass.txt of the  design docs for more details and common types. E.g: "Sink/File"
     * @param description Sentence describing the purpose of the device provider. E.g: "Write stream to a file"
     * @param author Name and contact details of the author(s). Use \n to separate multiple author metadata. E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
     */
    static set_metadata(klass: DeviceProvider | Function | GObject.GType, longname: string, classification: string, description: string, author: string): void
    /**
     * Sets the detailed information for a #GstDeviceProviderClass.
     * 
     * > This function is for use in _class_init functions only.
     * 
     * Same as gst_device_provider_class_set_metadata(), but `longname,` `classification,`
     * `description,` and `author` must be static strings or inlined strings, as
     * they will not be copied. (GStreamer plugins will be made resident once
     * loaded, so this function can be used even from dynamically loaded plugins.)
     * @param longname The long English name of the element. E.g. "File Sink"
     * @param classification String describing the type of element, as an unordered list separated with slashes ('/'). See draft-klass.txt of the design docs for more details and common types. E.g: "Sink/File"
     * @param description Sentence describing the purpose of the element.  E.g: "Write stream to a file"
     * @param author Name and contact details of the author(s). Use \n to separate multiple author metadata. E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
     */
    static set_static_metadata(klass: DeviceProvider | Function | GObject.GType, longname: string, classification: string, description: string, author: string): void
}

interface DeviceProviderFactoryClass {
}

/**
 * The opaque #GstDeviceProviderFactoryClass data structure.
 * @record 
 */
abstract class DeviceProviderFactoryClass {

    // Own properties of Gst-1.0.Gst.DeviceProviderFactoryClass

    static name: string
}

interface DeviceProviderPrivate {
}

class DeviceProviderPrivate {

    // Own properties of Gst-1.0.Gst.DeviceProviderPrivate

    static name: string
}

interface DynamicTypeFactoryClass {
}

abstract class DynamicTypeFactoryClass {

    // Own properties of Gst-1.0.Gst.DynamicTypeFactoryClass

    static name: string
}

interface ElementClass {

    // Own fields of Gst-1.0.Gst.ElementClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: ObjectClass
    /**
     * metadata for elements of this class
     * @field 
     */
    metadata: object
    /**
     * the #GstElementFactory that creates these elements
     * @field 
     */
    elementfactory: ElementFactory
    /**
     * a #GList of #GstPadTemplate
     * @field 
     */
    padtemplates: object[]
    /**
     * the number of padtemplates
     * @field 
     */
    numpadtemplates: number
    /**
     * changed whenever the padtemplates change
     * @field 
     */
    pad_templ_cookie: number
    pad_added: (element: Element, pad: Pad) => void
    pad_removed: (element: Element, pad: Pad) => void
    no_more_pads: (element: Element) => void
    request_new_pad: (element: Element, templ: PadTemplate, name: string | null, caps: Caps | null) => Pad | null
    release_pad: (element: Element, pad: Pad) => void
    get_state: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state: (element: Element, state: State) => StateChangeReturn
    change_state: (element: Element, transition: StateChange) => StateChangeReturn
    state_changed: (element: Element, oldstate: State, newstate: State, pending: State) => void
    set_bus: (element: Element, bus: Bus | null) => void
    provide_clock: (element: Element) => Clock | null
    set_clock: (element: Element, clock: Clock | null) => boolean
    send_event: (element: Element, event: Event) => boolean
    query: (element: Element, query: Query) => boolean
    post_message: (element: Element, message: Message) => boolean
    set_context: (element: Element, context: Context) => void

    // Owm methods of Gst-1.0.Gst.ElementClass

    /**
     * Set `key` with `value` as metadata in `klass`.
     * @param key the key to set
     * @param value the value to set
     */
    add_metadata(klass: Element | Function | GObject.GType, key: string, value: string): void
    /**
     * Adds a padtemplate to an element class. This is mainly used in the _class_init
     * functions of classes. If a pad template with the same name as an already
     * existing one is added the old one is replaced by the new one.
     * 
     * `templ'`s reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param templ a #GstPadTemplate to add to the element class.
     */
    add_pad_template(klass: Element | Function | GObject.GType, templ: PadTemplate): void
    /**
     * Set `key` with `value` as metadata in `klass`.
     * 
     * Same as gst_element_class_add_metadata(), but `value` must be a static string
     * or an inlined string, as it will not be copied. (GStreamer plugins will
     * be made resident once loaded, so this function can be used even from
     * dynamically loaded plugins.)
     * @param key the key to set
     * @param value the value to set
     */
    add_static_metadata(klass: Element | Function | GObject.GType, key: string, value: string): void
    /**
     * Adds a pad template to an element class based on the static pad template
     * `templ`. This is mainly used in the _class_init functions of element
     * implementations. If a pad template with the same name already exists,
     * the old one is replaced by the new one.
     * @param static_templ #GstStaticPadTemplate to add as pad template to the element class.
     */
    add_static_pad_template(klass: Element | Function | GObject.GType, static_templ: StaticPadTemplate): void
    /**
     * Adds a pad template to an element class based on the static pad template
     * `templ`. This is mainly used in the _class_init functions of element
     * implementations. If a pad template with the same name already exists,
     * the old one is replaced by the new one.
     * @param static_templ #GstStaticPadTemplate to add as pad template to the element class.
     * @param pad_type The #GType of the pad to create
     */
    add_static_pad_template_with_gtype(klass: Element | Function | GObject.GType, static_templ: StaticPadTemplate, pad_type: GObject.GType): void
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(klass: Element | Function | GObject.GType, key: string): string
    /**
     * Retrieves a padtemplate from `element_class` with the given name.
     * > If you use this function in the #GInstanceInitFunc of an object class
     * > that has subclasses, make sure to pass the g_class parameter of the
     * > #GInstanceInitFunc here.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(element_class: Element | Function | GObject.GType, name: string): PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element_class`. The
     * list must not be modified by the calling code.
     * > If you use this function in the #GInstanceInitFunc of an object class
     * > that has subclasses, make sure to pass the g_class parameter of the
     * > #GInstanceInitFunc here.
     */
    get_pad_template_list(element_class: Element | Function | GObject.GType): PadTemplate[]
    /**
     * Sets the detailed information for a #GstElementClass.
     * > This function is for use in _class_init functions only.
     * @param longname The long English name of the element. E.g. "File Sink"
     * @param classification String describing the type of element, as an unordered list separated with slashes ('/'). See draft-klass.txt of the design docs for more details and common types. E.g: "Sink/File"
     * @param description Sentence describing the purpose of the element. E.g: "Write stream to a file"
     * @param author Name and contact details of the author(s). Use \n to separate multiple author metadata. E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
     */
    set_metadata(klass: Element | Function | GObject.GType, longname: string, classification: string, description: string, author: string): void
    /**
     * Sets the detailed information for a #GstElementClass.
     * 
     * > This function is for use in _class_init functions only.
     * 
     * Same as gst_element_class_set_metadata(), but `longname,` `classification,`
     * `description,` and `author` must be static strings or inlined strings, as
     * they will not be copied. (GStreamer plugins will be made resident once
     * loaded, so this function can be used even from dynamically loaded plugins.)
     * @param longname The long English name of the element. E.g. "File Sink"
     * @param classification String describing the type of element, as an unordered list separated with slashes ('/'). See draft-klass.txt of the design docs for more details and common types. E.g: "Sink/File"
     * @param description Sentence describing the purpose of the element. E.g: "Write stream to a file"
     * @param author Name and contact details of the author(s). Use \n to separate multiple author metadata. E.g: "Joe Bloggs &lt;joe.blogs at foo.com&gt;"
     */
    set_static_metadata(klass: Element | Function | GObject.GType, longname: string, classification: string, description: string, author: string): void
}

/**
 * GStreamer element class. Override the vmethods to implement the element
 * functionality.
 * @record 
 */
abstract class ElementClass {

    // Own properties of Gst-1.0.Gst.ElementClass

    static name: string
}

interface ElementFactoryClass {
}

abstract class ElementFactoryClass {

    // Own properties of Gst-1.0.Gst.ElementFactoryClass

    static name: string
}

interface Event {

    // Own fields of Gst-1.0.Gst.Event

    /**
     * the parent structure
     * @field 
     */
    mini_object: MiniObject
    /**
     * the #GstEventType of the event
     * @field 
     */
    type: EventType
    /**
     * the timestamp of the event
     * @field 
     */
    timestamp: number
    /**
     * the sequence number of the event
     * @field 
     */
    seqnum: number

    // Owm methods of Gst-1.0.Gst.Event

    /**
     * Parses a segment `event` and copies the #GstSegment into the location
     * given by `segment`.
     * @param segment a pointer to a #GstSegment
     */
    copy_segment(segment: Segment): void
    /**
     * Retrieve the accumulated running time offset of the event.
     * 
     * Events passing through #GstPads that have a running time
     * offset set via gst_pad_set_offset() will get their offset
     * adjusted according to the pad's offset.
     * 
     * If the event contains any information that related to the
     * running time, this information will need to be updated
     * before usage with this offset.
     */
    get_running_time_offset(): number
    /**
     * Retrieve the sequence number of a event.
     * 
     * Events have ever-incrementing sequence numbers, which may also be set
     * explicitly via gst_event_set_seqnum(). Sequence numbers are typically used to
     * indicate that a event corresponds to some other set of events or messages,
     * for example an EOS event corresponding to a SEEK event. It is considered good
     * practice to make this correspondence when possible, though it is not
     * required.
     * 
     * Note that events and messages share the same sequence number incrementor;
     * two events or messages will never have the same sequence number unless
     * that correspondence was made explicitly.
     */
    get_seqnum(): number
    /**
     * Access the structure of the event.
     */
    get_structure(): Structure | null
    /**
     * Checks if `event` has the given `name`. This function is usually used to
     * check the name of a custom event.
     * @param name name to check
     */
    has_name(name: string): boolean
    /**
     * Checks if `event` has the given `name`. This function is usually used to
     * check the name of a custom event.
     * @param name name to check as a GQuark
     */
    has_name_id(name: GLib.Quark): boolean
    /**
     * Get the format, minsize, maxsize and async-flag in the buffersize event.
     */
    parse_buffer_size(): [ /* format */ Format, /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    /**
     * Get the caps from `event`. The caps remains valid as long as `event` remains
     * valid.
     */
    parse_caps(): /* caps */ Caps
    /**
     * Parse the FLUSH_STOP event and retrieve the `reset_time` member.
     */
    parse_flush_stop(): /* reset_time */ boolean
    /**
     * Extract timestamp and duration from a new GAP event.
     */
    parse_gap(): [ /* timestamp */ ClockTime, /* duration */ ClockTime ]
    /**
     * Retrieve the gap flags that may have been set on a gap event with
     * gst_event_set_gap_flags().
     */
    parse_gap_flags(): /* flags */ GapFlags
    parse_group_id(): [ /* returnType */ boolean, /* group_id */ number ]
    /**
     * Extract rate and flags from an instant-rate-change event.
     */
    parse_instant_rate_change(): [ /* rate_multiplier */ number, /* new_flags */ SegmentFlags ]
    /**
     * Extract the rate multiplier and running times from an instant-rate-sync-time event.
     */
    parse_instant_rate_sync_time(): [ /* rate_multiplier */ number, /* running_time */ ClockTime, /* upstream_running_time */ ClockTime ]
    /**
     * Get the latency in the latency event.
     */
    parse_latency(): /* latency */ ClockTime
    /**
     * Parses an event containing protection system specific information and stores
     * the results in `system_id,` `data` and `origin`. The data stored in `system_id,`
     * `origin` and `data` are valid until `event` is released.
     */
    parse_protection(): [ /* system_id */ string, /* data */ Buffer, /* origin */ string ]
    /**
     * Get the type, proportion, diff and timestamp in the qos event. See
     * gst_event_new_qos() for more information about the different QoS values.
     * 
     * `timestamp` will be adjusted for any pad offsets of pads it was passing through.
     */
    parse_qos(): [ /* type */ QOSType, /* proportion */ number, /* diff */ ClockTimeDiff, /* timestamp */ ClockTime ]
    /**
     * Parses a seek `event` and stores the results in the given result locations.
     */
    parse_seek(): [ /* rate */ number, /* format */ Format, /* flags */ SeekFlags, /* start_type */ SeekType, /* start */ number, /* stop_type */ SeekType, /* stop */ number ]
    /**
     * Retrieve the trickmode interval that may have been set on a
     * seek event with gst_event_set_seek_trickmode_interval().
     */
    parse_seek_trickmode_interval(): /* interval */ ClockTime
    /**
     * Parses a segment `event` and stores the result in the given `segment` location.
     * `segment` remains valid only until the `event` is freed. Don't modify the segment
     * and make a copy if you want to modify it or store it for later use.
     */
    parse_segment(): /* segment */ Segment
    /**
     * Extracts the position and format from the segment done message.
     */
    parse_segment_done(): [ /* format */ Format, /* position */ number ]
    /**
     * Parse the SELECT_STREAMS event and retrieve the contained streams.
     */
    parse_select_streams(): /* streams */ string[]
    /**
     * Parse the sink-message event. Unref `msg` after usage.
     */
    parse_sink_message(): /* msg */ Message
    /**
     * Parse the step event.
     */
    parse_step(): [ /* format */ Format, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    /**
     * Parse a stream-start `event` and extract the #GstStream from it.
     */
    parse_stream(): /* stream */ Stream
    /**
     * Retrieve new #GstStreamCollection from STREAM_COLLECTION event `event`.
     */
    parse_stream_collection(): /* collection */ StreamCollection
    parse_stream_flags(): /* flags */ StreamFlags
    /**
     * Parse a stream-group-done `event` and store the result in the given
     * `group_id` location.
     */
    parse_stream_group_done(): /* group_id */ number
    /**
     * Parse a stream-id `event` and store the result in the given `stream_id`
     * location. The string stored in `stream_id` must not be modified and will
     * remain valid only until `event` gets freed. Make a copy if you want to
     * modify it or store it for later use.
     */
    parse_stream_start(): /* stream_id */ string
    /**
     * Parses a tag `event` and stores the results in the given `taglist` location.
     * No reference to the taglist will be returned, it remains valid only until
     * the `event` is freed. Don't modify or free the taglist, make a copy if you
     * want to modify it or store it for later use.
     */
    parse_tag(): /* taglist */ TagList
    /**
     * Parse a TOC `event` and store the results in the given `toc` and `updated` locations.
     */
    parse_toc(): [ /* toc */ Toc, /* updated */ boolean ]
    /**
     * Parse a TOC select `event` and store the results in the given `uid` location.
     */
    parse_toc_select(): /* uid */ string
    /**
     * Sets `flags` on `event` to give additional information about the reason for
     * the #GST_EVENT_GAP.
     * @param flags a #GstGapFlags
     */
    set_gap_flags(flags: GapFlags): void
    /**
     * All streams that have the same group id are supposed to be played
     * together, i.e. all streams inside a container file should have the
     * same group id but different stream ids. The group id should change
     * each time the stream is started, resulting in different group ids
     * each time a file is played for example.
     * 
     * Use gst_util_group_id_next() to get a new group id.
     * @param group_id the group id to set
     */
    set_group_id(group_id: number): void
    /**
     * Set the running time offset of a event. See
     * gst_event_get_running_time_offset() for more information.
     * 
     * MT safe.
     * @param offset A the new running time offset
     */
    set_running_time_offset(offset: number): void
    /**
     * Sets a trickmode interval on a (writable) seek event. Elements
     * that support TRICKMODE_KEY_UNITS seeks SHOULD use this as the minimal
     * interval between each frame they may output.
     * @param interval 
     */
    set_seek_trickmode_interval(interval: ClockTime): void
    /**
     * Set the sequence number of a event.
     * 
     * This function might be called by the creator of a event to indicate that the
     * event relates to other events or messages. See gst_event_get_seqnum() for
     * more information.
     * 
     * MT safe.
     * @param seqnum A sequence number.
     */
    set_seqnum(seqnum: number): void
    /**
     * Set the `stream` on the stream-start `event`
     * @param stream the stream object to set
     */
    set_stream(stream: Stream): void
    set_stream_flags(flags: StreamFlags): void
    /**
     * Get a writable version of the structure.
     */
    writable_structure(): Structure
}

/**
 * The event class provides factory methods to construct events for sending
 * and functions to query (parse) received events.
 * 
 * Events are usually created with gst_event_new_*() which takes event-type
 * specific parameters as arguments.
 * To send an event application will usually use gst_element_send_event() and
 * elements will use gst_pad_send_event() or gst_pad_push_event().
 * The event should be unreffed with gst_event_unref() if it has not been sent.
 * 
 * Events that have been received can be parsed with their respective
 * gst_event_parse_*() functions. It is valid to pass %NULL for unwanted details.
 * 
 * Events are passed between elements in parallel to the data stream. Some events
 * are serialized with buffers, others are not. Some events only travel downstream,
 * others only upstream. Some events can travel both upstream and downstream.
 * 
 * The events are used to signal special conditions in the datastream such as
 * EOS (end of stream) or the start of a new stream-segment.
 * Events are also used to flush the pipeline of any pending data.
 * 
 * Most of the event API is used inside plugins. Applications usually only
 * construct and use seek events.
 * To do that gst_event_new_seek() is used to create a seek event. It takes
 * the needed parameters to specify seeking time and mode.
 * 
 * ```c
 *   GstEvent *event;
 *   gboolean result;
 *   ...
 *   // construct a seek event to play the media from second 2 to 5, flush
 *   // the pipeline to decrease latency.
 *   event = gst_event_new_seek (1.0,
 *      GST_FORMAT_TIME,
 *      GST_SEEK_FLAG_FLUSH,
 *      GST_SEEK_TYPE_SET, 2 * GST_SECOND,
 *      GST_SEEK_TYPE_SET, 5 * GST_SECOND);
 *   ...
 *   result = gst_element_send_event (pipeline, event);
 *   if (!result)
 *     g_warning ("seek failed");
 *   ...
 * ```
 * 
 * @record 
 */
class Event {

    // Own properties of Gst-1.0.Gst.Event

    static name: string

    // Constructors of Gst-1.0.Gst.Event

    /**
     * Create a new buffersize event. The event is sent downstream and notifies
     * elements that they should provide a buffer of the specified dimensions.
     * 
     * When the `async` flag is set, a thread boundary is preferred.
     * @constructor 
     * @param format buffer format
     * @param minsize minimum buffer size
     * @param maxsize maximum buffer size
     * @param async thread behavior
     */
    static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event
    /**
     * Create a new CAPS event for `caps`. The caps event can only travel downstream
     * synchronized with the buffer flow and contains the format of the buffers
     * that will follow after the event.
     * @constructor 
     * @param caps a #GstCaps
     */
    static new_caps(caps: Caps): Event
    /**
     * Create a new custom-typed event. This can be used for anything not
     * handled by other event-specific functions to pass an event to another
     * element.
     * 
     * Make sure to allocate an event type with the #GST_EVENT_MAKE_TYPE macro,
     * assigning a free number and filling in the correct direction and
     * serialization flags.
     * 
     * New custom events can also be created by subclassing the event type if
     * needed.
     * @constructor 
     * @param type The type of the new event
     * @param structure the structure for the event. The event will     take ownership of the structure.
     */
    static new_custom(type: EventType, structure: Structure): Event
    /**
     * Create a new EOS event. The eos event can only travel downstream
     * synchronized with the buffer flow. Elements that receive the EOS
     * event on a pad can return #GST_FLOW_EOS as a #GstFlowReturn
     * when data after the EOS event arrives.
     * 
     * The EOS event will travel down to the sink elements in the pipeline
     * which will then post the #GST_MESSAGE_EOS on the bus after they have
     * finished playing any buffered data.
     * 
     * When all sinks have posted an EOS message, an EOS message is
     * forwarded to the application.
     * 
     * The EOS event itself will not cause any state transitions of the pipeline.
     * @constructor 
     */
    static new_eos(): Event
    /**
     * Allocate a new flush start event. The flush start event can be sent
     * upstream and downstream and travels out-of-bounds with the dataflow.
     * 
     * It marks pads as being flushing and will make them return
     * #GST_FLOW_FLUSHING when used for data flow with gst_pad_push(),
     * gst_pad_chain(), gst_pad_get_range() and gst_pad_pull_range().
     * Any event (except a #GST_EVENT_FLUSH_STOP) received
     * on a flushing pad will return %FALSE immediately.
     * 
     * Elements should unlock any blocking functions and exit their streaming
     * functions as fast as possible when this event is received.
     * 
     * This event is typically generated after a seek to flush out all queued data
     * in the pipeline so that the new media is played as soon as possible.
     * @constructor 
     */
    static new_flush_start(): Event
    /**
     * Allocate a new flush stop event. The flush stop event can be sent
     * upstream and downstream and travels serialized with the dataflow.
     * It is typically sent after sending a FLUSH_START event to make the
     * pads accept data again.
     * 
     * Elements can process this event synchronized with the dataflow since
     * the preceding FLUSH_START event stopped the dataflow.
     * 
     * This event is typically generated to complete a seek and to resume
     * dataflow.
     * @constructor 
     * @param reset_time if time should be reset
     */
    static new_flush_stop(reset_time: boolean): Event
    /**
     * Create a new GAP event. A gap event can be thought of as conceptually
     * equivalent to a buffer to signal that there is no data for a certain
     * amount of time. This is useful to signal a gap to downstream elements
     * which may wait for data, such as muxers or mixers or overlays, especially
     * for sparse streams such as subtitle streams.
     * @constructor 
     * @param timestamp the start time (pts) of the gap
     * @param duration the duration of the gap
     */
    static new_gap(timestamp: ClockTime, duration: ClockTime): Event
    /**
     * Create a new instant-rate-change event. This event is sent by seek
     * handlers (e.g. demuxers) when receiving a seek with the
     * %GST_SEEK_FLAG_INSTANT_RATE_CHANGE and signals to downstream elements that
     * the playback rate in the existing segment should be immediately multiplied
     * by the `rate_multiplier` factor.
     * 
     * The flags provided replace any flags in the existing segment, for the
     * flags within the %GST_SEGMENT_INSTANT_FLAGS set. Other GstSegmentFlags
     * are ignored and not transferred in the event.
     * @constructor 
     * @param rate_multiplier the multiplier to be applied to the playback rate
     * @param new_flags A new subset of segment flags to replace in segments
     */
    static new_instant_rate_change(rate_multiplier: number, new_flags: SegmentFlags): Event
    /**
     * Create a new instant-rate-sync-time event. This event is sent by the
     * pipeline to notify elements handling the instant-rate-change event about
     * the running-time when the new rate should be applied. The running time
     * may be in the past when elements handle this event, which can lead to
     * switching artifacts. The magnitude of those depends on the exact timing
     * of event delivery to each element and the magnitude of the change in
     * playback rate being applied.
     * 
     * The `running_time` and `upstream_running_time` are the same if this
     * is the first instant-rate adjustment, but will differ for later ones
     * to compensate for the accumulated offset due to playing at a rate
     * different to the one indicated in the playback segments.
     * @constructor 
     * @param rate_multiplier the new playback rate multiplier to be applied
     * @param running_time Running time when the rate change should be applied
     * @param upstream_running_time The upstream-centric running-time when the    rate change should be applied.
     */
    static new_instant_rate_sync_time(rate_multiplier: number, running_time: ClockTime, upstream_running_time: ClockTime): Event
    /**
     * Create a new latency event. The event is sent upstream from the sinks and
     * notifies elements that they should add an additional `latency` to the
     * running time before synchronising against the clock.
     * 
     * The latency is mostly used in live sinks and is always expressed in
     * the time format.
     * @constructor 
     * @param latency the new latency value
     */
    static new_latency(latency: ClockTime): Event
    /**
     * Create a new navigation event from the given description.
     * @constructor 
     * @param structure description of the event. The event will take     ownership of the structure. See #GstNavigation for more specific     constructors.
     */
    static new_navigation(structure: Structure): Event
    /**
     * Creates a new event containing information specific to a particular
     * protection system (uniquely identified by `system_id)`, by which that
     * protection system can acquire key(s) to decrypt a protected stream.
     * 
     * In order for a decryption element to decrypt media
     * protected using a specific system, it first needs all the
     * protection system specific information necessary to acquire the decryption
     * key(s) for that stream. The functions defined here enable this information
     * to be passed in events from elements that extract it
     * (e.g., ISOBMFF demuxers, MPEG DASH demuxers) to protection decrypter
     * elements that use it.
     * 
     * Events containing protection system specific information are created using
     * #gst_event_new_protection, and they can be parsed by downstream elements
     * using #gst_event_parse_protection.
     * 
     * In Common Encryption, protection system specific information may be located
     * within ISOBMFF files, both in movie (moov) boxes and movie fragment (moof)
     * boxes; it may also be contained in ContentProtection elements within MPEG
     * DASH MPDs. The events created by #gst_event_new_protection contain data
     * identifying from which of these locations the encapsulated protection system
     * specific information originated. This origin information is required as
     * some protection systems use different encodings depending upon where the
     * information originates.
     * 
     * The events returned by gst_event_new_protection() are implemented
     * in such a way as to ensure that the most recently-pushed protection info
     * event of a particular `origin` and `system_id` will
     * be stuck to the output pad of the sending element.
     * @constructor 
     * @param system_id a string holding a UUID that uniquely identifies a protection system.
     * @param data a #GstBuffer holding protection system specific information. The reference count of the buffer will be incremented by one.
     * @param origin a string indicating where the protection information carried in the event was extracted from. The allowed values of this string will depend upon the protection scheme.
     */
    static new_protection(system_id: string, data: Buffer, origin: string): Event
    /**
     * Allocate a new qos event with the given values.
     * The QOS event is generated in an element that wants an upstream
     * element to either reduce or increase its rate because of
     * high/low CPU load or other resource usage such as network performance or
     * throttling. Typically sinks generate these events for each buffer
     * they receive.
     * 
     * `type` indicates the reason for the QoS event. #GST_QOS_TYPE_OVERFLOW is
     * used when a buffer arrived in time or when the sink cannot keep up with
     * the upstream datarate. #GST_QOS_TYPE_UNDERFLOW is when the sink is not
     * receiving buffers fast enough and thus has to drop late buffers.
     * #GST_QOS_TYPE_THROTTLE is used when the datarate is artificially limited
     * by the application, for example to reduce power consumption.
     * 
     * `proportion` indicates the real-time performance of the streaming in the
     * element that generated the QoS event (usually the sink). The value is
     * generally computed based on more long term statistics about the streams
     * timestamps compared to the clock.
     * A value < 1.0 indicates that the upstream element is producing data faster
     * than real-time. A value > 1.0 indicates that the upstream element is not
     * producing data fast enough. 1.0 is the ideal `proportion` value. The
     * proportion value can safely be used to lower or increase the quality of
     * the element.
     * 
     * `diff` is the difference against the clock in running time of the last
     * buffer that caused the element to generate the QOS event. A negative value
     * means that the buffer with `timestamp` arrived in time. A positive value
     * indicates how late the buffer with `timestamp` was. When throttling is
     * enabled, `diff` will be set to the requested throttling interval.
     * 
     * `timestamp` is the timestamp of the last buffer that cause the element
     * to generate the QOS event. It is expressed in running time and thus an ever
     * increasing value.
     * 
     * The upstream element can use the `diff` and `timestamp` values to decide
     * whether to process more buffers. For positive `diff,` all buffers with
     * timestamp <= `timestamp` + `diff` will certainly arrive late in the sink
     * as well. A (negative) `diff` value so that `timestamp` + `diff` would yield a
     * result smaller than 0 is not allowed.
     * 
     * The application can use general event probes to intercept the QoS
     * event and implement custom application specific QoS handling.
     * @constructor 
     * @param type the QoS type
     * @param proportion the proportion of the qos message
     * @param diff The time difference of the last Clock sync
     * @param timestamp The timestamp of the buffer
     */
    static new_qos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    /**
     * Create a new reconfigure event. The purpose of the reconfigure event is
     * to travel upstream and make elements renegotiate their caps or reconfigure
     * their buffer pools. This is useful when changing properties on elements
     * or changing the topology of the pipeline.
     * @constructor 
     */
    static new_reconfigure(): Event
    /**
     * Allocate a new seek event with the given parameters.
     * 
     * The seek event configures playback of the pipeline between `start` to `stop`
     * at the speed given in `rate,` also called a playback segment.
     * The `start` and `stop` values are expressed in `format`.
     * 
     * A `rate` of 1.0 means normal playback rate, 2.0 means double speed.
     * Negatives values means backwards playback. A value of 0.0 for the
     * rate is not allowed and should be accomplished instead by PAUSING the
     * pipeline.
     * 
     * A pipeline has a default playback segment configured with a start
     * position of 0, a stop position of -1 and a rate of 1.0. The currently
     * configured playback segment can be queried with #GST_QUERY_SEGMENT.
     * 
     * `start_type` and `stop_type` specify how to adjust the currently configured
     * start and stop fields in playback segment. Adjustments can be made relative
     * or absolute to the last configured values. A type of #GST_SEEK_TYPE_NONE
     * means that the position should not be updated.
     * 
     * When the rate is positive and `start` has been updated, playback will start
     * from the newly configured start position.
     * 
     * For negative rates, playback will start from the newly configured stop
     * position (if any). If the stop position is updated, it must be different from
     * -1 (#GST_CLOCK_TIME_NONE) for negative rates.
     * 
     * It is not possible to seek relative to the current playback position, to do
     * this, PAUSE the pipeline, query the current playback position with
     * #GST_QUERY_POSITION and update the playback segment current position with a
     * #GST_SEEK_TYPE_SET to the desired position.
     * @constructor 
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags
     * @param start_type The type and flags for the new start position
     * @param start The value of the new start position
     * @param stop_type The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): Event
    /**
     * Create a new SEGMENT event for `segment`. The segment event can only travel
     * downstream synchronized with the buffer flow and contains timing information
     * and playback properties for the buffers that will follow.
     * 
     * The segment event marks the range of buffers to be processed. All
     * data not within the segment range is not to be processed. This can be
     * used intelligently by plugins to apply more efficient methods of skipping
     * unneeded data. The valid range is expressed with the `start` and `stop`
     * values.
     * 
     * The time value of the segment is used in conjunction with the start
     * value to convert the buffer timestamps into the stream time. This is
     * usually done in sinks to report the current stream_time.
     * `time` represents the stream_time of a buffer carrying a timestamp of
     * `start`. `time` cannot be -1.
     * 
     * `start` cannot be -1, `stop` can be -1. If there
     * is a valid `stop` given, it must be greater or equal the `start,` including
     * when the indicated playback `rate` is < 0.
     * 
     * The `applied_rate` value provides information about any rate adjustment that
     * has already been made to the timestamps and content on the buffers of the
     * stream. (`rate` * `applied_rate)` should always equal the rate that has been
     * requested for playback. For example, if an element has an input segment
     * with intended playback `rate` of 2.0 and applied_rate of 1.0, it can adjust
     * incoming timestamps and buffer content by half and output a segment event
     * with `rate` of 1.0 and `applied_rate` of 2.0
     * 
     * After a segment event, the buffer stream time is calculated with:
     * 
     *   time + (TIMESTAMP(buf) - start) * ABS (rate * applied_rate)
     * @constructor 
     * @param segment a #GstSegment
     */
    static new_segment(segment: Segment): Event
    /**
     * Create a new segment-done event. This event is sent by elements that
     * finish playback of a segment as a result of a segment seek.
     * @constructor 
     * @param format The format of the position being done
     * @param position The position of the segment being done
     */
    static new_segment_done(format: Format, position: number): Event
    /**
     * Allocate a new select-streams event.
     * 
     * The select-streams event requests the specified `streams` to be activated.
     * 
     * The list of `streams` corresponds to the "Stream ID" of each stream to be
     * activated. Those ID can be obtained via the #GstStream objects present
     * in #GST_EVENT_STREAM_START, #GST_EVENT_STREAM_COLLECTION or
     * #GST_MESSAGE_STREAM_COLLECTION.
     * 
     * Note: The list of `streams` can not be empty.
     * @constructor 
     * @param streams the list of streams to activate
     */
    static new_select_streams(streams: string[]): Event
    /**
     * Create a new sink-message event. The purpose of the sink-message event is
     * to instruct a sink to post the message contained in the event synchronized
     * with the stream.
     * 
     * `name` is used to store multiple sticky events on one pad.
     * @constructor 
     * @param name a name for the event
     * @param msg the #GstMessage to be posted
     */
    static new_sink_message(name: string, msg: Message): Event
    /**
     * Create a new step event. The purpose of the step event is to instruct a sink
     * to skip `amount` (expressed in `format)` of media. It can be used to implement
     * stepping through the video frame by frame or for doing fast trick modes.
     * 
     * A rate of <= 0.0 is not allowed. Pause the pipeline, for the effect of rate
     * = 0.0 or first reverse the direction of playback using a seek event to get
     * the same effect as rate < 0.0.
     * 
     * The `flush` flag will clear any pending data in the pipeline before starting
     * the step operation.
     * 
     * The `intermediate` flag instructs the pipeline that this step operation is
     * part of a larger step operation.
     * @constructor 
     * @param format the format of `amount`
     * @param amount the amount of data to step
     * @param rate the step rate
     * @param flush flushing steps
     * @param intermediate intermediate steps
     */
    static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    /**
     * Create a new STREAM_COLLECTION event. The stream collection event can only
     * travel downstream synchronized with the buffer flow.
     * 
     * Source elements, demuxers and other elements that manage collections
     * of streams and post #GstStreamCollection messages on the bus also send
     * this event downstream on each pad involved in the collection, so that
     * activation of a new collection can be tracked through the downstream
     * data flow.
     * @constructor 
     * @param collection Active collection for this data flow
     */
    static new_stream_collection(collection: StreamCollection): Event
    /**
     * Create a new Stream Group Done event. The stream-group-done event can
     * only travel downstream synchronized with the buffer flow. Elements
     * that receive the event on a pad should handle it mostly like EOS,
     * and emit any data or pending buffers that would depend on more data
     * arriving and unblock, since there won't be any more data.
     * 
     * This event is followed by EOS at some point in the future, and is
     * generally used when switching pads - to unblock downstream so that
     * new pads can be exposed before sending EOS on the existing pads.
     * @constructor 
     * @param group_id the group id of the stream group which is ending
     */
    static new_stream_group_done(group_id: number): Event
    /**
     * Create a new STREAM_START event. The stream start event can only
     * travel downstream synchronized with the buffer flow. It is expected
     * to be the first event that is sent for a new stream.
     * 
     * Source elements, demuxers and other elements that create new streams
     * are supposed to send this event as the first event of a new stream. It
     * should not be sent after a flushing seek or in similar situations
     * and is used to mark the beginning of a new logical stream. Elements
     * combining multiple streams must ensure that this event is only forwarded
     * downstream once and not for every single input stream.
     * 
     * The `stream_id` should be a unique string that consists of the upstream
     * stream-id, / as separator and a unique stream-id for this specific
     * stream. A new stream-id should only be created for a stream if the upstream
     * stream is split into (potentially) multiple new streams, e.g. in a demuxer,
     * but not for every single element in the pipeline.
     * gst_pad_create_stream_id() or gst_pad_create_stream_id_printf() can be
     * used to create a stream-id.  There are no particular semantics for the
     * stream-id, though it should be deterministic (to support stream matching)
     * and it might be used to order streams (besides any information conveyed by
     * stream flags).
     * @constructor 
     * @param stream_id Identifier for this stream
     */
    static new_stream_start(stream_id: string): Event
    /**
     * Generates a metadata tag event from the given `taglist`.
     * 
     * The scope of the taglist specifies if the taglist applies to the
     * complete medium or only to this specific stream. As the tag event
     * is a sticky event, elements should merge tags received from
     * upstream with a given scope with their own tags with the same
     * scope and create a new tag event from it.
     * @constructor 
     * @param taglist metadata list. The event will take ownership     of the taglist.
     */
    static new_tag(taglist: TagList): Event
    /**
     * Generate a TOC event from the given `toc`. The purpose of the TOC event is to
     * inform elements that some kind of the TOC was found.
     * @constructor 
     * @param toc #GstToc structure.
     * @param updated whether `toc` was updated or not.
     */
    static new_toc(toc: Toc, updated: boolean): Event
    /**
     * Generate a TOC select event with the given `uid`. The purpose of the
     * TOC select event is to start playback based on the TOC's entry with the
     * given `uid`.
     * @constructor 
     * @param uid UID in the TOC to start playback from.
     */
    static new_toc_select(uid: string): Event
}

interface FormatDefinition {

    // Own fields of Gst-1.0.Gst.FormatDefinition

    /**
     * The unique id of this format
     * @field 
     */
    value: Format
    /**
     * A short nick of the format
     * @field 
     */
    nick: string
    /**
     * A longer description of the format
     * @field 
     */
    description: string
    /**
     * A quark for the nick
     * @field 
     */
    quark: GLib.Quark
}

/**
 * A format definition
 * @record 
 */
class FormatDefinition {

    // Own properties of Gst-1.0.Gst.FormatDefinition

    static name: string
}

interface GhostPadClass {

    // Own fields of Gst-1.0.Gst.GhostPadClass

    parent_class: ProxyPadClass
}

abstract class GhostPadClass {

    // Own properties of Gst-1.0.Gst.GhostPadClass

    static name: string
}

interface GhostPadPrivate {
}

class GhostPadPrivate {

    // Own properties of Gst-1.0.Gst.GhostPadPrivate

    static name: string
}

interface Iterator {

    // Own fields of Gst-1.0.Gst.Iterator

    /**
     * The function to copy the iterator
     * @field 
     */
    copy: IteratorCopyFunction
    /**
     * The function to get the next item in the iterator
     * @field 
     */
    next: IteratorNextFunction
    /**
     * The function to be called for each item retrieved
     * @field 
     */
    item: IteratorItemFunction
    /**
     * The function to call when a resync is needed.
     * @field 
     */
    resync: IteratorResyncFunction
    /**
     * The function to call when the iterator is freed
     * @field 
     */
    free: IteratorFreeFunction
    /**
     * The iterator that is currently pushed with gst_iterator_push()
     * @field 
     */
    pushed: Iterator
    /**
     * The type of the object that this iterator will return
     * @field 
     */
    type: GObject.GType
    /**
     * The lock protecting the data structure and the cookie.
     * @field 
     */
    lock: GLib.Mutex
    /**
     * The cookie; the value of the master_cookie when this iterator was
     *          created.
     * @field 
     */
    cookie: number
    /**
     * A pointer to the master cookie.
     * @field 
     */
    master_cookie: number
    /**
     * the size of the iterator
     * @field 
     */
    size: number

    // Owm methods of Gst-1.0.Gst.Iterator

    /**
     * Create a new iterator from an existing iterator. The new iterator
     * will only return those elements that match the given compare function `func`.
     * The first parameter that is passed to `func` is the #GValue of the current
     * iterator element and the second parameter is `user_data`. `func` should
     * return 0 for elements that should be included in the filtered iterator.
     * 
     * When this iterator is freed, `it` will also be freed.
     * @param func the compare function to select elements
     * @param user_data user data passed to the compare function
     */
    filter(func: GLib.CompareFunc, user_data: any): Iterator
    /**
     * Find the first element in `it` that matches the compare function `func`.
     * `func` should return 0 when the element is found. The first parameter
     * to `func` will be the current element of the iterator and the
     * second parameter will be `user_data`.
     * The result will be stored in `elem` if a result is found.
     * 
     * The iterator will not be freed.
     * 
     * This function will return %FALSE if an error happened to the iterator
     * or if the element wasn't found.
     * @param func the compare function to use
     */
    find_custom(func: GLib.CompareFunc): [ /* returnType */ boolean, /* elem */ any ]
    /**
     * Folds `func` over the elements of `iter`. That is to say, `func` will be called
     * as `func` (object, `ret,` `user_data)` for each object in `it`. The normal use
     * of this procedure is to accumulate the results of operating on the objects in
     * `ret`.
     * 
     * This procedure can be used (and is used internally) to implement the
     * gst_iterator_foreach() and gst_iterator_find_custom() operations.
     * 
     * The fold will proceed as long as `func` returns %TRUE. When the iterator has no
     * more arguments, %GST_ITERATOR_DONE will be returned. If `func` returns %FALSE,
     * the fold will stop, and %GST_ITERATOR_OK will be returned. Errors or resyncs
     * will cause fold to return %GST_ITERATOR_ERROR or %GST_ITERATOR_RESYNC as
     * appropriate.
     * 
     * The iterator will not be freed.
     * @param func the fold function
     * @param ret the seed value passed to the fold function
     */
    fold(func: IteratorFoldFunction, ret: any): IteratorResult
    /**
     * Iterate over all element of `it` and call the given function `func` for
     * each element.
     * @param func the function to call for each element.
     */
    foreach(func: IteratorForeachFunction): IteratorResult
    /**
     * Pushes `other` iterator onto `it`. All calls performed on `it` are
     * forwarded to `other`. If `other` returns %GST_ITERATOR_DONE, it is
     * popped again and calls are handled by `it` again.
     * 
     * This function is mainly used by objects implementing the iterator
     * next function to recurse into substructures.
     * 
     * When gst_iterator_resync() is called on `it,` `other` will automatically be
     * popped.
     * 
     * MT safe.
     * @param other The #GstIterator to push
     */
    push(other: Iterator): void
}

/**
 * A GstIterator is used to retrieve multiple objects from another object in
 * a threadsafe way.
 * 
 * Various GStreamer objects provide access to their internal structures using
 * an iterator.
 * 
 * Note that if calling a GstIterator function results in your code receiving
 * a refcounted object (with, say, g_value_get_object()), the refcount for that
 * object will not be increased. Your code is responsible for taking a reference
 * if it wants to continue using it later.
 * 
 * The basic use pattern of an iterator is as follows:
 * 
 * ```c
 *   GstIterator *it = _get_iterator(object);
 *   GValue item = G_VALUE_INIT;
 *   done = FALSE;
 *   while (!done) {
 *     switch (gst_iterator_next (it, &item)) {
 *       case GST_ITERATOR_OK:
 *         ...get/use/change item here...
 *         g_value_reset (&item);
 *         break;
 *       case GST_ITERATOR_RESYNC:
 *         ...rollback changes to items...
 *         gst_iterator_resync (it);
 *         break;
 *       case GST_ITERATOR_ERROR:
 *         ...wrong parameters were given...
 *         done = TRUE;
 *         break;
 *       case GST_ITERATOR_DONE:
 *         done = TRUE;
 *         break;
 *     }
 *   }
 *   g_value_unset (&item);
 *   gst_iterator_free (it);
 * ```
 * 
 * @record 
 */
class Iterator {

    // Own properties of Gst-1.0.Gst.Iterator

    static name: string

    // Constructors of Gst-1.0.Gst.Iterator

    /**
     * This #GstIterator is a convenient iterator for the common
     * case where a #GstIterator needs to be returned but only
     * a single object has to be considered. This happens often
     * for the #GstPadIterIntLinkFunction.
     * @constructor 
     * @param type #GType of the passed object
     * @param object object that this iterator should return
     */
    static new_single(type: GObject.GType, object: any): Iterator
}

interface MapInfo {

    // Own fields of Gst-1.0.Gst.MapInfo

    /**
     * a pointer to the mapped memory
     * @field 
     */
    memory: Memory
    /**
     * flags used when mapping the memory
     * @field 
     */
    flags: MapFlags
    /**
     * a pointer to the mapped data
     * @field 
     */
    data: Uint8Array
    /**
     * the valid size in `data`
     * @field 
     */
    size: number
    /**
     * the maximum bytes in `data`
     * @field 
     */
    maxsize: number
    /**
     * extra private user_data that the implementation of the memory
     *             can use to store extra info.
     * @field 
     */
    user_data: object[]
}

/**
 * A structure containing the result of a map operation such as
 * gst_memory_map(). It contains the data and size.
 * @record 
 */
class MapInfo {

    // Own properties of Gst-1.0.Gst.MapInfo

    static name: string
}

interface Memory {

    // Own fields of Gst-1.0.Gst.Memory

    /**
     * parent structure
     * @field 
     */
    mini_object: MiniObject
    /**
     * pointer to the #GstAllocator
     * @field 
     */
    allocator: Allocator
    /**
     * parent memory block
     * @field 
     */
    parent: Memory
    /**
     * the maximum size allocated
     * @field 
     */
    maxsize: number
    /**
     * the alignment of the memory
     * @field 
     */
    align: number
    /**
     * the offset where valid data starts
     * @field 
     */
    offset: number
    /**
     * the size of valid data
     * @field 
     */
    size: number

    // Owm methods of Gst-1.0.Gst.Memory

    /**
     * Return a copy of `size` bytes from `mem` starting from `offset`. This copy is
     * guaranteed to be writable. `size` can be set to -1 to return a copy
     * from `offset` to the end of the memory region.
     * @param offset offset to copy from
     * @param size size to copy, or -1 to copy to the end of the memory region
     */
    copy(offset: number, size: number): Memory
    /**
     * Get the current `size,` `offset` and `maxsize` of `mem`.
     */
    get_sizes(): [ /* returnType */ number, /* offset */ number, /* maxsize */ number ]
    /**
     * Check if `mem1` and mem2 share the memory with a common parent memory object
     * and that the memory is contiguous.
     * 
     * If this is the case, the memory of `mem1` and `mem2` can be merged
     * efficiently by performing gst_memory_share() on the parent object from
     * the returned `offset`.
     * @param mem2 a #GstMemory
     */
    is_span(mem2: Memory): [ /* returnType */ boolean, /* offset */ number ]
    /**
     * Check if `mem` if allocated with an allocator for `mem_type`.
     * @param mem_type a memory type
     */
    is_type(mem_type: string): boolean
    /**
     * Create a #GstMemory object that is mapped with `flags`. If `mem` is mappable
     * with `flags,` this function returns the mapped `mem` directly. Otherwise a
     * mapped copy of `mem` is returned.
     * 
     * This function takes ownership of old `mem` and returns a reference to a new
     * #GstMemory.
     * @param flags mapping flags
     */
    make_mapped(flags: MapFlags): [ /* returnType */ Memory | null, /* info */ MapInfo ]
    /**
     * Fill `info` with the pointer and sizes of the memory in `mem` that can be
     * accessed according to `flags`.
     * 
     * This function can return %FALSE for various reasons:
     * - the memory backed by `mem` is not accessible with the given `flags`.
     * - the memory was already mapped with a different mapping.
     * 
     * `info` and its contents remain valid for as long as `mem` is valid and
     * until gst_memory_unmap() is called.
     * 
     * For each gst_memory_map() call, a corresponding gst_memory_unmap() call
     * should be done.
     * @param flags mapping flags
     */
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    /**
     * Resize the memory region. `mem` should be writable and offset + size should be
     * less than the maxsize of `mem`.
     * 
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED will be
     * cleared when offset or padding is increased respectively.
     * @param offset a new offset
     * @param size a new size
     */
    resize(offset: number, size: number): void
    /**
     * Return a shared copy of `size` bytes from `mem` starting from `offset`. No
     * memory copy is performed and the memory region is simply shared. The result
     * is guaranteed to be non-writable. `size` can be set to -1 to return a shared
     * copy from `offset` to the end of the memory region.
     * @param offset offset to share from
     * @param size size to share, or -1 to share to the end of the memory region
     */
    share(offset: number, size: number): Memory
    /**
     * Release the memory obtained with gst_memory_map()
     * @param info a #GstMapInfo
     */
    unmap(info: MapInfo): void
}

/**
 * GstMemory is a lightweight refcounted object that wraps a region of memory.
 * They are typically used to manage the data of a #GstBuffer.
 * 
 * A GstMemory object has an allocated region of memory of maxsize. The maximum
 * size does not change during the lifetime of the memory object. The memory
 * also has an offset and size property that specifies the valid range of memory
 * in the allocated region.
 * 
 * Memory is usually created by allocators with a gst_allocator_alloc()
 * method call. When %NULL is used as the allocator, the default allocator will
 * be used.
 * 
 * New allocators can be registered with gst_allocator_register().
 * Allocators are identified by name and can be retrieved with
 * gst_allocator_find(). gst_allocator_set_default() can be used to change the
 * default allocator.
 * 
 * New memory can be created with gst_memory_new_wrapped() that wraps the memory
 * allocated elsewhere.
 * 
 * Refcounting of the memory block is performed with gst_memory_ref() and
 * gst_memory_unref().
 * 
 * The size of the memory can be retrieved and changed with
 * gst_memory_get_sizes() and gst_memory_resize() respectively.
 * 
 * Getting access to the data of the memory is performed with gst_memory_map().
 * The call will return a pointer to offset bytes into the region of memory.
 * After the memory access is completed, gst_memory_unmap() should be called.
 * 
 * Memory can be copied with gst_memory_copy(), which will return a writable
 * copy. gst_memory_share() will create a new memory block that shares the
 * memory with an existing memory block at a custom offset and with a custom
 * size.
 * 
 * Memory can be efficiently merged when gst_memory_is_span() returns %TRUE.
 * @record 
 */
class Memory {

    // Own properties of Gst-1.0.Gst.Memory

    static name: string

    // Constructors of Gst-1.0.Gst.Memory

    /**
     * Allocate a new memory block that wraps the given `data`.
     * 
     * The prefix/padding must be filled with 0 if `flags` contains
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED respectively.
     * @constructor 
     * @param flags #GstMemoryFlags
     * @param data data to   wrap
     * @param maxsize allocated size of `data`
     * @param offset offset in `data`
     * @param notify called with `user_data` when the memory is freed
     */
    static new_wrapped(flags: MemoryFlags, data: Uint8Array, maxsize: number, offset: number, notify: GLib.DestroyNotify | null): Memory
}

interface Message {

    // Own fields of Gst-1.0.Gst.Message

    /**
     * the parent structure
     * @field 
     */
    mini_object: MiniObject
    /**
     * the #GstMessageType of the message
     * @field 
     */
    type: MessageType
    /**
     * the timestamp of the message
     * @field 
     */
    timestamp: number
    /**
     * the src of the message
     * @field 
     */
    src: Object
    /**
     * the sequence number of the message
     * @field 
     */
    seqnum: number

    // Owm methods of Gst-1.0.Gst.Message

    /**
     * Creates and appends a new entry.
     * 
     * The specified location string is copied. However, ownership over the tag
     * list and structure are transferred to the message.
     * @param location location string for the new entry
     * @param tag_list tag list for the new entry
     * @param entry_struct structure for the new entry
     */
    add_redirect_entry(location: string, tag_list: TagList | null, entry_struct: Structure | null): void
    get_num_redirect_entries(): number
    /**
     * Retrieve the sequence number of a message.
     * 
     * Messages have ever-incrementing sequence numbers, which may also be set
     * explicitly via gst_message_set_seqnum(). Sequence numbers are typically used
     * to indicate that a message corresponds to some other set of messages or
     * events, for example a SEGMENT_DONE message corresponding to a SEEK event. It
     * is considered good practice to make this correspondence when possible, though
     * it is not required.
     * 
     * Note that events and messages share the same sequence number incrementor;
     * two events or messages will never have the same sequence number unless
     * that correspondence was made explicitly.
     */
    get_seqnum(): number
    /**
     * Extracts the object managing the streaming thread from `message`.
     */
    get_stream_status_object(): any | null
    /**
     * Access the structure of the message.
     */
    get_structure(): Structure | null
    /**
     * Checks if `message` has the given `name`. This function is usually used to
     * check the name of a custom message.
     * @param name name to check
     */
    has_name(name: string): boolean
    /**
     * Extract the running_time from the async_done message.
     * 
     * MT safe.
     */
    parse_async_done(): /* running_time */ ClockTime
    /**
     * Extracts the buffering percent from the GstMessage. see also
     * gst_message_new_buffering().
     * 
     * MT safe.
     */
    parse_buffering(): /* percent */ number
    /**
     * Extracts the buffering stats values from `message`.
     */
    parse_buffering_stats(): [ /* mode */ BufferingMode, /* avg_in */ number, /* avg_out */ number, /* buffering_left */ number ]
    /**
     * Extracts the lost clock from the GstMessage.
     * The clock object returned remains valid until the message is freed.
     * 
     * MT safe.
     */
    parse_clock_lost(): /* clock */ Clock
    /**
     * Extracts the clock and ready flag from the GstMessage.
     * The clock object returned remains valid until the message is freed.
     * 
     * MT safe.
     */
    parse_clock_provide(): [ /* clock */ Clock, /* ready */ boolean ]
    /**
     * Parse a context type from an existing GST_MESSAGE_NEED_CONTEXT message.
     */
    parse_context_type(): [ /* returnType */ boolean, /* context_type */ string ]
    /**
     * Parses a device-added message. The device-added message is produced by
     * #GstDeviceProvider or a #GstDeviceMonitor. It announces the appearance
     * of monitored devices.
     */
    parse_device_added(): /* device */ Device
    /**
     * Parses a device-changed message. The device-changed message is produced by
     * #GstDeviceProvider or a #GstDeviceMonitor. It announces the
     * disappearance of monitored devices. * It announce that a device properties has
     * changed and `device` represents the new modified version of `changed_device`.
     */
    parse_device_changed(): [ /* device */ Device, /* changed_device */ Device ]
    /**
     * Parses a device-removed message. The device-removed message is produced by
     * #GstDeviceProvider or a #GstDeviceMonitor. It announces the
     * disappearance of monitored devices.
     */
    parse_device_removed(): /* device */ Device
    /**
     * Extracts the GError and debug string from the GstMessage. The values returned
     * in the output arguments are copies; the caller must free them when done.
     * 
     * Typical usage of this function might be:
     * 
     * ```c
     *   ...
     *   switch (GST_MESSAGE_TYPE (msg)) {
     *     case GST_MESSAGE_ERROR: {
     *       GError *err = NULL;
     *       gchar *dbg_info = NULL;
     * 
     *       gst_message_parse_error (msg, &err, &dbg_info);
     *       g_printerr ("ERROR from element %s: %s\n",
     *           GST_OBJECT_NAME (msg->src), err->message);
     *       g_printerr ("Debugging info: %s\n", (dbg_info) ? dbg_info : "none");
     *       g_error_free (err);
     *       g_free (dbg_info);
     *       break;
     *     }
     *     ...
     *   }
     *   ...
     * ```
     * 
     * 
     * MT safe.
     */
    parse_error(): [ /* gerror */ GLib.Error, /* debug */ string ]
    /**
     * Returns the optional details structure, may be NULL if none.
     * The returned structure must not be freed.
     */
    parse_error_details(): /* structure */ Structure
    /**
     * Extract the group from the STREAM_START message.
     */
    parse_group_id(): [ /* returnType */ boolean, /* group_id */ number ]
    /**
     * Extract the context from the HAVE_CONTEXT message.
     * 
     * MT safe.
     */
    parse_have_context(): /* context */ Context
    /**
     * Extracts the GError and debug string from the GstMessage. The values returned
     * in the output arguments are copies; the caller must free them when done.
     * 
     * MT safe.
     */
    parse_info(): [ /* gerror */ GLib.Error, /* debug */ string ]
    /**
     * Returns the optional details structure, may be NULL if none
     * The returned structure must not be freed.
     */
    parse_info_details(): /* structure */ Structure
    /**
     * Parses the rate_multiplier from the instant-rate-request message.
     */
    parse_instant_rate_request(): /* rate_multiplier */ number
    /**
     * Extracts the new clock from the GstMessage.
     * The clock object returned remains valid until the message is freed.
     * 
     * MT safe.
     */
    parse_new_clock(): /* clock */ Clock
    /**
     * Parses the progress `type,` `code` and `text`.
     */
    parse_progress(): [ /* type */ ProgressType, /* code */ string, /* text */ string ]
    /**
     * Parses a property-notify message. These will be posted on the bus only
     * when set up with gst_element_add_property_notify_watch() or
     * gst_element_add_property_deep_notify_watch().
     */
    parse_property_notify(): [ /* object */ Object, /* property_name */ string, /* property_value */ any ]
    /**
     * Extract the timestamps and live status from the QoS message.
     * 
     * The returned values give the running_time, stream_time, timestamp and
     * duration of the dropped buffer. Values of GST_CLOCK_TIME_NONE mean unknown
     * values.
     * 
     * MT safe.
     */
    parse_qos(): [ /* live */ boolean, /* running_time */ number, /* stream_time */ number, /* timestamp */ number, /* duration */ number ]
    /**
     * Extract the QoS stats representing the history of the current continuous
     * pipeline playback period.
     * 
     * When `format` is `GST_FORMAT_UNDEFINED` both `dropped` and `processed` are
     * invalid. Values of -1 for either `processed` or `dropped` mean unknown values.
     * 
     * MT safe.
     */
    parse_qos_stats(): [ /* format */ Format, /* processed */ number, /* dropped */ number ]
    /**
     * Extract the QoS values that have been calculated/analysed from the QoS data
     * 
     * MT safe.
     */
    parse_qos_values(): [ /* jitter */ number, /* proportion */ number, /* quality */ number ]
    /**
     * Parses the location and/or structure from the entry with the given index.
     * The index must be between 0 and gst_message_get_num_redirect_entries() - 1.
     * Returned pointers are valid for as long as this message exists.
     * @param entry_index index of the entry to parse
     */
    parse_redirect_entry(entry_index: number): [ /* location */ string, /* tag_list */ TagList, /* entry_struct */ Structure ]
    /**
     * Extract the requested state from the request_state message.
     * 
     * MT safe.
     */
    parse_request_state(): /* state */ State
    /**
     * Extract the running-time from the RESET_TIME message.
     * 
     * MT safe.
     */
    parse_reset_time(): /* running_time */ ClockTime
    /**
     * Extracts the position and format from the segment done message.
     * 
     * MT safe.
     */
    parse_segment_done(): [ /* format */ Format, /* position */ number ]
    /**
     * Extracts the position and format from the segment start message.
     * 
     * MT safe.
     */
    parse_segment_start(): [ /* format */ Format, /* position */ number ]
    /**
     * Extracts the old and new states from the GstMessage.
     * 
     * Typical usage of this function might be:
     * 
     * ```c
     *   ...
     *   switch (GST_MESSAGE_TYPE (msg)) {
     *     case GST_MESSAGE_STATE_CHANGED: {
     *       GstState old_state, new_state;
     * 
     *       gst_message_parse_state_changed (msg, &old_state, &new_state, NULL);
     *       g_print ("Element %s changed state from %s to %s.\n",
     *           GST_OBJECT_NAME (msg->src),
     *           gst_element_state_get_name (old_state),
     *           gst_element_state_get_name (new_state));
     *       break;
     *     }
     *     ...
     *   }
     *   ...
     * ```
     * 
     * 
     * MT safe.
     */
    parse_state_changed(): [ /* oldstate */ State, /* newstate */ State, /* pending */ State ]
    /**
     * Extract the values the step_done message.
     * 
     * MT safe.
     */
    parse_step_done(): [ /* format */ Format, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean, /* duration */ number, /* eos */ boolean ]
    /**
     * Extract the values from step_start message.
     * 
     * MT safe.
     */
    parse_step_start(): [ /* active */ boolean, /* format */ Format, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    /**
     * Parses a stream-collection message.
     */
    parse_stream_collection(): /* collection */ StreamCollection
    /**
     * Extracts the stream status type and owner the GstMessage. The returned
     * owner remains valid for as long as the reference to `message` is valid and
     * should thus not be unreffed.
     * 
     * MT safe.
     */
    parse_stream_status(): [ /* type */ StreamStatusType, /* owner */ Element ]
    /**
     * Parses a streams-selected message.
     */
    parse_streams_selected(): /* collection */ StreamCollection
    /**
     * Extracts the change type and completion status from the GstMessage.
     * 
     * MT safe.
     */
    parse_structure_change(): [ /* type */ StructureChangeType, /* owner */ Element, /* busy */ boolean ]
    /**
     * Extracts the tag list from the GstMessage. The tag list returned in the
     * output argument is a copy; the caller must free it when done.
     * 
     * Typical usage of this function might be:
     * 
     * ```c
     *   ...
     *   switch (GST_MESSAGE_TYPE (msg)) {
     *     case GST_MESSAGE_TAG: {
     *       GstTagList *tags = NULL;
     * 
     *       gst_message_parse_tag (msg, &tags);
     *       g_print ("Got tags from element %s\n", GST_OBJECT_NAME (msg->src));
     *       handle_tags (tags);
     *       gst_tag_list_unref (tags);
     *       break;
     *     }
     *     ...
     *   }
     *   ...
     * ```
     * 
     * 
     * MT safe.
     */
    parse_tag(): /* tag_list */ TagList
    /**
     * Extract the TOC from the #GstMessage. The TOC returned in the
     * output argument is a copy; the caller must free it with
     * gst_toc_unref() when done.
     * 
     * MT safe.
     */
    parse_toc(): [ /* toc */ Toc, /* updated */ boolean ]
    /**
     * Extracts the GError and debug string from the GstMessage. The values returned
     * in the output arguments are copies; the caller must free them when done.
     * 
     * MT safe.
     */
    parse_warning(): [ /* gerror */ GLib.Error, /* debug */ string ]
    /**
     * Returns the optional details structure, may be NULL if none
     * The returned structure must not be freed.
     */
    parse_warning_details(): /* structure */ Structure
    /**
     * Configures the buffering stats values in `message`.
     * @param mode a buffering mode
     * @param avg_in the average input rate
     * @param avg_out the average output rate
     * @param buffering_left amount of buffering time left in milliseconds
     */
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    /**
     * Sets the group id on the stream-start message.
     * 
     * All streams that have the same group id are supposed to be played
     * together, i.e. all streams inside a container file should have the
     * same group id but different stream ids. The group id should change
     * each time the stream is started, resulting in different group ids
     * each time a file is played for example.
     * 
     * MT safe.
     * @param group_id the group id
     */
    set_group_id(group_id: number): void
    /**
     * Set the QoS stats representing the history of the current continuous pipeline
     * playback period.
     * 
     * When `format` is `GST_FORMAT_UNDEFINED` both `dropped` and `processed` are
     * invalid. Values of -1 for either `processed` or `dropped` mean unknown values.
     * 
     * MT safe.
     * @param format Units of the 'processed' and 'dropped' fields. Video sinks and video filters will use GST_FORMAT_BUFFERS (frames). Audio sinks and audio filters will likely use GST_FORMAT_DEFAULT (samples).
     * @param processed Total number of units correctly processed since the last state change to READY or a flushing operation.
     * @param dropped Total number of units dropped since the last state change to READY or a flushing operation.
     */
    set_qos_stats(format: Format, processed: number, dropped: number): void
    /**
     * Set the QoS values that have been calculated/analysed from the QoS data
     * 
     * MT safe.
     * @param jitter The difference of the running-time against the deadline.
     * @param proportion Long term prediction of the ideal rate relative to normal rate to get optimal quality.
     * @param quality An element dependent integer value that specifies the current quality level of the element. The default maximum quality is 1000000.
     */
    set_qos_values(jitter: number, proportion: number, quality: number): void
    /**
     * Set the sequence number of a message.
     * 
     * This function might be called by the creator of a message to indicate that
     * the message relates to other messages or events. See gst_message_get_seqnum()
     * for more information.
     * 
     * MT safe.
     * @param seqnum A sequence number.
     */
    set_seqnum(seqnum: number): void
    /**
     * Configures the object handling the streaming thread. This is usually a
     * GstTask object but other objects might be added in the future.
     * @param object the object controlling the streaming
     */
    set_stream_status_object(object: any): void
    /**
     * Adds the `stream` to the `message`.
     * @param stream a #GstStream to add to `message`
     */
    streams_selected_add(stream: Stream): void
    /**
     * Returns the number of streams contained in the `message`.
     */
    streams_selected_get_size(): number
    /**
     * Retrieves the #GstStream with index `index` from the `message`.
     * @param idx Index of the stream to retrieve
     */
    streams_selected_get_stream(idx: number): Stream | null
    /**
     * Get a writable version of the structure.
     */
    writable_structure(): Structure
}

/**
 * Messages are implemented as a subclass of #GstMiniObject with a generic
 * #GstStructure as the content. This allows for writing custom messages without
 * requiring an API change while allowing a wide range of different types
 * of messages.
 * 
 * Messages are posted by objects in the pipeline and are passed to the
 * application using the #GstBus.
 * 
 * The basic use pattern of posting a message on a #GstBus is as follows:
 * 
 * ```c
 *   gst_bus_post (bus, gst_message_new_eos());
 * ```
 * 
 * 
 * A #GstElement usually posts messages on the bus provided by the parent
 * container using gst_element_post_message().
 * @record 
 */
class Message {

    // Own properties of Gst-1.0.Gst.Message

    static name: string

    // Constructors of Gst-1.0.Gst.Message

    /**
     * Create a new application-typed message. GStreamer will never create these
     * messages; they are a gift from us to you. Enjoy.
     * @constructor 
     * @param src The object originating the message.
     * @param structure the structure for the message. The message     will take ownership of the structure.
     */
    static new_application(src: Object | null, structure: Structure): Message
    /**
     * The message is posted when elements completed an ASYNC state change.
     * `running_time` contains the time of the desired running_time when this
     * elements goes to PLAYING. A value of #GST_CLOCK_TIME_NONE for `running_time`
     * means that the element has no clock interaction and thus doesn't care about
     * the running_time of the pipeline.
     * @constructor 
     * @param src The object originating the message.
     * @param running_time the desired running_time
     */
    static new_async_done(src: Object | null, running_time: ClockTime): Message
    /**
     * This message is posted by elements when they start an ASYNC state change.
     * @constructor 
     * @param src The object originating the message.
     */
    static new_async_start(src: Object | null): Message
    /**
     * Create a new buffering message. This message can be posted by an element that
     * needs to buffer data before it can continue processing. `percent` should be a
     * value between 0 and 100. A value of 100 means that the buffering completed.
     * 
     * When `percent` is < 100 the application should PAUSE a PLAYING pipeline. When
     * `percent` is 100, the application can set the pipeline (back) to PLAYING.
     * The application must be prepared to receive BUFFERING messages in the
     * PREROLLING state and may only set the pipeline to PLAYING after receiving a
     * message with `percent` set to 100, which can happen after the pipeline
     * completed prerolling.
     * 
     * MT safe.
     * @constructor 
     * @param src The object originating the message.
     * @param percent The buffering percent
     */
    static new_buffering(src: Object | null, percent: number): Message
    /**
     * Create a clock lost message. This message is posted whenever the
     * clock is not valid anymore.
     * 
     * If this message is posted by the pipeline, the pipeline will
     * select a new clock again when it goes to PLAYING. It might therefore
     * be needed to set the pipeline to PAUSED and PLAYING again.
     * @constructor 
     * @param src The object originating the message.
     * @param clock the clock that was lost
     */
    static new_clock_lost(src: Object | null, clock: Clock): Message
    /**
     * Create a clock provide message. This message is posted whenever an
     * element is ready to provide a clock or lost its ability to provide
     * a clock (maybe because it paused or became EOS).
     * 
     * This message is mainly used internally to manage the clock
     * selection.
     * @constructor 
     * @param src The object originating the message.
     * @param clock the clock it provides
     * @param ready %TRUE if the sender can provide a clock
     */
    static new_clock_provide(src: Object | null, clock: Clock, ready: boolean): Message
    /**
     * Create a new custom-typed message. This can be used for anything not
     * handled by other message-specific functions to pass a message to the
     * app. The structure field can be %NULL.
     * @constructor 
     * @param type The #GstMessageType to distinguish messages
     * @param src The object originating the message.
     * @param structure the structure for the     message. The message will take ownership of the structure.
     */
    static new_custom(type: MessageType, src: Object | null, structure: Structure | null): Message
    /**
     * Creates a new device-added message. The device-added message is produced by
     * #GstDeviceProvider or a #GstDeviceMonitor. They announce the appearance
     * of monitored devices.
     * @constructor 
     * @param src The #GstObject that created the message
     * @param device The new #GstDevice
     */
    static new_device_added(src: Object, device: Device): Message
    /**
     * Creates a new device-changed message. The device-changed message is produced
     * by #GstDeviceProvider or a #GstDeviceMonitor. They announce that a device
     * properties has changed and `device` represent the new modified version of `changed_device`.
     * @constructor 
     * @param src The #GstObject that created the message
     * @param device The newly created device representing `replaced_device`         with its new configuration.
     * @param changed_device 
     */
    static new_device_changed(src: Object, device: Device, changed_device: Device): Message
    /**
     * Creates a new device-removed message. The device-removed message is produced
     * by #GstDeviceProvider or a #GstDeviceMonitor. They announce the
     * disappearance of monitored devices.
     * @constructor 
     * @param src The #GstObject that created the message
     * @param device The removed #GstDevice
     */
    static new_device_removed(src: Object, device: Device): Message
    /**
     * Create a new duration changed message. This message is posted by elements
     * that know the duration of a stream when the duration changes. This message
     * is received by bins and is used to calculate the total duration of a
     * pipeline.
     * @constructor 
     * @param src The object originating the message.
     */
    static new_duration_changed(src: Object | null): Message
    /**
     * Create a new element-specific message. This is meant as a generic way of
     * allowing one-way communication from an element to an application, for example
     * "the firewire cable was unplugged". The format of the message should be
     * documented in the element's documentation. The structure field can be %NULL.
     * @constructor 
     * @param src The object originating the message.
     * @param structure The structure for the     message. The message will take ownership of the structure.
     */
    static new_element(src: Object | null, structure: Structure): Message
    /**
     * Create a new eos message. This message is generated and posted in
     * the sink elements of a GstBin. The bin will only forward the EOS
     * message to the application if all sinks have posted an EOS message.
     * @constructor 
     * @param src The object originating the message.
     */
    static new_eos(src: Object | null): Message
    /**
     * Create a new error message. The message will copy `error` and
     * `debug`. This message is posted by element when a fatal event
     * occurred. The pipeline will probably (partially) stop. The application
     * receiving this message should stop the pipeline.
     * @constructor 
     * @param src The object originating the message.
     * @param error The GError for this message.
     * @param debug A debugging string.
     */
    static new_error(src: Object | null, error: GLib.Error, debug: string): Message
    /**
     * Create a new error message. The message will copy `error` and
     * `debug`. This message is posted by element when a fatal event
     * occurred. The pipeline will probably (partially) stop. The application
     * receiving this message should stop the pipeline.
     * @constructor 
     * @param src The object originating the message.
     * @param error The GError for this message.
     * @param debug A debugging string.
     * @param details A GstStructure with details
     */
    static new_error_with_details(src: Object | null, error: GLib.Error, debug: string, details: Structure | null): Message
    /**
     * This message is posted when an element has a new local #GstContext.
     * @constructor 
     * @param src The object originating the message.
     * @param context the context
     */
    static new_have_context(src: Object | null, context: Context): Message
    /**
     * Create a new info message. The message will make copies of `error` and
     * `debug`.
     * @constructor 
     * @param src The object originating the message.
     * @param error The GError for this message.
     * @param debug A debugging string.
     */
    static new_info(src: Object | null, error: GLib.Error, debug: string): Message
    /**
     * Create a new info message. The message will make copies of `error` and
     * `debug`.
     * @constructor 
     * @param src The object originating the message.
     * @param error The GError for this message.
     * @param debug A debugging string.
     * @param details A GstStructure with details
     */
    static new_info_with_details(src: Object | null, error: GLib.Error, debug: string, details: Structure | null): Message
    /**
     * Creates a new instant-rate-request message. Elements handling the
     * instant-rate-change event must post this message. The message is
     * handled at the pipeline, and allows the pipeline to select the
     * running time when the rate change should happen and to send an
     * `GST_EVENT_INSTANT_RATE_SYNC_TIME` event to notify the elements
     * in the pipeline.
     * @constructor 
     * @param src The #GstObject that posted the message
     * @param rate_multiplier the rate multiplier factor that should be applied
     */
    static new_instant_rate_request(src: Object, rate_multiplier: number): Message
    /**
     * This message can be posted by elements when their latency requirements have
     * changed.
     * @constructor 
     * @param src The object originating the message.
     */
    static new_latency(src: Object | null): Message
    /**
     * This message is posted when an element needs a specific #GstContext.
     * @constructor 
     * @param src The object originating the message.
     * @param context_type The context type that is needed
     */
    static new_need_context(src: Object | null, context_type: string): Message
    /**
     * Create a new clock message. This message is posted whenever the
     * pipeline selects a new clock for the pipeline.
     * @constructor 
     * @param src The object originating the message.
     * @param clock the new selected clock
     */
    static new_new_clock(src: Object | null, clock: Clock): Message
    /**
     * Progress messages are posted by elements when they use an asynchronous task
     * to perform actions triggered by a state change.
     * 
     * `code` contains a well defined string describing the action.
     * `text` should contain a user visible string detailing the current action.
     * @constructor 
     * @param src The object originating the message.
     * @param type a #GstProgressType
     * @param code a progress code
     * @param text free, user visible text describing the progress
     */
    static new_progress(src: Object, type: ProgressType, code: string, text: string): Message
    static new_property_notify(src: Object, property_name: string, val: any | null): Message
    /**
     * A QOS message is posted on the bus whenever an element decides to drop a
     * buffer because of QoS reasons or whenever it changes its processing strategy
     * because of QoS reasons (quality adjustments such as processing at lower
     * accuracy).
     * 
     * This message can be posted by an element that performs synchronisation against the
     * clock (live) or it could be dropped by an element that performs QoS because of QOS
     * events received from a downstream element (!live).
     * 
     * `running_time,` `stream_time,` `timestamp,` `duration` should be set to the
     * respective running-time, stream-time, timestamp and duration of the (dropped)
     * buffer that generated the QoS event. Values can be left to
     * GST_CLOCK_TIME_NONE when unknown.
     * @constructor 
     * @param src The object originating the message.
     * @param live if the message was generated by a live element
     * @param running_time the running time of the buffer that generated the message
     * @param stream_time the stream time of the buffer that generated the message
     * @param timestamp the timestamps of the buffer that generated the message
     * @param duration the duration of the buffer that generated the message
     */
    static new_qos(src: Object, live: boolean, running_time: number, stream_time: number, timestamp: number, duration: number): Message
    /**
     * Creates a new redirect message and adds a new entry to it. Redirect messages
     * are posted when an element detects that the actual data has to be retrieved
     * from a different location. This is useful if such a redirection cannot be
     * handled inside a source element, for example when HTTP 302/303 redirects
     * return a non-HTTP URL.
     * 
     * The redirect message can hold multiple entries. The first one is added
     * when the redirect message is created, with the given location, tag_list,
     * entry_struct arguments. Use gst_message_add_redirect_entry() to add more
     * entries.
     * 
     * Each entry has a location, a tag list, and a structure. All of these are
     * optional. The tag list and structure are useful for additional metadata,
     * such as bitrate statistics for the given location.
     * 
     * By default, message recipients should treat entries in the order they are
     * stored. The recipient should therefore try entry \#0 first, and if this
     * entry is not acceptable or working, try entry \#1 etc. Senders must make
     * sure that they add entries in this order. However, recipients are free to
     * ignore the order and pick an entry that is "best" for them. One example
     * would be a recipient that scans the entries for the one with the highest
     * bitrate tag.
     * 
     * The specified location string is copied. However, ownership over the tag
     * list and structure are transferred to the message.
     * @constructor 
     * @param src The #GstObject whose property changed (may or may not be a #GstElement)
     * @param location location string for the new entry
     * @param tag_list tag list for the new entry
     * @param entry_struct structure for the new entry
     */
    static new_redirect(src: Object, location: string, tag_list: TagList | null, entry_struct: Structure | null): Message
    /**
     * This message can be posted by elements when they want to have their state
     * changed. A typical use case would be an audio server that wants to pause the
     * pipeline because a higher priority stream is being played.
     * @constructor 
     * @param src The object originating the message.
     * @param state The new requested state
     */
    static new_request_state(src: Object | null, state: State): Message
    /**
     * This message is posted when the pipeline running-time should be reset to
     * `running_time,` like after a flushing seek.
     * @constructor 
     * @param src The object originating the message.
     * @param running_time the requested running-time
     */
    static new_reset_time(src: Object | null, running_time: ClockTime): Message
    /**
     * Create a new segment done message. This message is posted by elements that
     * finish playback of a segment as a result of a segment seek. This message
     * is received by the application after all elements that posted a segment_start
     * have posted the segment_done.
     * @constructor 
     * @param src The object originating the message.
     * @param format The format of the position being done
     * @param position The position of the segment being done
     */
    static new_segment_done(src: Object | null, format: Format, position: number): Message
    /**
     * Create a new segment message. This message is posted by elements that
     * start playback of a segment as a result of a segment seek. This message
     * is not received by the application but is used for maintenance reasons in
     * container elements.
     * @constructor 
     * @param src The object originating the message.
     * @param format The format of the position being played
     * @param position The position of the segment being played
     */
    static new_segment_start(src: Object | null, format: Format, position: number): Message
    /**
     * Create a state change message. This message is posted whenever an element
     * changed its state.
     * @constructor 
     * @param src The object originating the message.
     * @param oldstate the previous state
     * @param newstate the new (current) state
     * @param pending the pending (target) state
     */
    static new_state_changed(src: Object | null, oldstate: State, newstate: State, pending: State): Message
    /**
     * Create a state dirty message. This message is posted whenever an element
     * changed its state asynchronously and is used internally to update the
     * states of container objects.
     * @constructor 
     * @param src The object originating the message
     */
    static new_state_dirty(src: Object | null): Message
    /**
     * This message is posted by elements when they complete a part, when `intermediate` set
     * to %TRUE, or a complete step operation.
     * 
     * `duration` will contain the amount of time (in GST_FORMAT_TIME) of the stepped
     * `amount` of media in format `format`.
     * @constructor 
     * @param src The object originating the message.
     * @param format the format of `amount`
     * @param amount the amount of stepped data
     * @param rate the rate of the stepped amount
     * @param flush is this an flushing step
     * @param intermediate is this an intermediate step
     * @param duration the duration of the data
     * @param eos the step caused EOS
     */
    static new_step_done(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    /**
     * This message is posted by elements when they accept or activate a new step
     * event for `amount` in `format`.
     * 
     * `active` is set to %FALSE when the element accepted the new step event and has
     * queued it for execution in the streaming threads.
     * 
     * `active` is set to %TRUE when the element has activated the step operation and
     * is now ready to start executing the step in the streaming thread. After this
     * message is emitted, the application can queue a new step operation in the
     * element.
     * @constructor 
     * @param src The object originating the message.
     * @param active if the step is active or queued
     * @param format the format of `amount`
     * @param amount the amount of stepped data
     * @param rate the rate of the stepped amount
     * @param flush is this an flushing step
     * @param intermediate is this an intermediate step
     */
    static new_step_start(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    /**
     * Creates a new stream-collection message. The message is used to announce new
     * #GstStreamCollection
     * @constructor 
     * @param src The #GstObject that created the message
     * @param collection The #GstStreamCollection
     */
    static new_stream_collection(src: Object, collection: StreamCollection): Message
    /**
     * Create a new stream_start message. This message is generated and posted in
     * the sink elements of a GstBin. The bin will only forward the STREAM_START
     * message to the application if all sinks have posted an STREAM_START message.
     * @constructor 
     * @param src The object originating the message.
     */
    static new_stream_start(src: Object | null): Message
    /**
     * Create a new stream status message. This message is posted when a streaming
     * thread is created/destroyed or when the state changed.
     * @constructor 
     * @param src The object originating the message.
     * @param type The stream status type.
     * @param owner the owner element of `src`.
     */
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message
    /**
     * Creates a new steams-selected message. The message is used to announce
     * that an array of streams has been selected. This is generally in response
     * to a #GST_EVENT_SELECT_STREAMS event, or when an element (such as decodebin3)
     * makes an initial selection of streams.
     * 
     * The message also contains the #GstStreamCollection to which the various streams
     * belong to.
     * 
     * Users of gst_message_new_streams_selected() can add the selected streams with
     * gst_message_streams_selected_add().
     * @constructor 
     * @param src The #GstObject that created the message
     * @param collection The #GstStreamCollection
     */
    static new_streams_selected(src: Object, collection: StreamCollection): Message
    /**
     * Create a new structure change message. This message is posted when the
     * structure of a pipeline is in the process of being changed, for example
     * when pads are linked or unlinked.
     * 
     * `src` should be the sinkpad that unlinked or linked.
     * @constructor 
     * @param src The object originating the message.
     * @param type The change type.
     * @param owner The owner element of `src`.
     * @param busy Whether the structure change is busy.
     */
    static new_structure_change(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message
    /**
     * Create a new tag message. The message will take ownership of the tag list.
     * The message is posted by elements that discovered a new taglist.
     * @constructor 
     * @param src The object originating the message.
     * @param tag_list the tag list for the message.
     */
    static new_tag(src: Object | null, tag_list: TagList): Message
    /**
     * Create a new TOC message. The message is posted by elements
     * that discovered or updated a TOC.
     * @constructor 
     * @param src the object originating the message.
     * @param toc #GstToc structure for the message.
     * @param updated whether TOC was updated or not.
     */
    static new_toc(src: Object, toc: Toc, updated: boolean): Message
    /**
     * Create a new warning message. The message will make copies of `error` and
     * `debug`.
     * @constructor 
     * @param src The object originating the message.
     * @param error The GError for this message.
     * @param debug A debugging string.
     */
    static new_warning(src: Object | null, error: GLib.Error, debug: string): Message
    /**
     * Create a new warning message. The message will make copies of `error` and
     * `debug`.
     * @constructor 
     * @param src The object originating the message.
     * @param error The GError for this message.
     * @param debug A debugging string.
     * @param details A GstStructure with details
     */
    static new_warning_with_details(src: Object | null, error: GLib.Error, debug: string, details: Structure | null): Message
    /**
     * Modifies a pointer to a #GstMessage to point to a different #GstMessage. This
     * function is similar to gst_message_replace() except that it takes ownership
     * of `new_message`.
     * @param old_message pointer to a pointer to a #GstMessage     to be replaced.
     * @param new_message pointer to a #GstMessage that     will replace the message pointed to by `old_message`.
     */
    static take(old_message: Message, new_message: Message | null): [ /* returnType */ boolean, /* old_message */ Message ]
}

interface Meta {

    // Own fields of Gst-1.0.Gst.Meta

    /**
     * extra flags for the metadata
     * @field 
     */
    flags: MetaFlags
    /**
     * pointer to the #GstMetaInfo
     * @field 
     */
    info: MetaInfo

    // Owm methods of Gst-1.0.Gst.Meta

    /**
     * Meta sequence number compare function. Can be used as #GCompareFunc
     * or a #GCompareDataFunc.
     * @param meta2 a #GstMeta
     */
    compare_seqnum(meta2: Meta): number
    /**
     * Gets seqnum for this meta.
     */
    get_seqnum(): number
}

/**
 * The #GstMeta structure should be included as the first member of a #GstBuffer
 * metadata structure. The structure defines the API of the metadata and should
 * be accessible to all elements using the metadata.
 * 
 * A metadata API is registered with gst_meta_api_type_register() which takes a
 * name for the metadata API and some tags associated with the metadata.
 * With gst_meta_api_type_has_tag() one can check if a certain metadata API
 * contains a given tag.
 * 
 * Multiple implementations of a metadata API can be registered.
 * To implement a metadata API, gst_meta_register() should be used. This
 * function takes all parameters needed to create, free and transform metadata
 * along with the size of the metadata. The function returns a #GstMetaInfo
 * structure that contains the information for the implementation of the API.
 * 
 * A specific implementation can be retrieved by name with gst_meta_get_info().
 * 
 * See #GstBuffer for how the metadata can be added, retrieved and removed from
 * buffers.
 * @record 
 */
class Meta {

    // Own properties of Gst-1.0.Gst.Meta

    static name: string

    // Constructors of Gst-1.0.Gst.Meta

    static api_type_get_tags(api: GObject.GType): string[]
    /**
     * Check if `api` was registered with `tag`.
     * @param api an API
     * @param tag the tag to check
     */
    static api_type_has_tag(api: GObject.GType, tag: GLib.Quark): boolean
    /**
     * Register and return a GType for the `api` and associate it with
     * `tags`.
     * @param api an API to register
     * @param tags tags for `api`
     */
    static api_type_register(api: string, tags: string[]): GObject.GType
    /**
     * Lookup a previously registered meta info structure by its implementation name
     * `impl`.
     * @param impl the name
     */
    static get_info(impl: string): MetaInfo | null
    /**
     * Register a new #GstMeta implementation.
     * 
     * The same `info` can be retrieved later with gst_meta_get_info() by using
     * `impl` as the key.
     * @param api the type of the #GstMeta API
     * @param impl the name of the #GstMeta implementation
     * @param size the size of the #GstMeta structure
     * @param init_func a #GstMetaInitFunction
     * @param free_func a #GstMetaFreeFunction
     * @param transform_func a #GstMetaTransformFunction
     */
    static register(api: GObject.GType, impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo
    /**
     * Register a new custom #GstMeta implementation, backed by an opaque
     * structure holding a #GstStructure.
     * 
     * The registered info can be retrieved later with gst_meta_get_info() by using
     * `name` as the key.
     * 
     * The backing #GstStructure can be retrieved with
     * gst_custom_meta_get_structure(), its mutability is conditioned by the
     * writability of the buffer the meta is attached to.
     * 
     * When `transform_func` is %NULL, the meta and its backing #GstStructure
     * will always be copied when the transform operation is copy, other operations
     * are discarded, copy regions are ignored.
     * @param name the name of the #GstMeta implementation
     * @param tags tags for `api`
     * @param transform_func a #GstMetaTransformFunction
     */
    static register_custom(name: string, tags: string[], transform_func: CustomMetaTransformFunction | null): MetaInfo
}

interface MetaInfo {

    // Own fields of Gst-1.0.Gst.MetaInfo

    /**
     * tag identifying the metadata structure and api
     * @field 
     */
    api: GObject.GType
    /**
     * type identifying the implementor of the api
     * @field 
     */
    type: GObject.GType
    /**
     * size of the metadata
     * @field 
     */
    size: number
    /**
     * function for initializing the metadata
     * @field 
     */
    init_func: MetaInitFunction
    /**
     * function for freeing the metadata
     * @field 
     */
    free_func: MetaFreeFunction
    /**
     * function for transforming the metadata
     * @field 
     */
    transform_func: MetaTransformFunction

    // Owm methods of Gst-1.0.Gst.MetaInfo

    is_custom(): boolean
}

/**
 * The #GstMetaInfo provides information about a specific metadata
 * structure.
 * @record 
 */
class MetaInfo {

    // Own properties of Gst-1.0.Gst.MetaInfo

    static name: string
}

interface MetaTransformCopy {

    // Own fields of Gst-1.0.Gst.MetaTransformCopy

    /**
     * %TRUE if only region is copied
     * @field 
     */
    region: boolean
    /**
     * the offset to copy, 0 if `region` is %FALSE, otherwise > 0
     * @field 
     */
    offset: number
    /**
     * the size to copy, -1 or the buffer size when `region` is %FALSE
     * @field 
     */
    size: number
}

/**
 * Extra data passed to a "gst-copy" transform #GstMetaTransformFunction.
 * @record 
 */
class MetaTransformCopy {

    // Own properties of Gst-1.0.Gst.MetaTransformCopy

    static name: string
}

interface MiniObject {

    // Own fields of Gst-1.0.Gst.MiniObject

    /**
     * the GType of the object
     * @field 
     */
    type: GObject.GType
    /**
     * atomic refcount
     * @field 
     */
    refcount: number
    /**
     * atomic state of the locks
     * @field 
     */
    lockstate: number
    /**
     * extra flags.
     * @field 
     */
    flags: number
    /**
     * a copy function
     * @field 
     */
    copy: MiniObjectCopyFunction
    /**
     * a dispose function
     * @field 
     */
    dispose: MiniObjectDisposeFunction
    /**
     * the free function
     * @field 
     */
    free: MiniObjectFreeFunction

    // Owm methods of Gst-1.0.Gst.MiniObject

    /**
     * This adds `parent` as a parent for `object`. Having one ore more parents affects the
     * writability of `object:` if a `parent` is not writable, `object` is also not
     * writable, regardless of its refcount. `object` is only writable if all
     * the parents are writable and its own refcount is exactly 1.
     * 
     * Note: This function does not take ownership of `parent` and also does not
     * take an additional reference. It is the responsibility of the caller to
     * remove the parent again at a later time.
     * @param parent a parent #GstMiniObject
     */
    add_parent(parent: MiniObject): void
    /**
     * This function gets back user data pointers stored via
     * gst_mini_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * If `mini_object` has the LOCKABLE flag set, check if the current EXCLUSIVE
     * lock on `object` is the only one, this means that changes to the object will
     * not be visible to any other object.
     * 
     * If the LOCKABLE flag is not set, check if the refcount of `mini_object` is
     * exactly 1, meaning that no other reference exists to the object and that the
     * object is therefore writable.
     * 
     * Modification of a mini-object should only be done after verifying that it
     * is writable.
     */
    is_writable(): boolean
    /**
     * Lock the mini-object with the specified access mode in `flags`.
     * @param flags #GstLockFlags
     */
    lock(flags: LockFlags): boolean
    /**
     * This removes `parent` as a parent for `object`. See
     * gst_mini_object_add_parent().
     * @param parent a parent #GstMiniObject
     */
    remove_parent(parent: MiniObject): void
    /**
     * This sets an opaque, named pointer on a miniobject.
     * The name is specified through a #GQuark (retrieved e.g. via
     * g_quark_from_static_string()), and the pointer
     * can be gotten back from the `object` with gst_mini_object_get_qdata()
     * until the `object` is disposed.
     * Setting a previously set user data pointer, overrides (frees)
     * the old pointer set, using %NULL as pointer essentially
     * removes the data stored.
     * 
     * `destroy` may be specified which is called with `data` as argument
     * when the `object` is disposed, or the data is being overwritten by
     * a call to gst_mini_object_set_qdata() with the same `quark`.
     * @param quark A #GQuark, naming the user data pointer
     * @param data An opaque user data pointer
     * @param destroy Function to invoke with `data` as argument, when `data`           needs to be freed
     */
    set_qdata(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    /**
     * This function gets back user data pointers stored via gst_mini_object_set_qdata()
     * and removes the data from `object` without invoking its `destroy()` function (if
     * any was set).
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Unlock the mini-object with the specified access mode in `flags`.
     * @param flags #GstLockFlags
     */
    unlock(flags: LockFlags): void
}

/**
 * #GstMiniObject is a simple structure that can be used to implement refcounted
 * types.
 * 
 * Subclasses will include #GstMiniObject as the first member in their structure
 * and then call gst_mini_object_init() to initialize the #GstMiniObject fields.
 * 
 * gst_mini_object_ref() and gst_mini_object_unref() increment and decrement the
 * refcount respectively. When the refcount of a mini-object reaches 0, the
 * dispose function is called first and when this returns %TRUE, the free
 * function of the miniobject is called.
 * 
 * A copy can be made with gst_mini_object_copy().
 * 
 * gst_mini_object_is_writable() will return %TRUE when the refcount of the
 * object is exactly 1 and there is no parent or a single parent exists and is
 * writable itself, meaning the current caller has the only reference to the
 * object. gst_mini_object_make_writable() will return a writable version of
 * the object, which might be a new copy when the refcount was not 1.
 * 
 * Opaque data can be associated with a #GstMiniObject with
 * gst_mini_object_set_qdata() and gst_mini_object_get_qdata(). The data is
 * meant to be specific to the particular object and is not automatically copied
 * with gst_mini_object_copy() or similar methods.
 * 
 * A weak reference can be added and remove with gst_mini_object_weak_ref()
 * and gst_mini_object_weak_unref() respectively.
 * @record 
 */
class MiniObject {

    // Own properties of Gst-1.0.Gst.MiniObject

    static name: string

    // Constructors of Gst-1.0.Gst.MiniObject

    /**
     * Atomically modifies a pointer to point to a new mini-object.
     * The reference count of `olddata` is decreased and the reference count of
     * `newdata` is increased.
     * 
     * Either `newdata` and the value pointed to by `olddata` may be %NULL.
     * @param olddata pointer to a pointer to a     mini-object to be replaced
     * @param newdata pointer to new mini-object
     */
    static replace(olddata: MiniObject | null, newdata: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
    /**
     * Modifies a pointer to point to a new mini-object. The modification
     * is done atomically. This version is similar to gst_mini_object_replace()
     * except that it does not increase the refcount of `newdata` and thus
     * takes ownership of `newdata`.
     * 
     * Either `newdata` and the value pointed to by `olddata` may be %NULL.
     * @param olddata pointer to a pointer to a mini-object to     be replaced
     * @param newdata pointer to new mini-object
     */
    static take(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
}

interface ObjectClass {

    // Own fields of Gst-1.0.Gst.ObjectClass

    /**
     * parent
     * @field 
     */
    parent_class: GObject.InitiallyUnownedClass
    /**
     * separator used by gst_object_get_path_string()
     * @field 
     */
    path_string_separator: string
    deep_notify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
}

/**
 * GStreamer base object class.
 * @record 
 */
abstract class ObjectClass {

    // Own properties of Gst-1.0.Gst.ObjectClass

    static name: string
}

interface PadClass {

    // Own fields of Gst-1.0.Gst.PadClass

    parent_class: ObjectClass
    linked: (pad: Pad, peer: Pad) => void
    unlinked: (pad: Pad, peer: Pad) => void
}

abstract class PadClass {

    // Own properties of Gst-1.0.Gst.PadClass

    static name: string
}

interface PadPrivate {
}

class PadPrivate {

    // Own properties of Gst-1.0.Gst.PadPrivate

    static name: string
}

interface PadProbeInfo {

    // Own fields of Gst-1.0.Gst.PadProbeInfo

    /**
     * the current probe type
     * @field 
     */
    type: PadProbeType
    /**
     * the id of the probe
     * @field 
     */
    id: number
    /**
     * type specific data, check the `type` field to know the
     *    datatype.  This field can be %NULL.
     * @field 
     */
    data: object
    /**
     * offset of pull probe, this field is valid when `type` contains
     *    #GST_PAD_PROBE_TYPE_PULL
     * @field 
     */
    offset: number
    /**
     * size of pull probe, this field is valid when `type` contains
     *    #GST_PAD_PROBE_TYPE_PULL
     * @field 
     */
    size: number

    // Owm methods of Gst-1.0.Gst.PadProbeInfo

    get_buffer(): Buffer | null
    get_buffer_list(): BufferList | null
    get_event(): Event | null
    get_query(): Query | null
}

/**
 * Info passed in the #GstPadProbeCallback.
 * @record 
 */
class PadProbeInfo {

    // Own properties of Gst-1.0.Gst.PadProbeInfo

    static name: string
}

interface PadTemplateClass {

    // Own fields of Gst-1.0.Gst.PadTemplateClass

    parent_class: ObjectClass
    pad_created: (templ: PadTemplate, pad: Pad) => void
}

abstract class PadTemplateClass {

    // Own properties of Gst-1.0.Gst.PadTemplateClass

    static name: string
}

interface ParamSpecArray {

    // Own fields of Gst-1.0.Gst.ParamSpecArray

    /**
     * super class
     * @field 
     */
    parent_instance: GObject.ParamSpec
    /**
     * the #GParamSpec of the type of values in the array
     * @field 
     */
    element_spec: GObject.ParamSpec
}

/**
 * A GParamSpec derived structure for arrays of values.
 * @record 
 */
class ParamSpecArray {

    // Own properties of Gst-1.0.Gst.ParamSpecArray

    static name: string
}

interface ParamSpecFraction {

    // Own fields of Gst-1.0.Gst.ParamSpecFraction

    /**
     * super class
     * @field 
     */
    parent_instance: GObject.ParamSpec
    /**
     * minimal numerator
     * @field 
     */
    min_num: number
    /**
     * minimal denominator
     * @field 
     */
    min_den: number
    /**
     * maximal numerator
     * @field 
     */
    max_num: number
    /**
     * maximal denominator
     * @field 
     */
    max_den: number
    /**
     * default numerator
     * @field 
     */
    def_num: number
    /**
     * default denominator
     * @field 
     */
    def_den: number
}

/**
 * A GParamSpec derived structure that contains the meta data for fractional
 * properties.
 * @record 
 */
class ParamSpecFraction {

    // Own properties of Gst-1.0.Gst.ParamSpecFraction

    static name: string
}

interface ParentBufferMeta {

    // Own fields of Gst-1.0.Gst.ParentBufferMeta

    /**
     * the parent #GstMeta structure
     * @field 
     */
    parent: Meta
    /**
     * the #GstBuffer on which a reference is being held.
     * @field 
     */
    buffer: Buffer
}

/**
 * The #GstParentBufferMeta is a #GstMeta which can be attached to a #GstBuffer
 * to hold a reference to another buffer that is only released when the child
 * #GstBuffer is released.
 * 
 * Typically, #GstParentBufferMeta is used when the child buffer is directly
 * using the #GstMemory of the parent buffer, and wants to prevent the parent
 * buffer from being returned to a buffer pool until the #GstMemory is available
 * for re-use.
 * @record 
 */
class ParentBufferMeta {

    // Own properties of Gst-1.0.Gst.ParentBufferMeta

    static name: string

    // Constructors of Gst-1.0.Gst.ParentBufferMeta

    /**
     * Gets the global #GstMetaInfo describing  the #GstParentBufferMeta meta.
     */
    static get_info(): MetaInfo
}

interface ParseContext {

    // Owm methods of Gst-1.0.Gst.ParseContext

    /**
     * Copies the `context`.
     */
    copy(): ParseContext | null
    /**
     * Frees a parse context previously allocated with gst_parse_context_new().
     */
    free(): void
    /**
     * Retrieve missing elements from a previous run of gst_parse_launch_full()
     * or gst_parse_launchv_full(). Will only return results if an error code
     * of %GST_PARSE_ERROR_NO_SUCH_ELEMENT was returned.
     */
    get_missing_elements(): string[] | null
}

/**
 * Opaque structure.
 * @record 
 */
class ParseContext {

    // Own properties of Gst-1.0.Gst.ParseContext

    static name: string

    // Constructors of Gst-1.0.Gst.ParseContext

    /**
     * Allocates a parse context for use with gst_parse_launch_full() or
     * gst_parse_launchv_full().
     * 
     * Free-function: gst_parse_context_free
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a parse context for use with gst_parse_launch_full() or
     * gst_parse_launchv_full().
     * 
     * Free-function: gst_parse_context_free
     * @constructor 
     */
    static new(): ParseContext
}

interface PipelineClass {

    // Own fields of Gst-1.0.Gst.PipelineClass

    parent_class: BinClass
}

abstract class PipelineClass {

    // Own properties of Gst-1.0.Gst.PipelineClass

    static name: string
}

interface PipelinePrivate {
}

class PipelinePrivate {

    // Own properties of Gst-1.0.Gst.PipelinePrivate

    static name: string
}

interface PluginClass {
}

abstract class PluginClass {

    // Own properties of Gst-1.0.Gst.PluginClass

    static name: string
}

interface PluginDesc {

    // Own fields of Gst-1.0.Gst.PluginDesc

    /**
     * the major version number of core that plugin was compiled for
     * @field 
     */
    major_version: number
    /**
     * the minor version number of core that plugin was compiled for
     * @field 
     */
    minor_version: number
    /**
     * a unique name of the plugin
     * @field 
     */
    name: string
    /**
     * description of plugin
     * @field 
     */
    description: string
    /**
     * pointer to the init function of this plugin.
     * @field 
     */
    plugin_init: PluginInitFunc
    /**
     * version of the plugin
     * @field 
     */
    version: string
    /**
     * effective license of plugin
     * @field 
     */
    license: string
    /**
     * source module plugin belongs to
     * @field 
     */
    source: string
    /**
     * shipped package plugin belongs to
     * @field 
     */
    package: string
    /**
     * URL to provider of plugin
     * @field 
     */
    origin: string
    /**
     * date time string in ISO 8601
     *     format (or rather, a subset thereof), or %NULL. Allowed are the
     *     following formats: "YYYY-MM-DD" and "YYY-MM-DDTHH:MMZ" (with
     *     'T' a separator and 'Z' indicating UTC/Zulu time). This field
     *     should be set via the GST_PACKAGE_RELEASE_DATETIME
     *     preprocessor macro.
     * @field 
     */
    release_datetime: string
}

/**
 * A plugin should export a variable of this type called plugin_desc. The plugin
 * loader will use the data provided there to initialize the plugin.
 * 
 * The `licence` parameter must be one of: LGPL, GPL, QPL, GPL/QPL, MPL,
 * BSD, MIT/X11, Proprietary, unknown.
 * @record 
 */
class PluginDesc {

    // Own properties of Gst-1.0.Gst.PluginDesc

    static name: string
}

interface PluginFeatureClass {
}

abstract class PluginFeatureClass {

    // Own properties of Gst-1.0.Gst.PluginFeatureClass

    static name: string
}

interface Poll {

    // Owm methods of Gst-1.0.Gst.Poll

    /**
     * Add a file descriptor to the file descriptor set.
     * @param fd a file descriptor.
     */
    add_fd(fd: PollFD): boolean
    /**
     * Check if `fd` in `set` has data to be read.
     * @param fd a file descriptor.
     */
    fd_can_read(fd: PollFD): boolean
    /**
     * Check if `fd` in `set` can be used for writing.
     * @param fd a file descriptor.
     */
    fd_can_write(fd: PollFD): boolean
    /**
     * Control whether the descriptor `fd` in `set` will be monitored for
     * exceptional conditions (POLLPRI).
     * 
     * Not implemented on Windows (will just return %FALSE there).
     * @param fd a file descriptor.
     * @param active a new status.
     */
    fd_ctl_pri(fd: PollFD, active: boolean): boolean
    /**
     * Control whether the descriptor `fd` in `set` will be monitored for
     * readability.
     * @param fd a file descriptor.
     * @param active a new status.
     */
    fd_ctl_read(fd: PollFD, active: boolean): boolean
    /**
     * Control whether the descriptor `fd` in `set` will be monitored for
     * writability.
     * @param fd a file descriptor.
     * @param active a new status.
     */
    fd_ctl_write(fd: PollFD, active: boolean): boolean
    /**
     * Check if `fd` in `set` has closed the connection.
     * @param fd a file descriptor.
     */
    fd_has_closed(fd: PollFD): boolean
    /**
     * Check if `fd` in `set` has an error.
     * @param fd a file descriptor.
     */
    fd_has_error(fd: PollFD): boolean
    /**
     * Check if `fd` in `set` has an exceptional condition (POLLPRI).
     * 
     * Not implemented on Windows (will just return %FALSE there).
     * @param fd a file descriptor.
     */
    fd_has_pri(fd: PollFD): boolean
    /**
     * Mark `fd` as ignored so that the next call to gst_poll_wait() will yield
     * the same result for `fd` as last time. This function must be called if no
     * operation (read/write/recv/send/etc.) will be performed on `fd` before
     * the next call to gst_poll_wait().
     * 
     * The reason why this is needed is because the underlying implementation
     * might not allow querying the fd more than once between calls to one of
     * the re-enabling operations.
     * @param fd a file descriptor.
     */
    fd_ignored(fd: PollFD): void
    /**
     * Free a file descriptor set.
     */
    free(): void
    /**
     * Get a GPollFD for the reading part of the control socket. This is useful when
     * integrating with a GSource and GMainLoop.
     * @param fd a #GPollFD
     */
    get_read_gpollfd(fd: GLib.PollFD): void
    /**
     * Read a byte from the control socket of the controllable `set`.
     * 
     * This function only works for timer #GstPoll objects created with
     * gst_poll_new_timer().
     */
    read_control(): boolean
    /**
     * Remove a file descriptor from the file descriptor set.
     * @param fd a file descriptor.
     */
    remove_fd(fd: PollFD): boolean
    /**
     * Restart any gst_poll_wait() that is in progress. This function is typically
     * used after adding or removing descriptors to `set`.
     * 
     * If `set` is not controllable, then this call will have no effect.
     * 
     * This function only works for non-timer #GstPoll objects created with
     * gst_poll_new().
     */
    restart(): void
    /**
     * When `controllable` is %TRUE, this function ensures that future calls to
     * gst_poll_wait() will be affected by gst_poll_restart() and
     * gst_poll_set_flushing().
     * 
     * This function only works for non-timer #GstPoll objects created with
     * gst_poll_new().
     * @param controllable new controllable state.
     */
    set_controllable(controllable: boolean): boolean
    /**
     * When `flushing` is %TRUE, this function ensures that current and future calls
     * to gst_poll_wait() will return -1, with errno set to EBUSY.
     * 
     * Unsetting the flushing state will restore normal operation of `set`.
     * 
     * This function only works for non-timer #GstPoll objects created with
     * gst_poll_new().
     * @param flushing new flushing state.
     */
    set_flushing(flushing: boolean): void
    /**
     * Wait for activity on the file descriptors in `set`. This function waits up to
     * the specified `timeout`.  A timeout of #GST_CLOCK_TIME_NONE waits forever.
     * 
     * For #GstPoll objects created with gst_poll_new(), this function can only be
     * called from a single thread at a time.  If called from multiple threads,
     * -1 will be returned with errno set to EPERM.
     * 
     * This is not true for timer #GstPoll objects created with
     * gst_poll_new_timer(), where it is allowed to have multiple threads waiting
     * simultaneously.
     * @param timeout a timeout in nanoseconds.
     */
    wait(timeout: ClockTime): number
    /**
     * Write a byte to the control socket of the controllable `set`.
     * This function is mostly useful for timer #GstPoll objects created with
     * gst_poll_new_timer().
     * 
     * It will make any current and future gst_poll_wait() function return with
     * 1, meaning the control socket is set. After an equal amount of calls to
     * gst_poll_read_control() have been performed, calls to gst_poll_wait() will
     * block again until their timeout expired.
     * 
     * This function only works for timer #GstPoll objects created with
     * gst_poll_new_timer().
     */
    write_control(): boolean
}

/**
 * A #GstPoll keeps track of file descriptors much like fd_set (used with
 * select ()) or a struct pollfd array (used with poll ()). Once created with
 * gst_poll_new(), the set can be used to wait for file descriptors to be
 * readable and/or writable. It is possible to make this wait be controlled
 * by specifying %TRUE for the `controllable` flag when creating the set (or
 * later calling gst_poll_set_controllable()).
 * 
 * New file descriptors are added to the set using gst_poll_add_fd(), and
 * removed using gst_poll_remove_fd(). Controlling which file descriptors
 * should be waited for to become readable and/or writable are done using
 * gst_poll_fd_ctl_read(), gst_poll_fd_ctl_write() and gst_poll_fd_ctl_pri().
 * 
 * Use gst_poll_wait() to wait for the file descriptors to actually become
 * readable and/or writable, or to timeout if no file descriptor is available
 * in time. The wait can be controlled by calling gst_poll_restart() and
 * gst_poll_set_flushing().
 * 
 * Once the file descriptor set has been waited for, one can use
 * gst_poll_fd_has_closed() to see if the file descriptor has been closed,
 * gst_poll_fd_has_error() to see if it has generated an error,
 * gst_poll_fd_can_read() to see if it is possible to read from the file
 * descriptor, and gst_poll_fd_can_write() to see if it is possible to
 * write to it.
 * @record 
 */
class Poll {

    // Own properties of Gst-1.0.Gst.Poll

    static name: string
}

interface PollFD {

    // Own fields of Gst-1.0.Gst.PollFD

    /**
     * a file descriptor
     * @field 
     */
    fd: number

    // Owm methods of Gst-1.0.Gst.PollFD

    /**
     * Initializes `fd`. Alternatively you can initialize it with
     * #GST_POLL_FD_INIT.
     */
    init(): void
}

/**
 * A file descriptor object.
 * @record 
 */
class PollFD {

    // Own properties of Gst-1.0.Gst.PollFD

    static name: string
}

interface PresetInterface {

    // Own fields of Gst-1.0.Gst.PresetInterface

    /**
     * parent interface type.
     * @field 
     */
    parent: GObject.TypeInterface
    get_preset_names: (preset: Preset) => string[]
    get_property_names: (preset: Preset) => string[]
    load_preset: (preset: Preset, name: string) => boolean
    save_preset: (preset: Preset, name: string) => boolean
    rename_preset: (preset: Preset, old_name: string, new_name: string) => boolean
    delete_preset: (preset: Preset, name: string) => boolean
    set_meta: (preset: Preset, name: string, tag: string, value: string | null) => boolean
    get_meta: (preset: Preset, name: string, tag: string) => [ /* returnType */ boolean, /* value */ string ]
}

/**
 * #GstPreset interface.
 * @record 
 */
abstract class PresetInterface {

    // Own properties of Gst-1.0.Gst.PresetInterface

    static name: string
}

interface Promise {

    // Own fields of Gst-1.0.Gst.Promise

    /**
     * parent #GstMiniObject
     * @field 
     */
    parent: MiniObject

    // Owm methods of Gst-1.0.Gst.Promise

    /**
     * Expire a `promise`.  This will wake up any waiters with
     * %GST_PROMISE_RESULT_EXPIRED.  Called by a message loop when the parent
     * message is handled and/or destroyed (possibly unanswered).
     */
    expire(): void
    /**
     * Retrieve the reply set on `promise`.  `promise` must be in
     * %GST_PROMISE_RESULT_REPLIED and the returned structure is owned by `promise`
     */
    get_reply(): Structure | null
    /**
     * Interrupt waiting for a `promise`.  This will wake up any waiters with
     * %GST_PROMISE_RESULT_INTERRUPTED.  Called when the consumer does not want
     * the value produced anymore.
     */
    interrupt(): void
    /**
     * Increases the refcount of the given `promise` by one.
     */
    ref(): Promise
    /**
     * Set a reply on `promise`.  This will wake up any waiters with
     * %GST_PROMISE_RESULT_REPLIED.  Called by the producer of the value to
     * indicate success (or failure).
     * 
     * If `promise` has already been interrupted by the consumer, then this reply
     * is not visible to the consumer.
     * @param s a #GstStructure with the the reply contents
     */
    reply(s: Structure | null): void
    /**
     * Decreases the refcount of the promise. If the refcount reaches 0, the
     * promise will be freed.
     */
    unref(): void
    /**
     * Wait for `promise` to move out of the %GST_PROMISE_RESULT_PENDING state.
     * If `promise` is not in %GST_PROMISE_RESULT_PENDING then it will return
     * immediately with the current result.
     */
    wait(): PromiseResult
}

/**
 * The #GstPromise object implements the container for values that may
 * be available later. i.e. a Future or a Promise in
 * <https://en.wikipedia.org/wiki/Futures_and_promises>.
 * As with all Future/Promise-like functionality, there is the concept of the
 * producer of the value and the consumer of the value.
 * 
 * A #GstPromise is created with gst_promise_new() by the consumer and passed
 * to the producer to avoid thread safety issues with the change callback.
 * A #GstPromise can be replied to with a value (or an error) by the producer
 * with gst_promise_reply(). The exact value returned is defined by the API
 * contract of the producer and %NULL may be a valid reply.
 * gst_promise_interrupt() is for the consumer to
 * indicate to the producer that the value is not needed anymore and producing
 * that value can stop.  The `GST_PROMISE_RESULT_EXPIRED` state set by a call
 * to gst_promise_expire() indicates to the consumer that a value will never
 * be produced and is intended to be called by a third party that implements
 * some notion of message handling such as #GstBus.
 * A callback can also be installed at #GstPromise creation for
 * result changes with gst_promise_new_with_change_func().
 * The change callback can be used to chain #GstPromises's together as in the
 * following example.
 * 
 * ```c
 * const GstStructure *reply;
 * GstPromise *p;
 * if (gst_promise_wait (promise) != GST_PROMISE_RESULT_REPLIED)
 *   return; // interrupted or expired value
 * reply = gst_promise_get_reply (promise);
 * if (error in reply)
 *   return; // propagate error
 * p = gst_promise_new_with_change_func (another_promise_change_func, user_data, notify);
 * pass p to promise-using API
 * ```
 * 
 * 
 * Each #GstPromise starts out with a #GstPromiseResult of
 * %GST_PROMISE_RESULT_PENDING and only ever transitions once
 * into one of the other #GstPromiseResult's.
 * 
 * In order to support multi-threaded code, gst_promise_reply(),
 * gst_promise_interrupt() and gst_promise_expire() may all be from
 * different threads with some restrictions and the final result of the promise
 * is whichever call is made first.  There are two restrictions on ordering:
 * 
 * 1. That gst_promise_reply() and gst_promise_interrupt() cannot be called
 * after gst_promise_expire()
 * 2. That gst_promise_reply() and gst_promise_interrupt()
 * cannot be called twice.
 * 
 * The change function set with gst_promise_new_with_change_func() is
 * called directly from either the gst_promise_reply(),
 * gst_promise_interrupt() or gst_promise_expire() and can be called
 * from an arbitrary thread.  #GstPromise using APIs can restrict this to
 * a single thread or a subset of threads but that is entirely up to the API
 * that uses #GstPromise.
 * @record 
 */
class Promise {

    // Own properties of Gst-1.0.Gst.Promise

    static name: string

    // Constructors of Gst-1.0.Gst.Promise

    constructor() 
    static new(): Promise
    /**
     * `func` will be called exactly once when transitioning out of
     * %GST_PROMISE_RESULT_PENDING into any of the other #GstPromiseResult
     * states.
     * @constructor 
     * @param func a #GstPromiseChangeFunc to call
     */
    static new_with_change_func(func: PromiseChangeFunc): Promise
}

interface ProtectionMeta {

    // Own fields of Gst-1.0.Gst.ProtectionMeta

    /**
     * the parent #GstMeta.
     * @field 
     */
    meta: Meta
    /**
     * the cryptographic information needed to decrypt the sample.
     * @field 
     */
    info: Structure
}

/**
 * Metadata type that holds information about a sample from a protection-protected
 * track, including the information needed to decrypt it (if it is encrypted).
 * @record 
 */
class ProtectionMeta {

    // Own properties of Gst-1.0.Gst.ProtectionMeta

    static name: string

    // Constructors of Gst-1.0.Gst.ProtectionMeta

    static get_info(): MetaInfo
}

interface ProxyPadClass {

    // Own fields of Gst-1.0.Gst.ProxyPadClass

    parent_class: PadClass
}

abstract class ProxyPadClass {

    // Own properties of Gst-1.0.Gst.ProxyPadClass

    static name: string
}

interface ProxyPadPrivate {
}

class ProxyPadPrivate {

    // Own properties of Gst-1.0.Gst.ProxyPadPrivate

    static name: string
}

interface Query {

    // Own fields of Gst-1.0.Gst.Query

    /**
     * The parent #GstMiniObject type
     * @field 
     */
    mini_object: MiniObject
    /**
     * the #GstQueryType
     * @field 
     */
    type: QueryType

    // Owm methods of Gst-1.0.Gst.Query

    /**
     * Add `api` with `params` as one of the supported metadata API to `query`.
     * @param api the metadata API
     * @param params API specific parameters
     */
    add_allocation_meta(api: GObject.GType, params: Structure | null): void
    /**
     * Add `allocator` and its `params` as a supported memory allocator.
     * @param allocator the memory allocator
     * @param params a #GstAllocationParams
     */
    add_allocation_param(allocator: Allocator | null, params: AllocationParams | null): void
    /**
     * Set the pool parameters in `query`.
     * @param pool the #GstBufferPool
     * @param size the buffer size
     * @param min_buffers the min buffers
     * @param max_buffers the max buffers
     */
    add_allocation_pool(pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void
    /**
     * Set the buffering-ranges array field in `query`. The current last
     * start position of the array should be inferior to `start`.
     * @param start start position of the range
     * @param stop stop position of the range
     */
    add_buffering_range(start: number, stop: number): boolean
    /**
     * Add `mode` as one of the supported scheduling modes to `query`.
     * @param mode a #GstPadMode
     */
    add_scheduling_mode(mode: PadMode): void
    /**
     * Check if `query` has metadata `api` set. When this function returns %TRUE,
     * `index` will contain the index where the requested API and the parameters
     * can be found.
     * @param api the metadata API
     */
    find_allocation_meta(api: GObject.GType): [ /* returnType */ boolean, /* index */ number ]
    /**
     * Retrieve the number of values currently stored in the
     * meta API array of the query's structure.
     */
    get_n_allocation_metas(): number
    /**
     * Retrieve the number of values currently stored in the
     * allocator params array of the query's structure.
     * 
     * If no memory allocator is specified, the downstream element can handle
     * the default memory allocator. The first memory allocator in the query
     * should be generic and allow mapping to system memory, all following
     * allocators should be ordered by preference with the preferred one first.
     */
    get_n_allocation_params(): number
    /**
     * Retrieve the number of values currently stored in the
     * pool array of the query's structure.
     */
    get_n_allocation_pools(): number
    /**
     * Retrieve the number of values currently stored in the
     * buffered-ranges array of the query's structure.
     */
    get_n_buffering_ranges(): number
    /**
     * Retrieve the number of values currently stored in the
     * scheduling mode array of the query's structure.
     */
    get_n_scheduling_modes(): number
    /**
     * Get the structure of a query.
     */
    get_structure(): Structure | null
    /**
     * Check if `query` has scheduling mode set.
     * 
     * > When checking if upstream supports pull mode, it is usually not
     * > enough to just check for GST_PAD_MODE_PULL with this function, you
     * > also want to check whether the scheduling flags returned by
     * > gst_query_parse_scheduling() have the seeking flag set (meaning
     * > random access is supported, not only sequential pulls).
     * @param mode the scheduling mode
     */
    has_scheduling_mode(mode: PadMode): boolean
    /**
     * Check if `query` has scheduling mode set and `flags` is set in
     * query scheduling flags.
     * @param mode the scheduling mode
     * @param flags #GstSchedulingFlags
     */
    has_scheduling_mode_with_flags(mode: PadMode, flags: SchedulingFlags): boolean
    /**
     * Get the caps from `query`. The caps remains valid as long as `query` remains
     * valid.
     */
    parse_accept_caps(): /* caps */ Caps
    /**
     * Parse the result from `query` and store in `result`.
     */
    parse_accept_caps_result(): /* result */ boolean
    /**
     * Parse an allocation query, writing the requested caps in `caps` and
     * whether a pool is needed in `need_pool,` if the respective parameters
     * are non-%NULL.
     * 
     * Pool details can be retrieved using gst_query_get_n_allocation_pools() and
     * gst_query_parse_nth_allocation_pool().
     */
    parse_allocation(): [ /* caps */ Caps, /* need_pool */ boolean ]
    /**
     * Get the results of a bitrate query. See also gst_query_set_bitrate().
     */
    parse_bitrate(): /* nominal_bitrate */ number
    /**
     * Get the percentage of buffered data. This is a value between 0 and 100.
     * The `busy` indicator is %TRUE when the buffering is in progress.
     */
    parse_buffering_percent(): [ /* busy */ boolean, /* percent */ number ]
    /**
     * Parse an available query, writing the format into `format,` and
     * other results into the passed parameters, if the respective parameters
     * are non-%NULL
     */
    parse_buffering_range(): [ /* format */ Format, /* start */ number, /* stop */ number, /* estimated_total */ number ]
    /**
     * Extracts the buffering stats values from `query`.
     */
    parse_buffering_stats(): [ /* mode */ BufferingMode, /* avg_in */ number, /* avg_out */ number, /* buffering_left */ number ]
    /**
     * Get the filter from the caps `query`. The caps remains valid as long as
     * `query` remains valid.
     */
    parse_caps(): /* filter */ Caps
    /**
     * Get the caps result from `query`. The caps remains valid as long as
     * `query` remains valid.
     */
    parse_caps_result(): /* caps */ Caps
    /**
     * Get the context from the context `query`. The context remains valid as long as
     * `query` remains valid.
     */
    parse_context(): /* context */ Context
    /**
     * Parse a context type from an existing GST_QUERY_CONTEXT query.
     */
    parse_context_type(): [ /* returnType */ boolean, /* context_type */ string ]
    /**
     * Parse a convert query answer. Any of `src_format,` `src_value,` `dest_format,`
     * and `dest_value` may be %NULL, in which case that value is omitted.
     */
    parse_convert(): [ /* src_format */ Format, /* src_value */ number, /* dest_format */ Format, /* dest_value */ number ]
    /**
     * Parse a duration query answer. Write the format of the duration into `format,`
     * and the value into `duration,` if the respective variables are non-%NULL.
     */
    parse_duration(): [ /* format */ Format, /* duration */ number ]
    /**
     * Parse a latency query answer.
     */
    parse_latency(): [ /* live */ boolean, /* min_latency */ ClockTime, /* max_latency */ ClockTime ]
    /**
     * Parse the number of formats in the formats `query`.
     */
    parse_n_formats(): /* n_formats */ number
    /**
     * Parse an available query and get the metadata API
     * at `index` of the metadata API array.
     * @param index position in the metadata API array to read
     */
    parse_nth_allocation_meta(index: number): [ /* returnType */ GObject.GType, /* params */ Structure ]
    /**
     * Parse an available query and get the allocator and its params
     * at `index` of the allocator array.
     * @param index position in the allocator array to read
     */
    parse_nth_allocation_param(index: number): [ /* allocator */ Allocator, /* params */ AllocationParams ]
    /**
     * Get the pool parameters in `query`.
     * 
     * Unref `pool` with gst_object_unref() when it's not needed any more.
     * @param index index to parse
     */
    parse_nth_allocation_pool(index: number): [ /* pool */ BufferPool, /* size */ number, /* min_buffers */ number, /* max_buffers */ number ]
    /**
     * Parse an available query and get the start and stop values stored
     * at the `index` of the buffered ranges array.
     * @param index position in the buffered-ranges array to read
     */
    parse_nth_buffering_range(index: number): [ /* returnType */ boolean, /* start */ number, /* stop */ number ]
    /**
     * Parse the format query and retrieve the `nth` format from it into
     * `format`. If the list contains less elements than `nth,` `format` will be
     * set to GST_FORMAT_UNDEFINED.
     * @param nth the nth format to retrieve.
     */
    parse_nth_format(nth: number): /* format */ Format
    /**
     * Parse an available query and get the scheduling mode
     * at `index` of the scheduling modes array.
     * @param index position in the scheduling modes array to read
     */
    parse_nth_scheduling_mode(index: number): PadMode
    /**
     * Parse a position query, writing the format into `format,` and the position
     * into `cur,` if the respective parameters are non-%NULL.
     */
    parse_position(): [ /* format */ Format, /* cur */ number ]
    /**
     * Set the scheduling properties.
     */
    parse_scheduling(): [ /* flags */ SchedulingFlags, /* minsize */ number, /* maxsize */ number, /* align */ number ]
    /**
     * Parse a seeking query, writing the format into `format,` and
     * other results into the passed parameters, if the respective parameters
     * are non-%NULL
     */
    parse_seeking(): [ /* format */ Format, /* seekable */ boolean, /* segment_start */ number, /* segment_end */ number ]
    /**
     * Parse a segment query answer. Any of `rate,` `format,` `start_value,` and
     * `stop_value` may be %NULL, which will cause this value to be omitted.
     * 
     * See gst_query_set_segment() for an explanation of the function arguments.
     */
    parse_segment(): [ /* rate */ number, /* format */ Format, /* start_value */ number, /* stop_value */ number ]
    /**
     * Parse an URI query, writing the URI into `uri` as a newly
     * allocated string, if the respective parameters are non-%NULL.
     * Free the string with g_free() after usage.
     */
    parse_uri(): /* uri */ string
    /**
     * Parse an URI query, writing the URI into `uri` as a newly
     * allocated string, if the respective parameters are non-%NULL.
     * Free the string with g_free() after usage.
     */
    parse_uri_redirection(): /* uri */ string
    /**
     * Parse an URI query, and set `permanent` to %TRUE if there is a redirection
     * and it should be considered permanent. If a redirection is permanent,
     * applications should update their internal storage of the URI, otherwise
     * they should make all future requests to the original URI.
     */
    parse_uri_redirection_permanent(): /* permanent */ boolean
    /**
     * Increases the refcount of the given query by one.
     */
    ref(): Query
    /**
     * Remove the metadata API at `index` of the metadata API array.
     * @param index position in the metadata API array to remove
     */
    remove_nth_allocation_meta(index: number): void
    /**
     * Remove the allocation param at `index` of the allocation param array.
     * @param index position in the allocation param array to remove
     */
    remove_nth_allocation_param(index: number): void
    /**
     * Remove the allocation pool at `index` of the allocation pool array.
     * @param index position in the allocation pool array to remove
     */
    remove_nth_allocation_pool(index: number): void
    /**
     * Set `result` as the result for the `query`.
     * @param result the result to set
     */
    set_accept_caps_result(result: boolean): void
    /**
     * Set the results of a bitrate query.  The nominal bitrate is the average
     * bitrate expected over the length of the stream as advertised in file
     * headers (or similar).
     * @param nominal_bitrate the nominal bitrate in bits per second
     */
    set_bitrate(nominal_bitrate: number): void
    /**
     * Set the percentage of buffered data. This is a value between 0 and 100.
     * The `busy` indicator is %TRUE when the buffering is in progress.
     * @param busy if buffering is busy
     * @param percent a buffering percent
     */
    set_buffering_percent(busy: boolean, percent: number): void
    /**
     * Set the available query result fields in `query`.
     * @param format the format to set for the `start` and `stop` values
     * @param start the start to set
     * @param stop the stop to set
     * @param estimated_total estimated total amount of download time remaining in     milliseconds
     */
    set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void
    /**
     * Configures the buffering stats values in `query`.
     * @param mode a buffering mode
     * @param avg_in the average input rate
     * @param avg_out the average output rate
     * @param buffering_left amount of buffering time left in milliseconds
     */
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    /**
     * Set the `caps` result in `query`.
     * @param caps A pointer to the caps
     */
    set_caps_result(caps: Caps): void
    /**
     * Answer a context query by setting the requested context.
     * @param context the requested #GstContext
     */
    set_context(context: Context): void
    /**
     * Answer a convert query by setting the requested values.
     * @param src_format the source #GstFormat
     * @param src_value the source value
     * @param dest_format the destination #GstFormat
     * @param dest_value the destination value
     */
    set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void
    /**
     * Answer a duration query by setting the requested value in the given format.
     * @param format the #GstFormat for the duration
     * @param duration the duration of the stream
     */
    set_duration(format: Format, duration: number): void
    /**
     * Set the formats query result fields in `query`. The number of formats passed
     * in the `formats` array must be equal to `n_formats`.
     * @param formats an array containing `n_formats`     `GstFormat` values.
     */
    set_formatsv(formats: Format[]): void
    /**
     * Answer a latency query by setting the requested values in the given format.
     * @param live if there is a live element upstream
     * @param min_latency the minimal latency of the upstream elements
     * @param max_latency the maximal latency of the upstream elements
     */
    set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void
    /**
     * Parse an available query and get the allocator and its params
     * at `index` of the allocator array.
     * @param index position in the allocator array to set
     * @param allocator new allocator to set
     * @param params parameters for the allocator
     */
    set_nth_allocation_param(index: number, allocator: Allocator | null, params: AllocationParams | null): void
    /**
     * Set the pool parameters in `query`.
     * @param index index to modify
     * @param pool the #GstBufferPool
     * @param size the buffer size
     * @param min_buffers the min buffers
     * @param max_buffers the max buffers
     */
    set_nth_allocation_pool(index: number, pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void
    /**
     * Answer a position query by setting the requested value in the given format.
     * @param format the requested #GstFormat
     * @param cur the position to set
     */
    set_position(format: Format, cur: number): void
    /**
     * Set the scheduling properties.
     * @param flags #GstSchedulingFlags
     * @param minsize the suggested minimum size of pull requests
     * @param maxsize the suggested maximum size of pull requests
     * @param align the suggested alignment of pull requests
     */
    set_scheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void
    /**
     * Set the seeking query result fields in `query`.
     * @param format the format to set for the `segment_start` and `segment_end` values
     * @param seekable the seekable flag to set
     * @param segment_start the segment_start to set
     * @param segment_end the segment_end to set
     */
    set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void
    /**
     * Answer a segment query by setting the requested values. The normal
     * playback segment of a pipeline is 0 to duration at the default rate of
     * 1.0. If a seek was performed on the pipeline to play a different
     * segment, this query will return the range specified in the last seek.
     * 
     * `start_value` and `stop_value` will respectively contain the configured
     * playback range start and stop values expressed in `format`.
     * The values are always between 0 and the duration of the media and
     * `start_value` <= `stop_value`. `rate` will contain the playback rate. For
     * negative rates, playback will actually happen from `stop_value` to
     * `start_value`.
     * @param rate the rate of the segment
     * @param format the #GstFormat of the segment values (`start_value` and `stop_value)`
     * @param start_value the start value
     * @param stop_value the stop value
     */
    set_segment(rate: number, format: Format, start_value: number, stop_value: number): void
    /**
     * Answer a URI query by setting the requested URI.
     * @param uri the URI to set
     */
    set_uri(uri: string): void
    /**
     * Answer a URI query by setting the requested URI redirection.
     * @param uri the URI to set
     */
    set_uri_redirection(uri: string): void
    /**
     * Answer a URI query by setting the requested URI redirection
     * to permanent or not.
     * @param permanent whether the redirect is permanent or not
     */
    set_uri_redirection_permanent(permanent: boolean): void
    /**
     * Get the structure of a query. This method should be called with a writable
     * `query` so that the returned structure is guaranteed to be writable.
     */
    writable_structure(): Structure
}

/**
 * Queries can be performed on pads (gst_pad_query()) and elements
 * (gst_element_query()). Please note that some queries might need a running
 * pipeline to work.
 * 
 * Queries can be created using the gst_query_new_*() functions.
 * Query values can be set using gst_query_set_*(), and parsed using
 * gst_query_parse_*() helpers.
 * 
 * The following example shows how to query the duration of a pipeline:
 * 
 * ```c
 *   GstQuery *query;
 *   gboolean res;
 *   query = gst_query_new_duration (GST_FORMAT_TIME);
 *   res = gst_element_query (pipeline, query);
 *   if (res) {
 *     gint64 duration;
 *     gst_query_parse_duration (query, NULL, &duration);
 *     g_print ("duration = %"GST_TIME_FORMAT, GST_TIME_ARGS (duration));
 *   } else {
 *     g_print ("duration query failed...");
 *   }
 *   gst_query_unref (query);
 * ```
 * 
 * @record 
 */
class Query {

    // Own properties of Gst-1.0.Gst.Query

    static name: string

    // Constructors of Gst-1.0.Gst.Query

    /**
     * Constructs a new query object for querying if `caps` are accepted.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param caps a fixed #GstCaps
     */
    static new_accept_caps(caps: Caps): Query
    /**
     * Constructs a new query object for querying the allocation properties.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param caps the negotiated caps
     * @param need_pool return a pool
     */
    static new_allocation(caps: Caps, need_pool: boolean): Query
    /**
     * Constructs a new query object for querying the bitrate.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     */
    static new_bitrate(): Query
    /**
     * Constructs a new query object for querying the buffering status of
     * a stream.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param format the default #GstFormat for the new query
     */
    static new_buffering(format: Format): Query
    /**
     * Constructs a new query object for querying the caps.
     * 
     * The CAPS query should return the allowable caps for a pad in the context
     * of the element's state, its link to other elements, and the devices or files
     * it has opened. These caps must be a subset of the pad template caps. In the
     * NULL state with no links, the CAPS query should ideally return the same caps
     * as the pad template. In rare circumstances, an object property can affect
     * the caps returned by the CAPS query, but this is discouraged.
     * 
     * For most filters, the caps returned by CAPS query is directly affected by the
     * allowed caps on other pads. For demuxers and decoders, the caps returned by
     * the srcpad's getcaps function is directly related to the stream data. Again,
     * the CAPS query should return the most specific caps it reasonably can, since this
     * helps with autoplugging.
     * 
     * The `filter` is used to restrict the result caps, only the caps matching
     * `filter` should be returned from the CAPS query. Specifying a filter might
     * greatly reduce the amount of processing an element needs to do.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param filter a filter
     */
    static new_caps(filter: Caps): Query
    /**
     * Constructs a new query object for querying the pipeline-local context.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param context_type Context type to query
     */
    static new_context(context_type: string): Query
    /**
     * Constructs a new convert query object. Use gst_query_unref()
     * when done with it. A convert query is used to ask for a conversion between
     * one format and another.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param src_format the source #GstFormat for the new query
     * @param value the value to convert
     * @param dest_format the target #GstFormat
     */
    static new_convert(src_format: Format, value: number, dest_format: Format): Query
    /**
     * Constructs a new custom query object. Use gst_query_unref()
     * when done with it.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param type the query type
     * @param structure a structure for the query
     */
    static new_custom(type: QueryType, structure: Structure | null): Query
    /**
     * Constructs a new query object for querying the drain state.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     */
    static new_drain(): Query
    /**
     * Constructs a new stream duration query object to query in the given format.
     * Use gst_query_unref() when done with it. A duration query will give the
     * total length of the stream.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param format the #GstFormat for this duration query
     */
    static new_duration(format: Format): Query
    /**
     * Constructs a new query object for querying formats of
     * the stream.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     */
    static new_formats(): Query
    /**
     * Constructs a new latency query object.
     * Use gst_query_unref() when done with it. A latency query is usually performed
     * by sinks to compensate for additional latency introduced by elements in the
     * pipeline.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     */
    static new_latency(): Query
    /**
     * Constructs a new query stream position query object. Use gst_query_unref()
     * when done with it. A position query is used to query the current position
     * of playback in the streams, in some format.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param format the default #GstFormat for the new query
     */
    static new_position(format: Format): Query
    /**
     * Constructs a new query object for querying the scheduling properties.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     */
    static new_scheduling(): Query
    /**
     * Constructs a new query object for querying seeking properties of
     * the stream.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param format the default #GstFormat for the new query
     */
    static new_seeking(format: Format): Query
    /**
     * Constructs a new segment query object. Use gst_query_unref()
     * when done with it. A segment query is used to discover information about the
     * currently configured segment for playback.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     * @param format the #GstFormat for the new query
     */
    static new_segment(format: Format): Query
    /**
     * Constructs a new query URI query object. Use gst_query_unref()
     * when done with it. An URI query is used to query the current URI
     * that is used by the source or sink.
     * 
     * Free-function: gst_query_unref()
     * @constructor 
     */
    static new_uri(): Query
    /**
     * Modifies a pointer to a #GstQuery to point to a different #GstQuery. This
     * function is similar to gst_query_replace() except that it takes ownership of
     * `new_query`.
     * 
     * Either `new_query` or the #GstQuery pointed to by `old_query` may be %NULL.
     * @param old_query pointer to a     pointer to a #GstQuery to be stolen.
     * @param new_query pointer to a #GstQuery that will     replace the query pointed to by `old_query`.
     */
    static take(old_query: Query | null, new_query: Query | null): [ /* returnType */ boolean, /* old_query */ Query | null ]
}

interface ReferenceTimestampMeta {

    // Own fields of Gst-1.0.Gst.ReferenceTimestampMeta

    /**
     * the parent #GstMeta structure
     * @field 
     */
    parent: Meta
    /**
     * identifier for the timestamp reference.
     * @field 
     */
    reference: Caps
    /**
     * timestamp
     * @field 
     */
    timestamp: ClockTime
    /**
     * duration, or %GST_CLOCK_TIME_NONE
     * @field 
     */
    duration: ClockTime
}

/**
 * #GstReferenceTimestampMeta can be used to attach alternative timestamps and
 * possibly durations to a #GstBuffer. These are generally not according to
 * the pipeline clock and could be e.g. the NTP timestamp when the media was
 * captured.
 * 
 * The reference is stored as a #GstCaps in `reference`. Examples of valid
 * references would be `timestamp/x-drivername-stream` for timestamps that are locally
 * generated by some driver named `drivername` when generating the stream,
 * e.g. based on a frame counter, or `timestamp/x-ntp, host=pool.ntp.org,
 * port=123` for timestamps based on a specific NTP server.
 * @record 
 */
class ReferenceTimestampMeta {

    // Own properties of Gst-1.0.Gst.ReferenceTimestampMeta

    static name: string

    // Constructors of Gst-1.0.Gst.ReferenceTimestampMeta

    /**
     * Gets the global #GstMetaInfo describing the #GstReferenceTimestampMeta meta.
     */
    static get_info(): MetaInfo
}

interface RegistryClass {

    // Own fields of Gst-1.0.Gst.RegistryClass

    parent_class: ObjectClass
}

abstract class RegistryClass {

    // Own properties of Gst-1.0.Gst.RegistryClass

    static name: string
}

interface RegistryPrivate {
}

class RegistryPrivate {

    // Own properties of Gst-1.0.Gst.RegistryPrivate

    static name: string
}

interface Sample {

    // Owm methods of Gst-1.0.Gst.Sample

    /**
     * Get the buffer associated with `sample`
     */
    get_buffer(): Buffer | null
    /**
     * Get the buffer list associated with `sample`
     */
    get_buffer_list(): BufferList | null
    /**
     * Get the caps associated with `sample`
     */
    get_caps(): Caps | null
    /**
     * Get extra information associated with `sample`.
     */
    get_info(): Structure | null
    /**
     * Get the segment associated with `sample`
     */
    get_segment(): Segment
    /**
     * Set the buffer associated with `sample`. `sample` must be writable.
     * @param buffer A #GstBuffer
     */
    set_buffer(buffer: Buffer): void
    /**
     * Set the buffer list associated with `sample`. `sample` must be writable.
     * @param buffer_list a #GstBufferList
     */
    set_buffer_list(buffer_list: BufferList): void
    /**
     * Set the caps associated with `sample`. `sample` must be writable.
     * @param caps A #GstCaps
     */
    set_caps(caps: Caps): void
    /**
     * Set the info structure associated with `sample`. `sample` must be writable,
     * and `info` must not have a parent set already.
     * @param info A #GstStructure
     */
    set_info(info: Structure): boolean
    /**
     * Set the segment associated with `sample`. `sample` must be writable.
     * @param segment A #GstSegment
     */
    set_segment(segment: Segment): void
}

/**
 * A #GstSample is a small object containing data, a type, timing and
 * extra arbitrary information.
 * @record 
 */
class Sample {

    // Own properties of Gst-1.0.Gst.Sample

    static name: string

    // Constructors of Gst-1.0.Gst.Sample

    /**
     * Create a new #GstSample with the provided details.
     * 
     * Free-function: gst_sample_unref
     * @constructor 
     * @param buffer a #GstBuffer, or %NULL
     * @param caps a #GstCaps, or %NULL
     * @param segment a #GstSegment, or %NULL
     * @param info a #GstStructure, or %NULL
     */
    constructor(buffer: Buffer | null, caps: Caps | null, segment: Segment | null, info: Structure | null) 
    /**
     * Create a new #GstSample with the provided details.
     * 
     * Free-function: gst_sample_unref
     * @constructor 
     * @param buffer a #GstBuffer, or %NULL
     * @param caps a #GstCaps, or %NULL
     * @param segment a #GstSegment, or %NULL
     * @param info a #GstStructure, or %NULL
     */
    static new(buffer: Buffer | null, caps: Caps | null, segment: Segment | null, info: Structure | null): Sample
}

interface Segment {

    // Own fields of Gst-1.0.Gst.Segment

    /**
     * flags for this segment
     * @field 
     */
    flags: SegmentFlags
    /**
     * the playback rate of the segment is set in response to a seek
     *                event and, without any seek, the value should be `1.0`. This
     *                value is used by elements that synchronize buffer [running
     *                times](additional/design/synchronisation.md#running-time) on
     *                the clock (usually the sink elements), leading to consuming
     *                buffers faster (for a value `> 1.0`) or slower (for `0.0 <
     *                value < 1.0`) than normal playback speed. The rate also
     *                defines the playback direction, meaning that when the value is
     *                lower than `0.0`, the playback happens in reverse, and the
     *                [stream-time](additional/design/synchronisation.md#stream-time)
     *                is going backward. The `rate` value should never be `0.0`.
     * @field 
     */
    rate: number
    /**
     * The applied rate is the rate that has been applied to the stream.
     *                The effective/resulting playback rate of a stream is
     *                `rate * applied_rate`.
     *                The applied rate can be set by source elements when a server is
     *                sending the stream with an already modified playback speed
     *                rate. Filter elements that modify the stream in a way that
     *                modifies the playback speed should also modify the applied
     *                rate. For example the #videorate element when its
     *                #videorate:rate property is set will set the applied rate of
     *                the segment it pushed downstream. Also #scaletempo applies the
     *                input segment rate to the stream and outputs a segment with
     *                rate=1.0 and applied_rate=<inputsegment.rate>.
     * @field 
     */
    applied_rate: number
    /**
     * the unit used for all of the segment's values.
     * @field 
     */
    format: Format
    /**
     * the running time (plus elapsed time, see offset) of the
     *                segment [start](GstSegment.start) ([stop](GstSegment.stop) if
     *                rate < 0.0).
     * @field 
     */
    base: number
    /**
     * the offset expresses the elapsed time (in buffer timestamps)
     *                before a seek with its start (stop if rate < 0.0) seek type
     *                set to #GST_SEEK_TYPE_NONE, the value is set to the position
     *                of the segment at the time of the seek.
     * @field 
     */
    offset: number
    /**
     * the start time of the segment (in buffer timestamps)
     *                [(PTS)](GstBuffer.pts), that is the timestamp of the first
     *                buffer to output inside the segment (last one during
     *                reverse playback). For example decoders will
     *                [clip](gst_segment_clip) out the buffers before the start
     *                time.
     * @field 
     */
    start: number
    /**
     * the stop time of the segment (in buffer timestamps)
     *                [(PTS)](GstBuffer.pts), that is the timestamp of the last
     *                buffer to output inside the segment (first one during
     *                reverse playback). For example decoders will
     *                [clip](gst_segment_clip) out buffers after the stop time.
     * @field 
     */
    stop: number
    /**
     * the stream time of the segment [start](GstSegment.start)
     *                ([stop](GstSegment.stop) if rate < 0.0).
     * @field 
     */
    time: number
    /**
     * the buffer timestamp position in the segment is supposed to be
     *                updated by elements such as sources, demuxers or parsers to
     *                track progress by setting it to the last pushed buffer' end time
     *                ([timestamp](GstBuffer.pts) + #GstBuffer.duration) for that
     *                specific segment. The position is used when reconfiguring the
     *                segment with #gst_segment_do_seek when the seek is only
     *                updating the segment (see [offset](GstSegment.offset)).
     * @field 
     */
    position: number
    /**
     * the duration of the segment is the maximum absolute difference
     *                between #GstSegment.start and #GstSegment.stop if stop is not
     *                set, otherwise it should be the difference between those
     *                two values. This should be set by elements that know the
     *                overall stream duration (like demuxers) and will be used when
     *                seeking with #GST_SEEK_TYPE_END.
     * @field 
     */
    duration: number

    // Owm methods of Gst-1.0.Gst.Segment

    /**
     * Clip the given `start` and `stop` values to the segment boundaries given
     * in `segment`. `start` and `stop` are compared and clipped to `segment`
     * start and stop values.
     * 
     * If the function returns %FALSE, `start` and `stop` are known to fall
     * outside of `segment` and `clip_start` and `clip_stop` are not updated.
     * 
     * When the function returns %TRUE, `clip_start` and `clip_stop` will be
     * updated. If `clip_start` or `clip_stop` are different from `start` or `stop`
     * respectively, the region fell partially in the segment.
     * 
     * Note that when `stop` is -1, `clip_stop` will be set to the end of the
     * segment. Depending on the use case, this may or may not be what you want.
     * @param format the format of the segment.
     * @param start the start position in the segment
     * @param stop the stop position in the segment
     */
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clip_start */ number, /* clip_stop */ number ]
    /**
     * Create a copy of given `segment`.
     * 
     * Free-function: gst_segment_free
     */
    copy(): Segment
    /**
     * Copy the contents of `src` into `dest`.
     * @param dest a #GstSegment
     */
    copy_into(dest: Segment): void
    /**
     * Update the segment structure with the field values of a seek event (see
     * gst_event_new_seek()).
     * 
     * After calling this method, the segment field position and time will
     * contain the requested new position in the segment. The new requested
     * position in the segment depends on `rate` and `start_type` and `stop_type`.
     * 
     * For positive `rate,` the new position in the segment is the new `segment`
     * start field when it was updated with a `start_type` different from
     * #GST_SEEK_TYPE_NONE. If no update was performed on `segment` start position
     * (#GST_SEEK_TYPE_NONE), `start` is ignored and `segment` position is
     * unmodified.
     * 
     * For negative `rate,` the new position in the segment is the new `segment`
     * stop field when it was updated with a `stop_type` different from
     * #GST_SEEK_TYPE_NONE. If no stop was previously configured in the segment, the
     * duration of the segment will be used to update the stop position.
     * If no update was performed on `segment` stop position (#GST_SEEK_TYPE_NONE),
     * `stop` is ignored and `segment` position is unmodified.
     * 
     * The applied rate of the segment will be set to 1.0 by default.
     * If the caller can apply a rate change, it should update `segment`
     * rate and applied_rate after calling this function.
     * 
     * `update` will be set to %TRUE if a seek should be performed to the segment
     * position field. This field can be %FALSE if, for example, only the `rate`
     * has been changed but not the playback position.
     * @param rate the rate of the segment.
     * @param format the format of the segment.
     * @param flags the segment flags for the segment
     * @param start_type the seek method
     * @param start the seek start value
     * @param stop_type the seek method
     * @param stop the seek stop value
     */
    do_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): [ /* returnType */ boolean, /* update */ boolean ]
    /**
     * Free the allocated segment `segment`.
     */
    free(): void
    /**
     * The start/position fields are set to 0 and the stop/duration
     * fields are set to -1 (unknown). The default rate of 1.0 and no
     * flags are set.
     * 
     * Initialize `segment` to its default values.
     * @param format the format of the segment.
     */
    init(format: Format): void
    /**
     * Checks for two segments being equal. Equality here is defined
     * as perfect equality, including floating point values.
     * @param s1 a #GstSegment structure.
     */
    is_equal(s1: Segment): boolean
    /**
     * Adjust the values in `segment` so that `offset` is applied to all
     * future running-time calculations.
     * @param format the format of the segment.
     * @param offset the offset to apply in the segment
     */
    offset_running_time(format: Format, offset: number): boolean
    /**
     * Convert `running_time` into a position in the segment so that
     * gst_segment_to_running_time() with that position returns `running_time`.
     * @param format the format of the segment.
     * @param running_time the running_time in the segment
     */
    position_from_running_time(format: Format, running_time: number): number
    /**
     * Translate `running_time` to the segment position using the currently configured
     * segment. Compared to gst_segment_position_from_running_time() this function can
     * return negative segment position.
     * 
     * This function is typically used by elements that need to synchronize buffers
     * against the clock or each other.
     * 
     * `running_time` can be any value and the result of this function for values
     * outside of the segment is extrapolated.
     * 
     * When 1 is returned, `running_time` resulted in a positive position returned
     * in `position`.
     * 
     * When this function returns -1, the returned `position` was < 0, and the value
     * in the position variable should be negated to get the real negative segment
     * position.
     * @param format the format of the segment.
     * @param running_time the running-time
     */
    position_from_running_time_full(format: Format, running_time: number): [ /* returnType */ number, /* position */ number ]
    /**
     * Convert `stream_time` into a position in the segment so that
     * gst_segment_to_stream_time() with that position returns `stream_time`.
     * @param format the format of the segment.
     * @param stream_time the stream_time in the segment
     */
    position_from_stream_time(format: Format, stream_time: number): number
    /**
     * Translate `stream_time` to the segment position using the currently configured
     * segment. Compared to gst_segment_position_from_stream_time() this function can
     * return negative segment position.
     * 
     * This function is typically used by elements that need to synchronize buffers
     * against the clock or each other.
     * 
     * `stream_time` can be any value and the result of this function for values outside
     * of the segment is extrapolated.
     * 
     * When 1 is returned, `stream_time` resulted in a positive position returned
     * in `position`.
     * 
     * When this function returns -1, the returned `position` should be negated
     * to get the real negative segment position.
     * @param format the format of the segment.
     * @param stream_time the stream-time
     */
    position_from_stream_time_full(format: Format, stream_time: number): [ /* returnType */ number, /* position */ number ]
    /**
     * Adjust the start/stop and base values of `segment` such that the next valid
     * buffer will be one with `running_time`.
     * @param format the format of the segment.
     * @param running_time the running_time in the segment
     */
    set_running_time(format: Format, running_time: number): boolean
    /**
     * Convert `running_time` into a position in the segment so that
     * gst_segment_to_running_time() with that position returns `running_time`.
     * @param format the format of the segment.
     * @param running_time the running_time in the segment
     */
    to_position(format: Format, running_time: number): number
    /**
     * Translate `position` to the total running time using the currently configured
     * segment. Position is a value between `segment` start and stop time.
     * 
     * This function is typically used by elements that need to synchronize to the
     * global clock in a pipeline. The running time is a constantly increasing value
     * starting from 0. When gst_segment_init() is called, this value will reset to
     * 0.
     * 
     * This function returns -1 if the position is outside of `segment` start and stop.
     * @param format the format of the segment.
     * @param position the position in the segment
     */
    to_running_time(format: Format, position: number): number
    /**
     * Translate `position` to the total running time using the currently configured
     * segment. Compared to gst_segment_to_running_time() this function can return
     * negative running-time.
     * 
     * This function is typically used by elements that need to synchronize buffers
     * against the clock or each other.
     * 
     * `position` can be any value and the result of this function for values outside
     * of the segment is extrapolated.
     * 
     * When 1 is returned, `position` resulted in a positive running-time returned
     * in `running_time`.
     * 
     * When this function returns -1, the returned `running_time` should be negated
     * to get the real negative running time.
     * @param format the format of the segment.
     * @param position the position in the segment
     */
    to_running_time_full(format: Format, position: number): [ /* returnType */ number, /* running_time */ number ]
    /**
     * Translate `position` to stream time using the currently configured
     * segment. The `position` value must be between `segment` start and
     * stop value.
     * 
     * This function is typically used by elements that need to operate on
     * the stream time of the buffers it receives, such as effect plugins.
     * In those use cases, `position` is typically the buffer timestamp or
     * clock time that one wants to convert to the stream time.
     * The stream time is always between 0 and the total duration of the
     * media stream.
     * @param format the format of the segment.
     * @param position the position in the segment
     */
    to_stream_time(format: Format, position: number): number
    /**
     * Translate `position` to the total stream time using the currently configured
     * segment. Compared to gst_segment_to_stream_time() this function can return
     * negative stream-time.
     * 
     * This function is typically used by elements that need to synchronize buffers
     * against the clock or each other.
     * 
     * `position` can be any value and the result of this function for values outside
     * of the segment is extrapolated.
     * 
     * When 1 is returned, `position` resulted in a positive stream-time returned
     * in `stream_time`.
     * 
     * When this function returns -1, the returned `stream_time` should be negated
     * to get the real negative stream time.
     * @param format the format of the segment.
     * @param position the position in the segment
     */
    to_stream_time_full(format: Format, position: number): [ /* returnType */ number, /* stream_time */ number ]
}

/**
 * This helper structure holds the relevant values for tracking the region of
 * interest in a media file, called a segment.
 * 
 * The structure can be used for two purposes:
 * 
 *   * performing seeks (handling seek events)
 *   * tracking playback regions (handling newsegment events)
 * 
 * The segment is usually configured by the application with a seek event which
 * is propagated upstream and eventually handled by an element that performs the seek.
 * 
 * The configured segment is then propagated back downstream with a newsegment event.
 * This information is then used to clip media to the segment boundaries.
 * 
 * A segment structure is initialized with gst_segment_init(), which takes a #GstFormat
 * that will be used as the format of the segment values. The segment will be configured
 * with a start value of 0 and a stop/duration of -1, which is undefined. The default
 * rate and applied_rate is 1.0.
 * 
 * The public duration field contains the duration of the segment. When using
 * the segment for seeking, the start and time members should normally be left
 * to their default 0 value. The stop position is left to -1 unless explicitly
 * configured to a different value after a seek event.
 * 
 * The current position in the segment should be set by changing the position
 * member in the structure.
 * 
 * For elements that perform seeks, the current segment should be updated with the
 * gst_segment_do_seek() and the values from the seek event. This method will update
 * all the segment fields. The position field will contain the new playback position.
 * If the start_type was different from GST_SEEK_TYPE_NONE, playback continues from
 * the position position, possibly with updated flags or rate.
 * 
 * For elements that want to use #GstSegment to track the playback region,
 * update the segment fields with the information from the newsegment event.
 * The gst_segment_clip() method can be used to check and clip
 * the media data to the segment boundaries.
 * 
 * For elements that want to synchronize to the pipeline clock, gst_segment_to_running_time()
 * can be used to convert a timestamp to a value that can be used to synchronize
 * to the clock. This function takes into account the base as well as
 * any rate or applied_rate conversions.
 * 
 * For elements that need to perform operations on media data in stream_time,
 * gst_segment_to_stream_time() can be used to convert a timestamp and the segment
 * info to stream time (which is always between 0 and the duration of the stream).
 * @record 
 */
class Segment {

    // Own properties of Gst-1.0.Gst.Segment

    static name: string

    // Constructors of Gst-1.0.Gst.Segment

    /**
     * Allocate a new #GstSegment structure and initialize it using
     * gst_segment_init().
     * 
     * Free-function: gst_segment_free
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new #GstSegment structure and initialize it using
     * gst_segment_init().
     * 
     * Free-function: gst_segment_free
     * @constructor 
     */
    static new(): Segment
}

interface SharedTaskPoolClass {

    // Own fields of Gst-1.0.Gst.SharedTaskPoolClass

    parent_class: TaskPoolClass
}

/**
 * The #GstSharedTaskPoolClass object.
 * @record 
 */
abstract class SharedTaskPoolClass {

    // Own properties of Gst-1.0.Gst.SharedTaskPoolClass

    static name: string
}

interface SharedTaskPoolPrivate {
}

class SharedTaskPoolPrivate {

    // Own properties of Gst-1.0.Gst.SharedTaskPoolPrivate

    static name: string
}

interface StaticCaps {

    // Own fields of Gst-1.0.Gst.StaticCaps

    /**
     * the cached #GstCaps
     * @field 
     */
    caps: Caps
    /**
     * a string describing a caps
     * @field 
     */
    string: string

    // Owm methods of Gst-1.0.Gst.StaticCaps

    /**
     * Cleans up the cached caps contained in `static_caps`.
     */
    cleanup(): void
    /**
     * Converts a #GstStaticCaps to a #GstCaps.
     */
    get(): Caps | null
}

/**
 * Data structure to initialize #GstCaps from a string description usually
 * used in conjunction with GST_STATIC_CAPS() and gst_static_caps_get() to
 * instantiate a #GstCaps.
 * @record 
 */
class StaticCaps {

    // Own properties of Gst-1.0.Gst.StaticCaps

    static name: string
}

interface StaticPadTemplate {

    // Own fields of Gst-1.0.Gst.StaticPadTemplate

    /**
     * the name of the template
     * @field 
     */
    name_template: string
    /**
     * the direction of the template
     * @field 
     */
    direction: PadDirection
    /**
     * the presence of the template
     * @field 
     */
    presence: PadPresence
    /**
     * the caps of the template.
     * @field 
     */
    static_caps: StaticCaps

    // Owm methods of Gst-1.0.Gst.StaticPadTemplate

    /**
     * Converts a #GstStaticPadTemplate into a #GstPadTemplate.
     */
    get(): PadTemplate | null
    /**
     * Gets the capabilities of the static pad template.
     */
    get_caps(): Caps
}

/**
 * Structure describing the #GstStaticPadTemplate.
 * @record 
 */
class StaticPadTemplate {

    // Own properties of Gst-1.0.Gst.StaticPadTemplate

    static name: string
}

interface StreamClass {

    // Own fields of Gst-1.0.Gst.StreamClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: ObjectClass
}

/**
 * GstStream class structure
 * @record 
 */
abstract class StreamClass {

    // Own properties of Gst-1.0.Gst.StreamClass

    static name: string
}

interface StreamCollectionClass {

    // Own fields of Gst-1.0.Gst.StreamCollectionClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: ObjectClass
    stream_notify: (collection: StreamCollection, stream: Stream, pspec: GObject.ParamSpec) => void
}

/**
 * GstStreamCollection class structure
 * @record 
 */
abstract class StreamCollectionClass {

    // Own properties of Gst-1.0.Gst.StreamCollectionClass

    static name: string
}

interface StreamCollectionPrivate {
}

class StreamCollectionPrivate {

    // Own properties of Gst-1.0.Gst.StreamCollectionPrivate

    static name: string
}

interface StreamPrivate {
}

class StreamPrivate {

    // Own properties of Gst-1.0.Gst.StreamPrivate

    static name: string
}

interface Structure {

    // Own fields of Gst-1.0.Gst.Structure

    /**
     * the GType of a structure
     * @field 
     */
    type: GObject.GType

    // Owm methods of Gst-1.0.Gst.Structure

    /**
     * Tries intersecting `struct1` and `struct2` and reports whether the result
     * would not be empty.
     * @param struct2 a #GstStructure
     */
    can_intersect(struct2: Structure): boolean
    /**
     * Duplicates a #GstStructure and all its fields and values.
     * 
     * Free-function: gst_structure_free
     */
    copy(): Structure
    /**
     * Calls the provided function once for each field in the #GstStructure. In
     * contrast to gst_structure_foreach(), the function may modify the fields.
     * In contrast to gst_structure_map_in_place(), the field is removed from
     * the structure if %FALSE is returned from the function.
     * The structure must be mutable.
     * @param func a function to call for each field
     */
    filter_and_map_in_place(func: StructureFilterMapFunc): void
    /**
     * Fixate all values in `structure` using gst_value_fixate().
     * `structure` will be modified in-place and should be writable.
     */
    fixate(): void
    /**
     * Fixates a #GstStructure by changing the given field with its fixated value.
     * @param field_name a field in `structure`
     */
    fixate_field(field_name: string): boolean
    /**
     * Fixates a #GstStructure by changing the given `field_name` field to the given
     * `target` boolean if that field is not fixed yet.
     * @param field_name a field in `structure`
     * @param target the target value of the fixation
     */
    fixate_field_boolean(field_name: string, target: boolean): boolean
    /**
     * Fixates a #GstStructure by changing the given field to the nearest
     * double to `target` that is a subset of the existing field.
     * @param field_name a field in `structure`
     * @param target the target value of the fixation
     */
    fixate_field_nearest_double(field_name: string, target: number): boolean
    /**
     * Fixates a #GstStructure by changing the given field to the nearest
     * fraction to `target_numerator/``target_denominator` that is a subset
     * of the existing field.
     * @param field_name a field in `structure`
     * @param target_numerator The numerator of the target value of the fixation
     * @param target_denominator The denominator of the target value of the fixation
     */
    fixate_field_nearest_fraction(field_name: string, target_numerator: number, target_denominator: number): boolean
    /**
     * Fixates a #GstStructure by changing the given field to the nearest
     * integer to `target` that is a subset of the existing field.
     * @param field_name a field in `structure`
     * @param target the target value of the fixation
     */
    fixate_field_nearest_int(field_name: string, target: number): boolean
    /**
     * Fixates a #GstStructure by changing the given `field_name` field to the given
     * `target` string if that field is not fixed yet.
     * @param field_name a field in `structure`
     * @param target the target value of the fixation
     */
    fixate_field_string(field_name: string, target: string): boolean
    /**
     * Calls the provided function once for each field in the #GstStructure. The
     * function must not modify the fields. Also see gst_structure_map_in_place()
     * and gst_structure_filter_and_map_in_place().
     * @param func a function to call for each field
     */
    foreach(func: StructureForeachFunc): boolean
    /**
     * Frees a #GstStructure and all its fields and values. The structure must not
     * have a parent when this function is called.
     */
    free(): void
    /**
     * This is useful in language bindings where unknown #GValue types are not
     * supported. This function will convert the %GST_TYPE_ARRAY into a newly
     * allocated #GValueArray and return it through `array`. Be aware that this is
     * slower then getting the #GValue directly.
     * @param fieldname the name of a field
     */
    get_array(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    /**
     * Sets the boolean pointed to by `value` corresponding to the value of the
     * given field.  Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_boolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Sets the clock time pointed to by `value` corresponding to the clock time
     * of the given field.  Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_clock_time(fieldname: string): [ /* returnType */ boolean, /* value */ ClockTime ]
    /**
     * Sets the date pointed to by `value` corresponding to the date of the
     * given field.  Caller is responsible for making sure the field exists
     * and has the correct type.
     * 
     * On success `value` will point to a newly-allocated copy of the date which
     * should be freed with g_date_free() when no longer needed (note: this is
     * inconsistent with e.g. gst_structure_get_string() which doesn't return a
     * copy of the string).
     * @param fieldname the name of a field
     */
    get_date(fieldname: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Sets the datetime pointed to by `value` corresponding to the datetime of the
     * given field. Caller is responsible for making sure the field exists
     * and has the correct type.
     * 
     * On success `value` will point to a reference of the datetime which
     * should be unreffed with gst_date_time_unref() when no longer needed
     * (note: this is inconsistent with e.g. gst_structure_get_string()
     * which doesn't return a copy of the string).
     * @param fieldname the name of a field
     */
    get_date_time(fieldname: string): [ /* returnType */ boolean, /* value */ DateTime ]
    /**
     * Sets the double pointed to by `value` corresponding to the value of the
     * given field.  Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_double(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Sets the int pointed to by `value` corresponding to the value of the
     * given field.  Caller is responsible for making sure the field exists,
     * has the correct type and that the enumtype is correct.
     * @param fieldname the name of a field
     * @param enumtype the enum type of a field
     */
    get_enum(fieldname: string, enumtype: GObject.GType): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Finds the field with the given name, and returns the type of the
     * value it contains.  If the field is not found, G_TYPE_INVALID is
     * returned.
     * @param fieldname the name of the field
     */
    get_field_type(fieldname: string): GObject.GType
    /**
     * Read the GstFlagSet flags and mask out of the structure into the
     * provided pointers.
     * @param fieldname the name of a field
     */
    get_flagset(fieldname: string): [ /* returnType */ boolean, /* value_flags */ number, /* value_mask */ number ]
    /**
     * Sets the integers pointed to by `value_numerator` and `value_denominator`
     * corresponding to the value of the given field.  Caller is responsible
     * for making sure the field exists and has the correct type.
     * @param fieldname the name of a field
     */
    get_fraction(fieldname: string): [ /* returnType */ boolean, /* value_numerator */ number, /* value_denominator */ number ]
    /**
     * Sets the int pointed to by `value` corresponding to the value of the
     * given field.  Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_int(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Sets the #gint64 pointed to by `value` corresponding to the value of the
     * given field. Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_int64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * This is useful in language bindings where unknown #GValue types are not
     * supported. This function will convert the %GST_TYPE_LIST into a newly
     * allocated GValueArray and return it through `array`. Be aware that this is
     * slower then getting the #GValue directly.
     * @param fieldname the name of a field
     */
    get_list(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    /**
     * Get the name of `structure` as a string.
     */
    get_name(): string
    /**
     * Get the name of `structure` as a GQuark.
     */
    get_name_id(): GLib.Quark
    /**
     * Finds the field corresponding to `fieldname,` and returns the string
     * contained in the field's value.  Caller is responsible for making
     * sure the field exists and has the correct type.
     * 
     * The string should not be modified, and remains valid until the next
     * call to a gst_structure_*() function with the given structure.
     * @param fieldname the name of a field
     */
    get_string(fieldname: string): string | null
    /**
     * Sets the uint pointed to by `value` corresponding to the value of the
     * given field.  Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_uint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Sets the #guint64 pointed to by `value` corresponding to the value of the
     * given field. Caller is responsible for making sure the field exists
     * and has the correct type.
     * @param fieldname the name of a field
     */
    get_uint64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Get the value of the field with name `fieldname`.
     * @param fieldname the name of the field to get
     */
    get_value(fieldname: string): any | null
    /**
     * Check if `structure` contains a field named `fieldname`.
     * @param fieldname the name of a field
     */
    has_field(fieldname: string): boolean
    /**
     * Check if `structure` contains a field named `fieldname` and with GType `type`.
     * @param fieldname the name of a field
     * @param type the type of a value
     */
    has_field_typed(fieldname: string, type: GObject.GType): boolean
    /**
     * Checks if the structure has the given name
     * @param name structure name to check for
     */
    has_name(name: string): boolean
    /**
     * Get the value of the field with GQuark `field`.
     * @param field the #GQuark of the field to get
     */
    id_get_value(field: GLib.Quark): any | null
    /**
     * Check if `structure` contains a field named `field`.
     * @param field #GQuark of the field name
     */
    id_has_field(field: GLib.Quark): boolean
    /**
     * Check if `structure` contains a field named `field` and with GType `type`.
     * @param field #GQuark of the field name
     * @param type the type of a value
     */
    id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean
    /**
     * Sets the field with the given GQuark `field` to `value`.  If the field
     * does not exist, it is created.  If the field exists, the previous
     * value is replaced and freed.
     * @param field a #GQuark representing a field
     * @param value the new value of the field
     */
    id_set_value(field: GLib.Quark, value: any): void
    /**
     * Sets the field with the given GQuark `field` to `value`.  If the field
     * does not exist, it is created.  If the field exists, the previous
     * value is replaced and freed.
     * @param field a #GQuark representing a field
     * @param value the new value of the field
     */
    id_take_value(field: GLib.Quark, value: any): void
    /**
     * Intersects `struct1` and `struct2` and returns the intersection.
     * @param struct2 a #GstStructure
     */
    intersect(struct2: Structure): Structure | null
    /**
     * Tests if the two #GstStructure are equal.
     * @param structure2 a #GstStructure.
     */
    is_equal(structure2: Structure): boolean
    /**
     * Checks if `subset` is a subset of `superset,` i.e. has the same
     * structure name and for all fields that are existing in `superset,`
     * `subset` has a value that is a subset of the value in `superset`.
     * @param superset a potentially greater #GstStructure
     */
    is_subset(superset: Structure): boolean
    /**
     * Calls the provided function once for each field in the #GstStructure. In
     * contrast to gst_structure_foreach(), the function may modify but not delete the
     * fields. The structure must be mutable.
     * @param func a function to call for each field
     */
    map_in_place(func: StructureMapFunc): boolean
    /**
     * Get the number of fields in the structure.
     */
    n_fields(): number
    /**
     * Get the name of the given field number, counting from 0 onwards.
     * @param index the index to get the name of
     */
    nth_field_name(index: number): string
    /**
     * Removes all fields in a GstStructure.
     */
    remove_all_fields(): void
    /**
     * Removes the field with the given name.  If the field with the given
     * name does not exist, the structure is unchanged.
     * @param fieldname the name of the field to remove
     */
    remove_field(fieldname: string): void
    /**
     * Converts `structure` to a human-readable string representation.
     * 
     * This version of the caps serialization function introduces support for nested
     * structures and caps but the resulting strings won't be parsable with
     * GStreamer prior to 1.20 unless #GST_SERIALIZE_FLAG_BACKWARD_COMPAT is passed
     * as `flag`.
     * 
     * Free-function: g_free
     * @param flags The flags to use to serialize structure
     */
    serialize(flags: SerializeFlags): string
    /**
     * This is useful in language bindings where unknown GValue types are not
     * supported. This function will convert a `array` to %GST_TYPE_ARRAY and set
     * the field specified by `fieldname`.  Be aware that this is slower then using
     * %GST_TYPE_ARRAY in a #GValue directly.
     * @param fieldname the name of a field
     * @param array a pointer to a #GValueArray
     */
    set_array(fieldname: string, array: GObject.ValueArray): void
    /**
     * This is useful in language bindings where unknown GValue types are not
     * supported. This function will convert a `array` to %GST_TYPE_LIST and set
     * the field specified by `fieldname`. Be aware that this is slower then using
     * %GST_TYPE_LIST in a #GValue directly.
     * @param fieldname the name of a field
     * @param array a pointer to a #GValueArray
     */
    set_list(fieldname: string, array: GObject.ValueArray): void
    /**
     * Sets the name of the structure to the given `name`.  The string
     * provided is copied before being used. It must not be empty, start with a
     * letter and can be followed by letters, numbers and any of "/-_.:".
     * @param name the new name of the structure
     */
    set_name(name: string): void
    /**
     * Sets the parent_refcount field of #GstStructure. This field is used to
     * determine whether a structure is mutable or not. This function should only be
     * called by code implementing parent objects of #GstStructure, as described in
     * the MT Refcounting section of the design documents.
     * @param refcount a pointer to the parent's refcount
     */
    set_parent_refcount(refcount: number): boolean
    /**
     * Sets the field with the given name `field` to `value`.  If the field
     * does not exist, it is created.  If the field exists, the previous
     * value is replaced and freed.
     * @param fieldname the name of the field to set
     * @param value the new value of the field
     */
    set_value(fieldname: string, value: any): void
    /**
     * Sets the field with the given name `field` to `value`.  If the field
     * does not exist, it is created.  If the field exists, the previous
     * value is replaced and freed. The function will take ownership of `value`.
     * @param fieldname the name of the field to set
     * @param value the new value of the field
     */
    take_value(fieldname: string, value: any): void
    /**
     * Converts `structure` to a human-readable string representation.
     * 
     * For debugging purposes its easier to do something like this: |[<!--
     * language="C" --> GST_LOG ("structure is %" GST_PTR_FORMAT, structure);
     * ```
     * 
     * This prints the structure in human readable form.
     * 
     * This function will lead to unexpected results when there are nested #GstCaps
     * / #GstStructure deeper than one level, you should user
     * gst_structure_serialize() instead for those cases.
     * 
     * Free-function: g_free
     */
    to_string(): string
}

/**
 * A #GstStructure is a collection of key/value pairs. The keys are expressed as
 * GQuarks and the values can be of any GType.
 * 
 * In addition to the key/value pairs, a #GstStructure also has a name. The name
 * starts with a letter and can be filled by letters, numbers and any of
 * "/-_.:".
 * 
 * #GstStructure is used by various GStreamer subsystems to store information in
 * a flexible and extensible way. A #GstStructure does not have a refcount
 * because it usually is part of a higher level object such as #GstCaps,
 * #GstMessage, #GstEvent, #GstQuery. It provides a means to enforce mutability
 * using the refcount of the parent with the gst_structure_set_parent_refcount()
 * method.
 * 
 * A #GstStructure can be created with gst_structure_new_empty() or
 * gst_structure_new(), which both take a name and an optional set of key/value
 * pairs along with the types of the values.
 * 
 * Field values can be changed with gst_structure_set_value() or
 * gst_structure_set().
 * 
 * Field values can be retrieved with gst_structure_get_value() or the more
 * convenient gst_structure_get_*() functions.
 * 
 * Fields can be removed with gst_structure_remove_field() or
 * gst_structure_remove_fields().
 * 
 * Strings in structures must be ASCII or UTF-8 encoded. Other encodings are not
 * allowed. Strings may be %NULL however.
 * 
 * ## The serialization format
 * 
 * GstStructure serialization format serialize the GstStructure name,
 * keys/GType/values in a comma separated list with the structure name as first
 * field without value followed by separated key/value pairs in the form
 * `key=value`, for example:
 * 
 * ```
 * a-structure, key=value
 * ````
 * 
 * The values type will be inferred if not explicitly specified with the
 * `(GTypeName)value` syntax, for example the following struct will have one
 * field called 'is-string' which has the string 'true' as a value:
 * 
 * ```
 * a-struct, field-is-string=(string)true, field-is-boolean=true
 * ```
 * 
 * *Note*: without specifying `(string), `field-is-string` type would have been
 * inferred as boolean.
 * 
 * *Note*: we specified `(string)` as a type even if `gchararray` is the actual
 * GType name as for convenience some well known types have been aliased or
 * abbreviated.
 * 
 * To avoid specifying the type, you can give some hints to the "type system".
 * For example to specify a value as a double, you should add a decimal (ie. `1`
 * is an `int` while `1.0` is a `double`).
 * 
 * *Note*: when a structure is serialized with #gst_structure_to_string, all
 * values are explicitly typed.
 * 
 * Some types have special delimiters:
 * 
 * - [GstValueArray](GST_TYPE_ARRAY) are inside curly brackets (`{` and `}`).
 *   For example `a-structure, array={1, 2, 3}`
 * - Ranges are inside brackets (`[` and `]`). For example `a-structure,
 *   range=[1, 6, 2]` 1 being the min value, 6 the maximum and 2 the step. To
 *   specify a #GST_TYPE_INT64_RANGE you need to explicitly specify it like:
 *   `a-structure, a-int64-range=(gint64) [1, 5]`
 * - [GstValueList](GST_TYPE_LIST) are inside "less and greater than" (`<` and
 *   `>`). For example `a-structure, list=<1, 2, 3>
 * 
 * Structures are delimited either by a null character `\0` or a semicolon `;`
 * the latter allowing to store multiple structures in the same string (see
 * #GstCaps).
 * 
 * Quotes are used as "default" delimiters and can be used around any types that
 * don't use other delimiters (for example `a-struct, i=(int)"1"`). They are use
 * to allow adding spaces or special characters (such as delimiters,
 * semicolumns, etc..) inside strings and you can use backslashes `\` to escape
 * characters inside them, for example:
 * 
 * ```
 * a-struct, special="\"{[(;)]}\" can be used inside quotes"
 * ```
 * 
 * They also allow for nested structure, such as:
 * 
 * ```
 * a-struct, nested=(GstStructure)"nested-struct, nested=true"
 * ```
 * 
 * Since 1.20, nested structures and caps can be specified using brackets (`[`
 * and `]`), for example:
 * 
 * ```
 * a-struct, nested=[nested-struct, nested=true]
 * ```
 * 
 * > *note*: gst_structure_to_string() won't use that syntax for backward
 * > compatibility reason, gst_structure_serialize() has been added for
 * > that purpose.
 * @record 
 */
class Structure {

    // Own properties of Gst-1.0.Gst.Structure

    static name: string

    // Constructors of Gst-1.0.Gst.Structure

    /**
     * Creates a #GstStructure from a string representation.
     * If end is not %NULL, a pointer to the place inside the given string
     * where parsing ended will be returned.
     * 
     * Free-function: gst_structure_free
     * @constructor 
     * @param string a string representation of a #GstStructure.
     */
    static from_string(string: string): Structure
    /**
     * Creates a new, empty #GstStructure with the given `name`.
     * 
     * See gst_structure_set_name() for constraints on the `name` parameter.
     * 
     * Free-function: gst_structure_free
     * @constructor 
     * @param name name of new structure
     */
    static new_empty(name: string): Structure
    /**
     * Creates a #GstStructure from a string representation.
     * If end is not %NULL, a pointer to the place inside the given string
     * where parsing ended will be returned.
     * 
     * The current implementation of serialization will lead to unexpected results
     * when there are nested #GstCaps / #GstStructure deeper than one level unless
     * the gst_structure_serialize() function is used (without
     * #GST_SERIALIZE_FLAG_BACKWARD_COMPAT)
     * 
     * Free-function: gst_structure_free
     * @constructor 
     * @param string a string representation of a #GstStructure
     */
    static new_from_string(string: string): Structure
    /**
     * Creates a new, empty #GstStructure with the given name as a GQuark.
     * 
     * Free-function: gst_structure_free
     * @constructor 
     * @param quark name of new structure
     */
    static new_id_empty(quark: GLib.Quark): Structure
    /**
     * Atomically modifies a pointer to point to a new structure.
     * The #GstStructure `oldstr_ptr` is pointing to is freed and
     * `newstr` is taken ownership over.
     * 
     * Either `newstr` and the value pointed to by `oldstr_ptr` may be %NULL.
     * 
     * It is a programming error if both `newstr` and the value pointed to by
     * `oldstr_ptr` refer to the same, non-%NULL structure.
     * @param oldstr_ptr pointer to a place of     a #GstStructure to take
     * @param newstr a new #GstStructure
     */
    static take(oldstr_ptr: Structure | null, newstr: Structure | null): [ /* returnType */ boolean, /* oldstr_ptr */ Structure | null ]
}

interface SystemClockClass {

    // Own fields of Gst-1.0.Gst.SystemClockClass

    parent_class: ClockClass
}

abstract class SystemClockClass {

    // Own properties of Gst-1.0.Gst.SystemClockClass

    static name: string
}

interface SystemClockPrivate {
}

class SystemClockPrivate {

    // Own properties of Gst-1.0.Gst.SystemClockPrivate

    static name: string
}

interface TagList {

    // Own fields of Gst-1.0.Gst.TagList

    /**
     * the parent type
     * @field 
     */
    mini_object: MiniObject

    // Owm methods of Gst-1.0.Gst.TagList

    /**
     * Sets the GValue for a given tag using the specified mode.
     * @param mode the mode to use
     * @param tag tag
     * @param value GValue for this tag
     */
    add_value(mode: TagMergeMode, tag: string, value: any): void
    /**
     * Creates a new #GstTagList as a copy of the old `taglist`. The new taglist
     * will have a refcount of 1, owned by the caller, and will be writable as
     * a result.
     * 
     * Note that this function is the semantic equivalent of a gst_tag_list_ref()
     * followed by a gst_tag_list_make_writable(). If you only want to hold on to a
     * reference to the data, you should use gst_tag_list_ref().
     * 
     * When you are finished with the taglist, call gst_tag_list_unref() on it.
     */
    copy(): TagList
    /**
     * Calls the given function for each tag inside the tag list. Note that if there
     * is no tag, the function won't be called at all.
     * @param func function to be called for each tag
     */
    foreach(func: TagForeachFunc): void
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_boolean(tag: string): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_boolean_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Copies the first date for the given tag in the taglist into the variable
     * pointed to by `value`. Free the date with g_date_free() when it is no longer
     * needed.
     * 
     * Free-function: g_date_free
     * @param tag tag to read out
     */
    get_date(tag: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Gets the date that is at the given index for the given tag in the given
     * list and copies it into the variable pointed to by `value`. Free the date
     * with g_date_free() when it is no longer needed.
     * 
     * Free-function: g_date_free
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_date_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Copies the first datetime for the given tag in the taglist into the variable
     * pointed to by `value`. Unref the date with gst_date_time_unref() when
     * it is no longer needed.
     * 
     * Free-function: gst_date_time_unref
     * @param tag tag to read out
     */
    get_date_time(tag: string): [ /* returnType */ boolean, /* value */ DateTime ]
    /**
     * Gets the datetime that is at the given index for the given tag in the given
     * list and copies it into the variable pointed to by `value`. Unref the datetime
     * with gst_date_time_unref() when it is no longer needed.
     * 
     * Free-function: gst_date_time_unref
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_date_time_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ DateTime ]
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_double(tag: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_double_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_float(tag: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_float_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_int(tag: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_int64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_int64_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_int_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_pointer(tag: string): [ /* returnType */ boolean, /* value */ object | null ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_pointer_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ object | null ]
    /**
     * Copies the first sample for the given tag in the taglist into the variable
     * pointed to by `sample`. Free the sample with gst_sample_unref() when it is
     * no longer needed. You can retrieve the buffer from the sample using
     * gst_sample_get_buffer() and the associated caps (if any) with
     * gst_sample_get_caps().
     * 
     * Free-function: gst_sample_unref
     * @param tag tag to read out
     */
    get_sample(tag: string): [ /* returnType */ boolean, /* sample */ Sample ]
    /**
     * Gets the sample that is at the given index for the given tag in the given
     * list and copies it into the variable pointed to by `sample`. Free the sample
     * with gst_sample_unref() when it is no longer needed. You can retrieve the
     * buffer from the sample using gst_sample_get_buffer() and the associated
     * caps (if any) with gst_sample_get_caps().
     * 
     * Free-function: gst_sample_unref
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_sample_index(tag: string, index: number): [ /* returnType */ boolean, /* sample */ Sample ]
    /**
     * Gets the scope of `list`.
     */
    get_scope(): TagScope
    /**
     * Copies the contents for the given tag into the value, possibly merging
     * multiple values into one if multiple values are associated with the tag.
     * 
     * Use gst_tag_list_get_string_index (list, tag, 0, value) if you want
     * to retrieve the first string associated with this tag unmodified.
     * 
     * The resulting string in `value` will be in UTF-8 encoding and should be
     * freed by the caller using g_free when no longer needed. The
     * returned string is also guaranteed to be non-%NULL and non-empty.
     * 
     * Free-function: g_free
     * @param tag tag to read out
     */
    get_string(tag: string): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * 
     * The resulting string in `value` will be in UTF-8 encoding and should be
     * freed by the caller using g_free when no longer needed. The
     * returned string is also guaranteed to be non-%NULL and non-empty.
     * 
     * Free-function: g_free
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_string_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Checks how many value are stored in this tag list for the given tag.
     * @param tag the tag to query
     */
    get_tag_size(tag: string): number
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_uint(tag: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Copies the contents for the given tag into the value, merging multiple values
     * into one if multiple values are associated with the tag.
     * @param tag tag to read out
     */
    get_uint64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_uint64_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_uint_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Gets the value that is at the given index for the given tag in the given
     * list.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    get_value_index(tag: string, index: number): any | null
    /**
     * Inserts the tags of the `from` list into the first list using the given mode.
     * @param from list to merge from
     * @param mode the mode to use
     */
    insert(from: TagList, mode: TagMergeMode): void
    /**
     * Checks if the given taglist is empty.
     */
    is_empty(): boolean
    /**
     * Checks if the two given taglists are equal.
     * @param list2 a #GstTagList.
     */
    is_equal(list2: TagList): boolean
    /**
     * Merges the two given lists into a new list. If one of the lists is %NULL, a
     * copy of the other is returned. If both lists are %NULL, %NULL is returned.
     * 
     * Free-function: gst_tag_list_unref
     * @param list2 second list to merge
     * @param mode the mode to use
     */
    merge(list2: TagList | null, mode: TagMergeMode): TagList | null
    /**
     * Get the number of tags in `list`.
     */
    n_tags(): number
    /**
     * Get the name of the tag in `list` at `index`.
     * @param index the index
     */
    nth_tag_name(index: number): string
    /**
     * Peeks at the value that is at the given index for the given tag in the given
     * list.
     * 
     * The resulting string in `value` will be in UTF-8 encoding and doesn't need
     * to be freed by the caller. The returned string is also guaranteed to
     * be non-%NULL and non-empty.
     * @param tag tag to read out
     * @param index number of entry to read out
     */
    peek_string_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Removes the given tag from the taglist.
     * @param tag tag to remove
     */
    remove_tag(tag: string): void
    /**
     * Sets the scope of `list` to `scope`. By default the scope
     * of a taglist is stream scope.
     * @param scope new scope for `list`
     */
    set_scope(scope: TagScope): void
    /**
     * Serializes a tag list to a string.
     */
    to_string(): string | null
}

/**
 * List of tags and values used to describe media metadata.
 * 
 * Strings in structures must be ASCII or UTF-8 encoded. Other encodings are
 * not allowed. Strings must not be empty or %NULL.
 * @record 
 */
class TagList {

    // Own properties of Gst-1.0.Gst.TagList

    static name: string

    // Constructors of Gst-1.0.Gst.TagList

    /**
     * Creates a new empty GstTagList.
     * 
     * Free-function: gst_tag_list_unref
     * @constructor 
     */
    static new_empty(): TagList
    /**
     * Deserializes a tag list.
     * @constructor 
     * @param str a string created with gst_tag_list_to_string()
     */
    static new_from_string(str: string): TagList
    /**
     * Copies the contents for the given tag into the value,
     * merging multiple values into one if multiple values are associated
     * with the tag.
     * You must g_value_unset() the value after use.
     * @param list list to get the tag from
     * @param tag tag to read out
     */
    static copy_value(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
    /**
     * Modifies a pointer to a #GstTagList to point to a different #GstTagList. The
     * modification is done atomically (so this is useful for ensuring thread
     * safety in some cases), and the reference counts are updated appropriately
     * (the old tag list is unreffed, the new is reffed).
     * 
     * Either `new_taglist` or the #GstTagList pointed to by `old_taglist` may be
     * %NULL.
     * @param old_taglist pointer to a pointer to a     #GstTagList to be replaced.
     * @param new_taglist pointer to a #GstTagList that     will replace the tag list pointed to by `old_taglist`.
     */
    static replace(old_taglist: TagList | null, new_taglist: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList | null ]
    /**
     * Modifies a pointer to a #GstTagList to point to a different #GstTagList.
     * This function is similar to gst_tag_list_replace() except that it takes
     * ownership of `new_taglist`.
     * @param old_taglist pointer to a pointer to a #GstTagList     to be replaced.
     * @param new_taglist pointer to a #GstTagList that     will replace the taglist pointed to by `old_taglist`.
     */
    static take(old_taglist: TagList, new_taglist: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList ]
}

interface TagSetterInterface {

    // Own fields of Gst-1.0.Gst.TagSetterInterface

    /**
     * parent interface type.
     * @field 
     */
    g_iface: GObject.TypeInterface
}

/**
 * #GstTagSetterInterface interface.
 * @record 
 */
abstract class TagSetterInterface {

    // Own properties of Gst-1.0.Gst.TagSetterInterface

    static name: string
}

interface TaskClass {

    // Own fields of Gst-1.0.Gst.TaskClass

    parent_class: ObjectClass
}

abstract class TaskClass {

    // Own properties of Gst-1.0.Gst.TaskClass

    static name: string
}

interface TaskPoolClass {

    // Own fields of Gst-1.0.Gst.TaskPoolClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: ObjectClass
    prepare: (pool: TaskPool) => void
    cleanup: (pool: TaskPool) => void
    push: (pool: TaskPool, func: TaskPoolFunction) => object | null
    join: (pool: TaskPool, id: object | null) => void
    dispose_handle: (pool: TaskPool, id: object | null) => void
}

/**
 * The #GstTaskPoolClass object.
 * @record 
 */
abstract class TaskPoolClass {

    // Own properties of Gst-1.0.Gst.TaskPoolClass

    static name: string
}

interface TaskPrivate {
}

class TaskPrivate {

    // Own properties of Gst-1.0.Gst.TaskPrivate

    static name: string
}

interface TimedValue {

    // Own fields of Gst-1.0.Gst.TimedValue

    /**
     * timestamp of the value change
     * @field 
     */
    timestamp: ClockTime
    /**
     * the corresponding value
     * @field 
     */
    value: number
}

/**
 * Structure for storing a timestamp and a value.
 * @record 
 */
class TimedValue {

    // Own properties of Gst-1.0.Gst.TimedValue

    static name: string
}

interface Toc {

    // Owm methods of Gst-1.0.Gst.Toc

    /**
     * Appends the #GstTocEntry `entry` to `toc`.
     * @param entry A #GstTocEntry
     */
    append_entry(entry: TocEntry): void
    dump(): void
    /**
     * Find #GstTocEntry with given `uid` in the `toc`.
     * @param uid UID to find #GstTocEntry with.
     */
    find_entry(uid: string): TocEntry | null
    /**
     * Gets the list of #GstTocEntry of `toc`.
     */
    get_entries(): TocEntry[]
    get_scope(): TocScope
    /**
     * Gets the tags for `toc`.
     */
    get_tags(): TagList
    /**
     * Merge `tags` into the existing tags of `toc` using `mode`.
     * @param tags A #GstTagList or %NULL
     * @param mode A #GstTagMergeMode
     */
    merge_tags(tags: TagList | null, mode: TagMergeMode): void
    /**
     * Set a #GstTagList with tags for the complete `toc`.
     * @param tags A #GstTagList or %NULL
     */
    set_tags(tags: TagList | null): void
}

/**
 * #GstToc functions are used to create/free #GstToc and #GstTocEntry structures.
 * Also they are used to convert #GstToc into #GstStructure and vice versa.
 * 
 * #GstToc lets you to inform other elements in pipeline or application that playing
 * source has some kind of table of contents (TOC). These may be chapters, editions,
 * angles or other types. For example: DVD chapters, Matroska chapters or cue sheet
 * TOC. Such TOC will be useful for applications to display instead of just a
 * playlist.
 * 
 * Using TOC is very easy. Firstly, create #GstToc structure which represents root
 * contents of the source. You can also attach TOC-specific tags to it. Then fill
 * it with #GstTocEntry entries by appending them to the #GstToc using
 * gst_toc_append_entry(), and appending subentries to a #GstTocEntry using
 * gst_toc_entry_append_sub_entry().
 * 
 * Note that root level of the TOC can contain only either editions or chapters. You
 * should not mix them together at the same level. Otherwise you will get serialization
 * /deserialization errors. Make sure that no one of the entries has negative start and
 *  stop values.
 * 
 * Use gst_event_new_toc() to create a new TOC #GstEvent, and gst_event_parse_toc() to
 * parse received TOC event. Use gst_event_new_toc_select() to create a new TOC select #GstEvent,
 * and gst_event_parse_toc_select() to parse received TOC select event. The same rule for
 * the #GstMessage: gst_message_new_toc() to create new TOC #GstMessage, and
 * gst_message_parse_toc() to parse received TOC message.
 * 
 * TOCs can have global scope or current scope. Global scope TOCs contain
 * all entries that can possibly be selected using a toc select event, and
 * are what an application is usually interested in. TOCs with current scope
 * only contain the parts of the TOC relevant to the currently selected/playing
 * stream; the current scope TOC is used by downstream elements such as muxers
 * to write correct TOC entries when transcoding files, for example. When
 * playing a DVD, the global TOC would contain a hierarchy of all titles,
 * chapters and angles, for example, while the current TOC would only contain
 * the chapters for the currently playing title if playback of a specific
 * title was requested.
 * 
 * Applications and plugins should not rely on TOCs having a certain kind of
 * structure, but should allow for different alternatives. For example, a
 * simple CUE sheet embedded in a file may be presented as a flat list of
 * track entries, or could have a top-level edition node (or some other
 * alternative type entry) with track entries underneath that node; or even
 * multiple top-level edition nodes (or some other alternative type entries)
 * each with track entries underneath, in case the source file has extracted
 * a track listing from different sources).
 * @record 
 */
class Toc {

    // Own properties of Gst-1.0.Gst.Toc

    static name: string

    // Constructors of Gst-1.0.Gst.Toc

    /**
     * Create a new #GstToc structure.
     * @constructor 
     * @param scope scope of this TOC
     */
    constructor(scope: TocScope) 
    /**
     * Create a new #GstToc structure.
     * @constructor 
     * @param scope scope of this TOC
     */
    static new(scope: TocScope): Toc
}

interface TocEntry {

    // Owm methods of Gst-1.0.Gst.TocEntry

    /**
     * Appends the #GstTocEntry `subentry` to `entry`.
     * @param subentry A #GstTocEntry
     */
    append_sub_entry(subentry: TocEntry): void
    get_entry_type(): TocEntryType
    /**
     * Get `loop_type` and `repeat_count` values from the `entry` and write them into
     * appropriate storages. Loops are e.g. used by sampled instruments. GStreamer
     * is not automatically applying the loop. The application can process this
     * meta data and use it e.g. to send a seek-event to loop a section.
     */
    get_loop(): [ /* returnType */ boolean, /* loop_type */ TocLoopType, /* repeat_count */ number ]
    /**
     * Gets the parent #GstTocEntry of `entry`.
     */
    get_parent(): TocEntry | null
    /**
     * Get `start` and `stop` values from the `entry` and write them into appropriate
     * storages.
     */
    get_start_stop_times(): [ /* returnType */ boolean, /* start */ number, /* stop */ number ]
    /**
     * Gets the sub-entries of `entry`.
     */
    get_sub_entries(): TocEntry[]
    /**
     * Gets the tags for `entry`.
     */
    get_tags(): TagList
    /**
     * Gets the parent #GstToc of `entry`.
     */
    get_toc(): Toc
    /**
     * Gets the UID of `entry`.
     */
    get_uid(): string
    is_alternative(): boolean
    is_sequence(): boolean
    /**
     * Merge `tags` into the existing tags of `entry` using `mode`.
     * @param tags A #GstTagList or %NULL
     * @param mode A #GstTagMergeMode
     */
    merge_tags(tags: TagList | null, mode: TagMergeMode): void
    /**
     * Set `loop_type` and `repeat_count` values for the `entry`.
     * @param loop_type loop_type value to set.
     * @param repeat_count repeat_count value to set.
     */
    set_loop(loop_type: TocLoopType, repeat_count: number): void
    /**
     * Set `start` and `stop` values for the `entry`.
     * @param start start value to set.
     * @param stop stop value to set.
     */
    set_start_stop_times(start: number, stop: number): void
    /**
     * Set a #GstTagList with tags for the complete `entry`.
     * @param tags A #GstTagList or %NULL
     */
    set_tags(tags: TagList | null): void
}

class TocEntry {

    // Own properties of Gst-1.0.Gst.TocEntry

    static name: string

    // Constructors of Gst-1.0.Gst.TocEntry

    /**
     * Create new #GstTocEntry structure.
     * @constructor 
     * @param type entry type.
     * @param uid unique ID (UID) in the whole TOC.
     */
    constructor(type: TocEntryType, uid: string) 
    /**
     * Create new #GstTocEntry structure.
     * @constructor 
     * @param type entry type.
     * @param uid unique ID (UID) in the whole TOC.
     */
    static new(type: TocEntryType, uid: string): TocEntry
}

interface TocSetterInterface {

    // Own fields of Gst-1.0.Gst.TocSetterInterface

    /**
     * parent interface type.
     * @field 
     */
    g_iface: GObject.TypeInterface
}

/**
 * #GstTocSetterInterface interface.
 * @record 
 */
abstract class TocSetterInterface {

    // Own properties of Gst-1.0.Gst.TocSetterInterface

    static name: string
}

interface TracerClass {

    // Own fields of Gst-1.0.Gst.TracerClass

    parent_class: ObjectClass
}

abstract class TracerClass {

    // Own properties of Gst-1.0.Gst.TracerClass

    static name: string
}

interface TracerFactoryClass {
}

abstract class TracerFactoryClass {

    // Own properties of Gst-1.0.Gst.TracerFactoryClass

    static name: string
}

interface TracerPrivate {
}

class TracerPrivate {

    // Own properties of Gst-1.0.Gst.TracerPrivate

    static name: string
}

interface TracerRecordClass {
}

abstract class TracerRecordClass {

    // Own properties of Gst-1.0.Gst.TracerRecordClass

    static name: string
}

interface TypeFind {

    // Own fields of Gst-1.0.Gst.TypeFind

    peek: (data: object, offset: number, size: number) => number
    suggest: (data: object, probability: number, caps: Caps) => void
    /**
     * The data used by the caller of the typefinding function.
     * @field 
     */
    data: object
    get_length: (data: object) => number

    // Owm methods of Gst-1.0.Gst.TypeFind

    /**
     * If a #GstTypeFindFunction calls this function it suggests caps of the
     * given `media_type` with the given `probability`.
     * 
     * This function is similar to gst_type_find_suggest_simple(), but uses
     * a #GstCaps with no fields.
     * @param probability The probability in percent that the suggestion is right
     * @param media_type the media type of the suggested caps
     */
    suggest_empty_simple(probability: number, media_type: string): void
}

/**
 * The following functions allow you to detect the media type of an unknown
 * stream.
 * @record 
 */
class TypeFind {

    // Own properties of Gst-1.0.Gst.TypeFind

    static name: string

    // Constructors of Gst-1.0.Gst.TypeFind

    /**
     * Registers a new typefind function to be used for typefinding. After
     * registering this function will be available for typefinding.
     * This function is typically called during an element's plugin initialization.
     * @param plugin A #GstPlugin, or %NULL for a static typefind function
     * @param name The name for registering
     * @param rank The rank (or importance) of this typefind function
     * @param func The #GstTypeFindFunction to use
     * @param extensions Optional comma-separated list of extensions     that could belong to this type
     * @param possible_caps Optionally the caps that could be returned when typefinding                 succeeds
     */
    static register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps | null): boolean
}

interface TypeFindFactoryClass {
}

abstract class TypeFindFactoryClass {

    // Own properties of Gst-1.0.Gst.TypeFindFactoryClass

    static name: string
}

interface URIHandlerInterface {

    // Own fields of Gst-1.0.Gst.URIHandlerInterface

    /**
     * The parent interface type
     * @field 
     */
    parent: GObject.TypeInterface
    get_type: (type: GObject.GType) => URIType
    get_protocols: (type: GObject.GType) => string[]
    get_uri: (handler: URIHandler) => string | null
    set_uri: (handler: URIHandler, uri: string) => boolean
}

/**
 * Any #GstElement using this interface should implement these methods.
 * @record 
 */
abstract class URIHandlerInterface {

    // Own properties of Gst-1.0.Gst.URIHandlerInterface

    static name: string
}

interface Uri {

    // Owm methods of Gst-1.0.Gst.Uri

    /**
     * Append a path onto the end of the path in the URI. The path is not
     * normalized, call #gst_uri_normalize() to normalize the path.
     * @param relative_path Relative path to append to the end of the current path.
     */
    append_path(relative_path: string): boolean
    /**
     * Append a single path segment onto the end of the URI path.
     * @param path_segment The path segment string to append to the URI path.
     */
    append_path_segment(path_segment: string): boolean
    /**
     * Create a new #GstUri object with the same data as this #GstUri object.
     * If `uri` is %NULL then returns %NULL.
     */
    copy(): Uri
    /**
     * Compares two #GstUri objects to see if they represent the same normalized
     * URI.
     * @param second Second #GstUri to compare.
     */
    equal(second: Uri): boolean
    /**
     * Like gst_uri_from_string() but also joins with a base URI.
     * @param uri The URI string to parse.
     */
    from_string_with_base(uri: string): Uri
    /**
     * Get the fragment name from the URI or %NULL if it doesn't exist.
     * If `uri` is %NULL then returns %NULL.
     */
    get_fragment(): string | null
    /**
     * Get the host name from the URI or %NULL if it doesn't exist.
     * If `uri` is %NULL then returns %NULL.
     */
    get_host(): string | null
    /**
     * Get the media fragment table from the URI, as defined by "Media Fragments URI 1.0".
     * Hash table returned by this API is a list of "key-value" pairs, and the each
     * pair is generated by splitting "URI fragment" per "&" sub-delims, then "key"
     * and "value" are split by "=" sub-delims. The "key" returned by this API may
     * be undefined keyword by standard.
     * A value may be %NULL to indicate that the key should appear in the fragment
     * string in the URI, but does not have a value. Free the returned #GHashTable
     * with #g_hash_table_unref() when it is no longer required.
     * Modifying this hash table does not affect the fragment in the URI.
     * 
     * See more about Media Fragments URI 1.0 (W3C) at https://www.w3.org/TR/media-frags/
     */
    get_media_fragment_table(): GLib.HashTable | null
    /**
     * Extract the path string from the URI object.
     */
    get_path(): string | null
    /**
     * Get a list of path segments from the URI.
     */
    get_path_segments(): string[]
    /**
     * Extract the path string from the URI object as a percent encoded URI path.
     */
    get_path_string(): string | null
    /**
     * Get the port number from the URI or %GST_URI_NO_PORT if it doesn't exist.
     * If `uri` is %NULL then returns %GST_URI_NO_PORT.
     */
    get_port(): number
    /**
     * Get a list of the query keys from the URI.
     */
    get_query_keys(): string[]
    /**
     * Get a percent encoded URI query string from the `uri`.
     */
    get_query_string(): string | null
    /**
     * Get the query table from the URI. Keys and values in the table are freed
     * with g_free when they are deleted. A value may be %NULL to indicate that
     * the key should appear in the query string in the URI, but does not have a
     * value. Free the returned #GHashTable with #g_hash_table_unref() when it is
     * no longer required. Modifying this hash table will modify the query in the
     * URI.
     */
    get_query_table(): GLib.HashTable | null
    /**
     * Get the value associated with the `query_key` key. Will return %NULL if the
     * key has no value or if the key does not exist in the URI query table. Because
     * %NULL is returned for both missing keys and keys with no value, you should
     * use gst_uri_query_has_key() to determine if a key is present in the URI
     * query.
     * @param query_key The key to lookup.
     */
    get_query_value(query_key: string): string | null
    /**
     * Get the scheme name from the URI or %NULL if it doesn't exist.
     * If `uri` is %NULL then returns %NULL.
     */
    get_scheme(): string | null
    /**
     * Get the userinfo (usually in the form "username:password") from the URI
     * or %NULL if it doesn't exist. If `uri` is %NULL then returns %NULL.
     */
    get_userinfo(): string | null
    /**
     * Tests the `uri` to see if it is normalized. A %NULL `uri` is considered to be
     * normalized.
     */
    is_normalized(): boolean
    /**
     * Check if it is safe to write to this #GstUri.
     * 
     * Check if the refcount of `uri` is exactly 1, meaning that no other
     * reference exists to the #GstUri and that the #GstUri is therefore writable.
     * 
     * Modification of a #GstUri should only be done after verifying that it is
     * writable.
     */
    is_writable(): boolean
    /**
     * Join a reference URI onto a base URI using the method from RFC 3986.
     * If either URI is %NULL then the other URI will be returned with the ref count
     * increased.
     * @param ref_uri The reference URI to join onto the                                       base URI.
     */
    join(ref_uri: Uri | null): Uri | null
    /**
     * Make the #GstUri writable.
     * 
     * Checks if `uri` is writable, and if so the original object is returned. If
     * not, then a writable copy is made and returned. This gives away the
     * reference to `uri` and returns a reference to the new #GstUri.
     * If `uri` is %NULL then %NULL is returned.
     */
    make_writable(): Uri
    /**
     * Like gst_uri_new(), but joins the new URI onto a base URI.
     * @param scheme The scheme for the new URI.
     * @param userinfo The user-info for the new URI.
     * @param host The host name for the new URI.
     * @param port The port number for the new URI or %GST_URI_NO_PORT.
     * @param path The path for the new URI with '/' separating path                      elements.
     * @param query The query string for the new URI with '&' separating                       query elements. Elements containing '&' characters                       should encode them as "&percnt;26".
     * @param fragment The fragment name for the new URI.
     */
    new_with_base(scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null): Uri
    /**
     * Normalization will remove extra path segments ("." and "..") from the URI. It
     * will also convert the scheme and host name to lower case and any
     * percent-encoded values to uppercase.
     * 
     * The #GstUri object must be writable. Check with gst_uri_is_writable() or use
     * gst_uri_make_writable() first.
     */
    normalize(): boolean
    /**
     * Check if there is a query table entry for the `query_key` key.
     * @param query_key The key to lookup.
     */
    query_has_key(query_key: string): boolean
    /**
     * Add a reference to this #GstUri object. See gst_mini_object_ref() for further
     * info.
     */
    ref(): Uri
    /**
     * Remove an entry from the query table by key.
     * @param query_key The key to remove.
     */
    remove_query_key(query_key: string): boolean
    /**
     * Sets the fragment string in the URI. Use a value of %NULL in `fragment` to
     * unset the fragment string.
     * @param fragment The fragment string to set.
     */
    set_fragment(fragment: string | null): boolean
    /**
     * Set or unset the host for the URI.
     * @param host The new host string to set or %NULL to unset.
     */
    set_host(host: string): boolean
    /**
     * Sets or unsets the path in the URI.
     * @param path The new path to set with path segments separated by '/', or use %NULL        to unset the path.
     */
    set_path(path: string): boolean
    /**
     * Replace the path segments list in the URI.
     * @param path_segments The new                 path list to set.
     */
    set_path_segments(path_segments: string[] | null): boolean
    /**
     * Sets or unsets the path in the URI.
     * @param path The new percent encoded path to set with path segments separated by '/', or use %NULL to unset the path.
     */
    set_path_string(path: string): boolean
    /**
     * Set or unset the port number for the URI.
     * @param port The new port number to set or %GST_URI_NO_PORT to unset.
     */
    set_port(port: number): boolean
    /**
     * Sets or unsets the query table in the URI.
     * @param query The new percent encoded query string to use to populate the query        table, or use %NULL to unset the query table.
     */
    set_query_string(query: string): boolean
    /**
     * Set the query table to use in the URI. The old table is unreferenced and a
     * reference to the new one is used instead. A value if %NULL for `query_table`
     * will remove the query string from the URI.
     * @param query_table The new               query table to use.
     */
    set_query_table(query_table: GLib.HashTable | null): boolean
    /**
     * This inserts or replaces a key in the query table. A `query_value` of %NULL
     * indicates that the key has no associated value, but will still be present in
     * the query string.
     * @param query_key The key for the query entry.
     * @param query_value The value for the key.
     */
    set_query_value(query_key: string, query_value: string | null): boolean
    /**
     * Set or unset the scheme for the URI.
     * @param scheme The new scheme to set or %NULL to unset the scheme.
     */
    set_scheme(scheme: string): boolean
    /**
     * Set or unset the user information for the URI.
     * @param userinfo The new user-information string to set or %NULL to unset.
     */
    set_userinfo(userinfo: string): boolean
    /**
     * Convert the URI to a string.
     * 
     * Returns the URI as held in this object as a #gchar* nul-terminated string.
     * The caller should g_free() the string once they are finished with it.
     * The string is put together as described in RFC 3986.
     */
    to_string(): string
    /**
     * Decrement the reference count to this #GstUri object.
     * 
     * If the reference count drops to 0 then finalize this object.
     * 
     * See gst_mini_object_unref() for further info.
     */
    unref(): void
}

/**
 * A #GstUri object can be used to parse and split a URI string into its
 * constituent parts. Two #GstUri objects can be joined to make a new #GstUri
 * using the algorithm described in RFC3986.
 * @record 
 */
class Uri {

    // Own properties of Gst-1.0.Gst.Uri

    static name: string

    // Constructors of Gst-1.0.Gst.Uri

    /**
     * Creates a new #GstUri object with the given URI parts. The path and query
     * strings will be broken down into their elements. All strings should not be
     * escaped except where indicated.
     * @constructor 
     * @param scheme The scheme for the new URI.
     * @param userinfo The user-info for the new URI.
     * @param host The host name for the new URI.
     * @param port The port number for the new URI or %GST_URI_NO_PORT.
     * @param path The path for the new URI with '/' separating path                      elements.
     * @param query The query string for the new URI with '&' separating                       query elements. Elements containing '&' characters                       should encode them as "&percnt;26".
     * @param fragment The fragment name for the new URI.
     */
    constructor(scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null) 
    /**
     * Creates a new #GstUri object with the given URI parts. The path and query
     * strings will be broken down into their elements. All strings should not be
     * escaped except where indicated.
     * @constructor 
     * @param scheme The scheme for the new URI.
     * @param userinfo The user-info for the new URI.
     * @param host The host name for the new URI.
     * @param port The port number for the new URI or %GST_URI_NO_PORT.
     * @param path The path for the new URI with '/' separating path                      elements.
     * @param query The query string for the new URI with '&' separating                       query elements. Elements containing '&' characters                       should encode them as "&percnt;26".
     * @param fragment The fragment name for the new URI.
     */
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string | null, query: string | null, fragment: string | null): Uri
    /**
     * Constructs a URI for a given valid protocol and location.
     * 
     * Free-function: g_free
     * @param protocol Protocol for URI
     * @param location Location for URI
     */
    static construct(protocol: string, location: string): string
    /**
     * Parses a URI string into a new #GstUri object. Will return NULL if the URI
     * cannot be parsed.
     * @param uri The URI string to parse.
     */
    static from_string(uri: string): Uri | null
    /**
     * Parses a URI string into a new #GstUri object. Will return NULL if the URI
     * cannot be parsed. This is identical to gst_uri_from_string() except that
     * the userinfo and fragment components of the URI will not be unescaped while
     * parsing.
     * 
     * Use this when you need to extract a username and password from the userinfo
     * such as https://user:password`example`.com since either may contain
     * a URI-escaped ':' character. gst_uri_from_string() will unescape the entire
     * userinfo component, which will make it impossible to know which ':'
     * delineates the username and password.
     * 
     * The same applies to the fragment component of the URI, such as
     * https://example.com/path#fragment which may contain a URI-escaped '#'.
     * @param uri The URI string to parse.
     */
    static from_string_escaped(uri: string): Uri | null
    /**
     * Extracts the location out of a given valid URI, ie. the protocol and "://"
     * are stripped from the URI, which means that the location returned includes
     * the hostname if one is specified. The returned string must be freed using
     * g_free().
     * 
     * Free-function: g_free
     * @param uri A URI string
     */
    static get_location(uri: string): string | null
    /**
     * Extracts the protocol out of a given valid URI. The returned string must be
     * freed using g_free().
     * @param uri A URI string
     */
    static get_protocol(uri: string): string | null
    /**
     * Checks if the protocol of a given valid URI matches `protocol`.
     * @param uri a URI string
     * @param protocol a protocol string (e.g. "http")
     */
    static has_protocol(uri: string, protocol: string): boolean
    /**
     * Tests if the given string is a valid URI identifier. URIs start with a valid
     * scheme followed by ":" and maybe a string identifying the location.
     * @param uri A URI string
     */
    static is_valid(uri: string): boolean
    /**
     * This is a convenience function to join two URI strings and return the result.
     * The returned string should be g_free()'d after use.
     * @param base_uri The percent-encoded base URI.
     * @param ref_uri The percent-encoded reference URI to join to the `base_uri`.
     */
    static join_strings(base_uri: string, ref_uri: string): string
    /**
     * Checks if an element exists that supports the given URI protocol. Note
     * that a positive return value does not imply that a subsequent call to
     * gst_element_make_from_uri() is guaranteed to work.
     * @param type Whether to check for a source or a sink
     * @param protocol Protocol that should be checked for (e.g. "http" or "smb")
     */
    static protocol_is_supported(type: URIType, protocol: string): boolean
    /**
     * Tests if the given string is a valid protocol identifier. Protocols
     * must consist of alphanumeric characters, '+', '-' and '.' and must
     * start with a alphabetic character. See RFC 3986 Section 3.1.
     * @param protocol A string
     */
    static protocol_is_valid(protocol: string): boolean
}

interface ValueTable {

    // Own fields of Gst-1.0.Gst.ValueTable

    /**
     * a #GType
     * @field 
     */
    type: GObject.GType
    /**
     * a #GstValueCompareFunc
     * @field 
     */
    compare: ValueCompareFunc
    /**
     * a #GstValueSerializeFunc
     * @field 
     */
    serialize: ValueSerializeFunc
    /**
     * a #GstValueDeserializeFunc
     * @field 
     */
    deserialize: ValueDeserializeFunc
    /**
     * a #GstValueDeserializeWithPSpecFunc
     * @field 
     */
    deserialize_with_pspec: ValueDeserializeWithPSpecFunc
}

/**
 * VTable for the #GValue `type`.
 * @record 
 */
class ValueTable {

    // Own properties of Gst-1.0.Gst.ValueTable

    static name: string
}

    type ClockID = object
    type ClockTime = number
    type ClockTimeDiff = number
    type ElementFactoryListType = number
}
export default Gst;