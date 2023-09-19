
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gusb-1.0-ambient.d.ts';
import './gusb-1.0-import.d.ts';
/**
 * GUsb-1.0
 */

import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum ContextError {
    CONTEXT_ERROR_INTERNAL,
}
/**
 * The USB device class.
 */
export enum DeviceClassCode {
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
export enum DeviceDirection {
    DEVICE_TO_HOST,
    HOST_TO_DEVICE,
}
/**
 * The error code.
 */
export enum DeviceError {
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
export enum DeviceLangid {
    INVALID,
    ENGLISH_UNITED_STATES,
}
/**
 * The message recipient.
 */
export enum DeviceRecipient {
    DEVICE,
    INTERFACE,
    ENDPOINT,
    OTHER,
}
/**
 * The message request type.
 */
export enum DeviceRequestType {
    STANDARD,
    CLASS,
    VENDOR,
    RESERVED,
}
/**
 * The error code.
 */
export enum SourceError {
    SOURCE_ERROR_INTERNAL,
}
/**
 * The flags to use for the context.
 * @bitfield 
 */
export enum ContextFlags {
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
export enum DeviceClaimInterfaceFlags {
    NONE,
    BIND_KERNEL_DRIVER,
}
/**
 * The compile-time major version
 */
export const MAJOR_VERSION: number
/**
 * The compile-time micro version
 */
export const MICRO_VERSION: number
/**
 * The compile-time minor version
 */
export const MINOR_VERSION: number
export function source_error_quark(): GLib.Quark
/**
 * Converts the error code into a string
 * @param error_code a libusb error code
 * @returns String, or %NULL
 */
export function strerror(error_code: number): string | null
/**
 * Gets the GUsb installed runtime version.
 * @returns a version number, e.g. "0.3.1"
 */
export function version_string(): string | null
export module BosDescriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BosDescriptor {

    // Owm methods of GUsb-1.0.GUsb.BosDescriptor

    /**
     * Gets the BOS descriptor capability.
     * @returns capability
     */
    get_capability(): number
    /**
     * Gets any extra data from the BOS descriptor.
     * @returns a #GBytes, or %NULL for failure
     */
    get_extra(): GLib.Bytes

    // Class property signals of GUsb-1.0.GUsb.BosDescriptor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BosDescriptor extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.BosDescriptor

    static name: string
    static $gtype: GObject.GType<BosDescriptor>

    // Constructors of GUsb-1.0.GUsb.BosDescriptor

    constructor(config?: BosDescriptor.ConstructorProperties) 
    _init(config?: BosDescriptor.ConstructorProperties): void
}

export module Context {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    export interface DeviceAddedSignalCallback {
        ($obj: Context, device: Device): void
    }

    /**
     * Signal callback interface for `device-changed`
     */
    export interface DeviceChangedSignalCallback {
        ($obj: Context, device: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        ($obj: Context, device: Device): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GUsb-1.0.GUsb.Context

        debug_level?: number | null
    }

}

export interface Context extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Context

    debug_level: number
    readonly libusb_context: any

    // Own fields of GUsb-1.0.GUsb.Context

    parent_instance: GObject.Object

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
    find_by_bus_address(bus: number, address: number): Device
    /**
     * Finds a device based on its platform id value.
     * @param platform_id a platform id, e.g. "usb:00:03:03:02"
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    find_by_platform_id(platform_id: string | null): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    find_by_vid_pid(vid: number, pid: number): Device
    get_devices(): Device[]
    /**
     * Sets the flags to use for the context.
     * @returns the #GUsbContextFlags, e.g. %G_USB_CONTEXT_FLAGS_AUTO_OPEN_DEVICES
     */
    get_flags(): ContextFlags
    /**
     * Gets the poll interval for platforms like Windows that do not support `LIBUSB_CAP_HAS_HOTPLUG`.
     * @returns interval in ms
     */
    get_hotplug_poll_interval(): number
    /**
     * Gets the internal GMainContext to use for synchronous methods.
     * By default the value is set to the value of g_main_context_default()
     * @returns the #GMainContext
     */
    get_main_context(): GLib.MainContext
    /**
     * This function does nothing.
     * @param main_ctx a #GMainContext, or %NULL
     * @returns the #GUsbSource.
     */
    get_source(main_ctx: GLib.MainContext): Source
    /**
     * Loads the context from a JSON object.
     * @param json_object a #JsonObject
     * @returns %TRUE on success
     */
    load(json_object: Json.Object): boolean
    /**
     * Loads any devices with a specified tag into the context from a JSON object.
     * @param json_object a #JsonObject
     * @param tag a string tag, e.g. `runtime-reload`, or %NULL
     * @returns %TRUE on success
     */
    load_with_tag(json_object: Json.Object, tag: string | null): boolean
    /**
     * Saves the context to an existing JSON builder.
     * @param json_builder a #JsonBuilder
     * @returns %TRUE on success
     */
    save(json_builder: Json.Builder): boolean
    /**
     * Saves any devices with a specified tag into an existing JSON builder.
     * @param json_builder a #JsonBuilder
     * @param tag a string tag, e.g. `runtime-reload`, or %NULL
     * @returns %TRUE on success
     */
    save_with_tag(json_builder: Json.Builder, tag: string | null): boolean
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
     * @returns a new #GUsbDevice, or %NULL for invalid
     */
    wait_for_replug(device: Device, timeout_ms: number): Device

