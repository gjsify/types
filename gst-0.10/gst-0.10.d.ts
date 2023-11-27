
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gst-0.10-ambient.d.ts';
import './gst-0.10-import.d.ts';
/**
 * Gst-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
const BUFFER_COPY_ALL: number
const BUFFER_OFFSET_NONE: number
const BUFFER_TRACE_NAME: string
const CAN_INLINE: number
const CLOCK_ENTRY_TRACE_NAME: string
const CLOCK_TIME_NONE: number
const DEBUG_BG_MASK: number
const DEBUG_FG_MASK: number
const DEBUG_FORMAT_MASK: number
const DISABLE_ALLOC_TRACE: number
const DISABLE_GST_DEBUG: number
const DISABLE_LOADSAVE: number
const DISABLE_LOADSAVE_REGISTRY: number
const DISABLE_PARSE: number
const DISABLE_PLUGIN: number
const DISABLE_REGISTRY: number
const DISABLE_TRACE: number
const DISABLE_XML: number
const ERROR_SYSTEM: string
const EVENT_TRACE_NAME: string
const EVENT_TYPE_BOTH: number
const EVENT_TYPE_SHIFT: number
const FOURCC_FORMAT: string
const HAVE_GLIB_2_8: number
const HAVE_UNALIGNED_ACCESS: number
const INDEX_ID_INVALID: number
const LICENSE_UNKNOWN: string
const MESSAGE_TRACE_NAME: string
const MSECOND: number
const M_PI: number
const NSECOND: number
const PADDING: number
const PADDING_LARGE: number
const PAD_LINK_CHECK_DEFAULT: number
const PARAM_CONTROLLABLE: number
const PARAM_MUTABLE_PAUSED: number
const PARAM_MUTABLE_PLAYING: number
const PARAM_MUTABLE_READY: number
const PARAM_USER_SHIFT: number
const PTR_FORMAT: string
const SECOND: number
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
const USECOND: number
const VALUE_EQUAL: number
const VALUE_GREATER_THAN: number
const VALUE_LESS_THAN: number
const VALUE_UNORDERED: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_NANO: number
function alloc_trace_available(): boolean
function alloc_trace_get(name: string | null): AllocTrace
function alloc_trace_live_all(): number
function alloc_trace_print_all(): void
function alloc_trace_print_live(): void
function alloc_trace_set_flags_all(flags: AllocTraceFlags): void
function atomic_int_set(value: number): /* atomic_int */ number
function caps_from_string(string: string | null): Caps
function caps_load_thyself(parent: libxml2.NodePtr): Caps
function child_proxy_child_added(object: Object, child: Object): void
function child_proxy_child_removed(object: Object, child: Object): void
function child_proxy_get_property(object: Object, name: string | null, value: any): void
function child_proxy_lookup(object: Object, name: string | null, target: Object, pspec: GObject.ParamSpec): boolean
function child_proxy_set_property(object: Object, name: string | null, value: any): void
function class_signal_connect(klass: ObjectClass, name: string | null, func: any, func_data: any): number
function class_signal_emit_by_name(object: Object, name: string | null, self: libxml2.NodePtr): void
function debug_add_log_function(func: LogFunction): void
function debug_construct_term_color(colorinfo: number): string | null
function debug_construct_win_color(colorinfo: number): number
function debug_get_all_categories(): any[]
function debug_get_default_threshold(): DebugLevel
function debug_is_active(): boolean
function debug_is_colored(): boolean
function debug_level_get_name(level: DebugLevel): string | null
function debug_log_default(category: DebugCategory, level: DebugLevel, file: string | null, function_: string | null, line: number, object: GObject.Object, message: DebugMessage, unused: any): void
function debug_print_stack_trace(): void
function debug_remove_log_function(func: LogFunction): number
function debug_remove_log_function_by_data(data: any): number
function debug_set_active(active: boolean): void
function debug_set_colored(colored: boolean): void
function debug_set_default_threshold(level: DebugLevel): void
function debug_set_threshold_for_name(name: string | null, level: DebugLevel): void
function debug_unset_threshold_for_name(name: string | null): void
function default_registry_check_feature_version(feature_name: string | null, min_major: number, min_minor: number, min_micro: number): boolean
function deinit(): void
function error_get_message(domain: GLib.Quark, code: number): string | null
function flow_get_name(ret: FlowReturn): string | null
function flow_to_quark(ret: FlowReturn): GLib.Quark
function format_get_by_nick(nick: string | null): Format
function format_get_details(format: Format): FormatDefinition
function format_get_name(format: Format): string | null
function format_iterate_definitions(): Iterator
function format_register(nick: string | null, description: string | null): Format
function format_to_quark(format: Format): GLib.Quark
function formats_contains(formats: Format, format: Format): boolean
function implements_interface_cast(from: any, type: GObject.GType): any
function implements_interface_check(from: any, type: GObject.GType): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function init_check(argv: string[]): [ /* returnType */ boolean, /* argc */ number ]
function init_get_option_group(): GLib.OptionGroup
function is_tag_list(p: any): boolean
function param_spec_fraction(name: string | null, nick: string | null, blurb: string | null, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_mini_object(name: string | null, nick: string | null, blurb: string | null, object_type: GObject.GType, flags: GObject.ParamFlags): GObject.ParamSpec
function parse_bin_from_description(bin_description: string | null, ghost_unlinked_pads: boolean): Element
function parse_bin_from_description_full(bin_description: string | null, ghost_unlinked_pads: boolean, context: ParseContext, flags: ParseFlags): Element
function parse_launch(pipeline_description: string | null): Element
function parse_launch_full(pipeline_description: string | null, context: ParseContext, flags: ParseFlags): Element
function parse_launchv(argv: string[]): Element
function parse_launchv_full(argv: string[], context: ParseContext, flags: ParseFlags): Element
function print_element_args(buf: GLib.String, indent: number, element: Element): void
function print_pad_caps(buf: GLib.String, indent: number, pad: Pad): void
function segtrap_is_enabled(): boolean
function segtrap_set_enabled(enabled: boolean): void
function structure_empty_new(name: string | null): Structure
function structure_from_string(string: string | null, end: string[]): Structure
function structure_id_empty_new(quark: GLib.Quark): Structure
function tag_exists(tag: string | null): boolean
function tag_get_description(tag: string | null): string | null
function tag_get_flag(tag: string | null): TagFlag
function tag_get_nick(tag: string | null): string | null
function tag_get_type(tag: string | null): GObject.GType
function tag_is_fixed(tag: string | null): boolean
function tag_list_copy_value(dest: any, list: TagList, tag: string | null): boolean
function tag_merge_strings_with_comma(dest: any, src: any): void
function tag_merge_use_first(dest: any, src: any): void
function tag_register(name: string | null, flag: TagFlag, type: GObject.GType, nick: string | null, blurb: string | null, func: TagMergeFunc): void
function trace_read_tsc(): /* dst */ number
function type_find_helper(src: Pad, size: number): Caps
function type_find_helper_for_buffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps
function type_find_helper_for_extension(obj: Object, extension: string | null): Caps
function type_find_helper_get_range(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, prob: TypeFindProbability): Caps
function type_find_helper_get_range_ext(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, extension: string | null, prob: TypeFindProbability): Caps
function type_find_register(plugin: Plugin, name: string | null, rank: number, func: TypeFindFunction, extensions: string[], possible_caps: Caps, data: any, data_notify: GLib.DestroyNotify): boolean
function type_register_static_full(parent_type: GObject.GType, type_name: string | null, class_size: number, base_init: GObject.BaseInitFunc, base_finalize: GObject.BaseFinalizeFunc, class_init: GObject.ClassInitFunc, class_finalize: GObject.ClassFinalizeFunc, instance_size: number, n_preallocs: number, instance_init: GObject.InstanceInitFunc, value_table: GObject.TypeValueTable, flags: GObject.TypeFlags): GObject.GType
function update_registry(): boolean
function uri_construct(protocol: string | null, location: string | null): string | null
function uri_get_location(uri: string | null): string | null
function uri_get_protocol(uri: string | null): string | null
function uri_has_protocol(uri: string | null, protocol: string | null): boolean
function uri_is_valid(uri: string | null): boolean
function uri_protocol_is_supported(type: URIType, protocol: string | null): boolean
function uri_protocol_is_valid(protocol: string | null): boolean
function util_array_binary_search(array: any, num_elements: number, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: any, user_data: any): any
function util_double_to_fraction(src: number): [ /* dest_n */ number, /* dest_d */ number ]
function util_dump_mem(mem: number[], size: number): void
function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
function util_fraction_to_double(src_n: number, src_d: number): /* dest */ number
function util_gdouble_to_guint64(value: number): number
function util_get_timestamp(): ClockTime
function util_greatest_common_divisor(a: number, b: number): number
function util_guint64_to_gdouble(value: number): number
function util_seqnum_compare(s1: number, s2: number): number
function util_seqnum_next(): number
function util_set_object_arg(object: GObject.Object, name: string | null, value: string | null): void
function util_set_value_from_string(value: any, value_str: string | null): void
function util_uint64_scale(val: number, num: number, denom: number): number
function util_uint64_scale_ceil(val: number, num: number, denom: number): number
function util_uint64_scale_int(val: number, num: number, denom: number): number
function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number
function util_uint64_scale_int_round(val: number, num: number, denom: number): number
function util_uint64_scale_round(val: number, num: number, denom: number): number
function value_array_append_value(value: any, append_value: any): void
function value_array_get_size(value: any): number
function value_array_get_value(value: any, index: number): any
function value_array_prepend_value(value: any, prepend_value: any): void
function value_can_compare(value1: any, value2: any): boolean
function value_can_intersect(value1: any, value2: any): boolean
function value_can_subtract(minuend: any, subtrahend: any): boolean
function value_can_union(value1: any, value2: any): boolean
function value_compare(value1: any, value2: any): number
function value_deserialize(dest: any, src: string | null): boolean
function value_dup_mini_object(value: any): MiniObject
function value_fraction_multiply(product: any, factor1: any, factor2: any): boolean
function value_fraction_subtract(dest: any, minuend: any, subtrahend: any): boolean
function value_get_caps(value: any): Caps
function value_get_date(value: any): GLib.Date
function value_get_double_range_max(value: any): number
function value_get_double_range_min(value: any): number
function value_get_fourcc(value: any): number
function value_get_fraction_denominator(value: any): number
function value_get_fraction_numerator(value: any): number
function value_get_fraction_range_max(value: any): any
function value_get_fraction_range_min(value: any): any
function value_get_int_range_max(value: any): number
function value_get_int_range_min(value: any): number
function value_get_mini_object(value: any): MiniObject
function value_get_structure(value: any): Structure
function value_init_and_copy(dest: any, src: any): void
function value_intersect(dest: any, value1: any, value2: any): boolean
function value_is_fixed(value: any): boolean
function value_list_append_value(value: any, append_value: any): void
function value_list_concat(dest: any, value1: any, value2: any): void
function value_list_get_size(value: any): number
function value_list_get_value(value: any, index: number): any
function value_list_prepend_value(value: any, prepend_value: any): void
function value_register(table: ValueTable): void
function value_register_intersect_func(type1: GObject.GType, type2: GObject.GType, func: ValueIntersectFunc): void
function value_register_subtract_func(minuend_type: GObject.GType, subtrahend_type: GObject.GType, func: ValueSubtractFunc): void
function value_register_union_func(type1: GObject.GType, type2: GObject.GType, func: ValueUnionFunc): void
function value_serialize(value: any): string | null
function value_set_caps(value: any, caps: Caps): void
function value_set_date(value: any, date: GLib.Date): void
function value_set_double_range(value: any, start: number, end: number): void
function value_set_fourcc(value: any, fourcc: number): void
function value_set_fraction(value: any, numerator: number, denominator: number): void
function value_set_fraction_range(value: any, start: any, end: any): void
function value_set_fraction_range_full(value: any, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void
function value_set_int_range(value: any, start: number, end: number): void
function value_set_mini_object(value: any, mini_object: MiniObject): void
function value_set_structure(value: any, structure: Structure): void
function value_subtract(dest: any, minuend: any, subtrahend: any): boolean
function value_take_mini_object(value: any, mini_object: MiniObject): void
function value_union(dest: any, value1: any, value2: any): boolean
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function version_string(): string | null
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
 * @returns the buffer to replace @buffer in the list, or NULL to remove @buffer
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
 * @returns a #GstBufferListItem
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
 * @returns %FALSE if the event source should be removed.
 */
interface BusFunc {
    (bus: Bus, message: Message, data: any): boolean
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
 * @returns #GstBusSyncReply stating what to do with the message
 */
interface BusSyncHandler {
    (bus: Bus, message: Message, data: any): BusSyncReply
}
/**
 * The function prototype of the callback.
 * @callback 
 * @param clock The clock that triggered the callback
 * @param time The time it was triggered
 * @param id The #GstClockID that expired
 * @returns %TRUE or %FALSE (currently unused)
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
 * @returns a #GstBuffer that contains the clipped data of @buffer or NULL when
 */
interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, buffer: Buffer): Buffer
}
/**
 * A function that will be called when all pads have received data.
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 * @returns #GST_FLOW_OK for success
 */
interface CollectPadsFunction {
    (pads: CollectPads): FlowReturn
}
/**
 * A function to create a copy of some object or
 * increase its reference count.
 * @callback 
 * @param object The object to copy
 * @returns a copy of the object or the same object with increased reference count
 */
interface CopyFunction {
    (object: any): any
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
 * @returns #TRUE if the queue should be considered full.
 */
interface DataQueueCheckFullFunction {
    (queue: DataQueue, visible: number, bytes: number, time: number, checkdata: any): boolean
}
interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata: any): void
}
interface DataQueueFullCallback {
    (queue: DataQueue, checkdata: any): void
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
 * @returns %TRUE for success.
 */
interface FilterFunc {
    (obj: any): boolean
}
/**
 * Function to filter out entries in the index.
 * to the index, %FALSE otherwise.
 * @callback 
 * @param index The index being queried
 * @param entry The entry to be added.
 * @returns This function should return %TRUE if the entry is to be added
 */
interface IndexFilter {
    (index: Index, entry: IndexEntry): boolean
}
/**
 * Function to resolve ids to writer descriptions.
 * @callback 
 * @param index the index being queried.
 * @param writer The object that wants to write
 * @param writer_string A description of the writer.
 * @returns %TRUE if an id could be assigned to the writer.
 */
interface IndexResolver {
    (index: Index, writer: Object, writer_string: string[]): boolean
}
/**
 * The function that will be called when a #GList iterator is freed. The
 * owner of the #GList iterator can then clean up its resources.
 * @callback 
 * @param owner the owner of the iterator
 */
interface IteratorDisposeFunction {
    (owner: any): void
}
/**
 * A function to be passed to gst_iterator_fold().
 * @callback 
 * @param item the item to fold
 * @param ret a #GValue collecting the result
 * @returns TRUE if the fold should continue, FALSE if it should stop.
 */
interface IteratorFoldFunction {
    (item: any, ret: any): boolean
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
 * @returns the result of the operation.
 */
interface IteratorItemFunction {
    (it: Iterator, item: any): IteratorItem
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
 * @returns the result of the operation.
 */
interface IteratorNextFunction {
    (it: Iterator, result: any): IteratorResult
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
    (category: DebugCategory, level: DebugLevel, file: string | null, function_: string | null, line: number, object: GObject.Object, message: DebugMessage, data: any): void
}
/**
 * Virtual function prototype for methods to create copies of instances.
 * @callback 
 * @param obj MiniObject to copy
 * @returns reference to cloned instance.
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
 * @returns TRUE if the caps can be accepted by the pad.
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
 * @returns TRUE if the pad could be activated.
 */
interface PadActivateFunction {
    (pad: Pad): boolean
}
/**
 * The prototype of the push and pull activate functions.
 * @callback 
 * @param pad a #GstPad
 * @param active activate or deactivate the pad.
 * @returns TRUE if the pad could be activated or deactivated.
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
 * @returns #GST_FLOW_OK if @buf contains a valid buffer, any other return
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
 * @returns #GST_FLOW_OK for success
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
 * @returns #GST_FLOW_OK for success
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
 * @returns TRUE if the pad can operate in pull mode.
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
 * @returns TRUE if the dispatching procedure has to be stopped.
 */
interface PadDispatcherFunction {
    (pad: Pad, data: any): boolean
}
/**
 * Function signature to handle an event for the pad.
 * @callback 
 * @param pad the #GstPad to handle the event.
 * @param event the #GstEvent to handle.
 * @returns TRUE if the pad could handle the event.
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
 * @returns a newly allocated copy #GstCaps of the pad.
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
 * @returns #GST_FLOW_OK for success and a valid buffer in @buffer. Any other
 */
interface PadGetRangeFunction {
    (pad: Pad, offset: number, length: number, buffer: Buffer): FlowReturn
}
/**
 * The signature of the internal pad link function.
 * @callback 
 * @param pad The #GstPad to query.
 * @returns returns
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
 * @returns a new #GstIterator that will iterate over all pads that are
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
 * @returns TRUE if the query could be performed.
 */
interface PadQueryFunction {
    (pad: Pad, query: Query): boolean
}
/**
 * The signature of the query types function.
 * @callback 
 * @param pad a #GstPad to query
 * @returns a constant array of query types
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
 * @returns TRUE if the caps could be set on the pad.
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
 * @returns %TRUE for a positive match, %FALSE otherwise
 */
interface PluginFeatureFilter {
    (feature: PluginFeature): boolean
}
/**
 * A function that can be used with e.g. gst_registry_plugin_filter()
 * to get a list of plugins that match certain criteria.
 * @callback 
 * @param plugin the plugin to check
 * @returns TRUE for a positive match, FALSE otherwise
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
 * @returns %TRUE if plugin initialised successfully
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
 * @returns %TRUE if plugin initialised successfully
 */
interface PluginInitFunc {
    (plugin: Plugin): boolean
}
/**
 * A function that will be called in gst_structure_foreach(). The function may
 * not modify `value`.
 * the foreach operation should stop with FALSE.
 * @callback 
 * @param field_id the #GQuark of the field name
 * @param value the #GValue of the field
 * @returns TRUE if the foreach operation should continue, FALSE if
 */
interface StructureForeachFunc {
    (field_id: GLib.Quark, value: any): boolean
}
/**
 * A function that will be called in gst_structure_map_in_place(). The function
 * may modify `value`.
 * the map operation should stop with FALSE.
 * @callback 
 * @param field_id the #GQuark of the field name
 * @param value the #GValue of the field
 * @returns TRUE if the map operation should continue, FALSE if
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
    (list: TagList, tag: string | null): void
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
    (find: TypeFind, data: any): void
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
 * @returns GST_FLOW_OK for success
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
 * @returns one of GST_VALUE_LESS_THAN, GST_VALUE_EQUAL, GST_VALUE_GREATER_THAN
 */
interface ValueCompareFunc {
    (value1: any, value2: any): number
}
/**
 * Used by gst_value_deserialize() to parse a non-binary form into the #GValue.
 * @callback 
 * @param dest a #GValue
 * @param s a string
 * @returns %TRUE for success
 */
interface ValueDeserializeFunc {
    (dest: any, s: string | null): boolean
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
 * @returns %TRUE if the values can intersect
 */
interface ValueIntersectFunc {
    (dest: any, value1: any, value2: any): boolean
}
/**
 * Used by gst_value_serialize() to obtain a non-binary form of the #GValue.
 * @callback 
 * @param value1 a #GValue
 * @returns the string representation of the value
 */
interface ValueSerializeFunc {
    (value1: any): string | null
}
/**
 * Used by gst_value_subtract() to perform subtraction for a specific #GValue
 * type. Register a new implementation with gst_value_register_subtract_func().
 * @callback 
 * @param dest a #GValue for the result
 * @param minuend a #GValue operand
 * @param subtrahend a #GValue operand
 * @returns %TRUE if the subtraction is not empty
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
 * @returns %TRUE if a union was successful
 */
interface ValueUnionFunc {
    (dest: any, value1: any, value2: any): boolean
}
module ChildProxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-added`
     */
    interface ChildAddedSignalCallback {
        ($obj: ChildProxy, object: GObject.Object): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    interface ChildRemovedSignalCallback {
        ($obj: ChildProxy, object: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ChildProxy extends Object {

    // Owm methods of Gst-0.10.Gst.ChildProxy

    get_child_by_name(name: string | null): Object
    get_child_by_index(index: number): Object
    get_children_count(): number

    // Own virtual methods of Gst-0.10.Gst.ChildProxy

    vfunc_get_child_by_index(index: number): Object
    vfunc_get_children_count(): number

    // Own signals of Gst-0.10.Gst.ChildProxy

    connect(sigName: "child-added", callback: ChildProxy.ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: ChildProxy.ChildAddedSignalCallback): number
    emit(sigName: "child-added", object: GObject.Object, ...args: any[]): void
    connect(sigName: "child-removed", callback: ChildProxy.ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: ChildProxy.ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", object: GObject.Object, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.ChildProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: ChildProxy.ConstructorProperties) 
    _init(config?: ChildProxy.ConstructorProperties): void
}

module ImplementsInterface {

    // Constructor properties interface

    interface ConstructorProperties extends Element.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ImplementsInterface extends Element {

    // Conflicting properties

    object: any

    // Own virtual methods of Gst-0.10.Gst.ImplementsInterface

    vfunc_supported(iface_type: GObject.GType): boolean

    // Class property signals of Gst-0.10.Gst.ImplementsInterface

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: ImplementsInterface.ConstructorProperties) 
    _init(config?: ImplementsInterface.ConstructorProperties): void
}

module TagSetter {

    // Constructor properties interface

    interface ConstructorProperties extends Element.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface TagSetter extends Element {

    // Conflicting properties

    object: any

    // Owm methods of Gst-0.10.Gst.TagSetter

    reset_tags(): void
    merge_tags(list: TagList, mode: TagMergeMode): void
    add_tag_value(mode: TagMergeMode, tag: string | null, value: any): void
    get_tag_list(): TagList
    set_tag_merge_mode(mode: TagMergeMode): void
    get_tag_merge_mode(): TagMergeMode

    // Class property signals of Gst-0.10.Gst.TagSetter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: TagSetter.ConstructorProperties) 
    _init(config?: TagSetter.ConstructorProperties): void
}

module URIHandler {

    // Signal callback interfaces

    /**
     * Signal callback interface for `new-uri`
     */
    interface NewUriSignalCallback {
        ($obj: URIHandler, object: string): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface URIHandler {

    // Owm methods of Gst-0.10.Gst.URIHandler

    get_uri_type(): number
    get_protocols(): string[]
    get_uri(): string | null
    set_uri(uri: string | null): boolean
    new_uri(uri: string | null): void

    // Own virtual methods of Gst-0.10.Gst.URIHandler

    vfunc_get_uri(): string | null
    vfunc_set_uri(uri: string | null): boolean

    // Own signals of Gst-0.10.Gst.URIHandler

    connect(sigName: "new-uri", callback: URIHandler.NewUriSignalCallback): number
    connect_after(sigName: "new-uri", callback: URIHandler.NewUriSignalCallback): number
    emit(sigName: "new-uri", object: string, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.URIHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: URIHandler.ConstructorProperties) 
    _init(config?: URIHandler.ConstructorProperties): void
}

module Adapter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Adapter {

    // Own fields of Gst-0.10.Gst.Adapter

    object: GObject.Object
    buflist: any[]
    size: number
    skip: number
    assembled_data: any
    assembled_size: number
    assembled_len: number
    buflist_end: any[]
    priv: AdapterPrivate
    _gst_reserved: any[]

    // Owm methods of Gst-0.10.Gst.Adapter

    clear(): void
    push(buf: Buffer): void
    peek(size: number): number[]
    copy(dest: number[], offset: number, size: number): void
    flush(flush: number): void
    take(nbytes: number): number[]
    take_buffer(nbytes: number): Buffer
    available(): number
    available_fast(): number
    prev_timestamp(): [ /* returnType */ ClockTime, /* distance */ number ]
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]

    // Class property signals of Gst-0.10.Gst.Adapter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Adapter.ConstructorProperties) 
    constructor() 
    static new(): Adapter
    _init(config?: Adapter.ConstructorProperties): void
}

module BaseSink {

    // Constructor properties interface

    interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.BaseSink

        async?: boolean | null
        blocksize?: number | null
        enable_last_buffer?: boolean | null
        max_lateness?: number | null
        preroll_queue_len?: number | null
        qos?: boolean | null
        render_delay?: number | null
        sync?: boolean | null
        ts_offset?: number | null
        enableLastBuffer?: boolean | null
        maxLateness?: number | null
        prerollQueueLen?: number | null
        renderDelay?: number | null
        tsOffset?: number | null
    }

}

interface BaseSink {

    // Own properties of Gst-0.10.Gst.BaseSink

    async: boolean
    blocksize: number
    enable_last_buffer: boolean
    enableLastBuffer: boolean
    readonly last_buffer: Buffer
    readonly lastBuffer: Buffer
    max_lateness: number
    maxLateness: number
    preroll_queue_len: number
    prerollQueueLen: number
    qos: boolean
    render_delay: number
    renderDelay: number
    ts_offset: number
    tsOffset: number

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.BaseSink

    element: Element
    sinkpad: Pad
    pad_mode: ActivateMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_queue: GLib.Queue
    preroll_queue_max_len: number
    preroll_queued: number
    buffers_queued: number
    events_queued: number
    eos: boolean
    eos_queued: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Segment
    clock_id: ClockID
    end_time: ClockTime
    sync: boolean
    flushing: boolean
    priv: BaseSinkPrivate

    // Owm methods of Gst-0.10.Gst.BaseSink

    do_preroll(obj: MiniObject): FlowReturn
    wait_preroll(): FlowReturn
    set_sync(sync: boolean): void
    get_sync(): boolean
    set_max_lateness(max_lateness: number): void
    get_max_lateness(): number
    set_qos_enabled(enabled: boolean): void
    is_qos_enabled(): boolean
    set_async_enabled(enabled: boolean): void
    is_async_enabled(): boolean
    set_ts_offset(offset: ClockTimeDiff): void
    get_ts_offset(): ClockTimeDiff
    get_last_buffer(): Buffer
    set_last_buffer_enabled(enable: boolean): void
    is_last_buffer_enabled(): boolean
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ boolean, /* live */ boolean, /* upstream_live */ boolean ]
    get_latency(): ClockTime
    set_render_delay(delay: ClockTime): void
    get_render_delay(): ClockTime
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    wait_clock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn
    wait_eos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn

    // Own virtual methods of Gst-0.10.Gst.BaseSink

    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): boolean
    vfunc_buffer_alloc(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_event(event: Event): boolean
    vfunc_preroll(buffer: Buffer): FlowReturn
    vfunc_render(buffer: Buffer): FlowReturn
    vfunc_async_play(): StateChangeReturn
    vfunc_activate_pull(active: boolean): boolean
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): boolean
    vfunc_render_list(buffer_list: BufferList): FlowReturn

    // Class property signals of Gst-0.10.Gst.BaseSink

    connect(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: BaseSink.ConstructorProperties) 
    _init(config?: BaseSink.ConstructorProperties): void
}

module BaseSrc {

    // Constructor properties interface

    interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.BaseSrc

        blocksize?: number | null
        do_timestamp?: boolean | null
        num_buffers?: number | null
        typefind?: boolean | null
        doTimestamp?: boolean | null
        numBuffers?: number | null
    }

}

interface BaseSrc {

    // Own properties of Gst-0.10.Gst.BaseSrc

    do_timestamp: boolean
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.BaseSrc

    element: Element
    srcpad: Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    blocksize: number
    can_activate_push: boolean
    pad_mode: ActivateMode
    seekable: boolean
    random_access: boolean
    clock_id: ClockID
    end_time: ClockTime
    segment: Segment
    need_newsegment: boolean
    offset: number
    size: number
    num_buffers: number
    num_buffers_left: number
    priv: BaseSrcPrivate

    // Owm methods of Gst-0.10.Gst.BaseSrc

    wait_playing(): FlowReturn
    set_live(live: boolean): void
    set_format(format: Format): void
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    set_do_timestamp(timestamp: boolean): void
    get_do_timestamp(): boolean
    new_seamless_segment(start: number, stop: number, position: number): boolean

    // Own virtual methods of Gst-0.10.Gst.BaseSrc

    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): boolean
    vfunc_negotiate(): boolean
    vfunc_newsegment(): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_get_size(): [ /* returnType */ boolean, /* size */ number ]
    vfunc_is_seekable(): boolean
    vfunc_unlock(): boolean
    vfunc_event(event: Event): boolean
    vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn
    vfunc_do_seek(segment: Segment): boolean
    vfunc_query(query: Query): boolean
    vfunc_check_get_range(): boolean
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): boolean
    vfunc_prepare_seek_segment(seek: Event, segment: Segment): boolean

    // Class property signals of Gst-0.10.Gst.BaseSrc

    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-buffers", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: BaseSrc.ConstructorProperties) 
    _init(config?: BaseSrc.ConstructorProperties): void
}

module BaseTransform {

    // Constructor properties interface

    interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.BaseTransform

        qos?: boolean | null
    }

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
    always_in_place: boolean
    cache_caps1: Caps
    cache_caps1_size: number
    cache_caps2: Caps
    cache_caps2_size: number
    have_same_caps: boolean
    delay_configure: boolean
    pending_configure: boolean
    negotiated: boolean
    have_newsegment: boolean
    segment: Segment
    transform_lock: GLib.Mutex
    priv: BaseTransformPrivate
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.BaseTransform

    set_passthrough(passthrough: boolean): void
    is_passthrough(): boolean
    set_in_place(in_place: boolean): void
    is_in_place(): boolean
    update_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void
    set_qos_enabled(enabled: boolean): void
    is_qos_enabled(): boolean
    set_gap_aware(gap_aware: boolean): void
    suggest(caps: Caps, size: number): void
    reconfigure(): void

    // Own virtual methods of Gst-0.10.Gst.BaseTransform

    vfunc_transform_caps(direction: PadDirection, caps: Caps): Caps
    vfunc_fixate_caps(direction: PadDirection, caps: Caps, othercaps: Caps): void
    vfunc_transform_size(direction: PadDirection, caps: Caps, size: number, othercaps: Caps): [ /* returnType */ boolean, /* othersize */ number ]
    vfunc_get_unit_size(caps: Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_set_caps(incaps: Caps, outcaps: Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_event(event: Event): boolean
    vfunc_transform(inbuf: Buffer, outbuf: Buffer): FlowReturn
    vfunc_transform_ip(buf: Buffer): FlowReturn
    vfunc_prepare_output_buffer(input: Buffer, size: number, caps: Caps, buf: Buffer): FlowReturn
    vfunc_src_event(event: Event): boolean
    vfunc_before_transform(buffer: Buffer): void
    vfunc_accept_caps(direction: PadDirection, caps: Caps): boolean

    // Class property signals of Gst-0.10.Gst.BaseTransform

    connect(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: BaseTransform.ConstructorProperties) 
    _init(config?: BaseTransform.ConstructorProperties): void
}

module Bin {

    // Signal callback interfaces

    /**
     * Signal callback interface for `do-latency`
     */
    interface DoLatencySignalCallback {
        ($obj: Bin): boolean
    }

    /**
     * Signal callback interface for `element-added`
     */
    interface ElementAddedSignalCallback {
        ($obj: Bin, object: Element): void
    }

    /**
     * Signal callback interface for `element-removed`
     */
    interface ElementRemovedSignalCallback {
        ($obj: Bin, object: Element): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends ChildProxy.ConstructorProperties, Element.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.Bin

        async_handling?: boolean | null
        asyncHandling?: boolean | null
    }

}

interface Bin extends ChildProxy {

    // Own properties of Gst-0.10.Gst.Bin

    async_handling: boolean
    asyncHandling: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.Bin

    element: Element
    numchildren: number
    children: any[]
    children_cookie: number
    child_bus: Bus
    messages: any[]
    polling: boolean
    state_dirty: boolean
    clock_dirty: boolean
    provided_clock: Clock
    clock_provider: Element
    priv: BinPrivate
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Bin

    add(element: Element): boolean
    remove(element: Element): boolean
    get_by_name(name: string | null): Element
    get_by_name_recurse_up(name: string | null): Element
    get_by_interface(iface: GObject.GType): Element
    iterate_elements(): Iterator
    iterate_sorted(): Iterator
    iterate_recurse(): Iterator
    iterate_sinks(): Iterator
    iterate_sources(): Iterator
    iterate_all_by_interface(iface: GObject.GType): Iterator
    recalculate_latency(): boolean
    find_unlinked_pad(direction: PadDirection): Pad
    find_unconnected_pad(direction: PadDirection): Pad

    // Own virtual methods of Gst-0.10.Gst.Bin

    vfunc_add_element(element: Element): boolean
    vfunc_remove_element(element: Element): boolean
    vfunc_handle_message(message: Message): void

    // Own signals of Gst-0.10.Gst.Bin

    connect(sigName: "do-latency", callback: Bin.DoLatencySignalCallback): number
    connect_after(sigName: "do-latency", callback: Bin.DoLatencySignalCallback): number
    emit(sigName: "do-latency", ...args: any[]): void
    connect(sigName: "element-added", callback: Bin.ElementAddedSignalCallback): number
    connect_after(sigName: "element-added", callback: Bin.ElementAddedSignalCallback): number
    emit(sigName: "element-added", object: Element, ...args: any[]): void
    connect(sigName: "element-removed", callback: Bin.ElementRemovedSignalCallback): number
    connect_after(sigName: "element-removed", callback: Bin.ElementRemovedSignalCallback): number
    emit(sigName: "element-removed", object: Element, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Bin

    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Bin.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): Bin
    _init(config?: Bin.ConstructorProperties): void
}

interface Buffer {

    // Own fields of Gst-0.10.Gst.Buffer

    mini_object: MiniObject
    data: any
    size: number
    timestamp: ClockTime
    duration: ClockTime
    caps: Caps
    offset: number
    offset_end: number
    malloc_data: any
    free_func: GLib.FreeFunc
    parent: Buffer
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Buffer

    copy_metadata(src: Buffer, flags: BufferCopyFlags): void
    is_metadata_writable(): boolean
    make_metadata_writable(): Buffer
    get_caps(): Caps
    set_caps(caps: Caps): void
    create_sub(offset: number, size: number): Buffer
    is_span_fast(buf2: Buffer): boolean
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
    static new_and_alloc(size: number): Buffer
    static try_new_and_alloc(size: number): Buffer
}

interface BufferList {

    // Owm methods of Gst-0.10.Gst.BufferList

    n_groups(): number
    foreach(func: BufferListFunc, user_data: any): void
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

module Bus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `message`
     */
    interface MessageSignalCallback {
        ($obj: Bus, object: Message): void
    }

    /**
     * Signal callback interface for `sync-message`
     */
    interface SyncMessageSignalCallback {
        ($obj: Bus, object: Message): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Bus {

    // Own fields of Gst-0.10.Gst.Bus

    object: any
    queue: GLib.Queue
    queue_lock: GLib.Mutex
    sync_handler: BusSyncHandler
    sync_handler_data: any
    signal_watch_id: number
    num_signal_watchers: number
    priv: BusPrivate
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Bus

    post(message: Message): boolean
    have_pending(): boolean
    peek(): Message
    pop(): Message
    pop_filtered(types: MessageType): Message
    timed_pop(timeout: ClockTime): Message
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message
    set_flushing(flushing: boolean): void
    set_sync_handler(func: BusSyncHandler, data: any): void
    create_watch(): GLib.Source
    add_watch_full(priority: number, func: BusFunc, user_data: any): number
    add_watch(func: BusFunc, user_data: any): number
    poll(events: MessageType, timeout: ClockTimeDiff): Message
    async_signal_func(message: Message, data: any): boolean
    sync_signal_handler(message: Message, data: any): BusSyncReply
    add_signal_watch(): void
    add_signal_watch_full(priority: number): void
    remove_signal_watch(): void
    enable_sync_message_emission(): void
    disable_sync_message_emission(): void

    // Own signals of Gst-0.10.Gst.Bus

    connect(sigName: "message", callback: Bus.MessageSignalCallback): number
    connect_after(sigName: "message", callback: Bus.MessageSignalCallback): number
    emit(sigName: "message", object: Message, ...args: any[]): void
    connect(sigName: "sync-message", callback: Bus.SyncMessageSignalCallback): number
    connect_after(sigName: "sync-message", callback: Bus.SyncMessageSignalCallback): number
    emit(sigName: "sync-message", object: Message, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Bus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Bus.ConstructorProperties) 
    constructor() 
    static new(): Bus
    _init(config?: Bus.ConstructorProperties): void
}

module Clock {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.Clock

        stats?: boolean | null
        timeout?: number | null
        window_size?: number | null
        window_threshold?: number | null
        windowSize?: number | null
        windowThreshold?: number | null
    }

}

interface Clock {

    // Own properties of Gst-0.10.Gst.Clock

    windowSize: number
    windowThreshold: number

    // Own fields of Gst-0.10.Gst.Clock

    object: any
    slave_lock: GLib.Mutex
    internal_calibration: ClockTime
    external_calibration: ClockTime
    rate_numerator: ClockTime
    rate_denominator: ClockTime
    last_time: ClockTime
    entries: any[]
    entries_changed: GLib.Cond
    resolution: ClockTime
    stats: boolean
    master: Clock
    filling: boolean
    window_size: number
    window_threshold: number
    time_index: number
    timeout: ClockTime
    times: ClockTime
    clockid: ClockID

    // Owm methods of Gst-0.10.Gst.Clock

    set_resolution(resolution: ClockTime): ClockTime
    get_resolution(): ClockTime
    get_time(): ClockTime
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master: Clock): boolean
    get_master(): Clock
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    get_internal_time(): ClockTime
    adjust_unlocked(internal: ClockTime): ClockTime
    unadjust_unlocked(external: ClockTime): ClockTime
    new_single_shot_id(time: ClockTime): ClockID
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID

    // Own virtual methods of Gst-0.10.Gst.Clock

    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_wait(entry: ClockEntry): ClockReturn
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn

    // Class property signals of Gst-0.10.Gst.Clock

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
 * #GstClock base structure. The values of this structure are
 * protected for subclasses, use the methods to use the #GstClock.
 * @class 
 */
class Clock extends Object {

    // Own properties of Gst-0.10.Gst.Clock

    static name: string
    static $gtype: GObject.GType<Clock>

    // Constructors of Gst-0.10.Gst.Clock

    constructor(config?: Clock.ConstructorProperties) 
    _init(config?: Clock.ConstructorProperties): void
    static id_ref(id: ClockID): ClockID
    static id_unref(id: ClockID): void
    static id_compare_func(id1: any, id2: any): number
    static id_get_time(id: ClockID): ClockTime
    static id_wait(id: ClockID, jitter: ClockTimeDiff): ClockReturn
    static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn
    static id_wait_async_full(id: ClockID, func: ClockCallback): ClockReturn
    static id_unschedule(id: ClockID): void
}

module CollectPads {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CollectPads {

    // Own fields of Gst-0.10.Gst.CollectPads

    object: any
    data: any[]
    cookie: number
    cond: GLib.Cond
    func: CollectPadsFunction
    user_data: any
    numpads: number
    queuedpads: number
    eospads: number
    started: boolean

    // Owm methods of Gst-0.10.Gst.CollectPads

    set_function(func: CollectPadsFunction, user_data: any): void
    set_clip_function(clipfunc: CollectPadsClipFunction, user_data: any): void
    add_pad(pad: Pad, size: number): CollectData
    add_pad_full(pad: Pad, size: number, destroy_notify: CollectDataDestroyNotify): CollectData
    remove_pad(pad: Pad): boolean
    is_active(pad: Pad): boolean
    collect(): FlowReturn
    collect_range(offset: number, length: number): FlowReturn
    start(): void
    stop(): void
    set_flushing(flushing: boolean): void
    peek(data: CollectData): Buffer
    pop(data: CollectData): Buffer
    available(): number
    read(data: CollectData, size: number): [ /* returnType */ number, /* bytes */ number ]
    read_buffer(data: CollectData, size: number): Buffer
    take_buffer(data: CollectData, size: number): Buffer
    flush(data: CollectData, size: number): number

    // Class property signals of Gst-0.10.Gst.CollectPads

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: CollectPads.ConstructorProperties) 
    constructor() 
    static new(): CollectPads
    _init(config?: CollectPads.ConstructorProperties): void
}

module DataQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `empty`
     */
    interface EmptySignalCallback {
        ($obj: DataQueue): void
    }

    /**
     * Signal callback interface for `full`
     */
    interface FullSignalCallback {
        ($obj: DataQueue): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DataQueue {

    // Own properties of Gst-0.10.Gst.DataQueue

    readonly current_level_bytes: number
    readonly currentLevelBytes: number
    readonly current_level_time: number
    readonly currentLevelTime: number
    readonly current_level_visible: number
    readonly currentLevelVisible: number

    // Own fields of Gst-0.10.Gst.DataQueue

    object: GObject.Object
    queue: GLib.Queue
    cur_level: DataQueueSize
    checkfull: DataQueueCheckFullFunction
    checkdata: any
    qlock: GLib.Mutex
    item_add: GLib.Cond
    item_del: GLib.Cond
    flushing: boolean
    fullcallback: DataQueueFullCallback
    emptycallback: DataQueueEmptyCallback
    _gst_reserved: any[]

    // Owm methods of Gst-0.10.Gst.DataQueue

    push(item: DataQueueItem): boolean
    pop(item: DataQueueItem): boolean
    flush(): void
    set_flushing(flushing: boolean): void
    drop_head(type: GObject.GType): boolean
    is_full(): boolean
    is_empty(): boolean
    get_level(level: DataQueueSize): void
    limits_changed(): void

    // Own signals of Gst-0.10.Gst.DataQueue

    connect(sigName: "empty", callback: DataQueue.EmptySignalCallback): number
    connect_after(sigName: "empty", callback: DataQueue.EmptySignalCallback): number
    emit(sigName: "empty", ...args: any[]): void
    connect(sigName: "full", callback: DataQueue.FullSignalCallback): number
    connect_after(sigName: "full", callback: DataQueue.FullSignalCallback): number
    emit(sigName: "full", ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.DataQueue

    connect(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-bytes", ...args: any[]): void
    connect(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-time", ...args: any[]): void
    connect(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: DataQueue.ConstructorProperties) 
    constructor(checkfull: DataQueueCheckFullFunction) 
    static new(checkfull: DataQueueCheckFullFunction): DataQueue
    static new_full(checkfull: DataQueueCheckFullFunction, fullcallback: DataQueueFullCallback, emptycallback: DataQueueEmptyCallback): DataQueue
    _init(config?: DataQueue.ConstructorProperties): void
}

module Element {

    // Signal callback interfaces

    /**
     * Signal callback interface for `no-more-pads`
     */
    interface NoMorePadsSignalCallback {
        ($obj: Element): void
    }

    /**
     * Signal callback interface for `pad-added`
     */
    interface PadAddedSignalCallback {
        ($obj: Element, object: Pad): void
    }

    /**
     * Signal callback interface for `pad-removed`
     */
    interface PadRemovedSignalCallback {
        ($obj: Element, object: Pad): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Element {

    // Own fields of Gst-0.10.Gst.Element

    object: any
    state_lock: any
    state_cond: GLib.Cond
    state_cookie: number
    current_state: State
    next_state: State
    pending_state: State
    last_return: StateChangeReturn
    bus: Bus
    clock: Clock
    base_time: ClockTimeDiff
    numpads: number
    pads: any[]
    numsrcpads: number
    srcpads: any[]
    numsinkpads: number
    sinkpads: any[]
    pads_cookie: number

    // Owm methods of Gst-0.10.Gst.Element

    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string | null): Pad
    get_static_pad(name: string | null): Pad
    get_request_pad(name: string | null): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string | null, function_: string | null, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.GType): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string | null, dest: Element, destpadname: string | null): boolean
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string | null, dest: Element, destpadname: string | null): void
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname: string | null, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void

    // Own virtual methods of Gst-0.10.Gst.Element

    vfunc_request_new_pad(templ: PadTemplate, name: string | null): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean

    // Own signals of Gst-0.10.Gst.Element

    connect(sigName: "no-more-pads", callback: Element.NoMorePadsSignalCallback): number
    connect_after(sigName: "no-more-pads", callback: Element.NoMorePadsSignalCallback): number
    emit(sigName: "no-more-pads", ...args: any[]): void
    connect(sigName: "pad-added", callback: Element.PadAddedSignalCallback): number
    connect_after(sigName: "pad-added", callback: Element.PadAddedSignalCallback): number
    emit(sigName: "pad-added", object: Pad, ...args: any[]): void
    connect(sigName: "pad-removed", callback: Element.PadRemovedSignalCallback): number
    connect_after(sigName: "pad-removed", callback: Element.PadRemovedSignalCallback): number
    emit(sigName: "pad-removed", object: Pad, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Element

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Element.ConstructorProperties) 
    _init(config?: Element.ConstructorProperties): void
    static register(plugin: Plugin, name: string | null, rank: number, type: GObject.GType): boolean
    static make_from_uri(type: URIType, uri: string | null, elementname: string | null): Element
    static state_get_name(state: State): string | null
    static state_change_return_get_name(state_ret: StateChangeReturn): string | null
}

module ElementFactory {

    // Constructor properties interface

    interface ConstructorProperties extends PluginFeature.ConstructorProperties {
    }

}

interface ElementFactory {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.ElementFactory

    parent: PluginFeature & Object
    type: GObject.GType
    details: ElementDetails
    staticpadtemplates: any[]
    numpadtemplates: number
    uri_type: number
    uri_protocols: string | null
    interfaces: any[]
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.ElementFactory

    get_element_type(): GObject.GType
    get_longname(): string | null
    get_klass(): string | null
    get_description(): string | null
    get_author(): string | null
    get_num_pad_templates(): number
    get_uri_type(): number
    get_uri_protocols(): string[]
    has_interface(interfacename: string | null): boolean
    create(name: string | null): Element
    can_src_caps(caps: Caps): boolean
    can_sink_caps(caps: Caps): boolean

    // Conflicting methods

    set_name(name: string | null): void

    // Overloads of set_name

    set_name(name: string | null): boolean
    set_name(name: string | null): boolean

    // Class property signals of Gst-0.10.Gst.ElementFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: ElementFactory.ConstructorProperties) 
    _init(config?: ElementFactory.ConstructorProperties): void
    static find(name: string | null): ElementFactory
    static make(factoryname: string | null, name: string | null): Element
}

interface Event {

    // Own fields of Gst-0.10.Gst.Event

    mini_object: MiniObject
    type: EventType
    timestamp: number
    src: Object
    structure: Structure

    // Owm methods of Gst-0.10.Gst.Event

    get_structure(): Structure
    has_name(name: string | null): boolean
    get_seqnum(): number
    set_seqnum(seqnum: number): void
    parse_new_segment(format: Format): [ /* update */ boolean, /* rate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parse_new_segment_full(format: Format): [ /* update */ boolean, /* rate */ number, /* applied_rate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parse_tag(taglist: TagList): void
    parse_buffer_size(format: Format): [ /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parse_qos(diff: ClockTimeDiff, timestamp: ClockTime): /* proportion */ number
    parse_seek(format: Format, flags: SeekFlags, start_type: SeekType, stop_type: SeekType): [ /* rate */ number, /* start */ number, /* stop */ number ]
    parse_latency(latency: ClockTime): void
    parse_step(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    parse_sink_message(msg: Message): void
}

/**
 * A #GstEvent.
 * @class 
 */
class Event extends MiniObject {

    // Own properties of Gst-0.10.Gst.Event

    static name: string

    // Constructors of Gst-0.10.Gst.Event

    static new_custom(type: EventType, structure: Structure): Event
    static new_flush_start(): Event
    static new_flush_stop(): Event
    static new_eos(): Event
    static new_new_segment(update: boolean, rate: number, format: Format, start: number, stop: number, position: number): Event
    static new_new_segment_full(update: boolean, rate: number, applied_rate: number, format: Format, start: number, stop: number, position: number): Event
    static new_tag(taglist: TagList): Event
    static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static new_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): Event
    static new_navigation(structure: Structure): Event
    static new_latency(latency: ClockTime): Event
    static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static new_sink_message(msg: Message): Event
    static type_get_name(type: EventType): string | null
    static type_to_quark(type: EventType): GLib.Quark
    static type_get_flags(type: EventType): EventTypeFlags
}

module GParamSpecMiniObject {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface GParamSpecMiniObject {

    // Class property signals of Gst-0.10.Gst.GParamSpecMiniObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GParamSpecMiniObject extends GObject.Object {

    // Own properties of Gst-0.10.Gst.GParamSpecMiniObject

    static name: string
    static $gtype: GObject.GType<GParamSpecMiniObject>

    // Constructors of Gst-0.10.Gst.GParamSpecMiniObject

    constructor(config?: GParamSpecMiniObject.ConstructorProperties) 
    _init(config?: GParamSpecMiniObject.ConstructorProperties): void
}

module GhostPad {

    // Constructor properties interface

    interface ConstructorProperties extends ProxyPad.ConstructorProperties {
    }

}

interface GhostPad {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.GhostPad

    pad: any
    priv: any

    // Owm methods of Gst-0.10.Gst.GhostPad

    get_target(): Pad
    set_target(newtarget: Pad): boolean
    construct(): boolean

    // Class property signals of Gst-0.10.Gst.GhostPad

    connect(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: GhostPad.ConstructorProperties) 
    constructor(name: string | null, target: Pad) 
    static new(name: string | null, target: Pad): GhostPad

    // Overloads of new

    static new(name: string | null, direction: PadDirection): Pad
    static new_no_target(name: string | null, dir: PadDirection): GhostPad
    static new_from_template(name: string | null, target: Pad, templ: PadTemplate): GhostPad

    // Overloads of new_from_template

    static new_from_template(templ: PadTemplate, name: string | null): Pad
    static new_no_target_from_template(name: string | null, templ: PadTemplate): GhostPad
    _init(config?: GhostPad.ConstructorProperties): void
}

module Index {

    // Signal callback interfaces

    /**
     * Signal callback interface for `entry-added`
     */
    interface EntryAddedSignalCallback {
        ($obj: Index, object: IndexEntry): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.Index

        resolver?: IndexResolver | null
    }

}

interface Index {

    // Own fields of Gst-0.10.Gst.Index

    object: any
    groups: any[]
    curgroup: IndexGroup
    maxgroup: number
    method: IndexResolverMethod
    resolver: IndexResolver
    resolver_user_data: any
    filter: IndexFilter
    filter_user_data: any
    filter_user_data_destroy: GLib.DestroyNotify
    writers: GLib.HashTable
    last_id: number
    resolver_user_data_destroy: GLib.DestroyNotify
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Index

    commit(id: number): void
    get_group(): number
    new_group(): number
    set_group(groupnum: number): boolean
    set_certainty(certainty: IndexCertainty): void
    get_certainty(): IndexCertainty
    set_filter(filter: IndexFilter, user_data: any): void
    set_filter_full(filter: IndexFilter, user_data: any): void
    set_resolver(resolver: IndexResolver, user_data: any): void
    set_resolver_full(resolver: IndexResolver, user_data: any): void
    get_writer_id(writer: Object): [ /* returnType */ boolean, /* id */ number ]
    add_format(id: number, format: Format): IndexEntry
    add_associationv(id: number, flags: AssocFlags, n: number, list: IndexAssociation): IndexEntry
    add_object(id: number, key: string | null, type: GObject.GType, object: any): IndexEntry
    add_id(id: number, description: string | null): IndexEntry
    get_assoc_entry(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number): IndexEntry
    get_assoc_entry_full(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc, user_data: any): IndexEntry

    // Own virtual methods of Gst-0.10.Gst.Index

    vfunc_get_writer_id(writer_string: string | null): [ /* returnType */ boolean, /* writer_id */ number ]
    vfunc_commit(id: number): void
    vfunc_add_entry(entry: IndexEntry): void
    vfunc_get_assoc_entry(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc, user_data: any): IndexEntry

    // Own signals of Gst-0.10.Gst.Index

    connect(sigName: "entry-added", callback: Index.EntryAddedSignalCallback): number
    connect_after(sigName: "entry-added", callback: Index.EntryAddedSignalCallback): number
    emit(sigName: "entry-added", object: IndexEntry, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Index

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Index.ConstructorProperties) 
    constructor() 
    static new(): Index
    _init(config?: Index.ConstructorProperties): void
}

module IndexFactory {

    // Constructor properties interface

    interface ConstructorProperties extends PluginFeature.ConstructorProperties {
    }

}

interface IndexFactory {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.IndexFactory

    feature: PluginFeature
    longdesc: string | null
    type: GObject.GType
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.IndexFactory

    destroy(): void
    create(): Index

    // Conflicting methods

    set_name(name: string | null): void

    // Overloads of set_name

    set_name(name: string | null): boolean
    set_name(name: string | null): boolean

    // Class property signals of Gst-0.10.Gst.IndexFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: IndexFactory.ConstructorProperties) 
    constructor(name: string | null, longdesc: string | null, type: GObject.GType) 
    static new(name: string | null, longdesc: string | null, type: GObject.GType): IndexFactory
    _init(config?: IndexFactory.ConstructorProperties): void
    static find(name: string | null): IndexFactory
    static make(name: string | null): Index
}

interface Message {

    // Own fields of Gst-0.10.Gst.Message

    mini_object: MiniObject
    lock: GLib.Mutex
    cond: GLib.Cond
    type: MessageType
    timestamp: number
    src: Object
    structure: Structure

    // Owm methods of Gst-0.10.Gst.Message

    get_seqnum(): number
    set_seqnum(seqnum: number): void
    parse_error(gerror: GLib.Error, debug: string[]): void
    parse_warning(gerror: GLib.Error, debug: string[]): void
    parse_info(gerror: GLib.Error, debug: string[]): void
    parse_tag(tag_list: TagList): void
    parse_tag_full(pad: Pad, tag_list: TagList): void
    parse_buffering(): /* percent */ number
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    parse_buffering_stats(mode: BufferingMode): [ /* avg_in */ number, /* avg_out */ number, /* buffering_left */ number ]
    parse_state_changed(oldstate: State, newstate: State, pending: State): void
    parse_step_done(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean, /* duration */ number, /* eos */ boolean ]
    parse_clock_provide(clock: Clock): /* ready */ boolean
    parse_clock_lost(clock: Clock): void
    parse_new_clock(clock: Clock): void
    parse_segment_start(format: Format): /* position */ number
    parse_segment_done(format: Format): /* position */ number
    parse_duration(format: Format): /* duration */ number
    parse_async_start(): /* new_base_time */ boolean
    parse_structure_change(type: StructureChangeType, owner: Element): /* busy */ boolean
    parse_stream_status(type: StreamStatusType, owner: Element): void
    set_stream_status_object(object: any): void
    get_stream_status_object(): any
    parse_request_state(state: State): void
    parse_step_start(format: Format): [ /* active */ boolean, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    set_qos_values(jitter: number, proportion: number, quality: number): void
    set_qos_stats(format: Format, processed: number, dropped: number): void
    parse_qos(): [ /* live */ boolean, /* running_time */ number, /* stream_time */ number, /* timestamp */ number, /* duration */ number ]
    parse_qos_values(): [ /* jitter */ number, /* proportion */ number, /* quality */ number ]
    parse_qos_stats(format: Format): [ /* processed */ number, /* dropped */ number ]
    get_structure(): Structure
}

/**
 * A #GstMessage.
 * @class 
 */
class Message extends MiniObject {

    // Own properties of Gst-0.10.Gst.Message

    static name: string

    // Constructors of Gst-0.10.Gst.Message

    static new_eos(src: Object): Message
    static new_error(src: Object, error: GLib.Error, debug: string | null): Message
    static new_warning(src: Object, error: GLib.Error, debug: string | null): Message
    static new_info(src: Object, error: GLib.Error, debug: string | null): Message
    static new_tag(src: Object, tag_list: TagList): Message
    static new_tag_full(src: Object, pad: Pad, tag_list: TagList): Message
    static new_buffering(src: Object, percent: number): Message
    static new_state_changed(src: Object, oldstate: State, newstate: State, pending: State): Message
    static new_state_dirty(src: Object): Message
    static new_step_done(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static new_clock_provide(src: Object, clock: Clock, ready: boolean): Message
    static new_clock_lost(src: Object, clock: Clock): Message
    static new_new_clock(src: Object, clock: Clock): Message
    static new_application(src: Object, structure: Structure): Message
    static new_element(src: Object, structure: Structure): Message
    static new_segment_start(src: Object, format: Format, position: number): Message
    static new_segment_done(src: Object, format: Format, position: number): Message
    static new_duration(src: Object, format: Format, duration: number): Message
    static new_latency(src: Object): Message
    static new_async_start(src: Object, new_base_time: boolean): Message
    static new_async_done(src: Object): Message
    static new_structure_change(src: Object, type: StructureChangeType, owner: Element, busy: boolean): Message
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message
    static new_request_state(src: Object, state: State): Message
    static new_step_start(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static new_qos(src: Object, live: boolean, running_time: number, stream_time: number, timestamp: number, duration: number): Message
    static new_custom(type: MessageType, src: Object, structure: Structure): Message
    static type_get_name(type: MessageType): string | null
    static type_to_quark(type: MessageType): GLib.Quark
}

interface MiniObject {

    // Own fields of Gst-0.10.Gst.MiniObject

    instance: GObject.TypeInstance
    refcount: number
    flags: number
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.MiniObject

    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
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

module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deep-notify`
     */
    interface DeepNotifySignalCallback {
        ($obj: Object, object: Object, p0: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `object-saved`
     */
    interface ObjectSavedSignalCallback {
        ($obj: Object, object: any): void
    }

    /**
     * Signal callback interface for `parent-set`
     */
    interface ParentSetSignalCallback {
        ($obj: Object, object: Object): void
    }

    /**
     * Signal callback interface for `parent-unset`
     */
    interface ParentUnsetSignalCallback {
        ($obj: Object, object: Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.Object

        name?: string | null
    }

}

interface Object {

    // Own fields of Gst-0.10.Gst.Object

    object: GObject.Object
    refcount: number
    lock: GLib.Mutex
    name: string | null
    name_prefix: string | null
    parent: Object
    flags: number
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Object

    set_name(name: string | null): boolean
    get_name(): string | null
    set_name_prefix(name_prefix: string | null): void
    get_name_prefix(): string | null
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string | null
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string | null): void

    // Own virtual methods of Gst-0.10.Gst.Object

    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void

    // Own signals of Gst-0.10.Gst.Object

    connect(sigName: "deep-notify", callback: Object.DeepNotifySignalCallback): number
    connect_after(sigName: "deep-notify", callback: Object.DeepNotifySignalCallback): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "object-saved", callback: Object.ObjectSavedSignalCallback): number
    connect_after(sigName: "object-saved", callback: Object.ObjectSavedSignalCallback): number
    emit(sigName: "object-saved", object: any, ...args: any[]): void
    connect(sigName: "parent-set", callback: Object.ParentSetSignalCallback): number
    connect_after(sigName: "parent-set", callback: Object.ParentSetSignalCallback): number
    emit(sigName: "parent-set", object: Object, ...args: any[]): void
    connect(sigName: "parent-unset", callback: Object.ParentUnsetSignalCallback): number
    connect_after(sigName: "parent-unset", callback: Object.ParentUnsetSignalCallback): number
    emit(sigName: "parent-unset", object: Object, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Object

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
    static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[]): void
    static ref(object: any): any
    static unref(object: any): void
    static ref_sink(object: any): void
    static sink(object: any): void
}

module Pad {

