
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstallocators-1.0-ambient.d.ts';
import './gstallocators-1.0-import.d.ts';
/**
 * GstAllocators-1.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstAllocators {

/**
 * Various flags to control the operation of the fd backed memory.
 * @bitfield 
 */
enum FdMemoryFlags {
    /**
     * no flag
     */
    NONE,
    /**
     * once the memory is mapped,
     *        keep it mapped until the memory is destroyed.
     */
    KEEP_MAPPED,
    /**
     * do a private mapping instead of
     *        the default shared mapping.
     */
    MAP_PRIVATE,
    /**
     * don't close the file descriptor when
     *        the memory is freed. Since: 1.10
     */
    DONT_CLOSE,
}
const ALLOCATOR_DMABUF: string | null
const ALLOCATOR_FD: string | null
/**
 * Constant that defines the caps feature name for DMA buffer sharing.
 * 
 * It has to be used for non-mappable dma-buf only, i.e. when the underlying
 * memory is not mappable to user space. Or when the mapped memory contains
 * non meaningful data. It can be the case for protected content or when the
 * user wants explicitly avoid any software post processing.
 * 
 * In these cases all elements between the exported and the importer has to work
 * in passthrough mode. This is done by adding this caps feature.
 * 
 * When the memory is mappable for read and write requests then it is assumes
 * to be a fast path and so this caps feature should not be used. Though
 * according to the dma-buf protocol, while it is mapped it prevents the
 * exporter to migrate the buffer.
 * 
 * This caps feature should not serve at all the purpose of selecting the
 * `GST_ALLOCATOR_DMABUF` allocator during caps negotiation.
 * When the exporter is the upstream element from the importer point of view,
 * the exporter should try to map the dma buffer at runtime (preferably during
 * decide_allocation phase). When it succeeds for #GST_MAP_READWRITE this caps
 * feature should not be used. This allows scalers, color converts and any image
 * processing filters to work directly on the dma buffer.
 * In this case the importer element should check all incoming memory using
 * gst_is_dmabuf_memory().
 */
const CAPS_FEATURE_MEMORY_DMABUF: string | null
/**
 * Return the file descriptor associated with `mem`.
 * @param mem the memory to get the file descriptor
 * @returns the file descriptor associated with the memory, or -1.  The file     descriptor is still owned by the GstMemory.  Use dup to take a copy     if you intend to use it beyond the lifetime of this GstMemory.
 */
function dmabuf_memory_get_fd(mem: Gst.Memory): number
/**
 * Exports a DMABuf from the DRM Bumb buffer object. One can check if this
 * feature is supported using gst_drm_dumb_allocator_has_prime_export();
 * @param mem the memory to export from
 * @returns a #GstMemory from #GstDmaBufAllocator wrapping the exported dma-buf    file descriptor.
 */
function drm_dumb_memory_export_dmabuf(mem: Gst.Memory): Gst.Memory
/**
 * Return the DRM buffer object handle associated with `mem`.
 * @param mem the memory to get the handle from
 * @returns the DRM buffer object handle associated with the memory, or 0.     The handle is still owned by the GstMemory and cannot be used     beyond the lifetime of this GstMemory unless it is being passed     to DRM driver, which does handle a refcount internally.
 */
function drm_dumb_memory_get_handle(mem: Gst.Memory): number
/**
 * Get the fd from `mem`. Call gst_is_fd_memory() to check if `mem` has
 * an fd.
 * @param mem #GstMemory
 * @returns the fd of @mem or -1 when there is no fd on @mem
 */
function fd_memory_get_fd(mem: Gst.Memory): number
/**
 * Check if `mem` is dmabuf memory.
 * @param mem the memory to be check
 * @returns %TRUE if @mem is dmabuf memory, otherwise %FALSE
 */
function is_dmabuf_memory(mem: Gst.Memory): boolean
function is_drm_dumb_memory(mem: Gst.Memory): boolean
/**
 * Check if `mem` is memory backed by an fd
 * @param mem #GstMemory
 * @returns %TRUE when @mem has an fd that can be retrieved with gst_fd_memory_get_fd().
 */
function is_fd_memory(mem: Gst.Memory): boolean
function is_phys_memory(mem: Gst.Memory): boolean
function phys_memory_get_phys_addr(mem: Gst.Memory): never
module PhysMemoryAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Allocator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface PhysMemoryAllocator extends Gst.Allocator {

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

    // Own virtual methods of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    vfunc_get_phys_addr(mem: Gst.Memory): never

    // Class property signals of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PhysMemoryAllocator extends GObject.Object {

