// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUsb-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
 */
function strerror(errorCode: number): string
/**
 * Gets the GUsb installed runtime version.
 */
function versionString(): string
interface Context_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GUsb-1.0.GUsb.Context

    debugLevel?: number | null
}

/**
 * Signal callback interface for `device-added`
 */
interface Context_DeviceAddedSignalCallback {
    (device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface Context_DeviceRemovedSignalCallback {
    (device: Device): void
}

interface Context extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Context

    debugLevel: number
    readonly libusbContext: object

    // Own fields of GUsb-1.0.GUsb.Context

    parent: GObject.Object
    priv: ContextPrivate

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
     */
    findByBusAddress(bus: number, address: number): Device
    /**
     * Finds a device based on its platform id value.
     * @param platformId a platform id, e.g. "usb:00:03:03:02"
     */
    findByPlatformId(platformId: string): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     */
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]
    /**
     * Sets the flags to use for the context.
     */
    getFlags(): ContextFlags
    /**
     * Gets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
     */
    getHotplugPollInterval(): number
    /**
     * Gets the internal GMainContext to use for synchronous methods.
     * By default the value is set to the value of g_main_context_default()
     */
    getMainContext(): GLib.MainContext
    /**
     * This function does nothing.
     * @param mainCtx a #GMainContext, or %NULL
     */
    getSource(mainCtx: GLib.MainContext): Source
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
     */
    waitForReplug(device: Device, timeoutMs: number): Device

    // Own signals of GUsb-1.0.GUsb.Context

