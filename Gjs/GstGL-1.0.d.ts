// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGL-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstGL {

enum GLBaseMemoryError {
    /**
     * generic failure
     */
    FAILED,
    /**
     * the implementation is too old and doesn't
     *                                     implement enough features
     */
    OLD_LIBS,
    /**
     * a resource could not be found
     */
    RESOURCE_UNAVAILABLE,
}
enum GLConfigCaveat {
    /**
     * none
     */
    NONE,
    /**
     * slow
     */
    SLOW,
    /**
     * non-conformant
     */
    NON_CONFORMANT,
}
/**
 * OpenGL context errors.
 */
enum GLContextError {
    /**
     * Failed for an unspecified reason
     */
    FAILED,
    /**
     * The configuration requested is not correct
     */
    WRONG_CONFIG,
    /**
     * The OpenGL API requested is not correct
     */
    WRONG_API,
    /**
     * The OpenGL libraries are too old
     */
    OLD_LIBS,
    /**
     * glXCreateContext (or similar) failed
     */
    CREATE_CONTEXT,
    /**
     * A resource is not available
     */
    RESOURCE_UNAVAILABLE,
}
enum GLFormat {
    /**
     * Single component replicated across R, G, and B textures
     *                    components
     */
    LUMINANCE,
    /**
     * Single component stored in the A texture component
     */
    ALPHA,
    /**
     * Combination of #GST_GL_LUMINANCE and #GST_GL_ALPHA
     */
    LUMINANCE_ALPHA,
    /**
     * Single component stored in the R texture component
     */
    RED,
    /**
     * Single 8-bit component stored in the R texture component
     */
    R8,
    /**
     * Two components stored in the R and G texture components
     */
    RG,
    /**
     * Two 8-bit components stored in the R and G texture components
     */
    RG8,
    /**
     * Three components stored in the R, G, and B texture components
     */
    RGB,
    /**
     * Three 8-bit components stored in the R, G, and B
     *               texture components
     */
    RGB8,
    /**
     * Three components of bit depth 5, 6 and 5 stored in the R, G,
     *                 and B texture components respectively.
     */
    RGB565,
    /**
     * Three 16-bit components stored in the R, G, and B
     *               texture components
     */
    RGB16,
    /**
     * Four components stored in the R, G, B, and A texture
     *               components respectively.
     */
    RGBA,
    /**
     * Four 8-bit components stored in the R, G, B, and A texture
     *                components respectively.
     */
    RGBA8,
    /**
     * Four 16-bit components stored in the R, G, B, and A texture
     *                components respectively.
     */
    RGBA16,
    /**
     * A single 16-bit component for depth information.
     */
    DEPTH_COMPONENT16,
    /**
     * A 24-bit component for depth information and
     *                           a 8-bit component for stencil informat.
     */
    DEPTH24_STENCIL8,
    RGB10_A2,
    /**
     * Single 16-bit component stored in the R texture component
     */
    R16,
    /**
     * Two 16-bit components stored in the R and G texture components
     */
    RG16,
}
enum GLQueryType {
    /**
     * no query
     */
    NONE,
    /**
     * query the time elapsed
     */
    TIME_ELAPSED,
    /**
     * query the current time
     */
    TIMESTAMP,
}
/**
 * Compilation stage that caused an error
 */
enum GLSLError {
    /**
     * Compilation error occurred
     */
    COMPILE,
    /**
     * Link error occurred
     */
    LINK,
    /**
     * General program error occurred
     */
    PROGRAM,
}
/**
 * GLSL version list
 */
enum GLSLVersion {
    /**
     * no version
     */
    NONE,
    /**
     * version 100 (only valid for ES)
     */
    TODO_100,
    /**
     * version 110 (only valid for compatibility desktop GL)
     */
    TODO_110,
    /**
     * version 120 (only valid for compatibility desktop GL)
     */
    TODO_120,
    /**
     * version 130 (only valid for compatibility desktop GL)
     */
    TODO_130,
    /**
     * version 140 (only valid for compatibility desktop GL)
     */
    TODO_140,
    /**
     * version 150 (valid for compatibility/core desktop GL)
     */
    TODO_150,
    /**
     * version 300 (only valid for ES)
     */
    TODO_300,
    /**
     * version 310 (only valid for ES)
     */
    TODO_310,
    /**
     * version 320 (only valid for ES)
     */
    TODO_320,
    /**
     * version 330 (valid for compatibility/core desktop GL)
     */
    TODO_330,
    /**
     * version 400 (valid for compatibility/core desktop GL)
     */
    TODO_400,
    /**
     * version 410 (valid for compatibility/core desktop GL)
     */
    TODO_410,
    /**
     * version 420 (valid for compatibility/core desktop GL)
     */
    TODO_420,
    /**
     * version 430 (valid for compatibility/core desktop GL)
     */
    TODO_430,
    /**
     * version 440 (valid for compatibility/core desktop GL)
     */
    TODO_440,
    /**
     * version 450 (valid for compatibility/core desktop GL)
     */
    TODO_450,
}
/**
 * Output anaglyph type to generate when downmixing to mono
 */
enum GLStereoDownmix {
    /**
     * Dubois optimised Green-Magenta anaglyph
     */
    GREEN_MAGENTA_DUBOIS,
    /**
     * Dubois optimised Red-Cyan anaglyph
     */
    RED_CYAN_DUBOIS,
    /**
     * Dubois optimised Amber-Blue anaglyph
     */
    AMBER_BLUE_DUBOIS,
}
/**
 * The OpenGL texture target that an OpenGL texture can be bound to.  The
 * gst_gl_value_set_texture_target_from_mask(),
 * gst_gl_value_get_texture_target_mask(), and
 * gst_gl_value_set_texture_target() functions can be used for handling texture
 * targets with #GValue's when e.g. dealing with #GstCaps.
 */
enum GLTextureTarget {
    /**
     * no texture target
     */
    NONE,
    /**
     * 2D texture target (`GL_TEXTURE_2D`)
     */
    TODO_2D,
    /**
     * rectangle texture target
     *     (`GL_TEXTURE_RECTANGLE`)
     */
    RECTANGLE,
    /**
     * external oes texture target
     *     (`GL_TEXTURE_EXTERNAL_OES`)
     */
    EXTERNAL_OES,
}
enum GLUploadReturn {
    /**
     * No further processing required
     */
    DONE,
    /**
     * An unspecified error occurred
     */
    ERROR,
    /**
     * The configuration is unsupported.
     */
    UNSUPPORTED,
    /**
     * This element requires a reconfiguration.
     */
    RECONFIGURE,
    /**
     * private return value.
     */
    UNSHARED_GL_CONTEXT,
}
enum GLWindowError {
    /**
     * failed for a unspecified reason
     */
    FAILED,
    /**
     * the implementation is too old
     */
    OLD_LIBS,
    /**
     * no such resource was found
     */
    RESOURCE_UNAVAILABLE,
}
enum GLAPI {
    /**
     * no API
     */
    NONE,
    /**
     * Desktop OpenGL up to and including 3.1.  The
     *                    compatibility profile when the OpenGL version is >= 3.2
     */
    OPENGL,
    /**
     * Desktop OpenGL >= 3.2 core profile
     */
    OPENGL3,
    /**
     * OpenGL ES 1.x
     */
    GLES1,
    /**
     * OpenGL ES 2.x and 3.x
     */
    GLES2,
    /**
     * Any OpenGL API
     */
    ANY,
}
enum GLBaseMemoryTransfer {
    /**
     * the texture needs downloading
     *                                             to the data pointer
     */
    DOWNLOAD,
    /**
     * the data pointer needs uploading
     *                                             to the texture
     */
    UPLOAD,
}
enum GLConfigSurfaceType {
    /**
     * none
     */
    NONE,
    /**
     * window
     */
    WINDOW,
    /**
     * pbuffer
     */
    PBUFFER,
    /**
     * pixmap
     */
    PIXMAP,
}
enum GLDisplayType {
    /**
     * no display type
     */
    NONE,
    /**
     * X11 display
     */
    X11,
    /**
     * Wayland display
     */
    WAYLAND,
    /**
     * Cocoa display
     */
    COCOA,
    /**
     * Win32 display
     */
    WIN32,
    /**
     * Dispmanx display
     */
    DISPMANX,
    /**
     * EGL display
     */
    EGL,
    /**
     * Vivante Framebuffer display
     */
    VIV_FB,
    /**
     * Mesa3D GBM display
     */
    GBM,
    /**
     * EGLDevice display.
     */
    EGL_DEVICE,
    /**
     * EAGL display.
     */
    EAGL,
    /**
     * WinRT display.
     */
    WINRT,
    /**
     * Android display.
     */
    ANDROID,
    /**
     * any display type
     */
    ANY,
}
enum GLPlatform {
    /**
     * no platform
     */
    NONE,
    /**
     * the EGL platform used primarily with the X11, wayland
     *                      and android window systems as well as on embedded Linux
     */
    EGL,
    /**
     * the GLX platform used primarily with the X11 window system
     */
    GLX,
    /**
     * the WGL platform used primarily on Windows
     */
    WGL,
    /**
     * the CGL platform used primarily on OS X
     */
    CGL,
    /**
     * the EAGL platform used primarily on iOS
     */
    EAGL,
    /**
     * any OpenGL platform
     */
    ANY,
}
/**
 * GLSL profiles
 * @bitfield 
 */
enum GLSLProfile {
    /**
     * no profile supported/available
     */
    NONE,
    /**
     * OpenGL|ES profile
     */
    ES,
    /**
     * OpenGL core profile
     */
    CORE,
    /**
     * OpenGL compatibility profile
     */
    COMPATIBILITY,
    /**
     * any OpenGL/OpenGL|ES profile
     */
    ANY,
}
/**
 * An option that can be activated on bufferpools to request OpenGL
 * synchronization metadata on buffers from the pool.
 */
const BUFFER_POOL_OPTION_GL_SYNC_META: string
/**
 * String used for %GST_GL_TEXTURE_TARGET_2D as a #GstBufferPool pool option
 */
const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string
/**
 * String used for %GST_GL_TEXTURE_TARGET_EXTERNAL_OES as a #GstBufferPool pool option
 */
const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string
/**
 * String used for %GST_GL_TEXTURE_TARGET_RECTANGLE as a #GstBufferPool pool option
 */
const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string
/**
 * Name of the caps feature indicating the use of GL buffers
 */
const CAPS_FEATURE_MEMORY_GL_BUFFER: string
/**
 * Name of the caps feature for indicating the use of #GstGLMemory
 */
const CAPS_FEATURE_MEMORY_GL_MEMORY: string
/**
 * GL Allocation flag indicating that the implementation should allocate the
 * necessary resources.
 */
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number
/**
 * GL allocation flag indicating the allocation of a GL buffer.
 */
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number
/**
 * Values >= than #GST_GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER can be used for
 * user-defined purposes.
 */
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number
/**
 * GL allocation flag indicating the allocation of 2D video frames
 */
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number
/**
 * GL Allocation flag for using the provided GPU handle as storage.
 */
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number
/**
 * GL Allocation flag for using the provided system memory data as storage.
 */
const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number
/**
 * The name for %GST_GL_API_GLES1 used in various places
 */
const GL_API_GLES1_NAME: string
/**
 * The name for %GST_GL_API_GLES2 used in various places
 */
const GL_API_GLES2_NAME: string
/**
 * The name for %GST_GL_API_OPENGL3 used in various places
 */
const GL_API_OPENGL3_NAME: string
/**
 * The name for %GST_GL_API_OPENGL used in various places
 */
const GL_API_OPENGL_NAME: string
/**
 * The name of the GL buffer allocator
 */
const GL_BASE_MEMORY_ALLOCATOR_NAME: string
/**
 * The name of the GL buffer allocator
 */
const GL_BUFFER_ALLOCATOR_NAME: string
/**
 * The currently supported formats that can be converted
 */
const GL_COLOR_CONVERT_FORMATS: string
/**
 * The currently supported #GstCaps that can be converted
 */
const GL_COLOR_CONVERT_VIDEO_CAPS: string
/**
 * The canonical name of a #GstStructure that contains a configuration for a
 * #GstGLContext.
 */
const GL_CONFIG_STRUCTURE_NAME: string
const GL_CONTEXT_TYPE_CGL: string
const GL_CONTEXT_TYPE_EAGL: string
const GL_CONTEXT_TYPE_EGL: string
const GL_CONTEXT_TYPE_GLX: string
const GL_CONTEXT_TYPE_WGL: string
/**
 * The name used in #GstContext queries for requesting a #GstGLDisplay
 */
const GL_DISPLAY_CONTEXT_TYPE: string
/**
 * The name of the GL memory allocator
 */
const GL_MEMORY_ALLOCATOR_NAME: string
/**
 * The name of the GL Memory PBO allocator
 */
const GL_MEMORY_PBO_ALLOCATOR_NAME: string
/**
 * List of video formats that are supported by #GstGLMemory
 */
const GL_MEMORY_VIDEO_FORMATS_STR: string
/**
 * The name of the GL renderbuffer allocator
 */
const GL_RENDERBUFFER_ALLOCATOR_NAME: string
/**
 * String used for %GST_GL_TEXTURE_TARGET_2D in things like caps values
 */
const GL_TEXTURE_TARGET_2D_STR: string
/**
 * String used for %GST_GL_TEXTURE_TARGET_EXTERNAL_OES in things like caps values
 */
const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string
/**
 * String used for %GST_GL_TEXTURE_TARGET_RECTANGLE in things like caps values
 */
