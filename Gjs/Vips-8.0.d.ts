/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vips-8.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Vips {

/**
 * The type of access an operation has to supply. See vips_tilecache()
 * and #VipsForeign.
 * 
 * `VIPS_ACCESS_RANDOM` means requests can come in any order.
 * 
 * `VIPS_ACCESS_SEQUENTIAL` means requests will be top-to-bottom, but with some
 * amount of buffering behind the read point for small non-local accesses.
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
    SEQUENTIAL_UNBUFFERED,
    LAST,
}
/**
 * See vips_join() and so on.
 * 
 * Operations like vips_join() need to be told whether to align images on the
 * low or high coordinate edge, or centre.
 * 
 * See also: vips_join().
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
    LAST,
}
/**
 * See vips_rot() and so on.
 * 
 * Fixed rotate angles.
 * 
 * See also: vips_rot().
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
    LAST,
}
/**
 * See vips_rot45() and so on.
 * 
 * Fixed rotate angles.
 * 
 * See also: vips_rot45().
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
    LAST,
}
/**
 * The format used for each band element.
 * 
 * Each corresponds to a native C type for the current machine. For example,
 * #VIPS_FORMAT_USHORT is <type>unsigned short</type>.
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
    LAST,
}
/**
 * The various Porter-Duff and PDF blend modes. See vips_composite(),
 * for example.
 * 
 * The Cairo docs have a nice explanation of all the blend modes:
 * 
 * https://www.cairographics.org/operators
 * 
 * The non-separable modes are not implemented.
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
    LAST,
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
    LAST,
}
/**
 * How to combine values. See vips_compass(), for example.
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
    LAST,
}
/**
 * See vips_draw_image() and so on.
 * 
 * Operations like vips_draw_image() need to be told how to combine images
 * from two sources.
 * 
 * See also: vips_join().
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
    LAST,
}
/**
 * A direction on a compass. Used for vips_gravity(), for example.
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
    LAST,
}
/**
 * See vips_image_pipelinev(). Operations can hint to the VIPS image IO
 * system about the kind of demand geometry they prefer.
 * 
 * These demand styles are given below in order of increasing
 * restrictiveness.  When demanding output from a pipeline,
 * vips_image_generate()
 * will use the most restrictive of the styles requested by the operations
 * in the pipeline.
 * 
 * #VIPS_DEMAND_STYLE_THINSTRIP --- This operation would like to output strips
 * the width of the image and a few pels high. This is option suitable for
 * point-to-point operations, such as those in the arithmetic package.
 * 
 * This option is only efficient for cases where each output pel depends
 * upon the pel in the corresponding position in the input image.
 * 
 * #VIPS_DEMAND_STYLE_FATSTRIP --- This operation would like to output strips
 * the width of the image and as high as possible. This option is suitable
 * for area operations which do not violently transform coordinates, such
 * as vips_conv().
 * 
 * #VIPS_DEMAND_STYLE_SMALLTILE --- This is the most general demand format.
 * Output is demanded in small (around 100x100 pel) sections. This style works
 * reasonably efficiently, even for bizzare operations like 45 degree rotate.
 * 
 * #VIPS_DEMAND_STYLE_ANY --- This image is not being demand-read from a disc
 * file (even indirectly) so any demand style is OK. It's used for things like
 * vips_black() where the pixels are calculated.
 * 
 * See also: vips_image_pipelinev().
 */
enum DemandStyle {
    ERROR,
    /**
     * demand in small (typically 64x64 pixel) tiles
     */
    SMALLTILE,
    /**
     * demand in fat (typically 10 pixel high) strips
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
 * See vips_flip(), vips_join() and so on.
 * 
 * Operations like vips_flip() need to be told whether to flip left-right or
 * top-bottom.
 * 
 * See also: vips_flip(), vips_join().
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
    LAST,
}
/**
 * See vips_embed(), vips_conv(), vips_affine() and so on.
 * 
 * When the edges of an image are extended, you can specify
 * how you want the extension done.
 * 
 * #VIPS_EXTEND_BLACK --- new pixels are black, ie. all bits are zero.
 * 
 * #VIPS_EXTEND_COPY --- each new pixel takes the value of the nearest edge
 * pixel
 * 
 * #VIPS_EXTEND_REPEAT --- the image is tiled to fill the new area
 * 
 * #VIPS_EXTEND_MIRROR --- the image is reflected and tiled to reduce hash
 * edges
 * 
 * #VIPS_EXTEND_WHITE --- new pixels are white, ie. all bits are set
 * 
 * #VIPS_EXTEND_BACKGROUND --- colour set from the `background` property
 * 
 * We have to specify the exact value of each enum member since we have to
 * keep these frozen for back compat with vips7.
 * 
 * See also: vips_embed().
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
    LAST,
}
/**
 * How sensitive loaders are to errors, from never stop (very insensitive), to
 * stop on the smallest warning (very sensitive).
 * 
 * Each one implies the ones before it, so #VIPS_FAIL_ON_ERROR implies
 * #VIPS_FAIL_ON_TRUNCATED.
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
    LAST,
}
/**
 * How many pyramid layers to create.
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
    LAST,
}
/**
 * How many pyramid layers to create.
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
    LAST,
}
/**
 * What directory layout and metadata standard to use.
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
    LAST,
}
/**
 * The compression format to use inside a HEIF container.
 * 
 * This is assumed to use the same numbering as %heif_compression_format.
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
    LAST,
}
/**
 * Set jpeg subsampling mode.
 */
enum ForeignJpegSubsample {
    /**
     * default preset
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
    LAST,
}
/**
 * The netpbm file format to save as.
 * 
 * #VIPS_FOREIGN_PPM_FORMAT_PBM images are single bit.
 * 
 * #VIPS_FOREIGN_PPM_FORMAT_PGM images are 8, 16, or 32-bits, one band.
 * 
 * #VIPS_FOREIGN_PPM_FORMAT_PPM images are 8, 16, or 32-bits, three bands.
 * 
 * #VIPS_FOREIGN_PPM_FORMAT_PFM images are 32-bit float pixels.
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
    LAST,
}
/**
 * Set subsampling mode.
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
    LAST,
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
    LAST,
}
/**
 * The predictor can help deflate and lzw compression. The values are fixed by
 * the tiff library.
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
    LAST,
}
/**
 * Use inches or centimeters as the resolution unit for a tiff file.
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
    LAST,
}
/**
 * Tune lossy encoder settings for different image types.
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
    LAST,
}
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
 * The rendering intent. #VIPS_INTENT_ABSOLUTE is best for
 * scientific work, #VIPS_INTENT_RELATIVE is usually best for
 * accurate communication with other imaging libraries.
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
    LAST,
}
/**
 * Pick the algorithm vips uses to decide image "interestingness". This is used
 * by vips_smartcrop(), for example, to decide what parts of the image to
 * keep.
 * 
 * #VIPS_INTERESTING_NONE and #VIPS_INTERESTING_LOW mean the same -- the
 * crop is positioned at the top or left. #VIPS_INTERESTING_HIGH positions at
 * the bottom or right.
 * 
 * See also: vips_smartcrop().
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
    LAST,
}
/**
 * How the values in an image should be interpreted. For example, a
 * three-band float image of type #VIPS_INTERPRETATION_LAB should have its
 * pixels interpreted as coordinates in CIE Lab space.
 * 
 * RGB and sRGB are treated in the same way. Use the colourspace functions if
 * you want some other behaviour.
 * 
 * The gaps in numbering are historical and must be maintained. Allocate
 * new numbers from the end.
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
     * implies #VIPS_CODING_LABQ
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
    LAST,
}
/**
 * The resampling kernels vips supports. See vips_reduce(), for example.
 */
enum Kernel {
    /**
     * The nearest pixel to the point.
     */
    NEAREST,
    /**
     * Convolve with a triangle filter.
     */
    LINEAR,
    /**
     * Convolve with a cubic filter.
     */
    CUBIC,
    /**
     * Convolve with a Mitchell kernel.
     */
    MITCHELL,
    /**
     * Convolve with a two-lobe Lanczos kernel.
     */
    LANCZOS2,
    /**
     * Convolve with a three-lobe Lanczos kernel.
     */
    LANCZOS3,
    LAST,
}
/**
 * See also: vips_boolean().
 */
enum OperationBoolean {
    /**
     * &
     */
    AND,
    /**
     * |
     */
    OR,
    /**
     * ^
     */
    EOR,
    /**
     * >>
     */
    LSHIFT,
    /**
     * <<
     */
    RSHIFT,
    LAST,
}
/**
 * See also: vips_complex().
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
    LAST,
}
/**
 * See also: vips_complex2().
 */
enum OperationComplex2 {
    /**
     * convert to polar coordinates
     */
    CROSS_PHASE,
    LAST,
}
/**
 * See also: vips_complexget().
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
    LAST,
}
/**
 * See also: vips_math().
 */
enum OperationMath {
    /**
     * sin(), angles in degrees
     */
    SIN,
    /**
     * cos(), angles in degrees
     */
    COS,
    /**
     * tan(), angles in degrees
     */
    TAN,
    /**
     * asin(), angles in degrees
     */
    ASIN,
    /**
     * acos(), angles in degrees
     */
    ACOS,
    /**
     * atan(), angles in degrees
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
     * sinh(), angles in radians
     */
    SINH,
    /**
     * cosh(), angles in radians
     */
    COSH,
    /**
     * tanh(), angles in radians
     */
    TANH,
    /**
     * asinh(), angles in radians
     */
    ASINH,
    /**
     * acosh(), angles in radians
     */
    ACOSH,
    /**
     * atanh(), angles in radians
     */
    ATANH,
    LAST,
}
/**
 * See also: vips_math().
 */
enum OperationMath2 {
    /**
     * pow( left, right )
     */
    POW,
    /**
     * pow( right, left )
     */
    WOP,
    /**
     * atan2( left, right )
     */
    ATAN2,
    LAST,
}
/**
 * More like hit-miss, really.
 * 
 * See also: vips_morph().
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
    LAST,
}
/**
 * See also: vips_relational().
 */
enum OperationRelational {
    /**
     * ==
     */
    EQUAL,
    /**
     * !=
     */
    NOTEQ,
    /**
     * <
     */
    LESS,
    /**
     * <=
     */
    LESSEQ,
    /**
     * >
     */
    MORE,
    /**
     * >=
     */
    MOREEQ,
    LAST,
}
/**
 * See also: vips_round().
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
    LAST,
}
/**
 * Pick a Profile Connection Space for vips_icc_import() and
 * vips_icc_export(). LAB is usually best, XYZ can be more convenient in some
 * cases.
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
    LAST,
}
/**
 * How accurate an operation should be.
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
    LAST,
}
/**
 * How to calculate the output pixels when shrinking a 2x2 region.
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
    LAST,
}
/**
 * See also: #VipsForeignSave.
 */
enum Saveable {
    /**
     * 1 band (eg. CSV)
     */
    MONO,
    /**
     * 1 or 3 bands (eg. PPM)
     */
    RGB,
    /**
     * 1, 2, 3 or 4 bands (eg. PNG)
     */
    RGBA,
    /**
     * 3 or 4 bands (eg. WEBP)
     */
    RGBA_ONLY,
    /**
     * 1, 3 or 4 bands (eg. JPEG)
     */
    RGB_CMYK,
    /**
     * any number of bands (eg. TIFF)
     */
    ANY,
    LAST,
}
/**
 * Controls whether an operation should upsize, downsize, both up and
 * downsize, or force a size.
 * 
 * See also: vips_thumbnail().
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
    LAST,
}
/**
 * Flags we associate with each object argument.
 * 
 * Have separate input & output flags. Both set is an error; neither set is OK.
 * 
 * Input gobjects are automatically reffed, output gobjects automatically ref
 * us. We also automatically watch for "destroy" and unlink.
 * 
 * `VIPS_ARGUMENT_SET_ALWAYS` is handy for arguments which are set from C. For
 * example, VipsImage::width is a property that gives access to the Xsize
 * member of struct _VipsImage. We default its 'assigned' to TRUE
 * since the field is always set directly by C.
 * 
 * `VIPS_ARGUMENT_DEPRECATED` arguments are not shown in help text, are not
 * looked for if required, are not checked for "have-been-set". You can
 * deprecate a required argument, but you must obviously add a new required
 * argument if you do.
 * 
 * Input args with `VIPS_ARGUMENT_MODIFY` will be modified by the operation.
 * This is used for things like the in-place drawing operations.
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
}
/**
 * Some hints about the image loader.
 * 
 * #VIPS_FOREIGN_PARTIAL means that the image can be read directly from the
 * file without needing to be unpacked to a temporary image first.
 * 
 * #VIPS_FOREIGN_SEQUENTIAL means that the loader supports lazy reading, but
 * only top-to-bottom (sequential) access. Formats like PNG can read sets of
 * scanlines, for example, but only in order.
 * 
 * If neither PARTIAL or SEQUENTIAL is set, the loader only supports whole
 * image read. Setting both PARTIAL and SEQUENTIAL is an error.
 * 
 * #VIPS_FOREIGN_BIGENDIAN means that image pixels are most-significant byte
 * first. Depending on the native byte order of the host machine, you may
 * need to swap bytes. See vips_copy().
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
 * http://www.w3.org/TR/PNG-Filters.html
 * The values mirror those of png.h in libpng.
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
 * Flags we associate with an operation.
 * 
 * `VIPS_OPERATION_SEQUENTIAL` means that the operation works like vips_conv():
 * it can process images top-to-bottom with only small non-local
 * references.
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
 * `VIPS_OPERATION_NOCACHE` means that the operation must not be cached by
 * vips.
 * 
 * `VIPS_OPERATION_DEPRECATED` means this is an old operation kept in vips for
 * compatibility only and should be hidden from users.
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
    SEQUENTIAL_UNBUFFERED,
    /**
     * must not be cached
     */
    NOCACHE,
    /**
     * a compatibility thing
     */
    DEPRECATED,
}
const ARGUMENT_OPTIONAL_INPUT: number
const ARGUMENT_OPTIONAL_OUTPUT: number
const ARGUMENT_REQUIRED_INPUT: number
const ARGUMENT_REQUIRED_OUTPUT: number
/**
 * Areas under curves for illuminant A (2856K), 2 degree observer.
 */
const A_X0: number
const A_Y0: number
const A_Z0: number
/**
 * Areas under curves for illuminant B (4874K), 2 degree observer.
 */
const B_X0: number
const B_Y0: number
const B_Z0: number
const CONFIG: string
/**
 * Areas under curves for illuminant C (6774K), 2 degree observer.
 */
const C_X0: number
const C_Y0: number
const C_Z0: number
/**
 * Areas under curves for black body at 3250K, 2 degree observer.
 */
const D3250_X0: number
const D3250_Y0: number
const D3250_Z0: number
/**
 * Areas under curves for D50, 2 degree observer.
 */
const D50_X0: number
const D50_Y0: number
const D50_Z0: number
/**
 * Areas under curves for D55, 2 degree observer.
 */
const D55_X0: number
const D55_Y0: number
const D55_Z0: number
/**
 * Areas under curves for D65, 2 degree observer.
 */
const D65_X0: number
const D65_Y0: number
const D65_Z0: number
/**
 * Areas under curves for D75, 2 degree observer.
 */
const D75_X0: number
const D75_Y0: number
const D75_Z0: number
/**
 * Areas under curves for D93, 2 degree observer.
 */
const D93_X0: number
const D93_Y0: number
const D93_Z0: number
const ENABLE_DEPRECATED: number
const EXEEXT: string
/**
 * Areas under curves for equal energy illuminant E.
 */
const E_X0: number
const E_Y0: number
const E_Z0: number
/**
 * #VIPS_INTERPOLATE_SHIFT as a multiplicative constant.
 */
const INTERPOLATE_SCALE: number
/**
 * Many of the vips interpolators use fixed-point arithmetic for value
 * calcualtion. This is how many bits of precision they use.
 */
const INTERPOLATE_SHIFT: number
const LIBRARY_AGE: number
const LIBRARY_CURRENT: number
const LIBRARY_REVISION: number
/**
 * The first four bytes of a VIPS file in Intel byte ordering.
 */
const MAGIC_INTEL: number
/**
 * The first four bytes of a VIPS file in SPARC byte ordering.
 */
const MAGIC_SPARC: number
const MAJOR_VERSION: number
const MAX_COORD: number
/**
 * The name that JPEG read and write operations use for the image's EXIF data.
 */
const META_EXIF_NAME: string
/**
 * The name we use to attach an ICC profile. The file read and write
 * operations for TIFF, JPEG, PNG and others use this item of metadata to
 * attach and save ICC profiles. The profile is updated by the
 * vips_icc_transform() operations.
 */
const META_ICC_NAME: string
/**
 * The IMAGEDESCRIPTION tag. Often has useful metadata.
 */
const META_IMAGEDESCRIPTION: string
/**
 * The name that read and write operations use for the image's IPTC data.
 */
const META_IPTC_NAME: string
/**
 * Record the name of the original loader here. Handy for hinting file formats
 * and for debugging.
 */
const META_LOADER: string
/**
 * If set, the number of pages in the original file.
 */
const META_N_PAGES: string
/**
 * If set, the number of subifds in the first page of the file.
 */
const META_N_SUBIFDS: string
/**
 * The orientation tag for this image. An int from 1 - 8 using the standard
 * exif/tiff meanings.
 * 
 * * 1 - The 0th row represents the visual top of the image, and the 0th column
 *   represents the visual left-hand side.
 * * 2 - The 0th row represents the visual top of the image, and the 0th column
 *   represents the visual right-hand side.
 * * 3 - The 0th row represents the visual bottom of the image, and the 0th
 *   column represents the visual right-hand side.
 * * 4 - The 0th row represents the visual bottom of the image, and the 0th
 *   column represents the visual left-hand side.
 * * 5 - The 0th row represents the visual left-hand side of the image, and the
 *   0th column represents the visual top.
 * * 6 - The 0th row represents the visual right-hand side of the image, and the
 *   0th column represents the visual top.
 * * 7 - The 0th row represents the visual right-hand side of the image, and the
 *   0th column represents the visual bottom.
 * * 8 - The 0th row represents the visual left-hand side of the image, and the
 *   0th column represents the visual bottom.
 */
const META_ORIENTATION: string
/**
 * If set, the height of each page when this image was loaded. If you save an
 * image with "page-height" set to a format that supports multiple pages, such
 * as tiff, the image will be saved as a series of pages.
 */
const META_PAGE_HEIGHT: string
/**
 * The name that TIFF read and write operations use for the image's
 * TIFFTAG_PHOTOSHOP data.
 */
const META_PHOTOSHOP_NAME: string
/**
 * The JPEG and TIFF read and write operations use this to record the
 * file's preferred unit for resolution.
 */
const META_RESOLUTION_UNIT: string
/**
 * Images loaded via vips_sequential() have this int field defined. Some
 * operations (eg. vips_shrinkv()) add extra caches if they see it on their
 * input.
 */
const META_SEQUENTIAL: string
/**
 * The name that read and write operations use for the image's XMP data.
 */
const META_XMP_NAME: string
const MICRO_VERSION: number
const MINOR_VERSION: number
/**
 * The name of the shared object containing the vips library, for example
 * "libvips.so.42", or "libvips-42.dll".
 */
const SONAME: string
/**
 * #VIPS_TRANSFORM_SHIFT as a multiplicative constant.
 */
const TRANSFORM_SCALE: number
/**
 * Many of the vips interpolators use fixed-point arithmetic for coordinate
 * calculation. This is how many bits of precision they use.
 */
const TRANSFORM_SHIFT: number
const VERSION: string
const VERSION_STRING: string
function _object_set_member(object: Object, pspec: GObject.ParamSpec, member: GObject.Object, argument: GObject.Object): void
function add_option_entries(option_group: GLib.OptionGroup): void
function area_free_cb(mem: object | null, area: Area): number
function band_format_is8bit(format: BandFormat): boolean
function band_format_iscomplex(format: BandFormat): boolean
function band_format_isfloat(format: BandFormat): boolean
function band_format_isint(format: BandFormat): boolean
function band_format_isuint(format: BandFormat): boolean
function blob_copy(data: Uint8Array): Blob
function cache_drop_all(): void
function cache_get_max(): number
function cache_get_max_files(): number
function cache_get_max_mem(): number
function cache_get_size(): number
function cache_operation_add(operation: Operation): void
function cache_operation_build(operation: Operation): Operation
function cache_operation_lookup(operation: Operation): Operation
function cache_print(): void
function cache_set_dump(dump: boolean): void
function cache_set_max(max: number): void
function cache_set_max_files(max_files: number): void
function cache_set_max_mem(max_mem: number): void
function cache_set_trace(trace: boolean): void
function call_argv(operation: Operation, argc: number, argv: string): number
function call_options(group: GLib.OptionGroup, operation: Operation): void
function check_8or16(domain: string, im: Image): number
function check_bandno(domain: string, im: Image, bandno: number): number
function check_bands(domain: string, im: Image, bands: number): number
function check_bands_1or3(domain: string, im: Image): number
function check_bands_1orn(domain: string, im1: Image, im2: Image): number
function check_bands_1orn_unary(domain: string, im: Image, n: number): number
function check_bands_atleast(domain: string, im: Image, bands: number): number
function check_bands_same(domain: string, im1: Image, im2: Image): number
function check_coding(domain: string, im: Image, coding: Coding): number
function check_coding_known(domain: string, im: Image): number
function check_coding_noneorlabq(domain: string, im: Image): number
function check_coding_same(domain: string, im1: Image, im2: Image): number
function check_complex(domain: string, im: Image): number
function check_format(domain: string, im: Image, fmt: BandFormat): number
function check_format_same(domain: string, im1: Image, im2: Image): number
function check_hist(domain: string, im: Image): number
function check_int(domain: string, im: Image): number
function check_matrix(domain: string, im: Image): [ /* returnType */ number, /* out */ Image ]
function check_mono(domain: string, im: Image): number
function check_noncomplex(domain: string, im: Image): number
function check_oddsquare(domain: string, im: Image): number
function check_precision_intfloat(domain: string, precision: Precision): number
function check_separable(domain: string, im: Image): number
function check_size_same(domain: string, im1: Image, im2: Image): number
function check_twocomponents(domain: string, im: Image): number
function check_u8or16(domain: string, im: Image): number
function check_u8or16orf(domain: string, im: Image): number
function check_uint(domain: string, im: Image): number
function check_uintorf(domain: string, im: Image): number
function check_uncoded(domain: string, im: Image): number
function check_vector(domain: string, n: number, im: Image): number
function check_vector_length(domain: string, n: number, len: number): number
function class_find(basename: string, nickname: string): ObjectClass
function col_C2Ccmc(C: number): number
function col_Ccmc2C(Ccmc: number): number
function col_Ch2ab(C: number, h: number, a: number, b: number): void
function col_Ch2hcmc(C: number, h: number): number
function col_Chcmc2h(C: number, hcmc: number): number
function col_L2Lcmc(L: number): number
function col_Lab2XYZ(L: number, a: number, b: number): [ /* X */ number, /* Y */ number, /* Z */ number ]
function col_Lcmc2L(Lcmc: number): number
function col_XYZ2Lab(X: number, Y: number, Z: number): [ /* L */ number, /* a */ number, /* b */ number ]
function col_XYZ2scRGB(X: number, Y: number, Z: number): [ /* returnType */ number, /* R */ number, /* G */ number, /* B */ number ]
function col_ab2Ch(a: number, b: number, C: number, h: number): void
function col_ab2h(a: number, b: number): number
function col_dE00(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number
function col_make_tables_CMC(): void
function col_sRGB2scRGB_16(r: number, g: number, b: number, R: number, G: number, B: number): number
function col_sRGB2scRGB_16_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number
function col_sRGB2scRGB_8(r: number, g: number, b: number, R: number, G: number, B: number): number
function col_sRGB2scRGB_8_noclip(r: number, g: number, b: number, R: number, G: number, B: number): number
function col_scRGB2BW_16(R: number, G: number, B: number, g: number, og: number): number
function col_scRGB2BW_8(R: number, G: number, B: number, g: number, og: number): number
function col_scRGB2XYZ(R: number, G: number, B: number): [ /* returnType */ number, /* X */ number, /* Y */ number, /* Z */ number ]
function col_scRGB2sRGB_16(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number
function col_scRGB2sRGB_8(R: number, G: number, B: number, r: number, g: number, b: number, og: number): number
function concurrency_get(): number
function concurrency_set(concurrency: number): void
function error_buffer(): string
function error_buffer_copy(): string
function error_clear(): void
function error_freeze(): void
function error_g(): void
function error_thaw(): void
function filename_get_filename(vips_filename: string): string
function filename_get_options(vips_filename: string): string
function format_sizeof(format: BandFormat): number
function g_error(): void
function get_argv0(): string
function get_disc_threshold(): number
function get_prgname(): string
function guess_libdir(argv0: string, env_name: string): string
function guess_prefix(argv0: string, env_name: string): string
function icc_is_compatible_profile(image: Image, data: object | null, data_length: number): boolean
function icc_present(): number
function init(argv0: string): number
function leak_set(leak: boolean): void
function malloc(object: Object | null, size: number): object | null
function nickname_find(type: GObject.Type): string
function path_filename7(path: string): string
function path_mode7(path: string): string
function progress_set(progress: boolean): void
function pythagoras(L1: number, a1: number, b1: number, L2: number, a2: number, b2: number): number
function shutdown(): void
function strdup(object: Object | null, str: string): string
function thread_shutdown(): void
function tracked_close(fd: number): number
function tracked_free(s?: object | null): void
function tracked_get_allocs(): number
function tracked_get_files(): number
function tracked_get_mem(): number
function tracked_get_mem_highwater(): number
function tracked_malloc(size: number): object | null
function tracked_open(pathname: string, flags: number, mode: number): number
function type_depth(type: GObject.Type): number
function type_find(basename: string, nickname: string): GObject.Type
function value_get_area(value: any): [ /* returnType */ object | null, /* length */ number | null ]
function value_get_array(value: any): [ /* returnType */ object | null, /* n */ number | null, /* type */ GObject.Type | null, /* sizeof_type */ number | null ]
function value_get_array_double(value: any): number[]
function value_get_array_image(value: any): Image[]
function value_get_array_int(value: any): number[]
function value_get_blob(value: any): [ /* returnType */ object | null, /* length */ number | null ]
function value_get_ref_string(value: any): [ /* returnType */ string, /* length */ number | null ]
function value_get_save_string(value: any): string
function value_is_null(psoec: GObject.ParamSpec, value: any): boolean
function value_set_area(value: any, free_fn: CallbackFn): void
function value_set_array(n: number, type: GObject.Type, sizeof_type: number): /* value */ any
function value_set_array_double(value: any, array: number[] | null): void
function value_set_array_image(value: any, n: number): void
function value_set_array_int(value: any, array: number[] | null): void
function value_set_array_object(n: number): /* value */ any
function value_set_blob(free_fn: CallbackFn, length: number): /* value */ any
function value_set_blob_free(value: any, data: object | null, length: number): void
function value_set_ref_string(str: string): /* value */ any
function value_set_save_string(str: string): /* value */ any
function version(flag: number): number
function version_string(): string
interface ArgumentClassMapFn {
    (object_class: ObjectClass, pspec: GObject.ParamSpec, argument_class: ArgumentClass, a?: object | null, b?: object | null): object | null
}
interface ArgumentMapFn {
    (object: Object, pspec: GObject.ParamSpec, argument_class: ArgumentClass, argument_instance: ArgumentInstance, a?: object | null, b?: object | null): object | null
}
interface CallbackFn {
    (a?: object | null, b?: object | null): number
}
interface ClassMapFn {
    (cls: ObjectClass, a?: object | null): object | null
}
/**
 * Fill `out->`valid with pixels. `seq` contains per-thread state, such as the
 * input regions. Set `stop` to %TRUE to stop processing.
 * 
 * See also: vips_image_generate(), vips_stop_many().
 */
interface GenerateFn {
    (out: Region, seq: object | null, a: object | null, b: object | null, stop: boolean): number
}
interface ImageMapFn {
    (image: Image, name: string, value: any, a?: object | null): object | null
}
/**
 * An interpolation function. It should read source pixels from `in` with
 * VIPS_REGION_ADDR(), it can look left and up from (x, y) by `window_offset`
 * pixels and it can access pixels in a window of size `window_size`.
 * 
 * The interpolated value should be written to the pixel pointed to by `out`.
 * 
 * See also: #VipsInterpolateClass.
 */
interface InterpolateMethod {
    (interpolate: Interpolate, out: object | null, in_: Region, x: number, y: number): void
}
interface ObjectSetArguments {
    (object: Object, a?: object | null, b?: object | null): object | null
}
interface OperationBuildFn {
    (object: Object): boolean
}
interface SListFold2Fn {
    (item?: object | null, a?: object | null, b?: object | null, c?: object | null): object | null
}
interface SListMap2Fn {
    (item?: object | null, a?: object | null, b?: object | null): object | null
}
interface SListMap4Fn {
    (item?: object | null, a?: object | null, b?: object | null, c?: object | null, d?: object | null): object | null
}
/**
 * Start a new processing sequence for this generate function. This allocates
 * per-thread state, such as an input region.
 * 
 * See also: vips_start_one(), vips_start_many().
 */
interface StartFn {
    (out: Image, a?: object | null, b?: object | null): object | null
}
/**
 * Stop a processing sequence. This frees
 * per-thread state, such as an input region.
 * 
 * See also: vips_stop_one(), vips_stop_many().
 */
interface StopFn {
    (seq?: object | null, a?: object | null, b?: object | null): number
}
interface TypeMap2Fn {
    (type: GObject.Type, a?: object | null, b?: object | null): object | null
}
interface TypeMapFn {
    (type: GObject.Type, a?: object | null): object | null
}
interface Foreign_ConstructProps extends Operation_ConstructProps {
}
class Foreign {
    /* Fields of Vips-8.0.Vips.Operation */
    readonly parent_instance: Object
    readonly hash: number
    readonly found_hash: boolean
    readonly pixels: number
    /* Fields of Vips-8.0.Vips.Object */
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    get_flags(): OperationFlags
    invalidate(): void
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    vfunc_get_flags(): OperationFlags
    vfunc_invalidate(): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Operation */
    connect(sigName: "invalidate", callback: (($obj: Foreign) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: Foreign) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: Foreign) => void)): number
    connect_after(sigName: "close", callback: (($obj: Foreign) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: Foreign) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: Foreign) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: Foreign) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: Foreign) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: Foreign) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: Foreign) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Foreign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Foreign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Foreign_ConstructProps)
    _init (config?: Foreign_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Searches for an operation you could use to load `filename`. Any trailing
     * options on `filename` are stripped and ignored.
     * 
     * See also: vips_foreign_find_load_buffer(), vips_image_new_from_file().
     */
    static find_load(filename: string): string
    /**
     * Searches for an operation you could use to load a memory buffer. To see the
     * range of buffer loaders supported by your vips, try something like:
     * 
     * 	vips -l | grep load_buffer
     * 
     * See also: vips_image_new_from_buffer().
     */
    static find_load_buffer(data: Uint8Array): string
    /**
     * Searches for an operation you could use to load a source. To see the
     * range of source loaders supported by your vips, try something like:
     * 
     * 	vips -l | grep load_source
     * 
     * See also: vips_image_new_from_source().
     */
    static find_load_source(source: Source): string
    /**
     * Searches for an operation you could use to write to `filename`.
     * Any trailing options on `filename` are stripped and ignored.
     * 
     * See also: vips_foreign_find_save_buffer(), vips_image_write_to_file().
     */
    static find_save(filename: string): string | null
    /**
     * Searches for an operation you could use to write to a buffer in `suffix`
     * format.
     * 
     * See also: vips_image_write_to_buffer().
     */
    static find_save_buffer(suffix: string): string | null
    /**
     * Searches for an operation you could use to write to a target in `suffix`
     * format.
     * 
     * See also: vips_image_write_to_buffer().
     */
    static find_save_target(suffix: string): string | null
    /**
     * Return the flags for `filename` using `loader`.
     * `loader` is something like "tiffload" or "VipsForeignLoadTiff".
     */
    static flags(loader: string, filename: string): ForeignFlags
    /**
     * Get a %NULL-terminated array listing all the supported suffixes.
     * 
     * This is not the same as all the supported file types, since libvips
     * detects image format for load by testing the first few bytes.
     * 
     * Use vips_foreign_find_load() to detect type for a specific file.
     * 
     * Free the return result with g_strfreev().
     */
    static get_suffixes(): string[]
    /**
     * Return %TRUE if `filename` can be loaded by `loader`. `loader` is something
     * like "tiffload" or "VipsForeignLoadTiff".
     */
    static is_a(loader: string, filename: string): boolean
    /**
     * Return %TRUE if `data` can be loaded by `loader`. `loader` is something
     * like "tiffload_buffer" or "VipsForeignLoadTiffBuffer".
     */
    static is_a_buffer(loader: string, data: Uint8Array): boolean
    /**
     * Return %TRUE if `source` can be loaded by `loader`. `loader` is something
     * like "tiffload_source" or "VipsForeignLoadTiffSource".
     */
    static is_a_source(loader: string, source: Source): boolean
    /**
     * Apply a function to every #VipsForeignClass that VIPS knows about. Foreigns
     * are presented to the function in priority order.
     * 
     * Like all VIPS map functions, if `fn` returns %NULL, iteration continues. If
     * it returns non-%NULL, iteration terminates and that value is returned. The
     * map function returns %NULL if all calls return %NULL.
     * 
     * See also: vips_slist_map().
     */
    static map(base: string, fn: SListMap2Fn, a?: object | null, b?: object | null): object | null
    static $gtype: GObject.Type
}
interface ForeignLoad_ConstructProps extends Foreign_ConstructProps {
    /* Constructor properties of Vips-8.0.Vips.ForeignLoad */
    disc?: boolean
    fail?: boolean
    memory?: boolean
    out?: Image
    sequential?: boolean
}
class ForeignLoad {
    /* Properties of Vips-8.0.Vips.ForeignLoad */
    disc: boolean
    fail: boolean
    memory: boolean
    out: Image
    sequential: boolean
    /* Fields of Vips-8.0.Vips.Foreign */
    readonly parent_object: Operation
    /* Fields of Vips-8.0.Vips.Operation */
    readonly parent_instance: Object
    readonly hash: number
    readonly found_hash: boolean
    readonly pixels: number
    /* Fields of Vips-8.0.Vips.Object */
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    get_flags(): OperationFlags
    invalidate(): void
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.ForeignLoad */
    vfunc_get_flags(): ForeignFlags
    /* Function overloads */
    /**
     * Returns the set of flags for this operation.
     */
    vfunc_get_flags(): OperationFlags
    vfunc_header(): number
    vfunc_load(): number
    /* Virtual methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    vfunc_get_flags(): OperationFlags
    vfunc_invalidate(): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Operation */
    connect(sigName: "invalidate", callback: (($obj: ForeignLoad) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: ForeignLoad) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: ForeignLoad) => void)): number
    connect_after(sigName: "close", callback: (($obj: ForeignLoad) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: ForeignLoad) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: ForeignLoad) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: ForeignLoad) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: ForeignLoad) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: ForeignLoad) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: ForeignLoad) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::disc", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disc", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fail", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fail", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::memory", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::out", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::out", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sequential", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sequential", callback: (($obj: ForeignLoad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ForeignLoad_ConstructProps)
    _init (config?: ForeignLoad_ConstructProps): void
    static $gtype: GObject.Type
}
interface ForeignSave_ConstructProps extends Foreign_ConstructProps {
    /* Constructor properties of Vips-8.0.Vips.ForeignSave */
    background?: ArrayDouble
    "in"?: Image
    page_height?: number
    strip?: boolean
}
class ForeignSave {
    /* Properties of Vips-8.0.Vips.ForeignSave */
    background: ArrayDouble
    "in": Image
    page_height: number
    strip: boolean
    /* Fields of Vips-8.0.Vips.Foreign */
    readonly parent_object: Operation
    /* Fields of Vips-8.0.Vips.Operation */
    readonly parent_instance: Object
    readonly hash: number
    readonly found_hash: boolean
    readonly pixels: number
    /* Fields of Vips-8.0.Vips.Object */
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    get_flags(): OperationFlags
    invalidate(): void
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    vfunc_get_flags(): OperationFlags
    vfunc_invalidate(): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Operation */
    connect(sigName: "invalidate", callback: (($obj: ForeignSave) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: ForeignSave) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: ForeignSave) => void)): number
    connect_after(sigName: "close", callback: (($obj: ForeignSave) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: ForeignSave) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: ForeignSave) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: ForeignSave) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: ForeignSave) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: ForeignSave) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: ForeignSave) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::background", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-height", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-height", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::strip", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strip", callback: (($obj: ForeignSave, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ForeignSave_ConstructProps)
    _init (config?: ForeignSave_ConstructProps): void
    static $gtype: GObject.Type
}
interface Image_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Vips-8.0.Vips.Image */
    bands?: number
    filename?: string
    foreign_buffer?: object
    height?: number
    kill?: boolean
    mode?: string
    sizeof_header?: number
    width?: number
    xoffset?: number
    xres?: number
    yoffset?: number
    yres?: number
}
class Image {
    /* Properties of Vips-8.0.Vips.Image */
    bands: number
    filename: string
    foreign_buffer: object
    height: number
    kill: boolean
    mode: string
    sizeof_header: number
    width: number
    xoffset: number
    xres: number
    yoffset: number
    yres: number
    /* Fields of Vips-8.0.Vips.Object */
    readonly parent_instance: GObject.Object
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Image */
    /**
     * Remove the orientation tag on `image`. Also remove any exif orientation tags.
     * You must vips_copy() the image before calling this function since it
     * modifies metadata.
     */
    autorot_remove_angle(): void
    /**
     * Test if `image` is in a colourspace that vips_colourspace() can process.
     */
    colourspace_issupported(): boolean
    /**
     * Make an image which is an area of memory.
     * 
     * If `image` is already a memory buffer, just ref and return. If it's a file on
     * disc or a partial, allocate memory and copy the image to it.
     * 
     * This operation is thread-safe, unlike vips_image_wio_input().
     * 
     * If you are sure that `image` is not shared with another thread (perhaps you
     * have made it yourself), use vips_image_wio_input() instead.
     * 
     * See also: vips_image_wio_input().
     */
    copy_memory(): Image
    /**
     * A convenience function to unpack to a format that we can compute with.
     * `out`.coding is always #VIPS_CODING_NONE.
     * 
     * This unpacks LABQ to plain LAB. Use vips_LabQ2LabS() for a bit more speed
     * if you need it.
     * 
     * See also: vips_image_encode(), vips_LabQ2Lab(), vips_rad2float().
     */
    decode(): [ /* returnType */ number, /* out */ Image ]
    /**
     * We often need to know what an image will decode to without actually
     * decoding it, for example, in arg checking.
     * 
     * See also: vips_image_decode().
     */
    decode_predict(): [ /* returnType */ number, /* bands */ number, /* format */ BandFormat ]
    /**
     * A convenience function to pack to a coding. The inverse of
     * vips_image_decode().
     * 
     * See also: vips_image_decode().
     */
    encode(coding: Coding): [ /* returnType */ number, /* out */ Image ]
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
    foreign_load_invalidate(): void
    /**
     * Free the externally allocated buffer found in the input image. This function
     * is intended to be used with g_signal_connect.
     */
    free_buffer(buffer?: object | null): void
    /**
     * Fill `value_copy` with a copy of the header field. `value_copy` must be zeroed
     * but uninitialised.
     * 
     * This will return -1 and add a message to the error buffer if the field
     * does not exist. Use vips_image_get_typeof() to test for the
     * existence of a field first if you are not certain it will be there.
     * 
     * For example, to read a double from an image (though of course you would use
     * vips_image_get_double() in practice):
     * 
     * |[
     * GValue value = { 0 };
     * double d;
     * 
     * if (vips_image_get (image, name, &value))
     *   return -1;
     * 
     * if (G_VALUE_TYPE (&value) != G_TYPE_DOUBLE) {
     *   vips_error( "mydomain",
     *     _("field \"%s\" is of type %s, not double"),
     *     name,
     *     g_type_name (G_VALUE_TYPE (&value)));
     *   g_value_unset (&value);
     *   return -1;
     * }
     * 
     * d = g_value_get_double (&value);
     * g_value_unset (&value);
     * ```
     * 
     * 
     * See also: vips_image_get_typeof(), vips_image_get_double().
     */
    get(name: string): [ /* returnType */ number, /* value_copy */ any ]
    /**
     * Gets `data` from `image` under the name `name`. A convenience
     * function over vips_image_get(). Use vips_image_get_typeof() to test for
     * the existence of a piece of metadata.
     * 
     * See also: vips_image_set_area(), vips_image_get(),
     * vips_image_get_typeof()
     */
    get_area(name: string): [ /* returnType */ number, /* data */ object | null ]
    /**
     * Gets `out` from `im` under the name `name`.
     * The field must be of type
     * #VIPS_TYPE_ARRAY_INT.
     * 
     * Do not free `out`. `out` is valid as long as `image` is valid.
     * 
     * Use vips_image_get_typeof() to test for the
     * existence of a piece of metadata.
     * 
     * See also: vips_image_get(), vips_image_set_image()
     */
    get_array_double(name: string): [ /* returnType */ number, /* out */ number[] ]
    /**
     * Gets `out` from `im` under the name `name`.
     * The field must be of type
     * #VIPS_TYPE_ARRAY_INT.
     * 
     * Do not free `out`. `out` is valid as long as `image` is valid.
     * 
     * Use vips_image_get_typeof() to test for the
     * existence of a piece of metadata.
     * 
     * See also: vips_image_get(), vips_image_set_image()
     */
    get_array_int(name: string): [ /* returnType */ number, /* out */ number[] ]
    /**
     * Returns `name` from `image` in `out`.
     * This function will read any field, returning it as a printable string.
     * You need to free the string with g_free() when you are done with it.
     * 
     * This will base64-encode BLOBs, for example. Use vips_buf_appendgv() to
     * make a string that's for humans.
     * 
     * See also: vips_image_get(), vips_image_get_typeof(), vips_buf_appendgv().
     */
    get_as_string(name: string): [ /* returnType */ number, /* out */ string ]
    get_bands(): number
    /**
     * Gets `blob` from `image` under the name `name,` optionally returns its length in
     * `length`. A convenience
     * function over vips_image_get(). Use vips_image_get_typeof() to test for the
     * existence
     * of a piece of metadata.
     * 
     * See also: vips_image_get(), vips_image_get_typeof(), vips_blob_get(),
     */
    get_blob(name: string): [ /* returnType */ number, /* data */ Uint8Array ]
    get_coding(): Coding
    /**
     * Return a pointer to the image's pixel data, if possible. This can involve
     * allocating large amounts of memory and performing a long computation. Image
     * pixels are laid out in band-packed rows.
     * 
     * Since this function modifies `image,` it is not threadsafe. Only call it on
     * images which you are sure have not been shared with another thread.
     * 
     * See also: vips_image_wio_input(), vips_image_copy_memory().
     */
    get_data(): object | null
    /**
     * Gets `out` from `im` under the name `name`.
     * The value will be transformed into
     * a double, if possible.
     * 
     * See also: vips_image_get(), vips_image_get_typeof()
     */
    get_double(name: string): [ /* returnType */ number, /* out */ number ]
    /**
     * Get a %NULL-terminated array listing all the metadata field names on `image`.
     * Free the return result with g_strfreev().
     * 
     * This is handy for language bindings. From C, it's usually more convenient to
     * use vips_image_map().
     */
    get_fields(): string[]
    get_filename(): string
    get_format(): BandFormat
    get_height(): number
    /**
     * This function reads the image history as a C string. The string is owned
     * by VIPS and must not be freed.
     * 
     * VIPS tracks the history of each image, that is, the sequence of operations
     * that generated that image. Applications built on VIPS need to call
     * vips_image_history_printf() for each action they perform, setting the
     * command-line equivalent for the action.
     * 
     * See also: vips_image_history_printf().
     */
    get_history(): string
    /**
     * Gets `out` from `im` under the name `name`.
     * The field must be of type
     * #VIPS_TYPE_IMAGE. You must unref `out` with g_object_unref().
     * 
     * Use vips_image_get_typeof() to test for the
     * existence of a piece of metadata.
     * 
     * See also: vips_image_get(), vips_image_set_image()
     */
    get_image(name: string): [ /* returnType */ number, /* out */ Image ]
    /**
     * Gets `out` from `im` under the name `name`.
     * The value will be transformed into
     * an int, if possible.
     * 
     * See also: vips_image_get(), vips_image_get_typeof()
     */
    get_int(name: string): [ /* returnType */ number, /* out */ number ]
    /**
     * Return the #VipsInterpretation set in the image header.
     * Use vips_image_guess_interpretation() if you want a sanity-checked value.
     */
    get_interpretation(): Interpretation
    /**
     * Image modes are things like `"t"`, meaning a memory buffer, and `"p"`
     * meaning a delayed computation.
     */
    get_mode(): string
    /**
     * Fetch and sanity-check #VIPS_META_N_PAGES. Default to 1 if not present or
     * crazy.
     * 
     * This is the number of pages in the image file, not the number of pages that
     * have been loaded into `image`.
     */
    get_n_pages(): number
    /**
     * Fetch and sanity-check #VIPS_META_N_SUBIFDS. Default to 0 if not present or
     * crazy.
     */
    get_n_subifds(): number
    /**
     * Matrix images can have an optional `offset` field for use by integer
     * convolution.
     */
    get_offset(): number
    /**
     * Fetch and sanity-check #VIPS_META_ORIENTATION. Default to 1 (no rotate,
     * no flip) if not present or crazy.
     */
    get_orientation(): number
    /**
     * Return %TRUE if applying the orientation would swap width and height.
     */
    get_orientation_swap(): boolean
    /**
     * Multi-page images can have a page height. Fetch it, and sanity check it. If
     * page-height is not set, it defaults to the image height.
     */
    get_page_height(): number
    /**
     * Matrix images can have an optional `scale` field for use by integer
     * convolution.
     */
    get_scale(): number
    /**
     * Gets `out` from `im` under the name `name`.
     * The field must be of type
     * G_TYPE_STRING, VIPS_TYPE_REF_STRING.
     * 
     * Do not free `out`.
     * 
     * Use vips_image_get_as_string() to fetch any field as a string.
     * 
     * See also: vips_image_get(), vips_image_get_typeof()
     */
    get_string(name: string): [ /* returnType */ number, /* out */ string ]
    /**
     * Read the %GType for a header field. Returns zero if there is no
     * field of that name.
     * 
     * See also: vips_image_get().
     */
    get_typeof(name: string): GObject.Type
    get_width(): number
    get_xoffset(): number
    get_xres(): number
    get_yoffset(): number
    get_yres(): number
    /**
     * Return the #VipsBandFormat for an image, guessing a sane value if
     * the set value looks crazy.
     * 
     * For example, for a float image tagged as rgb16, we'd return ushort.
     */
    guess_format(): BandFormat
    /**
     * Return the #VipsInterpretation for an image, guessing a sane value if
     * the set value looks crazy.
     */
    guess_interpretation(): Interpretation
    /**
     * Look at an image's interpretation and see if it has extra alpha bands. For
     * example, a 4-band #VIPS_INTERPRETATION_sRGB would, but a six-band
     * #VIPS_INTERPRETATION_MULTIBAND would not.
     * 
     * Return %TRUE if `image` has an alpha channel.
     */
    hasalpha(): boolean
    /**
     * Formats the name/argv as a single string and calls
     * vips_image_history_printf(). A
     * convenience function for command-line prorams.
     * 
     * See also: vips_image_get_history().
     */
    history_args(name: string, argv: string[]): number
    /**
     * Transform an image from absolute to relative colorimetry using the
     * MediaWhitePoint stored in the ICC profile.
     * 
     * See also: vips_icc_transform(), vips_icc_import().
     */
    icc_ac2rc(profile_filename: string): [ /* returnType */ number, /* out */ Image ]
    /**
     * A convenience function to set the header fields after creating an image.
     * Normally you copy the fields from your input images with
     * vips_image_pipelinev() and then make
     * any adjustments you need, but if you are creating an image from scratch,
     * for example vips_black() or vips_jpegload(), you do need to set all the
     * fields yourself.
     * 
     * See also: vips_image_pipelinev().
     */
    init_fields(xsize: number, ysize: number, bands: number, format: BandFormat, coding: Coding, interpretation: Interpretation, xres: number, yres: number): void
    /**
     * Gets `image` ready for an in-place operation, such as vips_draw_circle().
     * After calling this function you can both read and write the image with
     * VIPS_IMAGE_ADDR().
     * 
     * This method is called for you by the base class of the draw operations,
     * there's no need to call it yourself.
     * 
     * Since this function modifies `image,` it is not thread-safe. Only call it on
     * images which you are sure have not been shared with another thread.
     * All in-place operations are inherently not thread-safe, so you need to take
     * great care in any case.
     * 
     * See also: vips_draw_circle(), vips_image_wio_input().
     */
    inplace(): number
    /**
     * Invalidate all pixel caches on `image` and any downstream images, that
     * is, images which depend on this image. Additionally, all operations which
     * depend upon this image are dropped from the VIPS operation cache.
     * 
     * You should call this function after
     * destructively modifying an image with something like vips_draw_circle().
     * 
     * The #VipsImage::invalidate signal is emitted for all invalidated images.
     * 
     * See also: vips_region_invalidate().
     */
    invalidate_all(): void
    /**
     * Return %TRUE if `image` is in most-significant-
     * byte first form. This is the byte order used on the SPARC
     * architecture and others.
     */
    isMSBfirst(): boolean
    /**
     * TRUE if any of the images upstream from `image` were opened in sequential
     * mode. Some operations change behaviour slightly in sequential mode to
     * optimize memory behaviour.
     */
    is_sequential(): boolean
    /**
     * Return %TRUE if `image` represents a file on disc in some way.
     */
    isfile(): boolean
    /**
     * If `image` has been killed (see vips_image_set_kill()), set an error message,
     * clear the #VipsImage.kill flag and return %TRUE. Otherwise return %FALSE.
     * 
     * Handy for loops which need to run sets of threads which can fail.
     * 
     * See also: vips_image_set_kill().
     */
    iskilled(): boolean
    /**
     * Return %TRUE if `im` represents a partial image (a delayed calculation).
     */
    ispartial(): boolean
    /**
     * This function calls `fn` for every header field, including every item of
     * metadata.
     * 
     * Like all _map functions, the user function should return %NULL to continue
     * iteration, or a non-%NULL pointer to indicate early termination.
     * 
     * See also: vips_image_get_typeof(), vips_image_get().
     */
    map(a?: object | null): object | null
    /**
     * Minimise memory use on this image and any upstream images, that is, images
     * which this image depends upon. This function is called automatically at the
     * end of a computation, but it might be useful to call at other times.
     * 
     * The #VipsImage::minimise signal is emitted for all minimised images.
     */
    minimise_all(): void
    /**
     * Check that an image is readable with vips_region_prepare() and friends.
     * If it isn't, try to transform the image so that vips_region_prepare() can
     * work.
     * 
     * See also: vips_image_pio_output(), vips_region_prepare().
     */
    pio_input(): number
    /**
     * Check that an image is writeable with vips_image_generate(). If it isn't,
     * try to transform the image so that vips_image_generate() can work.
     * 
     * See also: vips_image_pio_input().
     */
    pio_output(): number
    /**
     * Prints field `name` to stdout as ASCII. Handy for debugging.
     */
    print_field(name: string): void
    /**
     * Find and remove an item of metadata. Return %FALSE if no metadata of that
     * name was found.
     * 
     * See also: vips_image_set(), vips_image_get_typeof().
     */
    remove(name: string): boolean
    /**
     * vips_reorder_margin_hint() sets a hint that `image` contains a margin, that
     * is, that each vips_region_prepare() on `image` will request a slightly larger
     * region from it's inputs. A good value for `margin` is (width * height) for
     * the window the operation uses.
     * 
     * This information is used by vips_image_prepare_many() to attempt to reorder
     * computations to minimise recomputation.
     * 
     * See also: vips_image_prepare_many().
     */
    reorder_margin_hint(margin: number): void
    /**
     * vips_reorder_prepare_many() runs vips_region_prepare() on each region in
     * `regions,` requesting the pixels in `r`.
     * 
     * It tries to request the regions in the order which will cause least
     * recomputation. This can give a large speedup, in some cases.
     * 
     * See also: vips_region_prepare(), vips_reorder_margin_hint().
     */
    reorder_prepare_many(regions: Region[], r: Rect): number
    /**
     * Set a piece of metadata on `image`. Any old metadata with that name is
     * destroyed. The %GValue is copied into the image, so you need to unset the
     * value when you're done with it.
     * 
     * For example, to set an integer on an image (though you would use the
     * convenience function vips_image_set_int() in practice), you would do:
     * 
     * |[
     * GValue value = { 0 };
     * 
     * g_value_init (&value, G_TYPE_INT);
     * g_value_set_int (&value, 42);
     * vips_image_set (image, name, &value);
     * g_value_unset (&value);
     * ```
     * 
     * 
     * See also: vips_image_get().
     */
    set(name: string, value: any): void
    /**
     * Attaches `data` as a metadata item on `image` under the name `name`. When
     * VIPS no longer needs the metadata, it will be freed with `free_fn`.
     * 
     * See also: vips_image_get_double(), vips_image_set()
     */
    set_area(name: string, free_fn: CallbackFn): void
    /**
     * Attaches `array` as a metadata item on `image` as `name`.
     * A convenience function over vips_image_set().
     * 
     * See also: vips_image_get_image(), vips_image_set().
     */
    set_array_double(name: string, array: number[] | null): void
    /**
     * Attaches `array` as a metadata item on `image` as `name`.
     * A convenience function over vips_image_set().
     * 
     * See also: vips_image_get_image(), vips_image_set().
     */
    set_array_int(name: string, array: number[] | null): void
    /**
     * Attaches `blob` as a metadata item on `image` under the name `name`. A
     * convenience
     * function over vips_image_set() using a vips_blob.
     * 
     * See also: vips_image_get_blob(), vips_image_set().
     */
    set_blob(name: string, free_fn: CallbackFn, data: Uint8Array): void
    /**
     * Attaches `blob` as a metadata item on `image` under the name `name,` taking
     * a copy of the memory area. A convenience function over
     * vips_image_set_blob().
     * 
     * See also: vips_image_get_blob(), vips_image_set().
     */
    set_blob_copy(name: string, data: Uint8Array): void
    /**
     * Sets the delete_on_close flag for the image. If this flag is set, when
     * `image` is finalized, the filename held in `image->`filename at the time of
     * this call is deleted.
     * 
     * This function is clearly extremely dangerous, use with great caution.
     * 
     * See also: vips_image_new_temp_file().
     */
    set_delete_on_close(delete_on_close: boolean): void
    /**
     * Attaches `d` as a metadata item on `image` as `name`. A
     * convenience
     * function over vips_image_set().
     * 
     * See also: vips_image_get_double(), vips_image_set()
     */
    set_double(name: string, d: number): void
    /**
     * Attaches `im` as a metadata item on `image` as `name`.
     * A convenience function over vips_image_set().
     * 
     * See also: vips_image_get_image(), vips_image_set().
     */
    set_image(name: string, im: Image): void
    /**
     * Attaches `i` as a metadata item on `image` under the name `name`. A
     * convenience
     * function over vips_image_set().
     * 
     * See also: vips_image_get_int(), vips_image_set()
     */
    set_int(name: string, i: number): void
    /**
     * Set the #VipsImage.kill flag on an image. Handy for stopping sets of
     * threads.
     * 
     * See also: vips_image_iskilled().
     */
    set_kill(kill: boolean): void
    /**
     * vips signals evaluation progress via the #VipsImage::preeval,
     * #VipsImage::eval and #VipsImage::posteval
     * signals. Progress is signalled on the most-downstream image for which
     * vips_image_set_progress() was called.
     */
    set_progress(progress: boolean): void
    /**
     * Attaches `str` as a metadata item on `image` as `name`.
     * A convenience
     * function over vips_image_set() using #VIPS_TYPE_REF_STRING.
     * 
     * See also: vips_image_get_double(), vips_image_set().
     */
    set_string(name: string, str: string): void
    /**
     * Check that an image is readable via the VIPS_IMAGE_ADDR() macro, that is,
     * that the entire image is in memory and all pixels can be read with
     * VIPS_IMAGE_ADDR().  If it
     * isn't, try to transform it so that VIPS_IMAGE_ADDR() can work.
     * 
     * Since this function modifies `image,` it is not thread-safe. Only call it on
     * images which you are sure have not been shared with another thread. If the
     * image might have been shared, use the less efficient
     * vips_image_copy_memory() instead.
     * 
     * See also: vips_image_copy_memory(), vips_image_pio_input(),
     * vips_image_inplace(), VIPS_IMAGE_ADDR().
     */
    wio_input(): number
    /**
     * Write `image` to `out`. Use vips_image_new() and friends to create the
     * #VipsImage you want to write to.
     * 
     * See also: vips_image_new(), vips_copy(), vips_image_write_to_file().
     */
    write(): [ /* returnType */ number, /* out */ Image ]
    /**
     * Write a line of pixels to an image. This function must be called repeatedly
     * with `ypos` increasing from 0 to #VipsImage::height .
     * `linebuffer` must be VIPS_IMAGE_SIZEOF_LINE() bytes long.
     * 
     * See also: vips_image_generate().
     */
    write_line(ypos: number, linebuffer: Pel): number
    /**
     * Call this after setting header fields (width, height, and so on) to
     * allocate resources ready for writing.
     * 
     * Normally this function is called for you by vips_image_generate() or
     * vips_image_write_line(). You will need to call it yourself if you plan to
     * write directly to the ->data member of a memory image.
     */
    write_prepare(): number
    /**
     * Writes `in` to memory as a simple, unformatted C-style array.
     * 
     * The caller is responsible for freeing this memory with g_free().
     * 
     * See also: vips_image_write_to_buffer().
     */
    write_to_memory(): Uint8Array
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Image */
    vfunc_eval(progress: Progress, data?: object | null): void
    vfunc_invalidate(data?: object | null): void
    vfunc_minimise(data?: object | null): void
    vfunc_posteval(progress: Progress, data?: object | null): void
    vfunc_preeval(progress: Progress, data?: object | null): void
    vfunc_written(result: number, data?: object | null): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Image */
    /**
     * The ::eval signal is emitted once per work unit (typically a 128 x
     * 128 area of pixels) during image computation.
     * 
     * You can use this signal to update user-interfaces with progress
     * feedback. Beware of updating too frequently: you will usually
     * need some throttling mechanism.
     * 
     * Use vips_image_set_progress() to turn on progress reporting for an
     * image.
     */
    connect(sigName: "eval", callback: (($obj: Image, progress: Progress) => void)): number
    connect_after(sigName: "eval", callback: (($obj: Image, progress: Progress) => void)): number
    emit(sigName: "eval", progress: Progress): void
    /**
     * The ::invalidate signal is emitted when an image or one of it's
     * upstream data sources has been destructively modified. See
     * vips_image_invalidate_all().
     */
    connect(sigName: "invalidate", callback: (($obj: Image) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: Image) => void)): number
    emit(sigName: "invalidate"): void
    /**
     * The ::minimise signal is emitted when an image has been asked to
     * minimise memory usage. All non-essential caches are dropped.
     * See vips_image_minimise_all().
     */
    connect(sigName: "minimise", callback: (($obj: Image) => void)): number
    connect_after(sigName: "minimise", callback: (($obj: Image) => void)): number
    emit(sigName: "minimise"): void
    /**
     * The ::posteval signal is emitted once at the end of the computation
     * of `image`. It's a good place to shut down evaluation feedback.
     * 
     * Use vips_image_set_progress() to turn on progress reporting for an
     * image.
     */
    connect(sigName: "posteval", callback: (($obj: Image, progress: Progress) => void)): number
    connect_after(sigName: "posteval", callback: (($obj: Image, progress: Progress) => void)): number
    emit(sigName: "posteval", progress: Progress): void
    /**
     * The ::preeval signal is emitted once before computation of `image`
     * starts. It's a good place to set up evaluation feedback.
     * 
     * Use vips_image_set_progress() to turn on progress reporting for an
     * image.
     */
    connect(sigName: "preeval", callback: (($obj: Image, progress: Progress) => void)): number
    connect_after(sigName: "preeval", callback: (($obj: Image, progress: Progress) => void)): number
    emit(sigName: "preeval", progress: Progress): void
    /**
     * The ::written signal is emitted just after an image has been
     * written to. It is
     * used by vips to implement things like write to foreign file
     * formats.
     */
    connect(sigName: "written", callback: (($obj: Image) => void)): number
    connect_after(sigName: "written", callback: (($obj: Image) => void)): number
    emit(sigName: "written"): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: Image) => void)): number
    connect_after(sigName: "close", callback: (($obj: Image) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: Image) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: Image) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: Image) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: Image) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: Image) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: Image) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bands", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bands", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filename", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::foreign-buffer", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreign-buffer", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kill", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kill", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sizeof-header", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sizeof-header", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xoffset", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xoffset", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xres", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xres", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yoffset", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yoffset", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::yres", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yres", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static memory(): Image
    static new(): Image
    static new_from_file_RW(filename: string): Image
    static new_from_file_raw(filename: string, xsize: number, ysize: number, bands: number, offset: number): Image
    static new_from_image(image: Image, c: number[]): Image
    static new_from_image1(image: Image, c: number): Image
    static new_from_memory(data: Uint8Array, width: number, height: number, bands: number, format: BandFormat): Image
    static new_from_memory_copy(data: Uint8Array, width: number, height: number, bands: number, format: BandFormat): Image
    static new_matrix(width: number, height: number): Image
    static new_matrix_from_array(width: number, height: number, array: number[]): Image
    static new_temp_file(format: string): Image
    static get_format_max(format: BandFormat): number
    static $gtype: GObject.Type
}
interface Interpolate_ConstructProps extends Object_ConstructProps {
}
class Interpolate {
    /* Fields of Vips-8.0.Vips.Object */
    readonly parent_instance: GObject.Object
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Interpolate */
    /**
     * Look up an interpolators desired window offset.
     */
    get_window_offset(): number
    /**
     * Look up an interpolators desired window size.
     */
    get_window_size(): number
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Interpolate */
    /**
     * Look up an interpolators desired window offset.
     */
    vfunc_get_window_offset(): number
    /**
     * Look up an interpolators desired window size.
     */
    vfunc_get_window_size(): number
    vfunc_interpolate(out: object | null, in_: Region, x: number, y: number): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: Interpolate) => void)): number
    connect_after(sigName: "close", callback: (($obj: Interpolate) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: Interpolate) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: Interpolate) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: Interpolate) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: Interpolate) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: Interpolate) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: Interpolate) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Interpolate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interpolate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Interpolate_ConstructProps)
    _init (config?: Interpolate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(nickname: string): Interpolate
    /**
     * A convenience function that returns a bilinear interpolator you
     * don't need to free.
     */
    static bilinear_static(): Interpolate
    /**
     * A convenience function that returns a nearest-neighbour interpolator you
     * don't need to free.
     */
    static nearest_static(): Interpolate
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Vips-8.0.Vips.Object */
    description?: string
    nickname?: string
}
class Object {
    /* Properties of Vips-8.0.Vips.Object */
    description: string
    nickname: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    preclose(): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: Object) => void)): number
    connect_after(sigName: "close", callback: (($obj: Object) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: Object) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: Object) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: Object) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: Object) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: Object) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: Object) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nickname", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_string(object_class: ObjectClass, p: string): Object
    static get_property(gobject: GObject.Object, property_id: number, value: any, pspec: GObject.ParamSpec): void
    static print_all(): void
    static print_summary_class(klass: ObjectClass): void
    static sanity_all(): void
    static set_property(gobject: GObject.Object, property_id: number, value: any, pspec: GObject.ParamSpec): void
    static install_argument(cls: Object | Function | GObject.Type, pspec: GObject.ParamSpec, flags: ArgumentFlags, priority: number, offset: number): void
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends Object_ConstructProps {
}
class Operation {
    /* Fields of Vips-8.0.Vips.Object */
    readonly parent_instance: GObject.Object
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    get_flags(): OperationFlags
    invalidate(): void
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Operation */
    /**
     * Returns the set of flags for this operation.
     */
    vfunc_get_flags(): OperationFlags
    vfunc_invalidate(): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Operation */
    connect(sigName: "invalidate", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: Operation) => void)): number
    emit(sigName: "invalidate"): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "close", callback: (($obj: Operation) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: Operation) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: Operation) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: Operation) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: Operation) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Operation
    static $gtype: GObject.Type
}
interface Region_ConstructProps extends Object_ConstructProps {
}
class Region {
    /* Fields of Vips-8.0.Vips.Object */
    readonly parent_instance: GObject.Object
    readonly constructed: boolean
    readonly static_object: boolean
    readonly argument_table: ArgumentTable
    readonly nickname: string
    readonly description: string
    readonly preclose: boolean
    readonly close: boolean
    readonly postclose: boolean
    readonly local_memory: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Vips-8.0.Vips.Region */
    /**
     * Paints 0 into the valid part of `reg`.
     * 
     * See also: vips_region_paint().
     */
    black(): void
    /**
     * The region is transformed so that at least `r` pixels are available as a
     * memory buffer that can be written to.
     */
    buffer(r: Rect): number
    /**
     * Copy from one region to another. Copy area `r` from inside `reg` to `dest,`
     * positioning the area of pixels at `x,` `y`. The two regions must have pixels
     * which are the same size.
     * 
     * See also: vips_region_paint().
     */
    copy(dest: Region, r: Rect, x: number, y: number): /* dest */ Region
    /**
     * Do two regions point to the same piece of image? ie.
     * 
     * |[
     * 	VIPS_REGION_ADDR( reg1, x, y ) == VIPS_REGION_ADDR( reg2, x, y ) &&
     * 	*VIPS_REGION_ADDR( reg1, x, y ) ==
     * 		*VIPS_REGION_ADDR( reg2, x, y ) for all x, y, reg1, reg2.
     * ```
     * 
     */
    equalsregion(reg2: Region): number
    /**
     * Generate an area of pixels and return a copy. The result must be freed
     * with g_free(). The requested area must be completely inside the image.
     * 
     * This is equivalent to vips_region_prepare(), followed by a memcpy. It is
     * convenient for language bindings.
     */
    fetch(left: number, top: number, width: number, height: number, len: number): Pel
    height(): number
    /**
     * The region is transformed so that at least `r` pixels are available to be
     * read from the image. The image needs to be a memory buffer or represent a
     * file on disc that has been mapped or can be mapped.
     */
    image(r: Rect): number
    /**
     * Mark a region as containing invalid pixels. Calling this function means
     * that the next time vips_region_prepare() is called, the region will be
     * recalculated.
     * 
     * This is faster than calling vips_image_invalidate_all(), but obviously only
     * affects a single region.
     * 
     * See also: vips_image_invalidate_all(), vips_region_prepare().
     */
    invalidate(): void
    /**
     * Paints `value` into `reg` covering rectangle `r`.
     * `r` is clipped against
     * `reg->`valid.
     * 
     * For int images, `value` is
     * passed to memset(), so it usually needs to be 0 or 255. For float images,
     * value is cast to a float and copied in to each band element.
     * 
     * `r` is clipped against
     * `reg->`valid.
     * 
     * See also: vips_region_black().
     */
    paint(r: Rect, value: number): void
    /**
     * Paints `ink` into `reg` covering rectangle `r`. `r` is clipped against
     * `reg->`valid.
     * 
     * `ink` should be a byte array of the same size as an image pixel containing
     * the binary value to write into the pixels.
     * 
     * See also: vips_region_paint().
     */
    paint_pel(r: Rect, ink: Pel): void
    /**
     * Set the position of a region. This only affects reg->valid, ie. the way
     * pixels are addressed, not reg->data, the pixels which are addressed. Clip
     * against the size of the image. Do not allow negative positions, or
     * positions outside the image.
     */
    position(x: number, y: number): number
    /**
     * vips_region_prepare() fills `reg` with pixels. After calling,
     * you can address at least the area `r` with VIPS_REGION_ADDR() and get
     * valid pixels.
     * 
     * vips_region_prepare() runs in-line, that is, computation is done by
     * the calling thread, no new threads are involved, and computation
     * blocks until the pixels are ready.
     * 
     * Use vips_sink_screen() to calculate an area of pixels in the
     * background.
     * 
     * See also: vips_sink_screen(),
     * vips_region_prepare_to().
     */
    prepare(r: Rect): number
    /**
     * Like vips_region_prepare(): fill `reg` with the pixels in area `r`.
     * 
     * Unlike vips_region_prepare(), rather than writing the result to `reg,` the
     * pixels are written into `dest` at offset `x,` `y`.
     * 
     * Also unlike vips_region_prepare(), `dest` is not set up for writing for
     * you with vips_region_buffer(). You can
     * point `dest` at anything, and pixels really will be written there.
     * This makes vips_region_prepare_to() useful for making the ends of
     * pipelines.
     * 
     * See also: vips_region_prepare(), vips_sink_disc().
     */
    prepare_to(dest: Region, r: Rect, x: number, y: number): number
    /**
     * Make VIPS_REGION_ADDR() on `reg` go to `dest` instead.
     * 
     * `r` is the part of `reg` which you want to be able to address (this
     * effectively becomes the valid field), (`x,` `y)` is the top LH corner of the
     * corresponding area in `dest`.
     * 
     * Performs all clipping necessary to ensure that `reg->`valid is indeed
     * valid.
     * 
     * If the region we attach to is moved or destroyed, we can be left with
     * dangling pointers! If the region we attach to is on another image, the
     * two images must have the same sizeof( pel ).
     */
    region(dest: Region, r: Rect, x: number, y: number): number
    /**
     * Write the pixels `target` in `to` from the x2 larger area in `from`.
     * Non-complex uncoded images and LABQ only. Images with alpha (see
     * vips_image_hasalpha()) shrink with pixels scaled by alpha to avoid fringing.
     * 
     * `method` selects the method used to do the 2x2 shrink.
     * 
     * See also: vips_region_copy().
     */
    shrink_method(to: Region, target: Rect, method: RegionShrink): [ /* returnType */ number, /* to */ Region ]
    width(): number
    /* Methods of Vips-8.0.Vips.Object */
    /**
     * Convenience: has an argument been assigned. Useful for bindings.
     */
    argument_isset(name: string): boolean
    argument_needsstring(name: string): boolean
    build(): number
    /**
     * Convenience: get the flags for an argument. Useful for bindings.
     */
    get_argument_flags(name: string): ArgumentFlags
    /**
     * Convenience: get the priority for an argument. Useful for bindings.
     */
    get_argument_priority(name: string): number
    get_argument_to_string(name: string, arg: string): number
    /**
     * Fetch the object description. Useful for language bindings.
     * 
     * `object`.description is only avaliable after _build(), which can be too
     * late. This function fetches from the instance, if possible, but falls back
     * to the class description if we are too early.
     */
    get_description(): string
    local_cb(gobject: GObject.Object): void
    print_dump(): void
    print_name(): void
    print_summary(): void
    rewind(): void
    sanity(): boolean
    set_argument_from_string(name: string, value: string): number
    /**
     * Set object arguments from a string. The string can be something like
     * "a=12", or "a = 12, b = 13", or "fred". The string can optionally be
     * enclosed in brackets.
     * 
     * You'd typically use this between creating the object and building it.
     * 
     * See also: vips_object_set(), vips_object_build(),
     * vips_cache_operation_buildp().
     */
    set_from_string(string: string): number
    set_required(value: string): number
    set_static(static_object: boolean): void
    /**
     * Unref all assigned output objects. Useful for language bindings.
     * 
     * After an object is built, all output args are owned by the caller. If
     * something goes wrong before then, we have to unref the outputs that have
     * been made so far. This function can also be useful for callers when
     * they've finished processing outputs themselves.
     * 
     * See also: vips_cache_operation_build().
     */
    unref_outputs(): void
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
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     */
    notify(property_name: string): void
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
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
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
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
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
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Vips-8.0.Vips.Object */
    vfunc_build(): number
    vfunc_close(): void
    vfunc_output_to_arg(string: string): number
    vfunc_postbuild(data?: object | null): number
    vfunc_postclose(): void
    vfunc_preclose(): void
    vfunc_rewind(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Vips-8.0.Vips.Object */
    /**
     * The ::close signal is emitted once during object close. The object
     * is dying and may not work.
     */
    connect(sigName: "close", callback: (($obj: Region) => void)): number
    connect_after(sigName: "close", callback: (($obj: Region) => void)): number
    emit(sigName: "close"): void
    /**
     * The ::postbuild signal is emitted once just after successful object
     * construction. Return non-zero to cause object construction to fail.
     */
    connect(sigName: "postbuild", callback: (($obj: Region) => number)): number
    connect_after(sigName: "postbuild", callback: (($obj: Region) => number)): number
    emit(sigName: "postbuild"): void
    /**
     * The ::postclose signal is emitted once after object close. The
     * object pointer is still valid, but nothing else.
     */
    connect(sigName: "postclose", callback: (($obj: Region) => void)): number
    connect_after(sigName: "postclose", callback: (($obj: Region) => void)): number
    emit(sigName: "postclose"): void
    /**
     * The ::preclose signal is emitted once just before object close
     * starts. The oject is still alive.
     */
    connect(sigName: "preclose", callback: (($obj: Region) => void)): number
    connect_after(sigName: "preclose", callback: (($obj: Region) => void)): number
    emit(sigName: "preclose"): void
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
     */
    connect(sigName: "notify", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Region, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Region_ConstructProps)
    _init (config?: Region_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(image: Image): Region
    static $gtype: GObject.Type
}
class Area {
    /* Fields of Vips-8.0.Vips.Area */
    readonly data: object
    readonly length: number
    readonly n: number
    /* Methods of Vips-8.0.Vips.Area */
    copy(): Area
    /**
     * Return the data pointer plus optionally the length in bytes of an area,
     * the number of elements, the %GType of each element and the sizeof() each
     * element.
     */
    get_data(): [ /* returnType */ object | null, /* length */ number | null, /* n */ number | null, /* type */ GObject.Type | null, /* sizeof_type */ number | null ]
    unref(): void
    static name: string
    static new(free_fn: CallbackFn): Area
    constructor(free_fn: CallbackFn)
    /* Static methods and pseudo-constructors */
    static new(free_fn: CallbackFn): Area
    static new_array(type: GObject.Type, sizeof_type: number, n: number): Area
    static new_array_object(n: number): Area
    static free_cb(mem: object | null, area: Area): number
}
class Argument {
    /* Fields of Vips-8.0.Vips.Argument */
    readonly pspec: GObject.ParamSpec
    static name: string
}
class ArgumentClass {
    /* Fields of Vips-8.0.Vips.ArgumentClass */
    readonly parent: Argument
    readonly object_class: ObjectClass
    readonly flags: ArgumentFlags
    readonly priority: number
    readonly offset: number
    /* Methods of Vips-8.0.Vips.ArgumentClass */
    needsstring(): boolean
    static name: string
}
class ArgumentInstance {
    /* Fields of Vips-8.0.Vips.ArgumentInstance */
    readonly parent: Argument
    readonly argument_class: ArgumentClass
    readonly object: Object
    readonly assigned: boolean
    readonly close_id: number
    readonly invalidate_id: number
    static name: string
}
class ArrayDouble {
    /* Fields of Vips-8.0.Vips.ArrayDouble */
    readonly area: Area
    /* Methods of Vips-8.0.Vips.ArrayDouble */
    /**
     * Fetch a double array from a #VipsArrayDouble. Useful for language bindings.
     */
    get(): number[]
    static name: string
    static new(array: number[]): ArrayDouble
    constructor(array: number[])
    /* Static methods and pseudo-constructors */
    static new(array: number[]): ArrayDouble
}
class ArrayImage {
    /* Fields of Vips-8.0.Vips.ArrayImage */
    readonly area: Area
    /* Methods of Vips-8.0.Vips.ArrayImage */
    /**
     * Make a new #VipsArrayImage, one larger than `array,` with `image` appended
     * to the end.
     * Handy with vips_array_image_empty() for bindings
     * which can't handle object array arguments.
     * 
     * See also: vips_array_image_empty().
     */
    append(image: Image): ArrayImage
    /**
     * Fetch an image array from a #VipsArrayImage. Useful for language bindings.
     */
    get(): Image[]
    static name: string
    static new(array: Image[]): ArrayImage
    constructor(array: Image[])
    /* Static methods and pseudo-constructors */
    static empty(): ArrayImage
    static new(array: Image[]): ArrayImage
    static new_from_string(string: string, flags: Access): ArrayImage
}
class ArrayInt {
    /* Fields of Vips-8.0.Vips.ArrayInt */
    readonly area: Area
    /* Methods of Vips-8.0.Vips.ArrayInt */
    /**
     * Fetch an int array from a #VipsArrayInt. Useful for language bindings.
     */
    get(): number[]
    static name: string
    static new(array: number[]): ArrayInt
    constructor(array: number[])
    /* Static methods and pseudo-constructors */
    static new(array: number[]): ArrayInt
}
class Blob {
    /* Fields of Vips-8.0.Vips.Blob */
    readonly area: Area
    /* Methods of Vips-8.0.Vips.Blob */
    /**
     * Get the data from a #VipsBlob.
     * 
     * See also: vips_blob_new().
     */
    get(): Uint8Array
    static name: string
    static new(free_fn: CallbackFn | null, data: Uint8Array): Blob
    constructor(free_fn: CallbackFn | null, data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(free_fn: CallbackFn | null, data: Uint8Array): Blob
    /**
     * Like vips_blob_new(), but take a copy of the data. Useful for bindings
     * which struggle with callbacks.
     * 
     * See also: vips_blob_new().
     */
    static copy(data: Uint8Array): Blob
}
abstract class ForeignClass {
    /* Fields of Vips-8.0.Vips.ForeignClass */
    readonly parent_class: OperationClass
    readonly priority: number
    readonly suffs: string
    static name: string
}
abstract class ForeignLoadClass {
    /* Fields of Vips-8.0.Vips.ForeignLoadClass */
    readonly parent_class: ForeignClass
    readonly is_a: (filename: string) => boolean
    readonly is_a_buffer: (data: object, size: number) => boolean
    readonly is_a_source: (source: Source) => boolean
    readonly get_flags_filename: (filename: string) => ForeignFlags
    readonly get_flags: (load: ForeignLoad) => ForeignFlags
    readonly header: (load: ForeignLoad) => number
    readonly load: (load: ForeignLoad) => number
    static name: string
}
abstract class ForeignSaveClass {
    /* Fields of Vips-8.0.Vips.ForeignSaveClass */
    readonly parent_class: ForeignClass
    readonly saveable: Saveable
    readonly format_table: BandFormat
    readonly coding: boolean[]
    static name: string
}
abstract class ImageClass {
    /* Fields of Vips-8.0.Vips.ImageClass */
    readonly parent_class: ObjectClass
    readonly preeval: (image: Image, progress: Progress, data?: object | null) => void
    readonly eval_: (image: Image, progress: Progress, data?: object | null) => void
    readonly posteval: (image: Image, progress: Progress, data?: object | null) => void
    readonly written: (image: Image, result: number, data?: object | null) => void
    readonly invalidate: (image: Image, data?: object | null) => void
    readonly minimise: (image: Image, data?: object | null) => void
    static name: string
}
abstract class InterpolateClass {
    /* Fields of Vips-8.0.Vips.InterpolateClass */
    readonly parent_class: ObjectClass
    /**
     * the interpolation method
     */
    readonly interpolate: InterpolateMethod
    readonly get_window_size: (interpolate: Interpolate) => number
    /**
     * or just set this for a constant window size
     */
    readonly window_size: number
    readonly get_window_offset: (interpolate: Interpolate) => number
    /**
     * or just set this for a constant window offset
     */
    readonly window_offset: number
    static name: string
}
abstract class ObjectClass {
    /* Fields of Vips-8.0.Vips.ObjectClass */
    readonly parent_class: GObject.ObjectClass
    readonly build: (object: Object) => number
    readonly postbuild: (object: Object, data?: object | null) => number
    readonly rewind: (object: Object) => void
    readonly preclose: (object: Object) => void
    readonly close: (object: Object) => void
    readonly postclose: (object: Object) => void
    readonly output_needs_arg: boolean
    readonly output_to_arg: (object: Object, string: string) => number
    readonly nickname: string
    readonly description: string
    readonly argument_table: ArgumentTable
    readonly argument_table_traverse: object[]
    readonly argument_table_traverse_gtype: GObject.Type
    readonly deprecated: boolean
    /* Methods of Vips-8.0.Vips.ObjectClass */
    static install_argument(cls: Object | Function | GObject.Type, pspec: GObject.ParamSpec, flags: ArgumentFlags, priority: number, offset: number): void
    static name: string
}
abstract class OperationClass {
    /* Fields of Vips-8.0.Vips.OperationClass */
    readonly parent_class: ObjectClass
    readonly get_flags: (operation: Operation) => OperationFlags
    readonly flags: OperationFlags
    readonly invalidate: (operation: Operation) => void
    static name: string
}
class Progress {
    /* Fields of Vips-8.0.Vips.Progress */
    /**
     * Time we have been running
     */
    readonly run: number
    /**
     * Estimated seconds of computation left
     */
    readonly eta: number
    /**
     * Number of pels we expect to calculate
     */
    readonly tpels: number
    /**
     * Number of pels calculated so far
     */
    readonly npels: number
    /**
     * Percent complete
     */
    readonly percent: number
    /**
     * Start time
     */
    readonly start: GLib.Timer
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * If set, vips will print messages about the progress of computation to
     * stdout. This can also be enabled with the --vips-progress option, or by
     * setting the environment variable VIPS_PROGRESS.
     */
    static set(progress: boolean): void
}
class Rect {
    /* Fields of Vips-8.0.Vips.Rect */
    /**
     * left edge of rectangle
     */
    readonly left: number
    /**
     * top edge of rectangle
     */
    readonly top: number
    /**
     * width of rectangle
     */
    readonly width: number
    /**
     * height of rectangle
     */
    readonly height: number
    /* Methods of Vips-8.0.Vips.Rect */
    /**
     * Is `r1` equal to `r2`?
     */
    equalsrect(r2: Rect): boolean
    /**
     * Does `r` contain point (`x,` `y)`?
     */
    includespoint(x: number, y: number): boolean
    /**
     * Is `r2` a subset of `r1`?
     */
    includesrect(r2: Rect): boolean
    /**
     * Fill `out` with the intersection of `r1` and `r2`. `out` can equal `r1` or `r2`.
     */
    intersectrect(r2: Rect): /* out */ Rect
    /**
     * Is `r` empty? ie. zero width or height.
     */
    isempty(): boolean
    /**
     * Enlarge `r` by `n`. +1 means out one pixel.
     */
    marginadjust(n: number): void
    /**
     * Make sure width and height are >0 by moving the origin and flipping the
     * rect.
     */
    normalise(): void
    /**
     * Do `r1` and `r2` have a non-empty intersection?
     */
    overlapsrect(r2: Rect): boolean
    /**
     * Fill `out` with the bounding box of `r1` and `r2`. `out` can equal `r1` or `r2`.
     */
    unionrect(r2: Rect): /* out */ Rect
    static name: string
}
class RefString {
    /* Fields of Vips-8.0.Vips.RefString */
    readonly area: Area
    /* Methods of Vips-8.0.Vips.RefString */
    /**
     * Get a pointer to the private string inside a refstr. Handy for language
     * bindings.
     * 
     * See also: vips_value_get_ref_string().
     */
    get(): [ /* returnType */ string, /* length */ number | null ]
    static name: string
    static new(str: string): RefString
    constructor(str: string)
    /* Static methods and pseudo-constructors */
    static new(str: string): RefString
}
abstract class RegionClass {
    /* Fields of Vips-8.0.Vips.RegionClass */
    readonly parent_class: ObjectClass
    static name: string
}
class Source {
    static name: string
}
class Target {
    static name: string
}
class Thing {
    /* Fields of Vips-8.0.Vips.Thing */
    readonly i: number
    static name: string
    static new(i: number): Thing
    constructor(i: number)
    /* Static methods and pseudo-constructors */
    static new(i: number): Thing
}
    type ArgumentTable = GLib.HashTable
    type Pel = number
}
export default Vips;