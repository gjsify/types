
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstglegl-1.0-import.d.ts';
    
/**
 * GstGLEGL-1.0
 */

import type GstVideo from '@girs/node-gstvideo-1.0';
import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GstGL from '@girs/node-gstgl-1.0';

export const GL_DISPLAY_EGL_NAME: string
/**
 * The name of the GL Memory EGL allocator
 */
export const GL_MEMORY_EGL_ALLOCATOR_NAME: string
export function eglGetErrorString(err: number): string
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed as RGBA data. Shaders later take this "RGBA" data and
 * convert it from its true format (described by in_info) to actual
 * RGBA output. For example, with I420, three EGL images are created,
 * one for each `plane,` each EGL image with a single-channel R format.
 * With NV12, two EGL images are created, one with R format, one
 * with RG format etc.
 * @param context a #GstGLContext (must be an EGL context)
 * @param dmabuf the DMA-Buf file descriptor
 * @param inInfo the #GstVideoInfo in `dmabuf`
 * @param plane the plane in `in_info` to create and #GstEGLImage for
 * @param offset the byte-offset in the data
 * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
 */
export function eglImageFromDmabuf(context: GstGL.GLContext, dmabuf: number, inInfo: GstVideo.VideoInfo, plane: number, offset: number): EGLImage | null
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
 * @param inInfo the #GstVideoInfo
 * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
 */
export function eglImageFromDmabufDirect(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo): EGLImage | null
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed directly as the format described in `in_info`. This is
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
 * @param inInfo the #GstVideoInfo
 * @param target GL texture target this GstEGLImage is intended for
 * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
 */
export function eglImageFromDmabufDirectTarget(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage | null
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data is passed
 * directly as the format described in `in_info`. This is useful if the hardware
 * is capable of performing color space conversions internally.
 * 
 * Another notable difference to gst_egl_image_from_dmabuf() is that this
 * function creates one EGL image for all planes, not one for a single plane.
 * @param context a #GstGLContext (must be an EGL context)
 * @param fd Array of DMABuf file descriptors
 * @param offset Array of offsets, relative to the DMABuf
 * @param inInfoDma the #GstVideoInfoDmaDrm
 * @param target GL texture target this GstEGLImage is intended for
 * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
 */
export function eglImageFromDmabufDirectTargetWithDmaDrm(context: GstGL.GLContext, fd: number, offset: number, inInfoDma: GstVideo.VideoInfoDmaDrm, target: GstGL.GLTextureTarget): EGLImage | null
/**
 * Creates an EGL image that imports the dmabuf FD. The dmabuf data
 * is passed as RGBA data. Shaders later take this "RGBA" data and
 * convert it from its true format (described by in_info) to actual
 * RGBA output. For example, with I420, three EGL images are created,
 * one for each `plane,` each EGL image with a single-channel R format.
 * With NV12, two EGL images are created, one with R format, one
 * with RG format etc. User can specify the modifier in `in_info_dma`
 * for non-linear dmabuf.
 * @param context a #GstGLContext (must be an EGL context)
 * @param dmabuf the DMA-Buf file descriptor
 * @param inInfoDma the #GstVideoInfoDmaDrm in `dmabuf`
 * @param plane the plane in `in_info` to create and #GstEGLImage for
 * @param offset the byte-offset in the data
 * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
 */
export function eglImageFromDmabufWithDmaDrm(context: GstGL.GLContext, dmabuf: number, inInfoDma: GstVideo.VideoInfoDmaDrm, plane: number, offset: number): EGLImage | null
export function eglImageFromTexture(context: GstGL.GLContext, glMem: GstGL.GLMemory, attribs: never): EGLImage | null
/**
 * Initializes the GL Memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other GstGLMemoryEGL operation.
 */
export function glMemoryEglInitOnce(): void
export function isGlMemoryEgl(mem: Gst.Memory): boolean
/**
 * Function to be called when the GstEGLImage is destroyed. It should free
 * the associated `EGLImage` if necessary
 * @callback 
 * @param image a #GstEGLImage
 * @param data user data passed to gst_egl_image_new_wrapped()
 */
export interface EGLImageDestroyNotify {
    (image: EGLImage, data: any | null): void
}
export module GLDisplayEGL {

    // Constructor properties interface

    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
    }

}

export interface GLDisplayEGL {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    __gtype__: number

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    parent: GstGL.GLDisplay & Gst.Object

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

    // Class property signals of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

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
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayEGL are private and should only be accessed
 * through the provided API
 * @class 
 */
export class GLDisplayEGL extends GstGL.GLDisplay {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLDisplayEGL

