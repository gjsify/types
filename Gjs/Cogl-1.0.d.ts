// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cogl-1.0
 */

import type * as Gjs from './Gjs';
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
 */
enum ReadPixelsFlags {
    /**
     * Read from the color buffer
     */
    COLOR_BUFFER,
}
/**
 * Flags to pass to the cogl_texture_new_* family of functions.
 * @bitfield 
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
/**
 * We do not advise nor reliably support the interleaving of raw GL drawing and
 * Cogl drawing functions, but if you insist, cogl_begin_gl() and cogl_end_gl()
 * provide a simple mechanism that may at least give you a fighting chance of
 * succeeding.
 * 
 * Note: this doesn't help you modify the behaviour of Cogl drawing functions
 * through the modification of GL state; that will never be reliably supported,
 * but if you are trying to do something like:
 * 
 * |[
 * {
 *    - setup some OpenGL state.
 *    - draw using OpenGL (e.g. glDrawArrays() )
 *    - reset modified OpenGL state.
 *    - continue using Cogl to draw
 * }
 * ```
 * 
 * 
 * You should surround blocks of drawing using raw GL with cogl_begin_gl()
 * and cogl_end_gl():
 * 
 * |[
 * {
 *    cogl_begin_gl ();
 *    - setup some OpenGL state.
 *    - draw using OpenGL (e.g. glDrawArrays() )
 *    - reset modified OpenGL state.
 *    cogl_end_gl ();
 *    - continue using Cogl to draw
 * }
 * ```
 * 
 * 
 * Don't ever try and do:
 * 
 * |[
 * {
 *    - setup some OpenGL state.
 *    - use Cogl to draw
 *    - reset modified OpenGL state.
 * }
 * ```
 * 
 * 
 * When the internals of Cogl evolves, this is very liable to break.
 * 
 * This function will flush all batched primitives, and subsequently flush
 * all internal Cogl state to OpenGL as if it were going to draw something
 * itself.
 * 
 * The result is that the OpenGL modelview matrix will be setup; the state
 * corresponding to the current source material will be set up and other world
 * state such as backface culling, depth and fogging enabledness will be sent
 * to OpenGL.
 * 
 * <note>No special material state is flushed, so if you want Cogl to setup a
 * simplified material state it is your responsibility to set a simple source
 * material before calling cogl_begin_gl(). E.g. by calling
 * cogl_set_source_color4ub().</note>
 * 
 * <note>It is your responsibility to restore any OpenGL state that you modify
 * to how it was after calling cogl_begin_gl() if you don't do this then the
 * result of further Cogl calls is undefined.</note>
 * 
 * <note>You can not nest begin/end blocks.</note>
 * 
 * Again we would like to stress, we do not advise the use of this API and if
 * possible we would prefer to improve Cogl than have developers require raw
 * OpenGL.
 */
function begin_gl(): void
function bitmap_error_quark(): number
function blend_string_error_quark(): number
/**
 * Check whether `name` occurs in list of extensions in `ext`.
 * @param name extension to check for
 * @param ext list of extensions
 */
function check_extension(name: string, ext: string): Bool
/**
 * Clears all the auxiliary buffers identified in the `buffers` mask, and if
 * that includes the color buffer then the specified `color` is used.
 * @param color Background color to clear to
 * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
 */
function clear(color: Color, buffers: number): void
/**
 * Ensures that the current clipping region has been set in GL. This
 * will automatically be called before any Cogl primitives but it
 * maybe be neccessary to call if you are using raw GL calls with
 * clipping.
 */
function clip_ensure(): void
/**
 * Reverts the clipping region to the state before the last call to
 * cogl_clip_push().
 */
function clip_pop(): void
/**
 * Specifies a rectangular clipping area for all subsequent drawing
 * operations. Any drawing commands that extend outside the rectangle
 * will be clipped so that only the portion inside the rectangle will
 * be displayed. The rectangle dimensions are transformed by the
 * current model-view matrix.
 * 
 * The rectangle is intersected with the current clip region. To undo
 * the effect of this function, call cogl_clip_pop().
 * @param x_offset left edge of the clip rectangle
 * @param y_offset top edge of the clip rectangle
 * @param width width of the clip rectangle
 * @param height height of the clip rectangle
 */
function clip_push(x_offset: number, y_offset: number, width: number, height: number): void
/**
 * Specifies a rectangular clipping area for all subsequent drawing
 * operations. Any drawing commands that extend outside the rectangle
 * will be clipped so that only the portion inside the rectangle will
 * be displayed. The rectangle dimensions are transformed by the
 * current model-view matrix.
 * 
 * The rectangle is intersected with the current clip region. To undo
 * the effect of this function, call cogl_clip_pop().
 * @param x0 x coordinate for top left corner of the clip rectangle
 * @param y0 y coordinate for top left corner of the clip rectangle
 * @param x1 x coordinate for bottom right corner of the clip rectangle
 * @param y1 y coordinate for bottom right corner of the clip rectangle
 */
function clip_push_rectangle(x0: number, y0: number, x1: number, y1: number): void
/**
 * Specifies a rectangular clipping area for all subsequent drawing
 * operations. Any drawing commands that extend outside the rectangle
 * will be clipped so that only the portion inside the rectangle will
 * be displayed. The rectangle dimensions are not transformed by the
 * current model-view matrix.
 * 
 * The rectangle is intersected with the current clip region. To undo
 * the effect of this function, call cogl_clip_pop().
 * @param x_offset left edge of the clip rectangle in window coordinates
 * @param y_offset top edge of the clip rectangle in window coordinates
 * @param width width of the clip rectangle
 * @param height height of the clip rectangle
 */
function clip_push_window_rect(x_offset: number, y_offset: number, width: number, height: number): void
/**
 * Specifies a rectangular clipping area for all subsequent drawing
 * operations. Any drawing commands that extend outside the rectangle
 * will be clipped so that only the portion inside the rectangle will
 * be displayed. The rectangle dimensions are not transformed by the
 * current model-view matrix.
 * 
 * The rectangle is intersected with the current clip region. To undo
 * the effect of this function, call cogl_clip_pop().
 * @param x_offset left edge of the clip rectangle in window coordinates
 * @param y_offset top edge of the clip rectangle in window coordinates
 * @param width width of the clip rectangle
 * @param height height of the clip rectangle
 */
function clip_push_window_rectangle(x_offset: number, y_offset: number, width: number, height: number): void
/**
 * Restore the state of the clipping stack that was previously saved
 * by cogl_clip_stack_save().
 */
function clip_stack_restore(): void
/**
 * Save the entire state of the clipping stack and then clear all
 * clipping. The previous state can be returned to with
 * cogl_clip_stack_restore(). Each call to cogl_clip_push() after this
 * must be matched by a call to cogl_clip_pop() before calling
 * cogl_clip_stack_restore().
 */
function clip_stack_save(): void
function clutter_check_extension_CLUTTER(name: string, ext: string): Bool
function clutter_winsys_has_feature_CLUTTER(feature: WinsysFeature): Bool
/**
 * Compares two #CoglColor<!-- -->s and checks if they are the same.
 * 
 * This function can be passed to g_hash_table_new() as the `key_equal_func`
 * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
 * @param v1 a #CoglColor
 * @param v2 a #CoglColor
 */
function color_equal(v1: object | null, v2: object | null): Bool
/**
 * Converts a color expressed in HLS (hue, luminance and saturation)
 * values into a #CoglColor.
 * @param hue hue value, in the 0 .. 360 range
 * @param saturation saturation value, in the 0 .. 1 range
 * @param luminance luminance value, in the 0 .. 1 range
 */
function color_init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
/**
 * Create a new cogl program object that can be used to replace parts of the GL
 * rendering pipeline with custom code.
 */
function create_program(): Handle
/**
 * Create a new shader handle, use cogl_shader_source() to set the
 * source code to be used on it.
 * @param shader_type COGL_SHADER_TYPE_VERTEX or COGL_SHADER_TYPE_FRAGMENT.
 */
function create_shader(shader_type: ShaderType): Handle
/**
 * Prints the contents of a #CoglMatrix to stdout.
 * @param matrix A #CoglMatrix
 */
function debug_matrix_print(matrix: Matrix): void
/**
 * This function disables fogging, so primitives drawn afterwards will not be
 * blended with any previously set fog color.
 */
function disable_fog(): void
function double_to_int(value: number): number
function double_to_uint(value: number): number
/**
 * This is the counterpart to cogl_begin_gl() used to delimit blocks of drawing
 * code using raw OpenGL. Please refer to cogl_begin_gl() for full details.
 */
function end_gl(): void
/**
 * Checks whether the given COGL features are available. Multiple
 * features can be checked for by or-ing them together with the '|'
 * operator. %TRUE is only returned if all of the requested features
 * are available.
 * @param features A bitmask of features to check for
 */
function features_available(features: FeatureFlags): Bool
/**
 * This function should only need to be called in exceptional circumstances.
 * 
 * As an optimization Cogl drawing functions may batch up primitives
 * internally, so if you are trying to use raw GL outside of Cogl you stand a
 * better chance of being successful if you ask Cogl to flush any batched
 * geometry before making your state changes.
 * 
 * It only ensure that the underlying driver is issued all the commands
 * necessary to draw the batched primitives. It provides no guarantees about
 * when the driver will complete the rendering.
 * 
 * This provides no guarantees about the GL state upon returning and to avoid
 * confusing Cogl you should aim to restore any changes you make before
 * resuming use of Cogl.
 * 
 * If you are making state changes with the intention of affecting Cogl drawing
 * primitives you are 100% on your own since you stand a good chance of
 * conflicting with Cogl internals. For example clutter-gst which currently
 * uses direct GL calls to bind ARBfp programs will very likely break when Cogl
 * starts to use ARBfb programs itself for the material API.
 */
