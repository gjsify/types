
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gusb-1.0-import.d.ts';
    
/**
 * GUsb-1.0
 */

import type Json from '@girs/node-json-1.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace GUsb {

enum ContextError {
    CONTEXT_ERROR_INTERNAL,
}
/**
 * The USB device class.
 */
enum DeviceClassCode {
    INTERFACE_DESC,
    AUDIO,
    COMMUNICATIONS,
    HID,
    PHYSICAL,
    IMAGE,
    PRINTER,
    MASS_STORAGE,
    HUB,
    CDC_DATA,
    SMART_CARD,
    CONTENT_SECURITY,
    VIDEO,
    PERSONAL_HEALTHCARE,
    AUDIO_VIDEO,
    BILLBOARD,
    DIAGNOSTIC,
    WIRELESS_CONTROLLER,
    MISCELLANEOUS,
    APPLICATION_SPECIFIC,
    VENDOR_SPECIFIC,
}
/**
 * The message direction.
 */
enum DeviceDirection {
    DEVICE_TO_HOST,
    HOST_TO_DEVICE,
}
/**
 * The error code.
 */
enum DeviceError {
    INTERNAL,
    IO,
    TIMED_OUT,
    NOT_SUPPORTED,
    NO_DEVICE,
    NOT_OPEN,
    ALREADY_OPEN,
    CANCELLED,
    FAILED,
    PERMISSION_DENIED,
    LAST,
}
/**
 * The USB language ID.
 */
enum DeviceLangid {
    INVALID,
    ENGLISH_UNITED_STATES,
}
/**
 * The message recipient.
 */
enum DeviceRecipient {
    DEVICE,
    INTERFACE,
    ENDPOINT,
    OTHER,
}
/**
 * The message request type.
 */
enum DeviceRequestType {
    STANDARD,
    CLASS,
    VENDOR,
    RESERVED,
}
/**
 * The error code.
 */
enum SourceError {
    SOURCE_ERROR_INTERNAL,
}
/**
 * The flags to use for the context.
 * @bitfield 
 */
enum ContextFlags {
    NONE,
    AUTO_OPEN_DEVICES,
    SAVE_EVENTS,
    SAVE_REMOVED_DEVICES,
    DEBUG,
}
/**
 * Flags for the g_usb_device_claim_interface and
 * g_usb_device_release_interface methods flags parameters.
 * @bitfield 
 */
enum DeviceClaimInterfaceFlags {
    NONE,
    BIND_KERNEL_DRIVER,
}
/**
 * The compile-time major version
 */
const MAJOR_VERSION: number
/**
 * The compile-time micro version
 */
const MICRO_VERSION: number
/**
 * The compile-time minor version
 */
const MINOR_VERSION: number
function sourceErrorQuark(): GLib.Quark
/**
 * Converts the error code into a string
 * @param errorCode a libusb error code
 * @returns String, or %NULL
 */
function strerror(errorCode: number): string
/**
 * Gets the GUsb installed runtime version.
 * @returns a version number, e.g. "0.3.1"
 */
function versionString(): string
module BosDescriptor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BosDescriptor {

    // Own properties of GUsb-1.0.GUsb.BosDescriptor

    __gtype__: number

    // Owm methods of GUsb-1.0.GUsb.BosDescriptor

    /**
     * Gets the BOS descriptor capability.
     * @returns capability
     */
    getCapability(): number
    /**
     * Gets any extra data from the BOS descriptor.
     * @returns a #GBytes, or %NULL for failure
     */
    getExtra(): any

    // Class property signals of GUsb-1.0.GUsb.BosDescriptor

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
    disconnect(id: number): void
}

class BosDescriptor extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.BosDescriptor

    static name: string

    // Constructors of GUsb-1.0.GUsb.BosDescriptor

    constructor(config?: BosDescriptor.ConstructorProperties) 
    _init(config?: BosDescriptor.ConstructorProperties): void
}

