// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVulkan-1.0
 */

import type * as Gjs from './Gjs';
import type Vulkan from './Vulkan-1.0';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
enum VulkanError {
    FAILED,
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
enum VulkanWindowError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
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
const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string
const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string
const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string
const VULKAN_DEVICE_CONTEXT_TYPE_STR: string
const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string
const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string
const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string
const VULKAN_MAX_COMPONENTS: number
const VULKAN_MEMORY_ALLOCATOR_NAME: string
/**
 * The printf format specifier for raw Vulkan non dispatchable handles.
 */
const VULKAN_NON_DISPATCHABLE_HANDLE_FORMAT: string
const VULKAN_QUEUE_CONTEXT_TYPE_STR: string
const VULKAN_SWAPPER_VIDEO_FORMATS: string
function context_get_vulkan_device(context: Gst.Context, device: VulkanDevice): boolean
function context_get_vulkan_display(context: Gst.Context, display: VulkanDisplay): boolean
function context_get_vulkan_instance(context: Gst.Context, instance: VulkanInstance): boolean
function context_get_vulkan_queue(context: Gst.Context, queue: VulkanQueue): boolean
/**
 * Sets `device` on `context`
 * @param context a #GstContext
 * @param device a #GstVulkanDevice
 */
function context_set_vulkan_device(context: Gst.Context, device: VulkanDevice): void
/**
 * Sets `display` on `context`
 * @param context a #GstContext
 * @param display a #GstVulkanDisplay
 */
function context_set_vulkan_display(context: Gst.Context, display: VulkanDisplay): void
/**
 * Sets `instance` on `context`
 * @param context a #GstContext
 * @param instance a #GstVulkanInstance
 */
function context_set_vulkan_instance(context: Gst.Context, instance: VulkanInstance): void
/**
 * Sets `queue` on `context`
 * @param context a #GstContext
 * @param queue a #GstVulkanQueue
 */
function context_set_vulkan_queue(context: Gst.Context, queue: VulkanQueue): void
function is_vulkan_buffer_memory(mem: Gst.Memory): boolean
function is_vulkan_image_memory(mem: Gst.Memory): boolean
function is_vulkan_memory(mem: Gst.Memory): boolean
/**
 * Allocate a new #GstVulkanBufferMemory.
 * @param device a #GstVulkanDevice
 * @param size size of the new buffer
 * @param usage buffer usage flags
 * @param mem_prop_flags memory properties flags for the backing memory
 */
function vulkan_buffer_memory_alloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
/**
 * Initializes the Vulkan buffer memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
 */
function vulkan_buffer_memory_init_once(): void
/**
 * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
 * @param device a #GstVulkanDevice
 * @param buffer a #VkBuffer
 * @param usage usage flags of `buffer`
 * @param user_data user data to call `notify` with
 * @param notify a #GDestroyNotify called when `buffer` is no longer in use
 */
function vulkan_buffer_memory_wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, user_data: object | null, notify: GLib.DestroyNotify | null): Gst.Memory
function vulkan_create_shader(device: VulkanDevice, code: string, size: number): VulkanHandle
function vulkan_display_type_to_extension_string(type: VulkanDisplayType): string
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
 */
function vulkan_ensure_element_data(element: Gst.Element, display_ptr: VulkanDisplay, instance_ptr: VulkanInstance): [ /* returnType */ boolean, /* display_ptr */ VulkanDisplay, /* instance_ptr */ VulkanInstance ]
function vulkan_error_quark(): GLib.Quark
function vulkan_format_get_info(format: Vulkan.Format): VulkanFormatInfo
function vulkan_get_or_create_image_view(image: VulkanImageMemory): VulkanImageView
/**
 * Performs the steps necessary for executing a context query including
 * posting a message for the application to respond.
 * @param element a #GstElement
 * @param context_type the context type to query for
 */
function vulkan_global_context_query(element: Gst.Element, context_type: string): void
function vulkan_handle_context_query(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean
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
function vulkan_handle_set_context(element: Gst.Element, context: Gst.Context, display: VulkanDisplay, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay, /* instance */ VulkanInstance ]
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
function vulkan_image_memory_alloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
/**
 * Initializes the Vulkan image memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
 */
function vulkan_image_memory_init_once(): void
function vulkan_image_memory_wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, user_data: object | null, notify: GLib.DestroyNotify): Gst.Memory
/**
 * Performs the steps necessary for executing a context query between only
 * other elements in the pipeline
 * @param element a #GstElement
 * @param context_type the context type to query for
 */
function vulkan_local_context_query(element: Gst.Element, context_type: string): Gst.Query
/**
 * Allocated a new #GstVulkanMemory.
 * @param device a #GstVulkanDevice
 * @param memory_type_index the Vulkan memory type index
 * @param params a #GstAllocationParams
 * @param size the size to allocate
 * @param mem_prop_flags 
 */
