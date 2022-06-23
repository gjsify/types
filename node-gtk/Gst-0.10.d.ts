// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gst-0.10
 */

import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Gst {

/**
 * The status of a GstPad. After activating a pad, which usually happens when the
 * parent element goes from READY to PAUSED, the GstActivateMode defines if the
 * pad operates in push or pull mode.
 */
enum ActivateMode {
    NONE,
    PUSH,
    PULL,
}
/**
 * The result of the #GstBufferListFunc.
 */
enum BufferListItem {
    CONTINUE,
    SKIP_GROUP,
    END,
}
/**
 * The different types of buffering methods.
 */
enum BufferingMode {
    STREAM,
    DOWNLOAD,
    TIMESHIFT,
    LIVE,
}
/**
 * The result values for a GstBusSyncHandler.
 */
enum BusSyncReply {
    DROP,
    PASS,
    ASYNC,
}
/**
 * The type of the clock entry
 */
enum ClockEntryType {
    SINGLE,
    PERIODIC,
}
/**
 * The return value of a clock operation.
 */
enum ClockReturn {
    OK,
    EARLY,
    UNSCHEDULED,
    BUSY,
    BADTIME,
    ERROR,
    UNSUPPORTED,
}
/**
 * The different kind of clocks.
 */
enum ClockType {
    REALTIME,
    MONOTONIC,
}
/**
 * Core errors are errors inside the core GStreamer library.
 */
enum CoreError {
    FAILED,
    TOO_LAZY,
    NOT_IMPLEMENTED,
    STATE_CHANGE,
    PAD,
    THREAD,
    NEGOTIATION,
    EVENT,
    SEEK,
    CAPS,
    TAG,
    MISSING_PLUGIN,
    CLOCK,
    DISABLED,
    NUM_ERRORS,
}
/**
 * These are some terminal style flags you can use when creating your
 * debugging categories to make them stand out in debugging output.
 */
enum DebugColorFlags {
    FG_BLACK,
    FG_RED,
    FG_GREEN,
    FG_YELLOW,
    FG_BLUE,
    FG_MAGENTA,
    FG_CYAN,
    FG_WHITE,
    BG_BLACK,
    BG_RED,
    BG_GREEN,
    BG_YELLOW,
    BG_BLUE,
    BG_MAGENTA,
    BG_CYAN,
    BG_WHITE,
    BOLD,
    UNDERLINE,
}
/**
 * The level defines the importance of a debugging message. The more important a
 * message is, the greater the probability that the debugging system outputs it.
 */
enum DebugLevel {
    NONE,
    ERROR,
    WARNING,
    INFO,
    DEBUG,
    LOG,
    FIXME,
    TRACE,
    MEMDUMP,
    COUNT,
}
/**
 * #GstEventType lists the standard event types that can be sent in a pipeline.
 * The custom event types can be used for private messages between elements
 * that can't be expressed using normal
 * GStreamer buffer passing semantics. Custom events carry an arbitrary
 * #GstStructure.
 * Specific custom events are distinguished by the name of the structure.
 */
enum EventType {
    UNKNOWN,
    FLUSH_START,
    FLUSH_STOP,
    EOS,
    NEWSEGMENT,
    TAG,
    BUFFERSIZE,
    SINK_MESSAGE,
    QOS,
    SEEK,
    NAVIGATION,
    LATENCY,
    STEP,
    CUSTOM_UPSTREAM,
    CUSTOM_DOWNSTREAM,
    CUSTOM_DOWNSTREAM_OOB,
    CUSTOM_BOTH,
    CUSTOM_BOTH_OOB,
}
/**
 * sent yet) (unused/unimplemented).
 * this error should post an error message with more
 * details.
 * this (and higher) to define custom success
 * codes. Since 0.10.7.
 * custom success code to this to avoid compiler
 * warnings). Since 0.10.29.
 * this (and lower) to define custom error codes.
 * Since 0.10.7.
 * custom error code to this to avoid compiler
 * warnings). Since 0.10.29.
 * The result of passing data to a pad.
 * Note that the custom return values should not be exposed outside of the
 * element scope and are available since 0.10.7.
 */
enum FlowReturn {
    CUSTOM_SUCCESS_2,
    CUSTOM_SUCCESS_1,
    CUSTOM_SUCCESS,
    RESEND,
    OK,
    NOT_LINKED,
    WRONG_STATE,
    UNEXPECTED,
    NOT_NEGOTIATED,
    ERROR,
    NOT_SUPPORTED,
    CUSTOM_ERROR,
    CUSTOM_ERROR_1,
    CUSTOM_ERROR_2,
}
/**
 * Standard predefined formats
 */
enum Format {
    UNDEFINED,
    DEFAULT,
    BYTES,
    TIME,
    BUFFERS,
    PERCENT,
}
/**
 * The certainty of a group in the index.
 */
enum IndexCertainty {
    UNKNOWN,
    CERTAIN,
    FUZZY,
}
/**
 * The different types of entries in the index.
 */
enum IndexEntryType {
    ID,
    ASSOCIATION,
    OBJECT,
    FORMAT,
}
/**
 * Specify the method to find an index entry in the index.
 */
enum IndexLookupMethod {
    EXACT,
    BEFORE,
    AFTER,
}
/**
 * The method used to resolve index writers
 */
enum IndexResolverMethod {
    CUSTOM,
    GTYPE,
    PATH,
}
/**
 * The result of a #GstIteratorItemFunction.
 */
enum IteratorItem {
    SKIP,
    PASS,
    END,
}
/**
 * The result of gst_iterator_next().
 */
enum IteratorResult {
    DONE,
    OK,
    RESYNC,
    ERROR,
}
/**
 * Library errors are for errors from the library being used by elements
 * (initializing, finalizing, settings, ...)
 */
enum LibraryError {
    FAILED,
    TOO_LAZY,
    INIT,
    SHUTDOWN,
    SETTINGS,
    ENCODE,
    NUM_ERRORS,
}
/**
 * The direction of a pad.
 */
enum PadDirection {
    UNKNOWN,
    SRC,
    SINK,
}
/**
 * Result values from gst_pad_link and friends.
 */
enum PadLinkReturn {
    OK,
    WRONG_HIERARCHY,
    WAS_LINKED,
    WRONG_DIRECTION,
    NOFORMAT,
    NOSCHED,
    REFUSED,
}
/**
 * Indicates when this pad will become available.
 */
enum PadPresence {
    ALWAYS,
    SOMETIMES,
    REQUEST,
}
/**
 * The different parsing errors that can occur.
 */
enum ParseError {
    SYNTAX,
    NO_SUCH_ELEMENT,
    NO_SUCH_PROPERTY,
    LINK,
    COULD_NOT_SET_PROPERTY,
    EMPTY_BIN,
    EMPTY,
}
/**
 * The plugin loading errors
 */
enum PluginError {
    MODULE,
    DEPENDENCIES,
    NAME_MISMATCH,
}
/**
 * Standard predefined Query types
 */
enum QueryType {
    NONE,
    POSITION,
    DURATION,
    LATENCY,
    JITTER,
    RATE,
    SEEKING,
    SEGMENT,
    CONVERT,
    FORMATS,
    BUFFERING,
    CUSTOM,
    URI,
}
/**
 * Element priority ranks. Defines the order in which the autoplugger (or
 * similar rank-picking mechanisms, such as e.g. gst_element_make_from_uri())
 * will choose this element over an alternative one with the same function.
 * These constants serve as a rough guidance for defining the rank of a
 * #GstPluginFeature. Any value is valid, including values bigger than
 */
enum Rank {
    NONE,
    MARGINAL,
    SECONDARY,
    PRIMARY,
}
/**
 * Resource errors are for any resource used by an element:
 * memory, files, network connections, process space, ...
 * They're typically used by source and sink elements.
 */
enum ResourceError {
    FAILED,
    TOO_LAZY,
    NOT_FOUND,
    BUSY,
    OPEN_READ,
    OPEN_WRITE,
    OPEN_READ_WRITE,
    CLOSE,
    READ,
    WRITE,
    SEEK,
    SYNC,
    SETTINGS,
    NO_SPACE_LEFT,
    NUM_ERRORS,
}
/**
 * The different search modes.
 */
enum SearchMode {
    EXACT,
    BEFORE,
    AFTER,
}
/**
 * The different types of seek events. When constructing a seek event with
 * gst_event_new_seek(), a format, a seek method and optional flags are to
 * be provided. The seek event is then inserted into the graph with
 * gst_pad_send_event() or gst_element_send_event().
 */
enum SeekType {
    NONE,
    CUR,
    SET,
    END,
}
/**
 * The possible states an element can be in. States can be changed using
 * gst_element_set_state() and checked using gst_element_get_state().
 */
enum State {
    VOID_PENDING,
    NULL,
    READY,
    PAUSED,
    PLAYING,
}
/**
 * These are the different state changes an element goes through.
 * %GST_STATE_NULL &rArr; %GST_STATE_PLAYING is called an upwards state change
 * and %GST_STATE_PLAYING &rArr; %GST_STATE_NULL a downwards state change.
 */
enum StateChange {
    NULL_TO_READY,
    READY_TO_PAUSED,
    PAUSED_TO_PLAYING,
    PLAYING_TO_PAUSED,
    PAUSED_TO_READY,
    READY_TO_NULL,
}
/**
 * The possible return values from a state change function. Only
 */
enum StateChangeReturn {
    FAILURE,
    SUCCESS,
    ASYNC,
    NO_PREROLL,
}
/**
 * Stream errors are for anything related to the stream being processed:
 * format errors, media type errors, ...
 * They're typically used by decoders, demuxers, converters, ...
 */
enum StreamError {
    FAILED,
    TOO_LAZY,
    NOT_IMPLEMENTED,
    TYPE_NOT_FOUND,
    WRONG_TYPE,
    CODEC_NOT_FOUND,
    DECODE,
    ENCODE,
    DEMUX,
    MUX,
    FORMAT,
    DECRYPT,
    DECRYPT_NOKEY,
    NUM_ERRORS,
}
/**
 * The type of a %GST_MESSAGE_STREAM_STATUS. The stream status messages inform the
 * application of new streaming threads and their status.
 */
enum StreamStatusType {
    CREATE,
    ENTER,
    LEAVE,
    DESTROY,
    START,
    PAUSE,
    STOP,
}
/**
 * The type of a %GST_MESSAGE_STRUCTURE_CHANGE.
 */
enum StructureChangeType {
    LINK,
    UNLINK,
}
/**
 * Extra tag flags used when registering tags.
 */
enum TagFlag {
    UNDEFINED,
    META,
    ENCODED,
    DECODED,
    COUNT,
}
/**
 * The different tag merging modes are basically replace, overwrite and append,
 * already in the element and (B) the ones that are supplied to the element (
 * e.g. via gst_tag_setter_merge_tags() / gst_tag_setter_add_tags() or a
 * %GST_EVENT_TAG), how are these tags merged?
 * In the table below this is shown for the cases that a tag exists in the list
 * (A) or does not exists (!A) and combinations thereof.
 * <table frame="all" colsep="1" rowsep="1">
 * <title>merge mode</title>
 * <tgroup cols='5' align='left'>
 * <thead>
 * <row>
 * <entry>merge mode</entry>
 * <entry>A + B</entry>
 * <entry>A + !B</entry>
 * <entry>!A + B</entry>
 * <entry>!A + !B</entry>
 * </row>
 * </thead>
 * <tbody>
 * <row>
 * <entry>REPLACE_ALL</entry>
 * <entry>B</entry>
 * <entry>-</entry>
 * <entry>B</entry>
 * <entry>-</entry>
 * </row>
 * <row>
 * <entry>REPLACE</entry>
 * <entry>B</entry>
 * <entry>A</entry>
 * <entry>B</entry>
 * <entry>-</entry>
 * </row>
 * <row>
 * <entry>APPEND</entry>
 * <entry>A, B</entry>
 * <entry>A</entry>
 * <entry>B</entry>
 * <entry>-</entry>
 * </row>
 * <row>
 * <entry>PREPEND</entry>
 * <entry>B, A</entry>
 * <entry>A</entry>
 * <entry>B</entry>
 * <entry>-</entry>
 * </row>
 * <row>
 * <entry>KEEP</entry>
 * <entry>A</entry>
 * <entry>A</entry>
 * <entry>B</entry>
 * <entry>-</entry>
 * </row>
 * <row>
 * <entry>KEEP_ALL</entry>
 * <entry>A</entry>
 * <entry>A</entry>
 * <entry>-</entry>
 * <entry>-</entry>
 * </row>
 * </tbody>
 * </tgroup>
 * </table>
 */
enum TagMergeMode {
    UNDEFINED,
    REPLACE_ALL,
    REPLACE,
    APPEND,
    PREPEND,
    KEEP,
    KEEP_ALL,
    COUNT,
}
/**
 * The different states a task can be in
 */
enum TaskState {
    STARTED,
    STOPPED,
    PAUSED,
}
/**
 * The probability of the typefind function. Higher values have more certainty
 * in doing a reliable typefind.
 */
enum TypeFindProbability {
    MINIMUM,
    POSSIBLE,
    LIKELY,
    NEARLY_CERTAIN,
    MAXIMUM,
}
/**
 * The different types of URI direction.
 */
enum URIType {
    UNKNOWN,
    SINK,
    SRC,
}
/**
 * Flags indicating which tracing feature to enable.
 * @bitfield 
 */
enum AllocTraceFlags {
    LIVE,
    MEM_LIVE,
}
/**
 * Flags for an association entry.
 * @bitfield 
 */
enum AssocFlags {
    NONE,
    KEY_UNIT,
    DELTA_UNIT,
    LAST,
}
/**
 * The #GstElement flags that a basesrc element may have.
 * @bitfield 
 */
enum BaseSrcFlags {
    STARTED,
    FLAG_LAST,
}
/**
 * GstBinFlags are a set of flags specific to bins. Most are set/used
 * internally. They can be checked using the GST_OBJECT_FLAG_IS_SET () macro,
 * and (un)set using GST_OBJECT_FLAG_SET () and GST_OBJECT_FLAG_UNSET ().
 * @bitfield 
 */
enum BinFlags {
    LAST,
}
/**
 * A set of flags that can be provided to the gst_buffer_copy_metadata()
 * function to specify which metadata fields should be copied.
 * @bitfield 
 */
enum BufferCopyFlags {
    FLAGS,
    TIMESTAMPS,
    CAPS,
}
/**
 * A set of buffer flags used to describe properties of a #GstBuffer.
 * @bitfield 
 */
enum BufferFlag {
    READONLY,
    PREROLL,
    DISCONT,
    IN_CAPS,
    GAP,
    DELTA_UNIT,
    MEDIA1,
    MEDIA2,
    MEDIA3,
    LAST,
}
/**
 * The standard flags that a bus may have.
 * @bitfield 
 */
enum BusFlags {
    FLUSHING,
    FLAG_LAST,
}
/**
 * Extra flags for a caps.
 * @bitfield 
 */
enum CapsFlags {
    ANY,
}
/**
 * The capabilities of this clock
 * @bitfield 
 */
enum ClockFlags {
    CAN_DO_SINGLE_SYNC,
    CAN_DO_SINGLE_ASYNC,
    CAN_DO_PERIODIC_SYNC,
    CAN_DO_PERIODIC_ASYNC,
    CAN_SET_RESOLUTION,
    CAN_SET_MASTER,
    LAST,
}
/**
 * Available details for pipeline graphs produced by GST_DEBUG_BIN_TO_DOT_FILE()
 * and GST_DEBUG_BIN_TO_DOT_FILE_WITH_TS().
 * @bitfield 
 */
enum DebugGraphDetails {
    MEDIA_TYPE,
    CAPS_DETAILS,
    NON_DEFAULT_PARAMS,
    STATES,
    ALL,
}
/**
 * The standard flags that an element may have.
 * @bitfield 
 */
enum ElementFlags {
    LOCKED_STATE,
    IS_SINK,
    UNPARENTING,
    FLAG_LAST,
}
/**
 * #GstEventTypeFlags indicate the aspects of the different #GstEventType
 * values. You can get the type flags of a #GstEventType with the
 * gst_event_type_get_flags() function.
 * @bitfield 
 */
enum EventTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
}
/**
 * Flags for this index
 * @bitfield 
 */
enum IndexFlags {
    WRITABLE,
    READABLE,
    FLAG_LAST,
}
/**
 * The different message types that are available.
 * @bitfield 
 */
enum MessageType {
    UNKNOWN,
    EOS,
    ERROR,
    WARNING,
    INFO,
    TAG,
    BUFFERING,
    STATE_CHANGED,
    STATE_DIRTY,
    STEP_DONE,
    CLOCK_PROVIDE,
    CLOCK_LOST,
    NEW_CLOCK,
    STRUCTURE_CHANGE,
    STREAM_STATUS,
    APPLICATION,
    ELEMENT,
    SEGMENT_START,
    SEGMENT_DONE,
    DURATION,
    LATENCY,
    ASYNC_START,
    ASYNC_DONE,
    REQUEST_STATE,
    STEP_START,
    QOS,
    ANY,
}
/**
 * Flags for the padtemplate
 * @bitfield 
 */
enum MiniObjectFlags {
    READONLY,
    LAST,
}
/**
 * The standard flags that an gstobject may have.
 * @bitfield 
 */
enum ObjectFlags {
    DISPOSING,
    FLOATING,
    FLAG_LAST,
}
/**
 * Pad state flags
 * @bitfield 
 */
enum PadFlags {
    BLOCKED,
    FLUSHING,
    IN_GETCAPS,
    IN_SETCAPS,
    BLOCKING,
    FLAG_LAST,
}
/**
 * The amount of checking to be done when linking pads. `GST_PAD_LINK_CHECK_CAPS`
 * and `GST_PAD_LINK_CHECK_TEMPLATE_CAPS` are mutually exclusive. If both are
 * specified, expensive but safe `GST_PAD_LINK_CHECK_CAPS` are performed.
 * <warning><para>
 * Only disable some of the checks if you are 100% certain you know the link
 * will not fail because of hierarchy/caps compatibility failures. If uncertain,
 * use the default checks (%GST_PAD_LINK_CHECK_DEFAULT) or the regular methods
 * for linking the pads.
 * </para></warning>
 * @bitfield 
 */
enum PadLinkCheck {
    NOTHING,
    HIERARCHY,
    TEMPLATE_CAPS,
    CAPS,
}
/**
 * Flags for the padtemplate
 * @bitfield 
 */
enum PadTemplateFlags {
    FIXED,
    FLAG_LAST,
}
/**
 * Parsing options.
 * @bitfield 
 */
enum ParseFlags {
    NONE,
    FATAL_ERRORS,
}
/**
 * Pipeline flags
 * @bitfield 
 */
enum PipelineFlags {
    FIXED_CLOCK,
    LAST,
}
/**
 * Flags used in connection with gst_plugin_add_dependency().
 * @bitfield 
 */
enum PluginDependencyFlags {
    NONE,
    RECURSE,
    PATHS_ARE_DEFAULT_ONLY,
    FILE_NAME_IS_SUFFIX,
}
/**
 * The plugin loading state
 * @bitfield 
 */
enum PluginFlags {
    CACHED,
    BLACKLISTED,
}
/**
 * Flags to be used with gst_element_seek() or gst_event_new_seek(). All flags
 * can be used together.
 * A non flushing seek might take some time to perform as the currently
 * playing data in the pipeline will not be cleared.
 * An accurate seek might be slower for formats that don't have any indexes
 * or timestamp markers in the stream. Specifying this flag might require a
 * complete scan of the file in those cases.
 * no EOS will be emmited by the element that performed the seek, but a
 * #GST_MESSAGE_SEGMENT_DONE message will be posted on the bus by the element.
 * When this message is posted, it is possible to send a new seek event to
 * continue playback. With this seek method it is possible to perform seemless
 * looping or simple linear editing.
 * When doing fast forward (rate > 1.0) or fast reverse (rate < -1.0) trickmode
 * playback, the `GST_SEEK_FLAG_SKIP` flag can be used to instruct decoders
 * and demuxers to adjust the playback rate by skipping frames. This can improve
 * performance and decrease CPU usage because not all frames need to be decoded.
 * @bitfield 
 */
