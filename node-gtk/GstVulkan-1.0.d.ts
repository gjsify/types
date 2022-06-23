// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVulkan-1.0
 */

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
function contextGetVulkanDevice(context: Gst.Context, device: VulkanDevice): boolean
function contextGetVulkanDisplay(context: Gst.Context, display: VulkanDisplay): boolean
function contextGetVulkanInstance(context: Gst.Context, instance: VulkanInstance): boolean
function contextGetVulkanQueue(context: Gst.Context, queue: VulkanQueue): boolean
/**
 * Sets `device` on `context`
 * @param context a #GstContext
 * @param device a #GstVulkanDevice
 */
function contextSetVulkanDevice(context: Gst.Context, device: VulkanDevice): void
/**
 * Sets `display` on `context`
 * @param context a #GstContext
 * @param display a #GstVulkanDisplay
 */
function contextSetVulkanDisplay(context: Gst.Context, display: VulkanDisplay): void
/**
 * Sets `instance` on `context`
 * @param context a #GstContext
 * @param instance a #GstVulkanInstance
 */
function contextSetVulkanInstance(context: Gst.Context, instance: VulkanInstance): void
/**
 * Sets `queue` on `context`
 * @param context a #GstContext
 * @param queue a #GstVulkanQueue
 */
function contextSetVulkanQueue(context: Gst.Context, queue: VulkanQueue): void
function isVulkanBufferMemory(mem: Gst.Memory): boolean
function isVulkanImageMemory(mem: Gst.Memory): boolean
function isVulkanMemory(mem: Gst.Memory): boolean
/**
 * Allocate a new #GstVulkanBufferMemory.
 * @param device a #GstVulkanDevice
 * @param size size of the new buffer
 * @param usage buffer usage flags
 * @param memPropFlags memory properties flags for the backing memory
 */
function vulkanBufferMemoryAlloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
/**
 * Initializes the Vulkan buffer memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
 */
function vulkanBufferMemoryInitOnce(): void
/**
 * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
 * @param device a #GstVulkanDevice
 * @param buffer a #VkBuffer
 * @param usage usage flags of `buffer`
 * @param userData user data to call `notify` with
 * @param notify a #GDestroyNotify called when `buffer` is no longer in use
 */
function vulkanBufferMemoryWrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, userData: object | null, notify: GLib.DestroyNotify | null): Gst.Memory
function vulkanCreateShader(device: VulkanDevice, code: string, size: number): VulkanHandle
function vulkanDisplayTypeToExtensionString(type: VulkanDisplayType): string
/**
 * Perform the steps necessary for retrieving a #GstVulkanInstance and
 * (optionally) an #GstVulkanDisplay from the surrounding elements or from
 * the application using the #GstContext mechanism.
 * 
 * If the contents of `display_ptr` or `instance_ptr` are not %NULL, then no
 * #GstContext query is necessary and no #GstVulkanInstance or #GstVulkanDisplay
 * retrieval is performed.
 * @param element a #GstElement
 * @param displayPtr the resulting #GstVulkanDisplay
 * @param instancePtr the resulting #GstVulkanInstance
 */
function vulkanEnsureElementData(element: Gst.Element, displayPtr: VulkanDisplay, instancePtr: VulkanInstance): [ /* returnType */ boolean, /* displayPtr */ VulkanDisplay, /* instancePtr */ VulkanInstance ]
function vulkanErrorQuark(): GLib.Quark
function vulkanFormatGetInfo(format: Vulkan.Format): VulkanFormatInfo
function vulkanGetOrCreateImageView(image: VulkanImageMemory): VulkanImageView
/**
 * Performs the steps necessary for executing a context query including
 * posting a message for the application to respond.
 * @param element a #GstElement
 * @param contextType the context type to query for
 */
