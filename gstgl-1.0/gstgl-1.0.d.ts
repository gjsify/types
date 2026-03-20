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
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstGL {
    /**
     * GstGL-1.0
     */

    /**
     * @gir-type Struct
     */
    class GLBaseMemoryError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * generic failure
         */
        static FAILED: number;
        /**
         * the implementation is too old and doesn't
         *                                     implement enough features
         */
        static OLD_LIBS: number;
        /**
         * a resource could not be found
         */
        static RESOURCE_UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace GLConfigCaveat {
        export const $gtype: GObject.GType<GLConfigCaveat>;
    }

    /**
     * @gir-type Enum
     * @since 1.20
     */
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
     * @gir-type Struct
     */
    class GLContextError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Failed for an unspecified reason
         */
        static FAILED: number;
        /**
         * The configuration requested is not correct
         */
        static WRONG_CONFIG: number;
        /**
         * The OpenGL API requested is not correct
         */
        static WRONG_API: number;
        /**
         * The OpenGL libraries are too old
         */
        static OLD_LIBS: number;
        /**
         * glXCreateContext (or similar) failed
         */
        static CREATE_CONTEXT: number;
        /**
         * A resource is not available
         */
        static RESOURCE_UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace GLFormat {
        export const $gtype: GObject.GType<GLFormat>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace GLQueryType {
        export const $gtype: GObject.GType<GLQueryType>;
    }

    /**
     * @gir-type Enum
     */
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
     * @gir-type Struct
     */
    class GLSLError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Compilation error occurred
         */
        static COMPILE: number;
        /**
         * Link error occurred
         */
        static LINK: number;
        /**
         * General program error occurred
         */
        static PROGRAM: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * GLSL version list
     * @gir-type Struct
     */
    class GLSLVersion {
        static $gtype: GObject.GType<GLSLVersion>;

        // Static fields

        /**
         * no version
         */
        static NONE: number;
        /**
         * version 100 (only valid for ES)
         */
        static '100': number;
        /**
         * version 110 (only valid for compatibility desktop GL)
         */
        static '110': number;
        /**
         * version 120 (only valid for compatibility desktop GL)
         */
        static '120': number;
        /**
         * version 130 (only valid for compatibility desktop GL)
         */
        static '130': number;
        /**
         * version 140 (only valid for compatibility desktop GL)
         */
        static '140': number;
        /**
         * version 150 (valid for compatibility/core desktop GL)
         */
        static '150': number;
        /**
         * version 300 (only valid for ES)
         */
        static '300': number;
        /**
         * version 310 (only valid for ES)
         */
        static '310': number;
        /**
         * version 320 (only valid for ES)
         */
        static '320': number;
        /**
         * version 330 (valid for compatibility/core desktop GL)
         */
        static '330': number;
        /**
         * version 400 (valid for compatibility/core desktop GL)
         */
        static '400': number;
        /**
         * version 410 (valid for compatibility/core desktop GL)
         */
        static '410': number;
        /**
         * version 420 (valid for compatibility/core desktop GL)
         */
        static '420': number;
        /**
         * version 430 (valid for compatibility/core desktop GL)
         */
        static '430': number;
        /**
         * version 440 (valid for compatibility/core desktop GL)
         */
        static '440': number;
        /**
         * version 450 (valid for compatibility/core desktop GL)
         */
        static '450': number;
    }

    /**
     * @gir-type Enum
     */
    export namespace GLStereoDownmix {
        export const $gtype: GObject.GType<GLStereoDownmix>;
    }

    /**
     * Output anaglyph type to generate when downmixing to mono
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace GLTextureTarget {
        export const $gtype: GObject.GType<GLTextureTarget>;
    }

    /**
     * The OpenGL texture target that an OpenGL texture can be bound to.  The
     * `gst_gl_value_set_texture_target_from_mask()`,
     * `gst_gl_value_get_texture_target_mask()`, and
     * `gst_gl_value_set_texture_target()` functions can be used for handling texture
     * targets with {@link GObject.Value}'s when e.g. dealing with {@link Gst.Caps}.
     * @gir-type Enum
     * @since 1.8
     */
    enum GLTextureTarget {
        /**
         * no texture target
         */
        NONE,
        /**
         * 2D texture target (`GL_TEXTURE_2D`)
         */
        '2D',
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

    /**
     * @gir-type Enum
     */
    export namespace GLUploadReturn {
        export const $gtype: GObject.GType<GLUploadReturn>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Struct
     */
    class GLWindowError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * failed for a unspecified reason
         */
        static FAILED: number;
        /**
         * the implementation is too old
         */
        static OLD_LIBS: number;
        /**
         * no such resource was found
         */
        static RESOURCE_UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An option that can be activated on bufferpools to request OpenGL
     * synchronization metadata on buffers from the pool.
     */
    const BUFFER_POOL_OPTION_GL_SYNC_META: string;
    /**
     * String used for {@link GstGL.GLTextureTarget.2D} as a {@link Gst.BufferPool} pool option
     */
    const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string;
    /**
     * String used for {@link GstGL.GLTextureTarget.EXTERNAL_OES} as a {@link Gst.BufferPool} pool option
     */
    const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string;
    /**
     * String used for {@link GstGL.GLTextureTarget.RECTANGLE} as a {@link Gst.BufferPool} pool option
     */
    const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string;
    /**
     * Name of the caps feature indicating the use of GL buffers
     */
    const CAPS_FEATURE_MEMORY_GL_BUFFER: string;
    /**
     * Name of the caps feature for indicating the use of {@link GstGL.GLMemory}
     */
    const CAPS_FEATURE_MEMORY_GL_MEMORY: string;
    /**
     * GL Allocation flag indicating that the implementation should allocate the
     * necessary resources.
     */
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number;
    /**
     * GL allocation flag indicating the allocation of a GL buffer.
     */
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number;
    /**
     * Values >= than #GST_GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER can be used for
     * user-defined purposes.
     */
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number;
    /**
     * GL allocation flag indicating the allocation of 2D video frames
     */
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number;
    /**
     * GL Allocation flag for using the provided GPU handle as storage.
     */
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number;
    /**
     * GL Allocation flag for using the provided system memory data as storage.
     */
    const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number;
    /**
     * The name for {@link GstGL.GLAPI.GLES1} used in various places
     */
    const GL_API_GLES1_NAME: string;
    /**
     * The name for {@link GstGL.GLAPI.GLES2} used in various places
     */
    const GL_API_GLES2_NAME: string;
    /**
     * The name for {@link GstGL.GLAPI.OPENGL3} used in various places
     */
    const GL_API_OPENGL3_NAME: string;
    /**
     * The name for {@link GstGL.GLAPI.OPENGL} used in various places
     */
    const GL_API_OPENGL_NAME: string;
    /**
     * The name of the GL buffer allocator
     * @since 1.8
     */
    const GL_BASE_MEMORY_ALLOCATOR_NAME: string;
    /**
     * The name of the GL buffer allocator
     */
    const GL_BUFFER_ALLOCATOR_NAME: string;
    /**
     * The currently supported formats that can be converted
     */
    const GL_COLOR_CONVERT_FORMATS: string;
    /**
     * The currently supported {@link Gst.Caps} that can be converted
     */
    const GL_COLOR_CONVERT_VIDEO_CAPS: string;
    /**
     * The canonical name of a {@link Gst.Structure} that contains a configuration for a
     * {@link GstGL.GLContext}.
     * @since 1.20
     */
    const GL_CONFIG_STRUCTURE_NAME: string;
    const GL_CONTEXT_TYPE_CGL: string;
    const GL_CONTEXT_TYPE_EAGL: string;
    const GL_CONTEXT_TYPE_EGL: string;
    const GL_CONTEXT_TYPE_GLX: string;
    const GL_CONTEXT_TYPE_WGL: string;
    /**
     * The name used in {@link Gst.Context} queries for requesting a {@link GstGL.GLDisplay}
     */
    const GL_DISPLAY_CONTEXT_TYPE: string;
    /**
     * The name of the GL memory allocator
     */
    const GL_MEMORY_ALLOCATOR_NAME: string;
    /**
     * The name of the GL Memory PBO allocator
     */
    const GL_MEMORY_PBO_ALLOCATOR_NAME: string;
    /**
     * List of video formats that are supported by {@link GstGL.GLMemory}
     */
    const GL_MEMORY_VIDEO_FORMATS_STR: string;
    /**
     * The name of the GL renderbuffer allocator
     */
    const GL_RENDERBUFFER_ALLOCATOR_NAME: string;
    /**
     * String used for {@link GstGL.GLTextureTarget.2D} in things like caps values
     */
    const GL_TEXTURE_TARGET_2D_STR: string;
    /**
     * String used for {@link GstGL.GLTextureTarget.EXTERNAL_OES} in things like caps values
     */
    const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string;
    /**
     * String used for {@link GstGL.GLTextureTarget.RECTANGLE} in things like caps values
     */
    const GL_TEXTURE_TARGET_RECTANGLE_STR: string;
    /**
     * Flag indicating that we should map the GL object instead of to system memory.
     *
     * Combining #GST_MAP_GL with #GST_MAP_WRITE has the same semantics as though
     * you are writing to OpenGL. Conversely, combining #GST_MAP_GL with
     * #GST_MAP_READ has the same semantics as though you are reading from OpenGL.
     */
    const MAP_GL: number;
    /**
     * @param context a {@link GstGL.GLContext}
     * @param buffer a {@link Gst.Buffer}
     * @returns the {@link GstGL.GLSyncMeta} added to {@link Gst.Buffer}
     * @since 1.6
     */
    function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta;
    /**
     * @param context a {@link GstGL.GLContext}
     * @param buffer a {@link Gst.Buffer}
     * @param data sync data to hold
     * @returns the {@link GstGL.GLSyncMeta} added to {@link Gst.Buffer}
     * @since 1.8
     */
    function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data?: any | null): GLSyncMeta;
    /**
     * @param config a buffer pool config
     * @returns the currently set {@link GstGL.GLAllocationParams} or `null`
     */
    function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams | null;
    /**
     * See `gst_buffer_pool_config_set_gl_min_free_queue_size()`.
     * @param config a buffer pool config
     * @returns then number of buffers configured the free queue
     * @since 1.24
     */
    function buffer_pool_config_get_gl_min_free_queue_size(config: Gst.Structure): number;
    /**
     * Sets `params` on `config`
     * @param config a buffer pool config
     * @param params a {@link GstGL.GLAllocationParams}
     */
    function buffer_pool_config_set_gl_allocation_params(
        config: Gst.Structure,
        params?: GLAllocationParams | null,
    ): void;
    /**
     * Instructs the {@link GstGL.GLBufferPool} to keep `queue_size` amount of buffers around
     * before allowing them for reuse.
     *
     * This is helpful to allow GPU processing to complete before the CPU
     * operations on the same buffer could start.  Particularly useful when
     * uploading or downloading data to/from the GPU.
     *
     * A value of 0 disabled this functionality.
     *
     * This value must be less than the configured maximum amount of buffers for
     * this `config`.
     * @param config a buffer pool config
     * @param queue_size the number of buffers
     * @since 1.24
     */
    function buffer_pool_config_set_gl_min_free_queue_size(config: Gst.Structure, queue_size: number): void;
    /**
     * @param context a {@link Gst.Context}
     * @returns Whether `display` was in `context`
     * @since 1.4
     */
    function context_get_gl_display(context: Gst.Context): [boolean, GLDisplay | null];
    /**
     * Sets `display` on `context`
     * @param context a {@link Gst.Context}
     * @param display resulting {@link GstGL.GLDisplay}
     * @since 1.4
     */
    function context_set_gl_display(context: Gst.Context, display?: GLDisplay | null): void;
    /**
     * @param api_s a space separated string of OpenGL apis
     * @returns The {@link GstGL.GLAPI} represented by `api_s`
     */
    function gl_api_from_string(api_s: string): GLAPI;
    /**
     * @param api a {@link GstGL.GLAPI} to stringify
     * @returns A space separated string of the OpenGL api's enabled in `api`
     */
    function gl_api_to_string(api: GLAPI | null): string;
    /**
     * @param allocator a {@link GstGL.GLBaseMemoryAllocator}
     * @param params the {@link GstGL.GLAllocationParams} to allocate the memory with
     * @returns a new {@link GstGL.GLBaseMemory} from `allocator` with the requested `params`.
     * @since 1.8
     */
    function gl_base_memory_alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
    /**
     * @returns the quark used for {@link GstGL.GLBaseMemory} in {@link GLib.Error}'s
     */
    function gl_base_memory_error_quark(): GLib.Quark;
    /**
     * Initializes the GL Base Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLBaseMemory operation.
     * @since 1.8
     */
    function gl_base_memory_init_once(): void;
    /**
     * Initializes the GL Buffer allocator. It is safe to call this function
     * multiple times.  This must be called before any other {@link GstGL.GLBuffer} operation.
     * @since 1.8
     */
    function gl_buffer_init_once(): void;
    /**
     * @param name the extension to search for
     * @param ext the list of possible extensions
     * @returns whether `name` is in the space separated list of `ext`
     */
    function gl_check_extension(name: string, ext: string): boolean;
    /**
     * @param caveat the {@link GstGL.GLConfigCaveat}
     * @returns a string version of `caveat` or `null` if `caveat` does not                      exist.
     * @since 1.20
     */
    function gl_config_caveat_to_string(caveat: GLConfigCaveat | null): string | null;
    /**
     * @param surface_type the {@link GstGL.GLConfigSurfaceType}
     * @returns a string version of `caveat` or `null` if `surface_type` does not                      exist.
     * @since 1.20
     */
    function gl_config_surface_type_to_string(surface_type: GLConfigSurfaceType | null): string | null;
    /**
     * @returns the quark used for {@link GstGL.GLContext} in {@link GLib.Error}'s
     */
    function gl_context_error_quark(): GLib.Quark;
    /**
     * Given the DRM formats in `src` {@link GObject.Value}, collect corresponding GST formats to
     * `dst` {@link GObject.Value}. This function returns `false` if  the context is not an EGL
     * context.
     * @param context a {@link Gst.Context}
     * @param src value of "drm-format" field in {@link Gst.Caps} as {@link GObject.Value}
     * @param flags transformation flags
     * @param dst empty destination {@link GObject.Value}
     * @returns whether any valid GST video formats were found and stored in `dst`
     * @since 1.26
     */
    function gl_dma_buf_transform_drm_formats_to_gst_formats(
        context: GLContext,
        src: GObject.Value | any,
        flags: GLDrmFormatFlags | null,
        dst: GObject.Value | any,
    ): [boolean, unknown];
    /**
     * Given the video formats in `src` {@link GObject.Value}, collect corresponding drm formats
     * supported by `context` into `dst` {@link GObject.Value}. This function returns `false` if
     * the context is not an EGL context.
     * @param context a {@link Gst.Context}
     * @param src value of "format" field in {@link Gst.Caps} as {@link GObject.Value}
     * @param flags transformation flags
     * @param dst empty destination {@link GObject.Value}
     * @returns whether any valid drm formats were found and stored in `dst`
     * @since 1.26
     */
    function gl_dma_buf_transform_gst_formats_to_drm_formats(
        context: GLContext,
        src: GObject.Value | any,
        flags: GLDrmFormatFlags | null,
        dst: GObject.Value | any,
    ): [boolean, unknown];
    /**
     * @param element
     * @param display
     */
    function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void;
    /**
     * Perform the steps necessary for retrieving a {@link GstGL.GLDisplay} and (optionally)
     * an application provided {@link GstGL.GLContext} from the surrounding elements or from
     * the application using the {@link Gst.Context} mechanism.
     *
     * If the contents of `display_ptr` or `other_context_ptr` are not `null`, then no
     * {@link Gst.Context} query is necessary for {@link GstGL.GLDisplay} or {@link GstGL.GLContext} retrieval
     * or is performed.
     *
     * This performs {@link Gst.Context} queries (if necessary) for a winsys display
     * connection with `GST_GL_DISPLAY_CONTEXT_TYPE`, "gst.x11.display.handle", and
     * "GstWaylandDisplayHandleContextType" stopping after the first successful
     * retrieval.
     *
     * This also performs a {@link Gst.Context} query (if necessary) for an optional
     * application provided {@link GstGL.GLContext} using the name "gst.gl.app_context".
     * The returned {@link GstGL.GLContext} will be shared with a GStreamer created OpenGL context.
     * @param element the {@link Gst.Element} running the query
     * @param display_ptr the resulting {@link GstGL.GLDisplay}
     * @param other_context_ptr the resulting {@link GstGL.GLContext}
     * @returns whether a {@link GstGL.GLDisplay} exists in `display_ptr`
     */
    function gl_ensure_element_data(
        element: Gst.Element,
        display_ptr: GLDisplay,
        other_context_ptr: GLContext,
    ): [boolean, GLDisplay, GLContext];
    /**
     * @param context a {@link GstGL.GLContext}
     * @param vinfo a {@link GstVideo.VideoInfo}
     * @param plane the plane number in `vinfo`
     * @returns the {@link GstGL.GLFormat} necessary for holding the data in `plane` of `vinfo`
     */
    function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat;
    /**
     * @param context a {@link GstGL.GLContext}
     * @param format the {@link GstGL.GLFormat} to check is supported by `context`
     * @returns Whether `format` is supported by `context` based on the OpenGL API,          version, or available OpenGL extension/s.
     * @since 1.16
     */
    function gl_format_is_supported(context: GLContext, format: GLFormat | null): boolean;
    /**
     * @param gl_format the {@link GstGL.GLFormat}
     * @returns the number of components in a {@link GstGL.GLFormat}
     * @since 1.24
     */
    function gl_format_n_components(gl_format: GLFormat | null): number;
    /**
     * Get the unsized format and type from `format` for usage in glReadPixels,
     * glTex{Sub}Image*, glTexImage* and similar functions.
     * @param format the sized internal {@link GstGL.GLFormat}
     * @since 1.16
     */
    function gl_format_type_from_sized_gl_format(format: GLFormat | null): [GLFormat, number];
    /**
     * @param format the OpenGL format, `GL_RGBA`, `GL_LUMINANCE`, etc
     * @param type the OpenGL type, `GL_UNSIGNED_BYTE`, `GL_FLOAT`, etc
     * @returns the number of bytes the specified `format`, `type` combination takes per pixel
     */
    function gl_format_type_n_bytes(format: number, type: number): number;
    /**
     * Retrieves the stored 4x4 affine transformation matrix stored in `meta` in
     * NDC coordinates. if `meta` is NULL, an identity matrix is returned.
     *
     * NDC is a left-handed coordinate system
     * - x - [-1, 1] - +ve X moves right
     * - y - [-1, 1] - +ve Y moves up
     * - z - [-1, 1] - +ve Z moves into
     * @param meta a {@link GstVideo.VideoAffineTransformationMeta}
     * @since 1.20
     */
    function gl_get_affine_transformation_meta_as_ndc(meta: GstVideo.VideoAffineTransformationMeta | null): number[];
    /**
     * Retrieve the size in bytes of a video plane of data with a certain alignment
     * @param info a {@link GstVideo.VideoInfo}
     * @param align a {@link GstVideo.VideoAlignment} or `null`
     * @param plane plane number in `info` to retrieve the data size of
     */
    function gl_get_plane_data_size(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number;
    /**
     * @param info a {@link GstVideo.VideoInfo}
     * @param valign a {@link GstVideo.VideoAlignment} or `null`
     * @param plane plane number in `info` to retrieve the data size of
     * @returns difference between the supposed start of the plane from the `info`          and where the data from the previous plane ends.
     */
    function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number;
    /**
     * @param element a {@link Gst.Element}
     * @param query a {@link Gst.Query} of type {@link Gst.QueryType.CONTEXT}
     * @param display a {@link GstGL.GLDisplay}
     * @param context a {@link GstGL.GLContext}
     * @param other_context application provided {@link GstGL.GLContext}
     * @returns Whether the `query` was successfully responded to from the passed          `display`, `context`, and `other_context`.
     */
    function gl_handle_context_query(
        element: Gst.Element,
        query: Gst.Query,
        display?: GLDisplay | null,
        context?: GLContext | null,
        other_context?: GLContext | null,
    ): boolean;
    /**
     * Helper function for implementing {@link Gst.ElementClass}.set_context() in
     * OpenGL capable elements.
     *
     * Retrieve's the {@link GstGL.GLDisplay} or {@link GstGL.GLContext} in `context` and places the
     * result in `display` or `other_context` respectively.
     * @param element a {@link Gst.Element}
     * @param context a {@link Gst.Context}
     * @returns whether the `display` or `other_context` could be set successfully
     */
    function gl_handle_set_context(element: Gst.Element, context: Gst.Context): [boolean, GLDisplay, GLContext];
    /**
     * Initializes the GL Base Texture allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemory operation.
     * @since 1.4
     */
    function gl_memory_init_once(): void;
    function gl_memory_pbo_init_once(): void;
    /**
     * Multiplies two 4x4 matrices, `a` and `b`, and stores the result, a
     * 2-dimensional array of `gfloat`, in `result`.
     * @param a a 2-dimensional 4x4 array of `gfloat`
     * @param b another 2-dimensional 4x4 array of `gfloat`
     * @since 1.20
     */
    function gl_multiply_matrix4(a: number[], b: number[]): number[];
    /**
     * @param platform_s a space separated string of OpenGL platformss
     * @returns The {@link GstGL.GLPlatform} represented by `platform_s`
     */
    function gl_platform_from_string(platform_s: string): GLPlatform;
    /**
     * @param platform a {@link GstGL.GLPlatform} to stringify
     * @returns A space separated string of the OpenGL platforms enabled in `platform`
     */
    function gl_platform_to_string(platform: GLPlatform | null): string;
    /**
     * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
     * `GstPads` in `element` of `direction` for the local OpenGL context used by
     * GStreamer elements.
     * @param element a {@link Gst.Element} to query from
     * @param direction the {@link Gst.PadDirection} to query
     * @param context_ptr location containing the current and/or resulting                      {@link GstGL.GLContext}
     * @returns whether `context_ptr` contains a {@link GstGL.GLContext}
     */
    function gl_query_local_gl_context(
        element: Gst.Element,
        direction: Gst.PadDirection | null,
        context_ptr: GLContext,
    ): [boolean, GLContext];
    /**
     * Initializes the GL Base Texture allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLRenderbuffer operation.
     * @since 1.10
     */
    function gl_renderbuffer_init_once(): void;
    /**
     * Set the 4x4 affine transformation matrix stored in `meta` from the
     * NDC coordinates in `matrix`.
     * @param meta a {@link GstVideo.VideoAffineTransformationMeta}
     * @param matrix a 4x4 matrix
     * @since 1.20
     */
    function gl_set_affine_transformation_meta_from_ndc(
        meta: GstVideo.VideoAffineTransformationMeta,
        matrix: number[],
    ): void;
    /**
     * @param context a {@link GstGL.GLContext}
     * @param format an OpenGL format, `GL_RGBA`, `GL_LUMINANCE`, etc
     * @param type an OpenGL type, `GL_UNSIGNED_BYTE`, `GL_FLOAT`, etc
     * @returns the sized internal format specified by `format` and `type` that can          be used in `context`
     */
    function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number;
    function gl_stereo_downmix_mode_get_type(): GObject.GType;
    /**
     * Given `swizzle`, produce `inversion` such that:
     *
     * `swizzle`[`inversion`[i]] == identity[i] where:
     * - identity = {0, 1, 2,...}
     * - unset fields are marked by -1
     * @param swizzle input swizzle
     * @since 1.24
     */
    function gl_swizzle_invert(swizzle: number[]): number[];
    function gl_sync_meta_api_get_type(): GObject.GType;
    function gl_sync_meta_get_info(): Gst.MetaInfo;
    /**
     * @param target an OpenGL texture binding target
     * @returns the {@link GstGL.GLTextureTarget} that's equiavalant to `target` or          {@link GstGL.GLTextureTarget.NONE}
     */
    function gl_texture_target_from_gl(target: number): GLTextureTarget;
    /**
     * @param str a string equivalent to one of the GST_GL_TEXTURE_TARGET_*_STR values
     * @returns the {@link GstGL.GLTextureTarget} represented by `str` or          {@link GstGL.GLTextureTarget.NONE}
     */
    function gl_texture_target_from_string(str: string): GLTextureTarget;
    /**
     * @param target a {@link GstGL.GLTextureTarget}
     * @returns a string representing the `GstBufferPoolOption` specified by `target`
     */
    function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget | null): string | null;
    /**
     * @param target a {@link GstGL.GLTextureTarget}
     * @returns the OpenGL value for binding the `target` with glBindTexture() and          similar functions or 0
     */
    function gl_texture_target_to_gl(target: GLTextureTarget | null): number;
    /**
     * @param target a {@link GstGL.GLTextureTarget}
     * @returns the stringified version of `target` or `null`
     */
    function gl_texture_target_to_string(target: GLTextureTarget | null): string | null;
    /**
     * See `gst_gl_value_set_texture_target_from_mask()` for what entails a mask
     * @param value an initialized {@link GObject.Value} of type G_TYPE_STRING
     * @returns the mask of {@link GstGL.GLTextureTarget}'s in `value` or     {@link GstGL.GLTextureTarget.NONE} on failure
     */
    function gl_value_get_texture_target_mask(value: GObject.Value | any): GLTextureTarget;
    /**
     * @param value an initialized {@link GObject.Value} of type G_TYPE_STRING
     * @param target a {@link GstGL.GLTextureTarget}'s
     * @returns whether the `target` could be set on `value`
     */
    function gl_value_set_texture_target(value: GObject.Value | any, target: GLTextureTarget | null): boolean;
    /**
     * A mask is a bitwise OR of (1 << target) where target is a valid
     * {@link GstGL.GLTextureTarget}
     * @param value an uninitialized {@link GObject.Value}
     * @param target_mask a bitwise mask of {@link GstGL.GLTextureTarget}'s
     * @returns whether the `target_mask` could be set on `value`
     */
    function gl_value_set_texture_target_from_mask(
        value: GObject.Value | any,
        target_mask: GLTextureTarget | null,
    ): boolean;
    /**
     * @param gl_api the {@link GstGL.GLAPI}
     * @param maj the major GL version
     * @param min the minor GL version
     * @returns The minimum supported {@link GstGL.GLSLVersion} available for `gl_api`, `maj` and `min`
     */
    function gl_version_to_glsl_version(gl_api: GLAPI | null, maj: number, min: number): GLSLVersion;
    /**
     * Calculates the swizzle indices for `video_format` and `gl_format` in order to
     * access a texture such that accessing a texel from a texture through the swizzle
     * index produces values in the order (R, G, B, A) or (Y, U, V, A).
     *
     * For multi-planer formats, the swizzle index uses the same component order (RGBA/YUVA)
     * and should be applied after combining multiple planes into a single rgba/yuva value.
     * e.g. sampling from a NV12 format would have Y from one texture and UV from
     * another texture into a (Y, U, V) value.  Add an Aplha component and then
     * perform swizzling.  Sampling from NV21 would produce (Y, V, U) which is then
     * swizzled to (Y, U, V).
     * @param video_format the {@link GstVideo.VideoFormat} in use
     * @returns whether valid swizzle indices could be found
     * @since 1.24
     */
    function gl_video_format_swizzle(video_format: GstVideo.VideoFormat | null): [boolean, number[]];
    /**
     * @returns the quark used for {@link GstGL.GLWindow} in {@link GLib.Error}'s
     */
    function gl_window_error_quark(): GLib.Quark;
    /**
     * @returns the quark used for GstGLSL in {@link GLib.Error}'s
     */
    function glsl_error_quark(): GLib.Quark;
    /**
     * @param string a GLSL version string
     * @returns the {@link GstGL.GLSLProfile} of `string` or {@link GstGL.GLSLProfile.NONE} on error
     */
    function glsl_profile_from_string(string: string): GLSLProfile;
    /**
     * @param profile a {@link GstGL.GLSLProfile}
     * @returns the name for `profile` or `null` on error
     */
    function glsl_profile_to_string(profile: GLSLProfile | null): string | null;
    /**
     * Note: this function first searches the first 1 kilobytes for a `{@link Gst.version}`
     * preprocessor directive and then executes `gst_glsl_version_profile_from_string()`.
     * @param s string to search for a valid `{@link Gst.version}` string
     * @returns TRUE if a valid `{@link Gst.version}` string was found, FALSE otherwise
     */
    function glsl_string_get_version_profile(s: string): [boolean, GLSLVersion, GLSLProfile];
    /**
     * @param string a GLSL version string
     * @returns the {@link GstGL.GLSLVersion} of `string` or {@link GstGL.GLSLVersion.NONE} on error
     */
    function glsl_version_from_string(string: string): GLSLVersion;
    /**
     * Note: this function expects either a `{@link Gst.version}` GLSL preprocesser directive
     * or a valid GLSL version and/or profile.
     * @param string a valid GLSL `{@link Gst.version}` string
     * @returns TRUE if a valid `{@link Gst.version}` string was found, FALSE otherwise
     */
    function glsl_version_profile_from_string(string: string): [boolean, GLSLVersion, GLSLProfile];
    /**
     * @param version a {@link GstGL.GLSLVersion}
     * @param profile a {@link GstGL.GLSLVersion}
     * @returns the combined GLSL `{@link Gst.version}` string for `version` and `profile`
     */
    function glsl_version_profile_to_string(version: GLSLVersion | null, profile: GLSLProfile | null): string | null;
    /**
     * @param version a {@link GstGL.GLSLVersion}
     * @returns the name of `version` or `null` on error
     */
    function glsl_version_to_string(version: GLSLVersion | null): string | null;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstGL.GLBaseMemory}
     * @since 1.8
     */
    function is_gl_base_memory(mem: Gst.Memory): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstGL.GLBuffer}
     * @since 1.8
     */
    function is_gl_buffer(mem: Gst.Memory): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstGL.GLMemory}
     * @since 1.4
     */
    function is_gl_memory(mem: Gst.Memory): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstGL.GLMemoryPBO}
     * @since 1.8
     */
    function is_gl_memory_pbo(mem: Gst.Memory): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstGL.GLRenderbuffer}
     * @since 1.10
     */
    function is_gl_renderbuffer(mem: Gst.Memory): boolean;
    /**
     * @gir-type Callback
     */
    interface GLAllocationParamsCopyFunc {
        (src: GLAllocationParams, dest: GLAllocationParams): void;
    }
    /**
     * @gir-type Callback
     */
    interface GLAllocationParamsFreeFunc {
        (params?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface GLAsyncDebugLogGetMessage {
        (user_data?: any | null): string;
    }
    /**
     * @gir-type Callback
     */
    interface GLBaseMemoryAllocatorAllocFunction {
        (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
    }
    /**
     * @gir-type Callback
     */
    interface GLBaseMemoryAllocatorCopyFunction {
        (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory | null;
    }
    /**
     * @gir-type Callback
     */
    interface GLBaseMemoryAllocatorCreateFunction {
        (mem: GLBaseMemory): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface GLBaseMemoryAllocatorDestroyFunction {
        (mem: GLBaseMemory): void;
    }
    /**
     * @gir-type Callback
     */
    interface GLBaseMemoryAllocatorMapFunction {
        (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): any | null;
    }
    /**
     * @gir-type Callback
     */
    interface GLBaseMemoryAllocatorUnmapFunction {
        (mem: GLBaseMemory, info: Gst.MapInfo): void;
    }
    /**
     * @gir-type Callback
     */
    interface GLContextThreadFunc {
        (context: GLContext, data?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface GLFilterRenderFunc {
        (filter: GLFilter, in_tex: GLMemory): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface GLFramebufferFunc {
        (stuff?: any | null): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface GLWindowCB {
        (data?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface GLWindowResizeCB {
        (data: any | null, width: number, height: number): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace GLAPI {
        export const $gtype: GObject.GType<GLAPI>;
    }

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
    export namespace GLBaseMemoryTransfer {
        export const $gtype: GObject.GType<GLBaseMemoryTransfer>;
    }

    /**
     * @gir-type Flags
     */
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

    /**
     * @gir-type Flags
     */
    export namespace GLConfigSurfaceType {
        export const $gtype: GObject.GType<GLConfigSurfaceType>;
    }

    /**
     * @gir-type Flags
     * @since 1.20
     */
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

    /**
     * @gir-type Flags
     */
    export namespace GLDisplayType {
        export const $gtype: GObject.GType<GLDisplayType>;
    }

    /**
     * @gir-type Flags
     */
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
         * Mesa3D surfaceless display using the EGL_PLATFORM_SURFACELESS_MESA
         * extension.
         */
        EGL_SURFACELESS,
        /**
         * any display type
         */
        ANY,
    }

    /**
     * @gir-type Flags
     */
    export namespace GLDrmFormatFlags {
        export const $gtype: GObject.GType<GLDrmFormatFlags>;
    }

    /**
     * @gir-type Flags
     * @since 1.26
     */
    enum GLDrmFormatFlags {
        /**
         * include external-only formats
         */
        INCLUDE_EXTERNAL,
        /**
         * only include formats with linear modifier
         */
        LINEAR_ONLY,
        /**
         * include emulated formats
         */
        INCLUDE_EMULATED,
        /**
         * EGL is responsible for the colorspace conversion. In this case, all
         * supported modifiers get translated to RGBA.
         */
        DIRECT_IMPORT,
    }

    /**
     * @gir-type Flags
     */
    export namespace GLPlatform {
        export const $gtype: GObject.GType<GLPlatform>;
    }

    /**
     * @gir-type Flags
     */
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
     * @gir-type Flags
     */
    export namespace GLSLProfile {
        export const $gtype: GObject.GType<GLSLProfile>;
    }

    /**
     * GLSL profiles
     * @gir-type Flags
     * @since 1.8
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

    namespace GLBaseFilter {
        // Signal signatures
        interface SignalSignatures extends GstBase.BaseTransform.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {
            context: GLContext;
        }
    }

    /**
     * {@link GstGL.GLBaseFilter} handles the nitty gritty details of retrieving an OpenGL
     * context.  It also provided some wrappers around {@link GstBase.BaseTransform}'s
     * `start()`, `stop()` and `set_caps()` virtual methods that ensure an OpenGL
     * context is available and current in the calling thread.
     * @gir-type Class
     */
    class GLBaseFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<GLBaseFilter>;

        // Properties

        /**
         * @read-only
         */
        get context(): GLContext;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBaseFilter.SignalSignatures;

        // Fields

        display: GLDisplay;

        // Constructors

        constructor(properties?: Partial<GLBaseFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLBaseFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBaseFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBaseFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBaseFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * called in the GL thread when caps are set on `filter`.
         *               Note: this will also be called when changing OpenGL contexts
         *               where {@link GstBase.BaseTransform.SignalSignatures.set_caps | GstBase.BaseTransform::set_caps} may not.
         * @param incaps
         * @param outcaps
         * @virtual
         */
        vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
        /**
         * called in the GL thread to setup the element GL state.
         * @virtual
         */
        vfunc_gl_start(): boolean;
        /**
         * called in the GL thread to setup the element GL state.
         * @virtual
         */
        vfunc_gl_stop(): void;

        // Methods

        /**
         * @returns Whether an OpenGL context could be retrieved or created successfully
         */
        find_gl_context(): boolean;
        /**
         * @returns the {@link GstGL.GLContext} found by `filter`
         */
        get_gl_context(): GLContext | null;
    }

    namespace GLBaseMemoryAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque {@link GstGL.GLBaseMemoryAllocator} struct
     * @gir-type Class
     * @since 1.8
     */
    abstract class GLBaseMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<GLBaseMemoryAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBaseMemoryAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLBaseMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLBaseMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBaseMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBaseMemoryAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBaseMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * a {@link GstGL.GLBaseMemoryAllocatorAllocFunction}
         * @param params the {@link GstGL.GLAllocationParams} to allocate the memory with
         * @virtual
         */
        vfunc_alloc(params: GLAllocationParams): GLBaseMemory | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gst.Allocator.vfunc_alloc
        vfunc_alloc(...args: never[]): any;
    }

    namespace GLBaseMixer {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoAggregator.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::force-live': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::min-upstream-latency': (pspec: GObject.ParamSpec) => void;
            'notify::start-time': (pspec: GObject.ParamSpec) => void;
            'notify::start-time-selection': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoAggregator.ConstructorProps {
            context: GLContext;
        }
    }

    /**
     * {@link GstGL.GLBaseMixer} handles the nitty gritty details of retrieving an OpenGL
     * context.  It provides some virtual methods to know when the OpenGL context
     * is available and is not available within this element.
     * @gir-type Class
     * @since 1.24
     */
    abstract class GLBaseMixer extends GstVideo.VideoAggregator {
        static $gtype: GObject.GType<GLBaseMixer>;

        // Properties

        /**
         * The {@link GstGL.GLContext} in use by this {@link GstGL.GLBaseMixer}
         * @since 1.24
         * @read-only
         */
        get context(): GLContext;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBaseMixer.SignalSignatures;

        // Fields

        display: GLDisplay;

        // Constructors

        constructor(properties?: Partial<GLBaseMixer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLBaseMixer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseMixer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBaseMixer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseMixer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBaseMixer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBaseMixer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * called in the GL thread to setup the element GL state.
         * @virtual
         */
        vfunc_gl_start(): boolean;
        /**
         * called in the GL thread to setup the element GL state.
         * @virtual
         */
        vfunc_gl_stop(): void;

        // Methods

        /**
         * @returns the {@link GstGL.GLContext} found by `mix`
         */
        get_gl_context(): GLContext | null;
    }

    namespace GLBaseMixerPad {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoAggregatorPad.SignalSignatures {
            'notify::max-last-buffer-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::repeat-after-eos': (pspec: GObject.ParamSpec) => void;
            'notify::zorder': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-time': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoAggregatorPad.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.24
     */
    class GLBaseMixerPad extends GstVideo.VideoAggregatorPad {
        static $gtype: GObject.GType<GLBaseMixerPad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBaseMixerPad.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLBaseMixerPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLBaseMixerPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseMixerPad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBaseMixerPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseMixerPad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBaseMixerPad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBaseMixerPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GLBaseSrc {
        // Signal signatures
        interface SignalSignatures extends GstBase.PushSrc.SignalSignatures {
            'notify::timestamp-offset': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-eos': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.PushSrc.ConstructorProps {
            timestamp_offset: number;
            timestampOffset: number;
        }
    }

    /**
     * {@link GstGL.GLBaseSrc} handles the nitty gritty details of retrieving an OpenGL
     * context. It also provided some wrappers around {@link GstBase.BaseSrc}'s `start()` and
     * `stop()` virtual methods that ensure an OpenGL context is available and
     * current in the calling thread.
     * @gir-type Class
     * @since 1.18
     */
    abstract class GLBaseSrc extends GstBase.PushSrc {
        static $gtype: GObject.GType<GLBaseSrc>;

        // Properties

        get timestamp_offset(): number;
        set timestamp_offset(val: number);
        get timestampOffset(): number;
        set timestampOffset(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBaseSrc.SignalSignatures;

        // Fields

        display: GLDisplay;
        context: GLContext;
        running_time: Gst.ClockTime;

        // Constructors

        constructor(properties?: Partial<GLBaseSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLBaseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBaseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBaseSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBaseSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBaseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * called in the GL thread to fill the current video texture.
         * @param mem
         * @virtual
         */
        vfunc_fill_gl_memory(mem: GLMemory): boolean;
        /**
         * called in the GL thread to setup the element GL state.
         * @virtual
         */
        vfunc_gl_start(): boolean;
        /**
         * called in the GL thread to setup the element GL state.
         * @virtual
         */
        vfunc_gl_stop(): void;

        // Methods

        /**
         * @returns the configured {@link GstGL.GLContext}.
         */
        get_gl_context(): GLContext | null;
    }

    namespace GLBufferAllocator {
        // Signal signatures
        interface SignalSignatures extends GLBaseMemoryAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
    }

    /**
     * Opaque {@link GstGL.GLBufferAllocator} struct
     * @gir-type Class
     */
    class GLBufferAllocator extends GLBaseMemoryAllocator {
        static $gtype: GObject.GType<GLBufferAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBufferAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLBufferAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLBufferAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBufferAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBufferAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBufferAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBufferAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBufferAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GLBufferPool {
        // Signal signatures
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * a {@link GstGL.GLBufferPool} is an object that allocates buffers with {@link GstGL.GLBaseMemory}
     *
     * A {@link GstGL.GLBufferPool} is created with `gst_gl_buffer_pool_new()`
     *
     * {@link GstGL.GLBufferPool} implements the VideoMeta buffer pool option
     * `GST_BUFFER_POOL_OPTION_VIDEO_META`, the VideoAligment buffer pool option
     * `GST_BUFFER_POOL_OPTION_VIDEO_ALIGNMENT` as well as the OpenGL specific
     * `GST_BUFFER_POOL_OPTION_GL_SYNC_META` buffer pool option.
     * @gir-type Class
     */
    class GLBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<GLBufferPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLBufferPool.SignalSignatures;

        // Fields

        bufferpool: Gst.BufferPool;
        context: GLContext;

        // Constructors

        constructor(properties?: Partial<GLBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext): GLBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof GLBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * The returned {@link GstGL.GLAllocationParams} will by `null` before the first successful
         * call to `gst_buffer_pool_set_config()`.  Subsequent successful calls to
         * `gst_buffer_pool_set_config()` will cause this function to return a new
         * {@link GstGL.GLAllocationParams} which may or may not contain the same information.
         * @returns a copy of the {@link GstGL.GLAllocationParams} being used by the `pool`
         */
        get_gl_allocation_params(): GLAllocationParams | null;
    }

    namespace GLColorConvert {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLColorConvert} is an object that converts between color spaces and/or
     * formats using OpenGL Shaders.
     *
     * A {@link GstGL.GLColorConvert} can be created with `gst_gl_color_convert_new()`, the
     * configuration negotiated with `gst_gl_color_convert_transform_caps()` and the
     * conversion performed with `gst_gl_color_convert_perform()`.
     *
     * The glcolorconvertelement provides a GStreamer element that uses
     * {@link GstGL.GLColorConvert} to convert between video formats and color spaces.
     * @gir-type Class
     */
    class GLColorConvert extends Gst.Object {
        static $gtype: GObject.GType<GLColorConvert>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLColorConvert.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLColorConvert.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext): GLColorConvert;

        // Signals

        /** @signal */
        connect<K extends keyof GLColorConvert.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLColorConvert.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLColorConvert.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLColorConvert.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLColorConvert.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLColorConvert.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Provides an implementation of {@link GstBase.BaseTransformClass}.fixate_caps()
         * @param context a {@link GstGL.GLContext} to use for transforming `caps`
         * @param direction a {@link Gst.PadDirection}
         * @param caps the {@link Gst.Caps} of `direction`
         * @param other the {@link Gst.Caps} to fixate
         */
        static fixate_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps;
        /**
         * @param context a {@link GstGL.GLContext}
         */
        static swizzle_shader_string(context: GLContext): string;
        /**
         * Provides an implementation of {@link GstBase.BaseTransformClass}.transform_caps()
         * @param context a {@link GstGL.GLContext} to use for transforming `caps`
         * @param direction a {@link Gst.PadDirection}
         * @param caps the {@link Gst.Caps} to transform
         * @param filter a set of filter {@link Gst.Caps}
         */
        static transform_caps(
            context: GLContext,
            direction: Gst.PadDirection,
            caps: Gst.Caps,
            filter: Gst.Caps,
        ): Gst.Caps;
        /**
         * The returned glsl function has declaration:
         *
         * `vec3 yuv_to_rgb (vec3 rgb, vec3 offset, vec3 ycoeff, vec3 ucoeff, vec3 vcoeff);`
         *
         * The Y component is placed in the 0th index of the returned value, The U component in the
         * 1st, and the V component in the 2nd.  offset, ycoeff, ucoeff, and vcoeff are the
         * specific coefficients and offset used for the conversion.
         * @param context a {@link GstGL.GLContext}
         */
        static yuv_to_rgb_shader_string(context: GLContext): string;

        // Methods

        /**
         * Provides an implementation of {@link GstBase.BaseTransformClass}.decide_allocation()
         * @param query a completed ALLOCATION {@link Gst.Query}
         * @returns whether the allocation parameters were successfully chosen
         */
        decide_allocation(query: Gst.Query): boolean;
        /**
         * Converts the data contained by `inbuf` using the formats specified by the
         * {@link Gst.Caps} passed to `gst_gl_color_convert_set_caps()`
         * @param inbuf the {@link GstGL.GLMemory} filled {@link Gst.Buffer} to convert
         * @returns a converted {@link Gst.Buffer} or `null`
         */
        perform(inbuf: Gst.Buffer): Gst.Buffer | null;
        /**
         * Initializes `convert` with the information required for conversion.
         * @param in_caps input {@link Gst.Caps}
         * @param out_caps output {@link Gst.Caps}
         */
        set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
    }

    namespace GLContext {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLContext} wraps an OpenGL context object in a uniform API.  As a result
     * of the limitation on OpenGL context, this object is not thread safe unless
     * specified and must only be activated in a single thread.
     *
     * Environment variables:
     * - `GST_GL_API`: select which OpenGL API to create and OpenGL context for.
     *                 Depending on the platform, the available values are
     *                 'opengl', 'opengl3' (core profile), and 'gles2'.  See the
     *                 the {@link GstGL.GLAPI} enumeration for more details.
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
     * @gir-type Class
     */
    abstract class GLContext extends Gst.Object {
        static $gtype: GObject.GType<GLContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: GLDisplay): GLContext;

        static new_wrapped(
            display: GLDisplay,
            handle: never,
            context_type: GLPlatform,
            available_apis: GLAPI,
        ): GLContext;

        // Signals

        /** @signal */
        connect<K extends keyof GLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * A default implementation of the various GetProcAddress functions that looks
         * for `name` in the OpenGL shared libraries or in the current process.
         *
         * See also: `gst_gl_context_get_proc_address()`
         * @param gl_api a {@link GstGL.GLAPI}
         * @param name then function to get the address of
         */
        static default_get_proc_address(gl_api: GLAPI, name: string): any | null;
        /**
         * See also `gst_gl_context_activate()`.
         */
        static get_current(): GLContext | null;
        /**
         * If an error occurs, `major` and `minor` are not modified and {@link GstGL.GLAPI.NONE} is
         * returned.
         * @param platform the {@link GstGL.GLPlatform} to retrieve the API for
         */
        static get_current_gl_api(platform: GLPlatform): [GLAPI, number, number];
        /**
         * @param context_type a {@link GstGL.GLPlatform} specifying the type of context to retrieve
         */
        static get_current_gl_context(context_type: GLPlatform): never | null;
        /**
         * Attempts to use the `context_type` specific GetProcAddress implementations
         * to retrieve `name`.
         *
         * See also `gst_gl_context_get_proc_address()`.
         * @param context_type a {@link GstGL.GLPlatform}
         * @param gl_api a {@link GstGL.GLAPI}
         * @param name the name of the function to retrieve
         */
        static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): any | null;

        // Virtual methods

        /**
         * (De)activate the OpenGL context represented by this `context`.
         *
         * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
         * currently set window.  See `gst_gl_context_set_window()` for details.
         * @param activate `true` to activate, `false` to deactivate
         * @virtual
         */
        vfunc_activate(activate: boolean): boolean;
        /**
         * Check for an OpenGL `feature` being supported.
         *
         * Note: Most features require that the context be created before it is
         * possible to determine their existence and so will fail if that is not the
         * case.
         * @param feature a platform specific feature
         * @virtual
         */
        vfunc_check_feature(feature: string): boolean;
        /**
         * choose a format for the framebuffer
         * @virtual
         */
        vfunc_choose_format(): boolean;
        /**
         * create the OpenGL context
         * @param gl_api
         * @param other_context
         * @virtual
         */
        vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean;
        /**
         * destroy the OpenGL context
         * @virtual
         */
        vfunc_destroy_context(): void;
        /**
         * Retrieve the OpenGL configuration for this context.  The context must
         * have been successfully created for this function to return a valid value.
         *
         * Not all implementations currently support retrieving the config and will
         * return `null` when not supported.
         * @virtual
         */
        vfunc_get_config(): Gst.Structure | null;
        /**
         * Get the currently enabled OpenGL api.
         *
         * The currently available API may be limited by the {@link GstGL.GLDisplay} in use and/or
         * the {@link GstGL.GLWindow} chosen.
         * @virtual
         */
        vfunc_get_gl_api(): GLAPI;
        /**
         * Gets the backing OpenGL context used by `context`.
         * @virtual
         */
        vfunc_get_gl_context(): never;
        /**
         * Gets the OpenGL platform that used by `context`.
         * @virtual
         */
        vfunc_get_gl_platform(): GLPlatform;
        /**
         * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
         * after a call to `gst_gl_context_create()`.
         * @virtual
         */
        vfunc_get_gl_platform_version(): [number, number];
        /**
         * Set the OpenGL configuration for this context.  The context must not
         * have been created for this function to succeed.  Setting a `null`
         * `config` has the affect of removing any specific configuration request.
         *
         * Not all implementations currently support retrieving the config and this
         * function will return FALSE when not supported.
         *
         * Note that calling this function may cause a subsequent
         * `gst_gl_context_create()` to fail if `config` could not be matched with
         * the platform-specific configuration.
         *
         * Note that the actual config used may be differ from the requested values.
         * @param gl_config a configuration structure for             configuring the OpenGL context
         * @virtual
         */
        vfunc_request_config(gl_config?: Gst.Structure | null): boolean;
        /**
         * Swap the front and back buffers on the window attached to `context`.
         * This will display the frame on the next refresh cycle.
         * @virtual
         */
        vfunc_swap_buffers(): void;

        // Methods

        /**
         * (De)activate the OpenGL context represented by this `context`.
         *
         * In OpenGL terms, calls eglMakeCurrent or similar with this context and the
         * currently set window.  See `gst_gl_context_set_window()` for details.
         * @param activate `true` to activate, `false` to deactivate
         * @returns Whether the activation succeeded
         */
        activate(activate: boolean): boolean;
        /**
         * Note: This will always fail for two wrapped {@link GstGL.GLContext}'s
         * @param other_context another {@link GstGL.GLContext}
         * @returns whether `context` and `other_context` are able to share OpenGL      resources.
         */
        can_share(other_context: GLContext): boolean;
        /**
         * Check for an OpenGL `feature` being supported.
         *
         * Note: Most features require that the context be created before it is
         * possible to determine their existence and so will fail if that is not the
         * case.
         * @param feature a platform specific feature
         * @returns Whether `feature` is supported by `context`
         */
        check_feature(feature: string): boolean;
        /**
         * Must be called with `context` current.
         * @param fbo_target the GL value of the framebuffer target, GL_FRAMEBUFFER,              GL_READ_FRAMEBUFFER, GL_DRAW_FRAMEBUFFER
         * @returns whether whether the current framebuffer is complete
         */
        check_framebuffer_status(fbo_target: number): boolean;
        /**
         * @param api api type required
         * @param maj major version required
         * @param min minor version required
         * @returns whether OpenGL context implements the required api and specified version.
         */
        check_gl_version(api: GLAPI | null, maj: number, min: number): boolean;
        /**
         * Unbind the current framebuffer
         */
        clear_framebuffer(): void;
        /**
         * Clear's the currently set shader from the GL state machine.
         *
         * Note: must be called in the GL thread.
         */
        clear_shader(): void;
        /**
         * Creates an OpenGL context with the specified `other_context` as a context
         * to share shareable OpenGL objects with.  See the OpenGL specification for
         * what is shared between OpenGL contexts.
         *
         * Since 1.20, the configuration can be overriden with the environment variable
         * `GST_GL_CONFIG` which is a stringified {@link Gst.Structure} as would be returned
         * from `gst_gl_context_get_config()`.  If `GST_GL_CONFIG` is not set, then the
         * config will be chosen from `other_context` by calling
         * `gst_gl_context_get_config()` on `other_context`.  Otherwise, a default
         * configuration is used.
         *
         * Calling `gst_gl_context_request_config()`) before calling
         * `gst_gl_context_create()` will override the config from `other_context` but
         * will not override the `GST_GL_CONFIG` environment variable.
         *
         * If an error occurs, and `error` is not `null`, then `error` will contain
         * details of the error and `false` will be returned.
         *
         * Should only be called once.
         * @param other_context a {@link GstGL.GLContext} to share OpenGL objects with
         * @returns whether the context could successfully be created
         */
        create(other_context?: GLContext | null): boolean;
        /**
         * Destroys an OpenGL context.
         *
         * Should only be called after `gst_gl_context_create()` has been successfully
         * called for this context.
         */
        destroy(): void;
        /**
         * Fills `context`'s info (version, extensions, vtable, etc) from the GL
         * context in the current thread.  Typically used with wrapped contexts to
         * allow wrapped contexts to be used as regular {@link GstGL.GLContext}'s.
         */
        fill_info(): boolean;
        /**
         * Retrieve the OpenGL configuration for this context.  The context must
         * have been successfully created for this function to return a valid value.
         *
         * Not all implementations currently support retrieving the config and will
         * return `null` when not supported.
         * @returns the configuration chosen for this OpenGL context.
         */
        get_config(): Gst.Structure | null;
        /**
         * @returns the {@link GstGL.GLDisplay} associated with this `context`
         */
        get_display(): GLDisplay;
        /**
         * Get the currently enabled OpenGL api.
         *
         * The currently available API may be limited by the {@link GstGL.GLDisplay} in use and/or
         * the {@link GstGL.GLWindow} chosen.
         * @returns the available OpenGL api
         */
        get_gl_api(): GLAPI;
        /**
         * Gets the backing OpenGL context used by `context`.
         * @returns The platform specific backing OpenGL context
         */
        get_gl_context(): never;
        /**
         * Gets the OpenGL platform that used by `context`.
         * @returns The platform specific backing OpenGL context
         */
        get_gl_platform(): GLPlatform;
        /**
         * Get the version of the OpenGL platform (GLX, EGL, etc) used.  Only valid
         * after a call to `gst_gl_context_create()`.
         */
        get_gl_platform_version(): [number, number];
        /**
         * Returns the OpenGL version implemented by `context`.  See
         * `gst_gl_context_get_gl_api()` for retrieving the OpenGL api implemented by
         * `context`.
         */
        get_gl_version(): [number, number];
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
         * @returns a function pointer or `null`
         */
        get_proc_address(name: string): any | null;
        /**
         * @returns The {@link GLib.Thread}, `context` is current in or NULL
         */
        get_thread(): GLib.Thread | null;
        /**
         * @returns the currently set window
         */
        get_window(): GLWindow | null;
        /**
         * @returns Whether the {@link GstGL.GLContext} has been shared with another {@link GstGL.GLContext}
         */
        is_shared(): boolean;
        /**
         * Set the OpenGL configuration for this context.  The context must not
         * have been created for this function to succeed.  Setting a `null`
         * `config` has the affect of removing any specific configuration request.
         *
         * Not all implementations currently support retrieving the config and this
         * function will return FALSE when not supported.
         *
         * Note that calling this function may cause a subsequent
         * `gst_gl_context_create()` to fail if `config` could not be matched with
         * the platform-specific configuration.
         *
         * Note that the actual config used may be differ from the requested values.
         * @param gl_config a configuration structure for             configuring the OpenGL context
         * @returns whether `gl_config` could be successfully set on `context`
         */
        request_config(gl_config?: Gst.Structure | null): boolean;
        /**
         * Will internally set `context` as shared with `share`
         * @param share another {@link GstGL.GLContext}
         */
        set_shared_with(share: GLContext): void;
        /**
         * Set's the current window on `context` to `window`.  The window can only be
         * changed before `gst_gl_context_create()` has been called and the `window` is not
         * already running.
         * @param window a {@link GstGL.GLWindow}
         * @returns Whether the window was successfully updated
         */
        set_window(window: GLWindow): boolean;
        /**
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         * @returns Whether `context` supports the combination of `version` with `profile`
         */
        supports_glsl_profile_version(version: GLSLVersion | null, profile: GLSLProfile | null): boolean;
        /**
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         * @returns whether `context` supports the 'precision' specifier in GLSL shaders
         */
        supports_precision(version: GLSLVersion | null, profile: GLSLProfile | null): boolean;
        /**
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         * @returns whether `context` supports the 'precision highp' specifier in GLSL shaders
         */
        supports_precision_highp(version: GLSLVersion | null, profile: GLSLProfile | null): boolean;
        /**
         * Swap the front and back buffers on the window attached to `context`.
         * This will display the frame on the next refresh cycle.
         */
        swap_buffers(): void;
        /**
         * Execute `func` in the OpenGL thread of `context` with `data`
         *
         * MT-safe
         * @param func a {@link GstGL.GLContextThreadFunc}
         */
        thread_add(func: GLContextThreadFunc): void;
    }

    namespace GLDisplay {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Overrides the `GstGLContext` creation mechanism.
             * It can be called in any thread and it is emitted with
             * display's object lock held.
             * @signal
             * @run-last
             */
            'create-context': (arg0: GLContext) => GLContext | null;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLDisplay} represents a connection to the underlying windowing system.
     * Elements are required to make use of {@link Gst.Context} to share and propagate
     * a {@link GstGL.GLDisplay}.
     *
     * There are a number of environment variables that influence the choice of
     * platform and window system specific functionality.
     * - GST_GL_WINDOW influences the window system to use.  Common values are
     *   'x11', 'wayland', 'surfaceless', 'win32' or 'cocoa'.
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
     * @gir-type Class
     */
    class GLDisplay extends Gst.Object {
        static $gtype: GObject.GType<GLDisplay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GLDisplay;

        static new_with_type(type: GLDisplayType): GLDisplay;

        // Signals

        /** @signal */
        connect<K extends keyof GLDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_create_window(): GLWindow | null;
        /**
         * @virtual
         */
        vfunc_get_handle(): never;

        // Methods

        /**
         * @param context a {@link GstGL.GLContext}
         * @returns whether `context` was successfully added. `false` may be returned if there already exists another context for `context`'s active thread. Must be called with the object lock held.
         */
        add_context(context: GLContext): boolean;
        /**
         * It requires the display's object lock to be held.
         * @param other_context other {@link GstGL.GLContext} to share resources with.
         * @returns whether a new context could be created.
         */
        create_context(other_context: GLContext | null): [boolean, GLContext];
        /**
         * @returns a new {@link GstGL.GLWindow} for `display` or `null`.
         */
        create_window(): GLWindow | null;
        /**
         * Ensures that the display has a valid GL context for the current thread. If
         * `context` already contains a valid context, this does nothing.
         * @param other_context other {@link GstGL.GLContext} to share resources with.
         * @param context the resulting {@link GstGL.GLContext}
         * @returns wether `context` contains a valid context.
         */
        ensure_context(other_context?: GLContext | null, context?: GLContext | null): [boolean, GLContext | null];
        /**
         * limit the use of OpenGL to the requested `gl_api`.  This is intended to allow
         * application and elements to request a specific set of OpenGL API's based on
         * what they support.  See `gst_gl_context_get_gl_api()` for the retrieving the
         * API supported by a {@link GstGL.GLContext}.
         * @param gl_api a {@link GstGL.GLAPI} to filter with
         */
        filter_gl_api(gl_api: GLAPI | null): void;
        /**
         * Execute `compare_func` over the list of windows stored by `display`.  The
         * first argument to `compare_func` is the {@link GstGL.GLWindow} being checked and the
         * second argument is `data`.
         * @param data some data to pass to `compare_func`
         * @param compare_func a comparison function to run
         * @returns The first {@link GstGL.GLWindow} that causes a match          from `compare_func`
         */
        find_window(data: any | null, compare_func: GLib.CompareFunc): GLWindow | null;
        /**
         * see `gst_gl_display_filter_gl_api()` for what the returned value represents
         * @returns the {@link GstGL.GLAPI} configured for `display`
         */
        get_gl_api(): GLAPI;
        get_gl_api_unlocked(): GLAPI;
        /**
         * @param thread a {@link GLib.Thread}
         * @returns the {@link GstGL.GLContext} current on `thread` or `null` Must be called with the object lock held.
         */
        get_gl_context_for_thread(thread: GLib.Thread): GLContext | null;
        /**
         * @returns the native handle for the display
         */
        get_handle(): never;
        /**
         * @returns the {@link GstGL.GLDisplayType} of `display`
         */
        get_handle_type(): GLDisplayType;
        /**
         * Must be called with the object lock held.
         * @param context the {@link GstGL.GLContext} to remove
         */
        remove_context(context: GLContext): void;
        /**
         * @param window a {@link GstGL.GLWindow} to remove
         * @returns if `window` could be removed from `display`
         */
        remove_window(window: GLWindow): boolean;
        /**
         * Execute `compare_func` over the list of windows stored by `display`.  The
         * first argument to `compare_func` is the {@link GstGL.GLWindow} being checked and the
         * second argument is `data`.
         * @param data some data to pass to `compare_func`
         * @param compare_func a comparison function to run
         * @returns The first {@link GstGL.GLWindow} that causes a match          from `compare_func`
         */
        retrieve_window(data: any | null, compare_func: GLib.CompareFunc): GLWindow | null;
    }

    namespace GLFilter {
        // Signal signatures
        interface SignalSignatures extends GLBaseFilter.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLBaseFilter.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLFilter} helps to implement simple OpenGL filter elements taking a
     * single input and producing a single output with a {@link GstGL.GLFramebuffer}
     * @gir-type Class
     */
    class GLFilter extends GLBaseFilter {
        static $gtype: GObject.GType<GLFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLFilter.SignalSignatures;

        // Fields

        in_texture_target: GLTextureTarget;
        out_texture_target: GLTextureTarget;
        fbo: GLFramebuffer;

        // Constructors

        constructor(properties?: Partial<GLFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param klass
         */
        static add_rgba_pad_templates(klass: typeof GLFilter): void;

        // Virtual methods

        /**
         * perform operations on the input and output buffers.  In general,
         *          you should avoid using this method if at all possible. One valid
         *          use-case for using this is keeping previous buffers for future calculations.
         *          Note: If `filter` exists, then `filter_texture` is not run
         * @param inbuf
         * @param outbuf
         * @virtual
         */
        vfunc_filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean;
        /**
         * Calls filter_texture vfunc with correctly mapped `GstGLMemorys`
         * @param input an input buffer
         * @param output an output buffer
         * @virtual
         */
        vfunc_filter_texture(input: GLMemory, output: GLMemory): boolean;
        /**
         * perform initialization when the Framebuffer object is created
         * @virtual
         */
        vfunc_init_fbo(): boolean;
        /**
         * mirror from {@link GstBase.BaseTransform}
         * @param incaps
         * @param outcaps
         * @virtual
         */
        vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
        /**
         * Perform sub-class specific modifications of the
         *   caps to be processed between upload on input and before download for output.
         * @param direction
         * @param caps
         * @param filter_caps
         * @virtual
         */
        vfunc_transform_internal_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps): Gst.Caps;

        // Methods

        /**
         * Render a fullscreen quad using the current GL state.  The only GL state this
         * modifies is the necessary vertex/index buffers and, if necessary, a
         * Vertex Array Object for drawing a fullscreen quad.  Framebuffer state,
         * any shaders, viewport state, etc must be setup by the caller.
         */
        draw_fullscreen_quad(): void;
        /**
         * Calls filter_texture vfunc with correctly mapped `GstGLMemorys`
         * @param input an input buffer
         * @param output an output buffer
         * @returns whether the transformation succeeded
         */
        filter_texture(input: Gst.Buffer, output: Gst.Buffer): boolean;
        /**
         * Transforms `input` into `output` using `func` on through FBO.
         * @param input the input texture
         * @param output the output texture
         * @param func the function to transform `input` into `output`. called with `data`
         * @returns the return value of `func`
         */
        render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean;
        /**
         * Transforms `input` into `output` using `shader` with a FBO.
         *
         * See also: `gst_gl_filter_render_to_target()`
         * @param input the input texture
         * @param output the output texture
         * @param shader the shader to use.
         */
        render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void;
    }

    namespace GLFramebuffer {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * A {@link GstGL.GLFramebuffer} represents and holds an OpenGL framebuffer object with
     * it's associated attachments.
     *
     * A {@link GstGL.GLFramebuffer} can be created with `gst_gl_framebuffer_new()` or
     * `gst_gl_framebuffer_new_with_default_depth()` and bound with
     * `gst_gl_framebuffer_bind()`.  Other resources can be bound with
     * `gst_gl_framebuffer_attach()`
     *
     * Note: OpenGL framebuffers are not shareable resources so cannot be used
     * between multiple OpenGL contexts.
     * @gir-type Class
     * @since 1.10
     */
    class GLFramebuffer extends Gst.Object {
        static $gtype: GObject.GType<GLFramebuffer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLFramebuffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLFramebuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext): GLFramebuffer;

        static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer;

        // Signals

        /** @signal */
        connect<K extends keyof GLFramebuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLFramebuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLFramebuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLFramebuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLFramebuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLFramebuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * attach `mem` to `attachment_point`
         *
         * Must be called with the same OpenGL context current that `fb` was created
         * with.
         * @param attachment_point the OpenGL attachment point to bind `mem` to
         * @param mem the memory object to bind to `attachment_point`
         */
        attach(attachment_point: number, mem: GLBaseMemory): void;
        /**
         * Bind `fb` into the current thread
         *
         * Must be called with the same OpenGL context current that `fb` was created
         * with.
         */
        bind(): void;
        /**
         * Perform the steps necessary to have the output of a glDraw* command in
         * `func` update the contents of `mem`.
         *
         * Note: this function does not map `mem` for writing with OpenGL and that must
         * be done manually by the caller using any of the mapping functions such as
         * `gst_memory_map()` with the map flags {@link Gst.MapFlags.WRITE} | `GST_MAP_GL`.
         *
         * Must be called with the same OpenGL context current that `fb` was created
         * with.
         * @param mem the {@link GstGL.GLMemory} to draw to
         * @param func the function to run
         * @returns the result of executing `func`
         */
        draw_to_texture(mem: GLMemory, func: GLFramebufferFunc): boolean;
        /**
         * Retrieve the effective dimensions from the current attachments attached to
         * `fb`.
         */
        get_effective_dimensions(): [number, number];
        /**
         * @returns the OpenGL id for `fb`
         */
        get_id(): number;
    }

    namespace GLMemoryAllocator {
        // Signal signatures
        interface SignalSignatures extends GLBaseMemoryAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
    }

    /**
     * Opaque {@link GstGL.GLMemoryAllocator} struct
     * @gir-type Class
     */
    class GLMemoryAllocator extends GLBaseMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLMemoryAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLMemoryAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param context a {@link GstGL.GLContext}
         */
        static get_default(context: GLContext): GLMemoryAllocator;
    }

    namespace GLMemoryPBOAllocator {
        // Signal signatures
        interface SignalSignatures extends GLMemoryAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLMemoryAllocator.ConstructorProps {}
    }

    /**
     * Opaque {@link GstGL.GLMemoryPBOAllocator} struct
     * @gir-type Class
     */
    class GLMemoryPBOAllocator extends GLMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryPBOAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLMemoryPBOAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLMemoryPBOAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLMemoryPBOAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMemoryPBOAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLMemoryPBOAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMemoryPBOAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLMemoryPBOAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLMemoryPBOAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GLMixer {
        // Signal signatures
        interface SignalSignatures extends GLBaseMixer.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::force-live': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::min-upstream-latency': (pspec: GObject.ParamSpec) => void;
            'notify::start-time': (pspec: GObject.ParamSpec) => void;
            'notify::start-time-selection': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLBaseMixer.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLMixer} helps implement an element that operates on RGBA textures.
     * @gir-type Class
     * @since 1.24
     */
    abstract class GLMixer extends GLBaseMixer {
        static $gtype: GObject.GType<GLMixer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLMixer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLMixer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLMixer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMixer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLMixer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMixer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLMixer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLMixer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static add_rgba_pad_templates(): void;

        // Virtual methods

        /**
         * Perform operations on the input buffers to produce an
         * output buffer.
         * @param outbuf
         * @virtual
         */
        vfunc_process_buffers(outbuf: Gst.Buffer): boolean;
        /**
         * Perform processing required and call {@link GstGL.GLMixerClass.SignalSignatures.process_textures | GstGL.GLMixerClass::process_textures}().
         * Intended for use within implementations of
         * {@link GstGL.GLMixerClass.SignalSignatures.process_buffers | GstGL.GLMixerClass::process_buffers}().
         * @param out_tex
         * @virtual
         */
        vfunc_process_textures(out_tex: GLMemory): boolean;

        // Methods

        /**
         * @returns (nullable): The {@link GstGL.GLFramebuffer} in use by this `mix`
         */
        get_framebuffer(): GLFramebuffer;
        /**
         * Perform processing required and call {@link GstGL.GLMixerClass.SignalSignatures.process_textures | GstGL.GLMixerClass::process_textures}().
         * Intended for use within implementations of
         * {@link GstGL.GLMixerClass.SignalSignatures.process_buffers | GstGL.GLMixerClass::process_buffers}().
         * @param outbuf output `GstBuffer`
         * @returns whether processing of textures succeeded
         */
        process_textures(outbuf: Gst.Buffer): boolean;
    }

    namespace GLMixerPad {
        // Signal signatures
        interface SignalSignatures extends GLBaseMixerPad.SignalSignatures {
            'notify::max-last-buffer-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::repeat-after-eos': (pspec: GObject.ParamSpec) => void;
            'notify::zorder': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-time': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLBaseMixerPad.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.24
     */
    class GLMixerPad extends GLBaseMixerPad {
        static $gtype: GObject.GType<GLMixerPad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLMixerPad.SignalSignatures;

        // Fields

        current_texture: number;

        // Constructors

        constructor(properties?: Partial<GLMixerPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLMixerPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMixerPad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLMixerPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMixerPad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLMixerPad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLMixerPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GLOverlayCompositor {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::yinvert': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            yinvert: boolean;
        }
    }

    /**
     * Opaque {@link GstGL.GLOverlayCompositor} object
     * @gir-type Class
     */
    class GLOverlayCompositor extends Gst.Object {
        static $gtype: GObject.GType<GLOverlayCompositor>;

        // Properties

        get yinvert(): boolean;
        set yinvert(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLOverlayCompositor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLOverlayCompositor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext): GLOverlayCompositor;

        // Signals

        /** @signal */
        connect<K extends keyof GLOverlayCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLOverlayCompositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLOverlayCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLOverlayCompositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLOverlayCompositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLOverlayCompositor.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param caps
         */
        static add_caps(caps: Gst.Caps): Gst.Caps;

        // Methods

        draw_overlays(): void;
        free_overlays(): void;
        /**
         * @param buf
         */
        upload_overlays(buf: Gst.Buffer): void;
    }

    namespace GLRenderbufferAllocator {
        // Signal signatures
        interface SignalSignatures extends GLBaseMemoryAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GLBaseMemoryAllocator.ConstructorProps {}
    }

    /**
     * Opaque {@link GstGL.GLRenderbufferAllocator} struct
     * @gir-type Class
     */
    class GLRenderbufferAllocator extends GLBaseMemoryAllocator {
        static $gtype: GObject.GType<GLRenderbufferAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLRenderbufferAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLRenderbufferAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLRenderbufferAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLRenderbufferAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLRenderbufferAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLRenderbufferAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLRenderbufferAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLRenderbufferAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GLSLStage {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLSLStage} holds and represents a single OpenGL shader stage.
     * @gir-type Class
     */
    class GLSLStage extends Gst.Object {
        static $gtype: GObject.GType<GLSLStage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLSLStage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLSLStage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext, type: number): GLSLStage;

        static new_default_fragment(context: GLContext): GLSLStage;

        static new_default_vertex(context: GLContext): GLSLStage;

        static new_with_string(
            context: GLContext,
            type: number,
            version: GLSLVersion,
            profile: GLSLProfile,
            str: string,
        ): GLSLStage;

        static new_with_strings(
            context: GLContext,
            type: number,
            version: GLSLVersion,
            profile: GLSLProfile,
            str: string[],
        ): GLSLStage;

        // Signals

        /** @signal */
        connect<K extends keyof GLSLStage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLSLStage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLSLStage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLSLStage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLSLStage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLSLStage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns whether the compilation succeeded
         */
        compile(): boolean;
        /**
         * @returns The GL handle for this shader stage
         */
        get_handle(): number;
        /**
         * @returns The GLSL profile for the current shader stage
         */
        get_profile(): GLSLProfile;
        /**
         * @returns The GL shader type for this shader stage
         */
        get_shader_type(): number;
        /**
         * @returns The GLSL version for the current shader stage
         */
        get_version(): GLSLVersion;
        /**
         * Replaces the current shader string with `str`.
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         * @param str a GLSL shader string
         */
        set_strings(version: GLSLVersion | null, profile: GLSLProfile | null, str: string[]): boolean;
    }

    namespace GLShader {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::linked': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            linked: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class GLShader extends Gst.Object {
        static $gtype: GObject.GType<GLShader>;

        // Properties

        /**
         * @read-only
         */
        get linked(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLShader.SignalSignatures;

        // Fields

        context: GLContext;

        // Constructors

        constructor(properties?: Partial<GLShader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext): GLShader;

        static new_default(context: GLContext): GLShader;

        // Signals

        /** @signal */
        connect<K extends keyof GLShader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLShader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLShader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLShader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLShader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLShader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param context a {@link GstGL.GLContext}
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         */
        static string_fragment_external_oes_get_default(
            context: GLContext,
            version: GLSLVersion,
            profile: GLSLProfile,
        ): string;
        /**
         * @param context a {@link GstGL.GLContext}
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         */
        static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;
        /**
         * Generates a shader string that defines the precision of float types in
         * GLSL shaders.  This is particularly needed for fragment shaders in a
         * GLSL ES context where there is no default precision specified.
         *
         * Practically, this will return the string 'precision mediump float'
         * or 'precision highp float' depending on if high precision floats are
         * determined to be supported.
         * @param context a {@link GstGL.GLContext}
         * @param version a {@link GstGL.GLSLVersion}
         * @param profile a {@link GstGL.GLSLProfile}
         */
        static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string;

        // Methods

        /**
         * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
         * with `gst_glsl_stage_compile()`.
         *
         * Note: must be called in the GL thread
         * @param stage a {@link GstGL.GLSLStage} to attach
         * @returns whether `stage` could be attached to `shader`
         */
        attach(stage: GLSLStage): boolean;
        /**
         * Attaches `stage` to `shader`.  `stage` must have been successfully compiled
         * with `gst_glsl_stage_compile()`.
         *
         * Note: must be called in the GL thread
         * @param stage a {@link GstGL.GLSLStage} to attach
         * @returns whether `stage` could be attached to `shader`
         */
        attach_unlocked(stage: GLSLStage): boolean;
        /**
         * Bind attribute `name` to the specified location `index` using
         * `glBindAttributeLocation()`.
         * @param index attribute index to set
         * @param name name of the attribute
         */
        bind_attribute_location(index: number, name: string): void;
        /**
         * Bind attribute `name` to the specified location `index` using
         * `glBindFragDataLocation()`.
         * @param index attribute index to set
         * @param name name of the attribute
         */
        bind_frag_data_location(index: number, name: string): void;
        /**
         * Compiles `stage` and attaches it to `shader`.
         *
         * Note: must be called in the GL thread
         * @param stage a {@link GstGL.GLSLStage} to attach
         * @returns whether `stage` could be compiled and attached to `shader`
         */
        compile_attach_stage(stage: GLSLStage): boolean;
        /**
         * Detaches `stage` from `shader`.  `stage` must have been successfully attached
         * to `shader` with `gst_gl_shader_attach()` or `gst_gl_shader_attach_unlocked()`.
         *
         * Note: must be called in the GL thread
         * @param stage a {@link GstGL.GLSLStage} to attach
         */
        detach(stage: GLSLStage): void;
        /**
         * Detaches `stage` from `shader`.  `stage` must have been successfully attached
         * to `shader` with `gst_gl_shader_attach()` or `gst_gl_shader_attach_unlocked()`.
         *
         * Note: must be called in the GL thread
         * @param stage a {@link GstGL.GLSLStage} to attach
         */
        detach_unlocked(stage: GLSLStage): void;
        /**
         * @param name name of the attribute
         * @returns the attribute index for `name` in `shader` or -1 on failure
         */
        get_attribute_location(name: string): number;
        /**
         * @returns the GL program handle for this shader
         */
        get_program_handle(): number;
        /**
         * Note: must be called in the GL thread
         * @returns whether `shader` has been successfully linked
         */
        is_linked(): boolean;
        /**
         * Links the current list of {@link GstGL.GLSLStage}'s in `shader`.
         *
         * Note: must be called in the GL thread
         * @returns whether `shader` could be linked together.
         */
        link(): boolean;
        /**
         * Releases the shader and stages.
         *
         * Note: must be called in the GL thread
         */
        release(): void;
        /**
         * Releases the shader and stages.
         *
         * Note: must be called in the GL thread
         */
        release_unlocked(): void;
        /**
         * Perform `glUniform1f()` for `name` on `shader`
         * @param name name of the uniform
         * @param value value to set
         */
        set_uniform_1f(name: string, value: number): void;
        /**
         * Perform `glUniform1fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_1fv(name: string, value: number[]): void;
        /**
         * Perform `glUniform1i()` for `name` on `shader`
         * @param name name of the uniform
         * @param value value to set
         */
        set_uniform_1i(name: string, value: number): void;
        /**
         * Perform `glUniform1iv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_1iv(name: string, value: number[]): void;
        /**
         * Perform `glUniform2f()` for `name` on `shader`
         * @param name name of the uniform
         * @param v0 first value to set
         * @param v1 second value to set
         */
        set_uniform_2f(name: string, v0: number, v1: number): void;
        /**
         * Perform `glUniform2fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_2fv(name: string, value: number[]): void;
        /**
         * Perform `glUniform2i()` for `name` on `shader`
         * @param name name of the uniform
         * @param v0 first value to set
         * @param v1 second value to set
         */
        set_uniform_2i(name: string, v0: number, v1: number): void;
        /**
         * Perform `glUniform2iv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_2iv(name: string, value: number[]): void;
        /**
         * Perform `glUniform3f()` for `name` on `shader`
         * @param name name of the uniform
         * @param v0 first value to set
         * @param v1 second value to set
         * @param v2 third value to set
         */
        set_uniform_3f(name: string, v0: number, v1: number, v2: number): void;
        /**
         * Perform `glUniform3fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_3fv(name: string, value: number[]): void;
        /**
         * Perform `glUniform3i()` for `name` on `shader`
         * @param name name of the uniform
         * @param v0 first value to set
         * @param v1 second value to set
         * @param v2 third value to set
         */
        set_uniform_3i(name: string, v0: number, v1: number, v2: number): void;
        /**
         * Perform `glUniform3iv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_3iv(name: string, value: number[]): void;
        /**
         * Perform `glUniform4f()` for `name` on `shader`
         * @param name name of the uniform
         * @param v0 first value to set
         * @param v1 second value to set
         * @param v2 third value to set
         * @param v3 fourth value to set
         */
        set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void;
        /**
         * Perform `glUniform4fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_4fv(name: string, value: number[]): void;
        /**
         * Perform `glUniform4i()` for `name` on `shader`
         * @param name name of the uniform
         * @param v0 first value to set
         * @param v1 second value to set
         * @param v2 third value to set
         * @param v3 fourth value to set
         */
        set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void;
        /**
         * Perform `glUniform4iv()` for `name` on `shader`
         * @param name name of the uniform
         * @param value values to set
         */
        set_uniform_4iv(name: string, value: number[]): void;
        /**
         * Perform `glUniformMatrix2fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 2x2 matrices to set
         * @param transpose transpose the matrix
         * @param value matrix to set
         */
        set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix2x3fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 2x3 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix2x4fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 2x4 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix3fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 3x3 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix3x2fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 3x2 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix3x4fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 3x4 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix4fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 4x4 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix4x2fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 4x2 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Perform `glUniformMatrix4x3fv()` for `name` on `shader`
         * @param name name of the uniform
         * @param count number of 4x3 matrices to set
         * @param transpose transpose the matrix
         * @param value values to set
         */
        set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void;
        /**
         * Mark's `shader` as being used for the next GL draw command.
         *
         * Note: must be called in the GL thread and `shader` must have been linked.
         */
        use(): void;
    }

    namespace GLUpload {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * {@link GstGL.GLUpload} is an object that uploads data from system memory into GL textures.
     *
     * A {@link GstGL.GLUpload} can be created with `gst_gl_upload_new()`
     * @gir-type Class
     */
    class GLUpload extends Gst.Object {
        static $gtype: GObject.GType<GLUpload>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLUpload.SignalSignatures;

        // Fields

        context: GLContext;

        // Constructors

        constructor(properties?: Partial<GLUpload.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GLContext): GLUpload;

        // Signals

        /** @signal */
        connect<K extends keyof GLUpload.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLUpload.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLUpload.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLUpload.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLUpload.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLUpload.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_input_template_caps(): Gst.Caps;

        // Methods

        /**
         * Fixate the `othercaps` based on the information of the `caps`.
         * @param direction the pad {@link Gst.PadDirection}
         * @param caps a {@link Gst.Caps} as the reference
         * @param othercaps a {@link Gst.Caps} to fixate
         * @returns the fixated caps
         */
        fixate_caps(direction: Gst.PadDirection | null, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
        get_caps(): [Gst.Caps | null, Gst.Caps | null];
        /**
         * Uploads `buffer` using the transformation specified by
         * `gst_gl_upload_set_caps()` creating a new {@link Gst.Buffer} in `outbuf_ptr`.
         * @param buffer input {@link Gst.Buffer}
         * @returns whether the upload was successful
         */
        perform_with_buffer(buffer: Gst.Buffer): [GLUploadReturn, Gst.Buffer];
        /**
         * Adds the required allocation parameters to support uploading.
         * @param decide_query a {@link Gst.Query} from a decide allocation
         * @param query the proposed allocation query
         */
        propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void;
        /**
         * Initializes `upload` with the information required for upload.
         * @param in_caps input {@link Gst.Caps}
         * @param out_caps output {@link Gst.Caps}
         * @returns whether `in_caps` and `out_caps` could be set on `upload`
         */
        set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
        /**
         * @param context
         */
        set_context(context: GLContext): void;
        /**
         * @param context
         * @param direction
         * @param caps
         * @param filter
         */
        transform_caps(
            context: GLContext,
            direction: Gst.PadDirection | null,
            caps: Gst.Caps,
            filter: Gst.Caps,
        ): Gst.Caps;
    }

    namespace GLViewConvert {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::downmix-mode': (pspec: GObject.ParamSpec) => void;
            'notify::input-flags-override': (pspec: GObject.ParamSpec) => void;
            'notify::input-mode-override': (pspec: GObject.ParamSpec) => void;
            'notify::output-flags-override': (pspec: GObject.ParamSpec) => void;
            'notify::output-mode-override': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            downmix_mode: GLStereoDownmix;
            downmixMode: GLStereoDownmix;
            input_flags_override: GstVideo.VideoMultiviewFlags;
            inputFlagsOverride: GstVideo.VideoMultiviewFlags;
            input_mode_override: GstVideo.VideoMultiviewMode;
            inputModeOverride: GstVideo.VideoMultiviewMode;
            output_flags_override: GstVideo.VideoMultiviewFlags;
            outputFlagsOverride: GstVideo.VideoMultiviewFlags;
            output_mode_override: GstVideo.VideoMultiviewMode;
            outputModeOverride: GstVideo.VideoMultiviewMode;
        }
    }

    /**
     * Convert stereoscopic/multiview video using fragment shaders.
     * @gir-type Class
     */
    class GLViewConvert extends Gst.Object {
        static $gtype: GObject.GType<GLViewConvert>;

        // Properties

        get downmix_mode(): GLStereoDownmix;
        set downmix_mode(val: GLStereoDownmix);
        get downmixMode(): GLStereoDownmix;
        set downmixMode(val: GLStereoDownmix);
        get input_flags_override(): GstVideo.VideoMultiviewFlags;
        set input_flags_override(val: GstVideo.VideoMultiviewFlags);
        get inputFlagsOverride(): GstVideo.VideoMultiviewFlags;
        set inputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
        get input_mode_override(): GstVideo.VideoMultiviewMode;
        set input_mode_override(val: GstVideo.VideoMultiviewMode);
        get inputModeOverride(): GstVideo.VideoMultiviewMode;
        set inputModeOverride(val: GstVideo.VideoMultiviewMode);
        get output_flags_override(): GstVideo.VideoMultiviewFlags;
        set output_flags_override(val: GstVideo.VideoMultiviewFlags);
        get outputFlagsOverride(): GstVideo.VideoMultiviewFlags;
        set outputFlagsOverride(val: GstVideo.VideoMultiviewFlags);
        get output_mode_override(): GstVideo.VideoMultiviewMode;
        set output_mode_override(val: GstVideo.VideoMultiviewMode);
        get outputModeOverride(): GstVideo.VideoMultiviewMode;
        set outputModeOverride(val: GstVideo.VideoMultiviewMode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLViewConvert.SignalSignatures;

        // Fields

        object: Gst.Object;
        context: GLContext;
        shader: GLShader;
        from_texture_target: GLTextureTarget;
        to_texture_target: GLTextureTarget;
        caps_passthrough: boolean;
        initted: boolean;
        reconfigure: boolean;
        fbo: GLFramebuffer;

        // Constructors

        constructor(properties?: Partial<GLViewConvert.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GLViewConvert;

        // Signals

        /** @signal */
        connect<K extends keyof GLViewConvert.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLViewConvert.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLViewConvert.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLViewConvert.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLViewConvert.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLViewConvert.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Provides an implementation of {@link GstBase.BaseTransformClass}.fixate_caps()
         * @param direction a {@link Gst.PadDirection}
         * @param caps the {@link Gst.Caps} of `direction`
         * @param othercaps the {@link Gst.Caps} to fixate
         * @returns the fixated {@link Gst.Caps}
         */
        fixate_caps(direction: Gst.PadDirection | null, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
        /**
         * Retrieve the processed output buffer placing the output in `outbuf_ptr`.
         * @returns a {@link Gst.FlowReturn}
         */
        get_output(): [Gst.FlowReturn, Gst.Buffer];
        /**
         * Converts the data contained by `inbuf` using the formats specified by the
         * {@link Gst.Caps} passed to `gst_gl_view_convert_set_caps()`
         * @param inbuf the {@link GstGL.GLMemory} filled {@link Gst.Buffer} to convert
         * @returns a converted {@link Gst.Buffer} or `null`
         */
        perform(inbuf: Gst.Buffer): Gst.Buffer | null;
        /**
         * Reset `viewconvert` to the default state.  Further operation will require
         * setting the caps with `gst_gl_view_convert_set_caps()`.
         */
        reset(): void;
        /**
         * Initializes `viewconvert` with the information required for conversion.
         * @param in_caps input {@link Gst.Caps}
         * @param out_caps output {@link Gst.Caps}
         */
        set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean;
        /**
         * Set `context` on `viewconvert`
         * @param context the {@link GstGL.GLContext} to set
         */
        set_context(context: GLContext): void;
        /**
         * Submit `input` to be processed by `viewconvert`
         * @param is_discont true if we have a discontinuity
         * @param input a {@link Gst.Buffer}
         * @returns a {@link Gst.FlowReturn}
         */
        submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
        /**
         * Provides an implementation of {@link GstBase.BaseTransformClass}.transform_caps()
         * @param direction a {@link Gst.PadDirection}
         * @param caps the {@link Gst.Caps} to transform
         * @param filter a set of filter {@link Gst.Caps}
         * @returns the converted {@link Gst.Caps}
         */
        transform_caps(direction: Gst.PadDirection | null, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
    }

    namespace GLWindow {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Will be emitted when a key event is received by the GstGLwindow.
             * @signal
             * @since 1.6
             * @run-last
             */
            'key-event': (arg0: string, arg1: string) => void;
            /**
             * Will be emitted when a mouse event is received by the GstGLwindow.
             * @signal
             * @since 1.6
             * @run-last
             */
            'mouse-event': (arg0: string, arg1: number, arg2: number, arg3: number) => void;
            /**
             * Will be emitted when a mouse scroll event is received by the GstGLwindow.
             * @signal
             * @since 1.18
             * @run-last
             */
            'scroll-event': (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            /**
             * Will be emitted when the window handle has been set into the native
             * implementation, but before the context is re-activated. By using this
             * signal, elements can refresh associated resource without relying on
             * direct handle comparision.
             * @signal
             * @since 1.20
             * @run-last
             */
            'window-handle-changed': () => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * GstGLWindow represents a window that elements can render into.  A window can
     * either be a user visible window (onscreen) or hidden (offscreen).
     * @gir-type Class
     */
    abstract class GLWindow extends Gst.Object {
        static $gtype: GObject.GType<GLWindow>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: GLDisplay): GLWindow;

        // Signals

        /** @signal */
        connect<K extends keyof GLWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * close the connection to the display
         * @virtual
         */
        vfunc_close(): void;
        /**
         * Checks if `window` controls the GL viewport.
         * @virtual
         */
        vfunc_controls_viewport(): boolean;
        /**
         * Redraw the window contents.  Implementations should invoke the draw callback.
         * @virtual
         */
        vfunc_draw(): void;
        /**
         * Gets the current windowing system display connection
         * @virtual
         */
        vfunc_get_display(): never;
        /**
         * Gets the current window handle that this {@link GstGL.GLWindow} is
         *                     rendering into.  This may return a different value to
         *                     what is passed into `set_window_handle`
         * @virtual
         */
        vfunc_get_window_handle(): never;
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a `gboolean` indicating if events should be handled or not.
         * @virtual
         */
        vfunc_handle_events(handle_events: boolean): void;
        /**
         * Query whether `window` has output surface or not
         * @virtual
         */
        vfunc_has_output_surface(): boolean;
        /**
         * open the connection to the display
         * @virtual
         */
        vfunc_open(): boolean;
        /**
         * Queue resizing of `window`.
         * @virtual
         */
        vfunc_queue_resize(): void;
        /**
         * Quit the runloop's execution.
         * @virtual
         */
        vfunc_quit(): void;
        /**
         * Start the execution of the runloop.
         * @virtual
         */
        vfunc_run(): void;
        /**
         * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
         * have executed when this function returns.
         * @param callback function to invoke
         * @virtual
         */
        vfunc_send_message(callback: GLWindowCB): void;
        /**
         * Invoke `callback` with `data` on the window thread.  The callback may not
         * have been executed when this function returns.
         * @param callback function to invoke
         * @virtual
         */
        vfunc_send_message_async(callback: GLWindowCB): void;
        /**
         * Set the preferred width and height of the window.  Implementations are free
         * to ignore this information.
         * @param width new preferred width
         * @param height new preferred height
         * @virtual
         */
        vfunc_set_preferred_size(width: number, height: number): void;
        /**
         * Tell a `window` that it should render into a specific region of the window
         * according to the {@link GstVideo.VideoOverlay} interface.
         * @param x x position
         * @param y y position
         * @param width width
         * @param height height
         * @virtual
         */
        vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
        /**
         * Sets the window that this `window` should render into.  Some implementations
         * require this to be called with a valid handle before drawing can commence.
         * @param handle handle to the window
         * @virtual
         */
        vfunc_set_window_handle(handle: never): void;
        /**
         * Present the window to the screen.
         * @virtual
         */
        vfunc_show(): void;

        // Methods

        /**
         * Checks if `window` controls the GL viewport.
         * @returns `true` if `window` controls the GL viewport, otherwise `false`
         */
        controls_viewport(): boolean;
        /**
         * Redraw the window contents.  Implementations should invoke the draw callback.
         */
        draw(): void;
        /**
         * @returns the {@link GstGL.GLContext} associated with this `window`
         */
        get_context(): GLContext;
        /**
         * @returns the windowing system display handle for this `window`
         */
        get_display(): never;
        /**
         * @returns whether an visible output surface has been requested
         */
        get_request_output_surface(): boolean;
        get_surface_dimensions(): [number, number];
        /**
         * @returns the window handle we are currently rendering into
         */
        get_window_handle(): never;
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a `gboolean` indicating if events should be handled or not.
         */
        handle_events(handle_events: boolean): void;
        /**
         * Query whether `window` has output surface or not
         * @returns `true` if `window` has useable output surface
         */
        has_output_surface(): boolean;
        /**
         * Queue resizing of `window`.
         */
        queue_resize(): void;
        /**
         * Quit the runloop's execution.
         */
        quit(): void;
        /**
         * Resize `window` to the given `width` and `height`.
         * @param width new width
         * @param height new height
         */
        resize(width: number, height: number): void;
        /**
         * Start the execution of the runloop.
         */
        run(): void;
        /**
         * @param event_type
         * @param key_str
         */
        send_key_event(event_type: string, key_str: string): void;
        /**
         * Invoke `callback` with data on the window thread.  `callback` is guaranteed to
         * have executed when this function returns.
         * @param callback function to invoke
         */
        send_message(callback: GLWindowCB): void;
        /**
         * Invoke `callback` with `data` on the window thread.  The callback may not
         * have been executed when this function returns.
         * @param callback function to invoke
         */
        send_message_async(callback: GLWindowCB): void;
        /**
         * @param event_type
         * @param button
         * @param posx
         * @param posy
         */
        send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
        /**
         * Notify a `window` about a scroll event. A scroll signal holding the event
         * coordinates will be emitted.
         * @param posx x position of the mouse cursor
         * @param posy y position of the mouse cursor
         * @param delta_x the x offset of the scroll event
         * @param delta_y the y offset of the scroll event
         */
        send_scroll_event(posx: number, posy: number, delta_x: number, delta_y: number): void;
        /**
         * Sets the callback called when the window is about to close.
         * @param callback function to invoke
         */
        set_close_callback(callback: GLWindowCB): void;
        /**
         * Sets the draw callback called every time `gst_gl_window_draw()` is called
         * @param callback function to invoke
         */
        set_draw_callback(callback: GLWindowCB): void;
        /**
         * Set the preferred width and height of the window.  Implementations are free
         * to ignore this information.
         * @param width new preferred width
         * @param height new preferred height
         */
        set_preferred_size(width: number, height: number): void;
        /**
         * Tell a `window` that it should render into a specific region of the window
         * according to the {@link GstVideo.VideoOverlay} interface.
         * @param x x position
         * @param y y position
         * @param width width
         * @param height height
         * @returns whether the specified region could be set
         */
        set_render_rectangle(x: number, y: number, width: number, height: number): boolean;
        /**
         * Configure whether a visible output surface is requested.
         * @param output_surface whether to request an output surface.
         */
        set_request_output_surface(output_surface: boolean): void;
        /**
         * Sets the resize callback called every time a resize of the window occurs.
         * @param callback function to invoke
         */
        set_resize_callback(callback: GLWindowResizeCB): void;
        /**
         * Sets the window that this `window` should render into.  Some implementations
         * require this to be called with a valid handle before drawing can commence.
         * @param handle handle to the window
         */
        set_window_handle(handle: never): void;
        /**
         * Present the window to the screen.
         */
        show(): void;
    }

    /**
     * @gir-type Struct
     */
    class GLAllocationParams {
        static $gtype: GObject.GType<GLAllocationParams>;

        // Fields

        struct_size: number;
        alloc_flags: number;
        alloc_size: number;
        context: GLContext;
        notify: GLib.DestroyNotify;
        user_data: any;
        wrapped_data: any;
        gl_handle: any;

        // Methods

        /**
         * @returns a copy of the {@link GstGL.GLAllocationParams} specified by          `src`
         */
        copy(): GLAllocationParams;
        /**
         * Copies the dynamically allocated data from `src` to `dest`.  Direct subclasses
         * should call this function in their own overridden copy function.
         * @param dest the destination {@link GstGL.GLAllocationParams}
         */
        copy_data(dest: GLAllocationParams): void;
        /**
         * Frees the {@link GstGL.GLAllocationParams} and all associated data.
         */
        free(): void;
        /**
         * Frees the dynamically allocated data in `params`.  Direct subclasses
         * should call this function in their own overridden free function.
         */
        free_data(): void;
    }

    /**
     * {@link GstGL.GLAsyncDebug} an opaque structure and should only be accessed through the
     * provided API.
     * @gir-type Struct
     */
    class GLAsyncDebug {
        static $gtype: GObject.GType<GLAsyncDebug>;

        // Methods

        /**
         * Frees `ad`
         */
        free(): void;
        /**
         * freeze the debug output.  While frozen, any call to
         * `gst_gl_async_debug_output_log_msg()` will not output any messages but
         * subsequent calls to `gst_gl_async_debug_store_log_msg()` will overwrite previous
         * messages.
         */
        freeze(): void;
        /**
         * Initialize `ad`.  Intended for use with {@link GstGL.GLAsyncDebug}'s that are embedded
         * in other structs.
         */
        init(): void;
        /**
         * Outputs a previously stored debug message.
         */
        output_log_msg(): void;
        /**
         * unfreeze the debug output.  See `gst_gl_async_debug_freeze()` for what freezing means
         */
        thaw(): void;
        /**
         * Unset any dynamically allocated data.  Intended for use with
         * {@link GstGL.GLAsyncDebug}'s that are embedded in other structs.
         */
        unset(): void;
    }

    /**
     * @gir-type Alias
     */
    type GLBaseFilterClass = typeof GLBaseFilter;
    /**
     * @gir-type Struct
     */
    abstract class GLBaseFilterPrivate {
        static $gtype: GObject.GType<GLBaseFilterPrivate>;
    }

    /**
     * GstGLBaseMemory is a {@link Gst.Memory} subclass providing the basis of support
     * for the mapping of GL buffers.
     *
     * Data is uploaded or downloaded from the GPU as is necessary.
     * @gir-type Struct
     */
    class GLBaseMemory {
        static $gtype: GObject.GType<GLBaseMemory>;

        // Fields

        context: GLContext;
        map_flags: Gst.MapFlags;
        map_count: number;
        gl_map_count: number;
        data: any;

        // Static methods

        /**
         * @param allocator a {@link GstGL.GLBaseMemoryAllocator}
         * @param params the {@link GstGL.GLAllocationParams} to allocate the memory with
         */
        static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory | null;
        /**
         * Initializes the GL Base Memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLBaseMemory operation.
         */
        static init_once(): void;

        // Methods

        /**
         * Note: only intended for subclass usage to allocate the system memory buffer
         * on demand.  If there is already a non-NULL data pointer in `gl_mem`->data,
         * then this function imply returns TRUE.
         * @returns whether the system memory could be allocated
         */
        alloc_data(): boolean;
        /**
         * Initializes `mem` with the required parameters
         * @param allocator the {@link Gst.Allocator} to initialize with
         * @param parent the parent {@link Gst.Memory} to initialize with
         * @param context the {@link GstGL.GLContext} to initialize with
         * @param params the `GstAllocationParams` to initialize with
         * @param size the number of bytes to be allocated
         * @param user_data user data to call `notify` with
         * @param notify a {@link GLib.DestroyNotify}
         */
        init(
            allocator: Gst.Allocator,
            parent: Gst.Memory | null,
            context: GLContext,
            params: Gst.AllocationParams | null,
            size: number,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): void;
        /**
         * @param dest the destination {@link GstGL.GLBaseMemory}
         * @param offset the offset to start at
         * @param size the number of bytes to copy
         * @returns whether the copy succeeded.
         */
        memcpy(dest: GLBaseMemory, offset: number, size: number): boolean;
    }

    /**
     * @gir-type Alias
     */
    type GLBaseMemoryAllocatorClass = typeof GLBaseMemoryAllocator;
    /**
     * @gir-type Alias
     */
    type GLBaseMixerClass = typeof GLBaseMixer;
    /**
     * @gir-type Alias
     */
    type GLBaseMixerPadClass = typeof GLBaseMixerPad;
    /**
     * @gir-type Struct
     */
    abstract class GLBaseMixerPrivate {
        static $gtype: GObject.GType<GLBaseMixerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLBaseSrcClass = typeof GLBaseSrc;
    /**
     * @gir-type Struct
     */
    abstract class GLBaseSrcPrivate {
        static $gtype: GObject.GType<GLBaseSrcPrivate>;
    }

    /**
     * GstGLBuffer is a {@link Gst.Memory} subclass providing support for the mapping of
     * GL buffers.
     *
     * Data is uploaded or downloaded from the GPU as is necessary.
     * @gir-type Struct
     */
    class GLBuffer {
        static $gtype: GObject.GType<GLBuffer>;

        // Fields

        id: number;
        target: number;
        usage_hints: number;

        // Static methods

        /**
         * Initializes the GL Buffer allocator. It is safe to call this function
         * multiple times.  This must be called before any other {@link GstGL.GLBuffer} operation.
         */
        static init_once(): void;
    }

    /**
     * @gir-type Struct
     */
    class GLBufferAllocationParams {
        static $gtype: GObject.GType<GLBufferAllocationParams>;

        // Fields

        gl_target: number;
        gl_usage: number;

        // Constructors

        constructor(
            context: GLContext,
            alloc_size: number,
            alloc_params: Gst.AllocationParams | null,
            gl_target: number,
            gl_usage: number,
        );

        static ['new'](
            context: GLContext,
            alloc_size: number,
            alloc_params: Gst.AllocationParams | null,
            gl_target: number,
            gl_usage: number,
        ): GLBufferAllocationParams;
    }

    /**
     * @gir-type Alias
     */
    type GLBufferAllocatorClass = typeof GLBufferAllocator;
    /**
     * @gir-type Alias
     */
    type GLBufferPoolClass = typeof GLBufferPool;
    /**
     * @gir-type Struct
     */
    abstract class GLBufferPoolPrivate {
        static $gtype: GObject.GType<GLBufferPoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLColorConvertClass = typeof GLColorConvert;
    /**
     * @gir-type Struct
     */
    abstract class GLColorConvertPrivate {
        static $gtype: GObject.GType<GLColorConvertPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLContextClass = typeof GLContext;
    /**
     * @gir-type Struct
     */
    abstract class GLContextPrivate {
        static $gtype: GObject.GType<GLContextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLDisplayClass = typeof GLDisplay;
    /**
     * @gir-type Struct
     */
    abstract class GLDisplayPrivate {
        static $gtype: GObject.GType<GLDisplayPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLFilterClass = typeof GLFilter;
    /**
     * @gir-type Alias
     */
    type GLFramebufferClass = typeof GLFramebuffer;
    /**
     * @gir-type Struct
     */
    abstract class GLFramebufferPrivate {
        static $gtype: GObject.GType<GLFramebufferPrivate>;
    }

    /**
     * Structure containing function pointers to OpenGL functions.
     *
     * Each field is named exactly the same as the OpenGL function without the
     * `gl` prefix.
     * @gir-type Struct
     */
    abstract class GLFuncs {
        static $gtype: GObject.GType<GLFuncs>;
    }

    /**
     * GstGLMemory is a {@link GstGL.GLBaseMemory} subclass providing support for the mapping of
     * OpenGL textures.
     *
     * {@link GstGL.GLMemory} is created or wrapped through `gst_gl_base_memory_alloc()`
     * with {@link GstGL.GLVideoAllocationParams}.
     *
     * Data is uploaded or downloaded from the GPU as is necessary.
     *
     * The {@link Gst.Caps} that is used for {@link GstGL.GLMemory} based buffers should contain
     * the `GST_CAPS_FEATURE_MEMORY_GL_MEMORY` as a {@link Gst.CapsFeatures} and should
     * contain a 'texture-target' field with one of the {@link GstGL.GLTextureTarget} values
     * as a string, i.e. some combination of 'texture-target=(string){2D,
     * rectangle, external-oes}'.
     * @gir-type Struct
     */
    class GLMemory {
        static $gtype: GObject.GType<GLMemory>;

        // Fields

        tex_id: number;
        tex_target: GLTextureTarget;
        tex_format: GLFormat;
        valign: GstVideo.VideoAlignment;
        plane: number;
        tex_scaling: number[];
        texture_wrapped: boolean;
        unpack_length: number;
        tex_width: number;

        // Static methods

        /**
         * Initializes the GL Base Texture allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLMemory operation.
         */
        static init_once(): void;

        // Methods

        /**
         * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
         * is specified by `tex_format`, `width` and `height`.
         * @param tex_id OpenGL texture id
         * @param target the {@link GstGL.GLTextureTarget}
         * @param tex_format the {@link GstGL.GLFormat}
         * @param width width of `tex_id`
         * @param height height of `tex_id`
         * @returns Whether the copy succeeded
         */
        copy_into(
            tex_id: number,
            target: GLTextureTarget | null,
            tex_format: GLFormat | null,
            width: number,
            height: number,
        ): boolean;
        /**
         * Copies the texture in {@link GstGL.GLMemory} into the texture specified by `tex_id`,
         * `out_target`, `out_tex_format`, `out_width` and `out_height`.
         * @param tex_id the destination texture id
         * @param out_target the destination {@link GstGL.GLTextureTarget}
         * @param out_tex_format the destination {@link GstGL.GLFormat}
         * @param out_width the destination width
         * @param out_height the destination height
         * @returns whether the copy succeeded.
         */
        copy_teximage(
            tex_id: number,
            out_target: GLTextureTarget | null,
            out_tex_format: GLFormat | null,
            out_width: number,
            out_height: number,
        ): boolean;
        /**
         * @returns the {@link GstGL.GLFormat} of `gl_mem`
         */
        get_texture_format(): GLFormat;
        /**
         * @returns the texture height of `gl_mem`
         */
        get_texture_height(): number;
        /**
         * @returns the OpenGL texture handle of `gl_mem`
         */
        get_texture_id(): number;
        /**
         * @returns the {@link GstGL.GLTextureTarget} of `gl_mem`
         */
        get_texture_target(): GLTextureTarget;
        /**
         * @returns the texture width of `gl_mem`
         */
        get_texture_width(): number;
        /**
         * Initializes `mem` with the required parameters.  `info` is assumed to have
         * already have been modified with `gst_video_info_align()`.
         * @param allocator the {@link Gst.Allocator} to initialize with
         * @param parent the parent {@link Gst.Memory} to initialize with
         * @param context the {@link GstGL.GLContext} to initialize with
         * @param target the {@link GstGL.GLTextureTarget} for this {@link GstGL.GLMemory}
         * @param tex_format the {@link GstGL.GLFormat} for this {@link GstGL.GLMemory}
         * @param params the `GstAllocationParams` to initialize with
         * @param info the {@link GstVideo.VideoInfo} for this {@link GstGL.GLMemory}
         * @param plane the plane number (starting from 0) for this {@link GstGL.GLMemory}
         * @param valign optional {@link GstVideo.VideoAlignment} parameters
         * @param user_data user data to call `notify` with
         * @param notify a {@link GLib.DestroyNotify}
         */
        init(
            allocator: Gst.Allocator,
            parent: Gst.Memory | null,
            context: GLContext,
            target: GLTextureTarget | null,
            tex_format: GLFormat | null,
            params: Gst.AllocationParams | null,
            info: GstVideo.VideoInfo,
            plane: number,
            valign?: GstVideo.VideoAlignment | null,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Reads the texture in {@link GstGL.GLMemory} into `write_pointer` if no buffer is bound
         * to `GL_PIXEL_PACK_BUFFER`.  Otherwise `write_pointer` is the byte offset into
         * the currently bound `GL_PIXEL_PACK_BUFFER` buffer to store the result of
         * glReadPixels.  See the OpenGL specification for glReadPixels for more
         * details.
         * @param write_pointer the data pointer to pass to glReadPixels
         * @returns whether theread operation succeeded
         */
        read_pixels(write_pointer?: any | null): boolean;
        /**
         * Reads the texture in `read_pointer` into `gl_mem`.
         *
         * See `gst_gl_memory_read_pixels()` for what `read_pointer` signifies.
         * @param read_pointer the data pointer to pass to glTexSubImage
         */
        texsubimage(read_pointer?: any | null): void;
    }

    /**
     * @gir-type Alias
     */
    type GLMemoryAllocatorClass = typeof GLMemoryAllocator;
    /**
     * {@link GstGL.GLMemoryPBO} is created or wrapped through `gst_gl_base_memory_alloc()`
     * with {@link GstGL.GLVideoAllocationParams}.
     *
     * Data is uploaded or downloaded from the GPU as is necessary.
     * @gir-type Struct
     */
    class GLMemoryPBO {
        static $gtype: GObject.GType<GLMemoryPBO>;

        // Static methods

        static init_once(): void;

        // Methods

        /**
         * Copies `gl_mem` into the texture specified by `tex_id`.  The format of `tex_id`
         * is specified by `tex_format`, `width` and `height`.
         *
         * If `respecify` is `true`, then the copy is performed in terms of the texture
         * data.  This is useful for splitting RGBA textures into RG or R textures or
         * vice versa. The requirement for this to succeed is that the backing texture
         * data must be the same size, i.e. say a RGBA8 texture is converted into a RG8
         * texture, then the RG texture must have twice as many pixels available for
         * output as the RGBA texture.
         *
         * Otherwise, if `respecify` is `false`, then the copy is performed per texel
         * using glCopyTexImage.  See the OpenGL specification for details on the
         * mappings between texture formats.
         * @param tex_id the destination texture id
         * @param target the destination {@link GstGL.GLTextureTarget}
         * @param tex_format the destination {@link GstGL.GLFormat}
         * @param width width of `tex_id`
         * @param height height of `tex_id`
         * @param stride stride of the backing texture data
         * @param respecify whether to copy the data or copy per texel
         * @returns Whether the copy succeeded
         */
        copy_into_texture(
            tex_id: number,
            target: GLTextureTarget | null,
            tex_format: GLFormat | null,
            width: number,
            height: number,
            stride: number,
            respecify: boolean,
        ): boolean;
        /**
         * Transfer the texture data from the texture into the PBO if necessary.
         */
        download_transfer(): void;
        /**
         * Transfer the texture data from the PBO into the texture if necessary.
         */
        upload_transfer(): void;
    }

    /**
     * @gir-type Alias
     */
    type GLMemoryPBOAllocatorClass = typeof GLMemoryPBOAllocator;
    /**
     * @gir-type Alias
     */
    type GLMixerClass = typeof GLMixer;
    /**
     * @gir-type Alias
     */
    type GLMixerPadClass = typeof GLMixerPad;
    /**
     * @gir-type Struct
     */
    abstract class GLMixerPrivate {
        static $gtype: GObject.GType<GLMixerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLOverlayCompositorClass = typeof GLOverlayCompositor;
    /**
     * A {@link GstGL.GLQuery} represents and holds an OpenGL query object.  Various types of
     * queries can be run or counters retrieved.
     * @gir-type Struct
     * @since 1.10
     */
    class GLQuery {
        static $gtype: GObject.GType<GLQuery>;

        // Static methods

        /**
         * Performs a GST_QUERY_CONTEXT query of type "gst.gl.local_context" on all
         * `GstPads` in `element` of `direction` for the local OpenGL context used by
         * GStreamer elements.
         * @param element a {@link Gst.Element} to query from
         * @param direction the {@link Gst.PadDirection} to query
         * @param context_ptr location containing the current and/or resulting                      {@link GstGL.GLContext}
         */
        static local_gl_context(
            element: Gst.Element,
            direction: Gst.PadDirection,
            context_ptr: GLContext,
        ): [boolean, GLContext];

        // Methods

        /**
         * Record the result of a counter
         */
        counter(): void;
        /**
         * End counting the query
         */
        end(): void;
        /**
         * Frees a {@link GstGL.GLQuery}
         */
        free(): void;
        /**
         * @param context a {@link GstGL.GLContext}
         * @param query_type the {@link GstGL.GLQueryType}
         */
        init(context: GLContext, query_type: GLQueryType | null): void;
        /**
         * @returns the result of the query
         */
        result(): number;
        /**
         * Start counting the query
         */
        start(): void;
        /**
         * Free any dynamically allocated resources
         */
        unset(): void;
    }

    /**
     * GstGLRenderbuffer is a {@link GstGL.GLBaseMemory} subclass providing support for
     * OpenGL renderbuffers.
     *
     * {@link GstGL.GLRenderbuffer} is created or wrapped through `gst_gl_base_memory_alloc()`
     * with {@link GstGL.GLRenderbufferAllocationParams}.
     * @gir-type Struct
     * @since 1.10
     */
    class GLRenderbuffer {
        static $gtype: GObject.GType<GLRenderbuffer>;

        // Fields

        renderbuffer_id: number;
        renderbuffer_format: GLFormat;
        width: number;
        height: number;
        renderbuffer_wrapped: boolean;

        // Static methods

        /**
         * Initializes the GL Base Texture allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLRenderbuffer operation.
         */
        static init_once(): void;

        // Methods

        /**
         * @returns the {@link GstGL.GLFormat} of `gl_mem`
         */
        get_format(): GLFormat;
        /**
         * @returns the configured height of `gl_mem`
         */
        get_height(): number;
        /**
         * @returns the OpenGL renderbuffer handle of `gl_mem`
         */
        get_id(): number;
        /**
         * @returns the configured width of `gl_mem`
         */
        get_width(): number;
    }

    /**
     * Allocation parameters
     * @gir-type Struct
     */
    class GLRenderbufferAllocationParams {
        static $gtype: GObject.GType<GLRenderbufferAllocationParams>;

        // Fields

        renderbuffer_format: GLFormat;
        width: number;
        height: number;

        // Constructors

        constructor(
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            renderbuffer_format: GLFormat,
            width: number,
            height: number,
        );

        static ['new'](
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            renderbuffer_format: GLFormat,
            width: number,
            height: number,
        ): GLRenderbufferAllocationParams;

        static new_wrapped(
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            renderbuffer_format: GLFormat,
            width: number,
            height: number,
            gl_handle?: any | null,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): GLRenderbufferAllocationParams;
    }

    /**
     * @gir-type Alias
     */
    type GLRenderbufferAllocatorClass = typeof GLRenderbufferAllocator;
    /**
     * @gir-type Alias
     */
    type GLSLStageClass = typeof GLSLStage;
    /**
     * @gir-type Struct
     */
    abstract class GLSLStagePrivate {
        static $gtype: GObject.GType<GLSLStagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLShaderClass = typeof GLShader;
    /**
     * @gir-type Struct
     */
    abstract class GLShaderPrivate {
        static $gtype: GObject.GType<GLShaderPrivate>;
    }

    /**
     * {@link GstGL.GLSyncMeta} provides the ability to synchronize the OpenGL command stream
     * with the CPU or with other OpenGL contexts.
     * @gir-type Struct
     */
    class GLSyncMeta {
        static $gtype: GObject.GType<GLSyncMeta>;

        // Fields

        context: GLContext;
        data: any;

        // Static methods

        static get_info(): Gst.MetaInfo;

        // Methods

        /**
         * Set a sync point to possibly wait on at a later time.
         * @param context a {@link GstGL.GLContext}
         */
        set_sync_point(context: GLContext): void;
        /**
         * Insert a wait into `context`'s command stream ensuring all previous OpenGL
         * commands before `sync_meta` have completed.
         * @param context a {@link GstGL.GLContext}
         */
        wait(context: GLContext): void;
        /**
         * Perform a wait so that the sync point has passed from the CPU's perspective
         * What that means, is that all GL operations changing CPU-visible data before
         * the sync point are now visible.
         * @param context a {@link GstGL.GLContext}
         */
        wait_cpu(context: GLContext): void;
    }

    /**
     * @gir-type Alias
     */
    type GLUploadClass = typeof GLUpload;
    /**
     * @gir-type Struct
     */
    abstract class GLUploadPrivate {
        static $gtype: GObject.GType<GLUploadPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class GLVideoAllocationParams {
        static $gtype: GObject.GType<GLVideoAllocationParams>;

        // Fields

        plane: number;
        valign: GstVideo.VideoAlignment;
        target: GLTextureTarget;
        tex_format: GLFormat;

        // Constructors

        constructor(
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            v_info: GstVideo.VideoInfo,
            plane: number,
            valign: GstVideo.VideoAlignment | null,
            target: GLTextureTarget,
            tex_format: GLFormat,
        );

        static ['new'](
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            v_info: GstVideo.VideoInfo,
            plane: number,
            valign: GstVideo.VideoAlignment | null,
            target: GLTextureTarget,
            tex_format: GLFormat,
        ): GLVideoAllocationParams;

        static new_wrapped_data(
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            v_info: GstVideo.VideoInfo,
            plane: number,
            valign: GstVideo.VideoAlignment | null,
            target: GLTextureTarget,
            tex_format: GLFormat,
            wrapped_data?: any | null,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): GLVideoAllocationParams;

        static new_wrapped_gl_handle(
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            v_info: GstVideo.VideoInfo,
            plane: number,
            valign: GstVideo.VideoAlignment | null,
            target: GLTextureTarget,
            tex_format: GLFormat,
            gl_handle?: any | null,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): GLVideoAllocationParams;

        static new_wrapped_texture(
            context: GLContext,
            alloc_params: Gst.AllocationParams | null,
            v_info: GstVideo.VideoInfo,
            plane: number,
            valign: GstVideo.VideoAlignment | null,
            target: GLTextureTarget,
            tex_format: GLFormat,
            tex_id: number,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): GLVideoAllocationParams;

        // Methods

        /**
         * Copy and set any dynamically allocated resources in `dest_vid`.  Intended
         * for subclass usage only to chain up at the end of a subclass copy function.
         * @param dest_vid destination {@link GstGL.GLVideoAllocationParams} to copy into
         */
        copy_data(dest_vid: GLVideoAllocationParams): void;
        /**
         * Unset and free any dynamically allocated resources.  Intended for subclass
         * usage only to chain up at the end of a subclass free function.
         */
        free_data(): void;
    }

    /**
     * @gir-type Alias
     */
    type GLViewConvertClass = typeof GLViewConvert;
    /**
     * @gir-type Struct
     */
    abstract class GLViewConvertPrivate {
        static $gtype: GObject.GType<GLViewConvertPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GLWindowClass = typeof GLWindow;
    /**
     * @gir-type Struct
     */
    abstract class GLWindowPrivate {
        static $gtype: GObject.GType<GLWindowPrivate>;
    }

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

export default GstGL;

// END
