// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUsb-1.0
 */

import type * as Gjs from './Gjs';
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
function source_error_quark(): GLib.Quark
/**
 * Converts the error code into a string
 * @param error_code a libusb error code
 */
function strerror(error_code: number): string
/**
 * Gets the GUsb installed runtime version.
 */
function version_string(): string
interface Context_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GUsb-1.0.GUsb.Context

    debug_level?: number | null
}

/**
 * Signal callback interface for `device-added`
 */
interface Context_DeviceAddedSignalCallback {
    ($obj: Context, device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface Context_DeviceRemovedSignalCallback {
    ($obj: Context, device: Device): void
}

interface Context extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Context

    debug_level: number
    readonly libusb_context: object

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
    find_by_bus_address(bus: number, address: number): Device
    /**
     * Finds a device based on its platform id value.
     * @param platform_id a platform id, e.g. "usb:00:03:03:02"
     */
    find_by_platform_id(platform_id: string): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     */
    find_by_vid_pid(vid: number, pid: number): Device
    get_devices(): Device[]
    /**
     * Sets the flags to use for the context.
     */
    get_flags(): ContextFlags
    /**
     * Gets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
     */
    get_hotplug_poll_interval(): number
    /**
     * Gets the internal GMainContext to use for synchronous methods.
     * By default the value is set to the value of g_main_context_default()
     */
    get_main_context(): GLib.MainContext
    /**
     * This function does nothing.
     * @param main_ctx a #GMainContext, or %NULL
     */
    get_source(main_ctx: GLib.MainContext): Source
    /**
     * Sets the debug flags which control what is logged to the console.
     * 
     * Using %G_LOG_LEVEL_INFO will output to standard out, and everything
     * else logs to standard error.
     * @param flags a GLogLevelFlags such as %G_LOG_LEVEL_ERROR | %G_LOG_LEVEL_INFO, or 0
     */
    set_debug(flags: GLib.LogLevelFlags): void
    /**
     * Sets the flags to use for the context. These should be set before
     * g_usb_context_enumerate() is called.
     * @param flags some #GUsbContextFlags, e.g. %G_USB_CONTEXT_FLAGS_AUTO_OPEN_DEVICES
     */
    set_flags(flags: ContextFlags): void
    /**
     * Sets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
     * This defaults to 1000ms and can be changed before or after g_usb_context_enumerate() has been
     * called.
     * @param hotplug_poll_interval the interval in ms
     */
    set_hotplug_poll_interval(hotplug_poll_interval: number): void
    /**
     * Sets the internal GMainContext to use for synchronous methods.
     * @param main_ctx 
     */
    set_main_context(main_ctx: GLib.MainContext): void
    /**
     * Waits for the device to be replugged.
     * It may come back with a different VID:PID.
     * 
     * Warning: This is synchronous and blocks until the device comes
     * back or the timeout triggers.
     * @param device a #GUsbDevice
     * @param timeout_ms timeout to wait
     */
    wait_for_replug(device: Device, timeout_ms: number): Device

    // Own virtual methods of GUsb-1.0.GUsb.Context

    vfunc_device_added(device: Device): void
    vfunc_device_removed(device: Device): void

    // Own signals of GUsb-1.0.GUsb.Context

    connect(sigName: "device-added", callback: Context_DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: Context_DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: Device, ...args: any[]): void
    connect(sigName: "device-removed", callback: Context_DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Context_DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", device: Device, ...args: any[]): void

    // Class property signals of GUsb-1.0.GUsb.Context

    connect(sigName: "notify::debug-level", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-level", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::debug-level", ...args: any[]): void
    connect(sigName: "notify::libusb-context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libusb-context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::libusb-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    static error_quark(): GLib.Quark
}

interface Device_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GUsb-1.0.GUsb.Device

    context?: Context | null
    libusb_device?: object | null
    platform_id?: string | null
}

interface Device extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Device

    readonly context: Context
    readonly libusb_device: object
    readonly platform_id: string

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
    bulk_transfer(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number ]
    /**
     * Do an async bulk transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    bulk_transfer_async(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    bulk_transfer_finish(res: Gio.AsyncResult): number
    /**
     * Claim an interface of the device.
     * @param interface bInterfaceNumber of the interface you wish to claim
     * @param flags #GUsbDeviceClaimInterfaceFlags
     */
    claim_interface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Closes the device when it is no longer required.
     */
    close(): boolean
    /**
     * Perform a USB control transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param direction 
     * @param request_type the request type field for the setup packet
     * @param recipient 
     * @param request the request field for the setup packet
     * @param value the value field for the setup packet
     * @param idx the index field for the setup packet
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     */
    control_transfer(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number ]
    /**
     * Do an async control transfer
     * @param direction 
     * @param request_type 
     * @param recipient 
     * @param request 
     * @param value 
     * @param idx 
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    control_transfer_async(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    control_transfer_finish(res: Gio.AsyncResult): number
    /**
     * Gets the USB address for the device.
     */
    get_address(): number
    /**
     * Gets the USB bus number for the device.
     */
    get_bus(): number
    /**
     * Gets the device children if any exist.
     */
    get_children(): Device[]
    /**
     * Get the bConfigurationValue for the active configuration of the device.
     * 
     * Warning: this function is synchronous.
     */
    get_configuration(): number
    /**
     * Get the index for the active Configuration string descriptor
     * ie, iConfiguration.
     */
    get_configuration_index(): number
    /**
     * Gets the string index from the vendor class interface descriptor.
     * @param class_id a device class, e.g. 0xff for VENDOR
     * @param subclass_id a device subclass
     * @param protocol_id a protocol number
     */
    get_custom_index(class_id: number, subclass_id: number, protocol_id: number): number
    /**
     * Gets the device class, typically a #GUsbDeviceClassCode.
     */
    get_device_class(): number
    /**
     * Gets the device protocol qualified by the class and subclass numbers.
     * See g_usb_device_get_device_class() and g_usb_device_get_device_subclass().
     */
    get_device_protocol(): number
    /**
     * Gets the device subclass qualified by the class number.
     * See g_usb_device_get_device_class().
     */
    get_device_subclass(): number
    /**
     * Gets the first interface that matches the vendor class interface descriptor.
     * If you want to find all the interfaces that match (there may be other
     * 'alternate' interfaces you have to use g_usb_device_get_interfaces() and
     * check each one manally.
     * @param class_id a device class, e.g. 0xff for VENDOR
     * @param subclass_id a device subclass
     * @param protocol_id a protocol number
     */
    get_interface(class_id: number, subclass_id: number, protocol_id: number): Interface
    /**
     * Gets all the interfaces exported by the device.
     */
    get_interfaces(): Interface[]
    /**
     * Gets the index for the Manufacturer string descriptor.
     */
    get_manufacturer_index(): number
    /**
     * Gets the device parent if one exists.
     */
    get_parent(): Device
    /**
     * Gets the product ID for the device.
     */
    get_pid(): number
    /**
     * Gets the product ID for the device as a string.
     */
    get_pid_as_str(): string
    /**
     * Gets the platform identifier for the device.
     * 
     * When the device is removed and then replugged, this value is not expected to
     * be different.
     */
    get_platform_id(): string
    /**
     * Gets the USB port number for the device.
     */
    get_port_number(): number
    /**
     * Gets the index for the Product string descriptor.
     */
    get_product_index(): number
    /**
     * Gets the BCD firmware version number for the device.
     */
    get_release(): number
    /**
     * Gets the index for the Serial Number string descriptor.
     */
    get_serial_number_index(): number
    /**
     * Gets the BCD specification revision for the device. For example,
     * `0x0110` indicates USB 1.1 and 0x0320 indicates USB 3.2
     */
    get_spec(): number
    /**
     * Get a string descriptor from the device. The returned string should be freed
     * with g_free() when no longer needed.
     * @param desc_index the index for the string descriptor to retrieve
     */
    get_string_descriptor(desc_index: number): string
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * The descriptor will be at most 128 btes in length, if you need to
     * issue a request with either a smaller or larger descriptor, you can
     * use g_usb_device_get_string_descriptor_bytes_full instead.
     * @param desc_index the index for the string descriptor to retrieve
     * @param langid the language ID
     */
    get_string_descriptor_bytes(desc_index: number, langid: number): GLib.Bytes
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * @param desc_index the index for the string descriptor to retrieve
     * @param langid the language ID
     * @param length size of the request data buffer
     */
    get_string_descriptor_bytes_full(desc_index: number, langid: number, length: number): GLib.Bytes
    /**
     * Gets the vendor ID for the device.
     */
    get_vid(): number
    /**
     * Gets the vendor ID for the device as a string.
     */
    get_vid_as_str(): string
    /**
     * Perform a USB interrupt transfer.
     * 
     * Warning: this function is synchronous, and cannot be cancelled.
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     */
    interrupt_transfer(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number ]
    /**
     * Do an async interrupt transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    interrupt_transfer_async(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    interrupt_transfer_finish(res: Gio.AsyncResult): number
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
    release_interface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
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
    set_configuration(configuration: number): boolean
    /**
     * Sets an alternate setting on an interface.
     * @param interface bInterfaceNumber of the interface you wish to release
     * @param alt alternative setting number
     */
    set_interface_alt(interface: number, alt: number): boolean

    // Class property signals of GUsb-1.0.GUsb.Device

    connect(sigName: "notify::context", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::libusb-device", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libusb-device", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::libusb-device", ...args: any[]): void
    connect(sigName: "notify::platform-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::platform-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::platform-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Device extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUsb-1.0.GUsb.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DeviceList_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUsb-1.0.GUsb.DeviceList

    context?: Context | null
}

/**
 * Signal callback interface for `device-added`
 */
interface DeviceList_DeviceAddedSignalCallback {
    ($obj: DeviceList, device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface DeviceList_DeviceRemovedSignalCallback {
    ($obj: DeviceList, device: Device): void
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
    find_by_bus_address(bus: number, address: number): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     */
    find_by_vid_pid(vid: number, pid: number): Device
    get_devices(): Device[]

    // Own virtual methods of GUsb-1.0.GUsb.DeviceList

    vfunc_device_added(device: Device): void
    vfunc_device_removed(device: Device): void

    // Own signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "device-added", callback: DeviceList_DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: DeviceList_DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: Device, ...args: any[]): void
    connect(sigName: "device-removed", callback: DeviceList_DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: DeviceList_DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", device: Device, ...args: any[]): void

    // Class property signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "notify::context", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_address(): number
    /**
     * Gets the direction of the endpoint.
     */
    get_direction(): DeviceDirection
    /**
     * Gets any extra data from the endpoint.
     */
    get_extra(): GLib.Bytes
    /**
     * Gets the type of endpoint.
     */
    get_kind(): number
    /**
     * Gets the maximum packet size this endpoint is capable of sending/receiving.
     */
    get_maximum_packet_size(): number
    /**
     * Gets the number part of endpoint address.
     */
    get_number(): number
    /**
     * Gets the endpoint polling interval.
     */
    get_polling_interval(): number
    /**
     * Gets the rate at which synchronization feedback is provided, for audio device only.
     */
    get_refresh(): number
    /**
     * Gets the address if the synch endpoint, for audio device only.
     */
    get_synch_address(): number

    // Class property signals of GUsb-1.0.GUsb.Endpoint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_alternate(): number
    /**
     * Gets the interface class, typically a #GUsbInterfaceClassCode.
     */
    get_class(): number
    /**
     * Gets interface endpoints.
     */
    get_endpoints(): Endpoint[]
    /**
     * Gets any extra data from the interface.
     */
    get_extra(): GLib.Bytes
    /**
     * Gets the index for the string descriptor.
     */
    get_index(): number
    /**
     * Gets the type of interface.
     */
    get_kind(): number
    /**
     * Gets the USB bus number for the interface.
     */
    get_length(): number
    /**
     * Gets the interface number.
     */
    get_number(): number
    /**
     * Gets the interface protocol qualified by the class and subclass numbers.
     * See g_usb_interface_get_class() and g_usb_interface_get_subclass().
     */
    get_protocol(): number
    /**
     * Gets the interface subclass qualified by the class number.
     * See g_usb_interface_get_class().
     */
    get_subclass(): number

    // Class property signals of GUsb-1.0.GUsb.Interface

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_class: GObject.ObjectClass
    device_added: (context: Context, device: Device) => void
    device_removed: (context: Context, device: Device) => void
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

    parent_class: GObject.ObjectClass
}

abstract class DeviceClass {

    // Own properties of GUsb-1.0.GUsb.DeviceClass

    static name: string
}

interface DeviceListClass {

    // Own fields of GUsb-1.0.GUsb.DeviceListClass

    parent_class: GObject.ObjectClass
    device_added: (list: DeviceList, device: Device) => void
    device_removed: (list: DeviceList, device: Device) => void
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

    parent_class: GObject.ObjectClass
}

abstract class EndpointClass {

    // Own properties of GUsb-1.0.GUsb.EndpointClass

    static name: string
}

interface InterfaceClass {

    // Own fields of GUsb-1.0.GUsb.InterfaceClass

    parent_class: GObject.ObjectClass
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
    set_callback(func: GLib.SourceFunc): void
}

class Source {

    // Own properties of GUsb-1.0.GUsb.Source

    static name: string

    // Constructors of GUsb-1.0.GUsb.Source

    static error_quark(): GLib.Quark
}

}
export default GUsb;