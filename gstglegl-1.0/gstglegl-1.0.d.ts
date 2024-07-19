/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstGL from '@girs/gstgl-1.0';

/**
 * GstGLEGL-1.0
 */

export namespace GstGLEGL {
    const GL_DISPLAY_EGL_NAME: string;
    /**
     * The name of the GL Memory EGL allocator
     */
    const GL_MEMORY_EGL_ALLOCATOR_NAME: string;
    function egl_get_error_string(err: number): string;
    function egl_image_from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: never): EGLImage | null;
    /**
     * Initializes the GL Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemoryEGL operation.
     */
    function gl_memory_egl_init_once(): void;
    function is_gl_memory_egl(mem: Gst.Memory): boolean;
    interface EGLImageDestroyNotify {
        (image: EGLImage, data?: any | null): void;
    }
    module GLDisplayEGL {
        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }

    /**
     * the contents of a #GstGLDisplayEGL are private and should only be accessed
     * through the provided API
     */
    class GLDisplayEGL extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayEGL>;

        // Constructors of GstGLEGL.GLDisplayEGL

        constructor(properties?: Partial<GLDisplayEGL.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GLDisplayEGL;

        static new_with_egl_display(display?: any | null): GLDisplayEGL;

        // Own static methods of GstGLEGL.GLDisplayEGL

        /**
         * Creates a EGL display connection from a native Display.
         *
         * This function will return the same value for multiple calls with the same
         * `display`.
         * @param display an existing #GstGLDisplay
         */
        static from_gl_display(display: GstGL.GLDisplay): GLDisplayEGL | null;
        /**
         * Attempts to create a new `EGLDisplay` from `display`.  If `type` is
         * %GST_GL_DISPLAY_TYPE_ANY, then `display` must be 0. `type` must not be
         * %GST_GL_DISPLAY_TYPE_NONE.
         * @param type a #GstGLDisplayType
         * @param display pointer to a display (or 0)
         */
        static get_from_native(type: GstGL.GLDisplayType, display: never): any | null;
    }

    module GLDisplayEGLDevice {
        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLDisplay.ConstructorProps {}
    }

    /**
     * the contents of a #GstGLDisplayEGLDevice are private and should only be accessed
     * through the provided API
     */
    class GLDisplayEGLDevice extends GstGL.GLDisplay {
        static $gtype: GObject.GType<GLDisplayEGLDevice>;

        // Own fields of GstGLEGL.GLDisplayEGLDevice

        device: any;

        // Constructors of GstGLEGL.GLDisplayEGLDevice

        constructor(properties?: Partial<GLDisplayEGLDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device_index: number): GLDisplayEGLDevice;
        // Conflicted with GstGL.GLDisplay.new

        static ['new'](...args: never[]): any;

        static new_with_egl_device(device?: any | null): GLDisplayEGLDevice;
    }

    module GLMemoryEGLAllocator {
        // Constructor properties interface

        interface ConstructorProps extends GstGL.GLMemoryAllocator.ConstructorProps {}
    }

    /**
     * Opaque #GstGLMemoryEGLAllocator struct
     */
    class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {
        static $gtype: GObject.GType<GLMemoryEGLAllocator>;

        // Constructors of GstGLEGL.GLMemoryEGLAllocator

        constructor(properties?: Partial<GLMemoryEGLAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    /**
     * #GstEGLImage represents and holds an `EGLImage` handle.
     *
     * A #GstEGLImage can be created from a dmabuf with gst_egl_image_from_dmabuf(),
     * or gst_egl_image_from_dmabuf_direct(), or #GstGLMemoryEGL provides a
     * #GstAllocator to allocate `EGLImage`'s bound to and OpenGL texture.
     */
    class EGLImage {
        static $gtype: GObject.GType<EGLImage>;

        // Constructors of GstGLEGL.EGLImage

        constructor(
            context: GstGL.GLContext,
            image: any | null,
            format: GstGL.GLFormat,
            user_data: any | null,
            user_data_destroy: EGLImageDestroyNotify,
        );
        _init(...args: any[]): void;

        static new_wrapped(
            context: GstGL.GLContext,
            image: any | null,
            format: GstGL.GLFormat,
            user_data: any | null,
            user_data_destroy: EGLImageDestroyNotify,
        ): EGLImage;

        // Own static methods of GstGLEGL.EGLImage

        static from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: never): EGLImage | null;

        // Own methods of GstGLEGL.EGLImage

        get_image(): any | null;
    }

    type GLDisplayEGLClass = typeof GLDisplayEGL;
    type GLDisplayEGLDeviceClass = typeof GLDisplayEGLDevice;
    /**
     * #GstGLMemoryEGL is created or wrapped through gst_gl_base_memory_alloc()
     * with #GstGLVideoAllocationParams.
     */
    class GLMemoryEGL {
        static $gtype: GObject.GType<GLMemoryEGL>;

        // Constructors of GstGLEGL.GLMemoryEGL

        _init(...args: any[]): void;

        // Own static methods of GstGLEGL.GLMemoryEGL

        /**
         * Initializes the GL Memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other GstGLMemoryEGL operation.
         */
        static init_once(): void;

        // Own methods of GstGLEGL.GLMemoryEGL

        get_display(): any | null;
        get_image(): any | null;
    }

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
