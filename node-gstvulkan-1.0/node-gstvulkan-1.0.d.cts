
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstvulkan-1.0-import.d.ts';
    
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

export enum VulkanBarrierFlags {
    NONE,
}
export enum VulkanBarrierType {
    NONE,
    TYPE_MEMORY,
    TYPE_BUFFER,
    TYPE_IMAGE,
}
export enum VulkanError {
    FAILED,
}
export enum VulkanFormatScaling {
    UNORM,
    SNORM,
    USCALED,
    SSCALED,
    UINT,
    SINT,
    SRGB,
}
export enum VulkanHandleType {
    DESCRIPTOR_SET_LAYOUT,
    PIPELINE_LAYOUT,
    PIPELINE,
    RENDER_PASS,
    SAMPLER,
    FRAMEBUFFER,
    SHADER,
}
export enum VulkanWindowError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
export enum VulkanDisplayType {
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
export enum VulkanFormatFlags {
    YUV,
    RGB,
    ALPHA,
    LE,
    COMPLEX,
}
export const CAPS_FEATURE_MEMORY_VULKAN_BUFFER: string | null
export const CAPS_FEATURE_MEMORY_VULKAN_IMAGE: string | null
export const VULKAN_BUFFER_MEMORY_ALLOCATOR_NAME: string | null
export const VULKAN_DEVICE_CONTEXT_TYPE_STR: string | null
export const VULKAN_DISPLAY_CONTEXT_TYPE_STR: string | null
export const VULKAN_IMAGE_MEMORY_ALLOCATOR_NAME: string | null
export const VULKAN_INSTANCE_CONTEXT_TYPE_STR: string | null
export const VULKAN_MAX_COMPONENTS: number
export const VULKAN_MEMORY_ALLOCATOR_NAME: string | null
/**
 * The printf format specifier for raw Vulkan non dispatchable handles.
 */
export const VULKAN_NON_DISPATCHABLE_HANDLE_FORMAT: string | null
export const VULKAN_QUEUE_CONTEXT_TYPE_STR: string | null
export const VULKAN_SWAPPER_VIDEO_FORMATS: string | null
export function contextGetVulkanDevice(context: Gst.Context, device: VulkanDevice): boolean
export function contextGetVulkanDisplay(context: Gst.Context, display: VulkanDisplay): boolean
export function contextGetVulkanInstance(context: Gst.Context, instance: VulkanInstance): boolean
export function contextGetVulkanQueue(context: Gst.Context, queue: VulkanQueue): boolean
/**
 * Sets `device` on `context`
 * @param context a #GstContext
 * @param device a #GstVulkanDevice
 */
export function contextSetVulkanDevice(context: Gst.Context, device: VulkanDevice): void
/**
 * Sets `display` on `context`
 * @param context a #GstContext
 * @param display a #GstVulkanDisplay
 */
export function contextSetVulkanDisplay(context: Gst.Context, display: VulkanDisplay): void
/**
 * Sets `instance` on `context`
 * @param context a #GstContext
 * @param instance a #GstVulkanInstance
 */
export function contextSetVulkanInstance(context: Gst.Context, instance: VulkanInstance): void
/**
 * Sets `queue` on `context`
 * @param context a #GstContext
 * @param queue a #GstVulkanQueue
 */
export function contextSetVulkanQueue(context: Gst.Context, queue: VulkanQueue): void
export function isVulkanBufferMemory(mem: Gst.Memory): boolean
export function isVulkanImageMemory(mem: Gst.Memory): boolean
export function isVulkanMemory(mem: Gst.Memory): boolean
/**
 * Allocate a new #GstVulkanBufferMemory.
 * @param device a #GstVulkanDevice
 * @param size size of the new buffer
 * @param usage buffer usage flags
 * @param memPropFlags memory properties flags for the backing memory
 * @returns a #GstMemory object backed by a vulkan buffer          backed by vulkan device memory
 */
export function vulkanBufferMemoryAlloc(device: VulkanDevice, size: number, usage: Vulkan.BufferUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
/**
 * Initializes the Vulkan buffer memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanBufferMemory operation.
 */
export function vulkanBufferMemoryInitOnce(): void
/**
 * Allocated a new wrapped #GstVulkanBufferMemory with `buffer`.
 * @param device a #GstVulkanDevice
 * @param buffer a #VkBuffer
 * @param usage usage flags of `buffer`
 * @param userData user data to call `notify` with
 * @param notify a #GDestroyNotify called when `buffer` is no longer in use
 * @returns a #GstMemory object backed by a vulkan device memory
 */
export function vulkanBufferMemoryWrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, userData: any | null, notify: GLib.DestroyNotify | null): Gst.Memory
export function vulkanCreateShader(device: VulkanDevice, code: string | null, size: number): VulkanHandle
export function vulkanDisplayTypeToExtensionString(type: VulkanDisplayType): string | null
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
 * @returns whether a #GstVulkanInstance exists in @instance_ptr and if          @display_ptr is not %NULL, whether a #GstVulkanDisplay exists in          @display_ptr
 */
export function vulkanEnsureElementData(element: Gst.Element, displayPtr: VulkanDisplay, instancePtr: VulkanInstance): [ /* returnType */ boolean, /* displayPtr */ VulkanDisplay, /* instancePtr */ VulkanInstance ]
export function vulkanErrorQuark(): GLib.Quark
export function vulkanFormatGetInfo(format: Vulkan.Format): VulkanFormatInfo
export function vulkanGetOrCreateImageView(image: VulkanImageMemory): VulkanImageView
/**
 * Performs the steps necessary for executing a context query including
 * posting a message for the application to respond.
 * @param element a #GstElement
 * @param contextType the context type to query for
 */
export function vulkanGlobalContextQuery(element: Gst.Element, contextType: string | null): void
export function vulkanHandleContextQuery(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null, instance: VulkanInstance | null, device: VulkanDevice | null): boolean
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
export function vulkanHandleSetContext(element: Gst.Element, context: Gst.Context, display: VulkanDisplay, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay, /* instance */ VulkanInstance ]
/**
 * Allocated a new #GstVulkanImageMemory.
 * @param device a #GstVulkanDevice
 * @param format the VkFormat for the new image
 * @param width width for the new image
 * @param height height for the new image
 * @param tiling tiling for the new image
 * @param usage usage flags for the new image
 * @param memPropFlags VkDeviceMemory property flags for the new image
 * @returns a #GstMemory object backed by a vulkan device memory
 */
export function vulkanImageMemoryAlloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
/**
 * Initializes the Vulkan image memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
 */
export function vulkanImageMemoryInitOnce(): void
export function vulkanImageMemoryWrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, userData: any | null, notify: GLib.DestroyNotify): Gst.Memory
/**
 * Performs the steps necessary for executing a context query between only
 * other elements in the pipeline
 * @param element a #GstElement
 * @param contextType the context type to query for
 */
