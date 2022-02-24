/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cogl-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GL from './GL-1.0';

export namespace Cogl {

/**
 * Data types for the components of a vertex attribute.
 */
enum AttributeType {
    /**
     * Data is the same size of a byte
     */
    BYTE,
    /**
     * Data is the same size of an
     *   unsigned byte
     */
    UNSIGNED_BYTE,
    /**
     * Data is the same size of a short integer
     */
    SHORT,
    /**
     * Data is the same size of
     *   an unsigned short integer
     */
    UNSIGNED_SHORT,
    /**
     * Data is the same size of a float
     */
    FLOAT,
}
/**
 * Error codes that can be thrown when performing bitmap
 * operations. Note that gdk_pixbuf_new_from_file() can also throw
 * errors directly from the underlying image loading library. For
 * example, if GdkPixbuf is used then errors #GdkPixbufError<!-- -->s
 * will be used directly.
 */
enum BitmapError {
    /**
     * Generic failure code, something went
     *   wrong.
     */
    FAILED,
    /**
     * Unknown image type.
     */
    UNKNOWN_TYPE,
    /**
     * An image file was broken somehow.
     */
    CORRUPT_IMAGE,
}
/**
 * Error enumeration for the blend strings parser
 */
enum BlendStringError {
    /**
     * Generic parse error
     */
    PARSE_ERROR,
    /**
     * Argument parse error
     */
    ARGUMENT_PARSE_ERROR,
    /**
     * Internal parser error
     */
    INVALID_ERROR,
    /**
     * Blend string not
     *   supported by the GPU
     */
    GPU_UNSUPPORTED_ERROR,
}
/**
 * When using depth testing one of these functions is used to compare
 * the depth of an incoming fragment against the depth value currently
 * stored in the depth buffer. The function is changed using
 * cogl_depth_state_set_test_function().
 * 
 * The test is only done when depth testing is explicitly enabled. (See
 * cogl_depth_state_set_test_enabled())
 */
enum DepthTestFunction {
    /**
     * Never passes.
     */
    NEVER,
    /**
     * Passes if the fragment's depth
     * value is less than the value currently in the depth buffer.
     */
    LESS,
    /**
     * Passes if the fragment's depth
     * value is equal to the value currently in the depth buffer.
     */
    EQUAL,
    /**
     * Passes if the fragment's depth
     * value is less or equal to the value currently in the depth buffer.
     */
    LEQUAL,
    /**
     * Passes if the fragment's depth
     * value is greater than the value currently in the depth buffer.
     */
    GREATER,
    /**
     * Passes if the fragment's depth
     * value is not equal to the value currently in the depth buffer.
     */
    NOTEQUAL,
    /**
     * Passes if the fragment's depth
     * value greater than or equal to the value currently in the depth buffer.
     */
    GEQUAL,
    /**
     * Always passes.
     */
    ALWAYS,
}
/**
 * Return values for the #CoglXlibFilterFunc and #CoglWin32FilterFunc functions.
 */
enum FilterReturn {
    /**
     * The event was not handled, continues the
     *                        processing
     */
    CONTINUE,
    /**
     * Remove the event, stops the processing
     */
    REMOVE,
}
/**
 * The fog mode determines the equation used to calculate the fogging blend
 * factor while fogging is enabled. The simplest %COGL_FOG_MODE_LINEAR mode
 * determines f as:
 * 
 * |[
 *   f = end - eye_distance / end - start
 * ```
 * 
 * 
 * Where eye_distance is the distance of the current fragment in eye
 * coordinates from the origin.
 */
enum FogMode {
    /**
     * Calculates the fog blend factor as:
     * |[
     *   f = end - eye_distance / end - start
     * ```
     * 
     */
    LINEAR,
    /**
     * Calculates the fog blend factor as:
     * |[
     *   f = e ^ -(density * eye_distance)
     * ```
     * 
     */
    EXPONENTIAL,
    /**
     * Calculates the fog blend factor as:
     * |[
     *   f = e ^ -(density * eye_distance)^2
     * ```
     * 
     */
    EXPONENTIAL_SQUARED,
}
/**
 * You should aim to use the smallest data type that gives you enough
 * range, since it reduces the size of your index array and can help
 * reduce the demand on memory bandwidth.
 * 
 * Note that %COGL_INDICES_TYPE_UNSIGNED_INT is only supported if the
 * %COGL_FEATURE_ID_UNSIGNED_INT_INDICES feature is available. This
 * should always be available on OpenGL but on OpenGL ES it will only
 * be available if the GL_OES_element_index_uint extension is
 * advertized.
 */
enum IndicesType {
    /**
     * Your indices are unsigned bytes
     */
    BYTE,
    /**
     * Your indices are unsigned shorts
     */
    SHORT,
    /**
     * Your indices are unsigned ints
     */
    INT,
}
/**
 * Alpha testing happens before blending primitives with the framebuffer and
 * gives an opportunity to discard fragments based on a comparison with the
 * incoming alpha value and a reference alpha value. The #CoglMaterialAlphaFunc
 * determines how the comparison is done.
 */
enum MaterialAlphaFunc {
    /**
     * Never let the fragment through.
     */
    NEVER,
    /**
     * Let the fragment through if the incoming
     *   alpha value is less than the reference alpha value
     */
    LESS,
    /**
     * Let the fragment through if the incoming
     *   alpha value equals the reference alpha value
     */
    EQUAL,
    /**
     * Let the fragment through if the incoming
     *   alpha value is less than or equal to the reference alpha value
     */
    LEQUAL,
    /**
     * Let the fragment through if the incoming
     *   alpha value is greater than the reference alpha value
     */
    GREATER,
    /**
     * Let the fragment through if the incoming
     *   alpha value does not equal the reference alpha value
     */
    NOTEQUAL,
    /**
     * Let the fragment through if the incoming
     *   alpha value is greater than or equal to the reference alpha value.
     */
    GEQUAL,
    /**
     * Always let the fragment through.
     */
    ALWAYS,
}
/**
 * Texture filtering is used whenever the current pixel maps either to more
 * than one texture element (texel) or less than one. These filter enums
 * correspond to different strategies used to come up with a pixel color, by
 * possibly referring to multiple neighbouring texels and taking a weighted
 * average or simply using the nearest texel.
 */
enum MaterialFilter {
    /**
     * Measuring in manhatten distance from the,
     *   current pixel center, use the nearest texture texel
     */
    NEAREST,
    /**
     * Use the weighted average of the 4 texels
     *   nearest the current pixel center
     */
    LINEAR,
    /**
     * Select the mimap level whose
     *   texel size most closely matches the current pixel, and use the
     *   %COGL_MATERIAL_FILTER_NEAREST criterion
     */
    NEAREST_MIPMAP_NEAREST,
    /**
     * Select the mimap level whose
     *   texel size most closely matches the current pixel, and use the
     *   %COGL_MATERIAL_FILTER_LINEAR criterion
     */
    LINEAR_MIPMAP_NEAREST,
    /**
     * Select the two mimap levels
     *   whose texel size most closely matches the current pixel, use
     *   the %COGL_MATERIAL_FILTER_NEAREST criterion on each one and take
     *   their weighted average
     */
    NEAREST_MIPMAP_LINEAR,
    /**
     * Select the two mimap levels
     *   whose texel size most closely matches the current pixel, use
     *   the %COGL_MATERIAL_FILTER_LINEAR criterion on each one and take
     *   their weighted average
     */
    LINEAR_MIPMAP_LINEAR,
}
/**
 * Available types of layers for a #CoglMaterial. This enumeration
 * might be expanded in later versions.
 */
enum MaterialLayerType {
    /**
     * The layer represents a
     *   <link linkend="cogl-Textures">texture</link>
     */
    TEXTURE,
}
/**
 * The wrap mode specifies what happens when texture coordinates
 * outside the range 0→1 are used. Note that if the filter mode is
 * anything but %COGL_MATERIAL_FILTER_NEAREST then texels outside the
 * range 0→1 might be used even when the coordinate is exactly 0 or 1
 * because OpenGL will try to sample neighbouring pixels. For example
 * if you are trying to render the full texture then you may get
 * artifacts around the edges when the pixels from the other side are
 * merged in if the wrap mode is set to repeat.
 */
enum MaterialWrapMode {
    /**
     * The texture will be repeated. This
     *   is useful for example to draw a tiled background.
     */
    REPEAT,
    /**
     * The coordinates outside the
     *   range 0→1 will sample copies of the edge pixels of the
     *   texture. This is useful to avoid artifacts if only one copy of
     *   the texture is being rendered.
     */
    CLAMP_TO_EDGE,
    /**
     * Cogl will try to automatically
     *   decide which of the above two to use. For cogl_rectangle(), it
     *   will use repeat mode if any of the texture coordinates are
     *   outside the range 0→1, otherwise it will use clamp to edge. For
     *   cogl_polygon() it will always use repeat mode. For
     *   cogl_vertex_buffer_draw() it will use repeat mode except for
     *   layers that have point sprite coordinate generation enabled. This
     *   is the default value.
     */
    AUTOMATIC,
}
/**
 * Pixel formats used by Cogl. For the formats with a byte per
 * component, the order of the components specify the order in
 * increasing memory addresses. So for example
 * %COGL_PIXEL_FORMAT_RGB_888 would have the red component in the
 * lowest address, green in the next address and blue after that
 * regardless of the endianness of the system.
 * 
 * For the formats with non byte aligned components the component
 * order specifies the order within a 16-bit or 32-bit number from
 * most significant bit to least significant. So for
 * %COGL_PIXEL_FORMAT_RGB_565, the red component would be in bits
 * 11-15, the green component would be in 6-11 and the blue component
 * would be in 1-5. Therefore the order in memory depends on the
 * endianness of the system.
 * 
 * When uploading a texture %COGL_PIXEL_FORMAT_ANY can be used as the
 * internal format. Cogl will try to pick the best format to use
 * internally and convert the texture data if necessary.
 */
enum PixelFormat {
    /**
     * Any format
     */
    ANY,
    /**
     * 8 bits alpha mask
     */
    A_8,
    /**
     * RGB, 16 bits
     */
    RGB_565,
    /**
     * RGBA, 16 bits
     */
    RGBA_4444,
    /**
     * RGBA, 16 bits
     */
    RGBA_5551,
    /**
     * Not currently supported
     */
    YUV,
    /**
     * Single luminance component
     */
    G_8,
    /**
     * RG, 16 bits. Note that red-green textures
     *   are only available if %COGL_FEATURE_ID_TEXTURE_RG is advertised.
     *   See cogl_texture_set_components() for details.
     */
    RG_88,
    /**
     * RGB, 24 bits
     */
    RGB_888,
    /**
     * BGR, 24 bits
     */
    BGR_888,
    /**
     * RGBA, 32 bits
     */
    RGBA_8888,
    /**
     * BGRA, 32 bits
     */
    BGRA_8888,
    /**
     * ARGB, 32 bits
     */
    ARGB_8888,
    /**
     * ABGR, 32 bits
     */
    ABGR_8888,
    /**
     * RGBA, 32 bits, 10 bpc
     */
    RGBA_1010102,
    /**
     * BGRA, 32 bits, 10 bpc
     */
    BGRA_1010102,
    /**
     * ARGB, 32 bits, 10 bpc
     */
    ARGB_2101010,
    /**
     * ABGR, 32 bits, 10 bpc
     */
    ABGR_2101010,
    /**
     * Premultiplied RGBA, 32 bits
     */
    RGBA_8888_PRE,
    /**
     * Premultiplied BGRA, 32 bits
     */
    BGRA_8888_PRE,
    /**
     * Premultiplied ARGB, 32 bits
     */
    ARGB_8888_PRE,
    /**
     * Premultiplied ABGR, 32 bits
     */
    ABGR_8888_PRE,
    /**
     * Premultiplied RGBA, 16 bits
     */
    RGBA_4444_PRE,
    /**
     * Premultiplied RGBA, 16 bits
     */
    RGBA_5551_PRE,
    /**
     * Premultiplied RGBA, 32 bits, 10 bpc
     */
    RGBA_1010102_PRE,
    /**
     * Premultiplied BGRA, 32 bits, 10 bpc
     */
    BGRA_1010102_PRE,
    /**
     * Premultiplied ARGB, 32 bits, 10 bpc
     */
    ARGB_2101010_PRE,
    /**
     * Premultiplied ABGR, 32 bits, 10 bpc
     */
    ABGR_2101010_PRE,
    DEPTH_16,
    DEPTH_32,
    DEPTH_24_STENCIL_8,
}
enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
/**
 * Types of shaders
 */
enum ShaderType {
    /**
     * A program for proccessing vertices
     */
    VERTEX,
    /**
     * A program for processing fragments
     */
    FRAGMENT,
}
/**
 * Represents how draw should affect the two buffers
 * of a stereo framebuffer. See cogl_framebuffer_set_stereo_mode().
 */
enum StereoMode {
    /**
     * draw to both stereo buffers
     */
    BOTH,
    /**
     * draw only to the left stereo buffer
     */
    LEFT,
    /**
     * draw only to the left stereo buffer
     */
    RIGHT,
}
/**
 * Error enumeration for Cogl
 * 
 * The `COGL_SYSTEM_ERROR_UNSUPPORTED` error can be thrown for a
 * variety of reasons. For example:
 * 
 * <itemizedlist>
 *  <listitem><para>You've tried to use a feature that is not
 *   advertised by cogl_has_feature(). This could happen if you create
 *   a 2d texture with a non-power-of-two size when
 *   %COGL_FEATURE_ID_TEXTURE_NPOT is not advertised.</para></listitem>
 *  <listitem><para>The GPU can not handle the configuration you have
 *   requested. An example might be if you try to use too many texture
 *   layers in a single #CoglPipeline</para></listitem>
 *  <listitem><para>The driver does not support some
 *   configuration.</para></listiem>
 * </itemizedlist>
 * 
 * Currently this is only used by Cogl API marked as experimental so
 * this enum should also be considered experimental.
 */
enum SystemError {
    /**
     * You tried to use a feature or
     *    configuration not currently available.
     */
    COGL_SYSTEM_ERROR_UNSUPPORTED,
    /**
     * You tried to allocate a resource
     *    such as a texture and there wasn't enough memory.
     */
    COGL_SYSTEM_ERROR_NO_MEMORY,
}
/**
 * See cogl_texture_set_components().
 */
enum TextureComponents {
    /**
     * Only the alpha component
     */
    A,
    /**
     * Red and green components. Note that
     *   this can only be used if the %COGL_FEATURE_ID_TEXTURE_RG feature
     *   is advertised.
     */
    RG,
    /**
     * Red, green and blue components
     */
    RGB,
    /**
     * Red, green, blue and alpha components
     */
    RGBA,
    /**
     * Only a depth component
     */
    DEPTH,
}
/**
 * Error codes that can be thrown when allocating textures.
 */
enum TextureError {
    /**
     * Unsupported size
     */
    SIZE,
    /**
     * Unsupported format
     */
    FORMAT,
    BAD_PARAMETER,
    /**
     * A primitive texture type that is
     *   unsupported by the driver was used
     */
    TYPE,
}
/**
 * Constants representing the underlying hardware texture type of a
 * #CoglTexture.
 */
enum TextureType {
    /**
     * A #CoglTexture2D
     */
    TODO_2D,
    /**
     * A #CoglTexture3D
     */
    TODO_3D,
    /**
     * A #CoglTextureRectangle
     */
    RECTANGLE,
}
/**
 * Different ways of interpreting vertices when drawing.
 */
enum VerticesMode {
    /**
     * FIXME, equivalent to
     * <constant>GL_POINTS</constant>
     */
    POINTS,
    /**
     * FIXME, equivalent to <constant>GL_LINES</constant>
     */
    LINES,
    /**
     * FIXME, equivalent to
     * <constant>GL_LINE_LOOP</constant>
     */
    LINE_LOOP,
    /**
     * FIXME, equivalent to
     * <constant>GL_LINE_STRIP</constant>
     */
    LINE_STRIP,
    /**
     * FIXME, equivalent to
     * <constant>GL_TRIANGLES</constant>
     */
    TRIANGLES,
    /**
     * FIXME, equivalent to
     * <constant>GL_TRIANGLE_STRIP</constant>
     */
    TRIANGLE_STRIP,
    /**
     * FIXME, equivalent to <constant>GL_TRIANGLE_FAN</constant>
     */
    TRIANGLE_FAN,
}
/**
 * Enum used to represent the two directions of rotation. This can be
 * used to set the front face for culling by calling
 * cogl_pipeline_set_front_face_winding().
 */
enum Winding {
    /**
     * Vertices are in a clockwise order
     */
    CLOCKWISE,
    /**
     * Vertices are in a counter-clockwise order
     */
    COUNTER_CLOCKWISE,
}
enum WinsysFeature {
    MULTIPLE_ONSCREEN,
    SWAP_THROTTLE,
    VBLANK_COUNTER,
    VBLANK_WAIT,
    TEXTURE_FROM_PIXMAP,
    SWAP_BUFFERS_EVENT,
    SWAP_REGION,
    SWAP_REGION_THROTTLE,
    SWAP_REGION_SYNCHRONIZED,
    BUFFER_AGE,
    SYNC_AND_COMPLETE_EVENT,
    N_FEATURES,
}
/**
 * Types of auxiliary buffers
 */
enum BufferBit {
    /**
     * Selects the primary color buffer
     */
    COLOR,
    /**
     * Selects the depth buffer
     */
    DEPTH,
    /**
     * Selects the stencil buffer
     */
    STENCIL,
}
/**
 * Target flags for FBOs.
 */
enum BufferTarget {
    /**
     * FIXME
     */
    WINDOW_BUFFER,
    /**
     * FIXME
     */
    OFFSCREEN_BUFFER,
}
/**
 * Defines a bit mask of color channels. This can be used with
 * cogl_pipeline_set_color_mask() for example to define which color
 * channels should be written to the current framebuffer when
 * drawing something.
 */
enum ColorMask {
    /**
     * None of the color channels are masked
     */
    NONE,
    /**
     * Masks the red color channel
     */
    RED,
    /**
     * Masks the green color channel
     */
    GREEN,
    /**
     * Masks the blue color channel
     */
    BLUE,
    /**
     * Masks the alpha color channel
     */
    ALPHA,
    /**
     * All of the color channels are masked
     */
    ALL,
}
/**
 * Flags for the supported features.
 */
enum FeatureFlags {
    /**
     * ARB_texture_rectangle support
     */
    TEXTURE_RECTANGLE,
    /**
     * Non power of two textures are supported
     *    by the hardware. This is a equivalent to the
     *    %COGL_FEATURE_TEXTURE_NPOT_BASIC, %COGL_FEATURE_TEXTURE_NPOT_MIPMAP
     *    and %COGL_FEATURE_TEXTURE_NPOT_REPEAT features combined.
     */
    TEXTURE_NPOT,
    /**
     * ycbcr conversion support
     */
    TEXTURE_YUV,
    /**
     * glReadPixels() support
     */
    TEXTURE_READ_PIXELS,
    /**
     * GLSL support
     */
    SHADERS_GLSL,
    /**
     * FBO support
     */
    OFFSCREEN,
    /**
     * Multisample support on FBOs
     */
    OFFSCREEN_MULTISAMPLE,
    /**
     * Blit support on FBOs
     */
    OFFSCREEN_BLIT,
    /**
     * At least 4 clip planes available
     */
    FOUR_CLIP_PLANES,
    /**
     * Stencil buffer support
     */
    STENCIL_BUFFER,
    /**
     * VBO support
     */
    VBOS,
    /**
     * PBO support
     */
    PBOS,
    /**
     * Set if
     *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
     *     cogl_vertex_buffer_indices_new().
     */
    UNSIGNED_INT_INDICES,
    /**
     * cogl_material_set_depth_range() support
     */
    DEPTH_RANGE,
    /**
     * The hardware supports non power
     *     of two textures, but you also need to check the
     *     %COGL_FEATURE_TEXTURE_NPOT_MIPMAP and %COGL_FEATURE_TEXTURE_NPOT_REPEAT
     *     features to know if the hardware supports npot texture mipmaps
     *     or repeat modes other than
     *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE respectively.
     */
    TEXTURE_NPOT_BASIC,
    /**
     * Mipmapping is supported in
     *     conjuntion with non power of two textures.
     */
    TEXTURE_NPOT_MIPMAP,
    /**
     * Repeat modes other than
     *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE are supported by the
     *     hardware.
     */
    TEXTURE_NPOT_REPEAT,
    /**
     * Whether
     *     cogl_material_set_layer_point_sprite_coords_enabled() is supported.
     */
    POINT_SPRITE,
    /**
     * 3D texture support
     */
    TEXTURE_3D,
    /**
     * ARBFP support
     */
    SHADERS_ARBFP,
    /**
     * Whether cogl_buffer_map() is
     *     supported with CoglBufferAccess including read support.
     */
    MAP_BUFFER_FOR_READ,
    /**
     * Whether cogl_buffer_map() is
     *     supported with CoglBufferAccess including write support.
     */
    MAP_BUFFER_FOR_WRITE,
    ONSCREEN_MULTIPLE,
    /**
     * Whether #CoglFramebuffer support rendering the
     *     depth buffer to a texture.
     */
    DEPTH_TEXTURE,
}
/**
 * Flags for cogl_framebuffer_read_pixels_into_bitmap()
 */
enum ReadPixelsFlags {
    /**
     * Read from the color buffer
     */
    COLOR_BUFFER,
}
/**
 * Flags to pass to the cogl_texture_new_* family of functions.
 */
enum TextureFlags {
    /**
     * No flags specified
     */
    NONE,
    /**
     * Disables the automatic generation of
     *   the mipmap pyramid from the base level image whenever it is
     *   updated. The mipmaps are only generated when the texture is
     *   rendered with a mipmap filter so it should be free to leave out
     *   this flag when using other filtering modes
     */
    NO_AUTO_MIPMAP,
    /**
     * Disables the slicing of the texture
     */
    NO_SLICING,
    /**
     * Disables the insertion of the texture inside
     *   the texture atlas used by Cogl
     */
    NO_ATLAS,
}
const AFIRST_BIT: number
const A_BIT: number
const BGR_BIT: number
const DEPTH_BIT: number
/**
 * The number 0.5 expressed as a #CoglFixed number.
 */
const FIXED_0_5: number
/**
 * The number 1 expressed as a #CoglFixed number.
 */
const FIXED_1: number
/**
 * Two times pi, expressed as a #CoglFixed number.
 */
const FIXED_2_PI: number
/**
 * Evaluates to the number of bits used by the #CoglFixed type.
 */
const FIXED_BITS: number
/**
 * A very small number expressed as a #CoglFixed number.
 */
const FIXED_EPSILON: number
/**
 * The biggest number representable using #CoglFixed
 */
const FIXED_MAX: number
/**
 * The smallest number representable using #CoglFixed
 */
const FIXED_MIN: number
/**
 * The number pi, expressed as a #CoglFixed number.
 */
const FIXED_PI: number
/**
 * Half pi, expressed as a #CoglFixed number.
 */
const FIXED_PI_2: number
/**
 * pi / 4, expressed as #CoglFixed number.
 */
const FIXED_PI_4: number
/**
 * Evaluates to the number of bits used for the non-integer part
 * of the #CoglFixed type.
 */
const FIXED_Q: number
const PREMULT_BIT: number
/**
 * Evaluates to 180 / pi in fixed point notation.
 */
const RADIANS_TO_DEGREES: number
/**
 * Maximum argument that can be passed to cogl_sqrti() for which the
 * resulting error is < 10%
 */
const SQRTI_ARG_10_PERCENT: number
/**
 * Maximum argument that can be passed to cogl_sqrti() for which the
 * resulting error is < 5%
 */
const SQRTI_ARG_5_PERCENT: number
/**
 * Maximum argument that can be passed to cogl_sqrti() function.
 */
const SQRTI_ARG_MAX: number
const STENCIL_BIT: number
const TEXTURE_MAX_WASTE: number
function beginGl(): void
function bitmapErrorQuark(): number
function blendStringErrorQuark(): number
function checkExtension(name: string, ext: string): Bool
function clear(color: Color, buffers: number): void
function clipEnsure(): void
function clipPop(): void
function clipPush(xOffset: number, yOffset: number, width: number, height: number): void
function clipPushRectangle(x0: number, y0: number, x1: number, y1: number): void
function clipPushWindowRect(xOffset: number, yOffset: number, width: number, height: number): void
function clipPushWindowRectangle(xOffset: number, yOffset: number, width: number, height: number): void
function clipStackRestore(): void
function clipStackSave(): void
function clutterCheckExtensionCLUTTER(name: string, ext: string): Bool
function clutterWinsysHasFeatureCLUTTER(feature: WinsysFeature): Bool
function colorEqual(v1?: object | null, v2?: object | null): Bool
function colorInitFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
function createProgram(): Handle
function createShader(shaderType: ShaderType): Handle
function debugMatrixPrint(matrix: Matrix): void
function disableFog(): void
function doubleToInt(value: number): number
function doubleToUint(value: number): number
function endGl(): void
function featuresAvailable(features: FeatureFlags): Bool
function flush(): void
function frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
function getBackfaceCullingEnabled(): Bool
function getBitmasks(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
function getDepthTestEnabled(): Bool
function getFeatures(): FeatureFlags
function getModelviewMatrix(): /* matrix */ Matrix
function getOptionGroup(): GLib.OptionGroup
function getProjectionMatrix(): /* matrix */ Matrix
function getSource(): object | null
function getViewport(): /* v */ number[]
function gtypeMatrixGetType(): GObject.Type
function handleGetType(): GObject.Type
function handleRef(handle: Handle): Handle
function handleUnref(handle: Handle): void
function isBitmap(object?: object | null): Bool
function isMaterial(handle: Handle): Bool
function isOffscreen(object?: object | null): Bool
function isProgram(handle: Handle): Bool
function isShader(handle: Handle): Bool
function isTexture(object?: object | null): Bool
function isVertexBuffer(handle: Handle): Bool
function isVertexBufferIndices(handle: Handle): Bool
function materialRef(material: Handle): Handle
function materialUnref(material: Handle): void
function matrixEqual(v1?: object | null, v2?: object | null): Bool
function onscreenClutterBackendSetSizeCLUTTER(width: number, height: number): void
function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
function perspective(fovy: number, aspect: number, zNear: number, zFar: number): void
function polygon(vertices: TextureVertex, nVertices: number, useColor: Bool): void
function popDrawBuffer(): void
function popFramebuffer(): void
function popMatrix(): void
function popSource(): void
function programAttachShader(programHandle: Handle, shaderHandle: Handle): void
function programGetUniformLocation(handle: Handle, uniformName: string): number
function programLink(handle: Handle): void
function programRef(handle: Handle): Handle
function programSetUniform1f(program: Handle, uniformLocation: number, value: number): void
function programSetUniform1i(program: Handle, uniformLocation: number, value: number): void
function programSetUniformFloat(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
function programSetUniformInt(program: Handle, uniformLocation: number, nComponents: number, value: number[]): void
function programSetUniformMatrix(program: Handle, uniformLocation: number, dimensions: number, transpose: Bool, value: number[]): void
function programUniform1f(uniformNo: number, value: number): void
function programUniform1i(uniformNo: number, value: number): void
function programUniformFloat(uniformNo: number, size: number, value: number[]): void
function programUniformInt(uniformNo: number, size: number, value: number[]): void
function programUniformMatrix(uniformNo: number, size: number, transpose: Bool, value: number[]): void
function programUnref(handle: Handle): void
function programUse(handle: Handle): void
function pushDrawBuffer(): void
function pushMatrix(): void
function pushSource(material?: object | null): void
function readPixels(x: number, y: number, width: number, height: number, source: ReadPixelsFlags, format: PixelFormat, pixels: number): void
function rectangle(x1: number, y1: number, x2: number, y2: number): void
function rectangleWithMultitextureCoords(x1: number, y1: number, x2: number, y2: number, texCoords: number[], texCoordsLen: number): void
function rectangleWithTextureCoords(x1: number, y1: number, x2: number, y2: number, tx1: number, ty1: number, tx2: number, ty2: number): void
function rectangles(verts: number[], nRects: number): void
function rectanglesWithTextureCoords(verts: number[], nRects: number): void
function rotate(angle: number, x: number, y: number, z: number): void
function scale(x: number, y: number, z: number): void
function setBackfaceCullingEnabled(setting: Bool): void
function setDepthTestEnabled(setting: Bool): void
function setDrawBuffer(target: BufferTarget, offscreen: Handle): void
function setFog(fogColor: Color, mode: FogMode, density: number, zNear: number, zFar: number): void
function setModelviewMatrix(matrix: Matrix): void
function setProjectionMatrix(matrix: Matrix): void
function setSource(material?: object | null): void
function setSourceColor(color: Color): void
function setSourceColor4f(red: number, green: number, blue: number, alpha: number): void
function setSourceColor4ub(red: number, green: number, blue: number, alpha: number): void
function setSourceTexture(texture: Texture): void
function setViewport(x: number, y: number, width: number, height: number): void
function shaderCompile(handle: Handle): void
function shaderGetInfoLog(handle: Handle): string
function shaderGetType(handle: Handle): ShaderType
function shaderIsCompiled(handle: Handle): Bool
function shaderRef(handle: Handle): Handle
function shaderSource(shader: Handle, source: string): void
function shaderUnref(handle: Handle): void
function sqrti(x: number): number
function textureErrorQuark(): number
function transform(matrix: Matrix): void
function translate(x: number, y: number, z: number): void
function vertexBufferAdd(handle: Handle, attributeName: string, nComponents: number, type: AttributeType, normalized: Bool, stride: number, pointer?: object | null): void
function vertexBufferDelete(handle: Handle, attributeName: string): void
function vertexBufferDisable(handle: Handle, attributeName: string): void
function vertexBufferDraw(handle: Handle, mode: VerticesMode, first: number, count: number): void
function vertexBufferDrawElements(handle: Handle, mode: VerticesMode, indices: Handle, minIndex: number, maxIndex: number, indicesOffset: number, count: number): void
function vertexBufferEnable(handle: Handle, attributeName: string): void
function vertexBufferGetNVertices(handle: Handle): number
function vertexBufferIndicesGetForQuads(nIndices: number): Handle
function vertexBufferIndicesGetType(indices: Handle): IndicesType
function vertexBufferNew(nVertices: number): Handle
function vertexBufferRef(handle: Handle): Handle
function vertexBufferSubmit(handle: Handle): void
function vertexBufferUnref(handle: Handle): void
function viewport(width: number, height: number): void
/**
 * The type used by cogl for function pointers, note that this type
 * is used as a generic catch-all cast for function pointers and the
 * actual arguments and return type may be different.
 */
interface FuncPtr {
    (): void
}
class Texture {
    /* Methods of Cogl-1.0.Cogl.Texture */
    /**
     * Explicitly allocates the storage for the given `texture` which
     * allows you to be sure that there is enough memory for the
     * texture and if not then the error can be handled gracefully.
     * 
     * <note>Normally applications don't need to use this api directly
     * since the texture will be implicitly allocated when data is set on
     * the texture, or if the texture is attached to a #CoglOffscreen
     * framebuffer and rendered too.</note>
     */
    allocate(): Bool
    /**
     * Queries what components the given `texture` stores internally as set
     * via cogl_texture_set_components().
     * 
     * For textures created by the ‘_with_size’ constructors the default
     * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
     * a %CoglBitmap or a data pointer default to the same components as
     * the pixel format of the data.
     */
    getComponents(): TextureComponents
    /**
     * Copies the pixel data from a cogl texture to system memory.
     * 
     * <note>Don't pass the value of cogl_texture_get_rowstride() as the
     * `rowstride` argument, the rowstride should be the rowstride you
     * want for the destination `data` buffer not the rowstride of the
     * source texture</note>
     */
    getData(format: PixelFormat, rowstride: number, data: number): number
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    getGlTexture(): [ /* returnType */ Bool, /* outGlHandle */ number | null, /* outGlTarget */ number | null ]
    /**
     * Queries the height of a cogl texture.
     */
    getHeight(): number
    /**
     * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
     * texture.
     */
    getMaxWaste(): number
    /**
     * Queries the pre-multiplied alpha status for internally stored red,
     * green and blue components for the given `texture` as set by
     * cogl_texture_set_premultiplied().
     * 
     * By default the pre-multipled state is `TRUE`.
     */
    getPremultiplied(): Bool
    /**
     * Queries the width of a cogl texture.
     */
    getWidth(): number
    /**
     * Queries if a texture is sliced (stored as multiple GPU side tecture
     * objects).
     */
    isSliced(): Bool
    /**
     * Affects the internal storage format for this texture by specifying
     * what components will be required for sampling later.
     * 
     * This api affects how data is uploaded to the GPU since unused
     * components can potentially be discarded from source data.
     * 
     * For textures created by the ‘_with_size’ constructors the default
     * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
     * a %CoglBitmap or a data pointer default to the same components as
     * the pixel format of the data.
     * 
     * Note that the %COGL_TEXTURE_COMPONENTS_RG format is not available
     * on all drivers. The availability can be determined by checking for
     * the %COGL_FEATURE_ID_TEXTURE_RG feature. If this format is used on
     * a driver where it is not available then %COGL_TEXTURE_ERROR_FORMAT
     * will be raised when the texture is allocated. Even if the feature
     * is not available then %COGL_PIXEL_FORMAT_RG_88 can still be used as
     * an image format as long as %COGL_TEXTURE_COMPONENTS_RG isn't used
     * as the texture's components.
     */
    setComponents(components: TextureComponents): void
    /**
     * Affects the internal storage format for this texture by specifying
     * whether red, green and blue color components should be stored as
     * pre-multiplied alpha values.
     * 
     * This api affects how data is uploaded to the GPU since Cogl will
     * convert source data to have premultiplied or unpremultiplied
     * components according to this state.
     * 
     * For example if you create a texture via
     * cogl_texture_2d_new_with_size() and then upload data via
     * cogl_texture_set_data() passing a source format of
     * %COGL_PIXEL_FORMAT_RGBA_8888 then Cogl will internally multiply the
     * red, green and blue components of the source data by the alpha
     * component, for each pixel so that the internally stored data has
     * pre-multiplied alpha components. If you instead upload data that
     * already has pre-multiplied components by passing
     * %COGL_PIXEL_FORMAT_RGBA_8888_PRE as the source format to
     * cogl_texture_set_data() then the data can be uploaded without being
     * converted.
     * 
     * By default the `premultipled` state is `TRUE`.
     */
    setPremultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     */
    setRegion(srcX: number, srcY: number, dstX: number, dstY: number, dstWidth: number, dstHeight: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    static name: string
}
class Bitmap {
    static name: string
    /* Static methods and pseudo-constructors */
    static newFromFile(filename: string): Bitmap
    /**
     * Parses an image file enough to extract the width and height
     * of the bitmap.
     */
    static getSizeFromFile(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}
class Fixed {
    /* Methods of Cogl-1.0.Cogl.Fixed */
    /**
     * Calculates 2 to the `x` power.
     * 
     * This function is around 11 times faster on x86, and around 22 times faster
     * on fpu-less arm than libc pow(2, x).
     */
    pow2(): number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Calculates `x` to the `y` power.
     */
    static pow(x: number, y: Fixed): number
}
class Offscreen {
    static name: string
    /* Static methods and pseudo-constructors */
    static newToTexture(texture: Texture): Offscreen
    static newWithTexture(texture: Texture): Offscreen
    /**
     * Increments the reference count on the `offscreen` framebuffer.
     */
    static ref(offscreen?: object | null): object | null
    /**
     * Decreases the reference count for the `offscreen` buffer and frees it when
     * the count reaches 0.
     */
    static unref(offscreen?: object | null): void
}
class Color {
    /* Methods of Cogl-1.0.Cogl.Color */
    /**
     * Creates a copy of `color`
     */
    copy(): Color
    /**
     * Frees the resources allocated by cogl_color_new() and cogl_color_copy()
     */
    free(): void
    /**
     * Retrieves the alpha channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    getAlpha(): number
    /**
     * Retrieves the alpha channel of `color` as a byte value
     * between 0 and 255
     */
    getAlphaByte(): number
    /**
     * Retrieves the alpha channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    getAlphaFloat(): number
    /**
     * Retrieves the blue channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    getBlue(): number
    /**
     * Retrieves the blue channel of `color` as a byte value
     * between 0 and 255
     */
    getBlueByte(): number
    /**
     * Retrieves the blue channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    getBlueFloat(): number
    /**
     * Retrieves the green channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    getGreen(): number
    /**
     * Retrieves the green channel of `color` as a byte value
     * between 0 and 255
     */
    getGreenByte(): number
    /**
     * Retrieves the green channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    getGreenFloat(): number
    /**
     * Retrieves the red channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    getRed(): number
    /**
     * Retrieves the red channel of `color` as a byte value
     * between 0 and 255
     */
    getRedByte(): number
    /**
     * Retrieves the red channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    getRedFloat(): number
    /**
     * Sets the values of the passed channels into a #CoglColor
     */
    initFrom4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor
     */
    initFrom4fv(colorArray: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor.
     */
    initFrom4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Converts a non-premultiplied color to a pre-multiplied color. For
     * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
     * and (0.5, 0, 0, 0.5) when premultiplied.
     */
    premultiply(): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     */
    setAlpha(alpha: number): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     */
    setAlphaByte(alpha: number): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     */
    setAlphaFloat(alpha: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     */
    setBlue(blue: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     */
    setBlueByte(blue: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     */
    setBlueFloat(blue: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor
     */
    setFrom4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor.
     */
    setFrom4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the green channel of `color` to `green`.
     */
    setGreen(green: number): void
    /**
     * Sets the green channel of `color` to `green`.
     */
    setGreenByte(green: number): void
    /**
     * Sets the green channel of `color` to `green`.
     */
    setGreenFloat(green: number): void
    /**
     * Sets the red channel of `color` to `red`.
     */
    setRed(red: number): void
    /**
     * Sets the red channel of `color` to `red`.
     */
    setRedByte(red: number): void
    /**
     * Sets the red channel of `color` to `red`.
     */
    setRedFloat(red: number): void
    /**
     * Converts `color` to the HLS format.
     * 
     * The `hue` value is in the 0 .. 360 range. The `luminance` and
     * `saturation` values are in the 0 .. 1 range.
     */
    toHsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    /**
     * Converts a pre-multiplied color to a non-premultiplied color. For
     * example, semi-transparent red is (0.5, 0, 0, 0.5) when premultiplied
     * and (1.0, 0, 0, 0.5) when non-premultiplied.
     */
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    /**
     * Compares two #CoglColor<!-- -->s and checks if they are the same.
     * 
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
     */
    static equal(v1?: object | null, v2?: object | null): Bool
    /**
     * Converts a color expressed in HLS (hue, luminance and saturation)
     * values into a #CoglColor.
     */
    static initFromHsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
class Euler {
    static name: string
}
class Material {
    /* Methods of Cogl-1.0.Cogl.Material */
    /**
     * Retrieves the current ambient color for `material`
     */
    getAmbient(ambient: Color): void
    /**
     * Retrieves the current material color.
     */
    getColor(): /* color */ Color
    /**
     * Retrieves the current diffuse color for `material`
     */
    getDiffuse(diffuse: Color): void
    /**
     * Retrieves the materials current emission color.
     */
    getEmission(emission: Color): void
    /**
     * Gets whether point sprite coordinate generation is enabled for this
     * texture layer.
     */
    getLayerPointSpriteCoordsEnabled(layerIndex: number): Bool
    /**
     * Returns the wrap mode for the 'p' coordinate of texture lookups on this
     * layer.
     */
    getLayerWrapModeP(layerIndex: number): MaterialWrapMode
    /**
     * Returns the wrap mode for the 's' coordinate of texture lookups on this
     * layer.
     */
    getLayerWrapModeS(layerIndex: number): MaterialWrapMode
    /**
     * Returns the wrap mode for the 't' coordinate of texture lookups on this
     * layer.
     */
    getLayerWrapModeT(layerIndex: number): MaterialWrapMode
    /**
     * This function lets you access a material's internal list of layers
     * for iteration.
     * 
     * <note>You should avoid using this API if possible since it was only
     * made public by mistake and will be deprecated when we have
     * suitable alternative.</note>
     * 
     * <note>It's important to understand that the list returned may not
     * remain valid if you modify the material or any of the layers in any
     * way and so you would have to re-get the list in that
     * situation.</note>
     */
    getLayers(): MaterialLayer[]
    /**
     * Retrieves the number of layers defined for the given `material`
     */
    getNLayers(): number
    /**
     * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
     * used with the vertex buffer API.
     */
    getPointSize(): number
    /**
     * Retrieves the materials current emission color.
     */
    getShininess(): number
    /**
     * Retrieves the materials current specular color.
     */
    getSpecular(specular: Color): void
    /**
     * Queries what user program has been associated with the given
     * `material` using cogl_material_set_user_program().
     */
    getUserProgram(): Handle
    /**
     * This function removes a layer from your material
     */
    removeLayer(layerIndex: number): void
    /**
     * Before a primitive is blended with the framebuffer, it goes through an
     * alpha test stage which lets you discard fragments based on the current
     * alpha value. This function lets you change the function used to evaluate
     * the alpha channel, and thus determine which fragments are discarded
     * and which continue on to the blending stage.
     * 
     * The default is %COGL_MATERIAL_ALPHA_FUNC_ALWAYS
     */
    setAlphaTestFunction(alphaFunc: MaterialAlphaFunc, alphaReference: number): void
    /**
     * Sets the material's ambient color, in the standard OpenGL lighting
     * model. The ambient color affects the overall color of the object.
     * 
     * Since the diffuse color will be intense when the light hits the surface
     * directly, the ambient will be most apparent where the light hits at a
     * slant.
     * 
     * The default value is (0.2, 0.2, 0.2, 1.0)
     */
    setAmbient(ambient: Color): void
    /**
     * Conveniently sets the diffuse and ambient color of `material` at the same
     * time. See cogl_material_set_ambient() and cogl_material_set_diffuse().
     * 
     * The default ambient color is (0.2, 0.2, 0.2, 1.0)
     * 
     * The default diffuse color is (0.8, 0.8, 0.8, 1.0)
     */
    setAmbientAndDiffuse(color: Color): void
    /**
     * If not already familiar; please refer <link linkend="cogl-Blend-Strings">here</link>
     * for an overview of what blend strings are, and their syntax.
     * 
     * Blending occurs after the alpha test function, and combines fragments with
     * the framebuffer.
     * 
     * Currently the only blend function Cogl exposes is ADD(). So any valid
     * blend statements will be of the form:
     * 
     * |[
     *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
     * ```
     * 
     * 
     * <warning>The brackets around blend factors are currently not
     * optional!</warning>
     * 
     * This is the list of source-names usable as blend factors:
     * <itemizedlist>
     *   <listitem><para>SRC_COLOR: The color of the in comming fragment</para></listitem>
     *   <listitem><para>DST_COLOR: The color of the framebuffer</para></listitem>
     *   <listitem><para>CONSTANT: The constant set via cogl_material_set_blend_constant()</para></listitem>
     * </itemizedlist>
     * 
     * The source names can be used according to the
     * <link linkend="cogl-Blend-String-syntax">color-source and factor syntax</link>,
     * so for example "(1-SRC_COLOR[A])" would be a valid factor, as would
     * "(CONSTANT[RGB])"
     * 
     * These can also be used as factors:
     * <itemizedlist>
     *   <listitem>0: (0, 0, 0, 0)</listitem>
     *   <listitem>1: (1, 1, 1, 1)</listitem>
     *   <listitem>SRC_ALPHA_SATURATE_FACTOR: (f,f,f,1) where f = MIN(SRC_COLOR[A],1-DST_COLOR[A])</listitem>
     * </itemizedlist>
     * 
     * <note>Remember; all color components are normalized to the range [0, 1]
     * before computing the result of blending.</note>
     * 
     * <example id="cogl-Blend-Strings-blend-unpremul">
     *   <title>Blend Strings/1</title>
     *   <para>Blend a non-premultiplied source over a destination with
     *   premultiplied alpha:</para>
     *   <programlisting>
     * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
     * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
     *   </programlisting>
     * </example>
     * 
     * <example id="cogl-Blend-Strings-blend-premul">
     *   <title>Blend Strings/2</title>
     *   <para>Blend a premultiplied source over a destination with
     *   premultiplied alpha</para>
     *   <programlisting>
     * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
     *   </programlisting>
     * </example>
     * 
     * The default blend string is:
     * |[
     *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
     * ```
     * 
     * 
     * That gives normal alpha-blending when the calculated color for the material
     * is in premultiplied form.
     */
    setBlend(blendString: string): Bool
    /**
     * When blending is setup to reference a CONSTANT blend factor then
     * blending will depend on the constant set with this function.
     */
    setBlendConstant(constantColor: Color): void
    /**
     * Sets the basic color of the material, used when no lighting is enabled.
     * 
     * Note that if you don't add any layers to the material then the color
     * will be blended unmodified with the destination; the default blend
     * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
     * semi-transparent red. See cogl_color_premultiply().
     * 
     * The default value is (1.0, 1.0, 1.0, 1.0)
     */
    setColor(color: Color): void
    /**
     * Sets the basic color of the material, used when no lighting is enabled.
     * 
     * The default value is (1.0, 1.0, 1.0, 1.0)
     */
    setColor4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the basic color of the material, used when no lighting is enabled.
     * 
     * The default value is (0xff, 0xff, 0xff, 0xff)
     */
    setColor4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the material's diffuse color, in the standard OpenGL lighting
     * model. The diffuse color is most intense where the light hits the
     * surface directly - perpendicular to the surface.
     * 
     * The default value is (0.8, 0.8, 0.8, 1.0)
     */
    setDiffuse(diffuse: Color): void
    /**
     * Sets the material's emissive color, in the standard OpenGL lighting
     * model. It will look like the surface is a light source emitting this
     * color.
     * 
     * The default value is (0.0, 0.0, 0.0, 1.0)
     */
    setEmission(emission: Color): void
    /**
     * In addition to the standard OpenGL lighting model a Cogl material may have
     * one or more layers comprised of textures that can be blended together in
     * order, with a number of different texture combine modes. This function
     * defines a new texture layer.
     * 
     * The index values of multiple layers do not have to be consecutive; it is
     * only their relative order that is important.
     * 
     * <note>In the future, we may define other types of material layers, such
     * as purely GLSL based layers.</note>
     */
    setLayer(layerIndex: number, texture: Handle): void
    /**
     * If not already familiar; you can refer
     * <link linkend="cogl-Blend-Strings">here</link> for an overview of what blend
     * strings are and there syntax.
     * 
     * These are all the functions available for texture combining:
     * <itemizedlist>
     *   <listitem>REPLACE(arg0) = arg0</listitem>
     *   <listitem>MODULATE(arg0, arg1) = arg0 x arg1</listitem>
     *   <listitem>ADD(arg0, arg1) = arg0 + arg1</listitem>
     *   <listitem>ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5</listitem>
     *   <listitem>INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)</listitem>
     *   <listitem>SUBTRACT(arg0, arg1) = arg0 - arg1</listitem>
     *   <listitem>
     *     <programlisting>
     *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
     *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
     *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
     *     </programlisting>
     *   </listitem>
     *   <listitem>
     *     <programlisting>
     *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
     *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
     *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
     *     </programlisting>
     *   </listitem>
     * </itemizedlist>
     * 
     * Refer to the
     * <link linkend="cogl-Blend-String-syntax">color-source syntax</link> for
     * describing the arguments. The valid source names for texture combining
     * are:
     * <variablelist>
     *   <varlistentry>
     *     <term>TEXTURE</term>
     *     <listitem>Use the color from the current texture layer</listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>TEXTURE_0, TEXTURE_1, etc</term>
     *     <listitem>Use the color from the specified texture layer</listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>CONSTANT</term>
     *     <listitem>Use the color from the constant given with
     *     cogl_material_set_layer_constant()</listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>PRIMARY</term>
     *     <listitem>Use the color of the material as set with
     *     cogl_material_set_color()</listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>PREVIOUS</term>
     *     <listitem>Either use the texture color from the previous layer, or
     *     if this is layer 0, use the color of the material as set with
     *     cogl_material_set_color()</listitem>
     *   </varlistentry>
     * </variablelist>
     * 
     * <refsect2 id="cogl-Layer-Combine-Examples">
     *   <title>Layer Combine Examples</title>
     *   <para>This is effectively what the default blending is:</para>
     *   <informalexample><programlisting>
     *   RGBA = MODULATE (PREVIOUS, TEXTURE)
     *   </programlisting></informalexample>
     *   <para>This could be used to cross-fade between two images, using
     *   the alpha component of a constant as the interpolator. The constant
     *   color is given by calling cogl_material_set_layer_constant.</para>
     *   <informalexample><programlisting>
     *   RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
     *   </programlisting></informalexample>
     * </refsect2>
     * 
     * <note>You can't give a multiplication factor for arguments as you can
     * with blending.</note>
     */
    setLayerCombine(layerIndex: number, blendString: string): Bool
    /**
     * When you are using the 'CONSTANT' color source in a layer combine
     * description then you can use this function to define its value.
     */
    setLayerCombineConstant(layerIndex: number, constant: Color): void
    /**
     * Changes the decimation and interpolation filters used when a texture is
     * drawn at other scales than 100%.
     */
    setLayerFilters(layerIndex: number, minFilter: MaterialFilter, magFilter: MaterialFilter): void
    /**
     * This function lets you set a matrix that can be used to e.g. translate
     * and rotate a single layer of a material used to fill your geometry.
     */
    setLayerMatrix(layerIndex: number, matrix: Matrix): void
    /**
     * When rendering points, if `enable` is %TRUE then the texture
     * coordinates for this layer will be replaced with coordinates that
     * vary from 0.0 to 1.0 across the primitive. The top left of the
     * point will have the coordinates 0.0,0.0 and the bottom right will
     * have 1.0,1.0. If `enable` is %FALSE then the coordinates will be
     * fixed for the entire point.
     * 
     * This function will only work if %COGL_FEATURE_POINT_SPRITE is
     * available. If the feature is not available then the function will
     * return %FALSE and set `error`.
     */
    setLayerPointSpriteCoordsEnabled(layerIndex: number, enable: Bool): Bool
    /**
     * Sets the wrap mode for all three coordinates of texture lookups on
     * this layer. This is equivalent to calling
     * cogl_material_set_layer_wrap_mode_s(),
     * cogl_material_set_layer_wrap_mode_t() and
     * cogl_material_set_layer_wrap_mode_p() separately.
     */
    setLayerWrapMode(layerIndex: number, mode: MaterialWrapMode): void
    /**
     * Sets the wrap mode for the 'p' coordinate of texture lookups on
     * this layer. 'p' is the third coordinate.
     */
    setLayerWrapModeP(layerIndex: number, mode: MaterialWrapMode): void
    /**
     * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
     */
    setLayerWrapModeS(layerIndex: number, mode: MaterialWrapMode): void
    /**
     * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
     */
    setLayerWrapModeT(layerIndex: number, mode: MaterialWrapMode): void
    /**
     * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
     * used with the vertex buffer API. Note that typically the GPU will
     * only support a limited minimum and maximum range of point sizes. If
     * the chosen point size is outside that range then the nearest value
     * within that range will be used instead. The size of a point is in
     * screen space so it will be the same regardless of any
     * transformations. The default point size is 1.0.
     */
    setPointSize(pointSize: number): void
    /**
     * Sets the shininess of the material, in the standard OpenGL lighting
     * model, which determines the size of the specular highlights. A
     * higher `shininess` will produce smaller highlights which makes the
     * object appear more shiny.
     * 
     * The default value is 0.0
     */
    setShininess(shininess: number): void
    /**
     * Sets the material's specular color, in the standard OpenGL lighting
     * model. The intensity of the specular color depends on the viewport
     * position, and is brightest along the lines of reflection.
     * 
     * The default value is (0.0, 0.0, 0.0, 1.0)
     */
    setSpecular(specular: Color): void
    /**
     * Associates a linked CoglProgram with the given material so that the
     * program can take full control of vertex and/or fragment processing.
     * 
     * This is an example of how it can be used to associate an ARBfp
     * program with a #CoglMaterial:
     * |[
     * CoglHandle shader;
     * CoglHandle program;
     * CoglMaterial *material;
     * 
     * shader = cogl_create_shader (COGL_SHADER_TYPE_FRAGMENT);
     * cogl_shader_source (shader,
     *                     "!!ARBfp1.0\n"
     *                     "MOV result.color,fragment.color;\n"
     *                     "END\n");
     * cogl_shader_compile (shader);
     * 
     * program = cogl_create_program ();
     * cogl_program_attach_shader (program, shader);
     * cogl_program_link (program);
     * 
     * material = cogl_material_new ();
     * cogl_material_set_user_program (material, program);
     * 
     * cogl_set_source_color4ub (0xff, 0x00, 0x00, 0xff);
     * cogl_rectangle (0, 0, 100, 100);
     * ```
     * 
     * 
     * It is possibly worth keeping in mind that this API is not part of
     * the long term design for how we want to expose shaders to Cogl
     * developers (We are planning on deprecating the cogl_program and
     * cogl_shader APIs in favour of a "snippet" framework) but in the
     * meantime we hope this will handle most practical GLSL and ARBfp
     * requirements.
     * 
     * Also remember you need to check for either the
     * %COGL_FEATURE_SHADERS_GLSL or %COGL_FEATURE_SHADERS_ARBFP before
     * using the cogl_program or cogl_shader API.
     */
    setUserProgram(program: Handle): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Increment the reference count for a #CoglMaterial.
     */
    static ref(material: Handle): Handle
    /**
     * Decrement the reference count for a #CoglMaterial.
     */
    static unref(material: Handle): void
}
class MaterialLayer {
    /* Methods of Cogl-1.0.Cogl.MaterialLayer */
    /**
     * Queries the currently set downscaling filter for a material later
     */
    getMagFilter(): MaterialFilter
    /**
     * Queries the currently set downscaling filter for a material layer
     */
    getMinFilter(): MaterialFilter
    /**
     * Extracts a texture handle for a specific layer.
     * 
     * <note>In the future Cogl may support purely GLSL based layers; for those
     * layers this function which will likely return %COGL_INVALID_HANDLE if you
     * try to get the texture handle from them. Considering this scenario, you
     * should call cogl_material_layer_get_type() first in order check it is of
     * type %COGL_MATERIAL_LAYER_TYPE_TEXTURE before calling this function.</note>
     */
    getTexture(): Handle
    /**
     * Retrieves the type of the layer
     * 
     * Currently there is only one type of layer defined:
     * %COGL_MATERIAL_LAYER_TYPE_TEXTURE, but considering we may add purely GLSL
     * based layers in the future, you should write code that checks the type
     * first.
     */
    getType(): MaterialLayerType
    /**
     * Gets the wrap mode for the 'p' coordinate of texture lookups on
     * this layer. 'p' is the third coordinate.
     */
    getWrapModeP(): MaterialWrapMode
    /**
     * Gets the wrap mode for the 's' coordinate of texture lookups on this layer.
     */
    getWrapModeS(): MaterialWrapMode
    /**
     * Gets the wrap mode for the 't' coordinate of texture lookups on this layer.
     */
    getWrapModeT(): MaterialWrapMode
    static name: string
}
class Matrix {
    /* Fields of Cogl-1.0.Cogl.Matrix */
    readonly xx: number
    readonly yx: number
    readonly zx: number
    readonly wx: number
    readonly xy: number
    readonly yy: number
    readonly zy: number
    readonly wy: number
    readonly xz: number
    readonly yz: number
    readonly zz: number
    readonly wz: number
    readonly xw: number
    readonly yw: number
    readonly zw: number
    readonly ww: number
    /* Methods of Cogl-1.0.Cogl.Matrix */
    /**
     * Allocates a new #CoglMatrix on the heap and initializes it with
     * the same values as `matrix`.
     */
    copy(): Matrix
    /**
     * Frees a #CoglMatrix that was previously allocated via a call to
     * cogl_matrix_copy().
     */
    free(): void
    /**
     * Multiplies `matrix` by the given frustum perspective matrix.
     */
    frustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): void
    /**
     * Casts `matrix` to a float array which can be directly passed to OpenGL.
     */
    getArray(): number
    /**
     * Gets the inverse transform of a given matrix and uses it to initialize
     * a new #CoglMatrix.
     * 
     * <note>Although the first parameter is annotated as const to indicate
     * that the transform it represents isn't modified this function may
     * technically save a copy of the inverse transform within the given
     * #CoglMatrix so that subsequent requests for the inverse transform may
     * avoid costly inversion calculations.</note>
     */
    getInverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    /**
     * Initializes `matrix` with the contents of `array`
     */
    initFromArray(array: number): void
    /**
     * Resets matrix to the identity matrix:
     * 
     * |[
     *   .xx=1; .xy=0; .xz=0; .xw=0;
     *   .yx=0; .yy=1; .yz=0; .yw=0;
     *   .zx=0; .zy=0; .zz=1; .zw=0;
     *   .wx=0; .wy=0; .wz=0; .ww=1;
     * ```
     * 
     */
    initIdentity(): void
    /**
     * Resets matrix to the (tx, ty, tz) translation matrix:
     * 
     * |[
     *   .xx=1; .xy=0; .xz=0; .xw=tx;
     *   .yx=0; .yy=1; .yz=0; .yw=ty;
     *   .zx=0; .zy=0; .zz=1; .zw=tz;
     *   .wx=0; .wy=0; .wz=0; .ww=1;
     * ```
     * 
     */
    initTranslation(tx: number, ty: number, tz: number): void
    /**
     * Determines if the given matrix is an identity matrix.
     */
    isIdentity(): Bool
    /**
     * Applies a view transform `matrix` that positions the camera at
     * the coordinate (`eye_position_x,` `eye_position_y,` `eye_position_z)`
     * looking towards an object at the coordinate (`object_x,` `object_y,`
     * `object_z)`. The top of the camera is aligned to the given world up
     * vector, which is normally simply (0, 1, 0) to map up to the
     * positive direction of the y axis.
     * 
     * Because there is a lot of missleading documentation online for
     * gluLookAt regarding the up vector we want to try and be a bit
     * clearer here.
     * 
     * The up vector should simply be relative to your world coordinates
     * and does not need to change as you move the eye and object
     * positions.  Many online sources may claim that the up vector needs
     * to be perpendicular to the vector between the eye and object
     * position (partly because the man page is somewhat missleading) but
     * that is not necessary for this function.
     * 
     * <note>You should never look directly along the world-up
     * vector.</note>
     * 
     * <note>It is assumed you are using a typical projection matrix where
     * your origin maps to the center of your viewport.</note>
     * 
     * <note>Almost always when you use this function it should be the first
     * transform applied to a new modelview transform</note>
     */
    lookAt(eyePositionX: number, eyePositionY: number, eyePositionZ: number, objectX: number, objectY: number, objectZ: number, worldUpX: number, worldUpY: number, worldUpZ: number): void
    /**
     * Multiplies the two supplied matrices together and stores
     * the resulting matrix inside `result`.
     * 
     * <note>It is possible to multiply the `a` matrix in-place, so
     * `result` can be equal to `a` but can't be equal to `b`.</note>
     */
    multiply(a: Matrix, b: Matrix): void
    /**
     * Multiplies `matrix` by a parallel projection matrix.
     */
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    /**
     * Multiplies `matrix` by the described perspective matrix
     * 
     * <note>You should be careful not to have to great a `z_far` / `z_near`
     * ratio since that will reduce the effectiveness of depth testing
     * since there wont be enough precision to identify the depth of
     * objects near to each other.</note>
     */
    perspective(fovY: number, aspect: number, zNear: number, zFar: number): void
    /**
     * Multiplies `matrix` with a rotation matrix that applies a rotation
     * of `angle` degrees around the specified 3D vector.
     */
    rotate(angle: number, x: number, y: number, z: number): void
    /**
     * Multiplies `matrix` with a transform matrix that scales along the X,
     * Y and Z axis.
     */
    scale(sx: number, sy: number, sz: number): void
    /**
     * Transforms a point whos position is given and returned as four float
     * components.
     */
    transformPoint(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    /**
     * Multiplies `matrix` with a transform matrix that translates along
     * the X, Y and Z axis.
     */
    translate(x: number, y: number, z: number): void
    /**
     * Replaces `matrix` with its transpose. Ie, every element (i,j) in the
     * new matrix is taken from element (j,i) in the old matrix.
     */
    transpose(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Compares two matrices to see if they represent the same
     * transformation. Although internally the matrices may have different
     * annotations associated with them and may potentially have a cached
     * inverse matrix these are not considered in the comparison.
     */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class Quaternion {
    static name: string
}
class TextureVertex {
    /* Fields of Cogl-1.0.Cogl.TextureVertex */
    /**
     * Model x-coordinate
     */
    readonly x: number
    /**
     * Model y-coordinate
     */
    readonly y: number
    /**
     * Model z-coordinate
     */
    readonly z: number
    /**
     * Texture x-coordinate
     */
    readonly tx: number
    /**
     * Texture y-coordinate
     */
    readonly ty: number
    /**
     * The color to use at this vertex. This is ignored if
     *   use_color is %FALSE when calling cogl_polygon()
     */
    readonly color: Color
    static name: string
}
class _ColorSizeCheck {
    /* Fields of Cogl-1.0.Cogl._ColorSizeCheck */
    readonly compileTimeAssertCoglColorSize: number[]
    static name: string
}
class _MatrixSizeCheck {
    /* Fields of Cogl-1.0.Cogl._MatrixSizeCheck */
    readonly compileTimeAssertCoglMatrixSize: number[]
    static name: string
}
class _TextureVertexSizeCheck {
    /* Fields of Cogl-1.0.Cogl._TextureVertexSizeCheck */
    readonly compileTimeAssertCoglTextureVertexSize: number[]
    static name: string
}
    type Angle = number
    type Bool = number
    type Handle = object
}
export default Cogl;