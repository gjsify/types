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
import type CudaGst from '@girs/cudagst-1.0';

export namespace GstCuda {
    /**
     * GstCuda-1.0
     */

    export namespace CudaGraphicsResourceType {
        export const $gtype: GObject.GType<CudaGraphicsResourceType>;
    }

    enum CudaGraphicsResourceType {
        NONE,
        GL_BUFFER,
        D3D11_RESOURCE,
    }

    export namespace CudaQuarkId {
        export const $gtype: GObject.GType<CudaQuarkId>;
    }

    enum CudaQuarkId {
        GRAPHICS_RESOURCE,
        MAX,
    }
    /**
     * Name of the caps feature for indicating the use of #GstCudaMemory
     */
    const CAPS_FEATURE_MEMORY_CUDA_MEMORY: string;
    const CUDA_CONTEXT_TYPE: string;
    /**
     * Name of cuda memory type
     */
    const CUDA_MEMORY_TYPE_NAME: string;
    /**
     * Flag indicating that we should map the CUDA device memory
     * instead of to system memory.
     *
     * Combining #GST_MAP_CUDA with #GST_MAP_WRITE has the same semantics as though
     * you are writing to CUDA device/host memory.
     * Conversely, combining #GST_MAP_CUDA with
     * #GST_MAP_READ has the same semantics as though you are reading from
     * CUDA device/host memory
     */
    const MAP_CUDA: number;
    function context_new_cuda_context(cuda_ctx: CudaContext): Gst.Context;
    /**
     * Perform the steps necessary for retrieving a #GstCudaContext from the
     * surrounding elements or from the application using the #GstContext mechanism.
     *
     * If the content of `cuda_ctx` is not %NULL, then no #GstContext query is
     * necessary for #GstCudaContext.
     * @param element the #GstElement running the query
     * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
     * @param cuda_ctx the resulting #GstCudaContext
     * @returns whether a #GstCudaContext exists in @cuda_ctx
     */
    function cuda_ensure_element_context(
        element: Gst.Element,
        device_id: number,
        cuda_ctx: CudaContext,
    ): [boolean, CudaContext];
    function cuda_handle_context_query(element: Gst.Element, query: Gst.Query, cuda_ctx?: CudaContext | null): boolean;
    /**
     * Helper function for implementing #GstElementClass.set_context() in
     * CUDA capable elements.
     *
     * Retrieves the #GstCudaContext in `context` and places the result in `cuda_ctx`.
     * @param element a #GstElement
     * @param context a #GstContext
     * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
     * @param cuda_ctx location of a #GstCudaContext
     * @returns whether the @cuda_ctx could be set successfully
     */
    function cuda_handle_set_context(
        element: Gst.Element,
        context: Gst.Context,
        device_id: number,
        cuda_ctx: CudaContext,
    ): [boolean, CudaContext];
    /**
     * Loads the cuda library
     * @returns %TRUE if the libcuda could be loaded %FALSE otherwise
     */
    function cuda_load_library(): boolean;
    /**
     * Ensures that the #GstCudaAllocator is initialized and ready to be used.
     */
    function cuda_memory_init_once(): void;
    function cuda_nvrtc_compile(source: string): string;
    /**
     * Loads the nvrtc library.
     * @returns %TRUE if the library could be loaded, %FALSE otherwise
     */
    function cuda_nvrtc_load_library(): boolean;
    /**
     * Check if `mem` is a cuda memory
     * @param mem A #GstMemory
     */
    function is_cuda_memory(mem: Gst.Memory): boolean;

    export namespace CudaMemoryTransfer {
        export const $gtype: GObject.GType<CudaMemoryTransfer>;
    }

    enum CudaMemoryTransfer {
        /**
         * the device memory needs downloading
         *                                          to the staging memory
         */
        DOWNLOAD,
        /**
         * the staging memory needs uploading
         *                                          to the device memory
         */
        UPLOAD,
    }
    module CudaAllocator {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * A #GstAllocator subclass for cuda memory
     */
    class CudaAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<CudaAllocator>;

        // Constructors of GstCuda.CudaAllocator

