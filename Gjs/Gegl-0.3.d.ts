// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gegl-0.3
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gegl {

enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
enum DitherMethod {
    NONE,
    FLOYD_STEINBERG,
    BAYER,
    RANDOM,
    RANDOM_COVARIANT,
    ADD,
    ADD_COVARIANT,
    XOR,
    XOR_COVARIANT,
}
enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
enum TileCommand {
    IDLE,
    SET,
    GET,
    IS_CACHED,
    EXIST,
    VOID,
    FLUSH,
    REFETCH,
    REINIT,
    LAST_COMMAND,
}
enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
enum PadType {
    OUTPUT,
    INPUT,
}
enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
}
const AUTO_ROWSTRIDE: number
const BUFFER_MAX_ITERATORS: number
const CH_BACK_CENTER: number
const CH_BACK_LEFT: number
const CH_BACK_RIGHT: number
const CH_FRONT_CENTER: number
const CH_FRONT_LEFT: number
const CH_FRONT_LEFT_OF_CENTER: number
const CH_FRONT_RIGHT: number
const CH_FRONT_RIGHT_OF_CENTER: number
const CH_LAYOUT_2POINT1: number
const CH_LAYOUT_2_1: number
const CH_LAYOUT_2_2: number
const CH_LAYOUT_3POINT1: number
const CH_LAYOUT_4POINT0: number
const CH_LAYOUT_4POINT1: number
const CH_LAYOUT_5POINT0: number
const CH_LAYOUT_5POINT0_BACK: number
const CH_LAYOUT_5POINT1: number
const CH_LAYOUT_5POINT1_BACK: number
const CH_LAYOUT_6POINT0: number
const CH_LAYOUT_6POINT0_FRONT: number
const CH_LAYOUT_6POINT1: number
const CH_LAYOUT_6POINT1_BACK: number
const CH_LAYOUT_6POINT1_FRONT: number
const CH_LAYOUT_7POINT0: number
const CH_LAYOUT_7POINT0_FRONT: number
const CH_LAYOUT_7POINT1: number
const CH_LAYOUT_7POINT1_WIDE: number
const CH_LAYOUT_7POINT1_WIDE_BACK: number
const CH_LAYOUT_HEXADECAGONAL: number
const CH_LAYOUT_HEXAGONAL: number
const CH_LAYOUT_NATIVE: number
const CH_LAYOUT_OCTAGONAL: number
const CH_LAYOUT_QUAD: number
const CH_LAYOUT_STEREO: number
const CH_LAYOUT_STEREO_DOWNMIX: number
const CH_LAYOUT_SURROUND: number
const CH_LOW_FREQUENCY: number
const CH_LOW_FREQUENCY_2: number
const CH_SIDE_LEFT: number
const CH_SIDE_RIGHT: number
const CH_STEREO_LEFT: number
const CH_STEREO_RIGHT: number
const CH_SURROUND_DIRECT_LEFT: number
const CH_SURROUND_DIRECT_RIGHT: number
const CH_TOP_BACK_CENTER: number
const CH_TOP_BACK_LEFT: number
const CH_TOP_BACK_RIGHT: number
const CH_TOP_CENTER: number
const CH_TOP_FRONT_CENTER: number
const CH_TOP_FRONT_LEFT: number
const CH_TOP_FRONT_RIGHT: number
const CH_WIDE_LEFT: number
const CH_WIDE_RIGHT: number
const FLOAT_EPSILON: number
const LOOKUP_MAX_ENTRIES: number
const MAJOR_VERSION: number
const MAX_AUDIO_CHANNELS: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PARAM_NO_VALIDATE: number
/**
 * Disable OpenCL
 */
function cl_disable(): void
/**
 * Initialize and enable OpenCL, calling this function again
 * will re-enable OpenCL if it has been disabled.
 */
function cl_init(): boolean
/**
 * Check if OpenCL is enabled.
 */
function cl_is_accelerated(): boolean
/**
 * Returns a GeglConfig object with properties that can be manipulated to control
 * GEGLs behavior.
 */
function config(): Config
/**
 * Create a node chain from an unparsed commandline string.
 * @param ops an argv style, NULL terminated array of arguments
 * @param op_start node to pass in as input of chain
 * @param op_end node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param rel_dim relative dimension to scale rel suffixed values by
 * @param path_root path in filesystem to use as relative root
 */
