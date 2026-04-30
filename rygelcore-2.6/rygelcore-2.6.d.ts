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
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GUPnP from '@girs/gupnp-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type GSSDP from '@girs/gssdp-1.2';

export namespace RygelCore {
    /**
     * RygelCore-2.6
     */

    /**
     * @gir-type Enum
     */
    export namespace LogLevel {
        export const $gtype: GObject.GType<LogLevel>;
    }

    /**
     * @gir-type Enum
     */
    enum LogLevel {
        INVALID,
        ERROR,
        CRITICAL,
        WARNING,
        INFO,
        DEFAULT,
        DEBUG,
    }

    /**
     * @gir-type Enum
     */
    export namespace ConfigurationEntry {
        export const $gtype: GObject.GType<ConfigurationEntry>;
    }

    /**
     * @gir-type Enum
     */
    enum ConfigurationEntry {
        INTERFACE,
        PORT,
        TRANSCODING,
        ALLOW_UPLOAD,
        ALLOW_DELETION,
        LOG_LEVELS,
        PLUGIN_PATH,
        VIDEO_UPLOAD_FOLDER,
        MUSIC_UPLOAD_FOLDER,
        PICTURE_UPLOAD_FOLDER,
    }

    /**
     * @gir-type Enum
     */
    export namespace SectionEntry {
        export const $gtype: GObject.GType<SectionEntry>;
    }

    /**
     * @gir-type Enum
     */
    enum SectionEntry {
        TITLE,
        ENABLED,
    }

    /**
     * @gir-type Struct
     */
    class ConfigurationError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static NO_VALUE_SET: number;
        static VALUE_OUT_OF_RANGE: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class CmdlineConfigError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static VERSION_ONLY: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    function get_pretty_host_name(): string;
    /**
     * @gir-type Flags
     */
    export namespace PluginCapabilities {
        export const $gtype: GObject.GType<PluginCapabilities>;
    }

    /**
     * @gir-type Flags
     */
    enum PluginCapabilities {
        NONE,
        IMAGE_UPLOAD,
        VIDEO_UPLOAD,
        AUDIO_UPLOAD,
        UPLOAD,
        TRACK_CHANGES,
        CREATE_CONTAINERS,
        DIAGNOSTICS,
        ENERGY_MANAGEMENT,
    }

