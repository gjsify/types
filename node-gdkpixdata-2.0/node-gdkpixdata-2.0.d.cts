
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gdkpixdata-2.0-import.d.ts';
    
/**
 * GdkPixdata-2.0
 */

import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * An enumeration which is used by gdk_pixdata_to_csource() to
 * determine the form of C source to be generated. The three values
 * `GDK_PIXDATA_DUMP_PIXDATA_STREAM,` `GDK_PIXDATA_DUMP_PIXDATA_STRUCT`
 * and `GDK_PIXDATA_DUMP_MACROS` are mutually exclusive, as are
 * `GDK_PIXBUF_DUMP_GTYPES` and `GDK_PIXBUF_DUMP_CTYPES`. The remaining
 * elements are optional flags that can be freely added.
 * @bitfield 
 */
export enum PixdataDumpType {
    /**
     * Generate pixbuf data stream (a single
     *    string containing a serialized #GdkPixdata structure in network byte
     *    order).
     */
    PIXDATA_STREAM,
    /**
     * Generate #GdkPixdata structure (needs
     *    the #GdkPixdata structure definition from gdk-pixdata.h).
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
 * An enumeration containing three sets of flags for a #GdkPixdata struct:
 * one for the used colorspace, one for the width of the samples and one
 * for the encoding of the pixel data.
 * @bitfield 
 */
export enum PixdataType {
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
 * Magic number for #GdkPixdata structures.
 */
export const PIXBUF_MAGIC_NUMBER: number
/**
 * The length of a #GdkPixdata structure without the `pixel_data` pointer.
 */
export const PIXDATA_HEADER_LENGTH: number
/**
 * Converts a `GdkPixdata` to a `GdkPixbuf`.
 * 
 * If `copy_pixels` is `TRUE` or if the pixel data is run-length-encoded,
 * the pixel data is copied into newly-allocated memory; otherwise it is
 * reused.
 * @param pixdata a #GdkPixdata to convert into a `GdkPixbuf`.
 * @param copyPixels whether to copy raw pixel data; run-length encoded   pixel data is always copied.
 * @returns a new pixbuf
 */
export function pixbufFromPixdata(pixdata: Pixdata, copyPixels: boolean): GdkPixbuf.Pixbuf
export interface Pixdata {

    // Own fields of GdkPixdata-2.0.GdkPixdata.Pixdata

    /**
     * magic number. A valid `GdkPixdata` structure must have
     *   `GDK_PIXBUF_MAGIC_NUMBER` here
     * @field 
     */
    magic: number
    /**
     * less than 1 to disable length checks, otherwise
     *   `GDK_PIXDATA_HEADER_LENGTH` plus the length of `pixel_data`
     * @field 
     */
    length: number
    /**
     * information about colorspace, sample width and
     *   encoding, in a `GdkPixdataType`
     * @field 
     */
    pixdataType: number
    /**
     * Distance in bytes between rows
     * @field 
     */
    rowstride: number
    /**
     * Width of the image in pixels
     * @field 
     */
    width: number
    /**
     * Height of the image in pixels
     * @field 
     */
    height: number
    /**
     * `width` x `height`
     *   pixels, encoded according to `pixdata_type` and `rowstride`
     * @field 
     */
    pixelData: number[]

    // Owm methods of GdkPixdata-2.0.GdkPixdata.Pixdata

    /**
     * Deserializes (reconstruct) a #GdkPixdata structure from a byte stream.
     * 
     * The byte stream consists of a straightforward writeout of the
     * `GdkPixdata` fields in network byte order, plus the `pixel_data`
     * bytes the structure points to.
     * 
     * The `pixdata` contents are reconstructed byte by byte and are checked
     * for validity.
     * 
     * This function may fail with `GDK_PIXBUF_ERROR_CORRUPT_IMAGE`
     * or `GDK_PIXBUF_ERROR_UNKNOWN_TYPE`.
     * @param stream stream of bytes containing a   serialized #GdkPixdata structure.
     * @returns Upon successful deserialization `TRUE` is returned, `FALSE` otherwise.
     */
    deserialize(stream: number[]): boolean
    /**
     * Serializes a #GdkPixdata structure into a byte stream.
     * The byte stream consists of a straightforward writeout of the
     * #GdkPixdata fields in network byte order, plus the `pixel_data`
     * bytes the structure points to.
     * @returns A newly-allocated string containing the serialized #GdkPixdata structure.
     */
    serialize(): number[]
    /**
     * Generates C source code suitable for compiling images directly
     * into programs.
     * 
     * GdkPixbuf ships with a program called `gdk-pixbuf-csource`, which offers
     * a command line interface to this function.
     * @param name used for naming generated data structures or macros
     * @param dumpType the kind of C source to be generated
     * @returns a newly-allocated string buffer containing   the C source form of `pixdata`.
     */
    toCsource(name: string, dumpType: PixdataDumpType): GLib.String
}

/**
 * A pixel buffer suitable for serialization and streaming.
 * 
 * Using `GdkPixdata`, images can be compiled into an application,
 * making it unnecessary to refer to external image files at runtime.
 * 
 * `GdkPixbuf` includes a utility named `gdk-pixbuf-csource`, which
 * can be used to convert image files into `GdkPixdata` structures suitable
 * for inclusion in C sources. To convert the `GdkPixdata` structures back
 * into a `GdkPixbuf`, use `gdk_pixbuf_from_pixdata()`.
 * @record 
 */
export class Pixdata {

    // Own properties of GdkPixdata-2.0.GdkPixdata.Pixdata

    static name: string
}

// END