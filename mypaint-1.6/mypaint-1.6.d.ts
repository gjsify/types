
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

export namespace MyPaint {

    /**
     * MyPaint-1.6
     */


    /**
     * @gir-type Enum
     */
    enum BrushInput {
        INPUT_PRESSURE = 0,
        INPUT_SPEED1 = 1,
        INPUT_SPEED2 = 2,
        INPUT_RANDOM = 3,
        INPUT_STROKE = 4,
        INPUT_DIRECTION = 5,
        INPUT_TILT_DECLINATION = 6,
        INPUT_TILT_ASCENSION = 7,
        INPUT_CUSTOM = 8,
        INPUT_DIRECTION_ANGLE = 9,
        INPUT_ATTACK_ANGLE = 10,
        INPUT_TILT_DECLINATIONX = 11,
        INPUT_TILT_DECLINATIONY = 12,
        INPUT_GRIDMAP_X = 13,
        INPUT_GRIDMAP_Y = 14,
        INPUT_VIEWZOOM = 15,
        INPUT_BARREL_ROTATION = 16,
        INPUT_BRUSH_RADIUS = 17,
        INPUTS_COUNT = 18,
    }


    /**
     * @gir-type Enum
     */
    enum BrushSetting {
        SETTING_OPAQUE = 0,
        SETTING_OPAQUE_MULTIPLY = 1,
        SETTING_OPAQUE_LINEARIZE = 2,
        SETTING_RADIUS_LOGARITHMIC = 3,
        SETTING_HARDNESS = 4,
        SETTING_ANTI_ALIASING = 5,
        SETTING_DABS_PER_BASIC_RADIUS = 6,
        SETTING_DABS_PER_ACTUAL_RADIUS = 7,
        SETTING_DABS_PER_SECOND = 8,
        SETTING_RADIUS_BY_RANDOM = 9,
        SETTING_SPEED1_SLOWNESS = 10,
        SETTING_SPEED2_SLOWNESS = 11,
        SETTING_SPEED1_GAMMA = 12,
        SETTING_SPEED2_GAMMA = 13,
        SETTING_OFFSET_BY_RANDOM = 14,
        SETTING_OFFSET_BY_SPEED = 15,
        SETTING_OFFSET_BY_SPEED_SLOWNESS = 16,
        SETTING_SLOW_TRACKING = 17,
        SETTING_SLOW_TRACKING_PER_DAB = 18,
        SETTING_TRACKING_NOISE = 19,
        SETTING_COLOR_H = 20,
        SETTING_COLOR_S = 21,
        SETTING_COLOR_V = 22,
        SETTING_RESTORE_COLOR = 23,
        SETTING_CHANGE_COLOR_H = 24,
        SETTING_CHANGE_COLOR_L = 25,
        SETTING_CHANGE_COLOR_HSL_S = 26,
        SETTING_CHANGE_COLOR_V = 27,
        SETTING_CHANGE_COLOR_HSV_S = 28,
        SETTING_SMUDGE = 29,
        SETTING_SMUDGE_LENGTH = 30,
        SETTING_SMUDGE_RADIUS_LOG = 31,
        SETTING_ERASER = 32,
        SETTING_STROKE_THRESHOLD = 33,
        SETTING_STROKE_DURATION_LOGARITHMIC = 34,
        SETTING_STROKE_HOLDTIME = 35,
        SETTING_CUSTOM_INPUT = 36,
        SETTING_CUSTOM_INPUT_SLOWNESS = 37,
        SETTING_ELLIPTICAL_DAB_RATIO = 38,
        SETTING_ELLIPTICAL_DAB_ANGLE = 39,
        SETTING_DIRECTION_FILTER = 40,
        SETTING_LOCK_ALPHA = 41,
        SETTING_COLORIZE = 42,
        SETTING_SNAP_TO_PIXEL = 43,
        SETTING_PRESSURE_GAIN_LOG = 44,
        SETTING_GRIDMAP_SCALE = 45,
        SETTING_GRIDMAP_SCALE_X = 46,
        SETTING_GRIDMAP_SCALE_Y = 47,
        SETTING_SMUDGE_LENGTH_LOG = 48,
        SETTING_SMUDGE_BUCKET = 49,
        SETTING_SMUDGE_TRANSPARENCY = 50,
        SETTING_OFFSET_Y = 51,
        SETTING_OFFSET_X = 52,
        SETTING_OFFSET_ANGLE = 53,
        SETTING_OFFSET_ANGLE_ASC = 54,
        SETTING_OFFSET_ANGLE_VIEW = 55,
        SETTING_OFFSET_ANGLE_2 = 56,
        SETTING_OFFSET_ANGLE_2_ASC = 57,
        SETTING_OFFSET_ANGLE_2_VIEW = 58,
        SETTING_OFFSET_ANGLE_ADJ = 59,
        SETTING_OFFSET_MULTIPLIER = 60,
        SETTING_POSTERIZE = 61,
        SETTING_POSTERIZE_NUM = 62,
        SETTING_PAINT_MODE = 63,
        SETTINGS_COUNT = 64,
    }


