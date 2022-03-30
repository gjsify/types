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
function client_glue_interface_info(): Gio.DBusInterfaceInfo
function client_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function device_glue_interface_info(): Gio.DBusInterfaceInfo
function device_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function wakeups_glue_interface_info(): Gio.DBusInterfaceInfo
function wakeups_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
class ClientGlue {
    /* Properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
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
    call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
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
    call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
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
    call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_device Argument.
     */
    connect(sigName: "device-added", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    emit(sigName: "device-added", arg_device: string): void
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_device Argument.
     */
    connect(sigName: "device-removed", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    emit(sigName: "device-removed", arg_device: string): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_enumerate_devices() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_get_critical_action() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_get_display_device() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
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
class DeviceGlue {
    /* Properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
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
    /* Methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
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
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_get_history() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_type Argument passed by remote caller.
     * @param arg_timespan Argument passed by remote caller.
     * @param arg_resolution Argument passed by remote caller.
     */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_get_statistics() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_type Argument passed by remote caller.
     */
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_refresh() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
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
class WakeupsGlue {
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability: boolean
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
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
    call_get_data_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_get_total_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlue) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlue) => void)): number
    emit(sigName: "data-changed"): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_wakeups_glue_complete_get_data() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_wakeups_glue_complete_get_total() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_value Argument.
     */
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlue, arg_value: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlue, arg_value: number) => void)): number
    emit(sigName: "total-changed", arg_value: number): void
    static name: string
    /* Static methods and pseudo-constructors */
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
class Client {
    /* Properties of UPowerGlib-1.0.UPowerGlib.Client */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.Client */
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
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.Client */
    vfunc_device_added(device: Device): void
    vfunc_device_removed(object_path: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.Client */
    /**
     * The ::device-added signal is emitted when a power device is added.
     * @param device the #UpDevice that was added.
     */
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    /**
     * The ::device-removed signal is emitted when a power device is removed.
     * @param object_path the object path of the #UpDevice that was removed.
     */
    connect(sigName: "device-removed", callback: (($obj: Client, object_path: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, object_path: string) => void)): number
    emit(sigName: "device-removed", object_path: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
interface ClientGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    daemon_version?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_closed?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_present?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    on_battery?: boolean
}
class ClientGlueProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
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
    call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
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
    call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
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
    call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.ClientGlueProxy */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: ClientGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ClientGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: ClientGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ClientGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_device Argument.
     */
    connect(sigName: "device-added", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    emit(sigName: "device-added", arg_device: string): void
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_device Argument.
     */
    connect(sigName: "device-removed", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    emit(sigName: "device-removed", arg_device: string): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_enumerate_devices() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_get_critical_action() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_get_display_device() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGlueProxy_ConstructProps)
    _init (config?: ClientGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ClientGlueProxy
    /* Function overloads */
    static new_finish(res: Gio.AsyncResult): ClientGlueProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ClientGlueProxy
    /* Function overloads */
    static new_for_bus_finish(res: Gio.AsyncResult): ClientGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    /* Function overloads */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    /* Function overloads */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
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
    static $gtype: GObject.Type
}
interface ClientGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    daemon_version?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_closed?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lid_is_present?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    on_battery?: boolean
}
class ClientGlueSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib-1.0.UPowerGlib.ClientGlue */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Exports `interface_` at `object_path` on `connection`.
     * 
     * This can be called multiple times to export the same `interface_`
     * onto multiple connections however the `object_path` provided must be
     * the same for all connections.
     * 
     * Use g_dbus_interface_skeleton_unexport() to unexport the object.
     * @param connection A #GDBusConnection to export `interface_` on.
     * @param object_path The path to export the interface at.
     */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    flush(): void
    /**
     * Gets the first connection that `interface_` is exported on, if any.
     */
    get_connection(): Gio.DBusConnection | null
    /**
     * Gets a list of the connections that `interface_` is exported on.
     */
    get_connections(): Gio.DBusConnection[]
    /**
     * Gets the #GDBusInterfaceSkeletonFlags that describes what the behavior
     * of `interface_`
     */
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Gets the object path that `interface_` is exported on, if any.
     */
    get_object_path(): string | null
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    get_properties(): GLib.Variant
    /**
     * Checks if `interface_` is exported on `connection`.
     * @param connection A #GDBusConnection.
     */
    has_connection(connection: Gio.DBusConnection): boolean
    /**
     * Sets flags describing what the behavior of `skeleton` should be.
     * @param flags Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    /**
     * Stops exporting `interface_` on all connections it is exported on.
     * 
     * To unexport `interface_` from only a single connection, use
     * g_dbus_interface_skeleton_unexport_from_connection()
     */
    unexport(): void
    /**
     * Stops exporting `interface_` on `connection`.
     * 
     * To stop exporting on all connections the interface is exported on,
     * use g_dbus_interface_skeleton_unexport().
     * @param connection A #GDBusConnection.
     */
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UPowerGlib-1.0.UPowerGlib.ClientGlue */
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
    call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
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
    call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
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
    call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeleton */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Emitted when a method is invoked by a remote caller and used to
     * determine if the method call is authorized.
     * 
     * Note that this signal is emitted in a thread dedicated to
     * handling the method call so handlers are allowed to perform
     * blocking IO. This means that it is appropriate to call e.g.
     * [polkit_authority_check_authorization_sync()](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#polkit-authority-check-authorization-sync)
     * with the
     * [POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#POLKIT-CHECK-AUTHORIZATION-FLAGS-ALLOW-USER-INTERACTION:CAPS)
     * flag set.
     * 
     * If %FALSE is returned then no further handlers are run and the
     * signal handler must take a reference to `invocation` and finish
     * handling the call (e.g. return an error via
     * g_dbus_method_invocation_return_error()).
     * 
     * Otherwise, if %TRUE is returned, signal emission continues. If no
     * handlers return %FALSE, then the method is dispatched. If
     * `interface` has an enclosing #GDBusObjectSkeleton, then the
     * #GDBusObjectSkeleton::authorize-method signal handlers run before
     * the handlers for this signal.
     * 
     * The default class handler just returns %TRUE.
     * 
     * Please note that the common case is optimized: if no signals
     * handlers are connected and the default class handler isn't
     * overridden (for both `interface` and the enclosing
     * #GDBusObjectSkeleton, if any) and #GDBusInterfaceSkeleton:g-flags does
     * not have the
     * %G_DBUS_INTERFACE_SKELETON_FLAGS_HANDLE_METHOD_INVOCATIONS_IN_THREAD
     * flags set, no dedicated thread is ever used and the call will be
     * handled in the same thread as the object that `interface` belongs
     * to was exported in.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "g-authorize-method", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.ClientGlue */
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_device Argument.
     */
    connect(sigName: "device-added", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    emit(sigName: "device-added", arg_device: string): void
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_device Argument.
     */
    connect(sigName: "device-removed", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    emit(sigName: "device-removed", arg_device: string): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_enumerate_devices() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_get_critical_action() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_client_glue_complete_get_display_device() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGlueSkeleton_ConstructProps)
    _init (config?: ClientGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientGlueSkeleton
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
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.Device */
    /**
     * The percentage capacity of the device where 100% means the device has
     * the same charge potential as when it was manufactured.
     */
    capacity?: number
    /**
     * The energy left in the device. Measured in mWh.
     */
    energy?: number
    /**
     * The energy the device will have when it is empty. This is usually zero.
     * Measured in mWh.
     */
    energy_empty?: number
    /**
     * The amount of energy when the device is fully charged. Measured in mWh.
     */
    energy_full?: number
    /**
     * The amount of energy when the device was brand new. Measured in mWh.
     */
    energy_full_design?: number
    /**
     * The rate of discharge or charge. Measured in mW.
     */
    energy_rate?: number
    /**
     * If the device has history data that might be useful.
     */
    has_history?: boolean
    /**
     * If the device has statistics data that might be useful.
     */
    has_statistics?: boolean
    /**
     * The icon name, following the Icon Naming Speficiation
     */
    icon_name?: string
    /**
     * If the device is present, as some devices like laptop batteries
     * can be removed, leaving an empty bay that is still technically a
     * device.
     */
    is_present?: boolean
    /**
     * If the device has a rechargable battery.
     */
    is_rechargeable?: boolean
    /**
     * The device kind, e.g. %UP_DEVICE_KIND_KEYBOARD.
     */
    kind?: number
    /**
     * The current luminosity of the device.
     */
    luminosity?: number
    /**
     * The model of the device.
     */
    model?: string
    /**
     * The native path of the device, useful for direct device access.
     */
    native_path?: string
    /**
     * If the device is online, i.e. connected.
     */
    online?: boolean
    /**
     * The percentage charge of the device.
     */
    percentage?: number
    /**
     * If the device is powering the system.
     */
    power_supply?: boolean
    /**
     * The serial number of the device.
     */
    serial?: string
    /**
     * The state the device is in at this time, e.g. %UP_DEVICE_STATE_EMPTY.
     */
    state?: number
    /**
     * The battery technology e.g. %UP_DEVICE_TECHNOLOGY_LITHIUM_ION.
     */
    technology?: number
    /**
     * The temperature of the device in degrees Celsius.
     */
    temperature?: number
    /**
     * The amount of time until the device is empty.
     */
    time_to_empty?: number
    /**
     * The amount of time until the device is fully charged.
     */
    time_to_full?: number
    /**
     * The last time the device was updated.
     */
    update_time?: number
    /**
     * The vendor of the device.
     */
    vendor?: string
    /**
     * The current voltage of the device.
     */
    voltage?: number
    /**
     * The warning level e.g. %UP_DEVICE_LEVEL_WARNING.
     */
    warning_level?: number
}
class Device {
    /* Properties of UPowerGlib-1.0.UPowerGlib.Device */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.Device */
    /**
     * Gets the device history.
     * @param type The type of history, known values are "rate" and "charge".
     * @param timespec the amount of time to look back into time.
     * @param resolution the resolution of data.
     * @param cancellable a #GCancellable or %NULL
     */
    get_history_sync(type: string, timespec: number, resolution: number, cancellable?: Gio.Cancellable | null): HistoryItem[]
    /**
     * Gets the object path for the device.
     */
    get_object_path(): string
    /**
     * Gets the device current statistics.
     * @param type the type of statistics.
     * @param cancellable a #GCancellable or %NULL
     */
    get_statistics_sync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[]
    /**
     * Refreshes properties on the device.
     * This function is normally not required.
     * @param cancellable a #GCancellable or %NULL
     */
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the object and fills up initial properties.
     * @param object_path The UPower object path.
     * @param cancellable a #GCancellable or %NULL
     */
    set_object_path_sync(object_path: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Converts the device to a string description.
     */
    to_text(): string
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
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
    static $gtype: GObject.Type
}
interface DeviceGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    capacity?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_empty?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full_design?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_rate?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_history?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_statistics?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    icon_name?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_present?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_rechargeable?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    luminosity?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    model?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    native_path?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    online?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    percentage?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    power_supply?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    serial?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    state?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    technology?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    temperature?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_empty?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_full?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    update_time?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    vendor?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    voltage?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    warning_level?: number
}
class DeviceGlueProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
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
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxy */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: DeviceGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DeviceGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: DeviceGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DeviceGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_get_history() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_type Argument passed by remote caller.
     * @param arg_timespan Argument passed by remote caller.
     * @param arg_resolution Argument passed by remote caller.
     */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_get_statistics() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_type Argument passed by remote caller.
     */
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_refresh() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceGlueProxy_ConstructProps)
    _init (config?: DeviceGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DeviceGlueProxy
    /* Function overloads */
    static new_finish(res: Gio.AsyncResult): DeviceGlueProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DeviceGlueProxy
    /* Function overloads */
    static new_for_bus_finish(res: Gio.AsyncResult): DeviceGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    /* Function overloads */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    /* Function overloads */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
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
    static $gtype: GObject.Type
}
interface DeviceGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Capacity">"Capacity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    capacity?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Energy">"Energy"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyEmpty">"EnergyEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_empty?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_full_design?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energy_rate?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_history?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_statistics?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    icon_name?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_present?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_rechargeable?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Luminosity">"Luminosity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    luminosity?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Model">"Model"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    model?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.NativePath">"NativePath"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    native_path?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Online">"Online"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    online?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Percentage">"Percentage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    percentage?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.PowerSupply">"PowerSupply"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    power_supply?: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Serial">"Serial"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    serial?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.State">"State"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    state?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Technology">"Technology"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    technology?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Temperature">"Temperature"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    temperature?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToEmpty">"TimeToEmpty"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_empty?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    time_to_full?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Type">"Type"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    type?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.UpdateTime">"UpdateTime"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    update_time?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Vendor">"Vendor"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    vendor?: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.Voltage">"Voltage"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    voltage?: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.WarningLevel">"WarningLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    warning_level?: number
}
class DeviceGlueSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
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
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Exports `interface_` at `object_path` on `connection`.
     * 
     * This can be called multiple times to export the same `interface_`
     * onto multiple connections however the `object_path` provided must be
     * the same for all connections.
     * 
     * Use g_dbus_interface_skeleton_unexport() to unexport the object.
     * @param connection A #GDBusConnection to export `interface_` on.
     * @param object_path The path to export the interface at.
     */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    flush(): void
    /**
     * Gets the first connection that `interface_` is exported on, if any.
     */
    get_connection(): Gio.DBusConnection | null
    /**
     * Gets a list of the connections that `interface_` is exported on.
     */
    get_connections(): Gio.DBusConnection[]
    /**
     * Gets the #GDBusInterfaceSkeletonFlags that describes what the behavior
     * of `interface_`
     */
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Gets the object path that `interface_` is exported on, if any.
     */
    get_object_path(): string | null
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    get_properties(): GLib.Variant
    /**
     * Checks if `interface_` is exported on `connection`.
     * @param connection A #GDBusConnection.
     */
    has_connection(connection: Gio.DBusConnection): boolean
    /**
     * Sets flags describing what the behavior of `skeleton` should be.
     * @param flags Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    /**
     * Stops exporting `interface_` on all connections it is exported on.
     * 
     * To unexport `interface_` from only a single connection, use
     * g_dbus_interface_skeleton_unexport_from_connection()
     */
    unexport(): void
    /**
     * Stops exporting `interface_` on `connection`.
     * 
     * To stop exporting on all connections the interface is exported on,
     * use g_dbus_interface_skeleton_unexport().
     * @param connection A #GDBusConnection.
     */
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
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
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeleton */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Emitted when a method is invoked by a remote caller and used to
     * determine if the method call is authorized.
     * 
     * Note that this signal is emitted in a thread dedicated to
     * handling the method call so handlers are allowed to perform
     * blocking IO. This means that it is appropriate to call e.g.
     * [polkit_authority_check_authorization_sync()](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#polkit-authority-check-authorization-sync)
     * with the
     * [POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#POLKIT-CHECK-AUTHORIZATION-FLAGS-ALLOW-USER-INTERACTION:CAPS)
     * flag set.
     * 
     * If %FALSE is returned then no further handlers are run and the
     * signal handler must take a reference to `invocation` and finish
     * handling the call (e.g. return an error via
     * g_dbus_method_invocation_return_error()).
     * 
     * Otherwise, if %TRUE is returned, signal emission continues. If no
     * handlers return %FALSE, then the method is dispatched. If
     * `interface` has an enclosing #GDBusObjectSkeleton, then the
     * #GDBusObjectSkeleton::authorize-method signal handlers run before
     * the handlers for this signal.
     * 
     * The default class handler just returns %TRUE.
     * 
     * Please note that the common case is optimized: if no signals
     * handlers are connected and the default class handler isn't
     * overridden (for both `interface` and the enclosing
     * #GDBusObjectSkeleton, if any) and #GDBusInterfaceSkeleton:g-flags does
     * not have the
     * %G_DBUS_INTERFACE_SKELETON_FLAGS_HANDLE_METHOD_INVOCATIONS_IN_THREAD
     * flags set, no dedicated thread is ever used and the call will be
     * handled in the same thread as the object that `interface` belongs
     * to was exported in.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "g-authorize-method", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue */
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_get_history() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_type Argument passed by remote caller.
     * @param arg_timespan Argument passed by remote caller.
     * @param arg_resolution Argument passed by remote caller.
     */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_get_statistics() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     * @param arg_type Argument passed by remote caller.
     */
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_device_glue_complete_refresh() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceGlueSkeleton_ConstructProps)
    _init (config?: DeviceGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceGlueSkeleton
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
    static $gtype: GObject.Type
}
interface HistoryItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.HistoryItem */
    state?: number
    time?: number
    value?: number
}
class HistoryItem {
    /* Properties of UPowerGlib-1.0.UPowerGlib.HistoryItem */
    state: number
    time: number
    value: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.HistoryItem */
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
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HistoryItem_ConstructProps)
    _init (config?: HistoryItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HistoryItem
    static $gtype: GObject.Type
}
interface StatsItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.StatsItem */
    accuracy?: number
    value?: number
}
class StatsItem {
    /* Properties of UPowerGlib-1.0.UPowerGlib.StatsItem */
    accuracy: number
    value: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.StatsItem */
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
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StatsItem_ConstructProps)
    _init (config?: StatsItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StatsItem
    static $gtype: GObject.Type
}
interface WakeupItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupItem */
    cmdline?: string
    details?: string
    id?: number
    is_userspace?: boolean
    old?: number
    value?: number
}
class WakeupItem {
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupItem */
    cmdline: string
    details: string
    id: number
    is_userspace: boolean
    old: number
    value: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupItem */
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
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WakeupItem_ConstructProps)
    _init (config?: WakeupItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupItem
    static $gtype: GObject.Type
}
interface Wakeups_ConstructProps extends GObject.Object_ConstructProps {
}
class Wakeups {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib-1.0.UPowerGlib.Wakeups */
    /**
     * Gets the wakeups data from the daemon.
     * @param cancellable a #GCancellable or %NULL
     */
    get_data_sync(cancellable?: Gio.Cancellable | null): WakeupItem[]
    /**
     * Returns if the daemon supports getting the wakeup data.
     */
    get_has_capability(): boolean
    /**
     * Gets properties from the daemon about wakeup data.
     * @param cancellable a #GCancellable or %NULL
     */
    get_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Gets the the total number of wakeups per second from the daemon.
     * @param cancellable a #GCancellable or %NULL
     */
    get_total_sync(cancellable?: Gio.Cancellable | null): number
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.Wakeups */
    vfunc_data_changed(): void
    vfunc_total_changed(value: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.Wakeups */
    connect(sigName: "data-changed", callback: (($obj: Wakeups) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: Wakeups) => void)): number
    emit(sigName: "data-changed"): void
    connect(sigName: "total-changed", callback: (($obj: Wakeups, object: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: Wakeups, object: number) => void)): number
    emit(sigName: "total-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Wakeups, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Wakeups, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Wakeups_ConstructProps)
    _init (config?: Wakeups_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Wakeups
    static $gtype: GObject.Type
}
interface WakeupsGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability?: boolean
}
class WakeupsGlueProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
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
    call_get_data_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_get_total_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxy */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: WakeupsGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: WakeupsGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: WakeupsGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: WakeupsGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlueProxy) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlueProxy) => void)): number
    emit(sigName: "data-changed"): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_wakeups_glue_complete_get_data() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_wakeups_glue_complete_get_total() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_value Argument.
     */
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlueProxy, arg_value: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlueProxy, arg_value: number) => void)): number
    emit(sigName: "total-changed", arg_value: number): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WakeupsGlueProxy_ConstructProps)
    _init (config?: WakeupsGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): WakeupsGlueProxy
    /* Function overloads */
    static new_finish(res: Gio.AsyncResult): WakeupsGlueProxy
    static new_for_bus_finish(res: Gio.AsyncResult): WakeupsGlueProxy
    /* Function overloads */
    static new_for_bus_finish(res: Gio.AsyncResult): WakeupsGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    /* Function overloads */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    /* Function overloads */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
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
    static $gtype: GObject.Type
}
interface WakeupsGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    /* Constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability?: boolean
}
class WakeupsGlueSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    has_capability: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Exports `interface_` at `object_path` on `connection`.
     * 
     * This can be called multiple times to export the same `interface_`
     * onto multiple connections however the `object_path` provided must be
     * the same for all connections.
     * 
     * Use g_dbus_interface_skeleton_unexport() to unexport the object.
     * @param connection A #GDBusConnection to export `interface_` on.
     * @param object_path The path to export the interface at.
     */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    flush(): void
    /**
     * Gets the first connection that `interface_` is exported on, if any.
     */
    get_connection(): Gio.DBusConnection | null
    /**
     * Gets a list of the connections that `interface_` is exported on.
     */
    get_connections(): Gio.DBusConnection[]
    /**
     * Gets the #GDBusInterfaceSkeletonFlags that describes what the behavior
     * of `interface_`
     */
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Gets the object path that `interface_` is exported on, if any.
     */
    get_object_path(): string | null
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    get_properties(): GLib.Variant
    /**
     * Checks if `interface_` is exported on `connection`.
     * @param connection A #GDBusConnection.
     */
    has_connection(connection: Gio.DBusConnection): boolean
    /**
     * Sets flags describing what the behavior of `skeleton` should be.
     * @param flags Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     */
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    /**
     * Stops exporting `interface_` on all connections it is exported on.
     * 
     * To unexport `interface_` from only a single connection, use
     * g_dbus_interface_skeleton_unexport_from_connection()
     */
    unexport(): void
    /**
     * Stops exporting `interface_` on `connection`.
     * 
     * To stop exporting on all connections the interface is exported on,
     * use g_dbus_interface_skeleton_unexport().
     * @param connection A #GDBusConnection.
     */
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
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
    call_get_data_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
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
    call_get_total_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
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
    /* Virtual methods of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeleton */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * If `interface_` has outstanding changes, request for these changes to be
     * emitted immediately.
     * 
     * For example, an exported D-Bus interface may queue up property
     * changes and emit the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * signal later (e.g. in an idle handler). This technique is useful
     * for collapsing multiple property changes into one.
     */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Gets all D-Bus properties for `interface_`.
     */
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    /**
     * Emitted when a method is invoked by a remote caller and used to
     * determine if the method call is authorized.
     * 
     * Note that this signal is emitted in a thread dedicated to
     * handling the method call so handlers are allowed to perform
     * blocking IO. This means that it is appropriate to call e.g.
     * [polkit_authority_check_authorization_sync()](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#polkit-authority-check-authorization-sync)
     * with the
     * [POLKIT_CHECK_AUTHORIZATION_FLAGS_ALLOW_USER_INTERACTION](http://hal.freedesktop.org/docs/polkit/PolkitAuthority.html#POLKIT-CHECK-AUTHORIZATION-FLAGS-ALLOW-USER-INTERACTION:CAPS)
     * flag set.
     * 
     * If %FALSE is returned then no further handlers are run and the
     * signal handler must take a reference to `invocation` and finish
     * handling the call (e.g. return an error via
     * g_dbus_method_invocation_return_error()).
     * 
     * Otherwise, if %TRUE is returned, signal emission continues. If no
     * handlers return %FALSE, then the method is dispatched. If
     * `interface` has an enclosing #GDBusObjectSkeleton, then the
     * #GDBusObjectSkeleton::authorize-method signal handlers run before
     * the handlers for this signal.
     * 
     * The default class handler just returns %TRUE.
     * 
     * Please note that the common case is optimized: if no signals
     * handlers are connected and the default class handler isn't
     * overridden (for both `interface` and the enclosing
     * #GDBusObjectSkeleton, if any) and #GDBusInterfaceSkeleton:g-flags does
     * not have the
     * %G_DBUS_INTERFACE_SKELETON_FLAGS_HANDLE_METHOD_INVOCATIONS_IN_THREAD
     * flags set, no dedicated thread is ever used and the call will be
     * handled in the same thread as the object that `interface` belongs
     * to was exported in.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "g-authorize-method", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue */
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlueSkeleton) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlueSkeleton) => void)): number
    emit(sigName: "data-changed"): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_wakeups_glue_complete_get_data() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    /**
     * Signal emitted when a remote caller is invoking the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method.
     * 
     * If a signal handler returns %TRUE, it means the signal handler will handle the invocation (e.g. take a reference to `invocation` and eventually call up_wakeups_glue_complete_get_total() or e.g. g_dbus_method_invocation_return_error() on it) and no order signal handlers will run. If no signal handler handles the invocation, the %G_DBUS_ERROR_UNKNOWN_METHOD error is returned.
     * @param invocation A #GDBusMethodInvocation.
     */
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    /**
     * On the client-side, this signal is emitted whenever the D-Bus signal <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> is received.
     * 
     * On the service-side, this signal can be used with e.g. g_signal_emit_by_name() to make the object emit the D-Bus signal.
     * @param arg_value Argument.
     */
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlueSkeleton, arg_value: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlueSkeleton, arg_value: number) => void)): number
    emit(sigName: "total-changed", arg_value: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WakeupsGlueSkeleton_ConstructProps)
    _init (config?: WakeupsGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupsGlueSkeleton
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
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientClass */
    parent_class: GObject.ObjectClass
    device_added: (client: Client, device: Device) => void
    device_removed: (client: Client, object_path: string) => void
    static name: string
}
abstract class ClientGlueIface {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientGlueIface */
    /**
     * The parent interface.
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
    static name: string
}
abstract class ClientGlueProxyClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientGlueProxyClass */
    /**
     * The parent class.
     */
    parent_class: Gio.DBusProxyClass
    static name: string
}
class ClientGlueProxyPrivate {
    static name: string
}
abstract class ClientGlueSkeletonClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeletonClass */
    /**
     * The parent class.
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class ClientGlueSkeletonPrivate {
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class DeviceGlueIface {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueIface */
    /**
     * The parent interface.
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
    static name: string
}
abstract class DeviceGlueProxyClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxyClass */
    /**
     * The parent class.
     */
    parent_class: Gio.DBusProxyClass
    static name: string
}
class DeviceGlueProxyPrivate {
    static name: string
}
abstract class DeviceGlueSkeletonClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeletonClass */
    /**
     * The parent class.
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class DeviceGlueSkeletonPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class HistoryItemClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.HistoryItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class HistoryItemPrivate {
    static name: string
}
abstract class StatsItemClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.StatsItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class StatsItemPrivate {
    static name: string
}
abstract class WakeupItemClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class WakeupItemPrivate {
    static name: string
}
abstract class WakeupsClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsClass */
    parent_class: GObject.ObjectClass
    data_changed: (wakeups: Wakeups) => void
    total_changed: (wakeups: Wakeups, value: number) => void
    static name: string
}
abstract class WakeupsGlueIface {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueIface */
    /**
     * The parent interface.
     */
    parent_iface: GObject.TypeInterface
    handle_get_data: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_total: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_has_capability: (object: WakeupsGlue) => boolean
    data_changed: (object: WakeupsGlue) => void
    total_changed: (object: WakeupsGlue, arg_value: number) => void
    static name: string
}
abstract class WakeupsGlueProxyClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueProxyClass */
    /**
     * The parent class.
     */
    parent_class: Gio.DBusProxyClass
    static name: string
}
class WakeupsGlueProxyPrivate {
    static name: string
}
abstract class WakeupsGlueSkeletonClass {
    /* Fields of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeletonClass */
    /**
     * The parent class.
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
class WakeupsGlueSkeletonPrivate {
    static name: string
}
class WakeupsPrivate {
    static name: string
}
}
export default UPowerGlib;