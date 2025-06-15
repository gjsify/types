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
import type xlib from '@girs/xlib-2.0';
import type Mtk from '@girs/mtk-14';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GL from '@girs/gl-1.0';

export namespace Cogl {
    /**
     * Cogl-14
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
     * operations.
     */

    /**
     * Error codes that can be thrown when performing bitmap
     * operations.
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

    export namespace BufferBindTarget {
        export const $gtype: GObject.GType<BufferBindTarget>;
    }

    enum BufferBindTarget {
        PIXEL_PACK,
        PIXEL_UNPACK,
        ATTRIBUTE_BUFFER,
        INDEX_BUFFER,
        COUNT,
    }
    /**
     * Error enumeration for #CoglBuffer
     */

    /**
     * Error enumeration for #CoglBuffer
     */
    export namespace BufferError {
        export const $gtype: GObject.GType<BufferError>;
    }

    enum BufferError {
        /**
         * A buffer could not be mapped either
         *    because the feature isn't supported or because a system
         *    limitation was hit.
         */
        MAP,
    }
    /**
     * The update hint on a buffer allows the user to give some detail on how often
     * the buffer data is going to be updated.
     */

    /**
     * The update hint on a buffer allows the user to give some detail on how often
     * the buffer data is going to be updated.
     */
    export namespace BufferUpdateHint {
        export const $gtype: GObject.GType<BufferUpdateHint>;
    }

    enum BufferUpdateHint {
        /**
         * the buffer will not change over time
         */
        STATIC,
        /**
         * the buffer will change from time to time
         */
        DYNAMIC,
        /**
         * the buffer will be used once or a couple of
         *   times
         */
        STREAM,
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
     * Identifiers for underlying hardware drivers that may be used by
     * Cogl for rendering.
     */

    /**
     * Identifiers for underlying hardware drivers that may be used by
     * Cogl for rendering.
     */
    export namespace Driver {
        export const $gtype: GObject.GType<Driver>;
    }

    enum Driver {
        /**
         * Implies no preference for which driver is used
         */
        ANY,
        /**
         * A No-Op driver.
         */
        NOP,
        /**
         * An OpenGL driver using the core GL 3.1 profile
         */
        GL3,
        /**
         * An OpenGL ES 2.0 driver.
         */
        GLES2,
    }
    /**
     * All the capabilities that can vary between different GPUs supported
     * by Cogl. Applications that depend on any of these features should explicitly
     * check for them using cogl_has_feature() or cogl_has_features().
     */

    /**
     * All the capabilities that can vary between different GPUs supported
     * by Cogl. Applications that depend on any of these features should explicitly
     * check for them using cogl_has_feature() or cogl_has_features().
     */
    export namespace FeatureID {
        export const $gtype: GObject.GType<FeatureID>;
    }

    enum FeatureID {
        /**
         * Set if
         *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
         *     cogl_indices_new().
         */
        OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
        /**
         * Whether cogl_buffer_map() is
         *     supported with CoglBufferAccess including read support.
         */
        OGL_FEATURE_ID_MAP_BUFFER_FOR_READ,
        /**
         * Whether cogl_buffer_map() is
         *     supported with CoglBufferAccess including write support.
         */
        OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE,
        OGL_FEATURE_ID_FENCE,
        /**
         * Support for
         *    %COGL_TEXTURE_COMPONENTS_RG as the internal components of a
         *    texture.
         */
        OGL_FEATURE_ID_TEXTURE_RG,
        /**
         * Support for 10bpc RGBA formats
         */
        OGL_FEATURE_ID_TEXTURE_RGBA1010102,
        /**
         * Support for half float formats
         */
        OGL_FEATURE_ID_TEXTURE_HALF_FLOAT,
        /**
         * Support for 16bpc formats
         */
        OGL_FEATURE_ID_TEXTURE_NORM16,
        /**
         * Available if the age of #CoglOnscreen back
         *    buffers are tracked and so cogl_onscreen_get_buffer_age() can be
         *    expected to return age values other than 0.
         */
        OGL_FEATURE_ID_BUFFER_AGE,
        OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL,
        /**
         * Whether blitting using
         *    cogl_blit_framebuffer() is supported.
         */
        OGL_FEATURE_ID_BLIT_FRAMEBUFFER,
        OGL_FEATURE_ID_TIMESTAMP_QUERY,
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
     * A frame may not be completed before the next frame can start
     * so applications should avoid needing to collect all statistics for
     * a particular frame before they can start a new frame.
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
     * A frame may not be completed before the next frame can start
     * so applications should avoid needing to collect all statistics for
     * a particular frame before they can start a new frame.
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
     * All the error values that might be returned by
     * cogl_get_graphics_reset_status(). Each value's meaning corresponds
     * to the similarly named value defined in the ARB_robustness and
     * NV_robustness_video_memory_purge extensions.
     */

    /**
     * All the error values that might be returned by
     * cogl_get_graphics_reset_status(). Each value's meaning corresponds
     * to the similarly named value defined in the ARB_robustness and
     * NV_robustness_video_memory_purge extensions.
     */
    export namespace GraphicsResetStatus {
        export const $gtype: GObject.GType<GraphicsResetStatus>;
    }

    enum GraphicsResetStatus {
        NO_ERROR,
        GUILTY_CONTEXT_RESET,
        INNOCENT_CONTEXT_RESET,
        UNKNOWN_CONTEXT_RESET,
        PURGED_CONTEXT_RESET,
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
        R_8,
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
         * RGBX, 32 bits
         */
        RGBX_8888,
        /**
         * RGBA, 32 bits
         */
        RGBA_8888,
        /**
         * BGRX, 32 bits
         */
        BGRX_8888,
        /**
         * BGRA, 32 bits
         */
        BGRA_8888,
        /**
         * XRGB, 32 bits
         */
        XRGB_8888,
        /**
         * ARGB, 32 bits
         */
        ARGB_8888,
        /**
         * XBGR, 32 bits
         */
        XBGR_8888,
        /**
         * ABGR, 32 bits
         */
        ABGR_8888,
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
         * RGBA, 32 bits, 10 bpc
         */
        RGBA_1010102,
        /**
         * BGRA, 32 bits, 10 bpc
         */
        BGRA_1010102,
        /**
         * XRGB, 32 bits, 10 bpc
         */
        XRGB_2101010,
        /**
         * ARGB, 32 bits, 10 bpc
         */
        ARGB_2101010,
        /**
         * XBGR, 32 bits, 10 bpc
         */
        XBGR_2101010,
        /**
         * ABGR, 32 bits, 10 bpc
         */
        ABGR_2101010,
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
        /**
         * RGBX half floating point, 64 bit
         */
        RGBX_FP_16161616,
        /**
         * RGBA half floating point, 64 bit
         */
        RGBA_FP_16161616,
        /**
         * BGRX half floating point, 64 bit
         */
        BGRX_FP_16161616,
        /**
         * BGRA half floating point, 64 bit
         */
        BGRA_FP_16161616,
        XRGB_FP_16161616,
        /**
         * ARGB half floating point, 64 bit
         */
        ARGB_FP_16161616,
        XBGR_FP_16161616,
        /**
         * ABGR half floating point, 64 bit
         */
        ABGR_FP_16161616,
        /**
         * Premultiplied RGBA half floating point, 64 bit
         */
        RGBA_FP_16161616_PRE,
        /**
         * Premultiplied BGRA half floating point, 64 bit
         */
        BGRA_FP_16161616_PRE,
        /**
         * Premultiplied ARGB half floating point, 64 bit
         */
        ARGB_FP_16161616_PRE,
        /**
         * Premultiplied ABGR half floating point, 64 bit
         */
        ABGR_FP_16161616_PRE,
        /**
         * RGBA floating point, 128 bit
         */
        RGBA_FP_32323232,
        /**
         * Premultiplied RGBA floating point, 128 bit
         */
        RGBA_FP_32323232_PRE,
        /**
         * Single luminance component, 16 bits
         */
        R_16,
        /**
         * RG, 32 bits
         */
        RG_1616,
        /**
         * RGBA, 64 bits, 16bpc
         */
        RGBA_16161616,
        RGBA_16161616_PRE,
        DEPTH_16,
        DEPTH_24_STENCIL_8,
    }
    /**
     * A bitmask of events that Cogl may need to wake on for a file
     * descriptor. Note that these all have the same values as the
     * corresponding defines for the poll function call on Unix so they
     * may be directly passed to poll.
     */

    /**
     * A bitmask of events that Cogl may need to wake on for a file
     * descriptor. Note that these all have the same values as the
     * corresponding defines for the poll function call on Unix so they
     * may be directly passed to poll.
     */
    export namespace PollFDEvent {
        export const $gtype: GObject.GType<PollFDEvent>;
    }

    enum PollFDEvent {
        /**
         * there is data to read
         */
        IN,
        /**
         * data can be written (without blocking)
         */
        PRI,
        /**
         * there is urgent data to read.
         */
        OUT,
        /**
         * error condition
         */
        ERR,
        /**
         * hung up (the connection has been broken, usually
         *                          for pipes and sockets).
         */
        HUP,
        /**
         * invalid request. The file descriptor is not open.
         */
        NVAL,
    }

    export namespace RendererError {
        export const $gtype: GObject.GType<RendererError>;
    }

    enum RendererError {
        XLIB_DISPLAY_OPEN,
        BAD_CONSTRAINT,
    }

    export namespace ScanoutError {
        export const $gtype: GObject.GType<ScanoutError>;
    }

    enum ScanoutError {
        /**
         * Scanout inhibited
         */
        SCANOUT_ERROR_INHIBITED,
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
         * A program for processing vertices
         */
        VERTEX,
        /**
         * A program for processing fragments
         */
        FRAGMENT,
    }
    /**
     * #CoglSnippetHook is used to specify a location within a
     * #CoglPipeline where the code of the snippet should be used when it
     * is attached to a pipeline.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX_GLOBALS`
     *
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the vertex processing. Any declarations here can be
     * shared with all other snippets that are attached to a vertex hook.
     * Only the ‘declarations’ string is used and the other strings are
     * ignored.
     *
     * - `COGL_SNIPPET_HOOK_FRAGMENT_GLOBALS`
     *
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the fragment processing. Any declarations here can be
     * shared with all other snippets that are attached to a fragment
     * hook. Only the ‘declarations’ string is used and the other strings
     * are ignored.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX`
     *
     * Adds a shader snippet that will hook on to the vertex processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the vertex attributes generated by the shader. Typically the
     * snippet will modify cogl_color_out or cogl_position_out builtins.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any vertex processing is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex processing if it is present. This can be used if
     * the application wants to provide a complete vertex shader and
     * doesn't need the generated output from Cogl.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex processing is done. This can be used to modify the
     * outputs.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX_TRANSFORM`
     *
     * Adds a shader snippet that will hook on to the vertex transform stage.
     * Typically the snippet will use the cogl_modelview_matrix,
     * cogl_projection_matrix and cogl_modelview_projection_matrix matrices and the
     * cogl_position_in attribute. The hook must write to cogl_position_out.
     * The default processing for this hook will multiply cogl_position_in by
     * the combined modelview-projection matrix and store it on cogl_position_out.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before the vertex transform is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex transform if it is present.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex transformation is done. This can be used to modify the
     * cogl_position_out in addition to the default processing.
     *
     * - `COGL_SNIPPET_HOOK_POINT_SIZE`
     *
     * Adds a shader snippet that will hook on to the point size
     * calculation step within the vertex shader stage. The snippet should
     * write to the builtin cogl_point_size_out with the new point size.
     * The snippet can either read cogl_point_size_in directly and write a
     * new value or first read an existing value in cogl_point_size_out
     * that would be set by a previous snippet. Note that this hook is
     * only used if cogl_pipeline_set_per_vertex_point_size() is enabled
     * on the pipeline.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before
     * calculating the point size.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated point size calculation if it is present.
     *
     * The ‘post’ string in `snippet` will be inserted after the
     * standard point size calculation is done. This can be used to modify
     * cogl_point_size_out in addition to the default processing.
     *
     * - `COGL_SNIPPET_HOOK_FRAGMENT`
     *
     * Adds a shader snippet that will hook on to the fragment processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the fragment color generated by the shader. Typically the
     * snippet will modify cogl_color_out.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated fragment processing if it is present. This can be used if
     * the application wants to provide a complete fragment shader and
     * doesn't need the generated output from Cogl.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard fragment processing is done. At this point the generated
     * value for the rest of the pipeline state will already be in
     * cogl_color_out so the application can modify the result by altering
     * this variable.
     *
     * - `COGL_SNIPPET_HOOK_TEXTURE_COORD_TRANSFORM`
     *
     * Adds a shader snippet that will hook on to the texture coordinate
     * transformation of a particular layer. This can be used to replace
     * the processing for a layer or to modify the results.
     *
     * Within the snippet code for this hook there are two extra
     * variables. The first is a mat4 called cogl_matrix which represents
     * the user matrix for this layer. The second is called cogl_tex_coord
     * and represents the incoming and outgoing texture coordinate. On
     * entry to the hook, cogl_tex_coord contains the value of the
     * corresponding texture coordinate attribute for this layer. The hook
     * is expected to modify this variable. The output will be passed as a
     * varying to the fragment processing stage. The default code will
     * just multiply cogl_matrix by cogl_tex_coord and store the result in
     * cogl_tex_coord.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer. At this point cogl_tex_coord
     * still contains the value of the texture coordinate attribute.
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet can
     * modify cogl_tex_coord or leave it as is to apply no transformation.
     *
     * The ‘post’ string in `snippet` will be inserted just after the
     * transformation. At this point cogl_tex_coord will contain the
     * results of the transformation but it can be further modified by the
     * snippet.
     *
     * - `COGL_SNIPPET_HOOK_LAYER_FRAGMENT`
     *
     * Adds a shader snippet that will hook on to the fragment processing
     * of a particular layer. This can be used to replace the processing
     * for a layer or to modify the results.
     *
     * Within the snippet code for this hook there is an extra vec4
     * variable called ‘cogl_layer’. This contains the resulting color
     * that will be used for the layer. This can be modified in the ‘post’
     * section or it the default processing can be replaced entirely using
     * the ‘replace’ section.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer.
     *
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet must write to
     * the ‘cogl_layer’ variable in that case.
     *
     * The ‘post’ string in `snippet` will be inserted just after the
     * fragment processing for the layer. The results can be modified by changing
     * the value of the ‘cogl_layer’ variable.
     *
     * - `COGL_SNIPPET_HOOK_TEXTURE_LOOKUP`
     *
     * Adds a shader snippet that will hook on to the texture lookup part
     * of a given layer. This gives a chance for the application to modify
     * the coordinates that will be used for the texture lookup or to
     * alter the returned texel.
     *
     * Within the snippet code for this hook there are three extra
     * variables available. ‘cogl_sampler’ is a sampler object
     * representing the sampler for the layer where the snippet is
     * attached. ‘cogl_tex_coord’ is a vec4 which contains the texture
     * coordinates that will be used for the texture lookup. This can be
     * modified. ‘cogl_texel’ will contain the result of the texture
     * lookup. This can also be modified.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done. This is a
     * good place to modify the cogl_tex_coord variable.
     *
     * If a ‘replace’ string is given then this will be used instead of a
     * the default texture lookup. The snippet would typically use its own
     * sampler in this case.
     *
     * The ‘post’ string in `snippet` will be inserted after texture lookup
     * has been performed. Here the snippet can modify the cogl_texel
     * variable to alter the returned texel.
     */

    /**
     * #CoglSnippetHook is used to specify a location within a
     * #CoglPipeline where the code of the snippet should be used when it
     * is attached to a pipeline.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX_GLOBALS`
     *
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the vertex processing. Any declarations here can be
     * shared with all other snippets that are attached to a vertex hook.
     * Only the ‘declarations’ string is used and the other strings are
     * ignored.
     *
     * - `COGL_SNIPPET_HOOK_FRAGMENT_GLOBALS`
     *
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the fragment processing. Any declarations here can be
     * shared with all other snippets that are attached to a fragment
     * hook. Only the ‘declarations’ string is used and the other strings
     * are ignored.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX`
     *
     * Adds a shader snippet that will hook on to the vertex processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the vertex attributes generated by the shader. Typically the
     * snippet will modify cogl_color_out or cogl_position_out builtins.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any vertex processing is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex processing if it is present. This can be used if
     * the application wants to provide a complete vertex shader and
     * doesn't need the generated output from Cogl.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex processing is done. This can be used to modify the
     * outputs.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX_TRANSFORM`
     *
     * Adds a shader snippet that will hook on to the vertex transform stage.
     * Typically the snippet will use the cogl_modelview_matrix,
     * cogl_projection_matrix and cogl_modelview_projection_matrix matrices and the
     * cogl_position_in attribute. The hook must write to cogl_position_out.
     * The default processing for this hook will multiply cogl_position_in by
     * the combined modelview-projection matrix and store it on cogl_position_out.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before the vertex transform is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex transform if it is present.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex transformation is done. This can be used to modify the
     * cogl_position_out in addition to the default processing.
     *
     * - `COGL_SNIPPET_HOOK_POINT_SIZE`
     *
     * Adds a shader snippet that will hook on to the point size
     * calculation step within the vertex shader stage. The snippet should
     * write to the builtin cogl_point_size_out with the new point size.
     * The snippet can either read cogl_point_size_in directly and write a
     * new value or first read an existing value in cogl_point_size_out
     * that would be set by a previous snippet. Note that this hook is
     * only used if cogl_pipeline_set_per_vertex_point_size() is enabled
     * on the pipeline.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before
     * calculating the point size.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated point size calculation if it is present.
     *
     * The ‘post’ string in `snippet` will be inserted after the
     * standard point size calculation is done. This can be used to modify
     * cogl_point_size_out in addition to the default processing.
     *
     * - `COGL_SNIPPET_HOOK_FRAGMENT`
     *
     * Adds a shader snippet that will hook on to the fragment processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the fragment color generated by the shader. Typically the
     * snippet will modify cogl_color_out.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated fragment processing if it is present. This can be used if
     * the application wants to provide a complete fragment shader and
     * doesn't need the generated output from Cogl.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard fragment processing is done. At this point the generated
     * value for the rest of the pipeline state will already be in
     * cogl_color_out so the application can modify the result by altering
     * this variable.
     *
     * - `COGL_SNIPPET_HOOK_TEXTURE_COORD_TRANSFORM`
     *
     * Adds a shader snippet that will hook on to the texture coordinate
     * transformation of a particular layer. This can be used to replace
     * the processing for a layer or to modify the results.
     *
     * Within the snippet code for this hook there are two extra
     * variables. The first is a mat4 called cogl_matrix which represents
     * the user matrix for this layer. The second is called cogl_tex_coord
     * and represents the incoming and outgoing texture coordinate. On
     * entry to the hook, cogl_tex_coord contains the value of the
     * corresponding texture coordinate attribute for this layer. The hook
     * is expected to modify this variable. The output will be passed as a
     * varying to the fragment processing stage. The default code will
     * just multiply cogl_matrix by cogl_tex_coord and store the result in
     * cogl_tex_coord.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer. At this point cogl_tex_coord
     * still contains the value of the texture coordinate attribute.
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet can
     * modify cogl_tex_coord or leave it as is to apply no transformation.
     *
     * The ‘post’ string in `snippet` will be inserted just after the
     * transformation. At this point cogl_tex_coord will contain the
     * results of the transformation but it can be further modified by the
     * snippet.
     *
     * - `COGL_SNIPPET_HOOK_LAYER_FRAGMENT`
     *
     * Adds a shader snippet that will hook on to the fragment processing
     * of a particular layer. This can be used to replace the processing
     * for a layer or to modify the results.
     *
     * Within the snippet code for this hook there is an extra vec4
     * variable called ‘cogl_layer’. This contains the resulting color
     * that will be used for the layer. This can be modified in the ‘post’
     * section or it the default processing can be replaced entirely using
     * the ‘replace’ section.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer.
     *
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet must write to
     * the ‘cogl_layer’ variable in that case.
     *
     * The ‘post’ string in `snippet` will be inserted just after the
     * fragment processing for the layer. The results can be modified by changing
     * the value of the ‘cogl_layer’ variable.
     *
     * - `COGL_SNIPPET_HOOK_TEXTURE_LOOKUP`
     *
     * Adds a shader snippet that will hook on to the texture lookup part
     * of a given layer. This gives a chance for the application to modify
     * the coordinates that will be used for the texture lookup or to
     * alter the returned texel.
     *
     * Within the snippet code for this hook there are three extra
     * variables available. ‘cogl_sampler’ is a sampler object
     * representing the sampler for the layer where the snippet is
     * attached. ‘cogl_tex_coord’ is a vec4 which contains the texture
     * coordinates that will be used for the texture lookup. This can be
     * modified. ‘cogl_texel’ will contain the result of the texture
     * lookup. This can also be modified.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done. This is a
     * good place to modify the cogl_tex_coord variable.
     *
     * If a ‘replace’ string is given then this will be used instead of a
     * the default texture lookup. The snippet would typically use its own
     * sampler in this case.
     *
     * The ‘post’ string in `snippet` will be inserted after texture lookup
     * has been performed. Here the snippet can modify the cogl_texel
     * variable to alter the returned texel.
     */
    export namespace SnippetHook {
        export const $gtype: GObject.GType<SnippetHook>;
    }