export function vulkanLocalContextQuery(element: Gst.Element, contextType: string | null): Gst.Query
/**
 * Allocated a new #GstVulkanMemory.
 * @param device a #GstVulkanDevice
 * @param memoryTypeIndex the Vulkan memory type index
 * @param params a #GstAllocationParams
 * @param size the size to allocate
 * @param memPropFlags 
 * @returns a #GstMemory object backed by a vulkan device memory
 */
export function vulkanMemoryAlloc(device: VulkanDevice, memoryTypeIndex: number, params: Gst.AllocationParams, size: number, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
export function vulkanMemoryFindMemoryTypeIndexWithTypeProperties(device: VulkanDevice, typeBits: number, properties: Vulkan.MemoryPropertyFlags, typeIndex: number): boolean
export function vulkanMemoryHeapFlagsToString(propBits: Vulkan.MemoryHeapFlags): string | null
/**
 * Initializes the Vulkan memory allocator. It is safe to call this function
 * multiple times.  This must be called before any other #GstVulkanMemory operation.
 */
export function vulkanMemoryInitOnce(): void
export function vulkanMemoryPropertyFlagsToString(propBits: Vulkan.MemoryPropertyFlags): string | null
export function vulkanRunQuery(element: Gst.Element, query: Gst.Query, direction: Gst.PadDirection): boolean
export function vulkanSampleCountFlagsToString(sampleCountBits: Vulkan.SampleCountFlags): string | null
export function vulkanTrashMiniObjectUnref(device: VulkanDevice, userData: any | null): void
export function vulkanTrashObjectUnref(device: VulkanDevice, userData: any | null): void
export function vulkanWindowErrorQuark(): GLib.Quark
export interface VulkanDeviceForEachQueueFunc {
    (device: VulkanDevice, queue: VulkanQueue): boolean
}
/**
 * Function definition called when the #GstVulkanHandle is no longer in use.
 * All implementations of this callback must free the internal handle stored
 * inside `handle`.
 * @callback 
 * @param handle the #GstVulkanHandle
 */
export interface VulkanHandleDestroyNotify {
    (handle: VulkanHandle): void
}
/**
 * Function definition used to find views.  Return %TRUE if `view` matches the
 * criteria.
 * @callback 
 * @param view 
 */
export interface VulkanImageMemoryFindViewFunc {
    (view: VulkanImageView): boolean
}
export interface VulkanTrashListAdd {
    (trashList: VulkanTrashList, trash: VulkanTrash): boolean
}
export interface VulkanTrashListGC {
    (trashList: VulkanTrashList): void
}
export interface VulkanTrashListWait {
    (trashList: VulkanTrashList, timeout: number): boolean
}
export interface VulkanTrashNotify {
    (device: VulkanDevice): void
}
export module VulkanBufferMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

export interface VulkanBufferMemoryAllocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    parent: Gst.Allocator & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanBufferMemoryAllocator extends Gst.Allocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocator

    constructor(config?: VulkanBufferMemoryAllocator.ConstructorProperties) 
    _init(config?: VulkanBufferMemoryAllocator.ConstructorProperties): void
}

export module VulkanBufferPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
    }

}

export interface VulkanBufferPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    bufferpool: Gst.BufferPool
    device: VulkanDevice

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanBufferPool extends Gst.BufferPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanBufferPool

    constructor(config?: VulkanBufferPool.ConstructorProperties) 
    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     * @returns a new #GstBufferPool instance
     */
    static new(): Gst.BufferPool
    _init(config?: VulkanBufferPool.ConstructorProperties): void
}

export module VulkanCommandPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanCommandPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    __gtype__: number

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

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanCommandPool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanCommandPool

    constructor(config?: VulkanCommandPool.ConstructorProperties) 
    _init(config?: VulkanCommandPool.ConstructorProperties): void
}

export module VulkanDescriptorCache {

    // Constructor properties interface

    export interface ConstructorProperties extends VulkanHandlePool.ConstructorProperties {
    }

}

export interface VulkanDescriptorCache {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    __gtype__: number

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    parent: VulkanHandlePool & Gst.Object & Gst.Object
    pool: VulkanDescriptorPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    acquire(): VulkanDescriptorSet

