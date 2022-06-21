// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGLEGL-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstGL from './GstGL-1.0';

export namespace GstGLEGL {

const GL_DISPLAY_EGL_NAME: string
/**
 * The name of the GL Memory EGL allocator
 */
const GL_MEMORY_EGL_ALLOCATOR_NAME: string
function egl_get_error_string(err: number): string
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed as RGBA data. Shaders later take this "RGBA" data and
 * convert it from its true format (described by in_info) to actual
 * RGBA output. For example, with I420, three EGL images are created,
 * one for each plane, each EGL image with a single-channel R format.
 * With NV12, two EGL images are created, one with R format, one
 * with RG format etc.
 * @param context a #GstGLContext (must be an EGL context)
 * @param dmabuf the DMA-Buf file descriptor
 * @param in_info the #GstVideoInfo in `dmabuf`
 * @param plane the plane in `in_info` to create and #GstEGLImage for
 * @param offset the byte-offset in the data
 */
function egl_image_from_dmabuf(context: GstGL.GLContext, dmabuf: number, in_info: GstVideo.VideoInfo, plane: number, offset: number): EGLImage
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed directly as the format described in in_info. This is
 * useful if the hardware is capable of performing color space conversions
 * internally. The appropriate DRM format is picked, and the EGL image
 * is created with this DRM format.
 * 
 * Another notable difference to gst_egl_image_from_dmabuf()
 * is that this function creates one EGL image for all planes, not one for
 * a single plane.
 * @param context a #GstGLContext (must be an EGL context)
 * @param fd Array of DMABuf file descriptors
 * @param offset Array of offsets, relative to the DMABuf
 * @param in_info the #GstVideoInfo
 */
function egl_image_from_dmabuf_direct(context: GstGL.GLContext, fd: number, offset: number, in_info: GstVideo.VideoInfo): EGLImage
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed directly as the format described in in_info. This is
 * useful if the hardware is capable of performing color space conversions
 * internally. The appropriate DRM format is picked, and the EGL image
 * is created with this DRM format.
 * 
 * Another notable difference to gst_egl_image_from_dmabuf()
 * is that this function creates one EGL image for all planes, not one for
 * a single plane.
 * @param context a #GstGLContext (must be an EGL context)
 * @param fd Array of DMABuf file descriptors
 * @param offset Array of offsets, relative to the DMABuf
 * @param in_info the #GstVideoInfo
 * @param target GL texture target this GstEGLImage is intended for
 */
function egl_image_from_dmabuf_direct_target(context: GstGL.GLContext, fd: number, offset: number, in_info: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage
function egl_image_from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: number): EGLImage
/**
 * Initializes the GL Memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLMemoryEGL operation.
 */
function gl_memory_egl_init_once(): void
function is_gl_memory_egl(mem: Gst.Memory): boolean
/**
 * Function to be called when the GstEGLImage is destroyed. It should free
 * the associated `EGLImage` if necessary
 * @callback 
 * @param image a #GstEGLImage
 * @param data user data passed to gst_egl_image_new_wrapped()
 */
interface EGLImageDestroyNotify {
    (image: EGLImage, data: object | null): void
}
interface GLDisplayEGL_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}

interface GLDisplayEGL {

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    parent: GstGL.GLDisplay

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayEGL are private and should only be accessed
 * through the provided API
 * @class 
 */
class GLDisplayEGL extends GstGL.GLDisplay {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    static name: string
    static $gtype: GObject.GType<GLDisplayEGL>

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    constructor(config?: GLDisplayEGL_ConstructProps) 
    /**
     * Create a new #GstGLDisplayEGL using the default EGL_DEFAULT_DISPLAY.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstGLDisplayEGL using the default EGL_DEFAULT_DISPLAY.
     * @constructor 
     */
    static new(): GLDisplayEGL

    // Overloads of new

    static new(): GstGL.GLDisplay
    static new_with_egl_display(display: object | null): GLDisplayEGL
    _init(config?: GLDisplayEGL_ConstructProps): void
    /**
     * Creates a EGL display connection from a native Display.
     * 
     * This function will return the same value for multiple calls with the same
     * `display`.
     * @param display an existing #GstGLDisplay
     */
    static from_gl_display(display: GstGL.GLDisplay): GLDisplayEGL
    /**
     * Attempts to create a new `EGLDisplay` from `display`.  If `type` is
     * %GST_GL_DISPLAY_TYPE_ANY, then `display` must be 0. `type` must not be
     * %GST_GL_DISPLAY_TYPE_NONE.
     * @param type a #GstGLDisplayType
     * @param display pointer to a display (or 0)
     */
    static get_from_native(type: GstGL.GLDisplayType, display: number): object | null
}

interface GLDisplayEGLDevice_ConstructProps extends GstGL.GLDisplay_ConstructProps {
}

interface GLDisplayEGLDevice {

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    parent: GstGL.GLDisplay
    device: object
    _padding: object[]

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayEGLDevice are private and should only be accessed
 * through the provided API
 * @class 
 */
class GLDisplayEGLDevice extends GstGL.GLDisplay {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    static name: string
    static $gtype: GObject.GType<GLDisplayEGLDevice>

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    constructor(config?: GLDisplayEGLDevice_ConstructProps) 
    /**
     * Create a new #GstGLDisplayEGLDevice with an EGLDevice supported device
     * @constructor 
     * @param device_index the index of device to use
     */
    constructor(device_index: number) 
    /**
     * Create a new #GstGLDisplayEGLDevice with an EGLDevice supported device
     * @constructor 
     * @param device_index the index of device to use
     */
    static new(device_index: number): GLDisplayEGLDevice

