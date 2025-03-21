/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Deviced {
    /**
     * Deviced-1.0
     */

    export namespace DeviceKind {
        export const $gtype: GObject.GType<DeviceKind>;
    }

    enum DeviceKind {
        COMPUTER,
        TABLET,
        PHONE,
        MICRO_CONTROLLER,
    }
    /**
     * libdeviced major version component (e.g. 1 if %DEVD_VERSION is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * libdeviced micro version component (e.g. 3 if %DEVD_VERSION is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * libdeviced minor version component (e.g. 2 if %DEVD_VERSION is 1.2.3)
     */
    const MINOR_VERSION: number;
    const PROCESS_SERVICE_NAME: string;
    const TRANSFER_SERVICE_NAME: string;
    /**
     * libdeviced version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    namespace AppInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            commit_id: string;
            commitId: string;
            id: string;
            installed_size: number;
            installedSize: number;
            name: string;
            provider: string;
        }
    }

    class AppInfo extends GObject.Object {
        static $gtype: GObject.GType<AppInfo>;

        // Properties

        get commit_id(): string;
        set commit_id(val: string);
        get commitId(): string;
        set commitId(val: string);
        get id(): string;
        set id(val: string);
        get installed_size(): number;
        set installed_size(val: number);
        get installedSize(): number;
        set installedSize(val: number);
        get name(): string;
        set name(val: string);
        get provider(): string;
        set provider(val: string);

        // Constructors

        constructor(properties?: Partial<AppInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace Browser {
        // Signal callback interfaces

        interface DeviceAdded {
            (device: Device): void;
        }

        interface DeviceRemoved {
            (device: Device): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            certificate: Gio.TlsCertificate;
            enable_ipv4: boolean;
            enableIpv4: boolean;
            enable_ipv6: boolean;
            enableIpv6: boolean;
        }
    }

    class Browser extends GObject.Object {
        static $gtype: GObject.GType<Browser>;

        // Properties

        /**
         * The tls certificate to use when communicating with peers.
         */
        get certificate(): Gio.TlsCertificate;
        set certificate(val: Gio.TlsCertificate);
        get enable_ipv4(): boolean;
        set enable_ipv4(val: boolean);
        get enableIpv4(): boolean;
        set enableIpv4(val: boolean);
        get enable_ipv6(): boolean;
        set enable_ipv6(val: boolean);
        get enableIpv6(): boolean;
        set enableIpv6(val: boolean);

        // Constructors

        constructor(properties?: Partial<Browser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Browser;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
        connect_after(signal: 'device-added', callback: (_source: this, device: Device) => void): number;
        emit(signal: 'device-added', device: Device): void;
        connect(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
        connect_after(signal: 'device-removed', callback: (_source: this, device: Device) => void): number;
        emit(signal: 'device-removed', device: Device): void;

        // Virtual methods

        vfunc_device_added(device: Device): void;
        vfunc_device_removed(device: Device): void;

        // Methods

        /**
         * Gets the #DevdBrowser:certificate property. This is used as the
         * client TLS certificate when connecting to peers.
         *
         * If unset, a certificate will be reloaded or generated when
         * devd_browser_load_async() is called.
         * @returns a #GTlsCertificate or %NULL
         */
        get_certificate(): Gio.TlsCertificate | null;
        /**
         * Gets a SHA256 hash for the #DevdBrowser:certificate property.
         * @returns the hash or %NULL
         */
        get_certificate_hash(): string | null;
        /**
         * Gets a #GPtrArray of #DevdDevice that have been discovered.
         * @returns a #GPtrArray   of #DevdDevice.
         */
        get_devices(): Device[];
        get_enable_ipv4(): boolean;
        get_enable_ipv6(): boolean;
        /**
         * Asynchronously loads data needed by the browser and then scans the
         * local network segments for Deviced nodes. The #DevdBrowser::device-added
         * and #DevdBrowser::device-removed signals will be emitted in reaction to
         * network changes.
         *
         * Call devd_browser_load_finish() to get the result of this operation.
         *
         * If you want to control the #GTlsCertificate to use, then call
         * devd_browser_set_certificate() before calling this function.
         * @param cancellable a #GCancellable, or %NULL
         */
        load_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously loads data needed by the browser and then scans the
         * local network segments for Deviced nodes. The #DevdBrowser::device-added
         * and #DevdBrowser::device-removed signals will be emitted in reaction to
         * network changes.
         *
         * Call devd_browser_load_finish() to get the result of this operation.
         *
         * If you want to control the #GTlsCertificate to use, then call
         * devd_browser_set_certificate() before calling this function.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback to execute upon completion   of the asynchronous task.
         */
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously loads data needed by the browser and then scans the
         * local network segments for Deviced nodes. The #DevdBrowser::device-added
         * and #DevdBrowser::device-removed signals will be emitted in reaction to
         * network changes.
         *
         * Call devd_browser_load_finish() to get the result of this operation.
         *
         * If you want to control the #GTlsCertificate to use, then call
         * devd_browser_set_certificate() before calling this function.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback to execute upon completion   of the asynchronous task.
         */
        load_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Completes an asynchronous load of the browser. This includes loading the
         * TLS certificate (or generating one) and then scanning the local network
         * segments for mDNS (Avahi) peers advertising Deviced nodes.
         * @param result a #GAsyncResult
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the #GTlsCertificate to use for client communication.
         *
         * To ensure this is being used on all new connnections, you should set this
         * property before calling devd_browser_load_async().
         * @param certificate a #GTlsCertificate
         */
        set_certificate(certificate: Gio.TlsCertificate): void;
        set_enable_ipv4(enable_ipv4: boolean): void;
        set_enable_ipv6(enable_ipv6: boolean): void;
    }

    namespace Client {
        // Signal callback interfaces

        interface Notification {
            (method: string, params: GLib.Variant): void;
        }

        interface ServiceAdded {
            (service: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arch: string;
            kernel: string;
            name: string;
            system: string;
            timeout: number;
            triplet: string;
        }
    }

    abstract class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        get arch(): string;
        get kernel(): string;
        get name(): string;
        get system(): string;
        get timeout(): number;
        set timeout(val: number);
        get triplet(): string;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'notification',
            callback: (_source: this, method: string, params: GLib.Variant) => void,
        ): number;
        connect_after(
            signal: 'notification',
            callback: (_source: this, method: string, params: GLib.Variant) => void,
        ): number;
        emit(signal: 'notification', method: string, params: GLib.Variant): void;
        connect(signal: 'service-added', callback: (_source: this, service: string) => void): number;
        connect_after(signal: 'service-added', callback: (_source: this, service: string) => void): number;
        emit(signal: 'service-added', service: string): void;

        // Virtual methods

        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all #DevdClient implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        vfunc_call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of the RPC call.
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling devd_client_connect_finish().
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback, or %NULL
         */
        vfunc_connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes an asynchronous connection to the device, initiated with
         * devd_client_connect_async().
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_connect_finish(result: Gio.AsyncResult): boolean;
        vfunc_disconnect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_disconnect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets the architecture of the device, such as "x86_64". Generally,
         * this is the machine value from uname().
         */
        vfunc_get_arch(): string;
        /**
         * Gets the kernel of the device, such as "linux". This is the kernel
         * component of the familiar "target triplet".
         */
        vfunc_get_kernel(): string;
        /**
         * Gets the name of the peer that this client is connected to.
         *
         * This value is discovered when initializing a connection with the peer.
         */
        vfunc_get_name(): string | null;
        /**
         * Gets the system of the device, such as "gnu". This is the system
         * component of the familiar "target triplet".
         */
        vfunc_get_system(): string;
        /**
         * Gets the #DevdTriplet object holding information about the architecture triplet
         */
        vfunc_get_triplet(): Triplet;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_apps_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        vfunc_list_apps_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to devd_client_list_apps_async().
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_list_apps_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as g_file_enumerate_children().
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute up on completion
         */
        vfunc_list_files_async(
            path: string,
            attributes: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to list files on the device.
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_list_files_finish(result: Gio.AsyncResult): Gio.FileInfo[];
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_runtimes_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        vfunc_list_runtimes_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to devd_client_list_runtimes_async().
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_list_runtimes_finish(result: Gio.AsyncResult): AppInfo[];
        vfunc_notification(method: string, params: GLib.Variant): void;
        /**
         * Asynchronously runs an application on the connected #DevdClient.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_run_app_finish() to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        vfunc_run_app_async(
            provider: string,
            app_id: string,
            pty?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to devd_client_run_app_async().
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_run_app_finish(result: Gio.AsyncResult): string;
        vfunc_service_added(service: string): void;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is %NULL.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or %NULL
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        vfunc_syncfs_async(
            devices?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to sync file-system changes to
         * their underlying storage devices.
         * @param result a #GAsyncResult provided to callback
         */
        vfunc_syncfs_finish(result: Gio.AsyncResult): boolean;

        // Methods

        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all #DevdClient implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<GLib.Variant | null>;
        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all #DevdClient implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        call_async(
            method: string,
            params: GLib.Variant | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all #DevdClient implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<GLib.Variant | null> | void;
        /**
         * Gets the result of the RPC call.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.   @reply is set to the reply from the peer, of provided.
         */
        call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling devd_client_connect_finish().
         * @param cancellable a #GCancellable or %NULL
         */
        connect_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling devd_client_connect_finish().
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback, or %NULL
         */
        connect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling devd_client_connect_finish().
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback, or %NULL
         */
        connect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Completes an asynchronous connection to the device, initiated with
         * devd_client_connect_async().
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        connect_finish(result: Gio.AsyncResult): boolean;
        disconnect_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        disconnect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        disconnect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        disconnect_finish(result: Gio.AsyncResult): boolean;
        emit_notification(method: string, params: GLib.Variant): void;
        emit_service_added(service: string): void;
        /**
         * Gets the architecture of the device, such as "x86_64". Generally,
         * this is the machine value from uname().
         * @returns a string representing the architecture.
         */
        get_arch(): string;
        /**
         * Gets the kernel of the device, such as "linux". This is the kernel
         * component of the familiar "target triplet".
         * @returns a string representing the kernel.
         */
        get_kernel(): string;
        /**
         * Gets the name of the peer that this client is connected to.
         *
         * This value is discovered when initializing a connection with the peer.
         * @returns a newly allocated string or %NULL
         */
        get_name(): string | null;
        /**
         * Gets the names of services currently supported by the client.
         * @returns a #GStrv of service names
         */
        get_services(): string[];
        /**
         * Gets the system of the device, such as "gnu". This is the system
         * component of the familiar "target triplet".
         * @returns a string representing the system.
         */
        get_system(): string;
        get_timeout(): number;
        /**
         * Gets the #DevdTriplet object holding information about the architecture triplet
         * @returns a #DevdTriplet representing the architecture triplet.
         */
        get_triplet(): Triplet;
        has_service(name: string): boolean;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_apps_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         */
        list_apps_async(cancellable?: Gio.Cancellable | null): Promise<AppInfo[]>;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_apps_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        list_apps_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_apps_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        list_apps_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<AppInfo[]> | void;
        /**
         * Completes an asynchronous request to devd_client_list_apps_async().
         * @param result a #GAsyncResult provided to callback
         * @returns An array   of #DevdClientAppInfo if successful; otherwise %NULL and @error is set.
         */
        list_apps_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as g_file_enumerate_children().
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a #GCancellable, or %NULL
         */
        list_files_async(
            path: string,
            attributes: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<Gio.FileInfo[]>;
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as g_file_enumerate_children().
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute up on completion
         */
        list_files_async(
            path: string,
            attributes: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as g_file_enumerate_children().
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute up on completion
         */
        list_files_async(
            path: string,
            attributes: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Gio.FileInfo[]> | void;
        /**
         * Completes an asynchronous request to list files on the device.
         * @param result a #GAsyncResult provided to callback
         * @returns a #GPtrArray of   #GFileInfo retrieved from the device.
         */
        list_files_finish(result: Gio.AsyncResult): Gio.FileInfo[];
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_runtimes_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         */
        list_runtimes_async(cancellable?: Gio.Cancellable | null): Promise<AppInfo[]>;
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_runtimes_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        list_runtimes_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the #DevdClient is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_list_runtimes_finish() to obtain the result.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        list_runtimes_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<AppInfo[]> | void;
        /**
         * Completes an asynchronous request to devd_client_list_runtimes_async().
         * @param result a #GAsyncResult provided to callback
         * @returns An array   of #DevdClientAppInfo if successful; otherwise %NULL and @error is set.
         */
        list_runtimes_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * Asynchronously runs an application on the connected #DevdClient.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_run_app_finish() to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a #GCancellable or %NULL
         */
        run_app_async(
            provider: string,
            app_id: string,
            pty?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<string>;
        /**
         * Asynchronously runs an application on the connected #DevdClient.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_run_app_finish() to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        run_app_async(
            provider: string,
            app_id: string,
            pty: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously runs an application on the connected #DevdClient.
         *
         * To complete the asynchronous request, `callback` must call
         * devd_client_run_app_finish() to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        run_app_async(
            provider: string,
            app_id: string,
            pty?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string> | void;
        /**
         * Completes an asynchronous request to devd_client_run_app_async().
         * @param result a #GAsyncResult provided to callback
         * @returns the identifier for the process, or %NULL and @error is set.
         */
        run_app_finish(result: Gio.AsyncResult): string;
        set_timeout(timeout: number): void;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is %NULL.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or %NULL
         * @param cancellable a #GCancellable, or %NULL
         */
        syncfs_async(devices?: string | null, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is %NULL.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or %NULL
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        syncfs_async(
            devices: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is %NULL.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or %NULL
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        syncfs_async(
            devices?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Completes an asynchronous request to sync file-system changes to
         * their underlying storage devices.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        syncfs_finish(result: Gio.AsyncResult): boolean;
    }

    namespace Device {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon_name: string;
            iconName: string;
            id: string;
            kind: DeviceKind;
            machine_id: string;
            machineId: string;
            name: string;
        }
    }

    abstract class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get id(): string;
        get kind(): DeviceKind;
        set kind(val: DeviceKind);
        get machine_id(): string;
        set machine_id(val: string);
        get machineId(): string;
        set machineId(val: string);
        get name(): string;
        set name(val: string);

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Creates a new #DevdClient that can be used to connect to the device
         * in question.
         *
         * Not all devices are guaranteed to support multiple connections. For
         * example, a USB device connection over serial may require exclusive
         * access to the serial port and therefore, fail to connect if you try
         * to use multiple client simultaneously.
         *
         * See devd_client_connect_async() to establish a connection.
         */
        vfunc_create_client(): Client;

        // Methods

        /**
         * Creates a new #DevdClient that can be used to connect to the device
         * in question.
         *
         * Not all devices are guaranteed to support multiple connections. For
         * example, a USB device connection over serial may require exclusive
         * access to the serial port and therefore, fail to connect if you try
         * to use multiple client simultaneously.
         *
         * See devd_client_connect_async() to establish a connection.
         * @returns a newly created #DevdClient
         */
        create_client(): Client;
        /**
         * Gets the #DevdDevice:icon-name property.
         * @returns the icon-name, or %NULL
         */
        get_icon_name(): string | null;
        /**
         * Gets the identifier for the device.
         * @returns a string identifying the device
         */
        get_id(): string;
        get_kind(): DeviceKind;
        /**
         * Gets the machine-id property, if specified
         * @returns a machine-id, or %NULL
         */
        get_machine_id(): string | null;
        /**
         * Gets the "name" property of the device, if there is one.
         * @returns the device name
         */
        get_name(): string;
        /**
         * This set the icon-name for the local #DevdDevice instance. It does not
         * change the icon on the remove device. To interact with the remove device
         * use devd_device_create_client().
         * @param icon_name the icon name for the device
         */
        set_icon_name(icon_name: string): void;
        set_kind(kind: DeviceKind | null): void;
        /**
         * Sets the #DevdDevice:machine-id for the local object instance.
         * @param machine_id the identifier of the machine, if known
         */
        set_machine_id(machine_id: string): void;
        /**
         * Sets the name of the device.
         *
         * This only changes the local representation of the device name. It does
         * not change the name on the remove device. To interact with the remote
         * device, use devd_device_create_client() to create a #DevdClient.
         * @param name the name for the device
         */
        set_name(name: string): void;
    }

    namespace FlatpakService {
        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    class FlatpakService extends Service {
        static $gtype: GObject.GType<FlatpakService>;

        // Constructors

        constructor(properties?: Partial<FlatpakService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): FlatpakService;
        // Conflicted with Deviced.Service.new

        static ['new'](...args: never[]): any;

        // Methods

        install_bundle_async(path: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        install_bundle_async(
            path: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        install_bundle_async(
            path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        install_bundle_finish(result: Gio.AsyncResult): boolean;
    }

    namespace NetworkClient {
        // Constructor properties interface

        interface ConstructorProps extends Client.ConstructorProps {
            address: Gio.InetSocketAddress;
            certificate: Gio.TlsCertificate;
        }
    }

    class NetworkClient extends Client {
        static $gtype: GObject.GType<NetworkClient>;

        // Properties

        /**
         * The "address" is the destination that we will attept to connect to
         * using this client, when devd_client_connect_async() is called.
         */
        get address(): Gio.InetSocketAddress;
        get certificate(): Gio.TlsCertificate;

        // Constructors

        constructor(properties?: Partial<NetworkClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](address: Gio.InetSocketAddress, certificate?: Gio.TlsCertificate | null): NetworkClient;

        // Methods

        /**
         * Gets the address that is to be used to connect to the device.
         * @returns a #GInetSocketAddress
         */
        get_address(): Gio.InetSocketAddress;
        /**
         * Gets the certificate for the network client.
         * @returns a #GTlsCertificate
         */
        get_certificate(): Gio.TlsCertificate;
    }

    namespace NetworkDevice {
        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            address: Gio.InetSocketAddress;
            certificate: Gio.TlsCertificate;
        }
    }

    class NetworkDevice extends Device {
        static $gtype: GObject.GType<NetworkDevice>;

        // Properties

        get address(): Gio.InetSocketAddress;
        get certificate(): Gio.TlsCertificate;

        // Constructors

        constructor(properties?: Partial<NetworkDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the #GInetSocketAddress that can be used to connect to the
         * device daemon.
         * @returns a #GInetSocketAddress or %NULL
         */
        get_address(): Gio.InetSocketAddress;
        /**
         * Gets the #GTlsCertificate that will be used as the client-side certificate
         * when communicating with this network device.
         * @returns a #GTlsCertificate or %NULL
         */
        get_certificate(): Gio.TlsCertificate | null;
    }

    namespace ProcessService {
        // Signal callback interfaces

        interface ProcessExited {
            (identifier: string, exit_code: number): void;
        }

        interface ProcessSignaled {
            (identifier: string, term_sig: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    class ProcessService extends Service {
        static $gtype: GObject.GType<ProcessService>;

        // Constructors

        constructor(properties?: Partial<ProcessService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): ProcessService;
        // Conflicted with Deviced.Service.new

        static ['new'](...args: never[]): any;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'process-exited',
            callback: (_source: this, identifier: string, exit_code: number) => void,
        ): number;
        connect_after(
            signal: 'process-exited',
            callback: (_source: this, identifier: string, exit_code: number) => void,
        ): number;
        emit(signal: 'process-exited', identifier: string, exit_code: number): void;
        connect(
            signal: 'process-signaled',
            callback: (_source: this, identifier: string, term_sig: number) => void,
        ): number;
        connect_after(
            signal: 'process-signaled',
            callback: (_source: this, identifier: string, term_sig: number) => void,
        ): number;
        emit(signal: 'process-signaled', identifier: string, term_sig: number): void;

        // Methods

        /**
         * Creates a new PTY on the device and proxies PTY data to `local_pty_fd`.
         *
         * You may want to use the result of this asynchronous operation to pass the
         * PTY token to other client operations. That will result in the PTY data being
         * delivered to `local_pty_fd`.
         * @param local_pty_fd a PTY slave fd to proxy PTY data to
         * @param cancellable a #GCancellable or %NULL
         */
        create_pty_async(local_pty_fd: number, cancellable?: Gio.Cancellable | null): Promise<string>;
        /**
         * Creates a new PTY on the device and proxies PTY data to `local_pty_fd`.
         *
         * You may want to use the result of this asynchronous operation to pass the
         * PTY token to other client operations. That will result in the PTY data being
         * delivered to `local_pty_fd`.
         * @param local_pty_fd a PTY slave fd to proxy PTY data to
         * @param cancellable a #GCancellable or %NULL
         * @param callback a calllback to execute upon completion
         */
        create_pty_async(
            local_pty_fd: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Creates a new PTY on the device and proxies PTY data to `local_pty_fd`.
         *
         * You may want to use the result of this asynchronous operation to pass the
         * PTY token to other client operations. That will result in the PTY data being
         * delivered to `local_pty_fd`.
         * @param local_pty_fd a PTY slave fd to proxy PTY data to
         * @param cancellable a #GCancellable or %NULL
         * @param callback a calllback to execute upon completion
         */
        create_pty_async(
            local_pty_fd: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string> | void;
        /**
         * Completes a request to create a new PTY on the remote device.
         *
         * The resulting PTY identifier is a unique string representing the PTY.
         * Data will be proxied to the `local_pty_fd` provided in
         * devd_process_service_create_pty_async(), however you may need this PTY token
         * to pass to other operations to reference the specific PTY instance.
         * @param result a #GAsyncResult provided to callback
         * @returns the pty identifier or %NULL
         */
        create_pty_finish(result: Gio.AsyncResult): string;
        /**
         * Requests that the device close a PTY device that was opened. This will
         * stop PTY data being proxied to the FD that was provided when creating the
         * PTY device.
         * @param pty_id the identifier of a previously created PTY
         * @param cancellable a #GCancellable or %NULL
         */
        destroy_pty_async(pty_id: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Requests that the device close a PTY device that was opened. This will
         * stop PTY data being proxied to the FD that was provided when creating the
         * PTY device.
         * @param pty_id the identifier of a previously created PTY
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        destroy_pty_async(
            pty_id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Requests that the device close a PTY device that was opened. This will
         * stop PTY data being proxied to the FD that was provided when creating the
         * PTY device.
         * @param pty_id the identifier of a previously created PTY
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        destroy_pty_async(
            pty_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Completes an asynchronous request to destroy a PTY device.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        destroy_pty_finish(result: Gio.AsyncResult): boolean;
        /**
         * Requests that the device terminate process identified by `identifier`.
         *
         * `identifier` should be a process that the client was previously notified of.
         *
         * As these requests are inherently racey, as signals are involved, no async
         * pair is provided for this. Calling this function only ensures an attempt
         * to force exit the program.
         * @param identifier the process identifier
         */
        force_exit(identifier: string): void;
        /**
         * Requests that the device send signal `signum` to the process known
         * by `identifier`.
         *
         * `identifier` should be a process that the client was previously notified of.
         *
         * As these requests are inherently racey, as signals are involved, no async
         * pair is provided for this. Calling this function only ensures an attempt
         * to send the signal to the program.
         * @param identifier the process identifier
         * @param signum the signal number
         */
        send_signal(identifier: string, signum: number): void;
        spawn_async(pty_id: string, argv: string, env: string, cancellable?: Gio.Cancellable | null): Promise<string>;
        spawn_async(
            pty_id: string,
            argv: string,
            env: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        spawn_async(
            pty_id: string,
            argv: string,
            env: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string> | void;
        spawn_finish(result: Gio.AsyncResult): string;
        wait_for_process_async(identifier: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        wait_for_process_async(
            identifier: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        wait_for_process_async(
            identifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        wait_for_process_finish(result: Gio.AsyncResult, exited: boolean, exit_code: number, term_sig: number): boolean;
    }

    namespace Service {
        // Signal callback interfaces

        interface Notification {
            (object: string, p0: GLib.Variant): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: Client;
        }
    }

    abstract class Service extends GObject.Object {
        static $gtype: GObject.GType<Service>;

        // Properties

        get client(): Client;

        // Constructors

        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](service_type: GObject.GType, service_name: string, client: Client): Service;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'notification', callback: (_source: this, object: string, p0: GLib.Variant) => void): number;
        connect_after(
            signal: 'notification',
            callback: (_source: this, object: string, p0: GLib.Variant) => void,
        ): number;
        emit(signal: 'notification', object: string, p0: GLib.Variant): void;

        // Virtual methods

        vfunc_notification(method: string, params: GLib.Variant): void;

        // Methods

        /**
         * This is a wrapper around getting the client and calling
         * devd_client_call_async(). It's purpose is to allow service implementations
         * to have a bit less code by just calling this.
         *
         * Call devd_service_call_finish() to get the result.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<GLib.Variant | null>;
        /**
         * This is a wrapper around getting the client and calling
         * devd_client_call_async(). It's purpose is to allow service implementations
         * to have a bit less code by just calling this.
         *
         * Call devd_service_call_finish() to get the result.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        call_async(
            method: string,
            params: GLib.Variant | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * This is a wrapper around getting the client and calling
         * devd_client_call_async(). It's purpose is to allow service implementations
         * to have a bit less code by just calling this.
         *
         * Call devd_service_call_finish() to get the result.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<GLib.Variant | null> | void;
        /**
         * Gets the result of the RPC call.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.   @reply is set to the reply from the peer, of provided.
         */
        call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Gets the client that the service was initialized with.
         * @returns a #DevdClient
         */
        get_client(): Client;
    }

    namespace TransferService {
        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    class TransferService extends Service {
        static $gtype: GObject.GType<TransferService>;

        // Constructors

        constructor(properties?: Partial<TransferService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): TransferService;
        // Conflicted with Deviced.Service.new

        static ['new'](...args: never[]): any;

        // Methods

        /**
         * Asynchronously copies the contents of `path` on the remote device to `file`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param path the path on the remote device
         * @param file a #GFile to write to
         * @param progress A progress callback or %NULL to execute when transfer progress is updated.
         * @param cancellable a #GCancellable, or %NULL
         */
        get_file_async(
            path: string,
            file: Gio.File,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Asynchronously copies the contents of `path` on the remote device to `file`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param path the path on the remote device
         * @param file a #GFile to write to
         * @param progress A progress callback or %NULL to execute when transfer progress is updated.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        get_file_async(
            path: string,
            file: Gio.File,
            progress: Gio.FileProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously copies the contents of `path` on the remote device to `file`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param path the path on the remote device
         * @param file a #GFile to write to
         * @param progress A progress callback or %NULL to execute when transfer progress is updated.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        get_file_async(
            path: string,
            file: Gio.File,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Completes an asynchronous request to download a file from the device.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        get_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously copies the contents of `file` to the remote device at `path`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param file a #GFile to copy
         * @param path the path on the remote device
         * @param progress A progress callback or %NULL to execute when transfer progress is updated.
         * @param cancellable a #GCancellable, or %NULL
         */
        put_file_async(
            file: Gio.File,
            path: string,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Asynchronously copies the contents of `file` to the remote device at `path`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param file a #GFile to copy
         * @param path the path on the remote device
         * @param progress A progress callback or %NULL to execute when transfer progress is updated.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        put_file_async(
            file: Gio.File,
            path: string,
            progress: Gio.FileProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously copies the contents of `file` to the remote device at `path`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param file a #GFile to copy
         * @param path the path on the remote device
         * @param progress A progress callback or %NULL to execute when transfer progress is updated.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a callback to execute upon completion
         */
        put_file_async(
            file: Gio.File,
            path: string,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Completes an asynchronous request to upload a file to the device.
         *
         * Clients are required to use rename() properly to ensure that the file is
         * either replaced or created if successful so you get either the previous
         * version or new version of the file.
         * @param result a #GAsyncResult provided to callback
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        put_file_finish(result: Gio.AsyncResult): boolean;
    }

    type AppInfoClass = typeof AppInfo;
    type BrowserClass = typeof Browser;
    type ClientClass = typeof Client;
    type DeviceClass = typeof Device;
    type FlatpakServiceClass = typeof FlatpakService;
    type NetworkClientClass = typeof NetworkClient;
    type NetworkDeviceClass = typeof NetworkDevice;
    type ProcessServiceClass = typeof ProcessService;
    type ServiceClass = typeof Service;
    type TransferServiceClass = typeof TransferService;
    class Triplet {
        static $gtype: GObject.GType<Triplet>;

        // Constructors

        constructor(full_name: string);
        _init(...args: any[]): void;

        static ['new'](full_name: string): Triplet;

        static new_with_quadruplet(
            arch: string,
            vendor?: string | null,
            kernel?: string | null,
            operating_system?: string | null,
        ): Triplet;

        static new_with_triplet(arch: string, kernel?: string | null, operating_system?: string | null): Triplet;

        // Methods

        /**
         * Gets the architecture name of the machine
         * @returns The architecture name of the machine
         */
        get_arch(): string;
        /**
         * Gets the full name of the machine configuration name (can be an architecture name,
         * a duet, a triplet or a quadruplet).
         * @returns The full name of the machine configuration name
         */
        get_full_name(): string;
        /**
         * Gets name of the kernel of the machine
         * @returns The name of the kernel of the machine
         */
        get_kernel(): string | null;
        /**
         * Gets name of the operating system of the machine
         * @returns The name of the operating system of the machine
         */
        get_operating_system(): string | null;
        /**
         * Gets the vendor name of the machine
         * @returns The vendor name of the machine
         */
        get_vendor(): string | null;
        /**
         * Increases the reference count of `self`
         * @returns An #DevdTriplet.
         */
        ref(): Triplet;
        /**
         * Decreases the reference count of `self`
         * Once the reference count reaches 0, the object is freed.
         */
        unref(): void;
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

export default Deviced;

// END