const GL_TEXTURE_TARGET_RECTANGLE_STR: string
/**
 * Flag indicating that we should map the GL object instead of to system memory.
 * 
 * Combining #GST_MAP_GL with #GST_MAP_WRITE has the same semantics as though
 * you are writing to OpenGL. Conversely, combining #GST_MAP_GL with
 * #GST_MAP_READ has the same semantics as though you are reading from OpenGL.
 */
const MAP_GL: number
function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta
function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data: object | null): GLSyncMeta
function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams
/**
 * Sets `params` on `config`
 * @param config a buffer pool config
 * @param params a #GstGLAllocationParams
 */
function buffer_pool_config_set_gl_allocation_params(config: Gst.Structure, params: GLAllocationParams): void
function context_get_gl_display(context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay ]
/**
 * Sets `display` on `context`
 * @param context a #GstContext
 * @param display resulting #GstGLDisplay
 */
function context_set_gl_display(context: Gst.Context, display: GLDisplay): void
function gl_api_from_string(api_s: string): GLAPI
function gl_api_to_string(api: GLAPI): string
function gl_base_memory_alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
function gl_base_memory_error_quark(): GLib.Quark
/**
 * Initializes the GL Base Memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLBaseMemory operation.
 */
function gl_base_memory_init_once(): void
/**
 * Initializes the GL Buffer allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstGLBuffer operation.
 */
function gl_buffer_init_once(): void
function gl_check_extension(name: string, ext: string): boolean
function gl_config_caveat_to_string(caveat: GLConfigCaveat): string | null
function gl_config_surface_type_to_string(surface_type: GLConfigSurfaceType): string | null
function gl_context_error_quark(): GLib.Quark
function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void
/**
 * Perform the steps necessary for retrieving a #GstGLDisplay and (optionally)
 * an application provided #GstGLContext from the surrounding elements or from
 * the application using the #GstContext mechanism.
 * 
 * If the contents of `display_ptr` or `other_context_ptr` are not %NULL, then no
 * #GstContext query is necessary for #GstGLDisplay or #GstGLContext retrieval
 * or is performed.
 * 
 * This performs #GstContext queries (if necessary) for a winsys display
 * connection with %GST_GL_DISPLAY_CONTEXT_TYPE, "gst.x11.display.handle", and
 * "GstWaylandDisplayHandleContextType" stopping after the first successful
 * retrieval.
 * 
 * This also performs a #GstContext query (if necessary) for an optional
 * application provided #GstGLContext using the name "gst.gl.app_context".
 * The returned #GstGLContext will be shared with a GStreamer created OpenGL context.
 * @param element the #GstElement running the query
 * @param display_ptr the resulting #GstGLDisplay
 * @param other_context_ptr the resulting #GstGLContext
 */
function gl_ensure_element_data(element: Gst.Element, display_ptr: GLDisplay, other_context_ptr: GLContext): [ /* returnType */ boolean, /* display_ptr */ GLDisplay, /* other_context_ptr */ GLContext ]
function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat
function gl_format_is_supported(context: GLContext, format: GLFormat): boolean
/**
 * Get the unsized format and type from `format` for usage in glReadPixels,
 * glTex{Sub}Image*, glTexImage* and similar functions.
 * @param format the sized internal #GstGLFormat
 */
function gl_format_type_from_sized_gl_format(format: GLFormat): [ /* unsized_format */ GLFormat, /* gl_type */ number ]
function gl_format_type_n_bytes(format: number, type: number): number
/**
 * Retrieves the stored 4x4 affine transformation matrix stored in `meta` in
 * NDC coordinates. if `meta` is NULL, an identity matrix is returned.
 * 
 * NDC is a left-handed coordinate system
 * - x - [-1, 1] - +ve X moves right
 * - y - [-1, 1] - +ve Y moves up
 * - z - [-1, 1] - +ve Z moves into
 * @param meta a #GstVideoAffineTransformationMeta
 */
function gl_get_affine_transformation_meta_as_ndc(meta: GstVideo.VideoAffineTransformationMeta | null): /* matrix */ number[]
/**
 * Retrieve the size in bytes of a video plane of data with a certain alignment
 * @param info a #GstVideoInfo
 * @param align a #GstVideoAlignment or %NULL
 * @param plane plane number in `info` to retrieve the data size of
 */
function gl_get_plane_data_size(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number
function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number
function gl_handle_context_query(element: Gst.Element, query: Gst.Query, display: GLDisplay | null, context: GLContext | null, other_context: GLContext | null): boolean
/**
 * Helper function for implementing #GstElementClass.set_context() in
 * OpenGL capable elements.
 * 
 * Retrieve's the #GstGLDisplay or #GstGLContext in `context` and places the
 * result in `display` or `other_context` respectively.
 * @param element a #GstElement
 * @param context a #GstContext
 */
function gl_handle_set_context(element: Gst.Element, context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay, /* other_context */ GLContext ]
/**
 * Initializes the GL Base Texture allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLMemory operation.
 */
function gl_memory_init_once(): void
function gl_memory_pbo_init_once(): void
/**
 * Multiplies two 4x4 matrices, `a` and `b,` and stores the result, a
 * 2-dimensional array of #gfloat, in `result`.
 * @param a a 2-dimensional 4x4 array of #gfloat
 * @param b another 2-dimensional 4x4 array of #gfloat
 */
function gl_multiply_matrix4(a: number[], b: number[]): /* result */ number[]
function gl_platform_from_string(platform_s: string): GLPlatform
function gl_platform_to_string(platform: GLPlatform): string
/**
 * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
 * #GstPads in `element` of `direction` for the local OpenGL context used by
 * GStreamer elements.
 * @param element a #GstElement to query from
 * @param direction the #GstPadDirection to query
 * @param context_ptr location containing the current and/or resulting                      #GstGLContext
 */
function gl_query_local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [ /* returnType */ boolean, /* context_ptr */ GLContext ]
/**
 * Initializes the GL Base Texture allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLRenderbuffer operation.
 */
function gl_renderbuffer_init_once(): void
/**
 * Set the 4x4 affine transformation matrix stored in `meta` from the
 * NDC coordinates in `matrix`.
 * @param meta a #GstVideoAffineTransformationMeta
 * @param matrix a 4x4 matrix
 */
function gl_set_affine_transformation_meta_from_ndc(meta: GstVideo.VideoAffineTransformationMeta, matrix: number[]): void
function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number
function gl_stereo_downmix_mode_get_type(): GObject.GType
function gl_sync_meta_api_get_type(): GObject.GType
function gl_sync_meta_get_info(): Gst.MetaInfo
function gl_texture_target_from_gl(target: number): GLTextureTarget
function gl_texture_target_from_string(str: string): GLTextureTarget
function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget): string
function gl_texture_target_to_gl(target: GLTextureTarget): number
function gl_texture_target_to_string(target: GLTextureTarget): string
/**
 * See gst_gl_value_set_texture_target_from_mask() for what entails a mask
 * @param value an initialized #GValue of type G_TYPE_STRING
 */
function gl_value_get_texture_target_mask(value: any): GLTextureTarget
function gl_value_set_texture_target(value: any, target: GLTextureTarget): boolean
/**
 * A mask is a bitwise OR of (1 << target) where target is a valid
 * #GstGLTextureTarget
 * @param value an uninitialized #GValue
 * @param target_mask a bitwise mask of #GstGLTextureTarget's
 */
function gl_value_set_texture_target_from_mask(value: any, target_mask: GLTextureTarget): boolean
function gl_version_to_glsl_version(gl_api: GLAPI, maj: number, min: number): GLSLVersion
function gl_window_error_quark(): GLib.Quark
function glsl_error_quark(): GLib.Quark
function glsl_profile_from_string(string: string): GLSLProfile
function glsl_profile_to_string(profile: GLSLProfile): string | null
/**
 * Note: this function first searches the first 1 kilobytes for a `#version`
 * preprocessor directive and then executes gst_glsl_version_profile_from_string().
 * @param s string to search for a valid `#version` string
 */
function glsl_string_get_version_profile(s: string): [ /* returnType */ boolean, /* version */ GLSLVersion, /* profile */ GLSLProfile ]
function glsl_version_from_string(string: string): GLSLVersion
/**
 * Note: this function expects either a `#version` GLSL preprocesser directive
 * or a valid GLSL version and/or profile.
 * @param string a valid GLSL `#version` string
 */
function glsl_version_profile_from_string(string: string): [ /* returnType */ boolean, /* version_ret */ GLSLVersion, /* profile_ret */ GLSLProfile ]
function glsl_version_profile_to_string(version: GLSLVersion, profile: GLSLProfile): string
function glsl_version_to_string(version: GLSLVersion): string | null
function is_gl_base_memory(mem: Gst.Memory): boolean
function is_gl_buffer(mem: Gst.Memory): boolean
function is_gl_memory(mem: Gst.Memory): boolean
function is_gl_memory_pbo(mem: Gst.Memory): boolean
function is_gl_renderbuffer(mem: Gst.Memory): boolean
/**
 * Copies the parameters from `src` into `dest`.  The subclass must compose copy
 * functions from the superclass.
 * @callback 
 * @param src the source #GstGLAllocationParams to copy from
 * @param dest the source #GstGLAllocationParams to copy
 */
interface GLAllocationParamsCopyFunc {
    (src: GLAllocationParams, dest: GLAllocationParams): void
}
/**
 * Free any dynamically allocated data.  The subclass must call the superclass'
 * free.
 * @callback 
 * @param params a #GstGLAllocationParams
 */
interface GLAllocationParamsFreeFunc {
    (params: object | null): void
}
interface GLAsyncDebugLogGetMessage {
    (): string
}
/**
 * Note: not called with a GL context current
 * @callback 
 * @param allocator a #GstGLBaseMemoryAllocator
 * @param params the #GstGLAllocationParams to allocate the memory with
 */
interface GLBaseMemoryAllocatorAllocFunction {
    (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
}
/**
 * Also see gst_memory_copy();
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @param offset the offset to copy from
 * @param size the number of bytes to copy
 */
interface GLBaseMemoryAllocatorCopyFunction {
    (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory
}
/**
 * As this virtual method is called with an OpenGL context current, use this
 * function to allocate and OpenGL resources needed for your application
 * @callback 
 * @param mem a #GstGLBaseMemory
 */
interface GLBaseMemoryAllocatorCreateFunction {
    (mem: GLBaseMemory): boolean
}
/**
 * Destroy any resources allocated throughout the lifetime of `mem`
 * @callback 
 * @param mem a #GstGLBaseMemory
 */
interface GLBaseMemoryAllocatorDestroyFunction {
    (mem: GLBaseMemory): void
}
/**
 * Also see gst_memory_map();
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @param info a #GstMapInfo to map with
 * @param maxsize the size to map
 */
interface GLBaseMemoryAllocatorMapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): object | null
}
/**
 * Also see gst_memory_unmap();
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @param info a #GstMapInfo to map with
 */
interface GLBaseMemoryAllocatorUnmapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo): void
}
/**
 * Represents a function to run in the GL thread with `context` and `data`
 * @callback 
 * @param context a #GstGLContext
 * @param data user data
 */
interface GLContextThreadFunc {
    (context: GLContext, data: object | null): void
}
interface GLFilterRenderFunc {
    (filter: GLFilter, in_tex: GLMemory): boolean
}
/**
 * callback definition for operating through a #GstGLFramebuffer object
 * @callback 
 * @param stuff user data
 */
interface GLFramebufferFunc {
    (stuff: object | null): boolean
}
interface GLWindowCB {
    (data: object | null): void
}
interface GLWindowResizeCB {
    (data: object | null, width: number, height: number): void
}
interface GLBaseFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}

interface GLBaseFilter {

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBaseFilter

    parent: GstBase.BaseTransform
    /**
     * the currently configured #GstGLDisplay
     * @field 
     */
    display: GLDisplay
    /**
     * the currently configured #GstGLContext
     * @field 
     */
    context: GLContext
    /**
     * the currently configured input #GstCaps
     * @field 
     */
    in_caps: Gst.Caps
    /**
     * the currently configured output #GstCaps
     * @field 
     */
    out_caps: Gst.Caps

    // Owm methods of GstGL-1.0.GstGL.GLBaseFilter