    // Signal callback interfaces

    /**
     * Signal callback interface for `have-data`
     */
    interface HaveDataSignalCallback {
        ($obj: Pad, object: MiniObject): boolean
    }

    /**
     * Signal callback interface for `linked`
     */
    interface LinkedSignalCallback {
        ($obj: Pad, object: Pad): void
    }

    /**
     * Signal callback interface for `request-link`
     */
    interface RequestLinkSignalCallback {
        ($obj: Pad): void
    }

    /**
     * Signal callback interface for `unlinked`
     */
    interface UnlinkedSignalCallback {
        ($obj: Pad, object: Pad): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.Pad

        direction?: PadDirection | null
        template?: PadTemplate | null
    }

}

interface Pad {

    // Own properties of Gst-0.10.Gst.Pad

    template: PadTemplate

    // Own fields of Gst-0.10.Gst.Pad

    object: any
    element_private: any
    padtemplate: PadTemplate
    direction: PadDirection
    stream_rec_lock: any
    task: Task
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    block_cond: GLib.Cond
    block_callback: PadBlockCallback
    block_data: any
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
    sched_private: any
    chainfunc: PadChainFunction
    checkgetrangefunc: PadCheckGetRangeFunction
    getrangefunc: PadGetRangeFunction
    eventfunc: PadEventFunction
    mode: ActivateMode
    querytypefunc: PadQueryTypeFunction
    queryfunc: PadQueryFunction
    intlinkfunc: PadIntLinkFunction
    bufferallocfunc: PadBufferAllocFunction
    do_buffer_signals: number
    do_event_signals: number
    iterintlinkfunc: PadIterIntLinkFunction
    block_destroy_data: GLib.DestroyNotify