    constructor(config?: GLDisplayEGL.ConstructorProperties) 
    /**
     * Create a new #GstGLDisplayEGL using the default EGL_DEFAULT_DISPLAY.
     * @constructor 
     * @returns a new #GstGLDisplayEGL or %NULL
     */
    constructor() 
    /**
     * Create a new #GstGLDisplayEGL using the default EGL_DEFAULT_DISPLAY.
     * @constructor 
     * @returns a new #GstGLDisplayEGL or %NULL
     */
    static new(): GLDisplayEGL

    // Overloads of new

    static new(): GstGL.GLDisplay
    static newWithEglDisplay(display: any | null): GLDisplayEGL
    _init(config?: GLDisplayEGL.ConstructorProperties): void
    /**
     * Creates a EGL display connection from a native Display.
     * 
     * This function will return the same value for multiple calls with the same
     * `display`.
     * @param display an existing #GstGLDisplay
     * @returns a new #GstGLDisplayEGL
     */
    static fromGlDisplay(display: GstGL.GLDisplay): GLDisplayEGL | null
    /**
     * Attempts to create a new `EGLDisplay` from `display`.  If `type` is
     * %GST_GL_DISPLAY_TYPE_ANY, then `display` must be 0. `type` must not be
     * %GST_GL_DISPLAY_TYPE_NONE.
     * @param type a #GstGLDisplayType
     * @param display pointer to a display (or 0)
     * @returns A `EGLDisplay` or `EGL_NO_DISPLAY`
     */
    static getFromNative(type: GstGL.GLDisplayType, display: never): any | null
}

export module GLDisplayEGLDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
    }

}

export interface GLDisplayEGLDevice {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    __gtype__: number

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    parent: GstGL.GLDisplay & Gst.Object
    device: any
    padding: any[]

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

    // Class property signals of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

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
    disconnect(id: number): void
}

/**
 * the contents of a #GstGLDisplayEGLDevice are private and should only be accessed
 * through the provided API
 * @class 
 */
export class GLDisplayEGLDevice extends GstGL.GLDisplay {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDevice

    constructor(config?: GLDisplayEGLDevice.ConstructorProperties) 
    /**
     * Create a new #GstGLDisplayEGLDevice with an EGLDevice supported device
     * @constructor 
     * @param deviceIndex the index of device to use
     * @returns a new #GstGLDisplayEGLDevice or %NULL
     */
    constructor(deviceIndex: number) 
    /**
     * Create a new #GstGLDisplayEGLDevice with an EGLDevice supported device
     * @constructor 
     * @param deviceIndex the index of device to use
     * @returns a new #GstGLDisplayEGLDevice or %NULL
     */
    static new(deviceIndex: number): GLDisplayEGLDevice

    // Overloads of new

    static new(): GstGL.GLDisplay
    /**
     * Creates a new #GstGLDisplayEGLDevice with EGLDeviceEXT .
     * The `device` must be created using EGLDevice enumeration.
     * @constructor 
     * @param device an existing EGLDeviceEXT
     * @returns a new #GstGLDisplayEGLDevice
     */
    static newWithEglDevice(device: any | null): GLDisplayEGLDevice
    _init(config?: GLDisplayEGLDevice.ConstructorProperties): void
}

export module GLMemoryEGLAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends GstGL.GLMemoryAllocator.ConstructorProperties {
    }

}

export interface GLMemoryEGLAllocator {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Conflicting methods

    alloc(params: GstGL.GLAllocationParams): GstGL.GLBaseMemory | null

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

    // Class property signals of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

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
    disconnect(id: number): void
}

/**
 * Opaque #GstGLMemoryEGLAllocator struct
 * @class 
 */
export class GLMemoryEGLAllocator extends GstGL.GLMemoryAllocator {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocator

    constructor(config?: GLMemoryEGLAllocator.ConstructorProperties) 
    _init(config?: GLMemoryEGLAllocator.ConstructorProperties): void
}

export interface EGLImage {

    // Owm methods of GstGLEGL-1.0.GstGLEGL.EGLImage

    exportDmabuf(fd: number, stride: number, offset: number): boolean
    getImage(): any | null
}

/**
 * #GstEGLImage represents and holds an `EGLImage` handle.
 * 
 * A #GstEGLImage can be created from a dmabuf with gst_egl_image_from_dmabuf(),
 * or gst_egl_image_from_dmabuf_direct(), or #GstGLMemoryEGL provides a
 * #GstAllocator to allocate `EGLImage`'s bound to and OpenGL texture.
 * @record 
 */
export class EGLImage {

    // Own properties of GstGLEGL-1.0.GstGLEGL.EGLImage

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.EGLImage

