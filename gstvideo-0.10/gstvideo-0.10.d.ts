
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstVideo-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type GstBase from '@girs/gstbase-0.10';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
const BLUE_MASK_15_INT: number
const BLUE_MASK_16: string
const BLUE_MASK_16_INT: number
const BYTE1_MASK_24: string
const BYTE1_MASK_24_INT: number
const BYTE1_MASK_32: string
const BYTE1_MASK_32_INT: number
const BYTE2_MASK_24: string
const BYTE2_MASK_24_INT: number
const BYTE2_MASK_32: string
const BYTE2_MASK_32_INT: number
const BYTE3_MASK_24: string
const BYTE3_MASK_24_INT: number
const BYTE3_MASK_32: string
const BYTE3_MASK_32_INT: number
const BYTE4_MASK_32: string
const BYTE4_MASK_32_INT: number
const CAPS_RGB_15: string
const CAPS_RGB_16: string
const FPS_RANGE: string
const GREEN_MASK_15: string
const GREEN_MASK_15_INT: number
const GREEN_MASK_16: string
const GREEN_MASK_16_INT: number
const RED_MASK_15: string
const RED_MASK_15_INT: number
const RED_MASK_16: string
const RED_MASK_16_INT: number
const SIZE_RANGE: string
function calculate_display_ratio(video_width: number, video_height: number, video_par_n: number, video_par_d: number, display_par_n: number, display_par_d: number): [ /* returnType */ boolean, /* dar_n */ number, /* dar_d */ number ]
function event_new_still_frame(in_still: boolean): Gst.Event
function event_parse_still_frame(event: Gst.Event): [ /* returnType */ boolean, /* in_still */ boolean ]
function format_convert(format: Format, width: number, height: number, fps_n: number, fps_d: number, src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_value */ number ]
function format_from_fourcc(fourcc: number): Format
function format_get_component_height(format: Format, component: number, height: number): number
function format_get_component_offset(format: Format, component: number, width: number, height: number): number
function format_get_component_width(format: Format, component: number, width: number): number
function format_get_pixel_stride(format: Format, component: number): number
function format_get_row_stride(format: Format, component: number, width: number): number
function format_get_size(format: Format, width: number, height: number): number
function format_has_alpha(format: Format): boolean
function format_is_rgb(format: Format): boolean
function format_is_yuv(format: Format): boolean
function format_new_caps(format: Format, width: number, height: number, framerate_n: number, framerate_d: number, par_n: number, par_d: number): Gst.Caps
function format_new_caps_interlaced(format: Format, width: number, height: number, framerate_n: number, framerate_d: number, par_n: number, par_d: number, interlaced: boolean): Gst.Caps
function format_parse_caps(caps: Gst.Caps, format: Format): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
function format_parse_caps_interlaced(caps: Gst.Caps): [ /* returnType */ boolean, /* interlaced */ boolean ]
function format_to_fourcc(format: Format): number
function frame_rate(pad: Gst.Pad): any
function get_size(pad: Gst.Pad): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
function parse_caps_chroma_site(caps: Gst.Caps): string | null
function parse_caps_color_matrix(caps: Gst.Caps): string | null
function parse_caps_framerate(caps: Gst.Caps): [ /* returnType */ boolean, /* fps_n */ number, /* fps_d */ number ]
function parse_caps_pixel_aspect_ratio(caps: Gst.Caps): [ /* returnType */ boolean, /* par_n */ number, /* par_d */ number ]
module Filter {

    // Constructor properties interface

    interface ConstructorProperties extends GstBase.Transform.ConstructorProperties {
    }

}

interface Filter {

    // Conflicting properties

    object: any

    // Own fields of GstVideo-0.10.GstVideo.Filter

    element: any
    inited: boolean

    // Class property signals of GstVideo-0.10.GstVideo.Filter

    connect(sigName: "notify::qos", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Filter extends GstBase.Transform {

    // Own properties of GstVideo-0.10.GstVideo.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of GstVideo-0.10.GstVideo.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

module Sink {

    // Constructor properties interface

    interface ConstructorProperties extends GstBase.Sink.ConstructorProperties {

        // Own constructor properties of GstVideo-0.10.GstVideo.Sink

        show_preroll_frame?: boolean | null
    }

}

interface Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    show_preroll_frame: boolean

    // Conflicting properties

    object: any

    // Own fields of GstVideo-0.10.GstVideo.Sink

    element: any
    width: number
    height: number
    priv: any
    _gst_reserved: any

    // Own virtual methods of GstVideo-0.10.GstVideo.Sink

    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn

    // Class property signals of GstVideo-0.10.GstVideo.Sink

    connect(sigName: "notify::show-preroll-frame", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-preroll-frame", ...args: any[]): void
    connect(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: Sink.ConstructorProperties) 
    _init(config?: Sink.ConstructorProperties): void
    static center_rect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void
}

interface FilterClass {

    // Own fields of GstVideo-0.10.GstVideo.FilterClass

    parent_class: GstBase.TransformClass
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

    parent_class: GstBase.SinkClass
    show_frame: (video_sink: Sink, buf: Gst.Buffer) => Gst.FlowReturn
    _gst_reserved: any[]
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GstVideo;
// END