module Context {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    interface DeviceAddedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-changed`
     */
    interface DeviceChangedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        (device: Device): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GUsb-1.0.GUsb.Context

        debug_level?: number | null
    }

}

interface Context extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Context

    debugLevel: number
    readonly libusbContext: any
    __gtype__: number

    // Own fields of GUsb-1.0.GUsb.Context

    parentInstance: GObject.Object

    // Owm methods of GUsb-1.0.GUsb.Context

    /**
     * Enumerates all the USB devices and adds them to the context.
     * 
     * You only need to call this function once, and any subsequent calls
     * are silently ignored.
     */
    enumerate(): void
    /**
     * Finds a device based on its bus and address values.
     * @param bus a bus number
     * @param address a bus address
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    findByBusAddress(bus: number, address: number): Device
    /**
     * Finds a device based on its platform id value.
     * @param platformId a platform id, e.g. "usb:00:03:03:02"
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    findByPlatformId(platformId: string): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]
    /**
     * Sets the flags to use for the context.
     * @returns the #GUsbContextFlags, e.g. %G_USB_CONTEXT_FLAGS_AUTO_OPEN_DEVICES
     */
    getFlags(): ContextFlags
    /**
     * Gets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
     * @returns interval in ms
     */
    getHotplugPollInterval(): number
    /**
     * Gets the internal GMainContext to use for synchronous methods.
     * By default the value is set to the value of g_main_context_default()
     * @returns the #GMainContext
     */
    getMainContext(): GLib.MainContext
    /**
     * This function does nothing.
     * @param mainCtx a #GMainContext, or %NULL
     * @returns the #GUsbSource.
     */
    getSource(mainCtx: GLib.MainContext): Source
    /**
     * Loads the context from a JSON object.
     * @param jsonObject a #JsonObject
     * @returns %TRUE on success
     */
    load(jsonObject: Json.Object): boolean
    /**
     * Loads any devices with a specified tag into the context from a JSON object.
     * @param jsonObject a #JsonObject
     * @param tag a string tag, e.g. `runtime-reload`, or %NULL
     * @returns %TRUE on success
     */
    loadWithTag(jsonObject: Json.Object, tag: string): boolean
    /**
     * Saves the context to an existing JSON builder.
     * @param jsonBuilder a #JsonBuilder
     * @returns %TRUE on success
     */
    save(jsonBuilder: Json.Builder): boolean
    /**
     * Saves any devices with a specified tag into an existing JSON builder.
     * @param jsonBuilder a #JsonBuilder
     * @param tag a string tag, e.g. `runtime-reload`, or %NULL
     * @returns %TRUE on success
     */
    saveWithTag(jsonBuilder: Json.Builder, tag: string): boolean
    /**
     * Sets the debug flags which control what is logged to the console.
     * 
     * Using %G_LOG_LEVEL_INFO will output to standard out, and everything
     * else logs to standard error.
     * @param flags a GLogLevelFlags such as %G_LOG_LEVEL_ERROR | %G_LOG_LEVEL_INFO, or 0
     */
    setDebug(flags: GLib.LogLevelFlags): void
    /**
     * Sets the flags to use for the context. These should be set before
     * g_usb_context_enumerate() is called.
     * @param flags some #GUsbContextFlags, e.g. %G_USB_CONTEXT_FLAGS_AUTO_OPEN_DEVICES
     */
    setFlags(flags: ContextFlags): void
    /**
     * Sets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
     * This defaults to 1000ms and can be changed before or after g_usb_context_enumerate() has been
     * called.
     * @param hotplugPollInterval the interval in ms
     */
    setHotplugPollInterval(hotplugPollInterval: number): void
    /**
     * Sets the internal GMainContext to use for synchronous methods.
     * @param mainCtx 
     */
    setMainContext(mainCtx: GLib.MainContext): void
    /**
     * Waits for the device to be replugged.
     * It may come back with a different VID:PID.
     * 
     * Warning: This is synchronous and blocks until the device comes
     * back or the timeout triggers.
     * @param device a #GUsbDevice
     * @param timeoutMs timeout to wait
     * @returns a new #GUsbDevice, or %NULL for invalid
     */
    waitForReplug(device: Device, timeoutMs: number): Device

    // Own virtual methods of GUsb-1.0.GUsb.Context

    deviceAdded(device: Device): void
    deviceChanged(device: Device): void
    deviceRemoved(device: Device): void

    // Own signals of GUsb-1.0.GUsb.Context

    connect(sigName: "device-added", callback: Context.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Context.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: Context.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: Context.DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-changed", callback: Context.DeviceChangedSignalCallback): number
    on(sigName: "device-changed", callback: Context.DeviceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: Context.DeviceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: Context.DeviceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-changed", ...args: any[]): void
    connect(sigName: "device-removed", callback: Context.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Context.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: Context.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: Context.DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of GUsb-1.0.GUsb.Context

    connect(sigName: "notify::debug-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::debug-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::debug-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::debug-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::debug-level", ...args: any[]): void
    connect(sigName: "notify::libusb-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::libusb-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::libusb-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::libusb-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::libusb-context", ...args: any[]): void
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
    disconnect(id: number): void
}

class Context extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Context

    static name: string

    // Constructors of GUsb-1.0.GUsb.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Creates a new context for accessing USB devices.
     * @constructor 
     * @returns a new %GUsbContext object or %NULL on error.
     */
    constructor() 
    /**
     * Creates a new context for accessing USB devices.
     * @constructor 
     * @returns a new %GUsbContext object or %NULL on error.
     */
    static new(): Context
    _init(config?: Context.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module Device {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GUsb-1.0.GUsb.Device

        context?: Context | null
        libusb_device?: any | null
        platform_id?: string | null
    }

}

interface Device extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Device

    readonly context: Context
    readonly libusbDevice: any
    readonly platformId: string | null
    __gtype__: number

    // Own fields of GUsb-1.0.GUsb.Device

    parentInstance: GObject.Object

    // Owm methods of GUsb-1.0.GUsb.Device

    /**
     * Adds a tag, which is included in the JSON log to identify the specific device.
     * 
     * For instance, there might be a pre-update runtime, a bootloader and a post-update runtime
     * and allowing tags to be saved to the backend object allows us to identify each version of
     * the same physical device.
     * @param tag a tag, for example `bootloader` or `runtime-reload`
     */
    addTag(tag: string): void
    /**
     * Perform a USB bulk transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success
     */
    bulkTransfer(endpoint: number, data: number[], timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number ]
    /**
     * Do an async bulk transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    bulkTransferAsync(endpoint: number, data: number[], timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the actual number of bytes sent, or -1 on error.
     */
    bulkTransferFinish(res: Gio.AsyncResult): number
    /**
     * Claim an interface of the device.
     * @param interface bInterfaceNumber of the interface you wish to claim
     * @param flags #GUsbDeviceClaimInterfaceFlags
     * @returns %TRUE on success
     */
    claimInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Clear all the events saved by the device.
     */
    clearEvents(): void
    /**
     * Closes the device when it is no longer required.
     * @returns %TRUE on success
     */
    close(): boolean
    /**
     * Perform a USB control transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param direction 
     * @param requestType the request type field for the setup packet
     * @param recipient 
     * @param request the request field for the setup packet
     * @param value the value field for the setup packet
     * @param idx the index field for the setup packet
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success
     */
    controlTransfer(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: number[], timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number ]
    /**
     * Do an async control transfer
     * @param direction 
     * @param requestType 
     * @param recipient 
     * @param request 
     * @param value 
     * @param idx 
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    controlTransferAsync(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: number[], timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the actual number of bytes sent, or -1 on error.
     */
    controlTransferFinish(res: Gio.AsyncResult): number
    /**
     * Gets the USB address for the device.
     * @returns The 8-bit address
     */
    getAddress(): number
    /**
     * Gets the first bos_descriptor that matches the descriptor capability.
     * If you want to find all the BOS descriptors that match (there may be other matching BOS
     * descriptors you have to use `g_usb_device_get_bos_descriptors()` and check each one manually.
     * @param capability a BOS capability type
     * @returns a #GUsbBosDescriptor or %NULL for not found
     */
    getBosDescriptor(capability: number): BosDescriptor
    /**
     * Gets all the BOS descriptors exported by the device.
     * 
     * The first time this method is used the hardware is queried and then after that cached results
     * are returned. To invalidate the caches use g_usb_device_invalidate().
     * @returns an array of BOS descriptors
     */
    getBosDescriptors(): BosDescriptor[]
    /**
     * Gets the USB bus number for the device.
     * @returns The 8-bit bus number
     */
    getBus(): number
    /**
     * Gets the device children if any exist.
     * @returns an array of #GUsbDevice
     */
    getChildren(): Device[]
    /**
     * Get the bConfigurationValue for the active configuration of the device.
     * 
     * Warning: this function is synchronous.
     * @returns The bConfigurationValue of the active config, or -1 on error
     */
    getConfiguration(): number
    /**
     * Get the index for the active Configuration string descriptor
     * ie, iConfiguration.
     * @returns a string descriptor index.
     */
    getConfigurationIndex(): number
    /**
     * Gets the date and time that the #GUsbDevice was created.
     * 
     * This can be used as an indicator if the device replugged, as the vendor and product IDs may not
     * change for some devices. Use `g_date_time_equal()` to verify equality.
     * @returns a #GDateTime
     */
    getCreated(): GLib.DateTime
    /**
     * Gets the string index from the vendor class interface descriptor.
     * @param classId a device class, e.g. 0xff for VENDOR
     * @param subclassId a device subclass
     * @param protocolId a protocol number
     * @returns a non-zero index, or 0x00 for failure
     */
    getCustomIndex(classId: number, subclassId: number, protocolId: number): number
    /**
     * Gets the device class, typically a #GUsbDeviceClassCode.
     * @returns a device class number, e.g. 0x09 is a USB hub.
     */
    getDeviceClass(): number
    /**
     * Gets the device protocol qualified by the class and subclass numbers.
     * See g_usb_device_get_device_class() and g_usb_device_get_device_subclass().
     * @returns a device protocol number.
     */
    getDeviceProtocol(): number
    /**
     * Gets the device subclass qualified by the class number.
     * See g_usb_device_get_device_class().
     * @returns a device subclass number.
     */
    getDeviceSubclass(): number
    /**
     * Gets all the events saved by the device.
     * 
     * Events are only collected when the `G_USB_CONTEXT_FLAGS_SAVE_EVENTS` flag is used before
     * enumerating the context. Events can be used to replay device transactions.
     * @returns an array of events
     */
    getEvents(): DeviceEvent[]
    /**
     * Gets the default HID descriptors exported by the device.
     * 
     * If more than one interface exports a HID descriptor, use g_usb_device_get_hid_descriptors()
     * instead.
     * @returns a HID descriptor, or %NULL
     */
    getHidDescriptorDefault(): any
    /**
     * Gets all the HID descriptors exported by the device.
     * 
     * The first time this method is used the hardware is queried and then after that cached results
     * are returned. To invalidate the caches use g_usb_device_invalidate().
     * @returns an array of HID descriptors
     */
    getHidDescriptors(): any[]
    /**
     * Gets the first interface that matches the vendor class interface descriptor.
     * If you want to find all the interfaces that match (there may be other
     * 'alternate' interfaces you have to use g_usb_device_get_interfaces() and
     * check each one manally.
     * @param classId a device class, e.g. 0xff for VENDOR
     * @param subclassId a device subclass
     * @param protocolId a protocol number
     * @returns a #GUsbInterface or %NULL for not found
     */
    getInterface(classId: number, subclassId: number, protocolId: number): Interface
    /**
     * Gets all the interfaces exported by the device.
     * 
     * The first time this method is used the hardware is queried and then after that cached results
     * are returned. To invalidate the caches use g_usb_device_invalidate().
     * @returns an array of interfaces or %NULL for error
     */
    getInterfaces(): Interface[]
    /**
     * Gets the index for the Manufacturer string descriptor.
     * @returns a string descriptor index.
     */
    getManufacturerIndex(): number
    /**
     * Gets the device parent if one exists.
     * @returns #GUsbDevice or %NULL
     */
    getParent(): Device
    /**
     * Gets the product ID for the device.
     * @returns an ID.
     */
    getPid(): number
    /**
     * Gets the product ID for the device as a string.
     * @returns an string ID, or %NULL if not available.
     */
    getPidAsStr(): string
    /**
     * Gets the platform identifier for the device.
     * 
     * When the device is removed and then replugged, this value is not expected to
     * be different.
     * @returns The platform ID, e.g. "usb:02:00:03:01"
     */
    getPlatformId(): string
    /**
     * Gets the USB port number for the device.
     * @returns The 8-bit port number
     */
    getPortNumber(): number
    /**
     * Gets the index for the Product string descriptor.
     * @returns a string descriptor index.
     */
    getProductIndex(): number
    /**
     * Gets the BCD firmware version number for the device.
     * @returns a version number in BCD format.
     */
    getRelease(): number
    /**
     * Gets the index for the Serial Number string descriptor.
     * @returns a string descriptor index.
     */
    getSerialNumberIndex(): number
    /**
     * Gets the BCD specification revision for the device. For example,
     * `0x0110` indicates USB 1.1 and 0x0320 indicates USB 3.2
     * @returns a specification revision in BCD format.
     */
    getSpec(): number
    /**
     * Get a string descriptor from the device. The returned string should be freed
     * with g_free() when no longer needed.
     * @param descIndex the index for the string descriptor to retrieve
     * @returns a newly-allocated string holding the descriptor, or NULL on error.
     */
    getStringDescriptor(descIndex: number): string | null
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * The descriptor will be at most 128 btes in length, if you need to
     * issue a request with either a smaller or larger descriptor, you can
     * use g_usb_device_get_string_descriptor_bytes_full instead.
     * @param descIndex the index for the string descriptor to retrieve
     * @param langid the language ID
     * @returns a possibly UTF-16 string, or NULL on error.
     */
    getStringDescriptorBytes(descIndex: number, langid: number): any
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * @param descIndex the index for the string descriptor to retrieve
     * @param langid the language ID
     * @param length size of the request data buffer
     * @returns a possibly UTF-16 string, or NULL on error.
     */
    getStringDescriptorBytesFull(descIndex: number, langid: number, length: number): any
    /**
     * Gets all the tags.
     * @returns string tags
     */
    getTags(): string[]
    /**
     * Gets the vendor ID for the device.
     * @returns an ID.
     */
    getVid(): number
    /**
     * Gets the vendor ID for the device as a string.
     * @returns an string ID, or %NULL if not available.
     */
    getVidAsStr(): string
    /**
     * Checks if a tag has been used to identify the specific device.
     * @param tag a tag, for example `bootloader` or `runtime-reload`
     * @returns %TRUE on success
     */
    hasTag(tag: string): boolean
    /**
     * Perform a USB interrupt transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success
     */
    interruptTransfer(endpoint: number, data: number[], timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number ]
    /**
     * Do an async interrupt transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    interruptTransferAsync(endpoint: number, data: number[], timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the actual number of bytes sent, or -1 on error.
     */
    interruptTransferFinish(res: Gio.AsyncResult): number
    /**
     * Invalidates the caches used in g_usb_device_get_interfaces().
     */
    invalidate(): void
    /**
     * Gets if the device is emulated.
     * @returns %TRUE if the device is emulated and not backed by a physical device.
     */
    isEmulated(): boolean
    /**
     * Opens the device for use.
     * 
     * Warning: this function is synchronous.
     * @returns %TRUE on success
     */
    open(): boolean
    /**
     * Release an interface of the device.
     * @param interface bInterfaceNumber of the interface you wish to release
     * @param flags #GUsbDeviceClaimInterfaceFlags
     * @returns %TRUE on success
     */
    releaseInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Removes a tag, which is included in the JSON log to identify the specific device.
     * @param tag a tag, for example `bootloader` or `runtime-reload`
     */
    removeTag(tag: string): void
    /**
     * Perform a USB port reset to reinitialize a device.
     * 
     * If the reset succeeds, the device will appear to disconnected and reconnected.
     * This means the `self` will no longer be valid and should be closed and
     * rediscovered.
     * 
     * This is a blocking function which usually incurs a noticeable delay.
     * @returns %TRUE on success
     */
    reset(): boolean
    /**
     * Set the active bConfigurationValue for the device.
     * 
     * Warning: this function is synchronous.
     * @param configuration the configuration value to set
     * @returns %TRUE on success
     */
    setConfiguration(configuration: number): boolean
    /**
     * Sets an alternate setting on an interface.
     * @param interface bInterfaceNumber of the interface you wish to release
     * @param alt alternative setting number
     * @returns %TRUE on success
     */
    setInterfaceAlt(interface: number, alt: number): boolean

    // Class property signals of GUsb-1.0.GUsb.Device

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::libusb-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::libusb-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::libusb-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::libusb-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::libusb-device", ...args: any[]): void
    connect(sigName: "notify::platform-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::platform-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::platform-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::platform-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::platform-id", ...args: any[]): void
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
    disconnect(id: number): void
}

class Device extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Device

    static name: string

    // Constructors of GUsb-1.0.GUsb.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module DeviceEvent {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DeviceEvent {

    // Own properties of GUsb-1.0.GUsb.DeviceEvent

    __gtype__: number

    // Owm methods of GUsb-1.0.GUsb.DeviceEvent

    /**
     * Gets any bytes data from the event.
     * @returns a #GBytes, or %NULL
     */
    getBytes(): any
    /**
     * Gets the event ID.
     * @returns string, or %NULL
     */
    getId(): string
    /**
     * Gets any return code from the event.
     * @returns a `enum libusb_error`
     */
    getRc(): number
    /**
     * Gets any status data from the event.
     * @returns a `enum libusb_transfer_status`, or -1 for failure
     */
    getStatus(): number
    /**
     * Set the bytes data to the event.
     * @param bytes a #GBytes
     */
    setBytes(bytes: any): void

    // Class property signals of GUsb-1.0.GUsb.DeviceEvent

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
    disconnect(id: number): void
}

class DeviceEvent extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.DeviceEvent

    static name: string

    // Constructors of GUsb-1.0.GUsb.DeviceEvent

    constructor(config?: DeviceEvent.ConstructorProperties) 
    _init(config?: DeviceEvent.ConstructorProperties): void
}

module DeviceList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    interface DeviceAddedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    interface DeviceRemovedSignalCallback {
        (device: Device): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUsb-1.0.GUsb.DeviceList

        context?: Context | null
    }

}

interface DeviceList {

    // Own properties of GUsb-1.0.GUsb.DeviceList

    readonly context: Context
    __gtype__: number

    // Own fields of GUsb-1.0.GUsb.DeviceList

    parentInstance: GObject.Object

    // Owm methods of GUsb-1.0.GUsb.DeviceList

    /**
     * This function does nothing.
     */
    coldplug(): void
    /**
     * Finds a device based on its bus and address values.
     * @param bus a bus number
     * @param address a bus address
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    findByBusAddress(bus: number, address: number): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]

    // Own virtual methods of GUsb-1.0.GUsb.DeviceList

    deviceAdded(device: Device): void
    deviceRemoved(device: Device): void

    // Own signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "device-added", callback: DeviceList.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: DeviceList.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: DeviceList.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: DeviceList.DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: DeviceList.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: DeviceList.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: DeviceList.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: DeviceList.DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
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
    disconnect(id: number): void
}

class DeviceList extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.DeviceList

    static name: string

    // Constructors of GUsb-1.0.GUsb.DeviceList

    constructor(config?: DeviceList.ConstructorProperties) 
    /**
     * Creates a new device list.
     * 
     * You will need to call g_usb_device_list_coldplug() to coldplug the
     * list of devices after creating a device list.
     * @constructor 
     * @param context a #GUsbContext
     * @returns a new #GUsbDeviceList
     */
    constructor(context: Context) 
    /**
     * Creates a new device list.
     * 
     * You will need to call g_usb_device_list_coldplug() to coldplug the
     * list of devices after creating a device list.
     * @constructor 
     * @param context a #GUsbContext
     * @returns a new #GUsbDeviceList
     */
    static new(context: Context): DeviceList
    _init(config?: DeviceList.ConstructorProperties): void
}

module Endpoint {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Endpoint {

    // Own properties of GUsb-1.0.GUsb.Endpoint

    __gtype__: number

    // Owm methods of GUsb-1.0.GUsb.Endpoint

    /**
     * Gets the address of the endpoint.
     * @returns The 4-bit endpoint address
     */
    getAddress(): number
    /**
     * Gets the direction of the endpoint.
     * @returns The endpoint direction
     */
    getDirection(): DeviceDirection
    /**
     * Gets any extra data from the endpoint.
     * @returns a #GBytes, or %NULL for failure
     */
    getExtra(): any
    /**
     * Gets the type of endpoint.
     * @returns The 8-bit type
     */
    getKind(): number
    /**
     * Gets the maximum packet size this endpoint is capable of sending/receiving.
     * @returns The maximum packet size
     */
    getMaximumPacketSize(): number
    /**
     * Gets the number part of endpoint address.
     * @returns The lower 4-bit of endpoint address
     */
    getNumber(): number
    /**
     * Gets the endpoint polling interval.
     * @returns The endpoint polling interval
     */
    getPollingInterval(): number
    /**
     * Gets the rate at which synchronization feedback is provided, for audio device only.
     * @returns The endpoint refresh
     */
    getRefresh(): number
    /**
     * Gets the address if the synch endpoint, for audio device only.
     * @returns The synch endpoint address
     */
    getSynchAddress(): number

    // Class property signals of GUsb-1.0.GUsb.Endpoint

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
    disconnect(id: number): void
}

class Endpoint extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Endpoint

    static name: string

    // Constructors of GUsb-1.0.GUsb.Endpoint

    constructor(config?: Endpoint.ConstructorProperties) 
    _init(config?: Endpoint.ConstructorProperties): void
}

module Interface {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Interface {

    // Own properties of GUsb-1.0.GUsb.Interface

    __gtype__: number

    // Owm methods of GUsb-1.0.GUsb.Interface

    /**
     * Gets the alternate setting for the interface.
     * @returns alt setting, typically zero.
     */
    getAlternate(): number
    /**
     * Gets the interface class, typically a #GUsbInterfaceClassCode.
     * @returns a interface class number, e.g. 0x09 is a USB hub.
     */
    getClass(): number
    /**
     * Gets interface endpoints.
     * @returns an array of endpoints, or %NULL on failure.
     */
    getEndpoints(): Endpoint[]
    /**
     * Gets any extra data from the interface.
     * @returns a #GBytes, or %NULL for failure
     */
    getExtra(): any
    /**
     * Gets the index for the string descriptor.
     * @returns a string descriptor index.
     */
    getIndex(): number
    /**
     * Gets the type of interface.
     * @returns The 8-bit address
     */
    getKind(): number
    /**
     * Gets the USB bus number for the interface.
     * @returns The 8-bit bus number
     */
    getLength(): number
    /**
     * Gets the interface number.
     * @returns The interface ID
     */
    getNumber(): number
    /**
     * Gets the interface protocol qualified by the class and subclass numbers.
     * See g_usb_interface_get_class() and g_usb_interface_get_subclass().
     * @returns a interface protocol number.
     */
    getProtocol(): number
    /**
     * Gets the interface subclass qualified by the class number.
     * See g_usb_interface_get_class().
     * @returns a interface subclass number.
     */
    getSubclass(): number

    // Class property signals of GUsb-1.0.GUsb.Interface

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
    disconnect(id: number): void
}

class Interface extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Interface

    static name: string

    // Constructors of GUsb-1.0.GUsb.Interface

    constructor(config?: Interface.ConstructorProperties) 
    _init(config?: Interface.ConstructorProperties): void
}

interface BosDescriptorClass {

    // Own fields of GUsb-1.0.GUsb.BosDescriptorClass

    parentClass: GObject.ObjectClass
}

abstract class BosDescriptorClass {

    // Own properties of GUsb-1.0.GUsb.BosDescriptorClass

    static name: string
}

interface ContextClass {

    // Own fields of GUsb-1.0.GUsb.ContextClass

    parentClass: GObject.ObjectClass
    deviceAdded: (self: Context, device: Device) => void
    deviceRemoved: (self: Context, device: Device) => void
    deviceChanged: (self: Context, device: Device) => void
}

abstract class ContextClass {

    // Own properties of GUsb-1.0.GUsb.ContextClass

    static name: string
}

interface DeviceClass {

    // Own fields of GUsb-1.0.GUsb.DeviceClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceClass {

    // Own properties of GUsb-1.0.GUsb.DeviceClass

    static name: string
}

interface DeviceEventClass {

    // Own fields of GUsb-1.0.GUsb.DeviceEventClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceEventClass {

    // Own properties of GUsb-1.0.GUsb.DeviceEventClass

    static name: string
}

interface DeviceListClass {

    // Own fields of GUsb-1.0.GUsb.DeviceListClass

    parentClass: GObject.ObjectClass
    deviceAdded: (self: DeviceList, device: Device) => void
    deviceRemoved: (self: DeviceList, device: Device) => void
}

abstract class DeviceListClass {

    // Own properties of GUsb-1.0.GUsb.DeviceListClass

    static name: string
}

interface EndpointClass {

    // Own fields of GUsb-1.0.GUsb.EndpointClass

    parentClass: GObject.ObjectClass
}

abstract class EndpointClass {

    // Own properties of GUsb-1.0.GUsb.EndpointClass

    static name: string
}

interface InterfaceClass {

    // Own fields of GUsb-1.0.GUsb.InterfaceClass

    parentClass: GObject.ObjectClass
}

abstract class InterfaceClass {

    // Own properties of GUsb-1.0.GUsb.InterfaceClass

    static name: string
}

interface Source {

    // Owm methods of GUsb-1.0.GUsb.Source

    /**
     * This function does nothing.
     * @param func a function to call
     */
    setCallback(func: GLib.SourceFunc): void
}

class Source {

    // Own properties of GUsb-1.0.GUsb.Source

    static name: string

    // Constructors of GUsb-1.0.GUsb.Source

    static errorQuark(): GLib.Quark
}

}

export default GUsb;
// END