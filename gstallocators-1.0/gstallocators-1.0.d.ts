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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstAllocators {
    /**
     * GstAllocators-1.0
     */

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
     * Exports a DMABuf from the DRM Bumb buffer object. One can check if this
     * feature is supported using gst_drm_dumb_allocator_has_prime_export();
     * @param mem the memory to export from
     * @returns a #GstMemory from #GstDmaBufAllocator wrapping the exported dma-buf    file descriptor.
     */
    function drm_dumb_memory_export_dmabuf(mem: Gst.Memory): Gst.Memory;
    /**
     * Return the DRM buffer object handle associated with `mem`.
     * @param mem the memory to get the handle from
     * @returns the DRM buffer object handle associated with the memory, or 0.     The handle is still owned by the GstMemory and cannot be used     beyond the lifetime of this GstMemory unless it is being passed     to DRM driver, which does handle a refcount internally.
     */
    function drm_dumb_memory_get_handle(mem: Gst.Memory): number;
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
    function is_drm_dumb_memory(mem: Gst.Memory): boolean;
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

    /**
     * Various flags to control the operation of the fd backed memory.
     */
    export namespace FdMemoryFlags {
        export const $gtype: GObject.GType<FdMemoryFlags>;
    }

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
    namespace DRMDumbAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::drm-device-path': (pspec: GObject.ParamSpec) => void;
            'notify::drm-fd': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {
            drm_device_path: string;
            drmDevicePath: string;
            drm_fd: number;
            drmFd: number;
        }
    }

    /**
     * Private intance object for #GstDRMDumbAllocator.
     */
    class DRMDumbAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<DRMDumbAllocator>;

        // Properties

        get drm_device_path(): string;
        get drmDevicePath(): string;
        get drm_fd(): number;
        get drmFd(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DRMDumbAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DRMDumbAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_with_device_path(drm_device_path: string): DRMDumbAllocator;

        static new_with_fd(drm_fd: number): DRMDumbAllocator;

        // Signals

        connect<K extends keyof DRMDumbAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DRMDumbAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DRMDumbAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DRMDumbAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DRMDumbAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DRMDumbAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        alloc(drm_fourcc: number, width: number, height: number): [Gst.Memory, number];
        // Conflicted with Gst.Allocator.alloc
        alloc(...args: never[]): any;
        /**
         * This function allow verifying if the driver support dma-buf exportation.
         * @returns %TRUE if the allocator support exporting dma-buf.
         */
        has_prime_export(): boolean;
    }

    namespace DmaBufAllocator {
        // Signal signatures
        interface SignalSignatures extends FdAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends FdAllocator.ConstructorProps {}
    }

    /**
     * Base class for allocators with dmabuf-backed memory
     */
    class DmaBufAllocator extends FdAllocator {
        static $gtype: GObject.GType<DmaBufAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DmaBufAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DmaBufAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DmaBufAllocator;

        // Signals

        connect<K extends keyof DmaBufAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DmaBufAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DmaBufAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DmaBufAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DmaBufAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DmaBufAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

    namespace FdAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Base class for allocators with fd-backed memory
     */
    class FdAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<FdAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FdAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FdAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FdAllocator;

        // Signals

        connect<K extends keyof FdAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FdAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FdAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FdAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FdAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FdAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Return a %GstMemory that wraps a generic file descriptor.
         * @param allocator allocator to be used for this memory
         * @param fd file descriptor
         * @param size memory size
         * @param flags extra #GstFdMemoryFlags
         */
        static alloc(allocator: Gst.Allocator, fd: number, size: number, flags: FdMemoryFlags): Gst.Memory | null;
    }

    type DRMDumbAllocatorClass = typeof DRMDumbAllocator;
    type DmaBufAllocatorClass = typeof DmaBufAllocator;
    type FdAllocatorClass = typeof FdAllocator;
    type PhysMemoryAllocatorInterface = typeof PhysMemoryAllocator;
    namespace PhysMemoryAllocator {
        /**
         * Interface for implementing PhysMemoryAllocator.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            vfunc_get_phys_addr(mem: Gst.Memory): never;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    export interface PhysMemoryAllocatorNamespace {
        $gtype: GObject.GType<PhysMemoryAllocator>;
        prototype: PhysMemoryAllocator;
    }
    interface PhysMemoryAllocator extends Gst.Allocator, PhysMemoryAllocator.Interface {}

    export const PhysMemoryAllocator: PhysMemoryAllocatorNamespace & {
        new (): PhysMemoryAllocator; // This allows `obj instanceof PhysMemoryAllocator`
    };

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