enum SeekFlags {
    NONE,
    FLUSH,
    ACCURATE,
    KEY_UNIT,
    SEGMENT,
    SKIP,
}
const BASE_TRANSFORM_SINK_NAME: string
const BASE_TRANSFORM_SRC_NAME: string
const BUFFER_COPY_ALL: any
const BUFFER_OFFSET_NONE: any
const BUFFER_TRACE_NAME: string
const CAN_INLINE: any
const CLOCK_ENTRY_TRACE_NAME: string
const CLOCK_TIME_NONE: any
const DEBUG_BG_MASK: any
const DEBUG_FG_MASK: any
const DEBUG_FORMAT_MASK: any
const DISABLE_ALLOC_TRACE: any
const DISABLE_GST_DEBUG: any
const DISABLE_LOADSAVE: any
const DISABLE_LOADSAVE_REGISTRY: any
const DISABLE_PARSE: any
const DISABLE_PLUGIN: any
const DISABLE_REGISTRY: any
const DISABLE_TRACE: any
const DISABLE_XML: any
const ERROR_SYSTEM: string
const EVENT_TRACE_NAME: string
const EVENT_TYPE_BOTH: any
const EVENT_TYPE_SHIFT: any
const FOURCC_FORMAT: string
const HAVE_GLIB_2_8: any
const HAVE_UNALIGNED_ACCESS: any
const INDEX_ID_INVALID: any
const LICENSE_UNKNOWN: string
const MESSAGE_TRACE_NAME: string
const MSECOND: any
const M_PI: number
const NSECOND: any
const PADDING: any
const PADDING_LARGE: any
const PAD_LINK_CHECK_DEFAULT: any
const PARAM_CONTROLLABLE: any
const PARAM_MUTABLE_PAUSED: any
const PARAM_MUTABLE_PLAYING: any
const PARAM_MUTABLE_READY: any
const PARAM_USER_SHIFT: any
const PTR_FORMAT: string
const SECOND: any
const SEGMENT_FORMAT: string
const TAG_ALBUM: string
const TAG_ALBUM_ARTIST: string
const TAG_ALBUM_ARTIST_SORTNAME: string
const TAG_ALBUM_GAIN: string
const TAG_ALBUM_PEAK: string
const TAG_ALBUM_SORTNAME: string
const TAG_ALBUM_VOLUME_COUNT: string
const TAG_ALBUM_VOLUME_NUMBER: string
const TAG_ARTIST: string
const TAG_ARTIST_SORTNAME: string
const TAG_ATTACHMENT: string
const TAG_AUDIO_CODEC: string
const TAG_BEATS_PER_MINUTE: string
const TAG_BITRATE: string
const TAG_CODEC: string
const TAG_COMMENT: string
const TAG_COMPOSER: string
const TAG_COMPOSER_SORTNAME: string
const TAG_CONTACT: string
const TAG_CONTAINER_FORMAT: string
const TAG_COPYRIGHT: string
const TAG_COPYRIGHT_URI: string
const TAG_DATE: string
const TAG_DESCRIPTION: string
const TAG_DEVICE_MANUFACTURER: string
const TAG_DEVICE_MODEL: string
const TAG_DURATION: string
const TAG_ENCODER: string
const TAG_ENCODER_VERSION: string
const TAG_EXTENDED_COMMENT: string
const TAG_GENRE: string
const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string
const TAG_GEO_LOCATION_CITY: string
const TAG_GEO_LOCATION_COUNTRY: string
const TAG_GEO_LOCATION_ELEVATION: string
const TAG_GEO_LOCATION_LATITUDE: string
const TAG_GEO_LOCATION_LONGITUDE: string
const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string
const TAG_GEO_LOCATION_MOVEMENT_SPEED: string
const TAG_GEO_LOCATION_NAME: string
const TAG_GEO_LOCATION_SUBLOCATION: string
const TAG_GROUPING: string
const TAG_HOMEPAGE: string
const TAG_IMAGE: string
const TAG_IMAGE_ORIENTATION: string
const TAG_ISRC: string
const TAG_KEYWORDS: string
const TAG_LANGUAGE_CODE: string
const TAG_LICENSE: string
const TAG_LICENSE_URI: string
const TAG_LOCATION: string
const TAG_LYRICS: string
const TAG_MAXIMUM_BITRATE: string
const TAG_MINIMUM_BITRATE: string
const TAG_NOMINAL_BITRATE: string
const TAG_ORGANIZATION: string
const TAG_PERFORMER: string
const TAG_PREVIEW_IMAGE: string
const TAG_REFERENCE_LEVEL: string
const TAG_SERIAL: string
const TAG_SHOW_EPISODE_NUMBER: string
const TAG_SHOW_NAME: string
const TAG_SHOW_SEASON_NUMBER: string
const TAG_SHOW_SORTNAME: string
const TAG_SUBTITLE_CODEC: string
const TAG_TITLE: string
const TAG_TITLE_SORTNAME: string
const TAG_TRACK_COUNT: string
const TAG_TRACK_GAIN: string
const TAG_TRACK_NUMBER: string
const TAG_TRACK_PEAK: string
const TAG_USER_RATING: string
const TAG_VERSION: string
const TAG_VIDEO_CODEC: string
const TIME_FORMAT: string
const USECOND: any
const VALUE_EQUAL: any
const VALUE_GREATER_THAN: any
const VALUE_LESS_THAN: any
const VALUE_UNORDERED: any
const VERSION_MAJOR: any
const VERSION_MICRO: any
const VERSION_MINOR: any
const VERSION_NANO: any
function allocTraceAvailable(): boolean
function allocTraceGet(name: string): AllocTrace
function allocTraceLiveAll(): number
function allocTracePrintAll(): void
function allocTracePrintLive(): void
function allocTraceSetFlagsAll(flags: AllocTraceFlags): void
function atomicIntSet(value: number): /* atomicInt */ number
function capsFromString(string: string): Caps
function capsLoadThyself(parent: libxml2.NodePtr): Caps
function childProxyChildAdded(object: Object, child: Object): void
function childProxyChildRemoved(object: Object, child: Object): void
function childProxyGetProperty(object: Object, name: string, value: any): void
function childProxyLookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): boolean
function childProxySetProperty(object: Object, name: string, value: any): void
function classSignalConnect(klass: ObjectClass, name: string, func: object, funcData: object): number
function classSignalEmitByName(object: Object, name: string, self: libxml2.NodePtr): void
function debugAddLogFunction(func: LogFunction): void
function debugConstructTermColor(colorinfo: number): string
function debugConstructWinColor(colorinfo: number): number
function debugGetAllCategories(): object[]
function debugGetDefaultThreshold(): DebugLevel
function debugIsActive(): boolean
function debugIsColored(): boolean
function debugLevelGetName(level: DebugLevel): string
function debugLogDefault(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage, unused: object): void
function debugPrintStackTrace(): void
function debugRemoveLogFunction(func: LogFunction): number
function debugRemoveLogFunctionByData(data: object): number
function debugSetActive(active: boolean): void
function debugSetColored(colored: boolean): void
function debugSetDefaultThreshold(level: DebugLevel): void
function debugSetThresholdForName(name: string, level: DebugLevel): void
function debugUnsetThresholdForName(name: string): void
function defaultRegistryCheckFeatureVersion(featureName: string, minMajor: number, minMinor: number, minMicro: number): boolean
function deinit(): void
function errorGetMessage(domain: GLib.Quark, code: number): string
function flowGetName(ret: FlowReturn): string
function flowToQuark(ret: FlowReturn): GLib.Quark
function formatGetByNick(nick: string): Format
function formatGetDetails(format: Format): FormatDefinition
function formatGetName(format: Format): string
function formatIterateDefinitions(): Iterator
function formatRegister(nick: string, description: string): Format
function formatToQuark(format: Format): GLib.Quark
function formatsContains(formats: Format, format: Format): boolean
function implementsInterfaceCast(from: object, type: GObject.GType): object
function implementsInterfaceCheck(from: object, type: GObject.GType): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function initCheck(argv: string[]): [ /* returnType */ boolean, /* argc */ number ]
function initGetOptionGroup(): GLib.OptionGroup
function isTagList(p: object): boolean
function paramSpecFraction(name: string, nick: string, blurb: string, minNum: number, minDenom: number, maxNum: number, maxDenom: number, defaultNum: number, defaultDenom: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecMiniObject(name: string, nick: string, blurb: string, objectType: GObject.GType, flags: GObject.ParamFlags): GObject.ParamSpec
function parseBinFromDescription(binDescription: string, ghostUnlinkedPads: boolean): Element
function parseBinFromDescriptionFull(binDescription: string, ghostUnlinkedPads: boolean, context: ParseContext, flags: ParseFlags): Element
function parseLaunch(pipelineDescription: string): Element
function parseLaunchFull(pipelineDescription: string, context: ParseContext, flags: ParseFlags): Element
function parseLaunchv(argv: string[]): Element
function parseLaunchvFull(argv: string[], context: ParseContext, flags: ParseFlags): Element
function printElementArgs(buf: GLib.String, indent: number, element: Element): void
function printPadCaps(buf: GLib.String, indent: number, pad: Pad): void
function segtrapIsEnabled(): boolean
function segtrapSetEnabled(enabled: boolean): void
function structureEmptyNew(name: string): Structure
function structureFromString(string: string, end: string[]): Structure
function structureIdEmptyNew(quark: GLib.Quark): Structure
function tagExists(tag: string): boolean
function tagGetDescription(tag: string): string
function tagGetFlag(tag: string): TagFlag
function tagGetNick(tag: string): string
function tagGetType(tag: string): GObject.GType
function tagIsFixed(tag: string): boolean
function tagListCopyValue(dest: any, list: TagList, tag: string): boolean
function tagMergeStringsWithComma(dest: any, src: any): void
function tagMergeUseFirst(dest: any, src: any): void
function tagRegister(name: string, flag: TagFlag, type: GObject.GType, nick: string, blurb: string, func: TagMergeFunc): void
function traceReadTsc(): /* dst */ number
function typeFindHelper(src: Pad, size: number): Caps
function typeFindHelperForBuffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps
function typeFindHelperForExtension(obj: Object, extension: string): Caps
function typeFindHelperGetRange(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, prob: TypeFindProbability): Caps
function typeFindHelperGetRangeExt(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, extension: string, prob: TypeFindProbability): Caps
function typeFindRegister(plugin: Plugin, name: string, rank: number, func: TypeFindFunction, extensions: string[], possibleCaps: Caps, data: object, dataNotify: GLib.DestroyNotify): boolean
function typeRegisterStaticFull(parentType: GObject.GType, typeName: string, classSize: number, baseInit: GObject.BaseInitFunc, baseFinalize: GObject.BaseFinalizeFunc, classInit: GObject.ClassInitFunc, classFinalize: GObject.ClassFinalizeFunc, instanceSize: number, nPreallocs: number, instanceInit: GObject.InstanceInitFunc, valueTable: GObject.TypeValueTable, flags: GObject.TypeFlags): GObject.GType
function updateRegistry(): boolean
function uriConstruct(protocol: string, location: string): string
function uriGetLocation(uri: string): string
function uriGetProtocol(uri: string): string
function uriHasProtocol(uri: string, protocol: string): boolean
function uriIsValid(uri: string): boolean
function uriProtocolIsSupported(type: URIType, protocol: string): boolean
function uriProtocolIsValid(protocol: string): boolean
function utilArrayBinarySearch(array: object, numElements: number, elementSize: number, searchFunc: GLib.CompareDataFunc, mode: SearchMode, searchData: object, userData: object): object
function utilDoubleToFraction(src: number): [ /* destN */ number, /* destD */ number ]
function utilDumpMem(mem: any[], size: number): void
function utilFractionAdd(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
function utilFractionMultiply(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
function utilFractionToDouble(srcN: number, srcD: number): /* dest */ number
function utilGdoubleToGuint64(value: number): number
function utilGetTimestamp(): ClockTime
function utilGreatestCommonDivisor(a: number, b: number): number
function utilGuint64ToGdouble(value: number): number
function utilSeqnumCompare(s1: number, s2: number): number
function utilSeqnumNext(): number
function utilSetObjectArg(object: GObject.Object, name: string, value: string): void
function utilSetValueFromString(value: any, valueStr: string): void
function utilUint64Scale(val: number, num: number, denom: number): number
function utilUint64ScaleCeil(val: number, num: number, denom: number): number
function utilUint64ScaleInt(val: number, num: number, denom: number): number
function utilUint64ScaleIntCeil(val: number, num: number, denom: number): number
function utilUint64ScaleIntRound(val: number, num: number, denom: number): number
function utilUint64ScaleRound(val: number, num: number, denom: number): number
function valueArrayAppendValue(value: any, appendValue: any): void
function valueArrayGetSize(value: any): number
function valueArrayGetValue(value: any, index: number): any
function valueArrayPrependValue(value: any, prependValue: any): void
function valueCanCompare(value1: any, value2: any): boolean
function valueCanIntersect(value1: any, value2: any): boolean
function valueCanSubtract(minuend: any, subtrahend: any): boolean
function valueCanUnion(value1: any, value2: any): boolean
function valueCompare(value1: any, value2: any): number
function valueDeserialize(dest: any, src: string): boolean
function valueDupMiniObject(value: any): MiniObject
function valueFractionMultiply(product: any, factor1: any, factor2: any): boolean
function valueFractionSubtract(dest: any, minuend: any, subtrahend: any): boolean
function valueGetCaps(value: any): Caps
function valueGetDate(value: any): GLib.Date
function valueGetDoubleRangeMax(value: any): number
function valueGetDoubleRangeMin(value: any): number
function valueGetFourcc(value: any): number
function valueGetFractionDenominator(value: any): number
function valueGetFractionNumerator(value: any): number
function valueGetFractionRangeMax(value: any): any
function valueGetFractionRangeMin(value: any): any
function valueGetIntRangeMax(value: any): number
function valueGetIntRangeMin(value: any): number
function valueGetMiniObject(value: any): MiniObject
function valueGetStructure(value: any): Structure
function valueInitAndCopy(dest: any, src: any): void
function valueIntersect(dest: any, value1: any, value2: any): boolean
function valueIsFixed(value: any): boolean
function valueListAppendValue(value: any, appendValue: any): void
function valueListConcat(dest: any, value1: any, value2: any): void
function valueListGetSize(value: any): number
function valueListGetValue(value: any, index: number): any
function valueListPrependValue(value: any, prependValue: any): void
function valueRegister(table: ValueTable): void
function valueRegisterIntersectFunc(type1: GObject.GType, type2: GObject.GType, func: ValueIntersectFunc): void
function valueRegisterSubtractFunc(minuendType: GObject.GType, subtrahendType: GObject.GType, func: ValueSubtractFunc): void
function valueRegisterUnionFunc(type1: GObject.GType, type2: GObject.GType, func: ValueUnionFunc): void
function valueSerialize(value: any): string
function valueSetCaps(value: any, caps: Caps): void
function valueSetDate(value: any, date: GLib.Date): void
function valueSetDoubleRange(value: any, start: number, end: number): void
function valueSetFourcc(value: any, fourcc: number): void
function valueSetFraction(value: any, numerator: number, denominator: number): void
function valueSetFractionRange(value: any, start: any, end: any): void
function valueSetFractionRangeFull(value: any, numeratorStart: number, denominatorStart: number, numeratorEnd: number, denominatorEnd: number): void
function valueSetIntRange(value: any, start: number, end: number): void
function valueSetMiniObject(value: any, miniObject: MiniObject): void
function valueSetStructure(value: any, structure: Structure): void
function valueSubtract(dest: any, minuend: any, subtrahend: any): boolean
function valueTakeMiniObject(value: any, miniObject: MiniObject): void
function valueUnion(dest: any, value1: any, value2: any): boolean
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function versionString(): string
/**
 * A function for accessing the last buffer returned by
 * gst_buffer_list_iterator_next(). The function can leave `buffer` in the list,
 * replace `buffer` in the list or remove `buffer` from the list, depending on
 * the return value. If the function returns NULL, `buffer` will be removed from
 * the list, otherwise `buffer` will be replaced with the returned buffer.
 * The last buffer returned by gst_buffer_list_iterator_next() will be replaced
 * with the buffer returned from the function. The function takes ownership of
 * unreffed. If NULL is returned, the buffer will be removed from the list. The
 * list must be writable.
 * from the list
 * @callback 
 * @param buffer the #GstBuffer
 */
interface BufferListDoFunction {
    (buffer: Buffer): Buffer
}
/**
 * A function that will be called from gst_buffer_list_foreach(). The `buffer`
 * field will point to a the reference of the buffer at `idx` in `group`.
 * When this function returns #GST_BUFFER_LIST_CONTINUE, the next buffer will be
 * returned. When #GST_BUFFER_LIST_SKIP_GROUP is returned, all remaining buffers
 * in the current group will be skipped and the first buffer of the next group
 * is returned (if any). When GST_BUFFER_LIST_END is returned,
 * gst_buffer_list_foreach() will return.
 * When `buffer` is set to NULL, the item will be removed from the bufferlist.
 * When `buffer` has been made writable, the new buffer reference can be assigned
 * to `buffer`. This function is responsible for unreffing the old buffer when
 * removing or modifying.
 * @callback 
 * @param buffer pointer the buffer
 * @param group the group index of `buffer`
 * @param idx the index in `group` of `buffer`
 */
interface BufferListFunc {
    (buffer: Buffer, group: number, idx: number): BufferListItem
}
/**
 * Specifies the type of function passed to gst_bus_add_watch() or
 * gst_bus_add_watch_full(), which is called from the mainloop when a message
 * is available on the bus.
 * The message passed to the function will be unreffed after execution of this
 * function so it should not be freed in the function.
 * Note that this function is used as a GSourceFunc which means that returning
 * FALSE will remove the GSource from the mainloop.
 * @callback 
 * @param bus the #GstBus that sent the message
 * @param message the #GstMessage
 * @param data user data that has been given, when registering the handler
 */
interface BusFunc {
    (bus: Bus, message: Message, data: object): boolean
}
/**
 * Handler will be invoked synchronously, when a new message has been injected
 * into the bus. This function is mostly used internally. Only one sync handler
 * can be attached to a given bus.
 * If the handler returns GST_BUS_DROP, it should unref the message, else the
 * message should not be unreffed by the sync handler.
 * @callback 
 * @param bus the #GstBus that sent the message
 * @param message the #GstMessage
 * @param data user data that has been given, when registering the handler
 */
interface BusSyncHandler {
    (bus: Bus, message: Message, data: object): BusSyncReply
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
 * A function that will be called when the #GstCollectData will be freed.
 * It is passed the pointer to the structure and should free any custom
 * memory and resources allocated for it.
 * @callback 
 * @param data the #GstCollectData that will be freed
 */
interface CollectDataDestroyNotify {
    (data: CollectData): void
}
/**
 * A function that will be called when `buffer` is received on the pad managed
 * by `data` in the collecpad object `pads`.
 * The function should use the segment of `data` and the negotiated media type on
 * the pad to perform clipping of `buffer`. 
 * This function takes ownership of `buffer`.
 * the buffer has been clipped completely.
 * @callback 
 * @param pads a #GstCollectPads
 * @param data a #GstCollectData
 * @param buffer a #GstBuffer
 */
interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, buffer: Buffer): Buffer
}
/**
 * A function that will be called when all pads have received data.
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 */
interface CollectPadsFunction {
    (pads: CollectPads): FlowReturn
}
/**
 * A function to create a copy of some object or
 * increase its reference count.
 * @callback 
 * @param object The object to copy
 */
interface CopyFunction {
    (object: object): object
}
/**
 * The prototype of the function used to inform the queue that it should be
 * considered as full.
 * @callback 
 * @param queue a #GstDataQueue.
 * @param visible The number of visible items currently in the queue.
 * @param bytes The amount of bytes currently in the queue.
 * @param time The accumulated duration of the items currently in the queue.
 * @param checkdata The #gpointer registered when the #GstDataQueue was created.
 */
interface DataQueueCheckFullFunction {
    (queue: DataQueue, visible: number, bytes: number, time: number, checkdata: object): boolean
}
interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata: object): void
}
interface DataQueueFullCallback {
    (queue: DataQueue, checkdata: object): void
}
interface DebugFuncPtr {
    (): void
}
/**
 * Function prototype for a filter callback taht can be use in gst_filter_run().
 * The function should apply its filtering to `obj`. Additional data passed to
 * gst_filter_run() are in `data`.
 * @callback 
 * @param obj the object
 */
interface FilterFunc {
    (obj: object): boolean
}
/**
 * Function to filter out entries in the index.
 * to the index, %FALSE otherwise.
 * @callback 
 * @param index The index being queried
 * @param entry The entry to be added.
 */