    // Overloads of acquire

    acquire(): any | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanDescriptorCache extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorCache

    constructor(config?: VulkanDescriptorCache.ConstructorProperties) 
    constructor(pool: VulkanDescriptorPool, nLayouts: number, layouts: VulkanHandle) 
    static new(pool: VulkanDescriptorPool, nLayouts: number, layouts: VulkanHandle): VulkanDescriptorCache
    _init(config?: VulkanDescriptorCache.ConstructorProperties): void
}

export module VulkanDescriptorPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanDescriptorPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    __gtype__: number

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    parent: Gst.Object
    device: VulkanDevice
    pool: Vulkan.DescriptorPool

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    create(nLayouts: number, layouts: VulkanHandle): VulkanDescriptorSet
    getDevice(): VulkanDevice
    getMaxSets(): number

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanDescriptorPool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorPool

    constructor(config?: VulkanDescriptorPool.ConstructorProperties) 
    static newWrapped(device: VulkanDevice, pool: Vulkan.DescriptorPool, maxSets: number): VulkanDescriptorPool
    _init(config?: VulkanDescriptorPool.ConstructorProperties): void
}

export module VulkanDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanDevice

        physicalDevice?: VulkanPhysicalDevice | null
    }

}

export interface VulkanDevice {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDevice

    __gtype__: number

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
     * @returns the function pointer for @name or %NULL
     */
    getProcAddress(name: string | null): any | null
    getQueue(queueFamily: number, queueI: number): VulkanQueue
    /**
     * Attempts to create the internal #VkDevice object.
     * @returns whether a vulkan device could be created
     */
    open(): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDevice

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanDevice extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDevice

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDevice

    constructor(config?: VulkanDevice.ConstructorProperties) 
    constructor(physicalDevice: VulkanPhysicalDevice) 
    static new(physicalDevice: VulkanPhysicalDevice): VulkanDevice
    static newWithIndex(instance: VulkanInstance, deviceIndex: number): VulkanDevice
    _init(config?: VulkanDevice.ConstructorProperties): void
    /**
     * If a #GstVulkanDevice is requested in `query,` sets `device` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanDevice.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param device the #GstVulkanDevice
     * @returns whether @query was responded to with @device
     */
    static handleContextQuery(element: Gst.Element, query: Gst.Query, device: VulkanDevice): boolean
    /**
     * Attempt to retrieve a #GstVulkanDevice using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param device a #GstVulkanDevice
     * @returns whether @device contains a valid #GstVulkanDevice
     */
    static runContextQuery(element: Gst.Element, device: VulkanDevice): [ /* returnType */ boolean, /* device */ VulkanDevice ]
}

export module VulkanDisplay {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanDisplay {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplay

    __gtype__: number

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanDisplay

    // Has conflict: createWindow(): VulkanWindow
    /**
     * Execute `compare_func` over the list of windows stored by `display`.  The
     * first argument to `compare_func` is the #GstVulkanWindow being checked and the
     * second argument is `data`.
     * @param data some data to pass to `compare_func`
     * @param compareFunc a comparison function to run
     * @returns The first #GstVulkanWindow that causes a match          from @compare_func
     */
    findWindow(data: any | null, compareFunc: GLib.CompareFunc): VulkanWindow
    // Has conflict: getHandle(): any | null
    getHandleType(): VulkanDisplayType
    removeWindow(window: VulkanWindow): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanDisplay

    createWindow(): VulkanWindow
    getHandle(): any | null

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanDisplay

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanDisplay extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplay

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDisplay

    constructor(config?: VulkanDisplay.ConstructorProperties) 
    constructor(instance: VulkanInstance) 
    static new(instance: VulkanInstance): VulkanDisplay
    static newWithType(instance: VulkanInstance, type: VulkanDisplayType): VulkanDisplay
    _init(config?: VulkanDisplay.ConstructorProperties): void
    /**
     * This function will read the %GST_VULKAN_WINDOW environment variable for
     * a user choice or choose the first supported implementation.
     * @param instance a #GstVulkanInstance
     * @returns the default #GstVulkanDisplayType #GstVulkanInstance will choose          on creation
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
     * @returns whether @query was responded to with @display
     */
    static handleContextQuery(element: Gst.Element, query: Gst.Query, display: VulkanDisplay | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanDisplay using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param display a #GstVulkanDisplay
     * @returns whether @display contains a valid #GstVulkanDisplay
     */
    static runContextQuery(element: Gst.Element, display: VulkanDisplay): [ /* returnType */ boolean, /* display */ VulkanDisplay ]
}

export module VulkanFenceCache {

    // Constructor properties interface

    export interface ConstructorProperties extends VulkanHandlePool.ConstructorProperties {
    }

}

export interface VulkanFenceCache {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    __gtype__: number

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    parent: VulkanHandlePool & Gst.Object & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanFenceCache extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFenceCache

    constructor(config?: VulkanFenceCache.ConstructorProperties) 
    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanFenceCache
    _init(config?: VulkanFenceCache.ConstructorProperties): void
}

export module VulkanFullScreenQuad {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanFullScreenQuad {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    __gtype__: number

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

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanFullScreenQuad extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuad

    constructor(config?: VulkanFullScreenQuad.ConstructorProperties) 
    constructor(queue: VulkanQueue) 
    static new(queue: VulkanQueue): VulkanFullScreenQuad
    _init(config?: VulkanFullScreenQuad.ConstructorProperties): void
}

export module VulkanHandlePool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    __gtype__: number

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    parent: Gst.Object
    device: VulkanDevice
    outstanding: any[]
    available: any[]

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    // Has conflict: acquire(): any | null
    // Has conflict: alloc(): any | null
    // Has conflict: release(handle: any | null): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    acquire(): any | null
    alloc(): any | null
    free(handle: any | null): void
    release(handle: any | null): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanHandlePool extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanHandlePool

    constructor(config?: VulkanHandlePool.ConstructorProperties) 
    _init(config?: VulkanHandlePool.ConstructorProperties): void
}

export module VulkanImageBufferPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
    }

}

export interface VulkanImageBufferPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    bufferpool: Gst.BufferPool
    device: VulkanDevice

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanImageBufferPool extends Gst.BufferPool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageBufferPool

    constructor(config?: VulkanImageBufferPool.ConstructorProperties) 
    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanImageBufferPool

    // Overloads of new

    /**
     * Creates a new #GstBufferPool instance.
     * @constructor 
     * @returns a new #GstBufferPool instance
     */
    static new(): Gst.BufferPool
    _init(config?: VulkanImageBufferPool.ConstructorProperties): void
}

export module VulkanImageMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

export interface VulkanImageMemoryAllocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    parent: Gst.Allocator & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanImageMemoryAllocator extends Gst.Allocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocator

    constructor(config?: VulkanImageMemoryAllocator.ConstructorProperties) 
    _init(config?: VulkanImageMemoryAllocator.ConstructorProperties): void
}

export module VulkanInstance {

    // Signal callback interfaces

    /**
     * Signal callback interface for `create-device`
     */
    export interface CreateDeviceSignalCallback {
        (): VulkanDevice
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanInstance {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstance

    __gtype__: number

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
     * @returns the function pointer for @name or %NULL
     */
    getProcAddress(name: string | null): any | null
    open(): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own signals of GstVulkan-1.0.GstVulkan.VulkanInstance

    connect(sigName: "create-device", callback: VulkanInstance.CreateDeviceSignalCallback): number
    on(sigName: "create-device", callback: VulkanInstance.CreateDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-device", callback: VulkanInstance.CreateDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-device", callback: VulkanInstance.CreateDeviceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-device", ...args: any[]): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanInstance

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanInstance extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstance

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanInstance

    constructor(config?: VulkanInstance.ConstructorProperties) 
    constructor() 
    static new(): VulkanInstance
    _init(config?: VulkanInstance.ConstructorProperties): void
    /**
     * If a #GstVulkanInstance is requested in `query,` sets `instance` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanInstance.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param instance the #GstVulkanInstance
     * @returns whether @query was responded to with @instance
     */
    static handleContextQuery(element: Gst.Element, query: Gst.Query, instance: VulkanInstance | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanInstance using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param instance a #GstVulkanInstance
     * @returns whether @instance contains a valid #GstVulkanInstance
     */
    static runContextQuery(element: Gst.Element, instance: VulkanInstance): [ /* returnType */ boolean, /* instance */ VulkanInstance ]
}

export module VulkanMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties {
    }

}

export interface VulkanMemoryAllocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    parent: Gst.Allocator & Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanMemoryAllocator extends Gst.Allocator {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocator

    constructor(config?: VulkanMemoryAllocator.ConstructorProperties) 
    _init(config?: VulkanMemoryAllocator.ConstructorProperties): void
}

export module VulkanPhysicalDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

        deviceIndex?: number | null
        instance?: VulkanInstance | null
    }

}

export interface VulkanPhysicalDevice {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    readonly name: any
    __gtype__: number

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

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanPhysicalDevice extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevice

    constructor(config?: VulkanPhysicalDevice.ConstructorProperties) 
    constructor(instance: VulkanInstance, deviceIndex: number) 
    static new(instance: VulkanInstance, deviceIndex: number): VulkanPhysicalDevice
    _init(config?: VulkanPhysicalDevice.ConstructorProperties): void
    static typeToString(type: Vulkan.PhysicalDeviceType): string | null
}

export module VulkanQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanQueue {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueue

    __gtype__: number

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

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanQueue

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanQueue extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueue

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanQueue

    constructor(config?: VulkanQueue.ConstructorProperties) 
    _init(config?: VulkanQueue.ConstructorProperties): void
    static flagsToString(queueBits: Vulkan.QueueFlags): string | null
    /**
     * If a #GstVulkanQueue is requested in `query,` sets `queue` as the reply.
     * 
     * Intended for use with element query handlers to respond to #GST_QUERY_CONTEXT
     * for a #GstVulkanQueue.
     * @param element a #GstElement
     * @param query a #GstQuery of type #GST_QUERY_CONTEXT
     * @param queue the #GstVulkanQueue
     * @returns whether @query was responded to with @queue
     */
    static handleContextQuery(element: Gst.Element, query: Gst.Query, queue: VulkanQueue | null): boolean
    /**
     * Attempt to retrieve a #GstVulkanQueue using #GST_QUERY_CONTEXT from the
     * surrounding elements of `element`.
     * @param element a #GstElement
     * @param queue a #GstVulkanQueue
     * @returns whether @queue contains a valid #GstVulkanQueue
     */
    static runContextQuery(element: Gst.Element, queue: VulkanQueue): [ /* returnType */ boolean, /* queue */ VulkanQueue ]
}

export module VulkanSwapper {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

        forceAspectRatio?: boolean | null
        pixelAspectRatio?: Gst.Fraction | null
    }

}