    find_gl_context(): boolean
    get_gl_context(): GLContext | null

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_query(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLBaseFilter

    vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_gl_start(): boolean
    vfunc_gl_stop(): void

    // Class property signals of GstGL-1.0.GstGL.GLBaseFilter

    connect(sigName: "notify::qos", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLBaseFilter handles the nitty gritty details of retrieving an OpenGL
 * context.  It also provided some wrappers around #GstBaseTransform's
 * `start()`, `stop()` and `set_caps()` virtual methods that ensure an OpenGL
 * context is available and current in the calling thread.
 * @class 
 */
class GLBaseFilter extends GstBase.BaseTransform {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilter

    static name: string
    static $gtype: GObject.GType<GLBaseFilter>

    // Constructors of GstGL-1.0.GstGL.GLBaseFilter

    constructor(config?: GLBaseFilter_ConstructProps) 
    _init(config?: GLBaseFilter_ConstructProps): void
}

interface GLBaseMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}

interface GLBaseMemoryAllocator {

    // Conflicting properties

    object: any

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    vfunc_alloc(params: GLAllocationParams): GLBaseMemory

    // Overloads of vfunc_alloc

    /**
     * Use `allocator` to allocate a new memory block with memory that is at least
     * `size` big.
     * 
     * The optional `params` can specify the prefix and padding for the memory. If
     * %NULL is passed, no flags, no extra prefix/padding and a default alignment is
     * used.
     * 
     * The prefix/padding will be filled with 0 if flags contains
     * #GST_MEMORY_FLAG_ZERO_PREFIXED and #GST_MEMORY_FLAG_ZERO_PADDED respectively.
     * 
     * When `allocator` is %NULL, the default allocator will be used.
     * 
     * The alignment in `params` is given as a bitmask so that `align` + 1 equals
     * the amount of bytes to align to. For example, to align to 8 bytes,
     * use an alignment of 7.
     * @virtual 
     * @param size size of the visible memory area
     * @param params optional parameters
     */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_alloc(...args: any[]): any
    vfunc_alloc(args_or_size: any[] | number, params?: Gst.AllocationParams | null): GLBaseMemory | Gst.Memory | null | any

    // Class property signals of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLBaseMemoryAllocator struct
 * @class 
 */
class GLBaseMemoryAllocator extends Gst.Allocator {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    static name: string
    static $gtype: GObject.GType<GLBaseMemoryAllocator>

    // Constructors of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    constructor(config?: GLBaseMemoryAllocator_ConstructProps) 
    _init(config?: GLBaseMemoryAllocator_ConstructProps): void
}

interface GLBaseSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {

    // Own constructor properties of GstGL-1.0.GstGL.GLBaseSrc

    timestamp_offset?: number | null
}

interface GLBaseSrc {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrc

    timestamp_offset: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBaseSrc

    parent: GstBase.PushSrc
    /**
     * the currently configured #GstGLDisplay
     * @field 
     */
    display: GLDisplay
    /**
     * the currently configured #GstGLContext
     * @field 
     */
    context: GLContext
    /**
     * the currently configured output #GstVideoInfo
     * @field 
     */
    out_info: GstVideo.VideoInfo
    /**
     * the currently configured output #GstCaps
     * @field 
     */
    out_caps: Gst.Caps
    /**
     * the total running time
     * @field 
     */
    running_time: Gst.ClockTime

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_alloc(...args: any[]): any
    vfunc_create(...args: any[]): any
    vfunc_fill(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLBaseSrc

    vfunc_fill_gl_memory(mem: GLMemory): boolean
    vfunc_gl_start(): boolean
    vfunc_gl_stop(): void

    // Class property signals of GstGL-1.0.GstGL.GLBaseSrc

    connect(sigName: "notify::timestamp-offset", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp-offset", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLBaseSrc handles the nitty gritty details of retrieving an OpenGL
 * context. It also provided some wrappers around #GstBaseSrc's `start()` and
 * `stop()` virtual methods that ensure an OpenGL context is available and
 * current in the calling thread.
 * @class 
 */
class GLBaseSrc extends GstBase.PushSrc {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrc

    static name: string
    static $gtype: GObject.GType<GLBaseSrc>

    // Constructors of GstGL-1.0.GstGL.GLBaseSrc

    constructor(config?: GLBaseSrc_ConstructProps) 
    _init(config?: GLBaseSrc_ConstructProps): void
}

interface GLBufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}

interface GLBufferAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBufferAllocator

    parent: GLBaseMemoryAllocator

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_alloc(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLBufferAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLBufferAllocator struct
 * @class 
 */
class GLBufferAllocator extends GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocator

    static name: string
    static $gtype: GObject.GType<GLBufferAllocator>

    // Constructors of GstGL-1.0.GstGL.GLBufferAllocator

    constructor(config?: GLBufferAllocator_ConstructProps) 
    _init(config?: GLBufferAllocator_ConstructProps): void
}

interface GLBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}

interface GLBufferPool {

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBufferPool

    bufferpool: Gst.BufferPool
    context: GLContext

    // Owm methods of GstGL-1.0.GstGL.GLBufferPool

    /**
     * The returned #GstGLAllocationParams will by %NULL before the first successful
     * call to gst_buffer_pool_set_config().  Subsequent successful calls to
     * gst_buffer_pool_set_config() will cause this function to return a new
     * #GstGLAllocationParams which may or may not contain the same information.
     */
    get_gl_allocation_params(): GLAllocationParams

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLBufferPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * a #GstGLBufferPool is an object that allocates buffers with #GstGLBaseMemory
 * 
 * A #GstGLBufferPool is created with gst_gl_buffer_pool_new()
 * 
 * #GstGLBufferPool implements the VideoMeta buffer pool option
 * %GST_BUFFER_POOL_OPTION_VIDEO_META, the VideoAligment buffer pool option
 * %GST_BUFFER_POOL_OPTION_VIDEO_ALIGNMENT as well as the OpenGL specific
 * %GST_BUFFER_POOL_OPTION_GL_SYNC_META buffer pool option.
 * @class 
 */
class GLBufferPool extends Gst.BufferPool {

    // Own properties of GstGL-1.0.GstGL.GLBufferPool

    static name: string
    static $gtype: GObject.GType<GLBufferPool>

    // Constructors of GstGL-1.0.GstGL.GLBufferPool

    constructor(config?: GLBufferPool_ConstructProps) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     */
    static new(): Gst.BufferPool
    _init(config?: GLBufferPool_ConstructProps): void
}

interface GLColorConvert_ConstructProps extends Gst.Object_ConstructProps {
}

interface GLColorConvert {

    // Owm methods of GstGL-1.0.GstGL.GLColorConvert

    /**
     * Provides an implementation of #GstBaseTransformClass.decide_allocation()
     * @param query a completed ALLOCATION #GstQuery
     */
    decide_allocation(query: Gst.Query): boolean
    /**
     * Converts the data contained by `inbuf` using the formats specified by the
     * #GstCaps passed to gst_gl_color_convert_set_caps()
     * @param inbuf the #GstGLMemory filled #GstBuffer to convert
     */
    perform(inbuf: Gst.Buffer): Gst.Buffer
    /**
     * Initializes `convert` with the information required for conversion.
     * @param in_caps input #GstCaps
     * @param out_caps output #GstCaps
     */
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLColorConvert

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLColorConvert is an object that converts between color spaces and/or
 * formats using OpenGL Shaders.
 * 
 * A #GstGLColorConvert can be created with gst_gl_color_convert_new(), the
 * configuration negotiated with gst_gl_color_convert_transform_caps() and the
 * conversion performed with gst_gl_color_convert_perform().
 * 
 * The glcolorconvertelement provides a GStreamer element that uses
 * #GstGLColorConvert to convert between video formats and color spaces.
 * @class 
 */
class GLColorConvert extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLColorConvert

    static name: string
    static $gtype: GObject.GType<GLColorConvert>

    // Constructors of GstGL-1.0.GstGL.GLColorConvert

    constructor(config?: GLColorConvert_ConstructProps) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLColorConvert
    _init(config?: GLColorConvert_ConstructProps): void
    /**
     * Provides an implementation of #GstBaseTransformClass.fixate_caps()
     * @param context a #GstGLContext to use for transforming `caps`
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps of `direction`
     * @param other the #GstCaps to fixate
     */
    static fixate_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps
    /**
     * Provides an implementation of #GstBaseTransformClass.transform_caps()
     * @param context a #GstGLContext to use for transforming `caps`
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps to transform
     * @param filter a set of filter #GstCaps
     */
    static transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
}

interface GLContext_ConstructProps extends Gst.Object_ConstructProps {
}

interface GLContext {

    // Own fields of GstGL-1.0.GstGL.GLContext

    /**
     * a list of OpenGL function pointers
     * @field 
     */
    gl_vtable: GLFuncs

    // Owm methods of GstGL-1.0.GstGL.GLContext

    /**
     * (De)activate the OpenGL context represented by this `context`.
     * 
     * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
     * currently set window.  See gst_gl_context_set_window() for details.
     * @param activate %TRUE to activate, %FALSE to deactivate
     */
    activate(activate: boolean): boolean
    /**
     * Note: This will always fail for two wrapped #GstGLContext's
     * @param other_context another #GstGLContext
     */
    can_share(other_context: GLContext): boolean
    /**
     * Check for an OpenGL `feature` being supported.
     * 
     * Note: Most features require that the context be created before it is
     * possible to determine their existence and so will fail if that is not the
     * case.
     * @param feature a platform specific feature
     */
    check_feature(feature: string): boolean
    /**
     * Must be called with `context` current.
     * @param fbo_target the GL value of the framebuffer target, GL_FRAMEBUFFER,              GL_READ_FRAMEBUFFER, GL_DRAW_FRAMEBUFFER
     */
    check_framebuffer_status(fbo_target: number): boolean
    check_gl_version(api: GLAPI, maj: number, min: number): boolean
    /**
     * Unbind the current framebuffer
     */
    clear_framebuffer(): void
    /**
     * Clear's the currently set shader from the GL state machine.
     * 
     * Note: must be called in the GL thread.
     */
    clear_shader(): void
    /**
     * Creates an OpenGL context with the specified `other_context` as a context
     * to share shareable OpenGL objects with.  See the OpenGL specification for
     * what is shared between OpenGL contexts.
     * 
     * Since 1.20, the configuration can be overriden with the environment variable
     * `GST_GL_CONFIG` which is a stringified #GstStructure as would be returned
     * from gst_gl_context_get_config().  If `GST_GL_CONFIG` is not set, then the
     * config will be chosen from `other_context` by calling
     * gst_gl_context_get_config() on `other_context`.  Otherwise, a default
     * configuration is used.
     * 
     * Calling gst_gl_context_request_config()) before calling
     * gst_gl_context_create() will override the config from `other_context` but
     * will not override the `GST_GL_CONFIG` environment variable.
     * 
     * If an error occurs, and `error` is not %NULL, then `error` will contain
     * details of the error and %FALSE will be returned.
     * 
     * Should only be called once.
     * @param other_context a #GstGLContext to share OpenGL objects with
     */
    create(other_context: GLContext | null): boolean
    /**
     * Destroys an OpenGL context.
     * 
     * Should only be called after gst_gl_context_create() has been successfully
     * called for this context.
     */
    destroy(): void
    /**
     * Fills `context'`s info (version, extensions, vtable, etc) from the GL
     * context in the current thread.  Typically used with wrapped contexts to
     * allow wrapped contexts to be used as regular #GstGLContext's.
     */
    fill_info(): boolean
    /**
     * Retrieve the OpenGL configuration for this context.  The context must
     * have been successfully created for this function to return a valid value.
     * 
     * Not all implementations currently support retrieving the config and will
     * return %NULL when not supported.
     */
    get_config(): Gst.Structure | null
    get_display(): GLDisplay
    /**
     * Get the currently enabled OpenGL api.
     * 
     * The currently available API may be limited by the #GstGLDisplay in use and/or
     * the #GstGLWindow chosen.
     */
    get_gl_api(): GLAPI
    /**
     * Gets the backing OpenGL context used by `context`.
     */
    get_gl_context(): number
    /**
     * Gets the OpenGL platform that used by `context`.
     */
    get_gl_platform(): GLPlatform
    /**
     * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
     * after a call to gst_gl_context_create().
     */
    get_gl_platform_version(): [ /* major */ number, /* minor */ number ]
    /**
     * Returns the OpenGL version implemented by `context`.  See
     * gst_gl_context_get_gl_api() for retrieving the OpenGL api implemented by
     * `context`.
     */
    get_gl_version(): [ /* maj */ number, /* min */ number ]
    /**
     * Get a function pointer to a specified opengl function, `name`.  If the the
     * specific function does not exist, NULL is returned instead.
     * 
     * Platform specific functions (names starting 'egl', 'glX', 'wgl', etc) can also
     * be retrieved using this method.
     * 
     * Note: This function may return valid function pointers that may not be valid
     * to call in `context`.  The caller is responsible for ensuring that the
     * returned function is a valid function to call in `context` by either checking
     * the OpenGL API and version or for an appropriate OpenGL extension.
     * 
     * Note: On success, you need to cast the returned function pointer to the
     * correct type to be able to call it correctly.  On 32-bit Windows, this will
     * include the `GSTGLAPI` identifier to use the correct calling convention.
     * e.g.
     * 
     * 
     * ```c
     * void (GSTGLAPI *PFN_glGetIntegerv) (GLenum name, GLint * ret)
     * ```
     * 
     * @param name an opengl function name
     */
    get_proc_address(name: string): object | null
    get_thread(): GLib.Thread
    get_window(): GLWindow | null
    is_shared(): boolean
    /**
     * Set the OpenGL configuration for this context.  The context must not
     * have been created for this function to succeed.  Setting a %NULL
     * `config` has the affect of removing any specific configuration request.
     * 
     * Not all implementations currently support retrieving the config and this
     * function will return FALSE when not supported.
     * 
     * Note that calling this function may cause a subsequent
     * gst_gl_context_create() to fail if `config` could not be matched with
     * the platform-specific configuration.
     * 
     * Note that the actual config used may be differ from the requested values.
     * @param gl_config a configuration structure for             configuring the OpenGL context
     */
    request_config(gl_config: Gst.Structure | null): boolean
    /**
     * Will internally set `context` as shared with `share`
     * @param share another #GstGLContext
     */
    set_shared_with(share: GLContext): void
    /**
     * Set's the current window on `context` to `window`.  The window can only be
     * changed before gst_gl_context_create() has been called and the `window` is not
     * already running.
     * @param window a #GstGLWindow
     */
    set_window(window: GLWindow): boolean
    supports_glsl_profile_version(version: GLSLVersion, profile: GLSLProfile): boolean
    supports_precision(version: GLSLVersion, profile: GLSLProfile): boolean
    supports_precision_highp(version: GLSLVersion, profile: GLSLProfile): boolean
    /**
     * Swap the front and back buffers on the window attached to `context`.
     * This will display the frame on the next refresh cycle.
     */
    swap_buffers(): void
    /**
     * Execute `func` in the OpenGL thread of `context` with `data`
     * 
     * MT-safe
     * @param func a #GstGLContextThreadFunc
     */
    thread_add(func: GLContextThreadFunc): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLContext

    /**
     * (De)activate the OpenGL context represented by this `context`.
     * 
     * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
     * currently set window.  See gst_gl_context_set_window() for details.
     * @virtual 
     * @param activate %TRUE to activate, %FALSE to deactivate
     */
    vfunc_activate(activate: boolean): boolean
    /**
     * Check for an OpenGL `feature` being supported.
     * 
     * Note: Most features require that the context be created before it is
     * possible to determine their existence and so will fail if that is not the
     * case.
     * @virtual 
     * @param feature a platform specific feature
     */
    vfunc_check_feature(feature: string): boolean
    vfunc_choose_format(): boolean
    vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean
    vfunc_destroy_context(): void
    /**
     * Retrieve the OpenGL configuration for this context.  The context must
     * have been successfully created for this function to return a valid value.
     * 
     * Not all implementations currently support retrieving the config and will
     * return %NULL when not supported.
     * @virtual 
     */
    vfunc_get_config(): Gst.Structure | null
    /**
     * Get the currently enabled OpenGL api.
     * 
     * The currently available API may be limited by the #GstGLDisplay in use and/or
     * the #GstGLWindow chosen.
     * @virtual 
     */
    vfunc_get_gl_api(): GLAPI
    /**
     * Gets the backing OpenGL context used by `context`.
     * @virtual 
     */
    vfunc_get_gl_context(): number
    /**
     * Gets the OpenGL platform that used by `context`.
     * @virtual 
     */
    vfunc_get_gl_platform(): GLPlatform
    /**
     * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
     * after a call to gst_gl_context_create().
     * @virtual 
     */
    vfunc_get_gl_platform_version(): [ /* major */ number, /* minor */ number ]
    /**
     * Set the OpenGL configuration for this context.  The context must not
     * have been created for this function to succeed.  Setting a %NULL
     * `config` has the affect of removing any specific configuration request.
     * 
     * Not all implementations currently support retrieving the config and this
     * function will return FALSE when not supported.
     * 
     * Note that calling this function may cause a subsequent
     * gst_gl_context_create() to fail if `config` could not be matched with
     * the platform-specific configuration.
     * 
     * Note that the actual config used may be differ from the requested values.
     * @virtual 
     * @param gl_config a configuration structure for             configuring the OpenGL context
     */
    vfunc_request_config(gl_config: Gst.Structure | null): boolean
    /**
     * Swap the front and back buffers on the window attached to `context`.
     * This will display the frame on the next refresh cycle.
     * @virtual 
     */
    vfunc_swap_buffers(): void

    // Class property signals of GstGL-1.0.GstGL.GLContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLContext wraps an OpenGL context object in a uniform API.  As a result
 * of the limitation on OpenGL context, this object is not thread safe unless
 * specified and must only be activated in a single thread.
 * 
 * Environment variables:
 * - `GST_GL_API`: select which OpenGL API to create and OpenGL context for.
 *                 Depending on the platform, the available values are
 *                 'opengl', 'opengl3' (core profile), and 'gles2'.  See the
 *                 the #GstGLAPI enumeration for more details.
 * - `GST_GL_PLATFORM`: select which OpenGL platform to create an OpenGL
 *                      context with.  Depending on the platform and the
 *                      dependencies available build-time, the available values
 *                      are, 'glx', 'egl', 'cgl', 'wgl', and 'eagl'
 * - `GST_GL_CONFIG`: select the configuration used for creating the OpenGL
 *                    context and OpenGL surface.  Written out as a GstStructure
 *                    that has been serialized to string.  e.g.
 *                    `GST_GL_CONFIG="gst-gl-context-config,red-size=8,green-size=8,blue-size=8,alpha-size=8,depth-size=16"`.
 *                    Not all platforms will support the same level of
 *                    functionality.
 * @class 
 */
class GLContext extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLContext

    static name: string
    static $gtype: GObject.GType<GLContext>

    // Constructors of GstGL-1.0.GstGL.GLContext

    constructor(config?: GLContext_ConstructProps) 
    /**
     * Create a new #GstGLContext with the specified `display`
     * @constructor 
     * @param display a #GstGLDisplay
     */
    constructor(display: GLDisplay) 
    /**
     * Create a new #GstGLContext with the specified `display`
     * @constructor 
     * @param display a #GstGLDisplay
     */
    static new(display: GLDisplay): GLContext
    /**
     * Wraps an existing OpenGL context into a #GstGLContext.
     * 
     * Note: The caller is responsible for ensuring that the OpenGL context
     * represented by `handle` stays alive while the returned #GstGLContext is
     * active.
     * 
     * `context_type` must not be %GST_GL_PLATFORM_NONE or %GST_GL_PLATFORM_ANY
     * 
     * `available_apis` must not be %GST_GL_API_NONE or %GST_GL_API_ANY
     * @constructor 
     * @param display a #GstGLDisplay
     * @param handle the OpenGL context to wrap
     * @param context_type a #GstGLPlatform specifying the type of context in `handle`
     * @param available_apis a #GstGLAPI containing the available OpenGL apis in `handle`
     */
    static new_wrapped(display: GLDisplay, handle: number, context_type: GLPlatform, available_apis: GLAPI): GLContext
    _init(config?: GLContext_ConstructProps): void
    /**
     * A default implementation of the various GetProcAddress functions that looks
     * for `name` in the OpenGL shared libraries or in the current process.
     * 
     * See also: gst_gl_context_get_proc_address()
     * @param gl_api a #GstGLAPI
     * @param name then function to get the address of
     */
    static default_get_proc_address(gl_api: GLAPI, name: string): object | null
    /**
     * See also gst_gl_context_activate().
     */
    static get_current(): GLContext
    /**
     * If an error occurs, `major` and `minor` are not modified and %GST_GL_API_NONE is
     * returned.
     * @param platform the #GstGLPlatform to retrieve the API for
     */
    static get_current_gl_api(platform: GLPlatform): [ /* returnType */ GLAPI, /* major */ number, /* minor */ number ]
    static get_current_gl_context(context_type: GLPlatform): number
    /**
     * Attempts to use the `context_type` specific GetProcAddress implementations
     * to retrieve `name`.
     * 
     * See also gst_gl_context_get_proc_address().
     * @param context_type a #GstGLPlatform
     * @param gl_api a #GstGLAPI
     * @param name the name of the function to retrieve
     */
    static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): object | null
}

interface GLDisplay_ConstructProps extends Gst.Object_ConstructProps {
}

/**
 * Signal callback interface for `create-context`
 */
interface GLDisplay_CreateContextSignalCallback {
    ($obj: GLDisplay, context: GLContext): GLContext
}

interface GLDisplay {

    // Owm methods of GstGL-1.0.GstGL.GLDisplay

    add_context(context: GLContext): boolean
    /**
     * It requires the display's object lock to be held.
     * @param other_context other #GstGLContext to share resources with.
     */
    create_context(other_context: GLContext): [ /* returnType */ boolean, /* p_context */ GLContext ]
    create_window(): GLWindow
    /**
     * limit the use of OpenGL to the requested `gl_api`.  This is intended to allow
     * application and elements to request a specific set of OpenGL API's based on
     * what they support.  See gst_gl_context_get_gl_api() for the retrieving the
     * API supported by a #GstGLContext.
     * @param gl_api a #GstGLAPI to filter with
     */
    filter_gl_api(gl_api: GLAPI): void
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstGLWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compare_func a comparison function to run
     */
    find_window(data: object | null, compare_func: GLib.CompareFunc): GLWindow
    /**
     * see gst_gl_display_filter_gl_api() for what the returned value represents
     */
    get_gl_api(): GLAPI
    get_gl_api_unlocked(): GLAPI
    get_gl_context_for_thread(thread: GLib.Thread): GLContext
    get_handle(): number
    get_handle_type(): GLDisplayType
    /**
     * Must be called with the object lock held.
     * @param context the #GstGLContext to remove
     */
    remove_context(context: GLContext): void
    remove_window(window: GLWindow): boolean
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstGLWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compare_func a comparison function to run
     */
    retrieve_window(data: object | null, compare_func: GLib.CompareFunc): GLWindow

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLDisplay

    vfunc_create_window(): GLWindow
    vfunc_get_handle(): number

    // Own signals of GstGL-1.0.GstGL.GLDisplay

    connect(sigName: "create-context", callback: GLDisplay_CreateContextSignalCallback): number
    connect_after(sigName: "create-context", callback: GLDisplay_CreateContextSignalCallback): number
    emit(sigName: "create-context", context: GLContext, ...args: any[]): void

    // Class property signals of GstGL-1.0.GstGL.GLDisplay

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLDisplay represents a connection to the underlying windowing system.
 * Elements are required to make use of #GstContext to share and propagate
 * a #GstGLDisplay.
 * 
 * There are a number of environment variables that influence the choice of
 * platform and window system specific functionality.
 * - GST_GL_WINDOW influences the window system to use.  Common values are
 *   'x11', 'wayland', 'win32' or 'cocoa'.
 * - GST_GL_PLATFORM influences the OpenGL platform to use.  Common values are
 *   'egl', 'glx', 'wgl' or 'cgl'.
 * - GST_GL_API influences the OpenGL API requested by the OpenGL platform.
 *   Common values are 'opengl', 'opengl3' and 'gles2'.
 * 
 * > Certain window systems require a special function to be called to
 * > initialize threading support.  As this GStreamer GL library does not preclude
 * > concurrent access to the windowing system, it is strongly advised that
 * > applications ensure that threading support has been initialized before any
 * > other toolkit/library functionality is accessed.  Failure to do so could
 * > result in sudden application abortion during execution.  The most notably
 * > example of such a function is X11's XInitThreads\().
 * @class 
 */
class GLDisplay extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLDisplay

    static name: string
    static $gtype: GObject.GType<GLDisplay>

    // Constructors of GstGL-1.0.GstGL.GLDisplay

    constructor(config?: GLDisplay_ConstructProps) 
    constructor() 
    static new(): GLDisplay
    /**
     * Will always return a #GstGLDisplay of a single type.  This differs from
     * gst_gl_display_new() and the seemingly equivalent call
     * gst_gl_display_new_with_type (GST_GL_DISPLAY_TYPE_ANY) in that the latter
     * may return NULL.
     * @constructor 
     * @param type #GstGLDisplayType
     */
    static new_with_type(type: GLDisplayType): GLDisplay
    _init(config?: GLDisplay_ConstructProps): void
}

interface GLFilter_ConstructProps extends GLBaseFilter_ConstructProps {
}

interface GLFilter {

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLFilter

    parent: GLBaseFilter
    /**
     * the video info for input buffers
     * @field 
     */
    in_info: GstVideo.VideoInfo
    /**
     * the video info for output buffers
     * @field 
     */
    out_info: GstVideo.VideoInfo
    /**
     * The texture target of the input buffers (usually 2D)
     * @field 
     */
    in_texture_target: GLTextureTarget
    /**
     * The texture target of the output buffers (usually 2D)
     * @field 
     */
    out_texture_target: GLTextureTarget
    /**
     * the output #GstCaps
     * @field 
     */
    out_caps: Gst.Caps
    /**
     * #GstGLFramebuffer object used for transformations (only for subclass usage)
     * @field 
     */
    fbo: GLFramebuffer

    // Owm methods of GstGL-1.0.GstGL.GLFilter

    /**
     * Render a fullscreen quad using the current GL state.  The only GL state this
     * modifies is the necessary vertex/index buffers and, if necessary, a
     * Vertex Array Object for drawing a fullscreen quad.  Framebuffer state,
     * any shaders, viewport state, etc must be setup by the caller.
     */
    draw_fullscreen_quad(): void
    /**
     * Calls filter_texture vfunc with correctly mapped #GstGLMemorys
     * @param input an input buffer
     * @param output an output buffer
     */
    filter_texture(input: Gst.Buffer, output: Gst.Buffer): boolean
    /**
     * Transforms `input` into `output` using `func` on through FBO.
     * @param input the input texture
     * @param output the output texture
     * @param func the function to transform `input` into `output`. called with `data`
     */
    render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean
    /**
     * Transforms `input` into `output` using `shader` with a FBO.
     * 
     * See also: gst_gl_filter_render_to_target()
     * @param input the input texture
     * @param output the output texture
     * @param shader the shader to use.
     */
    render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_query(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLFilter

    vfunc_filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean
    /**
     * Calls filter_texture vfunc with correctly mapped #GstGLMemorys
     * @virtual 
     * @param input an input buffer
     * @param output an output buffer
     */
    vfunc_filter_texture(input: GLMemory, output: GLMemory): boolean
    vfunc_init_fbo(): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_transform_internal_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps): Gst.Caps

    // Class property signals of GstGL-1.0.GstGL.GLFilter

    connect(sigName: "notify::qos", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLFilter helps to implement simple OpenGL filter elements taking a
 * single input and producing a single output with a #GstGLFramebuffer
 * @class 
 */
class GLFilter extends GLBaseFilter {

    // Own properties of GstGL-1.0.GstGL.GLFilter

    static name: string
    static $gtype: GObject.GType<GLFilter>

    // Constructors of GstGL-1.0.GstGL.GLFilter

    constructor(config?: GLFilter_ConstructProps) 
    _init(config?: GLFilter_ConstructProps): void
    static add_rgba_pad_templates(klass: GLFilterClass): void
}

interface GLFramebuffer_ConstructProps extends Gst.Object_ConstructProps {
}

interface GLFramebuffer {

    // Owm methods of GstGL-1.0.GstGL.GLFramebuffer

    /**
     * attach `mem` to `attachment_point`
     * 
     * Must be called with the same OpenGL context current that `fb` was created
     * with.
     * @param attachment_point the OpenGL attachment point to bind `mem` to
     * @param mem the memory object to bind to `attachment_point`
     */
    attach(attachment_point: number, mem: GLBaseMemory): void
    /**
     * Bind `fb` into the current thread
     * 
     * Must be called with the same OpenGL context current that `fb` was created
     * with.
     */
    bind(): void
    /**
     * Perform the steps necessary to have the output of a glDraw* command in
     * `func` update the contents of `mem`.
     * 
     * Note: this function does not map `mem` for writing with OpenGL and that must
     * be done manually by the caller using any of the mapping functions such as
     * gst_memory_map() with the map flags %GST_MAP_WRITE | %GST_MAP_GL.
     * 
     * Must be called with the same OpenGL context current that `fb` was created
     * with.
     * @param mem the #GstGLMemory to draw to
     * @param func the function to run
     */
    draw_to_texture(mem: GLMemory, func: GLFramebufferFunc): boolean
    /**
     * Retrieve the effective dimensions from the current attachments attached to
     * `fb`.
     */
    get_effective_dimensions(): [ /* width */ number, /* height */ number ]
    get_id(): number

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLFramebuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GstGLFramebuffer represents and holds an OpenGL framebuffer object with
 * it's associated attachments.
 * 
 * A #GstGLFramebuffer can be created with gst_gl_framebuffer_new() or
 * gst_gl_framebuffer_new_with_default_depth() and bound with
 * gst_gl_framebuffer_bind().  Other resources can be bound with
 * gst_gl_framebuffer_attach()
 * 
 * Note: OpenGL framebuffers are not shareable resources so cannot be used
 * between multiple OpenGL contexts.
 * @class 
 */
class GLFramebuffer extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLFramebuffer

    static name: string
    static $gtype: GObject.GType<GLFramebuffer>

    // Constructors of GstGL-1.0.GstGL.GLFramebuffer

    constructor(config?: GLFramebuffer_ConstructProps) 
    /**
     * This function will internally create an OpenGL framebuffer object and must
     * be called on `context'`s OpenGL thread.
     * @constructor 
     * @param context a #GstGLContext
     */
    constructor(context: GLContext) 
    /**
     * This function will internally create an OpenGL framebuffer object and must
     * be called on `context'`s OpenGL thread.
     * @constructor 
     * @param context a #GstGLContext
     */
    static new(context: GLContext): GLFramebuffer
    /**
     * This function will internally create an OpenGL framebuffer object and must
     * be called on `context'`s OpenGL thread.
     * @constructor 
     * @param context a #GstGLContext
     * @param width width for the depth buffer
     * @param height for the depth buffer
     */
    static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer
    _init(config?: GLFramebuffer_ConstructProps): void
}

interface GLMemoryAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}

interface GLMemoryAllocator {

    // Conflicting properties

    object: any

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_alloc(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLMemoryAllocator struct
 * @class 
 */
class GLMemoryAllocator extends GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLMemoryAllocator

    static name: string
    static $gtype: GObject.GType<GLMemoryAllocator>

    // Constructors of GstGL-1.0.GstGL.GLMemoryAllocator

    constructor(config?: GLMemoryAllocator_ConstructProps) 
    _init(config?: GLMemoryAllocator_ConstructProps): void
    static get_default(context: GLContext): GLMemoryAllocator
}

interface GLMemoryPBOAllocator_ConstructProps extends GLMemoryAllocator_ConstructProps {
}

interface GLMemoryPBOAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    parent: GLMemoryAllocator

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_alloc(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLMemoryPBOAllocator struct
 * @class 
 */
class GLMemoryPBOAllocator extends GLMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    static name: string
    static $gtype: GObject.GType<GLMemoryPBOAllocator>

    // Constructors of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    constructor(config?: GLMemoryPBOAllocator_ConstructProps) 
    _init(config?: GLMemoryPBOAllocator_ConstructProps): void
}

interface GLOverlayCompositor_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstGL-1.0.GstGL.GLOverlayCompositor

    yinvert?: boolean | null
}

interface GLOverlayCompositor {

    // Own properties of GstGL-1.0.GstGL.GLOverlayCompositor

    yinvert: boolean

    // Owm methods of GstGL-1.0.GstGL.GLOverlayCompositor

    draw_overlays(): void
    free_overlays(): void
    upload_overlays(buf: Gst.Buffer): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLOverlayCompositor

    connect(sigName: "notify::yinvert", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yinvert", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yinvert", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLOverlayCompositor object
 * @class 
 */
class GLOverlayCompositor extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLOverlayCompositor

    static name: string
    static $gtype: GObject.GType<GLOverlayCompositor>

    // Constructors of GstGL-1.0.GstGL.GLOverlayCompositor

    constructor(config?: GLOverlayCompositor_ConstructProps) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLOverlayCompositor
    _init(config?: GLOverlayCompositor_ConstructProps): void
    static add_caps(caps: Gst.Caps): Gst.Caps
}

interface GLRenderbufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}

interface GLRenderbufferAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLRenderbufferAllocator

    parent: GLBaseMemoryAllocator

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_alloc(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLRenderbufferAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLRenderbufferAllocator struct
 * @class 
 */
class GLRenderbufferAllocator extends GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocator

    static name: string
    static $gtype: GObject.GType<GLRenderbufferAllocator>

    // Constructors of GstGL-1.0.GstGL.GLRenderbufferAllocator

    constructor(config?: GLRenderbufferAllocator_ConstructProps) 
    _init(config?: GLRenderbufferAllocator_ConstructProps): void
}

interface GLSLStage_ConstructProps extends Gst.Object_ConstructProps {
}

interface GLSLStage {

    // Owm methods of GstGL-1.0.GstGL.GLSLStage

    compile(): boolean
    get_handle(): number
    get_profile(): GLSLProfile
    get_shader_type(): number
    get_version(): GLSLVersion
    /**
     * Replaces the current shader string with `str`.
     * @param version a #GstGLSLVersion
     * @param profile a #GstGLSLProfile
     * @param str a GLSL shader string
     */
    set_strings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLSLStage

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLSLStage holds and represents a single OpenGL shader stage.
 * @class 
 */
class GLSLStage extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLSLStage

    static name: string
    static $gtype: GObject.GType<GLSLStage>

    // Constructors of GstGL-1.0.GstGL.GLSLStage

    constructor(config?: GLSLStage_ConstructProps) 
    constructor(context: GLContext, type: number) 
    static new(context: GLContext, type: number): GLSLStage
    static new_default_fragment(context: GLContext): GLSLStage
    static new_default_vertex(context: GLContext): GLSLStage
    static new_with_string(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string): GLSLStage
    static new_with_strings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string[]): GLSLStage
    _init(config?: GLSLStage_ConstructProps): void
}

interface GLShader_ConstructProps extends Gst.Object_ConstructProps {
}

interface GLShader {

    // Own properties of GstGL-1.0.GstGL.GLShader

    readonly linked: boolean

    // Own fields of GstGL-1.0.GstGL.GLShader

    parent: Gst.Object
    context: GLContext

    // Owm methods of GstGL-1.0.GstGL.GLShader

    /**
     * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
     * with gst_glsl_stage_compile().
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     */
    attach(stage: GLSLStage): boolean
    /**
     * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
     * with gst_glsl_stage_compile().
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     */
    attach_unlocked(stage: GLSLStage): boolean
    /**
     * Bind attribute `name` to the specified location `index` using
     * `glBindAttributeLocation()`.
     * @param index attribute index to set
     * @param name name of the attribute
     */
    bind_attribute_location(index: number, name: string): void
    /**
     * Bind attribute `name` to the specified location `index` using
     * `glBindFragDataLocation()`.
     * @param index attribute index to set
     * @param name name of the attribute
     */
    bind_frag_data_location(index: number, name: string): void
    /**
     * Compiles `stage` and attaches it to `shader`.
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     */
    compile_attach_stage(stage: GLSLStage): boolean
    /**
     * Detaches `stage` from `shader`.  `stage` must have been successfully attached
     * to `shader` with gst_gl_shader_attach() or gst_gl_shader_attach_unlocked().
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     */
    detach(stage: GLSLStage): void
    /**
     * Detaches `stage` from `shader`.  `stage` must have been successfully attached
     * to `shader` with gst_gl_shader_attach() or gst_gl_shader_attach_unlocked().
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     */
    detach_unlocked(stage: GLSLStage): void
    get_attribute_location(name: string): number
    get_program_handle(): number
    /**
     * Note: must be called in the GL thread
     */
    is_linked(): boolean
    /**
     * Links the current list of #GstGLSLStage's in `shader`.
     * 
     * Note: must be called in the GL thread
     */
    link(): boolean
    /**
     * Releases the shader and stages.
     * 
     * Note: must be called in the GL thread
     */
    release(): void
    /**
     * Releases the shader and stages.
     * 
     * Note: must be called in the GL thread
     */
    release_unlocked(): void
    /**
     * Perform `glUniform1f()` for `name` on `shader`
     * @param name name of the uniform
     * @param value value to set
     */
    set_uniform_1f(name: string, value: number): void
    /**
     * Perform `glUniform1fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_1fv(name: string, value: number[]): void
    /**
     * Perform `glUniform1i()` for `name` on `shader`
     * @param name name of the uniform
     * @param value value to set
     */
    set_uniform_1i(name: string, value: number): void
    /**
     * Perform `glUniform1iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_1iv(name: string, value: number[]): void
    /**
     * Perform `glUniform2f()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     */
    set_uniform_2f(name: string, v0: number, v1: number): void
    /**
     * Perform `glUniform2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_2fv(name: string, value: number[]): void
    /**
     * Perform `glUniform2i()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     */
    set_uniform_2i(name: string, v0: number, v1: number): void
    /**
     * Perform `glUniform2iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_2iv(name: string, value: number[]): void
    /**
     * Perform `glUniform3f()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     */
    set_uniform_3f(name: string, v0: number, v1: number, v2: number): void
    /**
     * Perform `glUniform3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_3fv(name: string, value: number[]): void
    /**
     * Perform `glUniform3i()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     */
    set_uniform_3i(name: string, v0: number, v1: number, v2: number): void
    /**
     * Perform `glUniform3iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_3iv(name: string, value: number[]): void
    /**
     * Perform `glUniform4f()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     * @param v3 fourth value to set
     */
    set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void
    /**
     * Perform `glUniform4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_4fv(name: string, value: number[]): void
    /**
     * Perform `glUniform4i()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     * @param v3 fourth value to set
     */
    set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void
    /**
     * Perform `glUniform4iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    set_uniform_4iv(name: string, value: number[]): void
    /**
     * Perform `glUniformMatrix2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 2x2 matrices to set
     * @param transpose transpose the matrix
     * @param value matrix to set
     */
    set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix2x3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 2x3 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix2x4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 2x4 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 3x3 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix3x2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 3x2 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix3x4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 3x4 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 4x4 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix4x2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 4x2 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix4x3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 4x3 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void
    /**
     * Mark's `shader` as being used for the next GL draw command.
     * 
     * Note: must be called in the GL thread and `shader` must have been linked.
     */
    use(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLShader

    connect(sigName: "notify::linked", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linked", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::linked", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GLShader extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLShader

    static name: string
    static $gtype: GObject.GType<GLShader>

    // Constructors of GstGL-1.0.GstGL.GLShader

    constructor(config?: GLShader_ConstructProps) 
    /**
     * Note: must be called in the GL thread
     * @constructor 
     * @param context a #GstGLContext
     */
    constructor(context: GLContext) 
    /**
     * Note: must be called in the GL thread
     * @constructor 
     * @param context a #GstGLContext
     */
    static new(context: GLContext): GLShader
    /**
     * Note: must be called in the GL thread
     * @constructor 
     * @param context a #GstGLContext
     */
    static new_default(context: GLContext): GLShader
    _init(config?: GLShader_ConstructProps): void
    static string_fragment_external_oes_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    /**
     * Generates a shader string that defines the precision of float types in
     * GLSL shaders.  This is particularly needed for fragment shaders in a
     * GLSL ES context where there is no default precision specified.
     * 
     * Practically, this will return the string 'precision mediump float'
     * or 'precision highp float' depending on if high precision floats are
     * determined to be supported.
     * @param context a #GstGLContext
     * @param version a #GstGLSLVersion
     * @param profile a #GstGLSLProfile
     */
    static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
}

interface GLUpload_ConstructProps extends Gst.Object_ConstructProps {
}

interface GLUpload {

    // Own fields of GstGL-1.0.GstGL.GLUpload

    parent: Gst.Object
    context: GLContext

    // Owm methods of GstGL-1.0.GstGL.GLUpload

    get_caps(): [ /* in_caps */ Gst.Caps, /* out_caps */ Gst.Caps ]
    /**
     * Uploads `buffer` using the transformation specified by
     * gst_gl_upload_set_caps() creating a new #GstBuffer in `outbuf_ptr`.
     * @param buffer input #GstBuffer
     */
    perform_with_buffer(buffer: Gst.Buffer): [ /* returnType */ GLUploadReturn, /* outbuf_ptr */ Gst.Buffer ]
    /**
     * Adds the required allocation parameters to support uploading.
     * @param decide_query a #GstQuery from a decide allocation
     * @param query the proposed allocation query
     */
    propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void
    /**
     * Initializes `upload` with the information required for upload.
     * @param in_caps input #GstCaps
     * @param out_caps output #GstCaps
     */
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean
    set_context(context: GLContext): void
    transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLUpload

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstGLUpload is an object that uploads data from system memory into GL textures.
 * 
 * A #GstGLUpload can be created with gst_gl_upload_new()
 * @class 
 */
class GLUpload extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLUpload

    static name: string
    static $gtype: GObject.GType<GLUpload>

    // Constructors of GstGL-1.0.GstGL.GLUpload

    constructor(config?: GLUpload_ConstructProps) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLUpload
    _init(config?: GLUpload_ConstructProps): void
    static get_input_template_caps(): Gst.Caps
}

interface GLViewConvert_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstGL-1.0.GstGL.GLViewConvert

    downmix_mode?: GLStereoDownmix | null
    input_flags_override?: GstVideo.VideoMultiviewFlags | null
    input_mode_override?: GstVideo.VideoMultiviewMode | null
    output_flags_override?: GstVideo.VideoMultiviewFlags | null
    output_mode_override?: GstVideo.VideoMultiviewMode | null
}

interface GLViewConvert {

    // Own fields of GstGL-1.0.GstGL.GLViewConvert

    object: Gst.Object
    context: GLContext
    shader: GLShader
    input_mode_override: GstVideo.VideoMultiviewMode
    input_flags_override: GstVideo.VideoMultiviewFlags
    output_mode_override: GstVideo.VideoMultiviewMode
    output_flags_override: GstVideo.VideoMultiviewFlags
    downmix_mode: GLStereoDownmix
    in_info: GstVideo.VideoInfo
    out_info: GstVideo.VideoInfo
    from_texture_target: GLTextureTarget
    to_texture_target: GLTextureTarget
    caps_passthrough: boolean
    initted: boolean
    reconfigure: boolean
    fbo: GLFramebuffer

    // Owm methods of GstGL-1.0.GstGL.GLViewConvert

    /**
     * Provides an implementation of #GstBaseTransformClass.fixate_caps()
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps of `direction`
     * @param othercaps the #GstCaps to fixate
     */
    fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    /**
     * Retrieve the processed output buffer placing the output in `outbuf_ptr`.
     */
    get_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf_ptr */ Gst.Buffer ]
    /**
     * Converts the data contained by `inbuf` using the formats specified by the
     * #GstCaps passed to gst_gl_view_convert_set_caps()
     * @param inbuf the #GstGLMemory filled #GstBuffer to convert
     */
    perform(inbuf: Gst.Buffer): Gst.Buffer
    /**
     * Reset `viewconvert` to the default state.  Further operation will require
     * setting the caps with gst_gl_view_convert_set_caps().
     */
    reset(): void
    /**
     * Initializes `viewconvert` with the information required for conversion.
     * @param in_caps input #GstCaps
     * @param out_caps output #GstCaps
     */
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean
    /**
     * Set `context` on `viewconvert`
     * @param context the #GstGLContext to set
     */
    set_context(context: GLContext): void
    /**
     * Submit `input` to be processed by `viewconvert`
     * @param is_discont true if we have a discontinuity
     * @param input a #GstBuffer
     */
    submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    /**
     * Provides an implementation of #GstBaseTransformClass.transform_caps()
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps to transform
     * @param filter a set of filter #GstCaps
     */
    transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGL-1.0.GstGL.GLViewConvert

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Convert stereoscopic/multiview video using fragment shaders.
 * @class 
 */
class GLViewConvert extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLViewConvert

    static name: string
    static $gtype: GObject.GType<GLViewConvert>

    // Constructors of GstGL-1.0.GstGL.GLViewConvert

    constructor(config?: GLViewConvert_ConstructProps) 
    constructor() 
    static new(): GLViewConvert
    _init(config?: GLViewConvert_ConstructProps): void
}

interface GLWindow_ConstructProps extends Gst.Object_ConstructProps {
}

/**
 * Signal callback interface for `key-event`
 */
interface GLWindow_KeyEventSignalCallback {
    ($obj: GLWindow, id: string, key: string): void
}

/**
 * Signal callback interface for `mouse-event`
 */
interface GLWindow_MouseEventSignalCallback {
    ($obj: GLWindow, id: string, button: number, x: number, y: number): void
}

/**
 * Signal callback interface for `scroll-event`
 */
interface GLWindow_ScrollEventSignalCallback {
    ($obj: GLWindow, x: number, y: number, delta_x: number, delta_y: number): void
}

/**
 * Signal callback interface for `window-handle-changed`
 */
interface GLWindow_WindowHandleChangedSignalCallback {
    ($obj: GLWindow): void
}

interface GLWindow {

    // Owm methods of GstGL-1.0.GstGL.GLWindow

    /**
     * Checks if `window` controls the GL viewport.
     */
    controls_viewport(): boolean
    /**
     * Redraw the window contents.  Implementations should invoke the draw callback.
     */
    draw(): void
    get_context(): GLContext
    get_display(): number
    get_surface_dimensions(): [ /* width */ number, /* height */ number ]
    get_window_handle(): number
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @param handle_events a #gboolean indicating if events should be handled or not.
     */
    handle_events(handle_events: boolean): void
    /**
     * Query whether `window` has output surface or not
     */
    has_output_surface(): boolean
    /**
     * Queue resizing of `window`.
     */
    queue_resize(): void
    /**
     * Quit the runloop's execution.
     */
    quit(): void
    /**
     * Resize `window` to the given `width` and `height`.
     * @param width new width
     * @param height new height
     */
    resize(width: number, height: number): void
    /**
     * Start the execution of the runloop.
     */
    run(): void
    send_key_event(event_type: string, key_str: string): void
    /**
     * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
     * have executed when this function returns.
     * @param callback function to invoke
     */
    send_message(callback: GLWindowCB): void
    /**
     * Invoke `callback` with `data` on the window thread.  The callback may not
     * have been executed when this function returns.
     * @param callback function to invoke
     */
    send_message_async(callback: GLWindowCB): void
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void
    /**
     * Notify a `window` about a scroll event. A scroll signal holding the event
     * coordinates will be emitted.
     * @param posx x position of the mouse cursor
     * @param posy y position of the mouse cursor
     * @param delta_x the x offset of the scroll event
     * @param delta_y the y offset of the scroll event
     */
    send_scroll_event(posx: number, posy: number, delta_x: number, delta_y: number): void
    /**
     * Sets the callback called when the window is about to close.
     * @param callback function to invoke
     */
    set_close_callback(callback: GLWindowCB): void
    /**
     * Sets the draw callback called every time gst_gl_window_draw() is called
     * @param callback function to invoke
     */
    set_draw_callback(callback: GLWindowCB): void
    /**
     * Set the preferred width and height of the window.  Implementations are free
     * to ignore this information.
     * @param width new preferred width
     * @param height new preferred height
     */
    set_preferred_size(width: number, height: number): void
    /**
     * Tell a `window` that it should render into a specific region of the window
     * according to the #GstVideoOverlay interface.
     * @param x x position
     * @param y y position
     * @param width width
     * @param height height
     */
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    /**
     * Sets the resize callback called every time a resize of the window occurs.
     * @param callback function to invoke
     */
    set_resize_callback(callback: GLWindowResizeCB): void
    /**
     * Sets the window that this `window` should render into.  Some implementations
     * require this to be called with a valid handle before drawing can commence.
     * @param handle handle to the window
     */
    set_window_handle(handle: number): void
    /**
     * Present the window to the screen.
     */
    show(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstGL-1.0.GstGL.GLWindow

    vfunc_close(): void
    /**
     * Checks if `window` controls the GL viewport.
     * @virtual 
     */
    vfunc_controls_viewport(): boolean
    /**
     * Redraw the window contents.  Implementations should invoke the draw callback.
     * @virtual 
     */
    vfunc_draw(): void
    vfunc_get_display(): number
    vfunc_get_window_handle(): number
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @virtual 
     * @param handle_events a #gboolean indicating if events should be handled or not.
     */
    vfunc_handle_events(handle_events: boolean): void
    /**
     * Query whether `window` has output surface or not
     * @virtual 
     */
    vfunc_has_output_surface(): boolean
    vfunc_open(): boolean
    /**
     * Queue resizing of `window`.
     * @virtual 
     */
    vfunc_queue_resize(): void
    /**
     * Quit the runloop's execution.
     * @virtual 
     */
    vfunc_quit(): void
    /**
     * Start the execution of the runloop.
     * @virtual 
     */
    vfunc_run(): void
    /**
     * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
     * have executed when this function returns.
     * @virtual 
     * @param callback function to invoke
     */
    vfunc_send_message(callback: GLWindowCB): void
    /**
     * Invoke `callback` with `data` on the window thread.  The callback may not
     * have been executed when this function returns.
     * @virtual 
     * @param callback function to invoke
     */
    vfunc_send_message_async(callback: GLWindowCB): void
    /**
     * Set the preferred width and height of the window.  Implementations are free
     * to ignore this information.
     * @virtual 
     * @param width new preferred width
     * @param height new preferred height
     */
    vfunc_set_preferred_size(width: number, height: number): void
    /**
     * Tell a `window` that it should render into a specific region of the window
     * according to the #GstVideoOverlay interface.
     * @virtual 
     * @param x x position
     * @param y y position
     * @param width width
     * @param height height
     */
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    /**
     * Sets the window that this `window` should render into.  Some implementations
     * require this to be called with a valid handle before drawing can commence.
     * @virtual 
     * @param handle handle to the window
     */
    vfunc_set_window_handle(handle: number): void
    /**
     * Present the window to the screen.
     * @virtual 
     */
    vfunc_show(): void

    // Own signals of GstGL-1.0.GstGL.GLWindow

    connect(sigName: "key-event", callback: GLWindow_KeyEventSignalCallback): number
    connect_after(sigName: "key-event", callback: GLWindow_KeyEventSignalCallback): number
    emit(sigName: "key-event", id: string, key: string, ...args: any[]): void
    connect(sigName: "mouse-event", callback: GLWindow_MouseEventSignalCallback): number
    connect_after(sigName: "mouse-event", callback: GLWindow_MouseEventSignalCallback): number
    emit(sigName: "mouse-event", id: string, button: number, x: number, y: number, ...args: any[]): void
    connect(sigName: "scroll-event", callback: GLWindow_ScrollEventSignalCallback): number
    connect_after(sigName: "scroll-event", callback: GLWindow_ScrollEventSignalCallback): number
    emit(sigName: "scroll-event", x: number, y: number, delta_x: number, delta_y: number, ...args: any[]): void
    connect(sigName: "window-handle-changed", callback: GLWindow_WindowHandleChangedSignalCallback): number
    connect_after(sigName: "window-handle-changed", callback: GLWindow_WindowHandleChangedSignalCallback): number
    emit(sigName: "window-handle-changed", ...args: any[]): void

    // Class property signals of GstGL-1.0.GstGL.GLWindow

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GstGLWindow represents a window that elements can render into.  A window can
 * either be a user visible window (onscreen) or hidden (offscreen).
 * @class 
 */
class GLWindow extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLWindow

    static name: string
    static $gtype: GObject.GType<GLWindow>

    // Constructors of GstGL-1.0.GstGL.GLWindow

    constructor(config?: GLWindow_ConstructProps) 
    constructor(display: GLDisplay) 
    static new(display: GLDisplay): GLWindow
    _init(config?: GLWindow_ConstructProps): void
}

interface GLAllocationParams {

    // Own fields of GstGL-1.0.GstGL.GLAllocationParams

    /**
     * the size of the struct (including and subclass data)
     * @field 
     */
    struct_size: number
    /**
     * a #GstGLAllocationParamsCopyFunc
     * @field 
     */
    copy: GLAllocationParamsCopyFunc
    /**
     * a #GstGLAllocationParamsFreeFunc
     * @field 
     */
    free: GLAllocationParamsFreeFunc
    /**
     * allocation flags
     * @field 
     */
    alloc_flags: number
    /**
     * the allocation size
     * @field 
     */
    alloc_size: number
    /**
     * the #GstAllocationParams
     * @field 
     */
    alloc_params: Gst.AllocationParams
    /**
     * a #GstGLContext
     * @field 
     */
    context: GLContext
    /**
     * a #GDestroyNotify
     * @field 
     */
    notify: GLib.DestroyNotify
    /**
     * argument to call `notify` with
     * @field 
     */
    user_data: object
    /**
     * the wrapped data pointer
     * @field 
     */
    wrapped_data: object
    /**
     * the wrapped OpenGL handle
     * @field 
     */
    gl_handle: object

    // Owm methods of GstGL-1.0.GstGL.GLAllocationParams

    /**
     * Copies the dynamically allocated data from `src` to `dest`.  Direct subclasses
     * should call this function in their own overridden copy function.
     * @param dest the destination #GstGLAllocationParams
     */
    copy_data(dest: GLAllocationParams): void
    /**
     * Frees the dynamically allocated data in `params`.  Direct subclasses
     * should call this function in their own overridden free function.
     */
    free_data(): void
}

class GLAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLAllocationParams

    static name: string
}

interface GLAsyncDebug {

    // Owm methods of GstGL-1.0.GstGL.GLAsyncDebug

    /**
     * Frees `ad`
     */
    free(): void
    /**
     * freeze the debug output.  While frozen, any call to
     * gst_gl_async_debug_output_log_msg() will not output any messages but
     * subsequent calls to gst_gl_async_debug_store_log_msg() will overwrite previous
     * messages.
     */
    freeze(): void
    /**
     * Initialize `ad`.  Intended for use with #GstGLAsyncDebug's that are embedded
     * in other structs.
     */
    init(): void
    /**
     * Outputs a previously stored debug message.
     */
    output_log_msg(): void
    /**
     * unfreeze the debug output.  See gst_gl_async_debug_freeze() for what freezing means
     */
    thaw(): void
    /**
     * Unset any dynamically allocated data.  Intended for use with
     * #GstGLAsyncDebug's that are embedded in other structs.
     */
    unset(): void
}

/**
 * #GstGLAsyncDebug an opaque structure and should only be accessed through the
 * provided API.
 * @record 
 */
class GLAsyncDebug {

    // Own properties of GstGL-1.0.GstGL.GLAsyncDebug

    static name: string
}

interface GLBaseFilterClass {

    // Own fields of GstGL-1.0.GstGL.GLBaseFilterClass

    parent_class: GstBase.BaseTransformClass
    /**
     * the logical-OR of #GstGLAPI's supported by this element
     * @field 
     */
    supported_gl_api: GLAPI
    gl_start: (filter: GLBaseFilter) => boolean
    gl_stop: (filter: GLBaseFilter) => void
    gl_set_caps: (filter: GLBaseFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
}

/**
 * The base class for GStreamer GL Filter.
 * @record 
 */
abstract class GLBaseFilterClass {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilterClass

    static name: string
}

interface GLBaseFilterPrivate {
}

class GLBaseFilterPrivate {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilterPrivate

    static name: string
}

interface GLBaseMemory {

    // Own fields of GstGL-1.0.GstGL.GLBaseMemory

    /**
     * the parent object
     * @field 
     */
    mem: Gst.Memory
    /**
     * the #GstGLContext to use for GL operations
     * @field 
     */
    context: GLContext
    lock: GLib.Mutex
    map_flags: Gst.MapFlags
    map_count: number
    gl_map_count: number
    data: object
    query: GLQuery

    // Owm methods of GstGL-1.0.GstGL.GLBaseMemory

    /**
     * Note: only intended for subclass usage to allocate the system memory buffer
     * on demand.  If there is already a non-NULL data pointer in `gl_mem->`data,
     * then this function imply returns TRUE.
     */
    alloc_data(): boolean
    /**
     * Initializes `mem` with the required parameters
     * @param allocator the #GstAllocator to initialize with
     * @param parent the parent #GstMemory to initialize with
     * @param context the #GstGLContext to initialize with
     * @param params the `GstAllocationParams` to initialize with
     * @param size the number of bytes to be allocated
     * @param user_data user data to call `notify` with
     * @param notify a #GDestroyNotify
     */
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: number, user_data: object | null, notify: GLib.DestroyNotify | null): void
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean
}

/**
 * GstGLBaseMemory is a #GstMemory subclass providing the basis of support
 * for the mapping of GL buffers.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * @record 
 */
class GLBaseMemory {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemory

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBaseMemory

    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
    /**
     * Initializes the GL Base Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLBaseMemory operation.
     */
    static init_once(): void
}

interface GLBaseMemoryAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLBaseMemoryAllocatorClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gst.AllocatorClass
    /**
     * a #GstGLBaseMemoryAllocatorAllocFunction
     * @field 
     */
    alloc: GLBaseMemoryAllocatorAllocFunction
    /**
     * a #GstGLBaseMemoryAllocatorCreateFunction
     * @field 
     */
    create: GLBaseMemoryAllocatorCreateFunction
    /**
     * a #GstGLBaseMemoryAllocatorMapFunction
     * @field 
     */
    map: GLBaseMemoryAllocatorMapFunction
    /**
     * a #GstGLBaseMemoryAllocatorUnmapFunction
     * @field 
     */
    unmap: GLBaseMemoryAllocatorUnmapFunction
    /**
     * a #GstGLBaseMemoryAllocatorCopyFunction
     * @field 
     */
    copy: GLBaseMemoryAllocatorCopyFunction
    /**
     * a #GstGLBaseMemoryAllocatorDestroyFunction
     * @field 
     */
    destroy: GLBaseMemoryAllocatorDestroyFunction
}

abstract class GLBaseMemoryAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemoryAllocatorClass

    static name: string
}

interface GLBaseSrcClass {

    // Own fields of GstGL-1.0.GstGL.GLBaseSrcClass

    parent_class: GstBase.PushSrcClass
    /**
     * the logical-OR of #GstGLAPI's supported by this element
     * @field 
     */
    supported_gl_api: GLAPI
    gl_start: (src: GLBaseSrc) => boolean
    gl_stop: (src: GLBaseSrc) => void
    fill_gl_memory: (src: GLBaseSrc, mem: GLMemory) => boolean
}

/**
 * The base class for GStreamer GL Video sources.
 * @record 
 */
abstract class GLBaseSrcClass {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrcClass

    static name: string
}

interface GLBaseSrcPrivate {
}

class GLBaseSrcPrivate {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrcPrivate

    static name: string
}

interface GLBuffer {

    // Own fields of GstGL-1.0.GstGL.GLBuffer

    /**
     * the parent object
     * @field 
     */
    mem: GLBaseMemory
    /**
     * the buffer id for this memory
     * @field 
     */
    id: number
    /**
     * the OpenGL target of this texture for binding purposes
     * @field 
     */
    target: number
    /**
     * the OpenGL usage hints this buffer was created with
     * @field 
     */
    usage_hints: number
}

/**
 * GstGLBuffer is a #GstMemory subclass providing support for the mapping of
 * GL buffers.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * @record 
 */
class GLBuffer {

    // Own properties of GstGL-1.0.GstGL.GLBuffer

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBuffer

    /**
     * Initializes the GL Buffer allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstGLBuffer operation.
     */
    static init_once(): void
}

interface GLBufferAllocationParams {

    // Own fields of GstGL-1.0.GstGL.GLBufferAllocationParams

    /**
     * parent object
     * @field 
     */
    parent: GLAllocationParams
    /**
     * the OpenGL target to bind the buffer to
     * @field 
     */
    gl_target: number
    /**
     * the OpenGL usage hint to create the buffer with
     * @field 
     */
    gl_usage: number
}

class GLBufferAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocationParams

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBufferAllocationParams

    constructor(context: GLContext, alloc_size: number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number) 
    static new(context: GLContext, alloc_size: number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number): GLBufferAllocationParams
}

interface GLBufferAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLBufferAllocatorClass

