
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
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GSSDP from '@girs/gssdp-1.6';

export namespace GUPnP {

    /**
     * GUPnP-1.6
     */


    /**
     * Error codes used during invocation of service actions.
     * @gir-type Struct
     */
    class ControlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The action name was invalid.
         */
        static INVALID_ACTION: number;

        /**
         * The action arguments were invalid.
         */
        static INVALID_ARGS: number;

        /**
         * Out of sync (deprecated).
         */
        static OUT_OF_SYNC: number;

        /**
         * The action failed.
         */
        static ACTION_FAILED: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * Error codes during eventing of state variables.
     * @gir-type Struct
     */
    class EventingError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * The subscription attempt failed.
         */
        static SUBSCRIPTION_FAILED: number;

        /**
         * The subscription was lost.
         */
        static SUBSCRIPTION_LOST: number;

        /**
         * The notification failed.
         */
        static NOTIFY_FAILED: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * Errors during {@link GUPnP.RootDevice} creation
     * @gir-type Struct
     */
    class RootdeviceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * No {@link GUPnP.Context} was passed to the root device.
         */
        static NO_CONTEXT: number;

        /**
         * Device description path was missing
         */
        static NO_DESCRIPTION_PATH: number;

        /**
         * Description folder was missing
         */
        static NO_DESCRIPTION_FOLDER: number;

        /**
         * Network interface is not usable
         */
        static NO_NETWORK: number;

        static FAIL: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * Error codes during communication with another server.
     * @gir-type Struct
     */
    class ServerError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Internal server error.
         */
        static INTERNAL_SERVER_ERROR: number;

        /**
         * The resource was not found.
         */
        static NOT_FOUND: number;

        /**
         * This method is not implemented.
         */
        static NOT_IMPLEMENTED: number;

        /**
         * Invalid response.
         */
        static INVALID_RESPONSE: number;

        /**
         * Invalid URL.
         */
        static INVALID_URL: number;

        /**
         * Unknown/unhandled error.
         */
        static OTHER: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace ServiceActionArgDirection {
        export const $gtype: GObject.GType<ServiceActionArgDirection>;
    }

    /**
     * Represents the direction of a service state variable.
     * @gir-type Enum
     */
    enum ServiceActionArgDirection {
        /**
         * An "in" variable, to the service.
         */
        IN,
        /**
         * An "out" variable, from the service.
         */
        OUT,
    }


    /**
     * Errors during service handling
     * @gir-type Struct
     */
    class ServiceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * {@link GUPnP.Service.signals_autoconnect} failed
         */
        static AUTOCONNECT: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * Errors during service introspection
     * @gir-type Struct
     */
    class ServiceIntrospectionError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Unknown error
         */
        static OTHER: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * Errors during occuring during processing of XML data.
     * @gir-type Struct
     */
    class XMLError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Generic XML parsing error.
         */
        static PARSE: number;

        /**
         * A required XML node was not found.
         */
        static NO_NODE: number;

        /**
         * An XML node is unexpectedly empty.
         */
        static EMPTY_NODE: number;

        /**
         * An XML node has an unknown attribute.
         */
        static INVALID_ATTRIBUTE: number;

        /**
         * Unknown/unhandled XML related errors.
         */
        static OTHER: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    function control_error_quark(): GLib.Quark;

    function eventing_error_quark(): GLib.Quark;

    /**
     * Generate and return a new UUID.
     * @returns A newly generated UUID in string representation.
     * @deprecated since 1.6.: Use {@link GLib.uuid_string_random} instead.
     */
    function get_uuid(): string;

    function rootdevice_error_quark(): GLib.Quark;

    function server_error_quark(): GLib.Quark;

    function service_error_quark(): GLib.Quark;

    function service_introspection_error_quark(): GLib.Quark;

    function xml_error_quark(): GLib.Quark;

    /**
     * @gir-type Callback
     */
    interface ServiceProxyActionCallback {
        (proxy: ServiceProxy, action: ServiceProxyAction): void;
    }

    /**
     * @gir-type Callback
     */
    interface ServiceProxyNotifyCallback {
        (proxy: ServiceProxy, variable: string, value: unknown): void;
    }

    /**
     * @gir-type Alias
     */
    type BinBase64 = (object | null);

    /**
     * @gir-type Alias
     */
    type BinHex = (object | null);

    /**
     * @gir-type Alias
     */
    type Date = (object | null);

    /**
     * @gir-type Alias
     */
    type DateTime = (object | null);

    /**
     * @gir-type Alias
     */
    type DateTimeTZ = (object | null);

    /**
     * @gir-type Alias
     */
    type Time = (object | null);

    /**
     * @gir-type Alias
     */
    type TimeTZ = (object | null);

    /**
     * @gir-type Alias
     */
    type URI = (object | null);

