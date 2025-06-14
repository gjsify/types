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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstCodecs from '@girs/gstcodecs-1.0';

export namespace GstDxva {
    /**
     * GstDxva-1.0
     */

    export namespace DxvaCodec {
        export const $gtype: GObject.GType<DxvaCodec>;
    }

    enum DxvaCodec {
        NONE,
        MPEG2,
        H264,
        H265,
        VP8,
        VP9,
        AV1,
        LAST,
    }
    function dxva_codec_to_string(codec: DxvaCodec | null): string;
    namespace DxvaAV1Decoder {
        // Signal signatures
        interface SignalSignatures extends GstCodecs.AV1Decoder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstCodecs.AV1Decoder.ConstructorProps {}
    }

    abstract class DxvaAV1Decoder extends GstCodecs.AV1Decoder {
        static $gtype: GObject.GType<DxvaAV1Decoder>;

        // Constructors

        constructor(properties?: Partial<DxvaAV1Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DxvaAV1Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaAV1Decoder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DxvaAV1Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaAV1Decoder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DxvaAV1Decoder.SignalSignatures>(
            signal: K,
            ...args: DxvaAV1Decoder.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_configure(
            input_state: GstVideo.VideoCodecState,
            info: GstVideo.VideoInfo,
            crop_x: number,
            crop_y: number,
            coded_width: number,
            coded_height: number,
            max_dpb_size: number,
        ): Gst.FlowReturn;
        vfunc_duplicate_picture(src: never, dst: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.AV1Decoder.vfunc_duplicate_picture
        vfunc_duplicate_picture(...args: never[]): any;
        vfunc_get_picture_id(picture: never): number;
        vfunc_new_picture(picture: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.AV1Decoder.vfunc_new_picture
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(
            frame: GstVideo.VideoCodecFrame,
            picture: never,
            buffer_flags: GstVideo.VideoBufferFlags,
            display_width: number,
            display_height: number,
        ): Gst.FlowReturn;
        // Conflicted with GstCodecs.AV1Decoder.vfunc_output_picture
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: never, picture_id: number): Gst.FlowReturn;
        // Conflicted with GstCodecs.AV1Decoder.vfunc_start_picture
        vfunc_start_picture(...args: never[]): any;
    }

    namespace DxvaH264Decoder {
        // Signal signatures
        interface SignalSignatures extends GstCodecs.H264Decoder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstCodecs.H264Decoder.ConstructorProps {}
    }

    abstract class DxvaH264Decoder extends GstCodecs.H264Decoder {
        static $gtype: GObject.GType<DxvaH264Decoder>;

        // Constructors

        constructor(properties?: Partial<DxvaH264Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DxvaH264Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaH264Decoder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DxvaH264Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaH264Decoder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DxvaH264Decoder.SignalSignatures>(
            signal: K,
            ...args: DxvaH264Decoder.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_configure(
            input_state: GstVideo.VideoCodecState,
            info: GstVideo.VideoInfo,
            crop_x: number,
            crop_y: number,
            coded_width: number,
            coded_height: number,
            max_dpb_size: number,
        ): Gst.FlowReturn;
        vfunc_duplicate_picture(src: never, dst: never): Gst.FlowReturn;
        vfunc_get_picture_id(picture: never): number;
        vfunc_new_picture(picture: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.H264Decoder.vfunc_new_picture
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(
            frame: GstVideo.VideoCodecFrame,
            picture: never,
            buffer_flags: GstVideo.VideoBufferFlags,
            display_width: number,
            display_height: number,
        ): Gst.FlowReturn;
        // Conflicted with GstCodecs.H264Decoder.vfunc_output_picture
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: never, picture_id: number): Gst.FlowReturn;
        // Conflicted with GstCodecs.H264Decoder.vfunc_start_picture
        vfunc_start_picture(...args: never[]): any;
    }

    namespace DxvaH265Decoder {
        // Signal signatures
        interface SignalSignatures extends GstCodecs.H265Decoder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstCodecs.H265Decoder.ConstructorProps {}
    }

    abstract class DxvaH265Decoder extends GstCodecs.H265Decoder {
        static $gtype: GObject.GType<DxvaH265Decoder>;

        // Constructors

        constructor(properties?: Partial<DxvaH265Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DxvaH265Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaH265Decoder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DxvaH265Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaH265Decoder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DxvaH265Decoder.SignalSignatures>(
            signal: K,
            ...args: DxvaH265Decoder.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_configure(
            input_state: GstVideo.VideoCodecState,
            info: GstVideo.VideoInfo,
            crop_x: number,
            crop_y: number,
            coded_width: number,
            coded_height: number,
            max_dpb_size: number,
        ): Gst.FlowReturn;
        vfunc_get_picture_id(picture: never): number;
        vfunc_new_picture(picture: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.H265Decoder.vfunc_new_picture
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(
            frame: GstVideo.VideoCodecFrame,
            picture: never,
            buffer_flags: GstVideo.VideoBufferFlags,
            display_width: number,
            display_height: number,
        ): Gst.FlowReturn;
        // Conflicted with GstCodecs.H265Decoder.vfunc_output_picture
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: never, picture_id: number): Gst.FlowReturn;
        // Conflicted with GstCodecs.H265Decoder.vfunc_start_picture
        vfunc_start_picture(...args: never[]): any;
    }

    namespace DxvaMpeg2Decoder {
        // Signal signatures
        interface SignalSignatures extends GstCodecs.Mpeg2Decoder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstCodecs.Mpeg2Decoder.ConstructorProps {}
    }

    abstract class DxvaMpeg2Decoder extends GstCodecs.Mpeg2Decoder {
        static $gtype: GObject.GType<DxvaMpeg2Decoder>;

        // Constructors

        constructor(properties?: Partial<DxvaMpeg2Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DxvaMpeg2Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaMpeg2Decoder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DxvaMpeg2Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaMpeg2Decoder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DxvaMpeg2Decoder.SignalSignatures>(
            signal: K,
            ...args: DxvaMpeg2Decoder.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_configure(
            input_state: GstVideo.VideoCodecState,
            info: GstVideo.VideoInfo,
            crop_x: number,
            crop_y: number,
            coded_width: number,
            coded_height: number,
            max_dpb_size: number,
        ): Gst.FlowReturn;
        vfunc_duplicate_picture(src: never, dst: never): Gst.FlowReturn;
        vfunc_get_picture_id(picture: never): number;
        vfunc_new_picture(picture: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.Mpeg2Decoder.vfunc_new_picture
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(
            frame: GstVideo.VideoCodecFrame,
            picture: never,
            buffer_flags: GstVideo.VideoBufferFlags,
            display_width: number,
            display_height: number,
        ): Gst.FlowReturn;
        // Conflicted with GstCodecs.Mpeg2Decoder.vfunc_output_picture
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: never, picture_id: number): Gst.FlowReturn;
        // Conflicted with GstCodecs.Mpeg2Decoder.vfunc_start_picture
        vfunc_start_picture(...args: never[]): any;

        // Methods

        disable_postproc(): void;
    }

    namespace DxvaVp8Decoder {
        // Signal signatures
        interface SignalSignatures extends GstCodecs.Vp8Decoder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstCodecs.Vp8Decoder.ConstructorProps {}
    }

    abstract class DxvaVp8Decoder extends GstCodecs.Vp8Decoder {
        static $gtype: GObject.GType<DxvaVp8Decoder>;

        // Constructors

        constructor(properties?: Partial<DxvaVp8Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DxvaVp8Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaVp8Decoder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DxvaVp8Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaVp8Decoder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DxvaVp8Decoder.SignalSignatures>(
            signal: K,
            ...args: DxvaVp8Decoder.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_configure(
            input_state: GstVideo.VideoCodecState,
            info: GstVideo.VideoInfo,
            crop_x: number,
            crop_y: number,
            coded_width: number,
            coded_height: number,
            max_dpb_size: number,
        ): Gst.FlowReturn;
        vfunc_get_picture_id(picture: never): number;
        vfunc_new_picture(picture: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp8Decoder.vfunc_new_picture
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(
            frame: GstVideo.VideoCodecFrame,
            picture: never,
            buffer_flags: GstVideo.VideoBufferFlags,
            display_width: number,
            display_height: number,
        ): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp8Decoder.vfunc_output_picture
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: never, picture_id: number): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp8Decoder.vfunc_start_picture
        vfunc_start_picture(...args: never[]): any;
    }

    namespace DxvaVp9Decoder {
        // Signal signatures
        interface SignalSignatures extends GstCodecs.Vp9Decoder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GstCodecs.Vp9Decoder.ConstructorProps {}
    }

    abstract class DxvaVp9Decoder extends GstCodecs.Vp9Decoder {
        static $gtype: GObject.GType<DxvaVp9Decoder>;

        // Constructors

        constructor(properties?: Partial<DxvaVp9Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DxvaVp9Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaVp9Decoder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DxvaVp9Decoder.SignalSignatures>(
            signal: K,
            callback: DxvaVp9Decoder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DxvaVp9Decoder.SignalSignatures>(
            signal: K,
            ...args: DxvaVp9Decoder.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_configure(
            input_state: GstVideo.VideoCodecState,
            info: GstVideo.VideoInfo,
            crop_x: number,
            crop_y: number,
            coded_width: number,
            coded_height: number,
            max_dpb_size: number,
        ): Gst.FlowReturn;
        vfunc_duplicate_picture(src: never, dst: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp9Decoder.vfunc_duplicate_picture
        vfunc_duplicate_picture(...args: never[]): any;
        vfunc_get_picture_id(picture: never): number;
        vfunc_new_picture(picture: never): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp9Decoder.vfunc_new_picture
        vfunc_new_picture(...args: never[]): any;
        vfunc_output_picture(
            frame: GstVideo.VideoCodecFrame,
            picture: never,
            buffer_flags: GstVideo.VideoBufferFlags,
            display_width: number,
            display_height: number,
        ): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp9Decoder.vfunc_output_picture
        vfunc_output_picture(...args: never[]): any;
        vfunc_start_picture(picture: never, picture_id: number): Gst.FlowReturn;
        // Conflicted with GstCodecs.Vp9Decoder.vfunc_start_picture
        vfunc_start_picture(...args: never[]): any;
    }

    type DxvaAV1DecoderClass = typeof DxvaAV1Decoder;
    abstract class DxvaAV1DecoderPrivate {
        static $gtype: GObject.GType<DxvaAV1DecoderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class DxvaDecodingArgs {
        static $gtype: GObject.GType<DxvaDecodingArgs>;

        // Fields

        picture_params: any;
        picture_params_size: number;
        slice_control: any;
        slice_control_size: number;
        bitstream: any;
        bitstream_size: number;
        inverse_quantization_matrix: any;
        inverse_quantization_matrix_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                picture_params: any;
                picture_params_size: number;
                slice_control: any;
                slice_control_size: number;
                bitstream: any;
                bitstream_size: number;
                inverse_quantization_matrix: any;
                inverse_quantization_matrix_size: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DxvaH264DecoderClass = typeof DxvaH264Decoder;
    abstract class DxvaH264DecoderPrivate {
        static $gtype: GObject.GType<DxvaH264DecoderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DxvaH265DecoderClass = typeof DxvaH265Decoder;
    abstract class DxvaH265DecoderPrivate {
        static $gtype: GObject.GType<DxvaH265DecoderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DxvaMpeg2DecoderClass = typeof DxvaMpeg2Decoder;
    abstract class DxvaMpeg2DecoderPrivate {
        static $gtype: GObject.GType<DxvaMpeg2DecoderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class DxvaResolution {
        static $gtype: GObject.GType<DxvaResolution>;

        // Fields

        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DxvaVp8DecoderClass = typeof DxvaVp8Decoder;
    abstract class DxvaVp8DecoderPrivate {
        static $gtype: GObject.GType<DxvaVp8DecoderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DxvaVp9DecoderClass = typeof DxvaVp9Decoder;
    abstract class DxvaVp9DecoderPrivate {
        static $gtype: GObject.GType<DxvaVp9DecoderPrivate>;

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

export default GstDxva;

// END