function vulkan_memory_alloc(device: VulkanDevice, memory_type_index: number, params: Gst.AllocationParams, size: number, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
function vulkan_memory_find_memory_type_index_with_type_properties(device: VulkanDevice, type_bits: number, properties: Vulkan.MemoryPropertyFlags, type_index: number): boolean
function vulkan_memory_heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string
/**
 * Initializes the Vulkan memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanMemory operation.
 */
function vulkan_memory_init_once(): void
function vulkan_memory_property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string
function vulkan_run_query(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean
function vulkan_sample_count_flags_to_string(sample_count_bits: Vulkan.SampleCountFlags): string
function vulkan_trash_mini_object_unref(device: VulkanDevice, user_data: object | null): void
function vulkan_trash_object_unref(device: VulkanDevice, user_data: object | null): void
function vulkan_window_error_quark(): GLib.Quark
interface VulkanDeviceForEachQueueFunc {
    (device: VulkanDevice, queue: VulkanQueue): boolean
}
/**
 * Function definition called when the #GstVulkanHandle is no longer in use.
 * All implementations of this callback must free the internal handle stored
 * inside `handle`.
 * @callback 
 * @param handle the #GstVulkanHandle
 */
interface VulkanHandleDestroyNotify {
    (handle: VulkanHandle): void
}
/**
 * Function definition used to find views.  Return %TRUE if `view` matches the
 * criteria.
 * @callback 
 * @param view 
 */
interface VulkanImageMemoryFindViewFunc {
    (view: VulkanImageView): boolean
}
interface VulkanTrashListAdd {
    (trash_list: VulkanTrashList, trash: VulkanTrash): boolean
}
interface VulkanTrashListGC {
    (trash_list: VulkanTrashList): void
}
interface VulkanTrashListWait {
    (trash_list: VulkanTrashList, timeout: number): boolean
}
interface VulkanTrashNotify {
    (device: VulkanDevice): void
}
interface VulkanBufferMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}

interface VulkanBufferMemoryAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    parent: Gst.Allocator

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstVulkanBufferMemoryAllocator struct
 * @class 
 */
class VulkanBufferMemoryAllocator extends Gst.Allocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    static name: string
    static $gtype: GObject.GType<VulkanBufferMemoryAllocator>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    constructor(config?: VulkanBufferMemoryAllocator_ConstructProps) 
    _init(config?: VulkanBufferMemoryAllocator_ConstructProps): void
}

interface VulkanBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}

interface VulkanBufferPool {

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    bufferpool: Gst.BufferPool
    device: VulkanDevice

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque GstVulkanBufferPool struct
 * @class 
 */
class VulkanBufferPool extends Gst.BufferPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    static name: string
    static $gtype: GObject.GType<VulkanBufferPool>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    constructor(config?: VulkanBufferPool_ConstructProps) 
    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     */
    static new(): Gst.BufferPool
    _init(config?: VulkanBufferPool_ConstructProps): void
}

interface VulkanCommandPool_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanCommandPool {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    parent: Gst.Object
    queue: VulkanQueue
    pool: Vulkan.CommandPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    create(): VulkanCommandBuffer
    get_queue(): VulkanQueue
    /**
     * This should be called to ensure no other thread will attempt to access
     * the pool's internal resources.  Any modification of any of the allocated
     * #GstVulkanCommandBuffer's need to be encapsulated in a
     * gst_vulkan_command_pool_lock()/gst_vulkan_command_pool_unlock() pair to meet
     * the Vulkan API requirements that host access to the command pool is
     * externally synchronised.
     */
    lock(): void
    /**
     * See the documentation for gst_vulkan_command_pool_lock() for when you would
     * need to use this function.
     */
    unlock(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanCommandPool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    static name: string
    static $gtype: GObject.GType<VulkanCommandPool>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    constructor(config?: VulkanCommandPool_ConstructProps) 
    _init(config?: VulkanCommandPool_ConstructProps): void
}

interface VulkanDescriptorCache_ConstructProps extends VulkanHandlePool_ConstructProps {
}

interface VulkanDescriptorCache {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    parent: VulkanHandlePool
    pool: VulkanDescriptorPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    acquire(): VulkanDescriptorSet

    // Overloads of acquire

    acquire(): object | null
    acquire(...args: any[]): any
    acquire(...args: any[]): VulkanDescriptorSet | object | null | any

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanDescriptorCache extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    static name: string
    static $gtype: GObject.GType<VulkanDescriptorCache>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    constructor(config?: VulkanDescriptorCache_ConstructProps) 
    constructor(pool: VulkanDescriptorPool, n_layouts: number, layouts: VulkanHandle) 
    static new(pool: VulkanDescriptorPool, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorCache
    _init(config?: VulkanDescriptorCache_ConstructProps): void
}

interface VulkanDescriptorPool_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanDescriptorPool {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    parent: Gst.Object
    device: VulkanDevice
    pool: Vulkan.DescriptorPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    create(n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet
    get_device(): VulkanDevice
    get_max_sets(): number

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanDescriptorPool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    static name: string
    static $gtype: GObject.GType<VulkanDescriptorPool>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    constructor(config?: VulkanDescriptorPool_ConstructProps) 
    static new_wrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, max_sets: number): VulkanDescriptorPool
    _init(config?: VulkanDescriptorPool_ConstructProps): void
}

interface VulkanDevice_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanDevice

    physical_device?: VulkanPhysicalDevice | null
}

interface VulkanDevice {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDevice

    parent: Gst.Object
    instance: VulkanInstance
    physical_device: VulkanPhysicalDevice
    device: Vulkan.Device

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDevice

    create_fence(): VulkanFence
    /**
     * Iterate over each queue family available on #GstVulkanDevice
     */
    foreach_queue(): void
    get_instance(): VulkanInstance
    /**
     * Performs vkGetDeviceProcAddr() with `device` and `name`
     * @param name name of the function to retrieve
     */
    get_proc_address(name: string): object | null
    get_queue(queue_family: number, queue_i: number): VulkanQueue
    /**
     * Attempts to create the internal #VkDevice object.
     */
    open(): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDevice

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanDevice extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDevice

    static name: string
    static $gtype: GObject.GType<VulkanDevice>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDevice

    constructor(config?: VulkanDevice_ConstructProps) 
    constructor(physical_device: VulkanPhysicalDevice) 
    static new(physical_device: VulkanPhysicalDevice): VulkanDevice
    static new_with_index(instance: VulkanInstance, device_index: number): VulkanDevice
    _init(config?: VulkanDevice_ConstructProps): void
    /**
     * If a #GstVulkanDevice is requested in `query,` sets `device` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanDevice.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param device the #GstVulkanDevice
     */
    static handle_context_query(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean
    /**
     * Attempt to retrieve a #GstVulkanDevice using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param device a #GstVulkanDevice
     */
    static run_context_query(element: Gst.Element, device: VulkanDevice): [ /* returnType */ boolean, /* device */ VulkanDevice ]
}

interface VulkanDisplay_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanDisplay {

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDisplay

    create_window(): VulkanWindow
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstVulkanWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compare_func a comparison function to run
     */
    find_window(data: object | null, compare_func: GLib.CompareFunc): VulkanWindow
    get_handle(): object | null
    get_handle_type(): VulkanDisplayType
    remove_window(window: VulkanWindow): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanDisplay

    vfunc_create_window(): VulkanWindow
    vfunc_get_handle(): object | null

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDisplay

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The contents of a #GstVulkanDisplay are private and should only be accessed
 * through the provided API
 * @class 
 */
class VulkanDisplay extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplay

    static name: string
    static $gtype: GObject.GType<VulkanDisplay>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDisplay

    constructor(config?: VulkanDisplay_ConstructProps) 
    constructor(instance: VulkanInstance) 
    static new(instance: VulkanInstance): VulkanDisplay
    static new_with_type(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay
    _init(config?: VulkanDisplay_ConstructProps): void
    /**
     * This function will read the %GST_VULKAN_WINDOW environment variable for
     * a user choice or choose the first supported implementation.
     * @param instance a #GstVulkanInstance
     */
    static choose_type(instance: VulkanInstance): VulkanDisplayType
    /**
     * If a #GstVulkanDisplay is requested in `query,` sets `device` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanDisplay.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param display the #GstVulkanDisplay
     */
    static handle_context_query(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanDisplay using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param display a #GstVulkanDisplay
     */
    static run_context_query(element: Gst.Element, display: VulkanDisplay): [ /* returnType */ boolean, /* display */ VulkanDisplay ]
}

interface VulkanFenceCache_ConstructProps extends VulkanHandlePool_ConstructProps {
}

interface VulkanFenceCache {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    parent: VulkanHandlePool

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanFenceCache extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    static name: string
    static $gtype: GObject.GType<VulkanFenceCache>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    constructor(config?: VulkanFenceCache_ConstructProps) 
    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanFenceCache
    _init(config?: VulkanFenceCache_ConstructProps): void
}

interface VulkanFullScreenQuad_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanFullScreenQuad {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    parent: Gst.Object
    out_info: GstVideo.VideoInfo
    in_info: GstVideo.VideoInfo
    queue: VulkanQueue
    render_pass: VulkanHandle
    pipeline_layout: VulkanHandle
    graphics_pipeline: VulkanHandle
    descriptor_set_layout: VulkanHandle
    descriptor_cache: VulkanDescriptorCache
    descriptor_set: VulkanDescriptorSet
    framebuffer: VulkanHandle
    sampler: VulkanHandle
    cmd_pool: VulkanCommandPool
    trash_list: VulkanTrashList
    last_fence: VulkanFence

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    draw(): boolean
    fill_command_buffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean
    get_last_fence(): VulkanFence
    prepare_draw(fence: VulkanFence): boolean
    set_index_buffer(indices: Gst.Memory, n_indices: number): boolean
    set_info(in_info: GstVideo.VideoInfo, out_info: GstVideo.VideoInfo): boolean
    set_input_buffer(buffer: Gst.Buffer): boolean
    set_output_buffer(buffer: Gst.Buffer): boolean
    set_shaders(vert: VulkanHandle, frag: VulkanHandle): boolean
    set_uniform_buffer(uniforms: Gst.Memory): boolean
    set_vertex_buffer(vertices: Gst.Memory): boolean
    submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanFullScreenQuad extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    static name: string
    static $gtype: GObject.GType<VulkanFullScreenQuad>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    constructor(config?: VulkanFullScreenQuad_ConstructProps) 
    constructor(queue: VulkanQueue) 
    static new(queue: VulkanQueue): VulkanFullScreenQuad
    _init(config?: VulkanFullScreenQuad_ConstructProps): void
}

interface VulkanHandlePool_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanHandlePool {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    parent: Gst.Object
    device: VulkanDevice
    outstanding: object[]
    available: object[]

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    acquire(): object | null
    alloc(): object | null
    release(handle: object | null): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    vfunc_acquire(): object | null
    vfunc_alloc(): object | null
    vfunc_free(handle: object | null): void
    vfunc_release(handle: object | null): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanHandlePool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    static name: string
    static $gtype: GObject.GType<VulkanHandlePool>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    constructor(config?: VulkanHandlePool_ConstructProps) 
    _init(config?: VulkanHandlePool_ConstructProps): void
}

interface VulkanImageBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}

interface VulkanImageBufferPool {

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    bufferpool: Gst.BufferPool
    device: VulkanDevice

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque GstVulkanImageBufferPool struct
 * @class 
 */
class VulkanImageBufferPool extends Gst.BufferPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    static name: string
    static $gtype: GObject.GType<VulkanImageBufferPool>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    constructor(config?: VulkanImageBufferPool_ConstructProps) 
    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanImageBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     */
    static new(): Gst.BufferPool
    _init(config?: VulkanImageBufferPool_ConstructProps): void
}

interface VulkanImageMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}

interface VulkanImageMemoryAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    parent: Gst.Allocator

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstVulkanImageMemoryAllocator struct
 * @class 
 */
class VulkanImageMemoryAllocator extends Gst.Allocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    static name: string
    static $gtype: GObject.GType<VulkanImageMemoryAllocator>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    constructor(config?: VulkanImageMemoryAllocator_ConstructProps) 
    _init(config?: VulkanImageMemoryAllocator_ConstructProps): void
}

interface VulkanInstance_ConstructProps extends Gst.Object_ConstructProps {
}

/**
 * Signal callback interface for `create-device`
 */
interface VulkanInstance_CreateDeviceSignalCallback {
    ($obj: VulkanInstance): VulkanDevice
}

interface VulkanInstance {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanInstance

