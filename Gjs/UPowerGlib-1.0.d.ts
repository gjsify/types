// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UPowerGlib-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace UPowerGlib {

/**
 * The device type.
 */
enum DeviceKind {
    UNKNOWN,
    LINE_POWER,
    BATTERY,
    UPS,
    MONITOR,
    MOUSE,
    KEYBOARD,
    PDA,
    PHONE,
    MEDIA_PLAYER,
    TABLET,
    COMPUTER,
    LAST,
}
/**
 * The warning level of a battery.
 */
enum DeviceLevel {
    UNKNOWN,
    NONE,
    DISCHARGING,
    LOW,
    CRITICAL,
    ACTION,
    LAST,
}
/**
 * The device state.
 */
enum DeviceState {
    UNKNOWN,
    CHARGING,
    DISCHARGING,
    EMPTY,
    FULLY_CHARGED,
    PENDING_CHARGE,
    PENDING_DISCHARGE,
    LAST,
}
/**
 * The device technology.
 */
enum DeviceTechnology {
    UNKNOWN,
    LITHIUM_ION,
    LITHIUM_POLYMER,
    LITHIUM_IRON_PHOSPHATE,
    LEAD_ACID,
    NICKEL_CADMIUM,
    NICKEL_METAL_HYDRIDE,
    LAST,
}
const MAJOR_VERSION: number
/**
 * The compile-time micro version
 */
const MICRO_VERSION: number
const MINOR_VERSION: number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link> D-Bus interface.
 */
function client_glue_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UpClientGlue interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function client_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
 */
function device_glue_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UpDeviceGlue interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function device_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link> D-Bus interface.
 */
function wakeups_glue_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UpWakeupsGlue interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 */
function wakeups_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
interface ClientGlue_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.ClientGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    daemon_version?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_closed?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_present?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    on_battery?: boolean | null
}

/**
 * Signal callback interface for `device-added`
 */