interface IndexFilter {
    (index: Index, entry: IndexEntry): boolean
}
/**
 * Function to resolve ids to writer descriptions.
 * @callback 
 * @param index the index being queried.
 * @param writer The object that wants to write
 * @param writerString A description of the writer.
 */
interface IndexResolver {
    (index: Index, writer: Object, writerString: string[]): boolean
}
/**
 * The function that will be called when a #GList iterator is freed. The
 * owner of the #GList iterator can then clean up its resources.
 * @callback 
 * @param owner the owner of the iterator
 */
interface IteratorDisposeFunction {
    (owner: object): void
}
/**
 * A function to be passed to gst_iterator_fold().
 * @callback 
 * @param item the item to fold
 * @param ret a #GValue collecting the result
 */
interface IteratorFoldFunction {
    (item: object, ret: any): boolean
}
/**
 * This function will be called when the iterator is freed.
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
 * has been retrieved. This function will typically increase the refcount
 * of the item or make a copy.
 * Implementors of a #GstIterator should implement this
 * function and pass it to the constructor of the custom iterator.
 * The function will be called with the iterator lock held.
 * @callback 
 * @param it the iterator
 * @param item the item being retrieved.
 */
interface IteratorItemFunction {
    (it: Iterator, item: object): IteratorItem
}
/**
 * The function that will be called when the next element of the iterator
 * should be retrieved. 
 * Implementors of a #GstIterator should implement this
 * function and pass it to the constructor of the custom iterator.
 * The function will be called with the iterator lock held.
 * @callback 
 * @param it the iterator
 * @param result a pointer to hold the next item
 */
interface IteratorNextFunction {
    (it: Iterator, result: object): IteratorResult
}
/**
 * This function will be called whenever a concurrent update happened
 * to the iterated datastructure. The implementor of the iterator should
 * restart the iterator from the beginning and clean up any state it might
 * have.
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
 * @param data user data for the log function
 */
interface LogFunction {
    (category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage, data: object): void
}
/**
 * Virtual function prototype for methods to create copies of instances.
 * @callback 
 * @param obj MiniObject to copy
 */
interface MiniObjectCopyFunction {
    (obj: MiniObject): MiniObject
}
/**
 * Virtual function prototype for methods to free ressources used by
 * mini-objects. Subclasses of the mini object are allowed to revive the
 * passed object by doing a gst_mini_object_ref(). If the object is not
 * revived after the finalize function, the memory associated with the
 * object is freed.
 * @callback 
 * @param obj MiniObject to finalize
 */
interface MiniObjectFinalizeFunction {
    (obj: MiniObject): void
}
/**
 * Check if `pad` can accept `caps`. By default this function will see if `caps`
 * intersect with the result from gst_pad_get_caps() by can be overridden to
 * perform extra checks.
 * @callback 
 * @param pad the #GstPad to check
 * @param caps the #GstCaps to check
 */
interface PadAcceptCapsFunction {
    (pad: Pad, caps: Caps): boolean
}
/**
 * This function is called when the pad is activated during the element
 * READY to PAUSED state change. By default this function will call the
 * activate function that puts the pad in push mode but elements can
 * override this function to activate the pad in pull mode if they wish.
 * @callback 
 * @param pad a #GstPad
 */
interface PadActivateFunction {
    (pad: Pad): boolean
}
/**
 * The prototype of the push and pull activate functions.
 * @callback 
 * @param pad a #GstPad
 * @param active activate or deactivate the pad.
 */
interface PadActivateModeFunction {
    (pad: Pad, active: boolean): boolean
}
/**
 * Callback used by gst_pad_set_blocked_async(). Gets called when the blocking
 * operation succeeds.
 * @callback 
 * @param pad the #GstPad that is blockend or unblocked.
 * @param blocked blocking state for the pad
 */
interface PadBlockCallback {
    (pad: Pad, blocked: boolean): void
}
/**
 * Ask the sinkpad `pad` to allocate a buffer with `offset,` `size` and `caps`.
 * The result will be stored in `buf`.
 * The purpose of this function is to allocate a buffer that is optimal to
 * be processed by `pad`. The function is mostly overridden by elements that can
 * provide a hardware buffer in order to avoid additional memcpy operations.
 * The function can return a buffer that has caps different from the requested
 * new caps.
 * If a format change was requested, the returned buffer will be one to hold
 * the data of said new caps, so its size might be different from the requested
 * When this function returns anything else than #GST_FLOW_OK, the buffer allocation
 * failed and `buf` does not contain valid data. If the function returns #GST_FLOW_OK and
 * the `buf` is NULL, a #GstBuffer will be created with `caps,` `offset` and `size`.
 * By default this function returns a new buffer of `size` and with `caps` containing
 * purely malloced data. The buffer should be freed with gst_buffer_unref()
 * after usage.
 * value means `buf` does not hold a valid buffer.
 * @callback 
 * @param pad a sink #GstPad
 * @param offset the desired offset of the buffer
 * @param size the desired size of the buffer
 * @param caps the desired caps of the buffer
 * @param buf pointer to hold the allocated buffer.
 */
interface PadBufferAllocFunction {
    (pad: Pad, offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
}
/**
 * A function that will be called on sinkpads when chaining buffers.
 * The function typically processes the data contained in the buffer and
 * either consumes the data or passes it on to the internally linked pad(s).
 * The implementer of this function receives a refcount to `buffer` and should
 * gst_buffer_unref() when the buffer is no longer needed.
 * When a chain function detects an error in the data stream, it must post an
 * error on the bus and return an appropriate #GstFlowReturn value.
 * @callback 
 * @param pad the sink #GstPad that performed the chain.
 * @param buffer the #GstBuffer that is chained, not %NULL.
 */
interface PadChainFunction {
    (pad: Pad, buffer: Buffer): FlowReturn
}
/**
 * A function that will be called on sinkpads when chaining buffer lists.
 * The function typically processes the data contained in the buffer list and
 * either consumes the data or passes it on to the internally linked pad(s).
 * The implementer of this function receives a refcount to `list` and
 * should gst_buffer_list_unref() when the list is no longer needed.
 * When a chainlist function detects an error in the data stream, it must
 * post an error on the bus and return an appropriate #GstFlowReturn value.
 * @callback 
 * @param pad the sink #GstPad that performed the chain.
 * @param list the #GstBufferList that is chained, not %NULL.
 */
interface PadChainListFunction {
    (pad: Pad, list: BufferList): FlowReturn
}
/**
 * Check if `pad` can be activated in pull mode.
 * This function will be deprecated after 0.10; use the seeking query to check
 * if a pad can support random access.
 * @callback 
 * @param pad a #GstPad
 */
interface PadCheckGetRangeFunction {
    (pad: Pad): boolean
}
/**
 * A dispatcher function is called for all internally linked pads, see
 * gst_pad_dispatcher().
 * @callback 
 * @param pad the #GstPad that is dispatched.
 * @param data the gpointer to optional user data.
 */
interface PadDispatcherFunction {
    (pad: Pad, data: object): boolean
}
/**
 * Function signature to handle an event for the pad.
 * @callback 
 * @param pad the #GstPad to handle the event.
 * @param event the #GstEvent to handle.
 */
interface PadEventFunction {
    (pad: Pad, event: Event): boolean
}
/**
 * Given possibly unfixed caps `caps,` let `pad` use its default prefered
 * format to make a fixed caps. `caps` should be writable. By default this
 * function will pick the first value of any ranges or lists in the caps but
 * elements can override this function to perform other behaviour.
 * @callback 
 * @param pad a #GstPad
 * @param caps the #GstCaps to fixate
 */
interface PadFixateCapsFunction {
    (pad: Pad, caps: Caps): void
}
/**
 * Returns a copy of the capabilities of the specified pad. By default this
 * function will return the pad template capabilities, but can optionally
 * be overridden by elements.
 * @callback 
 * @param pad the #GstPad to get the capabilities of.
 */
interface PadGetCapsFunction {
    (pad: Pad): Caps
}
/**
 * This function will be called on source pads when a peer element
 * request a buffer at the specified `offset` and `length`. If this function
 * returns #GST_FLOW_OK, the result buffer will be stored in `buffer`. The
 * contents of `buffer` is invalid for any other return value.
 * This function is installed on a source pad with
 * gst_pad_set_getrange_function() and can only be called on source pads after
 * they are successfully activated with gst_pad_activate_pull().
 * between 0 and the length in bytes of the data available on `pad`. The
 * length (duration in bytes) can be retrieved with a #GST_QUERY_DURATION or with a
 * #GST_QUERY_SEEKING.
 * Any `offset` larger or equal than the length will make the function return
 * #GST_FLOW_UNEXPECTED, which corresponds to EOS. In this case `buffer` does not
 * contain a valid buffer.
 * The buffer size of `buffer` will only be smaller than `length` when `offset` is
 * near the end of the stream. In all other cases, the size of `buffer` must be
 * exactly the requested size.
 * It is allowed to call this function with a 0 `length` and valid `offset,` in
 * which case `buffer` will contain a 0-sized buffer and the function returns
 * #GST_FLOW_OK.
 * When this function is called with a -1 `offset,` the sequentially next buffer
 * of length `length` in the stream is returned.
 * When this function is called with a -1 `length,` a buffer with a default
 * optimal length is returned in `buffer`. The length might depend on the value
 * of `offset`.
 * return value leaves `buffer` undefined.
 * @callback 
 * @param pad the src #GstPad to perform the getrange on.
 * @param offset the offset of the range
 * @param length the length of the range
 * @param buffer a memory location to hold the result buffer, cannot be NULL.
 */
interface PadGetRangeFunction {
    (pad: Pad, offset: number, length: number, buffer: Buffer): FlowReturn
}
/**
 * The signature of the internal pad link function.
 * @callback 
 * @param pad The #GstPad to query.
 */
interface PadIntLinkFunction {
    (pad: Pad): Pad[]
}
/**
 * The signature of the internal pad link iterator function.
 * linked to the given pad on the inside of the parent element.
 * the caller must call gst_iterator_free() after usage.
 * Since 0.10.21
 * @callback 
 * @param pad The #GstPad to query.
 */
interface PadIterIntLinkFunction {
    (pad: Pad): Iterator
}
interface PadLinkFunction {
    (pad: Pad, peer: Pad): PadLinkReturn
}
/**
 * The signature of the query function.
 * @callback 
 * @param pad the #GstPad to query.
 * @param query the #GstQuery object to execute
 */
interface PadQueryFunction {
    (pad: Pad, query: Query): boolean
}
/**
 * The signature of the query types function.
 * @callback 
 * @param pad a #GstPad to query
 */
interface PadQueryTypeFunction {
    (pad: Pad): QueryType
}
/**
 * Set `caps` on `pad`. By default this function updates the caps of the
 * pad but the function can be overriden by elements to perform extra
 * actions or verifications.
 * @callback 
 * @param pad the #GstPad to set the capabilities of.
 * @param caps the #GstCaps to set
 */
interface PadSetCapsFunction {
    (pad: Pad, caps: Caps): boolean
}
interface PadUnlinkFunction {
    (pad: Pad): void
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
/**
 * A function that will be called in gst_structure_foreach(). The function may
 * not modify `value`.
 * the foreach operation should stop with FALSE.
 * @callback 
 * @param fieldId the #GQuark of the field name
 * @param value the #GValue of the field
 */
interface StructureForeachFunc {
    (fieldId: GLib.Quark, value: any): boolean
}
/**
 * A function that will be called in gst_structure_map_in_place(). The function
 * may modify `value`.
 * the map operation should stop with FALSE.
 * @callback 
 * @param fieldId the #GQuark of the field name
 * @param value the #GValue of the field
 */
interface StructureMapFunc {
    (fieldId: GLib.Quark, value: any): boolean
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
 * @param data user data passed to the function
 */
interface TaskFunction {
    (data: any): void
}
/**
 * Task function, see gst_task_pool_push().
 * @callback 
 * @param data user data for the task function
 */
interface TaskPoolFunction {
    (data: any): void
}
/**
 * A function that will be called by typefinding.
 * @callback 
 * @param find A #GstTypeFind structure
 * @param data optionnal data to pass to the function
 */
interface TypeFindFunction {
    (find: TypeFind, data: object): void
}
/**
 * This function will be called by gst_type_find_helper_get_range() when
 * typefinding functions request to peek at the data of a stream at certain
 * offsets. If this function returns GST_FLOW_OK, the result buffer will be
 * stored in `buffer`. The  contents of `buffer` is invalid for any other
 * return value.
 * This function is supposed to behave exactly like a #GstPadGetRangeFunction.
 * @callback 
 * @param obj a #GstObject that will handle the getrange request
 * @param offset the offset of the range
 * @param length the length of the range
 * @param buffer a memory location to hold the result buffer
 */
interface TypeFindHelperGetRangeFunction {
    (obj: Object, offset: number, length: number, buffer: Buffer): FlowReturn
}
/**
 * Used together with gst_value_compare() to compare #GValue items.
 * or GST_VALUE_UNORDERED
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
 * Used by gst_value_intersect() to perform intersection for a specific #GValue
 * type. If the intersection is non-empty, the result is
 * placed in `dest` and TRUE is returned.  If the intersection is
 * empty, `dest` is unmodified and FALSE is returned.
 * Register a new implementation with gst_value_register_intersect_func().
 * @callback 
 * @param dest a #GValue for the result
 * @param value1 a #GValue operand
 * @param value2 a #GValue operand
 */
interface ValueIntersectFunc {
    (dest: any, value1: any, value2: any): boolean
}
/**
 * Used by gst_value_serialize() to obtain a non-binary form of the #GValue.
 * @callback 
 * @param value1 a #GValue
 */
interface ValueSerializeFunc {
    (value1: any): string
}
/**
 * Used by gst_value_subtract() to perform subtraction for a specific #GValue
 * type. Register a new implementation with gst_value_register_subtract_func().
 * @callback 
 * @param dest a #GValue for the result
 * @param minuend a #GValue operand
 * @param subtrahend a #GValue operand
 */
interface ValueSubtractFunc {
    (dest: any, minuend: any, subtrahend: any): boolean
}
/**
 * Used by gst_value_union() to perform unification for a specific #GValue
 * type. Register a new implementation with gst_value_register_union_func().
 * @callback 
 * @param dest a #GValue for the result
 * @param value1 a #GValue operand
 * @param value2 a #GValue operand
 */
interface ValueUnionFunc {
    (dest: any, value1: any, value2: any): boolean
}
interface ChildProxy_ConstructProps extends Object_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `child-added`
 */
interface ChildProxy_ChildAddedSignalCallback {
    (object: GObject.Object): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface ChildProxy_ChildRemovedSignalCallback {
    (object: GObject.Object): void
}

interface ChildProxy extends Object {

    // Owm methods of Gst-0.10.Gst.ChildProxy

    getChildByName(name: string): Object
    getChildByIndex(index: number): Object
    getChildrenCount(): number

    // Own signals of Gst-0.10.Gst.ChildProxy