    // Own virtual methods of GUsb-1.0.GUsb.Context

    vfunc_device_added(device: Device): void
    vfunc_device_changed(device: Device): void
    vfunc_device_removed(device: Device): void

    // Own signals of GUsb-1.0.GUsb.Context

    connect(sigName: "device-added", callback: Context.DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: Context.DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: Device, ...args: any[]): void
    connect(sigName: "device-changed", callback: Context.DeviceChangedSignalCallback): number
    connect_after(sigName: "device-changed", callback: Context.DeviceChangedSignalCallback): number
    emit(sigName: "device-changed", device: Device, ...args: any[]): void
    connect(sigName: "device-removed", callback: Context.DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Context.DeviceRemovedSignalCallback): number
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

export class Context extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Context

    static name: string
    static $gtype: GObject.GType<Context>

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
    static error_quark(): GLib.Quark
}

export module Device {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GUsb-1.0.GUsb.Device

        context?: Context | null
        libusb_device?: any | null
        platform_id?: string | null
    }

}

export interface Device extends Gio.Initable {

    // Own properties of GUsb-1.0.GUsb.Device

    readonly context: Context
    readonly libusb_device: any
    readonly platform_id: string | null

    // Own fields of GUsb-1.0.GUsb.Device

    parent_instance: GObject.Object

    // Owm methods of GUsb-1.0.GUsb.Device

