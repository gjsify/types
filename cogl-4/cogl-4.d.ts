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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GL from '@girs/gl-1.0';

export namespace Cogl {
    /**
     * Cogl-4
     */

    /**
     * Data types for the components of a vertex attribute.
     */

    /**
     * Data types for the components of a vertex attribute.
     */
    export namespace AttributeType {
        export const $gtype: GObject.GType<AttributeType>;
    }

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

    /**
     * Error codes that can be thrown when performing bitmap
     * operations. Note that gdk_pixbuf_new_from_file() can also throw
     * errors directly from the underlying image loading library. For
     * example, if GdkPixbuf is used then errors #GdkPixbufError<!-- -->s
     * will be used directly.
     */
    export namespace BitmapError {
        export const $gtype: GObject.GType<BitmapError>;
    }

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

    /**
     * Error enumeration for the blend strings parser
     */
    export namespace BlendStringError {
        export const $gtype: GObject.GType<BlendStringError>;
    }

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

    /**
     * When using depth testing one of these functions is used to compare
     * the depth of an incoming fragment against the depth value currently
     * stored in the depth buffer. The function is changed using
     * cogl_depth_state_set_test_function().
     *
     * The test is only done when depth testing is explicitly enabled. (See
     * cogl_depth_state_set_test_enabled())
     */
    export namespace DepthTestFunction {
        export const $gtype: GObject.GType<DepthTestFunction>;
    }

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

    /**
     * Return values for the #CoglXlibFilterFunc and #CoglWin32FilterFunc functions.
     */
    export namespace FilterReturn {
        export const $gtype: GObject.GType<FilterReturn>;
    }

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
     *
     * ```
     *   f = end - eye_distance / end - start
     * ```
     *
     *
     * Where eye_distance is the distance of the current fragment in eye
     * coordinates from the origin.
     */

    /**
     * The fog mode determines the equation used to calculate the fogging blend
     * factor while fogging is enabled. The simplest %COGL_FOG_MODE_LINEAR mode
     * determines f as:
     *
     *
     * ```
     *   f = end - eye_distance / end - start
     * ```
     *
     *
     * Where eye_distance is the distance of the current fragment in eye
     * coordinates from the origin.
     */
    export namespace FogMode {
        export const $gtype: GObject.GType<FogMode>;
    }

    enum FogMode {
        /**
         * Calculates the fog blend factor as:
         *
         * ```
         *   f = end - eye_distance / end - start
         * ```
         *
         */
        LINEAR,
        /**
         * Calculates the fog blend factor as:
         *
         * ```
         *   f = e ^ -(density * eye_distance)
         * ```
         *
         */
        EXPONENTIAL,
        /**
         * Calculates the fog blend factor as:
         *
         * ```
         *   f = e ^ -(density * eye_distance)^2
         * ```
         *
         */
        EXPONENTIAL_SQUARED,
    }
    /**
     * Identifiers that are passed to #CoglFrameCallback functions
     * (registered using cogl_onscreen_add_frame_callback()) that
     * mark the progression of a frame in some way which usually
     * means that new information will have been accumulated in the
     * frame's corresponding #CoglFrameInfo object.
     *
     * The last event that will be sent for a frame will be a
     * `COGL_FRAME_EVENT_COMPLETE` event and so these are a good
     * opportunity to collect statistics about a frame since the
     * #CoglFrameInfo should hold the most data at this point.
     *
     * <note>A frame may not be completed before the next frame can start
     * so applications should avoid needing to collect all statistics for
     * a particular frame before they can start a new frame.</note>
     */

    /**
     * Identifiers that are passed to #CoglFrameCallback functions
     * (registered using cogl_onscreen_add_frame_callback()) that
     * mark the progression of a frame in some way which usually
     * means that new information will have been accumulated in the
     * frame's corresponding #CoglFrameInfo object.
     *
     * The last event that will be sent for a frame will be a
     * `COGL_FRAME_EVENT_COMPLETE` event and so these are a good
     * opportunity to collect statistics about a frame since the
     * #CoglFrameInfo should hold the most data at this point.
     *
     * <note>A frame may not be completed before the next frame can start
     * so applications should avoid needing to collect all statistics for
     * a particular frame before they can start a new frame.</note>
     */
    export namespace FrameEvent {
        export const $gtype: GObject.GType<FrameEvent>;
    }

    enum FrameEvent {
        /**
         * Notifies that the system compositor has
         *                         acknowledged a frame and is ready for a
         *                         new frame to be created.
         */
        SYNC,
        /**
         * Notifies that a frame has ended. This
         *                             is a good time for applications to
         *                             collect statistics about the frame
         *                             since the #CoglFrameInfo should hold
         *                             the most data at this point. No other
         *                             events should be expected after a
         *                             `COGL_FRAME_EVENT_COMPLETE` event.
         */
        COMPLETE,
    }

    export namespace FramebufferError {
        export const $gtype: GObject.GType<FramebufferError>;
    }

    enum FramebufferError {
        FRAMEBUFFER_ERROR_ALLOCATE,
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
    export namespace IndicesType {
        export const $gtype: GObject.GType<IndicesType>;
    }

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

    /**
     * Alpha testing happens before blending primitives with the framebuffer and
     * gives an opportunity to discard fragments based on a comparison with the
     * incoming alpha value and a reference alpha value. The #CoglMaterialAlphaFunc
     * determines how the comparison is done.
     */
    export namespace MaterialAlphaFunc {
        export const $gtype: GObject.GType<MaterialAlphaFunc>;
    }

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

    /**
     * Texture filtering is used whenever the current pixel maps either to more
     * than one texture element (texel) or less than one. These filter enums
     * correspond to different strategies used to come up with a pixel color, by
     * possibly referring to multiple neighbouring texels and taking a weighted
     * average or simply using the nearest texel.
     */
    export namespace MaterialFilter {
        export const $gtype: GObject.GType<MaterialFilter>;
    }

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

    /**
     * Available types of layers for a #CoglMaterial. This enumeration
     * might be expanded in later versions.
     */
    export namespace MaterialLayerType {
        export const $gtype: GObject.GType<MaterialLayerType>;
    }

    enum MaterialLayerType {
        /**
         * The layer represents a
         *   <link linkend="cogl-Textures">texture</link>
         */
        MATERIAL_LAYER_TYPE_TEXTURE,
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
    export namespace MaterialWrapMode {
        export const $gtype: GObject.GType<MaterialWrapMode>;
    }

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
     * Alpha testing happens before blending primitives with the framebuffer and
     * gives an opportunity to discard fragments based on a comparison with the
     * incoming alpha value and a reference alpha value. The #CoglPipelineAlphaFunc
     * determines how the comparison is done.
     */

    /**
     * Alpha testing happens before blending primitives with the framebuffer and
     * gives an opportunity to discard fragments based on a comparison with the
     * incoming alpha value and a reference alpha value. The #CoglPipelineAlphaFunc
     * determines how the comparison is done.
     */
    export namespace PipelineAlphaFunc {
        export const $gtype: GObject.GType<PipelineAlphaFunc>;
    }

    enum PipelineAlphaFunc {
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
     * Specifies which faces should be culled. This can be set on a
     * pipeline using cogl_pipeline_set_cull_face_mode().
     */

    /**
     * Specifies which faces should be culled. This can be set on a
     * pipeline using cogl_pipeline_set_cull_face_mode().
     */
    export namespace PipelineCullFaceMode {
        export const $gtype: GObject.GType<PipelineCullFaceMode>;
    }

    enum PipelineCullFaceMode {
        /**
         * Neither face will be
         *  culled. This is the default.
         */
        NONE,
        /**
         * Front faces will be culled.
         */
        FRONT,
        /**
         * Back faces will be culled.
         */
        BACK,
        /**
         * All faces will be culled.
         */
        BOTH,
    }
    /**
     * Texture filtering is used whenever the current pixel maps either to more
     * than one texture element (texel) or less than one. These filter enums
     * correspond to different strategies used to come up with a pixel color, by
     * possibly referring to multiple neighbouring texels and taking a weighted
     * average or simply using the nearest texel.
     */

    /**
     * Texture filtering is used whenever the current pixel maps either to more
     * than one texture element (texel) or less than one. These filter enums
     * correspond to different strategies used to come up with a pixel color, by
     * possibly referring to multiple neighbouring texels and taking a weighted
     * average or simply using the nearest texel.
     */
    export namespace PipelineFilter {
        export const $gtype: GObject.GType<PipelineFilter>;
    }

    enum PipelineFilter {
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
         *   %COGL_PIPELINE_FILTER_NEAREST criterion
         */
        NEAREST_MIPMAP_NEAREST,
        /**
         * Select the mimap level whose
         *   texel size most closely matches the current pixel, and use the
         *   %COGL_PIPELINE_FILTER_LINEAR criterion
         */
        LINEAR_MIPMAP_NEAREST,
        /**
         * Select the two mimap levels
         *   whose texel size most closely matches the current pixel, use
         *   the %COGL_PIPELINE_FILTER_NEAREST criterion on each one and take
         *   their weighted average
         */
        NEAREST_MIPMAP_LINEAR,
        /**
         * Select the two mimap levels
         *   whose texel size most closely matches the current pixel, use
         *   the %COGL_PIPELINE_FILTER_LINEAR criterion on each one and take
         *   their weighted average
         */
        LINEAR_MIPMAP_LINEAR,
    }
    /**
     * The wrap mode specifies what happens when texture coordinates
     * outside the range 0→1 are used. Note that if the filter mode is
     * anything but %COGL_PIPELINE_FILTER_NEAREST then texels outside the
     * range 0→1 might be used even when the coordinate is exactly 0 or 1
     * because OpenGL will try to sample neighbouring pixels. For example
     * if you are trying to render the full texture then you may get
     * artifacts around the edges when the pixels from the other side are
     * merged in if the wrap mode is set to repeat.
     */

    /**
     * The wrap mode specifies what happens when texture coordinates
     * outside the range 0→1 are used. Note that if the filter mode is
     * anything but %COGL_PIPELINE_FILTER_NEAREST then texels outside the
     * range 0→1 might be used even when the coordinate is exactly 0 or 1
     * because OpenGL will try to sample neighbouring pixels. For example
     * if you are trying to render the full texture then you may get
     * artifacts around the edges when the pixels from the other side are
     * merged in if the wrap mode is set to repeat.
     */
    export namespace PipelineWrapMode {
        export const $gtype: GObject.GType<PipelineWrapMode>;
    }

    enum PipelineWrapMode {
        /**
         * The texture will be repeated. This
         *   is useful for example to draw a tiled background.
         */
        REPEAT,
        MIRRORED_REPEAT,
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

    export namespace RendererError {
        export const $gtype: GObject.GType<RendererError>;
    }

    enum RendererError {
        XLIB_DISPLAY_OPEN,
        BAD_CONSTRAINT,
    }
    /**
     * Types of shaders
     */

    /**
     * Types of shaders
     */
    export namespace ShaderType {
        export const $gtype: GObject.GType<ShaderType>;
    }

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

    /**
     * Represents how draw should affect the two buffers
     * of a stereo framebuffer. See cogl_framebuffer_set_stereo_mode().
     */
    export namespace StereoMode {
        export const $gtype: GObject.GType<StereoMode>;
    }

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
    export namespace SystemError {
        export const $gtype: GObject.GType<SystemError>;
    }

    enum SystemError {
        /**
         * You tried to use a feature or
         *    configuration not currently available.
         */
        UNSUPPORTED,
        /**
         * You tried to allocate a resource
         *    such as a texture and there wasn't enough memory.
         */
        NO_MEMORY,
    }
    /**
     * See cogl_texture_set_components().
     */

    /**
     * See cogl_texture_set_components().
     */
    export namespace TextureComponents {
        export const $gtype: GObject.GType<TextureComponents>;
    }

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

    /**
     * Error codes that can be thrown when allocating textures.
     */
    export namespace TextureError {
        export const $gtype: GObject.GType<TextureError>;
    }

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

    /**
     * Constants representing the underlying hardware texture type of a
     * #CoglTexture.
     */
    export namespace TextureType {
        export const $gtype: GObject.GType<TextureType>;
    }

    enum TextureType {
        /**
         * A #CoglTexture2D
         */
        '2D',
        /**
         * A #CoglTexture3D
         */
        '3D',
        /**
         * A #CoglTextureRectangle
         */
        RECTANGLE,
    }
    /**
     * Different ways of interpreting vertices when drawing.
     */

    /**
     * Different ways of interpreting vertices when drawing.
     */
    export namespace VerticesMode {
        export const $gtype: GObject.GType<VerticesMode>;
    }

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

    /**
     * Enum used to represent the two directions of rotation. This can be
     * used to set the front face for culling by calling
     * cogl_pipeline_set_front_face_winding().
     */
    export namespace Winding {
        export const $gtype: GObject.GType<Winding>;
    }

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