    parent_class: GLBaseMemoryAllocatorClass
}

/**
 * The #GstGLBufferAllocatorClass only contains private data
 * @record 
 */
abstract class GLBufferAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocatorClass

    static name: string
}

interface GLBufferPoolClass {

    // Own fields of GstGL-1.0.GstGL.GLBufferPoolClass

    parent_class: Gst.BufferPoolClass
}

/**
 * The #GstGLBufferPoolClass structure contains only private data
 * @record 
 */
abstract class GLBufferPoolClass {

    // Own properties of GstGL-1.0.GstGL.GLBufferPoolClass

    static name: string
}

interface GLBufferPoolPrivate {
}

class GLBufferPoolPrivate {

    // Own properties of GstGL-1.0.GstGL.GLBufferPoolPrivate

    static name: string
}

interface GLColorConvertClass {
}

/**
 * The #GstGLColorConvertClass struct only contains private data
 * @record 
 */
abstract class GLColorConvertClass {

    // Own properties of GstGL-1.0.GstGL.GLColorConvertClass

    static name: string
}

interface GLColorConvertPrivate {
}

class GLColorConvertPrivate {

    // Own properties of GstGL-1.0.GstGL.GLColorConvertPrivate

    static name: string
}

interface GLContextClass {

    // Own fields of GstGL-1.0.GstGL.GLContextClass

