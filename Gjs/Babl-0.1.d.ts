/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Babl-0.1
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';

export namespace Babl {

enum IccIntent {
    PERCEPTUAL,
    RELATIVE_COLORIMETRIC,
    SATURATION,
    ABSOLUTE_COLORIMETRIC,
    PERFORMANCE,
}
enum SpaceFlags {
    NONE,
    EQUALIZE,
}
enum ModelFlag {
    /**
     * the model encodes alpha.
     */
    ALPHA,
    /**
     * the alpha is associated alpha.
     */
    ASSOCIATED,
    /**
     * the components are inverted (used for getting the additive complement space of CMYK).
     */
    INVERTED,
    /**
     * the data has no TRC, i.e. is linear
     */
    LINEAR,
    /**
     * the data has a TRC - the TRC from the configured space
     */
    NONLINEAR,
    /**
     * the data has a TRC - a perceptual TRC where 50% gray is 0.5
     */
    PERCEPTUAL,
    /**
     * this is a gray component model
     */
    GRAY,
    /**
     * this is an RGB based component model, the space associated is expected to contain an RGB matrix profile.
     */
    RGB,
    /**
     * this model is part of the CIE family of spaces
     */
    CIE,
    /**
     * the encodings described are CMYK encodings, the space associated is expected to contain an CMYK ICC profile.
     */
    CMYK,
}
const ALPHA_FLOOR: number
const ALPHA_FLOOR_F: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function component(name: string): Object
function conversion_get_destination_space(conversion: Object): Object
function conversion_get_source_space(conversion: Object): Object
function exit(): void
function fast_fish(source_format: object | null, destination_format: object | null, performance: string): Object
function fish(source_format?: object | null, destination_format?: object | null): Object
function format(encoding: string): Object
function format_exists(name: string): number
function format_get_bytes_per_pixel(format: Object): number
function format_get_encoding(babl: Object): string
function format_get_model(format: Object): Object
function format_get_n_components(format: Object): number
function format_get_space(format: Object): Object
function format_get_type(format: Object, component_index: number): Object
function format_has_alpha(format: Object): number
function format_is_format_n(format: Object): number
function format_is_palette(format: Object): number
function format_n(type: Object, components: number): Object
function format_with_space(encoding: string, space: Object): Object
function get_model_flags(model: Object): ModelFlag
function get_name(babl: Object): string
function get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function icc_get_key(icc_data: string, icc_length: number, key: string, language: string, country: string): string
function icc_make_space(icc_data: string, icc_length: number, intent: IccIntent, error: string): Object
function init(): void
function introspect(babl: Object): void
function model(name: string): Object
function model_is(babl: Object, model_name: string): number
function model_with_space(name: string, space: Object): Object
function new_palette(name: string, format_u8: Object, format_u8_with_alpha: Object): Object
function new_palette_with_space(name: string, space: Object, format_u8: Object, format_u8_with_alpha: Object): Object
function palette_reset(babl: Object): void
function palette_set_palette(babl: Object, format: Object, data: Uint8Array, count: number): void
function process(babl_fish: Object, source: object | null, destination: object | null, n: number): number
function process_rows(babl_fish: Object, source: object | null, source_stride: number, dest: object | null, dest_stride: number, n: number, rows: number): number
function sampling(horizontal: number, vertical: number): Object
function space(name: string): Object
function space_from_chromaticities(name: string | null, wx: number, wy: number, rx: number, ry: number, gx: number, gy: number, bx: number, by: number, trc_red: Object, trc_green: Object | null, trc_blue: Object | null, flags: SpaceFlags): Object
function space_from_icc(icc_data: string, icc_length: number, intent: IccIntent): [ /* returnType */ Object, /* error */ string ]
function space_from_rgbxyz_matrix(name: string | null, wx: number, wy: number, wz: number, rx: number, gx: number, bx: number, ry: number, gy: number, by: number, rz: number, gz: number, bz: number, trc_red: Object, trc_green?: Object | null, trc_blue?: Object | null): Object
function space_get(space: Object): [ /* xw */ number | null, /* yw */ number | null, /* xr */ number | null, /* yr */ number | null, /* xg */ number | null, /* yg */ number | null, /* xb */ number | null, /* yb */ number | null, /* red_trc */ Object | null, /* green_trc */ Object | null, /* blue_trc */ Object | null ]
function space_get_gamma(space: Object): number
function space_get_icc(babl: Object): [ /* returnType */ string, /* length */ number | null ]
function space_get_rgb_luminance(space: Object): [ /* red_luminance */ number | null, /* green_luminance */ number | null, /* blue_luminance */ number | null ]
function space_is_cmyk(space: Object): number
function space_is_gray(space: Object): number
function space_with_trc(space: Object, trc: Object): Object
function trc(name: string): Object
function trc_gamma(gamma: number): Object
function type(name: string): Object
interface FishProcess {
    (babl: Object, src: string, dst: string, n: number, data?: object | null): void
}
interface FuncLinear {
    (conversion: Object, src: string, dst: string, n: number): void
}
interface FuncPlanar {
    (conversion: Object, src_bands: number, src: string, src_pitch: number, dst_bands: number, dst: string, dst_pitch: number, n: number): void
}
class Object {
    static name: string
}
}
export default Babl;