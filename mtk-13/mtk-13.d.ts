/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mtk-13-ambient.d.ts';
import './mtk-13-import.d.ts';
/**
 * Mtk-13
 */

import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Graphene from '@girs/graphene-1.0';

export namespace Mtk {
    enum RoundingStrategy {
        SHRINK,
        GROW,
        ROUND,
    }
    function rectangle_from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): Rectangle;
    function x11_errors_deinit(): void;
    class Rectangle {
        // Own fields of Mtk.Rectangle

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of Mtk.Rectangle

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

        // Own static methods of Mtk.Rectangle

        static from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): Rectangle;

        // Own methods of Mtk.Rectangle

        area(): number;
        contains_rect(inner_rect: Rectangle): boolean;
        copy(): Rectangle;
        could_fit_rect(inner_rect: Rectangle): boolean;
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
        /**
         * Similar to [method`Rectangle`.intersect] but doesn't provide
         * the location of the intersection.
         * @param rect2 The second rectangle
         * @returns Whether the two rectangles overlap
         */
        overlap(rect2: Rectangle): boolean;
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