    connect(sigName: "child-added", callback: ChildProxy_ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: ChildProxy_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: ChildProxy_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: ChildProxy_ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-removed", callback: ChildProxy_ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: ChildProxy_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: ChildProxy_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: ChildProxy_ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.ChildProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstChildProxy data structure.
 * @interface 
 */
class ChildProxy extends GObject.Object {

    // Own properties of Gst-0.10.Gst.ChildProxy

    static name: string
    static $gtype: GObject.GType<ChildProxy>

    // Constructors of Gst-0.10.Gst.ChildProxy

    constructor(config?: ChildProxy_ConstructProps) 
    _init(config?: ChildProxy_ConstructProps): void
}

interface ImplementsInterface_ConstructProps extends Element_ConstructProps, GObject.Object_ConstructProps {
}

interface ImplementsInterface extends Element {

    // Conflicting properties

    object: any

    // Class property signals of Gst-0.10.Gst.ImplementsInterface

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstImplementsInterface structure.
 * @interface 
 */
class ImplementsInterface extends GObject.Object {

    // Own properties of Gst-0.10.Gst.ImplementsInterface

    static name: string
    static $gtype: GObject.GType<ImplementsInterface>

    // Constructors of Gst-0.10.Gst.ImplementsInterface

    constructor(config?: ImplementsInterface_ConstructProps) 
    _init(config?: ImplementsInterface_ConstructProps): void
}

interface TagSetter_ConstructProps extends Element_ConstructProps, GObject.Object_ConstructProps {
}

interface TagSetter extends Element {

    // Conflicting properties

    object: any

    // Owm methods of Gst-0.10.Gst.TagSetter

    resetTags(): void
    mergeTags(list: TagList, mode: TagMergeMode): void
    addTagValue(mode: TagMergeMode, tag: string, value: any): void
    getTagList(): TagList
    setTagMergeMode(mode: TagMergeMode): void
    getTagMergeMode(): TagMergeMode

    // Class property signals of Gst-0.10.Gst.TagSetter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstTagSetter data structure.
 * @interface 
 */
class TagSetter extends GObject.Object {

    // Own properties of Gst-0.10.Gst.TagSetter

    static name: string
    static $gtype: GObject.GType<TagSetter>

    // Constructors of Gst-0.10.Gst.TagSetter

    constructor(config?: TagSetter_ConstructProps) 
    _init(config?: TagSetter_ConstructProps): void
}

interface URIHandler_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `new-uri`
 */
interface URIHandler_NewUriSignalCallback {
    (object: string): void
}

interface URIHandler {

    // Owm methods of Gst-0.10.Gst.URIHandler

    getUriType(): number
    getProtocols(): string[]
    getUri(): string
    setUri(uri: string): boolean
    newUri(uri: string): void

    // Own signals of Gst-0.10.Gst.URIHandler

    connect(sigName: "new-uri", callback: URIHandler_NewUriSignalCallback): number
    on(sigName: "new-uri", callback: URIHandler_NewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-uri", callback: URIHandler_NewUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-uri", callback: URIHandler_NewUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-uri", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.URIHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstURIHandler structure.
 * @interface 
 */
class URIHandler extends GObject.Object {

    // Own properties of Gst-0.10.Gst.URIHandler

    static name: string
    static $gtype: GObject.GType<URIHandler>

    // Constructors of Gst-0.10.Gst.URIHandler

    constructor(config?: URIHandler_ConstructProps) 
    _init(config?: URIHandler_ConstructProps): void
}

interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}

interface Adapter {

    // Own fields of Gst-0.10.Gst.Adapter

    object: GObject.Object
    buflist: object[]
    size: number
    skip: number
    assembledData: number
    assembledSize: number
    assembledLen: number
    buflistEnd: object[]
    priv: AdapterPrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Adapter

    clear(): void
    push(buf: Buffer): void
    peek(size: number): any[]
    copy(dest: any[], offset: number, size: number): void
    flush(flush: number): void
    take(nbytes: number): any[]
    takeBuffer(nbytes: number): Buffer
    available(): number
    availableFast(): number
    prevTimestamp(): [ /* returnType */ ClockTime, /* distance */ number ]
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]

    // Class property signals of Gst-0.10.Gst.Adapter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstAdapter data structure.
 * @class 
 */
class Adapter extends GObject.Object {

    // Own properties of Gst-0.10.Gst.Adapter

    static name: string
    static $gtype: GObject.GType<Adapter>

    // Constructors of Gst-0.10.Gst.Adapter

    constructor(config?: Adapter_ConstructProps) 
    constructor() 
    static new(): Adapter
    _init(config?: Adapter_ConstructProps): void
}

interface BaseSink_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.BaseSink

    async?: boolean | null
    blocksize?: number | null
    enableLastBuffer?: boolean | null
    maxLateness?: number | null
    prerollQueueLen?: number | null
    qos?: boolean | null
    renderDelay?: number | null
    sync?: boolean | null
    tsOffset?: number | null
}

interface BaseSink {

    // Own properties of Gst-0.10.Gst.BaseSink

    async: boolean
    blocksize: number
    enableLastBuffer: boolean
    readonly lastBuffer: Buffer
    maxLateness: number
    prerollQueueLen: number
    qos: boolean
    renderDelay: number
    tsOffset: number

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.BaseSink

    element: Element
    sinkpad: Pad
    padMode: ActivateMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollQueue: GLib.Queue
    prerollQueueMaxLen: number
    prerollQueued: number
    buffersQueued: number
    eventsQueued: number
    eos: boolean
    eosQueued: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Segment
    clockId: ClockID
    endTime: ClockTime
    sync: boolean
    flushing: boolean
    priv: BaseSinkPrivate

    // Owm methods of Gst-0.10.Gst.BaseSink

    doPreroll(obj: MiniObject): FlowReturn
    waitPreroll(): FlowReturn
    setSync(sync: boolean): void
    getSync(): boolean
    setMaxLateness(maxLateness: number): void
    getMaxLateness(): number
    setQosEnabled(enabled: boolean): void
    isQosEnabled(): boolean
    setAsyncEnabled(enabled: boolean): void
    isAsyncEnabled(): boolean
    setTsOffset(offset: ClockTimeDiff): void
    getTsOffset(): ClockTimeDiff
    getLastBuffer(): Buffer
    setLastBufferEnabled(enable: boolean): void
    isLastBufferEnabled(): boolean
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): [ /* returnType */ boolean, /* live */ boolean, /* upstreamLive */ boolean ]
    getLatency(): ClockTime
    setRenderDelay(delay: ClockTime): void
    getRenderDelay(): ClockTime
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    waitClock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn
    waitEos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn

    // Class property signals of Gst-0.10.Gst.BaseSink

    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstBaseSink data structure.
 * @class 
 */
class BaseSink extends Element {

    // Own properties of Gst-0.10.Gst.BaseSink

    static name: string
    static $gtype: GObject.GType<BaseSink>

    // Constructors of Gst-0.10.Gst.BaseSink

    constructor(config?: BaseSink_ConstructProps) 
    _init(config?: BaseSink_ConstructProps): void
}

interface BaseSrc_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.BaseSrc

    blocksize?: number | null
    doTimestamp?: boolean | null
    numBuffers?: number | null
    typefind?: boolean | null
}

interface BaseSrc {

    // Own properties of Gst-0.10.Gst.BaseSrc

    doTimestamp: boolean
    typefind: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.BaseSrc

    element: Element
    srcpad: Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: boolean
    liveRunning: boolean
    blocksize: number
    canActivatePush: boolean
    padMode: ActivateMode
    seekable: boolean
    randomAccess: boolean
    clockId: ClockID
    endTime: ClockTime
    segment: Segment
    needNewsegment: boolean
    offset: number
    size: number
    numBuffers: number
    numBuffersLeft: number
    priv: BaseSrcPrivate

    // Owm methods of Gst-0.10.Gst.BaseSrc

    waitPlaying(): FlowReturn
    setLive(live: boolean): void
    setFormat(format: Format): void
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    setDoTimestamp(timestamp: boolean): void
    getDoTimestamp(): boolean
    newSeamlessSegment(start: number, stop: number, position: number): boolean

    // Class property signals of Gst-0.10.Gst.BaseSrc

    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (...args: any[]) => void): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstBaseSrc data structure.
 * @class 
 */
class BaseSrc extends Element {

    // Own properties of Gst-0.10.Gst.BaseSrc

    static name: string
    static $gtype: GObject.GType<BaseSrc>

    // Constructors of Gst-0.10.Gst.BaseSrc

    constructor(config?: BaseSrc_ConstructProps) 
    _init(config?: BaseSrc_ConstructProps): void
}

interface BaseTransform_ConstructProps extends Element_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.BaseTransform

    qos?: boolean | null
}

interface BaseTransform {

    // Own properties of Gst-0.10.Gst.BaseTransform

    qos: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.BaseTransform

    element: Element
    sinkpad: Pad
    srcpad: Pad
    passthrough: boolean
    alwaysInPlace: boolean
    cacheCaps1: Caps
    cacheCaps1Size: number
    cacheCaps2: Caps
    cacheCaps2Size: number
    haveSameCaps: boolean
    delayConfigure: boolean
    pendingConfigure: boolean
    negotiated: boolean
    haveNewsegment: boolean
    segment: Segment
    transformLock: GLib.Mutex
    priv: BaseTransformPrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.BaseTransform

    setPassthrough(passthrough: boolean): void
    isPassthrough(): boolean
    setInPlace(inPlace: boolean): void
    isInPlace(): boolean
    updateQos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void
    setQosEnabled(enabled: boolean): void
    isQosEnabled(): boolean
    setGapAware(gapAware: boolean): void
    suggest(caps: Caps, size: number): void
    reconfigure(): void

    // Class property signals of Gst-0.10.Gst.BaseTransform

    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstBaseTransform data structure.
 * @class 
 */
class BaseTransform extends Element {

    // Own properties of Gst-0.10.Gst.BaseTransform

    static name: string
    static $gtype: GObject.GType<BaseTransform>

    // Constructors of Gst-0.10.Gst.BaseTransform

    constructor(config?: BaseTransform_ConstructProps) 
    _init(config?: BaseTransform_ConstructProps): void
}

interface Bin_ConstructProps extends ChildProxy_ConstructProps, Element_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.Bin

    asyncHandling?: boolean | null
}

/**
 * Signal callback interface for `do-latency`
 */
interface Bin_DoLatencySignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `element-added`
 */
interface Bin_ElementAddedSignalCallback {
    (object: Element): void
}

/**
 * Signal callback interface for `element-removed`
 */
interface Bin_ElementRemovedSignalCallback {
    (object: Element): void
}

interface Bin extends ChildProxy {

    // Own properties of Gst-0.10.Gst.Bin

    asyncHandling: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.Bin

    element: Element
    numchildren: number
    children: object[]
    childrenCookie: number
    childBus: Bus
    messages: object[]
    polling: boolean
    stateDirty: boolean
    clockDirty: boolean
    providedClock: Clock
    clockProvider: Element
    priv: BinPrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Bin

    add(element: Element): boolean
    remove(element: Element): boolean
    getByName(name: string): Element
    getByNameRecurseUp(name: string): Element
    getByInterface(iface: GObject.GType): Element
    iterateElements(): Iterator
    iterateSorted(): Iterator
    iterateRecurse(): Iterator
    iterateSinks(): Iterator
    iterateSources(): Iterator
    iterateAllByInterface(iface: GObject.GType): Iterator
    recalculateLatency(): boolean
    findUnlinkedPad(direction: PadDirection): Pad
    findUnconnectedPad(direction: PadDirection): Pad

    // Own signals of Gst-0.10.Gst.Bin

    connect(sigName: "do-latency", callback: Bin_DoLatencySignalCallback): number
    on(sigName: "do-latency", callback: Bin_DoLatencySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: Bin_DoLatencySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: Bin_DoLatencySignalCallback): NodeJS.EventEmitter
    emit(sigName: "do-latency", ...args: any[]): void
    connect(sigName: "element-added", callback: Bin_ElementAddedSignalCallback): number
    on(sigName: "element-added", callback: Bin_ElementAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: Bin_ElementAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: Bin_ElementAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "element-added", ...args: any[]): void
    connect(sigName: "element-removed", callback: Bin_ElementRemovedSignalCallback): number
    on(sigName: "element-removed", callback: Bin_ElementRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: Bin_ElementRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: Bin_ElementRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "element-removed", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Bin

    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The GstBin base class. Subclasses can access these fields provided
 * the LOCK is taken.
 * @class 
 */
class Bin extends Element {

    // Own properties of Gst-0.10.Gst.Bin

    static name: string
    static $gtype: GObject.GType<Bin>

    // Constructors of Gst-0.10.Gst.Bin

    constructor(config?: Bin_ConstructProps) 
    constructor(name: string) 
    static new(name: string): Bin
    _init(config?: Bin_ConstructProps): void
}

interface Buffer {

    // Own fields of Gst-0.10.Gst.Buffer

    miniObject: MiniObject
    data: number
    size: number
    timestamp: ClockTime
    duration: ClockTime
    caps: Caps
    offset: number
    offsetEnd: number
    mallocData: number
    freeFunc: GLib.FreeFunc
    parent: Buffer
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Buffer

    copyMetadata(src: Buffer, flags: BufferCopyFlags): void
    isMetadataWritable(): boolean
    makeMetadataWritable(): Buffer
    getCaps(): Caps
    setCaps(caps: Caps): void
    createSub(offset: number, size: number): Buffer
    isSpanFast(buf2: Buffer): boolean
    span(offset: number, buf2: Buffer, len: number): Buffer
    merge(buf2: Buffer): Buffer
    join(buf2: Buffer): Buffer
    stamp(src: Buffer): void
}

/**
 * The structure of a #GstBuffer. Use the associated macros to access the public
 * variables.
 * @class 
 */
class Buffer extends MiniObject {

    // Own properties of Gst-0.10.Gst.Buffer

    static name: string

    // Constructors of Gst-0.10.Gst.Buffer

    constructor() 
    static new(): Buffer

    // Overloads of new

    static new(type: GObject.GType): MiniObject
    static newAndAlloc(size: number): Buffer
    static tryNewAndAlloc(size: number): Buffer
}

interface BufferList {

    // Owm methods of Gst-0.10.Gst.BufferList

    nGroups(): number
    foreach(func: BufferListFunc, userData: object): void
    get(group: number, idx: number): Buffer
    iterate(): BufferListIterator
}

class BufferList extends MiniObject {

    // Own properties of Gst-0.10.Gst.BufferList

    static name: string

    // Constructors of Gst-0.10.Gst.BufferList

    constructor() 
    static new(): BufferList

    // Overloads of new

    static new(type: GObject.GType): MiniObject
}

interface Bus_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `message`
 */
interface Bus_MessageSignalCallback {
    (object: Message): void
}

/**
 * Signal callback interface for `sync-message`
 */
interface Bus_SyncMessageSignalCallback {
    (object: Message): void
}

interface Bus {

    // Own fields of Gst-0.10.Gst.Bus

    object: Object
    queue: GLib.Queue
    queueLock: GLib.Mutex
    syncHandler: BusSyncHandler
    syncHandlerData: object
    signalWatchId: number
    numSignalWatchers: number
    priv: BusPrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Bus

    post(message: Message): boolean
    havePending(): boolean
    peek(): Message
    pop(): Message
    popFiltered(types: MessageType): Message
    timedPop(timeout: ClockTime): Message
    timedPopFiltered(timeout: ClockTime, types: MessageType): Message
    setFlushing(flushing: boolean): void
    setSyncHandler(func: BusSyncHandler, data: object): void
    createWatch(): GLib.Source
    addWatchFull(priority: number, func: BusFunc, userData: object): number
    addWatch(func: BusFunc, userData: object): number
    poll(events: MessageType, timeout: ClockTimeDiff): Message
    asyncSignalFunc(message: Message, data: object): boolean
    syncSignalHandler(message: Message, data: object): BusSyncReply
    addSignalWatch(): void
    addSignalWatchFull(priority: number): void
    removeSignalWatch(): void
    enableSyncMessageEmission(): void
    disableSyncMessageEmission(): void

    // Own signals of Gst-0.10.Gst.Bus

    connect(sigName: "message", callback: Bus_MessageSignalCallback): number
    on(sigName: "message", callback: Bus_MessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: Bus_MessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: Bus_MessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "message", ...args: any[]): void
    connect(sigName: "sync-message", callback: Bus_SyncMessageSignalCallback): number
    on(sigName: "sync-message", callback: Bus_SyncMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync-message", callback: Bus_SyncMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync-message", callback: Bus_SyncMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sync-message", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Bus

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstBus data structure.
 * @class 
 */
class Bus extends Object {

    // Own properties of Gst-0.10.Gst.Bus

    static name: string
    static $gtype: GObject.GType<Bus>

    // Constructors of Gst-0.10.Gst.Bus

    constructor(config?: Bus_ConstructProps) 
    constructor() 
    static new(): Bus
    _init(config?: Bus_ConstructProps): void
}

interface Clock_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.Clock

    stats?: boolean | null
    timeout?: number | null
    windowSize?: number | null
    windowThreshold?: number | null
}

interface Clock {

    // Own fields of Gst-0.10.Gst.Clock

    object: Object
    slaveLock: GLib.Mutex
    internalCalibration: ClockTime
    externalCalibration: ClockTime
    rateNumerator: ClockTime
    rateDenominator: ClockTime
    lastTime: ClockTime
    entries: object[]
    entriesChanged: GLib.Cond
    resolution: ClockTime
    stats: boolean
    master: Clock
    filling: boolean
    windowSize: number
    windowThreshold: number
    timeIndex: number
    timeout: ClockTime
    times: ClockTime
    clockid: ClockID

    // Owm methods of Gst-0.10.Gst.Clock

    setResolution(resolution: ClockTime): ClockTime
    getResolution(): ClockTime
    getTime(): ClockTime
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    getCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master: Clock): boolean
    getMaster(): Clock
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    getInternalTime(): ClockTime
    adjustUnlocked(internal: ClockTime): ClockTime
    unadjustUnlocked(external: ClockTime): ClockTime
    newSingleShotId(time: ClockTime): ClockID
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID

    // Class property signals of Gst-0.10.Gst.Clock

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstClock base structure. The values of this structure are
 * protected for subclasses, use the methods to use the #GstClock.
 * @class 
 */
class Clock extends Object {

    // Own properties of Gst-0.10.Gst.Clock

    static name: string
    static $gtype: GObject.GType<Clock>

    // Constructors of Gst-0.10.Gst.Clock

    constructor(config?: Clock_ConstructProps) 
    _init(config?: Clock_ConstructProps): void
    static idRef(id: ClockID): ClockID
    static idUnref(id: ClockID): void
    static idCompareFunc(id1: object, id2: object): number
    static idGetTime(id: ClockID): ClockTime
    static idWait(id: ClockID, jitter: ClockTimeDiff): ClockReturn
    static idWaitAsync(id: ClockID, func: ClockCallback): ClockReturn
    static idWaitAsyncFull(id: ClockID, func: ClockCallback): ClockReturn
    static idUnschedule(id: ClockID): void
}

interface CollectPads_ConstructProps extends Object_ConstructProps {
}

interface CollectPads {

    // Own fields of Gst-0.10.Gst.CollectPads

    object: Object
    data: object[]
    cookie: number
    cond: GLib.Cond
    func: CollectPadsFunction
    userData: object
    numpads: number
    queuedpads: number
    eospads: number
    started: boolean

    // Owm methods of Gst-0.10.Gst.CollectPads

    setFunction(func: CollectPadsFunction, userData: object): void
    setClipFunction(clipfunc: CollectPadsClipFunction, userData: object): void
    addPad(pad: Pad, size: number): CollectData
    addPadFull(pad: Pad, size: number, destroyNotify: CollectDataDestroyNotify): CollectData
    removePad(pad: Pad): boolean
    isActive(pad: Pad): boolean
    collect(): FlowReturn
    collectRange(offset: number, length: number): FlowReturn
    start(): void
    stop(): void
    setFlushing(flushing: boolean): void
    peek(data: CollectData): Buffer
    pop(data: CollectData): Buffer
    available(): number
    read(data: CollectData, size: number): [ /* returnType */ number, /* bytes */ number ]
    readBuffer(data: CollectData, size: number): Buffer
    takeBuffer(data: CollectData, size: number): Buffer
    flush(data: CollectData, size: number): number

    // Class property signals of Gst-0.10.Gst.CollectPads

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Collectpads object.
 * Note that `data` doesn't contain the complete #GstCollectData list
 * at all times and should not be used for iterating them.
 * @class 
 */
class CollectPads extends Object {

    // Own properties of Gst-0.10.Gst.CollectPads

    static name: string
    static $gtype: GObject.GType<CollectPads>

    // Constructors of Gst-0.10.Gst.CollectPads

    constructor(config?: CollectPads_ConstructProps) 
    constructor() 
    static new(): CollectPads
    _init(config?: CollectPads_ConstructProps): void
}

interface DataQueue_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `empty`
 */
interface DataQueue_EmptySignalCallback {
    (): void
}

/**
 * Signal callback interface for `full`
 */
interface DataQueue_FullSignalCallback {
    (): void
}

interface DataQueue {

    // Own properties of Gst-0.10.Gst.DataQueue

    readonly currentLevelBytes: number
    readonly currentLevelTime: number
    readonly currentLevelVisible: number

    // Own fields of Gst-0.10.Gst.DataQueue

    object: GObject.Object
    queue: GLib.Queue
    curLevel: DataQueueSize
    checkfull: DataQueueCheckFullFunction
    checkdata: object
    qlock: GLib.Mutex
    itemAdd: GLib.Cond
    itemDel: GLib.Cond
    flushing: boolean
    fullcallback: DataQueueFullCallback
    emptycallback: DataQueueEmptyCallback
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.DataQueue

    push(item: DataQueueItem): boolean
    pop(item: DataQueueItem): boolean
    flush(): void
    setFlushing(flushing: boolean): void
    dropHead(type: GObject.GType): boolean
    isFull(): boolean
    isEmpty(): boolean
    getLevel(level: DataQueueSize): void
    limitsChanged(): void

    // Own signals of Gst-0.10.Gst.DataQueue

    connect(sigName: "empty", callback: DataQueue_EmptySignalCallback): number
    on(sigName: "empty", callback: DataQueue_EmptySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: DataQueue_EmptySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: DataQueue_EmptySignalCallback): NodeJS.EventEmitter
    emit(sigName: "empty", ...args: any[]): void
    connect(sigName: "full", callback: DataQueue_FullSignalCallback): number
    on(sigName: "full", callback: DataQueue_FullSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: DataQueue_FullSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: DataQueue_FullSignalCallback): NodeJS.EventEmitter
    emit(sigName: "full", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.DataQueue

    connect(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-bytes", ...args: any[]): void
    connect(sigName: "notify::current-level-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-time", ...args: any[]): void
    connect(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstDataQueue structure.
 * @class 
 */
class DataQueue extends GObject.Object {

    // Own properties of Gst-0.10.Gst.DataQueue

    static name: string
    static $gtype: GObject.GType<DataQueue>

    // Constructors of Gst-0.10.Gst.DataQueue

    constructor(config?: DataQueue_ConstructProps) 
    constructor(checkfull: DataQueueCheckFullFunction) 
    static new(checkfull: DataQueueCheckFullFunction): DataQueue
    static newFull(checkfull: DataQueueCheckFullFunction, fullcallback: DataQueueFullCallback, emptycallback: DataQueueEmptyCallback): DataQueue
    _init(config?: DataQueue_ConstructProps): void
}

interface Element_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `no-more-pads`
 */
interface Element_NoMorePadsSignalCallback {
    (): void
}

/**
 * Signal callback interface for `pad-added`
 */
interface Element_PadAddedSignalCallback {
    (object: Pad): void
}

/**
 * Signal callback interface for `pad-removed`
 */
interface Element_PadRemovedSignalCallback {
    (object: Pad): void
}

interface Element {

    // Own fields of Gst-0.10.Gst.Element

    object: Object
    stateLock: any
    stateCond: GLib.Cond
    stateCookie: number
    currentState: State
    nextState: State
    pendingState: State
    lastReturn: StateChangeReturn
    bus: Bus
    clock: Clock
    baseTime: ClockTimeDiff
    numpads: number
    pads: object[]
    numsrcpads: number
    srcpads: object[]
    numsinkpads: number
    sinkpads: object[]
    padsCookie: number

    // Owm methods of Gst-0.10.Gst.Element

    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.GType): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void

    // Own signals of Gst-0.10.Gst.Element

    connect(sigName: "no-more-pads", callback: Element_NoMorePadsSignalCallback): number
    on(sigName: "no-more-pads", callback: Element_NoMorePadsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: Element_NoMorePadsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: Element_NoMorePadsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "no-more-pads", ...args: any[]): void
    connect(sigName: "pad-added", callback: Element_PadAddedSignalCallback): number
    on(sigName: "pad-added", callback: Element_PadAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: Element_PadAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: Element_PadAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pad-added", ...args: any[]): void
    connect(sigName: "pad-removed", callback: Element_PadRemovedSignalCallback): number
    on(sigName: "pad-removed", callback: Element_PadRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: Element_PadRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: Element_PadRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pad-removed", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Element

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * GStreamer element abstract base class.
 * @class 
 */
class Element extends Object {

    // Own properties of Gst-0.10.Gst.Element

    static name: string
    static $gtype: GObject.GType<Element>

    // Constructors of Gst-0.10.Gst.Element

    constructor(config?: Element_ConstructProps) 
    _init(config?: Element_ConstructProps): void
    static register(plugin: Plugin, name: string, rank: number, type: GObject.GType): boolean
    static makeFromUri(type: URIType, uri: string, elementname: string): Element
    static stateGetName(state: State): string
    static stateChangeReturnGetName(stateRet: StateChangeReturn): string
}

interface ElementFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface ElementFactory {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.ElementFactory

    parent: PluginFeature
    type: GObject.GType
    details: ElementDetails
    staticpadtemplates: object[]
    numpadtemplates: number
    uriType: number
    uriProtocols: string
    interfaces: object[]
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.ElementFactory

    getElementType(): GObject.GType
    getLongname(): string
    getKlass(): string
    getDescription(): string
    getAuthor(): string
    getNumPadTemplates(): number
    getUriType(): number
    getUriProtocols(): string[]
    hasInterface(interfacename: string): boolean
    create(name: string): Element
    canSrcCaps(caps: Caps): boolean
    canSinkCaps(caps: Caps): boolean

    // Conflicting methods

    setName(...args: any[]): any

    // Class property signals of Gst-0.10.Gst.ElementFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstElementFactory data structure.
 * @class 
 */
class ElementFactory extends PluginFeature {

    // Own properties of Gst-0.10.Gst.ElementFactory

    static name: string
    static $gtype: GObject.GType<ElementFactory>

    // Constructors of Gst-0.10.Gst.ElementFactory

    constructor(config?: ElementFactory_ConstructProps) 
    _init(config?: ElementFactory_ConstructProps): void
    static find(name: string): ElementFactory
    static make(factoryname: string, name: string): Element
}

interface Event {

    // Own fields of Gst-0.10.Gst.Event

    miniObject: MiniObject
    type: EventType
    timestamp: number
    src: Object
    structure: Structure

    // Owm methods of Gst-0.10.Gst.Event

    getStructure(): Structure
    hasName(name: string): boolean
    getSeqnum(): number
    setSeqnum(seqnum: number): void
    parseNewSegment(format: Format): [ /* update */ boolean, /* rate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parseNewSegmentFull(format: Format): [ /* update */ boolean, /* rate */ number, /* appliedRate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parseTag(taglist: TagList): void
    parseBufferSize(format: Format): [ /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parseQos(diff: ClockTimeDiff, timestamp: ClockTime): /* proportion */ number
    parseSeek(format: Format, flags: SeekFlags, startType: SeekType, stopType: SeekType): [ /* rate */ number, /* start */ number, /* stop */ number ]
    parseLatency(latency: ClockTime): void
    parseStep(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    parseSinkMessage(msg: Message): void
}

/**
 * A #GstEvent.
 * @class 
 */
class Event extends MiniObject {

    // Own properties of Gst-0.10.Gst.Event

    static name: string

    // Constructors of Gst-0.10.Gst.Event

    static newCustom(type: EventType, structure: Structure): Event
    static newFlushStart(): Event
    static newFlushStop(): Event
    static newEos(): Event
    static newNewSegment(update: boolean, rate: number, format: Format, start: number, stop: number, position: number): Event
    static newNewSegmentFull(update: boolean, rate: number, appliedRate: number, format: Format, start: number, stop: number, position: number): Event
    static newTag(taglist: TagList): Event
    static newBufferSize(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static newQos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static newSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): Event
    static newNavigation(structure: Structure): Event
    static newLatency(latency: ClockTime): Event
    static newStep(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static newSinkMessage(msg: Message): Event
    static typeGetName(type: EventType): string
    static typeToQuark(type: EventType): GLib.Quark
    static typeGetFlags(type: EventType): EventTypeFlags
}

interface GParamSpecMiniObject_ConstructProps extends GObject.Object_ConstructProps {
}

interface GParamSpecMiniObject {

    // Class property signals of Gst-0.10.Gst.GParamSpecMiniObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GParamSpecMiniObject extends GObject.Object {

    // Own properties of Gst-0.10.Gst.GParamSpecMiniObject

    static name: string
    static $gtype: GObject.GType<GParamSpecMiniObject>

    // Constructors of Gst-0.10.Gst.GParamSpecMiniObject

    constructor(config?: GParamSpecMiniObject_ConstructProps) 
    _init(config?: GParamSpecMiniObject_ConstructProps): void
}

interface GhostPad_ConstructProps extends ProxyPad_ConstructProps {
}

interface GhostPad {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.GhostPad

    pad: ProxyPad
    priv: GhostPadPrivate

    // Owm methods of Gst-0.10.Gst.GhostPad

    getTarget(): Pad
    setTarget(newtarget: Pad): boolean
    construct(): boolean

    // Class property signals of Gst-0.10.Gst.GhostPad

    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGhostPad structure.
 * @class 
 */
class GhostPad extends ProxyPad {

    // Own properties of Gst-0.10.Gst.GhostPad

    static name: string
    static $gtype: GObject.GType<GhostPad>

    // Constructors of Gst-0.10.Gst.GhostPad

    constructor(config?: GhostPad_ConstructProps) 
    constructor(name: string, target: Pad) 
    static new(name: string, target: Pad): GhostPad

    // Overloads of new

    static new(name: string, direction: PadDirection): Pad
    static newNoTarget(name: string, dir: PadDirection): GhostPad
    static newFromTemplate(name: string, target: Pad, templ: PadTemplate): GhostPad

    // Overloads of newFromTemplate

    static newFromTemplate(templ: PadTemplate, name: string): Pad
    static newNoTargetFromTemplate(name: string, templ: PadTemplate): GhostPad
    _init(config?: GhostPad_ConstructProps): void
}

interface Index_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.Index

    resolver?: IndexResolver | null
}

/**
 * Signal callback interface for `entry-added`
 */
interface Index_EntryAddedSignalCallback {
    (object: IndexEntry): void
}

interface Index {

    // Own fields of Gst-0.10.Gst.Index

    object: Object
    groups: object[]
    curgroup: IndexGroup
    maxgroup: number
    method: IndexResolverMethod
    resolver: IndexResolver
    resolverUserData: object
    filter: IndexFilter
    filterUserData: object
    filterUserDataDestroy: GLib.DestroyNotify
    writers: GLib.HashTable
    lastId: number
    resolverUserDataDestroy: GLib.DestroyNotify
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Index

    commit(id: number): void
    getGroup(): number
    newGroup(): number
    setGroup(groupnum: number): boolean
    setCertainty(certainty: IndexCertainty): void
    getCertainty(): IndexCertainty
    setFilter(filter: IndexFilter, userData: object): void
    setFilterFull(filter: IndexFilter, userData: object): void
    setResolver(resolver: IndexResolver, userData: object): void
    setResolverFull(resolver: IndexResolver, userData: object): void
    getWriterId(writer: Object): [ /* returnType */ boolean, /* id */ number ]
    addFormat(id: number, format: Format): IndexEntry
    addAssociationv(id: number, flags: AssocFlags, n: number, list: IndexAssociation): IndexEntry
    addObject(id: number, key: string, type: GObject.GType, object: object): IndexEntry
    addId(id: number, description: string): IndexEntry
    getAssocEntry(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number): IndexEntry
    getAssocEntryFull(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc, userData: object): IndexEntry

    // Own signals of Gst-0.10.Gst.Index

    connect(sigName: "entry-added", callback: Index_EntryAddedSignalCallback): number
    on(sigName: "entry-added", callback: Index_EntryAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "entry-added", callback: Index_EntryAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "entry-added", callback: Index_EntryAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "entry-added", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Index

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstIndex structure.
 * @class 
 */
class Index extends Object {

    // Own properties of Gst-0.10.Gst.Index

    static name: string
    static $gtype: GObject.GType<Index>

    // Constructors of Gst-0.10.Gst.Index

    constructor(config?: Index_ConstructProps) 
    constructor() 
    static new(): Index
    _init(config?: Index_ConstructProps): void
}

interface IndexFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface IndexFactory {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.IndexFactory

    feature: PluginFeature
    longdesc: string
    type: GObject.GType
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.IndexFactory

    destroy(): void
    create(): Index

    // Conflicting methods

    setName(...args: any[]): any

    // Class property signals of Gst-0.10.Gst.IndexFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The GstIndexFactory object
 * @class 
 */
class IndexFactory extends PluginFeature {

    // Own properties of Gst-0.10.Gst.IndexFactory

    static name: string
    static $gtype: GObject.GType<IndexFactory>

    // Constructors of Gst-0.10.Gst.IndexFactory

    constructor(config?: IndexFactory_ConstructProps) 
    constructor(name: string, longdesc: string, type: GObject.GType) 
    static new(name: string, longdesc: string, type: GObject.GType): IndexFactory
    _init(config?: IndexFactory_ConstructProps): void
    static find(name: string): IndexFactory
    static make(name: string): Index
}

interface Message {

    // Own fields of Gst-0.10.Gst.Message

    miniObject: MiniObject
    lock: GLib.Mutex
    cond: GLib.Cond
    type: MessageType
    timestamp: number
    src: Object
    structure: Structure

    // Owm methods of Gst-0.10.Gst.Message

    getSeqnum(): number
    setSeqnum(seqnum: number): void
    parseError(gerror: GLib.Error, debug: string[]): void
    parseWarning(gerror: GLib.Error, debug: string[]): void
    parseInfo(gerror: GLib.Error, debug: string[]): void
    parseTag(tagList: TagList): void
    parseTagFull(pad: Pad, tagList: TagList): void
    parseBuffering(): /* percent */ number
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    parseBufferingStats(mode: BufferingMode): [ /* avgIn */ number, /* avgOut */ number, /* bufferingLeft */ number ]
    parseStateChanged(oldstate: State, newstate: State, pending: State): void
    parseStepDone(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean, /* duration */ number, /* eos */ boolean ]
    parseClockProvide(clock: Clock): /* ready */ boolean
    parseClockLost(clock: Clock): void
    parseNewClock(clock: Clock): void
    parseSegmentStart(format: Format): /* position */ number
    parseSegmentDone(format: Format): /* position */ number
    parseDuration(format: Format): /* duration */ number
    parseAsyncStart(): /* newBaseTime */ boolean
    parseStructureChange(type: StructureChangeType, owner: Element): /* busy */ boolean
    parseStreamStatus(type: StreamStatusType, owner: Element): void
    setStreamStatusObject(object: any): void
    getStreamStatusObject(): any
    parseRequestState(state: State): void
    parseStepStart(format: Format): [ /* active */ boolean, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    setQosValues(jitter: number, proportion: number, quality: number): void
    setQosStats(format: Format, processed: number, dropped: number): void
    parseQos(): [ /* live */ boolean, /* runningTime */ number, /* streamTime */ number, /* timestamp */ number, /* duration */ number ]
    parseQosValues(): [ /* jitter */ number, /* proportion */ number, /* quality */ number ]
    parseQosStats(format: Format): [ /* processed */ number, /* dropped */ number ]
    getStructure(): Structure
}

/**
 * A #GstMessage.
 * @class 
 */
class Message extends MiniObject {

    // Own properties of Gst-0.10.Gst.Message

    static name: string

    // Constructors of Gst-0.10.Gst.Message

    static newEos(src: Object): Message
    static newError(src: Object, error: GLib.Error, debug: string): Message
    static newWarning(src: Object, error: GLib.Error, debug: string): Message
    static newInfo(src: Object, error: GLib.Error, debug: string): Message
    static newTag(src: Object, tagList: TagList): Message
    static newTagFull(src: Object, pad: Pad, tagList: TagList): Message
    static newBuffering(src: Object, percent: number): Message
    static newStateChanged(src: Object, oldstate: State, newstate: State, pending: State): Message
    static newStateDirty(src: Object): Message
    static newStepDone(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static newClockProvide(src: Object, clock: Clock, ready: boolean): Message
    static newClockLost(src: Object, clock: Clock): Message
    static newNewClock(src: Object, clock: Clock): Message
    static newApplication(src: Object, structure: Structure): Message
    static newElement(src: Object, structure: Structure): Message
    static newSegmentStart(src: Object, format: Format, position: number): Message
    static newSegmentDone(src: Object, format: Format, position: number): Message
    static newDuration(src: Object, format: Format, duration: number): Message
    static newLatency(src: Object): Message
    static newAsyncStart(src: Object, newBaseTime: boolean): Message
    static newAsyncDone(src: Object): Message
    static newStructureChange(src: Object, type: StructureChangeType, owner: Element, busy: boolean): Message
    static newStreamStatus(src: Object, type: StreamStatusType, owner: Element): Message
    static newRequestState(src: Object, state: State): Message
    static newStepStart(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static newQos(src: Object, live: boolean, runningTime: number, streamTime: number, timestamp: number, duration: number): Message
    static newCustom(type: MessageType, src: Object, structure: Structure): Message
    static typeGetName(type: MessageType): string
    static typeToQuark(type: MessageType): GLib.Quark
}

interface MiniObject {

    // Own fields of Gst-0.10.Gst.MiniObject

    instance: GObject.TypeInstance
    refcount: number
    flags: number
    gstReserved: object

    // Owm methods of Gst-0.10.Gst.MiniObject

    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
}

/**
 * Base class for refcounted lightweight objects.
 * @class 
 */
class MiniObject {

    // Own properties of Gst-0.10.Gst.MiniObject

    static name: string

    // Constructors of Gst-0.10.Gst.MiniObject

    constructor(type: GObject.GType) 
    static new(type: GObject.GType): MiniObject
}

interface Object_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.Object

    name?: string | null
}

/**
 * Signal callback interface for `deep-notify`
 */
interface Object_DeepNotifySignalCallback {
    (object: Object, p0: GObject.ParamSpec): void
}

/**
 * Signal callback interface for `object-saved`
 */
interface Object_ObjectSavedSignalCallback {
    (object: object): void
}

/**
 * Signal callback interface for `parent-set`
 */
interface Object_ParentSetSignalCallback {
    (object: Object): void
}

/**
 * Signal callback interface for `parent-unset`
 */
interface Object_ParentUnsetSignalCallback {
    (object: Object): void
}

interface Object {

    // Own fields of Gst-0.10.Gst.Object

    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string
    namePrefix: string
    parent: Object
    flags: number
    gstReserved: object

    // Owm methods of Gst-0.10.Gst.Object

    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void

    // Own signals of Gst-0.10.Gst.Object

    connect(sigName: "deep-notify", callback: Object_DeepNotifySignalCallback): number
    on(sigName: "deep-notify", callback: Object_DeepNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: Object_DeepNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: Object_DeepNotifySignalCallback): NodeJS.EventEmitter
    emit(sigName: "deep-notify", p0: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "object-saved", callback: Object_ObjectSavedSignalCallback): number
    on(sigName: "object-saved", callback: Object_ObjectSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: Object_ObjectSavedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: Object_ObjectSavedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "object-saved", ...args: any[]): void
    connect(sigName: "parent-set", callback: Object_ParentSetSignalCallback): number
    on(sigName: "parent-set", callback: Object_ParentSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: Object_ParentSetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: Object_ParentSetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "parent-set", ...args: any[]): void
    connect(sigName: "parent-unset", callback: Object_ParentUnsetSignalCallback): number
    on(sigName: "parent-unset", callback: Object_ParentUnsetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: Object_ParentUnsetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: Object_ParentUnsetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "parent-unset", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Object

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * GStreamer base object class.
 * @class 
 */
class Object extends GObject.Object {

    // Own properties of Gst-0.10.Gst.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Gst-0.10.Gst.Object

    constructor(config?: Object_ConstructProps) 
    _init(config?: Object_ConstructProps): void
    static defaultDeepNotify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excludedProps: string[]): void
    static ref(object: object): object
    static unref(object: object): void
    static refSink(object: object): void
    static sink(object: object): void
}

interface Pad_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.Pad

    direction?: PadDirection | null
    template?: PadTemplate | null
}

/**
 * Signal callback interface for `have-data`
 */
interface Pad_HaveDataSignalCallback {
    (object: MiniObject): boolean
}

/**
 * Signal callback interface for `linked`
 */
interface Pad_LinkedSignalCallback {
    (object: Pad): void
}

/**
 * Signal callback interface for `request-link`
 */
interface Pad_RequestLinkSignalCallback {
    (): void
}

/**
 * Signal callback interface for `unlinked`
 */
interface Pad_UnlinkedSignalCallback {
    (object: Pad): void
}

interface Pad {

    // Own properties of Gst-0.10.Gst.Pad

    template: PadTemplate

    // Own fields of Gst-0.10.Gst.Pad

    object: Object
    elementPrivate: object
    padtemplate: PadTemplate
    direction: PadDirection
    streamRecLock: any
    task: Task
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    blockCond: GLib.Cond
    blockCallback: PadBlockCallback
    blockData: object
    caps: Caps
    getcapsfunc: PadGetCapsFunction
    setcapsfunc: PadSetCapsFunction
    acceptcapsfunc: PadAcceptCapsFunction
    fixatecapsfunc: PadFixateCapsFunction
    activatefunc: PadActivateFunction
    activatepushfunc: PadActivateModeFunction
    activatepullfunc: PadActivateModeFunction
    linkfunc: PadLinkFunction
    unlinkfunc: PadUnlinkFunction
    peer: Pad
    schedPrivate: object
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    doBufferSignals: number
    doEventSignals: number
    iterintlinkfunc: PadIterIntLinkFunction
    blockDestroyData: GLib.DestroyNotify

    // Owm methods of Gst-0.10.Gst.Pad

    getDirection(): PadDirection
    setActive(active: boolean): boolean
    isActive(): boolean
    activatePull(active: boolean): boolean
    activatePush(active: boolean): boolean
    setBlocked(blocked: boolean): boolean
    setBlockedAsync(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    setBlockedAsyncFull(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    setElementPrivate(priv: object): void
    getElementPrivate(): object
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    isLinked(): boolean
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): boolean
    setCaps(caps: Caps): boolean
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): boolean
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): boolean
    pullRange(offset: number, size: number, buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    eventDefault(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: number, size: number, buffer: Buffer): FlowReturn
    sendEvent(event: Event): boolean
    startTask(func: TaskFunction, data: object): boolean
    pauseTask(): boolean
    stopTask(): boolean
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): boolean
    peerQuery(query: Query): boolean
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): boolean
    getParentElement(): Element
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryPeerPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryPeerDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryPeerConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    addDataProbe(handler: GObject.Callback, data: object): number
    addDataProbeFull(handler: GObject.Callback, data: object): number
    removeDataProbe(handlerId: number): void
    addEventProbe(handler: GObject.Callback, data: object): number
    addEventProbeFull(handler: GObject.Callback, data: object): number
    removeEventProbe(handlerId: number): void
    addBufferProbe(handler: GObject.Callback, data: object): number
    addBufferProbeFull(handler: GObject.Callback, data: object): number
    removeBufferProbe(handlerId: number): void

    // Own signals of Gst-0.10.Gst.Pad

    connect(sigName: "have-data", callback: Pad_HaveDataSignalCallback): number
    on(sigName: "have-data", callback: Pad_HaveDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: Pad_HaveDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: Pad_HaveDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "have-data", ...args: any[]): void
    connect(sigName: "linked", callback: Pad_LinkedSignalCallback): number
    on(sigName: "linked", callback: Pad_LinkedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: Pad_LinkedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: Pad_LinkedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "linked", ...args: any[]): void
    connect(sigName: "request-link", callback: Pad_RequestLinkSignalCallback): number
    on(sigName: "request-link", callback: Pad_RequestLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: Pad_RequestLinkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: Pad_RequestLinkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-link", ...args: any[]): void
    connect(sigName: "unlinked", callback: Pad_UnlinkedSignalCallback): number
    on(sigName: "unlinked", callback: Pad_UnlinkedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: Pad_UnlinkedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: Pad_UnlinkedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unlinked", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Pad

    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GstPad structure. Use the functions to update the variables.
 * @class 
 */
class Pad extends Object {

    // Own properties of Gst-0.10.Gst.Pad

    static name: string
    static $gtype: GObject.GType<Pad>

    // Constructors of Gst-0.10.Gst.Pad

    constructor(config?: Pad_ConstructProps) 
    constructor(name: string, direction: PadDirection) 
    static new(name: string, direction: PadDirection): Pad
    static newFromTemplate(templ: PadTemplate, name: string): Pad
    static newFromStaticTemplate(templ: StaticPadTemplate, name: string): Pad
    _init(config?: Pad_ConstructProps): void
    static loadAndLink(self: libxml2.NodePtr, parent: Object): void
}

interface PadTemplate_ConstructProps extends Object_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.PadTemplate

    caps?: Caps | null
    direction?: PadDirection | null
    nameTemplate?: string | null
    presence?: PadPresence | null
}

/**
 * Signal callback interface for `pad-created`
 */
interface PadTemplate_PadCreatedSignalCallback {
    (object: Pad): void
}

interface PadTemplate {

    // Own fields of Gst-0.10.Gst.PadTemplate

    object: Object
    nameTemplate: string
    direction: PadDirection
    presence: PadPresence
    caps: Caps
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.PadTemplate

    getCaps(): Caps
    padCreated(pad: Pad): void

    // Own signals of Gst-0.10.Gst.PadTemplate

    connect(sigName: "pad-created", callback: PadTemplate_PadCreatedSignalCallback): number
    on(sigName: "pad-created", callback: PadTemplate_PadCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-created", callback: PadTemplate_PadCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-created", callback: PadTemplate_PadCreatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pad-created", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.PadTemplate

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The padtemplate object.
 * @class 
 */
class PadTemplate extends Object {

    // Own properties of Gst-0.10.Gst.PadTemplate

    static name: string
    static $gtype: GObject.GType<PadTemplate>

    // Constructors of Gst-0.10.Gst.PadTemplate

    constructor(config?: PadTemplate_ConstructProps) 
    constructor(nameTemplate: string, direction: PadDirection, presence: PadPresence, caps: Caps) 
    static new(nameTemplate: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    _init(config?: PadTemplate_ConstructProps): void
}

interface ParamFraction_ConstructProps extends GObject.Object_ConstructProps {
}

interface ParamFraction {

    // Class property signals of Gst-0.10.Gst.ParamFraction

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ParamFraction extends GObject.Object {

    // Own properties of Gst-0.10.Gst.ParamFraction

    static name: string
    static $gtype: GObject.GType<ParamFraction>

    // Constructors of Gst-0.10.Gst.ParamFraction

    constructor(config?: ParamFraction_ConstructProps) 
    _init(config?: ParamFraction_ConstructProps): void
}

interface Pipeline_ConstructProps extends ChildProxy_ConstructProps, Bin_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.Pipeline

    autoFlushBus?: boolean | null
    delay?: number | null
}

interface Pipeline extends ChildProxy {

    // Own properties of Gst-0.10.Gst.Pipeline

    autoFlushBus: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.Pipeline

    bin: Bin
    fixedClock: Clock
    streamTime: ClockTime
    delay: ClockTime
    priv: PipelinePrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Pipeline

    getBus(): Bus
    setNewStreamTime(time: ClockTime): void
    getLastStreamTime(): ClockTime
    useClock(clock: Clock): void
    setClock(clock: Clock): boolean
    getClock(): Clock
    autoClock(): void
    setDelay(delay: ClockTime): void
    getDelay(): ClockTime
    setAutoFlushBus(autoFlush: boolean): void
    getAutoFlushBus(): boolean

    // Class property signals of Gst-0.10.Gst.Pipeline

    connect(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-flush-bus", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GstPipeline structure.
 * @class 
 */
class Pipeline extends Bin {

    // Own properties of Gst-0.10.Gst.Pipeline

    static name: string
    static $gtype: GObject.GType<Pipeline>

    // Constructors of Gst-0.10.Gst.Pipeline

    constructor(config?: Pipeline_ConstructProps) 
    constructor(name: string) 
    static new(name: string): Pipeline

    // Overloads of new

    static new(name: string): Bin
    _init(config?: Pipeline_ConstructProps): void
}

interface Plugin_ConstructProps extends Object_ConstructProps {
}

interface Plugin {

    // Own fields of Gst-0.10.Gst.Plugin

    object: Object
    desc: PluginDesc
    origDesc: PluginDesc
    flags: any
    filename: string
    basename: string
    module: GModule.Module
    fileSize: number
    fileMtime: number
    registered: boolean
    priv: PluginPrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Plugin

    getName(): string
    getDescription(): string
    getFilename(): string
    getVersion(): string
    getLicense(): string
    getSource(): string
    getPackage(): string
    getOrigin(): string
    getCacheData(): Structure
    setCacheData(cacheData: Structure): void
    getModule(): GModule.Module
    isLoaded(): boolean
    nameFilter(name: string): boolean
    load(): Plugin
    addDependency(envVars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void
    addDependencySimple(envVars: string, paths: string, names: string, flags: PluginDependencyFlags): void

    // Class property signals of Gst-0.10.Gst.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The plugin object
 * @class 
 */
class Plugin extends Object {

    // Own properties of Gst-0.10.Gst.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Gst-0.10.Gst.Plugin

    constructor(config?: Plugin_ConstructProps) 
    _init(config?: Plugin_ConstructProps): void
    static registerStatic(majorVersion: number, minorVersion: number, name: string, description: string, initFunc: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static registerStaticFull(majorVersion: number, minorVersion: number, name: string, description: string, initFullFunc: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string, userData: object): boolean
    static loadFile(filename: string): Plugin
    static loadByName(name: string): Plugin
}

interface PluginFeature_ConstructProps extends Object_ConstructProps {
}

interface PluginFeature {

    // Own fields of Gst-0.10.Gst.PluginFeature

    object: Object
    loaded: boolean
    name: string
    rank: number
    pluginName: string
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.PluginFeature

    load(): PluginFeature
    typeNameFilter(data: TypeNameData): boolean
    setRank(rank: number): void
    setName(name: string): void

    // Overloads of setName

    setName(name: string): boolean
    setName(...args: any[]): any
    setName(args_or_name: any[] | string): void | boolean | any
    getRank(): number
    getName(): string
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean

    // Class property signals of Gst-0.10.Gst.PluginFeature

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstPluginFeature structure.
 * @class 
 */
class PluginFeature extends Object {

    // Own properties of Gst-0.10.Gst.PluginFeature

    static name: string
    static $gtype: GObject.GType<PluginFeature>

    // Constructors of Gst-0.10.Gst.PluginFeature

    constructor(config?: PluginFeature_ConstructProps) 
    _init(config?: PluginFeature_ConstructProps): void
}

interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}

interface ProxyPad {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.ProxyPad

    pad: Pad
    priv: ProxyPadPrivate

    // Class property signals of Gst-0.10.Gst.ProxyPad

    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ProxyPad extends Pad {

    // Own properties of Gst-0.10.Gst.ProxyPad

    static name: string
    static $gtype: GObject.GType<ProxyPad>

    // Constructors of Gst-0.10.Gst.ProxyPad

    constructor(config?: ProxyPad_ConstructProps) 
    _init(config?: ProxyPad_ConstructProps): void
}

interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}

interface PushSrc {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.PushSrc

    parent: BaseSrc
    gstReserved: any[]

    // Class property signals of Gst-0.10.Gst.PushSrc

    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (...args: any[]) => void): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstPushSrc data structure.
 * @class 
 */
class PushSrc extends BaseSrc {

    // Own properties of Gst-0.10.Gst.PushSrc

    static name: string
    static $gtype: GObject.GType<PushSrc>

    // Constructors of Gst-0.10.Gst.PushSrc

    constructor(config?: PushSrc_ConstructProps) 
    _init(config?: PushSrc_ConstructProps): void
}

interface Query {

    // Own fields of Gst-0.10.Gst.Query

    miniObject: MiniObject
    type: QueryType
    structure: Structure
    gstReserved: object

    // Owm methods of Gst-0.10.Gst.Query

    setPosition(format: Format, cur: number): void
    parsePosition(format: Format): /* cur */ number
    setDuration(format: Format, duration: number): void
    parseDuration(format: Format): /* duration */ number
    setLatency(live: boolean, minLatency: ClockTime, maxLatency: ClockTime): void
    parseLatency(minLatency: ClockTime, maxLatency: ClockTime): /* live */ boolean
    setConvert(srcFormat: Format, srcValue: number, destFormat: Format, destValue: number): void
    parseConvert(srcFormat: Format, destFormat: Format): [ /* srcValue */ number, /* destValue */ number ]
    setSegment(rate: number, format: Format, startValue: number, stopValue: number): void
    parseSegment(format: Format): [ /* rate */ number, /* startValue */ number, /* stopValue */ number ]
    getStructure(): Structure
    setSeeking(format: Format, seekable: boolean, segmentStart: number, segmentEnd: number): void
    parseSeeking(format: Format): [ /* seekable */ boolean, /* segmentStart */ number, /* segmentEnd */ number ]
    setFormatsv(nFormats: number, formats: Format): void
    parseFormatsLength(): /* nFormats */ number
    parseFormatsNth(nth: number, format: Format): void
    setBufferingPercent(busy: boolean, percent: number): void
    parseBufferingPercent(): [ /* busy */ boolean, /* percent */ number ]
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    parseBufferingStats(mode: BufferingMode): [ /* avgIn */ number, /* avgOut */ number, /* bufferingLeft */ number ]
    setBufferingRange(format: Format, start: number, stop: number, estimatedTotal: number): void
    parseBufferingRange(format: Format): [ /* start */ number, /* stop */ number, /* estimatedTotal */ number ]
    parseUri(uri: string[]): void
    setUri(uri: string): void
}

/**
 * The #GstQuery structure.
 * @class 
 */
class Query extends MiniObject {

    // Own properties of Gst-0.10.Gst.Query

    static name: string

    // Constructors of Gst-0.10.Gst.Query

    static newPosition(format: Format): Query
    static newDuration(format: Format): Query
    static newLatency(): Query
    static newConvert(srcFormat: Format, value: number, destFormat: Format): Query
    static newSegment(format: Format): Query
    static newApplication(type: QueryType, structure: Structure): Query
    static newSeeking(format: Format): Query
    static newFormats(): Query
    static newBuffering(format: Format): Query
    static newUri(): Query
    static typeGetName(query: QueryType): string
    static typeToQuark(query: QueryType): GLib.Quark
    static typeRegister(nick: string, description: string): QueryType
    static typeGetByNick(nick: string): QueryType
    static typesContains(types: QueryType, type: QueryType): boolean
    static typeGetDetails(type: QueryType): QueryTypeDefinition
    static typeIterateDefinitions(): Iterator
}

interface Registry_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `feature-added`
 */
interface Registry_FeatureAddedSignalCallback {
    (object: object): void
}

/**
 * Signal callback interface for `plugin-added`
 */
interface Registry_PluginAddedSignalCallback {
    (object: object): void
}

interface Registry {

    // Own fields of Gst-0.10.Gst.Registry

    object: Object
    plugins: object[]
    features: object[]
    paths: object[]
    cacheFile: number
    featureHash: GLib.HashTable
    basenameHash: GLib.HashTable
    priv: RegistryPrivate
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Registry

    scanPath(path: string): boolean
    addPath(path: string): void
    addPlugin(plugin: Plugin): boolean
    removePlugin(plugin: Plugin): void
    addFeature(feature: PluginFeature): boolean
    removeFeature(feature: PluginFeature): void
    getFeatureListCookie(): number
    findPlugin(name: string): Plugin
    findFeature(name: string, type: GObject.GType): PluginFeature
    lookup(filename: string): Plugin
    lookupFeature(name: string): PluginFeature
    xmlReadCache(location: string): boolean
    xmlWriteCache(location: string): boolean

    // Own signals of Gst-0.10.Gst.Registry

    connect(sigName: "feature-added", callback: Registry_FeatureAddedSignalCallback): number
    on(sigName: "feature-added", callback: Registry_FeatureAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feature-added", callback: Registry_FeatureAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feature-added", callback: Registry_FeatureAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "feature-added", ...args: any[]): void
    connect(sigName: "plugin-added", callback: Registry_PluginAddedSignalCallback): number
    on(sigName: "plugin-added", callback: Registry_PluginAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-added", callback: Registry_PluginAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-added", callback: Registry_PluginAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "plugin-added", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Registry

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstRegistry structure.
 * @class 
 */
class Registry extends Object {

    // Own properties of Gst-0.10.Gst.Registry

    static name: string
    static $gtype: GObject.GType<Registry>

    // Constructors of Gst-0.10.Gst.Registry

    constructor(config?: Registry_ConstructProps) 
    _init(config?: Registry_ConstructProps): void
    static getDefault(): Registry
    static forkIsEnabled(): boolean
    static forkSetEnabled(enabled: boolean): void
}

interface SystemClock_ConstructProps extends Clock_ConstructProps {

    // Own constructor properties of Gst-0.10.Gst.SystemClock

    clockType?: ClockType | null
}

interface SystemClock {

    // Own properties of Gst-0.10.Gst.SystemClock

    clockType: ClockType

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.SystemClock

    clock: Clock
    thread: GLib.Thread
    stopping: boolean
    priv: SystemClockPrivate
    gstReserved: any[]

    // Class property signals of Gst-0.10.Gst.SystemClock

    connect(sigName: "notify::clock-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The default implementation of a #GstClock that uses the system time.
 * @class 
 */
class SystemClock extends Clock {

    // Own properties of Gst-0.10.Gst.SystemClock

    static name: string
    static $gtype: GObject.GType<SystemClock>

    // Constructors of Gst-0.10.Gst.SystemClock

    constructor(config?: SystemClock_ConstructProps) 
    _init(config?: SystemClock_ConstructProps): void
    static obtain(): Clock
}

interface Task_ConstructProps extends Object_ConstructProps {
}

interface Task {

    // Own fields of Gst-0.10.Gst.Task

    object: Object
    state: TaskState
    cond: GLib.Cond
    lock: any
    func: TaskFunction
    data: object
    running: boolean
    priv: TaskPrivate

    // Owm methods of Gst-0.10.Gst.Task

    setLock(mutex: any): void
    setPriority(priority: any): void
    getPool(): TaskPool
    setPool(pool: TaskPool): void
    setThreadCallbacks(callbacks: TaskThreadCallbacks, userData: object, notify: GLib.DestroyNotify): void
    getState(): TaskState
    setState(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    pause(): boolean
    join(): boolean

    // Class property signals of Gst-0.10.Gst.Task

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GstTask object.
 * @class 
 */
class Task extends Object {

    // Own properties of Gst-0.10.Gst.Task

    static name: string
    static $gtype: GObject.GType<Task>

    // Constructors of Gst-0.10.Gst.Task

    constructor(config?: Task_ConstructProps) 
    _init(config?: Task_ConstructProps): void
    static cleanupAll(): void
    static create(func: TaskFunction): Task
}

interface TaskPool_ConstructProps extends Object_ConstructProps {
}

interface TaskPool {

    // Own fields of Gst-0.10.Gst.TaskPool

    object: Object
    pool: GLib.ThreadPool
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.TaskPool

    prepare(): void
    push(func: TaskPoolFunction, userData: object): object
    join(id: object): void
    cleanup(): void

    // Class property signals of Gst-0.10.Gst.TaskPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GstTaskPool object.
 * @class 
 */
class TaskPool extends Object {

    // Own properties of Gst-0.10.Gst.TaskPool

    static name: string
    static $gtype: GObject.GType<TaskPool>

    // Constructors of Gst-0.10.Gst.TaskPool

    constructor(config?: TaskPool_ConstructProps) 
    constructor() 
    static new(): TaskPool
    _init(config?: TaskPool_ConstructProps): void
}

interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}

interface TypeFindFactory {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.TypeFindFactory

    feature: PluginFeature
    function_: TypeFindFunction
    extensions: string
    caps: Caps
    userData: object
    userDataNotify: GLib.DestroyNotify
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.TypeFindFactory

    getExtensions(): string[]
    getCaps(): Caps
    callFunction(find: TypeFind): void

    // Conflicting methods

    setName(...args: any[]): any

    // Class property signals of Gst-0.10.Gst.TypeFindFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Object that stores information about a typefind function.
 * @class 
 */
class TypeFindFactory extends PluginFeature {

    // Own properties of Gst-0.10.Gst.TypeFindFactory

    static name: string
    static $gtype: GObject.GType<TypeFindFactory>

    // Constructors of Gst-0.10.Gst.TypeFindFactory

    constructor(config?: TypeFindFactory_ConstructProps) 
    _init(config?: TypeFindFactory_ConstructProps): void
}

interface XML_ConstructProps extends Object_ConstructProps {
}

/**
 * Signal callback interface for `object-loaded`
 */
interface XML_ObjectLoadedSignalCallback {
    (object: Object, p0: object): void
}

interface XML {

    // Own fields of Gst-0.10.Gst.XML

    object: Object
    topelements: object[]
    ns: libxml2.NsPtr
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.XML

    parseDoc(doc: libxml2.DocPtr, root: any[]): boolean
    parseFile(fname: any[], root: any[]): boolean
    parseMemory(buffer: any[], size: number, root: string): boolean
    getElement(name: any[]): Element

    // Own signals of Gst-0.10.Gst.XML

    connect(sigName: "object-loaded", callback: XML_ObjectLoadedSignalCallback): number
    on(sigName: "object-loaded", callback: XML_ObjectLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-loaded", callback: XML_ObjectLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-loaded", callback: XML_ObjectLoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "object-loaded", p0: object, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.XML

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * XML parser object
 * @class 
 */
class XML extends Object {

    // Own properties of Gst-0.10.Gst.XML

    static name: string
    static $gtype: GObject.GType<XML>

    // Constructors of Gst-0.10.Gst.XML

    constructor(config?: XML_ConstructProps) 
    constructor() 
    static new(): XML
    _init(config?: XML_ConstructProps): void
    static write(element: Element): libxml2.DocPtr
    static makeElement(cur: libxml2.NodePtr, parent: Object): Element
}

interface AdapterClass {

    // Own fields of Gst-0.10.Gst.AdapterClass

    parentClass: GObject.ObjectClass
    gstReserved: any[]
}

abstract class AdapterClass {

    // Own properties of Gst-0.10.Gst.AdapterClass

    static name: string
}

interface AdapterPrivate {
}

class AdapterPrivate {

    // Own properties of Gst-0.10.Gst.AdapterPrivate

    static name: string
}

interface AllocTrace {

    // Own fields of Gst-0.10.Gst.AllocTrace

    name: string
    flags: number
    live: number
    memLive: object[]

    // Owm methods of Gst-0.10.Gst.AllocTrace

    print(): void
    setFlags(flags: AllocTraceFlags): void
}

/**
 * The main tracing object
 * @record 
 */
class AllocTrace {

    // Own properties of Gst-0.10.Gst.AllocTrace

    static name: string
}

interface BaseSinkClass {

    // Own fields of Gst-0.10.Gst.BaseSinkClass

    parentClass: ElementClass
    getCaps: (sink: BaseSink) => Caps
    setCaps: (sink: BaseSink, caps: Caps) => boolean
    bufferAlloc: (sink: BaseSink, offset: number, size: number, caps: Caps, buf: Buffer) => FlowReturn
    getTimes: (sink: BaseSink, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    start: (sink: BaseSink) => boolean
    stop: (sink: BaseSink) => boolean
    unlock: (sink: BaseSink) => boolean
    event: (sink: BaseSink, event: Event) => boolean
    preroll: (sink: BaseSink, buffer: Buffer) => FlowReturn
    render: (sink: BaseSink, buffer: Buffer) => FlowReturn
    asyncPlay: (sink: BaseSink) => StateChangeReturn
    activatePull: (sink: BaseSink, active: boolean) => boolean
    fixate: (sink: BaseSink, caps: Caps) => void
    unlockStop: (sink: BaseSink) => boolean
    renderList: (sink: BaseSink, bufferList: BufferList) => FlowReturn
    gstReserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `render` method should be overridden to
 * output/present buffers.
 * @record 
 */
abstract class BaseSinkClass {

    // Own properties of Gst-0.10.Gst.BaseSinkClass

    static name: string
}

interface BaseSinkPrivate {
}

class BaseSinkPrivate {

    // Own properties of Gst-0.10.Gst.BaseSinkPrivate

    static name: string
}

interface BaseSrcClass {

    // Own fields of Gst-0.10.Gst.BaseSrcClass

    parentClass: ElementClass
    getCaps: (src: BaseSrc) => Caps
    setCaps: (src: BaseSrc, caps: Caps) => boolean
    negotiate: (src: BaseSrc) => boolean
    newsegment: (src: BaseSrc) => boolean
    start: (src: BaseSrc) => boolean
    stop: (src: BaseSrc) => boolean
    getTimes: (src: BaseSrc, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    getSize: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    isSeekable: (src: BaseSrc) => boolean
    unlock: (src: BaseSrc) => boolean
    event: (src: BaseSrc, event: Event) => boolean
    create: (src: BaseSrc, offset: number, size: number, buf: Buffer) => FlowReturn
    doSeek: (src: BaseSrc, segment: Segment) => boolean
    query: (src: BaseSrc, query: Query) => boolean
    checkGetRange: (src: BaseSrc) => boolean
    fixate: (src: BaseSrc, caps: Caps) => void
    unlockStop: (src: BaseSrc) => boolean
    prepareSeekSegment: (src: BaseSrc, seek: Event, segment: Segment) => boolean
    gstReserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `create` method should be overridden to produce
 * buffers.
 * @record 
 */
abstract class BaseSrcClass {

    // Own properties of Gst-0.10.Gst.BaseSrcClass

    static name: string
}

interface BaseSrcPrivate {
}

class BaseSrcPrivate {

    // Own properties of Gst-0.10.Gst.BaseSrcPrivate

    static name: string
}

interface BaseTransformClass {

    // Own fields of Gst-0.10.Gst.BaseTransformClass

    parentClass: ElementClass
    transformCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => Caps
    fixateCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps, othercaps: Caps) => void
    transformSize: (trans: BaseTransform, direction: PadDirection, caps: Caps, size: number, othercaps: Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    getUnitSize: (trans: BaseTransform, caps: Caps) => [ /* returnType */ boolean, /* size */ number ]
    setCaps: (trans: BaseTransform, incaps: Caps, outcaps: Caps) => boolean
    start: (trans: BaseTransform) => boolean
    stop: (trans: BaseTransform) => boolean
    event: (trans: BaseTransform, event: Event) => boolean
    transform: (trans: BaseTransform, inbuf: Buffer, outbuf: Buffer) => FlowReturn
    transformIp: (trans: BaseTransform, buf: Buffer) => FlowReturn
    passthroughOnSameCaps: boolean
    prepareOutputBuffer: (trans: BaseTransform, input: Buffer, size: number, caps: Caps, buf: Buffer) => FlowReturn
    srcEvent: (trans: BaseTransform, event: Event) => boolean
    beforeTransform: (trans: BaseTransform, buffer: Buffer) => void
    acceptCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => boolean
    gstReserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum either `transform` or `transform_ip` need to be overridden.
 * If the element can overwrite the input data with the results (data is of the
 * same type and quantity) it should provide `transform_ip`.
 * @record 
 */
abstract class BaseTransformClass {

    // Own properties of Gst-0.10.Gst.BaseTransformClass

    static name: string
}

interface BaseTransformPrivate {
}

class BaseTransformPrivate {

    // Own properties of Gst-0.10.Gst.BaseTransformPrivate

    static name: string
}

interface BinClass {

    // Own fields of Gst-0.10.Gst.BinClass

    parentClass: ElementClass
    pool: GLib.ThreadPool
    elementAdded: (bin: Bin, child: Element) => void
    elementRemoved: (bin: Bin, child: Element) => void
    addElement: (bin: Bin, element: Element) => boolean
    removeElement: (bin: Bin, element: Element) => boolean
    handleMessage: (bin: Bin, message: Message) => void
    doLatency: (bin: Bin) => boolean
    gstReserved: any[]
}

/**
 * Subclasses can override the `add_element` and `remove_element` to
 * update the list of children in the bin.
 * The `handle_message` method can be overridden to implement custom
 * message handling.  `handle_message` takes ownership of the message, just like
 * #gst_element_post_message.
 * @record 
 */
abstract class BinClass {

    // Own properties of Gst-0.10.Gst.BinClass

    static name: string
}

interface BinPrivate {
}

class BinPrivate {

    // Own properties of Gst-0.10.Gst.BinPrivate

    static name: string
}

interface BitReader {

    // Own fields of Gst-0.10.Gst.BitReader

    data: number
    size: number
    byte: number
    bit: number

    // Owm methods of Gst-0.10.Gst.BitReader

    free(): void
    init(data: any[], size: number): void
    initFromBuffer(buffer: Buffer): void
    setPos(pos: number): boolean
    getPos(): number
    getRemaining(): number
    getSize(): number
    skip(nbits: number): boolean
    skipToByte(): boolean
    getBitsUint8(val: any[], nbits: number): boolean
    getBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint8(val: any[], nbits: number): boolean
    peekBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
}

/**
 * A bit reader instance.
 * @record 
 */
class BitReader {

    // Own properties of Gst-0.10.Gst.BitReader

    static name: string

    // Constructors of Gst-0.10.Gst.BitReader

    constructor(data: any[], size: number) 
    static new(data: any[], size: number): BitReader
    static newFromBuffer(buffer: Buffer): BitReader
}

interface BufferClass {

    // Own fields of Gst-0.10.Gst.BufferClass

    miniObjectClass: MiniObjectClass
}

abstract class BufferClass {

    // Own properties of Gst-0.10.Gst.BufferClass

    static name: string
}

interface BufferListClass {
}

abstract class BufferListClass {

    // Own properties of Gst-0.10.Gst.BufferListClass

    static name: string
}

interface BufferListIterator {

    // Owm methods of Gst-0.10.Gst.BufferListIterator

    free(): void
    nBuffers(): number
    next(): Buffer
    nextGroup(): boolean
    add(buffer: Buffer): void
    addGroup(): void
    remove(): void
    steal(): Buffer
    take(buffer: Buffer): void
    do(doFunc: BufferListDoFunction, userData: object): Buffer
    mergeGroup(): Buffer
}

class BufferListIterator {

    // Own properties of Gst-0.10.Gst.BufferListIterator

    static name: string
}

interface BusClass {

    // Own fields of Gst-0.10.Gst.BusClass

    parentClass: ObjectClass
    message: (bus: Bus, message: Message) => void
    syncMessage: (bus: Bus, message: Message) => void
    gstReserved: any[]
}

abstract class BusClass {

    // Own properties of Gst-0.10.Gst.BusClass

    static name: string
}

interface BusPrivate {
}

class BusPrivate {

    // Own properties of Gst-0.10.Gst.BusPrivate

    static name: string
}

interface ByteReader {

    // Own fields of Gst-0.10.Gst.ByteReader

    data: number
    size: number
    byte: number

    // Owm methods of Gst-0.10.Gst.ByteReader

    free(): void
    init(data: any[], size: number): void
    initFromBuffer(buffer: Buffer): void
    setPos(pos: number): boolean
    getPos(): number
    getRemaining(): number
    getSize(): number
    skip(nbytes: number): boolean
    getUint8(val: any[]): boolean
    getInt8(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint8(val: any[]): boolean
    peekInt8(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    dupData(size: number): [ /* returnType */ boolean, /* val */ number ]
    getData(size: number): [ /* returnType */ boolean, /* val */ number ]
    peekData(size: number): [ /* returnType */ boolean, /* val */ number ]
    dupStringUtf8(str: string[]): boolean
    dupStringUtf16(): [ /* returnType */ boolean, /* str */ any ]
    dupStringUtf32(): [ /* returnType */ boolean, /* str */ any ]
    skipStringUtf8(): boolean
    skipStringUtf16(): boolean
    skipStringUtf32(): boolean
    getStringUtf8(str: string[]): boolean
    peekStringUtf8(str: string[]): boolean
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
}

/**
 * A byte reader instance.
 * @record 
 */
class ByteReader {

    // Own properties of Gst-0.10.Gst.ByteReader

    static name: string

    // Constructors of Gst-0.10.Gst.ByteReader

    constructor(data: any[], size: number) 
    static new(data: any[], size: number): ByteReader
    static newFromBuffer(buffer: Buffer): ByteReader
}

interface ByteWriter {

    // Own fields of Gst-0.10.Gst.ByteWriter

    parent: ByteReader
    allocSize: number
    fixed: boolean
    owned: boolean

    // Owm methods of Gst-0.10.Gst.ByteWriter

    init(): void
    initWithSize(size: number, fixed: boolean): void
    initWithData(data: any[], size: number, initialized: boolean): void
    initWithBuffer(buffer: Buffer, initialized: boolean): void
    free(): void
    freeAndGetData(): any[]
    freeAndGetBuffer(): Buffer
    reset(): void
    resetAndGetData(): any[]
    resetAndGetBuffer(): Buffer
    getRemaining(): number
    ensureFreeSpace(size: number): boolean
    putUint8(val: number): boolean
    putInt8(val: number): boolean
    putUint16Be(val: number): boolean
    putUint16Le(val: number): boolean
    putInt16Be(val: number): boolean
    putInt16Le(val: number): boolean
    putUint24Be(val: number): boolean
    putUint24Le(val: number): boolean
    putInt24Be(val: number): boolean
    putInt24Le(val: number): boolean
    putUint32Be(val: number): boolean
    putUint32Le(val: number): boolean
    putInt32Be(val: number): boolean
    putInt32Le(val: number): boolean
    putUint64Be(val: number): boolean
    putUint64Le(val: number): boolean
    putInt64Be(val: number): boolean
    putInt64Le(val: number): boolean
    putFloat32Be(val: number): boolean
    putFloat32Le(val: number): boolean
    putFloat64Be(val: number): boolean
    putFloat64Le(val: number): boolean
    putData(data: any[], size: number): boolean
    fill(value: number, size: number): boolean
    putStringUtf8(data: string): boolean
    putStringUtf16(): [ /* returnType */ boolean, /* data */ number ]
    putStringUtf32(): [ /* returnType */ boolean, /* data */ number ]
}

/**
 * A byte writer instance.
 * @record 
 */
class ByteWriter {

    // Own properties of Gst-0.10.Gst.ByteWriter

    static name: string

    // Constructors of Gst-0.10.Gst.ByteWriter

    constructor() 
    static new(): ByteWriter
    static newWithSize(size: number, fixed: boolean): ByteWriter
    static newWithData(data: any[], size: number, initialized: boolean): ByteWriter
    static newWithBuffer(buffer: Buffer, initialized: boolean): ByteWriter
}

interface Caps {

    // Own fields of Gst-0.10.Gst.Caps

    type: GObject.GType
    refcount: number
    flags: CapsFlags
    structs: GLib.PtrArray
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Caps

    ref(): Caps
    copy(): Caps
    makeWritable(): Caps
    unref(): void
    append(caps2: Caps): void
    merge(caps2: Caps): void
    appendStructure(structure: Structure): void
    removeStructure(idx: number): void
    mergeStructure(structure: Structure): void
    getSize(): number
    getStructure(index: number): Structure
    stealStructure(index: number): Structure
    copyNth(nth: number): Caps
    truncate(): void
    setValue(field: string, value: any): void
    isAny(): boolean
    isEmpty(): boolean
    isFixed(): boolean
    isAlwaysCompatible(caps2: Caps): boolean
    isSubset(superset: Caps): boolean
    isEqual(caps2: Caps): boolean
    isEqualFixed(caps2: Caps): boolean
    canIntersect(caps2: Caps): boolean
    intersect(caps2: Caps): Caps
    subtract(subtrahend: Caps): Caps
    union(caps2: Caps): Caps
    normalize(): Caps
    doSimplify(): boolean
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    replace(newcaps: Caps): void
    toString(): string
}

/**
 * Object describing media types.
 * @record 
 */
class Caps {

    // Own properties of Gst-0.10.Gst.Caps

    static name: string

    // Constructors of Gst-0.10.Gst.Caps

    static newEmpty(): Caps
    static newAny(): Caps
}

interface ChildProxyInterface {

    // Own fields of Gst-0.10.Gst.ChildProxyInterface

    parent: GObject.TypeInterface
    getChildByIndex: (parent: ChildProxy, index: number) => Object
    getChildrenCount: (parent: ChildProxy) => number
    childAdded: (parent: ChildProxy, child: Object) => void
    childRemoved: (parent: ChildProxy, child: Object) => void
    gstReserved: any[]
}

/**
 * #GstChildProxy interface.
 * @record 
 */
abstract class ChildProxyInterface {

    // Own properties of Gst-0.10.Gst.ChildProxyInterface

    static name: string
}

interface ClockClass {

    // Own fields of Gst-0.10.Gst.ClockClass

    parentClass: ObjectClass
    changeResolution: (clock: Clock, oldResolution: ClockTime, newResolution: ClockTime) => ClockTime
    getResolution: (clock: Clock) => ClockTime
    getInternalTime: (clock: Clock) => ClockTime
    wait: (clock: Clock, entry: ClockEntry) => ClockReturn
    waitAsync: (clock: Clock, entry: ClockEntry) => ClockReturn
    unschedule: (clock: Clock, entry: ClockEntry) => void
    waitJitter: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    gstReserved: any[]
}

/**
 * GStreamer clock class. Override the vmethods to implement the clock
 * functionality.
 * @record 
 */
abstract class ClockClass {

    // Own properties of Gst-0.10.Gst.ClockClass

    static name: string
}

interface ClockEntry {

    // Own fields of Gst-0.10.Gst.ClockEntry

    refcount: number
    clock: Clock
    type: ClockEntryType
    time: ClockTime
    interval: ClockTime
    status: ClockReturn
    func: ClockCallback
    userData: object
    destroyData: GLib.DestroyNotify
}

/**
 * All pending timeouts or periodic notifies are converted into
 * an entry.
 * Note that GstClockEntry should be treated as an opaque structure. It must
 * not be extended or allocated using a custom allocator.
 * @record 
 */
class ClockEntry {

    // Own properties of Gst-0.10.Gst.ClockEntry

    static name: string
}

interface ClockPrivate {
}

class ClockPrivate {

    // Own properties of Gst-0.10.Gst.ClockPrivate

    static name: string
}

interface CollectData {

    // Own fields of Gst-0.10.Gst.CollectData

    collect: CollectPads
    pad: Pad
    buffer: Buffer
    pos: number
    segment: Segment
}

/**
 * Structure used by the collect_pads.
 * @record 
 */
class CollectData {

    // Own properties of Gst-0.10.Gst.CollectData

    static name: string
}

interface CollectPadsClass {

    // Own fields of Gst-0.10.Gst.CollectPadsClass

    parentClass: ObjectClass
    gstReserved: any[]
}

abstract class CollectPadsClass {

    // Own properties of Gst-0.10.Gst.CollectPadsClass

    static name: string
}

interface CollectPadsPrivate {
}

class CollectPadsPrivate {

    // Own properties of Gst-0.10.Gst.CollectPadsPrivate

    static name: string
}

interface DataQueueClass {

    // Own fields of Gst-0.10.Gst.DataQueueClass

    parentClass: GObject.ObjectClass
    empty: (queue: DataQueue) => void
    full: (queue: DataQueue) => void
    gstReserved: any[]
}

abstract class DataQueueClass {

    // Own properties of Gst-0.10.Gst.DataQueueClass

    static name: string
}

interface DataQueueItem {

    // Own fields of Gst-0.10.Gst.DataQueueItem

    object: MiniObject
    size: number
    duration: number
    visible: boolean
    destroy: GLib.DestroyNotify
}

/**
 * Structure used by #GstDataQueue. You can supply a different structure, as
 * long as the top of the structure is identical to this structure.
 * @record 
 */
class DataQueueItem {

    // Own properties of Gst-0.10.Gst.DataQueueItem

    static name: string
}

interface DataQueueSize {

    // Own fields of Gst-0.10.Gst.DataQueueSize

    visible: number
    bytes: number
    time: number
}

/**
 * Structure describing the size of a queue.
 * @record 
 */
class DataQueueSize {

    // Own properties of Gst-0.10.Gst.DataQueueSize

    static name: string
}

interface DebugCategory {

    // Own fields of Gst-0.10.Gst.DebugCategory

    threshold: number
    color: number
    name: string
    description: string

    // Owm methods of Gst-0.10.Gst.DebugCategory

    free(): void
    setThreshold(level: DebugLevel): void
    resetThreshold(): void
    getThreshold(): DebugLevel
    getName(): string
    getColor(): number
    getDescription(): string
}

/**
 * This is the struct that describes the categories. Once initialized with
 * #GST_DEBUG_CATEGORY_INIT, its values can't be changed anymore.
 * @record 
 */
class DebugCategory {

    // Own properties of Gst-0.10.Gst.DebugCategory

    static name: string
}

interface DebugMessage {

    // Owm methods of Gst-0.10.Gst.DebugMessage

    get(): string
}

class DebugMessage {

    // Own properties of Gst-0.10.Gst.DebugMessage

    static name: string
}

interface ElementClass {

    // Own fields of Gst-0.10.Gst.ElementClass

    parentClass: ObjectClass
    details: ElementDetails
    elementfactory: ElementFactory
    padtemplates: object[]
    numpadtemplates: number
    padTemplCookie: number
    padAdded: (element: Element, pad: Pad) => void
    padRemoved: (element: Element, pad: Pad) => void
    noMorePads: (element: Element) => void
    requestNewPad: (element: Element, templ: PadTemplate, name: string) => Pad
    releasePad: (element: Element, pad: Pad) => void
    getState: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState: (element: Element, state: State) => StateChangeReturn
    changeState: (element: Element, transition: StateChange) => StateChangeReturn
    setBus: (element: Element, bus: Bus) => void
    provideClock: (element: Element) => Clock
    setClock: (element: Element, clock: Clock) => boolean
    getIndex: (element: Element) => Index
    setIndex: (element: Element, index: Index) => void
    sendEvent: (element: Element, event: Event) => boolean
    getQueryTypes: (element: Element) => QueryType
    query: (element: Element, query: Query) => boolean
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.ElementClass

    addPadTemplate(templ: PadTemplate): void
    getPadTemplate(name: string): PadTemplate
    setDetails(details: ElementDetails): void
    setDetailsSimple(longname: string, classification: string, description: string, author: string): void
}

/**
 * GStreamer element class. Override the vmethods to implement the element
 * functionality.
 * @record 
 */
abstract class ElementClass {

    // Own properties of Gst-0.10.Gst.ElementClass

    static name: string
}

interface ElementDetails {

    // Own fields of Gst-0.10.Gst.ElementDetails

    longname: string
    klass: string
    description: string
    author: string
    gstReserved: any[]
}

/**
 * This struct defines the public information about a #GstElement. It contains
 * meta-data about the element that is mostly for the benefit of editors.
 * The `klass` member can be used by applications to filter elements based
 * on functionality.
 * @record 
 */
class ElementDetails {

    // Own properties of Gst-0.10.Gst.ElementDetails

    static name: string
}

interface ElementFactoryClass {

    // Own fields of Gst-0.10.Gst.ElementFactoryClass

    parentClass: PluginFeatureClass
    gstReserved: any[]
}

abstract class ElementFactoryClass {

    // Own properties of Gst-0.10.Gst.ElementFactoryClass

    static name: string
}

interface EventClass {

    // Own fields of Gst-0.10.Gst.EventClass

    miniObjectClass: MiniObjectClass
    gstReserved: any[]
}

abstract class EventClass {

    // Own properties of Gst-0.10.Gst.EventClass

    static name: string
}

interface FormatDefinition {

    // Own fields of Gst-0.10.Gst.FormatDefinition

    value: Format
    nick: string
    description: string
    quark: GLib.Quark
}

/**
 * A format definition
 * @record 
 */
class FormatDefinition {

    // Own properties of Gst-0.10.Gst.FormatDefinition

    static name: string
}

interface GhostPadClass {

    // Own fields of Gst-0.10.Gst.GhostPadClass

    parentClass: ProxyPadClass
    gstReserved: any[]
}

abstract class GhostPadClass {

    // Own properties of Gst-0.10.Gst.GhostPadClass

    static name: string
}

interface GhostPadPrivate {
}

class GhostPadPrivate {

    // Own properties of Gst-0.10.Gst.GhostPadPrivate

    static name: string
}

interface ImplementsInterfaceClass {

    // Own fields of Gst-0.10.Gst.ImplementsInterfaceClass

    parent: GObject.TypeInterface
    supported: (iface: ImplementsInterface, ifaceType: GObject.GType) => boolean
    gstReserved: any[]
}

abstract class ImplementsInterfaceClass {

    // Own properties of Gst-0.10.Gst.ImplementsInterfaceClass

    static name: string
}

interface IndexAssociation {

    // Own fields of Gst-0.10.Gst.IndexAssociation

    format: Format
    value: number
}

/**
 * An association in an entry.
 * @record 
 */
class IndexAssociation {

    // Own properties of Gst-0.10.Gst.IndexAssociation

    static name: string
}

interface IndexClass {

    // Own fields of Gst-0.10.Gst.IndexClass

    parentClass: ObjectClass
    getWriterId: (index: Index, writerString: string) => [ /* returnType */ boolean, /* writerId */ number ]
    commit: (index: Index, id: number) => void
    addEntry: (index: Index, entry: IndexEntry) => void
    getAssocEntry: (index: Index, id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc) => IndexEntry
    entryAdded: (index: Index, entry: IndexEntry) => void
    gstReserved: any[]
}

abstract class IndexClass {

    // Own properties of Gst-0.10.Gst.IndexClass

    static name: string
}

interface IndexEntry {

    // Own fields of Gst-0.10.Gst.IndexEntry

    type: IndexEntryType
    id: number

    // Owm methods of Gst-0.10.Gst.IndexEntry

    copy(): IndexEntry
    free(): void
    assocMap(format: Format): [ /* returnType */ boolean, /* value */ number ]
}

/**
 * The basic element of an index.
 * @record 
 */
class IndexEntry {

    // Own properties of Gst-0.10.Gst.IndexEntry

    static name: string
}

interface IndexFactoryClass {

    // Own fields of Gst-0.10.Gst.IndexFactoryClass

    parent: PluginFeatureClass
    gstReserved: any[]
}

abstract class IndexFactoryClass {

    // Own properties of Gst-0.10.Gst.IndexFactoryClass

    static name: string
}

interface IndexGroup {

    // Own fields of Gst-0.10.Gst.IndexGroup

    groupnum: number
    entries: object[]
    certainty: IndexCertainty
    peergroup: number
}

/**
 * A group of related entries in an index.
 * @record 
 */
class IndexGroup {

    // Own properties of Gst-0.10.Gst.IndexGroup

    static name: string
}

interface Iterator {

    // Own fields of Gst-0.10.Gst.Iterator

    next: IteratorNextFunction
    item: IteratorItemFunction
    resync: IteratorResyncFunction
    free: IteratorFreeFunction
    pushed: Iterator
    type: GObject.GType
    lock: GLib.Mutex
    cookie: number
    masterCookie: number
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Iterator

    push(other: Iterator): void
    filter(func: GLib.CompareFunc, userData: object): Iterator
    fold(func: IteratorFoldFunction, ret: any, userData: object): IteratorResult
    foreach(func: GLib.Func, userData: object): IteratorResult
    findCustom(func: GLib.CompareFunc, userData: object): object
}

/**
 * #GstIterator base structure. The values of this structure are 
 * protected for subclasses, use the methods to use the #GstIterator.
 * @record 
 */
class Iterator {

    // Own properties of Gst-0.10.Gst.Iterator

    static name: string

    // Constructors of Gst-0.10.Gst.Iterator

    constructor(size: number, type: GObject.GType, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction) 
    static new(size: number, type: GObject.GType, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    static newSingle(type: GObject.GType, object: object, copy: CopyFunction, free: GLib.FreeFunc): Iterator
}

interface MessageClass {

    // Own fields of Gst-0.10.Gst.MessageClass

    miniObjectClass: MiniObjectClass
    gstReserved: any[]
}

abstract class MessageClass {

    // Own properties of Gst-0.10.Gst.MessageClass

    static name: string
}

interface MiniObjectClass {

    // Own fields of Gst-0.10.Gst.MiniObjectClass

    typeClass: GObject.TypeClass
    copy: MiniObjectCopyFunction
    finalize: MiniObjectFinalizeFunction
    gstReserved: object
}

abstract class MiniObjectClass {

    // Own properties of Gst-0.10.Gst.MiniObjectClass

    static name: string
}

interface ObjectClass {

    // Own fields of Gst-0.10.Gst.ObjectClass

    parentClass: GObject.ObjectClass
    pathStringSeparator: string
    signalObject: GObject.Object
    lock: any
    parentSet: (object: Object, parent: Object) => void
    parentUnset: (object: Object, parent: Object) => void
    objectSaved: (object: Object, parent: libxml2.NodePtr) => void
    deepNotify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    saveThyself: (object: Object, parent: libxml2.NodePtr) => libxml2.NodePtr
    restoreThyself: (object: Object, self: libxml2.NodePtr) => void
    gstReserved: any[]
}

/**
 * GStreamer base object class.
 * @record 
 */
abstract class ObjectClass {

    // Own properties of Gst-0.10.Gst.ObjectClass

    static name: string
}

interface PadClass {

    // Own fields of Gst-0.10.Gst.PadClass

    parentClass: ObjectClass
    linked: (pad: Pad, peer: Pad) => void
    unlinked: (pad: Pad, peer: Pad) => void
    requestLink: (pad: Pad) => void
    haveData: (pad: Pad, data: MiniObject) => boolean
    gstReserved: any[]
}

abstract class PadClass {

    // Own properties of Gst-0.10.Gst.PadClass

    static name: string
}

interface PadPrivate {
}

class PadPrivate {

    // Own properties of Gst-0.10.Gst.PadPrivate

    static name: string
}

interface PadTemplateClass {

    // Own fields of Gst-0.10.Gst.PadTemplateClass

    parentClass: ObjectClass
    padCreated: (templ: PadTemplate, pad: Pad) => void
    gstReserved: any[]
}

abstract class PadTemplateClass {

    // Own properties of Gst-0.10.Gst.PadTemplateClass

    static name: string
}

interface ParamSpecFraction {

    // Own fields of Gst-0.10.Gst.ParamSpecFraction

    parentInstance: GObject.ParamSpec
    minNum: number
    minDen: number
    maxNum: number
    maxDen: number
    defNum: number
    defDen: number
}

/**
 * A GParamSpec derived structure that contains the meta data for fractional
 * properties.
 * @record 
 */
class ParamSpecFraction {

    // Own properties of Gst-0.10.Gst.ParamSpecFraction

    static name: string
}

interface ParamSpecMiniObject {

    // Own fields of Gst-0.10.Gst.ParamSpecMiniObject

    parentInstance: GObject.ParamSpec
}

/**
 * A %GParamSpec derived structure that contains the meta data
 * for %GstMiniObject properties.
 * @record 
 */
class ParamSpecMiniObject {

    // Own properties of Gst-0.10.Gst.ParamSpecMiniObject

    static name: string
}

interface ParseContext {

    // Owm methods of Gst-0.10.Gst.ParseContext

    getMissingElements(): string[]
    free(): void
}

/**
 * Opaque structure.
 * @record 
 */
class ParseContext {

    // Own properties of Gst-0.10.Gst.ParseContext

    static name: string

    // Constructors of Gst-0.10.Gst.ParseContext

    constructor() 
    static new(): ParseContext
}

interface PipelineClass {

    // Own fields of Gst-0.10.Gst.PipelineClass

    parentClass: BinClass
    gstReserved: any[]
}

abstract class PipelineClass {

    // Own properties of Gst-0.10.Gst.PipelineClass

    static name: string
}

interface PipelinePrivate {
}

class PipelinePrivate {

    // Own properties of Gst-0.10.Gst.PipelinePrivate

    static name: string
}

interface PluginClass {

    // Own fields of Gst-0.10.Gst.PluginClass

    objectClass: ObjectClass
    gstReserved: any[]
}

abstract class PluginClass {

    // Own properties of Gst-0.10.Gst.PluginClass

    static name: string
}

interface PluginDesc {

    // Own fields of Gst-0.10.Gst.PluginDesc

    majorVersion: number
    minorVersion: number
    name: string
    description: string
    pluginInit: PluginInitFunc
    version: string
    license: string
    source: string
    package: string
    origin: string
    gstReserved: any[]
}

/**
 * A plugin should export a variable of this type called plugin_desc. The plugin
 * loader will use the data provided there to initialize the plugin.
 * BSD, MIT/X11, Proprietary, unknown.
 * @record 
 */
class PluginDesc {

    // Own properties of Gst-0.10.Gst.PluginDesc

    static name: string
}

interface PluginFeatureClass {

    // Own fields of Gst-0.10.Gst.PluginFeatureClass

    parentClass: ObjectClass
    gstReserved: any[]
}

abstract class PluginFeatureClass {

    // Own properties of Gst-0.10.Gst.PluginFeatureClass

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of Gst-0.10.Gst.PluginPrivate

    static name: string
}

interface Poll {

    // Owm methods of Gst-0.10.Gst.Poll

    free(): void
    addFd(fd: PollFD): boolean
    removeFd(fd: PollFD): boolean
    fdCtlWrite(fd: PollFD, active: boolean): boolean
    fdCtlRead(fd: PollFD, active: boolean): boolean
    fdIgnored(fd: PollFD): void
    fdHasClosed(fd: PollFD): boolean
    fdHasError(fd: PollFD): boolean
    fdCanRead(fd: PollFD): boolean
    fdCanWrite(fd: PollFD): boolean
    wait(timeout: ClockTime): number
    setControllable(controllable: boolean): boolean
    restart(): void
    setFlushing(flushing: boolean): void
    writeControl(): boolean
    readControl(): boolean
}

/**
 * A set of file/network descriptors.
 * @record 
 */
class Poll {

    // Own properties of Gst-0.10.Gst.Poll

    static name: string

    // Constructors of Gst-0.10.Gst.Poll

    constructor(controllable: boolean) 
    static new(controllable: boolean): Poll
    static newTimer(): Poll
}

interface PollFD {

    // Own fields of Gst-0.10.Gst.PollFD

    fd: number
    idx: number

    // Owm methods of Gst-0.10.Gst.PollFD

    init(): void
}

/**
 * A file descriptor object.
 * @record 
 */
class PollFD {

    // Own properties of Gst-0.10.Gst.PollFD

    static name: string
}

interface ProxyPadClass {

    // Own fields of Gst-0.10.Gst.ProxyPadClass

    parentClass: PadClass
    gstReserved: any[]
}

abstract class ProxyPadClass {

    // Own properties of Gst-0.10.Gst.ProxyPadClass

    static name: string
}

interface ProxyPadPrivate {
}

class ProxyPadPrivate {

    // Own properties of Gst-0.10.Gst.ProxyPadPrivate

    static name: string
}

interface PushSrcClass {

    // Own fields of Gst-0.10.Gst.PushSrcClass

    parentClass: BaseSrcClass
    create: (src: PushSrc, buf: Buffer) => FlowReturn
    gstReserved: any[]
}

abstract class PushSrcClass {

    // Own properties of Gst-0.10.Gst.PushSrcClass

    static name: string
}

interface QueryClass {

    // Own fields of Gst-0.10.Gst.QueryClass

    miniObjectClass: MiniObjectClass
    gstReserved: any[]
}

abstract class QueryClass {

    // Own properties of Gst-0.10.Gst.QueryClass

    static name: string
}

interface QueryTypeDefinition {

    // Own fields of Gst-0.10.Gst.QueryTypeDefinition

    value: QueryType
    nick: string
    description: string
    quark: GLib.Quark
}

/**
 * A Query Type definition
 * @record 
 */
class QueryTypeDefinition {

    // Own properties of Gst-0.10.Gst.QueryTypeDefinition

    static name: string
}

interface RegistryClass {

    // Own fields of Gst-0.10.Gst.RegistryClass

    parentClass: ObjectClass
    pluginAdded: (registry: Registry, plugin: Plugin) => void
    featureAdded: (registry: Registry, feature: PluginFeature) => void
    gstReserved: any[]
}

abstract class RegistryClass {

    // Own properties of Gst-0.10.Gst.RegistryClass

    static name: string
}

interface RegistryPrivate {
}

class RegistryPrivate {

    // Own properties of Gst-0.10.Gst.RegistryPrivate

    static name: string
}

interface Segment {

    // Own fields of Gst-0.10.Gst.Segment

    rate: number
    absRate: number
    format: Format
    flags: SeekFlags
    start: number
    stop: number
    time: number
    accum: number
    lastStop: number
    duration: number
    appliedRate: number
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.Segment

    copy(): Segment
    free(): void
    init(format: Format): void
    setDuration(format: Format, duration: number): void
    setLastStop(format: Format, position: number): void
    setSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): /* update */ boolean
    setNewsegment(update: boolean, rate: number, format: Format, start: number, stop: number, time: number): void
    setNewsegmentFull(update: boolean, rate: number, appliedRate: number, format: Format, start: number, stop: number, time: number): void
    toStreamTime(format: Format, position: number): number
    toRunningTime(format: Format, position: number): number
    toPosition(format: Format, runningTime: number): number
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clipStart */ number, /* clipStop */ number ]
    setRunningTime(format: Format, runningTime: number): boolean
}

/**
 * A helper structure that holds the configured region of
 * interest in a media file.
 * @record 
 */
class Segment {

    // Own properties of Gst-0.10.Gst.Segment

    static name: string

    // Constructors of Gst-0.10.Gst.Segment

    constructor() 
    static new(): Segment
}

interface StaticCaps {

    // Own fields of Gst-0.10.Gst.StaticCaps

    caps: Caps
    string: string
    gstReserved: any[]

    // Owm methods of Gst-0.10.Gst.StaticCaps

    get(): Caps
}

/**
 * Datastructure to initialize #GstCaps from a string description usually
 * used in conjunction with GST_STATIC_CAPS() and gst_static_caps_get() to
 * instantiate a #GstCaps.
 * @record 
 */
class StaticCaps {

    // Own properties of Gst-0.10.Gst.StaticCaps

    static name: string
}

interface StaticPadTemplate {

    // Own fields of Gst-0.10.Gst.StaticPadTemplate

    nameTemplate: string
    direction: PadDirection
    presence: PadPresence
    staticCaps: StaticCaps

    // Owm methods of Gst-0.10.Gst.StaticPadTemplate

    get(): PadTemplate
    getCaps(): Caps
}

class StaticPadTemplate {

    // Own properties of Gst-0.10.Gst.StaticPadTemplate

    static name: string
}

interface Structure {

    // Own fields of Gst-0.10.Gst.Structure

    type: GObject.GType
    name: GLib.Quark
    parentRefcount: number
    fields: GLib.Array
    gstReserved: object

    // Owm methods of Gst-0.10.Gst.Structure

    copy(): Structure
    setParentRefcount(): /* refcount */ number
    free(): void
    getName(): string
    getNameId(): GLib.Quark
    hasName(name: string): boolean
    setName(name: string): void
    idSetValue(field: GLib.Quark, value: any): void
    setValue(fieldname: string, value: any): void
    idGetValue(field: GLib.Quark): any
    getValue(fieldname: string): any
    removeField(fieldname: string): void
    removeAllFields(): void
    getFieldType(fieldname: string): GObject.GType
    foreach(func: StructureForeachFunc, userData: object): boolean
    mapInPlace(func: StructureMapFunc, userData: object): boolean
    nFields(): number
    nthFieldName(index: number): string
    idHasField(field: GLib.Quark): boolean
    idHasFieldTyped(field: GLib.Quark, type: GObject.GType): boolean
    hasField(fieldname: string): boolean
    hasFieldTyped(fieldname: string, type: GObject.GType): boolean
    getBoolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getUint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getFourcc(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getDouble(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getDate(fieldname: string, value: GLib.Date): boolean
    getClockTime(fieldname: string, value: ClockTime): boolean
    getString(fieldname: string): string
    getEnum(fieldname: string, enumtype: GObject.GType): [ /* returnType */ boolean, /* value */ number ]
    getFraction(fieldname: string): [ /* returnType */ boolean, /* valueNumerator */ number, /* valueDenominator */ number ]
    toString(): string
    fixateFieldNearestInt(fieldName: string, target: number): boolean
    fixateFieldNearestDouble(fieldName: string, target: number): boolean
    fixateFieldBoolean(fieldName: string, target: boolean): boolean
    fixateFieldString(fieldName: string, target: string): boolean
    fixateFieldNearestFraction(fieldName: string, targetNumerator: number, targetDenominator: number): boolean
}

/**
 * The GstStructure object. Most fields are private.
 * @record 
 */
class Structure {

    // Own properties of Gst-0.10.Gst.Structure

    static name: string
}

interface SystemClockClass {

    // Own fields of Gst-0.10.Gst.SystemClockClass

    parentClass: ClockClass
    gstReserved: any[]
}

abstract class SystemClockClass {

    // Own properties of Gst-0.10.Gst.SystemClockClass

    static name: string
}

interface SystemClockPrivate {
}

class SystemClockPrivate {

    // Own properties of Gst-0.10.Gst.SystemClockPrivate

    static name: string
}

interface TagSetterIFace {

    // Own fields of Gst-0.10.Gst.TagSetterIFace

    gIface: GObject.TypeInterface
}

/**
 * #GstTagSetterIFace interface.
 * @record 
 */
class TagSetterIFace {

    // Own properties of Gst-0.10.Gst.TagSetterIFace

    static name: string
}

interface TaskClass {

    // Own fields of Gst-0.10.Gst.TaskClass

    parentClass: ObjectClass
    pool: TaskPool
    gstReserved: any[]
}

abstract class TaskClass {

    // Own properties of Gst-0.10.Gst.TaskClass

    static name: string
}

interface TaskPoolClass {

    // Own fields of Gst-0.10.Gst.TaskPoolClass

    parentClass: ObjectClass
    prepare: (pool: TaskPool) => void
    cleanup: (pool: TaskPool) => void
    push: (pool: TaskPool, func: TaskPoolFunction) => object
    join: (pool: TaskPool, id: object) => void
    gstReserved: any[]
}

/**
 * The #GstTaskPoolClass object.
 * @record 
 */
abstract class TaskPoolClass {

    // Own properties of Gst-0.10.Gst.TaskPoolClass

    static name: string
}

interface TaskPrivate {
}

class TaskPrivate {

    // Own properties of Gst-0.10.Gst.TaskPrivate

    static name: string
}

interface TaskThreadCallbacks {

    // Own fields of Gst-0.10.Gst.TaskThreadCallbacks

    enterThread: any
    leaveThread: any
    gstReserved: any[]
}

/**
 * Custom GstTask thread callback functions that can be installed.
 * @record 
 */
class TaskThreadCallbacks {

    // Own properties of Gst-0.10.Gst.TaskThreadCallbacks

    static name: string
}

interface Trace {

    // Own fields of Gst-0.10.Gst.Trace

    filename: string
    fd: number
    buf: TraceEntry
    bufsize: number
    bufoffset: number

    // Owm methods of Gst-0.10.Gst.Trace

    destroy(): void
    flush(): void
    textFlush(): void
    setDefault(): void
}

/**
 * Opaque #GstTrace structure.
 * @record 
 */
class Trace {

    // Own properties of Gst-0.10.Gst.Trace

    static name: string

    // Constructors of Gst-0.10.Gst.Trace

    constructor(filename: string, size: number) 
    static new(filename: string, size: number): Trace
}

interface TraceEntry {

    // Own fields of Gst-0.10.Gst.TraceEntry

    timestamp: number
    sequence: number
    data: number
    message: any[]
}

class TraceEntry {

    // Own properties of Gst-0.10.Gst.TraceEntry

    static name: string
}

interface TypeFind {

    // Own fields of Gst-0.10.Gst.TypeFind

    peek: any
    suggest: any
    data: object
    getLength: any
    gstReserved: any[]
}

/**
 * Object that stores typefind callbacks. To use with #GstTypeFindFactory.
 * @record 
 */
class TypeFind {

    // Own properties of Gst-0.10.Gst.TypeFind

    static name: string
}

interface TypeFindFactoryClass {

    // Own fields of Gst-0.10.Gst.TypeFindFactoryClass

    parent: PluginFeatureClass
    gstReserved: any[]
}

abstract class TypeFindFactoryClass {

    // Own properties of Gst-0.10.Gst.TypeFindFactoryClass

    static name: string
}

interface TypeNameData {

    // Own fields of Gst-0.10.Gst.TypeNameData

    name: string
    type: GObject.GType
}

/**
 * Structure used for filtering based on `name` and `type`.
 * @record 
 */
class TypeNameData {

    // Own properties of Gst-0.10.Gst.TypeNameData

    static name: string
}

interface URIHandlerInterface {

    // Own fields of Gst-0.10.Gst.URIHandlerInterface

    parent: GObject.TypeInterface
    newUri: (handler: URIHandler, uri: string) => void
    getType: () => URIType
    getProtocols: () => string[]
    getUri: (handler: URIHandler) => string
    setUri: (handler: URIHandler, uri: string) => boolean
    getTypeFull: (type: GObject.GType) => URIType
    getProtocolsFull: (type: GObject.GType) => string[]
    gstReserved: any[]
}

/**
 * Any #GstElement using this interface should implement these methods.
 * @record 
 */
abstract class URIHandlerInterface {

    // Own properties of Gst-0.10.Gst.URIHandlerInterface

    static name: string
}

interface ValueTable {

    // Own fields of Gst-0.10.Gst.ValueTable

    type: GObject.GType
    compare: ValueCompareFunc
    serialize: ValueSerializeFunc
    deserialize: ValueDeserializeFunc
    gstReserved: any[]
}

/**
 * VTable for the #GValue `type`.
 * @record 
 */
class ValueTable {

    // Own properties of Gst-0.10.Gst.ValueTable

    static name: string
}

interface XMLClass {

    // Own fields of Gst-0.10.Gst.XMLClass

    parentClass: ObjectClass
    objectLoaded: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    objectSaved: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    gstReserved: any[]
}

abstract class XMLClass {

    // Own properties of Gst-0.10.Gst.XMLClass

    static name: string
}

    type ClockID = any
    type ClockTime = any
    type ClockTimeDiff = any
    type TagList = any
}
export default Gst;