    enum SnippetHook {
        /**
         * A hook for the entire vertex processing
         *   stage of the pipeline.
         */
        VERTEX,
        /**
         * A hook for the vertex transformation.
         */
        VERTEX_TRANSFORM,
        /**
         * A hook for declaring global data
         *   that can be shared with all other snippets that are on a vertex
         *   hook.
         */
        VERTEX_GLOBALS,
        /**
         * A hook for manipulating the point
         *   size of a vertex. This is only used if
         *   cogl_pipeline_set_per_vertex_point_size() is enabled on the
         *   pipeline.
         */
        POINT_SIZE,
        /**
         * A hook for the entire fragment
         *   processing stage of the pipeline.
         */
        FRAGMENT,
        /**
         * A hook for declaring global
         *   data wthat can be shared with all other snippets that are on a
         *   fragment hook.
         */
        FRAGMENT_GLOBALS,
        /**
         * A hook for applying the
         *   layer matrix to a texture coordinate for a layer.
         */
        TEXTURE_COORD_TRANSFORM,
        /**
         * A hook for the fragment
         *   processing of a particular layer.
         */
        LAYER_FRAGMENT,
        /**
         * A hook for the texture lookup
         *   stage of a given layer in a pipeline.
         */
        TEXTURE_LOOKUP,
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
     * Some output devices (such as LCD panels) display colors
     * by making each pixel consist of smaller "subpixels"
     * that each have a particular color. By using knowledge
     * of the layout of this subpixel components, it is possible
     * to create image content with higher resolution than the
     * pixel grid.
     */

    /**
     * Some output devices (such as LCD panels) display colors
     * by making each pixel consist of smaller "subpixels"
     * that each have a particular color. By using knowledge
     * of the layout of this subpixel components, it is possible
     * to create image content with higher resolution than the
     * pixel grid.
     */
    export namespace SubpixelOrder {
        export const $gtype: GObject.GType<SubpixelOrder>;
    }

    enum SubpixelOrder {
        /**
         * the layout of subpixel
         *   components for the device is unknown.
         */
        UNKNOWN,
        /**
         * the device displays colors
         *   without geometrically-separated subpixel components,
         *   or the positioning or colors of the components do not
         *   match any of the values in the enumeration.
         */
        NONE,
        /**
         * the device has
         *   horizontally arranged components in the order
         *   red-green-blue from left to right.
         */
        HORIZONTAL_RGB,
        /**
         * the device has
         *   horizontally arranged  components in the order
         *   blue-green-red from left to right.
         */
        HORIZONTAL_BGR,
        /**
         * the device has
         *   vertically arranged components in the order
         *   red-green-blue from top to bottom.
         */
        VERTICAL_RGB,
        /**
         * the device has
         *   vertically arranged components in the order
         *   blue-green-red from top to bottom.
         */
        VERTICAL_BGR,
    }
    /**
     * Error enumeration for Cogl
     *
     * The `COGL_SYSTEM_ERROR_UNSUPPORTED` error can be thrown for a
     * variety of reasons. For example:
     *
     * - You've tried to use a feature that is not advertised by
     *   [func`Cogl`.has_feature].
     * - The GPU can not handle the configuration you have requested.
     *   An example might be if you try to use too many texture
     *   layers in a single #CoglPipeline
     * - The driver does not support some configuration.
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
     * - You've tried to use a feature that is not advertised by
     *   [func`Cogl`.has_feature].
     * - The GPU can not handle the configuration you have requested.
     *   An example might be if you try to use too many texture
     *   layers in a single #CoglPipeline
     * - The driver does not support some configuration.
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
         * FIXME, equivalent to `GL_POINTS`
         */
        POINTS,
        /**
         * FIXME, equivalent to `GL_LINES`
         */
        LINES,
        /**
         * FIXME, equivalent to `GL_LINE_LOOP`
         */
        LINE_LOOP,
        /**
         * FIXME, equivalent to `GL_LINE_STRIP`
         */
        LINE_STRIP,
        /**
         * FIXME, equivalent to `GL_TRIANGLES`
         */
        TRIANGLES,
        /**
         * FIXME, equivalent to `GL_TRIANGLE_STRIP`
         */
        TRIANGLE_STRIP,
        /**
         * FIXME, equivalent to `GL_TRIANGLE_FAN`
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
     * Identifies specific window system backends that Cogl supports.
     *
     * These can be used to query what backend Cogl is using or to try and
     * explicitly select a backend to use.
     */

    /**
     * Identifies specific window system backends that Cogl supports.
     *
     * These can be used to query what backend Cogl is using or to try and
     * explicitly select a backend to use.
     */
    export namespace WinsysID {
        export const $gtype: GObject.GType<WinsysID>;
    }

    enum WinsysID {
        /**
         * Implies no preference for which backend is used
         */
        ANY,
        /**
         * Use the no-op stub backend
         */
        STUB,
        /**
         * Use the GLX window system binding API
         */
        GLX,
        /**
         * Use EGL with the X window system via XLib
         */
        EGL_XLIB,
        CUSTOM,
    }
    const AFIRST_BIT: number;
    const A_BIT: number;
    const BGR_BIT: number;
    const DEPTH_BIT: number;
    /**
     * The maximum number of planes of a pixel format (see also
     * cogl_pixel_format_get_planes()).
     */
    const PIXEL_FORMAT_MAX_PLANES: number;
    const PREMULT_BIT: number;
    const STENCIL_BIT: number;
    const TEXTURE_MAX_WASTE: number;
    function blend_string_error_quark(): number;
    /**
     * `return` FALSE for an immediately detected error, TRUE otherwise.
     *
     * This blits a region of the color buffer of the source buffer
     * to the destination buffer. This function should only be
     * called if the COGL_FEATURE_ID_BLIT_FRAMEBUFFER feature is
     * advertised.
     *
     * The source and destination rectangles are defined in offscreen
     * framebuffer orientation. When copying between an offscreen and
     * onscreen framebuffers, the image is y-flipped accordingly.
     *
     * The two buffers must have the same value types (e.g. floating-point,
     * unsigned int, signed int, or fixed-point), but color formats do not
     * need to match. This limitation comes from OpenGL ES 3.0 definition
     * of glBlitFramebuffer.
     *
     * Note that this function differs a lot from the glBlitFramebuffer
     * function provided by the GL_EXT_framebuffer_blit extension. Notably
     * it doesn't support having different sizes for the source and
     * destination rectangle. This doesn't seem
     * like a particularly useful feature. If the application wanted to
     * scale the results it may make more sense to draw a primitive
     * instead.
     *
     * The GL function is documented to be affected by the scissor. This
     * function therefore ensure that an empty clip stack is flushed
     * before performing the blit which means the scissor is effectively
     * ignored.
     *
     * The function also doesn't support specifying the buffers to copy
     * and instead only the color buffer is copied. When copying the depth
     * or stencil buffers the extension on GLES2.0 only supports copying
     * the full buffer which would be awkward to document with this
     * API. If we wanted to support that feature it may be better to have
     * a separate function to copy the entire buffer for a given mask.
     *
     * The `c` error argument is optional, it can be NULL. If it is not NULL
     * and this function returns FALSE, an error object with a code from
     * COGL_SYSTEM_ERROR will be created.
     * @param framebuffer The source #CoglFramebuffer
     * @param dst The destination #CoglFramebuffer
     * @param src_x Source x position
     * @param src_y Source y position
     * @param dst_x Destination x position
     * @param dst_y Destination y position
     * @param width Width of region to copy
     * @param height Height of region to copy
     */
    function blit_framebuffer(
        framebuffer: Framebuffer,
        dst: Framebuffer,
        src_x: number,
        src_y: number,
        dst_x: number,
        dst_y: number,
        width: number,
        height: number,
    ): boolean;
    function clutter_winsys_has_feature(feature: WinsysFeature | null): boolean;
    /**
     * Compares two `CoglColor`s and checks if they are the same.
     *
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using `CoglColor`s as keys in a #GHashTable.
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
    function create_program(): Program;
    /**
     * Create a new shader handle, use cogl_shader_source() to set the
     * source code to be used on it.
     * @param shader_type COGL_SHADER_TYPE_VERTEX or COGL_SHADER_TYPE_FRAGMENT.
     * @returns a new shader handle.
     */
    function create_shader(shader_type: ShaderType | null): Shader;
    /**
     * Allows visualizing the operations that build up the given `entry`
     * for debugging purposes by printing to stdout.
     * @param entry A #CoglMatrixEntry
     */
    function debug_matrix_entry_print(entry: MatrixEntry): void;
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
    /**
     * Iterates through all the context level features currently supported
     * for a given `context` and for each feature `callback` is called.
     * @param context A #CoglContext pointer
     * @param callback A #CoglFeatureCallback called for each            supported feature
     */
    function foreach_feature(context: Context, callback: FeatureCallback): void;
    /**
     * Returns the graphics reset status as reported by
     * GetGraphicsResetStatusARB defined in the ARB_robustness extension.
     *
     * Note that Cogl doesn't normally enable the ARB_robustness
     * extension in which case this will only ever return
     * #COGL_GRAPHICS_RESET_STATUS_NO_ERROR.
     *
     * Applications must explicitly use a backend specific method to
     * request that errors get reported such as X11's
     * cogl_xlib_renderer_request_reset_on_video_memory_purge().
     * @param context a #CoglContext pointer
     * @returns a #CoglGraphicsResetStatus
     */
    function get_graphics_reset_status(context: Context): GraphicsResetStatus;
    function get_rectangle_indices(context: Context, n_rectangles: number): Indices;
    /**
     * Creates a #GSource which handles Cogl's internal system event
     * processing. This can be used as a convenience instead of
     * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch() in
     * applications that are already using the GLib main loop. After this
     * is called the #GSource should be attached to the main loop using
     * g_source_attach().
     * @param renderer A #CoglRenderer
     * @param priority The priority of the #GSource
     * @returns a new #GSource
     */
    function glib_renderer_source_new(renderer: Renderer, priority: number): GLib.Source;
    /**
     * Creates a #GSource which handles Cogl's internal system event
     * processing. This can be used as a convenience instead of
     * cogl_poll_renderer_get_info() and cogl_poll_renderer_dispatch() in
     * applications that are already using the GLib main loop. After this
     * is called the #GSource should be attached to the main loop using
     * g_source_attach().
     *
     * Applications that manually connect to a #CoglRenderer before they
     * create a #CoglContext should instead use
     * cogl_glib_renderer_source_new() so that events may be dispatched
     * before a context has been created. In that case you don't need to
     * use this api in addition later, it is simply enough to use
     * cogl_glib_renderer_source_new() instead.
     *
     * This api is actually just a thin convenience wrapper around
     * cogl_glib_renderer_source_new()
     * @param context A #CoglContext
     * @param priority The priority of the #GSource
     * @returns a new #GSource
     */
    function glib_source_new(context: Context, priority: number): GLib.Source;
    /**
     * Transforms a point whose position is given and returned as four float
     * components.
     * @param matrix A 4x4 transformation matrix
     * @param x The X component of your points position
     * @param y The Y component of your points position
     * @param z The Z component of your points position
     * @param w The W component of your points position
     */
    function graphene_matrix_project_point(
        matrix: Graphene.Matrix,
        x: number,
        y: number,
        z: number,
        w: number,
    ): [number, number, number, number];
    /**
     * Projects an array of input points and writes the result to another
     * array of output points. The input points can either have 2, 3 or 4
     * components each. The output points always have 4 components (known
     * as homogeneous coordinates). The output array can simply point to
     * the input array to do the transform in-place.
     *
     * Here's an example with differing input/output strides:
     * ```c
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
     * graphene_matrix_t matrix;
     *
     * my_load_vertices (vertices);
     * my_get_matrix (&matrix);
     *
     * cogl_graphene_matrix_project_points (&matrix,
     *                             2,
     *                             sizeof (MyInVertex),
     *                             &vertices[0].x,
     *                             sizeof (MyOutVertex),
     *                             &results[0].x,
     *                             N_VERTICES);
     * ```
     * @param matrix A projection matrix
     * @param n_components The number of position components for each input point.                (either 2, 3 or 4)
     * @param stride_in The stride in bytes between input points.
     * @param points_in A pointer to the first component of the first input point.
     * @param stride_out The stride in bytes between output points.
     * @param points_out A pointer to the first component of the first output point.
     * @param n_points The number of points to transform.
     */
    function graphene_matrix_project_points(
        matrix: Graphene.Matrix,
        n_components: number,
        stride_in: number,
        points_in: any | null,
        stride_out: number,
        points_out: any | null,
        n_points: number,
    ): void;
    /**
     * Transforms an array of input points and writes the result to
     * another array of output points. The input points can either have 2
     * or 3 components each. The output points always have 3 components.
     * The output array can simply point to the input array to do the
     * transform in-place.
     *
     * If you need to transform 4 component points see
     * cogl_graphene_matrix_project_points().
     *
     * Here's an example with differing input/output strides:
     * ```c
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
     * graphene_matrix_t matrix;
     *
     * my_load_vertices (vertices);
     * my_get_matrix (&matrix);
     *
     * cogl_graphene_matrix_transform_points (&matrix,
     *                               2,
     *                               sizeof (MyInVertex),
     *                               &vertices[0].x,
     *                               sizeof (MyOutVertex),
     *                               &results[0].x,
     *                               N_VERTICES);
     * ```
     * @param matrix A transformation matrix
     * @param n_components The number of position components for each input point.                (either 2 or 3)
     * @param stride_in The stride in bytes between input points.
     * @param points_in A pointer to the first component of the first input point.
     * @param stride_out The stride in bytes between output points.
     * @param points_out A pointer to the first component of the first output point.
     * @param n_points The number of points to transform.
     */
    function graphene_matrix_transform_points(
        matrix: Graphene.Matrix,
        n_components: number,
        stride_in: number,
        points_in: any | null,
        stride_out: number,
        points_out: any | null,
        n_points: number,
    ): void;
    /**
     * Checks if a given `feature` is currently available
     *
     * Cogl does not aim to be a lowest common denominator API, it aims to
     * expose all the interesting features of GPUs to application which
     * means applications have some responsibility to explicitly check
     * that certain features are available before depending on them.
     * @param context A #CoglContext pointer
     * @param feature A #CoglFeatureID
     * @returns %TRUE if the @feature is currently supported or %FALSE if not.
     */
    function has_feature(context: Context, feature: FeatureID | null): boolean;
    /**
     * Gets whether the given object references a #CoglFramebuffer.
     * @param object A #CoglObject pointer
     * @returns %TRUE if the object references a #CoglFramebuffer   and %FALSE otherwise.
     */
    function is_framebuffer(object?: any | null): boolean;
    /**
     * Allows you to manually iterate the low-level textures that define a
     * given region of a high-level #CoglMetaTexture.
     *
     * For example cogl_texture_2d_sliced_new_with_size() can be used to
     * create a meta texture that may slice a large image into multiple,
     * smaller power-of-two sized textures. These high level textures are
     * not directly understood by a GPU and so this API must be used to
     * manually resolve the underlying textures for drawing.
     *
     * All high level textures (#CoglAtlasTexture, #CoglSubTexture,
     * #CoglTexturePixmapX11, and #CoglTexture2DSliced) can be handled
     * consistently using this interface which greately simplifies
     * implementing primitives that support all texture types.
     *
     * For example if you use the cogl_rectangle() API then Cogl will
     * internally use this API to resolve the low level textures of any
     * meta textures you have associated with CoglPipeline layers.
     *
     * The low level drawing APIs such as cogl_primitive_draw()
     * don't understand the #CoglMetaTexture interface and so it is your
     * responsibility to use this API to resolve all CoglPipeline textures
     * into low-level textures before drawing.
     *
     * For each low-level texture that makes up part of the given region
     * of the `meta_texture,` `callback` is called specifying how the
     * low-level texture maps to the original region.
     * @param texture An object implementing the #CoglMetaTexture interface.
     * @param tx_1 The top-left x coordinate of the region to iterate
     * @param ty_1 The top-left y coordinate of the region to iterate
     * @param tx_2 The bottom-right x coordinate of the region to iterate
     * @param ty_2 The bottom-right y coordinate of the region to iterate
     * @param wrap_s The wrap mode for the x-axis
     * @param wrap_t The wrap mode for the y-axis
     * @param callback A #CoglMetaTextureCallback pointer to be called            for each low-level texture within the specified region.
     */
    function meta_texture_foreach_in_region(
        texture: Texture,
        tx_1: number,
        ty_1: number,
        tx_2: number,
        ty_2: number,
        wrap_s: PipelineWrapMode | null,
        wrap_t: PipelineWrapMode | null,
        callback: MetaTextureCallback,
    ): void;
    /**
     * Queries the number of bytes per pixel for a given format in the given plane.
     * @param format The pixel format
     * @param plane The index of the plane (should not be more than the number of planes         in the given format).
     * @returns The number of bytes per pixel in the given format's given plane.
     */
    function pixel_format_get_bytes_per_pixel(format: PixelFormat | null, plane: number): number;
    /**
     * Returns the number of planes the given CoglPixelFormat specifies.
     * @param format The format for which to get the number of planes
     * @returns The no. of planes of @format (at most %COGL_PIXEL_FORMAT_MAX_PLANES)
     */
    function pixel_format_get_n_planes(format: PixelFormat | null): number;
    /**
     * Returns a string representation of `format,` useful for debugging purposes.
     * @param format a #CoglPixelFormat
     * @returns A string representation of @format.
     */
    function pixel_format_to_string(format: PixelFormat | null): string;
    /**
     * This should be called whenever an application is woken up from
     * going idle in its main loop. The `poll_fds` array should contain a
     * list of file descriptors matched with the events that occurred in
     * revents. The events field is ignored. It is safe to pass in extra
     * file descriptors that Cogl didn't request when calling
     * cogl_poll_renderer_get_info() or a shorter array missing some file
     * descriptors that Cogl requested.
     * @param renderer A #CoglRenderer
     * @param poll_fds An array of `CoglPollFD`s describing the events            that have occurred since the application went idle.
     * @param n_poll_fds The length of the @poll_fds array.
     */
    function poll_renderer_dispatch(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number): void;
    /**
     * Is used to integrate Cogl with an application mainloop that is based
     * on the unix poll(2) api (or select() or something equivalent). This
     * api should be called whenever an application is about to go idle so
     * that Cogl has a chance to describe what file descriptor events it
     * needs to be woken up for.
     *
     * If your application is using the Glib mainloop then you
     * should jump to the cogl_glib_source_new() api as a more convenient
     * way of integrating Cogl with the mainloop.
     *
     * After the function is called *`poll_fds` will contain a pointer to
     * an array of #CoglPollFD structs describing the file descriptors
     * that Cogl expects. The fd and events members will be updated
     * accordingly. After the application has completed its idle it is
     * expected to either update the revents members directly in this
     * array or to create a copy of the array and update them
     * there.
     *
     * When the application mainloop returns from calling poll(2) (or its
     * equivalent) then it should call cogl_poll_renderer_dispatch()
     * passing a pointer the array of `CoglPollFD`s with updated
     * revent values.
     *
     * `timeout` will contain a maximum amount of time to wait in
     * microseconds before the application should wake up or -1 if the
     * application should wait indefinitely. This can also be 0 if
     * Cogl needs to be woken up immediately.
     * @param renderer A #CoglRenderer
     * @param poll_fds A return location for a pointer to an array            of `CoglPollFD`s
     * @param n_poll_fds A return location for the number of entries in *@poll_fds
     * @param timeout A return location for the maximum length of time to wait           in microseconds, or -1 to wait indefinitely.
     * @returns A "poll fd state age" that changes whenever the set               of poll_fds has changed. If this API is being used to               integrate with another system mainloop api then               knowing if the set of file descriptors and events has               really changed can help avoid redundant work               depending the api. The age isn't guaranteed to change               when the timeout changes.
     */
    function poll_renderer_get_info(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number, timeout: number): number;
    function set_tracing_disabled_on_thread(data?: any | null): void;
    function set_tracing_enabled_on_thread(data: any | null, group: string): void;
    function start_tracing_with_fd(fd: number): boolean;
    function start_tracing_with_path(filename: string): boolean;
    function stop_tracing(): void;
    interface FeatureCallback {
        (feature: FeatureID): void;
    }
    interface FenceCallback {
        (fence: Fence): void;
    }
    interface FrameCallback {
        (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void;
    }
    interface MetaTextureCallback {
        (sub_texture: Texture, sub_texture_coords: number, meta_coords: number): void;
    }
    interface OnscreenDirtyCallback {
        (onscreen: Onscreen, info: OnscreenDirtyInfo): void;
    }
    interface OutputCallback {
        (output: Output): void;
    }
    interface PipelineLayerCallback {
        (pipeline: Pipeline, layer_index: number): boolean;
    }
    interface PrimitiveAttributeCallback {
        (primitive: Primitive, attribute: Attribute): boolean;
    }
    interface XlibFilterFunc {
        (event: xlib.XEvent, data?: any | null): FilterReturn;
    }
    /**
     * The access hints for [method`Cogl`.Buffer.set_update_hint]
     */