    /**
     * @gir-type Enum
     */
    enum BrushState {
        STATE_X = 0,
        STATE_Y = 1,
        STATE_PRESSURE = 2,
        STATE_PARTIAL_DABS = 3,
        STATE_ACTUAL_RADIUS = 4,
        STATE_SMUDGE_RA = 5,
        STATE_SMUDGE_GA = 6,
        STATE_SMUDGE_BA = 7,
        STATE_SMUDGE_A = 8,
        STATE_LAST_GETCOLOR_R = 9,
        STATE_LAST_GETCOLOR_G = 10,
        STATE_LAST_GETCOLOR_B = 11,
        STATE_LAST_GETCOLOR_A = 12,
        STATE_LAST_GETCOLOR_RECENTNESS = 13,
        STATE_ACTUAL_X = 14,
        STATE_ACTUAL_Y = 15,
        STATE_NORM_DX_SLOW = 16,
        STATE_NORM_DY_SLOW = 17,
        STATE_NORM_SPEED1_SLOW = 18,
        STATE_NORM_SPEED2_SLOW = 19,
        STATE_STROKE = 20,
        STATE_STROKE_STARTED = 21,
        STATE_CUSTOM_INPUT = 22,
        STATE_RNG_SEED = 23,
        STATE_ACTUAL_ELLIPTICAL_DAB_RATIO = 24,
        STATE_ACTUAL_ELLIPTICAL_DAB_ANGLE = 25,
        STATE_DIRECTION_DX = 26,
        STATE_DIRECTION_DY = 27,
        STATE_DECLINATION = 28,
        STATE_ASCENSION = 29,
        STATE_VIEWZOOM = 30,
        STATE_VIEWROTATION = 31,
        STATE_DIRECTION_ANGLE_DX = 32,
        STATE_DIRECTION_ANGLE_DY = 33,
        STATE_ATTACK_ANGLE = 34,
        STATE_FLIP = 35,
        STATE_GRIDMAP_X = 36,
        STATE_GRIDMAP_Y = 37,
        STATE_DECLINATIONX = 38,
        STATE_DECLINATIONY = 39,
        STATE_DABS_PER_BASIC_RADIUS = 40,
        STATE_DABS_PER_ACTUAL_RADIUS = 41,
        STATE_DABS_PER_SECOND = 42,
        STATE_BARREL_ROTATION = 43,
        STATES_COUNT = 44,
    }


    /**
     * @param cname 
     */
    function brush_input_from_cname(cname: string): BrushInput;

    /**
     * @param id 
     */
    function brush_input_info(id: BrushInput): BrushInputInfo;

    /**
     * @param cname 
     */
    function brush_setting_from_cname(cname: string): BrushSetting;

    /**
     * @param id 
     */
    function brush_setting_info(id: BrushSetting): BrushSettingInfo;

    /**
     * @gir-type Callback
     */
    interface SurfaceBeginAtomicFunction {
        (self: Surface): void;
    }

    /**
     * @gir-type Callback
     */
    interface SurfaceDestroyFunction {
        (self: Surface): void;
    }

    /**
     * @gir-type Callback
     */
    interface SurfaceDrawDabFunction {
        (self: Surface, x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, opaque: number, hardness: number, alpha_eraser: number, aspect_ratio: number, angle: number, lock_alpha: number, colorize: number): number;
    }

    /**
     * @gir-type Callback
     */
    interface SurfaceEndAtomicFunction {
        (self: Surface, roi: Rectangle): void;
    }

    /**
     * @gir-type Callback
     */
    interface SurfaceGetColorFunction {
        (self: Surface, x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, color_a: number): void;
    }

    /**
     * @gir-type Callback
     */
    interface SurfaceSavePngFunction {
        (self: Surface, path: string, x: number, y: number, width: number, height: number): void;
    }

    /**
     * @gir-type Callback
     */
    interface TileRequestEndFunction {
        (self: TiledSurface, request: TileRequest): void;
    }

    /**
     * @gir-type Callback
     */
    interface TileRequestStartFunction {
        (self: TiledSurface, request: TileRequest): void;
    }

    /**
     * The MyPaint brush engine class.
     * @gir-type Struct
     */
    class Brush {
        static $gtype: GObject.GType<Brush>;

        // Constructors
        constructor(properties?: Partial<{}>);

        static ["new"](): Brush;