function flush(): void
/**
 * Replaces the current projection matrix with a perspective matrix
 * for a given viewing frustum defined by 4 side clip planes that
 * all cross through the origin and 2 near and far clip planes.
 * @param left X position of the left clipping plane where it   intersects the near clipping plane
 * @param right X position of the right clipping plane where it   intersects the near clipping plane
 * @param bottom Y position of the bottom clipping plane where it   intersects the near clipping plane
 * @param top Y position of the top clipping plane where it intersects   the near clipping plane
 * @param z_near The distance to the near clipping plane (Must be positive)
 * @param z_far The distance to the far clipping plane (Must be positive)
 */
function frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
/**
 * Queries if backface culling has been enabled via
 * cogl_set_backface_culling_enabled()
 */
function get_backface_culling_enabled(): Bool
/**
 * Gets the number of bitplanes used for each of the color components
 * in the color buffer. Pass %NULL for any of the arguments if the
 * value is not required.
 */
function get_bitmasks(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
/**
 * Queries if depth testing has been enabled via cogl_set_depth_test_enable()
 */
function get_depth_test_enabled(): Bool
/**
 * Returns all of the features supported by COGL.
 */
function get_features(): FeatureFlags
/**
 * Stores the current model-view matrix in `matrix`.
 */
function get_modelview_matrix(): /* matrix */ Matrix
/**
 * Retrieves the #GOptionGroup used by Cogl to parse the command
 * line options. Clutter uses this to handle the Cogl command line
 * options during its initialization process.
 */
function get_option_group(): GLib.OptionGroup
/**
 * Stores the current projection matrix in `matrix`.
 */
function get_projection_matrix(): /* matrix */ Matrix
/**
 * Returns the current source material as previously set using
 * cogl_set_source().
 * 
 * <note>You should typically consider the returned material immutable
 * and not try to change any of its properties unless you own a
 * reference to that material. At times you may be able to get a
 * reference to an internally managed materials and the result of
 * modifying such materials is undefined.</note>
 */
function get_source(): object | null
/**
 * Stores the current viewport in `v`. `v[`0] and `v[`1] get the x and y
 * position of the viewport and `v[`2] and `v[`3] get the width and
 * height.
 */
function get_viewport(): /* v */ number[]
function gtype_matrix_get_type(): GObject.GType
function handle_get_type(): GObject.GType
/**
 * Increases the reference count of `handle` by 1
 * @param handle a #CoglHandle
 */
function handle_ref(handle: Handle): Handle
/**
 * Drecreases the reference count of `handle` by 1; if the reference
 * count reaches 0, the resources allocated by `handle` will be freed
 * @param handle a #CoglHandle
 */
function handle_unref(handle: Handle): void
/**
 * Checks whether `object` is a #CoglBitmap
 * @param object a #CoglObject pointer
 */
function is_bitmap(object: object | null): Bool
/**
 * Gets whether the given handle references an existing material object.
 * @param handle A CoglHandle
 */
function is_material(handle: Handle): Bool
/**
 * Determines whether the given #CoglObject references an offscreen
 * framebuffer object.
 * @param object A pointer to a #CoglObject
 */
function is_offscreen(object: object | null): Bool
/**
 * Gets whether the given handle references an existing program object.
 * @param handle A CoglHandle
 */
function is_program(handle: Handle): Bool
/**
 * Gets whether the given handle references an existing shader object.
 * @param handle A CoglHandle
 */
function is_shader(handle: Handle): Bool
/**
 * Gets whether the given object references a texture object.
 * @param object A #CoglObject pointer
 */
function is_texture(object: object | null): Bool
/**
 * Checks whether `handle` is a Vertex Buffer Object
 * @param handle a #CoglHandle for a vertex buffer object
 */
function is_vertex_buffer(handle: Handle): Bool
/**
 * Checks whether `handle` is a handle to the indices for a vertex
 * buffer object
 * @param handle a #CoglHandle
 */
function is_vertex_buffer_indices(handle: Handle): Bool
/**
 * Increment the reference count for a #CoglMaterial.
 * @param material a #CoglMaterial object.
 */
function material_ref(material: Handle): Handle
/**
 * Decrement the reference count for a #CoglMaterial.
 * @param material a #CoglMaterial object.
 */
function material_unref(material: Handle): void
/**
 * Compares two matrices to see if they represent the same
 * transformation. Although internally the matrices may have different
 * annotations associated with them and may potentially have a cached
 * inverse matrix these are not considered in the comparison.
 * @param v1 A 4x4 transformation matrix
 * @param v2 A 4x4 transformation matrix
 */
function matrix_equal(v1: object | null, v2: object | null): Bool
function onscreen_clutter_backend_set_size_CLUTTER(width: number, height: number): void
/**
 * Replaces the current projection matrix with an orthographic projection
 * matrix. See <xref linkend="cogl-ortho-matrix"/> to see how the matrix is
 * calculated.
 * 
 * <figure id="cogl-ortho-matrix">
 *   <title></title>
 *   <graphic fileref="cogl_ortho.png" format="PNG"/>
 * </figure>
 * 
 * <note>This function copies the arguments from OpenGL's glOrtho() even
 * though they are unnecessarily confusing due to the z near and z far
 * arguments actually being a "distance" from the origin, where
 * negative values are behind the viewer, instead of coordinates for
 * the z clipping planes which would have been consistent with the
 * left, right bottom and top arguments.</note>
 * @param left The coordinate for the left clipping plane
 * @param right The coordinate for the right clipping plane
 * @param bottom The coordinate for the bottom clipping plane
 * @param top The coordinate for the top clipping plane
 * @param near The <emphasis>distance</emphasis> to the near clipping   plane (negative if the plane is behind the viewer)
 * @param far The <emphasis>distance</emphasis> for the far clipping   plane (negative if the plane is behind the viewer)
 */
function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
/**
 * Replaces the current projection matrix with a perspective matrix
 * based on the provided values.
 * 
 * <note>You should be careful not to have to great a `z_far` / `z_near`
 * ratio since that will reduce the effectiveness of depth testing
 * since there wont be enough precision to identify the depth of
 * objects near to each other.</note>
 * @param fovy Vertical field of view angle in degrees.
 * @param aspect The (width over height) aspect ratio for display
 * @param z_near The distance to the near clipping plane (Must be positive)
 * @param z_far The distance to the far clipping plane (Must be positive)
 */
function perspective(fovy: number, aspect: number, z_near: number, z_far: number): void
/**
 * Draws a convex polygon using the current source material to fill / texture
 * with according to the texture coordinates passed.
 * 
 * If `use_color` is %TRUE then the color will be changed for each vertex using
 * the value specified in the color member of #CoglTextureVertex. This can be
 * used for example to make the texture fade out by setting the alpha value of
 * the color.
 * 
 * All of the texture coordinates must be in the range [0,1] and repeating the
 * texture is not supported.
 * 
 * Because of the way this function is implemented it will currently
 * only work if either the texture is not sliced or the backend is not
 * OpenGL ES and the minifying and magnifying functions are both set
 * to COGL_MATERIAL_FILTER_NEAREST.
 * @param vertices An array of #CoglTextureVertex structs
 * @param n_vertices The length of the vertices array
 * @param use_color %TRUE if the color member of #CoglTextureVertex should be used
 */
function polygon(vertices: TextureVertex, n_vertices: number, use_color: Bool): void
/**
 * Restore cogl_set_draw_buffer() state.
 */
function pop_draw_buffer(): void
/**
 * Restores the framebuffer that was previously at the top of the stack.
 * All subsequent drawing will be redirected to this framebuffer.
 */
function pop_framebuffer(): void
/**
 * Restores the current model-view matrix from the matrix stack.
 */
function pop_matrix(): void
/**
 * Removes the material at the top of the source stack. The material
 * at the top of this stack defines the GPU state used to process
 * later primitives as defined by cogl_set_source().
 */
function pop_source(): void
/**
 * Attaches a shader to a program object. A program can have multiple
 * vertex or fragment shaders but only one of them may provide a
 * main() function. It is allowed to use a program with only a vertex
 * shader or only a fragment shader.
 * @param program_handle a #CoglHandle for a shdaer program.
 * @param shader_handle a #CoglHandle for a vertex of fragment shader.
 */
function program_attach_shader(program_handle: Handle, shader_handle: Handle): void
/**
 * Retrieve the location (offset) of a uniform variable in a shader program,
 * a uniform is a variable that is constant for all vertices/fragments for a
 * shader object and is possible to modify as an external parameter.
 * @param handle a #CoglHandle for a shader program.
 * @param uniform_name the name of a uniform.
 */
function program_get_uniform_location(handle: Handle, uniform_name: string): number
/**
 * Links a program making it ready for use. Note that calling this
 * function is optional. If it is not called the program will
 * automatically be linked the first time it is used.
 * @param handle a #CoglHandle for a shader program.
 */
function program_link(handle: Handle): void
/**
 * Add an extra reference to a program.
 * @param handle A #CoglHandle to a program.
 */
function program_ref(handle: Handle): Handle
/**
 * Changes the value of a floating point uniform for the given linked
 * `program`.
 * @param program A #CoglHandle for a linked program
 * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
 * @param value the new value of the uniform.
 */
function program_set_uniform_1f(program: Handle, uniform_location: number, value: number): void
/**
 * Changes the value of an integer uniform for the given linked
 * `program`.
 * @param program A #CoglHandle for a linked program
 * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
 * @param value the new value of the uniform.
 */
function program_set_uniform_1i(program: Handle, uniform_location: number, value: number): void
/**
 * Changes the value of a float vector uniform, or uniform array for
 * the given linked `program`.
 * @param program A #CoglHandle for a linked program
 * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
 * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
 * @param value the new value of the uniform[s].
 */
function program_set_uniform_float(program: Handle, uniform_location: number, n_components: number, value: number[]): void
/**
 * Changes the value of a int vector uniform, or uniform array for
 * the given linked `program`.
 * @param program A #CoglHandle for a linked program
 * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
 * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
 * @param value the new value of the uniform[s].
 */
function program_set_uniform_int(program: Handle, uniform_location: number, n_components: number, value: number[]): void
/**
 * Changes the value of a matrix uniform, or uniform array in the
 * given linked `program`.
 * @param program A #CoglHandle for a linked program
 * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
 * @param dimensions The dimensions of the matrix. So for for example pass    2 for a 2x2 matrix or 3 for 3x3.
 * @param transpose Whether to transpose the matrix when setting the uniform.
 * @param value the new value of the uniform.
 */
function program_set_uniform_matrix(program: Handle, uniform_location: number, dimensions: number, transpose: Bool, value: number[]): void
/**
 * Changes the value of a floating point uniform in the currently
 * used (see cogl_program_use()) shader program.
 * @param uniform_no the uniform to set.
 * @param value the new value of the uniform.
 */
function program_uniform_1f(uniform_no: number, value: number): void
/**
 * Changes the value of an integer uniform in the currently
 * used (see cogl_program_use()) shader program.
 * @param uniform_no the uniform to set.
 * @param value the new value of the uniform.
 */
function program_uniform_1i(uniform_no: number, value: number): void
/**
 * Changes the value of a float vector uniform, or uniform array in the
 * currently used (see cogl_program_use()) shader program.
 * @param uniform_no the uniform to set.
 * @param size Size of float vector.
 * @param value the new value of the uniform.
 */
function program_uniform_float(uniform_no: number, size: number, value: number[]): void
/**
 * Changes the value of a int vector uniform, or uniform array in the
 * currently used (see cogl_program_use()) shader program.
 * @param uniform_no the uniform to set.
 * @param size Size of int vector.
 * @param value the new value of the uniform.
 */
function program_uniform_int(uniform_no: number, size: number, value: number[]): void
/**
 * Changes the value of a matrix uniform, or uniform array in the
 * currently used (see cogl_program_use()) shader program. The `size`
 * parameter is used to determine the square size of the matrix.
 * @param uniform_no the uniform to set.
 * @param size Size of matrix.
 * @param transpose Whether to transpose the matrix when setting the uniform.
 * @param value the new value of the uniform.
 */
function program_uniform_matrix(uniform_no: number, size: number, transpose: Bool, value: number[]): void
/**
 * Removes a reference to a program. If it was the last reference the
 * program object will be destroyed.
 * @param handle A #CoglHandle to a program.
 */
function program_unref(handle: Handle): void
/**
 * Activate a specific shader program replacing that part of the GL
 * rendering pipeline, if passed in %COGL_INVALID_HANDLE the default
 * behavior of GL is reinstated.
 * 
 * This function affects the global state of the current Cogl
 * context. It is much more efficient to attach the shader to a
 * specific material used for rendering instead by calling
 * cogl_material_set_user_program().
 * @param handle a #CoglHandle for a shader program or %COGL_INVALID_HANDLE.
 */
function program_use(handle: Handle): void
/**
 * Save cogl_set_draw_buffer() state.
 */
function push_draw_buffer(): void
/**
 * Stores the current model-view matrix on the matrix stack. The matrix
 * can later be restored with cogl_pop_matrix().
 */
function push_matrix(): void
/**
 * Pushes the given `material` to the top of the source stack. The
 * material at the top of this stack defines the GPU state used to
 * process later primitives as defined by cogl_set_source().
 * @param material A #CoglMaterial
 */
function push_source(material: object | null): void
/**
 * This reads a rectangle of pixels from the current framebuffer where
 * position (0, 0) is the top left. The pixel at (x, y) is the first
 * read, and the data is returned with a rowstride of (width * 4).
 * 
 * Currently Cogl assumes that the framebuffer is in a premultiplied
 * format so if `format` is non-premultiplied it will convert it. To
 * read the pixel values without any conversion you should either
 * specify a format that doesn't use an alpha channel or use one of
 * the formats ending in PRE.
 * @param x The window x position to start reading from
 * @param y The window y position to start reading from
 * @param width The width of the rectangle you want to read
 * @param height The height of the rectangle you want to read
 * @param source Identifies which auxillary buffer you want to read          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
 * @param format The pixel format you want the result in          (only COGL_PIXEL_FORMAT_RGBA_8888 supported currently)
 * @param pixels The location to write the pixel data.
 */
function read_pixels(x: number, y: number, width: number, height: number, source: ReadPixelsFlags, format: PixelFormat, pixels: number): void
/**
 * Fills a rectangle at the given coordinates with the current source material
 * @param x_1 X coordinate of the top-left corner
 * @param y_1 Y coordinate of the top-left corner
 * @param x_2 X coordinate of the bottom-right corner
 * @param y_2 Y coordinate of the bottom-right corner
 */
function rectangle(x_1: number, y_1: number, x_2: number, y_2: number): void
/**
 * This function draws a rectangle using the current source material to
 * texture or fill with. As a material may contain multiple texture layers
 * this interface lets you supply texture coordinates for each layer of the
 * material.
 * 
 * The first pair of coordinates are for the first layer (with the smallest
 * layer index) and if you supply less texture coordinates than there are
 * layers in the current source material then default texture coordinates
 * (0.0, 0.0, 1.0, 1.0) are generated.
 * @param x1 x coordinate upper left on screen.
 * @param y1 y coordinate upper left on screen.
 * @param x2 x coordinate lower right on screen.
 * @param y2 y coordinate lower right on screen.
 * @param tex_coords An array containing groups of   4 float values: [tx1, ty1, tx2, ty2] that are interpreted as two texture   coordinates; one for the upper left texel, and one for the lower right   texel. Each value should be between 0.0 and 1.0, where the coordinate   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the   bottom right.
 * @param tex_coords_len The length of the tex_coords array. (e.g. for one layer   and one group of texture coordinates, this would be 4)
 */
function rectangle_with_multitexture_coords(x1: number, y1: number, x2: number, y2: number, tex_coords: number[], tex_coords_len: number): void
/**
 * Draw a rectangle using the current material and supply texture coordinates
 * to be used for the first texture layer of the material. To draw the entire
 * texture pass in `tx1`=0.0 `ty1`=0.0 `tx2`=1.0 `ty2`=1.0.
 * @param x1 x coordinate upper left on screen.
 * @param y1 y coordinate upper left on screen.
 * @param x2 x coordinate lower right on screen.
 * @param y2 y coordinate lower right on screen.
 * @param tx1 x part of texture coordinate to use for upper left pixel
 * @param ty1 y part of texture coordinate to use for upper left pixel
 * @param tx2 x part of texture coordinate to use for lower right pixel
 * @param ty2 y part of texture coordinate to use for left pixel
 */
function rectangle_with_texture_coords(x1: number, y1: number, x2: number, y2: number, tx1: number, ty1: number, tx2: number, ty2: number): void
/**
 * Draws a series of rectangles in the same way that
 * cogl_rectangle() does. In some situations it can give a
 * significant performance boost to use this function rather than
 * calling cogl_rectangle() separately for each rectangle.
 * 
 * `verts` should point to an array of #float<!-- -->s with
 * `n_rects` * 4 elements. Each group of 4 values corresponds to the
 * parameters x1, y1, x2, and y2, and have the same
 * meaning as in cogl_rectangle().
 * @param verts an array of vertices
 * @param n_rects number of rectangles to draw
 */
function rectangles(verts: number[], n_rects: number): void
/**
 * Draws a series of rectangles in the same way that
 * cogl_rectangle_with_texture_coords() does. In some situations it can give a
 * significant performance boost to use this function rather than
 * calling cogl_rectangle_with_texture_coords() separately for each rectangle.
 * 
 * `verts` should point to an array of #float<!-- -->s with
 * `n_rects` * 8 elements. Each group of 8 values corresponds to the
 * parameters x1, y1, x2, y2, tx1, ty1, tx2 and ty2 and have the same
 * meaning as in cogl_rectangle_with_texture_coords().
 * @param verts an array of vertices
 * @param n_rects number of rectangles to draw
 */
function rectangles_with_texture_coords(verts: number[], n_rects: number): void
/**
 * Multiplies the current model-view matrix by one that rotates the
 * model around the vertex specified by `x,` `y` and `z`. The rotation
 * follows the right-hand thumb rule so for example rotating by 10
 * degrees about the vertex (0, 0, 1) causes a small counter-clockwise
 * rotation.
 * @param angle Angle in degrees to rotate.
 * @param x X-component of vertex to rotate around.
 * @param y Y-component of vertex to rotate around.
 * @param z Z-component of vertex to rotate around.
 */
function rotate(angle: number, x: number, y: number, z: number): void
/**
 * Multiplies the current model-view matrix by one that scales the x,
 * y and z axes by the given values.
 * @param x Amount to scale along the x-axis
 * @param y Amount to scale along the y-axis
 * @param z Amount to scale along the z-axis
 */
function scale(x: number, y: number, z: number): void
/**
 * Sets whether textures positioned so that their backface is showing
 * should be hidden. This can be used to efficiently draw two-sided
 * textures or fully closed cubes without enabling depth testing. This
 * only affects calls to the cogl_rectangle* family of functions and
 * cogl_vertex_buffer_draw*. Backface culling is disabled by default.
 * @param setting %TRUE to enable backface culling or %FALSE to disable.
 */
function set_backface_culling_enabled(setting: Bool): void
/**
 * Sets whether depth testing is enabled. If it is disabled then the
 * order that actors are layered on the screen depends solely on the
 * order specified using clutter_actor_raise() and
 * clutter_actor_lower(), otherwise it will also take into account the
 * actor's depth. Depth testing is disabled by default.
 * @param setting %TRUE to enable depth testing or %FALSE to disable.
 */
function set_depth_test_enabled(setting: Bool): void
/**
 * Redirects all subsequent drawing to the specified framebuffer. This
 * can either be an offscreen buffer created with
 * cogl_offscreen_new_to_texture () or you can revert to your original
 * on screen window buffer.
 * @param target A #CoglBufferTarget that specifies what kind of framebuffer you          are setting as the render target.
 * @param offscreen If you are setting a framebuffer of type COGL_OFFSCREEN_BUFFER             then this is a CoglHandle for the offscreen buffer.
 */
function set_draw_buffer(target: BufferTarget, offscreen: Handle): void
/**
 * Enables fogging. Fogging causes vertices that are further away from the eye
 * to be rendered with a different color. The color is determined according to
 * the chosen fog mode; at it's simplest the color is linearly interpolated so
 * that vertices at `z_near` are drawn fully with their original color and
 * vertices at `z_far` are drawn fully with `fog_color`. Fogging will remain
 * enabled until you call cogl_disable_fog().
 * 
 * <note>The fogging functions only work correctly when primitives use
 * unmultiplied alpha colors. By default Cogl will premultiply textures
 * and cogl_set_source_color() will premultiply colors, so unless you
 * explicitly load your textures requesting an unmultiplied internal format
 * and use cogl_material_set_color() you can only use fogging with fully
 * opaque primitives. This might improve in the future when we can depend
 * on fragment shaders.</note>
 * @param fog_color The color of the fog
 * @param mode A #CoglFogMode that determines the equation used to calculate the   fogging blend factor.
 * @param density Used by %COGL_FOG_MODE_EXPONENTIAL and by   %COGL_FOG_MODE_EXPONENTIAL_SQUARED equations.
 * @param z_near Position along Z axis where no fogging should be applied
 * @param z_far Position along Z axis where full fogging should be applied
 */
function set_fog(fog_color: Color, mode: FogMode, density: number, z_near: number, z_far: number): void
/**
 * Loads `matrix` as the new model-view matrix.
 * @param matrix the new model-view matrix
 */
function set_modelview_matrix(matrix: Matrix): void
/**
 * Loads matrix as the new projection matrix.
 * @param matrix the new projection matrix
 */
function set_projection_matrix(matrix: Matrix): void
/**
 * This function changes the material at the top of the source stack.
 * The material at the top of this stack defines the GPU state used to
 * process subsequent primitives, such as rectangles drawn with
 * cogl_rectangle() or vertices drawn using cogl_vertex_buffer_draw().
 * @param material A #CoglMaterial
 */
function set_source(material: object | null): void
/**
 * This is a convenience function for creating a solid fill source material
 * from the given color. This color will be used for any subsequent drawing
 * operation.
 * 
 * The color will be premultiplied by Cogl, so the color should be
 * non-premultiplied. For example: use (1.0, 0.0, 0.0, 0.5) for
 * semi-transparent red.
 * 
 * See also cogl_set_source_color4ub() and cogl_set_source_color4f()
 * if you already have the color components.
 * @param color a #CoglColor
 */
function set_source_color(color: Color): void
/**
 * This is a convenience function for creating a solid fill source material
 * from the given color using normalized values for each component. This color
 * will be used for any subsequent drawing operation.
 * 
 * The value for each component is a fixed point number in the range
 * between 0 and %1.0. If the values passed in are outside that
 * range, they will be clamped.
 * @param red value of the red channel, between 0 and %1.0
 * @param green value of the green channel, between 0 and %1.0
 * @param blue value of the blue channel, between 0 and %1.0
 * @param alpha value of the alpha channel, between 0 and %1.0
 */
function set_source_color4f(red: number, green: number, blue: number, alpha: number): void
/**
 * This is a convenience function for creating a solid fill source material
 * from the given color using unsigned bytes for each component. This
 * color will be used for any subsequent drawing operation.
 * 
 * The value for each component is an unsigned byte in the range
 * between 0 and 255.
 * @param red value of the red channel, between 0 and 255
 * @param green value of the green channel, between 0 and 255
 * @param blue value of the blue channel, between 0 and 255
 * @param alpha value of the alpha channel, between 0 and 255
 */
function set_source_color4ub(red: number, green: number, blue: number, alpha: number): void
/**
 * This is a convenience function for creating a material with the first
 * layer set to `texture` and setting that material as the source with
 * cogl_set_source.
 * 
 * Note: There is no interaction between calls to cogl_set_source_color
 * and cogl_set_source_texture. If you need to blend a texture with a color then
 * you can create a simple material like this:
 * <programlisting>
 * material = cogl_material_new ();
 * cogl_material_set_color4ub (material, 0xff, 0x00, 0x00, 0x80);
 * cogl_material_set_layer (material, 0, tex_handle);
 * cogl_set_source (material);
 * </programlisting>
 * @param texture The #CoglTexture you want as your source
 */
function set_source_texture(texture: Texture): void
/**
 * Replaces the current viewport with the given values.
 * @param x X offset of the viewport
 * @param y Y offset of the viewport
 * @param width Width of the viewport
 * @param height Height of the viewport
 */
function set_viewport(x: number, y: number, width: number, height: number): void
/**
 * Compiles the shader, no return value, but the shader is now ready
 * for linking into a program. Note that calling this function is
 * optional. If it is not called then the shader will be automatically
 * compiled when it is linked.
 * @param handle #CoglHandle for a shader.
 */
function shader_compile(handle: Handle): void
/**
 * Retrieves the information log for a coglobject, can be used in conjunction
 * with cogl_shader_get_parameteriv() to retrieve the compiler warnings/error
 * messages that caused a shader to not compile correctly, mainly useful for
 * debugging purposes.
 * @param handle #CoglHandle for a shader.
 */
function shader_get_info_log(handle: Handle): string
/**
 * Retrieves the type of a shader #CoglHandle
 * @param handle #CoglHandle for a shader.
 */
function shader_get_type(handle: Handle): ShaderType
/**
 * Retrieves whether a shader #CoglHandle has been compiled
 * @param handle #CoglHandle for a shader.
 */
function shader_is_compiled(handle: Handle): Bool
/**
 * Add an extra reference to a shader.
 * @param handle A #CoglHandle to a shader.
 */
function shader_ref(handle: Handle): Handle
/**
 * Replaces the current source associated with a shader with a new
 * one.
 * 
 * Please see <link
 * linkend="cogl-Shaders-and-Programmable-Pipeline.description">above</link>
 * for a description of the recommended format for the shader code.
 * @param shader #CoglHandle for a shader.
 * @param source Shader source.
 */
function shader_source(shader: Handle, source: string): void
/**
 * Removes a reference to a shader. If it was the last reference the
 * shader object will be destroyed.
 * @param handle A #CoglHandle to a shader.
 */
function shader_unref(handle: Handle): void
/**
 * Very fast fixed point implementation of square root for integers.
 * 
 * This function is at least 6x faster than clib sqrt() on x86, and (this is
 * not a typo!) about 500x faster on ARM without FPU. It's error is less than
 * 5% for arguments smaller than %COGL_SQRTI_ARG_5_PERCENT and less than 10%
 * for narguments smaller than %COGL_SQRTI_ARG_10_PERCENT. The maximum
 * argument that can be passed to this function is %COGL_SQRTI_ARG_MAX.
 * @param x integer value
 */
function sqrti(x: number): number
function texture_error_quark(): number
/**
 * Multiplies the current model-view matrix by the given matrix.
 * @param matrix the matrix to multiply with the current model-view
 */
function transform(matrix: Matrix): void
/**
 * Multiplies the current model-view matrix by one that translates the
 * model along all three axes according to the given values.
 * @param x Distance to translate along the x-axis
 * @param y Distance to translate along the y-axis
 * @param z Distance to translate along the z-axis
 */
function translate(x: number, y: number, z: number): void
/**
 * Adds an attribute to a buffer, or replaces a previously added
 * attribute with the same name.
 * 
 * You either can use one of the built-in names such as "gl_Vertex", or
 * "gl_MultiTexCoord0" to add standard attributes, like positions, colors
 * and normals, or you can add custom attributes for use in shaders.
 * 
 * The number of vertices declared when calling cogl_vertex_buffer_new()
 * determines how many attribute values will be read from the supplied
 * `pointer`.
 * 
 * The data for your attribute isn't copied anywhere until you call
 * cogl_vertex_buffer_submit(), or issue a draw call which automatically
 * submits pending attribute changes. so the supplied pointer must remain
 * valid until then. If you are updating an existing attribute (done by
 * re-adding it) then you still need to re-call cogl_vertex_buffer_submit()
 * to commit the changes to the GPU. Be carefull to minimize the number
 * of calls to cogl_vertex_buffer_submit(), though.
 * 
 * <note>If you are interleving attributes it is assumed that each interleaved
 * attribute starts no farther than +- stride bytes from the other attributes
 * it is interleved with. I.e. this is ok:
 * <programlisting>
 * |-0-0-0-0-0-0-0-0-0-0|
 * </programlisting>
 * This is not ok:
 * <programlisting>
 * |- - - - -0-0-0-0-0-0 0 0 0 0|
 * </programlisting>
 * (Though you can have multiple groups of interleved attributes)</note>
 * @param handle A vertex buffer handle
 * @param attribute_name The name of your attribute. It should be a valid GLSL   variable name and standard attribute types must use one of following   built-in names: (Note: they correspond to the built-in names of GLSL)   <itemizedlist>     <listitem>"gl_Color"</listitem>     <listitem>"gl_Normal"</listitem>     <listitem>"gl_MultiTexCoord0, gl_MultiTexCoord1, ..."</listitem>     <listitem>"gl_Vertex"</listitem>   </itemizedlist>   To support adding multiple variations of the same attribute the name   can have a detail component, E.g. "gl_Color::active" or   "gl_Color::inactive"
 * @param n_components The number of components per attribute and must be 1, 2,   3 or 4
 * @param type a #CoglAttributeType specifying the data type of each component.
 * @param normalized If %TRUE, this specifies that values stored in an integer   format should be mapped into the range [-1.0, 1.0] or [0.0, 1.0]   for unsigned values. If %FALSE they are converted to floats   directly.
 * @param stride This specifies the number of bytes from the start of one attribute   value to the start of the next value (for the same attribute). So, for   example, with a position interleved with color like this:   XYRGBAXYRGBAXYRGBA, then if each letter represents a byte, the   stride for both attributes is 6. The special value 0 means the   values are stored sequentially in memory.
 * @param pointer This addresses the first attribute in the vertex array. This   must remain valid until you either call cogl_vertex_buffer_submit() or   issue a draw call.
 */
function vertex_buffer_add(handle: Handle, attribute_name: string, n_components: number, type: AttributeType, normalized: Bool, stride: number, pointer: object | null): void
/**
 * Deletes an attribute from a buffer. You will need to call
 * cogl_vertex_buffer_submit() or issue a draw call to commit this
 * change to the GPU.
 * @param handle A vertex buffer handle
 * @param attribute_name The name of a previously added attribute
 */
function vertex_buffer_delete(handle: Handle, attribute_name: string): void
/**
 * Disables a previosuly added attribute.
 * 
 * Since it can be costly to add and remove new attributes to buffers; to make
 * individual buffers more reuseable it is possible to enable and disable
 * attributes before using a buffer for drawing.
 * 
 * You don't need to call cogl_vertex_buffer_submit() after using this
 * function.
 * @param handle A vertex buffer handle
 * @param attribute_name The name of the attribute you want to disable
 */
function vertex_buffer_disable(handle: Handle, attribute_name: string): void
/**
 * Allows you to draw geometry using all or a subset of the
 * vertices in a vertex buffer.
 * 
 * Any un-submitted attribute changes are automatically submitted before
 * drawing.
 * @param handle A vertex buffer handle
 * @param mode A #CoglVerticesMode specifying how the vertices should be   interpreted.
 * @param first Specifies the index of the first vertex you want to draw with
 * @param count Specifies the number of vertices you want to draw.
 */
function vertex_buffer_draw(handle: Handle, mode: VerticesMode, first: number, count: number): void
/**
 * This function lets you use an array of indices to specify the vertices
 * within your vertex buffer that you want to draw. The indices themselves
 * are created by calling cogl_vertex_buffer_indices_new ()
 * 
 * Any un-submitted attribute changes are automatically submitted before
 * drawing.
 * @param handle A vertex buffer handle
 * @param mode A #CoglVerticesMode specifying how the vertices should be    interpreted.
 * @param indices A CoglHandle for a set of indices allocated via    cogl_vertex_buffer_indices_new ()
 * @param min_index Specifies the minimum vertex index contained in indices
 * @param max_index Specifies the maximum vertex index contained in indices
 * @param indices_offset An offset into named indices. The offset marks the first    index to use for drawing.
 * @param count Specifies the number of vertices you want to draw.
 */
function vertex_buffer_draw_elements(handle: Handle, mode: VerticesMode, indices: Handle, min_index: number, max_index: number, indices_offset: number, count: number): void
/**
 * Enables a previosuly disabled attribute.
 * 
 * Since it can be costly to add and remove new attributes to buffers; to make
 * individual buffers more reuseable it is possible to enable and disable
 * attributes before using a buffer for drawing.
 * 
 * You don't need to call cogl_vertex_buffer_submit() after using this function
 * @param handle A vertex buffer handle
 * @param attribute_name The name of the attribute you want to enable
 */
function vertex_buffer_enable(handle: Handle, attribute_name: string): void
/**
 * Retrieves the number of vertices that `handle` represents
 * @param handle A vertex buffer handle
 */
function vertex_buffer_get_n_vertices(handle: Handle): number
/**
 * Creates a vertex buffer containing the indices needed to draw pairs
 * of triangles from a list of vertices grouped as quads. There will
 * be at least `n_indices` entries in the buffer (but there may be
 * more).
 * 
 * The indices will follow this pattern:
 * 
 * 0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7 ... etc
 * 
 * For example, if you submit vertices for a quad like like that shown
 * in <xref linkend="quad-indices-order"/> then you can request 6
 * indices to render two triangles like those shown in <xref
 * linkend="quad-indices-triangles"/>.
 * 
 * <figure id="quad-indices-order">
 *   <title>Example of vertices submitted to form a quad</title>
 *   <graphic fileref="quad-indices-order.png" format="PNG"/>
 * </figure>
 * 
 * <figure id="quad-indices-triangles">
 *   <title>Illustration of the triangle indices that will be generated</title>
 *   <graphic fileref="quad-indices-triangles.png" format="PNG"/>
 * </figure>
 * @param n_indices the number of indices in the vertex buffer.
 */
function vertex_buffer_indices_get_for_quads(n_indices: number): Handle
/**
 * Queries back the data type used for the given indices
 * @param indices An indices handle
 */
function vertex_buffer_indices_get_type(indices: Handle): IndicesType
/**
 * Creates a new vertex buffer that you can use to add attributes.
 * @param n_vertices The number of vertices that your attributes will correspond to.
 */
function vertex_buffer_new(n_vertices: number): Handle
/**
 * Increment the reference count for a vertex buffer
 * @param handle a `CoglHandle`.
 */
function vertex_buffer_ref(handle: Handle): Handle
/**
 * Submits all the user added attributes to the GPU; once submitted, the
 * attributes can be used for drawing.
 * 
 * You should aim to minimize calls to this function since it implies
 * validating your data; it potentially incurs a transport cost (especially if
 * you are using GLX indirect rendering) and potentially a format conversion
 * cost if the GPU doesn't natively support any of the given attribute formats.
 * @param handle A vertex buffer handle
 */
function vertex_buffer_submit(handle: Handle): void
/**
 * Decrement the reference count for a vertex buffer
 * @param handle a `CoglHandle`.
 */
function vertex_buffer_unref(handle: Handle): void
/**
 * Replace the current viewport with the given values.
 * @param width Width of the viewport
 * @param height Height of the viewport
 */
function viewport(width: number, height: number): void
/**
 * The type used by cogl for function pointers, note that this type
 * is used as a generic catch-all cast for function pointers and the
 * actual arguments and return type may be different.
 * @callback 
 */
interface FuncPtr {
    (): void
}
interface Texture_ConstructProps extends GObject.Object_ConstructProps {
}

interface Texture {

    // Owm methods of Cogl-1.0.Cogl.Texture

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
    get_components(): TextureComponents
    /**
     * Copies the pixel data from a cogl texture to system memory.
     * 
     * <note>Don't pass the value of cogl_texture_get_rowstride() as the
     * `rowstride` argument, the rowstride should be the rowstride you
     * want for the destination `data` buffer not the rowstride of the
     * source texture</note>
     * @param format the #CoglPixelFormat to store the texture as.
     * @param rowstride the rowstride of `data` in bytes or pass 0 to calculate             from the bytes-per-pixel of `format` multiplied by the             `texture` width.
     * @param data memory location to write the `texture'`s contents, or %NULL to only query the data size through the return value.
     */
    get_data(format?: PixelFormat, rowstride?: number, data?: number): number

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key?: string): object | null
    get_data(...args: any[]): any
    get_data(args_or_key?: any[] | string): number | object | null | any
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number, /* out_gl_target */ number ]
    /**
     * Queries the height of a cogl texture.
     */
    get_height(): number
    /**
     * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
     * texture.
     */
    get_max_waste(): number
    /**
     * Queries the pre-multiplied alpha status for internally stored red,
     * green and blue components for the given `texture` as set by
     * cogl_texture_set_premultiplied().
     * 
     * By default the pre-multipled state is `TRUE`.
     */
    get_premultiplied(): Bool
    /**
     * Queries the width of a cogl texture.
     */
    get_width(): number
    /**
     * Queries if a texture is sliced (stored as multiple GPU side tecture
     * objects).
     */
    is_sliced(): Bool
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
     * @param components 
     */
    set_components(components: TextureComponents): void
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
     * @param premultiplied Whether any internally stored red, green or blue                 components are pre-multiplied by an alpha                 component.
     */
    set_premultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     * @param src_x upper left coordinate to use from source data.
     * @param src_y upper left coordinate to use from source data.
     * @param dst_x upper left destination horizontal coordinate.
     * @param dst_y upper left destination vertical coordinate.
     * @param dst_width width of destination region to write. (Must be less   than or equal to `width)`
     * @param dst_height height of destination region to write. (Must be less   than or equal to `height)`
     * @param width width of source data buffer.
     * @param height height of source data buffer.
     * @param format the #CoglPixelFormat used in the source buffer.
     * @param rowstride rowstride of source buffer (computed from width if none specified)
     * @param data the actual pixel data.
     */
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool

    // Class property signals of Cogl-1.0.Cogl.Texture

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Texture extends GObject.Object {

    // Own properties of Cogl-1.0.Cogl.Texture

    static name: string
    static $gtype: GObject.GType<Texture>

    // Constructors of Cogl-1.0.Cogl.Texture

    constructor(config?: Texture_ConstructProps) 
    _init(config?: Texture_ConstructProps): void
}

interface Bitmap {
}

class Bitmap {

    // Own properties of Cogl-1.0.Cogl.Bitmap

    static name: string

    // Constructors of Cogl-1.0.Cogl.Bitmap

    /**
     * Loads an image file from disk. This function can be safely called from
     * within a thread.
     * @constructor 
     * @param filename the file to load.
     */
    static new_from_file(filename: string): Bitmap
    /**
     * Parses an image file enough to extract the width and height
     * of the bitmap.
     * @param filename the file to check
     */
    static get_size_from_file(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}

interface Fixed {

    // Owm methods of Cogl-1.0.Cogl.Fixed

    /**
     * Calculates 2 to the `x` power.
     * 
     * This function is around 11 times faster on x86, and around 22 times faster
     * on fpu-less arm than libc pow(2, x).
     */
    pow2(): number
}

/**
 * Fixed point number using a (16.16) notation.
 * @class 
 */
class Fixed {

    // Own properties of Cogl-1.0.Cogl.Fixed

    static name: string

    // Constructors of Cogl-1.0.Cogl.Fixed

    /**
     * Calculates `x` to the `y` power.
     * @param x base
     * @param y #CoglFixed exponent
     */
    static pow(x: number, y: Fixed): number
}

interface Offscreen {
}

class Offscreen {

    // Own properties of Cogl-1.0.Cogl.Offscreen

    static name: string

    // Constructors of Cogl-1.0.Cogl.Offscreen

    /**
     * This creates an offscreen buffer object using the given `texture` as the
     * primary color buffer. It doesn't just initialize the contents of the
     * offscreen buffer with the `texture;` they are tightly bound so that
     * drawing to the offscreen buffer effectivly updates the contents of the
     * given texture. You don't need to destroy the offscreen buffer before
     * you can use the `texture` again.
     * 
     * <note>This only works with low-level #CoglTexture types such as
     * #CoglTexture2D, #CoglTexture3D and #CoglTextureRectangle, and not
     * with meta-texture types such as #CoglTexture2DSliced.</note>
     * @constructor 
     * @param texture A #CoglTexture pointer
     */
    static new_to_texture(texture: Texture): Offscreen
    /**
     * This creates an offscreen framebuffer object using the given
     * `texture` as the primary color buffer. It doesn't just initialize
     * the contents of the offscreen buffer with the `texture;` they are
     * tightly bound so that drawing to the offscreen buffer effectively
     * updates the contents of the given texture. You don't need to
     * destroy the offscreen buffer before you can use the `texture` again.
     * 
     * <note>This api only works with low-level #CoglTexture types such as
     * #CoglTexture2D, #CoglTexture3D and #CoglTextureRectangle, and not
     * with meta-texture types such as #CoglTexture2DSliced.</note>
     * 
     * The storage for the framebuffer is actually allocated lazily
     * so this function will never return %NULL to indicate a runtime
     * error. This means it is still possible to configure the framebuffer
     * before it is really allocated.
     * 
     * Simple applications without full error handling can simply rely on
     * Cogl to lazily allocate the storage of framebuffers but you should
     * be aware that if Cogl encounters an error (such as running out of
     * GPU memory) then your application will simply abort with an error
     * message. If you need to be able to catch such exceptions at runtime
     * then you can explicitly allocate your framebuffer when you have
     * finished configuring it by calling cogl_framebuffer_allocate() and
     * passing in a #CoglError argument to catch any exceptions.
     * @constructor 
     * @param texture A #CoglTexture pointer
     */
    static new_with_texture(texture: Texture): Offscreen
    /**
     * Increments the reference count on the `offscreen` framebuffer.
     * @param offscreen A pointer to a #CoglOffscreen framebuffer
     */
    static ref(offscreen: object | null): object | null
    /**
     * Decreases the reference count for the `offscreen` buffer and frees it when
     * the count reaches 0.
     * @param offscreen A pointer to a #CoglOffscreen framebuffer
     */
    static unref(offscreen: object | null): void
}

interface Color {

    // Owm methods of Cogl-1.0.Cogl.Color

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
    get_alpha(): number
    /**
     * Retrieves the alpha channel of `color` as a byte value
     * between 0 and 255
     */
    get_alpha_byte(): number
    /**
     * Retrieves the alpha channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    get_alpha_float(): number
    /**
     * Retrieves the blue channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    get_blue(): number
    /**
     * Retrieves the blue channel of `color` as a byte value
     * between 0 and 255
     */
    get_blue_byte(): number
    /**
     * Retrieves the blue channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    get_blue_float(): number
    /**
     * Retrieves the green channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    get_green(): number
    /**
     * Retrieves the green channel of `color` as a byte value
     * between 0 and 255
     */
    get_green_byte(): number
    /**
     * Retrieves the green channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    get_green_float(): number
    /**
     * Retrieves the red channel of `color` as a fixed point
     * value between 0 and 1.0.
     */
    get_red(): number
    /**
     * Retrieves the red channel of `color` as a byte value
     * between 0 and 255
     */
    get_red_byte(): number
    /**
     * Retrieves the red channel of `color` as a floating point
     * value between 0.0 and 1.0
     */
    get_red_float(): number
    /**
     * Sets the values of the passed channels into a #CoglColor
     * @param red value of the red channel, between 0 and 1.0
     * @param green value of the green channel, between 0 and 1.0
     * @param blue value of the blue channel, between 0 and 1.0
     * @param alpha value of the alpha channel, between 0 and 1.0
     */
    init_from_4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor
     * @param color_array a pointer to an array of 4 float color components
     */
    init_from_4fv(color_array: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor.
     * @param red value of the red channel, between 0 and 255
     * @param green value of the green channel, between 0 and 255
     * @param blue value of the blue channel, between 0 and 255
     * @param alpha value of the alpha channel, between 0 and 255
     */
    init_from_4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Converts a non-premultiplied color to a pre-multiplied color. For
     * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
     * and (0.5, 0, 0, 0.5) when premultiplied.
     */
    premultiply(): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     * @param alpha a float value between 0.0f and 1.0f
     */
    set_alpha(alpha: number): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     * @param alpha a byte value between 0 and 255
     */
    set_alpha_byte(alpha: number): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     * @param alpha a float value between 0.0f and 1.0f
     */
    set_alpha_float(alpha: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     * @param blue a float value between 0.0f and 1.0f
     */
    set_blue(blue: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     * @param blue a byte value between 0 and 255
     */
    set_blue_byte(blue: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     * @param blue a float value between 0.0f and 1.0f
     */
    set_blue_float(blue: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor
     * @param red value of the red channel, between 0 and %1.0
     * @param green value of the green channel, between 0 and %1.0
     * @param blue value of the blue channel, between 0 and %1.0
     * @param alpha value of the alpha channel, between 0 and %1.0
     */
    set_from_4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor.
     * @param red value of the red channel, between 0 and 255
     * @param green value of the green channel, between 0 and 255
     * @param blue value of the blue channel, between 0 and 255
     * @param alpha value of the alpha channel, between 0 and 255
     */
    set_from_4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the green channel of `color` to `green`.
     * @param green a float value between 0.0f and 1.0f
     */
    set_green(green: number): void
    /**
     * Sets the green channel of `color` to `green`.
     * @param green a byte value between 0 and 255
     */
    set_green_byte(green: number): void
    /**
     * Sets the green channel of `color` to `green`.
     * @param green a float value between 0.0f and 1.0f
     */
    set_green_float(green: number): void
    /**
     * Sets the red channel of `color` to `red`.
     * @param red a float value between 0.0f and 1.0f
     */
    set_red(red: number): void
    /**
     * Sets the red channel of `color` to `red`.
     * @param red a byte value between 0 and 255
     */
    set_red_byte(red: number): void
    /**
     * Sets the red channel of `color` to `red`.
     * @param red a float value between 0.0f and 1.0f
     */
    set_red_float(red: number): void
    /**
     * Converts `color` to the HLS format.
     * 
     * The `hue` value is in the 0 .. 360 range. The `luminance` and
     * `saturation` values are in the 0 .. 1 range.
     */
    to_hsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    /**
     * Converts a pre-multiplied color to a non-premultiplied color. For
     * example, semi-transparent red is (0.5, 0, 0, 0.5) when premultiplied
     * and (1.0, 0, 0, 0.5) when non-premultiplied.
     */
    unpremultiply(): void
}

/**
 * A structure for holding a color definition. The contents of
 * the CoglColor structure are private and should never by accessed
 * directly.
 * @record 
 */
class Color {

    // Own properties of Cogl-1.0.Cogl.Color

    static name: string

    // Constructors of Cogl-1.0.Cogl.Color

    /**
     * Creates a new (empty) color
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new (empty) color
     * @constructor 
     */
    static new(): Color
    /**
     * Compares two #CoglColor<!-- -->s and checks if they are the same.
     * 
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
     * @param v1 a #CoglColor
     * @param v2 a #CoglColor
     */
    static equal(v1: object | null, v2: object | null): Bool
    /**
     * Converts a color expressed in HLS (hue, luminance and saturation)
     * values into a #CoglColor.
     * @param hue hue value, in the 0 .. 360 range
     * @param saturation saturation value, in the 0 .. 1 range
     * @param luminance luminance value, in the 0 .. 1 range
     */
    static init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
}

interface Euler {
}

class Euler {

    // Own properties of Cogl-1.0.Cogl.Euler

    static name: string
}

interface Material {

    // Owm methods of Cogl-1.0.Cogl.Material

    /**
     * Retrieves the current ambient color for `material`
     * @param ambient The location to store the ambient color
     */
    get_ambient(ambient: Color): void
    /**
     * Retrieves the current material color.
     */
    get_color(): /* color */ Color
    /**
     * Retrieves the current diffuse color for `material`
     * @param diffuse The location to store the diffuse color
     */
    get_diffuse(diffuse: Color): void
    /**
     * Retrieves the materials current emission color.
     * @param emission The location to store the emission color
     */
    get_emission(emission: Color): void
    /**
     * Gets whether point sprite coordinate generation is enabled for this
     * texture layer.
     * @param layer_index the layer number to check.
     */
    get_layer_point_sprite_coords_enabled(layer_index: number): Bool
    /**
     * Returns the wrap mode for the 'p' coordinate of texture lookups on this
     * layer.
     * @param layer_index the layer number to change.
     */
    get_layer_wrap_mode_p(layer_index: number): MaterialWrapMode
    /**
     * Returns the wrap mode for the 's' coordinate of texture lookups on this
     * layer.
     * @param layer_index the layer number to change.
     */
    get_layer_wrap_mode_s(layer_index: number): MaterialWrapMode
    /**
     * Returns the wrap mode for the 't' coordinate of texture lookups on this
     * layer.
     * @param layer_index the layer number to change.
     */
    get_layer_wrap_mode_t(layer_index: number): MaterialWrapMode
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
    get_layers(): MaterialLayer[]
    /**
     * Retrieves the number of layers defined for the given `material`
     */
    get_n_layers(): number
    /**
     * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
     * used with the vertex buffer API.
     */
    get_point_size(): number
    /**
     * Retrieves the materials current emission color.
     */
    get_shininess(): number
    /**
     * Retrieves the materials current specular color.
     * @param specular The location to store the specular color
     */
    get_specular(specular: Color): void
    /**
     * Queries what user program has been associated with the given
     * `material` using cogl_material_set_user_program().
     */
    get_user_program(): Handle
    /**
     * This function removes a layer from your material
     * @param layer_index Specifies the layer you want to remove
     */
    remove_layer(layer_index: number): void
    /**
     * Before a primitive is blended with the framebuffer, it goes through an
     * alpha test stage which lets you discard fragments based on the current
     * alpha value. This function lets you change the function used to evaluate
     * the alpha channel, and thus determine which fragments are discarded
     * and which continue on to the blending stage.
     * 
     * The default is %COGL_MATERIAL_ALPHA_FUNC_ALWAYS
     * @param alpha_func A `CoglMaterialAlphaFunc` constant
     * @param alpha_reference A reference point that the chosen alpha function uses   to compare incoming fragments to.
     */
    set_alpha_test_function(alpha_func: MaterialAlphaFunc, alpha_reference: number): void
    /**
     * Sets the material's ambient color, in the standard OpenGL lighting
     * model. The ambient color affects the overall color of the object.
     * 
     * Since the diffuse color will be intense when the light hits the surface
     * directly, the ambient will be most apparent where the light hits at a
     * slant.
     * 
     * The default value is (0.2, 0.2, 0.2, 1.0)
     * @param ambient The components of the desired ambient color
     */
    set_ambient(ambient: Color): void
    /**
     * Conveniently sets the diffuse and ambient color of `material` at the same
     * time. See cogl_material_set_ambient() and cogl_material_set_diffuse().
     * 
     * The default ambient color is (0.2, 0.2, 0.2, 1.0)
     * 
     * The default diffuse color is (0.8, 0.8, 0.8, 1.0)
     * @param color The components of the desired ambient and diffuse colors
     */
    set_ambient_and_diffuse(color: Color): void
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
     * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>   describing the desired blend function.
     */
    set_blend(blend_string: string): Bool
    /**
     * When blending is setup to reference a CONSTANT blend factor then
     * blending will depend on the constant set with this function.
     * @param constant_color The constant color you want
     */
    set_blend_constant(constant_color: Color): void
    /**
     * Sets the basic color of the material, used when no lighting is enabled.
     * 
     * Note that if you don't add any layers to the material then the color
     * will be blended unmodified with the destination; the default blend
     * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
     * semi-transparent red. See cogl_color_premultiply().
     * 
     * The default value is (1.0, 1.0, 1.0, 1.0)
     * @param color The components of the color
     */
    set_color(color: Color): void
    /**
     * Sets the basic color of the material, used when no lighting is enabled.
     * 
     * The default value is (1.0, 1.0, 1.0, 1.0)
     * @param red The red component
     * @param green The green component
     * @param blue The blue component
     * @param alpha The alpha component
     */
    set_color4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the basic color of the material, used when no lighting is enabled.
     * 
     * The default value is (0xff, 0xff, 0xff, 0xff)
     * @param red The red component
     * @param green The green component
     * @param blue The blue component
     * @param alpha The alpha component
     */
    set_color4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the material's diffuse color, in the standard OpenGL lighting
     * model. The diffuse color is most intense where the light hits the
     * surface directly - perpendicular to the surface.
     * 
     * The default value is (0.8, 0.8, 0.8, 1.0)
     * @param diffuse The components of the desired diffuse color
     */
    set_diffuse(diffuse: Color): void
    /**
     * Sets the material's emissive color, in the standard OpenGL lighting
     * model. It will look like the surface is a light source emitting this
     * color.
     * 
     * The default value is (0.0, 0.0, 0.0, 1.0)
     * @param emission The components of the desired emissive color
     */
    set_emission(emission: Color): void
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
     * @param layer_index the index of the layer
     * @param texture a #CoglHandle for the layer object
     */
    set_layer(layer_index: number, texture: Handle): void
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
     * @param layer_index Specifies the layer you want define a combine function for
     * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>    describing the desired texture combine function.
     */
    set_layer_combine(layer_index: number, blend_string: string): Bool
    /**
     * When you are using the 'CONSTANT' color source in a layer combine
     * description then you can use this function to define its value.
     * @param layer_index Specifies the layer you want to specify a constant used               for texture combining
     * @param constant The constant color you want
     */
    set_layer_combine_constant(layer_index: number, constant: Color): void
    /**
     * Changes the decimation and interpolation filters used when a texture is
     * drawn at other scales than 100%.
     * @param layer_index the layer number to change.
     * @param min_filter the filter used when scaling a texture down.
     * @param mag_filter the filter used when magnifying a texture.
     */
    set_layer_filters(layer_index: number, min_filter: MaterialFilter, mag_filter: MaterialFilter): void
    /**
     * This function lets you set a matrix that can be used to e.g. translate
     * and rotate a single layer of a material used to fill your geometry.
     * @param layer_index the index for the layer inside `material`
     * @param matrix the transformation matrix for the layer
     */
    set_layer_matrix(layer_index: number, matrix: Matrix): void
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
     * @param layer_index the layer number to change.
     * @param enable whether to enable point sprite coord generation.
     */
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool
    /**
     * Sets the wrap mode for all three coordinates of texture lookups on
     * this layer. This is equivalent to calling
     * cogl_material_set_layer_wrap_mode_s(),
     * cogl_material_set_layer_wrap_mode_t() and
     * cogl_material_set_layer_wrap_mode_p() separately.
     * @param layer_index the layer number to change.
     * @param mode the new wrap mode
     */
    set_layer_wrap_mode(layer_index: number, mode: MaterialWrapMode): void
    /**
     * Sets the wrap mode for the 'p' coordinate of texture lookups on
     * this layer. 'p' is the third coordinate.
     * @param layer_index the layer number to change.
     * @param mode the new wrap mode
     */
    set_layer_wrap_mode_p(layer_index: number, mode: MaterialWrapMode): void
    /**
     * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
     * @param layer_index the layer number to change.
     * @param mode the new wrap mode
     */
    set_layer_wrap_mode_s(layer_index: number, mode: MaterialWrapMode): void
    /**
     * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
     * @param layer_index the layer number to change.
     * @param mode the new wrap mode
     */
    set_layer_wrap_mode_t(layer_index: number, mode: MaterialWrapMode): void
    /**
     * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
     * used with the vertex buffer API. Note that typically the GPU will
     * only support a limited minimum and maximum range of point sizes. If
     * the chosen point size is outside that range then the nearest value
     * within that range will be used instead. The size of a point is in
     * screen space so it will be the same regardless of any
     * transformations. The default point size is 1.0.
     * @param point_size the new point size.
     */
    set_point_size(point_size: number): void
    /**
     * Sets the shininess of the material, in the standard OpenGL lighting
     * model, which determines the size of the specular highlights. A
     * higher `shininess` will produce smaller highlights which makes the
     * object appear more shiny.
     * 
     * The default value is 0.0
     * @param shininess The desired shininess; must be >= 0.0
     */
    set_shininess(shininess: number): void
    /**
     * Sets the material's specular color, in the standard OpenGL lighting
     * model. The intensity of the specular color depends on the viewport
     * position, and is brightest along the lines of reflection.
     * 
     * The default value is (0.0, 0.0, 0.0, 1.0)
     * @param specular The components of the desired specular color
     */
    set_specular(specular: Color): void
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
     * @param program A #CoglHandle to a linked CoglProgram
     */
    set_user_program(program: Handle): void
}

class Material {

    // Own properties of Cogl-1.0.Cogl.Material

    static name: string

    // Constructors of Cogl-1.0.Cogl.Material

    /**
     * Increment the reference count for a #CoglMaterial.
     * @param material a #CoglMaterial object.
     */
    static ref(material: Handle): Handle
    /**
     * Decrement the reference count for a #CoglMaterial.
     * @param material a #CoglMaterial object.
     */
    static unref(material: Handle): void
}

interface MaterialLayer {

    // Owm methods of Cogl-1.0.Cogl.MaterialLayer

    /**
     * Queries the currently set downscaling filter for a material later
     */
    get_mag_filter(): MaterialFilter
    /**
     * Queries the currently set downscaling filter for a material layer
     */
    get_min_filter(): MaterialFilter
    /**
     * Extracts a texture handle for a specific layer.
     * 
     * <note>In the future Cogl may support purely GLSL based layers; for those
     * layers this function which will likely return %COGL_INVALID_HANDLE if you
     * try to get the texture handle from them. Considering this scenario, you
     * should call cogl_material_layer_get_type() first in order check it is of
     * type %COGL_MATERIAL_LAYER_TYPE_TEXTURE before calling this function.</note>
     */
    get_texture(): Handle
    /**
     * Retrieves the type of the layer
     * 
     * Currently there is only one type of layer defined:
     * %COGL_MATERIAL_LAYER_TYPE_TEXTURE, but considering we may add purely GLSL
     * based layers in the future, you should write code that checks the type
     * first.
     */
    get_type(): MaterialLayerType
    /**
     * Gets the wrap mode for the 'p' coordinate of texture lookups on
     * this layer. 'p' is the third coordinate.
     */
    get_wrap_mode_p(): MaterialWrapMode
    /**
     * Gets the wrap mode for the 's' coordinate of texture lookups on this layer.
     */
    get_wrap_mode_s(): MaterialWrapMode
    /**
     * Gets the wrap mode for the 't' coordinate of texture lookups on this layer.
     */
    get_wrap_mode_t(): MaterialWrapMode
}

class MaterialLayer {

    // Own properties of Cogl-1.0.Cogl.MaterialLayer

    static name: string
}

interface Matrix {

    // Own fields of Cogl-1.0.Cogl.Matrix

    xx: number
    yx: number
    zx: number
    wx: number
    xy: number
    yy: number
    zy: number
    wy: number
    xz: number
    yz: number
    zz: number
    wz: number
    xw: number
    yw: number
    zw: number
    ww: number

    // Owm methods of Cogl-1.0.Cogl.Matrix

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
     * @param left X position of the left clipping plane where it   intersects the near clipping plane
     * @param right X position of the right clipping plane where it   intersects the near clipping plane
     * @param bottom Y position of the bottom clipping plane where it   intersects the near clipping plane
     * @param top Y position of the top clipping plane where it intersects   the near clipping plane
     * @param z_near The distance to the near clipping plane (Must be positive)
     * @param z_far The distance to the far clipping plane (Must be positive)
     */
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    /**
     * Casts `matrix` to a float array which can be directly passed to OpenGL.
     */
    get_array(): number
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
    get_inverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    /**
     * Initializes `matrix` with the contents of `array`
     * @param array A linear array of 16 floats (column-major order)
     */
    init_from_array(array: number): void
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
    init_identity(): void
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
     * @param tx x coordinate of the translation vector
     * @param ty y coordinate of the translation vector
     * @param tz z coordinate of the translation vector
     */
    init_translation(tx: number, ty: number, tz: number): void
    /**
     * Determines if the given matrix is an identity matrix.
     */
    is_identity(): Bool
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
     * @param eye_position_x The X coordinate to look from
     * @param eye_position_y The Y coordinate to look from
     * @param eye_position_z The Z coordinate to look from
     * @param object_x The X coordinate of the object to look at
     * @param object_y The Y coordinate of the object to look at
     * @param object_z The Z coordinate of the object to look at
     * @param world_up_x The X component of the world's up direction vector
     * @param world_up_y The Y component of the world's up direction vector
     * @param world_up_z The Z component of the world's up direction vector
     */
    look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void
    /**
     * Multiplies the two supplied matrices together and stores
     * the resulting matrix inside `result`.
     * 
     * <note>It is possible to multiply the `a` matrix in-place, so
     * `result` can be equal to `a` but can't be equal to `b`.</note>
     * @param a A 4x4 transformation matrix
     * @param b A 4x4 transformation matrix
     */
    multiply(a: Matrix, b: Matrix): void
    /**
     * Multiplies `matrix` by a parallel projection matrix.
     * @param left The coordinate for the left clipping plane
     * @param right The coordinate for the right clipping plane
     * @param bottom The coordinate for the bottom clipping plane
     * @param top The coordinate for the top clipping plane
     * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
     * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
     */
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    /**
     * Multiplies `matrix` by the described perspective matrix
     * 
     * <note>You should be careful not to have to great a `z_far` / `z_near`
     * ratio since that will reduce the effectiveness of depth testing
     * since there wont be enough precision to identify the depth of
     * objects near to each other.</note>
     * @param fov_y Vertical field of view angle in degrees.
     * @param aspect The (width over height) aspect ratio for display
     * @param z_near The distance to the near clipping plane (Must be positive,   and must not be 0)
     * @param z_far The distance to the far clipping plane (Must be positive)
     */
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    /**
     * Multiplies `matrix` with a rotation matrix that applies a rotation
     * of `angle` degrees around the specified 3D vector.
     * @param angle The angle you want to rotate in degrees
     * @param x X component of your rotation vector
     * @param y Y component of your rotation vector
     * @param z Z component of your rotation vector
     */
    rotate(angle: number, x: number, y: number, z: number): void
    /**
     * Multiplies `matrix` with a transform matrix that scales along the X,
     * Y and Z axis.
     * @param sx The X scale factor
     * @param sy The Y scale factor
     * @param sz The Z scale factor
     */
    scale(sx: number, sy: number, sz: number): void
    /**
     * Transforms a point whos position is given and returned as four float
     * components.
     * @param x The X component of your points position
     * @param y The Y component of your points position
     * @param z The Z component of your points position
     * @param w The W component of your points position
     */
    transform_point(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    /**
     * Multiplies `matrix` with a transform matrix that translates along
     * the X, Y and Z axis.
     * @param x The X translation you want to apply
     * @param y The Y translation you want to apply
     * @param z The Z translation you want to apply
     */
    translate(x: number, y: number, z: number): void
    /**
     * Replaces `matrix` with its transpose. Ie, every element (i,j) in the
     * new matrix is taken from element (j,i) in the old matrix.
     */
    transpose(): void
}

/**
 * A CoglMatrix holds a 4x4 transform matrix. This is a single precision,
 * column-major matrix which means it is compatible with what OpenGL expects.
 * 
 * A CoglMatrix can represent transforms such as, rotations, scaling,
 * translation, sheering, and linear projections. You can combine these
 * transforms by multiplying multiple matrices in the order you want them
 * applied.
 * 
 * The transformation of a vertex (x, y, z, w) by a CoglMatrix is given by:
 * 
 * |[
 *   x_new = xx * x + xy * y + xz * z + xw * w
 *   y_new = yx * x + yy * y + yz * z + yw * w
 *   z_new = zx * x + zy * y + zz * z + zw * w
 *   w_new = wx * x + wy * y + wz * z + ww * w
 * ```
 * 
 * 
 * Where w is normally 1
 * 
 * <note>You must consider the members of the CoglMatrix structure read only,
 * and all matrix modifications must be done via the cogl_matrix API. This
 * allows Cogl to annotate the matrices internally. Violation of this will give
 * undefined results. If you need to initialize a matrix with a constant other
 * than the identity matrix you can use cogl_matrix_init_from_array().</note>
 * @record 
 */
class Matrix {

    // Own properties of Cogl-1.0.Cogl.Matrix

    static name: string

    // Constructors of Cogl-1.0.Cogl.Matrix

    /**
     * Compares two matrices to see if they represent the same
     * transformation. Although internally the matrices may have different
     * annotations associated with them and may potentially have a cached
     * inverse matrix these are not considered in the comparison.
     * @param v1 A 4x4 transformation matrix
     * @param v2 A 4x4 transformation matrix
     */
    static equal(v1: object | null, v2: object | null): Bool
}

interface Quaternion {
}

class Quaternion {

    // Own properties of Cogl-1.0.Cogl.Quaternion

    static name: string
}

interface TextureVertex {

    // Own fields of Cogl-1.0.Cogl.TextureVertex

    /**
     * Model x-coordinate
     * @field 
     */
    x: number
    /**
     * Model y-coordinate
     * @field 
     */
    y: number
    /**
     * Model z-coordinate
     * @field 
     */
    z: number
    /**
     * Texture x-coordinate
     * @field 
     */
    tx: number
    /**
     * Texture y-coordinate
     * @field 
     */
    ty: number
    /**
     * The color to use at this vertex. This is ignored if
     *   use_color is %FALSE when calling cogl_polygon()
     * @field 
     */
    color: Color
}

/**
 * Used to specify vertex information when calling cogl_polygon()
 * @record 
 */
class TextureVertex {

    // Own properties of Cogl-1.0.Cogl.TextureVertex

    static name: string
}

interface _ColorSizeCheck {

    // Own fields of Cogl-1.0.Cogl._ColorSizeCheck

    compile_time_assert_CoglColor_size: number[]
}

class _ColorSizeCheck {

    // Own properties of Cogl-1.0.Cogl._ColorSizeCheck

    static name: string
}

interface _MatrixSizeCheck {

    // Own fields of Cogl-1.0.Cogl._MatrixSizeCheck

    compile_time_assert_CoglMatrix_size: number[]
}

class _MatrixSizeCheck {

    // Own properties of Cogl-1.0.Cogl._MatrixSizeCheck

    static name: string
}

interface _TextureVertexSizeCheck {

    // Own fields of Cogl-1.0.Cogl._TextureVertexSizeCheck

    compile_time_assert_CoglTextureVertex_size: number[]
}

class _TextureVertexSizeCheck {

    // Own properties of Cogl-1.0.Cogl._TextureVertexSizeCheck

    static name: string
}

    type Angle = number
    type Bool = number
    type Handle = object
}
export default Cogl;