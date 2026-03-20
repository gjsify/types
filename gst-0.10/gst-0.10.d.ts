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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gst {
    /**
     * Gst-0.10
     */

    /**
     * @gir-type Enum
     */
    export namespace ActivateMode {
        export const $gtype: GObject.GType<ActivateMode>;
    }

    /**
     * The status of a GstPad. After activating a pad, which usually happens when the
     * parent element goes from READY to PAUSED, the GstActivateMode defines if the
     * pad operates in push or pull mode.
     * @gir-type Enum
     */
    enum ActivateMode {
        NONE,
        PUSH,
        PULL,
    }

    /**
     * @gir-type Enum
     */
    export namespace BufferListItem {
        export const $gtype: GObject.GType<BufferListItem>;
    }

    /**
     * The result of the {@link Gst.BufferListFunc}.
     * @gir-type Enum
     * @since 0.10.24
     */
    enum BufferListItem {
        CONTINUE,
        SKIP_GROUP,
        END,
    }

    /**
     * @gir-type Enum
     */
    export namespace BufferingMode {
        export const $gtype: GObject.GType<BufferingMode>;
    }

    /**
     * The different types of buffering methods.
     * @gir-type Enum
     */
    enum BufferingMode {
        STREAM,
        DOWNLOAD,
        TIMESHIFT,
        LIVE,
    }

    /**
     * @gir-type Enum
     */
    export namespace BusSyncReply {
        export const $gtype: GObject.GType<BusSyncReply>;
    }

    /**
     * The result values for a GstBusSyncHandler.
     * @gir-type Enum
     */
    enum BusSyncReply {
        DROP,
        PASS,
        ASYNC,
    }

    /**
     * @gir-type Enum
     */
    export namespace ClockEntryType {
        export const $gtype: GObject.GType<ClockEntryType>;
    }

    /**
     * The type of the clock entry
     * @gir-type Enum
     */
    enum ClockEntryType {
        SINGLE,
        PERIODIC,
    }

    /**
     * @gir-type Enum
     */
    export namespace ClockReturn {
        export const $gtype: GObject.GType<ClockReturn>;
    }

    /**
     * The return value of a clock operation.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace ClockType {
        export const $gtype: GObject.GType<ClockType>;
    }

    /**
     * The different kind of clocks.
     * @gir-type Enum
     */
    enum ClockType {
        REALTIME,
        MONOTONIC,
    }

    /**
     * @gir-type Enum
     */
    export namespace CoreError {
        export const $gtype: GObject.GType<CoreError>;
    }

    /**
     * Core errors are errors inside the core GStreamer library.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace DebugColorFlags {
        export const $gtype: GObject.GType<DebugColorFlags>;
    }

    /**
     * These are some terminal style flags you can use when creating your
     * debugging categories to make them stand out in debugging output.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace DebugLevel {
        export const $gtype: GObject.GType<DebugLevel>;
    }

    /**
     * The level defines the importance of a debugging message. The more important a
     * message is, the greater the probability that the debugging system outputs it.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }

    /**
     * {@link Gst.EventType} lists the standard event types that can be sent in a pipeline.
     * The custom event types can be used for private messages between elements
     * that can't be expressed using normal
     * GStreamer buffer passing semantics. Custom events carry an arbitrary
     * {@link Gst.Structure}.
     * Specific custom events are distinguished by the name of the structure.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace FlowReturn {
        export const $gtype: GObject.GType<FlowReturn>;
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }

    /**
     * Standard predefined formats
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace IndexCertainty {
        export const $gtype: GObject.GType<IndexCertainty>;
    }

    /**
     * The certainty of a group in the index.
     * @gir-type Enum
     */
    enum IndexCertainty {
        UNKNOWN,
        CERTAIN,
        FUZZY,
    }

    /**
     * @gir-type Enum
     */
    export namespace IndexEntryType {
        export const $gtype: GObject.GType<IndexEntryType>;
    }

    /**
     * The different types of entries in the index.
     * @gir-type Enum
     */
    enum IndexEntryType {
        ID,
        ASSOCIATION,
        OBJECT,
        FORMAT,
    }

    /**
     * @gir-type Enum
     */
    export namespace IndexLookupMethod {
        export const $gtype: GObject.GType<IndexLookupMethod>;
    }

    /**
     * Specify the method to find an index entry in the index.
     * @gir-type Enum
     */
    enum IndexLookupMethod {
        EXACT,
        BEFORE,
        AFTER,
    }

    /**
     * @gir-type Enum
     */
    export namespace IndexResolverMethod {
        export const $gtype: GObject.GType<IndexResolverMethod>;
    }

    /**
     * The method used to resolve index writers
     * @gir-type Enum
     */
    enum IndexResolverMethod {
        CUSTOM,
        GTYPE,
        PATH,
    }

    /**
     * @gir-type Enum
     */
    export namespace IteratorItem {
        export const $gtype: GObject.GType<IteratorItem>;
    }

    /**
     * The result of a {@link Gst.IteratorItemFunction}.
     * @gir-type Enum
     */
    enum IteratorItem {
        SKIP,
        PASS,
        END,
    }

    /**
     * @gir-type Enum
     */
    export namespace IteratorResult {
        export const $gtype: GObject.GType<IteratorResult>;
    }

    /**
     * The result of `gst_iterator_next()`.
     * @gir-type Enum
     */
    enum IteratorResult {
        DONE,
        OK,
        RESYNC,
        ERROR,
    }

    /**
     * @gir-type Enum
     */
    export namespace LibraryError {
        export const $gtype: GObject.GType<LibraryError>;
    }

    /**
     * Library errors are for errors from the library being used by elements
     * (initializing, finalizing, settings, ...)
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace PadDirection {
        export const $gtype: GObject.GType<PadDirection>;
    }

    /**
     * The direction of a pad.
     * @gir-type Enum
     */
    enum PadDirection {
        UNKNOWN,
        SRC,
        SINK,
    }

    /**
     * @gir-type Enum
     */
    export namespace PadLinkReturn {
        export const $gtype: GObject.GType<PadLinkReturn>;
    }

    /**
     * Result values from gst_pad_link and friends.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace PadPresence {
        export const $gtype: GObject.GType<PadPresence>;
    }

    /**
     * Indicates when this pad will become available.
     * @gir-type Enum
     */
    enum PadPresence {
        ALWAYS,
        SOMETIMES,
        REQUEST,
    }

    /**
     * @gir-type Enum
     */
    export namespace ParseError {
        export const $gtype: GObject.GType<ParseError>;
    }

    /**
     * The different parsing errors that can occur.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace PluginError {
        export const $gtype: GObject.GType<PluginError>;
    }

    /**
     * The plugin loading errors
     * @gir-type Enum
     */
    enum PluginError {
        MODULE,
        DEPENDENCIES,
        NAME_MISMATCH,
    }

    /**
     * @gir-type Enum
     */
    export namespace QueryType {
        export const $gtype: GObject.GType<QueryType>;
    }

    /**
     * Standard predefined Query types
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace Rank {
        export const $gtype: GObject.GType<Rank>;
    }

    /**
     * Element priority ranks. Defines the order in which the autoplugger (or
     * similar rank-picking mechanisms, such as e.g. `gst_element_make_from_uri()`)
     * will choose this element over an alternative one with the same function.
     * These constants serve as a rough guidance for defining the rank of a
     * {@link Gst.PluginFeature}. Any value is valid, including values bigger than
     * @gir-type Enum
     */
    enum Rank {
        NONE,
        MARGINAL,
        SECONDARY,
        PRIMARY,
    }

    /**
     * @gir-type Enum
     */
    export namespace ResourceError {
        export const $gtype: GObject.GType<ResourceError>;
    }

    /**
     * Resource errors are for any resource used by an element:
     * memory, files, network connections, process space, ...
     * They're typically used by source and sink elements.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace SearchMode {
        export const $gtype: GObject.GType<SearchMode>;
    }

    /**
     * The different search modes.
     * @gir-type Enum
     * @since 0.10.23
     */
    enum SearchMode {
        EXACT,
        BEFORE,
        AFTER,
    }

    /**
     * @gir-type Enum
     */
    export namespace SeekType {
        export const $gtype: GObject.GType<SeekType>;
    }

    /**
     * The different types of seek events. When constructing a seek event with
     * `gst_event_new_seek()`, a format, a seek method and optional flags are to
     * be provided. The seek event is then inserted into the graph with
     * `gst_pad_send_event()` or `gst_element_send_event()`.
     * @gir-type Enum
     */
    enum SeekType {
        NONE,
        CUR,
        SET,
        END,
    }

    /**
     * @gir-type Enum
     */
    export namespace State {
        export const $gtype: GObject.GType<State>;
    }

    /**
     * The possible states an element can be in. States can be changed using
     * `gst_element_set_state()` and checked using `gst_element_get_state()`.
     * @gir-type Enum
     */
    enum State {
        VOID_PENDING,
        NULL,
        READY,
        PAUSED,
        PLAYING,
    }

    /**
     * @gir-type Enum
     */
    export namespace StateChange {
        export const $gtype: GObject.GType<StateChange>;
    }

    /**
     * These are the different state changes an element goes through.
     * {@link Gst.State.NULL} &rArr; {@link Gst.State.PLAYING} is called an upwards state change
     * and {@link Gst.State.PLAYING} &rArr; {@link Gst.State.NULL} a downwards state change.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace StateChangeReturn {
        export const $gtype: GObject.GType<StateChangeReturn>;
    }

    /**
     * The possible return values from a state change function. Only
     * @gir-type Enum
     */
    enum StateChangeReturn {
        FAILURE,
        SUCCESS,
        ASYNC,
        NO_PREROLL,
    }

    /**
     * @gir-type Enum
     */
    export namespace StreamError {
        export const $gtype: GObject.GType<StreamError>;
    }

    /**
     * Stream errors are for anything related to the stream being processed:
     * format errors, media type errors, ...
     * They're typically used by decoders, demuxers, converters, ...
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace StreamStatusType {
        export const $gtype: GObject.GType<StreamStatusType>;
    }

    /**
     * The type of a {@link Gst.MessageType.STREAM_STATUS}. The stream status messages inform the
     * application of new streaming threads and their status.
     * @gir-type Enum
     * @since 0.10.24
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
     * @gir-type Enum
     */
    export namespace StructureChangeType {
        export const $gtype: GObject.GType<StructureChangeType>;
    }

    /**
     * The type of a {@link Gst.MessageType.STRUCTURE_CHANGE}.
     * @gir-type Enum
     * @since 0.10.22
     */
    enum StructureChangeType {
        LINK,
        UNLINK,
    }

    /**
     * @gir-type Enum
     */
    export namespace TagFlag {
        export const $gtype: GObject.GType<TagFlag>;
    }

    /**
     * Extra tag flags used when registering tags.
     * @gir-type Enum
     */
    enum TagFlag {
        UNDEFINED,
        META,
        ENCODED,
        DECODED,
        COUNT,
    }

    /**
     * @gir-type Enum
     */
    export namespace TagMergeMode {
        export const $gtype: GObject.GType<TagMergeMode>;
    }

    /**
     * The different tag merging modes are basically replace, overwrite and append,
     * already in the element and (B) the ones that are supplied to the element (
     * e.g. via `gst_tag_setter_merge_tags()` / `gst_tag_setter_add_tags()` or a
     * {@link Gst.EventType.TAG}), how are these tags merged?
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace TaskState {
        export const $gtype: GObject.GType<TaskState>;
    }

    /**
     * The different states a task can be in
     * @gir-type Enum
     */
    enum TaskState {
        STARTED,
        STOPPED,
        PAUSED,
    }

    /**
     * @gir-type Enum
     */
    export namespace TypeFindProbability {
        export const $gtype: GObject.GType<TypeFindProbability>;
    }

    /**
     * The probability of the typefind function. Higher values have more certainty
     * in doing a reliable typefind.
     * @gir-type Enum
     */
    enum TypeFindProbability {
        MINIMUM,
        POSSIBLE,
        LIKELY,
        NEARLY_CERTAIN,
        MAXIMUM,
    }

    /**
     * @gir-type Enum
     */
    export namespace URIType {
        export const $gtype: GObject.GType<URIType>;
    }

    /**
     * The different types of URI direction.
     * @gir-type Enum
     */
    enum URIType {
        UNKNOWN,
        SINK,
        SRC,
    }

    const BASE_TRANSFORM_SINK_NAME: string;
    const BASE_TRANSFORM_SRC_NAME: string;
    const BUFFER_COPY_ALL: number;
    const BUFFER_OFFSET_NONE: number;
    const BUFFER_TRACE_NAME: string;
    const CAN_INLINE: number;
    const CLOCK_ENTRY_TRACE_NAME: string;
    const CLOCK_TIME_NONE: number;
    const DEBUG_BG_MASK: number;
    const DEBUG_FG_MASK: number;
    const DEBUG_FORMAT_MASK: number;
    const DISABLE_ALLOC_TRACE: number;
    const DISABLE_GST_DEBUG: number;
    const DISABLE_LOADSAVE: number;
    const DISABLE_LOADSAVE_REGISTRY: number;
    const DISABLE_PARSE: number;
    const DISABLE_PLUGIN: number;
    const DISABLE_REGISTRY: number;
    const DISABLE_TRACE: number;
    const DISABLE_XML: number;
    const ERROR_SYSTEM: string;
    const EVENT_TRACE_NAME: string;
    const EVENT_TYPE_BOTH: number;
    const EVENT_TYPE_SHIFT: number;
    const FOURCC_FORMAT: string;
    const HAVE_GLIB_2_8: number;
    const HAVE_UNALIGNED_ACCESS: number;
    const INDEX_ID_INVALID: number;
    const LICENSE_UNKNOWN: string;
    const MESSAGE_TRACE_NAME: string;
    const MSECOND: number;
    const M_PI: number;
    const NSECOND: number;
    const PADDING: number;
    const PADDING_LARGE: number;
    const PAD_LINK_CHECK_DEFAULT: number;
    const PARAM_CONTROLLABLE: number;
    const PARAM_MUTABLE_PAUSED: number;
    const PARAM_MUTABLE_PLAYING: number;
    const PARAM_MUTABLE_READY: number;
    const PARAM_USER_SHIFT: number;
    const PTR_FORMAT: string;
    const SECOND: number;
    const SEGMENT_FORMAT: string;
    const TAG_ALBUM: string;
    const TAG_ALBUM_ARTIST: string;
    const TAG_ALBUM_ARTIST_SORTNAME: string;
    const TAG_ALBUM_GAIN: string;
    const TAG_ALBUM_PEAK: string;
    const TAG_ALBUM_SORTNAME: string;
    const TAG_ALBUM_VOLUME_COUNT: string;
    const TAG_ALBUM_VOLUME_NUMBER: string;
    const TAG_ARTIST: string;
    const TAG_ARTIST_SORTNAME: string;
    const TAG_ATTACHMENT: string;
    const TAG_AUDIO_CODEC: string;
    const TAG_BEATS_PER_MINUTE: string;
    const TAG_BITRATE: string;
    const TAG_CODEC: string;
    const TAG_COMMENT: string;
    const TAG_COMPOSER: string;
    const TAG_COMPOSER_SORTNAME: string;
    const TAG_CONTACT: string;
    const TAG_CONTAINER_FORMAT: string;
    const TAG_COPYRIGHT: string;
    const TAG_COPYRIGHT_URI: string;
    const TAG_DATE: string;
    const TAG_DESCRIPTION: string;
    const TAG_DEVICE_MANUFACTURER: string;
    const TAG_DEVICE_MODEL: string;
    const TAG_DURATION: string;
    const TAG_ENCODER: string;
    const TAG_ENCODER_VERSION: string;
    const TAG_EXTENDED_COMMENT: string;
    const TAG_GENRE: string;
    const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string;
    const TAG_GEO_LOCATION_CITY: string;
    const TAG_GEO_LOCATION_COUNTRY: string;
    const TAG_GEO_LOCATION_ELEVATION: string;
    const TAG_GEO_LOCATION_LATITUDE: string;
    const TAG_GEO_LOCATION_LONGITUDE: string;
    const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string;
    const TAG_GEO_LOCATION_MOVEMENT_SPEED: string;
    const TAG_GEO_LOCATION_NAME: string;
    const TAG_GEO_LOCATION_SUBLOCATION: string;
    const TAG_GROUPING: string;
    const TAG_HOMEPAGE: string;
    const TAG_IMAGE: string;
    const TAG_IMAGE_ORIENTATION: string;
    const TAG_ISRC: string;
    const TAG_KEYWORDS: string;
    const TAG_LANGUAGE_CODE: string;
    const TAG_LICENSE: string;
    const TAG_LICENSE_URI: string;
    const TAG_LOCATION: string;
    const TAG_LYRICS: string;
    const TAG_MAXIMUM_BITRATE: string;
    const TAG_MINIMUM_BITRATE: string;
    const TAG_NOMINAL_BITRATE: string;
    const TAG_ORGANIZATION: string;
    const TAG_PERFORMER: string;
    const TAG_PREVIEW_IMAGE: string;
    const TAG_REFERENCE_LEVEL: string;
    const TAG_SERIAL: string;
    const TAG_SHOW_EPISODE_NUMBER: string;
    const TAG_SHOW_NAME: string;
    const TAG_SHOW_SEASON_NUMBER: string;
    const TAG_SHOW_SORTNAME: string;
    const TAG_SUBTITLE_CODEC: string;
    const TAG_TITLE: string;
    const TAG_TITLE_SORTNAME: string;
    const TAG_TRACK_COUNT: string;
    const TAG_TRACK_GAIN: string;
    const TAG_TRACK_NUMBER: string;
    const TAG_TRACK_PEAK: string;
    const TAG_USER_RATING: string;
    const TAG_VERSION: string;
    const TAG_VIDEO_CODEC: string;
    const TIME_FORMAT: string;
    const USECOND: number;
    const VALUE_EQUAL: number;
    const VALUE_GREATER_THAN: number;
    const VALUE_LESS_THAN: number;
    const VALUE_UNORDERED: number;
    const VERSION_MAJOR: number;
    const VERSION_MICRO: number;
    const VERSION_MINOR: number;
    const VERSION_NANO: number;
    function alloc_trace_available(): boolean;
    /**
     * @param name
     */
    function alloc_trace_get(name: string): AllocTrace;
    function alloc_trace_live_all(): number;
    function alloc_trace_print_all(): void;
    function alloc_trace_print_live(): void;
    /**
     * @param flags
     */
    function alloc_trace_set_flags_all(flags: AllocTraceFlags | null): void;
    /**
     * @param value
     */
    function atomic_int_set(value: number): number;
    /**
     * @param string
     */
    function caps_from_string(string: string): Caps;
    /**
     * @param parent
     */
    function caps_load_thyself(parent: libxml2.NodePtr): Caps;
    /**
     * @param object
     * @param child
     */
    function child_proxy_child_added(object: Object, child: Object): void;
    /**
     * @param object
     * @param child
     */
    function child_proxy_child_removed(object: Object, child: Object): void;
    /**
     * @param object
     * @param name
     * @param value
     */
    function child_proxy_get_property(object: Object, name: string, value: GObject.Value | any): void;
    /**
     * @param object
     * @param name
     * @param target
     * @param pspec
     */
    function child_proxy_lookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): boolean;
    /**
     * @param object
     * @param name
     * @param value
     */
    function child_proxy_set_property(object: Object, name: string, value: GObject.Value | any): void;
    /**
     * @param klass
     * @param name
     * @param func
     * @param func_data
     */
    function class_signal_connect(klass: typeof Object, name: string, func: any, func_data: any): number;
    /**
     * @param object
     * @param name
     * @param self
     */
    function class_signal_emit_by_name(object: Object, name: string, self: libxml2.NodePtr): void;
    /**
     * @param func
     */
    function debug_add_log_function(func: LogFunction): void;
    /**
     * @param colorinfo
     */
    function debug_construct_term_color(colorinfo: number): string;
    /**
     * @param colorinfo
     */
    function debug_construct_win_color(colorinfo: number): number;
    function debug_get_all_categories(): any[];
    function debug_get_default_threshold(): DebugLevel;
    function debug_is_active(): boolean;
    function debug_is_colored(): boolean;
    /**
     * @param level
     */
    function debug_level_get_name(level: DebugLevel | null): string;
    /**
     * @param category
     * @param level
     * @param file
     * @param _function
     * @param line
     * @param object
     * @param message
     * @param unused
     */
    function debug_log_default(
        category: DebugCategory,
        level: DebugLevel | null,
        file: string,
        _function: string,
        line: number,
        object: GObject.Object,
        message: DebugMessage,
        unused: any,
    ): void;
    function debug_print_stack_trace(): void;
    /**
     * @param func
     */
    function debug_remove_log_function(func: LogFunction): number;
    /**
     * @param data
     */
    function debug_remove_log_function_by_data(data: any): number;
    /**
     * @param active
     */
    function debug_set_active(active: boolean): void;
    /**
     * @param colored
     */
    function debug_set_colored(colored: boolean): void;
    /**
     * @param level
     */
    function debug_set_default_threshold(level: DebugLevel | null): void;
    /**
     * @param name
     * @param level
     */
    function debug_set_threshold_for_name(name: string, level: DebugLevel | null): void;
    /**
     * @param name
     */
    function debug_unset_threshold_for_name(name: string): void;
    /**
     * @param feature_name
     * @param min_major
     * @param min_minor
     * @param min_micro
     */
    function default_registry_check_feature_version(
        feature_name: string,
        min_major: number,
        min_minor: number,
        min_micro: number,
    ): boolean;
    function deinit(): void;
    /**
     * @param domain
     * @param code
     */
    function error_get_message(domain: GLib.Quark, code: number): string;
    /**
     * @param ret
     */
    function flow_get_name(ret: FlowReturn | null): string;
    /**
     * @param ret
     */
    function flow_to_quark(ret: FlowReturn | null): GLib.Quark;
    /**
     * @param nick
     */
    function format_get_by_nick(nick: string): Format;
    /**
     * @param format
     */
    function format_get_details(format: Format | null): FormatDefinition;
    /**
     * @param format
     */
    function format_get_name(format: Format | null): string;
    function format_iterate_definitions(): Iterator;
    /**
     * @param nick
     * @param description
     */
    function format_register(nick: string, description: string): Format;
    /**
     * @param format
     */
    function format_to_quark(format: Format | null): GLib.Quark;
    /**
     * @param formats
     * @param format
     */
    function formats_contains(formats: Format | null, format: Format | null): boolean;
    /**
     * @param from
     * @param type
     */
    function implements_interface_cast(from: any, type: GObject.GType): any;
    /**
     * @param from
     * @param type
     */
    function implements_interface_check(from: any, type: GObject.GType): boolean;
    /**
     * @param argv arguments
     */
    function init(argv?: string[] | null): string[] | null;
    /**
     * @param argv
     */
    function init_check(argv: string[]): [boolean, number];
    function init_get_option_group(): GLib.OptionGroup;
    /**
     * @param p
     */
    function is_tag_list(p: any): boolean;
    /**
     * @param name
     * @param nick
     * @param blurb
     * @param min_num
     * @param min_denom
     * @param max_num
     * @param max_denom
     * @param default_num
     * @param default_denom
     * @param flags
     */
    function param_spec_fraction(
        name: string,
        nick: string,
        blurb: string,
        min_num: number,
        min_denom: number,
        max_num: number,
        max_denom: number,
        default_num: number,
        default_denom: number,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * @param name
     * @param nick
     * @param blurb
     * @param object_type
     * @param flags
     */
    function param_spec_mini_object(
        name: string,
        nick: string,
        blurb: string,
        object_type: GObject.GType,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * @param bin_description
     * @param ghost_unlinked_pads
     */
    function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Element;
    /**
     * @param bin_description
     * @param ghost_unlinked_pads
     * @param context
     * @param flags
     */
    function parse_bin_from_description_full(
        bin_description: string,
        ghost_unlinked_pads: boolean,
        context: ParseContext,
        flags: ParseFlags | null,
    ): Element;
    /**
     * @param pipeline_description
     */
    function parse_launch(pipeline_description: string): Element;
    /**
     * @param pipeline_description
     * @param context
     * @param flags
     */
    function parse_launch_full(pipeline_description: string, context: ParseContext, flags: ParseFlags | null): Element;
    /**
     * @param argv
     */
    function parse_launchv(argv: string[]): Element;
    /**
     * @param argv
     * @param context
     * @param flags
     */
    function parse_launchv_full(argv: string[], context: ParseContext, flags: ParseFlags | null): Element;
    /**
     * @param buf
     * @param indent
     * @param element
     */
    function print_element_args(buf: GLib.String, indent: number, element: Element): void;
    /**
     * @param buf
     * @param indent
     * @param pad
     */
    function print_pad_caps(buf: GLib.String, indent: number, pad: Pad): void;
    function segtrap_is_enabled(): boolean;
    /**
     * @param enabled
     */
    function segtrap_set_enabled(enabled: boolean): void;
    /**
     * @param name
     */
    function structure_empty_new(name: string): Structure;
    /**
     * @param string
     * @param end
     */
    function structure_from_string(string: string, end: string[]): Structure;
    /**
     * @param quark
     */
    function structure_id_empty_new(quark: GLib.Quark): Structure;
    /**
     * @param tag
     */
    function tag_exists(tag: string): boolean;
    /**
     * @param tag
     */
    function tag_get_description(tag: string): string;
    /**
     * @param tag
     */
    function tag_get_flag(tag: string): TagFlag;
    /**
     * @param tag
     */
    function tag_get_nick(tag: string): string;
    /**
     * @param tag
     */
    function tag_get_type(tag: string): GObject.GType;
    /**
     * @param tag
     */
    function tag_is_fixed(tag: string): boolean;
    /**
     * @param dest
     * @param list
     * @param tag
     */
    function tag_list_copy_value(dest: GObject.Value | any, list: TagList, tag: string): boolean;
    /**
     * @param dest
     * @param src
     */
    function tag_merge_strings_with_comma(dest: GObject.Value | any, src: GObject.Value | any): void;
    /**
     * @param dest
     * @param src
     */
    function tag_merge_use_first(dest: GObject.Value | any, src: GObject.Value | any): void;
    /**
     * @param name
     * @param flag
     * @param type
     * @param nick
     * @param blurb
     * @param func
     */
    function tag_register(
        name: string,
        flag: TagFlag | null,
        type: GObject.GType,
        nick: string,
        blurb: string,
        func: TagMergeFunc,
    ): void;
    function trace_read_tsc(): number;
    /**
     * @param src
     * @param size
     */
    function type_find_helper(src: Pad, size: number): Caps;
    /**
     * @param obj
     * @param buf
     * @param prob
     */
    function type_find_helper_for_buffer(obj: Object, buf: Buffer, prob: TypeFindProbability | null): Caps;
    /**
     * @param obj
     * @param extension
     */
    function type_find_helper_for_extension(obj: Object, extension: string): Caps;
    /**
     * @param obj
     * @param func
     * @param size
     * @param prob
     */
    function type_find_helper_get_range(
        obj: Object,
        func: TypeFindHelperGetRangeFunction,
        size: number,
        prob: TypeFindProbability | null,
    ): Caps;
    /**
     * @param obj
     * @param func
     * @param size
     * @param extension
     * @param prob
     */
    function type_find_helper_get_range_ext(
        obj: Object,
        func: TypeFindHelperGetRangeFunction,
        size: number,
        extension: string,
        prob: TypeFindProbability | null,
    ): Caps;
    /**
     * @param plugin
     * @param name
     * @param rank
     * @param func
     * @param extensions
     * @param possible_caps
     * @param data
     */
    function type_find_register(
        plugin: Plugin,
        name: string,
        rank: number,
        func: TypeFindFunction,
        extensions: string[],
        possible_caps: Caps,
        data: any,
    ): boolean;
    /**
     * @param parent_type
     * @param type_name
     * @param class_size
     * @param base_init
     * @param base_finalize
     * @param class_init
     * @param class_finalize
     * @param instance_size
     * @param n_preallocs
     * @param instance_init
     * @param value_table
     * @param flags
     */
    function type_register_static_full(
        parent_type: GObject.GType,
        type_name: string,
        class_size: number,
        base_init: GObject.BaseInitFunc,
        base_finalize: GObject.BaseFinalizeFunc,
        class_init: GObject.ClassInitFunc,
        class_finalize: GObject.ClassFinalizeFunc,
        instance_size: number,
        n_preallocs: number,
        instance_init: GObject.InstanceInitFunc,
        value_table: GObject.TypeValueTable,
        flags: GObject.TypeFlags | null,
    ): GObject.GType;
    function update_registry(): boolean;
    /**
     * @param protocol
     * @param location
     */
    function uri_construct(protocol: string, location: string): string;
    /**
     * @param uri
     */
    function uri_get_location(uri: string): string;
    /**
     * @param uri
     */
    function uri_get_protocol(uri: string): string;
    /**
     * @param uri
     * @param protocol
     */
    function uri_has_protocol(uri: string, protocol: string): boolean;
    /**
     * @param uri
     */
    function uri_is_valid(uri: string): boolean;
    /**
     * @param type
     * @param protocol
     */
    function uri_protocol_is_supported(type: URIType | null, protocol: string): boolean;
    /**
     * @param protocol
     */
    function uri_protocol_is_valid(protocol: string): boolean;
    /**
     * @param array
     * @param num_elements
     * @param element_size
     * @param search_func
     * @param mode
     * @param search_data
     * @param user_data
     */
    function util_array_binary_search(
        array: any,
        num_elements: number,
        element_size: number,
        search_func: GLib.CompareDataFunc,
        mode: SearchMode | null,
        search_data: any,
        user_data: any,
    ): any;
    /**
     * @param src
     */
    function util_double_to_fraction(src: number): [number, number];
    /**
     * @param mem
     * @param size
     */
    function util_dump_mem(mem: number[], size: number): void;
    /**
     * @param a_n
     * @param a_d
     * @param b_n
     * @param b_d
     */
    function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
    /**
     * @param a_n
     * @param a_d
     * @param b_n
     * @param b_d
     */
    function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
    /**
     * @param src_n
     * @param src_d
     */
    function util_fraction_to_double(src_n: number, src_d: number): number;
    /**
     * @param value
     */
    function util_gdouble_to_guint64(value: number): number;
    function util_get_timestamp(): ClockTime;
    /**
     * @param a
     * @param b
     */
    function util_greatest_common_divisor(a: number, b: number): number;
    /**
     * @param value
     */
    function util_guint64_to_gdouble(value: number): number;
    /**
     * @param s1
     * @param s2
     */
    function util_seqnum_compare(s1: number, s2: number): number;
    function util_seqnum_next(): number;
    /**
     * @param object
     * @param name
     * @param value
     */
    function util_set_object_arg(object: GObject.Object, name: string, value: string): void;
    /**
     * @param value
     * @param value_str
     */
    function util_set_value_from_string(value: GObject.Value | any, value_str: string): void;
    /**
     * @param val
     * @param num
     * @param denom
     */
    function util_uint64_scale(val: number, num: number, denom: number): number;
    /**
     * @param val
     * @param num
     * @param denom
     */
    function util_uint64_scale_ceil(val: number, num: number, denom: number): number;
    /**
     * @param val
     * @param num
     * @param denom
     */
    function util_uint64_scale_int(val: number, num: number, denom: number): number;
    /**
     * @param val
     * @param num
     * @param denom
     */
    function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number;
    /**
     * @param val
     * @param num
     * @param denom
     */
    function util_uint64_scale_int_round(val: number, num: number, denom: number): number;
    /**
     * @param val
     * @param num
     * @param denom
     */
    function util_uint64_scale_round(val: number, num: number, denom: number): number;
    /**
     * @param value
     * @param append_value
     */
    function value_array_append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
    /**
     * @param value
     */
    function value_array_get_size(value: GObject.Value | any): number;
    /**
     * @param value
     * @param index
     */
    function value_array_get_value(value: GObject.Value | any, index: number): unknown;
    /**
     * @param value
     * @param prepend_value
     */
    function value_array_prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    /**
     * @param value1
     * @param value2
     */
    function value_can_compare(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    /**
     * @param value1
     * @param value2
     */
    function value_can_intersect(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    /**
     * @param minuend
     * @param subtrahend
     */
    function value_can_subtract(minuend: GObject.Value | any, subtrahend: GObject.Value | any): boolean;
    /**
     * @param value1
     * @param value2
     */
    function value_can_union(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    /**
     * @param value1
     * @param value2
     */
    function value_compare(value1: GObject.Value | any, value2: GObject.Value | any): number;
    /**
     * @param dest
     * @param src
     */
    function value_deserialize(dest: GObject.Value | any, src: string): boolean;
    /**
     * @param value
     */
    function value_dup_mini_object(value: GObject.Value | any): MiniObject;
    /**
     * @param product
     * @param factor1
     * @param factor2
     */
    function value_fraction_multiply(
        product: GObject.Value | any,
        factor1: GObject.Value | any,
        factor2: GObject.Value | any,
    ): boolean;
    /**
     * @param dest
     * @param minuend
     * @param subtrahend
     */
    function value_fraction_subtract(
        dest: GObject.Value | any,
        minuend: GObject.Value | any,
        subtrahend: GObject.Value | any,
    ): boolean;
    /**
     * @param value
     */
    function value_get_caps(value: GObject.Value | any): Caps;
    /**
     * @param value
     */
    function value_get_date(value: GObject.Value | any): GLib.Date;
    /**
     * @param value
     */
    function value_get_double_range_max(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_double_range_min(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_fourcc(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_fraction_denominator(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_fraction_numerator(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_fraction_range_max(value: GObject.Value | any): unknown;
    /**
     * @param value
     */
    function value_get_fraction_range_min(value: GObject.Value | any): unknown;
    /**
     * @param value
     */
    function value_get_int_range_max(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_int_range_min(value: GObject.Value | any): number;
    /**
     * @param value
     */
    function value_get_mini_object(value: GObject.Value | any): MiniObject;
    /**
     * @param value
     */
    function value_get_structure(value: GObject.Value | any): Structure;
    /**
     * @param dest
     * @param src
     */
    function value_init_and_copy(dest: GObject.Value | any, src: GObject.Value | any): void;
    /**
     * @param dest
     * @param value1
     * @param value2
     */
    function value_intersect(
        dest: GObject.Value | any,
        value1: GObject.Value | any,
        value2: GObject.Value | any,
    ): boolean;
    /**
     * @param value
     */
    function value_is_fixed(value: GObject.Value | any): boolean;
    /**
     * @param value
     * @param append_value
     */
    function value_list_append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
    /**
     * @param dest
     * @param value1
     * @param value2
     */
    function value_list_concat(
        dest: GObject.Value | any,
        value1: GObject.Value | any,
        value2: GObject.Value | any,
    ): void;
    /**
     * @param value
     */
    function value_list_get_size(value: GObject.Value | any): number;
    /**
     * @param value
     * @param index
     */
    function value_list_get_value(value: GObject.Value | any, index: number): unknown;
    /**
     * @param value
     * @param prepend_value
     */
    function value_list_prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    /**
     * @param table
     */
    function value_register(table: ValueTable): void;
    /**
     * @param type1
     * @param type2
     * @param func
     */
    function value_register_intersect_func(type1: GObject.GType, type2: GObject.GType, func: ValueIntersectFunc): void;
    /**
     * @param minuend_type
     * @param subtrahend_type
     * @param func
     */
    function value_register_subtract_func(
        minuend_type: GObject.GType,
        subtrahend_type: GObject.GType,
        func: ValueSubtractFunc,
    ): void;
    /**
     * @param type1
     * @param type2
     * @param func
     */
    function value_register_union_func(type1: GObject.GType, type2: GObject.GType, func: ValueUnionFunc): void;
    /**
     * @param value
     */
    function value_serialize(value: GObject.Value | any): string;
    /**
     * @param value
     * @param caps
     */
    function value_set_caps(value: GObject.Value | any, caps: Caps): void;
    /**
     * @param value
     * @param date
     */
    function value_set_date(value: GObject.Value | any, date: GLib.Date): void;
    /**
     * @param value
     * @param start
     * @param end
     */
    function value_set_double_range(value: GObject.Value | any, start: number, end: number): void;
    /**
     * @param value
     * @param fourcc
     */
    function value_set_fourcc(value: GObject.Value | any, fourcc: number): void;
    /**
     * @param value
     * @param numerator
     * @param denominator
     */
    function value_set_fraction(value: GObject.Value | any, numerator: number, denominator: number): void;
    /**
     * @param value
     * @param start
     * @param end
     */
    function value_set_fraction_range(
        value: GObject.Value | any,
        start: GObject.Value | any,
        end: GObject.Value | any,
    ): void;
    /**
     * @param value
     * @param numerator_start
     * @param denominator_start
     * @param numerator_end
     * @param denominator_end
     */
    function value_set_fraction_range_full(
        value: GObject.Value | any,
        numerator_start: number,
        denominator_start: number,
        numerator_end: number,
        denominator_end: number,
    ): void;
    /**
     * @param value
     * @param start
     * @param end
     */
    function value_set_int_range(value: GObject.Value | any, start: number, end: number): void;
    /**
     * @param value
     * @param mini_object
     */
    function value_set_mini_object(value: GObject.Value | any, mini_object: MiniObject): void;
    /**
     * @param value
     * @param structure
     */
    function value_set_structure(value: GObject.Value | any, structure: Structure): void;
    /**
     * @param dest
     * @param minuend
     * @param subtrahend
     */
    function value_subtract(
        dest: GObject.Value | any,
        minuend: GObject.Value | any,
        subtrahend: GObject.Value | any,
    ): boolean;
    /**
     * @param value
     * @param mini_object
     */
    function value_take_mini_object(value: GObject.Value | any, mini_object: MiniObject): void;
    /**
     * @param dest
     * @param value1
     * @param value2
     */
    function value_union(dest: GObject.Value | any, value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function version(): [number, number, number, number];
    function version_string(): string;
    /**
     * @gir-type Callback
     */
    interface BufferListDoFunction {
        (buffer: Buffer): Buffer;
    }
    /**
     * @gir-type Callback
     */
    interface BufferListFunc {
        (buffer: Buffer, group: number, idx: number): BufferListItem;
    }
    /**
     * @gir-type Callback
     */
    interface BusFunc {
        (bus: Bus, message: Message, data: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface BusSyncHandler {
        (bus: Bus, message: Message, data: any): BusSyncReply;
    }
    /**
     * @gir-type Callback
     */
    interface ClockCallback {
        (clock: Clock, time: ClockTime, id: ClockID): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface CollectDataDestroyNotify {
        (data: CollectData): void;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsClipFunction {
        (pads: CollectPads, data: CollectData, buffer: Buffer): Buffer;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsFunction {
        (pads: CollectPads): FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface CopyFunction {
        (object: any): any;
    }
    /**
     * @gir-type Callback
     */
    interface DataQueueCheckFullFunction {
        (queue: DataQueue, visible: number, bytes: number, time: number, checkdata: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface DataQueueEmptyCallback {
        (queue: DataQueue, checkdata: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface DataQueueFullCallback {
        (queue: DataQueue, checkdata: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface DebugFuncPtr {
        (): void;
    }
    /**
     * @gir-type Callback
     */
    interface FilterFunc {
        (obj: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface IndexFilter {
        (index: Index, entry: IndexEntry): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface IndexResolver {
        (index: Index, writer: Object, writer_string: string[]): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface IteratorDisposeFunction {
        (owner: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface IteratorFoldFunction {
        (item: any, ret: GObject.Value | any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface IteratorFreeFunction {
        (it: Iterator): void;
    }
    /**
     * @gir-type Callback
     */
    interface IteratorItemFunction {
        (it: Iterator, item: any): IteratorItem;
    }
    /**
     * @gir-type Callback
     */
    interface IteratorNextFunction {
        (it: Iterator, result: any): IteratorResult;
    }
    /**
     * @gir-type Callback
     */
    interface IteratorResyncFunction {
        (it: Iterator): void;
    }
    /**
     * @gir-type Callback
     */
    interface LogFunction<A = GObject.Object> {
        (
            category: DebugCategory,
            level: DebugLevel,
            file: string,
            _function: string,
            line: number,
            object: A,
            message: DebugMessage,
            data: any,
        ): void;
    }
    /**
     * @gir-type Callback
     */
    interface MiniObjectCopyFunction {
        (obj: MiniObject): MiniObject;
    }
    /**
     * @gir-type Callback
     */
    interface MiniObjectFinalizeFunction {
        (obj: MiniObject): void;
    }
    /**
     * @gir-type Callback
     */
    interface PadAcceptCapsFunction {
        (pad: Pad, caps: Caps): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadActivateFunction {
        (pad: Pad): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadActivateModeFunction {
        (pad: Pad, active: boolean): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadBlockCallback {
        (pad: Pad, blocked: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface PadBufferAllocFunction {
        (pad: Pad, offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface PadChainFunction {
        (pad: Pad, buffer: Buffer): FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface PadChainListFunction {
        (pad: Pad, list: BufferList): FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface PadCheckGetRangeFunction {
        (pad: Pad): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadDispatcherFunction {
        (pad: Pad, data: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadEventFunction {
        (pad: Pad, event: Event): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadFixateCapsFunction {
        (pad: Pad, caps: Caps): void;
    }
    /**
     * @gir-type Callback
     */
    interface PadGetCapsFunction {
        (pad: Pad): Caps;
    }
    /**
     * @gir-type Callback
     */
    interface PadGetRangeFunction {
        (pad: Pad, offset: number, length: number, buffer: Buffer): FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface PadIntLinkFunction {
        (pad: Pad): Pad[];
    }
    /**
     * @gir-type Callback
     */
    interface PadIterIntLinkFunction {
        (pad: Pad): Iterator;
    }
    /**
     * @gir-type Callback
     */
    interface PadLinkFunction {
        (pad: Pad, peer: Pad): PadLinkReturn;
    }
    /**
     * @gir-type Callback
     */
    interface PadQueryFunction {
        (pad: Pad, query: Query): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadQueryTypeFunction {
        (pad: Pad): QueryType;
    }
    /**
     * @gir-type Callback
     */
    interface PadSetCapsFunction {
        (pad: Pad, caps: Caps): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PadUnlinkFunction {
        (pad: Pad): void;
    }
    /**
     * @gir-type Callback
     */
    interface PluginFeatureFilter {
        (feature: PluginFeature): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PluginFilter {
        (plugin: Plugin): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PluginInitFullFunc {
        (plugin: Plugin): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface PluginInitFunc {
        (plugin: Plugin): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface StructureForeachFunc {
        (field_id: GLib.Quark, value: GObject.Value | any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface StructureMapFunc {
        (field_id: GLib.Quark, value: GObject.Value | any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface TagForeachFunc {
        (list: TagList, tag: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface TagMergeFunc {
        (dest: GObject.Value | any, src: GObject.Value | any): void;
    }
    /**
     * @gir-type Callback
     */
    interface TaskFunction {
        (data: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface TaskPoolFunction {
        (data: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface TypeFindFunction {
        (find: TypeFind, data: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface TypeFindHelperGetRangeFunction {
        (obj: Object, offset: number, length: number, buffer: Buffer): FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface ValueCompareFunc {
        (value1: GObject.Value | any, value2: GObject.Value | any): number;
    }
    /**
     * @gir-type Callback
     */
    interface ValueDeserializeFunc {
        (dest: GObject.Value | any, s: string): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ValueIntersectFunc {
        (dest: GObject.Value | any, value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ValueSerializeFunc {
        (value1: GObject.Value | any): string;
    }
    /**
     * @gir-type Callback
     */
    interface ValueSubtractFunc {
        (dest: GObject.Value | any, minuend: GObject.Value | any, subtrahend: GObject.Value | any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ValueUnionFunc {
        (dest: GObject.Value | any, value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    }
    /**
     * @gir-type Alias
     */
    type Date = object | null;
    /**
     * @gir-type Alias
     */
    type GError = object | null;
    /**
     * @gir-type Alias
     */
    type TagList = unknown;
    /**
     * @gir-type Flags
     */
    export namespace AllocTraceFlags {
        export const $gtype: GObject.GType<AllocTraceFlags>;
    }

    /**
     * Flags indicating which tracing feature to enable.
     * @gir-type Flags
     */
    enum AllocTraceFlags {
        LIVE,
        MEM_LIVE,
    }

    /**
     * @gir-type Flags
     */
    export namespace AssocFlags {
        export const $gtype: GObject.GType<AssocFlags>;
    }

    /**
     * Flags for an association entry.
     * @gir-type Flags
     */
    enum AssocFlags {
        NONE,
        KEY_UNIT,
        DELTA_UNIT,
        LAST,
    }

    /**
     * The {@link Gst.Element} flags that a basesrc element may have.
     * @gir-type Flags
     */
    enum BaseSrcFlags {
        STARTED,
        FLAG_LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace BinFlags {
        export const $gtype: GObject.GType<BinFlags>;
    }

    /**
     * GstBinFlags are a set of flags specific to bins. Most are set/used
     * internally. They can be checked using the GST_OBJECT_FLAG_IS_SET () macro,
     * and (un)set using GST_OBJECT_FLAG_SET () and GST_OBJECT_FLAG_UNSET ().
     * @gir-type Flags
     */
    enum BinFlags {
        LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace BufferCopyFlags {
        export const $gtype: GObject.GType<BufferCopyFlags>;
    }

    /**
     * A set of flags that can be provided to the `gst_buffer_copy_metadata()`
     * function to specify which metadata fields should be copied.
     * @gir-type Flags
     * @since 0.10.13
     */
    enum BufferCopyFlags {
        FLAGS,
        TIMESTAMPS,
        CAPS,
    }

    /**
     * @gir-type Flags
     */
    export namespace BufferFlag {
        export const $gtype: GObject.GType<BufferFlag>;
    }

    /**
     * A set of buffer flags used to describe properties of a {@link Gst.Buffer}.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace BusFlags {
        export const $gtype: GObject.GType<BusFlags>;
    }

    /**
     * The standard flags that a bus may have.
     * @gir-type Flags
     */
    enum BusFlags {
        FLUSHING,
        FLAG_LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace CapsFlags {
        export const $gtype: GObject.GType<CapsFlags>;
    }

    /**
     * Extra flags for a caps.
     * @gir-type Flags
     */
    enum CapsFlags {
        ANY,
    }

    /**
     * @gir-type Flags
     */
    export namespace ClockFlags {
        export const $gtype: GObject.GType<ClockFlags>;
    }

    /**
     * The capabilities of this clock
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace DebugGraphDetails {
        export const $gtype: GObject.GType<DebugGraphDetails>;
    }

    /**
     * Available details for pipeline graphs produced by GST_DEBUG_BIN_TO_DOT_FILE()
     * and GST_DEBUG_BIN_TO_DOT_FILE_WITH_TS().
     * @gir-type Flags
     * @since 0.10.15
     */
    enum DebugGraphDetails {
        MEDIA_TYPE,
        CAPS_DETAILS,
        NON_DEFAULT_PARAMS,
        STATES,
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace ElementFlags {
        export const $gtype: GObject.GType<ElementFlags>;
    }

    /**
     * The standard flags that an element may have.
     * @gir-type Flags
     */
    enum ElementFlags {
        LOCKED_STATE,
        IS_SINK,
        UNPARENTING,
        FLAG_LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace EventTypeFlags {
        export const $gtype: GObject.GType<EventTypeFlags>;
    }

    /**
     * {@link Gst.EventTypeFlags} indicate the aspects of the different {@link Gst.EventType}
     * values. You can get the type flags of a {@link Gst.EventType} with the
     * `gst_event_type_get_flags()` function.
     * @gir-type Flags
     */
    enum EventTypeFlags {
        UPSTREAM,
        DOWNSTREAM,
        SERIALIZED,
    }

    /**
     * @gir-type Flags
     */
    export namespace IndexFlags {
        export const $gtype: GObject.GType<IndexFlags>;
    }

    /**
     * Flags for this index
     * @gir-type Flags
     */
    enum IndexFlags {
        WRITABLE,
        READABLE,
        FLAG_LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace MessageType {
        export const $gtype: GObject.GType<MessageType>;
    }

    /**
     * The different message types that are available.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace MiniObjectFlags {
        export const $gtype: GObject.GType<MiniObjectFlags>;
    }

    /**
     * Flags for the padtemplate
     * @gir-type Flags
     */
    enum MiniObjectFlags {
        READONLY,
        LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace ObjectFlags {
        export const $gtype: GObject.GType<ObjectFlags>;
    }

    /**
     * The standard flags that an gstobject may have.
     * @gir-type Flags
     */
    enum ObjectFlags {
        DISPOSING,
        FLOATING,
        FLAG_LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace PadFlags {
        export const $gtype: GObject.GType<PadFlags>;
    }

    /**
     * Pad state flags
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace PadLinkCheck {
        export const $gtype: GObject.GType<PadLinkCheck>;
    }

    /**
     * The amount of checking to be done when linking pads. `GST_PAD_LINK_CHECK_CAPS`
     * and `GST_PAD_LINK_CHECK_TEMPLATE_CAPS` are mutually exclusive. If both are
     * specified, expensive but safe `GST_PAD_LINK_CHECK_CAPS` are performed.
     * <warning><para>
     * Only disable some of the checks if you are 100% certain you know the link
     * will not fail because of hierarchy/caps compatibility failures. If uncertain,
     * use the default checks (`GST_PAD_LINK_CHECK_DEFAULT`) or the regular methods
     * for linking the pads.
     * </para></warning>
     * @gir-type Flags
     * @since 0.10.30
     */
    enum PadLinkCheck {
        NOTHING,
        HIERARCHY,
        TEMPLATE_CAPS,
        CAPS,
    }

    /**
     * @gir-type Flags
     */
    export namespace PadTemplateFlags {
        export const $gtype: GObject.GType<PadTemplateFlags>;
    }

    /**
     * Flags for the padtemplate
     * @gir-type Flags
     */
    enum PadTemplateFlags {
        FIXED,
        FLAG_LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace ParseFlags {
        export const $gtype: GObject.GType<ParseFlags>;
    }

    /**
     * Parsing options.
     * @gir-type Flags
     * @since 0.10.20
     */
    enum ParseFlags {
        NONE,
        FATAL_ERRORS,
    }

    /**
     * @gir-type Flags
     */
    export namespace PipelineFlags {
        export const $gtype: GObject.GType<PipelineFlags>;
    }

    /**
     * Pipeline flags
     * @gir-type Flags
     */
    enum PipelineFlags {
        FIXED_CLOCK,
        LAST,
    }

    /**
     * @gir-type Flags
     */
    export namespace PluginDependencyFlags {
        export const $gtype: GObject.GType<PluginDependencyFlags>;
    }

    /**
     * Flags used in connection with `gst_plugin_add_dependency()`.
     * @gir-type Flags
     * @since 0.10.22
     */
    enum PluginDependencyFlags {
        NONE,
        RECURSE,
        PATHS_ARE_DEFAULT_ONLY,
        FILE_NAME_IS_SUFFIX,
    }

    /**
     * @gir-type Flags
     */
    export namespace PluginFlags {
        export const $gtype: GObject.GType<PluginFlags>;
    }

    /**
     * The plugin loading state
     * @gir-type Flags
     */
    enum PluginFlags {
        CACHED,
        BLACKLISTED,
    }

    /**
     * @gir-type Flags
     */
    export namespace SeekFlags {
        export const $gtype: GObject.GType<SeekFlags>;
    }

    /**
     * Flags to be used with `gst_element_seek()` or `gst_event_new_seek()`. All flags
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
     * @gir-type Flags
     */
    enum SeekFlags {
        NONE,
        FLUSH,
        ACCURATE,
        KEY_UNIT,
        SEGMENT,
        SKIP,
    }

    namespace Adapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The opaque {@link Gst.Adapter} data structure.
     * @gir-type Class
     */
    class Adapter extends GObject.Object {
        static $gtype: GObject.GType<Adapter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Adapter.SignalSignatures;

        // Fields

        object: GObject.Object;
        buflist: any[];
        size: number;
        skip: number;
        assembled_data: any;
        assembled_size: number;
        assembled_len: number;
        buflist_end: any[];

        // Constructors

        constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Adapter;

        // Signals

        /** @signal */
        connect<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Adapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        clear(): void;
        /**
         * @param buf
         */
        push(buf: Buffer): void;
        /**
         * @param size
         */
        peek(size: number): number[];
        /**
         * @param dest
         * @param offset
         * @param size
         */
        copy(dest: number[], offset: number, size: number): void;
        /**
         * @param flush
         */
        flush(flush: number): void;
        /**
         * @param nbytes
         */
        take(nbytes: number): number[];
        /**
         * @param nbytes
         */
        take_buffer(nbytes: number): Buffer;
        available(): number;
        available_fast(): number;
        prev_timestamp(): [ClockTime, number];
        /**
         * @param mask
         * @param pattern
         * @param offset
         * @param size
         */
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        /**
         * @param mask
         * @param pattern
         * @param offset
         * @param size
         */
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    }

    namespace BaseSink {
        // Signal signatures
        interface SignalSignatures extends Element.SignalSignatures {
            'notify::async': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::enable-last-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::last-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::max-lateness': (pspec: GObject.ParamSpec) => void;
            'notify::preroll-queue-len': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::render-delay': (pspec: GObject.ParamSpec) => void;
            'notify::sync': (pspec: GObject.ParamSpec) => void;
            'notify::ts-offset': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {
            async: boolean;
            blocksize: number;
            enable_last_buffer: boolean;
            enableLastBuffer: boolean;
            last_buffer: Buffer;
            lastBuffer: Buffer;
            max_lateness: number;
            maxLateness: number;
            preroll_queue_len: number;
            prerollQueueLen: number;
            qos: boolean;
            render_delay: number;
            renderDelay: number;
            sync: boolean;
            ts_offset: number;
            tsOffset: number;
        }
    }

    /**
     * The opaque {@link Gst.BaseSink} data structure.
     * @gir-type Class
     */
    abstract class BaseSink extends Element {
        static $gtype: GObject.GType<BaseSink>;

        // Properties

        get async(): boolean;
        set async(val: boolean);
        get blocksize(): number;
        set blocksize(val: number);
        get enable_last_buffer(): boolean;
        set enable_last_buffer(val: boolean);
        get enableLastBuffer(): boolean;
        set enableLastBuffer(val: boolean);
        /**
         * @read-only
         */
        get last_buffer(): Buffer;
        /**
         * @read-only
         */
        get lastBuffer(): Buffer;
        get max_lateness(): number;
        set max_lateness(val: number);
        get maxLateness(): number;
        set maxLateness(val: number);
        get preroll_queue_len(): number;
        set preroll_queue_len(val: number);
        get prerollQueueLen(): number;
        set prerollQueueLen(val: number);
        get qos(): boolean;
        set qos(val: boolean);
        get render_delay(): number;
        set render_delay(val: number);
        get renderDelay(): number;
        set renderDelay(val: number);
        get sync(): boolean;
        set sync(val: boolean);
        get ts_offset(): number;
        set ts_offset(val: number);
        get tsOffset(): number;
        set tsOffset(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseSink.SignalSignatures;

        // Fields

        element: Element;
        sinkpad: Pad;
        pad_mode: ActivateMode;
        offset: number;
        can_activate_pull: boolean;
        can_activate_push: boolean;
        preroll_queue: GLib.Queue;
        preroll_queue_max_len: number;
        preroll_queued: number;
        buffers_queued: number;
        events_queued: number;
        eos: boolean;
        eos_queued: boolean;
        need_preroll: boolean;
        have_preroll: boolean;
        playing_async: boolean;
        have_newsegment: boolean;
        clock_id: ClockID;
        end_time: ClockTime;
        flushing: boolean;

        // Constructors

        constructor(properties?: Partial<BaseSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseSink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_caps(): Caps;
        /**
         * @param caps
         * @virtual
         */
        vfunc_set_caps(caps: Caps): boolean;
        /**
         * @param offset
         * @param size
         * @param caps
         * @param buf
         * @virtual
         */
        vfunc_buffer_alloc(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
        /**
         * @param buffer
         * @param start
         * @param end
         * @virtual
         */
        vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void;
        /**
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * @virtual
         */
        vfunc_unlock(): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_event(event: Event): boolean;
        /**
         * @param buffer
         * @virtual
         */
        vfunc_preroll(buffer: Buffer): FlowReturn;
        /**
         * @param buffer
         * @virtual
         */
        vfunc_render(buffer: Buffer): FlowReturn;
        /**
         * @virtual
         */
        vfunc_async_play(): StateChangeReturn;
        /**
         * @param active
         * @virtual
         */
        vfunc_activate_pull(active: boolean): boolean;
        /**
         * @param caps
         * @virtual
         */
        vfunc_fixate(caps: Caps): void;
        /**
         * @virtual
         */
        vfunc_unlock_stop(): boolean;
        /**
         * @param buffer_list
         * @virtual
         */
        vfunc_render_list(buffer_list: BufferList): FlowReturn;

        // Methods

        /**
         * @param obj
         */
        do_preroll(obj: MiniObject): FlowReturn;
        wait_preroll(): FlowReturn;
        /**
         * @param sync
         */
        set_sync(sync: boolean): void;
        get_sync(): boolean;
        /**
         * @param max_lateness
         */
        set_max_lateness(max_lateness: number): void;
        get_max_lateness(): number;
        /**
         * @param enabled
         */
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        /**
         * @param enabled
         */
        set_async_enabled(enabled: boolean): void;
        is_async_enabled(): boolean;
        /**
         * @param offset
         */
        set_ts_offset(offset: ClockTimeDiff): void;
        get_ts_offset(): ClockTimeDiff;
        get_last_buffer(): Buffer;
        /**
         * @param enable
         */
        set_last_buffer_enabled(enable: boolean): void;
        is_last_buffer_enabled(): boolean;
        /**
         * @param min_latency
         * @param max_latency
         */
        query_latency(min_latency: ClockTime, max_latency: ClockTime): [boolean, boolean, boolean];
        get_latency(): ClockTime;
        /**
         * @param delay
         */
        set_render_delay(delay: ClockTime): void;
        get_render_delay(): ClockTime;
        /**
         * @param blocksize
         */
        set_blocksize(blocksize: number): void;
        get_blocksize(): number;
        /**
         * @param time
         * @param jitter
         */
        wait_clock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn;
        /**
         * @param time
         * @param jitter
         */
        wait_eos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn;
    }

    namespace BaseSrc {
        // Signal signatures
        interface SignalSignatures extends Element.SignalSignatures {
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {
            blocksize: number;
            do_timestamp: boolean;
            doTimestamp: boolean;
            num_buffers: number;
            numBuffers: number;
            typefind: boolean;
        }
    }

    /**
     * The opaque {@link Gst.BaseSrc} data structure.
     * @gir-type Class
     */
    abstract class BaseSrc extends Element {
        static $gtype: GObject.GType<BaseSrc>;

        // Properties

        get blocksize(): number;
        set blocksize(val: number);
        get do_timestamp(): boolean;
        set do_timestamp(val: boolean);
        get doTimestamp(): boolean;
        set doTimestamp(val: boolean);
        get num_buffers(): number;
        set num_buffers(val: number);
        get numBuffers(): number;
        set numBuffers(val: number);
        get typefind(): boolean;
        set typefind(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseSrc.SignalSignatures;

        // Fields

        element: Element;
        srcpad: Pad;
        live_running: boolean;
        can_activate_push: boolean;
        pad_mode: ActivateMode;
        seekable: boolean;
        random_access: boolean;
        clock_id: ClockID;
        end_time: ClockTime;
        need_newsegment: boolean;
        offset: number;
        size: number;
        num_buffers_left: number;

        // Constructors

        constructor(properties?: Partial<BaseSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_caps(): Caps;
        /**
         * @param caps
         * @virtual
         */
        vfunc_set_caps(caps: Caps): boolean;
        /**
         * @virtual
         */
        vfunc_negotiate(): boolean;
        /**
         * @virtual
         */
        vfunc_newsegment(): boolean;
        /**
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * @param buffer
         * @param start
         * @param end
         * @virtual
         */
        vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void;
        /**
         * @virtual
         */
        vfunc_get_size(): [boolean, number];
        /**
         * @virtual
         */
        vfunc_is_seekable(): boolean;
        /**
         * @virtual
         */
        vfunc_unlock(): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_event(event: Event): boolean;
        /**
         * @param offset
         * @param size
         * @param buf
         * @virtual
         */
        vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn;
        /**
         * @param segment
         * @virtual
         */
        vfunc_do_seek(segment: Segment): boolean;
        /**
         * @param query
         * @virtual
         */
        vfunc_query(query: Query): boolean;
        /**
         * @virtual
         */
        vfunc_check_get_range(): boolean;
        /**
         * @param caps
         * @virtual
         */
        vfunc_fixate(caps: Caps): void;
        /**
         * @virtual
         */
        vfunc_unlock_stop(): boolean;
        /**
         * @param seek
         * @param segment
         * @virtual
         */
        vfunc_prepare_seek_segment(seek: Event, segment: Segment): boolean;

        // Methods

        wait_playing(): FlowReturn;
        /**
         * @param live
         */
        set_live(live: boolean): void;
        is_live(): boolean;
        /**
         * @param format
         */
        set_format(format: Format | null): void;
        /**
         * @param min_latency
         * @param max_latency
         */
        query_latency(min_latency: ClockTime, max_latency: ClockTime): [boolean, boolean];
        /**
         * @param blocksize
         */
        set_blocksize(blocksize: number): void;
        get_blocksize(): number;
        /**
         * @param timestamp
         */
        set_do_timestamp(timestamp: boolean): void;
        get_do_timestamp(): boolean;
        /**
         * @param start
         * @param stop
         * @param position
         */
        new_seamless_segment(start: number, stop: number, position: number): boolean;
    }

    namespace BaseTransform {
        // Signal signatures
        interface SignalSignatures extends Element.SignalSignatures {
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {
            qos: boolean;
        }
    }

    /**
     * The opaque {@link Gst.BaseTransform} data structure.
     * @gir-type Class
     */
    abstract class BaseTransform extends Element {
        static $gtype: GObject.GType<BaseTransform>;

        // Properties

        get qos(): boolean;
        set qos(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseTransform.SignalSignatures;

        // Fields

        element: Element;
        sinkpad: Pad;
        srcpad: Pad;
        passthrough: boolean;
        always_in_place: boolean;
        cache_caps1_size: number;
        cache_caps2_size: number;
        have_same_caps: boolean;
        delay_configure: boolean;
        pending_configure: boolean;
        negotiated: boolean;
        have_newsegment: boolean;

        // Constructors

        constructor(properties?: Partial<BaseTransform.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseTransform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseTransform.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseTransform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseTransform.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseTransform.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseTransform.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param direction
         * @param caps
         * @virtual
         */
        vfunc_transform_caps(direction: PadDirection, caps: Caps): Caps;
        /**
         * @param direction
         * @param caps
         * @param othercaps
         * @virtual
         */
        vfunc_fixate_caps(direction: PadDirection, caps: Caps, othercaps: Caps): void;
        /**
         * @param direction
         * @param caps
         * @param size
         * @param othercaps
         * @virtual
         */
        vfunc_transform_size(direction: PadDirection, caps: Caps, size: number, othercaps: Caps): [boolean, number];
        /**
         * @param caps
         * @virtual
         */
        vfunc_get_unit_size(caps: Caps): [boolean, number];
        /**
         * @param incaps
         * @param outcaps
         * @virtual
         */
        vfunc_set_caps(incaps: Caps, outcaps: Caps): boolean;
        /**
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_event(event: Event): boolean;
        /**
         * @param inbuf
         * @param outbuf
         * @virtual
         */
        vfunc_transform(inbuf: Buffer, outbuf: Buffer): FlowReturn;
        /**
         * @param buf
         * @virtual
         */
        vfunc_transform_ip(buf: Buffer): FlowReturn;
        /**
         * @param input
         * @param size
         * @param caps
         * @param buf
         * @virtual
         */
        vfunc_prepare_output_buffer(input: Buffer, size: number, caps: Caps, buf: Buffer): FlowReturn;
        /**
         * @param event
         * @virtual
         */
        vfunc_src_event(event: Event): boolean;
        /**
         * @param buffer
         * @virtual
         */
        vfunc_before_transform(buffer: Buffer): void;
        /**
         * @param direction
         * @param caps
         * @virtual
         */
        vfunc_accept_caps(direction: PadDirection, caps: Caps): boolean;

        // Methods

        /**
         * @param passthrough
         */
        set_passthrough(passthrough: boolean): void;
        is_passthrough(): boolean;
        /**
         * @param in_place
         */
        set_in_place(in_place: boolean): void;
        is_in_place(): boolean;
        /**
         * @param proportion
         * @param diff
         * @param timestamp
         */
        update_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void;
        /**
         * @param enabled
         */
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        /**
         * @param gap_aware
         */
        set_gap_aware(gap_aware: boolean): void;
        /**
         * @param caps
         * @param size
         */
        suggest(caps: Caps, size: number): void;
        reconfigure(): void;
    }

    namespace Bin {
        // Signal signatures
        interface SignalSignatures extends Element.SignalSignatures {
            /**
             * @signal
             */
            'do-latency': () => boolean | void;
            /**
             * @signal
             */
            'element-added': (arg0: Element) => void;
            /**
             * @signal
             */
            'element-removed': (arg0: Element) => void;
            'notify::async-handling': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps, ChildProxy.ConstructorProps {
            async_handling: boolean;
            asyncHandling: boolean;
        }
    }

    /**
     * The GstBin base class. Subclasses can access these fields provided
     * the LOCK is taken.
     * @gir-type Class
     */
    class Bin extends Element implements ChildProxy {
        static $gtype: GObject.GType<Bin>;

        // Properties

        get async_handling(): boolean;
        set async_handling(val: boolean);
        get asyncHandling(): boolean;
        set asyncHandling(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bin.SignalSignatures;

        // Fields

        element: Element;
        numchildren: number;
        children: any[];
        children_cookie: number;
        child_bus: Bus;
        messages: any[];
        polling: boolean;
        state_dirty: boolean;
        clock_dirty: boolean;
        provided_clock: Clock;
        clock_provider: Element;

        // Constructors

        constructor(properties?: Partial<Bin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Bin;

        // Signals

        /** @signal */
        connect<K extends keyof Bin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Bin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Bin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param element
         * @virtual
         */
        vfunc_add_element(element: Element): boolean;
        /**
         * @param element
         * @virtual
         */
        vfunc_remove_element(element: Element): boolean;
        /**
         * @param message
         * @virtual
         */
        vfunc_handle_message(message: Message): void;

        // Methods

        /**
         * @param element
         */
        add(element: Element): boolean;
        /**
         * @param element
         */
        remove(element: Element): boolean;
        /**
         * @param name
         */
        get_by_name(name: string): Element;
        /**
         * @param name
         */
        get_by_name_recurse_up(name: string): Element;
        /**
         * @param iface
         */
        get_by_interface(iface: GObject.GType): Element;
        iterate_elements(): Iterator;
        iterate_sorted(): Iterator;
        iterate_recurse(): Iterator;
        iterate_sinks(): Iterator;
        iterate_sources(): Iterator;
        /**
         * @param iface
         */
        iterate_all_by_interface(iface: GObject.GType): Iterator;
        recalculate_latency(): boolean;
        /**
         * @param direction
         */
        find_unlinked_pad(direction: PadDirection | null): Pad;
        /**
         * @param direction
         */
        find_unconnected_pad(direction: PadDirection | null): Pad;
        /** @category Inherited from Gst.Object */
        get name(): string;
        set name(val: string);
        /**
         * @param name
         */
        get_child_by_name(name: string): Object;
        /**
         * @param index
         */
        get_child_by_index(index: number): Object;
        get_children_count(): number;
        /**
         * @param index
         * @virtual
         */
        vfunc_get_child_by_index(index: number): Object;
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
        set_parent(parent: Object): boolean;
        get_parent(): Object;
        unparent(): void;
        /**
         * @param ancestor
         */
        has_ancestor(ancestor: Object): boolean;
        /**
         * @param newobj
         */
        replace(newobj: Object): void;
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

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends MiniObject.SignalSignatures {}
    }

    /**
     * The structure of a {@link Gst.Buffer}. Use the associated macros to access the public
     * variables.
     * @gir-type Class
     */
    class Buffer extends MiniObject {
        static $gtype: GObject.GType<Buffer>;

        // Fields

        mini_object: MiniObject;
        data: any;
        size: number;
        timestamp: ClockTime;
        duration: ClockTime;
        offset: number;
        offset_end: number;
        malloc_data: any;
        free_func: GLib.FreeFunc;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        static new_and_alloc(size: number): Buffer;

        // Signals

        /** @signal */
        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param size
         */
        static try_new_and_alloc(size: number): Buffer;

        // Methods

        /**
         * @param src
         * @param flags
         */
        copy_metadata(src: Buffer, flags: BufferCopyFlags | null): void;
        is_metadata_writable(): boolean;
        make_metadata_writable(): Buffer;
        get_caps(): Caps;
        /**
         * @param caps
         */
        set_caps(caps: Caps): void;
        /**
         * @param offset
         * @param size
         */
        create_sub(offset: number, size: number): Buffer;
        /**
         * @param buf2
         */
        is_span_fast(buf2: Buffer): boolean;
        /**
         * @param offset
         * @param buf2
         * @param len
         */
        span(offset: number, buf2: Buffer, len: number): Buffer;
        /**
         * @param buf2
         */
        merge(buf2: Buffer): Buffer;
        /**
         * @param buf2
         */
        join(buf2: Buffer): Buffer;
        /**
         * @param src
         */
        stamp(src: Buffer): void;
    }

    namespace BufferList {
        // Signal signatures
        interface SignalSignatures extends MiniObject.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class BufferList extends MiniObject {
        static $gtype: GObject.GType<BufferList>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): BufferList;

        // Signals

        /** @signal */
        connect<K extends keyof BufferList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BufferList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BufferList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BufferList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BufferList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BufferList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        n_groups(): number;
        /**
         * @param func
         * @param user_data
         */
        foreach(func: BufferListFunc, user_data: any): void;
        /**
         * @param group
         * @param idx
         */
        get(group: number, idx: number): Buffer;
        iterate(): BufferListIterator;
    }

    namespace Bus {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            message: (arg0: Message) => void;
            /**
             * @signal
             */
            'sync-message': (arg0: Message) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The opaque {@link Gst.Bus} data structure.
     * @gir-type Class
     */
    class Bus extends Object {
        static $gtype: GObject.GType<Bus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bus.SignalSignatures;

        // Fields

        object: Object;
        queue: GLib.Queue;
        sync_handler: BusSyncHandler;
        sync_handler_data: any;
        signal_watch_id: number;
        num_signal_watchers: number;

        // Constructors

        constructor(properties?: Partial<Bus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Bus;

        // Signals

        /** @signal */
        connect<K extends keyof Bus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Bus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Bus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param message
         */
        post(message: Message): boolean;
        have_pending(): boolean;
        peek(): Message;
        pop(): Message;
        /**
         * @param types
         */
        pop_filtered(types: MessageType | null): Message;
        /**
         * @param timeout
         */
        timed_pop(timeout: ClockTime): Message;
        /**
         * @param timeout
         * @param types
         */
        timed_pop_filtered(timeout: ClockTime, types: MessageType | null): Message;
        /**
         * @param flushing
         */
        set_flushing(flushing: boolean): void;
        /**
         * @param func
         * @param data
         */
        set_sync_handler(func: BusSyncHandler, data: any): void;
        create_watch(): GLib.Source;
        /**
         * @param priority
         * @param func
         * @param user_data
         */
        add_watch_full(priority: number, func: BusFunc, user_data: any): number;
        /**
         * @param func
         * @param user_data
         */
        add_watch(func: BusFunc, user_data: any): number;
        /**
         * @param events
         * @param timeout
         */
        poll(events: MessageType | null, timeout: ClockTimeDiff): Message;
        /**
         * @param message
         * @param data
         */
        async_signal_func(message: Message, data: any): boolean;
        /**
         * @param message
         * @param data
         */
        sync_signal_handler(message: Message, data: any): BusSyncReply;
        add_signal_watch(): void;
        /**
         * @param priority
         */
        add_signal_watch_full(priority: number): void;
        remove_signal_watch(): void;
        enable_sync_message_emission(): void;
        disable_sync_message_emission(): void;
    }

    namespace Clock {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::stats': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::window-size': (pspec: GObject.ParamSpec) => void;
            'notify::window-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            stats: boolean;
            timeout: number;
            window_size: number;
            windowSize: number;
            window_threshold: number;
            windowThreshold: number;
        }
    }

    /**
     * {@link Gst.Clock} base structure. The values of this structure are
     * protected for subclasses, use the methods to use the {@link Gst.Clock}.
     * @gir-type Class
     */
    class Clock extends Object {
        static $gtype: GObject.GType<Clock>;

        // Properties

        get stats(): boolean;
        set stats(val: boolean);
        get timeout(): number;
        set timeout(val: number);
        get window_size(): number;
        set window_size(val: number);
        get windowSize(): number;
        set windowSize(val: number);
        get window_threshold(): number;
        set window_threshold(val: number);
        get windowThreshold(): number;
        set windowThreshold(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clock.SignalSignatures;

        // Fields

        object: Object;
        internal_calibration: ClockTime;
        external_calibration: ClockTime;
        rate_numerator: ClockTime;
        rate_denominator: ClockTime;
        last_time: ClockTime;
        entries: any[];
        resolution: ClockTime;
        master: Clock;
        filling: boolean;
        time_index: number;
        times: ClockTime;
        clockid: ClockID;

        // Constructors

        constructor(properties?: Partial<Clock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Clock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Clock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Clock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param id
         */
        static id_ref(id: ClockID): ClockID;
        /**
         * @param id
         */
        static id_unref(id: ClockID): void;
        /**
         * @param id1
         * @param id2
         */
        static id_compare_func(id1: any, id2: any): number;
        /**
         * @param id
         */
        static id_get_time(id: ClockID): ClockTime;
        /**
         * @param id
         * @param jitter
         */
        static id_wait(id: ClockID, jitter: ClockTimeDiff): ClockReturn;
        /**
         * @param id
         * @param func
         */
        static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn;
        /**
         * @param id
         * @param func
         */
        static id_wait_async_full(id: ClockID, func: ClockCallback): ClockReturn;
        /**
         * @param id
         */
        static id_unschedule(id: ClockID): void;

        // Virtual methods

        /**
         * @param old_resolution
         * @param new_resolution
         * @virtual
         */
        vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime;
        /**
         * @virtual
         */
        vfunc_get_resolution(): ClockTime;
        /**
         * @virtual
         */
        vfunc_get_internal_time(): ClockTime;
        /**
         * @param entry
         * @virtual
         */
        vfunc_wait(entry: ClockEntry): ClockReturn;
        /**
         * @param entry
         * @virtual
         */
        vfunc_wait_async(entry: ClockEntry): ClockReturn;
        /**
         * @param entry
         * @virtual
         */
        vfunc_unschedule(entry: ClockEntry): void;
        /**
         * @param entry
         * @param jitter
         * @virtual
         */
        vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn;

        // Methods

        /**
         * @param resolution
         */
        set_resolution(resolution: ClockTime): ClockTime;
        get_resolution(): ClockTime;
        get_time(): ClockTime;
        /**
         * @param internal
         * @param external
         * @param rate_num
         * @param rate_denom
         */
        set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        /**
         * @param internal
         * @param external
         * @param rate_num
         * @param rate_denom
         */
        get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        /**
         * @param master
         */
        set_master(master: Clock): boolean;
        get_master(): Clock;
        /**
         * @param slave
         * @param master
         */
        add_observation(slave: ClockTime, master: ClockTime): [boolean, number];
        get_internal_time(): ClockTime;
        /**
         * @param internal
         */
        adjust_unlocked(internal: ClockTime): ClockTime;
        /**
         * @param external
         */
        unadjust_unlocked(external: ClockTime): ClockTime;
        /**
         * @param time
         */
        new_single_shot_id(time: ClockTime): ClockID;
        /**
         * @param start_time
         * @param interval
         */
        new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID;
    }

    namespace CollectPads {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Collectpads object.
     * Note that `data` doesn't contain the complete {@link Gst.CollectData} list
     * at all times and should not be used for iterating them.
     * @gir-type Class
     */
    class CollectPads extends Object {
        static $gtype: GObject.GType<CollectPads>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CollectPads.SignalSignatures;

        // Fields

        object: Object;
        data: any[];
        cookie: number;
        func: CollectPadsFunction;
        user_data: any;
        numpads: number;
        queuedpads: number;
        eospads: number;
        started: boolean;

        // Constructors

        constructor(properties?: Partial<CollectPads.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CollectPads;

        // Signals

        /** @signal */
        connect<K extends keyof CollectPads.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectPads.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CollectPads.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectPads.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CollectPads.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CollectPads.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param func
         * @param user_data
         */
        set_function(func: CollectPadsFunction, user_data: any): void;
        /**
         * @param clipfunc
         * @param user_data
         */
        set_clip_function(clipfunc: CollectPadsClipFunction, user_data: any): void;
        /**
         * @param pad
         * @param size
         */
        add_pad(pad: Pad, size: number): CollectData;
        /**
         * @param pad
         * @param size
         * @param destroy_notify
         */
        add_pad_full(pad: Pad, size: number, destroy_notify: CollectDataDestroyNotify): CollectData;
        /**
         * @param pad
         */
        remove_pad(pad: Pad): boolean;
        /**
         * @param pad
         */
        is_active(pad: Pad): boolean;
        collect(): FlowReturn;
        /**
         * @param offset
         * @param length
         */
        collect_range(offset: number, length: number): FlowReturn;
        start(): void;
        stop(): void;
        /**
         * @param flushing
         */
        set_flushing(flushing: boolean): void;
        /**
         * @param data
         */
        peek(data: CollectData): Buffer;
        /**
         * @param data
         */
        pop(data: CollectData): Buffer;
        available(): number;
        /**
         * @param data
         * @param size
         */
        read(data: CollectData, size: number): [number, number];
        /**
         * @param data
         * @param size
         */
        read_buffer(data: CollectData, size: number): Buffer;
        /**
         * @param data
         * @param size
         */
        take_buffer(data: CollectData, size: number): Buffer;
        /**
         * @param data
         * @param size
         */
        flush(data: CollectData, size: number): number;
    }

    namespace DataQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            empty: () => void;
            /**
             * @signal
             */
            full: () => void;
            'notify::current-level-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-time': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            current_level_bytes: number;
            currentLevelBytes: number;
            current_level_time: number;
            currentLevelTime: number;
            current_level_visible: number;
            currentLevelVisible: number;
        }
    }

    /**
     * Opaque {@link Gst.DataQueue} structure.
     * @gir-type Class
     */
    class DataQueue extends GObject.Object {
        static $gtype: GObject.GType<DataQueue>;

        // Properties

        /**
         * @read-only
         */
        get current_level_bytes(): number;
        /**
         * @read-only
         */
        get currentLevelBytes(): number;
        /**
         * @read-only
         */
        get current_level_time(): number;
        /**
         * @read-only
         */
        get currentLevelTime(): number;
        /**
         * @read-only
         */
        get current_level_visible(): number;
        /**
         * @read-only
         */
        get currentLevelVisible(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataQueue.SignalSignatures;

        // Fields

        object: GObject.Object;
        queue: GLib.Queue;
        cur_level: DataQueueSize;
        checkfull: DataQueueCheckFullFunction;
        checkdata: any;
        flushing: boolean;
        fullcallback: DataQueueFullCallback;
        emptycallback: DataQueueEmptyCallback;

        // Constructors

        constructor(properties?: Partial<DataQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](checkfull: DataQueueCheckFullFunction): DataQueue;

        static new_full(
            checkfull: DataQueueCheckFullFunction,
            fullcallback: DataQueueFullCallback,
            emptycallback: DataQueueEmptyCallback,
        ): DataQueue;

        // Signals

        /** @signal */
        connect<K extends keyof DataQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param item
         */
        push(item: DataQueueItem): boolean;
        /**
         * @param item
         */
        pop(item: DataQueueItem): boolean;
        flush(): void;
        /**
         * @param flushing
         */
        set_flushing(flushing: boolean): void;
        /**
         * @param type
         */
        drop_head(type: GObject.GType): boolean;
        is_full(): boolean;
        is_empty(): boolean;
        /**
         * @param level
         */
        get_level(level: DataQueueSize): void;
        limits_changed(): void;
    }

    namespace Element {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'no-more-pads': () => void;
            /**
             * @signal
             */
            'pad-added': (arg0: Pad) => void;
            /**
             * @signal
             */
            'pad-removed': (arg0: Pad) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * GStreamer element abstract base class.
     * @gir-type Class
     */
    abstract class Element extends Object {
        static $gtype: GObject.GType<Element>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Element.SignalSignatures;

        // Fields

        object: Object;
        state_lock: never;
        state_cookie: number;
        current_state: State;
        next_state: State;
        pending_state: State;
        last_return: StateChangeReturn;
        bus: Bus;
        clock: Clock;
        base_time: ClockTimeDiff;
        numpads: number;
        pads: any[];
        numsrcpads: number;
        srcpads: any[];
        numsinkpads: number;
        sinkpads: any[];
        pads_cookie: number;

        // Constructors

        constructor(properties?: Partial<Element.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Element.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Element.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Element.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Element.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Element.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Element.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param plugin
         * @param name
         * @param rank
         * @param type
         */
        static register(plugin: Plugin, name: string, rank: number, type: GObject.GType): boolean;
        /**
         * @param type
         * @param uri
         * @param elementname
         */
        static make_from_uri(type: URIType, uri: string, elementname: string): Element;
        /**
         * @param state
         */
        static state_get_name(state: State): string;
        /**
         * @param state_ret
         */
        static state_change_return_get_name(state_ret: StateChangeReturn): string;
        /**
         * @param templ
         */
        static add_pad_template(templ: PadTemplate): void;
        /**
         * @param name
         */
        static get_pad_template(name: string): PadTemplate;
        /**
         * @param details
         */
        static set_details(details: ElementDetails): void;
        /**
         * @param longname
         * @param classification
         * @param description
         * @param author
         */
        static set_details_simple(longname: string, classification: string, description: string, author: string): void;

        // Virtual methods

        /**
         * @param templ
         * @param name
         * @virtual
         */
        vfunc_request_new_pad(templ: PadTemplate, name: string): Pad;
        /**
         * @param pad
         * @virtual
         */
        vfunc_release_pad(pad: Pad): void;
        /**
         * @param timeout
         * @virtual
         */
        vfunc_get_state(timeout: ClockTime): [StateChangeReturn, State, State];
        /**
         * @param state
         * @virtual
         */
        vfunc_set_state(state: State): StateChangeReturn;
        /**
         * @param transition
         * @virtual
         */
        vfunc_change_state(transition: StateChange): StateChangeReturn;
        /**
         * @param bus
         * @virtual
         */
        vfunc_set_bus(bus: Bus): void;
        /**
         * @virtual
         */
        vfunc_provide_clock(): Clock;
        /**
         * @param clock
         * @virtual
         */
        vfunc_set_clock(clock: Clock): boolean;
        /**
         * @virtual
         */
        vfunc_get_index(): Index;
        /**
         * @param index
         * @virtual
         */
        vfunc_set_index(index: Index): void;
        /**
         * @param event
         * @virtual
         */
        vfunc_send_event(event: Event): boolean;
        /**
         * @virtual
         */
        vfunc_get_query_types(): QueryType;
        /**
         * @param query
         * @virtual
         */
        vfunc_query(query: Query): boolean;

        // Methods

        requires_clock(): boolean;
        provides_clock(): boolean;
        provide_clock(): Clock;
        get_clock(): Clock;
        /**
         * @param clock
         */
        set_clock(clock: Clock): boolean;
        /**
         * @param time
         */
        set_base_time(time: ClockTime): void;
        get_base_time(): ClockTime;
        /**
         * @param time
         */
        set_start_time(time: ClockTime): void;
        get_start_time(): ClockTime;
        is_indexable(): boolean;
        /**
         * @param index
         */
        set_index(index: Index): void;
        get_index(): Index;
        /**
         * @param bus
         */
        set_bus(bus: Bus): void;
        get_bus(): Bus;
        /**
         * @param pad
         */
        add_pad(pad: Pad): boolean;
        /**
         * @param pad
         */
        remove_pad(pad: Pad): boolean;
        no_more_pads(): void;
        /**
         * @param name
         */
        get_pad(name: string): Pad;
        /**
         * @param name
         */
        get_static_pad(name: string): Pad;
        /**
         * @param name
         */
        get_request_pad(name: string): Pad;
        /**
         * @param pad
         */
        release_request_pad(pad: Pad): void;
        iterate_pads(): Iterator;
        iterate_src_pads(): Iterator;
        iterate_sink_pads(): Iterator;
        /**
         * @param event
         */
        send_event(event: Event): boolean;
        /**
         * @param rate
         * @param format
         * @param flags
         * @param cur_type
         * @param cur
         * @param stop_type
         * @param stop
         */
        seek(
            rate: number,
            format: Format | null,
            flags: SeekFlags | null,
            cur_type: SeekType | null,
            cur: number,
            stop_type: SeekType | null,
            stop: number,
        ): boolean;
        get_query_types(): QueryType;
        /**
         * @param query
         */
        query(query: Query): boolean;
        /**
         * @param message
         */
        post_message(message: Message): boolean;
        /**
         * @param type
         * @param domain
         * @param code
         * @param text
         * @param debug
         * @param file
         * @param _function
         * @param line
         */
        message_full(
            type: MessageType | null,
            domain: GLib.Quark,
            code: number,
            text: string,
            debug: string,
            file: string,
            _function: string,
            line: number,
        ): void;
        is_locked_state(): boolean;
        /**
         * @param locked_state
         */
        set_locked_state(locked_state: boolean): boolean;
        sync_state_with_parent(): boolean;
        /**
         * @param timeout
         */
        get_state(timeout: ClockTime): [StateChangeReturn, State, State];
        /**
         * @param state
         */
        set_state(state: State | null): StateChangeReturn;
        abort_state(): void;
        /**
         * @param transition
         */
        change_state(transition: StateChange | null): StateChangeReturn;
        /**
         * @param ret
         */
        continue_state(ret: StateChangeReturn | null): StateChangeReturn;
        lost_state(): void;
        /**
         * @param new_base_time
         */
        lost_state_full(new_base_time: boolean): void;
        get_factory(): ElementFactory;
        /**
         * @param iface_type
         */
        implements_interface(iface_type: GObject.GType): boolean;
        create_all_pads(): void;
        /**
         * @param pad
         * @param caps
         */
        get_compatible_pad(pad: Pad, caps: Caps): Pad;
        /**
         * @param compattempl
         */
        get_compatible_pad_template(compattempl: PadTemplate): PadTemplate;
        /**
         * @param dest
         */
        link(dest: Element): boolean;
        /**
         * @param dest
         * @param filter
         */
        link_filtered(dest: Element, filter: Caps): boolean;
        /**
         * @param dest
         */
        unlink(dest: Element): void;
        /**
         * @param srcpadname
         * @param dest
         * @param destpadname
         */
        link_pads(srcpadname: string, dest: Element, destpadname: string): boolean;
        /**
         * @param srcpadname
         * @param dest
         * @param destpadname
         * @param flags
         */
        link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck | null): boolean;
        /**
         * @param srcpadname
         * @param dest
         * @param destpadname
         */
        unlink_pads(srcpadname: string, dest: Element, destpadname: string): void;
        /**
         * @param srcpadname
         * @param dest
         * @param destpadname
         * @param filter
         */
        link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean;
        /**
         * @param format
         * @param seek_flags
         * @param seek_pos
         */
        seek_simple(format: Format | null, seek_flags: SeekFlags | null, seek_pos: number): boolean;
        /**
         * @param format (inout)
         */
        query_position(format: Format | null): [boolean, number];
        /**
         * @param format (inout)
         */
        query_duration(format: Format | null): [boolean, number];
        /**
         * @param src_format
         * @param src_val
         * @param dest_format
         */
        query_convert(src_format: Format | null, src_val: number, dest_format: Format | null): [boolean, number];
        /**
         * @param pad
         * @param list
         */
        found_tags_for_pad(pad: Pad, list: TagList): void;
        /**
         * @param list
         */
        found_tags(list: TagList): void;
    }

    namespace ElementFactory {
        // Signal signatures
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }

    /**
     * The opaque {@link Gst.ElementFactory} data structure.
     * @gir-type Class
     */
    class ElementFactory extends PluginFeature {
        static $gtype: GObject.GType<ElementFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ElementFactory.SignalSignatures;

        // Fields

        type: GObject.GType;
        details: ElementDetails;
        staticpadtemplates: any[];
        numpadtemplates: number;
        uri_type: number;
        uri_protocols: string;
        interfaces: any[];

        // Constructors

        constructor(properties?: Partial<ElementFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ElementFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ElementFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ElementFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ElementFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ElementFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ElementFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param name
         */
        static find(name: string): ElementFactory;
        /**
         * @param factoryname
         * @param name
         */
        static make(factoryname: string, name: string): Element;

        // Methods

        get_element_type(): GObject.GType;
        get_longname(): string;
        get_klass(): string;
        get_description(): string;
        get_author(): string;
        get_num_pad_templates(): number;
        get_uri_type(): number;
        get_uri_protocols(): string[];
        /**
         * @param interfacename
         */
        has_interface(interfacename: string): boolean;
        /**
         * @param name
         */
        create(name: string): Element;
        /**
         * @param caps
         */
        can_src_caps(caps: Caps): boolean;
        /**
         * @param caps
         */
        can_sink_caps(caps: Caps): boolean;
    }

    namespace Event {
        // Signal signatures
        interface SignalSignatures extends MiniObject.SignalSignatures {}
    }

    /**
     * A {@link Gst.Event}.
     * @gir-type Class
     */
    class Event extends MiniObject {
        static $gtype: GObject.GType<Event>;

        // Fields

        mini_object: MiniObject;
        type: EventType;
        timestamp: number;
        src: Object;

        // Constructors

        _init(...args: any[]): void;

        static new_custom(type: EventType, structure: Structure): Event;

        static new_flush_start(): Event;

        static new_flush_stop(): Event;

        static new_eos(): Event;

        static new_new_segment(
            update: boolean,
            rate: number,
            format: Format,
            start: number,
            stop: number,
            position: number,
        ): Event;

        static new_new_segment_full(
            update: boolean,
            rate: number,
            applied_rate: number,
            format: Format,
            start: number,
            stop: number,
            position: number,
        ): Event;

        static new_tag(taglist: TagList): Event;

        static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event;

        static new_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event;

        static new_seek(
            rate: number,
            format: Format,
            flags: SeekFlags,
            start_type: SeekType,
            start: number,
            stop_type: SeekType,
            stop: number,
        ): Event;

        static new_navigation(structure: Structure): Event;

        static new_latency(latency: ClockTime): Event;

        static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event;

        static new_sink_message(msg: Message): Event;

        // Signals

        /** @signal */
        connect<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Event.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param type
         */
        static type_get_name(type: EventType): string;
        /**
         * @param type
         */
        static type_to_quark(type: EventType): GLib.Quark;
        /**
         * @param type
         */
        static type_get_flags(type: EventType): EventTypeFlags;

        // Methods

        get_structure(): Structure;
        /**
         * @param name
         */
        has_name(name: string): boolean;
        get_seqnum(): number;
        /**
         * @param seqnum
         */
        set_seqnum(seqnum: number): void;
        /**
         * @param format
         */
        parse_new_segment(format: Format | null): [boolean, number, number, number, number];
        /**
         * @param format
         */
        parse_new_segment_full(format: Format | null): [boolean, number, number, number, number, number];
        /**
         * @param taglist
         */
        parse_tag(taglist: TagList): void;
        /**
         * @param format
         */
        parse_buffer_size(format: Format | null): [number, number, boolean];
        /**
         * @param diff
         * @param timestamp
         */
        parse_qos(diff: ClockTimeDiff, timestamp: ClockTime): number;
        /**
         * @param format
         * @param flags
         * @param start_type
         * @param stop_type
         */
        parse_seek(
            format: Format | null,
            flags: SeekFlags | null,
            start_type: SeekType | null,
            stop_type: SeekType | null,
        ): [number, number, number];
        /**
         * @param latency
         */
        parse_latency(latency: ClockTime): void;
        /**
         * @param format
         */
        parse_step(format: Format | null): [number, number, boolean, boolean];
        /**
         * @param msg
         */
        parse_sink_message(msg: Message): void;
    }

    namespace GParamSpecMiniObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GParamSpecMiniObject extends GObject.Object {
        static $gtype: GObject.GType<GParamSpecMiniObject>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GParamSpecMiniObject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GParamSpecMiniObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GParamSpecMiniObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GParamSpecMiniObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GParamSpecMiniObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GParamSpecMiniObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GParamSpecMiniObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GParamSpecMiniObject.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GhostPad {
        // Signal signatures
        interface SignalSignatures extends ProxyPad.SignalSignatures {
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ProxyPad.ConstructorProps {}
    }

    /**
     * Opaque {@link Gst.GhostPad} structure.
     * @gir-type Class
     */
    class GhostPad extends ProxyPad {
        static $gtype: GObject.GType<GhostPad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GhostPad.SignalSignatures;

        // Fields

        pad: ProxyPad;

        // Constructors

        constructor(properties?: Partial<GhostPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, target: Pad): GhostPad;
        // Conflicted with Gst.Pad.new

        static ['new'](...args: never[]): any;

        static new_no_target(name: string, dir: PadDirection): GhostPad;

        static new_from_template(name: string, target: Pad, templ: PadTemplate): GhostPad;
        // Conflicted with Gst.Pad.new_from_template

        static new_from_template(...args: never[]): any;

        static new_no_target_from_template(name: string, templ: PadTemplate): GhostPad;

        // Signals

        /** @signal */
        connect<K extends keyof GhostPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GhostPad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GhostPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GhostPad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GhostPad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GhostPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_target(): Pad;
        /**
         * @param newtarget
         */
        set_target(newtarget: Pad): boolean;
        construct(): boolean;
    }

    namespace Index {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'entry-added': (arg0: IndexEntry) => void;
            'notify::resolver': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            resolver: IndexResolver;
        }
    }

    /**
     * Opaque {@link Gst.Index} structure.
     * @gir-type Class
     */
    class Index extends Object {
        static $gtype: GObject.GType<Index>;

        // Properties

        get resolver(): IndexResolver;
        set resolver(val: IndexResolver);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Index.SignalSignatures;

        // Fields

        object: Object;
        groups: any[];
        maxgroup: number;
        method: IndexResolverMethod;
        resolver_user_data: any;
        filter: IndexFilter;
        filter_user_data: any;
        filter_user_data_destroy: GLib.DestroyNotify;
        last_id: number;
        resolver_user_data_destroy: GLib.DestroyNotify;

        // Constructors

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Index;

        // Signals

        /** @signal */
        connect<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Index.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Index.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param writer_string
         * @virtual
         */
        vfunc_get_writer_id(writer_string: string): [boolean, number];
        /**
         * @param id
         * @virtual
         */
        vfunc_commit(id: number): void;
        /**
         * @param entry
         * @virtual
         */
        vfunc_add_entry(entry: IndexEntry): void;
        /**
         * @param id
         * @param method
         * @param flags
         * @param format
         * @param value
         * @param func
         * @param user_data
         * @virtual
         */
        vfunc_get_assoc_entry(
            id: number,
            method: IndexLookupMethod,
            flags: AssocFlags,
            format: Format,
            value: number,
            func: GLib.CompareDataFunc,
            user_data: any,
        ): IndexEntry;

        // Methods

        /**
         * @param id
         */
        commit(id: number): void;
        get_group(): number;
        new_group(): number;
        /**
         * @param groupnum
         */
        set_group(groupnum: number): boolean;
        /**
         * @param certainty
         */
        set_certainty(certainty: IndexCertainty | null): void;
        get_certainty(): IndexCertainty;
        /**
         * @param filter
         * @param user_data
         */
        set_filter(filter: IndexFilter, user_data: any): void;
        /**
         * @param filter
         * @param user_data
         */
        set_filter_full(filter: IndexFilter, user_data: any): void;
        /**
         * @param resolver
         * @param user_data
         */
        set_resolver(resolver: IndexResolver, user_data: any): void;
        /**
         * @param resolver
         * @param user_data
         */
        set_resolver_full(resolver: IndexResolver, user_data: any): void;
        /**
         * @param writer
         */
        get_writer_id(writer: Object): [boolean, number];
        /**
         * @param id
         * @param format
         */
        add_format(id: number, format: Format | null): IndexEntry;
        /**
         * @param id
         * @param flags
         * @param n
         * @param list
         */
        add_associationv(id: number, flags: AssocFlags | null, n: number, list: IndexAssociation): IndexEntry;
        /**
         * @param id
         * @param key
         * @param type
         * @param object
         */
        add_object(id: number, key: string, type: GObject.GType, object: any): IndexEntry;
        /**
         * @param id
         * @param description
         */
        add_id(id: number, description: string): IndexEntry;
        /**
         * @param id
         * @param method
         * @param flags
         * @param format
         * @param value
         */
        get_assoc_entry(
            id: number,
            method: IndexLookupMethod | null,
            flags: AssocFlags | null,
            format: Format | null,
            value: number,
        ): IndexEntry;
        /**
         * @param id
         * @param method
         * @param flags
         * @param format
         * @param value
         * @param func
         * @param user_data
         */
        get_assoc_entry_full(
            id: number,
            method: IndexLookupMethod | null,
            flags: AssocFlags | null,
            format: Format | null,
            value: number,
            func: GLib.CompareDataFunc,
            user_data: any,
        ): IndexEntry;
    }

    namespace IndexFactory {
        // Signal signatures
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }

    /**
     * The GstIndexFactory object
     * @gir-type Class
     */
    class IndexFactory extends PluginFeature {
        static $gtype: GObject.GType<IndexFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IndexFactory.SignalSignatures;

        // Fields

        feature: PluginFeature;
        longdesc: string;
        type: GObject.GType;

        // Constructors

        constructor(properties?: Partial<IndexFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, longdesc: string, type: GObject.GType): IndexFactory;

        // Signals

        /** @signal */
        connect<K extends keyof IndexFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IndexFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IndexFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IndexFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IndexFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IndexFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param name
         */
        static find(name: string): IndexFactory;
        /**
         * @param name
         */
        static make(name: string): Index;

        // Methods

        destroy(): void;
        create(): Index;
    }

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends MiniObject.SignalSignatures {}
    }

    /**
     * A {@link Gst.Message}.
     * @gir-type Class
     */
    class Message extends MiniObject {
        static $gtype: GObject.GType<Message>;

        // Fields

        mini_object: MiniObject;
        type: MessageType;
        timestamp: number;
        src: Object;

        // Constructors

        _init(...args: any[]): void;

        static new_eos(src: Object): Message;

        static new_error(src: Object, error: GLib.Error, debug: string): Message;

        static new_warning(src: Object, error: GLib.Error, debug: string): Message;

        static new_info(src: Object, error: GLib.Error, debug: string): Message;

        static new_tag(src: Object, tag_list: TagList): Message;

        static new_tag_full(src: Object, pad: Pad, tag_list: TagList): Message;

        static new_buffering(src: Object, percent: number): Message;

        static new_state_changed(src: Object, oldstate: State, newstate: State, pending: State): Message;

        static new_state_dirty(src: Object): Message;

        static new_step_done(
            src: Object,
            format: Format,
            amount: number,
            rate: number,
            flush: boolean,
            intermediate: boolean,
            duration: number,
            eos: boolean,
        ): Message;

        static new_clock_provide(src: Object, clock: Clock, ready: boolean): Message;

        static new_clock_lost(src: Object, clock: Clock): Message;

        static new_new_clock(src: Object, clock: Clock): Message;

        static new_application(src: Object, structure: Structure): Message;

        static new_element(src: Object, structure: Structure): Message;

        static new_segment_start(src: Object, format: Format, position: number): Message;

        static new_segment_done(src: Object, format: Format, position: number): Message;

        static new_duration(src: Object, format: Format, duration: number): Message;

        static new_latency(src: Object): Message;

        static new_async_start(src: Object, new_base_time: boolean): Message;

        static new_async_done(src: Object): Message;

        static new_structure_change(src: Object, type: StructureChangeType, owner: Element, busy: boolean): Message;

        static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message;

        static new_request_state(src: Object, state: State): Message;

        static new_step_start(
            src: Object,
            active: boolean,
            format: Format,
            amount: number,
            rate: number,
            flush: boolean,
            intermediate: boolean,
        ): Message;

        static new_qos(
            src: Object,
            live: boolean,
            running_time: number,
            stream_time: number,
            timestamp: number,
            duration: number,
        ): Message;

        static new_custom(type: MessageType, src: Object, structure: Structure): Message;

        // Signals

        /** @signal */
        connect<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Message.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param type
         */
        static type_get_name(type: MessageType): string;
        /**
         * @param type
         */
        static type_to_quark(type: MessageType): GLib.Quark;

        // Methods

        get_seqnum(): number;
        /**
         * @param seqnum
         */
        set_seqnum(seqnum: number): void;
        /**
         * @param gerror
         * @param debug
         */
        parse_error(gerror: GLib.Error, debug: string[]): void;
        /**
         * @param gerror
         * @param debug
         */
        parse_warning(gerror: GLib.Error, debug: string[]): void;
        /**
         * @param gerror
         * @param debug
         */
        parse_info(gerror: GLib.Error, debug: string[]): void;
        /**
         * @param tag_list
         */
        parse_tag(tag_list: TagList): void;
        /**
         * @param pad
         * @param tag_list
         */
        parse_tag_full(pad: Pad, tag_list: TagList): void;
        parse_buffering(): number;
        /**
         * @param mode
         * @param avg_in
         * @param avg_out
         * @param buffering_left
         */
        set_buffering_stats(mode: BufferingMode | null, avg_in: number, avg_out: number, buffering_left: number): void;
        /**
         * @param mode
         */
        parse_buffering_stats(mode: BufferingMode | null): [number, number, number];
        /**
         * @param oldstate
         * @param newstate
         * @param pending
         */
        parse_state_changed(oldstate: State | null, newstate: State | null, pending: State | null): void;
        /**
         * @param format
         */
        parse_step_done(format: Format | null): [number, number, boolean, boolean, number, boolean];
        /**
         * @param clock
         */
        parse_clock_provide(clock: Clock): boolean;
        /**
         * @param clock
         */
        parse_clock_lost(clock: Clock): void;
        /**
         * @param clock
         */
        parse_new_clock(clock: Clock): void;
        /**
         * @param format
         */
        parse_segment_start(format: Format | null): number;
        /**
         * @param format
         */
        parse_segment_done(format: Format | null): number;
        /**
         * @param format
         */
        parse_duration(format: Format | null): number;
        parse_async_start(): boolean;
        /**
         * @param type
         * @param owner
         */
        parse_structure_change(type: StructureChangeType | null, owner: Element): boolean;
        /**
         * @param type
         * @param owner
         */
        parse_stream_status(type: StreamStatusType | null, owner: Element): void;
        /**
         * @param object
         */
        set_stream_status_object(object: GObject.Value | any): void;
        get_stream_status_object(): unknown;
        /**
         * @param state
         */
        parse_request_state(state: State | null): void;
        /**
         * @param format
         */
        parse_step_start(format: Format | null): [boolean, number, number, boolean, boolean];
        /**
         * @param jitter
         * @param proportion
         * @param quality
         */
        set_qos_values(jitter: number, proportion: number, quality: number): void;
        /**
         * @param format
         * @param processed
         * @param dropped
         */
        set_qos_stats(format: Format | null, processed: number, dropped: number): void;
        parse_qos(): [boolean, number, number, number, number];
        parse_qos_values(): [number, number, number];
        /**
         * @param format
         */
        parse_qos_stats(format: Format | null): [number, number];
        get_structure(): Structure;
    }

    namespace MiniObject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * Base class for refcounted lightweight objects.
     * @gir-type Class
     */
    abstract class MiniObject {
        static $gtype: GObject.GType<MiniObject>;

        // Fields

        refcount: number;
        flags: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](type: GObject.GType): MiniObject;

        // Signals

        /** @signal */
        connect<K extends keyof MiniObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MiniObject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MiniObject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MiniObject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MiniObject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MiniObject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        copy(): MiniObject;
        is_writable(): boolean;
        make_writable(): MiniObject;
        ref(): MiniObject;
        unref(): void;
        /**
         * @param newdata
         */
        replace(newdata: MiniObject): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            'deep-notify': (arg0: Object, arg1: GObject.ParamSpec) => void;
            /**
             * @signal
             */
            'object-saved': (arg0: any) => void;
            /**
             * @signal
             */
            'parent-set': (arg0: Object) => void;
            /**
             * @signal
             */
            'parent-unset': (arg0: Object) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * GStreamer base object class.
     * @gir-type Class
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Fields

        object: GObject.Object;
        refcount: number;
        name_prefix: string;
        flags: number;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param object
         * @param orig
         * @param pspec
         * @param excluded_props
         */
        static default_deep_notify(
            object: GObject.Object,
            orig: Object,
            pspec: GObject.ParamSpec,
            excluded_props: string[],
        ): void;
        /**
         * @param object
         */
        static ref(object: any): any;
        /**
         * @param object
         */
        static unref(object: any): void;
        /**
         * @param object
         */
        static ref_sink(object: any): void;
        /**
         * @param object
         */
        static sink(object: any): void;

        // Virtual methods

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

        // Methods

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
        set_parent(parent: Object): boolean;
        get_parent(): Object;
        unparent(): void;
        /**
         * @param ancestor
         */
        has_ancestor(ancestor: Object): boolean;
        /**
         * @param newobj
         */
        replace(newobj: Object): void;
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
    }

    namespace Pad {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'have-data': (arg0: MiniObject) => boolean | void;
            /**
             * @signal
             */
            linked: (arg0: Pad) => void;
            /**
             * @signal
             */
            'request-link': () => void;
            /**
             * @signal
             */
            unlinked: (arg0: Pad) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps;
            direction: PadDirection;
            template: PadTemplate;
        }
    }

    /**
     * The {@link Gst.Pad} structure. Use the functions to update the variables.
     * @gir-type Class
     */
    class Pad extends Object {
        static $gtype: GObject.GType<Pad>;

        // Properties

        /**
         * @read-only
         */
        get caps(): Caps;
        /**
         * @construct-only
         */
        get direction(): PadDirection;
        get template(): PadTemplate;
        set template(val: PadTemplate);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pad.SignalSignatures;

        // Fields

        object: Object;
        element_private: any;
        padtemplate: PadTemplate;
        stream_rec_lock: never;
        task: Task;
        block_callback: PadBlockCallback;
        block_data: any;
        getcapsfunc: PadGetCapsFunction;
        setcapsfunc: PadSetCapsFunction;
        acceptcapsfunc: PadAcceptCapsFunction;
        fixatecapsfunc: PadFixateCapsFunction;
        activatefunc: PadActivateFunction;
        activatepushfunc: PadActivateModeFunction;
        activatepullfunc: PadActivateModeFunction;
        linkfunc: PadLinkFunction;
        unlinkfunc: PadUnlinkFunction;
        peer: Pad;
        sched_private: any;
        chainfunc: PadChainFunction;
        checkgetrangefunc: PadCheckGetRangeFunction;
        getrangefunc: PadGetRangeFunction;
        eventfunc: PadEventFunction;
        mode: ActivateMode;
        querytypefunc: PadQueryTypeFunction;
        queryfunc: PadQueryFunction;
        intlinkfunc: PadIntLinkFunction;
        bufferallocfunc: PadBufferAllocFunction;
        do_buffer_signals: number;
        do_event_signals: number;
        iterintlinkfunc: PadIterIntLinkFunction;
        block_destroy_data: GLib.DestroyNotify;

        // Constructors

        constructor(properties?: Partial<Pad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, direction: PadDirection): Pad;

        static new_from_template(templ: PadTemplate, name: string): Pad;

        static new_from_static_template(templ: StaticPadTemplate, name: string): Pad;

        // Signals

        /** @signal */
        connect<K extends keyof Pad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Pad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Pad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param self
         * @param parent
         */
        static load_and_link(self: libxml2.NodePtr, parent: Object): void;

        // Methods

        get_direction(): PadDirection;
        /**
         * @param active
         */
        set_active(active: boolean): boolean;
        is_active(): boolean;
        /**
         * @param active
         */
        activate_pull(active: boolean): boolean;
        /**
         * @param active
         */
        activate_push(active: boolean): boolean;
        /**
         * @param blocked
         */
        set_blocked(blocked: boolean): boolean;
        /**
         * @param blocked
         * @param callback
         * @param user_data
         */
        set_blocked_async(blocked: boolean, callback: PadBlockCallback, user_data: any): boolean;
        /**
         * @param blocked
         * @param callback
         * @param user_data
         */
        set_blocked_async_full(blocked: boolean, callback: PadBlockCallback, user_data: any): boolean;
        is_blocked(): boolean;
        is_blocking(): boolean;
        /**
         * @param priv
         */
        set_element_private(priv: any): void;
        get_element_private(): any;
        get_pad_template(): PadTemplate;
        /**
         * @param bufalloc
         */
        set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void;
        /**
         * @param offset
         * @param size
         * @param caps
         * @param buf
         */
        alloc_buffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
        /**
         * @param offset
         * @param size
         * @param caps
         * @param buf
         */
        alloc_buffer_and_set_caps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
        /**
         * @param activate
         */
        set_activate_function(activate: PadActivateFunction): void;
        /**
         * @param activatepull
         */
        set_activatepull_function(activatepull: PadActivateModeFunction): void;
        /**
         * @param activatepush
         */
        set_activatepush_function(activatepush: PadActivateModeFunction): void;
        /**
         * @param chain
         */
        set_chain_function(chain: PadChainFunction): void;
        /**
         * @param chainlist
         */
        set_chain_list_function(chainlist: PadChainListFunction): void;
        /**
         * @param get
         */
        set_getrange_function(get: PadGetRangeFunction): void;
        /**
         * @param check
         */
        set_checkgetrange_function(check: PadCheckGetRangeFunction): void;
        /**
         * @param event
         */
        set_event_function(event: PadEventFunction): void;
        /**
         * @param link
         */
        set_link_function(link: PadLinkFunction): void;
        /**
         * @param unlink
         */
        set_unlink_function(unlink: PadUnlinkFunction): void;
        /**
         * @param sinkpad
         */
        can_link(sinkpad: Pad): boolean;
        /**
         * @param sinkpad
         */
        link(sinkpad: Pad): PadLinkReturn;
        /**
         * @param sinkpad
         * @param flags
         */
        link_full(sinkpad: Pad, flags: PadLinkCheck | null): PadLinkReturn;
        /**
         * @param sinkpad
         */
        unlink(sinkpad: Pad): boolean;
        is_linked(): boolean;
        get_peer(): Pad;
        /**
         * @param getcaps
         */
        set_getcaps_function(getcaps: PadGetCapsFunction): void;
        /**
         * @param acceptcaps
         */
        set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void;
        /**
         * @param fixatecaps
         */
        set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void;
        /**
         * @param setcaps
         */
        set_setcaps_function(setcaps: PadSetCapsFunction): void;
        get_pad_template_caps(): Caps;
        get_caps_reffed(): Caps;
        get_caps(): Caps;
        /**
         * @param caps
         */
        fixate_caps(caps: Caps): void;
        /**
         * @param caps
         */
        accept_caps(caps: Caps): boolean;
        /**
         * @param caps
         */
        set_caps(caps: Caps): boolean;
        peer_get_caps_reffed(): Caps;
        peer_get_caps(): Caps;
        /**
         * @param caps
         */
        peer_accept_caps(caps: Caps): boolean;
        get_allowed_caps(): Caps;
        get_negotiated_caps(): Caps;
        /**
         * @param buffer
         */
        push(buffer: Buffer): FlowReturn;
        /**
         * @param list
         */
        push_list(list: BufferList): FlowReturn;
        check_pull_range(): boolean;
        /**
         * @param offset
         * @param size
         * @param buffer
         */
        pull_range(offset: number, size: number, buffer: Buffer): FlowReturn;
        /**
         * @param event
         */
        push_event(event: Event): boolean;
        /**
         * @param event
         */
        event_default(event: Event): boolean;
        /**
         * @param buffer
         */
        chain(buffer: Buffer): FlowReturn;
        /**
         * @param list
         */
        chain_list(list: BufferList): FlowReturn;
        /**
         * @param offset
         * @param size
         * @param buffer
         */
        get_range(offset: number, size: number, buffer: Buffer): FlowReturn;
        /**
         * @param event
         */
        send_event(event: Event): boolean;
        /**
         * @param func
         * @param data
         */
        start_task(func: TaskFunction, data: any): boolean;
        pause_task(): boolean;
        stop_task(): boolean;
        /**
         * @param intlink
         */
        set_internal_link_function(intlink: PadIntLinkFunction): void;
        /**
         * @param iterintlink
         */
        set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void;
        iterate_internal_links(): Iterator;
        iterate_internal_links_default(): Iterator;
        /**
         * @param type_func
         */
        set_query_type_function(type_func: PadQueryTypeFunction): void;
        get_query_types(): QueryType;
        get_query_types_default(): QueryType;
        /**
         * @param query
         */
        query(query: Query): boolean;
        /**
         * @param query
         */
        peer_query(query: Query): boolean;
        /**
         * @param query
         */
        set_query_function(query: PadQueryFunction): void;
        /**
         * @param query
         */
        query_default(query: Query): boolean;
        /**
         * @param dispatch
         * @param data
         */
        dispatcher(dispatch: PadDispatcherFunction, data: any): boolean;
        use_fixed_caps(): void;
        get_fixed_caps_func(): Caps;
        proxy_getcaps(): Caps;
        /**
         * @param caps
         */
        proxy_setcaps(caps: Caps): boolean;
        get_parent_element(): Element;
        /**
         * @param format
         */
        query_position(format: Format | null): [boolean, number];
        /**
         * @param format
         */
        query_duration(format: Format | null): [boolean, number];
        /**
         * @param src_format
         * @param src_val
         * @param dest_format
         */
        query_convert(src_format: Format | null, src_val: number, dest_format: Format | null): [boolean, number];
        /**
         * @param format
         */
        query_peer_position(format: Format | null): [boolean, number];
        /**
         * @param format
         */
        query_peer_duration(format: Format | null): [boolean, number];
        /**
         * @param src_format
         * @param src_val
         * @param dest_format
         */
        query_peer_convert(src_format: Format | null, src_val: number, dest_format: Format | null): [boolean, number];
        /**
         * @param handler
         * @param data
         */
        add_data_probe(handler: GObject.Callback, data: any): number;
        /**
         * @param handler
         * @param data
         */
        add_data_probe_full(handler: GObject.Callback, data: any): number;
        /**
         * @param handler_id
         */
        remove_data_probe(handler_id: number): void;
        /**
         * @param handler
         * @param data
         */
        add_event_probe(handler: GObject.Callback, data: any): number;
        /**
         * @param handler
         * @param data
         */
        add_event_probe_full(handler: GObject.Callback, data: any): number;
        /**
         * @param handler_id
         */
        remove_event_probe(handler_id: number): void;
        /**
         * @param handler
         * @param data
         */
        add_buffer_probe(handler: GObject.Callback, data: any): number;
        /**
         * @param handler
         * @param data
         */
        add_buffer_probe_full(handler: GObject.Callback, data: any): number;
        /**
         * @param handler_id
         */
        remove_buffer_probe(handler_id: number): void;
    }

    namespace PadTemplate {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'pad-created': (arg0: Pad) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::name-template': (pspec: GObject.ParamSpec) => void;
            'notify::presence': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps;
            direction: PadDirection;
            name_template: string;
            nameTemplate: string;
            presence: PadPresence;
        }
    }

    /**
     * The padtemplate object.
     * @gir-type Class
     */
    class PadTemplate extends Object {
        static $gtype: GObject.GType<PadTemplate>;

        // Properties

        /**
         * @construct-only
         */
        get caps(): Caps;
        /**
         * @construct-only
         */
        get direction(): PadDirection;
        /**
         * @construct-only
         */
        get name_template(): string;
        /**
         * @construct-only
         */
        get nameTemplate(): string;
        /**
         * @construct-only
         */
        get presence(): PadPresence;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PadTemplate.SignalSignatures;

        // Fields

        object: Object;

        // Constructors

        constructor(properties?: Partial<PadTemplate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate;

        // Signals

        /** @signal */
        connect<K extends keyof PadTemplate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PadTemplate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PadTemplate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PadTemplate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PadTemplate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PadTemplate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_caps(): Caps;
        /**
         * @param pad
         */
        pad_created(pad: Pad): void;
    }

    namespace ParamFraction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ParamFraction extends GObject.Object {
        static $gtype: GObject.GType<ParamFraction>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ParamFraction.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ParamFraction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ParamFraction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ParamFraction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ParamFraction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ParamFraction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ParamFraction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ParamFraction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Pipeline {
        // Signal signatures
        interface SignalSignatures extends Bin.SignalSignatures {
            'notify::auto-flush-bus': (pspec: GObject.ParamSpec) => void;
            'notify::delay': (pspec: GObject.ParamSpec) => void;
            'notify::async-handling': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Bin.ConstructorProps, ChildProxy.ConstructorProps {
            auto_flush_bus: boolean;
            autoFlushBus: boolean;
            delay: number;
        }
    }

    /**
     * The {@link Gst.Pipeline} structure.
     * @gir-type Class
     */
    class Pipeline extends Bin implements ChildProxy {
        static $gtype: GObject.GType<Pipeline>;

        // Properties

        get auto_flush_bus(): boolean;
        set auto_flush_bus(val: boolean);
        get autoFlushBus(): boolean;
        set autoFlushBus(val: boolean);
        get delay(): number;
        set delay(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pipeline.SignalSignatures;

        // Fields

        bin: Bin;
        fixed_clock: Clock;
        stream_time: ClockTime;

        // Constructors

        constructor(properties?: Partial<Pipeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Pipeline;

        // Signals

        /** @signal */
        connect<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pipeline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pipeline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pipeline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bus(): Bus;
        /**
         * @param time
         */
        set_new_stream_time(time: ClockTime): void;
        get_last_stream_time(): ClockTime;
        /**
         * @param clock
         */
        use_clock(clock: Clock): void;
        /**
         * @param clock
         */
        set_clock(clock: Clock): boolean;
        get_clock(): Clock;
        auto_clock(): void;
        /**
         * @param delay
         */
        set_delay(delay: ClockTime): void;
        get_delay(): ClockTime;
        /**
         * @param auto_flush
         */
        set_auto_flush_bus(auto_flush: boolean): void;
        get_auto_flush_bus(): boolean;
        /** @category Inherited from Gst.Object */
        get name(): string;
        set name(val: string);
        /**
         * @param name
         */
        get_child_by_name(name: string): Object;
        /**
         * @param index
         */
        get_child_by_index(index: number): Object;
        get_children_count(): number;
        /**
         * @param index
         * @virtual
         */
        vfunc_get_child_by_index(index: number): Object;
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
        set_parent(parent: Object): boolean;
        get_parent(): Object;
        unparent(): void;
        /**
         * @param ancestor
         */
        has_ancestor(ancestor: Object): boolean;
        /**
         * @param newobj
         */
        replace(newobj: Object): void;
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

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The plugin object
     * @gir-type Class
     */
    class Plugin extends Object {
        static $gtype: GObject.GType<Plugin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Fields

        object: Object;
        flags: number;
        filename: string;
        basename: string;
        file_size: number;
        file_mtime: number;
        registered: boolean;

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
         * @param major_version
         * @param minor_version
         * @param name
         * @param description
         * @param init_func
         * @param version
         * @param license
         * @param source
         * @param _package
         * @param origin
         */
        static register_static(
            major_version: number,
            minor_version: number,
            name: string,
            description: string,
            init_func: PluginInitFunc,
            version: string,
            license: string,
            source: string,
            _package: string,
            origin: string,
        ): boolean;
        /**
         * @param major_version
         * @param minor_version
         * @param name
         * @param description
         * @param init_full_func
         * @param version
         * @param license
         * @param source
         * @param _package
         * @param origin
         * @param user_data
         */
        static register_static_full(
            major_version: number,
            minor_version: number,
            name: string,
            description: string,
            init_full_func: PluginInitFullFunc,
            version: string,
            license: string,
            source: string,
            _package: string,
            origin: string,
            user_data: any,
        ): boolean;
        /**
         * @param filename
         */
        static load_file(filename: string): Plugin;
        /**
         * @param name
         */
        static load_by_name(name: string): Plugin;

        // Methods

        get_name(): string;
        get_description(): string;
        get_filename(): string;
        get_version(): string;
        get_license(): string;
        get_source(): string;
        get_package(): string;
        get_origin(): string;
        get_cache_data(): Structure;
        /**
         * @param cache_data
         */
        set_cache_data(cache_data: Structure): void;
        get_module(): GModule.Module;
        is_loaded(): boolean;
        /**
         * @param name
         */
        name_filter(name: string): boolean;
        load(): Plugin;
        /**
         * @param env_vars
         * @param paths
         * @param names
         * @param flags
         */
        add_dependency(env_vars: string[], paths: string[], names: string[], flags: PluginDependencyFlags | null): void;
        /**
         * @param env_vars
         * @param paths
         * @param names
         * @param flags
         */
        add_dependency_simple(
            env_vars: string,
            paths: string,
            names: string,
            flags: PluginDependencyFlags | null,
        ): void;
    }

    namespace PluginFeature {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Opaque {@link Gst.PluginFeature} structure.
     * @gir-type Class
     */
    abstract class PluginFeature extends Object {
        static $gtype: GObject.GType<PluginFeature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginFeature.SignalSignatures;

        // Fields

        object: Object;
        loaded: boolean;

        // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
        name: string;
        rank: number;
        plugin_name: string;

        // Constructors

        constructor(properties?: Partial<PluginFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PluginFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginFeature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginFeature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginFeature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginFeature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        load(): PluginFeature;
        /**
         * @param data
         */
        type_name_filter(data: TypeNameData): boolean;
        /**
         * @param rank
         */
        set_rank(rank: number): void;
        /**
         * @param name
         */
        set_name(name: string): void;
        /**
         * @param args
         */
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;
        get_rank(): number;
        get_name(): string;
        /**
         * @param min_major
         * @param min_minor
         * @param min_micro
         */
        check_version(min_major: number, min_minor: number, min_micro: number): boolean;
    }

    namespace ProxyPad {
        // Signal signatures
        interface SignalSignatures extends Pad.SignalSignatures {
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Pad.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ProxyPad extends Pad {
        static $gtype: GObject.GType<ProxyPad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProxyPad.SignalSignatures;

        // Fields

        pad: Pad;

        // Constructors

        constructor(properties?: Partial<ProxyPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ProxyPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProxyPad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProxyPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProxyPad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProxyPad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProxyPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PushSrc {
        // Signal signatures
        interface SignalSignatures extends BaseSrc.SignalSignatures {
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BaseSrc.ConstructorProps {}
    }

    /**
     * The opaque {@link Gst.PushSrc} data structure.
     * @gir-type Class
     */
    class PushSrc extends BaseSrc {
        static $gtype: GObject.GType<PushSrc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PushSrc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PushSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PushSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PushSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PushSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PushSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PushSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PushSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param buf
         * @virtual
         */
        vfunc_create(buf: Buffer): FlowReturn;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gst.BaseSrc.vfunc_create
        vfunc_create(...args: never[]): any;
    }

    namespace Query {
        // Signal signatures
        interface SignalSignatures extends MiniObject.SignalSignatures {}
    }

    /**
     * The {@link Gst.Query} structure.
     * @gir-type Class
     */
    class Query extends MiniObject {
        static $gtype: GObject.GType<Query>;

        // Fields

        mini_object: MiniObject;
        type: QueryType;

        // Constructors

        _init(...args: any[]): void;

        static new_position(format: Format): Query;

        static new_duration(format: Format): Query;

        static new_latency(): Query;

        static new_convert(src_format: Format, value: number, dest_format: Format): Query;

        static new_segment(format: Format): Query;

        static new_application(type: QueryType, structure: Structure): Query;

        static new_seeking(format: Format): Query;

        static new_formats(): Query;

        static new_buffering(format: Format): Query;

        static new_uri(): Query;

        // Signals

        /** @signal */
        connect<K extends keyof Query.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Query.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Query.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Query.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Query.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Query.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param query
         */
        static type_get_name(query: QueryType): string;
        /**
         * @param query
         */
        static type_to_quark(query: QueryType): GLib.Quark;
        /**
         * @param nick
         * @param description
         */
        static type_register(nick: string, description: string): QueryType;
        /**
         * @param nick
         */
        static type_get_by_nick(nick: string): QueryType;
        /**
         * @param types
         * @param type
         */
        static types_contains(types: QueryType, type: QueryType): boolean;
        /**
         * @param type
         */
        static type_get_details(type: QueryType): QueryTypeDefinition;
        static type_iterate_definitions(): Iterator;

        // Methods

        /**
         * @param format
         * @param cur
         */
        set_position(format: Format | null, cur: number): void;
        /**
         * @param format
         */
        parse_position(format: Format | null): number;
        /**
         * @param format
         * @param duration
         */
        set_duration(format: Format | null, duration: number): void;
        /**
         * @param format
         */
        parse_duration(format: Format | null): number;
        /**
         * @param live
         * @param min_latency
         * @param max_latency
         */
        set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void;
        /**
         * @param min_latency
         * @param max_latency
         */
        parse_latency(min_latency: ClockTime, max_latency: ClockTime): boolean;
        /**
         * @param src_format
         * @param src_value
         * @param dest_format
         * @param dest_value
         */
        set_convert(src_format: Format | null, src_value: number, dest_format: Format | null, dest_value: number): void;
        /**
         * @param src_format
         * @param dest_format
         */
        parse_convert(src_format: Format | null, dest_format: Format | null): [number, number];
        /**
         * @param rate
         * @param format
         * @param start_value
         * @param stop_value
         */
        set_segment(rate: number, format: Format | null, start_value: number, stop_value: number): void;
        /**
         * @param format
         */
        parse_segment(format: Format | null): [number, number, number];
        get_structure(): Structure;
        /**
         * @param format
         * @param seekable
         * @param segment_start
         * @param segment_end
         */
        set_seeking(format: Format | null, seekable: boolean, segment_start: number, segment_end: number): void;
        /**
         * @param format
         */
        parse_seeking(format: Format | null): [boolean, number, number];
        /**
         * @param n_formats
         * @param formats
         */
        set_formatsv(n_formats: number, formats: Format | null): void;
        parse_formats_length(): number;
        /**
         * @param nth
         * @param format
         */
        parse_formats_nth(nth: number, format: Format | null): void;
        /**
         * @param busy
         * @param percent
         */
        set_buffering_percent(busy: boolean, percent: number): void;
        parse_buffering_percent(): [boolean, number];
        /**
         * @param mode
         * @param avg_in
         * @param avg_out
         * @param buffering_left
         */
        set_buffering_stats(mode: BufferingMode | null, avg_in: number, avg_out: number, buffering_left: number): void;
        /**
         * @param mode
         */
        parse_buffering_stats(mode: BufferingMode | null): [number, number, number];
        /**
         * @param format
         * @param start
         * @param stop
         * @param estimated_total
         */
        set_buffering_range(format: Format | null, start: number, stop: number, estimated_total: number): void;
        /**
         * @param format
         */
        parse_buffering_range(format: Format | null): [number, number, number];
        /**
         * @param uri
         */
        parse_uri(uri: string[]): void;
        /**
         * @param uri
         */
        set_uri(uri: string): void;
    }

    namespace Registry {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'feature-added': (arg0: any) => void;
            /**
             * @signal
             */
            'plugin-added': (arg0: any) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Opaque {@link Gst.Registry} structure.
     * @gir-type Class
     */
    class Registry extends Object {
        static $gtype: GObject.GType<Registry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Registry.SignalSignatures;

        // Fields

        object: Object;
        plugins: any[];
        features: any[];
        paths: any[];
        cache_file: number;

        // Constructors

        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Registry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Registry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Registry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): Registry;
        static fork_is_enabled(): boolean;
        /**
         * @param enabled
         */
        static fork_set_enabled(enabled: boolean): void;

        // Methods

        /**
         * @param path
         */
        scan_path(path: string): boolean;
        /**
         * @param path
         */
        add_path(path: string): void;
        /**
         * @param plugin
         */
        add_plugin(plugin: Plugin): boolean;
        /**
         * @param plugin
         */
        remove_plugin(plugin: Plugin): void;
        /**
         * @param feature
         */
        add_feature(feature: PluginFeature): boolean;
        /**
         * @param feature
         */
        remove_feature(feature: PluginFeature): void;
        get_feature_list_cookie(): number;
        /**
         * @param name
         */
        find_plugin(name: string): Plugin;
        /**
         * @param name
         * @param type
         */
        find_feature(name: string, type: GObject.GType): PluginFeature;
        /**
         * @param filename
         */
        lookup(filename: string): Plugin;
        /**
         * @param name
         */
        lookup_feature(name: string): PluginFeature;
        /**
         * @param location
         */
        xml_read_cache(location: string): boolean;
        /**
         * @param location
         */
        xml_write_cache(location: string): boolean;
    }

    namespace SystemClock {
        // Signal signatures
        interface SignalSignatures extends Clock.SignalSignatures {
            'notify::clock-type': (pspec: GObject.ParamSpec) => void;
            'notify::stats': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::window-size': (pspec: GObject.ParamSpec) => void;
            'notify::window-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Clock.ConstructorProps {
            clock_type: ClockType;
            clockType: ClockType;
        }
    }

    /**
     * The default implementation of a {@link Gst.Clock} that uses the system time.
     * @gir-type Class
     */
    class SystemClock extends Clock {
        static $gtype: GObject.GType<SystemClock>;

        // Properties

        get clock_type(): ClockType;
        set clock_type(val: ClockType);
        get clockType(): ClockType;
        set clockType(val: ClockType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SystemClock.SignalSignatures;

        // Fields

        clock: Clock;
        stopping: boolean;

        // Constructors

        constructor(properties?: Partial<SystemClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SystemClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SystemClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SystemClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SystemClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SystemClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SystemClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static obtain(): Clock;
    }

    namespace Task {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The {@link Gst.Task} object.
     * @gir-type Class
     */
    class Task extends Object {
        static $gtype: GObject.GType<Task>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Task.SignalSignatures;

        // Fields

        object: Object;
        state: TaskState;
        lock: never;
        func: TaskFunction;
        data: any;
        running: boolean;

        // Constructors

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Task.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static cleanup_all(): void;
        /**
         * @param func
         */
        static create(func: TaskFunction): Task;

        // Methods

        /**
         * @param mutex
         */
        set_lock(mutex: never): void;
        /**
         * @param priority
         */
        set_priority(priority: never): void;
        get_pool(): TaskPool;
        /**
         * @param pool
         */
        set_pool(pool: TaskPool): void;
        /**
         * @param callbacks
         * @param user_data
         */
        set_thread_callbacks(callbacks: TaskThreadCallbacks, user_data: any): void;
        get_state(): TaskState;
        /**
         * @param state
         */
        set_state(state: TaskState | null): boolean;
        start(): boolean;
        stop(): boolean;
        pause(): boolean;
        join(): boolean;
    }

    namespace TaskPool {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The {@link Gst.TaskPool} object.
     * @gir-type Class
     */
    class TaskPool extends Object {
        static $gtype: GObject.GType<TaskPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TaskPool.SignalSignatures;

        // Fields

        object: Object;

        // Constructors

        constructor(properties?: Partial<TaskPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TaskPool;

        // Signals

        /** @signal */
        connect<K extends keyof TaskPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TaskPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TaskPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TaskPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TaskPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_prepare(): void;
        /**
         * @virtual
         */
        vfunc_cleanup(): void;
        /**
         * @param func
         * @param user_data
         * @virtual
         */
        vfunc_push(func: TaskPoolFunction, user_data: any): any;
        /**
         * @param id
         * @virtual
         */
        vfunc_join(id: any): void;

        // Methods

        prepare(): void;
        /**
         * @param func
         * @param user_data
         */
        push(func: TaskPoolFunction, user_data: any): any;
        /**
         * @param id
         */
        join(id: any): void;
        cleanup(): void;
    }

    namespace TypeFindFactory {
        // Signal signatures
        interface SignalSignatures extends PluginFeature.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }

    /**
     * Object that stores information about a typefind function.
     * @gir-type Class
     */
    class TypeFindFactory extends PluginFeature {
        static $gtype: GObject.GType<TypeFindFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TypeFindFactory.SignalSignatures;

        // Fields

        feature: PluginFeature;
        'function': TypeFindFunction;
        extensions: string;
        user_data: any;
        user_data_notify: GLib.DestroyNotify;

        // Constructors

        constructor(properties?: Partial<TypeFindFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof TypeFindFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TypeFindFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TypeFindFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TypeFindFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TypeFindFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TypeFindFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_extensions(): string[];
        get_caps(): Caps;
        /**
         * @param find
         */
        call_function(find: TypeFind): void;
    }

    namespace XML {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             */
            'object-loaded': (arg0: Object, arg1: any) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * XML parser object
     * @gir-type Class
     */
    class XML extends Object {
        static $gtype: GObject.GType<XML>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XML.SignalSignatures;

        // Fields

        object: Object;
        topelements: any[];

        // Constructors

        constructor(properties?: Partial<XML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XML;

        // Signals

        /** @signal */
        connect<K extends keyof XML.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XML.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof XML.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XML.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof XML.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XML.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param element
         */
        static write(element: Element): libxml2.DocPtr;
        /**
         * @param cur
         * @param parent
         */
        static make_element(cur: libxml2.NodePtr, parent: Object): Element;

        // Virtual methods

        /**
         * @param object
         * @param self
         * @virtual
         */
        vfunc_object_saved(object: Object, self: libxml2.NodePtr): void;

        // Methods

        /**
         * @param doc
         * @param root
         */
        parse_doc(doc: libxml2.DocPtr, root: number[]): boolean;
        /**
         * @param fname
         * @param root
         */
        parse_file(fname: number[], root: number[]): boolean;
        /**
         * @param buffer
         * @param size
         * @param root
         */
        parse_memory(buffer: number[], size: number, root: string): boolean;
        /**
         * @param name
         */
        get_element(name: number[]): Element;
    }

    /**
     * @gir-type Alias
     */
    type AdapterClass = typeof Adapter;
    /**
     * @gir-type Struct
     */
    class AdapterPrivate {
        static $gtype: GObject.GType<AdapterPrivate>;
    }

    /**
     * The main tracing object
     * @gir-type Struct
     */
    class AllocTrace {
        static $gtype: GObject.GType<AllocTrace>;

        // Fields

        name: string;
        flags: number;
        live: number;
        mem_live: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                flags: number;
                live: number;
            }>,
        );

        // Methods

        print(): void;
        /**
         * @param flags
         */
        set_flags(flags: AllocTraceFlags | null): void;
    }

    /**
     * @gir-type Alias
     */
    type BaseSinkClass = typeof BaseSink;
    /**
     * @gir-type Struct
     */
    class BaseSinkPrivate {
        static $gtype: GObject.GType<BaseSinkPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseSrcClass = typeof BaseSrc;
    /**
     * @gir-type Struct
     */
    class BaseSrcPrivate {
        static $gtype: GObject.GType<BaseSrcPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseTransformClass = typeof BaseTransform;
    /**
     * @gir-type Struct
     */
    class BaseTransformPrivate {
        static $gtype: GObject.GType<BaseTransformPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BinClass = typeof Bin;
    /**
     * @gir-type Struct
     */
    class BinPrivate {
        static $gtype: GObject.GType<BinPrivate>;
    }

    /**
     * A bit reader instance.
     * @gir-type Struct
     */
    class BitReader {
        static $gtype: GObject.GType<BitReader>;

        // Fields

        data: any;
        size: number;
        'byte': number;
        bit: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: any;
                size: number;
                byte: number;
                bit: number;
            }>,
        );

        static ['new'](data: number[], size: number): BitReader;

        static new_from_buffer(buffer: Buffer): BitReader;

        // Methods

        free(): void;
        /**
         * @param data
         * @param size
         */
        init(data: number[], size: number): void;
        /**
         * @param buffer
         */
        init_from_buffer(buffer: Buffer): void;
        /**
         * @param pos
         */
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        /**
         * @param nbits
         */
        skip(nbits: number): boolean;
        skip_to_byte(): boolean;
        /**
         * @param val
         * @param nbits
         */
        get_bits_uint8(val: number[], nbits: number): boolean;
        /**
         * @param nbits
         */
        get_bits_uint16(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        get_bits_uint32(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        get_bits_uint64(nbits: number): [boolean, number];
        /**
         * @param val
         * @param nbits
         */
        peek_bits_uint8(val: number[], nbits: number): boolean;
        /**
         * @param nbits
         */
        peek_bits_uint16(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        peek_bits_uint32(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        peek_bits_uint64(nbits: number): [boolean, number];
    }

    /**
     * @gir-type Alias
     */
    type BufferClass = typeof Buffer;
    /**
     * @gir-type Alias
     */
    type BufferListClass = typeof BufferList;
    /**
     * @gir-type Struct
     */
    class BufferListIterator {
        static $gtype: GObject.GType<BufferListIterator>;

        // Methods

        free(): void;
        n_buffers(): number;
        next(): Buffer;
        next_group(): boolean;
        /**
         * @param buffer
         */
        add(buffer: Buffer): void;
        add_group(): void;
        remove(): void;
        steal(): Buffer;
        /**
         * @param buffer
         */
        take(buffer: Buffer): void;
        /**
         * @param do_func
         * @param user_data
         */
        ['do'](do_func: BufferListDoFunction, user_data: any): Buffer;
        merge_group(): Buffer;
    }

    /**
     * @gir-type Alias
     */
    type BusClass = typeof Bus;
    /**
     * @gir-type Struct
     */
    class BusPrivate {
        static $gtype: GObject.GType<BusPrivate>;
    }

    /**
     * A byte reader instance.
     * @gir-type Struct
     */
    class ByteReader {
        static $gtype: GObject.GType<ByteReader>;

        // Fields

        data: any;
        size: number;
        'byte': number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: any;
                size: number;
                byte: number;
            }>,
        );

        static ['new'](data: number[], size: number): ByteReader;

        static new_from_buffer(buffer: Buffer): ByteReader;

        // Methods

        free(): void;
        /**
         * @param data
         * @param size
         */
        init(data: number[], size: number): void;
        /**
         * @param buffer
         */
        init_from_buffer(buffer: Buffer): void;
        /**
         * @param pos
         */
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        /**
         * @param nbytes
         */
        skip(nbytes: number): boolean;
        /**
         * @param val
         */
        get_uint8(val: number[]): boolean;
        get_int8(): [boolean, number];
        get_uint16_le(): [boolean, number];
        get_int16_le(): [boolean, number];
        get_uint16_be(): [boolean, number];
        get_int16_be(): [boolean, number];
        get_uint24_le(): [boolean, number];
        get_int24_le(): [boolean, number];
        get_uint24_be(): [boolean, number];
        get_int24_be(): [boolean, number];
        get_uint32_le(): [boolean, number];
        get_int32_le(): [boolean, number];
        get_uint32_be(): [boolean, number];
        get_int32_be(): [boolean, number];
        get_uint64_le(): [boolean, number];
        get_int64_le(): [boolean, number];
        get_uint64_be(): [boolean, number];
        get_int64_be(): [boolean, number];
        /**
         * @param val
         */
        peek_uint8(val: number[]): boolean;
        peek_int8(): [boolean, number];
        peek_uint16_le(): [boolean, number];
        peek_int16_le(): [boolean, number];
        peek_uint16_be(): [boolean, number];
        peek_int16_be(): [boolean, number];
        peek_uint24_le(): [boolean, number];
        peek_int24_le(): [boolean, number];
        peek_uint24_be(): [boolean, number];
        peek_int24_be(): [boolean, number];
        peek_uint32_le(): [boolean, number];
        peek_int32_le(): [boolean, number];
        peek_uint32_be(): [boolean, number];
        peek_int32_be(): [boolean, number];
        peek_uint64_le(): [boolean, number];
        peek_int64_le(): [boolean, number];
        peek_uint64_be(): [boolean, number];
        peek_int64_be(): [boolean, number];
        get_float32_le(): [boolean, number];
        get_float32_be(): [boolean, number];
        get_float64_le(): [boolean, number];
        get_float64_be(): [boolean, number];
        peek_float32_le(): [boolean, number];
        peek_float32_be(): [boolean, number];
        peek_float64_le(): [boolean, number];
        peek_float64_be(): [boolean, number];
        /**
         * @param size
         */
        dup_data(size: number): [boolean, number];
        /**
         * @param size
         */
        get_data(size: number): [boolean, number];
        /**
         * @param size
         */
        peek_data(size: number): [boolean, number];
        /**
         * @param str
         */
        dup_string_utf8(str: string[]): boolean;
        dup_string_utf16(): [boolean, number];
        dup_string_utf32(): [boolean, number];
        skip_string_utf8(): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        /**
         * @param str
         */
        get_string_utf8(str: string[]): boolean;
        /**
         * @param str
         */
        peek_string_utf8(str: string[]): boolean;
        /**
         * @param mask
         * @param pattern
         * @param offset
         * @param size
         */
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    }

    /**
     * A byte writer instance.
     * @gir-type Struct
     */
    class ByteWriter {
        static $gtype: GObject.GType<ByteWriter>;

        // Fields

        alloc_size: number;
        fixed: boolean;
        owned: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                parent: ByteReader;
                alloc_size: number;
                fixed: boolean;
                owned: boolean;
            }>,
        );

        static ['new'](): ByteWriter;

        static new_with_size(size: number, fixed: boolean): ByteWriter;

        static new_with_data(data: number[], size: number, initialized: boolean): ByteWriter;

        static new_with_buffer(buffer: Buffer, initialized: boolean): ByteWriter;

        // Methods

        init(): void;
        /**
         * @param size
         * @param fixed
         */
        init_with_size(size: number, fixed: boolean): void;
        /**
         * @param data
         * @param size
         * @param initialized
         */
        init_with_data(data: number[], size: number, initialized: boolean): void;
        /**
         * @param buffer
         * @param initialized
         */
        init_with_buffer(buffer: Buffer, initialized: boolean): void;
        free(): void;
        free_and_get_data(): number[];
        free_and_get_buffer(): Buffer;
        reset(): void;
        reset_and_get_data(): number[];
        reset_and_get_buffer(): Buffer;
        get_remaining(): number;
        /**
         * @param size
         */
        ensure_free_space(size: number): boolean;
        /**
         * @param val
         */
        put_uint8(val: number): boolean;
        /**
         * @param val
         */
        put_int8(val: number): boolean;
        /**
         * @param val
         */
        put_uint16_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint16_le(val: number): boolean;
        /**
         * @param val
         */
        put_int16_be(val: number): boolean;
        /**
         * @param val
         */
        put_int16_le(val: number): boolean;
        /**
         * @param val
         */
        put_uint24_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint24_le(val: number): boolean;
        /**
         * @param val
         */
        put_int24_be(val: number): boolean;
        /**
         * @param val
         */
        put_int24_le(val: number): boolean;
        /**
         * @param val
         */
        put_uint32_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint32_le(val: number): boolean;
        /**
         * @param val
         */
        put_int32_be(val: number): boolean;
        /**
         * @param val
         */
        put_int32_le(val: number): boolean;
        /**
         * @param val
         */
        put_uint64_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint64_le(val: number): boolean;
        /**
         * @param val
         */
        put_int64_be(val: number): boolean;
        /**
         * @param val
         */
        put_int64_le(val: number): boolean;
        /**
         * @param val
         */
        put_float32_be(val: number): boolean;
        /**
         * @param val
         */
        put_float32_le(val: number): boolean;
        /**
         * @param val
         */
        put_float64_be(val: number): boolean;
        /**
         * @param val
         */
        put_float64_le(val: number): boolean;
        /**
         * @param data
         * @param size
         */
        put_data(data: number[], size: number): boolean;
        /**
         * @param value
         * @param size
         */
        fill(value: number, size: number): boolean;
        /**
         * @param data
         */
        put_string_utf8(data: string): boolean;
        put_string_utf16(): [boolean, number];
        put_string_utf32(): [boolean, number];
    }

    /**
     * Object describing media types.
     * @gir-type Struct
     */
    class Caps {
        static $gtype: GObject.GType<Caps>;

        // Fields

        type: GObject.GType;
        refcount: number;
        flags: CapsFlags;
        structs: GLib.PtrArray;

        // Constructors

        constructor(
            properties?: Partial<{
                type: GObject.GType;
                refcount: number;
                flags: CapsFlags;
                _gst_reserved: any[];
            }>,
        );

        static new_empty(): Caps;

        static new_any(): Caps;

        // Methods

        ref(): Caps;
        copy(): Caps;
        make_writable(): Caps;
        unref(): void;
        /**
         * @param caps2
         */
        append(caps2: Caps): void;
        /**
         * @param caps2
         */
        merge(caps2: Caps): void;
        /**
         * @param structure
         */
        append_structure(structure: Structure): void;
        /**
         * @param idx
         */
        remove_structure(idx: number): void;
        /**
         * @param structure
         */
        merge_structure(structure: Structure): void;
        get_size(): number;
        /**
         * @param index
         */
        get_structure(index: number): Structure;
        /**
         * @param index
         */
        steal_structure(index: number): Structure;
        /**
         * @param nth
         */
        copy_nth(nth: number): Caps;
        truncate(): void;
        /**
         * @param field
         * @param value
         */
        set_value(field: string, value: GObject.Value | any): void;
        is_any(): boolean;
        is_empty(): boolean;
        is_fixed(): boolean;
        /**
         * @param caps2
         */
        is_always_compatible(caps2: Caps): boolean;
        /**
         * @param superset
         */
        is_subset(superset: Caps): boolean;
        /**
         * @param caps2
         */
        is_equal(caps2: Caps): boolean;
        /**
         * @param caps2
         */
        is_equal_fixed(caps2: Caps): boolean;
        /**
         * @param caps2
         */
        can_intersect(caps2: Caps): boolean;
        /**
         * @param caps2
         */
        intersect(caps2: Caps): Caps;
        /**
         * @param subtrahend
         */
        subtract(subtrahend: Caps): Caps;
        /**
         * @param caps2
         */
        union(caps2: Caps): Caps;
        normalize(): Caps;
        do_simplify(): boolean;
        /**
         * @param parent
         */
        save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        /**
         * @param newcaps
         */
        replace(newcaps: Caps): void;
        to_string(): string;
    }

    /**
     * @gir-type Alias
     */
    type ChildProxyInterface = typeof ChildProxy;
    /**
     * @gir-type Alias
     */
    type ClockClass = typeof Clock;
    /**
     * All pending timeouts or periodic notifies are converted into
     * an entry.
     * Note that GstClockEntry should be treated as an opaque structure. It must
     * not be extended or allocated using a custom allocator.
     * @gir-type Struct
     */
    class ClockEntry {
        static $gtype: GObject.GType<ClockEntry>;

        // Fields

        refcount: number;
        clock: Clock;
        type: ClockEntryType;
        time: ClockTime;
        interval: ClockTime;
        status: ClockReturn;
        func: ClockCallback;
        user_data: any;
        destroy_data: GLib.DestroyNotify;
    }

    /**
     * @gir-type Struct
     */
    class ClockPrivate {
        static $gtype: GObject.GType<ClockPrivate>;
    }

    /**
     * Structure used by the collect_pads.
     * @gir-type Struct
     */
    class CollectData {
        static $gtype: GObject.GType<CollectData>;

        // Fields

        collect: CollectPads;
        pad: Pad;
        buffer: Buffer;
        pos: number;
    }

    /**
     * @gir-type Alias
     */
    type CollectPadsClass = typeof CollectPads;
    /**
     * @gir-type Struct
     */
    class CollectPadsPrivate {
        static $gtype: GObject.GType<CollectPadsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DataQueueClass = typeof DataQueue;
    /**
     * Structure used by {@link Gst.DataQueue}. You can supply a different structure, as
     * long as the top of the structure is identical to this structure.
     * @gir-type Struct
     */
    class DataQueueItem {
        static $gtype: GObject.GType<DataQueueItem>;

        // Fields

        object: MiniObject;
        size: number;
        duration: number;
        visible: boolean;
        destroy: GLib.DestroyNotify;
    }

    /**
     * Structure describing the size of a queue.
     * @gir-type Struct
     */
    class DataQueueSize {
        static $gtype: GObject.GType<DataQueueSize>;

        // Fields

        visible: number;
        bytes: number;
        time: number;

        // Constructors

        constructor(
            properties?: Partial<{
                visible: number;
                bytes: number;
                time: number;
            }>,
        );
    }

    /**
     * This is the struct that describes the categories. Once initialized with
     * #GST_DEBUG_CATEGORY_INIT, its values can't be changed anymore.
     * @gir-type Struct
     */
    class DebugCategory {
        static $gtype: GObject.GType<DebugCategory>;

        // Fields

        threshold: number;
        color: number;
        name: string;
        description: string;

        // Constructors

        constructor(
            properties?: Partial<{
                threshold: number;
                color: number;
                name: string;
                description: string;
            }>,
        );

        // Methods

        free(): void;
        /**
         * @param level
         */
        set_threshold(level: DebugLevel | null): void;
        reset_threshold(): void;
        get_threshold(): DebugLevel;
        get_name(): string;
        get_color(): number;
        get_description(): string;
    }

    /**
     * @gir-type Struct
     */
    class DebugMessage {
        static $gtype: GObject.GType<DebugMessage>;

        // Methods

        get(): string;
    }

    /**
     * @gir-type Alias
     */
    type ElementClass = typeof Element;
    /**
     * This struct defines the public information about a {@link Gst.Element}. It contains
     * meta-data about the element that is mostly for the benefit of editors.
     * The `klass` member can be used by applications to filter elements based
     * on functionality.
     * @gir-type Struct
     */
    class ElementDetails {
        static $gtype: GObject.GType<ElementDetails>;

        // Fields

        longname: string;
        klass: string;
        description: string;
        author: string;

        // Constructors

        constructor(
            properties?: Partial<{
                longname: string;
                klass: string;
                description: string;
                author: string;
                _gst_reserved: any[];
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type ElementFactoryClass = typeof ElementFactory;
    /**
     * @gir-type Alias
     */
    type EventClass = typeof Event;
    /**
     * A format definition
     * @gir-type Struct
     */
    class FormatDefinition {
        static $gtype: GObject.GType<FormatDefinition>;

        // Fields

        value: Format;
        nick: string;
        description: string;
        quark: GLib.Quark;
    }

    /**
     * @gir-type Alias
     */
    type GhostPadClass = typeof GhostPad;
    /**
     * @gir-type Struct
     */
    class GhostPadPrivate {
        static $gtype: GObject.GType<GhostPadPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ImplementsInterfaceClass = typeof ImplementsInterface;
    /**
     * An association in an entry.
     * @gir-type Struct
     */
    class IndexAssociation {
        static $gtype: GObject.GType<IndexAssociation>;

        // Fields

        format: Format;
        value: number;
    }

    /**
     * @gir-type Alias
     */
    type IndexClass = typeof Index;
    /**
     * The basic element of an index.
     * @gir-type Struct
     */
    class IndexEntry {
        static $gtype: GObject.GType<IndexEntry>;

        // Fields

        type: IndexEntryType;
        id: number;

        // Methods

        copy(): IndexEntry;
        free(): void;
        /**
         * @param format
         */
        assoc_map(format: Format | null): [boolean, number];
    }

    /**
     * @gir-type Alias
     */
    type IndexFactoryClass = typeof IndexFactory;
    /**
     * A group of related entries in an index.
     * @gir-type Struct
     */
    class IndexGroup {
        static $gtype: GObject.GType<IndexGroup>;

        // Fields

        groupnum: number;
        entries: any[];
        certainty: IndexCertainty;
        peergroup: number;
    }

    /**
     * {@link Gst.Iterator} base structure. The values of this structure are
     * protected for subclasses, use the methods to use the {@link Gst.Iterator}.
     * @gir-type Struct
     */
    class Iterator {
        static $gtype: GObject.GType<Iterator>;

        // Fields

        item: IteratorItemFunction;
        type: GObject.GType;
        cookie: number;
        master_cookie: any;

        // Constructors

        constructor(
            size: number,
            type: GObject.GType,
            lock: GLib.Mutex,
            next: IteratorNextFunction,
            item: IteratorItemFunction,
            resync: IteratorResyncFunction,
            free: IteratorFreeFunction,
        );

        static ['new'](
            size: number,
            type: GObject.GType,
            lock: GLib.Mutex,
            next: IteratorNextFunction,
            item: IteratorItemFunction,
            resync: IteratorResyncFunction,
            free: IteratorFreeFunction,
        ): Iterator;

        static new_single(type: GObject.GType, object: any, copy: CopyFunction, free: GLib.FreeFunc): Iterator;

        // Methods

        /**
         * @param elem
         */
        next(elem: any): IteratorResult;
        resync(): void;
        free(): void;
        /**
         * @param other
         */
        push(other: Iterator): void;
        /**
         * @param func
         * @param user_data
         */
        filter(func: GLib.CompareFunc, user_data: any): Iterator;
        /**
         * @param func
         * @param ret
         * @param user_data
         */
        fold(func: IteratorFoldFunction, ret: GObject.Value | any, user_data: any): IteratorResult;
        /**
         * @param func
         * @param user_data
         */
        foreach(func: GLib.Func, user_data: any): IteratorResult;
        /**
         * @param func
         * @param user_data
         */
        find_custom(func: GLib.CompareFunc, user_data: any): any;
    }

    /**
     * @gir-type Alias
     */
    type MessageClass = typeof Message;
    /**
     * @gir-type Alias
     */
    type MiniObjectClass = typeof MiniObject;
    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Alias
     */
    type PadClass = typeof Pad;
    /**
     * @gir-type Struct
     */
    class PadPrivate {
        static $gtype: GObject.GType<PadPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PadTemplateClass = typeof PadTemplate;
    /**
     * A GParamSpec derived structure that contains the meta data for fractional
     * properties.
     * @gir-type Struct
     */
    class ParamSpecFraction {
        static $gtype: GObject.GType<ParamSpecFraction>;

        // Fields

        min_num: number;
        min_den: number;
        max_num: number;
        max_den: number;
        def_num: number;
        def_den: number;
    }

    /**
     * A %GParamSpec derived structure that contains the meta data
     * for %GstMiniObject properties.
     * @gir-type Struct
     */
    class ParamSpecMiniObject {
        static $gtype: GObject.GType<ParamSpecMiniObject>;
    }

    /**
     * Opaque structure.
     * @gir-type Struct
     * @since 0.10.20
     */
    class ParseContext {
        static $gtype: GObject.GType<ParseContext>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ParseContext;

        // Methods

        get_missing_elements(): string[];
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type PipelineClass = typeof Pipeline;
    /**
     * @gir-type Struct
     */
    class PipelinePrivate {
        static $gtype: GObject.GType<PipelinePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;
    /**
     * A plugin should export a variable of this type called plugin_desc. The plugin
     * loader will use the data provided there to initialize the plugin.
     * BSD, MIT/X11, Proprietary, unknown.
     * @gir-type Struct
     */
    class PluginDesc {
        static $gtype: GObject.GType<PluginDesc>;

        // Fields

        major_version: number;
        minor_version: number;
        name: string;
        description: string;
        plugin_init: PluginInitFunc;
        version: string;
        license: string;
        source: string;
        'package': string;
        origin: string;
    }

    /**
     * @gir-type Alias
     */
    type PluginFeatureClass = typeof PluginFeature;
    /**
     * @gir-type Struct
     */
    class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }

    /**
     * A set of file/network descriptors.
     * @gir-type Struct
     */
    class Poll {
        static $gtype: GObject.GType<Poll>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](controllable: boolean): Poll;

        static new_timer(): Poll;

        // Methods

        free(): void;
        /**
         * @param fd
         */
        add_fd(fd: PollFD): boolean;
        /**
         * @param fd
         */
        remove_fd(fd: PollFD): boolean;
        /**
         * @param fd
         * @param active
         */
        fd_ctl_write(fd: PollFD, active: boolean): boolean;
        /**
         * @param fd
         * @param active
         */
        fd_ctl_read(fd: PollFD, active: boolean): boolean;
        /**
         * @param fd
         */
        fd_ignored(fd: PollFD): void;
        /**
         * @param fd
         */
        fd_has_closed(fd: PollFD): boolean;
        /**
         * @param fd
         */
        fd_has_error(fd: PollFD): boolean;
        /**
         * @param fd
         */
        fd_can_read(fd: PollFD): boolean;
        /**
         * @param fd
         */
        fd_can_write(fd: PollFD): boolean;
        /**
         * @param timeout
         */
        wait(timeout: ClockTime): number;
        /**
         * @param controllable
         */
        set_controllable(controllable: boolean): boolean;
        restart(): void;
        /**
         * @param flushing
         */
        set_flushing(flushing: boolean): void;
        write_control(): boolean;
        read_control(): boolean;
    }

    /**
     * A file descriptor object.
     * @gir-type Struct
     */
    class PollFD {
        static $gtype: GObject.GType<PollFD>;

        // Fields

        fd: number;
        idx: number;

        // Constructors

        constructor(
            properties?: Partial<{
                fd: number;
                idx: number;
            }>,
        );

        // Methods

        init(): void;
    }

    /**
     * @gir-type Alias
     */
    type ProxyPadClass = typeof ProxyPad;
    /**
     * @gir-type Struct
     */
    class ProxyPadPrivate {
        static $gtype: GObject.GType<ProxyPadPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PushSrcClass = typeof PushSrc;
    /**
     * @gir-type Alias
     */
    type QueryClass = typeof Query;
    /**
     * A Query Type definition
     * @gir-type Struct
     */
    class QueryTypeDefinition {
        static $gtype: GObject.GType<QueryTypeDefinition>;

        // Fields

        value: QueryType;
        nick: string;
        description: string;
        quark: GLib.Quark;
    }

    /**
     * @gir-type Alias
     */
    type RegistryClass = typeof Registry;
    /**
     * @gir-type Struct
     */
    class RegistryPrivate {
        static $gtype: GObject.GType<RegistryPrivate>;
    }

    /**
     * A helper structure that holds the configured region of
     * interest in a media file.
     * @gir-type Struct
     */
    class Segment {
        static $gtype: GObject.GType<Segment>;

        // Fields

        rate: number;
        abs_rate: number;
        format: Format;
        flags: SeekFlags;
        start: number;
        stop: number;
        time: number;
        accum: number;
        last_stop: number;
        duration: number;
        applied_rate: number;

        // Constructors

        constructor(
            properties?: Partial<{
                rate: number;
                abs_rate: number;
                format: Format;
                flags: SeekFlags;
                start: number;
                stop: number;
                time: number;
                accum: number;
                last_stop: number;
                duration: number;
                applied_rate: number;
                _gst_reserved: number[];
            }>,
        );

        static ['new'](): Segment;

        // Methods

        copy(): Segment;
        free(): void;
        /**
         * @param format
         */
        init(format: Format | null): void;
        /**
         * @param format
         * @param duration
         */
        set_duration(format: Format | null, duration: number): void;
        /**
         * @param format
         * @param position
         */
        set_last_stop(format: Format | null, position: number): void;
        /**
         * @param rate
         * @param format
         * @param flags
         * @param start_type
         * @param start
         * @param stop_type
         * @param stop
         */
        set_seek(
            rate: number,
            format: Format | null,
            flags: SeekFlags | null,
            start_type: SeekType | null,
            start: number,
            stop_type: SeekType | null,
            stop: number,
        ): boolean;
        /**
         * @param update
         * @param rate
         * @param format
         * @param start
         * @param stop
         * @param time
         */
        set_newsegment(
            update: boolean,
            rate: number,
            format: Format | null,
            start: number,
            stop: number,
            time: number,
        ): void;
        /**
         * @param update
         * @param rate
         * @param applied_rate
         * @param format
         * @param start
         * @param stop
         * @param time
         */
        set_newsegment_full(
            update: boolean,
            rate: number,
            applied_rate: number,
            format: Format | null,
            start: number,
            stop: number,
            time: number,
        ): void;
        /**
         * @param format
         * @param position
         */
        to_stream_time(format: Format | null, position: number): number;
        /**
         * @param format
         * @param position
         */
        to_running_time(format: Format | null, position: number): number;
        /**
         * @param format
         * @param running_time
         */
        to_position(format: Format | null, running_time: number): number;
        /**
         * @param format
         * @param start
         * @param stop
         */
        clip(format: Format | null, start: number, stop: number): [boolean, number, number];
        /**
         * @param format
         * @param running_time
         */
        set_running_time(format: Format | null, running_time: number): boolean;
    }

    /**
     * Datastructure to initialize {@link Gst.Caps} from a string description usually
     * used in conjunction with GST_STATIC_CAPS() and `gst_static_caps_get()` to
     * instantiate a {@link Gst.Caps}.
     * @gir-type Struct
     */
    class StaticCaps {
        static $gtype: GObject.GType<StaticCaps>;

        // Fields

        string: string;

        // Methods

        get(): Caps;
    }

    /**
     * @gir-type Struct
     */
    class StaticPadTemplate {
        static $gtype: GObject.GType<StaticPadTemplate>;

        // Fields

        name_template: string;
        direction: PadDirection;
        presence: PadPresence;

        // Methods

        get(): PadTemplate;
        get_caps(): Caps;
    }

    /**
     * The GstStructure object. Most fields are private.
     * @gir-type Struct
     */
    class Structure {
        static $gtype: GObject.GType<Structure>;

        // Fields

        type: GObject.GType;
        name: GLib.Quark;
        parent_refcount: any;
        fields: GLib.Array;

        // Constructors

        constructor(name: string, firstfield: string);

        // Methods

        copy(): Structure;
        set_parent_refcount(): number;
        free(): void;
        get_name(): string;
        get_name_id(): GLib.Quark;
        /**
         * @param name
         */
        has_name(name: string): boolean;
        /**
         * @param name
         */
        set_name(name: string): void;
        /**
         * @param field
         * @param value
         */
        id_set_value(field: GLib.Quark, value: GObject.Value | any): void;
        /**
         * @param fieldname
         * @param value
         */
        set_value(fieldname: string, value: GObject.Value | any): void;
        /**
         * @param field
         */
        id_get_value(field: GLib.Quark): unknown;
        /**
         * @param fieldname
         */
        get_value(fieldname: string): unknown;
        /**
         * @param fieldname
         */
        remove_field(fieldname: string): void;
        remove_all_fields(): void;
        /**
         * @param fieldname
         */
        get_field_type(fieldname: string): GObject.GType;
        /**
         * @param func
         * @param user_data
         */
        foreach(func: StructureForeachFunc, user_data: any): boolean;
        /**
         * @param func
         * @param user_data
         */
        map_in_place(func: StructureMapFunc, user_data: any): boolean;
        n_fields(): number;
        /**
         * @param index
         */
        nth_field_name(index: number): string;
        /**
         * @param field
         */
        id_has_field(field: GLib.Quark): boolean;
        /**
         * @param field
         * @param type
         */
        id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean;
        /**
         * @param fieldname
         */
        has_field(fieldname: string): boolean;
        /**
         * @param fieldname
         * @param type
         */
        has_field_typed(fieldname: string, type: GObject.GType): boolean;
        /**
         * @param fieldname
         */
        get_boolean(fieldname: string): [boolean, boolean];
        /**
         * @param fieldname
         */
        get_int(fieldname: string): [boolean, number];
        /**
         * @param fieldname
         */
        get_uint(fieldname: string): [boolean, number];
        /**
         * @param fieldname
         */
        get_fourcc(fieldname: string): [boolean, number];
        /**
         * @param fieldname
         */
        get_double(fieldname: string): [boolean, number];
        /**
         * @param fieldname
         * @param value
         */
        get_date(fieldname: string, value: GLib.Date): boolean;
        /**
         * @param fieldname
         * @param value
         */
        get_clock_time(fieldname: string, value: ClockTime): boolean;
        /**
         * @param fieldname
         */
        get_string(fieldname: string): string;
        /**
         * @param fieldname
         * @param enumtype
         */
        get_enum(fieldname: string, enumtype: GObject.GType): [boolean, number];
        /**
         * @param fieldname
         */
        get_fraction(fieldname: string): [boolean, number, number];
        to_string(): string;
        /**
         * @param field_name
         * @param target
         */
        fixate_field_nearest_int(field_name: string, target: number): boolean;
        /**
         * @param field_name
         * @param target
         */
        fixate_field_nearest_double(field_name: string, target: number): boolean;
        /**
         * @param field_name
         * @param target
         */
        fixate_field_boolean(field_name: string, target: boolean): boolean;
        /**
         * @param field_name
         * @param target
         */
        fixate_field_string(field_name: string, target: string): boolean;
        /**
         * @param field_name
         * @param target_numerator
         * @param target_denominator
         */
        fixate_field_nearest_fraction(
            field_name: string,
            target_numerator: number,
            target_denominator: number,
        ): boolean;
    }

    /**
     * @gir-type Alias
     */
    type SystemClockClass = typeof SystemClock;
    /**
     * @gir-type Struct
     */
    class SystemClockPrivate {
        static $gtype: GObject.GType<SystemClockPrivate>;
    }

    /**
     * {@link Gst.TagSetterIFace} interface.
     * @gir-type Struct
     */
    class TagSetterIFace {
        static $gtype: GObject.GType<TagSetterIFace>;
    }

    /**
     * @gir-type Alias
     */
    type TaskClass = typeof Task;
    /**
     * @gir-type Alias
     */
    type TaskPoolClass = typeof TaskPool;
    /**
     * @gir-type Struct
     */
    class TaskPrivate {
        static $gtype: GObject.GType<TaskPrivate>;
    }

    /**
     * Custom GstTask thread callback functions that can be installed.
     * @gir-type Struct
     * @since 0.10.24
     */
    class TaskThreadCallbacks {
        static $gtype: GObject.GType<TaskThreadCallbacks>;

        // Fields

        enter_thread: any;
        leave_thread: any;

        // Constructors

        constructor(
            properties?: Partial<{
                enter_thread: any;
                leave_thread: any;
                _gst_reserved: any[];
            }>,
        );
    }

    /**
     * Opaque {@link Gst.Trace} structure.
     * @gir-type Struct
     */
    class Trace {
        static $gtype: GObject.GType<Trace>;

        // Fields

        filename: string;
        fd: number;
        buf: TraceEntry;
        bufsize: number;
        bufoffset: number;

        // Constructors

        constructor(
            properties?: Partial<{
                filename: string;
                fd: number;
                bufsize: number;
                bufoffset: number;
            }>,
        );

        static ['new'](filename: string, size: number): Trace;

        // Methods

        destroy(): void;
        flush(): void;
        text_flush(): void;
        set_default(): void;
    }

    /**
     * @gir-type Struct
     */
    class TraceEntry {
        static $gtype: GObject.GType<TraceEntry>;

        // Fields

        timestamp: number;
        sequence: number;
        data: number;
        message: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                timestamp: number;
                sequence: number;
                data: number;
                message: number[];
            }>,
        );
    }

    /**
     * Object that stores typefind callbacks. To use with {@link Gst.TypeFindFactory}.
     * @gir-type Struct
     */
    class TypeFind {
        static $gtype: GObject.GType<TypeFind>;

        // Fields

        data: any;

        // Constructors

        constructor(
            properties?: Partial<{
                peek: any;
                suggest: any;
                data: any;
                get_length: any;
                _gst_reserved: any[];
            }>,
        );

        // Methods

        /**
         * @param offset
         * @param size
         */
        peek(offset: number, size: number): number[];
        /**
         * @param probability
         * @param caps
         */
        suggest(probability: number, caps: Caps): void;
        get_length(): number;
    }

    /**
     * @gir-type Alias
     */
    type TypeFindFactoryClass = typeof TypeFindFactory;
    /**
     * Structure used for filtering based on `name` and `type`.
     * @gir-type Struct
     */
    class TypeNameData {
        static $gtype: GObject.GType<TypeNameData>;

        // Fields

        name: string;
        type: GObject.GType;
    }

    /**
     * @gir-type Alias
     */
    type URIHandlerInterface = typeof URIHandler;
    /**
     * VTable for the {@link GObject.Value} `type`.
     * @gir-type Struct
     */
    class ValueTable {
        static $gtype: GObject.GType<ValueTable>;

        // Fields

        type: GObject.GType;
        compare: ValueCompareFunc;
        serialize: ValueSerializeFunc;
        deserialize: ValueDeserializeFunc;
    }

    /**
     * @gir-type Alias
     */
    type XMLClass = typeof XML;
    namespace ChildProxy {
        /**
         * Interface for implementing ChildProxy.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param index
             * @virtual
             */
            vfunc_get_child_by_index(index: number): Object;
            /**
             * @virtual
             */
            vfunc_get_children_count(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    export interface ChildProxyNamespace {
        $gtype: GObject.GType<ChildProxy>;
        prototype: ChildProxy;
    }
    /**
     * Opaque {@link Gst.ChildProxy} data structure.
     * @gir-type Interface
     */
    interface ChildProxy extends Object, ChildProxy.Interface {
        // Methods

        /**
         * @param name
         */
        get_child_by_name(name: string): Object;
        /**
         * @param index
         */
        get_child_by_index(index: number): Object;
        get_children_count(): number;
    }

    export const ChildProxy: ChildProxyNamespace & {
        new (): ChildProxy; // This allows `obj instanceof ChildProxy`
    };

    namespace ImplementsInterface {
        /**
         * Interface for implementing ImplementsInterface.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param iface_type
             * @virtual
             */
            vfunc_supported(iface_type: GObject.GType): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {}
    }

    export interface ImplementsInterfaceNamespace {
        $gtype: GObject.GType<ImplementsInterface>;
        prototype: ImplementsInterface;
    }
    /**
     * Opaque {@link Gst.ImplementsInterface} structure.
     * @gir-type Interface
     */
    interface ImplementsInterface extends Element, ImplementsInterface.Interface {}

    export const ImplementsInterface: ImplementsInterfaceNamespace & {
        new (): ImplementsInterface; // This allows `obj instanceof ImplementsInterface`
    };

    namespace TagSetter {
        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {}
    }

    export interface TagSetterNamespace {
        $gtype: GObject.GType<TagSetter>;
        prototype: TagSetter;
    }
    /**
     * Opaque {@link Gst.TagSetter} data structure.
     * @gir-type Interface
     */
    interface TagSetter extends Element {
        // Methods

        reset_tags(): void;
        /**
         * @param list
         * @param mode
         */
        merge_tags(list: TagList, mode: TagMergeMode | null): void;
        /**
         * @param mode
         * @param tag
         * @param value
         */
        add_tag_value(mode: TagMergeMode | null, tag: string, value: GObject.Value | any): void;
        get_tag_list(): TagList;
        /**
         * @param mode
         */
        set_tag_merge_mode(mode: TagMergeMode | null): void;
        get_tag_merge_mode(): TagMergeMode;
    }

    export const TagSetter: TagSetterNamespace & {
        new (): TagSetter; // This allows `obj instanceof TagSetter`
    };

    namespace URIHandler {
        /**
         * Interface for implementing URIHandler.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_uri(): string;
            /**
             * @param uri
             * @virtual
             */
            vfunc_set_uri(uri: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface URIHandlerNamespace {
        $gtype: GObject.GType<URIHandler>;
        prototype: URIHandler;
    }
    /**
     * Opaque {@link Gst.URIHandler} structure.
     * @gir-type Interface
     */
    interface URIHandler extends GObject.Object, URIHandler.Interface {
        // Methods

        get_uri_type(): number;
        get_protocols(): string[];
        get_uri(): string;
        /**
         * @param uri
         */
        set_uri(uri: string): boolean;
        /**
         * @param uri
         */
        new_uri(uri: string): void;
    }

    export const URIHandler: URIHandlerNamespace & {
        new (): URIHandler; // This allows `obj instanceof URIHandler`
    };

    /**
     * @gir-type Alias
     */
    type ClockID = unknown;
    /**
     * @gir-type Alias
     */
    type ClockTime = unknown;
    /**
     * @gir-type Alias
     */
    type ClockTimeDiff = unknown;
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

export default Gst;

// END