function vulkanGlobalContextQuery(element: Gst.Element, contextType: string): void
function vulkanHandleContextQuery(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean
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
function vulkanHandleSetContext(element: Gst.Element, context: Gst.Context, display: VulkanDisplay, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay, /* instance */ VulkanInstance ]
/**
 * Allocated a new #GstVulkanImageMemory.
 * @param device a #GstVulkanDevice
 * @param format the VkFormat for the new image
 * @param width width for the new image
 * @param height height for the new image
 * @param tiling tiling for the new image
 * @param usage usage flags for the new image
 * @param memPropFlags VkDeviceMemory property flags for the new image
 */
function vulkanImageMemoryAlloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
/**
 * Initializes the Vulkan image memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
 */
function vulkanImageMemoryInitOnce(): void
function vulkanImageMemoryWrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, userData: object | null, notify: GLib.DestroyNotify): Gst.Memory
/**
 * Performs the steps necessary for executing a context query between only
 * other elements in the pipeline
 * @param element a #GstElement
 * @param contextType the context type to query for
 */
function vulkanLocalContextQuery(element: Gst.Element, contextType: string): Gst.Query
/**
 * Allocated a new #GstVulkanMemory.
 * @param device a #GstVulkanDevice
 * @param memoryTypeIndex the Vulkan memory type index
 * @param params a #GstAllocationParams
 * @param size the size to allocate
 * @param memPropFlags 
 */
function vulkanMemoryAlloc(device: VulkanDevice, memoryTypeIndex: number, params: Gst.AllocationParams, size: number, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
function vulkanMemoryFindMemoryTypeIndexWithTypeProperties(device: VulkanDevice, typeBits: number, properties: Vulkan.MemoryPropertyFlags, typeIndex: number): boolean
function vulkanMemoryHeapFlagsToString(propBits: Vulkan.MemoryHeapFlags): string
/**
 * Initializes the Vulkan memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanMemory operation.
 */
function vulkanMemoryInitOnce(): void
function vulkanMemoryPropertyFlagsToString(propBits: Vulkan.MemoryPropertyFlags): string
function vulkanRunQuery(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean
function vulkanSampleCountFlagsToString(sampleCountBits: Vulkan.SampleCountFlags): string
function vulkanTrashMiniObjectUnref(device: VulkanDevice, userData: object | null): void
function vulkanTrashObjectUnref(device: VulkanDevice, userData: object | null): void
function vulkanWindowErrorQuark(): GLib.Quark
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
    (trashList: VulkanTrashList, trash: VulkanTrash): boolean
}
interface VulkanTrashListGC {
    (trashList: VulkanTrashList): void
}
interface VulkanTrashListWait {
    (trashList: VulkanTrashList, timeout: number): boolean
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getQueue(): VulkanQueue
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VulkanDescriptorCache extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    static name: string
    static $gtype: GObject.GType<VulkanDescriptorCache>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    constructor(config?: VulkanDescriptorCache_ConstructProps) 
    constructor(pool: VulkanDescriptorPool, nLayouts: number, layouts: VulkanHandle) 
    static new(pool: VulkanDescriptorPool, nLayouts: number, layouts: VulkanHandle): VulkanDescriptorCache
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

    create(nLayouts: number, layouts: VulkanHandle): VulkanDescriptorSet
    getDevice(): VulkanDevice
    getMaxSets(): number

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VulkanDescriptorPool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    static name: string
    static $gtype: GObject.GType<VulkanDescriptorPool>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    constructor(config?: VulkanDescriptorPool_ConstructProps) 
    static newWrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, maxSets: number): VulkanDescriptorPool
    _init(config?: VulkanDescriptorPool_ConstructProps): void
}

interface VulkanDevice_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanDevice

    physicalDevice?: VulkanPhysicalDevice | null
}

interface VulkanDevice {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDevice

    parent: Gst.Object
    instance: VulkanInstance
    physicalDevice: VulkanPhysicalDevice
    device: Vulkan.Device

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDevice

    createFence(): VulkanFence
    /**
     * Iterate over each queue family available on #GstVulkanDevice
     */
    foreachQueue(): void
    getInstance(): VulkanInstance
    /**
     * Performs vkGetDeviceProcAddr() with `device` and `name`
     * @param name name of the function to retrieve
     */
    getProcAddress(name: string): object | null
    getQueue(queueFamily: number, queueI: number): VulkanQueue
    /**
     * Attempts to create the internal #VkDevice object.
     */
    open(): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDevice

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VulkanDevice extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDevice

    static name: string
    static $gtype: GObject.GType<VulkanDevice>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDevice

    constructor(config?: VulkanDevice_ConstructProps) 
    constructor(physicalDevice: VulkanPhysicalDevice) 
    static new(physicalDevice: VulkanPhysicalDevice): VulkanDevice
    static newWithIndex(instance: VulkanInstance, deviceIndex: number): VulkanDevice
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
    static handleContextQuery(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean
    /**
     * Attempt to retrieve a #GstVulkanDevice using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param device a #GstVulkanDevice
     */
    static runContextQuery(element: Gst.Element, device: VulkanDevice): [ /* returnType */ boolean, /* device */ VulkanDevice ]
}

interface VulkanDisplay_ConstructProps extends Gst.Object_ConstructProps {
}

interface VulkanDisplay {

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDisplay

