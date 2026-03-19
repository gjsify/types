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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GdkPixdata {
    /**
     * GdkPixdata-2.0
     */

    /**
     * Magic number for {@link GdkPixdata.Pixdata} structures.
     */
    const PIXBUF_MAGIC_NUMBER: number;
    /**
     * The length of a {@link GdkPixdata.Pixdata} structure without the `pixel_data` pointer.
     * @deprecated since 2.32
     */
    const PIXDATA_HEADER_LENGTH: number;
    /**
     * Converts a {@link GdkPixdata.Pixdata} to a {@link GdkPixbuf.Pixbuf}.
     *
     * If `copy_pixels` is `TRUE` or if the pixel data is run-length-encoded,
     * the pixel data is copied into newly-allocated memory; otherwise it is
     * reused.
     * @param pixdata a {@link GdkPixdata.Pixdata} to convert into a {@link GdkPixbuf.Pixbuf}.
     * @param copy_pixels whether to copy raw pixel data; run-length encoded   pixel data is always copied.
     * @returns a new pixbuf
     * @deprecated since 2.32: Use {@link Gio.Resource} instead.
     */
    function pixbuf_from_pixdata(pixdata: Pixdata, copy_pixels: boolean): GdkPixbuf.Pixbuf;
    /**
     * An enumeration which is used by `gdk_pixdata_to_csource()` to
     * determine the form of C source to be generated. The three values
     * `GDK_PIXDATA_DUMP_PIXDATA_STREAM`, `GDK_PIXDATA_DUMP_PIXDATA_STRUCT`
     * and `GDK_PIXDATA_DUMP_MACROS` are mutually exclusive, as are
     * `GDK_PIXBUF_DUMP_GTYPES` and `GDK_PIXBUF_DUMP_CTYPES`. The remaining
     * elements are optional flags that can be freely added.
     * @gir-type Flags
     * @deprecated since 2.32
     */
    enum PixdataDumpType {
        /**
         * Generate pixbuf data stream (a single
         *    string containing a serialized {@link GdkPixdata.Pixdata} structure in network byte
         *    order).
         */
        PIXDATA_STREAM,
        /**
         * Generate {@link GdkPixdata.Pixdata} structure (needs
         *    the {@link GdkPixdata.Pixdata} structure definition from gdk-pixdata.h).
         */
        PIXDATA_STRUCT,
        /**
         * Generate <function>*_ROWSTRIDE</function>,
         *    <function>*_WIDTH</function>, <function>*_HEIGHT</function>,
         *    <function>*_BYTES_PER_PIXEL</function> and
         *    <function>*_RLE_PIXEL_DATA</function> or <function>*_PIXEL_DATA</function>
         *    macro definitions for the image.
         */
        MACROS,
        /**
         * Generate GLib data types instead of
         *    standard C data types.
         */
        GTYPES,
        /**
         * Generate standard C data types instead of
         *    GLib data types.
         */
        CTYPES,
        /**
         * Generate static symbols.
         */
        STATIC,
        /**
         * Generate const symbols.
         */
        CONST,
        /**
         * Provide a <function>*_RUN_LENGTH_DECODE(image_buf, rle_data, size, bpp)</function>
         *    macro definition  to  decode  run-length encoded image data.
         */
        RLE_DECODER,
    }

    /**
     * An enumeration containing three sets of flags for a {@link GdkPixdata.Pixdata} struct:
     * one for the used colorspace, one for the width of the samples and one
     * for the encoding of the pixel data.
     * @gir-type Flags
     * @deprecated since 2.32
     */
    enum PixdataType {
        /**
         * each pixel has red, green and blue samples.
         */
        COLOR_TYPE_RGB,
        /**
         * each pixel has red, green and blue samples
         *    and an alpha value.
         */
        COLOR_TYPE_RGBA,
        /**
         * mask for the colortype flags of the enum.
         */
        COLOR_TYPE_MASK,
        /**
         * each sample has 8 bits.
         */
        SAMPLE_WIDTH_8,
        /**
         * mask for the sample width flags of the enum.
         */
        SAMPLE_WIDTH_MASK,
        /**
         * the pixel data is in raw form.
         */
        ENCODING_RAW,
        /**
         * the pixel data is run-length encoded. Runs may
         *    be up to 127 bytes long; their length is stored in a single byte
         *    preceding the pixel data for the run. If a run is constant, its length
         *    byte has the high bit set and the pixel data consists of a single pixel
         *    which must be repeated.
         */
        ENCODING_RLE,
        /**
         * mask for the encoding flags of the enum.
         */
        ENCODING_MASK,
    }

    /**
     * A pixel buffer suitable for serialization and streaming.
     *
     * Using {@link GdkPixdata.Pixdata}, images can be compiled into an application,
     * making it unnecessary to refer to external image files at runtime.
     *
     * {@link GdkPixbuf.Pixbuf} includes a utility named `gdk-pixbuf-csource`, which
     * can be used to convert image files into {@link GdkPixdata.Pixdata} structures suitable
     * for inclusion in C sources. To convert the {@link GdkPixdata.Pixdata} structures back
     * into a {@link GdkPixbuf.Pixbuf}, use `gdk_pixbuf_from_pixdata()`.
     * @gir-type Struct
     * @deprecated since 2.32: {@link GdkPixdata.Pixdata} should not be used any more. {@link Gio.Resource}   should be used to save the original compressed images inside the   program's binary
     */
    class Pixdata {
        static $gtype: GObject.GType<Pixdata>;

        // Fields

        magic: number;
        length: number;
        pixdata_type: number;
        rowstride: number;
        width: number;
        height: number;
        pixel_data: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                magic: number;
                length: number;
                pixdata_type: number;
                rowstride: number;
                width: number;
                height: number;
                pixel_data: Uint8Array;
            }>,
        );

        // Methods

        /**
         * Deserializes (reconstruct) a {@link GdkPixdata.Pixdata} structure from a byte stream.
         *
         * The byte stream consists of a straightforward writeout of the
         * {@link GdkPixdata.Pixdata} fields in network byte order, plus the `pixel_data`
         * bytes the structure points to.
         *
         * The `pixdata` contents are reconstructed byte by byte and are checked
         * for validity.
         *
         * This function may fail with `GDK_PIXBUF_ERROR_CORRUPT_IMAGE`
         * or `GDK_PIXBUF_ERROR_UNKNOWN_TYPE`.
         * @param stream stream of bytes containing a   serialized {@link GdkPixdata.Pixdata} structure.
         * @returns Upon successful deserialization `TRUE` is returned, `FALSE` otherwise.
         */
        deserialize(stream: Uint8Array | string): boolean;
        /**
         * Serializes a {@link GdkPixdata.Pixdata} structure into a byte stream.
         * The byte stream consists of a straightforward writeout of the
         * {@link GdkPixdata.Pixdata} fields in network byte order, plus the `pixel_data`
         * bytes the structure points to.
         * @returns A newly-allocated string containing the serialized {@link GdkPixdata.Pixdata} structure.
         */
        serialize(): Uint8Array;
        /**
         * Generates C source code suitable for compiling images directly
         * into programs.
         *
         * GdkPixbuf ships with a program called `gdk-pixbuf-csource`, which offers
         * a command line interface to this function.
         * @param name used for naming generated data structures or macros
         * @param dump_type the kind of C source to be generated
         * @returns a newly-allocated string buffer containing   the C source form of `pixdata`.
         */
        to_csource(name: string, dump_type: PixdataDumpType | null): GLib.String;
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

export default GdkPixdata;

// END
