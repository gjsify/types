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
     */
    enum VulkanBarrierType {
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

        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
        /**
         * if `result` indicates an error condition, fills out `Gerror` with details of
         * the error
         * @param result a VkResult
         * @param error a {@link GLib.Error} to fill
         * @param format the printf-like format to write into the {@link GLib.Error}
         * @param ___ arguments for `format`
         */
        static to_g_error(
            result: Vulkan.Result,
            error: GLib.Error | null,
            format: string,
            ___: any[],
        ): [Vulkan.Result, GLib.Error | null];
    }

    /**
     * @gir-type Enum
     */
    export namespace VulkanFormatScaling {
        export const $gtype: GObject.GType<VulkanFormatScaling>;
    }

    /**
     * @gir-type Enum
     */
    enum VulkanFormatScaling {
        UNORM,
        SNORM,
        USCALED,
        SSCALED,
        UINT,
        SINT,
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
     */
    enum VulkanHandleType {
        DESCRIPTOR_SET_LAYOUT,
        PIPELINE_LAYOUT,
        PIPELINE,
        RENDER_PASS,
        SAMPLER,
        FRAMEBUFFER,
        SHADER,
    }

    /**
     * @gir-type Struct
     */
    class VulkanWindowError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static FAILED: number;
        static OLD_LIBS: number;
        static RESOURCE_UNAVAILABLE: number;

        // Constructors

        constructor(options: { message: string; code: number });

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
    /**
     * @param context a {@link Gst.Context}
     * @param device resulting {@link GstVulkan.VulkanDevice}
     * @returns Whether `device` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_device(context: Gst.Context, device: VulkanDevice): boolean;
    /**
     * @param context a {@link Gst.Context}
     * @param display resulting {@link GstVulkan.VulkanDisplay}
     * @returns Whether `display` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_display(context: Gst.Context, display: VulkanDisplay): boolean;
    /**
     * @param context a {@link Gst.Context}
     * @param instance resulting {@link GstVulkan.VulkanInstance}
     * @returns Whether `instance` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_instance(context: Gst.Context, instance: VulkanInstance): boolean;
    /**
     * @param context a {@link Gst.Context}
     * @param queue resulting {@link GstVulkan.VulkanQueue}
     * @returns Whether `queue` was in `context`
     * @since 1.18
     */
    function context_get_vulkan_queue(context: Gst.Context, queue: VulkanQueue): boolean;
    /**
     * Sets `device` on `context`
     * @param context a {@link Gst.Context}
     * @param device a {@link GstVulkan.VulkanDevice}
     * @since 1.18
     */
    function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice): void;
    /**
     * Sets `display` on `context`
     * @param context a {@link Gst.Context}
     * @param display a {@link GstVulkan.VulkanDisplay}
     * @since 1.18
     */
    function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay): void;
    /**
     * Sets `instance` on `context`
     * @param context a {@link Gst.Context}
     * @param instance a {@link GstVulkan.VulkanInstance}
     * @since 1.18
     */
    function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance): void;
    /**
     * Sets `queue` on `context`
     * @param context a {@link Gst.Context}
     * @param queue a {@link GstVulkan.VulkanQueue}
     * @since 1.18
     */
    function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue): void;
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
     * @param device
     * @param code
     * @param size
     */
    function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle;
    /**
     * @param type a {@link GstVulkan.VulkanDisplayType}
     * @returns the Vulkan extension string required for creating a VkSurfaceKHR using a window system handle or `null`
     * @since 1.18
     */
    function vulkan_display_type_to_extension_string(type: VulkanDisplayType | null): string;
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
    function vulkan_error_quark(): GLib.Quark;
    /**
     * @param format
     */
    function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo;
    /**
     * @param image
     */
    function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView;
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
     * @param device a {@link GstVulkan.VulkanInstance}
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
     * @param type_bits memory type bits to search for
     * @param properties memory properties to search for
     * @param type_index resulting index of the memory type
     * @returns whether a valid memory type could be found
     * @since 1.18
     */
    function vulkan_memory_find_memory_type_index_with_type_properties(
        device: VulkanDevice,
        type_bits: number,
        properties: Vulkan.MemoryPropertyFlags,
        type_index: number,
    ): boolean;
    /**
     * @param prop_bits
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
     */
    function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string;
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
     */
    function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string;
    /**
     * @param device
     * @param user_data
     */
    function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
    /**
     * @param device
     * @param user_data
     */
    function vulkan_trash_object_unref(device: VulkanDevice, user_data?: any | null): void;
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
     */
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
     * Opaque {@link GstVulkan.VulkanBufferMemoryAllocator} struct
     * @gir-type Class
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
     * Opaque GstVulkanBufferPool struct
     * @gir-type Class
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

        static ['new'](pool: VulkanDescriptorPool, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorCache;

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
         * @param n_layouts
         * @param layouts
         * @returns a new {@link GstVulkan.VulkanDescriptorSet}
         */
        create(n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet;
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

        create_fence(): VulkanFence;
        /**
         * Iterate over each queue family available on {@link GstVulkan.VulkanDevice}
         * @param func a {@link GstVulkan.VulkanDeviceForEachQueueFunc} to run for each {@link GstVulkan.VulkanQueue}
         */
        foreach_queue(func?: VulkanDeviceForEachQueueFunc | null): void;
        /**
         * @returns the {@link GstVulkan.VulkanInstance} used to create this `device`
         */
        get_instance(): VulkanInstance;
        /**
         * Performs vkGetDeviceProcAddr() with `device` and `name`
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
         * Attempts to create the internal {@link Vulkan.Device} object.
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
     * The contents of a {@link GstVulkan.VulkanDisplay} are private and should only be accessed
     * through the provided API
     * @gir-type Class
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
         * @virtual
         */
        vfunc_create_window(): VulkanWindow;
        /**
         * @virtual
         */
        vfunc_get_handle(): any | null;

        // Methods

        /**
         * @returns a new {@link GstVulkan.VulkanWindow} for `display` or `null`.
         */
        create_window(): VulkanWindow;
        /**
         * Execute `compare_func` over the list of windows stored by `display`.  The
         * first argument to `compare_func` is the {@link GstVulkan.VulkanWindow} being checked and the
         * second argument is `data`.
         * @param data some data to pass to `compare_func`
         * @param compare_func a comparison function to run
         * @returns The first {@link GstVulkan.VulkanWindow} that causes a match          from `compare_func`
         */
        find_window(data: any | null, compare_func: GLib.CompareFunc): VulkanWindow;
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

        draw(): boolean;
        /**
         * @param cmd the {@link GstVulkan.VulkanCommandBuffer} to fill with commands
         * @param fence
         * @returns whether `cmd` could be filled with the necessary commands
         */
        fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean;
        get_last_fence(): VulkanFence;
        /**
         * @param fence
         */
        prepare_draw(fence: VulkanFence): boolean;
        /**
         * @param indices
         * @param n_indices
         */
        set_index_buffer(indices: Gst.Memory, n_indices: number): boolean;
        /**
         * @param in_info
         * @param out_info
         */
        set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean;
        /**
         * @param buffer
         */
        set_input_buffer(buffer: Gst.Buffer): boolean;
        /**
         * @param buffer
         */
        set_output_buffer(buffer: Gst.Buffer): boolean;
        /**
         * @param vert
         * @param frag
         */
        set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean;
        /**
         * @param uniforms
         */
        set_uniform_buffer(uniforms: Gst.Memory): boolean;
        /**
         * @param vertices
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
         * @virtual
         */
        vfunc_acquire(): any | null;
        /**
         * @virtual
         */
        vfunc_alloc(): any | null;
        /**
         * @param handle
         * @virtual
         */
        vfunc_free(handle?: any | null): void;
        /**
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
     * Opaque GstVulkanImageBufferPool struct
     * @gir-type Class
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
             * @since 1.18
             * @run-last
             */
            'create-device': () => VulkanDevice;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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
         * @returns a new {@link GstVulkan.VulkanDevice}
         */
        create_device(): VulkanDevice;
        /**
         * Performs vkGetInstanceProcAddr() with `instance` and `name`
         * @param name name of the function to retrieve
         * @returns the function pointer for `name` or `null`
         */
        get_proc_address(name: string): any | null;
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

        n_device_layers: number;
        n_device_extensions: number;
        n_queue_families: number;

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
         * @param type
         */
        static type_to_string(type: Vulkan.PhysicalDeviceType): string;

        // Methods

        /**
         * @returns The {@link GstVulkan.VulkanInstance} associated with this physical device
         */
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

    /**
     * @gir-type Class
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
         * @returns a new `GstVUlkanCommandPool` or `null`
         */
        create_command_pool(): VulkanCommandPool;
        /**
         * @returns the {@link GstVulkan.VulkanDevice} for `queue`
         */
        get_device(): VulkanDevice;
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
         * @param available_queue
         */
        choose_queue(available_queue: VulkanQueue): boolean;
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
         * @param trash
         * @virtual
         */
        vfunc_add_func(trash: VulkanTrash): boolean;
        /**
         * @virtual
         */
        vfunc_gc_func(): void;
        /**
         * @param timeout
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
         * @param trash
         */
        add(trash: VulkanTrash): boolean;
        gc(): void;
        /**
         * @param timeout
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
         * @param device a {@link GstVulkan.VulkanDevice}
         * @param queue_family_idx the queue family
         * @virtual
         */
        vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean;
        /**
         * @param width
         * @param height
         * @virtual
         */
        vfunc_get_surface_dimensions(width: number, height: number): void;
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
         * @virtual
         */
        vfunc_open(): boolean;
        /**
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
        /**
         * @param width
         * @param height
         */
        get_surface_dimensions(width: number, height: number): void;
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
     */
    class VulkanBarrierBufferInfo {
        static $gtype: GObject.GType<VulkanBarrierBufferInfo>;
    }

    /**
     * @gir-type Struct
     */
    class VulkanBarrierImageInfo {
        static $gtype: GObject.GType<VulkanBarrierImageInfo>;
    }

    /**
     * @gir-type Struct
     */
    class VulkanBarrierMemoryInfo {
        static $gtype: GObject.GType<VulkanBarrierMemoryInfo>;

        // Fields

        type: VulkanBarrierType;
        flags: VulkanBarrierFlags;
        queue: VulkanQueue;
    }

    /**
     * @gir-type Struct
     */
    class VulkanBufferMemory {
        static $gtype: GObject.GType<VulkanBufferMemory>;

        // Fields

        device: VulkanDevice;
        wrapped: boolean;
        notify: GLib.DestroyNotify;
        user_data: any;

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
         * Initializes the Vulkan buffer memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other {@link GstVulkan.VulkanBufferMemory} operation.
         */
        static init_once(): void;
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
     */
    class VulkanCommandBuffer {
        static $gtype: GObject.GType<VulkanCommandBuffer>;

        // Fields

        pool: VulkanCommandPool;

        // Constructors

        constructor(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel);

        static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer;

        // Methods

        /**
         * Increases the refcount of the given buffer by one.
         * @returns `buf`
         */
        ref(): VulkanCommandBuffer;
        /**
         * Decreases the refcount of the buffer. If the refcount reaches 0, the buffer
         * will be freed.
         */
        unref(): void;
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
     */
    class VulkanDescriptorSet {
        static $gtype: GObject.GType<VulkanDescriptorSet>;

        // Fields

        pool: VulkanDescriptorPool;
        cache: VulkanDescriptorCache;
        n_layouts: number;

        // Constructors

        constructor(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, n_layouts: number, layouts: VulkanHandle);

        static new_wrapped(
            pool: VulkanDescriptorPool,
            set: Vulkan.DescriptorSet,
            n_layouts: number,
            layouts: VulkanHandle,
        ): VulkanDescriptorSet;

        // Methods

        /**
         * Increases the refcount of the given buffer by one.
         * @returns `buf`
         */
        ref(): VulkanDescriptorSet;
        /**
         * Decreases the refcount of the buffer. If the refcount reaches 0, the buffer
         * will be freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class VulkanDescriptorSetClass {
        static $gtype: GObject.GType<VulkanDescriptorSetClass>;
    }

    /**
     * @gir-type Struct
     */
    abstract class VulkanDescriptorSetPrivate {
        static $gtype: GObject.GType<VulkanDescriptorSetPrivate>;
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
     * @gir-type Struct
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
     * Holds information about a vulkan non dispatchable handle
     * @gir-type Struct
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
         * @param device a {@link GstVulkan.VulkanInstance}
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
        /**
         * Increases the refcount of the given handle by one.
         * @returns `buf`
         */
        ref(): VulkanHandle;
        /**
         * Decreases the refcount of the buffer. If the refcount reaches 0, the buffer
         * will be freed.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type VulkanHandlePoolClass = typeof VulkanHandlePool;
    /**
     * @gir-type Struct
     */
    abstract class VulkanHandleTypedef {
        static $gtype: GObject.GType<VulkanHandleTypedef>;
    }

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
     */
    class VulkanImageMemory {
        static $gtype: GObject.GType<VulkanImageMemory>;

        // Fields

        device: VulkanDevice;
        wrapped: boolean;
        notify: GLib.DestroyNotify;
        user_data: any;
        views: any[];
        outstanding_views: any[];

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
         * Initializes the Vulkan image memory allocator. It is safe to call this function
         * multiple times.  This must be called before any other {@link GstVulkan.VulkanImageMemory} operation.
         */
        static init_once(): void;

        // Methods

        /**
         * @param view a {@link GstVulkan.VulkanImageView}
         */
        add_view(view: VulkanImageView): void;
        /**
         * @param find_func {@link GstVulkan.VulkanImageMemoryFindViewFunc} to search with
         * @returns the first {@link GstVulkan.VulkanImageView} that `find_func` returns `true` for, or `null`
         */
        find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView;
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
         * @param usage
         * @param params
         * @param size
         * @param user_data
         */
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
     * @gir-type Alias
     */
    type VulkanImageMemoryAllocatorClass = typeof VulkanImageMemoryAllocator;
    /**
     * @gir-type Struct
     */
    class VulkanImageView {
        static $gtype: GObject.GType<VulkanImageView>;

        // Fields

        device: VulkanDevice;

        // Constructors

        constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo);

        static ['new'](image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView;

        // Methods

        /**
         * Increases the refcount of the given trash object by one.
         * @returns `trash`
         */
        ref(): VulkanImageView;
        /**
         * Decreases the refcount of the trash object. If the refcount reaches 0, the
         * trash will be freed.
         */
        unref(): void;
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
     */
    class VulkanMemory {
        static $gtype: GObject.GType<VulkanMemory>;

        // Fields

        device: VulkanDevice;
        map_count: number;

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
         * @param type_bits memory type bits to search for
         * @param properties memory properties to search for
         * @param type_index resulting index of the memory type
         */
        static find_memory_type_index_with_type_properties(
            device: VulkanDevice,
            type_bits: number,
            properties: Vulkan.MemoryPropertyFlags,
            type_index: number,
        ): boolean;
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
     */
    class VulkanTrash {
        static $gtype: GObject.GType<VulkanTrash>;

        // Fields

        cache: VulkanTrashList;
        notify: VulkanTrashNotify;
        user_data: any;

        // Constructors

        constructor(fence: VulkanFence);

        static ['new'](fence: VulkanFence): VulkanTrash;

        static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash;

        // Static methods

        /**
         * @param device
         * @param user_data
         */
        static mini_object_unref(device: VulkanDevice, user_data?: any | null): void;
        /**
         * @param device
         * @param user_data
         */
        static object_unref(device: VulkanDevice, user_data?: any | null): void;

        // Methods

        /**
         * Increases the refcount of the given trash object by one.
         * @returns `trash`
         */
        ref(): VulkanTrash;
        /**
         * Decreases the refcount of the trash object. If the refcount reaches 0, the
         * trash will be freed.
         */
        unref(): void;
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