    /**
     * @gir-type Alias
     */
    type UUID = (object | null);

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GSSDP.Client.SignalSignatures {
            "notify::acl": (pspec: GObject.ParamSpec) => void;
            "notify::default-language": (pspec: GObject.ParamSpec) => void;
            "notify::server": (pspec: GObject.ParamSpec) => void;
            "notify::session": (pspec: GObject.ParamSpec) => void;
            "notify::subscription-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::address-family": (pspec: GObject.ParamSpec) => void;
            "notify::boot-id": (pspec: GObject.ParamSpec) => void;
            "notify::config-id": (pspec: GObject.ParamSpec) => void;
            "notify::host-ip": (pspec: GObject.ParamSpec) => void;
            "notify::host-mask": (pspec: GObject.ParamSpec) => void;
            "notify::interface": (pspec: GObject.ParamSpec) => void;
            "notify::msearch-port": (pspec: GObject.ParamSpec) => void;
            "notify::network": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::server-id": (pspec: GObject.ParamSpec) => void;
            "notify::socket-ttl": (pspec: GObject.ParamSpec) => void;
            "notify::uda-version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GSSDP.Client.ConstructorProps, Gio.Initable.ConstructorProps {
            acl: Acl;
            default_language: string;
            defaultLanguage: string;
            server: Soup.Server;
            session: Soup.Session;
            subscription_timeout: number;
            subscriptionTimeout: number;
        }
    }

    /**
     * Context object wrapping shared networking bits.
     * 
     * {@link GUPnP.Context} wraps the networking bits that are used by the various
     * GUPnP classes. It automatically starts a web server on demand.
     * 
     * For debugging, it is possible to see the messages being sent and received by
     * setting the environment variable `GUPNP_DEBUG`.
     * @gir-type Class
     */
    class Context extends GSSDP.Client implements Gio.Initable {
        static $gtype: GObject.GType<Context>;

        // Properties
        /**
         * An access control list.
         * @since 0.20.11
         */
        get acl(): Acl;
        set acl(val: Acl);

        /**
         * The content of the Content-Language header id the client
         * sends Accept-Language and no language-specific pages to serve
         * exist. The property defaults to 'en'.
         * @since 0.18.0
         * @default en
         */
        get default_language(): string;
        set default_language(val: string);

        /**
         * The content of the Content-Language header id the client
         * sends Accept-Language and no language-specific pages to serve
         * exist. The property defaults to 'en'.
         * @since 0.18.0
         * @default en
         */
        get defaultLanguage(): string;
        set defaultLanguage(val: string);

        /**
         * The {@link Soup.Server} HTTP server used by GUPnP.
         * @read-only
         */
        get server(): Soup.Server;

        /**
         * The {@link Soup.Session} object used by GUPnP.
         * @read-only
         */
        get session(): Soup.Session;

        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         * @construct-only
         * @default 1800
         */
        get subscription_timeout(): number;

        /**
         * The preferred subscription timeout: the number of seconds after
         * which subscriptions are renewed. Set to '0' if subscriptions
         * are never to time out.
         * @construct-only
         * @default 1800
         */
        get subscriptionTimeout(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](iface: (string | null), port: number): Context;

        // Conflicted with GSSDP.Client.new
        static ["new"](...args: never[]): any;

        static new_for_address(addr: (Gio.InetAddress | null), port: number, uda_version: GSSDP.UDAVersion): Context;

        static new_full(iface: (string | null), addr: (Gio.InetAddress | null), port: number, uda_version: GSSDP.UDAVersion): Context;

        // Signals
        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add a {@link Soup.ServerCallback} to the {@link GUPnP.Context}<!-- -->'s {@link Soup.Server}.
         * @param use_acl `true`, if the path should query the GUPnPContext::acl before serving the resource, `false` otherwise.
         * @param path the toplevel path for the handler.
         * @param callback callback to invoke for requests under `path`
         */
        add_server_handler(use_acl: boolean, path: string, callback: Soup.ServerCallback): void;

        /**
         * Access the {@link GUPnP.Acl} associated with this client. If there isn't any,
         * retturns `null`. The returned ACL must not be freed.
         * @returns The access control list associated with this context or `null` if no acl is set.
         */
        get_acl(): Acl;

        /**
         * Get the default Content-Language header for this context.
         * @returns The default content of the Content-Language header.
         */
        get_default_language(): string;

        /**
         * Get the port that the SOAP server is running on.
         * @returns The port the SOAP server is running on.
         */
        get_port(): number;

        /**
         * Get the {@link Soup.Server} HTTP server that GUPnP is using.
         * @returns The {@link Soup.Server} used by GUPnP. Do not unref this when finished.
         */
        get_server(): Soup.Server;

        /**
         * Get the {@link Soup.Session} object that GUPnP is using.
         * @returns The {@link Soup.Session} used by GUPnP. Do not unref this when finished.
         */
        get_session(): Soup.Session;

        /**
         * Get the event subscription timeout (in seconds), or 0 meaning there is no
         * timeout.
         * @returns The event subscription timeout in seconds.
         */
        get_subscription_timeout(): number;

        /**
         * Start hosting `local_path` at `server_path`. Files with the path
         * `local_path`.LOCALE (if they exist) will be served up when LOCALE is
         * specified in the request's Accept-Language header.
         * @param local_path Path to the local file or folder to be hosted
         * @param server_path Web server path where `local_path` should be hosted
         */
        host_path(local_path: string, server_path: string): void;

        /**
         * Use this method to serve different local path to specific user-agent(s). The
         * path `server_path` must already be hosted by `context`.
         * @param local_path Path to the local file or folder to be hosted
         * @param server_path Web server path already being hosted
         * @param user_agent The user-agent as a {@link GLib.Regex}.
         * @returns `true` on success, `false` otherwise.
         */
        host_path_for_agent(local_path: string, server_path: string, user_agent: GLib.Regex): boolean;

        /**
         * Remove a {@link Soup.ServerCallback} from the {@link GUPnP.Context}<!-- -->'s {@link Soup.Server}.
         * @param path the toplevel path for the handler.
         */
        remove_server_handler(path: string): void;

        /**
         * Utility function to re-write an uri to the IPv6 link-local form which has
         * the zone index appended to the IP address.
         * @param uri an uri to rewrite if necessary
         * @returns A re-written version of the `uri` if the context is on a link-local IPv6 address, a copy of the `uri` otherwise or `null` if `uri` was invalid
         */
        rewrite_uri(uri: string): string;

        /**
         * Attach or remove the assoicated access control list to this context. If
         * `acl` is `null`, the current access control list will be removed.
         * @param acl The new access control list or `null` to remove the current list.
         */
        set_acl(acl: (Acl | null)): void;

        /**
         * Set the default language for the Content-Language header to `language`.
         * 
         * If the client sends an Accept-Language header the UPnP HTTP server
         * is required to send a Content-Language header in return. If there are
         * no files hosted in languages which match the requested ones the
         * Content-Language header is set to this value. The default value is "en".
         * @param language A language tag as defined in RFC 2616 3.10
         */
        set_default_language(language: string): void;

        /**
         * Sets the event subscription timeout to `timeout`. Use 0 if you don't
         * want subscriptions to time out. Note that any client side subscriptions
         * will automatically be renewed.
         * @param timeout Event subscription timeout in seconds
         */
        set_subscription_timeout(timeout: number): void;

        /**
         * Stop hosting the file or folder at `server_path`.
         * @param server_path Web server path where the file or folder is hosted
         */
        unhost_path(server_path: string): void;

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
        init(cancellable: (Gio.Cancellable | null)): boolean;

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
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace ContextFilter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::entries": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enabled: boolean;
            entries: (string[] | null);
        }
    }

    /**
     * Network context filter, used by {@link GUPnP.ContextManager}
     * 
     * {@link GUPnP.ContextFilter} handles network filtering. It provides API to manage a
     * list of entries that will be used to positive filter networks. The {@link GUPnP.ContextFilter}
     * could be enabled or not. If it's enabled but the entries list is empty, it
     * behaves as if being disabled.
     * 
     * The GUPnPContextFilter is used with the {@link GUPnP.ContextManager}
     * to narrow down the contexts that are notified by it.
     * 
     * Contexts can be filtered by the following criteria:
     * 
     *  - Their IP addresses
     *  - The network device they will live on
     *  - The name of the network the context would join
     * 
     * To add or modify a context filter, you need to retrieve the current context filter
     * from the context manger using {@link GUPnP.ContextManager.get_context_filter}.
     * 
     * By default, a context filter is empty and disabled.
     * 
     * For example, to only react to contexts that are appearing on eth0 or when being in the WiFi network with
     * the SSID "HomeNetwork", and on IPv6 localhost, you should do:
     * 
     * 
     * ```c
     * GUPnPContextFilter* filter;
     * 
     * filter = gupnp_context_manager_get_context_filter (manager);
     * const char *filter_entries[] = {
     *     "eth0",
     *     "HomeNetwork",
     *     "::1",
     *     NULL
     * };
     * gupnp_context_filter_add_entryv (filter, filter_entries);
     * gupnp_context_filter_set_enabled (filter, TRUE);
     * ```
     * @gir-type Class
     * @since 1.4.0
     */
    class ContextFilter extends GObject.Object {
        static $gtype: GObject.GType<ContextFilter>;

        // Properties
        /**
         * Whether this context filter is active or not.
         * @since 1.4.0
         * @default false
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * A list of items to filter for.
         * @since 1.4.0
         * @construct-only
         */
        get entries(): (string[] | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContextFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ContextFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContextFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContextFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add `entry` in the list of valid criteria used by `context_filter` to
         * filter networks.
         * if `entry` already exists, it won't be added a second time.
         * @param entry A value used to filter network
         * @returns `true` if `entry` is added, `false` otherwise.
         */
        add_entry(entry: string): boolean;

        /**
         * Add a list of entries to a {@link GUPnP.ContextFilter}. This is a helper function to
         * directly add a `null`-terminated array of string usually acquired from
         * command line arguments.
         * @param entries A `null`-terminated list of strings
         */
        add_entryv(entries: string[]): void;

        /**
         * It will check if the `context` is allowed or not. The `context_filter` will
         * check all its entries against {@link GUPnP.Context} interface, host IP and network
         * fields information. This function doesn't take into account the
         * `context_filter` status (enabled or not).
         * @param context A {@link GUPnP.Context} to test.
         * @returns `true` if `context` is matching the `context_filter` criteria, `false` otherwise.
         */
        check_context(context: Context): boolean;

        /**
         * Remove all entries from {@link GLib.List} that compose the context filter.
         * The list is now empty. Even if {@link GUPnP.ContextFilter} is enabled, it will have
         * the same behavior as if it was disabled.
         */
        clear(): void;

        /**
         * Return the status of the {@link GUPnP.ContextFilter}
         * @returns `true` if `context_filter` is enabled, `false` otherwise.
         */
        get_enabled(): boolean;

        /**
         * Get the {@link GLib.List} of entries that compose the context filter. Do not free
         * @returns a {@link GLib.List} of entries used to filter networks, interfaces,... or `null`.
         */
        get_entries(): (string[] | null);

        /**
         * Return the state of the entries list of {@link GUPnP.ContextFilter}
         * @returns `true` if `context_filter` is empty, `false` otherwise.
         */
        is_empty(): boolean;

        /**
         * Remove `entry` in the list of valid criteria used by `context_filter` to
         * filter networks.
         * @param entry A value to remove from the filter list.
         * @returns `true` if `entry` is removed, `false` otherwise.
         */
        remove_entry(entry: string): boolean;

        /**
         * Enable or disable the {@link GUPnP.ContextFilter} to perform the network filtering.
         * @param enable `true` to enable `context_filter`, `false` otherwise
         */
        set_enabled(enable: boolean): void;
    }


    namespace ContextManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Signals the availability of new {@link GUPnP.Context}.
             * @signal
             * @run-first
             */
            "context-available": (arg0: Context) => void;
            /**
             * Signals the unavailability of a {@link GUPnP.Context}.
             * @signal
             * @run-first
             */
            "context-unavailable": (arg0: Context) => void;
            "notify::context-filter": (pspec: GObject.ParamSpec) => void;
            "notify::family": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::uda-version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context_filter: ContextFilter;
            contextFilter: ContextFilter;
            family: Gio.SocketFamily;
            port: number;
            uda_version: GSSDP.UDAVersion;
            udaVersion: GSSDP.UDAVersion;
        }
    }

    /**
     * A manager for {@link GUPnP.Context} instances.
     * 
     * This utility class that takes care of dynamic creation and destruction of
     * {@link GUPnP.Context} objects for all available network interfaces as they go up
     * (connect) and down (disconnect), respectively.
     * 
     * The final implementation depends either on the underlying operating system
     * or can configured during compile time.
     * 
     * It also provides a simple filtering facility if required. See {@link GUPnP.ContextManager.get_context_filter} and
     * {@link GUPnP.ContextFilter} for details.
     * @gir-type Class
     * @since 0.14.0
     */
    abstract class ContextManager extends GObject.Object {
        static $gtype: GObject.GType<ContextManager>;

        // Properties
        /**
         * The context filter to use.
         * @read-only
         */
        get context_filter(): ContextFilter;

        /**
         * The context filter to use.
         * @read-only
         */
        get contextFilter(): ContextFilter;

        /**
         * The socket family to create contexts for. Use {@link Gio.SocketFamily.INVALID}
         * for any or {@link Gio.SocketFamily.IPV4} for IPv4 contexts or
         * {@link Gio.SocketFamily.IPV6} for IPv6 contexts
         * @since 1.2.0
         * @construct-only
         * @default Gio.SocketFamily.INVALID
         */
        get family(): Gio.SocketFamily;

        /**
         * Port the contexts listen on, or 0 if you don't care what
         * port is used by {@link GUPnP.Context} objects created by this object.
         * @construct-only
         * @default 0
         */
        get port(): number;

        /**
         * The UDA version the contexts will support. Use {@link GSSDP.UDAVersion.VERSION_UNSPECIFIED}
         * for using the default UDA version.
         * @since 1.2.0
         * @construct-only
         * @default GSSDP.UDAVersion.VERSION_UNSPECIFIED
         */
        get uda_version(): GSSDP.UDAVersion;

        /**
         * The UDA version the contexts will support. Use {@link GSSDP.UDAVersion.VERSION_UNSPECIFIED}
         * for using the default UDA version.
         * @since 1.2.0
         * @construct-only
         * @default GSSDP.UDAVersion.VERSION_UNSPECIFIED
         */
        get udaVersion(): GSSDP.UDAVersion;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContextManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ContextManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContextManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContextManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContextManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContextManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Factory-method to create a new {@link GUPnP.ContextManager}. The final type of the
         * {@link GUPnP.ContextManager} depends on the compile-time selection or - in case of
         * NetworkManager - on its availability during run-time. If it is not available,
         * the implementation falls back to the basic Unix context manager instead.
         * 
         * Equivalent to calling `gupnp_context_manager_create_full` ({@link GSSDP.UDAVersion.VERSION_1_0}, {@link Gio.SocketFamily.IPV4}, port);
         * @param port Port to create contexts for, or 0 if you don't care what port is used.
         */
        static create(port: number): ContextManager;

        /**
         * Factory-method to create a new {@link GUPnP.ContextManager}. The final type of the
         * {@link GUPnP.ContextManager} depends on the compile-time selection or - in case of
         * NetworkManager - on its availability during run-time. If it is not available,
         * the implementation falls back to the basic Unix context manager instead.
         * @param uda_version {@link GSSDP.UDAVersion} the created contexts should implement (UDA 1.0 or 1.1). For {@link GSSDP.UDAVersion.VERSION_UNSPECIFIED} for default.
         * @param family {@link Gio.SocketFamily} to create the context for
         * @param port Port to create contexts for, or 0 if you don't care what port is used.
         */
        static create_full(uda_version: GSSDP.UDAVersion, family: Gio.SocketFamily, port: number): ContextManager;

        // Methods
        /**
         * Get the {@link GUPnP.ContextFilter} associated with `manager`.
         * @returns The {@link GUPnP.ContextFilter} associated with this context manager.
         */
        get_context_filter(): ContextFilter;

        /**
         * Get the network port associated with this context manager.
         * @returns The network port associated with this context manager.
         */
        get_port(): number;

        /**
         * Get the {@link Gio.SocketFamily} the contexts are created for. Can be
         * {@link Gio.SocketFamily.IPV6}, {@link Gio.SocketFamily.IPV4} or {@link Gio.SocketFamily.INVALID} for
         * both
         * @returns The socket family
         */
        get_socket_family(): Gio.SocketFamily;

        /**
         * Get the UDA protocol version the contexts are implementing
         * @returns The UDA protocol version
         */
        get_uda_version(): GSSDP.UDAVersion;

        /**
         * By calling this function, you are asking `manager` to keep a reference to
         * `control_point` until its associated {@link GUPnP.Context} is no longer available.
         * You usually want to call this function from your
         * `GUPnP.ContextManager::context-available` handler after you create a
         * {@link GUPnP.ControlPoint} object for the newly available context.
         * You usually then give up your own reference to the control point so it will be
         * automatically destroyed if its context is no longer available.
         * 
         * This function is mainly useful when implementing an UPnP client.
         * 
         * ```c
         * void on_context_available (GUPnPContextManager *manager, GUPnPContext *context, gpointer user_data)
         * {
         *     GUPnPControlPoint *cp = gupnp_control_point_new (context, "urn:schemas-upnp-org:device:MediaRenderer:1");
         *     gupnp_context_manager_manage_control_point (manager, cp);
         *     // Subscribe to control point's signals etc.
         *     g_object_unref (cp);
         * }
         * ```
         * @param control_point The {@link GUPnP.ControlPoint} to be taken care of
         */
        manage_control_point(control_point: ControlPoint): void;

        /**
         * By calling this function, you are asking `manager` to keep a reference to
         * `root_device` when its associated {@link GUPnP.Context} is no longer available. You
         * usually want to call this function from
         * `GUPnP.ContextManager::context-available` handler after you create a
         * {@link GUPnP.RootDevice} object for the newly available context.
         * 
         * You usually then give up your own reference to the root device so it will be
         * automatically destroyed if its context is no longer available.
         * 
         * This function is mainly useful when implementing an UPnP client.
         * 
         * ```c
         * void on_context_available (GUPnPContextManager *manager, GUPnPContext *context, gpointer user_data)
         * {
         *     GError *error = NULL;
         * 
         *     GUPnPRootDevice *rd = gupnp_root_device_new (context, "BasicLight1.xml", ".", &error);
         *     gupnp_context_manager_manage_root_device (manager, rd);
         *     // Subscribe to control point's signals etc.
         *     g_object_unref (rd);
         * }
         * ```
         * @param root_device The {@link GUPnP.RootDevice} to be taken care of
         */
        manage_root_device(root_device: RootDevice): void;

        /**
         * This function starts a rescan on every control point managed by `manager`.
         * Only the active control points send discovery messages.
         * This function should be called when servers are suspected to have
         * disappeared.
         */
        rescan_control_points(): void;
    }


    namespace ControlPoint {
        // Signal signatures
        interface SignalSignatures extends GSSDP.ResourceBrowser.SignalSignatures {
            /**
             * The ::device-proxy-available signal is emitted whenever a new
             * device has become available.
             * @signal
             * @run-last
             */
            "device-proxy-available": (arg0: DeviceProxy) => void;
            /**
             * The ::device-proxy-unavailable signal is emitted whenever a
             * device is not available any more.
             * @signal
             * @run-last
             */
            "device-proxy-unavailable": (arg0: DeviceProxy) => void;
            /**
             * The ::service-proxy-available signal is emitted whenever a new
             * service has become available.
             * @signal
             * @run-last
             */
            "service-proxy-available": (arg0: ServiceProxy) => void;
            /**
             * The ::service-proxy-unavailable signal is emitted whenever a
             * service is not available any more.
             * @signal
             * @run-last
             */
            "service-proxy-unavailable": (arg0: ServiceProxy) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::mx": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GSSDP.ResourceBrowser.ConstructorProps {
            resource_factory: ResourceFactory;
            resourceFactory: ResourceFactory;
        }
    }

    /**
     * Network resource discovery.
     * 
     * {@link GUPnP.ControlPoint} handles device and service discovery. After creating
     * a control point and activating it using {@link GSSDP.ResourceBrowser.set_active},
     * the `GUPnP.ControlPoint::device-proxy-available`,
     * `GUPnP.ControlPoint::service-proxy-available`,
     * `GUPnP.ControlPoint::device-proxy-unavailable` and
     * `GUPnP.ControlPoint::service-proxy-unavailable` signals will
     * be emitted whenever the availability of a device or service matching
     * the specified discovery target changes.
     * @gir-type Class
     */
    class ControlPoint extends GSSDP.ResourceBrowser {
        static $gtype: GObject.GType<ControlPoint>;

        // Properties
        /**
         * The resource factory to use. Set to NULL for default factory.
         * @construct-only
         */
        get resource_factory(): ResourceFactory;

        /**
         * The resource factory to use. Set to NULL for default factory.
         * @construct-only
         */
        get resourceFactory(): ResourceFactory;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlPoint.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ControlPoint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](context: Context, target: string): ControlPoint;

        static new_full(context: Context, factory: ResourceFactory, target: string): ControlPoint;

        // Signals
        /** @signal */
        connect<K extends keyof ControlPoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlPoint.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ControlPoint.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlPoint.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ControlPoint.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ControlPoint.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param proxy 
         * @virtual
         */
        vfunc_device_proxy_available(proxy: DeviceProxy): void;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_device_proxy_unavailable(proxy: DeviceProxy): void;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_service_proxy_available(proxy: ServiceProxy): void;

        /**
         * @param proxy 
         * @virtual
         */
        vfunc_service_proxy_unavailable(proxy: ServiceProxy): void;

        // Methods
        /**
         * Get the {@link GUPnP.ControlPoint} associated with `control_point`.
         * @returns The {@link GUPnP.Context}.
         */
        get_context(): Context;

        /**
         * Get the {@link GUPnP.ResourceFactory} used by the `control_point`. If none was set during construction
         * by calling {@link GUPnP.ControlPoint.new_full}, equivalent to calling
         * {@link GUPnP.ResourceFactory.get_default}
         * @returns The {@link GUPnP.ResourceFactory} used by this control point
         */
        get_resource_factory(): ResourceFactory;

        /**
         * Get the list of {@link GUPnP.DeviceProxy} objects the control point currently assumes to
         * be active.
         * 
         * Since a device might have gone offline without signalizing it, but
         * the automatic resource timeout has not happened yet, it is possible that some of
         * the devices listed are not available anymore on the network.
         * 
         * Do not free the list nor its elements.
         * @returns Device proxies currently assumed to be active.
         */
        list_device_proxies(): DeviceProxy[];

        /**
         * Get the list of discovered {@link GUPnP.ServiceProxy} objects the control point currently assumes to
         * be active.
         * 
         * Since a device might have gone offline without signalizing it, but
         * the automatic resource timeout has not happened yet, it is possible that some of
         * the services listed are not available anymore on the network.
         * 
         * Do not free the list nor its elements.
         * @returns Service proxies currently assumed to be active.
         */
        list_service_proxies(): ServiceProxy[];
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends DeviceInfo.SignalSignatures {
            "notify::root-device": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DeviceInfo.ConstructorProps {
            root_device: RootDevice;
            rootDevice: RootDevice;
        }
    }

    /**
     * Base class for UPnP device implementations.
     * 
     * {@link GUPnP.Device} allows for retrieving a device's sub-devices
     * and services. {@link GUPnP.Device} implements the {@link GUPnP.DeviceInfo}
     * interface.
     * @gir-type Class
     */
    class Device extends DeviceInfo {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * The containing {@link GUPnP.RootDevice}, or NULL if this is the root
         * device.
         * @construct-only
         */
        get root_device(): RootDevice;

        /**
         * The containing {@link GUPnP.RootDevice}, or NULL if this is the root
         * device.
         * @construct-only
         */
        get rootDevice(): RootDevice;

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
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace DeviceInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            device_type: string;
            deviceType: string;
            document: XMLDoc;
            element: never;
            location: string;
            resource_factory: ResourceFactory;
            resourceFactory: ResourceFactory;
            udn: string;
            url_base: GLib.Uri;
            urlBase: GLib.Uri;
        }
    }

    /**
     * Device information shared by local and remote devices
     * 
     * This class aggregates the information that is shared between remote and local
     * devices.
     * @gir-type Class
     */
    abstract class DeviceInfo extends GObject.Object {
        static $gtype: GObject.GType<DeviceInfo>;

        // Properties
        /**
         * The {@link GUPnP.Context} to use.
         * @construct-only
         */
        get context(): Context;

        /**
         * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         * @construct-only
         * @default null
         */
        get device_type(): string;

        /**
         * The device type, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         * @construct-only
         * @default null
         */
        get deviceType(): string;

        /**
         * The description document
         */
        get document(): XMLDoc;
        set document(val: XMLDoc);

        /**
         * Private property.
         * @write-only
         */
        set element(val: never);

        /**
         * The location of the device description file.
         * @default null
         */
        get location(): string;
        set location(val: string);

        /**
         * The resource factory to use. Set to NULL for default factory.
         * @construct-only
         */
        get resource_factory(): ResourceFactory;

        /**
         * The resource factory to use. Set to NULL for default factory.
         * @construct-only
         */
        get resourceFactory(): ResourceFactory;

        /**
         * The UDN of this device.
         * @construct-only
         * @default null
         */
        get udn(): string;

        /**
         * The URL base ({@link GLib.Uri}).
         */
        get url_base(): GLib.Uri;
        set url_base(val: GLib.Uri);

        /**
         * The URL base ({@link GLib.Uri}).
         */
        get urlBase(): GLib.Uri;
        set urlBase(val: GLib.Uri);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeviceInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeviceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeviceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeviceInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the associated {@link GUPnP.Context}.
         * @returns The {@link GUPnP.Context} the devices is operating on.
         */
        get_context(): Context;

        /**
         * This function provides generic access to the contents of arbitrary elements
         * in the device description file.
         * @param element Name of the description element to retrieve
         * @returns a newly allocated string containing the requested value or `null` if the device description doesn't contain the given `element`
         */
        get_description_value(element: string): (string | null);

        /**
         * Get the device with type `type` directly contained in `info` as
         * a new object implementing {@link GUPnP.DeviceInfo}, or `null` if no such device
         * was found. The returned object should be unreffed when done.
         * 
         * Note that devices are not cached internally, so that every time you call
         * this function a new object is created. The application must cache any used
         * devices if it wishes to keep them around and re-use them.
         * @param type The type of the device to be retrieved.
         * @returns A new {@link GUPnP.DeviceInfo}.
         */
        get_device(type: string): (DeviceInfo | null);

        /**
         * Get the UPnP device type of this {@link GUPnP.DeviceInfo}, e.g. `urn:schemas-upnp-org:device:InternetGatewayDevice:1`
         * @returns A constant string, or `null`.
         */
        get_device_type(): string;

        /**
         * Get the friendly name of the device.
         * @returns A newly allocated string containing the "friendly name" of the device, or `null` if not available. `g_free()` after use.
         */
        get_friendly_name(): (string | null);

        /**
         * Download the device icon matching the request parameters. For details on
         * the lookup procedure, see {@link GUPnP.DeviceInfo.get_icon_url}
         * @param requested_mime_type The requested file format, or `null` for any
         * @param requested_depth The requested color depth, or -1 for any
         * @param requested_width The requested width, or -1 for any
         * @param requested_height The requested height, or -1 for any
         * @param prefer_bigger `true` if a bigger, rather than a smaller icon should be returned if no exact match could be found
         * @param cancellable 
         */
        get_icon_async(requested_mime_type: (string | null), requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<[GLib.Bytes, string, number, number, number]>;

        /**
         * Download the device icon matching the request parameters. For details on
         * the lookup procedure, see {@link GUPnP.DeviceInfo.get_icon_url}
         * @param requested_mime_type The requested file format, or `null` for any
         * @param requested_depth The requested color depth, or -1 for any
         * @param requested_width The requested width, or -1 for any
         * @param requested_height The requested height, or -1 for any
         * @param prefer_bigger `true` if a bigger, rather than a smaller icon should be returned if no exact match could be found
         * @param cancellable 
         * @param callback 
         */
        get_icon_async(requested_mime_type: (string | null), requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Download the device icon matching the request parameters. For details on
         * the lookup procedure, see {@link GUPnP.DeviceInfo.get_icon_url}
         * @param requested_mime_type The requested file format, or `null` for any
         * @param requested_depth The requested color depth, or -1 for any
         * @param requested_width The requested width, or -1 for any
         * @param requested_height The requested height, or -1 for any
         * @param prefer_bigger `true` if a bigger, rather than a smaller icon should be returned if no exact match could be found
         * @param cancellable 
         * @param callback 
         */
        get_icon_async(requested_mime_type: (string | null), requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<[GLib.Bytes, string, number, number, number]> | void);

        /**
         * @param res A GAsyncResult
         * @returns A GBytes contaning the icon or NULL on either error or no matching icon was found.
         */
        get_icon_finish(res: Gio.AsyncResult): [GLib.Bytes, string, number, number, number];

        /**
         * Get an URL pointing to the icon most closely matching the
         * given criteria, or `null`.
         * 
         * If `requested_mime_type` is set, only icons with
         * this mime type will be returned. If `requested_depth` is set, only icons with
         * this or lower depth will be returned. If `requested_width` and/or
         * `requested_height` are set, only icons that are this size or smaller are
         * returned, unless `prefer_bigger` is set, in which case the next biggest icon
         * will be returned. The returned strings should be freed.
         * @param requested_mime_type The requested file format, or `null` for any
         * @param requested_depth The requested color depth, or -1 for any
         * @param requested_width The requested width, or -1 for any
         * @param requested_height The requested height, or -1 for any
         * @param prefer_bigger `true` if a bigger, rather than a smaller icon should be returned if no exact match could be found
         * @returns a string, or `null`.  `g_free()` after use.
         */
        get_icon_url(requested_mime_type: (string | null), requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [(string | null), string, number, number, number];

        /**
         * Get the URL of the device file
         * @returns A s
         */
        get_location(): string;

        /**
         * Get the manufacturer of the device.
         * @returns A newly allocated string containing the manufacturer of the device, or `null` if not available. `g_free()` after use.
         */
        get_manufacturer(): (string | null);

        /**
         * Get an URL pointing to the manufacturer's website.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_manufacturer_url(): (string | null);

        /**
         * Get the description of the device model.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_model_description(): (string | null);

        /**
         * Get the model name of the device.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_model_name(): (string | null);

        /**
         * Get the model number of the device.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_model_number(): (string | null);

        /**
         * Get an URL pointing to the device model's website.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_model_url(): (string | null);

        /**
         * Get an URL pointing to the device's presentation page, for web-based
         * administration, if available.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_presentation_url(): (string | null);

        /**
         * Get the {@link GUPnP.ResourceFactory} used by the `device_info`.
         * @returns A {@link GUPnP.ResourceFactory}.
         */
        get_resource_factory(): ResourceFactory;

        /**
         * Get the serial number of the device.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_serial_number(): (string | null);

        /**
         * Get the service with type `type` directly contained in `info` as a new object
         * implementing {@link GUPnP.ServiceInfo}, or `null` if no such device was found.
         * 
         * Note that services are not cached internally, so that every time you call
         * this function a new object is created. The application must cache any used
         * services if it wishes to keep them around and re-use them.
         * @param type The type of the service to be retrieved.
         * @returns A {@link GUPnP.ServiceInfo}.
         */
        get_service(type: string): (ServiceInfo | null);

        /**
         * Get the Unique Device Name of the device.
         * @returns A constant string.
         */
        get_udn(): string;

        /**
         * Get the Universal Product Code of the device.
         * @returns A string, or `null`. `g_free()` after use.
         */
        get_upc(): (string | null);

        /**
         * Get the URL base of this device.
         * @returns A `SoupURI`.
         */
        get_url_base(): GLib.Uri;

        /**
         * Get a {@link GLib.List} of strings representing the types of the devices
         * directly contained in `info`.
         * @returns A {@link GLib.List} of strings. The elements should be `g_free()`'d and the list should be `g_list_free()`'d.
         */
        list_device_types(): (string[] | null);

        /**
         * Get a {@link GLib.List} of new objects implementing {@link GUPnP.DeviceInfo}
         * representing the devices directly contained in `info`, excluding itself.
         * 
         * Note that devices are not cached internally, so that every time you
         * call this function new objects are created. The application
         * must cache any used devices if it wishes to keep them around and re-use
         * them.
         * @returns a {@link GLib.List} of new {@link GUPnP.DeviceInfo} objects or `null` if no devices are
         */
        list_devices(): (DeviceInfo[] | null);

        /**
         * Get a {@link GLib.List} of strings that represent the device capabilities as announced
         * in the device description file using the &lt;dlna:X_DLNACAP&gt; element.
         * @returns a {@link GLib.List} of newly allocated strings or `null` if the device description doesn't contain the &lt;dlna:X_DLNACAP&gt; element.
         */
        list_dlna_capabilities(): (string[] | null);

        /**
         * Get a list of strings that represent the device class and version as
         * announced in the device description file using the `<dlna:X_DLNADOC>`
         * element, e.g. `DMS-1.51`, `M-DMS-1.51` and so on.
         * @returns a {@link GLib.List} of newly allocated strings or `null` if the device description doesn't contain any `<dlna:X_DLNADOC>` element.
         */
        list_dlna_device_class_identifier(): (string[] | null);

        /**
         * Get a {@link GLib.List} of strings representing the types of the services
         * directly contained in `info`, but not in its subdevices.
         * @returns A {@link GLib.List} of strings. The elements should be `g_free()`'d and the list should be `g_list_free()`'d.
         */
        list_service_types(): (string[] | null);

        /**
         * Get a {@link GLib.List} of new objects implementing {@link GUPnP.ServiceInfo} representing the
         * services directly contained in `info`. The returned list should be
         * `g_list_free()`'d and the elements should be `g_object_unref()`'d.
         * 
         * Note that services are not cached internally, so that every time you call
         * function new objects are created. The application must cache any used
         * services if it wishes to keep them around and re-use them.
         * @returns A {@link GLib.List} of new {@link GUPnP.ServiceInfo} objects.
         */
        list_services(): (ServiceInfo[] | null);
    }


    namespace DeviceProxy {
        // Signal signatures
        interface SignalSignatures extends DeviceInfo.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DeviceInfo.ConstructorProps {

        }
    }

    /**
     * Interaction with remote UPnP devices.
     * 
     * {@link GUPnP.DeviceProxy} allows for retrieving proxies for a device's sub-devices
     * and services. It implements the {@link GUPnP.DeviceInfo} abstract class.
     * @gir-type Class
     */
    class DeviceProxy extends DeviceInfo {
        static $gtype: GObject.GType<DeviceProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeviceProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeviceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeviceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeviceProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ResourceFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Associating custom Services, Devices, ServiceProxies and DeviceProxies with UPnP types.
     * 
     * {@link GUPnP.ResourceFactory} objects are used by {@link GUPnP.ControlPoint},
     * {@link GUPnP.DeviceProxy} and {@link GUPnP.Device} to create resource proxy and resource
     * objects.
     * 
     * Register UPnP type - {@link GLib.Type} pairs to have resource or resource proxy
     * objects created with the specified {@link GObject.GType} whenever an object for a resource
     * of the specified UPnP type is requested. The {@link GObject.GType} needs
     * to be derived from the relevant resource or resource proxy type (e.g.
     * a device proxy type needs to be derived from {@link GUPnP.DeviceProxy}).
     * @gir-type Class
     */
    class ResourceFactory extends GObject.Object {
        static $gtype: GObject.GType<ResourceFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourceFactory.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ResourceFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ResourceFactory;

        // Signals
        /** @signal */
        connect<K extends keyof ResourceFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceFactory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ResourceFactory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceFactory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ResourceFactory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourceFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get the default singleton {@link GUPnP.ResourceFactory} object.
         */
        static get_default(): ResourceFactory;

        // Methods
        /**
         * Registers the GType `type` for the proxy of resource of UPnP type `upnp_type`.
         * After this call, the factory `factory` will create object of GType `type` each
         * time it is asked to create a resource proxy object for UPnP type `upnp_type`.
         * 
         * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE_PROXY if
         * resource is a device or #GUPNP_TYPE_SERVICE_PROXY if its a service.
         * @param upnp_type The UPnP type name of the resource.
         * @param type The requested GType assignment for the resource proxy.
         */
        register_resource_proxy_type(upnp_type: string, type: GObject.GType): void;

        /**
         * Registers the GType `type` for the resource of UPnP type `upnp_type`. After
         * this call, the factory `factory` will create object of GType `type` each time
         * it is asked to create a resource object for UPnP type `upnp_type`.
         * 
         * You can either register a type for a concrete version of a device or service
         * such as urn:schemas-upnp-org:service:AVTransport:2 or version-independently,
         * urn:schemas-upnp-org:service:AVTransport. If you register for an explicit
         * version of a service, it will be an exact match.
         * 
         * Note: GType `type` must be a derived type of #GUPNP_TYPE_DEVICE if resource is
         * a device or #GUPNP_TYPE_SERVICE if its a service.
         * @param upnp_type The UPnP type name of the resource.
         * @param type The requested GType assignment for the resource.
         */
        register_resource_type(upnp_type: string, type: GObject.GType): void;

        /**
         * Unregisters the GType assignment for the proxy of resource of UPnP type
         * `upnp_type`.
         * @param upnp_type The UPnP type name of the resource.
         * @returns `true` if GType assignment was removed successfully, `false` otherwise.
         */
        unregister_resource_proxy_type(upnp_type: string): boolean;

        /**
         * Unregisters the GType assignment for the resource of UPnP type `upnp_type`.
         * @param upnp_type The UPnP type name of the resource.
         * @returns `true` if GType assignment was removed successfully, `false` otherwise.
         */
        unregister_resource_type(upnp_type: string): boolean;
    }


    namespace RootDevice {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            "notify::available": (pspec: GObject.ParamSpec) => void;
            "notify::description-dir": (pspec: GObject.ParamSpec) => void;
            "notify::description-path": (pspec: GObject.ParamSpec) => void;
            "notify::root-device": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::device-type": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::resource-factory": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps, Gio.Initable.ConstructorProps {
            available: boolean;
            description_dir: string;
            descriptionDir: string;
            description_path: string;
            descriptionPath: string;
        }
    }

    /**
     * Implementation of an UPnP root device.
     * 
     * {@link GUPnP.RootDevice} allows for implementing root devices.
     * @gir-type Class
     */
    class RootDevice extends Device implements Gio.Initable {
        static $gtype: GObject.GType<RootDevice>;

        // Properties
        /**
         * TRUE if this device is available.
         * @default false
         */
        get available(): boolean;
        set available(val: boolean);

        /**
         * The path to a folder where description documents are provided.
         * @construct-only
         * @default null
         */
        get description_dir(): string;

        /**
         * The path to a folder where description documents are provided.
         * @construct-only
         * @default null
         */
        get descriptionDir(): string;

        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         * @since 0.13.0
         * @construct-only
         * @default null
         */
        get description_path(): string;

        /**
         * The path to device description document. This could either be an
         * absolute path or path relative to GUPnPRootDevice:description-dir.
         * @since 0.13.0
         * @construct-only
         * @default null
         */
        get descriptionPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RootDevice.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RootDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](context: Context, description_path: string, description_folder: string): RootDevice;

        static new_full(context: Context, factory: ResourceFactory, description_doc: XMLDoc, description_path: string, description_folder: string): RootDevice;

        // Signals
        /** @signal */
        connect<K extends keyof RootDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RootDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RootDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RootDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RootDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RootDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks whether `root_device` is available on the network (announcing its presence).
         * @returns `true` if `root_device` is available, `false` otherwise.
         */
        get_available(): boolean;

        /**
         * Gets the path to the directory containing description documents related to
         * `root_device`.
         * @returns The path to description document directory of `root_device`.
         */
        get_description_dir(): string;

        /**
         * Gets the name of the description document as hosted via HTTP.
         * @returns The relative location of `root_device`.
         */
        get_description_document_name(): string;

        /**
         * Gets the path to the device description document of `root_device`.
         * @returns The path to device description document of `root_device`.
         */
        get_description_path(): string;

        /**
         * Gets the {@link GSSDP.ResourceGroup} used by `root_device`.
         * @returns The {@link GSSDP.ResourceGroup} of `root_device`.
         */
        get_ssdp_resource_group(): GSSDP.ResourceGroup;

        /**
         * Sets the availability of `root_device` on the network (announcing
         * its presence).
         * @param available `true` if `root_device` should be available
         */
        set_available(available: boolean): void;

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
        init(cancellable: (Gio.Cancellable | null)): boolean;

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
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Service {
        // Signal signatures
        interface SignalSignatures extends ServiceInfo.SignalSignatures {
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever notification of a client fails.
             * @signal
             * @run-last
             */
            "notify-failed": (arg0: GLib.Uri[], arg1: GLib.Error) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable": (arg0: string, arg1: unknown) => void;
            "notify::root-device": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::root-device": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::context": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::document": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::element": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::location": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::service-type": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::udn": (arg0: ServiceAction) => void;
            /**
             * Emitted whenever an action is invoked. Handler should process
             * `action` and must call either {@link GUPnP.ServiceAction.return_success} or
             * {@link GUPnP.ServiceAction.return_error}.
             * @signal
             * @detailed
             * @run-last
             */
            "action-invoked::url-base": (arg0: ServiceAction) => void;
            [key: `action-invoked::${string}`]: (arg0: ServiceAction) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::root-device": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::context": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::document": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::element": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::location": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::service-type": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::udn": (arg0: string, arg1: unknown) => void;
            /**
             * Emitted whenever `service` needs to know the value of `variable`.
             * Handler should fill `value` with the value of `variable`.
             * @signal
             * @detailed
             * @run-last
             */
            "query-variable::url-base": (arg0: string, arg1: unknown) => void;
            [key: `query-variable::${string}`]: (arg0: string, arg1: unknown) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ServiceInfo.ConstructorProps {
            root_device: RootDevice;
            rootDevice: RootDevice;
        }
    }

    /**
     * Implementation of an UPnP service
     * 
     * {@link GUPnP.Service} allows for handling incoming actions and state variable
     * notification. It implements the {@link GUPnP.ServiceInfo} interface.
     * 
     * To implement a service, you can either connect to the `GUPnP.Service::action-invoked`
     * and `GUPnP.Service::query-variable` or derive from the {@link GUPnP.Service} class and override
     * the virtual functions {@link GUPnP.Service.action_invoked} and  {@link GUPnP.Service.query_variable}.
     * 
     * For more details, see the ["Implementing UPnP devices"](server-tutorial.html#implementing-a-service) document
     * @gir-type Class
     */
    class Service extends ServiceInfo {
        static $gtype: GObject.GType<Service>;

        // Properties
        /**
         * The containing {@link GUPnP.RootDevice}.
         * @construct-only
         */
        get root_device(): RootDevice;

        /**
         * The containing {@link GUPnP.RootDevice}.
         * @construct-only
         */
        get rootDevice(): RootDevice;

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

        // Signals
        /** @signal */
        connect<K extends keyof Service.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Service.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Service.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Service.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Default handler for `GUPnP.Service::action_invoked`. See its documentation for details.
         * 
         * Can be overridden by child classes instead of connecting to the signal.
         * @param action a {@link GUPnP.ServiceAction}
         * @virtual
         */
        vfunc_action_invoked(action: ServiceAction): void;

        /**
         * Default handler for `GUPnP.Service::notify_failed`. See its documentation for details.
         * 
         * Can be overridden by child classes instead of connecting to the signal.
         * @param callback_urls a list of call-back urls that failed the notification
         * @param reason An error that describes why the notification failed
         * @virtual
         */
        vfunc_notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;

        /**
         * Default handler for `GUPnP.Service::query_variable`. See its documentation for details.
         * 
         * Can be overridden by child classes instead of connecting to the signal.
         * @param variable the name of the variable that was queried
         * @param value a value that should be filled to the current value of `variable`
         * @virtual
         */
        vfunc_query_variable(variable: string, value: unknown): void;

        // Methods
        /**
         * Default handler for `GUPnP.Service::action_invoked`. See its documentation for details.
         * 
         * Can be overridden by child classes instead of connecting to the signal.
         * @param action a {@link GUPnP.ServiceAction}
         */
        action_invoked(action: ServiceAction): void;

        /**
         * Stops sending out notifications to remote clients.
         * 
         * It causes new notifications to be queued up until {@link GUPnP.Service.thaw_notify} is called.
         */
        freeze_notify(): void;

        /**
         * Default handler for `GUPnP.Service::notify_failed`. See its documentation for details.
         * 
         * Can be overridden by child classes instead of connecting to the signal.
         * @param callback_urls a list of call-back urls that failed the notification
         * @param reason An error that describes why the notification failed
         */
        notify_failed(callback_urls: GLib.Uri[], reason: GLib.Error): void;

        /**
         * Notifies remote clients that `variable` has changed to `value`.
         * @param variable the name of the variable to notify
         * @param value the value of the variable
         */
        notify_value(variable: string, value: (GObject.Value | any)): void;

        /**
         * Default handler for `GUPnP.Service::query_variable`. See its documentation for details.
         * 
         * Can be overridden by child classes instead of connecting to the signal.
         * @param variable the name of the variable that was queried
         * @param value a value that should be filled to the current value of `variable`
         */
        query_variable(variable: string, value: (GObject.Value | any)): void;

        /**
         * Sends out any pending notifications, and stops queuing of new ones.
         */
        thaw_notify(): void;
    }


    namespace ServiceInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            document: XMLDoc;
            element: never;
            location: string;
            service_type: string;
            serviceType: string;
            udn: string;
            url_base: GLib.Uri;
            urlBase: GLib.Uri;
        }
    }

    /**
     * Service information shared by local and remote services.
     * 
     * A class that contains the common parts between local and remote services.
     * @gir-type Class
     */
    abstract class ServiceInfo extends GObject.Object {
        static $gtype: GObject.GType<ServiceInfo>;

        // Properties
        /**
         * The {@link GUPnP.Context} to use.
         * @construct-only
         */
        get context(): Context;

        /**
         * Private property.
         * @construct-only
         */
        set document(val: XMLDoc);

        /**
         * Private property.
         * @construct-only
         */
        set element(val: never);

        /**
         * The location of the device description file.
         * @construct-only
         * @default null
         */
        get location(): string;

        /**
         * The service type.
         * @construct-only
         * @default null
         */
        get service_type(): string;

        /**
         * The service type.
         * @construct-only
         * @default null
         */
        get serviceType(): string;

        /**
         * The UDN of the containing device.
         * @construct-only
         * @default null
         */
        get udn(): string;

        /**
         * The URL base (`SoupURI`).
         * @construct-only
         */
        get url_base(): GLib.Uri;

        /**
         * The URL base (`SoupURI`).
         * @construct-only
         */
        get urlBase(): GLib.Uri;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServiceInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ServiceInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ServiceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ServiceInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ServiceInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the {@link GUPnP.Context} associated with `info`.
         * @returns A {@link GUPnP.Context}.
         */
        get_context(): Context;

        /**
         * Get the control URL for this service, or `null`..
         * @returns A string. This string should be freed with `g_free()` after use.
         */
        get_control_url(): string;

        /**
         * Get the event subscription URL for this service, or `null`.
         * @returns A string. This string should be freed with `g_free()` after use.
         */
        get_event_subscription_url(): string;

        /**
         * Get the serviceID of this service, or `null` if there is no ID.
         * 
         * The serviceID should be unique to a device. This makes it possible to provide
         * the same serviceType multiple times on one device
         * 
         * Example: `org:serviceId:RenderingControl`
         * @returns A string. This string should be freed with `g_free()` after use.
         */
        get_id(): string;

        /**
         * Get the location of the device description file.
         * @returns A constant string.
         */
        get_location(): string;

        /**
         * Get the SCPD URL for this service, or `null` if there is no SCPD.
         * @returns A string. This string should be freed with `g_free()` after use.
         */
        get_scpd_url(): string;

        /**
         * Get the UPnP service type, or `null`.
         * 
         * Example: `urn:schemas-upnp-org:service:RenderingControl:1`
         * @returns A constant string.
         */
        get_service_type(): string;

        /**
         * Get the Unique Device Name of the containing device.
         * @returns A constant string.
         */
        get_udn(): string;

        /**
         * Get the URL base of this service.
         * @returns A constant `SoupURI`.
         */
        get_url_base(): GLib.Uri;

        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide a SCPD.
         * 
         * If `cancellable` is used to cancel the call, `callback` will be called with
         * error code {@link Gio.IOErrorEnum.CANCELLED}.
         * @param cancellable a {@link Gio.Cancellable} that can be used to cancel the call.
         */
        introspect_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<(ServiceIntrospection | null)>;

        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide a SCPD.
         * 
         * If `cancellable` is used to cancel the call, `callback` will be called with
         * error code {@link Gio.IOErrorEnum.CANCELLED}.
         * @param cancellable a {@link Gio.Cancellable} that can be used to cancel the call.
         * @param callback callback to be called when introspection object is ready.
         */
        introspect_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Note that introspection object is created from the information in service
         * description document (SCPD) provided by the service so it can not be created
         * if the service does not provide a SCPD.
         * 
         * If `cancellable` is used to cancel the call, `callback` will be called with
         * error code {@link Gio.IOErrorEnum.CANCELLED}.
         * @param cancellable a {@link Gio.Cancellable} that can be used to cancel the call.
         * @param callback callback to be called when introspection object is ready.
         */
        introspect_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(ServiceIntrospection | null)> | void);

        /**
         * Finish an asynchronous call initiated with
         * `gupnp_service_info_introspect_async()`.
         * @param res A {@link Gio.AsyncResult}
         * @returns `null`, if the call had an error, a {@link GUPnP.ServiceIntrospection} object otherwise.
         */
        introspect_finish(res: Gio.AsyncResult): (ServiceIntrospection | null);
    }


    namespace ServiceIntrospection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::scpd": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            scpd: never;
        }
    }

    /**
     * Introspection of local and remote services..
     * 
     * The {@link GUPnP.ServiceIntrospection} class provides methods for service
     * introspection based on information contained in its service description
     * document (SCPD). There is no constructor provided for this class, please use
     * {@link GUPnP.ServiceInfo.introspect_async} to create a
     * {@link GUPnP.ServiceIntrospection} object for a specific service.
     * 
     * Note that all the introspection information is retrieved from the service
     * description document (SCPD) provided by the service and hence can not be
     * guaranteed to be complete. An UPnP service is required to provide a SCPD but
     * unfortunately, many services either do not provide this document or the
     * document does not provide any or all of the introspection information.
     * 
     * This class exposes internals of the UPnP protocol and should not need
     * to be used for regular device or control point development.
     * @gir-type Class
     */
    class ServiceIntrospection extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<ServiceIntrospection>;

        // Properties
        /**
         * The scpd of the device description file.
         * @construct-only
         */
        set scpd(val: never);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServiceIntrospection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ServiceIntrospection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ServiceIntrospection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceIntrospection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ServiceIntrospection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceIntrospection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ServiceIntrospection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceIntrospection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the action by the name `action_name` in this service.
         * @param action_name The name of the action to retrieve
         * @returns the action or `null`. Do not modify or free it.
         */
        get_action(action_name: string): (ServiceActionInfo | null);

        /**
         * Returns the state variable by the name `variable_name` in this service.
         * @param variable_name The name of the variable to retrieve
         * @returns the state variable or `null`. Do not modify or free it.
         */
        get_state_variable(variable_name: string): (ServiceStateVariableInfo | null);

        /**
         * Returns a GList of names of all the actions in this service.
         * @returns A GList of names of all the actions or `null`. Do not modify or free it or its contents.
         */
        list_action_names(): string[];

        /**
         * Returns a {@link GLib.List} of all the actions (of type {@link GUPnP.ServiceActionInfo}) in
         * this service.
         * @returns A {@link GLib.List} of all the actions or `null`. Do not modify or free it or its contents.
         */
        list_actions(): ServiceActionInfo[];

        /**
         * Returns a {@link GLib.List} of names of all the state variables in this service.
         * @returns A {@link GLib.List} of names of all the state variables or `null`. Do not modify or free it or its contents.
         */
        list_state_variable_names(): string[];

        /**
         * Returns a GList of all the state variables (of type
         * {@link GUPnP.ServiceStateVariableInfo}) in this service.
         * @returns A {@link GLib.List} of all the state variables or `null`. Do not modify or free it or its contents.
         */
        list_state_variables(): ServiceStateVariableInfo[];

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
        init(cancellable: (Gio.Cancellable | null)): boolean;

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
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace ServiceProxy {
        // Signal signatures
        interface SignalSignatures extends ServiceInfo.SignalSignatures {
            /**
             * Emitted whenever the subscription to this service has been lost due
             * to an error condition.
             * @signal
             * @run-last
             */
            "subscription-lost": (arg0: GLib.Error) => void;
            "notify::subscribed": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::document": (pspec: GObject.ParamSpec) => void;
            "notify::element": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::service-type": (pspec: GObject.ParamSpec) => void;
            "notify::udn": (pspec: GObject.ParamSpec) => void;
            "notify::url-base": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ServiceInfo.ConstructorProps {
            subscribed: boolean;
        }
    }

    /**
     * Proxy class for remote services.
     * 
     * {@link GUPnP.ServiceProxy} sends commands to a remote UPnP service and handles
     * incoming event notifications.
     * @gir-type Class
     */
    class ServiceProxy extends ServiceInfo {
        static $gtype: GObject.GType<ServiceProxy>;

        // Properties
        /**
         * Whether we are subscribed to this service.
         * @default false
         */
        get subscribed(): boolean;
        set subscribed(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServiceProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ServiceProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ServiceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ServiceProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ServiceProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ServiceProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ServiceProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param reason 
         * @virtual
         */
        vfunc_subscription_lost(reason: GLib.Error): void;

        // Methods
        /**
         * Sets up `callback` to be called whenever a change notification for
         * `variable` is recieved.
         * @param variable The variable to add notification for
         * @param type The type of the variable
         * @param callback The callback to call when `variable` changes
         * @returns `true` on success.
         */
        add_notify(variable: string, type: GObject.GType, callback: ServiceProxyNotifyCallback): boolean;

        /**
         * Get a notification for anything that happens on the peer.
         * 
         * `value` in `callback` will be of type G_TYPE_POINTER and contain the pre-parsed
         * {@link libxml2.Doc}. Do NOT free or modify this document.
         * @param callback The callback to call when the peer issues any variable notification.
         * @returns `true` on success.
         */
        add_raw_notify(callback: ServiceProxyNotifyCallback): boolean;

        /**
         * Synchronously call the `action` on the remote UPnP service.
         * @param action An action
         * @param cancellable A {@link Gio.Cancellable} which can be used to cancel the current action call
         * @returns `null` on error, `action` if successful.
         */
        call_action(action: ServiceProxyAction, cancellable: (Gio.Cancellable | null)): (ServiceProxyAction | null);

        /**
         * Start a call on the remote UPnP service using the pre-configured `action`.
         * Use `gupnp_service_proxy_call_action_finish()` in the `callback` to finalize
         * the call and `gupnp_service_proxy_action_get_result()`,
         * `gupnp_service_proxy_action_get_result_hash()` or
         * `gupnp_service_proxy_action_get_result_list()` to extract the result of the
         * remote call.
         * @param action A {@link GUPnP.ServiceProxyAction} to call
         * @param cancellable A {@link Gio.Cancellable} which can be used to cancel the current action call
         */
        call_action_async(action: ServiceProxyAction, cancellable: (Gio.Cancellable | null)): globalThis.Promise<(ServiceProxyAction | null)>;

        /**
         * Start a call on the remote UPnP service using the pre-configured `action`.
         * Use `gupnp_service_proxy_call_action_finish()` in the `callback` to finalize
         * the call and `gupnp_service_proxy_action_get_result()`,
         * `gupnp_service_proxy_action_get_result_hash()` or
         * `gupnp_service_proxy_action_get_result_list()` to extract the result of the
         * remote call.
         * @param action A {@link GUPnP.ServiceProxyAction} to call
         * @param cancellable A {@link Gio.Cancellable} which can be used to cancel the current action call
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the action is finished.
         */
        call_action_async(action: ServiceProxyAction, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Start a call on the remote UPnP service using the pre-configured `action`.
         * Use `gupnp_service_proxy_call_action_finish()` in the `callback` to finalize
         * the call and `gupnp_service_proxy_action_get_result()`,
         * `gupnp_service_proxy_action_get_result_hash()` or
         * `gupnp_service_proxy_action_get_result_list()` to extract the result of the
         * remote call.
         * @param action A {@link GUPnP.ServiceProxyAction} to call
         * @param cancellable A {@link Gio.Cancellable} which can be used to cancel the current action call
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the action is finished.
         */
        call_action_async(action: ServiceProxyAction, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(ServiceProxyAction | null)> | void);

        /**
         * Finish an asynchronous call initiated with
         * `gupnp_service_proxy_call_action_async()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `null`, if the call had an error, the action otherwise.
         */
        call_action_finish(result: Gio.AsyncResult): (ServiceProxyAction | null);

        /**
         * Returns if we are subscribed to this service.
         * @returns `true` if we are subscribed to this service, otherwise `false`.
         */
        get_subscribed(): boolean;

        /**
         * Cancels the variable change notification for `callback` and `user_data`.
         * 
         * Up to version 0.20.9 this function must not be called directlya or
         * indirectly from a {@link GUPnP.ServiceProxyNotifyCallback} associated with this
         * service proxy, even if it is for another variable. In later versions such
         * calls are allowed.
         * @param variable The variable to add notification for
         * @param callback The callback to call when `variable` changes
         * @returns `true` on success.
         */
        remove_notify(variable: string, callback: ServiceProxyNotifyCallback): boolean;

        /**
         * Cancels the variable change notification for `callback` and `user_data`.
         * 
         * This function must not be called directly or indirectly from a
         * {@link GUPnP.ServiceProxyNotifyCallback} associated with this service proxy, even
         * if it is for another variable.
         * @param callback The callback to call when `variable` changes
         * @returns `true` on success.
         */
        remove_raw_notify(callback: ServiceProxyNotifyCallback): boolean;

        /**
         * Sets user and password for authentication
         * @param user user name for authentication
         * @param password user password for authentication
         */
        set_credentials(user: string, password: string): void;

        /**
         * (Un)subscribes to this service.
         * 
         * <note>The relevant messages are not immediately sent but queued.
         * If you want to unsubcribe from this service because the application
         * is quitting, rely on automatic synchronised unsubscription on object
         * destruction instead.</note>
         * @param subscribed `true` to subscribe to this service
         */
        set_subscribed(subscribed: boolean): void;
    }


    namespace XMLDoc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::doc": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            doc: never;
            path: string;
        }
    }

    /**
     * Reference-counting wrapper for libxml's #xmlDoc
     * @gir-type Class
     * @since 0.14.0
     */
    class XMLDoc extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<XMLDoc>;

        // Properties
        /**
         * @construct-only
         */
        set doc(val: never);

        /**
         * @construct-only
         * @default null
         */
        set path(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XMLDoc.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<XMLDoc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](xml_doc: libxml2.Doc): XMLDoc;

        static new_from_path(path: string): XMLDoc;

        // Signals
        /** @signal */
        connect<K extends keyof XMLDoc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XMLDoc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof XMLDoc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XMLDoc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof XMLDoc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<XMLDoc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns a pointer to the wrapped #xmlDoc
         */
        get_doc(): libxml2.Doc;

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
        init(cancellable: (Gio.Cancellable | null)): boolean;

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
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
    type AclInterface = typeof Acl;

    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;

    /**
     * @gir-type Alias
     */
    type ContextFilterClass = typeof ContextFilter;

    /**
     * @gir-type Alias
     */
    type ContextManagerClass = typeof ContextManager;

    /**
     * @gir-type Alias
     */
    type ControlPointClass = typeof ControlPoint;

    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Alias
     */
    type DeviceInfoClass = typeof DeviceInfo;

    /**
     * @gir-type Alias
     */
    type DeviceProxyClass = typeof DeviceProxy;

    /**
     * @gir-type Alias
     */
    type ResourceFactoryClass = typeof ResourceFactory;

    /**
     * @gir-type Alias
     */
    type RootDeviceClass = typeof RootDevice;

    /**
     * Opaque structure for holding in-progress action data.
     * @gir-type Struct
     */
    abstract class ServiceAction {
        static $gtype: GObject.GType<ServiceAction>;

        // Methods
        /**
         * Get the number of IN arguments from the `action` and return it.
         * @returns The number of IN arguments from the `action`.
         */
        get_argument_count(): number;

        /**
         * Retrieves the value of `argument` into a GValue of type `type` and returns it.
         * The method exists only and only to satify PyGI, please use
         * `gupnp_service_action_get_value()` and ignore this if possible.
         * @param argument The name of the argument to retrieve
         * @param type The type of argument to retrieve
         * @returns Value as {@link GObject.Value} associated with `action`. `g_value_unset()` and `g_slice_free()` it after usage.
         */
        get_value(argument: string, type: GObject.GType): unknown;

        /**
         * Get an ordered (preferred first) {@link GLib.List} of locales preferred by
         * the client. Free list and elements after use.
         * @returns A {@link GLib.List} of #char* locale names.
         */
        get_locales(): string[];

        /**
         * Get the {@link Soup.Message} associated with `action`. Mainly intended for
         * applications to be able to read HTTP headers received from clients.
         * @returns {@link Soup.ServerMessage} associated with `action`. Unref after using it.
         */
        get_message(): Soup.ServerMessage;

        /**
         * Get the name of `action`.
         * @returns The name of `action`
         */
        get_name(): string;

        /**
         * A variant of `gupnp_service_action_get` that uses {@link GLib.List} instead of varargs.
         * @param arg_names A {@link GLib.List} of argument names as string
         * @param arg_types A {@link GLib.List} of argument types as {@link GObject.GType}
         * @returns The values as {@link GLib.List} of {@link GObject.Value}. `g_list_free()` the returned list and `g_value_unset()` and `g_slice_free()` each element.
         */
        get_values(arg_names: string[], arg_types: GObject.GType[]): unknown[];

        /**
         * Return `error_code`.
         * @param error_code The error code
         * @param error_description The error description, or `null` if `error_code` is one of #GUPNP_CONTROL_ERROR_INVALID_ACTION, #GUPNP_CONTROL_ERROR_INVALID_ARGS, #GUPNP_CONTROL_ERROR_OUT_OF_SYNC or #GUPNP_CONTROL_ERROR_ACTION_FAILED, in which case a description is provided automatically.
         */
        return_error(error_code: number, error_description: string): void;

        /**
         * Return successfully.
         */
        return_success(): void;

        /**
         * Sets the value of `argument` to `value`.
         * @param argument The name of the return value to retrieve
         * @param value The {@link GObject.Value} to store the return value
         */
        set_value(argument: string, value: (GObject.Value | any)): void;

        /**
         * Sets the specified action return values.
         * @param arg_names A {@link GLib.List} of argument names
         * @param arg_values The {@link GLib.List} of values (as {@link GObject.Value}<!-- -->s) that line up with `arg_names`.
         */
        set_values(arg_names: string[], arg_values: (GObject.Value | any)[]): void;
    }


    /**
     * This structure contains information about the argument of service action.
     * @gir-type Struct
     */
    class ServiceActionArgInfo {
        static $gtype: GObject.GType<ServiceActionArgInfo>;

        // Fields
        name: string;

        direction: ServiceActionArgDirection;

        related_state_variable: string;

        retval: boolean;
    }


    /**
     * This structure contains information about a service action.
     * @gir-type Struct
     */
    class ServiceActionInfo {
        static $gtype: GObject.GType<ServiceActionInfo>;

        // Fields
        name: string;

        "arguments": ServiceActionArgInfo[];
    }


    /**
     * @gir-type Alias
     */
    type ServiceClass = typeof Service;

    /**
     * @gir-type Alias
     */
    type ServiceInfoClass = typeof ServiceInfo;

    /**
     * @gir-type Alias
     */
    type ServiceIntrospectionClass = typeof ServiceIntrospection;

    /**
     * Opaque structure for holding in-progress action data.
     * @gir-type Struct
     */
    class ServiceProxyAction {
        static $gtype: GObject.GType<ServiceProxyAction>;

        // Constructors
        constructor(action: string, ___: any[]);

        static new_from_list(action: string, in_names: string[], in_values: (GObject.Value | any)[]): ServiceProxyAction;

        // Methods
        /**
         * See `gupnp_service_proxy_action_get_result()`; this version takes a {@link GLib.HashTable} for
         * runtime generated parameter lists.
         * 
         * The `out_hash` needs to be pre-initialized with key value pairs denoting the argument
         * to retrieve and an empty {@link GObject.Value} initialized to hold the wanted type with `g_value_init()`.
         * 
         * ```c
         * void on_action_finished(GObject *object, GAsyncResult *res, gpointer user_data)
         * {
         *     GUPnPServiceProxyAction *action;
         *     GError *error;
         * 
         *     action = gupnp_service_proxy_call_action_finish (GUPNP_SERVICE_PROXY (object),
         *                                                      res,
         *                                                      &error);
         * 
         *     if (error != NULL) {
         *              g_print ("Call failed: %s", error->message);
         *              g_clear_error (&error);
         *              return;
         *     }
         * 
         *     GValue play_mode = G_VALUE_INIT;
         *     g_value_init(&play_mode, G_TYPE_STRING);
         *     GValue rec_quality_mode = G_VALUE_INIT;
         *     g_value_init(&rec_quality_mode, G_TYPE_STRING);
         * 
         *     GHashTable *out_args = g_hash_table_new (g_str_hash, g_str_equal);
         *     g_hash_table_insert(out_args, "PlayMode", &play_mode);
         *     g_hash_table_insert(out_args, "RecQualityMode", &rec_quality_mode);
         * 
         *     if (!gupnp_service_proxy_action_get_result_hash (action,
         *                                                      out_args,
         *                                                      &error)) {
         *              g_print ("Getting results failed: %s", error->message);
         *              g_clear_error (&error);
         *              return;
         *     }
         * 
         *     g_value_unset (&play_mode);
         *     g_value_unset (&rec_quality_mode);
         * 
         *     g_hash_table_unref (out_args);
         * }
         * ```
         * @param out_hash A {@link GLib.HashTable} of out parameter name and initialised {@link GObject.Value} pairs
         * @returns `true` on success.
         */
        get_result_hash(out_hash: ({ [key: string]: any } | GLib.HashTable<string, GObject.Value>)): [boolean, GLib.HashTable<string, GObject.Value>];

        /**
         * A variant of `gupnp_service_proxy_action_get_result()` that takes lists of
         * out-parameter names, types and place-holders for values.
         * 
         * The returned list in `out_values` must be freed using `g_list_free` and each element
         * in it using `g_value_unset` and `g_free`.
         * ```c
         * void on_action_finished(GObject *object, GAsyncResult *res, gpointer user_data)
         * {
         *     GUPnPServiceProxyAction *action;
         *     GError *error;
         * 
         *     action = gupnp_service_proxy_call_action_finish (GUPNP_SERVICE_PROXY (object),
         *                                                      res,
         *                                                      &error);
         * 
         *     if (error != NULL) {
         *              g_print ("Call failed: %s", error->message);
         *              g_clear_error (&error);
         *              return;
         *     }
         * 
         *     GList *out_args = NULL;
         *     out_args = g_list_append (out_args, "PlayMode");
         *     out_args = g_list_append (out_args, "RecQualityMode");
         *     GList *out_types = NULL;
         *     out_types = g_list_append (out_types, GSIZE_TO_POINTER (G_TYPE_STRING));
         *     out_types = g_list_append (out_types, GSIZE_TO_POINTER (G_TYPE_STRING));
         *     GList *out_values = NULL;
         * 
         *     if (!gupnp_service_proxy_action_get_result_list (action,
         *                                                      out_args,
         *                                                      out_types,
         *                                                      &out_values,
         *                                                      &error)) {
         *              g_print ("Getting results failed: %s", error->message);
         *              g_clear_error (&error);
         *              return;
         *     }
         * 
         *     GList *iter = out_values;
         *     while (iter != NULL) {
         *         GValue *value = iter->data;
         *         g_print ("Result: %s\n", g_value_get_string (value));
         *         g_value_unset (value);
         *         g_free (value);
         *         iter = g_list_remove_link (iter, iter);
         *     }
         *     g_list_free (out_values);
         * }
         * ```
         * @param out_names {@link GLib.List} of 'out' parameter names (as strings)
         * @param out_types {@link GLib.List} of types (as {@link GObject.GType}) that line up with `out_names`
         * @returns `true` on success.
         */
        get_result_list(out_names: string[], out_types: GObject.GType[]): [boolean, unknown[]];

        /**
         * Increases reference count of `action`
         * @returns `action` with an increased reference count
         */
        ref(): (ServiceProxyAction | null);

        /**
         * Update the value of `key` to `value`.
         * 
         * `key` needs to already exist in `action`.
         * @param key the name of the value to modify
         * @param value the new value of `key`
         * @returns true if successfully modified, false otherwise
         */
        set(key: string, value: (GObject.Value | any)): boolean;

        /**
         * Decreases reference count of `action`. If reference count drops to 0,
         * the action and its contents will be freed.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type ServiceProxyClass = typeof ServiceProxy;

    /**
     * This structure contains information about service state variable.
     * @gir-type Struct
     */
    class ServiceStateVariableInfo {
        static $gtype: GObject.GType<ServiceStateVariableInfo>;

        // Fields
        name: string;

        send_events: boolean;

        is_numeric: boolean;

        type: GObject.GType;

        allowed_values: string[];
    }


    /**
     * @gir-type Alias
     */
    type XMLDocClass = typeof XMLDoc;

    namespace Acl {
        /**
         * Interface for implementing Acl.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Check whether {@link GUPnP.Acl.is_allowed_async} is supported.
             * @virtual
             */
            vfunc_can_sync(): boolean;

            /**
             * Check whether an IP address is allowed to access this resource.
             * @param device The {@link GUPnP.Device} associated with `path` or `null` if unknown.
             * @param service The {@link GUPnP.Service} associated with `path` or `null` if unknown.
             * @param path The path being served.
             * @param address IP address of the peer.
             * @param agent The User-Agent header of the peer or `null` if unknown. `returns` `true` if the peer is allowed, `false` otherwise
             * @virtual
             */
            vfunc_is_allowed(device: null, service: null, path: string, address: string, agent: (string | null)): boolean;

            /**
             * Check asynchronously whether an IP address is allowed to access
             * this resource.
             * 
             * This function is optional. {@link GUPnP.Acl.can_sync} should return `true`
             * if the implementing class supports it. If it is supported, GUPnP will
             * prefer to use this function over {@link GUPnP.Acl.is_allowed}.
             * 
             * Implement this function if the process of verifying the access right
             * is expected to take some time, for example when using D-Bus etc.
             * 
             * Use {@link GUPnP.Acl.is_allowed_finish} to retrieve the result.
             * @param device The {@link GUPnP.Device} associated with `path` or `null` if unknown.
             * @param service The {@link GUPnP.Service} associated with `path` or `null` if unknown.
             * @param path The path being served.
             * @param address IP address of the peer
             * @param agent The User-Agent header of the peer or `null` if not unknown.
             * @param cancellable A cancellable which can be used to cancel the operation.
             * @param callback Callback to call after the function is done.
             * @virtual
             */
            vfunc_is_allowed_async(device: null, service: null, path: string, address: string, agent: (string | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Get the result of {@link GUPnP.Acl.is_allowed_async}.
             * @param res {@link Gio.AsyncResult} obtained from the callback passed to {@link GUPnP.Acl.is_allowed_async}
             * @virtual
             */
            vfunc_is_allowed_finish(res: Gio.AsyncResult): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface AclNamespace {
        $gtype: GObject.GType<Acl>;
        prototype: Acl;
    }
    /**
     * Access control provider for {@link GUPnP.Context}
     * 
     * GUPnPAcl provides either synchronous or asynchronous functions to check
     * whether a peer should be able to access a resource that is hosted by GUPnP or not.
     * @gir-type Interface
     * @since 0.20.11
     */
    interface Acl extends GObject.Object, Acl.Interface {

        // Methods
        /**
         * Check whether {@link GUPnP.Acl.is_allowed_async} is supported.
         */
        can_sync(): boolean;

        /**
         * Check whether an IP address is allowed to access this resource.
         * @param device The {@link GUPnP.Device} associated with `path` or `null` if unknown.
         * @param service The {@link GUPnP.Service} associated with `path` or `null` if unknown.
         * @param path The path being served.
         * @param address IP address of the peer.
         * @param agent The User-Agent header of the peer or `null` if unknown. `returns` `true` if the peer is allowed, `false` otherwise
         */
        is_allowed(device: null, service: null, path: string, address: string, agent: (string | null)): boolean;

        /**
         * Check asynchronously whether an IP address is allowed to access
         * this resource.
         * 
         * This function is optional. {@link GUPnP.Acl.can_sync} should return `true`
         * if the implementing class supports it. If it is supported, GUPnP will
         * prefer to use this function over {@link GUPnP.Acl.is_allowed}.
         * 
         * Implement this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         * 
         * Use {@link GUPnP.Acl.is_allowed_finish} to retrieve the result.
         * @param device The {@link GUPnP.Device} associated with `path` or `null` if unknown.
         * @param service The {@link GUPnP.Service} associated with `path` or `null` if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or `null` if not unknown.
         * @param cancellable A cancellable which can be used to cancel the operation.
         */
        is_allowed_async(device: null, service: null, path: string, address: string, agent: (string | null), cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Check asynchronously whether an IP address is allowed to access
         * this resource.
         * 
         * This function is optional. {@link GUPnP.Acl.can_sync} should return `true`
         * if the implementing class supports it. If it is supported, GUPnP will
         * prefer to use this function over {@link GUPnP.Acl.is_allowed}.
         * 
         * Implement this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         * 
         * Use {@link GUPnP.Acl.is_allowed_finish} to retrieve the result.
         * @param device The {@link GUPnP.Device} associated with `path` or `null` if unknown.
         * @param service The {@link GUPnP.Service} associated with `path` or `null` if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or `null` if not unknown.
         * @param cancellable A cancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        is_allowed_async(device: null, service: null, path: string, address: string, agent: (string | null), cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Check asynchronously whether an IP address is allowed to access
         * this resource.
         * 
         * This function is optional. {@link GUPnP.Acl.can_sync} should return `true`
         * if the implementing class supports it. If it is supported, GUPnP will
         * prefer to use this function over {@link GUPnP.Acl.is_allowed}.
         * 
         * Implement this function if the process of verifying the access right
         * is expected to take some time, for example when using D-Bus etc.
         * 
         * Use {@link GUPnP.Acl.is_allowed_finish} to retrieve the result.
         * @param device The {@link GUPnP.Device} associated with `path` or `null` if unknown.
         * @param service The {@link GUPnP.Service} associated with `path` or `null` if unknown.
         * @param path The path being served.
         * @param address IP address of the peer
         * @param agent The User-Agent header of the peer or `null` if not unknown.
         * @param cancellable A cancellable which can be used to cancel the operation.
         * @param callback Callback to call after the function is done.
         */
        is_allowed_async(device: null, service: null, path: string, address: string, agent: (string | null), cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Get the result of {@link GUPnP.Acl.is_allowed_async}.
         * @param res {@link Gio.AsyncResult} obtained from the callback passed to {@link GUPnP.Acl.is_allowed_async}
         */
        is_allowed_finish(res: Gio.AsyncResult): boolean;
    }


    export const Acl: AclNamespace & {
        new (): Acl; // This allows `obj instanceof Acl`
    };

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

export default GUPnP;

// END