    namespace ConnectionManager {
        // Signal signatures
        interface SignalSignatures extends GUPnP.Service.SignalSignatures {
            'notify::root-device': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::service-type': (pspec: GObject.ParamSpec) => void;
            'notify::udn': (pspec: GObject.ParamSpec) => void;
            'notify::url-base': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GUPnP.Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ConnectionManager extends GUPnP.Service {
        static $gtype: GObject.GType<ConnectionManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConnectionManager.SignalSignatures;

        // Fields

        sink_protocol_info: string;
        connection_ids: string;
        source_protocol_info: string;
        rcs_id: number;
        av_transport_id: number;
        direction: string;

        // Constructors

        constructor(properties?: Partial<ConnectionManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConnectionManager;

        // Signals

        /** @signal */
        connect<K extends keyof ConnectionManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConnectionManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ConnectionManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ConnectionManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ConnectionManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ConnectionManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_current_protocol_info(): string;

        // Methods

        get_current_protocol_info(): string;
    }

    namespace BasicManagement {
        // Signal signatures
        interface SignalSignatures extends GUPnP.Service.SignalSignatures {
            'notify::max-history-size': (pspec: GObject.ParamSpec) => void;
            'notify::root-device': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::service-type': (pspec: GObject.ParamSpec) => void;
            'notify::udn': (pspec: GObject.ParamSpec) => void;
            'notify::url-base': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GUPnP.Service.ConstructorProps {
            max_history_size: number;
            maxHistorySize: number;
        }
    }

    /**
     * @gir-type Class
     */
    class BasicManagement extends GUPnP.Service {
        static $gtype: GObject.GType<BasicManagement>;

        // Properties

        get max_history_size(): number;
        set max_history_size(val: number);
        get maxHistorySize(): number;
        set maxHistorySize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BasicManagement.SignalSignatures;

        // Fields

        device_status: string;

        // Constructors

        constructor(properties?: Partial<BasicManagement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BasicManagement;

        // Signals

        /** @signal */
        connect<K extends keyof BasicManagement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BasicManagement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BasicManagement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BasicManagement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BasicManagement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BasicManagement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_max_history_size(): number;
        /**
         * @param value
         */
        set_max_history_size(value: number): void;
    }

    namespace DescriptionFile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DescriptionFile extends GObject.Object {
        static $gtype: GObject.GType<DescriptionFile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DescriptionFile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DescriptionFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](template_file: string): DescriptionFile;

        static from_xml_document(doc: GUPnP.XMLDoc): DescriptionFile;

        // Signals

        /** @signal */
        connect<K extends keyof DescriptionFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DescriptionFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DescriptionFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DescriptionFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DescriptionFile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DescriptionFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param device_type
         */
        set_device_type(device_type: string): void;
        /**
         * @param model_description
         */
        set_model_description(model_description: string): void;
        /**
         * @param model_name
         */
        set_model_name(model_name: string): void;
        /**
         * @param model_number
         */
        set_model_number(model_number: string): void;
        /**
         * @param friendly_name
         */
        set_friendly_name(friendly_name: string): void;
        get_friendly_name(): string;
        /**
         * @param udn
         */
        set_udn(udn: string): void;
        get_udn(): string | null;
        /**
         * @param serial
         */
        set_serial_number(serial: string): void;
        /**
         * @param capabilities
         */
        set_dlna_caps(capabilities: PluginCapabilities): void;
        clear_service_list(): void;
        /**
         * @param dlnadoc_xpath
         * @param dlnadoc_non_xpath
         * @param dev_cap
         */
        add_dlna_doc_element(dlnadoc_xpath: string, dlnadoc_non_xpath: string, dev_cap: string): void;
        /**
         * @param dlnadoc_xpath
         */
        remove_dlna_doc_element(dlnadoc_xpath: string): void;
        /**
         * @param device_name
         * @param resource_info
         */
        add_service(device_name: string, resource_info: ResourceInfo): void;
        clear_icon_list(): void;
        /**
         * @param device_name
         * @param icon_info
         * @param url
         */
        add_icon(device_name: string, icon_info: IconInfo, url: string): void;
        /**
         * @param old_type
         * @param new_type
         */
        modify_service_type(old_type: string, new_type: string): void;
        /**
         * @param path
         */
        save(path: string): void;
    }

    namespace DLNAProfile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class DLNAProfile {
        static $gtype: GObject.GType<DLNAProfile>;

        // Fields

        ref_count: number;
        mime: string;
        name: string;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](name: string, mime: string): DLNAProfile;

        // Signals

        /** @signal */
        connect<K extends keyof DLNAProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DLNAProfile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DLNAProfile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DLNAProfile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DLNAProfile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DLNAProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param a
         * @param b
         */
        static compare_by_name(a: DLNAProfile, b: DLNAProfile): number;
    }

    namespace EnergyManagement {
        // Signal signatures
        interface SignalSignatures extends GUPnP.Service.SignalSignatures {
            'notify::root-device': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::service-type': (pspec: GObject.ParamSpec) => void;
            'notify::udn': (pspec: GObject.ParamSpec) => void;
            'notify::url-base': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GUPnP.Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EnergyManagement extends GUPnP.Service {
        static $gtype: GObject.GType<EnergyManagement>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnergyManagement.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EnergyManagement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EnergyManagement;

        // Signals

        /** @signal */
        connect<K extends keyof EnergyManagement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnergyManagement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EnergyManagement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnergyManagement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EnergyManagement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EnergyManagement.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RootDevice {
        // Signal signatures
        interface SignalSignatures extends GUPnP.RootDevice.SignalSignatures {
            'notify::services': (pspec: GObject.ParamSpec) => void;
            'notify::available': (pspec: GObject.ParamSpec) => void;
            'notify::description-dir': (pspec: GObject.ParamSpec) => void;
            'notify::description-doc': (pspec: GObject.ParamSpec) => void;
            'notify::description-path': (pspec: GObject.ParamSpec) => void;
            'notify::root-device': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::device-type': (pspec: GObject.ParamSpec) => void;
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::resource-factory': (pspec: GObject.ParamSpec) => void;
            'notify::udn': (pspec: GObject.ParamSpec) => void;
            'notify::url-base': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GUPnP.RootDevice.ConstructorProps, Gio.Initable.ConstructorProps {
            services: Gee.ArrayList;
        }
    }

    /**
     * @gir-type Class
     */
    class RootDevice extends GUPnP.RootDevice implements Gio.Initable {
        static $gtype: GObject.GType<RootDevice>;

        // Properties

        get services(): Gee.ArrayList;
        set services(val: Gee.ArrayList);

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

        static ['new'](
            context: GUPnP.Context,
            plugin: Plugin,
            description_doc: GUPnP.XMLDoc,
            description_path: string,
            description_dir: string,
        ): RootDevice;
        // Conflicted with GUPnP.RootDevice.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof RootDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RootDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RootDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RootDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RootDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RootDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_services(): Gee.ArrayList;
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

    namespace RootDeviceFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            context: GUPnP.Context;
        }
    }

    /**
     * @gir-type Class
     */
    class RootDeviceFactory extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<RootDeviceFactory>;

        // Properties

        /**
         * @construct-only
         */
        get context(): GUPnP.Context;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RootDeviceFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RootDeviceFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: GUPnP.Context): RootDeviceFactory;

        // Signals

        /** @signal */
        connect<K extends keyof RootDeviceFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RootDeviceFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RootDeviceFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RootDeviceFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RootDeviceFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RootDeviceFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param plugin
         */
        create(plugin: Plugin): RootDevice;
        get_context(): GUPnP.Context;
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

    namespace LogHandler {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LogHandler extends GObject.Object {
        static $gtype: GObject.GType<LogHandler>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LogHandler.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LogHandler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LogHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogHandler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LogHandler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LogHandler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LogHandler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LogHandler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): LogHandler;
    }

    namespace MetaConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Configuration.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MetaConfig extends GObject.Object implements Configuration {
        static $gtype: GObject.GType<MetaConfig>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetaConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MetaConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MetaConfig;

        // Signals

        /** @signal */
        connect<K extends keyof MetaConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetaConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MetaConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetaConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MetaConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetaConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): MetaConfig;
        /**
         * @param config
         */
        static register_configuration(config: Configuration): void;
        static cleanup(): void;
        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        /**
         * @param section
         */
        get_enabled(section: string): boolean;
        /**
         * @param section
         */
        get_title(section: string): string;
        /**
         * @param section
         * @param key
         */
        get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         */
        get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         */
        get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         */
        get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         */
        get_bool(section: string, key: string): boolean;
        /**
         * @virtual
         */
        vfunc_get_interface(): string;
        /**
         * @virtual
         */
        vfunc_get_interfaces(): string[];
        /**
         * @virtual
         */
        vfunc_get_port(): number;
        /**
         * @virtual
         */
        vfunc_get_transcoding(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_upload(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_deletion(): boolean;
        /**
         * @virtual
         */
        vfunc_get_log_levels(): string;
        /**
         * @virtual
         */
        vfunc_get_plugin_path(): string;
        /**
         * @virtual
         */
        vfunc_get_engine_path(): string;
        /**
         * @virtual
         */
        vfunc_get_media_engine(): string;
        /**
         * @virtual
         */
        vfunc_get_video_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_music_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_picture_upload_folder(): string | null;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_enabled(section: string): boolean;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_title(section: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         * @virtual
         */
        vfunc_get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_bool(section: string, key: string): boolean;
    }

    namespace PluginLoader {
        // Signal signatures
        interface SignalSignatures extends RecursiveModuleLoader.SignalSignatures {
            /**
             * @signal
             */
            'plugin-available': (arg0: Plugin) => void;
            'notify::base-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RecursiveModuleLoader.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PluginLoader extends RecursiveModuleLoader {
        static $gtype: GObject.GType<PluginLoader>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PluginLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PluginLoader;

        // Signals

        /** @signal */
        connect<K extends keyof PluginLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param name
         */
        plugin_disabled(name: string): boolean;
        /**
         * @param plugin
         */
        add_plugin(plugin: Plugin): void;
        /**
         * @param name
         */
        get_plugin_by_name(name: string): Plugin | null;
        list_plugins(): Gee.Collection;
    }

    namespace RecursiveModuleLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::base-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_path: string;
            basePath: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class RecursiveModuleLoader extends GObject.Object {
        static $gtype: GObject.GType<RecursiveModuleLoader>;

        // Properties

        get base_path(): string;
        set base_path(val: string);
        get basePath(): string;
        set basePath(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RecursiveModuleLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RecursiveModuleLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RecursiveModuleLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecursiveModuleLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RecursiveModuleLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RecursiveModuleLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RecursiveModuleLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RecursiveModuleLoader.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param file
         * @virtual
         */
        vfunc_load_module_from_file(file: Gio.File): boolean;
        /**
         * @param info
         * @virtual
         */
        vfunc_load_module_from_info(info: PluginInformation): boolean;

        // Methods

        load_modules(): void;
        /**
         * @param cancellable
         */
        load_modules_sync(cancellable: Gio.Cancellable | null): void;
        /**
         * @param file
         */
        load_module_from_file(file: Gio.File): boolean;
        /**
         * @param info
         */
        load_module_from_info(info: PluginInformation): boolean;
        get_base_path(): string;
        /**
         * @param value
         */
        set_base_path(value: string): void;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GUPnP.ResourceFactory.SignalSignatures {
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::desc-path': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::resource-infos': (pspec: GObject.ParamSpec) => void;
            'notify::icon-infos': (pspec: GObject.ParamSpec) => void;
            'notify::default-icons': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GUPnP.ResourceFactory.ConstructorProps {
            capabilities: PluginCapabilities;
            name: string;
            title: string;
            description: string;
            desc_path: string;
            descPath: string;
            active: boolean;
            resource_infos: Gee.ArrayList;
            resourceInfos: Gee.ArrayList;
            icon_infos: Gee.ArrayList;
            iconInfos: Gee.ArrayList;
            default_icons: Gee.ArrayList;
            defaultIcons: Gee.ArrayList;
        }
    }

    /**
     * @gir-type Class
     */
    class Plugin extends GUPnP.ResourceFactory {
        static $gtype: GObject.GType<Plugin>;

        // Properties

        get capabilities(): PluginCapabilities;
        set capabilities(val: PluginCapabilities);
        /**
         * @construct-only
         */
        get name(): string;
        get title(): string;
        set title(val: string);
        /**
         * @construct-only
         */
        get description(): string;
        /**
         * @construct-only
         */
        get desc_path(): string;
        /**
         * @construct-only
         */
        get descPath(): string;
        get active(): boolean;
        set active(val: boolean);
        get resource_infos(): Gee.ArrayList;
        set resource_infos(val: Gee.ArrayList);
        get resourceInfos(): Gee.ArrayList;
        set resourceInfos(val: Gee.ArrayList);
        get icon_infos(): Gee.ArrayList;
        set icon_infos(val: Gee.ArrayList);
        get iconInfos(): Gee.ArrayList;
        set iconInfos(val: Gee.ArrayList);
        get default_icons(): Gee.ArrayList;
        set default_icons(val: Gee.ArrayList);
        get defaultIcons(): Gee.ArrayList;
        set defaultIcons(val: Gee.ArrayList);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            desc_path: string,
            name: string,
            title: string | null,
            description: string | null,
            capabilities: PluginCapabilities,
        ): Plugin;
        // Conflicted with GUPnP.ResourceFactory.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param device
         * @param description_path
         * @virtual
         */
        vfunc_apply_hacks(device: RootDevice, description_path: string): void;

        // Methods

        /**
         * @param resource_info
         */
        add_resource(resource_info: ResourceInfo): void;
        /**
         * @param icon_info
         */
        add_icon(icon_info: IconInfo): void;
        /**
         * @param device
         * @param description_path
         */
        apply_hacks(device: RootDevice, description_path: string): void;
        get_capabilities(): PluginCapabilities;
        /**
         * @param value
         */
        set_capabilities(value: PluginCapabilities): void;
        get_name(): string;
        get_title(): string;
        /**
         * @param value
         */
        set_title(value: string): void;
        get_description(): string;
        get_desc_path(): string;
        get_active(): boolean;
        /**
         * @param value
         */
        set_active(value: boolean): void;
        get_resource_infos(): Gee.ArrayList;
        get_icon_infos(): Gee.ArrayList;
        get_default_icons(): Gee.ArrayList;
    }

    namespace ResourceInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class ResourceInfo {
        static $gtype: GObject.GType<ResourceInfo>;

        // Fields

        ref_count: number;
        upnp_type: string;
        upnp_id: string;
        description_path: string;
        type: GObject.GType;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](upnp_id: string, upnp_type: string, description_path: string, type: GObject.GType): ResourceInfo;

        // Signals

        /** @signal */
        connect<K extends keyof ResourceInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ResourceInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResourceInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ResourceInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResourceInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace MediaDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::plugin': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plugin: Plugin;
            title: string;
            capabilities: PluginCapabilities;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class MediaDevice extends GObject.Object {
        static $gtype: GObject.GType<MediaDevice>;

        // Properties

        get plugin(): Plugin;
        set plugin(val: Plugin);
        /**
         * @construct-only
         */
        get title(): string;
        /**
         * @construct-only
         */
        get capabilities(): PluginCapabilities;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param iface
         */
        add_interface(iface: string): void;
        /**
         * @param iface
         */
        remove_interface(iface: string): void;
        get_interfaces(): string[];
        get_plugin(): Plugin;
        /**
         * @param value
         */
        set_plugin(value: Plugin): void;
        get_title(): string;
        get_capabilities(): PluginCapabilities;
    }

    namespace BaseConfiguration {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Configuration.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BaseConfiguration extends GObject.Object implements Configuration {
        static $gtype: GObject.GType<BaseConfiguration>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseConfiguration.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BaseConfiguration.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BaseConfiguration;

        // Signals

        /** @signal */
        connect<K extends keyof BaseConfiguration.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseConfiguration.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseConfiguration.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseConfiguration.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseConfiguration.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseConfiguration.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_get_interface(): string;
        /**
         * @virtual
         */
        vfunc_get_interfaces(): string[];
        /**
         * @virtual
         */
        vfunc_get_port(): number;
        /**
         * @virtual
         */
        vfunc_get_transcoding(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_upload(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_deletion(): boolean;
        /**
         * @virtual
         */
        vfunc_get_log_levels(): string;
        /**
         * @virtual
         */
        vfunc_get_plugin_path(): string;
        /**
         * @virtual
         */
        vfunc_get_engine_path(): string;
        /**
         * @virtual
         */
        vfunc_get_media_engine(): string;
        /**
         * @virtual
         */
        vfunc_get_video_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_music_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_picture_upload_folder(): string | null;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_enabled(section: string): boolean;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_title(section: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         * @virtual
         */
        vfunc_get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_bool(section: string, key: string): boolean;

        // Methods

        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        /**
         * @param section
         */
        get_enabled(section: string): boolean;
        /**
         * @param section
         */
        get_title(section: string): string;
        /**
         * @param section
         * @param key
         */
        get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         */
        get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         */
        get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         */
        get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         */
        get_bool(section: string, key: string): boolean;
    }

    namespace CmdlineConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Configuration.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CmdlineConfig extends GObject.Object implements Configuration {
        static $gtype: GObject.GType<CmdlineConfig>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CmdlineConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CmdlineConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CmdlineConfig;

        // Signals

        /** @signal */
        connect<K extends keyof CmdlineConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CmdlineConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CmdlineConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CmdlineConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CmdlineConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CmdlineConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): CmdlineConfig;
        /**
         * @param args
         */
        static parse_args(args: string[]): string[];

        // Methods

        get_config_file(): string;
        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        /**
         * @param section
         */
        get_enabled(section: string): boolean;
        /**
         * @param section
         */
        get_title(section: string): string;
        /**
         * @param section
         * @param key
         */
        get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         */
        get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         */
        get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         */
        get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         */
        get_bool(section: string, key: string): boolean;
        /**
         * @virtual
         */
        vfunc_get_interface(): string;
        /**
         * @virtual
         */
        vfunc_get_interfaces(): string[];
        /**
         * @virtual
         */
        vfunc_get_port(): number;
        /**
         * @virtual
         */
        vfunc_get_transcoding(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_upload(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_deletion(): boolean;
        /**
         * @virtual
         */
        vfunc_get_log_levels(): string;
        /**
         * @virtual
         */
        vfunc_get_plugin_path(): string;
        /**
         * @virtual
         */
        vfunc_get_engine_path(): string;
        /**
         * @virtual
         */
        vfunc_get_media_engine(): string;
        /**
         * @virtual
         */
        vfunc_get_video_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_music_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_picture_upload_folder(): string | null;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_enabled(section: string): boolean;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_title(section: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         * @virtual
         */
        vfunc_get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_bool(section: string, key: string): boolean;
    }

    namespace EnvironmentConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Configuration.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EnvironmentConfig extends GObject.Object implements Configuration {
        static $gtype: GObject.GType<EnvironmentConfig>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnvironmentConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EnvironmentConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EnvironmentConfig;

        // Signals

        /** @signal */
        connect<K extends keyof EnvironmentConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnvironmentConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EnvironmentConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EnvironmentConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EnvironmentConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EnvironmentConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): EnvironmentConfig;
        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        /**
         * @param section
         */
        get_enabled(section: string): boolean;
        /**
         * @param section
         */
        get_title(section: string): string;
        /**
         * @param section
         * @param key
         */
        get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         */
        get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         */
        get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         */
        get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         */
        get_bool(section: string, key: string): boolean;
        /**
         * @virtual
         */
        vfunc_get_interface(): string;
        /**
         * @virtual
         */
        vfunc_get_interfaces(): string[];
        /**
         * @virtual
         */
        vfunc_get_port(): number;
        /**
         * @virtual
         */
        vfunc_get_transcoding(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_upload(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_deletion(): boolean;
        /**
         * @virtual
         */
        vfunc_get_log_levels(): string;
        /**
         * @virtual
         */
        vfunc_get_plugin_path(): string;
        /**
         * @virtual
         */
        vfunc_get_engine_path(): string;
        /**
         * @virtual
         */
        vfunc_get_media_engine(): string;
        /**
         * @virtual
         */
        vfunc_get_video_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_music_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_picture_upload_folder(): string | null;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_enabled(section: string): boolean;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_title(section: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         * @virtual
         */
        vfunc_get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_bool(section: string, key: string): boolean;
    }

    namespace UserConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Configuration.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UserConfig extends GObject.Object implements Configuration {
        static $gtype: GObject.GType<UserConfig>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserConfig.SignalSignatures;

        // Fields

        key_file_monitor: Gio.FileMonitor;
        sys_key_file_monitor: Gio.FileMonitor;

        // Constructors

        constructor(properties?: Partial<UserConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](local_path: string): UserConfig;

        static with_paths(local_path: string, system_path: string): UserConfig;

        // Signals

        /** @signal */
        connect<K extends keyof UserConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): UserConfig;
        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        /**
         * @param section
         */
        get_enabled(section: string): boolean;
        /**
         * @param section
         */
        get_title(section: string): string;
        /**
         * @param section
         * @param key
         */
        get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         */
        get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         */
        get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         */
        get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         */
        get_bool(section: string, key: string): boolean;
        /**
         * @virtual
         */
        vfunc_get_interface(): string;
        /**
         * @virtual
         */
        vfunc_get_interfaces(): string[];
        /**
         * @virtual
         */
        vfunc_get_port(): number;
        /**
         * @virtual
         */
        vfunc_get_transcoding(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_upload(): boolean;
        /**
         * @virtual
         */
        vfunc_get_allow_deletion(): boolean;
        /**
         * @virtual
         */
        vfunc_get_log_levels(): string;
        /**
         * @virtual
         */
        vfunc_get_plugin_path(): string;
        /**
         * @virtual
         */
        vfunc_get_engine_path(): string;
        /**
         * @virtual
         */
        vfunc_get_media_engine(): string;
        /**
         * @virtual
         */
        vfunc_get_video_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_music_upload_folder(): string | null;
        /**
         * @virtual
         */
        vfunc_get_picture_upload_folder(): string | null;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_enabled(section: string): boolean;
        /**
         * @param section
         * @virtual
         */
        vfunc_get_title(section: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         * @virtual
         */
        vfunc_get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @virtual
         */
        vfunc_get_bool(section: string, key: string): boolean;
    }

    namespace V1Hacks {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::device-type': (pspec: GObject.ParamSpec) => void;
            'notify::service-types': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device_type: string;
            deviceType: string;
            service_types: string[];
            serviceTypes: string[];
        }
    }

    /**
     * @gir-type Class
     */
    class V1Hacks extends GObject.Object {
        static $gtype: GObject.GType<V1Hacks>;

        // Properties

        get device_type(): string;
        set device_type(val: string);
        get deviceType(): string;
        set deviceType(val: string);
        /**
         * @construct-only
         */
        get service_types(): string[];
        /**
         * @construct-only
         */
        get serviceTypes(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: V1Hacks.SignalSignatures;

        // Fields

        description_path: string;

        // Constructors

        constructor(properties?: Partial<V1Hacks.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](device_type: string, service_types: string[]): V1Hacks;

        // Signals

        /** @signal */
        connect<K extends keyof V1Hacks.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, V1Hacks.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof V1Hacks.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, V1Hacks.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof V1Hacks.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<V1Hacks.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param device
         * @param template_path
         */
        apply_on_device(device: RootDevice, template_path: string | null): void;
        get_device_type(): string;
        /**
         * @param value
         */
        set_device_type(value: string): void;
        get_service_types(): string[];
    }

    namespace IconInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class IconInfo {
        static $gtype: GObject.GType<IconInfo>;

        // Fields

        ref_count: number;
        mime_type: string;
        uri: string;
        file_extension: string;
        size: number;
        width: number;
        height: number;
        depth: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](mime_type: string, file_extension: string): IconInfo;

        // Signals

        /** @signal */
        connect<K extends keyof IconInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IconInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IconInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IconInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IconInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace XMLUtils {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class XMLUtils {
        static $gtype: GObject.GType<XMLUtils>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): XMLUtils;

        // Signals

        /** @signal */
        connect<K extends keyof XMLUtils.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLUtils.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof XMLUtils.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLUtils.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof XMLUtils.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XMLUtils.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace XMLUtilsIterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class XMLUtilsIterator {
        static $gtype: GObject.GType<XMLUtilsIterator>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](node: any | null): XMLUtilsIterator;

        // Signals

        /** @signal */
        connect<K extends keyof XMLUtilsIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLUtilsIterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof XMLUtilsIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLUtilsIterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof XMLUtilsIterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XMLUtilsIterator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        iterator(): XMLUtilsIterator;
        next(): boolean;
        get(): any | null;
    }

    namespace XMLUtilsChildIterator {
        // Signal signatures
        interface SignalSignatures extends XMLUtilsIterator.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class XMLUtilsChildIterator extends XMLUtilsIterator {
        static $gtype: GObject.GType<XMLUtilsChildIterator>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](node: any | null): XMLUtilsChildIterator;

        // Signals

        /** @signal */
        connect<K extends keyof XMLUtilsChildIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLUtilsChildIterator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof XMLUtilsChildIterator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, XMLUtilsChildIterator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof XMLUtilsChildIterator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<XMLUtilsChildIterator.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace PluginInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::module-path': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::conflicts': (pspec: GObject.ParamSpec) => void;
            'notify::module-loaded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            module_path: string;
            modulePath: string;
            name: string;
            conflicts: never;
            module_loaded: boolean;
            moduleLoaded: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class PluginInformation extends GObject.Object {
        static $gtype: GObject.GType<PluginInformation>;

        // Properties

        /**
         * @construct-only
         */
        get module_path(): string;
        /**
         * @construct-only
         */
        get modulePath(): string;
        /**
         * @construct-only
         */
        get name(): string;
        /**
         * @construct-only
         */
        get conflicts(): never;
        get module_loaded(): boolean;
        set module_loaded(val: boolean);
        get moduleLoaded(): boolean;
        set moduleLoaded(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PluginInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PluginInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PluginInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PluginInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PluginInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PluginInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PluginInformation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param file
         */
        static new_from_file(file: Gio.File): PluginInformation;

        // Methods

        get_module_path(): string;
        get_name(): string;
        get_conflicts(): never;
        get_module_loaded(): boolean;
        /**
         * @param value
         */
        set_module_loaded(value: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type ConnectionManagerClass = typeof ConnectionManager;
    /**
     * @gir-type Struct
     */
    abstract class ConnectionManagerPrivate {
        static $gtype: GObject.GType<ConnectionManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BasicManagementClass = typeof BasicManagement;
    /**
     * @gir-type Struct
     */
    abstract class BasicManagementPrivate {
        static $gtype: GObject.GType<BasicManagementPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DescriptionFileClass = typeof DescriptionFile;
    /**
     * @gir-type Struct
     */
    abstract class DescriptionFilePrivate {
        static $gtype: GObject.GType<DescriptionFilePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DLNAProfileClass = typeof DLNAProfile;
    /**
     * @gir-type Struct
     */
    abstract class DLNAProfilePrivate {
        static $gtype: GObject.GType<DLNAProfilePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EnergyManagementClass = typeof EnergyManagement;
    /**
     * @gir-type Struct
     */
    abstract class EnergyManagementPrivate {
        static $gtype: GObject.GType<EnergyManagementPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RootDeviceClass = typeof RootDevice;
    /**
     * @gir-type Struct
     */
    abstract class RootDevicePrivate {
        static $gtype: GObject.GType<RootDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RootDeviceFactoryClass = typeof RootDeviceFactory;
    /**
     * @gir-type Struct
     */
    abstract class RootDeviceFactoryPrivate {
        static $gtype: GObject.GType<RootDeviceFactoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type LogHandlerClass = typeof LogHandler;
    /**
     * @gir-type Struct
     */
    abstract class LogHandlerPrivate {
        static $gtype: GObject.GType<LogHandlerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MetaConfigClass = typeof MetaConfig;
    /**
     * @gir-type Struct
     */
    abstract class MetaConfigPrivate {
        static $gtype: GObject.GType<MetaConfigPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PluginLoaderClass = typeof PluginLoader;
    /**
     * @gir-type Struct
     */
    abstract class PluginLoaderPrivate {
        static $gtype: GObject.GType<PluginLoaderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RecursiveModuleLoaderClass = typeof RecursiveModuleLoader;
    /**
     * @gir-type Struct
     */
    abstract class RecursiveModuleLoaderPrivate {
        static $gtype: GObject.GType<RecursiveModuleLoaderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;
    /**
     * @gir-type Struct
     */
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResourceInfoClass = typeof ResourceInfo;
    /**
     * @gir-type Struct
     */
    abstract class ResourceInfoPrivate {
        static $gtype: GObject.GType<ResourceInfoPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MediaDeviceClass = typeof MediaDevice;
    /**
     * @gir-type Struct
     */
    abstract class MediaDevicePrivate {
        static $gtype: GObject.GType<MediaDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseConfigurationClass = typeof BaseConfiguration;
    /**
     * @gir-type Struct
     */
    abstract class BaseConfigurationPrivate {
        static $gtype: GObject.GType<BaseConfigurationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CmdlineConfigClass = typeof CmdlineConfig;
    /**
     * @gir-type Struct
     */
    abstract class CmdlineConfigPrivate {
        static $gtype: GObject.GType<CmdlineConfigPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EnvironmentConfigClass = typeof EnvironmentConfig;
    /**
     * @gir-type Struct
     */
    abstract class EnvironmentConfigPrivate {
        static $gtype: GObject.GType<EnvironmentConfigPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserConfigClass = typeof UserConfig;
    /**
     * @gir-type Struct
     */
    abstract class UserConfigPrivate {
        static $gtype: GObject.GType<UserConfigPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type V1HacksClass = typeof V1Hacks;
    /**
     * @gir-type Struct
     */
    abstract class V1HacksPrivate {
        static $gtype: GObject.GType<V1HacksPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type IconInfoClass = typeof IconInfo;
    /**
     * @gir-type Struct
     */
    abstract class IconInfoPrivate {
        static $gtype: GObject.GType<IconInfoPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type XMLUtilsClass = typeof XMLUtils;
    /**
     * @gir-type Struct
     */
    abstract class XMLUtilsPrivate {
        static $gtype: GObject.GType<XMLUtilsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type XMLUtilsIteratorClass = typeof XMLUtilsIterator;
    /**
     * @gir-type Struct
     */
    abstract class XMLUtilsIteratorPrivate {
        static $gtype: GObject.GType<XMLUtilsIteratorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type XMLUtilsChildIteratorClass = typeof XMLUtilsChildIterator;
    /**
     * @gir-type Struct
     */
    abstract class XMLUtilsChildIteratorPrivate {
        static $gtype: GObject.GType<XMLUtilsChildIteratorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PluginInformationClass = typeof PluginInformation;
    /**
     * @gir-type Struct
     */
    abstract class PluginInformationPrivate {
        static $gtype: GObject.GType<PluginInformationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DBusInterfaceIface = typeof DBusInterface;
    /**
     * @gir-type Alias
     */
    type DBusAclProviderIface = typeof DBusAclProvider;
    /**
     * @gir-type Alias
     */
    type ConfigurationIface = typeof Configuration;
    /**
     * @gir-type Alias
     */
    type StateMachineIface = typeof StateMachine;
    namespace DBusInterface {
        /**
         * Interface for implementing DBusInterface.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_shutdown(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DBusInterfaceNamespace {
        $gtype: GObject.GType<DBusInterface>;
        prototype: DBusInterface;
    }
    /**
     * @gir-type Interface
     */
    interface DBusInterface extends GObject.Object, DBusInterface.Interface {
        // Methods

        shutdown(): void;
    }

    export const DBusInterface: DBusInterfaceNamespace & {
        new (): DBusInterface; // This allows `obj instanceof DBusInterface`
    };

    namespace DBusAclProvider {
        /**
         * Interface for implementing DBusAclProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param device
             * @param service
             * @param path
             * @param address
             * @param agent
             * @param _callback_
             * @virtual
             */
            vfunc_is_allowed(
                device: GLib.HashTable<string, string>,
                service: GLib.HashTable<string, string>,
                path: string,
                address: string,
                agent: string | null,
                _callback_: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_is_allowed_finish(_res_: Gio.AsyncResult): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DBusAclProviderNamespace {
        $gtype: GObject.GType<DBusAclProvider>;
        prototype: DBusAclProvider;
    }
    /**
     * @gir-type Interface
     */
    interface DBusAclProvider extends GObject.Object, DBusAclProvider.Interface {
        // Methods

        /**
         * @param device
         * @param service
         * @param path
         * @param address
         * @param agent
         */
        is_allowed(
            device: { [key: string]: any } | GLib.HashTable<string, string>,
            service: { [key: string]: any } | GLib.HashTable<string, string>,
            path: string,
            address: string,
            agent: string | null,
        ): globalThis.Promise<boolean>;
        /**
         * @param device
         * @param service
         * @param path
         * @param address
         * @param agent
         * @param _callback_
         */
        is_allowed(
            device: { [key: string]: any } | GLib.HashTable<string, string>,
            service: { [key: string]: any } | GLib.HashTable<string, string>,
            path: string,
            address: string,
            agent: string | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param device
         * @param service
         * @param path
         * @param address
         * @param agent
         * @param _callback_
         */
        is_allowed(
            device: { [key: string]: any } | GLib.HashTable<string, string>,
            service: { [key: string]: any } | GLib.HashTable<string, string>,
            path: string,
            address: string,
            agent: string | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param _res_
         */
        is_allowed_finish(_res_: Gio.AsyncResult): boolean;
    }

    export const DBusAclProvider: DBusAclProviderNamespace & {
        new (): DBusAclProvider; // This allows `obj instanceof DBusAclProvider`
    };

    namespace Configuration {
        /**
         * Interface for implementing Configuration.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @virtual
             */
            vfunc_get_interface(): string;
            /**
             * @virtual
             */
            vfunc_get_interfaces(): string[];
            /**
             * @virtual
             */
            vfunc_get_port(): number;
            /**
             * @virtual
             */
            vfunc_get_transcoding(): boolean;
            /**
             * @virtual
             */
            vfunc_get_allow_upload(): boolean;
            /**
             * @virtual
             */
            vfunc_get_allow_deletion(): boolean;
            /**
             * @virtual
             */
            vfunc_get_log_levels(): string;
            /**
             * @virtual
             */
            vfunc_get_plugin_path(): string;
            /**
             * @virtual
             */
            vfunc_get_engine_path(): string;
            /**
             * @virtual
             */
            vfunc_get_media_engine(): string;
            /**
             * @virtual
             */
            vfunc_get_video_upload_folder(): string | null;
            /**
             * @virtual
             */
            vfunc_get_music_upload_folder(): string | null;
            /**
             * @virtual
             */
            vfunc_get_picture_upload_folder(): string | null;
            /**
             * @param section
             * @virtual
             */
            vfunc_get_enabled(section: string): boolean;
            /**
             * @param section
             * @virtual
             */
            vfunc_get_title(section: string): string;
            /**
             * @param section
             * @param key
             * @virtual
             */
            vfunc_get_string(section: string, key: string): string;
            /**
             * @param section
             * @param key
             * @virtual
             */
            vfunc_get_string_list(section: string, key: string): Gee.ArrayList;
            /**
             * @param section
             * @param key
             * @param min
             * @param max
             * @virtual
             */
            vfunc_get_int(section: string, key: string, min: number, max: number): number;
            /**
             * @param section
             * @param key
             * @virtual
             */
            vfunc_get_int_list(section: string, key: string): Gee.ArrayList;
            /**
             * @param section
             * @param key
             * @virtual
             */
            vfunc_get_bool(section: string, key: string): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConfigurationNamespace {
        $gtype: GObject.GType<Configuration>;
        prototype: Configuration;
    }
    /**
     * @gir-type Interface
     */
    interface Configuration extends GObject.Object, Configuration.Interface {
        // Methods

        get_interface(): string;
        get_interfaces(): string[];
        get_port(): number;
        get_transcoding(): boolean;
        get_allow_upload(): boolean;
        get_allow_deletion(): boolean;
        get_log_levels(): string;
        get_plugin_path(): string;
        get_engine_path(): string;
        get_media_engine(): string;
        get_video_upload_folder(): string | null;
        get_music_upload_folder(): string | null;
        get_picture_upload_folder(): string | null;
        /**
         * @param section
         */
        get_enabled(section: string): boolean;
        /**
         * @param section
         */
        get_title(section: string): string;
        /**
         * @param section
         * @param key
         */
        get_string(section: string, key: string): string;
        /**
         * @param section
         * @param key
         */
        get_string_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         * @param min
         * @param max
         */
        get_int(section: string, key: string, min: number, max: number): number;
        /**
         * @param section
         * @param key
         */
        get_int_list(section: string, key: string): Gee.ArrayList;
        /**
         * @param section
         * @param key
         */
        get_bool(section: string, key: string): boolean;
    }

    export const Configuration: ConfigurationNamespace & {
        new (): Configuration; // This allows `obj instanceof Configuration`
    };

    namespace StateMachine {
        /**
         * Interface for implementing StateMachine.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * @param _callback_
             * @virtual
             */
            vfunc_run(_callback_: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * @param _res_
             * @virtual
             */
            vfunc_run_finish(_res_: Gio.AsyncResult): void;
            /**
             * @virtual
             */
            vfunc_get_cancellable(): Gio.Cancellable;
            /**
             * @param value
             * @virtual
             */
            vfunc_set_cancellable(value: Gio.Cancellable): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cancellable: Gio.Cancellable;
        }
    }

    export interface StateMachineNamespace {
        $gtype: GObject.GType<StateMachine>;
        prototype: StateMachine;
    }
    /**
     * @gir-type Interface
     */
    interface StateMachine extends GObject.Object, StateMachine.Interface {
        // Properties

        get cancellable(): Gio.Cancellable;
        set cancellable(val: Gio.Cancellable);

        // Methods

        run(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        run(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        run(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        run_finish(_res_: Gio.AsyncResult): void;
        get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         */
        set_cancellable(value: Gio.Cancellable): void;
    }

    export const StateMachine: StateMachineNamespace & {
        new (): StateMachine; // This allows `obj instanceof StateMachine`
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

export default RygelCore;

// END