    // Owm methods of Gst-0.10.Gst.Pad

    get_direction(): PadDirection
    set_active(active: boolean): boolean
    is_active(): boolean
    activate_pull(active: boolean): boolean
    activate_push(active: boolean): boolean
    set_blocked(blocked: boolean): boolean
    set_blocked_async(blocked: boolean, callback: PadBlockCallback, user_data: any): boolean
    set_blocked_async_full(blocked: boolean, callback: PadBlockCallback, user_data: any): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    set_element_private(priv: any): void
    get_element_private(): any
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    is_linked(): boolean
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): boolean
    set_caps(caps: Caps): boolean
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): boolean
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): boolean
    pull_range(offset: number, size: number, buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    event_default(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: number, size: number, buffer: Buffer): FlowReturn
    send_event(event: Event): boolean
    start_task(func: TaskFunction, data: any): boolean
    pause_task(): boolean
    stop_task(): boolean
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): boolean
    peer_query(query: Query): boolean
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: any): boolean
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): boolean
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_peer_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_peer_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_peer_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    add_data_probe(handler: GObject.Callback, data: any): number
    add_data_probe_full(handler: GObject.Callback, data: any): number
    remove_data_probe(handler_id: number): void
    add_event_probe(handler: GObject.Callback, data: any): number
    add_event_probe_full(handler: GObject.Callback, data: any): number
    remove_event_probe(handler_id: number): void
    add_buffer_probe(handler: GObject.Callback, data: any): number
    add_buffer_probe_full(handler: GObject.Callback, data: any): number
    remove_buffer_probe(handler_id: number): void

    // Own signals of Gst-0.10.Gst.Pad

    connect(sigName: "have-data", callback: Pad.HaveDataSignalCallback): number
    connect_after(sigName: "have-data", callback: Pad.HaveDataSignalCallback): number
    emit(sigName: "have-data", object: MiniObject, ...args: any[]): void
    connect(sigName: "linked", callback: Pad.LinkedSignalCallback): number
    connect_after(sigName: "linked", callback: Pad.LinkedSignalCallback): number
    emit(sigName: "linked", object: Pad, ...args: any[]): void
    connect(sigName: "request-link", callback: Pad.RequestLinkSignalCallback): number
    connect_after(sigName: "request-link", callback: Pad.RequestLinkSignalCallback): number
    emit(sigName: "request-link", ...args: any[]): void
    connect(sigName: "unlinked", callback: Pad.UnlinkedSignalCallback): number
    connect_after(sigName: "unlinked", callback: Pad.UnlinkedSignalCallback): number
    emit(sigName: "unlinked", object: Pad, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Pad

    connect(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Pad.ConstructorProperties) 
    constructor(name: string | null, direction: PadDirection) 
    static new(name: string | null, direction: PadDirection): Pad
    static new_from_template(templ: PadTemplate, name: string | null): Pad
    static new_from_static_template(templ: StaticPadTemplate, name: string | null): Pad
    _init(config?: Pad.ConstructorProperties): void
    static load_and_link(self: libxml2.NodePtr, parent: Object): void
}