    parent_class: Gst.ObjectClass
    get_current_context: () => number
    get_gl_context: (context: GLContext) => number
    get_gl_api: (context: GLContext) => GLAPI
    get_gl_platform: (context: GLContext) => GLPlatform
    get_proc_address: (gl_api: GLAPI, name: string) => object
    activate: (context: GLContext, activate: boolean) => boolean
    choose_format: (context: GLContext) => boolean
    create_context: (context: GLContext, gl_api: GLAPI, other_context: GLContext) => boolean
    destroy_context: (context: GLContext) => void
    swap_buffers: (context: GLContext) => void
    check_feature: (context: GLContext, feature: string) => boolean
    get_gl_platform_version: (context: GLContext) => [ /* major */ number, /* minor */ number ]
    get_config: (context: GLContext) => Gst.Structure | null
    request_config: (context: GLContext, gl_config: Gst.Structure | null) => boolean
}

abstract class GLContextClass {

    // Own properties of GstGL-1.0.GstGL.GLContextClass

    static name: string
}

interface GLContextPrivate {
}

class GLContextPrivate {

    // Own properties of GstGL-1.0.GstGL.GLContextPrivate

    static name: string
}

interface GLDisplayClass {

    // Own fields of GstGL-1.0.GstGL.GLDisplayClass