    createWindow(): VulkanWindow
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstVulkanWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compareFunc a comparison function to run
     */
    findWindow(data: object | null, compareFunc: GLib.CompareFunc): VulkanWindow
    getHandle(): object | null
    getHandleType(): VulkanDisplayType
    removeWindow(window: VulkanWindow): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDisplay

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newWithType(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay
    _init(config?: VulkanDisplay_ConstructProps): void
    /**
     * This function will read the %GST_VULKAN_WINDOW environment variable for
     * a user choice or choose the first supported implementation.
     * @param instance a #GstVulkanInstance
     */
    static chooseType(instance: VulkanInstance): VulkanDisplayType
    /**
     * If a #GstVulkanDisplay is requested in `query,` sets `device` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanDisplay.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param display the #GstVulkanDisplay
     */
    static handleContextQuery(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanDisplay using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param display a #GstVulkanDisplay
     */
    static runContextQuery(element: Gst.Element, display: VulkanDisplay): [ /* returnType */ boolean, /* display */ VulkanDisplay ]
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    outInfo: GstVideo.VideoInfo
    inInfo: GstVideo.VideoInfo
    queue: VulkanQueue
    renderPass: VulkanHandle
    pipelineLayout: VulkanHandle
    graphicsPipeline: VulkanHandle
    descriptorSetLayout: VulkanHandle
    descriptorCache: VulkanDescriptorCache
    descriptorSet: VulkanDescriptorSet
    framebuffer: VulkanHandle
    sampler: VulkanHandle
    cmdPool: VulkanCommandPool
    trashList: VulkanTrashList
    lastFence: VulkanFence

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    draw(): boolean
    fillCommandBuffer(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean
    getLastFence(): VulkanFence
    prepareDraw(fence: VulkanFence): boolean
    setIndexBuffer(indices: Gst.Memory, nIndices: number): boolean
    setInfo(inInfo: GstVideo.VideoInfo, outInfo: GstVideo.VideoInfo): boolean
    setInputBuffer(buffer: Gst.Buffer): boolean
    setOutputBuffer(buffer: Gst.Buffer): boolean
    setShaders(vert: VulkanHandle, frag: VulkanHandle): boolean
    setUniformBuffer(uniforms: Gst.Memory): boolean
    setVertexBuffer(vertices: Gst.Memory): boolean
    submit(cmd: VulkanCommandBuffer, fence: VulkanFence): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): VulkanDevice
}

interface VulkanInstance {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanInstance

    parent: Gst.Object
    instance: Vulkan.Instance
    physicalDevices: Vulkan.PhysicalDevice
    nPhysicalDevices: number
    msgCallback: Vulkan.DebugReportCallbackEXT

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanInstance

    createDevice(): VulkanDevice
    /**
     * Performs vkGetInstanceProcAddr() with `instance` and `name`
     * @param name name of the function to retrieve
     */
    getProcAddress(name: string): object | null
    open(): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstVulkan-1.0.GstVulkan.VulkanInstance

    connect(sigName: "create-device", callback: VulkanInstance_CreateDeviceSignalCallback): number
    on(sigName: "create-device", callback: VulkanInstance_CreateDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-device", callback: VulkanInstance_CreateDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-device", callback: VulkanInstance_CreateDeviceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-device", ...args: any[]): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanInstance

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static handleContextQuery(element: Gst.Element, query: Gst.Query, instance: VulkanInstance | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanInstance using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param instance a #GstVulkanInstance
     */
    static runContextQuery(element: Gst.Element, instance: VulkanInstance): [ /* returnType */ boolean, /* instance */ VulkanInstance ]
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    deviceIndex?: number | null
    instance?: VulkanInstance | null
}

interface VulkanPhysicalDevice {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    readonly name: string

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    parent: Gst.Object
    instance: VulkanInstance
    deviceIndex: number
    device: Vulkan.PhysicalDevice
    deviceLayers: Vulkan.LayerProperties
    nDeviceLayers: number
    deviceExtensions: Vulkan.ExtensionProperties
    nDeviceExtensions: number
    properties: Vulkan.PhysicalDeviceProperties
    features: Vulkan.PhysicalDeviceFeatures
    memoryProperties: Vulkan.PhysicalDeviceMemoryProperties
    queueFamilyProps: Vulkan.QueueFamilyProperties
    nQueueFamilies: number

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    getInstance(): VulkanInstance

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VulkanPhysicalDevice extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    static name: string
    static $gtype: GObject.GType<VulkanPhysicalDevice>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    constructor(config?: VulkanPhysicalDevice_ConstructProps) 
    constructor(instance: VulkanInstance, deviceIndex: number) 
    static new(instance: VulkanInstance, deviceIndex: number): VulkanPhysicalDevice
    _init(config?: VulkanPhysicalDevice_ConstructProps): void
    static typeToString(type: Vulkan.PhysicalDeviceType): string
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

    createCommandPool(): VulkanCommandPool
    getDevice(): VulkanDevice
    /**
     * Locks the queue for command submission using `vkQueueSubmit()` to meet the
     * Vulkan requirements for externally synchronised resources.
     */
    submitLock(): void
    /**
     * Unlocks the queue for command submission using `vkQueueSubmit()`.
     * 
     * See gst_vulkan_queue_submit_lock() for details on when this call is needed.
     */
    submitUnlock(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanQueue

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class VulkanQueue extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueue

    static name: string
    static $gtype: GObject.GType<VulkanQueue>

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanQueue

    constructor(config?: VulkanQueue_ConstructProps) 
    _init(config?: VulkanQueue_ConstructProps): void
    static flagsToString(queueBits: Vulkan.QueueFlags): string
    /**
     * If a #GstVulkanQueue is requested in `query,` sets `queue` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanQueue.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param queue the #GstVulkanQueue
     */
    static handleContextQuery(element: Gst.Element, query: Gst.Query, queue: VulkanQueue | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanQueue using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param queue a #GstVulkanQueue
     */
    static runContextQuery(element: Gst.Element, queue: VulkanQueue): [ /* returnType */ boolean, /* queue */ VulkanQueue ]
}

interface VulkanSwapper_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    forceAspectRatio?: boolean | null
    pixelAspectRatio?: Gst.Fraction | null
}

interface VulkanSwapper {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    forceAspectRatio: boolean
    pixelAspectRatio: Gst.Fraction

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanSwapper

    parent: Gst.Object
    device: VulkanDevice
    window: VulkanWindow
    queue: VulkanQueue
    cmdPool: VulkanCommandPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanSwapper

    chooseQueue(availableQueue: VulkanQueue): boolean
    getSupportedCaps(): Gst.Caps
    getSurfaceRectangles(): [ /* inputImage */ GstVideo.VideoRectangle | null, /* surfaceLocation */ GstVideo.VideoRectangle | null, /* displayRect */ GstVideo.VideoRectangle | null ]
    renderBuffer(buffer: Gst.Buffer): boolean
    setCaps(caps: Gst.Caps): boolean

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanSwapper

    connect(sigName: "notify::force-aspect-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pixel-aspect-ratio", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanTrashList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    inCaps: Gst.Caps
    inInfo: GstVideo.VideoInfo
    outCaps: Gst.Caps
    outInfo: GstVideo.VideoInfo

    // Conflicting methods

    ref(...args: any[]): any
    vfuncQuery(...args: any[]): any

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): boolean
}

/**
 * Signal callback interface for `draw`
 */
interface VulkanWindow_DrawSignalCallback {
    (): void
}

/**
 * Signal callback interface for `key-event`
 */
interface VulkanWindow_KeyEventSignalCallback {
    (id: string, key: string): void
}

/**
 * Signal callback interface for `mouse-event`
 */
interface VulkanWindow_MouseEventSignalCallback {
    (id: string, button: number, x: number, y: number): void
}

/**
 * Signal callback interface for `resize`
 */
interface VulkanWindow_ResizeSignalCallback {
    (object: number, p0: number): void
}

interface VulkanWindow {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindow

    readonly display: VulkanDisplay

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanWindow

    /**
     * Attempt to close the window.
     */
    close(): void
    getDisplay(): VulkanDisplay
    getPresentationSupport(device: VulkanDevice, queueFamilyIdx: number): boolean
    getSurfaceDimensions(width: number, height: number): void
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @param handleEvents a #gboolean indicating if events should be handled or not.
     */
    handleEvents(handleEvents: boolean): void
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
    sendKeyEvent(eventType: string, keyStr: string): void
    sendMouseEvent(eventType: string, button: number, posx: number, posy: number): void
    setWindowHandle(handle: number): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstVulkan-1.0.GstVulkan.VulkanWindow

    connect(sigName: "close", callback: VulkanWindow_CloseSignalCallback): number
    on(sigName: "close", callback: VulkanWindow_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: VulkanWindow_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: VulkanWindow_CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "draw", callback: VulkanWindow_DrawSignalCallback): number
    on(sigName: "draw", callback: VulkanWindow_DrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: VulkanWindow_DrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: VulkanWindow_DrawSignalCallback): NodeJS.EventEmitter
    emit(sigName: "draw", ...args: any[]): void
    connect(sigName: "key-event", callback: VulkanWindow_KeyEventSignalCallback): number
    on(sigName: "key-event", callback: VulkanWindow_KeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-event", callback: VulkanWindow_KeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-event", callback: VulkanWindow_KeyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-event", key: string, ...args: any[]): void
    connect(sigName: "mouse-event", callback: VulkanWindow_MouseEventSignalCallback): number
    on(sigName: "mouse-event", callback: VulkanWindow_MouseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-event", callback: VulkanWindow_MouseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-event", callback: VulkanWindow_MouseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mouse-event", button: number, x: number, y: number, ...args: any[]): void
    connect(sigName: "resize", callback: VulkanWindow_ResizeSignalCallback): number
    on(sigName: "resize", callback: VulkanWindow_ResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: VulkanWindow_ResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: VulkanWindow_ResizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resize", p0: number, ...args: any[]): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanWindow

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    imageLayout: Vulkan.ImageLayout
    subresourceRange: Vulkan.ImageSubresourceRange
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
    pipelineStages: Vulkan.PipelineStageFlags
    accessFlags: Vulkan.AccessFlags
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
    vkMem: VulkanMemory
    requirements: Vulkan.MemoryRequirements
    usage: Vulkan.BufferUsageFlags
    barrier: VulkanBarrierBufferInfo
    lock: GLib.Mutex
    wrapped: boolean
    notify: GLib.DestroyNotify
    userData: object
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
     * @param memPropFlags memory properties flags for the backing memory
     */
    static alloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
    /**
     * Initializes the Vulkan buffer memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
     */
    static initOnce(): void
    /**
     * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
     * @param device a #GstVulkanDevice
     * @param buffer a #VkBuffer
     * @param usage usage flags of `buffer`
     * @param userData user data to call `notify` with
     * @param notify a #GDestroyNotify called when `buffer` is no longer in use
     */
    static wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, userData: object | null, notify: GLib.DestroyNotify | null): Gst.Memory
}

interface VulkanBufferMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocatorClass

    parentClass: Gst.AllocatorClass
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

    parentClass: Gst.BufferPoolClass
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

    static newWrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer
}

interface VulkanCommandPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanCommandPoolClass

    parentClass: Gst.ObjectClass
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

    parentClass: VulkanHandlePoolClass
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

    parentClass: Gst.ObjectClass
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
    nLayouts: number
    layouts: VulkanHandle
    lock: GLib.Mutex
}

class VulkanDescriptorSet {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    static newWrapped(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, nLayouts: number, layouts: VulkanHandle): VulkanDescriptorSet
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

    parentClass: Gst.ObjectClass
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

    objectClass: Gst.ObjectClass
    getHandle: (display: VulkanDisplay) => object | null
    createWindow: (display: VulkanDisplay) => VulkanWindow
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

    isSignaled(): boolean
    reset(): void
}

class VulkanFence {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFence

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFence

    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanFence
    static newAlwaysSignalled(device: VulkanDevice): VulkanFence
}

interface VulkanFenceCacheClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFenceCacheClass

    parentClass: VulkanHandlePoolClass
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
    nComponents: number
    shift: Uint8Array
    depth: Uint8Array
    pixelStride: Uint8Array
    nPlanes: number
    plane: Uint8Array
    poffset: Uint8Array
    wSub: Uint8Array
    hSub: Uint8Array
}

class VulkanFormatInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFormatInfo

    static name: string
}

interface VulkanFullScreenQuadClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadClass

    parentClass: Gst.ObjectClass
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
    userData: object

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanHandle

    /**
     * Frees the descriptor set layout in `handle`
     * @param userData callback user data
     */
    freeDescriptorSetLayout(userData: object | null): void
    /**
     * Frees the framebuffer in `handle`
     * @param userData callback user data
     */
    freeFramebuffer(userData: object | null): void
    /**
     * Frees the pipeline in `handle`
     * @param userData callback user data
     */
    freePipeline(userData: object | null): void
    /**
     * Frees the pipeline layout in `handle`
     * @param userData callback user data
     */
    freePipelineLayout(userData: object | null): void
    /**
     * Frees the render pass in `handle`
     * @param userData callback user data
     */
    freeRenderPass(userData: object | null): void
    /**
     * Frees the sampler in `handle`
     * @param userData callback user data
     */
    freeSampler(userData: object | null): void
    /**
     * Frees the shader in `handle`
     * @param userData callback user data
     */
    freeShader(userData: object | null): void
}

/**
 * Holds information about a vulkan non dispatchable handle
 * @record 
 */
class VulkanHandle {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandle

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanHandle

    static newWrapped(device: VulkanDevice, type: VulkanHandleType, handle: VulkanHandleTypedef, notify: VulkanHandleDestroyNotify): VulkanHandle
    static contextQuery(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean
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
    static setContext(element: Gst.Element, context: Gst.Context, display: VulkanDisplay, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay, /* instance */ VulkanInstance ]
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

    parentClass: Gst.BufferPoolClass
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
    vkMem: VulkanMemory
    createInfo: Vulkan.ImageCreateInfo
    requirements: Vulkan.MemoryRequirements
    formatProperties: Vulkan.ImageFormatProperties
    usage: Vulkan.ImageUsageFlags
    barrier: VulkanBarrierImageInfo
    lock: GLib.Mutex
    wrapped: boolean
    notify: GLib.DestroyNotify
    userData: object
    views: object[]
    outstandingViews: object[]
    padding: object[]

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanImageMemory

    addView(view: VulkanImageView): void
    findView(findFunc: VulkanImageMemoryFindViewFunc): VulkanImageView
    getHeight(): number
    getWidth(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory, device: VulkanDevice, usage: Vulkan.ImageUsageFlags, params: Gst.AllocationParams, size: number, userData: object | null, notify: GLib.DestroyNotify): boolean
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
     * @param memPropFlags VkDeviceMemory property flags for the new image
     */
    static alloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
    /**
     * Initializes the Vulkan image memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
     */
    static initOnce(): void
    static wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, userData: object | null, notify: GLib.DestroyNotify): Gst.Memory
}

interface VulkanImageMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocatorClass

    parentClass: Gst.AllocatorClass
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
    createInfo: Vulkan.ImageViewCreateInfo
}

class VulkanImageView {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageView

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageView

    constructor(image: VulkanImageMemory, createInfo: Vulkan.ImageViewCreateInfo) 
    static new(image: VulkanImageMemory, createInfo: Vulkan.ImageViewCreateInfo): VulkanImageView
}

interface VulkanInstanceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanInstanceClass

    parentClass: Gst.ObjectClass
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
    memPtr: Vulkan.DeviceMemory
    lock: GLib.Mutex
    mapCount: number
}

class VulkanMemory {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemory

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanMemory

    /**
     * Allocated a new #GstVulkanMemory.
     * @param device a #GstVulkanDevice
     * @param memoryTypeIndex the Vulkan memory type index
     * @param params a #GstAllocationParams
     * @param size the size to allocate
     * @param memPropFlags 
     */
    static alloc(device: VulkanDevice, memoryTypeIndex: number, params: Gst.AllocationParams, size: number, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
    static findMemoryTypeIndexWithTypeProperties(device: VulkanDevice, typeBits: number, properties: Vulkan.MemoryPropertyFlags, typeIndex: number): boolean
    static heapFlagsToString(propBits: Vulkan.MemoryHeapFlags): string
    /**
     * Initializes the Vulkan memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanMemory operation.
     */
    static initOnce(): void
    static propertyFlagsToString(propBits: Vulkan.MemoryPropertyFlags): string
}

interface VulkanMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocatorClass

