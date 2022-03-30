/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkPixbuf-2.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GdkPixbuf {

/**
 * This enumeration defines the color spaces that are supported by
 * the gdk-pixbuf library.
 * 
 * Currently only RGB is supported.
 */
enum Colorspace {
    /**
     * Indicates a red/green/blue additive color space.
     */
    RGB,
}
/**
 * Interpolation modes for scaling functions.
 * 
 * The `GDK_INTERP_NEAREST` mode is the fastest scaling method, but has
 * horrible quality when scaling down; `GDK_INTERP_BILINEAR` is the best
 * choice if you aren't sure what to choose, it has a good speed/quality
 * balance.
 * 
 * **Note**: Cubic filtering is missing from the list; hyperbolic
 * interpolation is just as fast and results in higher quality.
 */
enum InterpType {
    /**
     * Nearest neighbor sampling; this is the fastest
     *  and lowest quality mode. Quality is normally unacceptable when scaling
     *  down, but may be OK when scaling up.
     */
    NEAREST,
    /**
     * This is an accurate simulation of the PostScript
     *  image operator without any interpolation enabled.  Each pixel is
     *  rendered as a tiny parallelogram of solid color, the edges of which
     *  are implemented with antialiasing.  It resembles nearest neighbor for
     *  enlargement, and bilinear for reduction.
     */
    TILES,
    /**
     * Best quality/speed balance; use this mode by
     *  default. Bilinear interpolation.  For enlargement, it is
     *  equivalent to point-sampling the ideal bilinear-interpolated image.
     *  For reduction, it is equivalent to laying down small tiles and
     *  integrating over the coverage area.
     */
    BILINEAR,
    /**
     * This is the slowest and highest quality
     *  reconstruction function. It is derived from the hyperbolic filters in
     *  Wolberg's "Digital Image Warping", and is formally defined as the
     *  hyperbolic-filter sampling the ideal hyperbolic-filter interpolated
     *  image (the filter is designed to be idempotent for 1:1 pixel mapping).
     *  **Deprecated**: this interpolation filter is deprecated, as in reality
     *  it has a lower quality than the `GDK_INTERP_BILINEAR` filter
     *  (Since: 2.38)
     */
    HYPER,
}
/**
 * Control the alpha channel for drawables.
 * 
 * These values can be passed to gdk_pixbuf_xlib_render_to_drawable_alpha()
 * in gdk-pixbuf-xlib to control how the alpha channel of an image should
 * be handled.
 * 
 * This function can create a bilevel clipping mask (black and white) and use
 * it while painting the image.
 * 
 * In the future, when the X Window System gets an alpha channel extension,
 * it will be possible to do full alpha compositing onto arbitrary drawables.
 * For now both cases fall back to a bilevel clipping mask.
 */
enum PixbufAlphaMode {
    /**
     * A bilevel clipping mask (black and white)
     *  will be created and used to draw the image.  Pixels below 0.5 opacity
     *  will be considered fully transparent, and all others will be
     *  considered fully opaque.
     */
    BILEVEL,
    /**
     * For now falls back to #GDK_PIXBUF_ALPHA_BILEVEL.
     *  In the future it will do full alpha compositing.
     */
    FULL,
}
/**
 * An error code in the `GDK_PIXBUF_ERROR` domain.
 * 
 * Many gdk-pixbuf operations can cause errors in this domain, or in
 * the `G_FILE_ERROR` domain.
 */
enum PixbufError {
    /**
     * An image file was broken somehow.
     */
    CORRUPT_IMAGE,
    /**
     * Not enough memory.
     */
    INSUFFICIENT_MEMORY,
    /**
     * A bad option was passed to a pixbuf save module.
     */
    BAD_OPTION,
    /**
     * Unknown image type.
     */
    UNKNOWN_TYPE,
    /**
     * Don't know how to perform the
     *  given operation on the type of image at hand.
     */
    UNSUPPORTED_OPERATION,
    /**
     * Generic failure code, something went wrong.
     */
    FAILED,
    /**
     * Only part of the animation was loaded.
     */
    INCOMPLETE_ANIMATION,
}
/**
 * The possible rotations which can be passed to gdk_pixbuf_rotate_simple().
 * 
 * To make them easier to use, their numerical values are the actual degrees.
 */
enum PixbufRotation {
    /**
     * No rotation.
     */
    NONE,
    /**
     * Rotate by 90 degrees.
     */
    COUNTERCLOCKWISE,
    /**
     * Rotate by 180 degrees.
     */
    UPSIDEDOWN,
    /**
     * Rotate by 270 degrees.
     */
    CLOCKWISE,
}
/**
 * Flags which allow a module to specify further details about the supported
 * operations.
 */
enum PixbufFormatFlags {
    /**
     * the module can write out images in the format.
     */
    WRITABLE,
    /**
     * the image format is scalable
     */
    SCALABLE,
    /**
     * the module is threadsafe. gdk-pixbuf
     *     ignores modules that are not marked as threadsafe. (Since 2.28).
     */
    THREADSAFE,
}
/**
 * Major version of gdk-pixbuf library, that is the "0" in
 * "0.8.2" for example.
 */
const PIXBUF_MAJOR: number
/**
 * Micro version of gdk-pixbuf library, that is the "2" in
 * "0.8.2" for example.
 */
const PIXBUF_MICRO: number
/**
 * Minor version of gdk-pixbuf library, that is the "8" in
 * "0.8.2" for example.
 */
const PIXBUF_MINOR: number
/**
 * Contains the full version of GdkPixbuf as a string.
 * 
 * This is the version being compiled against; contrast with
 * `gdk_pixbuf_version`.
 */
const PIXBUF_VERSION: string
function pixbufErrorQuark(): GLib.Quark
/**
 * A function of this type is responsible for freeing the pixel array
 * of a pixbuf.
 * 
 * The gdk_pixbuf_new_from_data() function lets you pass in a pre-allocated
 * pixel array so that a pixbuf can be created from it; in this case you
 * will need to pass in a function of type `GdkPixbufDestroyNotify` so that
 * the pixel data can be freed when the pixbuf is finalized.
 */
interface PixbufDestroyNotify {
    (pixels: Uint8Array): void
}
/**
 * Defines the type of the function used to fill a
 * #GdkPixbufFormat structure with information about a module.
 */
interface PixbufModuleFillInfoFunc {
    (info: PixbufFormat): void
}
/**
 * Defines the type of the function used to set the vtable of a
 * #GdkPixbufModule when it is loaded.
 */
interface PixbufModuleFillVtableFunc {
    (module: PixbufModule): void
}
/**
 * Defines the type of the function that gets called once the initial
 * setup of `pixbuf` is done.
 * 
 * #GdkPixbufLoader uses a function of this type to emit the
 * "<link linkend="GdkPixbufLoader-area-prepared">area_prepared</link>"
 * signal.
 */
interface PixbufModulePreparedFunc {
    (pixbuf: Pixbuf, anim: PixbufAnimation): void
}
/**
 * Defines the type of the function that gets called once the size
 * of the loaded image is known.
 * 
 * The function is expected to set `width` and `height` to the desired
 * size to which the image should be scaled. If a module has no efficient
 * way to achieve the desired scaling during the loading of the image, it may
 * either ignore the size request, or only approximate it - gdk-pixbuf will
 * then perform the required scaling on the completely loaded image.
 * 
 * If the function sets `width` or `height` to zero, the module should interpret
 * this as a hint that it will be closed soon and shouldn't allocate further
 * resources. This convention is used to implement gdk_pixbuf_get_file_info()
 * efficiently.
 */
interface PixbufModuleSizeFunc {
    (width: number, height: number): void
}
/**
 * Defines the type of the function that gets called every time a region
 * of `pixbuf` is updated.
 * 
 * #GdkPixbufLoader uses a function of this type to emit the
 * "<link linkend="GdkPixbufLoader-area-updated">area_updated</link>"
 * signal.
 */
interface PixbufModuleUpdatedFunc {
    (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void
}
/**
 * Save functions used by [method`GdkPixbuf`.Pixbuf.save_to_callback].
 * 
 * This function is called once for each block of bytes that is "written"
 * by `gdk_pixbuf_save_to_callback()`.
 * 
 * If successful it should return `TRUE`; if an error occurs it should set
 * `error` and return `FALSE`, in which case `gdk_pixbuf_save_to_callback()`
 * will fail with the same error.
 */
interface PixbufSaveFunc {
    (buf: Uint8Array): boolean
}
interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * The number of bits per sample.
     * 
     * Currently only 8 bit per sample are supported.
     */
    bitsPerSample?: number
    /**
     * The color space of the pixbuf.
     * 
     * Currently, only `GDK_COLORSPACE_RGB` is supported.
     */
    colorspace?: Colorspace
    /**
     * Whether the pixbuf has an alpha channel.
     */
    hasAlpha?: boolean
    /**
     * The number of rows of the pixbuf.
     */
    height?: number
    /**
     * The number of samples per pixel.
     * 
     * Currently, only 3 or 4 samples per pixel are supported.
     */
    nChannels?: number
    pixelBytes?: any
    /**
     * A pointer to the pixel data of the pixbuf.
     */
    pixels?: object
    /**
     * The number of bytes between the start of a row and
     * the start of the next row.
     * 
     * This number must (obviously) be at least as large as the
     * width of the pixbuf.
     */
    rowstride?: number
    /**
     * The number of columns of the pixbuf.
     */
    width?: number
}
class Pixbuf {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * The number of bits per sample.
     * 
     * Currently only 8 bit per sample are supported.
     */
    readonly bitsPerSample: number
    /**
     * The color space of the pixbuf.
     * 
     * Currently, only `GDK_COLORSPACE_RGB` is supported.
     */
    readonly colorspace: Colorspace
    /**
     * Whether the pixbuf has an alpha channel.
     */
    readonly hasAlpha: boolean
    /**
     * The number of rows of the pixbuf.
     */
    readonly height: number
    /**
     * The number of samples per pixel.
     * 
     * Currently, only 3 or 4 samples per pixel are supported.
     */
    readonly nChannels: number
    readonly pixelBytes: any
    /**
     * A pointer to the pixel data of the pixbuf.
     */
    readonly pixels: object
    /**
     * The number of bytes between the start of a row and
     * the start of the next row.
     * 
     * This number must (obviously) be at least as large as the
     * width of the pixbuf.
     */
    readonly rowstride: number
    /**
     * The number of columns of the pixbuf.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * Takes an existing pixbuf and adds an alpha channel to it.
     * 
     * If the existing pixbuf already had an alpha channel, the channel
     * values are copied from the original; otherwise, the alpha channel
     * is initialized to 255 (full opacity).
     * 
     * If `substitute_color` is `TRUE`, then the color specified by the
     * (`r`, `g`, `b`) arguments will be assigned zero opacity. That is,
     * if you pass `(255, 255, 255)` for the substitute color, all white
     * pixels will become fully transparent.
     * 
     * If `substitute_color` is `FALSE`, then the (`r`, `g`, `b`) arguments
     * will be ignored.
     * @param substituteColor Whether to set a color to zero opacity.
     * @param r Red value to substitute.
     * @param g Green value to substitute.
     * @param b Blue value to substitute.
     */
    addAlpha(substituteColor: boolean, r: number, g: number, b: number): Pixbuf
    /**
     * Takes an existing pixbuf and checks for the presence of an
     * associated "orientation" option.
     * 
     * The orientation option may be provided by the JPEG loader (which
     * reads the exif orientation tag) or the TIFF loader (which reads
     * the TIFF orientation tag, and compensates it for the partial
     * transforms performed by libtiff).
     * 
     * If an orientation option/tag is present, the appropriate transform
     * will be performed so that the pixbuf is oriented correctly.
     */
    applyEmbeddedOrientation(): Pixbuf | null
    /**
     * Creates a transformation of the source image `src` by scaling by
     * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y`.
     * 
     * This gives an image in the coordinates of the destination pixbuf.
     * The rectangle (`dest_x,` `dest_y,` `dest_width,` `dest_height)`
     * is then alpha blended onto the corresponding rectangle of the
     * original destination image.
     * 
     * When the destination rectangle contains parts not in the source
     * image, the data at the edges of the source image is replicated
     * to infinity.
     * 
     * ![](composite.png)
     * @param dest the #GdkPixbuf into which to render the results
     * @param destX the left coordinate for region to render
     * @param destY the top coordinate for region to render
     * @param destWidth the width of the region to render
     * @param destHeight the height of the region to render
     * @param offsetX the offset in the X direction (currently rounded to an integer)
     * @param offsetY the offset in the Y direction (currently rounded to an integer)
     * @param scaleX the scale factor in the X direction
     * @param scaleY the scale factor in the Y direction
     * @param interpType the interpolation type for the transformation.
     * @param overallAlpha overall alpha for source image (0..255)
     */
    composite(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number): void
    /**
     * Creates a transformation of the source image `src` by scaling by
     * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y,`
     * then alpha blends the rectangle (`dest_x` ,`dest_y,` `dest_width,`
     * `dest_height)` of the resulting image with a checkboard of the
     * colors `color1` and `color2` and renders it onto the destination
     * image.
     * 
     * If the source image has no alpha channel, and `overall_alpha` is 255, a fast
     * path is used which omits the alpha blending and just performs the scaling.
     * 
     * See gdk_pixbuf_composite_color_simple() for a simpler variant of this
     * function suitable for many tasks.
     * @param dest the #GdkPixbuf into which to render the results
     * @param destX the left coordinate for region to render
     * @param destY the top coordinate for region to render
     * @param destWidth the width of the region to render
     * @param destHeight the height of the region to render
     * @param offsetX the offset in the X direction (currently rounded to an integer)
     * @param offsetY the offset in the Y direction (currently rounded to an integer)
     * @param scaleX the scale factor in the X direction
     * @param scaleY the scale factor in the Y direction
     * @param interpType the interpolation type for the transformation.
     * @param overallAlpha overall alpha for source image (0..255)
     * @param checkX the X offset for the checkboard (origin of checkboard is at -`check_x,` -`check_y)`
     * @param checkY the Y offset for the checkboard
     * @param checkSize the size of checks in the checkboard (must be a power of two)
     * @param color1 the color of check at upper left
     * @param color2 the color of the other check
     */
    compositeColor(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType, overallAlpha: number, checkX: number, checkY: number, checkSize: number, color1: number, color2: number): void
    /**
     * Creates a new pixbuf by scaling `src` to `dest_width` x `dest_height`
     * and alpha blending the result with a checkboard of colors `color1`
     * and `color2`.
     * @param destWidth the width of destination image
     * @param destHeight the height of destination image
     * @param interpType the interpolation type for the transformation.
     * @param overallAlpha overall alpha for source image (0..255)
     * @param checkSize the size of checks in the checkboard (must be a power of two)
     * @param color1 the color of check at upper left
     * @param color2 the color of the other check
     */
    compositeColorSimple(destWidth: number, destHeight: number, interpType: InterpType, overallAlpha: number, checkSize: number, color1: number, color2: number): Pixbuf | null
    /**
     * Creates a new `GdkPixbuf` with a copy of the information in the specified
     * `pixbuf`.
     * 
     * Note that this does not copy the options set on the original `GdkPixbuf`,
     * use gdk_pixbuf_copy_options() for this.
     */
    copy(): Pixbuf | null
    /**
     * Copies a rectangular area from `src_pixbuf` to `dest_pixbuf`.
     * 
     * Conversion of pixbuf formats is done automatically.
     * 
     * If the source rectangle overlaps the destination rectangle on the
     * same pixbuf, it will be overwritten during the copy operation.
     * Therefore, you can not use this function to scroll a pixbuf.
     * @param srcX Source X coordinate within `src_pixbuf`.
     * @param srcY Source Y coordinate within `src_pixbuf`.
     * @param width Width of the area to copy.
     * @param height Height of the area to copy.
     * @param destPixbuf Destination pixbuf.
     * @param destX X coordinate within `dest_pixbuf`.
     * @param destY Y coordinate within `dest_pixbuf`.
     */
    copyArea(srcX: number, srcY: number, width: number, height: number, destPixbuf: Pixbuf, destX: number, destY: number): void
    /**
     * Copies the key/value pair options attached to a `GdkPixbuf` to another
     * `GdkPixbuf`.
     * 
     * This is useful to keep original metadata after having manipulated
     * a file. However be careful to remove metadata which you've already
     * applied, such as the "orientation" option after rotating the image.
     * @param destPixbuf the destination pixbuf
     */
    copyOptions(destPixbuf: Pixbuf): boolean
    /**
     * Clears a pixbuf to the given RGBA value, converting the RGBA value into
     * the pixbuf's pixel format.
     * 
     * The alpha component will be ignored if the pixbuf doesn't have an alpha
     * channel.
     * @param pixel RGBA pixel to used to clear (`0xffffffff` is opaque white,   `0x00000000` transparent black)
     */
    fill(pixel: number): void
    /**
     * Flips a pixbuf horizontally or vertically and returns the
     * result in a new pixbuf.
     * @param horizontal `TRUE` to flip horizontally, `FALSE` to flip vertically
     */
    flip(horizontal: boolean): Pixbuf | null
    /**
     * Queries the number of bits per color sample in a pixbuf.
     */
    getBitsPerSample(): number
    /**
     * Returns the length of the pixel data, in bytes.
     */
    getByteLength(): number
    /**
     * Queries the color space of a pixbuf.
     */
    getColorspace(): Colorspace
    /**
     * Queries whether a pixbuf has an alpha channel (opacity information).
     */
    getHasAlpha(): boolean
    /**
     * Queries the height of a pixbuf.
     */
    getHeight(): number
    /**
     * Queries the number of channels of a pixbuf.
     */
    getNChannels(): number
    /**
     * Looks up `key` in the list of options that may have been attached to the
     * `pixbuf` when it was loaded, or that may have been attached by another
     * function using gdk_pixbuf_set_option().
     * 
     * For instance, the ANI loader provides "Title" and "Artist" options.
     * The ICO, XBM, and XPM loaders provide "x_hot" and "y_hot" hot-spot
     * options for cursor definitions. The PNG loader provides the tEXt ancillary
     * chunk key/value pairs as options. Since 2.12, the TIFF and JPEG loaders
     * return an "orientation" option string that corresponds to the embedded
     * TIFF/Exif orientation tag (if present). Since 2.32, the TIFF loader sets
     * the "multipage" option string to "yes" when a multi-page TIFF is loaded.
     * Since 2.32 the JPEG and PNG loaders set "x-dpi" and "y-dpi" if the file
     * contains image density information in dots per inch.
     * Since 2.36.6, the JPEG loader sets the "comment" option with the comment
     * EXIF tag.
     * @param key a nul-terminated string.
     */
    getOption(key: string): string | null
    /**
     * Returns a `GHashTable` with a list of all the options that may have been
     * attached to the `pixbuf` when it was loaded, or that may have been
     * attached by another function using [method`GdkPixbuf`.Pixbuf.set_option].
     */
    getOptions(): GLib.HashTable
    /**
     * Queries a pointer to the pixel data of a pixbuf.
     * 
     * This function will cause an implicit copy of the pixbuf data if the
     * pixbuf was created from read-only data.
     * 
     * Please see the section on [image data](class.Pixbuf.html#image-data) for information
     * about how the pixel data is stored in memory.
     */
    getPixels(): Uint8Array
    /**
     * Queries the rowstride of a pixbuf, which is the number of bytes between
     * the start of a row and the start of the next row.
     */
    getRowstride(): number
    /**
     * Queries the width of a pixbuf.
     */
    getWidth(): number
    /**
     * Creates a new pixbuf which represents a sub-region of `src_pixbuf`.
     * 
     * The new pixbuf shares its pixels with the original pixbuf, so
     * writing to one affects both.  The new pixbuf holds a reference to
     * `src_pixbuf`, so `src_pixbuf` will not be finalized until the new
     * pixbuf is finalized.
     * 
     * Note that if `src_pixbuf` is read-only, this function will force it
     * to be mutable.
     * @param srcX X coord in `src_pixbuf`
     * @param srcY Y coord in `src_pixbuf`
     * @param width width of region in `src_pixbuf`
     * @param height height of region in `src_pixbuf`
     */
    newSubpixbuf(srcX: number, srcY: number, width: number, height: number): Pixbuf
    /**
     * Provides a #GBytes buffer containing the raw pixel data; the data
     * must not be modified.
     * 
     * This function allows skipping the implicit copy that must be made
     * if gdk_pixbuf_get_pixels() is called on a read-only pixbuf.
     */
    readPixelBytes(): any
    /**
     * Provides a read-only pointer to the raw pixel data.
     * 
     * This function allows skipping the implicit copy that must be made
     * if gdk_pixbuf_get_pixels() is called on a read-only pixbuf.
     */
    readPixels(): number
    /**
     * Removes the key/value pair option attached to a `GdkPixbuf`.
     * @param key a nul-terminated string representing the key to remove.
     */
    removeOption(key: string): boolean
    /**
     * Rotates a pixbuf by a multiple of 90 degrees, and returns the
     * result in a new pixbuf.
     * 
     * If `angle` is 0, this function will return a copy of `src`.
     * @param angle the angle to rotate by
     */
    rotateSimple(angle: PixbufRotation): Pixbuf | null
    /**
     * Modifies saturation and optionally pixelates `src`, placing the result in
     * `dest`.
     * 
     * The `src` and `dest` pixbufs must have the same image format, size, and
     * rowstride.
     * 
     * The `src` and `dest` arguments may be the same pixbuf with no ill effects.
     * 
     * If `saturation` is 1.0 then saturation is not changed. If it's less than 1.0,
     * saturation is reduced (the image turns toward grayscale); if greater than
     * 1.0, saturation is increased (the image gets more vivid colors).
     * 
     * If `pixelate` is `TRUE`, then pixels are faded in a checkerboard pattern to
     * create a pixelated image.
     * @param dest place to write modified version of `src`
     * @param saturation saturation factor
     * @param pixelate whether to pixelate
     */
    saturateAndPixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    /**
     * Vector version of `gdk_pixbuf_save_to_buffer()`.
     * 
     * Saves pixbuf to a new buffer in format `type,` which is currently "jpeg",
     * "tiff", "png", "ico" or "bmp".
     * 
     * See [method`GdkPixbuf`.Pixbuf.save_to_buffer] for more details.
     * @param type name of file format.
     * @param optionKeys name of options to set
     * @param optionValues values for named options
     */
    saveToBufferv(type: string, optionKeys?: string[] | null, optionValues?: string[] | null): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    /**
     * Vector version of `gdk_pixbuf_save_to_callback()`.
     * 
     * Saves pixbuf to a callback in format `type,` which is currently "jpeg",
     * "png", "tiff", "ico" or "bmp".
     * 
     * If `error` is set, `FALSE` will be returned.
     * 
     * See [method`GdkPixbuf`.Pixbuf.save_to_callback] for more details.
     * @param saveFunc a function that is called to save each block of data that   the save routine generates.
     * @param type name of file format.
     * @param optionKeys name of options to set
     * @param optionValues values for named options
     */
    saveToCallbackv(saveFunc: PixbufSaveFunc, type: string, optionKeys?: string[] | null, optionValues?: string[] | null): boolean
    /**
     * Saves `pixbuf` to an output stream.
     * 
     * Supported file formats are currently "jpeg", "tiff", "png", "ico" or
     * "bmp".
     * 
     * See [method`GdkPixbuf`.Pixbuf.save_to_stream] for more details.
     * @param stream a `GOutputStream` to save the pixbuf to
     * @param type name of file format
     * @param optionKeys name of options to set
     * @param optionValues values for named options
     * @param cancellable optional `GCancellable` object, `NULL` to ignore
     */
    saveToStreamv(stream: Gio.OutputStream, type: string, optionKeys?: string[] | null, optionValues?: string[] | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Saves `pixbuf` to an output stream asynchronously.
     * 
     * For more details see gdk_pixbuf_save_to_streamv(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * 
     * You can then call gdk_pixbuf_save_to_stream_finish() to get the result of
     * the operation.
     * @param stream a `GOutputStream` to which to save the pixbuf
     * @param type name of file format
     * @param optionKeys name of options to set
     * @param optionValues values for named options
     * @param cancellable optional `GCancellable` object, `NULL` to ignore
     * @param callback a `GAsyncReadyCallback` to call when the pixbuf is saved
     */
    saveToStreamvAsync(stream: Gio.OutputStream, type: string, optionKeys?: string[] | null, optionValues?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Vector version of `gdk_pixbuf_save()`.
     * 
     * Saves pixbuf to a file in `type`, which is currently "jpeg", "png", "tiff", "ico" or "bmp".
     * 
     * If `error` is set, `FALSE` will be returned.
     * 
     * See [method`GdkPixbuf`.Pixbuf.save] for more details.
     * @param filename name of file to save.
     * @param type name of file format.
     * @param optionKeys name of options to set
     * @param optionValues values for named options
     */
    savev(filename: string, type: string, optionKeys?: string[] | null, optionValues?: string[] | null): boolean
    /**
     * Creates a transformation of the source image `src` by scaling by
     * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y,`
     * then renders the rectangle (`dest_x,` `dest_y,` `dest_width,`
     * `dest_height)` of the resulting image onto the destination image
     * replacing the previous contents.
     * 
     * Try to use gdk_pixbuf_scale_simple() first; this function is
     * the industrial-strength power tool you can fall back to, if
     * gdk_pixbuf_scale_simple() isn't powerful enough.
     * 
     * If the source rectangle overlaps the destination rectangle on the
     * same pixbuf, it will be overwritten during the scaling which
     * results in rendering artifacts.
     * @param dest the #GdkPixbuf into which to render the results
     * @param destX the left coordinate for region to render
     * @param destY the top coordinate for region to render
     * @param destWidth the width of the region to render
     * @param destHeight the height of the region to render
     * @param offsetX the offset in the X direction (currently rounded to an integer)
     * @param offsetY the offset in the Y direction (currently rounded to an integer)
     * @param scaleX the scale factor in the X direction
     * @param scaleY the scale factor in the Y direction
     * @param interpType the interpolation type for the transformation.
     */
    scale(dest: Pixbuf, destX: number, destY: number, destWidth: number, destHeight: number, offsetX: number, offsetY: number, scaleX: number, scaleY: number, interpType: InterpType): void
    /**
     * Create a new pixbuf containing a copy of `src` scaled to
     * `dest_width` x `dest_height`.
     * 
     * This function leaves `src` unaffected.
     * 
     * The `interp_type` should be `GDK_INTERP_NEAREST` if you want maximum
     * speed (but when scaling down `GDK_INTERP_NEAREST` is usually unusably
     * ugly). The default `interp_type` should be `GDK_INTERP_BILINEAR` which
     * offers reasonable quality and speed.
     * 
     * You can scale a sub-portion of `src` by creating a sub-pixbuf
     * pointing into `src`; see [method`GdkPixbuf`.Pixbuf.new_subpixbuf].
     * 
     * If `dest_width` and `dest_height` are equal to the width and height of
     * `src`, this function will return an unscaled copy of `src`.
     * 
     * For more complicated scaling/alpha blending see [method`GdkPixbuf`.Pixbuf.scale]
     * and [method`GdkPixbuf`.Pixbuf.composite].
     * @param destWidth the width of destination image
     * @param destHeight the height of destination image
     * @param interpType the interpolation type for the transformation.
     */
    scaleSimple(destWidth: number, destHeight: number, interpType: InterpType): Pixbuf | null
    /**
     * Attaches a key/value pair as an option to a `GdkPixbuf`.
     * 
     * If `key` already exists in the list of options attached to the `pixbuf`,
     * the new value is ignored and `FALSE` is returned.
     * @param key a nul-terminated string.
     * @param value a nul-terminated string.
     */
    setOption(key: string, value: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Icon */
    /**
     * Checks if two icons are equal.
     * @param icon2 pointer to the second #GIcon.
     */
    equal(icon2?: Gio.Icon | null): boolean
    /**
     * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
     * back by calling g_icon_deserialize() on the returned value.
     * As serialization will avoid using raw icon data when possible, it only
     * makes sense to transfer the #GVariant between processes on the same machine,
     * (as opposed to over the network), and within the same file system namespace.
     */
    serialize(): GLib.Variant | null
    /**
     * Generates a textual representation of `icon` that can be used for
     * serialization such as when passing `icon` to a different process or
     * saving it to persistent storage. Use g_icon_new_for_string() to
     * get `icon` back from the returned string.
     * 
     * The encoding of the returned string is proprietary to #GIcon except
     * in the following two cases
     * 
     * - If `icon` is a #GFileIcon, the returned string is a native path
     *   (such as `/path/to/my icon.png`) without escaping
     *   if the #GFile for `icon` is a native file.  If the file is not
     *   native, the returned string is the result of g_file_get_uri()
     *   (such as `sftp://path/to/my%20icon.png`).
     * 
     * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
     *   the encoding is simply the name (such as `network-server`).
     */
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    /**
     * Loads a loadable icon. For the asynchronous version of this function,
     * see g_loadable_icon_load_async().
     * @param size an integer.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /**
     * Loads an icon asynchronously. To finish this function, see
     * g_loadable_icon_load_finish(). For the synchronous, blocking
     * version of this function, see g_loadable_icon_load().
     * @param size an integer.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the            request is satisfied
     */
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
     * @param res a #GAsyncResult.
     */
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bits-per-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits-per-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::colorspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::colorspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixel-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rowstride", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rowstride", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rowstride", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): Pixbuf
    static newFromBytes(data: any, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number): Pixbuf
    static newFromData(data: Uint8Array, colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number, rowstride: number, destroyFn?: PixbufDestroyNotify | null): Pixbuf
    static newFromFile(filename: string): Pixbuf
    static newFromFileAtScale(filename: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromFileAtSize(filename: string, width: number, height: number): Pixbuf
    static newFromInline(data: Uint8Array, copyPixels: boolean): Pixbuf
    static newFromResource(resourcePath: string): Pixbuf
    static newFromResourceAtScale(resourcePath: string, width: number, height: number, preserveAspectRatio: boolean): Pixbuf
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamAtScale(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): Pixbuf
    static newFromXpmData(data: string[]): Pixbuf
    /**
     * Calculates the rowstride that an image created with those values would
     * have.
     * 
     * This function is useful for front-ends and backends that want to check
     * image values without needing to create a `GdkPixbuf`.
     * @param colorspace Color space for image
     * @param hasAlpha Whether the image should have transparency information
     * @param bitsPerSample Number of bits per color sample
     * @param width Width of image in pixels, must be > 0
     * @param height Height of image in pixels, must be > 0
     */
    static calculateRowstride(colorspace: Colorspace, hasAlpha: boolean, bitsPerSample: number, width: number, height: number): number
    /**
     * Parses an image file far enough to determine its format and size.
     * @param filename The name of the file to identify.
     */
    static getFileInfo(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Asynchronously parses an image file far enough to determine its
     * format and size.
     * 
     * For more details see gdk_pixbuf_get_file_info(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the
     * main thread. You can then call gdk_pixbuf_get_file_info_finish() to
     * get the result of the operation.
     * @param filename The name of the file to identify
     * @param cancellable optional `GCancellable` object, `NULL` to ignore
     * @param callback a `GAsyncReadyCallback` to call when the file info is available
     */
    static getFileInfoAsync(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous pixbuf parsing operation started with
     * gdk_pixbuf_get_file_info_async().
     * @param asyncResult a `GAsyncResult`
     */
    static getFileInfoFinish(asyncResult: Gio.AsyncResult): [ /* returnType */ PixbufFormat | null, /* width */ number, /* height */ number ]
    /**
     * Obtains the available information about the image formats supported
     * by GdkPixbuf.
     */
    static getFormats(): PixbufFormat[]
    /**
     * Initalizes the gdk-pixbuf loader modules referenced by the `loaders.cache`
     * file present inside that directory.
     * 
     * This is to be used by applications that want to ship certain loaders
     * in a different location from the system ones.
     * 
     * This is needed when the OS or runtime ships a minimal number of loaders
     * so as to reduce the potential attack surface of carefully crafted image
     * files, especially for uncommon file types. Applications that require
     * broader image file types coverage, such as image viewers, would be
     * expected to ship the gdk-pixbuf modules in a separate location, bundled
     * with the application in a separate directory from the OS or runtime-
     * provided modules.
     * @param path Path to directory where the `loaders.cache` is installed
     */
    static initModules(path: string): boolean
    /**
     * Creates a new pixbuf by asynchronously loading an image from an input stream.
     * 
     * For more details see gdk_pixbuf_new_from_stream(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_new_from_stream_finish() to get the result of
     * the operation.
     * @param stream a `GInputStream` from which to load the pixbuf
     * @param cancellable optional `GCancellable` object, `NULL` to ignore
     * @param callback a `GAsyncReadyCallback` to call when the pixbuf is loaded
     */
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Creates a new pixbuf by asynchronously loading an image from an input stream.
     * 
     * For more details see gdk_pixbuf_new_from_stream_at_scale(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_new_from_stream_finish() to get the result of the operation.
     * @param stream a `GInputStream` from which to load the pixbuf
     * @param width the width the image should have or -1 to not constrain the width
     * @param height the height the image should have or -1 to not constrain the height
     * @param preserveAspectRatio `TRUE` to preserve the image's aspect ratio
     * @param cancellable optional `GCancellable` object, `NULL` to ignore
     * @param callback a `GAsyncReadyCallback` to call when the pixbuf is loaded
     */
    static newFromStreamAtScaleAsync(stream: Gio.InputStream, width: number, height: number, preserveAspectRatio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous pixbuf save operation started with
     * gdk_pixbuf_save_to_stream_async().
     * @param asyncResult a `GAsyncResult`
     */
    static saveToStreamFinish(asyncResult: Gio.AsyncResult): boolean
    /**
     * Deserializes a #GIcon previously serialized using g_icon_serialize().
     * @param value a #GVariant created with g_icon_serialize()
     */
    static deserialize(value: GLib.Variant): Gio.Icon | null
    /**
     * Gets a hash for an icon.
     * @param icon #gconstpointer to an icon object.
     */
    static hash(icon: object): number
    /**
     * Generate a #GIcon instance from `str`. This function can fail if
     * `str` is not valid - see g_icon_to_string() for discussion.
     * 
     * If your application or library provides one or more #GIcon
     * implementations you need to ensure that each #GType is registered
     * with the type system prior to calling g_icon_new_for_string().
     * @param str A string obtained via g_icon_to_string().
     */
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufAnimation {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    /**
     * Queries the height of the bounding box of a pixbuf animation.
     */
    getHeight(): number
    /**
     * Get an iterator for displaying an animation.
     * 
     * The iterator provides the frames that should be displayed at a
     * given time.
     * 
     * `start_time` would normally come from g_get_current_time(), and marks
     * the beginning of animation playback. After creating an iterator, you
     * should immediately display the pixbuf returned by
     * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
     * a timeout (with g_timeout_add()) or by some other mechanism ensure
     * that you'll update the image after
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
     * the image is updated, you should reinstall the timeout with the new,
     * possibly-changed delay time.
     * 
     * As a shortcut, if `start_time` is `NULL`, the result of
     * g_get_current_time() will be used automatically.
     * 
     * To update the image (i.e. possibly change the result of
     * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
     * call gdk_pixbuf_animation_iter_advance().
     * 
     * If you're using #GdkPixbufLoader, in addition to updating the image
     * after the delay time, you should also update it whenever you
     * receive the area_updated signal and
     * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
     * `TRUE`. In this case, the frame currently being fed into the loader
     * has received new data, so needs to be refreshed. The delay time for
     * a frame may also be modified after an area_updated signal, for
     * example if the delay time for a frame is encoded in the data after
     * the frame itself. So your timeout should be reinstalled after any
     * area_updated signal.
     * 
     * A delay time of -1 is possible, indicating "infinite".
     * @param startTime time when the animation starts playing
     */
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    /**
     * Retrieves a static image for the animation.
     * 
     * If an animation is really just a plain image (has only one frame),
     * this function returns that image.
     * 
     * If the animation is an animation, this function returns a reasonable
     * image to use as a static unanimated image, which might be the first
     * frame, or something more sophisticated depending on the file format.
     * 
     * If an animation hasn't loaded any frames yet, this function will
     * return `NULL`.
     */
    getStaticImage(): Pixbuf
    /**
     * Queries the width of the bounding box of a pixbuf animation.
     */
    getWidth(): number
    /**
     * Checks whether the animation is a static image.
     * 
     * If you load a file with gdk_pixbuf_animation_new_from_file() and it
     * turns out to be a plain, unanimated image, then this function will
     * return `TRUE`. Use gdk_pixbuf_animation_get_static_image() to retrieve
     * the image.
     */
    isStaticImage(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): PixbufAnimation
    static newFromResource(resourcePath: string): PixbufAnimation
    static newFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static newFromStreamFinish(asyncResult: Gio.AsyncResult): PixbufAnimation
    /**
     * Creates a new animation by asynchronously loading an image from an input stream.
     * 
     * For more details see gdk_pixbuf_new_from_stream(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_animation_new_from_stream_finish() to get the
     * result of the operation.
     * @param stream a #GInputStream from which to load the animation
     * @param cancellable optional #GCancellable object
     * @param callback a `GAsyncReadyCallback` to call when the pixbuf is loaded
     */
    static newFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufAnimationIter {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    /**
     * Possibly advances an animation to a new frame.
     * 
     * Chooses the frame based on the start time passed to
     * gdk_pixbuf_animation_get_iter().
     * 
     * `current_time` would normally come from g_get_current_time(), and
     * must be greater than or equal to the time passed to
     * gdk_pixbuf_animation_get_iter(), and must increase or remain
     * unchanged each time gdk_pixbuf_animation_iter_get_pixbuf() is
     * called. That is, you can't go backward in time; animations only
     * play forward.
     * 
     * As a shortcut, pass `NULL` for the current time and g_get_current_time()
     * will be invoked on your behalf. So you only need to explicitly pass
     * `current_time` if you're doing something odd like playing the animation
     * at double speed.
     * 
     * If this function returns `FALSE`, there's no need to update the animation
     * display, assuming the display had been rendered prior to advancing;
     * if `TRUE`, you need to call gdk_pixbuf_animation_iter_get_pixbuf()
     * and update the display with the new pixbuf.
     * @param currentTime current time
     */
    advance(currentTime?: GLib.TimeVal | null): boolean
    /**
     * Gets the number of milliseconds the current pixbuf should be displayed,
     * or -1 if the current pixbuf should be displayed forever.
     * 
     * The `g_timeout_add()` function conveniently takes a timeout in milliseconds,
     * so you can use a timeout to schedule the next update.
     * 
     * Note that some formats, like GIF, might clamp the timeout values in the
     * image file to avoid updates that are just too quick. The minimum timeout
     * for GIF images is currently 20 milliseconds.
     */
    getDelayTime(): number
    /**
     * Gets the current pixbuf which should be displayed.
     * 
     * The pixbuf might not be the same size as the animation itself
     * (gdk_pixbuf_animation_get_width(), gdk_pixbuf_animation_get_height()).
     * 
     * This pixbuf should be displayed for gdk_pixbuf_animation_iter_get_delay_time()
     * milliseconds.
     * 
     * The caller of this function does not own a reference to the returned
     * pixbuf; the returned pixbuf will become invalid when the iterator
     * advances to the next frame, which may happen anytime you call
     * gdk_pixbuf_animation_iter_advance().
     * 
     * Copy the pixbuf to keep it (don't just add a reference), as it may get
     * recycled as you advance the iterator.
     */
    getPixbuf(): Pixbuf
    /**
     * Used to determine how to respond to the area_updated signal on
     * #GdkPixbufLoader when loading an animation.
     * 
     * The `::area_updated` signal is emitted for an area of the frame currently
     * streaming in to the loader. So if you're on the currently loading frame,
     * you will need to redraw the screen for the updated area.
     */
    onCurrentlyLoadingFrame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
class PixbufLoader {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    /**
     * Informs a pixbuf loader that no further writes with
     * gdk_pixbuf_loader_write() will occur, so that it can free its
     * internal loading structures.
     * 
     * This function also tries to parse any data that hasn't yet been parsed;
     * if the remaining data is partial or corrupt, an error will be returned.
     * 
     * If `FALSE` is returned, `error` will be set to an error from the
     * `GDK_PIXBUF_ERROR` or `G_FILE_ERROR` domains.
     * 
     * If you're just cancelling a load rather than expecting it to be finished,
     * passing `NULL` for `error` to ignore it is reasonable.
     * 
     * Remember that this function does not release a reference on the loader, so
     * you will need to explicitly release any reference you hold.
     */
    close(): boolean
    /**
     * Queries the #GdkPixbufAnimation that a pixbuf loader is currently creating.
     * 
     * In general it only makes sense to call this function after the
     * [signal`GdkPixbuf`.PixbufLoader::area-prepared] signal has been emitted by
     * the loader.
     * 
     * If the loader doesn't have enough bytes yet, and hasn't emitted the `area-prepared`
     * signal, this function will return `NULL`.
     */
    getAnimation(): PixbufAnimation | null
    /**
     * Obtains the available information about the format of the
     * currently loading image file.
     */
    getFormat(): PixbufFormat | null
    /**
     * Queries the #GdkPixbuf that a pixbuf loader is currently creating.
     * 
     * In general it only makes sense to call this function after the
     * [signal`GdkPixbuf`.PixbufLoader::area-prepared] signal has been
     * emitted by the loader; this means that enough data has been read
     * to know the size of the image that will be allocated.
     * 
     * If the loader has not received enough data via gdk_pixbuf_loader_write(),
     * then this function returns `NULL`.
     * 
     * The returned pixbuf will be the same in all future calls to the loader,
     * so if you want to keep using it, you should acquire a reference to it.
     * 
     * Additionally, if the loader is an animation, it will return the "static
     * image" of the animation (see gdk_pixbuf_animation_get_static_image()).
     */
    getPixbuf(): Pixbuf | null
    /**
     * Causes the image to be scaled while it is loaded.
     * 
     * The desired image size can be determined relative to the original
     * size of the image by calling gdk_pixbuf_loader_set_size() from a
     * signal handler for the ::size-prepared signal.
     * 
     * Attempts to set the desired image size  are ignored after the
     * emission of the ::size-prepared signal.
     * @param width The desired width of the image being loaded.
     * @param height The desired height of the image being loaded.
     */
    setSize(width: number, height: number): void
    /**
     * Parses the next `count` bytes in the given image buffer.
     * @param buf Pointer to image data.
     */
    write(buf: Uint8Array): boolean
    /**
     * Parses the next contents of the given image buffer.
     * @param buffer The image data as a `GBytes` buffer.
     */
    writeBytes(buffer: any): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    /**
     * This signal is emitted when the pixbuf loader has allocated the
     * pixbuf in the desired size.
     * 
     * After this signal is emitted, applications can call
     * gdk_pixbuf_loader_get_pixbuf() to fetch the partially-loaded
     * pixbuf.
     */
    connect(sigName: "area-prepared", callback: (() => void)): number
    on(sigName: "area-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "area-prepared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "area-prepared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "area-prepared"): void
    /**
     * This signal is emitted when a significant area of the image being
     * loaded has been updated.
     * 
     * Normally it means that a complete scanline has been read in, but
     * it could be a different area as well.
     * 
     * Applications can use this signal to know when to repaint
     * areas of an image that is being loaded.
     * @param x X offset of upper-left corner of the updated area.
     * @param y Y offset of upper-left corner of the updated area.
     * @param width Width of updated area.
     * @param height Height of updated area.
     */
    connect(sigName: "area-updated", callback: ((x: number, y: number, width: number, height: number) => void)): number
    on(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "area-updated", callback: (x: number, y: number, width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    /**
     * This signal is emitted when gdk_pixbuf_loader_close() is called.
     * 
     * It can be used by different parts of an application to receive
     * notification when an image loader is closed by the code that
     * drives it.
     */
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /**
     * This signal is emitted when the pixbuf loader has been fed the
     * initial amount of data that is required to figure out the size
     * of the image that it will create.
     * 
     * Applications can call gdk_pixbuf_loader_set_size() in response
     * to this signal to set the desired size to which the image
     * should be scaled.
     * @param width the original width of the image
     * @param height the original height of the image
     */
    connect(sigName: "size-prepared", callback: ((width: number, height: number) => void)): number
    on(sigName: "size-prepared", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-prepared", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-prepared", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-prepared", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PixbufLoader
    static newWithMimeType(mimeType: string): PixbufLoader
    static newWithType(imageType: string): PixbufLoader
    static $gtype: GObject.Type
}
interface PixbufNonAnim_ConstructProps extends PixbufAnimation_ConstructProps {
}
class PixbufNonAnim {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    /**
     * Queries the height of the bounding box of a pixbuf animation.
     */
    getHeight(): number
    /**
     * Get an iterator for displaying an animation.
     * 
     * The iterator provides the frames that should be displayed at a
     * given time.
     * 
     * `start_time` would normally come from g_get_current_time(), and marks
     * the beginning of animation playback. After creating an iterator, you
     * should immediately display the pixbuf returned by
     * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
     * a timeout (with g_timeout_add()) or by some other mechanism ensure
     * that you'll update the image after
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
     * the image is updated, you should reinstall the timeout with the new,
     * possibly-changed delay time.
     * 
     * As a shortcut, if `start_time` is `NULL`, the result of
     * g_get_current_time() will be used automatically.
     * 
     * To update the image (i.e. possibly change the result of
     * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
     * call gdk_pixbuf_animation_iter_advance().
     * 
     * If you're using #GdkPixbufLoader, in addition to updating the image
     * after the delay time, you should also update it whenever you
     * receive the area_updated signal and
     * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
     * `TRUE`. In this case, the frame currently being fed into the loader
     * has received new data, so needs to be refreshed. The delay time for
     * a frame may also be modified after an area_updated signal, for
     * example if the delay time for a frame is encoded in the data after
     * the frame itself. So your timeout should be reinstalled after any
     * area_updated signal.
     * 
     * A delay time of -1 is possible, indicating "infinite".
     * @param startTime time when the animation starts playing
     */
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    /**
     * Retrieves a static image for the animation.
     * 
     * If an animation is really just a plain image (has only one frame),
     * this function returns that image.
     * 
     * If the animation is an animation, this function returns a reasonable
     * image to use as a static unanimated image, which might be the first
     * frame, or something more sophisticated depending on the file format.
     * 
     * If an animation hasn't loaded any frames yet, this function will
     * return `NULL`.
     */
    getStaticImage(): Pixbuf
    /**
     * Queries the width of the bounding box of a pixbuf animation.
     */
    getWidth(): number
    /**
     * Checks whether the animation is a static image.
     * 
     * If you load a file with gdk_pixbuf_animation_new_from_file() and it
     * turns out to be a plain, unanimated image, then this function will
     * return `TRUE`. Use gdk_pixbuf_animation_get_static_image() to retrieve
     * the image.
     */
    isStaticImage(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufNonAnim_ConstructProps)
    _init (config?: PixbufNonAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pixbuf: Pixbuf): PixbufNonAnim
    static $gtype: GObject.Type
}
interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    /**
     * Whether the animation should loop when it reaches the end.
     */
    loop?: boolean
}
class PixbufSimpleAnim {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    /**
     * Whether the animation should loop when it reaches the end.
     */
    loop: boolean
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    /**
     * Adds a new frame to `animation`. The `pixbuf` must
     * have the dimensions specified when the animation
     * was constructed.
     * @param pixbuf the pixbuf to add
     */
    addFrame(pixbuf: Pixbuf): void
    /**
     * Gets whether `animation` should loop indefinitely when it reaches the end.
     */
    getLoop(): boolean
    /**
     * Sets whether `animation` should loop indefinitely when it reaches the end.
     * @param loop whether to loop the animation
     */
    setLoop(loop: boolean): void
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    /**
     * Queries the height of the bounding box of a pixbuf animation.
     */
    getHeight(): number
    /**
     * Get an iterator for displaying an animation.
     * 
     * The iterator provides the frames that should be displayed at a
     * given time.
     * 
     * `start_time` would normally come from g_get_current_time(), and marks
     * the beginning of animation playback. After creating an iterator, you
     * should immediately display the pixbuf returned by
     * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
     * a timeout (with g_timeout_add()) or by some other mechanism ensure
     * that you'll update the image after
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
     * the image is updated, you should reinstall the timeout with the new,
     * possibly-changed delay time.
     * 
     * As a shortcut, if `start_time` is `NULL`, the result of
     * g_get_current_time() will be used automatically.
     * 
     * To update the image (i.e. possibly change the result of
     * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
     * call gdk_pixbuf_animation_iter_advance().
     * 
     * If you're using #GdkPixbufLoader, in addition to updating the image
     * after the delay time, you should also update it whenever you
     * receive the area_updated signal and
     * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
     * `TRUE`. In this case, the frame currently being fed into the loader
     * has received new data, so needs to be refreshed. The delay time for
     * a frame may also be modified after an area_updated signal, for
     * example if the delay time for a frame is encoded in the data after
     * the frame itself. So your timeout should be reinstalled after any
     * area_updated signal.
     * 
     * A delay time of -1 is possible, indicating "infinite".
     * @param startTime time when the animation starts playing
     */
    getIter(startTime?: GLib.TimeVal | null): PixbufAnimationIter
    /**
     * Retrieves a static image for the animation.
     * 
     * If an animation is really just a plain image (has only one frame),
     * this function returns that image.
     * 
     * If the animation is an animation, this function returns a reasonable
     * image to use as a static unanimated image, which might be the first
     * frame, or something more sophisticated depending on the file format.
     * 
     * If an animation hasn't loaded any frames yet, this function will
     * return `NULL`.
     */
    getStaticImage(): Pixbuf
    /**
     * Queries the width of the bounding box of a pixbuf animation.
     */
    getWidth(): number
    /**
     * Checks whether the animation is a static image.
     * 
     * If you load a file with gdk_pixbuf_animation_new_from_file() and it
     * turns out to be a plain, unanimated image, then this function will
     * return `TRUE`. Use gdk_pixbuf_animation_get_static_image() to retrieve
     * the image.
     */
    isStaticImage(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loop", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::loop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
class PixbufSimpleAnimIter {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    /**
     * Possibly advances an animation to a new frame.
     * 
     * Chooses the frame based on the start time passed to
     * gdk_pixbuf_animation_get_iter().
     * 
     * `current_time` would normally come from g_get_current_time(), and
     * must be greater than or equal to the time passed to
     * gdk_pixbuf_animation_get_iter(), and must increase or remain
     * unchanged each time gdk_pixbuf_animation_iter_get_pixbuf() is
     * called. That is, you can't go backward in time; animations only
     * play forward.
     * 
     * As a shortcut, pass `NULL` for the current time and g_get_current_time()
     * will be invoked on your behalf. So you only need to explicitly pass
     * `current_time` if you're doing something odd like playing the animation
     * at double speed.
     * 
     * If this function returns `FALSE`, there's no need to update the animation
     * display, assuming the display had been rendered prior to advancing;
     * if `TRUE`, you need to call gdk_pixbuf_animation_iter_get_pixbuf()
     * and update the display with the new pixbuf.
     * @param currentTime current time
     */
    advance(currentTime?: GLib.TimeVal | null): boolean
    /**
     * Gets the number of milliseconds the current pixbuf should be displayed,
     * or -1 if the current pixbuf should be displayed forever.
     * 
     * The `g_timeout_add()` function conveniently takes a timeout in milliseconds,
     * so you can use a timeout to schedule the next update.
     * 
     * Note that some formats, like GIF, might clamp the timeout values in the
     * image file to avoid updates that are just too quick. The minimum timeout
     * for GIF images is currently 20 milliseconds.
     */
    getDelayTime(): number
    /**
     * Gets the current pixbuf which should be displayed.
     * 
     * The pixbuf might not be the same size as the animation itself
     * (gdk_pixbuf_animation_get_width(), gdk_pixbuf_animation_get_height()).
     * 
     * This pixbuf should be displayed for gdk_pixbuf_animation_iter_get_delay_time()
     * milliseconds.
     * 
     * The caller of this function does not own a reference to the returned
     * pixbuf; the returned pixbuf will become invalid when the iterator
     * advances to the next frame, which may happen anytime you call
     * gdk_pixbuf_animation_iter_advance().
     * 
     * Copy the pixbuf to keep it (don't just add a reference), as it may get
     * recycled as you advance the iterator.
     */
    getPixbuf(): Pixbuf
    /**
     * Used to determine how to respond to the area_updated signal on
     * #GdkPixbufLoader when loading an animation.
     * 
     * The `::area_updated` signal is emitted for an area of the frame currently
     * streaming in to the loader. So if you're on the currently loading frame,
     * you will need to redraw the screen for the updated area.
     */
    onCurrentlyLoadingFrame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class PixbufAnimationClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationClass */
    /**
     * the parent class
     */
    parentClass: GObject.ObjectClass
    isStaticImage: (animation: PixbufAnimation) => boolean
    getStaticImage: (animation: PixbufAnimation) => Pixbuf
    getSize: (animation: PixbufAnimation, width: number, height: number) => void
    getIter: (animation: PixbufAnimation, startTime?: GLib.TimeVal | null) => PixbufAnimationIter
    static name: string
}
abstract class PixbufAnimationIterClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIterClass */
    /**
     * the parent class
     */
    parentClass: GObject.ObjectClass
    getDelayTime: (iter: PixbufAnimationIter) => number
    getPixbuf: (iter: PixbufAnimationIter) => Pixbuf
    onCurrentlyLoadingFrame: (iter: PixbufAnimationIter) => boolean
    advance: (iter: PixbufAnimationIter, currentTime?: GLib.TimeVal | null) => boolean
    static name: string
}
class PixbufFormat {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    /**
     * the name of the image format
     */
    name: string
    /**
     * the signature of the module
     */
    signature: PixbufModulePattern
    /**
     * the message domain for the `description`
     */
    domain: string
    /**
     * a description of the image format
     */
    description: string
    /**
     * the MIME types for the image format
     */
    mimeTypes: string[]
    /**
     * typical filename extensions for the
     *   image format
     */
    extensions: string[]
    /**
     * a combination of `GdkPixbufFormatFlags`
     */
    flags: number
    /**
     * a boolean determining whether the loader is disabled`
     */
    disabled: boolean
    /**
     * a string containing license information, typically set to
     *   shorthands like "GPL", "LGPL", etc.
     */
    license: string
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    /**
     * Creates a copy of `format`.
     */
    copy(): PixbufFormat
    /**
     * Frees the resources allocated when copying a `GdkPixbufFormat`
     * using gdk_pixbuf_format_copy()
     */
    free(): void
    /**
     * Returns a description of the format.
     */
    getDescription(): string
    /**
     * Returns the filename extensions typically used for files in the
     * given format.
     */
    getExtensions(): string[]
    /**
     * Returns information about the license of the image loader for the format.
     * 
     * The returned string should be a shorthand for a well known license, e.g.
     * "LGPL", "GPL", "QPL", "GPL/QPL", or "other" to indicate some other license.
     */
    getLicense(): string
    /**
     * Returns the mime types supported by the format.
     */
    getMimeTypes(): string[]
    /**
     * Returns the name of the format.
     */
    getName(): string
    /**
     * Returns whether this image format is disabled.
     * 
     * See gdk_pixbuf_format_set_disabled().
     */
    isDisabled(): boolean
    /**
     * Returns `TRUE` if the save option specified by `option_key` is supported when
     * saving a pixbuf using the module implementing `format`.
     * 
     * See gdk_pixbuf_save() for more information about option keys.
     * @param optionKey the name of an option
     */
    isSaveOptionSupported(optionKey: string): boolean
    /**
     * Returns whether this image format is scalable.
     * 
     * If a file is in a scalable format, it is preferable to load it at
     * the desired size, rather than loading it at the default size and
     * scaling the resulting pixbuf to the desired size.
     */
    isScalable(): boolean
    /**
     * Returns whether pixbufs can be saved in the given format.
     */
    isWritable(): boolean
    /**
     * Disables or enables an image format.
     * 
     * If a format is disabled, GdkPixbuf won't use the image loader for
     * this format to load images.
     * 
     * Applications can use this to avoid using image loaders with an
     * inappropriate license, see gdk_pixbuf_format_get_license().
     * @param disabled `TRUE` to disable the format `format`
     */
    setDisabled(disabled: boolean): void
    static name: string
}
abstract class PixbufLoaderClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufLoaderClass */
    parentClass: GObject.ObjectClass
    sizePrepared: (loader: PixbufLoader, width: number, height: number) => void
    areaPrepared: (loader: PixbufLoader) => void
    areaUpdated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void
    closed: (loader: PixbufLoader) => void
    static name: string
}
class PixbufModule {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModule */
    /**
     * the name of the module, usually the same as the
     *  usual file extension for images of this type, eg. "xpm", "jpeg" or "png".
     */
    moduleName: string
    /**
     * the path from which the module is loaded.
     */
    modulePath: string
    /**
     * the loaded `GModule`.
     */
    module: GModule.Module
    /**
     * a `GdkPixbufFormat` holding information about the module.
     */
    info: PixbufFormat
    stopLoad: (context: object) => boolean
    loadIncrement: (context: object, buf: number, size: number) => boolean
    save: (f: object, pixbuf: Pixbuf, paramKeys: string, paramValues: string) => boolean
    isSaveOptionSupported: (optionKey: string) => boolean
    static name: string
}
class PixbufModulePattern {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufModulePattern */
    /**
     * the prefix for this pattern
     */
    prefix: string
    /**
     * mask containing bytes which modify how the prefix is matched against
     *  test data
     */
    mask: string
    /**
     * relevance of this pattern
     */
    relevance: number
    static name: string
}
abstract class PixbufSimpleAnimClass {
    static name: string
}
}
export default GdkPixbuf;