    // Overloads of new

    static new(): GstGL.GLDisplay
    /**
     * Creates a new #GstGLDisplayEGLDevice with EGLDeviceEXT .
     * The `device` must be created using EGLDevice enumeration.
     * @constructor 
     * @param device an existing EGLDeviceEXT
     */
    static new_with_egl_device(device: object | null): GLDisplayEGLDevice
    _init(config?: GLDisplayEGLDevice_ConstructProps): void
}

interface GLMemoryEGLAllocator_ConstructProps extends GstGL.GLMemoryAllocator_ConstructProps {
}

interface GLMemoryEGLAllocator {

    // Conflicting properties

    object: any

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_alloc(...args: any[]): any

    // Class property signals of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstGLMemoryEGLAllocator struct
 * @class 
 */
class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

    static name: string
    static $gtype: GObject.GType<GLMemoryEGLAllocator>

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

    constructor(config?: GLMemoryEGLAllocator_ConstructProps) 
    _init(config?: GLMemoryEGLAllocator_ConstructProps): void
}

interface EGLImage {

    // Owm methods of GstGLEGL-1.0.GstGLEGL.EGLImage

    export_dmabuf(fd: number, stride: number, offset: number): boolean
    get_image(): object | null
}

/**
 * #GstEGLImage represents and holds an `EGLImage` handle.
 * 
 * A #GstEGLImage can be created from a dmabuf with gst_egl_image_from_dmabuf(),
 * or gst_egl_image_from_dmabuf_direct(), or #GstGLMemoryEGL provides a
 * #GstAllocator to allocate `EGLImage`'s bound to and OpenGL texture.
 * @record 
 */
class EGLImage {

    // Own properties of GstGLEGL-1.0.GstGLEGL.EGLImage

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.EGLImage

    static new_wrapped(context: GstGL.GLContext, image: object | null, format: GstGL.GLFormat, user_data_destroy: EGLImageDestroyNotify): EGLImage
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed as RGBA data. Shaders later take this "RGBA" data and
     * convert it from its true format (described by in_info) to actual
     * RGBA output. For example, with I420, three EGL images are created,
     * one for each plane, each EGL image with a single-channel R format.
     * With NV12, two EGL images are created, one with R format, one
     * with RG format etc.
     * @param context a #GstGLContext (must be an EGL context)
     * @param dmabuf the DMA-Buf file descriptor
     * @param in_info the #GstVideoInfo in `dmabuf`
     * @param plane the plane in `in_info` to create and #GstEGLImage for
     * @param offset the byte-offset in the data
     */
    static from_dmabuf(context: GstGL.GLContext, dmabuf: number, in_info: GstVideo.VideoInfo, plane: number, offset: number): EGLImage
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed directly as the format described in in_info. This is
     * useful if the hardware is capable of performing color space conversions
     * internally. The appropriate DRM format is picked, and the EGL image
     * is created with this DRM format.
     * 
     * Another notable difference to gst_egl_image_from_dmabuf()
     * is that this function creates one EGL image for all planes, not one for
     * a single plane.
     * @param context a #GstGLContext (must be an EGL context)
     * @param fd Array of DMABuf file descriptors
     * @param offset Array of offsets, relative to the DMABuf
     * @param in_info the #GstVideoInfo
     */
    static from_dmabuf_direct(context: GstGL.GLContext, fd: number, offset: number, in_info: GstVideo.VideoInfo): EGLImage
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed directly as the format described in in_info. This is
     * useful if the hardware is capable of performing color space conversions
     * internally. The appropriate DRM format is picked, and the EGL image
     * is created with this DRM format.
     * 
     * Another notable difference to gst_egl_image_from_dmabuf()
     * is that this function creates one EGL image for all planes, not one for
     * a single plane.
     * @param context a #GstGLContext (must be an EGL context)
     * @param fd Array of DMABuf file descriptors
     * @param offset Array of offsets, relative to the DMABuf
     * @param in_info the #GstVideoInfo
     * @param target GL texture target this GstEGLImage is intended for
     */
    static from_dmabuf_direct_target(context: GstGL.GLContext, fd: number, offset: number, in_info: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage
    static from_texture(context: GstGL.GLContext, gl_mem: GstGL.GLMemory, attribs: number): EGLImage
}

interface GLDisplayEGLClass {

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLClass

    object_class: GstGL.GLDisplayClass
    _padding: object[]
}

abstract class GLDisplayEGLClass {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLClass

    static name: string
}

interface GLDisplayEGLDeviceClass {

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDeviceClass

    object_class: GstGL.GLDisplayClass
    _padding: object[]
}

/**
 * Opaque #GstGLDisplayEGLDeviceClass struct
 * @record 
 */
abstract class GLDisplayEGLDeviceClass {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDeviceClass

    static name: string
}

interface GLMemoryEGL {

    // Owm methods of GstGLEGL-1.0.GstGLEGL.GLMemoryEGL

    get_display(): object | null
    get_image(): object | null
}

/**
 * #GstGLMemoryEGL is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLVideoAllocationParams.
 * @record 
 */
class GLMemoryEGL {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGL

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLMemoryEGL

    /**
     * Initializes the GL Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemoryEGL operation.
     */
    static init_once(): void
}

interface GLMemoryEGLAllocatorClass {
}

/**
 * The #GstGLMemoryEGLAllocatorClass only contains private data
 * @record 
 */
abstract class GLMemoryEGLAllocatorClass {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocatorClass

    static name: string
}

}
export default GstGLEGL;