/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstvulkan-1.0-ambient.d.ts';
import './gstvulkan-1.0-import.d.ts';
/**
 * GstVulkan-1.0
 */

import type Vulkan from '@girs/vulkan-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstVulkan {
    enum VulkanBarrierFlags {
        NONE,
    }
    enum VulkanBarrierType {
        NONE,
        TYPE_MEMORY,
        TYPE_BUFFER,
        TYPE_IMAGE,
    }
    class VulkanError extends GLib.Error {
        // Own fields of GstVulkan-1.0.VulkanError

        FAILED: number;

        // Constructors of GstVulkan-1.0.VulkanError

        constructor(options: { message: string; code: number });

        // Owm methods of GstVulkan-1.0.VulkanError

        static quark(): GLib.Quark;
        /**
         * if `result` indicates an error condition, fills out #Gerror with details of
         * the error
         * @param result a VkResult
         * @param error a #GError to fill
         * @param format the printf-like format to write into the #GError
         * @param ___ arguments for @format
         */
        static to_g_error(result: Vulkan.Result, error: GLib.Error | null, format: string, ___: any[]): Vulkan.Result;
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
        // Own fields of GstVulkan-1.0.VulkanWindowError

        FAILED: number;
        OLD_LIBS: number;
        RESOURCE_UNAVAILABLE: number;

        // Constructors of GstVulkan-1.0.VulkanWindowError

        constructor(options: { message: string; code: number });

        // Owm methods of GstVulkan-1.0.VulkanWindowError

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
    function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string;
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
    ): boolean;
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
    ): boolean;
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
    function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean;
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
    enum VulkanFormatFlags {
        YUV,
        RGB,
        ALPHA,
        LE,
        COMPLEX,
    }
    module VulkanBufferMemoryAllocator {
        // Constructor properties interface
    }

    /**
     * Opaque #GstVulkanBufferMemoryAllocator struct
     */
    class VulkanBufferMemoryAllocator extends Gst.Allocator {}

    module VulkanBufferPool {
        // Constructor properties interface
    }

    /**
     * Opaque GstVulkanBufferPool struct
     */
    class VulkanBufferPool extends Gst.BufferPool {
        // Own fields of GstVulkan-1.0.VulkanBufferPool

        bufferpool: Gst.BufferPool;
        device: VulkanDevice;

        // Constructors of GstVulkan-1.0.VulkanBufferPool

        static ['new'](device: VulkanDevice): VulkanBufferPool;
    }

    module VulkanCommandPool {
        // Constructor properties interface
    }

    class VulkanCommandPool extends Gst.Object {
        // Own fields of GstVulkan-1.0.VulkanCommandPool

        queue: VulkanQueue;

        // Owm methods of GstVulkan-1.0.VulkanCommandPool

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

    module VulkanDescriptorCache {
        // Constructor properties interface
    }

    class VulkanDescriptorCache extends VulkanHandlePool {
        // Own fields of GstVulkan-1.0.VulkanDescriptorCache

        pool: VulkanDescriptorPool;

        // Constructors of GstVulkan-1.0.VulkanDescriptorCache

        static ['new'](pool: VulkanDescriptorPool, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorCache;

        // Owm methods of GstVulkan-1.0.VulkanDescriptorCache

        acquire(): VulkanDescriptorSet;
    }

    module VulkanDescriptorPool {
        // Constructor properties interface
    }

    class VulkanDescriptorPool extends Gst.Object {
        // Own fields of GstVulkan-1.0.VulkanDescriptorPool

        device: VulkanDevice;

        // Constructors of GstVulkan-1.0.VulkanDescriptorPool

        static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: number): VulkanDescriptorPool;

        // Owm methods of GstVulkan-1.0.VulkanDescriptorPool

        create(n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet;
        get_device(): VulkanDevice;
        get_max_sets(): number;
    }

    module VulkanDevice {
        // Constructor properties interface
    }

    class VulkanDevice extends Gst.Object {
        // Own properties of GstVulkan-1.0.VulkanDevice

        readonly instance: VulkanInstance;
        physical_device: VulkanPhysicalDevice;
        physicalDevice: VulkanPhysicalDevice;

        // Constructors of GstVulkan-1.0.VulkanDevice

        static ['new'](physical_device: VulkanPhysicalDevice): VulkanDevice;

        static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice;

        // Owm methods of GstVulkan-1.0.VulkanDevice

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
        static run_context_query(element: Gst.Element, device: VulkanDevice): boolean;

        // Owm methods of GstVulkan-1.0.VulkanDevice

        create_fence(): VulkanFence;
        /**
         * Iterate over each queue family available on #GstVulkanDevice
         */
        foreach_queue(): void;
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

    module VulkanDisplay {
        // Constructor properties interface
    }

    /**
     * The contents of a #GstVulkanDisplay are private and should only be accessed
     * through the provided API
     */
    class VulkanDisplay extends Gst.Object {
        // Constructors of GstVulkan-1.0.VulkanDisplay

        static ['new'](instance: VulkanInstance): VulkanDisplay;

        static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay;

        // Owm methods of GstVulkan-1.0.VulkanDisplay

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
        static run_context_query(element: Gst.Element, display: VulkanDisplay): boolean;

        // Owm methods of GstVulkan-1.0.VulkanDisplay

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

    module VulkanFenceCache {
        // Constructor properties interface
    }

    class VulkanFenceCache extends VulkanHandlePool {
        // Constructors of GstVulkan-1.0.VulkanFenceCache

        static ['new'](device: VulkanDevice): VulkanFenceCache;
    }

    module VulkanFullScreenQuad {
        // Constructor properties interface
    }

    class VulkanFullScreenQuad extends Gst.Object {
        // Own fields of GstVulkan-1.0.VulkanFullScreenQuad

        queue: VulkanQueue;
        descriptor_cache: VulkanDescriptorCache;
        cmd_pool: VulkanCommandPool;
        trash_list: VulkanTrashList;

        // Constructors of GstVulkan-1.0.VulkanFullScreenQuad

        static ['new'](queue: VulkanQueue): VulkanFullScreenQuad;

        // Owm methods of GstVulkan-1.0.VulkanFullScreenQuad

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

    module VulkanHandlePool {
        // Constructor properties interface
    }

    abstract class VulkanHandlePool extends Gst.Object {
        // Own fields of GstVulkan-1.0.VulkanHandlePool

        device: VulkanDevice;
        outstanding: any[];
        available: any[];

        // Owm methods of GstVulkan-1.0.VulkanHandlePool

        acquire(): any | null;
        alloc(): any | null;
        release(handle?: any | null): void;
    }

    module VulkanImageBufferPool {
        // Constructor properties interface
    }

    /**
     * Opaque GstVulkanImageBufferPool struct
     */
    class VulkanImageBufferPool extends Gst.BufferPool {
        // Own fields of GstVulkan-1.0.VulkanImageBufferPool

        bufferpool: Gst.BufferPool;
        device: VulkanDevice;

        // Constructors of GstVulkan-1.0.VulkanImageBufferPool

        static ['new'](device: VulkanDevice): VulkanImageBufferPool;
    }

    module VulkanImageMemoryAllocator {
        // Constructor properties interface
    }

    /**
     * Opaque #GstVulkanImageMemoryAllocator struct
     */
    class VulkanImageMemoryAllocator extends Gst.Allocator {}

    module VulkanInstance {
        // Signal callback interfaces

        interface CreateDevice {
            (): VulkanDevice;
        }

        // Constructor properties interface
    }

    class VulkanInstance extends Gst.Object {
        // Own fields of GstVulkan-1.0.VulkanInstance

        n_physical_devices: number;

        // Constructors of GstVulkan-1.0.VulkanInstance

        static ['new'](): VulkanInstance;

        // Owm methods of GstVulkan-1.0.VulkanInstance

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
        static run_context_query(element: Gst.Element, instance: VulkanInstance): boolean;

        // Owm methods of GstVulkan-1.0.VulkanInstance

        create_device(): VulkanDevice;
        /**
         * Performs vkGetInstanceProcAddr() with `instance` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for @name or %NULL
         */
        get_proc_address(name: string): any | null;
        open(): boolean;
    }

    module VulkanMemoryAllocator {
        // Constructor properties interface
    }

    /**
     * Opaque #GstVulkanMemoryAllocator struct
     */
    class VulkanMemoryAllocator extends Gst.Allocator {}

    module VulkanPhysicalDevice {
        // Constructor properties interface
    }

    class VulkanPhysicalDevice extends Gst.Object {
        // Own properties of GstVulkan-1.0.VulkanPhysicalDevice

        device_index: number;
        deviceIndex: number;
        instance: VulkanInstance;
        readonly name: string;

        // Own fields of GstVulkan-1.0.VulkanPhysicalDevice

        n_device_layers: number;
        n_device_extensions: number;
        n_queue_families: number;

        // Constructors of GstVulkan-1.0.VulkanPhysicalDevice

        static ['new'](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;

        // Owm methods of GstVulkan-1.0.VulkanPhysicalDevice

        static type_to_string(type: Vulkan.PhysicalDeviceType): string;

        // Owm methods of GstVulkan-1.0.VulkanPhysicalDevice

        get_instance(): VulkanInstance;
    }

    module VulkanQueue {
        // Constructor properties interface
    }

    class VulkanQueue extends Gst.Object {
        // Own fields of GstVulkan-1.0.VulkanQueue

        device: VulkanDevice;
        family: number;
        index: number;

        // Owm methods of GstVulkan-1.0.VulkanQueue

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
        static run_context_query(element: Gst.Element, queue: VulkanQueue): boolean;

        // Owm methods of GstVulkan-1.0.VulkanQueue

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

    module VulkanSwapper {
        // Constructor properties interface
    }

    class VulkanSwapper extends Gst.Object {
        // Own properties of GstVulkan-1.0.VulkanSwapper

        force_aspect_ratio: boolean;
        forceAspectRatio: boolean;
        pixel_aspect_ratio: Gst.Fraction;
        pixelAspectRatio: Gst.Fraction;

        // Own fields of GstVulkan-1.0.VulkanSwapper

        device: VulkanDevice;
        window: VulkanWindow;
        queue: VulkanQueue;
        cmd_pool: VulkanCommandPool;

        // Constructors of GstVulkan-1.0.VulkanSwapper

        static ['new'](device: VulkanDevice, window: VulkanWindow): VulkanSwapper;

        // Owm methods of GstVulkan-1.0.VulkanSwapper

        choose_queue(available_queue: VulkanQueue): boolean;
        get_supported_caps(): Gst.Caps;
        get_surface_rectangles(): void;
        render_buffer(buffer: Gst.Buffer): boolean;
        set_caps(caps: Gst.Caps): boolean;
    }

    module VulkanTrashFenceList {
        // Constructor properties interface
    }

    class VulkanTrashFenceList extends VulkanTrashList {
        // Constructors of GstVulkan-1.0.VulkanTrashFenceList

        static ['new'](): VulkanTrashFenceList;
    }

    module VulkanTrashList {
        // Constructor properties interface
    }

    class VulkanTrashList extends VulkanHandlePool {
        // Owm methods of GstVulkan-1.0.VulkanTrashList

        acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
        add(trash: VulkanTrash): boolean;
        gc(): void;
        wait(timeout: number): boolean;
    }

    module VulkanVideoFilter {
        // Constructor properties interface
    }

    class VulkanVideoFilter extends GstBase.BaseTransform {
        // Own fields of GstVulkan-1.0.VulkanVideoFilter

        instance: VulkanInstance;
        device: VulkanDevice;
        queue: VulkanQueue;
    }

    module VulkanWindow {
        // Signal callback interfaces

        interface Close {
            (): boolean;
        }

        interface Draw {
            (): void;
        }

        interface KeyEvent {
            (id: string, key: string): void;
        }

        interface MouseEvent {
            (id: string, button: number, x: number, y: number): void;
        }

        interface Resize {
            (object: number, p0: number): void;
        }

        // Constructor properties interface
    }

    /**
     * #GstVulkanWindow is an opaque struct and should only be accessed through the
     * provided api.
     */
    abstract class VulkanWindow extends Gst.Object {
        // Own properties of GstVulkan-1.0.VulkanWindow

        readonly display: VulkanDisplay;

        // Constructors of GstVulkan-1.0.VulkanWindow

        static ['new'](display: VulkanDisplay): VulkanWindow;

        // Owm methods of GstVulkan-1.0.VulkanWindow

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

    class VulkanBarrierBufferInfo {}

    class VulkanBarrierImageInfo {}

    class VulkanBarrierMemoryInfo {
        // Own fields of GstVulkan-1.0.VulkanBarrierMemoryInfo

        type: VulkanBarrierType;
        flags: VulkanBarrierFlags;
        queue: VulkanQueue;
    }

    class VulkanBufferMemory {
        // Own fields of GstVulkan-1.0.VulkanBufferMemory

        device: VulkanDevice;
        wrapped: boolean;
        notify: GLib.DestroyNotify;
        user_data: any;

        // Owm methods of GstVulkan-1.0.VulkanBufferMemory

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
        /**
         * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
         * @param device a #GstVulkanDevice
         * @param buffer a #VkBuffer
         * @param usage usage flags of @buffer
         * @param user_data user data to call @notify with
         * @param notify a #GDestroyNotify called when @buffer is no longer in use
         */
        static wrapped(
            device: VulkanDevice,
            buffer: Vulkan.Buffer,
            usage: Vulkan.BufferUsageFlags,
            user_data?: any | null,
            notify?: GLib.DestroyNotify | null,
        ): Gst.Memory;
    }

    /**
     * The #GstVulkanBufferMemoryAllocatorClass only contains private data
     */
    class VulkanBufferMemoryAllocatorClass {}

    /**
     * The #GstVulkanBufferPoolClass structure contains only private data
     */
    class VulkanBufferPoolClass {}

    class VulkanBufferPoolPrivate {}

    class VulkanCommandBuffer {
        // Own fields of GstVulkan-1.0.VulkanCommandBuffer

        pool: VulkanCommandPool;

        // Constructors of GstVulkan-1.0.VulkanCommandBuffer

        constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);

        static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
    }

    class VulkanCommandPoolClass {}

    class VulkanCommandPoolPrivate {}

    class VulkanDescriptorCacheClass {}

    class VulkanDescriptorCachePrivate {}

    class VulkanDescriptorPoolClass {}

    class VulkanDescriptorPoolPrivate {}

    class VulkanDescriptorSet {
        // Own fields of GstVulkan-1.0.VulkanDescriptorSet

        pool: VulkanDescriptorPool;
        cache: VulkanDescriptorCache;
        n_layouts: number;

        // Constructors of GstVulkan-1.0.VulkanDescriptorSet

        constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, n_layouts: number, layouts: VulkanHandle);

        static new_wrapped(
            pool: VulkanDescriptorPool,
            set: Vulkan.DescriptorSet,
            n_layouts: number,
            layouts: VulkanHandle,
        ): VulkanDescriptorSet;
    }

    class VulkanDescriptorSetClass {}

    class VulkanDescriptorSetPrivate {}

    class VulkanDeviceClass {}

    class VulkanDevicePrivate {}

    class VulkanDisplayClass {}

    class VulkanDisplayPrivate {}

    class VulkanFence {
        // Own fields of GstVulkan-1.0.VulkanFence

        device: VulkanDevice;
        cache: VulkanFenceCache;

        // Constructors of GstVulkan-1.0.VulkanFence

        constructor(device: VulkanDevice);

        static ['new'](device: VulkanDevice): VulkanFence;

        static new_always_signalled(device: VulkanDevice): VulkanFence;

        // Owm methods of GstVulkan-1.0.VulkanFence

        is_signaled(): boolean;
        reset(): void;
    }

    class VulkanFenceCacheClass {}

    class VulkanFormatInfo {
        // Own fields of GstVulkan-1.0.VulkanFormatInfo

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
    }

    class VulkanFullScreenQuadClass {}

    class VulkanFullScreenQuadPrivate {}

    /**
     * Holds information about a vulkan non dispatchable handle
     */
    class VulkanHandle {
        // Own fields of GstVulkan-1.0.VulkanHandle

        device: VulkanDevice;
        type: VulkanHandleType;
        notify: VulkanHandleDestroyNotify;
        user_data: any;

        // Constructors of GstVulkan-1.0.VulkanHandle

        constructor(
            device: VulkanDevice,
            type: VulkanHandleType,
            handle: VulkanHandleTypedef,
            notify: VulkanHandleDestroyNotify,
        );

        static new_wrapped(
            device: VulkanDevice,
            type: VulkanHandleType,
            handle: VulkanHandleTypedef,
            notify: VulkanHandleDestroyNotify,
        ): VulkanHandle;

        // Owm methods of GstVulkan-1.0.VulkanHandle

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
        ): boolean;

        // Owm methods of GstVulkan-1.0.VulkanHandle

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

    class VulkanHandlePoolClass {}

    class VulkanHandleTypedef {}

    /**
     * The #GstVulkanImageBufferPoolClass structure contains only private data
     */
    class VulkanImageBufferPoolClass {}

    class VulkanImageBufferPoolPrivate {}

    class VulkanImageMemory {
        // Own fields of GstVulkan-1.0.VulkanImageMemory

        device: VulkanDevice;
        wrapped: boolean;
        notify: GLib.DestroyNotify;
        user_data: any;
        views: any[];
        outstanding_views: any[];

        // Owm methods of GstVulkan-1.0.VulkanImageMemory

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
        static wrapped(
            device: VulkanDevice,
            image: Vulkan.Image,
            format: Vulkan.Format,
            width: number,
            height: number,
            tiling: Vulkan.ImageTiling,
            usage: Vulkan.ImageUsageFlags,
            user_data?: any | null,
        ): Gst.Memory;

        // Owm methods of GstVulkan-1.0.VulkanImageMemory

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

    /**
     * The #GstVulkanImageMemoryAllocatorClass only contains private data
     */
    class VulkanImageMemoryAllocatorClass {}

    class VulkanImageView {
        // Own fields of GstVulkan-1.0.VulkanImageView

        device: VulkanDevice;

        // Constructors of GstVulkan-1.0.VulkanImageView

        constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);

        static ['new'](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
    }

    class VulkanInstanceClass {}

    class VulkanInstancePrivate {}

    class VulkanMemory {
        // Own fields of GstVulkan-1.0.VulkanMemory

        device: VulkanDevice;
        map_count: number;

        // Owm methods of GstVulkan-1.0.VulkanMemory

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

    /**
     * The #GstVulkanMemoryAllocatorClass only contains private data
     */
    class VulkanMemoryAllocatorClass {}

    class VulkanPhysicalDeviceClass {}

    class VulkanPhysicalDevicePrivate {}

    class VulkanQueueClass {}

    class VulkanQueuePrivate {}

    class VulkanSwapperClass {}

    class VulkanSwapperPrivate {}

    class VulkanTrash {
        // Own fields of GstVulkan-1.0.VulkanTrash

        cache: VulkanTrashList;
        notify: VulkanTrashNotify;
        user_data: any;

        // Constructors of GstVulkan-1.0.VulkanTrash

        constructor(fence: VulkanFence);

        static ['new'](fence: VulkanFence): VulkanTrash;

        static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

        // Owm methods of GstVulkan-1.0.VulkanTrash

        static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
        static object_unref(device: VulkanDevice, user_data?: any | null): void;
    }

    class VulkanTrashFenceListClass {}

    class VulkanTrashListClass {
        // Own fields of GstVulkan-1.0.VulkanTrashListClass

        add_func: VulkanTrashListAdd;
        gc_func: VulkanTrashListGC;
        wait_func: VulkanTrashListWait;
    }

    class VulkanVideoFilterClass {}

    class VulkanWindowClass {}

    class VulkanWindowPrivate {}

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
