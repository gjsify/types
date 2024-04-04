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
    function alloc_trace_get(name: string): AllocTrace;
    function alloc_trace_live_all(): number;
    function alloc_trace_print_all(): void;
    function alloc_trace_print_live(): void;
    function alloc_trace_set_flags_all(flags: AllocTraceFlags): void;
    function atomic_int_set(value: number): number;
    function caps_from_string(string: string): Caps;
    function caps_load_thyself(parent: libxml2.NodePtr): Caps;
    function child_proxy_child_added(object: Object, child: Object): void;
    function child_proxy_child_removed(object: Object, child: Object): void;
    function child_proxy_get_property(object: Object, name: string, value: GObject.Value | any): void;
    function child_proxy_lookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): boolean;
    function child_proxy_set_property(object: Object, name: string, value: GObject.Value | any): void;
    function class_signal_connect(klass: typeof Object, name: string, func: any, func_data: any): number;
    function class_signal_emit_by_name(object: Object, name: string, self: libxml2.NodePtr): void;
    function debug_add_log_function(func: LogFunction): void;
    function debug_construct_term_color(colorinfo: number): string;
    function debug_construct_win_color(colorinfo: number): number;
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
        line: number,
        object: GObject.Object,
        message: DebugMessage,
        unused: any,
    ): void;
    function debug_print_stack_trace(): void;
    function debug_remove_log_function(func: LogFunction): number;
    function debug_remove_log_function_by_data(data: any): number;
    function debug_set_active(active: boolean): void;
    function debug_set_colored(colored: boolean): void;
    function debug_set_default_threshold(level: DebugLevel): void;
    function debug_set_threshold_for_name(name: string, level: DebugLevel): void;
    function debug_unset_threshold_for_name(name: string): void;
    function default_registry_check_feature_version(
        feature_name: string,
        min_major: number,
        min_minor: number,
        min_micro: number,
    ): boolean;
    function deinit(): void;
    function error_get_message(domain: GLib.Quark, code: number): string;
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
    function init(argv?: string[] | null): string[] | null;
    function init_check(argv: string[]): [boolean, number];
    function init_get_option_group(): GLib.OptionGroup;
    function is_tag_list(p: any): boolean;
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
    function print_element_args(buf: GLib.String, indent: number, element: Element): void;
    function print_pad_caps(buf: GLib.String, indent: number, pad: Pad): void;
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
    function tag_list_copy_value(dest: GObject.Value | any, list: TagList, tag: string): boolean;
    function tag_merge_strings_with_comma(dest: GObject.Value | any, src: GObject.Value | any): void;
    function tag_merge_use_first(dest: GObject.Value | any, src: GObject.Value | any): void;
    function tag_register(
        name: string,
        flag: TagFlag,
        type: GObject.GType,
        nick: string,
        blurb: string,
        func: TagMergeFunc,
    ): void;
    function trace_read_tsc(): number;
    function type_find_helper(src: Pad, size: number): Caps;
    function type_find_helper_for_buffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps;
    function type_find_helper_for_extension(obj: Object, extension: string): Caps;
    function type_find_helper_get_range(
        obj: Object,
        func: TypeFindHelperGetRangeFunction,
        size: number,
        prob: TypeFindProbability,
    ): Caps;
    function type_find_helper_get_range_ext(
        obj: Object,
        func: TypeFindHelperGetRangeFunction,
        size: number,
        extension: string,
        prob: TypeFindProbability,
    ): Caps;
    function type_find_register(
        plugin: Plugin,
        name: string,
        rank: number,
        func: TypeFindFunction,
        extensions: string[],
        possible_caps: Caps,
        data: any,
    ): boolean;
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
        num_elements: number,
        element_size: number,
        search_func: GLib.CompareDataFunc,
        mode: SearchMode,
        search_data: any,
        user_data: any,
    ): any;
    function util_double_to_fraction(src: number): [number, number];
    function util_dump_mem(mem: number[], size: number): void;
    function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
    function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [boolean, number, number];
    function util_fraction_to_double(src_n: number, src_d: number): number;
    function util_gdouble_to_guint64(value: number): number;
    function util_get_timestamp(): ClockTime;
    function util_greatest_common_divisor(a: number, b: number): number;
    function util_guint64_to_gdouble(value: number): number;
    function util_seqnum_compare(s1: number, s2: number): number;
    function util_seqnum_next(): number;
    function util_set_object_arg(object: GObject.Object, name: string, value: string): void;
    function util_set_value_from_string(value: GObject.Value | any, value_str: string): void;
    function util_uint64_scale(val: number, num: number, denom: number): number;
    function util_uint64_scale_ceil(val: number, num: number, denom: number): number;
    function util_uint64_scale_int(val: number, num: number, denom: number): number;
    function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number;
    function util_uint64_scale_int_round(val: number, num: number, denom: number): number;
    function util_uint64_scale_round(val: number, num: number, denom: number): number;
    function value_array_append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
    function value_array_get_size(value: GObject.Value | any): number;
    function value_array_get_value(value: GObject.Value | any, index: number): unknown;
    function value_array_prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    function value_can_compare(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_can_intersect(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_can_subtract(minuend: GObject.Value | any, subtrahend: GObject.Value | any): boolean;
    function value_can_union(value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function value_compare(value1: GObject.Value | any, value2: GObject.Value | any): number;
    function value_deserialize(dest: GObject.Value | any, src: string): boolean;
    function value_dup_mini_object(value: GObject.Value | any): MiniObject;
    function value_fraction_multiply(
        product: GObject.Value | any,
        factor1: GObject.Value | any,
        factor2: GObject.Value | any,
    ): boolean;
    function value_fraction_subtract(
        dest: GObject.Value | any,
        minuend: GObject.Value | any,
        subtrahend: GObject.Value | any,
    ): boolean;
    function value_get_caps(value: GObject.Value | any): Caps;
    function value_get_date(value: GObject.Value | any): GLib.Date;
    function value_get_double_range_max(value: GObject.Value | any): number;
    function value_get_double_range_min(value: GObject.Value | any): number;
    function value_get_fourcc(value: GObject.Value | any): number;
    function value_get_fraction_denominator(value: GObject.Value | any): number;
    function value_get_fraction_numerator(value: GObject.Value | any): number;
    function value_get_fraction_range_max(value: GObject.Value | any): unknown;
    function value_get_fraction_range_min(value: GObject.Value | any): unknown;
    function value_get_int_range_max(value: GObject.Value | any): number;
    function value_get_int_range_min(value: GObject.Value | any): number;
    function value_get_mini_object(value: GObject.Value | any): MiniObject;
    function value_get_structure(value: GObject.Value | any): Structure;
    function value_init_and_copy(dest: GObject.Value | any, src: GObject.Value | any): void;
    function value_intersect(
        dest: GObject.Value | any,
        value1: GObject.Value | any,
        value2: GObject.Value | any,
    ): boolean;
    function value_is_fixed(value: GObject.Value | any): boolean;
    function value_list_append_value(value: GObject.Value | any, append_value: GObject.Value | any): void;
    function value_list_concat(
        dest: GObject.Value | any,
        value1: GObject.Value | any,
        value2: GObject.Value | any,
    ): void;
    function value_list_get_size(value: GObject.Value | any): number;
    function value_list_get_value(value: GObject.Value | any, index: number): unknown;
    function value_list_prepend_value(value: GObject.Value | any, prepend_value: GObject.Value | any): void;
    function value_register(table: ValueTable): void;
    function value_register_intersect_func(type1: GObject.GType, type2: GObject.GType, func: ValueIntersectFunc): void;
    function value_register_subtract_func(
        minuend_type: GObject.GType,
        subtrahend_type: GObject.GType,
        func: ValueSubtractFunc,
    ): void;
    function value_register_union_func(type1: GObject.GType, type2: GObject.GType, func: ValueUnionFunc): void;
    function value_serialize(value: GObject.Value | any): string;
    function value_set_caps(value: GObject.Value | any, caps: Caps): void;
    function value_set_date(value: GObject.Value | any, date: GLib.Date): void;
    function value_set_double_range(value: GObject.Value | any, start: number, end: number): void;
    function value_set_fourcc(value: GObject.Value | any, fourcc: number): void;
    function value_set_fraction(value: GObject.Value | any, numerator: number, denominator: number): void;
    function value_set_fraction_range(
        value: GObject.Value | any,
        start: GObject.Value | any,
        end: GObject.Value | any,
    ): void;
    function value_set_fraction_range_full(
        value: GObject.Value | any,
        numerator_start: number,
        denominator_start: number,
        numerator_end: number,
        denominator_end: number,
    ): void;
    function value_set_int_range(value: GObject.Value | any, start: number, end: number): void;
    function value_set_mini_object(value: GObject.Value | any, mini_object: MiniObject): void;
    function value_set_structure(value: GObject.Value | any, structure: Structure): void;
    function value_subtract(
        dest: GObject.Value | any,
        minuend: GObject.Value | any,
        subtrahend: GObject.Value | any,
    ): boolean;
    function value_take_mini_object(value: GObject.Value | any, mini_object: MiniObject): void;
    function value_union(dest: GObject.Value | any, value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    function version(): [number, number, number, number];
    function version_string(): string;
    interface BufferListDoFunction {
        (buffer: Buffer): Buffer;
    }
    interface BufferListFunc {
        (buffer: Buffer, group: number, idx: number): BufferListItem;
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
        (queue: DataQueue, visible: number, bytes: number, time: number, checkdata: any): boolean;
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
        (item: any, ret: GObject.Value | any): boolean;
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
            line: number,
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
        (pad: Pad, offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
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
        (pad: Pad, offset: number, length: number, buffer: Buffer): FlowReturn;
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
        (field_id: GLib.Quark, value: GObject.Value | any): boolean;
    }
    interface StructureMapFunc {
        (field_id: GLib.Quark, value: GObject.Value | any): boolean;
    }
    interface TagForeachFunc {
        (list: TagList, tag: string): void;
    }
    interface TagMergeFunc {
        (dest: GObject.Value | any, src: GObject.Value | any): void;
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
        (obj: Object, offset: number, length: number, buffer: Buffer): FlowReturn;
    }
    interface ValueCompareFunc {
        (value1: GObject.Value | any, value2: GObject.Value | any): number;
    }
    interface ValueDeserializeFunc {
        (dest: GObject.Value | any, s: string): boolean;
    }
    interface ValueIntersectFunc {
        (dest: GObject.Value | any, value1: GObject.Value | any, value2: GObject.Value | any): boolean;
    }
    interface ValueSerializeFunc {
        (value1: GObject.Value | any): string;
    }
    interface ValueSubtractFunc {
        (dest: GObject.Value | any, minuend: GObject.Value | any, subtrahend: GObject.Value | any): boolean;
    }
    interface ValueUnionFunc {
        (dest: GObject.Value | any, value1: GObject.Value | any, value2: GObject.Value | any): boolean;
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The opaque #GstAdapter data structure.
     */
    class Adapter extends GObject.Object {
        static $gtype: GObject.GType<Adapter>;

        // Own fields of Gst.Adapter

        object: GObject.Object;
        buflist: any[];
        size: number;
        skip: number;
        assembled_data: any;
        assembled_size: number;
        assembled_len: number;
        buflist_end: any[];

        // Constructors of Gst.Adapter

        constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Adapter;

        // Own methods of Gst.Adapter

        clear(): void;
        push(buf: Buffer): void;
        peek(size: number): number[];
        copy(dest: number[], offset: number, size: number): void;
        flush(flush: number): void;
        take(nbytes: number): number[];
        take_buffer(nbytes: number): Buffer;
        available(): number;
        available_fast(): number;
        prev_timestamp(): [ClockTime, number];
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    }

    module BaseSink {
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
     * The opaque #GstBaseSink data structure.
     */
    abstract class BaseSink extends Element {
        static $gtype: GObject.GType<BaseSink>;

        // Own properties of Gst.BaseSink

        get async(): boolean;
        set async(val: boolean);
        get blocksize(): number;
        set blocksize(val: number);
        get enable_last_buffer(): boolean;
        set enable_last_buffer(val: boolean);
        get enableLastBuffer(): boolean;
        set enableLastBuffer(val: boolean);
        get last_buffer(): Buffer;
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

        // Own fields of Gst.BaseSink

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

        // Constructors of Gst.BaseSink

        constructor(properties?: Partial<BaseSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gst.BaseSink

        vfunc_get_caps(): Caps;
        vfunc_set_caps(caps: Caps): boolean;
        vfunc_buffer_alloc(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
        vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_unlock(): boolean;
        vfunc_event(event: Event): boolean;
        vfunc_preroll(buffer: Buffer): FlowReturn;
        vfunc_render(buffer: Buffer): FlowReturn;
        vfunc_async_play(): StateChangeReturn;
        vfunc_activate_pull(active: boolean): boolean;
        vfunc_fixate(caps: Caps): void;
        vfunc_unlock_stop(): boolean;
        vfunc_render_list(buffer_list: BufferList): FlowReturn;

        // Own methods of Gst.BaseSink

        do_preroll(obj: MiniObject): FlowReturn;
        wait_preroll(): FlowReturn;
        set_sync(sync: boolean): void;
        get_sync(): boolean;
        set_max_lateness(max_lateness: number): void;
        get_max_lateness(): number;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_async_enabled(enabled: boolean): void;
        is_async_enabled(): boolean;
        set_ts_offset(offset: ClockTimeDiff): void;
        get_ts_offset(): ClockTimeDiff;
        get_last_buffer(): Buffer;
        set_last_buffer_enabled(enable: boolean): void;
        is_last_buffer_enabled(): boolean;
        query_latency(min_latency: ClockTime, max_latency: ClockTime): [boolean, boolean, boolean];
        get_latency(): ClockTime;
        set_render_delay(delay: ClockTime): void;
        get_render_delay(): ClockTime;
        set_blocksize(blocksize: number): void;
        get_blocksize(): number;
        wait_clock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn;
        wait_eos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn;
    }

    module BaseSrc {
        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {
            blocksize: never;
            do_timestamp: boolean;
            doTimestamp: boolean;
            num_buffers: number;
            numBuffers: number;
            typefind: boolean;
        }
    }

    /**
     * The opaque #GstBaseSrc data structure.
     */
    abstract class BaseSrc extends Element {
        static $gtype: GObject.GType<BaseSrc>;

        // Own properties of Gst.BaseSrc

        get blocksize(): never;
        set blocksize(val: never);
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

        // Own fields of Gst.BaseSrc

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

        // Constructors of Gst.BaseSrc

        constructor(properties?: Partial<BaseSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gst.BaseSrc

        vfunc_get_caps(): Caps;
        vfunc_set_caps(caps: Caps): boolean;
        vfunc_negotiate(): boolean;
        vfunc_newsegment(): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void;
        vfunc_get_size(): [boolean, number];
        vfunc_is_seekable(): boolean;
        vfunc_unlock(): boolean;
        vfunc_event(event: Event): boolean;
        vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn;
        vfunc_do_seek(segment: Segment): boolean;
        vfunc_query(query: Query): boolean;
        vfunc_check_get_range(): boolean;
        vfunc_fixate(caps: Caps): void;
        vfunc_unlock_stop(): boolean;
        vfunc_prepare_seek_segment(seek: Event, segment: Segment): boolean;

        // Own methods of Gst.BaseSrc

        wait_playing(): FlowReturn;
        set_live(live: boolean): void;
        is_live(): boolean;
        set_format(format: Format): void;
        query_latency(min_latency: ClockTime, max_latency: ClockTime): [boolean, boolean];
        set_blocksize(blocksize: never): void;
        get_blocksize(): never;
        set_do_timestamp(timestamp: boolean): void;
        get_do_timestamp(): boolean;
        new_seamless_segment(start: number, stop: number, position: number): boolean;
    }

    module BaseTransform {
        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {
            qos: boolean;
        }
    }

    /**
     * The opaque #GstBaseTransform data structure.
     */
    abstract class BaseTransform extends Element {
        static $gtype: GObject.GType<BaseTransform>;

        // Own properties of Gst.BaseTransform

        get qos(): boolean;
        set qos(val: boolean);

        // Own fields of Gst.BaseTransform

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

        // Constructors of Gst.BaseTransform

        constructor(properties?: Partial<BaseTransform.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gst.BaseTransform

        vfunc_transform_caps(direction: PadDirection, caps: Caps): Caps;
        vfunc_fixate_caps(direction: PadDirection, caps: Caps, othercaps: Caps): void;
        vfunc_transform_size(direction: PadDirection, caps: Caps, size: number, othercaps: Caps): [boolean, number];
        vfunc_get_unit_size(caps: Caps): [boolean, number];
        vfunc_set_caps(incaps: Caps, outcaps: Caps): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;
        vfunc_event(event: Event): boolean;
        vfunc_transform(inbuf: Buffer, outbuf: Buffer): FlowReturn;
        vfunc_transform_ip(buf: Buffer): FlowReturn;
        vfunc_prepare_output_buffer(input: Buffer, size: number, caps: Caps, buf: Buffer): FlowReturn;
        vfunc_src_event(event: Event): boolean;
        vfunc_before_transform(buffer: Buffer): void;
        vfunc_accept_caps(direction: PadDirection, caps: Caps): boolean;

        // Own methods of Gst.BaseTransform

        set_passthrough(passthrough: boolean): void;
        is_passthrough(): boolean;
        set_in_place(in_place: boolean): void;
        is_in_place(): boolean;
        update_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_gap_aware(gap_aware: boolean): void;
        suggest(caps: Caps, size: number): void;
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

        interface ConstructorProps extends Element.ConstructorProps, ChildProxy.ConstructorProps {
            async_handling: boolean;
            asyncHandling: boolean;
        }
    }

    /**
     * The GstBin base class. Subclasses can access these fields provided
     * the LOCK is taken.
     */
    class Bin extends Element implements ChildProxy {
        static $gtype: GObject.GType<Bin>;

        // Own properties of Gst.Bin

        get async_handling(): boolean;
        set async_handling(val: boolean);
        get asyncHandling(): boolean;
        set asyncHandling(val: boolean);

        // Own fields of Gst.Bin

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

        // Constructors of Gst.Bin

        constructor(properties?: Partial<Bin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Bin;

        // Own signals of Gst.Bin

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'do-latency', callback: (_source: this) => boolean): number;
        connect_after(signal: 'do-latency', callback: (_source: this) => boolean): number;
        emit(signal: 'do-latency'): void;
        connect(signal: 'element-added', callback: (_source: this, object: Element) => void): number;
        connect_after(signal: 'element-added', callback: (_source: this, object: Element) => void): number;
        emit(signal: 'element-added', object: Element): void;
        connect(signal: 'element-removed', callback: (_source: this, object: Element) => void): number;
        connect_after(signal: 'element-removed', callback: (_source: this, object: Element) => void): number;
        emit(signal: 'element-removed', object: Element): void;

        // Own virtual methods of Gst.Bin

        vfunc_add_element(element: Element): boolean;
        vfunc_remove_element(element: Element): boolean;
        vfunc_handle_message(message: Message): void;

        // Own methods of Gst.Bin

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

        // Inherited properties
        get name(): string;
        set name(val: string);

        // Inherited methods
        get_child_by_name(name: string): Object;
        get_child_by_index(index: number): Object;
        get_children_count(): number;
        vfunc_get_child_by_index(index: number): Object;
        vfunc_get_children_count(): number;
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
        vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        vfunc_restore_thyself(self: libxml2.NodePtr): void;
    }

    /**
     * The structure of a #GstBuffer. Use the associated macros to access the public
     * variables.
     */
    class Buffer extends MiniObject {
        static $gtype: GObject.GType<Buffer>;

        // Own fields of Gst.Buffer

        mini_object: MiniObject;
        data: any;
        size: number;
        timestamp: ClockTime;
        duration: ClockTime;
        offset: number;
        offset_end: number;
        malloc_data: any;
        free_func: GLib.FreeFunc;

        // Constructors of Gst.Buffer

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        static new_and_alloc(size: number): Buffer;

        // Own static methods of Gst.Buffer

        static try_new_and_alloc(size: number): Buffer;

        // Own methods of Gst.Buffer

        copy_metadata(src: Buffer, flags: BufferCopyFlags): void;
        is_metadata_writable(): boolean;
        make_metadata_writable(): Buffer;
        get_caps(): Caps;
        set_caps(caps: Caps): void;
        create_sub(offset: number, size: number): Buffer;
        is_span_fast(buf2: Buffer): boolean;
        span(offset: number, buf2: Buffer, len: number): Buffer;
        merge(buf2: Buffer): Buffer;
        join(buf2: Buffer): Buffer;
        stamp(src: Buffer): void;
    }

    class BufferList extends MiniObject {
        static $gtype: GObject.GType<BufferList>;

        // Constructors of Gst.BufferList

        _init(...args: any[]): void;

        static ['new'](): BufferList;

        // Own methods of Gst.BufferList

        n_groups(): number;
        foreach(func: BufferListFunc, user_data: any): void;
        get(group: number, idx: number): Buffer;
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

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The opaque #GstBus data structure.
     */
    class Bus extends Object {
        static $gtype: GObject.GType<Bus>;

        // Own fields of Gst.Bus

        object: Object;
        queue: GLib.Queue;
        sync_handler: BusSyncHandler;
        sync_handler_data: any;
        signal_watch_id: number;
        num_signal_watchers: number;

        // Constructors of Gst.Bus

        constructor(properties?: Partial<Bus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Bus;

        // Own signals of Gst.Bus

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'message', callback: (_source: this, object: Message) => void): number;
        connect_after(signal: 'message', callback: (_source: this, object: Message) => void): number;
        emit(signal: 'message', object: Message): void;
        connect(signal: 'sync-message', callback: (_source: this, object: Message) => void): number;
        connect_after(signal: 'sync-message', callback: (_source: this, object: Message) => void): number;
        emit(signal: 'sync-message', object: Message): void;

        // Own methods of Gst.Bus

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
        add_watch_full(priority: number, func: BusFunc, user_data: any): number;
        add_watch(func: BusFunc, user_data: any): number;
        poll(events: MessageType, timeout: ClockTimeDiff): Message;
        async_signal_func(message: Message, data: any): boolean;
        sync_signal_handler(message: Message, data: any): BusSyncReply;
        add_signal_watch(): void;
        add_signal_watch_full(priority: number): void;
        remove_signal_watch(): void;
        enable_sync_message_emission(): void;
        disable_sync_message_emission(): void;
    }

    module Clock {
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
     * #GstClock base structure. The values of this structure are
     * protected for subclasses, use the methods to use the #GstClock.
     */
    class Clock extends Object {
        static $gtype: GObject.GType<Clock>;

        // Own properties of Gst.Clock

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

        // Own fields of Gst.Clock

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

        // Constructors of Gst.Clock

        constructor(properties?: Partial<Clock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Gst.Clock

        static id_ref(id: ClockID): ClockID;
        static id_unref(id: ClockID): void;
        static id_compare_func(id1: any, id2: any): number;
        static id_get_time(id: ClockID): ClockTime;
        static id_wait(id: ClockID, jitter: ClockTimeDiff): ClockReturn;
        static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn;
        static id_wait_async_full(id: ClockID, func: ClockCallback): ClockReturn;
        static id_unschedule(id: ClockID): void;

        // Own virtual methods of Gst.Clock

        vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime;
        vfunc_get_resolution(): ClockTime;
        vfunc_get_internal_time(): ClockTime;
        vfunc_wait(entry: ClockEntry): ClockReturn;
        vfunc_wait_async(entry: ClockEntry): ClockReturn;
        vfunc_unschedule(entry: ClockEntry): void;
        vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn;

        // Own methods of Gst.Clock

        set_resolution(resolution: ClockTime): ClockTime;
        get_resolution(): ClockTime;
        get_time(): ClockTime;
        set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void;
        set_master(master: Clock): boolean;
        get_master(): Clock;
        add_observation(slave: ClockTime, master: ClockTime): [boolean, number];
        get_internal_time(): ClockTime;
        adjust_unlocked(internal: ClockTime): ClockTime;
        unadjust_unlocked(external: ClockTime): ClockTime;
        new_single_shot_id(time: ClockTime): ClockID;
        new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID;
    }

    module CollectPads {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Collectpads object.
     * Note that `data` doesn't contain the complete #GstCollectData list
     * at all times and should not be used for iterating them.
     */
    class CollectPads extends Object {
        static $gtype: GObject.GType<CollectPads>;

        // Own fields of Gst.CollectPads

        object: Object;
        data: any[];
        cookie: number;
        func: CollectPadsFunction;
        user_data: any;
        numpads: number;
        queuedpads: number;
        eospads: number;
        started: boolean;

        // Constructors of Gst.CollectPads

        constructor(properties?: Partial<CollectPads.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CollectPads;

        // Own methods of Gst.CollectPads

        set_function(func: CollectPadsFunction, user_data: any): void;
        set_clip_function(clipfunc: CollectPadsClipFunction, user_data: any): void;
        add_pad(pad: Pad, size: number): CollectData;
        add_pad_full(pad: Pad, size: number, destroy_notify: CollectDataDestroyNotify): CollectData;
        remove_pad(pad: Pad): boolean;
        is_active(pad: Pad): boolean;
        collect(): FlowReturn;
        collect_range(offset: number, length: number): FlowReturn;
        start(): void;
        stop(): void;
        set_flushing(flushing: boolean): void;
        peek(data: CollectData): Buffer;
        pop(data: CollectData): Buffer;
        available(): number;
        read(data: CollectData, size: number): [number, number];
        read_buffer(data: CollectData, size: number): Buffer;
        take_buffer(data: CollectData, size: number): Buffer;
        flush(data: CollectData, size: number): number;
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
     * Opaque #GstDataQueue structure.
     */
    class DataQueue extends GObject.Object {
        static $gtype: GObject.GType<DataQueue>;

        // Own properties of Gst.DataQueue

        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get current_level_visible(): number;
        get currentLevelVisible(): number;

        // Own fields of Gst.DataQueue

        object: GObject.Object;
        queue: GLib.Queue;
        cur_level: DataQueueSize;
        checkfull: DataQueueCheckFullFunction;
        checkdata: any;
        flushing: boolean;
        fullcallback: DataQueueFullCallback;
        emptycallback: DataQueueEmptyCallback;

        // Constructors of Gst.DataQueue

        constructor(properties?: Partial<DataQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](checkfull: DataQueueCheckFullFunction): DataQueue;

        static new_full(
            checkfull: DataQueueCheckFullFunction,
            fullcallback: DataQueueFullCallback,
            emptycallback: DataQueueEmptyCallback,
        ): DataQueue;

        // Own signals of Gst.DataQueue

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'empty', callback: (_source: this) => void): number;
        connect_after(signal: 'empty', callback: (_source: this) => void): number;
        emit(signal: 'empty'): void;
        connect(signal: 'full', callback: (_source: this) => void): number;
        connect_after(signal: 'full', callback: (_source: this) => void): number;
        emit(signal: 'full'): void;

        // Own methods of Gst.DataQueue

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

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * GStreamer element abstract base class.
     */
    abstract class Element extends Object {
        static $gtype: GObject.GType<Element>;

        // Own fields of Gst.Element

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

        // Constructors of Gst.Element

        constructor(properties?: Partial<Element.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Gst.Element

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'no-more-pads', callback: (_source: this) => void): number;
        connect_after(signal: 'no-more-pads', callback: (_source: this) => void): number;
        emit(signal: 'no-more-pads'): void;
        connect(signal: 'pad-added', callback: (_source: this, object: Pad) => void): number;
        connect_after(signal: 'pad-added', callback: (_source: this, object: Pad) => void): number;
        emit(signal: 'pad-added', object: Pad): void;
        connect(signal: 'pad-removed', callback: (_source: this, object: Pad) => void): number;
        connect_after(signal: 'pad-removed', callback: (_source: this, object: Pad) => void): number;
        emit(signal: 'pad-removed', object: Pad): void;

        // Own static methods of Gst.Element

        static register(plugin: Plugin, name: string, rank: number, type: GObject.GType): boolean;
        static make_from_uri(type: URIType, uri: string, elementname: string): Element;
        static state_get_name(state: State): string;
        static state_change_return_get_name(state_ret: StateChangeReturn): string;
        static add_pad_template(templ: PadTemplate): void;
        static get_pad_template(name: string): PadTemplate;
        static set_details(details: ElementDetails): void;
        static set_details_simple(longname: string, classification: string, description: string, author: string): void;

        // Own virtual methods of Gst.Element

        vfunc_request_new_pad(templ: PadTemplate, name: string): Pad;
        vfunc_release_pad(pad: Pad): void;
        vfunc_get_state(timeout: ClockTime): [StateChangeReturn, State, State];
        vfunc_set_state(state: State): StateChangeReturn;
        vfunc_change_state(transition: StateChange): StateChangeReturn;
        vfunc_set_bus(bus: Bus): void;
        vfunc_provide_clock(): Clock;
        vfunc_set_clock(clock: Clock): boolean;
        vfunc_get_index(): Index;
        vfunc_set_index(index: Index): void;
        vfunc_send_event(event: Event): boolean;
        vfunc_get_query_types(): QueryType;
        vfunc_query(query: Query): boolean;

        // Own methods of Gst.Element

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
            cur: number,
            stop_type: SeekType,
            stop: number,
        ): boolean;
        get_query_types(): QueryType;
        query(query: Query): boolean;
        post_message(message: Message): boolean;
        message_full(
            type: MessageType,
            domain: GLib.Quark,
            code: number,
            text: string,
            debug: string,
            file: string,
            _function: string,
            line: number,
        ): void;
        is_locked_state(): boolean;
        set_locked_state(locked_state: boolean): boolean;
        sync_state_with_parent(): boolean;
        get_state(timeout: ClockTime): [StateChangeReturn, State, State];
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
        seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean;
        query_position(format: Format): [boolean, number];
        query_duration(format: Format): [boolean, number];
        query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
        found_tags_for_pad(pad: Pad, list: TagList): void;
        found_tags(list: TagList): void;
    }

    module ElementFactory {
        // Constructor properties interface

        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }

    /**
     * The opaque #GstElementFactory data structure.
     */
    class ElementFactory extends PluginFeature {
        static $gtype: GObject.GType<ElementFactory>;

        // Own fields of Gst.ElementFactory

        type: GObject.GType;
        details: ElementDetails;
        staticpadtemplates: any[];
        numpadtemplates: number;
        uri_type: number;
        uri_protocols: string;
        interfaces: any[];

        // Constructors of Gst.ElementFactory

        constructor(properties?: Partial<ElementFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Gst.ElementFactory

        static find(name: string): ElementFactory;
        static make(factoryname: string, name: string): Element;

        // Own methods of Gst.ElementFactory

        get_element_type(): GObject.GType;
        get_longname(): string;
        get_klass(): string;
        get_description(): string;
        get_author(): string;
        get_num_pad_templates(): number;
        get_uri_type(): number;
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
        static $gtype: GObject.GType<Event>;

        // Own fields of Gst.Event

        mini_object: MiniObject;
        type: EventType;
        timestamp: number;
        src: Object;

        // Constructors of Gst.Event

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

        // Own static methods of Gst.Event

        static type_get_name(type: EventType): string;
        static type_to_quark(type: EventType): GLib.Quark;
        static type_get_flags(type: EventType): EventTypeFlags;

        // Own methods of Gst.Event

        get_structure(): Structure;
        has_name(name: string): boolean;
        get_seqnum(): number;
        set_seqnum(seqnum: number): void;
        parse_new_segment(format: Format): [boolean, number, number, number, number];
        parse_new_segment_full(format: Format): [boolean, number, number, number, number, number];
        parse_tag(taglist: TagList): void;
        parse_buffer_size(format: Format): [number, number, boolean];
        parse_qos(diff: ClockTimeDiff, timestamp: ClockTime): number;
        parse_seek(
            format: Format,
            flags: SeekFlags,
            start_type: SeekType,
            stop_type: SeekType,
        ): [number, number, number];
        parse_latency(latency: ClockTime): void;
        parse_step(format: Format): [number, number, boolean, boolean];
        parse_sink_message(msg: Message): void;
    }

    module GParamSpecMiniObject {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class GParamSpecMiniObject extends GObject.Object {
        static $gtype: GObject.GType<GParamSpecMiniObject>;

        // Constructors of Gst.GParamSpecMiniObject

        constructor(properties?: Partial<GParamSpecMiniObject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module GhostPad {
        // Constructor properties interface

        interface ConstructorProps extends ProxyPad.ConstructorProps {}
    }

    /**
     * Opaque #GstGhostPad structure.
     */
    class GhostPad extends ProxyPad {
        static $gtype: GObject.GType<GhostPad>;

        // Own fields of Gst.GhostPad

        pad: ProxyPad;

        // Constructors of Gst.GhostPad

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

        // Own methods of Gst.GhostPad

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

        interface ConstructorProps extends Object.ConstructorProps {
            resolver: IndexResolver;
        }
    }

    /**
     * Opaque #GstIndex structure.
     */
    class Index extends Object {
        static $gtype: GObject.GType<Index>;

        // Own properties of Gst.Index

        get resolver(): IndexResolver;
        set resolver(val: IndexResolver);

        // Own fields of Gst.Index

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

        // Constructors of Gst.Index

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Index;

        // Own signals of Gst.Index

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'entry-added', callback: (_source: this, object: IndexEntry) => void): number;
        connect_after(signal: 'entry-added', callback: (_source: this, object: IndexEntry) => void): number;
        emit(signal: 'entry-added', object: IndexEntry): void;

        // Own virtual methods of Gst.Index

        vfunc_get_writer_id(writer_string: string): [boolean, number];
        vfunc_commit(id: number): void;
        vfunc_add_entry(entry: IndexEntry): void;
        vfunc_get_assoc_entry(
            id: number,
            method: IndexLookupMethod,
            flags: AssocFlags,
            format: Format,
            value: number,
            func: GLib.CompareDataFunc,
            user_data: any,
        ): IndexEntry;

        // Own methods of Gst.Index

        commit(id: number): void;
        get_group(): number;
        new_group(): number;
        set_group(groupnum: number): boolean;
        set_certainty(certainty: IndexCertainty): void;
        get_certainty(): IndexCertainty;
        set_filter(filter: IndexFilter, user_data: any): void;
        set_filter_full(filter: IndexFilter, user_data: any): void;
        set_resolver(resolver: IndexResolver, user_data: any): void;
        set_resolver_full(resolver: IndexResolver, user_data: any): void;
        get_writer_id(writer: Object): [boolean, number];
        add_format(id: number, format: Format): IndexEntry;
        add_associationv(id: number, flags: AssocFlags, n: number, list: IndexAssociation): IndexEntry;
        add_object(id: number, key: string, type: GObject.GType, object: any): IndexEntry;
        add_id(id: number, description: string): IndexEntry;
        get_assoc_entry(
            id: number,
            method: IndexLookupMethod,
            flags: AssocFlags,
            format: Format,
            value: number,
        ): IndexEntry;
        get_assoc_entry_full(
            id: number,
            method: IndexLookupMethod,
            flags: AssocFlags,
            format: Format,
            value: number,
            func: GLib.CompareDataFunc,
            user_data: any,
        ): IndexEntry;
    }

    module IndexFactory {
        // Constructor properties interface

        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }

    /**
     * The GstIndexFactory object
     */
    class IndexFactory extends PluginFeature {
        static $gtype: GObject.GType<IndexFactory>;

        // Own fields of Gst.IndexFactory

        feature: PluginFeature;
        longdesc: string;
        type: GObject.GType;

        // Constructors of Gst.IndexFactory

        constructor(properties?: Partial<IndexFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, longdesc: string, type: GObject.GType): IndexFactory;

        // Own static methods of Gst.IndexFactory

        static find(name: string): IndexFactory;
        static make(name: string): Index;

        // Own methods of Gst.IndexFactory

        destroy(): void;
        create(): Index;
    }

    /**
     * A #GstMessage.
     */
    class Message extends MiniObject {
        static $gtype: GObject.GType<Message>;

        // Own fields of Gst.Message

        mini_object: MiniObject;
        type: MessageType;
        timestamp: number;
        src: Object;

        // Constructors of Gst.Message

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

        // Own static methods of Gst.Message

        static type_get_name(type: MessageType): string;
        static type_to_quark(type: MessageType): GLib.Quark;

        // Own methods of Gst.Message

        get_seqnum(): number;
        set_seqnum(seqnum: number): void;
        parse_error(gerror: GLib.Error, debug: string[]): void;
        parse_warning(gerror: GLib.Error, debug: string[]): void;
        parse_info(gerror: GLib.Error, debug: string[]): void;
        parse_tag(tag_list: TagList): void;
        parse_tag_full(pad: Pad, tag_list: TagList): void;
        parse_buffering(): number;
        set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void;
        parse_buffering_stats(mode: BufferingMode): [number, number, number];
        parse_state_changed(oldstate: State, newstate: State, pending: State): void;
        parse_step_done(format: Format): [number, number, boolean, boolean, number, boolean];
        parse_clock_provide(clock: Clock): boolean;
        parse_clock_lost(clock: Clock): void;
        parse_new_clock(clock: Clock): void;
        parse_segment_start(format: Format): number;
        parse_segment_done(format: Format): number;
        parse_duration(format: Format): number;
        parse_async_start(): boolean;
        parse_structure_change(type: StructureChangeType, owner: Element): boolean;
        parse_stream_status(type: StreamStatusType, owner: Element): void;
        set_stream_status_object(object: GObject.Value | any): void;
        get_stream_status_object(): unknown;
        parse_request_state(state: State): void;
        parse_step_start(format: Format): [boolean, number, number, boolean, boolean];
        set_qos_values(jitter: number, proportion: number, quality: number): void;
        set_qos_stats(format: Format, processed: number, dropped: number): void;
        parse_qos(): [boolean, number, number, number, number];
        parse_qos_values(): [number, number, number];
        parse_qos_stats(format: Format): [number, number];
        get_structure(): Structure;
    }

    /**
     * Base class for refcounted lightweight objects.
     */
    abstract class MiniObject {
        static $gtype: GObject.GType<MiniObject>;

        // Own fields of Gst.MiniObject

        refcount: number;
        flags: number;

        // Constructors of Gst.MiniObject

        _init(...args: any[]): void;

        static ['new'](type: GObject.GType): MiniObject;

        // Own methods of Gst.MiniObject

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * GStreamer base object class.
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Own properties of Gst.Object

        get name(): string;
        set name(val: string);

        // Own fields of Gst.Object

        object: GObject.Object;
        refcount: number;
        name_prefix: string;
        flags: number;

        // Constructors of Gst.Object

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Gst.Object

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'deep-notify',
            callback: (_source: this, object: Object, p0: GObject.ParamSpec) => void,
        ): number;
        connect_after(
            signal: 'deep-notify',
            callback: (_source: this, object: Object, p0: GObject.ParamSpec) => void,
        ): number;
        emit(signal: 'deep-notify', object: Object, p0: GObject.ParamSpec): void;
        connect(signal: 'object-saved', callback: (_source: this, object: any) => void): number;
        connect_after(signal: 'object-saved', callback: (_source: this, object: any) => void): number;
        emit(signal: 'object-saved', object: any): void;
        connect(signal: 'parent-set', callback: (_source: this, object: Object) => void): number;
        connect_after(signal: 'parent-set', callback: (_source: this, object: Object) => void): number;
        emit(signal: 'parent-set', object: Object): void;
        connect(signal: 'parent-unset', callback: (_source: this, object: Object) => void): number;
        connect_after(signal: 'parent-unset', callback: (_source: this, object: Object) => void): number;
        emit(signal: 'parent-unset', object: Object): void;

        // Own static methods of Gst.Object

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

        // Own virtual methods of Gst.Object

        vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        vfunc_restore_thyself(self: libxml2.NodePtr): void;

        // Own methods of Gst.Object

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

        interface ConstructorProps extends Object.ConstructorProps {
            caps: Caps;
            direction: PadDirection;
            template: PadTemplate;
        }
    }

    /**
     * The #GstPad structure. Use the functions to update the variables.
     */
    class Pad extends Object {
        static $gtype: GObject.GType<Pad>;

        // Own properties of Gst.Pad

        get caps(): Caps;
        get direction(): PadDirection;
        get template(): PadTemplate;
        set template(val: PadTemplate);

        // Own fields of Gst.Pad

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

        // Constructors of Gst.Pad

        constructor(properties?: Partial<Pad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, direction: PadDirection): Pad;

        static new_from_template(templ: PadTemplate, name: string): Pad;

        static new_from_static_template(templ: StaticPadTemplate, name: string): Pad;

        // Own signals of Gst.Pad

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'have-data', callback: (_source: this, object: MiniObject) => boolean): number;
        connect_after(signal: 'have-data', callback: (_source: this, object: MiniObject) => boolean): number;
        emit(signal: 'have-data', object: MiniObject): void;
        connect(signal: 'linked', callback: (_source: this, object: Pad) => void): number;
        connect_after(signal: 'linked', callback: (_source: this, object: Pad) => void): number;
        emit(signal: 'linked', object: Pad): void;
        connect(signal: 'request-link', callback: (_source: this) => void): number;
        connect_after(signal: 'request-link', callback: (_source: this) => void): number;
        emit(signal: 'request-link'): void;
        connect(signal: 'unlinked', callback: (_source: this, object: Pad) => void): number;
        connect_after(signal: 'unlinked', callback: (_source: this, object: Pad) => void): number;
        emit(signal: 'unlinked', object: Pad): void;

        // Own static methods of Gst.Pad

        static load_and_link(self: libxml2.NodePtr, parent: Object): void;

        // Own methods of Gst.Pad

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
        alloc_buffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
        alloc_buffer_and_set_caps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn;
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
        pull_range(offset: number, size: number, buffer: Buffer): FlowReturn;
        push_event(event: Event): boolean;
        event_default(event: Event): boolean;
        chain(buffer: Buffer): FlowReturn;
        chain_list(list: BufferList): FlowReturn;
        get_range(offset: number, size: number, buffer: Buffer): FlowReturn;
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
        query_position(format: Format): [boolean, number];
        query_duration(format: Format): [boolean, number];
        query_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
        query_peer_position(format: Format): [boolean, number];
        query_peer_duration(format: Format): [boolean, number];
        query_peer_convert(src_format: Format, src_val: number, dest_format: Format): [boolean, number];
        add_data_probe(handler: GObject.Callback, data: any): never;
        add_data_probe_full(handler: GObject.Callback, data: any): never;
        remove_data_probe(handler_id: number): void;
        add_event_probe(handler: GObject.Callback, data: any): never;
        add_event_probe_full(handler: GObject.Callback, data: any): never;
        remove_event_probe(handler_id: number): void;
        add_buffer_probe(handler: GObject.Callback, data: any): never;
        add_buffer_probe_full(handler: GObject.Callback, data: any): never;
        remove_buffer_probe(handler_id: number): void;
    }

    module PadTemplate {
        // Signal callback interfaces

        interface PadCreated {
            (object: Pad): void;
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
     */
    class PadTemplate extends Object {
        static $gtype: GObject.GType<PadTemplate>;

        // Own properties of Gst.PadTemplate

        get caps(): Caps;
        get direction(): PadDirection;
        get name_template(): string;
        get nameTemplate(): string;
        get presence(): PadPresence;

        // Own fields of Gst.PadTemplate

        object: Object;

        // Constructors of Gst.PadTemplate

        constructor(properties?: Partial<PadTemplate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate;

        // Own signals of Gst.PadTemplate

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'pad-created', callback: (_source: this, object: Pad) => void): number;
        connect_after(signal: 'pad-created', callback: (_source: this, object: Pad) => void): number;
        emit(signal: 'pad-created', object: Pad): void;

        // Own methods of Gst.PadTemplate

        get_caps(): Caps;
        pad_created(pad: Pad): void;
    }

    module ParamFraction {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ParamFraction extends GObject.Object {
        static $gtype: GObject.GType<ParamFraction>;

        // Constructors of Gst.ParamFraction

        constructor(properties?: Partial<ParamFraction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Pipeline {
        // Constructor properties interface

        interface ConstructorProps extends Bin.ConstructorProps, ChildProxy.ConstructorProps {
            auto_flush_bus: boolean;
            autoFlushBus: boolean;
            delay: number;
        }
    }

    /**
     * The #GstPipeline structure.
     */
    class Pipeline extends Bin implements ChildProxy {
        static $gtype: GObject.GType<Pipeline>;

        // Own properties of Gst.Pipeline

        get auto_flush_bus(): boolean;
        set auto_flush_bus(val: boolean);
        get autoFlushBus(): boolean;
        set autoFlushBus(val: boolean);
        get delay(): number;
        set delay(val: number);

        // Own fields of Gst.Pipeline

        bin: Bin;
        fixed_clock: Clock;
        stream_time: ClockTime;

        // Constructors of Gst.Pipeline

        constructor(properties?: Partial<Pipeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Pipeline;

        // Own methods of Gst.Pipeline

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

        // Inherited properties
        get name(): string;
        set name(val: string);

        // Inherited methods
        get_child_by_name(name: string): Object;
        get_child_by_index(index: number): Object;
        get_children_count(): number;
        vfunc_get_child_by_index(index: number): Object;
        vfunc_get_children_count(): number;
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
        vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr;
        vfunc_restore_thyself(self: libxml2.NodePtr): void;
    }

    module Plugin {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The plugin object
     */
    class Plugin extends Object {
        static $gtype: GObject.GType<Plugin>;

        // Own fields of Gst.Plugin

        object: Object;
        flags: number;
        filename: string;
        basename: string;
        file_size: number;
        file_mtime: number;
        registered: boolean;

        // Constructors of Gst.Plugin

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Gst.Plugin

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
        static load_file(filename: string): Plugin;
        static load_by_name(name: string): Plugin;

        // Own methods of Gst.Plugin

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

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Opaque #GstPluginFeature structure.
     */
    abstract class PluginFeature extends Object {
        static $gtype: GObject.GType<PluginFeature>;

        // Own fields of Gst.PluginFeature

        object: Object;
        loaded: boolean;

        // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
        name: string;
        rank: number;
        plugin_name: string;

        // Constructors of Gst.PluginFeature

        constructor(properties?: Partial<PluginFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gst.PluginFeature

        load(): PluginFeature;
        type_name_filter(data: TypeNameData): boolean;
        set_rank(rank: number): void;
        set_name(name: string): void;
        // Conflicted with Gst.Object.set_name
        set_name(...args: never[]): any;
        get_rank(): number;
        get_name(): string;
        check_version(min_major: number, min_minor: number, min_micro: number): boolean;
    }

    module ProxyPad {
        // Constructor properties interface

        interface ConstructorProps extends Pad.ConstructorProps {}
    }

    class ProxyPad extends Pad {
        static $gtype: GObject.GType<ProxyPad>;

        // Own fields of Gst.ProxyPad

        pad: Pad;

        // Constructors of Gst.ProxyPad

        constructor(properties?: Partial<ProxyPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module PushSrc {
        // Constructor properties interface

        interface ConstructorProps extends BaseSrc.ConstructorProps {}
    }

    /**
     * The opaque #GstPushSrc data structure.
     */
    class PushSrc extends BaseSrc {
        static $gtype: GObject.GType<PushSrc>;

        // Constructors of Gst.PushSrc

        constructor(properties?: Partial<PushSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Gst.PushSrc

        vfunc_create(buf: Buffer): FlowReturn;
        // Conflicted with Gst.BaseSrc.vfunc_create
        vfunc_create(...args: never[]): any;
    }

    /**
     * The #GstQuery structure.
     */
    class Query extends MiniObject {
        static $gtype: GObject.GType<Query>;

        // Own fields of Gst.Query

        mini_object: MiniObject;
        type: QueryType;

        // Constructors of Gst.Query

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

        // Own static methods of Gst.Query

        static type_get_name(query: QueryType): string;
        static type_to_quark(query: QueryType): GLib.Quark;
        static type_register(nick: string, description: string): QueryType;
        static type_get_by_nick(nick: string): QueryType;
        static types_contains(types: QueryType, type: QueryType): boolean;
        static type_get_details(type: QueryType): QueryTypeDefinition;
        static type_iterate_definitions(): Iterator;

        // Own methods of Gst.Query

        set_position(format: Format, cur: number): void;
        parse_position(format: Format): number;
        set_duration(format: Format, duration: number): void;
        parse_duration(format: Format): number;
        set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void;
        parse_latency(min_latency: ClockTime, max_latency: ClockTime): boolean;
        set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void;
        parse_convert(src_format: Format, dest_format: Format): [number, number];
        set_segment(rate: number, format: Format, start_value: number, stop_value: number): void;
        parse_segment(format: Format): [number, number, number];
        get_structure(): Structure;
        set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void;
        parse_seeking(format: Format): [boolean, number, number];
        set_formatsv(n_formats: number, formats: Format): void;
        parse_formats_length(): number;
        parse_formats_nth(nth: number, format: Format): void;
        set_buffering_percent(busy: boolean, percent: number): void;
        parse_buffering_percent(): [boolean, number];
        set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void;
        parse_buffering_stats(mode: BufferingMode): [number, number, number];
        set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void;
        parse_buffering_range(format: Format): [number, number, number];
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

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * Opaque #GstRegistry structure.
     */
    class Registry extends Object {
        static $gtype: GObject.GType<Registry>;

        // Own fields of Gst.Registry

        object: Object;
        plugins: any[];
        features: any[];
        paths: any[];
        cache_file: number;

        // Constructors of Gst.Registry

        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Gst.Registry

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'feature-added', callback: (_source: this, object: any) => void): number;
        connect_after(signal: 'feature-added', callback: (_source: this, object: any) => void): number;
        emit(signal: 'feature-added', object: any): void;
        connect(signal: 'plugin-added', callback: (_source: this, object: any) => void): number;
        connect_after(signal: 'plugin-added', callback: (_source: this, object: any) => void): number;
        emit(signal: 'plugin-added', object: any): void;

        // Own static methods of Gst.Registry

        static get_default(): Registry;
        static fork_is_enabled(): boolean;
        static fork_set_enabled(enabled: boolean): void;

        // Own methods of Gst.Registry

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

        interface ConstructorProps extends Clock.ConstructorProps {
            clock_type: ClockType;
            clockType: ClockType;
        }
    }

    /**
     * The default implementation of a #GstClock that uses the system time.
     */
    class SystemClock extends Clock {
        static $gtype: GObject.GType<SystemClock>;

        // Own properties of Gst.SystemClock

        get clock_type(): ClockType;
        set clock_type(val: ClockType);
        get clockType(): ClockType;
        set clockType(val: ClockType);

        // Own fields of Gst.SystemClock

        clock: Clock;
        stopping: boolean;

        // Constructors of Gst.SystemClock

        constructor(properties?: Partial<SystemClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Gst.SystemClock

        static obtain(): Clock;
    }

    module Task {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The #GstTask object.
     */
    class Task extends Object {
        static $gtype: GObject.GType<Task>;

        // Own fields of Gst.Task

        object: Object;
        state: TaskState;
        lock: never;
        func: TaskFunction;
        data: any;
        running: boolean;

        // Constructors of Gst.Task

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Gst.Task

        static cleanup_all(): void;
        static create(func: TaskFunction): Task;

        // Own methods of Gst.Task

        set_lock(mutex: never): void;
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

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * The #GstTaskPool object.
     */
    class TaskPool extends Object {
        static $gtype: GObject.GType<TaskPool>;

        // Own fields of Gst.TaskPool

        object: Object;

        // Constructors of Gst.TaskPool

        constructor(properties?: Partial<TaskPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TaskPool;

        // Own virtual methods of Gst.TaskPool

        vfunc_prepare(): void;
        vfunc_cleanup(): void;
        vfunc_push(func: TaskPoolFunction, user_data: any): any;
        vfunc_join(id: any): void;

        // Own methods of Gst.TaskPool

        prepare(): void;
        push(func: TaskPoolFunction, user_data: any): any;
        join(id: any): void;
        cleanup(): void;
    }

    module TypeFindFactory {
        // Constructor properties interface

        interface ConstructorProps extends PluginFeature.ConstructorProps {}
    }

    /**
     * Object that stores information about a typefind function.
     */
    class TypeFindFactory extends PluginFeature {
        static $gtype: GObject.GType<TypeFindFactory>;

        // Own fields of Gst.TypeFindFactory

        feature: PluginFeature;
        'function': TypeFindFunction;
        extensions: string;
        user_data: any;
        user_data_notify: GLib.DestroyNotify;

        // Constructors of Gst.TypeFindFactory

        constructor(properties?: Partial<TypeFindFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Gst.TypeFindFactory

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

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * XML parser object
     */
    class XML extends Object {
        static $gtype: GObject.GType<XML>;

        // Own fields of Gst.XML

        object: Object;
        topelements: any[];

        // Constructors of Gst.XML

        constructor(properties?: Partial<XML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XML;

        // Own signals of Gst.XML

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'object-loaded', callback: (_source: this, object: Object, p0: any) => void): number;
        connect_after(signal: 'object-loaded', callback: (_source: this, object: Object, p0: any) => void): number;
        emit(signal: 'object-loaded', object: Object, p0: any): void;

        // Own static methods of Gst.XML

        static write(element: Element): libxml2.DocPtr;
        static make_element(cur: libxml2.NodePtr, parent: Object): Element;

        // Own virtual methods of Gst.XML

        vfunc_object_saved(object: Object, self: libxml2.NodePtr): void;

        // Own methods of Gst.XML

        parse_doc(doc: libxml2.DocPtr, root: number[]): boolean;
        parse_file(fname: number[], root: number[]): boolean;
        parse_memory(buffer: number[], size: number, root: string): boolean;
        get_element(name: number[]): Element;
    }

    type AdapterClass = typeof Adapter;
    class AdapterPrivate {
        static $gtype: GObject.GType<AdapterPrivate>;

        // Constructors of Gst.AdapterPrivate

        _init(...args: any[]): void;
    }

    /**
     * The main tracing object
     */
    class AllocTrace {
        static $gtype: GObject.GType<AllocTrace>;

        // Own fields of Gst.AllocTrace

        name: string;
        flags: number;
        live: number;
        mem_live: any[];

        // Constructors of Gst.AllocTrace

        constructor(
            properties?: Partial<{
                name: string;
                flags: number;
                live: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Gst.AllocTrace

        print(): void;
        set_flags(flags: AllocTraceFlags): void;
    }

    type BaseSinkClass = typeof BaseSink;
    class BaseSinkPrivate {
        static $gtype: GObject.GType<BaseSinkPrivate>;

        // Constructors of Gst.BaseSinkPrivate

        _init(...args: any[]): void;
    }

    type BaseSrcClass = typeof BaseSrc;
    class BaseSrcPrivate {
        static $gtype: GObject.GType<BaseSrcPrivate>;

        // Constructors of Gst.BaseSrcPrivate

        _init(...args: any[]): void;
    }

    type BaseTransformClass = typeof BaseTransform;
    class BaseTransformPrivate {
        static $gtype: GObject.GType<BaseTransformPrivate>;

        // Constructors of Gst.BaseTransformPrivate

        _init(...args: any[]): void;
    }

    type BinClass = typeof Bin;
    class BinPrivate {
        static $gtype: GObject.GType<BinPrivate>;

        // Constructors of Gst.BinPrivate

        _init(...args: any[]): void;
    }

    /**
     * A bit reader instance.
     */
    class BitReader {
        static $gtype: GObject.GType<BitReader>;

        // Own fields of Gst.BitReader

        data: any;
        size: number;
        'byte': number;
        bit: number;

        // Constructors of Gst.BitReader

        constructor(
            properties?: Partial<{
                data: any;
                size: number;
                byte: number;
                bit: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](data: number[], size: number): BitReader;

        static new_from_buffer(buffer: Buffer): BitReader;

        // Own methods of Gst.BitReader

        free(): void;
        init(data: number[], size: number): void;
        init_from_buffer(buffer: Buffer): void;
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        skip(nbits: number): boolean;
        skip_to_byte(): boolean;
        get_bits_uint8(val: number[], nbits: number): boolean;
        get_bits_uint16(nbits: number): [boolean, number];
        get_bits_uint32(nbits: number): [boolean, number];
        get_bits_uint64(nbits: number): [boolean, number];
        peek_bits_uint8(val: number[], nbits: number): boolean;
        peek_bits_uint16(nbits: number): [boolean, number];
        peek_bits_uint32(nbits: number): [boolean, number];
        peek_bits_uint64(nbits: number): [boolean, number];
    }

    type BufferClass = typeof Buffer;
    type BufferListClass = typeof BufferList;
    class BufferListIterator {
        static $gtype: GObject.GType<BufferListIterator>;

        // Constructors of Gst.BufferListIterator

        _init(...args: any[]): void;

        // Own methods of Gst.BufferListIterator

        free(): void;
        n_buffers(): number;
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

    type BusClass = typeof Bus;
    class BusPrivate {
        static $gtype: GObject.GType<BusPrivate>;

        // Constructors of Gst.BusPrivate

        _init(...args: any[]): void;
    }

    /**
     * A byte reader instance.
     */
    class ByteReader {
        static $gtype: GObject.GType<ByteReader>;

        // Own fields of Gst.ByteReader

        data: any;
        size: number;
        'byte': number;

        // Constructors of Gst.ByteReader

        constructor(
            properties?: Partial<{
                data: any;
                size: number;
                byte: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](data: number[], size: number): ByteReader;

        static new_from_buffer(buffer: Buffer): ByteReader;

        // Own methods of Gst.ByteReader

        free(): void;
        init(data: number[], size: number): void;
        init_from_buffer(buffer: Buffer): void;
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        skip(nbytes: number): boolean;
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
        dup_data(size: number): [boolean, number];
        get_data(size: number): [boolean, number];
        peek_data(size: number): [boolean, number];
        dup_string_utf8(str: string[]): boolean;
        dup_string_utf16(): [boolean, number];
        dup_string_utf32(): [boolean, number];
        skip_string_utf8(): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        get_string_utf8(str: string[]): boolean;
        peek_string_utf8(str: string[]): boolean;
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    }

    /**
     * A byte writer instance.
     */
    class ByteWriter {
        static $gtype: GObject.GType<ByteWriter>;

        // Own fields of Gst.ByteWriter

        alloc_size: number;
        fixed: boolean;
        owned: boolean;

        // Constructors of Gst.ByteWriter

        constructor(
            properties?: Partial<{
                parent: ByteReader;
                alloc_size: number;
                fixed: boolean;
                owned: boolean;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): ByteWriter;

        static new_with_size(size: number, fixed: boolean): ByteWriter;

        static new_with_data(data: number[], size: number, initialized: boolean): ByteWriter;

        static new_with_buffer(buffer: Buffer, initialized: boolean): ByteWriter;

        // Own methods of Gst.ByteWriter

        init(): void;
        init_with_size(size: number, fixed: boolean): void;
        init_with_data(data: number[], size: number, initialized: boolean): void;
        init_with_buffer(buffer: Buffer, initialized: boolean): void;
        free(): void;
        free_and_get_data(): number[];
        free_and_get_buffer(): Buffer;
        reset(): void;
        reset_and_get_data(): number[];
        reset_and_get_buffer(): Buffer;
        get_remaining(): number;
        ensure_free_space(size: number): boolean;
        put_uint8(val: number): boolean;
        put_int8(val: number): boolean;
        put_uint16_be(val: number): boolean;
        put_uint16_le(val: number): boolean;
        put_int16_be(val: number): boolean;
        put_int16_le(val: number): boolean;
        put_uint24_be(val: number): boolean;
        put_uint24_le(val: number): boolean;
        put_int24_be(val: number): boolean;
        put_int24_le(val: number): boolean;
        put_uint32_be(val: number): boolean;
        put_uint32_le(val: number): boolean;
        put_int32_be(val: number): boolean;
        put_int32_le(val: number): boolean;
        put_uint64_be(val: number): boolean;
        put_uint64_le(val: number): boolean;
        put_int64_be(val: number): boolean;
        put_int64_le(val: number): boolean;
        put_float32_be(val: number): boolean;
        put_float32_le(val: number): boolean;
        put_float64_be(val: number): boolean;
        put_float64_le(val: number): boolean;
        put_data(data: number[], size: number): boolean;
        fill(value: number, size: number): boolean;
        put_string_utf8(data: string): boolean;
        put_string_utf16(): [boolean, number];
        put_string_utf32(): [boolean, number];
    }

    /**
     * Object describing media types.
     */
    class Caps {
        static $gtype: GObject.GType<Caps>;

        // Own fields of Gst.Caps

        type: GObject.GType;
        refcount: number;
        flags: CapsFlags;
        structs: GLib.PtrArray;

        // Constructors of Gst.Caps

        constructor(
            properties?: Partial<{
                type: GObject.GType;
                refcount: number;
                flags: CapsFlags;
                _gst_reserved: any[];
            }>,
        );
        _init(...args: any[]): void;

        static new_empty(): Caps;

        static new_any(): Caps;

        // Own methods of Gst.Caps

        ref(): Caps;
        copy(): Caps;
        make_writable(): Caps;
        unref(): void;
        append(caps2: Caps): void;
        merge(caps2: Caps): void;
        append_structure(structure: Structure): void;
        remove_structure(idx: number): void;
        merge_structure(structure: Structure): void;
        get_size(): number;
        get_structure(index: number): Structure;
        steal_structure(index: number): Structure;
        copy_nth(nth: number): Caps;
        truncate(): void;
        set_value(field: string, value: GObject.Value | any): void;
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

    type ChildProxyInterface = typeof ChildProxy;
    type ClockClass = typeof Clock;
    /**
     * All pending timeouts or periodic notifies are converted into
     * an entry.
     * Note that GstClockEntry should be treated as an opaque structure. It must
     * not be extended or allocated using a custom allocator.
     */
    class ClockEntry {
        static $gtype: GObject.GType<ClockEntry>;

        // Own fields of Gst.ClockEntry

        refcount: number;
        clock: Clock;
        type: ClockEntryType;
        time: ClockTime;
        interval: ClockTime;
        status: ClockReturn;
        func: ClockCallback;
        user_data: any;
        destroy_data: GLib.DestroyNotify;

        // Constructors of Gst.ClockEntry

        _init(...args: any[]): void;
    }

    class ClockPrivate {
        static $gtype: GObject.GType<ClockPrivate>;

        // Constructors of Gst.ClockPrivate

        _init(...args: any[]): void;
    }

    /**
     * Structure used by the collect_pads.
     */
    class CollectData {
        static $gtype: GObject.GType<CollectData>;

        // Own fields of Gst.CollectData

        collect: CollectPads;
        pad: Pad;
        buffer: Buffer;
        pos: number;

        // Constructors of Gst.CollectData

        _init(...args: any[]): void;
    }

    type CollectPadsClass = typeof CollectPads;
    class CollectPadsPrivate {
        static $gtype: GObject.GType<CollectPadsPrivate>;

        // Constructors of Gst.CollectPadsPrivate

        _init(...args: any[]): void;
    }

    type DataQueueClass = typeof DataQueue;
    /**
     * Structure used by #GstDataQueue. You can supply a different structure, as
     * long as the top of the structure is identical to this structure.
     */
    class DataQueueItem {
        static $gtype: GObject.GType<DataQueueItem>;

        // Own fields of Gst.DataQueueItem

        object: MiniObject;
        size: number;
        duration: number;
        visible: boolean;
        destroy: GLib.DestroyNotify;

        // Constructors of Gst.DataQueueItem

        _init(...args: any[]): void;
    }

    /**
     * Structure describing the size of a queue.
     */
    class DataQueueSize {
        static $gtype: GObject.GType<DataQueueSize>;

        // Own fields of Gst.DataQueueSize

        visible: number;
        bytes: number;
        time: number;

        // Constructors of Gst.DataQueueSize

        constructor(
            properties?: Partial<{
                visible: number;
                bytes: number;
                time: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * This is the struct that describes the categories. Once initialized with
     * #GST_DEBUG_CATEGORY_INIT, its values can't be changed anymore.
     */
    class DebugCategory {
        static $gtype: GObject.GType<DebugCategory>;

        // Own fields of Gst.DebugCategory

        threshold: number;
        color: number;
        name: string;
        description: string;

        // Constructors of Gst.DebugCategory

        constructor(
            properties?: Partial<{
                threshold: number;
                color: number;
                name: string;
                description: string;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Gst.DebugCategory

        free(): void;
        set_threshold(level: DebugLevel): void;
        reset_threshold(): void;
        get_threshold(): DebugLevel;
        get_name(): string;
        get_color(): number;
        get_description(): string;
    }

    class DebugMessage {
        static $gtype: GObject.GType<DebugMessage>;

        // Constructors of Gst.DebugMessage

        _init(...args: any[]): void;

        // Own methods of Gst.DebugMessage

        get(): string;
    }

    type ElementClass = typeof Element;
    /**
     * This struct defines the public information about a #GstElement. It contains
     * meta-data about the element that is mostly for the benefit of editors.
     * The `klass` member can be used by applications to filter elements based
     * on functionality.
     */
    class ElementDetails {
        static $gtype: GObject.GType<ElementDetails>;

        // Own fields of Gst.ElementDetails

        longname: string;
        klass: string;
        description: string;
        author: string;

        // Constructors of Gst.ElementDetails

        constructor(
            properties?: Partial<{
                longname: string;
                klass: string;
                description: string;
                author: string;
                _gst_reserved: any[];
            }>,
        );
        _init(...args: any[]): void;
    }

    type ElementFactoryClass = typeof ElementFactory;
    type EventClass = typeof Event;
    /**
     * A format definition
     */
    class FormatDefinition {
        static $gtype: GObject.GType<FormatDefinition>;

        // Own fields of Gst.FormatDefinition

        value: Format;
        nick: string;
        description: string;
        quark: GLib.Quark;

        // Constructors of Gst.FormatDefinition

        _init(...args: any[]): void;
    }

    type GhostPadClass = typeof GhostPad;
    class GhostPadPrivate {
        static $gtype: GObject.GType<GhostPadPrivate>;

        // Constructors of Gst.GhostPadPrivate

        _init(...args: any[]): void;
    }

    type ImplementsInterfaceClass = typeof ImplementsInterface;
    /**
     * An association in an entry.
     */
    class IndexAssociation {
        static $gtype: GObject.GType<IndexAssociation>;

        // Own fields of Gst.IndexAssociation

        format: Format;
        value: number;

        // Constructors of Gst.IndexAssociation

        _init(...args: any[]): void;
    }

    type IndexClass = typeof Index;
    /**
     * The basic element of an index.
     */
    class IndexEntry {
        static $gtype: GObject.GType<IndexEntry>;

        // Own fields of Gst.IndexEntry

        type: IndexEntryType;
        id: number;

        // Constructors of Gst.IndexEntry

        _init(...args: any[]): void;

        // Own methods of Gst.IndexEntry

        copy(): IndexEntry;
        free(): void;
        assoc_map(format: Format): [boolean, number];
    }

    type IndexFactoryClass = typeof IndexFactory;
    /**
     * A group of related entries in an index.
     */
    class IndexGroup {
        static $gtype: GObject.GType<IndexGroup>;

        // Own fields of Gst.IndexGroup

        groupnum: number;
        entries: any[];
        certainty: IndexCertainty;
        peergroup: number;

        // Constructors of Gst.IndexGroup

        _init(...args: any[]): void;
    }

    /**
     * #GstIterator base structure. The values of this structure are
     * protected for subclasses, use the methods to use the #GstIterator.
     */
    class Iterator {
        static $gtype: GObject.GType<Iterator>;

        // Own fields of Gst.Iterator

        item: IteratorItemFunction;
        type: GObject.GType;
        cookie: number;
        master_cookie: any;

        // Constructors of Gst.Iterator

        constructor(
            size: number,
            type: GObject.GType,
            lock: GLib.Mutex,
            next: IteratorNextFunction,
            item: IteratorItemFunction,
            resync: IteratorResyncFunction,
            free: IteratorFreeFunction,
        );
        _init(...args: any[]): void;

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

        // Own methods of Gst.Iterator

        next(elem: any): IteratorResult;
        resync(): void;
        free(): void;
        push(other: Iterator): void;
        filter(func: GLib.CompareFunc, user_data: any): Iterator;
        fold(func: IteratorFoldFunction, ret: GObject.Value | any, user_data: any): IteratorResult;
        foreach(func: GLib.Func, user_data: any): IteratorResult;
        find_custom(func: GLib.CompareFunc, user_data: any): any;
    }

    type MessageClass = typeof Message;
    type MiniObjectClass = typeof MiniObject;
    type ObjectClass = typeof Object;
    type PadClass = typeof Pad;
    class PadPrivate {
        static $gtype: GObject.GType<PadPrivate>;

        // Constructors of Gst.PadPrivate

        _init(...args: any[]): void;
    }

    type PadTemplateClass = typeof PadTemplate;
    /**
     * A GParamSpec derived structure that contains the meta data for fractional
     * properties.
     */
    class ParamSpecFraction {
        static $gtype: GObject.GType<ParamSpecFraction>;

        // Own fields of Gst.ParamSpecFraction

        min_num: number;
        min_den: number;
        max_num: number;
        max_den: number;
        def_num: number;
        def_den: number;

        // Constructors of Gst.ParamSpecFraction

        _init(...args: any[]): void;
    }

    /**
     * A %GParamSpec derived structure that contains the meta data
     * for %GstMiniObject properties.
     */
    class ParamSpecMiniObject {
        static $gtype: GObject.GType<ParamSpecMiniObject>;

        // Constructors of Gst.ParamSpecMiniObject

        _init(...args: any[]): void;
    }

    /**
     * Opaque structure.
     */
    class ParseContext {
        static $gtype: GObject.GType<ParseContext>;

        // Constructors of Gst.ParseContext

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ParseContext;

        // Own methods of Gst.ParseContext

        get_missing_elements(): string[];
        free(): void;
    }

    type PipelineClass = typeof Pipeline;
    class PipelinePrivate {
        static $gtype: GObject.GType<PipelinePrivate>;

        // Constructors of Gst.PipelinePrivate

        _init(...args: any[]): void;
    }

    type PluginClass = typeof Plugin;
    /**
     * A plugin should export a variable of this type called plugin_desc. The plugin
     * loader will use the data provided there to initialize the plugin.
     * BSD, MIT/X11, Proprietary, unknown.
     */
    class PluginDesc {
        static $gtype: GObject.GType<PluginDesc>;

        // Own fields of Gst.PluginDesc

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

        // Constructors of Gst.PluginDesc

        _init(...args: any[]): void;
    }

    type PluginFeatureClass = typeof PluginFeature;
    class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;

        // Constructors of Gst.PluginPrivate

        _init(...args: any[]): void;
    }

    /**
     * A set of file/network descriptors.
     */
    class Poll {
        static $gtype: GObject.GType<Poll>;

        // Constructors of Gst.Poll

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](controllable: boolean): Poll;

        static new_timer(): Poll;

        // Own methods of Gst.Poll

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
        wait(timeout: ClockTime): number;
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
        static $gtype: GObject.GType<PollFD>;

        // Own fields of Gst.PollFD

        fd: number;
        idx: number;

        // Constructors of Gst.PollFD

        constructor(
            properties?: Partial<{
                fd: number;
                idx: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Gst.PollFD

        init(): void;
    }

    type ProxyPadClass = typeof ProxyPad;
    class ProxyPadPrivate {
        static $gtype: GObject.GType<ProxyPadPrivate>;

        // Constructors of Gst.ProxyPadPrivate

        _init(...args: any[]): void;
    }

    type PushSrcClass = typeof PushSrc;
    type QueryClass = typeof Query;
    /**
     * A Query Type definition
     */
    class QueryTypeDefinition {
        static $gtype: GObject.GType<QueryTypeDefinition>;

        // Own fields of Gst.QueryTypeDefinition

        value: QueryType;
        nick: string;
        description: string;
        quark: GLib.Quark;

        // Constructors of Gst.QueryTypeDefinition

        _init(...args: any[]): void;
    }

    type RegistryClass = typeof Registry;
    class RegistryPrivate {
        static $gtype: GObject.GType<RegistryPrivate>;

        // Constructors of Gst.RegistryPrivate

        _init(...args: any[]): void;
    }

    /**
     * A helper structure that holds the configured region of
     * interest in a media file.
     */
    class Segment {
        static $gtype: GObject.GType<Segment>;

        // Own fields of Gst.Segment

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

        // Constructors of Gst.Segment

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
        _init(...args: any[]): void;

        static ['new'](): Segment;

        // Own methods of Gst.Segment

        copy(): Segment;
        free(): void;
        init(format: Format): void;
        set_duration(format: Format, duration: number): void;
        set_last_stop(format: Format, position: number): void;
        set_seek(
            rate: number,
            format: Format,
            flags: SeekFlags,
            start_type: SeekType,
            start: number,
            stop_type: SeekType,
            stop: number,
        ): boolean;
        set_newsegment(update: boolean, rate: number, format: Format, start: number, stop: number, time: number): void;
        set_newsegment_full(
            update: boolean,
            rate: number,
            applied_rate: number,
            format: Format,
            start: number,
            stop: number,
            time: number,
        ): void;
        to_stream_time(format: Format, position: number): number;
        to_running_time(format: Format, position: number): number;
        to_position(format: Format, running_time: number): number;
        clip(format: Format, start: number, stop: number): [boolean, number, number];
        set_running_time(format: Format, running_time: number): boolean;
    }

    /**
     * Datastructure to initialize #GstCaps from a string description usually
     * used in conjunction with GST_STATIC_CAPS() and gst_static_caps_get() to
     * instantiate a #GstCaps.
     */
    class StaticCaps {
        static $gtype: GObject.GType<StaticCaps>;

        // Own fields of Gst.StaticCaps

        string: string;

        // Constructors of Gst.StaticCaps

        _init(...args: any[]): void;

        // Own methods of Gst.StaticCaps

        get(): Caps;
    }

    class StaticPadTemplate {
        static $gtype: GObject.GType<StaticPadTemplate>;

        // Own fields of Gst.StaticPadTemplate

        name_template: string;
        direction: PadDirection;
        presence: PadPresence;

        // Constructors of Gst.StaticPadTemplate

        _init(...args: any[]): void;

        // Own methods of Gst.StaticPadTemplate

        get(): PadTemplate;
        get_caps(): Caps;
    }

    /**
     * The GstStructure object. Most fields are private.
     */
    class Structure {
        static $gtype: GObject.GType<Structure>;

        // Own fields of Gst.Structure

        type: GObject.GType;
        name: GLib.Quark;
        parent_refcount: any;
        fields: GLib.Array;

        // Constructors of Gst.Structure

        constructor(name: string, firstfield: string);
        _init(...args: any[]): void;

        // Own methods of Gst.Structure

        copy(): Structure;
        set_parent_refcount(): number;
        free(): void;
        get_name(): string;
        get_name_id(): GLib.Quark;
        has_name(name: string): boolean;
        set_name(name: string): void;
        id_set_value(field: GLib.Quark, value: GObject.Value | any): void;
        set_value(fieldname: string, value: GObject.Value | any): void;
        id_get_value(field: GLib.Quark): unknown;
        get_value(fieldname: string): unknown;
        remove_field(fieldname: string): void;
        remove_all_fields(): void;
        get_field_type(fieldname: string): GObject.GType;
        foreach(func: StructureForeachFunc, user_data: any): boolean;
        map_in_place(func: StructureMapFunc, user_data: any): boolean;
        n_fields(): number;
        nth_field_name(index: number): string;
        id_has_field(field: GLib.Quark): boolean;
        id_has_field_typed(field: GLib.Quark, type: GObject.GType): boolean;
        has_field(fieldname: string): boolean;
        has_field_typed(fieldname: string, type: GObject.GType): boolean;
        get_boolean(fieldname: string): [boolean, boolean];
        get_int(fieldname: string): [boolean, number];
        get_uint(fieldname: string): [boolean, number];
        get_fourcc(fieldname: string): [boolean, number];
        get_double(fieldname: string): [boolean, number];
        get_date(fieldname: string, value: GLib.Date): boolean;
        get_clock_time(fieldname: string, value: ClockTime): boolean;
        get_string(fieldname: string): string;
        get_enum(fieldname: string, enumtype: GObject.GType): [boolean, number];
        get_fraction(fieldname: string): [boolean, number, number];
        to_string(): string;
        fixate_field_nearest_int(field_name: string, target: number): boolean;
        fixate_field_nearest_double(field_name: string, target: number): boolean;
        fixate_field_boolean(field_name: string, target: boolean): boolean;
        fixate_field_string(field_name: string, target: string): boolean;
        fixate_field_nearest_fraction(
            field_name: string,
            target_numerator: number,
            target_denominator: number,
        ): boolean;
    }

    type SystemClockClass = typeof SystemClock;
    class SystemClockPrivate {
        static $gtype: GObject.GType<SystemClockPrivate>;

        // Constructors of Gst.SystemClockPrivate

        _init(...args: any[]): void;
    }

    /**
     * #GstTagSetterIFace interface.
     */
    class TagSetterIFace {
        static $gtype: GObject.GType<TagSetterIFace>;

        // Constructors of Gst.TagSetterIFace

        _init(...args: any[]): void;
    }

    type TaskClass = typeof Task;
    type TaskPoolClass = typeof TaskPool;
    class TaskPrivate {
        static $gtype: GObject.GType<TaskPrivate>;

        // Constructors of Gst.TaskPrivate

        _init(...args: any[]): void;
    }

    /**
     * Custom GstTask thread callback functions that can be installed.
     */
    class TaskThreadCallbacks {
        static $gtype: GObject.GType<TaskThreadCallbacks>;

        // Own fields of Gst.TaskThreadCallbacks

        enter_thread: any;
        leave_thread: any;

        // Constructors of Gst.TaskThreadCallbacks

        constructor(
            properties?: Partial<{
                enter_thread: any;
                leave_thread: any;
                _gst_reserved: any[];
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * Opaque #GstTrace structure.
     */
    class Trace {
        static $gtype: GObject.GType<Trace>;

        // Own fields of Gst.Trace

        filename: string;
        fd: number;
        buf: TraceEntry;
        bufsize: number;
        bufoffset: number;

        // Constructors of Gst.Trace

        constructor(
            properties?: Partial<{
                filename: string;
                fd: number;
                bufsize: number;
                bufoffset: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](filename: string, size: number): Trace;

        // Own methods of Gst.Trace

        destroy(): void;
        flush(): void;
        text_flush(): void;
        set_default(): void;
    }

    class TraceEntry {
        static $gtype: GObject.GType<TraceEntry>;

        // Own fields of Gst.TraceEntry

        timestamp: number;
        sequence: number;
        data: number;
        message: number[];

        // Constructors of Gst.TraceEntry

        constructor(
            properties?: Partial<{
                timestamp: number;
                sequence: number;
                data: number;
                message: number[];
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * Object that stores typefind callbacks. To use with #GstTypeFindFactory.
     */
    class TypeFind {
        static $gtype: GObject.GType<TypeFind>;

        // Own fields of Gst.TypeFind

        data: any;

        // Constructors of Gst.TypeFind

        constructor(
            properties?: Partial<{
                peek: any;
                suggest: any;
                data: any;
                get_length: any;
                _gst_reserved: any[];
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Gst.TypeFind

        peek(offset: number, size: number): number[];
        suggest(probability: number, caps: Caps): void;
        get_length(): number;
    }

    type TypeFindFactoryClass = typeof TypeFindFactory;
    /**
     * Structure used for filtering based on `name` and `type`.
     */
    class TypeNameData {
        static $gtype: GObject.GType<TypeNameData>;

        // Own fields of Gst.TypeNameData

        name: string;
        type: GObject.GType;

        // Constructors of Gst.TypeNameData

        _init(...args: any[]): void;
    }

    type URIHandlerInterface = typeof URIHandler;
    /**
     * VTable for the #GValue `type`.
     */
    class ValueTable {
        static $gtype: GObject.GType<ValueTable>;

        // Own fields of Gst.ValueTable

        type: GObject.GType;
        compare: ValueCompareFunc;
        serialize: ValueSerializeFunc;
        deserialize: ValueDeserializeFunc;

        // Constructors of Gst.ValueTable

        _init(...args: any[]): void;
    }

    type XMLClass = typeof XML;
    module ChildProxy {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    export interface ChildProxyNamespace {
        $gtype: GObject.GType<ChildProxy>;
        prototype: ChildProxy;
    }
    interface ChildProxy extends Object {
        // Own methods of Gst.ChildProxy

        get_child_by_name(name: string): Object;
        get_child_by_index(index: number): Object;
        get_children_count(): number;

        // Own virtual methods of Gst.ChildProxy

        vfunc_get_child_by_index(index: number): Object;
        vfunc_get_children_count(): number;
    }

    export const ChildProxy: ChildProxyNamespace;

    module ImplementsInterface {
        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {}
    }

    export interface ImplementsInterfaceNamespace {
        $gtype: GObject.GType<ImplementsInterface>;
        prototype: ImplementsInterface;
    }
    interface ImplementsInterface extends Element {
        // Own virtual methods of Gst.ImplementsInterface

        vfunc_supported(iface_type: GObject.GType): boolean;
    }

    export const ImplementsInterface: ImplementsInterfaceNamespace;

    module TagSetter {
        // Constructor properties interface

        interface ConstructorProps extends Element.ConstructorProps {}
    }

    export interface TagSetterNamespace {
        $gtype: GObject.GType<TagSetter>;
        prototype: TagSetter;
    }
    interface TagSetter extends Element {
        // Own methods of Gst.TagSetter

        reset_tags(): void;
        merge_tags(list: TagList, mode: TagMergeMode): void;
        add_tag_value(mode: TagMergeMode, tag: string, value: GObject.Value | any): void;
        get_tag_list(): TagList;
        set_tag_merge_mode(mode: TagMergeMode): void;
        get_tag_merge_mode(): TagMergeMode;
    }

    export const TagSetter: TagSetterNamespace;

    module URIHandler {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface URIHandlerNamespace {
        $gtype: GObject.GType<URIHandler>;
        prototype: URIHandler;
    }
    interface URIHandler extends GObject.Object {
        // Own methods of Gst.URIHandler

        get_uri_type(): number;
        get_protocols(): string[];
        get_uri(): string;
        set_uri(uri: string): boolean;
        new_uri(uri: string): void;

        // Own virtual methods of Gst.URIHandler

        vfunc_get_uri(): string;
        vfunc_set_uri(uri: string): boolean;
    }

    export const URIHandler: URIHandlerNamespace;

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