    object_class: Gst.ObjectClass
    get_handle: (display: GLDisplay) => number
    create_window: (display: GLDisplay) => GLWindow
}

abstract class GLDisplayClass {

    // Own properties of GstGL-1.0.GstGL.GLDisplayClass

    static name: string
}

interface GLDisplayPrivate {
}

class GLDisplayPrivate {

    // Own properties of GstGL-1.0.GstGL.GLDisplayPrivate

    static name: string
}

interface GLFilterClass {

    // Own fields of GstGL-1.0.GstGL.GLFilterClass

    parent_class: GLBaseFilterClass
    set_caps: (filter: GLFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    filter: (filter: GLFilter, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    filter_texture: (filter: GLFilter, input: GLMemory, output: GLMemory) => boolean
    init_fbo: (filter: GLFilter) => boolean
    transform_internal_caps: (filter: GLFilter, direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps) => Gst.Caps
}

abstract class GLFilterClass {

    // Own properties of GstGL-1.0.GstGL.GLFilterClass

    static name: string
}

interface GLFramebufferClass {
}

/**
 * Opaque #GstGLFramebufferClass struct
 * @record 
 */
abstract class GLFramebufferClass {

    // Own properties of GstGL-1.0.GstGL.GLFramebufferClass

    static name: string
}

interface GLFramebufferPrivate {
}

class GLFramebufferPrivate {

    // Own properties of GstGL-1.0.GstGL.GLFramebufferPrivate

    static name: string
}

interface GLFuncs {
}

/**
 * Structure containing function pointers to OpenGL functions.
 * 
 * Each field is named exactly the same as the OpenGL function without the
 * `gl` prefix.
 * @record 
 */
class GLFuncs {

    // Own properties of GstGL-1.0.GstGL.GLFuncs

    static name: string
}

interface GLMemory {

    // Own fields of GstGL-1.0.GstGL.GLMemory

    /**
     * the parent #GstGLBaseMemory object
     * @field 
     */
    mem: GLBaseMemory
    /**
     * the GL texture id for this memory
     * @field 
     */
    tex_id: number
    /**
     * the GL texture target for this memory
     * @field 
     */
    tex_target: GLTextureTarget
    /**
     * the texture type
     * @field 
     */
    tex_format: GLFormat
    /**
     * the texture's #GstVideoInfo
     * @field 
     */
    info: GstVideo.VideoInfo
    /**
     * data alignment for system memory mapping
     * @field 
     */
    valign: GstVideo.VideoAlignment
    /**
     * data plane in `info`
     * @field 
     */
    plane: number
    /**
     * GL shader scaling parameters for `valign` and/or width/height
     * @field 
     */
    tex_scaling: number[]
    texture_wrapped: boolean
    unpack_length: number
    tex_width: number

    // Owm methods of GstGL-1.0.GstGL.GLMemory

    /**
     * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
     * is specified by `tex_format,` `width` and `height`.
     * @param tex_id OpenGL texture id
     * @param target the #GstGLTextureTarget
     * @param tex_format the #GstGLFormat
     * @param width width of `tex_id`
     * @param height height of `tex_id`
     */
    copy_into(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number): boolean
    /**
     * Copies the texture in #GstGLMemory into the texture specified by `tex_id,`
     * `out_target,` `out_tex_format,` `out_width` and `out_height`.
     * @param tex_id the destination texture id
     * @param out_target the destination #GstGLTextureTarget
     * @param out_tex_format the destination #GstGLFormat
     * @param out_width the destination width
     * @param out_height the destination height
     */
    copy_teximage(tex_id: number, out_target: GLTextureTarget, out_tex_format: GLFormat, out_width: number, out_height: number): boolean
    get_texture_format(): GLFormat
    get_texture_height(): number
    get_texture_id(): number
    get_texture_target(): GLTextureTarget
    get_texture_width(): number
    /**
     * Initializes `mem` with the required parameters.  `info` is assumed to have
     * already have been modified with gst_video_info_align().
     * @param allocator the #GstAllocator to initialize with
     * @param parent the parent #GstMemory to initialize with
     * @param context the #GstGLContext to initialize with
     * @param target the #GstGLTextureTarget for this #GstGLMemory
     * @param tex_format the #GstGLFormat for this #GstGLMemory
     * @param params the `GstAllocationParams` to initialize with
     * @param info the #GstVideoInfo for this #GstGLMemory
     * @param plane the plane number (starting from 0) for this #GstGLMemory
     * @param valign optional #GstVideoAlignment parameters
     * @param user_data user data to call `notify` with
     * @param notify a #GDestroyNotify
     */
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, tex_format: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, user_data: object | null, notify: GLib.DestroyNotify | null): void
    /**
     * Reads the texture in #GstGLMemory into `write_pointer` if no buffer is bound
     * to `GL_PIXEL_PACK_BUFFER`.  Otherwise `write_pointer` is the byte offset into
     * the currently bound `GL_PIXEL_PACK_BUFFER` buffer to store the result of
     * glReadPixels.  See the OpenGL specification for glReadPixels for more
     * details.
     * @param write_pointer the data pointer to pass to glReadPixels
     */
    read_pixels(write_pointer: object | null): boolean
    /**
     * Reads the texture in `read_pointer` into `gl_mem`.
     * 
     * See gst_gl_memory_read_pixels() for what `read_pointer` signifies.
     * @param read_pointer the data pointer to pass to glTexSubImage
     */
    texsubimage(read_pointer: object | null): void
}

/**
 * GstGLMemory is a #GstGLBaseMemory subclass providing support for the mapping of
 * OpenGL textures.
 * 
 * #GstGLMemory is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLVideoAllocationParams.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * 
 * The #GstCaps that is used for #GstGLMemory based buffers should contain
 * the %GST_CAPS_FEATURE_MEMORY_GL_MEMORY as a #GstCapsFeatures and should
 * contain a 'texture-target' field with one of the #GstGLTextureTarget values
 * as a string, i.e. some combination of 'texture-target=(string){2D,
 * rectangle, external-oes}'.
 * @record 
 */
class GLMemory {

