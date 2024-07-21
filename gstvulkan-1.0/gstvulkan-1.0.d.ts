/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

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
        /**
         * no barrier type
         */
        NONE,
        TYPE_MEMORY,
        TYPE_BUFFER,
        TYPE_IMAGE,
    }
    class VulkanError extends GLib.Error {
        static $gtype: GObject.GType<VulkanError>;

        // Static fields of GstVulkan.VulkanError

        /**
         * undetermined error
         */
        static FAILED: number;

        // Constructors of GstVulkan.VulkanError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of GstVulkan.VulkanError

        static quark(): GLib.Quark;
        /**
         * if `result` indicates an error condition, fills out #GError with details of
         * the error
         * @param result a VkResult
         * @param format the printf-like format to write into the #GError
         * @param ___ arguments for @format
         */
        static to_g_error(result: Vulkan.Result, format: string, ___: any[]): [Vulkan.Result, GLib.Error | null];
    }

    export namespace VulkanFormatScaling {
        export const $gtype: GObject.GType<VulkanFormatScaling>;
    }

    enum VulkanFormatScaling {
        /**
         * [0, 2^n - 1] -> [0.0, 1.0]
         */
        UNORM,
        /**
         * [-2^(n-1), 2^(n-1) - 1] -> [-1.0, 1.0]
         */
        SNORM,
        /**
         * [0, 2^n - 1] -> [0.0, float(2^n - 1)]
         */
        USCALED,
        /**
         * [-2^(n-1), 2^(n-1) - 1] -> [float(-2^(n-1)), float(2^(n-1) - 1)]
         */
        SSCALED,
        /**
         * [0, 2^n - 1] -> [0, 2^n - 1]
         */
        UINT,
        /**
         * [-2^(n-1), 2^(n-1) - 1] -> [-2^(n-1), 2^(n-1) - 1]
         */
        SINT,
        /**
         * `GST_VULKAN_FORMAT_SCALING_UNORM` but the first three components are gamma corrected for the sRGB colour space.
         */
        SRGB,
    }
    export namespace VulkanHandleType {
        export const $gtype: GObject.GType<VulkanHandleType>;
    }

    enum VulkanHandleType {
        /**
         * descripter set layout
         */
        DESCRIPTOR_SET_LAYOUT,
        /**
         * pipeline layout
         */
        PIPELINE_LAYOUT,
        /**
         * pipeline
         */
        PIPELINE,
        /**
         * render pass
         */
        RENDER_PASS,
        /**
         * sampler
         */
        SAMPLER,
        /**
         * framebuffer
         */
        FRAMEBUFFER,
        /**
         * shader
         */
        SHADER,
    }
    class VulkanWindowError extends GLib.Error {
        static $gtype: GObject.GType<VulkanWindowError>;

        // Static fields of GstVulkan.VulkanWindowError

        /**
         * failed
         */
        static FAILED: number;
        /**
         * old libraries
         */
        static OLD_LIBS: number;
        /**
         * resource unavailable
         */
        static RESOURCE_UNAVAILABLE: number;

        // Constructors of GstVulkan.VulkanWindowError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of GstVulkan.VulkanWindowError

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
     * @param buffer a `VkBuffer`
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
    function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string | null;
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
    function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo | null;
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
    function vulkan_present_mode_to_string(present_mode: Vulkan.PresentModeKHR): string;
    function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean;
    function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
    /**
     * A #GstVulkanTrashNotify implementation for unreffing a #GstMiniObject when the
     * associated #GstVulkanFence is signalled
     * @param device the #GstVulkanDevice
     * @param user_data the #GstMiniObject
     */
    function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
    /**
     * A #GstVulkanTrashNotify implementation for unreffing a #GstObject when the
     * associated #GstVulkanFence is signalled
     * @param device the #GstVulkanDevice
     * @param user_data the #GstMiniObject
     */
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
        /**
         * any display type
         */
        ANY,
    }
    export namespace VulkanFormatFlags {
        export const $gtype: GObject.GType<VulkanFormatFlags>;
    }

    enum VulkanFormatFlags {
        /**
         * is a YUV format
         */
        YUV,
        /**
         * is a RGB format
         */
        RGB,
        /**
         * has an alpha channel
         */
        ALPHA,
        /**
         * data is stored in little-endiate byte order
         */
        LE,
        /**
         * data is stored complex and cannot be read/write only using the information in the #GstVulkanFormatInfo
         */
        COMPLEX,
    }
    module VulkanBufferMemoryAllocator {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanBufferMemoryAllocator struct
     */
    class VulkanBufferMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanBufferMemoryAllocator>;

        // Constructors of GstVulkan.VulkanBufferMemoryAllocator

        constructor(properties?: Partial<VulkanBufferMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module VulkanBufferPool {
        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanBufferPool struct
     */
    class VulkanBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VulkanBufferPool>;

        // Own fields of GstVulkan.VulkanBufferPool

        bufferpool: Gst.BufferPool;
        device: VulkanDevice;

        // Constructors of GstVulkan.VulkanBufferPool

        constructor(properties?: Partial<VulkanBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;
    }

    module VulkanCommandPool {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanCommandPool extends Gst.Object {
        static $gtype: GObject.GType<VulkanCommandPool>;

        // Own fields of GstVulkan.VulkanCommandPool

        queue: VulkanQueue;

        // Constructors of GstVulkan.VulkanCommandPool

        constructor(properties?: Partial<VulkanCommandPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of GstVulkan.VulkanCommandPool

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

        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }

    class VulkanDescriptorCache extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanDescriptorCache>;

        // Own fields of GstVulkan.VulkanDescriptorCache

        pool: VulkanDescriptorPool;

        // Constructors of GstVulkan.VulkanDescriptorCache

        constructor(properties?: Partial<VulkanDescriptorCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pool: VulkanDescriptorPool, layouts: VulkanHandle[]): VulkanDescriptorCache;

        // Own methods of GstVulkan.VulkanDescriptorCache

        acquire(): VulkanDescriptorSet;
        // Conflicted with GstVulkan.VulkanHandlePool.acquire
        acquire(...args: never[]): any;
    }

    module VulkanDescriptorPool {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanDescriptorPool extends Gst.Object {
        static $gtype: GObject.GType<VulkanDescriptorPool>;

        // Own fields of GstVulkan.VulkanDescriptorPool

        device: VulkanDevice;

        // Constructors of GstVulkan.VulkanDescriptorPool

        constructor(properties?: Partial<VulkanDescriptorPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: number): VulkanDescriptorPool;

        // Own methods of GstVulkan.VulkanDescriptorPool

        create(layouts: VulkanHandle[]): VulkanDescriptorSet;
        get_device(): VulkanDevice;
        get_max_sets(): number;
    }

    module VulkanDevice {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            instance: VulkanInstance;
            physical_device: VulkanPhysicalDevice;
            physicalDevice: VulkanPhysicalDevice;
        }
    }

    class VulkanDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanDevice>;

        // Own properties of GstVulkan.VulkanDevice

        get instance(): VulkanInstance;
        get physical_device(): VulkanPhysicalDevice;
        get physicalDevice(): VulkanPhysicalDevice;

        // Constructors of GstVulkan.VulkanDevice

        constructor(properties?: Partial<VulkanDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](physical_device: VulkanPhysicalDevice): VulkanDevice;

        static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice;

        // Own static methods of GstVulkan.VulkanDevice

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

        // Own methods of GstVulkan.VulkanDevice

        create_fence(): VulkanFence | null;
        /**
         * Disable an Vulkan extension by `name`.  Disabling an extension will only have
         * an effect before the call to gst_vulkan_device_open().
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be disabled.
         */
        disable_extension(name: string): boolean;
        /**
         * Enable an Vulkan extension by `name`.  Enabling an extension will
         * only have an effect before the call to gst_vulkan_device_open().
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be enabled.
         */
        enable_extension(name: string): boolean;
        /**
         * Enable an Vulkan layer by `name`.  Enabling a layer will
         * only have an effect before the call to gst_vulkan_device_open().
         * @param name layer name to enable
         * @returns whether the Vulkan layer could be enabled.
         */
        enable_layer(name: string): boolean;
        /**
         * Iterate over each queue family available on #GstVulkanDevice
         */
        foreach_queue(): void;
        get_instance(): VulkanInstance | null;
        /**
         * Performs `vkGetDeviceProcAddr()` with `device` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for @name or %NULL
         */
        get_proc_address(name: string): any | null;
        get_queue(queue_family: number, queue_i: number): VulkanQueue;
        is_extension_enabled(name: string): boolean;
        is_layer_enabled(name: string): boolean;
        /**
         * Attempts to create the internal `VkDevice` object.
         * @returns whether a vulkan device could be created
         */
        open(): boolean;
    }

    module VulkanDisplay {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * The contents of a #GstVulkanDisplay are private and should only be accessed
     * through the provided API
     */
    class VulkanDisplay extends Gst.Object {
        static $gtype: GObject.GType<VulkanDisplay>;

        // Constructors of GstVulkan.VulkanDisplay

        constructor(properties?: Partial<VulkanDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](instance: VulkanInstance): VulkanDisplay;

        static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay;

        // Own static methods of GstVulkan.VulkanDisplay

        /**
         * This function will read the `GST_VULKAN_WINDOW` environment variable for
         * a user choice or choose the first supported implementation.
         *
         * gst_vulkan_instance_fill_info() must have been called prior to this function.
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

        // Own virtual methods of GstVulkan.VulkanDisplay

        /**
         * create a window
         */
        vfunc_create_window(): VulkanWindow | null;
        /**
         * get the native handle to the display
         */
        vfunc_get_handle(): any | null;

        // Own methods of GstVulkan.VulkanDisplay

        create_window(): VulkanWindow | null;
        /**
         * Execute `compare_func` over the list of windows stored by `display`.  The
         * first argument to `compare_func` is the #GstVulkanWindow being checked and the
         * second argument is `data`.
         * @param data some data to pass to @compare_func
         * @param compare_func a comparison function to run
         * @returns The first #GstVulkanWindow that                                      @compare_func matches, or %NULL
         */
        find_window(data: any | null, compare_func: GLib.CompareFunc): VulkanWindow | null;
        get_handle(): any | null;
        get_handle_type(): VulkanDisplayType;
        remove_window(window: VulkanWindow): boolean;
    }

    module VulkanFenceCache {
        // Constructor properties interface

        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }

    class VulkanFenceCache extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanFenceCache>;

        // Constructors of GstVulkan.VulkanFenceCache

        constructor(properties?: Partial<VulkanFenceCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanFenceCache;
    }

    module VulkanFullScreenQuad {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanFullScreenQuad extends Gst.Object {
        static $gtype: GObject.GType<VulkanFullScreenQuad>;

        // Own fields of GstVulkan.VulkanFullScreenQuad

        queue: VulkanQueue;
        descriptor_cache: VulkanDescriptorCache;
        cmd_pool: VulkanCommandPool;
        trash_list: VulkanTrashList;

        // Constructors of GstVulkan.VulkanFullScreenQuad

        constructor(properties?: Partial<VulkanFullScreenQuad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](queue: VulkanQueue): VulkanFullScreenQuad;

        // Own methods of GstVulkan.VulkanFullScreenQuad

        /**
         * Helper function for creation and submission of a command buffer that draws
         * a full screen quad.  If you need to add other things to the command buffer,
         * create the command buffer manually and call
         * gst_vulkan_full_screen_quad_prepare_draw(),
         * gst_vulkan_full_screen_quad_fill_command_buffer() and
         * gst_vulkan_full_screen_quad_submit() instead.
         * @returns whether the draw was successful
         */
        draw(): boolean;
        /**
         * Enables blending of the input image to the output image.
         *
         * See also: gst_vulkan_full_screen_quad_set_blend_operation() and
         * gst_vulkan_full_screen_quad_set_blend_factors().
         * @param enable_blend whether to enable blending
         */
        enable_blend(enable_blend: boolean): void;
        enable_clear(enable_clear: boolean): void;
        fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
        get_last_fence(): VulkanFence;
        prepare_draw(fence: VulkanFence): boolean;
        /**
         * You need to enable blend with gst_vulkan_full_screen_quad_enable_blend().
         *
         * See also: gst_vulkan_full_screen_quad_set_blend_operation().
         * @param src_blend_factor the `VkBlendFactor` for the source image for the colour                    components (RGB)
         * @param dst_blend_factor the `VkBlendFactor` for the destination image for the                    colour components (RGB)
         * @param src_alpha_blend_factor the `VkBlendFactor` for the source image for the                          alpha component.
         * @param dst_alpha_blend_factor the `VkBlendFactor` for the destination image for                          the alpha component.
         */
        set_blend_factors(
            src_blend_factor: Vulkan.BlendFactor,
            dst_blend_factor: Vulkan.BlendFactor,
            src_alpha_blend_factor: Vulkan.BlendFactor,
            dst_alpha_blend_factor: Vulkan.BlendFactor,
        ): void;
        /**
         * You need to enable blend with gst_vulkan_full_screen_quad_enable_blend().
         *
         * See also: gst_vulkan_full_screen_quad_set_blend_factors().
         * @param colour_blend_op the `VkBlendOp` to use for blending colour (RGB) values
         * @param alpha_blend_op the `VkBlendOp` to use for blending alpha values
         */
        set_blend_operation(colour_blend_op: Vulkan.BlendOp, alpha_blend_op: Vulkan.BlendOp): void;
        /**
         * See also gst_vulkan_full_screen_quad_set_vertex_buffer()
         * @param indices the index data.  Must be a #GstVulkanBufferMemory
         * @param n_indices number of indices in @indices
         * @returns whether the index data could be set
         */
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

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    abstract class VulkanHandlePool extends Gst.Object {
        static $gtype: GObject.GType<VulkanHandlePool>;

        // Own fields of GstVulkan.VulkanHandlePool

        device: VulkanDevice;
        outstanding: any[];
        available: any[];

        // Constructors of GstVulkan.VulkanHandlePool

        constructor(properties?: Partial<VulkanHandlePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of GstVulkan.VulkanHandlePool

        /**
         * acquire a handle for usage
         */
        vfunc_acquire(): any | null;
        /**
         * allocate a new handle
         */
        vfunc_alloc(): any | null;
        /**
         * free a handle
         * @param handle
         */
        vfunc_free(handle?: any | null): void;
        /**
         * release a handle for possible reuse at the next call to `acquire`
         * @param handle
         */
        vfunc_release(handle?: any | null): void;

        // Own methods of GstVulkan.VulkanHandlePool

        acquire(): any | null;
        alloc(): any | null;
        release(handle?: any | null): void;
    }

    module VulkanImageBufferPool {
        // Constructor properties interface

        interface ConstructorProps extends Gst.BufferPool.ConstructorProps {}
    }

    class VulkanImageBufferPool extends Gst.BufferPool {
        static $gtype: GObject.GType<VulkanImageBufferPool>;

        // Own fields of GstVulkan.VulkanImageBufferPool

        bufferpool: Gst.BufferPool;
        device: VulkanDevice;

        // Constructors of GstVulkan.VulkanImageBufferPool

        constructor(properties?: Partial<VulkanImageBufferPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanImageBufferPool;
        // Conflicted with Gst.BufferPool.new

        static ['new'](...args: never[]): any;
    }

    module VulkanImageMemoryAllocator {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanImageMemoryAllocator struct
     */
    class VulkanImageMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanImageMemoryAllocator>;

        // Constructors of GstVulkan.VulkanImageMemoryAllocator

        constructor(properties?: Partial<VulkanImageMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module VulkanInstance {
        // Signal callback interfaces

        interface CreateDevice {
            (): VulkanDevice;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            requested_api_major: number;
            requestedApiMajor: number;
            requested_api_minor: number;
            requestedApiMinor: number;
        }
    }

    class VulkanInstance extends Gst.Object {
        static $gtype: GObject.GType<VulkanInstance>;

        // Own properties of GstVulkan.VulkanInstance

        get requested_api_major(): number;
        set requested_api_major(val: number);
        get requestedApiMajor(): number;
        set requestedApiMajor(val: number);
        get requested_api_minor(): number;
        set requested_api_minor(val: number);
        get requestedApiMinor(): number;
        set requestedApiMinor(val: number);

        // Own fields of GstVulkan.VulkanInstance

        n_physical_devices: number;

        // Constructors of GstVulkan.VulkanInstance

        constructor(properties?: Partial<VulkanInstance.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VulkanInstance;

        // Own signals of GstVulkan.VulkanInstance

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'create-device', callback: (_source: this) => VulkanDevice): number;
        connect_after(signal: 'create-device', callback: (_source: this) => VulkanDevice): number;
        emit(signal: 'create-device'): void;

        // Own static methods of GstVulkan.VulkanInstance

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

        // Own methods of GstVulkan.VulkanInstance

        /**
         * Check if the configured vulkan instance supports the specified version.
         * Will not work prior to opening the instance with gst_vulkan_instance_open().
         * If a specific version is requested, the `patch` level is ignored.
         * @param major major version
         * @param minor minor version
         * @param patch patch version
         * @returns whether @instance is at least the requested version.
         */
        check_version(major: number, minor: number, patch: number): boolean;
        create_device(): VulkanDevice;
        /**
         * Disable an Vulkan extension by `name`.  Disabling an extension will only have
         * an effect before the call to gst_vulkan_instance_open().
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be disabled.
         */
        disable_extension(name: string): boolean;
        /**
         * Enable an Vulkan extension by `name`.  Extensions cannot be enabled until
         * gst_vulkan_instance_fill_info() has been called.  Enabling an extension will
         * only have an effect before the call to gst_vulkan_instance_open().
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be enabled.
         */
        enable_extension(name: string): boolean;
        /**
         * Enable an Vulkan layer by `name`.  Layer cannot be enabled until
         * gst_vulkan_instance_fill_info() has been called.  Enabling a layer will
         * only have an effect before the call to gst_vulkan_instance_open().
         * @param name layer name to enable
         * @returns whether the Vulkan layer could be enabled.
         */
        enable_layer(name: string): boolean;
        /**
         * Retrieve as much information about the available Vulkan instance without
         * actually creating an Vulkan instance.  Will not do anything while `instance`
         * is open.
         * @returns whether the instance information could be retrieved
         */
        fill_info(): boolean;
        /**
         * Retrieves information about an extension.
         *
         * Will not find any extensions before gst_vulkan_instance_fill_info() has been
         * called.
         * @param name the layer name to look for
         * @returns whether extension @name is available
         */
        get_extension_info(name: string): [boolean, number];
        /**
         * Retrieves information about a layer.
         *
         * Will not find any layers before gst_vulkan_instance_fill_info() has been
         * called.
         * @param name the layer name to look for
         * @returns whether layer @name is available
         */
        get_layer_info(name: string): [boolean, string, number, number];
        /**
         * Performs `vkGetInstanceProcAddr()` with `instance` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for @name or %NULL
         */
        get_proc_address(name: string): any | null;
        /**
         * Retrieve the vulkan instance configured version.  Only returns the supported
         * API version by the instance without taking into account the requested API
         * version.  This means gst_vulkan_instance_check_version() will return
         * different values if a specific version has been requested (which is the
         * default) than a version check that is performed manually by retrieving the
         * version with this function.
         */
        get_version(): [number, number, number];
        is_extension_enabled(name: string): boolean;
        is_layer_enabled(name: string): boolean;
        open(): boolean;
    }

    module VulkanMemoryAllocator {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Allocator.ConstructorProps {}
    }

    /**
     * Opaque #GstVulkanMemoryAllocator struct
     */
    class VulkanMemoryAllocator extends Gst.Allocator {
        static $gtype: GObject.GType<VulkanMemoryAllocator>;

        // Constructors of GstVulkan.VulkanMemoryAllocator

        constructor(properties?: Partial<VulkanMemoryAllocator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module VulkanPhysicalDevice {
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

        // Own properties of GstVulkan.VulkanPhysicalDevice

        get device_index(): number;
        get deviceIndex(): number;
        get instance(): VulkanInstance;
        get name(): string;

        // Own fields of GstVulkan.VulkanPhysicalDevice

        n_queue_families: number;

        // Constructors of GstVulkan.VulkanPhysicalDevice

        constructor(properties?: Partial<VulkanPhysicalDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;

        // Own static methods of GstVulkan.VulkanPhysicalDevice

        static type_to_string(type: Vulkan.PhysicalDeviceType): string;

        // Own methods of GstVulkan.VulkanPhysicalDevice

        /**
         * Retrieves information about a device extension.
         *
         * Will not find any extensions before gst_vulkan_instance_fill_info() has been
         * called.
         * @param name the extension name to look for
         * @returns whether extension @name is available
         */
        get_extension_info(name: string): [boolean, number];
        get_instance(): VulkanInstance;
        /**
         * Retrieves information about a layer.
         *
         * Will not find any layers before gst_vulkan_instance_fill_info() has been
         * called.
         * @param name the layer name to look for
         * @returns whether layer @name is available
         */
        get_layer_info(name: string): [boolean, string, number, number];
    }

    module VulkanQueue {
        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    class VulkanQueue extends Gst.Object {
        static $gtype: GObject.GType<VulkanQueue>;

        // Own fields of GstVulkan.VulkanQueue

        device: VulkanDevice;
        family: number;
        index: number;

        // Constructors of GstVulkan.VulkanQueue

        constructor(properties?: Partial<VulkanQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of GstVulkan.VulkanQueue

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

        // Own methods of GstVulkan.VulkanQueue

        create_command_pool(): VulkanCommandPool;
        get_device(): VulkanDevice | null;
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

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            force_aspect_ratio: boolean;
            forceAspectRatio: boolean;
            pixel_aspect_ratio: Gst.Fraction;
            pixelAspectRatio: Gst.Fraction;
        }
    }

    class VulkanSwapper extends Gst.Object {
        static $gtype: GObject.GType<VulkanSwapper>;

        // Own properties of GstVulkan.VulkanSwapper

        get force_aspect_ratio(): boolean;
        set force_aspect_ratio(val: boolean);
        get forceAspectRatio(): boolean;
        set forceAspectRatio(val: boolean);
        get pixel_aspect_ratio(): Gst.Fraction;
        set pixel_aspect_ratio(val: Gst.Fraction);
        get pixelAspectRatio(): Gst.Fraction;
        set pixelAspectRatio(val: Gst.Fraction);

        // Own fields of GstVulkan.VulkanSwapper

        device: VulkanDevice;
        window: VulkanWindow;
        queue: VulkanQueue;
        cmd_pool: VulkanCommandPool;

        // Constructors of GstVulkan.VulkanSwapper

        constructor(properties?: Partial<VulkanSwapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice, window: VulkanWindow): VulkanSwapper;

        // Own methods of GstVulkan.VulkanSwapper

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

    module VulkanTrashFenceList {
        // Constructor properties interface

        interface ConstructorProps extends VulkanTrashList.ConstructorProps {}
    }

    class VulkanTrashFenceList extends VulkanTrashList {
        static $gtype: GObject.GType<VulkanTrashFenceList>;

        // Constructors of GstVulkan.VulkanTrashFenceList

        constructor(properties?: Partial<VulkanTrashFenceList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VulkanTrashFenceList;
    }

    module VulkanTrashList {
        // Constructor properties interface

        interface ConstructorProps extends VulkanHandlePool.ConstructorProps {}
    }

    class VulkanTrashList extends VulkanHandlePool {
        static $gtype: GObject.GType<VulkanTrashList>;

        // Constructors of GstVulkan.VulkanTrashList

        constructor(properties?: Partial<VulkanTrashList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of GstVulkan.VulkanTrashList

        /**
         * the #GstVulkanTrashListAdd functions
         * @param trash the #GstVulkanTrash to add to @trash_list
         */
        vfunc_add_func(trash: VulkanTrash): boolean;
        /**
         * the #GstVulkanTrashListGC function
         */
        vfunc_gc_func(): void;
        /**
         * the #GstVulkanTrashListWait function
         * @param timeout the timeout in ns to wait
         */
        vfunc_wait_func(timeout: number): boolean;

        // Own methods of GstVulkan.VulkanTrashList

        acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
        // Conflicted with GstVulkan.VulkanHandlePool.acquire
        acquire(...args: never[]): any;
        add(trash: VulkanTrash): boolean;
        /**
         * Remove any stored #GstVulkanTrash objects that have had their associated
         * #GstVulkanFence signalled.
         */
        gc(): void;
        wait(timeout: number): boolean;
    }

    module VulkanVideoFilter {
        // Constructor properties interface

        interface ConstructorProps extends GstBase.BaseTransform.ConstructorProps {}
    }

    class VulkanVideoFilter extends GstBase.BaseTransform {
        static $gtype: GObject.GType<VulkanVideoFilter>;

        // Own fields of GstVulkan.VulkanVideoFilter

        instance: VulkanInstance;
        device: VulkanDevice;
        queue: VulkanQueue;

        // Constructors of GstVulkan.VulkanVideoFilter

        constructor(properties?: Partial<VulkanVideoFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
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

        // Own properties of GstVulkan.VulkanWindow

        get display(): VulkanDisplay;

        // Constructors of GstVulkan.VulkanWindow

        constructor(properties?: Partial<VulkanWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: VulkanDisplay): VulkanWindow;

        // Own signals of GstVulkan.VulkanWindow

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'close', callback: (_source: this) => boolean): number;
        connect_after(signal: 'close', callback: (_source: this) => boolean): number;
        emit(signal: 'close'): void;
        connect(signal: 'draw', callback: (_source: this) => void): number;
        connect_after(signal: 'draw', callback: (_source: this) => void): number;
        emit(signal: 'draw'): void;
        connect(signal: 'key-event', callback: (_source: this, id: string, key: string) => void): number;
        connect_after(signal: 'key-event', callback: (_source: this, id: string, key: string) => void): number;
        emit(signal: 'key-event', id: string, key: string): void;
        connect(
            signal: 'mouse-event',
            callback: (_source: this, id: string, button: number, x: number, y: number) => void,
        ): number;
        connect_after(
            signal: 'mouse-event',
            callback: (_source: this, id: string, button: number, x: number, y: number) => void,
        ): number;
        emit(signal: 'mouse-event', id: string, button: number, x: number, y: number): void;
        connect(signal: 'resize', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(signal: 'resize', callback: (_source: this, object: number, p0: number) => void): number;
        emit(signal: 'resize', object: number, p0: number): void;

        // Own virtual methods of GstVulkan.VulkanWindow

        /**
         * Attempt to close the window.
         */
        vfunc_close(): void;
        /**
         * retrieve whether this window supports presentation
         * @param device a #GstVulkanDevice
         * @param queue_family_idx the queue family
         */
        vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        /**
         * retrieve the current size of the window
         */
        vfunc_get_surface_dimensions(): [number, number];
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a #gboolean indicating if events should be handled or not.
         */
        vfunc_handle_events(handle_events: boolean): void;
        /**
         * open the connection to the display
         */
        vfunc_open(): boolean;
        /**
         * set the external window handle to render into
         * @param handle
         */
        vfunc_set_window_handle(handle: never): void;

        // Own methods of GstVulkan.VulkanWindow

        /**
         * Attempt to close the window.
         */
        close(): void;
        get_display(): VulkanDisplay;
        get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        get_surface_dimensions(): [number, number];
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

        // Constructors of GstVulkan.VulkanBarrierBufferInfo

        _init(...args: any[]): void;
    }

    class VulkanBarrierImageInfo {
        static $gtype: GObject.GType<VulkanBarrierImageInfo>;

        // Constructors of GstVulkan.VulkanBarrierImageInfo

        _init(...args: any[]): void;
    }

    class VulkanBarrierMemoryInfo {
        static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;

        // Own fields of GstVulkan.VulkanBarrierMemoryInfo

        type: VulkanBarrierType;
        flags: VulkanBarrierFlags;
        queue: VulkanQueue;

        // Constructors of GstVulkan.VulkanBarrierMemoryInfo

        _init(...args: any[]): void;
    }

    class VulkanBufferMemory {
        static $gtype: GObject.GType<VulkanBufferMemory>;

        // Own fields of GstVulkan.VulkanBufferMemory

        device: VulkanDevice;

        // Constructors of GstVulkan.VulkanBufferMemory

        _init(...args: any[]): void;

        // Own static methods of GstVulkan.VulkanBufferMemory

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
         * @param buffer a `VkBuffer`
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

    type VulkanBufferMemoryAllocatorClass = typeof VulkanBufferMemoryAllocator;
    type VulkanBufferPoolClass = typeof VulkanBufferPool;
    abstract class VulkanBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanBufferPoolPrivate>;

        // Constructors of GstVulkan.VulkanBufferPoolPrivate

        _init(...args: any[]): void;
    }

    class VulkanCommandBuffer {
        static $gtype: GObject.GType<VulkanCommandBuffer>;

        // Own fields of GstVulkan.VulkanCommandBuffer

        pool: VulkanCommandPool;

        // Constructors of GstVulkan.VulkanCommandBuffer

        constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);
        _init(...args: any[]): void;

        static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
    }

    type VulkanCommandPoolClass = typeof VulkanCommandPool;
    abstract class VulkanCommandPoolPrivate {
        static $gtype: GObject.GType<VulkanCommandPoolPrivate>;

        // Constructors of GstVulkan.VulkanCommandPoolPrivate

        _init(...args: any[]): void;
    }

    type VulkanDescriptorCacheClass = typeof VulkanDescriptorCache;
    abstract class VulkanDescriptorCachePrivate {
        static $gtype: GObject.GType<VulkanDescriptorCachePrivate>;

        // Constructors of GstVulkan.VulkanDescriptorCachePrivate

        _init(...args: any[]): void;
    }

    type VulkanDescriptorPoolClass = typeof VulkanDescriptorPool;
    abstract class VulkanDescriptorPoolPrivate {
        static $gtype: GObject.GType<VulkanDescriptorPoolPrivate>;

        // Constructors of GstVulkan.VulkanDescriptorPoolPrivate

        _init(...args: any[]): void;
    }

    class VulkanDescriptorSet {
        static $gtype: GObject.GType<VulkanDescriptorSet>;

        // Own fields of GstVulkan.VulkanDescriptorSet

        pool: VulkanDescriptorPool;
        cache: VulkanDescriptorCache;
        n_layouts: number;

        // Constructors of GstVulkan.VulkanDescriptorSet

        constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, layouts: VulkanHandle[]);
        _init(...args: any[]): void;

        static new_wrapped(
            pool: VulkanDescriptorPool,
            set: Vulkan.DescriptorSet,
            layouts: VulkanHandle[],
        ): VulkanDescriptorSet;
    }

    type VulkanDeviceClass = typeof VulkanDevice;
    abstract class VulkanDevicePrivate {
        static $gtype: GObject.GType<VulkanDevicePrivate>;

        // Constructors of GstVulkan.VulkanDevicePrivate

        _init(...args: any[]): void;
    }

    type VulkanDisplayClass = typeof VulkanDisplay;
    abstract class VulkanDisplayPrivate {
        static $gtype: GObject.GType<VulkanDisplayPrivate>;

        // Constructors of GstVulkan.VulkanDisplayPrivate

        _init(...args: any[]): void;
    }

    class VulkanFence {
        static $gtype: GObject.GType<VulkanFence>;

        // Own fields of GstVulkan.VulkanFence

        device: VulkanDevice;
        cache: VulkanFenceCache;

        // Constructors of GstVulkan.VulkanFence

        constructor(device: VulkanDevice);
        _init(...args: any[]): void;

        static ['new'](device: VulkanDevice): VulkanFence;

        static new_always_signalled(device: VulkanDevice): VulkanFence;

        // Own methods of GstVulkan.VulkanFence

        is_signaled(): boolean;
        reset(): void;
    }

    type VulkanFenceCacheClass = typeof VulkanFenceCache;
    class VulkanFormatInfo {
        static $gtype: GObject.GType<VulkanFormatInfo>;

        // Own fields of GstVulkan.VulkanFormatInfo

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

        // Constructors of GstVulkan.VulkanFormatInfo

        _init(...args: any[]): void;
    }

    type VulkanFullScreenQuadClass = typeof VulkanFullScreenQuad;
    abstract class VulkanFullScreenQuadPrivate {
        static $gtype: GObject.GType<VulkanFullScreenQuadPrivate>;

        // Constructors of GstVulkan.VulkanFullScreenQuadPrivate

        _init(...args: any[]): void;
    }

    /**
     * Holds information about a vulkan non dispatchable handle that only has
     * a vulkan device as a parent and no specific host synchronisation
     * requirements.  Command buffers have extra requirements that are serviced by
     * more specific implementations (#GstVulkanCommandBuffer, #GstVulkanCommandPool).
     */
    class VulkanHandle {
        static $gtype: GObject.GType<VulkanHandle>;

        // Own fields of GstVulkan.VulkanHandle

        device: VulkanDevice;
        type: VulkanHandleType;
        handle: VulkanHandleTypedef;
        notify: VulkanHandleDestroyNotify;
        user_data: any;

        // Constructors of GstVulkan.VulkanHandle

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

        // Own static methods of GstVulkan.VulkanHandle

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

        // Own methods of GstVulkan.VulkanHandle

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
    type VulkanImageBufferPoolClass = typeof VulkanImageBufferPool;
    abstract class VulkanImageBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanImageBufferPoolPrivate>;

        // Constructors of GstVulkan.VulkanImageBufferPoolPrivate

        _init(...args: any[]): void;
    }

    class VulkanImageMemory {
        static $gtype: GObject.GType<VulkanImageMemory>;

        // Own fields of GstVulkan.VulkanImageMemory

        device: VulkanDevice;

        // Constructors of GstVulkan.VulkanImageMemory

        _init(...args: any[]): void;

        // Own static methods of GstVulkan.VulkanImageMemory

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

        // Own methods of GstVulkan.VulkanImageMemory

        add_view(view: VulkanImageView): void;
        find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView | null;
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

        // Own fields of GstVulkan.VulkanImageView

        device: VulkanDevice;

        // Constructors of GstVulkan.VulkanImageView

        constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);
        _init(...args: any[]): void;

        static ['new'](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
    }

    type VulkanInstanceClass = typeof VulkanInstance;
    abstract class VulkanInstancePrivate {
        static $gtype: GObject.GType<VulkanInstancePrivate>;

        // Constructors of GstVulkan.VulkanInstancePrivate

        _init(...args: any[]): void;
    }

    class VulkanMemory {
        static $gtype: GObject.GType<VulkanMemory>;

        // Own fields of GstVulkan.VulkanMemory

        device: VulkanDevice;
        map_count: number;

        // Constructors of GstVulkan.VulkanMemory

        _init(...args: any[]): void;

        // Own static methods of GstVulkan.VulkanMemory

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

        // Constructors of GstVulkan.VulkanPhysicalDevicePrivate

        _init(...args: any[]): void;
    }

    type VulkanQueueClass = typeof VulkanQueue;
    abstract class VulkanQueuePrivate {
        static $gtype: GObject.GType<VulkanQueuePrivate>;

        // Constructors of GstVulkan.VulkanQueuePrivate

        _init(...args: any[]): void;
    }

    type VulkanSwapperClass = typeof VulkanSwapper;
    abstract class VulkanSwapperPrivate {
        static $gtype: GObject.GType<VulkanSwapperPrivate>;

        // Constructors of GstVulkan.VulkanSwapperPrivate

        _init(...args: any[]): void;
    }

    class VulkanTrash {
        static $gtype: GObject.GType<VulkanTrash>;

        // Own fields of GstVulkan.VulkanTrash

        cache: VulkanTrashList;
        notify: VulkanTrashNotify;
        user_data: any;

        // Constructors of GstVulkan.VulkanTrash

        constructor(fence: VulkanFence);
        _init(...args: any[]): void;

        static ['new'](fence: VulkanFence): VulkanTrash;

        static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

        // Own static methods of GstVulkan.VulkanTrash

        /**
         * A #GstVulkanTrashNotify implementation for unreffing a #GstMiniObject when the
         * associated #GstVulkanFence is signalled
         * @param device the #GstVulkanDevice
         * @param user_data the #GstMiniObject
         */
        static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
        /**
         * A #GstVulkanTrashNotify implementation for unreffing a #GstObject when the
         * associated #GstVulkanFence is signalled
         * @param device the #GstVulkanDevice
         * @param user_data the #GstMiniObject
         */
        static object_unref(device: VulkanDevice, user_data?: any | null): void;
    }

    type VulkanTrashFenceListClass = typeof VulkanTrashFenceList;
    type VulkanTrashListClass = typeof VulkanTrashList;
    type VulkanVideoFilterClass = typeof VulkanVideoFilter;
    type VulkanWindowClass = typeof VulkanWindow;
    abstract class VulkanWindowPrivate {
        static $gtype: GObject.GType<VulkanWindowPrivate>;

        // Constructors of GstVulkan.VulkanWindowPrivate

        _init(...args: any[]): void;
    }

    type VulkanHandleTypedef = number;
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
