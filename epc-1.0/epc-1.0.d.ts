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
     * @gir-type Enum
     */
    export namespace AddressFamily {
        export const $gtype: GObject.GType<AddressFamily>;
    }

    /**
     * The address family to use for contacting network services.
     * @gir-type Enum
     */
    enum AddressFamily {
        UNSPEC,
        IPV4,
        IPV6,
    }

    /**
     * @gir-type Enum
     */
    export namespace CollisionHandling {
        export const $gtype: GObject.GType<CollisionHandling>;
    }

    /**
     * Various strategies for handling service name collisions.
     * @gir-type Enum
     */
    enum CollisionHandling {
        IGNORE,
        CHANGE_NAME,
        UNIQUE_SERVICE,
    }

    /**
     * @gir-type Enum
     */
    export namespace Protocol {
        export const $gtype: GObject.GType<Protocol>;
    }

    /**
     * The transport protocols supported by libepc.
     * @gir-type Enum
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
    /**
     * @param value
     */
    function address_family_to_string(value: AddressFamily | null): string;
    /**
     * @param value
     */
    function auth_flags_to_string(value: AuthFlags | null): string;
    function avahi_error_quark(): GLib.Quark;
    /**
     * @param value
     */
    function collision_handling_to_string(value: CollisionHandling | null): string;
    function http_error_quark(): GLib.Quark;
    /**
     * @param protocol
     * @param hostname
     * @param port
     * @param path
     */
    function protocol_build_uri(protocol: Protocol | null, hostname: string, port: number, path: string): string;
    /**
     * @param name
     * @param fallback
     */
    function protocol_from_name(name: string, fallback: Protocol | null): Protocol;
    /**
     * @param protocol
     */
    function protocol_get_service_type(protocol: Protocol | null): string;
    /**
     * @param protocol
     */
    function protocol_get_uri_scheme(protocol: Protocol | null): string;
    /**
     * @param value
     */
    function protocol_to_string(value: Protocol | null): string;
    /**
     * @param type
     */
    function service_type_get_base(type: string): string;
    /**
     * @param service_type
     */
    function service_type_get_protocol(service_type: string): Protocol;
    /**
     * @param protocol
     * @param application
     */
    function service_type_new(protocol: Protocol | null, application: string): string;
    function shell_get_debug_level(): number;
    function shell_get_host_name(): string;
    /**
     * @param title
     * @param message
     */
    function shell_progress_begin(title: string, message: string): void;
    function shell_progress_end(): void;
    /**
     * @param percentage
     * @param message
     */
    function shell_progress_update(percentage: number, message: string): void;
    /**
     * @param strloc
     */
    function shell_restart_avahi_client(strloc: string): void;
    /**
     * @param hooks
     * @param user_data
     */
    function shell_set_progress_hooks(hooks: ShellProgressHooks, user_data: any): void;
    /**
     * @param id
     */
    function shell_watch_remove(id: number): void;
    function tls_error_quark(): GLib.Quark;
    /**
     * @param hostname
     */
    function tls_get_certificate_filename(hostname: string): string;
    /**
     * @param hostname
     */
    function tls_get_private_key_filename(hostname: string): string;
    /**
     * @param hostname
     * @param crtfile
     * @param keyfile
     */
    function tls_get_server_credentials(hostname: string, crtfile: string, keyfile: string): boolean;
    /**
     * @gir-type Callback
     */
    interface AuthHandler {
        (context: AuthContext, username: string): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface ContentsHandler {
        (publisher: Publisher, key: string): Contents;
    }
    /**
     * @gir-type Callback
     */
    interface ContentsReadFunc {
        (contents: Contents, buffer: any, length: number): boolean;
    }
    /**
     * @gir-type Flags
     */
    export namespace AuthFlags {
        export const $gtype: GObject.GType<AuthFlags>;
    }

    /**
     * These flags specify the authentication behaviour of an {@link Epc.Publisher}.
     * @gir-type Flags
     */
    enum AuthFlags {
        DEFAULT,
        PASSWORD_TEXT_NEEDED,
    }

    namespace Consumer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            authenticate: (arg0: string) => boolean | void;
            /**
             * @signal
             * @run-first
             */
            'publisher-resolved': (arg0: Protocol, arg1: string, arg2: number) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::hostname': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::password': (pspec: GObject.ParamSpec) => void;
            'notify::path': (pspec: GObject.ParamSpec) => void;
            'notify::port': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
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
     * Public fields of the {@link Epc.Consumer} class.
     * @gir-type Class
     */
    class Consumer extends GObject.Object {
        static $gtype: GObject.GType<Consumer>;

        // Properties

        /**
         * @construct-only
         */
        get application(): string;
        /**
         * @construct-only
         */
        get domain(): string;
        /**
         * @construct-only
         */
        get hostname(): string;
        /**
         * @construct-only
         */
        get name(): string;
        get password(): string;
        set password(val: string);
        /**
         * @construct-only
         */
        get path(): string;
        /**
         * @construct-only
         */
        get port(): number;
        get protocol(): Protocol;
        set protocol(val: Protocol);
        get username(): string;
        set username(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Consumer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Consumer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](service: ServiceInfo): Consumer;

        static new_for_name(name: string): Consumer;

        static new_for_name_full(name: string, application: string, domain: string): Consumer;

        // Signals

        /** @signal */
        connect<K extends keyof Consumer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Consumer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Consumer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Consumer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Consumer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Consumer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param realm
         * @virtual
         */
        vfunc_authenticate(realm: string): void;
        /**
         * @param protocol
         * @param hostname
         * @param port
         * @virtual
         */
        vfunc_publisher_resolved(protocol: Protocol, hostname: string, port: number): void;

        // Methods

        get_password(): string;
        get_protocol(): Protocol;
        get_username(): string;
        is_publisher_resolved(): boolean;
        /**
         * @param timeout
         */
        resolve_publisher(timeout: number): boolean;
        /**
         * @param password
         */
        set_password(password: string): void;
        /**
         * @param protocol
         */
        set_protocol(protocol: Protocol | null): void;
        /**
         * @param username
         */
        set_username(username: string): void;
    }

    namespace Dispatcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::collision-handling': (pspec: GObject.ParamSpec) => void;
            'notify::cookie': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            collision_handling: CollisionHandling;
            collisionHandling: CollisionHandling;
            cookie: string;
            name: string;
        }
    }

    /**
     * Public fields of the {@link Epc.Dispatcher} class.
     * @gir-type Class
     */
    class Dispatcher extends GObject.Object {
        static $gtype: GObject.GType<Dispatcher>;

        // Properties

        get collision_handling(): CollisionHandling;
        set collision_handling(val: CollisionHandling);
        get collisionHandling(): CollisionHandling;
        set collisionHandling(val: CollisionHandling);
        get cookie(): string;
        set cookie(val: string);
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dispatcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dispatcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Dispatcher;

        // Signals

        /** @signal */
        connect<K extends keyof Dispatcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dispatcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dispatcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dispatcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dispatcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dispatcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param type
         * @param subtype
         */
        add_service_subtype(type: string, subtype: string): void;
        get_collision_handling(): CollisionHandling;
        get_cookie(): string;
        get_name(): string;
        reset(): void;
        run(): boolean;
        /**
         * @param method
         */
        set_collision_handling(method: CollisionHandling | null): void;
        /**
         * @param cookie
         */
        set_cookie(cookie: string): void;
        /**
         * @param name
         */
        set_name(name: string): void;
    }

    namespace Publisher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::auth-flags': (pspec: GObject.ParamSpec) => void;
            'notify::certificate-file': (pspec: GObject.ParamSpec) => void;
            'notify::collision-handling': (pspec: GObject.ParamSpec) => void;
            'notify::contents-path': (pspec: GObject.ParamSpec) => void;
            'notify::private-key-file': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::service-cookie': (pspec: GObject.ParamSpec) => void;
            'notify::service-domain': (pspec: GObject.ParamSpec) => void;
            'notify::service-name': (pspec: GObject.ParamSpec) => void;
        }

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
     * Public fields of the {@link Epc.Publisher} class.
     * @gir-type Class
     */
    class Publisher extends GObject.Object {
        static $gtype: GObject.GType<Publisher>;

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Publisher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Publisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, application: string, domain: string): Publisher;

        // Signals

        /** @signal */
        connect<K extends keyof Publisher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Publisher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Publisher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Publisher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Publisher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Publisher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param name
         */
        static expand_name(name: string): string;

        // Methods

        /**
         * @param key
         * @param data
         * @param length
         */
        add(key: string, data: any, length: number): void;
        /**
         * @param key
         * @param label
         */
        add_bookmark(key: string, label: string): void;
        /**
         * @param key
         * @param filename
         */
        add_file(key: string, filename: string): void;
        /**
         * @param key
         * @param handler
         */
        add_handler(key: string, handler: ContentsHandler): void;
        get_auth_flags(): AuthFlags;
        get_certificate_file(): string;
        get_collision_handling(): CollisionHandling;
        get_contents_path(): string;
        /**
         * @param key
         */
        get_path(key: string): string;
        get_private_key_file(): string;
        get_protocol(): Protocol;
        get_service_cookie(): string;
        get_service_domain(): string;
        get_service_name(): string;
        /**
         * @param key
         */
        get_uri(key: string): string;
        /**
         * @param key
         */
        has_key(key: string): boolean;
        quit(): boolean;
        /**
         * @param key
         */
        remove(key: string): boolean;
        run(): boolean;
        run_async(): boolean;
        /**
         * @param flags
         */
        set_auth_flags(flags: AuthFlags | null): void;
        /**
         * @param key
         * @param handler
         */
        set_auth_handler(key: string, handler: AuthHandler): void;
        /**
         * @param method
         */
        set_collision_handling(method: CollisionHandling | null): void;
        /**
         * @param path
         */
        set_contents_path(path: string): void;
        /**
         * @param certfile
         * @param keyfile
         */
        set_credentials(certfile: string, keyfile: string): void;
        /**
         * @param protocol
         */
        set_protocol(protocol: Protocol | null): void;
        /**
         * @param cookie
         */
        set_service_cookie(cookie: string): void;
        /**
         * @param name
         */
        set_service_name(name: string): void;
    }

    namespace ServiceMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'scanning-done': (arg0: string) => void;
            /**
             * @signal
             * @run-first
             */
            'service-found': (arg0: string, arg1: ServiceInfo) => void;
            /**
             * @signal
             * @run-first
             */
            'service-removed': (arg0: string, arg1: string) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
            'notify::service-types': (pspec: GObject.ParamSpec) => void;
            'notify::skip-our-own': (pspec: GObject.ParamSpec) => void;
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
     * Public fields of the {@link Epc.ServiceMonitor} class.
     * @gir-type Class
     */
    class ServiceMonitor extends GObject.Object {
        static $gtype: GObject.GType<ServiceMonitor>;

        // Properties

        /**
         * @construct-only
         */
        get application(): string;
        /**
         * @construct-only
         */
        get domain(): string;
        /**
         * @construct-only
         */
        get service_types(): string[];
        /**
         * @construct-only
         */
        get serviceTypes(): string[];
        get skip_our_own(): boolean;
        set skip_our_own(val: boolean);
        get skipOurOwn(): boolean;
        set skipOurOwn(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServiceMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServiceMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_types_strv(domain: string, types: string): ServiceMonitor;

        // Signals

        /** @signal */
        connect<K extends keyof ServiceMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServiceMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServiceMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServiceMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param type
         * @virtual
         */
        vfunc_scanning_done(type: string): void;
        /**
         * @param name
         * @param info
         * @virtual
         */
        vfunc_service_found(name: string, info: ServiceInfo): void;
        /**
         * @param name
         * @param type
         * @virtual
         */
        vfunc_service_removed(name: string, type: string): void;

        // Methods

        get_skip_our_own(): boolean;
        /**
         * @param setting
         */
        set_skip_our_own(setting: boolean): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class AuthContext {
        static $gtype: GObject.GType<AuthContext>;

        // Methods

        /**
         * @param password
         */
        check_password(password: string): boolean;
        get_key(): string;
        get_password(): string;
    }

    /**
     * @gir-type Alias
     */
    type ConsumerClass = typeof Consumer;
    /**
     * @gir-type Struct
     */
    abstract class ConsumerPrivate {
        static $gtype: GObject.GType<ConsumerPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class Contents {
        static $gtype: GObject.GType<Contents>;

        // Constructors

        constructor(type: string, data: any, length: number);

        static ['new'](type: string, data: any, length: number): Contents;

        static new_dup(type: string, data: any, length: number): Contents;

        static stream_new(type: string, callback: ContentsReadFunc): Contents;

        // Methods

        get_mime_type(): string;
        is_stream(): boolean;
        ref(): Contents;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type DispatcherClass = typeof Dispatcher;
    /**
     * @gir-type Struct
     */
    abstract class DispatcherPrivate {
        static $gtype: GObject.GType<DispatcherPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PublisherClass = typeof Publisher;
    /**
     * @gir-type Struct
     */
    abstract class PublisherPrivate {
        static $gtype: GObject.GType<PublisherPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class ServiceInfo {
        static $gtype: GObject.GType<ServiceInfo>;

        // Constructors

        constructor(type: string, host: string, port: number, details: unknown);

        // Methods

        get_address_family(): AddressFamily;
        /**
         * @param name
         */
        get_detail(name: string): string;
        get_host(): string;
        get_interface(): string;
        get_port(): number;
        get_service_type(): string;
        ref(): ServiceInfo;
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type ServiceMonitorClass = typeof ServiceMonitor;
    /**
     * @gir-type Struct
     */
    abstract class ServiceMonitorPrivate {
        static $gtype: GObject.GType<ServiceMonitorPrivate>;
    }

    /**
     * This table is used by `epc_shell_set_progress_hooks` to install functions
     * allowing the library to provide feedback during processing.
     *
     * See also: `epc_progress_window_install`
     * @gir-type Struct
     */
    class ShellProgressHooks {
        static $gtype: GObject.GType<ShellProgressHooks>;

        // Constructors

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