module PadTemplate {

    // Signal callback interfaces

    /**
     * Signal callback interface for `pad-created`
     */
    interface PadCreatedSignalCallback {
        ($obj: PadTemplate, object: Pad): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.PadTemplate

        caps?: Caps | null
        direction?: PadDirection | null
        name_template?: string | null
        presence?: PadPresence | null
        nameTemplate?: string | null
    }

}

interface PadTemplate {

    // Own properties of Gst-0.10.Gst.PadTemplate

    readonly nameTemplate: string

    // Own fields of Gst-0.10.Gst.PadTemplate

    object: any
    name_template: string | null
    direction: PadDirection
    presence: PadPresence
    caps: Caps
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.PadTemplate

    get_caps(): Caps
    pad_created(pad: Pad): void

    // Own signals of Gst-0.10.Gst.PadTemplate

    connect(sigName: "pad-created", callback: PadTemplate.PadCreatedSignalCallback): number
    connect_after(sigName: "pad-created", callback: PadTemplate.PadCreatedSignalCallback): number
    emit(sigName: "pad-created", object: Pad, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.PadTemplate

    connect(sigName: "notify::name-template", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-template", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name-template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PadTemplate.ConstructorProperties) 
    constructor(name_template: string | null, direction: PadDirection, presence: PadPresence, caps: Caps) 
    static new(name_template: string | null, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    _init(config?: PadTemplate.ConstructorProperties): void
}

module ParamFraction {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ParamFraction {

    // Class property signals of Gst-0.10.Gst.ParamFraction

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ParamFraction extends GObject.Object {

    // Own properties of Gst-0.10.Gst.ParamFraction

    static name: string
    static $gtype: GObject.GType<ParamFraction>

    // Constructors of Gst-0.10.Gst.ParamFraction

    constructor(config?: ParamFraction.ConstructorProperties) 
    _init(config?: ParamFraction.ConstructorProperties): void
}

module Pipeline {

    // Constructor properties interface

    interface ConstructorProperties extends ChildProxy.ConstructorProperties, Bin.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.Pipeline

        auto_flush_bus?: boolean | null
        delay?: number | null
        autoFlushBus?: boolean | null
    }

}

interface Pipeline extends ChildProxy {

    // Own properties of Gst-0.10.Gst.Pipeline

    auto_flush_bus: boolean
    autoFlushBus: boolean

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.Pipeline

    bin: Bin
    fixed_clock: Clock
    stream_time: ClockTime
    delay: ClockTime
    priv: any
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Pipeline

    get_bus(): Bus
    set_new_stream_time(time: ClockTime): void
    get_last_stream_time(): ClockTime
    use_clock(clock: Clock): void
    set_clock(clock: Clock): boolean
    get_clock(): Clock
    auto_clock(): void
    set_delay(delay: ClockTime): void
    get_delay(): ClockTime
    set_auto_flush_bus(auto_flush: boolean): void
    get_auto_flush_bus(): boolean

    // Class property signals of Gst-0.10.Gst.Pipeline

    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-flush-bus", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Pipeline.ConstructorProperties) 
    constructor(name: string | null) 
    static new(name: string | null): Pipeline

    // Overloads of new

    static new(name: string | null): Bin
    _init(config?: Pipeline.ConstructorProperties): void
}

module Plugin {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Plugin {

    // Own fields of Gst-0.10.Gst.Plugin

    object: any
    desc: PluginDesc
    orig_desc: PluginDesc
    flags: any
    filename: string | null
    basename: string | null
    module: GModule.Module
    file_size: number
    file_mtime: number
    registered: boolean
    priv: PluginPrivate
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Plugin

    get_name(): string | null
    get_description(): string | null
    get_filename(): string | null
    get_version(): string | null
    get_license(): string | null
    get_source(): string | null
    get_package(): string | null
    get_origin(): string | null
    get_cache_data(): Structure
    set_cache_data(cache_data: Structure): void
    get_module(): GModule.Module
    is_loaded(): boolean
    name_filter(name: string | null): boolean
    load(): Plugin
    add_dependency(env_vars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void
    add_dependency_simple(env_vars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void

    // Class property signals of Gst-0.10.Gst.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
    static register_static(major_version: number, minor_version: number, name: string | null, description: string | null, init_func: PluginInitFunc, version: string | null, license: string | null, source: string | null, package: string | null, origin: string | null): boolean
    static register_static_full(major_version: number, minor_version: number, name: string | null, description: string | null, init_full_func: PluginInitFullFunc, version: string | null, license: string | null, source: string | null, package: string | null, origin: string | null, user_data: any): boolean
    static load_file(filename: string | null): Plugin
    static load_by_name(name: string | null): Plugin
}

module PluginFeature {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface PluginFeature {

    // Own fields of Gst-0.10.Gst.PluginFeature

    object: any
    loaded: boolean
    name: string | null
    rank: number
    plugin_name: string | null
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.PluginFeature

    load(): PluginFeature
    type_name_filter(data: TypeNameData): boolean
    set_rank(rank: number): void
    set_name(name: string | null): void

    // Overloads of set_name

    set_name(name: string | null): boolean
    get_rank(): number
    get_name(): string | null
    check_version(min_major: number, min_minor: number, min_micro: number): boolean

    // Class property signals of Gst-0.10.Gst.PluginFeature

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PluginFeature.ConstructorProperties) 
    _init(config?: PluginFeature.ConstructorProperties): void
}

module ProxyPad {

    // Constructor properties interface

    interface ConstructorProperties extends Pad.ConstructorProperties {
    }

}

interface ProxyPad {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.ProxyPad

    pad: Pad
    priv: ProxyPadPrivate

    // Class property signals of Gst-0.10.Gst.ProxyPad

    connect(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProxyPad extends Pad {

    // Own properties of Gst-0.10.Gst.ProxyPad

    static name: string
    static $gtype: GObject.GType<ProxyPad>

    // Constructors of Gst-0.10.Gst.ProxyPad

    constructor(config?: ProxyPad.ConstructorProperties) 
    _init(config?: ProxyPad.ConstructorProperties): void
}

module PushSrc {

    // Constructor properties interface

    interface ConstructorProperties extends BaseSrc.ConstructorProperties {
    }

}

interface PushSrc {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.PushSrc

    parent: BaseSrc & Object
    _gst_reserved: any

    // Own virtual methods of Gst-0.10.Gst.PushSrc

    vfunc_create(buf: Buffer): FlowReturn

    // Overloads of vfunc_create

    vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn

    // Class property signals of Gst-0.10.Gst.PushSrc

    connect(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-buffers", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PushSrc.ConstructorProperties) 
    _init(config?: PushSrc.ConstructorProperties): void
}

interface Query {

    // Own fields of Gst-0.10.Gst.Query

    mini_object: MiniObject
    type: QueryType
    structure: Structure
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Query

    set_position(format: Format, cur: number): void
    parse_position(format: Format): /* cur */ number
    set_duration(format: Format, duration: number): void
    parse_duration(format: Format): /* duration */ number
    set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void
    parse_latency(min_latency: ClockTime, max_latency: ClockTime): /* live */ boolean
    set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void
    parse_convert(src_format: Format, dest_format: Format): [ /* src_value */ number, /* dest_value */ number ]
    set_segment(rate: number, format: Format, start_value: number, stop_value: number): void
    parse_segment(format: Format): [ /* rate */ number, /* start_value */ number, /* stop_value */ number ]
    get_structure(): Structure
    set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void
    parse_seeking(format: Format): [ /* seekable */ boolean, /* segment_start */ number, /* segment_end */ number ]
    set_formatsv(n_formats: number, formats: Format): void
    parse_formats_length(): /* n_formats */ number
    parse_formats_nth(nth: number, format: Format): void
    set_buffering_percent(busy: boolean, percent: number): void
    parse_buffering_percent(): [ /* busy */ boolean, /* percent */ number ]
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    parse_buffering_stats(mode: BufferingMode): [ /* avg_in */ number, /* avg_out */ number, /* buffering_left */ number ]
    set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void
    parse_buffering_range(format: Format): [ /* start */ number, /* stop */ number, /* estimated_total */ number ]
    parse_uri(uri: string[]): void
    set_uri(uri: string | null): void
}

/**
 * The #GstQuery structure.
 * @class 
 */
class Query extends MiniObject {

    // Own properties of Gst-0.10.Gst.Query

    static name: string

    // Constructors of Gst-0.10.Gst.Query

    static new_position(format: Format): Query
    static new_duration(format: Format): Query
    static new_latency(): Query
    static new_convert(src_format: Format, value: number, dest_format: Format): Query
    static new_segment(format: Format): Query
    static new_application(type: QueryType, structure: Structure): Query
    static new_seeking(format: Format): Query
    static new_formats(): Query
    static new_buffering(format: Format): Query
    static new_uri(): Query
    static type_get_name(query: QueryType): string | null
    static type_to_quark(query: QueryType): GLib.Quark
    static type_register(nick: string | null, description: string | null): QueryType
    static type_get_by_nick(nick: string | null): QueryType
    static types_contains(types: QueryType, type: QueryType): boolean
    static type_get_details(type: QueryType): QueryTypeDefinition
    static type_iterate_definitions(): Iterator
}

module Registry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `feature-added`
     */
    interface FeatureAddedSignalCallback {
        ($obj: Registry, object: any): void
    }

    /**
     * Signal callback interface for `plugin-added`
     */
    interface PluginAddedSignalCallback {
        ($obj: Registry, object: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Registry {

    // Own fields of Gst-0.10.Gst.Registry

    object: any
    plugins: any[]
    features: any[]
    paths: any[]
    cache_file: number
    feature_hash: GLib.HashTable
    basename_hash: GLib.HashTable
    priv: RegistryPrivate
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Registry

    scan_path(path: string | null): boolean
    add_path(path: string | null): void
    add_plugin(plugin: Plugin): boolean
    remove_plugin(plugin: Plugin): void
    add_feature(feature: PluginFeature): boolean
    remove_feature(feature: PluginFeature): void
    get_feature_list_cookie(): number
    find_plugin(name: string | null): Plugin
    find_feature(name: string | null, type: GObject.GType): PluginFeature
    lookup(filename: string | null): Plugin
    lookup_feature(name: string | null): PluginFeature
    xml_read_cache(location: string | null): boolean
    xml_write_cache(location: string | null): boolean

    // Own signals of Gst-0.10.Gst.Registry

    connect(sigName: "feature-added", callback: Registry.FeatureAddedSignalCallback): number
    connect_after(sigName: "feature-added", callback: Registry.FeatureAddedSignalCallback): number
    emit(sigName: "feature-added", object: any, ...args: any[]): void
    connect(sigName: "plugin-added", callback: Registry.PluginAddedSignalCallback): number
    connect_after(sigName: "plugin-added", callback: Registry.PluginAddedSignalCallback): number
    emit(sigName: "plugin-added", object: any, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.Registry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Registry.ConstructorProperties) 
    _init(config?: Registry.ConstructorProperties): void
    static get_default(): Registry
    static fork_is_enabled(): boolean
    static fork_set_enabled(enabled: boolean): void
}

module SystemClock {

    // Constructor properties interface

    interface ConstructorProperties extends Clock.ConstructorProperties {

        // Own constructor properties of Gst-0.10.Gst.SystemClock

        clock_type?: ClockType | null
        clockType?: ClockType | null
    }

}

interface SystemClock {

    // Own properties of Gst-0.10.Gst.SystemClock

    clock_type: ClockType
    clockType: ClockType

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.SystemClock

    clock: Clock
    thread: GLib.Thread
    stopping: boolean
    priv: SystemClockPrivate
    _gst_reserved: any

    // Class property signals of Gst-0.10.Gst.SystemClock

    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
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
 * The default implementation of a #GstClock that uses the system time.
 * @class 
 */
class SystemClock extends Clock {

    // Own properties of Gst-0.10.Gst.SystemClock

    static name: string
    static $gtype: GObject.GType<SystemClock>

    // Constructors of Gst-0.10.Gst.SystemClock

    constructor(config?: SystemClock.ConstructorProperties) 
    _init(config?: SystemClock.ConstructorProperties): void
    static obtain(): Clock
}

module Task {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Task {

    // Own fields of Gst-0.10.Gst.Task

    object: any
    state: TaskState
    cond: GLib.Cond
    lock: any
    func: TaskFunction
    data: any
    running: boolean
    priv: TaskPrivate

    // Owm methods of Gst-0.10.Gst.Task

    set_lock(mutex: any): void
    set_priority(priority: any): void
    get_pool(): TaskPool
    set_pool(pool: TaskPool): void
    set_thread_callbacks(callbacks: TaskThreadCallbacks, user_data: any, notify: GLib.DestroyNotify): void
    get_state(): TaskState
    set_state(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    pause(): boolean
    join(): boolean

    // Class property signals of Gst-0.10.Gst.Task

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Task.ConstructorProperties) 
    _init(config?: Task.ConstructorProperties): void
    static cleanup_all(): void
    static create(func: TaskFunction): Task
}

module TaskPool {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface TaskPool {

    // Own fields of Gst-0.10.Gst.TaskPool

    object: any
    pool: GLib.ThreadPool
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.TaskPool

    prepare(): void
    push(func: TaskPoolFunction, user_data: any): any
    join(id: any): void
    cleanup(): void

    // Own virtual methods of Gst-0.10.Gst.TaskPool

    vfunc_prepare(): void
    vfunc_cleanup(): void
    vfunc_push(func: TaskPoolFunction, user_data: any): any
    vfunc_join(id: any): void

    // Class property signals of Gst-0.10.Gst.TaskPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: TaskPool.ConstructorProperties) 
    constructor() 
    static new(): TaskPool
    _init(config?: TaskPool.ConstructorProperties): void
}

module TypeFindFactory {

    // Constructor properties interface

    interface ConstructorProperties extends PluginFeature.ConstructorProperties {
    }

}

interface TypeFindFactory {

    // Conflicting properties

    object: any

    // Own fields of Gst-0.10.Gst.TypeFindFactory

    feature: PluginFeature
    function_: TypeFindFunction
    extensions: string | null
    caps: Caps
    user_data: any
    user_data_notify: GLib.DestroyNotify
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.TypeFindFactory

    get_extensions(): string[]
    get_caps(): Caps
    call_function(find: TypeFind): void

    // Conflicting methods

    set_name(name: string | null): void

    // Overloads of set_name

    set_name(name: string | null): boolean
    set_name(name: string | null): boolean

    // Class property signals of Gst-0.10.Gst.TypeFindFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: TypeFindFactory.ConstructorProperties) 
    _init(config?: TypeFindFactory.ConstructorProperties): void
}

module XML {

    // Signal callback interfaces

    /**
     * Signal callback interface for `object-loaded`
     */
    interface ObjectLoadedSignalCallback {
        ($obj: XML, object: Object, p0: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface XML {

    // Own fields of Gst-0.10.Gst.XML

    object: any
    topelements: any[]
    ns: libxml2.NsPtr
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.XML

    parse_doc(doc: libxml2.DocPtr, root: number[]): boolean
    parse_file(fname: number[], root: number[]): boolean
    parse_memory(buffer: number[], size: number, root: string | null): boolean
    get_element(name: number[]): Element

    // Own virtual methods of Gst-0.10.Gst.XML

    vfunc_object_saved(object: Object, self: libxml2.NodePtr): void

    // Own signals of Gst-0.10.Gst.XML

    connect(sigName: "object-loaded", callback: XML.ObjectLoadedSignalCallback): number
    connect_after(sigName: "object-loaded", callback: XML.ObjectLoadedSignalCallback): number
    emit(sigName: "object-loaded", object: Object, p0: any, ...args: any[]): void

    // Class property signals of Gst-0.10.Gst.XML

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: XML.ConstructorProperties) 
    constructor() 
    static new(): XML
    _init(config?: XML.ConstructorProperties): void
    static write(element: Element): libxml2.DocPtr
    static make_element(cur: libxml2.NodePtr, parent: Object): Element
}

interface AdapterClass {

    // Own fields of Gst-0.10.Gst.AdapterClass

    parent_class: GObject.ObjectClass
    _gst_reserved: any[]
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

    name: string | null
    flags: number
    live: number
    mem_live: any[]

    // Owm methods of Gst-0.10.Gst.AllocTrace

    print(): void
    set_flags(flags: AllocTraceFlags): void
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

    parent_class: ElementClass
    get_caps: (sink: BaseSink) => Caps
    set_caps: (sink: BaseSink, caps: Caps) => boolean
    buffer_alloc: (sink: BaseSink, offset: number, size: number, caps: Caps, buf: Buffer) => FlowReturn
    get_times: (sink: BaseSink, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    start: (sink: BaseSink) => boolean
    stop: (sink: BaseSink) => boolean
    unlock: (sink: BaseSink) => boolean
    event: (sink: BaseSink, event: Event) => boolean
    preroll: (sink: BaseSink, buffer: Buffer) => FlowReturn
    render: (sink: BaseSink, buffer: Buffer) => FlowReturn
    async_play: (sink: BaseSink) => StateChangeReturn
    activate_pull: (sink: BaseSink, active: boolean) => boolean
    fixate: (sink: BaseSink, caps: Caps) => void
    unlock_stop: (sink: BaseSink) => boolean
    render_list: (sink: BaseSink, buffer_list: BufferList) => FlowReturn
    _gst_reserved: any[]
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

    parent_class: ElementClass
    get_caps: (src: BaseSrc) => Caps
    set_caps: (src: BaseSrc, caps: Caps) => boolean
    negotiate: (src: BaseSrc) => boolean
    newsegment: (src: BaseSrc) => boolean
    start: (src: BaseSrc) => boolean
    stop: (src: BaseSrc) => boolean
    get_times: (src: BaseSrc, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    get_size: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    is_seekable: (src: BaseSrc) => boolean
    unlock: (src: BaseSrc) => boolean
    event: (src: BaseSrc, event: Event) => boolean
    create: (src: BaseSrc, offset: number, size: number, buf: Buffer) => FlowReturn
    do_seek: (src: BaseSrc, segment: Segment) => boolean
    query: (src: BaseSrc, query: Query) => boolean
    check_get_range: (src: BaseSrc) => boolean
    fixate: (src: BaseSrc, caps: Caps) => void
    unlock_stop: (src: BaseSrc) => boolean
    prepare_seek_segment: (src: BaseSrc, seek: Event, segment: Segment) => boolean
    _gst_reserved: any[]
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

    parent_class: ElementClass
    transform_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => Caps
    fixate_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps, othercaps: Caps) => void
    transform_size: (trans: BaseTransform, direction: PadDirection, caps: Caps, size: number, othercaps: Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    get_unit_size: (trans: BaseTransform, caps: Caps) => [ /* returnType */ boolean, /* size */ number ]
    set_caps: (trans: BaseTransform, incaps: Caps, outcaps: Caps) => boolean
    start: (trans: BaseTransform) => boolean
    stop: (trans: BaseTransform) => boolean
    event: (trans: BaseTransform, event: Event) => boolean
    transform: (trans: BaseTransform, inbuf: Buffer, outbuf: Buffer) => FlowReturn
    transform_ip: (trans: BaseTransform, buf: Buffer) => FlowReturn
    passthrough_on_same_caps: boolean
    prepare_output_buffer: (trans: BaseTransform, input: Buffer, size: number, caps: Caps, buf: Buffer) => FlowReturn
    src_event: (trans: BaseTransform, event: Event) => boolean
    before_transform: (trans: BaseTransform, buffer: Buffer) => void
    accept_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => boolean
    _gst_reserved: any[]
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

    parent_class: ElementClass
    pool: GLib.ThreadPool
    element_added: (bin: Bin, child: Element) => void
    element_removed: (bin: Bin, child: Element) => void
    add_element: (bin: Bin, element: Element) => boolean
    remove_element: (bin: Bin, element: Element) => boolean
    handle_message: (bin: Bin, message: Message) => void
    do_latency: (bin: Bin) => boolean
    _gst_reserved: any[]
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

    data: any
    size: number
    byte: number
    bit: number

    // Owm methods of Gst-0.10.Gst.BitReader

    free(): void
    init(data: number[], size: number): void
    init_from_buffer(buffer: Buffer): void
    set_pos(pos: number): boolean
    get_pos(): number
    get_remaining(): number
    get_size(): number
    skip(nbits: number): boolean
    skip_to_byte(): boolean
    get_bits_uint8(val: number[], nbits: number): boolean
    get_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint8(val: number[], nbits: number): boolean
    peek_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
}

/**
 * A bit reader instance.
 * @record 
 */
class BitReader {

    // Own properties of Gst-0.10.Gst.BitReader

    static name: string

    // Constructors of Gst-0.10.Gst.BitReader

    constructor(data: number[], size: number) 
    static new(data: number[], size: number): BitReader
    static new_from_buffer(buffer: Buffer): BitReader
}

interface BufferClass {

    // Own fields of Gst-0.10.Gst.BufferClass

    mini_object_class: MiniObjectClass
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
    n_buffers(): number
    next(): Buffer
    next_group(): boolean
    add(buffer: Buffer): void
    add_group(): void
    remove(): void
    steal(): Buffer
    take(buffer: Buffer): void
    do(do_func: BufferListDoFunction, user_data: any): Buffer
    merge_group(): Buffer
}

class BufferListIterator {

    // Own properties of Gst-0.10.Gst.BufferListIterator

    static name: string
}

interface BusClass {

    // Own fields of Gst-0.10.Gst.BusClass

    parent_class: ObjectClass
    message: (bus: Bus, message: Message) => void
    sync_message: (bus: Bus, message: Message) => void
    _gst_reserved: any[]
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

    data: any
    size: number
    byte: number

    // Owm methods of Gst-0.10.Gst.ByteReader

    free(): void
    init(data: number[], size: number): void
    init_from_buffer(buffer: Buffer): void
    set_pos(pos: number): boolean
    get_pos(): number
    get_remaining(): number
    get_size(): number
    skip(nbytes: number): boolean
    get_uint8(val: number[]): boolean
    get_int8(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint8(val: number[]): boolean
    peek_int8(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    dup_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    get_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    peek_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    dup_string_utf8(str: string[]): boolean
    dup_string_utf16(): [ /* returnType */ boolean, /* str */ number ]
    dup_string_utf32(): [ /* returnType */ boolean, /* str */ number ]
    skip_string_utf8(): boolean
    skip_string_utf16(): boolean
    skip_string_utf32(): boolean
    get_string_utf8(str: string[]): boolean
    peek_string_utf8(str: string[]): boolean
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
}

/**
 * A byte reader instance.
 * @record 
 */
class ByteReader {

    // Own properties of Gst-0.10.Gst.ByteReader

    static name: string

    // Constructors of Gst-0.10.Gst.ByteReader

    constructor(data: number[], size: number) 
    static new(data: number[], size: number): ByteReader
    static new_from_buffer(buffer: Buffer): ByteReader
}

interface ByteWriter {

    // Own fields of Gst-0.10.Gst.ByteWriter

    parent: ByteReader
    alloc_size: number
    fixed: boolean
    owned: boolean

    // Owm methods of Gst-0.10.Gst.ByteWriter

    init(): void
    init_with_size(size: number, fixed: boolean): void
    init_with_data(data: number[], size: number, initialized: boolean): void
    init_with_buffer(buffer: Buffer, initialized: boolean): void
    free(): void
    free_and_get_data(): number[]
    free_and_get_buffer(): Buffer
    reset(): void
    reset_and_get_data(): number[]
    reset_and_get_buffer(): Buffer
    get_remaining(): number
    ensure_free_space(size: number): boolean
    put_uint8(val: number): boolean
    put_int8(val: number): boolean
    put_uint16_be(val: number): boolean
    put_uint16_le(val: number): boolean
    put_int16_be(val: number): boolean
    put_int16_le(val: number): boolean
    put_uint24_be(val: number): boolean
    put_uint24_le(val: number): boolean
    put_int24_be(val: number): boolean
    put_int24_le(val: number): boolean
    put_uint32_be(val: number): boolean
    put_uint32_le(val: number): boolean
    put_int32_be(val: number): boolean
    put_int32_le(val: number): boolean
    put_uint64_be(val: number): boolean
    put_uint64_le(val: number): boolean
    put_int64_be(val: number): boolean
    put_int64_le(val: number): boolean
    put_float32_be(val: number): boolean
    put_float32_le(val: number): boolean
    put_float64_be(val: number): boolean
    put_float64_le(val: number): boolean
    put_data(data: number[], size: number): boolean
    fill(value: number, size: number): boolean
    put_string_utf8(data: string | null): boolean
    put_string_utf16(): [ /* returnType */ boolean, /* data */ number ]
    put_string_utf32(): [ /* returnType */ boolean, /* data */ number ]
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
    static new_with_size(size: number, fixed: boolean): ByteWriter
    static new_with_data(data: number[], size: number, initialized: boolean): ByteWriter
    static new_with_buffer(buffer: Buffer, initialized: boolean): ByteWriter
}

interface Caps {

    // Own fields of Gst-0.10.Gst.Caps

    type: GObject.GType
    refcount: number
    flags: CapsFlags
    structs: GLib.PtrArray
    _gst_reserved: any[]

    // Owm methods of Gst-0.10.Gst.Caps

    ref(): Caps
    copy(): Caps
    make_writable(): Caps
    unref(): void
    append(caps2: Caps): void
    merge(caps2: Caps): void
    append_structure(structure: Structure): void
    remove_structure(idx: number): void
    merge_structure(structure: Structure): void
    get_size(): number
    get_structure(index: number): Structure
    steal_structure(index: number): Structure
    copy_nth(nth: number): Caps
    truncate(): void
    set_value(field: string | null, value: any): void
    is_any(): boolean
    is_empty(): boolean
    is_fixed(): boolean
    is_always_compatible(caps2: Caps): boolean
    is_subset(superset: Caps): boolean
    is_equal(caps2: Caps): boolean
    is_equal_fixed(caps2: Caps): boolean
    can_intersect(caps2: Caps): boolean
    intersect(caps2: Caps): Caps
    subtract(subtrahend: Caps): Caps
    union(caps2: Caps): Caps
    normalize(): Caps
    do_simplify(): boolean
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    replace(newcaps: Caps): void
    to_string(): string | null
}

/**
 * Object describing media types.
 * @record 
 */
class Caps {

    // Own properties of Gst-0.10.Gst.Caps

    static name: string

    // Constructors of Gst-0.10.Gst.Caps

    static new_empty(): Caps
    static new_any(): Caps
}

interface ChildProxyInterface {

    // Own fields of Gst-0.10.Gst.ChildProxyInterface

    parent: GObject.TypeInterface
    get_child_by_index: (parent: ChildProxy, index: number) => Object
    get_children_count: (parent: ChildProxy) => number
    child_added: (parent: ChildProxy, child: Object) => void
    child_removed: (parent: ChildProxy, child: Object) => void
    _gst_reserved: any[]
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

    parent_class: ObjectClass
    change_resolution: (clock: Clock, old_resolution: ClockTime, new_resolution: ClockTime) => ClockTime
    get_resolution: (clock: Clock) => ClockTime
    get_internal_time: (clock: Clock) => ClockTime
    wait: (clock: Clock, entry: ClockEntry) => ClockReturn
    wait_async: (clock: Clock, entry: ClockEntry) => ClockReturn
    unschedule: (clock: Clock, entry: ClockEntry) => void
    wait_jitter: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    _gst_reserved: any[]
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
    user_data: any
    destroy_data: GLib.DestroyNotify
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

    parent_class: ObjectClass
    _gst_reserved: any[]
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

    parent_class: GObject.ObjectClass
    empty: (queue: DataQueue) => void
    full: (queue: DataQueue) => void
    _gst_reserved: any[]
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
    name: string | null
    description: string | null

    // Owm methods of Gst-0.10.Gst.DebugCategory

    free(): void
    set_threshold(level: DebugLevel): void
    reset_threshold(): void
    get_threshold(): DebugLevel
    get_name(): string | null
    get_color(): number
    get_description(): string | null
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

    get(): string | null
}

class DebugMessage {

    // Own properties of Gst-0.10.Gst.DebugMessage

    static name: string
}

interface ElementClass {

    // Own fields of Gst-0.10.Gst.ElementClass

    parent_class: ObjectClass
    details: ElementDetails
    elementfactory: ElementFactory
    padtemplates: any[]
    numpadtemplates: number
    pad_templ_cookie: number
    pad_added: (element: Element, pad: Pad) => void
    pad_removed: (element: Element, pad: Pad) => void
    no_more_pads: (element: Element) => void
    request_new_pad: (element: Element, templ: PadTemplate, name: string | null) => Pad
    release_pad: (element: Element, pad: Pad) => void
    get_state: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state: (element: Element, state: State) => StateChangeReturn
    change_state: (element: Element, transition: StateChange) => StateChangeReturn
    set_bus: (element: Element, bus: Bus) => void
    provide_clock: (element: Element) => Clock
    set_clock: (element: Element, clock: Clock) => boolean
    get_index: (element: Element) => Index
    set_index: (element: Element, index: Index) => void
    send_event: (element: Element, event: Event) => boolean
    get_query_types: (element: Element) => QueryType
    query: (element: Element, query: Query) => boolean
    _gst_reserved: any[]

    // Owm methods of Gst-0.10.Gst.ElementClass

    add_pad_template(templ: PadTemplate): void
    get_pad_template(name: string | null): PadTemplate
    set_details(details: ElementDetails): void
    set_details_simple(longname: string | null, classification: string | null, description: string | null, author: string | null): void
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

    longname: string | null
    klass: string | null
    description: string | null
    author: string | null
    _gst_reserved: any[]
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

    parent_class: PluginFeatureClass
    _gst_reserved: any[]
}

abstract class ElementFactoryClass {

    // Own properties of Gst-0.10.Gst.ElementFactoryClass

    static name: string
}

interface EventClass {

    // Own fields of Gst-0.10.Gst.EventClass

    mini_object_class: MiniObjectClass
    _gst_reserved: any[]
}

abstract class EventClass {

    // Own properties of Gst-0.10.Gst.EventClass

    static name: string
}

interface FormatDefinition {

    // Own fields of Gst-0.10.Gst.FormatDefinition

    value: Format
    nick: string | null
    description: string | null
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

    parent_class: ProxyPadClass
    _gst_reserved: any[]
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
    supported: (iface: ImplementsInterface, iface_type: GObject.GType) => boolean
    _gst_reserved: any[]
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

    parent_class: ObjectClass
    get_writer_id: (index: Index, writer_string: string | null) => [ /* returnType */ boolean, /* writer_id */ number ]
    commit: (index: Index, id: number) => void
    add_entry: (index: Index, entry: IndexEntry) => void
    get_assoc_entry: (index: Index, id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc) => IndexEntry
    entry_added: (index: Index, entry: IndexEntry) => void
    _gst_reserved: any[]
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
    assoc_map(format: Format): [ /* returnType */ boolean, /* value */ number ]
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
    _gst_reserved: any[]
}

abstract class IndexFactoryClass {

    // Own properties of Gst-0.10.Gst.IndexFactoryClass

    static name: string
}

interface IndexGroup {

    // Own fields of Gst-0.10.Gst.IndexGroup

    groupnum: number
    entries: any[]
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
    master_cookie: any
    _gst_reserved: any[]

    // Owm methods of Gst-0.10.Gst.Iterator

    push(other: Iterator): void
    filter(func: GLib.CompareFunc, user_data: any): Iterator
    fold(func: IteratorFoldFunction, ret: any, user_data: any): IteratorResult
    foreach(func: GLib.Func, user_data: any): IteratorResult
    find_custom(func: GLib.CompareFunc, user_data: any): any
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
    static new_single(type: GObject.GType, object: any, copy: CopyFunction, free: GLib.FreeFunc): Iterator
}

interface MessageClass {

    // Own fields of Gst-0.10.Gst.MessageClass

    mini_object_class: MiniObjectClass
    _gst_reserved: any[]
}

abstract class MessageClass {

    // Own properties of Gst-0.10.Gst.MessageClass

    static name: string
}

interface MiniObjectClass {

    // Own fields of Gst-0.10.Gst.MiniObjectClass

    type_class: GObject.TypeClass
    copy: MiniObjectCopyFunction
    finalize: MiniObjectFinalizeFunction
    _gst_reserved: any
}

abstract class MiniObjectClass {

    // Own properties of Gst-0.10.Gst.MiniObjectClass

    static name: string
}

interface ObjectClass {

    // Own fields of Gst-0.10.Gst.ObjectClass

    parent_class: GObject.ObjectClass
    path_string_separator: string | null
    signal_object: GObject.Object
    lock: any
    parent_set: (object: Object, parent: Object) => void
    parent_unset: (object: Object, parent: Object) => void
    object_saved: (object: Object, parent: libxml2.NodePtr) => void
    deep_notify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    save_thyself: (object: Object, parent: libxml2.NodePtr) => libxml2.NodePtr
    restore_thyself: (object: Object, self: libxml2.NodePtr) => void
    _gst_reserved: any[]
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

    parent_class: ObjectClass
    linked: (pad: Pad, peer: Pad) => void
    unlinked: (pad: Pad, peer: Pad) => void
    request_link: (pad: Pad) => void
    have_data: (pad: Pad, data: MiniObject) => boolean
    _gst_reserved: any[]
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

    parent_class: ObjectClass
    pad_created: (templ: PadTemplate, pad: Pad) => void
    _gst_reserved: any[]
}

abstract class PadTemplateClass {

    // Own properties of Gst-0.10.Gst.PadTemplateClass

    static name: string
}

interface ParamSpecFraction {

    // Own fields of Gst-0.10.Gst.ParamSpecFraction

    parent_instance: GObject.ParamSpec
    min_num: number
    min_den: number
    max_num: number
    max_den: number
    def_num: number
    def_den: number
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

    parent_instance: GObject.ParamSpec
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

    get_missing_elements(): string[]
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

    parent_class: BinClass
    _gst_reserved: any[]
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

    object_class: ObjectClass
    _gst_reserved: any[]
}

abstract class PluginClass {

    // Own properties of Gst-0.10.Gst.PluginClass

    static name: string
}

interface PluginDesc {

    // Own fields of Gst-0.10.Gst.PluginDesc

    major_version: number
    minor_version: number
    name: string | null
    description: string | null
    plugin_init: PluginInitFunc
    version: string | null
    license: string | null
    source: string | null
    package: string | null
    origin: string | null
    _gst_reserved: any[]
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

    parent_class: ObjectClass
    _gst_reserved: any[]
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
    add_fd(fd: PollFD): boolean
    remove_fd(fd: PollFD): boolean
    fd_ctl_write(fd: PollFD, active: boolean): boolean
    fd_ctl_read(fd: PollFD, active: boolean): boolean
    fd_ignored(fd: PollFD): void
    fd_has_closed(fd: PollFD): boolean
    fd_has_error(fd: PollFD): boolean
    fd_can_read(fd: PollFD): boolean
    fd_can_write(fd: PollFD): boolean
    wait(timeout: ClockTime): number
    set_controllable(controllable: boolean): boolean
    restart(): void
    set_flushing(flushing: boolean): void
    write_control(): boolean
    read_control(): boolean
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
    static new_timer(): Poll
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

    parent_class: PadClass
    _gst_reserved: any[]
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

    parent_class: BaseSrcClass
    create: (src: PushSrc, buf: Buffer) => FlowReturn
    _gst_reserved: any[]
}

abstract class PushSrcClass {

    // Own properties of Gst-0.10.Gst.PushSrcClass

    static name: string
}

interface QueryClass {

    // Own fields of Gst-0.10.Gst.QueryClass

    mini_object_class: MiniObjectClass
    _gst_reserved: any[]
}

abstract class QueryClass {

    // Own properties of Gst-0.10.Gst.QueryClass

    static name: string
}

interface QueryTypeDefinition {

    // Own fields of Gst-0.10.Gst.QueryTypeDefinition

    value: QueryType
    nick: string | null
    description: string | null
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

    parent_class: ObjectClass
    plugin_added: (registry: Registry, plugin: Plugin) => void
    feature_added: (registry: Registry, feature: PluginFeature) => void
    _gst_reserved: any[]
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
    abs_rate: number
    format: Format
    flags: SeekFlags
    start: number
    stop: number
    time: number
    accum: number
    last_stop: number
    duration: number
    applied_rate: number
    _gst_reserved: number[]

    // Owm methods of Gst-0.10.Gst.Segment

    copy(): Segment
    free(): void
    init(format: Format): void
    set_duration(format: Format, duration: number): void
    set_last_stop(format: Format, position: number): void
    set_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): /* update */ boolean
    set_newsegment(update: boolean, rate: number, format: Format, start: number, stop: number, time: number): void
    set_newsegment_full(update: boolean, rate: number, applied_rate: number, format: Format, start: number, stop: number, time: number): void
    to_stream_time(format: Format, position: number): number
    to_running_time(format: Format, position: number): number
    to_position(format: Format, running_time: number): number
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clip_start */ number, /* clip_stop */ number ]
    set_running_time(format: Format, running_time: number): boolean
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
    string: string | null
    _gst_reserved: any[]

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

    name_template: string | null
    direction: PadDirection
    presence: PadPresence
    static_caps: StaticCaps

    // Owm methods of Gst-0.10.Gst.StaticPadTemplate

    get(): PadTemplate
    get_caps(): Caps
}

class StaticPadTemplate {

    // Own properties of Gst-0.10.Gst.StaticPadTemplate

    static name: string
}

interface Structure {

    // Own fields of Gst-0.10.Gst.Structure

    type: GObject.GType
    name: GLib.Quark
    parent_refcount: any
    fields: GLib.Array
    _gst_reserved: any

    // Owm methods of Gst-0.10.Gst.Structure

    copy(): Structure
    set_parent_refcount(): /* refcount */ number
    free(): void
    get_name(): string | null
    get_name_id(): GLib.Quark
    has_name(name: string | null): boolean
    set_name(name: string | null): void
    id_set_value(field: GLib.Quark, value: any): void
    set_value(fieldname: string | null, value: any): void
    id_get_value(field: GLib.Quark): any
    get_value(fieldname: string | null): any
    remove_field(fieldname: string | null): void
    remove_all_fields(): void
    get_field_type(fieldname: string | null): GObject.GType
    foreach(func: StructureForeachFunc, user_data: any): boolean
    map_in_place(func: StructureMapFunc, user_data: any): boolean
    n_fields(): number
    nth_field_name(index: number): string | null
    id_has_field(field: GLib.Quark): boolean
    id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean
    has_field(fieldname: string | null): boolean
    has_field_typed(fieldname: string | null, type: GObject.GType): boolean
    get_boolean(fieldname: string | null): [ /* returnType */ boolean, /* value */ boolean ]
    get_int(fieldname: string | null): [ /* returnType */ boolean, /* value */ number ]
    get_uint(fieldname: string | null): [ /* returnType */ boolean, /* value */ number ]
    get_fourcc(fieldname: string | null): [ /* returnType */ boolean, /* value */ number ]
    get_double(fieldname: string | null): [ /* returnType */ boolean, /* value */ number ]
    get_date(fieldname: string | null, value: GLib.Date): boolean
    get_clock_time(fieldname: string | null, value: ClockTime): boolean
    get_string(fieldname: string | null): string | null
    get_enum(fieldname: string | null, enumtype: GObject.GType): [ /* returnType */ boolean, /* value */ number ]
    get_fraction(fieldname: string | null): [ /* returnType */ boolean, /* value_numerator */ number, /* value_denominator */ number ]
    to_string(): string | null
    fixate_field_nearest_int(field_name: string | null, target: number): boolean
    fixate_field_nearest_double(field_name: string | null, target: number): boolean
    fixate_field_boolean(field_name: string | null, target: boolean): boolean
    fixate_field_string(field_name: string | null, target: string | null): boolean
    fixate_field_nearest_fraction(field_name: string | null, target_numerator: number, target_denominator: number): boolean
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

    parent_class: ClockClass
    _gst_reserved: any[]
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

    g_iface: GObject.TypeInterface
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

    parent_class: ObjectClass
    pool: TaskPool
    _gst_reserved: any[]
}

abstract class TaskClass {

    // Own properties of Gst-0.10.Gst.TaskClass

    static name: string
}

interface TaskPoolClass {

    // Own fields of Gst-0.10.Gst.TaskPoolClass

    parent_class: ObjectClass
    prepare: (pool: TaskPool) => void
    cleanup: (pool: TaskPool) => void
    push: (pool: TaskPool, func: TaskPoolFunction) => any
    join: (pool: TaskPool, id: any) => void
    _gst_reserved: any[]
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

    enter_thread: any
    leave_thread: any
    _gst_reserved: any[]
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

    filename: string | null
    fd: number
    buf: TraceEntry
    bufsize: number
    bufoffset: number

    // Owm methods of Gst-0.10.Gst.Trace

    destroy(): void
    flush(): void
    text_flush(): void
    set_default(): void
}

/**
 * Opaque #GstTrace structure.
 * @record 
 */
class Trace {

    // Own properties of Gst-0.10.Gst.Trace

    static name: string

    // Constructors of Gst-0.10.Gst.Trace

    constructor(filename: string | null, size: number) 
    static new(filename: string | null, size: number): Trace
}

interface TraceEntry {

    // Own fields of Gst-0.10.Gst.TraceEntry

    timestamp: number
    sequence: number
    data: number
    message: number[]
}

class TraceEntry {

    // Own properties of Gst-0.10.Gst.TraceEntry

    static name: string
}

interface TypeFind {

    // Own fields of Gst-0.10.Gst.TypeFind

    peek: any
    suggest: any
    data: any
    get_length: any
    _gst_reserved: any[]
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
    _gst_reserved: any[]
}

abstract class TypeFindFactoryClass {

    // Own properties of Gst-0.10.Gst.TypeFindFactoryClass

    static name: string
}

interface TypeNameData {

    // Own fields of Gst-0.10.Gst.TypeNameData

    name: string | null
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
    new_uri: (handler: URIHandler, uri: string | null) => void
    get_type: () => URIType
    get_protocols: () => string[]
    get_uri: (handler: URIHandler) => string | null
    set_uri: (handler: URIHandler, uri: string | null) => boolean
    get_type_full: (type: GObject.GType) => URIType
    get_protocols_full: (type: GObject.GType) => string[]
    _gst_reserved: any[]
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
    _gst_reserved: any[]
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

    parent_class: ObjectClass
    object_loaded: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    object_saved: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    _gst_reserved: any[]
}

abstract class XMLClass {

    // Own properties of Gst-0.10.Gst.XMLClass

    static name: string
}

    type ClockID = any
    type ClockTime = any
    type ClockTimeDiff = any
    type TagList = any
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

export default Gst;
// END