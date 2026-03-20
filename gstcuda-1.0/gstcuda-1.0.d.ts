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
import type CudaGst from '@girs/cudagst-1.0';

export namespace GstCuda {
    /**
     * GstCuda-1.0
     */

    /**
     * @gir-type Enum
     * @since 1.22
     */
    enum CudaGraphicsResourceType {
        NONE,
        GL_BUFFER,
        D3D11_RESOURCE,
        /**
         * Resource represents a EGL resource.
         */
        EGL_RESOURCE,
    }

    /**
     * @gir-type Enum
     */
    export namespace CudaMemoryAllocMethod {
        export const $gtype: GObject.GType<CudaMemoryAllocMethod>;
    }

    /**
     * CUDA memory allocation method
     * @gir-type Enum
     * @since 1.24
     */
    enum CudaMemoryAllocMethod {
        UNKNOWN,
        /**
         * Memory allocated via cuMemAlloc or cuMemAllocPitch
         */
        MALLOC,
        /**
         * Memory allocated via cuMemCreate and cuMemMap
         */
        MMAP,
    }

    /**
     * @gir-type Enum
     * @since 1.22
     */
    enum CudaQuarkId {
        GRAPHICS_RESOURCE,
        MAX,
    }

    /**
     * Name of the caps feature for indicating the use of {@link GstCuda.CudaMemory}
     * @since 1.22
     */
    const CAPS_FEATURE_MEMORY_CUDA_MEMORY: string;
    /**
     * #G_TYPE_BOOLEAN Allows stream ordered allocation. Default is `false`
     * @since 1.26
     */
    const CUDA_ALLOCATOR_OPT_STREAM_ORDERED: string;
    /**
     * @since 1.22
     */
    const CUDA_CONTEXT_TYPE: string;
    /**
     * Name of cuda memory type
     * @since 1.22
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
     * @since 1.22
     */
    const MAP_CUDA: number;
    /**
     * GstMapFlags value alias for GST_MAP_READ | GST_MAP_CUDA
     * @since 1.28
     */
    const MAP_READ_CUDA: Gst.MapFlags;
    /**
     * GstMapFlags value alias for GST_MAP_WRITE | GST_MAP_CUDA
     * @since 1.28
     */
    const MAP_WRITE_CUDA: Gst.MapFlags;
    /**
     * Gets configured allocation method
     * @param config a buffer pool config
     * @since 1.24
     */
    function buffer_pool_config_get_cuda_alloc_method(config: Gst.Structure): CudaMemoryAllocMethod;
    /**
     * @param config a buffer pool config
     * @returns the currently configured {@link GstCuda.CudaStream} on `config` or `null` if `config` doesn't hold {@link GstCuda.CudaStream}
     * @since 1.24
     */
    function buffer_pool_config_get_cuda_stream(config: Gst.Structure): CudaStream | null;
    /**
     * @param config a buffer pool config
     * @returns `true` stream ordered allocation option was specified
     * @since 1.26
     */
    function buffer_pool_config_get_cuda_stream_ordered_alloc(config: Gst.Structure): [boolean, boolean];
    /**
     * Sets allocation method
     * @param config a buffer pool config
     * @param method
     * @since 1.24
     */
    function buffer_pool_config_set_cuda_alloc_method(
        config: Gst.Structure,
        method: CudaMemoryAllocMethod | null,
    ): void;
    /**
     * Sets `stream` on `config`
     * @param config a buffer pool config
     * @param stream a {@link GstCuda.CudaStream}
     * @since 1.24
     */
    function buffer_pool_config_set_cuda_stream(config: Gst.Structure, stream: CudaStream): void;
    /**
     * Sets stream ordered allocation option
     * @param config a buffer pool config
     * @param stream_ordered whether stream ordered allocation is allowed
     * @since 1.26
     */
    function buffer_pool_config_set_cuda_stream_ordered_alloc(config: Gst.Structure, stream_ordered: boolean): void;
    /**
     * @param cuda_ctx a {@link GstCuda.CudaContext}
     * @returns a new {@link Gst.Context} embedding the `cuda_ctx`
     * @since 1.22
     */
    function context_new_cuda_context(cuda_ctx: CudaContext): Gst.Context;
    /**
     * Creates new user token value
     * @returns user token value
     * @since 1.24
     */
    function cuda_create_user_token(): number;
    /**
     * Perform the steps necessary for retrieving a {@link GstCuda.CudaContext} from the
     * surrounding elements or from the application using the {@link Gst.Context} mechanism.
     *
     * If the content of `cuda_ctx` is not `null`, then no {@link Gst.Context} query is
     * necessary for {@link GstCuda.CudaContext}.
     * @param element the {@link Gst.Element} running the query
     * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
     * @param cuda_ctx the resulting {@link GstCuda.CudaContext}
     * @returns whether a {@link GstCuda.CudaContext} exists in `cuda_ctx`
     * @since 1.22
     */
    function cuda_ensure_element_context(
        element: Gst.Element,
        device_id: number,
        cuda_ctx: CudaContext,
    ): [boolean, CudaContext];
    /**
     * @param element a {@link Gst.Element}
     * @param query a {@link Gst.Query} of type {@link Gst.QueryType.CONTEXT}
     * @param cuda_ctx a {@link GstCuda.CudaContext}
     * @returns Whether the `query` was successfully responded to from the passed          `context`.
     * @since 1.22
     */
    function cuda_handle_context_query(element: Gst.Element, query: Gst.Query, cuda_ctx?: CudaContext | null): boolean;
    /**
     * Helper function for implementing {@link Gst.ElementClass}.set_context() in
     * CUDA capable elements.
     *
     * Retrieves the {@link GstCuda.CudaContext} in `context` and places the result in `cuda_ctx`.
     * @param element a {@link Gst.Element}
     * @param context a {@link Gst.Context}
     * @param device_id preferred device-id, pass device_id >=0 when             the device_id explicitly required. Otherwise, set -1.
     * @param cuda_ctx location of a {@link GstCuda.CudaContext}
     * @returns whether the `cuda_ctx` could be set successfully
     * @since 1.22
     */
    function cuda_handle_set_context(
        element: Gst.Element,
        context: Gst.Context,
        device_id: number,
        cuda_ctx: CudaContext,
    ): [boolean, CudaContext];
    /**
     * Loads the cuda library
     * @returns `true` if the libcuda could be loaded `false` otherwise
     * @since 1.22
     */
    function cuda_load_library(): boolean;
    /**
     * Ensures that the {@link GstCuda.CudaAllocator} is initialized and ready to be used.
     * @since 1.22
     */
    function cuda_memory_init_once(): void;
    /**
     * @param source Source code to compile
     * @since 1.22
     */
    function cuda_nvrtc_compile(source: string): string;
    /**
     * @param source Source code to compile
     * @param device CUDA device
     * @returns Compiled CUDA assembly code if successful, otherwise `null`
     * @since 1.24
     */
    function cuda_nvrtc_compile_cubin(source: string, device: number): string;
    /**
     * Loads the nvrtc library.
     * @returns `true` if the library could be loaded, `false` otherwise
     * @since 1.22
     */
    function cuda_nvrtc_load_library(): boolean;
    /**
     * Check if `mem` is a cuda memory
     * @param mem A {@link Gst.Memory}
     * @since 1.22
     */
    function is_cuda_memory(mem: Gst.Memory): boolean;
    /**
     * CUDA memory transfer flags
     * @gir-type Flags
     */
    enum CudaMemoryTransfer {
        /**
         * the device memory needs downloading to the staging memory
         */
        DOWNLOAD,
        /**
         * the staging memory needs uploading to the device memory
         */
        UPLOAD,
        /**
         * the device memory needs synchronization
         */
        SYNC,
    }