    // Own properties of GstGL-1.0.GstGL.GLMemory

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLMemory

    /**
     * Initializes the GL Base Texture allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemory operation.
     */
    static init_once(): void
}

interface GLMemoryAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLMemoryAllocatorClass

    /**
     * provide a custom map implementation
     * @field 
     */
    map: GLBaseMemoryAllocatorMapFunction
    /**
     * provide a custom copy implementation
     * @field 
     */
    copy: GLBaseMemoryAllocatorCopyFunction
    /**
     * provide a custom unmap implementation
     * @field 
     */
    unmap: GLBaseMemoryAllocatorUnmapFunction
}

abstract class GLMemoryAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLMemoryAllocatorClass

    static name: string
}

interface GLMemoryPBO {

    // Owm methods of GstGL-1.0.GstGL.GLMemoryPBO

    /**
     * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
     * is specified by `tex_format,` `width` and `height`.
     * 
     * If `respecify` is %TRUE, then the copy is performed in terms of the texture
     * data.  This is useful for splitting RGBA textures into RG or R textures or
     * vice versa. The requirement for this to succeed is that the backing texture
     * data must be the same size, i.e. say a RGBA8 texture is converted into a RG8
     * texture, then the RG texture must have twice as many pixels available for
     * output as the RGBA texture.
     * 
     * Otherwise, if `respecify` is %FALSE, then the copy is performed per texel
     * using glCopyTexImage.  See the OpenGL specification for details on the
     * mappings between texture formats.
     * @param tex_id the destination texture id
     * @param target the destination #GstGLTextureTarget
     * @param tex_format the destination #GstGLFormat
     * @param width width of `tex_id`
     * @param height height of `tex_id`
     * @param stride stride of the backing texture data
     * @param respecify whether to copy the data or copy per texel
     */
    copy_into_texture(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean
    /**
     * Transfer the texture data from the texture into the PBO if necessary.
     */
    download_transfer(): void
    /**
     * Transfer the texture data from the PBO into the texture if necessary.
     */
    upload_transfer(): void
}

/**
 * #GstGLMemoryPBO is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLVideoAllocationParams.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * @record 
 */
class GLMemoryPBO {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBO

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLMemoryPBO

