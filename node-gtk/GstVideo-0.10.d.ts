// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVideo-0.10
 */

import type libxml2 from './libxml2-2.0';
import type GstBase from './GstBase-0.10';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstVideo {

/**
 * Enum value describing the most common video formats.
 */
enum Format {
    UNKNOWN,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
}
const BLUE_MASK_15: string
const BLUE_MASK_15_INT: any
const BLUE_MASK_16: string
const BLUE_MASK_16_INT: any
const BYTE1_MASK_24: string
const BYTE1_MASK_24_INT: any
const BYTE1_MASK_32: string
const BYTE1_MASK_32_INT: any
const BYTE2_MASK_24: string
const BYTE2_MASK_24_INT: any
const BYTE2_MASK_32: string
const BYTE2_MASK_32_INT: any
const BYTE3_MASK_24: string
const BYTE3_MASK_24_INT: any
const BYTE3_MASK_32: string
const BYTE3_MASK_32_INT: any
const BYTE4_MASK_32: string
const BYTE4_MASK_32_INT: any
const CAPS_RGB_15: string
const CAPS_RGB_16: string
const FPS_RANGE: string
const GREEN_MASK_15: string
const GREEN_MASK_15_INT: any
const GREEN_MASK_16: string
const GREEN_MASK_16_INT: any
const RED_MASK_15: string
const RED_MASK_15_INT: any
const RED_MASK_16: string
const RED_MASK_16_INT: any
const SIZE_RANGE: string
function calculateDisplayRatio(videoWidth: number, videoHeight: number, videoParN: number, videoParD: number, displayParN: number, displayParD: number): [ /* returnType */ boolean, /* darN */ number, /* darD */ number ]
function eventNewStillFrame(inStill: boolean): Gst.Event
function eventParseStillFrame(event: Gst.Event): [ /* returnType */ boolean, /* inStill */ boolean ]
function formatConvert(format: Format, width: number, height: number, fpsN: number, fpsD: number, srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
function formatFromFourcc(fourcc: number): Format
function formatGetComponentHeight(format: Format, component: number, height: number): number
function formatGetComponentOffset(format: Format, component: number, width: number, height: number): number
function formatGetComponentWidth(format: Format, component: number, width: number): number
function formatGetPixelStride(format: Format, component: number): number
function formatGetRowStride(format: Format, component: number, width: number): number
function formatGetSize(format: Format, width: number, height: number): number
function formatHasAlpha(format: Format): boolean
function formatIsRgb(format: Format): boolean
function formatIsYuv(format: Format): boolean
function formatNewCaps(format: Format, width: number, height: number, framerateN: number, framerateD: number, parN: number, parD: number): Gst.Caps
function formatNewCapsInterlaced(format: Format, width: number, height: number, framerateN: number, framerateD: number, parN: number, parD: number, interlaced: boolean): Gst.Caps
function formatParseCaps(caps: Gst.Caps, format: Format): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
function formatParseCapsInterlaced(caps: Gst.Caps): [ /* returnType */ boolean, /* interlaced */ boolean ]
function formatToFourcc(format: Format): number
function frameRate(pad: Gst.Pad): any
function getSize(pad: Gst.Pad): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
function parseCapsChromaSite(caps: Gst.Caps): string
function parseCapsColorMatrix(caps: Gst.Caps): string
function parseCapsFramerate(caps: Gst.Caps): [ /* returnType */ boolean, /* fpsN */ number, /* fpsD */ number ]
function parseCapsPixelAspectRatio(caps: Gst.Caps): [ /* returnType */ boolean, /* parN */ number, /* parD */ number ]
interface Filter_ConstructProps extends GstBase.Transform_ConstructProps {
}

interface Filter {

    // Conflicting properties

    gstReserved: any
    object: any

    // Own fields of GstVideo-0.10.GstVideo.Filter

    element: GstBase.Transform
    inited: boolean

    // Class property signals of GstVideo-0.10.GstVideo.Filter

    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Filter extends GstBase.Transform {

    // Own properties of GstVideo-0.10.GstVideo.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of GstVideo-0.10.GstVideo.Filter

    constructor(config?: Filter_ConstructProps) 
    _init(config?: Filter_ConstructProps): void
}

interface Sink_ConstructProps extends GstBase.Sink_ConstructProps {

    // Own constructor properties of GstVideo-0.10.GstVideo.Sink

    showPrerollFrame?: boolean | null
}

interface Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    showPrerollFrame: boolean

    // Conflicting properties

    object: any

    // Own fields of GstVideo-0.10.GstVideo.Sink

    element: GstBase.Sink
    width: number
    height: number
    priv: SinkPrivate
    gstReserved: any[]

    // Class property signals of GstVideo-0.10.GstVideo.Sink

    connect(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-preroll-frame", ...args: any[]): void
    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The video sink instance structure. Derived video sinks should set the
 * @class 
 */
class Sink extends GstBase.Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    static name: string
    static $gtype: GObject.GType<Sink>

    // Constructors of GstVideo-0.10.GstVideo.Sink

    constructor(config?: Sink_ConstructProps) 
    _init(config?: Sink_ConstructProps): void
    static centerRect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void
}

interface FilterClass {

    // Own fields of GstVideo-0.10.GstVideo.FilterClass

    parentClass: GstBase.TransformClass
}

abstract class FilterClass {

    // Own properties of GstVideo-0.10.GstVideo.FilterClass

    static name: string
}

interface Rectangle {

    // Own fields of GstVideo-0.10.GstVideo.Rectangle

    x: number
    y: number
    w: number
    h: number
}

/**
 * Helper structure representing a rectangular area.
 * @record 
 */
class Rectangle {

    // Own properties of GstVideo-0.10.GstVideo.Rectangle

    static name: string
}

interface SinkClass {

    // Own fields of GstVideo-0.10.GstVideo.SinkClass

    parentClass: GstBase.SinkClass
    showFrame: (videoSink: Sink, buf: Gst.Buffer) => Gst.FlowReturn
    gstReserved: any[]
}

/**
 * The video sink class structure. Derived classes should override the
 * @record 
 */
abstract class SinkClass {

    // Own properties of GstVideo-0.10.GstVideo.SinkClass

    static name: string
}

interface SinkPrivate {
}

class SinkPrivate {

    // Own properties of GstVideo-0.10.GstVideo.SinkPrivate

    static name: string
}

}
export default GstVideo;