        static new_with_buckets(num_smudge_buckets: number): Brush;

        // Static methods
        /**
         * @param cname 
         */
        static input_from_cname(cname: string): BrushInput;

        /**
         * @param cname 
         */
        static setting_from_cname(cname: string): BrushSetting;

        // Methods
        from_defaults(): void;

        /**
         * @param string 
         */
        from_string(string: string): boolean;

        /**
         * Get the base value of a brush setting.
         * @param id 
         */
        get_base_value(id: BrushSetting): number;

        /**
         * Returns how many inputs are used for the dynamics of a {@link MyPaint.BrushSetting}
         * @param id 
         */
        get_inputs_used_n(id: BrushSetting): number;

        /**
         * Get the number of points used for the dynamics mapping between a {@link MyPaint.BrushInput} and {@link MyPaint.BrushSetting}.
         * @param id 
         * @param input 
         */
        get_mapping_n(id: BrushSetting, input: BrushInput): number;

        /**
         * Get a X,Y point of a dynamics mapping.
         * @param id 
         * @param input 
         * @param index 
         */
        get_mapping_point(id: BrushSetting, input: BrushInput, index: number): [number, number];

        /**
         * Get an internal brush engine state.
         * Normally used for debugging, but can be used to implement record & replay functionality.
         * @param i 
         */
        get_state(i: BrushState): number;

        /**
         * Return the total amount of painting time for the current stroke.
         */
        get_total_stroke_painting_time(): number;

        /**
         * Returns TRUE if the brush has no dynamics for the given {@link MyPaint.BrushSetting}
         * @param id 
         */
        is_constant(id: BrushSetting): boolean;

        /**
         * Start a new stroke.
         */
        new_stroke(): void;

        /**
         * Increase the reference count.
         */
        ref(): void;

        /**
         * Reset the current brush engine state.
         * Used when the next `mypaint_brush_stroke_to()` call is not related to the current state.
         * Note that the reset request is queued and changes in state will only happen on next `stroke_to()`
         */
        reset(): void;

        /**
         * Set the base value of a brush setting.
         * @param id 
         * @param value 
         */
        set_base_value(id: BrushSetting, value: number): void;

        /**
         * Set the number of points used for the dynamics mapping between a {@link MyPaint.BrushInput} and {@link MyPaint.BrushSetting}.
         * @param id 
         * @param input 
         * @param n 
         */
        set_mapping_n(id: BrushSetting, input: BrushInput, n: number): void;

        /**
         * Set a X,Y point of a dynamics mapping.
         * The index must be within the number of points set using `mypaint_brush_set_mapping_n()`
         * @param id 
         * @param input 
         * @param index 
         * @param x 
         * @param y 
         */
        set_mapping_point(id: BrushSetting, input: BrushInput, index: number, x: number, y: number): void;

        /**
         * Enable/Disable printing of brush engine inputs on stderr. Intended for debugging only.
         * @param enabled 
         */
        set_print_inputs(enabled: boolean): void;

        /**
         * Set an internal brush engine state.
         * Normally used for debugging, but can be used to implement record & replay functionality.
         * @param i 
         * @param value 
         */
        set_state(i: BrushState, value: number): void;

        /**
         * Should be called once for each motion event.
         * @param surface 
         * @param x 
         * @param y 
         * @param pressure 
         * @param xtilt 
         * @param ytilt 
         * @param dtime Time since last motion event, in seconds.
         * @returns non-0 if the stroke is finished or empty, else 0.
         */
        stroke_to(surface: Surface, x: number, y: number, pressure: number, xtilt: number, ytilt: number, dtime: number): number;

        /**
         * Decrease the reference count. Will be freed when it hits 0.
         */
        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    class BrushInputInfo {
        static $gtype: GObject.GType<BrushInputInfo>;

        // Fields
        cname: string;

        hard_min: number;

        soft_min: number;

        normal: number;

        soft_max: number;

        hard_max: number;

        name: string;

        tooltip: string;

        // Constructors

        constructor(properties?: Partial<{
            cname: string;
            hard_min: number;
            soft_min: number;
            normal: number;
            soft_max: number;
            hard_max: number;
            name: string;
            tooltip: string;
        }>);

        // Methods
        get_name(): string;

        get_tooltip(): string;
    }


    /**
     * @gir-type Struct
     */
    class BrushSettingInfo {
        static $gtype: GObject.GType<BrushSettingInfo>;

        // Fields
        cname: string;

        name: string;

        constant: boolean;

        min: number;

        def: number;

        max: number;

        tooltip: string;

        // Constructors

        constructor(properties?: Partial<{
            cname: string;
            name: string;
            constant: boolean;
            min: number;
            def: number;
            max: number;
            tooltip: string;
        }>);

