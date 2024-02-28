/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './epc-1.0-ambient.d.ts';
import './epc-1.0-import.d.ts';
/**
 * Epc-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Epc {
    /**
     * The address family to use for contacting network services.
     */
    enum AddressFamily {
        UNSPEC,
        IPV4,
        IPV6,
    }
    /**
     * Various strategies for handling service name collisions.
     */
    enum CollisionHandling {
        IGNORE,
        CHANGE_NAME,
        UNIQUE_SERVICE,
    }
    /**
     * The transport protocols supported by libepc.
     */
    enum Protocol {
        UNKNOWN,
        HTTP,
        HTTPS,
    }
    const SERVICE_TYPE_HTTP: string;
    const SERVICE_TYPE_HTTPS: string;
    const TLS_SECONDS_PER_DAY: number;
    const TLS_SECONDS_PER_HOUR: number;
    const TLS_SECONDS_PER_MINUTE: number;
    function address_family_to_string(value: AddressFamily): string;
    function auth_flags_to_string(value: AuthFlags): string;
    function avahi_error_quark(): GLib.Quark;
    function collision_handling_to_string(value: CollisionHandling): string;
    function http_error_quark(): GLib.Quark;
    function protocol_build_uri(protocol: Protocol, hostname: string, port: number, path: string): string;
    function protocol_from_name(name: string, fallback: Protocol): Protocol;
    function protocol_get_service_type(protocol: Protocol): string;
    function protocol_get_uri_scheme(protocol: Protocol): string;
    function protocol_to_string(value: Protocol): string;
    function service_type_get_base(type: string): string;
    function service_type_get_protocol(service_type: string): Protocol;
    function service_type_new(protocol: Protocol, application: string): string;
    function shell_get_debug_level(): number;
    function shell_get_host_name(): string;
    function shell_progress_begin(title: string, message: string): void;
    function shell_progress_end(): void;
    function shell_progress_update(percentage: number, message: string): void;
    function shell_restart_avahi_client(strloc: string): void;
    function shell_set_progress_hooks(hooks: ShellProgressHooks, user_data: any): void;
    function shell_watch_remove(id: number): void;
    function tls_error_quark(): GLib.Quark;
    function tls_get_certificate_filename(hostname: string): string;
    function tls_get_private_key_filename(hostname: string): string;
    function tls_get_server_credentials(hostname: string, crtfile: string, keyfile: string): boolean;
    interface AuthHandler {
        (context: AuthContext, username: string): boolean;
    }
    interface ContentsHandler {
        (publisher: Publisher, key: string): Contents;
    }
    interface ContentsReadFunc {
        (contents: Contents, buffer: any, length: number): boolean;
    }
    /**
     * These flags specify the authentication behaviour of an #EpcPublisher.
     */
    enum AuthFlags {
        DEFAULT,
        PASSWORD_TEXT_NEEDED,
    }
    module Consumer {
        // Signal callback interfaces

        interface Authenticate {
            (object: string): boolean;
        }

        interface PublisherResolved {
            (object: Protocol, p0: string, p1: number): void;
        }

        // Constructor properties interface
    }

    /**
     * Public fields of the #EpcConsumer class.
     */
    class Consumer extends GObject.Object {
        // Own properties of Epc-1.0.Consumer

        application: string;
        domain: string;
        hostname: string;
        name: string;
        password: string;
        path: string;
        port: number;
        protocol: Protocol;
        username: string;

        // Constructors of Epc-1.0.Consumer

        static ['new'](service: ServiceInfo): Consumer;

        static new_for_name(name: string): Consumer;

        static new_for_name_full(name: string, application: string, domain: string): Consumer;

        // Owm methods of Epc-1.0.Consumer

        get_password(): string;
        get_protocol(): Protocol;
        get_username(): string;
        is_publisher_resolved(): boolean;
        resolve_publisher(timeout: number): boolean;
        set_password(password: string): void;
        set_protocol(protocol: Protocol): void;
        set_username(username: string): void;
    }

    module Dispatcher {
        // Constructor properties interface
    }

    /**
     * Public fields of the #EpcDispatcher class.
     */
    class Dispatcher extends GObject.Object {
        // Own properties of Epc-1.0.Dispatcher

        collision_handling: CollisionHandling;
        collisionHandling: CollisionHandling;
        cookie: string;
        name: string;

        // Constructors of Epc-1.0.Dispatcher

        static ['new'](name: string): Dispatcher;

        // Owm methods of Epc-1.0.Dispatcher

        add_service_subtype(type: string, subtype: string): void;
        get_collision_handling(): CollisionHandling;
        get_cookie(): string;
        get_name(): string;
        reset(): void;
        run(): boolean;
        set_collision_handling(method: CollisionHandling): void;
        set_cookie(cookie: string): void;
        set_name(name: string): void;
    }

    module Publisher {
        // Constructor properties interface
    }

    /**
     * Public fields of the #EpcPublisher class.
     */
    class Publisher extends GObject.Object {
        // Own properties of Epc-1.0.Publisher

        application: string;
        auth_flags: AuthFlags;
        authFlags: AuthFlags;
        certificate_file: string;
        certificateFile: string;
        collision_handling: CollisionHandling;
        collisionHandling: CollisionHandling;
        contents_path: string;
        contentsPath: string;
        private_key_file: string;
        privateKeyFile: string;
        protocol: Protocol;
        service_cookie: string;
        serviceCookie: string;
        service_domain: string;
        serviceDomain: string;
        service_name: string;
        serviceName: string;

        // Constructors of Epc-1.0.Publisher

        static ['new'](name: string, application: string, domain: string): Publisher;

        // Owm methods of Epc-1.0.Publisher

        static expand_name(name: string): string;

        // Owm methods of Epc-1.0.Publisher

        add(key: string, data: any, length: number): void;
        add_bookmark(key: string, label: string): void;
        add_file(key: string, filename: string): void;
        add_handler(key: string, handler: ContentsHandler): void;
        get_auth_flags(): AuthFlags;
        get_certificate_file(): string;
        get_collision_handling(): CollisionHandling;
        get_contents_path(): string;
        get_path(key: string): string;
        get_private_key_file(): string;
        get_protocol(): Protocol;
        get_service_cookie(): string;
        get_service_domain(): string;
        get_service_name(): string;
        get_uri(key: string): string;
        has_key(key: string): boolean;
        quit(): boolean;
        remove(key: string): boolean;
        run(): boolean;
        run_async(): boolean;
        set_auth_flags(flags: AuthFlags): void;
        set_auth_handler(key: string, handler: AuthHandler): void;
        set_collision_handling(method: CollisionHandling): void;
        set_contents_path(path: string): void;
        set_credentials(certfile: string, keyfile: string): void;
        set_protocol(protocol: Protocol): void;
        set_service_cookie(cookie: string): void;
        set_service_name(name: string): void;
    }

    module ServiceMonitor {
        // Signal callback interfaces

        interface ScanningDone {
            (object: string): void;
        }

        interface ServiceFound {
            (object: string, p0: ServiceInfo): void;
        }

        interface ServiceRemoved {
            (object: string, p0: string): void;
        }

        // Constructor properties interface
    }

    /**
     * Public fields of the #EpcServiceMonitor class.
     */
    class ServiceMonitor extends GObject.Object {
        // Own properties of Epc-1.0.ServiceMonitor

        application: string;
        domain: string;
        service_types: string[];
        serviceTypes: string[];
        skip_our_own: boolean;
        skipOurOwn: boolean;

        // Constructors of Epc-1.0.ServiceMonitor

        static new_for_types_strv(domain: string, types: string): ServiceMonitor;

        // Owm methods of Epc-1.0.ServiceMonitor

        get_skip_our_own(): boolean;
        set_skip_our_own(setting: boolean): void;
    }

    class AuthContext {
        // Owm methods of Epc-1.0.AuthContext

        check_password(password: string): boolean;
        get_key(): string;
        get_password(): string;
    }

    /**
     * Virtual methods of the #EpcConsumer class.
     */
    class ConsumerClass {}

    class ConsumerPrivate {}

    class Contents {
        // Constructors of Epc-1.0.Contents

        constructor(type: string, data: any, length: number);

        static ['new'](type: string, data: any, length: number): Contents;

        static new_dup(type: string, data: any, length: number): Contents;

        static stream_new(type: string, callback: ContentsReadFunc): Contents;

        // Owm methods of Epc-1.0.Contents

        get_mime_type(): string;
        is_stream(): boolean;
        ref(): Contents;
        unref(): void;
    }

    /**
     * Virtual methods of the #EpcDispatcher class.
     */
    class DispatcherClass {}

    class DispatcherPrivate {}

    /**
     * Virtual methods of the #EpcPublisher class.
     */
    class PublisherClass {}

    class PublisherPrivate {}

    class ServiceInfo {
        // Constructors of Epc-1.0.ServiceInfo

        constructor(type: string, host: string, port: number, details: unknown);

        // Owm methods of Epc-1.0.ServiceInfo

        get_address_family(): AddressFamily;
        get_detail(name: string): string;
        get_host(): string;
        get_interface(): string;
        get_port(): number;
        get_service_type(): string;
        ref(): ServiceInfo;
        unref(): void;
    }

    /**
     * Virtual methods of the #EpcServiceMonitor class.
     */
    class ServiceMonitorClass {}

    class ServiceMonitorPrivate {}

    /**
     * This table is used by #epc_shell_set_progress_hooks to install functions
     * allowing the library to provide feedback during processing.
     *
     * See also: #epc_progress_window_install
     */
    class ShellProgressHooks {
        // Constructors of Epc-1.0.ShellProgressHooks

        constructor(properties?: Partial<{}>);
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

export default Epc;
// END