    export namespace WinsysFeature {
        export const $gtype: GObject.GType<WinsysFeature>;
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
    const AFIRST_BIT: number;
    const A_BIT: number;
    const BGR_BIT: number;
    const DEPTH_BIT: number;
    const PREMULT_BIT: number;
    const STENCIL_BIT: number;
    const TEXTURE_MAX_WASTE: number;
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
     *
     * ```
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
     *
     * ```
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
     *
     * ```
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
    function begin_gl(): void;
    function blend_string_error_quark(): number;
    /**
     * Check whether `name` occurs in list of extensions in `ext`.
     * @param name extension to check for
     * @param ext list of extensions
     * @returns %TRUE if the extension occurs in the list, %FALSE otherwise.
     */
    function check_extension(name: string, ext: string): boolean;
    /**
     * Clears all the auxiliary buffers identified in the `buffers` mask, and if
     * that includes the color buffer then the specified `color` is used.
     * @param color Background color to clear to
     * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
     */
    function clear(color: Color, buffers: number): void;
    function clutter_check_extension_CLUTTER(name: string, ext: string): boolean;
    function clutter_winsys_has_feature_CLUTTER(feature: WinsysFeature | null): boolean;
    /**
     * Compares two #CoglColor<!-- -->s and checks if they are the same.
     *
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
     * @param v1 a #CoglColor
     * @param v2 a #CoglColor
     * @returns %TRUE if the two colors are the same.
     */
    function color_equal(v1?: any | null, v2?: any | null): boolean;
    /**
     * Converts a color expressed in HLS (hue, luminance and saturation)
     * values into a #CoglColor.
     * @param hue hue value, in the 0 .. 360 range
     * @param saturation saturation value, in the 0 .. 1 range
     * @param luminance luminance value, in the 0 .. 1 range
     */
    function color_init_from_hsl(hue: number, saturation: number, luminance: number): Color;
    /**
     * Create a new cogl program object that can be used to replace parts of the GL
     * rendering pipeline with custom code.
     * @returns a new cogl program.
     */
    function create_program(): Handle;
    /**
     * Create a new shader handle, use cogl_shader_source() to set the
     * source code to be used on it.
     * @param shader_type COGL_SHADER_TYPE_VERTEX or COGL_SHADER_TYPE_FRAGMENT.
     * @returns a new shader handle.
     */
    function create_shader(shader_type: ShaderType | null): Handle;
    /**
     * Prints the contents of a #CoglMatrix to stdout.
     * @param matrix A #CoglMatrix
     */
    function debug_matrix_print(matrix: Matrix): void;
    /**
     * Invokes `func` once for each type of object that Cogl uses and
     * passes a count of the number of objects for that type. This is
     * intended to be used solely for debugging purposes to track down
     * issues with objects leaking.
     * @param func A callback function for each type
     */
    function debug_object_foreach_type(func: DebugObjectForeachTypeCallback): void;
    /**
     * Prints a list of all the object types that Cogl uses along with the
     * number of objects of that type that are currently in use. This is
     * intended to be used solely for debugging purposes to track down
     * issues with objects leaking.
     */
    function debug_object_print_instances(): void;
    /**
     * This function disables fogging, so primitives drawn afterwards will not be
     * blended with any previously set fog color.
     */
    function disable_fog(): void;
    /**
     * This is the counterpart to cogl_begin_gl() used to delimit blocks of drawing
     * code using raw OpenGL. Please refer to cogl_begin_gl() for full details.
     */
    function end_gl(): void;
    /**
     * Checks whether the given COGL features are available. Multiple
     * features can be checked for by or-ing them together with the '|'
     * operator. %TRUE is only returned if all of the requested features
     * are available.
     * @param features A bitmask of features to check for
     * @returns %TRUE if the features are available, %FALSE otherwise.
     */
    function features_available(features: FeatureFlags | null): boolean;
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
    function flush(): void;
    function framebuffer_error_quark(): number;
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
    function frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
    /**
     * Queries if backface culling has been enabled via
     * cogl_set_backface_culling_enabled()
     * @returns %TRUE if backface culling is enabled, and %FALSE otherwise
     */
    function get_backface_culling_enabled(): boolean;
    /**
     * Gets the number of bitplanes used for each of the color components
     * in the color buffer. Pass %NULL for any of the arguments if the
     * value is not required.
     */
    function get_bitmasks(): [number, number, number, number];
    /**
     * Queries if depth testing has been enabled via cogl_set_depth_test_enable()
     * @returns %TRUE if depth testing is enabled, and %FALSE otherwise
     */
    function get_depth_test_enabled(): boolean;
    /**
     * Gets the current #CoglFramebuffer as set using
     * cogl_push_framebuffer()
     * @returns The current #CoglFramebuffer
     */
    function get_draw_framebuffer(): Framebuffer;
    /**
     * Returns all of the features supported by COGL.
     * @returns A logical OR of all the supported COGL features.
     */
    function get_features(): FeatureFlags;
    /**
     * Stores the current model-view matrix in `matrix`.
     */
    function get_modelview_matrix(): Matrix;
    /**
     * Retrieves the #GOptionGroup used by Cogl to parse the command
     * line options. Clutter uses this to handle the Cogl command line
     * options during its initialization process.
     * @returns a #GOptionGroup
     */
    function get_option_group(): GLib.OptionGroup;
    /**
     * Stores the current projection matrix in `matrix`.
     */
    function get_projection_matrix(): Matrix;
    /**
     * Returns the current source material as previously set using
     * cogl_set_source().
     *
     * <note>You should typically consider the returned material immutable
     * and not try to change any of its properties unless you own a
     * reference to that material. At times you may be able to get a
     * reference to an internally managed materials and the result of
     * modifying such materials is undefined.</note>
     * @returns The current source material.
     */
    function get_source(): any | null;
    /**
     * Stores the current viewport in `v`. `v[`0] and `v[`1] get the x and y
     * position of the viewport and `v[`2] and `v[`3] get the width and
     * height.
     */
    function get_viewport(): number[];
    function gtype_matrix_get_type(): GObject.GType;
    function handle_get_type(): GObject.GType;
    /**
     * Increases the reference count of `handle` by 1
     * @param handle a #CoglHandle
     * @returns the handle, with its reference count increased
     */
    function handle_ref(handle: Handle): Handle;
    /**
     * Drecreases the reference count of `handle` by 1; if the reference
     * count reaches 0, the resources allocated by `handle` will be freed
     * @param handle a #CoglHandle
     */
    function handle_unref(handle: Handle): void;
    /**
     * Checks whether `object` is a #CoglBitmap
     * @param object a #CoglObject pointer
     * @returns %TRUE if the passed @object represents a bitmap,   and %FALSE otherwise
     */
    function is_bitmap(object?: any | null): boolean;
    /**
     * Gets whether the given object references a #CoglFramebuffer.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglFramebuffer   and %FALSE otherwise.
     */
    function is_framebuffer(object?: any | null): boolean;
    /**
     * Gets whether the given handle references an existing material object.
     * @param handle A CoglHandle
     * @returns %TRUE if the handle references a #CoglMaterial,   %FALSE otherwise
     */
    function is_material(handle: Handle): boolean;
    /**
     * Determines whether the given #CoglObject references an offscreen
     * framebuffer object.
     * @param object A pointer to a #CoglObject
     * @returns %TRUE if @object is a #CoglOffscreen framebuffer,          %FALSE otherwise
     */
    function is_offscreen(object?: any | null): boolean;
    /**
     * Gets whether the given object references a #CoglOnscreen.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglOnscreen   and %FALSE otherwise.
     */
    function is_onscreen(object?: any | null): boolean;
    /**
     * Gets whether the given `object` references an existing pipeline object.
     * @param object A #CoglObject
     * @returns %TRUE if the @object references a #CoglPipeline,   %FALSE otherwise
     */
    function is_pipeline(object?: any | null): boolean;
    /**
     * Gets whether the given handle references an existing program object.
     * @param handle A CoglHandle
     * @returns %TRUE if the handle references a program,   %FALSE otherwise
     */
    function is_program(handle: Handle): boolean;
    /**
     * Gets whether the given handle references an existing shader object.
     * @param handle A CoglHandle
     * @returns %TRUE if the handle references a shader,   %FALSE otherwise
     */
    function is_shader(handle: Handle): boolean;
    /**
     * Gets whether the given object references a texture object.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the @object references a texture, and   %FALSE otherwise
     */
    function is_texture(object?: any | null): boolean;
    /**
     * Gets whether the given object references an existing #CoglTexture2D
     * object.
     * @param object A #CoglObject
     * @returns %TRUE if the object references a #CoglTexture2D,   %FALSE otherwise
     */
    function is_texture_2d(object?: any | null): boolean;
    /**
     * Gets whether the given object references a #CoglTexture2DSliced.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglTexture2DSliced   and %FALSE otherwise.
     */
    function is_texture_2d_sliced(object?: any | null): boolean;
    /**
     * Checks whether `handle` is a Vertex Buffer Object
     * @param handle a #CoglHandle for a vertex buffer object
     * @returns %TRUE if the handle is a VBO, and %FALSE   otherwise
     */
    function is_vertex_buffer(handle: Handle): boolean;
    /**
     * Checks whether `handle` is a handle to the indices for a vertex
     * buffer object
     * @param handle a #CoglHandle
     * @returns %TRUE if the handle is indices, and %FALSE   otherwise
     */
    function is_vertex_buffer_indices(handle: Handle): boolean;
    /**
     * Increment the reference count for a #CoglMaterial.
     * @param material a #CoglMaterial object.
     * @returns the @material.
     */
    function material_ref(material: Handle): Handle;
    /**
     * Decrement the reference count for a #CoglMaterial.
     * @param material a #CoglMaterial object.
     */
    function material_unref(material: Handle): void;
    /**
     * Compares two matrices to see if they represent the same
     * transformation. Although internally the matrices may have different
     * annotations associated with them and may potentially have a cached
     * inverse matrix these are not considered in the comparison.
     * @param v1 A 4x4 transformation matrix
     * @param v2 A 4x4 transformation matrix
     */
    function matrix_equal(v1?: any | null, v2?: any | null): boolean;
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
    function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
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
    function perspective(fovy: number, aspect: number, z_near: number, z_far: number): void;
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
    function polygon(vertices: TextureVertex, n_vertices: number, use_color: boolean): void;
    /**
     * Restores the current model-view matrix from the matrix stack.
     */
    function pop_matrix(): void;
    /**
     * Removes the material at the top of the source stack. The material
     * at the top of this stack defines the GPU state used to process
     * later primitives as defined by cogl_set_source().
     */
    function pop_source(): void;
    /**
     * Attaches a shader to a program object. A program can have multiple
     * vertex or fragment shaders but only one of them may provide a
     * main() function. It is allowed to use a program with only a vertex
     * shader or only a fragment shader.
     * @param program_handle a #CoglHandle for a shdaer program.
     * @param shader_handle a #CoglHandle for a vertex of fragment shader.
     */
    function program_attach_shader(program_handle: Handle, shader_handle: Handle): void;
    /**
     * Retrieve the location (offset) of a uniform variable in a shader program,
     * a uniform is a variable that is constant for all vertices/fragments for a
     * shader object and is possible to modify as an external parameter.
     * @param handle a #CoglHandle for a shader program.
     * @param uniform_name the name of a uniform.
     * @returns the offset of a uniform in a specified program.   This uniform can be set using cogl_program_uniform_1f() when the   program is in use.
     */
    function program_get_uniform_location(handle: Handle, uniform_name: string): number;
    /**
     * Links a program making it ready for use. Note that calling this
     * function is optional. If it is not called the program will
     * automatically be linked the first time it is used.
     * @param handle a #CoglHandle for a shader program.
     */
    function program_link(handle: Handle): void;
    /**
     * Add an extra reference to a program.
     * @param handle A #CoglHandle to a program.
     * @returns @handle
     */
    function program_ref(handle: Handle): Handle;
    /**
     * Changes the value of a floating point uniform for the given linked
     * `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param value the new value of the uniform.
     */
    function program_set_uniform_1f(program: Handle, uniform_location: number, value: number): void;
    /**
     * Changes the value of an integer uniform for the given linked
     * `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param value the new value of the uniform.
     */
    function program_set_uniform_1i(program: Handle, uniform_location: number, value: number): void;
    /**
     * Changes the value of a float vector uniform, or uniform array for
     * the given linked `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
     * @param value the new value of the uniform[s].
     */
    function program_set_uniform_float(
        program: Handle,
        uniform_location: number,
        n_components: number,
        value: number[],
    ): void;
    /**
     * Changes the value of a int vector uniform, or uniform array for
     * the given linked `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
     * @param value the new value of the uniform[s].
     */
    function program_set_uniform_int(
        program: Handle,
        uniform_location: number,
        n_components: number,
        value: number[],
    ): void;
    /**
     * Changes the value of a matrix uniform, or uniform array in the
     * given linked `program`.
     * @param program A #CoglHandle for a linked program
     * @param uniform_location the uniform location retrieved from    cogl_program_get_uniform_location().
     * @param dimensions The dimensions of the matrix. So for for example pass    2 for a 2x2 matrix or 3 for 3x3.
     * @param transpose Whether to transpose the matrix when setting the uniform.
     * @param value the new value of the uniform.
     */
    function program_set_uniform_matrix(
        program: Handle,
        uniform_location: number,
        dimensions: number,
        transpose: boolean,
        value: number[],
    ): void;
    /**
     * Changes the value of a floating point uniform in the currently
     * used (see cogl_program_use()) shader program.
     * @param uniform_no the uniform to set.
     * @param value the new value of the uniform.
     */
    function program_uniform_1f(uniform_no: number, value: number): void;
    /**
     * Changes the value of an integer uniform in the currently
     * used (see cogl_program_use()) shader program.
     * @param uniform_no the uniform to set.
     * @param value the new value of the uniform.
     */
    function program_uniform_1i(uniform_no: number, value: number): void;
    /**
     * Changes the value of a float vector uniform, or uniform array in the
     * currently used (see cogl_program_use()) shader program.
     * @param uniform_no the uniform to set.
     * @param size Size of float vector.
     * @param value the new value of the uniform.
     */
    function program_uniform_float(uniform_no: number, size: number, value: number[]): void;
    /**
     * Changes the value of a int vector uniform, or uniform array in the
     * currently used (see cogl_program_use()) shader program.
     * @param uniform_no the uniform to set.
     * @param size Size of int vector.
     * @param value the new value of the uniform.
     */
    function program_uniform_int(uniform_no: number, size: number, value: number[]): void;
    /**
     * Changes the value of a matrix uniform, or uniform array in the
     * currently used (see cogl_program_use()) shader program. The `size`
     * parameter is used to determine the square size of the matrix.
     * @param uniform_no the uniform to set.
     * @param size Size of matrix.
     * @param transpose Whether to transpose the matrix when setting the uniform.
     * @param value the new value of the uniform.
     */
    function program_uniform_matrix(uniform_no: number, size: number, transpose: boolean, value: number[]): void;
    /**
     * Removes a reference to a program. If it was the last reference the
     * program object will be destroyed.
     * @param handle A #CoglHandle to a program.
     */
    function program_unref(handle: Handle): void;
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
    function program_use(handle: Handle): void;
    /**
     * Stores the current model-view matrix on the matrix stack. The matrix
     * can later be restored with cogl_pop_matrix().
     */
    function push_matrix(): void;
    /**
     * Pushes the given `material` to the top of the source stack. The
     * material at the top of this stack defines the GPU state used to
     * process later primitives as defined by cogl_set_source().
     * @param material A #CoglMaterial
     */
    function push_source(material?: any | null): void;
    /**
     * Fills a rectangle at the given coordinates with the current source material
     * @param x_1 X coordinate of the top-left corner
     * @param y_1 Y coordinate of the top-left corner
     * @param x_2 X coordinate of the bottom-right corner
     * @param y_2 Y coordinate of the bottom-right corner
     */
    function rectangle(x_1: number, y_1: number, x_2: number, y_2: number): void;
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
    function rectangle_with_multitexture_coords(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        tex_coords: number[],
        tex_coords_len: number,
    ): void;
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
    function rectangle_with_texture_coords(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        tx1: number,
        ty1: number,
        tx2: number,
        ty2: number,
    ): void;
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
    function rectangles(verts: number[], n_rects: number): void;
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
    function rectangles_with_texture_coords(verts: number[], n_rects: number): void;
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
    function rotate(angle: number, x: number, y: number, z: number): void;
    /**
     * Multiplies the current model-view matrix by one that scales the x,
     * y and z axes by the given values.
     * @param x Amount to scale along the x-axis
     * @param y Amount to scale along the y-axis
     * @param z Amount to scale along the z-axis
     */
    function scale(x: number, y: number, z: number): void;
    /**
     * Sets whether textures positioned so that their backface is showing
     * should be hidden. This can be used to efficiently draw two-sided
     * textures or fully closed cubes without enabling depth testing. This
     * only affects calls to the cogl_rectangle* family of functions and
     * cogl_vertex_buffer_draw*. Backface culling is disabled by default.
     * @param setting %TRUE to enable backface culling or %FALSE to disable.
     */
    function set_backface_culling_enabled(setting: boolean): void;
    /**
     * Sets whether depth testing is enabled. If it is disabled then the
     * order that actors are layered on the screen depends solely on the
     * order specified using clutter_actor_raise() and
     * clutter_actor_lower(), otherwise it will also take into account the
     * actor's depth. Depth testing is disabled by default.
     * @param setting %TRUE to enable depth testing or %FALSE to disable.
     */
    function set_depth_test_enabled(setting: boolean): void;
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
    function set_fog(fog_color: Color, mode: FogMode | null, density: number, z_near: number, z_far: number): void;
    /**
     * Loads `matrix` as the new model-view matrix.
     * @param matrix the new model-view matrix
     */
    function set_modelview_matrix(matrix: Matrix): void;
    /**
     * Loads matrix as the new projection matrix.
     * @param matrix the new projection matrix
     */
    function set_projection_matrix(matrix: Matrix): void;
    /**
     * This function changes the material at the top of the source stack.
     * The material at the top of this stack defines the GPU state used to
     * process subsequent primitives, such as rectangles drawn with
     * cogl_rectangle() or vertices drawn using cogl_vertex_buffer_draw().
     * @param material A #CoglMaterial
     */
    function set_source(material?: any | null): void;
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
    function set_source_color(color: Color): void;
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
    function set_source_color4f(red: number, green: number, blue: number, alpha: number): void;
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
    function set_source_color4ub(red: number, green: number, blue: number, alpha: number): void;
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
    function set_source_texture(texture: Texture): void;
    /**
     * Replaces the current viewport with the given values.
     * @param x X offset of the viewport
     * @param y Y offset of the viewport
     * @param width Width of the viewport
     * @param height Height of the viewport
     */
    function set_viewport(x: number, y: number, width: number, height: number): void;
    /**
     * Compiles the shader, no return value, but the shader is now ready
     * for linking into a program. Note that calling this function is
     * optional. If it is not called then the shader will be automatically
     * compiled when it is linked.
     * @param handle #CoglHandle for a shader.
     */
    function shader_compile(handle: Handle): void;
    /**
     * Retrieves the information log for a coglobject, can be used in conjunction
     * with cogl_shader_get_parameteriv() to retrieve the compiler warnings/error
     * messages that caused a shader to not compile correctly, mainly useful for
     * debugging purposes.
     * @param handle #CoglHandle for a shader.
     * @returns a newly allocated string containing the info log. Use   g_free() to free it
     */
    function shader_get_info_log(handle: Handle): string;
    /**
     * Retrieves the type of a shader #CoglHandle
     * @param handle #CoglHandle for a shader.
     * @returns %COGL_SHADER_TYPE_VERTEX if the shader is a vertex processor          or %COGL_SHADER_TYPE_FRAGMENT if the shader is a frament processor
     */
    function shader_get_type(handle: Handle): ShaderType;
    /**
     * Retrieves whether a shader #CoglHandle has been compiled
     * @param handle #CoglHandle for a shader.
     * @returns %TRUE if the shader object has sucessfully be compiled
     */
    function shader_is_compiled(handle: Handle): boolean;
    /**
     * Add an extra reference to a shader.
     * @param handle A #CoglHandle to a shader.
     * @returns @handle
     */
    function shader_ref(handle: Handle): Handle;
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
    function shader_source(shader: Handle, source: string): void;
    /**
     * Removes a reference to a shader. If it was the last reference the
     * shader object will be destroyed.
     * @param handle A #CoglHandle to a shader.
     */
    function shader_unref(handle: Handle): void;
    function texture_error_quark(): number;
    /**
     * Creates a #CoglTexture from a #CoglBitmap.
     * @param bitmap A #CoglBitmap pointer
     * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
     * @param internal_format the #CoglPixelFormat to use for the GPU storage of the texture
     * @returns A newly created #CoglTexture or               %NULL on failure
     */
    function texture_new_from_bitmap(
        bitmap: Bitmap,
        flags: TextureFlags | null,
        internal_format: PixelFormat | null,
    ): Texture;
    /**
     * Creates a new #CoglTexture based on data residing in memory.
     * @param width width of texture in pixels
     * @param height height of texture in pixels
     * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
     * @param format the #CoglPixelFormat the buffer is stored in in RAM
     * @param internal_format the #CoglPixelFormat that will be used for storing    the buffer on the GPU. If COGL_PIXEL_FORMAT_ANY is given then a    premultiplied format similar to the format of the source data will    be used. The default blending equations of Cogl expect premultiplied    color data; the main use of passing a non-premultiplied format here    is if you have non-premultiplied source data and are going to adjust    the blend mode (see cogl_material_set_blend()) or use the data for    something other than straight blending.
     * @param rowstride the memory offset in bytes between the starts of    scanlines in @data
     * @param data pointer the memory region where the source buffer resides
     * @returns A newly created #CoglTexture or               %NULL on failure
     */
    function texture_new_from_data(
        width: number,
        height: number,
        flags: TextureFlags | null,
        format: PixelFormat | null,
        internal_format: PixelFormat | null,
        rowstride: number,
        data: number,
    ): Texture;
    /**
     * Creates a #CoglTexture from an image file.
     * @param filename the file to load
     * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
     * @param internal_format the #CoglPixelFormat to use for the GPU storage of the    texture. If %COGL_PIXEL_FORMAT_ANY is given then a premultiplied    format similar to the format of the source data will be used. The    default blending equations of Cogl expect premultiplied color data;    the main use of passing a non-premultiplied format here is if you    have non-premultiplied source data and are going to adjust the blend    mode (see cogl_material_set_blend()) or use the data for something    other than straight blending.
     * @returns A newly created #CoglTexture or               %NULL on failure
     */
    function texture_new_from_file(
        filename: string,
        flags: TextureFlags | null,
        internal_format: PixelFormat | null,
    ): Texture;
    /**
     * Creates a #CoglTexture based on an existing OpenGL texture; the
     * width, height and format are passed along since it is not always
     * possible to query these from OpenGL.
     *
     * The waste arguments allow you to create a Cogl texture that maps to
     * a region smaller than the real OpenGL texture. For instance if your
     * hardware only supports power-of-two textures you may load a
     * non-power-of-two image into a larger power-of-two texture and use
     * the waste arguments to tell Cogl which region should be mapped to
     * the texture coordinate range [0:1].
     * @param gl_handle opengl handle of foreign texture.
     * @param gl_target opengl target type of foreign texture
     * @param width width of foreign texture
     * @param height height of foreign texture.
     * @param x_pot_waste horizontal waste on the right hand edge of the texture.
     * @param y_pot_waste vertical waste on the bottom edge of the texture.
     * @param format format of the foreign texture.
     * @returns A newly created #CoglTexture or               %NULL on failure
     */
    function texture_new_from_foreign(
        gl_handle: number,
        gl_target: number,
        width: number,
        height: number,
        x_pot_waste: number,
        y_pot_waste: number,
        format: PixelFormat | null,
    ): Texture;
    /**
     * Creates a new #CoglTexture with the specified dimensions and pixel format.
     * @param width width of texture in pixels.
     * @param height height of texture in pixels.
     * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
     * @param internal_format the #CoglPixelFormat to use for the GPU storage of the    texture.
     * @returns A newly created #CoglTexture or %NULL on failure
     */
    function texture_new_with_size(
        width: number,
        height: number,
        flags: TextureFlags | null,
        internal_format: PixelFormat | null,
    ): Texture;
    /**
     * Multiplies the current model-view matrix by the given matrix.
     * @param matrix the matrix to multiply with the current model-view
     */
    function transform(matrix: Matrix): void;
    /**
     * Multiplies the current model-view matrix by one that translates the
     * model along all three axes according to the given values.
     * @param x Distance to translate along the x-axis
     * @param y Distance to translate along the y-axis
     * @param z Distance to translate along the z-axis
     */
    function translate(x: number, y: number, z: number): void;
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
    function vertex_buffer_add(
        handle: Handle,
        attribute_name: string,
        n_components: number,
        type: AttributeType | null,
        normalized: boolean,
        stride: number,
        pointer?: any | null,
    ): void;
    /**
     * Deletes an attribute from a buffer. You will need to call
     * cogl_vertex_buffer_submit() or issue a draw call to commit this
     * change to the GPU.
     * @param handle A vertex buffer handle
     * @param attribute_name The name of a previously added attribute
     */
    function vertex_buffer_delete(handle: Handle, attribute_name: string): void;
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
    function vertex_buffer_disable(handle: Handle, attribute_name: string): void;
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
    function vertex_buffer_draw(handle: Handle, mode: VerticesMode | null, first: number, count: number): void;
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
    function vertex_buffer_draw_elements(
        handle: Handle,
        mode: VerticesMode | null,
        indices: Handle,
        min_index: number,
        max_index: number,
        indices_offset: number,
        count: number,
    ): void;
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
    function vertex_buffer_enable(handle: Handle, attribute_name: string): void;
    /**
     * Retrieves the number of vertices that `handle` represents
     * @param handle A vertex buffer handle
     * @returns the number of vertices
     */
    function vertex_buffer_get_n_vertices(handle: Handle): number;
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
     * @returns A %CoglHandle containing the indices. The handled is owned by Cogl and should not be modified or unref'd.
     */
    function vertex_buffer_indices_get_for_quads(n_indices: number): Handle;
    /**
     * Queries back the data type used for the given indices
     * @param indices An indices handle
     * @returns The CoglIndicesType used
     */
    function vertex_buffer_indices_get_type(indices: Handle): IndicesType;
    /**
     * Creates a new vertex buffer that you can use to add attributes.
     * @param n_vertices The number of vertices that your attributes will correspond to.
     * @returns a new #CoglHandle
     */
    function vertex_buffer_new(n_vertices: number): Handle;
    /**
     * Increment the reference count for a vertex buffer
     * @param handle a @CoglHandle.
     * @returns the @handle.
     */
    function vertex_buffer_ref(handle: Handle): Handle;
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
    function vertex_buffer_submit(handle: Handle): void;
    /**
     * Decrement the reference count for a vertex buffer
     * @param handle a @CoglHandle.
     */
    function vertex_buffer_unref(handle: Handle): void;
    /**
     * Replace the current viewport with the given values.
     * @param width Width of the viewport
     * @param height Height of the viewport
     */
    function viewport(width: number, height: number): void;
    function x11_onscreen_get_visual_xid(onscreen: Onscreen): number;
    /**
     * Assuming you know the given `onscreen` framebuffer is based on an x11 window
     * this queries the XID of that window. If
     * cogl_x11_onscreen_set_foreign_window_xid() was previously called then it
     * will return that same XID otherwise it will be the XID of a window Cogl
     * created internally. If the window has not been allocated yet and a foreign
     * xid has not been set then it's undefined what value will be returned.
     *
     * It's undefined what this function does if called when not using an x11 based
     * renderer.
     * @param onscreen A #CoglOnscreen framebuffer
     */
    function x11_onscreen_get_window_xid(onscreen: Onscreen): number;
    /**
     * Ideally we would recommend that you let Cogl be responsible for
     * creating any X window required to back an onscreen framebuffer but
     * if you really need to target a window created manually this
     * function can be called before `onscreen` has been allocated to set a
     * foreign XID for your existing X window.
     *
     * Since Cogl needs, for example, to track changes to the size of an X
     * window it requires that certain events be selected for via the core
     * X protocol. This requirement may also be changed asynchronously so
     * you must pass in an `update` callback to inform you of Cogl's
     * required event mask.
     *
     * For example if you are using Xlib you could use this API roughly
     * as follows:
     * [{
     * static void
     * my_update_cogl_x11_event_mask (CoglOnscreen *onscreen,
     *                                uint32_t event_mask,
     *                                void *user_data)
     * {
     *   XSetWindowAttributes attrs;
     *   MyData *data = user_data;
     *   attrs.event_mask = event_mask | data->my_event_mask;
     *   XChangeWindowAttributes (data->xdpy,
     *                            data->xwin,
     *                            CWEventMask,
     *                            &attrs);
     * }
     *
     * {
     *   *snip*
     *   cogl_x11_onscreen_set_foreign_window_xid (onscreen,
     *                                             data->xwin,
     *                                             my_update_cogl_x11_event_mask,
     *                                             data);
     *   *snip*
     * }
     * }]
     * @param onscreen The unallocated framebuffer to associated with an X            window.
     * @param xid The XID of an existing X window
     * @param update A callback that notifies of updates to what Cogl          requires to be in the core X protocol event mask.
     */
    function x11_onscreen_set_foreign_window_xid(
        onscreen: Onscreen,
        xid: number,
        update: OnscreenX11MaskCallback,
    ): void;
    interface DebugObjectForeachTypeCallback {
        (info: DebugObjectTypeInfo): void;
    }
    interface MaterialLayerCallback {
        (material: Material, layer_index: number): boolean;
    }
    interface OnscreenDirtyCallback {
        (onscreen: Onscreen, info: OnscreenDirtyInfo): void;
    }
    interface OnscreenResizeCallback {
        (onscreen: Onscreen, width: number, height: number): void;
    }
    interface OnscreenX11MaskCallback {
        (onscreen: Onscreen, event_mask: number): void;
    }
    interface PipelineLayerCallback {
        (pipeline: Pipeline, layer_index: number): boolean;
    }
    interface SwapBuffersNotify {
        (framebuffer: Framebuffer): void;
    }
    interface Texture2DEGLImageExternalAlloc {
        (tex_2d: Texture2D): boolean;
    }
    /**
     * Types of auxiliary buffers
     */

    /**
     * Types of auxiliary buffers
     */
    export namespace BufferBit {
        export const $gtype: GObject.GType<BufferBit>;
    }

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

    /**
     * Target flags for FBOs.
     */
    export namespace BufferTarget {
        export const $gtype: GObject.GType<BufferTarget>;
    }

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

    /**
     * Defines a bit mask of color channels. This can be used with
     * cogl_pipeline_set_color_mask() for example to define which color
     * channels should be written to the current framebuffer when
     * drawing something.
     */
    export namespace ColorMask {
        export const $gtype: GObject.GType<ColorMask>;
    }

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

    /**
     * Flags for the supported features.
     */
    export namespace FeatureFlags {
        export const $gtype: GObject.GType<FeatureFlags>;
    }

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
    export namespace PixelFormat {
        export const $gtype: GObject.GType<PixelFormat>;
    }

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
    /**
     * Flags for cogl_framebuffer_read_pixels_into_bitmap()
     */

    /**
     * Flags for cogl_framebuffer_read_pixels_into_bitmap()
     */
    export namespace ReadPixelsFlags {
        export const $gtype: GObject.GType<ReadPixelsFlags>;
    }

    enum ReadPixelsFlags {
        /**
         * Read from the color buffer
         */
        READ_PIXELS_COLOR_BUFFER,
    }
    /**
     * Flags to pass to the cogl_texture_new_* family of functions.
     */

    /**
     * Flags to pass to the cogl_texture_new_* family of functions.
     */
    export namespace TextureFlags {
        export const $gtype: GObject.GType<TextureFlags>;
    }

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
    namespace Bitmap {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Bitmap extends Object {
        static $gtype: GObject.GType<Bitmap>;

        // Constructors

        _init(...args: any[]): void;

        static new_from_file(filename: string): Bitmap;

        // Signals

        connect<K extends keyof Bitmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bitmap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bitmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Bitmap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bitmap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Bitmap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): number;
        /**
         * Parses an image file enough to extract the width and height
         * of the bitmap.
         * @param filename the file to check
         */
        static get_size_from_file(filename: string): [boolean, number, number];

        // Methods

        get_format(): PixelFormat;
        get_height(): number;
        get_rowstride(): number;
        get_width(): number;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    abstract class Object {
        static $gtype: GObject.GType<Object>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Offscreen {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Offscreen extends Object implements Framebuffer {
        static $gtype: GObject.GType<Offscreen>;

        // Constructors

        _init(...args: any[]): void;

        static new_to_texture(texture: Texture): Offscreen;

        static new_with_texture(texture: Texture): Offscreen;

        // Signals

        connect<K extends keyof Offscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Offscreen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Offscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Offscreen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Offscreen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Offscreen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Increments the reference count on the `offscreen` framebuffer.
         * @param offscreen A pointer to a #CoglOffscreen framebuffer
         */
        static ref(offscreen?: any | null): any | null;
        /**
         * Decreases the reference count for the `offscreen` buffer and frees it when
         * the count reaches 0.
         * @param offscreen A pointer to a #CoglOffscreen framebuffer
         */
        static unref(offscreen?: any | null): void;

        // Inherited methods
        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * <note>Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.</note>
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        allocate(): boolean;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param color The color to clear the color buffer too if specified in         @buffers.
         */
        clear(buffers: number, color: Color): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param red The red component of color to clear the color buffer too if       specified in @buffers.
         * @param green The green component of color to clear the color buffer too if         specified in @buffers.
         * @param blue The blue component of color to clear the color buffer too if        specified in @buffers.
         * @param alpha The alpha component of color to clear the color buffer too if         specified in @buffers.
         */
        clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
        /**
         * Declares that the specified `buffers` no longer need to be referenced
         * by any further rendering commands. This can be an important
         * optimization to avoid subsequent frames of rendering depending on
         * the results of a previous frame.
         *
         * For example; some tile-based rendering GPUs are able to avoid allocating and
         * accessing system memory for the depth and stencil buffer so long as these
         * buffers are not required as input for subsequent frames and that can save a
         * significant amount of memory bandwidth used to save and restore their
         * contents to system memory between frames.
         *
         * It is currently considered an error to try and explicitly discard the color
         * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
         * already implicitly discard when you finish rendering to a #CoglOnscreen
         * framebuffer, and it's not meaningful to try and discard the color buffer of
         * a #CoglOffscreen framebuffer since they are single-buffered.
         * @param buffers A #CoglBufferBit mask of which ancillary buffers you want           to discard.
         */
        discard_buffers(buffers: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` with the given `pipeline`
         * state with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`). As a pipeline may
         * contain multiple texture layers this interface lets you supply
         * texture coordinates for each layer of the pipeline.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture for the first layer such as
         * #CoglTexture2DSliced textures which may internally be comprised of
         * multiple low-level textures.  This is unlike low-level drawing apis
         * such as cogl_primitive_draw() which only support low level texture
         * types that are directly supported by GPUs such as #CoglTexture2D.
         *
         * <note>This api can not currently handle multiple high-level meta
         * texture layers. The first layer may be a high level meta texture
         * such as #CoglTexture2DSliced but all other layers much be low
         * level textures such as #CoglTexture2D and additionally they
         * should be textures that can be sampled using normalized coordinates
         * (so not #CoglTextureRectangle textures).</note>
         *
         * The top left texture coordinate for layer 0 of any pipeline will be
         * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
         * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
         * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
         * tex_coords[7]) and so on...
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * which normally implies working with non-normalized texture
         * coordinates this api should still be passed normalized texture
         * coordinates.</note>
         *
         * The first pair of coordinates are for the first layer (with the
         * smallest layer index) and if you supply less texture coordinates
         * than there are layers in the current source material then default
         * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param tex_coords An array containing groups of   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture   coordinates; one for the top left texel, and one for the bottom right   texel. Each value should be between 0.0 and 1.0, where the coordinate   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the   bottom right.
         * @param tex_coords_len The length of the @tex_coords array. (For one layer   and one group of texture coordinates, this would be 4)
         */
        draw_multitextured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            tex_coords: number[],
            tex_coords_len: number,
        ): void;
        /**
         * Draws a rectangle to `framebuffer` with the given `pipeline` state
         * and with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * <note>If you want to describe a rectangle with a texture mapped on
         * it then you can use
         * cogl_framebuffer_draw_textured_rectangle().</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 X coordinate of the top-left corner
         * @param y_1 Y coordinate of the top-left corner
         * @param x_2 X coordinate of the bottom-right corner
         * @param y_2 Y coordinate of the bottom-right corner
         */
        draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_rectangle() does.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The positions for
         * the second rectangle are (coordinates[4], coordinates[5]) and
         * (coordinates[6], coordinates[7]) and so on...
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array of coordinates   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are   interpreted as two position coordinates; one for the top left of   the rectangle (x1, y1), and one for the bottom right of the   rectangle (x2, y2).
         * @param n_rectangles number of rectangles defined in @coordinates.
         */
        draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` using the given
         * `pipeline` state with the top left corner positioned at (`x_1`, `y_1`)
         * and the bottom right corner positioned at (`x_2`, `y_2`). The top
         * left corner will have texture coordinates of (`s_1`, `t_1`) and the
         * bottom right corner will have texture coordinates of (`s_2`, `t_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * <note>The given texture coordinates will only be used for the first
         * texture layer of the pipeline and if your pipeline has more than
         * one layer then all other layers will have default texture
         * coordinates of `s_1`=0.0 `t_1`=0.0 `s_2`=1.0 `t_2`=1.0 </note>
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in `s_1`=0, `t_1`=0, `s_2`=1, `t_2`=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * with one of your `pipeline` layers which normally implies working
         * with non-normalized texture coordinates this api should still be
         * passed normalized texture coordinates.</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param s_1 S texture coordinate of the top-left coorner
         * @param t_1 T texture coordinate of the top-left coorner
         * @param s_2 S texture coordinate of the bottom-right coorner
         * @param t_2 T texture coordinate of the bottom-right coorner
         */
        draw_textured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            s_1: number,
            t_1: number,
            s_2: number,
            t_2: number,
        ): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_textured_rectangle() does.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The top left
         * texture coordinate is (coordinates[4], coordinates[5]) and the
         * bottom right texture coordinate is (coordinates[6],
         * coordinates[7]). The coordinates for subsequent rectangles
         * are defined similarly by the subsequent coordinates.
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * which normally implies working with non-normalized texture
         * coordinates this api should still be passed normalized texture
         * coordinates.</note>
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array containing   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]   that have the same meaning as the arguments for   cogl_framebuffer_draw_textured_rectangle().
         * @param n_rectangles number of rectangles to @coordinates to draw
         */
        draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * This blocks the CPU until all pending rendering associated with the
         * specified framebuffer has completed. It's very rare that developers should
         * ever need this level of synchronization with the GPU and should never be
         * used unless you clearly understand why you need to explicitly force
         * synchronization.
         *
         * One example might be for benchmarking purposes to be sure timing
         * measurements reflect the time that the GPU is busy for not just the time it
         * takes to queue rendering commands.
         */
        finish(): void;
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
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Retrieves the number of alpha bits of `framebuffer`
         * @returns the number of bits
         */
        get_alpha_bits(): number;
        /**
         * Retrieves the number of blue bits of `framebuffer`
         * @returns the number of bits
         */
        get_blue_bits(): number;
        /**
         * Gets the current #CoglColorMask of which channels would be written to the
         * current framebuffer. Each bit set in the mask means that the
         * corresponding color would be written.
         * @returns A #CoglColorMask
         */
        get_color_mask(): ColorMask;
        /**
         * Retrieves the number of depth bits of `framebuffer`
         * @returns the number of bits
         */
        get_depth_bits(): number;
        /**
         * Retrieves the depth buffer of `framebuffer` as a #CoglTexture. You need to
         * call cogl_framebuffer_get_depth_texture(fb, TRUE); before using this
         * function.
         *
         * <note>Calling this function implicitely allocates the framebuffer.</note>
         * <note>The texture returned stays valid as long as the framebuffer stays
         * valid.</note>
         * @returns the depth texture
         */
        get_depth_texture(): Texture;
        /**
         * Queries whether texture based depth buffer has been enabled via
         * cogl_framebuffer_set_depth_texture_enabled().
         * @returns %TRUE if a depth texture has been enabled, else               %FALSE.
         */
        get_depth_texture_enabled(): boolean;
        /**
         * Queries whether depth buffer writing is enabled for `framebuffer`. This
         * can be controlled via cogl_framebuffer_set_depth_write_enabled().
         * @returns %TRUE if depth writing is enabled or %FALSE if not.
         */
        get_depth_write_enabled(): boolean;
        /**
         * Returns whether dithering has been requested for the given `framebuffer`.
         * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
         *
         * <note>This may return %TRUE even when the underlying `framebuffer`
         * display pipeline does not support dithering. This value only represents
         * the user's request for dithering.</note>
         * @returns %TRUE if dithering has been requested or %FALSE if not.
         */
        get_dither_enabled(): boolean;
        /**
         * Retrieves the number of green bits of `framebuffer`
         * @returns the number of bits
         */
        get_green_bits(): number;
        /**
         * Queries the current height of the given `framebuffer`.
         * @returns The height of @framebuffer.
         */
        get_height(): number;
        get_is_stereo(): boolean;
        /**
         * Stores the current model-view matrix in `matrix`.
         */
        get_modelview_matrix(): Matrix;
        /**
         * Stores the current projection matrix in `matrix`.
         */
        get_projection_matrix(): Matrix;
        /**
         * Retrieves the number of red bits of `framebuffer`
         * @returns the number of bits
         */
        get_red_bits(): number;
        /**
         * Gets the number of points that are sampled per-pixel when
         * rasterizing geometry. Usually by default this will return 0 which
         * means that single-sample not multisample rendering has been chosen.
         * When using a GPU supporting multisample rendering it's possible to
         * increase the number of samples per pixel using
         * cogl_framebuffer_set_samples_per_pixel().
         *
         * Calling cogl_framebuffer_get_samples_per_pixel() before the
         * framebuffer has been allocated will simply return the value set
         * using cogl_framebuffer_set_samples_per_pixel(). After the
         * framebuffer has been allocated the value will reflect the actual
         * number of samples that will be made by the GPU.
         * @returns The number of point samples made per pixel when          rasterizing geometry or 0 if single-sample rendering          has been chosen.
         */
        get_samples_per_pixel(): number;
        /**
         * Gets the current #CoglStereoMode, which defines which stereo buffers
         * should be drawn to. See cogl_framebuffer_set_stereo_mode().
         * @returns A #CoglStereoMode
         */
        get_stereo_mode(): StereoMode;
        /**
         * Queries the x, y, width and height components of the current viewport as set
         * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
         * framebuffer_width and framebuffer_height.  The values are written into the
         * given `viewport` array.
         */
        get_viewport4fv(): number[];
        /**
         * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the height of the framebuffer.
         * @returns The height of the viewport.
         */
        get_viewport_height(): number;
        /**
         * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the width of the framebuffer.
         * @returns The width of the viewport.
         */
        get_viewport_width(): number;
        /**
         * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The x coordinate of the viewport origin.
         */
        get_viewport_x(): number;
        /**
         * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The y coordinate of the viewport origin.
         */
        get_viewport_y(): number;
        /**
         * Queries the current width of the given `framebuffer`.
         * @returns The width of @framebuffer.
         */
        get_width(): number;
        /**
         * Resets the current model-view matrix to the identity matrix.
         */
        identity_matrix(): void;
        /**
         * Replaces the current projection matrix with an orthographic projection
         * matrix.
         * @param x_1 The x coordinate for the first vertical clipping plane
         * @param y_1 The y coordinate for the first horizontal clipping plane
         * @param x_2 The x coordinate for the second vertical clipping plane
         * @param y_2 The y coordinate for the second horizontal clipping plane
         * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         */
        orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * based on the provided values.
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
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Reverts the clipping region to the state before the last call to
         * cogl_framebuffer_push_scissor_clip(), cogl_framebuffer_push_rectangle_clip()
         * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
         */
        pop_clip(): void;
        /**
         * Restores the model-view matrix on the top of the matrix stack.
         */
        pop_matrix(): void;
        /**
         * Copies the current model-view matrix onto the matrix stack. The matrix
         * can later be restored with cogl_framebuffer_pop_matrix().
         */
        push_matrix(): void;
        /**
         * Specifies a modelview transformed rectangular clipping area for all
         * subsequent drawing operations. Any drawing commands that extend
         * outside the rectangle will be clipped so that only the portion
         * inside the rectangle will be displayed. The rectangle dimensions
         * are transformed by the current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x_1 x coordinate for top left corner of the clip rectangle
         * @param y_1 y coordinate for top left corner of the clip rectangle
         * @param x_2 x coordinate for bottom right corner of the clip rectangle
         * @param y_2 y coordinate for bottom right corner of the clip rectangle
         */
        push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Specifies a rectangular clipping area for all subsequent drawing
         * operations. Any drawing commands that extend outside the rectangle
         * will be clipped so that only the portion inside the rectangle will
         * be displayed. The rectangle dimensions are not transformed by the
         * current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x left edge of the clip rectangle in window coordinates
         * @param y top edge of the clip rectangle in window coordinates
         * @param width width of the clip rectangle
         * @param height height of the clip rectangle
         */
        push_scissor_clip(x: number, y: number, width: number, height: number): void;
        /**
         * This is a convenience wrapper around
         * cogl_framebuffer_read_pixels_into_bitmap() which allocates a
         * temporary #CoglBitmap to read pixel data directly into the given
         * buffer. The rowstride of the buffer is assumed to be the width of
         * the region times the bytes per pixel of the format. The source for
         * the data is always taken from the color buffer. If you want to use
         * any other rowstride or source, please use the
         * cogl_framebuffer_read_pixels_into_bitmap() function directly.
         *
         * The implementation of the function looks like this:
         *
         *
         * ```
         * bitmap = cogl_bitmap_new_for_data (context,
         *                                    width, height,
         *                                    format,
         *                                    /<!-- -->* rowstride *<!-- -->/
         *                                    bpp * width,
         *                                    pixels);
         * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
         *                                           x, y,
         *                                           COGL_READ_PIXELS_COLOR_BUFFER,
         *                                           bitmap);
         * cogl_object_unref (bitmap);
         * ```
         *
         * @param x The x position to read from
         * @param y The y position to read from
         * @param width The width of the region of rectangles to read
         * @param height The height of the region of rectangles to read
         * @param format The pixel format to store the data in
         * @param pixels The address of the buffer to store the data in
         * @returns %TRUE if the read succeeded or %FALSE otherwise.
         */
        read_pixels(
            x: number,
            y: number,
            width: number,
            height: number,
            format: PixelFormat | null,
            pixels: number,
        ): boolean;
        /**
         * This reads a rectangle of pixels from the given framebuffer where
         * position (0, 0) is the top left. The pixel at (x, y) is the first
         * read, and a rectangle of pixels with the same size as the bitmap is
         * read right and downwards from that point.
         *
         * Currently Cogl assumes that the framebuffer is in a premultiplied
         * format so if the format of `bitmap` is non-premultiplied it will
         * convert it. To read the pixel values without any conversion you
         * should either specify a format that doesn't use an alpha channel or
         * use one of the formats ending in PRE.
         * @param x The x position to read from
         * @param y The y position to read from
         * @param source Identifies which auxillary buffer you want to read          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
         * @param bitmap The bitmap to store the results in.
         * @returns %TRUE if the read succeeded or %FALSE otherwise. The  function is only likely to fail if the bitmap points to a pixel  buffer and it could not be mapped.
         */
        read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags | null, bitmap: Bitmap): boolean;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples_region()) to explicitly resolve
         * the point samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Since Cogl will automatically ensure samples are resolved if the
         * target color buffer is used as a source this API only needs to be
         * used if explicit control is desired - perhaps because you want to
         * ensure that the resolve is completed in advance to avoid later
         * having to wait for the resolve to complete.
         *
         * If you are performing incremental updates to a framebuffer you
         * should consider using cogl_framebuffer_resolve_samples_region()
         * instead to avoid resolving redundant pixels.
         */
        resolve_samples(): void;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples()) to explicitly resolve the point
         * samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Use of this API is recommended if incremental, small updates to
         * a framebuffer are being made because by default Cogl will
         * implicitly resolve all the point samples of the framebuffer which
         * can result in redundant work if only a small number of samples have
         * changed.
         *
         * Because some GPUs implicitly resolve point samples this function
         * only guarantees that at-least the region specified will be resolved
         * and if you have rendered to a larger region then it's possible that
         * other samples may be implicitly resolved.
         * @param x top-left x coordinate of region to resolve
         * @param y top-left y coordinate of region to resolve
         * @param width width of region to resolve
         * @param height height of region to resolve
         */
        resolve_samples_region(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates the
         * model around the axis-vector specified by `x,` `y` and `z`. The
         * rotation follows the right-hand thumb rule so for example rotating
         * by 10 degrees about the axis-vector (0, 0, 1) causes a small
         * counter-clockwise rotation.
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `euler`.
         * @param euler A #CoglEuler
         */
        rotate_euler(euler: Euler): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `quaternion`.
         * @param quaternion A #CoglQuaternion
         */
        rotate_quaternion(quaternion: Quaternion): void;
        /**
         * Multiplies the current model-view matrix by one that scales the x,
         * y and z axes by the given values.
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Defines a bit mask of which color channels should be written to the
         * given `framebuffer`. If a bit is set in `color_mask` that means that
         * color will be written.
         * @param color_mask A #CoglColorMask of which color channels to write to              the current framebuffer.
         */
        set_color_mask(color_mask: ColorMask | null): void;
        /**
         * If `enabled` is #TRUE, the depth buffer used when rendering to `framebuffer`
         * is available as a texture. You can retrieve the texture with
         * cogl_framebuffer_get_depth_texture().
         *
         * <note>It's possible that your GPU does not support depth textures. You
         * should check the %COGL_FEATURE_ID_DEPTH_TEXTURE feature before using this
         * function.</note>
         * <note>It's not valid to call this function after the framebuffer has been
         * allocated as the creation of the depth texture is done at allocation time.
         * </note>
         * @param enabled TRUE or FALSE
         */
        set_depth_texture_enabled(enabled: boolean): void;
        /**
         * Enables or disables depth buffer writing when rendering to `framebuffer`.
         * If depth writing is enabled for both the framebuffer and the rendering
         * pipeline, and the framebuffer has an associated depth buffer, depth
         * information will be written to this buffer during rendering.
         *
         * Depth buffer writing is enabled by default.
         * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
         */
        set_depth_write_enabled(depth_write_enabled: boolean): void;
        /**
         * Enables or disabled dithering if supported by the hardware.
         *
         * Dithering is a hardware dependent technique to increase the visible
         * color resolution beyond what the underlying hardware supports by playing
         * tricks with the colors placed into the framebuffer to give the illusion
         * of other colors. (For example this can be compared to half-toning used
         * by some news papers to show varying levels of grey even though their may
         * only be black and white are available).
         *
         * If the current display pipeline for `framebuffer` does not support dithering
         * then this has no affect.
         *
         * Dithering is enabled by default.
         * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
         */
        set_dither_enabled(dither_enabled: boolean): void;
        /**
         * Sets `matrix` as the new model-view matrix.
         * @param matrix the new model-view matrix
         */
        set_modelview_matrix(matrix: Matrix): void;
        /**
         * Sets `matrix` as the new projection matrix.
         * @param matrix the new projection matrix
         */
        set_projection_matrix(matrix: Matrix): void;
        /**
         * Requires that when rendering to `framebuffer` then `n` point samples
         * should be made per pixel which will all contribute to the final
         * resolved color for that pixel. The idea is that the hardware aims
         * to get quality similar to what you would get if you rendered
         * everything twice as big (for 4 samples per pixel) and then scaled
         * that image back down with filtering. It can effectively remove the
         * jagged edges of polygons and should be more efficient than if you
         * were to manually render at a higher resolution and downscale
         * because the hardware is often able to take some shortcuts. For
         * example the GPU may only calculate a single texture sample for all
         * points of a single pixel, and for tile based architectures all the
         * extra sample data (such as depth and stencil samples) may be
         * handled on-chip and so avoid increased demand on system memory
         * bandwidth.
         *
         * By default this value is usually set to 0 and that is referred to
         * as "single-sample" rendering. A value of 1 or greater is referred
         * to as "multisample" rendering.
         *
         * <note>There are some semantic differences between single-sample
         * rendering and multisampling with just 1 point sample such as it
         * being redundant to use the cogl_framebuffer_resolve_samples() and
         * cogl_framebuffer_resolve_samples_region() apis with single-sample
         * rendering.</note>
         *
         * <note>It's recommended that
         * cogl_framebuffer_resolve_samples_region() be explicitly used at the
         * end of rendering to a point sample buffer to minimize the number of
         * samples that get resolved. By default Cogl will implicitly resolve
         * all framebuffer samples but if only a small region of a
         * framebuffer has changed this can lead to redundant work being
         * done.</note>
         * @param samples_per_pixel The minimum number of samples per pixel
         */
        set_samples_per_pixel(samples_per_pixel: number): void;
        /**
         * Sets which stereo buffers should be drawn to. The default
         * is %COGL_STEREO_BOTH, which means that both the left and
         * right buffers will be affected by drawing. For this to have
         * an effect, the display system must support stereo drawables,
         * and the framebuffer must have been created with stereo
         * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
         * cogl_framebuffer_get_is_stereo().)
         * @param stereo_mode A #CoglStereoMode specifying which stereo buffers               should be drawn tow.
         */
        set_stereo_mode(stereo_mode: StereoMode | null): void;
        /**
         * Defines a scale and offset for everything rendered relative to the
         * top-left of the destination framebuffer.
         *
         * By default the viewport has an origin of (0,0) and width and height
         * that match the framebuffer's size. Assuming a default projection and
         * modelview matrix then you could translate the contents of a window
         * down and right by leaving the viewport size unchanged by moving the
         * offset to (10,10). The viewport coordinates are measured in pixels.
         * If you left the x and y origin as (0,0) you could scale the windows
         * contents down by specify and width and height that's half the real
         * size of the framebuffer.
         *
         * <note>Although the function takes floating point arguments, existing
         * drivers only allow the use of integer values. In the future floating
         * point values will be exposed via a checkable feature.</note>
         * @param x The top-left x coordinate of the viewport origin (only integers     supported currently)
         * @param y The top-left y coordinate of the viewport origin (only integers     supported currently)
         * @param width The width of the viewport (only integers supported currently)
         * @param height The height of the viewport (only integers supported currently)
         */
        set_viewport(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by the given matrix.
         * @param matrix the matrix to multiply with the current model-view
         */
        transform(matrix: Matrix): void;
        /**
         * Multiplies the current model-view matrix by one that translates the
         * model along all three axes according to the given values.
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }

    namespace Onscreen {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Onscreen extends Object implements Framebuffer {
        static $gtype: GObject.GType<Onscreen>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Onscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Onscreen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Onscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Onscreen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Onscreen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Onscreen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static clutter_backend_set_size_CLUTTER(width: number, height: number): void;

        // Methods

        /**
         * Installs a `callback` function that will be called whenever the
         * window system has lost the contents of a region of the onscreen
         * buffer and the application should redraw it to repair the buffer.
         * For example this may happen in a window system without a compositor
         * if a window that was previously covering up the onscreen window has
         * been moved causing a region of the onscreen to be exposed.
         *
         * The `callback` will be passed a #CoglOnscreenDirtyInfo struct which
         * decribes a rectangle containing the newly dirtied region. Note that
         * this may be called multiple times to describe a non-rectangular
         * region composed of multiple smaller rectangles.
         *
         * The dirty events are separate from %COGL_FRAME_EVENT_SYNC events so
         * the application should also listen for this event before rendering
         * the dirty region to ensure that the framebuffer is actually ready
         * for rendering.
         * @param callback A callback function to call for dirty events
         * @param destroy An optional callback to destroy @user_data when the           @callback is removed or @onscreen is freed.
         * @returns a #CoglOnscreenDirtyClosure pointer that can be used to               remove the callback and associated @user_data later.
         */
        add_dirty_callback(
            callback: OnscreenDirtyCallback,
            destroy?: UserDataDestroyCallback | null,
        ): OnscreenDirtyClosure;
        /**
         * Registers a `callback` with `onscreen` that will be called whenever
         * the `onscreen` framebuffer changes size.
         *
         * The `callback` can be removed using
         * cogl_onscreen_remove_resize_callback() passing the returned closure
         * pointer.
         *
         * <note>Since Cogl automatically updates the viewport of an `onscreen`
         * framebuffer that is resized, a resize callback can also be used to
         * track when the viewport has been changed automatically by Cogl in
         * case your application needs more specialized control over the
         * viewport.</note>
         *
         * <note>A resize callback will only ever be called while dispatching
         * Cogl events from the system mainloop; so for example during
         * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
         * occur while an application might have arbitrary locks held for
         * example.</note>
         * @param callback A #CoglOnscreenResizeCallback to call when            the @onscreen changes size.
         * @param destroy An optional callback to destroy @user_data           when the @callback is removed or @onscreen is freed.
         * @returns a #CoglOnscreenResizeClosure pointer that can be used to               remove the callback and associated @user_data later.
         */
        add_resize_callback(
            callback: OnscreenResizeCallback,
            destroy?: UserDataDestroyCallback | null,
        ): OnscreenResizeClosure;
        /**
         * Installs a `callback` function that should be called whenever a swap buffers
         * request (made using cogl_onscreen_swap_buffers()) for the given
         * `onscreen` completes.
         *
         * <note>Applications should check for the %COGL_FEATURE_ID_SWAP_BUFFERS_EVENT
         * feature before using this API. It's currently undefined when and if
         * registered callbacks will be called if this feature is not supported.</note>
         *
         * We recommend using this mechanism when available to manually throttle your
         * applications so your application will be able to avoid long blocks in the
         * driver caused by throttling when you request to swap buffers too quickly.
         * @param callback A callback function to call when a swap            has completed
         * @returns a unique identifier that can be used to remove to remove               the callback later.
         */
        add_swap_buffers_callback(callback: SwapBuffersNotify): number;
        /**
         * Gets the current age of the buffer contents.
         *
         * This function allows applications to query the age of the current
         * back buffer contents for a #CoglOnscreen as the number of frames
         * elapsed since the contents were most recently defined.
         *
         * These age values exposes enough information to applications about
         * how Cogl internally manages back buffers to allow applications to
         * re-use the contents of old frames and minimize how much must be
         * redrawn for the next frame.
         *
         * The back buffer contents can either be reported as invalid (has an
         * age of 0) or it may be reported to be the same contents as from n
         * frames prior to the current frame.
         *
         * The queried value remains valid until the next buffer swap.
         *
         * <note>One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.</note>
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * <note>If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.</note>
         *
         * <note>The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.</note>
         * @returns The age of the buffer contents or 0 when the buffer               contents are undefined.
         */
        get_buffer_age(): number;
        /**
         * Gets the value of the framebuffers frame counter. This is
         * a counter that increases by one each time
         * cogl_onscreen_swap_buffers() or cogl_onscreen_swap_region()
         * is called.
         * @returns the current frame counter value
         */
        get_frame_counter(): number;
        /**
         * Lets you query whether `onscreen` has been marked as resizable via
         * the cogl_onscreen_set_resizable() api.
         *
         * By default, if possible, a `onscreen` will be created by Cogl
         * as non resizable, but it is not guaranteed that this is always
         * possible for all window systems.
         *
         * <note>If cogl_onscreen_set_resizable(`onscreen,` %TRUE) has been
         * previously called then this function will return %TRUE, but it's
         * possible that the current windowing system being used does not
         * support window resizing (consider fullscreen windows on a phone or
         * a TV). This function is not aware of whether resizing is truly
         * meaningful with your window system, only whether the `onscreen` has
         * been marked as resizable.</note>
         * @returns Returns whether @onscreen has been marked as               resizable or not.
         */
        get_resizable(): boolean;
        /**
         * This requests to make `onscreen` invisible to the user.
         *
         * Actually the precise semantics of this function depend on the
         * window system currently in use, and if you don't have a
         * multi-windowining system this function may in-fact do nothing.
         *
         * This function does not implicitly allocate the given `onscreen`
         * framebuffer before hiding it.
         *
         * <note>Since Cogl doesn't explicitly track the visibility status of
         * onscreen framebuffers it wont try to avoid redundant window system
         * requests e.g. to show an already visible window. This also means
         * that it's acceptable to alternatively use native APIs to show and
         * hide windows without confusing Cogl.</note>
         */
        hide(): void;
        /**
         * Removes a callback and associated user data that were previously
         * registered using cogl_onscreen_add_dirty_callback().
         *
         * If a destroy callback was passed to
         * cogl_onscreen_add_dirty_callback() to destroy the user data then
         * this will also get called.
         * @param closure A #CoglOnscreenDirtyClosure returned from           cogl_onscreen_add_dirty_callback()
         */
        remove_dirty_callback(closure: OnscreenDirtyClosure): void;
        /**
         * Removes a callback and associated user data that were previously
         * registered using cogl_onscreen_add_frame_callback().
         *
         * If a destroy callback was passed to
         * cogl_onscreen_add_frame_callback() to destroy the user data then
         * this will get called.
         * @param closure A #CoglFrameClosure returned from           cogl_onscreen_add_frame_callback()
         */
        remove_frame_callback(closure: FrameClosure): void;
        /**
         * Removes a resize `callback` and `user_data` pair that were previously
         * associated with `onscreen` via cogl_onscreen_add_resize_callback().
         * @param closure An identifier returned from cogl_onscreen_add_resize_callback()
         */
        remove_resize_callback(closure: OnscreenResizeClosure): void;
        /**
         * Removes a callback that was previously registered
         * using cogl_onscreen_add_swap_buffers_callback().
         * @param id An identifier returned from cogl_onscreen_add_swap_buffers_callback()
         */
        remove_swap_buffers_callback(id: number): void;
        /**
         * Lets you request Cogl to mark an `onscreen` framebuffer as
         * resizable or not.
         *
         * By default, if possible, a `onscreen` will be created by Cogl
         * as non resizable, but it is not guaranteed that this is always
         * possible for all window systems.
         *
         * <note>Cogl does not know whether marking the `onscreen` framebuffer
         * is truly meaningful for your current window system (consider
         * applications being run fullscreen on a phone or TV) so this
         * function may not have any useful effect. If you are running on a
         * multi windowing system such as X11 or Win32 or OSX then Cogl will
         * request to the window system that users be allowed to resize the
         * `onscreen,` although it's still possible that some other window
         * management policy will block this possibility.</note>
         *
         * <note>Whenever an `onscreen` framebuffer is resized the viewport
         * will be automatically updated to match the new size of the
         * framebuffer with an origin of (0,0). If your application needs more
         * specialized control of the viewport it will need to register a
         * resize handler using cogl_onscreen_add_resize_callback() so that it
         * can track when the viewport has been changed automatically.</note>
         * @param resizable
         */
        set_resizable(resizable: boolean): void;
        /**
         * This requests to make `onscreen` visible to the user.
         *
         * Actually the precise semantics of this function depend on the
         * window system currently in use, and if you don't have a
         * multi-windowining system this function may in-fact do nothing.
         *
         * This function will implicitly allocate the given `onscreen`
         * framebuffer before showing it if it hasn't already been allocated.
         *
         * When using the Wayland winsys calling this will set the surface to
         * a toplevel type which will make it appear. If the application wants
         * to set a different type for the surface, it can avoid calling
         * cogl_onscreen_show() and set its own type directly with the Wayland
         * client API via cogl_wayland_onscreen_get_surface().
         *
         * <note>Since Cogl doesn't explicitly track the visibility status of
         * onscreen framebuffers it wont try to avoid redundant window system
         * requests e.g. to show an already visible window. This also means
         * that it's acceptable to alternatively use native APIs to show and
         * hide windows without confusing Cogl.</note>
         */
        show(): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for display.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         *
         * <note>It is highly recommended that applications use
         * cogl_onscreen_swap_buffers_with_damage() instead whenever possible
         * and also use the cogl_onscreen_get_buffer_age() api so they can
         * perform incremental updates to older buffers instead of having to
         * render a full buffer for every frame.</note>
         */
        swap_buffers(): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for
         * display and provides information to any system compositor about
         * what regions of the buffer have changed (damage) with respect to
         * the last swapped buffer.
         *
         * This function has the same semantics as
         * cogl_framebuffer_swap_buffers() except that it additionally allows
         * applications to pass a list of damaged rectangles which may be
         * passed on to a compositor so that it can minimize how much of the
         * screen is redrawn in response to this applications newly swapped
         * front buffer.
         *
         * For example if your application is only animating a small object in
         * the corner of the screen and everything else is remaining static
         * then it can help the compositor to know that only the bottom right
         * corner of your newly swapped buffer has really changed with respect
         * to your previously swapped front buffer.
         *
         * If `n_rectangles` is 0 then the whole buffer will implicitly be
         * reported as damaged as if cogl_onscreen_swap_buffers() had been
         * called.
         *
         * This function also implicitly discards the contents of the color,
         * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
         * were used. The significance of the discard is that you should not
         * expect to be able to start a new frame that incrementally builds on
         * the contents of the previous frame. If you want to perform
         * incremental updates to older back buffers then please refer to the
         * cogl_onscreen_get_buffer_age() api.
         *
         * Whenever possible it is recommended that applications use this
         * function instead of cogl_onscreen_swap_buffers() to improve
         * performance when running under a compositor.
         *
         * <note>It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.</note>
         * @param rectangles An array of integer 4-tuples representing damaged              rectangles as (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from @rectangles
         */
        swap_buffers_with_damage(rectangles: number, n_rectangles: number): void;
        /**
         * Swaps a region of the back buffer being rendered too, to the front for
         * display.  `rectangles` represents the region as array of `n_rectangles` each
         * defined by 4 sequential (x, y, width, height) integers.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         * @param rectangles An array of integer 4-tuples representing rectangles as              (x, y, width, height) tuples.
         * @param n_rectangles The number of 4-tuples to be read from @rectangles
         */
        swap_region(rectangles: number, n_rectangles: number): void;

        // Inherited methods
        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * <note>Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.</note>
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        allocate(): boolean;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param color The color to clear the color buffer too if specified in         @buffers.
         */
        clear(buffers: number, color: Color): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param red The red component of color to clear the color buffer too if       specified in @buffers.
         * @param green The green component of color to clear the color buffer too if         specified in @buffers.
         * @param blue The blue component of color to clear the color buffer too if        specified in @buffers.
         * @param alpha The alpha component of color to clear the color buffer too if         specified in @buffers.
         */
        clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
        /**
         * Declares that the specified `buffers` no longer need to be referenced
         * by any further rendering commands. This can be an important
         * optimization to avoid subsequent frames of rendering depending on
         * the results of a previous frame.
         *
         * For example; some tile-based rendering GPUs are able to avoid allocating and
         * accessing system memory for the depth and stencil buffer so long as these
         * buffers are not required as input for subsequent frames and that can save a
         * significant amount of memory bandwidth used to save and restore their
         * contents to system memory between frames.
         *
         * It is currently considered an error to try and explicitly discard the color
         * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
         * already implicitly discard when you finish rendering to a #CoglOnscreen
         * framebuffer, and it's not meaningful to try and discard the color buffer of
         * a #CoglOffscreen framebuffer since they are single-buffered.
         * @param buffers A #CoglBufferBit mask of which ancillary buffers you want           to discard.
         */
        discard_buffers(buffers: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` with the given `pipeline`
         * state with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`). As a pipeline may
         * contain multiple texture layers this interface lets you supply
         * texture coordinates for each layer of the pipeline.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture for the first layer such as
         * #CoglTexture2DSliced textures which may internally be comprised of
         * multiple low-level textures.  This is unlike low-level drawing apis
         * such as cogl_primitive_draw() which only support low level texture
         * types that are directly supported by GPUs such as #CoglTexture2D.
         *
         * <note>This api can not currently handle multiple high-level meta
         * texture layers. The first layer may be a high level meta texture
         * such as #CoglTexture2DSliced but all other layers much be low
         * level textures such as #CoglTexture2D and additionally they
         * should be textures that can be sampled using normalized coordinates
         * (so not #CoglTextureRectangle textures).</note>
         *
         * The top left texture coordinate for layer 0 of any pipeline will be
         * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
         * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
         * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
         * tex_coords[7]) and so on...
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * which normally implies working with non-normalized texture
         * coordinates this api should still be passed normalized texture
         * coordinates.</note>
         *
         * The first pair of coordinates are for the first layer (with the
         * smallest layer index) and if you supply less texture coordinates
         * than there are layers in the current source material then default
         * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param tex_coords An array containing groups of   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture   coordinates; one for the top left texel, and one for the bottom right   texel. Each value should be between 0.0 and 1.0, where the coordinate   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the   bottom right.
         * @param tex_coords_len The length of the @tex_coords array. (For one layer   and one group of texture coordinates, this would be 4)
         */
        draw_multitextured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            tex_coords: number[],
            tex_coords_len: number,
        ): void;
        /**
         * Draws a rectangle to `framebuffer` with the given `pipeline` state
         * and with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * <note>If you want to describe a rectangle with a texture mapped on
         * it then you can use
         * cogl_framebuffer_draw_textured_rectangle().</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 X coordinate of the top-left corner
         * @param y_1 Y coordinate of the top-left corner
         * @param x_2 X coordinate of the bottom-right corner
         * @param y_2 Y coordinate of the bottom-right corner
         */
        draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_rectangle() does.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The positions for
         * the second rectangle are (coordinates[4], coordinates[5]) and
         * (coordinates[6], coordinates[7]) and so on...
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array of coordinates   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are   interpreted as two position coordinates; one for the top left of   the rectangle (x1, y1), and one for the bottom right of the   rectangle (x2, y2).
         * @param n_rectangles number of rectangles defined in @coordinates.
         */
        draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` using the given
         * `pipeline` state with the top left corner positioned at (`x_1`, `y_1`)
         * and the bottom right corner positioned at (`x_2`, `y_2`). The top
         * left corner will have texture coordinates of (`s_1`, `t_1`) and the
         * bottom right corner will have texture coordinates of (`s_2`, `t_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * <note>The given texture coordinates will only be used for the first
         * texture layer of the pipeline and if your pipeline has more than
         * one layer then all other layers will have default texture
         * coordinates of `s_1`=0.0 `t_1`=0.0 `s_2`=1.0 `t_2`=1.0 </note>
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in `s_1`=0, `t_1`=0, `s_2`=1, `t_2`=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * with one of your `pipeline` layers which normally implies working
         * with non-normalized texture coordinates this api should still be
         * passed normalized texture coordinates.</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param s_1 S texture coordinate of the top-left coorner
         * @param t_1 T texture coordinate of the top-left coorner
         * @param s_2 S texture coordinate of the bottom-right coorner
         * @param t_2 T texture coordinate of the bottom-right coorner
         */
        draw_textured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            s_1: number,
            t_1: number,
            s_2: number,
            t_2: number,
        ): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_textured_rectangle() does.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The top left
         * texture coordinate is (coordinates[4], coordinates[5]) and the
         * bottom right texture coordinate is (coordinates[6],
         * coordinates[7]). The coordinates for subsequent rectangles
         * are defined similarly by the subsequent coordinates.
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * which normally implies working with non-normalized texture
         * coordinates this api should still be passed normalized texture
         * coordinates.</note>
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array containing   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]   that have the same meaning as the arguments for   cogl_framebuffer_draw_textured_rectangle().
         * @param n_rectangles number of rectangles to @coordinates to draw
         */
        draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * This blocks the CPU until all pending rendering associated with the
         * specified framebuffer has completed. It's very rare that developers should
         * ever need this level of synchronization with the GPU and should never be
         * used unless you clearly understand why you need to explicitly force
         * synchronization.
         *
         * One example might be for benchmarking purposes to be sure timing
         * measurements reflect the time that the GPU is busy for not just the time it
         * takes to queue rendering commands.
         */
        finish(): void;
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
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Retrieves the number of alpha bits of `framebuffer`
         * @returns the number of bits
         */
        get_alpha_bits(): number;
        /**
         * Retrieves the number of blue bits of `framebuffer`
         * @returns the number of bits
         */
        get_blue_bits(): number;
        /**
         * Gets the current #CoglColorMask of which channels would be written to the
         * current framebuffer. Each bit set in the mask means that the
         * corresponding color would be written.
         * @returns A #CoglColorMask
         */
        get_color_mask(): ColorMask;
        /**
         * Retrieves the number of depth bits of `framebuffer`
         * @returns the number of bits
         */
        get_depth_bits(): number;
        /**
         * Retrieves the depth buffer of `framebuffer` as a #CoglTexture. You need to
         * call cogl_framebuffer_get_depth_texture(fb, TRUE); before using this
         * function.
         *
         * <note>Calling this function implicitely allocates the framebuffer.</note>
         * <note>The texture returned stays valid as long as the framebuffer stays
         * valid.</note>
         * @returns the depth texture
         */
        get_depth_texture(): Texture;
        /**
         * Queries whether texture based depth buffer has been enabled via
         * cogl_framebuffer_set_depth_texture_enabled().
         * @returns %TRUE if a depth texture has been enabled, else               %FALSE.
         */
        get_depth_texture_enabled(): boolean;
        /**
         * Queries whether depth buffer writing is enabled for `framebuffer`. This
         * can be controlled via cogl_framebuffer_set_depth_write_enabled().
         * @returns %TRUE if depth writing is enabled or %FALSE if not.
         */
        get_depth_write_enabled(): boolean;
        /**
         * Returns whether dithering has been requested for the given `framebuffer`.
         * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
         *
         * <note>This may return %TRUE even when the underlying `framebuffer`
         * display pipeline does not support dithering. This value only represents
         * the user's request for dithering.</note>
         * @returns %TRUE if dithering has been requested or %FALSE if not.
         */
        get_dither_enabled(): boolean;
        /**
         * Retrieves the number of green bits of `framebuffer`
         * @returns the number of bits
         */
        get_green_bits(): number;
        /**
         * Queries the current height of the given `framebuffer`.
         * @returns The height of @framebuffer.
         */
        get_height(): number;
        get_is_stereo(): boolean;
        /**
         * Stores the current model-view matrix in `matrix`.
         */
        get_modelview_matrix(): Matrix;
        /**
         * Stores the current projection matrix in `matrix`.
         */
        get_projection_matrix(): Matrix;
        /**
         * Retrieves the number of red bits of `framebuffer`
         * @returns the number of bits
         */
        get_red_bits(): number;
        /**
         * Gets the number of points that are sampled per-pixel when
         * rasterizing geometry. Usually by default this will return 0 which
         * means that single-sample not multisample rendering has been chosen.
         * When using a GPU supporting multisample rendering it's possible to
         * increase the number of samples per pixel using
         * cogl_framebuffer_set_samples_per_pixel().
         *
         * Calling cogl_framebuffer_get_samples_per_pixel() before the
         * framebuffer has been allocated will simply return the value set
         * using cogl_framebuffer_set_samples_per_pixel(). After the
         * framebuffer has been allocated the value will reflect the actual
         * number of samples that will be made by the GPU.
         * @returns The number of point samples made per pixel when          rasterizing geometry or 0 if single-sample rendering          has been chosen.
         */
        get_samples_per_pixel(): number;
        /**
         * Gets the current #CoglStereoMode, which defines which stereo buffers
         * should be drawn to. See cogl_framebuffer_set_stereo_mode().
         * @returns A #CoglStereoMode
         */
        get_stereo_mode(): StereoMode;
        /**
         * Queries the x, y, width and height components of the current viewport as set
         * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
         * framebuffer_width and framebuffer_height.  The values are written into the
         * given `viewport` array.
         */
        get_viewport4fv(): number[];
        /**
         * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the height of the framebuffer.
         * @returns The height of the viewport.
         */
        get_viewport_height(): number;
        /**
         * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the width of the framebuffer.
         * @returns The width of the viewport.
         */
        get_viewport_width(): number;
        /**
         * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The x coordinate of the viewport origin.
         */
        get_viewport_x(): number;
        /**
         * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The y coordinate of the viewport origin.
         */
        get_viewport_y(): number;
        /**
         * Queries the current width of the given `framebuffer`.
         * @returns The width of @framebuffer.
         */
        get_width(): number;
        /**
         * Resets the current model-view matrix to the identity matrix.
         */
        identity_matrix(): void;
        /**
         * Replaces the current projection matrix with an orthographic projection
         * matrix.
         * @param x_1 The x coordinate for the first vertical clipping plane
         * @param y_1 The y coordinate for the first horizontal clipping plane
         * @param x_2 The x coordinate for the second vertical clipping plane
         * @param y_2 The y coordinate for the second horizontal clipping plane
         * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         */
        orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * based on the provided values.
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
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Reverts the clipping region to the state before the last call to
         * cogl_framebuffer_push_scissor_clip(), cogl_framebuffer_push_rectangle_clip()
         * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
         */
        pop_clip(): void;
        /**
         * Restores the model-view matrix on the top of the matrix stack.
         */
        pop_matrix(): void;
        /**
         * Copies the current model-view matrix onto the matrix stack. The matrix
         * can later be restored with cogl_framebuffer_pop_matrix().
         */
        push_matrix(): void;
        /**
         * Specifies a modelview transformed rectangular clipping area for all
         * subsequent drawing operations. Any drawing commands that extend
         * outside the rectangle will be clipped so that only the portion
         * inside the rectangle will be displayed. The rectangle dimensions
         * are transformed by the current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x_1 x coordinate for top left corner of the clip rectangle
         * @param y_1 y coordinate for top left corner of the clip rectangle
         * @param x_2 x coordinate for bottom right corner of the clip rectangle
         * @param y_2 y coordinate for bottom right corner of the clip rectangle
         */
        push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Specifies a rectangular clipping area for all subsequent drawing
         * operations. Any drawing commands that extend outside the rectangle
         * will be clipped so that only the portion inside the rectangle will
         * be displayed. The rectangle dimensions are not transformed by the
         * current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x left edge of the clip rectangle in window coordinates
         * @param y top edge of the clip rectangle in window coordinates
         * @param width width of the clip rectangle
         * @param height height of the clip rectangle
         */
        push_scissor_clip(x: number, y: number, width: number, height: number): void;
        /**
         * This is a convenience wrapper around
         * cogl_framebuffer_read_pixels_into_bitmap() which allocates a
         * temporary #CoglBitmap to read pixel data directly into the given
         * buffer. The rowstride of the buffer is assumed to be the width of
         * the region times the bytes per pixel of the format. The source for
         * the data is always taken from the color buffer. If you want to use
         * any other rowstride or source, please use the
         * cogl_framebuffer_read_pixels_into_bitmap() function directly.
         *
         * The implementation of the function looks like this:
         *
         *
         * ```
         * bitmap = cogl_bitmap_new_for_data (context,
         *                                    width, height,
         *                                    format,
         *                                    /<!-- -->* rowstride *<!-- -->/
         *                                    bpp * width,
         *                                    pixels);
         * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
         *                                           x, y,
         *                                           COGL_READ_PIXELS_COLOR_BUFFER,
         *                                           bitmap);
         * cogl_object_unref (bitmap);
         * ```
         *
         * @param x The x position to read from
         * @param y The y position to read from
         * @param width The width of the region of rectangles to read
         * @param height The height of the region of rectangles to read
         * @param format The pixel format to store the data in
         * @param pixels The address of the buffer to store the data in
         * @returns %TRUE if the read succeeded or %FALSE otherwise.
         */
        read_pixels(
            x: number,
            y: number,
            width: number,
            height: number,
            format: PixelFormat | null,
            pixels: number,
        ): boolean;
        /**
         * This reads a rectangle of pixels from the given framebuffer where
         * position (0, 0) is the top left. The pixel at (x, y) is the first
         * read, and a rectangle of pixels with the same size as the bitmap is
         * read right and downwards from that point.
         *
         * Currently Cogl assumes that the framebuffer is in a premultiplied
         * format so if the format of `bitmap` is non-premultiplied it will
         * convert it. To read the pixel values without any conversion you
         * should either specify a format that doesn't use an alpha channel or
         * use one of the formats ending in PRE.
         * @param x The x position to read from
         * @param y The y position to read from
         * @param source Identifies which auxillary buffer you want to read          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
         * @param bitmap The bitmap to store the results in.
         * @returns %TRUE if the read succeeded or %FALSE otherwise. The  function is only likely to fail if the bitmap points to a pixel  buffer and it could not be mapped.
         */
        read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags | null, bitmap: Bitmap): boolean;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples_region()) to explicitly resolve
         * the point samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Since Cogl will automatically ensure samples are resolved if the
         * target color buffer is used as a source this API only needs to be
         * used if explicit control is desired - perhaps because you want to
         * ensure that the resolve is completed in advance to avoid later
         * having to wait for the resolve to complete.
         *
         * If you are performing incremental updates to a framebuffer you
         * should consider using cogl_framebuffer_resolve_samples_region()
         * instead to avoid resolving redundant pixels.
         */
        resolve_samples(): void;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples()) to explicitly resolve the point
         * samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Use of this API is recommended if incremental, small updates to
         * a framebuffer are being made because by default Cogl will
         * implicitly resolve all the point samples of the framebuffer which
         * can result in redundant work if only a small number of samples have
         * changed.
         *
         * Because some GPUs implicitly resolve point samples this function
         * only guarantees that at-least the region specified will be resolved
         * and if you have rendered to a larger region then it's possible that
         * other samples may be implicitly resolved.
         * @param x top-left x coordinate of region to resolve
         * @param y top-left y coordinate of region to resolve
         * @param width width of region to resolve
         * @param height height of region to resolve
         */
        resolve_samples_region(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates the
         * model around the axis-vector specified by `x,` `y` and `z`. The
         * rotation follows the right-hand thumb rule so for example rotating
         * by 10 degrees about the axis-vector (0, 0, 1) causes a small
         * counter-clockwise rotation.
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `euler`.
         * @param euler A #CoglEuler
         */
        rotate_euler(euler: Euler): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `quaternion`.
         * @param quaternion A #CoglQuaternion
         */
        rotate_quaternion(quaternion: Quaternion): void;
        /**
         * Multiplies the current model-view matrix by one that scales the x,
         * y and z axes by the given values.
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Defines a bit mask of which color channels should be written to the
         * given `framebuffer`. If a bit is set in `color_mask` that means that
         * color will be written.
         * @param color_mask A #CoglColorMask of which color channels to write to              the current framebuffer.
         */
        set_color_mask(color_mask: ColorMask | null): void;
        /**
         * If `enabled` is #TRUE, the depth buffer used when rendering to `framebuffer`
         * is available as a texture. You can retrieve the texture with
         * cogl_framebuffer_get_depth_texture().
         *
         * <note>It's possible that your GPU does not support depth textures. You
         * should check the %COGL_FEATURE_ID_DEPTH_TEXTURE feature before using this
         * function.</note>
         * <note>It's not valid to call this function after the framebuffer has been
         * allocated as the creation of the depth texture is done at allocation time.
         * </note>
         * @param enabled TRUE or FALSE
         */
        set_depth_texture_enabled(enabled: boolean): void;
        /**
         * Enables or disables depth buffer writing when rendering to `framebuffer`.
         * If depth writing is enabled for both the framebuffer and the rendering
         * pipeline, and the framebuffer has an associated depth buffer, depth
         * information will be written to this buffer during rendering.
         *
         * Depth buffer writing is enabled by default.
         * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
         */
        set_depth_write_enabled(depth_write_enabled: boolean): void;
        /**
         * Enables or disabled dithering if supported by the hardware.
         *
         * Dithering is a hardware dependent technique to increase the visible
         * color resolution beyond what the underlying hardware supports by playing
         * tricks with the colors placed into the framebuffer to give the illusion
         * of other colors. (For example this can be compared to half-toning used
         * by some news papers to show varying levels of grey even though their may
         * only be black and white are available).
         *
         * If the current display pipeline for `framebuffer` does not support dithering
         * then this has no affect.
         *
         * Dithering is enabled by default.
         * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
         */
        set_dither_enabled(dither_enabled: boolean): void;
        /**
         * Sets `matrix` as the new model-view matrix.
         * @param matrix the new model-view matrix
         */
        set_modelview_matrix(matrix: Matrix): void;
        /**
         * Sets `matrix` as the new projection matrix.
         * @param matrix the new projection matrix
         */
        set_projection_matrix(matrix: Matrix): void;
        /**
         * Requires that when rendering to `framebuffer` then `n` point samples
         * should be made per pixel which will all contribute to the final
         * resolved color for that pixel. The idea is that the hardware aims
         * to get quality similar to what you would get if you rendered
         * everything twice as big (for 4 samples per pixel) and then scaled
         * that image back down with filtering. It can effectively remove the
         * jagged edges of polygons and should be more efficient than if you
         * were to manually render at a higher resolution and downscale
         * because the hardware is often able to take some shortcuts. For
         * example the GPU may only calculate a single texture sample for all
         * points of a single pixel, and for tile based architectures all the
         * extra sample data (such as depth and stencil samples) may be
         * handled on-chip and so avoid increased demand on system memory
         * bandwidth.
         *
         * By default this value is usually set to 0 and that is referred to
         * as "single-sample" rendering. A value of 1 or greater is referred
         * to as "multisample" rendering.
         *
         * <note>There are some semantic differences between single-sample
         * rendering and multisampling with just 1 point sample such as it
         * being redundant to use the cogl_framebuffer_resolve_samples() and
         * cogl_framebuffer_resolve_samples_region() apis with single-sample
         * rendering.</note>
         *
         * <note>It's recommended that
         * cogl_framebuffer_resolve_samples_region() be explicitly used at the
         * end of rendering to a point sample buffer to minimize the number of
         * samples that get resolved. By default Cogl will implicitly resolve
         * all framebuffer samples but if only a small region of a
         * framebuffer has changed this can lead to redundant work being
         * done.</note>
         * @param samples_per_pixel The minimum number of samples per pixel
         */
        set_samples_per_pixel(samples_per_pixel: number): void;
        /**
         * Sets which stereo buffers should be drawn to. The default
         * is %COGL_STEREO_BOTH, which means that both the left and
         * right buffers will be affected by drawing. For this to have
         * an effect, the display system must support stereo drawables,
         * and the framebuffer must have been created with stereo
         * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
         * cogl_framebuffer_get_is_stereo().)
         * @param stereo_mode A #CoglStereoMode specifying which stereo buffers               should be drawn tow.
         */
        set_stereo_mode(stereo_mode: StereoMode | null): void;
        /**
         * Defines a scale and offset for everything rendered relative to the
         * top-left of the destination framebuffer.
         *
         * By default the viewport has an origin of (0,0) and width and height
         * that match the framebuffer's size. Assuming a default projection and
         * modelview matrix then you could translate the contents of a window
         * down and right by leaving the viewport size unchanged by moving the
         * offset to (10,10). The viewport coordinates are measured in pixels.
         * If you left the x and y origin as (0,0) you could scale the windows
         * contents down by specify and width and height that's half the real
         * size of the framebuffer.
         *
         * <note>Although the function takes floating point arguments, existing
         * drivers only allow the use of integer values. In the future floating
         * point values will be exposed via a checkable feature.</note>
         * @param x The top-left x coordinate of the viewport origin (only integers     supported currently)
         * @param y The top-left y coordinate of the viewport origin (only integers     supported currently)
         * @param width The width of the viewport (only integers supported currently)
         * @param height The height of the viewport (only integers supported currently)
         */
        set_viewport(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by the given matrix.
         * @param matrix the matrix to multiply with the current model-view
         */
        transform(matrix: Matrix): void;
        /**
         * Multiplies the current model-view matrix by one that translates the
         * model along all three axes according to the given values.
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }

    namespace Pipeline {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Pipeline extends Object {
        static $gtype: GObject.GType<Pipeline>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pipeline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pipeline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pipeline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new pipeline with the configuration copied from the
         * source pipeline.
         *
         * We would strongly advise developers to always aim to use
         * cogl_pipeline_copy() instead of cogl_pipeline_new() whenever there will
         * be any similarity between two pipelines. Copying a pipeline helps Cogl
         * keep track of a pipelines ancestry which we may use to help minimize GPU
         * state changes.
         * @returns a pointer to the newly allocated #CoglPipeline
         */
        copy(): Pipeline;
        /**
         * Iterates all the layer indices of the given `pipeline`.
         * @param callback A #CoglPipelineLayerCallback to be            called for each layer index
         */
        foreach_layer(callback: PipelineLayerCallback): void;
        get_alpha_test_function(): PipelineAlphaFunc;
        get_alpha_test_reference(): number;
        /**
         * Retrieves the current ambient color for `pipeline`
         * @param ambient The location to store the ambient color
         */
        get_ambient(ambient: Color): void;
        /**
         * Retrieves the current pipeline color.
         */
        get_color(): Color;
        /**
         * Gets the current #CoglColorMask of which channels would be written to the
         * current framebuffer. Each bit set in the mask means that the
         * corresponding color would be written.
         * @returns A #CoglColorMask
         */
        get_color_mask(): ColorMask;
        get_cull_face_mode(): PipelineCullFaceMode;
        /**
         * Retrieves the current diffuse color for `pipeline`
         * @param diffuse The location to store the diffuse color
         */
        get_diffuse(diffuse: Color): void;
        /**
         * Retrieves the pipelines current emission color.
         * @param emission The location to store the emission color
         */
        get_emission(emission: Color): void;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         * @returns The @pipeline front face winding Status: Unstable
         */
        get_front_face_winding(): Winding;
        /**
         * Retrieves the currently set magnification #CoglPipelineFilter set on
         * the specified layer. The magnification filter determines how the
         * layer should be sampled when up-scaled.
         *
         * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
         * changed using cogl_pipeline_set_layer_filters().
         * @param layer_index the layer number to change.
         * @returns The magnification #CoglPipelineFilter for the               specified layer.
         */
        get_layer_mag_filter(layer_index: number): PipelineFilter;
        /**
         * Retrieves the currently set minification #CoglPipelineFilter set on
         * the specified layer. The miniifcation filter determines how the
         * layer should be sampled when down-scaled.
         *
         * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
         * changed using cogl_pipeline_set_layer_filters().
         * @param layer_index the layer number to change.
         * @returns The minification #CoglPipelineFilter for the               specified layer.
         */
        get_layer_min_filter(layer_index: number): PipelineFilter;
        /**
         * Gets whether point sprite coordinate generation is enabled for this
         * texture layer.
         * @param layer_index the layer number to check.
         * @returns whether the texture coordinates will be replaced with point sprite coordinates.
         */
        get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
        get_layer_texture(layer_index: number): Texture;
        /**
         * Returns the wrap mode for the 'p' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 'p' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_p(layer_index: number): PipelineWrapMode;
        /**
         * Returns the wrap mode for the 's' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 's' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode;
        /**
         * Returns the wrap mode for the 't' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 't' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode;
        /**
         * Retrieves the number of layers defined for the given `pipeline`
         * @returns the number of layers
         */
        get_n_layers(): number;
        get_per_vertex_point_size(): boolean;
        /**
         * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the vertex buffer API.
         * @returns the point size of the @pipeline.
         */
        get_point_size(): number;
        /**
         * Retrieves the pipelines current emission color.
         * @returns The pipelines current shininess value
         */
        get_shininess(): number;
        /**
         * Retrieves the pipelines current specular color.
         * @param specular The location to store the specular color
         */
        get_specular(specular: Color): void;
        /**
         * This is used to get an integer representing the uniform with the
         * name `uniform_name`. The integer can be passed to functions such as
         * cogl_pipeline_set_uniform_1f() to set the value of a uniform.
         *
         * This function will always return a valid integer. Ie, unlike
         * OpenGL, it does not return -1 if the uniform is not available in
         * this pipeline so it can not be used to test whether uniforms are
         * present. It is not necessary to set the program on the pipeline
         * before calling this function.
         * @param uniform_name The name of a uniform
         * @returns A integer representing the location of the given uniform.
         */
        get_uniform_location(uniform_name: string): number;
        /**
         * Queries what user program has been associated with the given
         * `pipeline` using cogl_pipeline_set_user_program().
         * @returns The current user program or %COGL_INVALID_HANDLE.
         */
        get_user_program(): Handle;
        /**
         * This function removes a layer from your pipeline
         * @param layer_index Specifies the layer you want to remove
         */
        remove_layer(layer_index: number): void;
        /**
         * Before a primitive is blended with the framebuffer, it goes through an
         * alpha test stage which lets you discard fragments based on the current
         * alpha value. This function lets you change the function used to evaluate
         * the alpha channel, and thus determine which fragments are discarded
         * and which continue on to the blending stage.
         *
         * The default is %COGL_PIPELINE_ALPHA_FUNC_ALWAYS
         * @param alpha_func A @CoglPipelineAlphaFunc constant
         * @param alpha_reference A reference point that the chosen alpha function uses   to compare incoming fragments to.
         */
        set_alpha_test_function(alpha_func: PipelineAlphaFunc | null, alpha_reference: number): void;
        /**
         * Sets the pipeline's ambient color, in the standard OpenGL lighting
         * model. The ambient color affects the overall color of the object.
         *
         * Since the diffuse color will be intense when the light hits the surface
         * directly, the ambient will be most apparent where the light hits at a
         * slant.
         *
         * The default value is (0.2, 0.2, 0.2, 1.0)
         * @param ambient The components of the desired ambient color
         */
        set_ambient(ambient: Color): void;
        /**
         * Conveniently sets the diffuse and ambient color of `pipeline` at the same
         * time. See cogl_pipeline_set_ambient() and cogl_pipeline_set_diffuse().
         *
         * The default ambient color is (0.2, 0.2, 0.2, 1.0)
         *
         * The default diffuse color is (0.8, 0.8, 0.8, 1.0)
         * @param color The components of the desired ambient and diffuse colors
         */
        set_ambient_and_diffuse(color: Color): void;
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
         *
         * ```
         *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
         * ```
         *
         *
         * This is the list of source-names usable as blend factors:
         * <itemizedlist>
         *   <listitem><para>SRC_COLOR: The color of the in comming fragment</para></listitem>
         *   <listitem><para>DST_COLOR: The color of the framebuffer</para></listitem>
         *   <listitem><para>CONSTANT: The constant set via cogl_pipeline_set_blend_constant()</para></listitem>
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
         *
         * ```
         *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
         * ```
         *
         *
         * That gives normal alpha-blending when the calculated color for the pipeline
         * is in premultiplied form.
         * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>   describing the desired blend function.
         * @returns %TRUE if the blend string was successfully parsed, and the   described blending is supported by the underlying driver/hardware. If   there was an error, %FALSE is returned and @error is set accordingly (if   present).
         */
        set_blend(blend_string: string): boolean;
        /**
         * When blending is setup to reference a CONSTANT blend factor then
         * blending will depend on the constant set with this function.
         * @param constant_color The constant color you want
         */
        set_blend_constant(constant_color: Color): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * Note that if you don't add any layers to the pipeline then the color
         * will be blended unmodified with the destination; the default blend
         * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
         * semi-transparent red. See cogl_color_premultiply().
         *
         * The default value is (1.0, 1.0, 1.0, 1.0)
         * @param color The components of the color
         */
        set_color(color: Color): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * The default value is (1.0, 1.0, 1.0, 1.0)
         * @param red The red component
         * @param green The green component
         * @param blue The blue component
         * @param alpha The alpha component
         */
        set_color4f(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * The default value is (0xff, 0xff, 0xff, 0xff)
         * @param red The red component
         * @param green The green component
         * @param blue The blue component
         * @param alpha The alpha component
         */
        set_color4ub(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Defines a bit mask of which color channels should be written to the
         * current framebuffer. If a bit is set in `color_mask` that means that
         * color will be written.
         * @param color_mask A #CoglColorMask of which color channels to write to              the current framebuffer.
         */
        set_color_mask(color_mask: ColorMask | null): void;
        /**
         * Sets which faces will be culled when drawing. Face culling can be
         * used to increase efficiency by avoiding drawing faces that would
         * get overridden. For example, if a model has gaps so that it is
         * impossible to see the inside then faces which are facing away from
         * the screen will never be seen so there is no point in drawing
         * them. This can be acheived by setting the cull face mode to
         * %COGL_PIPELINE_CULL_FACE_MODE_BACK.
         *
         * Face culling relies on the primitives being drawn with a specific
         * order to represent which faces are facing inside and outside the
         * model. This order can be specified by calling
         * cogl_pipeline_set_front_face_winding().
         *
         * Status: Unstable
         * @param cull_face_mode The new mode to set
         */
        set_cull_face_mode(cull_face_mode: PipelineCullFaceMode | null): void;
        /**
         * Sets the pipeline's diffuse color, in the standard OpenGL lighting
         * model. The diffuse color is most intense where the light hits the
         * surface directly - perpendicular to the surface.
         *
         * The default value is (0.8, 0.8, 0.8, 1.0)
         * @param diffuse The components of the desired diffuse color
         */
        set_diffuse(diffuse: Color): void;
        /**
         * Sets the pipeline's emissive color, in the standard OpenGL lighting
         * model. It will look like the surface is a light source emitting this
         * color.
         *
         * The default value is (0.0, 0.0, 0.0, 1.0)
         * @param emission The components of the desired emissive color
         */
        set_emission(emission: Color): void;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         *
         * Status: Unstable
         * @param front_winding the winding order
         */
        set_front_face_winding(front_winding: Winding | null): void;
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
         *     cogl_pipeline_set_layer_combine_constant()</listitem>
         *   </varlistentry>
         *   <varlistentry>
         *     <term>PRIMARY</term>
         *     <listitem>Use the color of the pipeline as set with
         *     cogl_pipeline_set_color()</listitem>
         *   </varlistentry>
         *   <varlistentry>
         *     <term>PREVIOUS</term>
         *     <listitem>Either use the texture color from the previous layer, or
         *     if this is layer 0, use the color of the pipeline as set with
         *     cogl_pipeline_set_color()</listitem>
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
         *   color is given by calling
         *   cogl_pipeline_set_layer_combine_constant().</para>
         *   <informalexample><programlisting>
         *   RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
         *   </programlisting></informalexample>
         * </refsect2>
         *
         * <note>You can't give a multiplication factor for arguments as you can
         * with blending.</note>
         * @param layer_index Specifies the layer you want define a combine function for
         * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>    describing the desired texture combine function.
         * @returns %TRUE if the blend string was successfully parsed, and the   described texture combining is supported by the underlying driver and   or hardware. On failure, %FALSE is returned and @error is set
         */
        set_layer_combine(layer_index: number, blend_string: string): boolean;
        /**
         * When you are using the 'CONSTANT' color source in a layer combine
         * description then you can use this function to define its value.
         * @param layer_index Specifies the layer you want to specify a constant used               for texture combining
         * @param constant The constant color you want
         */
        set_layer_combine_constant(layer_index: number, constant: Color): void;
        /**
         * Changes the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         *
         * <note>It is an error to pass anything other than
         * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
         * magnification filters since magnification doesn't ever need to
         * reference values stored in the mipmap chain.</note>
         * @param layer_index the layer number to change.
         * @param min_filter the filter used when scaling a texture down.
         * @param mag_filter the filter used when magnifying a texture.
         */
        set_layer_filters(
            layer_index: number,
            min_filter: PipelineFilter | null,
            mag_filter: PipelineFilter | null,
        ): void;
        /**
         * This function lets you set a matrix that can be used to e.g. translate
         * and rotate a single layer of a pipeline used to fill your geometry.
         * @param layer_index the index for the layer inside @pipeline
         * @param matrix the transformation matrix for the layer
         */
        set_layer_matrix(layer_index: number, matrix: Matrix): void;
        /**
         * Sets the texture for this layer to be the default texture for the
         * given type. This is equivalent to calling
         * cogl_pipeline_set_layer_texture() with %NULL for the texture
         * argument except that you can also specify the type of default
         * texture to use. The default texture is a 1x1 pixel white texture.
         *
         * This function is mostly useful if you want to create a base
         * pipeline that you want to create multiple copies from using
         * cogl_pipeline_copy(). In that case this function can be used to
         * specify the texture type so that any pipeline copies can share the
         * internal texture type state for efficiency.
         * @param layer_index The layer number to modify
         * @param texture_type The type of the default texture to use
         */
        set_layer_null_texture(layer_index: number, texture_type: TextureType | null): void;
        /**
         * When rendering points, if `enable` is %TRUE then the texture
         * coordinates for this layer will be replaced with coordinates that
         * vary from 0.0 to 1.0 across the primitive. The top left of the
         * point will have the coordinates 0.0,0.0 and the bottom right will
         * have 1.0,1.0. If `enable` is %FALSE then the coordinates will be
         * fixed for the entire point.
         *
         * This function will only work if %COGL_FEATURE_ID_POINT_SPRITE is
         * available. If the feature is not available then the function will
         * return %FALSE and set `error`.
         * @param layer_index the layer number to change.
         * @param enable whether to enable point sprite coord generation.
         * @returns %TRUE if the function succeeds, %FALSE otherwise.
         */
        set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean;
        set_layer_texture(layer_index: number, texture: Texture): void;
        /**
         * Sets the wrap mode for all three coordinates of texture lookups on
         * this layer. This is equivalent to calling
         * cogl_pipeline_set_layer_wrap_mode_s(),
         * cogl_pipeline_set_layer_wrap_mode_t() and
         * cogl_pipeline_set_layer_wrap_mode_p() separately.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode | null): void;
        /**
         * Sets the wrap mode for the 'p' coordinate of texture lookups on
         * this layer. 'p' is the third coordinate.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_p(layer_index: number, mode: PipelineWrapMode | null): void;
        /**
         * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode | null): void;
        /**
         * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode | null): void;
        /**
         * Sets whether to use a per-vertex point size or to use the value set
         * by cogl_pipeline_set_point_size(). If per-vertex point size is
         * enabled then the point size can be set for an individual point
         * either by drawing with a #CoglAttribute with the name
         * ‘cogl_point_size_in’ or by writing to the GLSL builtin
         * ‘cogl_point_size_out’ from a vertex shader snippet.
         *
         * If per-vertex point size is enabled and this attribute is not used
         * and cogl_point_size_out is not written to then the results are
         * undefined.
         *
         * Note that enabling this will only work if the
         * %COGL_FEATURE_ID_PER_VERTEX_POINT_SIZE feature is available. If
         * this is not available then the function will return %FALSE and set
         * a #CoglError.
         * @param enable whether to enable per-vertex point size
         * @returns %TRUE if the change suceeded or %FALSE otherwise
         */
        set_per_vertex_point_size(enable: boolean): boolean;
        /**
         * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the attribute buffer API. Note that typically the GPU
         * will only support a limited minimum and maximum range of point
         * sizes. If the chosen point size is outside that range then the
         * nearest value within that range will be used instead. The size of a
         * point is in screen space so it will be the same regardless of any
         * transformations.
         *
         * If the point size is set to 0.0 then drawing points with the
         * pipeline will have undefined results. This is the default value so
         * if an application wants to draw points it must make sure to use a
         * pipeline that has an explicit point size set on it.
         * @param point_size the new point size.
         */
        set_point_size(point_size: number): void;
        /**
         * Sets the shininess of the pipeline, in the standard OpenGL lighting
         * model, which determines the size of the specular highlights. A
         * higher `shininess` will produce smaller highlights which makes the
         * object appear more shiny.
         *
         * The default value is 0.0
         * @param shininess The desired shininess; must be >= 0.0
         */
        set_shininess(shininess: number): void;
        /**
         * Sets the pipeline's specular color, in the standard OpenGL lighting
         * model. The intensity of the specular color depends on the viewport
         * position, and is brightest along the lines of reflection.
         *
         * The default value is (0.0, 0.0, 0.0, 1.0)
         * @param specular The components of the desired specular color
         */
        set_specular(specular: Color): void;
        /**
         * Sets a new value for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given value will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function should be used to set uniforms that are of type
         * float. It can also be used to set a single member of a float array
         * uniform.
         * @param uniform_location The uniform's location identifier
         * @param value The new value for the uniform
         */
        set_uniform_1f(uniform_location: number, value: number): void;
        /**
         * Sets a new value for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given value will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function should be used to set uniforms that are of type
         * int. It can also be used to set a single member of a int array
         * uniform or a sampler uniform.
         * @param uniform_location The uniform's location identifier
         * @param value The new value for the uniform
         */
        set_uniform_1i(uniform_location: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any floating point type uniform,
         * including float arrays and float vectors. For example, to set a
         * single vec4 uniform you would use 4 for `n_components` and 1 for
         * `count`. To set an array of 8 float values, you could use 1 for
         * `n_components` and 8 for `count`.
         * @param uniform_location The uniform's location identifier
         * @param n_components The number of components in the corresponding uniform's type
         * @param count The number of values to set
         * @param value Pointer to the new values to set
         */
        set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any integer type uniform,
         * including int arrays and int vectors. For example, to set a single
         * ivec4 uniform you would use 4 for `n_components` and 1 for
         * `count`. To set an array of 8 int values, you could use 1 for
         * `n_components` and 8 for `count`.
         * @param uniform_location The uniform's location identifier
         * @param n_components The number of components in the corresponding uniform's type
         * @param count The number of values to set
         * @param value Pointer to the new values to set
         */
        set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any matrix type uniform, including
         * matrix arrays. For example, to set a single mat4 uniform you would
         * use 4 for `dimensions` and 1 for `count`. To set an array of 8
         * mat3 values, you could use 3 for `dimensions` and 8 for `count`.
         *
         * If `transpose` is %FALSE then the matrix is expected to be in
         * column-major order or if it is %TRUE then the matrix is in
         * row-major order. You can pass a #CoglMatrix by calling by passing
         * the result of cogl_matrix_get_array() in `value` and setting
         * `transpose` to %FALSE.
         * @param uniform_location The uniform's location identifier
         * @param dimensions The size of the matrix
         * @param count The number of values to set
         * @param transpose Whether to transpose the matrix
         * @param value Pointer to the new values to set
         */
        set_uniform_matrix(
            uniform_location: number,
            dimensions: number,
            count: number,
            transpose: boolean,
            value: number,
        ): void;
        /**
         * Associates a linked CoglProgram with the given pipeline so that the
         * program can take full control of vertex and/or fragment processing.
         *
         * This is an example of how it can be used to associate an ARBfp
         * program with a #CoglPipeline:
         *
         * ```
         * CoglHandle shader;
         * CoglHandle program;
         * CoglPipeline *pipeline;
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
         * pipeline = cogl_pipeline_new ();
         * cogl_pipeline_set_user_program (pipeline, program);
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
        set_user_program(program: Handle): void;
    }

    namespace Texture2D {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Texture2D extends Object implements Texture {
        static $gtype: GObject.GType<Texture2D>;

        // Constructors

        _init(...args: any[]): void;

        static new_from_bitmap(bitmap: Bitmap): Texture2D;
        // Conflicted with Cogl.Texture.new_from_bitmap

        static new_from_bitmap(...args: never[]): any;

        // Signals

        connect<K extends keyof Texture2D.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture2D.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Texture2D.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture2D.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Texture2D.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Texture2D.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        egl_image_external_alloc_finish(user_data?: any | null): void;
        egl_image_external_bind(): void;

        // Inherited methods
        /**
         * Explicitly allocates the storage for the given `texture` which
         * allows you to be sure that there is enough memory for the
         * texture and if not then the error can be handled gracefully.
         *
         * <note>Normally applications don't need to use this api directly
         * since the texture will be implicitly allocated when data is set on
         * the texture, or if the texture is attached to a #CoglOffscreen
         * framebuffer and rendered too.</note>
         * @returns %TRUE if the texture was successfully allocated,               otherwise %FALSE and @error will be updated if it               wasn't %NULL.
         */
        allocate(): boolean;
        /**
         * Queries what components the given `texture` stores internally as set
         * via cogl_texture_set_components().
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         */
        get_components(): TextureComponents;
        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * <note>Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture</note>
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of @data in bytes or pass 0 to calculate             from the bytes-per-pixel of @format multiplied by the             @texture width.
         * @param data memory location to write the @texture's contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(format: PixelFormat | null, rowstride: number, data: number): number;
        /**
         * Queries the GL handles for a GPU side texture through its #CoglTexture.
         *
         * If the texture is spliced the data for the first sub texture will be
         * queried.
         * @returns %TRUE if the handle was successfully retrieved, %FALSE   if the handle was invalid
         */
        get_gl_texture(): [boolean, number, number];
        /**
         * Queries the height of a cogl texture.
         * @returns the height of the GPU side texture in pixels
         */
        get_height(): number;
        /**
         * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
         * texture.
         * @returns the maximum waste
         */
        get_max_waste(): number;
        /**
         * Queries the pre-multiplied alpha status for internally stored red,
         * green and blue components for the given `texture` as set by
         * cogl_texture_set_premultiplied().
         *
         * By default the pre-multipled state is `TRUE`.
         * @returns %TRUE if red, green and blue components are               internally stored pre-multiplied by the alpha               value or %FALSE if not.
         */
        get_premultiplied(): boolean;
        /**
         * Queries the width of a cogl texture.
         * @returns the width of the GPU side texture in pixels
         */
        get_width(): number;
        /**
         * Queries if a texture is sliced (stored as multiple GPU side tecture
         * objects).
         * @returns %TRUE if the texture is sliced, %FALSE if the texture   is stored as a single GPU texture
         */
        is_sliced(): boolean;
        /**
         * Creates a new texture which represents a subregion of another
         * texture. The GL resources will be shared so that no new texture
         * data is actually allocated.
         *
         * Sub textures have undefined behaviour texture coordinates outside
         * of the range [0,1] are used. They also do not work with
         * CoglVertexBuffers.
         *
         * The sub texture will keep a reference to the full texture so you do
         * not need to keep one separately if you only want to use the sub
         * texture.
         * @param sub_x X coordinate of the top-left of the subregion
         * @param sub_y Y coordinate of the top-left of the subregion
         * @param sub_width Width in pixels of the subregion
         * @param sub_height Height in pixels of the subregion
         * @returns A newly created #CoglTexture or               %NULL on failure
         */
        new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture;
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
        set_components(components: TextureComponents | null): void;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * <note>Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.</note>
         * @param format the #CoglPixelFormat used in the source @data buffer.
         * @param rowstride rowstride of the source @data buffer (computed from             the texture width and @format if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(format: PixelFormat | null, rowstride: number, data: number, level: number): boolean;
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
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the pixels in a rectangular subregion of `texture` from an in-memory
         * buffer containing pixel data.
         *
         * <note>The region set can't be larger than the source `data<`/note>
         * @param src_x upper left coordinate to use from source data.
         * @param src_y upper left coordinate to use from source data.
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to @width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to @height)
         * @param width width of source data buffer.
         * @param height height of source data buffer.
         * @param format the #CoglPixelFormat used in the source buffer.
         * @param rowstride rowstride of source buffer (computed from width if none specified)
         * @param data the actual pixel data.
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            width: number,
            height: number,
            format: PixelFormat | null,
            rowstride: number,
            data: number,
        ): boolean;
        /**
         * Copies a specified source region from `bitmap` to the position
         * (`src_x,` `src_y)` of the given destination texture `handle`.
         *
         * <note>The region updated can't be larger than the source
         * bitmap</note>
         * @param src_x upper left coordinate to use from the source bitmap.
         * @param src_y upper left coordinate to use from the source bitmap
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to the bitmap width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to the bitmap height)
         * @param bitmap The source bitmap to read from
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region_from_bitmap(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            bitmap: Bitmap,
        ): boolean;
    }

    namespace Texture2DSliced {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    class Texture2DSliced extends Object implements Texture {
        static $gtype: GObject.GType<Texture2DSliced>;

        // Constructors

        _init(...args: any[]): void;

        static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;
        // Conflicted with Cogl.Texture.new_from_bitmap

        static new_from_bitmap(...args: never[]): any;

        // Signals

        connect<K extends keyof Texture2DSliced.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture2DSliced.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Texture2DSliced.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Texture2DSliced.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Texture2DSliced.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Texture2DSliced.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Explicitly allocates the storage for the given `texture` which
         * allows you to be sure that there is enough memory for the
         * texture and if not then the error can be handled gracefully.
         *
         * <note>Normally applications don't need to use this api directly
         * since the texture will be implicitly allocated when data is set on
         * the texture, or if the texture is attached to a #CoglOffscreen
         * framebuffer and rendered too.</note>
         * @returns %TRUE if the texture was successfully allocated,               otherwise %FALSE and @error will be updated if it               wasn't %NULL.
         */
        allocate(): boolean;
        /**
         * Queries what components the given `texture` stores internally as set
         * via cogl_texture_set_components().
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         */
        get_components(): TextureComponents;
        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * <note>Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture</note>
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of @data in bytes or pass 0 to calculate             from the bytes-per-pixel of @format multiplied by the             @texture width.
         * @param data memory location to write the @texture's contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(format: PixelFormat | null, rowstride: number, data: number): number;
        /**
         * Queries the GL handles for a GPU side texture through its #CoglTexture.
         *
         * If the texture is spliced the data for the first sub texture will be
         * queried.
         * @returns %TRUE if the handle was successfully retrieved, %FALSE   if the handle was invalid
         */
        get_gl_texture(): [boolean, number, number];
        /**
         * Queries the height of a cogl texture.
         * @returns the height of the GPU side texture in pixels
         */
        get_height(): number;
        /**
         * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
         * texture.
         * @returns the maximum waste
         */
        get_max_waste(): number;
        /**
         * Queries the pre-multiplied alpha status for internally stored red,
         * green and blue components for the given `texture` as set by
         * cogl_texture_set_premultiplied().
         *
         * By default the pre-multipled state is `TRUE`.
         * @returns %TRUE if red, green and blue components are               internally stored pre-multiplied by the alpha               value or %FALSE if not.
         */
        get_premultiplied(): boolean;
        /**
         * Queries the width of a cogl texture.
         * @returns the width of the GPU side texture in pixels
         */
        get_width(): number;
        /**
         * Queries if a texture is sliced (stored as multiple GPU side tecture
         * objects).
         * @returns %TRUE if the texture is sliced, %FALSE if the texture   is stored as a single GPU texture
         */
        is_sliced(): boolean;
        /**
         * Creates a new texture which represents a subregion of another
         * texture. The GL resources will be shared so that no new texture
         * data is actually allocated.
         *
         * Sub textures have undefined behaviour texture coordinates outside
         * of the range [0,1] are used. They also do not work with
         * CoglVertexBuffers.
         *
         * The sub texture will keep a reference to the full texture so you do
         * not need to keep one separately if you only want to use the sub
         * texture.
         * @param sub_x X coordinate of the top-left of the subregion
         * @param sub_y Y coordinate of the top-left of the subregion
         * @param sub_width Width in pixels of the subregion
         * @param sub_height Height in pixels of the subregion
         * @returns A newly created #CoglTexture or               %NULL on failure
         */
        new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture;
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
        set_components(components: TextureComponents | null): void;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * <note>Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.</note>
         * @param format the #CoglPixelFormat used in the source @data buffer.
         * @param rowstride rowstride of the source @data buffer (computed from             the texture width and @format if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(format: PixelFormat | null, rowstride: number, data: number, level: number): boolean;
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
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the pixels in a rectangular subregion of `texture` from an in-memory
         * buffer containing pixel data.
         *
         * <note>The region set can't be larger than the source `data<`/note>
         * @param src_x upper left coordinate to use from source data.
         * @param src_y upper left coordinate to use from source data.
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to @width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to @height)
         * @param width width of source data buffer.
         * @param height height of source data buffer.
         * @param format the #CoglPixelFormat used in the source buffer.
         * @param rowstride rowstride of source buffer (computed from width if none specified)
         * @param data the actual pixel data.
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            width: number,
            height: number,
            format: PixelFormat | null,
            rowstride: number,
            data: number,
        ): boolean;
        /**
         * Copies a specified source region from `bitmap` to the position
         * (`src_x,` `src_y)` of the given destination texture `handle`.
         *
         * <note>The region updated can't be larger than the source
         * bitmap</note>
         * @param src_x upper left coordinate to use from the source bitmap.
         * @param src_y upper left coordinate to use from the source bitmap
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to the bitmap width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to the bitmap height)
         * @param bitmap The source bitmap to read from
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region_from_bitmap(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            bitmap: Bitmap,
        ): boolean;
    }

    /**
     * A structure for holding a color definition. The contents of
     * the CoglColor structure are private and should never by accessed
     * directly.
     */
    class Color {
        static $gtype: GObject.GType<Color>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): Color;

        // Static methods

        /**
         * Compares two #CoglColor<!-- -->s and checks if they are the same.
         *
         * This function can be passed to g_hash_table_new() as the `key_equal_func`
         * parameter, when using #CoglColor<!-- -->s as keys in a #GHashTable.
         * @param v1 a #CoglColor
         * @param v2 a #CoglColor
         */
        static equal(v1?: any | null, v2?: any | null): boolean;
        /**
         * Converts a color expressed in HLS (hue, luminance and saturation)
         * values into a #CoglColor.
         * @param hue hue value, in the 0 .. 360 range
         * @param saturation saturation value, in the 0 .. 1 range
         * @param luminance luminance value, in the 0 .. 1 range
         */
        static init_from_hsl(hue: number, saturation: number, luminance: number): Color;

        // Methods

        /**
         * Creates a copy of `color`
         * @returns a newly-allocated #CoglColor. Use cogl_color_free()   to free the allocate resources
         */
        copy(): Color;
        /**
         * Frees the resources allocated by cogl_color_new() and cogl_color_copy()
         */
        free(): void;
        /**
         * Retrieves the alpha channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the alpha channel of the passed color
         */
        get_alpha(): number;
        /**
         * Retrieves the alpha channel of `color` as a byte value
         * between 0 and 255
         * @returns the alpha channel of the passed color
         */
        get_alpha_byte(): number;
        /**
         * Retrieves the alpha channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the alpha channel of the passed color
         */
        get_alpha_float(): number;
        /**
         * Retrieves the blue channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the blue channel of the passed color
         */
        get_blue(): number;
        /**
         * Retrieves the blue channel of `color` as a byte value
         * between 0 and 255
         * @returns the blue channel of the passed color
         */
        get_blue_byte(): number;
        /**
         * Retrieves the blue channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the blue channel of the passed color
         */
        get_blue_float(): number;
        /**
         * Retrieves the green channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the green channel of the passed color
         */
        get_green(): number;
        /**
         * Retrieves the green channel of `color` as a byte value
         * between 0 and 255
         * @returns the green channel of the passed color
         */
        get_green_byte(): number;
        /**
         * Retrieves the green channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the green channel of the passed color
         */
        get_green_float(): number;
        /**
         * Retrieves the red channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the red channel of the passed color
         */
        get_red(): number;
        /**
         * Retrieves the red channel of `color` as a byte value
         * between 0 and 255
         * @returns the red channel of the passed color
         */
        get_red_byte(): number;
        /**
         * Retrieves the red channel of `color` as a floating point
         * value between 0.0 and 1.0
         * @returns the red channel of the passed color
         */
        get_red_float(): number;
        /**
         * Sets the values of the passed channels into a #CoglColor
         * @param red value of the red channel, between 0 and 1.0
         * @param green value of the green channel, between 0 and 1.0
         * @param blue value of the blue channel, between 0 and 1.0
         * @param alpha value of the alpha channel, between 0 and 1.0
         */
        init_from_4f(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Sets the values of the passed channels into a #CoglColor
         * @param color_array a pointer to an array of 4 float color components
         */
        init_from_4fv(color_array: number): void;
        /**
         * Sets the values of the passed channels into a #CoglColor.
         * @param red value of the red channel, between 0 and 255
         * @param green value of the green channel, between 0 and 255
         * @param blue value of the blue channel, between 0 and 255
         * @param alpha value of the alpha channel, between 0 and 255
         */
        init_from_4ub(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Converts a non-premultiplied color to a pre-multiplied color. For
         * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
         * and (0.5, 0, 0, 0.5) when premultiplied.
         */
        premultiply(): void;
        /**
         * Sets the alpha channel of `color` to `alpha`.
         * @param alpha a float value between 0.0f and 1.0f
         */
        set_alpha(alpha: number): void;
        /**
         * Sets the alpha channel of `color` to `alpha`.
         * @param alpha a byte value between 0 and 255
         */
        set_alpha_byte(alpha: number): void;
        /**
         * Sets the alpha channel of `color` to `alpha`.
         * @param alpha a float value between 0.0f and 1.0f
         */
        set_alpha_float(alpha: number): void;
        /**
         * Sets the blue channel of `color` to `blue`.
         * @param blue a float value between 0.0f and 1.0f
         */
        set_blue(blue: number): void;
        /**
         * Sets the blue channel of `color` to `blue`.
         * @param blue a byte value between 0 and 255
         */
        set_blue_byte(blue: number): void;
        /**
         * Sets the blue channel of `color` to `blue`.
         * @param blue a float value between 0.0f and 1.0f
         */
        set_blue_float(blue: number): void;
        /**
         * Sets the values of the passed channels into a #CoglColor
         * @param red value of the red channel, between 0 and %1.0
         * @param green value of the green channel, between 0 and %1.0
         * @param blue value of the blue channel, between 0 and %1.0
         * @param alpha value of the alpha channel, between 0 and %1.0
         */
        set_from_4f(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Sets the values of the passed channels into a #CoglColor.
         * @param red value of the red channel, between 0 and 255
         * @param green value of the green channel, between 0 and 255
         * @param blue value of the blue channel, between 0 and 255
         * @param alpha value of the alpha channel, between 0 and 255
         */
        set_from_4ub(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Sets the green channel of `color` to `green`.
         * @param green a float value between 0.0f and 1.0f
         */
        set_green(green: number): void;
        /**
         * Sets the green channel of `color` to `green`.
         * @param green a byte value between 0 and 255
         */
        set_green_byte(green: number): void;
        /**
         * Sets the green channel of `color` to `green`.
         * @param green a float value between 0.0f and 1.0f
         */
        set_green_float(green: number): void;
        /**
         * Sets the red channel of `color` to `red`.
         * @param red a float value between 0.0f and 1.0f
         */
        set_red(red: number): void;
        /**
         * Sets the red channel of `color` to `red`.
         * @param red a byte value between 0 and 255
         */
        set_red_byte(red: number): void;
        /**
         * Sets the red channel of `color` to `red`.
         * @param red a float value between 0.0f and 1.0f
         */
        set_red_float(red: number): void;
        /**
         * Converts `color` to the HLS format.
         *
         * The `hue` value is in the 0 .. 360 range. The `luminance` and
         * `saturation` values are in the 0 .. 1 range.
         */
        to_hsl(): [number, number, number];
        /**
         * Converts a pre-multiplied color to a non-premultiplied color. For
         * example, semi-transparent red is (0.5, 0, 0, 0.5) when premultiplied
         * and (1.0, 0, 0, 0.5) when non-premultiplied.
         */
        unpremultiply(): void;
    }

    /**
     * This struct is used to pass information to the callback when
     * cogl_debug_object_foreach_type() is called.
     */
    class DebugObjectTypeInfo {
        static $gtype: GObject.GType<DebugObjectTypeInfo>;

        // Fields

        name: string;
        instance_count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                instance_count: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class Euler {
        static $gtype: GObject.GType<Euler>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * An opaque type that tracks a #CoglFrameCallback and associated user
     * data. A #CoglFrameClosure pointer will be returned from
     * cogl_onscreen_add_frame_callback() and it allows you to remove a
     * callback later using cogl_onscreen_remove_frame_callback().
     */
    class FrameClosure {
        static $gtype: GObject.GType<FrameClosure>;

        // Constructors

        _init(...args: any[]): void;
    }

    class Material {
        static $gtype: GObject.GType<Material>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): Material;

        // Static methods

        /**
         * Increment the reference count for a #CoglMaterial.
         * @param material a #CoglMaterial object.
         */
        static ref(material: Handle): Handle;
        /**
         * Decrement the reference count for a #CoglMaterial.
         * @param material a #CoglMaterial object.
         */
        static unref(material: Handle): void;

        // Methods

        /**
         * Creates a new material with the configuration copied from the
         * source material.
         *
         * We would strongly advise developers to always aim to use
         * cogl_material_copy() instead of cogl_material_new() whenever there will
         * be any similarity between two materials. Copying a material helps Cogl
         * keep track of a materials ancestry which we may use to help minimize GPU
         * state changes.
         * @returns a pointer to the newly allocated #CoglMaterial
         */
        copy(): Material;
        /**
         * Iterates all the layer indices of the given `material`.
         * @param callback A #CoglMaterialLayerCallback to be called for each            layer index
         */
        foreach_layer(callback: MaterialLayerCallback): void;
        /**
         * Retrieves the current ambient color for `material`
         * @param ambient The location to store the ambient color
         */
        get_ambient(ambient: Color): void;
        /**
         * Retrieves the current material color.
         */
        get_color(): Color;
        /**
         * Retrieves the current diffuse color for `material`
         * @param diffuse The location to store the diffuse color
         */
        get_diffuse(diffuse: Color): void;
        /**
         * Retrieves the materials current emission color.
         * @param emission The location to store the emission color
         */
        get_emission(emission: Color): void;
        /**
         * Gets whether point sprite coordinate generation is enabled for this
         * texture layer.
         * @param layer_index the layer number to check.
         * @returns whether the texture coordinates will be replaced with point sprite coordinates.
         */
        get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
        /**
         * Returns the wrap mode for the 'p' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 'p' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_p(layer_index: number): MaterialWrapMode;
        /**
         * Returns the wrap mode for the 's' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 's' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_s(layer_index: number): MaterialWrapMode;
        /**
         * Returns the wrap mode for the 't' coordinate of texture lookups on this
         * layer.
         * @param layer_index the layer number to change.
         * @returns the wrap mode for the 't' coordinate of texture lookups on this layer.
         */
        get_layer_wrap_mode_t(layer_index: number): MaterialWrapMode;
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
         * @returns A    list of #CoglMaterialLayer<!-- -->'s that can be passed to the    cogl_material_layer_* functions. The list is owned by Cogl and it    should not be modified or freed    Deprecated: 1.16: Use cogl_pipeline_get_layers() instead
         */
        get_layers(): MaterialLayer[];
        /**
         * Retrieves the number of layers defined for the given `material`
         * @returns the number of layers
         */
        get_n_layers(): number;
        /**
         * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the vertex buffer API.
         * @returns the point size of the material.
         */
        get_point_size(): number;
        /**
         * Retrieves the materials current emission color.
         * @returns The materials current shininess value
         */
        get_shininess(): number;
        /**
         * Retrieves the materials current specular color.
         * @param specular The location to store the specular color
         */
        get_specular(specular: Color): void;
        /**
         * Queries what user program has been associated with the given
         * `material` using cogl_material_set_user_program().
         * @returns The current user program   or %COGL_INVALID_HANDLE.
         */
        get_user_program(): Handle;
        /**
         * This function removes a layer from your material
         * @param layer_index Specifies the layer you want to remove
         */
        remove_layer(layer_index: number): void;
        /**
         * Before a primitive is blended with the framebuffer, it goes through an
         * alpha test stage which lets you discard fragments based on the current
         * alpha value. This function lets you change the function used to evaluate
         * the alpha channel, and thus determine which fragments are discarded
         * and which continue on to the blending stage.
         *
         * The default is %COGL_MATERIAL_ALPHA_FUNC_ALWAYS
         * @param alpha_func A @CoglMaterialAlphaFunc constant
         * @param alpha_reference A reference point that the chosen alpha function uses   to compare incoming fragments to.
         */
        set_alpha_test_function(alpha_func: MaterialAlphaFunc | null, alpha_reference: number): void;
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
        set_ambient(ambient: Color): void;
        /**
         * Conveniently sets the diffuse and ambient color of `material` at the same
         * time. See cogl_material_set_ambient() and cogl_material_set_diffuse().
         *
         * The default ambient color is (0.2, 0.2, 0.2, 1.0)
         *
         * The default diffuse color is (0.8, 0.8, 0.8, 1.0)
         * @param color The components of the desired ambient and diffuse colors
         */
        set_ambient_and_diffuse(color: Color): void;
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
         *
         * ```
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
         *
         * ```
         *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
         * ```
         *
         *
         * That gives normal alpha-blending when the calculated color for the material
         * is in premultiplied form.
         * @param blend_string A <link linkend="cogl-Blend-Strings">Cogl blend string</link>   describing the desired blend function.
         * @returns %TRUE if the blend string was successfully parsed, and the   described blending is supported by the underlying driver/hardware. If   there was an error, %FALSE is returned and @error is set accordingly (if   present).
         */
        set_blend(blend_string: string): boolean;
        /**
         * When blending is setup to reference a CONSTANT blend factor then
         * blending will depend on the constant set with this function.
         * @param constant_color The constant color you want
         */
        set_blend_constant(constant_color: Color): void;
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
        set_color(color: Color): void;
        /**
         * Sets the basic color of the material, used when no lighting is enabled.
         *
         * The default value is (1.0, 1.0, 1.0, 1.0)
         * @param red The red component
         * @param green The green component
         * @param blue The blue component
         * @param alpha The alpha component
         */
        set_color4f(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Sets the basic color of the material, used when no lighting is enabled.
         *
         * The default value is (0xff, 0xff, 0xff, 0xff)
         * @param red The red component
         * @param green The green component
         * @param blue The blue component
         * @param alpha The alpha component
         */
        set_color4ub(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Sets the material's diffuse color, in the standard OpenGL lighting
         * model. The diffuse color is most intense where the light hits the
         * surface directly - perpendicular to the surface.
         *
         * The default value is (0.8, 0.8, 0.8, 1.0)
         * @param diffuse The components of the desired diffuse color
         */
        set_diffuse(diffuse: Color): void;
        /**
         * Sets the material's emissive color, in the standard OpenGL lighting
         * model. It will look like the surface is a light source emitting this
         * color.
         *
         * The default value is (0.0, 0.0, 0.0, 1.0)
         * @param emission The components of the desired emissive color
         */
        set_emission(emission: Color): void;
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
        set_layer(layer_index: number, texture: Handle): void;
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
         * @returns %TRUE if the blend string was successfully parsed, and the   described texture combining is supported by the underlying driver and   or hardware. On failure, %FALSE is returned and @error is set
         */
        set_layer_combine(layer_index: number, blend_string: string): boolean;
        /**
         * When you are using the 'CONSTANT' color source in a layer combine
         * description then you can use this function to define its value.
         * @param layer_index Specifies the layer you want to specify a constant used               for texture combining
         * @param constant The constant color you want
         */
        set_layer_combine_constant(layer_index: number, constant: Color): void;
        /**
         * Changes the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         * @param layer_index the layer number to change.
         * @param min_filter the filter used when scaling a texture down.
         * @param mag_filter the filter used when magnifying a texture.
         */
        set_layer_filters(
            layer_index: number,
            min_filter: MaterialFilter | null,
            mag_filter: MaterialFilter | null,
        ): void;
        /**
         * This function lets you set a matrix that can be used to e.g. translate
         * and rotate a single layer of a material used to fill your geometry.
         * @param layer_index the index for the layer inside @material
         * @param matrix the transformation matrix for the layer
         */
        set_layer_matrix(layer_index: number, matrix: Matrix): void;
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
         * @returns %TRUE if the function succeeds, %FALSE otherwise.
         */
        set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean;
        /**
         * Sets the wrap mode for all three coordinates of texture lookups on
         * this layer. This is equivalent to calling
         * cogl_material_set_layer_wrap_mode_s(),
         * cogl_material_set_layer_wrap_mode_t() and
         * cogl_material_set_layer_wrap_mode_p() separately.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode(layer_index: number, mode: MaterialWrapMode | null): void;
        /**
         * Sets the wrap mode for the 'p' coordinate of texture lookups on
         * this layer. 'p' is the third coordinate.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_p(layer_index: number, mode: MaterialWrapMode | null): void;
        /**
         * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_s(layer_index: number, mode: MaterialWrapMode | null): void;
        /**
         * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_t(layer_index: number, mode: MaterialWrapMode | null): void;
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
        set_point_size(point_size: number): void;
        /**
         * Sets the shininess of the material, in the standard OpenGL lighting
         * model, which determines the size of the specular highlights. A
         * higher `shininess` will produce smaller highlights which makes the
         * object appear more shiny.
         *
         * The default value is 0.0
         * @param shininess The desired shininess; must be >= 0.0
         */
        set_shininess(shininess: number): void;
        /**
         * Sets the material's specular color, in the standard OpenGL lighting
         * model. The intensity of the specular color depends on the viewport
         * position, and is brightest along the lines of reflection.
         *
         * The default value is (0.0, 0.0, 0.0, 1.0)
         * @param specular The components of the desired specular color
         */
        set_specular(specular: Color): void;
        /**
         * Associates a linked CoglProgram with the given material so that the
         * program can take full control of vertex and/or fragment processing.
         *
         * This is an example of how it can be used to associate an ARBfp
         * program with a #CoglMaterial:
         *
         * ```
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
        set_user_program(program: Handle): void;
    }

    abstract class MaterialLayer {
        static $gtype: GObject.GType<MaterialLayer>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Queries the currently set downscaling filter for a material later
         * @returns the current downscaling filter
         */
        get_mag_filter(): MaterialFilter;
        /**
         * Queries the currently set downscaling filter for a material layer
         * @returns the current downscaling filter
         */
        get_min_filter(): MaterialFilter;
        /**
         * Extracts a texture handle for a specific layer.
         *
         * <note>In the future Cogl may support purely GLSL based layers; for those
         * layers this function which will likely return %COGL_INVALID_HANDLE if you
         * try to get the texture handle from them. Considering this scenario, you
         * should call cogl_material_layer_get_type() first in order check it is of
         * type %COGL_MATERIAL_LAYER_TYPE_TEXTURE before calling this function.</note>
         * @returns a #CoglHandle for the texture inside the layer
         */
        get_texture(): Handle;
        /**
         * Retrieves the type of the layer
         *
         * Currently there is only one type of layer defined:
         * %COGL_MATERIAL_LAYER_TYPE_TEXTURE, but considering we may add purely GLSL
         * based layers in the future, you should write code that checks the type
         * first.
         * @returns the type of the layer
         */
        get_type(): MaterialLayerType;
        /**
         * Gets the wrap mode for the 'p' coordinate of texture lookups on
         * this layer. 'p' is the third coordinate.
         * @returns the wrap mode value for the p coordinate.
         */
        get_wrap_mode_p(): MaterialWrapMode;
        /**
         * Gets the wrap mode for the 's' coordinate of texture lookups on this layer.
         * @returns the wrap mode value for the s coordinate.
         */
        get_wrap_mode_s(): MaterialWrapMode;
        /**
         * Gets the wrap mode for the 't' coordinate of texture lookups on this layer.
         * @returns the wrap mode value for the t coordinate.
         */
        get_wrap_mode_t(): MaterialWrapMode;
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
     *
     * ```
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
     */
    class Matrix {
        static $gtype: GObject.GType<Matrix>;

        // Fields

        xx: number;
        yx: number;
        zx: number;
        wx: number;
        xy: number;
        yy: number;
        zy: number;
        wy: number;
        xz: number;
        yz: number;
        zz: number;
        wz: number;
        xw: number;
        yw: number;
        zw: number;
        ww: number;

        // Constructors

        constructor(
            properties?: Partial<{
                xx: number;
                yx: number;
                zx: number;
                wx: number;
                xy: number;
                yy: number;
                zy: number;
                wy: number;
                xz: number;
                yz: number;
                zz: number;
                wz: number;
                xw: number;
                yw: number;
                zw: number;
                ww: number;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Compares two matrices to see if they represent the same
         * transformation. Although internally the matrices may have different
         * annotations associated with them and may potentially have a cached
         * inverse matrix these are not considered in the comparison.
         * @param v1 A 4x4 transformation matrix
         * @param v2 A 4x4 transformation matrix
         */
        static equal(v1?: any | null, v2?: any | null): boolean;

        // Methods

        /**
         * Allocates a new #CoglMatrix on the heap and initializes it with
         * the same values as `matrix`.
         * @returns A newly allocated #CoglMatrix which should be freed using cogl_matrix_free()
         */
        copy(): Matrix;
        /**
         * Frees a #CoglMatrix that was previously allocated via a call to
         * cogl_matrix_copy().
         */
        free(): void;
        /**
         * Multiplies `matrix` by the given frustum perspective matrix.
         * @param left X position of the left clipping plane where it   intersects the near clipping plane
         * @param right X position of the right clipping plane where it   intersects the near clipping plane
         * @param bottom Y position of the bottom clipping plane where it   intersects the near clipping plane
         * @param top Y position of the top clipping plane where it intersects   the near clipping plane
         * @param z_near The distance to the near clipping plane (Must be positive)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Casts `matrix` to a float array which can be directly passed to OpenGL.
         * @returns a pointer to the float array
         */
        get_array(): number;
        /**
         * Gets the inverse transform of a given matrix and uses it to initialize
         * a new #CoglMatrix.
         *
         * <note>Although the first parameter is annotated as const to indicate
         * that the transform it represents isn't modified this function may
         * technically save a copy of the inverse transform within the given
         * #CoglMatrix so that subsequent requests for the inverse transform may
         * avoid costly inversion calculations.</note>
         * @returns %TRUE if the inverse was successfully calculated or %FALSE   for degenerate transformations that can't be inverted (in this case the   @inverse matrix will simply be initialized with the identity matrix)
         */
        get_inverse(): [boolean, Matrix];
        /**
         * Initializes `matrix` with the contents of `array`
         * @param array A linear array of 16 floats (column-major order)
         */
        init_from_array(array: number): void;
        /**
         * Initializes `matrix` from a #CoglEuler rotation.
         * @param euler A #CoglEuler
         */
        init_from_euler(euler: Euler): void;
        /**
         * Initializes `matrix` from a #CoglQuaternion rotation.
         * @param quaternion A #CoglQuaternion
         */
        init_from_quaternion(quaternion: Quaternion): void;
        /**
         * Resets matrix to the identity matrix:
         *
         *
         * ```
         *   .xx=1; .xy=0; .xz=0; .xw=0;
         *   .yx=0; .yy=1; .yz=0; .yw=0;
         *   .zx=0; .zy=0; .zz=1; .zw=0;
         *   .wx=0; .wy=0; .wz=0; .ww=1;
         * ```
         *
         */
        init_identity(): void;
        /**
         * Resets matrix to the (tx, ty, tz) translation matrix:
         *
         *
         * ```
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
        init_translation(tx: number, ty: number, tz: number): void;
        /**
         * Determines if the given matrix is an identity matrix.
         * @returns %TRUE if @matrix is an identity matrix else %FALSE
         */
        is_identity(): boolean;
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
        look_at(
            eye_position_x: number,
            eye_position_y: number,
            eye_position_z: number,
            object_x: number,
            object_y: number,
            object_z: number,
            world_up_x: number,
            world_up_y: number,
            world_up_z: number,
        ): void;
        /**
         * Multiplies the two supplied matrices together and stores
         * the resulting matrix inside `result`.
         *
         * <note>It is possible to multiply the `a` matrix in-place, so
         * `result` can be equal to `a` but can't be equal to `b`.</note>
         * @param a A 4x4 transformation matrix
         * @param b A 4x4 transformation matrix
         */
        multiply(a: Matrix, b: Matrix): void;
        /**
         * Multiplies `matrix` by a parallel projection matrix.
         * @param left The coordinate for the left clipping plane
         * @param right The coordinate for the right clipping plane
         * @param bottom The coordinate for the bottom clipping plane
         * @param top The coordinate for the top clipping plane
         * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         */
        ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
        /**
         * Multiplies `matrix` by a parallel projection matrix.
         * @param x_1 The x coordinate for the first vertical clipping plane
         * @param y_1 The y coordinate for the first horizontal clipping plane
         * @param x_2 The x coordinate for the second vertical clipping plane
         * @param y_2 The y coordinate for the second horizontal clipping plane
         * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         */
        orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
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
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Projects an array of input points and writes the result to another
         * array of output points. The input points can either have 2, 3 or 4
         * components each. The output points always have 4 components (known
         * as homogenous coordinates). The output array can simply point to
         * the input array to do the transform in-place.
         *
         * Here's an example with differing input/output strides:
         *
         * ```
         * typedef struct {
         *   float x,y;
         *   uint8_t r,g,b,a;
         *   float s,t,p;
         * } MyInVertex;
         * typedef struct {
         *   uint8_t r,g,b,a;
         *   float x,y,z;
         * } MyOutVertex;
         * MyInVertex vertices[N_VERTICES];
         * MyOutVertex results[N_VERTICES];
         * CoglMatrix matrix;
         *
         * my_load_vertices (vertices);
         * my_get_matrix (&matrix);
         *
         * cogl_matrix_project_points (&matrix,
         *                             2,
         *                             sizeof (MyInVertex),
         *                             &vertices[0].x,
         *                             sizeof (MyOutVertex),
         *                             &results[0].x,
         *                             N_VERTICES);
         * ```
         *
         * @param n_components The number of position components for each input point.                (either 2, 3 or 4)
         * @param stride_in The stride in bytes between input points.
         * @param points_in A pointer to the first component of the first input point.
         * @param stride_out The stride in bytes between output points.
         * @param points_out A pointer to the first component of the first output point.
         * @param n_points The number of points to transform.
         */
        project_points(
            n_components: number,
            stride_in: number,
            points_in: any | null,
            stride_out: number,
            points_out: any | null,
            n_points: number,
        ): void;
        /**
         * Multiplies `matrix` with a rotation matrix that applies a rotation
         * of `angle` degrees around the specified 3D vector.
         * @param angle The angle you want to rotate in degrees
         * @param x X component of your rotation vector
         * @param y Y component of your rotation vector
         * @param z Z component of your rotation vector
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies `matrix` with a rotation transformation described by the
         * given #CoglEuler.
         * @param euler A euler describing a rotation
         */
        rotate_euler(euler: Euler): void;
        /**
         * Multiplies `matrix` with a rotation transformation described by the
         * given #CoglQuaternion.
         * @param quaternion A quaternion describing a rotation
         */
        rotate_quaternion(quaternion: Quaternion): void;
        /**
         * Multiplies `matrix` with a transform matrix that scales along the X,
         * Y and Z axis.
         * @param sx The X scale factor
         * @param sy The Y scale factor
         * @param sz The Z scale factor
         */
        scale(sx: number, sy: number, sz: number): void;
        /**
         * Transforms a point whos position is given and returned as four float
         * components.
         * @param x The X component of your points position
         * @param y The Y component of your points position
         * @param z The Z component of your points position
         * @param w The W component of your points position
         */
        transform_point(x: number, y: number, z: number, w: number): [number, number, number, number];
        /**
         * Transforms an array of input points and writes the result to
         * another array of output points. The input points can either have 2
         * or 3 components each. The output points always have 3 components.
         * The output array can simply point to the input array to do the
         * transform in-place.
         *
         * If you need to transform 4 component points see
         * cogl_matrix_project_points().
         *
         * Here's an example with differing input/output strides:
         *
         * ```
         * typedef struct {
         *   float x,y;
         *   uint8_t r,g,b,a;
         *   float s,t,p;
         * } MyInVertex;
         * typedef struct {
         *   uint8_t r,g,b,a;
         *   float x,y,z;
         * } MyOutVertex;
         * MyInVertex vertices[N_VERTICES];
         * MyOutVertex results[N_VERTICES];
         * CoglMatrix matrix;
         *
         * my_load_vertices (vertices);
         * my_get_matrix (&matrix);
         *
         * cogl_matrix_transform_points (&matrix,
         *                               2,
         *                               sizeof (MyInVertex),
         *                               &vertices[0].x,
         *                               sizeof (MyOutVertex),
         *                               &results[0].x,
         *                               N_VERTICES);
         * ```
         *
         * @param n_components The number of position components for each input point.                (either 2 or 3)
         * @param stride_in The stride in bytes between input points.
         * @param points_in A pointer to the first component of the first input point.
         * @param stride_out The stride in bytes between output points.
         * @param points_out A pointer to the first component of the first output point.
         * @param n_points The number of points to transform.
         */
        transform_points(
            n_components: number,
            stride_in: number,
            points_in: any | null,
            stride_out: number,
            points_out: any | null,
            n_points: number,
        ): void;
        /**
         * Multiplies `matrix` with a transform matrix that translates along
         * the X, Y and Z axis.
         * @param x The X translation you want to apply
         * @param y The Y translation you want to apply
         * @param z The Z translation you want to apply
         */
        translate(x: number, y: number, z: number): void;
        /**
         * Replaces `matrix` with its transpose. Ie, every element (i,j) in the
         * new matrix is taken from element (j,i) in the old matrix.
         */
        transpose(): void;
        /**
         * Multiplies `matrix` by a view transform that maps the 2D coordinates
         * (0,0) top left and (`width_2`d,`height_2`d) bottom right the full viewport
         * size. Geometry at a depth of 0 will now lie on this 2D plane.
         *
         * Note: this doesn't multiply the matrix by any projection matrix,
         * but it assumes you have a perspective projection as defined by
         * passing the corresponding arguments to cogl_matrix_frustum().
         *
         * Toolkits such as Clutter that mix 2D and 3D drawing can use this to
         * create a 2D coordinate system within a 3D perspective projected
         * view frustum.
         * @param left coord of left vertical clipping plane
         * @param right coord of right vertical clipping plane
         * @param bottom coord of bottom horizontal clipping plane
         * @param top coord of top horizontal clipping plane
         * @param z_near The distance to the near clip plane. Never pass 0 and always pass   a positive number.
         * @param z_2d The distance to the 2D plane. (Should always be positive and   be between @z_near and the z_far value that was passed to   cogl_matrix_frustum())
         * @param width_2d The width of the 2D coordinate system
         * @param height_2d The height of the 2D coordinate system
         */
        view_2d_in_frustum(
            left: number,
            right: number,
            bottom: number,
            top: number,
            z_near: number,
            z_2d: number,
            width_2d: number,
            height_2d: number,
        ): void;
        /**
         * Multiplies `matrix` by a view transform that maps the 2D coordinates
         * (0,0) top left and (`width_2`d,`height_2`d) bottom right the full viewport
         * size. Geometry at a depth of 0 will now lie on this 2D plane.
         *
         * Note: this doesn't multiply the matrix by any projection matrix,
         * but it assumes you have a perspective projection as defined by
         * passing the corresponding arguments to cogl_matrix_perspective().
         *
         * Toolkits such as Clutter that mix 2D and 3D drawing can use this to
         * create a 2D coordinate system within a 3D perspective projected
         * view frustum.
         * @param fov_y A field of view angle for the Y axis
         * @param aspect The ratio of width to height determining the field of view angle   for the x axis.
         * @param z_near The distance to the near clip plane. Never pass 0 and always pass   a positive number.
         * @param z_2d The distance to the 2D plane. (Should always be positive and   be between @z_near and the z_far value that was passed to   cogl_matrix_frustum())
         * @param width_2d The width of the 2D coordinate system
         * @param height_2d The height of the 2D coordinate system
         */
        view_2d_in_perspective(
            fov_y: number,
            aspect: number,
            z_near: number,
            z_2d: number,
            width_2d: number,
            height_2d: number,
        ): void;
    }

    /**
     * An opaque type that tracks a #CoglOnscreenDirtyCallback and associated
     * user data. A #CoglOnscreenDirtyClosure pointer will be returned from
     * cogl_onscreen_add_dirty_callback() and it allows you to remove a
     * callback later using cogl_onscreen_remove_dirty_callback().
     */
    class OnscreenDirtyClosure {
        static $gtype: GObject.GType<OnscreenDirtyClosure>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A structure passed to callbacks registered using
     * cogl_onscreen_add_dirty_callback(). The members describe a
     * rectangle within the onscreen buffer that should be redrawn.
     */
    class OnscreenDirtyInfo {
        static $gtype: GObject.GType<OnscreenDirtyInfo>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * An opaque type that tracks a #CoglOnscreenResizeCallback and
     * associated user data. A #CoglOnscreenResizeClosure pointer will be
     * returned from cogl_onscreen_add_resize_callback() and it allows you
     * to remove a callback later using
     * cogl_onscreen_remove_resize_callback().
     */
    class OnscreenResizeClosure {
        static $gtype: GObject.GType<OnscreenResizeClosure>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class Quaternion {
        static $gtype: GObject.GType<Quaternion>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Used to specify vertex information when calling cogl_polygon()
     */
    class TextureVertex {
        static $gtype: GObject.GType<TextureVertex>;

        // Fields

        x: number;
        y: number;
        z: number;
        tx: number;
        ty: number;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A #CoglUserDataKey is used to declare a key for attaching data to a
     * #CoglObject using cogl_object_set_user_data. The typedef only exists as a
     * formality to make code self documenting since only the unique address of a
     * #CoglUserDataKey is used.
     *
     * Typically you would declare a static #CoglUserDataKey and set private data
     * on an object something like this:
     *
     *
     * ```
     * static CoglUserDataKey path_private_key;
     *
     * static void
     * destroy_path_private_cb (void *data)
     * {
     *   g_free (data);
     * }
     *
     * static void
     * my_path_set_data (CoglPath *path, void *data)
     * {
     *   cogl_object_set_user_data (COGL_OBJECT (path),
     *                              &private_key,
     *                              data,
     *                              destroy_path_private_cb);
     * }
     * ```
     *
     */
    class UserDataKey {
        static $gtype: GObject.GType<UserDataKey>;

        // Fields

        unused: number;

        // Constructors

        constructor(
            properties?: Partial<{
                unused: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class _ColorSizeCheck {
        static $gtype: GObject.GType<_ColorSizeCheck>;

        // Fields

        compile_time_assert_CoglColor_size: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                compile_time_assert_CoglColor_size: number[];
            }>,
        );
        _init(...args: any[]): void;
    }

    class _MatrixSizeCheck {
        static $gtype: GObject.GType<_MatrixSizeCheck>;

        // Fields

        compile_time_assert_CoglMatrix_size: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                compile_time_assert_CoglMatrix_size: number[];
            }>,
        );
        _init(...args: any[]): void;
    }

    class _TextureVertexSizeCheck {
        static $gtype: GObject.GType<_TextureVertexSizeCheck>;

        // Fields

        compile_time_assert_CoglTextureVertex_size: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                compile_time_assert_CoglTextureVertex_size: number[];
            }>,
        );
        _init(...args: any[]): void;
    }

    export interface FramebufferNamespace {
        prototype: Framebuffer;

        error_quark(): number;
    }
    interface Framebuffer extends Object {
        // Methods

        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * <note>Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.</note>
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        allocate(): boolean;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param color The color to clear the color buffer too if specified in         @buffers.
         */
        clear(buffers: number, color: Color): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of #CoglBufferBit<!-- -->'s identifying which auxiliary   buffers to clear
         * @param red The red component of color to clear the color buffer too if       specified in @buffers.
         * @param green The green component of color to clear the color buffer too if         specified in @buffers.
         * @param blue The blue component of color to clear the color buffer too if        specified in @buffers.
         * @param alpha The alpha component of color to clear the color buffer too if         specified in @buffers.
         */
        clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
        /**
         * Declares that the specified `buffers` no longer need to be referenced
         * by any further rendering commands. This can be an important
         * optimization to avoid subsequent frames of rendering depending on
         * the results of a previous frame.
         *
         * For example; some tile-based rendering GPUs are able to avoid allocating and
         * accessing system memory for the depth and stencil buffer so long as these
         * buffers are not required as input for subsequent frames and that can save a
         * significant amount of memory bandwidth used to save and restore their
         * contents to system memory between frames.
         *
         * It is currently considered an error to try and explicitly discard the color
         * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
         * already implicitly discard when you finish rendering to a #CoglOnscreen
         * framebuffer, and it's not meaningful to try and discard the color buffer of
         * a #CoglOffscreen framebuffer since they are single-buffered.
         * @param buffers A #CoglBufferBit mask of which ancillary buffers you want           to discard.
         */
        discard_buffers(buffers: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` with the given `pipeline`
         * state with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`). As a pipeline may
         * contain multiple texture layers this interface lets you supply
         * texture coordinates for each layer of the pipeline.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture for the first layer such as
         * #CoglTexture2DSliced textures which may internally be comprised of
         * multiple low-level textures.  This is unlike low-level drawing apis
         * such as cogl_primitive_draw() which only support low level texture
         * types that are directly supported by GPUs such as #CoglTexture2D.
         *
         * <note>This api can not currently handle multiple high-level meta
         * texture layers. The first layer may be a high level meta texture
         * such as #CoglTexture2DSliced but all other layers much be low
         * level textures such as #CoglTexture2D and additionally they
         * should be textures that can be sampled using normalized coordinates
         * (so not #CoglTextureRectangle textures).</note>
         *
         * The top left texture coordinate for layer 0 of any pipeline will be
         * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
         * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
         * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
         * tex_coords[7]) and so on...
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * which normally implies working with non-normalized texture
         * coordinates this api should still be passed normalized texture
         * coordinates.</note>
         *
         * The first pair of coordinates are for the first layer (with the
         * smallest layer index) and if you supply less texture coordinates
         * than there are layers in the current source material then default
         * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param tex_coords An array containing groups of   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture   coordinates; one for the top left texel, and one for the bottom right   texel. Each value should be between 0.0 and 1.0, where the coordinate   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the   bottom right.
         * @param tex_coords_len The length of the @tex_coords array. (For one layer   and one group of texture coordinates, this would be 4)
         */
        draw_multitextured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            tex_coords: number[],
            tex_coords_len: number,
        ): void;
        /**
         * Draws a rectangle to `framebuffer` with the given `pipeline` state
         * and with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * <note>If you want to describe a rectangle with a texture mapped on
         * it then you can use
         * cogl_framebuffer_draw_textured_rectangle().</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 X coordinate of the top-left corner
         * @param y_1 Y coordinate of the top-left corner
         * @param x_2 X coordinate of the bottom-right corner
         * @param y_2 Y coordinate of the bottom-right corner
         */
        draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_rectangle() does.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The positions for
         * the second rectangle are (coordinates[4], coordinates[5]) and
         * (coordinates[6], coordinates[7]) and so on...
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array of coordinates   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are   interpreted as two position coordinates; one for the top left of   the rectangle (x1, y1), and one for the bottom right of the   rectangle (x2, y2).
         * @param n_rectangles number of rectangles defined in @coordinates.
         */
        draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` using the given
         * `pipeline` state with the top left corner positioned at (`x_1`, `y_1`)
         * and the bottom right corner positioned at (`x_2`, `y_2`). The top
         * left corner will have texture coordinates of (`s_1`, `t_1`) and the
         * bottom right corner will have texture coordinates of (`s_2`, `t_2`).
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * <note>The given texture coordinates will only be used for the first
         * texture layer of the pipeline and if your pipeline has more than
         * one layer then all other layers will have default texture
         * coordinates of `s_1`=0.0 `t_1`=0.0 `s_2`=1.0 `t_2`=1.0 </note>
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in `s_1`=0, `t_1`=0, `s_2`=1, `t_2`=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * with one of your `pipeline` layers which normally implies working
         * with non-normalized texture coordinates this api should still be
         * passed normalized texture coordinates.</note>
         * @param pipeline A #CoglPipeline state object
         * @param x_1 x coordinate upper left on screen.
         * @param y_1 y coordinate upper left on screen.
         * @param x_2 x coordinate lower right on screen.
         * @param y_2 y coordinate lower right on screen.
         * @param s_1 S texture coordinate of the top-left coorner
         * @param t_1 T texture coordinate of the top-left coorner
         * @param s_2 S texture coordinate of the bottom-right coorner
         * @param t_2 T texture coordinate of the bottom-right coorner
         */
        draw_textured_rectangle(
            pipeline: Pipeline,
            x_1: number,
            y_1: number,
            x_2: number,
            y_2: number,
            s_1: number,
            t_1: number,
            s_2: number,
            t_2: number,
        ): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_textured_rectangle() does.
         *
         * <note>The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.</note>
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The top left
         * texture coordinate is (coordinates[4], coordinates[5]) and the
         * bottom right texture coordinate is (coordinates[6],
         * coordinates[7]). The coordinates for subsequent rectangles
         * are defined similarly by the subsequent coordinates.
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * <note>Even if you have associated a #CoglTextureRectangle texture
         * which normally implies working with non-normalized texture
         * coordinates this api should still be passed normalized texture
         * coordinates.</note>
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array containing   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]   that have the same meaning as the arguments for   cogl_framebuffer_draw_textured_rectangle().
         * @param n_rectangles number of rectangles to @coordinates to draw
         */
        draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * This blocks the CPU until all pending rendering associated with the
         * specified framebuffer has completed. It's very rare that developers should
         * ever need this level of synchronization with the GPU and should never be
         * used unless you clearly understand why you need to explicitly force
         * synchronization.
         *
         * One example might be for benchmarking purposes to be sure timing
         * measurements reflect the time that the GPU is busy for not just the time it
         * takes to queue rendering commands.
         */
        finish(): void;
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
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Retrieves the number of alpha bits of `framebuffer`
         * @returns the number of bits
         */
        get_alpha_bits(): number;
        /**
         * Retrieves the number of blue bits of `framebuffer`
         * @returns the number of bits
         */
        get_blue_bits(): number;
        /**
         * Gets the current #CoglColorMask of which channels would be written to the
         * current framebuffer. Each bit set in the mask means that the
         * corresponding color would be written.
         * @returns A #CoglColorMask
         */
        get_color_mask(): ColorMask;
        /**
         * Retrieves the number of depth bits of `framebuffer`
         * @returns the number of bits
         */
        get_depth_bits(): number;
        /**
         * Retrieves the depth buffer of `framebuffer` as a #CoglTexture. You need to
         * call cogl_framebuffer_get_depth_texture(fb, TRUE); before using this
         * function.
         *
         * <note>Calling this function implicitely allocates the framebuffer.</note>
         * <note>The texture returned stays valid as long as the framebuffer stays
         * valid.</note>
         * @returns the depth texture
         */
        get_depth_texture(): Texture;
        /**
         * Queries whether texture based depth buffer has been enabled via
         * cogl_framebuffer_set_depth_texture_enabled().
         * @returns %TRUE if a depth texture has been enabled, else               %FALSE.
         */
        get_depth_texture_enabled(): boolean;
        /**
         * Queries whether depth buffer writing is enabled for `framebuffer`. This
         * can be controlled via cogl_framebuffer_set_depth_write_enabled().
         * @returns %TRUE if depth writing is enabled or %FALSE if not.
         */
        get_depth_write_enabled(): boolean;
        /**
         * Returns whether dithering has been requested for the given `framebuffer`.
         * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
         *
         * <note>This may return %TRUE even when the underlying `framebuffer`
         * display pipeline does not support dithering. This value only represents
         * the user's request for dithering.</note>
         * @returns %TRUE if dithering has been requested or %FALSE if not.
         */
        get_dither_enabled(): boolean;
        /**
         * Retrieves the number of green bits of `framebuffer`
         * @returns the number of bits
         */
        get_green_bits(): number;
        /**
         * Queries the current height of the given `framebuffer`.
         * @returns The height of @framebuffer.
         */
        get_height(): number;
        get_is_stereo(): boolean;
        /**
         * Stores the current model-view matrix in `matrix`.
         */
        get_modelview_matrix(): Matrix;
        /**
         * Stores the current projection matrix in `matrix`.
         */
        get_projection_matrix(): Matrix;
        /**
         * Retrieves the number of red bits of `framebuffer`
         * @returns the number of bits
         */
        get_red_bits(): number;
        /**
         * Gets the number of points that are sampled per-pixel when
         * rasterizing geometry. Usually by default this will return 0 which
         * means that single-sample not multisample rendering has been chosen.
         * When using a GPU supporting multisample rendering it's possible to
         * increase the number of samples per pixel using
         * cogl_framebuffer_set_samples_per_pixel().
         *
         * Calling cogl_framebuffer_get_samples_per_pixel() before the
         * framebuffer has been allocated will simply return the value set
         * using cogl_framebuffer_set_samples_per_pixel(). After the
         * framebuffer has been allocated the value will reflect the actual
         * number of samples that will be made by the GPU.
         * @returns The number of point samples made per pixel when          rasterizing geometry or 0 if single-sample rendering          has been chosen.
         */
        get_samples_per_pixel(): number;
        /**
         * Gets the current #CoglStereoMode, which defines which stereo buffers
         * should be drawn to. See cogl_framebuffer_set_stereo_mode().
         * @returns A #CoglStereoMode
         */
        get_stereo_mode(): StereoMode;
        /**
         * Queries the x, y, width and height components of the current viewport as set
         * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
         * framebuffer_width and framebuffer_height.  The values are written into the
         * given `viewport` array.
         */
        get_viewport4fv(): number[];
        /**
         * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the height of the framebuffer.
         * @returns The height of the viewport.
         */
        get_viewport_height(): number;
        /**
         * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the width of the framebuffer.
         * @returns The width of the viewport.
         */
        get_viewport_width(): number;
        /**
         * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The x coordinate of the viewport origin.
         */
        get_viewport_x(): number;
        /**
         * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         * @returns The y coordinate of the viewport origin.
         */
        get_viewport_y(): number;
        /**
         * Queries the current width of the given `framebuffer`.
         * @returns The width of @framebuffer.
         */
        get_width(): number;
        /**
         * Resets the current model-view matrix to the identity matrix.
         */
        identity_matrix(): void;
        /**
         * Replaces the current projection matrix with an orthographic projection
         * matrix.
         * @param x_1 The x coordinate for the first vertical clipping plane
         * @param y_1 The y coordinate for the first horizontal clipping plane
         * @param x_2 The x coordinate for the second vertical clipping plane
         * @param y_2 The y coordinate for the second horizontal clipping plane
         * @param near The <emphasis>distance</emphasis> to the near clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         * @param far The <emphasis>distance</emphasis> to the far clipping   plane (will be <emphasis>negative</emphasis> if the plane is   behind the viewer)
         */
        orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * based on the provided values.
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
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Reverts the clipping region to the state before the last call to
         * cogl_framebuffer_push_scissor_clip(), cogl_framebuffer_push_rectangle_clip()
         * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
         */
        pop_clip(): void;
        /**
         * Restores the model-view matrix on the top of the matrix stack.
         */
        pop_matrix(): void;
        /**
         * Copies the current model-view matrix onto the matrix stack. The matrix
         * can later be restored with cogl_framebuffer_pop_matrix().
         */
        push_matrix(): void;
        /**
         * Specifies a modelview transformed rectangular clipping area for all
         * subsequent drawing operations. Any drawing commands that extend
         * outside the rectangle will be clipped so that only the portion
         * inside the rectangle will be displayed. The rectangle dimensions
         * are transformed by the current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x_1 x coordinate for top left corner of the clip rectangle
         * @param y_1 y coordinate for top left corner of the clip rectangle
         * @param x_2 x coordinate for bottom right corner of the clip rectangle
         * @param y_2 y coordinate for bottom right corner of the clip rectangle
         */
        push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Specifies a rectangular clipping area for all subsequent drawing
         * operations. Any drawing commands that extend outside the rectangle
         * will be clipped so that only the portion inside the rectangle will
         * be displayed. The rectangle dimensions are not transformed by the
         * current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         * @param x left edge of the clip rectangle in window coordinates
         * @param y top edge of the clip rectangle in window coordinates
         * @param width width of the clip rectangle
         * @param height height of the clip rectangle
         */
        push_scissor_clip(x: number, y: number, width: number, height: number): void;
        /**
         * This is a convenience wrapper around
         * cogl_framebuffer_read_pixels_into_bitmap() which allocates a
         * temporary #CoglBitmap to read pixel data directly into the given
         * buffer. The rowstride of the buffer is assumed to be the width of
         * the region times the bytes per pixel of the format. The source for
         * the data is always taken from the color buffer. If you want to use
         * any other rowstride or source, please use the
         * cogl_framebuffer_read_pixels_into_bitmap() function directly.
         *
         * The implementation of the function looks like this:
         *
         *
         * ```
         * bitmap = cogl_bitmap_new_for_data (context,
         *                                    width, height,
         *                                    format,
         *                                    /<!-- -->* rowstride *<!-- -->/
         *                                    bpp * width,
         *                                    pixels);
         * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
         *                                           x, y,
         *                                           COGL_READ_PIXELS_COLOR_BUFFER,
         *                                           bitmap);
         * cogl_object_unref (bitmap);
         * ```
         *
         * @param x The x position to read from
         * @param y The y position to read from
         * @param width The width of the region of rectangles to read
         * @param height The height of the region of rectangles to read
         * @param format The pixel format to store the data in
         * @param pixels The address of the buffer to store the data in
         * @returns %TRUE if the read succeeded or %FALSE otherwise.
         */
        read_pixels(
            x: number,
            y: number,
            width: number,
            height: number,
            format: PixelFormat | null,
            pixels: number,
        ): boolean;
        /**
         * This reads a rectangle of pixels from the given framebuffer where
         * position (0, 0) is the top left. The pixel at (x, y) is the first
         * read, and a rectangle of pixels with the same size as the bitmap is
         * read right and downwards from that point.
         *
         * Currently Cogl assumes that the framebuffer is in a premultiplied
         * format so if the format of `bitmap` is non-premultiplied it will
         * convert it. To read the pixel values without any conversion you
         * should either specify a format that doesn't use an alpha channel or
         * use one of the formats ending in PRE.
         * @param x The x position to read from
         * @param y The y position to read from
         * @param source Identifies which auxillary buffer you want to read          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
         * @param bitmap The bitmap to store the results in.
         * @returns %TRUE if the read succeeded or %FALSE otherwise. The  function is only likely to fail if the bitmap points to a pixel  buffer and it could not be mapped.
         */
        read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags | null, bitmap: Bitmap): boolean;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples_region()) to explicitly resolve
         * the point samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Since Cogl will automatically ensure samples are resolved if the
         * target color buffer is used as a source this API only needs to be
         * used if explicit control is desired - perhaps because you want to
         * ensure that the resolve is completed in advance to avoid later
         * having to wait for the resolve to complete.
         *
         * If you are performing incremental updates to a framebuffer you
         * should consider using cogl_framebuffer_resolve_samples_region()
         * instead to avoid resolving redundant pixels.
         */
        resolve_samples(): void;
        /**
         * When point sample rendering (also known as multisample rendering)
         * has been enabled via cogl_framebuffer_set_samples_per_pixel()
         * then you can optionally call this function (or
         * cogl_framebuffer_resolve_samples()) to explicitly resolve the point
         * samples into values for the final color buffer.
         *
         * Some GPUs will implicitly resolve the point samples during
         * rendering and so this function is effectively a nop, but with other
         * architectures it is desirable to defer the resolve step until the
         * end of the frame.
         *
         * Use of this API is recommended if incremental, small updates to
         * a framebuffer are being made because by default Cogl will
         * implicitly resolve all the point samples of the framebuffer which
         * can result in redundant work if only a small number of samples have
         * changed.
         *
         * Because some GPUs implicitly resolve point samples this function
         * only guarantees that at-least the region specified will be resolved
         * and if you have rendered to a larger region then it's possible that
         * other samples may be implicitly resolved.
         * @param x top-left x coordinate of region to resolve
         * @param y top-left y coordinate of region to resolve
         * @param width width of region to resolve
         * @param height height of region to resolve
         */
        resolve_samples_region(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates the
         * model around the axis-vector specified by `x,` `y` and `z`. The
         * rotation follows the right-hand thumb rule so for example rotating
         * by 10 degrees about the axis-vector (0, 0, 1) causes a small
         * counter-clockwise rotation.
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `euler`.
         * @param euler A #CoglEuler
         */
        rotate_euler(euler: Euler): void;
        /**
         * Multiplies the current model-view matrix by one that rotates
         * according to the rotation described by `quaternion`.
         * @param quaternion A #CoglQuaternion
         */
        rotate_quaternion(quaternion: Quaternion): void;
        /**
         * Multiplies the current model-view matrix by one that scales the x,
         * y and z axes by the given values.
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Defines a bit mask of which color channels should be written to the
         * given `framebuffer`. If a bit is set in `color_mask` that means that
         * color will be written.
         * @param color_mask A #CoglColorMask of which color channels to write to              the current framebuffer.
         */
        set_color_mask(color_mask: ColorMask | null): void;
        /**
         * If `enabled` is #TRUE, the depth buffer used when rendering to `framebuffer`
         * is available as a texture. You can retrieve the texture with
         * cogl_framebuffer_get_depth_texture().
         *
         * <note>It's possible that your GPU does not support depth textures. You
         * should check the %COGL_FEATURE_ID_DEPTH_TEXTURE feature before using this
         * function.</note>
         * <note>It's not valid to call this function after the framebuffer has been
         * allocated as the creation of the depth texture is done at allocation time.
         * </note>
         * @param enabled TRUE or FALSE
         */
        set_depth_texture_enabled(enabled: boolean): void;
        /**
         * Enables or disables depth buffer writing when rendering to `framebuffer`.
         * If depth writing is enabled for both the framebuffer and the rendering
         * pipeline, and the framebuffer has an associated depth buffer, depth
         * information will be written to this buffer during rendering.
         *
         * Depth buffer writing is enabled by default.
         * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
         */
        set_depth_write_enabled(depth_write_enabled: boolean): void;
        /**
         * Enables or disabled dithering if supported by the hardware.
         *
         * Dithering is a hardware dependent technique to increase the visible
         * color resolution beyond what the underlying hardware supports by playing
         * tricks with the colors placed into the framebuffer to give the illusion
         * of other colors. (For example this can be compared to half-toning used
         * by some news papers to show varying levels of grey even though their may
         * only be black and white are available).
         *
         * If the current display pipeline for `framebuffer` does not support dithering
         * then this has no affect.
         *
         * Dithering is enabled by default.
         * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
         */
        set_dither_enabled(dither_enabled: boolean): void;
        /**
         * Sets `matrix` as the new model-view matrix.
         * @param matrix the new model-view matrix
         */
        set_modelview_matrix(matrix: Matrix): void;
        /**
         * Sets `matrix` as the new projection matrix.
         * @param matrix the new projection matrix
         */
        set_projection_matrix(matrix: Matrix): void;
        /**
         * Requires that when rendering to `framebuffer` then `n` point samples
         * should be made per pixel which will all contribute to the final
         * resolved color for that pixel. The idea is that the hardware aims
         * to get quality similar to what you would get if you rendered
         * everything twice as big (for 4 samples per pixel) and then scaled
         * that image back down with filtering. It can effectively remove the
         * jagged edges of polygons and should be more efficient than if you
         * were to manually render at a higher resolution and downscale
         * because the hardware is often able to take some shortcuts. For
         * example the GPU may only calculate a single texture sample for all
         * points of a single pixel, and for tile based architectures all the
         * extra sample data (such as depth and stencil samples) may be
         * handled on-chip and so avoid increased demand on system memory
         * bandwidth.
         *
         * By default this value is usually set to 0 and that is referred to
         * as "single-sample" rendering. A value of 1 or greater is referred
         * to as "multisample" rendering.
         *
         * <note>There are some semantic differences between single-sample
         * rendering and multisampling with just 1 point sample such as it
         * being redundant to use the cogl_framebuffer_resolve_samples() and
         * cogl_framebuffer_resolve_samples_region() apis with single-sample
         * rendering.</note>
         *
         * <note>It's recommended that
         * cogl_framebuffer_resolve_samples_region() be explicitly used at the
         * end of rendering to a point sample buffer to minimize the number of
         * samples that get resolved. By default Cogl will implicitly resolve
         * all framebuffer samples but if only a small region of a
         * framebuffer has changed this can lead to redundant work being
         * done.</note>
         * @param samples_per_pixel The minimum number of samples per pixel
         */
        set_samples_per_pixel(samples_per_pixel: number): void;
        /**
         * Sets which stereo buffers should be drawn to. The default
         * is %COGL_STEREO_BOTH, which means that both the left and
         * right buffers will be affected by drawing. For this to have
         * an effect, the display system must support stereo drawables,
         * and the framebuffer must have been created with stereo
         * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
         * cogl_framebuffer_get_is_stereo().)
         * @param stereo_mode A #CoglStereoMode specifying which stereo buffers               should be drawn tow.
         */
        set_stereo_mode(stereo_mode: StereoMode | null): void;
        /**
         * Defines a scale and offset for everything rendered relative to the
         * top-left of the destination framebuffer.
         *
         * By default the viewport has an origin of (0,0) and width and height
         * that match the framebuffer's size. Assuming a default projection and
         * modelview matrix then you could translate the contents of a window
         * down and right by leaving the viewport size unchanged by moving the
         * offset to (10,10). The viewport coordinates are measured in pixels.
         * If you left the x and y origin as (0,0) you could scale the windows
         * contents down by specify and width and height that's half the real
         * size of the framebuffer.
         *
         * <note>Although the function takes floating point arguments, existing
         * drivers only allow the use of integer values. In the future floating
         * point values will be exposed via a checkable feature.</note>
         * @param x The top-left x coordinate of the viewport origin (only integers     supported currently)
         * @param y The top-left y coordinate of the viewport origin (only integers     supported currently)
         * @param width The width of the viewport (only integers supported currently)
         * @param height The height of the viewport (only integers supported currently)
         */
        set_viewport(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by the given matrix.
         * @param matrix the matrix to multiply with the current model-view
         */
        transform(matrix: Matrix): void;
        /**
         * Multiplies the current model-view matrix by one that translates the
         * model along all three axes according to the given values.
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }

    export const Framebuffer: FramebufferNamespace & {
        new (): Framebuffer; // This allows `obj instanceof Framebuffer`
    };

    export interface TextureNamespace {
        prototype: Texture;

        error_quark(): number;
        /**
         * Creates a #CoglTexture from a #CoglBitmap.
         * @param bitmap A #CoglBitmap pointer
         * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
         * @param internal_format the #CoglPixelFormat to use for the GPU storage of the texture
         */
        new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture;
        /**
         * Creates a new #CoglTexture based on data residing in memory.
         * @param width width of texture in pixels
         * @param height height of texture in pixels
         * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
         * @param format the #CoglPixelFormat the buffer is stored in in RAM
         * @param internal_format the #CoglPixelFormat that will be used for storing    the buffer on the GPU. If COGL_PIXEL_FORMAT_ANY is given then a    premultiplied format similar to the format of the source data will    be used. The default blending equations of Cogl expect premultiplied    color data; the main use of passing a non-premultiplied format here    is if you have non-premultiplied source data and are going to adjust    the blend mode (see cogl_material_set_blend()) or use the data for    something other than straight blending.
         * @param rowstride the memory offset in bytes between the starts of    scanlines in @data
         * @param data pointer the memory region where the source buffer resides
         */
        new_from_data(
            width: number,
            height: number,
            flags: TextureFlags,
            format: PixelFormat,
            internal_format: PixelFormat,
            rowstride: number,
            data: number,
        ): Texture;
        /**
         * Creates a #CoglTexture from an image file.
         * @param filename the file to load
         * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
         * @param internal_format the #CoglPixelFormat to use for the GPU storage of the    texture. If %COGL_PIXEL_FORMAT_ANY is given then a premultiplied    format similar to the format of the source data will be used. The    default blending equations of Cogl expect premultiplied color data;    the main use of passing a non-premultiplied format here is if you    have non-premultiplied source data and are going to adjust the blend    mode (see cogl_material_set_blend()) or use the data for something    other than straight blending.
         */
        new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture;
        /**
         * Creates a #CoglTexture based on an existing OpenGL texture; the
         * width, height and format are passed along since it is not always
         * possible to query these from OpenGL.
         *
         * The waste arguments allow you to create a Cogl texture that maps to
         * a region smaller than the real OpenGL texture. For instance if your
         * hardware only supports power-of-two textures you may load a
         * non-power-of-two image into a larger power-of-two texture and use
         * the waste arguments to tell Cogl which region should be mapped to
         * the texture coordinate range [0:1].
         * @param gl_handle opengl handle of foreign texture.
         * @param gl_target opengl target type of foreign texture
         * @param width width of foreign texture
         * @param height height of foreign texture.
         * @param x_pot_waste horizontal waste on the right hand edge of the texture.
         * @param y_pot_waste vertical waste on the bottom edge of the texture.
         * @param format format of the foreign texture.
         */
        new_from_foreign(
            gl_handle: number,
            gl_target: number,
            width: number,
            height: number,
            x_pot_waste: number,
            y_pot_waste: number,
            format: PixelFormat,
        ): Texture;
        /**
         * Creates a new #CoglTexture with the specified dimensions and pixel format.
         * @param width width of texture in pixels.
         * @param height height of texture in pixels.
         * @param flags Optional flags for the texture, or %COGL_TEXTURE_NONE
         * @param internal_format the #CoglPixelFormat to use for the GPU storage of the    texture.
         */
        new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture;
    }
    interface Texture extends Object {
        // Methods

        /**
         * Explicitly allocates the storage for the given `texture` which
         * allows you to be sure that there is enough memory for the
         * texture and if not then the error can be handled gracefully.
         *
         * <note>Normally applications don't need to use this api directly
         * since the texture will be implicitly allocated when data is set on
         * the texture, or if the texture is attached to a #CoglOffscreen
         * framebuffer and rendered too.</note>
         * @returns %TRUE if the texture was successfully allocated,               otherwise %FALSE and @error will be updated if it               wasn't %NULL.
         */
        allocate(): boolean;
        /**
         * Queries what components the given `texture` stores internally as set
         * via cogl_texture_set_components().
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         */
        get_components(): TextureComponents;
        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * <note>Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture</note>
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of @data in bytes or pass 0 to calculate             from the bytes-per-pixel of @format multiplied by the             @texture width.
         * @param data memory location to write the @texture's contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(format: PixelFormat | null, rowstride: number, data: number): number;
        /**
         * Queries the GL handles for a GPU side texture through its #CoglTexture.
         *
         * If the texture is spliced the data for the first sub texture will be
         * queried.
         * @returns %TRUE if the handle was successfully retrieved, %FALSE   if the handle was invalid
         */
        get_gl_texture(): [boolean, number, number];
        /**
         * Queries the height of a cogl texture.
         * @returns the height of the GPU side texture in pixels
         */
        get_height(): number;
        /**
         * Queries the maximum wasted (unused) pixels in one dimension of a GPU side
         * texture.
         * @returns the maximum waste
         */
        get_max_waste(): number;
        /**
         * Queries the pre-multiplied alpha status for internally stored red,
         * green and blue components for the given `texture` as set by
         * cogl_texture_set_premultiplied().
         *
         * By default the pre-multipled state is `TRUE`.
         * @returns %TRUE if red, green and blue components are               internally stored pre-multiplied by the alpha               value or %FALSE if not.
         */
        get_premultiplied(): boolean;
        /**
         * Queries the width of a cogl texture.
         * @returns the width of the GPU side texture in pixels
         */
        get_width(): number;
        /**
         * Queries if a texture is sliced (stored as multiple GPU side tecture
         * objects).
         * @returns %TRUE if the texture is sliced, %FALSE if the texture   is stored as a single GPU texture
         */
        is_sliced(): boolean;
        /**
         * Creates a new texture which represents a subregion of another
         * texture. The GL resources will be shared so that no new texture
         * data is actually allocated.
         *
         * Sub textures have undefined behaviour texture coordinates outside
         * of the range [0,1] are used. They also do not work with
         * CoglVertexBuffers.
         *
         * The sub texture will keep a reference to the full texture so you do
         * not need to keep one separately if you only want to use the sub
         * texture.
         * @param sub_x X coordinate of the top-left of the subregion
         * @param sub_y Y coordinate of the top-left of the subregion
         * @param sub_width Width in pixels of the subregion
         * @param sub_height Height in pixels of the subregion
         * @returns A newly created #CoglTexture or               %NULL on failure
         */
        new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture;
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
        set_components(components: TextureComponents | null): void;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * <note>Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.</note>
         * @param format the #CoglPixelFormat used in the source @data buffer.
         * @param rowstride rowstride of the source @data buffer (computed from             the texture width and @format if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(format: PixelFormat | null, rowstride: number, data: number, level: number): boolean;
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
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the pixels in a rectangular subregion of `texture` from an in-memory
         * buffer containing pixel data.
         *
         * <note>The region set can't be larger than the source `data<`/note>
         * @param src_x upper left coordinate to use from source data.
         * @param src_y upper left coordinate to use from source data.
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to @width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to @height)
         * @param width width of source data buffer.
         * @param height height of source data buffer.
         * @param format the #CoglPixelFormat used in the source buffer.
         * @param rowstride rowstride of source buffer (computed from width if none specified)
         * @param data the actual pixel data.
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            width: number,
            height: number,
            format: PixelFormat | null,
            rowstride: number,
            data: number,
        ): boolean;
        /**
         * Copies a specified source region from `bitmap` to the position
         * (`src_x,` `src_y)` of the given destination texture `handle`.
         *
         * <note>The region updated can't be larger than the source
         * bitmap</note>
         * @param src_x upper left coordinate to use from the source bitmap.
         * @param src_y upper left coordinate to use from the source bitmap
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less   than or equal to the bitmap width)
         * @param dst_height height of destination region to write. (Must be less   than or equal to the bitmap height)
         * @param bitmap The source bitmap to read from
         * @returns %TRUE if the subregion upload was successful, and   %FALSE otherwise
         */
        set_region_from_bitmap(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            bitmap: Bitmap,
        ): boolean;
    }

    export const Texture: TextureNamespace & {
        new (): Texture; // This allows `obj instanceof Texture`
    };

    type Angle = number;
    type Handle = any;
    type UserDataDestroyCallback = GLib.DestroyNotify;
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

export default Cogl;

// END