        // Methods
        get_name(): string;

        get_tooltip(): string;
    }


    /**
     * Simple {@link MyPaint.TiledSurface} subclass that implements a fixed sized {@link MyPaint.Surface}.
     * Only intended for testing and trivial use-cases, and to serve as an example of
     * how to implement a tiled surface subclass.
     * @gir-type Struct
     */
    class FixedTiledSurface {
        static $gtype: GObject.GType<FixedTiledSurface>;

        // Constructors
        constructor(width: number, height: number);

        static ["new"](width: number, height: number): FixedTiledSurface;

        // Methods
        get_height(): number;

        get_width(): number;

        ["interface"](): Surface;
    }


    /**
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields
        x: number;

        y: number;

        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);

        // Methods
        copy(): Rectangle;

        /**
         * @param x 
         * @param y 
         */
        expand_to_include_point(x: number, y: number): void;

        /**
         * @param other 
         */
        expand_to_include_rect(other: Rectangle): void;
    }


    /**
     * @gir-type Struct
     */
    class Rectangles {
        static $gtype: GObject.GType<Rectangles>;

        // Fields
        num_rectangles: number;

        rectangles: Rectangle;

        // Constructors

        constructor(properties?: Partial<{
            num_rectangles: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class Surface {
        static $gtype: GObject.GType<Surface>;

        // Fields
        destroy: SurfaceDestroyFunction;

        refcount: number;

        // Methods
        begin_atomic(): void;

        /**
         * Draw a dab onto the surface.
         * @param x 
         * @param y 
         * @param radius 
         * @param color_r 
         * @param color_g 
         * @param color_b 
         * @param opaque 
         * @param hardness 
         * @param alpha_eraser 
         * @param aspect_ratio 
         * @param angle 
         * @param lock_alpha 
         * @param colorize 
         */
        draw_dab(x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, opaque: number, hardness: number, alpha_eraser: number, aspect_ratio: number, angle: number, lock_alpha: number, colorize: number): number;

        end_atomic(): Rectangle | null;

        /**
         * @param x 
         * @param y 
         * @param radius 
         */
        get_alpha(x: number, y: number, radius: number): number;

        /**
         * @param x 
         * @param y 
         * @param radius 
         * @param color_r 
         * @param color_g 
         * @param color_b 
         * @param color_a 
         */
        get_color(x: number, y: number, radius: number, color_r: number, color_g: number, color_b: number, color_a: number): void;

        /**
         * Increase the reference count.
         */
        ref(): void;

        /**
         * @param path 
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         */
        save_png(path: string, x: number, y: number, width: number, height: number): void;

        /**
         * Decrease the reference count.
         */
        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    class TileRequest {
        static $gtype: GObject.GType<TileRequest>;

        // Fields
        tx: number;

        ty: number;

        readonly: boolean;

        buffer: number;

        context: null;

        thread_id: number;

        mipmap_level: number;

        // Constructors

        constructor(properties?: Partial<{
            tx: number;
            ty: number;
            readonly: boolean;
            buffer: number;
            context: null;
            thread_id: number;
            mipmap_level: number;
        }>);

        // Methods
        /**
         * Initialize a request for use with `mypaint_tiled_surface_tile_request_start()`
         * and `mypaint_tiled_surface_tile_request_end()`
         * @param level 
         * @param tx 
         * @param ty 
         * @param readonly 
         */
        init(level: number, tx: number, ty: number, readonly: boolean): void;
    }


    /**
     * Testing if this comment ends up in the gir.
     * @gir-type Struct
     */
    class TiledSurface {
        static $gtype: GObject.GType<TiledSurface>;

        // Fields
        surface_do_symmetry: boolean;

        surface_center_x: number;

        operation_queue: null;

        dirty_bbox: Rectangle;

        threadsafe_tile_requests: boolean;

        tile_size: number;

        // Methods
        /**
         * Deallocate resources set up by `mypaint_tiled_surface_init()`
         * Does not free the {@link MyPaint.TiledSurface} itself.
         * Note: Only intended to be called from subclasses of {@link MyPaint.TiledSurface}
         */
        destroy(): void;

        /**
         * @param x 
         * @param y 
         * @param radius 
         */
        get_alpha(x: number, y: number, radius: number): number;

        /**
         * Enable/Disable symmetric brush painting across an X axis.
         * @param active TRUE to enable, FALSE to disable.
         * @param center_x X axis to mirror events across.
         */
        set_symmetry_state(active: boolean, center_x: number): void;

        /**
         * @param request 
         */
        tile_request_end(request: TileRequest): void;

        /**
         * @param request 
         */
        tile_request_start(request: TileRequest): void;
    }


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

export default MyPaint;

// END