interface ClientGlue_DeviceAddedSignalCallback {
    ($obj: ClientGlue, arg_device: string): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface ClientGlue_DeviceRemovedSignalCallback {
    ($obj: ClientGlue, arg_device: string): void
}

/**
 * Signal callback interface for `handle-enumerate-devices`
 */
interface ClientGlue_HandleEnumerateDevicesSignalCallback {
    ($obj: ClientGlue, invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-get-critical-action`
 */
interface ClientGlue_HandleGetCriticalActionSignalCallback {
    ($obj: ClientGlue, invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-get-display-device`
 */
interface ClientGlue_HandleGetDisplayDeviceSignalCallback {
    ($obj: ClientGlue, invocation: Gio.DBusMethodInvocation): boolean
}

interface ClientGlue {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    daemon_version: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_closed: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_present: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    on_battery: boolean

    // Owm methods of UPowerGlib-1.0.UPowerGlib.ClientGlue

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_call_enumerate_devices_finish() to get the result of the operation.
     * 
     * See up_client_glue_call_enumerate_devices_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_enumerate_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_client_glue_call_enumerate_devices().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_enumerate_devices().
     */
    call_enumerate_devices_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_devices */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_call_enumerate_devices() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_enumerate_devices_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_call_get_critical_action_finish() to get the result of the operation.
     * 
     * See up_client_glue_call_get_critical_action_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_critical_action(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_client_glue_call_get_critical_action().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_critical_action().
     */
    call_get_critical_action_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_action */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_call_get_critical_action() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_critical_action_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_call_get_display_device_finish() to get the result of the operation.
     * 
     * See up_client_glue_call_get_display_device_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_display_device(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_client_glue_call_get_display_device().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_display_device().
     */
    call_get_display_device_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_device */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_call_get_display_device() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_display_device_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param devices Parameter to return.
     */
    complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param action Parameter to return.
     */
    complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param device Parameter to return.
     */
    complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> D-Bus signal.
     * @param arg_device Argument to pass with the signal.
     */
    emit_device_added(arg_device: string): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> D-Bus signal.
     * @param arg_device Argument to pass with the signal.
     */
    emit_device_removed(arg_device: string): void

    // Own virtual methods of UPowerGlib-1.0.UPowerGlib.ClientGlue

    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of UPowerGlib-1.0.UPowerGlib.ClientGlue

    connect(sigName: "device-added", callback: ClientGlue_DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: ClientGlue_DeviceAddedSignalCallback): number
    emit(sigName: "device-added", arg_device: string, ...args: any[]): void
    connect(sigName: "device-removed", callback: ClientGlue_DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: ClientGlue_DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", arg_device: string, ...args: any[]): void
    connect(sigName: "handle-enumerate-devices", callback: ClientGlue_HandleEnumerateDevicesSignalCallback): number
    connect_after(sigName: "handle-enumerate-devices", callback: ClientGlue_HandleEnumerateDevicesSignalCallback): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-get-critical-action", callback: ClientGlue_HandleGetCriticalActionSignalCallback): number
    connect_after(sigName: "handle-get-critical-action", callback: ClientGlue_HandleGetCriticalActionSignalCallback): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-get-display-device", callback: ClientGlue_HandleGetDisplayDeviceSignalCallback): number
    connect_after(sigName: "handle-get-display-device", callback: ClientGlue_HandleGetDisplayDeviceSignalCallback): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.ClientGlue

    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
 * @interface 
 */
class ClientGlue extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlue

    static name: string
    static $gtype: GObject.GType<ClientGlue>

    // Constructors of UPowerGlib-1.0.UPowerGlib.ClientGlue

    constructor(config?: ClientGlue_ConstructProps) 
    _init(config?: ClientGlue_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UpClientGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface DeviceGlue_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    capacity?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_empty?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full_design?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_rate?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_history?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_statistics?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    icon_name?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_present?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_rechargeable?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    luminosity?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    model?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    native_path?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    online?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    percentage?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    power_supply?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    serial?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    state?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    technology?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    temperature?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_empty?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_full?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    update_time?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    vendor?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    voltage?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    warning_level?: number | null
}

/**
 * Signal callback interface for `handle-get-history`
 */
interface DeviceGlue_HandleGetHistorySignalCallback {
    ($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
}

/**
 * Signal callback interface for `handle-get-statistics`
 */
interface DeviceGlue_HandleGetStatisticsSignalCallback {
    ($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
}

/**
 * Signal callback interface for `handle-refresh`
 */
interface DeviceGlue_HandleRefreshSignalCallback {
    ($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation): boolean
}

interface DeviceGlue {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    capacity: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_empty: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full_design: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_rate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_history: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_statistics: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    icon_name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_present: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_rechargeable: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    luminosity: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    model: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    native_path: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    online: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    percentage: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    power_supply: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    serial: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    state: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    technology: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    temperature: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_empty: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_full: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    update_time: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    vendor: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    voltage: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    warning_level: number

    // Owm methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_call_get_history_finish() to get the result of the operation.
     * 
     * See up_device_glue_call_get_history_sync() for the synchronous, blocking version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_timespan Argument to pass with the method invocation.
     * @param arg_resolution Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_history(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_device_glue_call_get_history().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_history().
     */
    call_get_history_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_call_get_history() for the asynchronous version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param arg_timespan Argument to pass with the method invocation.
     * @param arg_resolution Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_call_get_statistics_finish() to get the result of the operation.
     * 
     * See up_device_glue_call_get_statistics_sync() for the synchronous, blocking version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_statistics(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_device_glue_call_get_statistics().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_statistics().
     */
    call_get_statistics_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_call_get_statistics() for the asynchronous version of this method.
     * @param arg_type Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_statistics_sync(arg_type: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_call_refresh_finish() to get the result of the operation.
     * 
     * See up_device_glue_call_refresh_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_device_glue_call_refresh().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_refresh().
     */
    call_refresh_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_call_refresh() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_refresh_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param data Parameter to return.
     */
    complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param data Parameter to return.
     */
    complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_refresh(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    connect(sigName: "handle-get-history", callback: DeviceGlue_HandleGetHistorySignalCallback): number
    connect_after(sigName: "handle-get-history", callback: DeviceGlue_HandleGetHistorySignalCallback): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number, ...args: any[]): void
    connect(sigName: "handle-get-statistics", callback: DeviceGlue_HandleGetStatisticsSignalCallback): number
    connect_after(sigName: "handle-get-statistics", callback: DeviceGlue_HandleGetStatisticsSignalCallback): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string, ...args: any[]): void
    connect(sigName: "handle-refresh", callback: DeviceGlue_HandleRefreshSignalCallback): number
    connect_after(sigName: "handle-refresh", callback: DeviceGlue_HandleRefreshSignalCallback): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
 * @interface 
 */
class DeviceGlue extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    static name: string
    static $gtype: GObject.GType<DeviceGlue>

    // Constructors of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    constructor(config?: DeviceGlue_ConstructProps) 
    _init(config?: DeviceGlue_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UpDeviceGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface WakeupsGlue_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability?: boolean | null
}

/**
 * Signal callback interface for `data-changed`
 */
interface WakeupsGlue_DataChangedSignalCallback {
    ($obj: WakeupsGlue): void
}

/**
 * Signal callback interface for `handle-get-data`
 */
interface WakeupsGlue_HandleGetDataSignalCallback {
    ($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-get-total`
 */
interface WakeupsGlue_HandleGetTotalSignalCallback {
    ($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `total-changed`
 */
interface WakeupsGlue_TotalChangedSignalCallback {
    ($obj: WakeupsGlue, arg_value: number): void
}

interface WakeupsGlue {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability: boolean

    // Owm methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_wakeups_glue_call_get_data_finish() to get the result of the operation.
     * 
     * See up_wakeups_glue_call_get_data_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_wakeups_glue_call_get_data().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_data().
     */
    call_get_data_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_call_get_data() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_data_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_wakeups_glue_call_get_total_finish() to get the result of the operation.
     * 
     * See up_wakeups_glue_call_get_total_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_total(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_wakeups_glue_call_get_total().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_total().
     */
    call_get_total_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_value */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_call_get_total() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_get_total_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param data Parameter to return.
     */
    complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param value Parameter to return.
     */
    complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> D-Bus signal.
     */
    emit_data_changed(): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> D-Bus signal.
     * @param arg_value Argument to pass with the signal.
     */
    emit_total_changed(arg_value: number): void

    // Own virtual methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void

    // Own signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    connect(sigName: "data-changed", callback: WakeupsGlue_DataChangedSignalCallback): number
    connect_after(sigName: "data-changed", callback: WakeupsGlue_DataChangedSignalCallback): number
    emit(sigName: "data-changed", ...args: any[]): void
    connect(sigName: "handle-get-data", callback: WakeupsGlue_HandleGetDataSignalCallback): number
    connect_after(sigName: "handle-get-data", callback: WakeupsGlue_HandleGetDataSignalCallback): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-get-total", callback: WakeupsGlue_HandleGetTotalSignalCallback): number
    connect_after(sigName: "handle-get-total", callback: WakeupsGlue_HandleGetTotalSignalCallback): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "total-changed", callback: WakeupsGlue_TotalChangedSignalCallback): number
    connect_after(sigName: "total-changed", callback: WakeupsGlue_TotalChangedSignalCallback): number
    emit(sigName: "total-changed", arg_value: number, ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-capability", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>.
 * @interface 
 */
class WakeupsGlue extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    static name: string
    static $gtype: GObject.GType<WakeupsGlue>

    // Constructors of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    constructor(config?: WakeupsGlue_ConstructProps) 
    _init(config?: WakeupsGlue_ConstructProps): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link> D-Bus interface.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UpWakeupsGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Client_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `device-added`
 */
interface Client_DeviceAddedSignalCallback {
    ($obj: Client, device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface Client_DeviceRemovedSignalCallback {
    ($obj: Client, object_path: string): void
}

interface Client {

    // Own properties of UPowerGlib-1.0.UPowerGlib.Client

    /**
     * The daemon version.
     */
    readonly daemon_version: string
    /**
     * If the laptop lid is closed.
     */
    readonly lid_is_closed: boolean
    /**
     * If a laptop lid is present.
     */
    readonly lid_is_present: boolean
    /**
     * If the computer is on battery power.
     */
    readonly on_battery: boolean

    // Own fields of UPowerGlib-1.0.UPowerGlib.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.Client

    /**
     * Gets a string representing the configured critical action,
     * depending on availability.
     */
    get_critical_action(): string
    /**
     * Get UPower daemon version.
     */
    get_daemon_version(): string
    /**
     * Get a copy of the device objects.
     */
    get_devices(): Device[]
    /**
     * Get the composite display device.
     */
    get_display_device(): Device
    /**
     * Get whether the laptop lid is closed.
     */
    get_lid_is_closed(): boolean
    /**
     * Get whether a laptop lid is present on this machine.
     */
    get_lid_is_present(): boolean
    /**
     * Get whether the system is running on battery power.
     */
    get_on_battery(): boolean

    // Own virtual methods of UPowerGlib-1.0.UPowerGlib.Client

    vfunc_device_added(device: Device): void
    vfunc_device_removed(object_path: string): void

    // Own signals of UPowerGlib-1.0.UPowerGlib.Client

    connect(sigName: "device-added", callback: Client_DeviceAddedSignalCallback): number
    connect_after(sigName: "device-added", callback: Client_DeviceAddedSignalCallback): number
    emit(sigName: "device-added", device: Device, ...args: any[]): void
    connect(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", object_path: string, ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.Client

    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of UPowerGlib-1.0.UPowerGlib.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Creates a new #UpClient object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #UpClient object.
     * @constructor 
     */
    static new(): Client
    _init(config?: Client_ConstructProps): void
}

interface ClientGlueProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, ClientGlue_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface ClientGlueProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, ClientGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.ClientGlueProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UpClientGlueProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ClientGlueProxy extends Gio.DBusProxy {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueProxy

    static name: string
    static $gtype: GObject.GType<ClientGlueProxy>

    // Constructors of UPowerGlib-1.0.UPowerGlib.ClientGlueProxy

    constructor(config?: ClientGlueProxy_ConstructProps) 
    /**
     * Finishes an operation started with up_client_glue_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): ClientGlueProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with up_client_glue_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ClientGlueProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like up_client_glue_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ClientGlueProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ClientGlueProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ClientGlueProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_proxy_new_finish() to get the result of the operation.
     * 
     * See up_client_glue_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like up_client_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See up_client_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ClientGlueSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, ClientGlue_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface ClientGlueSkeleton extends Gio.DBusInterface, ClientGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UpClientGlueSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ClientGlueSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeleton

    static name: string
    static $gtype: GObject.GType<ClientGlueSkeleton>

    // Constructors of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeleton

    constructor(config?: ClientGlueSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
     * @constructor 
     */
    static new(): ClientGlueSkeleton
    _init(config?: ClientGlueSkeleton_ConstructProps): void
}

interface Device_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.Device

    /**
     * The percentage capacity of the device where 100% means the device has
     * the same charge potential as when it was manufactured.
     */
    capacity?: number | null
    /**
     * The energy left in the device. Measured in mWh.
     */
    energy?: number | null
    /**
     * The energy the device will have when it is empty. This is usually zero.
     * Measured in mWh.
     */
    energy_empty?: number | null
    /**
     * The amount of energy when the device is fully charged. Measured in mWh.
     */
    energy_full?: number | null
    /**
     * The amount of energy when the device was brand new. Measured in mWh.
     */
    energy_full_design?: number | null
    /**
     * The rate of discharge or charge. Measured in mW.
     */
    energy_rate?: number | null
    /**
     * If the device has history data that might be useful.
     */
    has_history?: boolean | null
    /**
     * If the device has statistics data that might be useful.
     */
    has_statistics?: boolean | null
    /**
     * The icon name, following the Icon Naming Speficiation
     */
    icon_name?: string | null
    /**
     * If the device is present, as some devices like laptop batteries
     * can be removed, leaving an empty bay that is still technically a
     * device.
     */
    is_present?: boolean | null
    /**
     * If the device has a rechargable battery.
     */
    is_rechargeable?: boolean | null
    /**
     * The device kind, e.g. %UP_DEVICE_KIND_KEYBOARD.
     */
    kind?: number | null
    /**
     * The current luminosity of the device.
     */
    luminosity?: number | null
    /**
     * The model of the device.
     */
    model?: string | null
    /**
     * The native path of the device, useful for direct device access.
     */
    native_path?: string | null
    /**
     * If the device is online, i.e. connected.
     */
    online?: boolean | null
    /**
     * The percentage charge of the device.
     */
    percentage?: number | null
    /**
     * If the device is powering the system.
     */
    power_supply?: boolean | null
    /**
     * The serial number of the device.
     */
    serial?: string | null
    /**
     * The state the device is in at this time, e.g. %UP_DEVICE_STATE_EMPTY.
     */
    state?: number | null
    /**
     * The battery technology e.g. %UP_DEVICE_TECHNOLOGY_LITHIUM_ION.
     */
    technology?: number | null
    /**
     * The temperature of the device in degrees Celsius.
     */
    temperature?: number | null
    /**
     * The amount of time until the device is empty.
     */
    time_to_empty?: number | null
    /**
     * The amount of time until the device is fully charged.
     */
    time_to_full?: number | null
    /**
     * The last time the device was updated.
     */
    update_time?: number | null
    /**
     * The vendor of the device.
     */
    vendor?: string | null
    /**
     * The current voltage of the device.
     */
    voltage?: number | null
    /**
     * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
     */
    warning_level?: number | null
}

interface Device {

    // Own properties of UPowerGlib-1.0.UPowerGlib.Device

    /**
     * The percentage capacity of the device where 100% means the device has
     * the same charge potential as when it was manufactured.
     */
    capacity: number
    /**
     * The energy left in the device. Measured in mWh.
     */
    energy: number
    /**
     * The energy the device will have when it is empty. This is usually zero.
     * Measured in mWh.
     */
    energy_empty: number
    /**
     * The amount of energy when the device is fully charged. Measured in mWh.
     */
    energy_full: number
    /**
     * The amount of energy when the device was brand new. Measured in mWh.
     */
    energy_full_design: number
    /**
     * The rate of discharge or charge. Measured in mW.
     */
    energy_rate: number
    /**
     * If the device has history data that might be useful.
     */
    has_history: boolean
    /**
     * If the device has statistics data that might be useful.
     */
    has_statistics: boolean
    /**
     * The icon name, following the Icon Naming Speficiation
     */
    icon_name: string
    /**
     * If the device is present, as some devices like laptop batteries
     * can be removed, leaving an empty bay that is still technically a
     * device.
     */
    is_present: boolean
    /**
     * If the device has a rechargable battery.
     */
    is_rechargeable: boolean
    /**
     * The device kind, e.g. %UP_DEVICE_KIND_KEYBOARD.
     */
    kind: number
    /**
     * The current luminosity of the device.
     */
    luminosity: number
    /**
     * The model of the device.
     */
    model: string
    /**
     * The native path of the device, useful for direct device access.
     */
    native_path: string
    /**
     * If the device is online, i.e. connected.
     */
    online: boolean
    /**
     * The percentage charge of the device.
     */
    percentage: number
    /**
     * If the device is powering the system.
     */
    power_supply: boolean
    /**
     * The serial number of the device.
     */
    serial: string
    /**
     * The state the device is in at this time, e.g. %UP_DEVICE_STATE_EMPTY.
     */
    state: number
    /**
     * The battery technology e.g. %UP_DEVICE_TECHNOLOGY_LITHIUM_ION.
     */
    technology: number
    /**
     * The temperature of the device in degrees Celsius.
     */
    temperature: number
    /**
     * The amount of time until the device is empty.
     */
    time_to_empty: number
    /**
     * The amount of time until the device is fully charged.
     */
    time_to_full: number
    /**
     * The last time the device was updated.
     */
    update_time: number
    /**
     * The vendor of the device.
     */
    vendor: string
    /**
     * The current voltage of the device.
     */
    voltage: number
    /**
     * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
     */
    warning_level: number

    // Own fields of UPowerGlib-1.0.UPowerGlib.Device

    parent: GObject.Object
    priv: DevicePrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.Device

    /**
     * Gets the device history.
     * @param type The type of history, known values are "rate" and "charge".
     * @param timespec the amount of time to look back into time.
     * @param resolution the resolution of data.
     * @param cancellable a #GCancellable or %NULL
     */
    get_history_sync(type: string, timespec: number, resolution: number, cancellable: Gio.Cancellable | null): HistoryItem[]
    /**
     * Gets the object path for the device.
     */
    get_object_path(): string
    /**
     * Gets the device current statistics.
     * @param type the type of statistics.
     * @param cancellable a #GCancellable or %NULL
     */
    get_statistics_sync(type: string, cancellable: Gio.Cancellable | null): StatsItem[]
    /**
     * Refreshes properties on the device.
     * This function is normally not required.
     * @param cancellable a #GCancellable or %NULL
     */
    refresh_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the object and fills up initial properties.
     * @param object_path The UPower object path.
     * @param cancellable a #GCancellable or %NULL
     */
    set_object_path_sync(object_path: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts the device to a string description.
     */
    to_text(): string

    // Class property signals of UPowerGlib-1.0.UPowerGlib.Device

    connect(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Device extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of UPowerGlib-1.0.UPowerGlib.Device

    constructor(config?: Device_ConstructProps) 
    /**
     * Creates a new #UpDevice object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #UpDevice object.
     * @constructor 
     */
    static new(): Device
    _init(config?: Device_ConstructProps): void
    /**
     * Converts a string to a #UpDeviceKind.
     * @param type 
     */
    static kind_from_string(type: string): DeviceKind
    /**
     * Converts a #UpDeviceKind to a string.
     * @param type_enum 
     */
    static kind_to_string(type_enum: DeviceKind): string
    /**
     * Converts a string to a #UpDeviceLevel.
     * @param level 
     */
    static level_from_string(level: string): DeviceLevel
    /**
     * Converts a #UpDeviceLevel to a string.
     * @param level_enum 
     */
    static level_to_string(level_enum: DeviceLevel): string
    /**
     * Converts a string to a #UpDeviceState.
     * @param state 
     */
    static state_from_string(state: string): DeviceState
    /**
     * Converts a #UpDeviceState to a string.
     * @param state_enum 
     */
    static state_to_string(state_enum: DeviceState): string
    /**
     * Converts a string to a #UpDeviceTechnology.
     * @param technology 
     */
    static technology_from_string(technology: string): DeviceTechnology
    /**
     * Converts a #UpDeviceTechnology to a string.
     * @param technology_enum 
     */
    static technology_to_string(technology_enum: DeviceTechnology): string
}

interface DeviceGlueProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, DeviceGlue_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface DeviceGlueProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, DeviceGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UpDeviceGlueProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DeviceGlueProxy extends Gio.DBusProxy {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxy

    static name: string
    static $gtype: GObject.GType<DeviceGlueProxy>

    // Constructors of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxy

    constructor(config?: DeviceGlueProxy_ConstructProps) 
    /**
     * Finishes an operation started with up_device_glue_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): DeviceGlueProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with up_device_glue_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DeviceGlueProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like up_device_glue_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DeviceGlueProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DeviceGlueProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: DeviceGlueProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_proxy_new_finish() to get the result of the operation.
     * 
     * See up_device_glue_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like up_device_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See up_device_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface DeviceGlueSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, DeviceGlue_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface DeviceGlueSkeleton extends Gio.DBusInterface, DeviceGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UpDeviceGlueSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DeviceGlueSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeleton

    static name: string
    static $gtype: GObject.GType<DeviceGlueSkeleton>

    // Constructors of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeleton

    constructor(config?: DeviceGlueSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
     * @constructor 
     */
    static new(): DeviceGlueSkeleton
    _init(config?: DeviceGlueSkeleton_ConstructProps): void
}

interface HistoryItem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.HistoryItem

    state?: number | null
    time?: number | null
    value?: number | null
}

interface HistoryItem {

    // Own properties of UPowerGlib-1.0.UPowerGlib.HistoryItem

    state: number
    time: number
    value: number

    // Own fields of UPowerGlib-1.0.UPowerGlib.HistoryItem

    parent: GObject.Object
    priv: HistoryItemPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.HistoryItem

    /**
     * Gets the item state.
     */
    get_state(): DeviceState
    /**
     * Gets the item time.
     */
    get_time(): number
    /**
     * Gets the item value.
     */
    get_value(): number
    /**
     * Converts the history item to a string representation.
     * @param text 
     */
    set_from_string(text: string): boolean
    /**
     * Sets the item state.
     * @param state the new value
     */
    set_state(state: DeviceState): void
    /**
     * Sets the item time.
     * @param time the new value
     */
    set_time(time: number): void
    /**
     * Sets the item time to the present value.
     */
    set_time_to_present(): void
    /**
     * Sets the item value.
     * @param value the new value
     */
    set_value(value: number): void
    /**
     * Converts the history item to a string representation.
     */
    to_string(): string

    // Class property signals of UPowerGlib-1.0.UPowerGlib.HistoryItem

    connect(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HistoryItem extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.HistoryItem

    static name: string
    static $gtype: GObject.GType<HistoryItem>

    // Constructors of UPowerGlib-1.0.UPowerGlib.HistoryItem

    constructor(config?: HistoryItem_ConstructProps) 
    constructor() 
    static new(): HistoryItem
    _init(config?: HistoryItem_ConstructProps): void
}

interface StatsItem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.StatsItem

    accuracy?: number | null
    value?: number | null
}

interface StatsItem {

    // Own properties of UPowerGlib-1.0.UPowerGlib.StatsItem

    accuracy: number
    value: number

    // Own fields of UPowerGlib-1.0.UPowerGlib.StatsItem

    parent: GObject.Object
    priv: StatsItemPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.StatsItem

    /**
     * Gets the item accuracy.
     */
    get_accuracy(): number
    /**
     * Gets the item value.
     */
    get_value(): number
    /**
     * Sets the item accuracy.
     * @param accuracy 
     */
    set_accuracy(accuracy: number): void
    /**
     * Sets the item value.
     * @param value 
     */
    set_value(value: number): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.StatsItem

    connect(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StatsItem extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.StatsItem

    static name: string
    static $gtype: GObject.GType<StatsItem>

    // Constructors of UPowerGlib-1.0.UPowerGlib.StatsItem

    constructor(config?: StatsItem_ConstructProps) 
    constructor() 
    static new(): StatsItem
    _init(config?: StatsItem_ConstructProps): void
}

interface WakeupItem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupItem

    cmdline?: string | null
    details?: string | null
    id?: number | null
    is_userspace?: boolean | null
    old?: number | null
    value?: number | null
}

interface WakeupItem {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupItem

    cmdline: string
    details: string
    id: number
    is_userspace: boolean
    old: number
    value: number

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupItem

    parent: GObject.Object
    priv: WakeupItemPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.WakeupItem

    /**
     * Gets the item cmdline.
     */
    get_cmdline(): string
    /**
     * Gets the item details.
     */
    get_details(): string
    /**
     * Gets the item id.
     */
    get_id(): number
    /**
     * Gets if the item is userspace.
     */
    get_is_userspace(): boolean
    /**
     * Gets the item old.
     */
    get_old(): number
    /**
     * Gets the item value.
     */
    get_value(): number
    /**
     * Sets the item cmdline.
     * @param cmdline the new value
     */
    set_cmdline(cmdline: string): void
    /**
     * Sets the item details.
     * @param details the new value
     */
    set_details(details: string): void
    /**
     * Sets the item id.
     * @param id the new value
     */
    set_id(id: number): void
    /**
     * Sets if the item is userspace.
     * @param is_userspace the new value
     */
    set_is_userspace(is_userspace: boolean): void
    /**
     * Sets the item old.
     * @param old the new value
     */
    set_old(old: number): void
    /**
     * Sets the item value.
     * @param value the new value
     */
    set_value(value: number): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupItem

    connect(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cmdline", ...args: any[]): void
    connect(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-userspace", ...args: any[]): void
    connect(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::old", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WakeupItem extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupItem

    static name: string
    static $gtype: GObject.GType<WakeupItem>

    // Constructors of UPowerGlib-1.0.UPowerGlib.WakeupItem

    constructor(config?: WakeupItem_ConstructProps) 
    constructor() 
    static new(): WakeupItem
    _init(config?: WakeupItem_ConstructProps): void
}

interface Wakeups_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `data-changed`
 */
interface Wakeups_DataChangedSignalCallback {
    ($obj: Wakeups): void
}

/**
 * Signal callback interface for `total-changed`
 */
interface Wakeups_TotalChangedSignalCallback {
    ($obj: Wakeups, object: number): void
}

interface Wakeups {

    // Own fields of UPowerGlib-1.0.UPowerGlib.Wakeups

    parent: GObject.Object
    priv: WakeupsPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.Wakeups

    /**
     * Gets the wakeups data from the daemon.
     * @param cancellable a #GCancellable or %NULL
     */
    get_data_sync(cancellable: Gio.Cancellable | null): WakeupItem[]
    /**
     * Returns if the daemon supports getting the wakeup data.
     */
    get_has_capability(): boolean
    /**
     * Gets properties from the daemon about wakeup data.
     * @param cancellable a #GCancellable or %NULL
     */
    get_properties_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets the the total number of wakeups per second from the daemon.
     * @param cancellable a #GCancellable or %NULL
     */
    get_total_sync(cancellable: Gio.Cancellable | null): number

    // Own virtual methods of UPowerGlib-1.0.UPowerGlib.Wakeups

    vfunc_data_changed(): void
    vfunc_total_changed(value: number): void

    // Own signals of UPowerGlib-1.0.UPowerGlib.Wakeups

    connect(sigName: "data-changed", callback: Wakeups_DataChangedSignalCallback): number
    connect_after(sigName: "data-changed", callback: Wakeups_DataChangedSignalCallback): number
    emit(sigName: "data-changed", ...args: any[]): void
    connect(sigName: "total-changed", callback: Wakeups_TotalChangedSignalCallback): number
    connect_after(sigName: "total-changed", callback: Wakeups_TotalChangedSignalCallback): number
    emit(sigName: "total-changed", object: number, ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.Wakeups

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Wakeups extends GObject.Object {

    // Own properties of UPowerGlib-1.0.UPowerGlib.Wakeups

    static name: string
    static $gtype: GObject.GType<Wakeups>

    // Constructors of UPowerGlib-1.0.UPowerGlib.Wakeups

    constructor(config?: Wakeups_ConstructProps) 
    /**
     * Gets a new object to allow querying the wakeups data from the server.
     * @constructor 
     */
    constructor() 
    /**
     * Gets a new object to allow querying the wakeups data from the server.
     * @constructor 
     */
    static new(): Wakeups
    _init(config?: Wakeups_ConstructProps): void
}

interface WakeupsGlueProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, WakeupsGlue_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface WakeupsGlueProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, WakeupsGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-capability", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UpWakeupsGlueProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class WakeupsGlueProxy extends Gio.DBusProxy {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxy

    static name: string
    static $gtype: GObject.GType<WakeupsGlueProxy>

    // Constructors of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxy

    constructor(config?: WakeupsGlueProxy_ConstructProps) 
    /**
     * Finishes an operation started with up_wakeups_glue_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): WakeupsGlueProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with up_wakeups_glue_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): WakeupsGlueProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like up_wakeups_glue_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): WakeupsGlueProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): WakeupsGlueProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: WakeupsGlueProxy_ConstructProps): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_wakeups_glue_proxy_new_finish() to get the result of the operation.
     * 
     * See up_wakeups_glue_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like up_wakeups_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_wakeups_glue_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See up_wakeups_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface WakeupsGlueSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, WakeupsGlue_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface WakeupsGlueSkeleton extends Gio.DBusInterface, WakeupsGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-capability", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UpWakeupsGlueSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class WakeupsGlueSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeleton

    static name: string
    static $gtype: GObject.GType<WakeupsGlueSkeleton>

    // Constructors of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeleton

    constructor(config?: WakeupsGlueSkeleton_ConstructProps) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>.
     * @constructor 
     */
    static new(): WakeupsGlueSkeleton
    _init(config?: WakeupsGlueSkeleton_ConstructProps): void
}

interface ClientClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.ClientClass

    parent_class: GObject.ObjectClass
    device_added: (client: Client, device: Device) => void
    device_removed: (client: Client, object_path: string) => void
}

abstract class ClientClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientClass

    static name: string
}

interface ClientGlueIface {

    // Own fields of UPowerGlib-1.0.UPowerGlib.ClientGlueIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_enumerate_devices: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_critical_action: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_display_device: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_daemon_version: (object: ClientGlue) => string
    get_lid_is_closed: (object: ClientGlue) => boolean
    get_lid_is_present: (object: ClientGlue) => boolean
    get_on_battery: (object: ClientGlue) => boolean
    device_added: (object: ClientGlue, arg_device: string) => void
    device_removed: (object: ClientGlue, arg_device: string) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower.top_of_page">org.freedesktop.UPower</link>.
 * @record 
 */
abstract class ClientGlueIface {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueIface

    static name: string
}

interface ClientGlueProxyClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.ClientGlueProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UpClientGlueProxy.
 * @record 
 */
abstract class ClientGlueProxyClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueProxyClass

    static name: string
}

interface ClientGlueProxyPrivate {
}

class ClientGlueProxyPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueProxyPrivate

    static name: string
}

interface ClientGlueSkeletonClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UpClientGlueSkeleton.
 * @record 
 */
abstract class ClientGlueSkeletonClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeletonClass

    static name: string
}

interface ClientGlueSkeletonPrivate {
}

class ClientGlueSkeletonPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeletonPrivate

    static name: string
}

interface ClientPrivate {
}

/**
 * Private #UpClient data
 * @record 
 */
class ClientPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientPrivate

    static name: string
}

interface DeviceClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.DeviceClass

    parent_class: GObject.ObjectClass
}

abstract class DeviceClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceClass

    static name: string
}

interface DeviceGlueIface {

    // Own fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_history: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean
    handle_get_statistics: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean
    handle_refresh: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_capacity: (object: DeviceGlue) => number
    get_energy: (object: DeviceGlue) => number
    get_energy_empty: (object: DeviceGlue) => number
    get_energy_full: (object: DeviceGlue) => number
    get_energy_full_design: (object: DeviceGlue) => number
    get_energy_rate: (object: DeviceGlue) => number
    get_has_history: (object: DeviceGlue) => boolean
    get_has_statistics: (object: DeviceGlue) => boolean
    get_icon_name: (object: DeviceGlue) => string
    get_is_present: (object: DeviceGlue) => boolean
    get_is_rechargeable: (object: DeviceGlue) => boolean
    get_luminosity: (object: DeviceGlue) => number
    get_model: (object: DeviceGlue) => string
    get_native_path: (object: DeviceGlue) => string
    get_online: (object: DeviceGlue) => boolean
    get_percentage: (object: DeviceGlue) => number
    get_power_supply: (object: DeviceGlue) => boolean
    get_serial: (object: DeviceGlue) => string
    get_state: (object: DeviceGlue) => number
    get_technology: (object: DeviceGlue) => number
    get_temperature: (object: DeviceGlue) => number
    get_time_to_empty: (object: DeviceGlue) => number
    get_time_to_full: (object: DeviceGlue) => number
    get_type_: (object: DeviceGlue) => number
    get_update_time: (object: DeviceGlue) => number
    get_vendor: (object: DeviceGlue) => string
    get_voltage: (object: DeviceGlue) => number
    get_warning_level: (object: DeviceGlue) => number
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link>.
 * @record 
 */
abstract class DeviceGlueIface {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueIface

    static name: string
}

interface DeviceGlueProxyClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UpDeviceGlueProxy.
 * @record 
 */
abstract class DeviceGlueProxyClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxyClass

    static name: string
}

interface DeviceGlueProxyPrivate {
}

class DeviceGlueProxyPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxyPrivate

    static name: string
}

interface DeviceGlueSkeletonClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UpDeviceGlueSkeleton.
 * @record 
 */
abstract class DeviceGlueSkeletonClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeletonClass

    static name: string
}

interface DeviceGlueSkeletonPrivate {
}

class DeviceGlueSkeletonPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeletonPrivate

    static name: string
}

interface DevicePrivate {
}

/**
 * Private #PkDevice data
 * @record 
 */
class DevicePrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.DevicePrivate

    static name: string
}

interface HistoryItemClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.HistoryItemClass

    parent_class: GObject.ObjectClass
}

abstract class HistoryItemClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.HistoryItemClass

    static name: string
}

interface HistoryItemPrivate {
}

class HistoryItemPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.HistoryItemPrivate

    static name: string
}

interface StatsItemClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.StatsItemClass

    parent_class: GObject.ObjectClass
}

abstract class StatsItemClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.StatsItemClass

    static name: string
}

interface StatsItemPrivate {
}

class StatsItemPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.StatsItemPrivate

    static name: string
}

interface WakeupItemClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupItemClass

    parent_class: GObject.ObjectClass
}

abstract class WakeupItemClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupItemClass

    static name: string
}

interface WakeupItemPrivate {
}

class WakeupItemPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupItemPrivate

    static name: string
}

interface WakeupsClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupsClass

    parent_class: GObject.ObjectClass
    data_changed: (wakeups: Wakeups) => void
    total_changed: (wakeups: Wakeups, value: number) => void
}

abstract class WakeupsClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsClass

    static name: string
}

interface WakeupsGlueIface {

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_data: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_total: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_has_capability: (object: WakeupsGlue) => boolean
    data_changed: (object: WakeupsGlue) => void
    total_changed: (object: WakeupsGlue, arg_value: number) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link>.
 * @record 
 */
abstract class WakeupsGlueIface {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueIface

    static name: string
}

interface WakeupsGlueProxyClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #UpWakeupsGlueProxy.
 * @record 
 */
abstract class WakeupsGlueProxyClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxyClass

    static name: string
}

interface WakeupsGlueProxyPrivate {
}

class WakeupsGlueProxyPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxyPrivate

    static name: string
}

interface WakeupsGlueSkeletonClass {

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #UpWakeupsGlueSkeleton.
 * @record 
 */
abstract class WakeupsGlueSkeletonClass {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeletonClass

    static name: string
}

interface WakeupsGlueSkeletonPrivate {
}

class WakeupsGlueSkeletonPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeletonPrivate

    static name: string
}

interface WakeupsPrivate {
}

class WakeupsPrivate {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsPrivate

    static name: string
}

}
export default UPowerGlib;