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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';

export namespace Mtk {
    /**
     * Mtk-13
     */

    /**
     * @gir-type Enum
     */
    enum RoundingStrategy {
        SHRINK,
        GROW,
        ROUND,
    }

    /**
     * @param rect A rectangle
     * @param rounding_strategy The rounding strategy
     */
    function rectangle_from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy | null): Rectangle;
    function x11_errors_deinit(): void;
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
         * Similar to {@link Rectangle.intersect} but doesn't provide
         * the location of the intersection.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap
         */
        overlap(rect2: Rectangle): boolean;
        /**
         * @returns Return a graphene_rect_t created from `rect`
         */
        to_graphene_rect(): Graphene.Rect;
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
