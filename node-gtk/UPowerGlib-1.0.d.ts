// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UPowerGlib-1.0
 */

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
function clientGlueInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UpClientGlue interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function clientGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Device.top_of_page">org.freedesktop.UPower.Device</link> D-Bus interface.
 */
function deviceGlueInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UpDeviceGlue interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function deviceGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UPower-Wakeups.top_of_page">org.freedesktop.UPower.Wakeups</link> D-Bus interface.
 */
function wakeupsGlueInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #UpWakeupsGlue interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject<!-- -->-derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
function wakeupsGlueOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
interface ClientGlue_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.ClientGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    daemonVersion?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lidIsClosed?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lidIsPresent?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    onBattery?: boolean | null
}

/**
 * Signal callback interface for `device-added`
 */
interface ClientGlue_DeviceAddedSignalCallback {
    (argDevice: string): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface ClientGlue_DeviceRemovedSignalCallback {
    (argDevice: string): void
}

/**
 * Signal callback interface for `handle-enumerate-devices`
 */
interface ClientGlue_HandleEnumerateDevicesSignalCallback {
    (invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-get-critical-action`
 */
interface ClientGlue_HandleGetCriticalActionSignalCallback {
    (invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-get-display-device`
 */
interface ClientGlue_HandleGetDisplayDeviceSignalCallback {
    (invocation: Gio.DBusMethodInvocation): boolean
}

interface ClientGlue {

    // Own properties of UPowerGlib-1.0.UPowerGlib.ClientGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.DaemonVersion">"DaemonVersion"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    daemonVersion: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsClosed">"LidIsClosed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lidIsClosed: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.LidIsPresent">"LidIsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    lidIsPresent: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower.OnBattery">"OnBattery"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    onBattery: boolean

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
    callEnumerateDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_client_glue_call_enumerate_devices().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_enumerate_devices().
     */
    callEnumerateDevicesFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevices */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_call_enumerate_devices() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callEnumerateDevicesSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevices */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_call_get_critical_action_finish() to get the result of the operation.
     * 
     * See up_client_glue_call_get_critical_action_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetCriticalAction(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_client_glue_call_get_critical_action().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_critical_action().
     */
    callGetCriticalActionFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAction */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_call_get_critical_action() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetCriticalActionSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAction */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_call_get_display_device_finish() to get the result of the operation.
     * 
     * See up_client_glue_call_get_display_device_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetDisplayDevice(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_client_glue_call_get_display_device().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_call_get_display_device().
     */
    callGetDisplayDeviceFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outDevice */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_call_get_display_device() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetDisplayDeviceSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outDevice */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.EnumerateDevices">EnumerateDevices()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param devices Parameter to return.
     */
    completeEnumerateDevices(invocation: Gio.DBusMethodInvocation, devices: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetCriticalAction">GetCriticalAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param action Parameter to return.
     */
    completeGetCriticalAction(invocation: Gio.DBusMethodInvocation, action: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower.GetDisplayDevice">GetDisplayDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param device Parameter to return.
     */
    completeGetDisplayDevice(invocation: Gio.DBusMethodInvocation, device: string): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceAdded">"DeviceAdded"</link> D-Bus signal.
     * @param argDevice Argument to pass with the signal.
     */
    emitDeviceAdded(argDevice: string): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower.DeviceRemoved">"DeviceRemoved"</link> D-Bus signal.
     * @param argDevice Argument to pass with the signal.
     */
    emitDeviceRemoved(argDevice: string): void

    // Own signals of UPowerGlib-1.0.UPowerGlib.ClientGlue

    connect(sigName: "device-added", callback: ClientGlue_DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: ClientGlue_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: ClientGlue_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: ClientGlue_DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: ClientGlue_DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: ClientGlue_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: ClientGlue_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: ClientGlue_DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void
    connect(sigName: "handle-enumerate-devices", callback: ClientGlue_HandleEnumerateDevicesSignalCallback): number
    on(sigName: "handle-enumerate-devices", callback: ClientGlue_HandleEnumerateDevicesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enumerate-devices", callback: ClientGlue_HandleEnumerateDevicesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enumerate-devices", callback: ClientGlue_HandleEnumerateDevicesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-enumerate-devices", ...args: any[]): void
    connect(sigName: "handle-get-critical-action", callback: ClientGlue_HandleGetCriticalActionSignalCallback): number
    on(sigName: "handle-get-critical-action", callback: ClientGlue_HandleGetCriticalActionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-critical-action", callback: ClientGlue_HandleGetCriticalActionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-critical-action", callback: ClientGlue_HandleGetCriticalActionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-critical-action", ...args: any[]): void
    connect(sigName: "handle-get-display-device", callback: ClientGlue_HandleGetDisplayDeviceSignalCallback): number
    on(sigName: "handle-get-display-device", callback: ClientGlue_HandleGetDisplayDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-display-device", callback: ClientGlue_HandleGetDisplayDeviceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-display-device", callback: ClientGlue_HandleGetDisplayDeviceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-display-device", ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.ClientGlue

    connect(sigName: "notify::daemon-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (...args: any[]) => void): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UpClientGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    energyEmpty?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energyFull?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energyFullDesign?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energyRate?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hasHistory?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hasStatistics?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    iconName?: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isPresent?: boolean | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isRechargeable?: boolean | null
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
    nativePath?: string | null
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
    powerSupply?: boolean | null
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
    timeToEmpty?: number | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timeToFull?: number | null
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
    updateTime?: number | null
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
    warningLevel?: number | null
}

/**
 * Signal callback interface for `handle-get-history`
 */
interface DeviceGlue_HandleGetHistorySignalCallback {
    (invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number): boolean
}

/**
 * Signal callback interface for `handle-get-statistics`
 */
interface DeviceGlue_HandleGetStatisticsSignalCallback {
    (invocation: Gio.DBusMethodInvocation, argType: string): boolean
}

/**
 * Signal callback interface for `handle-refresh`
 */
interface DeviceGlue_HandleRefreshSignalCallback {
    (invocation: Gio.DBusMethodInvocation): boolean
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
    energyEmpty: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFull">"EnergyFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energyFull: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyFullDesign">"EnergyFullDesign"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energyFullDesign: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.EnergyRate">"EnergyRate"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    energyRate: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasHistory">"HasHistory"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hasHistory: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.HasStatistics">"HasStatistics"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hasStatistics: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IconName">"IconName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    iconName: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsPresent">"IsPresent"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isPresent: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.IsRechargeable">"IsRechargeable"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isRechargeable: boolean
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
    nativePath: string
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
    powerSupply: boolean
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
    timeToEmpty: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Device.TimeToFull">"TimeToFull"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timeToFull: number
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
    updateTime: number
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
    warningLevel: number

    // Owm methods of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_call_get_history_finish() to get the result of the operation.
     * 
     * See up_device_glue_call_get_history_sync() for the synchronous, blocking version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argTimespan Argument to pass with the method invocation.
     * @param argResolution Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetHistory(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_device_glue_call_get_history().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_history().
     */
    callGetHistoryFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_call_get_history() for the asynchronous version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param argTimespan Argument to pass with the method invocation.
     * @param argResolution Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetHistorySync(argType: string, argTimespan: number, argResolution: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_call_get_statistics_finish() to get the result of the operation.
     * 
     * See up_device_glue_call_get_statistics_sync() for the synchronous, blocking version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetStatistics(argType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_device_glue_call_get_statistics().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_get_statistics().
     */
    callGetStatisticsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_call_get_statistics() for the asynchronous version of this method.
     * @param argType Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetStatisticsSync(argType: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_call_refresh_finish() to get the result of the operation.
     * 
     * See up_device_glue_call_refresh_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRefresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_device_glue_call_refresh().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_call_refresh().
     */
    callRefreshFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_call_refresh() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callRefreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetHistory">GetHistory()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param data Parameter to return.
     */
    completeGetHistory(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.GetStatistics">GetStatistics()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param data Parameter to return.
     */
    completeGetStatistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Device.Refresh">Refresh()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRefresh(invocation: Gio.DBusMethodInvocation): void

    // Own signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    connect(sigName: "handle-get-history", callback: DeviceGlue_HandleGetHistorySignalCallback): number
    on(sigName: "handle-get-history", callback: DeviceGlue_HandleGetHistorySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-history", callback: DeviceGlue_HandleGetHistorySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-history", callback: DeviceGlue_HandleGetHistorySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-history", argType: string, argTimespan: number, argResolution: number, ...args: any[]): void
    connect(sigName: "handle-get-statistics", callback: DeviceGlue_HandleGetStatisticsSignalCallback): number
    on(sigName: "handle-get-statistics", callback: DeviceGlue_HandleGetStatisticsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-statistics", callback: DeviceGlue_HandleGetStatisticsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-statistics", callback: DeviceGlue_HandleGetStatisticsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-statistics", argType: string, ...args: any[]): void
    connect(sigName: "handle-refresh", callback: DeviceGlue_HandleRefreshSignalCallback): number
    on(sigName: "handle-refresh", callback: DeviceGlue_HandleRefreshSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-refresh", callback: DeviceGlue_HandleRefreshSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-refresh", callback: DeviceGlue_HandleRefreshSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-refresh", ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.DeviceGlue

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (...args: any[]) => void): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (...args: any[]) => void): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (...args: any[]) => void): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (...args: any[]) => void): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UpDeviceGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface WakeupsGlue_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hasCapability?: boolean | null
}

/**
 * Signal callback interface for `data-changed`
 */
interface WakeupsGlue_DataChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `handle-get-data`
 */
interface WakeupsGlue_HandleGetDataSignalCallback {
    (invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-get-total`
 */
interface WakeupsGlue_HandleGetTotalSignalCallback {
    (invocation: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `total-changed`
 */
interface WakeupsGlue_TotalChangedSignalCallback {
    (argValue: number): void
}

interface WakeupsGlue {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UPower-Wakeups.HasCapability">"HasCapability"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    hasCapability: boolean

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
    callGetData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_wakeups_glue_call_get_data().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_data().
     */
    callGetDataFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_call_get_data() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetDataSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outData */ GLib.Variant ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_wakeups_glue_call_get_total_finish() to get the result of the operation.
     * 
     * See up_wakeups_glue_call_get_total_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetTotal(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with up_wakeups_glue_call_get_total().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_call_get_total().
     */
    callGetTotalFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outValue */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_call_get_total() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetTotalSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outValue */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetData">GetData()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param data Parameter to return.
     */
    completeGetData(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UPower-Wakeups.GetTotal">GetTotal()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param value Parameter to return.
     */
    completeGetTotal(invocation: Gio.DBusMethodInvocation, value: number): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.DataChanged">"DataChanged"</link> D-Bus signal.
     */
    emitDataChanged(): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-UPower-Wakeups.TotalChanged">"TotalChanged"</link> D-Bus signal.
     * @param argValue Argument to pass with the signal.
     */
    emitTotalChanged(argValue: number): void

    // Own signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    connect(sigName: "data-changed", callback: WakeupsGlue_DataChangedSignalCallback): number
    on(sigName: "data-changed", callback: WakeupsGlue_DataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: WakeupsGlue_DataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: WakeupsGlue_DataChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-changed", ...args: any[]): void
    connect(sigName: "handle-get-data", callback: WakeupsGlue_HandleGetDataSignalCallback): number
    on(sigName: "handle-get-data", callback: WakeupsGlue_HandleGetDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-data", callback: WakeupsGlue_HandleGetDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-data", callback: WakeupsGlue_HandleGetDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-data", ...args: any[]): void
    connect(sigName: "handle-get-total", callback: WakeupsGlue_HandleGetTotalSignalCallback): number
    on(sigName: "handle-get-total", callback: WakeupsGlue_HandleGetTotalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-total", callback: WakeupsGlue_HandleGetTotalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-total", callback: WakeupsGlue_HandleGetTotalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-total", ...args: any[]): void
    connect(sigName: "total-changed", callback: WakeupsGlue_TotalChangedSignalCallback): number
    on(sigName: "total-changed", callback: WakeupsGlue_TotalChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: WakeupsGlue_TotalChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: WakeupsGlue_TotalChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "total-changed", ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlue

    connect(sigName: "notify::has-capability", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-capability", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #UpWakeupsGlue interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Client_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `device-added`
 */
interface Client_DeviceAddedSignalCallback {
    (device: Device): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface Client_DeviceRemovedSignalCallback {
    (objectPath: string): void
}

interface Client {

    // Own properties of UPowerGlib-1.0.UPowerGlib.Client

    /**
     * The daemon version.
     */
    readonly daemonVersion: string
    /**
     * If the laptop lid is closed.
     */
    readonly lidIsClosed: boolean
    /**
     * If a laptop lid is present.
     */
    readonly lidIsPresent: boolean
    /**
     * If the computer is on battery power.
     */
    readonly onBattery: boolean

    // Own fields of UPowerGlib-1.0.UPowerGlib.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.Client

    /**
     * Gets a string representing the configured critical action,
     * depending on availability.
     */
    getCriticalAction(): string
    /**
     * Get UPower daemon version.
     */
    getDaemonVersion(): string
    /**
     * Get a copy of the device objects.
     */
    getDevices(): Device[]
    /**
     * Get the composite display device.
     */
    getDisplayDevice(): Device
    /**
     * Get whether the laptop lid is closed.
     */
    getLidIsClosed(): boolean
    /**
     * Get whether a laptop lid is present on this machine.
     */
    getLidIsPresent(): boolean
    /**
     * Get whether the system is running on battery power.
     */
    getOnBattery(): boolean

    // Own signals of UPowerGlib-1.0.UPowerGlib.Client

    connect(sigName: "device-added", callback: Client_DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Client_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: Client_DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: Client_DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: Client_DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.Client

    connect(sigName: "notify::daemon-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (...args: any[]) => void): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::daemon-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (...args: any[]) => void): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): ClientGlueProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with up_client_glue_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_client_glue_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ClientGlueProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like up_client_glue_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_client_glue_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ClientGlueProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ClientGlueProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like up_client_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_client_glue_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See up_client_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ClientGlueSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, ClientGlue_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface ClientGlueSkeleton extends Gio.DBusInterface, ClientGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.ClientGlueSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::daemon-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::daemon-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::daemon-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-closed", ...args: any[]): void
    connect(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lid-is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lid-is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lid-is-present", ...args: any[]): void
    connect(sigName: "notify::on-battery", callback: (...args: any[]) => void): number
    on(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::on-battery", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::on-battery", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::on-battery", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    energyEmpty?: number | null
    /**
     * The amount of energy when the device is fully charged. Measured in mWh.
     */
    energyFull?: number | null
    /**
     * The amount of energy when the device was brand new. Measured in mWh.
     */
    energyFullDesign?: number | null
    /**
     * The rate of discharge or charge. Measured in mW.
     */
    energyRate?: number | null
    /**
     * If the device has history data that might be useful.
     */
    hasHistory?: boolean | null
    /**
     * If the device has statistics data that might be useful.
     */
    hasStatistics?: boolean | null
    /**
     * The icon name, following the Icon Naming Speficiation
     */
    iconName?: string | null
    /**
     * If the device is present, as some devices like laptop batteries
     * can be removed, leaving an empty bay that is still technically a
     * device.
     */
    isPresent?: boolean | null
    /**
     * If the device has a rechargable battery.
     */
    isRechargeable?: boolean | null
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
    nativePath?: string | null
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
    powerSupply?: boolean | null
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
    timeToEmpty?: number | null
    /**
     * The amount of time until the device is fully charged.
     */
    timeToFull?: number | null
    /**
     * The last time the device was updated.
     */
    updateTime?: number | null
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
    warningLevel?: number | null
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
    energyEmpty: number
    /**
     * The amount of energy when the device is fully charged. Measured in mWh.
     */
    energyFull: number
    /**
     * The amount of energy when the device was brand new. Measured in mWh.
     */
    energyFullDesign: number
    /**
     * The rate of discharge or charge. Measured in mW.
     */
    energyRate: number
    /**
     * If the device has history data that might be useful.
     */
    hasHistory: boolean
    /**
     * If the device has statistics data that might be useful.
     */
    hasStatistics: boolean
    /**
     * The icon name, following the Icon Naming Speficiation
     */
    iconName: string
    /**
     * If the device is present, as some devices like laptop batteries
     * can be removed, leaving an empty bay that is still technically a
     * device.
     */
    isPresent: boolean
    /**
     * If the device has a rechargable battery.
     */
    isRechargeable: boolean
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
    nativePath: string
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
    powerSupply: boolean
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
    timeToEmpty: number
    /**
     * The amount of time until the device is fully charged.
     */
    timeToFull: number
    /**
     * The last time the device was updated.
     */
    updateTime: number
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
    warningLevel: number

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
    getHistorySync(type: string, timespec: number, resolution: number, cancellable: Gio.Cancellable | null): HistoryItem[]
    /**
     * Gets the object path for the device.
     */
    getObjectPath(): string
    /**
     * Gets the device current statistics.
     * @param type the type of statistics.
     * @param cancellable a #GCancellable or %NULL
     */
    getStatisticsSync(type: string, cancellable: Gio.Cancellable | null): StatsItem[]
    /**
     * Refreshes properties on the device.
     * This function is normally not required.
     * @param cancellable a #GCancellable or %NULL
     */
    refreshSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the object and fills up initial properties.
     * @param objectPath The UPower object path.
     * @param cancellable a #GCancellable or %NULL
     */
    setObjectPathSync(objectPath: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts the device to a string description.
     */
    toText(): string

    // Class property signals of UPowerGlib-1.0.UPowerGlib.Device

    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (...args: any[]) => void): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (...args: any[]) => void): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (...args: any[]) => void): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (...args: any[]) => void): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static kindFromString(type: string): DeviceKind
    /**
     * Converts a #UpDeviceKind to a string.
     * @param typeEnum 
     */
    static kindToString(typeEnum: DeviceKind): string
    /**
     * Converts a string to a #UpDeviceLevel.
     * @param level 
     */
    static levelFromString(level: string): DeviceLevel
    /**
     * Converts a #UpDeviceLevel to a string.
     * @param levelEnum 
     */
    static levelToString(levelEnum: DeviceLevel): string
    /**
     * Converts a string to a #UpDeviceState.
     * @param state 
     */
    static stateFromString(state: string): DeviceState
    /**
     * Converts a #UpDeviceState to a string.
     * @param stateEnum 
     */
    static stateToString(stateEnum: DeviceState): string
    /**
     * Converts a string to a #UpDeviceTechnology.
     * @param technology 
     */
    static technologyFromString(technology: string): DeviceTechnology
    /**
     * Converts a #UpDeviceTechnology to a string.
     * @param technologyEnum 
     */
    static technologyToString(technologyEnum: DeviceTechnology): string
}

interface DeviceGlueProxy_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, DeviceGlue_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface DeviceGlueProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, DeviceGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.DeviceGlueProxy

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (...args: any[]) => void): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (...args: any[]) => void): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (...args: any[]) => void): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (...args: any[]) => void): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): DeviceGlueProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with up_device_glue_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_device_glue_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): DeviceGlueProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like up_device_glue_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_device_glue_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): DeviceGlueProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): DeviceGlueProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like up_device_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_device_glue_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See up_device_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface DeviceGlueSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, DeviceGlue_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface DeviceGlueSkeleton extends Gio.DBusInterface, DeviceGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.DeviceGlueSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::energy", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy", ...args: any[]): void
    connect(sigName: "notify::energy-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-empty", ...args: any[]): void
    connect(sigName: "notify::energy-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full", ...args: any[]): void
    connect(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-full-design", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-full-design", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-full-design", ...args: any[]): void
    connect(sigName: "notify::energy-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::energy-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::energy-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::energy-rate", ...args: any[]): void
    connect(sigName: "notify::has-history", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-history", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-history", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-history", ...args: any[]): void
    connect(sigName: "notify::has-statistics", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-statistics", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-statistics", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-statistics", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-present", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-present", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-rechargeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-rechargeable", ...args: any[]): void
    connect(sigName: "notify::luminosity", callback: (...args: any[]) => void): number
    on(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::luminosity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::luminosity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::luminosity", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::native-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::native-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::native-path", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: (...args: any[]) => void): number
    on(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::percentage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::percentage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::power-supply", callback: (...args: any[]) => void): number
    on(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::power-supply", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::power-supply", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::power-supply", ...args: any[]): void
    connect(sigName: "notify::serial", callback: (...args: any[]) => void): number
    on(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serial", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serial", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::technology", callback: (...args: any[]) => void): number
    on(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::technology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::technology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::technology", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: (...args: any[]) => void): number
    on(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::temperature", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::temperature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-empty", ...args: any[]): void
    connect(sigName: "notify::time-to-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-to-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-to-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-to-full", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::update-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::update-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::update-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::update-time", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::voltage", callback: (...args: any[]) => void): number
    on(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::voltage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::voltage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::voltage", ...args: any[]): void
    connect(sigName: "notify::warning-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::warning-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::warning-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::warning-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getState(): DeviceState
    /**
     * Gets the item time.
     */
    getTime(): number
    /**
     * Gets the item value.
     */
    getValue(): number
    /**
     * Converts the history item to a string representation.
     * @param text 
     */
    setFromString(text: string): boolean
    /**
     * Sets the item state.
     * @param state the new value
     */
    setState(state: DeviceState): void
    /**
     * Sets the item time.
     * @param time the new value
     */
    setTime(time: number): void
    /**
     * Sets the item time to the present value.
     */
    setTimeToPresent(): void
    /**
     * Sets the item value.
     * @param value the new value
     */
    setValue(value: number): void
    /**
     * Converts the history item to a string representation.
     */
    toString(): string

    // Class property signals of UPowerGlib-1.0.UPowerGlib.HistoryItem

    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::time", callback: (...args: any[]) => void): number
    on(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getAccuracy(): number
    /**
     * Gets the item value.
     */
    getValue(): number
    /**
     * Sets the item accuracy.
     * @param accuracy 
     */
    setAccuracy(accuracy: number): void
    /**
     * Sets the item value.
     * @param value 
     */
    setValue(value: number): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.StatsItem

    connect(sigName: "notify::accuracy", callback: (...args: any[]) => void): number
    on(sigName: "notify::accuracy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accuracy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    isUserspace?: boolean | null
    old?: number | null
    value?: number | null
}

interface WakeupItem {

    // Own properties of UPowerGlib-1.0.UPowerGlib.WakeupItem

    cmdline: string
    details: string
    id: number
    isUserspace: boolean
    old: number
    value: number

    // Own fields of UPowerGlib-1.0.UPowerGlib.WakeupItem

    parent: GObject.Object
    priv: WakeupItemPrivate

    // Owm methods of UPowerGlib-1.0.UPowerGlib.WakeupItem

    /**
     * Gets the item cmdline.
     */
    getCmdline(): string
    /**
     * Gets the item details.
     */
    getDetails(): string
    /**
     * Gets the item id.
     */
    getId(): number
    /**
     * Gets if the item is userspace.
     */
    getIsUserspace(): boolean
    /**
     * Gets the item old.
     */
    getOld(): number
    /**
     * Gets the item value.
     */
    getValue(): number
    /**
     * Sets the item cmdline.
     * @param cmdline the new value
     */
    setCmdline(cmdline: string): void
    /**
     * Sets the item details.
     * @param details the new value
     */
    setDetails(details: string): void
    /**
     * Sets the item id.
     * @param id the new value
     */
    setId(id: number): void
    /**
     * Sets if the item is userspace.
     * @param isUserspace the new value
     */
    setIsUserspace(isUserspace: boolean): void
    /**
     * Sets the item old.
     * @param old the new value
     */
    setOld(old: number): void
    /**
     * Sets the item value.
     * @param value the new value
     */
    setValue(value: number): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupItem

    connect(sigName: "notify::cmdline", callback: (...args: any[]) => void): number
    on(sigName: "notify::cmdline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cmdline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cmdline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cmdline", ...args: any[]): void
    connect(sigName: "notify::details", callback: (...args: any[]) => void): number
    on(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-userspace", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-userspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-userspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-userspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-userspace", ...args: any[]): void
    connect(sigName: "notify::old", callback: (...args: any[]) => void): number
    on(sigName: "notify::old", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::old", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::old", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::old", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): void
}

/**
 * Signal callback interface for `total-changed`
 */
interface Wakeups_TotalChangedSignalCallback {
    (object: number): void
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
    getDataSync(cancellable: Gio.Cancellable | null): WakeupItem[]
    /**
     * Returns if the daemon supports getting the wakeup data.
     */
    getHasCapability(): boolean
    /**
     * Gets properties from the daemon about wakeup data.
     * @param cancellable a #GCancellable or %NULL
     */
    getPropertiesSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets the the total number of wakeups per second from the daemon.
     * @param cancellable a #GCancellable or %NULL
     */
    getTotalSync(cancellable: Gio.Cancellable | null): number

    // Own signals of UPowerGlib-1.0.UPowerGlib.Wakeups

    connect(sigName: "data-changed", callback: Wakeups_DataChangedSignalCallback): number
    on(sigName: "data-changed", callback: Wakeups_DataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-changed", callback: Wakeups_DataChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-changed", callback: Wakeups_DataChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-changed", ...args: any[]): void
    connect(sigName: "total-changed", callback: Wakeups_TotalChangedSignalCallback): number
    on(sigName: "total-changed", callback: Wakeups_TotalChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "total-changed", callback: Wakeups_TotalChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "total-changed", callback: Wakeups_TotalChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "total-changed", ...args: any[]): void

    // Class property signals of UPowerGlib-1.0.UPowerGlib.Wakeups

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::has-capability", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-capability", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static newFinish(res: Gio.AsyncResult): WakeupsGlueProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with up_wakeups_glue_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to up_wakeups_glue_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): WakeupsGlueProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like up_wakeups_glue_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See up_wakeups_glue_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): WakeupsGlueProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): WakeupsGlueProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string | null, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Like up_wakeups_glue_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
     * You can then call up_wakeups_glue_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See up_wakeups_glue_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface WakeupsGlueSkeleton_ConstructProps extends Gio.DBusInterface_ConstructProps, WakeupsGlue_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface WakeupsGlueSkeleton extends Gio.DBusInterface, WakeupsGlue {

    // Class property signals of UPowerGlib-1.0.UPowerGlib.WakeupsGlueSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::has-capability", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-capability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-capability", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-capability", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-capability", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentClass: GObject.ObjectClass
    deviceAdded: (client: Client, device: Device) => void
    deviceRemoved: (client: Client, objectPath: string) => void
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
    parentIface: GObject.TypeInterface
    handleEnumerateDevices: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handleGetCriticalAction: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handleGetDisplayDevice: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    getDaemonVersion: (object: ClientGlue) => string
    getLidIsClosed: (object: ClientGlue) => boolean
    getLidIsPresent: (object: ClientGlue) => boolean
    getOnBattery: (object: ClientGlue) => boolean
    deviceAdded: (object: ClientGlue, argDevice: string) => void
    deviceRemoved: (object: ClientGlue, argDevice: string) => void
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentClass: GObject.ObjectClass
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
    parentIface: GObject.TypeInterface
    handleGetHistory: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string, argTimespan: number, argResolution: number) => boolean
    handleGetStatistics: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, argType: string) => boolean
    handleRefresh: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean
    getCapacity: (object: DeviceGlue) => number
    getEnergy: (object: DeviceGlue) => number
    getEnergyEmpty: (object: DeviceGlue) => number
    getEnergyFull: (object: DeviceGlue) => number
    getEnergyFullDesign: (object: DeviceGlue) => number
    getEnergyRate: (object: DeviceGlue) => number
    getHasHistory: (object: DeviceGlue) => boolean
    getHasStatistics: (object: DeviceGlue) => boolean
    getIconName: (object: DeviceGlue) => string
    getIsPresent: (object: DeviceGlue) => boolean
    getIsRechargeable: (object: DeviceGlue) => boolean
    getLuminosity: (object: DeviceGlue) => number
    getModel: (object: DeviceGlue) => string
    getNativePath: (object: DeviceGlue) => string
    getOnline: (object: DeviceGlue) => boolean
    getPercentage: (object: DeviceGlue) => number
    getPowerSupply: (object: DeviceGlue) => boolean
    getSerial: (object: DeviceGlue) => string
    getState: (object: DeviceGlue) => number
    getTechnology: (object: DeviceGlue) => number
    getTemperature: (object: DeviceGlue) => number
    getTimeToEmpty: (object: DeviceGlue) => number
    getTimeToFull: (object: DeviceGlue) => number
    getType: (object: DeviceGlue) => number
    getUpdateTime: (object: DeviceGlue) => number
    getVendor: (object: DeviceGlue) => string
    getVoltage: (object: DeviceGlue) => number
    getWarningLevel: (object: DeviceGlue) => number
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
    dataChanged: (wakeups: Wakeups) => void
    totalChanged: (wakeups: Wakeups, value: number) => void
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
    parentIface: GObject.TypeInterface
    handleGetData: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handleGetTotal: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    getHasCapability: (object: WakeupsGlue) => boolean
    dataChanged: (object: WakeupsGlue) => void
    totalChanged: (object: WakeupsGlue, argValue: number) => void
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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