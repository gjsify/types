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

    /**
     * @gir-type Enum
     */
    export namespace VulkanBarrierFlags {
        export const $gtype: GObject.GType<VulkanBarrierFlags>;
    }

    /**
     * @gir-type Enum
     * @since 1.18
     */
    enum VulkanBarrierFlags {
        NONE,
    }

    /**
     * @gir-type Enum
     */
    export namespace VulkanBarrierType {
        export const $gtype: GObject.GType<VulkanBarrierType>;
    }

    /**
     * @gir-type Enum
     * @since 1.18
     */
    enum VulkanBarrierType {
        /**
         * no barrier type
         */
        NONE,
        TYPE_MEMORY,
        TYPE_BUFFER,
        TYPE_IMAGE,
    }

    /**
     * @gir-type Struct
     */
    class VulkanError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * undetermined error
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
        /**
         * if `result` indicates an error condition, fills out {@link GLib.Error} with details of
         * the error
         * @param result a VkResult
         * @param format the printf-like format to write into the {@link GLib.Error}
         * @param ___ arguments for `format`
         */
        static to_g_error(result: Vulkan.Result, format: string, ___: any[]): [Vulkan.Result, GLib.Error | null];
    }

    /**
     * @gir-type Enum
     */
    export namespace VulkanFormatScaling {
        export const $gtype: GObject.GType<VulkanFormatScaling>;
    }

    /**
     * @gir-type Enum
     * @since 1.18
     */
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

    /**
     * @gir-type Enum
     */
    export namespace VulkanHandleType {
        export const $gtype: GObject.GType<VulkanHandleType>;
    }

    /**
     * @gir-type Enum
     * @since 1.18
     */
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
        /**
         * video session
         */
        VIDEO_SESSION,
        /**
         * video session parameters
         */
        VIDEO_SESSION_PARAMETERS,
        /**
         * sampler with YCBCR conversion
         */
        SAMPLER_YCBCR_CONVERSION,
    }

    /**
     * @gir-type Struct
     */
    class VulkanWindowError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

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

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @since 1.18
     */
    const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string;
    /**
     * @since 1.18
     */
    const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string;
    /**
     * @since 1.18
     */
    const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string;
    /**
     * @since 1.18
     */
    const VULKAN_DEVICE_CONTEXT_TYPE_STR: string;
    /**
     * @since 1.18
     */
    const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string;
    /**
     * @since 1.18
     */
    const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string;
    /**
     * @since 1.18
     */
    const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string;
    /**
     * @since 1.18
     */
    const VULKAN_MAX_COMPONENTS: number;
    /**
     * @since 1.18
     */
    const VULKAN_MEMORY_ALLOCATOR_NAME: string;
    /**
     * @since 1.18
     */
    const VULKAN_QUEUE_CONTEXT_TYPE_STR: string;
    /**
     * @since 1.18
     */
    const VULKAN_SWAPPER_VIDEO_FORMATS: string;
    /**
     * @param context a {@link Gst.Context}
     * @returns Whether `device` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_device(context: Gst.Context): [boolean, VulkanDevice | null];
    /**
     * @param context a {@link Gst.Context}
     * @returns Whether `display` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_display(context: Gst.Context): [boolean, VulkanDisplay | null];
    /**
     * @param context a {@link Gst.Context}
     * @returns Whether `instance` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_instance(context: Gst.Context): [boolean, VulkanInstance | null];
    /**
     * @param context a {@link Gst.Context}
     * @returns Whether `queue` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_queue(context: Gst.Context): [boolean, VulkanQueue | null];
    /**
     * Sets `device` on `context`
     * @param context a {@link Gst.Context}
     * @param device a {@link GstVulkan.VulkanDevice}
     * @since 1.18
     */
    function context_set_vulkan_device(context: Gst.Context, device?: VulkanDevice | null): void;
    /**
     * Sets `display` on `context`
     * @param context a {@link Gst.Context}
     * @param display a {@link GstVulkan.VulkanDisplay}
     * @since 1.18
     */
    function context_set_vulkan_display(context: Gst.Context, display?: VulkanDisplay | null): void;
    /**
     * Sets `instance` on `context`
     * @param context a {@link Gst.Context}
     * @param instance a {@link GstVulkan.VulkanInstance}
     * @since 1.18
     */
    function context_set_vulkan_instance(context: Gst.Context, instance?: VulkanInstance | null): void;
    /**
     * Sets `queue` on `context`
     * @param context a {@link Gst.Context}
     * @param queue a {@link GstVulkan.VulkanQueue}
     * @since 1.18
     */
    function context_set_vulkan_queue(context: Gst.Context, queue?: VulkanQueue | null): void;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstVulkan.VulkanBufferMemory}
     * @since 1.18
     */
    function is_vulkan_buffer_memory(mem: Gst.Memory): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstVulkan.VulkanImageMemory}
     * @since 1.18
     */
    function is_vulkan_image_memory(mem: Gst.Memory): boolean;
    /**
     * @param mem a {@link Gst.Memory}
     * @returns whether the memory at `mem` is a {@link GstVulkan.VulkanMemory}
     * @since 1.18
     */
    function is_vulkan_memory(mem: Gst.Memory): boolean;
    /**
     * Allocate a new {@link GstVulkan.VulkanBufferMemory}.
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param size size of the new buffer
     * @param usage buffer usage flags
     * @param mem_prop_flags memory properties flags for the backing memory
     * @returns a {@link Gst.Memory} object backed by a vulkan buffer          backed by vulkan device memory
     * @since 1.18
     */
    function vulkan_buffer_memory_alloc(
        device: VulkanDevice,
        size: number,
        usage: Vulkan.BufferUsageFlags,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    /**
     * Allocate a new {@link GstVulkan.VulkanBufferMemory}.
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param buffer_info the VkBufferCreateInfo structure
     * @param mem_prop_flags memory properties flags for the backing memory
     * @returns a {@link Gst.Memory} object backed by a vulkan buffer          backed by vulkan device memory
     * @since 1.24
     */
    function vulkan_buffer_memory_alloc_with_buffer_info(
        device: VulkanDevice,
        buffer_info: Vulkan.BufferCreateInfo,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    /**
     * Initializes the Vulkan buffer memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other {@link GstVulkan.VulkanBufferMemory} operation.
     * @since 1.18
     */
    function vulkan_buffer_memory_init_once(): void;
    /**
     * Allocated a new wrapped {@link GstVulkan.VulkanBufferMemory} with `buffer`.
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param buffer a {@link Vulkan.Buffer}
     * @param usage usage flags of `buffer`
     * @param user_data user data to call `notify` with
     * @param notify a {@link GLib.DestroyNotify} called when `buffer` is no longer in use
     * @returns a {@link Gst.Memory} object backed by a vulkan device memory
     * @since 1.18
     */
    function vulkan_buffer_memory_wrapped(
        device: VulkanDevice,
        buffer: Vulkan.Buffer,
        usage: Vulkan.BufferUsageFlags,
        user_data?: any | null,
        notify?: GLib.DestroyNotify | null,
    ): Gst.Memory;
    /**
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param code the SPIR-V shader byte code
     * @param size length of `code`.  Must be a multiple of 4
     * @returns a {@link GstVulkan.VulkanHandle} for `image` matching the                           original layout and format of `image` or `null`
     * @since 1.18
     */
    function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle;
    /**
     * @param type a {@link GstVulkan.VulkanDisplayType}
     * @returns the Vulkan extension string required for creating a                      VkSurfaceKHR using a window system handle or `null`
     * @since 1.18
     */
    function vulkan_display_type_to_extension_string(type: VulkanDisplayType | null): string | null;
    /**
     * Perform the steps necessary for retrieving a {@link GstVulkan.VulkanInstance} and
     * (optionally) an {@link GstVulkan.VulkanDisplay} from the surrounding elements or from
     * the application using the {@link Gst.Context} mechanism.
     *
     * If the contents of `display_ptr` or `instance_ptr` are not `null`, then no
     * {@link Gst.Context} query is necessary and no {@link GstVulkan.VulkanInstance} or {@link GstVulkan.VulkanDisplay}
     * retrieval is performed.
     * @param element a {@link Gst.Element}
     * @param display_ptr the resulting {@link GstVulkan.VulkanDisplay}
     * @param instance_ptr the resulting {@link GstVulkan.VulkanInstance}
     * @returns whether a {@link GstVulkan.VulkanInstance} exists in `instance_ptr` and if          `display_ptr` is not `null`, whether a {@link GstVulkan.VulkanDisplay} exists in          `display_ptr`
     * @since 1.18
     */
    function vulkan_ensure_element_data(
        element: Gst.Element,
        display_ptr: VulkanDisplay | null,
        instance_ptr: VulkanInstance,
    ): [boolean, VulkanDisplay | null, VulkanInstance];
    /**
     * Perform the steps necessary for retrieving a {@link GstVulkan.VulkanDevice} from
     * the surrounding elements or create a new device according to the device_id.
     *
     * If the contents of `device_ptr` is not `null`, then no
     * {@link Gst.Context} query is necessary and no {@link GstVulkan.VulkanDevice}
     * retrieval is performed.
     * @param element a {@link Gst.Element}
     * @param instance the {@link GstVulkan.VulkanInstance}
     * @param device_ptr the resulting {@link GstVulkan.VulkanDevice}
     * @param device_id The device number to use, 0 is default.
     * @returns whether a {@link GstVulkan.VulkanDevice} exists in `device_ptr`
     * @since 1.26
     */
    function vulkan_ensure_element_device(
        element: Gst.Element,
        instance: VulkanInstance,
        device_ptr: VulkanDevice | null,
        device_id: number,
    ): [boolean, VulkanDevice | null];
    /**
     * @since 1.18
     */
    function vulkan_error_quark(): GLib.Quark;
    /**
     * @param format Vulkan Format
     * @returns the `format` aspect
     * @since 1.24
     */
    function vulkan_format_get_aspect(format: Vulkan.Format): number;
    /**
     * @param format a valid {@link Vulkan.Format}
     * @returns the {@link GstVulkan.VulkanFormatInfo} for `format` or `null`
     * @since 1.18
     */
    function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo | null;
    /**
     * @param vk_format the Vulkan format to convert
     * @returns the {@link GstVideo.VideoFormat} that maps to `vk_format`
     * @since 1.24
     */
    function vulkan_format_to_video_format(vk_format: Vulkan.Format): GstVideo.VideoFormat;
    /**
     * @param image a {@link GstVulkan.VulkanImageMemory}
     * @returns a {@link GstVulkan.VulkanImageView} for `image` matching the                           original layout and format of `image`
     * @since 1.18
     */
    function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView;
    /**
     * Create a new {@link GstVulkan.VulkanImageView} with a specific `create_info`.
     * @param image a {@link GstVulkan.VulkanImageMemory}
     * @param create_info a VkImageViewCreateInfo
     * @returns a {@link GstVulkan.VulkanImageView} for `image` matching the                           original layout and format of `image`
     * @since 1.24
     */
    function vulkan_get_or_create_image_view_with_info(
        image: VulkanImageMemory,
        create_info?: Vulkan.ImageViewCreateInfo | null,
    ): VulkanImageView;
    /**
     * Performs the steps necessary for executing a context query including
     * posting a message for the application to respond.
     * @param element a {@link Gst.Element}
     * @param context_type the context type to query for
     * @since 1.18
     */
    function vulkan_global_context_query(element: Gst.Element, context_type: string): void;
    /**
     * @param element a {@link Gst.Element}
     * @param query a {@link Gst.Query} of type {@link Gst.QueryType.CONTEXT}
     * @param display a {@link GstVulkan.VulkanDisplay}
     * @param instance a {@link GstVulkan.VulkanInstance}
     * @param device a {@link GstVulkan.VulkanDevice}
     * @returns Whether the `query` was successfully responded to from the passed          `display`, `instance`, and `device`.
     * @since 1.18
     */
    function vulkan_handle_context_query(
        element: Gst.Element,
        query: Gst.Query,
        display?: VulkanDisplay | null,
        instance?: VulkanInstance | null,
        device?: VulkanDevice | null,
    ): boolean;
    /**
     * Helper function for implementing {@link Gst.ElementClass}.set_context() in
     * Vulkan capable elements.
     *
     * Retrieve's the {@link GstVulkan.VulkanDisplay} or {@link GstVulkan.VulkanInstance} in `context` and places
     * the result in `display` or `instance` respectively.
     * @param element a {@link Gst.Element}
     * @param context a {@link Gst.Context}
     * @param display location of a {@link GstVulkan.VulkanDisplay}
     * @param instance location of a {@link GstVulkan.VulkanInstance}
     * @returns whether the `display` or `instance` could be set successfully
     * @since 1.18
     */
    function vulkan_handle_set_context(
        element: Gst.Element,
        context: Gst.Context,
        display: VulkanDisplay | null,
        instance: VulkanInstance,
    ): [boolean, VulkanDisplay | null, VulkanInstance];
    /**
     * Allocated a new {@link GstVulkan.VulkanImageMemory}.
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param format the VkFormat for the new image
     * @param width width for the new image
     * @param height height for the new image
     * @param tiling tiling for the new image
     * @param usage usage flags for the new image
     * @param mem_prop_flags VkDeviceMemory property flags for the new image
     * @returns a {@link Gst.Memory} object backed by a vulkan device memory
     * @since 1.18
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
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param image_info VkImageCreateInfo structure
     * @param mem_prop_flags VkMemoryPropertyFlags flags
     * @returns a {@link Gst.Memory} object backed by a vulkan device memory
     * @since 1.24
     */
    function vulkan_image_memory_alloc_with_image_info(
        device: VulkanDevice,
        image_info: Vulkan.ImageCreateInfo,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    /**
     * Initializes the Vulkan image memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other {@link GstVulkan.VulkanImageMemory} operation.
     * @since 1.18
     */
    function vulkan_image_memory_init_once(): void;
    /**
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param image a VkImage
     * @param format the VkFormat for `image`
     * @param width width of `image`
     * @param height height of `image`
     * @param tiling tiling of `image`
     * @param usage usage flags of `image`
     * @param user_data user data for `notify`
     * @returns a new {@link GstVulkan.VulkanImageMemory} wrapping `image`
     * @since 1.18
     */
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
     * @param element a {@link Gst.Element}
     * @param context_type the context type to query for
     * @since 1.18
     */
    function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query;
    /**
     * Allocated a new {@link GstVulkan.VulkanMemory}.
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param memory_type_index the Vulkan memory type index
     * @param params a {@link Gst.AllocationParams}
     * @param size the size to allocate
     * @param mem_prop_flags
     * @returns a {@link Gst.Memory} object backed by a vulkan device memory
     * @since 1.18
     */
    function vulkan_memory_alloc(
        device: VulkanDevice,
        memory_type_index: number,
        params: Gst.AllocationParams,
        size: number,
        mem_prop_flags: Vulkan.MemoryPropertyFlags,
    ): Gst.Memory;
    /**
     * @param device a {@link GstVulkan.VulkanDevice}
     * @param req memory requirements to look for
     * @param properties memory properties to search for
     * @returns whether a valid memory type could be found
     * @since 1.24
     */
    function vulkan_memory_find_memory_type_index_with_requirements(
        device: VulkanDevice,
        req: Vulkan.MemoryRequirements,
        properties: Vulkan.MemoryPropertyFlags,
    ): [boolean, number];
    /**
     * @param prop_bits
     * @since 1.18
     */
    function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
    /**
     * Initializes the Vulkan memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other {@link GstVulkan.VulkanMemory} operation.
     * @since 1.18
     */
    function vulkan_memory_init_once(): void;
    /**
     * @param prop_bits
     * @since 1.18
     */
    function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
    /**
     * @param present_mode a {@link Vulkan.PresentModeKHR}
     * @returns name of `present_mode`
     * @since 1.20
     */
    function vulkan_present_mode_to_string(present_mode: Vulkan.PresentModeKHR): string;
    /**
     * @param element a {@link Gst.Element}
     * @param query the {@link Gst.Query} to perform
     * @param direction the {@link Gst.PadDirection} to perform query on
     * @returns whether `query` was answered successfully
     * @since 1.18
     */
    function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection | null): boolean;
    /**
     * @param sample_count_bits
     * @since 1.18
     */
    function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
    /**
     * A {@link GstVulkan.VulkanTrashNotify} implementation for unreffing a {@link Gst.MiniObject} when the
     * associated {@link GstVulkan.VulkanFence} is signalled
     * @param device the {@link GstVulkan.VulkanDevice}
     * @param user_data the {@link Gst.MiniObject}
     * @since 1.18
     */
    function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
    /**
     * A {@link GstVulkan.VulkanTrashNotify} implementation for unreffing a {@link Gst.Object} when the
     * associated {@link GstVulkan.VulkanFence} is signalled
     * @param device the {@link GstVulkan.VulkanDevice}
     * @param user_data the {@link Gst.MiniObject}
     * @since 1.18
     */
    function vulkan_trash_object_unref(device: VulkanDevice, user_data?: any | null): void;
    /**
     * @since 1.18
     */
    function vulkan_window_error_quark(): GLib.Quark;
    /**
     * @gir-type Callback
     */
    interface VulkanDeviceForEachQueueFunc {
        (device: VulkanDevice, queue: VulkanQueue): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface VulkanHandleDestroyNotify {
        (handle: VulkanHandle): void;
    }
    /**
     * @gir-type Callback
     */
    interface VulkanImageMemoryFindViewFunc {
        (view: VulkanImageView): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface VulkanTrashListAdd {
        (trash_list: VulkanTrashList, trash: VulkanTrash): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface VulkanTrashListGC {
        (trash_list: VulkanTrashList): void;
    }
    /**
     * @gir-type Callback
     */
    interface VulkanTrashListWait {
        (trash_list: VulkanTrashList, timeout: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface VulkanTrashNotify {
        (device: VulkanDevice): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace VulkanDisplayType {
        export const $gtype: GObject.GType<VulkanDisplayType>;
    }

    /**
     * @gir-type Flags
     * @since 1.18
     */
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

    /**
     * @gir-type Flags
     */
    export namespace VulkanFormatFlags {
        export const $gtype: GObject.GType<VulkanFormatFlags>;
    }

    /**
     * @gir-type Flags
     * @since 1.18
     */
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
         * data is stored complex and cannot be read/write only using the information in the {@link GstVulkan.VulkanFormatInfo}
         */
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
     * Opaque {@link GstVulkan.VulkanBufferMemoryAllocator} struct
     * @gir-type Class
     * @since 1.18
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

        /** @signal */
        connect<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanBufferMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
     * Opaque {@link GstVulkan.VulkanBufferPool} struct
     * @gir-type Class
     * @since 1.18
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

        /** @signal */
        connect<K extends keyof VulkanBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanBufferPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Sets the `usage` of the buffers to setup.
         * @param config the {@link Gst.Structure} with the pool's configuration.
         * @param usage The Vulkan buffer usage flags.
         * @param mem_properties
         */
        static config_set_allocation_params(
            config: Gst.Structure,
            usage: Vulkan.BufferUsageFlags,
            mem_properties: Vulkan.MemoryPropertyFlags,
        ): void;
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanCommandPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanCommandPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanCommandPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanCommandPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanCommandPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanCommandPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns a new or recycled primary {@link GstVulkan.VulkanCommandBuffer}
         */
        create(): VulkanCommandBuffer;
        /**
         * @returns the parent {@link GstVulkan.VulkanQueue} for this command pool
         */
        get_queue(): VulkanQueue;
        /**
         * This should be called to ensure no other thread will attempt to access
         * the pool's internal resources.  Any modification of any of the allocated
         * {@link GstVulkan.VulkanCommandBuffer}'s need to be encapsulated in a
         * `gst_vulkan_command_pool_lock()`/gst_vulkan_command_pool_unlock() pair to meet
         * the Vulkan API requirements that host access to the command pool is
         * externally synchronised.
         */
        lock(): void;
        /**
         * See the documentation for `gst_vulkan_command_pool_lock()` for when you would
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        static ['new'](pool: VulkanDescriptorPool, layouts: VulkanHandle[]): VulkanDescriptorCache;

        // Signals

        /** @signal */
        connect<K extends keyof VulkanDescriptorCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanDescriptorCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanDescriptorCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDescriptorCache.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns a new {@link GstVulkan.VulkanDescriptorSet}
         */
        acquire(): VulkanDescriptorSet;
        /**
         * @param args
         */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanDescriptorPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanDescriptorPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDescriptorPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanDescriptorPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDescriptorPool.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param layouts list of {@link GstVulkan.VulkanHandle} containing                                     descriptor set layouts
         * @returns a new {@link GstVulkan.VulkanDescriptorSet}
         */
        create(layouts: VulkanHandle[]): VulkanDescriptorSet;
        /**
         * @returns the parent {@link GstVulkan.VulkanDevice} for this descriptor pool
         */
        get_device(): VulkanDevice;
        /**
         * @returns the maximum number of sets allocatable from `pool`
         */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
    class VulkanDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanDevice>;

        // Properties

        /**
         * @read-only
         */
        get instance(): VulkanInstance;
        /**
         * @construct-only
         */
        get physical_device(): VulkanPhysicalDevice;
        /**
         * @construct-only
         */
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

        /** @signal */
        connect<K extends keyof VulkanDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * If a {@link GstVulkan.VulkanDevice} is requested in `query`, sets `device` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a {@link GstVulkan.VulkanDevice}.
         * @param element a {@link Gst.Element}
         * @param query a {@link Gst.Query} of type #GST_QUERY_CONTEXT
         * @param device the {@link GstVulkan.VulkanDevice}
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean;
        /**
         * Attempt to retrieve a {@link GstVulkan.VulkanDevice} using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a {@link Gst.Element}
         * @param device a {@link GstVulkan.VulkanDevice}
         */
        static run_context_query(element: Gst.Element, device: VulkanDevice): [boolean, VulkanDevice];

        // Methods

        /**
         * @returns a new {@link GstVulkan.VulkanFence} or `null`
         */
        create_fence(): VulkanFence | null;
        /**
         * Disable an Vulkan extension by `name`.  Disabling an extension will only have
         * an effect before the call to `gst_vulkan_device_open()`.
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be disabled.
         */
        disable_extension(name: string): boolean;
        /**
         * Enable an Vulkan extension by `name`.  Enabling an extension will
         * only have an effect before the call to `gst_vulkan_device_open()`.
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be enabled.
         */
        enable_extension(name: string): boolean;
        /**
         * Enable an Vulkan layer by `name`.  Enabling a layer will
         * only have an effect before the call to `gst_vulkan_device_open()`.
         * @param name layer name to enable
         * @returns whether the Vulkan layer could be enabled.
         */
        enable_layer(name: string): boolean;
        /**
         * Iterate over each queue family available on {@link GstVulkan.VulkanDevice}
         * @param func a {@link GstVulkan.VulkanDeviceForEachQueueFunc}    to run for each {@link GstVulkan.VulkanQueue}
         */
        foreach_queue(func: VulkanDeviceForEachQueueFunc): void;
        /**
         * @returns the {@link GstVulkan.VulkanInstance} used to create this `device`
         */
        get_instance(): VulkanInstance | null;
        /**
         * Performs `vkGetDeviceProcAddr()` with `device` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for `name` or `null`
         */
        get_proc_address(name: string): any | null;
        /**
         * @param queue_family a queue family to retrieve
         * @param queue_i index of the family to retrieve
         * @returns a new {@link GstVulkan.VulkanQueue}
         */
        get_queue(queue_family: number, queue_i: number): VulkanQueue;
        /**
         * @param name extension name
         * @returns whether extension `name` is enabled
         */
        is_extension_enabled(name: string): boolean;
        /**
         * @param name layer name
         * @returns whether layer `name` is enabled
         */
        is_layer_enabled(name: string): boolean;
        /**
         * Attempts to create the internal {@link Vulkan.Device} object.
         * @returns whether a vulkan device could be created
         */
        open(): boolean;
        /**
         * @returns An array with the family     indexes of the created queues in `device`
         */
        queue_family_indices(): number[];
        /**
         * Select a compatible queue from the `device` supporting the `expected_flags`.
         * @param expected_flags a VkQueueFlagBits
         * @returns a {@link GstVulkan.VulkanQueue} for `queue` matching                                      the `expected_flags`
         */
        select_queue(expected_flags: Vulkan.QueueFlagBits): VulkanQueue | null;
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
     * The contents of a {@link GstVulkan.VulkanDisplay} are private and should only be accessed
     * through the provided API
     * @gir-type Class
     * @since 1.18
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

        /** @signal */
        connect<K extends keyof VulkanDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDisplay.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanDisplay.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanDisplay.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanDisplay.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * This function will read the `GST_VULKAN_WINDOW` environment variable for
         * a user choice or choose the first supported implementation.
         *
         * `gst_vulkan_instance_fill_info()` must have been called prior to this function.
         * @param instance a {@link GstVulkan.VulkanInstance}
         */
        static choose_type(instance: VulkanInstance): VulkanDisplayType;
        /**
         * If a {@link GstVulkan.VulkanDisplay} is requested in `query`, sets `device` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a {@link GstVulkan.VulkanDisplay}.
         * @param element a {@link Gst.Element}
         * @param query a {@link Gst.Query} of type #GST_QUERY_CONTEXT
         * @param display the {@link GstVulkan.VulkanDisplay}
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, display?: VulkanDisplay | null): boolean;
        /**
         * Attempt to retrieve a {@link GstVulkan.VulkanDisplay} using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a {@link Gst.Element}
         * @param display a {@link GstVulkan.VulkanDisplay}
         */
        static run_context_query(element: Gst.Element, display: VulkanDisplay): [boolean, VulkanDisplay];

        // Virtual methods

        /**
         * create a window
         * @virtual
         */
        vfunc_create_window(): VulkanWindow | null;
        /**
         * get the native handle to the display
         * @virtual
         */
        vfunc_get_handle(): any | null;

        // Methods

        /**
         * @returns a new {@link GstVulkan.VulkanWindow} for `display` or                                      `null`.
         */
        create_window(): VulkanWindow | null;
        /**
         * Execute `compare_func` over the list of windows stored by `display`.  The
         * first argument to `compare_func` is the {@link GstVulkan.VulkanWindow} being checked and the
         * second argument is `data`.
         * @param data some data to pass to `compare_func`
         * @param compare_func a comparison function to run
         * @returns The first {@link GstVulkan.VulkanWindow} that                                      `compare_func` matches, or `null`
         */
        find_window(data: any | null, compare_func: GLib.CompareFunc): VulkanWindow | null;
        /**
         * @returns the winsys specific handle of `display`
         */
        get_handle(): any | null;
        /**
         * @returns the {@link GstVulkan.VulkanDisplayType} of `display`
         */
        get_handle_type(): VulkanDisplayType;
        /**
         * @param window the {@link GstVulkan.VulkanWindow} to remove
         * @returns whether the window was successfully removed
         */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanFenceCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFenceCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanFenceCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFenceCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanFullScreenQuad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFullScreenQuad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanFullScreenQuad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanFullScreenQuad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanFullScreenQuad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanFullScreenQuad.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Helper function for creation and submission of a command buffer that draws
         * a full screen quad.  If you need to add other things to the command buffer,
         * create the command buffer manually and call
         * `gst_vulkan_full_screen_quad_prepare_draw()`,
         * `gst_vulkan_full_screen_quad_fill_command_buffer()` and
         * `gst_vulkan_full_screen_quad_submit()` instead.
         * @returns whether the draw was successful
         */
        draw(): boolean;
        /**
         * Enables blending of the input image to the output image.
         *
         * See also: `gst_vulkan_full_screen_quad_set_blend_operation()` and
         * `gst_vulkan_full_screen_quad_set_blend_factors()`.
         * @param enable_blend whether to enable blending
         */
        enable_blend(enable_blend: boolean): void;
        /**
         * @param enable_clear whether to clear the framebuffer on load
         */
        enable_clear(enable_clear: boolean): void;
        /**
         * `cmd` must be locked with `gst_vulkan_command_buffer_lock()`.
         * @param cmd the {@link GstVulkan.VulkanCommandBuffer} to fill with commands
         * @param fence
         * @returns whether `cmd` could be filled with the necessary commands
         */
        fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
        get_last_fence(): VulkanFence;
        /**
         * @returns The currently configured     {@link GstVulkan.VulkanQueue}
         */
        get_queue(): VulkanQueue | null;
        /**
         * @param fence a {@link GstVulkan.VulkanFence} that will be signalled after submission
         * @returns whether the necessary information could be generated for drawing a frame.
         */
        prepare_draw(fence: VulkanFence): boolean;
        /**
         * You need to enable blend with `gst_vulkan_full_screen_quad_enable_blend()`.
         *
         * See also: `gst_vulkan_full_screen_quad_set_blend_operation()`.
         * @param src_blend_factor the {@link Vulkan.BlendFactor} for the source image for the colour                    components (RGB)
         * @param dst_blend_factor the {@link Vulkan.BlendFactor} for the destination image for the                    colour components (RGB)
         * @param src_alpha_blend_factor the {@link Vulkan.BlendFactor} for the source image for the                          alpha component.
         * @param dst_alpha_blend_factor the {@link Vulkan.BlendFactor} for the destination image for                          the alpha component.
         */
        set_blend_factors(
            src_blend_factor: Vulkan.BlendFactor,
            dst_blend_factor: Vulkan.BlendFactor,
            src_alpha_blend_factor: Vulkan.BlendFactor,
            dst_alpha_blend_factor: Vulkan.BlendFactor,
        ): void;
        /**
         * You need to enable blend with `gst_vulkan_full_screen_quad_enable_blend()`.
         *
         * See also: `gst_vulkan_full_screen_quad_set_blend_factors()`.
         * @param colour_blend_op the {@link Vulkan.BlendOp} to use for blending colour (RGB) values
         * @param alpha_blend_op the {@link Vulkan.BlendOp} to use for blending alpha values
         */
        set_blend_operation(colour_blend_op: Vulkan.BlendOp, alpha_blend_op: Vulkan.BlendOp): void;
        /**
         * See also `gst_vulkan_full_screen_quad_set_vertex_buffer()`
         * @param indices the index data.  Must be a {@link GstVulkan.VulkanBufferMemory}
         * @param n_indices number of indices in `indices`
         * @returns whether the index data could be set
         */
        set_index_buffer(indices: Gst.Memory, n_indices: number): boolean;
        /**
         * @param in_info the input {@link GstVideo.VideoInfo} to set
         * @param out_info the output {@link GstVideo.VideoInfo} to set
         * @returns whether the information could be successfully set
         */
        set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean;
        /**
         * @param buffer the input {@link Gst.Buffer} to set
         * @returns whether the input buffer could be changed
         */
        set_input_buffer(buffer?: Gst.Buffer | null): boolean;
        /**
         * @param buffer the output {@link Gst.Buffer} to set
         * @returns whether the input buffer could be changed
         */
        set_output_buffer(buffer?: Gst.Buffer | null): boolean;
        /**
         * @param vert the vertex shader to set
         * @param frag the fragment shader to set
         * @returns whether the shaders could be set
         */
        set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean;
        /**
         * @param uniforms the uniform data to set. Must be a {@link GstVulkan.VulkanBufferMemory}
         * @returns whether the shaders could be set
         */
        set_uniform_buffer(uniforms: Gst.Memory): boolean;
        /**
         * @param vertices the vertex data. Must be a {@link GstVulkan.VulkanBufferMemory}
         * @returns whether the index data could be set
         */
        set_vertex_buffer(vertices: Gst.Memory): boolean;
        /**
         * @param cmd a {@link GstVulkan.VulkanCommandBuffer} to submit
         * @param fence a {@link GstVulkan.VulkanFence} to signal on completion
         * @returns whether `cmd` could be submitted to the queue
         */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanHandlePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanHandlePool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanHandlePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanHandlePool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanHandlePool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanHandlePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * acquire a handle for usage
         * @virtual
         */
        vfunc_acquire(): any | null;
        /**
         * allocate a new handle
         * @virtual
         */
        vfunc_alloc(): any | null;
        /**
         * free a handle
         * @param handle
         * @virtual
         */
        vfunc_free(handle?: any | null): void;
        /**
         * release a handle for possible reuse at the next call to `acquire`
         * @param handle
         * @virtual
         */
        vfunc_release(handle?: any | null): void;

        // Methods

        acquire(): any | null;
        alloc(): any | null;
        /**
         * @param handle
         */
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
     * @gir-type Class
     * @since 1.18
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

        /** @signal */
        connect<K extends keyof VulkanImageBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageBufferPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanImageBufferPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageBufferPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanImageBufferPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanImageBufferPool.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the configuration of the Vulkan image buffer pool.
         * @param config the {@link Gst.Structure} with the pool's configuration.
         */
        static config_get_allocation_params(
            config: Gst.Structure,
        ): [Vulkan.ImageUsageFlags | null, Vulkan.MemoryPropertyFlags | null, Vulkan.ImageLayout | null, number];
        /**
         * Sets the `usage` and `mem_properties`, `initial_layout` and `initial_access` of
         * the images to setup.
         *
         * If `initial_access` is VK_IMAGE_LAYOUT_UNDEFINED or
         * VK_IMAGE_LAYOUT_PREINITIALIZED, the image crated by this pool has not been
         * initialized to a particular layout
         * @param config the {@link Gst.Structure} with the pool's configuration.
         * @param usage The Vulkan image usage flags.
         * @param mem_properties Vulkan memory property flags.
         * @param initial_layout Initial Vulkan image layout.
         * @param initial_access Access flags for the layout transition if `initial_layout` is not VK_IMAGE_LAYOUT_UNDEFINED or VK_IMAGE_LAYOUT_PREINITIALIZED.
         */
        static config_set_allocation_params(
            config: Gst.Structure,
            usage: Vulkan.ImageUsageFlags,
            mem_properties: Vulkan.MemoryPropertyFlags,
            initial_layout: Vulkan.ImageLayout,
            initial_access: number,
        ): void;
        /**
         * Decode `caps` are used when the buffers are going to be used either as decoded
         * dest or DPB images.
         * @param config the {@link Gst.Structure} with the pool's configuration.
         * @param caps Upstream decode caps.
         */
        static config_set_decode_caps(config: Gst.Structure, caps: Gst.Caps): void;
        /**
         * Encode `caps` are used when the buffers are going to be used either as encoded
         * src or DPB images.
         * @param config the {@link Gst.Structure} with the pool's configuration.
         * @param caps Upstream encode caps.
         */
        static config_set_encode_caps(config: Gst.Structure, caps: Gst.Caps): void;
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
     * Opaque {@link GstVulkan.VulkanImageMemoryAllocator} struct
     * @gir-type Class
     * @since 1.18
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

        /** @signal */
        connect<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanImageMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanImageMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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
            /**
             * Overrides the {@link GstVulkan.VulkanDevice} creation mechanism.
             * It can be called from any thread.
             * @signal
             * @since 1.26
             * @run-last
             */
            'create-device': (arg0: number) => VulkanDevice;
            'notify::requested-api-major': (pspec: GObject.ParamSpec) => void;
            'notify::requested-api-minor': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            requested_api_major: number;
            requestedApiMajor: number;
            requested_api_minor: number;
            requestedApiMinor: number;
        }
    }

    /**
     * @gir-type Class
     * @since 1.18
     */
    class VulkanInstance extends Gst.Object {
        static $gtype: GObject.GType<VulkanInstance>;

        // Properties

        /**
         * @since 1.18
         */
        get requested_api_major(): number;
        set requested_api_major(val: number);
        /**
         * @since 1.18
         */
        get requestedApiMajor(): number;
        set requestedApiMajor(val: number);
        /**
         * @since 1.18
         */
        get requested_api_minor(): number;
        set requested_api_minor(val: number);
        /**
         * @since 1.18
         */
        get requestedApiMinor(): number;
        set requestedApiMinor(val: number);

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

        /** @signal */
        connect<K extends keyof VulkanInstance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanInstance.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanInstance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanInstance.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanInstance.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanInstance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * If a {@link GstVulkan.VulkanInstance} is requested in `query`, sets `instance` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a {@link GstVulkan.VulkanInstance}.
         * @param element a {@link Gst.Element}
         * @param query a {@link Gst.Query} of type #GST_QUERY_CONTEXT
         * @param instance the {@link GstVulkan.VulkanInstance}
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, instance?: VulkanInstance | null): boolean;
        /**
         * Attempt to retrieve a {@link GstVulkan.VulkanInstance} using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a {@link Gst.Element}
         * @param instance a {@link GstVulkan.VulkanInstance}
         */
        static run_context_query(element: Gst.Element, instance: VulkanInstance): [boolean, VulkanInstance];

        // Methods

        /**
         * @param major the API major version to check
         * @param minor the API minor version to check
         * @param patch the API patch version to check
         * @returns whether the {@link GstVulkan.VulkanInstance} supports the version specified          by `major`, `minor` and `patch`.
         */
        check_api_version(major: number, minor: number, patch: number): boolean;
        /**
         * Check if the configured vulkan instance supports the specified version.
         * Will not work prior to opening the instance with `gst_vulkan_instance_open()`.
         * If a specific version is requested, the `patch` level is ignored.
         * @param major major version
         * @param minor minor version
         * @param patch patch version
         * @returns whether `instance` is at least the requested version.
         */
        check_version(major: number, minor: number, patch: number): boolean;
        /**
         * @returns a new {@link GstVulkan.VulkanDevice}
         */
        create_device(): VulkanDevice;
        /**
         * @param device_index the device index to create the new {@link GstVulkan.VulkanDevice} from
         * @returns a new {@link GstVulkan.VulkanDevice}
         */
        create_device_with_index(device_index: number): VulkanDevice;
        /**
         * Disable an Vulkan extension by `name`.  Disabling an extension will only have
         * an effect before the call to `gst_vulkan_instance_open()`.
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be disabled.
         */
        disable_extension(name: string): boolean;
        /**
         * Enable an Vulkan extension by `name`.  Extensions cannot be enabled until
         * `gst_vulkan_instance_fill_info()` has been called.  Enabling an extension will
         * only have an effect before the call to `gst_vulkan_instance_open()`.
         * @param name extension name to enable
         * @returns whether the Vulkan extension could be enabled.
         */
        enable_extension(name: string): boolean;
        /**
         * Enable an Vulkan layer by `name`.  Layer cannot be enabled until
         * `gst_vulkan_instance_fill_info()` has been called.  Enabling a layer will
         * only have an effect before the call to `gst_vulkan_instance_open()`.
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
         * Returns the vulkan API version configured when constructing the
         * {@link GstVulkan.VulkanInstance}. This value can be any valid Vulkan API version and may
         * not match `gst_vulkan_instance_get_version()` in any way.  This version is the
         * maximum allowed vulkan API to be used in any capacity.
         *
         * This will not return valid values until `gst_vulkan_instance_open()` has been
         * called.
         */
        get_api_version(): [number, number, number];
        /**
         * Retrieves information about an extension.
         *
         * Will not find any extensions before `gst_vulkan_instance_fill_info()` has been
         * called.
         * @param name the layer name to look for
         * @returns whether extension `name` is available
         */
        get_extension_info(name: string): [boolean, number];
        /**
         * Retrieves information about a layer.
         *
         * Will not find any layers before `gst_vulkan_instance_fill_info()` has been
         * called.
         * @param name the layer name to look for
         * @returns whether layer `name` is available
         */
        get_layer_info(name: string): [boolean, string, number, number];
        /**
         * Performs `vkGetInstanceProcAddr()` with `instance` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for `name` or `null`
         */
        get_proc_address(name: string): any | null;
        /**
         * Retrieve the vulkan instance supported version.  Only returns the supported
         * API version by the instance without taking into account the requested API
         * version.  This means `gst_vulkan_instance_check_version()` will return
         * different values if a specific version has been requested (which is the
         * default) than a version check that is performed manually by retrieving the
         * version with this function.
         */
        get_version(): [number, number, number];
        /**
         * @param name extension name
         * @returns whether extension `name` is enabled
         */
        is_extension_enabled(name: string): boolean;
        /**
         * @param name layer name
         * @returns whether layer `name` is enabled
         */
        is_layer_enabled(name: string): boolean;
        /**
         * @returns whether the instance could be created
         */
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
     * Opaque {@link GstVulkan.VulkanMemoryAllocator} struct
     * @gir-type Class
     * @since 1.18
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

        /** @signal */
        connect<K extends keyof VulkanMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanMemoryAllocator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanMemoryAllocator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanMemoryAllocator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanMemoryAllocator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace VulkanOperation {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::command-pool': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            command_pool: VulkanCommandPool;
            commandPool: VulkanCommandPool;
        }
    }

    /**
     * When using the operation `cmd_buf`, you should lock it using
     * `gst_vulkan_command_buffer_lock()`, but you have to unlock it, with
     * `gst_vulkan_command_buffer_unlock()`, when calling any of {@link GstVulkan.VulkanOperation}
     * methods.
     * @gir-type Class
     * @since 1.24
     */
    class VulkanOperation extends Gst.Object {
        static $gtype: GObject.GType<VulkanOperation>;

        // Properties

        /**
         * @construct-only
         */
        get command_pool(): VulkanCommandPool;
        /**
         * @construct-only
         */
        get commandPool(): VulkanCommandPool;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanOperation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VulkanOperation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](cmd_pool: VulkanCommandPool): VulkanOperation;

        // Signals

        /** @signal */
        connect<K extends keyof VulkanOperation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanOperation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanOperation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanOperation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanOperation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add `frame` as an operation dependency by adding the timeline semaphores in
         * each memory of `frame` into either the wait semaphore array. The signal array
         * hold the same semaphores but increasing their current value.
         * @param frame a Vulkan Image {@link Gst.Buffer}
         * @param wait_stage pipeline stage to wait (VkPipelineStageFlags or   VkPipelineStageFlags2)
         * @param signal_stage pipeline stage to signal (VkPipelineStageFlags or   VkPipelineStageFlags2)
         * @returns whether the `frame` was added as dependency.
         */
        add_dependency_frame(frame: Gst.Buffer, wait_stage: number, signal_stage: number): boolean;
        /**
         * See also: `gst_vulkan_operation_update_frame()`
         *
         * Adds an image memory barrier per memory in `frame` with its future state. And
         * it updates the `frame` barrier state by calling internally
         * `gst_vulkan_operation_update_frame()`.
         * @param frame a Vulkan Image {@link Gst.Buffer}
         * @param src_stage source pipeline stage (VkPipelineStageFlags or   VkPipelineStageFlags2)
         * @param dst_stage destination pipeline stage (VkPipelineStageFlags or   VkPipelineStageFlags2)
         * @param new_access the new access flags (VkAccessFlags2 or VkAccessFlags)
         * @param new_layout the new VkImageLayout
         * @param new_queue destination {@link GstVulkan.VulkanQueue} for a transfer of `frame`   ownership
         * @returns whether the `frame` barriers were appended
         */
        add_frame_barrier(
            frame: Gst.Buffer,
            src_stage: number,
            dst_stage: number,
            new_access: number,
            new_layout: Vulkan.ImageLayout,
            new_queue?: VulkanQueue | null,
        ): boolean;
        /**
         * See also: `gst_vulkan_operation_end()` and `gst_vulkan_operation_reset()`
         *
         * Attempts to set the operation ready to work. It instantiates the common
         * command buffer in `self` and calls vkBeginCommandBuffer.
         *
         * After calling this function you can register commands in the command buffer,
         * and finally call `gst_vulkan_operation_end()`. `gst_vulkan_operation_reset()` is
         * called internally if something failed.
         * @returns whether the operation started. It might fill `error`.
         */
        begin(): boolean;
        /**
         * Begins a query operation with `id` in the current command buffer. If video maintenance1 extension
         * is available the query will be recorded as a video inline query. If NULL is passed to `base`,
         * the query will be recorded as a normal query anyway.
         * @param base a VkBaseInStructure base
         * @param id query id
         * @returns whether the begin command was set
         */
        begin_query(base: Vulkan.BaseInStructure, id: number): boolean;
        /**
         * Discards barriers, and all the semaphore arrays populated by
         * `gst_vulkan_operation_add_dependency_frame()`.
         */
        discard_dependencies(): void;
        /**
         * Tries to enable the query pool for the current operation.
         * @param query_type the VkQueryType to enable
         * @param n_queries number of queries to enable
         * @param pnext the structure pointer to use as pNext
         * @returns whether the query pool was enabled. It might populate `error` in case    of error.
         */
        enable_query(query_type: number, n_queries: number, pnext?: any | null): boolean;
        /**
         * See also: `gst_vulkan_operation_begin()` and `gst_vulkan_operation_reset()`
         *
         * It calls vkEndCommandBuffer, and later either vkQueueSubmit or
         * vkQueueSubmit2KHR filling up the semaphores from images declared as
         * dependencies.
         *
         * You have called `gst_vulkan_operation_begin()` before.
         * `gst_vulkan_operation_reset()` is called internally if something fails
         * @returns whether the operation failed. It might fill `error`.
         */
        end(): boolean;
        /**
         * Ends a query operation with `id` in the current command buffer. A query with
         * `id` has had started with `gst_vulkan_operation_begin_query()`
         * @param id query id
         * @returns whether the end command was set
         */
        end_query(id: number): boolean;
        /**
         * Gets the latest operation results of all the queries in `data`. API users have
         * to parse the binary array of `data` according of their needs (usually is a
         * guint32 array of size of n_query).
         *
         * Don't free `data`.
         * @returns whether a status was fetched. If not, it might populate `error`
         */
        get_query(): [boolean, any];
        /**
         * It's a wrapper to vkCmdPipelineBarrier2{KHR} if it's available.
         * @param dependency_info a pointer to VkDependencyInfo
         * @returns `true` if vkCmdPipelineBarrier2{KHR} it's available. `false`,   otherwise.
         */
        pipeline_barrier2(dependency_info?: any | null): boolean;
        /**
         * Resets the operation to a clean state.
         */
        reset(): void;
        /**
         * Add or update the internal list of the future state of `frame`. This state
         * will be set after `gst_vulkan_operation_end()`.
         *
         * This method is useful when new barriers are added to the array without using
         * `gst_vulkan_operation_add_frame_barrier()`.
         * @param frame a {@link Gst.Buffer} to update after submit
         * @param dst_stage destination pipeline stage (VkPipelineStageFlags or   VkPipelineStageFlags2)
         * @param new_access the new access flags (VkAccessFlags2 or VkAccessFlags)
         * @param new_layout the new VkImageLayout
         * @param new_queue destination {@link GstVulkan.VulkanQueue} for a transfer of `frame`   ownership
         */
        update_frame(
            frame: Gst.Buffer,
            dst_stage: number,
            new_access: number,
            new_layout: Vulkan.ImageLayout,
            new_queue?: VulkanQueue | null,
        ): void;
        /**
         * @returns whether the operations are using synchronization2 extension.
         */
        use_sync2(): boolean;
        /**
         * Waits for the operation's fence to signal.
         * @returns whether the operation succeed.
         */
        wait(): boolean;
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

    /**
     * @gir-type Class
     * @since 1.18
     */
    class VulkanPhysicalDevice extends Gst.Object {
        static $gtype: GObject.GType<VulkanPhysicalDevice>;

        // Properties

        /**
         * @construct-only
         */
        get device_index(): number;
        /**
         * @construct-only
         */
        get deviceIndex(): number;
        /**
         * @construct-only
         */
        get instance(): VulkanInstance;
        /**
         * @read-only
         */
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

        n_queue_families: number;
        queue_family_ops: VulkanQueueFamilyOps;

        // Constructors

        constructor(properties?: Partial<VulkanPhysicalDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](instance: VulkanInstance, device_index: number): VulkanPhysicalDevice;

        // Signals

        /** @signal */
        connect<K extends keyof VulkanPhysicalDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanPhysicalDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanPhysicalDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanPhysicalDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanPhysicalDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanPhysicalDevice.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param type a `VkPhysicalDeviceType
         */
        static type_to_string(type: Vulkan.PhysicalDeviceType): string;

        // Methods

        /**
         * Note: This is the intersection of the exposed supported API version as would
         * be returned by `gst_vulkan_physical_device_get_api_version()` and
         * `gst_vulkan_instance_check_version()`.  The latter will take into account any
         * requested API version and may result in a different result than directly
         * comparing against `gst_vulkan_instance_get_version()`.
         * @param major the API major version to check
         * @param minor the API minor version to check
         * @param patch the API patch version to check
         * @returns whether the {@link GstVulkan.VulkanPhysicalDevice} supports the version specified          by `major`, `minor` and `patch`.
         */
        check_api_version(major: number, minor: number, patch: number): boolean;
        /**
         * Retrieves the advertised Vulkan API version of the {@link GstVulkan.VulkanPhysicalDevice}.
         */
        get_api_version(): [number, number, number];
        /**
         * Retrieves information about a device extension.
         *
         * Will not find any extensions before `gst_vulkan_instance_fill_info()` has been
         * called.
         * @param name the extension name to look for
         * @returns whether extension `name` is available
         */
        get_extension_info(name: string): [boolean, number];
        /**
         * @returns The {@link GstVulkan.VulkanInstance} associated with this physical device
         */
        get_instance(): VulkanInstance;
        /**
         * Retrieves information about a layer.
         *
         * Will not find any layers before `gst_vulkan_instance_fill_info()` has been
         * called.
         * @param name the layer name to look for
         * @returns whether layer `name` is available
         */
        get_layer_info(name: string): [boolean, string, number, number];
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param queue_bits
         */
        static flags_to_string(queue_bits: Vulkan.QueueFlags): string;
        /**
         * If a {@link GstVulkan.VulkanQueue} is requested in `query`, sets `queue` as the reply.
         *
         * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
         * for a {@link GstVulkan.VulkanQueue}.
         * @param element a {@link Gst.Element}
         * @param query a {@link Gst.Query} of type #GST_QUERY_CONTEXT
         * @param queue the {@link GstVulkan.VulkanQueue}
         */
        static handle_context_query(element: Gst.Element, query: Gst.Query, queue?: VulkanQueue | null): boolean;
        /**
         * Attempt to retrieve a {@link GstVulkan.VulkanQueue} using #GST_QUERY_CONTEXT from the
         * surrounding elements of `element`.
         * @param element a {@link Gst.Element}
         * @param queue a {@link GstVulkan.VulkanQueue}
         */
        static run_context_query(element: Gst.Element, queue: VulkanQueue): [boolean, VulkanQueue];

        // Methods

        /**
         * @returns a new {@link GstVulkan.VulkanCommandPool} or `null`
         */
        create_command_pool(): VulkanCommandPool;
        /**
         * @returns the {@link GstVulkan.VulkanDevice} for `queue`
         */
        get_device(): VulkanDevice | null;
        /**
         * Locks the queue for command submission using `vkQueueSubmit()` to meet the
         * Vulkan requirements for externally synchronised resources.
         */
        submit_lock(): void;
        /**
         * Unlocks the queue for command submission using `vkQueueSubmit()`.
         *
         * See `gst_vulkan_queue_submit_lock()` for details on when this call is needed.
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanSwapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanSwapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanSwapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanSwapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanSwapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanSwapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param available_queue a {@link GstVulkan.VulkanQueue} chosen elsewhere
         */
        choose_queue(available_queue?: VulkanQueue | null): boolean;
        get_supported_caps(): Gst.Caps;
        get_surface_rectangles(): [
            GstVideo.VideoRectangle | null,
            GstVideo.VideoRectangle | null,
            GstVideo.VideoRectangle | null,
        ];
        /**
         * @param buffer
         */
        render_buffer(buffer: Gst.Buffer): boolean;
        /**
         * @param caps
         */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanTrashFenceList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashFenceList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanTrashFenceList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashFenceList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanTrashList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanTrashList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanTrashList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanTrashList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanTrashList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * the {@link GstVulkan.VulkanTrashListAdd} functions
         * @param trash the {@link GstVulkan.VulkanTrash} to add to `trash_list`
         * @virtual
         */
        vfunc_add_func(trash: VulkanTrash): boolean;
        /**
         * the {@link GstVulkan.VulkanTrashListGC} function
         * @virtual
         */
        vfunc_gc_func(): void;
        /**
         * the {@link GstVulkan.VulkanTrashListWait} function
         * @param timeout the timeout in ns to wait
         * @virtual
         */
        vfunc_wait_func(timeout: number): boolean;

        // Methods

        /**
         * @param fence a {@link GstVulkan.VulkanFence} to wait for signalling
         * @param notify notify function for when `fence` is signalled
         * @returns a new or reused {@link GstVulkan.VulkanTrash} for the provided          parameters.
         */
        acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;
        /**
         * @param args
         */
        // Conflicted with GstVulkan.VulkanHandlePool.acquire
        acquire(...args: never[]): any;
        /**
         * @param trash {@link GstVulkan.VulkanTrash} object to add to the list
         * @returns whether `trash` could be added to `trash_list`
         */
        add(trash: VulkanTrash): boolean;
        /**
         * Remove any stored {@link GstVulkan.VulkanTrash} objects that have had their associated
         * {@link GstVulkan.VulkanFence} signalled.
         */
        gc(): void;
        /**
         * @param timeout timeout in ns to wait, -1 for indefinite
         * @returns whether the wait succeeded in waiting for all objects to be freed.
         */
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

    /**
     * @gir-type Class
     * @since 1.18
     */
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

        /** @signal */
        connect<K extends keyof VulkanVideoFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanVideoFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanVideoFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanVideoFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanVideoFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanVideoFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The currently configured     {@link GstVulkan.VulkanDevice}
         */
        get_device(): VulkanDevice | null;
        /**
         * @returns The currently configured     {@link GstVulkan.VulkanInstance}
         */
        get_instance(): VulkanInstance | null;
        /**
         * @returns The currently configured     {@link GstVulkan.VulkanQueue}
         */
        get_queue(): VulkanQueue | null;
    }

    namespace VulkanWindow {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            close: () => boolean | void;
            /**
             * @signal
             * @run-last
             */
            draw: () => void;
            /**
             * Will be emitted when a key event is received by the {@link GstVulkan.VulkanWindow}.
             * @signal
             * @since 1.18
             * @run-last
             */
            'key-event': (arg0: string, arg1: string) => void;
            /**
             * Will be emitted when a mouse event is received by the {@link GstVulkan.VulkanWindow}.
             * @signal
             * @since 1.18
             * @run-last
             */
            'mouse-event': (arg0: string, arg1: number, arg2: number, arg3: number) => void;
            /**
             * @signal
             * @run-last
             */
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
     * {@link GstVulkan.VulkanWindow} is an opaque struct and should only be accessed through the
     * provided api.
     * @gir-type Class
     * @since 1.18
     */
    abstract class VulkanWindow extends Gst.Object {
        static $gtype: GObject.GType<VulkanWindow>;

        // Properties

        /**
         * @read-only
         */
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

        /** @signal */
        connect<K extends keyof VulkanWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof VulkanWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VulkanWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof VulkanWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VulkanWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Attempt to close the window.
         * @virtual
         */
        vfunc_close(): void;
        /**
         * retrieve whether this window supports presentation
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param queue_family_idx the queue family
         * @virtual
         */
        vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        /**
         * retrieve the current size of the window
         * @virtual
         */
        vfunc_get_surface_dimensions(): [number, number];
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a `gboolean` indicating if events should be handled or not.
         * @virtual
         */
        vfunc_handle_events(handle_events: boolean): void;
        /**
         * open the connection to the display
         * @virtual
         */
        vfunc_open(): boolean;
        /**
         * set the external window handle to render into
         * @param handle
         * @virtual
         */
        vfunc_set_window_handle(handle: never): void;

        // Methods

        /**
         * Attempt to close the window.
         */
        close(): void;
        /**
         * @returns the {@link GstVulkan.VulkanDisplay} for `window`
         */
        get_display(): VulkanDisplay;
        /**
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param queue_family_idx the queue family
         * @returns whether the given combination of `window`, `device` and          `queue_family_idx` supports presentation
         */
        get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        get_surface_dimensions(): [number, number];
        /**
         * Tell a `window` that it should handle events from the window system. These
         * events are forwarded upstream as navigation events. In some window systems
         * events are not propagated in the window hierarchy if a client is listening
         * for them. This method allows you to disable events handling completely
         * from the `window`.
         * @param handle_events a `gboolean` indicating if events should be handled or not.
         */
        handle_events(handle_events: boolean): void;
        /**
         * @returns whether `window` could be successfully opened
         */
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
        /**
         * @param event_type
         * @param key_str
         */
        send_key_event(event_type: string, key_str: string): void;
        /**
         * @param event_type
         * @param button
         * @param posx
         * @param posy
         */
        send_mouse_event(event_type: string, button: number, posx: number, posy: number): void;
        /**
         * @param handle
         */
        set_window_handle(handle: never): void;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanBarrierBufferInfo {
        static $gtype: GObject.GType<VulkanBarrierBufferInfo>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanBarrierImageInfo {
        static $gtype: GObject.GType<VulkanBarrierImageInfo>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanBarrierMemoryInfo {
        static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;

        // Fields

        type: VulkanBarrierType;
        flags: VulkanBarrierFlags;
        queue: VulkanQueue;
        pipeline_stages: number;
        access_flags: number;
        semaphore_value: number;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanBufferMemory {
        static $gtype: GObject.GType<VulkanBufferMemory>;

        // Fields

        device: VulkanDevice;

        // Static methods

        /**
         * Allocate a new {@link GstVulkan.VulkanBufferMemory}.
         * @param device a {@link GstVulkan.VulkanDevice}
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
         * Allocate a new {@link GstVulkan.VulkanBufferMemory}.
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param buffer_info the VkBufferCreateInfo structure
         * @param mem_prop_flags memory properties flags for the backing memory
         */
        static alloc_with_buffer_info(
            device: VulkanDevice,
            buffer_info: Vulkan.BufferCreateInfo,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Initializes the Vulkan buffer memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other {@link GstVulkan.VulkanBufferMemory} operation.
         */
        static init_once(): void;
        /**
         * Allocated a new wrapped {@link GstVulkan.VulkanBufferMemory} with `buffer`.
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param buffer a {@link Vulkan.Buffer}
         * @param usage usage flags of `buffer`
         * @param user_data user data to call `notify` with
         * @param notify a {@link GLib.DestroyNotify} called when `buffer` is no longer in use
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
     * @gir-type Alias
     */
    type VulkanBufferMemoryAllocatorClass = typeof VulkanBufferMemoryAllocator;
    /**
     * @gir-type Alias
     */
    type VulkanBufferPoolClass = typeof VulkanBufferPool;
    /**
     * @gir-type Struct
     */
    abstract class VulkanBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanBufferPoolPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanCommandBuffer {
        static $gtype: GObject.GType<VulkanCommandBuffer>;

        // Fields

        pool: VulkanCommandPool;

        // Constructors

        constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);

        static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;
    }

    /**
     * @gir-type Alias
     */
    type VulkanCommandPoolClass = typeof VulkanCommandPool;
    /**
     * @gir-type Struct
     */
    abstract class VulkanCommandPoolPrivate {
        static $gtype: GObject.GType<VulkanCommandPoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VulkanDescriptorCacheClass = typeof VulkanDescriptorCache;
    /**
     * @gir-type Struct
     */
    abstract class VulkanDescriptorCachePrivate {
        static $gtype: GObject.GType<VulkanDescriptorCachePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VulkanDescriptorPoolClass = typeof VulkanDescriptorPool;
    /**
     * @gir-type Struct
     */
    abstract class VulkanDescriptorPoolPrivate {
        static $gtype: GObject.GType<VulkanDescriptorPoolPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanDescriptorSet {
        static $gtype: GObject.GType<VulkanDescriptorSet>;

        // Fields

        pool: VulkanDescriptorPool;
        cache: VulkanDescriptorCache;
        n_layouts: number;

        // Constructors

        constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, layouts: VulkanHandle[]);

        static new_wrapped(
            pool: VulkanDescriptorPool,
            set: Vulkan.DescriptorSet,
            layouts: VulkanHandle[],
        ): VulkanDescriptorSet;
    }

    /**
     * @gir-type Alias
     */
    type VulkanDeviceClass = typeof VulkanDevice;
    /**
     * @gir-type Struct
     */
    abstract class VulkanDevicePrivate {
        static $gtype: GObject.GType<VulkanDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VulkanDisplayClass = typeof VulkanDisplay;
    /**
     * @gir-type Struct
     */
    abstract class VulkanDisplayPrivate {
        static $gtype: GObject.GType<VulkanDisplayPrivate>;
    }

    /**
     * Encoder query result. Expected to be used in `gst_vulkan_operation_get_query()`
     * @gir-type Struct
     * @since 1.26
     */
    class VulkanEncodeQueryResult {
        static $gtype: GObject.GType<VulkanEncodeQueryResult>;

        // Fields

        offset: number;
        data_size: number;
        status: number;

        // Constructors

        constructor(
            properties?: Partial<{
                offset: number;
                data_size: number;
                status: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanFence {
        static $gtype: GObject.GType<VulkanFence>;

        // Fields

        device: VulkanDevice;
        cache: VulkanFenceCache;

        // Constructors

        constructor(device: VulkanDevice);

        static ['new'](device: VulkanDevice): VulkanFence;

        static new_always_signalled(device: VulkanDevice): VulkanFence;

        // Methods

        /**
         * @returns whether `fence` has been signalled
         */
        is_signaled(): boolean;
        reset(): void;
    }

    /**
     * @gir-type Alias
     */
    type VulkanFenceCacheClass = typeof VulkanFenceCache;
    /**
     * @gir-type Struct
     * @since 1.18
     */
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
    }

    /**
     * @gir-type Struct
     * @since 1.26
     */
    class VulkanFormatMap {
        static $gtype: GObject.GType<VulkanFormatMap>;

        // Fields

        format: GstVideo.VideoFormat;
    }

    /**
     * @gir-type Alias
     */
    type VulkanFullScreenQuadClass = typeof VulkanFullScreenQuad;
    /**
     * @gir-type Struct
     */
    abstract class VulkanFullScreenQuadPrivate {
        static $gtype: GObject.GType<VulkanFullScreenQuadPrivate>;
    }

    /**
     * Holds information about a vulkan non dispatchable handle that only has
     * a vulkan device as a parent and no specific host synchronisation
     * requirements.  Command buffers have extra requirements that are serviced by
     * more specific implementations ({@link GstVulkan.VulkanCommandBuffer}, {@link GstVulkan.VulkanCommandPool}).
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanHandle {
        static $gtype: GObject.GType<VulkanHandle>;

        // Fields

        device: VulkanDevice;
        type: VulkanHandleType;
        handle: VulkanHandleTypedef;
        notify: VulkanHandleDestroyNotify;
        user_data: any;

        // Constructors

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

        // Static methods

        /**
         * @param element a {@link Gst.Element}
         * @param query a {@link Gst.Query} of type {@link Gst.QueryType.CONTEXT}
         * @param display a {@link GstVulkan.VulkanDisplay}
         * @param instance a {@link GstVulkan.VulkanInstance}
         * @param device a {@link GstVulkan.VulkanDevice}
         */
        static context_query(
            element: Gst.Element,
            query: Gst.Query,
            display?: VulkanDisplay | null,
            instance?: VulkanInstance | null,
            device?: VulkanDevice | null,
        ): boolean;
        /**
         * Helper function for implementing {@link Gst.ElementClass}.set_context() in
         * Vulkan capable elements.
         *
         * Retrieve's the {@link GstVulkan.VulkanDisplay} or {@link GstVulkan.VulkanInstance} in `context` and places
         * the result in `display` or `instance` respectively.
         * @param element a {@link Gst.Element}
         * @param context a {@link Gst.Context}
         * @param display location of a {@link GstVulkan.VulkanDisplay}
         * @param instance location of a {@link GstVulkan.VulkanInstance}
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

    /**
     * @gir-type Alias
     */
    type VulkanHandlePoolClass = typeof VulkanHandlePool;
    /**
     * @gir-type Alias
     */
    type VulkanImageBufferPoolClass = typeof VulkanImageBufferPool;
    /**
     * @gir-type Struct
     */
    abstract class VulkanImageBufferPoolPrivate {
        static $gtype: GObject.GType<VulkanImageBufferPoolPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanImageMemory {
        static $gtype: GObject.GType<VulkanImageMemory>;

        // Fields

        device: VulkanDevice;

        // Static methods

        /**
         * Allocated a new {@link GstVulkan.VulkanImageMemory}.
         * @param device a {@link GstVulkan.VulkanDevice}
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
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param image_info VkImageCreateInfo structure
         * @param mem_prop_flags VkMemoryPropertyFlags flags
         */
        static alloc_with_image_info(
            device: VulkanDevice,
            image_info: Vulkan.ImageCreateInfo,
            mem_prop_flags: Vulkan.MemoryPropertyFlags,
        ): Gst.Memory;
        /**
         * Initializes the Vulkan image memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other {@link GstVulkan.VulkanImageMemory} operation.
         */
        static init_once(): void;
        /**
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param image a VkImage
         * @param format the VkFormat for `image`
         * @param width width of `image`
         * @param height height of `image`
         * @param tiling tiling of `image`
         * @param usage usage flags of `image`
         * @param user_data user data for `notify`
         */
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

        // Methods

        /**
         * @param view a {@link GstVulkan.VulkanImageView}
         */
        add_view(view: VulkanImageView): void;
        /**
         * @param find_func {@link GstVulkan.VulkanImageMemoryFindViewFunc} to search with
         * @returns the first {@link GstVulkan.VulkanImageView} that                                     `find_func` returns `true` for, or `null`
         */
        find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView | null;
        /**
         * @returns the height of `image`
         */
        get_height(): number;
        /**
         * @returns the width of `image`
         */
        get_width(): number;
        /**
         * @param allocator
         * @param parent
         * @param device
         * @param format
         * @param usage
         * @param initial_layout
         * @param params
         * @param size
         * @param user_data
         */
        init(
            allocator: Gst.Allocator,
            parent: Gst.Memory,
            device: VulkanDevice,
            format: Vulkan.Format,
            usage: Vulkan.ImageUsageFlags,
            initial_layout: Vulkan.ImageLayout,
            params: Gst.AllocationParams,
            size: number,
            user_data?: any | null,
        ): boolean;
    }

    /**
     * @gir-type Alias
     */
    type VulkanImageMemoryAllocatorClass = typeof VulkanImageMemoryAllocator;
    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanImageView {
        static $gtype: GObject.GType<VulkanImageView>;

        // Fields

        device: VulkanDevice;

        // Constructors

        constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);

        static ['new'](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;
    }

    /**
     * @gir-type Alias
     */
    type VulkanInstanceClass = typeof VulkanInstance;
    /**
     * @gir-type Struct
     */
    abstract class VulkanInstancePrivate {
        static $gtype: GObject.GType<VulkanInstancePrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanMemory {
        static $gtype: GObject.GType<VulkanMemory>;

        // Fields

        device: VulkanDevice;
        map_count: number;
        mapping: any;

        // Static methods

        /**
         * Allocated a new {@link GstVulkan.VulkanMemory}.
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param memory_type_index the Vulkan memory type index
         * @param params a {@link Gst.AllocationParams}
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
        /**
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param req memory requirements to look for
         * @param properties memory properties to search for
         */
        static find_memory_type_index_with_requirements(
            device: VulkanDevice,
            req: Vulkan.MemoryRequirements,
            properties: Vulkan.MemoryPropertyFlags,
        ): [boolean, number];
        /**
         * @param prop_bits
         */
        static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string;
        /**
         * Initializes the Vulkan memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other {@link GstVulkan.VulkanMemory} operation.
         */
        static init_once(): void;
        /**
         * @param prop_bits
         */
        static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
    }

    /**
     * @gir-type Alias
     */
    type VulkanMemoryAllocatorClass = typeof VulkanMemoryAllocator;
    /**
     * @gir-type Alias
     */
    type VulkanOperationClass = typeof VulkanOperation;
    /**
     * @gir-type Struct
     */
    abstract class VulkanOperationPrivate {
        static $gtype: GObject.GType<VulkanOperationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VulkanPhysicalDeviceClass = typeof VulkanPhysicalDevice;
    /**
     * @gir-type Struct
     */
    abstract class VulkanPhysicalDevicePrivate {
        static $gtype: GObject.GType<VulkanPhysicalDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VulkanQueueClass = typeof VulkanQueue;
    /**
     * @gir-type Struct
     * @since 1.24
     */
    class VulkanQueueFamilyOps {
        static $gtype: GObject.GType<VulkanQueueFamilyOps>;

        // Fields

        video: number;
        query_result_status: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                video: number;
                query_result_status: boolean;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class VulkanQueuePrivate {
        static $gtype: GObject.GType<VulkanQueuePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type VulkanSwapperClass = typeof VulkanSwapper;
    /**
     * @gir-type Struct
     */
    abstract class VulkanSwapperPrivate {
        static $gtype: GObject.GType<VulkanSwapperPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class VulkanTrash {
        static $gtype: GObject.GType<VulkanTrash>;

        // Fields

        cache: VulkanTrashList;
        notify: VulkanTrashNotify;
        user_data: any;

        // Constructors

        constructor(fence: VulkanFence, notify: VulkanTrashNotify);

        static ['new'](fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash;

        static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

        // Static methods

        /**
         * A {@link GstVulkan.VulkanTrashNotify} implementation for unreffing a {@link Gst.MiniObject} when the
         * associated {@link GstVulkan.VulkanFence} is signalled
         * @param device the {@link GstVulkan.VulkanDevice}
         * @param user_data the {@link Gst.MiniObject}
         */
        static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
        /**
         * A {@link GstVulkan.VulkanTrashNotify} implementation for unreffing a {@link Gst.Object} when the
         * associated {@link GstVulkan.VulkanFence} is signalled
         * @param device the {@link GstVulkan.VulkanDevice}
         * @param user_data the {@link Gst.MiniObject}
         */
        static object_unref(device: VulkanDevice, user_data?: any | null): void;
    }

    /**
     * @gir-type Alias
     */
    type VulkanTrashFenceListClass = typeof VulkanTrashFenceList;
    /**
     * @gir-type Alias
     */
    type VulkanTrashListClass = typeof VulkanTrashList;
    /**
     * @gir-type Alias
     */
    type VulkanVideoFilterClass = typeof VulkanVideoFilter;
    /**
     * @gir-type Alias
     */
    type VulkanWindowClass = typeof VulkanWindow;
    /**
     * @gir-type Struct
     */
    abstract class VulkanWindowPrivate {
        static $gtype: GObject.GType<VulkanWindowPrivate>;
    }

    /**
     * @gir-type Alias
     */
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