    /**
     * The access hints for [method`Cogl`.Buffer.set_update_hint]
     */
    export namespace BufferAccess {
        export const $gtype: GObject.GType<BufferAccess>;
    }

    enum BufferAccess {
        /**
         * the buffer will be read
         */
        READ,
        /**
         * the buffer will written to
         */
        WRITE,
        /**
         * the buffer will be used for both reading and
         *   writing
         */
        READ_WRITE,
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
     * Hints to Cogl about how you are planning to modify the data once it
     * is mapped.
     */

    /**
     * Hints to Cogl about how you are planning to modify the data once it
     * is mapped.
     */
    export namespace BufferMapHint {
        export const $gtype: GObject.GType<BufferMapHint>;
    }

    enum BufferMapHint {
        /**
         * Tells Cogl that you plan to replace
         *    all the buffer's contents. When this flag is used to map a
         *    buffer, the entire contents of the buffer become undefined, even
         *    if only a subregion of the buffer is mapped.
         */
        DISCARD,
        /**
         * Tells Cogl that you plan to
         *    replace all the contents of the mapped region. The contents of
         *    the region specified are undefined after this flag is used to
         *    map a buffer.
         */
        DISCARD_RANGE,
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

    export namespace EglImageFlags {
        export const $gtype: GObject.GType<EglImageFlags>;
    }

    enum EglImageFlags {
        NONE,
        NO_GET_DATA,
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
     * These constraint flags are hard-coded features of the different renderer
     * backends. Sometimes a platform may support multiple rendering options which
     * Cogl will usually choose from automatically. Some of these features are
     * important to higher level applications and frameworks though, such as
     * whether a renderer is X11 based because an application might only support
     * X11 based input handling. An application might also need to ensure EGL is
     * used internally too if they depend on access to an EGLDisplay for some
     * purpose.
     *
     * Applications should ideally minimize how many of these constraints
     * they depend on to ensure maximum portability.
     */

    /**
     * These constraint flags are hard-coded features of the different renderer
     * backends. Sometimes a platform may support multiple rendering options which
     * Cogl will usually choose from automatically. Some of these features are
     * important to higher level applications and frameworks though, such as
     * whether a renderer is X11 based because an application might only support
     * X11 based input handling. An application might also need to ensure EGL is
     * used internally too if they depend on access to an EGLDisplay for some
     * purpose.
     *
     * Applications should ideally minimize how many of these constraints
     * they depend on to ensure maximum portability.
     */
    export namespace RendererConstraint {
        export const $gtype: GObject.GType<RendererConstraint>;
    }

    enum RendererConstraint {
        /**
         * Require the renderer to be X11 based
         */
        X11,
        /**
         * Require the renderer to be X11
         *                                      based and use Xlib
         */
        XLIB,
        /**
         * Require the renderer to be EGL based
         */
        EGL,
    }
    namespace AtlasTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::format': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::loader': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Texture.ConstructorProps {}
    }

    /**
     * Functions for managing textures in Cogl's global
     * set of texture atlases
     *
     * A texture atlas is a texture that contains many smaller images that
     * an application is interested in. These are packed together as a way
     * of optimizing drawing with those images by avoiding the costs of
     * repeatedly telling the hardware to change what texture it should
     * sample from.  This can enable more geometry to be batched together
     * into few draw calls.
     *
     * Each #CoglContext has an shared, pool of texture atlases that are
     * are managed by Cogl.
     *
     * This api lets applications upload texture data into one of Cogl's
     * shared texture atlases using a high-level #CoglAtlasTexture which
     * represents a sub-region of one of these atlases.
     *
     * A #CoglAtlasTexture is a high-level meta texture which has
     * some limitations to be aware of. Please see the documentation for
     * #CoglMetaTexture for more details.
     */
    class AtlasTexture extends Texture {
        static $gtype: GObject.GType<AtlasTexture>;

        // Constructors

