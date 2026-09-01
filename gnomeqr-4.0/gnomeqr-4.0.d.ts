
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GnomeQR {

    /**
     * GnomeQR-4.0
     */


    /**
     * @gir-type Enum
     */
    export namespace EccLevel {
        export const $gtype: GObject.GType<EccLevel>;
    }

    /**
     * Error correction levels for QR codes. Higher levels provide better error
     * recovery at the cost of requiring bigger dimensions.
     * @gir-type Enum
     */
    enum EccLevel {
        /**
         * Low error correction (~7% recovery capability)
         */
        LOW = 0,
        /**
         * Medium error correction (~15% recovery capability)
         */
        MEDIUM = 1,
        /**
         * Quartile error correction (~25% recovery capability)
         */
        QUARTILE = 2,
        /**
         * High error correction (~30% recovery capability)
         */
        HIGH = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace PixelFormat {
        export const $gtype: GObject.GType<PixelFormat>;
    }

    /**
     * Pixel formats for the generated QR code image data.
     * @gir-type Enum
     */
    enum PixelFormat {
        A_8 = 0,
        G_8 = 1,
        /**
         * 24-bit RGB format (3 bytes per pixel)
         */
        RGB_888 = 2,
        /**
         * 32-bit RGBA format (4 bytes per pixel)
         */
        RGBA_8888 = 3,
    }


    /**
     * Generates the QrCode asynchronously.
     * 
     * Use `gnome_qr_generate_qr_code_finish()` to complete it.
     * @param text The text of which generate the QR code
     * @param requested_size The requested size (width and height) in pixels of the QR code.   Only square QR codes are supported. If the requested size is smaller than   the minimum required size for the QR code, it will be generated with 1 pixel   per block.
     * @param bg_color The background color of the code   or `null` to use default (white)
     * @param fg_color The foreground color of the code   or `null` to use default (black)
     * @param format The pixel format for the output image data
     * @param ecc The error correction level
     * @param cancellable A {@link Gio.Cancellable} to cancel the operation
     */
    function generate_qr_code_async(text: string, requested_size: bigint | number, bg_color: Color | null, fg_color: Color | null, format: PixelFormat, ecc: EccLevel, cancellable: Gio.Cancellable | null): globalThis.Promise<[GLib.Bytes, number]>;
    /**
     * Generates the QrCode asynchronously.
     * 
     * Use `gnome_qr_generate_qr_code_finish()` to complete it.
     * @param text The text of which generate the QR code
     * @param requested_size The requested size (width and height) in pixels of the QR code.   Only square QR codes are supported. If the requested size is smaller than   the minimum required size for the QR code, it will be generated with 1 pixel   per block.
     * @param bg_color The background color of the code   or `null` to use default (white)
     * @param fg_color The foreground color of the code   or `null` to use default (black)
     * @param format The pixel format for the output image data
     * @param ecc The error correction level
     * @param cancellable A {@link Gio.Cancellable} to cancel the operation
     * @param callback function to call returning success or failure   of the async grabbing
     */
    function generate_qr_code_async(text: string, requested_size: bigint | number, bg_color: Color | null, fg_color: Color | null, format: PixelFormat, ecc: EccLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<string> | null): void;
    /**
     * Generates the QrCode asynchronously.
     * 
     * Use `gnome_qr_generate_qr_code_finish()` to complete it.
     * @param text The text of which generate the QR code
     * @param requested_size The requested size (width and height) in pixels of the QR code.   Only square QR codes are supported. If the requested size is smaller than   the minimum required size for the QR code, it will be generated with 1 pixel   per block.
     * @param bg_color The background color of the code   or `null` to use default (white)
     * @param fg_color The foreground color of the code   or `null` to use default (black)
     * @param format The pixel format for the output image data
     * @param ecc The error correction level
     * @param cancellable A {@link Gio.Cancellable} to cancel the operation
     * @param callback function to call returning success or failure   of the async grabbing
     */
    function generate_qr_code_async(text: string, requested_size: bigint | number, bg_color: Color | null, fg_color: Color | null, format: PixelFormat, ecc: EccLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<string> | null): globalThis.Promise<[GLib.Bytes, number]> | void;

    /**
     * Finish the asynchronous operation started by
     * `gnome_qr_generate_qr_code_async()` and obtain its result.
     * @param result the {@link Gio.AsyncResult} that was provided to the callback
     * @returns The pixel data or `null` on error
     * @throws GLib.Error
     */
    function generate_qr_code_finish(result: Gio.AsyncResult): [GLib.Bytes, number];

    /**
     * Generates the QrCode synchronously.
     * @param text the text of which generate the QR code
     * @param requested_size The requested size (width and height) in pixels of the QR code.   Only square QR codes are supported. If the requested size is smaller than   the minimum required size for the QR code, it will be generated with 1 pixel   per block.
     * @param bg_color The background color of the code   or `null` to use default (white)
     * @param fg_color The foreground color of the code   or `null` to use default (black)
     * @param format The pixel format for the output image data
     * @param ecc The error correction level
     * @param cancellable A {@link Gio.Cancellable} to cancel the operation
     * @returns The pixel data or `null` on error
     * @throws GLib.Error
     */
    function generate_qr_code_sync(text: string, requested_size: bigint | number, bg_color: Color | null, fg_color: Color | null, format: PixelFormat, ecc: EccLevel, cancellable: Gio.Cancellable | null): [GLib.Bytes, number];

    /**
     * Represents an RGBA color for QR code generation.
     * @gir-type Struct
     */
    class Color {
        static $gtype: GObject.GType<Color>;

        // Fields
        red: number;

        green: number;

        blue: number;

        alpha: number;

        // Constructors

        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
            alpha: number;
        }>);
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

export default GnomeQR;

// END
