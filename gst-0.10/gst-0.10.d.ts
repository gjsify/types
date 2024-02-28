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
    const BASE_TRANSFORM_SINK_NAME: string;
    const BASE_TRANSFORM_SRC_NAME: string;
    const BUFFER_COPY_ALL: int;
    const BUFFER_OFFSET_NONE: int;
    const BUFFER_TRACE_NAME: string;
    const CAN_INLINE: int;
    const CLOCK_ENTRY_TRACE_NAME: string;
    const CLOCK_TIME_NONE: int;
    const DEBUG_BG_MASK: int;
    const DEBUG_FG_MASK: int;
    const DEBUG_FORMAT_MASK: int;
    const DISABLE_ALLOC_TRACE: int;
    const DISABLE_GST_DEBUG: int;
    const DISABLE_LOADSAVE: int;
    const DISABLE_LOADSAVE_REGISTRY: int;
    const DISABLE_PARSE: int;
    const DISABLE_PLUGIN: int;
    const DISABLE_REGISTRY: int;
    const DISABLE_TRACE: int;
    const DISABLE_XML: int;
    const ERROR_SYSTEM: string;
    const EVENT_TRACE_NAME: string;
    const EVENT_TYPE_BOTH: int;
    const EVENT_TYPE_SHIFT: int;
    const FOURCC_FORMAT: string;
    const HAVE_GLIB_2_8: int;
    const HAVE_UNALIGNED_ACCESS: int;
    const INDEX_ID_INVALID: int;
    const LICENSE_UNKNOWN: string;
    const MESSAGE_TRACE_NAME: string;
    const MSECOND: int;
    const M_PI: number;
    const NSECOND: int;
    const PADDING: int;
    const PADDING_LARGE: int;
    const PAD_LINK_CHECK_DEFAULT: int;
    const PARAM_CONTROLLABLE: int;
    const PARAM_MUTABLE_PAUSED: int;
    const PARAM_MUTABLE_PLAYING: int;
    const PARAM_MUTABLE_READY: int;
    const PARAM_USER_SHIFT: int;
    const PTR_FORMAT: string;
    const SECOND: int;
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
    const USECOND: int;
    const VALUE_EQUAL: int;
    const VALUE_GREATER_THAN: int;
    const VALUE_LESS_THAN: int;
    const VALUE_UNORDERED: int;
    const VERSION_MAJOR: int;
    const VERSION_MICRO: int;
    const VERSION_MINOR: int;
    const VERSION_NANO: int;
    function alloc_trace_available(): boolean;
    function alloc_trace_get(name: string): AllocTrace;
    function alloc_trace_live_all(): int;
    function alloc_trace_print_all(): void;
    function alloc_trace_print_live(): void;
    function alloc_trace_set_flags_all(flags: AllocTraceFlags): void;
    function atomic_int_set(value: int): void;
    function caps_from_string(string: string): Caps;
    function caps_load_thyself(parent: libxml2.NodePtr): Caps;
    function child_proxy_child_added(object: Object, child: Object): void;
    function child_proxy_child_removed(object: Object, child: Object): void;
    function child_proxy_get_property(object: Object, name: string, value: GObject.Value): void;
    function child_proxy_lookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): boolean;
    function child_proxy_set_property(object: Object, name: string, value: GObject.Value): void;
    function class_signal_connect(klass: ObjectClass, name: string, func: any, func_data: any): uint;
    function class_signal_emit_by_name(object: Object, name: string, self: libxml2.NodePtr): void;
    function debug_add_log_function(func: LogFunction): void;
    function debug_construct_term_color(colorinfo: uint): string;
    function debug_construct_win_color(colorinfo: uint): int;
    function debug_get_all_categories(): any[];
    function debug_get_default_threshold(): DebugLevel;
    function debug_is_active(): boolean;
    function debug_is_colored(): boolean;
    function debug_level_get_name(level: DebugLevel): string;
    function debug_log_default(
        category: DebugCategory,
        level: DebugLevel,
        file: string,
        _function: string,
        line: int,
        object: GObject.Object,
        message: DebugMessage,
        unused: any,
    ): void;
    function debug_print_stack_trace(): void;
    function debug_remove_log_function(func: LogFunction): uint;
    function debug_remove_log_function_by_data(data: any): uint;
    function debug_set_active(active: boolean): void;
    function debug_set_colored(colored: boolean): void;
    function debug_set_default_threshold(level: DebugLevel): void;
    function debug_set_threshold_for_name(name: string, level: DebugLevel): void;
    function debug_unset_threshold_for_name(name: string): void;
    function default_registry_check_feature_version(
        feature_name: string,
        min_major: uint,
        min_minor: uint,
        min_micro: uint,
    ): boolean;
    function deinit(): void;
    function error_get_message(domain: GLib.Quark, code: int): string;
    function flow_get_name(ret: FlowReturn): string;
    function flow_to_quark(ret: FlowReturn): GLib.Quark;
    function format_get_by_nick(nick: string): Format;
    function format_get_details(format: Format): FormatDefinition;
    function format_get_name(format: Format): string;
    function format_iterate_definitions(): Iterator;
    function format_register(nick: string, description: string): Format;
    function format_to_quark(format: Format): GLib.Quark;
    function formats_contains(formats: Format, format: Format): boolean;
    function implements_interface_cast(from: any, type: GObject.GType): any;
    function implements_interface_check(from: any, type: GObject.GType): boolean;
    function init(argv?: string[] | null): void;
    function init_check(argv: string[]): boolean;
    function init_get_option_group(): GLib.OptionGroup;
    function is_tag_list(p: any): boolean;
    function param_spec_fraction(
        name: string,
        nick: string,
        blurb: string,
        min_num: int,
        min_denom: int,
        max_num: int,
        max_denom: int,
        default_num: int,
        default_denom: int,
        flags: GObject.ParamFlags,
    ): GObject.ParamSpec;
    function param_spec_mini_object(
        name: string,
        nick: string,
        blurb: string,
        object_type: GObject.GType,
        flags: GObject.ParamFlags,
    ): GObject.ParamSpec;
    function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Element;
    function parse_bin_from_description_full(
        bin_description: string,
        ghost_unlinked_pads: boolean,
        context: ParseContext,
        flags: ParseFlags,
    ): Element;
    function parse_launch(pipeline_description: string): Element;
    function parse_launch_full(pipeline_description: string, context: ParseContext, flags: ParseFlags): Element;
    function parse_launchv(argv: string[]): Element;
    function parse_launchv_full(argv: string[], context: ParseContext, flags: ParseFlags): Element;
    function print_element_args(buf: GLib.String, indent: int, element: Element): void;
    function print_pad_caps(buf: GLib.String, indent: int, pad: Pad): void;
    function segtrap_is_enabled(): boolean;
    function segtrap_set_enabled(enabled: boolean): void;
    function structure_empty_new(name: string): Structure;
    function structure_from_string(string: string, end: string[]): Structure;
    function structure_id_empty_new(quark: GLib.Quark): Structure;
    function tag_exists(tag: string): boolean;
    function tag_get_description(tag: string): string;
    function tag_get_flag(tag: string): TagFlag;
    function tag_get_nick(tag: string): string;
    function tag_get_type(tag: string): GObject.GType;
    function tag_is_fixed(tag: string): boolean;
    function tag_list_copy_value(dest: GObject.Value, list: TagList, tag: string): boolean;
    function tag_merge_strings_with_comma(dest: GObject.Value, src: GObject.Value): void;
    function tag_merge_use_first(dest: GObject.Value, src: GObject.Value): void;
    function tag_register(
        name: string,
        flag: TagFlag,
        type: GObject.GType,
        nick: string,
        blurb: string,
        func: TagMergeFunc,
    ): void;
    function trace_read_tsc(): void;
    function type_find_helper(src: Pad, size: uint64): Caps;
    function type_find_helper_for_buffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps;
    function type_find_helper_for_extension(obj: Object, extension: string): Caps;
    function type_find_helper_get_range(
        obj: Object,
        func: TypeFindHelperGetRangeFunction,
        size: uint64,
        prob: TypeFindProbability,
    ): Caps;
    function type_find_helper_get_range_ext(
        obj: Object,
        func: TypeFindHelperGetRangeFunction,
        size: uint64,
        extension: string,
        prob: TypeFindProbability,
    ): Caps;
    function type_find_register(
        plugin: Plugin,
        name: string,
        rank: uint,
        func: TypeFindFunction,
        extensions: string[],
        possible_caps: Caps,
        data: any,
    ): boolean;
    function type_register_static_full(
        parent_type: GObject.GType,
        type_name: string,
        class_size: uint,
        base_init: GObject.BaseInitFunc,
        base_finalize: GObject.BaseFinalizeFunc,
        class_init: GObject.ClassInitFunc,
        class_finalize: GObject.ClassFinalizeFunc,
        instance_size: uint,
        n_preallocs: uint16,
        instance_init: GObject.InstanceInitFunc,
        value_table: GObject.TypeValueTable,
        flags: GObject.TypeFlags,
    ): GObject.GType;
    function update_registry(): boolean;
    function uri_construct(protocol: string, location: string): string;
    function uri_get_location(uri: string): string;
    function uri_get_protocol(uri: string): string;
    function uri_has_protocol(uri: string, protocol: string): boolean;
    function uri_is_valid(uri: string): boolean;
    function uri_protocol_is_supported(type: URIType, protocol: string): boolean;
    function uri_protocol_is_valid(protocol: string): boolean;
    function util_array_binary_search(
        array: any,
        num_elements: uint,
        element_size: number,
        search_func: GLib.CompareDataFunc,
        mode: SearchMode,
        search_data: any,
        user_data: any,
    ): any;
    function util_double_to_fraction(src: number): void;
    function util_dump_mem(mem: uint8[], size: uint): void;
    function util_fraction_add(a_n: int, a_d: int, b_n: int, b_d: int): boolean;
    function util_fraction_multiply(a_n: int, a_d: int, b_n: int, b_d: int): boolean;
    function util_fraction_to_double(src_n: int, src_d: int): void;
    function util_gdouble_to_guint64(value: number): uint64;
    function util_get_timestamp(): ClockTime;
    function util_greatest_common_divisor(a: int, b: int): int;
    function util_guint64_to_gdouble(value: uint64): number;
    function util_seqnum_compare(s1: number, s2: number): number;
    function util_seqnum_next(): number;
    function util_set_object_arg(object: GObject.Object, name: string, value: string): void;
    function util_set_value_from_string(value: GObject.Value, value_str: string): void;
    function util_uint64_scale(val: uint64, num: uint64, denom: uint64): uint64;
    function util_uint64_scale_ceil(val: uint64, num: uint64, denom: uint64): uint64;
    function util_uint64_scale_int(val: uint64, num: int, denom: int): uint64;
    function util_uint64_scale_int_ceil(val: uint64, num: int, denom: int): uint64;
    function util_uint64_scale_int_round(val: uint64, num: int, denom: int): uint64;
    function util_uint64_scale_round(val: uint64, num: uint64, denom: uint64): uint64;
    function value_array_append_value(value: GObject.Value, append_value: GObject.Value): void;
    function value_array_get_size(value: GObject.Value): uint;
    function value_array_get_value(value: GObject.Value, index: uint): GObject.Value;
    function value_array_prepend_value(value: GObject.Value, prepend_value: GObject.Value): void;
    function value_can_compare(value1: GObject.Value, value2: GObject.Value): boolean;
    function value_can_intersect(value1: GObject.Value, value2: GObject.Value): boolean;
    function value_can_subtract(minuend: GObject.Value, subtrahend: GObject.Value): boolean;
    function value_can_union(value1: GObject.Value, value2: GObject.Value): boolean;
    function value_compare(value1: GObject.Value, value2: GObject.Value): int;
    function value_deserialize(dest: GObject.Value, src: string): boolean;
    function value_dup_mini_object(value: GObject.Value): MiniObject;
    function value_fraction_multiply(product: GObject.Value, factor1: GObject.Value, factor2: GObject.Value): boolean;
    function value_fraction_subtract(dest: GObject.Value, minuend: GObject.Value, subtrahend: GObject.Value): boolean;
    function value_get_caps(value: GObject.Value): Caps;
    function value_get_date(value: GObject.Value): GLib.Date;
    function value_get_double_range_max(value: GObject.Value): number;
    function value_get_double_range_min(value: GObject.Value): number;
    function value_get_fourcc(value: GObject.Value): number;
    function value_get_fraction_denominator(value: GObject.Value): int;
    function value_get_fraction_numerator(value: GObject.Value): int;
    function value_get_fraction_range_max(value: GObject.Value): GObject.Value;
    function value_get_fraction_range_min(value: GObject.Value): GObject.Value;
    function value_get_int_range_max(value: GObject.Value): int;
    function value_get_int_range_min(value: GObject.Value): int;
    function value_get_mini_object(value: GObject.Value): MiniObject;
    function value_get_structure(value: GObject.Value): Structure;
    function value_init_and_copy(dest: GObject.Value, src: GObject.Value): void;
    function value_intersect(dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): boolean;
    function value_is_fixed(value: GObject.Value): boolean;
    function value_list_append_value(value: GObject.Value, append_value: GObject.Value): void;
    function value_list_concat(dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): void;
    function value_list_get_size(value: GObject.Value): uint;
    function value_list_get_value(value: GObject.Value, index: uint): GObject.Value;
    function value_list_prepend_value(value: GObject.Value, prepend_value: GObject.Value): void;
    function value_register(table: ValueTable): void;
    function value_register_intersect_func(type1: GObject.GType, type2: GObject.GType, func: ValueIntersectFunc): void;
    function value_register_subtract_func(
        minuend_type: GObject.GType,
        subtrahend_type: GObject.GType,
        func: ValueSubtractFunc,
    ): void;
    function value_register_union_func(type1: GObject.GType, type2: GObject.GType, func: ValueUnionFunc): void;
    function value_serialize(value: GObject.Value): string;
    function value_set_caps(value: GObject.Value, caps: Caps): void;
    function value_set_date(value: GObject.Value, date: GLib.Date): void;
    function value_set_double_range(value: GObject.Value, start: number, end: number): void;
    function value_set_fourcc(value: GObject.Value, fourcc: number): void;
    function value_set_fraction(value: GObject.Value, numerator: int, denominator: int): void;
    function value_set_fraction_range(value: GObject.Value, start: GObject.Value, end: GObject.Value): void;
    function value_set_fraction_range_full(
        value: GObject.Value,
        numerator_start: int,
        denominator_start: int,
        numerator_end: int,
        denominator_end: int,
    ): void;
    function value_set_int_range(value: GObject.Value, start: int, end: int): void;
    function value_set_mini_object(value: GObject.Value, mini_object: MiniObject): void;
    function value_set_structure(value: GObject.Value, structure: Structure): void;
    function value_subtract(dest: GObject.Value, minuend: GObject.Value, subtrahend: GObject.Value): boolean;
    function value_take_mini_object(value: GObject.Value, mini_object: MiniObject): void;
    function value_union(dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): boolean;
    function version(): void;
    function version_string(): string;
    interface BufferListDoFunction {
        (buffer: Buffer): Buffer;
    }
    interface BufferListFunc {
        (buffer: Buffer, group: uint, idx: uint): BufferListItem;
    }
    interface BusFunc {
        (bus: Bus, message: Message, data: any): boolean;
    }
    interface BusSyncHandler {
        (bus: Bus, message: Message, data: any): BusSyncReply;
    }
    interface ClockCallback {
        (clock: Clock, time: ClockTime, id: ClockID): boolean;
    }
    interface CollectDataDestroyNotify {
        (data: CollectData): void;
    }
    interface CollectPadsClipFunction {
        (pads: CollectPads, data: CollectData, buffer: Buffer): Buffer;
    }
    interface CollectPadsFunction {
        (pads: CollectPads): FlowReturn;
    }
    interface CopyFunction {
        (object: any): any;
    }
    interface DataQueueCheckFullFunction {
        (queue: DataQueue, visible: uint, bytes: uint, time: uint64, checkdata: any): boolean;
    }
    interface DataQueueEmptyCallback {
        (queue: DataQueue, checkdata: any): void;
    }
    interface DataQueueFullCallback {
        (queue: DataQueue, checkdata: any): void;
    }
    interface DebugFuncPtr {
        (): void;
    }
    interface FilterFunc {
        (obj: any): boolean;
    }
    interface IndexFilter {
        (index: Index, entry: IndexEntry): boolean;
    }
    interface IndexResolver {
        (index: Index, writer: Object, writer_string: string[]): boolean;
    }
    interface IteratorDisposeFunction {
        (owner: any): void;
    }
    interface IteratorFoldFunction {
        (item: any, ret: GObject.Value): boolean;
    }
    interface IteratorFreeFunction {
        (it: Iterator): void;
    }
    interface IteratorItemFunction {
        (it: Iterator, item: any): IteratorItem;
    }
    interface IteratorNextFunction {
        (it: Iterator, result: any): IteratorResult;
    }
    interface IteratorResyncFunction {
        (it: Iterator): void;
    }
    interface LogFunction<A = GObject.Object> {
        (
            category: DebugCategory,
            level: DebugLevel,
            file: string,
            _function: string,
            line: int,
            object: A,
            message: DebugMessage,
            data: any,
        ): void;
    }
    interface MiniObjectCopyFunction {
        (obj: MiniObject): MiniObject;
    }
    interface MiniObjectFinalizeFunction {
        (obj: MiniObject): void;
    }
    interface PadAcceptCapsFunction {
        (pad: Pad, caps: Caps): boolean;
    }
    interface PadActivateFunction {
        (pad: Pad): boolean;
    }
    interface PadActivateModeFunction {
        (pad: Pad, active: boolean): boolean;
    }
    interface PadBlockCallback {
        (pad: Pad, blocked: boolean): void;
    }
    interface PadBufferAllocFunction {
        (pad: Pad, offset: uint64, size: uint, caps: Caps, buf: Buffer): FlowReturn;
    }
    interface PadChainFunction {
        (pad: Pad, buffer: Buffer): FlowReturn;
    }
    interface PadChainListFunction {
        (pad: Pad, list: BufferList): FlowReturn;
    }
    interface PadCheckGetRangeFunction {
        (pad: Pad): boolean;
    }
    interface PadDispatcherFunction {
        (pad: Pad, data: any): boolean;
    }
    interface PadEventFunction {
        (pad: Pad, event: Event): boolean;
    }
    interface PadFixateCapsFunction {
        (pad: Pad, caps: Caps): void;
    }
    interface PadGetCapsFunction {
        (pad: Pad): Caps;
    }
    interface PadGetRangeFunction {
        (pad: Pad, offset: uint64, length: uint, buffer: Buffer): FlowReturn;
    }
    interface PadIntLinkFunction {
        (pad: Pad): Pad[];
    }
    interface PadIterIntLinkFunction {
        (pad: Pad): Iterator;
    }
    interface PadLinkFunction {
        (pad: Pad, peer: Pad): PadLinkReturn;
    }
    interface PadQueryFunction {
        (pad: Pad, query: Query): boolean;
    }
    interface PadQueryTypeFunction {
        (pad: Pad): QueryType;
    }
    interface PadSetCapsFunction {
        (pad: Pad, caps: Caps): boolean;
    }
    interface PadUnlinkFunction {
        (pad: Pad): void;
    }
    interface PluginFeatureFilter {
        (feature: PluginFeature): boolean;
    }
    interface PluginFilter {
        (plugin: Plugin): boolean;
    }
    interface PluginInitFullFunc {
        (plugin: Plugin): boolean;
    }
    interface PluginInitFunc {
        (plugin: Plugin): boolean;
    }
    interface StructureForeachFunc {
        (field_id: GLib.Quark, value: GObject.Value): boolean;
    }
    interface StructureMapFunc {
        (field_id: GLib.Quark, value: GObject.Value): boolean;
    }
    interface TagForeachFunc {
        (list: TagList, tag: string): void;
    }
    interface TagMergeFunc {
        (dest: GObject.Value, src: GObject.Value): void;
    }
    interface TaskFunction {
        (data: any): void;
    }
    interface TaskPoolFunction {
        (data: any): void;
    }
    interface TypeFindFunction {
        (find: TypeFind, data: any): void;
    }
    interface TypeFindHelperGetRangeFunction {
        (obj: Object, offset: uint64, length: uint, buffer: Buffer): FlowReturn;
    }
    interface ValueCompareFunc {
        (value1: GObject.Value, value2: GObject.Value): int;
    }
    interface ValueDeserializeFunc {
        (dest: GObject.Value, s: string): boolean;
    }
    interface ValueIntersectFunc {
        (dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): boolean;
    }
    interface ValueSerializeFunc {
        (value1: GObject.Value): string;
    }
    interface ValueSubtractFunc {
        (dest: GObject.Value, minuend: GObject.Value, subtrahend: GObject.Value): boolean;
    }
    interface ValueUnionFunc {
        (dest: GObject.Value, value1: GObject.Value, value2: GObject.Value): boolean;
    }
    type Date = object | null;
    type GError = object | null;
    type TagList = unknown;
    /**
     * Flags indicating which tracing feature to enable.
     */
    enum AllocTraceFlags {
        LIVE,
        MEM_LIVE,
    }
    /**
     * Flags for an association entry.
     */
    enum AssocFlags {
        NONE,
        KEY_UNIT,
        DELTA_UNIT,
        LAST,
    }
    /**
     * The #GstElement flags that a basesrc element may have.
     */
    enum BaseSrcFlags {
        STARTED,
        FLAG_LAST,
    }
    /**
     * GstBinFlags are a set of flags specific to bins. Most are set/used
     * internally. They can be checked using the GST_OBJECT_FLAG_IS_SET () macro,
     * and (un)set using GST_OBJECT_FLAG_SET () and GST_OBJECT_FLAG_UNSET ().
     */
    enum BinFlags {
        LAST,
    }
    /**
     * A set of flags that can be provided to the gst_buffer_copy_metadata()
     * function to specify which metadata fields should be copied.
     */
    enum BufferCopyFlags {
        FLAGS,
        TIMESTAMPS,
        CAPS,
    }
    /**
     * A set of buffer flags used to describe properties of a #GstBuffer.
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
     */
    enum BusFlags {
        FLUSHING,
        FLAG_LAST,
    }
    /**
     * Extra flags for a caps.
     */
    enum CapsFlags {
        ANY,
    }
    /**
     * The capabilities of this clock
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
     */
    enum EventTypeFlags {
        UPSTREAM,
        DOWNSTREAM,
        SERIALIZED,
    }
    /**
     * Flags for this index
     */
    enum IndexFlags {
        WRITABLE,
        READABLE,
        FLAG_LAST,
    }
    /**
     * The different message types that are available.
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
     */
    enum MiniObjectFlags {
        READONLY,
        LAST,
    }
    /**
     * The standard flags that an gstobject may have.
     */
    enum ObjectFlags {
        DISPOSING,
        FLOATING,
        FLAG_LAST,
    }
    /**
     * Pad state flags
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
     */
    enum PadLinkCheck {
        NOTHING,
        HIERARCHY,
        TEMPLATE_CAPS,
        CAPS,
    }
    /**
     * Flags for the padtemplate
     */
    enum PadTemplateFlags {
        FIXED,
        FLAG_LAST,
    }
    /**
     * Parsing options.
     */
    enum ParseFlags {
        NONE,
        FATAL_ERRORS,
    }
    /**
     * Pipeline flags
     */
    enum PipelineFlags {
        FIXED_CLOCK,
        LAST,
    }
    /**
     * Flags used in connection with gst_plugin_add_dependency().
     */
    enum PluginDependencyFlags {
        NONE,
        RECURSE,
        PATHS_ARE_DEFAULT_ONLY,
        FILE_NAME_IS_SUFFIX,
    }
    /**
     * The plugin loading state
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
     */
    enum SeekFlags {
        NONE,
        FLUSH,
        ACCURATE,
        KEY_UNIT,
        SEGMENT,
        SKIP,
    }
    module Adapter {
        // Constructor properties interface
    }

    /**
     * The opaque #GstAdapter data structure.
     */
    class Adapter extends GObject.Object {
        // Own fields of Gst-0.10.Adapter

        object: GObject.Object;
        buflist: any[];
        size: uint;
        skip: uint;
        assembled_data: any;
        assembled_size: uint;
        assembled_len: uint;
        buflist_end: any[];

        // Constructors of Gst-0.10.Adapter

        static ['new'](): Adapter;

        // Owm methods of Gst-0.10.Adapter

        clear(): void;
        push(buf: Buffer): void;
        peek(size: uint): uint8[];
        copy(dest: uint8[], offset: uint, size: uint): void;
        flush(flush: uint): void;
        take(nbytes: uint): uint8[];
        take_buffer(nbytes: uint): Buffer;
        available(): uint;
        available_fast(): uint;
        prev_timestamp(): ClockTime;
        masked_scan_uint32(mask: number, pattern: number, offset: uint, size: uint): uint;
        masked_scan_uint32_peek(mask: number, pattern: number, offset: uint, size: uint): uint;
    }

    module BaseSink {
        // Constructor properties interface
    }

    /**
     * The opaque #GstBaseSink data structure.
     */
    abstract class BaseSink extends Element {
        // Own properties of Gst-0.10.BaseSink

        async: boolean;
        blocksize: uint;
        enable_last_buffer: boolean;
        enableLastBuffer: boolean;
        readonly last_buffer: Buffer;
        readonly lastBuffer: Buffer;
        max_lateness: int64;
        maxLateness: int64;
        preroll_queue_len: uint;
        prerollQueueLen: uint;
        qos: boolean;
        render_delay: uint64;
        renderDelay: uint64;
        sync: boolean;
        ts_offset: int64;
        tsOffset: int64;

        // Own fields of Gst-0.10.BaseSink

        element: Element;
        sinkpad: Pad;
        pad_mode: ActivateMode;
        offset: uint64;
        can_activate_pull: boolean;
        can_activate_push: boolean;
        preroll_queue: GLib.Queue;
        preroll_queue_max_len: int;
        preroll_queued: int;
        buffers_queued: int;
        events_queued: int;
        eos: boolean;
        eos_queued: boolean;
        need_preroll: boolean;
        have_preroll: boolean;
        playing_async: boolean;
        have_newsegment: boolean;
        clock_id: ClockID;
        end_time: ClockTime;
        flushing: boolean;

        // Owm methods of Gst-0.10.BaseSink

        do_preroll(obj: MiniObject): FlowReturn;
        wait_preroll(): FlowReturn;
        set_sync(sync: boolean): void;
        get_sync(): boolean;
        set_max_lateness(max_lateness: int64): void;
        get_max_lateness(): int64;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_async_enabled(enabled: boolean): void;
        is_async_enabled(): boolean;
        set_ts_offset(offset: ClockTimeDiff): void;
        get_ts_offset(): ClockTimeDiff;
        get_last_buffer(): Buffer;
        set_last_buffer_enabled(enable: boolean): void;
        is_last_buffer_enabled(): boolean;
        query_latency(min_latency: ClockTime, max_latency: ClockTime): boolean;
        get_latency(): ClockTime;
        set_render_delay(delay: ClockTime): void;
        get_render_delay(): ClockTime;
        set_blocksize(blocksize: uint): void;
        get_blocksize(): uint;
        wait_clock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn;
        wait_eos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn;
    }

    module BaseSrc {
        // Constructor properties interface
    }

    /**
     * The opaque #GstBaseSrc data structure.
     */
    abstract class BaseSrc extends Element {
        // Own properties of Gst-0.10.BaseSrc

        blocksize: ulong;
        do_timestamp: boolean;
        doTimestamp: boolean;
        num_buffers: int;
        numBuffers: int;
        typefind: boolean;

        // Own fields of Gst-0.10.BaseSrc

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
        offset: uint64;
        size: uint64;
        num_buffers_left: int;

        // Owm methods of Gst-0.10.BaseSrc

        wait_playing(): FlowReturn;
        set_live(live: boolean): void;
        is_live(): boolean;
        set_format(format: Format): void;
        query_latency(min_latency: ClockTime, max_latency: ClockTime): boolean;
        set_blocksize(blocksize: ulong): void;
        get_blocksize(): ulong;
        set_do_timestamp(timestamp: boolean): void;
        get_do_timestamp(): boolean;
        new_seamless_segment(start: int64, stop: int64, position: int64): boolean;
    }

    module BaseTransform {
        // Constructor properties interface
    }

    /**
     * The opaque #GstBaseTransform data structure.
     */
    abstract class BaseTransform extends Element {
        // Own properties of Gst-0.10.BaseTransform

        qos: boolean;

        // Own fields of Gst-0.10.BaseTransform

        element: Element;
        sinkpad: Pad;
        srcpad: Pad;
        passthrough: boolean;
        always_in_place: boolean;
        cache_caps1_size: uint;
        cache_caps2_size: uint;
        have_same_caps: boolean;
        delay_configure: boolean;
        pending_configure: boolean;
        negotiated: boolean;
        have_newsegment: boolean;

        // Owm methods of Gst-0.10.BaseTransform

        set_passthrough(passthrough: boolean): void;
        is_passthrough(): boolean;
        set_in_place(in_place: boolean): void;
        is_in_place(): boolean;
        update_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_gap_aware(gap_aware: boolean): void;
        suggest(caps: Caps, size: uint): void;
        reconfigure(): void;
    }

    module Bin {
        // Signal callback interfaces

        interface DoLatency {
            (): boolean;
        }

        interface ElementAdded {
            (object: Element): void;
        }

        interface ElementRemoved {
            (object: Element): void;
        }

        // Constructor properties interface
    }

    /**
     * The GstBin base class. Subclasses can access these fields provided
     * the LOCK is taken.
     */
    class Bin extends Element {
        // Own properties of Gst-0.10.Bin

        async_handling: boolean;
        asyncHandling: boolean;

        // Own fields of Gst-0.10.Bin

        element: Element;
        numchildren: int;
        children: any[];
        children_cookie: number;
        child_bus: Bus;
        messages: any[];
        polling: boolean;
        state_dirty: boolean;
        clock_dirty: boolean;
        provided_clock: Clock;
        clock_provider: Element;

        // Constructors of Gst-0.10.Bin

        static ['new'](name: string): Bin;

        // Owm methods of Gst-0.10.Bin

        add(element: Element): boolean;
        remove(element: Element): boolean;
        get_by_name(name: string): Element;
        get_by_name_recurse_up(name: string): Element;
        get_by_interface(iface: GObject.GType): Element;
        iterate_elements(): Iterator;
        iterate_sorted(): Iterator;
        iterate_recurse(): Iterator;
        iterate_sinks(): Iterator;
        iterate_sources(): Iterator;
        iterate_all_by_interface(iface: GObject.GType): Iterator;
        recalculate_latency(): boolean;
        find_unlinked_pad(direction: PadDirection): Pad;
        find_unconnected_pad(direction: PadDirection): Pad;
    }

    /**
     * The structure of a #GstBuffer. Use the associated macros to access the public
     * variables.
     */
    class Buffer extends MiniObject {
        // Own fields of Gst-0.10.Buffer

        mini_object: MiniObject;
        data: any;
        size: uint;
        timestamp: ClockTime;
        duration: ClockTime;
        offset: uint64;
        offset_end: uint64;
        malloc_data: any;
        free_func: GLib.FreeFunc;

        // Constructors of Gst-0.10.Buffer

        static ['new'](): Buffer;

        static new_and_alloc(size: uint): Buffer;

        // Owm methods of Gst-0.10.Buffer

        static try_new_and_alloc(size: uint): Buffer;

        // Owm methods of Gst-0.10.Buffer

        copy_metadata(src: Buffer, flags: BufferCopyFlags): void;
        is_metadata_writable(): boolean;
        make_metadata_writable(): Buffer;
        get_caps(): Caps;
        set_caps(caps: Caps): void;
        create_sub(offset: uint, size: uint): Buffer;
        is_span_fast(buf2: Buffer): boolean;
        span(offset: number, buf2: Buffer, len: number): Buffer;
        merge(buf2: Buffer): Buffer;
        join(buf2: Buffer): Buffer;
        stamp(src: Buffer): void;
    }

    class BufferList extends MiniObject {
        // Constructors of Gst-0.10.BufferList

        static ['new'](): BufferList;

        // Owm methods of Gst-0.10.BufferList

        n_groups(): uint;
        foreach(func: BufferListFunc, user_data: any): void;
        get(group: uint, idx: uint): Buffer;
        iterate(): BufferListIterator;
    }

    module Bus {
        // Signal callback interfaces

        interface Message {
            (object: Message): void;
        }

        interface SyncMessage {
            (object: Message): void;
        }

        // Constructor properties interface
    }

    /**
     * The opaque #GstBus data structure.
     */
    class Bus extends Object {
        // Own fields of Gst-0.10.Bus

        object: Object;
        queue: GLib.Queue;
        sync_handler: BusSyncHandler;
        sync_handler_data: any;
        signal_watch_id: uint;
        num_signal_watchers: uint;

        // Constructors of Gst-0.10.Bus

        static ['new'](): Bus;

        // Owm methods of Gst-0.10.Bus

        post(message: Message): boolean;
        have_pending(): boolean;
        peek(): Message;
        pop(): Message;
        pop_filtered(types: MessageType): Message;
        timed_pop(timeout: ClockTime): Message;
        timed_pop_filtered(timeout: ClockTime, types: MessageType): Message;
        set_flushing(flushing: boolean): void;
        set_sync_handler(func: BusSyncHandler, data: any): void;
        create_watch(): GLib.Source;
        add_watch_full(priority: int, func: BusFunc, user_data: any): uint;
        add_watch(func: BusFunc, user_data: any): uint;
        poll(events: MessageType, timeout: ClockTimeDiff): Message;
        async_signal_func(message: Message, data: any): boolean;
        sync_signal_handler(message: Message, data: any): BusSyncReply;
        add_signal_watch(): void;
        add_signal_watch_full(priority: int): void;
        remove_signal_watch(): void;
        enable_sync_message_emission(): void;
        disable_sync_message_emission(): void;
    }

    module Clock {
        // Constructor properties interface
    }

    /**
     * #GstClock base structure. The values of this structure are
     * protected for subclasses, use the methods to use the #GstClock.
     */
    class Clock extends Object {
        // Own properties of Gst-0.10.Clock

        stats: boolean;
        timeout: uint64;
        window_size: int;
        windowSize: int;
        window_threshold: int;
        windowThreshold: int;

        // Own fields of Gst-0.10.Clock

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
        time_index: int;
        times: ClockTime;
        clockid: ClockID;

        // Owm methods of Gst-0.10.Clock

        static id_ref(id: ClockID): ClockID;
        static id_unref(id: ClockID): void;
        static id_compare_func(id1: any, id2: any): int;
        static id_get_time(id: ClockID): ClockTime;
        static id_wait(id: ClockID, jitter: ClockTimeDiff): ClockReturn;
        static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn;
        static id_wait_async_full(id: ClockID, func: ClockCallback): ClockReturn;
        static id_unschedule(id: ClockID): void;

        // Owm methods of Gst-0.10.Clock

        set_resolution(resolution: ClockTime): ClockTime;
        get_resolution(): ClockTime;
        get_time(): ClockTime;
        set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        set_master(master: Clock): boolean;
        get_master(): Clock;
        add_observation(slave: ClockTime, master: ClockTime): boolean;
        get_internal_time(): ClockTime;
        adjust_unlocked(internal: ClockTime): ClockTime;
        unadjust_unlocked(external: ClockTime): ClockTime;
        new_single_shot_id(time: ClockTime): ClockID;
        new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID;
    }

    module CollectPads {
        // Constructor properties interface
    }

    /**
     * Collectpads object.
     * Note that `data` doesn't contain the complete #GstCollectData list
     * at all times and should not be used for iterating them.
     */
    class CollectPads extends Object {
        // Own fields of Gst-0.10.CollectPads

        object: Object;
        data: any[];
        cookie: number;
        func: CollectPadsFunction;
        user_data: any;
        numpads: uint;
        queuedpads: uint;
        eospads: uint;
        started: boolean;

        // Constructors of Gst-0.10.CollectPads

        static ['new'](): CollectPads;

        // Owm methods of Gst-0.10.CollectPads

        set_function(func: CollectPadsFunction, user_data: any): void;
        set_clip_function(clipfunc: CollectPadsClipFunction, user_data: any): void;
        add_pad(pad: Pad, size: uint): CollectData;
        add_pad_full(pad: Pad, size: uint, destroy_notify: CollectDataDestroyNotify): CollectData;
        remove_pad(pad: Pad): boolean;
        is_active(pad: Pad): boolean;
        collect(): FlowReturn;
        collect_range(offset: uint64, length: uint): FlowReturn;
        start(): void;
        stop(): void;
        set_flushing(flushing: boolean): void;
        peek(data: CollectData): Buffer;
        pop(data: CollectData): Buffer;
        available(): uint;
        read(data: CollectData, size: uint): uint;
        read_buffer(data: CollectData, size: uint): Buffer;
        take_buffer(data: CollectData, size: uint): Buffer;
        flush(data: CollectData, size: uint): uint;
    }

    module DataQueue {
        // Signal callback interfaces

        interface Empty {
            (): void;
        }

        interface Full {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Opaque #GstDataQueue structure.
     */
    class DataQueue extends GObject.Object {
        // Own properties of Gst-0.10.DataQueue

        readonly current_level_bytes: uint;
        readonly currentLevelBytes: uint;
        readonly current_level_time: uint64;
        readonly currentLevelTime: uint64;
        readonly current_level_visible: uint;
        readonly currentLevelVisible: uint;

        // Own fields of Gst-0.10.DataQueue

        object: GObject.Object;
        queue: GLib.Queue;
        checkfull: DataQueueCheckFullFunction;
        checkdata: any;
        flushing: boolean;
        fullcallback: DataQueueFullCallback;
        emptycallback: DataQueueEmptyCallback;

        // Constructors of Gst-0.10.DataQueue

        static ['new'](checkfull: DataQueueCheckFullFunction): DataQueue;

        static new_full(
            checkfull: DataQueueCheckFullFunction,
            fullcallback: DataQueueFullCallback,
            emptycallback: DataQueueEmptyCallback,
        ): DataQueue;

        // Owm methods of Gst-0.10.DataQueue

        push(item: DataQueueItem): boolean;
        pop(item: DataQueueItem): boolean;
        flush(): void;
        set_flushing(flushing: boolean): void;
        drop_head(type: GObject.GType): boolean;
        is_full(): boolean;
        is_empty(): boolean;
        get_level(level: DataQueueSize): void;
        limits_changed(): void;
    }

    module Element {
        // Signal callback interfaces

        interface NoMorePads {
            (): void;
        }

        interface PadAdded {
            (object: Pad): void;
        }

        interface PadRemoved {
            (object: Pad): void;
        }

        // Constructor properties interface
    }

    /**
     * GStreamer element abstract base class.
     */
    abstract class Element extends Object {
        // Own fields of Gst-0.10.Element

        object: Object;
        state_lock: GLib.StaticRecMutex;
        state_cookie: number;
        current_state: State;
        next_state: State;
        pending_state: State;
        last_return: StateChangeReturn;
        bus: Bus;
        clock: Clock;
        base_time: ClockTimeDiff;
        numpads: uint16;
        pads: any[];
        numsrcpads: uint16;
        srcpads: any[];
        numsinkpads: uint16;
        sinkpads: any[];
        pads_cookie: number;

        // Owm methods of Gst-0.10.Element

        static register(plugin: Plugin, name: string, rank: uint, type: GObject.GType): boolean;
        static make_from_uri(type: URIType, uri: string, elementname: string): Element;
        static state_get_name(state: State): string;
        static state_change_return_get_name(state_ret: StateChangeReturn): string;
        static add_pad_template(templ: PadTemplate): void;
        static get_pad_template(name: string): PadTemplate;
        static set_details(details: ElementDetails): void;
        static set_details_simple(longname: string, classification: string, description: string, author: string): void;

        // Owm methods of Gst-0.10.Element

        requires_clock(): boolean;
        provides_clock(): boolean;
        provide_clock(): Clock;
        get_clock(): Clock;
        set_clock(clock: Clock): boolean;
        set_base_time(time: ClockTime): void;
        get_base_time(): ClockTime;
        set_start_time(time: ClockTime): void;
        get_start_time(): ClockTime;
        is_indexable(): boolean;
        set_index(index: Index): void;
        get_index(): Index;
        set_bus(bus: Bus): void;
        get_bus(): Bus;
        add_pad(pad: Pad): boolean;
        remove_pad(pad: Pad): boolean;
        no_more_pads(): void;
        get_pad(name: string): Pad;
        get_static_pad(name: string): Pad;
        get_request_pad(name: string): Pad;
        release_request_pad(pad: Pad): void;
        iterate_pads(): Iterator;
        iterate_src_pads(): Iterator;
        iterate_sink_pads(): Iterator;
        send_event(event: Event): boolean;
        seek(
            rate: number,
            format: Format,
            flags: SeekFlags,
            cur_type: SeekType,
            cur: int64,
            stop_type: SeekType,
            stop: int64,
        ): boolean;
        get_query_types(): QueryType;
        query(query: Query): boolean;
        post_message(message: Message): boolean;
        message_full(
            type: MessageType,
            domain: GLib.Quark,
            code: int,
            text: string,
            debug: string,
            file: string,
            _function: string,
            line: int,
        ): void;
        is_locked_state(): boolean;
        set_locked_state(locked_state: boolean): boolean;
        sync_state_with_parent(): boolean;
        get_state(timeout: ClockTime): StateChangeReturn;
        set_state(state: State): StateChangeReturn;
        abort_state(): void;
        change_state(transition: StateChange): StateChangeReturn;
        continue_state(ret: StateChangeReturn): StateChangeReturn;
        lost_state(): void;
        lost_state_full(new_base_time: boolean): void;
        get_factory(): ElementFactory;
        implements_interface(iface_type: GObject.GType): boolean;
        create_all_pads(): void;
        get_compatible_pad(pad: Pad, caps: Caps): Pad;
        get_compatible_pad_template(compattempl: PadTemplate): PadTemplate;
        link(dest: Element): boolean;
        link_filtered(dest: Element, filter: Caps): boolean;
        unlink(dest: Element): void;
        link_pads(srcpadname: string, dest: Element, destpadname: string): boolean;
        link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean;
        unlink_pads(srcpadname: string, dest: Element, destpadname: string): void;
        link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean;
        seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: int64): boolean;
        query_position(format: Format): boolean;
        query_duration(format: Format): boolean;
        query_convert(src_format: Format, src_val: int64, dest_format: Format): boolean;
        found_tags_for_pad(pad: Pad, list: TagList): void;
        found_tags(list: TagList): void;
    }

    module ElementFactory {
        // Constructor properties interface
    }

    /**
     * The opaque #GstElementFactory data structure.
     */
    class ElementFactory extends PluginFeature {
        // Own fields of Gst-0.10.ElementFactory

        type: GObject.GType;
        details: ElementDetails;
        staticpadtemplates: any[];
        numpadtemplates: uint;
        uri_type: uint;
        uri_protocols: string;
        interfaces: any[];

        // Owm methods of Gst-0.10.ElementFactory

        static find(name: string): ElementFactory;
        static make(factoryname: string, name: string): Element;

        // Owm methods of Gst-0.10.ElementFactory

        get_element_type(): GObject.GType;
        get_longname(): string;
        get_klass(): string;
        get_description(): string;
        get_author(): string;
        get_num_pad_templates(): uint;
        get_uri_type(): int;
        get_uri_protocols(): string[];
        has_interface(interfacename: string): boolean;
        create(name: string): Element;
        can_src_caps(caps: Caps): boolean;
        can_sink_caps(caps: Caps): boolean;
    }

    /**
     * A #GstEvent.
     */
    class Event extends MiniObject {
        // Own fields of Gst-0.10.Event

        mini_object: MiniObject;
        type: EventType;
        timestamp: uint64;
        src: Object;

        // Constructors of Gst-0.10.Event

        static new_custom(type: EventType, structure: Structure): Event;

        static new_flush_start(): Event;

        static new_flush_stop(): Event;

        static new_eos(): Event;

        static new_new_segment(
            update: boolean,
            rate: number,
            format: Format,
            start: int64,
            stop: int64,
            position: int64,
        ): Event;

        static new_new_segment_full(
            update: boolean,
            rate: number,
            applied_rate: number,
            format: Format,
            start: int64,
            stop: int64,
            position: int64,
        ): Event;

        static new_tag(taglist: TagList): Event;

        static new_buffer_size(format: Format, minsize: int64, maxsize: int64, async: boolean): Event;

        static new_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event;

        static new_seek(
            rate: number,
            format: Format,
            flags: SeekFlags,
            start_type: SeekType,
            start: int64,
            stop_type: SeekType,
            stop: int64,
        ): Event;

        static new_navigation(structure: Structure): Event;

        static new_latency(latency: ClockTime): Event;

        static new_step(format: Format, amount: uint64, rate: number, flush: boolean, intermediate: boolean): Event;

        static new_sink_message(msg: Message): Event;

        // Owm methods of Gst-0.10.Event

        static type_get_name(type: EventType): string;
        static type_to_quark(type: EventType): GLib.Quark;
        static type_get_flags(type: EventType): EventTypeFlags;

        // Owm methods of Gst-0.10.Event

        get_structure(): Structure;
        has_name(name: string): boolean;
        get_seqnum(): number;
        set_seqnum(seqnum: number): void;
        parse_new_segment(format: Format): void;
        parse_new_segment_full(format: Format): void;
        parse_tag(taglist: TagList): void;
        parse_buffer_size(format: Format): void;
        parse_qos(diff: ClockTimeDiff, timestamp: ClockTime): void;
        parse_seek(format: Format, flags: SeekFlags, start_type: SeekType, stop_type: SeekType): void;
        parse_latency(latency: ClockTime): void;
        parse_step(format: Format): void;
        parse_sink_message(msg: Message): void;
    }

    module GParamSpecMiniObject {
        // Constructor properties interface
    }

    class GParamSpecMiniObject extends GObject.Object {}

    module GhostPad {
        // Constructor properties interface
    }

    /**
     * Opaque #GstGhostPad structure.
     */
    class GhostPad extends ProxyPad {
        // Own fields of Gst-0.10.GhostPad

        pad: ProxyPad;

        // Constructors of Gst-0.10.GhostPad

        static ['new'](name: string, target: Pad): GhostPad;

        static new_no_target(name: string, dir: PadDirection): GhostPad;

        static new_from_template(name: string, target: Pad, templ: PadTemplate): GhostPad;

        static new_no_target_from_template(name: string, templ: PadTemplate): GhostPad;

        // Owm methods of Gst-0.10.GhostPad

        get_target(): Pad;
        set_target(newtarget: Pad): boolean;
        construct(): boolean;
    }

    module Index {
        // Signal callback interfaces

        interface EntryAdded {
            (object: IndexEntry): void;
        }

        // Constructor properties interface
    }

    /**
     * Opaque #GstIndex structure.
     */
    class Index extends Object {
        // Own properties of Gst-0.10.Index

        resolver: IndexResolver;

        // Own fields of Gst-0.10.Index

        object: Object;
        groups: any[];
        maxgroup: int;
        method: IndexResolverMethod;
        resolver_user_data: any;
        filter: IndexFilter;
        filter_user_data: any;
        filter_user_data_destroy: GLib.DestroyNotify;
        last_id: int;
        resolver_user_data_destroy: GLib.DestroyNotify;

        // Constructors of Gst-0.10.Index

        static ['new'](): Index;

        // Owm methods of Gst-0.10.Index

        commit(id: int): void;
        get_group(): int;
        new_group(): int;
        set_group(groupnum: int): boolean;
        set_certainty(certainty: IndexCertainty): void;
        get_certainty(): IndexCertainty;
        set_filter(filter: IndexFilter, user_data: any): void;
        set_filter_full(filter: IndexFilter, user_data: any): void;
        set_resolver(resolver: IndexResolver, user_data: any): void;
        set_resolver_full(resolver: IndexResolver, user_data: any): void;
        get_writer_id(writer: Object): boolean;
        add_format(id: int, format: Format): IndexEntry;
        add_associationv(id: int, flags: AssocFlags, n: int, list: IndexAssociation): IndexEntry;
        add_object(id: int, key: string, type: GObject.GType, object: any): IndexEntry;
        add_id(id: int, description: string): IndexEntry;
        get_assoc_entry(
            id: int,
            method: IndexLookupMethod,
            flags: AssocFlags,
            format: Format,
            value: int64,
        ): IndexEntry;
        get_assoc_entry_full(
            id: int,
            method: IndexLookupMethod,
            flags: AssocFlags,
            format: Format,
            value: int64,
            func: GLib.CompareDataFunc,
            user_data: any,
        ): IndexEntry;
    }

    module IndexFactory {
        // Constructor properties interface
    }

    /**
     * The GstIndexFactory object
     */
    class IndexFactory extends PluginFeature {
        // Own fields of Gst-0.10.IndexFactory

        feature: PluginFeature;
        longdesc: string;
        type: GObject.GType;

        // Constructors of Gst-0.10.IndexFactory

        static ['new'](name: string, longdesc: string, type: GObject.GType): IndexFactory;

        // Owm methods of Gst-0.10.IndexFactory

        static find(name: string): IndexFactory;
        static make(name: string): Index;

        // Owm methods of Gst-0.10.IndexFactory

        destroy(): void;
        create(): Index;
    }

    /**
     * A #GstMessage.
     */
    class Message extends MiniObject {
        // Own fields of Gst-0.10.Message

        mini_object: MiniObject;
        type: MessageType;
        timestamp: uint64;
        src: Object;

        // Constructors of Gst-0.10.Message

        static new_eos(src: Object): Message;

        static new_error(src: Object, error: GLib.Error, debug: string): Message;

        static new_warning(src: Object, error: GLib.Error, debug: string): Message;

        static new_info(src: Object, error: GLib.Error, debug: string): Message;

        static new_tag(src: Object, tag_list: TagList): Message;

        static new_tag_full(src: Object, pad: Pad, tag_list: TagList): Message;

        static new_buffering(src: Object, percent: int): Message;

        static new_state_changed(src: Object, oldstate: State, newstate: State, pending: State): Message;

        static new_state_dirty(src: Object): Message;

        static new_step_done(
            src: Object,
            format: Format,
            amount: uint64,
            rate: number,
            flush: boolean,
            intermediate: boolean,
            duration: uint64,
            eos: boolean,
        ): Message;

        static new_clock_provide(src: Object, clock: Clock, ready: boolean): Message;

        static new_clock_lost(src: Object, clock: Clock): Message;

        static new_new_clock(src: Object, clock: Clock): Message;

        static new_application(src: Object, structure: Structure): Message;

        static new_element(src: Object, structure: Structure): Message;

        static new_segment_start(src: Object, format: Format, position: int64): Message;

        static new_segment_done(src: Object, format: Format, position: int64): Message;

        static new_duration(src: Object, format: Format, duration: int64): Message;

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
            amount: uint64,
            rate: number,
            flush: boolean,
            intermediate: boolean,
        ): Message;

        static new_qos(
            src: Object,
            live: boolean,
            running_time: uint64,
            stream_time: uint64,
            timestamp: uint64,
            duration: uint64,
        ): Message;

        static new_custom(type: MessageType, src: Object, structure: Structure): Message;

        // Owm methods of Gst-0.10.Message

        static type_get_name(type: MessageType): string;
        static type_to_quark(type: MessageType): GLib.Quark;

        // Owm methods of Gst-0.10.Message

        get_seqnum(): number;
        set_seqnum(seqnum: number): void;
        parse_error(gerror: GLib.Error, debug: string[]): void;
        parse_warning(gerror: GLib.Error, debug: string[]): void;
        parse_info(gerror: GLib.Error, debug: string[]): void;
        parse_tag(tag_list: TagList): void;
        parse_tag_full(pad: Pad, tag_list: TagList): void;
        parse_buffering(): void;
        set_buffering_stats(mode: BufferingMode, avg_in: int, avg_out: int, buffering_left: int64): void;
        parse_buffering_stats(mode: BufferingMode): void;
        parse_state_changed(oldstate: State, newstate: State, pending: State): void;
        parse_step_done(format: Format): void;
        parse_clock_provide(clock: Clock): void;
        parse_clock_lost(clock: Clock): void;
        parse_new_clock(clock: Clock): void;
        parse_segment_start(format: Format): void;
        parse_segment_done(format: Format): void;
        parse_duration(format: Format): void;
        parse_async_start(): void;
        parse_structure_change(type: StructureChangeType, owner: Element): void;
        parse_stream_status(type: StreamStatusType, owner: Element): void;
        set_stream_status_object(object: GObject.Value): void;
        get_stream_status_object(): GObject.Value;
        parse_request_state(state: State): void;
        parse_step_start(format: Format): void;
        set_qos_values(jitter: int64, proportion: number, quality: int): void;
        set_qos_stats(format: Format, processed: uint64, dropped: uint64): void;
        parse_qos(): void;
        parse_qos_values(): void;
        parse_qos_stats(format: Format): void;
        get_structure(): Structure;
    }

    /**
     * Base class for refcounted lightweight objects.
     */
    abstract class MiniObject {
        // Own fields of Gst-0.10.MiniObject

        refcount: int;
        flags: uint;

        // Constructors of Gst-0.10.MiniObject

        static ['new'](type: GObject.GType): MiniObject;

        // Owm methods of Gst-0.10.MiniObject

        copy(): MiniObject;
        is_writable(): boolean;
        make_writable(): MiniObject;
        ref(): MiniObject;
        unref(): void;
        replace(newdata: MiniObject): void;
    }

    module Object {
        // Signal callback interfaces

        interface DeepNotify {
            (object: Object, p0: GObject.ParamSpec): void;
        }

        interface ObjectSaved {
            (object: any): void;
        }

        interface ParentSet {
            (object: Object): void;
        }

        interface ParentUnset {
            (object: Object): void;
        }

        // Constructor properties interface
    }

    /**
     * GStreamer base object class.
     */
    abstract class Object extends GObject.Object {
        // Own properties of Gst-0.10.Object

        name: string;

        // Own fields of Gst-0.10.Object

        object: GObject.Object;
        refcount: int;
        name_prefix: string;
        flags: number;

        // Owm methods of Gst-0.10.Object

        static default_deep_notify(
            object: GObject.Object,
            orig: Object,
            pspec: GObject.ParamSpec,
            excluded_props: string[],
        ): void;
        static ref(object: any): any;
        static unref(object: any): void;
        static ref_sink(object: any): void;
        static sink(object: any): void;

        // Owm methods of Gst-0.10.Object

        set_name(name: string): boolean;
        get_name(): string;
        set_name_prefix(name_prefix: string): void;
        get_name_prefix(): string;
        set_parent(parent: Object): boolean;
        get_parent(): Object;
        unparent(): void;
        has_ancestor(ancestor: Object): boolean;
        replace(newobj: Object): void;
        get_path_string(): string;
        save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        restore_thyself(self: libxml2.NodePtr): void;
        default_error(error: GLib.Error, debug: string): void;
    }

    module Pad {
        // Signal callback interfaces

        interface HaveData {
            (object: MiniObject): boolean;
        }

        interface Linked {
            (object: Pad): void;
        }

        interface RequestLink {
            (): void;
        }

        interface Unlinked {
            (object: Pad): void;
        }

        // Constructor properties interface
    }

    /**
     * The #GstPad structure. Use the functions to update the variables.
     */
    class Pad extends Object {
        // Own properties of Gst-0.10.Pad

        readonly caps: Caps;
        direction: PadDirection;
        template: PadTemplate;

        // Own fields of Gst-0.10.Pad

        object: Object;
        element_private: any;
        padtemplate: PadTemplate;
        stream_rec_lock: GLib.StaticRecMutex;
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
        do_buffer_signals: int;
        do_event_signals: int;
        iterintlinkfunc: PadIterIntLinkFunction;
        block_destroy_data: GLib.DestroyNotify;

        // Constructors of Gst-0.10.Pad

        static ['new'](name: string, direction: PadDirection): Pad;

        static new_from_template(templ: PadTemplate, name: string): Pad;

        static new_from_static_template(templ: StaticPadTemplate, name: string): Pad;

        // Owm methods of Gst-0.10.Pad

        static load_and_link(self: libxml2.NodePtr, parent: Object): void;

        // Owm methods of Gst-0.10.Pad

        get_direction(): PadDirection;
        set_active(active: boolean): boolean;
        is_active(): boolean;
        activate_pull(active: boolean): boolean;
        activate_push(active: boolean): boolean;
        set_blocked(blocked: boolean): boolean;
        set_blocked_async(blocked: boolean, callback: PadBlockCallback, user_data: any): boolean;
        set_blocked_async_full(blocked: boolean, callback: PadBlockCallback, user_data: any): boolean;
        is_blocked(): boolean;
        is_blocking(): boolean;
        set_element_private(priv: any): void;
        get_element_private(): any;
        get_pad_template(): PadTemplate;
        set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void;
        alloc_buffer(offset: uint64, size: int, caps: Caps, buf: Buffer): FlowReturn;
        alloc_buffer_and_set_caps(offset: uint64, size: int, caps: Caps, buf: Buffer): FlowReturn;
        set_activate_function(activate: PadActivateFunction): void;
        set_activatepull_function(activatepull: PadActivateModeFunction): void;
        set_activatepush_function(activatepush: PadActivateModeFunction): void;
        set_chain_function(chain: PadChainFunction): void;
        set_chain_list_function(chainlist: PadChainListFunction): void;
        set_getrange_function(get: PadGetRangeFunction): void;
        set_checkgetrange_function(check: PadCheckGetRangeFunction): void;
        set_event_function(event: PadEventFunction): void;
        set_link_function(link: PadLinkFunction): void;
        set_unlink_function(unlink: PadUnlinkFunction): void;
        can_link(sinkpad: Pad): boolean;
        link(sinkpad: Pad): PadLinkReturn;
        link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn;
        unlink(sinkpad: Pad): boolean;
        is_linked(): boolean;
        get_peer(): Pad;
        set_getcaps_function(getcaps: PadGetCapsFunction): void;
        set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void;
        set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void;
        set_setcaps_function(setcaps: PadSetCapsFunction): void;
        get_pad_template_caps(): Caps;
        get_caps_reffed(): Caps;
        get_caps(): Caps;
        fixate_caps(caps: Caps): void;
        accept_caps(caps: Caps): boolean;
        set_caps(caps: Caps): boolean;
        peer_get_caps_reffed(): Caps;
        peer_get_caps(): Caps;
        peer_accept_caps(caps: Caps): boolean;
        get_allowed_caps(): Caps;
        get_negotiated_caps(): Caps;
        push(buffer: Buffer): FlowReturn;
        push_list(list: BufferList): FlowReturn;
        check_pull_range(): boolean;
        pull_range(offset: uint64, size: uint, buffer: Buffer): FlowReturn;
        push_event(event: Event): boolean;
        event_default(event: Event): boolean;
        chain(buffer: Buffer): FlowReturn;
        chain_list(list: BufferList): FlowReturn;
        get_range(offset: uint64, size: uint, buffer: Buffer): FlowReturn;
        send_event(event: Event): boolean;
        start_task(func: TaskFunction, data: any): boolean;
        pause_task(): boolean;
        stop_task(): boolean;
        set_internal_link_function(intlink: PadIntLinkFunction): void;
        set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void;
        iterate_internal_links(): Iterator;
        iterate_internal_links_default(): Iterator;
        set_query_type_function(type_func: PadQueryTypeFunction): void;
        get_query_types(): QueryType;
        get_query_types_default(): QueryType;
        query(query: Query): boolean;
        peer_query(query: Query): boolean;
        set_query_function(query: PadQueryFunction): void;
        query_default(query: Query): boolean;
        dispatcher(dispatch: PadDispatcherFunction, data: any): boolean;
        use_fixed_caps(): void;
        get_fixed_caps_func(): Caps;
        proxy_getcaps(): Caps;
        proxy_setcaps(caps: Caps): boolean;
        get_parent_element(): Element;
        query_position(format: Format): boolean;
        query_duration(format: Format): boolean;
        query_convert(src_format: Format, src_val: int64, dest_format: Format): boolean;
        query_peer_position(format: Format): boolean;
        query_peer_duration(format: Format): boolean;
        query_peer_convert(src_format: Format, src_val: int64, dest_format: Format): boolean;
        add_data_probe(handler: GObject.Callback, data: any): ulong;
        add_data_probe_full(handler: GObject.Callback, data: any): ulong;
        remove_data_probe(handler_id: uint): void;
        add_event_probe(handler: GObject.Callback, data: any): ulong;
        add_event_probe_full(handler: GObject.Callback, data: any): ulong;
        remove_event_probe(handler_id: uint): void;
        add_buffer_probe(handler: GObject.Callback, data: any): ulong;
        add_buffer_probe_full(handler: GObject.Callback, data: any): ulong;
        remove_buffer_probe(handler_id: uint): void;
    }

    module PadTemplate {
        // Signal callback interfaces

        interface PadCreated {
            (object: Pad): void;
        }

        // Constructor properties interface
    }

    /**
     * The padtemplate object.
     */
    class PadTemplate extends Object {
        // Own properties of Gst-0.10.PadTemplate

        caps: Caps;
        direction: PadDirection;
        name_template: string;
        nameTemplate: string;
        presence: PadPresence;

        // Own fields of Gst-0.10.PadTemplate

        object: Object;

        // Constructors of Gst-0.10.PadTemplate

        static ['new'](name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate;

        // Owm methods of Gst-0.10.PadTemplate

        get_caps(): Caps;
        pad_created(pad: Pad): void;
    }

    module ParamFraction {
        // Constructor properties interface
    }

    class ParamFraction extends GObject.Object {}

    module Pipeline {
        // Constructor properties interface
    }

    /**
     * The #GstPipeline structure.
     */
    class Pipeline extends Bin {
        // Own properties of Gst-0.10.Pipeline

        auto_flush_bus: boolean;
        autoFlushBus: boolean;
        delay: uint64;

        // Own fields of Gst-0.10.Pipeline

        bin: Bin;
        fixed_clock: Clock;
        stream_time: ClockTime;

        // Constructors of Gst-0.10.Pipeline

        static ['new'](name: string): Pipeline;

        // Owm methods of Gst-0.10.Pipeline

        get_bus(): Bus;
        set_new_stream_time(time: ClockTime): void;
        get_last_stream_time(): ClockTime;
        use_clock(clock: Clock): void;
        set_clock(clock: Clock): boolean;
        get_clock(): Clock;
        auto_clock(): void;
        set_delay(delay: ClockTime): void;
        get_delay(): ClockTime;
        set_auto_flush_bus(auto_flush: boolean): void;
        get_auto_flush_bus(): boolean;
    }

    module Plugin {
        // Constructor properties interface
    }

    /**
     * The plugin object
     */
    class Plugin extends Object {
        // Own fields of Gst-0.10.Plugin

        object: Object;
        flags: uint;
        filename: string;
        basename: string;
        file_size: number;
        file_mtime: number;
        registered: boolean;

        // Owm methods of Gst-0.10.Plugin

        static register_static(
            major_version: int,
            minor_version: int,
            name: string,
            description: string,
            init_func: PluginInitFunc,
            version: string,
            license: string,
            source: string,
            _package: string,
            origin: string,
        ): boolean;
        static register_static_full(
            major_version: int,
            minor_version: int,
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
        static load_file(filename: string): Plugin;
        static load_by_name(name: string): Plugin;

        // Owm methods of Gst-0.10.Plugin

        get_name(): string;
        get_description(): string;
        get_filename(): string;
        get_version(): string;
        get_license(): string;
        get_source(): string;
        get_package(): string;
        get_origin(): string;
        get_cache_data(): Structure;
        set_cache_data(cache_data: Structure): void;
        get_module(): GModule.Module;
        is_loaded(): boolean;
        name_filter(name: string): boolean;
        load(): Plugin;
        add_dependency(env_vars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void;
        add_dependency_simple(env_vars: string, paths: string, names: string, flags: PluginDependencyFlags): void;
    }

    module PluginFeature {
        // Constructor properties interface
    }

    /**
     * Opaque #GstPluginFeature structure.
     */
    abstract class PluginFeature extends Object {
        // Own fields of Gst-0.10.PluginFeature

        object: Object;
        loaded: boolean;
        name: string;
        rank: uint;
        plugin_name: string;

        // Owm methods of Gst-0.10.PluginFeature

        load(): PluginFeature;
        type_name_filter(data: TypeNameData): boolean;
        set_rank(rank: uint): void;
        set_name(name: string): void;
        get_rank(): uint;
        get_name(): string;
        check_version(min_major: uint, min_minor: uint, min_micro: uint): boolean;
    }

    module ProxyPad {
        // Constructor properties interface
    }

    class ProxyPad extends Pad {
        // Own fields of Gst-0.10.ProxyPad

        pad: Pad;
    }

    module PushSrc {
        // Constructor properties interface
    }

    /**
     * The opaque #GstPushSrc data structure.
     */
    class PushSrc extends BaseSrc {}

    /**
     * The #GstQuery structure.
     */
    class Query extends MiniObject {
        // Own fields of Gst-0.10.Query

        mini_object: MiniObject;
        type: QueryType;

        // Constructors of Gst-0.10.Query

        static new_position(format: Format): Query;

        static new_duration(format: Format): Query;

        static new_latency(): Query;

        static new_convert(src_format: Format, value: int64, dest_format: Format): Query;

        static new_segment(format: Format): Query;

        static new_application(type: QueryType, structure: Structure): Query;

        static new_seeking(format: Format): Query;

        static new_formats(): Query;

        static new_buffering(format: Format): Query;

        static new_uri(): Query;

        // Owm methods of Gst-0.10.Query

        static type_get_name(query: QueryType): string;
        static type_to_quark(query: QueryType): GLib.Quark;
        static type_register(nick: string, description: string): QueryType;
        static type_get_by_nick(nick: string): QueryType;
        static types_contains(types: QueryType, type: QueryType): boolean;
        static type_get_details(type: QueryType): QueryTypeDefinition;
        static type_iterate_definitions(): Iterator;

        // Owm methods of Gst-0.10.Query

        set_position(format: Format, cur: int64): void;
        parse_position(format: Format): void;
        set_duration(format: Format, duration: int64): void;
        parse_duration(format: Format): void;
        set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void;
        parse_latency(min_latency: ClockTime, max_latency: ClockTime): void;
        set_convert(src_format: Format, src_value: int64, dest_format: Format, dest_value: int64): void;
        parse_convert(src_format: Format, dest_format: Format): void;
        set_segment(rate: number, format: Format, start_value: int64, stop_value: int64): void;
        parse_segment(format: Format): void;
        get_structure(): Structure;
        set_seeking(format: Format, seekable: boolean, segment_start: int64, segment_end: int64): void;
        parse_seeking(format: Format): void;
        set_formatsv(n_formats: int, formats: Format): void;
        parse_formats_length(): void;
        parse_formats_nth(nth: uint, format: Format): void;
        set_buffering_percent(busy: boolean, percent: int): void;
        parse_buffering_percent(): void;
        set_buffering_stats(mode: BufferingMode, avg_in: int, avg_out: int, buffering_left: int64): void;
        parse_buffering_stats(mode: BufferingMode): void;
        set_buffering_range(format: Format, start: int64, stop: int64, estimated_total: int64): void;
        parse_buffering_range(format: Format): void;
        parse_uri(uri: string[]): void;
        set_uri(uri: string): void;
    }

    module Registry {
        // Signal callback interfaces

        interface FeatureAdded {
            (object: any): void;
        }

        interface PluginAdded {
            (object: any): void;
        }

        // Constructor properties interface
    }

    /**
     * Opaque #GstRegistry structure.
     */
    class Registry extends Object {
        // Own fields of Gst-0.10.Registry

        object: Object;
        plugins: any[];
        features: any[];
        paths: any[];
        cache_file: int;

        // Owm methods of Gst-0.10.Registry

        static get_default(): Registry;
        static fork_is_enabled(): boolean;
        static fork_set_enabled(enabled: boolean): void;

        // Owm methods of Gst-0.10.Registry

        scan_path(path: string): boolean;
        add_path(path: string): void;
        add_plugin(plugin: Plugin): boolean;
        remove_plugin(plugin: Plugin): void;
        add_feature(feature: PluginFeature): boolean;
        remove_feature(feature: PluginFeature): void;
        get_feature_list_cookie(): number;
        find_plugin(name: string): Plugin;
        find_feature(name: string, type: GObject.GType): PluginFeature;
        lookup(filename: string): Plugin;
        lookup_feature(name: string): PluginFeature;
        xml_read_cache(location: string): boolean;
        xml_write_cache(location: string): boolean;
    }

    module SystemClock {
        // Constructor properties interface
    }

    /**
     * The default implementation of a #GstClock that uses the system time.
     */
    class SystemClock extends Clock {
        // Own properties of Gst-0.10.SystemClock

        clock_type: ClockType;
        clockType: ClockType;

        // Own fields of Gst-0.10.SystemClock

        clock: Clock;
        stopping: boolean;

        // Owm methods of Gst-0.10.SystemClock

        static obtain(): Clock;
    }

    module Task {
        // Constructor properties interface
    }

    /**
     * The #GstTask object.
     */
    class Task extends Object {
        // Own fields of Gst-0.10.Task

        object: Object;
        state: TaskState;
        lock: GLib.StaticRecMutex;
        func: TaskFunction;
        data: any;
        running: boolean;

        // Owm methods of Gst-0.10.Task

        static cleanup_all(): void;
        static create(func: TaskFunction): Task;

        // Owm methods of Gst-0.10.Task

        set_lock(mutex: GLib.StaticRecMutex): void;
        set_priority(priority: GLib.ThreadPriority): void;
        get_pool(): TaskPool;
        set_pool(pool: TaskPool): void;
        set_thread_callbacks(callbacks: TaskThreadCallbacks, user_data: any): void;
        get_state(): TaskState;
        set_state(state: TaskState): boolean;
        start(): boolean;
        stop(): boolean;
        pause(): boolean;
        join(): boolean;
    }

    module TaskPool {
        // Constructor properties interface
    }

    /**
     * The #GstTaskPool object.
     */
    class TaskPool extends Object {
        // Own fields of Gst-0.10.TaskPool

        object: Object;

        // Constructors of Gst-0.10.TaskPool

        static ['new'](): TaskPool;

        // Owm methods of Gst-0.10.TaskPool

        prepare(): void;
        push(func: TaskPoolFunction, user_data: any): any;
        join(id: any): void;
        cleanup(): void;
    }

    module TypeFindFactory {
        // Constructor properties interface
    }

    /**
     * Object that stores information about a typefind function.
     */
    class TypeFindFactory extends PluginFeature {
        // Own fields of Gst-0.10.TypeFindFactory

        feature: PluginFeature;
        'function': TypeFindFunction;
        extensions: string;
        user_data: any;
        user_data_notify: GLib.DestroyNotify;

        // Owm methods of Gst-0.10.TypeFindFactory

        get_extensions(): string[];
        get_caps(): Caps;
        call_function(find: TypeFind): void;
    }

    module XML {
        // Signal callback interfaces

        interface ObjectLoaded {
            (object: Object, p0: any): void;
        }

        // Constructor properties interface
    }

    /**
     * XML parser object
     */
    class XML extends Object {
        // Own fields of Gst-0.10.XML

        object: Object;
        topelements: any[];

        // Constructors of Gst-0.10.XML

        static ['new'](): XML;

        // Owm methods of Gst-0.10.XML

        static write(element: Element): libxml2.DocPtr;
        static make_element(cur: libxml2.NodePtr, parent: Object): Element;

        // Owm methods of Gst-0.10.XML

        parse_doc(doc: libxml2.DocPtr, root: uint8[]): boolean;
        parse_file(fname: uint8[], root: uint8[]): boolean;
        parse_memory(buffer: uint8[], size: uint, root: string): boolean;
        get_element(name: uint8[]): Element;
    }

    class AdapterClass {}

    class AdapterPrivate {}

    /**
     * The main tracing object
     */
    class AllocTrace {
        // Own fields of Gst-0.10.AllocTrace

        name: string;
        flags: int;
        live: int;
        mem_live: any[];

        // Owm methods of Gst-0.10.AllocTrace

        print(): void;
        set_flags(flags: AllocTraceFlags): void;
    }

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At the minimum, the `render` method should be overridden to
     * output/present buffers.
     */
    class BaseSinkClass {}

    class BaseSinkPrivate {}

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At the minimum, the `create` method should be overridden to produce
     * buffers.
     */
    class BaseSrcClass {}

    class BaseSrcPrivate {}

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At minimum either `transform` or `transform_ip` need to be overridden.
     * If the element can overwrite the input data with the results (data is of the
     * same type and quantity) it should provide `transform_ip`.
     */
    class BaseTransformClass {
        // Own fields of Gst-0.10.BaseTransformClass

        passthrough_on_same_caps: boolean;
    }

    class BaseTransformPrivate {}

    /**
     * Subclasses can override the `add_element` and `remove_element` to
     * update the list of children in the bin.
     * The `handle_message` method can be overridden to implement custom
     * message handling.  `handle_message` takes ownership of the message, just like
     * #gst_element_post_message.
     */
    class BinClass {}

    class BinPrivate {}

    /**
     * A bit reader instance.
     */
    class BitReader {
        // Own fields of Gst-0.10.BitReader

        data: any;
        size: uint;
        'byte': uint;
        bit: uint;

        // Constructors of Gst-0.10.BitReader

        constructor(data: uint8[], size: uint);

        static ['new'](data: uint8[], size: uint): BitReader;

        static new_from_buffer(buffer: Buffer): BitReader;

        // Owm methods of Gst-0.10.BitReader

        free(): void;
        init(data: uint8[], size: uint): void;
        init_from_buffer(buffer: Buffer): void;
        set_pos(pos: uint): boolean;
        get_pos(): uint;
        get_remaining(): uint;
        get_size(): uint;
        skip(nbits: uint): boolean;
        skip_to_byte(): boolean;
        get_bits_uint8(val: uint8[], nbits: uint): boolean;
        get_bits_uint16(nbits: uint): boolean;
        get_bits_uint32(nbits: uint): boolean;
        get_bits_uint64(nbits: uint): boolean;
        peek_bits_uint8(val: uint8[], nbits: uint): boolean;
        peek_bits_uint16(nbits: uint): boolean;
        peek_bits_uint32(nbits: uint): boolean;
        peek_bits_uint64(nbits: uint): boolean;
    }

    class BufferClass {}

    class BufferListClass {}

    class BufferListIterator {
        // Owm methods of Gst-0.10.BufferListIterator

        free(): void;
        n_buffers(): uint;
        next(): Buffer;
        next_group(): boolean;
        add(buffer: Buffer): void;
        add_group(): void;
        remove(): void;
        steal(): Buffer;
        take(buffer: Buffer): void;
        ['do'](do_func: BufferListDoFunction, user_data: any): Buffer;
        merge_group(): Buffer;
    }

    class BusClass {}

    class BusPrivate {}

    /**
     * A byte reader instance.
     */
    class ByteReader {
        // Own fields of Gst-0.10.ByteReader

        data: any;
        size: uint;
        'byte': uint;

        // Constructors of Gst-0.10.ByteReader

        constructor(data: uint8[], size: uint);

        static ['new'](data: uint8[], size: uint): ByteReader;

        static new_from_buffer(buffer: Buffer): ByteReader;

        // Owm methods of Gst-0.10.ByteReader

        free(): void;
        init(data: uint8[], size: uint): void;
        init_from_buffer(buffer: Buffer): void;
        set_pos(pos: uint): boolean;
        get_pos(): uint;
        get_remaining(): uint;
        get_size(): uint;
        skip(nbytes: uint): boolean;
        get_uint8(val: uint8[]): boolean;
        get_int8(): boolean;
        get_uint16_le(): boolean;
        get_int16_le(): boolean;
        get_uint16_be(): boolean;
        get_int16_be(): boolean;
        get_uint24_le(): boolean;
        get_int24_le(): boolean;
        get_uint24_be(): boolean;
        get_int24_be(): boolean;
        get_uint32_le(): boolean;
        get_int32_le(): boolean;
        get_uint32_be(): boolean;
        get_int32_be(): boolean;
        get_uint64_le(): boolean;
        get_int64_le(): boolean;
        get_uint64_be(): boolean;
        get_int64_be(): boolean;
        peek_uint8(val: uint8[]): boolean;
        peek_int8(): boolean;
        peek_uint16_le(): boolean;
        peek_int16_le(): boolean;
        peek_uint16_be(): boolean;
        peek_int16_be(): boolean;
        peek_uint24_le(): boolean;
        peek_int24_le(): boolean;
        peek_uint24_be(): boolean;
        peek_int24_be(): boolean;
        peek_uint32_le(): boolean;
        peek_int32_le(): boolean;
        peek_uint32_be(): boolean;
        peek_int32_be(): boolean;
        peek_uint64_le(): boolean;
        peek_int64_le(): boolean;
        peek_uint64_be(): boolean;
        peek_int64_be(): boolean;
        get_float32_le(): boolean;
        get_float32_be(): boolean;
        get_float64_le(): boolean;
        get_float64_be(): boolean;
        peek_float32_le(): boolean;
        peek_float32_be(): boolean;
        peek_float64_le(): boolean;
        peek_float64_be(): boolean;
        dup_data(size: uint): boolean;
        get_data(size: uint): boolean;
        peek_data(size: uint): boolean;
        dup_string_utf8(str: string[]): boolean;
        dup_string_utf16(): boolean;
        dup_string_utf32(): boolean;
        skip_string_utf8(): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        get_string_utf8(str: string[]): boolean;
        peek_string_utf8(str: string[]): boolean;
        masked_scan_uint32(mask: number, pattern: number, offset: uint, size: uint): uint;
    }

    /**
     * A byte writer instance.
     */
    class ByteWriter {
        // Own fields of Gst-0.10.ByteWriter

        alloc_size: uint;
        fixed: boolean;
        owned: boolean;

        // Constructors of Gst-0.10.ByteWriter

        constructor(
            properties?: Partial<{
                parent: ByteReader;
                alloc_size: uint;
                fixed: boolean;
                owned: boolean;
            }>,
        );

        static ['new'](): ByteWriter;

        static new_with_size(size: uint, fixed: boolean): ByteWriter;

        static new_with_data(data: uint8[], size: uint, initialized: boolean): ByteWriter;

        static new_with_buffer(buffer: Buffer, initialized: boolean): ByteWriter;

        // Owm methods of Gst-0.10.ByteWriter

        init(): void;
        init_with_size(size: uint, fixed: boolean): void;
        init_with_data(data: uint8[], size: uint, initialized: boolean): void;
        init_with_buffer(buffer: Buffer, initialized: boolean): void;
        free(): void;
        free_and_get_data(): uint8[];
        free_and_get_buffer(): Buffer;
        reset(): void;
        reset_and_get_data(): uint8[];
        reset_and_get_buffer(): Buffer;
        get_remaining(): uint;
        ensure_free_space(size: uint): boolean;
        put_uint8(val: uint8): boolean;
        put_int8(val: int8): boolean;
        put_uint16_be(val: uint16): boolean;
        put_uint16_le(val: uint16): boolean;
        put_int16_be(val: int16): boolean;
        put_int16_le(val: int16): boolean;
        put_uint24_be(val: number): boolean;
        put_uint24_le(val: number): boolean;
        put_int24_be(val: number): boolean;
        put_int24_le(val: number): boolean;
        put_uint32_be(val: number): boolean;
        put_uint32_le(val: number): boolean;
        put_int32_be(val: number): boolean;
        put_int32_le(val: number): boolean;
        put_uint64_be(val: uint64): boolean;
        put_uint64_le(val: uint64): boolean;
        put_int64_be(val: int64): boolean;
        put_int64_le(val: int64): boolean;
        put_float32_be(val: float): boolean;
        put_float32_le(val: float): boolean;
        put_float64_be(val: number): boolean;
        put_float64_le(val: number): boolean;
        put_data(data: uint8[], size: uint): boolean;
        fill(value: uint8, size: uint): boolean;
        put_string_utf8(data: string): boolean;
        put_string_utf16(): boolean;
        put_string_utf32(): boolean;
    }

    /**
     * Object describing media types.
     */
    class Caps {
        // Own fields of Gst-0.10.Caps

        type: GObject.GType;
        refcount: int;
        flags: CapsFlags;
        structs: GLib.PtrArray;

        // Constructors of Gst-0.10.Caps

        constructor(
            properties?: Partial<{
                type: GObject.GType;
                refcount: int;
                flags: CapsFlags;
                _gst_reserved: any[];
            }>,
        );

        static new_empty(): Caps;

        static new_any(): Caps;

        // Owm methods of Gst-0.10.Caps

        ref(): Caps;
        copy(): Caps;
        make_writable(): Caps;
        unref(): void;
        append(caps2: Caps): void;
        merge(caps2: Caps): void;
        append_structure(structure: Structure): void;
        remove_structure(idx: uint): void;
        merge_structure(structure: Structure): void;
        get_size(): uint;
        get_structure(index: uint): Structure;
        steal_structure(index: uint): Structure;
        copy_nth(nth: uint): Caps;
        truncate(): void;
        set_value(field: string, value: GObject.Value): void;
        is_any(): boolean;
        is_empty(): boolean;
        is_fixed(): boolean;
        is_always_compatible(caps2: Caps): boolean;
        is_subset(superset: Caps): boolean;
        is_equal(caps2: Caps): boolean;
        is_equal_fixed(caps2: Caps): boolean;
        can_intersect(caps2: Caps): boolean;
        intersect(caps2: Caps): Caps;
        subtract(subtrahend: Caps): Caps;
        union(caps2: Caps): Caps;
        normalize(): Caps;
        do_simplify(): boolean;
        save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        replace(newcaps: Caps): void;
        to_string(): string;
    }

    /**
     * #GstChildProxy interface.
     */
    class ChildProxyInterface {}

    /**
     * GStreamer clock class. Override the vmethods to implement the clock
     * functionality.
     */
    class ClockClass {}

    /**
     * All pending timeouts or periodic notifies are converted into
     * an entry.
     * Note that GstClockEntry should be treated as an opaque structure. It must
     * not be extended or allocated using a custom allocator.
     */
    class ClockEntry {
        // Own fields of Gst-0.10.ClockEntry

        refcount: int;
        clock: Clock;
        type: ClockEntryType;
        time: ClockTime;
        interval: ClockTime;
        status: ClockReturn;
        func: ClockCallback;
        user_data: any;
        destroy_data: GLib.DestroyNotify;
    }

    class ClockPrivate {}

    /**
     * Structure used by the collect_pads.
     */
    class CollectData {
        // Own fields of Gst-0.10.CollectData

        collect: CollectPads;
        pad: Pad;
        buffer: Buffer;
        pos: uint;
    }

    class CollectPadsClass {}

    class CollectPadsPrivate {}

    class DataQueueClass {}

    /**
     * Structure used by #GstDataQueue. You can supply a different structure, as
     * long as the top of the structure is identical to this structure.
     */
    class DataQueueItem {
        // Own fields of Gst-0.10.DataQueueItem

        object: MiniObject;
        size: uint;
        duration: uint64;
        visible: boolean;
        destroy: GLib.DestroyNotify;
    }

    /**
     * Structure describing the size of a queue.
     */
    class DataQueueSize {
        // Own fields of Gst-0.10.DataQueueSize

        visible: uint;
        bytes: uint;
        time: uint64;
    }

    /**
     * This is the struct that describes the categories. Once initialized with
     * #GST_DEBUG_CATEGORY_INIT, its values can't be changed anymore.
     */
    class DebugCategory {
        // Own fields of Gst-0.10.DebugCategory

        threshold: int;
        color: uint;
        name: string;
        description: string;

        // Owm methods of Gst-0.10.DebugCategory

        free(): void;
        set_threshold(level: DebugLevel): void;
        reset_threshold(): void;
        get_threshold(): DebugLevel;
        get_name(): string;
        get_color(): uint;
        get_description(): string;
    }

    class DebugMessage {
        // Owm methods of Gst-0.10.DebugMessage

        get(): string;
    }

    /**
     * GStreamer element class. Override the vmethods to implement the element
     * functionality.
     */
    class ElementClass {
        // Own fields of Gst-0.10.ElementClass

        details: ElementDetails;
        elementfactory: ElementFactory;
        padtemplates: any[];
        numpadtemplates: int;
        pad_templ_cookie: number;

        // Owm methods of Gst-0.10.ElementClass

        add_pad_template(templ: PadTemplate): void;
        get_pad_template(name: string): PadTemplate;
        set_details(details: ElementDetails): void;
        set_details_simple(longname: string, classification: string, description: string, author: string): void;
    }

    /**
     * This struct defines the public information about a #GstElement. It contains
     * meta-data about the element that is mostly for the benefit of editors.
     * The `klass` member can be used by applications to filter elements based
     * on functionality.
     */
    class ElementDetails {
        // Own fields of Gst-0.10.ElementDetails

        longname: string;
        klass: string;
        description: string;
        author: string;

        // Constructors of Gst-0.10.ElementDetails

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

    class ElementFactoryClass {}

    class EventClass {}

    /**
     * A format definition
     */
    class FormatDefinition {
        // Own fields of Gst-0.10.FormatDefinition

        value: Format;
        nick: string;
        description: string;
        quark: GLib.Quark;
    }

    class GhostPadClass {}

    class GhostPadPrivate {}

    class ImplementsInterfaceClass {}

    /**
     * An association in an entry.
     */
    class IndexAssociation {
        // Own fields of Gst-0.10.IndexAssociation

        format: Format;
        value: int64;
    }

    class IndexClass {}

    /**
     * The basic element of an index.
     */
    class IndexEntry {
        // Own fields of Gst-0.10.IndexEntry

        type: IndexEntryType;
        id: int;

        // Owm methods of Gst-0.10.IndexEntry

        copy(): IndexEntry;
        free(): void;
        assoc_map(format: Format): boolean;
    }

    class IndexFactoryClass {}

    /**
     * A group of related entries in an index.
     */
    class IndexGroup {
        // Own fields of Gst-0.10.IndexGroup

        groupnum: int;
        entries: any[];
        certainty: IndexCertainty;
        peergroup: int;
    }

    /**
     * #GstIterator base structure. The values of this structure are
     * protected for subclasses, use the methods to use the #GstIterator.
     */
    class Iterator {
        // Own fields of Gst-0.10.Iterator

        item: IteratorItemFunction;
        type: GObject.GType;
        cookie: number;
        master_cookie: any;

        // Constructors of Gst-0.10.Iterator

        constructor(
            size: uint,
            type: GObject.GType,
            lock: GLib.Mutex,
            next: IteratorNextFunction,
            item: IteratorItemFunction,
            resync: IteratorResyncFunction,
            free: IteratorFreeFunction,
        );

        static ['new'](
            size: uint,
            type: GObject.GType,
            lock: GLib.Mutex,
            next: IteratorNextFunction,
            item: IteratorItemFunction,
            resync: IteratorResyncFunction,
            free: IteratorFreeFunction,
        ): Iterator;

        static new_single(type: GObject.GType, object: any, copy: CopyFunction, free: GLib.FreeFunc): Iterator;

        // Owm methods of Gst-0.10.Iterator

        next(elem: any): IteratorResult;
        resync(): void;
        free(): void;
        push(other: Iterator): void;
        filter(func: GLib.CompareFunc, user_data: any): Iterator;
        fold(func: IteratorFoldFunction, ret: GObject.Value, user_data: any): IteratorResult;
        foreach(func: GLib.Func, user_data: any): IteratorResult;
        find_custom(func: GLib.CompareFunc, user_data: any): any;
    }

    class MessageClass {}

    class MiniObjectClass {
        // Own fields of Gst-0.10.MiniObjectClass

        copy: MiniObjectCopyFunction;
        finalize: MiniObjectFinalizeFunction;
    }

    /**
     * GStreamer base object class.
     */
    class ObjectClass {
        // Own fields of Gst-0.10.ObjectClass

        path_string_separator: string;
        signal_object: GObject.Object;
        lock: GLib.StaticRecMutex;
    }

    class PadClass {}

    class PadPrivate {}

    class PadTemplateClass {}

    /**
     * A GParamSpec derived structure that contains the meta data for fractional
     * properties.
     */
    class ParamSpecFraction {
        // Own fields of Gst-0.10.ParamSpecFraction

        min_num: int;
        min_den: int;
        max_num: int;
        max_den: int;
        def_num: int;
        def_den: int;
    }

    /**
     * A %GParamSpec derived structure that contains the meta data
     * for %GstMiniObject properties.
     */
    class ParamSpecMiniObject {}

    /**
     * Opaque structure.
     */
    class ParseContext {
        // Constructors of Gst-0.10.ParseContext

        constructor(properties?: Partial<{}>);

        static ['new'](): ParseContext;

        // Owm methods of Gst-0.10.ParseContext

        get_missing_elements(): string[];
        free(): void;
    }

    class PipelineClass {}

    class PipelinePrivate {}

    class PluginClass {}

    /**
     * A plugin should export a variable of this type called plugin_desc. The plugin
     * loader will use the data provided there to initialize the plugin.
     * BSD, MIT/X11, Proprietary, unknown.
     */
    class PluginDesc {
        // Own fields of Gst-0.10.PluginDesc

        major_version: int;
        minor_version: int;
        name: string;
        description: string;
        plugin_init: PluginInitFunc;
        version: string;
        license: string;
        source: string;
        'package': string;
        origin: string;
    }

    class PluginFeatureClass {}

    class PluginPrivate {}

    /**
     * A set of file/network descriptors.
     */
    class Poll {
        // Constructors of Gst-0.10.Poll

        constructor(properties?: Partial<{}>);

        static ['new'](controllable: boolean): Poll;

        static new_timer(): Poll;

        // Owm methods of Gst-0.10.Poll

        free(): void;
        add_fd(fd: PollFD): boolean;
        remove_fd(fd: PollFD): boolean;
        fd_ctl_write(fd: PollFD, active: boolean): boolean;
        fd_ctl_read(fd: PollFD, active: boolean): boolean;
        fd_ignored(fd: PollFD): void;
        fd_has_closed(fd: PollFD): boolean;
        fd_has_error(fd: PollFD): boolean;
        fd_can_read(fd: PollFD): boolean;
        fd_can_write(fd: PollFD): boolean;
        wait(timeout: ClockTime): int;
        set_controllable(controllable: boolean): boolean;
        restart(): void;
        set_flushing(flushing: boolean): void;
        write_control(): boolean;
        read_control(): boolean;
    }

    /**
     * A file descriptor object.
     */
    class PollFD {
        // Own fields of Gst-0.10.PollFD

        fd: int;
        idx: int;

        // Owm methods of Gst-0.10.PollFD

        init(): void;
    }

    class ProxyPadClass {}

    class ProxyPadPrivate {}

    class PushSrcClass {}

    class QueryClass {}

    /**
     * A Query Type definition
     */
    class QueryTypeDefinition {
        // Own fields of Gst-0.10.QueryTypeDefinition

        value: QueryType;
        nick: string;
        description: string;
        quark: GLib.Quark;
    }

    class RegistryClass {}

    class RegistryPrivate {}

    /**
     * A helper structure that holds the configured region of
     * interest in a media file.
     */
    class Segment {
        // Own fields of Gst-0.10.Segment

        rate: number;
        abs_rate: number;
        format: Format;
        flags: SeekFlags;
        start: int64;
        stop: int64;
        time: int64;
        accum: int64;
        last_stop: int64;
        duration: int64;
        applied_rate: number;

        // Constructors of Gst-0.10.Segment

        constructor(
            properties?: Partial<{
                rate: number;
                abs_rate: number;
                format: Format;
                flags: SeekFlags;
                start: int64;
                stop: int64;
                time: int64;
                accum: int64;
                last_stop: int64;
                duration: int64;
                applied_rate: number;
                _gst_reserved: uint8[];
            }>,
        );

        static ['new'](): Segment;

        // Owm methods of Gst-0.10.Segment

        copy(): Segment;
        free(): void;
        init(format: Format): void;
        set_duration(format: Format, duration: int64): void;
        set_last_stop(format: Format, position: int64): void;
        set_seek(
            rate: number,
            format: Format,
            flags: SeekFlags,
            start_type: SeekType,
            start: int64,
            stop_type: SeekType,
            stop: int64,
        ): void;
        set_newsegment(update: boolean, rate: number, format: Format, start: int64, stop: int64, time: int64): void;
        set_newsegment_full(
            update: boolean,
            rate: number,
            applied_rate: number,
            format: Format,
            start: int64,
            stop: int64,
            time: int64,
        ): void;
        to_stream_time(format: Format, position: int64): int64;
        to_running_time(format: Format, position: int64): int64;
        to_position(format: Format, running_time: int64): int64;
        clip(format: Format, start: int64, stop: int64): boolean;
        set_running_time(format: Format, running_time: int64): boolean;
    }

    /**
     * Datastructure to initialize #GstCaps from a string description usually
     * used in conjunction with GST_STATIC_CAPS() and gst_static_caps_get() to
     * instantiate a #GstCaps.
     */
    class StaticCaps {
        // Own fields of Gst-0.10.StaticCaps

        string: string;

        // Owm methods of Gst-0.10.StaticCaps

        get(): Caps;
    }

    class StaticPadTemplate {
        // Own fields of Gst-0.10.StaticPadTemplate

        name_template: string;
        direction: PadDirection;
        presence: PadPresence;

        // Owm methods of Gst-0.10.StaticPadTemplate

        get(): PadTemplate;
        get_caps(): Caps;
    }

    /**
     * The GstStructure object. Most fields are private.
     */
    class Structure {
        // Own fields of Gst-0.10.Structure

        type: GObject.GType;
        name: GLib.Quark;
        parent_refcount: any;
        fields: GLib.Array;

        // Constructors of Gst-0.10.Structure

        constructor(name: string, firstfield: string);

        // Owm methods of Gst-0.10.Structure

        copy(): Structure;
        set_parent_refcount(): void;
        free(): void;
        get_name(): string;
        get_name_id(): GLib.Quark;
        has_name(name: string): boolean;
        set_name(name: string): void;
        id_set_value(field: GLib.Quark, value: GObject.Value): void;
        set_value(fieldname: string, value: GObject.Value): void;
        id_get_value(field: GLib.Quark): GObject.Value;
        get_value(fieldname: string): GObject.Value;
        remove_field(fieldname: string): void;
        remove_all_fields(): void;
        get_field_type(fieldname: string): GObject.GType;
        foreach(func: StructureForeachFunc, user_data: any): boolean;
        map_in_place(func: StructureMapFunc, user_data: any): boolean;
        n_fields(): int;
        nth_field_name(index: uint): string;
        id_has_field(field: GLib.Quark): boolean;
        id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean;
        has_field(fieldname: string): boolean;
        has_field_typed(fieldname: string, type: GObject.GType): boolean;
        get_boolean(fieldname: string): boolean;
        get_int(fieldname: string): boolean;
        get_uint(fieldname: string): boolean;
        get_fourcc(fieldname: string): boolean;
        get_double(fieldname: string): boolean;
        get_date(fieldname: string, value: GLib.Date): boolean;
        get_clock_time(fieldname: string, value: ClockTime): boolean;
        get_string(fieldname: string): string;
        get_enum(fieldname: string, enumtype: GObject.GType): boolean;
        get_fraction(fieldname: string): boolean;
        to_string(): string;
        fixate_field_nearest_int(field_name: string, target: int): boolean;
        fixate_field_nearest_double(field_name: string, target: number): boolean;
        fixate_field_boolean(field_name: string, target: boolean): boolean;
        fixate_field_string(field_name: string, target: string): boolean;
        fixate_field_nearest_fraction(field_name: string, target_numerator: int, target_denominator: int): boolean;
    }

    class SystemClockClass {}

    class SystemClockPrivate {}

    /**
     * #GstTagSetterIFace interface.
     */
    class TagSetterIFace {}

    class TaskClass {
        // Own fields of Gst-0.10.TaskClass

        pool: TaskPool;
    }

    /**
     * The #GstTaskPoolClass object.
     */
    class TaskPoolClass {}

    class TaskPrivate {}

    /**
     * Custom GstTask thread callback functions that can be installed.
     */
    class TaskThreadCallbacks {
        // Own fields of Gst-0.10.TaskThreadCallbacks

        enter_thread: any;
        leave_thread: any;

        // Constructors of Gst-0.10.TaskThreadCallbacks

        constructor(
            properties?: Partial<{
                enter_thread: any;
                leave_thread: any;
                _gst_reserved: any[];
            }>,
        );
    }

    /**
     * Opaque #GstTrace structure.
     */
    class Trace {
        // Own fields of Gst-0.10.Trace

        filename: string;
        fd: int;
        bufsize: int;
        bufoffset: int;

        // Constructors of Gst-0.10.Trace

        constructor(filename: string, size: int);

        static ['new'](filename: string, size: int): Trace;

        // Owm methods of Gst-0.10.Trace

        destroy(): void;
        flush(): void;
        text_flush(): void;
        set_default(): void;
    }

    class TraceEntry {
        // Own fields of Gst-0.10.TraceEntry

        timestamp: int64;
        sequence: number;
        data: number;
        message: int8[];
    }

    /**
     * Object that stores typefind callbacks. To use with #GstTypeFindFactory.
     */
    class TypeFind {
        // Own fields of Gst-0.10.TypeFind

        data: any;

        // Constructors of Gst-0.10.TypeFind

        constructor(
            properties?: Partial<{
                peek: any;
                suggest: any;
                data: any;
                get_length: any;
                _gst_reserved: any[];
            }>,
        );

        // Owm methods of Gst-0.10.TypeFind

        peek(offset: int64, size: uint): uint8[];
        suggest(probability: uint, caps: Caps): void;
        get_length(): uint64;
    }

    class TypeFindFactoryClass {}

    /**
     * Structure used for filtering based on `name` and `type`.
     */
    class TypeNameData {
        // Own fields of Gst-0.10.TypeNameData

        name: string;
        type: GObject.GType;
    }

    /**
     * Any #GstElement using this interface should implement these methods.
     */
    class URIHandlerInterface {}

    /**
     * VTable for the #GValue `type`.
     */
    class ValueTable {
        // Own fields of Gst-0.10.ValueTable

        type: GObject.GType;
        compare: ValueCompareFunc;
        serialize: ValueSerializeFunc;
        deserialize: ValueDeserializeFunc;
    }

    class XMLClass {}

    interface ChildProxy {
        // Owm methods of Gst-0.10.ChildProxy

        get_child_by_name(name: string): Object;
        get_child_by_index(index: uint): Object;
        get_children_count(): uint;

        // Own virtual methods of Gst-0.10.ChildProxy

        vfunc_get_child_by_index(index: uint): Object;
        vfunc_get_children_count(): uint;
    }

    interface ImplementsInterface {
        // Own virtual methods of Gst-0.10.ImplementsInterface

        vfunc_supported(iface_type: GObject.GType): boolean;
    }

    interface TagSetter {
        // Owm methods of Gst-0.10.TagSetter

        reset_tags(): void;
        merge_tags(list: TagList, mode: TagMergeMode): void;
        add_tag_value(mode: TagMergeMode, tag: string, value: GObject.Value): void;
        get_tag_list(): TagList;
        set_tag_merge_mode(mode: TagMergeMode): void;
        get_tag_merge_mode(): TagMergeMode;
    }

    interface URIHandler {
        // Owm methods of Gst-0.10.URIHandler

        get_uri_type(): uint;
        get_protocols(): string[];
        get_uri(): string;
        set_uri(uri: string): boolean;
        new_uri(uri: string): void;

        // Own virtual methods of Gst-0.10.URIHandler

        vfunc_get_uri(): string;
        vfunc_set_uri(uri: string): boolean;
    }

    type ClockID = unknown;
    type ClockTime = unknown;
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