        constructor(properties?: Partial<AtlasTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_bitmap(bmp: Bitmap): AtlasTexture;

        static new_from_data(
            ctx: Context,
            width: number,
            height: number,
            format: PixelFormat,
            rowstride: number,
            data: number,
        ): AtlasTexture;

        static new_with_size(ctx: Context, width: number, height: number): AtlasTexture;

        // Signals

        connect<K extends keyof AtlasTexture.SignalSignatures>(
            signal: K,
            callback: AtlasTexture.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AtlasTexture.SignalSignatures>(
            signal: K,
            callback: AtlasTexture.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AtlasTexture.SignalSignatures>(
            signal: K,
            ...args: AtlasTexture.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Attribute {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Attribute extends GObject.Object {
        static $gtype: GObject.GType<Attribute>;

        // Constructors

        constructor(properties?: Partial<Attribute.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            attribute_buffer: AttributeBuffer,
            name: string,
            stride: number,
            offset: number,
            components: number,
            type: AttributeType,
        ): Attribute;

        static new_const_1f(context: Context, name: string, value: number): Attribute;

        static new_const_2f(context: Context, name: string, component0: number, component1: number): Attribute;

        static new_const_2fv(context: Context, name: string, value: number): Attribute;

        static new_const_2x2fv(context: Context, name: string, matrix2x2: number, transpose: boolean): Attribute;

        static new_const_3f(
            context: Context,
            name: string,
            component0: number,
            component1: number,
            component2: number,
        ): Attribute;

        static new_const_3fv(context: Context, name: string, value: number): Attribute;

        static new_const_3x3fv(context: Context, name: string, matrix3x3: number, transpose: boolean): Attribute;

        static new_const_4f(
            context: Context,
            name: string,
            component0: number,
            component1: number,
            component2: number,
            component3: number,
        ): Attribute;

        static new_const_4fv(context: Context, name: string, value: number): Attribute;

        static new_const_4x4fv(context: Context, name: string, matrix4x4: number, transpose: boolean): Attribute;

        // Signals

        connect<K extends keyof Attribute.SignalSignatures>(signal: K, callback: Attribute.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Attribute.SignalSignatures>(
            signal: K,
            callback: Attribute.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Attribute.SignalSignatures>(
            signal: K,
            ...args: Attribute.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_buffer(): AttributeBuffer;
        get_normalized(): boolean;
        /**
         * Sets a new #CoglAttributeBuffer for the attribute.
         * @param attribute_buffer A #CoglAttributeBuffer
         */
        set_buffer(attribute_buffer: AttributeBuffer): void;
        /**
         * Sets whether fixed point attribute types are mapped to the range
         * 0→1. For example when this property is TRUE and a
         * %COGL_ATTRIBUTE_TYPE_UNSIGNED_BYTE type is used then the value 255
         * will be mapped to 1.0.
         *
         * The default value of this property depends on the name of the
         * attribute. For the builtin properties cogl_color_in and
         * cogl_normal_in it will default to TRUE and for all other names it
         * will default to FALSE.
         * @param normalized The new value for the normalized property.
         */
        set_normalized(normalized: boolean): void;
    }

    namespace AttributeBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Buffer.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating attribute buffers
     */
    class AttributeBuffer extends Buffer {
        static $gtype: GObject.GType<AttributeBuffer>;

        // Constructors

        constructor(properties?: Partial<AttributeBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, data: Uint8Array | string): AttributeBuffer;

        static new_with_size(context: Context, bytes: number): AttributeBuffer;

        // Signals

        connect<K extends keyof AttributeBuffer.SignalSignatures>(
            signal: K,
            callback: AttributeBuffer.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AttributeBuffer.SignalSignatures>(
            signal: K,
            callback: AttributeBuffer.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AttributeBuffer.SignalSignatures>(
            signal: K,
            ...args: AttributeBuffer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Bitmap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Functions for loading images
     *
     * Cogl allows loading image data into memory as CoglBitmaps without
     * loading them immediately into GPU textures.
     */
    class Bitmap extends GObject.Object {
        static $gtype: GObject.GType<Bitmap>;

        // Constructors

        constructor(properties?: Partial<Bitmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_data(
            context: Context,
            width: number,
            height: number,
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array | string,
        ): Bitmap;

        static new_from_buffer(
            buffer: Buffer,
            format: PixelFormat,
            width: number,
            height: number,
            rowstride: number,
            offset: number,
        ): Bitmap;

        static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap;

        // Signals

        connect<K extends keyof Bitmap.SignalSignatures>(signal: K, callback: Bitmap.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Bitmap.SignalSignatures>(signal: K, callback: Bitmap.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Bitmap.SignalSignatures>(
            signal: K,
            ...args: Bitmap.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): number;

        // Methods

        get_buffer(): PixelBuffer;
        get_format(): PixelFormat;
        get_height(): number;
        get_rowstride(): number;
        get_width(): number;
    }

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            default_target: BufferBindTarget;
            defaultTarget: BufferBindTarget;
            size: number;
            update_hint: BufferUpdateHint;
            updateHint: BufferUpdateHint;
        }
    }

    /**
     * Common buffer functions, including data upload APIs
     *
     * The CoglBuffer API provides a common interface to manipulate
     * buffers that have been allocated either via `cogl_pixel_buffer_new()`
     * or `cogl_attribute_buffer_new()`. The API allows you to upload data
     * to these buffers and define usage hints that help Cogl manage your
     * buffer optimally.
     *
     * Data can either be uploaded by supplying a pointer and size so Cogl
     * can copy your data, or you can mmap() a CoglBuffer and then you can
     * copy data to the buffer directly.
     *
     * One of the most common uses for CoglBuffers is to upload texture
     * data asynchronously since the ability to mmap the buffers into
     * the CPU makes it possible for another thread to handle the IO
     * of loading an image file and unpacking it into the mapped buffer
     * without blocking other Cogl operations.
     */
    abstract class Buffer extends GObject.Object {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        set context(val: Context);
        set default_target(val: BufferBindTarget);
        set defaultTarget(val: BufferBindTarget);
        set size(val: number);
        set update_hint(val: BufferUpdateHint);
        set updateHint(val: BufferUpdateHint);

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Buffer.SignalSignatures>(signal: K, callback: Buffer.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Buffer.SignalSignatures>(signal: K, callback: Buffer.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: Buffer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the size of buffer
         * @returns the size of the buffer in bytes
         */
        get_size(): number;
        /**
         * Retrieves the update hints set using [method`Cogl`.Buffer.set_update_hint]
         * @returns the #CoglBufferUpdateHint currently used by the buffer
         */
        get_update_hint(): BufferUpdateHint;
        /**
         * Maps the buffer into the application address space for direct
         * access. This is equivalent to calling [method`Cogl`.Buffer.map_range] with
         * zero as the offset and the size of the entire buffer as the size.
         *
         * It is strongly recommended that you pass
         * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
         * all the buffer's data. This way if the buffer is currently being
         * used by the GPU then the driver won't have to stall the CPU and
         * wait for the hardware to finish because it can instead allocate a
         * new buffer to map.
         *
         * The behaviour is undefined if you access the buffer in a way
         * conflicting with the `access` mask you pass. It is also an error to
         * release your last reference while the buffer is mapped.
         * @param access how the mapped buffer will be used by the application
         * @param hints A mask of `CoglBufferMapHint`s that tell Cogl how   the data will be modified once mapped.
         * @returns A pointer to the mapped memory or        %NULL is the call fails
         */
        map(access: BufferAccess | null, hints: BufferMapHint | null): any | null;
        /**
         * Maps a sub-region of the buffer into the application's address space
         * for direct access.
         *
         * It is strongly recommended that you pass
         * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
         * all the buffer's data. This way if the buffer is currently being
         * used by the GPU then the driver won't have to stall the CPU and
         * wait for the hardware to finish because it can instead allocate a
         * new buffer to map. You can pass
         * %COGL_BUFFER_MAP_HINT_DISCARD_RANGE instead if you want the
         * regions outside of the mapping to be retained.
         *
         * The behaviour is undefined if you access the buffer in a way
         * conflicting with the `access` mask you pass. It is also an error to
         * release your last reference while the buffer is mapped.
         * @param offset Offset within the buffer to start the mapping
         * @param size The size of data to map
         * @param access how the mapped buffer will be used by the application
         * @param hints A mask of `CoglBufferMapHint`s that tell Cogl how   the data will be modified once mapped.
         * @returns A pointer to the mapped memory or        %NULL is the call fails
         */
        map_range(offset: number, size: number, access: BufferAccess | null, hints: BufferMapHint | null): any | null;
        /**
         * Updates part of the buffer with new data from `data`. Where to put this new
         * data is controlled by `offset` and `offset` + `data` should be less than the
         * buffer size.
         * @param offset destination offset (in bytes) in the buffer
         * @param data a pointer to the data to be copied   into the buffer
         * @param size number of bytes to copy
         * @returns %TRUE is the operation succeeded, %FALSE otherwise
         */
        set_data(offset: number, data: Uint8Array | string, size: number): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Sets the update hint on a buffer. See #CoglBufferUpdateHint for a description
         * of the available hints.
         * @param hint the new hint
         */
        set_update_hint(hint: BufferUpdateHint | null): void;
        /**
         * Unmaps a buffer previously mapped by [method`Cogl`.Buffer.map].
         */
        unmap(): void;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The top level application context.
     *
     * A #CoglContext is the top most sandbox of Cogl state for an
     * application or toolkit. Its main purpose is to act as a sandbox
     * for the memory management of state objects. Normally an application
     * will only create a single context since there is no way to share
     * resources between contexts.
     *
     * For those familiar with OpenGL or perhaps Cairo it should be
     * understood that unlike these APIs a Cogl context isn't a rendering
     * context as such. In other words Cogl doesn't aim to provide a state
     * machine style model for configuring rendering parameters. Most
     * rendering state in Cogl is directly associated with user managed
     * objects called pipelines and geometry is drawn with a specific
     * pipeline object to a framebuffer object and those 3 things fully
     * define the state for drawing. This is an important part of Cogl's
     * design since it helps you write orthogonal rendering components
     * that can all access the same GPU without having to worry about
     * what state other components have left you with.
     *
     * Cogl does not maintain internal references to the context for
     * resources that depend on the context so applications. This is to
     * help applications control the lifetime a context without us needing to
     * introduce special api to handle the breakup of internal circular
     * references due to internal resources and caches associated with the
     * context.
     *
     * One a context has been destroyed then all directly or indirectly
     * dependent resources will be in an inconsistent state and should not
     * be manipulated or queried in any way.
     *
     * For applications that rely on the operating system to clean up
     * resources this policy shouldn't affect them, but for applications
     * that need to carefully destroy and re-create Cogl contexts multiple
     * times throughout their lifetime (such as Android applications) they
     * should be careful to destroy all context dependent resources, such as
     * framebuffers or textures etc before unrefing and destroying the
     * context.
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display?: Display | null): Context;

        // Signals

        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: Context.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: Context.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: Context.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        free_timestamp_query(query: TimestampQuery): void;
        /**
         * Retrieves the #CoglDisplay that is internally associated with the
         * given `context`. This will return the same #CoglDisplay that was
         * passed to cogl_context_new() or if %NULL was passed to
         * cogl_context_new() then this function returns a pointer to the
         * display that was automatically setup internally.
         * @returns The #CoglDisplay associated with the               given @context.
         */
        get_display(): Display;
        /**
         * This function should only be called if the COGL_FEATURE_ID_TIMESTAMP_QUERY
         * feature is advertised.
         * @returns Current GPU time in nanoseconds
         */
        get_gpu_time_ns(): number;
        get_named_pipeline(key: PipelineKey): Pipeline;
        /**
         * Retrieves the #CoglRenderer that is internally associated with the
         * given `context`. This will return the same #CoglRenderer that was
         * passed to cogl_display_new() or if %NULL was passed to
         * cogl_display_new() or cogl_context_new() then this function returns
         * a pointer to the renderer that was automatically connected
         * internally.
         * @returns The #CoglRenderer associated with the               given @context.
         */
        get_renderer(): Renderer;
        is_hardware_accelerated(): boolean;
        /**
         * Associate a #CoglPipeline with a `context` and `key`. This will not take a new
         * reference to the `pipeline,` but will unref all associated pipelines when
         * the `context` gets destroyed. Similarly, if a pipeline gets overwritten,
         * it will get unreffed as well.
         * @param key a #CoglPipelineKey pointer
         * @param pipeline a #CoglPipeline to associate with the @context and            @key
         */
        set_named_pipeline(key: PipelineKey, pipeline?: Pipeline | null): void;
        timestamp_query_get_time_ns(query: TimestampQuery): number;
    }

    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Common aspects of a display pipeline
     *
     * The basic intention for this object is to let the application
     * configure common display preferences before creating a context, and
     * there are a few different aspects to this...
     *
     * Firstly there are options directly relating to the physical display
     * pipeline that is currently being used including the digital to
     * analogue conversion hardware and the screens the user sees.
     *
     * Another aspect is that display options may constrain or affect how
     * onscreen framebuffers should later be configured. The original
     * rationale for the display object in fact was to let us handle GLX
     * and EGLs requirements that framebuffers must be "compatible" with
     * the config associated with the current context meaning we have to
     * force the user to describe how they would like to create their
     * onscreen windows before we can choose a suitable fbconfig and
     * create a GLContext.
     */
    class Display extends GObject.Object {
        static $gtype: GObject.GType<Display>;

        // Constructors

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](renderer: Renderer, onscreen_template: OnscreenTemplate): Display;

        // Signals

        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: Display.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: Display.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Display.SignalSignatures>(
            signal: K,
            ...args: Display.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Queries the #CoglRenderer associated with the given `display`.
         * @returns The associated #CoglRenderer
         */
        get_renderer(): Renderer;
        /**
         * Specifies a template for creating #CoglOnscreen framebuffers.
         *
         * Depending on the system, the constraints for creating #CoglOnscreen
         * framebuffers need to be known before setting up a #CoglDisplay because the
         * final setup of the display may constrain how onscreen framebuffers may be
         * allocated. If Cogl knows how an application wants to allocate onscreen
         * framebuffers then it can try to make sure to setup the display accordingly.
         * @param onscreen_template A template for creating #CoglOnscreen framebuffers
         */
        set_onscreen_template(onscreen_template: OnscreenTemplate): void;
        /**
         * Explicitly sets up the given `display` object. Use of this api is
         * optional since Cogl will internally setup the display if not done
         * explicitly.
         *
         * When a display is first allocated via cogl_display_new() it is in a
         * mutable configuration mode. This allows us to extend the apis
         * available for configuring a display without requiring huge numbers
         * of constructor arguments.
         *
         * Its possible to request a configuration that might not be
         * supportable on the current system and so this api provides a means
         * to apply the configuration explicitly but if it fails then an
         * exception will be returned so you can handle the error gracefully
         * and perhaps fall back to an alternative configuration.
         *
         * If you instead rely on Cogl implicitly calling cogl_display_setup()
         * for you then if there is an error with the configuration you won't
         * get an opportunity to handle that and the application may abort
         * with a message.  For simple applications that don't have any
         * fallback options this behaviour may be fine.
         * @returns Returns %TRUE if there was no error, else it returns               %FALSE and returns an exception via @error.
         */
        setup(): boolean;
    }

    namespace FrameInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Frame information.
     */
    class FrameInfo extends GObject.Object {
        static $gtype: GObject.GType<FrameInfo>;

        // Constructors

        constructor(properties?: Partial<FrameInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FrameInfo.SignalSignatures>(signal: K, callback: FrameInfo.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FrameInfo.SignalSignatures>(
            signal: K,
            callback: FrameInfo.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FrameInfo.SignalSignatures>(
            signal: K,
            ...args: FrameInfo.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the frame counter for the #CoglOnscreen that corresponds
         * to this frame.
         * @returns The frame counter value
         */
        get_frame_counter(): number;
        get_global_frame_counter(): number;
        get_is_symbolic(): boolean;
        /**
         * Gets the presentation time for the frame. This is the time at which
         * the frame became visible to the user.
         *
         * The presentation time measured in microseconds, is based on
         * CLOCK_MONOTONIC.
         *
         * Some buggy Mesa drivers up to 9.0.1 may
         * incorrectly report non-monotonic timestamps.
         * @returns the presentation time for the frame
         */
        get_presentation_time_us(): number;
        /**
         * Gets the refresh rate in Hertz for the output that the frame was on
         * at the time the frame was presented.
         *
         * Some platforms can't associate a #CoglOutput with a
         * #CoglFrameInfo object but are able to report a refresh rate via
         * this api. Therefore if you need this information then this api is
         * more reliable than using cogl_frame_info_get_output() followed by
         * cogl_output_get_refresh_rate().
         * @returns the refresh rate in Hertz
         */
        get_refresh_rate(): number;
        get_rendering_duration_ns(): number;
        get_sequence(): number;
        get_time_before_buffer_swap_us(): number;
        has_valid_gpu_rendering_duration(): boolean;
        is_hw_clock(): boolean;
        is_vsync(): boolean;
        is_zero_copy(): boolean;
    }

    namespace Framebuffer {
        // Signal callback interfaces

        interface Destroy {
            (_source: Framebuffer): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            destroy: Destroy;
            'notify::context': GObject.Object.Notify;
            'notify::driver-config': GObject.Object.Notify;
            'notify::driver-config': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            driver_config: any;
            driverConfig: any;
            height: number;
            width: number;
        }
    }

    abstract class Framebuffer extends GObject.Object {
        static $gtype: GObject.GType<Framebuffer>;

        // Properties

        get context(): Context;
        get driver_config(): any;
        get driverConfig(): any;
        get height(): number;
        set height(val: number);
        get width(): number;
        set width(val: number);

        // Constructors

        constructor(properties?: Partial<Framebuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Framebuffer.SignalSignatures>(
            signal: K,
            callback: Framebuffer.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Framebuffer.SignalSignatures>(
            signal: K,
            callback: Framebuffer.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Framebuffer.SignalSignatures>(
            signal: K,
            ...args: Framebuffer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): number;

        // Virtual methods

        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.
         */
        vfunc_allocate(): boolean;
        vfunc_is_y_flipped(): boolean;

        // Methods

        /**
         * Calls the provided callback when all previously-submitted commands have
         * been executed by the GPU.
         * @param callback A #CoglFenceCallback to be called when            all commands submitted to Cogl have been executed
         * @returns non-NULL if the fence succeeded, or %NULL if it was unable to  be inserted and the callback will never be called.  The user does not need to free the closure; it will be freed automatically when the callback is called, or cancelled.
         */
        add_fence_callback(callback: FenceCallback): FenceClosure | null;
        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        allocate(): boolean;
        /**
         * Removes a fence previously submitted with
         * cogl_framebuffer_add_fence_callback(); the callback will not be
         * called.
         * @param closure The #CoglFenceClosure returned from           cogl_framebuffer_add_fence_callback()
         */
        cancel_fence_callback(closure: FenceClosure): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of `CoglBufferBit`s identifying which auxiliary   buffers to clear
         * @param color The color to clear the color buffer too if specified in         @buffers.
         */
        clear(buffers: number, color: Color): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         * @param buffers A mask of `CoglBufferBit`s identifying which auxiliary   buffers to clear
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
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture for the first layer such as
         * #CoglTexture2DSliced textures which may internally be comprised of
         * multiple low-level textures.  This is unlike low-level drawing apis
         * such as cogl_primitive_draw() which only support low level texture
         * types that are directly supported by GPUs such as #CoglTexture2D.
         *
         * This api can not currently handle multiple high-level meta
         * texture layers. The first layer may be a high level meta texture
         * such as #CoglTexture2DSliced but all other layers much be low
         * level textures such as #CoglTexture2D.
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
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * If you want to describe a rectangle with a texture mapped on
         * it then you can use
         * cogl_framebuffer_draw_textured_rectangle().
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
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
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
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglMetaTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The given texture coordinates will only be used for the first
         * texture layer of the pipeline and if your pipeline has more than
         * one layer then all other layers will have default texture
         * coordinates of `s_1`=0.0 `t_1`=0.0 `s_2`=1.0 `t_2`=1.0
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in `s_1`=0, `t_1`=0, `s_2`=1, `t_2`=1.
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
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
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
         * Flushes `framebuffer` to ensure the current batch of commands is
         * submitted to the GPU.
         *
         * Unlike cogl_framebuffer_finish(), this does not block the CPU.
         */
        flush(): void;
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
         * Can be used to query the #CoglContext a given `framebuffer` was
         * instantiated within. This is the #CoglContext that was passed to
         * cogl_onscreen_new() for example.
         * @returns The #CoglContext that the given               @framebuffer was instantiated within.
         */
        get_context(): Context;
        /**
         * Retrieves the number of depth bits of `framebuffer`
         * @returns the number of bits
         */
        get_depth_bits(): number;
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
         * This may return %TRUE even when the underlying `framebuffer`
         * display pipeline does not support dithering. This value only represents
         * the user's request for dithering.
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
        get_modelview_matrix(): Graphene.Matrix;
        /**
         * Stores the current projection matrix in `matrix`.
         */
        get_projection_matrix(): Graphene.Matrix;
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
         * @param near The *distance* to the near clipping   plane (will be *negative* if the plane is   behind the viewer)
         * @param far The *distance* to the far clipping   plane (will be *negative* if the plane is   behind the viewer)
         */
        orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * based on the provided values.
         *
         * You should be careful not to have to great a `z_far` / `z_near`
         * ratio since that will reduce the effectiveness of depth testing
         * since there won't be enough precision to identify the depth of
         * objects near to each other.
         * @param fov_y Vertical field of view angle in degrees.
         * @param aspect The (width over height) aspect ratio for display
         * @param z_near The distance to the near clipping plane (Must be positive,   and must not be 0)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Reverts the clipping region to the state before the last call to
         * cogl_framebuffer_push_rectangle_clip(), or
         * cogl_framebuffer_push_primitive_clip().
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
         * Sets a new clipping area using a 2D shaped described with a
         * #CoglPrimitive. The shape must not contain self overlapping
         * geometry and must lie on a single 2D plane. A bounding box of the
         * 2D shape in local coordinates (the same coordinates used to
         * describe the shape) must be given. It is acceptable for the bounds
         * to be larger than the true bounds but behaviour is undefined if the
         * bounds are smaller than the true bounds.
         *
         * The primitive is transformed by the current model-view matrix and
         * the silhouette is intersected with the previous clipping area.  To
         * restore the previous clipping area, call
         * cogl_framebuffer_pop_clip().
         * @param primitive A #CoglPrimitive describing a flat 2D shape
         * @param bounds_x1 x coordinate for the top-left corner of the primitives             bounds
         * @param bounds_y1 y coordinate for the top-left corner of the primitives             bounds
         * @param bounds_x2 x coordinate for the bottom-right corner of the             primitives bounds.
         * @param bounds_y2 y coordinate for the bottom-right corner of the             primitives bounds.
         */
        push_primitive_clip(
            primitive: Primitive,
            bounds_x1: number,
            bounds_y1: number,
            bounds_x2: number,
            bounds_y2: number,
        ): void;
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
        push_region_clip(region: Mtk.Region): void;
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
         * ```c
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
         * g_object_unref (bitmap);
         * ```
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
         * @param source Identifies which auxiliary buffer you want to read          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
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
         * @param euler A #graphene_euler_t
         */
        rotate_euler(euler: Graphene.Euler): void;
        /**
         * Multiplies the current model-view matrix by one that scales the x,
         * y and z axes by the given values.
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
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
        set_modelview_matrix(matrix: Graphene.Matrix): void;
        /**
         * Sets `matrix` as the new projection matrix.
         * @param matrix the new projection matrix
         */
        set_projection_matrix(matrix: Graphene.Matrix): void;
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
         * There are some semantic differences between single-sample
         * rendering and multisampling with just 1 point sample such as it
         * being redundant to use the cogl_framebuffer_resolve_samples() and
         * cogl_framebuffer_resolve_samples_region() apis with single-sample
         * rendering.
         *
         * It's recommended that
         * cogl_framebuffer_resolve_samples_region() be explicitly used at the
         * end of rendering to a point sample buffer to minimize the number of
         * samples that get resolved. By default Cogl will implicitly resolve
         * all framebuffer samples but if only a small region of a
         * framebuffer has changed this can lead to redundant work being
         * done.
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
         * Although the function takes floating point arguments, existing
         * drivers only allow the use of integer values. In the future floating
         * point values will be exposed via a checkable feature.
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
        transform(matrix: Graphene.Matrix): void;
        /**
         * Multiplies the current model-view matrix by one that translates the
         * model along all three axes according to the given values.
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }

    namespace IndexBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Buffer.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating vertex indices.
     */
    class IndexBuffer extends Buffer {
        static $gtype: GObject.GType<IndexBuffer>;

        // Constructors

        constructor(properties?: Partial<IndexBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, bytes: number): IndexBuffer;

        // Signals

        connect<K extends keyof IndexBuffer.SignalSignatures>(
            signal: K,
            callback: IndexBuffer.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IndexBuffer.SignalSignatures>(
            signal: K,
            callback: IndexBuffer.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IndexBuffer.SignalSignatures>(
            signal: K,
            ...args: IndexBuffer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Indices {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Describe vertex indices stored in a #CoglIndexBuffer.
     *
     * Indices allow you to avoid duplicating vertices in your vertex data
     * by virtualizing your data and instead providing a sequence of index
     * values that tell the GPU which data should be used for each vertex.
     *
     * If the GPU is given a sequence of indices it doesn't simply walk
     * through each vertex of your data in order it will instead walk
     * through the indices which can provide random access to the
     * underlying data.
     *
     * Since it's very common to have duplicate vertices when describing a
     * shape as a list of triangles it can often be a significant space
     * saving to describe geometry using indices. Reducing the size of
     * your models can make it cheaper to map them into the GPU by
     * reducing the demand on memory bandwidth and may help to make better
     * use of your GPUs internal vertex caching.
     *
     * For example, to describe a quadrilateral as 2 triangles for the GPU
     * you could either provide data with 6 vertices or instead with
     * indices you can provide vertex data for just 4 vertices and an
     * index buffer that specifies the 6 vertices by indexing the shared
     * vertices multiple times.
     *
     * ```c
     *   CoglVertexP2 quad_vertices[] = {
     *     {x0, y0}, //0 = top left
     *     {x1, y1}, //1 = bottom left
     *     {x2, y2}, //2 = bottom right
     *     {x3, y3}, //3 = top right
     *   };
     *   //tell the gpu how to interpret the quad as 2 triangles...
     *   unsigned char indices[] = {0, 1, 2, 0, 2, 3};
     * ```
     *
     * Even in the above illustration we see a saving of 10bytes for one
     * quad compared to having data for 6 vertices and no indices but if
     * you need to draw 100s or 1000s of quads then its really quite
     * significant.
     *
     * Something else to consider is that often indices can be defined
     * once and remain static while the vertex data may change for
     * animations perhaps. That means you may be able to ignore the
     * negligible cost of mapping your indices into the GPU if they don't
     * ever change.
     *
     * The above illustration is actually a good example of static indices
     * because it's really common that developers have quad mesh data that
     * they need to display and we know exactly what that indices array
     * needs to look like depending on the number of quads that need to be
     * drawn. It doesn't matter how the quads might be animated and
     * changed the indices will remain the same. Cogl even has a utility
     * (cogl_get_rectangle_indices()) to get access to re-useable indices
     * for drawing quads as above.
     */
    class Indices extends GObject.Object {
        static $gtype: GObject.GType<Indices>;

        // Constructors

        constructor(properties?: Partial<Indices.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, type: IndicesType, indices_data: any | null, n_indices: number): Indices;

        static new_for_buffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices;

        // Signals

        connect<K extends keyof Indices.SignalSignatures>(signal: K, callback: Indices.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Indices.SignalSignatures>(
            signal: K,
            callback: Indices.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Indices.SignalSignatures>(
            signal: K,
            ...args: Indices.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_buffer(): IndexBuffer;
        get_indices_type(): IndicesType;
        get_offset(): number;
        set_offset(offset: number): void;
    }

    namespace MatrixStack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Efficiently tracking many related transformations.
     *
     * Tracks your current position within a hierarchy and lets you build
     * up a graph of transformations as you traverse through a hierarchy
     * such as a scenegraph.
     *
     * A #CoglMatrixStack always maintains a reference to a single
     * transformation at any point in time, representing the
     * transformation at the current position in the hierarchy. You can
     * get a reference to the current transformation by calling
     * cogl_matrix_stack_get_entry().
     *
     * When a #CoglMatrixStack is first created with
     * cogl_matrix_stack_new() then it is conceptually positioned at the
     * root of your hierarchy and the current transformation simply
     * represents an identity transformation.
     *
     * As you traverse your object hierarchy (your scenegraph) then you
     * should call cogl_matrix_stack_push() whenever you move down one
     * level and call cogl_matrix_stack_pop() whenever you move back up
     * one level towards the root.
     *
     * At any time you can apply a set of operations, such as "rotate",
     * "scale", "translate" on top of the current transformation of a
     * #CoglMatrixStack using functions such as
     * cogl_matrix_stack_rotate(), cogl_matrix_stack_scale() and
     * cogl_matrix_stack_translate(). These operations will derive a new
     * current transformation and will never affect a transformation
     * that you have referenced using cogl_matrix_stack_get_entry().
     *
     * Internally applying operations to a #CoglMatrixStack builds up a
     * graph of #CoglMatrixEntry structures which each represent a single
     * immutable transform.
     */
    class MatrixStack extends GObject.Object {
        static $gtype: GObject.GType<MatrixStack>;

        // Constructors

        constructor(properties?: Partial<MatrixStack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ctx: Context): MatrixStack;

        // Signals

        connect<K extends keyof MatrixStack.SignalSignatures>(
            signal: K,
            callback: MatrixStack.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MatrixStack.SignalSignatures>(
            signal: K,
            callback: MatrixStack.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MatrixStack.SignalSignatures>(
            signal: K,
            ...args: MatrixStack.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Replaces the current matrix with a perspective matrix for a given
         * viewing frustum defined by 4 side clip planes that all cross
         * through the origin and 2 near and far clip planes.
         * @param left X position of the left clipping plane where it   intersects the near clipping plane
         * @param right X position of the right clipping plane where it   intersects the near clipping plane
         * @param bottom Y position of the bottom clipping plane where it   intersects the near clipping plane
         * @param top Y position of the top clipping plane where it intersects   the near clipping plane
         * @param z_near The distance to the near clipping plane (Must be positive)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Resolves the current `stack` transform into a #graphene_matrix_t by
         * combining the operations that have been applied to build up the
         * current transform.
         *
         * There are two possible ways that this function may return its
         * result depending on whether the stack is able to directly point
         * to an internal #graphene_matrix_t or whether the result needs to be
         * composed of multiple operations.
         *
         * If an internal matrix contains the required result then this
         * function will directly return a pointer to that matrix, otherwise
         * if the function returns %NULL then `matrix` will be initialized
         * to match the current transform of `stack`.
         *
         * `matrix` will be left untouched if a direct pointer is
         * returned.
         * @returns A direct pointer to the current transform or %NULL               and in that case @matrix will be initialized with               the value of the current transform.
         */
        get(): [Graphene.Matrix, Graphene.Matrix];
        /**
         * Gets a reference to the current transform represented by a
         * #CoglMatrixEntry pointer.
         *
         * The transform represented by a #CoglMatrixEntry is
         * immutable.
         *
         * `CoglMatrixEntry`s are reference counted using
         * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() and you
         * should call cogl_matrix_entry_unref() when you are finished with
         * and entry you get via cogl_matrix_stack_get_entry().
         * @returns A pointer to the #CoglMatrixEntry               representing the current matrix stack transform.
         */
        get_entry(): MatrixEntry;
        /**
         * Gets the inverse transform of the current matrix and uses it to
         * initialize a new #graphene_matrix_t.
         * @returns %TRUE if the inverse was successfully calculated or %FALSE   for degenerate transformations that can't be inverted (in this case the   @inverse matrix will simply be initialized with the identity matrix)
         */
        get_inverse(): [boolean, Graphene.Matrix];
        /**
         * Resets the current matrix to the identity matrix.
         */
        load_identity(): void;
        /**
         * Multiplies the current matrix by the given matrix.
         * @param matrix the matrix to multiply with the current model-view
         */
        multiply(matrix: Graphene.Matrix): void;
        /**
         * Replaces the current matrix with an orthographic projection matrix.
         * @param x_1 The x coordinate for the first vertical clipping plane
         * @param y_1 The y coordinate for the first horizontal clipping plane
         * @param x_2 The x coordinate for the second vertical clipping plane
         * @param y_2 The y coordinate for the second horizontal clipping plane
         * @param near The *distance* to the near clipping   plane (will be *negative* if the plane is   behind the viewer)
         * @param far The *distance* to the far clipping   plane (will be *negative* if the plane is   behind the viewer)
         */
        orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void;
        /**
         * Replaces the current matrix with a perspective matrix based on the
         * provided values.
         *
         * You should be careful not to have too great a `z_far` / `z_near`
         * ratio since that will reduce the effectiveness of depth testing
         * since there won't be enough precision to identify the depth of
         * objects near to each other.
         * @param fov_y Vertical field of view angle in degrees.
         * @param aspect The (width over height) aspect ratio for display
         * @param z_near The distance to the near clipping plane (Must be positive,   and must not be 0)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Restores the previous transform that was last saved by calling
         * cogl_matrix_stack_push().
         *
         * This is usually called while traversing a scenegraph whenever you
         * return up one level in the graph towards the root node.
         */
        pop(): void;
        /**
         * Saves the current transform and starts a new transform that derives
         * from the current transform.
         *
         * This is usually called while traversing a scenegraph whenever you
         * traverse one level deeper. cogl_matrix_stack_pop() can then be
         * called when going back up one layer to restore the previous
         * transform of an ancestor.
         */
        push(): void;
        /**
         * Multiplies the current matrix by one that rotates the around the
         * axis-vector specified by `x,` `y` and `z`. The rotation follows the
         * right-hand thumb rule so for example rotating by 10 degrees about
         * the axis-vector (0, 0, 1) causes a small counter-clockwise
         * rotation.
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current matrix by one that rotates according to the
         * rotation described by `euler`.
         * @param euler A #graphene_euler_t
         */
        rotate_euler(euler: Graphene.Euler): void;
        /**
         * Multiplies the current matrix by one that scales the x, y and z
         * axes by the given values.
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Replaces the current `stack` matrix value with the value of `matrix`.
         * This effectively discards any other operations that were applied
         * since the last time cogl_matrix_stack_push() was called or since
         * the stack was initialized.
         * @param matrix A #graphene_matrix_t replace the current matrix value with
         */
        set(matrix: Graphene.Matrix): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Multiplies the current matrix by one that translates along all
         * three axes according to the given values.
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }

    namespace Offscreen {
        // Signal signatures
        interface SignalSignatures extends Framebuffer.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::driver-config': GObject.Object.Notify;
            'notify::driver-config': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Framebuffer.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating offscreen framebuffers.
     */
    class Offscreen extends Framebuffer {
        static $gtype: GObject.GType<Offscreen>;

        // Constructors

        constructor(properties?: Partial<Offscreen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_with_texture(texture: Texture): Offscreen;

        // Signals

        connect<K extends keyof Offscreen.SignalSignatures>(signal: K, callback: Offscreen.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Offscreen.SignalSignatures>(
            signal: K,
            callback: Offscreen.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Offscreen.SignalSignatures>(
            signal: K,
            ...args: Offscreen.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_texture(): Texture;
    }

    namespace Onscreen {
        // Signal signatures
        interface SignalSignatures extends Framebuffer.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::driver-config': GObject.Object.Notify;
            'notify::driver-config': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Framebuffer.ConstructorProps {}
    }

    class Onscreen extends Framebuffer {
        static $gtype: GObject.GType<Onscreen>;

        // Constructors

        constructor(properties?: Partial<Onscreen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Onscreen.SignalSignatures>(signal: K, callback: Onscreen.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Onscreen.SignalSignatures>(
            signal: K,
            callback: Onscreen.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Onscreen.SignalSignatures>(
            signal: K,
            ...args: Onscreen.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_bind(): void;
        vfunc_direct_scanout(scanout: Scanout, info: FrameInfo): boolean;
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
         * One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.
         *
         * The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.
         */
        vfunc_get_buffer_age(): number;
        /**
         * Implementation for https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_partial_update.txt
         * This immediately queues state to OpenGL that will be used for the
         * next swap.
         * This needs to be called every frame.
         *
         * The expected values are independent of any viewport transforms applied to
         * the framebuffer.
         * @param rectangles An array of integer 4-tuples              representing damaged rectangles as (x, y, width, height) tuples.
         */
        vfunc_queue_damage_region(rectangles: number[]): void;
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
         * It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.
         * @param rectangles An array of integer 4-tuples              representing damaged rectangles as (x, y, width, height) tuples.
         * @param info
         */
        vfunc_swap_buffers_with_damage(rectangles: number[], info: FrameInfo): void;
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
         * @param rectangles An array of integer 4-tuples              representing rectangles as (x, y, width, height) tuples.
         * @param info
         */
        vfunc_swap_region(rectangles: number[], info: FrameInfo): void;

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
         * describes a rectangle containing the newly dirtied region. Note that
         * this may be called multiple times to describe a non-rectangular
         * region composed of multiple smaller rectangles.
         *
         * The dirty events are separate from %COGL_FRAME_EVENT_SYNC events so
         * the application should also listen for this event before rendering
         * the dirty region to ensure that the framebuffer is actually ready
         * for rendering.
         * @param callback A callback function to call for dirty events
         * @param destroy An optional callback to destroy @user_data when the           @callback is removed or @onscreen is freed.
         * @returns a #CoglOnscreenDirtyClosure pointer that can be          used to remove the callback and associated @user_data later.
         */
        add_dirty_callback(callback: OnscreenDirtyCallback, destroy?: GLib.DestroyNotify | null): OnscreenDirtyClosure;
        /**
         * Installs a `callback` function that will be called for significant
         * events relating to the given `onscreen` framebuffer.
         *
         * The `callback` will be used to notify when the system compositor is
         * ready for this application to render a new frame. In this case
         * %COGL_FRAME_EVENT_SYNC will be passed as the event argument to the
         * given `callback` in addition to the #CoglFrameInfo corresponding to
         * the frame being acknowledged by the compositor.
         *
         * The `callback` will also be called to notify when the frame has
         * ended. In this case %COGL_FRAME_EVENT_COMPLETE will be passed as
         * the event argument to the given `callback` in addition to the
         * #CoglFrameInfo corresponding to the newly presented frame.  The
         * meaning of "ended" here simply means that no more timing
         * information will be collected within the corresponding
         * #CoglFrameInfo and so this is a good opportunity to analyse the
         * given info. It does not necessarily mean that the GPU has finished
         * rendering the corresponding frame.
         *
         * We highly recommend throttling your application according to
         * %COGL_FRAME_EVENT_SYNC events so that your application can avoid
         * wasting resources, drawing more frames than your system compositor
         * can display.
         * @param callback A callback function to call for frame events
         * @param destroy An optional callback to destroy @user_data           when the @callback is removed or @onscreen is freed.
         * @returns a #CoglFrameClosure pointer that can be used to          remove the callback and associated @user_data later.
         */
        add_frame_callback(callback: FrameCallback, destroy?: GLib.DestroyNotify | null): FrameClosure;
        add_frame_info(info: FrameInfo): void;
        direct_scanout(scanout: Scanout, info: FrameInfo, user_data?: any | null): boolean;
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
         * One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.
         *
         * The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.
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
         * This requests to make `onscreen` invisible to the user.
         *
         * Actually the precise semantics of this function depend on the
         * window system currently in use, and if you don't have a
         * multi-windowining system this function may in-fact do nothing.
         *
         * This function does not implicitly allocate the given `onscreen`
         * framebuffer before hiding it.
         *
         * Since Cogl doesn't explicitly track the visibility status of
         * onscreen framebuffers it won't try to avoid redundant window system
         * requests e.g. to show an already visible window. This also means
         * that it's acceptable to alternatively use native APIs to show and
         * hide windows without confusing Cogl.
         */
        hide(): void;
        /**
         * Implementation for https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_partial_update.txt
         * This immediately queues state to OpenGL that will be used for the
         * next swap.
         * This needs to be called every frame.
         *
         * The expected values are independent of any viewport transforms applied to
         * the framebuffer.
         * @param rectangles An array of integer 4-tuples              representing damaged rectangles as (x, y, width, height) tuples.
         */
        queue_damage_region(rectangles: number[]): void;
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
         * Since Cogl doesn't explicitly track the visibility status of
         * onscreen framebuffers it won't try to avoid redundant window system
         * requests e.g. to show an already visible window. This also means
         * that it's acceptable to alternatively use native APIs to show and
         * hide windows without confusing Cogl.
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
         * It is highly recommended that applications use
         * cogl_onscreen_swap_buffers_with_damage() instead whenever possible
         * and also use the cogl_onscreen_get_buffer_age() api so they can
         * perform incremental updates to older buffers instead of having to
         * render a full buffer for every frame.
         * @param frame_info
         * @param user_data
         */
        swap_buffers(frame_info: FrameInfo, user_data?: any | null): void;
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
         * It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.
         * @param rectangles An array of integer 4-tuples              representing damaged rectangles as (x, y, width, height) tuples.
         * @param info
         * @param user_data
         */
        swap_buffers_with_damage(rectangles: number[], info: FrameInfo, user_data?: any | null): void;
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
         * @param rectangles An array of integer 4-tuples              representing rectangles as (x, y, width, height) tuples.
         * @param info
         * @param user_data
         */
        swap_region(rectangles: number[], info: FrameInfo, user_data?: any | null): void;
    }

    namespace OnscreenTemplate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class OnscreenTemplate extends GObject.Object {
        static $gtype: GObject.GType<OnscreenTemplate>;

        // Constructors

        constructor(properties?: Partial<OnscreenTemplate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](swap_chain: SwapChain): OnscreenTemplate;

        // Signals

        connect<K extends keyof OnscreenTemplate.SignalSignatures>(
            signal: K,
            callback: OnscreenTemplate.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OnscreenTemplate.SignalSignatures>(
            signal: K,
            callback: OnscreenTemplate.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OnscreenTemplate.SignalSignatures>(
            signal: K,
            ...args: OnscreenTemplate.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Requires that any future CoglOnscreen framebuffers derived from
         * this template must support making at least `n` samples per pixel
         * which will all contribute to the final resolved color for that
         * pixel.
         *
         * By default this value is usually set to 0 and that is referred to
         * as "single-sample" rendering. A value of 1 or greater is referred
         * to as "multisample" rendering.
         *
         * There are some semantic differences between single-sample
         * rendering and multisampling with just 1 point sample such as it
         * being redundant to use the cogl_framebuffer_resolve_samples() and
         * cogl_framebuffer_resolve_samples_region() apis with single-sample
         * rendering.
         * @param n The minimum number of samples per pixel
         */
        set_samples_per_pixel(n: number): void;
        /**
         * Sets whether future #CoglOnscreen framebuffers derived from this
         * template are attempted to be created with both left and right
         * buffers, for use with stereo display. If the display system
         * does not support stereo, then creation of the framebuffer will
         * fail.
         * @param enabled Whether framebuffers are created with stereo buffers
         */
        set_stereo_enabled(enabled: boolean): void;
    }

    namespace Output {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Information about an output device
     *
     * The #CoglOutput object holds information about an output device
     * such as a monitor or laptop display. It can be queried to find
     * out the position of the output with respect to the screen
     * coordinate system and other information such as the resolution
     * and refresh rate of the device.
     *
     * There can be any number of outputs which may overlap: the
     * same area of the screen may be displayed by multiple output
     * devices.
     *
     * XXX: though it's possible to query the position of the output
     * with respect to screen coordinates, there is currently no way
     * of finding out the position of a #CoglOnscreen in screen
     * coordinates, at least without using windowing-system specific
     * API's, so it's not easy to get the output positions relative
     * to the #CoglOnscreen.
     */
    class Output extends GObject.Object {
        static $gtype: GObject.GType<Output>;

        // Constructors

        constructor(properties?: Partial<Output.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Output.SignalSignatures>(signal: K, callback: Output.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Output.SignalSignatures>(signal: K, callback: Output.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Output.SignalSignatures>(
            signal: K,
            ...args: Output.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the height of the output in pixels.
         * @returns the height of the output in pixels
         */
        get_height(): number;
        /**
         * Gets the physical height of the output. In some cases (such as
         * as a projector), the value returned here might correspond to
         * nominal resolution rather than the actual physical size of the
         * output device.
         * @returns the height of the output in millimeters. A value  of 0 indicates that the height is unknown
         */
        get_mm_height(): number;
        /**
         * Gets the physical width of the output. In some cases (such as
         * as a projector), the value returned here might correspond to
         * nominal resolution rather than the actual physical size of the
         * output device.
         * @returns the height of the output in millimeters. A value  of 0 indicates the width is unknown
         */
        get_mm_width(): number;
        /**
         * Gets the number of times per second that the output device refreshes
         * the display contents.
         * @returns the refresh rate of the output device. A value of zero  indicates that the refresh rate is unknown.
         */
        get_refresh_rate(): number;
        /**
         * For an output device where each pixel is made up of smaller components
         * with different colors, returns the layout of the subpixel
         * components.
         * @returns the order of subpixel components for the output device
         */
        get_subpixel_order(): SubpixelOrder;
        /**
         * Gets the width of the output in pixels.
         * @returns the width of the output in pixels
         */
        get_width(): number;
        /**
         * Gets the X position of the output with respect to the coordinate
         * system of the screen.
         * @returns the X position of the output as a pixel offset  from the left side of the screen coordinate space
         */
        get_x(): number;
        /**
         * Gets the Y position of the output with respect to the coordinate
         * system of the screen.
         * @returns the Y position of the output as a pixel offset  from the top side of the screen coordinate space
         */
        get_y(): number;
    }

    namespace Pipeline {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating the GPU pipeline
     *
     * Cogl allows creating and manipulating objects representing the full
     * configuration of the GPU pipeline. In simplified terms the GPU
     * pipeline takes primitive geometry as the input, it first performs
     * vertex processing, allowing you to deform your geometry, then
     * rasterizes that (turning it from pure geometry into fragments) then
     * performs fragment processing including depth testing and texture
     * mapping. Finally it blends the result with the framebuffer.
     */
    class Pipeline extends GObject.Object {
        static $gtype: GObject.GType<Pipeline>;

        // Constructors

        constructor(properties?: Partial<Pipeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context): Pipeline;

        // Signals

        connect<K extends keyof Pipeline.SignalSignatures>(signal: K, callback: Pipeline.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            callback: Pipeline.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pipeline.SignalSignatures>(
            signal: K,
            ...args: Pipeline.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a shader snippet that will hook on to the given layer of the
         * pipeline. The exact part of the pipeline that the snippet wraps
         * around depends on the hook that is given to
         * cogl_snippet_new(). Note that some hooks can't be used with a layer
         * and need to be added with cogl_pipeline_add_snippet() instead.
         * @param layer The layer to hook the snippet to
         * @param snippet A #CoglSnippet
         */
        add_layer_snippet(layer: number, snippet: Snippet): void;
        /**
         * Adds a shader snippet to `pipeline`. The snippet will wrap around or
         * replace some part of the pipeline as defined by the hook point in
         * `snippet`. Note that some hook points are specific to a layer and
         * must be added with cogl_pipeline_add_layer_snippet() instead.
         * @param snippet The #CoglSnippet to add to the vertex processing hook
         */
        add_snippet(snippet: Snippet): void;
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
         * Retrieves the current pipeline color.
         */
        get_color(): Color;
        get_cull_face_mode(): PipelineCullFaceMode;
        /**
         * Retrieves the current depth state configuration for the given
         * `pipeline` as previously set using cogl_pipeline_set_depth_state().
         */
        get_depth_state(): DepthState;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         * @returns The @pipeline front face winding
         */
        get_front_face_winding(): Winding;
        /**
         * Returns the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         * @param layer_index the layer number to change.
         */
        get_layer_filters(layer_index: number): [PipelineFilter, PipelineFilter];
        /**
         * Gets whether point sprite coordinate generation is enabled for this
         * texture layer.
         * @param layer_index the layer number to check.
         * @returns whether the texture coordinates will be replaced with point sprite coordinates.
         */
        get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
        get_layer_texture(layer_index: number): Texture;
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
         * @returns The current user program or %NULL.
         */
        get_user_program(): Program;
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
         * Blending occurs after the alpha test function, and combines fragments with
         * the framebuffer.
         *
         * Currently the only blend function Cogl exposes is ADD(). So any valid
         * blend statements will be of the form:
         *
         * ```
         *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
         * ```
         *
         * This is the list of source-names usable as blend factors:
         *
         * - `SRC_COLOR`: The color of the incoming fragment
         * - `DST_COLOR`: The color of the framebuffer
         * - `CONSTANT`: The constant set via cogl_pipeline_set_blend_constant()
         *
         * These can also be used as factors:
         *
         * - `0`: (0, 0, 0, 0)
         * - `1`: (1, 1, 1, 1)
         * - `SRC_ALPHA_SATURATE_FACTOR`: (f,f,f,1) where `f = MIN(SRC_COLOR[A],1-DST_COLOR[A])`
         *
         * Remember; all color components are normalized to the range [0, 1]
         * before computing the result of blending.
         *
         * - Blend Strings/1:
         * Blend a non-premultiplied source over a destination with
         * premultiplied alpha:
         *   ```
         * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
         * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
         *   ```
         *
         * Blend Strings/2:
         *   Blend a premultiplied source over a destination with
         *   premultiplied alpha
         *   ```
         * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
         *   ```
         *
         * The default blend string is:
         * ```
         *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
         * ```
         *
         * That gives normal alpha-blending when the calculated color for the pipeline
         * is in premultiplied form.
         * @param blend_string A Cogl blend string   describing the desired blend function.
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
         * Sets which faces will be culled when drawing. Face culling can be
         * used to increase efficiency by avoiding drawing faces that would
         * get overridden. For example, if a model has gaps so that it is
         * impossible to see the inside then faces which are facing away from
         * the screen will never be seen so there is no point in drawing
         * them. This can be achieved by setting the cull face mode to
         * %COGL_PIPELINE_CULL_FACE_MODE_BACK.
         *
         * Face culling relies on the primitives being drawn with a specific
         * order to represent which faces are facing inside and outside the
         * model. This order can be specified by calling
         * cogl_pipeline_set_front_face_winding().
         * @param cull_face_mode The new mode to set
         */
        set_cull_face_mode(cull_face_mode: PipelineCullFaceMode | null): void;
        /**
         * This commits all the depth state configured in `state` struct to the
         * given `pipeline`. The configuration values are copied into the
         * pipeline so there is no requirement to keep the #CoglDepthState
         * struct around if you don't need it any more.
         *
         * Note: Since some platforms do not support the depth range feature
         * it is possible for this function to fail and report an `error`.
         * @param state A #CoglDepthState struct
         * @returns %TRUE if the GPU supports all the given @state else %FALSE          and returns an @error.
         */
        set_depth_state(state: DepthState): boolean;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         * @param front_winding the winding order
         */
        set_front_face_winding(front_winding: Winding | null): void;
        /**
         * These are all the functions available for texture combining:
         *
         * - `REPLACE(arg0) = arg0`
         * - `MODULATE(arg0, arg1) = arg0 x arg1`
         * - `ADD(arg0, arg1) = arg0 + arg1`
         * - `ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5`
         * - `INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)`
         * - `SUBTRACT(arg0, arg1) = arg0 - arg1`
         * -
         * ```
         *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
         *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
         *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
         * ```
         * -
         * ```
         *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
         *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
         *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
         * ```
         *
         * The valid source names for texture combining are:
         *
         * - `TEXTURE`: Use the color from the current texture layer
         * - `TEXTURE_0, TEXTURE_1, etc`: Use the color from the specified texture layer
         * - `CONSTANT`: Use the color from the constant given with
         *     [method`Cogl`.Pipeline.set_layer_combine_constant]
         * - `PRIMARY`: Use the color of the pipeline as set with
         *     [method`Cogl`.Pipeline.set_color]
         * - `PREVIOUS`: Either use the texture color from the previous layer, or
         *     if this is layer 0, use the color of the pipeline as set with
         *     [method`Cogl`.Pipeline.set_color]
         *
         * Layer Combine Examples:
         *
         * This is effectively what the default blending is:
         *
         * ```
         * RGBA = MODULATE (PREVIOUS, TEXTURE)
         * ```
         *
         * This could be used to cross-fade between two images, using
         * the alpha component of a constant as the interpolator. The constant
         * color is given by calling [method`Cogl`.Pipeline.set_layer_combine_constant].
         *
         * ```
         * RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
         * ```
         *
         * You can't give a multiplication factor for arguments as you can
         * with blending.
         * @param layer_index Specifies the layer you want define a combine function for
         * @param blend_string A Cogl blend string describing the desired  texture combine function.
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
         * It is an error to pass anything other than
         * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
         * magnification filters since magnification doesn't ever need to
         * reference values stored in the mipmap chain.
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
        set_layer_matrix(layer_index: number, matrix: Graphene.Matrix): void;
        set_layer_max_mipmap_level(layer: number, max_level: number): void;
        /**
         * Sets the texture for this layer to be the default texture for the
         * given type. The default texture is a 1x1 pixel white texture.
         *
         * This function is mostly useful if you want to create a base
         * pipeline that you want to create multiple copies from using
         * cogl_pipeline_copy(). In that case this function can be used to
         * specify the texture type so that any pipeline copies can share the
         * internal texture type state for efficiency.
         * @param layer_index The layer number to modify
         */
        set_layer_null_texture(layer_index: number): void;
        /**
         * When rendering points, if `enable` is %TRUE then the texture
         * coordinates for this layer will be replaced with coordinates that
         * vary from 0.0 to 1.0 across the primitive. The top left of the
         * point will have the coordinates 0.0,0.0 and the bottom right will
         * have 1.0,1.0. If `enable` is %FALSE then the coordinates will be
         * fixed for the entire point.
         * @param layer_index the layer number to change.
         * @param enable whether to enable point sprite coord generation.
         * @returns %TRUE if the function succeeds, %FALSE otherwise.
         */
        set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean;
        set_layer_texture(layer_index: number, texture: Texture): void;
        /**
         * Sets the wrap mode for all three coordinates of texture lookups on
         * this layer. This is equivalent to calling
         * cogl_pipeline_set_layer_wrap_mode_s() and
         * cogl_pipeline_set_layer_wrap_mode_t() separately.
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode | null): void;
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
         * @param enable whether to enable per-vertex point size
         * @returns %TRUE if the change succeeded or %FALSE otherwise
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
         * row-major order. You can pass a #graphene_matrix_t by calling by passing
         * the result of graphene_matrix_to_float() in `value` and setting
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
         * ```c
         * CoglShader *shader;
         * CoglProgram *program;
         * CoglPipeline *pipeline;
         *
         * shader = cogl_create_shader (COGL_SHADER_TYPE_FRAGMENT);
         * cogl_shader_source (shader,
         *                     "!!ARBfp1.0\n"
         *                     "MOV result.color,fragment.color;\n"
         *                     "END\n");
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
         * It is possibly worth keeping in mind that this API is not part of
         * the long term design for how we want to expose shaders to Cogl
         * developers (We are planning on deprecating the cogl_program and
         * cogl_shader APIs in favour of a "snippet" framework) but in the
         * meantime we hope this will handle most practical GLSL and ARBfp
         * requirements.
         * @param program A linked CoglProgram
         */
        set_user_program(program: Program): void;
    }

    namespace PixelBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::default-target': GObject.Object.Notify;
            'notify::size': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
            'notify::update-hint': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Buffer.ConstructorProps {}
    }

    class PixelBuffer extends Buffer {
        static $gtype: GObject.GType<PixelBuffer>;

        // Constructors

        constructor(properties?: Partial<PixelBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, data: Uint8Array | string): PixelBuffer;

        // Signals

        connect<K extends keyof PixelBuffer.SignalSignatures>(
            signal: K,
            callback: PixelBuffer.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PixelBuffer.SignalSignatures>(
            signal: K,
            callback: PixelBuffer.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PixelBuffer.SignalSignatures>(
            signal: K,
            ...args: PixelBuffer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Primitive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Functions for creating, manipulating and drawing primitives
     */
    class Primitive extends GObject.Object {
        static $gtype: GObject.GType<Primitive>;

        // Constructors

        constructor(properties?: Partial<Primitive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_p2(context: Context, mode: VerticesMode, data: VertexP2[]): Primitive;

        static new_p2c4(context: Context, mode: VerticesMode, data: VertexP2C4[]): Primitive;

        static new_p2t2(context: Context, mode: VerticesMode, data: VertexP2T2[]): Primitive;

        static new_p2t2c4(context: Context, mode: VerticesMode, data: VertexP2T2C4[]): Primitive;

        static new_p3(context: Context, mode: VerticesMode, data: VertexP3[]): Primitive;

        static new_p3c4(context: Context, mode: VerticesMode, data: VertexP3C4[]): Primitive;

        static new_p3t2(context: Context, mode: VerticesMode, data: VertexP3T2[]): Primitive;

        static new_p3t2c4(context: Context, mode: VerticesMode, data: VertexP3T2C4[]): Primitive;

        static new_with_attributes(mode: VerticesMode, n_vertices: number, attributes: Attribute[]): Primitive;

        // Signals

        connect<K extends keyof Primitive.SignalSignatures>(signal: K, callback: Primitive.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Primitive.SignalSignatures>(
            signal: K,
            callback: Primitive.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Primitive.SignalSignatures>(
            signal: K,
            ...args: Primitive.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Sets whether the texture will automatically update the smaller
         * mipmap levels after any part of level 0 is updated. The update will
         * only occur whenever the texture is used for drawing with a texture
         * filter that requires the lower mipmap levels. An application should
         * disable this if it wants to upload its own data for the other
         * levels. By default auto mipmapping is enabled.
         * @param primitive_texture A #CoglPrimitiveTexture
         * @param value The new value for whether to auto mipmap
         */
        static texture_set_auto_mipmap(primitive_texture: Texture, value: boolean): void;

        // Methods

        /**
         * Makes a copy of an existing #CoglPrimitive. Note that the primitive
         * is a shallow copy which means it will use the same attributes and
         * attribute buffers as the original primitive.
         * @returns the new primitive
         */
        copy(): Primitive;
        /**
         * Draws the given `primitive` geometry to the specified destination
         * `framebuffer` using the graphics processing state described by `pipeline`.
         *
         * This drawing api doesn't support high-level meta texture types such
         * as #CoglTexture2DSliced so it is the user's responsibility to
         * ensure that only low-level textures that can be directly sampled by
         * a GPU such as #CoglTexture2D are associated with layers of the given
         * `pipeline`.
         * @param framebuffer A destination #CoglFramebuffer
         * @param pipeline A #CoglPipeline state object
         */
        draw(framebuffer: Framebuffer, pipeline: Pipeline): void;
        /**
         * Iterates all the attributes of the given #CoglPrimitive.
         * @param callback A #CoglPrimitiveAttributeCallback to be            called for each attribute
         */
        foreach_attribute(callback: PrimitiveAttributeCallback): void;
        get_first_vertex(): number;
        get_indices(): Indices[] | null;
        get_mode(): VerticesMode;
        /**
         * Queries the number of vertices to read when drawing the given
         * `primitive`. Usually this value is implicitly set when associating
         * vertex data or indices with a #CoglPrimitive.
         *
         * If cogl_primitive_set_indices() has been used to associate a
         * sequence of #CoglIndices with the given `primitive` then the
         * number of vertices to read can also be phrased as the number
         * of indices to read.
         *
         * To be clear; it doesn't refer to the number of vertices - in
         * terms of data - associated with the primitive it's just the number
         * of vertices to read and draw.
         * @returns The number of vertices to read when drawing.
         */
        get_n_vertices(): number;
        set_first_vertex(first_vertex: number): void;
        /**
         * Associates a sequence of #CoglIndices with the given `primitive`.
         *
         * #CoglIndices provide a way to virtualize your real vertex data by
         * providing a sequence of indices that index into your real vertex
         * data. The GPU will walk though the index values to indirectly
         * lookup the data for each vertex instead of sequentially walking
         * through the data directly. This lets you save memory by indexing
         * shared data multiple times instead of duplicating the data.
         *
         * The value passed as `n_indices` will simply update the
         * #CoglPrimitive `n_vertices` property as if
         * cogl_primitive_set_n_vertices() were called. This property defines
         * the number of vertices to draw or, put another way, how many
         * indices should be read from `indices` when drawing.
         *
         * The #CoglPrimitive `first_vertex` property
         * also affects drawing with indices by defining the first entry of the
         * indices to start drawing from.
         * @param indices A #CoglIndices array
         */
        set_indices(indices: Indices[]): void;
        set_mode(mode: VerticesMode | null): void;
        /**
         * Specifies how many vertices should be read when drawing the given
         * `primitive`.
         *
         * Usually this value is set implicitly when associating vertex data
         * or indices with a #CoglPrimitive.
         *
         * To be clear; it doesn't refer to the number of vertices - in
         * terms of data - associated with the primitive it's just the number
         * of vertices to read and draw.
         * @param n_vertices The number of vertices to read when drawing.
         */
        set_n_vertices(n_vertices: number): void;
    }

    namespace Program {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Program extends GObject.Object {
        static $gtype: GObject.GType<Program>;

        // Constructors

        constructor(properties?: Partial<Program.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Program.SignalSignatures>(signal: K, callback: Program.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Program.SignalSignatures>(
            signal: K,
            callback: Program.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Program.SignalSignatures>(
            signal: K,
            ...args: Program.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attaches a shader to a program object. A program can have multiple
         * vertex or fragment shaders but only one of them may provide a
         * main() function. It is allowed to use a program with only a vertex
         * shader or only a fragment shader.
         * @param shader a #CoglShader for a vertex of fragment shader.
         */
        attach_shader(shader: Shader): void;
        /**
         * Retrieve the location (offset) of a uniform variable in a shader program,
         * a uniform is a variable that is constant for all vertices/fragments for a
         * shader object and is possible to modify as an external parameter.
         * @param uniform_name the name of a uniform.
         * @returns the offset of a uniform in a specified program.
         */
        get_uniform_location(uniform_name: string): number;
        /**
         * Links a program making it ready for use. Note that calling this
         * function is optional. If it is not called the program will
         * automatically be linked the first time it is used.
         */
        link(): void;
        /**
         * Changes the value of a floating point uniform for the given linked
         * `program`.
         * @param uniform_location the uniform location retrieved from    [method@Program.get_uniform_location].
         * @param value the new value of the uniform.
         */
        set_uniform_1f(uniform_location: number, value: number): void;
        /**
         * Changes the value of an integer uniform for the given linked
         * `program`.
         * @param uniform_location the uniform location retrieved from    [method@Program.get_uniform_location].
         * @param value the new value of the uniform.
         */
        set_uniform_1i(uniform_location: number, value: number): void;
        /**
         * Changes the value of a float vector uniform, or uniform array for
         * the given linked `program`.
         * @param uniform_location the uniform location retrieved from    [method@Program.get_uniform_location].
         * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
         * @param value the new value of the uniform[s].
         */
        set_uniform_float(uniform_location: number, n_components: number, value: number[]): void;
        /**
         * Changes the value of a int vector uniform, or uniform array for
         * the given linked `program`.
         * @param uniform_location the uniform location retrieved from    [method@Program.get_uniform_location].
         * @param n_components The number of components for the uniform. For example with glsl you'd use 3 for a vec3 or 4 for a vec4.
         * @param value the new value of the uniform[s].
         */
        set_uniform_int(uniform_location: number, n_components: number, value: number[]): void;
        /**
         * Changes the value of a matrix uniform, or uniform array in the
         * given linked `program`.
         * @param uniform_location the uniform location retrieved from    [method@Program.get_uniform_location].
         * @param dimensions The dimensions of the matrix. So for for example pass    2 for a 2x2 matrix or 3 for 3x3.
         * @param transpose Whether to transpose the matrix when setting the uniform.
         * @param value the new value of the uniform.
         */
        set_uniform_matrix(uniform_location: number, dimensions: number, transpose: boolean, value: number[]): void;
    }

    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Choosing a means to render
     *
     * A #CoglRenderer represents a means to render. It encapsulates the
     * selection of an underlying driver, such as OpenGL or OpenGL-ES and
     * a selection of a window system binding API such as GLX or EGL.
     *
     * A #CoglRenderer has two states, "unconnected" and "connected". When
     * a renderer is first instantiated using cogl_renderer_new() it is
     * unconnected so that it can be configured and constraints can be
     * specified for how the backend driver and window system should be
     * chosen.
     *
     * After configuration a #CoglRenderer can (optionally) be explicitly
     * connected using cogl_renderer_connect() which allows for the
     * handling of connection errors so that fallback configurations can
     * be tried if necessary. Applications that don't support any
     * fallbacks though can skip using cogl_renderer_connect() and leave
     * Cogl to automatically connect the renderer.
     *
     * Once you have a configured #CoglRenderer it can be used to create a
     * #CoglDisplay object using cogl_display_new().
     */
    class Renderer extends GObject.Object {
        static $gtype: GObject.GType<Renderer>;

        // Constructors

        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Renderer;

        // Signals

        connect<K extends keyof Renderer.SignalSignatures>(signal: K, callback: Renderer.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            callback: Renderer.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            ...args: Renderer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): number;

        // Methods

        /**
         * This adds a renderer selection `constraint`.
         *
         * Applications should ideally minimize how many of these constraints they
         * depend on to ensure maximum portability.
         * @param constraint A #CoglRendererConstraint to add
         */
        add_constraint(constraint: RendererConstraint | null): void;
        bind_api(): void;
        /**
         * Tests if a given `onscreen_template` can be supported with the given
         * `renderer`.
         * @param onscreen_template A #CoglOnscreenTemplate
         * @returns %TRUE if the @onscreen_template can be supported,               else %FALSE.
         */
        check_onscreen_template(onscreen_template: OnscreenTemplate): boolean;
        /**
         * Connects the configured `renderer`. Renderer connection isn't a
         * very active process, it basically just means validating that
         * any given constraint criteria can be satisfied and that a
         * usable driver and window system backend can be found.
         * @returns %TRUE if there was no error while connecting the               given @renderer. %FALSE if there was an error.
         */
        connect(): boolean;
        connect(...args: never[]): any;
        /**
         * Iterates all known display outputs for the given `renderer` and
         * passes a corresponding #CoglOutput pointer to the given `callback`
         * for each one, along with the given `user_data`.
         * @param callback A #CoglOutputCallback to be called for            each display output
         */
        foreach_output(callback: OutputCallback): void;
        /**
         * Queries what underlying driver is being used by Cogl.
         *
         * This may only be called on a connected #CoglRenderer.
         */
        get_driver(): Driver;
        /**
         * Queries which window system backend Cogl has chosen to use.
         *
         * This may only be called on a connected #CoglRenderer.
         * @returns The #CoglWinsysID corresponding to the chosen window          system backend.
         */
        get_winsys_id(): WinsysID;
        is_dma_buf_supported(): boolean;
        /**
         * This removes a renderer selection `constraint`.
         *
         * Applications should ideally minimize how many of these constraints they
         * depend on to ensure maximum portability.
         * @param constraint A #CoglRendererConstraint to remove
         */
        remove_constraint(constraint: RendererConstraint | null): void;
        /**
         * Requests that Cogl should try to use a specific underlying driver
         * for rendering.
         *
         * If you select an unsupported driver then cogl_renderer_connect()
         * will fail and report an error. Most applications should not
         * explicitly select a driver and should rely on Cogl automatically
         * choosing the driver.
         *
         * This may only be called on an un-connected #CoglRenderer.
         * @param driver
         */
        set_driver(driver: Driver | null): void;
        /**
         * This allows you to explicitly select a winsys backend to use instead
         * of letting Cogl automatically select a backend.
         *
         * if you select an unsupported backend then cogl_renderer_connect()
         * will fail and report an error.
         *
         * This may only be called on an un-connected #CoglRenderer.
         * @param winsys_id An ID of the winsys you explicitly want to use.
         */
        set_winsys_id(winsys_id: WinsysID | null): void;
    }

    namespace Scanout {
        // Signal callback interfaces

        interface ScanoutFailed {
            (_source: Scanout, object: Onscreen): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'scanout-failed': ScanoutFailed;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Scanout extends GObject.Object {
        static $gtype: GObject.GType<Scanout>;

        // Constructors

        constructor(properties?: Partial<Scanout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](scanout_buffer: ScanoutBuffer): Scanout;

        // Signals

        connect<K extends keyof Scanout.SignalSignatures>(signal: K, callback: Scanout.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Scanout.SignalSignatures>(
            signal: K,
            callback: Scanout.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Scanout.SignalSignatures>(
            signal: K,
            ...args: Scanout.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        blit_to_framebuffer(framebuffer: Framebuffer, x: number, y: number): boolean;
        get_buffer(): ScanoutBuffer;
        get_dst_rect(rect: Mtk.Rectangle): void;
        get_src_rect(rect: Graphene.Rect): void;
        notify_failed(onscreen: Onscreen): void;
        set_dst_rect(rect: Mtk.Rectangle): void;
        set_src_rect(rect: Graphene.Rect): void;
    }

    namespace Shader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Functions for accessing the programmable GL pipeline
     *
     * Cogl allows accessing the GL programmable pipeline in order to create
     * vertex and fragment shaders.
     *
     * When using GLSL Cogl provides replacement names for most of the
     * builtin varyings and uniforms. It is recommended to use these names
     * wherever possible to increase portability between OpenGL 2.0 and
     * GLES 2.0. GLES 2.0 does not have most of the builtins under their
     * original names so they will only work with the Cogl names.
     *
     * For use in all GLSL shaders, the Cogl builtins are as follows:
     *
     * - `uniform mat4 cogl_modelview_matrix`
     *    The current modelview matrix. This is equivalent to
     *    #gl_ModelViewMatrix.
     * - `uniform mat4 cogl_projection_matrix`
     *    The current projection matrix. This is equivalent to
     *    #gl_ProjectionMatrix.
     * - `uniform mat4 cogl_modelview_projection_matrix`
     *    The combined modelview and projection matrix. A vertex shader
     *    would typically use this to transform the incoming vertex
     *    position. The separate modelview and projection matrices are
     *    usually only needed for lighting calculations. This is
     *    equivalent to #gl_ModelViewProjectionMatrix.
     * - `uniform mat4 cogl_texture_matrix[]`
     *    An array of matrices for transforming the texture
     *    coordinates. This is equivalent to #gl_TextureMatrix.
     *
     * In a vertex shader, the following are also available:
     *
     * - `attribute vec4 cogl_position_in`
     *    The incoming vertex position. This is equivalent to #gl_Vertex.
     * - `attribute vec4 cogl_color_in`
     *    The incoming vertex color. This is equivalent to #gl_Color.
     * - `attribute vec4 cogl_tex_coord_in`
     *    The texture coordinate for the first texture unit. This is
     *    equivalent to #gl_MultiTexCoord0.
     * - `attribute vec4 cogl_tex_coord0_in`
     *    The texture coordinate for the first texture unit. This is
     *    equivalent to #gl_MultiTexCoord0. There is also
     *    #cogl_tex_coord1_in and so on.
     * - `attribute vec3 cogl_normal_in`
     *    The normal of the vertex. This is equivalent to #gl_Normal.
     * - `vec4 cogl_position_out`
     *    The calculated position of the vertex. This must be written to
     *    in all vertex shaders. This is equivalent to #gl_Position.
     * - `float cogl_point_size_out`
     *    The calculated size of a point. This is equivalent to #gl_PointSize.
     * - `varying vec4 cogl_color_out`
     *    The calculated color of a vertex. This is equivalent to #gl_FrontColor.
     * - `varying vec4 cogl_tex_coord_out[]`
     *    An array of calculated texture coordinates for a vertex. This is
     *    equivalent to #gl_TexCoord.
     *
     * In a fragment shader, the following are also available:
     *
     * - `varying vec4 cogl_color_in`
     *    The calculated color of a vertex. This is equivalent to #gl_FrontColor.
     * - `varying vec4 cogl_tex_coord_in[]`
     *    An array of calculated texture coordinates for a vertex. This is
     *    equivalent to #gl_TexCoord.
     * - `vec4 cogl_color_out`
     *    The final calculated color of the fragment. All fragment shaders
     *    must write to this variable. This is equivalent to
     *    #gl_FrontColor.
     * - `float cogl_depth_out`
     *    An optional output variable specifying the depth value to use
     *    for this fragment. This is equivalent to #gl_FragDepth.
     * - `bool cogl_front_facing`
     *    A readonly variable that will be true if the current primitive
     *    is front facing. This can be used to implement two-sided
     *    coloring algorithms. This is equivalent to #gl_FrontFacing.
     *
     * It's worth nothing that this API isn't what Cogl would like to have
     * in the long term and it may be removed in Cogl 2.0. The
     * experimental #CoglShader API is the proposed replacement.
     */
    class Shader extends GObject.Object {
        static $gtype: GObject.GType<Shader>;

        // Constructors

        constructor(properties?: Partial<Shader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Shader.SignalSignatures>(signal: K, callback: Shader.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Shader.SignalSignatures>(signal: K, callback: Shader.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Shader.SignalSignatures>(
            signal: K,
            ...args: Shader.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the type of a shader
         * @returns %COGL_SHADER_TYPE_VERTEX if the shader is a vertex processor          or %COGL_SHADER_TYPE_FRAGMENT if the shader is a fragment processor
         */
        get_shader_type(): ShaderType;
        /**
         * Replaces the current source associated with a shader with a new
         * one.
         * @param source Shader source.
         */
        source(source: string): void;
    }

    namespace Snippet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating shader snippets
     *
     * `CoglSnippet`s are used to modify or replace parts of a
     * #CoglPipeline using GLSL. GLSL is a programming language supported
     * by OpenGL on programmable hardware to provide a more flexible
     * description of what should be rendered. A description of GLSL
     * itself is outside the scope of this documentation but any good
     * OpenGL book should help to describe it.
     *
     * Unlike in OpenGL, when using GLSL with Cogl it is possible to write
     * short snippets to replace small sections of the pipeline instead of
     * having to replace the whole of either the vertex or fragment
     * pipelines. Of course it is also possible to replace the whole of
     * the pipeline if needed.
     *
     * Each snippet is a standalone chunk of code which would attach to
     * the pipeline at a particular point. The code is split into four
     * separate strings (all of which are optional):
     *
     * - `declarations`
     * The code in this string will be inserted outside of any function in
     * the global scope of the shader. This can be used to declare
     * uniforms, attributes, varyings and functions to be used by the
     * snippet.
     * - `pre`
     * The code in this string will be inserted before the hook point.
     * - `post`
     * The code in this string will be inserted after the hook point. This
     * can be used to modify the results of the builtin generated code for
     * that hook point.
     * - `replace
     * If present the code in this string will replace the generated code
     * for the hook point.
     *
     * All of the strings apart from the declarations string of a pipeline
     * are generated in a single function so they can share variables
     * declared from one string in another. The scope of the code is
     * limited to each snippet so local variables declared in the snippet
     * will not collide with variables declared in another
     * snippet. However, code in the 'declarations' string is global to
     * the shader so it is the application's responsibility to ensure that
     * variables declared here will not collide with those from other
     * snippets.
     *
     * The snippets can be added to a pipeline with
     * cogl_pipeline_add_snippet() or
     * cogl_pipeline_add_layer_snippet(). Which function to use depends on
     * which hook the snippet is targeting. The snippets are all
     * generated in the order they are added to the pipeline. That is, the
     * post strings are executed in the order they are added to the
     * pipeline and the pre strings are executed in reverse order. If any
     * replace strings are given for a snippet then any other snippets
     * with the same hook added before that snippet will be ignored. The
     * different hooks are documented under #CoglSnippetHook.
     *
     * For portability with GLES2, it is recommended not to use the GLSL
     * builtin names such as gl_FragColor. Instead there are replacement
     * names under the cogl_* namespace which can be used instead. These
     * are:
     *
     * - `uniform mat4 cogl_modelview_matrix
     *    The current modelview matrix. This is equivalent to
     *    #gl_ModelViewMatrix.
     * - `uniform mat4 cogl_projection_matrix
     *    The current projection matrix. This is equivalent to
     *    #gl_ProjectionMatrix.
     * - `uniform mat4 cogl_modelview_projection_matrix
     *    The combined modelview and projection matrix. A vertex shader
     *    would typically use this to transform the incoming vertex
     *    position. The separate modelview and projection matrices are
     *    usually only needed for lighting calculations. This is
     *    equivalent to #gl_ModelViewProjectionMatrix.
     * - `uniform mat4 cogl_texture_matrix[]
     *    An array of matrices for transforming the texture
     *    coordinates. This is equivalent to #gl_TextureMatrix.
     *
     * In a vertex shader, the following are also available:
     *
     * - `attribute vec4 cogl_position_in
     *    The incoming vertex position. This is equivalent to #gl_Vertex.
     * - `attribute vec4 cogl_color_in`
     *    The incoming vertex color. This is equivalent to #gl_Color.
     * - `attribute vec4 cogl_tex_coord_in`
     *    The texture coordinate for layer 0. This is an alternative name
     *    for #cogl_tex_coord0_in.
     * - `attribute vec4 cogl_tex_coord0_in
     *    The texture coordinate for the layer 0. This is equivalent to
     *    #gl_MultiTexCoord0. There will also be #cogl_tex_coord1_in and
     *    so on if more layers are added to the pipeline.
     * - `attribute vec3 cogl_normal_in`
     *    The normal of the vertex. This is equivalent to #gl_Normal.
     * - `vec4 cogl_position_out
     *    The calculated position of the vertex. This must be written to
     *    in all vertex shaders. This is equivalent to #gl_Position.
     * - `float cogl_point_size_in
     *    The incoming point size from the cogl_point_size_in attribute.
     *    This is only available if
     *    cogl_pipeline_set_per_vertex_point_size() is set on the
     *    pipeline.
     * - `float cogl_point_size_out`
     *    The calculated size of a point. This is equivalent to #gl_PointSize.
     * - `varying vec4 cogl_color_out`
     *    The calculated color of a vertex. This is equivalent to #gl_FrontColor.
     * - `varying vec4 cogl_tex_coord0_out`
     *    The calculated texture coordinate for layer 0 of the pipeline.
     *    This is equivalent to #gl_TexCoord[0]. There will also be
     *    #cogl_tex_coord1_out and so on if more layers are added to the
     *    pipeline. In the fragment shader, this varying is called
     *    #cogl_tex_coord0_in.
     *
     * In a fragment shader, the following are also available:
     *
     * - `varying vec4 cogl_color_in`
     *    The calculated color of a vertex. This is equivalent to #gl_FrontColor.
     * - `varying vec4 cogl_tex_coord0_in`
     *    The texture coordinate for layer 0. This is equivalent to
     *    #gl_TexCoord[0]. There will also be #cogl_tex_coord1_in and so
     *    on if more layers are added to the pipeline.
     * - `vec4 cogl_color_out`
     *    The final calculated color of the fragment. All fragment shaders
     *    must write to this variable. This is equivalent to
     *    #gl_FrontColor.
     * - `float cogl_depth_out`
     *    An optional output variable specifying the depth value to use
     *    for this fragment. This is equivalent to #gl_FragDepth.
     * - `bool cogl_front_facing`
     *    A readonly variable that will be true if the current primitive
     *    is front facing. This can be used to implement two-sided
     *    coloring algorithms. This is equivalent to #gl_FrontFacing.
     * - `vec2 cogl_point_coord`
     *    When rendering points, this will contain a vec2 which represents
     *    the position within the point of the current fragment.
     *    vec2(0.0,0.0) will be the topleft of the point and vec2(1.0,1.0)
     *    will be the bottom right. Note that there is currently a bug in
     *    Cogl where when rendering to an offscreen buffer these
     *    coordinates will be upside-down. The value is undefined when not
     *    rendering points.
     *
     * Here is an example of using a snippet to add a desaturate effect to the
     * generated color on a pipeline.
     *
     * ```c
     *   CoglPipeline *pipeline = cogl_pipeline_new ();
     *
     *   /<!-- -->* Set up the pipeline here, ie by adding a texture or other
     *      layers *<!-- -->/
     *
     *   /<!-- -->* Create the snippet. The first string is the declarations which
     *      we will use to add a uniform. The second is the 'post' string which
     *      will contain the code to perform the desaturation. *<!-- -->/
     *   CoglSnippet *snippet =
     *     cogl_snippet_new (COGL_SNIPPET_HOOK_FRAGMENT,
     *                       "uniform float factor;",
     *                       "float gray = dot (vec3 (0.299, 0.587, 0.114), "
     *                       "                  cogl_color_out.rgb);"
     *                       "cogl_color_out.rgb = mix (vec3 (gray),"
     *                       "                          cogl_color_out.rgb,"
     *                       "                          factor);");
     *
     *   /<!-- -->* Add it to the pipeline *<!-- -->/
     *   cogl_pipeline_add_snippet (pipeline, snippet);
     *   /<!-- -->* The pipeline keeps a reference to the snippet
     *      so we don't need to *<!-- -->/
     *   g_object_unref (snippet);
     *
     *   /<!-- -->* Update the custom uniform on the pipeline *<!-- -->/
     *   int location = cogl_pipeline_get_uniform_location (pipeline, "factor");
     *   cogl_pipeline_set_uniform_1f (pipeline, location, 0.5f);
     *
     *   /<!-- -->* Now we can render with the snippet as usual *<!-- -->/
     *   cogl_push_source (pipeline);
     *   cogl_rectangle (0, 0, 10, 10);
     *   cogl_pop_source ();
     * ```
     */
    class Snippet extends GObject.Object {
        static $gtype: GObject.GType<Snippet>;

        // Constructors

        constructor(properties?: Partial<Snippet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](hook: SnippetHook, declarations?: string | null, post?: string | null): Snippet;

        // Signals

        connect<K extends keyof Snippet.SignalSignatures>(signal: K, callback: Snippet.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Snippet.SignalSignatures>(
            signal: K,
            callback: Snippet.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Snippet.SignalSignatures>(
            signal: K,
            ...args: Snippet.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_declarations(): string;
        get_hook(): SnippetHook;
        get_post(): string;
        get_pre(): string;
        get_replace(): string;
        /**
         * Sets a source string that will be inserted in the global scope of
         * the generated shader when this snippet is used on a pipeline. This
         * string is typically used to declare uniforms, attributes or
         * functions that will be used by the other parts of the snippets.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param declarations The new source string for the declarations section   of this snippet.
         */
        set_declarations(declarations: string): void;
        /**
         * Sets a source string that will be inserted after the hook point in
         * the generated shader for the pipeline that this snippet is attached
         * to. Please see the documentation of each hook point in
         * #CoglPipeline for a description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param post The new source string for the post section of this snippet.
         */
        set_post(post: string): void;
        /**
         * Sets a source string that will be inserted before the hook point in
         * the generated shader for the pipeline that this snippet is attached
         * to. Please see the documentation of each hook point in
         * #CoglPipeline for a description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param pre The new source string for the pre section of this snippet.
         */
        set_pre(pre: string): void;
        /**
         * Sets a source string that will be used instead of any generated
         * source code or any previous snippets for this hook point. Please
         * see the documentation of each hook point in #CoglPipeline for a
         * description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         * @param replace The new source string for the replace section of this snippet.
         */
        set_replace(replace: string): void;
    }

    namespace SubTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::format': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::loader': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Texture.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating sub-textures.
     *
     * These functions allow high-level textures to be created that
     * represent a sub-region of another texture. For example these
     * can be used to implement custom texture atlasing schemes.
     */
    class SubTexture extends Texture {
        static $gtype: GObject.GType<SubTexture>;

        // Constructors

        constructor(properties?: Partial<SubTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            ctx: Context,
            parent_texture: Texture,
            sub_x: number,
            sub_y: number,
            sub_width: number,
            sub_height: number,
        ): SubTexture;

        // Signals

        connect<K extends keyof SubTexture.SignalSignatures>(
            signal: K,
            callback: SubTexture.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SubTexture.SignalSignatures>(
            signal: K,
            callback: SubTexture.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SubTexture.SignalSignatures>(
            signal: K,
            ...args: SubTexture.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the parent texture that `sub_texture` derives its content
         * from.  This is the texture that was passed to
         * cogl_sub_texture_new() as the parent_texture argument.
         * @returns The parent texture that @sub_texture               derives its content from.
         */
        get_parent(): Texture;
    }

    namespace SwapChain {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class SwapChain extends GObject.Object {
        static $gtype: GObject.GType<SwapChain>;

        // Constructors

        constructor(properties?: Partial<SwapChain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SwapChain;

        // Signals

        connect<K extends keyof SwapChain.SignalSignatures>(signal: K, callback: SwapChain.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SwapChain.SignalSignatures>(
            signal: K,
            callback: SwapChain.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SwapChain.SignalSignatures>(
            signal: K,
            ...args: SwapChain.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_has_alpha(has_alpha: boolean): void;
        set_length(length: number): void;
    }

    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::format': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::loader': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            format: PixelFormat;
            height: number;
            loader: any;
            width: number;
        }
    }

    /**
     * Functions for creating and manipulating textures
     *
     * Cogl allows creating and manipulating textures using a uniform
     * API that tries to hide all the various complexities of creating,
     * loading and manipulating textures.
     */
    abstract class Texture extends GObject.Object {
        static $gtype: GObject.GType<Texture>;

        // Properties

        set context(val: Context);
        set format(val: PixelFormat);
        set height(val: number);
        set loader(val: any);
        set width(val: number);

        // Constructors

        constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Texture.SignalSignatures>(signal: K, callback: Texture.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Texture.SignalSignatures>(
            signal: K,
            callback: Texture.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Texture.SignalSignatures>(
            signal: K,
            ...args: Texture.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): number;

        // Methods

        /**
         * Explicitly allocates the storage for the given `texture` which
         * allows you to be sure that there is enough memory for the
         * texture and if not then the error can be handled gracefully.
         *
         * Normally applications don't need to use this api directly
         * since the texture will be implicitly allocated when data is set on
         * the texture, or if the texture is attached to a #CoglOffscreen
         * framebuffer and rendered too.
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
         * Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of @data in bytes or pass 0 to calculate             from the bytes-per-pixel of @format multiplied by the             @texture width.
         * @param data memory location to write the @texture's contents, or %NULL to only query the data size through the return value.
         * @returns the size of the texture data in bytes
         */
        get_data(format: PixelFormat | null, rowstride: number, data?: Uint8Array | null): number;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
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
         * By default the pre-multiplied state is `TRUE`.
         * @returns %TRUE if red, green and blue components are               internally stored pre-multiplied by the alpha               value or %FALSE if not.
         */
        get_premultiplied(): boolean;
        /**
         * Queries the width of a cogl texture.
         * @returns the width of the GPU side texture in pixels
         */
        get_width(): number;
        is_get_data_supported(): boolean;
        /**
         * Queries if a texture is sliced (stored as multiple GPU side tecture
         * objects).
         * @returns %TRUE if the texture is sliced, %FALSE if the texture   is stored as a single GPU texture
         */
        is_sliced(): boolean;
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
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.
         * @param format the #CoglPixelFormat used in the source @data buffer.
         * @param rowstride rowstride of the source @data buffer (computed from             the texture width and @format if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,         base texture)
         * @returns %TRUE if the data upload was successful, and               %FALSE otherwise
         */
        set_data(format: PixelFormat | null, rowstride: number, data: Uint8Array | string, level: number): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
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
         * The region set can't be larger than the source `data`
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
            data: Uint8Array | string,
        ): boolean;
        /**
         * Copies a specified source region from `bitmap` to the position
         * (`src_x,` `src_y)` of the given destination texture `handle`.
         *
         * The region updated can't be larger than the source
         * bitmap
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

    namespace Texture2D {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::format': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::loader': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Texture.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating 2D textures
     *
     * These functions allow low-level 2D textures to be allocated. These
     * differ from sliced textures for example which may internally be
     * made up of multiple 2D textures, or atlas textures where Cogl must
     * internally modify user texture coordinates before they can be used
     * by the GPU.
     */
    class Texture2D extends Texture {
        static $gtype: GObject.GType<Texture2D>;

        // Constructors

        constructor(properties?: Partial<Texture2D.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_bitmap(bitmap: Bitmap): Texture2D;

        static new_from_data(
            ctx: Context,
            width: number,
            height: number,
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array | string,
        ): Texture2D;

        static new_with_format(ctx: Context, width: number, height: number, format: PixelFormat): Texture2D;

        static new_with_size(ctx: Context, width: number, height: number): Texture2D;

        // Signals

        connect<K extends keyof Texture2D.SignalSignatures>(signal: K, callback: Texture2D.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Texture2D.SignalSignatures>(
            signal: K,
            callback: Texture2D.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Texture2D.SignalSignatures>(
            signal: K,
            ...args: Texture2D.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Texture2DSliced {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context': GObject.Object.Notify;
            'notify::format': GObject.Object.Notify;
            'notify::height': GObject.Object.Notify;
            'notify::loader': GObject.Object.Notify;
            'notify::width': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends Texture.ConstructorProps {}
    }

    /**
     * Functions for creating and manipulating 2D meta textures
     * that may internally be comprised of multiple 2D textures
     * with power-of-two sizes.
     *
     * These functions allow high-level meta textures (See the
     * #CoglMetaTexture interface) to be allocated that may internally be
     * comprised of multiple 2D texture "slices" with power-of-two sizes.
     *
     * This API can be useful when working with GPUs that don't have
     * native support for non-power-of-two textures or if you want to load
     * a texture that is larger than the GPUs maximum texture size limits.
     *
     * The algorithm for slicing works by first trying to map a virtual
     * size to the next larger power-of-two size and then seeing how many
     * wasted pixels that would result in. For example if you have a
     * virtual texture that's 259 texels wide, the next pot size = 512 and
     * the amount of waste would be 253 texels. If the amount of waste is
     * above a max-waste threshold then we would next slice that texture
     * into one that's 256 texels and then looking at how many more texels
     * remain unallocated after that we choose the next power-of-two size.
     * For the example of a 259 texel image that would mean having a 256
     * texel wide texture, leaving 3 texels unallocated so we'd then
     * create a 4 texel wide texture - now there is only one texel of
     * waste. The algorithm continues to slice the right most textures
     * until the amount of waste is less than or equal to a specified
     * max-waste threshold. The same logic for slicing from left to right
     * is also applied from top to bottom.
     */
    class Texture2DSliced extends Texture {
        static $gtype: GObject.GType<Texture2DSliced>;

        // Constructors

        constructor(properties?: Partial<Texture2DSliced.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced;

        static new_from_data(
            ctx: Context,
            width: number,
            height: number,
            max_waste: number,
            format: PixelFormat,
            rowstride: number,
            data: Uint8Array | string,
        ): Texture2DSliced;

        static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced;

        // Signals

        connect<K extends keyof Texture2DSliced.SignalSignatures>(
            signal: K,
            callback: Texture2DSliced.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Texture2DSliced.SignalSignatures>(
            signal: K,
            callback: Texture2DSliced.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Texture2DSliced.SignalSignatures>(
            signal: K,
            ...args: Texture2DSliced.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type AtlasTextureClass = typeof AtlasTexture;
    type AttributeBufferClass = typeof AttributeBuffer;
    type AttributeClass = typeof Attribute;
    type BitmapClass = typeof Bitmap;
    type BufferClass = typeof Buffer;
    /**
     * A generic color definition
     *
     * #CoglColor is a simple structure holding the definition of a color such
     * that it can be efficiently used by GL
     */
    class Color {
        static $gtype: GObject.GType<Color>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        // Static methods

        /**
         * Compares two `CoglColor`s and checks if they are the same.
         *
         * This function can be passed to g_hash_table_new() as the `key_equal_func`
         * parameter, when using `CoglColor`s as keys in a #GHashTable.
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
         * Retrieves the blue channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the blue channel of the passed color
         */
        get_blue(): number;
        /**
         * Retrieves the green channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the green channel of the passed color
         */
        get_green(): number;
        /**
         * Retrieves the red channel of `color` as a fixed point
         * value between 0 and 1.0.
         * @returns the red channel of the passed color
         */
        get_red(): number;
        /**
         * Sets the values of the passed channels into a #CoglColor
         * @param red value of the red channel, between 0 and 1.0
         * @param green value of the green channel, between 0 and 1.0
         * @param blue value of the blue channel, between 0 and 1.0
         * @param alpha value of the alpha channel, between 0 and 1.0
         */
        init_from_4f(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Converts a non-premultiplied color to a pre-multiplied color. For
         * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
         * and (0.5, 0, 0, 0.5) when premultiplied.
         */
        premultiply(): void;
        /**
         * Converts `color` to the HLS format.
         *
         * The `hue` value is in the 0 .. 360 range. The `luminance` and
         * `saturation` values are in the 0 .. 1 range.
         */
        to_hsl(): [number, number, number];
    }

    type ContextClass = typeof Context;
    /**
     * Functions for describing the depth testing state of your GPU.
     */
    class DepthState {
        static $gtype: GObject.GType<DepthState>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the current range to which normalized depth values are mapped
         * before writing to the depth buffer. This corresponds to the range
         * set with cogl_depth_state_set_range().
         * @param near_val A pointer to store the near component of the depth range
         * @param far_val A pointer to store the far component of the depth range
         */
        get_range(near_val: number, far_val: number): void;
        /**
         * Gets the current depth test enabled state as previously set by
         * cogl_depth_state_set_test_enabled().
         * @returns The pipeline's current depth test enabled state.
         */
        get_test_enabled(): boolean;
        /**
         * Gets the current depth test enable state as previously set via
         * cogl_depth_state_set_test_enabled().
         * @returns The current depth test enable state.
         */
        get_test_function(): DepthTestFunction;
        /**
         * Gets the depth writing enable state as set by the corresponding
         * cogl_depth_state_set_write_enabled().
         * @returns The current depth writing enable state
         */
        get_write_enabled(): boolean;
        /**
         * Initializes the members of `state` to their default values.
         *
         * You should never pass an un initialized #CoglDepthState structure
         * to cogl_pipeline_set_depth_state().
         */
        init(): void;
        /**
         * Sets the range to map depth values in normalized device coordinates
         * to before writing out to a depth buffer.
         *
         * After your geometry has be transformed, clipped and had perspective
         * division applied placing it in normalized device
         * coordinates all depth values between the near and far z clipping
         * planes are in the range -1 to 1. Before writing any depth value to
         * the depth buffer though the value is mapped into the range [0, 1].
         *
         * With this function you can change the range which depth values are
         * mapped too although the range must still lye within the range [0,
         * 1].
         *
         * By default normalized device coordinate depth values are mapped to
         * the full range of depth buffer values, [0, 1].
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state().
         * @param near_val The near component of the desired depth range which will be clamped to the range [0, 1]
         * @param far_val The far component of the desired depth range which will be clamped to the range [0, 1]
         */
        set_range(near_val: number, far_val: number): void;
        /**
         * Enables or disables depth testing according to the value of
         * `enable`.
         *
         * If depth testing is enable then the #CoglDepthTestFunction set
         * using cogl_depth_state_set_test_function() us used to evaluate
         * the depth value of incoming fragments against the corresponding
         * value stored in the current depth buffer, and if the test passes
         * then the fragments depth value is used to update the depth buffer.
         * (unless you have disabled depth writing via
         * cogl_depth_state_set_write_enabled())
         *
         * By default depth testing is disabled.
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state()
         * @param enable The enable state you want
         */
        set_test_enabled(enable: boolean): void;
        /**
         * Sets the #CoglDepthTestFunction used to compare the depth value of
         * an incoming fragment against the corresponding value in the current
         * depth buffer.
         *
         * By default the depth test function is %COGL_DEPTH_TEST_FUNCTION_LESS
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state()
         * @param _function The #CoglDepthTestFunction to set
         */
        set_test_function(_function: DepthTestFunction | null): void;
        /**
         * Enables or disables depth buffer writing according to the value of
         * `enable`. Normally when depth testing is enabled and the comparison
         * between a fragment's depth value and the corresponding depth buffer
         * value passes then the fragment's depth is written to the depth
         * buffer unless writing is disabled here.
         *
         * By default depth writing is enabled
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state()
         * @param enable The enable state you want
         */
        set_write_enabled(enable: boolean): void;
    }

    type DisplayClass = typeof Display;
    /**
     * An opaque type that tracks the lifetime of a DMA buffer fd. Release
     * with cogl_dma_buf_handle_free().
     */
    abstract class DmaBufHandle {
        static $gtype: GObject.GType<DmaBufHandle>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Releases `dmabuf_handle;` it is a programming error to release
         * an already released handle.
         */
        free(): void;
        get_bpp(): number;
        /**
         * Retrieves the file descriptor of `dmabuf_handle`.
         * @returns a valid file descriptor
         */
        get_fd(): number;
        /**
         * Retrieves the #CoglFramebuffer, backed by an exported DMABuf buffer,
         * of `dmabuf_handle`.
         * @returns a #CoglFramebuffer
         */
        get_framebuffer(): Framebuffer;
        get_height(): number;
        get_offset(): number;
        get_stride(): number;
        get_width(): number;
        mmap(): any | null;
        munmap(data?: any | null): boolean;
        sync_read_end(): boolean;
        sync_read_start(): boolean;
    }

    /**
     * Functions for notification of command completion
     *
     * Cogl allows notification of GPU command completion; users may mark
     * points in the GPU command stream and receive notification when the GPU
     * has executed to that point.
     */
    abstract class Fence {
        static $gtype: GObject.GType<Fence>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * An opaque type representing one future callback to be made when the
     * GPU command stream has passed a certain point.
     */
    abstract class FenceClosure {
        static $gtype: GObject.GType<FenceClosure>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_user_data(): any | null;
    }

    /**
     * An opaque type that tracks a #CoglFrameCallback and associated user
     * data. A #CoglFrameClosure pointer will be returned from
     * cogl_onscreen_add_frame_callback() and it allows you to remove a
     * callback later using cogl_onscreen_remove_frame_callback().
     */
    abstract class FrameClosure {
        static $gtype: GObject.GType<FrameClosure>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FrameInfoClass = typeof FrameInfo;
    type FramebufferClass = typeof Framebuffer;
    abstract class FramebufferDriverConfig {
        static $gtype: GObject.GType<FramebufferDriverConfig>;

        // Constructors

        _init(...args: any[]): void;
    }

    type IndexBufferClass = typeof IndexBuffer;
    type IndicesClass = typeof Indices;
    /**
     * Represents a single immutable transformation that was retrieved
     * from a #CoglMatrixStack using cogl_matrix_stack_get_entry().
     *
     * Internally a #CoglMatrixEntry represents a single matrix
     * operation (such as "rotate", "scale", "translate") which is applied
     * to the transform of a single parent entry.
     *
     * Using the #CoglMatrixStack api effectively builds up a graph of
     * these immutable #CoglMatrixEntry structures whereby operations
     * that can be shared between multiple transformations will result
     * in shared #CoglMatrixEntry nodes in the graph.
     *
     * When a #CoglMatrixStack is first created it references one
     * #CoglMatrixEntry that represents a single "load identity"
     * operation. This serves as the root entry and all operations
     * that are then applied to the stack will extend the graph
     * starting from this root "load identity" entry.
     *
     * Given the typical usage model for a #CoglMatrixStack and the way
     * the entries are built up while traversing a scenegraph then in most
     * cases where an application is interested in comparing two
     * transformations for equality then it is enough to simply compare
     * two #CoglMatrixEntry pointers directly. Technically this can lead
     * to false negatives that could be identified with a deeper
     * comparison but often these false negatives are unlikely and
     * don't matter anyway so this enables extremely cheap comparisons.
     *
     * `CoglMatrixEntry`s are reference counted using
     * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() not with
     * g_object_ref() and g_object_unref().
     */
    abstract class MatrixEntry {
        static $gtype: GObject.GType<MatrixEntry>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Determines if the only difference between two transforms is a
         * translation and if so returns what the `x,` `y,` and `z` components of
         * the translation are.
         *
         * If the difference between the two translations involves anything
         * other than a translation then the function returns %FALSE.
         * @param entry1 A second reference transform
         * @returns %TRUE if the only difference between the transform of                @entry0 and the transform of @entry1 is a translation,                otherwise %FALSE.
         */
        calculate_translation(entry1: MatrixEntry): [boolean, number, number, number];
        /**
         * Compares two arbitrary #CoglMatrixEntry transforms for equality
         * returning %TRUE if they are equal or %FALSE otherwise.
         *
         * In many cases it is unnecessary to use this api and instead
         * direct pointer comparisons of entries are good enough and much
         * cheaper too.
         * @param entry1 A second #CoglMatrixEntry to compare
         * @returns %TRUE if @entry0 represents the same transform as               @entry1, otherwise %FALSE.
         */
        equal(entry1: MatrixEntry): boolean;
        /**
         * Resolves the current `entry` transform into a #graphene_matrix_t by
         * combining the sequence of operations that have been applied to
         * build up the current transform.
         *
         * There are two possible ways that this function may return its
         * result depending on whether it's possible to directly point
         * to an internal #graphene_matrix_t or whether the result needs to be
         * composed of multiple operations.
         *
         * If an internal matrix contains the required result then this
         * function will directly return a pointer to that matrix, otherwise
         * if the function returns %NULL then `matrix` will be initialized
         * to match the transform of `entry`.
         *
         * `matrix` will be left untouched if a direct pointer is
         * returned.
         * @returns A direct pointer to a #graphene_matrix_t transform or %NULL               and in that case @matrix will be initialized with               the effective transform represented by @entry.
         */
        get(): [Graphene.Matrix, Graphene.Matrix];
        /**
         * Determines whether `entry` is known to represent an identity
         * transform.
         *
         * If this returns %TRUE then the entry is definitely the identity
         * matrix. If it returns %FALSE it may or may not be the identity
         * matrix but no expensive comparison is performed to verify it.
         * @returns %TRUE if @entry is definitely an identity transform,               otherwise %FALSE.
         */
        is_identity(): boolean;
        /**
         * Takes a reference on the given `entry` to ensure the `entry` stays
         * alive and remains valid. When you are finished with the `entry` then
         * you should call cogl_matrix_entry_unref().
         */
        ref(): MatrixEntry;
        /**
         * Releases a reference on `entry` either taken by calling
         * cogl_matrix_entry_unref() or to release the reference given when
         * calling cogl_matrix_stack_get_entry().
         */
        unref(): void;
    }

    type MatrixStackClass = typeof MatrixStack;
    type OffscreenClass = typeof Offscreen;
    type OnscreenClass = typeof Onscreen;
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

    type OnscreenTemplateClass = typeof OnscreenTemplate;
    type OutputClass = typeof Output;
    type PipelineClass = typeof Pipeline;
    type PixelBufferClass = typeof PixelBuffer;
    /**
     * A struct for describing the state of a file descriptor that Cogl
     * needs to block on. The `events` field contains a bitmask of
     * `CoglPollFDEvent`s that should cause the application to wake
     * up. After the application is woken up from idle it should pass back
     * an array of `CoglPollFD`s to Cogl and update the `revents`
     * mask to the actual events that occurred on the file descriptor.
     *
     * Note that CoglPollFD is deliberately exactly the same as struct
     * pollfd on Unix so that it can simply be cast when calling poll.
     */
    class PollFD {
        static $gtype: GObject.GType<PollFD>;

        // Fields

        fd: number;

        // Constructors

        constructor(
            properties?: Partial<{
                fd: number;
                events: unknown;
                revents: unknown;
            }>,
        );
        _init(...args: any[]): void;
    }

    type PrimitiveClass = typeof Primitive;
    type ProgramClass = typeof Program;
    type RendererClass = typeof Renderer;
    type ScanoutBufferInterface = typeof ScanoutBuffer;
    type ScanoutClass = typeof Scanout;
    type ShaderClass = typeof Shader;
    type SnippetClass = typeof Snippet;
    type SubTextureClass = typeof SubTexture;
    type SwapChainClass = typeof SwapChain;
    type Texture2DClass = typeof Texture2D;
    type Texture2DSlicedClass = typeof Texture2DSliced;
    type TextureClass = typeof Texture;
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

    abstract class TimestampQuery {
        static $gtype: GObject.GType<TimestampQuery>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p2().
     */
    class VertexP2 {
        static $gtype: GObject.GType<VertexP2>;

        // Fields

        x: number;
        y: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p2c4().
     */
    class VertexP2C4 {
        static $gtype: GObject.GType<VertexP2C4>;

        // Fields

        x: number;
        y: number;
        r: number;
        g: number;
        b: number;
        a: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                r: number;
                g: number;
                b: number;
                a: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p2t2().
     */
    class VertexP2T2 {
        static $gtype: GObject.GType<VertexP2T2>;

        // Fields

        x: number;
        y: number;
        s: number;
        t: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                s: number;
                t: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3t2c4().
     */
    class VertexP2T2C4 {
        static $gtype: GObject.GType<VertexP2T2C4>;

        // Fields

        x: number;
        y: number;
        s: number;
        t: number;
        r: number;
        g: number;
        b: number;
        a: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                s: number;
                t: number;
                r: number;
                g: number;
                b: number;
                a: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3().
     */
    class VertexP3 {
        static $gtype: GObject.GType<VertexP3>;

        // Fields

        x: number;
        y: number;
        z: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3c4().
     */
    class VertexP3C4 {
        static $gtype: GObject.GType<VertexP3C4>;

        // Fields

        x: number;
        y: number;
        z: number;
        r: number;
        g: number;
        b: number;
        a: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
                r: number;
                g: number;
                b: number;
                a: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3t2().
     */
    class VertexP3T2 {
        static $gtype: GObject.GType<VertexP3T2>;

        // Fields

        x: number;
        y: number;
        z: number;
        s: number;
        t: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
                s: number;
                t: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3t2c4().
     */
    class VertexP3T2C4 {
        static $gtype: GObject.GType<VertexP3T2C4>;

        // Fields

        x: number;
        y: number;
        z: number;
        s: number;
        t: number;
        r: number;
        g: number;
        b: number;
        a: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
                s: number;
                t: number;
                r: number;
                g: number;
                b: number;
                a: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    namespace ScanoutBuffer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ScanoutBufferNamespace {
        $gtype: GObject.GType<ScanoutBuffer>;
        prototype: ScanoutBuffer;
    }
    interface ScanoutBuffer extends GObject.Object {
        // Methods

        get_height(): number;
        get_width(): number;

        // Virtual methods

        vfunc_get_height(): number;
        vfunc_get_width(): number;
    }

    export const ScanoutBuffer: ScanoutBufferNamespace & {
        new (): ScanoutBuffer; // This allows `obj instanceof ScanoutBuffer`
    };

    type PipelineKey = string;
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
