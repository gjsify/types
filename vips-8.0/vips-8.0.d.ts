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

export namespace Vips {
    /**
     * Vips-8.0
     */

    /**
     * @gir-type Enum
     */
    export namespace Access {
        export const $gtype: GObject.GType<Access>;
    }

    /**
     * The type of access an operation has to supply. See {@link Image.tilecache}
     * and {@link Foreign}.
     *
     * {@link Vips.Access.RANDOM} means requests can come in any order.
     *
     * {@link Vips.Access.SEQUENTIAL} means requests will be top-to-bottom, but with some
     * amount of buffering behind the read point for small non-local accesses.
     * @gir-type Enum
     */
    enum Access {
        /**
         * can read anywhere
         */
        RANDOM,
        /**
         * top-to-bottom reading only, but with a small buffer
         */
        SEQUENTIAL,
        /**
         * deprecated, use {@link Vips.Access.SEQUENTIAL} instead
         */
        SEQUENTIAL_UNBUFFERED,
    }

    /**
     * @gir-type Enum
     */
    export namespace Align {
        export const $gtype: GObject.GType<Align>;
    }

    /**
     * See {@link Image.join} and so on.
     *
     * Operations like {@link Image.join} need to be told whether to align images on the
     * low or high coordinate edge, or centre.
     *
     * ::: seealso
     *     {@link Image.join}.
     * @gir-type Enum
     */
    enum Align {
        /**
         * align low coordinate edge
         */
        LOW,
        /**
         * align centre
         */
        CENTRE,
        /**
         * align high coordinate edge
         */
        HIGH,
    }

    /**
     * @gir-type Enum
     */
    export namespace Angle {
        export const $gtype: GObject.GType<Angle>;
    }

    /**
     * See {@link Image.rot} and so on.
     *
     * Fixed rotate angles.
     *
     * ::: seealso
     *     {@link Image.rot}.
     * @gir-type Enum
     */
    enum Angle {
        /**
         * no rotate
         */
        D0,
        /**
         * 90 degrees clockwise
         */
        D90,
        /**
         * 180 degree rotate
         */
        D180,
        /**
         * 90 degrees anti-clockwise
         */
        D270,
    }

    /**
     * @gir-type Enum
     */
    export namespace Angle45 {
        export const $gtype: GObject.GType<Angle45>;
    }

    /**
     * See {@link Image.rot45} and so on.
     *
     * Fixed rotate angles.
     *
     * ::: seealso
     *     {@link Image.rot45}.
     * @gir-type Enum
     */
    enum Angle45 {
        /**
         * no rotate
         */
        D0,
        /**
         * 45 degrees clockwise
         */
        D45,
        /**
         * 90 degrees clockwise
         */
        D90,
        /**
         * 135 degrees clockwise
         */
        D135,
        /**
         * 180 degrees
         */
        D180,
        /**
         * 135 degrees anti-clockwise
         */
        D225,
        /**
         * 90 degrees anti-clockwise
         */
        D270,
        /**
         * 45 degrees anti-clockwise
         */
        D315,
    }

    /**
     * @gir-type Enum
     */
    export namespace BandFormat {
        export const $gtype: GObject.GType<BandFormat>;
    }

    /**
     * The format used for each band element.
     *
     * Each corresponds to a native C type for the current machine. For example,
     * {@link Vips.BandFormat.USHORT} is `unsigned short`.
     * @gir-type Enum
     */
    enum BandFormat {
        /**
         * invalid setting
         */
        NOTSET,
        /**
         * unsigned char format
         */
        UCHAR,
        /**
         * char format
         */
        CHAR,
        /**
         * unsigned short format
         */
        USHORT,
        /**
         * short format
         */
        SHORT,
        /**
         * unsigned int format
         */
        UINT,
        /**
         * int format
         */
        INT,
        /**
         * float format
         */
        FLOAT,
        /**
         * complex (two floats) format
         */
        COMPLEX,
        /**
         * double float format
         */
        DOUBLE,
        /**
         * double complex (two double) format
         */
        DPCOMPLEX,
    }

    /**
     * @gir-type Enum
     */
    export namespace BlendMode {
        export const $gtype: GObject.GType<BlendMode>;
    }

    /**
     * The various Porter-Duff and PDF blend modes. See {@link Image.composite},
     * for example.
     *
     * The Cairo docs have [a nice explanation of all the blend
     * modes](https://www.cairographics.org/operators).
     *
     * The non-separable modes are not implemented.
     * @gir-type Enum
     */
    enum BlendMode {
        /**
         * where the second object is drawn, the first is removed
         */
        CLEAR,
        /**
         * the second object is drawn as if nothing were below
         */
        SOURCE,
        /**
         * the image shows what you would expect if you held two semi-transparent slides on top of each other
         */
        OVER,
        /**
         * the first object is removed completely, the second is only drawn where the first was
         */
        IN,
        /**
         * the second is drawn only where the first isn't
         */
        OUT,
        /**
         * this leaves the first object mostly intact, but mixes both objects in the overlapping area
         */
        ATOP,
        /**
         * leaves the first object untouched, the second is discarded completely
         */
        DEST,
        /**
         * like OVER, but swaps the arguments
         */
        DEST_OVER,
        /**
         * like IN, but swaps the arguments
         */
        DEST_IN,
        /**
         * like OUT, but swaps the arguments
         */
        DEST_OUT,
        /**
         * like ATOP, but swaps the arguments
         */
        DEST_ATOP,
        /**
         * something like a difference operator
         */
        XOR,
        /**
         * a bit like adding the two images
         */
        ADD,
        /**
         * a bit like the darker of the two
         */
        SATURATE,
        /**
         * at least as dark as the darker of the two inputs
         */
        MULTIPLY,
        /**
         * at least as light as the lighter of the inputs
         */
        SCREEN,
        /**
         * multiplies or screens colors, depending on the lightness
         */
        OVERLAY,
        /**
         * the darker of each component
         */
        DARKEN,
        /**
         * the lighter of each component
         */
        LIGHTEN,
        /**
         * brighten first by a factor second
         */
        COLOUR_DODGE,
        /**
         * darken first by a factor of second
         */
        COLOUR_BURN,
        /**
         * multiply or screen, depending on lightness
         */
        HARD_LIGHT,
        /**
         * darken or lighten, depending on lightness
         */
        SOFT_LIGHT,
        /**
         * difference of the two
         */
        DIFFERENCE,
        /**
         * somewhat like DIFFERENCE, but lower-contrast
         */
        EXCLUSION,
    }

    /**
     * @gir-type Enum
     */
    export namespace Coding {
        export const $gtype: GObject.GType<Coding>;
    }

    /**
     * How pixels are coded.
     *
     * Normally, pixels are uncoded and can be manipulated as you would expect.
     * However some file formats code pixels for compression, and sometimes it's
     * useful to be able to manipulate images in the coded format.
     *
     * The gaps in the numbering are historical and must be maintained. Allocate
     * new numbers from the end.
     * @gir-type Enum
     */
    enum Coding {
        ERROR,
        /**
         * pixels are not coded
         */
        NONE,
        /**
         * pixels encode 3 float CIELAB values as 4 uchar
         */
        LABQ,
        /**
         * pixels encode 3 float RGB as 4 uchar (Radiance coding)
         */
        RAD,
    }

    /**
     * @gir-type Enum
     */
    export namespace Combine {
        export const $gtype: GObject.GType<Combine>;
    }

    /**
     * How to combine values. See {@link Image.compass}, for example.
     * @gir-type Enum
     */
    enum Combine {
        /**
         * take the maximum of the possible values
         */
        MAX,
        /**
         * sum all the values
         */
        SUM,
        /**
         * take the minimum value
         */
        MIN,
    }

    /**
     * @gir-type Enum
     */
    export namespace CombineMode {
        export const $gtype: GObject.GType<CombineMode>;
    }

    /**
     * See {@link Image.draw_image} and so on.
     *
     * Operations like {@link Image.draw_image} need to be told how to combine images
     * from two sources.
     *
     * ::: seealso
     *     {@link Image.join}.
     * @gir-type Enum
     */
    enum CombineMode {
        /**
         * set pixels to the new value
         */
        SET,
        /**
         * add pixels
         */
        ADD,
    }

    /**
     * @gir-type Enum
     */
    export namespace CompassDirection {
        export const $gtype: GObject.GType<CompassDirection>;
    }

    /**
     * A direction on a compass. Used for {@link Image.gravity}, for example.
     * @gir-type Enum
     */
    enum CompassDirection {
        /**
         * centre
         */
        CENTRE,
        /**
         * north
         */
        NORTH,
        /**
         * east
         */
        EAST,
        /**
         * south
         */
        SOUTH,
        /**
         * west
         */
        WEST,
        /**
         * north-east
         */
        NORTH_EAST,
        /**
         * south-east
         */
        SOUTH_EAST,
        /**
         * south-west
         */
        SOUTH_WEST,
        /**
         * north-west
         */
        NORTH_WEST,
    }

    /**
     * @gir-type Enum
     */
    export namespace DemandStyle {
        export const $gtype: GObject.GType<DemandStyle>;
    }

    /**
     * See {@link Image.pipelinev}. Operations can hint
     * the kind of demand geometry they prefer
     * to the VIPS image IO system.
     *
     * These demand styles are given below in order of increasing
     * specialisation.  When demanding output from a pipeline,
     * {@link Image.generate}
     * will use the most general style requested by the operations
     * in the pipeline.
     *
     * {@link Vips.DemandStyle.SMALLTILE} -- This is the most general demand format.
     * Output is demanded in small (around 100x100 pel) sections. This style works
     * reasonably efficiently, even for bizarre operations like 45 degree rotate.
     *
     * {@link Vips.DemandStyle.FATSTRIP} -- This operation would like to output strips
     * the width of the image and as high as possible. This option is suitable
     * for area operations which do not violently transform coordinates, such
     * as {@link Image.conv}.
     *
     * {@link Vips.DemandStyle.THINSTRIP} -- This operation would like to output strips
     * the width of the image and a few pels high. This option is suitable for
     * point-to-point operations, such as those in the arithmetic package.
     *
     * {@link Vips.DemandStyle.ANY} -- This image is not being demand-read from a disc
     * file (even indirectly) so any demand style is OK. It's used for things like
     * {@link Image.black} where the pixels are calculated.
     *
     * ::: seealso
     *     {@link Image.pipelinev}.
     * @gir-type Enum
     */
    enum DemandStyle {
        ERROR,
        /**
         * demand in small (typically 128x128 pixel) tiles
         */
        SMALLTILE,
        /**
         * demand in fat (typically 16 pixel high) strips
         */
        FATSTRIP,
        /**
         * demand in thin (typically 1 pixel high) strips
         */
        THINSTRIP,
        /**
         * demand geometry does not matter
         */
        ANY,
    }