    namespace CudaAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * A {@link Gst.Allocator} subclass for cuda memory
     * @gir-type Class
     * @since 1.22
     */
    class CudaAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<CudaAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CudaAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CudaAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CudaAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CudaAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CudaAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CudaAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Controls the active state of `allocator`. Default {@link GstCuda.CudaAllocator} is
         * stateless and therefore active state is ignored, but subclass implementation
         * (e.g., {@link GstCuda.CudaPoolAllocator}) will require explicit active state control
         * for its internal resource management.
         *
         * This method is conceptually identical to gst_buffer_pool_set_active method.
         * @param active the new active state
         * @virtual
         */
        vfunc_set_active(active: boolean): boolean;

        // Methods

        /**
         * @param context a {@link GstCuda.CudaContext}
         * @param stream a {@link GstCuda.CudaStream}
         * @param info a {@link GstVideo.VideoInfo}
         * @returns a newly allocated {@link GstCuda.CudaMemory}
         */
        alloc(context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo): Gst.Memory | null;
        /**
         * @param args
         */
        // Conflicted with Gst.Allocator.alloc
        alloc(...args: never[]): any;
        /**
         * @param context a {@link GstCuda.CudaContext}
         * @param stream a {@link GstCuda.CudaStream}
         * @param info a {@link GstVideo.VideoInfo}
         * @returns a newly allocated {@link GstCuda.CudaMemory}
         */
        alloc_stream_ordered(context: CudaContext, stream: CudaStream, info: GstVideo.VideoInfo): Gst.Memory | null;
        /**
         * Allocates a new memory that wraps the given CUDA device memory.
         *
         * `info` must represent actual memory layout, in other words, offset, stride
         * and size fields of `info` should be matched with memory layout of `dev_ptr`
         *
         * By default, wrapped `dev_ptr` will be freed at the time when {@link Gst.Memory}
         * is freed if `notify` is `null`. Otherwise, if caller sets `notify`,
         * freeing `dev_ptr` is callers responsibility and default {@link GstCuda.CudaAllocator}
         * will not free it.
         * @param context a {@link GstCuda.CudaContext}
         * @param stream a {@link GstCuda.CudaStream}
         * @param info a {@link GstVideo.VideoInfo}
         * @param dev_ptr a CUdeviceptr CUDA device memory
         * @param notify Called with `user_data` when the memory is freed
         * @returns a new {@link Gst.Memory}
         */
        alloc_wrapped(
            context: CudaContext,
            stream: CudaStream | null,
            info: GstVideo.VideoInfo,
            dev_ptr: CudaGst.deviceptr,
            notify?: GLib.DestroyNotify | null,
        ): Gst.Memory;
        /**
         * Controls the active state of `allocator`. Default {@link GstCuda.CudaAllocator} is
         * stateless and therefore active state is ignored, but subclass implementation
         * (e.g., {@link GstCuda.CudaPoolAllocator}) will require explicit active state control
         * for its internal resource management.
         *
         * This method is conceptually identical to gst_buffer_pool_set_active method.
         * @param active the new active state
         * @returns `true` if active state of `allocator` was successfully updated.
         */
        set_active(active: boolean): boolean;
        /**
         * Allocates new {@link Gst.Memory} object with CUDA virtual memory.
         * @param context a {@link GstCuda.CudaContext}
         * @param stream a {@link GstCuda.CudaStream}
         * @param info a {@link GstVideo.VideoInfo}
         * @param prop allocation property
         * @param granularity_flags allocation flags
         * @returns a newly allocated memory object or `null` if allocation is not supported
         */
        virtual_alloc(
            context: CudaContext,
            stream: CudaStream,
            info: GstVideo.VideoInfo,
            prop: CudaGst.memAllocationProp,
            granularity_flags: CudaGst.memAllocationGranularity_flags | null,
        ): Gst.Memory | null;
    }

    namespace CudaBufferPool {
        // Signal signatures
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.22
     */
    class CudaBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<CudaBufferPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CudaBufferPool.SignalSignatures;

        // Fields

        context: CudaContext;

        // Constructors

        constructor(properties?: Partial<CudaBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: CudaContext): CudaBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof CudaBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CudaBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CudaBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CudaBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CudaContext {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::cuda-device-id': (pspec: GObject.ParamSpec) => void;
            'notify::default-gpu-stack-size': (pspec: GObject.ParamSpec) => void;
            'notify::external-resource-interop': (pspec: GObject.ParamSpec) => void;
            'notify::os-handle': (pspec: GObject.ParamSpec) => void;
            'notify::prefer-stream-ordered-alloc': (pspec: GObject.ParamSpec) => void;
            'notify::stream-ordered-alloc': (pspec: GObject.ParamSpec) => void;
            'notify::virtual-memory': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            cuda_device_id: number;
            cudaDeviceId: number;
            default_gpu_stack_size: number;
            defaultGpuStackSize: number;
            external_resource_interop: boolean;
            externalResourceInterop: boolean;
            os_handle: boolean;
            osHandle: boolean;
            prefer_stream_ordered_alloc: boolean;
            preferStreamOrderedAlloc: boolean;
            stream_ordered_alloc: boolean;
            streamOrderedAlloc: boolean;
            virtual_memory: boolean;
            virtualMemory: boolean;
        }
    }

    /**
     * @gir-type Class
     * @since 1.22
     */
    class CudaContext extends Gst.Object {
        static $gtype: GObject.GType<CudaContext>;

        // Properties

        /**
         * @construct-only
         */
        get cuda_device_id(): number;
        /**
         * @construct-only
         */
        get cudaDeviceId(): number;
        /**
         * The default stack size for each GPU thread.
         * @since 1.26
         */
        get default_gpu_stack_size(): number;
        set default_gpu_stack_size(val: number);
        /**
         * The default stack size for each GPU thread.
         * @since 1.26
         */
        get defaultGpuStackSize(): number;
        set defaultGpuStackSize(val: number);
        /**
         * External resource interop API support
         * @since 1.26
         * @read-only
         */
        get external_resource_interop(): boolean;
        /**
         * External resource interop API support
         * @since 1.26
         * @read-only
         */
        get externalResourceInterop(): boolean;
        /**
         * OS handle supportability in virtual memory management
         * @since 1.24
         * @read-only
         */
        get os_handle(): boolean;
        /**
         * OS handle supportability in virtual memory management
         * @since 1.24
         * @read-only
         */
        get osHandle(): boolean;
        /**
         * @since 1.26
         */
        get prefer_stream_ordered_alloc(): boolean;
        set prefer_stream_ordered_alloc(val: boolean);
        /**
         * @since 1.26
         */
        get preferStreamOrderedAlloc(): boolean;
        set preferStreamOrderedAlloc(val: boolean);
        /**
         * @since 1.26
         * @read-only
         */
        get stream_ordered_alloc(): boolean;
        /**
         * @since 1.26
         * @read-only
         */
        get streamOrderedAlloc(): boolean;
        /**
         * Virtual memory management supportability
         * @since 1.24
         * @read-only
         */
        get virtual_memory(): boolean;
        /**
         * Virtual memory management supportability
         * @since 1.24
         * @read-only
         */
        get virtualMemory(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CudaContext.SignalSignatures;

        // Fields

        object: Gst.Object;

        // Constructors

        constructor(properties?: Partial<CudaContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device_id: number): CudaContext;

        static new_wrapped(handler: CudaGst.context, device: CudaGst.device): CudaContext;

        // Signals

        /** @signal */
        connect<K extends keyof CudaContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CudaContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CudaContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CudaContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Pops the current CUDA context from CPU thread
         * @param cuda_ctx
         */
        static pop(cuda_ctx: CudaGst.context): boolean;

        // Methods

        /**
         * Query whether `ctx` can access any memory which belongs to `peer` directly.
         * @param peer a {@link GstCuda.CudaContext}
         * @returns `true` if `ctx` can access `peer` directly
         */
        can_access_peer(peer: CudaContext): boolean;
        /**
         * Get CUDA device context. Caller must not modify and/or destroy
         * returned device context.
         * @returns the {@link CudaGst.context} of `ctx`
         */
        get_handle(): any | null;
        /**
         * Get required texture alignment by device
         * @returns the {@link CudaGst.context} of `ctx`
         */
        get_texture_alignment(): number;
        /**
         * Pushes the given `ctx` onto the CPU thread's stack of current contexts.
         * The specified context becomes the CPU thread's current context,
         * so all CUDA functions that operate on the current context are affected.
         * @returns `true` if `ctx` was pushed without error.
         */
        push(): boolean;
    }

    namespace CudaPoolAllocator {
        // Signal signatures
        interface SignalSignatures extends CudaAllocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CudaAllocator.ConstructorProps {}
    }

    /**
     * A {@link GstCuda.CudaAllocator} subclass for cuda memory pool
     * @gir-type Class
     * @since 1.24
     */
    class CudaPoolAllocator extends CudaAllocator {
        static $gtype: GObject.GType<CudaPoolAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CudaPoolAllocator.SignalSignatures;

        // Fields

        context: CudaContext;

        // Constructors

        constructor(properties?: Partial<CudaPoolAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: CudaContext, stream: CudaStream | null, info: GstVideo.VideoInfo): CudaPoolAllocator;

        static new_for_virtual_memory(
            context: CudaContext,
            stream: CudaStream | null,
            info: GstVideo.VideoInfo,
            prop: CudaGst.memAllocationProp,
            granularity_flags: CudaGst.memAllocationGranularity_flags,
        ): CudaPoolAllocator;

        static new_full(
            context: CudaContext,
            stream: CudaStream | null,
            info: GstVideo.VideoInfo,
            config?: Gst.Structure | null,
        ): CudaPoolAllocator;

        // Signals

        /** @signal */
        connect<K extends keyof CudaPoolAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaPoolAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CudaPoolAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CudaPoolAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CudaPoolAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CudaPoolAllocator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Acquires a {@link Gst.Memory} from `allocator`. `memory` should point to a memory
         * location that can hold a pointer to the new {@link Gst.Memory}.
         * @returns a {@link Gst.FlowReturn} such as {@link Gst.FlowReturn.FLUSHING} when the allocator is inactive.
         */
        acquire_memory(): [Gst.FlowReturn, Gst.Memory];
    }

    /**
     * @gir-type Alias
     */
    type CudaAllocatorClass = typeof CudaAllocator;
    /**
     * @gir-type Struct
     */
    abstract class CudaAllocatorPrivate {
        static $gtype: GObject.GType<CudaAllocatorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CudaBufferPoolClass = typeof CudaBufferPool;
    /**
     * @gir-type Struct
     */
    abstract class CudaBufferPoolPrivate {
        static $gtype: GObject.GType<CudaBufferPoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CudaContextClass = typeof CudaContext;
    /**
     * @gir-type Struct
     */
    abstract class CudaContextPrivate {
        static $gtype: GObject.GType<CudaContextPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.22
     */
    class CudaGraphicsResource {
        static $gtype: GObject.GType<CudaGraphicsResource>;

        // Fields

        cuda_context: CudaContext;
        graphics_context: Gst.Object;
        type: CudaGraphicsResourceType;
        resource: CudaGst.graphicsResource;
        flags: CudaGst.graphicsRegisterFlags;
        registered: boolean;
        mapped: boolean;
    }

    /**
     * @gir-type Struct
     * @since 1.22
     */
    class CudaMemory {
        static $gtype: GObject.GType<CudaMemory>;

        // Fields

        context: CudaContext;

        // Static methods

        /**
         * Ensures that the {@link GstCuda.CudaAllocator} is initialized and ready to be used.
         */
        static init_once(): void;

        // Methods

        /**
         * Exports virtual memory handle to OS specific handle.
         *
         * On Windows, `os_handle` should be pointer to HANDLE (i.e., void **), and
         * pointer to file descriptor (i.e., int *) on Linux.
         *
         * The returned `os_handle` is owned by `mem` and therefore caller shouldn't
         * close the handle.
         * @returns `true` if successful
         */
        ['export'](): [boolean, any];
        /**
         * Query allocation method
         */
        get_alloc_method(): CudaMemoryAllocMethod;
        /**
         * Gets CUDA stream object associated with `mem`
         * @returns a {@link GstCuda.CudaStream} or `null` if default CUDA stream is in use
         */
        get_stream(): CudaStream | null;
        /**
         * Creates CUtexObject with given parameters
         * @param plane the plane index
         * @param filter_mode filter mode
         * @returns `true` if successful
         */
        get_texture(plane: number, filter_mode: CudaGst.filter_mode | null): [boolean, CudaGst.texObject];
        /**
         * Gets back user data pointer stored via `gst_cuda_memory_set_token_data()`
         * @param token an user token
         * @returns user data pointer or `null`
         */
        get_token_data(token: number): any | null;
        /**
         * Gets user data pointer stored via `gst_cuda_allocator_alloc_wrapped()`
         * @returns the user data pointer
         */
        get_user_data(): any | null;
        /**
         * Sets an opaque user data on a {@link GstCuda.CudaMemory}
         * @param token an user token
         * @param data an user data
         */
        set_token_data(token: number, data?: any | null): void;
        /**
         * Performs synchronization if needed
         */
        sync(): void;
    }

    /**
     * @gir-type Struct
     * @since 1.26
     */
    class CudaMemoryPool {
        static $gtype: GObject.GType<CudaMemoryPool>;

        // Fields

        context: CudaContext;

        // Constructors

        constructor(context: CudaContext, props?: CudaGst.memPoolProps | null);

        static ['new'](context: CudaContext, props?: CudaGst.memPoolProps | null): CudaMemoryPool;

        // Methods

        /**
         * Get CUDA memory pool handle
         * @returns a CUmemoryPool handle
         */
        get_handle(): CudaGst.memoryPool;
        /**
         * Increase the reference count of `pool`.
         * @returns `pool`
         */
        ref(): CudaMemoryPool;
        /**
         * Decrease the reference count of `pool`.
         */
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class CudaMemoryPoolPrivate {
        static $gtype: GObject.GType<CudaMemoryPoolPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CudaMemoryPrivate {
        static $gtype: GObject.GType<CudaMemoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CudaPoolAllocatorClass = typeof CudaPoolAllocator;
    /**
     * @gir-type Struct
     */
    abstract class CudaPoolAllocatorPrivate {
        static $gtype: GObject.GType<CudaPoolAllocatorPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.24
     */
    class CudaStream {
        static $gtype: GObject.GType<CudaStream>;

        // Fields

        context: CudaContext;

        // Constructors

        constructor(context: CudaContext);

        static ['new'](context: CudaContext): CudaStream;

        // Methods

        /**
         * Get CUDA stream handle
         * @returns a {@link CudaGst.stream} handle of `stream` or `null` if `stream` is `null`
         */
        get_handle(): CudaGst.stream;
        /**
         * Increase the reference count of `stream`.
         * @returns `stream`
         */
        ref(): CudaStream;
        /**
         * Decrease the reference count of `stream`.
         */
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class CudaStreamPrivate {
        static $gtype: GObject.GType<CudaStreamPrivate>;
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
