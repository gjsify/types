
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gegl-0.3-import.d.ts';
    
/**
 * Gegl-0.3
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
function clDisable(): void
/**
 * Initialize and enable OpenCL, calling this function again
 * will re-enable OpenCL if it has been disabled.
 * @returns True if OpenCL was initialized
 */
function clInit(): boolean
/**
 * Check if OpenCL is enabled.
 * @returns True if OpenCL is initialized and enabled
 */
function clIsAccelerated(): boolean
/**
 * Returns a GeglConfig object with properties that can be manipulated to control
 * GEGLs behavior.
 * @returns a #GeglConfig
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
function createChain(ops: string | null, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string | null): void
/**
 * Create a node chain from argv style list of op data.
 * @param ops an argv style, NULL terminated array of arguments
 * @param opStart node to pass in as input of chain
 * @param opEnd node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param relDim relative dimension to scale rel suffixed values by
 * @param pathRoot path in filesystem to use as relative root
 */
function createChainArgv(ops: string | null, opStart: Node, opEnd: Node, time: number, relDim: number, pathRoot: string | null): void
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
 * @returns the format pointer
 */
function format(formatName: string | null): any | null
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
function hasOperation(operationType: string | null): boolean
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
function loadModuleDirectory(path: string | null): void
/**
 * Creates a new #GParamSpec instance specifying a #GeglAudioFragment property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecAudioFragment(name: string | null, nick: string | null, blurb: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultColor the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecColor(name: string | null, nick: string | null, blurb: string | null, defaultColor: Color, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultColorString the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecColorFromString(name: string | null, nick: string | null, blurb: string | null, defaultColorString: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Get the default color value of the param spec
 * @param self a #GeglColor #GParamSpec
 * @returns the default #GeglColor
 */
function paramSpecColorGetDefault(self: GObject.ParamSpec): Color
/**
 * Creates a new #GParamSpec instance specifying a #GeglCurve property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultCurve the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecCurve(name: string | null, nick: string | null, blurb: string | null, defaultCurve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
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
 * @returns a newly created parameter specification
 */
