/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Babl-0.1
 */

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
function conversionGetDestinationSpace(conversion: Object): Object
function conversionGetSourceSpace(conversion: Object): Object
function exit(): void
function fastFish(sourceFormat: object | null, destinationFormat: object | null, performance: string): Object
function fish(sourceFormat?: object | null, destinationFormat?: object | null): Object
function format(encoding: string): Object
function formatExists(name: string): number
function formatGetBytesPerPixel(format: Object): number
function formatGetEncoding(babl: Object): string
function formatGetModel(format: Object): Object
function formatGetNComponents(format: Object): number
function formatGetSpace(format: Object): Object
function formatGetType(format: Object, componentIndex: number): Object
function formatHasAlpha(format: Object): number
function formatIsFormatN(format: Object): number
function formatIsPalette(format: Object): number
function formatN(type: Object, components: number): Object
function formatWithSpace(encoding: string, space: Object): Object
function getModelFlags(model: Object): ModelFlag
function getName(babl: Object): string
function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function iccGetKey(iccData: string, iccLength: number, key: string, language: string, country: string): string
function iccMakeSpace(iccData: string, iccLength: number, intent: IccIntent, error: string): Object
function init(): void
function introspect(babl: Object): void
function model(name: string): Object
function modelIs(babl: Object, modelName: string): number
function modelWithSpace(name: string, space: Object): Object
function newPalette(name: string, formatU8: Object, formatU8WithAlpha: Object): Object
function newPaletteWithSpace(name: string, space: Object, formatU8: Object, formatU8WithAlpha: Object): Object
function paletteReset(babl: Object): void
function paletteSetPalette(babl: Object, format: Object, data: Uint8Array, count: number): void
function process(bablFish: Object, source: object | null, destination: object | null, n: number): number
function processRows(bablFish: Object, source: object | null, sourceStride: number, dest: object | null, destStride: number, n: number, rows: number): number
function sampling(horizontal: number, vertical: number): Object
function space(name: string): Object
function spaceFromChromaticities(name: string | null, wx: number, wy: number, rx: number, ry: number, gx: number, gy: number, bx: number, by: number, trcRed: Object, trcGreen: Object | null, trcBlue: Object | null, flags: SpaceFlags): Object
function spaceFromIcc(iccData: string, iccLength: number, intent: IccIntent): [ /* returnType */ Object, /* error */ string ]
function spaceFromRgbxyzMatrix(name: string | null, wx: number, wy: number, wz: number, rx: number, gx: number, bx: number, ry: number, gy: number, by: number, rz: number, gz: number, bz: number, trcRed: Object, trcGreen?: Object | null, trcBlue?: Object | null): Object
function spaceGet(space: Object): [ /* xw */ number | null, /* yw */ number | null, /* xr */ number | null, /* yr */ number | null, /* xg */ number | null, /* yg */ number | null, /* xb */ number | null, /* yb */ number | null, /* redTrc */ Object | null, /* greenTrc */ Object | null, /* blueTrc */ Object | null ]
function spaceGetGamma(space: Object): number
function spaceGetIcc(babl: Object): [ /* returnType */ string, /* length */ number | null ]
function spaceGetRgbLuminance(space: Object): [ /* redLuminance */ number | null, /* greenLuminance */ number | null, /* blueLuminance */ number | null ]
function spaceIsCmyk(space: Object): number
function spaceIsGray(space: Object): number
function spaceWithTrc(space: Object, trc: Object): Object
function trc(name: string): Object
function trcGamma(gamma: number): Object
function type(name: string): Object
interface FishProcess {
    (babl: Object, src: string, dst: string, n: number, data?: object | null): void
}
interface FuncLinear {
    (conversion: Object, src: string, dst: string, n: number): void
}
interface FuncPlanar {
    (conversion: Object, srcBands: number, src: string, srcPitch: number, dstBands: number, dst: string, dstPitch: number, n: number): void
}
class Object {
    static name: string
}
}
export default Babl;