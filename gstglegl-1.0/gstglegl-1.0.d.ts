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
import type GstGL from '@girs/gstgl-1.0';

export namespace GstGLEGL {
    /**
     * GstGLEGL-1.0
     */

    const GL_DISPLAY_EGL_NAME: string;
    /**
     * The name of the GL Memory EGL allocator
     */
    const GL_MEMORY_EGL_ALLOCATOR_NAME: string;
    /**
     * @param err an EGL error code
     * @returns the short string representation of `err`
     */
    function egl_get_error_string(err: number): string;
    /**
     * Checks if the given `context` can emulate `format` using a limited subset of
     * RGB texture formats. Such `format` is then suitable for importing using
     * `gst_egl_image_from_dmabuf()` even when GL supports the video format as
     * external-only or not at all.
     * @param context a {@link GstGL.GLContext} (must be an EGL context)
     * @param format a {@link GstVideo.VideoFormat}
     * @returns `TRUE` if `format` can be emulated
     * @since 1.26
     */
    function egl_image_can_emulate(context: GstGL.GLContext, format: GstVideo.VideoFormat | null): boolean;
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed as RGBA data. Shaders later take this "RGBA" data and
     * convert it from its true format (described by in_info) to actual
     * RGBA output. For example, with I420, three EGL images are created,
     * one for each `plane`, each EGL image with a single-channel R format.
     * With NV12, two EGL images are created, one with R format, one
     * with RG format etc.
     * @param context a {@link GstGL.GLContext} (must be an EGL context)
     * @param dmabuf the DMA-Buf file descriptor
     * @param in_info the {@link GstVideo.VideoInfo} in `dmabuf`
     * @param plane the plane in `in_info` to create and {@link GstGLEGL.EGLImage} for
     * @param offset the byte-offset in the data
     * @returns a {@link GstGLEGL.EGLImage} wrapping `dmabuf` or `null` on failure
     */
    function egl_image_from_dmabuf(
        context: GstGL.GLContext,
        dmabuf: number,
        in_info: GstVideo.VideoInfo,
        plane: number,
        offset: number,
    ): EGLImage | null;
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed directly as the format described in in_info. This is
     * useful if the hardware is capable of performing color space conversions
     * internally. The appropriate DRM format is picked, and the EGL image
     * is created with this DRM format.
     *
     * Another notable difference to `gst_egl_image_from_dmabuf()`
     * is that this function creates one EGL image for all planes, not one for
     * a single plane.
     * @param context a {@link GstGL.GLContext} (must be an EGL context)
     * @param fd Array of DMABuf file descriptors
     * @param offset Array of offsets, relative to the DMABuf
     * @param in_info the {@link GstVideo.VideoInfo}
     * @returns a {@link GstGLEGL.EGLImage} wrapping `dmabuf` or `null` on failure
     */
    function egl_image_from_dmabuf_direct(
        context: GstGL.GLContext,
        fd: number,
        offset: number,
        in_info: GstVideo.VideoInfo,
    ): EGLImage | null;
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed directly as the format described in `in_info`. This is
     * useful if the hardware is capable of performing color space conversions
     * internally. The appropriate DRM format is picked, and the EGL image
     * is created with this DRM format.
     *
     * Another notable difference to `gst_egl_image_from_dmabuf()`
     * is that this function creates one EGL image for all planes, not one for
     * a single plane.
     * @param context a {@link GstGL.GLContext} (must be an EGL context)
     * @param fd Array of DMABuf file descriptors
     * @param offset Array of offsets, relative to the DMABuf
     * @param in_info the {@link GstVideo.VideoInfo}
     * @param target GL texture target this GstEGLImage is intended for
     * @returns a {@link GstGLEGL.EGLImage} wrapping `dmabuf` or `null` on failure
     * @since 1.18
     */
    function egl_image_from_dmabuf_direct_target(
        context: GstGL.GLContext,
        fd: number,
        offset: number,
        in_info: GstVideo.VideoInfo,
        target: GstGL.GLTextureTarget | null,
    ): EGLImage | null;
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data is passed
     * directly as the format described in `in_info`. This is useful if the hardware
     * is capable of performing color space conversions internally.
     *
     * Another notable difference to `gst_egl_image_from_dmabuf()` is that this
     * function creates one EGL image for all planes, not one for a single plane.
     * @param context a {@link GstGL.GLContext} (must be an EGL context)
     * @param n_planes number of planes (obtained from a {@link GstVideo.VideoMeta})
     * @param fd Array of DMABuf file descriptors
     * @param offset Array of offsets, relative to the DMABuf
     * @param in_info_dma the {@link GstVideo.VideoInfoDmaDrm}
     * @param target GL texture target this GstEGLImage is intended for
     * @returns a {@link GstGLEGL.EGLImage} wrapping `dmabuf` or `null` on failure
     * @since 1.24
     */
    function egl_image_from_dmabuf_direct_target_with_dma_drm(
        context: GstGL.GLContext,
        n_planes: number,
        fd: number,
        offset: number,
        in_info_dma: GstVideo.VideoInfoDmaDrm,
        target: GstGL.GLTextureTarget | null,
    ): EGLImage | null;
    /**
     * @param context a {@link GstGL.GLContext} (must be an EGL context)
     * @param gl_mem a {@link GstGL.GLMemory}
     * @param attribs additional attributes to add to the `eglCreateImage`() call.
     * @returns a {@link GstGLEGL.EGLImage} wrapping `gl_mem` or `null` on failure
     */
    function egl_image_from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: never): EGLImage | null;
    /**
     * Initializes the GL Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemoryEGL operation.
     * @since 1.10
     */
    function gl_memory_egl_init_once(): void;
    /**
     * @param mem a {@link Gst.Memory} to test
     * @returns whether `mem` is a {@link GstGLEGL.GLMemoryEGL}
     * @since 1.10
     */
    function is_gl_memory_egl(mem: Gst.Memory): boolean;
    /**
     * @gir-type Callback
     */
    interface EGLImageDestroyNotify {
        (image: EGLImage, data?: any | null): void;
    }
    namespace GLDisplayEGL {
        // Signal signatures
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }

    /**
     * the contents of a {@link GstGLEGL.GLDisplayEGL} are private and should only be accessed
     * through the provided API
     * @gir-type Class
     */
    class GLDisplayEGL extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayEGL>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLDisplayEGL.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLDisplayEGL.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GLDisplayEGL;

        static new_surfaceless(): GLDisplayEGL;

        static new_with_egl_display(display?: any | null): GLDisplayEGL;

        // Signals

        /** @signal */
        connect<K extends keyof GLDisplayEGL.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplayEGL.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLDisplayEGL.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplayEGL.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLDisplayEGL.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLDisplayEGL.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a EGL display connection from a native Display.
         *
         * This function will return the same value for multiple calls with the same
         * `display`.
         *
         * The returned {@link GstGLEGL.GLDisplayEGL} will *not* be marked as foreign and will free
         * some display global EGL resources on finalization. If an external API/user
         * will be also handling the lifetime of the `EGLDisplay`, you should mark the
         * returned {@link GstGLEGL.GLDisplayEGL} as foreign by calling `gst_gl_display_egl_set_foreign()`.
         * @param display an existing {@link GstGL.GLDisplay}
         */
        static from_gl_display(display: GstGL.GLDisplay): GLDisplayEGL | null;
        /**
         * Attempts to create a new `EGLDisplay` from `display`.  If `type` is
         * {@link GstGL.GLDisplayType.ANY} or {@link GstGL.GLDisplayType.EGL_SURFACELESS}, then
         * `display` must be 0. `type` must not be {@link GstGL.GLDisplayType.NONE}.
         * @param type a {@link GstGL.GLDisplayType}
         * @param display pointer to a display (or 0)
         */
        static get_from_native(type: GstGL.GLDisplayType, display: never): any | null;

        // Methods

        /**
         * Configure whether or not this EGL display is foreign and is managed by an
         * external application/library.
         *
         * A display marked as foreign will not have display global resources freed when
         * this display is finalized. As such, any external API using the same
         * `EGLDisplay` must keep the `EGLDisplay` alive while GStreamer is using any
         * EGL or GL resources associated with that `EGLDisplay`.  The reverse is also
         * true and a foreign {@link GstGLEGL.GLDisplayEGL} must not be used after the associated
         * `EGLDisplay` has been destroyed externally with `eglTerminate()`.
         *
         * A non-foreign {@link GstGLEGL.GLDisplayEGL} will destroy the associated `EGLDisplay` on
         * finalization. This can also be useful when a user would like GStreamer to
         * assume ownership of the `EGLDisplay` after calling e.g.
         * `gst_gl_display_egl_new_with_egl_display()`.
         * @param foreign whether `display_egl` should be marked as containing a foreign           `EGLDisplay`
         */
        set_foreign(foreign: boolean): void;
    }

    namespace GLDisplayEGLDevice {
        // Signal signatures
        interface SignalSignatures extends GstGL.GLDisplay.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }

    /**
     * the contents of a {@link GstGLEGL.GLDisplayEGLDevice} are private and should only be accessed
     * through the provided API
     * @gir-type Class
     * @since 1.18
     */
    class GLDisplayEGLDevice extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayEGLDevice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLDisplayEGLDevice.SignalSignatures;

        // Fields

        device: any;

        // Constructors

        constructor(properties?: Partial<GLDisplayEGLDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device_index: number): GLDisplayEGLDevice;
        // Conflicted with GstGL.GLDisplay.new

        static ['new'](...args: never[]): any;

        static new_with_egl_device(device?: any | null): GLDisplayEGLDevice;

        // Signals

        /** @signal */
        connect<K extends keyof GLDisplayEGLDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplayEGLDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLDisplayEGLDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLDisplayEGLDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLDisplayEGLDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLDisplayEGLDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GLMemoryEGLAllocator {
        // Signal signatures
        interface SignalSignatures extends GstGL.GLMemoryAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLMemoryAllocator.ConstructorProps {}
    }

    /**
     * Opaque {@link GstGLEGL.GLMemoryEGLAllocator} struct
     * @gir-type Class
     */
    class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryEGLAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLMemoryEGLAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GLMemoryEGLAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GLMemoryEGLAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMemoryEGLAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GLMemoryEGLAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GLMemoryEGLAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GLMemoryEGLAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GLMemoryEGLAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * {@link GstGLEGL.EGLImage} represents and holds an {@link GstGLEGL.EGLImage} handle.
     *
     * A {@link GstGLEGL.EGLImage} can be created from a dmabuf with `gst_egl_image_from_dmabuf()`,
     * or `gst_egl_image_from_dmabuf_direct()`, or {@link GstGLEGL.GLMemoryEGL} provides a
     * {@link Gst.Allocator} to allocate {@link GstGLEGL.EGLImage}'s bound to and OpenGL texture.
     * @gir-type Struct
     */
    class EGLImage {
        static $gtype: GObject.GType<EGLImage>;

        // Constructors

        constructor(
            context: GstGL.GLContext,
            image: any | null,
            format: GstGL.GLFormat,
            user_data: any | null,
            user_data_destroy: EGLImageDestroyNotify,
        );

        static new_wrapped(
            context: GstGL.GLContext,
            image: any | null,
            format: GstGL.GLFormat,
            user_data: any | null,
            user_data_destroy: EGLImageDestroyNotify,
        ): EGLImage;

        // Static methods

        /**
         * Checks if the given `context` can emulate `format` using a limited subset of
         * RGB texture formats. Such `format` is then suitable for importing using
         * `gst_egl_image_from_dmabuf()` even when GL supports the video format as
         * external-only or not at all.
         * @param context a {@link GstGL.GLContext} (must be an EGL context)
         * @param format a {@link GstVideo.VideoFormat}
         */
        static can_emulate(context: GstGL.GLContext, format: GstVideo.VideoFormat): boolean;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data
         * is passed as RGBA data. Shaders later take this "RGBA" data and
         * convert it from its true format (described by in_info) to actual
         * RGBA output. For example, with I420, three EGL images are created,
         * one for each `plane`, each EGL image with a single-channel R format.
         * With NV12, two EGL images are created, one with R format, one
         * with RG format etc.
         * @param context a {@link GstGL.GLContext} (must be an EGL context)
         * @param dmabuf the DMA-Buf file descriptor
         * @param in_info the {@link GstVideo.VideoInfo} in `dmabuf`
         * @param plane the plane in `in_info` to create and {@link GstGLEGL.EGLImage} for
         * @param offset the byte-offset in the data
         */
        static from_dmabuf(
            context: GstGL.GLContext,
            dmabuf: number,
            in_info: GstVideo.VideoInfo,
            plane: number,
            offset: number,
        ): EGLImage | null;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data
         * is passed directly as the format described in in_info. This is
         * useful if the hardware is capable of performing color space conversions
         * internally. The appropriate DRM format is picked, and the EGL image
         * is created with this DRM format.
         *
         * Another notable difference to `gst_egl_image_from_dmabuf()`
         * is that this function creates one EGL image for all planes, not one for
         * a single plane.
         * @param context a {@link GstGL.GLContext} (must be an EGL context)
         * @param fd Array of DMABuf file descriptors
         * @param offset Array of offsets, relative to the DMABuf
         * @param in_info the {@link GstVideo.VideoInfo}
         */
        static from_dmabuf_direct(
            context: GstGL.GLContext,
            fd: number,
            offset: number,
            in_info: GstVideo.VideoInfo,
        ): EGLImage | null;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data
         * is passed directly as the format described in `in_info`. This is
         * useful if the hardware is capable of performing color space conversions
         * internally. The appropriate DRM format is picked, and the EGL image
         * is created with this DRM format.
         *
         * Another notable difference to `gst_egl_image_from_dmabuf()`
         * is that this function creates one EGL image for all planes, not one for
         * a single plane.
         * @param context a {@link GstGL.GLContext} (must be an EGL context)
         * @param fd Array of DMABuf file descriptors
         * @param offset Array of offsets, relative to the DMABuf
         * @param in_info the {@link GstVideo.VideoInfo}
         * @param target GL texture target this GstEGLImage is intended for
         */
        static from_dmabuf_direct_target(
            context: GstGL.GLContext,
            fd: number,
            offset: number,
            in_info: GstVideo.VideoInfo,
            target: GstGL.GLTextureTarget,
        ): EGLImage | null;
        /**
         * Creates an EGL image that imports the dmabuf FD. The dmabuf data is passed
         * directly as the format described in `in_info`. This is useful if the hardware
         * is capable of performing color space conversions internally.
         *
         * Another notable difference to `gst_egl_image_from_dmabuf()` is that this
         * function creates one EGL image for all planes, not one for a single plane.
         * @param context a {@link GstGL.GLContext} (must be an EGL context)
         * @param n_planes number of planes (obtained from a {@link GstVideo.VideoMeta})
         * @param fd Array of DMABuf file descriptors
         * @param offset Array of offsets, relative to the DMABuf
         * @param in_info_dma the {@link GstVideo.VideoInfoDmaDrm}
         * @param target GL texture target this GstEGLImage is intended for
         */
        static from_dmabuf_direct_target_with_dma_drm(
            context: GstGL.GLContext,
            n_planes: number,
            fd: number,
            offset: number,
            in_info_dma: GstVideo.VideoInfoDmaDrm,
            target: GstGL.GLTextureTarget,
        ): EGLImage | null;
        /**
         * @param context a {@link GstGL.GLContext} (must be an EGL context)
         * @param gl_mem a {@link GstGL.GLMemory}
         * @param attribs additional attributes to add to the `eglCreateImage`() call.
         */
        static from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: never): EGLImage | null;

        // Methods

        /**
         * @param fd
         * @param stride
         * @param offset
         */
        export_dmabuf(fd: number, stride: number, offset: number): boolean;
        /**
         * @returns the {@link GstGLEGL.EGLImage} of `image`
         */
        get_image(): any | null;
    }

    /**
     * @gir-type Alias
     */
    type GLDisplayEGLClass = typeof GLDisplayEGL;
    /**
     * @gir-type Alias
     */
    type GLDisplayEGLDeviceClass = typeof GLDisplayEGLDevice;
    /**
     * {@link GstGLEGL.GLMemoryEGL} is created or wrapped through `gst_gl_base_memory_alloc()`
     * with {@link GstGL.GLVideoAllocationParams}.
     * @gir-type Struct
     */
    class GLMemoryEGL {
        static $gtype: GObject.GType<GLMemoryEGL>;

        // Static methods

        /**
         * Initializes the GL Memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLMemoryEGL operation.
         */
        static init_once(): void;

        // Methods

        /**
         * @returns The EGLDisplay `mem` is associated with
         */
        get_display(): any | null;
        /**
         * @returns The EGLImage held by `mem`
         */
        get_image(): any | null;
    }

    /**
     * @gir-type Alias
     */
    type GLMemoryEGLAllocatorClass = typeof GLMemoryEGLAllocator;
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

export default GstGLEGL;

// END