function create_chain(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
/**
 * Create a node chain from argv style list of op data.
 * @param ops an argv style, NULL terminated array of arguments
 * @param op_start node to pass in as input of chain
 * @param op_end node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param rel_dim relative dimension to scale rel suffixed values by
 * @param path_root path in filesystem to use as relative root
 */
function create_chain_argv(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
/**
 * Call this function when you're done using GEGL. It will clean up
 * caches and write/dump debug information if the correct debug flags
 * are set.
 */
function exit(): void
/**
 * Returns a value sutable to pass to the GeglBuffer constructor
 * or any other property that expects a Babl format.
 * @param format_name A Babl format name, e.g. "RGBA float"
 */
function format(format_name: string): any | null
function format_get_name(format: any): string | null
/**
 * This function fetches the version of the GEGL library being used by
 * the running process.
 */
function get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
/**
 * Dump the bounds and format of each node in the graph to stdout.
 * @param node The final node of the graph
 */
function graph_dump_outputs(node: Node): void
/**
 * Dump the region that will be rendered for each node to fulfill
 * the request.
 * @param node The final node of the graph
 * @param roi The request rectangle
 */
function graph_dump_request(node: Node, roi: Rectangle): void
function has_operation(operation_type: string): boolean
/**
 * Call this function before using any other GEGL functions. It will
 * initialize everything needed to operate GEGL and parses some
 * standard command line options.  `argc` and `argv` are adjusted
 * accordingly so your own code will never see those standard
 * arguments.
 * 
 * Note that there is an alternative way to initialize GEGL: if you
 * are calling g_option_context_parse() with the option group returned
 * by #gegl_get_option_group(), you don't have to call #gegl_init().
 * @param argv a pointer to the array of command line arguments.
 */
function init(argv: string[] | null): /* argv */ string[] | null
function is_main_thread(): boolean
function list_operations(): string[]
/**
 * Load all gegl modules found in the given directory.
 * @param path the directory to load modules from
 */
function load_module_directory(path: string): void
/**
 * Creates a new #GParamSpec instance specifying a #GeglAudioFragment property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 */
function param_spec_audio_fragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_color the default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_color(name: string, nick: string, blurb: string, default_color: Color, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_color_string the default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_color_from_string(name: string, nick: string, blurb: string, default_color_string: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Get the default color value of the param spec
 * @param self a #GeglColor #GParamSpec
 */
function param_spec_color_get_default(self: GObject.ParamSpec): Color
/**
 * Creates a new #GParamSpec instance specifying a #GeglCurve property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_curve the default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_curve(name: string, nick: string, blurb: string, default_curve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecDouble instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param minimum minimum value for the property specified
 * @param maximum maximum value for the property specified
 * @param default_value default value for the property specified
 * @param ui_minimum minimum value a user should be allowed to input
 * @param ui_maximum maximum value a user should be allowed to input
 * @param ui_gamma the gamma that should be used when adjusting the value
 * @param flags flags for the property specified
 */
function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecEnum instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param enum_type the enum type to get valid values from
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_enum(name: string, nick: string, blurb: string, enum_type: GObject.GType, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFilePath instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param no_validate true if the string should be validated with g_utf8_validate
 * @param null_ok true if the string can be NULL
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_file_path(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 */
function param_spec_format(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string
/**
 * Creates a new #GeglParamSpecInt instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param minimum minimum value for the property specified
 * @param maximum maximum value for the property specified
 * @param default_value default value for the property specified
 * @param ui_minimum minimum value a user should be allowed to input
 * @param ui_maximum maximum value a user should be allowed to input
 * @param ui_gamma the gamma that should be used when adjusting the value
 * @param flags flags for the property specified
 */
function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglPath property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_path the default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_path(name: string, nick: string, blurb: string, default_path: Path, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecSeed instance specifying an integer random seed.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 */
function param_spec_seed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void
/**
 * Creates a new #GeglParamSpecString instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param no_validate true if the string should be validated with g_utf8_validate
 * @param null_ok true if the string can be NULL
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_string(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecUri instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param no_validate true if the string should be validated with g_utf8_validate
 * @param null_ok true if the string can be NULL
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 */
function param_spec_uri(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Returns a GeglRectangle that represents an infininte plane.
 */
function rectangle_infinite_plane(): Rectangle
/**
 * Resets the cumulative data gathered by the #GeglStats object returned
 * by #gegl_stats().
 */
function reset_stats(): void
function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag): string
/**
 * Returns a GeglStats object with properties that can be read to monitor
 * GEGL statistics.
 */
function stats(): Stats
interface LookupFunction {
    (value: number, data: object | null): number
}
interface NodeFunction {
    (node: PathItem): void
}
interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: Matrix2, output: object | null, repeat_mode: AbyssPolicy): void
}
interface TileCallback {
    (tile: Tile): void
}
interface TileSourceCommand {
    (gegl_tile_source: TileSource, command: TileCommand, x: number, y: number, z: number, data: object | null): object | null
}
interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.AudioFragment

    string?: string | null
}

interface AudioFragment {

    // Own properties of Gegl-0.3.Gegl.AudioFragment

    string: string

    // Own fields of Gegl-0.3.Gegl.AudioFragment

    parent_instance: GObject.Object
    data: number[]
    priv: AudioFragmentPrivate

    // Owm methods of Gegl-0.3.Gegl.AudioFragment

    get_channel_layout(): number
    get_channels(): number
    get_max_samples(): number
    get_pos(): number
    get_sample_count(): number
    get_sample_rate(): number
    set_channel_layout(channel_layout: number): void
    set_channels(channels: number): void
    set_max_samples(max_samples: number): void
    set_pos(pos: number): void
    set_sample_count(sample_count: number): void
    set_sample_rate(sample_rate: number): void

    // Class property signals of Gegl-0.3.Gegl.AudioFragment

    connect(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AudioFragment extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.AudioFragment

    static name: string
    static $gtype: GObject.GType<AudioFragment>

    // Constructors of Gegl-0.3.Gegl.AudioFragment

    constructor(config?: AudioFragment_ConstructProps) 
    constructor(sample_rate: number, channels: number, channel_layout: number, max_samples: number) 
    static new(sample_rate: number, channels: number, channel_layout: number, max_samples: number): AudioFragment
    _init(config?: AudioFragment_ConstructProps): void
}

interface Buffer_ConstructProps extends TileHandler_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.Buffer

    abyss_height?: number | null
    abyss_width?: number | null
    abyss_x?: number | null
    abyss_y?: number | null
    backend?: TileBackend | null
    format?: object | null
    height?: number | null
    path?: string | null
    shift_x?: number | null
    shift_y?: number | null
    tile_height?: number | null
    tile_width?: number | null
    width?: number | null
    x?: number | null
    y?: number | null
}

/**
 * Signal callback interface for `changed`
 */
interface Buffer_ChangedSignalCallback {
    ($obj: Buffer, object: Rectangle): void
}

interface Buffer {

    // Own properties of Gegl-0.3.Gegl.Buffer

    readonly abyss_height: number
    readonly abyss_width: number
    readonly abyss_x: number
    readonly abyss_y: number
    readonly backend: TileBackend
    format: object
    height: number
    readonly path: string
    readonly pixels: number
    readonly px_size: number
    readonly shift_x: number
    readonly shift_y: number
    readonly tile_height: number
    readonly tile_width: number
    width: number
    x: number
    y: number

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gegl-0.3.Gegl.Buffer

    /**
     * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    add_handler(handler: object | null): void
    /**
     * Clears the provided rectangular region by setting all the associated memory
     * to 0.
     * @param roi a rectangular region
     */
    clear(roi: Rectangle): void
    /**
     * Copy a region from source buffer to destination buffer.
     * 
     * If the babl_formats of the buffers are the same, and the tile boundaries
     * align, this will create copy-on-write tiles in the destination buffer.
     * 
     * This function never does any scaling. When src_rect and dst_rect do not have
     * the same width and height, the size of src_rect is used.
     * @param src_rect source rectangle (or NULL to copy entire source buffer)
     * @param repeat_mode the abyss policy to be using if src_rect is outside src's extent.
     * @param dst destination buffer.
     * @param dst_rect position of upper left destination pixel, or NULL for top left coordinates of the buffer extents.
     */
    copy(src_rect: Rectangle, repeat_mode: AbyssPolicy, dst: Buffer, dst_rect: Rectangle): void
    /**
     * Create a new sub GeglBuffer, that is a view on a larger buffer.
     * @param extent coordinates of new buffer.
     */
    create_sub_buffer(extent: Rectangle): Buffer
    /**
     * Duplicate a buffer (internally uses gegl_buffer_copy). Aligned tiles
     * will create copy-on-write clones in the new buffer.
     */
    dup(): Buffer
    /**
     * Flushes all unsaved data to disk, this is not necessary for shared
     * geglbuffers opened with gegl_buffer_open since they auto-sync on writes.
     */
    flush(): void
    /**
     * Return the abyss extent of a buffer, this expands out to the parents extent in
     * subbuffers.
     */
    get_abyss(): Rectangle
    /**
     * Returns a pointer to a GeglRectangle structure defining the geometry of a
     * specific GeglBuffer, this is also the default width/height of buffers passed
     * in to gegl_buffer_set and gegl_buffer_get (with a scale of 1.0 at least).
     */
    get_extent(): Rectangle
    /**
     * Fetch a rectangular linear buffer of pixel data from the GeglBuffer.
     * @param rect the coordinates we want to retrieve data from.
     * @param scale sampling scale, 1.0 = pixel for pixel 2.0 = magnify, 0.5 scale down.
     * @param format_name the format to store data in, if NULL the format of the buffer is used.
     * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(rect: Rectangle, scale: number, format_name: string | null, repeat_mode: AbyssPolicy): Uint8Array
    /**
     * Store a linear raster buffer into the GeglBuffer.
     * @param rect the rectangle to write.
     * @param format_name the format of the input data.
     * @param src pixel data to write to `buffer`.
     */
    set(rect: Rectangle, format_name: string, src: Uint8Array): void
    /**
     * This function makes sure GeglBuffer and underlying code is aware of changes
     * being made to the linear buffer. If the request was not a compatible one
     * it is written back to the buffer. Multiple concurrent users can be handed
     * the same buffer (both raw access and converted).
     * @param linear a previously returned buffer.
     */
    linear_close(linear: object | null): void
    /**
     * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    remove_handler(handler: object | null): void
    /**
     * Clean up resources used by sampling framework of buffer (will be freed
     * automatically later when the buffer is destroyed, for long lived buffers
     * cleaning up the sampling infrastructure when it has been used for its
     * purpose will sometimes be more efficient).
     */
    sample_cleanup(): void
    /**
     * Write a GeglBuffer to a file.
     * @param path the path where the gegl buffer will be saved, any writable GIO uri is valid.
     * @param roi the region of interest to write, this is the tiles that will be collected and written to disk.
     */
    save(path: string, roi: Rectangle): void
    /**
     * Changes the size and position of the abyss rectangle of a buffer.
     * 
     * Returns TRUE if the change of abyss was successful.
     * @param abyss new abyss.
     */
    set_abyss(abyss: Rectangle): boolean
    /**
     * Sets the region covered by rect to the specified color.
     * @param rect a rectangular region to fill with a color.
     * @param color the GeglColor to fill with.
     */
    set_color(rect: Rectangle, color: Color): void
    /**
     * Changes the size and position that is considered active in a buffer, this
     * operation is valid on any buffer, reads on subbuffers outside the master
     * buffer's extent are at the moment undefined.
     * 
     * Returns TRUE if the change of extent was successful.
     * @param extent new extent.
     */
    set_extent(extent: Rectangle): boolean
    /**
     * Fill a region with a repeating pattern. Offsets parameters are
     * relative to the origin (0, 0) and not to the rectangle. So be carefull
     * about the origin of `pattern` and `buffer` extents.
     * @param rect the region of `buffer` to fill
     * @param pattern a #GeglBuffer to be repeated as a pattern
     * @param x_offset where the pattern starts horizontally
     * @param y_offset where the pattern starts vertical
     */
    set_pattern(rect: Rectangle, pattern: Buffer, x_offset: number, y_offset: number): void
    /**
     * This function should be used instead of g_signal_connect when connecting to
     * the GeglBuffer::changed signal handler, GeglBuffer contains additional
     * machinery to avoid the overhead of changes when no signal handler have been
     * connected, if regular g_signal_connect is used; then no signals will be
     * emitted.
     * @param detailed_signal only "changed" expected for now
     * @param c_handler c function callback
     */
    signal_connect(detailed_signal: string, c_handler: GObject.Callback): number

    // Own signals of Gegl-0.3.Gegl.Buffer

    connect(sigName: "changed", callback: Buffer_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Buffer_ChangedSignalCallback): number
    emit(sigName: "changed", object: Rectangle, ...args: any[]): void

    // Class property signals of Gegl-0.3.Gegl.Buffer

    connect(sigName: "notify::abyss-height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abyss-height", ...args: any[]): void
    connect(sigName: "notify::abyss-width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abyss-width", ...args: any[]): void
    connect(sigName: "notify::abyss-x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abyss-x", ...args: any[]): void
    connect(sigName: "notify::abyss-y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abyss-y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abyss-y", ...args: any[]): void
    connect(sigName: "notify::backend", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::pixels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels", ...args: any[]): void
    connect(sigName: "notify::px-size", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::px-size", ...args: any[]): void
    connect(sigName: "notify::shift-x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shift-x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shift-x", ...args: any[]): void
    connect(sigName: "notify::shift-y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shift-y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shift-y", ...args: any[]): void
    connect(sigName: "notify::tile-height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-height", ...args: any[]): void
    connect(sigName: "notify::tile-width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-width", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Buffer extends TileHandler {

    // Own properties of Gegl-0.3.Gegl.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Gegl-0.3.Gegl.Buffer

    constructor(config?: Buffer_ConstructProps) 
    /**
     * Create a new GeglBuffer with the given format and dimensions.
     * @constructor 
     * @param format_name The Babl format name for this buffer, e.g. "RGBA float"
     * @param x x origin of the buffer's extent
     * @param y y origin of the buffer's extent
     * @param width width of the buffer's extent
     * @param height height of the buffer's extent
     */
    constructor(format_name: string, x: number, y: number, width: number, height: number) 
    /**
     * Create a new GeglBuffer with the given format and dimensions.
     * @constructor 
     * @param format_name The Babl format name for this buffer, e.g. "RGBA float"
     * @param x x origin of the buffer's extent
     * @param y y origin of the buffer's extent
     * @param width width of the buffer's extent
     * @param height height of the buffer's extent
     */
    static new(format_name: string, x: number, y: number, width: number, height: number): Buffer
    /**
     * Create a new GeglBuffer from a backend, if NULL is passed in the extent of
     * the buffer will be inherited from the extent of the backend.
     * 
     * returns a GeglBuffer, that holds a reference to the provided backend.
     * @constructor 
     * @param extent the geometry of the buffer (origin, width and height) a GeglRectangle.
     * @param backend an instance of a GeglTileBackend subclass.
     */
    static new_for_backend(extent: Rectangle, backend: TileBackend): Buffer
    _init(config?: Buffer_ConstructProps): void
    /**
     * Loads an existing GeglBuffer from disk, if it has previously been saved with
     * gegl_buffer_save it should be possible to open through any GIO transport, buffers
     * that have been used as swap needs random access to be opened.
     * @param path the path to a gegl buffer on disk.
     */
    static load(path: string): Buffer
    /**
     * Open an existing on-disk GeglBuffer, this buffer is opened in a monitored
     * state so multiple instances of gegl can share the same buffer. Sets on
     * one buffer are reflected in the other.
     * @param path the path to a gegl buffer on disk.
     */
    static open(path: string): Buffer
}

interface Color_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.Color

    string?: string | null
}

interface Color {

    // Own properties of Gegl-0.3.Gegl.Color

    string: string

    // Own fields of Gegl-0.3.Gegl.Color

    parent_instance: GObject.Object
    priv: ColorPrivate

    // Owm methods of Gegl-0.3.Gegl.Color

    /**
     * Creates a copy of `color`.
     */
    duplicate(): Color
    /**
     * Get the component values of the color in `format`.
     * @param format A Babl pointer
     */
    get_components(format: any): number[]
    /**
     * Retrieves the current set color as linear light non premultipled RGBA data,
     * any of the return pointers can be omitted.
     */
    get_rgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    /**
     * Set the color using the component values as `format`.
     * @param format A Babl pointer
     * @param components The color components.
     */
    set_components(format: any, components: number[]): void
    /**
     * Retrieves the current set color as linear light non premultipled RGBA data
     * @param red red value
     * @param green green value
     * @param blue blue value
     * @param alpha alpha value
     */
    set_rgba(red: number, green: number, blue: number, alpha: number): void

    // Class property signals of Gegl-0.3.Gegl.Color

    connect(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Color extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Color

    static name: string
    static $gtype: GObject.GType<Color>

    // Constructors of Gegl-0.3.Gegl.Color

    constructor(config?: Color_ConstructProps) 
    /**
     * Creates a new #GeglColor.
     * 
     * Returns the newly created #GeglColor.
     * @constructor 
     * @param string a string describing the color to be created.
     */
    constructor(string: string) 
    /**
     * Creates a new #GeglColor.
     * 
     * Returns the newly created #GeglColor.
     * @constructor 
     * @param string a string describing the color to be created.
     */
    static new(string: string): Color
    _init(config?: Color_ConstructProps): void
}

interface Config_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.Config

    application_license?: string | null
    chunk_size?: number | null
    quality?: number | null
    queue_size?: number | null
    swap?: string | null
    threads?: number | null
    tile_cache_size?: number | null
    tile_height?: number | null
    tile_width?: number | null
    use_opencl?: boolean | null
}

interface Config {

    // Own properties of Gegl-0.3.Gegl.Config

    application_license: string
    chunk_size: number
    quality: number
    queue_size: number
    swap: string
    threads: number
    tile_cache_size: number
    tile_height: number
    tile_width: number
    use_opencl: boolean

    // Class property signals of Gegl-0.3.Gegl.Config

    connect(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-license", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quality", ...args: any[]): void
    connect(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::queue-size", ...args: any[]): void
    connect(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap", ...args: any[]): void
    connect(sigName: "notify::threads", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threads", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::threads", ...args: any[]): void
    connect(sigName: "notify::tile-cache-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-size", ...args: any[]): void
    connect(sigName: "notify::tile-height", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-height", ...args: any[]): void
    connect(sigName: "notify::tile-width", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-width", ...args: any[]): void
    connect(sigName: "notify::use-opencl", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-opencl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Config extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Gegl-0.3.Gegl.Config

    constructor(config?: Config_ConstructProps) 
    _init(config?: Config_ConstructProps): void
}

interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}

interface Curve {

    // Own fields of Gegl-0.3.Gegl.Curve

    parent_instance: GObject.Object

    // Owm methods of Gegl-0.3.Gegl.Curve

    /**
     * Add a point to the curve at `x` `y` (replacing the value exactly for `x` if it
     * already exists.
     * @param x x coordinate
     * @param y y coordinate
     */
    add_point(x: number, y: number): number
    /**
     * Retrieve the number of points in the curve.
     * 
     * Returns the number of points for the coordinates in the curve.
     * @param x 
     */
    calc_value(x: number): number
    /**
     * Create a copy of `curve`.
     */
    duplicate(): Curve
    /**
     * Retrive the coordinates for an index.
     * @param index the position of the value number to retrieve.
     */
    get_point(index: number): [ /* x */ number, /* y */ number ]
    /**
     * Get the bounds on the values of the curve and store the values in
     * the return locaitons provided in `min_y` and `max_y`.
     */
    get_y_bounds(): [ /* min_y */ number, /* max_y */ number ]
    /**
     * Retrieve the number of points in the curve.
     * 
     * Returns the number of points for the coordinates in the curve.
     */
    num_points(): number
    /**
     * Replace an existing point in a curve.
     * @param index the position of the value number to retrieve.
     * @param x x coordinate
     * @param y y coordinate
     */
    set_point(index: number, x: number, y: number): void

    // Class property signals of Gegl-0.3.Gegl.Curve

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Curve extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Curve

    static name: string
    static $gtype: GObject.GType<Curve>

    // Constructors of Gegl-0.3.Gegl.Curve

    constructor(config?: Curve_ConstructProps) 
    /**
     * Create a #GeglCurve that can store a curve with values between `y_min` and
     * `y_max`.
     * 
     * Returns the newly created #GeglCurve.
     * @constructor 
     * @param y_min minimum y value for curve.
     * @param y_max maximum y value for curve.
     */
    constructor(y_min: number, y_max: number) 
    /**
     * Create a #GeglCurve that can store a curve with values between `y_min` and
     * `y_max`.
     * 
     * Returns the newly created #GeglCurve.
     * @constructor 
     * @param y_min minimum y value for curve.
     * @param y_max maximum y value for curve.
     */
    static new(y_min: number, y_max: number): Curve
    /**
     * Create a default #GeglCurve with an identify mapping of
     * (0.0..1.0) -> (0.0..1.0).
     * 
     * Returns the newly created default #GeglCurve.
     * @constructor 
     */
    static new_default(): Curve
    _init(config?: Curve_ConstructProps): void
}

interface Node_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.Node

    dont_cache?: boolean | null
    gegl_operation?: Operation | null
    name?: string | null
    operation?: string | null
    passthrough?: boolean | null
    use_opencl?: boolean | null
}

/**
 * Signal callback interface for `computed`
 */
interface Node_ComputedSignalCallback {
    ($obj: Node, object: Rectangle): void
}

/**
 * Signal callback interface for `invalidated`
 */
interface Node_InvalidatedSignalCallback {
    ($obj: Node, object: Rectangle): void
}

/**
 * Signal callback interface for `progress`
 */
interface Node_ProgressSignalCallback {
    ($obj: Node, object: number): void
}

interface Node {

    // Own properties of Gegl-0.3.Gegl.Node

    dont_cache: boolean
    gegl_operation: Operation
    name: string
    operation: string
    passthrough: boolean
    use_opencl: boolean

    // Owm methods of Gegl-0.3.Gegl.Node

    /**
     * Make the GeglNode `graph,` take a reference on child. This reference
     * will be dropped when the reference count on the graph reaches zero.
     * @param child a GeglNode.
     */
    add_child(child: Node): Node
    /**
     * Render a rectangular region from a node to the given buffer.
     * @param buffer the #GeglBuffer to render to.
     * @param roi the rectangle to render.
     * @param level mipmap level to render (0 for all)
     * @param abyss_policy 
     */
    blit_buffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyss_policy: AbyssPolicy): void
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param input_pad_name the name of the input pad we are connecting to
     * @param source the node producing data we want to connect.
     * @param output_pad_name the output pad we want to use on the source.
     */
    connect_from(input_pad_name: string, source: Node, output_pad_name: string): boolean
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param output_pad_name the output pad we want to use on the source.
     * @param sink the node we're connecting an input to
     * @param input_pad_name the name of the input pad we are connecting to
     */
    connect_to(output_pad_name: string, sink: Node, input_pad_name: string): boolean
    /**
     * Creates a new processing node that performs the specified operation.
     * All properties of the operation will have their default values. This
     * is included as an addition to #gegl_node_new_child in the public API to have
     * a non varargs entry point for bindings as well as sometimes simpler more
     * readable code.
     * @param operation the type of node to create.
     */
    create_child(operation: string): Node
    /**
     * Performs hit detection by returning the node providing data at a given
     * coordinate pair. Currently operates only on bounding boxes and not
     * pixel data.
     * @param x x coordinate
     * @param y y coordinate
     */
    detect(x: number, y: number): Node
    /**
     * Disconnects node connected to `input_pad` of `node` (if any).
     * 
     * Returns TRUE if a connection was broken.
     * @param input_pad the input pad to disconnect.
     */
    disconnect(input_pad: string): boolean
    find_property(property_name: string): GObject.ParamSpec
    get_children(): Node[]
    /**
     * Retrieve which pads on which nodes are connected to a named output_pad,
     * and the number of connections. Both the location for the generated
     * nodes array and pads array can be left as NULL. If they are non NULL
     * both should be freed with g_free. The arrays are NULL terminated.
     * 
     * Returns the number of consumers connected to this output_pad.
     * @param output_pad the output pad we want to know who uses.
     */
    get_consumers(output_pad: string): [ /* returnType */ number, /* nodes */ Node[], /* pads */ string[] ]
    get_gegl_operation(): Operation | null
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param pad_name the name of the pad.
     */
    get_input_proxy(pad_name: string): Node
    get_operation(): string
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param pad_name the name of the pad.
     */
    get_output_proxy(pad_name: string): Node
    /**
     * Returns a GeglNode that keeps a reference on a child.
     */
    get_parent(): Node
    get_passthrough(): boolean
    get_producer(input_pad_name: string, output_pad_name: string | null): Node
    /**
     * Returns TRUE if the node has a pad with the specified name
     * @param pad_name the pad name we are looking for
     */
    has_pad(pad_name: string): boolean
    /**
     * Returns the position and dimensions of a rectangle spanning the area
     * defined by a node.
     */
    get_bounding_box(): Rectangle
    get_property(property_name: string): any

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
    get_property(args_or_property_name: any[] | string, value?: any): any | void
    /**
     * Synthetic sugar for linking the "output" pad of `source` to the "input"
     * pad of `sink`.
     * @param sink the consumer of data.
     */
    link(sink: Node): void
    /**
     * If the node has any input pads this function returns a null terminated
     * array of pad names, otherwise it returns NULL. The return value can be
     * freed with g_strfreev().
     */
    list_input_pads(): string[]
    /**
     * If the node has any output pads this function returns a null terminated
     * array of pad names, otherwise it returns NULL. The return value can be
     * freed with g_strfreev().
     */
    list_output_pads(): string[]
    new_processor(rectangle: Rectangle): Processor
    /**
     * Render a composition. This can be used for instance on a node with a "png-save"
     * operation to render all necessary data, and make it be written to file. This
     * function wraps the usage of a GeglProcessor in a single blocking function
     * call. If you need a non-blocking operation, then make a direct use of
     * #gegl_processor_work. See #GeglProcessor.
     * 
     * ---
     * GeglNode      *gegl;
     * GeglRectangle  roi;
     * GeglNode      *png_save;
     * unsigned char *buffer;
     * 
     * gegl = gegl_parse_xml (xml_data);
     * roi      = gegl_node_get_bounding_box (gegl);
     * # create png_save from the graph, the parent/child relationship
     * # only mean anything when it comes to memory management.
     * png_save = gegl_node_new_child (gegl,
     *                                 "operation", "gegl:png-save",
     *                                 "path",      "output.png",
     *                                 NULL);
     * 
     * gegl_node_link (gegl, png_save);
     * gegl_node_process (png_save);
     * 
     * buffer = malloc (roi.w*roi.h*4);
     * gegl_node_blit (gegl,
     *                 1.0,
     *                 &roi,
     *                 babl_format("R'G'B'A u8"),
     *                 buffer,
     *                 GEGL_AUTO_ROWSTRIDE,
     *                 GEGL_BLIT_DEFAULT);
     */
    process(): void
    progress(progress: number, message: string): void
    /**
     * Removes a child from a GeglNode. The reference previously held will be
     * dropped so increase the reference count before removing when reparenting
     * a child between two graphs.
     * @param child a GeglNode.
     */
    remove_child(child: Node): Node
    set_passthrough(passthrough: boolean): void
    /**
     * This is mainly included for language bindings. Using #gegl_node_set is
     * more convenient when programming in C.
     * @param property_name the name of the property to set
     * @param value a GValue containing the value to be set in the property.
     */
    set_property(property_name: string, value?: any): void

    // Overloads of set_property

    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value?: any): void
    set_property(...args: any[]): any
    set_property(args_or_property_name: any[] | string, value?: any): void | any
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of the composition produced by a node (and thus also
     * the nodes contributing data to the specified node). To export a
     * gegl graph, connect the internal output node to an output proxy (see
     * #gegl_node_get_output_proxy.) and use the proxy node as the basis
     * for the serialization.
     * @param path_root filesystem path to construct relative paths from.
     */
    to_xml(path_root: string): string
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of a segment of a graph from `head` to `tail` nodes.
     * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
     * @param tail a #GeglNode
     * @param path_root filesystem path to construct relative paths from.
     */
    to_xml_full(tail: Node | null, path_root: string): string

    // Own signals of Gegl-0.3.Gegl.Node

    connect(sigName: "computed", callback: Node_ComputedSignalCallback): number
    connect_after(sigName: "computed", callback: Node_ComputedSignalCallback): number
    emit(sigName: "computed", object: Rectangle, ...args: any[]): void
    connect(sigName: "invalidated", callback: Node_InvalidatedSignalCallback): number
    connect_after(sigName: "invalidated", callback: Node_InvalidatedSignalCallback): number
    emit(sigName: "invalidated", object: Rectangle, ...args: any[]): void
    connect(sigName: "progress", callback: Node_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Node_ProgressSignalCallback): number
    emit(sigName: "progress", object: number, ...args: any[]): void

    // Class property signals of Gegl-0.3.Gegl.Node

    connect(sigName: "notify::dont-cache", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dont-cache", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dont-cache", ...args: any[]): void
    connect(sigName: "notify::gegl-operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gegl-operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gegl-operation", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::operation", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::passthrough", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::passthrough", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::passthrough", ...args: any[]): void
    connect(sigName: "notify::use-opencl", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-opencl", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-opencl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Node extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of Gegl-0.3.Gegl.Node

    constructor(config?: Node_ConstructProps) 
    /**
     * Create a new graph that can contain further processing nodes.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new graph that can contain further processing nodes.
     * @constructor 
     */
    static new(): Node
    /**
     * The #GeglNode returned contains the graph described by the tree of stacks
     * in the XML document. The tree is connected to the "output" pad of the
     * returned node and thus can be used directly for processing.
     * @constructor 
     * @param path the path to a file on the local file system to be parsed.
     */
    static new_from_file(path: string): Node
    static new_from_serialized(chaindata: string, path_root: string): Node
    /**
     * The #GeglNode returned contains the graph described by the tree of stacks
     * in the XML document. The tree is connected to the "output" pad of the
     * returned node and thus can be used directly for processing.
     * @constructor 
     * @param xmldata a \0 terminated string containing XML data to be parsed.
     * @param path_root a file system path that relative paths in the XML will be resolved in relation to.
     */
    static new_from_xml(xmldata: string, path_root: string): Node
    _init(config?: Node_ConstructProps): void
}

interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}

interface Operation {

    // Class property signals of Gegl-0.3.Gegl.Operation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Operation extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Operation

    static name: string
    static $gtype: GObject.GType<Operation>

    // Constructors of Gegl-0.3.Gegl.Operation

    constructor(config?: Operation_ConstructProps) 
    _init(config?: Operation_ConstructProps): void
    static find_property(operation_type: string, property_name: string): GObject.ParamSpec
    static get_key(operation_type: string, key_name: string): string
    static get_op_version(op_name: string): string
    static get_property_key(operation_type: string, property_name: string, property_key_name: string): string
    static list_keys(operation_type: string): string[]
    static list_properties(operation_type: string): GObject.ParamSpec[]
    static list_property_keys(operation_type: string, property_name: string): string[]
}

interface ParamAudioFragment {
}

class ParamAudioFragment extends GObject.ParamSpec {

    // Own properties of Gegl-0.3.Gegl.ParamAudioFragment

    static name: string
}

interface ParamColor {
}

class ParamColor extends GObject.ParamSpec {

    // Own properties of Gegl-0.3.Gegl.ParamColor

    static name: string
}

interface ParamCurve {
}

class ParamCurve extends GObject.ParamSpec {

    // Own properties of Gegl-0.3.Gegl.ParamCurve

    static name: string
}

interface ParamDouble {
}

class ParamDouble extends GObject.ParamSpecDouble {

    // Own properties of Gegl-0.3.Gegl.ParamDouble

    static name: string
}

interface ParamEnum {
}

class ParamEnum extends GObject.ParamSpecEnum {

    // Own properties of Gegl-0.3.Gegl.ParamEnum

    static name: string
}

interface ParamFilePath {
}

class ParamFilePath extends GObject.ParamSpecString {

    // Own properties of Gegl-0.3.Gegl.ParamFilePath

    static name: string
}

interface ParamFormat {
}

class ParamFormat extends GObject.ParamSpecPointer {

    // Own properties of Gegl-0.3.Gegl.ParamFormat

    static name: string
}

interface ParamInt {
}

class ParamInt extends GObject.ParamSpecInt {

    // Own properties of Gegl-0.3.Gegl.ParamInt

    static name: string
}

interface ParamPath {
}

class ParamPath extends GObject.ParamSpec {

    // Own properties of Gegl-0.3.Gegl.ParamPath

    static name: string
}

interface ParamSeed {
}

class ParamSeed extends GObject.ParamSpecUInt {

    // Own properties of Gegl-0.3.Gegl.ParamSeed

    static name: string
}

interface ParamString {
}

class ParamString extends GObject.ParamSpecString {

    // Own properties of Gegl-0.3.Gegl.ParamString

    static name: string
}

interface ParamUri {
}

class ParamUri extends GObject.ParamSpecString {

    // Own properties of Gegl-0.3.Gegl.ParamUri

    static name: string
}

interface Path_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Path_ChangedSignalCallback {
    ($obj: Path, object: object | null): void
}

interface Path {

    // Own fields of Gegl-0.3.Gegl.Path

    parent_instance: GObject.Object

    // Owm methods of Gegl-0.3.Gegl.Path

    /**
     * Compute the coordinates of the path at the `position` (length measured from
     * start of path, not including discontinuities).
     * @param pos how far along the path.
     */
    calc(pos: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Compute a corresponding y coordinate for a given x input coordinate,
     * returns 0 if computed correctly and -1 if the path doesn't exist for the
     * specified x coordinate.
     * @param x x coordinate to compute for
     */
    calc_y_for_x(x: number): [ /* returnType */ number, /* y */ number ]
    /**
     * Remove all nods from a `path`.
     */
    clear(): void
    /**
     * Figure out what and where on a path is closest to arbitrary coordinates.
     * 
     * Returns the length along the path where the closest point was encountered.
     * @param x x coordinate.
     * @param y y coordinate
     */
    closest_point(x: number, y: number): [ /* returnType */ number, /* on_path_x */ number, /* on_path_y */ number, /* node_pos_before */ number ]
    /**
     * Execute a provided function for every node in the path (useful for
     * drawing and otherwise traversing a path.)
     * @param each_item a function to call for each node in the path.
     */
    foreach(each_item: NodeFunction): void
    /**
     * Execute a provided function for the segments of a poly line approximating
     * the path.
     * @param each_item a function to call for each node in the path.
     */
    foreach_flat(each_item: NodeFunction): void
    /**
     * Make the `GeglPath` stop firing signals as it changes must be paired with a
     * gegl_path_thaw() for the signals to start again.
     */
    freeze(): void
    /**
     * Compute the bounding box of a path.
     */
    get_bounds(): [ /* min_x */ number, /* max_x */ number, /* min_y */ number, /* max_y */ number ]
    /**
     * Returns the total length of the path.
     */
    get_length(): number
    /**
     * Get the transformation matrix of the path.
     */
    get_matrix(): /* matrix */ Matrix3
    /**
     * Retrieves the number of nodes in the path.
     */
    get_n_nodes(): number
    /**
     * Retrieve the node of the path at position `pos`.
     * 
     * Returns TRUE if the node was successfully retrieved.
     * @param index the node number to retrieve
     */
    get_node(index: number): [ /* returnType */ boolean, /* node */ PathItem ]
    /**
     * Insert the new node `node` at position `pos` in `path`.
     * if `pos` = -1, the node is added in the last position.
     * @param pos the position we want the new node to have.
     * @param node pointer to a structure describing the GeglPathItem we want to store
     */
    insert_node(pos: number, node: PathItem): void
    /**
     * Check if the path contains any nodes.
     * 
     * Returns TRUE if the path has no nodes.
     */
    is_empty(): boolean
    /**
     * Parses `instructions` and appends corresponding nodes to path (call
     * gegl_path_clean() first if you want to replace the existing path.
     * @param instructions a string describing a path.
     */
    parse_string(instructions: string): void
    /**
     * Removes the node number `pos` in `path`.
     * @param pos a node in the path.
     */
    remove_node(pos: number): void
    /**
     * Replaces the exiting node at position `pos` in `path`.
     * @param pos the position we want the new node to have.
     * @param node pointer to a structure describing the GeglPathItem we want to store.
     */
    replace_node(pos: number, node: PathItem): void
    /**
     * Set the transformation matrix of the path.
     * 
     * The path is transformed through this matrix when being evaluated,
     * causing the calculated positions and length to be changed by the transform.
     * @param matrix a #GeglMatrix3 to copy the matrix from
     */
    set_matrix(matrix: Matrix3): void
    /**
     * Restart firing signals (unless the path has been frozen multiple times).
     */
    thaw(): void
    /**
     * Serialize the paths nodes to a string.
     */
    to_string(): string

    // Own signals of Gegl-0.3.Gegl.Path

    connect(sigName: "changed", callback: Path_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Path_ChangedSignalCallback): number
    emit(sigName: "changed", object: object | null, ...args: any[]): void

    // Class property signals of Gegl-0.3.Gegl.Path

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Path extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Path

    static name: string
    static $gtype: GObject.GType<Path>

    // Constructors of Gegl-0.3.Gegl.Path

    constructor(config?: Path_ConstructProps) 
    /**
     * Creates a new #GeglPath with no nodes.
     * 
     * Returns the newly created #GeglPath
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GeglPath with no nodes.
     * 
     * Returns the newly created #GeglPath
     * @constructor 
     */
    static new(): Path
    /**
     * Creates a new #GeglPath with the nodes described in the string
     * `instructions`. See gegl_path_parse_string() for details of the
     * format of the string.
     * 
     * Returns the newly created #GeglPath
     * @constructor 
     * @param instructions a string describing the path.
     */
    static new_from_string(instructions: string): Path
    _init(config?: Path_ConstructProps): void
    /**
     * Adds a new type to the path system, FIXME this should probably
     * return something on registration conflicts, for now it expects
     * all registered paths to be aware of each other.
     * @param type a gchar to recognize in path descriptions.
     * @param items the number of floating point data items the instruction takes
     * @param description a human readable description of this entry
     */
    static add_type(type: number, items: number, description: string): void
}

interface Processor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.Processor

    chunksize?: number | null
    node?: Node | null
    progress?: number | null
    rectangle?: object | null
}

interface Processor {

    // Own properties of Gegl-0.3.Gegl.Processor

    readonly chunksize: number
    node: Node
    progress: number
    rectangle: object

    // Owm methods of Gegl-0.3.Gegl.Processor

    set_level(level: number): void
    /**
     * Change the rectangle a #GeglProcessor is working on.
     * @param rectangle the new #GeglRectangle the processor shold work on or NULL to make it work on all data in the buffer.
     */
    set_rectangle(rectangle: Rectangle): void
    set_scale(scale: number): void
    /**
     * Do an iteration of work for the processor.
     * 
     * Returns TRUE if there is more work to be done.
     * 
     * ---
     * GeglProcessor *processor = gegl_node_new_processor (node, &roi);
     * double         progress;
     * 
     * while (gegl_processor_work (processor, &progress))
     *   g_warning ("%f%% complete", progress);
     * g_object_unref (processor);
     */
    work(): [ /* returnType */ boolean, /* progress */ number ]

    // Class property signals of Gegl-0.3.Gegl.Processor

    connect(sigName: "notify::chunksize", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunksize", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunksize", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: Processor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Processor extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Processor

    static name: string
    static $gtype: GObject.GType<Processor>

    // Constructors of Gegl-0.3.Gegl.Processor

    constructor(config?: Processor_ConstructProps) 
    _init(config?: Processor_ConstructProps): void
}

interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}

interface Stats {

    // Own properties of Gegl-0.3.Gegl.Stats

    readonly swap_busy: boolean
    readonly swap_file_size: number
    readonly swap_total: number
    readonly tile_cache_hits: number
    readonly tile_cache_misses: number
    readonly tile_cache_total: number
    readonly tile_cache_total_max: number
    readonly tile_cache_total_uncloned: number
    readonly zoom_total: number

    // Class property signals of Gegl-0.3.Gegl.Stats

    connect(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-busy", ...args: any[]): void
    connect(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-file-size", ...args: any[]): void
    connect(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-total", ...args: any[]): void
    connect(sigName: "notify::tile-cache-hits", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-hits", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-hits", ...args: any[]): void
    connect(sigName: "notify::tile-cache-misses", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-misses", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-misses", ...args: any[]): void
    connect(sigName: "notify::tile-cache-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-total", ...args: any[]): void
    connect(sigName: "notify::tile-cache-total-max", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-max", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-total-max", ...args: any[]): void
    connect(sigName: "notify::tile-cache-total-uncloned", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-uncloned", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-total-uncloned", ...args: any[]): void
    connect(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Stats extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Stats

    static name: string
    static $gtype: GObject.GType<Stats>

    // Constructors of Gegl-0.3.Gegl.Stats

    constructor(config?: Stats_ConstructProps) 
    _init(config?: Stats_ConstructProps): void
}

interface TileBackend_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.TileBackend

    flush_on_destroy?: boolean | null
    format?: object | null
    tile_height?: number | null
    tile_width?: number | null
}

interface TileBackend {

    // Own properties of Gegl-0.3.Gegl.TileBackend

    flush_on_destroy: boolean
    readonly format: object
    readonly px_size: number
    readonly tile_height: number
    readonly tile_size: number
    readonly tile_width: number

    // Own fields of Gegl-0.3.Gegl.TileBackend

    parent_instance: TileSource
    priv: TileBackendPrivate

    // Owm methods of Gegl-0.3.Gegl.TileBackend

    get_extent(): Rectangle
    get_flush_on_destroy(): boolean
    get_tile_height(): number
    get_tile_size(): number
    get_tile_width(): number
    /**
     * Gets a pointer to the GeglTileStorage that uses the backend
     */
    peek_storage(): TileSource
    /**
     * Specify the extent of the backend, can be used to pre-prime the
     * backend with the width/height information when constructing proxy
     * GeglBuffers to interact with other systems
     * @param rectangle the new extent
     */
    set_extent(rectangle: Rectangle): void
    /**
     * Control whether cached data will be written to the backend before it
     * is destroyed. If false unwritten data will be discarded.
     * @param flush_on_destroy true if the backend needs to be flushed
     */
    set_flush_on_destroy(flush_on_destroy: boolean): void

    // Class property signals of Gegl-0.3.Gegl.TileBackend

    connect(sigName: "notify::flush-on-destroy", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush-on-destroy", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flush-on-destroy", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::px-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::px-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::px-size", ...args: any[]): void
    connect(sigName: "notify::tile-height", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-height", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-height", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-size", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::tile-width", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-width", callback: (($obj: TileBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TileBackend extends TileSource {

    // Own properties of Gegl-0.3.Gegl.TileBackend

    static name: string
    static $gtype: GObject.GType<TileBackend>

    // Constructors of Gegl-0.3.Gegl.TileBackend

    constructor(config?: TileBackend_ConstructProps) 
    _init(config?: TileBackend_ConstructProps): void
    /**
     * Delete a swap file from disk. This must be used by tile backends which may
     * swap to disk under certain circonstances.
     * 
     * For safety, this function will check that the swap file is in the swap
     * directory before deletion but it won't perform any other check.
     * @param path the path where the gegl tile backend has swapped.
     */
    static unlink_swap(path: string): void
}

interface TileHandler_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Gegl-0.3.Gegl.TileHandler

    source?: GObject.Object | null
}

interface TileHandler {

    // Own fields of Gegl-0.3.Gegl.TileHandler

    parent_instance: TileSource
    source: TileSource
    priv: TileHandlerPrivate

    // Owm methods of Gegl-0.3.Gegl.TileHandler

    damage_rect(rect: Rectangle): void
    set_source(source: TileSource): void

    // Class property signals of Gegl-0.3.Gegl.TileHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TileHandler extends TileSource {

    // Own properties of Gegl-0.3.Gegl.TileHandler

    static name: string
    static $gtype: GObject.GType<TileHandler>

    // Constructors of Gegl-0.3.Gegl.TileHandler

    constructor(config?: TileHandler_ConstructProps) 
    _init(config?: TileHandler_ConstructProps): void
}

interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}

interface TileSource {

    // Own fields of Gegl-0.3.Gegl.TileSource

    parent_instance: GObject.Object
    command: TileSourceCommand
    padding: object[]

    // Class property signals of Gegl-0.3.Gegl.TileSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TileSource extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.TileSource

    static name: string
    static $gtype: GObject.GType<TileSource>

    // Constructors of Gegl-0.3.Gegl.TileSource

    constructor(config?: TileSource_ConstructProps) 
    _init(config?: TileSource_ConstructProps): void
}

interface AudioFragmentClass {

    // Own fields of Gegl-0.3.Gegl.AudioFragmentClass

    parent_class: GObject.ObjectClass
}

abstract class AudioFragmentClass {

    // Own properties of Gegl-0.3.Gegl.AudioFragmentClass

    static name: string
}

interface AudioFragmentPrivate {
}

class AudioFragmentPrivate {

    // Own properties of Gegl-0.3.Gegl.AudioFragmentPrivate

    static name: string
}

interface BufferIterator {

    // Own fields of Gegl-0.3.Gegl.BufferIterator

    length: number
    data: object[]
    roi: Rectangle[]
    priv: BufferIteratorPriv
}

class BufferIterator {

    // Own properties of Gegl-0.3.Gegl.BufferIterator

    static name: string
}

interface BufferIteratorPriv {
}

class BufferIteratorPriv {

    // Own properties of Gegl-0.3.Gegl.BufferIteratorPriv

    static name: string
}

interface ColorClass {

    // Own fields of Gegl-0.3.Gegl.ColorClass

    parent_class: GObject.ObjectClass
}

abstract class ColorClass {

    // Own properties of Gegl-0.3.Gegl.ColorClass

    static name: string
}

interface ColorPrivate {
}

class ColorPrivate {

    // Own properties of Gegl-0.3.Gegl.ColorPrivate

    static name: string
}

interface CurveClass {

    // Own fields of Gegl-0.3.Gegl.CurveClass

    parent_class: GObject.ObjectClass
}

abstract class CurveClass {

    // Own properties of Gegl-0.3.Gegl.CurveClass

    static name: string
}

interface Lookup {

    // Own fields of Gegl-0.3.Gegl.Lookup

    function_: LookupFunction
    data: object
    shift: number
    positive_min: number
    positive_max: number
    negative_min: number
    negative_max: number
    bitmask: number[]
    table: number[]
}

class Lookup {

    // Own properties of Gegl-0.3.Gegl.Lookup

    static name: string
}

interface Matrix2 {

    // Own fields of Gegl-0.3.Gegl.Matrix2

    coeff: number[]

    // Owm methods of Gegl-0.3.Gegl.Matrix2

    determinant(): number
    is_scale(): boolean
}

class Matrix2 {

    // Own properties of Gegl-0.3.Gegl.Matrix2

    static name: string
}

interface Matrix3 {

    // Own fields of Gegl-0.3.Gegl.Matrix3

    coeff: number[]

    // Owm methods of Gegl-0.3.Gegl.Matrix3

    /**
     * Returns a copy of `src`.
     */
    copy(): Matrix3
    /**
     * Copies the matrix in `src` into `dst`.
     * @param src a #GeglMatrix3
     */
    copy_into(src: Matrix3): void
    /**
     * Returns the determinant for the matrix.
     */
    determinant(): number
    /**
     * Check if two matrices are equal.
     * 
     * Returns TRUE if the matrices are equal.
     * @param matrix2 a #GeglMatrix3
     */
    equal(matrix2: Matrix3): boolean
    /**
     * Set the provided `matrix` to the identity matrix.
     */
    identity(): void
    /**
     * Inverts `matrix`.
     */
    invert(): void
    /**
     * Check if a matrix is the identity matrix.
     * 
     * Returns TRUE if the matrix is the identity matrix.
     */
    is_identity(): boolean
    /**
     * Check if a matrix only does scaling.
     * 
     * Returns TRUE if the matrix only does scaling.
     */
    is_scale(): boolean
    /**
     * Check if a matrix only does translation.
     * 
     * Returns TRUE if the matrix only does trasnlation.
     */
    is_translate(): boolean
    /**
     * Multiples `product` = `left` · `right`
     * @param right a #GeglMatrix3
     * @param product a #GeglMatrix3 to store the result in.
     */
    multiply(right: Matrix3, product: Matrix3): void
    /**
     * Shift the origin of the transformation specified by `matrix`
     * to (`x,` `y)`. In other words, calculate the matrix that:
     * 
     * 1. Translates the input by (-`x,` -`y)`.
     * 
     * 2. Transforms the result using the original `matrix`.
     * 
     * 3. Translates the result by (`x,` `y)`.
     * @param x x coordinate of new origin
     * @param y y coordinate of new origin.
     */
    originate(x: number, y: number): void
    /**
     * Parse a transofmation matrix from a string.
     * @param string a string describing the matrix (right now a small subset of the transform strings allowed by SVG)
     */
    parse_string(string: string): void
    /**
     * Serialize a #GeglMatrix3 to a string.
     * 
     * Returns a freshly allocated string representing that #GeglMatrix3, the
     * returned string should be g_free()'d.
     */
    to_string(): string
    /**
     * transforms the coordinates provided in `x` and `y` and changes to the
     * coordinates gotten when the transformed with the matrix.
     * @param x pointer to an x coordinate
     * @param y pointer to an y coordinate
     */
    transform_point(x: number, y: number): void
}

class Matrix3 {

    // Own properties of Gegl-0.3.Gegl.Matrix3

    static name: string

    // Constructors of Gegl-0.3.Gegl.Matrix3

    constructor() 
    static new(): Matrix3
}

interface OperationContext {
}

class OperationContext {

    // Own properties of Gegl-0.3.Gegl.OperationContext

    static name: string
}

interface ParamSpecDouble {

    // Own fields of Gegl-0.3.Gegl.ParamSpecDouble

    parent_instance: GObject.ParamSpecDouble
    ui_minimum: number
    ui_maximum: number
    ui_gamma: number
    ui_step_small: number
    ui_step_big: number
    ui_digits: number

    // Owm methods of Gegl-0.3.Gegl.ParamSpecDouble

    set_digits(digits: number): void
    set_steps(small_step: number, big_step: number): void
}

class ParamSpecDouble {

    // Own properties of Gegl-0.3.Gegl.ParamSpecDouble

    static name: string
}

interface ParamSpecEnum {

    // Own fields of Gegl-0.3.Gegl.ParamSpecEnum

    parent_instance: GObject.ParamSpecEnum
    excluded_values: object[]

    // Owm methods of Gegl-0.3.Gegl.ParamSpecEnum

    exclude_value(value: number): void
}

class ParamSpecEnum {

    // Own properties of Gegl-0.3.Gegl.ParamSpecEnum

    static name: string
}

interface ParamSpecFilePath {

    // Own fields of Gegl-0.3.Gegl.ParamSpecFilePath

    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
}

class ParamSpecFilePath {

    // Own properties of Gegl-0.3.Gegl.ParamSpecFilePath

    static name: string
}

interface ParamSpecFormat {

    // Own fields of Gegl-0.3.Gegl.ParamSpecFormat

    parent_instance: GObject.ParamSpecPointer
}

class ParamSpecFormat {

    // Own properties of Gegl-0.3.Gegl.ParamSpecFormat

    static name: string
}

interface ParamSpecInt {

    // Own fields of Gegl-0.3.Gegl.ParamSpecInt

    parent_instance: GObject.ParamSpecInt
    ui_minimum: number
    ui_maximum: number
    ui_gamma: number
    ui_step_small: number
    ui_step_big: number

    // Owm methods of Gegl-0.3.Gegl.ParamSpecInt

    set_steps(small_step: number, big_step: number): void
}

class ParamSpecInt {

    // Own properties of Gegl-0.3.Gegl.ParamSpecInt

    static name: string
}

interface ParamSpecSeed {

    // Own fields of Gegl-0.3.Gegl.ParamSpecSeed

    parent_instance: GObject.ParamSpecUInt
    ui_minimum: number
    ui_maximum: number
}

class ParamSpecSeed {

    // Own properties of Gegl-0.3.Gegl.ParamSpecSeed

    static name: string
}

interface ParamSpecString {

    // Own fields of Gegl-0.3.Gegl.ParamSpecString

    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
}

class ParamSpecString {

    // Own properties of Gegl-0.3.Gegl.ParamSpecString

    static name: string
}

interface ParamSpecUri {

    // Own fields of Gegl-0.3.Gegl.ParamSpecUri

    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
}

class ParamSpecUri {

    // Own properties of Gegl-0.3.Gegl.ParamSpecUri

    static name: string
}

interface PathClass {
}

abstract class PathClass {

    // Own properties of Gegl-0.3.Gegl.PathClass

    static name: string
}

interface PathItem {

    // Own fields of Gegl-0.3.Gegl.PathItem

    type: number
    point: PathPoint[]
}

class PathItem {

    // Own properties of Gegl-0.3.Gegl.PathItem

    static name: string
}

interface PathList {

    // Own fields of Gegl-0.3.Gegl.PathList

    next: object
    d: PathItem
}

class PathList {

    // Own properties of Gegl-0.3.Gegl.PathList

    static name: string
}

interface PathPoint {

    // Own fields of Gegl-0.3.Gegl.PathPoint

    x: number
    y: number
}

class PathPoint {

    // Own properties of Gegl-0.3.Gegl.PathPoint

    static name: string
}

interface Random {

    // Owm methods of Gegl-0.3.Gegl.Random

    /**
     * Return a new copy of an existing GeglRandom
     */
    duplicate(): Random
    /**
     * Return a random floating point number in range 0.0 .. 1.0.
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     */
    float(x: number, y: number, z: number, n: number): number
    /**
     * Return a random floating point number in the range specified,
     * for the given x,y coordinates and GeglRandom provided, if multiple different
     * numbers are needed pass in incrementing n's.
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     * @param min minimum value
     * @param max maximum value
     */
    float_range(x: number, y: number, z: number, n: number, min: number, max: number): number
    /**
     * Free a GeglRandom structure created with gegl_random_new() or
     * gegl_random_new_with_seed()
     */
    free(): void
    /**
     * Return a random integer number in range 0 .. MAX_UINT
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     */
    int(x: number, y: number, z: number, n: number): number
    /**
     * Return a random integer point number in the range specified,
     * for the given x,y coordinates and GeglRandom provided, if multiple different
     * numbers are needed pass in incrementing n's.
     * @param x x coordinate
     * @param y y coordinate
     * @param z z coordinate (mipmap level)
     * @param n number no (each x,y coordinate provides its own sequence of numbers
     * @param min minimum value
     * @param max maximum value+1
     */
    int_range(x: number, y: number, z: number, n: number, min: number, max: number): number
    /**
     * Change the seed of an existing GeglRandom.
     * @param seed an integer seed, change for different permutation.
     */
    set_seed(seed: number): void
}

class Random {

    // Own properties of Gegl-0.3.Gegl.Random

    static name: string

    // Constructors of Gegl-0.3.Gegl.Random

    /**
     * Creates a new random number generator initialized with a random seed.
     * This structure needs to be freed by the user with gegl_random_free();
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new random number generator initialized with a random seed.
     * This structure needs to be freed by the user with gegl_random_free();
     * @constructor 
     */
    static new(): Random
    /**
     * Return an opaque structure associated to the seed.
     * This structure needs to be freed by the user with gegl_random_free();
     * @constructor 
     * @param seed an integer seed, change for different permutation.
     */
    static new_with_seed(seed: number): Random
}

interface Rectangle {

    // Own fields of Gegl-0.3.Gegl.Rectangle

    x: number
    y: number
    width: number
    height: number

    // Owm methods of Gegl-0.3.Gegl.Rectangle

    /**
     * Computes the bounding box of the rectangles `source1` and `source2` and stores the
     * resulting bounding box in `destination`.
     * 
     * `destination` may point to the same object as `source1` or `source2`.
     * @param source1 a #GeglRectangle
     * @param source2 a #GeglRectangle
     */
    bounding_box(source1: Rectangle, source2: Rectangle): void
    /**
     * Checks if the #GeglRectangle `child` is fully contained within `parent`.
     * 
     * Returns TRUE if the `child` is fully contained in `parent`.
     * @param child a #GeglRectangle
     */
    contains(child: Rectangle): boolean
    /**
     * Copies the rectangle information stored in `source` over the information in
     * `destination`.
     * 
     * `destination` may point to the same object as `source`.
     * @param source a #GeglRectangle
     */
    copy(source: Rectangle): void
    /**
     * For debugging purposes, not stable API.
     */
    dump(): void
    /**
     * Create a new copy of `rectangle`.
     */
    dup(): Rectangle
    /**
     * Check if two #GeglRectangles are equal.
     * 
     * Returns TRUE if `rectangle` and `rectangle2` are equal.
     * @param rectangle2 a #GeglRectangle
     */
    equal(rectangle2: Rectangle): boolean
    /**
     * Check if a rectangle is equal to a set of parameters.
     * 
     * Returns TRUE if `rectangle` and `x,``y` `width` x `height` are equal.
     * @param x X coordinate
     * @param y Y coordinate
     * @param width width of rectangle
     * @param height height of rectangle
     */
    equal_coords(x: number, y: number, width: number, height: number): boolean
    /**
     * Calculates the intersection of two rectangles. If the rectangles do not
     * intersect, dest's width and height are set to 0 and its x and y values
     * are undefined.
     * 
     * `dest` may point to the same object as `src1` or `src2`.
     * 
     * Returns TRUE if the rectangles intersect.
     * @param src1 a #GeglRectangle
     * @param src2 a #GeglRectangle
     */
    intersect(src1: Rectangle, src2: Rectangle): boolean
    /**
     * Check if a rectangle has zero area.
     * 
     * Returns TRUE if `rectangle` height and width are both zero.
     */
    is_empty(): boolean
    /**
     * Returns TRUE if the GeglRectangle represents an infininte plane,
     * FALSE otherwise.
     */
    is_infinite_plane(): boolean
    /**
     * Sets the `x,` `y,` `width` and `height` on `rectangle`.
     * @param x upper left x coordinate
     * @param y upper left y coordinate
     * @param width width in pixels.
     * @param height height in pixels.
     */
    set(x: number, y: number, width: number, height: number): void
    /**
     * Computes the bounding box of the area formed by subtracting `subtrahend`
     * from `minuend,` and stores the result in `destination`.
     * 
     * `destination` may point to the same object as `minuend` or `subtrahend`.
     * 
     * Returns TRUE if the result is not empty.
     * @param minuend a #GeglRectangle
     * @param subtrahend a #GeglRectangle
     */
    subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean
}

class Rectangle {

    // Own properties of Gegl-0.3.Gegl.Rectangle

    static name: string

    // Constructors of Gegl-0.3.Gegl.Rectangle

    /**
     * Creates a new rectangle set with the values from `x,` `y,` `width` and `height`.
     * @constructor 
     * @param x upper left x coordinate
     * @param y upper left y coordinate
     * @param width width in pixels.
     * @param height height in pixels.
     */
    constructor(x: number, y: number, width: number, height: number) 
    /**
     * Creates a new rectangle set with the values from `x,` `y,` `width` and `height`.
     * @constructor 
     * @param x upper left x coordinate
     * @param y upper left y coordinate
     * @param width width in pixels.
     * @param height height in pixels.
     */
    static new(x: number, y: number, width: number, height: number): Rectangle
    /**
     * Returns a GeglRectangle that represents an infininte plane.
     */
    static infinite_plane(): Rectangle
}

interface Sampler {

    // Owm methods of Gegl-0.3.Gegl.Sampler

    /**
     * Perform a sampling with the provided `sampler`.
     * @param x x coordinate to sample
     * @param y y coordinate to sample
     * @param scale matrix representing extent of sampling area in source buffer.
     * @param output memory location for output data.
     * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(x: number, y: number, scale: Matrix2, output: object | null, repeat_mode: AbyssPolicy): void
    get_context_rect(): Rectangle
}

class Sampler {

    // Own properties of Gegl-0.3.Gegl.Sampler

    static name: string
}

interface Tile {
}

class Tile {

    // Own properties of Gegl-0.3.Gegl.Tile

    static name: string
}

interface TileBackendClass {

    // Own fields of Gegl-0.3.Gegl.TileBackendClass

    parent_class: TileSourceClass
    padding: object[]
}

abstract class TileBackendClass {

    // Own properties of Gegl-0.3.Gegl.TileBackendClass

    static name: string
}

interface TileBackendPrivate {
}

class TileBackendPrivate {

    // Own properties of Gegl-0.3.Gegl.TileBackendPrivate

    static name: string
}

interface TileHandlerClass {

    // Own fields of Gegl-0.3.Gegl.TileHandlerClass

    parent_class: TileSourceClass
}

abstract class TileHandlerClass {

    // Own properties of Gegl-0.3.Gegl.TileHandlerClass

    static name: string
}

interface TileHandlerPrivate {
}

class TileHandlerPrivate {

    // Own properties of Gegl-0.3.Gegl.TileHandlerPrivate

    static name: string
}

interface TileSourceClass {

    // Own fields of Gegl-0.3.Gegl.TileSourceClass

    parent_class: GObject.ObjectClass
    padding: object[]
}

abstract class TileSourceClass {

    // Own properties of Gegl-0.3.Gegl.TileSourceClass

    static name: string
}

}
export default Gegl;