export interface VulkanSwapper {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    forceAspectRatio: boolean
    pixelAspectRatio: Gst.Fraction
    __gtype__: number

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

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanSwapper extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapper

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanSwapper

    constructor(config?: VulkanSwapper.ConstructorProperties) 
    constructor(device: VulkanDevice, window: VulkanWindow) 
    static new(device: VulkanDevice, window: VulkanWindow): VulkanSwapper
    _init(config?: VulkanSwapper.ConstructorProperties): void
}

export module VulkanTrashFenceList {

    // Constructor properties interface

    export interface ConstructorProperties extends VulkanTrashList.ConstructorProperties {
    }

}

export interface VulkanTrashFenceList {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    __gtype__: number

    // Conflicting properties

    parent: VulkanHandlePool & Gst.Object & Gst.Object

    // Conflicting methods

    acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash

    // Overloads of acquire

    acquire(): any | null
    acquire(): any | null
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanTrashFenceList extends VulkanTrashList {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanTrashFenceList

    constructor(config?: VulkanTrashFenceList.ConstructorProperties) 
    constructor() 
    static new(): VulkanTrashFenceList
    _init(config?: VulkanTrashFenceList.ConstructorProperties): void
}

export module VulkanTrashList {

    // Constructor properties interface

    export interface ConstructorProperties extends VulkanHandlePool.ConstructorProperties {
    }

}

export interface VulkanTrashList {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashList

    __gtype__: number

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashList

    parent: VulkanHandlePool & Gst.Object & Gst.Object

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanTrashList

    acquire(fence: VulkanFence, notify: VulkanTrashNotify): VulkanTrash

    // Overloads of acquire

    acquire(): any | null
    add(trash: VulkanTrash): boolean
    gc(): void
    wait(timeout: number): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanTrashList

    addFunc(trash: VulkanTrash): boolean
    gcFunc(): void
    waitFunc(timeout: number): boolean

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanTrashList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VulkanTrashList extends VulkanHandlePool {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashList

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanTrashList

    constructor(config?: VulkanTrashList.ConstructorProperties) 
    _init(config?: VulkanTrashList.ConstructorProperties): void
}

export module VulkanVideoFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
    }

}

export interface VulkanVideoFilter {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    parent: GstBase.BaseTransform & Gst.Object
    instance: VulkanInstance
    device: VulkanDevice
    queue: VulkanQueue
    inCaps: Gst.Caps
    inInfo: GstVideo.VideoInfo
    outCaps: Gst.Caps
    outInfo: GstVideo.VideoInfo

    // Conflicting methods

    query(direction: Gst.PadDirection, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

export class VulkanVideoFilter extends GstBase.BaseTransform {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanVideoFilter

    constructor(config?: VulkanVideoFilter.ConstructorProperties) 
    _init(config?: VulkanVideoFilter.ConstructorProperties): void
}

export module VulkanWindow {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `draw`
     */
    export interface DrawSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `key-event`
     */
    export interface KeyEventSignalCallback {
        (id: string | null, key: string | null): void
    }

    /**
     * Signal callback interface for `mouse-event`
     */
    export interface MouseEventSignalCallback {
        (id: string | null, button: number, x: number, y: number): void
    }

    /**
     * Signal callback interface for `resize`
     */
    export interface ResizeSignalCallback {
        (object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface VulkanWindow {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindow

    readonly display: VulkanDisplay
    __gtype__: number

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanWindow

    // Has conflict: close(): void
    getDisplay(): VulkanDisplay
    // Has conflict: getPresentationSupport(device: VulkanDevice, queueFamilyIdx: number): boolean
    // Has conflict: getSurfaceDimensions(width: number, height: number): void
    // Has conflict: handleEvents(handleEvents: boolean): void
    // Has conflict: open(): boolean
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
    sendKeyEvent(eventType: string | null, keyStr: string | null): void
    sendMouseEvent(eventType: string | null, button: number, posx: number, posy: number): void
    // Has conflict: setWindowHandle(handle: never): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVulkan-1.0.GstVulkan.VulkanWindow

    /**
     * Attempt to close the window.
     * @virtual 
     */
    close(): void
    getPresentationSupport(device: VulkanDevice, queueFamilyIdx: number): boolean
    getSurfaceDimensions(width: number, height: number): void
    /**
     * Tell a `window` that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window systems
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the `window`.
     * @virtual 
     * @param handleEvents a #gboolean indicating if events should be handled or not.
     */
    handleEvents(handleEvents: boolean): void
    open(): boolean
    setWindowHandle(handle: never): void

    // Own signals of GstVulkan-1.0.GstVulkan.VulkanWindow

    connect(sigName: "close", callback: VulkanWindow.CloseSignalCallback): number
    on(sigName: "close", callback: VulkanWindow.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: VulkanWindow.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: VulkanWindow.CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "draw", callback: VulkanWindow.DrawSignalCallback): number
    on(sigName: "draw", callback: VulkanWindow.DrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: VulkanWindow.DrawSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: VulkanWindow.DrawSignalCallback): NodeJS.EventEmitter
    emit(sigName: "draw", ...args: any[]): void
    connect(sigName: "key-event", callback: VulkanWindow.KeyEventSignalCallback): number
    on(sigName: "key-event", callback: VulkanWindow.KeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-event", callback: VulkanWindow.KeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-event", callback: VulkanWindow.KeyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "key-event", key: string | null, ...args: any[]): void
    connect(sigName: "mouse-event", callback: VulkanWindow.MouseEventSignalCallback): number
    on(sigName: "mouse-event", callback: VulkanWindow.MouseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-event", callback: VulkanWindow.MouseEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-event", callback: VulkanWindow.MouseEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mouse-event", button: number, x: number, y: number, ...args: any[]): void
    connect(sigName: "resize", callback: VulkanWindow.ResizeSignalCallback): number
    on(sigName: "resize", callback: VulkanWindow.ResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: VulkanWindow.ResizeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: VulkanWindow.ResizeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resize", p0: number, ...args: any[]): void

    // Class property signals of GstVulkan-1.0.GstVulkan.VulkanWindow

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
export class VulkanWindow extends Gst.Object {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindow

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanWindow

    constructor(config?: VulkanWindow.ConstructorProperties) 
    constructor(display: VulkanDisplay) 
    static new(display: VulkanDisplay): VulkanWindow
    _init(config?: VulkanWindow.ConstructorProperties): void
}

export interface VulkanBarrierBufferInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBarrierBufferInfo

    parent: VulkanBarrierMemoryInfo
    offset: Vulkan.DeviceSize
    size: Vulkan.DeviceSize
}

export class VulkanBarrierBufferInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBarrierBufferInfo

    static name: string
}

export interface VulkanBarrierImageInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBarrierImageInfo

    parent: VulkanBarrierMemoryInfo
    imageLayout: Vulkan.ImageLayout
    subresourceRange: Vulkan.ImageSubresourceRange
}

export class VulkanBarrierImageInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBarrierImageInfo

    static name: string
}

export interface VulkanBarrierMemoryInfo {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBarrierMemoryInfo

    type: VulkanBarrierType
    flags: VulkanBarrierFlags
    queue: VulkanQueue
    pipelineStages: Vulkan.PipelineStageFlags
    accessFlags: Vulkan.AccessFlags
}

export class VulkanBarrierMemoryInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBarrierMemoryInfo

    static name: string
}

export interface VulkanBufferMemory {

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
    userData: any
}

export class VulkanBufferMemory {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemory

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanBufferMemory

    /**
     * Allocate a new #GstVulkanBufferMemory.
     * @param device a #GstVulkanDevice
     * @param size size of the new buffer
     * @param usage buffer usage flags
     * @param memPropFlags memory properties flags for the backing memory
     * @returns a #GstMemory object backed by a vulkan buffer          backed by vulkan device memory
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
     * @returns a #GstMemory object backed by a vulkan device memory
     */
    static wrapped(device: VulkanDevice, buffer: Vulkan.Buffer, usage: Vulkan.BufferUsageFlags, userData: any | null, notify: GLib.DestroyNotify | null): Gst.Memory
}

export interface VulkanBufferMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocatorClass

    parentClass: Gst.AllocatorClass
}

/**
 * The #GstVulkanBufferMemoryAllocatorClass only contains private data
 * @record 
 */
export abstract class VulkanBufferMemoryAllocatorClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferMemoryAllocatorClass

    static name: string
}

export interface VulkanBufferPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanBufferPoolClass

    parentClass: Gst.BufferPoolClass
}

/**
 * The #GstVulkanBufferPoolClass structure contains only private data
 * @record 
 */
export abstract class VulkanBufferPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPoolClass

    static name: string
}

export interface VulkanBufferPoolPrivate {
}

export class VulkanBufferPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanBufferPoolPrivate

    static name: string
}

export interface VulkanCommandBuffer {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer

    parent: Gst.MiniObject
    cmd: Vulkan.CommandBuffer
    pool: VulkanCommandPool
    level: Vulkan.CommandBufferLevel
    lock: GLib.Mutex
}

export class VulkanCommandBuffer {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanCommandBuffer

    static newWrapped(cmd: Vulkan.CommandBuffer, level: Vulkan.CommandBufferLevel): VulkanCommandBuffer
}

export interface VulkanCommandPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanCommandPoolClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanCommandPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPoolClass

    static name: string
}

export interface VulkanCommandPoolPrivate {
}

export class VulkanCommandPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanCommandPoolPrivate

    static name: string
}

export interface VulkanDescriptorCacheClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorCacheClass

    parentClass: VulkanHandlePoolClass
}

export abstract class VulkanDescriptorCacheClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCacheClass

    static name: string
}

export interface VulkanDescriptorCachePrivate {
}

export class VulkanDescriptorCachePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorCachePrivate

    static name: string
}

export interface VulkanDescriptorPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanDescriptorPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolClass

    static name: string
}

export interface VulkanDescriptorPoolPrivate {
}

export class VulkanDescriptorPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorPoolPrivate

    static name: string
}

export interface VulkanDescriptorSet {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    parent: Gst.MiniObject
    set: Vulkan.DescriptorSet
    pool: VulkanDescriptorPool
    cache: VulkanDescriptorCache
    nLayouts: number
    layouts: VulkanHandle
    lock: GLib.Mutex
}

export class VulkanDescriptorSet {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanDescriptorSet

    static newWrapped(pool: VulkanDescriptorPool, set: Vulkan.DescriptorSet, nLayouts: number, layouts: VulkanHandle): VulkanDescriptorSet
}

export interface VulkanDescriptorSetClass {
}

export class VulkanDescriptorSetClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSetClass

    static name: string
}

export interface VulkanDescriptorSetPrivate {
}

export class VulkanDescriptorSetPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDescriptorSetPrivate

    static name: string
}

export interface VulkanDeviceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDeviceClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanDeviceClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDeviceClass

    static name: string
}

export interface VulkanDevicePrivate {
}

export class VulkanDevicePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDevicePrivate

    static name: string
}