    parent: Gst.Object
    instance: Vulkan.Instance
    physical_devices: Vulkan.PhysicalDevice
    n_physical_devices: number
    msg_callback: Vulkan.DebugReportCallbackEXT

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanInstance

    create_device(): VulkanDevice
    /**
     * Performs vkGetInstanceProcAddr() with `instance` and `name`
     * @param name name of the function to retrieve
     */
    get_proc_address(name: string): object | null
    open(): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstVulkan-1.0.GstVulkan.VulkanInstance

    connect(sigName: "create-device", callback: VulkanInstance_CreateDeviceSignalCallback): number
    connect_after(sigName: "create-device", callback: VulkanInstance_CreateDeviceSignalCallback): number
    emit(sigName: "create-device", ...args: any[]): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanInstance

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanInstance extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstance

    static name: string
    static $gtype: GObject.GType<VulkanInstance>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanInstance

    constructor(config?: VulkanInstance_ConstructProps) 
    constructor() 
    static new(): VulkanInstance
    _init(config?: VulkanInstance_ConstructProps): void
    /**
     * If a #GstVulkanInstance is requested in `query,` sets `instance` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanInstance.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param instance the #GstVulkanInstance
     */
    static handle_context_query(element: Gst.Element, query: Gst.Query, instance: VulkanInstance | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanInstance using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param instance a #GstVulkanInstance
     */
    static run_context_query(element: Gst.Element, instance: VulkanInstance): [ /* returnType */ boolean, /* instance */ VulkanInstance ]
}

interface VulkanMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}

interface VulkanMemoryAllocator {

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    parent: Gst.Allocator

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstVulkanMemoryAllocator struct
 * @class 
 */
class VulkanMemoryAllocator extends Gst.Allocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    static name: string
    static $gtype: GObject.GType<VulkanMemoryAllocator>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    constructor(config?: VulkanMemoryAllocator_ConstructProps) 
    _init(config?: VulkanMemoryAllocator_ConstructProps): void
}

interface VulkanPhysicalDevice_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    device_index?: number | null
    instance?: VulkanInstance | null
}