    static newWrapped(context: GstGL.GLContext, image: any | null, format: GstGL.GLFormat, userDataDestroy: EGLImageDestroyNotify): EGLImage
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed as RGBA data. Shaders later take this "RGBA" data and
     * convert it from its true format (described by in_info) to actual
     * RGBA output. For example, with I420, three EGL images are created,
     * one for each `plane,` each EGL image with a single-channel R format.
     * With NV12, two EGL images are created, one with R format, one
     * with RG format etc.
     * @param context a #GstGLContext (must be an EGL context)
     * @param dmabuf the DMA-Buf file descriptor
     * @param inInfo the #GstVideoInfo in `dmabuf`
     * @param plane the plane in `in_info` to create and #GstEGLImage for
     * @param offset the byte-offset in the data
     * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
     */
    static fromDmabuf(context: GstGL.GLContext, dmabuf: number, inInfo: GstVideo.VideoInfo, plane: number, offset: number): EGLImage | null
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
     * @param inInfo the #GstVideoInfo
     * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
     */
    static fromDmabufDirect(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo): EGLImage | null
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed directly as the format described in `in_info`. This is
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
     * @param inInfo the #GstVideoInfo
     * @param target GL texture target this GstEGLImage is intended for
     * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
     */
    static fromDmabufDirectTarget(context: GstGL.GLContext, fd: number, offset: number, inInfo: GstVideo.VideoInfo, target: GstGL.GLTextureTarget): EGLImage | null
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data is passed
     * directly as the format described in `in_info`. This is useful if the hardware
     * is capable of performing color space conversions internally.
     * 
     * Another notable difference to gst_egl_image_from_dmabuf() is that this
     * function creates one EGL image for all planes, not one for a single plane.
     * @param context a #GstGLContext (must be an EGL context)
     * @param fd Array of DMABuf file descriptors
     * @param offset Array of offsets, relative to the DMABuf
     * @param inInfoDma the #GstVideoInfoDmaDrm
     * @param target GL texture target this GstEGLImage is intended for
     * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
     */
    static fromDmabufDirectTargetWithDmaDrm(context: GstGL.GLContext, fd: number, offset: number, inInfoDma: GstVideo.VideoInfoDmaDrm, target: GstGL.GLTextureTarget): EGLImage | null
    /**
     * Creates an EGL image that imports the dmabuf FD. The dmabuf data
     * is passed as RGBA data. Shaders later take this "RGBA" data and
     * convert it from its true format (described by in_info) to actual
     * RGBA output. For example, with I420, three EGL images are created,
     * one for each `plane,` each EGL image with a single-channel R format.
     * With NV12, two EGL images are created, one with R format, one
     * with RG format etc. User can specify the modifier in `in_info_dma`
     * for non-linear dmabuf.
     * @param context a #GstGLContext (must be an EGL context)
     * @param dmabuf the DMA-Buf file descriptor
     * @param inInfoDma the #GstVideoInfoDmaDrm in `dmabuf`
     * @param plane the plane in `in_info` to create and #GstEGLImage for
     * @param offset the byte-offset in the data
     * @returns a #GstEGLImage wrapping @dmabuf or %NULL on failure
     */
    static fromDmabufWithDmaDrm(context: GstGL.GLContext, dmabuf: number, inInfoDma: GstVideo.VideoInfoDmaDrm, plane: number, offset: number): EGLImage | null
    static fromTexture(context: GstGL.GLContext, glMem: GstGL.GLMemory, attribs: never): EGLImage | null
}

export interface GLDisplayEGLClass {

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLClass

    objectClass: GstGL.GLDisplayClass
    padding: any[]
}

export abstract class GLDisplayEGLClass {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLClass

    static name: string
}

export interface GLDisplayEGLDeviceClass {

    // Own fields of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDeviceClass

    objectClass: GstGL.GLDisplayClass
    padding: any[]
}

/**
 * Opaque #GstGLDisplayEGLDeviceClass struct
 * @record 
 */
export abstract class GLDisplayEGLDeviceClass {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLDisplayEGLDeviceClass

    static name: string
}

export interface GLMemoryEGL {

    // Owm methods of GstGLEGL-1.0.GstGLEGL.GLMemoryEGL

    getDisplay(): any | null
    getImage(): any | null
}

/**
 * #GstGLMemoryEGL is created or wrapped through gst_gl_base_memory_alloc()
 * with #GstGLVideoAllocationParams.
 * @record 
 */
export class GLMemoryEGL {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGL

    static name: string

    // Constructors of GstGLEGL-1.0.GstGLEGL.GLMemoryEGL

    /**
     * Initializes the GL Memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other GstGLMemoryEGL operation.
     */
    static initOnce(): void
}

export interface GLMemoryEGLAllocatorClass {
}

/**
 * The #GstGLMemoryEGLAllocatorClass only contains private data
 * @record 
 */
export abstract class GLMemoryEGLAllocatorClass {

    // Own properties of GstGLEGL-1.0.GstGLEGL.GLMemoryEGLAllocatorClass

    static name: string
}

// END