    // Own properties of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    static name: string
    static $gtype: GObject.GType<PhysMemoryAllocator>

    // Constructors of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    constructor(config?: PhysMemoryAllocator.ConstructorProperties) 
    _init(config?: PhysMemoryAllocator.ConstructorProperties): void
}

module DRMDumbAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {

        // Own constructor properties of GstAllocators-1.0.GstAllocators.DRMDumbAllocator

        drm_device_path?: string | null
        drm_fd?: number | null
        drmDevicePath?: string | null
        drmFd?: number | null
    }

}

interface DRMDumbAllocator {

    // Own properties of GstAllocators-1.0.GstAllocators.DRMDumbAllocator

    readonly drm_device_path: string | null
    readonly drmDevicePath: string | null
    readonly drm_fd: number
    readonly drmFd: number

    // Conflicting properties

    object: any

    // Owm methods of GstAllocators-1.0.GstAllocators.DRMDumbAllocator

    /**
     * Allocated a DRM buffer object for the specific `drm_fourcc,` `width` and
     * `height`. Note that the DRM Dumb allocation interface is agnostic to the
     * pixel format. This `drm_fourcc` is converted into a bpp (bit-per-pixel)
     * number and the height is scaled according to the sub-sampling.
     * @param drm_fourcc the DRM format to allocate for
     * @param width padded width for this allocation
     * @param height padded height for this allocation
     * @returns a new DRM Dumb #GstMemory. Use gst_memory_unref()   to release the memory after usage.
     */
    alloc(drm_fourcc: number, width: number, height: number): [ /* returnType */ Gst.Memory, /* out_pitch */ number ]

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
     * @param size size of the visible memory area
     * @param params optional parameters
     * @returns a new #GstMemory.
     */
    alloc(size: number, params: Gst.AllocationParams | null): Gst.Memory | null
    /**
     * This function allow verifying if the driver support dma-buf exportation.
     * @returns %TRUE if the allocator support exporting dma-buf.
     */
    has_prime_export(): boolean

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

    // Class property signals of GstAllocators-1.0.GstAllocators.DRMDumbAllocator

