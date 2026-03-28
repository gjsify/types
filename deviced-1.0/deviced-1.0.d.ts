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

    /**
     * @gir-type Enum
     */
    export namespace DeviceKind {
        export const $gtype: GObject.GType<DeviceKind>;
    }

    /**
     * @gir-type Enum
     */
    enum DeviceKind {
        COMPUTER,
        TABLET,
        PHONE,
        MICRO_CONTROLLER,
    }

    /**
     * libdeviced major version component (e.g. 1 if `DEVD_VERSION` is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * libdeviced micro version component (e.g. 3 if `DEVD_VERSION` is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * libdeviced minor version component (e.g. 2 if `DEVD_VERSION` is 1.2.3)
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
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::commit-id': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::installed-size': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::provider': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AppInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AppInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AppInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AppInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AppInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AppInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Browser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "device-added" signal is emitted when a device has been discovered.
             * @signal
             * @since 3.28
             * @run-last
             */
            'device-added': (arg0: Device) => void;
            /**
             * The "device-removed" signal is emitted when a device is no longer
             * known to be available.
             * @signal
             * @since 3.28
             * @run-last
             */
            'device-removed': (arg0: Device) => void;
            'notify::certificate': (pspec: GObject.ParamSpec) => void;
            'notify::enable-ipv4': (pspec: GObject.ParamSpec) => void;
            'notify::enable-ipv6': (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Browser extends GObject.Object {
        static $gtype: GObject.GType<Browser>;

        // Properties

        /**
         * The tls certificate to use when communicating with peers.
         * @since 3.28
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Browser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Browser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Browser;

        // Signals

        /** @signal */
        connect<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Browser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Browser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Browser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param device
         * @virtual
         */
        vfunc_device_added(device: Device): void;
        /**
         * @param device
         * @virtual
         */
        vfunc_device_removed(device: Device): void;

        // Methods

        /**
         * Gets the {@link Deviced.Browser.certificate} property. This is used as the
         * client TLS certificate when connecting to peers.
         *
         * If unset, a certificate will be reloaded or generated when
         * `devd_browser_load_async()` is called.
         * @returns a {@link Gio.TlsCertificate} or `null`
         */
        get_certificate(): Gio.TlsCertificate | null;
        /**
         * Gets a SHA256 hash for the {@link Deviced.Browser.certificate} property.
         * @returns the hash or `null`
         */
        get_certificate_hash(): string | null;
        /**
         * Gets a {@link GLib.PtrArray} of {@link Deviced.Device} that have been discovered.
         * @returns a {@link GLib.PtrArray}   of {@link Deviced.Device}.
         */
        get_devices(): Device[];
        get_enable_ipv4(): boolean;
        get_enable_ipv6(): boolean;
        /**
         * Asynchronously loads data needed by the browser and then scans the
         * local network segments for Deviced nodes. The {@link Deviced.Browser.SignalSignatures.device_added | Deviced.Browser::device-added}
         * and {@link Deviced.Browser.SignalSignatures.device_removed | Deviced.Browser::device-removed} signals will be emitted in reaction to
         * network changes.
         *
         * Call `devd_browser_load_finish()` to get the result of this operation.
         *
         * If you want to control the {@link Gio.TlsCertificate} to use, then call
         * `devd_browser_set_certificate()` before calling this function.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        load_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously loads data needed by the browser and then scans the
         * local network segments for Deviced nodes. The {@link Deviced.Browser.SignalSignatures.device_added | Deviced.Browser::device-added}
         * and {@link Deviced.Browser.SignalSignatures.device_removed | Deviced.Browser::device-removed} signals will be emitted in reaction to
         * network changes.
         *
         * Call `devd_browser_load_finish()` to get the result of this operation.
         *
         * If you want to control the {@link Gio.TlsCertificate} to use, then call
         * `devd_browser_set_certificate()` before calling this function.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion   of the asynchronous task.
         */
        load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously loads data needed by the browser and then scans the
         * local network segments for Deviced nodes. The {@link Deviced.Browser.SignalSignatures.device_added | Deviced.Browser::device-added}
         * and {@link Deviced.Browser.SignalSignatures.device_removed | Deviced.Browser::device-removed} signals will be emitted in reaction to
         * network changes.
         *
         * Call `devd_browser_load_finish()` to get the result of this operation.
         *
         * If you want to control the {@link Gio.TlsCertificate} to use, then call
         * `devd_browser_set_certificate()` before calling this function.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to execute upon completion   of the asynchronous task.
         */
        load_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous load of the browser. This includes loading the
         * TLS certificate (or generating one) and then scanning the local network
         * segments for mDNS (Avahi) peers advertising Deviced nodes.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the {@link Gio.TlsCertificate} to use for client communication.
         *
         * To ensure this is being used on all new connnections, you should set this
         * property before calling `devd_browser_load_async()`.
         * @param certificate a {@link Gio.TlsCertificate}
         */
        set_certificate(certificate: Gio.TlsCertificate): void;
        /**
         * @param enable_ipv4
         */
        set_enable_ipv4(enable_ipv4: boolean): void;
        /**
         * @param enable_ipv6
         */
        set_enable_ipv6(enable_ipv6: boolean): void;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            notification: (arg0: string, arg1: GLib.Variant) => void;
            /**
             * The "service-added" signal is emitted when a new service is advertised by
             * the client. This can happen when the device has enabled a new feature
             * while you're connected.
             *
             * If integrating with third-party libraries, this can be used to advertise
             * that additional services are enabled on the connection.
             * @signal
             * @since 3.28
             * @run-last
             */
            'service-added': (arg0: string) => void;
            'notify::arch': (pspec: GObject.ParamSpec) => void;
            'notify::kernel': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::system': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::triplet': (pspec: GObject.ParamSpec) => void;
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            'notification::arch': (arg0: string, arg1: GLib.Variant) => void;
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            'notification::kernel': (arg0: string, arg1: GLib.Variant) => void;
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            'notification::name': (arg0: string, arg1: GLib.Variant) => void;
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            'notification::system': (arg0: string, arg1: GLib.Variant) => void;
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            'notification::timeout': (arg0: string, arg1: GLib.Variant) => void;
            /**
             * The "notification" signal is emitted when a client has received a
             * notification from the peer.
             *
             * Not all clients will support this, so it's specific for communicating
             * with some clients and services.
             * @signal
             * @since 3.28
             * @detailed
             * @run-last
             */
            'notification::triplet': (arg0: string, arg1: GLib.Variant) => void;
            [key: `notification::${string}`]: (arg0: string, arg1: GLib.Variant) => void;
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

    /**
     * @gir-type Class
     */
    abstract class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * @read-only
         */
        get arch(): string;
        /**
         * @read-only
         */
        get kernel(): string;
        /**
         * @read-only
         */
        get name(): string;
        /**
         * @read-only
         */
        get system(): string;
        get timeout(): number;
        set timeout(val: number);
        /**
         * @read-only
         */
        get triplet(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all {@link Deviced.Client} implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         * @virtual
         */
        vfunc_call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result of the RPC call.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling `devd_client_connect_finish()`.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}, or `null`
         * @virtual
         */
        vfunc_connect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes an asynchronous connection to the device, initiated with
         * `devd_client_connect_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_connect_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param cancellable
         * @param callback
         * @virtual
         */
        vfunc_disconnect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param result
         * @virtual
         */
        vfunc_disconnect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets the architecture of the device, such as "x86_64". Generally,
         * this is the machine value from `uname()`.
         * @virtual
         */
        vfunc_get_arch(): string;
        /**
         * Gets the kernel of the device, such as "linux". This is the kernel
         * component of the familiar "target triplet".
         * @virtual
         */
        vfunc_get_kernel(): string;
        /**
         * Gets the name of the peer that this client is connected to.
         *
         * This value is discovered when initializing a connection with the peer.
         * @virtual
         */
        vfunc_get_name(): string | null;
        /**
         * Gets the system of the device, such as "gnu". This is the system
         * component of the familiar "target triplet".
         * @virtual
         */
        vfunc_get_system(): string;
        /**
         * Gets the {@link Deviced.Triplet} object holding information about the architecture triplet
         * @virtual
         */
        vfunc_get_triplet(): Triplet;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_apps_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @virtual
         */
        vfunc_list_apps_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to `devd_client_list_apps_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_list_apps_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as `g_file_enumerate_children()`.
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute up on completion
         * @virtual
         */
        vfunc_list_files_async(
            path: string,
            attributes: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to list files on the device.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_list_files_finish(result: Gio.AsyncResult): Gio.FileInfo[];
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_runtimes_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @virtual
         */
        vfunc_list_runtimes_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to `devd_client_list_runtimes_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_list_runtimes_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * @param method
         * @param params
         * @virtual
         */
        vfunc_notification(method: string, params: GLib.Variant): void;
        /**
         * Asynchronously runs an application on the connected {@link Deviced.Client}.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_run_app_finish()` to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         * @virtual
         */
        vfunc_run_app_async(
            provider: string,
            app_id: string,
            pty?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to `devd_client_run_app_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_run_app_finish(result: Gio.AsyncResult): string;
        /**
         * @param service
         * @virtual
         */
        vfunc_service_added(service: string): void;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is `null`.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute upon completion
         * @virtual
         */
        vfunc_syncfs_async(
            devices?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to sync file-system changes to
         * their underlying storage devices.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @virtual
         */
        vfunc_syncfs_finish(result: Gio.AsyncResult): boolean;

        // Methods

        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all {@link Deviced.Client} implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Variant | null>;
        /**
         * Asynchronously calls an RPC on the device, if available.
         *
         * Not all {@link Deviced.Client} implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * Not all {@link Deviced.Client} implementations are guaranteed to support this
         * interface, and therefore may fail.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * Gets the result of the RPC call.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.   `reply` is set to the reply from the peer, of provided.
         */
        call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling `devd_client_connect_finish()`.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        connect_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling `devd_client_connect_finish()`.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}, or `null`
         */
        connect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously connects to the device for which the client was created.
         *
         * `callback` should complete the operation by calling `devd_client_connect_finish()`.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}, or `null`
         */
        connect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous connection to the device, initiated with
         * `devd_client_connect_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        connect_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param cancellable
         */
        disconnect_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable
         * @param callback
         */
        disconnect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable
         * @param callback
         */
        disconnect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        disconnect_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param method
         * @param params
         */
        emit_notification(method: string, params: GLib.Variant): void;
        /**
         * @param service
         */
        emit_service_added(service: string): void;
        /**
         * Gets the architecture of the device, such as "x86_64". Generally,
         * this is the machine value from `uname()`.
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
         * @returns a newly allocated string or `null`
         */
        get_name(): string | null;
        /**
         * Gets the names of services currently supported by the client.
         * @returns a {@link GObject.Strv} of service names
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
         * Gets the {@link Deviced.Triplet} object holding information about the architecture triplet
         * @returns a {@link Deviced.Triplet} representing the architecture triplet.
         */
        get_triplet(): Triplet;
        /**
         * @param name
         */
        has_service(name: string): boolean;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_apps_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        list_apps_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<AppInfo[]>;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_apps_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        list_apps_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously requests a list of applications that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_apps_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        list_apps_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<AppInfo[]> | void;
        /**
         * Completes an asynchronous request to `devd_client_list_apps_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns An array   of `DevdClientAppInfo` if successful; otherwise `null` and `error` is set.
         */
        list_apps_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as `g_file_enumerate_children()`.
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        list_files_async(
            path: string,
            attributes: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gio.FileInfo[]>;
        /**
         * Lists the files in a given path on the device.
         *
         * Use `attributes` to specify the file attributes to retrieve. These
         * follow the same convention as `g_file_enumerate_children()`.
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a {@link Gio.Cancellable}, or `null`
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
         * follow the same convention as `g_file_enumerate_children()`.
         * @param path the path on the device
         * @param attributes file attributes
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute up on completion
         */
        list_files_async(
            path: string,
            attributes: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.FileInfo[]> | void;
        /**
         * Completes an asynchronous request to list files on the device.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns a {@link GLib.PtrArray} of   {@link Gio.FileInfo} retrieved from the device.
         */
        list_files_finish(result: Gio.AsyncResult): Gio.FileInfo[];
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_runtimes_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        list_runtimes_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<AppInfo[]>;
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_runtimes_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        list_runtimes_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously requests a list of runtimes that are available to
         * the peer that the {@link Deviced.Client} is connected to.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_list_runtimes_finish()` to obtain the result.
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        list_runtimes_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<AppInfo[]> | void;
        /**
         * Completes an asynchronous request to `devd_client_list_runtimes_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns An array   of `DevdClientAppInfo` if successful; otherwise `null` and `error` is set.
         */
        list_runtimes_finish(result: Gio.AsyncResult): AppInfo[];
        /**
         * Asynchronously runs an application on the connected {@link Deviced.Client}.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_run_app_finish()` to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        run_app_async(
            provider: string,
            app_id: string,
            pty?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously runs an application on the connected {@link Deviced.Client}.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_run_app_finish()` to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        run_app_async(
            provider: string,
            app_id: string,
            pty: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously runs an application on the connected {@link Deviced.Client}.
         *
         * To complete the asynchronous request, `callback` must call
         * `devd_client_run_app_finish()` to obtain the result.
         * @param provider the app provider
         * @param app_id the ID of the app to run
         * @param pty a pty ID
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        run_app_async(
            provider: string,
            app_id: string,
            pty?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Completes an asynchronous request to `devd_client_run_app_async()`.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns the identifier for the process, or `null` and `error` is set.
         */
        run_app_finish(result: Gio.AsyncResult): string;
        /**
         * @param timeout
         */
        set_timeout(timeout: number): void;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is `null`.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        syncfs_async(devices?: string | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is `null`.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute upon completion
         */
        syncfs_async(
            devices: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Requests that the device sync changes to the file-system to the underlying
         * storage devices specified, or all devices if `devices` is `null`.
         *
         * Note, currently, only syncing all file-systems is supported.
         * @param devices a comma-separated list of devices, or `null`
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute upon completion
         */
        syncfs_async(
            devices?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous request to sync file-system changes to
         * their underlying storage devices.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        syncfs_finish(result: Gio.AsyncResult): boolean;
    }

    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::machine-id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    abstract class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties

        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        /**
         * @construct-only
         */
        get id(): string;
        get kind(): DeviceKind;
        set kind(val: DeviceKind);
        get machine_id(): string;
        set machine_id(val: string);
        get machineId(): string;
        set machineId(val: string);
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Creates a new {@link Deviced.Client} that can be used to connect to the device
         * in question.
         *
         * Not all devices are guaranteed to support multiple connections. For
         * example, a USB device connection over serial may require exclusive
         * access to the serial port and therefore, fail to connect if you try
         * to use multiple client simultaneously.
         *
         * See `devd_client_connect_async()` to establish a connection.
         * @virtual
         */
        vfunc_create_client(): Client;

        // Methods

        /**
         * Creates a new {@link Deviced.Client} that can be used to connect to the device
         * in question.
         *
         * Not all devices are guaranteed to support multiple connections. For
         * example, a USB device connection over serial may require exclusive
         * access to the serial port and therefore, fail to connect if you try
         * to use multiple client simultaneously.
         *
         * See `devd_client_connect_async()` to establish a connection.
         * @returns a newly created {@link Deviced.Client}
         */
        create_client(): Client;
        /**
         * Gets the {@link Deviced.Device.icon_name} property.
         * @returns the icon-name, or `null`
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
         * @returns a machine-id, or `null`
         */
        get_machine_id(): string | null;
        /**
         * Gets the "name" property of the device, if there is one.
         * @returns the device name
         */
        get_name(): string;
        /**
         * This set the icon-name for the local {@link Deviced.Device} instance. It does not
         * change the icon on the remove device. To interact with the remove device
         * use `devd_device_create_client()`.
         * @param icon_name the icon name for the device
         */
        set_icon_name(icon_name: string): void;
        /**
         * @param kind
         */
        set_kind(kind: DeviceKind | null): void;
        /**
         * Sets the {@link Deviced.Device.machine_id} for the local object instance.
         * @param machine_id the identifier of the machine, if known
         */
        set_machine_id(machine_id: string): void;
        /**
         * Sets the name of the device.
         *
         * This only changes the local representation of the device name. It does
         * not change the name on the remove device. To interact with the remote
         * device, use `devd_device_create_client()` to create a {@link Deviced.Client}.
         * @param name the name for the device
         */
        set_name(name: string): void;
    }

    namespace FlatpakService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::client': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FlatpakService extends Service {
        static $gtype: GObject.GType<FlatpakService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FlatpakService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FlatpakService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): FlatpakService;
        // Conflicted with Deviced.Service.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof FlatpakService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FlatpakService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FlatpakService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FlatpakService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FlatpakService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FlatpakService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param path
         * @param cancellable
         */
        install_bundle_async(path: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param path
         * @param cancellable
         * @param callback
         */
        install_bundle_async(
            path: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param path
         * @param cancellable
         * @param callback
         */
        install_bundle_async(
            path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        install_bundle_finish(result: Gio.AsyncResult): boolean;
    }

    namespace NetworkClient {
        // Signal signatures
        interface SignalSignatures extends Client.SignalSignatures {
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::certificate': (pspec: GObject.ParamSpec) => void;
            'notify::arch': (pspec: GObject.ParamSpec) => void;
            'notify::kernel': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::system': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::triplet': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Client.ConstructorProps {
            address: Gio.InetSocketAddress;
            certificate: Gio.TlsCertificate;
        }
    }

    /**
     * @gir-type Class
     */
    class NetworkClient extends Client {
        static $gtype: GObject.GType<NetworkClient>;

        // Properties

        /**
         * The "address" is the destination that we will attept to connect to
         * using this client, when `devd_client_connect_async()` is called.
         * @construct-only
         */
        get address(): Gio.InetSocketAddress;
        /**
         * @construct-only
         */
        get certificate(): Gio.TlsCertificate;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](address: Gio.InetSocketAddress, certificate?: Gio.TlsCertificate | null): NetworkClient;

        // Signals

        /** @signal */
        connect<K extends keyof NetworkClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NetworkClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NetworkClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the address that is to be used to connect to the device.
         * @returns a {@link Gio.InetSocketAddress}
         */
        get_address(): Gio.InetSocketAddress;
        /**
         * Gets the certificate for the network client.
         * @returns a {@link Gio.TlsCertificate}
         */
        get_certificate(): Gio.TlsCertificate;
    }

    namespace NetworkDevice {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::certificate': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::machine-id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Device.ConstructorProps {
            address: Gio.InetSocketAddress;
            certificate: Gio.TlsCertificate;
        }
    }

    /**
     * @gir-type Class
     */
    class NetworkDevice extends Device {
        static $gtype: GObject.GType<NetworkDevice>;

        // Properties

        /**
         * @construct-only
         */
        get address(): Gio.InetSocketAddress;
        /**
         * @construct-only
         */
        get certificate(): Gio.TlsCertificate;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NetworkDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NetworkDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NetworkDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link Gio.InetSocketAddress} that can be used to connect to the
         * device daemon.
         * @returns a {@link Gio.InetSocketAddress} or `null`
         */
        get_address(): Gio.InetSocketAddress;
        /**
         * Gets the {@link Gio.TlsCertificate} that will be used as the client-side certificate
         * when communicating with this network device.
         * @returns a {@link Gio.TlsCertificate} or `null`
         */
        get_certificate(): Gio.TlsCertificate | null;
    }

    namespace ProcessService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            /**
             * This signal is emitted when the peer has notified us that a process which
             * was spawned by a client to the device has exited.
             *
             * You may be notified of processes not spawned by your client, as all clients
             * are notified.
             * @signal
             * @since 3.28
             * @run-last
             */
            'process-exited': (arg0: string, arg1: number) => void;
            /**
             * This signal is emitted when the peer has notified us that a process which
             * was spawned by a client to the device has terminated by signal.
             *
             * You may be notified of processes not spawned by your client, as all clients
             * are notified.
             * @signal
             * @since 3.28
             * @run-last
             */
            'process-signaled': (arg0: string, arg1: number) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ProcessService extends Service {
        static $gtype: GObject.GType<ProcessService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProcessService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProcessService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): ProcessService;
        // Conflicted with Deviced.Service.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ProcessService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProcessService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProcessService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProcessService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProcessService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProcessService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates a new PTY on the device and proxies PTY data to `local_pty_fd`.
         *
         * You may want to use the result of this asynchronous operation to pass the
         * PTY token to other client operations. That will result in the PTY data being
         * delivered to `local_pty_fd`.
         * @param local_pty_fd a PTY slave fd to proxy PTY data to
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        create_pty_async(local_pty_fd: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Creates a new PTY on the device and proxies PTY data to `local_pty_fd`.
         *
         * You may want to use the result of this asynchronous operation to pass the
         * PTY token to other client operations. That will result in the PTY data being
         * delivered to `local_pty_fd`.
         * @param local_pty_fd a PTY slave fd to proxy PTY data to
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a calllback to execute upon completion
         */
        create_pty_async(
            local_pty_fd: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Completes a request to create a new PTY on the remote device.
         *
         * The resulting PTY identifier is a unique string representing the PTY.
         * Data will be proxied to the `local_pty_fd` provided in
         * `devd_process_service_create_pty_async()`, however you may need this PTY token
         * to pass to other operations to reference the specific PTY instance.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns the pty identifier or `null`
         */
        create_pty_finish(result: Gio.AsyncResult): string;
        /**
         * Requests that the device close a PTY device that was opened. This will
         * stop PTY data being proxied to the FD that was provided when creating the
         * PTY device.
         * @param pty_id the identifier of a previously created PTY
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        destroy_pty_async(pty_id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Requests that the device close a PTY device that was opened. This will
         * stop PTY data being proxied to the FD that was provided when creating the
         * PTY device.
         * @param pty_id the identifier of a previously created PTY
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        destroy_pty_async(
            pty_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous request to destroy a PTY device.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.
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
        /**
         * @param pty_id
         * @param argv
         * @param env
         * @param cancellable
         */
        spawn_async(
            pty_id: string,
            argv: string,
            env: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * @param pty_id
         * @param argv
         * @param env
         * @param cancellable
         * @param callback
         */
        spawn_async(
            pty_id: string,
            argv: string,
            env: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param pty_id
         * @param argv
         * @param env
         * @param cancellable
         * @param callback
         */
        spawn_async(
            pty_id: string,
            argv: string,
            env: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * @param result
         */
        spawn_finish(result: Gio.AsyncResult): string;
        /**
         * @param identifier
         * @param cancellable
         */
        wait_for_process_async(identifier: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param identifier
         * @param cancellable
         * @param callback
         */
        wait_for_process_async(
            identifier: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param identifier
         * @param cancellable
         * @param callback
         */
        wait_for_process_async(
            identifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         * @param exited
         * @param exit_code
         * @param term_sig
         */
        wait_for_process_finish(result: Gio.AsyncResult, exited: boolean, exit_code: number, term_sig: number): boolean;
    }

    namespace Service {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @detailed
             * @run-last
             */
            notification: (arg0: string, arg1: GLib.Variant) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'notification::client': (arg0: string, arg1: GLib.Variant) => void;
            [key: `notification::${string}`]: (arg0: string, arg1: GLib.Variant) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client: Client;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Service extends GObject.Object {
        static $gtype: GObject.GType<Service>;

        // Properties

        /**
         * @construct-only
         */
        get client(): Client;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Service.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](service_type: GObject.GType, service_name: string, client: Client): Service;

        // Signals

        /** @signal */
        connect<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Service.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Service.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param method
         * @param params
         * @virtual
         */
        vfunc_notification(method: string, params: GLib.Variant): void;

        // Methods

        /**
         * This is a wrapper around getting the client and calling
         * `devd_client_call_async()`. It's purpose is to allow service implementations
         * to have a bit less code by just calling this.
         *
         * Call `devd_service_call_finish()` to get the result.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Variant | null>;
        /**
         * This is a wrapper around getting the client and calling
         * `devd_client_call_async()`. It's purpose is to allow service implementations
         * to have a bit less code by just calling this.
         *
         * Call `devd_service_call_finish()` to get the result.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
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
         * `devd_client_call_async()`. It's purpose is to allow service implementations
         * to have a bit less code by just calling this.
         *
         * Call `devd_service_call_finish()` to get the result.
         * @param method the RPC method name
         * @param params the parameters for the method
         * @param cancellable a {@link Gio.Cancellable} or `null`
         * @param callback a callback to execute upon completion
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant | null> | void;
        /**
         * Gets the result of the RPC call.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.   `reply` is set to the reply from the peer, of provided.
         */
        call_finish(result: Gio.AsyncResult): [boolean, GLib.Variant | null];
        /**
         * Gets the client that the service was initialized with.
         * @returns a {@link Deviced.Client}
         */
        get_client(): Client;
    }

    namespace TransferService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::client': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TransferService extends Service {
        static $gtype: GObject.GType<TransferService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TransferService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TransferService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): TransferService;
        // Conflicted with Deviced.Service.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof TransferService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransferService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TransferService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TransferService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TransferService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TransferService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously copies the contents of `path` on the remote device to `file`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param path the path on the remote device
         * @param file a {@link Gio.File} to write to
         * @param progress A progress callback or `null` to execute when transfer progress is updated.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        get_file_async(
            path: string,
            file: Gio.File,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously copies the contents of `path` on the remote device to `file`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param path the path on the remote device
         * @param file a {@link Gio.File} to write to
         * @param progress A progress callback or `null` to execute when transfer progress is updated.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
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
         * @param file a {@link Gio.File} to write to
         * @param progress A progress callback or `null` to execute when transfer progress is updated.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute upon completion
         */
        get_file_async(
            path: string,
            file: Gio.File,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous request to download a file from the device.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        get_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously copies the contents of `file` to the remote device at `path`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param file a {@link Gio.File} to copy
         * @param path the path on the remote device
         * @param progress A progress callback or `null` to execute when transfer progress is updated.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        put_file_async(
            file: Gio.File,
            path: string,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously copies the contents of `file` to the remote device at `path`.
         *
         * `progress` is called periodically with updates to the progress of the copy.
         * @param file a {@link Gio.File} to copy
         * @param path the path on the remote device
         * @param progress A progress callback or `null` to execute when transfer progress is updated.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
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
         * @param file a {@link Gio.File} to copy
         * @param path the path on the remote device
         * @param progress A progress callback or `null` to execute when transfer progress is updated.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a callback to execute upon completion
         */
        put_file_async(
            file: Gio.File,
            path: string,
            progress?: Gio.FileProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Completes an asynchronous request to upload a file to the device.
         *
         * Clients are required to use `rename()` properly to ensure that the file is
         * either replaced or created if successful so you get either the previous
         * version or new version of the file.
         * @param result a {@link Gio.AsyncResult} provided to callback
         * @returns `true` if successful; otherwise `false` and `error` is set.
         */
        put_file_finish(result: Gio.AsyncResult): boolean;
    }

    /**
     * @gir-type Alias
     */
    type AppInfoClass = typeof AppInfo;
    /**
     * @gir-type Alias
     */
    type BrowserClass = typeof Browser;
    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;
    /**
     * @gir-type Alias
     */
    type FlatpakServiceClass = typeof FlatpakService;
    /**
     * @gir-type Alias
     */
    type NetworkClientClass = typeof NetworkClient;
    /**
     * @gir-type Alias
     */
    type NetworkDeviceClass = typeof NetworkDevice;
    /**
     * @gir-type Alias
     */
    type ProcessServiceClass = typeof ProcessService;
    /**
     * @gir-type Alias
     */
    type ServiceClass = typeof Service;
    /**
     * @gir-type Alias
     */
    type TransferServiceClass = typeof TransferService;
    /**
     * @gir-type Struct
     */
    class Triplet {
        static $gtype: GObject.GType<Triplet>;

        // Constructors

        constructor(full_name: string);

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
         * @returns An {@link Deviced.Triplet}.
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
