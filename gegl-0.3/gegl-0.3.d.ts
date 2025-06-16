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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Gegl {
    /**
     * Gegl-0.3
     */

    export namespace AbyssPolicy {
        export const $gtype: GObject.GType<AbyssPolicy>;
    }

    enum AbyssPolicy {
        NONE,
        CLAMP,
        LOOP,
        BLACK,
        WHITE,
    }

    export namespace DistanceMetric {
        export const $gtype: GObject.GType<DistanceMetric>;
    }

    enum DistanceMetric {
        EUCLIDEAN,
        MANHATTAN,
        CHEBYSHEV,
    }

    export namespace DitherMethod {
        export const $gtype: GObject.GType<DitherMethod>;
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

    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }

    enum Orientation {
        HORIZONTAL,
        VERTICAL,
    }

    export namespace SamplerType {
        export const $gtype: GObject.GType<SamplerType>;
    }

    enum SamplerType {
        NEAREST,
        LINEAR,
        CUBIC,
        NOHALO,
        LOHALO,
    }

    export namespace SplitStrategy {
        export const $gtype: GObject.GType<SplitStrategy>;
    }

    enum SplitStrategy {
        AUTO,
        HORIZONTAL,
        VERTICAL,
    }

    export namespace TileCommand {
        export const $gtype: GObject.GType<TileCommand>;
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
    const AUTO_ROWSTRIDE: number;
    const BUFFER_MAX_ITERATORS: number;
    const CH_BACK_CENTER: number;
    const CH_BACK_LEFT: number;
    const CH_BACK_RIGHT: number;
    const CH_FRONT_CENTER: number;
    const CH_FRONT_LEFT: number;
    const CH_FRONT_LEFT_OF_CENTER: number;
    const CH_FRONT_RIGHT: number;
    const CH_FRONT_RIGHT_OF_CENTER: number;
    const CH_LAYOUT_2POINT1: number;
    const CH_LAYOUT_2_1: number;
    const CH_LAYOUT_2_2: number;
    const CH_LAYOUT_3POINT1: number;
    const CH_LAYOUT_4POINT0: number;
    const CH_LAYOUT_4POINT1: number;
    const CH_LAYOUT_5POINT0: number;
    const CH_LAYOUT_5POINT0_BACK: number;
    const CH_LAYOUT_5POINT1: number;
    const CH_LAYOUT_5POINT1_BACK: number;
    const CH_LAYOUT_6POINT0: number;
    const CH_LAYOUT_6POINT0_FRONT: number;
    const CH_LAYOUT_6POINT1: number;
    const CH_LAYOUT_6POINT1_BACK: number;
    const CH_LAYOUT_6POINT1_FRONT: number;
    const CH_LAYOUT_7POINT0: number;
    const CH_LAYOUT_7POINT0_FRONT: number;
    const CH_LAYOUT_7POINT1: number;
    const CH_LAYOUT_7POINT1_WIDE: number;
    const CH_LAYOUT_7POINT1_WIDE_BACK: number;
    const CH_LAYOUT_HEXADECAGONAL: number;
    const CH_LAYOUT_HEXAGONAL: number;
    const CH_LAYOUT_NATIVE: number;
    const CH_LAYOUT_OCTAGONAL: number;
    const CH_LAYOUT_QUAD: number;
    const CH_LAYOUT_STEREO: number;
    const CH_LAYOUT_STEREO_DOWNMIX: number;
    const CH_LAYOUT_SURROUND: number;
    const CH_LOW_FREQUENCY: number;
    const CH_LOW_FREQUENCY_2: number;
    const CH_SIDE_LEFT: number;
    const CH_SIDE_RIGHT: number;
    const CH_STEREO_LEFT: number;
    const CH_STEREO_RIGHT: number;
    const CH_SURROUND_DIRECT_LEFT: number;
    const CH_SURROUND_DIRECT_RIGHT: number;
    const CH_TOP_BACK_CENTER: number;
    const CH_TOP_BACK_LEFT: number;
    const CH_TOP_BACK_RIGHT: number;
    const CH_TOP_CENTER: number;
    const CH_TOP_FRONT_CENTER: number;
    const CH_TOP_FRONT_LEFT: number;
    const CH_TOP_FRONT_RIGHT: number;
    const CH_WIDE_LEFT: number;
    const CH_WIDE_RIGHT: number;
    const FLOAT_EPSILON: number;
    const LOOKUP_MAX_ENTRIES: number;
    const MAJOR_VERSION: number;
    const MAX_AUDIO_CHANNELS: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PARAM_NO_VALIDATE: number;
    /**
     * Disable OpenCL
     */
    function cl_disable(): void;
    /**
     * Initialize and enable OpenCL, calling this function again
     * will re-enable OpenCL if it has been disabled.
     * @returns True if OpenCL was initialized
     */
    function cl_init(): boolean;
    /**
     * Check if OpenCL is enabled.
     * @returns True if OpenCL is initialized and enabled
     */
    function cl_is_accelerated(): boolean;
    /**
     * Returns a GeglConfig object with properties that can be manipulated to control
     * GEGLs behavior.
     * @returns a #GeglConfig
     */
    function config(): Config;
    /**
     * Create a node chain from an unparsed commandline string.
     * @param ops an argv style, NULL terminated array of arguments
     * @param op_start node to pass in as input of chain
     * @param op_end node to get processed data
     * @param time the time to use for interpolatino of keyframed values
     * @param rel_dim relative dimension to scale rel suffixed values by
     * @param path_root path in filesystem to use as relative root
     */
    function create_chain(
        ops: string,
        op_start: Node,
        op_end: Node,
        time: number,
        rel_dim: number,
        path_root: string,
    ): void;
    /**
     * Create a node chain from argv style list of op data.
     * @param ops an argv style, NULL terminated array of arguments
     * @param op_start node to pass in as input of chain
     * @param op_end node to get processed data
     * @param time the time to use for interpolatino of keyframed values
     * @param rel_dim relative dimension to scale rel suffixed values by
     * @param path_root path in filesystem to use as relative root
     */
    function create_chain_argv(
        ops: string,
        op_start: Node,
        op_end: Node,
        time: number,
        rel_dim: number,
        path_root: string,
    ): void;
    /**
     * Call this function when you're done using GEGL. It will clean up
     * caches and write/dump debug information if the correct debug flags
     * are set.
     */
    function exit(): void;
    /**
     * Returns a value sutable to pass to the GeglBuffer constructor
     * or any other property that expects a Babl format.
     * @param format_name A Babl format name, e.g. "RGBA float"
     * @returns the format pointer
     */
    function format(format_name: string): GObject.Value | null;
    function format_get_name(format: GObject.Value | any): string | null;
    /**
     * This function fetches the version of the GEGL library being used by
     * the running process.
     */
    function get_version(): [number, number, number];
    /**
     * Dump the bounds and format of each node in the graph to stdout.
     * @param node The final node of the graph
     */
    function graph_dump_outputs(node: Node): void;
    /**
     * Dump the region that will be rendered for each node to fulfill
     * the request.
     * @param node The final node of the graph
     * @param roi The request rectangle
     */
    function graph_dump_request(node: Node, roi: Rectangle): void;
    function has_operation(operation_type: string): boolean;
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
    function init(argv?: string[] | null): string[] | null;
    function is_main_thread(): boolean;
    function list_operations(): string[];
    /**
     * Load all gegl modules found in the given directory.
     * @param path the directory to load modules from
     */
    function load_module_directory(path: string): void;
    /**
     * Creates a new #GParamSpec instance specifying a #GeglAudioFragment property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_audio_fragment(
        name: string,
        nick: string,
        blurb: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Creates a new #GParamSpec instance specifying a #GeglColor property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_color the default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_color(
        name: string,
        nick: string,
        blurb: string,
        default_color: Color,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Creates a new #GParamSpec instance specifying a #GeglColor property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_color_string the default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_color_from_string(
        name: string,
        nick: string,
        blurb: string,
        default_color_string: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Get the default color value of the param spec
     * @param self a #GeglColor #GParamSpec
     * @returns the default #GeglColor
     */
    function param_spec_color_get_default(self: GObject.ParamSpec): Color;
    /**
     * Creates a new #GParamSpec instance specifying a #GeglCurve property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_curve the default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_curve(
        name: string,
        nick: string,
        blurb: string,
        default_curve: Curve,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
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
    function param_spec_double(
        name: string,
        nick: string,
        blurb: string,
        minimum: number,
        maximum: number,
        default_value: number,
        ui_minimum: number,
        ui_maximum: number,
        ui_gamma: number,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
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
    function param_spec_enum(
        name: string,
        nick: string,
        blurb: string,
        enum_type: GObject.GType,
        default_value: number,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
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
    function param_spec_file_path(
        name: string,
        nick: string,
        blurb: string,
        no_validate: boolean,
        null_ok: boolean,
        default_value: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Creates a new #GeglParamSpecFormat instance specifying a Babl format.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_format(
        name: string,
        nick: string,
        blurb: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    function param_spec_get_property_key(pspec: GObject.ParamSpec, key_name: string): string;
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
    function param_spec_int(
        name: string,
        nick: string,
        blurb: string,
        minimum: number,
        maximum: number,
        default_value: number,
        ui_minimum: number,
        ui_maximum: number,
        ui_gamma: number,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Creates a new #GParamSpec instance specifying a #GeglPath property.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_path the default value for the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_path(
        name: string,
        nick: string,
        blurb: string,
        default_path: Path,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Creates a new #GeglParamSpecSeed instance specifying an integer random seed.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     */
    function param_spec_seed(
        name: string,
        nick: string,
        blurb: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    function param_spec_set_property_key(pspec: GObject.ParamSpec, key_name: string, value: string): void;
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
    function param_spec_string(
        name: string,
        nick: string,
        blurb: string,
        no_validate: boolean,
        null_ok: boolean,
        default_value: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
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
    function param_spec_uri(
        name: string,
        nick: string,
        blurb: string,
        no_validate: boolean,
        null_ok: boolean,
        default_value: string,
        flags: GObject.ParamFlags | null,
    ): GObject.ParamSpec;
    /**
     * Returns a GeglRectangle that represents an infininte plane.
     */
    function rectangle_infinite_plane(): Rectangle;
    /**
     * Resets the cumulative data gathered by the #GeglStats object returned
     * by #gegl_stats().
     */
    function reset_stats(): void;
    function serialize(start: Node, end: Node, basepath: string, serialize_flags: SerializeFlag | null): string;
    /**
     * Returns a GeglStats object with properties that can be read to monitor
     * GEGL statistics.
     * @returns a #GeglStats
     */
    function stats(): Stats;
    interface LookupFunction {
        (value: number, data?: any | null): number;
    }
    interface NodeFunction {
        (node: PathItem): void;
    }
    interface SamplerGetFun {
        (self: Sampler, x: number, y: number, scale: Matrix2, output: any | null, repeat_mode: AbyssPolicy): void;
    }
    interface TileCallback {
        (tile: Tile): void;
    }
    interface TileSourceCommand {
        (
            gegl_tile_source: TileSource,
            command: TileCommand,
            x: number,
            y: number,
            z: number,
            data?: any | null,
        ): any | null;
    }

    export namespace AccessMode {
        export const $gtype: GObject.GType<AccessMode>;
    }

    enum AccessMode {
        READ,
        WRITE,
        READWRITE,
    }

    export namespace BlitFlags {
        export const $gtype: GObject.GType<BlitFlags>;
    }

    enum BlitFlags {
        DEFAULT,
        CACHE,
        DIRTY,
    }

    export namespace PadType {
        export const $gtype: GObject.GType<PadType>;
    }

    enum PadType {
        OUTPUT,
        INPUT,
    }

    export namespace SerializeFlag {
        export const $gtype: GObject.GType<SerializeFlag>;
    }

    enum SerializeFlag {
        TRIM_DEFAULTS,
        VERSION,
        INDENT,
    }
    namespace AudioFragment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::string': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            string: string;
        }
    }

    class AudioFragment extends GObject.Object {
        static $gtype: GObject.GType<AudioFragment>;

        // Properties

        get string(): string;
        set string(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AudioFragment.SignalSignatures;

        // Fields

        data: number[];

        // Constructors

        constructor(properties?: Partial<AudioFragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            sample_rate: number,
            channels: number,
            channel_layout: number,
            max_samples: number,
        ): AudioFragment;

        // Signals

        connect<K extends keyof AudioFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioFragment.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AudioFragment.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AudioFragment.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AudioFragment.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AudioFragment.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_channel_layout(): number;
        get_channels(): number;
        get_max_samples(): number;
        get_pos(): number;
        get_sample_count(): number;
        get_sample_rate(): number;
        set_channel_layout(channel_layout: number): void;
        set_channels(channels: number): void;
        set_max_samples(max_samples: number): void;
        set_pos(pos: number): void;
        set_sample_count(sample_count: number): void;
        set_sample_rate(sample_rate: number): void;
    }

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends TileHandler.SignalSignatures {
            changed: (arg0: Rectangle) => void;
            'notify::abyss-height': (pspec: GObject.ParamSpec) => void;
            'notify::abyss-width': (pspec: GObject.ParamSpec) => void;
            'notify::abyss-x': (pspec: GObject.ParamSpec) => void;
            'notify::abyss-y': (pspec: GObject.ParamSpec) => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::pixels': (pspec: GObject.ParamSpec) => void;
            'notify::px-size': (pspec: GObject.ParamSpec) => void;
            'notify::shift-x': (pspec: GObject.ParamSpec) => void;
            'notify::shift-y': (pspec: GObject.ParamSpec) => void;
            'notify::tile-height': (pspec: GObject.ParamSpec) => void;
            'notify::tile-width': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TileHandler.ConstructorProps {
            abyss_height: number;
            abyssHeight: number;
            abyss_width: number;
            abyssWidth: number;
            abyss_x: number;
            abyssX: number;
            abyss_y: number;
            abyssY: number;
            backend: TileBackend;
            format: any;
            height: number;
            path: string;
            pixels: number;
            px_size: number;
            pxSize: number;
            shift_x: number;
            shiftX: number;
            shift_y: number;
            shiftY: number;
            tile_height: number;
            tileHeight: number;
            tile_width: number;
            tileWidth: number;
            width: number;
            x: number;
            y: number;
        }
    }

    class Buffer extends TileHandler {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        get abyss_height(): number;
        get abyssHeight(): number;
        get abyss_width(): number;
        get abyssWidth(): number;
        get abyss_x(): number;
        get abyssX(): number;
        get abyss_y(): number;
        get abyssY(): number;
        get backend(): TileBackend;
        get format(): any;
        set format(val: any);
        get height(): number;
        set height(val: number);
        get path(): string;
        get pixels(): number;
        get px_size(): number;
        get pxSize(): number;
        get shift_x(): number;
        get shiftX(): number;
        get shift_y(): number;
        get shiftY(): number;
        get tile_height(): number;
        get tileHeight(): number;
        get tile_width(): number;
        get tileWidth(): number;
        get width(): number;
        set width(val: number);
        get x(): number;
        set x(val: number);
        get y(): number;
        set y(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](format_name: string, x: number, y: number, width: number, height: number): Buffer;

        static new_for_backend(extent: Rectangle, backend: TileBackend): Buffer;

        // Signals

        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Loads an existing GeglBuffer from disk, if it has previously been saved with
         * gegl_buffer_save it should be possible to open through any GIO transport, buffers
         * that have been used as swap needs random access to be opened.
         * @param path the path to a gegl buffer on disk.
         */
        static load(path: string): Buffer;
        /**
         * Open an existing on-disk GeglBuffer, this buffer is opened in a monitored
         * state so multiple instances of gegl can share the same buffer. Sets on
         * one buffer are reflected in the other.
         * @param path the path to a gegl buffer on disk.
         */
        static open(path: string): Buffer;

        // Methods

        /**
         * Add a new tile handler in the existing chain of tile handler of a GeglBuffer.
         * @param handler a #GeglTileHandler
         */
        add_handler(handler?: any | null): void;
        /**
         * Clears the provided rectangular region by setting all the associated memory
         * to 0.
         * @param roi a rectangular region
         */
        clear(roi: Rectangle): void;
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
        copy(src_rect: Rectangle, repeat_mode: AbyssPolicy | null, dst: Buffer, dst_rect: Rectangle): void;
        /**
         * Create a new sub GeglBuffer, that is a view on a larger buffer.
         * @param extent coordinates of new buffer.
         * @returns the new sub buffer
         */
        create_sub_buffer(extent: Rectangle): Buffer;
        /**
         * Duplicate a buffer (internally uses gegl_buffer_copy). Aligned tiles
         * will create copy-on-write clones in the new buffer.
         * @returns the new buffer
         */
        dup(): Buffer;
        /**
         * Flushes all unsaved data to disk, this is not necessary for shared
         * geglbuffers opened with gegl_buffer_open since they auto-sync on writes.
         */
        flush(): void;
        /**
         * Return the abyss extent of a buffer, this expands out to the parents extent in
         * subbuffers.
         */
        get_abyss(): Rectangle;
        /**
         * Returns a pointer to a GeglRectangle structure defining the geometry of a
         * specific GeglBuffer, this is also the default width/height of buffers passed
         * in to gegl_buffer_set and gegl_buffer_get (with a scale of 1.0 at least).
         */
        get_extent(): Rectangle;
        /**
         * Fetch a rectangular linear buffer of pixel data from the GeglBuffer.
         * @param rect the coordinates we want to retrieve data from.
         * @param scale sampling scale, 1.0 = pixel for pixel 2.0 = magnify, 0.5 scale down.
         * @param format_name the format to store data in, if NULL the format of the buffer is used.
         * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
         * @returns A copy of the requested data
         */
        get(rect: Rectangle, scale: number, format_name: string | null, repeat_mode: AbyssPolicy | null): Uint8Array;
        /**
         * Store a linear raster buffer into the GeglBuffer.
         * @param rect the rectangle to write.
         * @param format_name the format of the input data.
         * @param src pixel data to write to @buffer.
         */
        set(rect: Rectangle, format_name: string, src: Uint8Array | string): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * This function makes sure GeglBuffer and underlying code is aware of changes
         * being made to the linear buffer. If the request was not a compatible one
         * it is written back to the buffer. Multiple concurrent users can be handed
         * the same buffer (both raw access and converted).
         * @param linear a previously returned buffer.
         */
        linear_close(linear?: any | null): void;
        /**
         * Remove the provided tile handler in the existing chain of tile handler of a GeglBuffer.
         * @param handler a #GeglTileHandler
         */
        remove_handler(handler?: any | null): void;
        /**
         * Clean up resources used by sampling framework of buffer (will be freed
         * automatically later when the buffer is destroyed, for long lived buffers
         * cleaning up the sampling infrastructure when it has been used for its
         * purpose will sometimes be more efficient).
         */
        sample_cleanup(): void;
        /**
         * Write a GeglBuffer to a file.
         * @param path the path where the gegl buffer will be saved, any writable GIO uri is valid.
         * @param roi the region of interest to write, this is the tiles that will be collected and written to disk.
         */
        save(path: string, roi: Rectangle): void;
        /**
         * Changes the size and position of the abyss rectangle of a buffer.
         *
         * Returns TRUE if the change of abyss was successful.
         * @param abyss new abyss.
         */
        set_abyss(abyss: Rectangle): boolean;
        /**
         * Sets the region covered by rect to the specified color.
         * @param rect a rectangular region to fill with a color.
         * @param color the GeglColor to fill with.
         */
        set_color(rect: Rectangle, color: Color): void;
        /**
         * Changes the size and position that is considered active in a buffer, this
         * operation is valid on any buffer, reads on subbuffers outside the master
         * buffer's extent are at the moment undefined.
         *
         * Returns TRUE if the change of extent was successful.
         * @param extent new extent.
         */
        set_extent(extent: Rectangle): boolean;
        /**
         * Fill a region with a repeating pattern. Offsets parameters are
         * relative to the origin (0, 0) and not to the rectangle. So be carefull
         * about the origin of `pattern` and `buffer` extents.
         * @param rect the region of @buffer to fill
         * @param pattern a #GeglBuffer to be repeated as a pattern
         * @param x_offset where the pattern starts horizontally
         * @param y_offset where the pattern starts vertical
         */
        set_pattern(rect: Rectangle, pattern: Buffer, x_offset: number, y_offset: number): void;
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
        signal_connect(detailed_signal: string, c_handler: GObject.Callback): number;
    }

    namespace Color {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::string': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            string: string;
        }
    }

    class Color extends GObject.Object {
        static $gtype: GObject.GType<Color>;

        // Properties

        get string(): string;
        set string(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Color.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Color.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](string: string): Color;

        // Signals

        connect<K extends keyof Color.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Color.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Color.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Color.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Color.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Color.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a copy of `color`.
         * @returns A new copy of @color.
         */
        duplicate(): Color;
        /**
         * Get the component values of the color in `format`.
         * @param format A Babl pointer
         * @returns The color components
         */
        get_components(format: GObject.Value | any): number[];
        /**
         * Retrieves the current set color as linear light non premultipled RGBA data,
         * any of the return pointers can be omitted.
         */
        get_rgba(): [number, number, number, number];
        /**
         * Set the color using the component values as `format`.
         * @param format A Babl pointer
         * @param components The color components.
         */
        set_components(format: GObject.Value | any, components: number[]): void;
        /**
         * Retrieves the current set color as linear light non premultipled RGBA data
         * @param red red value
         * @param green green value
         * @param blue blue value
         * @param alpha alpha value
         */
        set_rgba(red: number, green: number, blue: number, alpha: number): void;
    }

    namespace Config {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-license': (pspec: GObject.ParamSpec) => void;
            'notify::chunk-size': (pspec: GObject.ParamSpec) => void;
            'notify::quality': (pspec: GObject.ParamSpec) => void;
            'notify::queue-size': (pspec: GObject.ParamSpec) => void;
            'notify::swap': (pspec: GObject.ParamSpec) => void;
            'notify::threads': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-size': (pspec: GObject.ParamSpec) => void;
            'notify::tile-height': (pspec: GObject.ParamSpec) => void;
            'notify::tile-width': (pspec: GObject.ParamSpec) => void;
            'notify::use-opencl': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_license: string;
            applicationLicense: string;
            chunk_size: number;
            chunkSize: number;
            quality: number;
            queue_size: number;
            queueSize: number;
            swap: string;
            threads: number;
            tile_cache_size: number;
            tileCacheSize: number;
            tile_height: number;
            tileHeight: number;
            tile_width: number;
            tileWidth: number;
            use_opencl: boolean;
            useOpencl: boolean;
        }
    }

    class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        // Properties

        get application_license(): string;
        set application_license(val: string);
        get applicationLicense(): string;
        set applicationLicense(val: string);
        get chunk_size(): number;
        set chunk_size(val: number);
        get chunkSize(): number;
        set chunkSize(val: number);
        get quality(): number;
        set quality(val: number);
        get queue_size(): number;
        set queue_size(val: number);
        get queueSize(): number;
        set queueSize(val: number);
        get swap(): string;
        set swap(val: string);
        get threads(): number;
        set threads(val: number);
        get tile_cache_size(): number;
        set tile_cache_size(val: number);
        get tileCacheSize(): number;
        set tileCacheSize(val: number);
        get tile_height(): number;
        set tile_height(val: number);
        get tileHeight(): number;
        set tileHeight(val: number);
        get tile_width(): number;
        set tile_width(val: number);
        get tileWidth(): number;
        set tileWidth(val: number);
        get use_opencl(): boolean;
        set use_opencl(val: boolean);
        get useOpencl(): boolean;
        set useOpencl(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Config.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Config.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Curve {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Curve extends GObject.Object {
        static $gtype: GObject.GType<Curve>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Curve.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Curve.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](y_min: number, y_max: number): Curve;

        static new_default(): Curve;

        // Signals

        connect<K extends keyof Curve.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Curve.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Curve.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Curve.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Curve.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Curve.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a point to the curve at `x` `y` (replacing the value exactly for `x` if it
         * already exists.
         * @param x x coordinate
         * @param y y coordinate
         */
        add_point(x: number, y: number): number;
        /**
         * Retrieve the number of points in the curve.
         *
         * Returns the number of points for the coordinates in the curve.
         * @param x
         */
        calc_value(x: number): number;
        /**
         * Create a copy of `curve`.
         * @returns A new copy of @curve.
         */
        duplicate(): Curve;
        /**
         * Retrive the coordinates for an index.
         * @param index the position of the value number to retrieve.
         */
        get_point(index: number): [number, number];
        /**
         * Get the bounds on the values of the curve and store the values in
         * the return locaitons provided in `min_y` and `max_y`.
         */
        get_y_bounds(): [number, number];
        /**
         * Retrieve the number of points in the curve.
         *
         * Returns the number of points for the coordinates in the curve.
         */
        num_points(): number;
        /**
         * Replace an existing point in a curve.
         * @param index the position of the value number to retrieve.
         * @param x x coordinate
         * @param y y coordinate
         */
        set_point(index: number, x: number, y: number): void;
    }

    namespace Node {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            computed: (arg0: Rectangle) => void;
            invalidated: (arg0: Rectangle) => void;
            progress: (arg0: number) => void;
            'notify::dont-cache': (pspec: GObject.ParamSpec) => void;
            'notify::gegl-operation': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::operation': (pspec: GObject.ParamSpec) => void;
            'notify::passthrough': (pspec: GObject.ParamSpec) => void;
            'notify::use-opencl': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dont_cache: boolean;
            dontCache: boolean;
            gegl_operation: Operation;
            geglOperation: Operation;
            name: string;
            operation: string;
            passthrough: boolean;
            use_opencl: boolean;
            useOpencl: boolean;
        }
    }

    class Node extends GObject.Object {
        static $gtype: GObject.GType<Node>;

        // Properties

        get dont_cache(): boolean;
        set dont_cache(val: boolean);
        get dontCache(): boolean;
        set dontCache(val: boolean);
        get gegl_operation(): Operation;
        set gegl_operation(val: Operation);
        get geglOperation(): Operation;
        set geglOperation(val: Operation);
        get name(): string;
        set name(val: string);
        get operation(): string;
        set operation(val: string);
        get passthrough(): boolean;
        set passthrough(val: boolean);
        get use_opencl(): boolean;
        set use_opencl(val: boolean);
        get useOpencl(): boolean;
        set useOpencl(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Node.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Node.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Node;

        static new_from_file(path: string): Node;

        static new_from_serialized(chaindata: string, path_root: string): Node;

        static new_from_xml(xmldata: string, path_root: string): Node;

        // Signals

        connect<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Node.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Node.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Node.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Node.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Make the GeglNode `graph,` take a reference on child. This reference
         * will be dropped when the reference count on the graph reaches zero.
         * @param child a GeglNode.
         * @returns the child.
         */
        add_child(child: Node): Node;
        /**
         * Render a rectangular region from a node to the given buffer.
         * @param buffer the #GeglBuffer to render to.
         * @param roi the rectangle to render.
         * @param level mipmap level to render (0 for all)
         * @param abyss_policy
         */
        blit_buffer(
            buffer: Buffer | null,
            roi: Rectangle | null,
            level: number,
            abyss_policy: AbyssPolicy | null,
        ): void;
        /**
         * Makes a connection between the pads of two nodes.
         *
         * Returns TRUE if the connection was successfully made.
         * @param input_pad_name the name of the input pad we are connecting to
         * @param source the node producing data we want to connect.
         * @param output_pad_name the output pad we want to use on the source.
         */
        connect_from(input_pad_name: string, source: Node, output_pad_name: string): boolean;
        /**
         * Makes a connection between the pads of two nodes.
         *
         * Returns TRUE if the connection was successfully made.
         * @param output_pad_name the output pad we want to use on the source.
         * @param sink the node we're connecting an input to
         * @param input_pad_name the name of the input pad we are connecting to
         */
        connect_to(output_pad_name: string, sink: Node, input_pad_name: string): boolean;
        /**
         * Creates a new processing node that performs the specified operation.
         * All properties of the operation will have their default values. This
         * is included as an addition to #gegl_node_new_child in the public API to have
         * a non varargs entry point for bindings as well as sometimes simpler more
         * readable code.
         * @param operation the type of node to create.
         * @returns a newly created node. The node will be destroyed by the parent. Calling g_object_unref on a node will cause the node to be dropped by the parent. (You may also add additional references using g_object_ref/g_object_unref, but in general relying on the parents reference counting is easiest.)
         */
        create_child(operation: string): Node;
        /**
         * Performs hit detection by returning the node providing data at a given
         * coordinate pair. Currently operates only on bounding boxes and not
         * pixel data.
         * @param x x coordinate
         * @param y y coordinate
         * @returns the GeglNode providing the data ending up at @x,@y in the output of @node.
         */
        detect(x: number, y: number): Node;
        /**
         * Disconnects node connected to `input_pad` of `node` (if any).
         *
         * Returns TRUE if a connection was broken.
         * @param input_pad the input pad to disconnect.
         */
        disconnect(input_pad: string): boolean;
        // Conflicted with GObject.Object.disconnect
        disconnect(...args: never[]): any;
        find_property(property_name: string): GObject.ParamSpec;
        get_children(): Node[];
        /**
         * Retrieve which pads on which nodes are connected to a named output_pad,
         * and the number of connections. Both the location for the generated
         * nodes array and pads array can be left as NULL. If they are non NULL
         * both should be freed with g_free. The arrays are NULL terminated.
         *
         * Returns the number of consumers connected to this output_pad.
         * @param output_pad the output pad we want to know who uses.
         */
        get_consumers(output_pad: string): [number, Node[] | null, string[] | null];
        get_gegl_operation(): Operation | null;
        /**
         * Proxies are used to route between nodes of a subgraph contained within
         * a node.
         * @param pad_name the name of the pad.
         * @returns Returns an input proxy for the named pad. If no input proxy exists with this name a new one will be created.
         */
        get_input_proxy(pad_name: string): Node;
        get_operation(): string;
        /**
         * Proxies are used to route between nodes of a subgraph contained within
         * a node.
         * @param pad_name the name of the pad.
         * @returns Returns a output proxy for the named pad. If no output proxy exists with this name a new one will be created.
         */
        get_output_proxy(pad_name: string): Node;
        /**
         * Returns a GeglNode that keeps a reference on a child.
         * @returns the parent of a node or NULL.
         */
        get_parent(): Node;
        get_passthrough(): boolean;
        get_producer(input_pad_name: string, output_pad_name?: string | null): Node;
        /**
         * Returns TRUE if the node has a pad with the specified name
         * @param pad_name the pad name we are looking for
         */
        has_pad(pad_name: string): boolean;
        /**
         * Returns the position and dimensions of a rectangle spanning the area
         * defined by a node.
         * @returns pointer a #GeglRectangle
         */
        get_bounding_box(): Rectangle;
        get_property(property_name: string): unknown;
        // Conflicted with GObject.Object.get_property
        get_property(...args: never[]): any;
        /**
         * Synthetic sugar for linking the "output" pad of `source` to the "input"
         * pad of `sink`.
         * @param sink the consumer of data.
         */
        link(sink: Node): void;
        /**
         * If the node has any input pads this function returns a null terminated
         * array of pad names, otherwise it returns NULL. The return value can be
         * freed with g_strfreev().
         */
        list_input_pads(): string[];
        /**
         * If the node has any output pads this function returns a null terminated
         * array of pad names, otherwise it returns NULL. The return value can be
         * freed with g_strfreev().
         */
        list_output_pads(): string[];
        new_processor(rectangle: Rectangle): Processor;
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
        process(): void;
        progress(progress: number, message: string): void;
        /**
         * Removes a child from a GeglNode. The reference previously held will be
         * dropped so increase the reference count before removing when reparenting
         * a child between two graphs.
         * @param child a GeglNode.
         * @returns the child.
         */
        remove_child(child: Node): Node;
        set_passthrough(passthrough: boolean): void;
        /**
         * This is mainly included for language bindings. Using #gegl_node_set is
         * more convenient when programming in C.
         * @param property_name the name of the property to set
         * @param value a GValue containing the value to be set in the property.
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Returns a freshly allocated \0 terminated string containing a XML
         * serialization of the composition produced by a node (and thus also
         * the nodes contributing data to the specified node). To export a
         * gegl graph, connect the internal output node to an output proxy (see
         * #gegl_node_get_output_proxy.) and use the proxy node as the basis
         * for the serialization.
         * @param path_root filesystem path to construct relative paths from.
         */
        to_xml(path_root: string): string;
        /**
         * Returns a freshly allocated \0 terminated string containing a XML
         * serialization of a segment of a graph from `head` to `tail` nodes.
         * If `tail` is %NULL then this behaves just like #gegl_node_to_xml.
         * @param tail a #GeglNode
         * @param path_root filesystem path to construct relative paths from.
         * @returns XML serialization of a graph segment.
         */
        to_xml_full(tail: Node | null, path_root: string): string;
    }

    namespace Operation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Operation extends GObject.Object {
        static $gtype: GObject.GType<Operation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Operation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Operation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Operation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Operation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Operation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Operation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Operation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Operation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static find_property(operation_type: string, property_name: string): GObject.ParamSpec;
        // Conflicted with GObject.Object.find_property
        static find_property(...args: never[]): any;
        static get_key(operation_type: string, key_name: string): string;
        static get_op_version(op_name: string): string;
        static get_property_key(operation_type: string, property_name: string, property_key_name: string): string;
        static list_keys(operation_type: string): string[];
        static list_properties(operation_type: string): GObject.ParamSpec[];
        // Conflicted with GObject.Object.list_properties
        static list_properties(...args: never[]): any;
        static list_property_keys(operation_type: string, property_name: string): string[];
    }

    namespace Path {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: (arg0: any | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Path extends GObject.Object {
        static $gtype: GObject.GType<Path>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Path.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Path.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Path;

        static new_from_string(instructions: string): Path;

        // Signals

        connect<K extends keyof Path.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Path.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Path.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Path.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Path.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Path.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Adds a new type to the path system, FIXME this should probably
         * return something on registration conflicts, for now it expects
         * all registered paths to be aware of each other.
         * @param type a gchar to recognize in path descriptions.
         * @param items the number of floating point data items the instruction takes
         * @param description a human readable description of this entry
         */
        static add_type(type: number, items: number, description: string): void;

        // Methods

        /**
         * Compute the coordinates of the path at the `position` (length measured from
         * start of path, not including discontinuities).
         * @param pos how far along the path.
         */
        calc(pos: number): [boolean, number, number];
        /**
         * Compute a corresponding y coordinate for a given x input coordinate,
         * returns 0 if computed correctly and -1 if the path doesn't exist for the
         * specified x coordinate.
         * @param x x coordinate to compute for
         */
        calc_y_for_x(x: number): [number, number];
        /**
         * Remove all nods from a `path`.
         */
        clear(): void;
        /**
         * Figure out what and where on a path is closest to arbitrary coordinates.
         *
         * Returns the length along the path where the closest point was encountered.
         * @param x x coordinate.
         * @param y y coordinate
         */
        closest_point(x: number, y: number): [number, number, number, number];
        /**
         * Execute a provided function for every node in the path (useful for
         * drawing and otherwise traversing a path.)
         * @param each_item a function to call for each node in the path.
         */
        foreach(each_item: NodeFunction): void;
        /**
         * Execute a provided function for the segments of a poly line approximating
         * the path.
         * @param each_item a function to call for each node in the path.
         */
        foreach_flat(each_item: NodeFunction): void;
        /**
         * Make the `GeglPath` stop firing signals as it changes must be paired with a
         * gegl_path_thaw() for the signals to start again.
         */
        freeze(): void;
        /**
         * Compute the bounding box of a path.
         */
        get_bounds(): [number, number, number, number];
        /**
         * Returns the total length of the path.
         * @returns the length of the path.
         */
        get_length(): number;
        /**
         * Get the transformation matrix of the path.
         */
        get_matrix(): Matrix3;
        /**
         * Retrieves the number of nodes in the path.
         * @returns the number of nodes in the path.
         */
        get_n_nodes(): number;
        /**
         * Retrieve the node of the path at position `pos`.
         *
         * Returns TRUE if the node was successfully retrieved.
         * @param index the node number to retrieve
         */
        get_node(index: number): [boolean, PathItem];
        /**
         * Insert the new node `node` at position `pos` in `path`.
         * if `pos` = -1, the node is added in the last position.
         * @param pos the position we want the new node to have.
         * @param node pointer to a structure describing the GeglPathItem we want to store
         */
        insert_node(pos: number, node: PathItem): void;
        /**
         * Check if the path contains any nodes.
         *
         * Returns TRUE if the path has no nodes.
         */
        is_empty(): boolean;
        /**
         * Parses `instructions` and appends corresponding nodes to path (call
         * gegl_path_clean() first if you want to replace the existing path.
         * @param instructions a string describing a path.
         */
        parse_string(instructions: string): void;
        /**
         * Removes the node number `pos` in `path`.
         * @param pos a node in the path.
         */
        remove_node(pos: number): void;
        /**
         * Replaces the exiting node at position `pos` in `path`.
         * @param pos the position we want the new node to have.
         * @param node pointer to a structure describing the GeglPathItem we want to store.
         */
        replace_node(pos: number, node: PathItem): void;
        /**
         * Set the transformation matrix of the path.
         *
         * The path is transformed through this matrix when being evaluated,
         * causing the calculated positions and length to be changed by the transform.
         * @param matrix a #GeglMatrix3 to copy the matrix from
         */
        set_matrix(matrix: Matrix3): void;
        /**
         * Restart firing signals (unless the path has been frozen multiple times).
         */
        thaw(): void;
        /**
         * Serialize the paths nodes to a string.
         * @returns return a string with instructions describing the string you need to free this with g_free().
         */
        to_string(): string;
    }

    namespace Processor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::chunksize': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::rectangle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunksize: number;
            node: Node;
            progress: number;
            rectangle: any;
        }
    }

    class Processor extends GObject.Object {
        static $gtype: GObject.GType<Processor>;

        // Properties

        get chunksize(): number;
        set node(val: Node);
        get progress(): number;
        set progress(val: number);
        get rectangle(): any;
        set rectangle(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Processor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Processor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Processor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Processor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Processor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Processor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Processor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Processor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_level(level: number): void;
        /**
         * Change the rectangle a #GeglProcessor is working on.
         * @param rectangle the new #GeglRectangle the processor shold work on or NULL to make it work on all data in the buffer.
         */
        set_rectangle(rectangle: Rectangle): void;
        set_scale(scale: number): void;
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
        work(): [boolean, number];
    }

    namespace Stats {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::swap-busy': (pspec: GObject.ParamSpec) => void;
            'notify::swap-file-size': (pspec: GObject.ParamSpec) => void;
            'notify::swap-total': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-hits': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-misses': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-total': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-total-max': (pspec: GObject.ParamSpec) => void;
            'notify::tile-cache-total-uncloned': (pspec: GObject.ParamSpec) => void;
            'notify::zoom-total': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            swap_busy: boolean;
            swapBusy: boolean;
            swap_file_size: number;
            swapFileSize: number;
            swap_total: number;
            swapTotal: number;
            tile_cache_hits: number;
            tileCacheHits: number;
            tile_cache_misses: number;
            tileCacheMisses: number;
            tile_cache_total: number;
            tileCacheTotal: number;
            tile_cache_total_max: number;
            tileCacheTotalMax: number;
            tile_cache_total_uncloned: number;
            tileCacheTotalUncloned: number;
            zoom_total: number;
            zoomTotal: number;
        }
    }

    class Stats extends GObject.Object {
        static $gtype: GObject.GType<Stats>;

        // Properties

        get swap_busy(): boolean;
        get swapBusy(): boolean;
        get swap_file_size(): number;
        get swapFileSize(): number;
        get swap_total(): number;
        get swapTotal(): number;
        get tile_cache_hits(): number;
        get tileCacheHits(): number;
        get tile_cache_misses(): number;
        get tileCacheMisses(): number;
        get tile_cache_total(): number;
        get tileCacheTotal(): number;
        get tile_cache_total_max(): number;
        get tileCacheTotalMax(): number;
        get tile_cache_total_uncloned(): number;
        get tileCacheTotalUncloned(): number;
        get zoom_total(): number;
        get zoomTotal(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stats.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stats.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Stats.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stats.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stats.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stats.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stats.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stats.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace TileBackend {
        // Signal signatures
        interface SignalSignatures extends TileSource.SignalSignatures {
            'notify::flush-on-destroy': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::px-size': (pspec: GObject.ParamSpec) => void;
            'notify::tile-height': (pspec: GObject.ParamSpec) => void;
            'notify::tile-size': (pspec: GObject.ParamSpec) => void;
            'notify::tile-width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TileSource.ConstructorProps {
            flush_on_destroy: boolean;
            flushOnDestroy: boolean;
            format: any;
            px_size: number;
            pxSize: number;
            tile_height: number;
            tileHeight: number;
            tile_size: number;
            tileSize: number;
            tile_width: number;
            tileWidth: number;
        }
    }

    class TileBackend extends TileSource {
        static $gtype: GObject.GType<TileBackend>;

        // Properties

        get flush_on_destroy(): boolean;
        set flush_on_destroy(val: boolean);
        get flushOnDestroy(): boolean;
        set flushOnDestroy(val: boolean);
        get format(): any;
        get px_size(): number;
        get pxSize(): number;
        get tile_height(): number;
        get tileHeight(): number;
        get tile_size(): number;
        get tileSize(): number;
        get tile_width(): number;
        get tileWidth(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TileBackend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TileBackend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TileBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TileBackend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TileBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TileBackend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TileBackend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TileBackend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Delete a swap file from disk. This must be used by tile backends which may
         * swap to disk under certain circonstances.
         *
         * For safety, this function will check that the swap file is in the swap
         * directory before deletion but it won't perform any other check.
         * @param path the path where the gegl tile backend has swapped.
         */
        static unlink_swap(path: string): void;

        // Methods

        get_extent(): Rectangle;
        get_flush_on_destroy(): boolean;
        get_tile_height(): number;
        get_tile_size(): number;
        get_tile_width(): number;
        /**
         * Gets a pointer to the GeglTileStorage that uses the backend
         * @returns the #GeglTileStorage
         */
        peek_storage(): TileSource;
        /**
         * Specify the extent of the backend, can be used to pre-prime the
         * backend with the width/height information when constructing proxy
         * GeglBuffers to interact with other systems
         * @param rectangle the new extent
         */
        set_extent(rectangle: Rectangle): void;
        /**
         * Control whether cached data will be written to the backend before it
         * is destroyed. If false unwritten data will be discarded.
         * @param flush_on_destroy true if the backend needs to be flushed
         */
        set_flush_on_destroy(flush_on_destroy: boolean): void;
    }

    namespace TileHandler {
        // Signal signatures
        interface SignalSignatures extends TileSource.SignalSignatures {
            'notify::source': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends TileSource.ConstructorProps {
            source: GObject.Object;
        }
    }

    class TileHandler extends TileSource {
        static $gtype: GObject.GType<TileHandler>;

        // Properties

        get source(): GObject.Object;
        set source(val: GObject.Object);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TileHandler.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TileHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TileHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TileHandler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TileHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TileHandler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TileHandler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TileHandler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        damage_rect(rect: Rectangle): void;
        set_source(source: TileSource): void;
    }

    namespace TileSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class TileSource extends GObject.Object {
        static $gtype: GObject.GType<TileSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TileSource.SignalSignatures;

        // Fields

        command: TileSourceCommand;
        padding: any[];

        // Constructors

        constructor(properties?: Partial<TileSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TileSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TileSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TileSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TileSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TileSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type AudioFragmentClass = typeof AudioFragment;
    abstract class AudioFragmentPrivate {
        static $gtype: GObject.GType<AudioFragmentPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class BufferIterator {
        static $gtype: GObject.GType<BufferIterator>;

        // Fields

        length: number;
        data: any[];
        roi: Rectangle[];

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class BufferIteratorPriv {
        static $gtype: GObject.GType<BufferIteratorPriv>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ColorClass = typeof Color;
    abstract class ColorPrivate {
        static $gtype: GObject.GType<ColorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CurveClass = typeof Curve;
    class Lookup {
        static $gtype: GObject.GType<Lookup>;

        // Fields

        'function': LookupFunction;
        data: any;
        shift: number;
        positive_min: number;
        positive_max: number;
        negative_min: number;
        negative_max: number;
        bitmask: number[];
        table: number[];

        // Constructors

        _init(...args: any[]): void;
    }

    class Matrix2 {
        static $gtype: GObject.GType<Matrix2>;

        // Fields

        coeff: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                coeff: number[];
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        determinant(): number;
        is_scale(): boolean;
    }

    class Matrix3 {
        static $gtype: GObject.GType<Matrix3>;

        // Fields

        coeff: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                coeff: number[];
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): Matrix3;

        // Methods

        /**
         * Returns a copy of `src`.
         */
        copy(): Matrix3;
        /**
         * Copies the matrix in `src` into `dst`.
         * @param src a #GeglMatrix3
         */
        copy_into(src: Matrix3): void;
        /**
         * Returns the determinant for the matrix.
         */
        determinant(): number;
        /**
         * Check if two matrices are equal.
         *
         * Returns TRUE if the matrices are equal.
         * @param matrix2 a #GeglMatrix3
         */
        equal(matrix2: Matrix3): boolean;
        /**
         * Set the provided `matrix` to the identity matrix.
         */
        identity(): void;
        /**
         * Inverts `matrix`.
         */
        invert(): void;
        /**
         * Check if a matrix is the identity matrix.
         *
         * Returns TRUE if the matrix is the identity matrix.
         */
        is_identity(): boolean;
        /**
         * Check if a matrix only does scaling.
         *
         * Returns TRUE if the matrix only does scaling.
         */
        is_scale(): boolean;
        /**
         * Check if a matrix only does translation.
         *
         * Returns TRUE if the matrix only does trasnlation.
         */
        is_translate(): boolean;
        /**
         * Multiples `product` = `left` · `right`
         * @param right a #GeglMatrix3
         * @param product a #GeglMatrix3 to store the result in.
         */
        multiply(right: Matrix3, product: Matrix3): void;
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
        originate(x: number, y: number): void;
        /**
         * Parse a transofmation matrix from a string.
         * @param string a string describing the matrix (right now a small subset of the transform strings allowed by SVG)
         */
        parse_string(string: string): void;
        /**
         * Serialize a #GeglMatrix3 to a string.
         *
         * Returns a freshly allocated string representing that #GeglMatrix3, the
         * returned string should be g_free()'d.
         */
        to_string(): string;
        /**
         * transforms the coordinates provided in `x` and `y` and changes to the
         * coordinates gotten when the transformed with the matrix.
         * @param x pointer to an x coordinate
         * @param y pointer to an y coordinate
         */
        transform_point(x: number, y: number): void;
    }

    abstract class OperationContext {
        static $gtype: GObject.GType<OperationContext>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ParamSpecDouble {
        static $gtype: GObject.GType<ParamSpecDouble>;

        // Fields

        ui_minimum: number;
        ui_maximum: number;
        ui_gamma: number;
        ui_step_small: number;
        ui_step_big: number;
        ui_digits: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        set_digits(digits: number): void;
        set_steps(small_step: number, big_step: number): void;
    }

    class ParamSpecEnum {
        static $gtype: GObject.GType<ParamSpecEnum>;

        // Fields

        excluded_values: any[];

        // Constructors

        _init(...args: any[]): void;

        // Methods

        exclude_value(value: number): void;
    }

    class ParamSpecFilePath {
        static $gtype: GObject.GType<ParamSpecFilePath>;

        // Fields

        no_validate: number;
        null_ok: number;

        // Constructors

        _init(...args: any[]): void;
    }

    class ParamSpecFormat {
        static $gtype: GObject.GType<ParamSpecFormat>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ParamSpecInt {
        static $gtype: GObject.GType<ParamSpecInt>;

        // Fields

        ui_minimum: number;
        ui_maximum: number;
        ui_gamma: number;
        ui_step_small: number;
        ui_step_big: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        set_steps(small_step: number, big_step: number): void;
    }

    class ParamSpecSeed {
        static $gtype: GObject.GType<ParamSpecSeed>;

        // Fields

        ui_minimum: number;
        ui_maximum: number;

        // Constructors

        _init(...args: any[]): void;
    }

    class ParamSpecString {
        static $gtype: GObject.GType<ParamSpecString>;

        // Fields

        no_validate: number;
        null_ok: number;

        // Constructors

        _init(...args: any[]): void;
    }

    class ParamSpecUri {
        static $gtype: GObject.GType<ParamSpecUri>;

        // Fields

        no_validate: number;
        null_ok: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type PathClass = typeof Path;
    class PathItem {
        static $gtype: GObject.GType<PathItem>;

        // Fields

        type: number;
        point: PathPoint[];

        // Constructors

        constructor(
            properties?: Partial<{
                type: number;
                point: PathPoint[];
            }>,
        );
        _init(...args: any[]): void;
    }

    class PathList {
        static $gtype: GObject.GType<PathList>;

        // Fields

        next: any;
        d: PathItem;

        // Constructors

        constructor(
            properties?: Partial<{
                next: any;
                d: PathItem;
            }>,
        );
        _init(...args: any[]): void;
    }

    class PathPoint {
        static $gtype: GObject.GType<PathPoint>;

        // Fields

        x: number;
        y: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Random {
        static $gtype: GObject.GType<Random>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): Random;

        static new_with_seed(seed: number): Random;

        // Methods

        /**
         * Return a new copy of an existing GeglRandom
         */
        duplicate(): Random;
        /**
         * Return a random floating point number in range 0.0 .. 1.0.
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate (mipmap level)
         * @param n number no (each x,y coordinate provides its own sequence of numbers
         */
        float(x: number, y: number, z: number, n: number): number;
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
        float_range(x: number, y: number, z: number, n: number, min: number, max: number): number;
        /**
         * Free a GeglRandom structure created with gegl_random_new() or
         * gegl_random_new_with_seed()
         */
        free(): void;
        /**
         * Return a random integer number in range 0 .. MAX_UINT
         * @param x x coordinate
         * @param y y coordinate
         * @param z z coordinate (mipmap level)
         * @param n number no (each x,y coordinate provides its own sequence of numbers
         */
        int(x: number, y: number, z: number, n: number): number;
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
        int_range(x: number, y: number, z: number, n: number, min: number, max: number): number;
        /**
         * Change the seed of an existing GeglRandom.
         * @param seed an integer seed, change for different permutation.
         */
        set_seed(seed: number): void;
    }

    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](x: number, y: number, width: number, height: number): Rectangle;

        // Static methods

        /**
         * Returns a GeglRectangle that represents an infininte plane.
         */
        static infinite_plane(): Rectangle;

        // Methods

        /**
         * Computes the bounding box of the rectangles `source1` and `source2` and stores the
         * resulting bounding box in `destination`.
         *
         * `destination` may point to the same object as `source1` or `source2`.
         * @param source1 a #GeglRectangle
         * @param source2 a #GeglRectangle
         */
        bounding_box(source1: Rectangle, source2: Rectangle): void;
        /**
         * Checks if the #GeglRectangle `child` is fully contained within `parent`.
         *
         * Returns TRUE if the `child` is fully contained in `parent`.
         * @param child a #GeglRectangle
         */
        contains(child: Rectangle): boolean;
        /**
         * Copies the rectangle information stored in `source` over the information in
         * `destination`.
         *
         * `destination` may point to the same object as `source`.
         * @param source a #GeglRectangle
         */
        copy(source: Rectangle): void;
        /**
         * For debugging purposes, not stable API.
         */
        dump(): void;
        /**
         * Create a new copy of `rectangle`.
         * @returns a #GeglRectangle
         */
        dup(): Rectangle;
        /**
         * Check if two #GeglRectangles are equal.
         *
         * Returns TRUE if `rectangle` and `rectangle2` are equal.
         * @param rectangle2 a #GeglRectangle
         */
        equal(rectangle2: Rectangle): boolean;
        /**
         * Check if a rectangle is equal to a set of parameters.
         *
         * Returns TRUE if `rectangle` and `x,``y` `width` x `height` are equal.
         * @param x X coordinate
         * @param y Y coordinate
         * @param width width of rectangle
         * @param height height of rectangle
         */
        equal_coords(x: number, y: number, width: number, height: number): boolean;
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
        intersect(src1: Rectangle, src2: Rectangle): boolean;
        /**
         * Check if a rectangle has zero area.
         *
         * Returns TRUE if `rectangle` height and width are both zero.
         */
        is_empty(): boolean;
        /**
         * Returns TRUE if the GeglRectangle represents an infininte plane,
         * FALSE otherwise.
         */
        is_infinite_plane(): boolean;
        /**
         * Sets the `x,` `y,` `width` and `height` on `rectangle`.
         * @param x upper left x coordinate
         * @param y upper left y coordinate
         * @param width width in pixels.
         * @param height height in pixels.
         */
        set(x: number, y: number, width: number, height: number): void;
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
        subtract_bounding_box(minuend: Rectangle, subtrahend: Rectangle): boolean;
    }

    abstract class Sampler {
        static $gtype: GObject.GType<Sampler>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Perform a sampling with the provided `sampler`.
         * @param x x coordinate to sample
         * @param y y coordinate to sample
         * @param scale matrix representing extent of sampling area in source buffer.
         * @param output memory location for output data.
         * @param repeat_mode how requests outside the buffer extent are handled. Valid values: GEGL_ABYSS_NONE (abyss pixels are zeroed), GEGL_ABYSS_WHITE (abyss pixels are white), GEGL_ABYSS_BLACK (abyss pixels are black), GEGL_ABYSS_CLAMP (coordinates are clamped to the abyss rectangle), GEGL_ABYSS_LOOP (buffer contents are tiled if outside of the abyss rectangle).
         */
        get(x: number, y: number, scale: Matrix2, output: any | null, repeat_mode: AbyssPolicy | null): void;
        get_context_rect(): Rectangle;
    }

    abstract class Tile {
        static $gtype: GObject.GType<Tile>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TileBackendClass = typeof TileBackend;
    abstract class TileBackendPrivate {
        static $gtype: GObject.GType<TileBackendPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TileHandlerClass = typeof TileHandler;
    abstract class TileHandlerPrivate {
        static $gtype: GObject.GType<TileHandlerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TileSourceClass = typeof TileSource;
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

export default Gegl;

// END
