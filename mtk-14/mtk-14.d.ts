/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Mtk {
    /**
     * Mtk-14
     */

    export namespace RegionOverlap {
        export const $gtype: GObject.GType<RegionOverlap>;
    }

    enum RegionOverlap {
        OUT,
        IN,
        PART,
    }

    export namespace RoundingStrategy {
        export const $gtype: GObject.GType<RoundingStrategy>;
    }

    enum RoundingStrategy {
        SHRINK,
        GROW,
        ROUND,
    }
    const RECTANGLE_MAX_STACK_RECTS: number;
    const REGION_BUILDER_MAX_LEVELS: number;
    function rectangle_from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): Rectangle;
    function region_create(): Region;
    function region_create_rectangle(rect: Rectangle): Region;
    function region_create_rectangles(rects: Rectangle, n_rects: number): Region;
    function x11_errors_deinit(): void;
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

        static from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): Rectangle;

        // Methods

        area(): number;
        contains_rect(inner_rect: Rectangle): boolean;
        copy(): Rectangle;
        could_fit_rect(inner_rect: Rectangle): boolean;
        crop_and_scale(src_rect: Graphene.Rect, dst_width: number, dst_height: number, dest: Rectangle): void;
        /**
         * Compares the two rectangles
         * @param src2 The second rectangle
         * @returns Whether the two rectangles are equal
         */
        equal(src2: Rectangle): boolean;
        free(): void;
        /**
         * Similar to [method`Rectangle`.overlap] but ignores the vertical location.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap horizontally
         */
        horiz_overlap(rect2: Rectangle): boolean;
        /**
         * Find the intersection between the two rectangles
         * @param src2 another #MtkRectangle
         * @returns TRUE is some intersection exists and is not degenerate, FALSE   otherwise.
         */
        intersect(src2: Rectangle): [boolean, Rectangle];
        is_adjacent_to(other: Rectangle): boolean;
        /**
         * Similar to [method`Rectangle`.intersect] but doesn't provide
         * the location of the intersection.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap
         */
        overlap(rect2: Rectangle): boolean;
        scale_double(scale: number, rounding_strategy: RoundingStrategy, dest: Rectangle): void;
        to_graphene_rect(): Graphene.Rect;
        /**
         * Computes the union of the two rectangles
         * @param rect2 another #MtkRectangle
         */
        union(rect2: Rectangle): Rectangle;
        /**
         * Similar to [method`Rectangle`.overlap] but ignores the horizontal location.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap vertically
         */
        vert_overlap(rect2: Rectangle): boolean;
    }

    abstract class Region {
        static $gtype: GObject.GType<Region>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        static create(): Region;
        static create_rectangle(rect: Rectangle): Region;
        static create_rectangles(rects: Rectangle, n_rects: number): Region;

        // Methods

        apply_matrix_transform_expand(transform: Graphene.Matrix): Region;
        contains_point(x: number, y: number): boolean;
        contains_rectangle(rect: Rectangle): RegionOverlap;
        copy(): Region;
        crop_and_scale(src_rect: Graphene.Rect, dst_width: number, dst_height: number): Region;
        equal(other: Region): boolean;
        get_extents(): Rectangle;
        get_rectangle(nth: number): Rectangle;
        intersect(other: Region): void;
        intersect_rectangle(rect: Rectangle): void;
        is_empty(): boolean;
        num_rectangles(): number;
        /**
         * Increases the reference count
         * @returns The region
         */
        ref(): Region;
        scale(scale: number): Region;
        subtract(other: Region): void;
        subtract_rectangle(rect: Rectangle): void;
        translate(dx: number, dy: number): void;
        union(other: Region): void;
        union_rectangle(rect: Rectangle): void;
        unref(): void;
    }

    class RegionBuilder {
        static $gtype: GObject.GType<RegionBuilder>;

        // Fields

        n_levels: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
     */
    class RegionIterator {
        static $gtype: GObject.GType<RegionIterator>;

        // Fields

        rectangle: Rectangle;
        line_start: boolean;
        line_end: boolean;
        i: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        at_end(): boolean;
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
