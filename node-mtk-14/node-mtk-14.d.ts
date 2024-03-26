
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-mtk-14-import.d.ts';
    
/**
 * Mtk-14
 */

import type Graphene from '@girs/node-graphene-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace Mtk {

enum RegionOverlap {
    OUT,
    IN,
    PART,
}
enum RoundingStrategy {
    SHRINK,
    GROW,
    ROUND,
}
const RECTANGLE_MAX_STACK_RECTS: number
const REGION_BUILDER_MAX_LEVELS: number
function rectangleFromGrapheneRect(rect: Graphene.Rect, roundingStrategy: RoundingStrategy): /* dest */ Rectangle
function regionCreate(): Region
function regionCreateRectangle(rect: Rectangle): Region
function regionCreateRectangles(rects: Rectangle, nRects: number): Region
function x11ErrorsDeinit(): void
interface Rectangle {

    // Own fields of Mtk-14.Mtk.Rectangle

    /**
     * X coordinate of the top-left corner
     * @field 
     */
    x: number
    /**
     * Y coordinate of the top-left corner
     * @field 
     */
    y: number
    /**
     * Width of the rectangle
     * @field 
     */
    width: number
    /**
     * Height of the rectangle
     * @field 
     */
    height: number

    // Owm methods of Mtk-14.Mtk.Rectangle

    area(): number
    containsRect(innerRect: Rectangle): boolean
    copy(): Rectangle
    couldFitRect(innerRect: Rectangle): boolean
    cropAndScale(srcRect: Graphene.Rect, dstWidth: number, dstHeight: number, dest: Rectangle): void
    /**
     * Compares the two rectangles
     * @param src2 The second rectangle
     * @returns Whether the two rectangles are equal
     */
    equal(src2: Rectangle): boolean
    free(): void
    /**
     * Similar to [method`Rectangle`.overlap] but ignores the vertical location.
     * @param rect2 The second rectangle
     * @returns Whether the two rectangles overlap horizontally
     */
    horizOverlap(rect2: Rectangle): boolean
    /**
     * Find the intersection between the two rectangles
     * @param src2 another #MtkRectangle
     * @returns TRUE is some intersection exists and is not degenerate, FALSE   otherwise.
     */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    isAdjacentTo(other: Rectangle): boolean
    /**
     * Similar to [method`Rectangle`.intersect] but doesn't provide
     * the location of the intersection.
     * @param rect2 The second rectangle
     * @returns Whether the two rectangles overlap
     */
    overlap(rect2: Rectangle): boolean
    scaleDouble(scale: number, roundingStrategy: RoundingStrategy, dest: Rectangle): void
    toGrapheneRect(): Graphene.Rect
    /**
     * Computes the union of the two rectangles
     * @param rect2 another #MtkRectangle
     */
    union(rect2: Rectangle): /* dest */ Rectangle
    /**
     * Similar to [method`Rectangle`.overlap] but ignores the horizontal location.
     * @param rect2 The second rectangle
     * @returns Whether the two rectangles overlap vertically
     */
    vertOverlap(rect2: Rectangle): boolean
}

class Rectangle {

    // Own properties of Mtk-14.Mtk.Rectangle

    static name: string

    // Constructors of Mtk-14.Mtk.Rectangle

    /**
     * Creates a new rectangle
     * @constructor 
     * @param x X coordinate of the top left corner
     * @param y Y coordinate of the top left corner
     * @param width Width of the rectangle
     * @param height Height of the rectangle
     */
    constructor(x: number, y: number, width: number, height: number) 
    /**
     * Creates a new rectangle
     * @constructor 
     * @param x X coordinate of the top left corner
     * @param y Y coordinate of the top left corner
     * @param width Width of the rectangle
     * @param height Height of the rectangle
     */
    static new(x: number, y: number, width: number, height: number): Rectangle
    static fromGrapheneRect(rect: Graphene.Rect, roundingStrategy: RoundingStrategy): /* dest */ Rectangle
}

interface Region {

    // Owm methods of Mtk-14.Mtk.Region

    applyMatrixTransformExpand(transform: Graphene.Matrix): Region
    containsPoint(x: number, y: number): boolean
    containsRectangle(rect: Rectangle): RegionOverlap
    copy(): Region
    cropAndScale(srcRect: Graphene.Rect, dstWidth: number, dstHeight: number): Region
    equal(other: Region): boolean
    getExtents(): Rectangle
    getRectangle(nth: number): Rectangle
    intersect(other: Region): void
    intersectRectangle(rect: Rectangle): void
    isEmpty(): boolean
    numRectangles(): number
    /**
     * Increases the reference count
     * @returns The region
     */
    ref(): Region
    scale(scale: number): Region
    subtract(other: Region): void
    subtractRectangle(rect: Rectangle): void
    translate(dx: number, dy: number): void
    union(other: Region): void
    unionRectangle(rect: Rectangle): void
    unref(): void
}

class Region {

    // Own properties of Mtk-14.Mtk.Region

    static name: string

    // Constructors of Mtk-14.Mtk.Region

    static create(): Region
    static createRectangle(rect: Rectangle): Region
    static createRectangles(rects: Rectangle, nRects: number): Region
}

interface RegionBuilder {

    // Own fields of Mtk-14.Mtk.RegionBuilder

    levels: Region[]
    nLevels: number

    // Owm methods of Mtk-14.Mtk.RegionBuilder

    addRectangle(x: number, y: number, width: number, height: number): void
    finish(): Region
    init(): void
}

class RegionBuilder {

    // Own properties of Mtk-14.Mtk.RegionBuilder

    static name: string
}

interface RegionIterator {

    // Own fields of Mtk-14.Mtk.RegionIterator

    /**
     * region being iterated
     * @field 
     */
    region: Region
    /**
     * current rectangle
     * @field 
     */
    rectangle: Rectangle
    /**
     * whether the current rectangle starts a horizontal band
     * @field 
     */
    lineStart: boolean
    /**
     * whether the current rectangle ends a horizontal band
     * @field 
     */
    lineEnd: boolean
    i: number

    // Owm methods of Mtk-14.Mtk.RegionIterator

    atEnd(): boolean
    init(region: Region): void
    next(): void
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
 * @record 
 */
class RegionIterator {

    // Own properties of Mtk-14.Mtk.RegionIterator

    static name: string
}

}

export default Mtk;
// END