interface VulkanPhysicalDevice {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    readonly name: string

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    parent: Gst.Object
    instance: VulkanInstance
    device_index: number
    device: Vulkan.PhysicalDevice
    device_layers: Vulkan.LayerProperties
    n_device_layers: number
    device_extensions: Vulkan.ExtensionProperties
    n_device_extensions: number
    properties: Vulkan.PhysicalDeviceProperties
    features: Vulkan.PhysicalDeviceFeatures
    memory_properties: Vulkan.PhysicalDeviceMemoryProperties
    queue_family_props: Vulkan.QueueFamilyProperties
    n_queue_families: number

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    get_instance(): VulkanInstance

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    connect(sigName: "notify::name", callback: (($obj: VulkanPhysicalDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VulkanPhysicalDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanPhysicalDevice extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    static name: string
    static $gtype: GObject.GType<VulkanPhysicalDevice>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    constructor(config?: VulkanPhysicalDevice_ConstructProps) 
    constructor(instance: VulkanInstance, device_index: number) 
    static new(instance: VulkanInstance, device_index: number): VulkanPhysicalDevice
    _init(config?: VulkanPhysicalDevice_ConstructProps): void
    static type_to_string(type: Vulkan.PhysicalDeviceType): string
}

interface VulkanQueue_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanQueue {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanQueue

    parent: Gst.Object
    device: VulkanDevice
    queue: Vulkan.Queue
    family: number
    index: number

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanQueue

    create_command_pool(): VulkanCommandPool
    get_device(): VulkanDevice
    /**
     * Locks the queue for command submission using `vkQueueSubmit()` to meet the
     * Vulkan requirements for externally synchronised resources.
     */
    submit_lock(): void
    /**
     * Unlocks the queue for command submission using `vkQueueSubmit()`.
     * 
     * See gst_vulkan_queue_submit_lock() for details on when this call is needed.
     */
    submit_unlock(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanQueue

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanQueue extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueue

    static name: string
    static $gtype: GObject.GType<VulkanQueue>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanQueue

    constructor(config?: VulkanQueue_ConstructProps) 
    _init(config?: VulkanQueue_ConstructProps): void
    static flags_to_string(queue_bits: Vulkan.QueueFlags): string
    /**
     * If a #GstVulkanQueue is requested in `query,` sets `queue` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanQueue.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param queue the #GstVulkanQueue
     */
    static handle_context_query(element: Gst.Element, query: Gst.Query, queue: VulkanQueue | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanQueue using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param queue a #GstVulkanQueue
     */
    static run_context_query(element: Gst.Element, queue: VulkanQueue): [ /* returnType */ boolean, /* queue */ VulkanQueue ]
}

interface VulkanSwapper_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    force_aspect_ratio?: boolean | null
    pixel_aspect_ratio?: Gst.Fraction | null
}

interface VulkanSwapper {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    force_aspect_ratio: boolean
    pixel_aspect_ratio: Gst.Fraction

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanSwapper

    parent: Gst.Object
    device: VulkanDevice
    window: VulkanWindow
    queue: VulkanQueue
    cmd_pool: VulkanCommandPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanSwapper

    choose_queue(available_queue: VulkanQueue): boolean
    get_supported_caps(): Gst.Caps
    get_surface_rectangles(): [ /* input_image */ GstVideo.VideoRectangle | null, /* surface_location */ GstVideo.VideoRectangle | null, /* display_rect */ GstVideo.VideoRectangle | null ]
    render_buffer(buffer: Gst.Buffer): boolean
    set_caps(caps: Gst.Caps): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanSwapper

    connect(sigName: "notify::force-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: (($obj: VulkanSwapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixel-aspect-ratio", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanSwapper extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    static name: string
    static $gtype: GObject.GType<VulkanSwapper>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanSwapper

    constructor(config?: VulkanSwapper_ConstructProps) 
    constructor(device: VulkanDevice, window: VulkanWindow) 
    static new(device: VulkanDevice, window: VulkanWindow): VulkanSwapper
    _init(config?: VulkanSwapper_ConstructProps): void
}

interface VulkanTrashFenceList_ConstructProps extends VulkanTrashList_ConstructProps {
}

interface VulkanTrashFenceList {

    // Conflicting properties

    parent: any

    // Conflicting methods

    acquire(...args: any[]): any
    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanTrashFenceList extends VulkanTrashList {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    static name: string
    static $gtype: GObject.GType<VulkanTrashFenceList>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    constructor(config?: VulkanTrashFenceList_ConstructProps) 
    constructor() 
    static new(): VulkanTrashFenceList
    _init(config?: VulkanTrashFenceList_ConstructProps): void
}

interface VulkanTrashList_ConstructProps extends VulkanHandlePool_ConstructProps {
}

interface VulkanTrashList {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashList

    parent: VulkanHandlePool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanTrashList

    acquire(fence?: VulkanFence, notify?: VulkanTrashNotify): VulkanTrash

    // Overloads of acquire

    acquire(): object | null
    acquire(...args: any[]): any
    acquire(...args: any[]): VulkanTrash | object | null | any
    add(trash: VulkanTrash): boolean
    gc(): void
    wait(timeout: number): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanTrashList

    vfunc_add_func(trash: VulkanTrash): boolean
    vfunc_gc_func(): void
    vfunc_wait_func(timeout: number): boolean

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanTrashList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanTrashList extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashList

    static name: string
    static $gtype: GObject.GType<VulkanTrashList>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanTrashList

    constructor(config?: VulkanTrashList_ConstructProps) 
    _init(config?: VulkanTrashList_ConstructProps): void
}

interface VulkanVideoFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}

interface VulkanVideoFilter {

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    parent: GstBase.BaseTransform
    instance: VulkanInstance
    device: VulkanDevice
    queue: VulkanQueue
    in_caps: Gst.Caps
    in_info: GstVideo.VideoInfo
    out_caps: Gst.Caps
    out_info: GstVideo.VideoInfo

    // Conflicting methods

    ref(...args: any[]): any
    vfunc_query(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    connect(sigName: "notify::qos", callback: (($obj: VulkanVideoFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VulkanVideoFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VulkanVideoFilter extends GstBase.BaseTransform {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    static name: string
    static $gtype: GObject.GType<VulkanVideoFilter>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    constructor(config?: VulkanVideoFilter_ConstructProps) 
    _init(config?: VulkanVideoFilter_ConstructProps): void
}

interface VulkanWindow_ConstructProps extends Gst.Object_ConstructProps {
}

/**
 * Signal callback interface for `close`
 */
interface VulkanWindow_CloseSignalCallback {
    ($obj: VulkanWindow): boolean
}

/**
 * Signal callback interface for `draw`
 */
interface VulkanWindow_DrawSignalCallback {
    ($obj: VulkanWindow): void
}

/**
 * Signal callback interface for `key-event`
 */
interface VulkanWindow_KeyEventSignalCallback {
    ($obj: VulkanWindow, id: string, key: string): void
}

/**
 * Signal callback interface for `mouse-event`
 */
interface VulkanWindow_MouseEventSignalCallback {
    ($obj: VulkanWindow, id: string, button: number, x: number, y: number): void
}

/**
 * Signal callback interface for `resize`
 */
interface VulkanWindow_ResizeSignalCallback {
    ($obj: VulkanWindow, object: number, p0: number): void
}

interface VulkanWindow {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindow

    readonly display: VulkanDisplay

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanWindow

    /**
     * Attempt to close the window.
     */
    close(): void
    get_display(): VulkanDisplay
    get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean
    get_surface_dimensions(width: number, height: number): void
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @param handle_events a #gboolean indicating if events should be handled or not.
     */
    handle_events(handle_events: boolean): void
    open(): boolean
    /**
     * Ask the `window` to redraw its contents
     */
    redraw(): void
    /**
     * Resize the output surface.
     * 
     * Currently intended for subclasses to update internal state.
     * @param width the new width
     * @param height the new height
     */
    resize(width: number, height: number): void
    send_key_event(event_type: string, key_str: string): void
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void
    set_window_handle(handle: number): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanWindow

    /**
     * Attempt to close the window.
     * @virtual 
     */
    vfunc_close(): void
    vfunc_get_presentation_support(device: VulkanDevice, queue_family_idx: number): boolean
    vfunc_get_surface_dimensions(width: number, height: number): void
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @virtual 
     * @param handle_events a #gboolean indicating if events should be handled or not.
     */
    vfunc_handle_events(handle_events: boolean): void
    vfunc_open(): boolean
    vfunc_set_window_handle(handle: number): void

    // Own signals of GstVulkan-1.0.GstVulkan.VulkanWindow

    connect(sigName: "close", callback: VulkanWindow_CloseSignalCallback): number
    connect_after(sigName: "close", callback: VulkanWindow_CloseSignalCallback): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "draw", callback: VulkanWindow_DrawSignalCallback): number
    connect_after(sigName: "draw", callback: VulkanWindow_DrawSignalCallback): number
    emit(sigName: "draw", ...args: any[]): void
    connect(sigName: "key-event", callback: VulkanWindow_KeyEventSignalCallback): number
    connect_after(sigName: "key-event", callback: VulkanWindow_KeyEventSignalCallback): number
    emit(sigName: "key-event", id: string, key: string, ...args: any[]): void
    connect(sigName: "mouse-event", callback: VulkanWindow_MouseEventSignalCallback): number
    connect_after(sigName: "mouse-event", callback: VulkanWindow_MouseEventSignalCallback): number
    emit(sigName: "mouse-event", id: string, button: number, x: number, y: number, ...args: any[]): void
    connect(sigName: "resize", callback: VulkanWindow_ResizeSignalCallback): number
    connect_after(sigName: "resize", callback: VulkanWindow_ResizeSignalCallback): number
    emit(sigName: "resize", object: number, p0: number, ...args: any[]): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanWindow

    connect(sigName: "notify::display", callback: (($obj: VulkanWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: VulkanWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstVulkanWindow is an opaque struct and should only be accessed through the
 * provided api.
 * @class 
 */
class VulkanWindow extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindow

    static name: string
    static $gtype: GObject.GType<VulkanWindow>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanWindow

    constructor(config?: VulkanWindow_ConstructProps) 
    constructor(display: VulkanDisplay) 
    static new(display: VulkanDisplay): VulkanWindow
    _init(config?: VulkanWindow_ConstructProps): void
}

interface VulkanBarrierBufferInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBarrierBufferInfo

    parent: VulkanBarrierMemoryInfo
    offset: Vulkan.DeviceSize
    size: Vulkan.DeviceSize
}

class VulkanBarrierBufferInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBarrierBufferInfo

    static name: string
}

interface VulkanBarrierImageInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBarrierImageInfo

    parent: VulkanBarrierMemoryInfo
    image_layout: Vulkan.ImageLayout
    subresource_range: Vulkan.ImageSubresourceRange
}

class VulkanBarrierImageInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBarrierImageInfo

    static name: string
}

interface VulkanBarrierMemoryInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBarrierMemoryInfo

    type: VulkanBarrierType
    flags: VulkanBarrierFlags
    queue: VulkanQueue
    pipeline_stages: Vulkan.PipelineStageFlags
    access_flags: Vulkan.AccessFlags
}

class VulkanBarrierMemoryInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBarrierMemoryInfo

    static name: string
}

interface VulkanBufferMemory {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemory

    parent: Gst.Memory
    device: VulkanDevice
    buffer: Vulkan.Buffer
    vk_mem: VulkanMemory
    requirements: Vulkan.MemoryRequirements
    usage: Vulkan.BufferUsageFlags
    barrier: VulkanBarrierBufferInfo
    lock: GLib.Mutex
    wrapped: boolean
    notify: GLib.DestroyNotify
    user_data: object
}

class VulkanBufferMemory {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemory

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanBufferMemory

    /**
     * Allocate a new #GstVulkanBufferMemory.
     * @param device a #GstVulkanDevice
     * @param size size of the new buffer
     * @param usage buffer usage flags
     * @param mem_prop_flags memory properties flags for the backing memory
     */
    static alloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
    /**
     * Initializes the Vulkan buffer memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
     */
    static init_once(): void
    /**
     * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
     * @param device a #GstVulkanDevice
     * @param buffer a #VkBuffer
     * @param usage usage flags of `buffer`
     * @param user_data user data to call `notify` with
     * @param notify a #GDestroyNotify called when `buffer` is no longer in use
     */
    static wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, user_data: object | null, notify: GLib.DestroyNotify | null): Gst.Memory
}

interface VulkanBufferMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocatorClass

    parent_class: Gst.AllocatorClass
}

/**
 * The #GstVulkanBufferMemoryAllocatorClass only contains private data
 * @record 
 */
abstract class VulkanBufferMemoryAllocatorClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocatorClass

    static name: string
}

interface VulkanBufferPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferPoolClass

    parent_class: Gst.BufferPoolClass
}

/**
 * The #GstVulkanBufferPoolClass structure contains only private data
 * @record 
 */
abstract class VulkanBufferPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPoolClass

    static name: string
}

interface VulkanBufferPoolPrivate {
}

class VulkanBufferPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPoolPrivate

    static name: string
}

interface VulkanCommandBuffer {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer

    parent: Gst.MiniObject
    cmd: Vulkan.CommandBuffer
    pool: VulkanCommandPool
    level: Vulkan.CommandBufferLevel
    lock: GLib.Mutex
}

class VulkanCommandBuffer {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer

    static new_wrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer
}

interface VulkanCommandPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanCommandPoolClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanCommandPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPoolClass

    static name: string
}

interface VulkanCommandPoolPrivate {
}

class VulkanCommandPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPoolPrivate

    static name: string
}

interface VulkanDescriptorCacheClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorCacheClass

    parent_class: VulkanHandlePoolClass
}

abstract class VulkanDescriptorCacheClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCacheClass

    static name: string
}

interface VulkanDescriptorCachePrivate {
}

class VulkanDescriptorCachePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCachePrivate

    static name: string
}

interface VulkanDescriptorPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanDescriptorPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolClass

    static name: string
}

interface VulkanDescriptorPoolPrivate {
}

class VulkanDescriptorPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolPrivate

    static name: string
}

interface VulkanDescriptorSet {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    parent: Gst.MiniObject
    set: Vulkan.DescriptorSet
    pool: VulkanDescriptorPool
    cache: VulkanDescriptorCache
    n_layouts: number
    layouts: VulkanHandle
    lock: GLib.Mutex
}

class VulkanDescriptorSet {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    static new_wrapped(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, n_layouts: number, layouts: VulkanHandle): VulkanDescriptorSet
}

interface VulkanDescriptorSetClass {
}

class VulkanDescriptorSetClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSetClass

    static name: string
}

interface VulkanDescriptorSetPrivate {
}

class VulkanDescriptorSetPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSetPrivate

    static name: string
}

interface VulkanDeviceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDeviceClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanDeviceClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDeviceClass

    static name: string
}