    connect(sigName: "device-added", callback: Context_DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Context_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: Context_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: Context_DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: Context_DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Context_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: Context_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: Context_DeviceRemovedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Context extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of GUsb-1.0.GUsb.Context

    constructor(config?: Context_ConstructProps) 
    /**
     * Creates a new context for accessing USB devices.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new context for accessing USB devices.
     * @constructor 
     */
    static new(): Context
    _init(config?: Context_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface Device_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GUsb-1.0.GUsb.Device

    context?: Context | null
    libusbDevice?: object | null
    platformId?: string | null
}

interface Device extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Device

    readonly context: Context
    readonly libusbDevice: object
    readonly platformId: string

    // Own fields of GUsb-1.0.GUsb.Device

    parent: GObject.Object
    priv: DevicePrivate

    // Owm methods of GUsb-1.0.GUsb.Device

    /**
     * Perform a USB bulk transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     */
    bulkTransfer(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number ]
    /**
     * Do an async bulk transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    bulkTransferAsync(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    bulkTransferFinish(res: Gio.AsyncResult): number
    /**
     * Claim an interface of the device.
     * @param interface bInterfaceNumber of the interface you wish to claim
     * @param flags #GUsbDeviceClaimInterfaceFlags
     */
    claimInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Closes the device when it is no longer required.
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
     */
    controlTransfer(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number ]
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
    controlTransferAsync(direction: DeviceDirection, requestType: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    controlTransferFinish(res: Gio.AsyncResult): number
    /**
     * Gets the USB address for the device.
     */
    getAddress(): number
    /**
     * Gets the USB bus number for the device.
     */
    getBus(): number
    /**
     * Gets the device children if any exist.
     */
    getChildren(): Device[]
    /**
     * Get the bConfigurationValue for the active configuration of the device.
     * 
     * Warning: this function is synchronous.
     */
    getConfiguration(): number
    /**
     * Get the index for the active Configuration string descriptor
     * ie, iConfiguration.
     */
    getConfigurationIndex(): number
    /**
     * Gets the string index from the vendor class interface descriptor.
     * @param classId a device class, e.g. 0xff for VENDOR
     * @param subclassId a device subclass
     * @param protocolId a protocol number
     */
    getCustomIndex(classId: number, subclassId: number, protocolId: number): number
    /**
     * Gets the device class, typically a #GUsbDeviceClassCode.
     */
    getDeviceClass(): number
    /**
     * Gets the device protocol qualified by the class and subclass numbers.
     * See g_usb_device_get_device_class() and g_usb_device_get_device_subclass().
     */
    getDeviceProtocol(): number
    /**
     * Gets the device subclass qualified by the class number.
     * See g_usb_device_get_device_class().
     */
    getDeviceSubclass(): number
    /**
     * Gets the first interface that matches the vendor class interface descriptor.
     * If you want to find all the interfaces that match (there may be other
     * 'alternate' interfaces you have to use g_usb_device_get_interfaces() and
     * check each one manally.
     * @param classId a device class, e.g. 0xff for VENDOR
     * @param subclassId a device subclass
     * @param protocolId a protocol number
     */
    getInterface(classId: number, subclassId: number, protocolId: number): Interface
    /**
     * Gets all the interfaces exported by the device.
     */
    getInterfaces(): Interface[]
    /**
     * Gets the index for the Manufacturer string descriptor.
     */
    getManufacturerIndex(): number
    /**
     * Gets the device parent if one exists.
     */
    getParent(): Device
    /**
     * Gets the product ID for the device.
     */
    getPid(): number
    /**
     * Gets the product ID for the device as a string.
     */
    getPidAsStr(): string
    /**
     * Gets the platform identifier for the device.
     * 
     * When the device is removed and then replugged, this value is not expected to
     * be different.
     */
    getPlatformId(): string
    /**
     * Gets the USB port number for the device.
     */
    getPortNumber(): number
    /**
     * Gets the index for the Product string descriptor.
     */
    getProductIndex(): number
    /**
     * Gets the BCD firmware version number for the device.
     */
    getRelease(): number
    /**
     * Gets the index for the Serial Number string descriptor.
     */
    getSerialNumberIndex(): number
    /**
     * Gets the BCD specification revision for the device. For example,
     * `0x0110` indicates USB 1.1 and 0x0320 indicates USB 3.2
     */
    getSpec(): number
    /**
     * Get a string descriptor from the device. The returned string should be freed
     * with g_free() when no longer needed.
     * @param descIndex the index for the string descriptor to retrieve
     */
    getStringDescriptor(descIndex: number): string
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * The descriptor will be at most 128 btes in length, if you need to
     * issue a request with either a smaller or larger descriptor, you can
     * use g_usb_device_get_string_descriptor_bytes_full instead.
     * @param descIndex the index for the string descriptor to retrieve
     * @param langid the language ID
     */
    getStringDescriptorBytes(descIndex: number, langid: number): any
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * @param descIndex the index for the string descriptor to retrieve
     * @param langid the language ID
     * @param length size of the request data buffer
     */
    getStringDescriptorBytesFull(descIndex: number, langid: number, length: number): any
    /**
     * Gets the vendor ID for the device.
     */
    getVid(): number
    /**
     * Gets the vendor ID for the device as a string.
     */
    getVidAsStr(): string
    /**
     * Perform a USB interrupt transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     */
    interruptTransfer(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actualLength */ number ]
    /**
     * Do an async interrupt transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    interruptTransferAsync(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    interruptTransferFinish(res: Gio.AsyncResult): number
    /**
     * Opens the device for use.
     * 
     * Warning: this function is synchronous.
     */
    open(): boolean
    /**
     * Release an interface of the device.
     * @param interface bInterfaceNumber of the interface you wish to release
     * @param flags #GUsbDeviceClaimInterfaceFlags
     */
    releaseInterface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Perform a USB port reset to reinitialize a device.
     * 
     * If the reset succeeds, the device will appear to disconnected and reconnected.
     * This means the `device` will no longer be valid and should be closed and
     * rediscovered.
     * 
     * This is a blocking function which usually incurs a noticeable delay.
     */
    reset(): boolean
    /**
     * Set the active bConfigurationValue for the device.
     * 
     * Warning: this function is synchronous.
     * @param configuration the configuration value to set
     */
    setConfiguration(configuration: number): boolean
    /**
     * Sets an alternate setting on an interface.
     * @param interface bInterfaceNumber of the interface you wish to release
     * @param alt alternative setting number
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Device extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUsb-1.0.GUsb.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface DeviceList_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUsb-1.0.GUsb.DeviceList

    context?: Context | null
}

/**
 * Signal callback interface for `device-added`
 */
interface DeviceList_DeviceAddedSignalCallback {
    (device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface DeviceList_DeviceRemovedSignalCallback {
    (device: Device): void
}

interface DeviceList {

    // Own properties of GUsb-1.0.GUsb.DeviceList

    readonly context: Context

    // Own fields of GUsb-1.0.GUsb.DeviceList

    parent: GObject.Object
    priv: DeviceListPrivate

    // Owm methods of GUsb-1.0.GUsb.DeviceList

    /**
     * This function does nothing.
     */
    coldplug(): void
    /**
     * Finds a device based on its bus and address values.
     * @param bus a bus number
     * @param address a bus address
     */
    findByBusAddress(bus: number, address: number): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     */
    findByVidPid(vid: number, pid: number): Device
    getDevices(): Device[]

    // Own signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "device-added", callback: DeviceList_DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: DeviceList_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: DeviceList_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: DeviceList_DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: DeviceList_DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: DeviceList_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: DeviceList_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: DeviceList_DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DeviceList extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.DeviceList

    static name: string
    static $gtype: GObject.GType<DeviceList>

    // Constructors of GUsb-1.0.GUsb.DeviceList

    constructor(config?: DeviceList_ConstructProps) 
    /**
     * Creates a new device list.
     * 
     * You will need to call g_usb_device_list_coldplug() to coldplug the
     * list of devices after creating a device list.
     * @constructor 
     * @param context a #GUsbContext
     */
    constructor(context: Context) 
    /**
     * Creates a new device list.
     * 
     * You will need to call g_usb_device_list_coldplug() to coldplug the
     * list of devices after creating a device list.
     * @constructor 
     * @param context a #GUsbContext
     */
    static new(context: Context): DeviceList
    _init(config?: DeviceList_ConstructProps): void
}

interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
}

interface Endpoint {

    // Owm methods of GUsb-1.0.GUsb.Endpoint

    /**
     * Gets the address of the endpoint.
     */
    getAddress(): number
    /**
     * Gets the direction of the endpoint.
     */
    getDirection(): DeviceDirection
    /**
     * Gets any extra data from the endpoint.
     */
    getExtra(): any
    /**
     * Gets the type of endpoint.
     */
    getKind(): number
    /**
     * Gets the maximum packet size this endpoint is capable of sending/receiving.
     */
    getMaximumPacketSize(): number
    /**
     * Gets the number part of endpoint address.
     */
    getNumber(): number
    /**
     * Gets the endpoint polling interval.
     */
    getPollingInterval(): number
    /**
     * Gets the rate at which synchronization feedback is provided, for audio device only.
     */
    getRefresh(): number
    /**
     * Gets the address if the synch endpoint, for audio device only.
     */
    getSynchAddress(): number

    // Class property signals of GUsb-1.0.GUsb.Endpoint

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Endpoint extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Endpoint

    static name: string
    static $gtype: GObject.GType<Endpoint>

    // Constructors of GUsb-1.0.GUsb.Endpoint

    constructor(config?: Endpoint_ConstructProps) 
    _init(config?: Endpoint_ConstructProps): void
}

interface Interface_ConstructProps extends GObject.Object_ConstructProps {
}

interface Interface {

    // Owm methods of GUsb-1.0.GUsb.Interface

    /**
     * Gets the alternate setting for the interface.
     */
    getAlternate(): number
    /**
     * Gets the interface class, typically a #GUsbInterfaceClassCode.
     */
    getClass(): number
    /**
     * Gets interface endpoints.
     */
    getEndpoints(): Endpoint[]
    /**
     * Gets any extra data from the interface.
     */
    getExtra(): any
    /**
     * Gets the index for the string descriptor.
     */
    getIndex(): number
    /**
     * Gets the type of interface.
     */
    getKind(): number
    /**
     * Gets the USB bus number for the interface.
     */
    getLength(): number
    /**
     * Gets the interface number.
     */
    getNumber(): number
    /**
     * Gets the interface protocol qualified by the class and subclass numbers.
     * See g_usb_interface_get_class() and g_usb_interface_get_subclass().
     */
    getProtocol(): number
    /**
     * Gets the interface subclass qualified by the class number.
     * See g_usb_interface_get_class().
     */
    getSubclass(): number

    // Class property signals of GUsb-1.0.GUsb.Interface

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Interface extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Interface

    static name: string
    static $gtype: GObject.GType<Interface>

    // Constructors of GUsb-1.0.GUsb.Interface

    constructor(config?: Interface_ConstructProps) 
    _init(config?: Interface_ConstructProps): void
}

interface ContextClass {

    // Own fields of GUsb-1.0.GUsb.ContextClass

    parentClass: GObject.ObjectClass
    deviceAdded: (context: Context, device: Device) => void
    deviceRemoved: (context: Context, device: Device) => void
}

abstract class ContextClass {

    // Own properties of GUsb-1.0.GUsb.ContextClass

    static name: string
}

interface ContextPrivate {
}

/**
 * Private #GUsbContext data
 * @record 
 */
class ContextPrivate {

    // Own properties of GUsb-1.0.GUsb.ContextPrivate

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

interface DeviceListClass {

    // Own fields of GUsb-1.0.GUsb.DeviceListClass

    parentClass: GObject.ObjectClass
    deviceAdded: (list: DeviceList, device: Device) => void
    deviceRemoved: (list: DeviceList, device: Device) => void
}

abstract class DeviceListClass {

    // Own properties of GUsb-1.0.GUsb.DeviceListClass

    static name: string
}

interface DeviceListPrivate {
}

class DeviceListPrivate {

    // Own properties of GUsb-1.0.GUsb.DeviceListPrivate

    static name: string
}

interface DevicePrivate {
}

/**
 * Private #GUsbDevice data
 * @record 
 */
class DevicePrivate {

    // Own properties of GUsb-1.0.GUsb.DevicePrivate

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