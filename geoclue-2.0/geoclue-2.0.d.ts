/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './geoclue-2.0-ambient.d.ts';
import './geoclue-2.0-import.d.ts';
/**
 * Geoclue-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Geoclue {
    enum AccuracyLevel {
        NONE,
        COUNTRY,
        CITY,
        NEIGHBORHOOD,
        STREET,
        EXACT,
    }
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function client_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function client_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function location_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function location_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    enum ClientProxyCreateFlags {
        NONE,
        AUTO_DELETE,
    }
    module ClientProxy {
        // Constructor properties interface
    }

    /**
     * The #GClueClientProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ClientProxy extends Gio.DBusProxy {
        // Constructors of Geoclue-2.0.ClientProxy

        static new_finish(res: Gio.AsyncResult): ClientProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ClientProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ClientProxy;

        // Owm methods of Geoclue-2.0.ClientProxy

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
        static create(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
        ): void;
        /**
         * Finishes an operation started with gclue_client_proxy_create().
         * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
         */
        static create_finish(result: Gio.AsyncResult): ClientProxy;
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
        static create_full(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            flags: ClientProxyCreateFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
        ): void;
        /**
         * Finishes an operation started with gclue_client_proxy_create_full().
         * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
         */
        static create_full_finish(result: Gio.AsyncResult): ClientProxy;
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
         */
        static create_full_sync(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            flags: ClientProxyCreateFlags,
            cancellable?: Gio.Cancellable | null,
        ): ClientProxy;
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
         */
        static create_sync(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            cancellable?: Gio.Cancellable | null,
        ): ClientProxy;
        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_client_proxy_new_finish() to get the result of the operation.
         *
         * See gclue_client_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
        ): void;
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ClientProxy> | null,
        ): void;
    }

    module ClientSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GClueClientSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ClientSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Geoclue-2.0.ClientSkeleton

        static ['new'](): ClientSkeleton;
    }

    module LocationProxy {
        // Constructor properties interface
    }

    /**
     * The #GClueLocationProxy structure contains only private data and should only be accessed using the provided API.
     */
    class LocationProxy extends Gio.DBusProxy {
        // Constructors of Geoclue-2.0.LocationProxy

        static new_finish(res: Gio.AsyncResult): LocationProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): LocationProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): LocationProxy;

        // Owm methods of Geoclue-2.0.LocationProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_location_proxy_new_finish() to get the result of the operation.
         *
         * See gclue_location_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<LocationProxy> | null,
        ): void;
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<LocationProxy> | null,
        ): void;
    }

    module LocationSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GClueLocationSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class LocationSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Geoclue-2.0.LocationSkeleton

        static ['new'](): LocationSkeleton;
    }

    module ManagerProxy {
        // Constructor properties interface
    }

    /**
     * The #GClueManagerProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerProxy extends Gio.DBusProxy {
        // Constructors of Geoclue-2.0.ManagerProxy

        static new_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;

        // Owm methods of Geoclue-2.0.ManagerProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_manager_proxy_new_finish() to get the result of the operation.
         *
         * See gclue_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
    }

    module ManagerSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GClueManagerSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Geoclue-2.0.ManagerSkeleton

        static ['new'](): ManagerSkeleton;
    }

    module Simple {
        // Constructor properties interface
    }

    class Simple extends GObject.Object {
        // Own properties of Geoclue-2.0.Simple

        /**
         * The requested maximum accuracy level.
         */
        accuracy_level: AccuracyLevel;
        /**
         * The requested maximum accuracy level.
         */
        accuracyLevel: AccuracyLevel;
        /**
         * The client proxy. This is %NULL if `simple` is not using a client proxy
         * (i-e when inside the Flatpak sandbox).
         */
        readonly client: ClientProxy;
        /**
         * The Desktop ID of the application.
         */
        desktop_id: string;
        /**
         * The Desktop ID of the application.
         */
        desktopId: string;
        /**
         * The current distance threshold in meters. This value is used by the
         * service when it gets new location info. If the distance moved is
         * below the threshold, it won't emit the LocationUpdated signal.
         *
         * When set to 0 (default), it always emits the signal.
         */
        distance_threshold: number;
        /**
         * The current distance threshold in meters. This value is used by the
         * service when it gets new location info. If the distance moved is
         * below the threshold, it won't emit the LocationUpdated signal.
         *
         * When set to 0 (default), it always emits the signal.
         */
        distanceThreshold: number;
        /**
         * The current location.
         */
        readonly location: LocationProxy;
        /**
         * The current time threshold in seconds. This value is used by the
         * service when it gets new location info. If the time passed is
         * below the threshold, it won't emit the LocationUpdated signal.
         *
         * When set to 0 (default), it always emits the signal.
         */
        time_threshold: number;
        /**
         * The current time threshold in seconds. This value is used by the
         * service when it gets new location info. If the time passed is
         * below the threshold, it won't emit the LocationUpdated signal.
         *
         * When set to 0 (default), it always emits the signal.
         */
        timeThreshold: number;

        // Constructors of Geoclue-2.0.Simple

        static new_finish(result: Gio.AsyncResult): Simple;

        static new_sync(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            cancellable?: Gio.Cancellable | null,
        ): Simple;

        static new_with_thresholds_finish(result: Gio.AsyncResult): Simple;

        static new_with_thresholds_sync(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            time_threshold: number,
            distance_threshold: number,
            cancellable?: Gio.Cancellable | null,
        ): Simple;

        // Owm methods of Geoclue-2.0.Simple

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
        static ['new'](
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Simple> | null,
        ): void;
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
        static new_with_thresholds(
            desktop_id: string,
            accuracy_level: AccuracyLevel,
            time_threshold: number,
            distance_threshold: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Simple> | null,
        ): void;

        // Owm methods of Geoclue-2.0.Simple

        /**
         * Gets the client proxy, or %NULL if `simple` is not using a client proxy (i-e
         * when inside the Flatpak sandbox).
         * @returns The client object.
         */
        get_client(): ClientProxy;
        /**
         * Gets the current location.
         * @returns The last known location as #GClueLocation.
         */
        get_location(): Location;
    }

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
     */
    class ClientIface {}

    /**
     * Class structure for #GClueClientProxy.
     */
    class ClientProxyClass {}

    class ClientProxyPrivate {}

    /**
     * Class structure for #GClueClientSkeleton.
     */
    class ClientSkeletonClass {}

    class ClientSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
     */
    class LocationIface {}

    /**
     * Class structure for #GClueLocationProxy.
     */
    class LocationProxyClass {}

    class LocationProxyPrivate {}

    /**
     * Class structure for #GClueLocationSkeleton.
     */
    class LocationSkeletonClass {}

    class LocationSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
     */
    class ManagerIface {}

    /**
     * Class structure for #GClueManagerProxy.
     */
    class ManagerProxyClass {}

    class ManagerProxyPrivate {}

    /**
     * Class structure for #GClueManagerSkeleton.
     */
    class ManagerSkeletonClass {}

    class ManagerSkeletonPrivate {}

    class SimpleClass {}

    class SimplePrivate {}

    interface Client {
        // Own properties of Geoclue-2.0.Client

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        desktop_id: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        desktopId: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        distance_threshold: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        distanceThreshold: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        location: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        requested_accuracy_level: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        requestedAccuracyLevel: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        time_threshold: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        timeThreshold: number;

        // Owm methods of Geoclue-2.0.Client

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_client_call_start_finish() to get the result of the operation.
         *
         * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_start(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with gclue_client_call_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_start().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See gclue_client_call_start() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_start_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_client_call_stop_finish() to get the result of the operation.
         *
         * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_stop(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with gclue_client_call_stop().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_stop().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See gclue_client_call_stop() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_stop_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
         * @param arg_old Argument to pass with the signal.
         * @param arg_new Argument to pass with the signal.
         */
        emit_location_updated(arg_old: string, arg_new: string): void;

        // Own virtual methods of Geoclue-2.0.Client

        vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_location_updated(arg_old: string, arg_new: string): void;
    }

    interface Location {
        // Own properties of Geoclue-2.0.Location

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accuracy: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        altitude: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        description: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        heading: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        latitude: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        longitude: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        speed: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timestamp: GLib.Variant;
    }

    interface Manager {
        // Own properties of Geoclue-2.0.Manager

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        available_accuracy_level: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        availableAccuracyLevel: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        in_use: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        inUse: boolean;

        // Owm methods of Geoclue-2.0.Manager

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
        call_add_agent(
            arg_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with gclue_manager_call_add_agent().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_add_agent().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_agent_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See gclue_manager_call_add_agent() for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_agent_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
         *
         * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with gclue_manager_call_create_client().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_create_client().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_client_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See gclue_manager_call_create_client() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_client_sync(cancellable?: Gio.Cancellable | null): boolean;
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
        call_delete_client(
            arg_client: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with gclue_manager_call_delete_client().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_delete_client().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_client_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See gclue_manager_call_delete_client() for the asynchronous version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_client_sync(arg_client: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
         *
         * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_client(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with gclue_manager_call_get_client().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_get_client().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_client_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See gclue_manager_call_get_client() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_client_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_agent(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param client Parameter to return.
         */
        complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete_client(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param client Parameter to return.
         */
        complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;

        // Own virtual methods of Geoclue-2.0.Manager

        vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
        vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;
        vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Geoclue;
// END
