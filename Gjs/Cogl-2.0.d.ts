/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cogl-2.0
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
 * Error enumeration for #CoglBuffer
 */
enum BufferError {
    /**
     * A buffer could not be mapped either
     *    because the feature isn't supported or because a system
     *    limitation was hit.
     */
    BUFFER_ERROR_MAP,
}
/**
 * The update hint on a buffer allows the user to give some detail on how often
 * the buffer data is going to be updated.
 */
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
     * An OpenGL driver.
     */
    GL,
    /**
     * An OpenGL driver using the core GL 3.1 profile
     */
    GL3,
    /**
     * An OpenGL ES 1.1 driver.
     */
    GLES1,
    /**
     * An OpenGL ES 2.0 driver.
     */
    GLES2,
    /**
     * A WebGL driver.
     */
    WEBGL,
}
/**
 * All the capabilities that can vary between different GPUs supported
 * by Cogl. Applications that depend on any of these features should explicitly
 * check for them using cogl_has_feature() or cogl_has_features().
 */
enum FeatureID {
    /**
     * The hardware supports non power
     *     of two textures, but you also need to check the
     *     %COGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP and %COGL_FEATURE_ID_TEXTURE_NPOT_REPEAT
     *     features to know if the hardware supports npot texture mipmaps
     *     or repeat modes other than
     *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE respectively.
     */
    OGL_FEATURE_ID_TEXTURE_NPOT_BASIC,
    /**
     * Mipmapping is supported in
     *     conjuntion with non power of two textures.
     */
    OGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP,
    /**
     * Repeat modes other than
     *     %COGL_PIPELINE_WRAP_MODE_CLAMP_TO_EDGE are supported by the
     *     hardware.
     */
    OGL_FEATURE_ID_TEXTURE_NPOT_REPEAT,
    /**
     * Non power of two textures are supported
     *    by the hardware. This is a equivalent to the
     *    %COGL_FEATURE_ID_TEXTURE_NPOT_BASIC, %COGL_FEATURE_ID_TEXTURE_NPOT_MIPMAP
     *    and %COGL_FEATURE_ID_TEXTURE_NPOT_REPEAT features combined.
     */
    OGL_FEATURE_ID_TEXTURE_NPOT,
    /**
     * Support for rectangular
     *    textures with non-normalized texture coordinates.
     */
    OGL_FEATURE_ID_TEXTURE_RECTANGLE,
    /**
     * 3D texture support
     */
    OGL_FEATURE_ID_TEXTURE_3D,
    /**
     * GLSL support
     */
    OGL_FEATURE_ID_GLSL,
    /**
     * ARBFP support
     */
    OGL_FEATURE_ID_ARBFP,
    /**
     * Offscreen rendering support
     */
    OGL_FEATURE_ID_OFFSCREEN,
    /**
     * Multisample support for
     *    offscreen framebuffers
     */
    OGL_FEATURE_ID_OFFSCREEN_MULTISAMPLE,
    /**
     * Multiple onscreen framebuffers
     *    supported.
     */
    OGL_FEATURE_ID_ONSCREEN_MULTIPLE,
    /**
     * Set if
     *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
     *     cogl_indices_new().
     */
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
    /**
     * cogl_pipeline_set_depth_range() support
     */
    OGL_FEATURE_ID_DEPTH_RANGE,
    /**
     * Whether
     *     cogl_pipeline_set_layer_point_sprite_coords_enabled() is supported.
     */
    OGL_FEATURE_ID_POINT_SPRITE,
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
    /**
     * Whether
     *    %COGL_PIPELINE_WRAP_MODE_MIRRORED_REPEAT is supported.
     */
    OGL_FEATURE_ID_MIRRORED_REPEAT,
    /**
     * Available if the window system supports reporting an event
     *     for swap buffer completions.
     */
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT,
    /**
     * Whether creating new GLES2 contexts is
     *    suported.
     */
    OGL_FEATURE_ID_GLES2_CONTEXT,
    /**
     * Whether #CoglFramebuffer support rendering
     *     the depth buffer to a texture.
     */
    OGL_FEATURE_ID_DEPTH_TEXTURE,
    /**
     * Whether frame presentation
     *    time stamps will be recorded in #CoglFrameInfo objects.
     */
    OGL_FEATURE_ID_PRESENTATION_TIME,
    OGL_FEATURE_ID_FENCE,
    /**
     * Whether cogl_point_size_in
     *     can be used as an attribute to set a per-vertex point size.
     */
    OGL_FEATURE_ID_PER_VERTEX_POINT_SIZE,
    /**
     * Support for
     *    %COGL_TEXTURE_COMPONENTS_RG as the internal components of a
     *    texture.
     */
    OGL_FEATURE_ID_TEXTURE_RG,
    /**
     * Available if the age of #CoglOnscreen back
     *    buffers are tracked and so cogl_onscreen_get_buffer_age() can be
     *    expected to return age values other than 0.
     */
    OGL_FEATURE_ID_BUFFER_AGE,
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
enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE,
}
/**
 * Error codes that relate to the cogl_gles2_context api.
 */