export interface VulkanDisplayClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanDisplayClass

    objectClass: Gst.ObjectClass
    getHandle: (display: VulkanDisplay) => any | null
    createWindow: (display: VulkanDisplay) => VulkanWindow
}

export abstract class VulkanDisplayClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplayClass

    static name: string
}

export interface VulkanDisplayPrivate {
}

export class VulkanDisplayPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanDisplayPrivate

    static name: string
}

export interface VulkanFence {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFence

    parent: Gst.MiniObject
    device: VulkanDevice
    cache: VulkanFenceCache
    fence: Vulkan.Fence

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanFence

    isSignaled(): boolean
    reset(): void
}

export class VulkanFence {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFence

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanFence

    constructor(device: VulkanDevice) 
    static new(device: VulkanDevice): VulkanFence
    static newAlwaysSignalled(device: VulkanDevice): VulkanFence
}

export interface VulkanFenceCacheClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFenceCacheClass

    parentClass: VulkanHandlePoolClass
}

export abstract class VulkanFenceCacheClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFenceCacheClass

    static name: string
}

export interface VulkanFormatInfo {

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
    name: string | null
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

export class VulkanFormatInfo {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFormatInfo

    static name: string
}

export interface VulkanFullScreenQuadClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanFullScreenQuadClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadClass

    static name: string
}

export interface VulkanFullScreenQuadPrivate {
}

export class VulkanFullScreenQuadPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanFullScreenQuadPrivate

    static name: string
}

export interface VulkanHandle {

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
    userData: any

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanHandle

    /**
     * Frees the descriptor set layout in `handle`
     * @param userData callback user data
     */
    freeDescriptorSetLayout(userData: any | null): void
    /**
     * Frees the framebuffer in `handle`
     * @param userData callback user data
     */
    freeFramebuffer(userData: any | null): void
    /**
     * Frees the pipeline in `handle`
     * @param userData callback user data
     */
    freePipeline(userData: any | null): void
    /**
     * Frees the pipeline layout in `handle`
     * @param userData callback user data
     */
    freePipelineLayout(userData: any | null): void
    /**
     * Frees the render pass in `handle`
     * @param userData callback user data
     */
    freeRenderPass(userData: any | null): void
    /**
     * Frees the sampler in `handle`
     * @param userData callback user data
     */
    freeSampler(userData: any | null): void
    /**
     * Frees the shader in `handle`
     * @param userData callback user data
     */
    freeShader(userData: any | null): void
}

/**
 * Holds information about a vulkan non dispatchable handle
 * @record 
 */
export class VulkanHandle {

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
     * @returns whether the @display or @instance could be set successfully
     */
    static setContext(element: Gst.Element, context: Gst.Context, display: VulkanDisplay, instance: VulkanInstance): [ /* returnType */ boolean, /* display */ VulkanDisplay, /* instance */ VulkanInstance ]
}

export interface VulkanHandlePoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanHandlePoolClass

    parent: Gst.ObjectClass
    alloc: (pool: VulkanHandlePool) => any | null
    acquire: (pool: VulkanHandlePool) => any | null
    release: (pool: VulkanHandlePool, handle: any | null) => void
    free: (pool: VulkanHandlePool, handle: any | null) => void
}

export abstract class VulkanHandlePoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandlePoolClass

    static name: string
}

export interface VulkanHandleTypedef {
}

export class VulkanHandleTypedef {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanHandleTypedef

    static name: string
}

export interface VulkanImageBufferPoolClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolClass

    parentClass: Gst.BufferPoolClass
}

/**
 * The #GstVulkanImageBufferPoolClass structure contains only private data
 * @record 
 */
export abstract class VulkanImageBufferPoolClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolClass

    static name: string
}

export interface VulkanImageBufferPoolPrivate {
}

export class VulkanImageBufferPoolPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageBufferPoolPrivate

    static name: string
}

export interface VulkanImageMemory {

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
    userData: any
    views: any[]
    outstandingViews: any[]
    padding: any[]

    // Owm methods of GstVulkan-1.0.GstVulkan.VulkanImageMemory

    addView(view: VulkanImageView): void
    findView(findFunc: VulkanImageMemoryFindViewFunc): VulkanImageView
    getHeight(): number
    getWidth(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory, device: VulkanDevice, usage: Vulkan.ImageUsageFlags, params: Gst.AllocationParams, size: number, userData: any | null, notify: GLib.DestroyNotify): boolean
}

export class VulkanImageMemory {

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
     * @returns a #GstMemory object backed by a vulkan device memory
     */
    static alloc(device: VulkanDevice, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
    /**
     * Initializes the Vulkan image memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanImageMemory operation.
     */
    static initOnce(): void
    static wrapped(device: VulkanDevice, image: Vulkan.Image, format: Vulkan.Format, width: number, height: number, tiling: Vulkan.ImageTiling, usage: Vulkan.ImageUsageFlags, userData: any | null, notify: GLib.DestroyNotify): Gst.Memory
}

export interface VulkanImageMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocatorClass

    parentClass: Gst.AllocatorClass
}

/**
 * The #GstVulkanImageMemoryAllocatorClass only contains private data
 * @record 
 */
export abstract class VulkanImageMemoryAllocatorClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageMemoryAllocatorClass

    static name: string
}

export interface VulkanImageView {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanImageView

    parent: Gst.MiniObject
    device: VulkanDevice
    image: VulkanImageMemory
    view: Vulkan.ImageView
    createInfo: Vulkan.ImageViewCreateInfo
}