        constructor(properties?: Partial<CudaAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GstCuda.CudaAllocator

        alloc(context: CudaContext, info: GstVideo.VideoInfo): Gst.Memory;
        // Conflicted with Gst.Allocator.alloc
        alloc(...args: never[]): any;
    }

    module CudaBufferPool {
        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    class CudaBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<CudaBufferPool>;

        // Own fields of GstCuda.CudaBufferPool

        context: CudaContext;

        // Constructors of GstCuda.CudaBufferPool

        constructor(properties?: Partial<CudaBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: CudaContext): CudaBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;
    }

    module CudaContext {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            cuda_device_id: number;
            cudaDeviceId: number;
        }
    }

    class CudaContext extends Gst.Object {
        static $gtype: GObject.GType<CudaContext>;

        // Own properties of GstCuda.CudaContext

        get cuda_device_id(): number;
        get cudaDeviceId(): number;

        // Own fields of GstCuda.CudaContext

        object: Gst.Object;

        // Constructors of GstCuda.CudaContext

        constructor(properties?: Partial<CudaContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device_id: number): CudaContext;

        static new_wrapped(handler: CudaGst.context, device: CudaGst.device): CudaContext;

        // Own static methods of GstCuda.CudaContext

        /**
         * Pops the current CUDA context from CPU thread
         * @param cuda_ctx
         */
        static pop(cuda_ctx: CudaGst.context): boolean;

        // Own methods of GstCuda.CudaContext

        /**
         * Query whether `ctx` can access any memory which belongs to `peer` directly.
         * @param peer a #GstCudaContext
         * @returns %TRUE if @ctx can access @peer directly
         */
        can_access_peer(peer: CudaContext): boolean;
        /**
         * Get CUDA device context. Caller must not modify and/or destroy
         * returned device context.
         * @returns the `CUcontext` of @ctx
         */
        get_handle(): any | null;
        /**
         * Get required texture alignment by device
         * @returns the `CUcontext` of @ctx
         */
        get_texture_alignment(): number;
        /**
         * Pushes the given `ctx` onto the CPU thread's stack of current contexts.
         * The specified context becomes the CPU thread's current context,
         * so all CUDA functions that operate on the current context are affected.
         * @returns %TRUE if @ctx was pushed without error.
         */
        push(): boolean;
    }

    type CudaAllocatorClass = typeof CudaAllocator;
    type CudaBufferPoolClass = typeof CudaBufferPool;
    abstract class CudaBufferPoolPrivate {
        static $gtype: GObject.GType<CudaBufferPoolPrivate>;

        // Constructors of GstCuda.CudaBufferPoolPrivate

        _init(...args: any[]): void;
    }

    type CudaContextClass = typeof CudaContext;
    abstract class CudaContextPrivate {
        static $gtype: GObject.GType<CudaContextPrivate>;

        // Constructors of GstCuda.CudaContextPrivate

        _init(...args: any[]): void;
    }

    class CudaGraphicsResource {
        static $gtype: GObject.GType<CudaGraphicsResource>;

        // Own fields of GstCuda.CudaGraphicsResource

        cuda_context: CudaContext;
        graphics_context: Gst.Object;
        type: CudaGraphicsResourceType;
        resource: CudaGst.graphicsResource;
        flags: CudaGst.graphicsRegisterFlags;
        registered: boolean;
        mapped: boolean;

        // Constructors of GstCuda.CudaGraphicsResource

        _init(...args: any[]): void;
    }

    class CudaMemory {
        static $gtype: GObject.GType<CudaMemory>;

        // Own fields of GstCuda.CudaMemory

        context: CudaContext;

        // Constructors of GstCuda.CudaMemory

        _init(...args: any[]): void;

        // Own static methods of GstCuda.CudaMemory

        /**
         * Ensures that the #GstCudaAllocator is initialized and ready to be used.
         */
        static init_once(): void;
    }

    abstract class CudaMemoryPrivate {
        static $gtype: GObject.GType<CudaMemoryPrivate>;

        // Constructors of GstCuda.CudaMemoryPrivate

        _init(...args: any[]): void;
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

export default GstCuda;

// END
