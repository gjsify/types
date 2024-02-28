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
    const BLUE_MASK_15: string;
    const BLUE_MASK_15_INT: int;
    const BLUE_MASK_16: string;
    const BLUE_MASK_16_INT: int;
    const BYTE1_MASK_24: string;
    const BYTE1_MASK_24_INT: int;
    const BYTE1_MASK_32: string;
    const BYTE1_MASK_32_INT: int;
    const BYTE2_MASK_24: string;
    const BYTE2_MASK_24_INT: int;
    const BYTE2_MASK_32: string;
    const BYTE2_MASK_32_INT: int;
    const BYTE3_MASK_24: string;
    const BYTE3_MASK_24_INT: int;
    const BYTE3_MASK_32: string;
    const BYTE3_MASK_32_INT: int;
    const BYTE4_MASK_32: string;
    const BYTE4_MASK_32_INT: int;
    const CAPS_RGB_15: string;
    const CAPS_RGB_16: string;
    const FPS_RANGE: string;
    const GREEN_MASK_15: string;
    const GREEN_MASK_15_INT: int;
    const GREEN_MASK_16: string;
    const GREEN_MASK_16_INT: int;
    const RED_MASK_15: string;
    const RED_MASK_15_INT: int;
    const RED_MASK_16: string;
    const RED_MASK_16_INT: int;
    const SIZE_RANGE: string;
    function calculate_display_ratio(
        video_width: uint,
        video_height: uint,
        video_par_n: uint,
        video_par_d: uint,
        display_par_n: uint,
        display_par_d: uint,
    ): boolean;
    function event_new_still_frame(in_still: boolean): Gst.Event;
    function event_parse_still_frame(event: Gst.Event): boolean;
    function format_convert(
        format: Format,
        width: int,
        height: int,
        fps_n: int,
        fps_d: int,
        src_format: Gst.Format,
        src_value: int64,
        dest_format: Gst.Format,
    ): boolean;
    function format_from_fourcc(fourcc: number): Format;
    function format_get_component_height(format: Format, component: int, height: int): int;
    function format_get_component_offset(format: Format, component: int, width: int, height: int): int;
    function format_get_component_width(format: Format, component: int, width: int): int;
    function format_get_pixel_stride(format: Format, component: int): int;
    function format_get_row_stride(format: Format, component: int, width: int): int;
    function format_get_size(format: Format, width: int, height: int): int;
    function format_has_alpha(format: Format): boolean;
    function format_is_rgb(format: Format): boolean;
    function format_is_yuv(format: Format): boolean;
    function format_new_caps(
        format: Format,
        width: int,
        height: int,
        framerate_n: int,
        framerate_d: int,
        par_n: int,
        par_d: int,
    ): Gst.Caps;
    function format_new_caps_interlaced(
        format: Format,
        width: int,
        height: int,
        framerate_n: int,
        framerate_d: int,
        par_n: int,
        par_d: int,
        interlaced: boolean,
    ): Gst.Caps;
    function format_parse_caps(caps: Gst.Caps, format: Format): boolean;
    function format_parse_caps_interlaced(caps: Gst.Caps): boolean;
    function format_to_fourcc(format: Format): number;
    function frame_rate(pad: Gst.Pad): GObject.Value;
    function get_size(pad: Gst.Pad): boolean;
    function parse_caps_chroma_site(caps: Gst.Caps): string;
    function parse_caps_color_matrix(caps: Gst.Caps): string;
    function parse_caps_framerate(caps: Gst.Caps): boolean;
    function parse_caps_pixel_aspect_ratio(caps: Gst.Caps): boolean;
    module Filter {
        // Constructor properties interface
    }

    abstract class Filter extends GstBase.Transform {
        // Own fields of GstVideo-0.10.Filter

        element: GstBase.Transform;
        inited: boolean;
    }

    module Sink {
        // Constructor properties interface
    }

    /**
     * The video sink instance structure. Derived video sinks should set the
     */
    class Sink extends GstBase.Sink {
        // Own properties of GstVideo-0.10.Sink

        show_preroll_frame: boolean;
        showPrerollFrame: boolean;

        // Own fields of GstVideo-0.10.Sink

        element: GstBase.Sink;
        width: int;
        height: int;

        // Owm methods of GstVideo-0.10.Sink

        static center_rect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void;
    }

    class FilterClass {}

    /**
     * Helper structure representing a rectangular area.
     */
    class Rectangle {
        // Own fields of GstVideo-0.10.Rectangle

        x: int;
        y: int;
        w: int;
        h: int;
    }

    /**
     * The video sink class structure. Derived classes should override the
     */
    class SinkClass {}

    class SinkPrivate {}

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

export default GstVideo;
// END
