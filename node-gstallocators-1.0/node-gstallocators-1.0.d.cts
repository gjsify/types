
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstAllocators-1.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Various flags to control the operation of the fd backed memory.
 * @bitfield 
 */
export enum FdMemoryFlags {
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
export const ALLOCATOR_DMABUF: string | null
export const ALLOCATOR_FD: string | null
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
export const CAPS_FEATURE_MEMORY_DMABUF: string | null
/**
 * Return the file descriptor associated with `mem`.
 * @param mem the memory to get the file descriptor
 * @returns the file descriptor associated with the memory, or -1.  The file     descriptor is still owned by the GstMemory.  Use dup to take a copy     if you intend to use it beyond the lifetime of this GstMemory.
 */
export function dmabufMemoryGetFd(mem: Gst.Memory): number
/**
 * Get the fd from `mem`. Call gst_is_fd_memory() to check if `mem` has
 * an fd.
 * @param mem #GstMemory
 * @returns the fd of @mem or -1 when there is no fd on @mem
 */
export function fdMemoryGetFd(mem: Gst.Memory): number
/**
 * Check if `mem` is dmabuf memory.
 * @param mem the memory to be check
 * @returns %TRUE if @mem is dmabuf memory, otherwise %FALSE
 */
export function isDmabufMemory(mem: Gst.Memory): boolean
/**
 * Check if `mem` is memory backed by an fd
 * @param mem #GstMemory
 * @returns %TRUE when @mem has an fd that can be retrieved with gst_fd_memory_get_fd().
 */
export function isFdMemory(mem: Gst.Memory): boolean
export function isPhysMemory(mem: Gst.Memory): boolean
export function physMemoryGetPhysAddr(mem: Gst.Memory): never
export module PhysMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface PhysMemoryAllocator extends Gst.Allocator {

    // Own properties of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

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

    // Own virtual methods of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    getPhysAddr(mem: Gst.Memory): never

    // Class property signals of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

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

export class PhysMemoryAllocator extends GObject.Object {

    // Own properties of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    static name: string

    // Constructors of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    constructor(config?: PhysMemoryAllocator.ConstructorProperties) 
    _init(config?: PhysMemoryAllocator.ConstructorProperties): void
}

export module DmaBufAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends FdAllocator.ConstructorProperties {
    }

}

export interface DmaBufAllocator {

    // Own properties of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    __gtype__: number

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
 * Base class for allocators with dmabuf-backed memory
 * @class 
 */
export class DmaBufAllocator extends FdAllocator {

    // Own properties of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    static name: string

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
    static allocWithFlags(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory | null
}

export module FdAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

export interface FdAllocator {

    // Own properties of GstAllocators-1.0.GstAllocators.FdAllocator

    __gtype__: number

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
 * Base class for allocators with fd-backed memory
 * @class 
 */
export class FdAllocator extends Gst.Allocator {

    // Own properties of GstAllocators-1.0.GstAllocators.FdAllocator

    static name: string

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

export interface DmaBufAllocatorClass {

    // Own fields of GstAllocators-1.0.GstAllocators.DmaBufAllocatorClass

    parentClass: FdAllocatorClass
}

export abstract class DmaBufAllocatorClass {

    // Own properties of GstAllocators-1.0.GstAllocators.DmaBufAllocatorClass

    static name: string
}

export interface FdAllocatorClass {

    // Own fields of GstAllocators-1.0.GstAllocators.FdAllocatorClass

    parentClass: Gst.AllocatorClass
}

export abstract class FdAllocatorClass {

    // Own properties of GstAllocators-1.0.GstAllocators.FdAllocatorClass

    static name: string
}

export interface PhysMemoryAllocatorInterface {

    // Own fields of GstAllocators-1.0.GstAllocators.PhysMemoryAllocatorInterface

    getPhysAddr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => never
}

/**
 * Marker interface for allocators with physical address backed memory
 * @record 
 */
export abstract class PhysMemoryAllocatorInterface {

    // Own properties of GstAllocators-1.0.GstAllocators.PhysMemoryAllocatorInterface

    static name: string
}