    parentClass: Gst.AllocatorClass
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

    parentClass: Gst.ObjectClass
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

    parentClass: Gst.ObjectClass
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

    parentClass: Gst.ObjectClass
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
    userData: object
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
    static newFreeSemaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash
    static miniObjectUnref(device: VulkanDevice, userData: object | null): void
    static objectUnref(device: VulkanDevice, userData: object | null): void
}

interface VulkanTrashFenceListClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass

    parentClass: VulkanTrashListClass
}

abstract class VulkanTrashFenceListClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass

    static name: string
}

interface VulkanTrashListClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashListClass

    parentClass: VulkanHandlePoolClass
    addFunc: VulkanTrashListAdd
    gcFunc: VulkanTrashListGC
    waitFunc: VulkanTrashListWait
    padding: object[]
}

abstract class VulkanTrashListClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashListClass

    static name: string
}

interface VulkanVideoFilterClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanVideoFilterClass

    videoSinkClass: GstBase.BaseTransformClass
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
    parentClass: Gst.ObjectClass
    open: (window: VulkanWindow) => boolean
    close: (window: VulkanWindow) => void
    getPresentationSupport: (window: VulkanWindow, device: VulkanDevice, queueFamilyIdx: number) => boolean
    setWindowHandle: (window: VulkanWindow, handle: number) => void
    getSurfaceDimensions: (window: VulkanWindow, width: number, height: number) => void
    handleEvents: (window: VulkanWindow, handleEvents: boolean) => void
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