export class VulkanImageView {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanImageView

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanImageView

    constructor(image: VulkanImageMemory, createInfo: Vulkan.ImageViewCreateInfo) 
    static new(image: VulkanImageMemory, createInfo: Vulkan.ImageViewCreateInfo): VulkanImageView
}

export interface VulkanInstanceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanInstanceClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanInstanceClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstanceClass

    static name: string
}

export interface VulkanInstancePrivate {
}

export class VulkanInstancePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanInstancePrivate

    static name: string
}

export interface VulkanMemory {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemory

    mem: Gst.Memory
    device: VulkanDevice
    memPtr: Vulkan.DeviceMemory
    lock: GLib.Mutex
    mapCount: number
}

export class VulkanMemory {

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
     * @returns a #GstMemory object backed by a vulkan device memory
     */
    static alloc(device: VulkanDevice, memoryTypeIndex: number, params: Gst.AllocationParams, size: number, memPropFlags: Vulkan.MemoryPropertyFlags): Gst.Memory
    static findMemoryTypeIndexWithTypeProperties(device: VulkanDevice, typeBits: number, properties: Vulkan.MemoryPropertyFlags, typeIndex: number): boolean
    static heapFlagsToString(propBits: Vulkan.MemoryHeapFlags): string | null
    /**
     * Initializes the Vulkan memory allocator. It is safe to call this function
     * multiple times.  This must be called before any other #GstVulkanMemory operation.
     */
    static initOnce(): void
    static propertyFlagsToString(propBits: Vulkan.MemoryPropertyFlags): string | null
}

export interface VulkanMemoryAllocatorClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocatorClass

    parentClass: Gst.AllocatorClass
}

/**
 * The #GstVulkanMemoryAllocatorClass only contains private data
 * @record 
 */
export abstract class VulkanMemoryAllocatorClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanMemoryAllocatorClass

    static name: string
}

export interface VulkanPhysicalDeviceClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanPhysicalDeviceClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanPhysicalDeviceClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDeviceClass

    static name: string
}

export interface VulkanPhysicalDevicePrivate {
}

export class VulkanPhysicalDevicePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanPhysicalDevicePrivate

    static name: string
}

export interface VulkanQueueClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanQueueClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanQueueClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueueClass

    static name: string
}

export interface VulkanQueuePrivate {
}

export class VulkanQueuePrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanQueuePrivate

    static name: string
}

export interface VulkanSwapperClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanSwapperClass

    parentClass: Gst.ObjectClass
}

export abstract class VulkanSwapperClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapperClass

    static name: string
}

export interface VulkanSwapperPrivate {
}

export class VulkanSwapperPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanSwapperPrivate

    static name: string
}

export interface VulkanTrash {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrash

    parent: Gst.MiniObject
    cache: VulkanTrashList
    fence: VulkanFence
    notify: VulkanTrashNotify
    userData: any
}

export class VulkanTrash {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrash

    static name: string

    // Constructors of GstVulkan-1.0.GstVulkan.VulkanTrash

    /**
     * Create and return a new #GstVulkanTrash object that will stores a callback
     * to call when `fence` is signalled.
     * @constructor 
     * @param fence a #GstVulkanFence
     * @returns a new #GstVulkanTrash
     */
    constructor(fence: VulkanFence) 
    /**
     * Create and return a new #GstVulkanTrash object that will stores a callback
     * to call when `fence` is signalled.
     * @constructor 
     * @param fence a #GstVulkanFence
     * @returns a new #GstVulkanTrash
     */
    static new(fence: VulkanFence): VulkanTrash
    static newFreeSemaphore(fence: VulkanFence, semaphore: Vulkan.Semaphore): VulkanTrash
    static miniObjectUnref(device: VulkanDevice, userData: any | null): void
    static objectUnref(device: VulkanDevice, userData: any | null): void
}

export interface VulkanTrashFenceListClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass

    parentClass: VulkanTrashListClass
}

export abstract class VulkanTrashFenceListClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashFenceListClass

    static name: string
}

export interface VulkanTrashListClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanTrashListClass

    parentClass: VulkanHandlePoolClass
    addFunc: VulkanTrashListAdd
    gcFunc: VulkanTrashListGC
    waitFunc: VulkanTrashListWait
    padding: any[]
}

export abstract class VulkanTrashListClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanTrashListClass

    static name: string
}

export interface VulkanVideoFilterClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanVideoFilterClass

    videoSinkClass: GstBase.BaseTransformClass
}

export abstract class VulkanVideoFilterClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanVideoFilterClass

    static name: string
}

export interface VulkanWindowClass {

    // Own fields of GstVulkan-1.0.GstVulkan.VulkanWindowClass

    /**
     * Parent class
     * @field 
     */
    parentClass: Gst.ObjectClass
    open: (window: VulkanWindow) => boolean
    close: (window: VulkanWindow) => void
    getPresentationSupport: (window: VulkanWindow, device: VulkanDevice, queueFamilyIdx: number) => boolean
    setWindowHandle: (window: VulkanWindow, handle: never) => void
    getSurfaceDimensions: (window: VulkanWindow, width: number, height: number) => void
    handleEvents: (window: VulkanWindow, handleEvents: boolean) => void
}

export abstract class VulkanWindowClass {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindowClass

    static name: string
}

export interface VulkanWindowPrivate {
}

export class VulkanWindowPrivate {

    // Own properties of GstVulkan-1.0.GstVulkan.VulkanWindowPrivate

    static name: string
}

// END