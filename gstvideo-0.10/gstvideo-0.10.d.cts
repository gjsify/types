
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstvideo-0.10-ambient.d.ts';
import './gstvideo-0.10-import.d.ts';
/**
 * GstVideo-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type GstBase from '@girs/gstbase-0.10';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Enum value describing the most common video formats.
 */
export enum Format {
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
export const BLUE_MASK_15: string
export const BLUE_MASK_15_INT: number
export const BLUE_MASK_16: string
export const BLUE_MASK_16_INT: number
export const BYTE1_MASK_24: string
export const BYTE1_MASK_24_INT: number
export const BYTE1_MASK_32: string
export const BYTE1_MASK_32_INT: number
export const BYTE2_MASK_24: string
export const BYTE2_MASK_24_INT: number
export const BYTE2_MASK_32: string
export const BYTE2_MASK_32_INT: number
export const BYTE3_MASK_24: string
export const BYTE3_MASK_24_INT: number
export const BYTE3_MASK_32: string
export const BYTE3_MASK_32_INT: number
export const BYTE4_MASK_32: string
export const BYTE4_MASK_32_INT: number
export const CAPS_RGB_15: string
export const CAPS_RGB_16: string
export const FPS_RANGE: string
export const GREEN_MASK_15: string
export const GREEN_MASK_15_INT: number
export const GREEN_MASK_16: string
export const GREEN_MASK_16_INT: number
export const RED_MASK_15: string
export const RED_MASK_15_INT: number
export const RED_MASK_16: string
export const RED_MASK_16_INT: number
export const SIZE_RANGE: string
export function calculate_display_ratio(video_width: number, video_height: number, video_par_n: number, video_par_d: number, display_par_n: number, display_par_d: number): [ /* returnType */ boolean, /* dar_n */ number, /* dar_d */ number ]
export function event_new_still_frame(in_still: boolean): Gst.Event
export function event_parse_still_frame(event: Gst.Event): [ /* returnType */ boolean, /* in_still */ boolean ]
export function format_convert(format: Format, width: number, height: number, fps_n: number, fps_d: number, src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_value */ number ]
export function format_from_fourcc(fourcc: number): Format
export function format_get_component_height(format: Format, component: number, height: number): number
export function format_get_component_offset(format: Format, component: number, width: number, height: number): number
export function format_get_component_width(format: Format, component: number, width: number): number
export function format_get_pixel_stride(format: Format, component: number): number
export function format_get_row_stride(format: Format, component: number, width: number): number
export function format_get_size(format: Format, width: number, height: number): number
export function format_has_alpha(format: Format): boolean
export function format_is_rgb(format: Format): boolean
export function format_is_yuv(format: Format): boolean
export function format_new_caps(format: Format, width: number, height: number, framerate_n: number, framerate_d: number, par_n: number, par_d: number): Gst.Caps
export function format_new_caps_interlaced(format: Format, width: number, height: number, framerate_n: number, framerate_d: number, par_n: number, par_d: number, interlaced: boolean): Gst.Caps
export function format_parse_caps(caps: Gst.Caps, format: Format): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
export function format_parse_caps_interlaced(caps: Gst.Caps): [ /* returnType */ boolean, /* interlaced */ boolean ]
export function format_to_fourcc(format: Format): number
export function frame_rate(pad: Gst.Pad): any
export function get_size(pad: Gst.Pad): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
export function parse_caps_chroma_site(caps: Gst.Caps): string | null
export function parse_caps_color_matrix(caps: Gst.Caps): string | null
export function parse_caps_framerate(caps: Gst.Caps): [ /* returnType */ boolean, /* fps_n */ number, /* fps_d */ number ]
export function parse_caps_pixel_aspect_ratio(caps: Gst.Caps): [ /* returnType */ boolean, /* par_n */ number, /* par_d */ number ]
export module Filter {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.Transform.ConstructorProperties {
    }

}

export interface Filter {

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

export class Filter extends GstBase.Transform {

    // Own properties of GstVideo-0.10.GstVideo.Filter

    static name: string
    static $gtype: GObject.GType<Filter>

    // Constructors of GstVideo-0.10.GstVideo.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

export module Sink {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.Sink.ConstructorProperties {

        // Own constructor properties of GstVideo-0.10.GstVideo.Sink

        showPrerollFrame?: boolean | null
    }

}

export interface Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    showPrerollFrame: boolean

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
export class Sink extends GstBase.Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    static name: string
    static $gtype: GObject.GType<Sink>

    // Constructors of GstVideo-0.10.GstVideo.Sink

    constructor(config?: Sink.ConstructorProperties) 
    _init(config?: Sink.ConstructorProperties): void
    static center_rect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void
}

export interface FilterClass {

    // Own fields of GstVideo-0.10.GstVideo.FilterClass

    parent_class: GstBase.TransformClass
}

export abstract class FilterClass {

    // Own properties of GstVideo-0.10.GstVideo.FilterClass

    static name: string
}

export interface Rectangle {

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
export class Rectangle {

    // Own properties of GstVideo-0.10.GstVideo.Rectangle

    static name: string
}

export interface SinkClass {

    // Own fields of GstVideo-0.10.GstVideo.SinkClass

    parent_class: GstBase.SinkClass
    show_frame: (video_sink: Sink, buf: Gst.Buffer) => Gst.FlowReturn
    _gst_reserved: any[]
}

/**
 * The video sink class structure. Derived classes should override the
 * @record 
 */
export abstract class SinkClass {

    // Own properties of GstVideo-0.10.GstVideo.SinkClass

    static name: string
}

export interface SinkPrivate {
}

export class SinkPrivate {

    // Own properties of GstVideo-0.10.GstVideo.SinkPrivate

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