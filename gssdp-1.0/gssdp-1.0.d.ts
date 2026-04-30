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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GSSDP {
    /**
     * GSSDP-1.0
     */

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * GSSDP could not find a valid IP address of a
         * {@link GSSDP.Client}.
         */
        static NO_IP_ADDRESS: number;
        /**
         * Unknown error.
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * SSDP search target for finding all possible resources.
     */
    const ALL_RESOURCES: string;
    /**
     * @returns a {@link GLib.Quark} uniquely used by GSSDP's errors.
     */
    function error_quark(): GLib.Quark;
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Internal signal.
             * @signal
             * @run-last
             */
            'message-received': (arg0: string, arg1: number, arg2: number, arg3: Soup.MessageHeaders) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::host-ip': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::msearch-port': (pspec: GObject.ParamSpec) => void;
            'notify::network': (pspec: GObject.ParamSpec) => void;
            'notify::server-id': (pspec: GObject.ParamSpec) => void;
            'notify::socket-ttl': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            active: boolean;
            host_ip: string;
            hostIp: string;
            interface: string;
            msearch_port: number;
            msearchPort: number;
            network: string;
            server_id: string;
            serverId: string;
            socket_ttl: number;
            socketTtl: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Client extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        get active(): boolean;
        set active(val: boolean);
        /**
         * The IP address of the assoicated network interface.
         */
        get host_ip(): string;
        set host_ip(val: string);
        /**
         * The IP address of the assoicated network interface.
         */
        get hostIp(): string;
        set hostIp(val: string);
        /**
         * The name of the network interface this client is associated with.
         * Set to NULL to autodetect.
         * @construct-only
         */
        get interface(): string;
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         * @construct-only
         */
        get msearch_port(): number;
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         * @construct-only
         */
        get msearchPort(): number;
        /**
         * The network this client is currently connected to. You could set this
         * to anything you want to identify the network this client is
         * associated with. If you are using `GUPnPContextManager` and associated
         * interface is a WiFi interface, this property is set to the ESSID of
         * the network. Otherwise, expect this to be the network IP address by
         * default.
         */
        get network(): string;
        set network(val: string);
        /**
         * The SSDP server's identifier.
         */
        get server_id(): string;
        set server_id(val: string);
        /**
         * The SSDP server's identifier.
         */
        get serverId(): string;
        set serverId(val: string);
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         * @construct-only
         */
        get socket_ttl(): number;
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         * @construct-only
         */
        get socketTtl(): number;

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

        static ['new'](main_context: GLib.MainContext | null, iface: string | null): Client;

        static new_with_port(iface: string | null, msearch_port: number): Client;

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

        // Methods

        /**
         * @param ip_address The host to add to the cache
         * @param user_agent User agent ot the host to add
         */
        add_cache_entry(ip_address: string, user_agent: string): void;
        /**
         * Adds a header field to the message sent by this `client`. It is intended to
         * be used by clients requiring vendor specific header fields. (If there is an
         * existing header with name name , then this creates a second one).
         * @param name Header name
         * @param value Header value
         */
        append_header(name: string, value: string): void;
        /**
         * Removes all the headers for this `client`.
         */
        clear_headers(): void;
        /**
         * @returns `true` if `client` is active, `false` otherwise.
         */
        get_active(): boolean;
        /**
         * Get the IP address we advertise ourselves as using.
         * @returns The IP address. This string should not be freed.
         */
        get_host_ip(): string;
        /**
         * Get the name of the network interface associated to `client`.
         * @returns The network interface name. This string should not be freed.
         */
        get_interface(): string;
        get_main_context(): GLib.MainContext;
        /**
         * Get the network this client is associated with.
         * @returns The network identification. This string should not be freed.
         */
        get_network(): string;
        /**
         * @returns The server ID.
         */
        get_server_id(): string;
        /**
         * @param ip_address IP address to guess the user-agent for
         * @returns The user-agent cached for this IP, `null` if none is cached.
         */
        guess_user_agent(ip_address: string): string;
        /**
         * Removes `name` from the list of headers . If there are multiple values for
         * `name`, they are all removed.
         * @param name Header name
         */
        remove_header(name: string): void;
        /**
         * Sets the network identification of `client` to `network`.
         * @param network The string identifying the network
         */
        set_network(network: string): void;
        /**
         * Sets the server ID of `client` to `server_id`.
         * @param server_id The server ID
         */
        set_server_id(server_id: string): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    namespace ResourceBrowser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::resource-available signal is emitted whenever a new resource
             * has become available.
             * @signal
             * @run-last
             */
            'resource-available': (arg0: string, arg1: string[]) => void;
            /**
             * The ::resource-unavailable signal is emitted whenever a resource
             * is not available any more.
             * @signal
             * @run-last
             */
            'resource-unavailable': (arg0: string) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::mx': (pspec: GObject.ParamSpec) => void;
            'notify::target': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            client: Client;
            mx: number;
            target: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ResourceBrowser extends GObject.Object {
        static $gtype: GObject.GType<ResourceBrowser>;

        // Properties

        /**
         * Whether this browser is active or not.
         */
        get active(): boolean;
        set active(val: boolean);
        /**
         * The {@link GSSDP.Client} to use.
         * @construct-only
         */
        get client(): Client;
        /**
         * The maximum number of seconds in which to request other parties
         * to respond.
         */
        get mx(): number;
        set mx(val: number);
        /**
         * The discovery target.
         */
        get target(): string;
        set target(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourceBrowser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ResourceBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client, target: string): ResourceBrowser;

        // Signals

        /** @signal */
        connect<K extends keyof ResourceBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceBrowser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ResourceBrowser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceBrowser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ResourceBrowser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResourceBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param usn
         * @virtual
         */
        vfunc_resource_unavailable(usn: string): void;

        // Methods

        /**
         * @returns `true` if `resource_browser` is active.
         */
        get_active(): boolean;
        /**
         * @returns The {@link GSSDP.Client} `resource_browser` is associated with.
         */
        get_client(): Client;
        /**
         * @returns The used MX value.
         */
        get_mx(): number;
        /**
         * @returns The browser target.
         */
        get_target(): string;
        /**
         * Begins discovery if `resource_browser` is active and no discovery is
         * performed. Otherwise does nothing.
         * @returns `true` if rescaning has been started.
         */
        rescan(): boolean;
        /**
         * (De)activates `resource_browser`.
         * @param active `true` to activate `resource_browser`
         */
        set_active(active: boolean): void;
        /**
         * Sets the used MX value of `resource_browser` to `mx`.
         * @param mx The to be used MX value
         */
        set_mx(mx: number): void;
        /**
         * Sets the browser target of `resource_browser` to `target`.
         * @param target The browser target
         */
        set_target(target: string): void;
    }

    namespace ResourceGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::available': (pspec: GObject.ParamSpec) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::max-age': (pspec: GObject.ParamSpec) => void;
            'notify::message-delay': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            available: boolean;
            client: Client;
            max_age: number;
            maxAge: number;
            message_delay: number;
            messageDelay: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ResourceGroup extends GObject.Object {
        static $gtype: GObject.GType<ResourceGroup>;

        // Properties

        /**
         * Whether this group of resources is available or not.
         */
        get available(): boolean;
        set available(val: boolean);
        /**
         * The {@link GSSDP.Client} to use.
         * @construct-only
         */
        get client(): Client;
        /**
         * The number of seconds our advertisements are valid.
         */
        get max_age(): number;
        set max_age(val: number);
        /**
         * The number of seconds our advertisements are valid.
         */
        get maxAge(): number;
        set maxAge(val: number);
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        get message_delay(): number;
        set message_delay(val: number);
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        get messageDelay(): number;
        set messageDelay(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourceGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ResourceGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client: Client): ResourceGroup;

        // Signals

        /** @signal */
        connect<K extends keyof ResourceGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ResourceGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ResourceGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResourceGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a resource with target `target`, USN `usn`, and locations `locations`
         * to `resource_group`.
         * @param target The resource's target
         * @param usn The resource's USN
         * @param locations A {@link GLib.List} of the resource's locations
         * @returns The ID of the added resource.
         */
        add_resource(target: string, usn: string, locations: string[]): number;
        /**
         * Adds a resource with target `target`, USN `usn`, and location `location`
         * to `resource_group`.
         * @param target The resource's target
         * @param usn The resource's USN
         * @param location The resource's location
         * @returns The ID of the added resource.
         */
        add_resource_simple(target: string, usn: string, location: string): number;
        /**
         * @returns TRUE if `resource_group` is available (advertised).
         */
        get_available(): boolean;
        /**
         * @returns The {@link GSSDP.Client} `resource_group` is associated with.
         */
        get_client(): Client;
        /**
         * @returns The number of seconds advertisements are valid.
         */
        get_max_age(): number;
        /**
         * @returns the minimum time between each SSDP message in ms.
         */
        get_message_delay(): number;
        /**
         * Removes the resource with ID `resource_id` from `resource_group`.
         * @param resource_id The ID of the resource to remove
         */
        remove_resource(resource_id: number): void;
        /**
         * Sets `resource_group`<!-- -->s availability to `available`. Changing
         * `resource_group`<!-- -->s availability causes it to announce its new state
         * to listening SSDP clients.
         * @param available `true` if `resource_group` should be available (advertised)
         */
        set_available(available: boolean): void;
        /**
         * Sets the number of seconds advertisements are valid to `max_age`.
         * @param max_age The number of seconds advertisements are valid
         */
        set_max_age(max_age: number): void;
        /**
         * Sets the minimum time between each SSDP message.
         * @param message_delay The message delay in ms.
         */
        set_message_delay(message_delay: number): void;
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResourceBrowserClass = typeof ResourceBrowser;
    /**
     * @gir-type Struct
     */
    abstract class ResourceBrowserPrivate {
        static $gtype: GObject.GType<ResourceBrowserPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResourceGroupClass = typeof ResourceGroup;
    /**
     * @gir-type Struct
     */
    abstract class ResourceGroupPrivate {
        static $gtype: GObject.GType<ResourceGroupPrivate>;
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

export default GSSDP;

// END