function paramSpecDouble(name: string | null, nick: string | null, blurb: string | null, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecEnum instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param enumType the enum type to get valid values from
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecEnum(name: string | null, nick: string | null, blurb: string | null, enumType: GObject.GType, defaultValue: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFilePath instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param noValidate true if the string should be validated with g_utf8_validate
 * @param nullOk true if the string can be NULL
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecFilePath(name: string | null, nick: string | null, blurb: string | null, noValidate: boolean, nullOk: boolean, defaultValue: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecFormat(name: string | null, nick: string | null, blurb: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecGetPropertyKey(pspec: GObject.ParamSpec, keyName: string | null): string | null
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
 * @returns a newly created parameter specification
 */
function paramSpecInt(name: string | null, nick: string | null, blurb: string | null, minimum: number, maximum: number, defaultValue: number, uiMinimum: number, uiMaximum: number, uiGamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglPath property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param defaultPath the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecPath(name: string | null, nick: string | null, blurb: string | null, defaultPath: Path, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecSeed instance specifying an integer random seed.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecSeed(name: string | null, nick: string | null, blurb: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecSetPropertyKey(pspec: GObject.ParamSpec, keyName: string | null, value: string | null): void
/**
 * Creates a new #GeglParamSpecString instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param noValidate true if the string should be validated with g_utf8_validate
 * @param nullOk true if the string can be NULL
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecString(name: string | null, nick: string | null, blurb: string | null, noValidate: boolean, nullOk: boolean, defaultValue: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecUri instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param noValidate true if the string should be validated with g_utf8_validate
 * @param nullOk true if the string can be NULL
 * @param defaultValue default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
function paramSpecUri(name: string | null, nick: string | null, blurb: string | null, noValidate: boolean, nullOk: boolean, defaultValue: string | null, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Returns a GeglRectangle that represents an infininte plane.
 */
function rectangleInfinitePlane(): Rectangle
/**
 * Resets the cumulative data gathered by the #GeglStats object returned
 * by #gegl_stats().
 */
function resetStats(): void
function serialize(start: Node, end: Node, basepath: string | null, serializeFlags: SerializeFlag): string | null
/**
 * Returns a GeglStats object with properties that can be read to monitor
 * GEGL statistics.
 * @returns a #GeglStats
 */
function stats(): Stats
interface LookupFunction {
    (value: number, data: any | null): number
}
interface NodeFunction {
    (node: PathItem): void
}
interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: Matrix2, output: any | null, repeatMode: AbyssPolicy): void
}
interface TileCallback {
    (tile: Tile): void
}
interface TileSourceCommand {
    (geglTileSource: TileSource, command: TileCommand, x: number, y: number, z: number, data: any | null): any | null
}
module AudioFragment {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.AudioFragment

        string?: string | null
    }

}

interface AudioFragment {

    // Own properties of Gegl-0.3.Gegl.AudioFragment

    string: string | null
    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.AudioFragment

    parentInstance: GObject.Object
    data: number[]
    priv: AudioFragmentPrivate

    // Owm methods of Gegl-0.3.Gegl.AudioFragment

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

    // Class property signals of Gegl-0.3.Gegl.AudioFragment

    connect(sigName: "notify::string", callback: (...args: any[]) => void): number
    on(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AudioFragment extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.AudioFragment

    static name: string

    // Constructors of Gegl-0.3.Gegl.AudioFragment

    constructor(config?: AudioFragment.ConstructorProperties) 
    constructor(sampleRate: number, channels: number, channelLayout: number, maxSamples: number) 
    static new(sampleRate: number, channels: number, channelLayout: number, maxSamples: number): AudioFragment
    _init(config?: AudioFragment.ConstructorProperties): void
}

module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (object: Rectangle): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends TileHandler.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.Buffer

        abyssHeight?: number | null
        abyssWidth?: number | null
        abyssX?: number | null
        abyssY?: number | null
        backend?: TileBackend | null
        format?: any | null
        height?: number | null
        path?: string | null
        shiftX?: number | null
        shiftY?: number | null
        tileHeight?: number | null
        tileWidth?: number | null
        width?: number | null
        x?: number | null
        y?: number | null
    }

}

interface Buffer {

    // Own properties of Gegl-0.3.Gegl.Buffer

    readonly abyssHeight: number
    readonly abyssWidth: number
    readonly abyssX: number
    readonly abyssY: number
    readonly backend: TileBackend
    format: any
    height: number
    readonly path: string | null
    readonly pixels: number
    readonly pxSize: number
    readonly shiftX: number
    readonly shiftY: number
    readonly tileHeight: number
    readonly tileWidth: number
    width: number
    x: number
    y: number
    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gegl-0.3.Gegl.Buffer

    /**
     * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    addHandler(handler: any | null): void
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
     * @param dstRect position of upper left destination pixel, or NULL for top left coordinates of the buffer extents.
     */
    copy(srcRect: Rectangle, repeatMode: AbyssPolicy, dst: Buffer, dstRect: Rectangle): void
    /**
     * Create a new sub GeglBuffer, that is a view on a larger buffer.
     * @param extent coordinates of new buffer.
     * @returns the new sub buffer
     */
    createSubBuffer(extent: Rectangle): Buffer
    /**
     * Duplicate a buffer (internally uses gegl_buffer_copy). Aligned tiles
     * will create copy-on-write clones in the new buffer.
     * @returns the new buffer
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
     * @returns A copy of the requested data
     */
    get(rect: Rectangle, scale: number, formatName: string | null, repeatMode: AbyssPolicy): Uint8Array
    /**
     * Store a linear raster buffer into the GeglBuffer.
     * @param rect the rectangle to write.
     * @param formatName the format of the input data.
     * @param src pixel data to write to `buffer`.
     */
    set(rect: Rectangle, formatName: string | null, src: Uint8Array): void
    /**
     * This function makes sure GeglBuffer and underlying code is aware of changes
     * being made to the linear buffer. If the request was not a compatible one
     * it is written back to the buffer. Multiple concurrent users can be handed
     * the same buffer (both raw access and converted).
     * @param linear a previously returned buffer.
     */
    linearClose(linear: any | null): void
    /**
     * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    removeHandler(handler: any | null): void
    /**
     * Clean up resources used by sampling framework of buffer (will be freed
     * automatically later when the buffer is destroyed, for long lived buffers
     * cleaning up the sampling infrastructure when it has been used for its
     * purpose will sometimes be more efficient).
     */
    sampleCleanup(): void
    /**
     * Write a GeglBuffer to a file.
     * @param path the path where the gegl buffer will be saved, any writable GIO uri is valid.
     * @param roi the region of interest to write, this is the tiles that will be collected and written to disk.
     */
    save(path: string | null, roi: Rectangle): void
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
     * This function should be used instead of g_signal_connect when connecting to
     * the GeglBuffer::changed signal handler, GeglBuffer contains additional
     * machinery to avoid the overhead of changes when no signal handler have been
     * connected, if regular g_signal_connect is used; then no signals will be
     * emitted.
     * @param detailedSignal only "changed" expected for now
     * @param cHandler c function callback
     * @returns an handle like g_signal_connect.
     */
    signalConnect(detailedSignal: string | null, cHandler: GObject.Callback): number

    // Own signals of Gegl-0.3.Gegl.Buffer

    connect(sigName: "changed", callback: Buffer.ChangedSignalCallback): number
    on(sigName: "changed", callback: Buffer.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Buffer.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Buffer.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Gegl-0.3.Gegl.Buffer

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Buffer extends TileHandler {

    // Own properties of Gegl-0.3.Gegl.Buffer

    static name: string

    // Constructors of Gegl-0.3.Gegl.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    /**
     * Create a new GeglBuffer with the given format and dimensions.
     * @constructor 
     * @param formatName The Babl format name for this buffer, e.g. "RGBA float"
     * @param x x origin of the buffer's extent
     * @param y y origin of the buffer's extent
     * @param width width of the buffer's extent
     * @param height height of the buffer's extent
     */
    constructor(formatName: string | null, x: number, y: number, width: number, height: number) 
    /**
     * Create a new GeglBuffer with the given format and dimensions.
     * @constructor 
     * @param formatName The Babl format name for this buffer, e.g. "RGBA float"
     * @param x x origin of the buffer's extent
     * @param y y origin of the buffer's extent
     * @param width width of the buffer's extent
     * @param height height of the buffer's extent
     */
    static new(formatName: string | null, x: number, y: number, width: number, height: number): Buffer
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
    _init(config?: Buffer.ConstructorProperties): void
    /**
     * Loads an existing GeglBuffer from disk, if it has previously been saved with
     * gegl_buffer_save it should be possible to open through any GIO transport, buffers
     * that have been used as swap needs random access to be opened.
     * @param path the path to a gegl buffer on disk.
     * @returns a #GeglBuffer object.
     */
    static load(path: string | null): Buffer
    /**
     * Open an existing on-disk GeglBuffer, this buffer is opened in a monitored
     * state so multiple instances of gegl can share the same buffer. Sets on
     * one buffer are reflected in the other.
     * @param path the path to a gegl buffer on disk.
     * @returns a GeglBuffer object.
     */
    static open(path: string | null): Buffer
}

module Color {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.Color

        string?: string | null
    }

}

interface Color {

    // Own properties of Gegl-0.3.Gegl.Color

    string: string | null
    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.Color

    parentInstance: GObject.Object
    priv: ColorPrivate

    // Owm methods of Gegl-0.3.Gegl.Color

    /**
     * Creates a copy of `color`.
     * @returns A new copy of @color.
     */
    duplicate(): Color
    /**
     * Get the component values of the color in `format`.
     * @param format A Babl pointer
     * @returns The color components
     */
    getComponents(format: any): number[]
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
     * Retrieves the current set color as linear light non premultipled RGBA data
     * @param red red value
     * @param green green value
     * @param blue blue value
     * @param alpha alpha value
     */
    setRgba(red: number, green: number, blue: number, alpha: number): void

    // Class property signals of Gegl-0.3.Gegl.Color

    connect(sigName: "notify::string", callback: (...args: any[]) => void): number
    on(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::string", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Color extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Color

    static name: string

    // Constructors of Gegl-0.3.Gegl.Color

    constructor(config?: Color.ConstructorProperties) 
    /**
     * Creates a new #GeglColor.
     * 
     * Returns the newly created #GeglColor.
     * @constructor 
     * @param string a string describing the color to be created.
     */
    constructor(string: string | null) 
    /**
     * Creates a new #GeglColor.
     * 
     * Returns the newly created #GeglColor.
     * @constructor 
     * @param string a string describing the color to be created.
     */
    static new(string: string | null): Color
    _init(config?: Color.ConstructorProperties): void
}

module Config {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.Config

        applicationLicense?: string | null
        chunkSize?: number | null
        quality?: number | null
        queueSize?: number | null
        swap?: string | null
        threads?: number | null
        tileCacheSize?: number | null
        tileHeight?: number | null
        tileWidth?: number | null
        useOpencl?: boolean | null
    }

}

interface Config {

    // Own properties of Gegl-0.3.Gegl.Config

    applicationLicense: string | null
    chunkSize: number
    quality: number
    queueSize: number
    swap: string | null
    threads: number
    tileCacheSize: number
    tileHeight: number
    tileWidth: number
    useOpencl: boolean
    __gtype__: number

    // Class property signals of Gegl-0.3.Gegl.Config

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Config extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Config

    static name: string

    // Constructors of Gegl-0.3.Gegl.Config

    constructor(config?: Config.ConstructorProperties) 
    _init(config?: Config.ConstructorProperties): void
}

module Curve {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Curve {

    // Own properties of Gegl-0.3.Gegl.Curve

    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.Curve

    parentInstance: GObject.Object

    // Owm methods of Gegl-0.3.Gegl.Curve

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
     * @returns A new copy of @curve.
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

    // Class property signals of Gegl-0.3.Gegl.Curve

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Curve extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Curve

    static name: string

    // Constructors of Gegl-0.3.Gegl.Curve

    constructor(config?: Curve.ConstructorProperties) 
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
    _init(config?: Curve.ConstructorProperties): void
}

module Node {

    // Signal callback interfaces

    /**
     * Signal callback interface for `computed`
     */
    interface ComputedSignalCallback {
        (object: Rectangle): void
    }

    /**
     * Signal callback interface for `invalidated`
     */
    interface InvalidatedSignalCallback {
        (object: Rectangle): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.Node

        dontCache?: boolean | null
        geglOperation?: Operation | null
        name?: string | null
        operation?: string | null
        passthrough?: boolean | null
        useOpencl?: boolean | null
    }

}

interface Node {

    // Own properties of Gegl-0.3.Gegl.Node

    dontCache: boolean
    geglOperation: Operation
    name: string | null
    operation: string | null
    passthrough: boolean
    useOpencl: boolean
    __gtype__: number

    // Owm methods of Gegl-0.3.Gegl.Node

    /**
     * Make the GeglNode `graph,` take a reference on child. This reference
     * will be dropped when the reference count on the graph reaches zero.
     * @param child a GeglNode.
     * @returns the child.
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
    connectFrom(inputPadName: string | null, source: Node, outputPadName: string | null): boolean
    /**
     * Makes a connection between the pads of two nodes.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param outputPadName the output pad we want to use on the source.
     * @param sink the node we're connecting an input to
     * @param inputPadName the name of the input pad we are connecting to
     */
    connectTo(outputPadName: string | null, sink: Node, inputPadName: string | null): boolean
    /**
     * Creates a new processing node that performs the specified operation.
     * All properties of the operation will have their default values. This
     * is included as an addition to #gegl_node_new_child in the public API to have
     * a non varargs entry point for bindings as well as sometimes simpler more
     * readable code.
     * @param operation the type of node to create.
     * @returns a newly created node. The node will be destroyed by the parent. Calling g_object_unref on a node will cause the node to be dropped by the parent. (You may also add additional references using g_object_ref/g_object_unref, but in general relying on the parents reference counting is easiest.)
     */
    createChild(operation: string | null): Node
    /**
     * Performs hit detection by returning the node providing data at a given
     * coordinate pair. Currently operates only on bounding boxes and not
     * pixel data.
     * @param x x coordinate
     * @param y y coordinate
     * @returns the GeglNode providing the data ending up at @x,@y in the output of @node.
     */
    detect(x: number, y: number): Node
    /**
     * Disconnects node connected to `input_pad` of `node` (if any).
     * 
     * Returns TRUE if a connection was broken.
     * @param inputPad the input pad to disconnect.
     */
    disconnect(inputPad: string | null): boolean
    findProperty(propertyName: string | null): GObject.ParamSpec
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
    getConsumers(outputPad: string | null): [ /* returnType */ number, /* nodes */ Node[], /* pads */ string[] ]
    getGeglOperation(): Operation | null
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param padName the name of the pad.
     * @returns Returns an input proxy for the named pad. If no input proxy exists with this name a new one will be created.
     */
    getInputProxy(padName: string | null): Node
    getOperation(): string | null
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param padName the name of the pad.
     * @returns Returns a output proxy for the named pad. If no output proxy exists with this name a new one will be created.
     */
    getOutputProxy(padName: string | null): Node
    /**
     * Returns a GeglNode that keeps a reference on a child.
     * @returns the parent of a node or NULL.
     */
    getParent(): Node
    getPassthrough(): boolean
    getProducer(inputPadName: string | null, outputPadName: string | null): Node
    /**
     * Returns TRUE if the node has a pad with the specified name
     * @param padName the pad name we are looking for
     */
    hasPad(padName: string | null): boolean
    /**
     * Returns the position and dimensions of a rectangle spanning the area
     * defined by a node.
     * @returns pointer a #GeglRectangle
     */
    getBoundingBox(): Rectangle
    getProperty(propertyName: string | null): any

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
    getProperty<T = unknown>(propertyName: string): T
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
    progress(progress: number, message: string | null): void
    /**
     * Removes a child from a GeglNode. The reference previously held will be
     * dropped so increase the reference count before removing when reparenting
     * a child between two graphs.
     * @param child a GeglNode.
     * @returns the child.
     */
    removeChild(child: Node): Node
    setPassthrough(passthrough: boolean): void
    /**
     * This is mainly included for language bindings. Using #gegl_node_set is
     * more convenient when programming in C.
     * @param propertyName the name of the property to set
     * @param value a GValue containing the value to be set in the property.
     */
    setProperty(propertyName: string | null, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of the composition produced by a node (and thus also
     * the nodes contributing data to the specified node). To export a
     * gegl graph, connect the internal output node to an output proxy (see
     * #gegl_node_get_output_proxy.) and use the proxy node as the basis
     * for the serialization.
     * @param pathRoot filesystem path to construct relative paths from.
     */
    toXml(pathRoot: string | null): string | null
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of a segment of a graph from `head` to `tail` nodes.
     * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
     * @param tail a #GeglNode
     * @param pathRoot filesystem path to construct relative paths from.
     * @returns XML serialization of a graph segment.
     */
    toXmlFull(tail: Node | null, pathRoot: string | null): string | null

    // Own signals of Gegl-0.3.Gegl.Node

    connect(sigName: "computed", callback: Node.ComputedSignalCallback): number
    on(sigName: "computed", callback: Node.ComputedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "computed", callback: Node.ComputedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "computed", callback: Node.ComputedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "computed", ...args: any[]): void
    connect(sigName: "invalidated", callback: Node.InvalidatedSignalCallback): number
    on(sigName: "invalidated", callback: Node.InvalidatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidated", callback: Node.InvalidatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidated", callback: Node.InvalidatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "invalidated", ...args: any[]): void
    connect(sigName: "progress", callback: Node.ProgressSignalCallback): number
    on(sigName: "progress", callback: Node.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: Node.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: Node.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", ...args: any[]): void

    // Class property signals of Gegl-0.3.Gegl.Node

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Node extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Node

    static name: string

    // Constructors of Gegl-0.3.Gegl.Node

    constructor(config?: Node.ConstructorProperties) 
    /**
     * Create a new graph that can contain further processing nodes.
     * @constructor 
     * @returns A new top level #GeglNode (which can be used as a graph). When you are done using this graph instance it should be unreferenced with g_object_unref. This will also free any sub nodes created from this node.
     */
    constructor() 
    /**
     * Create a new graph that can contain further processing nodes.
     * @constructor 
     * @returns A new top level #GeglNode (which can be used as a graph). When you are done using this graph instance it should be unreferenced with g_object_unref. This will also free any sub nodes created from this node.
     */
    static new(): Node
    /**
     * The #GeglNode returned contains the graph described by the tree of stacks
     * in the XML document. The tree is connected to the "output" pad of the
     * returned node and thus can be used directly for processing.
     * @constructor 
     * @param path the path to a file on the local file system to be parsed.
     * @returns a GeglNode containing the parsed XML as a subgraph.
     */
    static newFromFile(path: string | null): Node
    static newFromSerialized(chaindata: string | null, pathRoot: string | null): Node
    /**
     * The #GeglNode returned contains the graph described by the tree of stacks
     * in the XML document. The tree is connected to the "output" pad of the
     * returned node and thus can be used directly for processing.
     * @constructor 
     * @param xmldata a \0 terminated string containing XML data to be parsed.
     * @param pathRoot a file system path that relative paths in the XML will be resolved in relation to.
     * @returns a GeglNode containing the parsed XML as a subgraph.
     */
    static newFromXml(xmldata: string | null, pathRoot: string | null): Node
    _init(config?: Node.ConstructorProperties): void
}

module Operation {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Operation {

    // Own properties of Gegl-0.3.Gegl.Operation

    __gtype__: number

    // Class property signals of Gegl-0.3.Gegl.Operation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Operation extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Operation

    static name: string

    // Constructors of Gegl-0.3.Gegl.Operation

    constructor(config?: Operation.ConstructorProperties) 
    _init(config?: Operation.ConstructorProperties): void
    static findProperty(operationType: string | null, propertyName: string | null): GObject.ParamSpec
    static getKey(operationType: string | null, keyName: string | null): string | null
    static getOpVersion(opName: string | null): string | null
    static getPropertyKey(operationType: string | null, propertyName: string | null, propertyKeyName: string | null): string | null
    static listKeys(operationType: string | null): string[]
    static listProperties(operationType: string | null): GObject.ParamSpec[]
    static listPropertyKeys(operationType: string | null, propertyName: string | null): string[]
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

module Path {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (object: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Path {

    // Own properties of Gegl-0.3.Gegl.Path

    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.Path

    parentInstance: GObject.Object

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
     * @returns the length of the path.
     */
    getLength(): number
    /**
     * Get the transformation matrix of the path.
     */
    getMatrix(): /* matrix */ Matrix3
    /**
     * Retrieves the number of nodes in the path.
     * @returns the number of nodes in the path.
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
    parseString(instructions: string | null): void
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
     * @returns return a string with instructions describing the string you need to free this with g_free().
     */
    toString(): string | null

    // Own signals of Gegl-0.3.Gegl.Path

    connect(sigName: "changed", callback: Path.ChangedSignalCallback): number
    on(sigName: "changed", callback: Path.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Path.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Path.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Gegl-0.3.Gegl.Path

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Path extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Path

    static name: string

    // Constructors of Gegl-0.3.Gegl.Path

    constructor(config?: Path.ConstructorProperties) 
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
    static newFromString(instructions: string | null): Path
    _init(config?: Path.ConstructorProperties): void
    /**
     * Adds a new type to the path system, FIXME this should probably
     * return something on registration conflicts, for now it expects
     * all registered paths to be aware of each other.
     * @param type a gchar to recognize in path descriptions.
     * @param items the number of floating point data items the instruction takes
     * @param description a human readable description of this entry
     */
    static addType(type: number, items: number, description: string | null): void
}

module Processor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.Processor

        chunksize?: number | null
        node?: Node | null
        progress?: number | null
        rectangle?: any | null
    }

}

interface Processor {

    // Own properties of Gegl-0.3.Gegl.Processor

    readonly chunksize: number
    node: Node
    progress: number
    rectangle: any
    __gtype__: number

    // Owm methods of Gegl-0.3.Gegl.Processor

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

    // Class property signals of Gegl-0.3.Gegl.Processor

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Processor extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Processor

    static name: string

    // Constructors of Gegl-0.3.Gegl.Processor

    constructor(config?: Processor.ConstructorProperties) 
    _init(config?: Processor.ConstructorProperties): void
}

module Stats {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Stats {

    // Own properties of Gegl-0.3.Gegl.Stats

    readonly swapBusy: boolean
    readonly swapFileSize: number
    readonly swapTotal: number
    readonly tileCacheHits: number
    readonly tileCacheMisses: number
    readonly tileCacheTotal: number
    readonly tileCacheTotalMax: number
    readonly tileCacheTotalUncloned: number
    readonly zoomTotal: number
    __gtype__: number

    // Class property signals of Gegl-0.3.Gegl.Stats

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
    connect(sigName: "notify::swap-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::swap-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::swap-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::swap-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::swap-total", ...args: any[]): void
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
    connect(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void): number
    on(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tile-cache-total-uncloned", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tile-cache-total-uncloned", ...args: any[]): void
    connect(sigName: "notify::zoom-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-total", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Stats extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.Stats

    static name: string

    // Constructors of Gegl-0.3.Gegl.Stats

    constructor(config?: Stats.ConstructorProperties) 
    _init(config?: Stats.ConstructorProperties): void
}

module TileBackend {

    // Constructor properties interface

    interface ConstructorProperties extends TileSource.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.TileBackend

        flushOnDestroy?: boolean | null
        format?: any | null
        tileHeight?: number | null
        tileWidth?: number | null
    }

}

interface TileBackend {

    // Own properties of Gegl-0.3.Gegl.TileBackend

    flushOnDestroy: boolean
    readonly format: any
    readonly pxSize: number
    readonly tileHeight: number
    readonly tileSize: number
    readonly tileWidth: number
    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.TileBackend

    parentInstance: any
    priv: TileBackendPrivate

    // Owm methods of Gegl-0.3.Gegl.TileBackend

    getExtent(): Rectangle
    getFlushOnDestroy(): boolean
    getTileHeight(): number
    getTileSize(): number
    getTileWidth(): number
    /**
     * Gets a pointer to the GeglTileStorage that uses the backend
     * @returns the #GeglTileStorage
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

    // Class property signals of Gegl-0.3.Gegl.TileBackend

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TileBackend extends TileSource {

    // Own properties of Gegl-0.3.Gegl.TileBackend

    static name: string

    // Constructors of Gegl-0.3.Gegl.TileBackend

    constructor(config?: TileBackend.ConstructorProperties) 
    _init(config?: TileBackend.ConstructorProperties): void
    /**
     * Delete a swap file from disk. This must be used by tile backends which may
     * swap to disk under certain circonstances.
     * 
     * For safety, this function will check that the swap file is in the swap
     * directory before deletion but it won't perform any other check.
     * @param path the path where the gegl tile backend has swapped.
     */
    static unlinkSwap(path: string | null): void
}

module TileHandler {

    // Constructor properties interface

    interface ConstructorProperties extends TileSource.ConstructorProperties {

        // Own constructor properties of Gegl-0.3.Gegl.TileHandler

        source?: GObject.Object | null
    }

}

interface TileHandler {

    // Own properties of Gegl-0.3.Gegl.TileHandler

    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.TileHandler

    parentInstance: any
    source: TileSource
    priv: TileHandlerPrivate

    // Owm methods of Gegl-0.3.Gegl.TileHandler

    damageRect(rect: Rectangle): void
    setSource(source: TileSource): void

    // Class property signals of Gegl-0.3.Gegl.TileHandler

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TileHandler extends TileSource {

    // Own properties of Gegl-0.3.Gegl.TileHandler

    static name: string

    // Constructors of Gegl-0.3.Gegl.TileHandler

    constructor(config?: TileHandler.ConstructorProperties) 
    _init(config?: TileHandler.ConstructorProperties): void
}

module TileSource {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface TileSource {

    // Own properties of Gegl-0.3.Gegl.TileSource

    __gtype__: number

    // Own fields of Gegl-0.3.Gegl.TileSource

    parentInstance: GObject.Object
    command: TileSourceCommand
    padding: any[]

    // Class property signals of Gegl-0.3.Gegl.TileSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TileSource extends GObject.Object {

    // Own properties of Gegl-0.3.Gegl.TileSource

    static name: string

    // Constructors of Gegl-0.3.Gegl.TileSource

    constructor(config?: TileSource.ConstructorProperties) 
    _init(config?: TileSource.ConstructorProperties): void
}

interface AudioFragmentClass {

    // Own fields of Gegl-0.3.Gegl.AudioFragmentClass

    parentClass: GObject.ObjectClass
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
    data: any[]
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
}

abstract class CurveClass {

    // Own properties of Gegl-0.3.Gegl.CurveClass

    static name: string
}

interface Lookup {

    // Own fields of Gegl-0.3.Gegl.Lookup

    function_: LookupFunction
    data: any
    shift: number
    positiveMin: number
    positiveMax: number
    negativeMin: number
    negativeMax: number
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
    isScale(): boolean
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
    parseString(string: string | null): void
    /**
     * Serialize a #GeglMatrix3 to a string.
     * 
     * Returns a freshly allocated string representing that #GeglMatrix3, the
     * returned string should be g_free()'d.
     */
    toString(): string | null
    /**
     * transforms the coordinates provided in `x` and `y` and changes to the
     * coordinates gotten when the transformed with the matrix.
     * @param x pointer to an x coordinate
     * @param y pointer to an y coordinate
     */
    transformPoint(x: number, y: number): void
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

    parentInstance: GObject.ParamSpecDouble
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number
    uiDigits: number

    // Owm methods of Gegl-0.3.Gegl.ParamSpecDouble

    setDigits(digits: number): void
    setSteps(smallStep: number, bigStep: number): void
}

class ParamSpecDouble {

    // Own properties of Gegl-0.3.Gegl.ParamSpecDouble

    static name: string
}

interface ParamSpecEnum {

    // Own fields of Gegl-0.3.Gegl.ParamSpecEnum

    parentInstance: GObject.ParamSpecEnum
    excludedValues: any[]

    // Owm methods of Gegl-0.3.Gegl.ParamSpecEnum

    excludeValue(value: number): void
}

class ParamSpecEnum {

    // Own properties of Gegl-0.3.Gegl.ParamSpecEnum

    static name: string
}

interface ParamSpecFilePath {

    // Own fields of Gegl-0.3.Gegl.ParamSpecFilePath

    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
}

class ParamSpecFilePath {

    // Own properties of Gegl-0.3.Gegl.ParamSpecFilePath

    static name: string
}

interface ParamSpecFormat {

    // Own fields of Gegl-0.3.Gegl.ParamSpecFormat

    parentInstance: GObject.ParamSpecPointer
}

class ParamSpecFormat {

    // Own properties of Gegl-0.3.Gegl.ParamSpecFormat

    static name: string
}

interface ParamSpecInt {

    // Own fields of Gegl-0.3.Gegl.ParamSpecInt

    parentInstance: GObject.ParamSpecInt
    uiMinimum: number
    uiMaximum: number
    uiGamma: number
    uiStepSmall: number
    uiStepBig: number

    // Owm methods of Gegl-0.3.Gegl.ParamSpecInt

    setSteps(smallStep: number, bigStep: number): void
}

class ParamSpecInt {

    // Own properties of Gegl-0.3.Gegl.ParamSpecInt

    static name: string
}

interface ParamSpecSeed {

    // Own fields of Gegl-0.3.Gegl.ParamSpecSeed

    parentInstance: GObject.ParamSpecUInt
    uiMinimum: number
    uiMaximum: number
}

class ParamSpecSeed {

    // Own properties of Gegl-0.3.Gegl.ParamSpecSeed

    static name: string
}

interface ParamSpecString {

    // Own fields of Gegl-0.3.Gegl.ParamSpecString

    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
}

class ParamSpecString {

    // Own properties of Gegl-0.3.Gegl.ParamSpecString

    static name: string
}

interface ParamSpecUri {

    // Own fields of Gegl-0.3.Gegl.ParamSpecUri

    parentInstance: GObject.ParamSpecString
    noValidate: number
    nullOk: number
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

    next: any
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
    static newWithSeed(seed: number): Random
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
     * @returns a #GeglRectangle
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
     * Returns TRUE if `rectangle` height and width are both zero.
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
    static infinitePlane(): Rectangle
}

interface Sampler {

    // Owm methods of Gegl-0.3.Gegl.Sampler

    /**
     * Perform a sampling with the provided `sampler`.
     * @param x x coordinate to sample
     * @param y y coordinate to sample
     * @param scale matrix representing extent of sampling area in source buffer.
     * @param output memory location for output data.
     * @param repeatMode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(x: number, y: number, scale: Matrix2, output: any | null, repeatMode: AbyssPolicy): void
    getContextRect(): Rectangle
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

    parentClass: TileSourceClass
    padding: any[]
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

    parentClass: TileSourceClass
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

    parentClass: GObject.ObjectClass
    padding: any[]
}

abstract class TileSourceClass {

    // Own properties of Gegl-0.3.Gegl.TileSourceClass

    static name: string
}

}

export default Gegl;
// END