    /**
     * Adds a tag, which is included in the JSON log to identify the specific device.
     * 
     * For instance, there might be a pre-update runtime, a bootloader and a post-update runtime
     * and allowing tags to be saved to the backend object allows us to identify each version of
     * the same physical device.
     * @param tag a tag, for example `bootloader` or `runtime-reload`
     */
    add_tag(tag: string | null): void
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
    bulk_transfer(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number ]
    /**
     * Do an async bulk transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    bulk_transfer_async(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of bulk_transfer_async

    /**
     * Promisified version of {@link bulk_transfer_async}
     * 
     * Do an async bulk transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @returns A Promise of: the actual number of bytes sent, or -1 on error.
     */
    bulk_transfer_async(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<number>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the actual number of bytes sent, or -1 on error.
     */
    bulk_transfer_finish(res: Gio.AsyncResult): number
    /**
     * Claim an interface of the device.
     * @param interface bInterfaceNumber of the interface you wish to claim
     * @param flags #GUsbDeviceClaimInterfaceFlags
     * @returns %TRUE on success
     */
    claim_interface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Clear all the events saved by the device.
     */
    clear_events(): void
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
     * @param request_type the request type field for the setup packet
     * @param recipient 
     * @param request the request field for the setup packet
     * @param value the value field for the setup packet
     * @param idx the index field for the setup packet
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success
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
    control_transfer_async(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of control_transfer_async

    /**
     * Promisified version of {@link control_transfer_async}
     * 
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
     * @returns A Promise of: the actual number of bytes sent, or -1 on error.
     */
    control_transfer_async(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<number>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the actual number of bytes sent, or -1 on error.
     */
    control_transfer_finish(res: Gio.AsyncResult): number
    /**
     * Gets the USB address for the device.
     * @returns The 8-bit address
     */
    get_address(): number
    /**
     * Gets the first bos_descriptor that matches the descriptor capability.
     * If you want to find all the BOS descriptors that match (there may be other matching BOS
     * descriptors you have to use `g_usb_device_get_bos_descriptors()` and check each one manually.
     * @param capability a BOS capability type
     * @returns a #GUsbBosDescriptor or %NULL for not found
     */
    get_bos_descriptor(capability: number): BosDescriptor
    /**
     * Gets all the BOS descriptors exported by the device.
     * 
     * The first time this method is used the hardware is queried and then after that cached results
     * are returned. To invalidate the caches use g_usb_device_invalidate().
     * @returns an array of BOS descriptors
     */
    get_bos_descriptors(): BosDescriptor[]
    /**
     * Gets the USB bus number for the device.
     * @returns The 8-bit bus number
     */
    get_bus(): number
    /**
     * Gets the device children if any exist.
     * @returns an array of #GUsbDevice
     */
    get_children(): Device[]
    /**
     * Get the bConfigurationValue for the active configuration of the device.
     * 
     * Warning: this function is synchronous.
     * @returns The bConfigurationValue of the active config, or -1 on error
     */
    get_configuration(): number
    /**
     * Get the index for the active Configuration string descriptor
     * ie, iConfiguration.
     * @returns a string descriptor index.
     */
    get_configuration_index(): number
    /**
     * Gets the date and time that the #GUsbDevice was created.
     * 
     * This can be used as an indicator if the device replugged, as the vendor and product IDs may not
     * change for some devices. Use `g_date_time_equal()` to verify equality.
     * @returns a #GDateTime
     */
    get_created(): GLib.DateTime
    /**
     * Gets the string index from the vendor class interface descriptor.
     * @param class_id a device class, e.g. 0xff for VENDOR
     * @param subclass_id a device subclass
     * @param protocol_id a protocol number
     * @returns a non-zero index, or 0x00 for failure
     */
    get_custom_index(class_id: number, subclass_id: number, protocol_id: number): number
    /**
     * Gets the device class, typically a #GUsbDeviceClassCode.
     * @returns a device class number, e.g. 0x09 is a USB hub.
     */
    get_device_class(): number
    /**
     * Gets the device protocol qualified by the class and subclass numbers.
     * See g_usb_device_get_device_class() and g_usb_device_get_device_subclass().
     * @returns a device protocol number.
     */
    get_device_protocol(): number
    /**
     * Gets the device subclass qualified by the class number.
     * See g_usb_device_get_device_class().
     * @returns a device subclass number.
     */
    get_device_subclass(): number
    /**
     * Gets all the events saved by the device.
     * 
     * Events are only collected when the `G_USB_CONTEXT_FLAGS_SAVE_EVENTS` flag is used before
     * enumerating the context. Events can be used to replay device transactions.
     * @returns an array of events
     */
    get_events(): DeviceEvent[]
    /**
     * Gets the default HID descriptors exported by the device.
     * 
     * If more than one interface exports a HID descriptor, use g_usb_device_get_hid_descriptors()
     * instead.
     * @returns a HID descriptor, or %NULL
     */
    get_hid_descriptor_default(): GLib.Bytes
    /**
     * Gets all the HID descriptors exported by the device.
     * 
     * The first time this method is used the hardware is queried and then after that cached results
     * are returned. To invalidate the caches use g_usb_device_invalidate().
     * @returns an array of HID descriptors
     */
    get_hid_descriptors(): GLib.Bytes[]
    /**
     * Gets the first interface that matches the vendor class interface descriptor.
     * If you want to find all the interfaces that match (there may be other
     * 'alternate' interfaces you have to use g_usb_device_get_interfaces() and
     * check each one manally.
     * @param class_id a device class, e.g. 0xff for VENDOR
     * @param subclass_id a device subclass
     * @param protocol_id a protocol number
     * @returns a #GUsbInterface or %NULL for not found
     */
    get_interface(class_id: number, subclass_id: number, protocol_id: number): Interface
    /**
     * Gets all the interfaces exported by the device.
     * 
     * The first time this method is used the hardware is queried and then after that cached results
     * are returned. To invalidate the caches use g_usb_device_invalidate().
     * @returns an array of interfaces or %NULL for error
     */
    get_interfaces(): Interface[]
    /**
     * Gets the index for the Manufacturer string descriptor.
     * @returns a string descriptor index.
     */
    get_manufacturer_index(): number
    /**
     * Gets the device parent if one exists.
     * @returns #GUsbDevice or %NULL
     */
    get_parent(): Device
    /**
     * Gets the product ID for the device.
     * @returns an ID.
     */
    get_pid(): number
    /**
     * Gets the product ID for the device as a string.
     * @returns an string ID, or %NULL if not available.
     */
    get_pid_as_str(): string | null
    /**
     * Gets the platform identifier for the device.
     * 
     * When the device is removed and then replugged, this value is not expected to
     * be different.
     * @returns The platform ID, e.g. "usb:02:00:03:01"
     */
    get_platform_id(): string | null
    /**
     * Gets the USB port number for the device.
     * @returns The 8-bit port number
     */
    get_port_number(): number
    /**
     * Gets the index for the Product string descriptor.
     * @returns a string descriptor index.
     */
    get_product_index(): number
    /**
     * Gets the BCD firmware version number for the device.
     * @returns a version number in BCD format.
     */
    get_release(): number
    /**
     * Gets the index for the Serial Number string descriptor.
     * @returns a string descriptor index.
     */
    get_serial_number_index(): number
    /**
     * Gets the BCD specification revision for the device. For example,
     * `0x0110` indicates USB 1.1 and 0x0320 indicates USB 3.2
     * @returns a specification revision in BCD format.
     */
    get_spec(): number
    /**
     * Get a string descriptor from the device. The returned string should be freed
     * with g_free() when no longer needed.
     * @param desc_index the index for the string descriptor to retrieve
     * @returns a newly-allocated string holding the descriptor, or NULL on error.
     */
    get_string_descriptor(desc_index: number): string | null
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * The descriptor will be at most 128 btes in length, if you need to
     * issue a request with either a smaller or larger descriptor, you can
     * use g_usb_device_get_string_descriptor_bytes_full instead.
     * @param desc_index the index for the string descriptor to retrieve
     * @param langid the language ID
     * @returns a possibly UTF-16 string, or NULL on error.
     */
    get_string_descriptor_bytes(desc_index: number, langid: number): GLib.Bytes
    /**
     * Get a raw string descriptor from the device. The returned string should be freed
     * with g_bytes_unref() when no longer needed.
     * @param desc_index the index for the string descriptor to retrieve
     * @param langid the language ID
     * @param length size of the request data buffer
     * @returns a possibly UTF-16 string, or NULL on error.
     */
    get_string_descriptor_bytes_full(desc_index: number, langid: number, length: number): GLib.Bytes
    /**
     * Gets all the tags.
     * @returns string tags
     */
    get_tags(): string[]
    /**
     * Gets the vendor ID for the device.
     * @returns an ID.
     */
    get_vid(): number
    /**
     * Gets the vendor ID for the device as a string.
     * @returns an string ID, or %NULL if not available.
     */
    get_vid_as_str(): string | null
    /**
     * Checks if a tag has been used to identify the specific device.
     * @param tag a tag, for example `bootloader` or `runtime-reload`
     * @returns %TRUE on success
     */
    has_tag(tag: string | null): boolean
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
    interrupt_transfer(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number ]
    /**
     * Do an async interrupt transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    interrupt_transfer_async(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of interrupt_transfer_async

    /**
     * Promisified version of {@link interrupt_transfer_async}
     * 
     * Do an async interrupt transfer
     * @param endpoint the address of a valid endpoint to communicate with
     * @param data a suitably-sized data buffer for either input or output
     * @param timeout timeout timeout (in milliseconds) that this function should wait before giving up due to no response being received. For an unlimited timeout, use 0.
     * @param cancellable a #GCancellable, or %NULL
     * @returns A Promise of: the actual number of bytes sent, or -1 on error.
     */
    interrupt_transfer_async(endpoint: number, data: Uint8Array, timeout: number, cancellable: Gio.Cancellable | null): globalThis.Promise<number>
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns the actual number of bytes sent, or -1 on error.
     */
    interrupt_transfer_finish(res: Gio.AsyncResult): number
    /**
     * Invalidates the caches used in g_usb_device_get_interfaces().
     */
    invalidate(): void
    /**
     * Gets if the device is emulated.
     * @returns %TRUE if the device is emulated and not backed by a physical device.
     */
    is_emulated(): boolean
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
    release_interface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    /**
     * Removes a tag, which is included in the JSON log to identify the specific device.
     * @param tag a tag, for example `bootloader` or `runtime-reload`
     */
    remove_tag(tag: string | null): void
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
    set_configuration(configuration: number): boolean
    /**
     * Sets an alternate setting on an interface.
     * @param interface bInterfaceNumber of the interface you wish to release
     * @param alt alternative setting number
     * @returns %TRUE on success
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

export class Device extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUsb-1.0.GUsb.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

export module DeviceEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DeviceEvent {

    // Owm methods of GUsb-1.0.GUsb.DeviceEvent

    /**
     * Gets any bytes data from the event.
     * @returns a #GBytes, or %NULL
     */
    get_bytes(): GLib.Bytes
    /**
     * Gets the event ID.
     * @returns string, or %NULL
     */
    get_id(): string | null
    /**
     * Gets any return code from the event.
     * @returns a `enum libusb_error`
     */
    get_rc(): number
    /**
     * Gets any status data from the event.
     * @returns a `enum libusb_transfer_status`, or -1 for failure
     */
    get_status(): number
    /**
     * Set the bytes data to the event.
     * @param bytes a #GBytes
     */
    set_bytes(bytes: GLib.Bytes): void

    // Class property signals of GUsb-1.0.GUsb.DeviceEvent

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DeviceEvent extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.DeviceEvent

    static name: string
    static $gtype: GObject.GType<DeviceEvent>

    // Constructors of GUsb-1.0.GUsb.DeviceEvent

    constructor(config?: DeviceEvent.ConstructorProperties) 
    _init(config?: DeviceEvent.ConstructorProperties): void
}

export module DeviceList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-added`
     */
    export interface DeviceAddedSignalCallback {
        ($obj: DeviceList, device: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        ($obj: DeviceList, device: Device): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUsb-1.0.GUsb.DeviceList

        context?: Context | null
    }

}

export interface DeviceList {

    // Own properties of GUsb-1.0.GUsb.DeviceList

    readonly context: Context

    // Own fields of GUsb-1.0.GUsb.DeviceList

    parent_instance: GObject.Object

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
    find_by_bus_address(bus: number, address: number): Device
    /**
     * Finds a device based on its bus and address values.
     * @param vid a vendor ID
     * @param pid a product ID
     * @returns a new #GUsbDevice, or %NULL if not found.
     */
    find_by_vid_pid(vid: number, pid: number): Device
    get_devices(): Device[]

    // Own virtual methods of GUsb-1.0.GUsb.DeviceList

    vfunc_device_added(device: Device): void
    vfunc_device_removed(device: Device): void

    // Own signals of GUsb-1.0.GUsb.DeviceList

    connect(sigName: "device-added", callback: DeviceList.DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: DeviceList.DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: Device, ...args: any[]): void
    connect(sigName: "device-removed", callback: DeviceList.DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: DeviceList.DeviceRemovedSignalCallback): number
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

export class DeviceList extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.DeviceList

    static name: string
    static $gtype: GObject.GType<DeviceList>

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

export module Endpoint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Endpoint {

    // Owm methods of GUsb-1.0.GUsb.Endpoint

    /**
     * Gets the address of the endpoint.
     * @returns The 4-bit endpoint address
     */
    get_address(): number
    /**
     * Gets the direction of the endpoint.
     * @returns The endpoint direction
     */
    get_direction(): DeviceDirection
    /**
     * Gets any extra data from the endpoint.
     * @returns a #GBytes, or %NULL for failure
     */
    get_extra(): GLib.Bytes
    /**
     * Gets the type of endpoint.
     * @returns The 8-bit type
     */
    get_kind(): number
    /**
     * Gets the maximum packet size this endpoint is capable of sending/receiving.
     * @returns The maximum packet size
     */
    get_maximum_packet_size(): number
    /**
     * Gets the number part of endpoint address.
     * @returns The lower 4-bit of endpoint address
     */
    get_number(): number
    /**
     * Gets the endpoint polling interval.
     * @returns The endpoint polling interval
     */
    get_polling_interval(): number
    /**
     * Gets the rate at which synchronization feedback is provided, for audio device only.
     * @returns The endpoint refresh
     */
    get_refresh(): number
    /**
     * Gets the address if the synch endpoint, for audio device only.
     * @returns The synch endpoint address
     */
    get_synch_address(): number

    // Class property signals of GUsb-1.0.GUsb.Endpoint

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Endpoint extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Endpoint

    static name: string
    static $gtype: GObject.GType<Endpoint>

    // Constructors of GUsb-1.0.GUsb.Endpoint

    constructor(config?: Endpoint.ConstructorProperties) 
    _init(config?: Endpoint.ConstructorProperties): void
}

export module Interface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Interface {

    // Owm methods of GUsb-1.0.GUsb.Interface

    /**
     * Gets the alternate setting for the interface.
     * @returns alt setting, typically zero.
     */
    get_alternate(): number
    /**
     * Gets the interface class, typically a #GUsbInterfaceClassCode.
     * @returns a interface class number, e.g. 0x09 is a USB hub.
     */
    get_class(): number
    /**
     * Gets interface endpoints.
     * @returns an array of endpoints, or %NULL on failure.
     */
    get_endpoints(): Endpoint[]
    /**
     * Gets any extra data from the interface.
     * @returns a #GBytes, or %NULL for failure
     */
    get_extra(): GLib.Bytes
    /**
     * Gets the index for the string descriptor.
     * @returns a string descriptor index.
     */
    get_index(): number
    /**
     * Gets the type of interface.
     * @returns The 8-bit address
     */
    get_kind(): number
    /**
     * Gets the USB bus number for the interface.
     * @returns The 8-bit bus number
     */
    get_length(): number
    /**
     * Gets the interface number.
     * @returns The interface ID
     */
    get_number(): number
    /**
     * Gets the interface protocol qualified by the class and subclass numbers.
     * See g_usb_interface_get_class() and g_usb_interface_get_subclass().
     * @returns a interface protocol number.
     */
    get_protocol(): number
    /**
     * Gets the interface subclass qualified by the class number.
     * See g_usb_interface_get_class().
     * @returns a interface subclass number.
     */
    get_subclass(): number

    // Class property signals of GUsb-1.0.GUsb.Interface

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Interface extends GObject.Object {

    // Own properties of GUsb-1.0.GUsb.Interface

    static name: string
    static $gtype: GObject.GType<Interface>

    // Constructors of GUsb-1.0.GUsb.Interface

    constructor(config?: Interface.ConstructorProperties) 
    _init(config?: Interface.ConstructorProperties): void
}

export interface BosDescriptorClass {

    // Own fields of GUsb-1.0.GUsb.BosDescriptorClass

    parent_class: GObject.ObjectClass
}

export abstract class BosDescriptorClass {

    // Own properties of GUsb-1.0.GUsb.BosDescriptorClass

    static name: string
}

export interface ContextClass {

    // Own fields of GUsb-1.0.GUsb.ContextClass

    parent_class: GObject.ObjectClass
    device_added: (self: Context, device: Device) => void
    device_removed: (self: Context, device: Device) => void
    device_changed: (self: Context, device: Device) => void
}

export abstract class ContextClass {

    // Own properties of GUsb-1.0.GUsb.ContextClass

    static name: string
}

export interface DeviceClass {

    // Own fields of GUsb-1.0.GUsb.DeviceClass

    parent_class: GObject.ObjectClass
}

export abstract class DeviceClass {

    // Own properties of GUsb-1.0.GUsb.DeviceClass

    static name: string
}

export interface DeviceEventClass {

    // Own fields of GUsb-1.0.GUsb.DeviceEventClass

    parent_class: GObject.ObjectClass
}

export abstract class DeviceEventClass {

    // Own properties of GUsb-1.0.GUsb.DeviceEventClass

    static name: string
}

export interface DeviceListClass {

    // Own fields of GUsb-1.0.GUsb.DeviceListClass

    parent_class: GObject.ObjectClass
    device_added: (self: DeviceList, device: Device) => void
    device_removed: (self: DeviceList, device: Device) => void
}

export abstract class DeviceListClass {

    // Own properties of GUsb-1.0.GUsb.DeviceListClass

    static name: string
}

export interface EndpointClass {

    // Own fields of GUsb-1.0.GUsb.EndpointClass

    parent_class: GObject.ObjectClass
}

export abstract class EndpointClass {

    // Own properties of GUsb-1.0.GUsb.EndpointClass

    static name: string
}

export interface InterfaceClass {

    // Own fields of GUsb-1.0.GUsb.InterfaceClass

    parent_class: GObject.ObjectClass
}

export abstract class InterfaceClass {

    // Own properties of GUsb-1.0.GUsb.InterfaceClass

    static name: string
}

export interface Source {

    // Owm methods of GUsb-1.0.GUsb.Source

    /**
     * This function does nothing.
     * @param func a function to call
     */
    set_callback(func: GLib.SourceFunc): void
}

export class Source {

    // Own properties of GUsb-1.0.GUsb.Source

    static name: string

    // Constructors of GUsb-1.0.GUsb.Source

    static error_quark(): GLib.Quark
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END