enum GLES2ContextError {
    /**
     * Creating GLES2 contexts
     *    isn't supported. Applications should use cogl_has_feature() to
     *    check for the %COGL_FEATURE_ID_GLES2_CONTEXT.
     */
    UNSUPPORTED,
    /**
     * An underlying driver error
     *    occured.
     */
    DRIVER,
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
enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
enum MaterialLayerType {
    TEXTURE,
}
enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
/**
 * Alpha testing happens before blending primitives with the framebuffer and
 * gives an opportunity to discard fragments based on a comparison with the
 * incoming alpha value and a reference alpha value. The #CoglPipelineAlphaFunc
 * determines how the comparison is done.
 */
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
 * A bitmask of events that Cogl may need to wake on for a file
 * descriptor. Note that these all have the same values as the
 * corresponding defines for the poll function call on Unix so they
 * may be directly passed to poll.
 */
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
enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
enum ShaderType {
    VERTEX,
    FRAGMENT,
}
/**
 * #CoglSnippetHook is used to specify a location within a
 * #CoglPipeline where the code of the snippet should be used when it
 * is attached to a pipeline.
 * 
 * <glosslist>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX_GLOBALS</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet at the beginning of the global section of the
 * shader for the vertex processing. Any declarations here can be
 * shared with all other snippets that are attached to a vertex hook.
 * Only the ‘declarations’ string is used and the other strings are
 * ignored.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_FRAGMENT_GLOBALS</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet at the beginning of the global section of the
 * shader for the fragment processing. Any declarations here can be
 * shared with all other snippets that are attached to a fragment
 * hook. Only the ‘declarations’ string is used and the other strings
 * are ignored.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the vertex processing
 * stage of the pipeline. This gives a chance for the application to
 * modify the vertex attributes generated by the shader. Typically the
 * snippet will modify cogl_color_out or cogl_position_out builtins.
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted at the top of the
 * main() function before any vertex processing is done.
 * </para>
 * <para>
 * The ‘replace’ string in `snippet` will be used instead of the
 * generated vertex processing if it is present. This can be used if
 * the application wants to provide a complete vertex shader and
 * doesn't need the generated output from Cogl.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted after all of the
 * standard vertex processing is done. This can be used to modify the
 * outputs.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_VERTEX_TRANSFORM</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the vertex transform stage.
 * Typically the snippet will use the cogl_modelview_matrix,
 * cogl_projection_matrix and cogl_modelview_projection_matrix matrices and the
 * cogl_position_in attribute. The hook must write to cogl_position_out.
 * The default processing for this hook will multiply cogl_position_in by
 * the combined modelview-projection matrix and store it on cogl_position_out.
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted at the top of the
 * main() function before the vertex transform is done.
 * </para>
 * <para>
 * The ‘replace’ string in `snippet` will be used instead of the
 * generated vertex transform if it is present.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted after all of the
 * standard vertex transformation is done. This can be used to modify the
 * cogl_position_out in addition to the default processing.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_POINT_SIZE</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the point size
 * calculation step within the vertex shader stage. The snippet should
 * write to the builtin cogl_point_size_out with the new point size.
 * The snippet can either read cogl_point_size_in directly and write a
 * new value or first read an existing value in cogl_point_size_out
 * that would be set by a previous snippet. Note that this hook is
 * only used if cogl_pipeline_set_per_vertex_point_size() is enabled
 * on the pipeline.
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted just before
 * calculating the point size.
 * </para>
 * <para>
 * The ‘replace’ string in `snippet` will be used instead of the
 * generated point size calculation if it is present.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted after the
 * standard point size calculation is done. This can be used to modify
 * cogl_point_size_out in addition to the default processing.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_FRAGMENT</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the fragment processing
 * stage of the pipeline. This gives a chance for the application to
 * modify the fragment color generated by the shader. Typically the
 * snippet will modify cogl_color_out.
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted at the top of the
 * main() function before any fragment processing is done.
 * </para>
 * <para>
 * The ‘replace’ string in `snippet` will be used instead of the
 * generated fragment processing if it is present. This can be used if
 * the application wants to provide a complete fragment shader and
 * doesn't need the generated output from Cogl.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted after all of the
 * standard fragment processing is done. At this point the generated
 * value for the rest of the pipeline state will already be in
 * cogl_color_out so the application can modify the result by altering
 * this variable.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_TEXTURE_COORD_TRANSFORM</glossterm>
 *    <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the texture coordinate
 * transformation of a particular layer. This can be used to replace
 * the processing for a layer or to modify the results.
 * </para>
 * <para>
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
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted just before the
 * fragment processing for this layer. At this point cogl_tex_coord
 * still contains the value of the texture coordinate attribute.
 * </para>
 * <para>
 * If a ‘replace’ string is given then this will be used instead of
 * the default fragment processing for this layer. The snippet can
 * modify cogl_tex_coord or leave it as is to apply no transformation.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted just after the
 * transformation. At this point cogl_tex_coord will contain the
 * results of the transformation but it can be further modified by the
 * snippet.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_LAYER_FRAGMENT</glossterm>
 *    <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the fragment processing
 * of a particular layer. This can be used to replace the processing
 * for a layer or to modify the results.
 * </para>
 * <para>
 * Within the snippet code for this hook there is an extra vec4
 * variable called ‘cogl_layer’. This contains the resulting color
 * that will be used for the layer. This can be modified in the ‘post’
 * section or it the default processing can be replaced entirely using
 * the ‘replace’ section.
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted just before the
 * fragment processing for this layer.
 * </para>
 * <para>
 * If a ‘replace’ string is given then this will be used instead of
 * the default fragment processing for this layer. The snippet must write to
 * the ‘cogl_layer’ variable in that case.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted just after the
 * fragment processing for the layer. The results can be modified by changing
 * the value of the ‘cogl_layer’ variable.
 * </para>
 *   </glossdef>
 *  </glossentry>
 *  <glossentry>
 *   <glossterm>%COGL_SNIPPET_HOOK_TEXTURE_LOOKUP</glossterm>
 *   <glossdef>
 * <para>
 * Adds a shader snippet that will hook on to the texture lookup part
 * of a given layer. This gives a chance for the application to modify
 * the coordinates that will be used for the texture lookup or to
 * alter the returned texel.
 * </para>
 * <para>
 * Within the snippet code for this hook there are three extra
 * variables available. ‘cogl_sampler’ is a sampler object
 * representing the sampler for the layer where the snippet is
 * attached. ‘cogl_tex_coord’ is a vec4 which contains the texture
 * coordinates that will be used for the texture lookup. This can be
 * modified. ‘cogl_texel’ will contain the result of the texture
 * lookup. This can also be modified.
 * </para>
 * <para>
 * The ‘declarations’ string in `snippet` will be inserted in the
 * global scope of the shader. Use this to declare any uniforms,
 * attributes or functions that the snippet requires.
 * </para>
 * <para>
 * The ‘pre’ string in `snippet` will be inserted at the top of the
 * main() function before any fragment processing is done. This is a
 * good place to modify the cogl_tex_coord variable.
 * </para>
 * <para>
 * If a ‘replace’ string is given then this will be used instead of a
 * the default texture lookup. The snippet would typically use its own
 * sampler in this case.
 * </para>
 * <para>
 * The ‘post’ string in `snippet` will be inserted after texture lookup
 * has been preformed. Here the snippet can modify the cogl_texel
 * variable to alter the returned texel.
 * </para>
 *   </glossdef>
 *  </glossentry>
 * </glosslist>
 */
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
 * Error codes that can be thrown when performing texture-pixmap-x11
 * operations.
 */
enum TexturePixmapX11Error {
    /**
     * An X11 protocol error
     */
    TEXTURE_PIXMAP_X11_ERROR_X11,
}
enum TexturePixmapX11ReportLevel {
    RAW_RECTANGLES,
    DELTA_RECTANGLES,
    BOUNDING_BOX,
    NON_EMPTY,
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
 * Identifies specific window system backends that Cogl supports.
 * 
 * These can be used to query what backend Cogl is using or to try and
 * explicitly select a backend to use.
 */
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
    /**
     * Use EGL with the PowerVR NULL window system
     */
    EGL_NULL,
    /**
     * Use EGL with the GDL platform
     */
    EGL_GDL,
    /**
     * Use EGL with the Wayland window system
     */
    EGL_WAYLAND,
    /**
     * Use EGL with the KMS platform
     */
    EGL_KMS,
    /**
     * Use EGL with the Android platform
     */
    EGL_ANDROID,
    /**
     * Use EGL with the Mir server
     */
    EGL_MIR,
    /**
     * Use the Microsoft Windows WGL binding API
     */
    WGL,
    /**
     * Use the SDL window system
     */
    SDL,
}
/**
 * The access hints for cogl_buffer_set_update_hint()
 */
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
enum BufferMapHint {
    /**
     * Tells Cogl that you plan to
     *    replace all the contents of the mapped region. The contents of
     *    the region specified are undefined after this flag is used to
     *    map a buffer.
     */
    _RANGE,
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
enum RendererConstraint {
    /**
     * Require the renderer to be X11 based
     */
    USES_X11,
    /**
     * Require the renderer to be X11
     *                                      based and use Xlib
     */
    USES_XLIB,
    /**
     * Require the renderer to be EGL based
     */
    USES_EGL,
    /**
     * Require that the
     *    renderer supports creating a #CoglGLES2Context via
     *    cogl_gles2_context_new(). This can be used to integrate GLES 2.0
     *    code into Cogl based applications.
     */
    SUPPORTS_COGL_GLES2,
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
const PREMULT_BIT: number
const STENCIL_BIT: number
const TEXTURE_MAX_WASTE: number
const VERSION_COMPONENT_BITS: number
const VERSION_MAX_COMPONENT_VALUE: number
function bitmap_error_quark(): number
function blend_string_error_quark(): number
function buffer_get_size(buffer: Buffer): number
function buffer_get_update_hint(buffer: Buffer): BufferUpdateHint
function buffer_map(buffer: Buffer, access: BufferAccess, hints: BufferMapHint): object | null
function buffer_map_range(buffer: Buffer, offset: number, size: number, access: BufferAccess, hints: BufferMapHint): object | null
function buffer_set_data(buffer: Buffer, offset: number, data: object | null, size: number): Bool
function buffer_set_update_hint(buffer: Buffer, hint: BufferUpdateHint): void
function buffer_unmap(buffer: Buffer): void
function color_equal(v1?: object | null, v2?: object | null): Bool
function color_init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
function debug_matrix_entry_print(entry: MatrixEntry): void
function debug_matrix_print(matrix: Matrix): void
function debug_object_foreach_type(func: DebugObjectForeachTypeCallback): void
function debug_object_print_instances(): void
function error_copy(error: GLib.Error): GLib.Error
function error_free(error: GLib.Error): void
function error_matches(error: GLib.Error, domain: number, code: number): Bool
function euler_equal(v1?: object | null, v2?: object | null): Bool
function foreach_feature(context: Context, callback: FeatureCallback): void
function framebuffer_error_quark(): number
function get_clock_time(context: Context): number
function get_draw_framebuffer(): Framebuffer
function get_static_identity_quaternion(): Quaternion
function get_static_zero_quaternion(): Quaternion
function gles2_texture_get_handle(texture: Texture, handle: number, target: number): Bool
function glib_renderer_source_new(renderer: Renderer, priority: number): GLib.Source
function glib_source_new(context: Context, priority: number): GLib.Source
function gtype_matrix_get_type(): GObject.Type
function handle_get_type(): GObject.Type
function handle_ref(handle: Handle): Handle
function handle_unref(handle: Handle): void
function has_feature(context: Context, feature: FeatureID): Bool
function is_atlas_texture(object?: object | null): Bool
function is_attribute(object?: object | null): Bool
function is_attribute_buffer(object?: object | null): Bool
function is_bitmap(object?: object | null): Bool
function is_buffer(object?: object | null): Bool
function is_context(object?: object | null): Bool
function is_display(object?: object | null): Bool
function is_frame_info(object?: object | null): Bool
function is_framebuffer(object?: object | null): Bool
function is_gles2_context(object?: object | null): Bool
function is_index_buffer(object?: object | null): Bool
function is_indices(object?: object | null): Bool
function is_matrix_stack(object?: object | null): Bool
function is_onscreen(object?: object | null): Bool
function is_onscreen_template(object?: object | null): Bool
function is_output(object?: object | null): Bool
function is_pipeline(object?: object | null): Bool
function is_pixel_buffer(object?: object | null): Bool
function is_primitive(object?: object | null): Bool
function is_primitive_texture(object?: object | null): Bool
function is_renderer(object?: object | null): Bool
function is_snippet(object?: object | null): Bool
function is_sub_texture(object?: object | null): Bool
function is_swap_chain(object?: object | null): Bool
function is_texture(object?: object | null): Bool
function is_texture_2d(object?: object | null): Bool
function is_texture_2d_sliced(object?: object | null): Bool
function is_texture_3d(object?: object | null): Bool
function is_texture_pixmap_x11(object?: object | null): Bool
function is_texture_rectangle(object?: object | null): Bool
function kms_display_queue_modes_reset(display: Display): void
function kms_display_set_ignore_crtc(display: Display, id: number, ignore: Bool): void
function kms_display_set_layout(display: Display, width: number, height: number, crtcs: KmsCrtc, n_crtcs: number): Bool
function kms_renderer_get_gbm(renderer: Renderer): object | null
function kms_renderer_get_kms_fd(renderer: Renderer): number
function kms_renderer_set_kms_fd(renderer: Renderer, fd: number): void
function matrix_equal(v1?: object | null, v2?: object | null): Bool
function poll_renderer_dispatch(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number): void
function poll_renderer_get_info(renderer: Renderer, poll_fds: PollFD, n_poll_fds: number, timeout: number): number
function pop_gles2_context(ctx: Context): void
function push_gles2_context(ctx: Context, gles2_ctx: GLES2Context, read_buffer: Framebuffer, write_buffer: Framebuffer): Bool
function quaternion_equal(v1?: object | null, v2?: object | null): Bool
function renderer_error_quark(): number
function texture_error_quark(): number
function vector3_add(result: number, a: number, b: number): void
function vector3_copy(vector: number): number
function vector3_cross_product(result: number, u: number, v: number): void
function vector3_distance(a: number, b: number): number
function vector3_divide_scalar(vector: number, scalar: number): void
function vector3_dot_product(a: number, b: number): number
function vector3_equal(v1?: object | null, v2?: object | null): Bool
function vector3_equal_with_epsilon(vector0: number, vector1: number, epsilon: number): Bool
function vector3_free(vector: number): void
function vector3_init(vector: number, x: number, y: number, z: number): void
function vector3_init_zero(vector: number): void
function vector3_invert(vector: number): void
function vector3_magnitude(vector: number): number
function vector3_multiply_scalar(vector: number, scalar: number): void
function vector3_normalize(vector: number): void
function vector3_subtract(result: number, a: number, b: number): void
function wayland_display_set_compositor_display(display: Display, wayland_display?: object | null): void
function wayland_onscreen_get_shell_surface(onscreen: Onscreen): object | null
function wayland_onscreen_get_surface(onscreen: Onscreen): object | null
function wayland_onscreen_resize(onscreen: Onscreen, width: number, height: number, offset_x: number, offset_y: number): void
function wayland_onscreen_set_foreign_surface(onscreen: Onscreen, surface?: object | null): void
function wayland_renderer_get_display(renderer: Renderer): object | null
function wayland_renderer_set_event_dispatch_enabled(renderer: Renderer, enable: Bool): void
function wayland_renderer_set_foreign_display(renderer: Renderer, display?: object | null): void
function wayland_texture_set_region_from_shm_buffer(texture: Texture, src_x: number, src_y: number, width: number, height: number, shm_buffer: object | null, dst_x: number, dst_y: number, level: number): Bool
function x11_onscreen_get_visual_xid(onscreen: Onscreen): number
function x11_onscreen_get_window_xid(onscreen: Onscreen): number
/**
 * A callback function to use for cogl_debug_object_foreach_type().
 */
interface DebugObjectForeachTypeCallback {
    (info: DebugObjectTypeInfo): void
}
/**
 * A callback used with cogl_foreach_feature() for enumerating all
 * context level features supported by Cogl.
 */
interface FeatureCallback {
    (feature: FeatureID): void
}
/**
 * The callback prototype used with
 * cogl_framebuffer_add_fence_callback() for notification of GPU
 * command completion.
 */
interface FenceCallback {
    (fence: Fence): void
}
/**
 * Is a callback that can be registered via
 * cogl_onscreen_add_frame_callback() to be called when a frame
 * progresses in some notable way.
 * 
 * Please see the documentation for #CoglFrameEvent and
 * cogl_onscreen_add_frame_callback() for more details about what
 * events can be notified.
 */
interface FrameCallback {
    (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void
}
/**
 * The type used by cogl for function pointers, note that this type
 * is used as a generic catch-all cast for function pointers and the
 * actual arguments and return type may be different.
 */
interface FuncPtr {
    (): void
}
/**
 * A callback used with cogl_meta_texture_foreach_in_region() to
 * retrieve details of all the low-level #CoglTexture<!-- -->s that
 * make up a given #CoglMetaTexture.
 */
interface MetaTextureCallback {
    (sub_texture: Texture, sub_texture_coords: number, meta_coords: number): void
}
/**
 * Is a callback that can be registered via
 * cogl_onscreen_add_dirty_callback() to be called when the windowing
 * system determines that a region of the onscreen window has been
 * lost and the application should redraw it.
 */
interface OnscreenDirtyCallback {
    (onscreen: Onscreen, info: OnscreenDirtyInfo): void
}
/**
 * Is a callback type used with the
 * cogl_onscreen_add_resize_callback() allowing applications to be
 * notified whenever an `onscreen` framebuffer is resized.
 * 
 * <note>Cogl automatically updates the viewport of an `onscreen`
 * framebuffer that is resized so this callback is also an indication
 * that the viewport has been modified too</note>
 * 
 * <note>A resize callback will only ever be called while dispatching
 * Cogl events from the system mainloop; so for example during
 * cogl_poll_renderer_dispatch(). This is so that callbacks shouldn't
 * occur while an application might have arbitrary locks held for
 * example.</note>
 */
interface OnscreenResizeCallback {
    (onscreen: Onscreen, width: number, height: number): void
}
interface OnscreenX11MaskCallback {
    (onscreen: Onscreen, event_mask: number): void
}
/**
 * A callback type that can be passed to
 * cogl_renderer_foreach_output() for iterating display outputs for a
 * given renderer.
 */
interface OutputCallback {
    (output: Output): void
}
/**
 * The callback prototype used with cogl_pipeline_foreach_layer() for
 * iterating all the layers of a `pipeline`.
 */
interface PipelineLayerCallback {
    (pipeline: Pipeline, layer_index: number): Bool
}
/**
 * The callback prototype used with cogl_primitive_foreach_attribute()
 * for iterating all the attributes of a #CoglPrimitive.
 * 
 * The function should return TRUE to continue iteration or FALSE to
 * stop.
 */
interface PrimitiveAttributeCallback {
    (primitive: Primitive, attribute: Attribute): Bool
}
interface SwapBuffersNotify {
    (framebuffer: Framebuffer): void
}
class Framebuffer {
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
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
     */
    allocate(): Bool
    /**
     * Removes a fence previously submitted with
     * cogl_framebuffer_add_fence_callback(); the callback will not be
     * called.
     */
    cancel_fence_callback(closure: FenceClosure): void
    /**
     * Clears all the auxiliary buffers identified in the `buffers` mask, and if
     * that includes the color buffer then the specified `color` is used.
     */
    clear(buffers: number, color: Color): void
    /**
     * Clears all the auxiliary buffers identified in the `buffers` mask, and if
     * that includes the color buffer then the specified `color` is used.
     */
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
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
     */
    discard_buffers(buffers: number): void
    /**
     * First defines a geometry primitive by grouping a set of vertex `attributes;`
     * specifying a `first_vertex;` a number of vertices (`n_vertices)` and
     * specifying  what kind of topology the vertices have via `mode`.
     * 
     * Then the function draws the given `primitive` geometry to the specified
     * destination `framebuffer` using the graphics processing pipeline described by
     * `pipeline`.
     * 
     * The list of #CoglAttribute<!-- -->s define the attributes of the vertices to
     * be drawn, such as positions, colors and normals and the number of attributes
     * is given as `n_attributes`.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
     * are associated with layers of the given `pipeline`.
     * 
     * <note>This api doesn't support any of the legacy global state options such
     * as cogl_set_depth_test_enabled(), cogl_set_backface_culling_enabled() or
     * cogl_program_use()</note>
     */
    draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void
    /**
     * Behaves the same as cogl_framebuffer_draw_attributes() except that
     * instead of reading vertex data sequentially from the specified
     * `attributes` the `indices` provide an indirection for how the data
     * should be indexed allowing a random access order to be
     * specified.
     * 
     * For example an indices array of [0, 1, 2, 0, 2, 3] could be used
     * used to draw two triangles (`mode` = %COGL_VERTICES_MODE_TRIANGLES +
     * `n_vertices` = 6) but only provide attribute data for the 4 corners
     * of a rectangle. When the GPU needs to read in each of the 6
     * vertices it will read the `indices` array for each vertex in
     * sequence and use the index to look up the vertex attribute data. So
     * here you can see that first and fourth vertex will point to the
     * same data and third and fifth vertex will also point to shared
     * data.
     * 
     * Drawing with indices can be a good way of minimizing the size of a
     * mesh by allowing you to avoid data for duplicate vertices because
     * multiple entries in the index array can refer back to a single
     * shared vertex.
     * 
     * <note>The `indices` array must be at least as long as `first_vertex`
     * + `n_vertices` otherwise the GPU will overrun the indices array when
     * looking up vertex data.</note>
     * 
     * Since it's very common to want to draw a run of rectangles using
     * indices to avoid duplicating vertex data you can use
     * cogl_get_rectangle_indices() to get a set of indices that can be
     * shared.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or
     * #CoglTexture3D are associated with layers of the given `pipeline`.
     * 
     * <note>This api doesn't support any of the legacy global state
     * options such as cogl_set_depth_test_enabled(),
     * cogl_set_backface_culling_enabled() or cogl_program_use()</note>
     */
    draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void
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
     */
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    /**
     * Draws the given `primitive` geometry to the specified destination
     * `framebuffer` using the graphics processing state described by `pipeline`.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
     * are associated with layers of the given `pipeline`.
     * 
     * <note>This api doesn't support any of the legacy global state options such
     * as cogl_set_depth_test_enabled(), cogl_set_backface_culling_enabled() or
     * cogl_program_use()</note>
     */
    draw_primitive(pipeline: Pipeline, primitive: Primitive): void
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
     */
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
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
     */
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
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
     */
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
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
     */
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
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
    finish(): void
    /**
     * Replaces the current projection matrix with a perspective matrix
     * for a given viewing frustum defined by 4 side clip planes that
     * all cross through the origin and 2 near and far clip planes.
     */
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    /**
     * Retrieves the number of alpha bits of `framebuffer`
     */
    get_alpha_bits(): number
    /**
     * Retrieves the number of blue bits of `framebuffer`
     */
    get_blue_bits(): number
    /**
     * Gets the current #CoglColorMask of which channels would be written to the
     * current framebuffer. Each bit set in the mask means that the
     * corresponding color would be written.
     */
    get_color_mask(): ColorMask
    /**
     * Can be used to query the #CoglContext a given `framebuffer` was
     * instantiated within. This is the #CoglContext that was passed to
     * cogl_onscreen_new() for example.
     */
    get_context(): Context
    /**
     * Retrieves the number of depth bits of `framebuffer`
     */
    get_depth_bits(): number
    /**
     * Retrieves the depth buffer of `framebuffer` as a #CoglTexture. You need to
     * call cogl_framebuffer_get_depth_texture(fb, TRUE); before using this
     * function.
     * 
     * <note>Calling this function implicitely allocates the framebuffer.</note>
     * <note>The texture returned stays valid as long as the framebuffer stays
     * valid.</note>
     */
    get_depth_texture(): Texture
    /**
     * Queries whether texture based depth buffer has been enabled via
     * cogl_framebuffer_set_depth_texture_enabled().
     */
    get_depth_texture_enabled(): Bool
    /**
     * Queries whether depth buffer writing is enabled for `framebuffer`. This
     * can be controlled via cogl_framebuffer_set_depth_write_enabled().
     */
    get_depth_write_enabled(): Bool
    /**
     * Returns whether dithering has been requested for the given `framebuffer`.
     * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
     * 
     * <note>This may return %TRUE even when the underlying `framebuffer`
     * display pipeline does not support dithering. This value only represents
     * the user's request for dithering.</note>
     */
    get_dither_enabled(): Bool
    /**
     * Retrieves the number of green bits of `framebuffer`
     */
    get_green_bits(): number
    /**
     * Queries the current height of the given `framebuffer`.
     */
    get_height(): number
    get_is_stereo(): Bool
    /**
     * Stores the current model-view matrix in `matrix`.
     */
    get_modelview_matrix(): /* matrix */ Matrix
    /**
     * Stores the current projection matrix in `matrix`.
     */
    get_projection_matrix(): /* matrix */ Matrix
    /**
     * Retrieves the number of red bits of `framebuffer`
     */
    get_red_bits(): number
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
     */
    get_samples_per_pixel(): number
    /**
     * Gets the current #CoglStereoMode, which defines which stereo buffers
     * should be drawn to. See cogl_framebuffer_set_stereo_mode().
     */
    get_stereo_mode(): StereoMode
    /**
     * Queries the x, y, width and height components of the current viewport as set
     * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
     * framebuffer_width and framebuffer_height.  The values are written into the
     * given `viewport` array.
     */
    get_viewport4fv(): /* viewport */ number[]
    /**
     * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
     * or the default value which is the height of the framebuffer.
     */
    get_viewport_height(): number
    /**
     * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
     * or the default value which is the width of the framebuffer.
     */
    get_viewport_width(): number
    /**
     * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
     * or the default value which is 0.
     */
    get_viewport_x(): number
    /**
     * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
     * or the default value which is 0.
     */
    get_viewport_y(): number
    /**
     * Queries the current width of the given `framebuffer`.
     */
    get_width(): number
    /**
     * Resets the current model-view matrix to the identity matrix.
     */
    identity_matrix(): void
    /**
     * Replaces the current projection matrix with an orthographic projection
     * matrix.
     */
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    /**
     * Replaces the current projection matrix with a perspective matrix
     * based on the provided values.
     * 
     * <note>You should be careful not to have to great a `z_far` / `z_near`
     * ratio since that will reduce the effectiveness of depth testing
     * since there wont be enough precision to identify the depth of
     * objects near to each other.</note>
     */
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    /**
     * Reverts the clipping region to the state before the last call to
     * cogl_framebuffer_push_scissor_clip(), cogl_framebuffer_push_rectangle_clip()
     * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
     */
    pop_clip(): void
    /**
     * Restores the model-view matrix on the top of the matrix stack.
     */
    pop_matrix(): void
    /**
     * Copies the current model-view matrix onto the matrix stack. The matrix
     * can later be restored with cogl_framebuffer_pop_matrix().
     */
    push_matrix(): void
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
     */
    push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void
    /**
     * Specifies a modelview transformed rectangular clipping area for all
     * subsequent drawing operations. Any drawing commands that extend
     * outside the rectangle will be clipped so that only the portion
     * inside the rectangle will be displayed. The rectangle dimensions
     * are transformed by the current model-view matrix.
     * 
     * The rectangle is intersected with the current clip region. To undo
     * the effect of this function, call cogl_framebuffer_pop_clip().
     */
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    /**
     * Specifies a rectangular clipping area for all subsequent drawing
     * operations. Any drawing commands that extend outside the rectangle
     * will be clipped so that only the portion inside the rectangle will
     * be displayed. The rectangle dimensions are not transformed by the
     * current model-view matrix.
     * 
     * The rectangle is intersected with the current clip region. To undo
     * the effect of this function, call cogl_framebuffer_pop_clip().
     */
    push_scissor_clip(x: number, y: number, width: number, height: number): void
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
     * |[
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
     */
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
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
     */
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
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
    resolve_samples(): void
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
     */
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    /**
     * Multiplies the current model-view matrix by one that rotates the
     * model around the axis-vector specified by `x,` `y` and `z`. The
     * rotation follows the right-hand thumb rule so for example rotating
     * by 10 degrees about the axis-vector (0, 0, 1) causes a small
     * counter-clockwise rotation.
     */
    rotate(angle: number, x: number, y: number, z: number): void
    /**
     * Multiplies the current model-view matrix by one that rotates
     * according to the rotation described by `euler`.
     */
    rotate_euler(euler: Euler): void
    /**
     * Multiplies the current model-view matrix by one that rotates
     * according to the rotation described by `quaternion`.
     */
    rotate_quaternion(quaternion: Quaternion): void
    /**
     * Multiplies the current model-view matrix by one that scales the x,
     * y and z axes by the given values.
     */
    scale(x: number, y: number, z: number): void
    /**
     * Defines a bit mask of which color channels should be written to the
     * given `framebuffer`. If a bit is set in `color_mask` that means that
     * color will be written.
     */
    set_color_mask(color_mask: ColorMask): void
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
     */
    set_depth_texture_enabled(enabled: Bool): void
    /**
     * Enables or disables depth buffer writing when rendering to `framebuffer`.
     * If depth writing is enabled for both the framebuffer and the rendering
     * pipeline, and the framebuffer has an associated depth buffer, depth
     * information will be written to this buffer during rendering.
     * 
     * Depth buffer writing is enabled by default.
     */
    set_depth_write_enabled(depth_write_enabled: Bool): void
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
     */
    set_dither_enabled(dither_enabled: Bool): void
    /**
     * Sets `matrix` as the new model-view matrix.
     */
    set_modelview_matrix(matrix: Matrix): void
    /**
     * Sets `matrix` as the new projection matrix.
     */
    set_projection_matrix(matrix: Matrix): void
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
     */
    set_samples_per_pixel(samples_per_pixel: number): void
    /**
     * Sets which stereo buffers should be drawn to. The default
     * is %COGL_STEREO_BOTH, which means that both the left and
     * right buffers will be affected by drawing. For this to have
     * an effect, the display system must support stereo drawables,
     * and the framebuffer must have been created with stereo
     * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
     * cogl_framebuffer_get_is_stereo().)
     */
    set_stereo_mode(stereo_mode: StereoMode): void
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
     */
    set_viewport(x: number, y: number, width: number, height: number): void
    /**
     * Multiplies the current model-view matrix by the given matrix.
     */
    transform(matrix: Matrix): void
    /**
     * Multiplies the current model-view matrix by one that translates the
     * model along all three axes according to the given values.
     */
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): number
}
class Texture {
    /* Methods of Cogl-2.0.Cogl.Texture */
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
     */
    get_data(format: PixelFormat, rowstride: number, data: number): number
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
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
     */
    set_components(components: TextureComponents): void
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
     * |[
     *  next_width = MAX (1, floor (prev_width));
     * ```
     * 
     * 
     * You can determine the number of mipmap levels for a given texture
     * like this:
     * 
     * |[
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
     */
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
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
    set_premultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     */
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    /**
     * Copies a specified source region from `bitmap` to the position
     * (`src_x,` `src_y)` of the given destination texture `handle`.
     * 
     * <note>The region updated can't be larger than the source
     * bitmap</note>
     */
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
}
class AtlasTexture {
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bmp: Bitmap): AtlasTexture
    static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): AtlasTexture
    static new_from_file(ctx: Context, filename: string): AtlasTexture
    static new_with_size(ctx: Context, width: number, height: number): AtlasTexture
}
class Attribute {
    /* Methods of Cogl-2.0.Cogl.Attribute */
    get_buffer(): AttributeBuffer
    get_normalized(): Bool
    /**
     * Sets a new #CoglAttributeBuffer for the attribute.
     */
    set_buffer(attribute_buffer: AttributeBuffer): void
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
     */
    set_normalized(normalized: Bool): void
    static name: string
    static new(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    constructor(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType)
    /* Static methods and pseudo-constructors */
    static new(attribute_buffer: AttributeBuffer, name: string, stride: number, offset: number, components: number, type: AttributeType): Attribute
    static new_const_1f(context: Context, name: string, value: number): Attribute
    static new_const_2f(context: Context, name: string, component0: number, component1: number): Attribute
    static new_const_2fv(context: Context, name: string, value: number): Attribute
    static new_const_2x2fv(context: Context, name: string, matrix2x2: number, transpose: Bool): Attribute
    static new_const_3f(context: Context, name: string, component0: number, component1: number, component2: number): Attribute
    static new_const_3fv(context: Context, name: string, value: number): Attribute
    static new_const_3x3fv(context: Context, name: string, matrix3x3: number, transpose: Bool): Attribute
    static new_const_4f(context: Context, name: string, component0: number, component1: number, component2: number, component3: number): Attribute
    static new_const_4fv(context: Context, name: string, value: number): Attribute
    static new_const_4x4fv(context: Context, name: string, matrix4x4: number, transpose: Bool): Attribute
}
class AttributeBuffer {
    static name: string
    /* Static methods and pseudo-constructors */
    static new_with_size(context: Context, bytes: number): AttributeBuffer
}
class Bitmap {
    /* Methods of Cogl-2.0.Cogl.Bitmap */
    get_buffer(): PixelBuffer
    get_format(): PixelFormat
    get_height(): number
    get_rowstride(): number
    get_width(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_data(context: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bitmap
    static new_from_buffer(buffer: Buffer, format: PixelFormat, width: number, height: number, rowstride: number, offset: number): Bitmap
    static new_from_file(filename: string): Bitmap
    static new_with_size(context: Context, width: number, height: number, format: PixelFormat): Bitmap
    /**
     * Parses an image file enough to extract the width and height
     * of the bitmap.
     */
    static get_size_from_file(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}
class Context {
    /* Methods of Cogl-2.0.Cogl.Context */
    /**
     * Retrieves the #CoglDisplay that is internally associated with the
     * given `context`. This will return the same #CoglDisplay that was
     * passed to cogl_context_new() or if %NULL was passed to
     * cogl_context_new() then this function returns a pointer to the
     * display that was automatically setup internally.
     */
    get_display(): Display
    /**
     * Retrieves the #CoglRenderer that is internally associated with the
     * given `context`. This will return the same #CoglRenderer that was
     * passed to cogl_display_new() or if %NULL was passed to
     * cogl_display_new() or cogl_context_new() then this function returns
     * a pointer to the renderer that was automatically connected
     * internally.
     */
    get_renderer(): Renderer
    static name: string
    static new(display?: Display | null): Context
    constructor(display?: Display | null)
    /* Static methods and pseudo-constructors */
    static new(display?: Display | null): Context
}
class Display {
    /* Methods of Cogl-2.0.Cogl.Display */
    /**
     * Queries the #CoglRenderer associated with the given `display`.
     */
    get_renderer(): Renderer
    /**
     * Specifies a template for creating #CoglOnscreen framebuffers.
     * 
     * Depending on the system, the constraints for creating #CoglOnscreen
     * framebuffers need to be known before setting up a #CoglDisplay because the
     * final setup of the display may constrain how onscreen framebuffers may be
     * allocated. If Cogl knows how an application wants to allocate onscreen
     * framebuffers then it can try to make sure to setup the display accordingly.
     */
    set_onscreen_template(onscreen_template: OnscreenTemplate): void
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
     */
    setup(): Bool
    static name: string
    static new(renderer: Renderer, onscreen_template: OnscreenTemplate): Display
    constructor(renderer: Renderer, onscreen_template: OnscreenTemplate)
    /* Static methods and pseudo-constructors */
    static new(renderer: Renderer, onscreen_template: OnscreenTemplate): Display
}
class Fixed {
    static name: string
}
class FrameInfo {
    /* Methods of Cogl-2.0.Cogl.FrameInfo */
    /**
     * Gets the frame counter for the #CoglOnscreen that corresponds
     * to this frame.
     */
    get_frame_counter(): number
    /**
     * Gets the #CoglOutput that the swapped frame was presented to.
     */
    get_output(): Output
    /**
     * Gets the presentation time for the frame. This is the time at which
     * the frame became visible to the user.
     * 
     * The presentation time measured in nanoseconds is based on a
     * monotonic time source. The time source is not necessarily
     * correlated with system/wall clock time and may represent the time
     * elapsed since some undefined system event such as when the system
     * last booted.
     * 
     * <note>Linux kernel version less that 3.8 can result in
     * non-monotonic timestamps being reported when using a drm based
     * OpenGL driver. Also some buggy Mesa drivers up to 9.0.1 may also
     * incorrectly report non-monotonic timestamps.</note>
     */
    get_presentation_time(): number
    /**
     * Gets the refresh rate in Hertz for the output that the frame was on
     * at the time the frame was presented.
     * 
     * <note>Some platforms can't associate a #CoglOutput with a
     * #CoglFrameInfo object but are able to report a refresh rate via
     * this api. Therefore if you need this information then this api is
     * more reliable than using cogl_frame_info_get_output() followed by
     * cogl_output_get_refresh_rate().</note>
     */
    get_refresh_rate(): number
    static name: string
}
class GLES2Context {
    /* Methods of Cogl-2.0.Cogl.GLES2Context */
    /**
     * Queries the OpenGLES 2.0 api function pointers that should be
     * used for rendering with the given `gles2`_ctx.
     * 
     * <note>You should not try to directly link to and use the symbols
     * provided by any system OpenGLES 2.0 driver.</note>
     */
    get_vtable(): GLES2Vtable
    static name: string
    static new(ctx: Context): GLES2Context
    constructor(ctx: Context)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): GLES2Context
}
class IndexBuffer {
    static name: string
    static new(context: Context, bytes: number): IndexBuffer
    constructor(context: Context, bytes: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, bytes: number): IndexBuffer
}
class Indices {
    /* Methods of Cogl-2.0.Cogl.Indices */
    get_offset(): number
    get_type(): IndicesType
    set_offset(offset: number): void
    static name: string
    static new(context: Context, type: IndicesType, indices_data: object | null, n_indices: number): Indices
    constructor(context: Context, type: IndicesType, indices_data: object | null, n_indices: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, type: IndicesType, indices_data: object | null, n_indices: number): Indices
    static new_for_buffer(type: IndicesType, buffer: IndexBuffer, offset: number): Indices
}
class MatrixStack {
    /* Methods of Cogl-2.0.Cogl.MatrixStack */
    /**
     * Replaces the current matrix with a perspective matrix for a given
     * viewing frustum defined by 4 side clip planes that all cross
     * through the origin and 2 near and far clip planes.
     */
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    /**
     * Resolves the current `stack` transform into a #CoglMatrix by
     * combining the operations that have been applied to build up the
     * current transform.
     * 
     * There are two possible ways that this function may return its
     * result depending on whether the stack is able to directly point
     * to an internal #CoglMatrix or whether the result needs to be
     * composed of multiple operations.
     * 
     * If an internal matrix contains the required result then this
     * function will directly return a pointer to that matrix, otherwise
     * if the function returns %NULL then `matrix` will be initialized
     * to match the current transform of `stack`.
     * 
     * <note>`matrix` will be left untouched if a direct pointer is
     * returned.</note>
     */
    get(): [ /* returnType */ Matrix, /* matrix */ Matrix ]
    /**
     * Gets a reference to the current transform represented by a
     * #CoglMatrixEntry pointer.
     * 
     * <note>The transform represented by a #CoglMatrixEntry is
     * immutable.</note>
     * 
     * <note>#CoglMatrixEntry<!-- -->s are reference counted using
     * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() and you
     * should call cogl_matrix_entry_unref() when you are finished with
     * and entry you get via cogl_matrix_stack_get_entry().</note>
     */
    get_entry(): MatrixEntry
    /**
     * Gets the inverse transform of the current matrix and uses it to
     * initialize a new #CoglMatrix.
     */
    get_inverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    /**
     * Resets the current matrix to the identity matrix.
     */
    load_identity(): void
    /**
     * Multiplies the current matrix by the given matrix.
     */
    multiply(matrix: Matrix): void
    /**
     * Replaces the current matrix with an orthographic projection matrix.
     */
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    /**
     * Replaces the current matrix with a perspective matrix based on the
     * provided values.
     * 
     * <note>You should be careful not to have too great a `z_far` / `z_near`
     * ratio since that will reduce the effectiveness of depth testing
     * since there wont be enough precision to identify the depth of
     * objects near to each other.</note>
     */
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    /**
     * Restores the previous transform that was last saved by calling
     * cogl_matrix_stack_push().
     * 
     * This is usually called while traversing a scenegraph whenever you
     * return up one level in the graph towards the root node.
     */
    pop(): void
    /**
     * Saves the current transform and starts a new transform that derives
     * from the current transform.
     * 
     * This is usually called while traversing a scenegraph whenever you
     * traverse one level deeper. cogl_matrix_stack_pop() can then be
     * called when going back up one layer to restore the previous
     * transform of an ancestor.
     */
    push(): void
    /**
     * Multiplies the current matrix by one that rotates the around the
     * axis-vector specified by `x,` `y` and `z`. The rotation follows the
     * right-hand thumb rule so for example rotating by 10 degrees about
     * the axis-vector (0, 0, 1) causes a small counter-clockwise
     * rotation.
     */
    rotate(angle: number, x: number, y: number, z: number): void
    /**
     * Multiplies the current matrix by one that rotates according to the
     * rotation described by `euler`.
     */
    rotate_euler(euler: Euler): void
    /**
     * Multiplies the current matrix by one that rotates according to the
     * rotation described by `quaternion`.
     */
    rotate_quaternion(quaternion: Quaternion): void
    /**
     * Multiplies the current matrix by one that scales the x, y and z
     * axes by the given values.
     */
    scale(x: number, y: number, z: number): void
    /**
     * Replaces the current `stack` matrix value with the value of `matrix`.
     * This effectively discards any other operations that were applied
     * since the last time cogl_matrix_stack_push() was called or since
     * the stack was initialized.
     */
    set(matrix: Matrix): void
    /**
     * Multiplies the current matrix by one that translates along all
     * three axes according to the given values.
     */
    translate(x: number, y: number, z: number): void
    static name: string
    static new(ctx: Context): MatrixStack
    constructor(ctx: Context)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): MatrixStack
}
class Object {
    static name: string
    /* Static methods and pseudo-constructors */
    static value_get_object(value: any): object | null
    static value_set_object(value: any, object?: object | null): void
}
class Onscreen {
    /* Methods of Cogl-2.0.Cogl.Onscreen */
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
     */
    add_dirty_callback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure
    /**
     * Installs a `callback` function that will be called for significant
     * events relating to the given `onscreen` framebuffer.
     * 
     * The `callback` will be used to notify when the system compositor is
     * ready for this application to render a new frame. In this case
     * %COGL_FRAME_EVENT_SYNC will be passed as the event argument to the
     * given `callback` in addition to the #CoglFrameInfo corresponding to
     * the frame beeing acknowledged by the compositor.
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
     */
    add_frame_callback(callback: FrameCallback, destroy?: UserDataDestroyCallback | null): FrameClosure
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
     */
    add_resize_callback(callback: OnscreenResizeCallback, destroy?: UserDataDestroyCallback | null): OnscreenResizeClosure
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
     * applications (in conjunction with  cogl_onscreen_set_swap_throttled()) so
     * your application will be able to avoid long blocks in the driver caused by
     * throttling when you request to swap buffers too quickly.
     */
    add_swap_buffers_callback(callback: SwapBuffersNotify): number
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
     */
    get_buffer_age(): number
    /**
     * Gets the value of the framebuffers frame counter. This is
     * a counter that increases by one each time
     * cogl_onscreen_swap_buffers() or cogl_onscreen_swap_region()
     * is called.
     */
    get_frame_counter(): number
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
     */
    get_resizable(): Bool
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
    hide(): void
    /**
     * Removes a callback and associated user data that were previously
     * registered using cogl_onscreen_add_dirty_callback().
     * 
     * If a destroy callback was passed to
     * cogl_onscreen_add_dirty_callback() to destroy the user data then
     * this will also get called.
     */
    remove_dirty_callback(closure: OnscreenDirtyClosure): void
    /**
     * Removes a callback and associated user data that were previously
     * registered using cogl_onscreen_add_frame_callback().
     * 
     * If a destroy callback was passed to
     * cogl_onscreen_add_frame_callback() to destroy the user data then
     * this will get called.
     */
    remove_frame_callback(closure: FrameClosure): void
    /**
     * Removes a resize `callback` and `user_data` pair that were previously
     * associated with `onscreen` via cogl_onscreen_add_resize_callback().
     */
    remove_resize_callback(closure: OnscreenResizeClosure): void
    /**
     * Removes a callback that was previously registered
     * using cogl_onscreen_add_swap_buffers_callback().
     */
    remove_swap_buffers_callback(id: number): void
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
     */
    set_resizable(resizable: Bool): void
    /**
     * Requests that the given `onscreen` framebuffer should have swap buffer
     * requests (made using cogl_onscreen_swap_buffers()) throttled either by a
     * displays vblank period or perhaps some other mechanism in a composited
     * environment.
     */
    set_swap_throttled(throttled: Bool): void
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
    show(): void
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
    swap_buffers(): void
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
     */
    swap_buffers_with_damage(rectangles: number, n_rectangles: number): void
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
     */
    swap_region(rectangles: number, n_rectangles: number): void
    /* Methods of Cogl-2.0.Cogl.Framebuffer */
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
     */
    allocate(): Bool
    /**
     * Removes a fence previously submitted with
     * cogl_framebuffer_add_fence_callback(); the callback will not be
     * called.
     */
    cancel_fence_callback(closure: FenceClosure): void
    /**
     * Clears all the auxiliary buffers identified in the `buffers` mask, and if
     * that includes the color buffer then the specified `color` is used.
     */
    clear(buffers: number, color: Color): void
    /**
     * Clears all the auxiliary buffers identified in the `buffers` mask, and if
     * that includes the color buffer then the specified `color` is used.
     */
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
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
     */
    discard_buffers(buffers: number): void
    /**
     * First defines a geometry primitive by grouping a set of vertex `attributes;`
     * specifying a `first_vertex;` a number of vertices (`n_vertices)` and
     * specifying  what kind of topology the vertices have via `mode`.
     * 
     * Then the function draws the given `primitive` geometry to the specified
     * destination `framebuffer` using the graphics processing pipeline described by
     * `pipeline`.
     * 
     * The list of #CoglAttribute<!-- -->s define the attributes of the vertices to
     * be drawn, such as positions, colors and normals and the number of attributes
     * is given as `n_attributes`.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
     * are associated with layers of the given `pipeline`.
     * 
     * <note>This api doesn't support any of the legacy global state options such
     * as cogl_set_depth_test_enabled(), cogl_set_backface_culling_enabled() or
     * cogl_program_use()</note>
     */
    draw_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, attributes: Attribute, n_attributes: number): void
    /**
     * Behaves the same as cogl_framebuffer_draw_attributes() except that
     * instead of reading vertex data sequentially from the specified
     * `attributes` the `indices` provide an indirection for how the data
     * should be indexed allowing a random access order to be
     * specified.
     * 
     * For example an indices array of [0, 1, 2, 0, 2, 3] could be used
     * used to draw two triangles (`mode` = %COGL_VERTICES_MODE_TRIANGLES +
     * `n_vertices` = 6) but only provide attribute data for the 4 corners
     * of a rectangle. When the GPU needs to read in each of the 6
     * vertices it will read the `indices` array for each vertex in
     * sequence and use the index to look up the vertex attribute data. So
     * here you can see that first and fourth vertex will point to the
     * same data and third and fifth vertex will also point to shared
     * data.
     * 
     * Drawing with indices can be a good way of minimizing the size of a
     * mesh by allowing you to avoid data for duplicate vertices because
     * multiple entries in the index array can refer back to a single
     * shared vertex.
     * 
     * <note>The `indices` array must be at least as long as `first_vertex`
     * + `n_vertices` otherwise the GPU will overrun the indices array when
     * looking up vertex data.</note>
     * 
     * Since it's very common to want to draw a run of rectangles using
     * indices to avoid duplicating vertex data you can use
     * cogl_get_rectangle_indices() to get a set of indices that can be
     * shared.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or
     * #CoglTexture3D are associated with layers of the given `pipeline`.
     * 
     * <note>This api doesn't support any of the legacy global state
     * options such as cogl_set_depth_test_enabled(),
     * cogl_set_backface_culling_enabled() or cogl_program_use()</note>
     */
    draw_indexed_attributes(pipeline: Pipeline, mode: VerticesMode, first_vertex: number, n_vertices: number, indices: Indices, attributes: Attribute, n_attributes: number): void
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
     */
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    /**
     * Draws the given `primitive` geometry to the specified destination
     * `framebuffer` using the graphics processing state described by `pipeline`.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
     * are associated with layers of the given `pipeline`.
     * 
     * <note>This api doesn't support any of the legacy global state options such
     * as cogl_set_depth_test_enabled(), cogl_set_backface_culling_enabled() or
     * cogl_program_use()</note>
     */
    draw_primitive(pipeline: Pipeline, primitive: Primitive): void
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
     */
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
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
     */
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
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
     */
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
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
     */
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
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
    finish(): void
    /**
     * Replaces the current projection matrix with a perspective matrix
     * for a given viewing frustum defined by 4 side clip planes that
     * all cross through the origin and 2 near and far clip planes.
     */
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    /**
     * Retrieves the number of alpha bits of `framebuffer`
     */
    get_alpha_bits(): number
    /**
     * Retrieves the number of blue bits of `framebuffer`
     */
    get_blue_bits(): number
    /**
     * Gets the current #CoglColorMask of which channels would be written to the
     * current framebuffer. Each bit set in the mask means that the
     * corresponding color would be written.
     */
    get_color_mask(): ColorMask
    /**
     * Can be used to query the #CoglContext a given `framebuffer` was
     * instantiated within. This is the #CoglContext that was passed to
     * cogl_onscreen_new() for example.
     */
    get_context(): Context
    /**
     * Retrieves the number of depth bits of `framebuffer`
     */
    get_depth_bits(): number
    /**
     * Retrieves the depth buffer of `framebuffer` as a #CoglTexture. You need to
     * call cogl_framebuffer_get_depth_texture(fb, TRUE); before using this
     * function.
     * 
     * <note>Calling this function implicitely allocates the framebuffer.</note>
     * <note>The texture returned stays valid as long as the framebuffer stays
     * valid.</note>
     */
    get_depth_texture(): Texture
    /**
     * Queries whether texture based depth buffer has been enabled via
     * cogl_framebuffer_set_depth_texture_enabled().
     */
    get_depth_texture_enabled(): Bool
    /**
     * Queries whether depth buffer writing is enabled for `framebuffer`. This
     * can be controlled via cogl_framebuffer_set_depth_write_enabled().
     */
    get_depth_write_enabled(): Bool
    /**
     * Returns whether dithering has been requested for the given `framebuffer`.
     * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
     * 
     * <note>This may return %TRUE even when the underlying `framebuffer`
     * display pipeline does not support dithering. This value only represents
     * the user's request for dithering.</note>
     */
    get_dither_enabled(): Bool
    /**
     * Retrieves the number of green bits of `framebuffer`
     */
    get_green_bits(): number
    /**
     * Queries the current height of the given `framebuffer`.
     */
    get_height(): number
    get_is_stereo(): Bool
    /**
     * Stores the current model-view matrix in `matrix`.
     */
    get_modelview_matrix(): /* matrix */ Matrix
    /**
     * Stores the current projection matrix in `matrix`.
     */
    get_projection_matrix(): /* matrix */ Matrix
    /**
     * Retrieves the number of red bits of `framebuffer`
     */
    get_red_bits(): number
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
     */
    get_samples_per_pixel(): number
    /**
     * Gets the current #CoglStereoMode, which defines which stereo buffers
     * should be drawn to. See cogl_framebuffer_set_stereo_mode().
     */
    get_stereo_mode(): StereoMode
    /**
     * Queries the x, y, width and height components of the current viewport as set
     * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
     * framebuffer_width and framebuffer_height.  The values are written into the
     * given `viewport` array.
     */
    get_viewport4fv(): /* viewport */ number[]
    /**
     * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
     * or the default value which is the height of the framebuffer.
     */
    get_viewport_height(): number
    /**
     * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
     * or the default value which is the width of the framebuffer.
     */
    get_viewport_width(): number
    /**
     * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
     * or the default value which is 0.
     */
    get_viewport_x(): number
    /**
     * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
     * or the default value which is 0.
     */
    get_viewport_y(): number
    /**
     * Queries the current width of the given `framebuffer`.
     */
    get_width(): number
    /**
     * Resets the current model-view matrix to the identity matrix.
     */
    identity_matrix(): void
    /**
     * Replaces the current projection matrix with an orthographic projection
     * matrix.
     */
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    /**
     * Replaces the current projection matrix with a perspective matrix
     * based on the provided values.
     * 
     * <note>You should be careful not to have to great a `z_far` / `z_near`
     * ratio since that will reduce the effectiveness of depth testing
     * since there wont be enough precision to identify the depth of
     * objects near to each other.</note>
     */
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    /**
     * Reverts the clipping region to the state before the last call to
     * cogl_framebuffer_push_scissor_clip(), cogl_framebuffer_push_rectangle_clip()
     * cogl_framebuffer_push_path_clip(), or cogl_framebuffer_push_primitive_clip().
     */
    pop_clip(): void
    /**
     * Restores the model-view matrix on the top of the matrix stack.
     */
    pop_matrix(): void
    /**
     * Copies the current model-view matrix onto the matrix stack. The matrix
     * can later be restored with cogl_framebuffer_pop_matrix().
     */
    push_matrix(): void
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
     */
    push_primitive_clip(primitive: Primitive, bounds_x1: number, bounds_y1: number, bounds_x2: number, bounds_y2: number): void
    /**
     * Specifies a modelview transformed rectangular clipping area for all
     * subsequent drawing operations. Any drawing commands that extend
     * outside the rectangle will be clipped so that only the portion
     * inside the rectangle will be displayed. The rectangle dimensions
     * are transformed by the current model-view matrix.
     * 
     * The rectangle is intersected with the current clip region. To undo
     * the effect of this function, call cogl_framebuffer_pop_clip().
     */
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    /**
     * Specifies a rectangular clipping area for all subsequent drawing
     * operations. Any drawing commands that extend outside the rectangle
     * will be clipped so that only the portion inside the rectangle will
     * be displayed. The rectangle dimensions are not transformed by the
     * current model-view matrix.
     * 
     * The rectangle is intersected with the current clip region. To undo
     * the effect of this function, call cogl_framebuffer_pop_clip().
     */
    push_scissor_clip(x: number, y: number, width: number, height: number): void
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
     * |[
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
     */
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): Bool
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
     */
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): Bool
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
    resolve_samples(): void
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
     */
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    /**
     * Multiplies the current model-view matrix by one that rotates the
     * model around the axis-vector specified by `x,` `y` and `z`. The
     * rotation follows the right-hand thumb rule so for example rotating
     * by 10 degrees about the axis-vector (0, 0, 1) causes a small
     * counter-clockwise rotation.
     */
    rotate(angle: number, x: number, y: number, z: number): void
    /**
     * Multiplies the current model-view matrix by one that rotates
     * according to the rotation described by `euler`.
     */
    rotate_euler(euler: Euler): void
    /**
     * Multiplies the current model-view matrix by one that rotates
     * according to the rotation described by `quaternion`.
     */
    rotate_quaternion(quaternion: Quaternion): void
    /**
     * Multiplies the current model-view matrix by one that scales the x,
     * y and z axes by the given values.
     */
    scale(x: number, y: number, z: number): void
    /**
     * Defines a bit mask of which color channels should be written to the
     * given `framebuffer`. If a bit is set in `color_mask` that means that
     * color will be written.
     */
    set_color_mask(color_mask: ColorMask): void
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
     */
    set_depth_texture_enabled(enabled: Bool): void
    /**
     * Enables or disables depth buffer writing when rendering to `framebuffer`.
     * If depth writing is enabled for both the framebuffer and the rendering
     * pipeline, and the framebuffer has an associated depth buffer, depth
     * information will be written to this buffer during rendering.
     * 
     * Depth buffer writing is enabled by default.
     */
    set_depth_write_enabled(depth_write_enabled: Bool): void
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
     */
    set_dither_enabled(dither_enabled: Bool): void
    /**
     * Sets `matrix` as the new model-view matrix.
     */
    set_modelview_matrix(matrix: Matrix): void
    /**
     * Sets `matrix` as the new projection matrix.
     */
    set_projection_matrix(matrix: Matrix): void
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
     */
    set_samples_per_pixel(samples_per_pixel: number): void
    /**
     * Sets which stereo buffers should be drawn to. The default
     * is %COGL_STEREO_BOTH, which means that both the left and
     * right buffers will be affected by drawing. For this to have
     * an effect, the display system must support stereo drawables,
     * and the framebuffer must have been created with stereo
     * enabled. (See cogl_onscreen_template_set_stereo_enabled(),
     * cogl_framebuffer_get_is_stereo().)
     */
    set_stereo_mode(stereo_mode: StereoMode): void
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
     */
    set_viewport(x: number, y: number, width: number, height: number): void
    /**
     * Multiplies the current model-view matrix by the given matrix.
     */
    transform(matrix: Matrix): void
    /**
     * Multiplies the current model-view matrix by one that translates the
     * model along all three axes according to the given values.
     */
    translate(x: number, y: number, z: number): void
    static name: string
    static new(context: Context, width: number, height: number): Onscreen
    constructor(context: Context, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: Context, width: number, height: number): Onscreen
    static error_quark(): number
}
class OnscreenTemplate {
    /* Methods of Cogl-2.0.Cogl.OnscreenTemplate */
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
     * <note>There are some semantic differences between single-sample
     * rendering and multisampling with just 1 point sample such as it
     * being redundant to use the cogl_framebuffer_resolve_samples() and
     * cogl_framebuffer_resolve_samples_region() apis with single-sample
     * rendering.</note>
     */
    set_samples_per_pixel(n: number): void
    /**
     * Sets whether future #CoglOnscreen framebuffers derived from this
     * template are attempted to be created with both left and right
     * buffers, for use with stereo display. If the display system
     * does not support stereo, then creation of the framebuffer will
     * fail.
     */
    set_stereo_enabled(enabled: Bool): void
    /**
     * Requests that any future #CoglOnscreen framebuffers derived from this
     * template should enable or disable swap throttling according to the given
     * `throttled` argument.
     */
    set_swap_throttled(throttled: Bool): void
    static name: string
    static new(swap_chain: SwapChain): OnscreenTemplate
    constructor(swap_chain: SwapChain)
    /* Static methods and pseudo-constructors */
    static new(swap_chain: SwapChain): OnscreenTemplate
}
class Output {
    /* Methods of Cogl-2.0.Cogl.Output */
    /**
     * Gets the height of the output in pixels.
     */
    get_height(): number
    /**
     * Gets the physical height of the output. In some cases (such as
     * as a projector), the value returned here might correspond to
     * nominal resolution rather than the actual physical size of the
     * output device.
     */
    get_mm_height(): number
    /**
     * Gets the physical width of the output. In some cases (such as
     * as a projector), the value returned here might correspond to
     * nominal resolution rather than the actual physical size of the
     * output device.
     */
    get_mm_width(): number
    /**
     * Gets the number of times per second that the output device refreshes
     * the display contents.
     */
    get_refresh_rate(): number
    /**
     * For an output device where each pixel is made up of smaller components
     * with different colors, returns the layout of the subpixel
     * components.
     */
    get_subpixel_order(): SubpixelOrder
    /**
     * Gets the width of the output in pixels.
     */
    get_width(): number
    /**
     * Gets the X position of the output with respect to the coordinate
     * system of the screen.
     */
    get_x(): number
    /**
     * Gets the Y position of the output with respect to the coordinate
     * system of the screen.
     */
    get_y(): number
    static name: string
}
class Pipeline {
    /* Methods of Cogl-2.0.Cogl.Pipeline */
    /**
     * Adds a shader snippet that will hook on to the given layer of the
     * pipeline. The exact part of the pipeline that the snippet wraps
     * around depends on the hook that is given to
     * cogl_snippet_new(). Note that some hooks can't be used with a layer
     * and need to be added with cogl_pipeline_add_snippet() instead.
     */
    add_layer_snippet(layer: number, snippet: Snippet): void
    /**
     * Adds a shader snippet to `pipeline`. The snippet will wrap around or
     * replace some part of the pipeline as defined by the hook point in
     * `snippet`. Note that some hook points are specific to a layer and
     * must be added with cogl_pipeline_add_layer_snippet() instead.
     */
    add_snippet(snippet: Snippet): void
    /**
     * Creates a new pipeline with the configuration copied from the
     * source pipeline.
     * 
     * We would strongly advise developers to always aim to use
     * cogl_pipeline_copy() instead of cogl_pipeline_new() whenever there will
     * be any similarity between two pipelines. Copying a pipeline helps Cogl
     * keep track of a pipelines ancestry which we may use to help minimize GPU
     * state changes.
     */
    copy(): Pipeline
    /**
     * Iterates all the layer indices of the given `pipeline`.
     */
    foreach_layer(callback: PipelineLayerCallback): void
    get_alpha_test_function(): PipelineAlphaFunc
    get_alpha_test_reference(): number
    /**
     * Retrieves the current ambient color for `pipeline`
     */
    get_ambient(ambient: Color): void
    /**
     * Retrieves the current pipeline color.
     */
    get_color(): /* color */ Color
    /**
     * Gets the current #CoglColorMask of which channels would be written to the
     * current framebuffer. Each bit set in the mask means that the
     * corresponding color would be written.
     */
    get_color_mask(): ColorMask
    get_cull_face_mode(): PipelineCullFaceMode
    /**
     * Retrieves the current depth state configuration for the given
     * `pipeline` as previously set using cogl_pipeline_set_depth_state().
     */
    get_depth_state(): /* state_out */ DepthState
    /**
     * Retrieves the current diffuse color for `pipeline`
     */
    get_diffuse(diffuse: Color): void
    /**
     * Retrieves the pipelines current emission color.
     */
    get_emission(emission: Color): void
    /**
     * The order of the vertices within a primitive specifies whether it
     * is considered to be front or back facing. This function specifies
     * which order is considered to be the front
     * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
     * primitives with vertices in a counter-clockwise order and
     * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
     * %COGL_WINDING_COUNTER_CLOCKWISE.
     */
    get_front_face_winding(): Winding
    /**
     * Retrieves the currently set magnification #CoglPipelineFilter set on
     * the specified layer. The magnification filter determines how the
     * layer should be sampled when up-scaled.
     * 
     * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
     * changed using cogl_pipeline_set_layer_filters().
     */
    get_layer_mag_filter(layer_index: number): PipelineFilter
    /**
     * Retrieves the currently set minification #CoglPipelineFilter set on
     * the specified layer. The miniifcation filter determines how the
     * layer should be sampled when down-scaled.
     * 
     * The default filter is %COGL_PIPELINE_FILTER_LINEAR but this can be
     * changed using cogl_pipeline_set_layer_filters().
     */
    get_layer_min_filter(layer_index: number): PipelineFilter
    /**
     * Gets whether point sprite coordinate generation is enabled for this
     * texture layer.
     */
    get_layer_point_sprite_coords_enabled(layer_index: number): Bool
    get_layer_texture(layer_index: number): Texture
    /**
     * Returns the wrap mode for the 'p' coordinate of texture lookups on this
     * layer.
     */
    get_layer_wrap_mode_p(layer_index: number): PipelineWrapMode
    /**
     * Returns the wrap mode for the 's' coordinate of texture lookups on this
     * layer.
     */
    get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode
    /**
     * Returns the wrap mode for the 't' coordinate of texture lookups on this
     * layer.
     */
    get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode
    /**
     * Retrieves the number of layers defined for the given `pipeline`
     */
    get_n_layers(): number
    get_per_vertex_point_size(): Bool
    /**
     * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
     * used with the vertex buffer API.
     */
    get_point_size(): number
    /**
     * Retrieves the pipelines current emission color.
     */
    get_shininess(): number
    /**
     * Retrieves the pipelines current specular color.
     */
    get_specular(specular: Color): void
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
     */
    get_uniform_location(uniform_name: string): number
    /**
     * Queries what user program has been associated with the given
     * `pipeline` using cogl_pipeline_set_user_program().
     */
    get_user_program(): Handle
    /**
     * This function removes a layer from your pipeline
     */
    remove_layer(layer_index: number): void
    /**
     * Before a primitive is blended with the framebuffer, it goes through an
     * alpha test stage which lets you discard fragments based on the current
     * alpha value. This function lets you change the function used to evaluate
     * the alpha channel, and thus determine which fragments are discarded
     * and which continue on to the blending stage.
     * 
     * The default is %COGL_PIPELINE_ALPHA_FUNC_ALWAYS
     */
    set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void
    /**
     * Sets the pipeline's ambient color, in the standard OpenGL lighting
     * model. The ambient color affects the overall color of the object.
     * 
     * Since the diffuse color will be intense when the light hits the surface
     * directly, the ambient will be most apparent where the light hits at a
     * slant.
     * 
     * The default value is (0.2, 0.2, 0.2, 1.0)
     */
    set_ambient(ambient: Color): void
    /**
     * Conveniently sets the diffuse and ambient color of `pipeline` at the same
     * time. See cogl_pipeline_set_ambient() and cogl_pipeline_set_diffuse().
     * 
     * The default ambient color is (0.2, 0.2, 0.2, 1.0)
     * 
     * The default diffuse color is (0.8, 0.8, 0.8, 1.0)
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
     * |[
     *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
     * ```
     * 
     * 
     * That gives normal alpha-blending when the calculated color for the pipeline
     * is in premultiplied form.
     */
    set_blend(blend_string: string): Bool
    /**
     * When blending is setup to reference a CONSTANT blend factor then
     * blending will depend on the constant set with this function.
     */
    set_blend_constant(constant_color: Color): void
    /**
     * Sets the basic color of the pipeline, used when no lighting is enabled.
     * 
     * Note that if you don't add any layers to the pipeline then the color
     * will be blended unmodified with the destination; the default blend
     * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
     * semi-transparent red. See cogl_color_premultiply().
     * 
     * The default value is (1.0, 1.0, 1.0, 1.0)
     */
    set_color(color: Color): void
    /**
     * Sets the basic color of the pipeline, used when no lighting is enabled.
     * 
     * The default value is (1.0, 1.0, 1.0, 1.0)
     */
    set_color4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the basic color of the pipeline, used when no lighting is enabled.
     * 
     * The default value is (0xff, 0xff, 0xff, 0xff)
     */
    set_color4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Defines a bit mask of which color channels should be written to the
     * current framebuffer. If a bit is set in `color_mask` that means that
     * color will be written.
     */
    set_color_mask(color_mask: ColorMask): void
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
     */
    set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void
    /**
     * This commits all the depth state configured in `state` struct to the
     * given `pipeline`. The configuration values are copied into the
     * pipeline so there is no requirement to keep the #CoglDepthState
     * struct around if you don't need it any more.
     * 
     * Note: Since some platforms do not support the depth range feature
     * it is possible for this function to fail and report an `error`.
     */
    set_depth_state(state: DepthState): Bool
    /**
     * Sets the pipeline's diffuse color, in the standard OpenGL lighting
     * model. The diffuse color is most intense where the light hits the
     * surface directly - perpendicular to the surface.
     * 
     * The default value is (0.8, 0.8, 0.8, 1.0)
     */
    set_diffuse(diffuse: Color): void
    /**
     * Sets the pipeline's emissive color, in the standard OpenGL lighting
     * model. It will look like the surface is a light source emitting this
     * color.
     * 
     * The default value is (0.0, 0.0, 0.0, 1.0)
     */
    set_emission(emission: Color): void
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
     */
    set_front_face_winding(front_winding: Winding): void
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
     */
    set_layer_combine(layer_index: number, blend_string: string): Bool
    /**
     * When you are using the 'CONSTANT' color source in a layer combine
     * description then you can use this function to define its value.
     */
    set_layer_combine_constant(layer_index: number, constant: Color): void
    /**
     * Changes the decimation and interpolation filters used when a texture is
     * drawn at other scales than 100%.
     * 
     * <note>It is an error to pass anything other than
     * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
     * magnification filters since magnification doesn't ever need to
     * reference values stored in the mipmap chain.</note>
     */
    set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void
    /**
     * This function lets you set a matrix that can be used to e.g. translate
     * and rotate a single layer of a pipeline used to fill your geometry.
     */
    set_layer_matrix(layer_index: number, matrix: Matrix): void
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
     */
    set_layer_null_texture(layer_index: number, texture_type: TextureType): void
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
     */
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool
    set_layer_texture(layer_index: number, texture: Texture): void
    /**
     * Sets the wrap mode for all three coordinates of texture lookups on
     * this layer. This is equivalent to calling
     * cogl_pipeline_set_layer_wrap_mode_s(),
     * cogl_pipeline_set_layer_wrap_mode_t() and
     * cogl_pipeline_set_layer_wrap_mode_p() separately.
     */
    set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void
    /**
     * Sets the wrap mode for the 'p' coordinate of texture lookups on
     * this layer. 'p' is the third coordinate.
     */
    set_layer_wrap_mode_p(layer_index: number, mode: PipelineWrapMode): void
    /**
     * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
     */
    set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void
    /**
     * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
     */
    set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void
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
     */
    set_per_vertex_point_size(enable: Bool): Bool
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
     */
    set_point_size(point_size: number): void
    /**
     * Sets the shininess of the pipeline, in the standard OpenGL lighting
     * model, which determines the size of the specular highlights. A
     * higher `shininess` will produce smaller highlights which makes the
     * object appear more shiny.
     * 
     * The default value is 0.0
     */
    set_shininess(shininess: number): void
    /**
     * Sets the pipeline's specular color, in the standard OpenGL lighting
     * model. The intensity of the specular color depends on the viewport
     * position, and is brightest along the lines of reflection.
     * 
     * The default value is (0.0, 0.0, 0.0, 1.0)
     */
    set_specular(specular: Color): void
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
     */
    set_uniform_1f(uniform_location: number, value: number): void
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
     */
    set_uniform_1i(uniform_location: number, value: number): void
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
     */
    set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void
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
     */
    set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void
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
     */
    set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: Bool, value: number): void
    /**
     * Associates a linked CoglProgram with the given pipeline so that the
     * program can take full control of vertex and/or fragment processing.
     * 
     * This is an example of how it can be used to associate an ARBfp
     * program with a #CoglPipeline:
     * |[
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
     */
    set_user_program(program: Handle): void
    static name: string
    static new(context: Context): Pipeline
    constructor(context: Context)
    /* Static methods and pseudo-constructors */
    static new(context: Context): Pipeline
}
class PixelBuffer {
    static name: string
    static new(context: Context, size: number, data?: object | null): PixelBuffer
    constructor(context: Context, size: number, data?: object | null)
    /* Static methods and pseudo-constructors */
    static new(context: Context, size: number, data?: object | null): PixelBuffer
}
class Primitive {
    /* Methods of Cogl-2.0.Cogl.Primitive */
    /**
     * Makes a copy of an existing #CoglPrimitive. Note that the primitive
     * is a shallow copy which means it will use the same attributes and
     * attribute buffers as the original primitive.
     */
    copy(): Primitive
    /**
     * Draws the given `primitive` geometry to the specified destination
     * `framebuffer` using the graphics processing state described by `pipeline`.
     * 
     * This drawing api doesn't support high-level meta texture types such
     * as #CoglTexture2DSliced so it is the user's responsibility to
     * ensure that only low-level textures that can be directly sampled by
     * a GPU such as #CoglTexture2D, #CoglTextureRectangle or #CoglTexture3D
     * are associated with layers of the given `pipeline`.
     */
    draw(framebuffer: Framebuffer, pipeline: Pipeline): void
    /**
     * Iterates all the attributes of the given #CoglPrimitive.
     */
    foreach_attribute(callback: PrimitiveAttributeCallback): void
    get_first_vertex(): number
    get_indices(): Indices
    get_mode(): VerticesMode
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
     * <note>To be clear; it doesn't refer to the number of vertices - in
     * terms of data - associated with the primitive it's just the number
     * of vertices to read and draw.</note>
     */
    get_n_vertices(): number
    /**
     * Replaces all the attributes of the given #CoglPrimitive object.
     */
    set_attributes(attributes: Attribute, n_attributes: number): void
    set_first_vertex(first_vertex: number): void
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
     * #CoglPrimitive <structfield>n_vertices</structfield> property as if
     * cogl_primitive_set_n_vertices() were called. This property defines
     * the number of vertices to draw or, put another way, how many
     * indices should be read from `indices` when drawing.
     * 
     * <note>The #CoglPrimitive <structfield>first_vertex</structfield> property
     * also affects drawing with indices by defining the first entry of the
     * indices to start drawing from.</note>
     */
    set_indices(indices: Indices, n_indices: number): void
    set_mode(mode: VerticesMode): void
    /**
     * Specifies how many vertices should be read when drawing the given
     * `primitive`.
     * 
     * Usually this value is set implicitly when associating vertex data
     * or indices with a #CoglPrimitive.
     * 
     * <note>To be clear; it doesn't refer to the number of vertices - in
     * terms of data - associated with the primitive it's just the number
     * of vertices to read and draw.</note>
     */
    set_n_vertices(n_vertices: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_p2(context: Context, mode: VerticesMode, data: VertexP2[]): Primitive
    static new_p2c4(context: Context, mode: VerticesMode, data: VertexP2C4[]): Primitive
    static new_p2t2(context: Context, mode: VerticesMode, data: VertexP2T2[]): Primitive
    static new_p2t2c4(context: Context, mode: VerticesMode, data: VertexP2T2C4[]): Primitive
    static new_p3(context: Context, mode: VerticesMode, data: VertexP3[]): Primitive
    static new_p3c4(context: Context, mode: VerticesMode, data: VertexP3C4[]): Primitive
    static new_p3t2(context: Context, mode: VerticesMode, data: VertexP3T2[]): Primitive
    static new_p3t2c4(context: Context, mode: VerticesMode, data: VertexP3T2C4[]): Primitive
    static new_with_attributes(mode: VerticesMode, n_vertices: number, attributes: Attribute, n_attributes: number): Primitive
    /**
     * Sets whether the texture will automatically update the smaller
     * mipmap levels after any part of level 0 is updated. The update will
     * only occur whenever the texture is used for drawing with a texture
     * filter that requires the lower mipmap levels. An application should
     * disable this if it wants to upload its own data for the other
     * levels. By default auto mipmapping is enabled.
     */
    static texture_set_auto_mipmap(primitive_texture: PrimitiveTexture, value: Bool): void
}
class Renderer {
    /* Methods of Cogl-2.0.Cogl.Renderer */
    /**
     * This adds a renderer selection `constraint`.
     * 
     * Applications should ideally minimize how many of these constraints they
     * depend on to ensure maximum portability.
     */
    add_constraint(constraint: RendererConstraint): void
    /**
     * Tests if a given `onscreen_template` can be supported with the given
     * `renderer`.
     */
    check_onscreen_template(onscreen_template: OnscreenTemplate): Bool
    /**
     * Connects the configured `renderer`. Renderer connection isn't a
     * very active process, it basically just means validating that
     * any given constraint criteria can be satisfied and that a
     * usable driver and window system backend can be found.
     */
    connect(): Bool
    /**
     * Iterates all known display outputs for the given `renderer` and
     * passes a corresponding #CoglOutput pointer to the given `callback`
     * for each one, along with the given `user_data`.
     */
    foreach_output(callback: OutputCallback): void
    /**
     * Queries what underlying driver is being used by Cogl.
     * 
     * This may only be called on a connected #CoglRenderer.
     */
    get_driver(): Driver
    /**
     * Queries how many texture units can be used from fragment programs
     */
    get_n_fragment_texture_units(): number
    /**
     * Queries which window system backend Cogl has chosen to use.
     * 
     * This may only be called on a connected #CoglRenderer.
     */
    get_winsys_id(): WinsysID
    /**
     * This removes a renderer selection `constraint`.
     * 
     * Applications should ideally minimize how many of these constraints they
     * depend on to ensure maximum portability.
     */
    remove_constraint(constraint: RendererConstraint): void
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
     */
    set_driver(driver: Driver): void
    /**
     * This allows you to explicitly select a winsys backend to use instead
     * of letting Cogl automatically select a backend.
     * 
     * if you select an unsupported backend then cogl_renderer_connect()
     * will fail and report an error.
     * 
     * This may only be called on an un-connected #CoglRenderer.
     */
    set_winsys_id(winsys_id: WinsysID): void
    static name: string
    static new(): Renderer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Renderer
}
class Snippet {
    /* Methods of Cogl-2.0.Cogl.Snippet */
    get_declarations(): string
    get_hook(): SnippetHook
    get_post(): string
    get_pre(): string
    get_replace(): string
    /**
     * Sets a source string that will be inserted in the global scope of
     * the generated shader when this snippet is used on a pipeline. This
     * string is typically used to declare uniforms, attributes or
     * functions that will be used by the other parts of the snippets.
     * 
     * This function should only be called before the snippet is attached
     * to its first pipeline. After that the snippet should be considered
     * immutable.
     */
    set_declarations(declarations: string): void
    /**
     * Sets a source string that will be inserted after the hook point in
     * the generated shader for the pipeline that this snippet is attached
     * to. Please see the documentation of each hook point in
     * #CoglPipeline for a description of how this string should be used.
     * 
     * This function should only be called before the snippet is attached
     * to its first pipeline. After that the snippet should be considered
     * immutable.
     */
    set_post(post: string): void
    /**
     * Sets a source string that will be inserted before the hook point in
     * the generated shader for the pipeline that this snippet is attached
     * to. Please see the documentation of each hook point in
     * #CoglPipeline for a description of how this string should be used.
     * 
     * This function should only be called before the snippet is attached
     * to its first pipeline. After that the snippet should be considered
     * immutable.
     */
    set_pre(pre: string): void
    /**
     * Sets a source string that will be used instead of any generated
     * source code or any previous snippets for this hook point. Please
     * see the documentation of each hook point in #CoglPipeline for a
     * description of how this string should be used.
     * 
     * This function should only be called before the snippet is attached
     * to its first pipeline. After that the snippet should be considered
     * immutable.
     */
    set_replace(replace: string): void
    static name: string
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
    constructor(hook: SnippetHook, declarations: string, post: string)
    /* Static methods and pseudo-constructors */
    static new(hook: SnippetHook, declarations: string, post: string): Snippet
}
class SubTexture {
    /* Methods of Cogl-2.0.Cogl.SubTexture */
    /**
     * Retrieves the parent texture that `sub_texture` derives its content
     * from.  This is the texture that was passed to
     * cogl_sub_texture_new() as the parent_texture argument.
     */
    get_parent(): Texture
    static name: string
    static new(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number): SubTexture
    constructor(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number)
    /* Static methods and pseudo-constructors */
    static new(ctx: Context, parent_texture: Texture, sub_x: number, sub_y: number, sub_width: number, sub_height: number): SubTexture
}
class SwapChain {
    /* Methods of Cogl-2.0.Cogl.SwapChain */
    set_has_alpha(has_alpha: Bool): void
    set_length(length: number): void
    static name: string
    static new(): SwapChain
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SwapChain
}
class Texture2D {
    /* Methods of Cogl-2.0.Cogl.Texture */
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
     */
    get_data(format: PixelFormat, rowstride: number, data: number): number
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
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
     */
    set_components(components: TextureComponents): void
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
     * |[
     *  next_width = MAX (1, floor (prev_width));
     * ```
     * 
     * 
     * You can determine the number of mipmap levels for a given texture
     * like this:
     * 
     * |[
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
     */
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
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
    set_premultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     */
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    /**
     * Copies a specified source region from `bitmap` to the position
     * (`src_x,` `src_y)` of the given destination texture `handle`.
     * 
     * <note>The region updated can't be larger than the source
     * bitmap</note>
     */
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static gl_new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): Texture2D
    static new_from_bitmap(bitmap: Bitmap): Texture2D
    static new_from_data(ctx: Context, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Texture2D
    static new_from_file(ctx: Context, filename: string): Texture2D
    static new_with_size(ctx: Context, width: number, height: number): Texture2D
}
class Texture2DSliced {
    /* Methods of Cogl-2.0.Cogl.Texture */
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
     */
    get_data(format: PixelFormat, rowstride: number, data: number): number
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
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
     */
    set_components(components: TextureComponents): void
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
     * |[
     *  next_width = MAX (1, floor (prev_width));
     * ```
     * 
     * 
     * You can determine the number of mipmap levels for a given texture
     * like this:
     * 
     * |[
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
     */
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
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
    set_premultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     */
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    /**
     * Copies a specified source region from `bitmap` to the position
     * (`src_x,` `src_y)` of the given destination texture `handle`.
     * 
     * <note>The region updated can't be larger than the source
     * bitmap</note>
     */
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced
    static new_from_data(ctx: Context, width: number, height: number, max_waste: number, format: PixelFormat, rowstride: number, data: number): Texture2DSliced
    static new_from_file(ctx: Context, filename: string, max_waste: number): Texture2DSliced
    static new_with_size(ctx: Context, width: number, height: number, max_waste: number): Texture2DSliced
}
class Texture3D {
    /* Methods of Cogl-2.0.Cogl.Texture */
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
     */
    get_data(format: PixelFormat, rowstride: number, data: number): number
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
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
     */
    set_components(components: TextureComponents): void
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
     * |[
     *  next_width = MAX (1, floor (prev_width));
     * ```
     * 
     * 
     * You can determine the number of mipmap levels for a given texture
     * like this:
     * 
     * |[
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
     */
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
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
    set_premultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     */
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    /**
     * Copies a specified source region from `bitmap` to the position
     * (`src_x,` `src_y)` of the given destination texture `handle`.
     * 
     * <note>The region updated can't be larger than the source
     * bitmap</note>
     */
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bitmap: Bitmap, height: number, depth: number): Texture3D
    static new_from_data(context: Context, width: number, height: number, depth: number, format: PixelFormat, rowstride: number, image_stride: number, data: number): Texture3D
    static new_with_size(context: Context, width: number, height: number, depth: number): Texture3D
}
class TexturePixmapX11 {
    /* Methods of Cogl-2.0.Cogl.TexturePixmapX11 */
    /**
     * Checks whether the given `texture` is using the
     * GLX_EXT_texture_from_pixmap or similar extension to copy the
     * contents of the pixmap to the texture.  This extension is usually
     * implemented as zero-copy operation so it implies the updates are
     * working efficiently.
     */
    is_using_tfp_extension(): Bool
    /**
     * Sets the damage object that will be used to track automatic updates
     * to the `texture`. Damage tracking can be disabled by passing 0 for
     * `damage`. Otherwise this damage will replace the one used if %TRUE
     * was passed for automatic_updates to cogl_texture_pixmap_x11_new().
     * 
     * Note that Cogl will subtract from the damage region as it processes
     * damage events.
     */
    set_damage_object(damage: number, report_level: TexturePixmapX11ReportLevel): void
    /**
     * Forces an update of the given `texture` so that it is refreshed with
     * the contents of the pixmap that was given to
     * cogl_texture_pixmap_x11_new().
     */
    update_area(x: number, y: number, width: number, height: number): void
    static name: string
    static new(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11
    constructor(context: Context, pixmap: number, automatic_updates: Bool)
    /* Static methods and pseudo-constructors */
    static new(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11
    static new_left(context: Context, pixmap: number, automatic_updates: Bool): TexturePixmapX11
    static error_quark(): number
}
class TextureRectangle {
    /* Methods of Cogl-2.0.Cogl.Texture */
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
     */
    get_data(format: PixelFormat, rowstride: number, data: number): number
    /**
     * Queries the GL handles for a GPU side texture through its #CoglTexture.
     * 
     * If the texture is spliced the data for the first sub texture will be
     * queried.
     */
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
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
     */
    set_components(components: TextureComponents): void
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
     * |[
     *  next_width = MAX (1, floor (prev_width));
     * ```
     * 
     * 
     * You can determine the number of mipmap levels for a given texture
     * like this:
     * 
     * |[
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
     */
    set_data(format: PixelFormat, rowstride: number, data: number, level: number): Bool
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
    set_premultiplied(premultiplied: Bool): void
    /**
     * Sets the pixels in a rectangular subregion of `texture` from an in-memory
     * buffer containing pixel data.
     * 
     * <note>The region set can't be larger than the source `data<`/note>
     */
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    /**
     * Copies a specified source region from `bitmap` to the position
     * (`src_x,` `src_y)` of the given destination texture `handle`.
     * 
     * <note>The region updated can't be larger than the source
     * bitmap</note>
     */
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): Bool
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bitmap: Bitmap): TextureRectangle
    static new_from_foreign(ctx: Context, gl_handle: number, width: number, height: number, format: PixelFormat): TextureRectangle
    static new_with_size(ctx: Context, width: number, height: number): TextureRectangle
}
class Color {
    /* Methods of Cogl-2.0.Cogl.Color */
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
     */
    init_from_4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor
     */
    init_from_4fv(color_array: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor.
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
     */
    set_alpha(alpha: number): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     */
    set_alpha_byte(alpha: number): void
    /**
     * Sets the alpha channel of `color` to `alpha`.
     */
    set_alpha_float(alpha: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     */
    set_blue(blue: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     */
    set_blue_byte(blue: number): void
    /**
     * Sets the blue channel of `color` to `blue`.
     */
    set_blue_float(blue: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor
     */
    set_from_4f(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the values of the passed channels into a #CoglColor.
     */
    set_from_4ub(red: number, green: number, blue: number, alpha: number): void
    /**
     * Sets the green channel of `color` to `green`.
     */
    set_green(green: number): void
    /**
     * Sets the green channel of `color` to `green`.
     */
    set_green_byte(green: number): void
    /**
     * Sets the green channel of `color` to `green`.
     */
    set_green_float(green: number): void
    /**
     * Sets the red channel of `color` to `red`.
     */
    set_red(red: number): void
    /**
     * Sets the red channel of `color` to `red`.
     */
    set_red_byte(red: number): void
    /**
     * Sets the red channel of `color` to `red`.
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
    static init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
class DebugObjectTypeInfo {
    /* Fields of Cogl-2.0.Cogl.DebugObjectTypeInfo */
    /**
     * A human readable name for the type.
     */
    readonly name: string
    /**
     * The number of objects of this type that are
     *   currently in use
     */
    readonly instance_count: number
    static name: string
}
class DepthState {
    /* Methods of Cogl-2.0.Cogl.DepthState */
    /**
     * Gets the current range to which normalized depth values are mapped
     * before writing to the depth buffer. This corresponds to the range
     * set with cogl_depth_state_set_range().
     */
    get_range(near_val: number, far_val: number): void
    /**
     * Gets the current depth test enabled state as previously set by
     * cogl_depth_state_set_test_enabled().
     */
    get_test_enabled(): Bool
    /**
     * Gets the current depth test enable state as previously set via
     * cogl_depth_state_set_test_enabled().
     */
    get_test_function(): DepthTestFunction
    /**
     * Gets the depth writing enable state as set by the corresponding
     * cogl_depth_state_set_write_enabled().
     */
    get_write_enabled(): Bool
    /**
     * Initializes the members of `state` to their default values.
     * 
     * You should never pass an un initialized #CoglDepthState structure
     * to cogl_pipeline_set_depth_state().
     */
    init(): void
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
     * If your driver does not support this feature (for example you are
     * using GLES 1 drivers) then if you don't use the default range
     * values you will get an error reported when calling
     * cogl_pipeline_set_depth_state (). You can check ahead of time for
     * the %COGL_FEATURE_ID_DEPTH_RANGE feature with
     * cogl_has_feature() to know if this function will succeed.
     * 
     * By default normalized device coordinate depth values are mapped to
     * the full range of depth buffer values, [0, 1].
     * 
     * NB: this won't directly affect the state of the GPU. You have
     * to then set the state on a #CoglPipeline using
     * cogl_pipeline_set_depth_state().
     */
    set_range(near_val: number, far_val: number): void
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
     */
    set_test_enabled(enable: Bool): void
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
     */
    set_test_function(function_: DepthTestFunction): void
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
     */
    set_write_enabled(enable: Bool): void
    static name: string
}
class Euler {
    /* Fields of Cogl-2.0.Cogl.Euler */
    /**
     * Angle to rotate around an object's y axis
     */
    readonly heading: number
    /**
     * Angle to rotate around an object's x axis
     */
    readonly pitch: number
    /**
     * Angle to rotate around an object's z axis
     */
    readonly roll: number
    /* Methods of Cogl-2.0.Cogl.Euler */
    /**
     * Allocates a new #CoglEuler and initilizes it with the component
     * angles of `src`. The newly allocated euler should be freed using
     * cogl_euler_free().
     */
    copy(): Euler
    /**
     * Frees a #CoglEuler that was previously allocated using
     * cogl_euler_copy().
     */
    free(): void
    /**
     * Initializes `euler` to represent a rotation of `x_angle` degrees
     * around the x axis, then `y_angle` degrees around the y_axis and
     * `z_angle` degrees around the z axis.
     */
    init(heading: number, pitch: number, roll: number): void
    /**
     * Extracts a euler rotation from the given `matrix` and
     * initializses `euler` with the component x, y and z rotation angles.
     */
    init_from_matrix(matrix: Matrix): void
    /**
     * Initializes a `euler` rotation with the equivalent rotation
     * represented by the given `quaternion`.
     */
    init_from_quaternion(quaternion: Quaternion): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Compares the two given euler angles `v1` and `v1` and it they are
     * equal returns %TRUE else %FALSE.
     * 
     * <note>This function only checks that all three components rotations
     * are numerically equal, it does not consider that some rotations
     * can be represented with different component rotations</note>
     */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class Fence {
    static name: string
}
class FenceClosure {
    /* Methods of Cogl-2.0.Cogl.FenceClosure */
    get_user_data(): object | null
    static name: string
}
class FrameClosure {
    static name: string
}
class GLES2Vtable {
    /* Fields of Cogl-2.0.Cogl.GLES2Vtable */
    readonly glBindTexture: (target: GL.enum_, texture: GL.uint) => void
    readonly glBlendFunc: (sfactor: GL.enum_, dfactor: GL.enum_) => void
    readonly glClear: (mask: GL.bitfield) => void
    readonly glClearColor: (red: GL.clampf, green: GL.clampf, blue: GL.clampf, alpha: GL.clampf) => void
    readonly glClearStencil: (s: GL.int) => void
    readonly glColorMask: (red: GL.boolean_, green: GL.boolean_, blue: GL.boolean_, alpha: GL.boolean_) => void
    readonly glCopyTexSubImage2D: (target: GL.enum_, level: GL.int, xoffset: GL.int, yoffset: GL.int, x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei) => void
    readonly glDeleteTextures: (n: GL.sizei, textures: GL.uint) => void
    readonly glDepthFunc: (func: GL.enum_) => void
    readonly glDepthMask: (flag: GL.boolean_) => void
    readonly glDisable: (cap: GL.enum_) => void
    readonly glDrawArrays: (mode: GL.enum_, first: GL.int, count: GL.sizei) => void
    readonly glDrawElements: (mode: GL.enum_, count: GL.sizei, type: GL.enum_, indices: GL.void_) => void
    readonly glEnable: (cap: GL.enum_) => void
    readonly glFinish: () => void
    readonly glFlush: () => void
    readonly glFrontFace: (mode: GL.enum_) => void
    readonly glCullFace: (mode: GL.enum_) => void
    readonly glGenTextures: (n: GL.sizei, textures: GL.uint) => void
    readonly glGetIntegerv: (pname: GL.enum_, params: GL.int) => void
    readonly glGetBooleanv: (pname: GL.enum_, params: GL.boolean_) => void
    readonly glGetFloatv: (pname: GL.enum_, params: GL.float) => void
    readonly glHint: (target: GL.enum_, mode: GL.enum_) => void
    readonly glPixelStorei: (pname: GL.enum_, param: GL.int) => void
    readonly glReadPixels: (x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum_, type: GL.enum_, pixels: GL.void_) => void
    readonly glScissor: (x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei) => void
    readonly glStencilFunc: (func: GL.enum_, ref: GL.int, mask: GL.uint) => void
    readonly glStencilMask: (mask: GL.uint) => void
    readonly glStencilOp: (fail: GL.enum_, zfail: GL.enum_, zpass: GL.enum_) => void
    readonly glTexImage2D: (target: GL.enum_, level: GL.int, internalformat: GL.int, width: GL.sizei, height: GL.sizei, border: GL.int, format: GL.enum_, type: GL.enum_, pixels: GL.void_) => void
    readonly glTexParameterf: (target: GL.enum_, pname: GL.enum_, param: GL.float) => void
    readonly glTexParameterfv: (target: GL.enum_, pname: GL.enum_, params: GL.float) => void
    readonly glTexParameteri: (target: GL.enum_, pname: GL.enum_, param: GL.int) => void
    readonly glTexParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glGetTexParameterfv: (target: GL.enum_, pname: GL.enum_, params: GL.float) => void
    readonly glGetTexParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glTexSubImage2D: (target: GL.enum_, level: GL.int, xoffset: GL.int, yoffset: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum_, type: GL.enum_, pixels: GL.void_) => void
    readonly glCopyTexImage2D: (target: GL.enum_, level: GL.int, internalformat: GL.enum_, x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei, border: GL.int) => void
    readonly glViewport: (x: GL.int, y: GL.int, width: GL.sizei, height: GL.sizei) => void
    readonly glLineWidth: (width: GL.float) => void
    readonly glPolygonOffset: (factor: GL.float, units: GL.float) => void
    readonly glDepthRangef: (near_val: GL.float, far_val: GL.float) => void
    readonly glClearDepthf: (depth: GL.clampf) => void
    readonly glCompressedTexImage2D: (target: GL.enum_, level: GL.int, internalformat: GL.enum_, width: GL.sizei, height: GL.sizei, border: GL.int, imageSize: GL.sizei, data: GL.void_) => void
    readonly glCompressedTexSubImage2D: (target: GL.enum_, level: GL.int, xoffset: GL.int, yoffset: GL.int, width: GL.sizei, height: GL.sizei, format: GL.enum_, imageSize: GL.sizei, data: GL.void_) => void
    readonly glSampleCoverage: (value: GL.clampf, invert: GL.boolean_) => void
    readonly glGetBufferParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glGenBuffers: (n: GL.sizei, buffers: GL.uint) => void
    readonly glBindBuffer: (target: GL.enum_, buffer: GL.uint) => void
    readonly glBufferData: (target: GL.enum_, size: GL.sizeiptr, data: GL.void_, usage: GL.enum_) => void
    readonly glBufferSubData: (target: GL.enum_, offset: GL.intptr, size: GL.sizeiptr, data: GL.void_) => void
    readonly glDeleteBuffers: (n: GL.sizei, buffers: GL.uint) => void
    readonly glActiveTexture: (texture: GL.enum_) => void
    readonly glGenRenderbuffers: (n: GL.sizei, renderbuffers: GL.uint) => void
    readonly glDeleteRenderbuffers: (n: GL.sizei, renderbuffers: GL.uint) => void
    readonly glBindRenderbuffer: (target: GL.enum_, renderbuffer: GL.uint) => void
    readonly glRenderbufferStorage: (target: GL.enum_, internalformat: GL.enum_, width: GL.sizei, height: GL.sizei) => void
    readonly glGenFramebuffers: (n: GL.sizei, framebuffers: GL.uint) => void
    readonly glBindFramebuffer: (target: GL.enum_, framebuffer: GL.uint) => void
    readonly glFramebufferTexture2D: (target: GL.enum_, attachment: GL.enum_, textarget: GL.enum_, texture: GL.uint, level: GL.int) => void
    readonly glFramebufferRenderbuffer: (target: GL.enum_, attachment: GL.enum_, renderbuffertarget: GL.enum_, renderbuffer: GL.uint) => void
    readonly glDeleteFramebuffers: (n: GL.sizei, framebuffers: GL.uint) => void
    readonly glGenerateMipmap: (target: GL.enum_) => void
    readonly glGetFramebufferAttachmentParameteriv: (target: GL.enum_, attachment: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glGetRenderbufferParameteriv: (target: GL.enum_, pname: GL.enum_, params: GL.int) => void
    readonly glBlendEquation: (mode: GL.enum_) => void
    readonly glBlendColor: (red: GL.clampf, green: GL.clampf, blue: GL.clampf, alpha: GL.clampf) => void
    readonly glBlendFuncSeparate: (srcRGB: GL.enum_, dstRGB: GL.enum_, srcAlpha: GL.enum_, dstAlpha: GL.enum_) => void
    readonly glBlendEquationSeparate: (modeRGB: GL.enum_, modeAlpha: GL.enum_) => void
    readonly glReleaseShaderCompiler: () => void
    readonly glGetShaderPrecisionFormat: (shadertype: GL.enum_, precisiontype: GL.enum_, range: GL.int, precision: GL.int) => void
    readonly glShaderBinary: (n: GL.sizei, shaders: GL.uint, binaryformat: GL.enum_, binary: GL.void_, length: GL.sizei) => void
    readonly glStencilFuncSeparate: (face: GL.enum_, func: GL.enum_, ref: GL.int, mask: GL.uint) => void
    readonly glStencilMaskSeparate: (face: GL.enum_, mask: GL.uint) => void
    readonly glStencilOpSeparate: (face: GL.enum_, fail: GL.enum_, zfail: GL.enum_, zpass: GL.enum_) => void
    readonly glDeleteShader: (shader: GL.uint) => void
    readonly glAttachShader: (program: GL.uint, shader: GL.uint) => void
    readonly glUseProgram: (program: GL.uint) => void
    readonly glDeleteProgram: (program: GL.uint) => void
    readonly glGetShaderInfoLog: (shader: GL.uint, maxLength: GL.sizei, length: GL.sizei, infoLog: string) => void
    readonly glGetProgramInfoLog: (program: GL.uint, bufSize: GL.sizei, length: GL.sizei, infoLog: string) => void
    readonly glGetShaderiv: (shader: GL.uint, pname: GL.enum_, params: GL.int) => void
    readonly glGetProgramiv: (program: GL.uint, pname: GL.enum_, params: GL.int) => void
    readonly glDetachShader: (program: GL.uint, shader: GL.uint) => void
    readonly glGetAttachedShaders: (program: GL.uint, maxcount: GL.sizei, count: GL.sizei, shaders: GL.uint) => void
    readonly glShaderSource: (shader: GL.uint, count: GL.sizei, string: string, length: GL.int) => void
    readonly glCompileShader: (shader: GL.uint) => void
    readonly glLinkProgram: (program: GL.uint) => void
    readonly glUniform1f: (location: GL.int, v0: GL.float) => void
    readonly glUniform2f: (location: GL.int, v0: GL.float, v1: GL.float) => void
    readonly glUniform3f: (location: GL.int, v0: GL.float, v1: GL.float, v2: GL.float) => void
    readonly glUniform4f: (location: GL.int, v0: GL.float, v1: GL.float, v2: GL.float, v3: GL.float) => void
    readonly glUniform1fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform2fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform3fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform4fv: (location: GL.int, count: GL.sizei, value: GL.float) => void
    readonly glUniform1i: (location: GL.int, v0: GL.int) => void
    readonly glUniform2i: (location: GL.int, v0: GL.int, v1: GL.int) => void
    readonly glUniform3i: (location: GL.int, v0: GL.int, v1: GL.int, v2: GL.int) => void
    readonly glUniform4i: (location: GL.int, v0: GL.int, v1: GL.int, v2: GL.int, v3: GL.int) => void
    readonly glUniform1iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniform2iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniform3iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniform4iv: (location: GL.int, count: GL.sizei, value: GL.int) => void
    readonly glUniformMatrix2fv: (location: GL.int, count: GL.sizei, transpose: GL.boolean_, value: GL.float) => void
    readonly glUniformMatrix3fv: (location: GL.int, count: GL.sizei, transpose: GL.boolean_, value: GL.float) => void
    readonly glUniformMatrix4fv: (location: GL.int, count: GL.sizei, transpose: GL.boolean_, value: GL.float) => void
    readonly glGetUniformfv: (program: GL.uint, location: GL.int, params: GL.float) => void
    readonly glGetUniformiv: (program: GL.uint, location: GL.int, params: GL.int) => void
    readonly glValidateProgram: (program: GL.uint) => void
    readonly glVertexAttribPointer: (index: GL.uint, size: GL.int, type: GL.enum_, normalized: GL.boolean_, stride: GL.sizei, pointer: GL.void_) => void
    readonly glEnableVertexAttribArray: (index: GL.uint) => void
    readonly glDisableVertexAttribArray: (index: GL.uint) => void
    readonly glVertexAttrib1f: (indx: GL.uint, x: GL.float) => void
    readonly glVertexAttrib1fv: (indx: GL.uint, values: GL.float) => void
    readonly glVertexAttrib2f: (indx: GL.uint, x: GL.float, y: GL.float) => void
    readonly glVertexAttrib2fv: (indx: GL.uint, values: GL.float) => void
    readonly glVertexAttrib3f: (indx: GL.uint, x: GL.float, y: GL.float, z: GL.float) => void
    readonly glVertexAttrib3fv: (indx: GL.uint, values: GL.float) => void
    readonly glVertexAttrib4f: (index: GL.uint, x: GL.float, y: GL.float, z: GL.float, w: GL.float) => void
    readonly glVertexAttrib4fv: (indx: GL.uint, values: GL.float) => void
    readonly glGetVertexAttribfv: (index: GL.uint, pname: GL.enum_, params: GL.float) => void
    readonly glGetVertexAttribiv: (index: GL.uint, pname: GL.enum_, params: GL.int) => void
    readonly glGetVertexAttribPointerv: (index: GL.uint, pname: GL.enum_, pointer: GL.void_) => void
    static name: string
}
class GtypeClass {
    /* Fields of Cogl-2.0.Cogl.GtypeClass */
    readonly base_class: GObject.TypeClass
    readonly dummy: number
    static name: string
}
class GtypeObject {
    /* Fields of Cogl-2.0.Cogl.GtypeObject */
    readonly parent_instance: GObject.TypeInstance
    readonly dummy: number
    static name: string
}
class KmsCrtc {
    /* Fields of Cogl-2.0.Cogl.KmsCrtc */
    readonly id: number
    readonly x: number
    readonly y: number
    readonly connectors: number
    readonly count: number
    readonly ignore: Bool
    static name: string
}
class Matrix {
    /* Fields of Cogl-2.0.Cogl.Matrix */
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
    /* Methods of Cogl-2.0.Cogl.Matrix */
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
     */
    init_from_array(array: number): void
    /**
     * Initializes `matrix` from a #CoglEuler rotation.
     */
    init_from_euler(euler: Euler): void
    /**
     * Initializes `matrix` from a #CoglQuaternion rotation.
     */
    init_from_quaternion(quaternion: Quaternion): void
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
     */
    look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void
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
     * Multiplies `matrix` by a parallel projection matrix.
     */
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    /**
     * Multiplies `matrix` by the described perspective matrix
     * 
     * <note>You should be careful not to have to great a `z_far` / `z_near`
     * ratio since that will reduce the effectiveness of depth testing
     * since there wont be enough precision to identify the depth of
     * objects near to each other.</note>
     */
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    /**
     * Projects an array of input points and writes the result to another
     * array of output points. The input points can either have 2, 3 or 4
     * components each. The output points always have 4 components (known
     * as homogenous coordinates). The output array can simply point to
     * the input array to do the transform in-place.
     * 
     * Here's an example with differing input/output strides:
     * |[
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
     */
    project_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void
    /**
     * Multiplies `matrix` with a rotation matrix that applies a rotation
     * of `angle` degrees around the specified 3D vector.
     */
    rotate(angle: number, x: number, y: number, z: number): void
    /**
     * Multiplies `matrix` with a rotation transformation described by the
     * given #CoglEuler.
     */
    rotate_euler(euler: Euler): void
    /**
     * Multiplies `matrix` with a rotation transformation described by the
     * given #CoglQuaternion.
     */
    rotate_quaternion(quaternion: Quaternion): void
    /**
     * Multiplies `matrix` with a transform matrix that scales along the X,
     * Y and Z axis.
     */
    scale(sx: number, sy: number, sz: number): void
    /**
     * Transforms a point whos position is given and returned as four float
     * components.
     */
    transform_point(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
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
     * |[
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
     */
    transform_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void
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
     */
    view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void
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
     */
    view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void
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
class MatrixEntry {
    /* Methods of Cogl-2.0.Cogl.MatrixEntry */
    /**
     * Determines if the only difference between two transforms is a
     * translation and if so returns what the `x,` `y,` and `z` components of
     * the translation are.
     * 
     * If the difference between the two translations involves anything
     * other than a translation then the function returns %FALSE.
     */
    calculate_translation(entry1: MatrixEntry): [ /* returnType */ Bool, /* x */ number, /* y */ number, /* z */ number ]
    /**
     * Compares two arbitrary #CoglMatrixEntry transforms for equality
     * returning %TRUE if they are equal or %FALSE otherwise.
     * 
     * <note>In many cases it is unnecessary to use this api and instead
     * direct pointer comparisons of entries are good enough and much
     * cheaper too.</note>
     */
    equal(entry1: MatrixEntry): Bool
    /**
     * Resolves the current `entry` transform into a #CoglMatrix by
     * combining the sequence of operations that have been applied to
     * build up the current transform.
     * 
     * There are two possible ways that this function may return its
     * result depending on whether it's possible to directly point
     * to an internal #CoglMatrix or whether the result needs to be
     * composed of multiple operations.
     * 
     * If an internal matrix contains the required result then this
     * function will directly return a pointer to that matrix, otherwise
     * if the function returns %NULL then `matrix` will be initialized
     * to match the transform of `entry`.
     * 
     * <note>`matrix` will be left untouched if a direct pointer is
     * returned.</note>
     */
    get(): [ /* returnType */ Matrix, /* matrix */ Matrix ]
    /**
     * Determines whether `entry` is known to represent an identity
     * transform.
     * 
     * If this returns %TRUE then the entry is definitely the identity
     * matrix. If it returns %FALSE it may or may not be the identity
     * matrix but no expensive comparison is performed to verify it.
     */
    is_identity(): Bool
    /**
     * Takes a reference on the given `entry` to ensure the `entry` stays
     * alive and remains valid. When you are finished with the `entry` then
     * you should call cogl_matrix_entry_unref().
     * 
     * It is an error to pass an `entry` pointer to cogl_object_ref() and
     * cogl_object_unref()
     */
    ref(): MatrixEntry
    /**
     * Releases a reference on `entry` either taken by calling
     * cogl_matrix_entry_unref() or to release the reference given when
     * calling cogl_matrix_stack_get_entry().
     */
    unref(): void
    static name: string
}
class OnscreenDirtyClosure {
    static name: string
}
class OnscreenDirtyInfo {
    /* Fields of Cogl-2.0.Cogl.OnscreenDirtyInfo */
    /**
     * Left edge of the dirty rectangle
     */
    readonly x: number
    /**
     * Top edge of the dirty rectangle, measured from the top of the window
     */
    readonly y: number
    /**
     * Width of the dirty rectangle
     */
    readonly width: number
    /**
     * Height of the dirty rectangle
     */
    readonly height: number
    static name: string
}
class OnscreenResizeClosure {
    static name: string
}
class PollFD {
    /* Fields of Cogl-2.0.Cogl.PollFD */
    /**
     * The file descriptor to block on
     */
    readonly fd: number
    static name: string
}
class Quaternion {
    /* Fields of Cogl-2.0.Cogl.Quaternion */
    /**
     * based on the angle of rotation it is cos(𝜃/2)
     */
    readonly w: number
    /**
     * based on the angle of rotation and x component of the axis of
     *     rotation it is sin(𝜃/2)*axis.x
     */
    readonly x: number
    /**
     * based on the angle of rotation and y component of the axis of
     *     rotation it is sin(𝜃/2)*axis.y
     */
    readonly y: number
    /**
     * based on the angle of rotation and z component of the axis of
     *     rotation it is sin(𝜃/2)*axis.z
     */
    readonly z: number
    /* Methods of Cogl-2.0.Cogl.Quaternion */
    /**
     * Allocates a new #CoglQuaternion on the stack and initializes it with
     * the same values as `src`.
     */
    copy(): Quaternion
    dot_product(b: Quaternion): number
    /**
     * Frees a #CoglQuaternion that was previously allocated via
     * cogl_quaternion_copy().
     */
    free(): void
    get_rotation_angle(): number
    get_rotation_axis(): /* vector3 */ number
    /**
     * Initializes a quaternion that rotates `angle` degrees around the
     * axis vector (`x,` `y,` `z)`. The axis vector does not need to be
     * normalized.
     */
    init(angle: number, x: number, y: number, z: number): void
    /**
     * Initializes a quaternion that rotates `angle` degrees around the
     * given `axis` vector. The axis vector does not need to be
     * normalized.
     */
    init_from_angle_vector(angle: number, axis3f: number): void
    /**
     * Initializes a [w (x, y,z)] quaternion directly from an array of 4
     * floats: [w,x,y,z].
     */
    init_from_array(array: number): void
    init_from_euler(euler: Euler): void
    /**
     * Initializes a quaternion from a rotation matrix.
     */
    init_from_matrix(matrix: Matrix): void
    init_from_quaternion(src: Quaternion): void
    /**
     * XXX: check which direction this rotates
     */
    init_from_x_rotation(angle: number): void
    init_from_y_rotation(angle: number): void
    init_from_z_rotation(angle: number): void
    /**
     * Initializes the quaternion with the canonical quaternion identity
     * [1 (0, 0, 0)] which represents no rotation. Multiplying a
     * quaternion with this identity leaves the quaternion unchanged.
     * 
     * You might also want to consider using
     * cogl_get_static_identity_quaternion().
     */
    init_identity(): void
    invert(): void
    /**
     * This combines the rotations of two quaternions into `result`. The
     * operation is not commutative so the order is important because AxB
     * != BxA. Cogl follows the standard convention for quaternions here
     * so the rotations are applied `right` to `left`. This is similar to the
     * combining of matrices.
     * 
     * <note>It is possible to multiply the `a` quaternion in-place, so
     * `result` can be equal to `a` but can't be equal to `b`.</note>
     */
    multiply(left: Quaternion, right: Quaternion): void
    /**
     * Performs a normalized linear interpolation between two quaternions.
     * That is it does a linear interpolation of the quaternion components
     * and then normalizes the result. This will follow the shortest arc
     * between the two orientations (just like the slerp() function) but
     * will not progress at a constant speed. Unlike slerp() nlerp is
     * commutative which is useful if you are blending animations
     * together. (I.e. nlerp (tmp, a, b) followed by nlerp (result, tmp,
     * d) is the same as nlerp (tmp, a, d) followed by nlerp (result, tmp,
     * b)). Finally nlerp is cheaper than slerp so it can be a good choice
     * if you don't need the constant speed property of the slerp() function.
     * 
     * Notable properties:
     * <itemizedlist>
     * <listitem>
     * commutative: Yes
     * </listitem>
     * <listitem>
     * constant velocity: No
     * </listitem>
     * <listitem>
     * torque minimal (travels along the surface of the 4-sphere): Yes
     * </listitem>
     * <listitem>
     * faster than cogl_quaternion_slerp()
     * </listitem>
     * </itemizedlist>
     */
    nlerp(a: Quaternion, b: Quaternion, t: number): void
    normalize(): void
    pow(exponent: number): void
    /**
     * Performs a spherical linear interpolation between two quaternions.
     * 
     * Noteable properties:
     * <itemizedlist>
     * <listitem>
     * commutative: No
     * </listitem>
     * <listitem>
     * constant velocity: Yes
     * </listitem>
     * <listitem>
     * torque minimal (travels along the surface of the 4-sphere): Yes
     * </listitem>
     * <listitem>
     * more expensive than cogl_quaternion_nlerp()
     * </listitem>
     * </itemizedlist>
     */
    slerp(a: Quaternion, b: Quaternion, t: number): void
    squad(prev: Quaternion, a: Quaternion, b: Quaternion, next: Quaternion, t: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Compares that all the components of quaternions `a` and `b` are
     * equal.
     * 
     * An epsilon value is not used to compare the float components, but
     * the == operator is at least used so that 0 and -0 are considered
     * equal.
     */
    static equal(v1?: object | null, v2?: object | null): Bool
}
class TextureVertex {
    /* Fields of Cogl-2.0.Cogl.TextureVertex */
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
class UserDataKey {
    /* Fields of Cogl-2.0.Cogl.UserDataKey */
    /**
     * ignored.
     */
    readonly unused: number
    static name: string
}
class VertexP2 {
    /* Fields of Cogl-2.0.Cogl.VertexP2 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    static name: string
}
class VertexP2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP2C4 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The red component of a color attribute
     */
    readonly r: number
    /**
     * The blue component of a color attribute
     */
    readonly g: number
    /**
     * The green component of a color attribute
     */
    readonly b: number
    /**
     * The alpha component of a color attribute
     */
    readonly a: number
    static name: string
}
class VertexP2T2 {
    /* Fields of Cogl-2.0.Cogl.VertexP2T2 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The s component of a texture coordinate attribute
     */
    readonly s: number
    /**
     * The t component of a texture coordinate attribute
     */
    readonly t: number
    static name: string
}
class VertexP2T2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP2T2C4 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The s component of a texture coordinate attribute
     */
    readonly s: number
    /**
     * The t component of a texture coordinate attribute
     */
    readonly t: number
    /**
     * The red component of a color attribute
     */
    readonly r: number
    /**
     * The blue component of a color attribute
     */
    readonly g: number
    /**
     * The green component of a color attribute
     */
    readonly b: number
    /**
     * The alpha component of a color attribute
     */
    readonly a: number
    static name: string
}
class VertexP3 {
    /* Fields of Cogl-2.0.Cogl.VertexP3 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The z component of a position attribute
     */
    readonly z: number
    static name: string
}
class VertexP3C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP3C4 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The z component of a position attribute
     */
    readonly z: number
    /**
     * The red component of a color attribute
     */
    readonly r: number
    /**
     * The blue component of a color attribute
     */
    readonly g: number
    /**
     * The green component of a color attribute
     */
    readonly b: number
    /**
     * The alpha component of a color attribute
     */
    readonly a: number
    static name: string
}
class VertexP3T2 {
    /* Fields of Cogl-2.0.Cogl.VertexP3T2 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The z component of a position attribute
     */
    readonly z: number
    /**
     * The s component of a texture coordinate attribute
     */
    readonly s: number
    /**
     * The t component of a texture coordinate attribute
     */
    readonly t: number
    static name: string
}
class VertexP3T2C4 {
    /* Fields of Cogl-2.0.Cogl.VertexP3T2C4 */
    /**
     * The x component of a position attribute
     */
    readonly x: number
    /**
     * The y component of a position attribute
     */
    readonly y: number
    /**
     * The z component of a position attribute
     */
    readonly z: number
    /**
     * The s component of a texture coordinate attribute
     */
    readonly s: number
    /**
     * The t component of a texture coordinate attribute
     */
    readonly t: number
    /**
     * The red component of a color attribute
     */
    readonly r: number
    /**
     * The blue component of a color attribute
     */
    readonly g: number
    /**
     * The green component of a color attribute
     */
    readonly b: number
    /**
     * The alpha component of a color attribute
     */
    readonly a: number
    static name: string
}
class _ColorSizeCheck {
    /* Fields of Cogl-2.0.Cogl._ColorSizeCheck */
    readonly compile_time_assert_CoglColor_size: number[]
    static name: string
}
class _EulerSizeCheck {
    /* Fields of Cogl-2.0.Cogl._EulerSizeCheck */
    readonly compile_time_assert_CoglEuler_size: number[]
    static name: string
}
class _MatrixSizeCheck {
    /* Fields of Cogl-2.0.Cogl._MatrixSizeCheck */
    readonly compile_time_assert_CoglMatrix_size: number[]
    static name: string
}
class _QuaternionSizeCheck {
    /* Fields of Cogl-2.0.Cogl._QuaternionSizeCheck */
    readonly compile_time_assert_CoglQuaternion_size: number[]
    static name: string
}
class _TextureVertexSizeCheck {
    /* Fields of Cogl-2.0.Cogl._TextureVertexSizeCheck */
    readonly compile_time_assert_CoglTextureVertex_size: number[]
    static name: string
}
    type Angle = number
    type Bool = number
    type Buffer = void
    type Handle = object
    type MetaTexture = void
    type PrimitiveTexture = void
    type UserDataDestroyCallback = GLib.DestroyNotify
}
export default Cogl;