/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rsvg-2.0
 */

import type cairo from './cairo-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Rsvg {

/**
 * An enumeration representing possible errors
 */
enum Error {
    /**
     * the request failed
     */
    FAILED,
}
/**
 * Units for the `RsvgLength` struct.  These have the same meaning as [CSS length
 * units](https://www.w3.org/TR/CSS21/syndata.html#length-units).
 */
enum Unit {
    /**
     * percentage values; where <literal>1.0</literal> means 100%.
     */
    PERCENT,
    /**
     * pixels
     */
    PX,
    /**
     * em, or the current font size
     */
    EM,
    /**
     * x-height of the current font
     */
    EX,
    /**
     * inches
     */
    IN,
    /**
     * centimeters
     */
    CM,
    /**
     * millimeters
     */
    MM,
    /**
     * points, or 1/72 inch
     */
    PT,
    /**
     * picas, or 1/6 inch (12 points)
     */
    PC,
}
/**
 * Configuration flags for an [class`Rsvg`.Handle].  Note that not all of [class`Rsvg`.Handle]'s
 * constructors let you specify flags.  For this reason, [ctor`Rsvg`.Handle.new_from_gfile_sync]
 * and [ctor`Rsvg`.Handle.new_from_stream_sync] are the preferred ways to create a handle.
 */
enum HandleFlags {
    /**
     * No flags are set.
     */
    FLAGS_NONE,
    /**
     * Disable safety limits in the XML parser.  Libxml2 has
     * [several limits](https://gitlab.gnome.org/GNOME/libxml2/blob/master/include/libxml/parserInternals.h)
     * designed to keep malicious XML content from consuming too much memory while parsing.
     * For security reasons, this should only be used for trusted input!  Since: 2.40.3
     */
    FLAG_UNLIMITED,
    /**
     * Use this if the Cairo surface to which you are
     * rendering is a PDF, PostScript, SVG, or Win32 Printing surface.  This will make librsvg
     * and Cairo use the original, compressed data for images in the final output, instead of
     * passing uncompressed images.  For example, this will make the a resulting PDF file
     * smaller and faster.  Please see [the Cairo
     * documentation](https://www.cairographics.org/manual/cairo-cairo-surface-t.html#cairo-surface-set-mime-data)
     * for details.
     */
    FLAG_KEEP_IMAGE_DATA,
}
/**
 * This is a C macro that expands to a number with the major version
 * of librsvg against which your program is compiled.
 * 
 * For example, for librsvg-2.3.4, the major version is 2.
 * 
 * C programs can use this as a compile-time check for the required
 * version, but note that generally it is a better idea to do
 * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
 * in your build scripts.
 * 
 * Note: for a run-time check on the version of librsvg that your
 * program is running with (e.g. the version which the linker used for
 * your program), or for programs not written in C, use
 * `rsvg_major_version` instead.
 */
const MAJOR_VERSION: number
/**
 * This is a C macro that expands to a number with the micro version
 * of librsvg against which your program is compiled.
 * 
 * For example, for librsvg-2.3.4, the micro version is 4.
 * 
 * C programs can use this as a compile-time check for the required
 * version, but note that generally it is a better idea to do
 * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
 * in your build scripts.
 * 
 * Note: for a run-time check on the version of librsvg that your
 * program is running with (e.g. the version which the linker used for
 * your program), or for programs not written in C, use
 * `rsvg_micro_version` instead.
 */
const MICRO_VERSION: number
/**
 * This is a C macro that expands to a number with the minor version
 * of librsvg against which your program is compiled.
 * 
 * For example, for librsvg-2.3.4, the minor version is 3.
 * 
 * C programs can use this as a compile-time check for the required
 * version, but note that generally it is a better idea to do
 * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
 * in your build scripts.
 * 
 * Note: for a run-time check on the version of librsvg that your
 * program is running with (e.g. the version which the linker used for
 * your program), or for programs not written in C, use
 * `rsvg_minor_version` instead.
 */