    connect(sigName: "notify::drm-device-path", callback: (($obj: DRMDumbAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drm-device-path", callback: (($obj: DRMDumbAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drm-device-path", ...args: any[]): void
    connect(sigName: "notify::drm-fd", callback: (($obj: DRMDumbAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drm-fd", callback: (($obj: DRMDumbAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::drm-fd", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Private intance object for #GstDRMDumbAllocator.
 * @class 
 */
class DRMDumbAllocator extends Gst.Allocator {

    // Own properties of GstAllocators-1.0.GstAllocators.DRMDumbAllocator

    static name: string
    static $gtype: GObject.GType<DRMDumbAllocator>

    // Constructors of GstAllocators-1.0.GstAllocators.DRMDumbAllocator

    constructor(config?: DRMDumbAllocator.ConstructorProperties) 
    /**
     * Creates a new #GstDRMDumbAllocator for the specific device path. This
     * function can fail if the path does not exist, is not a DRM device or if
     * the DRM device doesnot support DUMB allocation.
     * @constructor 
     * @param drm_device_path path to the DRM device to open
     * @returns a new DRM Dumb allocator. Use gst_object_unref()   to release the allocator after usage.
     */
    static new_with_device_path(drm_device_path: string): DRMDumbAllocator
    /**
     * Creates a new #GstDRMDumbAllocator for the specific file desciptor. This
     * function can fail if the file descriptor is not a DRM device or if
     * the DRM device does not support DUMB allocation.
     * @constructor 
     * @param drm_fd file descriptor of the DRM device
     * @returns a new DRM Dumb allocator. Use gst_object_unref()   to release the allocator after usage.
     */
    static new_with_fd(drm_fd: number): DRMDumbAllocator
    _init(config?: DRMDumbAllocator.ConstructorProperties): void
}

module DmaBufAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends FdAllocator.ConstructorProperties {
    }

}

interface DmaBufAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    parent: FdAllocator & Gst.Allocator & Gst.Object & Gst.Object

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

    // Class property signals of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for allocators with dmabuf-backed memory
 * @class 
 */
class DmaBufAllocator extends FdAllocator {

    // Own properties of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    static name: string
    static $gtype: GObject.GType<DmaBufAllocator>

    // Constructors of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    constructor(config?: DmaBufAllocator.ConstructorProperties) 
    /**
     * Return a new dmabuf allocator.
     * @constructor 
     * @returns a new dmabuf allocator. Use gst_object_unref() to release the allocator after usage
     */
    constructor() 
    /**
     * Return a new dmabuf allocator.
     * @constructor 
     * @returns a new dmabuf allocator. Use gst_object_unref() to release the allocator after usage
     */
    static new(): DmaBufAllocator
    _init(config?: DmaBufAllocator.ConstructorProperties): void
    /**
     * Return a %GstMemory that wraps a dmabuf file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd dmabuf file descriptor
     * @param size memory size
     * @returns a GstMemory based on @allocator. When the buffer will be released dmabuf allocator will close the @fd. The memory is only mmapped on gst_buffer_map() request.
     */
    static alloc(allocator: Gst.Allocator, fd: number, size: number): Gst.Memory | null

    // Overloads of alloc

    /**
     * Return a %GstMemory that wraps a generic file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd file descriptor
     * @param size memory size
     * @param flags extra #GstFdMemoryFlags
     * @returns a GstMemory based on @allocator. When the buffer will be released the allocator will close the @fd unless the %GST_FD_MEMORY_FLAG_DONT_CLOSE flag is specified. The memory is only mmapped on gst_buffer_map() request.
     */
    static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory | null
    /**
     * Return a %GstMemory that wraps a dmabuf file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd dmabuf file descriptor
     * @param size memory size
     * @param flags extra #GstFdMemoryFlags
     * @returns a GstMemory based on @allocator. When the buffer will be released the allocator will close the @fd unless the %GST_FD_MEMORY_FLAG_DONT_CLOSE flag is specified. The memory is only mmapped on gst_buffer_mmap() request.
     */
    static alloc_with_flags(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory | null
}

module FdAllocator {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

interface FdAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstAllocators-1.0.GstAllocators.FdAllocator

    parent: Gst.Allocator & Gst.Object

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

    // Class property signals of GstAllocators-1.0.GstAllocators.FdAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for allocators with fd-backed memory
 * @class 
 */
class FdAllocator extends Gst.Allocator {

    // Own properties of GstAllocators-1.0.GstAllocators.FdAllocator

    static name: string
    static $gtype: GObject.GType<FdAllocator>

    // Constructors of GstAllocators-1.0.GstAllocators.FdAllocator

    constructor(config?: FdAllocator.ConstructorProperties) 
    /**
     * Return a new fd allocator.
     * @constructor 
     * @returns a new fd allocator. Use gst_object_unref() to release the allocator after usage
     */
    constructor() 
    /**
     * Return a new fd allocator.
     * @constructor 
     * @returns a new fd allocator. Use gst_object_unref() to release the allocator after usage
     */
    static new(): FdAllocator
    _init(config?: FdAllocator.ConstructorProperties): void
    /**
     * Return a %GstMemory that wraps a generic file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd file descriptor
     * @param size memory size
     * @param flags extra #GstFdMemoryFlags
     * @returns a GstMemory based on @allocator. When the buffer will be released the allocator will close the @fd unless the %GST_FD_MEMORY_FLAG_DONT_CLOSE flag is specified. The memory is only mmapped on gst_buffer_map() request.
     */
    static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory | null
}

interface DRMDumbAllocatorClass {

    // Own fields of GstAllocators-1.0.GstAllocators.DRMDumbAllocatorClass

    /**
     * Parent Class.
     * @field 
     */
    parent_class: Gst.AllocatorClass
}

abstract class DRMDumbAllocatorClass {

    // Own properties of GstAllocators-1.0.GstAllocators.DRMDumbAllocatorClass

    static name: string
}

interface DmaBufAllocatorClass {

    // Own fields of GstAllocators-1.0.GstAllocators.DmaBufAllocatorClass

    parent_class: FdAllocatorClass
}

abstract class DmaBufAllocatorClass {

    // Own properties of GstAllocators-1.0.GstAllocators.DmaBufAllocatorClass

    static name: string
}

interface FdAllocatorClass {

    // Own fields of GstAllocators-1.0.GstAllocators.FdAllocatorClass

    parent_class: Gst.AllocatorClass
}

abstract class FdAllocatorClass {

    // Own properties of GstAllocators-1.0.GstAllocators.FdAllocatorClass

    static name: string
}

interface PhysMemoryAllocatorInterface {

    // Own fields of GstAllocators-1.0.GstAllocators.PhysMemoryAllocatorInterface

    get_phys_addr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => never
}

/**
 * Marker interface for allocators with physical address backed memory
 * @record 
 */
abstract class PhysMemoryAllocatorInterface {

    // Own properties of GstAllocators-1.0.GstAllocators.PhysMemoryAllocatorInterface

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GstAllocators;
// END