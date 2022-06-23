// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gegl-0.4
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Babl from './Babl-0.1';

export namespace Gegl {

enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
enum BablVariant {
    FLOAT,
    LINEAR,
    NON_LINEAR,
    PERCEPTUAL,
    LINEAR_PREMULTIPLIED,
    PERCEPTUAL_PREMULTIPLIED,
    LINEAR_PREMULTIPLIED_IF_ALPHA,
    PERCEPTUAL_PREMULTIPLIED_IF_ALPHA,
    ADD_ALPHA,
}
enum CachePolicy {
    AUTO,
    NEVER,
    ALWAYS,
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
    BLUE_NOISE,
    BLUE_NOISE_COVARIANT,
}
/**
 * Flags controlling the mapping strategy.
 */
enum MapFlags {
    /**
     * Prevent further mapping from being registered.
     */
    MAP_EXCLUDE_UNMAPPED,
}
enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
enum RectangleAlignment {
    SUBSET,
    SUPERSET,
    NEAREST,
}
/**
 * An enumerated type specifying resolution (density) units.  If resolution
 * units are unknown, X and Y resolution specify the pixel aspect ratio.
 */
enum ResolutionUnit {
    /**
     * Unknown or resolution not applicable.
     */
    NONE,
    /**
     * Dots or pixels per inch.
     */
    DPI,
    /**
     * Dots or pixels per metre.
     */
    DPM,
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
    EGL_TILE_IDLE,
    EGL_TILE_SET,
    EGL_TILE_GET,
    EGL_TILE_IS_CACHED,
    EGL_TILE_EXIST,
    EGL_TILE_VOID,
    EGL_TILE_FLUSH,
    EGL_TILE_REFETCH,
    EGL_TILE_REINIT,
    GEGL_TILE_LAST_0_4_8_COMMAND,
    EGL_TILE_COPY,
    EGL_TILE_LAST_COMMAND,
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
    BAKE_ANIM,
}
const AUTO_ROWSTRIDE: number
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
function bablVariant(format: Babl.Object, variant: BablVariant): Babl.Object
/**
 * Disable OpenCL
 */
function clDisable(): void
/**
 * Initialize and enable OpenCL, calling this function again
 * will re-enable OpenCL if it has been disabled.
 */
function clInit(): boolean
/**
 * Check if OpenCL is enabled.
 */
function clIsAccelerated(): boolean
/**
 * Returns a GeglConfig object with properties that can be manipulated to control
 * GEGLs behavior.
 */
function config(): Config
/**
 * Create a node chain from an unparsed commandline string.
 * @param ops an argv style, NULL terminated array of arguments
 * @param opStart node to pass in as input of chain
 * @param opEnd node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param relDim relative dimension to scale rel suffixed values by
 * @param pathRoot path in filesystem to use as relative root
 */
function createChain(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
/**
 * Create a node chain from argv style list of op data.
 * @param ops an argv style, NULL terminated array of arguments
 * @param opStart node to pass in as input of chain
 * @param opEnd node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param relDim relative dimension to scale rel suffixed values by
 * @param pathRoot path in filesystem to use as relative root
 */
function createChainArgv(ops: string, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string): void
/**
 * Call this function when you're done using GEGL. It will clean up
 * caches and write/dump debug information if the correct debug flags
 * are set.
 */
function exit(): void
/**
 * Returns a value sutable to pass to the GeglBuffer constructor
 * or any other property that expects a Babl format.
 * @param formatName A Babl format name, e.g. "RGBA float"
 */
function format(formatName: string): any | null
function formatGetName(format: any): string | null
/**
 * This function fetches the version of the GEGL library being used by
 * the running process.
 */
function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
/**
 * Dump the bounds and format of each node in the graph to stdout.
 * @param node The final node of the graph
 */
function graphDumpOutputs(node: Node): void
/**
 * Dump the region that will be rendered for each node to fulfill
 * the request.
 * @param node The final node of the graph
 * @param roi The request rectangle
 */
function graphDumpRequest(node: Node, roi: Rectangle): void
function hasOperation(operationType: string): boolean
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
function isMainThread(): boolean
function listOperations(): string[]
/**
 * Load all gegl modules found in the given directory.
 * @param path the directory to load modules from
 */
function loadModuleDirectory(path: string): void
/**
 * Distributes the execution of a function across multiple threads,
 * by calling it with a different index on each thread.
 * @param maxN the maximal number of threads to use
 * @param func the function to call
 */
function parallelDistribute(maxN: number, func: ParallelDistributeFunc): void
/**
 * Distributes the processing of a planar data-structure across
 * multiple threads, by calling the given function with different
 * sub-areas on different threads.
 * @param area the area to process
 * @param threadCost the cost of using each additional thread, relative               to the cost of processing a single data element
 * @param splitStrategy the strategy to use for dividing the area
 * @param func the function to call
 */
function parallelDistributeArea(area: Rectangle, threadCost: number, splitStrategy: SplitStrategy, func: ParallelDistributeAreaFunc): void
/**
 * Distributes the processing of a linear data-structure across
 * multiple threads, by calling the given function with different
 * sub-ranges on different threads.
 * @param size the total size of the data
 * @param threadCost the cost of using each additional thread, relative               to the cost of processing a single data element
 * @param func the function to call
 */
function parallelDistributeRange(size: number, threadCost: number, func: ParallelDistributeRangeFunc): void
/**
 * Creates a new #GParamSpec instance specifying a #GeglAudioFragment property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 */
function paramSpecAudioFragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultColor the default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecColor(name: string, nick: string, blurb: string, defaultColor: Color, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultColorString the default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecColorFromString(name: string, nick: string, blurb: string, defaultColorString: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Get the default color value of the param spec
 * @param self a #GeglColor #GParamSpec
 */
function paramSpecColorGetDefault(self: GObject.ParamSpec): Color
/**
 * Creates a new #GParamSpec instance specifying a #GeglCurve property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultCurve the default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecCurve(name: string, nick: string, blurb: string, defaultCurve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecDouble instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param minimum minimum value for the property specified
 * @param maximum maximum value for the property specified
 * @param defaultValue default value for the property specified
 * @param uiMinimum minimum value a user should be allowed to input
 * @param uiMaximum maximum value a user should be allowed to input
 * @param uiGamma the gamma that should be used when adjusting the value
 * @param flags flags for the property specified
 */
function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecEnum instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param enumType the enum type to get valid values from
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecEnum(name: string, nick: string, blurb: string, enumType: GObject.GType, defaultValue: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFilePath instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param noValidate true if the string should be validated with g_utf8_validate
 * @param nullOk true if the string can be NULL
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecFilePath(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 */
function paramSpecFormat(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecGetPropertyKey(pspec: GObject.ParamSpec, keyName: string): string
/**
 * Creates a new #GeglParamSpecInt instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param minimum minimum value for the property specified
 * @param maximum maximum value for the property specified
 * @param defaultValue default value for the property specified
 * @param uiMinimum minimum value a user should be allowed to input
 * @param uiMaximum maximum value a user should be allowed to input
 * @param uiGamma the gamma that should be used when adjusting the value
 * @param flags flags for the property specified
 */
function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglPath property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultPath the default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecPath(name: string, nick: string, blurb: string, defaultPath: Path, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecSeed instance specifying an integer random seed.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 */
function paramSpecSeed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecSetPropertyKey(pspec: GObject.ParamSpec, keyName: string, value: string): void
/**
 * Creates a new #GeglParamSpecString instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param noValidate true if the string should be validated with g_utf8_validate
 * @param nullOk true if the string can be NULL
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecString(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecUri instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param noValidate true if the string should be validated with g_utf8_validate
 * @param nullOk true if the string can be NULL
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 */
function paramSpecUri(name: string, nick: string, blurb: string, noValidate: boolean, nullOk: boolean, defaultValue: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Returns a GeglRectangle that represents an infininte plane.
 */
function rectangleInfinitePlane(): Rectangle
/**
 * Resets the cumulative data gathered by the #GeglStats object returned
 * by #gegl_stats().
 */
function resetStats(): void
function serialize(start: Node, end: Node, basepath: string, serializeFlags: SerializeFlag): string
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
/**
 * Specifies the type of function passed to
 * gegl_parallel_distribute_area().
 * 
 * The function should process the sub-area specified by `area`.
 * @callback 
 * @param area the current sub-area
 */
interface ParallelDistributeAreaFunc {
    (area: Rectangle): void
}
/**
 * Specifies the type of function passed to gegl_parallel_distribute().
 * 
 * The function should process the `i-th` part of the data, out of `n`
 * equal parts.  `n` may be less-than or equal-to the `max_n` argument
 * passed to gegl_parallel_distribute().
 * @callback 
 * @param i the current thread index, in the range [0,`n)`
 * @param n the number of threads execution is distributed across
 */
interface ParallelDistributeFunc {
    (i: number, n: number): void
}
/**
 * Specifies the type of function passed to
 * gegl_parallel_distribute_range().
 * 
 * The function should process `size` elements of the data, starting
 * at `offset`.
 * @callback 
 * @param offset the current data offset
 * @param size the current data size
 */
interface ParallelDistributeRangeFunc {
    (offset: number, size: number): void
}
interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: object | null, repeatMode: AbyssPolicy): void
}
interface TileCallback {
    (tile: Tile): void
}
interface TileSourceCommand {
    (geglTileSource: TileSource, command: TileCommand, x: number, y: number, z: number, data: object | null): object | null
}
interface Metadata_ConstructProps extends GObject.Object_ConstructProps {
}

interface Metadata {

    // Owm methods of Gegl-0.4.Gegl.Metadata

    /**
     * Retrieve resolution from the application image metadata.  Intended for use
     * by the image file writer.  If resolution is not supported by the application
     * or if the operation fails %FALSE is returned and the resolution values are
     * not updated.
     * @param unit #GeglResolutionUnit return location
     * @param x X resolution return location
     * @param y Y resolution return location
     */
    getResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Retrieve image file metadata from the application.  Intended for use by the
     * image file writer. If the operation fails it returns %FALSE and `value` is
     * not updated.
     * @param iter #GeglMetadataIter referencing the value to get
     * @param value Value to set in the interface
     */
    iterGetValue(iter: MetadataIter, value: any): boolean
    /**
     * Initialise an iterator to find all supported metadata keys.
     * @param iter #GeglMetadataIter to be initialised
     */
    iterInit(iter: MetadataIter): void
    /**
     * Look up the specified key and initialise an iterator to reference the
     * associated metadata. The iterator is used in conjunction with
     * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
     * iterator is not valid for gegl_metadata_iter_next().
     * @param iter #GeglMetadataIter to be initialised
     * @param key Name of the value look up
     */
    iterLookup(iter: MetadataIter, key: string): boolean
    /**
     * Move the iterator to the next metadata item
     * @param iter #GeglMetadataIter to be updated
     */
    iterNext(iter: MetadataIter): string
    /**
     * Set application data retrieved from image file's metadata.  Intended for use
     * by the image file reader.  If the operation fails it returns %FALSE and
     * `value` is ignored.
     * @param iter #GeglMetadataIter referencing the value to set
     * @param value Value to set in the interface
     */
    iterSetValue(iter: MetadataIter, value: any): boolean
    /**
     * Set the name of the file module and pass an array of mappings from
     * file-format specific metadata names to those used by Gegl. A GValue
     * transformation function may be supplied, e.g. to parse or format timestamps.
     * @param fileModule String identifying the file module, e.g, `"gegl:png-save"`
     * @param flags Flags specifying capabilities of underlying file format
     * @param map Array of mappings from file module metadata              names to Gegl well-known names.
     */
    registerMap(fileModule: string, flags: number, map: MetadataMap[]): void
    /**
     * Set resolution retrieved from image file's metadata.  Intended for use by
     * the image file reader.  If resolution is not supported by the application or
     * if the operation fails %FALSE is returned and the values are ignored.
     * @param unit Specify #GeglResolutionUnit
     * @param x X resolution
     * @param y Y resolution
     */
    setResolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Unregister the file module mappings and any further mappings added or
     * modified by the application.  This should be called after the file module
     * completes operations.
     */
    unregisterMap(): void

    // Class property signals of Gegl-0.4.Gegl.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Metadata extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Metadata

    static name: string
    static $gtype: GObject.GType<Metadata>

    // Constructors of Gegl-0.4.Gegl.Metadata

    constructor(config?: Metadata_ConstructProps) 
    _init(config?: Metadata_ConstructProps): void
}

interface AudioFragment_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.AudioFragment

    string?: string | null
}

interface AudioFragment {

    // Own properties of Gegl-0.4.Gegl.AudioFragment

    string: string

    // Own fields of Gegl-0.4.Gegl.AudioFragment

    parentInstance: GObject.Object
    data: number[]
    priv: AudioFragmentPrivate

    // Owm methods of Gegl-0.4.Gegl.AudioFragment

    getChannelLayout(): number
    getChannels(): number
    getMaxSamples(): number
    getPos(): number
    getSampleCount(): number
    getSampleRate(): number
    setChannelLayout(channelLayout: number): void
    setChannels(channels: number): void
    setMaxSamples(maxSamples: number): void
    setPos(pos: number): void
    setSampleCount(sampleCount: number): void
    setSampleRate(sampleRate: number): void

    // Class property signals of Gegl-0.4.Gegl.AudioFragment

    connect(sigName: "notify::string", callback: (...args: any[]) => void): number
    on(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AudioFragment extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.AudioFragment

    static name: string
    static $gtype: GObject.GType<AudioFragment>

    // Constructors of Gegl-0.4.Gegl.AudioFragment

    constructor(config?: AudioFragment_ConstructProps) 
    constructor(sampleRate: number, channels: number, channelLayout: number, maxSamples: number) 
    static new(sampleRate: number, channels: number, channelLayout: number, maxSamples: number): AudioFragment
    _init(config?: AudioFragment_ConstructProps): void
}

interface Buffer_ConstructProps extends TileHandler_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.Buffer

    abyssHeight?: number | null
    abyssWidth?: number | null
    abyssX?: number | null
    abyssY?: number | null
    backend?: TileBackend | null
    format?: object | null
    height?: number | null
    initialized?: boolean | null
    path?: string | null
    shiftX?: number | null
    shiftY?: number | null
    tileHeight?: number | null
    tileWidth?: number | null
    width?: number | null
    x?: number | null
    y?: number | null
}

/**
 * Signal callback interface for `changed`
 */
interface Buffer_ChangedSignalCallback {
    (object: Rectangle): void
}

interface Buffer {

    // Own properties of Gegl-0.4.Gegl.Buffer

    readonly abyssHeight: number
    readonly abyssWidth: number
    readonly abyssX: number
    readonly abyssY: number
    readonly backend: TileBackend
    format: object
    height: number
    readonly initialized: boolean
    readonly path: string
    readonly pixels: number
    readonly pxSize: number
    readonly shiftX: number
    readonly shiftY: number
    readonly tileHeight: number
    readonly tileWidth: number
    width: number
    x: number
    y: number

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gegl-0.4.Gegl.Buffer

    /**
     * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    addHandler(handler: object | null): void
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
     * @param srcRect source rectangle (or NULL to copy entire source buffer)
     * @param repeatMode the abyss policy to be using if src_rect is outside src's extent.
     * @param dst destination buffer.
     * @param dstRect position of upper left destination pixel (or NULL to match `src_rect)`
     */
    copy(srcRect: Rectangle, repeatMode: AbyssPolicy, dst: Buffer, dstRect: Rectangle): void
    /**
     * Create a new sub GeglBuffer, that is a view on a larger buffer.
     * @param extent coordinates of new buffer.
     */
    createSubBuffer(extent: Rectangle): Buffer
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
     * Invokes the external flush function, if any is set on the provided buffer -
     * this ensures that data pending - in the current implementation only OpenCL -
     * externally to be synchronized with the buffer. Multi threaded code should
     * call such a synchronization before branching out to avoid each of the
     * threads having an implicit synchronization of its own.
     * @param rect rectangle
     */
    flushExt(rect: Rectangle): void
    /**
     * Blocks emission of the "changed" signal for `buffer`.
     * 
     * While the signal is blocked, changes to `buffer` are accumulated, and will
     * be emitted once the signal is unblocked, using gegl_buffer_thaw_changed().
     */
    freezeChanged(): void
    /**
     * Return the abyss extent of a buffer, this expands out to the parents extent in
     * subbuffers.
     */
    getAbyss(): Rectangle
    /**
     * Returns a pointer to a GeglRectangle structure defining the geometry of a
     * specific GeglBuffer, this is also the default width/height of buffers passed
     * in to gegl_buffer_set and gegl_buffer_get (with a scale of 1.0 at least).
     */
    getExtent(): Rectangle
    /**
     * Fetch a rectangular linear buffer of pixel data from the GeglBuffer.
     * @param rect the coordinates we want to retrieve data from.
     * @param scale sampling scale, 1.0 = pixel for pixel 2.0 = magnify, 0.5 scale down.
     * @param formatName the format to store data in, if NULL the format of the buffer is used.
     * @param repeatMode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(rect: Rectangle, scale: number, formatName: string | null, repeatMode: AbyssPolicy): Uint8Array
    /**
     * Store a linear raster buffer into the GeglBuffer.
     * @param rect the rectangle to write.
     * @param formatName the format of the input data.
     * @param src pixel data to write to `buffer`.
     */
    set(rect: Rectangle, formatName: string, src: Uint8Array): void
    /**
     * This function makes sure GeglBuffer and underlying code is aware of changes
     * being made to the linear buffer. If the request was not a compatible one
     * it is written back to the buffer. Multiple concurrent users can be handed
     * the same buffer (both raw access and converted).
     * @param linear a previously returned buffer.
     */
    linearClose(linear: object | null): void
    /**
     * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    removeHandler(handler: object | null): void
    /**
     * Clean up resources used by sampling framework of buffer.
     */
    sampleCleanup(): void
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
    setAbyss(abyss: Rectangle): boolean
    /**
     * Sets the region covered by rect to the specified color.
     * @param rect a rectangular region to fill with a color.
     * @param color the GeglColor to fill with.
     */
    setColor(rect: Rectangle, color: Color): void
    /**
     * Sets the region covered by rect to the the provided pixel.
     * @param rect a rectangular region to fill with a color.
     * @param pixel pointer to the data of a single pixel
     * @param pixelFormat the babl format of the pixel, if missing - the soft format of dst.
     */
    setColorFromPixel(rect: Rectangle, pixel: object | null, pixelFormat: Babl.Object): void
    /**
     * Changes the size and position that is considered active in a buffer, this
     * operation is valid on any buffer, reads on subbuffers outside the master
     * buffer's extent are at the moment undefined.
     * 
     * Returns TRUE if the change of extent was successful.
     * @param extent new extent.
     */
    setExtent(extent: Rectangle): boolean
    /**
     * Fill a region with a repeating pattern. Offsets parameters are
     * relative to the origin (0, 0) and not to the rectangle. So be carefull
     * about the origin of `pattern` and `buffer` extents.
     * @param rect the region of `buffer` to fill
     * @param pattern a #GeglBuffer to be repeated as a pattern
     * @param xOffset where the pattern starts horizontally
     * @param yOffset where the pattern starts vertical
     */
    setPattern(rect: Rectangle, pattern: Buffer, xOffset: number, yOffset: number): void
    /**
     * Checks if a pair of buffers share the same underlying tile storage.
     * 
     * Returns TRUE if `buffer1` and `buffer2` share the same storage.
     * @param buffer2 a #GeglBuffer.
     */
    shareStorage(buffer2: Buffer): boolean
    /**
     * This function should be used instead of g_signal_connect when connecting to
     * the GeglBuffer::changed signal handler, GeglBuffer contains additional
     * machinery to avoid the overhead of changes when no signal handler have been
     * connected, if regular g_signal_connect is used; then no signals will be
     * emitted.
     * @param detailedSignal only "changed" expected for now
     * @param cHandler c function callback
     */
    signalConnect(detailedSignal: string, cHandler: GObject.Callback): number
    /**
     * Unblocks emission of the "changed" signal for `buffer`.
     * 
     * Once all calls to gegl_buffer_freeze_changed() are matched by corresponding
     * calls to gegl_buffer_freeze_changed(), all accumulated changes are emitted.
     */
    thawChanged(): void

    // Own signals of Gegl-0.4.Gegl.Buffer

    connect(sigName: "changed", callback: Buffer_ChangedSignalCallback): number
    on(sigName: "changed", callback: Buffer_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Buffer_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Buffer_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.Buffer

    connect(sigName: "notify::abyss-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::abyss-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abyss-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abyss-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abyss-height", ...args: any[]): void
    connect(sigName: "notify::abyss-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::abyss-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abyss-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abyss-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abyss-width", ...args: any[]): void
    connect(sigName: "notify::abyss-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::abyss-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abyss-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abyss-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abyss-x", ...args: any[]): void
    connect(sigName: "notify::abyss-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::abyss-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::abyss-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::abyss-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::abyss-y", ...args: any[]): void
    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::initialized", callback: (...args: any[]) => void): number
    on(sigName: "notify::initialized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::initialized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::initialized", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::pixels", callback: (...args: any[]) => void): number
    on(sigName: "notify::pixels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pixels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pixels", ...args: any[]): void
    connect(sigName: "notify::px-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::px-size", ...args: any[]): void
    connect(sigName: "notify::shift-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::shift-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shift-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shift-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shift-x", ...args: any[]): void
    connect(sigName: "notify::shift-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::shift-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shift-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shift-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shift-y", ...args: any[]): void
    connect(sigName: "notify::tile-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-height", ...args: any[]): void
    connect(sigName: "notify::tile-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-width", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Buffer extends TileHandler {

    // Own properties of Gegl-0.4.Gegl.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Gegl-0.4.Gegl.Buffer

    constructor(config?: Buffer_ConstructProps) 
    /**
     * Create a new GeglBuffer with the given format and dimensions.
     * @constructor 
     * @param formatName The Babl format name for this buffer, e.g. "RGBA float"
     * @param x x origin of the buffer's extent
     * @param y y origin of the buffer's extent
     * @param width width of the buffer's extent
     * @param height height of the buffer's extent
     */
    constructor(formatName: string, x: number, y: number, width: number, height: number) 
    /**
     * Create a new GeglBuffer with the given format and dimensions.
     * @constructor 
     * @param formatName The Babl format name for this buffer, e.g. "RGBA float"
     * @param x x origin of the buffer's extent
     * @param y y origin of the buffer's extent
     * @param width width of the buffer's extent
     * @param height height of the buffer's extent
     */
    static new(formatName: string, x: number, y: number, width: number, height: number): Buffer
    /**
     * Create a new GeglBuffer from a backend, if NULL is passed in the extent of
     * the buffer will be inherited from the extent of the backend.
     * 
     * returns a GeglBuffer, that holds a reference to the provided backend.
     * @constructor 
     * @param extent the geometry of the buffer (origin, width and height) a GeglRectangle.
     * @param backend an instance of a GeglTileBackend subclass.
     */
    static newForBackend(extent: Rectangle, backend: TileBackend): Buffer
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
    /**
     * Generates a unique filename in the GEGL swap directory, suitable for
     * using as swap space.  When the file is no longer needed, it may be
     * removed with gegl_buffer_swap_remove_file(); otherwise, it will be
     * removed when gegl_exit() is called.
     * @param suffix a string to suffix the filename with, for          identification purposes, or %NULL.
     */
    static swapCreateFile(suffix: string | null): string | null
    /**
     * Tests if `path` is a swap file, that is, if it has been created
     * with gegl_buffer_swap_create_file(), and hasn't been removed
     * yet.
     * @param path a filename
     */
    static swapHasFile(path: string): boolean
    /**
     * Removes a swap file, generated using gegl_buffer_swap_create_file(),
     * unlinking the file, if exists.
     * @param path the swap file to remove, as returned by        gegl_buffer_swap_create_file()
     */
    static swapRemoveFile(path: string): void
}

interface Color_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.Color

    string?: string | null
}

interface Color {

    // Own properties of Gegl-0.4.Gegl.Color

    string: string

    // Own fields of Gegl-0.4.Gegl.Color

    parentInstance: GObject.Object
    priv: ColorPrivate

    // Owm methods of Gegl-0.4.Gegl.Color

    /**
     * Creates a copy of `color`.
     */
    duplicate(): Color
    /**
     * Get the component values of the color in `format`.
     * @param format A Babl pointer
     */
    getComponents(format: any): number[]
    getFormat(): Babl.Object
    /**
     * Retrieves the current set color as linear light non premultipled RGBA data,
     * any of the return pointers can be omitted.
     */
    getRgba(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
    /**
     * Set the color using the component values as `format`.
     * @param format A Babl pointer
     * @param components The color components.
     */
    setComponents(format: any, components: number[]): void
    /**
     * Set color as linear light non premultipled RGBA data
     * @param red red value
     * @param green green value
     * @param blue blue value
     * @param alpha alpha value
     */
    setRgba(red: number, green: number, blue: number, alpha: number): void

    // Class property signals of Gegl-0.4.Gegl.Color

    connect(sigName: "notify::string", callback: (...args: any[]) => void): number
    on(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Color extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Color

    static name: string
    static $gtype: GObject.GType<Color>

    // Constructors of Gegl-0.4.Gegl.Color

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

    // Own constructor properties of Gegl-0.4.Gegl.Config

    applicationLicense?: string | null
    chunkSize?: number | null
    mipmapRendering?: boolean | null
    quality?: number | null
    queueSize?: number | null
    swap?: string | null
    swapCompression?: string | null
    threads?: number | null
    tileCacheSize?: number | null
    tileHeight?: number | null
    tileWidth?: number | null
    useOpencl?: boolean | null
}

interface Config {

    // Own properties of Gegl-0.4.Gegl.Config

    applicationLicense: string
    chunkSize: number
    mipmapRendering: boolean
    quality: number
    queueSize: number
    swap: string
    swapCompression: string
    threads: number
    tileCacheSize: number
    tileHeight: number
    tileWidth: number
    useOpencl: boolean

    // Class property signals of Gegl-0.4.Gegl.Config

    connect(sigName: "notify::application-license", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-license", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunk-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunk-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): number
    on(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mipmap-rendering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mipmap-rendering", ...args: any[]): void
    connect(sigName: "notify::quality", callback: (...args: any[]) => void): number
    on(sigName: "notify::quality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::quality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::quality", ...args: any[]): void
    connect(sigName: "notify::queue-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::queue-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::queue-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::queue-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::queue-size", ...args: any[]): void
    connect(sigName: "notify::swap", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap", ...args: any[]): void
    connect(sigName: "notify::swap-compression", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-compression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-compression", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-compression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-compression", ...args: any[]): void
    connect(sigName: "notify::threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::threads", ...args: any[]): void
    connect(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-size", ...args: any[]): void
    connect(sigName: "notify::tile-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-height", ...args: any[]): void
    connect(sigName: "notify::tile-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-width", ...args: any[]): void
    connect(sigName: "notify::use-opencl", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-opencl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Config extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Gegl-0.4.Gegl.Config

    constructor(config?: Config_ConstructProps) 
    _init(config?: Config_ConstructProps): void
}

interface Curve_ConstructProps extends GObject.Object_ConstructProps {
}

interface Curve {

    // Own fields of Gegl-0.4.Gegl.Curve

    parentInstance: GObject.Object

    // Owm methods of Gegl-0.4.Gegl.Curve

    /**
     * Add a point to the curve at `x` `y` (replacing the value exactly for `x` if it
     * already exists.
     * @param x x coordinate
     * @param y y coordinate
     */
    addPoint(x: number, y: number): number
    /**
     * Retrieve the number of points in the curve.
     * 
     * Returns the number of points for the coordinates in the curve.
     * @param x 
     */
    calcValue(x: number): number
    /**
     * Create a copy of `curve`.
     */
    duplicate(): Curve
    /**
     * Retrive the coordinates for an index.
     * @param index the position of the value number to retrieve.
     */
    getPoint(index: number): [ /* x */ number, /* y */ number ]
    /**
     * Get the bounds on the values of the curve and store the values in
     * the return locaitons provided in `min_y` and `max_y`.
     */
    getYBounds(): [ /* minY */ number, /* maxY */ number ]
    /**
     * Retrieve the number of points in the curve.
     * 
     * Returns the number of points for the coordinates in the curve.
     */
    numPoints(): number
    /**
     * Replace an existing point in a curve.
     * @param index the position of the value number to retrieve.
     * @param x x coordinate
     * @param y y coordinate
     */
    setPoint(index: number, x: number, y: number): void

    // Class property signals of Gegl-0.4.Gegl.Curve

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Curve extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Curve

    static name: string
    static $gtype: GObject.GType<Curve>

    // Constructors of Gegl-0.4.Gegl.Curve

    constructor(config?: Curve_ConstructProps) 
    /**
     * Create a #GeglCurve that can store a curve with values between `y_min` and
     * `y_max`.
     * 
     * Returns the newly created #GeglCurve.
     * @constructor 
     * @param yMin minimum y value for curve.
     * @param yMax maximum y value for curve.
     */
    constructor(yMin: number, yMax: number) 
    /**
     * Create a #GeglCurve that can store a curve with values between `y_min` and
     * `y_max`.
     * 
     * Returns the newly created #GeglCurve.
     * @constructor 
     * @param yMin minimum y value for curve.
     * @param yMax maximum y value for curve.
     */
    static new(yMin: number, yMax: number): Curve
    /**
     * Create a default #GeglCurve with an identify mapping of
     * (0.0..1.0) -> (0.0..1.0).
     * 
     * Returns the newly created default #GeglCurve.
     * @constructor 
     */
    static newDefault(): Curve
    _init(config?: Curve_ConstructProps): void
}

interface MetadataHash_ConstructProps extends Metadata_ConstructProps, MetadataStore_ConstructProps {
}

interface MetadataHash extends Metadata {

    // Conflicting methods

    notify(...args: any[]): any

    // Class property signals of Gegl-0.4.Gegl.MetadataHash

    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::comment", callback: (...args: any[]) => void): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (...args: any[]) => void): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disclaimer", callback: (...args: any[]) => void): number
    on(sigName: "notify::disclaimer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disclaimer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disclaimer", ...args: any[]): void
    connect(sigName: "notify::file-module-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-module-name", ...args: any[]): void
    connect(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution-unit", ...args: any[]): void
    connect(sigName: "notify::resolution-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution-x", ...args: any[]): void
    connect(sigName: "notify::resolution-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution-y", ...args: any[]): void
    connect(sigName: "notify::software", callback: (...args: any[]) => void): number
    on(sigName: "notify::software", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::software", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::software", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warning", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MetadataHash extends MetadataStore {

    // Own properties of Gegl-0.4.Gegl.MetadataHash

    static name: string
    static $gtype: GObject.GType<MetadataHash>

    // Constructors of Gegl-0.4.Gegl.MetadataHash

    constructor(config?: MetadataHash_ConstructProps) 
    /**
     * Create a new #GeglMetadataHash
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GeglMetadataHash
     * @constructor 
     */
    static new(): MetadataHash
    _init(config?: MetadataHash_ConstructProps): void
}

interface MetadataStore_ConstructProps extends Metadata_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.MetadataStore

    /**
     * Name of image creator.
     */
    artist?: string | null
    /**
     * Miscellaneous comment; conversion from GIF comment.
     */
    comment?: string | null
    /**
     * Copyright notice.
     */
    copyright?: string | null
    /**
     * Description of image (possibly long).
     */
    description?: string | null
    /**
     * Legal disclaimer.
     */
    disclaimer?: string | null
    /**
     * A #GeglResolutionUnit specifying units for the image resolution (density).
     */
    resolutionUnit?: ResolutionUnit | null
    /**
     * X resolution or density in dots per unit.
     */
    resolutionX?: number | null
    /**
     * Y resolution or density in dots per unit.
     */
    resolutionY?: number | null
    /**
     * Software used to create the image.
     */
    software?: string | null
    /**
     * Device used to create the image.
     */
    source?: string | null
    /**
     * Time of original image creation.
     */
    timestamp?: GLib.DateTime | null
    /**
     * Short (one line) title or caption for image.
     */
    title?: string | null
    /**
     * Warning of nature of content.
     */
    warning?: string | null
}

/**
 * Signal callback interface for `changed`
 */
interface MetadataStore_ChangedSignalCallback {
    (pspec: GObject.ParamSpec): void
}

/**
 * Signal callback interface for `generate-value`
 */
interface MetadataStore_GenerateValueSignalCallback {
    (pspec: GObject.ParamSpec, value: any): boolean
}

/**
 * Signal callback interface for `mapped`
 */
interface MetadataStore_MappedSignalCallback {
    (fileModule: string, excludeUnmapped: boolean): void
}

/**
 * Signal callback interface for `parse-value`
 */
interface MetadataStore_ParseValueSignalCallback {
    (pspec: GObject.ParamSpec, value: any): boolean
}

/**
 * Signal callback interface for `unmapped`
 */
interface MetadataStore_UnmappedSignalCallback {
    (fileModule: string, localName: string): void
}

interface MetadataStore extends Metadata {

    // Own properties of Gegl-0.4.Gegl.MetadataStore

    /**
     * Name of image creator.
     */
    artist: string
    /**
     * Miscellaneous comment; conversion from GIF comment.
     */
    comment: string
    /**
     * Copyright notice.
     */
    copyright: string
    /**
     * Description of image (possibly long).
     */
    description: string
    /**
     * Legal disclaimer.
     */
    disclaimer: string
    /**
     * Current file loader/saver module name. Valid only while a #GeglMetadata
     * mapping is registered. This property is mainly provided for use in signal
     * handlers.
     */
    readonly fileModuleName: string
    /**
     * A #GeglResolutionUnit specifying units for the image resolution (density).
     */
    resolutionUnit: ResolutionUnit
    /**
     * X resolution or density in dots per unit.
     */
    resolutionX: number
    /**
     * Y resolution or density in dots per unit.
     */
    resolutionY: number
    /**
     * Software used to create the image.
     */
    software: string
    /**
     * Device used to create the image.
     */
    source: string
    /**
     * Time of original image creation.
     */
    timestamp: GLib.DateTime
    /**
     * Short (one line) title or caption for image.
     */
    title: string
    /**
     * Warning of nature of content.
     */
    warning: string

    // Own fields of Gegl-0.4.Gegl.MetadataStore

    parentInstance: GObject.Object

    // Owm methods of Gegl-0.4.Gegl.MetadataStore

    /**
     * Declare a metadata value using a #GParamSpec.
     * @param pspec A #GParamSpec
     */
    declare(pspec: GObject.ParamSpec): void
    /**
     * Get name of image creator.
     */
    getArtist(): string
    /**
     * Get the comment.
     */
    getComment(): string
    /**
     * Get the copyright notice.
     */
    getCopyright(): string
    /**
     * Get description of image.
     */
    getDescription(): string
    /**
     * Get the legal disclaimer.
     */
    getDisclaimer(): string
    /**
     * Return the name registered by the current file module.
     */
    getFileModuleName(): string
    /**
     * Get the units used for resolution.
     */
    getResolutionUnit(): ResolutionUnit
    /**
     * Get the X resolution or density in dots per unit.
     */
    getResolutionX(): number
    /**
     * Get the Y resolution or density in dots per unit.
     */
    getResolutionY(): number
    /**
     * Get software used to create the image.
     */
    getSoftware(): string
    /**
     * Get device used to create the image.
     */
    getSource(): string
    /**
     * A slightly more efficient version of gegl_metadata_store_get_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_get_value().
     * @param name Metadata name
     */
    getString(name: string): string
    /**
     * Get time of original image creation.
     */
    getTimestamp(): GLib.DateTime
    /**
     * Get title or caption for image.
     */
    getTitle(): string
    /**
     * Retrieve the metadata value. `value` must be initialised with a compatible
     * type. If the value is unset or has not been previously declared `value` is
     * unchanged and an error message is logged.
     * @param name Metadata name
     * @param value An initialised #GValue.
     */
    getValue(name: string, value: any): /* value */ any
    /**
     * Get warning.
     */
    getWarning(): string
    /**
     * Test whether the #GeglMetadataStore contains a value for the specified name.
     * @param name Metadata name
     */
    hasValue(name: string): boolean
    /**
     * gegl_metadata_store_notify() is called by subclasses when the value of a
     * metadata variable changes. It emits the `::changed` signal with the variable
     * name as the detail parameter.  Set `shadow` = %TRUE if variable is shadowed
     * by a property so that a notify signal is emitted with the property name as
     * the detail parameter.
     * @param pspec The #GParamSpec used to declare the variable.
     * @param shadow The metadata variable shadows a property.
     */
    notify(pspec: GObject.ParamSpec, shadow?: boolean): void

    // Overloads of notify

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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    notify(...args: any[]): any
    notify(args_or_propertyName: any[] | string): void | any
    register(localName: string, name: string, transform: GObject.ValueTransform): void
    /**
     * Set name of image creator.
     * @param artist Artist string
     */
    setArtist(artist: string): void
    /**
     * Set the miscellaneous comment; conversion from GIF comment.
     * @param comment Comment string
     */
    setComment(comment: string): void
    /**
     * Set the copyright notice.
     * @param copyright Copyright string
     */
    setCopyright(copyright: string): void
    /**
     * Set description of image.
     * @param description Description string
     */
    setDescription(description: string): void
    /**
     * Set the legal disclaimer.
     * @param disclaimer Disclaimer string
     */
    setDisclaimer(disclaimer: string): void
    /**
     * Set the units used for the resolution (density) values.
     * @param unit Units as a #GeglResolutionUnit
     */
    setResolutionUnit(unit: ResolutionUnit): void
    /**
     * Set the X resolution or density in dots per unit.
     * @param resolutionX X resolution or density
     */
    setResolutionX(resolutionX: number): void
    /**
     * Set the Y resolution or density in dots per unit.
     * @param resolutionY Y resolution or density
     */
    setResolutionY(resolutionY: number): void
    /**
     * Set software used to create the image.
     * @param software Software string
     */
    setSoftware(software: string): void
    /**
     * Set device used to create the image.
     * @param source Source string
     */
    setSource(source: string): void
    /**
     * A slightly more efficient version of gegl_metadata_store_set_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_set_value().
     * @param name Metadata name
     * @param string String value to set
     */
    setString(name: string, string: string): void
    /**
     * Set time of original image creation.
     * @param timestamp A #GDateTime
     */
    setTimestamp(timestamp: GLib.DateTime): void
    /**
     * Set title or caption for image.
     * @param title Title string
     */
    setTitle(title: string): void
    /**
     * Set the specified metadata value. If `value` is %NULL the default value from
     * the associated #GParamSpec is used. This operation will fail if the value
     * has not been previously declared.  A `changed::name` signal is emitted when
     * the value is set. If the value is shadowed by a property a `notify::name`
     * signal is also emitted.
     * @param name Metadata name
     * @param value (nullable): A valid #GValue or %NULL
     */
    setValue(name: string, value: any): void
    /**
     * Set the warning of nature of content.
     * @param warning Warning string
     */
    setWarning(warning: string): void
    /**
     * Get the declared type of the value in the #GeglMetadataStore.
     * @param name Metadata name
     */
    typeofValue(name: string): GObject.GType

    // Own signals of Gegl-0.4.Gegl.MetadataStore

    connect(sigName: "changed", callback: MetadataStore_ChangedSignalCallback): number
    on(sigName: "changed", callback: MetadataStore_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: MetadataStore_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: MetadataStore_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "generate-value", callback: MetadataStore_GenerateValueSignalCallback): number
    on(sigName: "generate-value", callback: MetadataStore_GenerateValueSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate-value", callback: MetadataStore_GenerateValueSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate-value", callback: MetadataStore_GenerateValueSignalCallback): NodeJS.EventEmitter
    emit(sigName: "generate-value", value: any, ...args: any[]): void
    connect(sigName: "mapped", callback: MetadataStore_MappedSignalCallback): number
    on(sigName: "mapped", callback: MetadataStore_MappedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mapped", callback: MetadataStore_MappedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mapped", callback: MetadataStore_MappedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mapped", excludeUnmapped: boolean, ...args: any[]): void
    connect(sigName: "parse-value", callback: MetadataStore_ParseValueSignalCallback): number
    on(sigName: "parse-value", callback: MetadataStore_ParseValueSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-value", callback: MetadataStore_ParseValueSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-value", callback: MetadataStore_ParseValueSignalCallback): NodeJS.EventEmitter
    emit(sigName: "parse-value", value: any, ...args: any[]): void
    connect(sigName: "unmapped", callback: MetadataStore_UnmappedSignalCallback): number
    on(sigName: "unmapped", callback: MetadataStore_UnmappedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmapped", callback: MetadataStore_UnmappedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmapped", callback: MetadataStore_UnmappedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unmapped", localName: string, ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.MetadataStore

    connect(sigName: "notify::artist", callback: (...args: any[]) => void): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::comment", callback: (...args: any[]) => void): number
    on(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::comment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::comment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (...args: any[]) => void): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disclaimer", callback: (...args: any[]) => void): number
    on(sigName: "notify::disclaimer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disclaimer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disclaimer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disclaimer", ...args: any[]): void
    connect(sigName: "notify::file-module-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::file-module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file-module-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file-module-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file-module-name", ...args: any[]): void
    connect(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution-unit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution-unit", ...args: any[]): void
    connect(sigName: "notify::resolution-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution-x", ...args: any[]): void
    connect(sigName: "notify::resolution-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution-y", ...args: any[]): void
    connect(sigName: "notify::software", callback: (...args: any[]) => void): number
    on(sigName: "notify::software", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::software", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::software", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::software", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warning", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MetadataStore extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.MetadataStore

    static name: string
    static $gtype: GObject.GType<MetadataStore>

    // Constructors of Gegl-0.4.Gegl.MetadataStore

    constructor(config?: MetadataStore_ConstructProps) 
    _init(config?: MetadataStore_ConstructProps): void
}

interface Node_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.Node

    cachePolicy?: CachePolicy | null
    dontCache?: boolean | null
    geglOperation?: Operation | null
    name?: string | null
    operation?: string | null
    passthrough?: boolean | null
    useOpencl?: boolean | null
}

/**
 * Signal callback interface for `computed`
 */
interface Node_ComputedSignalCallback {
    (object: Rectangle): void
}

/**
 * Signal callback interface for `invalidated`
 */
interface Node_InvalidatedSignalCallback {
    (object: Rectangle): void
}

/**
 * Signal callback interface for `progress`
 */
interface Node_ProgressSignalCallback {
    (object: number): void
}

interface Node {

    // Own properties of Gegl-0.4.Gegl.Node

    cachePolicy: CachePolicy
    dontCache: boolean
    geglOperation: Operation
    name: string
    operation: string
    passthrough: boolean
    useOpencl: boolean

    // Owm methods of Gegl-0.4.Gegl.Node

    /**
     * Make the GeglNode `graph,` take a reference on child. This reference
     * will be dropped when the reference count on the graph reaches zero.
     * @param child a GeglNode.
     */
    addChild(child: Node): Node
    /**
     * Render a rectangular region from a node to the given buffer.
     * @param buffer the #GeglBuffer to render to.
     * @param roi the rectangle to render.
     * @param level mipmap level to render (0 for all)
     * @param abyssPolicy 
     */
    blitBuffer(buffer: Buffer | null, roi: Rectangle | null, level: number, abyssPolicy: AbyssPolicy): void
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param inputPadName the name of the input pad we are connecting to
     * @param source the node producing data we want to connect.
     * @param outputPadName the output pad we want to use on the source.
     */
    connectFrom(inputPadName: string, source: Node, outputPadName: string): boolean
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param outputPadName the output pad we want to use on the source.
     * @param sink the node we're connecting an input to
     * @param inputPadName the name of the input pad we are connecting to
     */
    connectTo(outputPadName: string, sink: Node, inputPadName: string): boolean
    /**
     * Creates a new processing node that performs the specified operation.
     * All properties of the operation will have their default values. This
     * is included as an addition to #gegl_node_new_child in the public API to have
     * a non varargs entry point for bindings as well as sometimes simpler more
     * readable code.
     * @param operation the type of node to create.
     */
    createChild(operation: string): Node
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
     * @param inputPad the input pad to disconnect.
     */
    disconnect(inputPad: string): boolean
    findProperty(propertyName: string): GObject.ParamSpec
    getChildren(): Node[]
    /**
     * Retrieve which pads on which nodes are connected to a named output_pad,
     * and the number of connections. Both the location for the generated
     * nodes array and pads array can be left as NULL. If they are non NULL
     * both should be freed with g_free. The arrays are NULL terminated.
     * 
     * Returns the number of consumers connected to this output_pad.
     * @param outputPad the output pad we want to know who uses.
     */
    getConsumers(outputPad: string): [ /* returnType */ number, /* nodes */ Node[], /* pads */ string[] ]
    getGeglOperation(): Operation | null
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param padName the name of the pad.
     */
    getInputProxy(padName: string): Node
    getOperation(): string
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param padName the name of the pad.
     */
    getOutputProxy(padName: string): Node
    /**
     * Returns a GeglNode that keeps a reference on a child.
     */
    getParent(): Node
    getPassthrough(): boolean
    getProducer(inputPadName: string, outputPadName: string | null): Node
    /**
     * Returns TRUE if the node has a pad with the specified name
     * @param padName the pad name we are looking for
     */
    hasPad(padName: string): boolean
    /**
     * Returns the position and dimensions of a rectangle spanning the area
     * defined by a node.
     */
    getBoundingBox(): Rectangle
    getProperty(propertyName: string): any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName?: string, value?: any): void
    getProperty(...args: any[]): any
    getProperty(args_or_propertyName: any[] | string, value?: any): any | void
    isGraph(): boolean
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
    listInputPads(): string[]
    /**
     * If the node has any output pads this function returns a null terminated
     * array of pad names, otherwise it returns NULL. The return value can be
     * freed with g_strfreev().
     */
    listOutputPads(): string[]
    newProcessor(rectangle: Rectangle): Processor
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
    removeChild(child: Node): Node
    setPassthrough(passthrough: boolean): void
    /**
     * This is mainly included for language bindings. Using #gegl_node_set is
     * more convenient when programming in C.
     * @param propertyName the name of the property to set
     * @param value a GValue containing the value to be set in the property.
     */
    setProperty(propertyName: string, value?: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value?: any): void
    setProperty(...args: any[]): any
    setProperty(args_or_propertyName: any[] | string, value?: any): void | any
    /**
     * Sets the right value in animated properties of this node and all its
     * dependendcies to be the specified time position.
     * @param time the time to set the properties which have keyfraes attached to
     */
    setTime(time: number): void
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of the composition produced by a node (and thus also
     * the nodes contributing data to the specified node). To export a
     * gegl graph, connect the internal output node to an output proxy (see
     * #gegl_node_get_output_proxy.) and use the proxy node as the basis
     * for the serialization.
     * @param pathRoot filesystem path to construct relative paths from.
     */
    toXml(pathRoot: string): string
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of a segment of a graph from `head` to `tail` nodes.
     * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
     * @param tail a #GeglNode
     * @param pathRoot filesystem path to construct relative paths from.
     */
    toXmlFull(tail: Node | null, pathRoot: string): string

    // Own signals of Gegl-0.4.Gegl.Node

    connect(sigName: "computed", callback: Node_ComputedSignalCallback): number
    on(sigName: "computed", callback: Node_ComputedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "computed", callback: Node_ComputedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "computed", callback: Node_ComputedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "computed", ...args: any[]): void
    connect(sigName: "invalidated", callback: Node_InvalidatedSignalCallback): number
    on(sigName: "invalidated", callback: Node_InvalidatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidated", callback: Node_InvalidatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidated", callback: Node_InvalidatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "invalidated", ...args: any[]): void
    connect(sigName: "progress", callback: Node_ProgressSignalCallback): number
    on(sigName: "progress", callback: Node_ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: Node_ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: Node_ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.Node

    connect(sigName: "notify::cache-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-policy", ...args: any[]): void
    connect(sigName: "notify::dont-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::dont-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dont-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dont-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dont-cache", ...args: any[]): void
    connect(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::gegl-operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gegl-operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gegl-operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gegl-operation", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::operation", callback: (...args: any[]) => void): number
    on(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::operation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::operation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::operation", ...args: any[]): void
    connect(sigName: "notify::passthrough", callback: (...args: any[]) => void): number
    on(sigName: "notify::passthrough", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::passthrough", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::passthrough", ...args: any[]): void
    connect(sigName: "notify::use-opencl", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-opencl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-opencl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-opencl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-opencl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Node extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of Gegl-0.4.Gegl.Node

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
    static newFromFile(path: string): Node
    static newFromSerialized(chaindata: string, pathRoot: string): Node
    /**
     * The #GeglNode returned contains the graph described by the tree of stacks
     * in the XML document. The tree is connected to the "output" pad of the
     * returned node and thus can be used directly for processing.
     * @constructor 
     * @param xmldata a \0 terminated string containing XML data to be parsed.
     * @param pathRoot a file system path that relative paths in the XML will be resolved in relation to.
     */
    static newFromXml(xmldata: string, pathRoot: string): Node
    _init(config?: Node_ConstructProps): void
}

interface Operation_ConstructProps extends GObject.Object_ConstructProps {
}

interface Operation {

    // Class property signals of Gegl-0.4.Gegl.Operation

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Operation extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Operation

    static name: string
    static $gtype: GObject.GType<Operation>

    // Constructors of Gegl-0.4.Gegl.Operation

    constructor(config?: Operation_ConstructProps) 
    _init(config?: Operation_ConstructProps): void
    static findProperty(operationType: string, propertyName: string): GObject.ParamSpec
    static getKey(operationType: string, keyName: string): string
    static getOpVersion(opName: string): string
    static getPropertyKey(operationType: string, propertyName: string, propertyKeyName: string): string
    static listKeys(operationType: string): string[]
    static listProperties(operationType: string): GObject.ParamSpec[]
    static listPropertyKeys(operationType: string, propertyName: string): string[]
}

interface ParamAudioFragment {
}

class ParamAudioFragment extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamAudioFragment

    static name: string
}

interface ParamColor {
}

class ParamColor extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamColor

    static name: string
}

interface ParamCurve {
}

class ParamCurve extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamCurve

    static name: string
}

interface ParamDouble {
}

class ParamDouble extends GObject.ParamSpecDouble {

    // Own properties of Gegl-0.4.Gegl.ParamDouble

    static name: string
}

interface ParamEnum {
}

class ParamEnum extends GObject.ParamSpecEnum {

    // Own properties of Gegl-0.4.Gegl.ParamEnum

    static name: string
}

interface ParamFilePath {
}

class ParamFilePath extends GObject.ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamFilePath

    static name: string
}

interface ParamFormat {
}

class ParamFormat extends GObject.ParamSpecPointer {

    // Own properties of Gegl-0.4.Gegl.ParamFormat

    static name: string
}

interface ParamInt {
}

class ParamInt extends GObject.ParamSpecInt {

    // Own properties of Gegl-0.4.Gegl.ParamInt

    static name: string
}

interface ParamPath {
}

class ParamPath extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamPath

    static name: string
}

interface ParamSeed {
}

class ParamSeed extends GObject.ParamSpecUInt {

    // Own properties of Gegl-0.4.Gegl.ParamSeed

    static name: string
}

interface ParamString {
}

class ParamString extends GObject.ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamString

    static name: string
}

interface ParamUri {
}

class ParamUri extends GObject.ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamUri

    static name: string
}

interface Path_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Path_ChangedSignalCallback {
    (object: object | null): void
}

interface Path {

    // Own fields of Gegl-0.4.Gegl.Path

    parentInstance: GObject.Object

    // Owm methods of Gegl-0.4.Gegl.Path

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
    calcYForX(x: number): [ /* returnType */ number, /* y */ number ]
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
    closestPoint(x: number, y: number): [ /* returnType */ number, /* onPathX */ number, /* onPathY */ number, /* nodePosBefore */ number ]
    /**
     * Marks the path as dirty and issues an invalidation for the path rendering,
     * use this if modifying the values of a GeglPathPoint inline.
     */
    dirty(): void
    /**
     * Execute a provided function for every node in the path (useful for
     * drawing and otherwise traversing a path.)
     * @param eachItem a function to call for each node in the path.
     */
    foreach(eachItem: NodeFunction): void
    /**
     * Execute a provided function for the segments of a poly line approximating
     * the path.
     * @param eachItem a function to call for each node in the path.
     */
    foreachFlat(eachItem: NodeFunction): void
    /**
     * Make the `GeglPath` stop firing signals as it changes must be paired with a
     * gegl_path_thaw() for the signals to start again.
     */
    freeze(): void
    /**
     * Compute the bounding box of a path.
     */
    getBounds(): [ /* minX */ number, /* maxX */ number, /* minY */ number, /* maxY */ number ]
    /**
     * Returns the total length of the path.
     */
    getLength(): number
    /**
     * Get the transformation matrix of the path.
     */
    getMatrix(): /* matrix */ Matrix3
    /**
     * Retrieves the number of nodes in the path.
     */
    getNNodes(): number
    /**
     * Retrieve the node of the path at position `pos`.
     * 
     * Returns TRUE if the node was successfully retrieved.
     * @param index the node number to retrieve
     */
    getNode(index: number): [ /* returnType */ boolean, /* node */ PathItem ]
    /**
     * Insert the new node `node` at position `pos` in `path`.
     * if `pos` = -1, the node is added in the last position.
     * @param pos the position we want the new node to have.
     * @param node pointer to a structure describing the GeglPathItem we want to store
     */
    insertNode(pos: number, node: PathItem): void
    /**
     * Check if the path contains any nodes.
     * 
     * Returns TRUE if the path has no nodes.
     */
    isEmpty(): boolean
    /**
     * Parses `instructions` and appends corresponding nodes to path (call
     * gegl_path_clean() first if you want to replace the existing path.
     * @param instructions a string describing a path.
     */
    parseString(instructions: string): void
    /**
     * Removes the node number `pos` in `path`.
     * @param pos a node in the path.
     */
    removeNode(pos: number): void
    /**
     * Replaces the exiting node at position `pos` in `path`.
     * @param pos the position we want the new node to have.
     * @param node pointer to a structure describing the GeglPathItem we want to store.
     */
    replaceNode(pos: number, node: PathItem): void
    /**
     * Set the transformation matrix of the path.
     * 
     * The path is transformed through this matrix when being evaluated,
     * causing the calculated positions and length to be changed by the transform.
     * @param matrix a #GeglMatrix3 to copy the matrix from
     */
    setMatrix(matrix: Matrix3): void
    /**
     * Restart firing signals (unless the path has been frozen multiple times).
     */
    thaw(): void
    /**
     * Serialize the paths nodes to a string.
     */
    toString(): string

    // Own signals of Gegl-0.4.Gegl.Path

    connect(sigName: "changed", callback: Path_ChangedSignalCallback): number
    on(sigName: "changed", callback: Path_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Path_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Path_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.Path

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Path extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Path

    static name: string
    static $gtype: GObject.GType<Path>

    // Constructors of Gegl-0.4.Gegl.Path

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
    static newFromString(instructions: string): Path
    _init(config?: Path_ConstructProps): void
    /**
     * Adds a new type to the path system, FIXME this should probably
     * return something on registration conflicts, for now it expects
     * all registered paths to be aware of each other.
     * @param type a gchar to recognize in path descriptions.
     * @param items the number of floating point data items the instruction takes
     * @param description a human readable description of this entry
     */
    static addType(type: number, items: number, description: string): void
}

interface Processor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.Processor

    chunksize?: number | null
    node?: Node | null
    progress?: number | null
    rectangle?: object | null
}

interface Processor {

    // Own properties of Gegl-0.4.Gegl.Processor

    readonly chunksize: number
    node: Node
    progress: number
    rectangle: object

    // Owm methods of Gegl-0.4.Gegl.Processor

    /**
     * Returns the (cache) buffer the processor is rendering into, another way of
     * getting to the same pixel data is calling gegl_node_blit with flags
     * indicating that we want caching and accept dirty data.
     */
    getBuffer(): Buffer
    setLevel(level: number): void
    /**
     * Change the rectangle a #GeglProcessor is working on.
     * @param rectangle the new #GeglRectangle the processor shold work on or NULL to make it work on all data in the buffer.
     */
    setRectangle(rectangle: Rectangle): void
    setScale(scale: number): void
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

    // Class property signals of Gegl-0.4.Gegl.Processor

    connect(sigName: "notify::chunksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::chunksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chunksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chunksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chunksize", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: (...args: any[]) => void): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Processor extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Processor

    static name: string
    static $gtype: GObject.GType<Processor>

    // Constructors of Gegl-0.4.Gegl.Processor

    constructor(config?: Processor_ConstructProps) 
    _init(config?: Processor_ConstructProps): void
}

interface Stats_ConstructProps extends GObject.Object_ConstructProps {
}

interface Stats {

    // Own properties of Gegl-0.4.Gegl.Stats

    readonly activeThreads: number
    readonly assignedThreads: number
    readonly scratchTotal: number
    readonly swapBusy: boolean
    readonly swapFileSize: number
    readonly swapQueueFull: boolean
    readonly swapQueueStalls: number
    readonly swapQueuedTotal: number
    readonly swapReadTotal: number
    readonly swapReading: boolean
    readonly swapTotal: number
    readonly swapTotalUncompressed: number
    readonly swapWriteTotal: number
    readonly swapWriting: boolean
    readonly tileAllocTotal: number
    readonly tileCacheHits: number
    readonly tileCacheMisses: number
    readonly tileCacheTotal: number
    readonly tileCacheTotalMax: number
    readonly tileCacheTotalUncompressed: number
    readonly zoomTotal: number

    // Class property signals of Gegl-0.4.Gegl.Stats

    connect(sigName: "notify::active-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-threads", ...args: any[]): void
    connect(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::assigned-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::assigned-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::assigned-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::assigned-threads", ...args: any[]): void
    connect(sigName: "notify::scratch-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::scratch-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scratch-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scratch-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scratch-total", ...args: any[]): void
    connect(sigName: "notify::swap-busy", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-busy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-busy", ...args: any[]): void
    connect(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-file-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-file-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-file-size", ...args: any[]): void
    connect(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-queue-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-queue-full", ...args: any[]): void
    connect(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-queue-stalls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-queue-stalls", ...args: any[]): void
    connect(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-queued-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-queued-total", ...args: any[]): void
    connect(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-read-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-read-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-read-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-read-total", ...args: any[]): void
    connect(sigName: "notify::swap-reading", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-reading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-reading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-reading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-reading", ...args: any[]): void
    connect(sigName: "notify::swap-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-total", ...args: any[]): void
    connect(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-total-uncompressed", ...args: any[]): void
    connect(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-write-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-write-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-write-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-write-total", ...args: any[]): void
    connect(sigName: "notify::swap-writing", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-writing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-writing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-writing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-writing", ...args: any[]): void
    connect(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-alloc-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-alloc-total", ...args: any[]): void
    connect(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-hits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-hits", ...args: any[]): void
    connect(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-misses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-misses", ...args: any[]): void
    connect(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-total", ...args: any[]): void
    connect(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-total-max", ...args: any[]): void
    connect(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-uncompressed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-total-uncompressed", ...args: any[]): void
    connect(sigName: "notify::zoom-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Stats extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Stats

    static name: string
    static $gtype: GObject.GType<Stats>

    // Constructors of Gegl-0.4.Gegl.Stats

    constructor(config?: Stats_ConstructProps) 
    _init(config?: Stats_ConstructProps): void
}

interface TileBackend_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.TileBackend

    flushOnDestroy?: boolean | null
    format?: object | null
    tileHeight?: number | null
    tileWidth?: number | null
}

interface TileBackend {

    // Own properties of Gegl-0.4.Gegl.TileBackend

    flushOnDestroy: boolean
    readonly format: object
    readonly pxSize: number
    readonly tileHeight: number
    readonly tileSize: number
    readonly tileWidth: number

    // Own fields of Gegl-0.4.Gegl.TileBackend

    parentInstance: TileSource
    priv: TileBackendPrivate

    // Owm methods of Gegl-0.4.Gegl.TileBackend

    /**
     * The default tile-backend command handler.  Tile backends should forward
     * commands they don't handle themselves to this function.
     * @param command the tile command
     * @param x x coordinate
     * @param y y coordinate
     * @param z tile zoom level
     * @param data user data
     */
    command(command: TileCommand, x: number, y: number, z: number, data: object | null): object | null
    getFlushOnDestroy(): boolean
    getTileHeight(): number
    getTileSize(): number
    getTileWidth(): number
    /**
     * Gets a pointer to the GeglTileStorage that uses the backend
     */
    peekStorage(): TileSource
    /**
     * Specify the extent of the backend, can be used to pre-prime the
     * backend with the width/height information when constructing proxy
     * GeglBuffers to interact with other systems
     * @param rectangle the new extent
     */
    setExtent(rectangle: Rectangle): void
    /**
     * Control whether cached data will be written to the backend before it
     * is destroyed. If false unwritten data will be discarded.
     * @param flushOnDestroy true if the backend needs to be flushed
     */
    setFlushOnDestroy(flushOnDestroy: boolean): void

    // Class property signals of Gegl-0.4.Gegl.TileBackend

    connect(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): number
    on(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flush-on-destroy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flush-on-destroy", ...args: any[]): void
    connect(sigName: "notify::format", callback: (...args: any[]) => void): number
    on(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::px-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::px-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::px-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::px-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::px-size", ...args: any[]): void
    connect(sigName: "notify::tile-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-height", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::tile-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TileBackend extends TileSource {

    // Own properties of Gegl-0.4.Gegl.TileBackend

    static name: string
    static $gtype: GObject.GType<TileBackend>

    // Constructors of Gegl-0.4.Gegl.TileBackend

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
    static unlinkSwap(path: string): void
}

interface TileHandler_ConstructProps extends TileSource_ConstructProps {

    // Own constructor properties of Gegl-0.4.Gegl.TileHandler

    source?: GObject.Object | null
}

interface TileHandler {

    // Own fields of Gegl-0.4.Gegl.TileHandler

    parentInstance: TileSource
    source: TileSource
    priv: TileHandlerPrivate

    // Owm methods of Gegl-0.4.Gegl.TileHandler

    damageRect(rect: Rectangle): void
    damageTile(x: number, y: number, z: number, damage: number): void
    lock(): void
    setSource(source: TileSource): void
    unlock(): void

    // Class property signals of Gegl-0.4.Gegl.TileHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TileHandler extends TileSource {

    // Own properties of Gegl-0.4.Gegl.TileHandler

    static name: string
    static $gtype: GObject.GType<TileHandler>

    // Constructors of Gegl-0.4.Gegl.TileHandler

    constructor(config?: TileHandler_ConstructProps) 
    _init(config?: TileHandler_ConstructProps): void
}

interface TileSource_ConstructProps extends GObject.Object_ConstructProps {
}

interface TileSource {

    // Own fields of Gegl-0.4.Gegl.TileSource

    parentInstance: GObject.Object
    // TODO fix conflict: command: TileSourceCommand
    padding: object[]

    // Class property signals of Gegl-0.4.Gegl.TileSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TileSource extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.TileSource

    static name: string
    static $gtype: GObject.GType<TileSource>

    // Constructors of Gegl-0.4.Gegl.TileSource

    constructor(config?: TileSource_ConstructProps) 
    _init(config?: TileSource_ConstructProps): void
}

interface AudioFragmentClass {

    // Own fields of Gegl-0.4.Gegl.AudioFragmentClass

    parentClass: GObject.ObjectClass
}

abstract class AudioFragmentClass {

    // Own properties of Gegl-0.4.Gegl.AudioFragmentClass

    static name: string
}

interface AudioFragmentPrivate {
}

class AudioFragmentPrivate {

    // Own properties of Gegl-0.4.Gegl.AudioFragmentPrivate

    static name: string
}

interface BufferIterator {

    // Own fields of Gegl-0.4.Gegl.BufferIterator

    length: number
    priv: BufferIteratorPriv
    items: BufferIteratorItem[]
}

class BufferIterator {

    // Own properties of Gegl-0.4.Gegl.BufferIterator

    static name: string
}

interface BufferIteratorItem {

    // Own fields of Gegl-0.4.Gegl.BufferIteratorItem

    data: object
    roi: Rectangle
}

class BufferIteratorItem {

    // Own properties of Gegl-0.4.Gegl.BufferIteratorItem

    static name: string
}

interface BufferIteratorPriv {
}

class BufferIteratorPriv {

    // Own properties of Gegl-0.4.Gegl.BufferIteratorPriv

    static name: string
}

interface BufferMatrix2 {

    // Own fields of Gegl-0.4.Gegl.BufferMatrix2

    coeff: number[]

    // Owm methods of Gegl-0.4.Gegl.BufferMatrix2

    determinant(): number
    isIdentity(): boolean
    isScale(): boolean
}

class BufferMatrix2 {

    // Own properties of Gegl-0.4.Gegl.BufferMatrix2

    static name: string
}

interface ColorClass {

    // Own fields of Gegl-0.4.Gegl.ColorClass

    parentClass: GObject.ObjectClass
}

abstract class ColorClass {

    // Own properties of Gegl-0.4.Gegl.ColorClass

    static name: string
}

interface ColorPrivate {
}

class ColorPrivate {

    // Own properties of Gegl-0.4.Gegl.ColorPrivate

    static name: string
}

interface CurveClass {

    // Own fields of Gegl-0.4.Gegl.CurveClass

    parentClass: GObject.ObjectClass
}

abstract class CurveClass {

    // Own properties of Gegl-0.4.Gegl.CurveClass

    static name: string
}

interface Lookup {

    // Own fields of Gegl-0.4.Gegl.Lookup

    function_: LookupFunction
    data: object
    shift: number
    positiveMin: number
    positiveMax: number
    negativeMin: number
    negativeMax: number
    bitmask: number[]
    table: number[]
}

class Lookup {

    // Own properties of Gegl-0.4.Gegl.Lookup

    static name: string
}

interface Matrix3 {

    // Own fields of Gegl-0.4.Gegl.Matrix3

    coeff: number[]

    // Owm methods of Gegl-0.4.Gegl.Matrix3

    /**
     * Returns a copy of `src`.
     */
    copy(): Matrix3
    /**
     * Copies the matrix in `src` into `dst`.
     * @param src a #GeglMatrix3
     */
    copyInto(src: Matrix3): void
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
     * Check if a matrix only does an affine transformation.
     * 
     * Returns TRUE if the matrix only does an affine transformation.
     */
    isAffine(): boolean
    /**
     * Check if a matrix is the identity matrix.
     * 
     * Returns TRUE if the matrix is the identity matrix.
     */
    isIdentity(): boolean
    /**
     * Check if a matrix only does scaling.
     * 
     * Returns TRUE if the matrix only does scaling.
     */
    isScale(): boolean
    /**
     * Check if a matrix only does translation.
     * 
     * Returns TRUE if the matrix only does trasnlation.
     */
    isTranslate(): boolean
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
    parseString(string: string): void
    /**
     * Rounds numerical errors in `matrix` to the nearest integer.
     */
    roundError(): void
    /**
     * Serialize a #GeglMatrix3 to a string.
     * 
     * Returns a freshly allocated string representing that #GeglMatrix3, the
     * returned string should be g_free()'d.
     */
    toString(): string
    /**
     * transforms the coordinates provided in `x` and `y` and changes to the
     * coordinates gotten when the transformed with the matrix.
     * @param x pointer to an x coordinate
     * @param y pointer to an y coordinate
     */
    transformPoint(x: number, y: number): void
}

class Matrix3 {

    // Own properties of Gegl-0.4.Gegl.Matrix3

    static name: string

    // Constructors of Gegl-0.4.Gegl.Matrix3

    constructor() 
    static new(): Matrix3
}

interface MetadataHashClass {

    // Own fields of Gegl-0.4.Gegl.MetadataHashClass

    parentClass: MetadataStoreClass
}

abstract class MetadataHashClass {

    // Own properties of Gegl-0.4.Gegl.MetadataHashClass

    static name: string
}

interface MetadataInterface {

    // Own fields of Gegl-0.4.Gegl.MetadataInterface

    registerMap: (metadata: Metadata, fileModule: string, flags: number, map: MetadataMap[]) => void
    setResolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    getResolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    iterLookup: (metadata: Metadata, iter: MetadataIter, key: string) => boolean
    iterInit: (metadata: Metadata, iter: MetadataIter) => void
    iterNext: (metadata: Metadata, iter: MetadataIter) => string
    iterSetValue: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    iterGetValue: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
}

/**
 * The #GeglMetadata interface structure.
 * @record 
 */
abstract class MetadataInterface {

    // Own properties of Gegl-0.4.Gegl.MetadataInterface

    static name: string
}

interface MetadataIter {
}

/**
 * An opaque type representing a metadata iterator.
 * @record 
 */
class MetadataIter {

    // Own properties of Gegl-0.4.Gegl.MetadataIter

    static name: string
}

interface MetadataMap {

    // Own fields of Gegl-0.4.Gegl.MetadataMap

    /**
     * Name of metadata variable used in the file module.
     * @field 
     */
    localName: string
    /**
     * Standard metadata variable name used by Gegl.
     * @field 
     */
    name: string
    /**
     * Optional #GValue transform function.
     * @field 
     */
    transform: GObject.ValueTransform
}

/**
 * Struct to describe how a metadata variable is mapped from the name used by
 * the image file module to the name used by Gegl.  An optional transform
 * function may be specified, e.g. to transform from a #GDatetime to a string.
 * @record 
 */
class MetadataMap {

    // Own properties of Gegl-0.4.Gegl.MetadataMap

    static name: string
}

interface MetadataStoreClass {

    // Own fields of Gegl-0.4.Gegl.MetadataStoreClass

    setValue: (self: MetadataStore, name: string, value: any) => void
    hasValue: (self: MetadataStore, name: string) => boolean
    registerHook: (self: MetadataStore, fileModuleName: string, flags: number) => void
}

/**
 * The class structure for the #GeglMetadataStore
 * @record 
 */
abstract class MetadataStoreClass {

    // Own properties of Gegl-0.4.Gegl.MetadataStoreClass

    static name: string
}

interface OperationContext {
}

class OperationContext {

    // Own properties of Gegl-0.4.Gegl.OperationContext

    static name: string
}

interface ParamSpecDouble {

    // Own fields of Gegl-0.4.Gegl.ParamSpecDouble

    parentInstance: GObject.ParamSpecDouble
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number
    uiDigits: number

    // Owm methods of Gegl-0.4.Gegl.ParamSpecDouble

    setDigits(digits: number): void
    setSteps(smallStep: number, bigStep: number): void
}

class ParamSpecDouble {

    // Own properties of Gegl-0.4.Gegl.ParamSpecDouble

    static name: string
}

interface ParamSpecEnum {

    // Own fields of Gegl-0.4.Gegl.ParamSpecEnum

    parentInstance: GObject.ParamSpecEnum
    excludedValues: object[]

    // Owm methods of Gegl-0.4.Gegl.ParamSpecEnum

    excludeValue(value: number): void
}

class ParamSpecEnum {

    // Own properties of Gegl-0.4.Gegl.ParamSpecEnum

    static name: string
}

interface ParamSpecFilePath {

    // Own fields of Gegl-0.4.Gegl.ParamSpecFilePath

    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
}

class ParamSpecFilePath {

    // Own properties of Gegl-0.4.Gegl.ParamSpecFilePath

    static name: string
}

interface ParamSpecFormat {

    // Own fields of Gegl-0.4.Gegl.ParamSpecFormat

    parentInstance: GObject.ParamSpecPointer
}

class ParamSpecFormat {

    // Own properties of Gegl-0.4.Gegl.ParamSpecFormat

    static name: string
}

interface ParamSpecInt {

    // Own fields of Gegl-0.4.Gegl.ParamSpecInt

    parentInstance: GObject.ParamSpecInt
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number

    // Owm methods of Gegl-0.4.Gegl.ParamSpecInt

    setSteps(smallStep: number, bigStep: number): void
}

class ParamSpecInt {

    // Own properties of Gegl-0.4.Gegl.ParamSpecInt

    static name: string
}

interface ParamSpecSeed {

    // Own fields of Gegl-0.4.Gegl.ParamSpecSeed

    parentInstance: GObject.ParamSpecUInt
    uiMinimum: number
    uiMaximum: number
}

class ParamSpecSeed {

    // Own properties of Gegl-0.4.Gegl.ParamSpecSeed

    static name: string
}

interface ParamSpecString {

    // Own fields of Gegl-0.4.Gegl.ParamSpecString

    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
}

class ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamSpecString

    static name: string
}

interface ParamSpecUri {

    // Own fields of Gegl-0.4.Gegl.ParamSpecUri

    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
}

class ParamSpecUri {

    // Own properties of Gegl-0.4.Gegl.ParamSpecUri

    static name: string
}

interface PathClass {
}

abstract class PathClass {

    // Own properties of Gegl-0.4.Gegl.PathClass

    static name: string
}

interface PathItem {

    // Own fields of Gegl-0.4.Gegl.PathItem

    type: number
    point: PathPoint[]
}

class PathItem {

    // Own properties of Gegl-0.4.Gegl.PathItem

    static name: string
}

interface PathList {

    // Own fields of Gegl-0.4.Gegl.PathList

    next: object
    d: PathItem
}

class PathList {

    // Own properties of Gegl-0.4.Gegl.PathList

    static name: string
}

interface PathPoint {

    // Own fields of Gegl-0.4.Gegl.PathPoint

    x: number
    y: number
}

class PathPoint {

    // Own properties of Gegl-0.4.Gegl.PathPoint

    static name: string
}

interface Random {

    // Owm methods of Gegl-0.4.Gegl.Random

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
    floatRange(x: number, y: number, z: number, n: number, min: number, max: number): number
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
    intRange(x: number, y: number, z: number, n: number, min: number, max: number): number
    /**
     * Change the seed of an existing GeglRandom.
     * @param seed an integer seed, change for different permutation.
     */
    setSeed(seed: number): void
}

class Random {

    // Own properties of Gegl-0.4.Gegl.Random

    static name: string

    // Constructors of Gegl-0.4.Gegl.Random

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
    static newWithSeed(seed: number): Random
}

interface Rectangle {

    // Own fields of Gegl-0.4.Gegl.Rectangle

    x: number
    y: number
    width: number
    height: number

    // Owm methods of Gegl-0.4.Gegl.Rectangle

    /**
     * Aligns `rectangle` to a regular tile grid, of which `tile` is a representative
     * tile, and stores the result in `destination`.
     * 
     * `alignment` can be one of:
     * 
     *   GEGL_RECTANGLE_ALIGNMENT_SUBSET:  Calculate the biggest aligned rectangle
     *   contained in `rectangle`.
     * 
     *   GEGL_RECTANGLE_ALIGNMENT_SUPERSET:  Calculate the smallest aligned
     *   rectangle containing `rectangle`.
     * 
     *   GEGL_RECTANGLE_ALIGNMENT_NEAREST:  Calculate the nearest aligned rectangle
     *   to `rectangle`.
     * 
     * `destination` may point to the same object as `rectangle` or `tile`.
     * 
     * Returns TRUE if the result is not empty.
     * @param rectangle a #GeglRectangle
     * @param tile a #GeglRectangle
     * @param alignment a #GeglRectangleAlignment value
     */
    align(rectangle: Rectangle, tile: Rectangle, alignment: RectangleAlignment): boolean
    /**
     * Aligns `rectangle` to the tile grid of `buffer,` and stores the result in
     * `destination`.
     * 
     * `alignment` has the same meaning as for gegl_rectangle_align().
     * 
     * `destination` may point to the same object as `rectangle`.
     * 
     * Returns TRUE if the result is not empty.
     * @param rectangle a #GeglRectangle
     * @param buffer a #GeglBuffer
     * @param alignment a #GeglRectangleAlignment value
     */
    alignToBuffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment): boolean
    /**
     * Computes the bounding box of the rectangles `source1` and `source2` and stores the
     * resulting bounding box in `destination`.
     * 
     * `destination` may point to the same object as `source1` or `source2`.
     * @param source1 a #GeglRectangle
     * @param source2 a #GeglRectangle
     */
    boundingBox(source1: Rectangle, source2: Rectangle): void
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
    equalCoords(x: number, y: number, width: number, height: number): boolean
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
     * Returns TRUE if the width or height of `rectangle` is 0.
     */
    isEmpty(): boolean
    /**
     * Returns TRUE if the GeglRectangle represents an infininte plane,
     * FALSE otherwise.
     */
    isInfinitePlane(): boolean
    /**
     * Sets the `x,` `y,` `width` and `height` on `rectangle`.
     * @param x upper left x coordinate
     * @param y upper left y coordinate
     * @param width width in pixels.
     * @param height height in pixels.
     */
    set(x: number, y: number, width: number, height: number): void
    /**
     * Subtracts `subtrahend` from `minuend,` and stores the resulting rectangles in
     * `destination`.  Between 0 and 4 disjoint rectangles may be produced.
     * 
     * `destination` may contain `minuend` or `subtrahend`.
     * 
     * Returns the number of resulting rectangles.
     * @param minuend a #GeglRectangle
     * @param subtrahend a #GeglRectangle
     */
    subtract(minuend: Rectangle, subtrahend: Rectangle): number
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
    subtractBoundingBox(minuend: Rectangle, subtrahend: Rectangle): boolean
    /**
     * Computes the symmetric difference of the rectangles `source1` and `source2`,
     * and stores the resulting rectangles in `destination`.  Between 0 and 4
     * disjoint rectangles may be produced.
     * 
     * `destination` may contain `rectangle1` or `rectangle2`.
     * 
     * Returns the number of resulting rectangles.
     * @param source1 a #GeglRectangle
     * @param source2 a #GeglRectangle
     */
    xor(source1: Rectangle, source2: Rectangle): number
}

class Rectangle {

    // Own properties of Gegl-0.4.Gegl.Rectangle

    static name: string

    // Constructors of Gegl-0.4.Gegl.Rectangle

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
    static infinitePlane(): Rectangle
}

interface Sampler {

    // Owm methods of Gegl-0.4.Gegl.Sampler

    /**
     * Perform a sampling with the provided `sampler`.
     * @param x x coordinate to sample
     * @param y y coordinate to sample
     * @param scale matrix representing extent of sampling area in source buffer.
     * @param output memory location for output data.
     * @param repeatMode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(x: number, y: number, scale: BufferMatrix2, output: object | null, repeatMode: AbyssPolicy): void
    getContextRect(): Rectangle
}

class Sampler {

    // Own properties of Gegl-0.4.Gegl.Sampler

    static name: string
}

interface Tile {
}

class Tile {

    // Own properties of Gegl-0.4.Gegl.Tile

    static name: string
}

interface TileBackendClass {

    // Own fields of Gegl-0.4.Gegl.TileBackendClass

    parentClass: TileSourceClass
    padding: object[]
}

abstract class TileBackendClass {

    // Own properties of Gegl-0.4.Gegl.TileBackendClass

    static name: string
}

interface TileBackendPrivate {
}

class TileBackendPrivate {

    // Own properties of Gegl-0.4.Gegl.TileBackendPrivate

    static name: string
}

interface TileCopyParams {

    // Own fields of Gegl-0.4.Gegl.TileCopyParams

    dstBuffer: Buffer
    dstX: number
    dstY: number
    dstZ: number
}

class TileCopyParams {

    // Own properties of Gegl-0.4.Gegl.TileCopyParams

    static name: string
}

interface TileHandlerClass {

    // Own fields of Gegl-0.4.Gegl.TileHandlerClass

    parentClass: TileSourceClass
}

abstract class TileHandlerClass {

    // Own properties of Gegl-0.4.Gegl.TileHandlerClass

    static name: string
}

interface TileHandlerPrivate {
}

class TileHandlerPrivate {

    // Own properties of Gegl-0.4.Gegl.TileHandlerPrivate

    static name: string
}

interface TileSourceClass {

    // Own fields of Gegl-0.4.Gegl.TileSourceClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class TileSourceClass {

    // Own properties of Gegl-0.4.Gegl.TileSourceClass

    static name: string
}

}
export default Gegl;