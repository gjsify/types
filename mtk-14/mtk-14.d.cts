
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mtk-14-ambient.d.ts';
import './mtk-14-import.d.ts';
/**
 * Mtk-14
 */

import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum RegionOverlap {
    OUT,
    IN,
    PART,
}
export enum RoundingStrategy {
    SHRINK,
    GROW,
    ROUND,
}
export const RECTANGLE_MAX_STACK_RECTS: number
export const REGION_BUILDER_MAX_LEVELS: number
export function rectangle_from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): /* dest */ Rectangle
export function region_create(): Region
export function region_create_rectangle(rect: Rectangle): Region
export function region_create_rectangles(rects: Rectangle, n_rects: number): Region
export function x11_errors_deinit(): void
export interface Rectangle {

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
    contains_rect(inner_rect: Rectangle): boolean
    copy(): Rectangle
    could_fit_rect(inner_rect: Rectangle): boolean
    crop_and_scale(src_rect: Graphene.Rect, dst_width: number, dst_height: number, dest: Rectangle): void
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
    horiz_overlap(rect2: Rectangle): boolean
    /**
     * Find the intersection between the two rectangles
     * @param src2 another #MtkRectangle
     * @returns TRUE is some intersection exists and is not degenerate, FALSE   otherwise.
     */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    is_adjacent_to(other: Rectangle): boolean
    /**
     * Similar to [method`Rectangle`.intersect] but doesn't provide
     * the location of the intersection.
     * @param rect2 The second rectangle
     * @returns Whether the two rectangles overlap
     */
    overlap(rect2: Rectangle): boolean
    scale_double(scale: number, rounding_strategy: RoundingStrategy, dest: Rectangle): void
    to_graphene_rect(): Graphene.Rect
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
    vert_overlap(rect2: Rectangle): boolean
}

export class Rectangle {

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
    static from_graphene_rect(rect: Graphene.Rect, rounding_strategy: RoundingStrategy): /* dest */ Rectangle
}

export interface Region {

    // Owm methods of Mtk-14.Mtk.Region

    apply_matrix_transform_expand(transform: Graphene.Matrix): Region
    contains_point(x: number, y: number): boolean
    contains_rectangle(rect: Rectangle): RegionOverlap
    copy(): Region
    crop_and_scale(src_rect: Graphene.Rect, dst_width: number, dst_height: number): Region
    equal(other: Region): boolean
    get_extents(): Rectangle
    get_rectangle(nth: number): Rectangle
    intersect(other: Region): void
    intersect_rectangle(rect: Rectangle): void
    is_empty(): boolean
    num_rectangles(): number
    /**
     * Increases the reference count
     * @returns The region
     */
    ref(): Region
    scale(scale: number): Region
    subtract(other: Region): void
    subtract_rectangle(rect: Rectangle): void
    translate(dx: number, dy: number): void
    union(other: Region): void
    union_rectangle(rect: Rectangle): void
    unref(): void
}

export class Region {

    // Own properties of Mtk-14.Mtk.Region

    static name: string

    // Constructors of Mtk-14.Mtk.Region

    static create(): Region
    static create_rectangle(rect: Rectangle): Region
    static create_rectangles(rects: Rectangle, n_rects: number): Region
}

export interface RegionBuilder {

    // Own fields of Mtk-14.Mtk.RegionBuilder

    levels: Region[]
    n_levels: number

    // Owm methods of Mtk-14.Mtk.RegionBuilder

    add_rectangle(x: number, y: number, width: number, height: number): void
    finish(): Region
    init(): void
}

export class RegionBuilder {

    // Own properties of Mtk-14.Mtk.RegionBuilder

    static name: string
}

export interface RegionIterator {

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
    line_start: boolean
    /**
     * whether the current rectangle ends a horizontal band
     * @field 
     */
    line_end: boolean
    i: number

    // Owm methods of Mtk-14.Mtk.RegionIterator

    at_end(): boolean
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
export class RegionIterator {

    // Own properties of Mtk-14.Mtk.RegionIterator

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