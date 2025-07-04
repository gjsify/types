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
import type Vulkan from '@girs/vulkan-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVulkan {
    /**
     * GstVulkan-1.0
     */

    export namespace VulkanBarrierFlags {
        export const $gtype: GObject.GType<VulkanBarrierFlags>;
    }

    enum VulkanBarrierFlags {
        NONE,
    }

    export namespace VulkanBarrierType {
        export const $gtype: GObject.GType<VulkanBarrierType>;
    }

    enum VulkanBarrierType {
        NONE,
        TYPE_MEMORY,
        TYPE_BUFFER,
        TYPE_IMAGE,
    }
    class VulkanError extends GLib.Error {
        static $gtype: GObject.GType<VulkanError>;

        // Static fields

        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
        /**
         * if `result` indicates an error condition, fills out #Gerror with details of
         * the error
         * @param result a VkResult
         * @param error a #GError to fill
         * @param format the printf-like format to write into the #GError
         * @param ___ arguments for @format
         */
        static to_g_error(
            result: Vulkan.Result,
            error: GLib.Error | null,
            format: string,
            ___: any[],
        ): [Vulkan.Result, GLib.Error | null];
    }

    export namespace VulkanFormatScaling {
        export const $gtype: GObject.GType<VulkanFormatScaling>;
    }

    enum VulkanFormatScaling {
        UNORM,
        SNORM,
        USCALED,
        SSCALED,
        UINT,
        SINT,
        SRGB,
    }

    export namespace VulkanHandleType {
        export const $gtype: GObject.GType<VulkanHandleType>;
    }

    enum VulkanHandleType {
        DESCRIPTOR_SET_LAYOUT,
        PIPELINE_LAYOUT,
        PIPELINE,
        RENDER_PASS,
        SAMPLER,
        FRAMEBUFFER,
        SHADER,
    }
    class VulkanWindowError extends GLib.Error {
        static $gtype: GObject.GType<VulkanWindowError>;

        // Static fields

        static FAILED: number;
        static OLD_LIBS: number;
        static RESOURCE_UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string;
    const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string;
    const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string;
    const VULKAN_DEVICE_CONTEXT_TYPE_STR: string;
    const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string;
    const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string;
    const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string;
    const VULKAN_MAX_COMPONENTS: number;
    const VULKAN_MEMORY_ALLOCATOR_NAME: string;
    /**
     * The printf format specifier for raw Vulkan non dispatchable handles.
     */
    const VULKAN_NON_DISPATCHABLE_HANDLE_FORMAT: string;
    const VULKAN_QUEUE_CONTEXT_TYPE_STR: string;
    const VULKAN_SWAPPER_VIDEO_FORMATS: string;
    function context_get_vulkan_device(context: Gst.Context, device: VulkanDevice): boolean;
    function context_get_vulkan_display(context: Gst.Context, display: VulkanDisplay): boolean;
    function context_get_vulkan_instance(context: Gst.Context, instance: VulkanInstance): boolean;
    function context_get_vulkan_queue(context: Gst.Context, queue: VulkanQueue): boolean;
    /**
     * Sets `device` on `context`
     * @param context a #GstContext
     * @param device a #GstVulkanDevice
     */
    function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice): void;
    /**
     * Sets `display` on `context`
     * @param context a #GstContext
     * @param display a #GstVulkanDisplay
     */
    function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay): void;
    /**
     * Sets `instance` on `context`
     * @param context a #GstContext
     * @param instance a #GstVulkanInstance
     */
    function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance): void;
    /**
     * Sets `queue` on `context`
     * @param context a #GstContext
     * @param queue a #GstVulkanQueue
     */
    function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue): void;
    function is_vulkan_buffer_memory(mem: Gst.Memory): boolean;
    function is_vulkan_image_memory(mem: Gst.Memory): boolean;
    function is_vulkan_memory(mem: Gst.Memory): boolean;
    /**
     * Allocate a new #GstVulkanBufferMemory.
     * @param device a #GstVulkanDevice
     * @param size size of the new buffer
     * @param usage buffer usage flags
     * @param mem_prop_flags memory properties flags for the backing memory
     * @returns a #GstMemory object backed by a vulkan buffer          backed by vulkan device memory
     */
    function vulkan_buffer_memory_alloc(
        device: VulkanDevice,
        size: number,
        usage: Vulkan.BufferUsageFlags,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    /**
     * Initializes the Vulkan buffer memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
     */
    function vulkan_buffer_memory_init_once(): void;
    /**
     * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
     * @param device a #GstVulkanDevice
     * @param buffer a #VkBuffer
     * @param usage usage flags of @buffer
     * @param user_data user data to call @notify with
     * @param notify a #GDestroyNotify called when @buffer is no longer in use
     * @returns a #GstMemory object backed by a vulkan device memory
     */
    function vulkan_buffer_memory_wrapped(
        device: VulkanDevice,
        buffer: Vulkan.Buffer,
        usage: Vulkan.BufferUsageFlags,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null,
    ): Gst.Memory;
    function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle;
    function vulkan_display_type_to_extension_string(type: VulkanDisplayType | null): string;
    /**
     * Perform the steps necessary for retrieving a #GstVulkanInstance and
     * (optionally) an #GstVulkanDisplay from the surrounding elements or from
     * the application using the #GstContext mechanism.
     *
     * If the contents of `display_ptr` or `instance_ptr` are not %NULL, then no
     * #GstContext query is necessary and no #GstVulkanInstance or #GstVulkanDisplay
     * retrieval is performed.
     * @param element a #GstElement
     * @param display_ptr the resulting #GstVulkanDisplay
     * @param instance_ptr the resulting #GstVulkanInstance
     * @returns whether a #GstVulkanInstance exists in @instance_ptr and if          @display_ptr is not %NULL, whether a #GstVulkanDisplay exists in          @display_ptr
     */
    function vulkan_ensure_element_data(
        element: Gst.Element,
        display_ptr: VulkanDisplay | null,
        instance_ptr: VulkanInstance,
    ): [boolean, VulkanDisplay | null, VulkanInstance];
    function vulkan_error_quark(): GLib.Quark;
    function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo;
    function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView;
    /**
     * Performs the steps necessary for executing a context query including
     * posting a message for the application to respond.
     * @param element a #GstElement
     * @param context_type the context type to query for
     */
    function vulkan_global_context_query(element: Gst.Element, context_type: string): void;
    function vulkan_handle_context_query(
        element: Gst.Element,
        query: Gst.Query,
        display?: VulkanDisplay | null,
        instance?: VulkanInstance | null,
        device?: VulkanDevice | null,
    ): boolean;
    /**
     * Helper function for implementing #GstElementClass.set_context() in
     * Vulkan capable elements.
     *
     * Retrieve's the #GstVulkanDisplay or #GstVulkanInstance in `context` and places
     * the result in `display` or `instance` respectively.
     * @param element a #GstElement
     * @param context a #GstContext
     * @param display location of a #GstVulkanDisplay
     * @param instance location of a #GstVulkanInstance
     * @returns whether the @display or @instance could be set successfully
     */
    function vulkan_handle_set_context(
        element: Gst.Element,
        context: Gst.Context,
        display: VulkanDisplay | null,
        instance: VulkanInstance,
    ): [boolean, VulkanDisplay | null, VulkanInstance];
    /**
     * Allocated a new #GstVulkanImageMemory.
     * @param device a #GstVulkanDevice
     * @param format the VkFormat for the new image
     * @param width width for the new image
     * @param height height for the new image
     * @param tiling tiling for the new image
     * @param usage usage flags for the new image
     * @param mem_prop_flags VkDeviceMemory property flags for the new image
     * @returns a #GstMemory object backed by a vulkan device memory
     */
    function vulkan_image_memory_alloc(
        device: VulkanDevice,
        format: Vulkan.Format,
        width: number,
        height: number,
        tiling: Vulkan.ImageTiling,
        usage: Vulkan.ImageUsageFlags,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    /**
     * Initializes the Vulkan image memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
     */
    function vulkan_image_memory_init_once(): void;
    function vulkan_image_memory_wrapped(
        device: VulkanDevice,
        image: Vulkan.Image,
        format: Vulkan.Format,
        width: number,
        height: number,
        tiling: Vulkan.ImageTiling,
        usage: Vulkan.ImageUsageFlags,
        user_data?: any | null,
    ): Gst.Memory;
    /**
     * Performs the steps necessary for executing a context query between only
     * other elements in the pipeline
     * @param element a #GstElement
     * @param context_type the context type to query for
     */
    function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query;
    /**
     * Allocated a new #GstVulkanMemory.
     * @param device a #GstVulkanDevice
     * @param memory_type_index the Vulkan memory type index
     * @param params a #GstAllocationParams
     * @param size the size to allocate
     * @param mem_prop_flags
     * @returns a #GstMemory object backed by a vulkan device memory
     */
    function vulkan_memory_alloc(
        device: VulkanDevice,
        memory_type_index: number,
        params: Gst.AllocationParams,
        size: number,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    function vulkan_memory_find_memory_type_index_with_type_properties(
        device: VulkanDevice,
        type_bits: number,
        properties: Vulkan.MemoryPropertyFlags,
        type_index: number,
    ): boolean;
    function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
    /**
     * Initializes the Vulkan memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanMemory operation.
     */
    function vulkan_memory_init_once(): void;
    function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
    function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection | null): boolean;
    function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
    function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
    function vulkan_trash_object_unref(device: VulkanDevice, user_data?: any | null): void;
    function vulkan_window_error_quark(): GLib.Quark;
    interface VulkanDeviceForEachQueueFunc {
        (device: VulkanDevice, queue: VulkanQueue): boolean;
    }
    interface VulkanHandleDestroyNotify {
        (handle: VulkanHandle): void;
    }
    interface VulkanImageMemoryFindViewFunc {
        (view: VulkanImageView): boolean;
    }
    interface VulkanTrashListAdd {
        (trash_list: VulkanTrashList, trash: VulkanTrash): boolean;
    }
    interface VulkanTrashListGC {
        (trash_list: VulkanTrashList): void;
    }
    interface VulkanTrashListWait {
        (trash_list: VulkanTrashList, timeout: number): boolean;
    }
    interface VulkanTrashNotify {
        (device: VulkanDevice): void;
    }

    export namespace VulkanDisplayType {
        export const $gtype: GObject.GType<VulkanDisplayType>;
    }

    enum VulkanDisplayType {
        /**
         * no display
         */
        NONE,
        /**
         * XCB display
         */
        XCB,
        /**
         * wayland display
         */
        WAYLAND,
        /**
         * cocoa display for macOS
         */
        COCOA,
        /**
         * ios display
         */
        IOS,
        /**
         * win32 display
         */
        WIN32,
        ANDROID,
        ANY,
    }

    export namespace VulkanFormatFlags {
        export const $gtype: GObject.GType<VulkanFormatFlags>;
    }

    enum VulkanFormatFlags {
        YUV,
        RGB,
        ALPHA,
        LE,
        COMPLEX,
    }
    namespace VulkanBufferMemoryAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanBufferMemoryAllocator struct
     */
    class VulkanBufferMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanBufferMemoryAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanBufferMemoryAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanBufferMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanBufferMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanBufferPool {
        // Signal signatures
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * Opaque GstVulkanBufferPool struct
     */
    class VulkanBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VulkanBufferPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanBufferPool.SignalSignatures;

        // Fields

        bufferpool: Gst.BufferPool;
        device: VulkanDevice;

        // Constructors

        constructor(properties?: Partial<VulkanBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof VulkanBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanCommandPool {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanCommandPool extends Gst.Object {
        static $gtype: GObject.GType<VulkanCommandPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanCommandPool.SignalSignatures;

        // Fields

        queue: VulkanQueue;

        // Constructors

        constructor(properties?: Partial<VulkanCommandPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanCommandPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanCommandPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanCommandPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanCommandPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanCommandPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanCommandPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        create(): VulkanCommandBuffer;
        get_queue(): VulkanQueue;
        /**
         * This should be called to ensure no other thread will attempt to access
         * the pool's internal resources.  Any modification of any of the allocated
         * #GstVulkanCommandBuffer's need to be encapsulated in a
         * gst_vulkan_command_pool_lock()/gst_vulkan_command_pool_unlock() pair to meet
         * the Vulkan API requirements that host access to the command pool is
         * externally synchronised.
         */
        lock(): void;
        /**
         * See the documentation for gst_vulkan_command_pool_lock() for when you would
         * need to use this function.
         */
        unlock(): void;
    }

    namespace VulkanDescriptorCache {
        // Signal signatures
        interface SignalSignatures extends VulkanHandlePool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }

    class VulkanDescriptorCache extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanDescriptorCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanDescriptorCache.SignalSignatures;

        // Fields

        pool: VulkanDescriptorPool;

        // Constructors

        constructor(properties?: Partial<VulkanDescriptorCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pool: VulkanDescriptorPool, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorCache;

        // Signals

        connect<K extends keyof VulkanDescriptorCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDescriptorCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDescriptorCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDescriptorCache.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        acquire(): VulkanDescriptorSet;
        // Conflicted with GstVulkan.VulkanHandlePool.acquire
        acquire(...args: never[]): any;
    }

    namespace VulkanDescriptorPool {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanDescriptorPool extends Gst.Object {
        static $gtype: GObject.GType<VulkanDescriptorPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanDescriptorPool.SignalSignatures;

        // Fields

        device: VulkanDevice;

        // Constructors

        constructor(properties?: Partial<VulkanDescriptorPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: number): VulkanDescriptorPool;

        // Signals

        connect<K extends keyof VulkanDescriptorPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDescriptorPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDescriptorPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDescriptorPool.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        create(n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet;
        get_device(): VulkanDevice;
        get_max_sets(): number;
    }

    namespace VulkanDevice {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::instance': (pspec: GObject.ParamSpec) => void;
            'notify::physical-device': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            instance: VulkanInstance;
            physical_device: VulkanPhysicalDevice;
            physicalDevice: VulkanPhysicalDevice;
        }
    }

    class VulkanDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanDevice>;

        // Properties

        get instance(): VulkanInstance;
        get physical_device(): VulkanPhysicalDevice;
        get physicalDevice(): VulkanPhysicalDevice;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](physical_device: VulkanPhysicalDevice): VulkanDevice;

        static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice;

        // Signals

        connect<K extends keyof VulkanDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * If a #GstVulkanDevice is requested in `query,` sets `device` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a #GstVulkanDevice.
         * @param element a #GstElement
         * @param query a #GstQuery of type #GST_QUERY_CONTEXT
         * @param device the #GstVulkanDevice
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean;
        /**
         * Attempt to retrieve a #GstVulkanDevice using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a #GstElement
         * @param device a #GstVulkanDevice
         */
        static run_context_query(element: Gst.Element, device: VulkanDevice): [boolean, VulkanDevice];

        // Methods

        create_fence(): VulkanFence;
        /**
         * Iterate over each queue family available on #GstVulkanDevice
         * @param func a #GstVulkanDeviceForEachQueueFunc to run for each #GstVulkanQueue
         */
        foreach_queue(func?: VulkanDeviceForEachQueueFunc | null): void;
        get_instance(): VulkanInstance;
        /**
         * Performs vkGetDeviceProcAddr() with `device` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for @name or %NULL
         */
        get_proc_address(name: string): any | null;
        get_queue(queue_family: number, queue_i: number): VulkanQueue;
        /**
         * Attempts to create the internal #VkDevice object.
         * @returns whether a vulkan device could be created
         */
        open(): boolean;
    }

    namespace VulkanDisplay {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * The contents of a #GstVulkanDisplay are private and should only be accessed
     * through the provided API
     */
    class VulkanDisplay extends Gst.Object {
        static $gtype: GObject.GType<VulkanDisplay>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanDisplay.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](instance: VulkanInstance): VulkanDisplay;

        static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay;

        // Signals

        connect<K extends keyof VulkanDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * This function will read the %GST_VULKAN_WINDOW environment variable for
         * a user choice or choose the first supported implementation.
         * @param instance a #GstVulkanInstance
         */
        static choose_type(instance: VulkanInstance): VulkanDisplayType;
        /**
         * If a #GstVulkanDisplay is requested in `query,` sets `device` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a #GstVulkanDisplay.
         * @param element a #GstElement
         * @param query a #GstQuery of type #GST_QUERY_CONTEXT
         * @param display the #GstVulkanDisplay
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, display?: VulkanDisplay | null): boolean;
        /**
         * Attempt to retrieve a #GstVulkanDisplay using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a #GstElement
         * @param display a #GstVulkanDisplay
         */
        static run_context_query(element: Gst.Element, display: VulkanDisplay): [boolean, VulkanDisplay];

        // Virtual methods

        vfunc_create_window(): VulkanWindow;
        vfunc_get_handle(): any | null;

        // Methods

        create_window(): VulkanWindow;
        /**
         * Execute `compare_func` over the list of windows stored by `display`.  The
         * first argument to `compare_func` is the #GstVulkanWindow being checked and the
         * second argument is `data`.
         * @param data some data to pass to @compare_func
         * @param compare_func a comparison function to run
         * @returns The first #GstVulkanWindow that causes a match          from @compare_func
         */
        find_window(data: any | null, compare_func: GLib.CompareFunc): VulkanWindow;
        get_handle(): any | null;
        get_handle_type(): VulkanDisplayType;
        remove_window(window: VulkanWindow): boolean;
    }

    namespace VulkanFenceCache {
        // Signal signatures
        interface SignalSignatures extends VulkanHandlePool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }

    class VulkanFenceCache extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanFenceCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanFenceCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanFenceCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanFenceCache;

        // Signals

        connect<K extends keyof VulkanFenceCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFenceCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanFenceCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFenceCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanFenceCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanFenceCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanFullScreenQuad {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanFullScreenQuad extends Gst.Object {
        static $gtype: GObject.GType<VulkanFullScreenQuad>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanFullScreenQuad.SignalSignatures;

        // Fields

        queue: VulkanQueue;
        descriptor_cache: VulkanDescriptorCache;
        cmd_pool: VulkanCommandPool;
        trash_list: VulkanTrashList;

        // Constructors

        constructor(properties?: Partial<VulkanFullScreenQuad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](queue: VulkanQueue): VulkanFullScreenQuad;

        // Signals

        connect<K extends keyof VulkanFullScreenQuad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFullScreenQuad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanFullScreenQuad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFullScreenQuad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanFullScreenQuad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanFullScreenQuad.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        draw(): boolean;
        fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
        get_last_fence(): VulkanFence;
        prepare_draw(fence: VulkanFence): boolean;
        set_index_buffer(indices: Gst.Memory, n_indices: number): boolean;
        set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean;
        set_input_buffer(buffer: Gst.Buffer): boolean;
        set_output_buffer(buffer: Gst.Buffer): boolean;
        set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean;
        set_uniform_buffer(uniforms: Gst.Memory): boolean;
        set_vertex_buffer(vertices: Gst.Memory): boolean;
        submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
    }

    namespace VulkanHandlePool {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    abstract class VulkanHandlePool extends Gst.Object {
        static $gtype: GObject.GType<VulkanHandlePool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanHandlePool.SignalSignatures;

        // Fields

        device: VulkanDevice;
        outstanding: any[];
        available: any[];

        // Constructors

        constructor(properties?: Partial<VulkanHandlePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanHandlePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanHandlePool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanHandlePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanHandlePool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanHandlePool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanHandlePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_acquire(): any | null;
        vfunc_alloc(): any | null;
        vfunc_free(handle?: any | null): void;
        vfunc_release(handle?: any | null): void;

        // Methods

        acquire(): any | null;
        alloc(): any | null;
        release(handle?: any | null): void;
    }

    namespace VulkanImageBufferPool {
        // Signal signatures
        interface SignalSignatures extends Gst.BufferPool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * Opaque GstVulkanImageBufferPool struct
     */
    class VulkanImageBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VulkanImageBufferPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanImageBufferPool.SignalSignatures;

        // Fields

        bufferpool: Gst.BufferPool;
        device: VulkanDevice;

        // Constructors

        constructor(properties?: Partial<VulkanImageBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanImageBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof VulkanImageBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanImageBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanImageBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanImageBufferPool.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanImageMemoryAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanImageMemoryAllocator struct
     */
    class VulkanImageMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanImageMemoryAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanImageMemoryAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanImageMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanImageMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanInstance {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'create-device': () => VulkanDevice;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanInstance extends Gst.Object {
        static $gtype: GObject.GType<VulkanInstance>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanInstance.SignalSignatures;

        // Fields

        n_physical_devices: number;

        // Constructors

        constructor(properties?: Partial<VulkanInstance.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VulkanInstance;

        // Signals

        connect<K extends keyof VulkanInstance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanInstance.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanInstance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanInstance.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanInstance.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanInstance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * If a #GstVulkanInstance is requested in `query,` sets `instance` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a #GstVulkanInstance.
         * @param element a #GstElement
         * @param query a #GstQuery of type #GST_QUERY_CONTEXT
         * @param instance the #GstVulkanInstance
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, instance?: VulkanInstance | null): boolean;
        /**
         * Attempt to retrieve a #GstVulkanInstance using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a #GstElement
         * @param instance a #GstVulkanInstance
         */
        static run_context_query(element: Gst.Element, instance: VulkanInstance): [boolean, VulkanInstance];

        // Methods

        create_device(): VulkanDevice;
        /**
         * Performs vkGetInstanceProcAddr() with `instance` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for @name or %NULL
         */
        get_proc_address(name: string): any | null;
        open(): boolean;
    }

    namespace VulkanMemoryAllocator {
        // Signal signatures
        interface SignalSignatures extends Gst.Allocator.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanMemoryAllocator struct
     */
    class VulkanMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanMemoryAllocator>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanMemoryAllocator.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanMemoryAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanPhysicalDevice {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::device-index': (pspec: GObject.ParamSpec) => void;
            'notify::instance': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            device_index: number;
            deviceIndex: number;
            instance: VulkanInstance;
            name: string;
        }
    }

    class VulkanPhysicalDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanPhysicalDevice>;

        // Properties

        get device_index(): number;
        get deviceIndex(): number;
        get instance(): VulkanInstance;
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanPhysicalDevice.SignalSignatures;

        // Fields

        n_device_layers: number;
        n_device_extensions: number;
        n_queue_families: number;

        // Constructors

        constructor(properties?: Partial<VulkanPhysicalDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;

        // Signals

        connect<K extends keyof VulkanPhysicalDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanPhysicalDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanPhysicalDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanPhysicalDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanPhysicalDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanPhysicalDevice.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static type_to_string(type: Vulkan.PhysicalDeviceType): string;

        // Methods

        get_instance(): VulkanInstance;
    }

    namespace VulkanQueue {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanQueue extends Gst.Object {
        static $gtype: GObject.GType<VulkanQueue>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanQueue.SignalSignatures;

        // Fields

        device: VulkanDevice;
        family: number;
        index: number;

        // Constructors

        constructor(properties?: Partial<VulkanQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static flags_to_string(queue_bits: Vulkan.QueueFlags): string;
        /**
         * If a #GstVulkanQueue is requested in `query,` sets `queue` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a #GstVulkanQueue.
         * @param element a #GstElement
         * @param query a #GstQuery of type #GST_QUERY_CONTEXT
         * @param queue the #GstVulkanQueue
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, queue?: VulkanQueue | null): boolean;
        /**
         * Attempt to retrieve a #GstVulkanQueue using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a #GstElement
         * @param queue a #GstVulkanQueue
         */
        static run_context_query(element: Gst.Element, queue: VulkanQueue): [boolean, VulkanQueue];

        // Methods

        create_command_pool(): VulkanCommandPool;
        get_device(): VulkanDevice;
        /**
         * Locks the queue for command submission using `vkQueueSubmit()` to meet the
         * Vulkan requirements for externally synchronised resources.
         */
        submit_lock(): void;
        /**
         * Unlocks the queue for command submission using `vkQueueSubmit()`.
         *
         * See gst_vulkan_queue_submit_lock() for details on when this call is needed.
         */
        submit_unlock(): void;
    }

    namespace VulkanSwapper {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::force-aspect-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::pixel-aspect-ratio': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            force_aspect_ratio: boolean;
            forceAspectRatio: boolean;
            pixel_aspect_ratio: Gst.Fraction;
            pixelAspectRatio: Gst.Fraction;
        }
    }

    class VulkanSwapper extends Gst.Object {
        static $gtype: GObject.GType<VulkanSwapper>;

        // Properties

        get force_aspect_ratio(): boolean;
        set force_aspect_ratio(val: boolean);
        get forceAspectRatio(): boolean;
        set forceAspectRatio(val: boolean);
        get pixel_aspect_ratio(): Gst.Fraction;
        set pixel_aspect_ratio(val: Gst.Fraction);
        get pixelAspectRatio(): Gst.Fraction;
        set pixelAspectRatio(val: Gst.Fraction);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanSwapper.SignalSignatures;

        // Fields

        device: VulkanDevice;
        window: VulkanWindow;
        queue: VulkanQueue;
        cmd_pool: VulkanCommandPool;

        // Constructors

        constructor(properties?: Partial<VulkanSwapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice, window: VulkanWindow): VulkanSwapper;

        // Signals

        connect<K extends keyof VulkanSwapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanSwapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanSwapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanSwapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanSwapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanSwapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        choose_queue(available_queue: VulkanQueue): boolean;
        get_supported_caps(): Gst.Caps;
        get_surface_rectangles(): [
            GstVideo.VideoRectangle | null,
            GstVideo.VideoRectangle | null,
            GstVideo.VideoRectangle | null,
        ];
        render_buffer(buffer: Gst.Buffer): boolean;
        set_caps(caps: Gst.Caps): boolean;
    }

    namespace VulkanTrashFenceList {
        // Signal signatures
        interface SignalSignatures extends VulkanTrashList.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends VulkanTrashList.ConstructorProps {}
    }

    class VulkanTrashFenceList extends VulkanTrashList {
        static $gtype: GObject.GType<VulkanTrashFenceList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanTrashFenceList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanTrashFenceList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VulkanTrashFenceList;

        // Signals

        connect<K extends keyof VulkanTrashFenceList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashFenceList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanTrashFenceList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashFenceList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanTrashFenceList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanTrashFenceList.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanTrashList {
        // Signal signatures
        interface SignalSignatures extends VulkanHandlePool.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }

    class VulkanTrashList extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanTrashList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanTrashList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanTrashList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanTrashList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanTrashList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanTrashList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanTrashList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_add_func(trash: VulkanTrash): boolean;
        vfunc_gc_func(): void;
        vfunc_wait_func(timeout: number): boolean;

        // Methods

        acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
        // Conflicted with GstVulkan.VulkanHandlePool.acquire
        acquire(...args: never[]): any;
        add(trash: VulkanTrash): boolean;
        gc(): void;
        wait(timeout: number): boolean;
    }

    namespace VulkanVideoFilter {
        // Signal signatures
        interface SignalSignatures extends GstBase.BaseTransform.SignalSignatures {
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
    }

    class VulkanVideoFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<VulkanVideoFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanVideoFilter.SignalSignatures;

        // Fields

        instance: VulkanInstance;
        device: VulkanDevice;
        queue: VulkanQueue;

        // Constructors

        constructor(properties?: Partial<VulkanVideoFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof VulkanVideoFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanVideoFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanVideoFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanVideoFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanVideoFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanVideoFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanWindow {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            close: () => boolean | void;
            draw: () => void;
            'key-event': (arg0: string, arg1: string) => void;
            'mouse-event': (arg0: string, arg1: number, arg2: number, arg3: number) => void;
            resize: (arg0: number, arg1: number) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            display: VulkanDisplay;
        }
    }

    /**
     * #GstVulkanWindow is an opaque struct and should only be accessed through the
     * provided api.
     */
    abstract class VulkanWindow extends Gst.Object {
        static $gtype: GObject.GType<VulkanWindow>;

        // Properties

        get display(): VulkanDisplay;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: VulkanDisplay): VulkanWindow;

        // Signals

        connect<K extends keyof VulkanWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VulkanWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VulkanWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Attempt to close the window.
         */
        vfunc_close(): void;
        vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        vfunc_get_surface_dimensions(width: number, height: number): void;
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a #gboolean indicating if events should be handled or not.
         */
        vfunc_handle_events(handle_events: boolean): void;
        vfunc_open(): boolean;
        vfunc_set_window_handle(handle: never): void;

        // Methods

        /**
         * Attempt to close the window.
         */
        close(): void;
        get_display(): VulkanDisplay;
        get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        get_surface_dimensions(width: number, height: number): void;
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a #gboolean indicating if events should be handled or not.
         */
        handle_events(handle_events: boolean): void;
        open(): boolean;
        /**
         * Ask the `window` to redraw its contents
         */
        redraw(): void;
        /**
         * Resize the output surface.
         *
         * Currently intended for subclasses to update internal state.
         * @param width the new width
         * @param height the new height
         */
        resize(width: number, height: number): void;
        send_key_event(event_type: string, key_str: string): void;
        send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
        set_window_handle(handle: never): void;
    }

    class VulkanBarrierBufferInfo {
        static $gtype: GObject.GType<VulkanBarrierBufferInfo>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanBarrierImageInfo {
        static $gtype: GObject.GType<VulkanBarrierImageInfo>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanBarrierMemoryInfo {
        static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;

        // Fields

        type: VulkanBarrierType;
        flags: VulkanBarrierFlags;
        queue: VulkanQueue;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanBufferMemory {
        static $gtype: GObject.GType<VulkanBufferMemory>;

        // Fields

        device: VulkanDevice;
        wrapped: boolean;
        notify: GLib.DestroyNotify;
        user_data: any;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocate a new #GstVulkanBufferMemory.
         * @param device a #GstVulkanDevice
         * @param size size of the new buffer
         * @param usage buffer usage flags
         * @param mem_prop_flags memory properties flags for the backing memory
         */
        static alloc(
            device: VulkanDevice,
            size: number,
            usage: Vulkan.BufferUsageFlags,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Initializes the Vulkan buffer memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
         */
        static init_once(): void;
    }

    type VulkanBufferMemoryAllocatorClass = typeof VulkanBufferMemoryAllocator;
    type VulkanBufferPoolClass = typeof VulkanBufferPool;
    abstract class VulkanBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanBufferPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanCommandBuffer {
        static $gtype: GObject.GType<VulkanCommandBuffer>;

        // Fields

        pool: VulkanCommandPool;

        // Constructors

        constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);
        _init(...args: any[]): void;

        static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
    }

    type VulkanCommandPoolClass = typeof VulkanCommandPool;
    abstract class VulkanCommandPoolPrivate {
        static $gtype: GObject.GType<VulkanCommandPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanDescriptorCacheClass = typeof VulkanDescriptorCache;
    abstract class VulkanDescriptorCachePrivate {
        static $gtype: GObject.GType<VulkanDescriptorCachePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanDescriptorPoolClass = typeof VulkanDescriptorPool;
    abstract class VulkanDescriptorPoolPrivate {
        static $gtype: GObject.GType<VulkanDescriptorPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanDescriptorSet {
        static $gtype: GObject.GType<VulkanDescriptorSet>;

        // Fields

        pool: VulkanDescriptorPool;
        cache: VulkanDescriptorCache;
        n_layouts: number;

        // Constructors

        constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, n_layouts: number, layouts: VulkanHandle);
        _init(...args: any[]): void;

        static new_wrapped(
            pool: VulkanDescriptorPool,
            set: Vulkan.DescriptorSet,
            n_layouts: number,
            layouts: VulkanHandle,
        ): VulkanDescriptorSet;
    }

    abstract class VulkanDescriptorSetClass {
        static $gtype: GObject.GType<VulkanDescriptorSetClass>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class VulkanDescriptorSetPrivate {
        static $gtype: GObject.GType<VulkanDescriptorSetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanDeviceClass = typeof VulkanDevice;
    abstract class VulkanDevicePrivate {
        static $gtype: GObject.GType<VulkanDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanDisplayClass = typeof VulkanDisplay;
    abstract class VulkanDisplayPrivate {
        static $gtype: GObject.GType<VulkanDisplayPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanFence {
        static $gtype: GObject.GType<VulkanFence>;

        // Fields

        device: VulkanDevice;
        cache: VulkanFenceCache;

        // Constructors

        constructor(device: VulkanDevice);
        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanFence;

        static new_always_signalled(device: VulkanDevice): VulkanFence;

        // Methods

        is_signaled(): boolean;
        reset(): void;
    }

    type VulkanFenceCacheClass = typeof VulkanFenceCache;
    class VulkanFormatInfo {
        static $gtype: GObject.GType<VulkanFormatInfo>;

        // Fields

        name: string;
        scaling: VulkanFormatScaling;
        flags: VulkanFormatFlags;
        bits: number;
        n_components: number;
        shift: Uint8Array;
        depth: Uint8Array;
        pixel_stride: Uint8Array;
        n_planes: number;
        plane: Uint8Array;
        poffset: Uint8Array;
        w_sub: Uint8Array;
        h_sub: Uint8Array;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanFullScreenQuadClass = typeof VulkanFullScreenQuad;
    abstract class VulkanFullScreenQuadPrivate {
        static $gtype: GObject.GType<VulkanFullScreenQuadPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Holds information about a vulkan non dispatchable handle
     */
    class VulkanHandle {
        static $gtype: GObject.GType<VulkanHandle>;

        // Fields

        device: VulkanDevice;
        type: VulkanHandleType;
        notify: VulkanHandleDestroyNotify;
        user_data: any;

        // Constructors

        constructor(
            device: VulkanDevice,
            type: VulkanHandleType,
            handle: VulkanHandleTypedef,
            notify: VulkanHandleDestroyNotify,
        );
        _init(...args: any[]): void;

        static new_wrapped(
            device: VulkanDevice,
            type: VulkanHandleType,
            handle: VulkanHandleTypedef,
            notify: VulkanHandleDestroyNotify,
        ): VulkanHandle;

        // Static methods

        static context_query(
            element: Gst.Element,
            query: Gst.Query,
            display?: VulkanDisplay | null,
            instance?: VulkanInstance | null,
            device?: VulkanDevice | null,
        ): boolean;
        /**
         * Helper function for implementing #GstElementClass.set_context() in
         * Vulkan capable elements.
         *
         * Retrieve's the #GstVulkanDisplay or #GstVulkanInstance in `context` and places
         * the result in `display` or `instance` respectively.
         * @param element a #GstElement
         * @param context a #GstContext
         * @param display location of a #GstVulkanDisplay
         * @param instance location of a #GstVulkanInstance
         */
        static set_context(
            element: Gst.Element,
            context: Gst.Context,
            display: VulkanDisplay | null,
            instance: VulkanInstance,
        ): [boolean, VulkanDisplay | null, VulkanInstance];

        // Methods

        /**
         * Frees the descriptor set layout in `handle`
         * @param user_data callback user data
         */
        free_descriptor_set_layout(user_data?: any | null): void;
        /**
         * Frees the framebuffer in `handle`
         * @param user_data callback user data
         */
        free_framebuffer(user_data?: any | null): void;
        /**
         * Frees the pipeline in `handle`
         * @param user_data callback user data
         */
        free_pipeline(user_data?: any | null): void;
        /**
         * Frees the pipeline layout in `handle`
         * @param user_data callback user data
         */
        free_pipeline_layout(user_data?: any | null): void;
        /**
         * Frees the render pass in `handle`
         * @param user_data callback user data
         */
        free_render_pass(user_data?: any | null): void;
        /**
         * Frees the sampler in `handle`
         * @param user_data callback user data
         */
        free_sampler(user_data?: any | null): void;
        /**
         * Frees the shader in `handle`
         * @param user_data callback user data
         */
        free_shader(user_data?: any | null): void;
    }

    type VulkanHandlePoolClass = typeof VulkanHandlePool;
    abstract class VulkanHandleTypedef {
        static $gtype: GObject.GType<VulkanHandleTypedef>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanImageBufferPoolClass = typeof VulkanImageBufferPool;
    abstract class VulkanImageBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanImageBufferPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanImageMemory {
        static $gtype: GObject.GType<VulkanImageMemory>;

        // Fields

        device: VulkanDevice;
        wrapped: boolean;
        notify: GLib.DestroyNotify;
        user_data: any;
        views: any[];
        outstanding_views: any[];

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocated a new #GstVulkanImageMemory.
         * @param device a #GstVulkanDevice
         * @param format the VkFormat for the new image
         * @param width width for the new image
         * @param height height for the new image
         * @param tiling tiling for the new image
         * @param usage usage flags for the new image
         * @param mem_prop_flags VkDeviceMemory property flags for the new image
         */
        static alloc(
            device: VulkanDevice,
            format: Vulkan.Format,
            width: number,
            height: number,
            tiling: Vulkan.ImageTiling,
            usage: Vulkan.ImageUsageFlags,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Initializes the Vulkan image memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
         */
        static init_once(): void;

        // Methods

        add_view(view: VulkanImageView): void;
        find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView;
        get_height(): number;
        get_width(): number;
        init(
            allocator: Gst.Allocator,
            parent: Gst.Memory,
            device: VulkanDevice,
            usage: Vulkan.ImageUsageFlags,
            params: Gst.AllocationParams,
            size: number,
            user_data?: any | null,
        ): boolean;
    }

    type VulkanImageMemoryAllocatorClass = typeof VulkanImageMemoryAllocator;
    class VulkanImageView {
        static $gtype: GObject.GType<VulkanImageView>;

        // Fields

        device: VulkanDevice;

        // Constructors

        constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);
        _init(...args: any[]): void;

        static ['new'](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
    }

    type VulkanInstanceClass = typeof VulkanInstance;
    abstract class VulkanInstancePrivate {
        static $gtype: GObject.GType<VulkanInstancePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanMemory {
        static $gtype: GObject.GType<VulkanMemory>;

        // Fields

        device: VulkanDevice;
        map_count: number;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Allocated a new #GstVulkanMemory.
         * @param device a #GstVulkanDevice
         * @param memory_type_index the Vulkan memory type index
         * @param params a #GstAllocationParams
         * @param size the size to allocate
         * @param mem_prop_flags
         */
        static alloc(
            device: VulkanDevice,
            memory_type_index: number,
            params: Gst.AllocationParams,
            size: number,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        static find_memory_type_index_with_type_properties(
            device: VulkanDevice,
            type_bits: number,
            properties: Vulkan.MemoryPropertyFlags,
            type_index: number,
        ): boolean;
        static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
        /**
         * Initializes the Vulkan memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other #GstVulkanMemory operation.
         */
        static init_once(): void;
        static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
    }

    type VulkanMemoryAllocatorClass = typeof VulkanMemoryAllocator;
    type VulkanPhysicalDeviceClass = typeof VulkanPhysicalDevice;
    abstract class VulkanPhysicalDevicePrivate {
        static $gtype: GObject.GType<VulkanPhysicalDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanQueueClass = typeof VulkanQueue;
    abstract class VulkanQueuePrivate {
        static $gtype: GObject.GType<VulkanQueuePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VulkanSwapperClass = typeof VulkanSwapper;
    abstract class VulkanSwapperPrivate {
        static $gtype: GObject.GType<VulkanSwapperPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class VulkanTrash {
        static $gtype: GObject.GType<VulkanTrash>;

        // Fields

        cache: VulkanTrashList;
        notify: VulkanTrashNotify;
        user_data: any;

        // Constructors

        constructor(fence: VulkanFence);
        _init(...args: any[]): void;

        static ['new'](fence: VulkanFence): VulkanTrash;

        static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

        // Static methods

        static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
        static object_unref(device: VulkanDevice, user_data?: any | null): void;
    }

    type VulkanTrashFenceListClass = typeof VulkanTrashFenceList;
    type VulkanTrashListClass = typeof VulkanTrashList;
    type VulkanVideoFilterClass = typeof VulkanVideoFilter;
    type VulkanWindowClass = typeof VulkanWindow;
    abstract class VulkanWindowPrivate {
        static $gtype: GObject.GType<VulkanWindowPrivate>;

        // Constructors

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

export default GstVulkan;

// END
