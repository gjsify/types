
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gegl-0.4-ambient.d.ts';
import './gegl-0.4-import.d.ts';
/**
 * Gegl-0.4
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Babl from '@girs/babl-0.1';

export enum AbyssPolicy {
    NONE,
    CLAMP,
    LOOP,
    BLACK,
    WHITE,
}
export enum BablVariant {
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
export enum CachePolicy {
    AUTO,
    NEVER,
    ALWAYS,
}
export enum DistanceMetric {
    EUCLIDEAN,
    MANHATTAN,
    CHEBYSHEV,
}
export enum DitherMethod {
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
export enum MapFlags {
    /**
     * Prevent further mapping from being registered.
     */
    MAP_EXCLUDE_UNMAPPED,
}
export enum Orientation {
    HORIZONTAL,
    VERTICAL,
}
export enum RectangleAlignment {
    SUBSET,
    SUPERSET,
    NEAREST,
}
/**
 * An enumerated type specifying resolution (density) units.  If resolution
 * units are unknown, X and Y resolution specify the pixel aspect ratio.
 */
export enum ResolutionUnit {
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
export enum SamplerType {
    NEAREST,
    LINEAR,
    CUBIC,
    NOHALO,
    LOHALO,
}
export enum SplitStrategy {
    AUTO,
    HORIZONTAL,
    VERTICAL,
}
export enum TileCommand {
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
export enum AccessMode {
    READ,
    WRITE,
    READWRITE,
}
export enum BlitFlags {
    DEFAULT,
    CACHE,
    DIRTY,
}
export enum PadType {
    OUTPUT,
    INPUT,
}
export enum SerializeFlag {
    TRIM_DEFAULTS,
    VERSION,
    INDENT,
    BAKE_ANIM,
}
export const AUTO_ROWSTRIDE: number
export const CH_BACK_CENTER: number
export const CH_BACK_LEFT: number
export const CH_BACK_RIGHT: number
export const CH_FRONT_CENTER: number
export const CH_FRONT_LEFT: number
export const CH_FRONT_LEFT_OF_CENTER: number
export const CH_FRONT_RIGHT: number
export const CH_FRONT_RIGHT_OF_CENTER: number
export const CH_LAYOUT_2POINT1: number
export const CH_LAYOUT_2_1: number
export const CH_LAYOUT_2_2: number
export const CH_LAYOUT_3POINT1: number
export const CH_LAYOUT_4POINT0: number
export const CH_LAYOUT_4POINT1: number
export const CH_LAYOUT_5POINT0: number
export const CH_LAYOUT_5POINT0_BACK: number
export const CH_LAYOUT_5POINT1: number
export const CH_LAYOUT_5POINT1_BACK: number
export const CH_LAYOUT_6POINT0: number
export const CH_LAYOUT_6POINT0_FRONT: number
export const CH_LAYOUT_6POINT1: number
export const CH_LAYOUT_6POINT1_BACK: number
export const CH_LAYOUT_6POINT1_FRONT: number
export const CH_LAYOUT_7POINT0: number
export const CH_LAYOUT_7POINT0_FRONT: number
export const CH_LAYOUT_7POINT1: number
export const CH_LAYOUT_7POINT1_WIDE: number
export const CH_LAYOUT_7POINT1_WIDE_BACK: number
export const CH_LAYOUT_HEXADECAGONAL: number
export const CH_LAYOUT_HEXAGONAL: number
export const CH_LAYOUT_NATIVE: number
export const CH_LAYOUT_OCTAGONAL: number
export const CH_LAYOUT_QUAD: number
export const CH_LAYOUT_STEREO: number
export const CH_LAYOUT_STEREO_DOWNMIX: number
export const CH_LAYOUT_SURROUND: number
export const CH_LOW_FREQUENCY: number
export const CH_LOW_FREQUENCY_2: number
export const CH_SIDE_LEFT: number
export const CH_SIDE_RIGHT: number
export const CH_STEREO_LEFT: number
export const CH_STEREO_RIGHT: number
export const CH_SURROUND_DIRECT_LEFT: number
export const CH_SURROUND_DIRECT_RIGHT: number
export const CH_TOP_BACK_CENTER: number
export const CH_TOP_BACK_LEFT: number
export const CH_TOP_BACK_RIGHT: number
export const CH_TOP_CENTER: number
export const CH_TOP_FRONT_CENTER: number
export const CH_TOP_FRONT_LEFT: number
export const CH_TOP_FRONT_RIGHT: number
export const CH_WIDE_LEFT: number
export const CH_WIDE_RIGHT: number
export const FLOAT_EPSILON: number
export const LOOKUP_MAX_ENTRIES: number
export const MAJOR_VERSION: number
export const MAX_AUDIO_CHANNELS: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const PARAM_NO_VALIDATE: number
export function babl_variant(format: Babl.Object, variant: BablVariant): Babl.Object
/**
 * Disable OpenCL
 */
export function cl_disable(): void
/**
 * Initialize and enable OpenCL, calling this function again
 * will re-enable OpenCL if it has been disabled.
 * @returns True if OpenCL was initialized
 */
export function cl_init(): boolean
/**
 * Check if OpenCL is enabled.
 * @returns True if OpenCL is initialized and enabled
 */
export function cl_is_accelerated(): boolean
/**
 * Returns a GeglConfig object with properties that can be manipulated to control
 * GEGLs behavior.
 * @returns a #GeglConfig
 */
export function config(): Config
/**
 * Create a node chain from an unparsed commandline string.
 * @param ops an argv style, NULL terminated array of arguments
 * @param op_start node to pass in as input of chain
 * @param op_end node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param rel_dim relative dimension to scale rel suffixed values by
 * @param path_root path in filesystem to use as relative root
 */
export function create_chain(ops: string, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
/**
 * Create a node chain from argv style list of op data.
 * @param ops an argv style, NULL terminated array of arguments
 * @param op_start node to pass in as input of chain
 * @param op_end node to get processed data
 * @param time the time to use for interpolatino of keyframed values
 * @param rel_dim relative dimension to scale rel suffixed values by
 * @param path_root path in filesystem to use as relative root
 */
export function create_chain_argv(ops: string | null, op_start: Node, op_end: Node, time: number, rel_dim: number, path_root: string): void
/**
 * Call this function when you're done using GEGL. It will clean up
 * caches and write/dump debug information if the correct debug flags
 * are set.
 */
export function exit(): void
/**
 * Returns a value sutable to pass to the GeglBuffer constructor
 * or any other property that expects a Babl format.
 * @param format_name A Babl format name, e.g. "RGBA float"
 * @returns the format pointer
 */
export function format(format_name: string): any | null
export function format_get_name(format: any): string | null
/**
 * This function fetches the version of the GEGL library being used by
 * the running process.
 */
export function get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
/**
 * Dump the bounds and format of each node in the graph to stdout.
 * @param node The final node of the graph
 */
export function graph_dump_outputs(node: Node): void
/**
 * Dump the region that will be rendered for each node to fulfill
 * the request.
 * @param node The final node of the graph
 * @param roi The request rectangle
 */
export function graph_dump_request(node: Node, roi: Rectangle): void
export function has_operation(operation_type: string): boolean
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
export function init(argv: string[] | null): /* argv */ string[] | null
export function is_main_thread(): boolean
export function list_operations(): string[]
/**
 * Load all gegl modules found in the given directory.
 * @param path the directory to load modules from
 */
export function load_module_directory(path: string): void
/**
 * Distributes the execution of a function across multiple threads,
 * by calling it with a different index on each thread.
 * @param max_n the maximal number of threads to use
 * @param func the function to call
 */
export function parallel_distribute(max_n: number, func: ParallelDistributeFunc): void
/**
 * Distributes the processing of a planar data-structure across
 * multiple threads, by calling the given function with different
 * sub-areas on different threads.
 * @param area the area to process
 * @param thread_cost the cost of using each additional thread, relative               to the cost of processing a single data element
 * @param split_strategy the strategy to use for dividing the area
 * @param func the function to call
 */
export function parallel_distribute_area(area: Rectangle, thread_cost: number, split_strategy: SplitStrategy, func: ParallelDistributeAreaFunc): void
/**
 * Distributes the processing of a linear data-structure across
 * multiple threads, by calling the given function with different
 * sub-ranges on different threads.
 * @param size the total size of the data
 * @param thread_cost the cost of using each additional thread, relative               to the cost of processing a single data element
 * @param func the function to call
 */
export function parallel_distribute_range(size: number, thread_cost: number, func: ParallelDistributeRangeFunc): void
/**
 * Creates a new #GParamSpec instance specifying a #GeglAudioFragment property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_audio_fragment(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_color the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_color(name: string, nick: string, blurb: string, default_color: Color, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglColor property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_color_string the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_color_from_string(name: string, nick: string, blurb: string, default_color_string: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Get the default color value of the param spec
 * @param self a #GeglColor #GParamSpec
 * @returns the default #GeglColor
 */
export function param_spec_color_get_default(self: GObject.ParamSpec): Color
/**
 * Creates a new #GParamSpec instance specifying a #GeglCurve property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_curve the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_curve(name: string, nick: string, blurb: string, default_curve: Curve, flags: GObject.ParamFlags): GObject.ParamSpec
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
 * @returns a newly created parameter specification
 */
export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecEnum instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param enum_type the enum type to get valid values from
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: GObject.GType, default_value: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFilePath instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param no_validate true if the string should be validated with g_utf8_validate
 * @param null_ok true if the string can be NULL
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_file_path(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_format(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string
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
 * @returns a newly created parameter specification
 */
export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, ui_minimum: number, ui_maximum: number, ui_gamma: number, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GParamSpec instance specifying a #GeglPath property.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param default_path the default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_path(name: string, nick: string, blurb: string, default_path: Path, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecSeed instance specifying an integer random seed.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_seed(name: string, nick: string, blurb: string, flags: GObject.ParamFlags): GObject.ParamSpec
export function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void
/**
 * Creates a new #GeglParamSpecString instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param no_validate true if the string should be validated with g_utf8_validate
 * @param null_ok true if the string can be NULL
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_string(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Creates a new #GeglParamSpecUri instance.
 * @param name canonical name of the property specified
 * @param nick nick name for the property specified
 * @param blurb description of the property specified
 * @param no_validate true if the string should be validated with g_utf8_validate
 * @param null_ok true if the string can be NULL
 * @param default_value default value for the property specified
 * @param flags flags for the property specified
 * @returns a newly created parameter specification
 */
export function param_spec_uri(name: string, nick: string, blurb: string, no_validate: boolean, null_ok: boolean, default_value: string, flags: GObject.ParamFlags): GObject.ParamSpec
/**
 * Returns a GeglRectangle that represents an infininte plane.
 */
export function rectangle_infinite_plane(): Rectangle
/**
 * Resets the cumulative data gathered by the #GeglStats object returned
 * by #gegl_stats().
 */
export function reset_stats(): void
export function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag): string | null
/**
 * Returns a GeglStats object with properties that can be read to monitor
 * GEGL statistics.
 * @returns a #GeglStats
 */
export function stats(): Stats
export interface LookupFunction {
    (value: number, data: any | null): number
}
export interface NodeFunction {
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
export interface ParallelDistributeAreaFunc {
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
export interface ParallelDistributeFunc {
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
export interface ParallelDistributeRangeFunc {
    (offset: number, size: number): void
}
export interface SamplerGetFun {
    (self: Sampler, x: number, y: number, scale: BufferMatrix2, output: any | null, repeat_mode: AbyssPolicy): void
}
export interface TileCallback {
    (tile: Tile): void
}
export interface TileSourceCommand {
    (gegl_tile_source: TileSource, command: TileCommand, x: number, y: number, z: number, data: any | null): any | null
}
export module Metadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Metadata {

    // Owm methods of Gegl-0.4.Gegl.Metadata

    /**
     * Retrieve resolution from the application image metadata.  Intended for use
     * by the image file writer.  If resolution is not supported by the application
     * or if the operation fails %FALSE is returned and the resolution values are
     * not updated.
     * @param unit #GeglResolutionUnit return location
     * @param x X resolution return location
     * @param y Y resolution return location
     * @returns %TRUE if successful.
     */
    get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Retrieve image file metadata from the application.  Intended for use by the
     * image file writer. If the operation fails it returns %FALSE and `value` is
     * not updated.
     * @param iter #GeglMetadataIter referencing the value to get
     * @param value Value to set in the interface
     * @returns %TRUE if successful.
     */
    iter_get_value(iter: MetadataIter, value: any): boolean
    /**
     * Initialise an iterator to find all supported metadata keys.
     * @param iter #GeglMetadataIter to be initialised
     */
    iter_init(iter: MetadataIter): void
    /**
     * Look up the specified key and initialise an iterator to reference the
     * associated metadata. The iterator is used in conjunction with
     * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
     * iterator is not valid for gegl_metadata_iter_next().
     * @param iter #GeglMetadataIter to be initialised
     * @param key Name of the value look up
     * @returns %TRUE if key is found.
     */
    iter_lookup(iter: MetadataIter, key: string): boolean
    /**
     * Move the iterator to the next metadata item
     * @param iter #GeglMetadataIter to be updated
     * @returns key name if found, else %NULL
     */
    iter_next(iter: MetadataIter): string
    /**
     * Set application data retrieved from image file's metadata.  Intended for use
     * by the image file reader.  If the operation fails it returns %FALSE and
     * `value` is ignored.
     * @param iter #GeglMetadataIter referencing the value to set
     * @param value Value to set in the interface
     * @returns %TRUE if successful.
     */
    iter_set_value(iter: MetadataIter, value: any): boolean
    /**
     * Set the name of the file module and pass an array of mappings from
     * file-format specific metadata names to those used by Gegl. A GValue
     * transformation function may be supplied, e.g. to parse or format timestamps.
     * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
     * @param flags Flags specifying capabilities of underlying file format
     * @param map Array of mappings from file module metadata              names to Gegl well-known names.
     */
    register_map(file_module: string, flags: number, map: MetadataMap[]): void
    /**
     * Set resolution retrieved from image file's metadata.  Intended for use by
     * the image file reader.  If resolution is not supported by the application or
     * if the operation fails %FALSE is returned and the values are ignored.
     * @param unit Specify #GeglResolutionUnit
     * @param x X resolution
     * @param y Y resolution
     * @returns %TRUE if successful.
     */
    set_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Unregister the file module mappings and any further mappings added or
     * modified by the application.  This should be called after the file module
     * completes operations.
     */
    unregister_map(): void

    // Own virtual methods of Gegl-0.4.Gegl.Metadata

    /**
     * Retrieve resolution from the application image metadata.  Intended for use
     * by the image file writer.  If resolution is not supported by the application
     * or if the operation fails %FALSE is returned and the resolution values are
     * not updated.
     * @virtual 
     * @param unit #GeglResolutionUnit return location
     * @param x X resolution return location
     * @param y Y resolution return location
     * @returns %TRUE if successful.
     */
    vfunc_get_resolution(unit: ResolutionUnit, x: number, y: number): boolean
    /**
     * Retrieve image file metadata from the application.  Intended for use by the
     * image file writer. If the operation fails it returns %FALSE and `value` is
     * not updated.
     * @virtual 
     * @param iter #GeglMetadataIter referencing the value to get
     * @param value Value to set in the interface
     * @returns %TRUE if successful.
     */
    vfunc_iter_get_value(iter: MetadataIter, value: any): boolean
    /**
     * Initialise an iterator to find all supported metadata keys.
     * @virtual 
     * @param iter #GeglMetadataIter to be initialised
     */
    vfunc_iter_init(iter: MetadataIter): void
    /**
     * Look up the specified key and initialise an iterator to reference the
     * associated metadata. The iterator is used in conjunction with
     * gegl_metadata_set_value() and gegl_metadata_get_value(). Note that this
     * iterator is not valid for gegl_metadata_iter_next().
     * @virtual 
     * @param iter #GeglMetadataIter to be initialised
     * @param key Name of the value look up
     * @returns %TRUE if key is found.
     */
    vfunc_iter_lookup(iter: MetadataIter, key: string): boolean
    /**
     * Move the iterator to the next metadata item
     * @virtual 
     * @param iter #GeglMetadataIter to be updated
     * @returns key name if found, else %NULL
     */
    vfunc_iter_next(iter: MetadataIter): string
    /**
     * Set application data retrieved from image file's metadata.  Intended for use
     * by the image file reader.  If the operation fails it returns %FALSE and
     * `value` is ignored.
     * @virtual 
     * @param iter #GeglMetadataIter referencing the value to set
     * @param value Value to set in the interface
     * @returns %TRUE if successful.
     */
    vfunc_iter_set_value(iter: MetadataIter, value: any): boolean
    /**
     * Set the name of the file module and pass an array of mappings from
     * file-format specific metadata names to those used by Gegl. A GValue
     * transformation function may be supplied, e.g. to parse or format timestamps.
     * @virtual 
     * @param file_module String identifying the file module, e.g, `"gegl:png-save"`
     * @param flags Flags specifying capabilities of underlying file format
     * @param map Array of mappings from file module metadata              names to Gegl well-known names.
     */
    vfunc_register_map(file_module: string, flags: number, map: MetadataMap[]): void
    /**
     * Set resolution retrieved from image file's metadata.  Intended for use by
     * the image file reader.  If resolution is not supported by the application or
     * if the operation fails %FALSE is returned and the values are ignored.
     * @virtual 
     * @param unit Specify #GeglResolutionUnit
     * @param x X resolution
     * @param y Y resolution
     * @returns %TRUE if successful.
     */
    vfunc_set_resolution(unit: ResolutionUnit, x: number, y: number): boolean

    // Class property signals of Gegl-0.4.Gegl.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Metadata extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Metadata

    static name: string
    static $gtype: GObject.GType<Metadata>

    // Constructors of Gegl-0.4.Gegl.Metadata

    constructor(config?: Metadata.ConstructorProperties) 
    _init(config?: Metadata.ConstructorProperties): void
}

export module AudioFragment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.AudioFragment

        string?: string | null
    }

}

export interface AudioFragment {

    // Own properties of Gegl-0.4.Gegl.AudioFragment

    string: string | null

    // Own fields of Gegl-0.4.Gegl.AudioFragment

    parent_instance: GObject.Object
    data: number[]
    priv: AudioFragmentPrivate

    // Owm methods of Gegl-0.4.Gegl.AudioFragment

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

    // Class property signals of Gegl-0.4.Gegl.AudioFragment

    connect(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: AudioFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AudioFragment extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.AudioFragment

    static name: string
    static $gtype: GObject.GType<AudioFragment>

    // Constructors of Gegl-0.4.Gegl.AudioFragment

    constructor(config?: AudioFragment.ConstructorProperties) 
    constructor(sample_rate: number, channels: number, channel_layout: number, max_samples: number) 
    static new(sample_rate: number, channels: number, channel_layout: number, max_samples: number): AudioFragment
    _init(config?: AudioFragment.ConstructorProperties): void
}

export module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Buffer, object: Rectangle): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends TileHandler.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.Buffer

        abyssHeight?: number | null
        abyssWidth?: number | null
        abyssX?: number | null
        abyssY?: number | null
        backend?: TileBackend | null
        format?: any | null
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

}

export interface Buffer {

    // Own properties of Gegl-0.4.Gegl.Buffer

    readonly abyssHeight: number
    readonly abyssWidth: number
    readonly abyssX: number
    readonly abyssY: number
    readonly backend: TileBackend
    format: any
    height: number
    readonly initialized: boolean
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

    // Conflicting properties

    parent_instance: TileSource & GObject.Object & GObject.Object

    // Owm methods of Gegl-0.4.Gegl.Buffer

    /**
     * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    add_handler(handler: any | null): void
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
     * @param dst_rect position of upper left destination pixel (or NULL to match `src_rect)`
     */
    copy(src_rect: Rectangle, repeat_mode: AbyssPolicy, dst: Buffer, dst_rect: Rectangle): void
    /**
     * Create a new sub GeglBuffer, that is a view on a larger buffer.
     * @param extent coordinates of new buffer.
     * @returns the new sub buffer
     */
    create_sub_buffer(extent: Rectangle): Buffer
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
     * Invokes the external flush function, if any is set on the provided buffer -
     * this ensures that data pending - in the current implementation only OpenCL -
     * externally to be synchronized with the buffer. Multi threaded code should
     * call such a synchronization before branching out to avoid each of the
     * threads having an implicit synchronization of its own.
     * @param rect rectangle
     */
    flush_ext(rect: Rectangle): void
    /**
     * Blocks emission of the "changed" signal for `buffer`.
     * 
     * While the signal is blocked, changes to `buffer` are accumulated, and will
     * be emitted once the signal is unblocked, using gegl_buffer_thaw_changed().
     */
    freeze_changed(): void
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
     * @returns A copy of the requested data
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
    linear_close(linear: any | null): void
    /**
     * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
     * @param handler a #GeglTileHandler
     */
    remove_handler(handler: any | null): void
    /**
     * Clean up resources used by sampling framework of buffer.
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
     * Sets the region covered by rect to the the provided pixel.
     * @param rect a rectangular region to fill with a color.
     * @param pixel pointer to the data of a single pixel
     * @param pixel_format the babl format of the pixel, if missing - the soft format of dst.
     */
    set_color_from_pixel(rect: Rectangle, pixel: any | null, pixel_format: Babl.Object): void
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
     * Checks if a pair of buffers share the same underlying tile storage.
     * 
     * Returns TRUE if `buffer1` and `buffer2` share the same storage.
     * @param buffer2 a #GeglBuffer.
     */
    share_storage(buffer2: Buffer): boolean
    /**
     * This function should be used instead of g_signal_connect when connecting to
     * the GeglBuffer::changed signal handler, GeglBuffer contains additional
     * machinery to avoid the overhead of changes when no signal handler have been
     * connected, if regular g_signal_connect is used; then no signals will be
     * emitted.
     * @param detailed_signal only "changed" expected for now
     * @param c_handler c function callback
     * @returns an handle like g_signal_connect.
     */
    signal_connect(detailed_signal: string, c_handler: GObject.Callback): number
    /**
     * Unblocks emission of the "changed" signal for `buffer`.
     * 
     * Once all calls to gegl_buffer_freeze_changed() are matched by corresponding
     * calls to gegl_buffer_freeze_changed(), all accumulated changes are emitted.
     */
    thaw_changed(): void

    // Own signals of Gegl-0.4.Gegl.Buffer

    connect(sigName: "changed", callback: Buffer.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Buffer.ChangedSignalCallback): number
    emit(sigName: "changed", object: Rectangle, ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.Buffer

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
    connect(sigName: "notify::initialized", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initialized", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::initialized", ...args: any[]): void
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

export class Buffer extends TileHandler {

    // Own properties of Gegl-0.4.Gegl.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Gegl-0.4.Gegl.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
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
    _init(config?: Buffer.ConstructorProperties): void
    /**
     * Loads an existing GeglBuffer from disk, if it has previously been saved with
     * gegl_buffer_save it should be possible to open through any GIO transport, buffers
     * that have been used as swap needs random access to be opened.
     * @param path the path to a gegl buffer on disk.
     * @returns a #GeglBuffer object.
     */
    static load(path: string): Buffer
    /**
     * Open an existing on-disk GeglBuffer, this buffer is opened in a monitored
     * state so multiple instances of gegl can share the same buffer. Sets on
     * one buffer are reflected in the other.
     * @param path the path to a gegl buffer on disk.
     * @returns a GeglBuffer object.
     */
    static open(path: string): Buffer
    /**
     * Generates a unique filename in the GEGL swap directory, suitable for
     * using as swap space.  When the file is no longer needed, it may be
     * removed with gegl_buffer_swap_remove_file(); otherwise, it will be
     * removed when gegl_exit() is called.
     * @param suffix a string to suffix the filename with, for          identification purposes, or %NULL.
     * @returns a string containing the full file path, or %NULL is the swap is disabled.  The returned string should be freed with g_free() when no longer needed.
     */
    static swap_create_file(suffix: string | null): string | null
    /**
     * Tests if `path` is a swap file, that is, if it has been created
     * with gegl_buffer_swap_create_file(), and hasn't been removed
     * yet.
     * @param path a filename
     */
    static swap_has_file(path: string): boolean
    /**
     * Removes a swap file, generated using gegl_buffer_swap_create_file(),
     * unlinking the file, if exists.
     * @param path the swap file to remove, as returned by        gegl_buffer_swap_create_file()
     */
    static swap_remove_file(path: string): void
}

export module Color {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.Color

        string?: string | null
    }

}

export interface Color {

    // Own properties of Gegl-0.4.Gegl.Color

    string: string | null

    // Own fields of Gegl-0.4.Gegl.Color

    parent_instance: GObject.Object
    priv: ColorPrivate

    // Owm methods of Gegl-0.4.Gegl.Color

    /**
     * Creates a copy of `color`.
     * @returns A new copy of @color.
     */
    duplicate(): Color
    /**
     * Get the component values of the color in `format`.
     * @param format A Babl pointer
     * @returns The color components If value format not supported return NULL and components_length set to 0.
     */
    get_components(format: any): number[]
    get_format(): Babl.Object
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
     * Set color as linear light non premultipled RGBA data
     * @param red red value
     * @param green green value
     * @param blue blue value
     * @param alpha alpha value
     */
    set_rgba(red: number, green: number, blue: number, alpha: number): void

    // Class property signals of Gegl-0.4.Gegl.Color

    connect(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::string", callback: (($obj: Color, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Color extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Color

    static name: string
    static $gtype: GObject.GType<Color>

    // Constructors of Gegl-0.4.Gegl.Color

    constructor(config?: Color.ConstructorProperties) 
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
    _init(config?: Color.ConstructorProperties): void
}

export module Config {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface Config {

    // Own properties of Gegl-0.4.Gegl.Config

    applicationLicense: string | null
    chunkSize: number
    mipmapRendering: boolean
    quality: number
    queueSize: number
    swap: string | null
    swapCompression: string | null
    threads: number
    tileCacheSize: number
    tileHeight: number
    tileWidth: number
    useOpencl: boolean

    // Class property signals of Gegl-0.4.Gegl.Config

    connect(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-license", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-license", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::mipmap-rendering", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mipmap-rendering", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mipmap-rendering", ...args: any[]): void
    connect(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quality", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quality", ...args: any[]): void
    connect(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::queue-size", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::queue-size", ...args: any[]): void
    connect(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap", ...args: any[]): void
    connect(sigName: "notify::swap-compression", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-compression", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-compression", ...args: any[]): void
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

export class Config extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Config

    static name: string
    static $gtype: GObject.GType<Config>

    // Constructors of Gegl-0.4.Gegl.Config

    constructor(config?: Config.ConstructorProperties) 
    _init(config?: Config.ConstructorProperties): void
}

export module Curve {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Curve {

    // Own fields of Gegl-0.4.Gegl.Curve

    parent_instance: GObject.Object

    // Owm methods of Gegl-0.4.Gegl.Curve

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
     * @returns A new copy of @curve.
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

    // Class property signals of Gegl-0.4.Gegl.Curve

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Curve extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Curve

    static name: string
    static $gtype: GObject.GType<Curve>

    // Constructors of Gegl-0.4.Gegl.Curve

    constructor(config?: Curve.ConstructorProperties) 
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
    _init(config?: Curve.ConstructorProperties): void
}

export module MetadataHash {

    // Constructor properties interface

    export interface ConstructorProperties extends Metadata.ConstructorProperties, MetadataStore.ConstructorProperties {
    }

}

export interface MetadataHash extends Metadata {

    // Conflicting methods

    /**
     * gegl_metadata_store_notify() is called by subclasses when the value of a
     * metadata variable changes. It emits the `::changed` signal with the variable
     * name as the detail parameter.  Set `shadow` = %TRUE if variable is shadowed
     * by a property so that a notify signal is emitted with the property name as
     * the detail parameter.
     * @param pspec The #GParamSpec used to declare the variable.
     * @param shadow The metadata variable shadows a property.
     */
    notify(pspec: GObject.ParamSpec, shadow: boolean): void

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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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

    // Class property signals of Gegl-0.4.Gegl.MetadataHash

    connect(sigName: "notify::artist", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::comment", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disclaimer", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disclaimer", ...args: any[]): void
    connect(sigName: "notify::file-module-name", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-module-name", ...args: any[]): void
    connect(sigName: "notify::resolution-unit", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-unit", ...args: any[]): void
    connect(sigName: "notify::resolution-x", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-x", ...args: any[]): void
    connect(sigName: "notify::resolution-y", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-y", ...args: any[]): void
    connect(sigName: "notify::software", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::software", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warning", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: MetadataHash, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetadataHash extends MetadataStore {

    // Own properties of Gegl-0.4.Gegl.MetadataHash

    static name: string
    static $gtype: GObject.GType<MetadataHash>

    // Constructors of Gegl-0.4.Gegl.MetadataHash

    constructor(config?: MetadataHash.ConstructorProperties) 
    /**
     * Create a new #GeglMetadataHash
     * @constructor 
     * @returns New #GeglMetadataHash cast to #GeglMetadataStore
     */
    constructor() 
    /**
     * Create a new #GeglMetadataHash
     * @constructor 
     * @returns New #GeglMetadataHash cast to #GeglMetadataStore
     */
    static new(): MetadataHash
    _init(config?: MetadataHash.ConstructorProperties): void
}

export module MetadataStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: MetadataStore, pspec: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `generate-value`
     */
    export interface GenerateValueSignalCallback {
        ($obj: MetadataStore, pspec: GObject.ParamSpec, value: any): boolean
    }

    /**
     * Signal callback interface for `mapped`
     */
    export interface MappedSignalCallback {
        ($obj: MetadataStore, file_module: string | null, exclude_unmapped: boolean): void
    }

    /**
     * Signal callback interface for `parse-value`
     */
    export interface ParseValueSignalCallback {
        ($obj: MetadataStore, pspec: GObject.ParamSpec, value: any): boolean
    }

    /**
     * Signal callback interface for `unmapped`
     */
    export interface UnmappedSignalCallback {
        ($obj: MetadataStore, file_module: string | null, local_name: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Metadata.ConstructorProperties, GObject.Object.ConstructorProperties {

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

}

export interface MetadataStore extends Metadata {

    // Own properties of Gegl-0.4.Gegl.MetadataStore

    /**
     * Name of image creator.
     */
    artist: string | null
    /**
     * Miscellaneous comment; conversion from GIF comment.
     */
    comment: string | null
    /**
     * Copyright notice.
     */
    copyright: string | null
    /**
     * Description of image (possibly long).
     */
    description: string | null
    /**
     * Legal disclaimer.
     */
    disclaimer: string | null
    /**
     * Current file loader/saver module name. Valid only while a #GeglMetadata
     * mapping is registered. This property is mainly provided for use in signal
     * handlers.
     */
    readonly fileModuleName: string | null
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
    software: string | null
    /**
     * Device used to create the image.
     */
    source: string | null
    /**
     * Time of original image creation.
     */
    timestamp: GLib.DateTime
    /**
     * Short (one line) title or caption for image.
     */
    title: string | null
    /**
     * Warning of nature of content.
     */
    warning: string | null

    // Own fields of Gegl-0.4.Gegl.MetadataStore

    parent_instance: GObject.Object

    // Owm methods of Gegl-0.4.Gegl.MetadataStore

    /**
     * Declare a metadata value using a #GParamSpec.
     * @param pspec A #GParamSpec
     */
    declare(pspec: GObject.ParamSpec): void
    /**
     * Get name of image creator.
     * @returns Artist or %NULL if not set
     */
    get_artist(): string
    /**
     * Get the comment.
     * @returns Comment or %NULL if not set
     */
    get_comment(): string
    /**
     * Get the copyright notice.
     * @returns Copyright or %NULL if not set
     */
    get_copyright(): string
    /**
     * Get description of image.
     * @returns Description or %NULL if not set
     */
    get_description(): string
    /**
     * Get the legal disclaimer.
     * @returns Disclaimer or %NULL if not set
     */
    get_disclaimer(): string
    /**
     * Return the name registered by the current file module.
     * @returns Current file module name or %NULL.
     */
    get_file_module_name(): string
    /**
     * Get the units used for resolution.
     * @returns a #GeglResolutionUnit.
     */
    get_resolution_unit(): ResolutionUnit
    /**
     * Get the X resolution or density in dots per unit.
     * @returns X resolution
     */
    get_resolution_x(): number
    /**
     * Get the Y resolution or density in dots per unit.
     * @returns Y resolution
     */
    get_resolution_y(): number
    /**
     * Get software used to create the image.
     * @returns Software or %NULL if not set
     */
    get_software(): string
    /**
     * Get device used to create the image.
     * @returns source or %NULL if not set
     */
    get_source(): string
    /**
     * A slightly more efficient version of gegl_metadata_store_get_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_get_value().
     * @param name Metadata name
     * @returns String or %NULL.
     */
    get_string(name: string): string
    /**
     * Get time of original image creation.
     * @returns #GDateTime or %NULL if not set. Free with                           g_date_time_unref() when done.
     */
    get_timestamp(): GLib.DateTime
    /**
     * Get title or caption for image.
     * @returns Title or %NULL if not set
     */
    get_title(): string
    /**
     * Retrieve the metadata value. `value` must be initialised with a compatible
     * type. If the value is unset or has not been previously declared `value` is
     * unchanged and an error message is logged.
     * @param name Metadata name
     * @param value An initialised #GValue.
     */
    get_value(name: string, value: any): /* value */ any
    /**
     * Get warning.
     * @returns Warning or %NULL if not set
     */
    get_warning(): string
    /**
     * Test whether the #GeglMetadataStore contains a value for the specified name.
     * @param name Metadata name
     * @returns %TRUE if metadata is declared and contains a valid value.
     */
    has_value(name: string): boolean
    /**
     * gegl_metadata_store_notify() is called by subclasses when the value of a
     * metadata variable changes. It emits the `::changed` signal with the variable
     * name as the detail parameter.  Set `shadow` = %TRUE if variable is shadowed
     * by a property so that a notify signal is emitted with the property name as
     * the detail parameter.
     * @param pspec The #GParamSpec used to declare the variable.
     * @param shadow The metadata variable shadows a property.
     */
    notify(pspec: GObject.ParamSpec, shadow: boolean): void

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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    register(local_name: string, name: string, transform: GObject.ValueTransform): void
    /**
     * Set name of image creator.
     * @param artist Artist string
     */
    set_artist(artist: string): void
    /**
     * Set the miscellaneous comment; conversion from GIF comment.
     * @param comment Comment string
     */
    set_comment(comment: string): void
    /**
     * Set the copyright notice.
     * @param copyright Copyright string
     */
    set_copyright(copyright: string): void
    /**
     * Set description of image.
     * @param description Description string
     */
    set_description(description: string): void
    /**
     * Set the legal disclaimer.
     * @param disclaimer Disclaimer string
     */
    set_disclaimer(disclaimer: string): void
    /**
     * Set the units used for the resolution (density) values.
     * @param unit Units as a #GeglResolutionUnit
     */
    set_resolution_unit(unit: ResolutionUnit): void
    /**
     * Set the X resolution or density in dots per unit.
     * @param resolution_x X resolution or density
     */
    set_resolution_x(resolution_x: number): void
    /**
     * Set the Y resolution or density in dots per unit.
     * @param resolution_y Y resolution or density
     */
    set_resolution_y(resolution_y: number): void
    /**
     * Set software used to create the image.
     * @param software Software string
     */
    set_software(software: string): void
    /**
     * Set device used to create the image.
     * @param source Source string
     */
    set_source(source: string): void
    /**
     * A slightly more efficient version of gegl_metadata_store_set_value()
     * for string values avoiding a duplication. Otherwise it behaves the same
     * gegl_metadata_store_set_value().
     * @param name Metadata name
     * @param string String value to set
     */
    set_string(name: string, string: string): void
    /**
     * Set time of original image creation.
     * @param timestamp A #GDateTime
     */
    set_timestamp(timestamp: GLib.DateTime): void
    /**
     * Set title or caption for image.
     * @param title Title string
     */
    set_title(title: string): void
    /**
     * Set the specified metadata value. If `value` is %NULL the default value from
     * the associated #GParamSpec is used. This operation will fail if the value
     * has not been previously declared.  A `changed::name` signal is emitted when
     * the value is set. If the value is shadowed by a property a `notify::name`
     * signal is also emitted.
     * @param name Metadata name
     * @param value (nullable): A valid #GValue or %NULL
     */
    set_value(name: string, value: any): void
    /**
     * Set the warning of nature of content.
     * @param warning Warning string
     */
    set_warning(warning: string): void
    /**
     * Get the declared type of the value in the #GeglMetadataStore.
     * @param name Metadata name
     * @returns Declared #GType of metadata value or %G_TYPE_INVALID.
     */
    typeof_value(name: string): GObject.GType

    // Own virtual methods of Gegl-0.4.Gegl.MetadataStore

    vfunc__declare(pspec: GObject.ParamSpec, shadow: boolean): void
    vfunc__get_value(name: string): any
    /**
     * Test whether the #GeglMetadataStore contains a value for the specified name.
     * @virtual 
     * @param name Metadata name
     * @returns %TRUE if metadata is declared and contains a valid value.
     */
    vfunc_has_value(name: string): boolean
    vfunc_register_hook(file_module_name: string, flags: number): void
    /**
     * Set the specified metadata value. If `value` is %NULL the default value from
     * the associated #GParamSpec is used. This operation will fail if the value
     * has not been previously declared.  A `changed::name` signal is emitted when
     * the value is set. If the value is shadowed by a property a `notify::name`
     * signal is also emitted.
     * @virtual 
     * @param name Metadata name
     * @param value (nullable): A valid #GValue or %NULL
     */
    vfunc_set_value(name: string, value: any): void

    // Own signals of Gegl-0.4.Gegl.MetadataStore

    connect(sigName: "changed", callback: MetadataStore.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: MetadataStore.ChangedSignalCallback): number
    emit(sigName: "changed", pspec: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "generate-value", callback: MetadataStore.GenerateValueSignalCallback): number
    connect_after(sigName: "generate-value", callback: MetadataStore.GenerateValueSignalCallback): number
    emit(sigName: "generate-value", pspec: GObject.ParamSpec, value: any, ...args: any[]): void
    connect(sigName: "mapped", callback: MetadataStore.MappedSignalCallback): number
    connect_after(sigName: "mapped", callback: MetadataStore.MappedSignalCallback): number
    emit(sigName: "mapped", file_module: string | null, exclude_unmapped: boolean, ...args: any[]): void
    connect(sigName: "parse-value", callback: MetadataStore.ParseValueSignalCallback): number
    connect_after(sigName: "parse-value", callback: MetadataStore.ParseValueSignalCallback): number
    emit(sigName: "parse-value", pspec: GObject.ParamSpec, value: any, ...args: any[]): void
    connect(sigName: "unmapped", callback: MetadataStore.UnmappedSignalCallback): number
    connect_after(sigName: "unmapped", callback: MetadataStore.UnmappedSignalCallback): number
    emit(sigName: "unmapped", file_module: string | null, local_name: string | null, ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.MetadataStore

    connect(sigName: "notify::artist", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::artist", ...args: any[]): void
    connect(sigName: "notify::comment", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::copyright", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copyright", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::disclaimer", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disclaimer", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disclaimer", ...args: any[]): void
    connect(sigName: "notify::file-module-name", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-module-name", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file-module-name", ...args: any[]): void
    connect(sigName: "notify::resolution-unit", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-unit", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-unit", ...args: any[]): void
    connect(sigName: "notify::resolution-x", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-x", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-x", ...args: any[]): void
    connect(sigName: "notify::resolution-y", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution-y", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resolution-y", ...args: any[]): void
    connect(sigName: "notify::software", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::software", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::software", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warning", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetadataStore extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.MetadataStore

    static name: string
    static $gtype: GObject.GType<MetadataStore>

    // Constructors of Gegl-0.4.Gegl.MetadataStore

    constructor(config?: MetadataStore.ConstructorProperties) 
    _init(config?: MetadataStore.ConstructorProperties): void
}

export module Node {

    // Signal callback interfaces

    /**
     * Signal callback interface for `computed`
     */
    export interface ComputedSignalCallback {
        ($obj: Node, object: Rectangle): void
    }

    /**
     * Signal callback interface for `invalidated`
     */
    export interface InvalidatedSignalCallback {
        ($obj: Node, object: Rectangle): void
    }

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        ($obj: Node, object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.Node

        cachePolicy?: CachePolicy | null
        dontCache?: boolean | null
        geglOperation?: Operation | null
        name?: string | null
        operation?: string | null
        passthrough?: boolean | null
        useOpencl?: boolean | null
    }

}

export interface Node {

    // Own properties of Gegl-0.4.Gegl.Node

    cachePolicy: CachePolicy
    dontCache: boolean
    geglOperation: Operation
    name: string | null
    operation: string | null
    passthrough: boolean
    useOpencl: boolean

    // Owm methods of Gegl-0.4.Gegl.Node

    /**
     * Make the GeglNode `graph,` take a reference on child. This reference
     * will be dropped when the reference count on the graph reaches zero.
     * @param child a GeglNode.
     * @returns the child.
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
     * Makes a connection between the pads of two nodes, one pad should
     * be a source pad the other a sink pad, order does not matter.
     * 
     * Returns TRUE if the connection was successfully made.
     * @param a_pad_name and the pad of the node we want connected.
     * @param b another node
     * @param b_pad_name and its pad to be connected.
     */
    connect(a_pad_name: string, b: Node, b_pad_name: string): boolean
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
     * @returns a newly created node. The node will be destroyed by the parent. Calling g_object_unref on a node will cause the node to be dropped by the parent. (You may also add additional references using g_object_ref/g_object_unref, but in general relying on the parents reference counting is easiest.)
     */
    create_child(operation: string): Node
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
     * @returns Returns an input proxy for the named pad. If no input proxy exists with this name a new one will be created.
     */
    get_input_proxy(pad_name: string): Node
    get_operation(): string
    /**
     * Proxies are used to route between nodes of a subgraph contained within
     * a node.
     * @param pad_name the name of the pad.
     * @returns Returns a output proxy for the named pad. If no output proxy exists with this name a new one will be created.
     */
    get_output_proxy(pad_name: string): Node
    /**
     * Returns a GeglNode that keeps a reference on a child.
     * @returns the parent of a node or NULL.
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
     * @returns pointer a #GeglRectangle
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
    get_property(property_name: string, value: any): void
    is_graph(): boolean
    /**
     * This is equivalent to gegl_node_connect (source, "output", sink, "input");
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
    progress(progress: number, message: string | null): void
    /**
     * Removes a child from a GeglNode. The reference previously held will be
     * dropped so increase the reference count before removing when reparenting
     * a child between two graphs.
     * @param child a GeglNode.
     * @returns the child.
     */
    remove_child(child: Node): Node
    set_enum_as_string(key: string, value: string): void
    set_passthrough(passthrough: boolean): void
    /**
     * This is mainly included for language bindings. Using #gegl_node_set is
     * more convenient when programming in C.
     * @param property_name the name of the property to set
     * @param value a GValue containing the value to be set in the property.
     */
    set_property(property_name: string, value: any): void
    /**
     * Sets the right value in animated properties of this node and all its
     * dependendcies to be the specified time position.
     * @param time the time to set the properties which have keyfraes attached to
     */
    set_time(time: number): void
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of the composition produced by a node (and thus also
     * the nodes contributing data to the specified node). To export a
     * gegl graph, connect the internal output node to an output proxy (see
     * #gegl_node_get_output_proxy.) and use the proxy node as the basis
     * for the serialization.
     * @param path_root filesystem path to construct relative paths from.
     */
    to_xml(path_root: string): string | null
    /**
     * Returns a freshly allocated \0 terminated string containing a XML
     * serialization of a segment of a graph from `head` to `tail` nodes.
     * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
     * @param tail a #GeglNode
     * @param path_root filesystem path to construct relative paths from.
     * @returns XML serialization of a graph segment.
     */
    to_xml_full(tail: Node | null, path_root: string): string | null

    // Own signals of Gegl-0.4.Gegl.Node

    connect(sigName: "computed", callback: Node.ComputedSignalCallback): number
    connect_after(sigName: "computed", callback: Node.ComputedSignalCallback): number
    emit(sigName: "computed", object: Rectangle, ...args: any[]): void
    connect(sigName: "invalidated", callback: Node.InvalidatedSignalCallback): number
    connect_after(sigName: "invalidated", callback: Node.InvalidatedSignalCallback): number
    emit(sigName: "invalidated", object: Rectangle, ...args: any[]): void
    connect(sigName: "progress", callback: Node.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Node.ProgressSignalCallback): number
    emit(sigName: "progress", object: number, ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.Node

    connect(sigName: "notify::cache-policy", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-policy", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-policy", ...args: any[]): void
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

export class Node extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Node

    static name: string
    static $gtype: GObject.GType<Node>

    // Constructors of Gegl-0.4.Gegl.Node

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
    static new_from_file(path: string): Node
    static new_from_serialized(chaindata: string, path_root: string): Node
    /**
     * The #GeglNode returned contains the graph described by the tree of stacks
     * in the XML document. The tree is connected to the "output" pad of the
     * returned node and thus can be used directly for processing.
     * @constructor 
     * @param xmldata a \0 terminated string containing XML data to be parsed.
     * @param path_root a file system path that relative paths in the XML will be resolved in relation to.
     * @returns a GeglNode containing the parsed XML as a subgraph.
     */
    static new_from_xml(xmldata: string, path_root: string): Node
    _init(config?: Node.ConstructorProperties): void
}

export module Operation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Operation {

    // Class property signals of Gegl-0.4.Gegl.Operation

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Operation extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Operation

    static name: string
    static $gtype: GObject.GType<Operation>

    // Constructors of Gegl-0.4.Gegl.Operation

    constructor(config?: Operation.ConstructorProperties) 
    _init(config?: Operation.ConstructorProperties): void
    static find_property(operation_type: string, property_name: string): GObject.ParamSpec
    static get_key(operation_type: string, key_name: string): string
    static get_op_version(op_name: string): string
    static get_property_key(operation_type: string, property_name: string, property_key_name: string): string
    static list_keys(operation_type: string): string[]
    static list_properties(operation_type: string): GObject.ParamSpec[]
    static list_property_keys(operation_type: string, property_name: string): string[]
}

export interface ParamAudioFragment {
}

export class ParamAudioFragment extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamAudioFragment

    static name: string
}

export interface ParamColor {
}

export class ParamColor extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamColor

    static name: string
}

export interface ParamCurve {
}

export class ParamCurve extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamCurve

    static name: string
}

export interface ParamDouble {
}

export class ParamDouble extends GObject.ParamSpecDouble {

    // Own properties of Gegl-0.4.Gegl.ParamDouble

    static name: string
}

export interface ParamEnum {
}

export class ParamEnum extends GObject.ParamSpecEnum {

    // Own properties of Gegl-0.4.Gegl.ParamEnum

    static name: string
}

export interface ParamFilePath {
}

export class ParamFilePath extends GObject.ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamFilePath

    static name: string
}

export interface ParamFormat {
}

export class ParamFormat extends GObject.ParamSpecPointer {

    // Own properties of Gegl-0.4.Gegl.ParamFormat

    static name: string
}

export interface ParamInt {
}

export class ParamInt extends GObject.ParamSpecInt {

    // Own properties of Gegl-0.4.Gegl.ParamInt

    static name: string
}

export interface ParamPath {
}

export class ParamPath extends GObject.ParamSpec {

    // Own properties of Gegl-0.4.Gegl.ParamPath

    static name: string
}

export interface ParamSeed {
}

export class ParamSeed extends GObject.ParamSpecUInt {

    // Own properties of Gegl-0.4.Gegl.ParamSeed

    static name: string
}

export interface ParamString {
}

export class ParamString extends GObject.ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamString

    static name: string
}

export interface ParamUri {
}

export class ParamUri extends GObject.ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamUri

    static name: string
}

export module Path {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Path, object: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Path {

    // Own fields of Gegl-0.4.Gegl.Path

    parent_instance: GObject.Object

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
     * Marks the path as dirty and issues an invalidation for the path rendering,
     * use this if modifying the values of a GeglPathPoint inline.
     */
    dirty(): void
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
     * @returns the length of the path.
     */
    get_length(): number
    /**
     * Get the transformation matrix of the path.
     */
    get_matrix(): /* matrix */ Matrix3
    /**
     * Retrieves the number of nodes in the path.
     * @returns the number of nodes in the path.
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
     * @returns return a string with instructions describing the string you need to free this with g_free().
     */
    to_string(): string | null

    // Own signals of Gegl-0.4.Gegl.Path

    connect(sigName: "changed", callback: Path.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Path.ChangedSignalCallback): number
    emit(sigName: "changed", object: any | null, ...args: any[]): void

    // Class property signals of Gegl-0.4.Gegl.Path

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Path extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Path

    static name: string
    static $gtype: GObject.GType<Path>

    // Constructors of Gegl-0.4.Gegl.Path

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
    static new_from_string(instructions: string): Path
    _init(config?: Path.ConstructorProperties): void
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

export module Processor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.Processor

        chunksize?: number | null
        node?: Node | null
        progress?: number | null
        rectangle?: any | null
    }

}

export interface Processor {

    // Own properties of Gegl-0.4.Gegl.Processor

    readonly chunksize: number
    node: Node
    progress: number
    rectangle: any

    // Owm methods of Gegl-0.4.Gegl.Processor

    /**
     * Returns the (cache) buffer the processor is rendering into, another way of
     * getting to the same pixel data is calling gegl_node_blit with flags
     * indicating that we want caching and accept dirty data.
     * @returns the #GeglBuffer rendered into.
     */
    get_buffer(): Buffer
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

    // Class property signals of Gegl-0.4.Gegl.Processor

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

export class Processor extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Processor

    static name: string
    static $gtype: GObject.GType<Processor>

    // Constructors of Gegl-0.4.Gegl.Processor

    constructor(config?: Processor.ConstructorProperties) 
    _init(config?: Processor.ConstructorProperties): void
}

export module Stats {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Stats {

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

    connect(sigName: "notify::active-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-threads", ...args: any[]): void
    connect(sigName: "notify::assigned-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::assigned-threads", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::assigned-threads", ...args: any[]): void
    connect(sigName: "notify::scratch-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scratch-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scratch-total", ...args: any[]): void
    connect(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-busy", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-busy", ...args: any[]): void
    connect(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-file-size", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-file-size", ...args: any[]): void
    connect(sigName: "notify::swap-queue-full", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-full", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-queue-full", ...args: any[]): void
    connect(sigName: "notify::swap-queue-stalls", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queue-stalls", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-queue-stalls", ...args: any[]): void
    connect(sigName: "notify::swap-queued-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-queued-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-queued-total", ...args: any[]): void
    connect(sigName: "notify::swap-read-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-read-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-read-total", ...args: any[]): void
    connect(sigName: "notify::swap-reading", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-reading", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-reading", ...args: any[]): void
    connect(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-total", ...args: any[]): void
    connect(sigName: "notify::swap-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-total-uncompressed", ...args: any[]): void
    connect(sigName: "notify::swap-write-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-write-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-write-total", ...args: any[]): void
    connect(sigName: "notify::swap-writing", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::swap-writing", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::swap-writing", ...args: any[]): void
    connect(sigName: "notify::tile-alloc-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-alloc-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-alloc-total", ...args: any[]): void
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
    connect(sigName: "notify::tile-cache-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-cache-total-uncompressed", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-cache-total-uncompressed", ...args: any[]): void
    connect(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-total", callback: (($obj: Stats, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-total", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Stats extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.Stats

    static name: string
    static $gtype: GObject.GType<Stats>

    // Constructors of Gegl-0.4.Gegl.Stats

    constructor(config?: Stats.ConstructorProperties) 
    _init(config?: Stats.ConstructorProperties): void
}

export module TileBackend {

    // Constructor properties interface

    export interface ConstructorProperties extends TileSource.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.TileBackend

        flushOnDestroy?: boolean | null
        format?: any | null
        tileHeight?: number | null
        tileWidth?: number | null
    }

}

export interface TileBackend {

    // Own properties of Gegl-0.4.Gegl.TileBackend

    flushOnDestroy: boolean
    readonly format: any
    readonly pxSize: number
    readonly tileHeight: number
    readonly tileSize: number
    readonly tileWidth: number

    // Own fields of Gegl-0.4.Gegl.TileBackend

    parent_instance: TileSource & GObject.Object
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
     * @returns Command result.
     */
    command(command: TileCommand, x: number, y: number, z: number, data: any | null): any | null
    get_flush_on_destroy(): boolean
    get_tile_height(): number
    get_tile_size(): number
    get_tile_width(): number
    /**
     * Gets a pointer to the GeglTileStorage that uses the backend
     * @returns the #GeglTileStorage
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

    // Class property signals of Gegl-0.4.Gegl.TileBackend

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

export class TileBackend extends TileSource {

    // Own properties of Gegl-0.4.Gegl.TileBackend

    static name: string
    static $gtype: GObject.GType<TileBackend>

    // Constructors of Gegl-0.4.Gegl.TileBackend

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
    static unlink_swap(path: string | null): void
}

export module TileHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends TileSource.ConstructorProperties {

        // Own constructor properties of Gegl-0.4.Gegl.TileHandler

        source?: GObject.Object | null
    }

}

export interface TileHandler {

    // Own fields of Gegl-0.4.Gegl.TileHandler

    parent_instance: TileSource & GObject.Object
    source: TileSource
    priv: TileHandlerPrivate

    // Owm methods of Gegl-0.4.Gegl.TileHandler

    damage_rect(rect: Rectangle): void
    damage_tile(x: number, y: number, z: number, damage: number): void
    lock(): void
    set_source(source: TileSource): void
    unlock(): void

    // Class property signals of Gegl-0.4.Gegl.TileHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TileHandler extends TileSource {

    // Own properties of Gegl-0.4.Gegl.TileHandler

    static name: string
    static $gtype: GObject.GType<TileHandler>

    // Constructors of Gegl-0.4.Gegl.TileHandler

    constructor(config?: TileHandler.ConstructorProperties) 
    _init(config?: TileHandler.ConstructorProperties): void
}

export module TileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TileSource {

    // Own fields of Gegl-0.4.Gegl.TileSource

    parent_instance: GObject.Object
    // Has conflict: command: TileSourceCommand
    padding: any[]

    // Class property signals of Gegl-0.4.Gegl.TileSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class TileSource extends GObject.Object {

    // Own properties of Gegl-0.4.Gegl.TileSource

    static name: string
    static $gtype: GObject.GType<TileSource>

    // Constructors of Gegl-0.4.Gegl.TileSource

    constructor(config?: TileSource.ConstructorProperties) 
    _init(config?: TileSource.ConstructorProperties): void
}

export interface AudioFragmentClass {

    // Own fields of Gegl-0.4.Gegl.AudioFragmentClass

    parent_class: GObject.ObjectClass
}

export abstract class AudioFragmentClass {

    // Own properties of Gegl-0.4.Gegl.AudioFragmentClass

    static name: string
}

export interface AudioFragmentPrivate {
}

export class AudioFragmentPrivate {

    // Own properties of Gegl-0.4.Gegl.AudioFragmentPrivate

    static name: string
}

export interface BufferIterator {

    // Own fields of Gegl-0.4.Gegl.BufferIterator

    length: number
    priv: BufferIteratorPriv
    items: BufferIteratorItem[]
}

export class BufferIterator {

    // Own properties of Gegl-0.4.Gegl.BufferIterator

    static name: string
}

export interface BufferIteratorItem {

    // Own fields of Gegl-0.4.Gegl.BufferIteratorItem

    data: any
    roi: Rectangle
}

export class BufferIteratorItem {

    // Own properties of Gegl-0.4.Gegl.BufferIteratorItem

    static name: string
}

export interface BufferIteratorPriv {
}

export class BufferIteratorPriv {

    // Own properties of Gegl-0.4.Gegl.BufferIteratorPriv

    static name: string
}

export interface BufferMatrix2 {

    // Own fields of Gegl-0.4.Gegl.BufferMatrix2

    coeff: number[]

    // Owm methods of Gegl-0.4.Gegl.BufferMatrix2

    determinant(): number
    is_identity(): boolean
    is_scale(): boolean
}

export class BufferMatrix2 {

    // Own properties of Gegl-0.4.Gegl.BufferMatrix2

    static name: string
}

export interface ColorClass {

    // Own fields of Gegl-0.4.Gegl.ColorClass

    parent_class: GObject.ObjectClass
}

export abstract class ColorClass {

    // Own properties of Gegl-0.4.Gegl.ColorClass

    static name: string
}

export interface ColorPrivate {
}

export class ColorPrivate {

    // Own properties of Gegl-0.4.Gegl.ColorPrivate

    static name: string
}

export interface CurveClass {

    // Own fields of Gegl-0.4.Gegl.CurveClass

    parent_class: GObject.ObjectClass
}

export abstract class CurveClass {

    // Own properties of Gegl-0.4.Gegl.CurveClass

    static name: string
}

export interface Lookup {

    // Own fields of Gegl-0.4.Gegl.Lookup

    function_: LookupFunction
    data: any
    shift: number
    positive_min: number
    positive_max: number
    negative_min: number
    negative_max: number
    bitmask: number[]
    table: number[]
}

export class Lookup {

    // Own properties of Gegl-0.4.Gegl.Lookup

    static name: string
}

export interface Matrix3 {

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
     * Check if a matrix only does an affine transformation.
     * 
     * Returns TRUE if the matrix only does an affine transformation.
     */
    is_affine(): boolean
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
     * Rounds numerical errors in `matrix` to the nearest integer.
     */
    round_error(): void
    /**
     * Serialize a #GeglMatrix3 to a string.
     * 
     * Returns a freshly allocated string representing that #GeglMatrix3, the
     * returned string should be g_free()'d.
     */
    to_string(): string | null
    /**
     * transforms the coordinates provided in `x` and `y` and changes to the
     * coordinates gotten when the transformed with the matrix.
     * @param x pointer to an x coordinate
     * @param y pointer to an y coordinate
     */
    transform_point(x: number, y: number): void
}

export class Matrix3 {

    // Own properties of Gegl-0.4.Gegl.Matrix3

    static name: string

    // Constructors of Gegl-0.4.Gegl.Matrix3

    constructor() 
    static new(): Matrix3
}

export interface MetadataHashClass {

    // Own fields of Gegl-0.4.Gegl.MetadataHashClass

    parent_class: MetadataStoreClass
}

export abstract class MetadataHashClass {

    // Own properties of Gegl-0.4.Gegl.MetadataHashClass

    static name: string
}

export interface MetadataInterface {

    // Own fields of Gegl-0.4.Gegl.MetadataInterface

    register_map: (metadata: Metadata, file_module: string, flags: number, map: MetadataMap[]) => void
    set_resolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    get_resolution: (metadata: Metadata, unit: ResolutionUnit, x: number, y: number) => boolean
    iter_lookup: (metadata: Metadata, iter: MetadataIter, key: string) => boolean
    iter_init: (metadata: Metadata, iter: MetadataIter) => void
    iter_next: (metadata: Metadata, iter: MetadataIter) => string
    iter_set_value: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
    iter_get_value: (metadata: Metadata, iter: MetadataIter, value: any) => boolean
}

/**
 * The #GeglMetadata interface structure.
 * @record 
 */
export abstract class MetadataInterface {

    // Own properties of Gegl-0.4.Gegl.MetadataInterface

    static name: string
}

export interface MetadataIter {
}

/**
 * An opaque type representing a metadata iterator.
 * @record 
 */
export class MetadataIter {

    // Own properties of Gegl-0.4.Gegl.MetadataIter

    static name: string
}

export interface MetadataMap {

    // Own fields of Gegl-0.4.Gegl.MetadataMap

    /**
     * Name of metadata variable used in the file module.
     * @field 
     */
    local_name: string
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
export class MetadataMap {

    // Own properties of Gegl-0.4.Gegl.MetadataMap

    static name: string
}

export interface MetadataStoreClass {

    // Own fields of Gegl-0.4.Gegl.MetadataStoreClass

    set_value: (self: MetadataStore, name: string, value: any) => void
    has_value: (self: MetadataStore, name: string) => boolean
    register_hook: (self: MetadataStore, file_module_name: string, flags: number) => void
}

/**
 * The class structure for the #GeglMetadataStore
 * @record 
 */
export abstract class MetadataStoreClass {

    // Own properties of Gegl-0.4.Gegl.MetadataStoreClass

    static name: string
}

export interface OperationContext {
}

export class OperationContext {

    // Own properties of Gegl-0.4.Gegl.OperationContext

    static name: string
}

export interface ParamSpecDouble {

    // Own fields of Gegl-0.4.Gegl.ParamSpecDouble

    parent_instance: GObject.ParamSpecDouble
    ui_minimum: number
    ui_maximum: number
    ui_gamma: number
    ui_step_small: number
    ui_step_big: number
    ui_digits: number

    // Owm methods of Gegl-0.4.Gegl.ParamSpecDouble

    set_digits(digits: number): void
    set_steps(small_step: number, big_step: number): void
}

export class ParamSpecDouble {

    // Own properties of Gegl-0.4.Gegl.ParamSpecDouble

    static name: string
}

export interface ParamSpecEnum {

    // Own fields of Gegl-0.4.Gegl.ParamSpecEnum

    parent_instance: GObject.ParamSpecEnum
    excluded_values: any[]

    // Owm methods of Gegl-0.4.Gegl.ParamSpecEnum

    exclude_value(value: number): void
}

export class ParamSpecEnum {

    // Own properties of Gegl-0.4.Gegl.ParamSpecEnum

    static name: string
}

export interface ParamSpecFilePath {

    // Own fields of Gegl-0.4.Gegl.ParamSpecFilePath

    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
}

export class ParamSpecFilePath {

    // Own properties of Gegl-0.4.Gegl.ParamSpecFilePath

    static name: string
}

export interface ParamSpecFormat {

    // Own fields of Gegl-0.4.Gegl.ParamSpecFormat

    parent_instance: GObject.ParamSpecPointer
}

export class ParamSpecFormat {

    // Own properties of Gegl-0.4.Gegl.ParamSpecFormat

    static name: string
}

export interface ParamSpecInt {

    // Own fields of Gegl-0.4.Gegl.ParamSpecInt

    parent_instance: GObject.ParamSpecInt
    ui_minimum: number
    ui_maximum: number
    ui_gamma: number
    ui_step_small: number
    ui_step_big: number

    // Owm methods of Gegl-0.4.Gegl.ParamSpecInt

    set_steps(small_step: number, big_step: number): void
}

export class ParamSpecInt {

    // Own properties of Gegl-0.4.Gegl.ParamSpecInt

    static name: string
}

export interface ParamSpecSeed {

    // Own fields of Gegl-0.4.Gegl.ParamSpecSeed

    parent_instance: GObject.ParamSpecUInt
    ui_minimum: number
    ui_maximum: number
}

export class ParamSpecSeed {

    // Own properties of Gegl-0.4.Gegl.ParamSpecSeed

    static name: string
}

export interface ParamSpecString {

    // Own fields of Gegl-0.4.Gegl.ParamSpecString

    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
}

export class ParamSpecString {

    // Own properties of Gegl-0.4.Gegl.ParamSpecString

    static name: string
}

export interface ParamSpecUri {

    // Own fields of Gegl-0.4.Gegl.ParamSpecUri

    parent_instance: GObject.ParamSpecString
    no_validate: number
    null_ok: number
}

export class ParamSpecUri {

    // Own properties of Gegl-0.4.Gegl.ParamSpecUri

    static name: string
}

export interface PathClass {
}

export abstract class PathClass {

    // Own properties of Gegl-0.4.Gegl.PathClass

    static name: string
}

export interface PathItem {

    // Own fields of Gegl-0.4.Gegl.PathItem

    type: number
    point: PathPoint[]
}

export class PathItem {

    // Own properties of Gegl-0.4.Gegl.PathItem

    static name: string
}

export interface PathList {

    // Own fields of Gegl-0.4.Gegl.PathList

    next: any
    d: PathItem
}

export class PathList {

    // Own properties of Gegl-0.4.Gegl.PathList

    static name: string
}

export interface PathPoint {

    // Own fields of Gegl-0.4.Gegl.PathPoint

    x: number
    y: number
}

export class PathPoint {

    // Own properties of Gegl-0.4.Gegl.PathPoint

    static name: string
}

export interface Random {

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

export class Random {

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
    static new_with_seed(seed: number): Random
}

export interface Rectangle {

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
    align_to_buffer(rectangle: Rectangle, buffer: Buffer, alignment: RectangleAlignment): boolean
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
     * Returns TRUE if the width or height of `rectangle` is 0.
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
    subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean
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

export class Rectangle {

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
    static infinite_plane(): Rectangle
}

export interface Sampler {

    // Owm methods of Gegl-0.4.Gegl.Sampler

    /**
     * Perform a sampling with the provided `sampler`.
     * @param x x coordinate to sample
     * @param y y coordinate to sample
     * @param scale matrix representing extent of sampling area in source buffer.
     * @param output memory location for output data.
     * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
     */
    get(x: number, y: number, scale: BufferMatrix2, output: any | null, repeat_mode: AbyssPolicy): void
    get_context_rect(): Rectangle
}

export class Sampler {

    // Own properties of Gegl-0.4.Gegl.Sampler

    static name: string
}

export interface Tile {
}

export class Tile {

    // Own properties of Gegl-0.4.Gegl.Tile

    static name: string
}

export interface TileBackendClass {

    // Own fields of Gegl-0.4.Gegl.TileBackendClass

    parent_class: TileSourceClass
    padding: any[]
}

export abstract class TileBackendClass {

    // Own properties of Gegl-0.4.Gegl.TileBackendClass

    static name: string
}

export interface TileBackendPrivate {
}

export class TileBackendPrivate {

    // Own properties of Gegl-0.4.Gegl.TileBackendPrivate

    static name: string
}

export interface TileCopyParams {

    // Own fields of Gegl-0.4.Gegl.TileCopyParams

    dst_buffer: Buffer
    dst_x: number
    dst_y: number
    dst_z: number
}

export class TileCopyParams {

    // Own properties of Gegl-0.4.Gegl.TileCopyParams

    static name: string
}

export interface TileHandlerClass {

    // Own fields of Gegl-0.4.Gegl.TileHandlerClass

    parent_class: TileSourceClass
}

export abstract class TileHandlerClass {

    // Own properties of Gegl-0.4.Gegl.TileHandlerClass

    static name: string
}

export interface TileHandlerPrivate {
}

export class TileHandlerPrivate {

    // Own properties of Gegl-0.4.Gegl.TileHandlerPrivate

    static name: string
}

export interface TileSourceClass {

    // Own fields of Gegl-0.4.Gegl.TileSourceClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class TileSourceClass {

    // Own properties of Gegl-0.4.Gegl.TileSourceClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END