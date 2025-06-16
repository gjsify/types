/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type GstBase from '@girs/gstbase-0.10';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVideo {
    /**
     * GstVideo-0.10
     */

    /**
     * Enum value describing the most common video formats.
     */

    /**
     * Enum value describing the most common video formats.
     */
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }

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
        format: Format | null,
        width: number,
        height: number,
        fps_n: number,
        fps_d: number,
        src_format: Gst.Format | null,
        src_value: number,
        dest_format: Gst.Format | null,
    ): [boolean, number];
    function format_from_fourcc(fourcc: number): Format;
    function format_get_component_height(format: Format | null, component: number, height: number): number;
    function format_get_component_offset(
        format: Format | null,
        component: number,
        width: number,
        height: number,
    ): number;
    function format_get_component_width(format: Format | null, component: number, width: number): number;
    function format_get_pixel_stride(format: Format | null, component: number): number;
    function format_get_row_stride(format: Format | null, component: number, width: number): number;
    function format_get_size(format: Format | null, width: number, height: number): number;
    function format_has_alpha(format: Format | null): boolean;
    function format_is_rgb(format: Format | null): boolean;
    function format_is_yuv(format: Format | null): boolean;
    function format_new_caps(
        format: Format | null,
        width: number,
        height: number,
        framerate_n: number,
        framerate_d: number,
        par_n: number,
        par_d: number,
    ): Gst.Caps;
    function format_new_caps_interlaced(
        format: Format | null,
        width: number,
        height: number,
        framerate_n: number,
        framerate_d: number,
        par_n: number,
        par_d: number,
        interlaced: boolean,
    ): Gst.Caps;
    function format_parse_caps(caps: Gst.Caps, format: Format | null): [boolean, number, number];
    function format_parse_caps_interlaced(caps: Gst.Caps): [boolean, boolean];
    function format_to_fourcc(format: Format | null): number;
    function frame_rate(pad: Gst.Pad): unknown;
    function get_size(pad: Gst.Pad): [boolean, number, number];
    function parse_caps_chroma_site(caps: Gst.Caps): string;
    function parse_caps_color_matrix(caps: Gst.Caps): string;
    function parse_caps_framerate(caps: Gst.Caps): [boolean, number, number];
    function parse_caps_pixel_aspect_ratio(caps: Gst.Caps): [boolean, number, number];
    namespace Filter {
        // Signal signatures
        interface SignalSignatures extends GstBase.Transform.SignalSignatures {
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.Transform.ConstructorProps {}
    }

    abstract class Filter extends GstBase.Transform {
        static $gtype: GObject.GType<Filter>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Filter.SignalSignatures;

        // Fields

        element: GstBase.Transform;
        inited: boolean;

        // Constructors

        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Filter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Sink {
        // Signal signatures
        interface SignalSignatures extends GstBase.Sink.SignalSignatures {
            'notify::show-preroll-frame': (pspec: GObject.ParamSpec) => void;
            'notify::async': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::enable-last-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::last-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::max-lateness': (pspec: GObject.ParamSpec) => void;
            'notify::preroll-queue-len': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::render-delay': (pspec: GObject.ParamSpec) => void;
            'notify::sync': (pspec: GObject.ParamSpec) => void;
            'notify::ts-offset': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

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

        // Properties

        get show_preroll_frame(): boolean;
        set show_preroll_frame(val: boolean);
        get showPrerollFrame(): boolean;
        set showPrerollFrame(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Sink.SignalSignatures;

        // Fields

        element: GstBase.Sink;
        width: number;
        height: number;

        // Constructors

        constructor(properties?: Partial<Sink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Sink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Sink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Sink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static center_rect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void;

        // Virtual methods

        vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn;
    }

    type FilterClass = typeof Filter;
    /**
     * Helper structure representing a rectangular area.
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields

        x: number;
        y: number;
        w: number;
        h: number;

        // Constructors

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

        // Constructors

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
