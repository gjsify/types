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
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Mtk {
    /**
     * Mtk-18
     */

    /**
     * @gir-type Enum
     */
    enum AnonymousFileMapmode {
        PRIVATE,
        SHARED,
    }

    /**
     * @gir-type Struct
     */
    class MonitorTransform {
        static $gtype: GObject.GType<MonitorTransform>;

        // Static fields

        static NORMAL: number;
        static '90': number;
        static '180': number;
        static '270': number;
        static FLIPPED: number;
        static FLIPPED_90: number;
        static FLIPPED_180: number;
        static FLIPPED_270: number;
    }

    /**
     * @gir-type Enum
     */
    enum RegionOverlap {
        OUT,
        IN,
        PART,
    }

    /**
     * @gir-type Enum
     */
    enum RoundingStrategy {
        SHRINK,
        GROW,
        ROUND,
    }

    const MONITOR_ALL_TRANSFORMS: number;
    const MONITOR_N_TRANSFORMS: number;
    const RECTANGLE_MAX_STACK_RECTS: number;
    const REGION_BUILDER_MAX_LEVELS: number;
    /**
     * @param matrix
     * @param width
     * @param height
     * @param scale
     * @param transform
     * @param src_rect
     */
    function compute_viewport_matrix(
        matrix: Graphene.Matrix,
        width: number,
        height: number,
        scale: number,
        transform: MonitorTransform | null,
        src_rect: Graphene.Rect,
    ): void;
    /**
     * @param boundary_us
     * @param base_us
     * @param interval_us
     */
    function extrapolate_next_interval_boundary(boundary_us: number, base_us: number, interval_us: number): number;
    /**
     * @param boundary_us
     * @param base_us
     * @param interval_us
     */
    function find_nearest_interval_boundary(boundary_us: number, base_us: number, interval_us: number): number;
    /**
     * @param name
     */
    function monitor_transform_from_string(name: string): MonitorTransform;
    /**
     * @param transform
     */
    function monitor_transform_invert(transform: MonitorTransform | null): MonitorTransform;
    /**
     * @param transform
     */
    function monitor_transform_to_string(transform: MonitorTransform | null): string;
    /**
     * @param transform
     * @param other
     */
    function monitor_transform_transform(
        transform: MonitorTransform | null,
        other: MonitorTransform | null,
    ): MonitorTransform;
    /**
     * @param transform
     * @param matrix
     */
    function monitor_transform_transform_matrix(transform: MonitorTransform | null, matrix: Graphene.Matrix): void;
    /**
     * @param transform
     * @param area_width
     * @param area_height
     * @param point_x
     * @param point_y
     */
    function monitor_transform_transform_point(
        transform: MonitorTransform | null,
        area_width: number,
        area_height: number,
        point_x: number,
        point_y: number,
    ): void;
    /**
     * @param rect A rectangle
     * @param rounding_strategy The rounding strategy
     */
    function rectangle_from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy | null): Rectangle;
    function region_create(): Region;
    /**
     * @param rect
     */
    function region_create_rectangle(rect: Rectangle): Region;
    /**
     * @param rects
     * @param n_rects
     */
    function region_create_rectangles(rects: Rectangle, n_rects: number): Region;
    function x11_errors_deinit(): void;
    /**
     * @gir-type Struct
     */
    abstract class AnonymousFile {
        static $gtype: GObject.GType<AnonymousFile>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DbusPidfd {
        static $gtype: GObject.GType<DbusPidfd>;

        // Methods

        free(): void;
        get_pid(): never;
        get_pidfd(): number;
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

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );

        static ['new'](x: number, y: number, width: number, height: number): Rectangle;

        static new_empty(): Rectangle;

        // Static methods

        /**
         * @param rect A rectangle
         * @param rounding_strategy The rounding strategy
         */
        static from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): Rectangle;

        // Methods

        /**
         * @returns The area of the rectangle
         */
        area(): number;
        /**
         * @param x X coordinate of the point
         * @param y Y coordinate of the point
         * @returns Whether the rectangle contains the point
         */
        contains_point(x: number, y: number): boolean;
        /**
         * @param x X coordinate of the point
         * @param y Y coordinate of the point
         * @returns Whether the rectangle contains the point
         */
        contains_pointf(x: number, y: number): boolean;
        /**
         * @param inner_rect The inner rectangle
         * @returns Whether the outer rectangle contains the inner one
         */
        contains_rect(inner_rect: Rectangle): boolean;
        copy(): Rectangle;
        /**
         * @param inner_rect The inner rectangle
         * @returns Whether the inner rectangle could fit inside the outer one
         */
        could_fit_rect(inner_rect: Rectangle): boolean;
        /**
         * @param src_rect
         * @param dst_width
         * @param dst_height
         * @param dest
         */
        crop_and_scale(src_rect: Graphene.Rect, dst_width: number, dst_height: number, dest: Rectangle): void;
        /**
         * Compares the two rectangles
         * @param src2 The second rectangle
         * @returns Whether the two rectangles are equal
         */
        equal(src2: Rectangle): boolean;
        free(): void;
        /**
         * Similar to {@link Rectangle.overlap} but ignores the vertical location.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap horizontally
         */
        horiz_overlap(rect2: Rectangle): boolean;
        /**
         * Find the intersection between the two rectangles
         * @param src2 another {@link Mtk.Rectangle}
         * @returns TRUE is some intersection exists and is not degenerate, FALSE   otherwise.
         */
        intersect(src2: Rectangle): [boolean, Rectangle];
        /**
         * @param other
         */
        is_adjacent_to(other: Rectangle): boolean;
        is_empty(): boolean;
        /**
         * Similar to {@link Rectangle.intersect} but doesn't provide
         * the location of the intersection.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap
         */
        overlap(rect2: Rectangle): boolean;
        /**
         * @param scale
         * @param rounding_strategy
         * @param dest
         */
        scale_double(scale: number, rounding_strategy: RoundingStrategy | null, dest: Rectangle): void;
        /**
         * @returns Return a graphene_rect_t created from `rect`
         */
        to_graphene_rect(): Graphene.Rect;
        /**
         * This function transforms the values in `rect` in order to compensate for
         * `transform` applied to a `MetaMonitor`, making them match the viewport. Note
         * that compensating implies that for a clockwise rotation of the `MetaMonitor`
         * an anti-clockwise rotation has to be applied to `rect`.
         * @param transform the {@link Mtk.MonitorTransform}
         * @param width the width of the target space
         * @param height the height of the target space
         * @param dest the transformed {@link Mtk.Rectangle}
         */
        transform(transform: MonitorTransform | null, width: number, height: number, dest: Rectangle): void;
        /**
         * Computes the union of the two rectangles
         * @param rect2 another {@link Mtk.Rectangle}
         */
        union(rect2: Rectangle): Rectangle;
        /**
         * Similar to {@link Rectangle.overlap} but ignores the horizontal location.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap vertically
         */
        vert_overlap(rect2: Rectangle): boolean;
    }

    /**
     * @gir-type Struct
     */
    abstract class Region {
        static $gtype: GObject.GType<Region>;

        // Static methods

        static create(): Region;
        /**
         * @param rect
         */
        static create_rectangle(rect: Rectangle): Region;
        /**
         * @param rects
         * @param n_rects
         */
        static create_rectangles(rects: Rectangle, n_rects: number): Region;

        // Methods

        /**
         * @param transform
         */
        apply_matrix_transform_expand(transform: Graphene.Matrix): Region;
        /**
         * @param x
         * @param y
         */
        contains_point(x: number, y: number): boolean;
        /**
         * @param rect
         */
        contains_rectangle(rect: Rectangle): RegionOverlap;
        /**
         * @returns A copy of the passed region
         */
        copy(): Region;
        /**
         * @param src_rect
         * @param dst_width
         * @param dst_height
         */
        crop_and_scale(src_rect: Graphene.Rect, dst_width: number, dst_height: number): Region;
        /**
         * @param scale
         */
        downscale(scale: number): Region;
        /**
         * @param other
         */
        equal(other: Region): boolean;
        /**
         * @param nth
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         */
        get_box(nth: number, x1: number, y1: number, x2: number, y2: number): void;
        get_extents(): Rectangle;
        /**
         * @param nth
         */
        get_rectangle(nth: number): Rectangle;
        /**
         * @param other
         */
        intersect(other: Region): void;
        /**
         * @param rect
         */
        intersect_rectangle(rect: Rectangle): void;
        is_empty(): boolean;
        num_rectangles(): number;
        /**
         * Increases the reference count
         * @returns The region
         */
        ref(): Region;
        /**
         * @param scale
         */
        scale(scale: number): Region;
        /**
         * @param other
         */
        subtract(other: Region): void;
        /**
         * @param rect
         */
        subtract_rectangle(rect: Rectangle): void;
        /**
         * @param dx
         * @param dy
         */
        translate(dx: number, dy: number): void;
        /**
         * @param other
         */
        union(other: Region): void;
        /**
         * @param rect
         */
        union_rectangle(rect: Rectangle): void;
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    class RegionBuilder {
        static $gtype: GObject.GType<RegionBuilder>;

        // Fields

        n_levels: number;

        // Methods

        /**
         * @param x
         * @param y
         * @param width
         * @param height
         */
        add_rectangle(x: number, y: number, width: number, height: number): void;
        finish(): Region;
        init(): void;
    }

    /**
     * MtkRegion is a yx banded region; sometimes its useful to iterate through
     * such a region treating the start and end of each horizontal band in a distinct
     * fashion.
     *
     * Usage:
     *
     * ```c
     *  MtkRegionIterator iter;
     *  for (mtk_region_iterator_init (&iter, region);
     *       !mtk_region_iterator_at_end (&iter);
     *       mtk_region_iterator_next (&iter))
     *  {
     *    [ Use iter.rectangle, iter.line_start, iter.line_end ]
     *  }
     * ```
     * @gir-type Struct
     */
    class RegionIterator {
        static $gtype: GObject.GType<RegionIterator>;

        // Fields

        rectangle: Rectangle;
        line_start: boolean;
        line_end: boolean;
        i: number;

        // Methods

        at_end(): boolean;
        /**
         * @param region
         */
        init(region: Region): void;
        next(): void;
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

export default Mtk;

// END