const MINOR_VERSION: number
/**
 * This is a C macro that expands to a string with the version of
 * librsvg against which your program is compiled.
 * 
 * For example, for librsvg-2.3.4, this macro expands to
 * `"2.3.4"`.
 * 
 * C programs can use this as a compile-time check for the required
 * version, but note that generally it is a better idea to do
 * compile-time checks by calling [pkg-config](https://www.freedesktop.org/wiki/Software/pkg-config/)
 * in your build scripts.
 * 
 * Note: for a run-time check on the version of librsvg that your
 * program is running with (e.g. the version which the linker used for
 * your program), or for programs not written in C, use
 * `rsvg_version` instead.
 */
const VERSION: string
function cleanup(): void
function errorQuark(): GLib.Quark
function init(): void
function pixbufFromFile(filename: string): GdkPixbuf.Pixbuf | null
function pixbufFromFileAtMaxSize(filename: string, maxWidth: number, maxHeight: number): GdkPixbuf.Pixbuf | null
function pixbufFromFileAtSize(filename: string, width: number, height: number): GdkPixbuf.Pixbuf | null
function pixbufFromFileAtZoom(filename: string, xZoom: number, yZoom: number): GdkPixbuf.Pixbuf | null
function pixbufFromFileAtZoomWithMax(filename: string, xZoom: number, yZoom: number, maxWidth: number, maxHeight: number): GdkPixbuf.Pixbuf | null
function setDefaultDpi(dpi: number): void
function setDefaultDpiXY(dpiX: number, dpiY: number): void
function term(): void
/**
 * Function to let a user of the library specify the SVG's dimensions
 * 
 * See the documentation for [method`Rsvg`.Handle.set_size_callback] for an example, and
 * for the reasons for deprecation.
 */