    static init_once(): void
}

interface GLMemoryPBOAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLMemoryPBOAllocatorClass

    parent_class: GLMemoryAllocatorClass
}

/**
 * Only contains private data
 * @record 
 */
abstract class GLMemoryPBOAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBOAllocatorClass

    static name: string
}

interface GLOverlayCompositorClass {

    // Own fields of GstGL-1.0.GstGL.GLOverlayCompositorClass

    object_class: Gst.ObjectClass
}

abstract class GLOverlayCompositorClass {

    // Own properties of GstGL-1.0.GstGL.GLOverlayCompositorClass

    static name: string
}

interface GLQuery {

    // Owm methods of GstGL-1.0.GstGL.GLQuery

    /**
     * Record the result of a counter
     */
    counter(): void
    /**
     * End counting the query
     */
    end(): void
    /**
     * Frees a #GstGLQuery
     */
    free(): void
    init(context: GLContext, query_type: GLQueryType): void
    result(): number
    /**
     * Start counting the query
     */
    start(): void
    /**
     * Free any dynamically allocated resources
     */
    unset(): void
}

/**
 * A #GstGLQuery represents and holds an OpenGL query object.  Various types of
 * queries can be run or counters retrieved.
 * @record 
 */
class GLQuery {

    // Own properties of GstGL-1.0.GstGL.GLQuery

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLQuery

    /**
     * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
     * #GstPads in `element` of `direction` for the local OpenGL context used by
     * GStreamer elements.
     * @param element a #GstElement to query from
     * @param direction the #GstPadDirection to query
     * @param context_ptr location containing the current and/or resulting                      #GstGLContext
     */
    static local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [ /* returnType */ boolean, /* context_ptr */ GLContext ]
}

interface GLRenderbuffer {

    // Own fields of GstGL-1.0.GstGL.GLRenderbuffer

    /**
     * the GL texture id for this memory
     * @field 
     */
    renderbuffer_id: number
    /**
     * the texture type
     * @field 
     */
    renderbuffer_format: GLFormat
    /**
     * the width
     * @field 
     */
    width: number
    /**
     * the height
     * @field 
     */
    height: number
    renderbuffer_wrapped: boolean

    // Owm methods of GstGL-1.0.GstGL.GLRenderbuffer

    get_format(): GLFormat
    get_height(): number
    get_id(): number
    get_width(): number
}

/**
 * GstGLRenderbuffer is a #GstGLBaseMemory subclass providing support for
 * OpenGL renderbuffers.
 * 
 * #GstGLRenderbuffer is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLRenderbufferAllocationParams.
 * @record 
 */
class GLRenderbuffer {

    // Own properties of GstGL-1.0.GstGL.GLRenderbuffer

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLRenderbuffer

    /**
     * Initializes the GL Base Texture allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLRenderbuffer operation.
     */
    static init_once(): void
}

interface GLRenderbufferAllocationParams {

    // Own fields of GstGL-1.0.GstGL.GLRenderbufferAllocationParams

    /**
     * the #GstGLFormat
     * @field 
     */
    renderbuffer_format: GLFormat
    /**
     * the width
     * @field 
     */
    width: number
    /**
     * the height
     * @field 
     */
    height: number
}

/**
 * Allocation parameters
 * @record 
 */
class GLRenderbufferAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocationParams

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLRenderbufferAllocationParams

    constructor(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number) 
    static new(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    static new_wrapped(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number, gl_handle: object | null, user_data: object | null, notify: GLib.DestroyNotify | null): GLRenderbufferAllocationParams
}

interface GLRenderbufferAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLRenderbufferAllocatorClass

    parent_class: GLBaseMemoryAllocatorClass
}

/**
 * The #GstGLRenderbufferAllocatorClass only contains private data
 * @record 
 */
abstract class GLRenderbufferAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocatorClass

    static name: string
}

interface GLSLStageClass {
}

/**
 * Opaque #GstGLSLStageClass struct
 * @record 
 */
abstract class GLSLStageClass {

    // Own properties of GstGL-1.0.GstGL.GLSLStageClass

    static name: string
}

interface GLSLStagePrivate {
}

class GLSLStagePrivate {

    // Own properties of GstGL-1.0.GstGL.GLSLStagePrivate

    static name: string
}

interface GLShaderClass {
}

abstract class GLShaderClass {

    // Own properties of GstGL-1.0.GstGL.GLShaderClass

    static name: string
}

interface GLShaderPrivate {
}

class GLShaderPrivate {

    // Own properties of GstGL-1.0.GstGL.GLShaderPrivate

    static name: string
}

interface GLSyncMeta {

    // Own fields of GstGL-1.0.GstGL.GLSyncMeta

    /**
     * the parent #GstMeta
     * @field 
     */
    parent: Gst.Meta
    /**
     * the #GstGLContext used to allocate the meta
     * @field 
     */
    context: GLContext
    /**
     * a custom data pointer for the implementation
     * @field 
     */
    data: object
    set_sync: (sync: GLSyncMeta, context: GLContext) => void
    set_sync_gl: (sync: GLSyncMeta, context: GLContext) => void
    wait: (sync: GLSyncMeta, context: GLContext) => void
    wait_gl: (sync: GLSyncMeta, context: GLContext) => void
    wait_cpu: (sync: GLSyncMeta, context: GLContext) => void
    wait_cpu_gl: (sync: GLSyncMeta, context: GLContext) => void
    copy: (src: GLSyncMeta, sbuffer: Gst.Buffer, dest: GLSyncMeta, dbuffer: Gst.Buffer) => void
    free: (sync: GLSyncMeta, context: GLContext) => void
    free_gl: (sync: GLSyncMeta, context: GLContext) => void

    // Owm methods of GstGL-1.0.GstGL.GLSyncMeta

    /**
     * Set a sync point to possibly wait on at a later time.
     * @param context a #GstGLContext
     */
    set_sync_point(context: GLContext): void
}

/**
 * #GstGLSyncMeta provides the ability to synchronize the OpenGL command stream
 * with the CPU or with other OpenGL contexts.
 * @record 
 */
class GLSyncMeta {

    // Own properties of GstGL-1.0.GstGL.GLSyncMeta

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLSyncMeta

    static get_info(): Gst.MetaInfo
}

interface GLUploadClass {

    // Own fields of GstGL-1.0.GstGL.GLUploadClass

    object_class: Gst.ObjectClass
}

/**
 * The #GstGLUploadClass struct only contains private data
 * @record 
 */
abstract class GLUploadClass {

    // Own properties of GstGL-1.0.GstGL.GLUploadClass

    static name: string
}

interface GLUploadPrivate {
}

class GLUploadPrivate {

    // Own properties of GstGL-1.0.GstGL.GLUploadPrivate

    static name: string
}

interface GLVideoAllocationParams {

    // Own fields of GstGL-1.0.GstGL.GLVideoAllocationParams

    /**
     * the parent #GstGLAllocationParams structure
     * @field 
     */
    parent: GLAllocationParams
    /**
     * the #GstVideoInfo to allocate
     * @field 
     */
    v_info: GstVideo.VideoInfo
    /**
     * the video plane index to allocate
     * @field 
     */
    plane: number
    /**
     * the #GstVideoAlignment to align the system representation to (may be %NULL for the default)
     * @field 
     */
    valign: GstVideo.VideoAlignment
    /**
     * the #GstGLTextureTarget to allocate
     * @field 
     */
    target: GLTextureTarget
    /**
     * the #GstGLFormat to allocate
     * @field 
     */
    tex_format: GLFormat

    // Owm methods of GstGL-1.0.GstGL.GLVideoAllocationParams

    /**
     * Copy and set any dynamically allocated resources in `dest_vid`.  Intended
     * for subclass usage only to chain up at the end of a subclass copy function.
     * @param dest_vid destination #GstGLVideoAllocationParams to copy into
     */
    copy_data(dest_vid: GLVideoAllocationParams): void
    /**
     * Unset and free any dynamically allocated resources.  Intended for subclass
     * usage only to chain up at the end of a subclass free function.
     */
    free_data(): void
}

class GLVideoAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLVideoAllocationParams

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLVideoAllocationParams

    constructor(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat) 
    static new(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat): GLVideoAllocationParams
    static new_wrapped_data(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, wrapped_data: object | null, user_data: object | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams
    /**
     * `gl_handle` is defined by the specific OpenGL handle being wrapped
     * For #GstGLMemory and #GstGLMemoryPBO it is an OpenGL texture id.
     * Other memory types may define it to require a different type of parameter.
     * @constructor 
     * @param context a #GstGLContext
     * @param alloc_params the #GstAllocationParams for `tex_id`
     * @param v_info the #GstVideoInfo for `tex_id`
     * @param plane the video plane `tex_id` represents
     * @param valign any #GstVideoAlignment applied to symem mappings of `tex_id`
     * @param target the #GstGLTextureTarget for `tex_id`
     * @param tex_format the #GstGLFormat for `tex_id`
     * @param gl_handle the GL handle to wrap
     * @param user_data user data to call `notify` with
     * @param notify a #GDestroyNotify
     */
    static new_wrapped_gl_handle(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, gl_handle: object | null, user_data: object | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams
    static new_wrapped_texture(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, tex_id: number, user_data: object | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams
}

interface GLViewConvertClass {
}

/**
 * Opaque #GstGLViewConvertClass struct
 * @record 
 */
abstract class GLViewConvertClass {

    // Own properties of GstGL-1.0.GstGL.GLViewConvertClass

    static name: string
}

interface GLViewConvertPrivate {
}

class GLViewConvertPrivate {

    // Own properties of GstGL-1.0.GstGL.GLViewConvertPrivate

    static name: string
}

interface GLWindowClass {

    // Own fields of GstGL-1.0.GstGL.GLWindowClass

    /**
     * Parent class
     * @field 
     */
    parent_class: Gst.ObjectClass
    get_display: (window: GLWindow) => number
    set_window_handle: (window: GLWindow, handle: number) => void
    get_window_handle: (window: GLWindow) => number
    draw: (window: GLWindow) => void
    run: (window: GLWindow) => void
    quit: (window: GLWindow) => void
    send_message: (window: GLWindow, callback: GLWindowCB) => void
    send_message_async: (window: GLWindow, callback: GLWindowCB) => void
    open: (window: GLWindow) => boolean
    close: (window: GLWindow) => void
    handle_events: (window: GLWindow, handle_events: boolean) => void
    set_preferred_size: (window: GLWindow, width: number, height: number) => void
    show: (window: GLWindow) => void
    set_render_rectangle: (window: GLWindow, x: number, y: number, width: number, height: number) => boolean
    queue_resize: (window: GLWindow) => void
    controls_viewport: (window: GLWindow) => boolean
    has_output_surface: (window: GLWindow) => boolean
}

abstract class GLWindowClass {

    // Own properties of GstGL-1.0.GstGL.GLWindowClass

    static name: string
}

interface GLWindowPrivate {
}

class GLWindowPrivate {

    // Own properties of GstGL-1.0.GstGL.GLWindowPrivate

    static name: string
}

}
export default GstGL;