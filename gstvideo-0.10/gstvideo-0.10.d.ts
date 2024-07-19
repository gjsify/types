/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type GstBase from '@girs/gstbase-0.10';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * GstVideo-0.10
 */

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
    const BLUE_MASK_15_INT: number;
    const BLUE_MASK_16: string;
    const BLUE_MASK_16_INT: number;
    const BYTE1_MASK_24: string;
    const BYTE1_MASK_24_INT: number;
    const BYTE1_MASK_32: string;
    const BYTE1_MASK_32_INT: number;
    const BYTE2_MASK_24: string;
    const BYTE2_MASK_24_INT: number;
    const BYTE2_MASK_32: string;
    const BYTE2_MASK_32_INT: number;
    const BYTE3_MASK_24: string;
    const BYTE3_MASK_24_INT: number;
    const BYTE3_MASK_32: string;
    const BYTE3_MASK_32_INT: number;
    const BYTE4_MASK_32: string;
    const BYTE4_MASK_32_INT: number;
    const CAPS_RGB_15: string;
    const CAPS_RGB_16: string;
    const FPS_RANGE: string;
    const GREEN_MASK_15: string;
    const GREEN_MASK_15_INT: number;
    const GREEN_MASK_16: string;
    const GREEN_MASK_16_INT: number;
    const RED_MASK_15: string;
    const RED_MASK_15_INT: number;
    const RED_MASK_16: string;
    const RED_MASK_16_INT: number;
    const SIZE_RANGE: string;
    function calculate_display_ratio(
        video_width: number,
        video_height: number,
        video_par_n: number,
        video_par_d: number,
        display_par_n: number,
        display_par_d: number,
    ): [boolean, number, number];
    function event_new_still_frame(in_still: boolean): Gst.Event;
    function event_parse_still_frame(event: Gst.Event): [boolean, boolean];
    function format_convert(
        format: Format,
        width: number,
        height: number,
        fps_n: number,
        fps_d: number,
        src_format: Gst.Format,
        src_value: number,
        dest_format: Gst.Format,
    ): [boolean, number];
    function format_from_fourcc(fourcc: number): Format;
    function format_get_component_height(format: Format, component: number, height: number): number;
    function format_get_component_offset(format: Format, component: number, width: number, height: number): number;
    function format_get_component_width(format: Format, component: number, width: number): number;
    function format_get_pixel_stride(format: Format, component: number): number;
    function format_get_row_stride(format: Format, component: number, width: number): number;
    function format_get_size(format: Format, width: number, height: number): number;
    function format_has_alpha(format: Format): boolean;
    function format_is_rgb(format: Format): boolean;
    function format_is_yuv(format: Format): boolean;
    function format_new_caps(
        format: Format,
        width: number,
        height: number,
        framerate_n: number,
        framerate_d: number,
        par_n: number,
        par_d: number,
    ): Gst.Caps;
    function format_new_caps_interlaced(
        format: Format,
        width: number,
        height: number,
        framerate_n: number,
        framerate_d: number,
        par_n: number,
        par_d: number,
        interlaced: boolean,
    ): Gst.Caps;
    function format_parse_caps(caps: Gst.Caps, format: Format): [boolean, number, number];
    function format_parse_caps_interlaced(caps: Gst.Caps): [boolean, boolean];
    function format_to_fourcc(format: Format): number;
    function frame_rate(pad: Gst.Pad): unknown;
    function get_size(pad: Gst.Pad): [boolean, number, number];
    function parse_caps_chroma_site(caps: Gst.Caps): string;
    function parse_caps_color_matrix(caps: Gst.Caps): string;
    function parse_caps_framerate(caps: Gst.Caps): [boolean, number, number];
    function parse_caps_pixel_aspect_ratio(caps: Gst.Caps): [boolean, number, number];
    module Filter {
        // Constructor properties interface

        interface ConstructorProps extends GstBase.Transform.ConstructorProps {}
    }

    abstract class Filter extends GstBase.Transform {
        static $gtype: GObject.GType<Filter>;

        // Own fields of GstVideo.Filter

        element: GstBase.Transform;
        inited: boolean;

        // Constructors of GstVideo.Filter

        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Sink {
        // Constructor properties interface

        interface ConstructorProps extends GstBase.Sink.ConstructorProps {
            show_preroll_frame: boolean;
            showPrerollFrame: boolean;
        }
    }

    /**
     * The video sink instance structure. Derived video sinks should set the
     */
    class Sink extends GstBase.Sink {
        static $gtype: GObject.GType<Sink>;

        // Own properties of GstVideo.Sink

        get show_preroll_frame(): boolean;
        set show_preroll_frame(val: boolean);
        get showPrerollFrame(): boolean;
        set showPrerollFrame(val: boolean);

        // Own fields of GstVideo.Sink

        element: GstBase.Sink;
        width: number;
        height: number;

        // Constructors of GstVideo.Sink

        constructor(properties?: Partial<Sink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of GstVideo.Sink

        static center_rect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void;

        // Own virtual methods of GstVideo.Sink

        vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn;
    }

    type FilterClass = typeof Filter;
    /**
     * Helper structure representing a rectangular area.
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Own fields of GstVideo.Rectangle

        x: number;
        y: number;
        w: number;
        h: number;

        // Constructors of GstVideo.Rectangle

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                w: number;
                h: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type SinkClass = typeof Sink;
    class SinkPrivate {
        static $gtype: GObject.GType<SinkPrivate>;

        // Constructors of GstVideo.SinkPrivate

        _init(...args: any[]): void;
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

export default GstVideo;
// END
