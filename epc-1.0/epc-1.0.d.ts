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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Epc {
    /**
     * Epc-1.0
     */

    /**
     * The address family to use for contacting network services.
     */

    /**
     * The address family to use for contacting network services.
     */
    export namespace AddressFamily {
        export const $gtype: GObject.GType<AddressFamily>;
    }

    enum AddressFamily {
        UNSPEC,
        IPV4,
        IPV6,
    }
    /**
     * Various strategies for handling service name collisions.
     */

    /**
     * Various strategies for handling service name collisions.
     */
    export namespace CollisionHandling {
        export const $gtype: GObject.GType<CollisionHandling>;
    }

    enum CollisionHandling {
        IGNORE,
        CHANGE_NAME,
        UNIQUE_SERVICE,
    }
    /**
     * The transport protocols supported by libepc.
     */

    /**
     * The transport protocols supported by libepc.
     */
    export namespace Protocol {
        export const $gtype: GObject.GType<Protocol>;
    }

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
    function address_family_to_string(value: AddressFamily | null): string;
    function auth_flags_to_string(value: AuthFlags | null): string;
    function avahi_error_quark(): GLib.Quark;
    function collision_handling_to_string(value: CollisionHandling | null): string;
    function http_error_quark(): GLib.Quark;
    function protocol_build_uri(protocol: Protocol | null, hostname: string, port: number, path: string): string;
    function protocol_from_name(name: string, fallback: Protocol | null): Protocol;
    function protocol_get_service_type(protocol: Protocol | null): string;
    function protocol_get_uri_scheme(protocol: Protocol | null): string;
    function protocol_to_string(value: Protocol | null): string;
    function service_type_get_base(type: string): string;
    function service_type_get_protocol(service_type: string): Protocol;
    function service_type_new(protocol: Protocol | null, application: string): string;
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

    /**
     * These flags specify the authentication behaviour of an #EpcPublisher.
     */
    export namespace AuthFlags {
        export const $gtype: GObject.GType<AuthFlags>;
    }

    enum AuthFlags {
        DEFAULT,
        PASSWORD_TEXT_NEEDED,
    }
    namespace Consumer {
        // Signal callback interfaces

        interface Authenticate {
            (object: string): boolean;
        }

        interface PublisherResolved {
            (object: Protocol, p0: string, p1: number): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            authenticate: Authenticate;
            'publisher-resolved': PublisherResolved;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: string;
            domain: string;
            hostname: string;
            name: string;
            password: string;
            path: string;
            port: number;
            protocol: Protocol;
            username: string;
        }
    }

    /**
     * Public fields of the #EpcConsumer class.
     */
    class Consumer extends GObject.Object {
        static $gtype: GObject.GType<Consumer>;
        declare static readonly __signalSignatures: Consumer.SignalSignatures;

        // Properties

        get application(): string;
        get domain(): string;
        get hostname(): string;
        get name(): string;
        get password(): string;
        set password(val: string);
        get path(): string;
        get port(): number;
        get protocol(): Protocol;
        set protocol(val: Protocol);
        get username(): string;
        set username(val: string);

        // Constructors

        constructor(properties?: Partial<Consumer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](service: ServiceInfo): Consumer;

        static new_for_name(name: string): Consumer;

        static new_for_name_full(name: string, application: string, domain: string): Consumer;

        // Signals

        connect<K extends keyof Consumer.SignalSignatures>(signal: K, callback: Consumer.SignalSignatures[K]): number;
        connect_after<K extends keyof Consumer.SignalSignatures>(
            signal: K,
            callback: Consumer.SignalSignatures[K],
        ): number;
        emit<K extends keyof Consumer.SignalSignatures>(
            signal: K,
            ...args: Parameters<Consumer.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'authenticate', callback: (_source: this, object: string) => boolean): number;
        connect_after(signal: 'authenticate', callback: (_source: this, object: string) => boolean): number;
        emit(signal: 'authenticate', object: string): void;
        connect(
            signal: 'publisher-resolved',
            callback: (_source: this, object: Protocol, p0: string, p1: number) => void,
        ): number;
        connect_after(
            signal: 'publisher-resolved',
            callback: (_source: this, object: Protocol, p0: string, p1: number) => void,
        ): number;
        emit(signal: 'publisher-resolved', object: Protocol, p0: string, p1: number): void;

        // Virtual methods

        vfunc_authenticate(realm: string): void;
        vfunc_publisher_resolved(protocol: Protocol, hostname: string, port: number): void;

        // Methods

        get_password(): string;
        get_protocol(): Protocol;
        get_username(): string;
        is_publisher_resolved(): boolean;
        resolve_publisher(timeout: number): boolean;
        set_password(password: string): void;
        set_protocol(protocol: Protocol | null): void;
        set_username(username: string): void;
    }

    namespace Dispatcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            collision_handling: CollisionHandling;
            collisionHandling: CollisionHandling;
            cookie: string;
            name: string;
        }
    }

    /**
     * Public fields of the #EpcDispatcher class.
     */
    class Dispatcher extends GObject.Object {
        static $gtype: GObject.GType<Dispatcher>;
        declare static readonly __signalSignatures: Dispatcher.SignalSignatures;

        // Properties

        get collision_handling(): CollisionHandling;
        set collision_handling(val: CollisionHandling);
        get collisionHandling(): CollisionHandling;
        set collisionHandling(val: CollisionHandling);
        get cookie(): string;
        set cookie(val: string);
        get name(): string;
        set name(val: string);

        // Constructors

        constructor(properties?: Partial<Dispatcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Dispatcher;

        // Methods

        add_service_subtype(type: string, subtype: string): void;
        get_collision_handling(): CollisionHandling;
        get_cookie(): string;
        get_name(): string;
        reset(): void;
        run(): boolean;
        set_collision_handling(method: CollisionHandling | null): void;
        set_cookie(cookie: string): void;
        set_name(name: string): void;
    }

    namespace Publisher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    /**
     * Public fields of the #EpcPublisher class.
     */
    class Publisher extends GObject.Object {
        static $gtype: GObject.GType<Publisher>;
        declare static readonly __signalSignatures: Publisher.SignalSignatures;

        // Properties

        get application(): string;
        set application(val: string);
        get auth_flags(): AuthFlags;
        set auth_flags(val: AuthFlags);
        get authFlags(): AuthFlags;
        set authFlags(val: AuthFlags);
        get certificate_file(): string;
        set certificate_file(val: string);
        get certificateFile(): string;
        set certificateFile(val: string);
        get collision_handling(): CollisionHandling;
        set collision_handling(val: CollisionHandling);
        get collisionHandling(): CollisionHandling;
        set collisionHandling(val: CollisionHandling);
        get contents_path(): string;
        set contents_path(val: string);
        get contentsPath(): string;
        set contentsPath(val: string);
        get private_key_file(): string;
        set private_key_file(val: string);
        get privateKeyFile(): string;
        set privateKeyFile(val: string);
        get protocol(): Protocol;
        set protocol(val: Protocol);
        get service_cookie(): string;
        set service_cookie(val: string);
        get serviceCookie(): string;
        set serviceCookie(val: string);
        get service_domain(): string;
        set service_domain(val: string);
        get serviceDomain(): string;
        set serviceDomain(val: string);
        get service_name(): string;
        set service_name(val: string);
        get serviceName(): string;
        set serviceName(val: string);

        // Constructors

        constructor(properties?: Partial<Publisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, application: string, domain: string): Publisher;

        // Static methods

        static expand_name(name: string): string;

        // Methods

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
        set_auth_flags(flags: AuthFlags | null): void;
        set_auth_handler(key: string, handler: AuthHandler): void;
        set_collision_handling(method: CollisionHandling | null): void;
        set_contents_path(path: string): void;
        set_credentials(certfile: string, keyfile: string): void;
        set_protocol(protocol: Protocol | null): void;
        set_service_cookie(cookie: string): void;
        set_service_name(name: string): void;
    }

    namespace ServiceMonitor {
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

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'scanning-done': ScanningDone;
            'service-found': ServiceFound;
            'service-removed': ServiceRemoved;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: string;
            domain: string;
            service_types: string[];
            serviceTypes: string[];
            skip_our_own: boolean;
            skipOurOwn: boolean;
        }
    }

    /**
     * Public fields of the #EpcServiceMonitor class.
     */
    class ServiceMonitor extends GObject.Object {
        static $gtype: GObject.GType<ServiceMonitor>;
        declare static readonly __signalSignatures: ServiceMonitor.SignalSignatures;

        // Properties

        get application(): string;
        get domain(): string;
        get service_types(): string[];
        get serviceTypes(): string[];
        get skip_our_own(): boolean;
        set skip_our_own(val: boolean);
        get skipOurOwn(): boolean;
        set skipOurOwn(val: boolean);

        // Constructors

        constructor(properties?: Partial<ServiceMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_types_strv(domain: string, types: string): ServiceMonitor;

        // Signals

        connect<K extends keyof ServiceMonitor.SignalSignatures>(
            signal: K,
            callback: ServiceMonitor.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ServiceMonitor.SignalSignatures>(
            signal: K,
            callback: ServiceMonitor.SignalSignatures[K],
        ): number;
        emit<K extends keyof ServiceMonitor.SignalSignatures>(
            signal: K,
            ...args: Parameters<ServiceMonitor.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'scanning-done', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'scanning-done', callback: (_source: this, object: string) => void): number;
        emit(signal: 'scanning-done', object: string): void;
        connect(signal: 'service-found', callback: (_source: this, object: string, p0: ServiceInfo) => void): number;
        connect_after(
            signal: 'service-found',
            callback: (_source: this, object: string, p0: ServiceInfo) => void,
        ): number;
        emit(signal: 'service-found', object: string, p0: ServiceInfo): void;
        connect(signal: 'service-removed', callback: (_source: this, object: string, p0: string) => void): number;
        connect_after(signal: 'service-removed', callback: (_source: this, object: string, p0: string) => void): number;
        emit(signal: 'service-removed', object: string, p0: string): void;

        // Virtual methods

        vfunc_scanning_done(type: string): void;
        vfunc_service_found(name: string, info: ServiceInfo): void;
        vfunc_service_removed(name: string, type: string): void;

        // Methods

        get_skip_our_own(): boolean;
        set_skip_our_own(setting: boolean): void;
    }

    abstract class AuthContext {
        static $gtype: GObject.GType<AuthContext>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        check_password(password: string): boolean;
        get_key(): string;
        get_password(): string;
    }

    type ConsumerClass = typeof Consumer;
    abstract class ConsumerPrivate {
        static $gtype: GObject.GType<ConsumerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class Contents {
        static $gtype: GObject.GType<Contents>;

        // Constructors

        constructor(type: string, data: any, length: number);
        _init(...args: any[]): void;

        static ['new'](type: string, data: any, length: number): Contents;

        static new_dup(type: string, data: any, length: number): Contents;

        static stream_new(type: string, callback: ContentsReadFunc): Contents;

        // Methods

        get_mime_type(): string;
        is_stream(): boolean;
        ref(): Contents;
        unref(): void;
    }

    type DispatcherClass = typeof Dispatcher;
    abstract class DispatcherPrivate {
        static $gtype: GObject.GType<DispatcherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PublisherClass = typeof Publisher;
    abstract class PublisherPrivate {
        static $gtype: GObject.GType<PublisherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ServiceInfo {
        static $gtype: GObject.GType<ServiceInfo>;

        // Constructors

        constructor(type: string, host: string, port: number, details: unknown);
        _init(...args: any[]): void;

        // Methods

        get_address_family(): AddressFamily;
        get_detail(name: string): string;
        get_host(): string;
        get_interface(): string;
        get_port(): number;
        get_service_type(): string;
        ref(): ServiceInfo;
        unref(): void;
    }

    type ServiceMonitorClass = typeof ServiceMonitor;
    abstract class ServiceMonitorPrivate {
        static $gtype: GObject.GType<ServiceMonitorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * This table is used by #epc_shell_set_progress_hooks to install functions
     * allowing the library to provide feedback during processing.
     *
     * See also: #epc_progress_window_install
     */
    class ShellProgressHooks {
        static $gtype: GObject.GType<ShellProgressHooks>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
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