interface VulkanDevicePrivate {
}

class VulkanDevicePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDevicePrivate

    static name: string
}

interface VulkanDisplayClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDisplayClass

    object_class: Gst.ObjectClass
    get_handle: (display: VulkanDisplay) => object | null
    create_window: (display: VulkanDisplay) => VulkanWindow
}

abstract class VulkanDisplayClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplayClass

    static name: string
}

interface VulkanDisplayPrivate {
}

class VulkanDisplayPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplayPrivate

    static name: string
}

interface VulkanFence {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFence

    parent: Gst.MiniObject
    device: VulkanDevice
    cache: VulkanFenceCache
    fence: Vulkan.Fence

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanFence

    is_signaled(): boolean
    reset(): void
}

class VulkanFence {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFence

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFence

    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanFence
    static new_always_signalled(device: VulkanDevice): VulkanFence
}

interface VulkanFenceCacheClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFenceCacheClass

    parent_class: VulkanHandlePoolClass
}

abstract class VulkanFenceCacheClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFenceCacheClass

    static name: string
}

interface VulkanFormatInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFormatInfo

    /**
     * the Vulkan format being described
     * @field 
     */
    format: Vulkan.Format
    /**
     * name of this format
     * @field 
     */
    name: string
    /**
     * how raw data is interpreted and scaled
     * `n_components;` number of components in this format
     * @field 
     */
    scaling: VulkanFormatScaling
    flags: VulkanFormatFlags
    bits: number
    n_components: number
    shift: Uint8Array
    depth: Uint8Array
    pixel_stride: Uint8Array
    n_planes: number
    plane: Uint8Array
    poffset: Uint8Array
    w_sub: Uint8Array
    h_sub: Uint8Array
}

class VulkanFormatInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFormatInfo

    static name: string
}

interface VulkanFullScreenQuadClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanFullScreenQuadClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadClass

    static name: string
}

interface VulkanFullScreenQuadPrivate {
}

class VulkanFullScreenQuadPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadPrivate

    static name: string
}

interface VulkanHandle {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanHandle

    /**
     * the parent #GstMiniObject
     * @field 
     */
    parent: Gst.MiniObject
    /**
     * the #GstVulkanDevice for this handle
     * @field 
     */
    device: VulkanDevice
    /**
     * the type of handle
     * @field 
     */
    type: VulkanHandleType
    /**
     * the handle value
     * @field 
     */
    handle: VulkanHandleTypedef
    notify: VulkanHandleDestroyNotify
    user_data: object

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanHandle

    /**
     * Frees the descriptor set layout in `handle`
     * @param user_data callback user data
     */
    free_descriptor_set_layout(user_data: object | null): void
    /**
     * Frees the framebuffer in `handle`
     * @param user_data callback user data
     */
    free_framebuffer(user_data: object | null): void
    /**
     * Frees the pipeline in `handle`
     * @param user_data callback user data
     */
    free_pipeline(user_data: object | null): void
    /**
     * Frees the pipeline layout in `handle`
     * @param user_data callback user data
     */
    free_pipeline_layout(user_data: object | null): void
    /**
     * Frees the render pass in `handle`
     * @param user_data callback user data
     */
    free_render_pass(user_data: object | null): void
    /**
     * Frees the sampler in `handle`
     * @param user_data callback user data
     */
    free_sampler(user_data: object | null): void
    /**
     * Frees the shader in `handle`
     * @param user_data callback user data
     */
    free_shader(user_data: object | null): void
}

/**
 * Holds information about a vulkan non dispatchable handle
 * @record 
 */
class VulkanHandle {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandle

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanHandle

    static new_wrapped(device: VulkanDevice, type: VulkanHandleType, handle: VulkanHandleTypedef, notify: VulkanHandleDestroyNotify): VulkanHandle
    static context_query(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean
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
    static set_context(element: Gst.Element, context: Gst.Context, display: VulkanDisplay, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay, /* instance */ VulkanInstance ]
}

interface VulkanHandlePoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanHandlePoolClass

    parent: Gst.ObjectClass
    alloc: (pool: VulkanHandlePool) => object | null
    acquire: (pool: VulkanHandlePool) => object | null
    release: (pool: VulkanHandlePool, handle: object | null) => void
    free: (pool: VulkanHandlePool, handle: object | null) => void
}

abstract class VulkanHandlePoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandlePoolClass

    static name: string
}

interface VulkanHandleTypedef {
}

class VulkanHandleTypedef {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandleTypedef

    static name: string
}

interface VulkanImageBufferPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolClass

    parent_class: Gst.BufferPoolClass
}

/**
 * The #GstVulkanImageBufferPoolClass structure contains only private data
 * @record 
 */
abstract class VulkanImageBufferPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolClass

    static name: string
}

interface VulkanImageBufferPoolPrivate {
}

class VulkanImageBufferPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolPrivate

    static name: string
}

interface VulkanImageMemory {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageMemory

    parent: Gst.Memory
    device: VulkanDevice
    image: Vulkan.Image
    vk_mem: VulkanMemory
    create_info: Vulkan.ImageCreateInfo
    requirements: Vulkan.MemoryRequirements
    format_properties: Vulkan.ImageFormatProperties
    usage: Vulkan.ImageUsageFlags
    barrier: VulkanBarrierImageInfo
    lock: GLib.Mutex
    wrapped: boolean
    notify: GLib.DestroyNotify
    user_data: object
    views: object[]
    outstanding_views: object[]
    _padding: object[]

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanImageMemory

    add_view(view: VulkanImageView): void
    find_view(find_func: VulkanImageMemoryFindViewFunc): VulkanImageView
    get_height(): number
    get_width(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory, device: VulkanDevice, usage: Vulkan.ImageUsageFlags, params: Gst.AllocationParams, size: number, user_data: object | null, notify: GLib.DestroyNotify): boolean
}