interface SizeFunc {
    (): void
}
interface Handle_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Rsvg-2.0.Rsvg.Handle */
    /**
     * Base URI, to be used to resolve relative references for resources.  See the section
     * "Security and locations of referenced files" for details.
     */
    baseUri?: string
    /**
     * Horizontal resolution in dots per inch.
     */
    dpiX?: number
    /**
     * Horizontal resolution in dots per inch.
     */
    dpiY?: number
    /**
     * Flags from [flags`Rsvg`.HandleFlags].
     */
    flags?: HandleFlags
}
class Handle {
    /* Properties of Rsvg-2.0.Rsvg.Handle */
    /**
     * Base URI, to be used to resolve relative references for resources.  See the section
     * "Security and locations of referenced files" for details.
     */
    baseUri: string
    /**
     * SVG's description.
     */
    readonly desc: string
    /**
     * Horizontal resolution in dots per inch.
     */
    dpiX: number
    /**
     * Horizontal resolution in dots per inch.
     */
    dpiY: number
    /**
     * Exact width, in pixels, of the rendered SVG before calling the size callback
     * as specified by [method`Rsvg`.Handle.set_size_callback].
     */
    readonly em: number
    /**
     * Exact height, in pixels, of the rendered SVG before calling the size callback
     * as specified by [method`Rsvg`.Handle.set_size_callback].
     */
    readonly ex: number
    /**
     * Flags from [flags`Rsvg`.HandleFlags].
     */
    readonly flags: HandleFlags
    /**
     * Height, in pixels, of the rendered SVG after calling the size callback
     * as specified by [method`Rsvg`.Handle.set_size_callback].
     */
    readonly height: number
    /**
     * SVG's metadata
     */
    readonly metadata: string
    /**
     * SVG's title.
     */
    readonly title: string
    /**
     * Width, in pixels, of the rendered SVG after calling the size callback
     * as specified by [method`Rsvg`.Handle.set_size_callback].
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Rsvg-2.0.Rsvg.Handle */
    /**
     * This is used after calling [method`Rsvg`.Handle.write] to indicate that there is no more data
     * to consume, and to start the actual parsing of the SVG document.  The only reason to
     * call this function is if you use use [method`Rsvg`.Handle.write] to feed data into the `handle;`
     * if you use the other methods like [ctor`Rsvg`.Handle.new_from_file] or
     * [method`Rsvg`.Handle.read_stream_sync], then you do not need to call this function.
     * 
     * This will return `TRUE` if the loader closed successfully and the
     * SVG data was parsed correctly.  Note that `handle` isn't freed until
     * [method`GObject`.Object.unref] is called.
     */
    close(): boolean
    /**
     * Frees `handle`.
     */
    free(): void
    /**
     * Gets the base uri for this [class`Rsvg`.Handle].
     */
    getBaseUri(): string
    getDesc(): string | null
    /**
     * Get the SVG's size. Do not call from within the size_func callback, because
     * an infinite loop will occur.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
     * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
     */
    getDimensions(): /* dimensionData */ DimensionData
    /**
     * Get the size of a subelement of the SVG file. Do not call from within the
     * size_func callback, because an infinite loop will occur.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
     * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to use the whole SVG.
     */
    getDimensionsSub(id?: string | null): [ /* returnType */ boolean, /* dimensionData */ DimensionData ]
    /**
     * Computes the ink rectangle and logical rectangle of a single SVG element.
     * 
     * While `rsvg_handle_get_geometry_for_layer` computes the geometry of an SVG element subtree with
     * its transformation matrix, this other function will compute the element's geometry
     * as if it were being rendered under an identity transformation by itself.  That is,
     * the resulting geometry is as if the element got extracted by itself from the SVG.
     * 
     * This function is the counterpart to `rsvg_handle_render_element`.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * 
     * The "ink rectangle" is the bounding box that would be painted
     * for fully- stroked and filled elements.
     * 
     * The "logical rectangle" just takes into account the unstroked
     * paths and text outlines.
     * 
     * Note that these bounds are not minimum bounds; for example,
     * clipping paths are not taken into account.
     * 
     * You can pass `NULL` for the `id` if you want to measure all
     * the elements in the SVG, i.e. to measure everything from the
     * root element.
     * 
     * This operation is not constant-time, as it involves going through all
     * the child elements.
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to compute the geometry for the whole SVG.
     */
    getGeometryForElement(id?: string | null): [ /* returnType */ boolean, /* outInkRect */ Rectangle | null, /* outLogicalRect */ Rectangle | null ]
    /**
     * Computes the ink rectangle and logical rectangle of an SVG element, or the
     * whole SVG, as if the whole SVG were rendered to a specific viewport.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * 
     * The "ink rectangle" is the bounding box that would be painted
     * for fully-stroked and filled elements.
     * 
     * The "logical rectangle" just takes into account the unstroked
     * paths and text outlines.
     * 
     * Note that these bounds are not minimum bounds; for example,
     * clipping paths are not taken into account.
     * 
     * You can pass `NULL` for the `id` if you want to measure all
     * the elements in the SVG, i.e. to measure everything from the
     * root element.
     * 
     * This operation is not constant-time, as it involves going through all
     * the child elements.
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to compute the geometry for the whole SVG.
     * @param viewport Viewport size at which the whole SVG would be fitted.
     */
    getGeometryForLayer(id: string | null, viewport: Rectangle): [ /* returnType */ boolean, /* outInkRect */ Rectangle | null, /* outLogicalRect */ Rectangle | null ]
    /**
     * In simple terms, queries the `width`, `height`, and `viewBox` attributes in an SVG document.
     * 
     * If you are calling this function to compute a scaling factor to render the SVG,
     * consider simply using [method`Rsvg`.Handle.render_document] instead; it will do the
     * scaling computations automatically.
     * 
     * Before librsvg 2.54.0, the `out_has_width` and `out_has_height` arguments would be set to true or false
     * depending on whether the SVG document actually had `width` and `height` attributes, respectively.
     * 
     * However, since librsvg 2.54.0, `width` and `height` are now [geometry
     * properties](https://www.w3.org/TR/SVG2/geometry.html) per the SVG2 specification; they
     * are not plain attributes.  SVG2 made it so that the initial value of those properties
     * is `auto`, which is equivalent to specifing a value of `100%`.  In this sense, even SVG
     * documents which lack `width` or `height` attributes semantically have to make them
     * default to `100%`.  This is why since librsvg 2.54.0, `out_has_width` and
     * `out_has_heigth` are always returned as `TRUE`, since with SVG2 all documents *have* a
     * default width and height of `100%`.
     * 
     * As an example, the following SVG element has a `width` of 100 pixels and a `height` of 400 pixels, but no `viewBox`.  This
     * function will return those sizes in `out_width` and `out_height`, and set `out_has_viewbox` to `FALSE`.
     * 
     * ```
     * <svg xmlns="http://www.w3.org/2000/svg" width="100" height="400">
     * ```
     * 
     * Conversely, the following element has a `viewBox`, but no `width` or `height`.  This function will
     * set `out_has_viewbox` to `TRUE`, and it will also set `out_has_width` and `out_has_height` to `TRUE` but
     * return both length values as `100%`.
     * 
     * ```
     * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 400">
     * ```
     * 
     * Note that the `RsvgLength` return values have `RsvgUnits` in them; you should
     * not assume that they are always in pixels.  For example, the following SVG element
     * will return width and height values whose `units` fields are `RSVG_UNIT_MM`.
     * 
     * ```
     * <svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm">
     * ```
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section "[API ordering](class.Handle.html#api-ordering)" for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     */
    getIntrinsicDimensions(): [ /* outHasWidth */ boolean | null, /* outWidth */ Length | null, /* outHasHeight */ boolean | null, /* outHeight */ Length | null, /* outHasViewbox */ boolean | null, /* outViewbox */ Rectangle | null ]
    /**
     * Converts an SVG document's intrinsic dimensions to pixels, and returns the result.
     * 
     * This function is able to extract the size in pixels from an SVG document if the
     * document has both `width` and `height` attributes
     * with physical units (px, in, cm, mm, pt, pc) or font-based units (em, ex).  For
     * physical units, the dimensions are normalized to pixels using the dots-per-inch (DPI)
     * value set previously with [method`Rsvg`.Handle.set_dpi].  For font-based units, this function
     * uses the computed value of the `font-size` property for the toplevel
     * `<svg>` element.  In those cases, this function returns `TRUE`.
     * 
     * This function is not able to extract the size in pixels directly from the intrinsic
     * dimensions of the SVG document if the `width` or
     * `height` are in percentage units (or if they do not exist, in which
     * case the SVG spec mandates that they default to 100%), as these require a
     * <firstterm>viewport</firstterm> to be resolved to a final size.  In this case, the
     * function returns `FALSE`.
     * 
     * For example, the following document fragment has intrinsic dimensions that will resolve
     * to 20x30 pixels.
     * 
     * ```
     * <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30"/>
     * ```
     * 
     * Similarly, if the DPI is set to 96, this document will resolve to 192×288 pixels (i.e. 96×2 × 96×3).
     * 
     * ```
     * <svg xmlns="http://www.w3.org/2000/svg" width="2in" height="3in"/>
     * ```
     * 
     * The dimensions of the following documents cannot be resolved to pixels directly, and
     * this function would return `FALSE` for them:
     * 
     * ```
     * <!-- Needs a viewport against which to compute the percentages. -->
     * <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"/>
     * 
     * <!-- Does not have intrinsic width/height, just a 1:2 aspect ratio which
     *      needs to be fitted within a viewport. -->
     * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200"/>
     * ```
     * 
     * Instead of querying an SVG document's size, applications are encouraged to render SVG
     * documents to a size chosen by the application, by passing a suitably-sized viewport to
     * [method`Rsvg`.Handle.render_document].
     */
    getIntrinsicSizeInPixels(): [ /* returnType */ boolean, /* outWidth */ number | null, /* outHeight */ number | null ]
    getMetadata(): string | null
    /**
     * Returns the pixbuf loaded by `handle`.  The pixbuf returned will be reffed, so
     * the caller of this function must assume that ref.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section "[API ordering](class.Handle.html#api-ordering)" for details.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s dots-per-inch value (DPI) to compute the
     * "natural size" of the document in pixels, so you should call [method`Rsvg`.Handle.set_dpi]
     * beforehand.
     */
    getPixbuf(): GdkPixbuf.Pixbuf | null
    /**
     * Creates a `GdkPixbuf` the same size as the entire SVG loaded into `handle,` but
     * only renders the sub-element that has the specified `id` (and all its
     * sub-sub-elements recursively).  If `id` is `NULL`, this function renders the
     * whole SVG.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s dots-per-inch value (DPI) to compute the
     * "natural size" of the document in pixels, so you should call [method`Rsvg`.Handle.set_dpi]
     * beforehand.
     * 
     * If you need to render an image which is only big enough to fit a particular
     * sub-element of the SVG, consider using [method`Rsvg`.Handle.render_element].
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section "[API ordering](class.Handle.html#api-ordering)" for details.
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to use the whole SVG.
     */
    getPixbufSub(id?: string | null): GdkPixbuf.Pixbuf | null
    /**
     * Get the position of a subelement of the SVG file. Do not call from within
     * the size_func callback, because an infinite loop will occur.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
     * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to use the whole SVG.
     */
    getPositionSub(id?: string | null): [ /* returnType */ boolean, /* positionData */ PositionData ]
    getTitle(): string | null
    /**
     * Checks whether the element `id` exists in the SVG document.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.
     */
    hasSub(id: string): boolean
    /**
     * Do not call this function.  This is intended for librsvg's internal
     * test suite only.
     * @param testing Whether to enable testing mode
     */
    internalSetTesting(testing: boolean): void
    /**
     * Reads `stream` and writes the data from it to `handle`.
     * 
     * Before calling this function, you may need to call [method`Rsvg`.Handle.set_base_uri]
     * or [method`Rsvg`.Handle.set_base_gfile] to set the "base file" for resolving
     * references to external resources.  SVG elements like
     * `<image>` which reference external resources will be
     * resolved relative to the location you specify with those functions.
     * 
     * If `cancellable` is not `NULL`, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the
     * operation was cancelled, the error `G_IO_ERROR_CANCELLED` will be
     * returned.
     * @param stream a `GInputStream`
     * @param cancellable a `GCancellable`, or `NULL`
     */
    readStreamSync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Draws a loaded SVG handle to a Cairo context.  Please try to use
     * [method`Rsvg`.Handle.render_document] instead, which allows you to pick the size
     * at which the document will be rendered.
     * 
     * Historically this function has picked a size by itself, based on the following rules:
     * 
     * * If the SVG document has both `width` and `height`
     *   attributes with physical units (px, in, cm, mm, pt, pc) or font-based units (em,
     *   ex), the function computes the size directly based on the dots-per-inch (DPI) you
     *   have configured with [method`Rsvg`.Handle.set_dpi].  This is the same approach as
     *   [method`Rsvg`.Handle.get_intrinsic_size_in_pixels].
     * 
     * * Otherwise, if there is a `viewBox` attribute and both
     *   `width` and `height` are set to
     *   `100%` (or if they don't exist at all and thus default to 100%),
     *   the function uses the width and height of the `viewBox` as a pixel size.  This
     *   produces a rendered document with the correct aspect ratio.
     * 
     * * Otherwise, this function computes the extents of every graphical object in the SVG
     *   document to find the total extents.  This is moderately expensive, but no more expensive
     *   than rendering the whole document, for example.
     * 
     * * This function cannot deal with percentage-based units for `width`
     *   and `height` because there is no viewport against which they could
     *   be resolved; that is why it will compute the extents of objects in that case.  This
     *   is why we recommend that you use [method`Rsvg`.Handle.render_document] instead, which takes
     *   in a viewport and follows the sizing policy from the web platform.
     * 
     * Drawing will occur with respect to the `cr'`s current transformation: for example, if
     * the `cr` has a rotated current transformation matrix, the whole SVG will be rotated in
     * the rendered version.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
     * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
     * 
     * Note that `cr` must be a Cairo context that is not in an error state, that is,
     * `cairo_status()` must return `CAIRO_STATUS_SUCCESS` for it.  Cairo can set a
     * context to be in an error state in various situations, for example, if it was
     * passed an invalid matrix or if it was created for an invalid surface.
     * @param cr A Cairo context
     */
    renderCairo(cr: cairo.Context): boolean
    /**
     * Renders a single SVG element in the same place as for a whole SVG document (a "subset"
     * of the document).  Please try to use [method`Rsvg`.Handle.render_layer] instead, which allows
     * you to pick the size at which the document with the layer will be rendered.
     * 
     * This is equivalent to [method`Rsvg`.Handle.render_cairo], but it renders only a single
     * element and its children, as if they composed an individual layer in the SVG.
     * 
     * Historically this function has picked a size for the whole document by itself, based
     * on the following rules:
     * 
     * * If the SVG document has both `width` and `height`
     *   attributes with physical units (px, in, cm, mm, pt, pc) or font-based units (em,
     *   ex), the function computes the size directly based on the dots-per-inch (DPI) you
     *   have configured with [method`Rsvg`.Handle.set_dpi].  This is the same approach as
     *   [method`Rsvg`.Handle.get_intrinsic_size_in_pixels].
     * 
     * * Otherwise, if there is a `viewBox` attribute and both
     *   `width` and `height` are set to
     *   `100%` (or if they don't exist at all and thus default to 100%),
     *   the function uses the width and height of the `viewBox` as a pixel size.  This
     *   produces a rendered document with the correct aspect ratio.
     * 
     * * Otherwise, this function computes the extents of every graphical object in the SVG
     *   document to find the total extents.  This is moderately expensive, but no more expensive
     *   than rendering the whole document, for example.
     * 
     * * This function cannot deal with percentage-based units for `width`
     *   and `height` because there is no viewport against which they could
     *   be resolved; that is why it will compute the extents of objects in that case.  This
     *   is why we recommend that you use [method`Rsvg`.Handle.render_layer] instead, which takes
     *   in a viewport and follows the sizing policy from the web platform.
     * 
     * Drawing will occur with respect to the `cr'`s current transformation: for example, if
     * the `cr` has a rotated current transformation matrix, the whole SVG will be rotated in
     * the rendered version.
     * 
     * This function depends on the [class`Rsvg`.Handle]'s DPI to compute dimensions in
     * pixels, so you should call [method`Rsvg`.Handle.set_dpi] beforehand.
     * 
     * Note that `cr` must be a Cairo context that is not in an error state, that is,
     * `cairo_status()` must return `CAIRO_STATUS_SUCCESS` for it.  Cairo can set a
     * context to be in an error state in various situations, for example, if it was
     * passed an invalid matrix or if it was created for an invalid surface.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * @param cr A Cairo context
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to render the whole SVG.
     */
    renderCairoSub(cr: cairo.Context, id?: string | null): boolean
    /**
     * Renders the whole SVG document fitted to a viewport.
     * 
     * The `viewport` gives the position and size at which the whole SVG document will be
     * rendered.  The document is scaled proportionally to fit into this viewport.
     * 
     * The `cr` must be in a `CAIRO_STATUS_SUCCESS` state, or this function will not
     * render anything, and instead will return an error.
     * @param cr A Cairo context
     * @param viewport Viewport size at which the whole SVG would be fitted.
     */
    renderDocument(cr: cairo.Context, viewport: Rectangle): boolean
    /**
     * Renders a single SVG element to a given viewport.
     * 
     * This function can be used to extract individual element subtrees and render them,
     * scaled to a given `element_viewport`.  This is useful for applications which have
     * reusable objects in an SVG and want to render them individually; for example, an
     * SVG full of icons that are meant to be be rendered independently of each other.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * 
     * You can pass `NULL` for the `id` if you want to render all
     * the elements in the SVG, i.e. to render everything from the
     * root element.
     * 
     * The `element_viewport` gives the position and size at which the named element will
     * be rendered.  FIXME: mention proportional scaling.
     * @param cr A Cairo context
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to render the whole SVG document tree.
     * @param elementViewport Viewport size in which to fit the element
     */
    renderElement(cr: cairo.Context, id: string | null, elementViewport: Rectangle): boolean
    /**
     * Renders a single SVG element in the same place as for a whole SVG document.
     * 
     * The `viewport` gives the position and size at which the whole SVG document would be
     * rendered.  The document is scaled proportionally to fit into this viewport; hence the
     * individual layer may be smaller than this.
     * 
     * This is equivalent to [method`Rsvg`.Handle.render_document], but it renders only a
     * single element and its children, as if they composed an individual layer in
     * the SVG.  The element is rendered with the same transformation matrix as it
     * has within the whole SVG document.  Applications can use this to re-render a
     * single element and repaint it on top of a previously-rendered document, for
     * example.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * `#foo` (hash `foo`) to get the geometry of the element that
     * has an `id="foo"` attribute.
     * 
     * You can pass `NULL` for the `id` if you want to render all
     * the elements in the SVG, i.e. to render everything from the
     * root element.
     * @param cr A Cairo context
     * @param id An element's id within the SVG, starting with "#" (a single hash character), for example, `#layer1`.  This notation corresponds to a URL's fragment ID.  Alternatively, pass `NULL` to render the whole SVG document tree.
     * @param viewport Viewport size at which the whole SVG would be fitted.
     */
    renderLayer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean
    /**
     * Set the base URI for `handle` from `file`.
     * 
     * Note: This function may only be called before [method`Rsvg`.Handle.write] or
     * [method`Rsvg`.Handle.read_stream_sync] have been called.
     * @param baseFile a `GFile`
     */
    setBaseGfile(baseFile: Gio.File): void
    /**
     * Set the base URI for this SVG.
     * 
     * Note: This function may only be called before [method`Rsvg`.Handle.write] or
     * [method`Rsvg`.Handle.read_stream_sync] have been called.
     * @param baseUri The base uri
     */
    setBaseUri(baseUri: string): void
    /**
     * Sets the DPI at which the `handle` will be rendered. Common values are
     * 75, 90, and 300 DPI.
     * 
     * Passing a number <= 0 to `dpi` will reset the DPI to whatever the default
     * value happens to be, but since [id`rsvg_set_default_dpi]` is deprecated, please
     * do not pass values <= 0 to this function.
     * @param dpi Dots Per Inch (i.e. as Pixels Per Inch)
     */
    setDpi(dpi: number): void
    /**
     * Sets the DPI at which the `handle` will be rendered. Common values are
     * 75, 90, and 300 DPI.
     * 
     * Passing a number <= 0 to `dpi` will reset the DPI to whatever the default
     * value happens to be, but since [id`rsvg_set_default_dpi_x_y]` is deprecated,
     * please do not pass values <= 0 to this function.
     * @param dpiX Dots Per Inch (i.e. Pixels Per Inch)
     * @param dpiY Dots Per Inch (i.e. Pixels Per Inch)
     */
    setDpiXY(dpiX: number, dpiY: number): void
    /**
     * Sets the sizing function for the `handle,` which can be used to override the
     * size that librsvg computes for SVG images.  The `size_func` is called from the
     * following functions:
     * 
     * * [method`Rsvg`.Handle.get_dimensions]
     * * [method`Rsvg`.Handle.get_dimensions_sub]
     * * [method`Rsvg`.Handle.get_position_sub]
     * * [method`Rsvg`.Handle.render_cairo]
     * * [method`Rsvg`.Handle.render_cairo_sub]
     * 
     * Librsvg computes the size of the SVG being rendered, and passes it to the
     * `size_func,` which may then modify these values to set the final size of the
     * generated image.
     * @param sizeFunc A sizing function, or `NULL`
     */
    setSizeCallback(sizeFunc: SizeFunc | null): void
    /**
     * Sets a CSS stylesheet to use for an SVG document.
     * 
     * The `css_len` argument is mandatory; this function will not compute the length
     * of the `css` string.  This is because a provided stylesheet, which the calling
     * program could read from a file, can have nul characters in it.
     * 
     * During the CSS cascade, the specified stylesheet will be used with a "User"
     * [origin](https://drafts.csswg.org/css-cascade-3/#cascading-origins).
     * 
     * Note that ``import`` rules will not be resolved, except for `data:` URLs.
     * @param css String with CSS data; must be valid UTF-8.
     */
    setStylesheet(css: Uint8Array): boolean
    /**
     * Loads the next `count` bytes of the image.  You can call this function multiple
     * times until the whole document is consumed; then you must call [method`Rsvg`.Handle.close]
     * to actually parse the document.
     * 
     * Before calling this function for the first time, you may need to call
     * [method`Rsvg`.Handle.set_base_uri] or [method`Rsvg`.Handle.set_base_gfile] to set the "base
     * file" for resolving references to external resources.  SVG elements like
     * `<image>` which reference external resources will be
     * resolved relative to the location you specify with those functions.
     * @param buf pointer to svg data
     */
    write(buf: Uint8Array): boolean
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
    connect(sigName: "notify::base-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpi-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpi-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dpi-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dpi-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::em", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::em", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::em", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Handle_ConstructProps)
    _init (config?: Handle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Handle
    static newFromData(data: Uint8Array): Handle
    static newFromFile(filename: string): Handle
    static newFromGfileSync(file: Gio.File, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static newFromStreamSync(inputStream: Gio.InputStream, baseFile: Gio.File | null, flags: HandleFlags, cancellable?: Gio.Cancellable | null): Handle
    static newWithFlags(flags: HandleFlags): Handle
    static $gtype: GObject.Type
}
class DimensionData {
    /* Fields of Rsvg-2.0.Rsvg.DimensionData */
    /**
     * SVG's width, in pixels
     */
    width: number
    /**
     * SVG's height, in pixels
     */
    height: number
    /**
     * SVG's original width, unmodified by `RsvgSizeFunc`
     */
    em: number
    /**
     * SVG's original height, unmodified by `RsvgSizeFunc`
     */
    ex: number
    static name: string
}
abstract class HandleClass {
    /* Fields of Rsvg-2.0.Rsvg.HandleClass */
    /**
     * parent class
     */
    parent: GObject.ObjectClass
    static name: string
}
class Length {
    /* Fields of Rsvg-2.0.Rsvg.Length */
    /**
     * numeric part of the length
     */
    length: number
    /**
     * unit part of the length
     */
    unit: Unit
    static name: string
}
class PositionData {
    /* Fields of Rsvg-2.0.Rsvg.PositionData */
    /**
     * position on the x axis
     */
    x: number
    /**
     * position on the y axis
     */
    y: number
    static name: string
}
class Rectangle {
    /* Fields of Rsvg-2.0.Rsvg.Rectangle */
    /**
     * X coordinate of the left side of the rectangle
     */
    x: number
    /**
     * Y coordinate of the the top side of the rectangle
     */
    y: number
    /**
     * width of the rectangle
     */
    width: number
    /**
     * height of the rectangle
     */
    height: number
    static name: string
}
}
export default Rsvg;