    /**
     * @gir-type Enum
     */
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }

    /**
     * See {@link Image.flip}, {@link Image.join} and so on.
     *
     * Operations like {@link Image.flip} need to be told whether to flip left-right or
     * top-bottom.
     *
     * ::: seealso
     *     {@link Image.flip}, {@link Image.join}.
     * @gir-type Enum
     */
    enum Direction {
        /**
         * left-right
         */
        HORIZONTAL,
        /**
         * top-bottom
         */
        VERTICAL,
    }

    /**
     * @gir-type Enum
     */
    export namespace Extend {
        export const $gtype: GObject.GType<Extend>;
    }

    /**
     * See {@link Image.embed}, {@link Image.conv}, {@link Image.affine} and so on.
     *
     * When the edges of an image are extended, you can specify
     * how you want the extension done.
     *
     * {@link Vips.Extend.BLACK} -- new pixels are black, ie. all bits are zero.
     *
     * {@link Vips.Extend.COPY} -- each new pixel takes the value of the nearest edge
     * pixel
     *
     * {@link Vips.Extend.REPEAT} -- the image is tiled to fill the new area
     *
     * {@link Vips.Extend.MIRROR} -- the image is reflected and tiled to reduce hash
     * edges
     *
     * {@link Vips.Extend.WHITE} -- new pixels are white, ie. all bits are set
     *
     * {@link Vips.Extend.BACKGROUND} -- colour set from the `background` property
     *
     * We have to specify the exact value of each enum member since we have to
     * keep these frozen for back compat with vips7.
     *
     * ::: seealso
     *     {@link Image.embed}.
     * @gir-type Enum
     */
    enum Extend {
        /**
         * extend with black (all 0) pixels
         */
        BLACK,
        /**
         * copy the image edges
         */
        COPY,
        /**
         * repeat the whole image
         */
        REPEAT,
        /**
         * mirror the whole image
         */
        MIRROR,
        /**
         * extend with white (all bits set) pixels
         */
        WHITE,
        /**
         * extend with colour from the `background` property
         */
        BACKGROUND,
    }

    /**
     * @gir-type Enum
     */
    export namespace FailOn {
        export const $gtype: GObject.GType<FailOn>;
    }

    /**
     * How sensitive loaders are to errors, from never stop (very insensitive), to
     * stop on the smallest warning (very sensitive).
     *
     * Each one implies the ones before it, so {@link Vips.FailOn.ERROR} implies
     * {@link Vips.FailOn.TRUNCATED}.
     * @gir-type Enum
     */
    enum FailOn {
        /**
         * never stop
         */
        NONE,
        /**
         * stop on image truncated, nothing else
         */
        TRUNCATED,
        /**
         * stop on serious error or truncation
         */
        ERROR,
        /**
         * stop on anything, even warnings
         */
        WARNING,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignDzContainer {
        export const $gtype: GObject.GType<ForeignDzContainer>;
    }

    /**
     * What container format to use.
     * @gir-type Enum
     */
    enum ForeignDzContainer {
        /**
         * write tiles to the filesystem
         */
        FS,
        /**
         * write tiles to a zip file
         */
        ZIP,
        /**
         * write to a szi file
         */
        SZI,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignDzDepth {
        export const $gtype: GObject.GType<ForeignDzDepth>;
    }

    /**
     * How many pyramid layers to create.
     * @gir-type Enum
     */
    enum ForeignDzDepth {
        /**
         * create layers down to 1x1 pixel
         */
        ONEPIXEL,
        /**
         * create layers down to 1x1 tile
         */
        ONETILE,
        /**
         * only create a single layer
         */
        ONE,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignDzLayout {
        export const $gtype: GObject.GType<ForeignDzLayout>;
    }

    /**
     * What directory layout and metadata standard to use.
     * @gir-type Enum
     */
    enum ForeignDzLayout {
        /**
         * use DeepZoom directory layout
         */
        DZ,
        /**
         * use Zoomify directory layout
         */
        ZOOMIFY,
        /**
         * use Google maps directory layout
         */
        GOOGLE,
        /**
         * use IIIF v2 directory layout
         */
        IIIF,
        /**
         * use IIIF v3 directory layout
         */
        IIIF3,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignHeifCompression {
        export const $gtype: GObject.GType<ForeignHeifCompression>;
    }

    /**
     * The compression format to use inside a HEIF container.
     *
     * This is assumed to use the same numbering as `heif_compression_format`.
     * @gir-type Enum
     */
    enum ForeignHeifCompression {
        /**
         * x265
         */
        HEVC,
        /**
         * x264
         */
        AVC,
        /**
         * jpeg
         */
        JPEG,
        /**
         * aom
         */
        AV1,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignHeifEncoder {
        export const $gtype: GObject.GType<ForeignHeifEncoder>;
    }

    /**
     * The selected encoder to use.
     * If libheif hasn't been compiled with the selected encoder,
     * we will fallback to the default encoder for the compression format.
     * @gir-type Enum
     */
    enum ForeignHeifEncoder {
        /**
         * auto
         */
        AUTO,
        /**
         * aom
         */
        AOM,
        /**
         * RAV1E
         */
        RAV1E,
        /**
         * SVT-AV1
         */
        SVT,
        /**
         * x265
         */
        X265,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignJpegSubsample {
        export const $gtype: GObject.GType<ForeignJpegSubsample>;
    }

    /**
     * @gir-type Enum
     */
    enum ForeignJpegSubsample {
        AUTO,
        ON,
        OFF,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignPdfPageBox {
        export const $gtype: GObject.GType<ForeignPdfPageBox>;
    }

    /**
     * Each page of a PDF document can contain multiple page boxes,
     * also known as boundary boxes or print marks.
     *
     * Each page box defines a region of the complete page that
     * should be rendered. The default region is the crop box.
     * @gir-type Enum
     */
    enum ForeignPdfPageBox {
        /**
         * media box
         */
        MEDIA,
        /**
         * crop box
         */
        CROP,
        /**
         * trim box
         */
        TRIM,
        /**
         * bleed box
         */
        BLEED,
        /**
         * art box
         */
        ART,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignPpmFormat {
        export const $gtype: GObject.GType<ForeignPpmFormat>;
    }

    /**
     * The netpbm file format to save as.
     *
     * {@link Vips.ForeignPpmFormat.PBM} images are single bit.
     *
     * {@link Vips.ForeignPpmFormat.PGM} images are 8, 16, or 32-bits, one band.
     *
     * {@link Vips.ForeignPpmFormat.PPM} images are 8, 16, or 32-bits, three bands.
     *
     * {@link Vips.ForeignPpmFormat.PFM} images are 32-bit float pixels.
     *
     * {@link Vips.ForeignPpmFormat.PNM} images are anymap images -- the image format
     * is used to pick the saver.
     * @gir-type Enum
     */
    enum ForeignPpmFormat {
        /**
         * portable bitmap
         */
        PBM,
        /**
         * portable greymap
         */
        PGM,
        /**
         * portable pixmap
         */
        PPM,
        /**
         * portable float map
         */
        PFM,
        /**
         * portable anymap
         */
        PNM,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignSubsample {
        export const $gtype: GObject.GType<ForeignSubsample>;
    }

    /**
     * Set subsampling mode.
     * @gir-type Enum
     */
    enum ForeignSubsample {
        /**
         * prevent subsampling when quality >= 90
         */
        AUTO,
        /**
         * always perform subsampling
         */
        ON,
        /**
         * never perform subsampling
         */
        OFF,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignTiffCompression {
        export const $gtype: GObject.GType<ForeignTiffCompression>;
    }

    /**
     * The compression types supported by the tiff writer.
     *
     * Use `Q` to set the jpeg compression level, default 75.
     *
     * Use `predictor` to set the lzw or deflate prediction, default horizontal.
     *
     * Use `lossless` to set WEBP lossless compression.
     *
     * Use `level` to set webp and zstd compression level.
     * @gir-type Enum
     */
    enum ForeignTiffCompression {
        /**
         * no compression
         */
        NONE,
        /**
         * jpeg compression
         */
        JPEG,
        /**
         * deflate (zip) compression
         */
        DEFLATE,
        /**
         * packbits compression
         */
        PACKBITS,
        /**
         * fax4 compression
         */
        CCITTFAX4,
        /**
         * LZW compression
         */
        LZW,
        /**
         * WEBP compression
         */
        WEBP,
        /**
         * ZSTD compression
         */
        ZSTD,
        /**
         * JP2K compression
         */
        JP2K,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignTiffPredictor {
        export const $gtype: GObject.GType<ForeignTiffPredictor>;
    }

    /**
     * The predictor can help deflate and lzw compression. The values are fixed by
     * the tiff library.
     * @gir-type Enum
     */
    enum ForeignTiffPredictor {
        /**
         * no prediction
         */
        NONE,
        /**
         * horizontal differencing
         */
        HORIZONTAL,
        /**
         * float predictor
         */
        FLOAT,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignTiffResunit {
        export const $gtype: GObject.GType<ForeignTiffResunit>;
    }

    /**
     * Use inches or centimeters as the resolution unit for a tiff file.
     * @gir-type Enum
     */
    enum ForeignTiffResunit {
        /**
         * use centimeters
         */
        CM,
        /**
         * use inches
         */
        INCH,
    }

    /**
     * @gir-type Enum
     */
    export namespace ForeignWebpPreset {
        export const $gtype: GObject.GType<ForeignWebpPreset>;
    }

    /**
     * Tune lossy encoder settings for different image types.
     * @gir-type Enum
     */
    enum ForeignWebpPreset {
        /**
         * default preset
         */
        DEFAULT,
        /**
         * digital picture, like portrait, inner shot
         */
        PICTURE,
        /**
         * outdoor photograph, with natural lighting
         */
        PHOTO,
        /**
         * hand or line drawing, with high-contrast details
         */
        DRAWING,
        /**
         * small-sized colorful images
         */
        ICON,
        /**
         * text-like
         */
        TEXT,
    }

    /**
     * @gir-type Enum
     */
    export namespace ImageType {
        export const $gtype: GObject.GType<ImageType>;
    }

    /**
     * @gir-type Enum
     */
    enum ImageType {
        ERROR,
        NONE,
        SETBUF,
        SETBUF_FOREIGN,
        OPENIN,
        MMAPIN,
        MMAPINRW,
        OPENOUT,
        PARTIAL,
    }

    /**
     * @gir-type Enum
     */
    export namespace Intent {
        export const $gtype: GObject.GType<Intent>;
    }

    /**
     * The rendering intent. {@link Vips.Intent.ABSOLUTE} is best for
     * scientific work, {@link Vips.Intent.RELATIVE} is usually best for
     * accurate communication with other imaging libraries.
     * @gir-type Enum
     */
    enum Intent {
        /**
         * perceptual rendering intent
         */
        PERCEPTUAL,
        /**
         * relative colorimetric rendering intent
         */
        RELATIVE,
        /**
         * saturation rendering intent
         */
        SATURATION,
        /**
         * absolute colorimetric rendering intent
         */
        ABSOLUTE,
        /**
         * the rendering intent that the profile suggests
         */
        AUTO,
    }

    /**
     * @gir-type Enum
     */
    export namespace Interesting {
        export const $gtype: GObject.GType<Interesting>;
    }

    /**
     * Pick the algorithm vips uses to decide image "interestingness". This is used
     * by {@link Image.smartcrop}, for example, to decide what parts of the image to
     * keep.
     *
     * {@link Vips.Interesting.NONE} and {@link Vips.Interesting.LOW} mean the same -- the
     * crop is positioned at the top or left. {@link Vips.Interesting.HIGH} positions at
     * the bottom or right.
     *
     * ::: seealso
     *     {@link Image.smartcrop}.
     * @gir-type Enum
     */
    enum Interesting {
        /**
         * do nothing
         */
        NONE,
        /**
         * just take the centre
         */
        CENTRE,
        /**
         * use an entropy measure
         */
        ENTROPY,
        /**
         * look for features likely to draw human attention
         */
        ATTENTION,
        /**
         * position the crop towards the low coordinate
         */
        LOW,
        /**
         * position the crop towards the high coordinate
         */
        HIGH,
        /**
         * everything is interesting
         */
        ALL,
    }

    /**
     * @gir-type Enum
     */
    export namespace Interpretation {
        export const $gtype: GObject.GType<Interpretation>;
    }

    /**
     * How the values in an image should be interpreted. For example, a
     * three-band float image of type {@link Vips.Interpretation.LAB} should have its
     * pixels interpreted as coordinates in CIE Lab space.
     *
     * RGB and sRGB are treated in the same way. Use the colourspace functions if
     * you want some other behaviour.
     *
     * The gaps in numbering are historical and must be maintained. Allocate
     * new numbers from the end.
     * @gir-type Enum
     */
    enum Interpretation {
        ERROR,
        /**
         * generic many-band image
         */
        MULTIBAND,
        /**
         * some kind of single-band image
         */
        B_W,
        /**
         * a 1D image, eg. histogram or lookup table
         */
        HISTOGRAM,
        /**
         * the first three bands are CIE XYZ
         */
        XYZ,
        /**
         * pixels are in CIE Lab space
         */
        LAB,
        /**
         * the first four bands are in CMYK space
         */
        CMYK,
        /**
         * implies {@link Vips.Coding.LABQ}
         */
        LABQ,
        /**
         * generic RGB space
         */
        RGB,
        /**
         * a uniform colourspace based on CMC(1:1)
         */
        CMC,
        /**
         * pixels are in CIE LCh space
         */
        LCH,
        /**
         * CIE LAB coded as three signed 16-bit values
         */
        LABS,
        /**
         * pixels are sRGB
         */
        SRGB,
        /**
         * pixels are CIE Yxy
         */
        YXY,
        /**
         * image is in fourier space
         */
        FOURIER,
        /**
         * generic 16-bit RGB
         */
        RGB16,
        /**
         * generic 16-bit mono
         */
        GREY16,
        /**
         * a matrix
         */
        MATRIX,
        /**
         * pixels are scRGB
         */
        SCRGB,
        /**
         * pixels are HSV
         */
        HSV,
        /**
         * pixels are in Oklab colourspace
         */
        OKLAB,
        /**
         * pixels are in Oklch colourspace
         */
        OKLCH,
    }

    /**
     * @gir-type Enum
     */
    export namespace Kernel {
        export const $gtype: GObject.GType<Kernel>;
    }

    /**
     * The resampling kernels vips supports. See {@link Image.reduce}, for example.
     * @gir-type Enum
     */
    enum Kernel {
        /**
         * the nearest pixel to the point
         */
        NEAREST,
        /**
         * convolve with a triangle filter
         */
        LINEAR,
        /**
         * convolve with a cubic filter
         */
        CUBIC,
        /**
         * convolve with a Mitchell kernel
         */
        MITCHELL,
        /**
         * convolve with a two-lobe Lanczos kernel
         */
        LANCZOS2,
        /**
         * convolve with a three-lobe Lanczos kernel
         */
        LANCZOS3,
        /**
         * convolve with Magic Kernel Sharp 2013
         */
        MKS2013,
        /**
         * convolve with Magic Kernel Sharp 2021
         */
        MKS2021,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationBoolean {
        export const $gtype: GObject.GType<OperationBoolean>;
    }

    /**
     * See also: {@link Image.boolean}.
     * @gir-type Enum
     */
    enum OperationBoolean {
        /**
         * `&`
         */
        AND,
        /**
         * `|`
         */
        OR,
        /**
         * `^`
         */
        EOR,
        /**
         * `>>`
         */
        LSHIFT,
        /**
         * `<<`
         */
        RSHIFT,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationComplex {
        export const $gtype: GObject.GType<OperationComplex>;
    }

    /**
     * See also: {@link Image.complex}.
     * @gir-type Enum
     */
    enum OperationComplex {
        /**
         * convert to polar coordinates
         */
        POLAR,
        /**
         * convert to rectangular coordinates
         */
        RECT,
        /**
         * complex conjugate
         */
        CONJ,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationComplex2 {
        export const $gtype: GObject.GType<OperationComplex2>;
    }

    /**
     * See also: {@link Image.complex2}.
     * @gir-type Enum
     */
    enum OperationComplex2 {
        /**
         * convert to polar coordinates
         */
        CROSS_PHASE,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationComplexget {
        export const $gtype: GObject.GType<OperationComplexget>;
    }

    /**
     * See also: {@link Image.complexget}.
     * @gir-type Enum
     */
    enum OperationComplexget {
        /**
         * get real component
         */
        REAL,
        /**
         * get imaginary component
         */
        IMAG,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationMath {
        export const $gtype: GObject.GType<OperationMath>;
    }

    /**
     * See also: {@link Image.math}.
     * @gir-type Enum
     */
    enum OperationMath {
        /**
         * `sin()`, angles in degrees
         */
        SIN,
        /**
         * `cos()`, angles in degrees
         */
        COS,
        /**
         * `tan()`, angles in degrees
         */
        TAN,
        /**
         * `asin()`, angles in degrees
         */
        ASIN,
        /**
         * `acos()`, angles in degrees
         */
        ACOS,
        /**
         * `atan()`, angles in degrees
         */
        ATAN,
        /**
         * log base e
         */
        LOG,
        /**
         * log base 10
         */
        LOG10,
        /**
         * e to the something
         */
        EXP,
        /**
         * 10 to the something
         */
        EXP10,
        /**
         * `sinh()`, angles in radians
         */
        SINH,
        /**
         * `cosh()`, angles in radians
         */
        COSH,
        /**
         * `tanh()`, angles in radians
         */
        TANH,
        /**
         * `asinh()`, angles in radians
         */
        ASINH,
        /**
         * `acosh()`, angles in radians
         */
        ACOSH,
        /**
         * `atanh()`, angles in radians
         */
        ATANH,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationMath2 {
        export const $gtype: GObject.GType<OperationMath2>;
    }

    /**
     * See also: {@link Image.math}.
     * @gir-type Enum
     */
    enum OperationMath2 {
        /**
         * `pow(left, right)`
         */
        POW,
        /**
         * `pow(right, left)`
         */
        WOP,
        /**
         * `atan2(left, right)`
         */
        ATAN2,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationMorphology {
        export const $gtype: GObject.GType<OperationMorphology>;
    }

    /**
     * More like hit-miss, really.
     *
     * ::: seealso
     *     {@link Image.morph}.
     * @gir-type Enum
     */
    enum OperationMorphology {
        /**
         * true if all set
         */
        ERODE,
        /**
         * true if one set
         */
        DILATE,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationRelational {
        export const $gtype: GObject.GType<OperationRelational>;
    }

    /**
     * See also: {@link Image.relational}.
     * @gir-type Enum
     */
    enum OperationRelational {
        /**
         * `==`
         */
        EQUAL,
        /**
         * `!=`
         */
        NOTEQ,
        /**
         * `<`
         */
        LESS,
        /**
         * `<=`
         */
        LESSEQ,
        /**
         * `>`
         */
        MORE,
        /**
         * `>=`
         */
        MOREEQ,
    }

    /**
     * @gir-type Enum
     */
    export namespace OperationRound {
        export const $gtype: GObject.GType<OperationRound>;
    }

    /**
     * See also: {@link Image.round}.
     * @gir-type Enum
     */
    enum OperationRound {
        /**
         * round to nearest
         */
        RINT,
        /**
         * the smallest integral value not less than
         */
        CEIL,
        /**
         * largest integral value not greater than
         */
        FLOOR,
    }

    /**
     * @gir-type Enum
     */
    export namespace PCS {
        export const $gtype: GObject.GType<PCS>;
    }

    /**
     * Pick a Profile Connection Space for {@link Image.icc_import} and
     * {@link Image.icc_export}. LAB is usually best, XYZ can be more convenient in some
     * cases.
     * @gir-type Enum
     */
    enum PCS {
        /**
         * use CIELAB D65 as the Profile Connection Space
         */
        LAB,
        /**
         * use XYZ as the Profile Connection Space
         */
        XYZ,
    }

    /**
     * @gir-type Enum
     */
    export namespace Precision {
        export const $gtype: GObject.GType<Precision>;
    }

    /**
     * How accurate an operation should be.
     * @gir-type Enum
     */
    enum Precision {
        /**
         * int everywhere
         */
        INTEGER,
        /**
         * float everywhere
         */
        FLOAT,
        /**
         * approximate integer output
         */
        APPROXIMATE,
    }

    /**
     * @gir-type Enum
     */
    export namespace RegionShrink {
        export const $gtype: GObject.GType<RegionShrink>;
    }

    /**
     * How to calculate the output pixels when shrinking a 2x2 region.
     *
     * Images with alpha (see {@link Image.hasalpha}) always shrink with
     * {@link Vips.RegionShrink.MEAN} and pixels scaled by alpha to avoid fringing.
     *
     * Set the image interpretation to {@link Vips.Interpretation.MULTIBAND} to
     * treat all bands equally.
     * @gir-type Enum
     */
    enum RegionShrink {
        /**
         * use the average
         */
        MEAN,
        /**
         * use the median
         */
        MEDIAN,
        /**
         * use the mode
         */
        MODE,
        /**
         * use the maximum
         */
        MAX,
        /**
         * use the minimum
         */
        MIN,
        /**
         * use the top-left pixel
         */
        NEAREST,
    }

    /**
     * @gir-type Enum
     */
    export namespace SdfShape {
        export const $gtype: GObject.GType<SdfShape>;
    }

    /**
     * The SDF to generate,
     *
     * ::: seealso
     *     {@link Image.sdf}.
     * @gir-type Enum
     */
    enum SdfShape {
        /**
         * a circle at `a`, radius `r`
         */
        CIRCLE,
        /**
         * a box from `a` to `b`
         */
        BOX,
        /**
         * a box with rounded `corners` from `a` to `b`
         */
        ROUNDED_BOX,
        /**
         * a line from `a` to `b`
         */
        LINE,
    }

    /**
     * @gir-type Enum
     */
    export namespace Size {
        export const $gtype: GObject.GType<Size>;
    }

    /**
     * Controls whether an operation should upsize, downsize, both up and
     * downsize, or force a size.
     *
     * ::: seealso
     *     {@link Image.thumbnail}.
     * @gir-type Enum
     */
    enum Size {
        /**
         * size both up and down
         */
        BOTH,
        /**
         * only upsize
         */
        UP,
        /**
         * only downsize
         */
        DOWN,
        /**
         * force size, that is, break aspect ratio
         */
        FORCE,
    }

    /**
     * @gir-type Enum
     */
    export namespace TextWrap {
        export const $gtype: GObject.GType<TextWrap>;
    }

    /**
     * Sets the word wrapping style for {@link Image.text} when used with a maximum
     * width.
     *
     * ::: seealso
     *     {@link Image.text}.
     * @gir-type Enum
     */
    enum TextWrap {
        /**
         * wrap at word boundaries
         */
        WORD,
        /**
         * wrap at character boundaries
         */
        CHAR,
        /**
         * wrap at word boundaries, but fall back to character boundaries if there is not enough space for a full word
         */
        WORD_CHAR,
        /**
         * no wrapping
         */
        NONE,
    }

    const ARGUMENT_OPTIONAL_INPUT: number;
    const ARGUMENT_OPTIONAL_OUTPUT: number;
    const ARGUMENT_REQUIRED_INPUT: number;
    const ARGUMENT_REQUIRED_OUTPUT: number;
    /**
     * Areas under curves for illuminant A (2856K), 2 degree observer.
     */
    const A_X0: number;
    const A_Y0: number;
    const A_Z0: number;
    /**
     * Areas under curves for illuminant B (4874K), 2 degree observer.
     */
    const B_X0: number;
    const B_Y0: number;
    const B_Z0: number;
    const CONFIG: string;
    /**
     * Areas under curves for illuminant C (6774K), 2 degree observer.
     */
    const C_X0: number;
    const C_Y0: number;
    const C_Z0: number;
    /**
     * Areas under curves for black body at 3250K, 2 degree observer.
     */
    const D3250_X0: number;
    const D3250_Y0: number;
    const D3250_Z0: number;
    /**
     * Areas under curves for D50, 2 degree observer.
     */
    const D50_X0: number;
    const D50_Y0: number;
    const D50_Z0: number;
    /**
     * Areas under curves for D55, 2 degree observer.
     */
    const D55_X0: number;
    const D55_Y0: number;
    const D55_Z0: number;
    /**
     * Areas under curves for D65, 2 degree observer.
     */
    const D65_X0: number;
    const D65_Y0: number;
    const D65_Z0: number;
    /**
     * Areas under curves for D75, 2 degree observer.
     */
    const D75_X0: number;
    const D75_Y0: number;
    const D75_Z0: number;
    /**
     * Areas under curves for D93, 2 degree observer.
     */
    const D93_X0: number;
    const D93_Y0: number;
    const D93_Z0: number;
    const DEFAULT_MAX_COORD: number;
    const ENABLE_DEPRECATED: number;
    /**
     * Areas under curves for equal energy illuminant E.
     */
    const E_X0: number;
    const E_Y0: number;
    const E_Z0: number;
    /**
     * {@link INTERPOLATE_SHIFT} as a multiplicative constant.
     */
    const INTERPOLATE_SCALE: number;
    /**
     * Many of the vips interpolators use fixed-point arithmetic for value
     * calculation. This is how many bits of precision they use.
     */
    const INTERPOLATE_SHIFT: number;
    const LIBRARY_AGE: number;
    const LIBRARY_CURRENT: number;
    const LIBRARY_REVISION: number;
    /**
     * The first four bytes of a VIPS file in Intel byte ordering.
     */
    const MAGIC_INTEL: number;
    /**
     * The first four bytes of a VIPS file in SPARC byte ordering.
     */
    const MAGIC_SPARC: number;
    const MAJOR_VERSION: number;
    /**
     * The bits per sample for each channel.
     */
    const META_BITS_PER_SAMPLE: string;
    /**
     * If set, the suggested concurrency for this image.
     */
    const META_CONCURRENCY: string;
    /**
     * The name that read and write operations use for the image's EXIF data.
     */
    const META_EXIF_NAME: string;
    /**
     * The name we use to attach an ICC profile. The file read and write
     * operations for TIFF, JPEG, PNG and others use this item of metadata to
     * attach and save ICC profiles. The profile is updated by the
     * {@link Image.icc_transform} operations.
     */
    const META_ICC_NAME: string;
    /**
     * The IMAGEDESCRIPTION tag. Often has useful metadata.
     */
    const META_IMAGEDESCRIPTION: string;
    /**
     * The name that read and write operations use for the image's IPTC data.
     */
    const META_IPTC_NAME: string;
    /**
     * Record the name of the original loader here. Handy for hinting file formats
     * and for debugging.
     */
    const META_LOADER: string;
    /**
     * If set, the number of pages in the original file.
     */
    const META_N_PAGES: string;
    /**
     * If set, the number of subifds in the first page of the file.
     */
    const META_N_SUBIFDS: string;
    /**
     * The orientation tag for this image. An int from 1 - 8 using the standard
     * exif/tiff meanings.
     *
     * - 1 - The 0th row represents the visual top of the image, and the 0th column
     *   represents the visual left-hand side.
     * - 2 - The 0th row represents the visual top of the image, and the 0th column
     *   represents the visual right-hand side.
     * - 3 - The 0th row represents the visual bottom of the image, and the 0th
     *   column represents the visual right-hand side.
     * - 4 - The 0th row represents the visual bottom of the image, and the 0th
     *   column represents the visual left-hand side.
     * - 5 - The 0th row represents the visual left-hand side of the image, and the
     *   0th column represents the visual top.
     * - 6 - The 0th row represents the visual right-hand side of the image, and the
     *   0th column represents the visual top.
     * - 7 - The 0th row represents the visual right-hand side of the image, and the
     *   0th column represents the visual bottom.
     * - 8 - The 0th row represents the visual left-hand side of the image, and the
     *   0th column represents the visual bottom.
     */
    const META_ORIENTATION: string;
    /**
     * If set, the height of each page when this image was loaded. If you save an
     * image with "page-height" set to a format that supports multiple pages, such
     * as tiff, the image will be saved as a series of pages.
     */
    const META_PAGE_HEIGHT: string;
    /**
     * Does this image have a palette?
     */
    const META_PALETTE: string;
    /**
     * The name that TIFF read and write operations use for the image's
     * TIFFTAG_PHOTOSHOP data.
     */
    const META_PHOTOSHOP_NAME: string;
    /**
     * The JPEG and TIFF read and write operations use this to record the
     * file's preferred unit for resolution.
     */
    const META_RESOLUTION_UNIT: string;
    /**
     * Images loaded via {@link Image.sequential} have this int field defined. Some
     * operations (eg. {@link Image.shrinkv}) add extra caches if they see it on their
     * input.
     */
    const META_SEQUENTIAL: string;
    /**
     * If set, the height of the tiles for this image.
     */
    const META_TILE_HEIGHT: string;
    /**
     * If set, the width of the tiles for this image.
     */
    const META_TILE_WIDTH: string;
    /**
     * The name that read and write operations use for the image's XMP data.
     */
    const META_XMP_NAME: string;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    const PATH_MAX: number;
    const PI: number;
    const SBUF_BUFFER_SIZE: number;
    const TARGET_BUFFER_SIZE: number;
    const TARGET_CUSTOM_BUFFER_SIZE: number;
    /**
     * {@link TRANSFORM_SHIFT} as a multiplicative constant.
     */
    const TRANSFORM_SCALE: number;
    /**
     * Many of the libvips interpolators use fixed-point arithmetic for coordinate
     * calculation. This is how many bits of precision they use.
     */
    const TRANSFORM_SHIFT: number;
    const VERSION: string;
    const VERSION_STRING: string;
    /**
     * Add the standard vips {@link GLib.OptionEntry} to a
     * {@link GLib.OptionGroup}.
     *
     * ::: seealso
     *     {@link GLib.OptionGroup.new}.
     * @param option_group group to add to
     */
    function add_option_entries(option_group: GLib.OptionGroup): void;
    function amiMSBfirst(): number;
    /**
     * @param mem
     * @param area
     */
    function area_free_cb(mem: any | null, area: Area): number;
    /**
     * Loop over the {@link Argument} of an object. Stop when `fn` returns non-`NULL`
     * and return that value.
     * @param object object whose args should be enumerated
     * @param fn call this function for every argument
     * @param b client data
     * @returns `NULL` if `fn` returns `NULL` for all arguments, otherwise the first non-`NULL` value from `fn`.
     */
    function argument_map(object: Object, fn: ArgumentMapFn, b?: any | null): any | null;
    /**
     * Return `TRUE` if `format` is uchar or schar.
     * @param format format to test
     */
    function band_format_is8bit(format: BandFormat | null): boolean;
    /**
     * Return `TRUE` if `fmt` is one of the complex types.
     * @param format format to test
     */
    function band_format_iscomplex(format: BandFormat | null): boolean;
    /**
     * Return `TRUE` if `format` is one of the float types.
     * @param format format to test
     */
    function band_format_isfloat(format: BandFormat | null): boolean;
    /**
     * Return `TRUE` if `format` is one of the integer types.
     * @param format format to test
     */
    function band_format_isint(format: BandFormat | null): boolean;
    /**
     * Return `TRUE` if `format` is one of the unsigned integer types.
     * @param format format to test
     */
    function band_format_isuint(format: BandFormat | null): boolean;
    /**
     * Like {@link Blob.new}, but take a copy of the data. Useful for bindings
     * which struggle with callbacks.
     *
     * ::: seealso
     *     {@link Blob.new}.
     * @param data data to store
     * @returns the new {@link Blob}.
     */
    function blob_copy(data: Uint8Array | string): Blob;
    /**
     * Set the block state on all untrusted operations.
     *
     * ```c
     * vips_block_untrusted_set(TRUE);
     * ```
     *
     * Will block all untrusted operations from running.
     *
     * Use `vips -l` at the command-line to see the class hierarchy and which
     * operations are marked as untrusted.
     *
     * Set the environment variable `VIPS_BLOCK_UNTRUSTED` to block all untrusted
     * operations on {@link init}.
     * @param state the block state to set
     */
    function block_untrusted_set(state: boolean): void;
    /**
     * @param str
     * @param brk
     */
    function break_token(str: string, brk: string): string;
    /**
     * Drop the whole operation cache, handy for leak tracking. Also called
     * automatically on {@link shutdown}.
     */
    function cache_drop_all(): void;
    /**
     * Get the maximum number of operations we keep in cache.
     * @returns the maximum number of operations we keep in cache
     */
    function cache_get_max(): number;
    /**
     * Get the maximum number of tracked files we allow before we start dropping
     * cached operations. See {@link tracked_get_files}.
     *
     * libvips only tracks file descriptors it allocates, it can't track ones
     * allocated by external libraries. If you use an operation like
     * {@link Image.magickload}, most of the descriptors it uses won't be included.
     *
     * ::: seealso
     *     {@link tracked_get_files}.
     * @returns the maximum number of tracked files we allow
     */
    function cache_get_max_files(): number;
    /**
     * Get the maximum amount of tracked memory we allow before we start dropping
     * cached operations. See {@link tracked_get_mem}.
     *
     * ::: seealso
     *     {@link tracked_get_mem}.
     * @returns the maximum amount of tracked memory we allow
     */
    function cache_get_max_mem(): number;
    /**
     * Get the current number of operations in cache.
     * @returns get the current number of operations in cache.
     */
    function cache_get_size(): number;
    /**
     * A binding-friendly version of {@link cache_operation_buildp}.
     *
     * After calling this, `operation` has the same ref count as when it went in,
     * and the result must be freed with {@link Object.unref_outputs} and
     * {@link GObject.Object.unref}.
     * @param operation operation to lookup
     * @returns The built operation.
     */
    function cache_operation_build(operation: Operation): Operation;
    /**
     * Print the whole operation cache to stdout. Handy for debugging.
     */
    function cache_print(): void;
    /**
     * Handy for debugging. Print the operation cache to stdout just before exit.
     *
     * ::: seealso
     *     {@link cache_set_trace}.
     * @param dump if `TRUE`, dump the operation cache on exit
     */
    function cache_set_dump(dump: boolean): void;
    /**
     * Set the maximum number of operations we keep in cache.
     * @param max maximum number of operation to cache
     */
    function cache_set_max(max: number): void;
    /**
     * Set the maximum number of tracked files we allow before we start dropping
     * cached operations. See {@link tracked_get_files}.
     *
     * ::: seealso
     *     {@link tracked_get_files}.
     * @param max_files max open files we allow
     */
    function cache_set_max_files(max_files: number): void;
    /**
     * Set the maximum amount of tracked memory we allow before we start dropping
     * cached operations. See {@link tracked_get_mem}.
     *
     * libvips only tracks memory it allocates, it can't track memory allocated by
     * external libraries. If you use an operation like {@link Image.magickload},
     * most of the memory it uses won't be included.
     *
     * ::: seealso
     *     {@link tracked_get_mem}.
     * @param max_mem maximum amount of tracked memory we use
     */
    function cache_set_max_mem(max_mem: number): void;
    /**
     * Handy for debugging. Print operation cache actions to stdout as we run.
     *
     * You can set the environment variable `VIPS_TRACE` to turn this option on, or
     * use the command-line flag `--vips-cache-trace`.
     *
     * ::: seealso
     *     {@link cache_set_dump}.
     * @param trace if `TRUE`, trace the operation cache
     */
    function cache_set_trace(trace: boolean): void;
    /**
     * @param operation
     * @param argc
     * @param argv
     */
    function call_argv(operation: Operation, argc: number, argv: string): number;
    /**
     * @param group
     * @param operation
     */
    function call_options(group: GLib.OptionGroup, operation: Operation): void;
    /**
     * Check that the image is 8 or 16-bit integer, signed or unsigned.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_8or16(domain: string, im: Image): number;
    /**
     * `bandno` should be a valid band number (ie. 0 to im->Bands - 1), or can be
     * -1, meaning all bands.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @param bandno band number
     * @returns 0 if OK, -1 otherwise.
     */
    function check_bandno(domain: string, im: Image, bandno: number): number;
    /**
     * Check that the image has `bands` bands.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @param bands must have this many bands
     * @returns 0 if OK, -1 otherwise.
     */
    function check_bands(domain: string, im: Image, bands: number): number;
    /**
     * Check that the image has either one or three bands.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_bands_1or3(domain: string, im: Image): number;
    /**
     * Check that the images have the same number of bands, or that one of the
     * images has just 1 band.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im1 first image to check
     * @param im2 second image to check
     * @returns 0 on OK, or -1 on error.
     */
    function check_bands_1orn(domain: string, im1: Image, im2: Image): number;
    /**
     * Check that an image has 1 or `n` bands. Handy for unary operations, cf.
     * {@link check_bands_1orn}.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link check_bands_1orn}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @param n number of bands, or 1
     * @returns 0 on OK, or -1 on error.
     */
    function check_bands_1orn_unary(domain: string, im: Image, n: number): number;
    /**
     * Check that the image has at least `bands` bands.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @param bands at least this many bands
     * @returns 0 if OK, -1 otherwise.
     */
    function check_bands_atleast(domain: string, im: Image, bands: number): number;
    /**
     * Check that the images have the same number of bands.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im1 first image to check
     * @param im2 second image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_bands_same(domain: string, im1: Image, im2: Image): number;
    /**
     * Check that the image has the required `coding`.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @param coding required coding
     * @returns 0 on OK, or -1 on error.
     */
    function check_coding(domain: string, im: Image, coding: Coding | null): number;
    /**
     * Check that the image is uncoded, LABQ coded or RAD coded.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 on OK, or -1 on error.
     */
    function check_coding_known(domain: string, im: Image): number;
    /**
     * Check that the image is uncoded or LABQ coded.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 on OK, or -1 on error.
     */
    function check_coding_noneorlabq(domain: string, im: Image): number;
    /**
     * Check that the images have the same coding.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im1 first image to check
     * @param im2 second image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_coding_same(domain: string, im1: Image, im2: Image): number;
    /**
     * Check that the image is complex.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_complex(domain: string, im: Image): number;
    /**
     * Check that the image has the specified format.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @param fmt format to test for
     * @returns 0 if OK, -1 otherwise.
     */
    function check_format(domain: string, im: Image, fmt: BandFormat | null): number;
    /**
     * Check that the images have the same format.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im1 first image to check
     * @param im2 second image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_format_same(domain: string, im1: Image, im2: Image): number;
    /**
     * Histogram images must have width or height 1, and must not have more than
     * 65536 elements. Return 0 if the image will pass as a histogram, or -1 and
     * set an error message otherwise.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_hist(domain: string, im: Image): number;
    /**
     * Check that the image is in one of the integer formats.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_int(domain: string, im: Image): number;
    /**
     * Matrix images must have width and height less than 100000 and have 1 band.
     *
     * Return 0 if the image will pass as a matrix, or -1 and set an error
     * message otherwise.
     *
     * `out` is set to be `im` cast to double and stored in memory. Use
     * {@link MATRIX} to address values in `out`.
     *
     * You must unref `out` when you are done with it.
     *
     * ::: seealso
     *     {@link MATRIX}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_matrix(domain: string, im: Image): [number, Image];
    /**
     * Check that the image has exactly one band.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_mono(domain: string, im: Image): number;
    /**
     * Check that the image is not complex.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_noncomplex(domain: string, im: Image): number;
    /**
     * Check that the image is square and that the sides are odd.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_oddsquare(domain: string, im: Image): number;
    /**
     * Check that `prec` image is either float or int.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param precision precision to check
     * @returns 0 on OK, or -1 on error.
     */
    function check_precision_intfloat(domain: string, precision: Precision | null): number;
    /**
     * Separable matrix images must have width or height 1.
     * Return 0 if the image will pass, or -1 and
     * set an error message otherwise.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_separable(domain: string, im: Image): number;
    /**
     * Check that the images have the same size.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im1 first image to check
     * @param im2 second image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_size_same(domain: string, im1: Image, im2: Image): number;
    /**
     * Check that the image is has two "components", ie. is a one-band complex or
     * a two-band non-complex.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_twocomponents(domain: string, im: Image): number;
    /**
     * Check that the image is 8 or 16-bit unsigned integer.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_u8or16(domain: string, im: Image): number;
    /**
     * Check that the image is 8 or 16-bit unsigned integer, or float.
     * Otherwise set an error message and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_u8or16orf(domain: string, im: Image): number;
    /**
     * Check that the image is in one of the unsigned integer formats.
     * Otherwise set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_uint(domain: string, im: Image): number;
    /**
     * Check that the image is unsigned int or float.
     * Otherwise set an error message and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 if OK, -1 otherwise.
     */
    function check_uintorf(domain: string, im: Image): number;
    /**
     * Check that the image is not coded.
     * If not, set an error message
     * and return non-zero.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param im image to check
     * @returns 0 on OK, or -1 on error.
     */
    function check_uncoded(domain: string, im: Image): number;
    /**
     * Operations with a vector constant need a 1-element vector, or a vector with
     * the same number of elements as there are bands in the image, or a 1-band
     * image and a many-element vector.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param n number of elements in vector
     * @param im image to check against
     * @returns 0 if OK, -1 otherwise.
     */
    function check_vector(domain: string, n: number, im: Image): number;
    /**
     * Check that `n` == `len`.
     *
     * ::: seealso
     *     {@link error}.
     * @param domain the originating domain for the error message
     * @param n number of elements in vector
     * @param len number of elements vector should have
     * @returns 0 if OK, -1 otherwise.
     */
    function check_vector_length(domain: string, n: number, len: number): number;
    /**
     * Search below `basename`, return the first class whose name or `nickname`
     * matches.
     *
     * ::: seealso
     *     {@link type_find}
     * @param basename name of base class
     * @param nickname search for a class with this nickname
     * @returns the found class.
     */
    function class_find(basename: string, nickname: string): typeof Object;
    /**
     * Calculate Ccmc from C.
     * @param C Chroma
     * @returns Ccmc.
     */
    function col_C2Ccmc(C: number): number;
    /**
     * Calculate C from Ccmc using a table.
     * Call {@link col_make_tables_CMC} at
     * least once before using this function.
     * @param Ccmc Ccmc
     * @returns C.
     */
    function col_Ccmc2C(Ccmc: number): number;
    /**
     * Calculate ab from Ch, h in degrees.
     * @param C Chroma
     * @param h Hue angle (degrees)
     * @param a return CIE a* value
     * @param b return CIE b* value
     */
    function col_Ch2ab(C: number, h: number, a: number, b: number): void;
    /**
     * Calculate hcmc from C and h.
     * @param C Chroma
     * @param h Hue (degrees)
     * @returns hcmc.
     */
    function col_Ch2hcmc(C: number, h: number): number;
    /**
     * Calculate h from C and hcmc, using a table.
     * Call {@link col_make_tables_CMC} at
     * least once before using this function.
     * @param C Chroma
     * @param hcmc Hue cmc (degrees)
     * @returns h.
     */
    function col_Chcmc2h(C: number, hcmc: number): number;
    /**
     * Calculate Lcmc from L.
     * @param L CIE L*
     * @returns Lcmc
     */
    function col_L2Lcmc(L: number): number;
    /**
     * Calculate XYZ from Lab, D65.
     *
     * ::: seealso
     *     {@link Image.Lab2XYZ}.
     * @param L Input CIE Lab value
     * @param a Input CIE Lab value
     * @param b Input CIE Lab value
     */
    function col_Lab2XYZ(L: number, a: number, b: number): [number, number, number];
    /**
     * Calculate L from Lcmc using a table. Call {@link col_make_tables_CMC} at
     * least once before using this function.
     * @param Lcmc L cmc
     * @returns L*
     */
    function col_Lcmc2L(Lcmc: number): number;
    /**
     * Calculate XYZ from Lab, D65.
     *
     * ::: seealso
     *     {@link Image.XYZ2Lab}.
     * @param X Input CIE XYZ colour
     * @param Y Input CIE XYZ colour
     * @param Z Input CIE XYZ colour
     */
    function col_XYZ2Lab(X: number, Y: number, Z: number): [number, number, number];
    /**
     * Turn XYZ into scRGB.
     *
     * ::: seealso
     *     {@link Image.XYZ2scRGB}.
     * @param X Input XYZ value
     * @param Y Input XYZ value
     * @param Z Input XYZ value
     */
    function col_XYZ2scRGB(X: number, Y: number, Z: number): [number, number, number, number];
    /**
     * @param a
     * @param b
     * @param C
     * @param h
     */
    function col_ab2Ch(a: number, b: number, C: number, h: number): void;
    /**
     * @param a CIE a
     * @param b CIE b
     * @returns Hue (degrees)
     */
    function col_ab2h(a: number, b: number): number;
    /**
     * CIEDE2000, from:
     *
     * Luo, Cui, Rigg, "The Development of the CIE 2000 Colour-Difference
     * Formula: CIEDE2000", COLOR research and application, pp 340
     * @param L1 Input coordinate 1
     * @param a1 Input coordinate 1
     * @param b1 Input coordinate 1
     * @param L2 Input coordinate 2
     * @param a2 Input coordinate 2
     * @param b2 Input coordinate 2
     * @returns CIE dE2000 colour difference.
     */
    function col_dE00(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
    /**
     * Make the lookup tables for cmc.
     */
    function col_make_tables_CMC(): void;
    /**
     * @param r
     * @param g
     * @param b
     * @param R
     * @param G
     * @param B
     */
    function col_sRGB2scRGB_16(r: number, g: number, b: number, R: number, G: number, B: number): number;
    /**
     * @param r
     * @param g
     * @param b
     * @param R
     * @param G
     * @param B
     */
    function col_sRGB2scRGB_16_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number;
    /**
     * @param r
     * @param g
     * @param b
     * @param R
     * @param G
     * @param B
     */
    function col_sRGB2scRGB_8(r: number, g: number, b: number, R: number, G: number, B: number): number;
    /**
     * @param r
     * @param g
     * @param b
     * @param R
     * @param G
     * @param B
     */
    function col_sRGB2scRGB_8_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number;
    /**
     * @param R
     * @param G
     * @param B
     * @param g
     * @param og
     */
    function col_scRGB2BW_16(R: number, G: number, B: number, g: number, og: number): number;
    /**
     * @param R
     * @param G
     * @param B
     * @param g
     * @param og
     */
    function col_scRGB2BW_8(R: number, G: number, B: number, g: number, og: number): number;
    /**
     * Turn scRGB into XYZ.
     *
     * ::: seealso
     *     {@link Image.scRGB2XYZ}.
     * @param R Input scRGB value
     * @param G Input scRGB value
     * @param B Input scRGB value
     */
    function col_scRGB2XYZ(R: number, G: number, B: number): [number, number, number, number];
    /**
     * @param R
     * @param G
     * @param B
     * @param r
     * @param g
     * @param b
     * @param og
     */
    function col_scRGB2sRGB_16(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number;
    /**
     * @param R
     * @param G
     * @param B
     * @param r
     * @param g
     * @param b
     * @param og
     */
    function col_scRGB2sRGB_8(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number;
    /**
     * Returns the number of worker threads that vips should use when running
     * {@link threadpool_run}.
     *
     * vips gets this values from these sources in turn:
     *
     * If {@link concurrency_set} has been called, this value is used. The special
     * value 0 means "default". You can also use the command-line argument
     * `--vips-concurrency` to set this value.
     *
     * If {@link concurrency_set} has not been called and no command-line argument
     * was used, vips uses the value of the environment variable `VIPS_CONCURRENCY`.
     *
     * If `VIPS_CONCURRENCY` has not been set, vips finds the number of hardware
     * threads that the host machine can run in parallel and uses that value.
     *
     * The final value is clipped to the range 1 - 1024.
     *
     * ::: seealso
     *     {@link concurrency_get}.
     * @returns number of worker threads to use.
     */
    function concurrency_get(): number;
    /**
     * Sets the number of worker threads that vips should use when running
     * {@link threadpool_run}.
     *
     * The special value 0 means "default". In this case, the number of threads
     * is set by the environment variable `VIPS_CONCURRENCY`, or if that is not
     * set, the number of threads available on the host machine.
     *
     * ::: seealso
     *     {@link concurrency_get}.
     * @param concurrency number of threads to run
     */
    function concurrency_set(concurrency: number): void;
    /**
     * @param domain
     * @param type
     * @param str
     */
    function enum_from_nick(domain: string, type: GObject.GType, str: string): number;
    /**
     * @param enm
     * @param value
     */
    function enum_nick(enm: GObject.GType, value: number): string;
    /**
     * @param enm
     * @param value
     */
    function enum_string(enm: GObject.GType, value: number): string;
    /**
     * Get a pointer to the start of the error buffer as a C string.
     * The string is owned by the error system and must not be freed.
     *
     * ::: seealso
     *     {@link error_clear}.
     * @returns the error buffer as a C string which must not be freed
     */
    function error_buffer(): string;
    /**
     * Return a copy of the vips error buffer, and clear it.
     * @returns a copy of the libvips error buffer
     */
    function error_buffer_copy(): string;
    /**
     * Clear and reset the error buffer. This is typically called after presenting
     * an error to the user.
     *
     * ::: seealso
     *     {@link error_buffer}.
     */
    function error_clear(): void;
    /**
     * Stop errors being logged. Use {@link error_thaw} to unfreeze. You can
     * nest freeze/thaw pairs.
     */
    function error_freeze(): void;
    /**
     * This function sets the glib error pointer from the vips error buffer and
     * clears it. It's handy for returning errors to glib functions from vips.
     *
     * See {@link g_error} for the inverse operation.
     *
     * ::: seealso
     *     {@link GLib.set_error}, {@link g_error}.
     */
    function error_g(): void;
    /**
     * Re-enable error logging.
     */
    function error_thaw(): void;
    /**
     * @param fd
     */
    function file_length(fd: number): number;
    /**
     * Given a vips filename like "fred.jpg[Q=90]", return a new string of
     * just the filename part, "fred.jpg" in this case.
     *
     * Useful for language bindings.
     *
     * ::: seealso
     *     {@link filename_get_options}.
     * @param vips_filename a filename including a set of options
     * @returns transfer full: just the filename component.
     */
    function filename_get_filename(vips_filename: string): string;
    /**
     * Given a vips filename like "fred.jpg[Q=90]", return a new string of
     * just the options part, "[Q=90]" in this case.
     *
     * Useful for language bindings.
     *
     * ::: seealso
     *     {@link filename_get_filename}.
     * @param vips_filename a filename including a set of options
     * @returns transfer full: just the options component.
     */
    function filename_get_options(vips_filename: string): string;
    /**
     * @param path
     * @param suffixes
     */
    function filename_suffix_match(path: string, suffixes: string): number;
    /**
     * @param domain
     * @param type
     * @param nick
     */
    function flags_from_nick(domain: string, type: GObject.GType, nick: string): number;
    /**
     * Return the flags for `filename` using `loader`.
     * `loader` is something like "tiffload" or "VipsForeignLoadTiff".
     * @param loader name of loader to use for test
     * @param filename file to test
     * @returns the flags for `filename`.
     */
    function foreign_flags(loader: string, filename: string): ForeignFlags;
    /**
     * @param format format type
     * @returns number of bytes for a band format.
     */
    function format_sizeof(format: BandFormat | null): number;
    /**
     * This function adds the {@link GLib.Error} to the vips error buffer and clears it. It's
     * the opposite of {@link error_g}.
     *
     * ::: seealso
     *     {@link error_g}.
     */
    function g_error(): void;
    /**
     * Wrapper for {@link GLib.Thread.try_new}.
     * @param domain an (optional) name for the new thread
     * @param func a function to execute in the new thread
     * @returns the new {@link GLib.Thread}, or `NULL` if an error occurred
     */
    function g_thread_new(domain: string | null, func: GLib.ThreadFunc): GLib.Thread;
    /**
     * ::: seealso
     *     {@link INIT}.
     * @returns a pointer to an internal copy of the argv0 string passed to {@link INIT}. Do not free this value
     */
    function get_argv0(): string;
    /**
     * Return the number of bytes at which we flip between open via memory and
     * open via disc. This defaults to 100mb, but can be changed with the
     * `VIPS_DISC_THRESHOLD` environment variable or the `--vips-disc-threshold`
     * command-line flag. See {@link Image.new_from_file}.
     * @returns disc threshold in bytes.
     */
    function get_disc_threshold(): number;
    /**
     * Return the program name.
     *
     * ::: seealso
     *     {@link INIT}.
     * @returns a pointer to an internal copy of the program name. Do not free this value
     */
    function get_prgname(): string;
    /**
     * {@link guess_libdir} tries to guess the install directory (usually the
     * configure libdir, or $prefix/lib). You should pass
     * in the value of argv[0] (the name your program was run as) as a clue to
     * help it out, plus the name of the environment variable you let the user
     * override your package install area with (eg. "VIPSHOME").
     *
     * On success, {@link guess_libdir} returns the libdir it discovered, and as a
     * side effect, sets the prefix environment variable (if it's not set).
     *
     * Don't free the return string!
     *
     * ::: seealso
     *     {@link guess_prefix}.
     * @param argv0 program name (typically argv[0])
     * @param env_name save prefix in this environment variable
     * @returns the libdir as a static string, do not free.
     */
    function guess_libdir(argv0: string, env_name: string): string;
    /**
     * {@link guess_prefix} tries to guess the install directory. You should pass
     * in the value of argv[0] (the name your program was run as) as a clue to
     * help it out, plus the name of the environment variable you let the user
     * override your package install area with (eg. "VIPSHOME").
     *
     * On success, {@link guess_prefix} returns the prefix it discovered, and as a
     * side effect, sets the environment variable (if it's not set).
     *
     * Don't free the return string!
     *
     * ::: seealso
     *     {@link guess_libdir}.
     * @param argv0 program name (typically argv[0])
     * @param env_name save prefix in this environment variable
     * @returns the install prefix as a static string, do not free.
     */
    function guess_prefix(argv0: string, env_name: string): string;
    /**
     * Like slist map, but for a hash table.
     * @param hash a {@link GLib.HashTable}
     * @param fn function to apply to each hash value
     * @param a user data
     * @param b user data
     * @returns `NULL` if `fn` returns `NULL` for all arguments, otherwise the first non-`NULL` value from `fn`.
     */
    function hash_table_map(
        hash: { [key: string]: any } | GLib.HashTable<any, any>,
        fn: SListMap2Fn,
        a?: any | null,
        b?: any | null,
    ): any | null;
    /**
     * @param image
     * @param data
     * @param data_length
     */
    function icc_is_compatible_profile(image: Image, data: any | null, data_length: number): boolean;
    /**
     * VIPS can optionally be built without the ICC library. Use this function to
     * test for its availability.
     * @returns non-zero if the ICC library is present.
     */
    function icc_present(): number;
    /**
     * This function starts up libvips, see {@link INIT}.
     *
     * This function is for bindings which need to start up vips. C programs
     * should use the {@link INIT} macro, which does some extra checks.
     *
     * ::: seealso
     *     {@link INIT}.
     * @param argv0 name of application
     * @returns 0 on success, -1 otherwise
     */
    function init(argv0: string): number;
    /**
     * The number of "real" bands we expect for this interpretation. If we've no
     * idea (eg. MULTIBAND), return 0.
     * @param interpretation image to check
     * @returns the number of bands implied by this interpretation, or 0.
     */
    function interpretation_bands(interpretation: Interpretation | null): number;
    /**
     * @param interpretation image interpretation
     * @returns the maximum alpha value for an interpretation.
     */
    function interpretation_max_alpha(interpretation: Interpretation | null): number;
    /**
     * @param a
     * @param b
     */
    function iscasepostfix(a: string, b: string): boolean;
    /**
     * @param p
     */
    function ispoweroftwo(p: number): number;
    /**
     * @param a
     * @param b
     */
    function isprefix(a: string, b: string): boolean;
    /**
     * Turn on or off vips leak checking. See also `--vips-leak`,
     * {@link add_option_entries} and the `VIPS_LEAK` environment variable.
     *
     * You should call this very early in your program.
     * @param leak turn leak checking on or off
     */
    function leak_set(leak: boolean): void;
    /**
     * {@link GLib.malloc} local to `object`, that is, the memory will be automatically
     * freed for you when the object is closed. If `object` is `NULL`, you need to
     * free the memory explicitly with {@link GLib.free}.
     *
     * This function cannot fail. See {@link tracked_malloc} if you are
     * allocating large amounts of memory.
     *
     * ::: seealso
     *     {@link tracked_malloc}.
     * @param object allocate memory local to this {@link Object}, or `NULL`
     * @param size number of bytes to allocate
     * @returns a pointer to the allocated memory.
     */
    function malloc(object: Object | null, size: number): any | null;
    /**
     * @param a
     * @param b
     */
    function map_equal(a?: any | null, b?: any | null): any | null;
    /**
     * Return the maximum coordinate value. This can be the default, a value set
     * set by the `--vips-max-coord` CLI arg, or a value set in the `VIPS_MAX_COORD`
     * environment variable.
     *
     * These strings can include unit specifiers, eg. "10m" for 10 million pixels.
     * Values above INT_MAX are not supported.
     * @returns The maximum value a coordinate, or image dimension, can have.
     */
    function max_coord_get(): number;
    /**
     * Return the VIPS nickname for a {@link GObject.Type}. Handy for language bindings.
     * @param type {@link GObject.Type} to search for
     * @returns the class nickname.
     */
    function nickname_find(type: GObject.GType): string;
    /**
     * If a source does not support mmap or seek and the source is
     * used with a loader that can only work from memory, then the data will be
     * automatically read into memory to EOF before the loader starts. This can
     * produce high memory use if the descriptor represents a large object.
     *
     * Use {@link pipe_read_limit_set} to limit the size of object that
     * will be read in this way. The default is 1GB.
     *
     * Set a value of -1 to mean no limit.
     *
     * ::: seealso
     *     `--vips-pipe-read-limit` and the environment variable
     *     `VIPS_PIPE_READ_LIMIT`.
     * @param limit maximum number of bytes to buffer from a pipe
     */
    function pipe_read_limit_set(limit: number): void;
    /**
     * If set, vips will record profiling information, and dump it on program
     * exit. These profiles can be analysed with the `vipsprofile` program.
     * @param profile `TRUE` to enable profile recording
     */
    function profile_set(profile: boolean): void;
    /**
     * If set, vips will print messages about the progress of computation to
     * stdout. This can also be enabled with the `--vips-progress` option, or by
     * setting the environment variable `VIPS_PROGRESS`.
     * @param progress `TRUE` to enable progress messages
     */
    function progress_set(progress: boolean): void;
    /**
     * Pythagorean distance between two points in colour space. Lab/XYZ/CMC etc.
     * @param L1 Input coordinate 1
     * @param a1 Input coordinate 1
     * @param b1 Input coordinate 1
     * @param L2 Input coordinate 2
     * @param a2 Input coordinate 2
     * @param b2 Input coordinate 2
     */
    function pythagoras(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number;
    /**
     * @param path
     */
    function realpath(path: string): string;
    /**
     * @param old_name
     * @param new_name
     */
    function rename(old_name: string, new_name: string): number;
    /**
     * Call this to drop caches, close plugins, terminate background threads, and
     * finalize any internal library testing.
     *
     * {@link shutdown} is optional. If you don't call it, your platform will
     * clean up for you. The only negative consequences are that the leak checker
     * and the profiler will not work.
     *
     * You may call {@link INIT} many times and {@link shutdown} many times, but you
     * must not call {@link INIT} after {@link shutdown}. In other words, you cannot
     * stop and restart libvips.
     *
     * ::: seealso
     *     {@link profile_set}, {@link leak_set}.
     */
    function shutdown(): void;
    /**
     * Loops over `im`, generating it to a memory buffer attached to `im`. It is
     * used by vips to implement writing to a memory buffer.
     *
     * ::: seealso
     *     {@link Image.sink}, {@link Image.get_tile_size},
     *     {@link Image.new_memory}.
     * @param im generate this image to memory
     * @returns 0 on success, or -1 on error.
     */
    function sink_memory(im: Image): number;
    /**
     * Test two lists for equality.
     * @param l1 a {@link GLib.SList}
     * @param l2 another {@link GLib.SList}
     * @returns `TRUE` if `l1` is equal to `l2`. `FALSE` otherwise.
     */
    function slist_equal(l1: Uint8Array | string, l2: Uint8Array | string): boolean;
    /**
     * Remove all occurrences of an item from a list.
     * Returns the new head of the list.
     * @param list a {@link GLib.SList}
     * @param fn function to call for each element.
     * @param a user data
     * @param b user data
     * @returns new head of `list`
     */
    function slist_filter(list: Uint8Array | string, fn: SListMap2Fn, a?: any | null, b?: any | null): Uint8Array;
    /**
     * Fold over a slist, applying `fn` to each element.
     * @param list a {@link GLib.SList}
     * @param start initial value for the accumulator
     * @param fn function to apply to each list element
     * @param a user data
     * @param b user data
     * @returns `NULL` if `fn` returns `NULL` for all arguments, otherwise the first non-`NULL` value from `fn`.
     */
    function slist_fold2(
        list: Uint8Array | string,
        start: any | null,
        fn: SListFold2Fn,
        a?: any | null,
        b?: any | null,
    ): any | null;
    /**
     * Free a {@link GLib.SList} of things which need {@link GLib.free}ing.
     * @param list a {@link GLib.SList}
     */
    function slist_free_all(list: Uint8Array | string): void;
    /**
     * Map over a slist. _copy() the list in case the callback changes it.
     * @param list a {@link GLib.SList}
     * @param fn function to apply to each list element
     * @param a user data
     * @param b user data
     * @returns `NULL` if `fn` returns `NULL` for all arguments, otherwise the first non-`NULL` value from `fn`.
     */
    function slist_map2(list: Uint8Array | string, fn: SListMap2Fn, a?: any | null, b?: any | null): any | null;
    /**
     * Map backwards. We _reverse() rather than recurse and unwind to save stack.
     * @param list a {@link GLib.SList}
     * @param fn function to apply to each list element
     * @param a user data
     * @param b user data
     * @returns `NULL` if `fn` returns `NULL` for all arguments, otherwise the first non-`NULL` value from `fn`.
     */
    function slist_map2_rev(list: Uint8Array | string, fn: SListMap2Fn, a?: any | null, b?: any | null): any | null;
    /**
     * Map over a slist. _copy() the list in case the callback changes it.
     * @param list a {@link GLib.SList}
     * @param fn function to apply to each list element
     * @param a user data
     * @param b user data
     * @param c user data
     * @param d user data
     * @returns `NULL` if `fn` returns `NULL` for all arguments, otherwise the first non-`NULL` value from `fn`.
     */
    function slist_map4(
        list: Uint8Array | string,
        fn: SListMap4Fn,
        a?: any | null,
        b?: any | null,
        c?: any | null,
        d?: any | null,
    ): any | null;
    /**
     * Start function for many images in. `a` is a pointer to
     * a `NULL`-terminated array of input images.
     *
     * ::: seealso
     *     {@link Image.generate}, {@link allocate_input_array}
     * @param out image to generate
     * @param a user data
     * @param b user data
     */
    function start_many(out: Image, a?: any | null, b?: any | null): any | null;
    /**
     * Start function for one image in. Input image is `a`.
     *
     * ::: seealso
     *     {@link Image.generate}.
     * @param out image to generate
     * @param a user data
     * @param b user data
     */
    function start_one(out: Image, a?: any | null, b?: any | null): any | null;
    /**
     * Stop function for many images in. `a` is a pointer to
     * a `NULL`-terminated array of input images.
     *
     * ::: seealso
     *     {@link Image.generate}.
     * @param seq sequence value
     * @param a user data
     * @param b user data
     */
    function stop_many(seq?: any | null, a?: any | null, b?: any | null): number;
    /**
     * Stop function for one image in. Input image is `a`.
     *
     * ::: seealso
     *     {@link Image.generate}.
     * @param seq sequence value
     * @param a user data
     * @param b user data
     */
    function stop_one(seq?: any | null, a?: any | null, b?: any | null): number;
    /**
     * {@link GLib.strdup} a string. When `object` is freed, the string will be freed for
     * you.  If `object` is `NULL`, you need to
     * free the memory yourself with {@link GLib.free}.
     *
     * This function cannot fail.
     *
     * ::: seealso
     *     {@link malloc}.
     * @param object allocate memory local to this {@link Object}, or `NULL`
     * @param str string to copy
     * @returns a pointer to the allocated memory
     */
    function strdup(object: Object | null, str: string): string;
    /**
     * @param str
     * @param out
     */
    function strtod(str: string, out: number): number;
    /**
     * A newly created or reused thread will execute `func` with the
     * argument `data`.
     * @param domain a name for the thread (useful for debugging)
     * @param func a function to execute in the libvips threadset
     * @returns 0 on success, -1 on error.
     */
    function thread_execute(domain: string, func: GLib.Func): number;
    function thread_isvips(): boolean;
    /**
     * Free any thread-private data and flush any profiling information.
     *
     * This function needs to be called when a thread that has been using vips
     * exits. It is called for you by {@link shutdown} and for any threads created
     * within the thread pool.
     *
     * You will need to call it from threads created in
     * other ways or there will be memory leaks. If you do not call it, vips
     * will generate a warning message.
     *
     * It may be called many times, and you can continue using vips after
     * calling it. Calling it too often will reduce performance.
     */
    function thread_shutdown(): void;
    /**
     * Allocate an area of memory aligned on a boundary specified
     * by `align` that will be tracked by {@link tracked_get_mem}
     * and friends.
     *
     * If allocation fails, {@link tracked_aligned_alloc} returns `NULL`
     * and sets an error message.
     *
     * You must only free the memory returned with {@link tracked_aligned_free}.
     *
     * ::: seealso
     *     {@link tracked_malloc}, {@link tracked_aligned_free}, {@link malloc}.
     * @param size number of bytes to allocate
     * @param align specifies the alignment
     * @returns a pointer to the allocated memory, or `NULL` on error.
     */
    function tracked_aligned_alloc(size: number, align: number): any | null;
    /**
     * Only use it to free memory that was
     * previously allocated with {@link tracked_aligned_alloc}
     * with a `NULL` first argument.
     *
     * ::: seealso
     *     {@link tracked_aligned_alloc}.
     * @param s memory to free
     */
    function tracked_aligned_free(s?: any | null): void;
    /**
     * Exactly as [`close()`](man:close(2)), but update the number of files currently open via
     * {@link tracked_get_files}. This is used
     * by the vips operation cache to drop cache when the number of files
     * available is low.
     *
     * You must only close file descriptors opened with {@link tracked_open}.
     *
     * ::: seealso
     *     {@link tracked_open}, {@link tracked_get_files}.
     * @param fd file to `close()`
     * @returns a file descriptor, or -1 on error.
     */
    function tracked_close(fd: number): number;
    /**
     * Only use it to free memory that was
     * previously allocated with {@link tracked_malloc}
     * with a `NULL` first argument.
     *
     * ::: seealso
     *     {@link tracked_malloc}.
     * @param s memory to free
     */
    function tracked_free(s?: any | null): void;
    /**
     * Returns the number of active allocations.
     * @returns the number of active allocations
     */
    function tracked_get_allocs(): number;
    /**
     * Returns the number of open files.
     * @returns the number of open files
     */
    function tracked_get_files(): number;
    /**
     * Returns the number of bytes currently allocated via {@link malloc} and
     * friends. vips uses this figure to decide when to start dropping cache, see
     * {@link Operation}.
     * @returns the number of currently allocated bytes
     */
    function tracked_get_mem(): number;
    /**
     * Returns the largest number of bytes simultaneously allocated via
     * {@link tracked_malloc}. Handy for estimating max memory requirements for a
     * program.
     * @returns the largest number of currently allocated bytes
     */
    function tracked_get_mem_highwater(): number;
    /**
     * Allocate an area of memory that will be tracked by {@link tracked_get_mem}
     * and friends.
     *
     * If allocation fails, {@link tracked_malloc} returns `NULL` and
     * sets an error message.
     *
     * You must only free the memory returned with {@link tracked_free}.
     *
     * ::: seealso
     *     {@link tracked_free}, {@link malloc}.
     * @param size number of bytes to allocate
     * @returns a pointer to the allocated memory, or `NULL` on error.
     */
    function tracked_malloc(size: number): any | null;
    /**
     * Exactly as [`open()`](man:open(2)), but the number of files currently open via
     * {@link tracked_open} is available via {@link tracked_get_files}. This is used
     * by the vips operation cache to drop cache when the number of files
     * available is low.
     *
     * You must only close the file descriptor with {@link tracked_close}.
     *
     * `pathname` should be utf8.
     *
     * ::: seealso
     *     {@link tracked_close}, {@link tracked_get_files}.
     * @param pathname name of file to open
     * @param flags flags for `open()`
     * @param mode open mode
     * @returns a file descriptor, or -1 on error.
     */
    function tracked_open(pathname: string, flags: number, mode: number): number;
    /**
     * @param type
     */
    function type_depth(type: GObject.GType): number;
    /**
     * Search below `basename`, return the {@link GObject.Type} of the class
     * whose name or `nickname` matches, or 0 for not found.
     * If `basename` is `NULL`, the whole of {@link Object} is searched.
     *
     * This function uses a cache, so it should be quick.
     *
     * ::: seealso
     *     {@link class_find}
     * @param basename name of base class
     * @param nickname search for a class with this nickname
     * @returns the {@link GObject.Type} of the class, or 0 if the class is not found.
     */
    function type_find(basename: string, nickname: string): GObject.GType;
    /**
     * Get the pointer from an area. Don't touch count (area is static).
     * @param value get from this value
     * @returns The pointer held by `value`.
     */
    function value_get_area(value: GObject.Value | any): [any | null, number];
    /**
     * Return the pointer to the array held by `value`.
     * Optionally return the other properties of the array in `n`, `type`,
     * `sizeof_type`.
     *
     * ::: seealso
     *     {@link value_set_array}.
     * @param value {@link GObject.Value} to get from
     * @returns The array address.
     */
    function value_get_array(value: GObject.Value | any): [any | null, number, GObject.GType | null, number];
    /**
     * Return the start of the array of doubles held by `value`.
     * optionally return the number of elements in `n`.
     *
     * ::: seealso
     *     {@link ArrayDouble.new}.
     * @param value {@link GObject.Value} to get from
     * @returns The array address.
     */
    function value_get_array_double(value: GObject.Value | any): number[];
    /**
     * Return the start of the array of images held by `value`.
     * optionally return the number of elements in `n`.
     *
     * ::: seealso
     *     {@link value_set_array_image}.
     * @param value {@link GObject.Value} to get from
     * @returns The array address.
     */
    function value_get_array_image(value: GObject.Value | any): Image[];
    /**
     * Return the start of the array of ints held by `value`.
     * optionally return the number of elements in `n`.
     *
     * ::: seealso
     *     {@link ArrayInt.new}.
     * @param value {@link GObject.Value} to get from
     * @returns The array address.
     */
    function value_get_array_int(value: GObject.Value | any): number[];
    /**
     * Returns the data pointer from a blob. Optionally returns the length too.
     *
     * blobs are things like ICC profiles or EXIF data. They are relocatable, and
     * are saved to VIPS files for you coded as base64 inside the XML. They are
     * copied by copying reference-counted pointers.
     *
     * ::: seealso
     *     {@link value_set_blob}
     * @param value GValue to set
     * @returns The pointer held by `value`.
     */
    function value_get_blob(value: GObject.Value | any): Uint8Array;
    /**
     * Get the C string held internally by the {@link GObject.Value}.
     * @param value {@link GObject.Value} to get from
     * @returns The C string held by `value`.
     */
    function value_get_ref_string(value: GObject.Value | any): [string, number];
    /**
     * Get the C string held internally by the GValue.
     * @param value GValue to get from
     * @returns The C string held by `value`.
     */
    function value_get_save_string(value: GObject.Value | any): string;
    /**
     * @param psoec
     * @param value
     */
    function value_is_null(psoec: GObject.ParamSpec, value: GObject.Value | any): boolean;
    /**
     * Set value to be a ref-counted area of memory with a free function.
     * @param value set this value
     * @param free_fn data will be freed with this function
     */
    function value_set_area(value: GObject.Value | any, free_fn?: CallbackFn | null): void;
    /**
     * Set `value` to be an array of things.
     *
     * This allocates memory but does not
     * initialise the contents: get the pointer and write instead.
     * @param n number of elements
     * @param type the type of each element
     * @param sizeof_type the sizeof each element
     */
    function value_set_array(n: number, type: GObject.GType, sizeof_type: number): unknown;
    /**
     * Set `value` to hold a copy of `array`. Pass in the array length in `n`.
     *
     * ::: seealso
     *     {@link ArrayDouble.get}.
     * @param value {@link GObject.Value} to get from
     * @param array array of doubles
     */
    function value_set_array_double(value: GObject.Value | any, array?: number[] | null): void;
    /**
     * Set `value` to hold an array of images. Pass in the array length in `n`.
     *
     * ::: seealso
     *     {@link ArrayImage.get}.
     * @param value {@link GObject.Value} to get from
     * @param n the number of elements
     */
    function value_set_array_image(value: GObject.Value | any, n: number): void;
    /**
     * Set `value` to hold a copy of `array`. Pass in the array length in `n`.
     *
     * ::: seealso
     *     {@link ArrayInt.get}.
     * @param value {@link GObject.Value} to get from
     * @param array array of ints
     */
    function value_set_array_int(value: GObject.Value | any, array?: number[] | null): void;
    /**
     * Set `value` to hold an array of {@link GObject.Object}. Pass in the array
     * length in `n`.
     *
     * ::: seealso
     *     {@link value_get_array_object}.
     * @param n the number of elements
     */
    function value_set_array_object(n: number): unknown;
    /**
     * Sets `value` to hold a `data`. When `value` is freed, `data` will be
     * freed with `free_fn`. `value` also holds a note of the size of the memory
     * area.
     *
     * blobs are things like ICC profiles or EXIF data. They are relocatable, and
     * are saved to VIPS files for you coded as base64 inside the XML. They are
     * copied by copying reference-counted pointers.
     *
     * ::: seealso
     *     {@link value_get_blob}
     * @param free_fn free function for `data`
     * @param data pointer to area of memory
     */
    function value_set_blob(free_fn: CallbackFn | null, data: Uint8Array | string): unknown;
    /**
     * Just like {@link value_set_blob}, but when
     * `value` is freed, `data` will be
     * freed with {@link GLib.free}.
     *
     * This can be easier to call for language bindings.
     *
     * ::: seealso
     *     {@link value_set_blob}
     * @param value GValue to set
     * @param data pointer to area of memory
     */
    function value_set_blob_free(value: GObject.Value | any, data: Uint8Array | string): void;
    /**
     * Copies the C string `str` into `value`.
     *
     * vips_ref_string are immutable C strings that are copied between images by
     * copying reference-counted pointers, making them much more efficient than
     * regular {@link GObject.Value} strings.
     *
     * `str` should be a valid utf-8 string.
     * @param str C string to copy into the GValue
     */
    function value_set_ref_string(str: string): unknown;
    /**
     * Copies the C string into `value`.
     *
     * `str` should be a valid utf-8 string.
     * @param str C string to copy into the GValue
     */
    function value_set_save_string(str: string): unknown;
    /**
     * Takes a bitfield of targets to disable on the runtime platform.
     * Handy for testing and benchmarking purposes.
     *
     * This can also be set using the `VIPS_VECTOR` environment variable.
     * @param disabled_targets A bitfield of targets to disable at runtime.
     */
    function vector_disable_targets(disabled_targets: number): void;
    /**
     * Gets a bitfield of builtin targets that libvips was built with.
     * @returns a bitfield of builtin targets.
     */
    function vector_get_builtin_targets(): number;
    /**
     * Gets a bitfield of builtin targets that are supported on this CPU. The
     * targets returned may change after calling {@link vector_disable_targets}.
     * @returns a bitfield of supported CPU targets.
     */
    function vector_get_supported_targets(): number;
    function vector_isenabled(): boolean;
    /**
     * @param enabled
     */
    function vector_set_enabled(enabled: boolean): void;
    /**
     * Generates a human-readable ASCII string descriptor for a specific target.
     * @param target A specific target to describe.
     * @returns a string describing the target.
     */
    function vector_target_name(target: number): string;
    /**
     * Get the major, minor or micro library version, with `flag` values 0, 1 and
     * 2.
     *
     * Get the ABI current, revision and age (as used by Meson) with `flag`
     * values 3, 4, 5.
     * @param flag which field of the version to get
     * @returns library version number
     */
    function version(flag: number): number;
    /**
     * Get the VIPS version as a static string, including a build date and time.
     * Do not free.
     * @returns a static version string
     */
    function version_string(): string;
    /**
     * @gir-type Callback
     */
    interface ArgumentClassMapFn {
        (
            object_class: typeof Object,
            pspec: GObject.ParamSpec,
            argument_class: ArgumentClass,
            a?: any | null,
            b?: any | null,
        ): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface ArgumentMapFn {
        (
            object: Object,
            pspec: GObject.ParamSpec,
            argument_class: ArgumentClass,
            argument_instance: ArgumentInstance,
            a?: any | null,
            b?: any | null,
        ): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface CallbackFn {
        (a?: any | null, b?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface ClassMapFn {
        (cls: typeof Object, a?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface GenerateFn {
        (out: Region, seq: any | null, a: any | null, b: any | null, stop: boolean): number;
    }
    /**
     * @gir-type Callback
     */
    interface ImageMapFn {
        (image: Image, name: string, value: GObject.Value | any, a?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface InterpolateMethod {
        (interpolate: Interpolate, out: any | null, _in: Region, x: number, y: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface ObjectSetArguments {
        (object: Object, a?: any | null, b?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface OperationBuildFn {
        (object: Object): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface RegionWrite {
        (region: Region, area: Rect, a?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface SListFold2Fn {
        (item?: any | null, a?: any | null, b?: any | null, c?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface SListMap2Fn {
        (item?: any | null, a?: any | null, b?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface SListMap4Fn {
        (item?: any | null, a?: any | null, b?: any | null, c?: any | null, d?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface SinkNotify {
        (im: Image, rect: Rect, a?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface StartFn {
        (out: Image, a?: any | null, b?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface StopFn {
        (seq?: any | null, a?: any | null, b?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface ThreadpoolAllocateFn {
        (state: ThreadState, a: any | null, stop: boolean): number;
    }
    /**
     * @gir-type Callback
     */
    interface ThreadpoolProgressFn {
        (a?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface ThreadpoolWorkFn {
        (state: ThreadState, a?: any | null): number;
    }
    /**
     * @gir-type Callback
     */
    interface TypeMap2Fn {
        (type: GObject.GType, a?: any | null, b?: any | null): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface TypeMapFn {
        (type: GObject.GType, a?: any | null): any | null;
    }
    /**
     * @gir-type Flags
     */
    export namespace ArgumentFlags {
        export const $gtype: GObject.GType<ArgumentFlags>;
    }

    /**
     * Flags we associate with each object argument.
     *
     * Have separate input & output flags. Both set is an error; neither set is OK.
     *
     * Input gobjects are automatically reffed, output gobjects automatically ref
     * us. We also automatically watch for "destroy" and unlink.
     *
     * {@link Vips.ArgumentFlags.SET_ALWAYS} is handy for arguments which are set
     * from C. For example, {@link Image.width} is a property that gives
     * access to the Xsize member of struct _VipsImage. We default its
     * 'assigned' to `TRUE` since the field is always set directly by C.
     *
     * {@link Vips.ArgumentFlags.DEPRECATED} arguments are not shown in help text,
     * are not looked for if required, are not checked for "have-been-set". You can
     * deprecate a required argument, but you must obviously add a new required
     * argument if you do.
     *
     * Input args with {@link Vips.ArgumentFlags.MODIFY} will be modified by the
     * operation. This is used for things like the in-place drawing operations.
     *
     * {@link Vips.ArgumentFlags.NON_HASHABLE} stops the argument being used in
     * hash and equality tests. It's useful for arguments like `revalidate` which
     * control the behaviour of the operator cache.
     * @gir-type Flags
     */
    enum ArgumentFlags {
        /**
         * no flags
         */
        NONE,
        /**
         * must be set in the constructor
         */
        REQUIRED,
        /**
         * can only be set in the constructor
         */
        CONSTRUCT,
        /**
         * can only be set once
         */
        SET_ONCE,
        /**
         * don't do use-before-set checks
         */
        SET_ALWAYS,
        /**
         * is an input argument (one we depend on)
         */
        INPUT,
        /**
         * is an output argument (depends on us)
         */
        OUTPUT,
        /**
         * just there for back-compat, hide
         */
        DEPRECATED,
        /**
         * the input argument will be modified
         */
        MODIFY,
        /**
         * the argument is non-hashable
         */
        NON_HASHABLE,
    }

    /**
     * @gir-type Flags
     */
    export namespace ForeignCoding {
        export const $gtype: GObject.GType<ForeignCoding>;
    }

    /**
     * The set of coding types supported by a saver.
     *
     * ::: seealso
     *     {@link Coding}.
     * @gir-type Flags
     */
    enum ForeignCoding {
        /**
         * saver supports {@link Vips.Coding.NONE}
         */
        NONE,
        /**
         * saver supports {@link Vips.Coding.LABQ}
         */
        LABQ,
        /**
         * saver supports {@link Vips.Coding.RAD}
         */
        RAD,
        /**
         * saver supports all coding types
         */
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace ForeignFlags {
        export const $gtype: GObject.GType<ForeignFlags>;
    }

    /**
     * Some hints about the image loader.
     *
     * {@link Vips.ForeignFlags.PARTIAL} means that the image can be read directly
     * from the file without needing to be unpacked to a temporary image first.
     *
     * {@link Vips.ForeignFlags.SEQUENTIAL} means that the loader supports lazy
     * reading, but only top-to-bottom (sequential) access. Formats like PNG can
     * read sets of scanlines, for example, but only in order.
     *
     * If neither PARTIAL or SEQUENTIAL is set, the loader only supports whole
     * image read. Setting both PARTIAL and SEQUENTIAL is an error.
     *
     * {@link Vips.ForeignFlags.BIGENDIAN} means that image pixels are
     * most-significant byte first. Depending on the native byte order of the
     * host machine, you may need to swap bytes. See {@link Image.copy}.
     * @gir-type Flags
     */
    enum ForeignFlags {
        /**
         * no flags set
         */
        NONE,
        /**
         * the image may be read lazilly
         */
        PARTIAL,
        /**
         * image pixels are most-significant byte first
         */
        BIGENDIAN,
        /**
         * top-to-bottom lazy reading
         */
        SEQUENTIAL,
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace ForeignKeep {
        export const $gtype: GObject.GType<ForeignKeep>;
    }

    /**
     * Which metadata to retain.
     * @gir-type Flags
     */
    enum ForeignKeep {
        /**
         * don't attach metadata
         */
        NONE,
        /**
         * keep Exif metadata
         */
        EXIF,
        /**
         * keep XMP metadata
         */
        XMP,
        /**
         * keep IPTC metadata
         */
        IPTC,
        /**
         * keep ICC metadata
         */
        ICC,
        /**
         * keep other metadata (e.g. PNG comments)
         */
        OTHER,
        /**
         * keep the gainmap metadata
         */
        GAINMAP,
        /**
         * keep all metadata
         */
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace ForeignPngFilter {
        export const $gtype: GObject.GType<ForeignPngFilter>;
    }

    /**
     * http://www.w3.org/TR/PNG-Filters.html
     * The values mirror those of png.h in libpng.
     * @gir-type Flags
     */
    enum ForeignPngFilter {
        /**
         * no filtering
         */
        NONE,
        /**
         * difference to the left
         */
        SUB,
        /**
         * difference up
         */
        UP,
        /**
         * average of left and up
         */
        AVG,
        /**
         * pick best neighbor predictor automatically
         */
        PAETH,
        /**
         * adaptive
         */
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace ForeignSaveable {
        export const $gtype: GObject.GType<ForeignSaveable>;
    }

    /**
     * The set of image types supported by a saver.
     *
     * ::: seealso
     *     {@link ForeignSave}.
     * @gir-type Flags
     */
    enum ForeignSaveable {
        /**
         * saver supports everything (eg. TIFF)
         */
        ANY,
        /**
         * 1 band
         */
        MONO,
        /**
         * 3 bands
         */
        RGB,
        /**
         * 4 bands
         */
        CMYK,
        /**
         * an extra band
         */
        ALPHA,
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace OperationFlags {
        export const $gtype: GObject.GType<OperationFlags>;
    }

    /**
     * Flags we associate with an operation.
     *
     * {@link Vips.OperationFlags.SEQUENTIAL} means that the operation works like
     * {@link Image.conv}: it can process images top-to-bottom with only small
     * non-local references.
     *
     * Every scan-line must be requested, you are not allowed to skip
     * ahead, but as a special case, the very first request can be for a region
     * not at the top of the image. In this case, the first part of the image will
     * be read and discarded
     *
     * Every scan-line must be requested, you are not allowed to skip
     * ahead, but as a special case, the very first request can be for a region
     * not at the top of the image. In this case, the first part of the image will
     * be read and discarded
     *
     * {@link Vips.OperationFlags.NOCACHE} means that the operation must not be
     * cached by vips.
     *
     * {@link Vips.OperationFlags.DEPRECATED} means this is an old operation kept
     * in vips for compatibility only and should be hidden from users.
     *
     * {@link Vips.OperationFlags.UNTRUSTED} means the operation depends on
     * external libraries which have not been hardened against attack. It should
     * probably not be used on untrusted input. Use {@link block_untrusted_set}
     * to block all untrusted operations.
     *
     * {@link Vips.OperationFlags.BLOCKED} means the operation is prevented from
     * executing. Use {@link Operation.block_set} to enable and disable groups of
     * operations.
     *
     * {@link Vips.OperationFlags.REVALIDATE} force the operation to run, updating
     * the cache with the new value. This is used by eg. VipsForeignLoad to
     * implement the "revalidate" argument.
     * @gir-type Flags
     */
    enum OperationFlags {
        /**
         * no flags
         */
        NONE,
        /**
         * can work sequentially with a small buffer
         */
        SEQUENTIAL,
        /**
         * deprecated, use {@link Vips.OperationFlags.SEQUENTIAL} instead
         */
        SEQUENTIAL_UNBUFFERED,
        /**
         * must not be cached
         */
        NOCACHE,
        /**
         * a compatibility thing
         */
        DEPRECATED,
        /**
         * not hardened for untrusted input
         */
        UNTRUSTED,
        /**
         * prevent this operation from running
         */
        BLOCKED,
        /**
         * force the operation to run
         */
        REVALIDATE,
    }

    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            descriptor: number;
            filename: string;
        }
    }

    /**
     * An abstract base class representing a source or sink of bytes.
     *
     * It can be connected to a network socket, for example, or perhaps
     * a Node.js stream, or to an area of memory. This allows it to support
     * operations like JPEG loading, see for example {@link Image.jpegload_source}.
     *
     * Subclass to add other input sources. Use {@link SourceCustom} and
     * {@link TargetCustom} to make a source or target with action signals.
     * These classes provide action signals such as:
     *
     * - `Vips.SourceCustom::read` for reading data from a custom source.
     * - `Vips.SourceCustom::seek` for seeking within a data stream.
     * - `Vips.TargetCustom::write` for writing data to a custom target.
     * @gir-type Class
     */
    abstract class Connection extends Object {
        static $gtype: GObject.GType<Connection>;

        // Properties

        get descriptor(): number;
        set descriptor(val: number);
        get filename(): string;
        set filename(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Connection.SignalSignatures;

        // Fields

        parent_object: Object;

        // Constructors

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Connection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns a string describing this connection which could be displayed to a user.
         */
        nick(): string;
    }

    namespace Foreign {
        // Signal signatures
        interface SignalSignatures extends Operation.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Operation.ConstructorProps {}
    }

    /**
     * An abstract base class to load and save images in a variety of formats.
     *
     * ## Load and save
     *
     * You can load and save from and to files, memory areas, and the libvips IO
     * abstractions, {@link Source} and {@link Target}.
     *
     * Use {@link Foreign.find_load} {@link Foreign.find_load_buffer} and
     * {@link Foreign.find_load_source} to find a loader for an object. Use
     * {@link Foreign.find_save}, {@link Foreign.find_save_buffer} and
     * {@link Foreign.find_save_target} to find a saver for a format. You can then
     * run these operations using {@link call} and friends to perform the load or
     * save.
     *
     * {@link Image.write_to_file} and {@link Image.new_from_file} and friends use
     * these functions to automate file load and save.
     *
     * You can also invoke the operations directly, for example:
     *
     * ```c
     * vips_tiffsave(my_image, "frank.anything",
     *     "compression", VIPS_FOREIGN_TIFF_COMPRESSION_JPEG,
     *     NULL);
     * ```
     *
     * ## Image metadata
     *
     * All loaders attach all image metadata as libvips properties on load.
     *
     * You can change metadata with {@link Image.set_int} and friends.
     *
     * During save, you can use `keep` to specify which metadata to retain,
     * defaults to all, see {@link ForeignKeep}. Setting `profile` will
     * automatically keep the ICC profile.
     *
     * ## Many page images
     *
     * By default, libvips will only load the first page of many page or animated
     * images. Use `page` and `n` to set the start page and the number of pages to
     * load. Set `n` to -1 to load all pages.
     *
     * Many page images are loaded as a tall, thin strip of pages.
     *
     * Use {@link Image.get_page_height} and {@link Image.get_n_pages} to find
     * the page height and number of pages of a loaded image.
     *
     * Use `page_height` to set the page height for image save.
     *
     * ## Alpha save
     *
     * Not all image formats support alpha. If you try to save an image with an
     * alpha channel to a format that does not support it, the alpha will be
     * automatically flattened out. Use `background` (default 0) to set the colour
     * that alpha should be flattened against.
     *
     * ## Adding new formats
     *
     * To add support for a new file format to vips, simply define a new subclass
     * of {@link ForeignLoad} or {@link ForeignSave}.
     *
     * If you define a new operation which is a subclass of {@link Foreign},
     * support for it automatically appears in all libvips user-interfaces. It
     * will also be transparently supported by {@link Image.new_from_file} and
     * friends.
     * @gir-type Class
     */
    abstract class Foreign extends Operation {
        static $gtype: GObject.GType<Foreign>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Foreign.SignalSignatures;

        // Fields

        parent_object: Operation;

        // Constructors

        constructor(properties?: Partial<Foreign.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Foreign.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Foreign.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Foreign.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Foreign.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Foreign.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Foreign.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Searches for an operation you could use to load `filename`. Any trailing
         * options on `filename` are stripped and ignored.
         *
         * ::: seealso
         *     {@link Foreign.find_load_buffer}, {@link Image.new_from_file}.
         * @param filename file to find a loader for
         */
        static find_load(filename: string): string;
        /**
         * Searches for an operation you could use to load a memory buffer. To see the
         * range of buffer loaders supported by your vips, try something like:
         *
         * 	vips -l | grep load_buffer
         *
         * ::: seealso
         *     {@link Image.new_from_buffer}.
         * @param data start of memory buffer
         */
        static find_load_buffer(data: Uint8Array | string): string;
        /**
         * Searches for an operation you could use to load a source. To see the
         * range of source loaders supported by your vips, try something like:
         *
         * 	vips -l | grep load_source
         *
         * ::: seealso
         *     {@link Image.new_from_source}.
         * @param source source to load from
         */
        static find_load_source(source: Source): string;
        /**
         * Searches for an operation you could use to write to `filename`.
         * Any trailing options on `filename` are stripped and ignored.
         *
         * ::: seealso
         *     {@link Foreign.find_save_buffer}, {@link Image.write_to_file}.
         * @param filename name to find a saver for
         */
        static find_save(filename: string): string | null;
        /**
         * Searches for an operation you could use to write to a buffer in `suffix`
         * format.
         *
         * ::: seealso
         *     {@link Image.write_to_buffer}.
         * @param suffix name to find a saver for
         */
        static find_save_buffer(suffix: string): string | null;
        /**
         * Searches for an operation you could use to write to a target in `suffix`
         * format.
         *
         * ::: seealso
         *     {@link Image.write_to_buffer}.
         * @param suffix format to find a saver for
         */
        static find_save_target(suffix: string): string | null;
        /**
         * Get a `NULL`-terminated array listing all the supported suffixes.
         *
         * This is not the same as all the supported file types, since libvips
         * detects image format for load by testing the first few bytes.
         *
         * Use {@link Foreign.find_load} to detect type for a specific file.
         *
         * Free the return result with {@link GLib.strfreev}.
         */
        static get_suffixes(): string[];
        /**
         * Return `TRUE` if `filename` can be loaded by `loader`. `loader` is something
         * like "tiffload" or "VipsForeignLoadTiff".
         * @param loader name of loader to use for test
         * @param filename file to test
         */
        static is_a(loader: string, filename: string): boolean;
        /**
         * Return `TRUE` if `data` can be loaded by `loader`. `loader` is something
         * like "tiffload_buffer" or "VipsForeignLoadTiffBuffer".
         * @param loader name of loader to use for test
         * @param data pointer to the buffer to test
         */
        static is_a_buffer(loader: string, data: Uint8Array | string): boolean;
        /**
         * Return `TRUE` if `source` can be loaded by `loader`. `loader` is something
         * like "tiffload_source" or "VipsForeignLoadTiffSource".
         * @param loader name of loader to use for test
         * @param source source to test
         */
        static is_a_source(loader: string, source: Source): boolean;
        /**
         * Apply a function to every {@link Foreign} that VIPS knows about. Foreigns
         * are presented to the function in priority order.
         *
         * Like all VIPS map functions, if `fn` returns `NULL`, iteration continues. If
         * it returns non-`NULL`, iteration terminates and that value is returned. The
         * map function returns `NULL` if all calls return `NULL`.
         *
         * ::: seealso
         *     {@link slist_map2}.
         * @param base base class to search below (eg. "VipsForeignLoad")
         * @param fn function to apply to each {@link Foreign}
         * @param a user data
         * @param b user data
         */
        static map(base: string, fn: SListMap2Fn, a?: any | null, b?: any | null): any | null;
    }

    namespace ForeignLoad {
        // Signal signatures
        interface SignalSignatures extends Foreign.SignalSignatures {
            'notify::access': (pspec: GObject.ParamSpec) => void;
            'notify::disc': (pspec: GObject.ParamSpec) => void;
            'notify::fail': (pspec: GObject.ParamSpec) => void;
            'notify::fail-on': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::memory': (pspec: GObject.ParamSpec) => void;
            'notify::out': (pspec: GObject.ParamSpec) => void;
            'notify::revalidate': (pspec: GObject.ParamSpec) => void;
            'notify::sequential': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Foreign.ConstructorProps {
            access: Access;
            disc: boolean;
            fail: boolean;
            fail_on: FailOn;
            failOn: FailOn;
            flags: ForeignFlags;
            memory: boolean;
            out: Image;
            revalidate: boolean;
            sequential: boolean;
        }
    }

    /**
     * An abstract base class to load images in a variety of formats.
     *
     * ## Writing a new loader
     *
     * Add a new loader to libvips by subclassing {@link ForeignLoad}. Subclasses
     * need to implement at least {@link ForeignLoad.header}.
     *
     * {@link ForeignLoad.header} must set at least the header fields of `out`.
     * {@link ForeignLoad.load}, if defined, must load the pixels to `real`.
     *
     * The suffix list is used to select a format to save a file in, and to pick a
     * loader if you don't define {@link Foreign.is_a}.
     *
     * You should also define {@link Object.nickname} and
     * {@link Object.description} in {@link Object}.
     *
     * As a complete example, here's code for a PNG loader, minus the actual
     * calls to libpng.
     *
     * ```c
     * typedef struct _VipsForeignLoadPng {
     *     VipsForeignLoad parent_object;
     *
     *     char *filename;
     * } VipsForeignLoadPng;
     *
     * typedef VipsForeignLoadClass VipsForeignLoadPngClass;
     *
     * G_DEFINE_TYPE(VipsForeignLoadPng, vips_foreign_load_png,
     *     VIPS_TYPE_FOREIGN_LOAD);
     *
     * static VipsForeignFlags
     * vips_foreign_load_png_get_flags_filename(const char *filename)
     * {
     *     VipsForeignFlags flags;
     *
     *     flags = 0;
     *     if (vips__png_isinterlaced(filename))
     *          flags = VIPS_FOREIGN_PARTIAL;
     *     else
     *          flags = VIPS_FOREIGN_SEQUENTIAL;
     *
     *     return flags;
     * }
     *
     * static VipsForeignFlags
     * vips_foreign_load_png_get_flags(VipsForeignLoad *load)
     * {
     *   VipsForeignLoadPng *png = (VipsForeignLoadPng *) load;
     *
     *   return vips_foreign_load_png_get_flags_filename(png->filename);
     * }
     *
     * static int
     * vips_foreign_load_png_header(VipsForeignLoad *load)
     * {
     *     VipsForeignLoadPng *png = (VipsForeignLoadPng *) load;
     *
     *     if (vips__png_header(png->filename, load->out))
     *         return -1;
     *
     *     return 0;
     * }
     *
     * static int
     * vips_foreign_load_png_load(VipsForeignLoad *load)
     * {
     *     VipsForeignLoadPng *png = (VipsForeignLoadPng *) load;
     *
     *     if (vips__png_read(png->filename, load->real))
     *         return -1;
     *
     *     return 0;
     * }
     *
     * static void
     * vips_foreign_load_png_class_init(VipsForeignLoadPngClass *class)
     * {
     *     GObjectClass *gobject_class = G_OBJECT_CLASS(class);
     *     VipsObjectClass *object_class = (VipsObjectClass *) class;
     *     VipsForeignClass *foreign_class = (VipsForeignClass *) class;
     *     VipsForeignLoadClass *load_class = (VipsForeignLoadClass *) class;
     *
     *     gobject_class->set_property = vips_object_set_property;
     *     gobject_class->get_property = vips_object_get_property;
     *
     *     object_class->nickname = "pngload";
     *     object_class->description = _("load png from file");
     *
     *     foreign_class->suffs = vips__png_suffs;
     *
     *     load_class->is_a = vips__png_ispng;
     *     load_class->get_flags_filename =
     *         vips_foreign_load_png_get_flags_filename;
     *     load_class->get_flags = vips_foreign_load_png_get_flags;
     *     load_class->header = vips_foreign_load_png_header;
     *     load_class->load = vips_foreign_load_png_load;
     *
     *     VIPS_ARG_STRING(class, "filename", 1,
     *         _("Filename"),
     *         _("Filename to load from"),
     *         VIPS_ARGUMENT_REQUIRED_INPUT,
     *         G_STRUCT_OFFSET(VipsForeignLoadPng, filename),
     *         NULL);
     * }
     *
     * static void
     * vips_foreign_load_png_init(VipsForeignLoadPng *png)
     * {
     * }
     * ```
     * @gir-type Class
     */
    abstract class ForeignLoad extends Foreign {
        static $gtype: GObject.GType<ForeignLoad>;

        // Properties

        get access(): Access;
        set access(val: Access);
        get disc(): boolean;
        set disc(val: boolean);
        get fail(): boolean;
        set fail(val: boolean);
        get fail_on(): FailOn;
        set fail_on(val: FailOn);
        get failOn(): FailOn;
        set failOn(val: FailOn);
        get flags(): ForeignFlags;
        set flags(val: ForeignFlags);
        get memory(): boolean;
        set memory(val: boolean);
        get out(): Image;
        set out(val: Image);
        get revalidate(): boolean;
        set revalidate(val: boolean);
        get sequential(): boolean;
        set sequential(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ForeignLoad.SignalSignatures;

        // Fields

        parent_object: Foreign;
        real: Image;
        nocache: boolean;
        error: boolean;

        // Constructors

        constructor(properties?: Partial<ForeignLoad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ForeignLoad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForeignLoad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ForeignLoad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForeignLoad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ForeignLoad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ForeignLoad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_flags(): ForeignFlags;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Vips.Operation.vfunc_get_flags
        vfunc_get_flags(...args: never[]): any;
        /**
         * @virtual
         */
        vfunc_header(): number;
        /**
         * @virtual
         */
        vfunc_load(): number;
    }

    namespace ForeignSave {
        // Signal signatures
        interface SignalSignatures extends Foreign.SignalSignatures {
            'notify::background': (pspec: GObject.ParamSpec) => void;
            'notify::in': (pspec: GObject.ParamSpec) => void;
            'notify::keep': (pspec: GObject.ParamSpec) => void;
            'notify::page-height': (pspec: GObject.ParamSpec) => void;
            'notify::profile': (pspec: GObject.ParamSpec) => void;
            'notify::strip': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Foreign.ConstructorProps {
            background: ArrayDouble;
            in: Image;
            keep: ForeignKeep;
            page_height: number;
            pageHeight: number;
            profile: string;
            strip: boolean;
        }
    }

    /**
     * An abstract base class to save images in a variety of formats.
     *
     * ## Writing a new saver
     *
     * Call your saver in the class' {@link Object.build} method after chaining up.
     * The prepared image should be ready for you to save in `ready`.
     *
     * As a complete example, here's the code for the CSV saver, minus the calls
     * to the actual save routines.
     *
     * ```c
     * typedef struct _VipsForeignSaveCsv {
     *     VipsForeignSave parent_object;
     *
     *     char *filename;
     *     const char *separator;
     * } VipsForeignSaveCsv;
     *
     * typedef VipsForeignSaveClass VipsForeignSaveCsvClass;
     *
     * G_DEFINE_TYPE(VipsForeignSaveCsv, vips_foreign_save_csv,
     *   VIPS_TYPE_FOREIGN_SAVE);
     *
     * static int
     * vips_foreign_save_csv_build(VipsObject *object)
     * {
     *     VipsForeignSave *save = (VipsForeignSave *) object;
     *     VipsForeignSaveCsv *csv = (VipsForeignSaveCsv *) object;
     *
     *     if (VIPS_OBJECT_CLASS(vips_foreign_save_csv_parent_class)
     *             ->build(object))
     *         return -1;
     *
     *     if (vips__csv_write(save->ready, csv->filename, csv->separator))
     *   	  return -1;
     *
     *     return 0;
     * }
     *
     * static void
     * vips_foreign_save_csv_class_init(VipsForeignSaveCsvClass *class)
     * {
     *     GObjectClass *gobject_class = G_OBJECT_CLASS(class);
     *     VipsObjectClass *object_class = (VipsObjectClass *) class;
     *     VipsForeignClass *foreign_class = (VipsForeignClass *) class;
     *     VipsForeignSaveClass *save_class = (VipsForeignSaveClass *) class;
     *
     *     gobject_class->set_property = vips_object_set_property;
     *     gobject_class->get_property = vips_object_get_property;
     *
     *     object_class->nickname = "csvsave";
     *     object_class->description = _("save image to csv file");
     *     object_class->build = vips_foreign_save_csv_build;
     *
     *     foreign_class->suffs = vips__foreign_csv_suffs;
     *
     *     save_class->saveable = VIPS_FOREIGN_SAVEABLE_MONO;
     *     // no need to define ->format_table, we don't want the input
     *     // cast for us
     *
     *     VIPS_ARG_STRING(class, "filename", 1,
     *         _("Filename"),
     *         _("Filename to save to"),
     *         VIPS_ARGUMENT_REQUIRED_INPUT,
     *         G_STRUCT_OFFSET(VipsForeignSaveCsv, filename),
     *         NULL);
     *
     *     VIPS_ARG_STRING(class, "separator", 13,
     *         _("Separator"),
     *         _("Separator characters"),
     *         VIPS_ARGUMENT_OPTIONAL_INPUT,
     *         G_STRUCT_OFFSET(VipsForeignSaveCsv, separator),
     *         "\t");
     * }
     *
     * static void
     * vips_foreign_save_csv_init(VipsForeignSaveCsv *csv)
     * {
     *     csv->separator = g_strdup("\t");
     * }
     * ```
     * @gir-type Class
     */
    abstract class ForeignSave extends Foreign {
        static $gtype: GObject.GType<ForeignSave>;

        // Properties

        get background(): ArrayDouble;
        set background(val: ArrayDouble);
        get in(): Image;
        set in(val: Image);
        get keep(): ForeignKeep;
        set keep(val: ForeignKeep);
        get page_height(): number;
        set page_height(val: number);
        get pageHeight(): number;
        set pageHeight(val: number);
        get profile(): string;
        set profile(val: string);
        get strip(): boolean;
        set strip(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ForeignSave.SignalSignatures;

        // Fields

        parent_object: Foreign;
        ready: Image;

        // Constructors

        constructor(properties?: Partial<ForeignSave.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ForeignSave.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForeignSave.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ForeignSave.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ForeignSave.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ForeignSave.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ForeignSave.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GInputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {
            'notify::input': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.Seekable.ConstructorProps {
            input: Source;
        }
    }

    /**
     * @gir-type Class
     */
    class GInputStream extends Gio.InputStream implements Gio.Seekable {
        static $gtype: GObject.GType<GInputStream>;

        // Properties

        /**
         * @construct-only
         */
        get input(): Source;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GInputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_source(source: Source): GInputStream;

        // Signals

        /** @signal */
        connect<K extends keyof GInputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GInputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GInputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GInputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GInputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GInputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @returns `true` if `seekable` can be seeked. `false` otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @returns `true` if the stream can be truncated, `false` otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @virtual
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @virtual
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @virtual
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Image {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * This signal is emitted once per work unit (typically a 128 x
             * 128 area of pixels) during image computation.
             *
             * You can use this signal to update user-interfaces with progress
             * feedback. Beware of updating too frequently: you will usually
             * need some throttling mechanism.
             *
             * Use {@link Image.set_progress} to turn on progress reporting for an
             * image.
             * @signal
             * @run-last
             */
            eval: (arg0: Progress) => void;
            /**
             * This signal is emitted when an image or one of it's
             * upstream data sources has been destructively modified. See
             * {@link Image.invalidate_all}.
             * @signal
             * @action
             * @run-last
             */
            invalidate: () => void;
            /**
             * This signal is emitted when an image has been asked to
             * minimise memory usage. All non-essential caches are dropped.
             * See {@link Image.minimise_all}.
             * @signal
             * @action
             * @run-last
             */
            minimise: () => void;
            /**
             * This signal is emitted once at the end of the computation
             * of `image`. It's a good place to shut down evaluation feedback.
             *
             * Use {@link Image.set_progress} to turn on progress reporting for an
             * image.
             * @signal
             * @run-last
             */
            posteval: (arg0: Progress) => void;
            /**
             * This signal is emitted once before computation of `image`
             * starts. It's a good place to set up evaluation feedback.
             *
             * Use {@link Image.set_progress} to turn on progress reporting for an
             * image.
             * @signal
             * @run-last
             */
            preeval: (arg0: Progress) => void;
            /**
             * This signal is emitted just after an image has been
             * written to. It is
             * used by vips to implement things like write to foreign file
             * formats.
             * @signal
             * @action
             * @run-last
             */
            written: (arg0: number) => void;
            'notify::bands': (pspec: GObject.ParamSpec) => void;
            'notify::coding': (pspec: GObject.ParamSpec) => void;
            'notify::demand': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::foreign-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::format': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::interpretation': (pspec: GObject.ParamSpec) => void;
            'notify::kill': (pspec: GObject.ParamSpec) => void;
            'notify::mode': (pspec: GObject.ParamSpec) => void;
            'notify::sizeof-header': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::xoffset': (pspec: GObject.ParamSpec) => void;
            'notify::xres': (pspec: GObject.ParamSpec) => void;
            'notify::yoffset': (pspec: GObject.ParamSpec) => void;
            'notify::yres': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            bands: number;
            coding: Coding;
            demand: DemandStyle;
            filename: string;
            foreign_buffer: any;
            foreignBuffer: any;
            format: BandFormat;
            height: number;
            interpretation: Interpretation;
            kill: boolean;
            mode: string;
            sizeof_header: number;
            sizeofHeader: number;
            width: number;
            xoffset: number;
            xres: number;
            yoffset: number;
            yres: number;
        }
    }

    /**
     * The {@link Image} class and associated types and macros.
     *
     * Images can be created from formatted files on disc, from C-style arrays on
     * disc, from formatted areas of memory, or from C-style arrays in memory. See
     * {@link Image.new_from_file} and friends.
     * Creating an image is fast. libvips reads just enough of
     * the image to be able to get the various properties, such as width in
     * pixels. It delays reading any pixels until they are really needed.
     *
     * Once you have an image, you can get properties from it in the usual way.
     * You can use projection functions, like {@link Image.get_width} or
     * {@link GObject.Object.get}, to get {@link GObject.Object} properties.
     *
     * `.v` images are three-dimensional arrays, the dimensions being width,
     * height and bands. Each dimension can be up to 2 ** 31 pixels (or band
     * elements). An image has a format, meaning the machine number type used
     * to represent each value. libvips supports 10 formats, from 8-bit unsigned
     * integer up to 128-bit double complex, see {@link Image.get_format}.
     *
     * In libvips, images are uninterpreted arrays, meaning that from the point
     * of view of most operations, they are just large collections of numbers.
     * There's no difference between an RGBA (RGB with alpha) image and a CMYK
     * image, for example, they are both just four-band images. It's up to the
     * user of the library to pass the right sort of image to each operation.
     *
     * To take an example, libvips has {@link Image.Lab2XYZ}, an operation to
     * transform an image from CIE LAB colour space to CIE XYZ space. It assumes
     * the first three bands represent pixels in LAB colour space and returns an
     * image where the first three bands are transformed to XYZ and any
     * remaining bands are just copied. Pass it an RGB image by mistake and
     * you'll just get nonsense.
     *
     * libvips has a feature to help (a little) with this: it sets a
     * {@link Interpretation} hint for each image (see
     * {@link Image.get_interpretation}); a hint which says how pixels should
     * be interpreted. For example, {@link Image.Lab2XYZ} will set the
     * interpretation of the output image to {@link Vips.Interpretation.XYZ}.
     * A few utility operations will also use interpretation as a guide. For
     * example, you can give {@link Image.colourspace} an input image and a
     * desired colourspace and it will use the input's interpretation hint to
     * apply the best sequence of colourspace transforms to get to the desired
     * space.
     *
     * Use things like {@link Image.invert} to manipulate your images. When you
     * are done, you can write images to disc files (with
     * {@link Image.write_to_file}), to formatted memory buffers (with
     * {@link Image.write_to_buffer}) and to C-style memory arrays (with
     * {@link Image.write_to_memory}).
     *
     * You can also write images to other images. Create, for example, a temporary
     * disc image with {@link Image.new_temp_file}, then write your image to that
     * with {@link Image.write}. You can create several other types of image and
     * write to them, see {@link Image.new_memory}, for example.
     *
     * See {@link Operation} for an introduction to running operations on images,
     * see [Image headers](libvips-header.html) for getting and setting image
     * metadata. See {@link Object} for a discussion of the lower levels.
     * @gir-type Class
     */
    class Image extends Object {
        static $gtype: GObject.GType<Image>;

        // Properties

        get bands(): number;
        set bands(val: number);
        get coding(): Coding;
        set coding(val: Coding);
        get demand(): DemandStyle;
        set demand(val: DemandStyle);
        get filename(): string;
        set filename(val: string);
        get foreign_buffer(): any;
        set foreign_buffer(val: any);
        get foreignBuffer(): any;
        set foreignBuffer(val: any);
        get format(): BandFormat;
        set format(val: BandFormat);
        get height(): number;
        set height(val: number);
        get interpretation(): Interpretation;
        set interpretation(val: Interpretation);
        get kill(): boolean;
        set kill(val: boolean);
        get mode(): string;
        set mode(val: string);
        get sizeof_header(): number;
        set sizeof_header(val: number);
        get sizeofHeader(): number;
        set sizeofHeader(val: number);
        get width(): number;
        set width(val: number);
        get xoffset(): number;
        set xoffset(val: number);
        get xres(): number;
        set xres(val: number);
        get yoffset(): number;
        set yoffset(val: number);
        get yres(): number;
        set yres(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static memory(): Image;

        static ['new'](): Image;

        static new_from_file_RW(filename: string): Image;

        static new_from_file_raw(filename: string, xsize: number, ysize: number, bands: number, offset: number): Image;

        static new_from_image(image: Image, c: number[]): Image;

        static new_from_image1(image: Image, c: number): Image;

        static new_from_memory(
            data: Uint8Array | string,
            width: number,
            height: number,
            bands: number,
            format: BandFormat,
        ): Image;

        static new_from_memory_copy(
            data: Uint8Array | string,
            width: number,
            height: number,
            bands: number,
            format: BandFormat,
        ): Image;

        static new_matrix(width: number, height: number): Image;

        static new_matrix_from_array(width: number, height: number, array: number[]): Image;

        static new_temp_file(format: string): Image;

        // Signals

        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param format the format
         */
        static get_format_max(format: BandFormat): number;
        /**
         * Add an image to a pipeline. `image` depends on all of the images in `in`,
         * `image` prefers to supply pixels according to `hint`.
         *
         * Operations can set demand hints, that is, hints to the VIPS IO system about
         * the type of region geometry they work best with. For example,
         * operations which transform coordinates will usually work best with
         * {@link Vips.DemandStyle.SMALLTILE}, operations which work on local windows of
         * pixels will like {@link Vips.DemandStyle.FATSTRIP}.
         *
         * Header fields in `image` are set from the fields in `in`, with lower-numbered
         * images in `in` taking priority.
         * For example, if `in`[0] and `in`[1] both have an item
         * called "icc-profile", it's the profile attached to `in`[0] that will end up
         * on `image`.
         * Image history is completely copied from all `in`. `image` will have the history
         * of all the input images.
         * The array of input images can be empty, meaning `image` is at the start of a
         * pipeline.
         *
         * VIPS uses the list of input images to build the tree of operations it needs
         * for the cache invalidation system.
         *
         * ::: seealso
         *     {@link Image.pipelinev}, {@link Image.generate}.
         * @param hint demand hint for `image`
         * @param _in `NULL`-terminated array of input images
         */
        static pipeline_array(hint: DemandStyle, _in: Image[]): [number, Image];

        // Virtual methods

        /**
         * @param progress
         * @param data
         * @virtual
         */
        vfunc_eval(progress: Progress, data?: any | null): void;
        /**
         * @param data
         * @virtual
         */
        vfunc_invalidate(data?: any | null): void;
        /**
         * @param data
         * @virtual
         */
        vfunc_minimise(data?: any | null): void;
        /**
         * @param progress
         * @param data
         * @virtual
         */
        vfunc_posteval(progress: Progress, data?: any | null): void;
        /**
         * @param progress
         * @param data
         * @virtual
         */
        vfunc_preeval(progress: Progress, data?: any | null): void;
        /**
         * @param result
         * @param data
         * @virtual
         */
        vfunc_written(result: number, data?: any | null): void;

        // Methods

        /**
         * Remove the orientation tag on `image`. Also remove any exif orientation tags.
         * You must {@link Image.copy} the image before calling this function since it
         * modifies metadata.
         */
        autorot_remove_angle(): void;
        /**
         * Test if `image` is in a colourspace that {@link Image.colourspace} can process.
         * @returns `TRUE` if `image` is in a supported colourspace.
         */
        colourspace_issupported(): boolean;
        /**
         * This function allocates memory, renders `image` into it, builds a new
         * image around the memory area, and returns that.
         *
         * If the image is already a simple area of memory, it just refs `image` and
         * returns it.
         *
         * Call this before using the draw operations to make sure you have a
         * memory image that can be modified.
         *
         * {@link Image.copy} adds a null "copy" node to a pipeline. Use that
         * instead if you want to change metadata and not pixels.
         *
         * This operation is thread-safe, unlike {@link Image.wio_input}.
         *
         * If you are sure that `image` is not shared with another thread (perhaps you
         * have made it yourself), use {@link Image.wio_input} instead.
         *
         * ::: seealso
         *     {@link Image.wio_input}.
         * @returns the new {@link Image}, or `NULL` on error.
         */
        copy_memory(): Image;
        /**
         * A convenience function to unpack to a format that we can compute with.
         * `out`.coding is always {@link Vips.Coding.NONE}.
         *
         * This unpacks LABQ to plain LAB. Use {@link Image.LabQ2LabS} for a bit
         * more speed if you need it.
         *
         * ::: seealso
         *     {@link Image.encode}, {@link Image.LabQ2Lab}, {@link Image.rad2float}.
         * @returns 0 on success, or -1 on error.
         */
        decode(): [number, Image];
        /**
         * We often need to know what an image will decode to without actually
         * decoding it, for example, in arg checking.
         *
         * ::: seealso
         *     {@link Image.decode}.
         */
        decode_predict(): [number, number, BandFormat];
        /**
         * A convenience function to pack to a coding. The inverse of
         * {@link Image.decode}.
         *
         * ::: seealso
         *     {@link Image.decode}.
         * @param coding coding to apply
         * @returns 0 on success, or -1 on error.
         */
        encode(coding: Coding | null): [number, Image];
        /**
         * @param processed
         */
        ['eval'](processed: number): void;
        /**
         * Loaders can call this on the image they are making if they see a read error
         * from the load library. It signals "invalidate" on the load operation and
         * will cause it to be dropped from cache.
         *
         * If we know a file will cause a read error, we don't want to cache the
         * failing operation, we want to make sure the image will really be opened
         * again if our caller tries again. For example, a broken file might be
         * replaced by a working one.
         */
        foreign_load_invalidate(): void;
        /**
         * Free the externally allocated buffer found in the input image. This function
         * is intended to be used with g_signal_connect.
         * @param buffer the original buffer that was stolen
         */
        free_buffer(buffer?: any | null): void;
        /**
         * Generates an image. The action depends on the image type.
         *
         * For images created with {@link Image.new}, {@link Image.generate} just
         * attaches the start/generate/stop callbacks and returns.
         *
         * For images created with {@link Image.new_memory}, memory is allocated for
         * the whole image and it is entirely generated using {@link sink_memory}.
         *
         * For images created with {@link Image.new_temp_file} and friends, memory for
         * a few scanlines is allocated and
         * {@link Image.sink_disc} used to generate the image in small chunks. As each
         * chunk is generated, it is written to disc.
         *
         * ::: seealso
         *     {@link sink_memory}, {@link Image.new}, {@link Region.prepare}.
         * @param start_fn start sequences with this function
         * @param generate_fn generate pixels with this function
         * @param stop_fn stop sequences with this function
         * @param a user data
         * @param b user data
         * @returns 0 on success, or -1 on error.
         */
        generate(start_fn: StartFn, generate_fn: GenerateFn, stop_fn: StopFn, a?: any | null, b?: any | null): number;
        /**
         * Fill `value_copy` with a copy of the header field. `value_copy` must be zeroed
         * but uninitialised.
         *
         * This will return -1 and add a message to the error buffer if the field
         * does not exist. Use {@link Image.get_typeof} to test for the
         * existence of a field first if you are not certain it will be there.
         *
         * For example, to read a double from an image (though of course you would use
         * {@link Image.get_double} in practice):
         *
         * ```c
         * GValue value = G_VALUE_INIT;
         * double d;
         *
         * if (vips_image_get(image, name, &value))
         *     return -1;
         *
         * if (G_VALUE_TYPE(&value) != G_TYPE_DOUBLE) {
         *     vips_error("mydomain",
         *         _("field \"%s\" is of type %s, not double"),
         *         name,
         *         g_type_name(G_VALUE_TYPE(&value)));
         *     g_value_unset(&value);
         *     return -1;
         * }
         *
         * d = g_value_get_double(&value);
         * g_value_unset(&value);
         * ```
         *
         * ::: seealso
         *     {@link Image.get_typeof}, {@link Image.get_double}.
         * @param name the name to fetch
         * @returns 0 on success, -1 otherwise.
         */
        get(name: string): [number, unknown];
        /**
         * Gets `data` from `image` under the name `name`. A convenience
         * function over {@link Image.get}. Use {@link Image.get_typeof} to
         * test for the existence of a piece of metadata.
         *
         * ::: seealso
         *     {@link Image.set_area}, {@link Image.get},
         *     {@link Image.get_typeof}.
         * @param name metadata name
         * @returns 0 on success, -1 otherwise.
         */
        get_area(name: string): [number, any];
        /**
         * Gets `out` from `im` under the name `name`.
         * The field must be of type `VIPS_TYPE_ARRAY_INT`.
         *
         * Do not free `out`. `out` is valid as long as `image` is valid.
         *
         * Use {@link Image.get_typeof} to test for the
         * existence of a piece of metadata.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.set_image}
         * @param name metadata name
         * @returns 0 on success, -1 otherwise.
         */
        get_array_double(name: string): [number, number[]];
        /**
         * Gets `out` from `im` under the name `name`.
         * The field must be of type `VIPS_TYPE_ARRAY_INT`.
         *
         * Do not free `out`. `out` is valid as long as `image` is valid.
         *
         * Use {@link Image.get_typeof} to test for the
         * existence of a piece of metadata.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.set_image}
         * @param name metadata name
         * @returns 0 on success, -1 otherwise.
         */
        get_array_int(name: string): [number, number[]];
        /**
         * Returns `name` from `image` in `out`.
         * This function will read any field, returning it as a printable string.
         * You need to free the string with {@link GLib.free} when you are done with it.
         *
         * This will base64-encode BLOBs, for example. Use {@link Buf.appendg} to
         * make a string that's for humans.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.get_typeof},
         *     {@link Buf.appendg}.
         * @param name field name
         * @returns 0 on success, -1 otherwise.
         */
        get_as_string(name: string): [number, string];
        /**
         * @returns the number of bands (channels) in the image.
         */
        get_bands(): number;
        /**
         * Gets `data` from `image` under the name `name`, optionally returns its
         * length in `length`. Use {@link Image.get_typeof} to test for the existence
         * of a piece of metadata.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.get_typeof},
         *     {@link Blob.get}.
         * @param name metadata name
         * @returns 0 on success, -1 otherwise.
         */
        get_blob(name: string): [number, Uint8Array];
        /**
         * @returns the {@link Coding} from the image header.
         */
        get_coding(): Coding;
        /**
         * Fetch and sanity-check {@link META_CONCURRENCY}. Default to 1 if not
         * present or crazy.
         * @param default_concurrency
         * @returns the suggested concurrency for this image
         */
        get_concurrency(default_concurrency: number): number;
        /**
         * Return a pointer to the image's pixel data, if possible. This can involve
         * allocating large amounts of memory and performing a long computation. Image
         * pixels are laid out in band-packed rows.
         *
         * Since this function modifies `image`, it is not threadsafe. Only call it on
         * images which you are sure have not been shared with another thread.
         *
         * ::: seealso
         *     {@link Image.wio_input}, {@link Image.copy_memory}.
         * @returns a pointer to pixel data, if possible.
         */
        get_data(): any | null;
        /**
         * Gets `out` from `im` under the name `name`.
         * The value will be transformed into a double, if possible.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.get_typeof}.
         * @param name field name
         * @returns 0 on success, -1 otherwise.
         */
        get_double(name: string): [number, number];
        /**
         * Get a `NULL`-terminated array listing all the metadata field names on `image`.
         * Free the return result with {@link GLib.strfreev}.
         *
         * This is handy for language bindings. From C, it's usually more convenient to
         * use {@link Image.map}.
         * @returns metadata fields in image, as a `NULL`-terminated   array.
         */
        get_fields(): string[];
        /**
         * @returns the name of the file the image was loaded from, or `NULL` if   there is no filename.
         */
        get_filename(): string;
        /**
         * @returns the format of each band element.
         */
        get_format(): BandFormat;
        /**
         * If the image has an attached `"gainmap"`, return that. If there's a
         * compressed `"gainmap-data"`, decompress, and return it.
         *
         * You need to free the result with {@link GObject.Object.unref} when
         * you're done with it.
         * @returns the gainmap image, if present, or NULL.
         */
        get_gainmap(): Image | null;
        /**
         * @returns the number of pixels down the image.
         */
        get_height(): number;
        /**
         * This function reads the image history as a C string. The string is owned
         * by VIPS and must not be freed.
         *
         * VIPS tracks the history of each image, that is, the sequence of operations
         * that generated that image. Applications built on VIPS need to call
         * {@link Image.history_printf} for each action they perform, setting the
         * command-line equivalent for the action.
         *
         * ::: seealso
         *     {@link Image.history_printf}.
         * @returns The history of `image` as a C string. Do not free!
         */
        get_history(): string;
        /**
         * Gets `out` from `im` under the name `name`.
         * The field must be of type `VIPS_TYPE_IMAGE`.
         * You must unref `out` with {@link GObject.Object.unref}.
         *
         * Use {@link Image.get_typeof} to test for the
         * existence of a piece of metadata.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.set_image}
         * @param name metadata name
         * @returns 0 on success, -1 otherwise.
         */
        get_image(name: string): [number, Image];
        /**
         * Gets `out` from `im` under the name `name`.
         * The value will be transformed into an int, if possible.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.get_typeof}.
         * @param name field name
         * @returns 0 on success, -1 otherwise.
         */
        get_int(name: string): [number, number];
        /**
         * Return the {@link Interpretation} set in the image header.
         * Use {@link Image.guess_format} if you want a sanity-checked value.
         * @returns the {@link Interpretation} from the image header.
         */
        get_interpretation(): Interpretation;
        /**
         * Image modes are things like `"t"`, meaning a memory buffer, and `"p"`
         * meaning a delayed computation.
         * @returns the image mode.
         */
        get_mode(): string;
        /**
         * Fetch and sanity-check {@link META_N_PAGES}. Default to 1 if not present
         * or crazy.
         *
         * This is the number of pages in the image file, not the number of pages that
         * have been loaded into `image`.
         * @returns the number of pages in the image file
         */
        get_n_pages(): number;
        /**
         * Fetch and sanity-check {@link META_N_SUBIFDS}. Default to 0 if not
         * present or crazy.
         * @returns the number of subifds in the image file
         */
        get_n_subifds(): number;
        /**
         * Matrix images can have an optional `offset` field for use by integer
         * convolution.
         * @returns the offset.
         */
        get_offset(): number;
        /**
         * Fetch and sanity-check {@link META_ORIENTATION}. Default to 1 (no rotate,
         * no flip) if not present or crazy.
         * @returns the image orientation.
         */
        get_orientation(): number;
        /**
         * Return `TRUE` if applying the orientation would swap width and height.
         * @returns if width/height will swap
         */
        get_orientation_swap(): boolean;
        /**
         * Multi-page images can have a page height. Fetch it, and sanity check it. If
         * page-height is not set, it defaults to the image height.
         * @returns the page height.
         */
        get_page_height(): number;
        /**
         * Matrix images can have an optional `scale` field for use by integer
         * convolution.
         * @returns the scale.
         */
        get_scale(): number;
        /**
         * Gets `out` from `im` under the name `name`.
         * The field must be of type `G_TYPE_STRING` or `VIPS_TYPE_REF_STRING`.
         *
         * Do not free `out`.
         *
         * Use {@link Image.get_as_string} to fetch any field as a string.
         *
         * ::: seealso
         *     {@link Image.get}, {@link Image.get_typeof}.
         * @param name field name
         * @returns 0 on success, -1 otherwise.
         */
        get_string(name: string): [number, string];
        /**
         * Fetch and sanity-check {@link META_TILE_HEIGHT}. Default to -1 (no tiling)
         * if not present or crazy.
         * @returns the height of the tiles encoded in the image.
         */
        get_tile_height(): number;
        /**
         * Pick a tile size and a buffer height for this image and the current
         * value of {@link concurrency_get}. The buffer height
         * will always be a multiple of tile_height.
         *
         * The buffer height is the height of each buffer we fill in sink disc. Since
         * we have two buffers, the largest range of input locality is twice the output
         * buffer size, plus whatever margin we add for things like convolution.
         */
        get_tile_size(): [number, number, number];
        /**
         * Fetch and sanity-check {@link META_TILE_WIDTH}. Default to -1 (no tiling)
         * if not present or crazy.
         * @returns the width of the tiles encoded in the image.
         */
        get_tile_width(): number;
        /**
         * Read the {@link GObject.Type} for a header field. Returns zero if there
         * is no field of that name.
         *
         * ::: seealso
         *     {@link Image.get}.
         * @param name the name to search for
         * @returns the {@link GObject.Type} of the field, or zero if there is no   field of that name.
         */
        get_typeof(name: string): GObject.GType;
        /**
         * @returns the number of pixels across the image.
         */
        get_width(): number;
        /**
         * @returns the horizontal position of the image origin, in pixels.
         */
        get_xoffset(): number;
        /**
         * @returns the horizontal image resolution in pixels per millimeter.
         */
        get_xres(): number;
        /**
         * @returns the vertical position of the image origin, in pixels.
         */
        get_yoffset(): number;
        /**
         * @returns the vertical image resolution in pixels per millimeter.
         */
        get_yres(): number;
        /**
         * Return the {@link BandFormat} for an image, guessing a sane value if
         * the set value looks crazy.
         *
         * For example, for a float image tagged as rgb16, we'd return ushort.
         * @returns a sensible {@link BandFormat} for the image.
         */
        guess_format(): BandFormat;
        /**
         * Return the {@link Interpretation} for an image, guessing a sane value if
         * the set value looks crazy.
         * @returns a sensible {@link Interpretation} for the image.
         */
        guess_interpretation(): Interpretation;
        /**
         * Look at an image's interpretation and see if it has extra alpha bands. For
         * example, a 4-band {@link Vips.Interpretation.SRGB} would, but a six-band
         * {@link Vips.Interpretation.MULTIBAND} would not.
         *
         * Return `TRUE` if `image` has an alpha channel.
         */
        hasalpha(): boolean;
        /**
         * Formats the name/argv as a single string and calls
         * {@link Image.history_printf}. A convenience function for
         * command-line programs.
         *
         * ::: seealso
         *     {@link Image.get_history}.
         * @param name program name
         * @param argv program arguments
         * @returns 0 on success, -1 on error.
         */
        history_args(name: string, argv: string[]): number;
        /**
         * Transform an image from absolute to relative colorimetry using the
         * MediaWhitePoint stored in the ICC profile.
         *
         * ::: seealso
         *     {@link Image.icc_transform}, {@link Image.icc_import}.
         * @param profile_filename use this profile
         * @returns 0 on success, -1 on error.
         */
        icc_ac2rc(profile_filename: string): [number, Image];
        /**
         * A convenience function to set the header fields after creating an image.
         * Normally you copy the fields from your input images with
         * [method.Image.pipelinev] and then make any adjustments you need,
         * but if you are creating an image from scratch, for example
         * {@link Image.black} or {@link Image.jpegload}, you do need to set all the
         * fields yourself.
         *
         * ::: seealso
         *     [method.Image.pipelinev].
         * @param xsize image width
         * @param ysize image height
         * @param bands image bands
         * @param format band format
         * @param coding image coding
         * @param interpretation image type
         * @param xres horizontal resolution, pixels per millimetre
         * @param yres vertical resolution, pixels per millimetre
         */
        init_fields(
            xsize: number,
            ysize: number,
            bands: number,
            format: BandFormat | null,
            coding: Coding | null,
            interpretation: Interpretation | null,
            xres: number,
            yres: number,
        ): void;
        /**
         * Gets `image` ready for an in-place operation, such as
         * {@link Image.draw_circle}. After calling this function you can both read
         * and write the image with {@link IMAGE_ADDR}.
         *
         * This method is called for you by the base class of the draw operations,
         * there's no need to call it yourself.
         *
         * Since this function modifies `image`, it is not thread-safe. Only call it on
         * images which you are sure have not been shared with another thread.
         * All in-place operations are inherently not thread-safe, so you need to take
         * great care in any case.
         *
         * ::: seealso
         *     {@link Image.draw_circle}, {@link Image.wio_input}.
         * @returns 0 on success, or -1 on error.
         */
        inplace(): number;
        /**
         * Invalidate all pixel caches on `image` and any downstream images, that
         * is, images which depend on this image. Additionally, all operations which
         * depend upon this image are dropped from the VIPS operation cache.
         *
         * You should call this function after destructively modifying an image with
         * something like {@link Image.draw_circle}.
         *
         * The `Vips.Image::invalidate` signal is emitted for all invalidated images.
         *
         * ::: seealso
         *     {@link Region.invalidate}.
         */
        invalidate_all(): void;
        /**
         * Return `TRUE` if `image` is in most-significant-
         * byte first form. This is the byte order used on the SPARC
         * architecture and others.
         */
        isMSBfirst(): boolean;
        /**
         * `TRUE` if any of the images upstream from `image` were opened in sequential
         * mode. Some operations change behaviour slightly in sequential mode to
         * optimize memory behaviour.
         * @returns `TRUE` if `image` is in sequential mode.
         */
        is_sequential(): boolean;
        /**
         * Return `TRUE` if `image` represents a file on disc in some way.
         */
        isfile(): boolean;
        /**
         * If `image` has been killed (see {@link Image.set_kill}), set an error
         * message, clear the {@link Image}.kill flag and return `TRUE`. Otherwise
         * return `FALSE`.
         *
         * Handy for loops which need to run sets of threads which can fail.
         *
         * ::: seealso
         *     {@link Image.set_kill}.
         * @returns `TRUE` if `image` has been killed.
         */
        iskilled(): boolean;
        /**
         * Return `TRUE` if `im` represents a partial image (a delayed calculation).
         */
        ispartial(): boolean;
        /**
         * This function calls `fn` for every header field, including every item of
         * metadata.
         *
         * Like all _map functions, the user function should return `NULL` to continue
         * iteration, or a non-`NULL` pointer to indicate early termination.
         *
         * ::: seealso
         *     {@link Image.get_typeof}, {@link Image.get}.
         * @param fn function to call for each header field
         * @returns `NULL` on success, the failing   pointer otherwise.
         */
        map(fn: ImageMapFn): any | null;
        /**
         * Minimise memory use on this image and any upstream images, that is, images
         * which this image depends upon. This function is called automatically at the
         * end of a computation, but it might be useful to call at other times.
         *
         * The `Vips.Image::minimise` signal is emitted for all minimised images.
         */
        minimise_all(): void;
        /**
         * Check that an image is readable with {@link Region.prepare} and friends.
         * If it isn't, try to transform the image so that {@link Region.prepare} can
         * work.
         *
         * ::: seealso
         *     {@link Image.pio_output}, {@link Region.prepare}.
         * @returns 0 on success, or -1 on error.
         */
        pio_input(): number;
        /**
         * Check that an image is writeable with {@link Image.generate}. If it isn't,
         * try to transform the image so that {@link Image.generate} can work.
         *
         * ::: seealso
         *     {@link Image.pio_input}.
         * @returns 0 on success, or -1 on error.
         */
        pio_output(): number;
        posteval(): void;
        preeval(): void;
        /**
         * Prints field `name` to stdout as ASCII. Handy for debugging.
         * @param name field name
         */
        print_field(name: string): void;
        /**
         * Find and remove an item of metadata. Return `FALSE` if no metadata of that
         * name was found.
         *
         * ::: seealso
         *     {@link Image.set}, {@link Image.get_typeof}.
         * @param name the name to search for
         * @returns `TRUE` if an item of metadata of that name was found and removed
         */
        remove(name: string): boolean;
        /**
         * {@link Image.reorder_margin_hint} sets a hint that `image` contains a
         * margin, that is, that each {@link Region.prepare} on `image` will request
         * a slightly larger region from it's inputs. A good value for `margin` is
         * (width * height) for the window the operation uses.
         *
         * This information is used by {@link Image.reorder_prepare_many} to attempt to
         * reorder computations to minimise recomputation.
         *
         * ::: seealso
         *     {@link Image.reorder_prepare_many}.
         * @param margin the size of the margin this operation has added
         */
        reorder_margin_hint(margin: number): void;
        /**
         * {@link Image.reorder_prepare_many} runs {@link Region.prepare} on each
         * region in `regions`, requesting the pixels in `r`.
         *
         * It tries to request the regions in the order which will cause least
         * recomputation. This can give a large speedup, in some cases.
         *
         * ::: seealso
         *     {@link Region.prepare}, {@link Image.reorder_margin_hint}.
         * @param regions the set of regions to prepare
         * @param r the {@link Rect} to prepare on each region
         * @returns 0 on success, or -1 on error.
         */
        reorder_prepare_many(regions: Region[], r: Rect): number;
        /**
         * Set a piece of metadata on `image`. Any old metadata with that name is
         * destroyed. The {@link GObject.Value} is copied into the image, so you need to unset the
         * value when you're done with it.
         *
         * For example, to set an integer on an image (though you would use the
         * convenience function {@link Image.set_int} in practice), you would do:
         *
         * ```c
         * GValue value = G_VALUE_INIT;
         *
         * g_value_init(&value, G_TYPE_INT);
         * g_value_set_int(&value, 42);
         * vips_image_set(image, name, &value);
         * g_value_unset(&value);
         * ```
         *
         * ::: seealso
         *     {@link Image.get}.
         * @param name the name to give the metadata
         * @param value the {@link GObject.Value} to copy into the image
         */
        set(name: string, value: GObject.Value | any): void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Attaches `data` as a metadata item on `image` under the name `name`. When
         * VIPS no longer needs the metadata, it will be freed with `free_fn`.
         *
         * ::: seealso
         *     {@link Image.get_double}, {@link Image.set}.
         * @param name metadata name
         * @param free_fn free function for `data`
         */
        set_area(name: string, free_fn?: CallbackFn | null): void;
        /**
         * Attaches `array` as a metadata item on `image` as `name`.
         * A convenience function over {@link Image.set}.
         *
         * ::: seealso
         *     {@link Image.get_image}, {@link Image.set}.
         * @param name metadata name
         * @param array array of doubles
         */
        set_array_double(name: string, array?: number[] | null): void;
        /**
         * Attaches `array` as a metadata item on `image` as `name`.
         * A convenience function over {@link Image.set}.
         *
         * ::: seealso
         *     {@link Image.get_image}, {@link Image.set}.
         * @param name metadata name
         * @param array array of ints
         */
        set_array_int(name: string, array?: number[] | null): void;
        /**
         * Attaches `data` as a metadata item on `image` under the name `name`.
         *
         * ::: seealso
         *     {@link Image.get_blob}, {@link Image.set}.
         * @param name metadata name
         * @param free_fn free function for `data`
         * @param data pointer to area of   memory
         */
        set_blob(name: string, free_fn: CallbackFn | null, data: Uint8Array | string): void;
        /**
         * Attaches `data` as a metadata item on `image` under the name `name`, taking
         * a copy of the memory area.
         *
         * ::: seealso
         *     {@link Image.get_blob}, {@link Image.set}.
         * @param name metadata name
         * @param data pointer to area of memory
         */
        set_blob_copy(name: string, data: Uint8Array | string): void;
        /**
         * Sets the delete_on_close flag for the image. If this flag is set, when
         * `image` is finalized, the filename held in `image`->filename at the time of
         * this call is deleted.
         *
         * This function is clearly extremely dangerous, use with great caution.
         *
         * ::: seealso
         *     {@link Image.new_temp_file}.
         * @param delete_on_close format of file
         */
        set_delete_on_close(delete_on_close: boolean): void;
        /**
         * Attaches `d` as a metadata item on `image` as `name`. A
         * convenience function over {@link Image.set}.
         *
         * ::: seealso
         *     {@link Image.get_double}, {@link Image.set}.
         * @param name metadata name
         * @param d metadata value
         */
        set_double(name: string, d: number): void;
        /**
         * Attaches `im` as a metadata item on `image` as `name`.
         * A convenience function over {@link Image.set}.
         *
         * ::: seealso
         *     {@link Image.get_image}, {@link Image.set}.
         * @param name metadata name
         * @param im metadata value
         */
        set_image(name: string, im: Image): void;
        /**
         * Attaches `i` as a metadata item on `image` under the name `name`. A
         * convenience function over {@link Image.set}.
         *
         * ::: seealso
         *     {@link Image.get_int}, {@link Image.set}.
         * @param name metadata name
         * @param i metadata value
         */
        set_int(name: string, i: number): void;
        /**
         * Set the {@link Image}.kill flag on an image. Handy for stopping sets of
         * threads.
         *
         * ::: seealso
         *     {@link Image.iskilled}.
         * @param kill the kill state
         */
        set_kill(kill: boolean): void;
        /**
         * vips signals evaluation progress via the `Vips.Image::preeval`,
         * `Vips.Image::eval` and `Vips.Image::posteval`
         * signals. Progress is signalled on the most-downstream image for which
         * {@link Image.set_progress} was called.
         * @param progress turn progress reporting on or off
         */
        set_progress(progress: boolean): void;
        /**
         * Attaches `str` as a metadata item on `image` as `name`.
         * A convenience
         * function over {@link Image.set} using `VIPS_TYPE_REF_STRING`.
         *
         * ::: seealso
         *     {@link Image.get_double}, {@link Image.set}.
         * @param name metadata name
         * @param str metadata value
         */
        set_string(name: string, str: string): void;
        /**
         * Loops over an image. `generate_fn` is called for every pixel in
         * the image, with the `reg` argument being a region of calculated pixels.
         * {@link Image.sink} is used to implement operations like
         * {@link Image.avg} which have no image output.
         *
         * Each set of pixels is sized according to the requirements of the image
         * pipeline that generated `im`.
         *
         * ::: seealso
         *     {@link Image.generate}, {@link Image.new}.
         * @param start_fn start sequences with this function
         * @param generate_fn generate pixels with this function
         * @param stop_fn stop sequences with this function
         * @param a user data
         * @param b user data
         * @returns 0 on success, or -1 on error.
         */
        sink(start_fn: StartFn, generate_fn: GenerateFn, stop_fn: StopFn, a?: any | null, b?: any | null): number;
        /**
         * {@link Image.sink_disc} loops over `im`, top-to-bottom, generating it in sections.
         * As each section is produced, `write_fn` is called.
         *
         * `write_fn` is always called single-threaded (though not always from the same
         * thread), it's always given image
         * sections in top-to-bottom order, and there are never any gaps.
         *
         * This operation is handy for making image sinks which output to things like
         * disc files. Things like {@link Image.jpegsave}, for example, use this to write
         * images to files in JPEG format.
         *
         * ::: seealso
         *     {@link concurrency_set}.
         * @param write_fn called for every batch of pixels
         * @returns 0 on success, -1 on error.
         */
        sink_disc(write_fn: RegionWrite): number;
        /**
         * This operation renders `in` in the background, making pixels available
         * on `out` as they are calculated. The `notify_fn` callback is run every
         * time a new set of pixels are available. Calculated pixels are kept in
         * a cache with tiles sized `tile_width` by `tile_height` pixels and with at
         * most `max_tiles` tiles.  If `max_tiles` is -1, the cache is of unlimited
         * size (up to the maximum image * size). The `mask` image is a one-band
         * uchar image and has 255 for pixels which are currently in cache and 0
         * for uncalculated pixels.
         *
         * Renders with a positive priority are assumed to be large, high-priority,
         * foreground images. Although there can be many of these, only one is ever
         * active, to avoid overcommitting threads.
         *
         * Renders with a negative priority are assumed to be small, thumbnail images,
         * consisting of a single tile. Single tile images are effectively
         * single-threaded, so all these renders are evaluated together.
         *
         * Calls to {@link Region.prepare} on `out` return immediately and hold
         * whatever is currently in cache for that {@link Rect} (check `mask` to see
         * which parts of the {@link Rect} are valid). Any pixels in the {@link Rect}
         * which are not in cache are added to a queue, and the `notify_fn`
         * callback will trigger when those pixels are ready.
         *
         * The `notify_fn` callback is run from one of the background threads. In the
         * callback you need to somehow send a message to the main thread that the
         * pixels are ready. In a glib-based application, this is easily done with
         * {@link GLib.idle_add}.
         *
         * If `notify_fn` is `NULL` then {@link Image.sink_screen} runs synchronously.
         * {@link Region.prepare} on `out` will always block until the pixels have been
         * calculated.
         *
         * ::: seealso
         *     {@link Image.tilecache}, {@link Region.prepare},
         *     {@link Image.sink_disc}, {@link Image.sink}.
         * @param mask mask image indicating valid pixels
         * @param tile_width tile width
         * @param tile_height tile height
         * @param max_tiles maximum tiles to cache
         * @param priority rendering priority
         * @param notify_fn pixels are ready notification callback
         * @returns 0 on success, -1 on error.
         */
        sink_screen(
            mask: Image,
            tile_width: number,
            tile_height: number,
            max_tiles: number,
            priority: number,
            notify_fn?: SinkNotify | null,
        ): [number, Image];
        /**
         * Loops over an image. `generate_fn` is called for every
         * pixel in the image, with
         * the `reg` argument being a region of calculated pixels.
         *
         * Each set of pixels is `tile_width` by `tile_height` pixels (less at the
         * image edges). This is handy for things like writing a tiled TIFF image,
         * where tiles have to be generated with a certain size.
         *
         * ::: seealso
         *     {@link Image.sink}, {@link Image.get_tile_size}.
         * @param tile_width tile width
         * @param tile_height tile height
         * @param start_fn start sequences with this function
         * @param generate_fn generate pixels with this function
         * @param stop_fn stop sequences with this function
         * @param a user data
         * @param b user data
         * @returns 0 on success, or -1 on error.
         */
        sink_tile(
            tile_width: number,
            tile_height: number,
            start_fn: StartFn,
            generate_fn: GenerateFn,
            stop_fn: StopFn,
            a?: any | null,
            b?: any | null,
        ): number;
        /**
         * Check that an image is readable via the {@link IMAGE_ADDR} macro, that is,
         * that the entire image is in memory and all pixels can be read with
         * {@link IMAGE_ADDR}.  If it
         * isn't, try to transform it so that {@link IMAGE_ADDR} can work.
         *
         * Since this function modifies `image`, it is not thread-safe. Only call it on
         * images which you are sure have not been shared with another thread. If the
         * image might have been shared, use the less efficient
         * {@link Image.copy_memory} instead.
         *
         * ::: seealso
         *     {@link Image.copy_memory}, {@link Image.pio_input},
         *     {@link Image.inplace}, {@link IMAGE_ADDR}.
         * @returns 0 on success, or -1 on error.
         */
        wio_input(): number;
        /**
         * Write `image` to `out`. Use {@link Image.new} and friends to create the
         * {@link Image} you want to write to.
         *
         * ::: seealso
         *     {@link Image.new}, {@link Image.copy}, {@link Image.write_to_file}.
         * @returns 0 on success, or -1 on error.
         */
        write(): [number, Image];
        /**
         * Write a line of pixels to an image. This function must be called repeatedly
         * with `ypos` increasing from 0 to {@link Image.height}.
         * `linebuffer` must be {@link IMAGE_SIZEOF_LINE} bytes long.
         *
         * ::: seealso
         *     {@link Image.generate}.
         * @param ypos vertical position of scan-line to write
         * @param linebuffer scanline of pixels
         * @returns 0 on success, or -1 on error.
         */
        write_line(ypos: number, linebuffer: Pel): number;
        /**
         * Call this after setting header fields (width, height, and so on) to
         * allocate resources ready for writing.
         *
         * Normally this function is called for you by {@link Image.generate} or
         * {@link Image.write_line}. You will need to call it yourself if you plan to
         * write directly to the ->data member of a memory image.
         * @returns 0 on success, or -1 on error.
         */
        write_prepare(): number;
        /**
         * Writes `in` to memory as a simple, unformatted C-style array.
         *
         * The caller is responsible for freeing this memory with {@link GLib.free}.
         *
         * ::: seealso
         *     {@link Image.write_to_buffer}.
         * @returns return buffer start here
         */
        write_to_memory(): Uint8Array;
    }

    namespace Interpolate {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * An abstract base class for the various interpolation functions.
     *
     * Use `vips --list classes` to see all the interpolators available.
     *
     * An interpolator consists of a function to perform the interpolation, plus
     * some extra data fields which tells libvips how to call the function and
     * what data it needs.
     * @gir-type Class
     */
    abstract class Interpolate extends Object {
        static $gtype: GObject.GType<Interpolate>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Interpolate.SignalSignatures;

        // Fields

        parent_object: Object;

        // Constructors

        constructor(properties?: Partial<Interpolate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](nickname: string): Interpolate;

        // Signals

        /** @signal */
        connect<K extends keyof Interpolate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interpolate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Interpolate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interpolate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Interpolate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Interpolate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * A convenience function that returns a bilinear interpolator you
         * don't need to free.
         */
        static bilinear_static(): Interpolate;
        /**
         * A convenience function that returns a nearest-neighbour interpolator you
         * don't need to free.
         */
        static nearest_static(): Interpolate;

        // Virtual methods

        /**
         * Look up an interpolators desired window offset.
         * @virtual
         */
        vfunc_get_window_offset(): number;
        /**
         * Look up an interpolators desired window size.
         * @virtual
         */
        vfunc_get_window_size(): number;
        /**
         * the interpolation method
         * @param out write the interpolated pixel here
         * @param _in read source pixels from here
         * @param x interpolate value at this position
         * @param y interpolate value at this position
         * @virtual
         */
        vfunc_interpolate(out: any | null, _in: Region, x: number, y: number): void;

        // Methods

        /**
         * Look up an interpolators desired window offset.
         * @returns the interpolators required window offset
         */
        get_window_offset(): number;
        /**
         * Look up an interpolators desired window size.
         * @returns the interpolators required window size
         */
        get_window_size(): number;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::close signal is emitted once during object close. The object
             * is dying and may not work.
             * @signal
             * @run-last
             */
            close: () => void;
            /**
             * The ::postbuild signal is emitted once just after successful object
             * construction. Return non-zero to cause object construction to fail.
             * @signal
             * @run-last
             */
            postbuild: () => number;
            /**
             * The ::postclose signal is emitted once after object close. The
             * object pointer is still valid, but nothing else.
             * @signal
             * @run-last
             */
            postclose: () => void;
            /**
             * The ::preclose signal is emitted once just before object close
             * starts. The object is still alive.
             * @signal
             * @run-last
             */
            preclose: () => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            nickname: string;
        }
    }

    /**
     * An abstract base class for all objects in libvips.
     *
     * It has the following major features:
     *
     * - **Functional class creation**: libvips objects have a very regular
     *   lifecycle: initialise, build, use, destroy. They behave rather like
     *   function calls and are free of side-effects.
     *
     * - **Run-time introspection**: libvips objects can be fully introspected
     *   at run-time. There is no need for separate source-code analysis.
     *
     * - **Command-line interface**: Any vips object can be run from the
     *   command-line with the `vips` driver program.
     *
     * ## The {@link Object} lifecycle
     *
     * {@link Object}'s have a strictly defined lifecycle, split broadly as
     * construct and then use. In detail, the stages are:
     *
     * 1. {@link GObject.Object.new}. The {@link Object} is created with
     *   {@link GObject.Object.new}. Objects in this state are blank slates and
     *   need to have their various parameters set.
     *
     * 2. {@link GObject.Object.set}. You loop over the {@link Argument} that
     *   the object has defined with {@link Argument.map}. Arguments have a set of
     *   flags attached to them for required, optional, input, output, type, and
     *   so on. You must set all required arguments.
     *
     * 3. {@link Object.build}. Call this to construct the object and get it
     *   ready for use. Building an object happens in four stages, see below.
     *
     * 4. {@link GObject.Object.get}. The object has now been built. You can
     *   read out any computed values.
     *
     * 5. {@link GObject.Object.unref}. When you are done with an object, you
     *   can unref it. See the section on reference counting for an explanation
     *   of the convention that {@link Object} uses. When the last ref to an
     *   object is released, the object is closed. Objects close in three stages,
     *   see below.
     *
     * The stages inside {@link Object.build} are:
     *
     * 1. Chain up through the object's `build` class methods. At each stage,
     *   each class does any initial setup and checking, then chains up to its
     *   superclass.
     *
     * 2. The innermost `build` method inside {@link Object} itself checks that
     *   all input arguments have been set and then returns.
     *
     * 3. All object `build` methods now finish executing, from innermost to
     *   outermost. They know all input arguments have been checked and supplied,
     *   so now they set all output arguments.
     *
     * 4. {@link Object.build} finishes the process by checking that all output
     *   objects have been set, and then triggering the `Vips.Object::postbuild`
     *   signal. `Vips.Object::postbuild` only runs if the object has constructed
     *   successfully.
     *
     * {@link Operation} has a cache of recent operation objects, see that class for
     * an explanation of {@link cache_operation_build}.
     *
     * Finally, the stages inside close are:
     *
     * 1. `Vips.Object::preclose`. This is emitted at the start of the
     *   {@link Object} dispose. The object is still functioning.
     *
     * 2. `Vips.Object::close`. This runs just after all {@link Argument} held
     *   by the object have been released.
     *
     * 3. `Vips.Object::postclose`. This runs right at the end. The object
     *   pointer is still valid, but nothing else is.
     *
     * ## The {@link Object} reference counting convention
     *
     * {@link Object} has a set of conventions to simplify reference counting.
     *
     * 1. All input {@link GObject.Object} have a ref added to them, owned by the
     *   object. When a {@link Object} is unreffed, all of these refs to input
     *   objects are automatically dropped.
     *
     * 2. All output {@link GObject.Object} hold a ref to the object. When a
     *   {@link GObject.Object} which is an output of a {@link Object} is
     *   disposed, it must drop this reference. {@link Object} which are outputs
     *   of other {@link Object}'s will do this automatically.
     *
     * See {@link Operation} for an example of {@link Object} reference counting.
     * @gir-type Class
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        get description(): string;
        set description(val: string);
        get nickname(): string;
        set nickname(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Fields

        constructed: boolean;
        static_object: boolean;
        argument_table: ArgumentTable;
        close: boolean;
        postclose: boolean;
        local_memory: number;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(object_class: typeof Object, p: string): Object;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param gobject
         * @param property_id
         * @param value
         * @param pspec
         */
        static get_property(
            gobject: GObject.Object,
            property_id: number,
            value: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): void;
        static print_all(): void;
        /**
         * @param klass
         */
        static print_summary_class(klass: typeof Object): void;
        static sanity_all(): void;
        /**
         * @param gobject
         * @param property_id
         * @param value
         * @param pspec
         */
        static set_property(
            gobject: GObject.Object,
            property_id: number,
            value: GObject.Value | any,
            pspec: GObject.ParamSpec,
        ): void;
        /**
         * @param pspec
         * @param flags
         * @param priority
         * @param offset
         */
        static install_argument(pspec: GObject.ParamSpec, flags: ArgumentFlags, priority: number, offset: number): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_build(): number;
        /**
         * @virtual
         */
        vfunc_close(): void;
        /**
         * @param string
         * @virtual
         */
        vfunc_output_to_arg(string: string): number;
        /**
         * @param data
         * @virtual
         */
        vfunc_postbuild(data?: any | null): number;
        /**
         * @virtual
         */
        vfunc_postclose(): void;
        /**
         * @virtual
         */
        vfunc_preclose(): void;
        /**
         * @virtual
         */
        vfunc_rewind(): void;
        /**
         * @param buf
         * @virtual
         */
        vfunc_sanity(buf: Buf): void;
        /**
         * The inverse of {@link Object.new_from_string}: turn `object` into eg.
         * `"VipsInterpolateSnohalo1(blur=.333333)"`.
         * @param buf write string here
         * @virtual
         */
        vfunc_to_string(buf: Buf): void;

        // Methods

        /**
         * Convenience: has an argument been assigned. Useful for bindings.
         * @param name arg to fetch
         * @returns `TRUE` if the argument has been assigned.
         */
        argument_isset(name: string): boolean;
        /**
         * @param name
         */
        argument_needsstring(name: string): boolean;
        build(): number;
        /**
         * Convenience: get the flags for an argument. Useful for bindings.
         * @param name arg to fetch
         * @returns The {@link ArgumentFlags} for this argument.
         */
        get_argument_flags(name: string): ArgumentFlags;
        /**
         * Convenience: get the priority for an argument. Useful for bindings.
         * @param name arg to fetch
         * @returns The priority of this argument.
         */
        get_argument_priority(name: string): number;
        /**
         * @param name
         * @param arg
         */
        get_argument_to_string(name: string, arg: string): number;
        /**
         * Fetch the object description. Useful for language bindings.
         *
         * {@link Object.description} is only available after `_build()`, which can be too
         * late. This function fetches from the instance, if possible, but falls back
         * to the class description if we are too early.
         * @returns the object description
         */
        get_description(): string;
        /**
         * @param gobject
         */
        local_cb(gobject: GObject.Object): void;
        preclose(): void;
        print_dump(): void;
        print_name(): void;
        print_summary(): void;
        rewind(): void;
        sanity(): boolean;
        /**
         * @param name
         * @param value
         */
        set_argument_from_string(name: string, value: string): number;
        /**
         * Set object arguments from a string. The string can be something like
         * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
         * enclosed in brackets.
         *
         * You'd typically use this between creating the object and building it.
         *
         * ::: seealso
         *     {@link Object.set}, {@link Object.build},
         *     {@link cache_operation_buildp}.
         * @param string arguments as a string
         * @returns 0 on success, -1 on error
         */
        set_from_string(string: string): number;
        /**
         * @param value
         */
        set_required(value: string): number;
        /**
         * @param static_object
         */
        set_static(static_object: boolean): void;
        /**
         * The inverse of {@link Object.new_from_string}: turn `object` into eg.
         * `"VipsInterpolateSnohalo1(blur=.333333)"`.
         * @param buf write string here
         */
        to_string(buf: Buf): void;
        /**
         * Unref all assigned output objects. Useful for language bindings.
         *
         * After an object is built, all output args are owned by the caller. If
         * something goes wrong before then, we have to unref the outputs that have
         * been made so far. This function can also be useful for callers when
         * they've finished processing outputs themselves.
         *
         * ::: seealso
         *     {@link cache_operation_build}.
         */
        unref_outputs(): void;
    }

    namespace Operation {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            invalidate: () => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * An abstract base class for all operations in libvips.
     *
     * It builds on {@link Object} to provide the introspection and
     * command-line interface to libvips.
     *
     * It also maintains a cache of recent operations. See below.
     *
     * {@link call}, {@link call_split} and {@link call_split_option_string} are used
     * by vips to implement the C API. They can execute any {@link Operation},
     * passing in a set of required and optional arguments. Normally you would not
     * use these functions directly: every operation has a tiny wrapper function
     * which provides type-safety for the required arguments. For example,
     * {@link Image.embed} is defined as:
     *
     * ```c
     * int
     * vips_embed(VipsImage *in, VipsImage **out,
     *     int x, int y, int width, int height, ...)
     * {
     *     va_list ap;
     *     int result;
     *
     *     va_start(ap, height);
     *     result = vips_call_split("embed", ap, in, out, x, y, width, height);
     *     va_end(ap);
     *
     *     return result;
     * }
     * ```
     *
     * Use {@link call_argv} to run any libvips operation from a command-line style
     * argc/argv array. This is the thing used by the `vips` main program to
     * implement the command-line interface.
     *
     * ## {@link Operation} and reference counting
     *
     * After calling a {@link Operation} you are responsible for unreffing any
     * output objects. For example, consider:
     *
     * ```c
     * VipsImage *im = ...;
     * VipsImage *t1;
     *
     * if (vips_invert(im, &t1, NULL))
     *     error ..
     * ```
     *
     * This will invert `im` and return a new {@link Image}, `t1`. As the caller
     * of {@link Image.invert}, you are responsible for `t1` and must unref it
     * when you no longer need it. If {@link Image.invert} fails, no `t1` is
     * returned and you don't need to do anything.
     *
     * If you don't need to use `im` for another operation, you can unref `im`
     * immediately after the call. If `im` is needed to calculate `t1`,
     * {@link Image.invert} will add a ref to `im` and automatically drop it when
     * `t1` is unreffed.
     *
     * Consider running two operations, one after the other. You could write:
     *
     * ```c
     * VipsImage *im = ...;
     * VipsImage *t1, *t2;
     *
     * if (vips_invert(im, &t1, NULL)) {
     *     g_object_unref(im);
     *     return -1;
     * }
     * g_object_unref(im);
     *
     * if (vips_flip(t1, &t2, VIPS_DIRECTION_HORIZONTAL, NULL)) {
     *     g_object_unref(t1);
     *     return -1;
     * }
     * g_object_unref(t1);
     * ```
     *
     * This is correct, but rather long-winded. libvips provides a handy thing to
     * make a vector of auto-freeing object references. You can write this as:
     *
     * ```c
     * VipsObject *parent = ...;
     * VipsImage *im = ...;
     * VipsImage *t = (VipsImage **) vips_object_local_array(parent, 2);
     *
     * if (vips_invert(im, &t[0], NULL) ||
     *     vips_flip(t[0], &t[1], VIPS_DIRECTION_HORIZONTAL, NULL))
     *     return -1;
     * ```
     *
     * where `parent` is some enclosing object which will be unreffed when this
     * task is complete. {@link Object.local_array} makes an array of
     * {@link Object} (or {@link Image}, in this case) where when `parent` is
     * freed, all non-`NULL` {@link Object} in the array are also unreffed.
     *
     * ## The {@link Operation} cache
     *
     * Because all {@link Object} are immutable, they can be cached. The cache is
     * very simple to use: instead of calling {@link Object.build}, call
     * {@link cache_operation_build}. This function calculates a hash from the
     * operations' input arguments and looks it up in table of all recent
     * operations. If there's a hit, the new operation is unreffed, the old
     * operation reffed, and the old operation returned in place of the new one.
     *
     * The cache size is controlled with {@link cache_set_max} and friends.
     * @gir-type Class
     */
    abstract class Operation extends Object {
        static $gtype: GObject.GType<Operation>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Operation.SignalSignatures;

        // Fields

        hash: number;
        found_hash: boolean;
        pixels: number;

        // Constructors

        constructor(properties?: Partial<Operation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Operation;

        // Signals

        /** @signal */
        connect<K extends keyof Operation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Operation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Operation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Operation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Operation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Operation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Set the block state on all operations in the libvips class hierarchy at
         * `name` and below.
         *
         * For example:
         *
         * ```c
         * vips_operation_block_set("VipsForeignLoad", TRUE);
         * vips_operation_block_set("VipsForeignLoadJpeg", FALSE);
         * ```
         *
         * Will block all load operations, except JPEG.
         *
         * Use `vips -l` at the command-line to see the class hierarchy.
         *
         * This call does nothing if the named operation is not found.
         *
         * ::: seealso
         *     {@link block_untrusted_set}.
         * @param name set block state at this point and below
         * @param state the block state to set
         */
        static block_set(name: string, state: boolean): void;

        // Virtual methods

        /**
         * Returns the set of flags for this operation.
         * @virtual
         */
        vfunc_get_flags(): OperationFlags;
        /**
         * @virtual
         */
        vfunc_invalidate(): void;

        // Methods

        /**
         * Returns the set of flags for this operation.
         * @returns 0 on success, or -1 on error.
         */
        get_flags(): OperationFlags;
        invalidate(): void;
    }

    namespace Region {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A {@link Region} represents a small, rectangular part of an image.
     *
     * You use regions to read pixels out of images without having to have the
     * whole image in memory at once.
     *
     * A region can be a memory buffer, part of a memory-mapped file, part of some
     * other image, or part of some other region.
     *
     * Regions must be created, used and freed all within the same thread, since
     * they can reference private per-thread caches. libvips sanity-checks region
     * ownership in various places, so you are likely to see {@link GLib.assert}
     * errors if you don't follow this rule.
     *
     * There is API to transfer ownership of regions between threads, but
     * (hopefully) this is only needed within libvips, so we don't expose it.
     * @gir-type Class
     */
    class Region extends Object {
        static $gtype: GObject.GType<Region>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Region.SignalSignatures;

        // Fields

        parent_object: Object;
        im: Image;
        valid: Rect;

        // Constructors

        constructor(properties?: Partial<Region.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](image: Image): Region;

        // Signals

        /** @signal */
        connect<K extends keyof Region.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Region.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Region.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Region.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Region.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Paints 0 into the valid part of `reg`.
         *
         * ::: seealso
         *     {@link Region.paint}.
         */
        black(): void;
        /**
         * The region is transformed so that at least `r` pixels are available as a
         * memory buffer that can be written to.
         * @param r {@link Rect} of pixels you need to be able to address
         * @returns 0 on success, or -1 for error.
         */
        buffer(r: Rect): number;
        /**
         * Copy from one region to another. Copy area `r` from inside `reg` to `dest`,
         * positioning the area of pixels at `x`, `y`. The two regions must have pixels
         * which are the same size.
         *
         * ::: seealso
         *     {@link Region.paint}.
         * @param dest destination region
         * @param r {@link Rect} of pixels you need to copy
         * @param x position of `r` in `dest`
         * @param y position of `r` in `dest`
         */
        copy(dest: Region, r: Rect, x: number, y: number): Region;
        /**
         * Do two regions point to the same piece of image? ie.
         *
         * ```c
         * VIPS_REGION_ADDR(reg1, x, y) == VIPS_REGION_ADDR(reg2, x, y) &&
         * *VIPS_REGION_ADDR(reg1, x, y) ==
         *     *VIPS_REGION_ADDR(reg2, x, y) for all x, y, reg1, reg2.
         * ```
         * @param reg2 region to test
         * @returns non-zero on equality.
         */
        equalsregion(reg2: Region): number;
        /**
         * Generate an area of pixels and return a copy. The result must be freed
         * with {@link GLib.free}. The requested area must be completely inside the
         * image.
         *
         * This is equivalent to {@link Region.prepare}, followed by a memcpy. It is
         * convenient for language bindings.
         * @param left area of pixels to fetch
         * @param top area of pixels to fetch
         * @param width area of pixels to fetch
         * @param height area of pixels to fetch
         * @param len
         * @returns A copy of the pixel data.
         */
        fetch(left: number, top: number, width: number, height: number, len: number): Pel;
        /**
         * @returns Height of the pixels held in region.
         */
        height(): number;
        /**
         * The region is transformed so that at least `r` pixels are available to be
         * read from the image. The image needs to be a memory buffer or represent a
         * file on disc that has been mapped or can be mapped.
         * @param r {@link Rect} of pixels you need to be able to address
         * @returns 0 on success, or -1 for error.
         */
        image(r: Rect): number;
        /**
         * Mark a region as containing invalid pixels. Calling this function means
         * that the next time {@link Region.prepare} is called, the region will be
         * recalculated.
         *
         * This is faster than calling {@link Image.invalidate_all}, but obviously only
         * affects a single region.
         *
         * ::: seealso
         *     {@link Image.invalidate_all}, {@link Region.prepare}.
         */
        invalidate(): void;
        /**
         * Paints `value` into `reg` covering rectangle `r`.
         * `r` is clipped against
         * `reg`->valid.
         *
         * For int images, `value` is
         * passed to [`memset()`](man:memset(3)), so it usually needs to be 0 or 255. For float images,
         * value is cast to a float and copied in to each band element.
         *
         * `r` is clipped against
         * `reg`->valid.
         *
         * ::: seealso
         *     {@link Region.black}.
         * @param r area to paint
         * @param value value to paint
         */
        paint(r: Rect, value: number): void;
        /**
         * Paints `ink` into `reg` covering rectangle `r`. `r` is clipped against
         * `reg`->valid.
         *
         * `ink` should be a byte array of the same size as an image pixel containing
         * the binary value to write into the pixels.
         *
         * ::: seealso
         *     {@link Region.paint}.
         * @param r area to paint
         * @param ink value to paint
         */
        paint_pel(r: Rect, ink: Pel): void;
        /**
         * Set the position of a region. This only affects reg->valid, ie. the way
         * pixels are addressed, not reg->data, the pixels which are addressed. Clip
         * against the size of the image. Do not allow negative positions, or
         * positions outside the image.
         * @param x position to move to
         * @param y position to move to
         * @returns 0 on success, or -1 for error.
         */
        position(x: number, y: number): number;
        /**
         * {@link Region.prepare} fills `reg` with pixels. After calling,
         * you can address at least the area `r` with {@link REGION_ADDR} and get
         * valid pixels.
         *
         * {@link Region.prepare} runs in-line, that is, computation is done by
         * the calling thread, no new threads are involved, and computation
         * blocks until the pixels are ready.
         *
         * Use {@link Image.sink_screen} to calculate an area of pixels in the
         * background.
         *
         * ::: seealso
         *     {@link Image.sink_screen}, {@link Region.prepare_to}.
         * @param r {@link Rect} of pixels you need to be able to address
         * @returns 0 on success, or -1 on error.
         */
        prepare(r: Rect): number;
        /**
         * Like {@link Region.prepare}: fill `reg` with the pixels in area `r`.
         *
         * Unlike {@link Region.prepare}, rather than writing the result to `reg`, the
         * pixels are written into `dest` at offset `x`, `y`.
         *
         * Also unlike {@link Region.prepare}, `dest` is not set up for writing for
         * you with {@link Region.buffer}. You can
         * point `dest` at anything, and pixels really will be written there.
         * This makes {@link Region.prepare_to} useful for making the ends of
         * pipelines.
         *
         * ::: seealso
         *     {@link Region.prepare}, {@link Image.sink_disc}.
         * @param dest region to write to
         * @param r {@link Rect} of pixels you need to be able to address
         * @param x position of `r` in `dest`
         * @param y position of `r` in `dest`
         * @returns 0 on success, or -1 on error
         */
        prepare_to(dest: Region, r: Rect, x: number, y: number): number;
        /**
         * Make {@link REGION_ADDR} on `reg` go to `dest` instead.
         *
         * `r` is the part of `reg` which you want to be able to address (this
         * effectively becomes the valid field), (`x`, `y`) is the top LH corner of the
         * corresponding area in `dest`.
         *
         * Performs all clipping necessary to ensure that `reg`->valid is indeed
         * valid.
         *
         * If the region we attach to is moved or destroyed, we can be left with
         * dangling pointers! If the region we attach to is on another image, the
         * two images must have the same sizeof(pel).
         * @param dest region to connect to
         * @param r {@link Rect} of pixels you need to be able to address
         * @param x position of `r` in `dest`
         * @param y position of `r` in `dest`
         * @returns 0 on success, or -1 for error.
         */
        region(dest: Region, r: Rect, x: number, y: number): number;
        /**
         * Write the pixels `target` in `to` from the x2 larger area in `from`.
         * Non-complex uncoded images and LABQ only.
         *
         * `method` selects the method used to do the 2x2 shrink.
         *
         * ::: seealso
         *     {@link Region.copy}.
         * @param to destination region
         * @param target {@link Rect} of pixels you need to copy
         * @param method method to use when generating target pixels
         */
        shrink_method(to: Region, target: Rect, method: RegionShrink | null): [number, Region];
        /**
         * @returns Width of the pixels held in region.
         */
        width(): number;
    }

    namespace Sbuf {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::input': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            input: Source;
        }
    }

    /**
     * A {@link Sbuf} provides a buffered reading interface for a {@link Source}.
     *
     * You can fetch lines of text, skip whitespace, and so on.
     *
     * It is useful for implementing things like CSV readers, for example.
     * @gir-type Class
     */
    class Sbuf extends Object {
        static $gtype: GObject.GType<Sbuf>;

        // Properties

        get input(): Source;
        set input(val: Source);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Sbuf.SignalSignatures;

        // Fields

        parent_object: Object;

        // Constructors

        constructor(properties?: Partial<Sbuf.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_source(source: Source): Sbuf;

        // Signals

        /** @signal */
        connect<K extends keyof Sbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sbuf.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Sbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sbuf.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Sbuf.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sbuf.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fetch the next line of text from `sbuf` and return it. The end of
         * line character (or characters, for DOS files) are removed, and the string
         * is terminated with a null (`\0` character).
         *
         * Returns `NULL` on end of file or read error.
         *
         * If the line is longer than some arbitrary (but large) limit, it is
         * truncated. If you need to be able to read very long lines, use the
         * slower {@link Sbuf.get_line_copy}.
         *
         * The return value is owned by `sbuf` and must not be freed. It
         * is valid until the next get call to `sbuf`.
         * @returns the next line of text, or `NULL` on EOF or read error.
         */
        get_line(): string;
        /**
         * Fetch the next line of text from `sbuf` and return it. The end of
         * line character (or characters, for DOS files) are removed, and the string
         * is terminated with a null (`\0` character).
         *
         * The return result must be freed with {@link GLib.free}.
         *
         * This is slower than {@link Sbuf.get_line}, but can work with lines of
         * any length.
         * @returns the next line of text, or `NULL` on EOF or read error.
         */
        get_line_copy(): string;
        /**
         * Fetch the next chunk of non-whitespace text from the source, and
         * null-terminate it.
         *
         * After this, the next getc will be the first char of the next block of
         * whitespace (or EOF).
         *
         * If the first getc is whitespace, stop instantly and return the empty
         * string.
         *
         * If the item is longer than some arbitrary (but large) limit, it is
         * truncated.
         *
         * The return value is owned by `sbuf` and must not be freed. It
         * is valid until the next get call to `sbuf`.
         * @returns the next block of non-whitespace, or `NULL` on EOF or read error.
         */
        get_non_whitespace(): string;
        /**
         * Fetch the next character from the source.
         *
         * If you can, use the macro {@link SBUF_GETC} instead for speed.
         * @returns the next char from `sbuf`, -1 on read error or EOF.
         */
        getc(): number;
        /**
         * Make sure there are at least `require` bytes of readahead available.
         * @param require make sure we have at least this many chars available
         * @returns 0 on success, -1 on error or EOF.
         */
        require(require: number): number;
        /**
         * After this, the next getc will be the first char of the next block of
         * non-whitespace (or EOF).
         *
         * Also skip comments, ie. from any '#' character to the end of the line.
         * @returns 0 on success, or -1 on EOF.
         */
        skip_whitespace(): number;
        /**
         * Discard the input buffer and reset the read point. You must call this
         * before using read or seek on the underlying {@link Source} class.
         */
        unbuffer(): void;
        /**
         * The opposite of {@link Sbuf.getc}: undo the previous getc.
         *
         * unget more than one character is undefined. Unget at the start of the file
         * does nothing.
         *
         * If you can, use the macro {@link SBUF_UNGETC} instead for speed.
         */
        ungetc(): void;
    }

    namespace Source {
        // Signal signatures
        interface SignalSignatures extends Connection.SignalSignatures {
            'notify::blob': (pspec: GObject.ParamSpec) => void;
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Connection.ConstructorProps {
            blob: Blob;
        }
    }

    /**
     * A {@link Source} provides a unified interface for reading, seeking, and
     * mapping data, regardless of the underlying source type.
     *
     * This source can originate from something like a socket, file or memory
     * area.
     *
     * During the header phase, we save data from unseekable sources in a buffer
     * so readers can rewind and read again. We don't buffer data during the
     * decode stage.
     * @gir-type Class
     */
    class Source extends Connection {
        static $gtype: GObject.GType<Source>;

        // Properties

        get blob(): Blob;
        set blob(val: Blob);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Source.SignalSignatures;

        // Fields

        parent_object: Connection;
        have_tested_seek: boolean;
        is_pipe: boolean;
        read_position: number;

        // Constructors

        constructor(properties?: Partial<Source.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_blob(blob: Blob): Source;

        static new_from_descriptor(descriptor: number): Source;

        static new_from_file(filename: string): Source;

        static new_from_memory(data: any | null, length: number): Source;

        static new_from_options(options: string): Source;

        static new_from_target(target: Target): Source;

        // Signals

        /** @signal */
        connect<K extends keyof Source.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Source.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Source.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Source.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Source.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Source.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Read up to `length` bytes from `source` and store the bytes in `buffer`.
         * Return the number of bytes actually read. If all bytes have been read from
         * the file, return 0.
         *
         * Arguments exactly as [`read()`](man:read(2)).
         * @param buffer store bytes here
         * @param length length of `buffer` in bytes
         * @virtual
         */
        vfunc_read(buffer: any | null, length: number): number;
        /**
         * Move the file read position. You can't call this after pixel decode starts.
         * The arguments are exactly as [`lseek()`](man:lseek(2)).
         * @param offset seek by this offset
         * @param whence seek relative to this point
         * @virtual
         */
        vfunc_seek(offset: number, whence: number): number;

        // Methods

        /**
         * Signal the end of header read and the start of the pixel decode phase.
         * After this, you can no longer seek on this source.
         *
         * Loaders should call this at the end of header read.
         *
         * ::: seealso
         *     {@link Source.unminimise}.
         * @returns 0 on success, -1 on error.
         */
        decode(): number;
        /**
         * Test if this source is a simple file with support for seek. Named pipes,
         * for example, will fail this test. If `TRUE`, you can use
         * {@link Connection.filename} to find the filename.
         *
         * Use this to add basic source support for older loaders which can only work
         * on files.
         * @returns `TRUE` if the source is a simple file.
         */
        is_file(): boolean;
        /**
         * Some sources can be efficiently mapped into memory.
         * You can still use {@link Source.map} if this function returns `FALSE`,
         * but it will be slow.
         * @returns `TRUE` if the source can be efficiently mapped into memory.
         */
        is_mappable(): boolean;
        /**
         * Return the length in bytes of the source. Unseekable sources, for
         * example pipes, will have to be read entirely into memory before the length
         * can be found, so this operation can take a long time.
         * @returns number of bytes in source, or -1 on error.
         */
        length(): number;
        /**
         * Map the source entirely into memory and return a pointer to the
         * start. If `length` is non-NULL, the source size is written to it.
         *
         * This operation can take a long time. Use {@link Source.is_mappable} to
         * check if a source can be mapped efficiently.
         *
         * The pointer is valid for as long as `source` is alive.
         * @param length return the file length here, or `NULL`
         * @returns a pointer to the start of the file contents, or `NULL` on error.
         */
        map(length: number): any | null;
        /**
         * Just like {@link Source.map}, but return a {@link Blob} containing the
         * pointer. `source` will stay alive as long as the result is alive.
         * @returns a new {@link Blob} containing the data, or `NULL` on error.
         */
        map_blob(): Blob;
        /**
         * Minimise the source. As many resources as can be safely removed are
         * removed. Use {@link Source.unminimise} to restore the source if you wish to
         * use it again.
         *
         * Loaders should call this in response to the minimise signal on their output
         * image.
         */
        minimise(): void;
        /**
         * Read up to `length` bytes from `source` and store the bytes in `buffer`.
         * Return the number of bytes actually read. If all bytes have been read from
         * the file, return 0.
         *
         * Arguments exactly as [`read()`](man:read(2)).
         * @param buffer store bytes here
         * @param length length of `buffer` in bytes
         * @returns the number of bytes read, 0 on end of file, -1 on error.
         */
        read(buffer: any | null, length: number): number;
        /**
         * Rewind the source to the start.
         *
         * You can't always do this after the pixel decode phase starts -- for
         * example, pipe-like sources can't be rewound.
         * @returns 0 on success, or -1 on error.
         */
        rewind(): number;
        /**
         * @param args
         */
        // Conflicted with Vips.Object.rewind
        rewind(...args: never[]): any;
        /**
         * Move the file read position. You can't call this after pixel decode starts.
         * The arguments are exactly as [`lseek()`](man:lseek(2)).
         * @param offset seek by this offset
         * @param whence seek relative to this point
         * @returns the new file position, or -1 on error.
         */
        seek(offset: number, whence: number): number;
        /**
         * Return a pointer to the first few bytes of the file. If the file is too
         * short, return `NULL`.
         * @param length number of bytes to sniff
         * @returns a pointer to the bytes at the start of the file, or `NULL` on error.
         */
        sniff(length: number): number;
        /**
         * Attempt to sniff at most `length` bytes from the start of the source. A
         * pointer to the bytes is returned in `data`. The number of bytes actually
         * read is returned -- it may be less than `length` if the file is shorter than
         * `length`. A negative number indicates a read error.
         * @param data return a pointer to the bytes read here
         * @param length max number of bytes to read
         * @returns number of bytes read, or -1 on error.
         */
        sniff_at_most(data: number, length: number): number;
        /**
         * Restore the source after minimisation. This is called at the start
         * of every source method, so loaders should not usually need this.
         *
         * ::: seealso
         *     {@link Source.minimise}.
         * @returns 0 on success, or -1 on error.
         */
        unminimise(): number;
    }

    namespace SourceCustom {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            /**
             * This signal is emitted to read bytes from the source into `buffer`.
             * @signal
             * @action
             */
            read: (arg0: any | null, arg1: number) => number;
            /**
             * This signal is emitted to seek the source. The handler should
             * change the source position appropriately.
             *
             * The handler for an unseekable source should always return -1.
             * @signal
             * @action
             */
            seek: (arg0: number, arg1: number) => number;
            'notify::blob': (pspec: GObject.ParamSpec) => void;
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {}
    }

    /**
     * Subclass of {@link Source} with action signals for handlers.
     *
     * This is supposed to be useful for language bindings.
     * @gir-type Class
     */
    class SourceCustom extends Source {
        static $gtype: GObject.GType<SourceCustom>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceCustom.SignalSignatures;

        // Fields

        parent_object: Source;

        // Constructors

        constructor(properties?: Partial<SourceCustom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SourceCustom;

        // Signals

        /** @signal */
        connect<K extends keyof SourceCustom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceCustom.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceCustom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceCustom.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceCustom.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceCustom.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param buffer
         * @param length
         * @virtual
         */
        vfunc_read(buffer: any | null, length: number): number;
        /**
         * @param offset
         * @param whence
         * @virtual
         */
        vfunc_seek(offset: number, whence: number): number;
    }

    namespace SourceGInputStream {
        // Signal signatures
        interface SignalSignatures extends Source.SignalSignatures {
            'notify::stream': (pspec: GObject.ParamSpec) => void;
            'notify::blob': (pspec: GObject.ParamSpec) => void;
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Source.ConstructorProps {
            stream: Gio.InputStream;
        }
    }

    /**
     * @gir-type Class
     */
    class SourceGInputStream extends Source {
        static $gtype: GObject.GType<SourceGInputStream>;

        // Properties

        get stream(): Gio.InputStream;
        set stream(val: Gio.InputStream);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceGInputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceGInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: Gio.InputStream): SourceGInputStream;

        // Signals

        /** @signal */
        connect<K extends keyof SourceGInputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceGInputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceGInputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceGInputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceGInputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceGInputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Target {
        // Signal signatures
        interface SignalSignatures extends Connection.SignalSignatures {
            'notify::blob': (pspec: GObject.ParamSpec) => void;
            'notify::memory': (pspec: GObject.ParamSpec) => void;
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Connection.ConstructorProps {
            blob: Blob;
            memory: boolean;
        }
    }

    /**
     * A {@link Target} provides a unified interface for writing data to various
     * output destinations.
     *
     * This target could be a socket, file, memory area, or any other destination
     * that accepts byte data.
     * @gir-type Class
     */
    class Target extends Connection {
        static $gtype: GObject.GType<Target>;

        // Properties

        get blob(): Blob;
        set blob(val: Blob);
        get memory(): boolean;
        set memory(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Target.SignalSignatures;

        // Fields

        parent_object: Connection;

        // Constructors

        constructor(properties?: Partial<Target.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_temp(based_on: Target): Target;

        static new_to_descriptor(descriptor: number): Target;

        static new_to_file(filename: string): Target;

        static new_to_memory(): Target;

        // Signals

        /** @signal */
        connect<K extends keyof Target.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Target.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Target.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Target.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Target.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Target.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Call this at the end of write to make the target do any cleaning up. You
         * can call it many times.
         *
         * After a target has been ended, further writes will do nothing.
         * @virtual
         */
        vfunc_end(): number;
        /**
         * @virtual
         */
        vfunc_finish(): void;
        /**
         * Read up to `length` bytes from `target` and store the bytes in `buffer`.
         * Return the number of bytes actually read. If all bytes have been read from
         * the file, return 0.
         *
         * Arguments exactly as [`read()`](man:read(2)).
         *
         * Reading from a target sounds weird, but libtiff needs this for
         * multi-page writes. This method will fail for targets like pipes.
         * @param buffer store bytes here
         * @param length length of `buffer` in bytes
         * @virtual
         */
        vfunc_read(buffer: any | null, length: number): number;
        /**
         * Seek the target. This behaves exactly as [`lseek()`](man:lseek(2)).
         *
         * Seeking a target sounds weird, but libtiff needs this. This method will
         * fail for targets like pipes.
         * @param offset offset to seek to
         * @param whence seek relative to beginning, offset, or end
         * @virtual
         */
        vfunc_seek(offset: number, whence: number): number;
        /**
         * @param data
         * @param length
         * @virtual
         */
        vfunc_write(data: any | null, length: number): number;

        // Methods

        /**
         * Call this at the end of write to make the target do any cleaning up. You
         * can call it many times.
         *
         * After a target has been ended, further writes will do nothing.
         * @returns 0 on success, -1 on error.
         */
        end(): number;
        /**
         * Write a single character `ch` to `target`. See the macro {@link TARGET_PUTC}
         * for a faster way to do this.
         * @param ch character to write
         * @returns 0 on success, -1 on error.
         */
        putc(ch: number): number;
        /**
         * Read up to `length` bytes from `target` and store the bytes in `buffer`.
         * Return the number of bytes actually read. If all bytes have been read from
         * the file, return 0.
         *
         * Arguments exactly as [`read()`](man:read(2)).
         *
         * Reading from a target sounds weird, but libtiff needs this for
         * multi-page writes. This method will fail for targets like pipes.
         * @param buffer store bytes here
         * @param length length of `buffer` in bytes
         * @returns the number of bytes read, 0 on end of file, -1 on error.
         */
        read(buffer: any | null, length: number): number;
        /**
         * Seek the target. This behaves exactly as [`lseek()`](man:lseek(2)).
         *
         * Seeking a target sounds weird, but libtiff needs this. This method will
         * fail for targets like pipes.
         * @param offset offset to seek to
         * @param whence seek relative to beginning, offset, or end
         * @returns the new offset, -1 on error.
         */
        seek(offset: number, whence: number): number;
        /**
         * Memory targets only (see {@link Target.new_to_memory}). Steal all data
         * written to the target so far, and call {@link Target.end}.
         *
         * You must free the returned pointer with {@link GLib.free}.
         *
         * The data is NOT automatically null-terminated. Use {@link Target.putc} with
         * a '\0' before calling this to get a null-terminated string.
         *
         * You can't call this after {@link Target.end}, since that moves the data to a
         * blob, and we can't steal from that in case the pointer has been shared.
         *
         * You can't call this function more than once.
         * @returns the data
         */
        steal(): Uint8Array;
        /**
         * As {@link Target.steal}, but return a null-terminated string.
         * @returns target contents as a null-terminated string.
         */
        steal_text(): string;
        /**
         * Write `length` bytes from `data` to the output.
         * @param data data to write
         * @param length length of `data` in bytes
         * @returns 0 on success, -1 on error.
         */
        write(data: any | null, length: number): number;
        /**
         * Write `str` to `target`, but escape stuff that xml hates in text. Our
         * argument string is utf-8.
         *
         * XML rules:
         *
         * - We must escape &<>
         * - Don't escape \n, \t, \r
         * - Do escape the other ASCII codes.
         * @param str string to write
         * @returns 0 on success, -1 on error.
         */
        write_amp(str: string): number;
        /**
         * Write a null-terminated string to `target`.
         * @param str string to write
         * @returns 0 on success, and -1 on error.
         */
        writes(str: string): number;
    }

    namespace TargetCustom {
        // Signal signatures
        interface SignalSignatures extends Target.SignalSignatures {
            /**
             * This signal is emitted at the end of write. The target should do
             * any finishing necessary.
             * @signal
             * @action
             */
            end: () => number;
            /**
             * Deprecated for `Vips.TargetCustom::end`.
             * @signal
             * @action
             */
            finish: () => void;
            /**
             * This signal is emitted to read bytes from the target into `buffer`.
             *
             * The handler for an unreadable target should always return -1.
             * @signal
             * @action
             */
            read: (arg0: any | null, arg1: number) => number;
            /**
             * This signal is emitted to seek the target. The handler should
             * change the target position appropriately.
             *
             * The handler for an unseekable target should always return -1.
             * @signal
             * @action
             */
            seek: (arg0: number, arg1: number) => number;
            /**
             * This signal is emitted to write bytes to the target.
             * @signal
             * @action
             */
            write: (arg0: any | null, arg1: number) => number;
            'notify::blob': (pspec: GObject.ParamSpec) => void;
            'notify::memory': (pspec: GObject.ParamSpec) => void;
            'notify::descriptor': (pspec: GObject.ParamSpec) => void;
            'notify::filename': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Target.ConstructorProps {}
    }

    /**
     * Subclass of {@link Target} with action signals for handlers.
     *
     * This is supposed to be useful for language bindings.
     * @gir-type Class
     */
    class TargetCustom extends Target {
        static $gtype: GObject.GType<TargetCustom>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TargetCustom.SignalSignatures;

        // Fields

        parent_object: Target;

        // Constructors

        constructor(properties?: Partial<TargetCustom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TargetCustom;

        // Signals

        /** @signal */
        connect<K extends keyof TargetCustom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TargetCustom.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TargetCustom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TargetCustom.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TargetCustom.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TargetCustom.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_end(): number;
        /**
         * @virtual
         */
        vfunc_finish(): void;
        /**
         * @param buffer
         * @param length
         * @virtual
         */
        vfunc_read(buffer: any | null, length: number): number;
        /**
         * @param offset
         * @param whence
         * @virtual
         */
        vfunc_seek(offset: number, whence: number): number;
        /**
         * @param data
         * @param length
         * @virtual
         */
        vfunc_write(data: any | null, length: number): number;
    }

    namespace ThreadState {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::nickname': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A {@link ThreadState} represents a per-thread state.
     *
     * {@link ThreadpoolAllocateFn} functions can use these members to
     * communicate with {@link ThreadpoolWorkFn} functions.
     *
     * ::: seealso
     *     {@link threadpool_run}.
     * @gir-type Class
     */
    class ThreadState extends Object {
        static $gtype: GObject.GType<ThreadState>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ThreadState.SignalSignatures;

        // Fields

        parent_object: Object;
        im: Image;
        reg: Region;
        pos: Rect;
        x: number;
        y: number;
        stop: boolean;
        a: any;
        stall: boolean;

        // Constructors

        constructor(properties?: Partial<ThreadState.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](im: Image, a?: any | null): ThreadState;

        // Signals

        /** @signal */
        connect<K extends keyof ThreadState.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadState.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ThreadState.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadState.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ThreadState.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThreadState.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param object
         * @param a
         * @param b
         */
        static set(object: Object, a?: any | null, b?: any | null): any | null;
    }

    /**
     * @gir-type Struct
     */
    class Area {
        static $gtype: GObject.GType<Area>;

        // Fields

        data: any;
        length: number;
        n: number;

        // Constructors

        constructor(free_fn?: CallbackFn | null);

        static ['new'](free_fn?: CallbackFn | null): Area;

        static new_array(type: GObject.GType, sizeof_type: number, n: number): Area;

        static new_array_object(n: number): Area;

        // Static methods

        /**
         * @param mem
         * @param area
         */
        static free_cb(mem: any | null, area: Area): number;

        // Methods

        copy(): Area;
        /**
         * Return the data pointer plus optionally the length in bytes of an area,
         * the number of elements, the {@link GObject.Type} of each element and the
         * `sizeof()` each element.
         * @returns The pointer held by `area`.
         */
        get_data(): [any | null, number, number, GObject.GType | null, number];
        unref(): void;
    }

    /**
     * libvips has a simple mechanism for automating at least some aspects of
     * {@link GObject.Object} properties. You add a set of macros to your
     * `_class_init()` which describe the arguments, and set the get and set
     * functions to the libvips ones.
     *
     * See [extending](extending.html) for a complete example.
     * @gir-type Struct
     */
    class Argument {
        static $gtype: GObject.GType<Argument>;

        // Fields

        pspec: GObject.ParamSpec;

        // Static methods

        /**
         * Loop over the {@link Argument} of an object. Stop when `fn` returns non-`NULL`
         * and return that value.
         * @param object object whose args should be enumerated
         * @param fn call this function for every argument
         * @param b client data
         */
        static map(object: Object, fn: ArgumentMapFn, b?: any | null): any | null;
    }

    /**
     * @gir-type Struct
     */
    class ArgumentClass {
        static $gtype: GObject.GType<ArgumentClass>;

        // Fields

        flags: ArgumentFlags;
        priority: number;
        offset: number;

        // Methods

        needsstring(): boolean;
    }

    /**
     * @gir-type Struct
     */
    class ArgumentInstance {
        static $gtype: GObject.GType<ArgumentInstance>;

        // Fields

        object: Object;
        assigned: boolean;
        close_id: number;
        invalidate_id: number;
    }

    /**
     * @gir-type Struct
     */
    class ArrayDouble {
        static $gtype: GObject.GType<ArrayDouble>;

        // Constructors

        constructor(array: number[]);

        static ['new'](array: number[]): ArrayDouble;

        // Methods

        /**
         * Fetch a double array from a {@link ArrayDouble}. Useful for language bindings.
         * @returns array of double
         */
        get(): number[];
    }

    /**
     * @gir-type Struct
     */
    class ArrayImage {
        static $gtype: GObject.GType<ArrayImage>;

        // Constructors

        constructor(
            properties?: Partial<{
                area: Area;
            }>,
        );

        static empty(): ArrayImage;

        static ['new'](array: Image[]): ArrayImage;

        static new_from_string(string: string, flags: Access): ArrayImage;

        // Methods

        /**
         * Make a new {@link ArrayImage}, one larger than `array`, with `image` appended
         * to the end.
         * Handy with {@link ArrayImage.empty} for bindings
         * which can't handle object array arguments.
         *
         * ::: seealso
         *     {@link ArrayImage.empty}.
         * @param image add this
         * @returns A new {@link ArrayImage}.
         */
        append(image: Image): ArrayImage;
        /**
         * Fetch an image array from a {@link ArrayImage}. Useful for language bindings.
         * @returns array of {@link Image}
         */
        get(): Image[];
    }

    /**
     * @gir-type Struct
     */
    class ArrayInt {
        static $gtype: GObject.GType<ArrayInt>;

        // Constructors

        constructor(array: number[]);

        static ['new'](array: number[]): ArrayInt;

        // Methods

        /**
         * Fetch an int array from a {@link ArrayInt}. Useful for language bindings.
         * @returns array of int
         */
        get(): number[];
    }

    /**
     * @gir-type Struct
     */
    class Blob {
        static $gtype: GObject.GType<Blob>;

        // Constructors

        constructor(free_fn: CallbackFn | null, data: Uint8Array | string);

        static ['new'](free_fn: CallbackFn | null, data: Uint8Array | string): Blob;

        // Static methods

        /**
         * Like {@link Blob.new}, but take a copy of the data. Useful for bindings
         * which struggle with callbacks.
         *
         * ::: seealso
         *     {@link Blob.new}.
         * @param data data to store
         */
        static copy(data: Uint8Array | string): Blob;

        // Methods

        /**
         * Get the data from a {@link Blob}.
         *
         * ::: seealso
         *     {@link Blob.new}.
         * @returns the data
         */
        get(): Uint8Array;
        /**
         * Any old data is freed and new data attached.
         *
         * It's sometimes useful to be able to create blobs as empty and then fill
         * them later.
         *
         * ::: seealso
         *     {@link Blob.new}.
         * @param free_fn `data` will be freed with this function
         * @param data data to store
         */
        set(free_fn: CallbackFn | null, data: Uint8Array | string): void;
    }

    /**
     * A message buffer you can append stuff to safely and quickly. If the message
     * gets too long, you get "..." and truncation. Message buffers can be on the
     * stack or heap.
     *
     * For example:
     *
     * ```c
     * char txt[256];
     * VipsBuf buf = VIPS_BUF_STATIC(txt);
     * int i;
     *
     * vips_buf_appends(&buf, "Numbers are: ");
     * for (i = 0; i < array_length; i++) {
     *     if (i > 0)
     *         vips_buf_appends(&buf, ", ");
     *     vips_buf_appendg(&buf, array[i]);
     * }
     * printf("%s", vips_buf_all(&buf));
     * ```
     * @gir-type Struct
     */
    class Buf {
        static $gtype: GObject.GType<Buf>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Return the contents of the buffer as a C string.
         * @returns the `NULL`-terminated contents of the buffer. This is a pointer to the memory managed by the buffer and must not be freed.
         */
        all(): string;
        /**
         * Turn a number of bytes into a sensible string ... eg "12", "12KB", "12MB",
         * "12GB" etc.
         * @param n the number of bytes
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        append_size(n: number): boolean;
        /**
         * Append a single character `ch` to `buf`.
         * @param ch the character to append to the buffer
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        appendc(ch: number): boolean;
        /**
         * Append a number. If the number is -ve, add brackets. Needed for
         * building function arguments.
         * @param d value to format and append
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        appendd(d: number): boolean;
        /**
         * Append a double, non-localised. Useful for config files etc.
         * @param g value to format and append
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        appendg(g: number): boolean;
        /**
         * Format and append a {@link GObject.Value} as a printable thing.
         * We display text like "3144 bytes of binary data" for BLOBs like icc-profile-data.
         *
         * Use {@link Image.get_as_string} to make a text representation of a field.
         * That will base64-encode blobs, for example.
         * @param value {@link GObject.Value} to format and append
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        appendgv(value: GObject.Value | any): boolean;
        /**
         * Append at most `sz` chars from `str` to `buf`. `sz` < 0 means unlimited. This
         * is the low-level append operation: functions like {@link Buf.appendf} build
         * on top of this.
         * @param str the string to append to the buffer
         * @param sz the size of the string to append
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        appendns(str: string, sz: number): boolean;
        /**
         * Append the whole of `str` to `buf`.
         * @param str the string to append to the buffer
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        appends(str: string): boolean;
        /**
         * Swap the rightmost occurrence of `o` for `n`.
         * @param o the string to search for
         * @param n the string to substitute
         * @returns `FALSE` on overflow, `TRUE` otherwise.
         */
        change(o: string, n: string): boolean;
        /**
         * Destroy a buffer. Only needed for heap buffers. Leaves the buffer in the
         * _init state.
         */
        destroy(): void;
        /**
         * Trim to just the first line (excluding "\n").
         * @returns the `NULL`-terminated contents of the buffer. This is a pointer to the memory managed by the buffer and must not be freed.
         */
        firstline(): string;
        /**
         * Initialize a buffer.
         */
        init(): void;
        /**
         * Initialise and attach to a heap memory area.
         * The memory area needs to be at least 4 bytes long.
         *
         * ```c
         * VipsBuf buf;
         *
         * vips_buf_init_dynamic(&buf, 256);
         * ```
         *
         * Dynamic buffers must be freed with {@link Buf.destroy}, but their size can
         * be set at runtime.
         * @param mx the size of the storage area
         */
        init_dynamic(mx: number): void;
        /**
         * Initialise and attach to a static memory area. {@link BUF_STATIC} is usually
         * more convenient.
         *
         * For example:
         *
         * ```c
         * char txt[256];
         * VipsBuf buf;
         *
         * vips_buf_init_static(&buf, txt, 256);
         * ```
         *
         * Static buffers don't need to be freed when they go out of scope, but their
         * size must be set at compile-time.
         * @param base the start of the memory area to use for storage
         * @param mx the size of the storage area
         */
        init_static(base: string, mx: number): void;
        /**
         * @returns `TRUE` if the buffer is empty.
         */
        is_empty(): boolean;
        /**
         * @returns `TRUE` if the buffer is full.
         */
        is_full(): boolean;
        /**
         * @returns the number of characters currently in the buffer.
         */
        len(): number;
        /**
         * Remove the last character, if it's `ch`.
         * @param ch the character to remove
         * @returns `TRUE` if a character was removed, `FALSE` otherwise.
         */
        removec(ch: number): boolean;
        /**
         * Reset the buffer to the empty string.
         */
        rewind(): void;
        /**
         * Attach the buffer to a heap memory area. The buffer needs to have been
         * initialised. The memory area needs to be at least 4 bytes long.
         * @param mx the size of the storage area
         */
        set_dynamic(mx: number): void;
        /**
         * Attach the buffer to a static memory area. The buffer needs to have been
         * initialised. The memory area needs to be at least 4 bytes long.
         * @param base the start of the memory area to use for storage
         * @param mx the size of the storage area
         */
        set_static(base: string, mx: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ConnectionClass = typeof Connection;
    /**
     * @gir-type Struct
     */
    class Dbuf {
        static $gtype: GObject.GType<Dbuf>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Make sure `dbuf` has at least `size` bytes available after the write point.
         * @param size the size to allocate
         * @returns `FALSE` on out of memory, `TRUE` otherwise.
         */
        allocate(size: number): boolean;
        /**
         * Destroy `dbuf`. This frees any allocated memory. Useful for dbufs on the
         * stack.
         */
        destroy(): void;
        /**
         * Return a pointer to an area you can write to, return length of area in
         * `size`. Use {@link Dbuf.allocate} before this call to set a minimum amount of
         * space to have available.
         *
         * The write point moves to just beyond the returned block. Use
         * {@link Dbuf.seek} to move it back again.
         * @param size optionally return length in bytes here
         * @returns start of write area.
         */
        get_write(size?: number | null): number;
        /**
         * Initialize `dbuf`. You can also just init to zero, eg.
         * `VipsDbuf buf = {0};`.
         *
         * Destroy with {@link Dbuf.destroy}.
         */
        init(): void;
        /**
         * Make sure `dbuf` is at least `size` bytes.
         * @param size the minimum size
         * @returns `FALSE` on out of memory, `TRUE` otherwise.
         */
        minimum_size(size: number): boolean;
        /**
         * Up to `size` bytes are read from the buffer and copied to `data`. The number
         * of bytes transferred is returned.
         * @param data read to this area
         * @param size read up to this many bytes
         * @returns the number of bytes transferred.
         */
        read(data: number, size: number): number;
        /**
         * Reset the buffer to empty. No memory is freed, just the data size and
         * write point are reset.
         */
        reset(): void;
        /**
         * Move the write point. `whence` can be `SEEK_SET`, `SEEK_CUR`, `SEEK_END`, with
         * the usual meaning.
         * @param offset how to move the write point
         * @param whence from start, from end, from current
         */
        seek(offset: never, whence: number): boolean;
        /**
         * Destroy a buffer, but rather than freeing memory, a pointer is returned.
         * This must be freed with {@link GLib.free}.
         *
         * A `\0` is appended, but not included in the character count. This is so the
         * pointer can be safely treated as a C string.
         * @param size optionally return length in bytes here
         * @returns The pointer held by `dbuf`.
         */
        steal(size?: number | null): number;
        /**
         * Return a pointer to `dbuf`'s internal data.
         *
         * A `\0` is appended, but not included in the character count. This is so the
         * pointer can be safely treated as a C string.
         * @param size optionally return length in bytes here
         * @returns The pointer held by `dbuf`.
         */
        string(size?: number | null): number;
        /**
         * @returns the current write point
         */
        tell(): never;
        /**
         * Truncate the data so that it ends at the write point. No memory is freed.
         */
        truncate(): void;
        /**
         * Append `size` bytes from `data`. `dbuf` expands if necessary.
         * @param data the data to write to the buffer
         * @param size the size of the len to write
         * @returns `FALSE` on out of memory, `TRUE` otherwise.
         */
        write(data: number, size: number): boolean;
        /**
         * Write `str` to `dbuf`, but escape stuff that xml hates in text. Our
         * argument string is utf-8.
         *
         * XML rules:
         *
         * - We must escape &<>
         * - Don't escape \n, \t, \r
         * - Do escape the other ASCII codes.
         * @param str string to write
         * @returns `FALSE` on out of memory, `TRUE` otherwise.
         */
        write_amp(str: string): boolean;
    }

    /**
     * @gir-type Alias
     */
    type ForeignClass = typeof Foreign;
    /**
     * @gir-type Alias
     */
    type ForeignLoadClass = typeof ForeignLoad;
    /**
     * @gir-type Alias
     */
    type ForeignSaveClass = typeof ForeignSave;
    /**
     * @gir-type Alias
     */
    type GInputStreamClass = typeof GInputStream;
    /**
     * @gir-type Alias
     */
    type ImageClass = typeof Image;
    /**
     * @gir-type Alias
     */
    type InterpolateClass = typeof Interpolate;
    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Alias
     */
    type OperationClass = typeof Operation;
    /**
     * A structure available to eval callbacks giving information on evaluation
     * progress. See `Vips.Image::eval`.
     * @gir-type Struct
     */
    class Progress {
        static $gtype: GObject.GType<Progress>;

        // Fields

        run: number;
        eta: number;
        tpels: number;
        npels: number;
        percent: number;

        // Static methods

        /**
         * If set, vips will print messages about the progress of computation to
         * stdout. This can also be enabled with the `--vips-progress` option, or by
         * setting the environment variable `VIPS_PROGRESS`.
         * @param progress `TRUE` to enable progress messages
         */
        static set(progress: boolean): void;
    }

    /**
     * A {@link Rect} is a rectangular area of pixels. This is a struct for
     * performing simple rectangle algebra.
     * @gir-type Struct
     */
    class Rect {
        static $gtype: GObject.GType<Rect>;

        // Fields

        left: number;
        top: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                left: number;
                top: number;
                width: number;
                height: number;
            }>,
        );

        // Methods

        /**
         * Is `r1` equal to `r2`?
         * @param r2 second rectangle
         * @returns `TRUE` if `r1` is equal to `r2`.
         */
        equalsrect(r2: Rect): boolean;
        /**
         * Does `r` contain point (`x`, `y`)?
         * @param x position to test for
         * @param y position to test for
         * @returns `TRUE` if `r` contains (`x`, `y`).
         */
        includespoint(x: number, y: number): boolean;
        /**
         * Is `r2` a subset of `r1`?
         * @param r2 inner rectangle
         * @returns `TRUE` if `r2` is a subset of `r1`.
         */
        includesrect(r2: Rect): boolean;
        /**
         * Fill `out` with the intersection of `r1` and `r2`. `out` can equal `r1` or `r2`.
         * @param r2 input rectangle 2
         */
        intersectrect(r2: Rect): Rect;
        /**
         * Is `r` empty? ie. zero width or height.
         * @returns `TRUE` if `r` contains no pixels.
         */
        isempty(): boolean;
        /**
         * Enlarge `r` by `n`. +1 means out one pixel.
         * @param n enlarge by
         */
        marginadjust(n: number): void;
        /**
         * Make sure width and height are >0 by moving the origin and flipping the
         * rect.
         */
        normalise(): void;
        /**
         * Do `r1` and `r2` have a non-empty intersection?
         * @param r2 second rectangle
         * @returns `TRUE` if `r2` and `r1` overlap.
         */
        overlapsrect(r2: Rect): boolean;
        /**
         * Fill `out` with the bounding box of `r1` and `r2`. `out` can equal `r1` or `r2`.
         * @param r2 input rectangle 2
         */
        unionrect(r2: Rect): Rect;
    }

    /**
     * @gir-type Struct
     */
    class RefString {
        static $gtype: GObject.GType<RefString>;

        // Constructors

        constructor(str: string);

        static ['new'](str: string): RefString;

        // Methods

        /**
         * Get a pointer to the private string inside a refstr. Handy for language
         * bindings.
         *
         * ::: seealso
         *     {@link value_get_ref_string}.
         * @returns The C string held by `refstr`.
         */
        get(): [string, number];
    }

    /**
     * @gir-type Alias
     */
    type RegionClass = typeof Region;
    /**
     * @gir-type Struct
     */
    class SaveString {
        static $gtype: GObject.GType<SaveString>;

        // Fields

        s: string;

        // Constructors

        constructor(
            properties?: Partial<{
                s: string;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type SbufClass = typeof Sbuf;
    /**
     * @gir-type Struct
     */
    class Semaphore {
        static $gtype: GObject.GType<Semaphore>;

        // Methods

        destroy(): void;
        down(): number;
        /**
         * @param timeout
         */
        down_timeout(timeout: number): number;
        /**
         * @param n
         */
        downn(n: number): number;
        /**
         * @param v
         * @param name
         */
        init(v: number, name: string): void;
        up(): number;
        /**
         * @param n
         */
        upn(n: number): number;
    }

    /**
     * @gir-type Alias
     */
    type SourceClass = typeof Source;
    /**
     * @gir-type Alias
     */
    type SourceCustomClass = typeof SourceCustom;
    /**
     * @gir-type Alias
     */
    type SourceGInputStreamClass = typeof SourceGInputStream;
    /**
     * @gir-type Alias
     */
    type TargetClass = typeof Target;
    /**
     * @gir-type Alias
     */
    type TargetCustomClass = typeof TargetCustom;
    /**
     * @gir-type Alias
     */
    type ThreadStateClass = typeof ThreadState;
    /**
     * @gir-type Alias
     */
    type ArgumentTable = GLib.HashTable;
    /**
     * A picture element. Cast this to whatever the associated VipsBandFormat says
     * to get the value.
     * @gir-type Alias
     */
    type Pel = number;
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

export default Vips;

// END
