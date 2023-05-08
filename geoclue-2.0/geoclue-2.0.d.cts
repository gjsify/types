
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Geoclue-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum AccuracyLevel {
    NONE,
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
export enum ClientProxyCreateFlags {
    NONE,
    AUTO_DELETE,
}
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
export function client_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
export function client_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
export function location_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
export function location_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
export function manager_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-start`
     */
    export interface HandleStartSignalCallback {
        ($obj: Client, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-stop`
     */
    export interface HandleStopSignalCallback {
        ($obj: Client, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `location-updated`
     */
    export interface LocationUpdatedSignalCallback {
        ($obj: Client, arg_old: string | null, arg_new: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Client

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        desktop_id?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        distance_threshold?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        location?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        requested_accuracy_level?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        time_threshold?: number | null
    }

}

export interface Client {

    // Own properties of Geoclue-2.0.Geoclue.Client

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    desktop_id: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    distance_threshold: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    location: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    requested_accuracy_level: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    time_threshold: number

    // Owm methods of Geoclue-2.0.Geoclue.Client

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_call_start_finish() to get the result of the operation.
     * 
     * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with gclue_client_call_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_start().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_start_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_call_start() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_start_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_call_stop_finish() to get the result of the operation.
     * 
     * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with gclue_client_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_stop().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_stop_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_call_stop() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_stop_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_start(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_stop(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
     * @param arg_old Argument to pass with the signal.
     * @param arg_new Argument to pass with the signal.
     */
    emit_location_updated(arg_old: string | null, arg_new: string | null): void

    // Own virtual methods of Geoclue-2.0.Geoclue.Client

    vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_location_updated(arg_old: string | null, arg_new: string | null): void

    // Own signals of Geoclue-2.0.Geoclue.Client

    connect(sigName: "handle-start", callback: Client.HandleStartSignalCallback): number
    connect_after(sigName: "handle-start", callback: Client.HandleStartSignalCallback): number
    emit(sigName: "handle-start", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-stop", callback: Client.HandleStopSignalCallback): number
    connect_after(sigName: "handle-stop", callback: Client.HandleStopSignalCallback): number
    emit(sigName: "handle-stop", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "location-updated", callback: Client.LocationUpdatedSignalCallback): number
    connect_after(sigName: "location-updated", callback: Client.LocationUpdatedSignalCallback): number
    emit(sigName: "location-updated", arg_old: string | null, arg_new: string | null, ...args: any[]): void

    // Class property signals of Geoclue-2.0.Geoclue.Client

    connect(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::requested-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
 * @interface 
 */
export class Client extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Geoclue-2.0.Geoclue.Client

    constructor(config?: Client.ConstructorProperties) 
    _init(config?: Client.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Location

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accuracy?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        altitude?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        description?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        heading?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        latitude?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        longitude?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        speed?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timestamp?: GLib.Variant | null
    }

}

export interface Location {

    // Own properties of Geoclue-2.0.Geoclue.Location

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    accuracy: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    altitude: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    description: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    heading: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    latitude: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    longitude: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    speed: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timestamp: GLib.Variant

    // Class property signals of Geoclue-2.0.Geoclue.Location

    connect(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::heading", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::heading", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::speed", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Location, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
 * @interface 
 */
export class Location extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Location

    static name: string
    static $gtype: GObject.GType<Location>

    // Constructors of Geoclue-2.0.Geoclue.Location

    constructor(config?: Location.ConstructorProperties) 
    _init(config?: Location.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

export module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-add-agent`
     */
    export interface HandleAddAgentSignalCallback {
        ($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_id: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-create-client`
     */
    export interface HandleCreateClientSignalCallback {
        ($obj: Manager, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-delete-client`
     */
    export interface HandleDeleteClientSignalCallback {
        ($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_client: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-get-client`
     */
    export interface HandleGetClientSignalCallback {
        ($obj: Manager, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Manager

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        available_accuracy_level?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        in_use?: boolean | null
    }

}

export interface Manager {

    // Own properties of Geoclue-2.0.Geoclue.Manager

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    available_accuracy_level: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    in_use: boolean

    // Owm methods of Geoclue-2.0.Geoclue.Manager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_add_agent_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_add_agent_sync() for the synchronous, blocking version of this method.
     * @param arg_id Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_add_agent(arg_id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with gclue_manager_call_add_agent().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_add_agent().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_add_agent_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_add_agent() for the asynchronous version of this method.
     * @param arg_id Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_add_agent_sync(arg_id: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with gclue_manager_call_create_client().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_create_client().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_create_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_create_client() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_create_client_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_delete_client_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_delete_client_sync() for the synchronous, blocking version of this method.
     * @param arg_client Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_delete_client(arg_client: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with gclue_manager_call_delete_client().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_delete_client().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_delete_client_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_delete_client() for the asynchronous version of this method.
     * @param arg_client Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_delete_client_sync(arg_client: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with gclue_manager_call_get_client().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_get_client().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_client_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_client */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_get_client() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_client_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_client */ string | null ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_add_agent(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param client Parameter to return.
     */
    complete_create_client(invocation: Gio.DBusMethodInvocation, client: string | null): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_delete_client(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param client Parameter to return.
     */
    complete_get_client(invocation: Gio.DBusMethodInvocation, client: string | null): void

    // Own virtual methods of Geoclue-2.0.Geoclue.Manager

    vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string | null): boolean
    vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string | null): boolean
    vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Geoclue-2.0.Geoclue.Manager

    connect(sigName: "handle-add-agent", callback: Manager.HandleAddAgentSignalCallback): number
    connect_after(sigName: "handle-add-agent", callback: Manager.HandleAddAgentSignalCallback): number
    emit(sigName: "handle-add-agent", invocation: Gio.DBusMethodInvocation, arg_id: string | null, ...args: any[]): void
    connect(sigName: "handle-create-client", callback: Manager.HandleCreateClientSignalCallback): number
    connect_after(sigName: "handle-create-client", callback: Manager.HandleCreateClientSignalCallback): number
    emit(sigName: "handle-create-client", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-delete-client", callback: Manager.HandleDeleteClientSignalCallback): number
    connect_after(sigName: "handle-delete-client", callback: Manager.HandleDeleteClientSignalCallback): number
    emit(sigName: "handle-delete-client", invocation: Gio.DBusMethodInvocation, arg_client: string | null, ...args: any[]): void
    connect(sigName: "handle-get-client", callback: Manager.HandleGetClientSignalCallback): number
    connect_after(sigName: "handle-get-client", callback: Manager.HandleGetClientSignalCallback): number
    emit(sigName: "handle-get-client", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of Geoclue-2.0.Geoclue.Manager

    connect(sigName: "notify::available-accuracy-level", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::in-use", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-use", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
 * @interface 
 */
export class Manager extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of Geoclue-2.0.Geoclue.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

export module ClientProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Client.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ClientProxy extends Client, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Geoclue-2.0.Geoclue.ClientProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::requested-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: ClientProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GClueClientProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ClientProxy extends Gio.DBusProxy {

    // Own properties of Geoclue-2.0.Geoclue.ClientProxy

    static name: string
    static $gtype: GObject.GType<ClientProxy>

    // Constructors of Geoclue-2.0.Geoclue.ClientProxy

    constructor(config?: ClientProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with gclue_client_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ClientProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with gclue_client_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like gclue_client_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ClientProxy

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
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ClientProxy

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
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ClientProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_proxy_new_finish() to get the result of the operation.
     * 
     * See gclue_client_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like gclue_client_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See gclue_client_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * A utility function to create a #GClueClientProxy without having to deal with
     * a #GClueManager. See also gclue_client_proxy_create_full() which improves
     * resource management.
     * 
     * This is identitcal to calling gclue_client_proxy_create_full() without any
     * flags set.
     * 
     * See #gclue_client_proxy_create_sync() for the synchronous, blocking version
     * of this function.
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static create(desktop_id: string | null, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void
    /**
     * Finishes an operation started with gclue_client_proxy_create().
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static create_finish(result: Gio.AsyncResult): ClientProxy
    /**
     * A utility function to create a #GClueClientProxy without having to deal with
     * a #GClueManager.
     * 
     * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
     * that the client will be deleted again from the geoclue service when
     * it is destroyed. This flag should be used unless you are doing explicit
     * resource management.
     * 
     * See #gclue_client_proxy_create_full_sync() for the synchronous, blocking
     * version of this function.
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param flags #GClueClientProxyCreateFlags to modify the creation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static create_full(desktop_id: string | null, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void
    /**
     * Finishes an operation started with gclue_client_proxy_create_full().
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static create_full_finish(result: Gio.AsyncResult): ClientProxy
    /**
     * The synchronous and blocking version of #gclue_client_proxy_create_full().
     * 
     * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
     * that the client will be deleted again from the geoclue service when
     * it is destroyed. This flag should be used unless you are doing explicit
     * resource management.
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param flags #GClueClientProxyCreateFlags to modify the creation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static create_full_sync(desktop_id: string | null, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null): ClientProxy
    /**
     * The synchronous and blocking version of #gclue_client_proxy_create().
     * See also gclue_client_proxy_create_full_sync() which improves resource
     * management.
     * 
     * This function is identical to calling gclue_client_proxy_create_full_sync()
     * without any flags set.
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static create_sync(desktop_id: string | null, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null): ClientProxy
}

export module ClientSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Client.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ClientSkeleton extends Client, Gio.DBusInterface {

    // Class property signals of Geoclue-2.0.Geoclue.ClientSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::requested-accuracy-level", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::requested-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: ClientSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GClueClientSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ClientSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Geoclue-2.0.Geoclue.ClientSkeleton

    static name: string
    static $gtype: GObject.GType<ClientSkeleton>

    // Constructors of Geoclue-2.0.Geoclue.ClientSkeleton

    constructor(config?: ClientSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ClientSkeleton
    _init(config?: ClientSkeleton.ConstructorProperties): void
}

export module LocationProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface LocationProxy extends Location, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Geoclue-2.0.Geoclue.LocationProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::accuracy", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::heading", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::heading", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::speed", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LocationProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GClueLocationProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class LocationProxy extends Gio.DBusProxy {

    // Own properties of Geoclue-2.0.Geoclue.LocationProxy

    static name: string
    static $gtype: GObject.GType<LocationProxy>

    // Constructors of Geoclue-2.0.Geoclue.LocationProxy

    constructor(config?: LocationProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with gclue_location_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_location_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): LocationProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with gclue_location_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_location_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like gclue_location_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_location_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): LocationProxy

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
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_location_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): LocationProxy

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
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: LocationProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_location_proxy_new_finish() to get the result of the operation.
     * 
     * See gclue_location_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LocationProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like gclue_location_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_location_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See gclue_location_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LocationProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

export module LocationSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface LocationSkeleton extends Location, Gio.DBusInterface {

    // Class property signals of Geoclue-2.0.Geoclue.LocationSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accuracy", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::altitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::heading", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::heading", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::heading", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::speed", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LocationSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GClueLocationSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class LocationSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Geoclue-2.0.Geoclue.LocationSkeleton

    static name: string
    static $gtype: GObject.GType<LocationSkeleton>

    // Constructors of Geoclue-2.0.Geoclue.LocationSkeleton

    constructor(config?: LocationSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): LocationSkeleton
    _init(config?: LocationSkeleton.ConstructorProperties): void
}

export module ManagerProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Manager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ManagerProxy extends Manager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Geoclue-2.0.Geoclue.ManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::in-use", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-use", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GClueManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Geoclue-2.0.Geoclue.ManagerProxy

    static name: string
    static $gtype: GObject.GType<ManagerProxy>

    // Constructors of Geoclue-2.0.Geoclue.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with gclue_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with gclue_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like gclue_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ManagerProxy

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
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ManagerProxy

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
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ManagerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See gclue_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Like gclue_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See gclue_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

export module ManagerSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Manager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ManagerSkeleton extends Manager, Gio.DBusInterface {

    // Class property signals of Geoclue-2.0.Geoclue.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available-accuracy-level", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::in-use", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-use", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-use", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GClueManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Geoclue-2.0.Geoclue.ManagerSkeleton

    static name: string
    static $gtype: GObject.GType<ManagerSkeleton>

    // Constructors of Geoclue-2.0.Geoclue.ManagerSkeleton

    constructor(config?: ManagerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ManagerSkeleton
    _init(config?: ManagerSkeleton.ConstructorProperties): void
}

export module Simple {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Simple

        /**
         * The requested maximum accuracy level.
         */
        accuracy_level?: AccuracyLevel | null
        /**
         * The Desktop ID of the application.
         */
        desktop_id?: string | null
        /**
         * The current distance threshold in meters. This value is used by the
         * service when it gets new location info. If the distance moved is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         */
        distance_threshold?: number | null
        /**
         * The current time threshold in seconds. This value is used by the
         * service when it gets new location info. If the time passed is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         */
        time_threshold?: number | null
    }

}

export interface Simple extends Gio.AsyncInitable {

    // Own properties of Geoclue-2.0.Geoclue.Simple

    /**
     * The requested maximum accuracy level.
     */
    readonly accuracy_level: AccuracyLevel
    /**
     * The client proxy. This is %NULL if `simple` is not using a client proxy
     * (i-e when inside the Flatpak sandbox).
     */
    readonly client: ClientProxy
    /**
     * The Desktop ID of the application.
     */
    readonly desktop_id: string | null
    /**
     * The current distance threshold in meters. This value is used by the
     * service when it gets new location info. If the distance moved is
     * below the threshold, it won't emit the LocationUpdated signal.
     * 
     * When set to 0 (default), it always emits the signal.
     */
    readonly distance_threshold: number
    /**
     * The current location.
     */
    readonly location: LocationProxy
    /**
     * The current time threshold in seconds. This value is used by the
     * service when it gets new location info. If the time passed is
     * below the threshold, it won't emit the LocationUpdated signal.
     * 
     * When set to 0 (default), it always emits the signal.
     */
    readonly time_threshold: number

    // Own fields of Geoclue-2.0.Geoclue.Simple

    parent: GObject.Object

    // Owm methods of Geoclue-2.0.Geoclue.Simple

    /**
     * Gets the client proxy, or %NULL if `simple` is not using a client proxy (i-e
     * when inside the Flatpak sandbox).
     * @returns The client object.
     */
    get_client(): ClientProxy
    /**
     * Gets the current location.
     * @returns The last known location as #GClueLocation.
     */
    get_location(): Location

    // Class property signals of Geoclue-2.0.Geoclue.Simple

    connect(sigName: "notify::accuracy-level", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy-level", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accuracy-level", ...args: any[]): void
    connect(sigName: "notify::client", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance-threshold", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-threshold", callback: (($obj: Simple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Simple extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Simple

    static name: string
    static $gtype: GObject.GType<Simple>

    // Constructors of Geoclue-2.0.Geoclue.Simple

    constructor(config?: Simple.ConstructorProperties) 
    /**
     * Finishes an operation started with #gclue_simple_new().
     * @constructor 
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          #gclue_simple_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(result: Gio.AsyncResult): Simple
    /**
     * The synchronous and blocking version of #gclue_simple_new().
     * @constructor 
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The new #GClueSimple object or %NULL if @error is set.
     */
    static new_sync(desktop_id: string | null, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null): Simple
    /**
     * Finishes an operation started with #gclue_simple_new_with_thresholds().
     * @constructor 
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          #gclue_simple_new_with_thresholds().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_with_thresholds_finish(result: Gio.AsyncResult): Simple
    /**
     * The synchronous and blocking version of #gclue_simple_new_with_thresholds().
     * @constructor 
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param time_threshold Time threshold in seconds, 0 for no limit.
     * @param distance_threshold Distance threshold in meters, 0 for no limit.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The new #GClueSimple object or %NULL if @error is set.
     */
    static new_with_thresholds_sync(desktop_id: string | null, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable: Gio.Cancellable | null): Simple
    _init(config?: Simple.ConstructorProperties): void
    /**
     * Asynchronously creates a #GClueSimple instance. Use
     * #gclue_simple_new_finish() to get the created #GClueSimple instance.
     * 
     * See #gclue_simple_new_sync() for the synchronous, blocking version
     * of this function.
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static new(desktop_id: string | null, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Simple> | null): void
    /**
     * Asynchronously creates a #GClueSimple instance. Use
     * #gclue_simple_new_with_thresholds_finish() to get the created #GClueSimple instance.
     * 
     * See #gclue_simple_new_with_thresholds_sync() for the synchronous,
     * blocking version of this function.
     * @param desktop_id The desktop file id (the basename of the desktop file).
     * @param accuracy_level The requested accuracy level as #GClueAccuracyLevel.
     * @param time_threshold Time threshold in seconds, 0 for no limit.
     * @param distance_threshold Distance threshold in meters, 0 for no limit.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static new_with_thresholds(desktop_id: string | null, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Simple> | null): void
}

export interface ClientIface {

    // Own fields of Geoclue-2.0.Geoclue.ClientIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_start: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    handle_stop: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    get_active: (object: Client) => boolean
    get_desktop_id: (object: Client) => string | null
    get_distance_threshold: (object: Client) => number
    get_location: (object: Client) => string | null
    get_requested_accuracy_level: (object: Client) => number
    get_time_threshold: (object: Client) => number
    location_updated: (object: Client, arg_old: string | null, arg_new: string | null) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
 * @record 
 */
export abstract class ClientIface {

    // Own properties of Geoclue-2.0.Geoclue.ClientIface

    static name: string
}

export interface ClientProxyClass {

    // Own fields of Geoclue-2.0.Geoclue.ClientProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GClueClientProxy.
 * @record 
 */
export abstract class ClientProxyClass {

    // Own properties of Geoclue-2.0.Geoclue.ClientProxyClass

    static name: string
}

export interface ClientProxyPrivate {
}

export class ClientProxyPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ClientProxyPrivate

    static name: string
}

export interface ClientSkeletonClass {

    // Own fields of Geoclue-2.0.Geoclue.ClientSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GClueClientSkeleton.
 * @record 
 */
export abstract class ClientSkeletonClass {

    // Own properties of Geoclue-2.0.Geoclue.ClientSkeletonClass

    static name: string
}

export interface ClientSkeletonPrivate {
}

export class ClientSkeletonPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ClientSkeletonPrivate

    static name: string
}

export interface LocationIface {

    // Own fields of Geoclue-2.0.Geoclue.LocationIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_accuracy: (object: Location) => number
    get_altitude: (object: Location) => number
    get_description: (object: Location) => string | null
    get_heading: (object: Location) => number
    get_latitude: (object: Location) => number
    get_longitude: (object: Location) => number
    get_speed: (object: Location) => number
    get_timestamp: (object: Location) => GLib.Variant | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
 * @record 
 */
export abstract class LocationIface {

    // Own properties of Geoclue-2.0.Geoclue.LocationIface

    static name: string
}

export interface LocationProxyClass {

    // Own fields of Geoclue-2.0.Geoclue.LocationProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GClueLocationProxy.
 * @record 
 */
export abstract class LocationProxyClass {

    // Own properties of Geoclue-2.0.Geoclue.LocationProxyClass

    static name: string
}

export interface LocationProxyPrivate {
}

export class LocationProxyPrivate {

    // Own properties of Geoclue-2.0.Geoclue.LocationProxyPrivate

    static name: string
}

export interface LocationSkeletonClass {

    // Own fields of Geoclue-2.0.Geoclue.LocationSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GClueLocationSkeleton.
 * @record 
 */
export abstract class LocationSkeletonClass {

    // Own properties of Geoclue-2.0.Geoclue.LocationSkeletonClass

    static name: string
}

export interface LocationSkeletonPrivate {
}

export class LocationSkeletonPrivate {

    // Own properties of Geoclue-2.0.Geoclue.LocationSkeletonPrivate

    static name: string
}

export interface ManagerIface {

    // Own fields of Geoclue-2.0.Geoclue.ManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_add_agent: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_id: string | null) => boolean
    handle_create_client: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handle_delete_client: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_client: string | null) => boolean
    handle_get_client: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    get_available_accuracy_level: (object: Manager) => number
    get_in_use: (object: Manager) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
 * @record 
 */
export abstract class ManagerIface {

    // Own properties of Geoclue-2.0.Geoclue.ManagerIface

    static name: string
}

export interface ManagerProxyClass {

    // Own fields of Geoclue-2.0.Geoclue.ManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GClueManagerProxy.
 * @record 
 */
export abstract class ManagerProxyClass {

    // Own properties of Geoclue-2.0.Geoclue.ManagerProxyClass

    static name: string
}

export interface ManagerProxyPrivate {
}

export class ManagerProxyPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ManagerProxyPrivate

    static name: string
}

export interface ManagerSkeletonClass {

    // Own fields of Geoclue-2.0.Geoclue.ManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GClueManagerSkeleton.
 * @record 
 */
export abstract class ManagerSkeletonClass {

    // Own properties of Geoclue-2.0.Geoclue.ManagerSkeletonClass

    static name: string
}

export interface ManagerSkeletonPrivate {
}

export class ManagerSkeletonPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ManagerSkeletonPrivate

    static name: string
}

export interface SimpleClass {

    // Own fields of Geoclue-2.0.Geoclue.SimpleClass

    parent_class: GObject.ObjectClass
}

export abstract class SimpleClass {

    // Own properties of Geoclue-2.0.Geoclue.SimpleClass

    static name: string
}

export interface SimplePrivate {
}

export class SimplePrivate {

    // Own properties of Geoclue-2.0.Geoclue.SimplePrivate

    static name: string
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