class VulkanImageMemory {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageMemory

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageMemory

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
    static alloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
    /**
     * Initializes the Vulkan image memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
     */
    static init_once(): void
    static wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, user_data: object | null, notify: GLib.DestroyNotify): Gst.Memory
}

interface VulkanImageMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocatorClass

    parent_class: Gst.AllocatorClass
}

/**
 * The #GstVulkanImageMemoryAllocatorClass only contains private data
 * @record 
 */
abstract class VulkanImageMemoryAllocatorClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocatorClass

    static name: string
}

interface VulkanImageView {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageView

    parent: Gst.MiniObject
    device: VulkanDevice
    image: VulkanImageMemory
    view: Vulkan.ImageView
    create_info: Vulkan.ImageViewCreateInfo
}

class VulkanImageView {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageView

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageView

    constructor(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo) 
    static new(image: VulkanImageMemory, create_info: Vulkan.ImageViewCreateInfo): VulkanImageView
}

interface VulkanInstanceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanInstanceClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanInstanceClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstanceClass

    static name: string
}

interface VulkanInstancePrivate {
}

class VulkanInstancePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstancePrivate

    static name: string
}

interface VulkanMemory {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemory

    mem: Gst.Memory
    device: VulkanDevice
    mem_ptr: Vulkan.DeviceMemory
    lock: GLib.Mutex
    map_count: number
}

class VulkanMemory {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemory

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanMemory

    /**
     * Allocated a new #GstVulkanMemory.
     * @param device a #GstVulkanDevice
     * @param memory_type_index the Vulkan memory type index
     * @param params a #GstAllocationParams
     * @param size the size to allocate
     * @param mem_prop_flags 
     */
    static alloc(device: VulkanDevice, memory_type_index: number, params: Gst.AllocationParams, size: number, mem_prop_flags: Vulkan.MemoryPropertyFlags): Gst.Memory
    static find_memory_type_index_with_type_properties(device: VulkanDevice, type_bits: number, properties: Vulkan.MemoryPropertyFlags, type_index: number): boolean
    static heap_flags_to_string(prop_bits: Vulkan.MemoryHeapFlags): string
    /**
     * Initializes the Vulkan memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanMemory operation.
     */
    static init_once(): void
    static property_flags_to_string(prop_bits: Vulkan.MemoryPropertyFlags): string
}

interface VulkanMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocatorClass

    parent_class: Gst.AllocatorClass
}

/**
 * The #GstVulkanMemoryAllocatorClass only contains private data
 * @record 
 */
abstract class VulkanMemoryAllocatorClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocatorClass

    static name: string
}

interface VulkanPhysicalDeviceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanPhysicalDeviceClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanPhysicalDeviceClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDeviceClass

    static name: string
}

interface VulkanPhysicalDevicePrivate {
}

class VulkanPhysicalDevicePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevicePrivate

    static name: string
}

interface VulkanQueueClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanQueueClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanQueueClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueueClass

    static name: string
}

interface VulkanQueuePrivate {
}

class VulkanQueuePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueuePrivate

    static name: string
}

interface VulkanSwapperClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanSwapperClass

    parent_class: Gst.ObjectClass
}

abstract class VulkanSwapperClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapperClass

    static name: string
}

interface VulkanSwapperPrivate {
}

class VulkanSwapperPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapperPrivate

    static name: string
}

interface VulkanTrash {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrash

    parent: Gst.MiniObject
    cache: VulkanTrashList
    fence: VulkanFence
    notify: VulkanTrashNotify
    user_data: object
}

class VulkanTrash {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrash

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanTrash

    /**
     * Create and return a new #GstVulkanTrash object that will stores a callback
     * to call when `fence` is signalled.
     * @constructor 
     * @param fence a #GstVulkanFence
     */
    constructor(fence: VulkanFence) 
    /**
     * Create and return a new #GstVulkanTrash object that will stores a callback
     * to call when `fence` is signalled.
     * @constructor 
     * @param fence a #GstVulkanFence
     */
    static new(fence: VulkanFence): VulkanTrash
    static new_free_semaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash
    static mini_object_unref(device: VulkanDevice, user_data: object | null): void
    static object_unref(device: VulkanDevice, user_data: object | null): void
}

interface VulkanTrashFenceListClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass

    parent_class: VulkanTrashListClass
}

abstract class VulkanTrashFenceListClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass

    static name: string
}

interface VulkanTrashListClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashListClass

    parent_class: VulkanHandlePoolClass
    add_func: VulkanTrashListAdd
    gc_func: VulkanTrashListGC
    wait_func: VulkanTrashListWait
    _padding: object[]
}

abstract class VulkanTrashListClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashListClass

    static name: string
}

interface VulkanVideoFilterClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanVideoFilterClass

    video_sink_class: GstBase.BaseTransformClass
}

abstract class VulkanVideoFilterClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanVideoFilterClass

    static name: string
}

interface VulkanWindowClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanWindowClass

    /**
     * Parent class
     * @field 
     */
    parent_class: Gst.ObjectClass
    open: (window: VulkanWindow) => boolean
    close: (window: VulkanWindow) => void
    get_presentation_support: (window: VulkanWindow, device: VulkanDevice, queue_family_idx: number) => boolean
    set_window_handle: (window: VulkanWindow, handle: number) => void
    get_surface_dimensions: (window: VulkanWindow, width: number, height: number) => void
    handle_events: (window: VulkanWindow, handle_events: boolean) => void
}

abstract class VulkanWindowClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindowClass

    static name: string
}

interface VulkanWindowPrivate {
}

class VulkanWindowPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindowPrivate

    static name: string
}

}
export default GstVulkan;