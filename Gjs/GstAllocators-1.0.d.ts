// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstAllocators-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
const ALLOCATOR_DMABUF: string
const ALLOCATOR_FD: string
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
const CAPS_FEATURE_MEMORY_DMABUF: string
/**
 * Return the file descriptor associated with `mem`.
 * @param mem the memory to get the file descriptor
 */
function dmabuf_memory_get_fd(mem: Gst.Memory): number
/**
 * Get the fd from `mem`. Call gst_is_fd_memory() to check if `mem` has
 * an fd.
 * @param mem #GstMemory
 */
function fd_memory_get_fd(mem: Gst.Memory): number
/**
 * Check if `mem` is dmabuf memory.
 * @param mem the memory to be check
 */
function is_dmabuf_memory(mem: Gst.Memory): boolean
/**
 * Check if `mem` is memory backed by an fd
 * @param mem #GstMemory
 */
function is_fd_memory(mem: Gst.Memory): boolean
function is_phys_memory(mem: Gst.Memory): boolean
function phys_memory_get_phys_addr(mem: Gst.Memory): number
interface PhysMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps, GObject.Object_ConstructProps {
}

interface PhysMemoryAllocator extends Gst.Allocator {

    // Conflicting properties

    object: any

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstAllocators-1.0.GstAllocators.PhysMemoryAllocator

    vfunc_get_phys_addr(mem: Gst.Memory): number

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

    constructor(config?: PhysMemoryAllocator_ConstructProps) 
    _init(config?: PhysMemoryAllocator_ConstructProps): void
}

interface DmaBufAllocator_ConstructProps extends FdAllocator_ConstructProps {
}

interface DmaBufAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstAllocators-1.0.GstAllocators.DmaBufAllocator

    parent: FdAllocator

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: DmaBufAllocator_ConstructProps) 
    /**
     * Return a new dmabuf allocator.
     * @constructor 
     */
    constructor() 
    /**
     * Return a new dmabuf allocator.
     * @constructor 
     */
    static new(): DmaBufAllocator
    _init(config?: DmaBufAllocator_ConstructProps): void
    /**
     * Return a %GstMemory that wraps a dmabuf file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd dmabuf file descriptor
     * @param size memory size
     */
    static alloc(allocator: Gst.Allocator, fd?: number, size?: number): Gst.Memory

    // Overloads of alloc

    /**
     * Return a %GstMemory that wraps a generic file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd file descriptor
     * @param size memory size
     * @param flags extra #GstFdMemoryFlags
     */
    static alloc(allocator: Gst.Allocator, fd?: number, size?: number, flags?: FdMemoryFlags): Gst.Memory
    static alloc(...args: any[]): any
    static alloc(args_or_allocator: any[] | Gst.Allocator, fd?: number, size?: number, flags?: FdMemoryFlags): Gst.Memory | any
    /**
     * Return a %GstMemory that wraps a dmabuf file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd dmabuf file descriptor
     * @param size memory size
     * @param flags extra #GstFdMemoryFlags
     */
    static alloc_with_flags(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory
}

interface FdAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}

interface FdAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstAllocators-1.0.GstAllocators.FdAllocator

    parent: Gst.Allocator

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: FdAllocator_ConstructProps) 
    /**
     * Return a new fd allocator.
     * @constructor 
     */
    constructor() 
    /**
     * Return a new fd allocator.
     * @constructor 
     */
    static new(): FdAllocator
    _init(config?: FdAllocator_ConstructProps): void
    /**
     * Return a %GstMemory that wraps a generic file descriptor.
     * @param allocator allocator to be used for this memory
     * @param fd file descriptor
     * @param size memory size
     * @param flags extra #GstFdMemoryFlags
     */
    static alloc(allocator: Gst.Allocator, fd?: number, size?: number, flags?: FdMemoryFlags): Gst.Memory
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

    get_phys_addr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => number
}

/**
 * Marker interface for allocators with physical address backed memory
 * @record 
 */
abstract class PhysMemoryAllocatorInterface {

    // Own properties of GstAllocators-1.0.GstAllocators.PhysMemoryAllocatorInterface

    static name: string
}

}
export default GstAllocators;