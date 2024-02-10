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
    const ALLOCATOR_DMABUF: string;
    const ALLOCATOR_FD: string;
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
    const CAPS_FEATURE_MEMORY_DMABUF: string;
    /**
     * Return the file descriptor associated with `mem`.
     * @param mem the memory to get the file descriptor
     * @returns the file descriptor associated with the memory, or -1.  The file     descriptor is still owned by the GstMemory.  Use dup to take a copy     if you intend to use it beyond the lifetime of this GstMemory.
     */
    function dmabuf_memory_get_fd(mem: Gst.Memory): number;
    /**
     * Get the fd from `mem`. Call gst_is_fd_memory() to check if `mem` has
     * an fd.
     * @param mem #GstMemory
     * @returns the fd of @mem or -1 when there is no fd on @mem
     */
    function fd_memory_get_fd(mem: Gst.Memory): number;
    /**
     * Check if `mem` is dmabuf memory.
     * @param mem the memory to be check
     * @returns %TRUE if @mem is dmabuf memory, otherwise %FALSE
     */
    function is_dmabuf_memory(mem: Gst.Memory): boolean;
    /**
     * Check if `mem` is memory backed by an fd
     * @param mem #GstMemory
     * @returns %TRUE when @mem has an fd that can be retrieved with gst_fd_memory_get_fd().
     */
    function is_fd_memory(mem: Gst.Memory): boolean;
    function is_phys_memory(mem: Gst.Memory): boolean;
    function phys_memory_get_phys_addr(mem: Gst.Memory): never;
    /**
     * Various flags to control the operation of the fd backed memory.
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
    module DmaBufAllocator {
        // Constructor properties interface
    }

    /**
     * Base class for allocators with dmabuf-backed memory
     */
    class DmaBufAllocator extends FdAllocator {
        // Constructors of GstAllocators-1.0.DmaBufAllocator

        static ['new'](): DmaBufAllocator;

        // Owm methods of GstAllocators-1.0.DmaBufAllocator

        /**
         * Return a %GstMemory that wraps a dmabuf file descriptor.
         * @param allocator allocator to be used for this memory
         * @param fd dmabuf file descriptor
         * @param size memory size
         */
        static alloc(allocator: Gst.Allocator, fd: number, size: number): Gst.Memory | null;
        /**
         * Return a %GstMemory that wraps a dmabuf file descriptor.
         * @param allocator allocator to be used for this memory
         * @param fd dmabuf file descriptor
         * @param size memory size
         * @param flags extra #GstFdMemoryFlags
         */
        static alloc_with_flags(
            allocator: Gst.Allocator,
            fd: number,
            size: number,
            flags: FdMemoryFlags,
        ): Gst.Memory | null;
    }

    module FdAllocator {
        // Constructor properties interface
    }

    /**
     * Base class for allocators with fd-backed memory
     */
    class FdAllocator extends Gst.Allocator {
        // Constructors of GstAllocators-1.0.FdAllocator

        static ['new'](): FdAllocator;

        // Owm methods of GstAllocators-1.0.FdAllocator

        /**
         * Return a %GstMemory that wraps a generic file descriptor.
         * @param allocator allocator to be used for this memory
         * @param fd file descriptor
         * @param size memory size
         * @param flags extra #GstFdMemoryFlags
         */
        static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory | null;
    }

    class DmaBufAllocatorClass {}

    class FdAllocatorClass {}

    /**
     * Marker interface for allocators with physical address backed memory
     */
    class PhysMemoryAllocatorInterface {}

    interface PhysMemoryAllocator {
        // Own virtual methods of GstAllocators-1.0.PhysMemoryAllocator

        vfunc_get_phys_addr(mem: Gst.Memory): never;
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

export default GstAllocators;
// END
