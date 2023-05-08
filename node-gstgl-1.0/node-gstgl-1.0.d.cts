
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstGL-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export enum GLBaseMemoryError {
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
export enum GLConfigCaveat {
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
export enum GLContextError {
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
export enum GLFormat {
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
export enum GLQueryType {
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
export enum GLSLError {
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
export enum GLSLVersion {
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
export enum GLStereoDownmix {
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
export enum GLTextureTarget {
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
export enum GLUploadReturn {
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
export enum GLWindowError {
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
export enum GLAPI {
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
export enum GLBaseMemoryTransfer {
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
export enum GLConfigSurfaceType {
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
export enum GLDisplayType {
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
export enum GLPlatform {
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
export enum GLSLProfile {
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
export const BUFFER_POOL_OPTION_GL_SYNC_META: string | null
/**
 * String used for %GST_GL_TEXTURE_TARGET_2D as a #GstBufferPool pool option
 */
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string | null
/**
 * String used for %GST_GL_TEXTURE_TARGET_EXTERNAL_OES as a #GstBufferPool pool option
 */
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string | null
/**
 * String used for %GST_GL_TEXTURE_TARGET_RECTANGLE as a #GstBufferPool pool option
 */
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string | null
/**
 * Name of the caps feature indicating the use of GL buffers
 */
export const CAPS_FEATURE_MEMORY_GL_BUFFER: string | null
/**
 * Name of the caps feature for indicating the use of #GstGLMemory
 */
export const CAPS_FEATURE_MEMORY_GL_MEMORY: string | null
/**
 * GL Allocation flag indicating that the implementation should allocate the
 * necessary resources.
 */
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number
/**
 * GL allocation flag indicating the allocation of a GL buffer.
 */
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number
/**
 * Values >= than #GST_GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER can be used for
 * user-defined purposes.
 */
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number
/**
 * GL allocation flag indicating the allocation of 2D video frames
 */
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number
/**
 * GL Allocation flag for using the provided GPU handle as storage.
 */
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number
/**
 * GL Allocation flag for using the provided system memory data as storage.
 */
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number
/**
 * The name for %GST_GL_API_GLES1 used in various places
 */
export const GL_API_GLES1_NAME: string | null
/**
 * The name for %GST_GL_API_GLES2 used in various places
 */
export const GL_API_GLES2_NAME: string | null
/**
 * The name for %GST_GL_API_OPENGL3 used in various places
 */
export const GL_API_OPENGL3_NAME: string | null
/**
 * The name for %GST_GL_API_OPENGL used in various places
 */
export const GL_API_OPENGL_NAME: string | null
/**
 * The name of the GL buffer allocator
 */
export const GL_BASE_MEMORY_ALLOCATOR_NAME: string | null
/**
 * The name of the GL buffer allocator
 */
export const GL_BUFFER_ALLOCATOR_NAME: string | null
/**
 * The currently supported formats that can be converted
 */
export const GL_COLOR_CONVERT_FORMATS: string | null
/**
 * The currently supported #GstCaps that can be converted
 */
export const GL_COLOR_CONVERT_VIDEO_CAPS: string | null
/**
 * The canonical name of a #GstStructure that contains a configuration for a
 * #GstGLContext.
 */
export const GL_CONFIG_STRUCTURE_NAME: string | null
export const GL_CONTEXT_TYPE_CGL: string | null
export const GL_CONTEXT_TYPE_EAGL: string | null
export const GL_CONTEXT_TYPE_EGL: string | null
export const GL_CONTEXT_TYPE_GLX: string | null
export const GL_CONTEXT_TYPE_WGL: string | null
/**
 * The name used in #GstContext queries for requesting a #GstGLDisplay
 */
export const GL_DISPLAY_CONTEXT_TYPE: string | null
/**
 * The name of the GL memory allocator
 */
export const GL_MEMORY_ALLOCATOR_NAME: string | null
/**
 * The name of the GL Memory PBO allocator
 */
export const GL_MEMORY_PBO_ALLOCATOR_NAME: string | null
/**
 * List of video formats that are supported by #GstGLMemory
 */
export const GL_MEMORY_VIDEO_FORMATS_STR: string | null
/**
 * The name of the GL renderbuffer allocator
 */
export const GL_RENDERBUFFER_ALLOCATOR_NAME: string | null
/**
 * String used for %GST_GL_TEXTURE_TARGET_2D in things like caps values
 */
export const GL_TEXTURE_TARGET_2D_STR: string | null
/**
 * String used for %GST_GL_TEXTURE_TARGET_EXTERNAL_OES in things like caps values
 */
export const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string | null
/**
 * String used for %GST_GL_TEXTURE_TARGET_RECTANGLE in things like caps values
 */
export const GL_TEXTURE_TARGET_RECTANGLE_STR: string | null
/**
 * Flag indicating that we should map the GL object instead of to system memory.
 * 
 * Combining #GST_MAP_GL with #GST_MAP_WRITE has the same semantics as though
 * you are writing to OpenGL. Conversely, combining #GST_MAP_GL with
 * #GST_MAP_READ has the same semantics as though you are reading from OpenGL.
 */
export const MAP_GL: number
export function bufferAddGlSyncMeta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta
export function bufferAddGlSyncMetaFull(context: GLContext, buffer: Gst.Buffer, data: any | null): GLSyncMeta
export function bufferPoolConfigGetGlAllocationParams(config: Gst.Structure): GLAllocationParams | null
/**
 * Sets `params` on `config`
 * @param config a buffer pool config
 * @param params a #GstGLAllocationParams
 */
export function bufferPoolConfigSetGlAllocationParams(config: Gst.Structure, params: GLAllocationParams | null): void
export function contextGetGlDisplay(context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay | null ]
/**
 * Sets `display` on `context`
 * @param context a #GstContext
 * @param display resulting #GstGLDisplay
 */
export function contextSetGlDisplay(context: Gst.Context, display: GLDisplay | null): void
export function glApiFromString(apiS: string | null): GLAPI
export function glApiToString(api: GLAPI): string | null
export function glBaseMemoryAlloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null
export function glBaseMemoryErrorQuark(): GLib.Quark
/**
 * Initializes the GL Base Memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLBaseMemory operation.
 */
export function glBaseMemoryInitOnce(): void
/**
 * Initializes the GL Buffer allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstGLBuffer operation.
 */
export function glBufferInitOnce(): void
export function glCheckExtension(name: string | null, ext: string | null): boolean
export function glConfigCaveatToString(caveat: GLConfigCaveat): string | null
export function glConfigSurfaceTypeToString(surfaceType: GLConfigSurfaceType): string | null
export function glContextErrorQuark(): GLib.Quark
export function glElementPropagateDisplayContext(element: Gst.Element, display: GLDisplay): void
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
 * @param displayPtr the resulting #GstGLDisplay
 * @param otherContextPtr the resulting #GstGLContext
 * @returns whether a #GstGLDisplay exists in @display_ptr
 */
export function glEnsureElementData(element: Gst.Element, displayPtr: GLDisplay, otherContextPtr: GLContext): [ /* returnType */ boolean, /* displayPtr */ GLDisplay, /* otherContextPtr */ GLContext ]
export function glFormatFromVideoInfo(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat
export function glFormatIsSupported(context: GLContext, format: GLFormat): boolean
/**
 * Get the unsized format and type from `format` for usage in glReadPixels,
 * glTex{Sub}Image*, glTexImage* and similar functions.
 * @param format the sized internal #GstGLFormat
 */
export function glFormatTypeFromSizedGlFormat(format: GLFormat): [ /* unsizedFormat */ GLFormat, /* glType */ number ]
export function glFormatTypeNBytes(format: number, type: number): number
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
export function glGetAffineTransformationMetaAsNdc(meta: GstVideo.VideoAffineTransformationMeta | null): /* matrix */ number[]
/**
 * Retrieve the size in bytes of a video plane of data with a certain alignment
 * @param info a #GstVideoInfo
 * @param align a #GstVideoAlignment or %NULL
 * @param plane plane number in `info` to retrieve the data size of
 */
export function glGetPlaneDataSize(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number
export function glGetPlaneStart(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number
export function glHandleContextQuery(element: Gst.Element, query: Gst.Query, display: GLDisplay | null, context: GLContext | null, otherContext: GLContext | null): boolean
/**
 * Helper function for implementing #GstElementClass.set_context() in
 * OpenGL capable elements.
 * 
 * Retrieve's the #GstGLDisplay or #GstGLContext in `context` and places the
 * result in `display` or `other_context` respectively.
 * @param element a #GstElement
 * @param context a #GstContext
 * @returns whether the @display or @other_context could be set successfully
 */
export function glHandleSetContext(element: Gst.Element, context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay, /* otherContext */ GLContext ]
/**
 * Initializes the GL Base Texture allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLMemory operation.
 */
export function glMemoryInitOnce(): void
export function glMemoryPboInitOnce(): void
/**
 * Multiplies two 4x4 matrices, `a` and `b,` and stores the result, a
 * 2-dimensional array of #gfloat, in `result`.
 * @param a a 2-dimensional 4x4 array of #gfloat
 * @param b another 2-dimensional 4x4 array of #gfloat
 */
export function glMultiplyMatrix4(a: number[], b: number[]): /* result */ number[]
export function glPlatformFromString(platformS: string | null): GLPlatform
export function glPlatformToString(platform: GLPlatform): string | null
/**
 * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
 * #GstPads in `element` of `direction` for the local OpenGL context used by
 * GStreamer elements.
 * @param element a #GstElement to query from
 * @param direction the #GstPadDirection to query
 * @param contextPtr location containing the current and/or resulting                      #GstGLContext
 * @returns whether @context_ptr contains a #GstGLContext
 */
export function glQueryLocalGlContext(element: Gst.Element, direction: Gst.PadDirection, contextPtr: GLContext): [ /* returnType */ boolean, /* contextPtr */ GLContext ]
/**
 * Initializes the GL Base Texture allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLRenderbuffer operation.
 */
export function glRenderbufferInitOnce(): void
/**
 * Set the 4x4 affine transformation matrix stored in `meta` from the
 * NDC coordinates in `matrix`.
 * @param meta a #GstVideoAffineTransformationMeta
 * @param matrix a 4x4 matrix
 */
export function glSetAffineTransformationMetaFromNdc(meta: GstVideo.VideoAffineTransformationMeta, matrix: number[]): void
export function glSizedGlFormatFromGlFormatType(context: GLContext, format: number, type: number): number
export function glStereoDownmixModeGetType(): GObject.GType
export function glSyncMetaApiGetType(): GObject.GType
export function glSyncMetaGetInfo(): Gst.MetaInfo
export function glTextureTargetFromGl(target: number): GLTextureTarget
export function glTextureTargetFromString(str: string | null): GLTextureTarget
export function glTextureTargetToBufferPoolOption(target: GLTextureTarget): string | null
export function glTextureTargetToGl(target: GLTextureTarget): number
export function glTextureTargetToString(target: GLTextureTarget): string | null
/**
 * See gst_gl_value_set_texture_target_from_mask() for what entails a mask
 * @param value an initialized #GValue of type G_TYPE_STRING
 * @returns the mask of #GstGLTextureTarget's in @value or     %GST_GL_TEXTURE_TARGET_NONE on failure
 */
export function glValueGetTextureTargetMask(value: any): GLTextureTarget
export function glValueSetTextureTarget(value: any, target: GLTextureTarget): boolean
/**
 * A mask is a bitwise OR of (1 << target) where target is a valid
 * #GstGLTextureTarget
 * @param value an uninitialized #GValue
 * @param targetMask a bitwise mask of #GstGLTextureTarget's
 * @returns whether the @target_mask could be set on @value
 */
export function glValueSetTextureTargetFromMask(value: any, targetMask: GLTextureTarget): boolean
export function glVersionToGlslVersion(glApi: GLAPI, maj: number, min: number): GLSLVersion
export function glWindowErrorQuark(): GLib.Quark
export function glslErrorQuark(): GLib.Quark
export function glslProfileFromString(string: string | null): GLSLProfile
export function glslProfileToString(profile: GLSLProfile): string | null
/**
 * Note: this function first searches the first 1 kilobytes for a `#version`
 * preprocessor directive and then executes gst_glsl_version_profile_from_string().
 * @param s string to search for a valid `#version` string
 * @returns TRUE if a valid `#version` string was found, FALSE otherwise
 */
export function glslStringGetVersionProfile(s: string | null): [ /* returnType */ boolean, /* version */ GLSLVersion, /* profile */ GLSLProfile ]
export function glslVersionFromString(string: string | null): GLSLVersion
/**
 * Note: this function expects either a `#version` GLSL preprocesser directive
 * or a valid GLSL version and/or profile.
 * @param string a valid GLSL `#version` string
 * @returns TRUE if a valid `#version` string was found, FALSE otherwise
 */
export function glslVersionProfileFromString(string: string | null): [ /* returnType */ boolean, /* versionRet */ GLSLVersion, /* profileRet */ GLSLProfile ]
export function glslVersionProfileToString(version: GLSLVersion, profile: GLSLProfile): string | null
export function glslVersionToString(version: GLSLVersion): string | null
export function isGlBaseMemory(mem: Gst.Memory): boolean
export function isGlBuffer(mem: Gst.Memory): boolean
export function isGlMemory(mem: Gst.Memory): boolean
export function isGlMemoryPbo(mem: Gst.Memory): boolean
export function isGlRenderbuffer(mem: Gst.Memory): boolean
/**
 * Copies the parameters from `src` into `dest`.  The subclass must compose copy
 * functions from the superclass.
 * @callback 
 * @param src the source #GstGLAllocationParams to copy from
 * @param dest the source #GstGLAllocationParams to copy
 */
export interface GLAllocationParamsCopyFunc {
    (src: GLAllocationParams, dest: GLAllocationParams): void
}
/**
 * Free any dynamically allocated data.  The subclass must call the superclass'
 * free.
 * @callback 
 * @param params a #GstGLAllocationParams
 */
export interface GLAllocationParamsFreeFunc {
    (params: any | null): void
}
export interface GLAsyncDebugLogGetMessage {
    (): string | null
}
/**
 * Note: not called with a GL context current
 * @callback 
 * @param allocator a #GstGLBaseMemoryAllocator
 * @param params the #GstGLAllocationParams to allocate the memory with
 * @returns a newly allocated #GstGLBaseMemory from @allocator and @params
 */
export interface GLBaseMemoryAllocatorAllocFunction {
    (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null
}
/**
 * Also see gst_memory_copy();
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @param offset the offset to copy from
 * @param size the number of bytes to copy
 * @returns the newly copied #GstGLMemory or %NULL
 */
export interface GLBaseMemoryAllocatorCopyFunction {
    (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory | null
}
/**
 * As this virtual method is called with an OpenGL context current, use this
 * function to allocate and OpenGL resources needed for your application
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @returns whether the creation succeeded
 */
export interface GLBaseMemoryAllocatorCreateFunction {
    (mem: GLBaseMemory): boolean
}
/**
 * Destroy any resources allocated throughout the lifetime of `mem`
 * @callback 
 * @param mem a #GstGLBaseMemory
 */
export interface GLBaseMemoryAllocatorDestroyFunction {
    (mem: GLBaseMemory): void
}
/**
 * Also see gst_memory_map();
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @param info a #GstMapInfo to map with
 * @param maxsize the size to map
 * @returns the mapped pointer
 */
export interface GLBaseMemoryAllocatorMapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): any | null
}
/**
 * Also see gst_memory_unmap();
 * @callback 
 * @param mem a #GstGLBaseMemory
 * @param info a #GstMapInfo to map with
 */
export interface GLBaseMemoryAllocatorUnmapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo): void
}
/**
 * Represents a function to run in the GL thread with `context` and `data`
 * @callback 
 * @param context a #GstGLContext
 * @param data user data
 */
export interface GLContextThreadFunc {
    (context: GLContext, data: any | null): void
}
export interface GLFilterRenderFunc {
    (filter: GLFilter, inTex: GLMemory): boolean
}
/**
 * callback definition for operating through a #GstGLFramebuffer object
 * @callback 
 * @param stuff user data
 */
export interface GLFramebufferFunc {
    (stuff: any | null): boolean
}
export interface GLWindowCB {
    (data: any | null): void
}
export interface GLWindowResizeCB {
    (data: any | null, width: number, height: number): void
}
export module GLBaseFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
    }

}

export interface GLBaseFilter {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilter

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBaseFilter

    parent: GstBase.BaseTransform & Gst.Object
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
    inCaps: Gst.Caps
    /**
     * the currently configured output #GstCaps
     * @field 
     */
    outCaps: Gst.Caps

    // Owm methods of GstGL-1.0.GstGL.GLBaseFilter

    findGlContext(): boolean
    getGlContext(): GLContext | null

    // Conflicting methods

    query(direction: Gst.PadDirection, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstGL-1.0.GstGL.GLBaseFilter

    glSetCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    glStart(): boolean
    glStop(): void

    // Class property signals of GstGL-1.0.GstGL.GLBaseFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstGLBaseFilter handles the nitty gritty details of retrieving an OpenGL
 * context.  It also provided some wrappers around #GstBaseTransform's
 * `start()`, `stop()` and `set_caps()` virtual methods that ensure an OpenGL
 * context is available and current in the calling thread.
 * @class 
 */
export class GLBaseFilter extends GstBase.BaseTransform {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilter

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBaseFilter

    constructor(config?: GLBaseFilter.ConstructorProperties) 
    _init(config?: GLBaseFilter.ConstructorProperties): void
}

export module GLBaseMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

export interface GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    alloc(params: GLAllocationParams): GLBaseMemory | null

    // Overloads of alloc

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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null

    // Class property signals of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGLBaseMemoryAllocator struct
 * @class 
 */
export class GLBaseMemoryAllocator extends Gst.Allocator {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBaseMemoryAllocator

    constructor(config?: GLBaseMemoryAllocator.ConstructorProperties) 
    _init(config?: GLBaseMemoryAllocator.ConstructorProperties): void
}

export module GLBaseSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.PushSrc.ConstructorProperties {

        // Own constructor properties of GstGL-1.0.GstGL.GLBaseSrc

        timestampOffset?: number | null
    }

}

export interface GLBaseSrc {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrc

    timestampOffset: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBaseSrc

    parent: GstBase.PushSrc & GstBase.BaseSrc & Gst.Object & Gst.Object
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
    outInfo: GstVideo.VideoInfo
    /**
     * the currently configured output #GstCaps
     * @field 
     */
    outCaps: Gst.Caps
    /**
     * the total running time
     * @field 
     */
    runningTime: Gst.ClockTime

    // Conflicting methods

    query(query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Allocate memory for a buffer.
     * @virtual 
     */
    alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of alloc

    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer, the default implementation will call alloc if
     * no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param buf 
     */
    create(buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of create

    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    fill(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of fill

    fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Own virtual methods of GstGL-1.0.GstGL.GLBaseSrc

    fillGlMemory(mem: GLMemory): boolean
    glStart(): boolean
    glStop(): void

    // Class property signals of GstGL-1.0.GstGL.GLBaseSrc

    connect(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp-offset", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstGLBaseSrc handles the nitty gritty details of retrieving an OpenGL
 * context. It also provided some wrappers around #GstBaseSrc's `start()` and
 * `stop()` virtual methods that ensure an OpenGL context is available and
 * current in the calling thread.
 * @class 
 */
export class GLBaseSrc extends GstBase.PushSrc {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrc

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBaseSrc

    constructor(config?: GLBaseSrc.ConstructorProperties) 
    _init(config?: GLBaseSrc.ConstructorProperties): void
}

export module GLBufferAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends GLBaseMemoryAllocator.ConstructorProperties {
    }

}

export interface GLBufferAllocator {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLBufferAllocator

    parent: GLBaseMemoryAllocator & Gst.Object

    // Conflicting methods

    alloc(params: GLAllocationParams): GLBaseMemory | null

    // Overloads of alloc

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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLBufferAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGLBufferAllocator struct
 * @class 
 */
export class GLBufferAllocator extends GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocator

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBufferAllocator

    constructor(config?: GLBufferAllocator.ConstructorProperties) 
    _init(config?: GLBufferAllocator.ConstructorProperties): void
}

export module GLBufferPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
    }

}

export interface GLBufferPool {

    // Own properties of GstGL-1.0.GstGL.GLBufferPool

    __gtype__: number

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
     * @returns a copy of the #GstGLAllocationParams being used by the @pool
     */
    getGlAllocationParams(): GLAllocationParams | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLBufferPool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
export class GLBufferPool extends Gst.BufferPool {

    // Own properties of GstGL-1.0.GstGL.GLBufferPool

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBufferPool

    constructor(config?: GLBufferPool.ConstructorProperties) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     * @returns a new #GstBufferPool instance
     */
    static new(): Gst.BufferPool
    _init(config?: GLBufferPool.ConstructorProperties): void
}

export module GLColorConvert {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLColorConvert {

    // Own properties of GstGL-1.0.GstGL.GLColorConvert

    __gtype__: number

    // Owm methods of GstGL-1.0.GstGL.GLColorConvert

    /**
     * Provides an implementation of #GstBaseTransformClass.decide_allocation()
     * @param query a completed ALLOCATION #GstQuery
     * @returns whether the allocation parameters were successfully chosen
     */
    decideAllocation(query: Gst.Query): boolean
    /**
     * Converts the data contained by `inbuf` using the formats specified by the
     * #GstCaps passed to gst_gl_color_convert_set_caps()
     * @param inbuf the #GstGLMemory filled #GstBuffer to convert
     * @returns a converted #GstBuffer or %NULL
     */
    perform(inbuf: Gst.Buffer): Gst.Buffer | null
    /**
     * Initializes `convert` with the information required for conversion.
     * @param inCaps input #GstCaps
     * @param outCaps output #GstCaps
     */
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLColorConvert

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
export class GLColorConvert extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLColorConvert

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLColorConvert

    constructor(config?: GLColorConvert.ConstructorProperties) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLColorConvert
    _init(config?: GLColorConvert.ConstructorProperties): void
    /**
     * Provides an implementation of #GstBaseTransformClass.fixate_caps()
     * @param context a #GstGLContext to use for transforming `caps`
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps of `direction`
     * @param other the #GstCaps to fixate
     * @returns the fixated #GstCaps
     */
    static fixateCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps
    /**
     * Provides an implementation of #GstBaseTransformClass.transform_caps()
     * @param context a #GstGLContext to use for transforming `caps`
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps to transform
     * @param filter a set of filter #GstCaps
     * @returns the converted #GstCaps
     */
    static transformCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
}

export module GLContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLContext {

    // Own properties of GstGL-1.0.GstGL.GLContext

    __gtype__: number

    // Own fields of GstGL-1.0.GstGL.GLContext

    /**
     * a list of OpenGL function pointers
     * @field 
     */
    glVtable: GLFuncs

    // Owm methods of GstGL-1.0.GstGL.GLContext

    // Has conflict: activate(activate: boolean): boolean
    /**
     * Note: This will always fail for two wrapped #GstGLContext's
     * @param otherContext another #GstGLContext
     * @returns whether @context and @other_context are able to share OpenGL      resources.
     */
    canShare(otherContext: GLContext): boolean
    // Has conflict: checkFeature(feature: string | null): boolean
    /**
     * Must be called with `context` current.
     * @param fboTarget the GL value of the framebuffer target, GL_FRAMEBUFFER,              GL_READ_FRAMEBUFFER, GL_DRAW_FRAMEBUFFER
     * @returns whether whether the current framebuffer is complete
     */
    checkFramebufferStatus(fboTarget: number): boolean
    checkGlVersion(api: GLAPI, maj: number, min: number): boolean
    /**
     * Unbind the current framebuffer
     */
    clearFramebuffer(): void
    /**
     * Clear's the currently set shader from the GL state machine.
     * 
     * Note: must be called in the GL thread.
     */
    clearShader(): void
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
     * @param otherContext a #GstGLContext to share OpenGL objects with
     * @returns whether the context could successfully be created
     */
    create(otherContext: GLContext | null): boolean
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
    fillInfo(): boolean
    // Has conflict: getConfig(): Gst.Structure | null
    getDisplay(): GLDisplay
    // Has conflict: getGlApi(): GLAPI
    // Has conflict: getGlContext(): never
    // Has conflict: getGlPlatform(): GLPlatform
    // Has conflict: getGlPlatformVersion(): [ /* major */ number, /* minor */ number ]
    /**
     * Returns the OpenGL version implemented by `context`.  See
     * gst_gl_context_get_gl_api() for retrieving the OpenGL api implemented by
     * `context`.
     */
    getGlVersion(): [ /* maj */ number, /* min */ number ]
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
     * @returns a function pointer or %NULL
     */
    getProcAddress(name: string | null): any | null
    getThread(): GLib.Thread | null
    getWindow(): GLWindow | null
    isShared(): boolean
    // Has conflict: requestConfig(glConfig: Gst.Structure | null): boolean
    /**
     * Will internally set `context` as shared with `share`
     * @param share another #GstGLContext
     */
    setSharedWith(share: GLContext): void
    /**
     * Set's the current window on `context` to `window`.  The window can only be
     * changed before gst_gl_context_create() has been called and the `window` is not
     * already running.
     * @param window a #GstGLWindow
     * @returns Whether the window was successfully updated
     */
    setWindow(window: GLWindow): boolean
    supportsGlslProfileVersion(version: GLSLVersion, profile: GLSLProfile): boolean
    supportsPrecision(version: GLSLVersion, profile: GLSLProfile): boolean
    supportsPrecisionHighp(version: GLSLVersion, profile: GLSLProfile): boolean
    // Has conflict: swapBuffers(): void
    /**
     * Execute `func` in the OpenGL thread of `context` with `data`
     * 
     * MT-safe
     * @param func a #GstGLContextThreadFunc
     */
    threadAdd(func: GLContextThreadFunc): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstGL-1.0.GstGL.GLContext

    /**
     * (De)activate the OpenGL context represented by this `context`.
     * 
     * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
     * currently set window.  See gst_gl_context_set_window() for details.
     * @virtual 
     * @param activate %TRUE to activate, %FALSE to deactivate
     * @returns Whether the activation succeeded
     */
    activate(activate: boolean): boolean
    /**
     * Check for an OpenGL `feature` being supported.
     * 
     * Note: Most features require that the context be created before it is
     * possible to determine their existence and so will fail if that is not the
     * case.
     * @virtual 
     * @param feature a platform specific feature
     * @returns Whether @feature is supported by @context
     */
    checkFeature(feature: string | null): boolean
    chooseFormat(): boolean
    createContext(glApi: GLAPI, otherContext: GLContext): boolean
    destroyContext(): void
    /**
     * Retrieve the OpenGL configuration for this context.  The context must
     * have been successfully created for this function to return a valid value.
     * 
     * Not all implementations currently support retrieving the config and will
     * return %NULL when not supported.
     * @virtual 
     * @returns the configuration chosen for this OpenGL context.
     */
    getConfig(): Gst.Structure | null
    /**
     * Get the currently enabled OpenGL api.
     * 
     * The currently available API may be limited by the #GstGLDisplay in use and/or
     * the #GstGLWindow chosen.
     * @virtual 
     * @returns the available OpenGL api
     */
    getGlApi(): GLAPI
    /**
     * Gets the backing OpenGL context used by `context`.
     * @virtual 
     * @returns The platform specific backing OpenGL context
     */
    getGlContext(): never
    /**
     * Gets the OpenGL platform that used by `context`.
     * @virtual 
     * @returns The platform specific backing OpenGL context
     */
    getGlPlatform(): GLPlatform
    /**
     * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
     * after a call to gst_gl_context_create().
     * @virtual 
     */
    getGlPlatformVersion(): [ /* major */ number, /* minor */ number ]
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
     * @param glConfig a configuration structure for             configuring the OpenGL context
     * @returns whether @gl_config could be successfully set on @context
     */
    requestConfig(glConfig: Gst.Structure | null): boolean
    /**
     * Swap the front and back buffers on the window attached to `context`.
     * This will display the frame on the next refresh cycle.
     * @virtual 
     */
    swapBuffers(): void

    // Class property signals of GstGL-1.0.GstGL.GLContext

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
export class GLContext extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLContext

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLContext

    constructor(config?: GLContext.ConstructorProperties) 
    /**
     * Create a new #GstGLContext with the specified `display`
     * @constructor 
     * @param display a #GstGLDisplay
     * @returns a new #GstGLContext
     */
    constructor(display: GLDisplay) 
    /**
     * Create a new #GstGLContext with the specified `display`
     * @constructor 
     * @param display a #GstGLDisplay
     * @returns a new #GstGLContext
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
     * @param contextType a #GstGLPlatform specifying the type of context in `handle`
     * @param availableApis a #GstGLAPI containing the available OpenGL apis in `handle`
     * @returns a #GstGLContext wrapping @handle
     */
    static newWrapped(display: GLDisplay, handle: never, contextType: GLPlatform, availableApis: GLAPI): GLContext
    _init(config?: GLContext.ConstructorProperties): void
    /**
     * A default implementation of the various GetProcAddress functions that looks
     * for `name` in the OpenGL shared libraries or in the current process.
     * 
     * See also: gst_gl_context_get_proc_address()
     * @param glApi a #GstGLAPI
     * @param name then function to get the address of
     * @returns an address pointing to @name or %NULL
     */
    static defaultGetProcAddress(glApi: GLAPI, name: string | null): any | null
    /**
     * See also gst_gl_context_activate().
     * @returns the #GstGLContext active in the current thread or %NULL
     */
    static getCurrent(): GLContext | null
    /**
     * If an error occurs, `major` and `minor` are not modified and %GST_GL_API_NONE is
     * returned.
     * @param platform the #GstGLPlatform to retrieve the API for
     * @returns The version supported by the OpenGL context current in the calling          thread or %GST_GL_API_NONE
     */
    static getCurrentGlApi(platform: GLPlatform): [ /* returnType */ GLAPI, /* major */ number, /* minor */ number ]
    static getCurrentGlContext(contextType: GLPlatform): never | null
    /**
     * Attempts to use the `context_type` specific GetProcAddress implementations
     * to retrieve `name`.
     * 
     * See also gst_gl_context_get_proc_address().
     * @param contextType a #GstGLPlatform
     * @param glApi a #GstGLAPI
     * @param name the name of the function to retrieve
     * @returns a function pointer for @name, or %NULL
     */
    static getProcAddressWithPlatform(contextType: GLPlatform, glApi: GLAPI, name: string | null): any | null
}

export module GLDisplay {

    // Signal callback interfaces

    /**
     * Signal callback interface for `create-context`
     */
    export interface CreateContextSignalCallback {
        (context: GLContext): GLContext | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLDisplay {

    // Own properties of GstGL-1.0.GstGL.GLDisplay

    __gtype__: number

    // Owm methods of GstGL-1.0.GstGL.GLDisplay

    addContext(context: GLContext): boolean
    /**
     * It requires the display's object lock to be held.
     * @param otherContext other #GstGLContext to share resources with.
     * @returns whether a new context could be created.
     */
    createContext(otherContext: GLContext | null): [ /* returnType */ boolean, /* pContext */ GLContext ]
    // Has conflict: createWindow(): GLWindow | null
    /**
     * Ensures that the display has a valid GL context for the current thread. If
     * `context` already contains a valid context, this does nothing.
     * @param otherContext other #GstGLContext to share resources with.
     * @param context the resulting #GstGLContext
     * @returns wether @context contains a valid context.
     */
    ensureContext(otherContext: GLContext | null, context: GLContext | null): [ /* returnType */ boolean, /* context */ GLContext | null ]
    /**
     * limit the use of OpenGL to the requested `gl_api`.  This is intended to allow
     * application and elements to request a specific set of OpenGL API's based on
     * what they support.  See gst_gl_context_get_gl_api() for the retrieving the
     * API supported by a #GstGLContext.
     * @param glApi a #GstGLAPI to filter with
     */
    filterGlApi(glApi: GLAPI): void
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstGLWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compareFunc a comparison function to run
     * @returns The first #GstGLWindow that causes a match          from @compare_func
     */
    findWindow(data: any | null, compareFunc: GLib.CompareFunc): GLWindow | null
    /**
     * see gst_gl_display_filter_gl_api() for what the returned value represents
     * @returns the #GstGLAPI configured for @display
     */
    getGlApi(): GLAPI
    getGlApiUnlocked(): GLAPI
    getGlContextForThread(thread: GLib.Thread): GLContext | null
    // Has conflict: getHandle(): never
    getHandleType(): GLDisplayType
    /**
     * Must be called with the object lock held.
     * @param context the #GstGLContext to remove
     */
    removeContext(context: GLContext): void
    removeWindow(window: GLWindow): boolean
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstGLWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compareFunc a comparison function to run
     * @returns The first #GstGLWindow that causes a match          from @compare_func
     */
    retrieveWindow(data: any | null, compareFunc: GLib.CompareFunc): GLWindow | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstGL-1.0.GstGL.GLDisplay

    createWindow(): GLWindow | null
    getHandle(): never

    // Own signals of GstGL-1.0.GstGL.GLDisplay

    connect(sigName: "create-context", callback: GLDisplay.CreateContextSignalCallback): number
    on(sigName: "create-context", callback: GLDisplay.CreateContextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-context", callback: GLDisplay.CreateContextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-context", callback: GLDisplay.CreateContextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-context", ...args: any[]): void

    // Class property signals of GstGL-1.0.GstGL.GLDisplay

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
export class GLDisplay extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLDisplay

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLDisplay

    constructor(config?: GLDisplay.ConstructorProperties) 
    constructor() 
    static new(): GLDisplay
    /**
     * Will always return a #GstGLDisplay of a single type.  This differs from
     * gst_gl_display_new() and the seemingly equivalent call
     * gst_gl_display_new_with_type (GST_GL_DISPLAY_TYPE_ANY) in that the latter
     * may return NULL.
     * @constructor 
     * @param type #GstGLDisplayType
     * @returns a new #GstGLDisplay or %NULL if @type is          not supported
     */
    static newWithType(type: GLDisplayType): GLDisplay
    _init(config?: GLDisplay.ConstructorProperties): void
}

export module GLFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GLBaseFilter.ConstructorProperties {
    }

}

export interface GLFilter {

    // Own properties of GstGL-1.0.GstGL.GLFilter

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLFilter

    parent: GLBaseFilter & GstBase.BaseTransform & Gst.Object & Gst.Object
    /**
     * the video info for input buffers
     * @field 
     */
    inInfo: GstVideo.VideoInfo
    /**
     * the video info for output buffers
     * @field 
     */
    outInfo: GstVideo.VideoInfo
    /**
     * The texture target of the input buffers (usually 2D)
     * @field 
     */
    inTextureTarget: GLTextureTarget
    /**
     * The texture target of the output buffers (usually 2D)
     * @field 
     */
    outTextureTarget: GLTextureTarget
    /**
     * the output #GstCaps
     * @field 
     */
    outCaps: Gst.Caps
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
    drawFullscreenQuad(): void
    // Has conflict: filterTexture(input: Gst.Buffer, output: Gst.Buffer): boolean
    /**
     * Transforms `input` into `output` using `func` on through FBO.
     * @param input the input texture
     * @param output the output texture
     * @param func the function to transform `input` into `output`. called with `data`
     * @returns the return value of @func
     */
    renderToTarget(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean
    /**
     * Transforms `input` into `output` using `shader` with a FBO.
     * 
     * See also: gst_gl_filter_render_to_target()
     * @param input the input texture
     * @param output the output texture
     * @param shader the shader to use.
     */
    renderToTargetWithShader(input: GLMemory, output: GLMemory, shader: GLShader): void

    // Conflicting methods

    query(direction: Gst.PadDirection, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstGL-1.0.GstGL.GLFilter

    filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean
    /**
     * Calls filter_texture vfunc with correctly mapped #GstGLMemorys
     * @virtual 
     * @param input an input buffer
     * @param output an output buffer
     * @returns whether the transformation succeeded
     */
    filterTexture(input: GLMemory, output: GLMemory): boolean
    initFbo(): boolean
    setCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    transformInternalCaps(direction: Gst.PadDirection, caps: Gst.Caps, filterCaps: Gst.Caps): Gst.Caps

    // Class property signals of GstGL-1.0.GstGL.GLFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstGLFilter helps to implement simple OpenGL filter elements taking a
 * single input and producing a single output with a #GstGLFramebuffer
 * @class 
 */
export class GLFilter extends GLBaseFilter {

    // Own properties of GstGL-1.0.GstGL.GLFilter

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLFilter

    constructor(config?: GLFilter.ConstructorProperties) 
    _init(config?: GLFilter.ConstructorProperties): void
    static addRgbaPadTemplates(klass: GLFilterClass): void
}

export module GLFramebuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLFramebuffer {

    // Own properties of GstGL-1.0.GstGL.GLFramebuffer

    __gtype__: number

    // Owm methods of GstGL-1.0.GstGL.GLFramebuffer

    /**
     * attach `mem` to `attachment_point`
     * 
     * Must be called with the same OpenGL context current that `fb` was created
     * with.
     * @param attachmentPoint the OpenGL attachment point to bind `mem` to
     * @param mem the memory object to bind to `attachment_point`
     */
    attach(attachmentPoint: number, mem: GLBaseMemory): void
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
     * @returns the result of executing @func
     */
    drawToTexture(mem: GLMemory, func: GLFramebufferFunc): boolean
    /**
     * Retrieve the effective dimensions from the current attachments attached to
     * `fb`.
     */
    getEffectiveDimensions(): [ /* width */ number, /* height */ number ]
    getId(): number

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLFramebuffer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
export class GLFramebuffer extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLFramebuffer

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLFramebuffer

    constructor(config?: GLFramebuffer.ConstructorProperties) 
    /**
     * This function will internally create an OpenGL framebuffer object and must
     * be called on `context'`s OpenGL thread.
     * @constructor 
     * @param context a #GstGLContext
     * @returns a new #GstGLFramebuffer
     */
    constructor(context: GLContext) 
    /**
     * This function will internally create an OpenGL framebuffer object and must
     * be called on `context'`s OpenGL thread.
     * @constructor 
     * @param context a #GstGLContext
     * @returns a new #GstGLFramebuffer
     */
    static new(context: GLContext): GLFramebuffer
    /**
     * This function will internally create an OpenGL framebuffer object and must
     * be called on `context'`s OpenGL thread.
     * @constructor 
     * @param context a #GstGLContext
     * @param width width for the depth buffer
     * @param height for the depth buffer
     * @returns a new #GstGLFramebuffer with a depth buffer of @width and @height
     */
    static newWithDefaultDepth(context: GLContext, width: number, height: number): GLFramebuffer
    _init(config?: GLFramebuffer.ConstructorProperties): void
}

export module GLMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends GLBaseMemoryAllocator.ConstructorProperties {
    }

}

export interface GLMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLMemoryAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Conflicting methods

    alloc(params: GLAllocationParams): GLBaseMemory | null

    // Overloads of alloc

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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLMemoryAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGLMemoryAllocator struct
 * @class 
 */
export class GLMemoryAllocator extends GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLMemoryAllocator

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLMemoryAllocator

    constructor(config?: GLMemoryAllocator.ConstructorProperties) 
    _init(config?: GLMemoryAllocator.ConstructorProperties): void
    static getDefault(context: GLContext): GLMemoryAllocator
}

export module GLMemoryPBOAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends GLMemoryAllocator.ConstructorProperties {
    }

}

export interface GLMemoryPBOAllocator {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    parent: GLMemoryAllocator & Gst.Object

    // Conflicting methods

    alloc(params: GLAllocationParams): GLBaseMemory | null

    // Overloads of alloc

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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGLMemoryPBOAllocator struct
 * @class 
 */
export class GLMemoryPBOAllocator extends GLMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLMemoryPBOAllocator

    constructor(config?: GLMemoryPBOAllocator.ConstructorProperties) 
    _init(config?: GLMemoryPBOAllocator.ConstructorProperties): void
}

export module GLOverlayCompositor {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstGL-1.0.GstGL.GLOverlayCompositor

        yinvert?: boolean | null
    }

}

export interface GLOverlayCompositor {

    // Own properties of GstGL-1.0.GstGL.GLOverlayCompositor

    yinvert: boolean
    __gtype__: number

    // Owm methods of GstGL-1.0.GstGL.GLOverlayCompositor

    drawOverlays(): void
    freeOverlays(): void
    uploadOverlays(buf: Gst.Buffer): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLOverlayCompositor

    connect(sigName: "notify::yinvert", callback: (...args: any[]) => void): number
    on(sigName: "notify::yinvert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::yinvert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::yinvert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::yinvert", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGLOverlayCompositor object
 * @class 
 */
export class GLOverlayCompositor extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLOverlayCompositor

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLOverlayCompositor

    constructor(config?: GLOverlayCompositor.ConstructorProperties) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLOverlayCompositor
    _init(config?: GLOverlayCompositor.ConstructorProperties): void
    static addCaps(caps: Gst.Caps): Gst.Caps
}

export module GLRenderbufferAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends GLBaseMemoryAllocator.ConstructorProperties {
    }

}

export interface GLRenderbufferAllocator {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstGL-1.0.GstGL.GLRenderbufferAllocator

    parent: GLBaseMemoryAllocator & Gst.Object

    // Conflicting methods

    alloc(params: GLAllocationParams): GLBaseMemory | null

    // Overloads of alloc

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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
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
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLRenderbufferAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque #GstGLRenderbufferAllocator struct
 * @class 
 */
export class GLRenderbufferAllocator extends GLBaseMemoryAllocator {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocator

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLRenderbufferAllocator

    constructor(config?: GLRenderbufferAllocator.ConstructorProperties) 
    _init(config?: GLRenderbufferAllocator.ConstructorProperties): void
}

export module GLSLStage {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLSLStage {

    // Own properties of GstGL-1.0.GstGL.GLSLStage

    __gtype__: number

    // Owm methods of GstGL-1.0.GstGL.GLSLStage

    compile(): boolean
    getHandle(): number
    getProfile(): GLSLProfile
    getShaderType(): number
    getVersion(): GLSLVersion
    /**
     * Replaces the current shader string with `str`.
     * @param version a #GstGLSLVersion
     * @param profile a #GstGLSLProfile
     * @param str a GLSL shader string
     */
    setStrings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLSLStage

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstGLSLStage holds and represents a single OpenGL shader stage.
 * @class 
 */
export class GLSLStage extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLSLStage

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLSLStage

    constructor(config?: GLSLStage.ConstructorProperties) 
    constructor(context: GLContext, type: number) 
    static new(context: GLContext, type: number): GLSLStage
    static newDefaultFragment(context: GLContext): GLSLStage
    static newDefaultVertex(context: GLContext): GLSLStage
    static newWithString(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string | null): GLSLStage
    static newWithStrings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string[]): GLSLStage
    _init(config?: GLSLStage.ConstructorProperties): void
}

export module GLShader {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLShader {

    // Own properties of GstGL-1.0.GstGL.GLShader

    readonly linked: boolean
    __gtype__: number

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
     * @returns whether @stage could be attached to @shader
     */
    attach(stage: GLSLStage): boolean
    /**
     * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
     * with gst_glsl_stage_compile().
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     * @returns whether @stage could be attached to @shader
     */
    attachUnlocked(stage: GLSLStage): boolean
    /**
     * Bind attribute `name` to the specified location `index` using
     * `glBindAttributeLocation()`.
     * @param index attribute index to set
     * @param name name of the attribute
     */
    bindAttributeLocation(index: number, name: string | null): void
    /**
     * Bind attribute `name` to the specified location `index` using
     * `glBindFragDataLocation()`.
     * @param index attribute index to set
     * @param name name of the attribute
     */
    bindFragDataLocation(index: number, name: string | null): void
    /**
     * Compiles `stage` and attaches it to `shader`.
     * 
     * Note: must be called in the GL thread
     * @param stage a #GstGLSLStage to attach
     * @returns whether @stage could be compiled and attached to @shader
     */
    compileAttachStage(stage: GLSLStage): boolean
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
    detachUnlocked(stage: GLSLStage): void
    getAttributeLocation(name: string | null): number
    getProgramHandle(): number
    /**
     * Note: must be called in the GL thread
     * @returns whether @shader has been successfully linked
     */
    isLinked(): boolean
    /**
     * Links the current list of #GstGLSLStage's in `shader`.
     * 
     * Note: must be called in the GL thread
     * @returns whether @shader could be linked together.
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
    releaseUnlocked(): void
    /**
     * Perform `glUniform1f()` for `name` on `shader`
     * @param name name of the uniform
     * @param value value to set
     */
    setUniform1f(name: string | null, value: number): void
    /**
     * Perform `glUniform1fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform1fv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform1i()` for `name` on `shader`
     * @param name name of the uniform
     * @param value value to set
     */
    setUniform1i(name: string | null, value: number): void
    /**
     * Perform `glUniform1iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform1iv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform2f()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     */
    setUniform2f(name: string | null, v0: number, v1: number): void
    /**
     * Perform `glUniform2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform2fv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform2i()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     */
    setUniform2i(name: string | null, v0: number, v1: number): void
    /**
     * Perform `glUniform2iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform2iv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform3f()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     */
    setUniform3f(name: string | null, v0: number, v1: number, v2: number): void
    /**
     * Perform `glUniform3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform3fv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform3i()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     */
    setUniform3i(name: string | null, v0: number, v1: number, v2: number): void
    /**
     * Perform `glUniform3iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform3iv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform4f()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     * @param v3 fourth value to set
     */
    setUniform4f(name: string | null, v0: number, v1: number, v2: number, v3: number): void
    /**
     * Perform `glUniform4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform4fv(name: string | null, value: number[]): void
    /**
     * Perform `glUniform4i()` for `name` on `shader`
     * @param name name of the uniform
     * @param v0 first value to set
     * @param v1 second value to set
     * @param v2 third value to set
     * @param v3 fourth value to set
     */
    setUniform4i(name: string | null, v0: number, v1: number, v2: number, v3: number): void
    /**
     * Perform `glUniform4iv()` for `name` on `shader`
     * @param name name of the uniform
     * @param value values to set
     */
    setUniform4iv(name: string | null, value: number[]): void
    /**
     * Perform `glUniformMatrix2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 2x2 matrices to set
     * @param transpose transpose the matrix
     * @param value matrix to set
     */
    setUniformMatrix2fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix2x3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 2x3 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix2x3fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix2x4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 2x4 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix2x4fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 3x3 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix3fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix3x2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 3x2 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix3x2fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix3x4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 3x4 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix3x4fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix4fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 4x4 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix4fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix4x2fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 4x2 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix4x2fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Perform `glUniformMatrix4x3fv()` for `name` on `shader`
     * @param name name of the uniform
     * @param count number of 4x3 matrices to set
     * @param transpose transpose the matrix
     * @param value values to set
     */
    setUniformMatrix4x3fv(name: string | null, count: number, transpose: boolean, value: number): void
    /**
     * Mark's `shader` as being used for the next GL draw command.
     * 
     * Note: must be called in the GL thread and `shader` must have been linked.
     */
    use(): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLShader

    connect(sigName: "notify::linked", callback: (...args: any[]) => void): number
    on(sigName: "notify::linked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::linked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::linked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::linked", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class GLShader extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLShader

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLShader

    constructor(config?: GLShader.ConstructorProperties) 
    /**
     * Note: must be called in the GL thread
     * @constructor 
     * @param context a #GstGLContext
     * @returns a new empty @shader
     */
    constructor(context: GLContext) 
    /**
     * Note: must be called in the GL thread
     * @constructor 
     * @param context a #GstGLContext
     * @returns a new empty @shader
     */
    static new(context: GLContext): GLShader
    /**
     * Note: must be called in the GL thread
     * @constructor 
     * @param context a #GstGLContext
     * @returns a default @shader or %NULL on failure
     */
    static newDefault(context: GLContext): GLShader
    _init(config?: GLShader.ConstructorProperties): void
    static stringFragmentExternalOesGetDefault(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string | null
    static stringFragmentGetDefault(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string | null
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
     * @returns a shader string defining the precision of float types based on      @context, @version and @profile
     */
    static stringGetHighestPrecision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string | null
}

export module GLUpload {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLUpload {

    // Own properties of GstGL-1.0.GstGL.GLUpload

    __gtype__: number

    // Own fields of GstGL-1.0.GstGL.GLUpload

    parent: Gst.Object
    context: GLContext

    // Owm methods of GstGL-1.0.GstGL.GLUpload

    getCaps(): [ /* inCaps */ Gst.Caps, /* outCaps */ Gst.Caps ]
    /**
     * Uploads `buffer` using the transformation specified by
     * gst_gl_upload_set_caps() creating a new #GstBuffer in `outbuf_ptr`.
     * @param buffer input #GstBuffer
     * @returns whether the upload was successful
     */
    performWithBuffer(buffer: Gst.Buffer): [ /* returnType */ GLUploadReturn, /* outbufPtr */ Gst.Buffer ]
    /**
     * Adds the required allocation parameters to support uploading.
     * @param decideQuery a #GstQuery from a decide allocation
     * @param query the proposed allocation query
     */
    proposeAllocation(decideQuery: Gst.Query | null, query: Gst.Query): void
    /**
     * Initializes `upload` with the information required for upload.
     * @param inCaps input #GstCaps
     * @param outCaps output #GstCaps
     * @returns whether @in_caps and @out_caps could be set on @upload
     */
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
    setContext(context: GLContext): void
    transformCaps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLUpload

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstGLUpload is an object that uploads data from system memory into GL textures.
 * 
 * A #GstGLUpload can be created with gst_gl_upload_new()
 * @class 
 */
export class GLUpload extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLUpload

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLUpload

    constructor(config?: GLUpload.ConstructorProperties) 
    constructor(context: GLContext) 
    static new(context: GLContext): GLUpload
    _init(config?: GLUpload.ConstructorProperties): void
    static getInputTemplateCaps(): Gst.Caps
}

export module GLViewConvert {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstGL-1.0.GstGL.GLViewConvert

        downmixMode?: GLStereoDownmix | null
        inputFlagsOverride?: GstVideo.VideoMultiviewFlags | null
        inputModeOverride?: GstVideo.VideoMultiviewMode | null
        outputFlagsOverride?: GstVideo.VideoMultiviewFlags | null
        outputModeOverride?: GstVideo.VideoMultiviewMode | null
    }

}

export interface GLViewConvert {

    // Own properties of GstGL-1.0.GstGL.GLViewConvert

    __gtype__: number

    // Own fields of GstGL-1.0.GstGL.GLViewConvert

    object: any
    context: GLContext
    shader: GLShader
    inputModeOverride: GstVideo.VideoMultiviewMode
    inputFlagsOverride: GstVideo.VideoMultiviewFlags
    outputModeOverride: GstVideo.VideoMultiviewMode
    outputFlagsOverride: GstVideo.VideoMultiviewFlags
    downmixMode: GLStereoDownmix
    inInfo: GstVideo.VideoInfo
    outInfo: GstVideo.VideoInfo
    fromTextureTarget: GLTextureTarget
    toTextureTarget: GLTextureTarget
    capsPassthrough: boolean
    initted: boolean
    reconfigure: boolean
    fbo: GLFramebuffer

    // Owm methods of GstGL-1.0.GstGL.GLViewConvert

    /**
     * Provides an implementation of #GstBaseTransformClass.fixate_caps()
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps of `direction`
     * @param othercaps the #GstCaps to fixate
     * @returns the fixated #GstCaps
     */
    fixateCaps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    /**
     * Retrieve the processed output buffer placing the output in `outbuf_ptr`.
     * @returns a #GstFlowReturn
     */
    getOutput(): [ /* returnType */ Gst.FlowReturn, /* outbufPtr */ Gst.Buffer ]
    /**
     * Converts the data contained by `inbuf` using the formats specified by the
     * #GstCaps passed to gst_gl_view_convert_set_caps()
     * @param inbuf the #GstGLMemory filled #GstBuffer to convert
     * @returns a converted #GstBuffer or %NULL
     */
    perform(inbuf: Gst.Buffer): Gst.Buffer | null
    /**
     * Reset `viewconvert` to the default state.  Further operation will require
     * setting the caps with gst_gl_view_convert_set_caps().
     */
    reset(): void
    /**
     * Initializes `viewconvert` with the information required for conversion.
     * @param inCaps input #GstCaps
     * @param outCaps output #GstCaps
     */
    setCaps(inCaps: Gst.Caps, outCaps: Gst.Caps): boolean
    /**
     * Set `context` on `viewconvert`
     * @param context the #GstGLContext to set
     */
    setContext(context: GLContext): void
    /**
     * Submit `input` to be processed by `viewconvert`
     * @param isDiscont true if we have a discontinuity
     * @param input a #GstBuffer
     * @returns a #GstFlowReturn
     */
    submitInputBuffer(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    /**
     * Provides an implementation of #GstBaseTransformClass.transform_caps()
     * @param direction a #GstPadDirection
     * @param caps the #GstCaps to transform
     * @param filter a set of filter #GstCaps
     * @returns the converted #GstCaps
     */
    transformCaps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstGL-1.0.GstGL.GLViewConvert

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Convert stereoscopic/multiview video using fragment shaders.
 * @class 
 */
export class GLViewConvert extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLViewConvert

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLViewConvert

    constructor(config?: GLViewConvert.ConstructorProperties) 
    constructor() 
    static new(): GLViewConvert
    _init(config?: GLViewConvert.ConstructorProperties): void
}

export module GLWindow {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-event`
     */
    export interface KeyEventSignalCallback {
        (id: string | null, key: string | null): void
    }

    /**
     * Signal callback interface for `mouse-event`
     */
    export interface MouseEventSignalCallback {
        (id: string | null, button: number, x: number, y: number): void
    }

    /**
     * Signal callback interface for `scroll-event`
     */
    export interface ScrollEventSignalCallback {
        (x: number, y: number, deltaX: number, deltaY: number): void
    }

    /**
     * Signal callback interface for `window-handle-changed`
     */
    export interface WindowHandleChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GLWindow {

    // Own properties of GstGL-1.0.GstGL.GLWindow

    __gtype__: number

    // Owm methods of GstGL-1.0.GstGL.GLWindow

    // Has conflict: controlsViewport(): boolean
    // Has conflict: draw(): void
    getContext(): GLContext
    // Has conflict: getDisplay(): never
    getSurfaceDimensions(): [ /* width */ number, /* height */ number ]
    // Has conflict: getWindowHandle(): never
    // Has conflict: handleEvents(handleEvents: boolean): void
    // Has conflict: hasOutputSurface(): boolean
    // Has conflict: queueResize(): void
    // Has conflict: quit(): void
    /**
     * Resize `window` to the given `width` and `height`.
     * @param width new width
     * @param height new height
     */
    resize(width: number, height: number): void
    // Has conflict: run(): void
    sendKeyEvent(eventType: string | null, keyStr: string | null): void
    // Has conflict: sendMessage(callback: GLWindowCB): void
    // Has conflict: sendMessageAsync(callback: GLWindowCB): void
    sendMouseEvent(eventType: string | null, button: number, posx: number, posy: number): void
    /**
     * Notify a `window` about a scroll event. A scroll signal holding the event
     * coordinates will be emitted.
     * @param posx x position of the mouse cursor
     * @param posy y position of the mouse cursor
     * @param deltaX the x offset of the scroll event
     * @param deltaY the y offset of the scroll event
     */
    sendScrollEvent(posx: number, posy: number, deltaX: number, deltaY: number): void
    /**
     * Sets the callback called when the window is about to close.
     * @param callback function to invoke
     */
    setCloseCallback(callback: GLWindowCB): void
    /**
     * Sets the draw callback called every time gst_gl_window_draw() is called
     * @param callback function to invoke
     */
    setDrawCallback(callback: GLWindowCB): void
    // Has conflict: setPreferredSize(width: number, height: number): void
    // Has conflict: setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    /**
     * Sets the resize callback called every time a resize of the window occurs.
     * @param callback function to invoke
     */
    setResizeCallback(callback: GLWindowResizeCB): void
    // Has conflict: setWindowHandle(handle: never): void
    // Has conflict: show(): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstGL-1.0.GstGL.GLWindow

    close(): void
    /**
     * Checks if `window` controls the GL viewport.
     * @virtual 
     * @returns %TRUE if @window controls the GL viewport, otherwise %FALSE
     */
    controlsViewport(): boolean
    /**
     * Redraw the window contents.  Implementations should invoke the draw callback.
     * @virtual 
     */
    draw(): void
    getDisplay(): never
    getWindowHandle(): never
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @virtual 
     * @param handleEvents a #gboolean indicating if events should be handled or not.
     */
    handleEvents(handleEvents: boolean): void
    /**
     * Query whether `window` has output surface or not
     * @virtual 
     * @returns %TRUE if @window has useable output surface
     */
    hasOutputSurface(): boolean
    open(): boolean
    /**
     * Queue resizing of `window`.
     * @virtual 
     */
    queueResize(): void
    /**
     * Quit the runloop's execution.
     * @virtual 
     */
    quit(): void
    /**
     * Start the execution of the runloop.
     * @virtual 
     */
    run(): void
    /**
     * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
     * have executed when this function returns.
     * @virtual 
     * @param callback function to invoke
     */
    sendMessage(callback: GLWindowCB): void
    /**
     * Invoke `callback` with `data` on the window thread.  The callback may not
     * have been executed when this function returns.
     * @virtual 
     * @param callback function to invoke
     */
    sendMessageAsync(callback: GLWindowCB): void
    /**
     * Set the preferred width and height of the window.  Implementations are free
     * to ignore this information.
     * @virtual 
     * @param width new preferred width
     * @param height new preferred height
     */
    setPreferredSize(width: number, height: number): void
    /**
     * Tell a `window` that it should render into a specific region of the window
     * according to the #GstVideoOverlay interface.
     * @virtual 
     * @param x x position
     * @param y y position
     * @param width width
     * @param height height
     * @returns whether the specified region could be set
     */
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    /**
     * Sets the window that this `window` should render into.  Some implementations
     * require this to be called with a valid handle before drawing can commence.
     * @virtual 
     * @param handle handle to the window
     */
    setWindowHandle(handle: never): void
    /**
     * Present the window to the screen.
     * @virtual 
     */
    show(): void

    // Own signals of GstGL-1.0.GstGL.GLWindow

    connect(sigName: "key-event", callback: GLWindow.KeyEventSignalCallback): number
    on(sigName: "key-event", callback: GLWindow.KeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-event", callback: GLWindow.KeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-event", callback: GLWindow.KeyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-event", key: string | null, ...args: any[]): void
    connect(sigName: "mouse-event", callback: GLWindow.MouseEventSignalCallback): number
    on(sigName: "mouse-event", callback: GLWindow.MouseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-event", callback: GLWindow.MouseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-event", callback: GLWindow.MouseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mouse-event", button: number, x: number, y: number, ...args: any[]): void
    connect(sigName: "scroll-event", callback: GLWindow.ScrollEventSignalCallback): number
    on(sigName: "scroll-event", callback: GLWindow.ScrollEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: GLWindow.ScrollEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: GLWindow.ScrollEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "scroll-event", y: number, deltaX: number, deltaY: number, ...args: any[]): void
    connect(sigName: "window-handle-changed", callback: GLWindow.WindowHandleChangedSignalCallback): number
    on(sigName: "window-handle-changed", callback: GLWindow.WindowHandleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-handle-changed", callback: GLWindow.WindowHandleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-handle-changed", callback: GLWindow.WindowHandleChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-handle-changed", ...args: any[]): void

    // Class property signals of GstGL-1.0.GstGL.GLWindow

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * GstGLWindow represents a window that elements can render into.  A window can
 * either be a user visible window (onscreen) or hidden (offscreen).
 * @class 
 */
export class GLWindow extends Gst.Object {

    // Own properties of GstGL-1.0.GstGL.GLWindow

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLWindow

    constructor(config?: GLWindow.ConstructorProperties) 
    constructor(display: GLDisplay) 
    static new(display: GLDisplay): GLWindow
    _init(config?: GLWindow.ConstructorProperties): void
}

export interface GLAllocationParams {

    // Own fields of GstGL-1.0.GstGL.GLAllocationParams

    /**
     * the size of the struct (including and subclass data)
     * @field 
     */
    structSize: number
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
    allocFlags: number
    /**
     * the allocation size
     * @field 
     */
    allocSize: number
    /**
     * the #GstAllocationParams
     * @field 
     */
    allocParams: Gst.AllocationParams
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
    userData: any
    /**
     * the wrapped data pointer
     * @field 
     */
    wrappedData: any
    /**
     * the wrapped OpenGL handle
     * @field 
     */
    glHandle: any

    // Owm methods of GstGL-1.0.GstGL.GLAllocationParams

    /**
     * Copies the dynamically allocated data from `src` to `dest`.  Direct subclasses
     * should call this function in their own overridden copy function.
     * @param dest the destination #GstGLAllocationParams
     */
    copyData(dest: GLAllocationParams): void
    /**
     * Frees the dynamically allocated data in `params`.  Direct subclasses
     * should call this function in their own overridden free function.
     */
    freeData(): void
}

export class GLAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLAllocationParams

    static name: string
}

export interface GLAsyncDebug {

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
    outputLogMsg(): void
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
export class GLAsyncDebug {

    // Own properties of GstGL-1.0.GstGL.GLAsyncDebug

    static name: string
}

export interface GLBaseFilterClass {

    // Own fields of GstGL-1.0.GstGL.GLBaseFilterClass

    parentClass: GstBase.BaseTransformClass
    /**
     * the logical-OR of #GstGLAPI's supported by this element
     * @field 
     */
    supportedGlApi: GLAPI
    glStart: (filter: GLBaseFilter) => boolean
    glStop: (filter: GLBaseFilter) => void
    glSetCaps: (filter: GLBaseFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
}

/**
 * The base class for GStreamer GL Filter.
 * @record 
 */
export abstract class GLBaseFilterClass {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilterClass

    static name: string
}

export interface GLBaseFilterPrivate {
}

export class GLBaseFilterPrivate {

    // Own properties of GstGL-1.0.GstGL.GLBaseFilterPrivate

    static name: string
}

export interface GLBaseMemory {

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
    mapFlags: Gst.MapFlags
    mapCount: number
    glMapCount: number
    data: any
    query: GLQuery

    // Owm methods of GstGL-1.0.GstGL.GLBaseMemory

    /**
     * Note: only intended for subclass usage to allocate the system memory buffer
     * on demand.  If there is already a non-NULL data pointer in `gl_mem->`data,
     * then this function imply returns TRUE.
     * @returns whether the system memory could be allocated
     */
    allocData(): boolean
    /**
     * Initializes `mem` with the required parameters
     * @param allocator the #GstAllocator to initialize with
     * @param parent the parent #GstMemory to initialize with
     * @param context the #GstGLContext to initialize with
     * @param params the `GstAllocationParams` to initialize with
     * @param size the number of bytes to be allocated
     * @param userData user data to call `notify` with
     * @param notify a #GDestroyNotify
     */
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: number, userData: any | null, notify: GLib.DestroyNotify | null): void
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean
}

/**
 * GstGLBaseMemory is a #GstMemory subclass providing the basis of support
 * for the mapping of GL buffers.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * @record 
 */
export class GLBaseMemory {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemory

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBaseMemory

    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null
    /**
     * Initializes the GL Base Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLBaseMemory operation.
     */
    static initOnce(): void
}

export interface GLBaseMemoryAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLBaseMemoryAllocatorClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gst.AllocatorClass
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

export abstract class GLBaseMemoryAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLBaseMemoryAllocatorClass

    static name: string
}

export interface GLBaseSrcClass {

    // Own fields of GstGL-1.0.GstGL.GLBaseSrcClass

    parentClass: GstBase.PushSrcClass
    /**
     * the logical-OR of #GstGLAPI's supported by this element
     * @field 
     */
    supportedGlApi: GLAPI
    glStart: (src: GLBaseSrc) => boolean
    glStop: (src: GLBaseSrc) => void
    fillGlMemory: (src: GLBaseSrc, mem: GLMemory) => boolean
}

/**
 * The base class for GStreamer GL Video sources.
 * @record 
 */
export abstract class GLBaseSrcClass {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrcClass

    static name: string
}

export interface GLBaseSrcPrivate {
}

export class GLBaseSrcPrivate {

    // Own properties of GstGL-1.0.GstGL.GLBaseSrcPrivate

    static name: string
}

export interface GLBuffer {

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
    usageHints: number
}

/**
 * GstGLBuffer is a #GstMemory subclass providing support for the mapping of
 * GL buffers.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * @record 
 */
export class GLBuffer {

    // Own properties of GstGL-1.0.GstGL.GLBuffer

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBuffer

    /**
     * Initializes the GL Buffer allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstGLBuffer operation.
     */
    static initOnce(): void
}

export interface GLBufferAllocationParams {

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
    glTarget: number
    /**
     * the OpenGL usage hint to create the buffer with
     * @field 
     */
    glUsage: number
}

export class GLBufferAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocationParams

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLBufferAllocationParams

    constructor(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number) 
    static new(context: GLContext, allocSize: number, allocParams: Gst.AllocationParams | null, glTarget: number, glUsage: number): GLBufferAllocationParams
}

export interface GLBufferAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLBufferAllocatorClass

    parentClass: GLBaseMemoryAllocatorClass
}

/**
 * The #GstGLBufferAllocatorClass only contains private data
 * @record 
 */
export abstract class GLBufferAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLBufferAllocatorClass

    static name: string
}

export interface GLBufferPoolClass {

    // Own fields of GstGL-1.0.GstGL.GLBufferPoolClass

    parentClass: Gst.BufferPoolClass
}

/**
 * The #GstGLBufferPoolClass structure contains only private data
 * @record 
 */
export abstract class GLBufferPoolClass {

    // Own properties of GstGL-1.0.GstGL.GLBufferPoolClass

    static name: string
}

export interface GLBufferPoolPrivate {
}

export class GLBufferPoolPrivate {

    // Own properties of GstGL-1.0.GstGL.GLBufferPoolPrivate

    static name: string
}

export interface GLColorConvertClass {
}

/**
 * The #GstGLColorConvertClass struct only contains private data
 * @record 
 */
export abstract class GLColorConvertClass {

    // Own properties of GstGL-1.0.GstGL.GLColorConvertClass

    static name: string
}

export interface GLColorConvertPrivate {
}

export class GLColorConvertPrivate {

    // Own properties of GstGL-1.0.GstGL.GLColorConvertPrivate

    static name: string
}

export interface GLContextClass {

    // Own fields of GstGL-1.0.GstGL.GLContextClass

    parentClass: Gst.ObjectClass
    getCurrentContext: () => never
    getGlContext: (context: GLContext) => never
    getGlApi: (context: GLContext) => GLAPI
    getGlPlatform: (context: GLContext) => GLPlatform
    getProcAddress: (glApi: GLAPI, name: string | null) => any
    activate: (context: GLContext, activate: boolean) => boolean
    chooseFormat: (context: GLContext) => boolean
    createContext: (context: GLContext, glApi: GLAPI, otherContext: GLContext) => boolean
    destroyContext: (context: GLContext) => void
    swapBuffers: (context: GLContext) => void
    checkFeature: (context: GLContext, feature: string | null) => boolean
    getGlPlatformVersion: (context: GLContext) => [ /* major */ number, /* minor */ number ]
    getConfig: (context: GLContext) => Gst.Structure | null
    requestConfig: (context: GLContext, glConfig: Gst.Structure | null) => boolean
}

export abstract class GLContextClass {

    // Own properties of GstGL-1.0.GstGL.GLContextClass

    static name: string
}

export interface GLContextPrivate {
}

export class GLContextPrivate {

    // Own properties of GstGL-1.0.GstGL.GLContextPrivate

    static name: string
}

export interface GLDisplayClass {

    // Own fields of GstGL-1.0.GstGL.GLDisplayClass

    objectClass: Gst.ObjectClass
    getHandle: (display: GLDisplay) => never
    createWindow: (display: GLDisplay) => GLWindow | null
}

export abstract class GLDisplayClass {

    // Own properties of GstGL-1.0.GstGL.GLDisplayClass

    static name: string
}

export interface GLDisplayPrivate {
}

export class GLDisplayPrivate {

    // Own properties of GstGL-1.0.GstGL.GLDisplayPrivate

    static name: string
}

export interface GLFilterClass {

    // Own fields of GstGL-1.0.GstGL.GLFilterClass

    parentClass: GLBaseFilterClass
    setCaps: (filter: GLFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    filter: (filter: GLFilter, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    filterTexture: (filter: GLFilter, input: GLMemory, output: GLMemory) => boolean
    initFbo: (filter: GLFilter) => boolean
    transformInternalCaps: (filter: GLFilter, direction: Gst.PadDirection, caps: Gst.Caps, filterCaps: Gst.Caps) => Gst.Caps
}

export abstract class GLFilterClass {

    // Own properties of GstGL-1.0.GstGL.GLFilterClass

    static name: string
}

export interface GLFramebufferClass {
}

/**
 * Opaque #GstGLFramebufferClass struct
 * @record 
 */
export abstract class GLFramebufferClass {

    // Own properties of GstGL-1.0.GstGL.GLFramebufferClass

    static name: string
}

export interface GLFramebufferPrivate {
}

export class GLFramebufferPrivate {

    // Own properties of GstGL-1.0.GstGL.GLFramebufferPrivate

    static name: string
}

export interface GLFuncs {
}

/**
 * Structure containing function pointers to OpenGL functions.
 * 
 * Each field is named exactly the same as the OpenGL function without the
 * `gl` prefix.
 * @record 
 */
export class GLFuncs {

    // Own properties of GstGL-1.0.GstGL.GLFuncs

    static name: string
}

export interface GLMemory {

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
    texId: number
    /**
     * the GL texture target for this memory
     * @field 
     */
    texTarget: GLTextureTarget
    /**
     * the texture type
     * @field 
     */
    texFormat: GLFormat
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
    texScaling: number[]
    textureWrapped: boolean
    unpackLength: number
    texWidth: number

    // Owm methods of GstGL-1.0.GstGL.GLMemory

    /**
     * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
     * is specified by `tex_format,` `width` and `height`.
     * @param texId OpenGL texture id
     * @param target the #GstGLTextureTarget
     * @param texFormat the #GstGLFormat
     * @param width width of `tex_id`
     * @param height height of `tex_id`
     * @returns Whether the copy succeeded
     */
    copyInto(texId: number, target: GLTextureTarget, texFormat: GLFormat, width: number, height: number): boolean
    /**
     * Copies the texture in #GstGLMemory into the texture specified by `tex_id,`
     * `out_target,` `out_tex_format,` `out_width` and `out_height`.
     * @param texId the destination texture id
     * @param outTarget the destination #GstGLTextureTarget
     * @param outTexFormat the destination #GstGLFormat
     * @param outWidth the destination width
     * @param outHeight the destination height
     * @returns whether the copy succeeded.
     */
    copyTeximage(texId: number, outTarget: GLTextureTarget, outTexFormat: GLFormat, outWidth: number, outHeight: number): boolean
    getTextureFormat(): GLFormat
    getTextureHeight(): number
    getTextureId(): number
    getTextureTarget(): GLTextureTarget
    getTextureWidth(): number
    /**
     * Initializes `mem` with the required parameters.  `info` is assumed to have
     * already have been modified with gst_video_info_align().
     * @param allocator the #GstAllocator to initialize with
     * @param parent the parent #GstMemory to initialize with
     * @param context the #GstGLContext to initialize with
     * @param target the #GstGLTextureTarget for this #GstGLMemory
     * @param texFormat the #GstGLFormat for this #GstGLMemory
     * @param params the `GstAllocationParams` to initialize with
     * @param info the #GstVideoInfo for this #GstGLMemory
     * @param plane the plane number (starting from 0) for this #GstGLMemory
     * @param valign optional #GstVideoAlignment parameters
     * @param userData user data to call `notify` with
     * @param notify a #GDestroyNotify
     */
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, texFormat: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, userData: any | null, notify: GLib.DestroyNotify | null): void
    /**
     * Reads the texture in #GstGLMemory into `write_pointer` if no buffer is bound
     * to `GL_PIXEL_PACK_BUFFER`.  Otherwise `write_pointer` is the byte offset into
     * the currently bound `GL_PIXEL_PACK_BUFFER` buffer to store the result of
     * glReadPixels.  See the OpenGL specification for glReadPixels for more
     * details.
     * @param writePointer the data pointer to pass to glReadPixels
     * @returns whether theread operation succeeded
     */
    readPixels(writePointer: any | null): boolean
    /**
     * Reads the texture in `read_pointer` into `gl_mem`.
     * 
     * See gst_gl_memory_read_pixels() for what `read_pointer` signifies.
     * @param readPointer the data pointer to pass to glTexSubImage
     */
    texsubimage(readPointer: any | null): void
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
export class GLMemory {

    // Own properties of GstGL-1.0.GstGL.GLMemory

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLMemory

    /**
     * Initializes the GL Base Texture allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemory operation.
     */
    static initOnce(): void
}

export interface GLMemoryAllocatorClass {

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

export abstract class GLMemoryAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLMemoryAllocatorClass

    static name: string
}

export interface GLMemoryPBO {

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
     * @param texId the destination texture id
     * @param target the destination #GstGLTextureTarget
     * @param texFormat the destination #GstGLFormat
     * @param width width of `tex_id`
     * @param height height of `tex_id`
     * @param stride stride of the backing texture data
     * @param respecify whether to copy the data or copy per texel
     * @returns Whether the copy succeeded
     */
    copyIntoTexture(texId: number, target: GLTextureTarget, texFormat: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean
    /**
     * Transfer the texture data from the texture into the PBO if necessary.
     */
    downloadTransfer(): void
    /**
     * Transfer the texture data from the PBO into the texture if necessary.
     */
    uploadTransfer(): void
}

/**
 * #GstGLMemoryPBO is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLVideoAllocationParams.
 * 
 * Data is uploaded or downloaded from the GPU as is necessary.
 * @record 
 */
export class GLMemoryPBO {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBO

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLMemoryPBO

    static initOnce(): void
}

export interface GLMemoryPBOAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLMemoryPBOAllocatorClass

    parentClass: GLMemoryAllocatorClass
}

/**
 * Only contains private data
 * @record 
 */
export abstract class GLMemoryPBOAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLMemoryPBOAllocatorClass

    static name: string
}

export interface GLOverlayCompositorClass {

    // Own fields of GstGL-1.0.GstGL.GLOverlayCompositorClass

    objectClass: Gst.ObjectClass
}

export abstract class GLOverlayCompositorClass {

    // Own properties of GstGL-1.0.GstGL.GLOverlayCompositorClass

    static name: string
}

export interface GLQuery {

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
    init(context: GLContext, queryType: GLQueryType): void
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
export class GLQuery {

    // Own properties of GstGL-1.0.GstGL.GLQuery

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLQuery

    /**
     * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
     * #GstPads in `element` of `direction` for the local OpenGL context used by
     * GStreamer elements.
     * @param element a #GstElement to query from
     * @param direction the #GstPadDirection to query
     * @param contextPtr location containing the current and/or resulting                      #GstGLContext
     * @returns whether @context_ptr contains a #GstGLContext
     */
    static localGlContext(element: Gst.Element, direction: Gst.PadDirection, contextPtr: GLContext): [ /* returnType */ boolean, /* contextPtr */ GLContext ]
}

export interface GLRenderbuffer {

    // Own fields of GstGL-1.0.GstGL.GLRenderbuffer

    /**
     * the GL texture id for this memory
     * @field 
     */
    renderbufferId: number
    /**
     * the texture type
     * @field 
     */
    renderbufferFormat: GLFormat
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
    renderbufferWrapped: boolean

    // Owm methods of GstGL-1.0.GstGL.GLRenderbuffer

    getFormat(): GLFormat
    getHeight(): number
    getId(): number
    getWidth(): number
}

/**
 * GstGLRenderbuffer is a #GstGLBaseMemory subclass providing support for
 * OpenGL renderbuffers.
 * 
 * #GstGLRenderbuffer is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLRenderbufferAllocationParams.
 * @record 
 */
export class GLRenderbuffer {

    // Own properties of GstGL-1.0.GstGL.GLRenderbuffer

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLRenderbuffer

    /**
     * Initializes the GL Base Texture allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLRenderbuffer operation.
     */
    static initOnce(): void
}

export interface GLRenderbufferAllocationParams {

    // Own fields of GstGL-1.0.GstGL.GLRenderbufferAllocationParams

    /**
     * the #GstGLFormat
     * @field 
     */
    renderbufferFormat: GLFormat
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
export class GLRenderbufferAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocationParams

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLRenderbufferAllocationParams

    constructor(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number) 
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    static newWrapped(context: GLContext, allocParams: Gst.AllocationParams | null, renderbufferFormat: GLFormat, width: number, height: number, glHandle: any | null, userData: any | null, notify: GLib.DestroyNotify | null): GLRenderbufferAllocationParams
}

export interface GLRenderbufferAllocatorClass {

    // Own fields of GstGL-1.0.GstGL.GLRenderbufferAllocatorClass

    parentClass: GLBaseMemoryAllocatorClass
}

/**
 * The #GstGLRenderbufferAllocatorClass only contains private data
 * @record 
 */
export abstract class GLRenderbufferAllocatorClass {

    // Own properties of GstGL-1.0.GstGL.GLRenderbufferAllocatorClass

    static name: string
}

export interface GLSLStageClass {
}

/**
 * Opaque #GstGLSLStageClass struct
 * @record 
 */
export abstract class GLSLStageClass {

    // Own properties of GstGL-1.0.GstGL.GLSLStageClass

    static name: string
}

export interface GLSLStagePrivate {
}

export class GLSLStagePrivate {

    // Own properties of GstGL-1.0.GstGL.GLSLStagePrivate

    static name: string
}

export interface GLShaderClass {
}

export abstract class GLShaderClass {

    // Own properties of GstGL-1.0.GstGL.GLShaderClass

    static name: string
}

export interface GLShaderPrivate {
}

export class GLShaderPrivate {

    // Own properties of GstGL-1.0.GstGL.GLShaderPrivate

    static name: string
}

export interface GLSyncMeta {

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
    data: any
    setSync: (sync: GLSyncMeta, context: GLContext) => void
    setSyncGl: (sync: GLSyncMeta, context: GLContext) => void
    wait: (sync: GLSyncMeta, context: GLContext) => void
    waitGl: (sync: GLSyncMeta, context: GLContext) => void
    waitCpu: (sync: GLSyncMeta, context: GLContext) => void
    waitCpuGl: (sync: GLSyncMeta, context: GLContext) => void
    copy: (src: GLSyncMeta, sbuffer: Gst.Buffer, dest: GLSyncMeta, dbuffer: Gst.Buffer) => void
    free: (sync: GLSyncMeta, context: GLContext) => void
    freeGl: (sync: GLSyncMeta, context: GLContext) => void

    // Owm methods of GstGL-1.0.GstGL.GLSyncMeta

    /**
     * Set a sync point to possibly wait on at a later time.
     * @param context a #GstGLContext
     */
    setSyncPoint(context: GLContext): void
}

/**
 * #GstGLSyncMeta provides the ability to synchronize the OpenGL command stream
 * with the CPU or with other OpenGL contexts.
 * @record 
 */
export class GLSyncMeta {

    // Own properties of GstGL-1.0.GstGL.GLSyncMeta

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLSyncMeta

    static getInfo(): Gst.MetaInfo
}

export interface GLUploadClass {

    // Own fields of GstGL-1.0.GstGL.GLUploadClass

    objectClass: Gst.ObjectClass
}

/**
 * The #GstGLUploadClass struct only contains private data
 * @record 
 */
export abstract class GLUploadClass {

    // Own properties of GstGL-1.0.GstGL.GLUploadClass

    static name: string
}

export interface GLUploadPrivate {
}

export class GLUploadPrivate {

    // Own properties of GstGL-1.0.GstGL.GLUploadPrivate

    static name: string
}

export interface GLVideoAllocationParams {

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
    vInfo: GstVideo.VideoInfo
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
    texFormat: GLFormat

    // Owm methods of GstGL-1.0.GstGL.GLVideoAllocationParams

    /**
     * Copy and set any dynamically allocated resources in `dest_vid`.  Intended
     * for subclass usage only to chain up at the end of a subclass copy function.
     * @param destVid destination #GstGLVideoAllocationParams to copy into
     */
    copyData(destVid: GLVideoAllocationParams): void
    /**
     * Unset and free any dynamically allocated resources.  Intended for subclass
     * usage only to chain up at the end of a subclass free function.
     */
    freeData(): void
}

export class GLVideoAllocationParams {

    // Own properties of GstGL-1.0.GstGL.GLVideoAllocationParams

    static name: string

    // Constructors of GstGL-1.0.GstGL.GLVideoAllocationParams

    constructor(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat) 
    static new(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat): GLVideoAllocationParams
    static newWrappedData(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, wrappedData: any | null, userData: any | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams
    /**
     * `gl_handle` is defined by the specific OpenGL handle being wrapped
     * For #GstGLMemory and #GstGLMemoryPBO it is an OpenGL texture id.
     * Other memory types may define it to require a different type of parameter.
     * @constructor 
     * @param context a #GstGLContext
     * @param allocParams the #GstAllocationParams for `tex_id`
     * @param vInfo the #GstVideoInfo for `tex_id`
     * @param plane the video plane `tex_id` represents
     * @param valign any #GstVideoAlignment applied to symem mappings of `tex_id`
     * @param target the #GstGLTextureTarget for `tex_id`
     * @param texFormat the #GstGLFormat for `tex_id`
     * @param glHandle the GL handle to wrap
     * @param userData user data to call `notify` with
     * @param notify a #GDestroyNotify
     * @returns a new #GstGLVideoAllocationParams for wrapping @gl_handle
     */
    static newWrappedGlHandle(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, glHandle: any | null, userData: any | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams
    static newWrappedTexture(context: GLContext, allocParams: Gst.AllocationParams | null, vInfo: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, texFormat: GLFormat, texId: number, userData: any | null, notify: GLib.DestroyNotify | null): GLVideoAllocationParams
}

export interface GLViewConvertClass {
}

/**
 * Opaque #GstGLViewConvertClass struct
 * @record 
 */
export abstract class GLViewConvertClass {

    // Own properties of GstGL-1.0.GstGL.GLViewConvertClass

    static name: string
}

export interface GLViewConvertPrivate {
}

export class GLViewConvertPrivate {

    // Own properties of GstGL-1.0.GstGL.GLViewConvertPrivate

    static name: string
}

export interface GLWindowClass {

    // Own fields of GstGL-1.0.GstGL.GLWindowClass

    /**
     * Parent class
     * @field 
     */
    parentClass: Gst.ObjectClass
    getDisplay: (window: GLWindow) => never
    setWindowHandle: (window: GLWindow, handle: never) => void
    getWindowHandle: (window: GLWindow) => never
    draw: (window: GLWindow) => void
    run: (window: GLWindow) => void
    quit: (window: GLWindow) => void
    sendMessage: (window: GLWindow, callback: GLWindowCB) => void
    sendMessageAsync: (window: GLWindow, callback: GLWindowCB) => void
    open: (window: GLWindow) => boolean
    close: (window: GLWindow) => void
    handleEvents: (window: GLWindow, handleEvents: boolean) => void
    setPreferredSize: (window: GLWindow, width: number, height: number) => void
    show: (window: GLWindow) => void
    setRenderRectangle: (window: GLWindow, x: number, y: number, width: number, height: number) => boolean
    queueResize: (window: GLWindow) => void
    controlsViewport: (window: GLWindow) => boolean
    hasOutputSurface: (window: GLWindow) => boolean
}

export abstract class GLWindowClass {

    // Own properties of GstGL-1.0.GstGL.GLWindowClass

    static name: string
}

export interface GLWindowPrivate {
}

export class GLWindowPrivate {

    // Own properties of GstGL-1.0.GstGL.GLWindowPrivate

    static name: string
}
