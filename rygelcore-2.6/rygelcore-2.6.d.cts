
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * RygelCore-2.6
 */

import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GUPnP from '@girs/gupnp-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-2.4';
import type GSSDP from '@girs/gssdp-1.2';

export enum LogLevel {
    INVALID,
    ERROR,
    CRITICAL,
    WARNING,
    INFO,
    DEFAULT,
    DEBUG,
}
export enum ConfigurationEntry {
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
export enum SectionEntry {
    TITLE,
    ENABLED,
}
export enum ConfigurationError {
    NO_VALUE_SET,
    VALUE_OUT_OF_RANGE,
}
export enum CmdlineConfigError {
    VERSION_ONLY,
}
export enum PluginCapabilities {
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
export function get_pretty_host_name(): string | null
export module DBusInterface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DBusInterface extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.DBusInterface

    shutdown(): void

    // Own virtual methods of RygelCore-2.6.RygelCore.DBusInterface

    vfunc_shutdown(): void

    // Class property signals of RygelCore-2.6.RygelCore.DBusInterface

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DBusInterface {

    // Own properties of RygelCore-2.6.RygelCore.DBusInterface

    static name: string
    static $gtype: GObject.GType<DBusInterface>

    // Constructors of RygelCore-2.6.RygelCore.DBusInterface

    constructor(config?: DBusInterface.ConstructorProperties) 
    _init(config?: DBusInterface.ConstructorProperties): void
}

export module DBusAclProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DBusAclProvider extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.DBusAclProvider

    is_allowed(device: GLib.HashTable, service: GLib.HashTable, path: string | null, address: string | null, agent: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    is_allowed_finish(_res_: Gio.AsyncResult): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.DBusAclProvider

    vfunc_is_allowed(device: GLib.HashTable, service: GLib.HashTable, path: string | null, address: string | null, agent: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_is_allowed_finish(_res_: Gio.AsyncResult): boolean

    // Class property signals of RygelCore-2.6.RygelCore.DBusAclProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DBusAclProvider {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProvider

    static name: string
    static $gtype: GObject.GType<DBusAclProvider>

    // Constructors of RygelCore-2.6.RygelCore.DBusAclProvider

    constructor(config?: DBusAclProvider.ConstructorProperties) 
    _init(config?: DBusAclProvider.ConstructorProperties): void
}

export module Configuration {

    // Signal callback interfaces

    /**
     * Signal callback interface for `configuration-changed`
     */
    export interface ConfigurationChangedSignalCallback {
        ($obj: Configuration, entry: ConfigurationEntry): void
    }

    /**
     * Signal callback interface for `section-changed`
     */
    export interface SectionChangedSignalCallback {
        ($obj: Configuration, section: string | null, entry: SectionEntry): void
    }

    /**
     * Signal callback interface for `setting-changed`
     */
    export interface SettingChangedSignalCallback {
        ($obj: Configuration, section: string | null, key: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Configuration extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.Configuration

    get_interface(): string | null
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string | null
    get_plugin_path(): string | null
    get_engine_path(): string | null
    get_media_engine(): string | null
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string | null): boolean
    get_title(section: string | null): string | null
    get_string(section: string | null, key: string | null): string | null
    get_string_list(section: string | null, key: string | null): Gee.ArrayList
    get_int(section: string | null, key: string | null, min: number, max: number): number
    get_int_list(section: string | null, key: string | null): Gee.ArrayList
    get_bool(section: string | null, key: string | null): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.Configuration

    vfunc_get_interface(): string | null
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string | null
    vfunc_get_plugin_path(): string | null
    vfunc_get_engine_path(): string | null
    vfunc_get_media_engine(): string | null
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string | null): boolean
    vfunc_get_title(section: string | null): string | null
    vfunc_get_string(section: string | null, key: string | null): string | null
    vfunc_get_string_list(section: string | null, key: string | null): Gee.ArrayList
    vfunc_get_int(section: string | null, key: string | null, min: number, max: number): number
    vfunc_get_int_list(section: string | null, key: string | null): Gee.ArrayList
    vfunc_get_bool(section: string | null, key: string | null): boolean

    // Own signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: "configuration-changed", callback: Configuration.ConfigurationChangedSignalCallback): number
    connect_after(sigName: "configuration-changed", callback: Configuration.ConfigurationChangedSignalCallback): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry, ...args: any[]): void
    connect(sigName: "section-changed", callback: Configuration.SectionChangedSignalCallback): number
    connect_after(sigName: "section-changed", callback: Configuration.SectionChangedSignalCallback): number
    emit(sigName: "section-changed", section: string | null, entry: SectionEntry, ...args: any[]): void
    connect(sigName: "setting-changed", callback: Configuration.SettingChangedSignalCallback): number
    connect_after(sigName: "setting-changed", callback: Configuration.SettingChangedSignalCallback): number
    emit(sigName: "setting-changed", section: string | null, key: string | null, ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Configuration {

    // Own properties of RygelCore-2.6.RygelCore.Configuration

    static name: string
    static $gtype: GObject.GType<Configuration>

    // Constructors of RygelCore-2.6.RygelCore.Configuration

    constructor(config?: Configuration.ConstructorProperties) 
    _init(config?: Configuration.ConstructorProperties): void
}

export module StateMachine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `completed`
     */
    export interface CompletedSignalCallback {
        ($obj: StateMachine): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.StateMachine

        cancellable?: Gio.Cancellable | null
    }

}

export interface StateMachine extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.StateMachine

    cancellable: Gio.Cancellable

    // Owm methods of RygelCore-2.6.RygelCore.StateMachine

    run(_callback_: Gio.AsyncReadyCallback<this> | null): void
    run_finish(_res_: Gio.AsyncResult): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of RygelCore-2.6.RygelCore.StateMachine

    vfunc_run(_callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void

    // Own signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "completed", callback: StateMachine.CompletedSignalCallback): number
    connect_after(sigName: "completed", callback: StateMachine.CompletedSignalCallback): number
    emit(sigName: "completed", ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "notify::cancellable", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StateMachine {

    // Own properties of RygelCore-2.6.RygelCore.StateMachine

    static name: string
    static $gtype: GObject.GType<StateMachine>

    // Constructors of RygelCore-2.6.RygelCore.StateMachine

    constructor(config?: StateMachine.ConstructorProperties) 
    _init(config?: StateMachine.ConstructorProperties): void
}

export module ConnectionManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GUPnP.Service.ConstructorProperties {
    }

}

export interface ConnectionManager {

    // Conflicting properties

    parent_instance: GUPnP.ServiceInfo & GObject.Object & GObject.Object

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManager

    sink_protocol_info: string | null
    connection_ids: string | null
    source_protocol_info: string | null
    rcs_id: number
    av_transport_id: number
    direction: string | null

    // Owm methods of RygelCore-2.6.RygelCore.ConnectionManager

    get_current_protocol_info(): string | null

    // Own virtual methods of RygelCore-2.6.RygelCore.ConnectionManager

    vfunc_get_current_protocol_info(): string | null

    // Class property signals of RygelCore-2.6.RygelCore.ConnectionManager

    connect(sigName: "notify::root-device", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ConnectionManager extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManager

    static name: string
    static $gtype: GObject.GType<ConnectionManager>

    // Constructors of RygelCore-2.6.RygelCore.ConnectionManager

    constructor(config?: ConnectionManager.ConstructorProperties) 
    constructor() 
    static new(): ConnectionManager
    _init(config?: ConnectionManager.ConstructorProperties): void
}

export module BasicManagement {

    // Constructor properties interface

    export interface ConstructorProperties extends GUPnP.Service.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.BasicManagement

        max_history_size?: number | null
    }

}

export interface BasicManagement {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagement

    max_history_size: number

    // Conflicting properties

    parent_instance: GUPnP.ServiceInfo & GObject.Object & GObject.Object

    // Own fields of RygelCore-2.6.RygelCore.BasicManagement

    device_status: string | null

    // Owm methods of RygelCore-2.6.RygelCore.BasicManagement

    get_max_history_size(): number
    set_max_history_size(value: number): void

    // Class property signals of RygelCore-2.6.RygelCore.BasicManagement

    connect(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-history-size", ...args: any[]): void
    connect(sigName: "notify::root-device", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BasicManagement extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagement

    static name: string
    static $gtype: GObject.GType<BasicManagement>

    // Constructors of RygelCore-2.6.RygelCore.BasicManagement

    constructor(config?: BasicManagement.ConstructorProperties) 
    constructor() 
    static new(): BasicManagement
    _init(config?: BasicManagement.ConstructorProperties): void
}

export module DescriptionFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DescriptionFile {

    // Owm methods of RygelCore-2.6.RygelCore.DescriptionFile

    set_device_type(device_type: string | null): void
    set_model_description(model_description: string | null): void
    set_model_name(model_name: string | null): void
    set_model_number(model_number: string | null): void
    set_friendly_name(friendly_name: string | null): void
    get_friendly_name(): string | null
    set_udn(udn: string | null): void
    get_udn(): string | null
    set_serial_number(serial: string | null): void
    set_dlna_caps(capabilities: PluginCapabilities): void
    clear_service_list(): void
    add_dlna_doc_element(dlnadoc_xpath: string | null, dlnadoc_non_xpath: string | null, dev_cap: string | null): void
    remove_dlna_doc_element(dlnadoc_xpath: string | null): void
    add_service(device_name: string | null, resource_info: ResourceInfo): void
    clear_icon_list(): void
    add_icon(device_name: string | null, icon_info: IconInfo, url: string | null): void
    modify_service_type(old_type: string | null, new_type: string | null): void
    save(path: string | null): void

    // Class property signals of RygelCore-2.6.RygelCore.DescriptionFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DescriptionFile extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFile

    static name: string
    static $gtype: GObject.GType<DescriptionFile>

    // Constructors of RygelCore-2.6.RygelCore.DescriptionFile

    constructor(config?: DescriptionFile.ConstructorProperties) 
    constructor(template_file: string | null) 
    static new(template_file: string | null): DescriptionFile
    static from_xml_document(doc: GUPnP.XMLDoc): DescriptionFile
    _init(config?: DescriptionFile.ConstructorProperties): void
}

export interface DLNAProfile {

    // Own fields of RygelCore-2.6.RygelCore.DLNAProfile

    ref_count: number
    mime: string | null
    name: string | null
}

export class DLNAProfile {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfile

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.DLNAProfile

    constructor(name: string | null, mime: string | null) 
    static new(name: string | null, mime: string | null): DLNAProfile
    static compare_by_name(a: DLNAProfile, b: DLNAProfile): number
}

export module EnergyManagement {

    // Constructor properties interface

    export interface ConstructorProperties extends GUPnP.Service.ConstructorProperties {
    }

}

export interface EnergyManagement {

    // Conflicting properties

    parent_instance: GUPnP.ServiceInfo & GObject.Object & GObject.Object

    // Class property signals of RygelCore-2.6.RygelCore.EnergyManagement

    connect(sigName: "notify::root-device", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EnergyManagement extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagement

    static name: string
    static $gtype: GObject.GType<EnergyManagement>

    // Constructors of RygelCore-2.6.RygelCore.EnergyManagement

    constructor(config?: EnergyManagement.ConstructorProperties) 
    constructor() 
    static new(): EnergyManagement
    _init(config?: EnergyManagement.ConstructorProperties): void
}

export module RootDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GUPnP.RootDevice.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.RootDevice

        services?: Gee.ArrayList | null
    }

}

export interface RootDevice extends Gio.Initable {

    // Own properties of RygelCore-2.6.RygelCore.RootDevice

    services: Gee.ArrayList

    // Conflicting properties

    parent_instance: GUPnP.Device & GUPnP.DeviceInfo & GObject.Object

    // Owm methods of RygelCore-2.6.RygelCore.RootDevice

    get_services(): Gee.ArrayList

    // Class property signals of RygelCore-2.6.RygelCore.RootDevice

    connect(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::services", ...args: any[]): void
    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::description-dir", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-dir", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-dir", ...args: any[]): void
    connect(sigName: "notify::description-doc", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-doc", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-doc", ...args: any[]): void
    connect(sigName: "notify::description-path", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-path", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description-path", ...args: any[]): void
    connect(sigName: "notify::root-device", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-device", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-factory", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RootDevice extends GUPnP.RootDevice {

    // Own properties of RygelCore-2.6.RygelCore.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of RygelCore-2.6.RygelCore.RootDevice

    constructor(config?: RootDevice.ConstructorProperties) 
    constructor(context: GUPnP.Context, plugin: Plugin, description_doc: GUPnP.XMLDoc, description_path: string | null, description_dir: string | null) 
    static new(context: GUPnP.Context, plugin: Plugin, description_doc: GUPnP.XMLDoc, description_path: string | null, description_dir: string | null): RootDevice

    // Overloads of new

    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     * @returns A new @GUPnPRootDevice object.
     */
    static new(context: GUPnP.Context, description_path: string | null, description_dir: string | null): GUPnP.RootDevice
    _init(config?: RootDevice.ConstructorProperties): void
}

export module RootDeviceFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.RootDeviceFactory

        context?: GUPnP.Context | null
    }

}

export interface RootDeviceFactory extends Gio.Initable {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactory

    readonly context: GUPnP.Context

    // Owm methods of RygelCore-2.6.RygelCore.RootDeviceFactory

    create(plugin: Plugin): RootDevice
    get_context(): GUPnP.Context

    // Class property signals of RygelCore-2.6.RygelCore.RootDeviceFactory

    connect(sigName: "notify::context", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RootDeviceFactory extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactory

    static name: string
    static $gtype: GObject.GType<RootDeviceFactory>

    // Constructors of RygelCore-2.6.RygelCore.RootDeviceFactory

    constructor(config?: RootDeviceFactory.ConstructorProperties) 
    constructor(context: GUPnP.Context) 
    static new(context: GUPnP.Context): RootDeviceFactory
    _init(config?: RootDeviceFactory.ConstructorProperties): void
}

export module LogHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LogHandler {

    // Class property signals of RygelCore-2.6.RygelCore.LogHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LogHandler extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.LogHandler

    static name: string
    static $gtype: GObject.GType<LogHandler>

    // Constructors of RygelCore-2.6.RygelCore.LogHandler

    constructor(config?: LogHandler.ConstructorProperties) 
    _init(config?: LogHandler.ConstructorProperties): void
    static get_default(): LogHandler
}

export module MetaConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MetaConfig extends Configuration {

    // Class property signals of RygelCore-2.6.RygelCore.MetaConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetaConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfig

    static name: string
    static $gtype: GObject.GType<MetaConfig>

    // Constructors of RygelCore-2.6.RygelCore.MetaConfig

    constructor(config?: MetaConfig.ConstructorProperties) 
    constructor() 
    static new(): MetaConfig
    _init(config?: MetaConfig.ConstructorProperties): void
    static get_default(): MetaConfig
    static register_configuration(config: Configuration): void
    static cleanup(): void
}

export module PluginLoader {

    // Signal callback interfaces

    /**
     * Signal callback interface for `plugin-available`
     */
    export interface PluginAvailableSignalCallback {
        ($obj: PluginLoader, plugin: Plugin): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends RecursiveModuleLoader.ConstructorProperties {
    }

}

export interface PluginLoader {

    // Owm methods of RygelCore-2.6.RygelCore.PluginLoader

    plugin_disabled(name: string | null): boolean
    add_plugin(plugin: Plugin): void
    get_plugin_by_name(name: string | null): Plugin | null
    list_plugins(): Gee.Collection

    // Own signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "plugin-available", callback: PluginLoader.PluginAvailableSignalCallback): number
    connect_after(sigName: "plugin-available", callback: PluginLoader.PluginAvailableSignalCallback): number
    emit(sigName: "plugin-available", plugin: Plugin, ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PluginLoader extends RecursiveModuleLoader {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoader

    static name: string
    static $gtype: GObject.GType<PluginLoader>

    // Constructors of RygelCore-2.6.RygelCore.PluginLoader

    constructor(config?: PluginLoader.ConstructorProperties) 
    constructor() 
    static new(): PluginLoader
    _init(config?: PluginLoader.ConstructorProperties): void
}

export module RecursiveModuleLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

        base_path?: string | null
    }

}

export interface RecursiveModuleLoader {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    base_path: string | null

    // Owm methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    load_modules(): void
    load_modules_sync(cancellable: Gio.Cancellable | null): void
    load_module_from_file(file: Gio.File): boolean
    load_module_from_info(info: PluginInformation): boolean
    get_base_path(): string | null
    set_base_path(value: string | null): void

    // Own virtual methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    vfunc_load_module_from_file(file: Gio.File): boolean
    vfunc_load_module_from_info(info: PluginInformation): boolean

    // Class property signals of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    connect(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RecursiveModuleLoader extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    static name: string
    static $gtype: GObject.GType<RecursiveModuleLoader>

    // Constructors of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    constructor(config?: RecursiveModuleLoader.ConstructorProperties) 
    _init(config?: RecursiveModuleLoader.ConstructorProperties): void
}

export module Plugin {

    // Constructor properties interface

    export interface ConstructorProperties extends GUPnP.ResourceFactory.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.Plugin

        capabilities?: PluginCapabilities | null
        name?: string | null
        title?: string | null
        description?: string | null
        desc_path?: string | null
        active?: boolean | null
        resource_infos?: Gee.ArrayList | null
        icon_infos?: Gee.ArrayList | null
        default_icons?: Gee.ArrayList | null
    }

}

export interface Plugin {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    capabilities: PluginCapabilities
    readonly name: string | null
    title: string | null
    readonly description: string | null
    readonly desc_path: string | null
    active: boolean
    resource_infos: Gee.ArrayList
    icon_infos: Gee.ArrayList
    default_icons: Gee.ArrayList

    // Owm methods of RygelCore-2.6.RygelCore.Plugin

    add_resource(resource_info: ResourceInfo): void
    add_icon(icon_info: IconInfo): void
    apply_hacks(device: RootDevice, description_path: string | null): void
    get_capabilities(): PluginCapabilities
    set_capabilities(value: PluginCapabilities): void
    get_name(): string | null
    get_title(): string | null
    set_title(value: string | null): void
    get_description(): string | null
    get_desc_path(): string | null
    get_active(): boolean
    set_active(value: boolean): void
    get_resource_infos(): Gee.ArrayList
    get_icon_infos(): Gee.ArrayList
    get_default_icons(): Gee.ArrayList

    // Own virtual methods of RygelCore-2.6.RygelCore.Plugin

    vfunc_apply_hacks(device: RootDevice, description_path: string | null): void

    // Class property signals of RygelCore-2.6.RygelCore.Plugin

    connect(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc-path", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Plugin extends GUPnP.ResourceFactory {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of RygelCore-2.6.RygelCore.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    constructor(desc_path: string | null, name: string | null, title: string | null, description: string | null, capabilities: PluginCapabilities) 
    static new(desc_path: string | null, name: string | null, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin

    // Overloads of new

    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     * @returns A #GUPnPResourceFactory object.
     */
    static new(): GUPnP.ResourceFactory
    _init(config?: Plugin.ConstructorProperties): void
}

export interface ResourceInfo {

    // Own fields of RygelCore-2.6.RygelCore.ResourceInfo

    ref_count: number
    upnp_type: string | null
    upnp_id: string | null
    description_path: string | null
    type: GObject.GType
}

export class ResourceInfo {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.ResourceInfo

    constructor(upnp_id: string | null, upnp_type: string | null, description_path: string | null, type: GObject.GType) 
    static new(upnp_id: string | null, upnp_type: string | null, description_path: string | null, type: GObject.GType): ResourceInfo
}

export module MediaDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.MediaDevice

        plugin?: Plugin | null
        title?: string | null
        capabilities?: PluginCapabilities | null
    }

}

export interface MediaDevice {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevice

    plugin: Plugin
    readonly title: string | null
    readonly capabilities: PluginCapabilities

    // Owm methods of RygelCore-2.6.RygelCore.MediaDevice

    add_interface(iface: string | null): void
    remove_interface(iface: string | null): void
    get_interfaces(): string[]
    get_plugin(): Plugin
    set_plugin(value: Plugin): void
    get_title(): string | null
    get_capabilities(): PluginCapabilities

    // Class property signals of RygelCore-2.6.RygelCore.MediaDevice

    connect(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MediaDevice extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevice

    static name: string
    static $gtype: GObject.GType<MediaDevice>

    // Constructors of RygelCore-2.6.RygelCore.MediaDevice

    constructor(config?: MediaDevice.ConstructorProperties) 
    _init(config?: MediaDevice.ConstructorProperties): void
}

export module BaseConfiguration {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BaseConfiguration extends Configuration {

    // Owm methods of RygelCore-2.6.RygelCore.BaseConfiguration

    get_interface(): string | null
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string | null
    get_plugin_path(): string | null
    get_engine_path(): string | null
    get_media_engine(): string | null
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string | null): boolean
    get_title(section: string | null): string | null
    get_string(section: string | null, key: string | null): string | null
    get_string_list(section: string | null, key: string | null): Gee.ArrayList
    get_int(section: string | null, key: string | null, min: number, max: number): number
    get_int_list(section: string | null, key: string | null): Gee.ArrayList
    get_bool(section: string | null, key: string | null): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.BaseConfiguration

    vfunc_get_interface(): string | null
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string | null
    vfunc_get_plugin_path(): string | null
    vfunc_get_engine_path(): string | null
    vfunc_get_media_engine(): string | null
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string | null): boolean
    vfunc_get_title(section: string | null): string | null
    vfunc_get_string(section: string | null, key: string | null): string | null
    vfunc_get_string_list(section: string | null, key: string | null): Gee.ArrayList
    vfunc_get_int(section: string | null, key: string | null, min: number, max: number): number
    vfunc_get_int_list(section: string | null, key: string | null): Gee.ArrayList
    vfunc_get_bool(section: string | null, key: string | null): boolean

    // Class property signals of RygelCore-2.6.RygelCore.BaseConfiguration

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BaseConfiguration extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfiguration

    static name: string
    static $gtype: GObject.GType<BaseConfiguration>

    // Constructors of RygelCore-2.6.RygelCore.BaseConfiguration

    constructor(config?: BaseConfiguration.ConstructorProperties) 
    constructor() 
    static new(): BaseConfiguration
    _init(config?: BaseConfiguration.ConstructorProperties): void
}

export module CmdlineConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CmdlineConfig extends Configuration {

    // Owm methods of RygelCore-2.6.RygelCore.CmdlineConfig

    get_config_file(): string | null

    // Class property signals of RygelCore-2.6.RygelCore.CmdlineConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CmdlineConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfig

    static name: string
    static $gtype: GObject.GType<CmdlineConfig>

    // Constructors of RygelCore-2.6.RygelCore.CmdlineConfig

    constructor(config?: CmdlineConfig.ConstructorProperties) 
    constructor() 
    static new(): CmdlineConfig
    _init(config?: CmdlineConfig.ConstructorProperties): void
    static get_default(): CmdlineConfig
    static parse_args(args: string[]): /* args */ string[]
}

export module EnvironmentConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EnvironmentConfig extends Configuration {

    // Class property signals of RygelCore-2.6.RygelCore.EnvironmentConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EnvironmentConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfig

    static name: string
    static $gtype: GObject.GType<EnvironmentConfig>

    // Constructors of RygelCore-2.6.RygelCore.EnvironmentConfig

    constructor(config?: EnvironmentConfig.ConstructorProperties) 
    constructor() 
    static new(): EnvironmentConfig
    _init(config?: EnvironmentConfig.ConstructorProperties): void
    static get_default(): EnvironmentConfig
}

export module UserConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface UserConfig extends Configuration {

    // Own fields of RygelCore-2.6.RygelCore.UserConfig

    key_file: GLib.KeyFile
    sys_key_file: GLib.KeyFile
    key_file_monitor: Gio.FileMonitor
    sys_key_file_monitor: Gio.FileMonitor

    // Class property signals of RygelCore-2.6.RygelCore.UserConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UserConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.UserConfig

    static name: string
    static $gtype: GObject.GType<UserConfig>

    // Constructors of RygelCore-2.6.RygelCore.UserConfig

    constructor(config?: UserConfig.ConstructorProperties) 
    constructor(local_path: string | null) 
    static new(local_path: string | null): UserConfig
    static with_paths(local_path: string | null, system_path: string | null): UserConfig
    _init(config?: UserConfig.ConstructorProperties): void
    static get_default(): UserConfig
}

export module V1Hacks {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.V1Hacks

        device_type?: string | null
        service_types?: string[] | null
    }

}

export interface V1Hacks {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    device_type: string | null
    readonly service_types: string[]

    // Own fields of RygelCore-2.6.RygelCore.V1Hacks

    description_path: string | null

    // Owm methods of RygelCore-2.6.RygelCore.V1Hacks

    apply_on_device(device: RootDevice, template_path: string | null): void
    get_device_type(): string | null
    set_device_type(value: string | null): void
    get_service_types(): string[]

    // Class property signals of RygelCore-2.6.RygelCore.V1Hacks

    connect(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::service-types", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-types", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class V1Hacks extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    static name: string
    static $gtype: GObject.GType<V1Hacks>

    // Constructors of RygelCore-2.6.RygelCore.V1Hacks

    constructor(config?: V1Hacks.ConstructorProperties) 
    constructor(device_type: string | null, service_types: string[]) 
    static new(device_type: string | null, service_types: string[]): V1Hacks
    _init(config?: V1Hacks.ConstructorProperties): void
}

export interface IconInfo {

    // Own fields of RygelCore-2.6.RygelCore.IconInfo

    ref_count: number
    mime_type: string | null
    uri: string | null
    file_extension: string | null
    size: number
    width: number
    height: number
    depth: number
}

export class IconInfo {

    // Own properties of RygelCore-2.6.RygelCore.IconInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.IconInfo

    constructor(mime_type: string | null, file_extension: string | null) 
    static new(mime_type: string | null, file_extension: string | null): IconInfo
}

export interface XMLUtils {

    // Own fields of RygelCore-2.6.RygelCore.XMLUtils

    ref_count: number
}

export class XMLUtils {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtils

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.XMLUtils

    constructor() 
    static new(): XMLUtils
}

export interface XMLUtilsIterator {

    // Own fields of RygelCore-2.6.RygelCore.XMLUtilsIterator

    ref_count: number

    // Owm methods of RygelCore-2.6.RygelCore.XMLUtilsIterator

    iterator(): XMLUtilsIterator
    next(): boolean
    get(): any | null
}

export class XMLUtilsIterator {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsIterator

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.XMLUtilsIterator

    constructor(node: any | null) 
    static new(node: any | null): XMLUtilsIterator
}

export interface XMLUtilsChildIterator {
}

export class XMLUtilsChildIterator extends XMLUtilsIterator {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsChildIterator

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.XMLUtilsChildIterator

    constructor(node: any | null) 
    static new(node: any | null): XMLUtilsChildIterator

    // Overloads of new

    static new(node: any | null): XMLUtilsIterator
}

export module PluginInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelCore-2.6.RygelCore.PluginInformation

        module_path?: string | null
        name?: string | null
        conflicts?: any | null
        module_loaded?: boolean | null
    }

}

export interface PluginInformation {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    readonly module_path: string | null
    readonly name: string | null
    readonly conflicts: any
    module_loaded: boolean

    // Owm methods of RygelCore-2.6.RygelCore.PluginInformation

    get_module_path(): string | null
    get_name(): string | null
    get_conflicts(): any
    get_module_loaded(): boolean
    set_module_loaded(value: boolean): void

    // Class property signals of RygelCore-2.6.RygelCore.PluginInformation

    connect(sigName: "notify::module-path", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module-path", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::module-path", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::conflicts", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::conflicts", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::conflicts", ...args: any[]): void
    connect(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::module-loaded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PluginInformation extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    static name: string
    static $gtype: GObject.GType<PluginInformation>

    // Constructors of RygelCore-2.6.RygelCore.PluginInformation

    constructor(config?: PluginInformation.ConstructorProperties) 
    _init(config?: PluginInformation.ConstructorProperties): void
    static new_from_file(file: Gio.File): PluginInformation
}

export interface ConnectionManagerClass {

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManagerClass

    get_current_protocol_info: (self: ConnectionManager) => string | null
}

export abstract class ConnectionManagerClass {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManagerClass

    static name: string
}

export interface ConnectionManagerPrivate {
}

export class ConnectionManagerPrivate {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManagerPrivate

    static name: string
}

export interface BasicManagementClass {
}

export abstract class BasicManagementClass {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagementClass

    static name: string
}

export interface BasicManagementPrivate {
}

export class BasicManagementPrivate {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagementPrivate

    static name: string
}

export interface DescriptionFileClass {
}

export abstract class DescriptionFileClass {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFileClass

    static name: string
}

export interface DescriptionFilePrivate {
}

export class DescriptionFilePrivate {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFilePrivate

    static name: string
}

export interface DLNAProfileClass {
}

export abstract class DLNAProfileClass {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfileClass

    static name: string
}

export interface DLNAProfilePrivate {
}

export class DLNAProfilePrivate {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfilePrivate

    static name: string
}

export interface EnergyManagementClass {
}

export abstract class EnergyManagementClass {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagementClass

    static name: string
}

export interface EnergyManagementPrivate {
}

export class EnergyManagementPrivate {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagementPrivate

    static name: string
}

export interface RootDeviceClass {
}

export abstract class RootDeviceClass {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceClass

    static name: string
}

export interface RootDevicePrivate {
}

export class RootDevicePrivate {

    // Own properties of RygelCore-2.6.RygelCore.RootDevicePrivate

    static name: string
}

export interface RootDeviceFactoryClass {
}

export abstract class RootDeviceFactoryClass {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactoryClass

    static name: string
}

export interface RootDeviceFactoryPrivate {
}

export class RootDeviceFactoryPrivate {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactoryPrivate

    static name: string
}

export interface LogHandlerClass {
}

export abstract class LogHandlerClass {

    // Own properties of RygelCore-2.6.RygelCore.LogHandlerClass

    static name: string
}

export interface LogHandlerPrivate {
}

export class LogHandlerPrivate {

    // Own properties of RygelCore-2.6.RygelCore.LogHandlerPrivate

    static name: string
}

export interface MetaConfigClass {
}

export abstract class MetaConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfigClass

    static name: string
}

export interface MetaConfigPrivate {
}

export class MetaConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfigPrivate

    static name: string
}

export interface PluginLoaderClass {
}

export abstract class PluginLoaderClass {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoaderClass

    static name: string
}

export interface PluginLoaderPrivate {
}

export class PluginLoaderPrivate {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoaderPrivate

    static name: string
}

export interface RecursiveModuleLoaderClass {

    // Own fields of RygelCore-2.6.RygelCore.RecursiveModuleLoaderClass

    load_module_from_file: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    load_module_from_info: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
}

export abstract class RecursiveModuleLoaderClass {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoaderClass

    static name: string
}

export interface RecursiveModuleLoaderPrivate {
}

export class RecursiveModuleLoaderPrivate {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoaderPrivate

    static name: string
}

export interface PluginClass {

    // Own fields of RygelCore-2.6.RygelCore.PluginClass

    apply_hacks: (self: Plugin, device: RootDevice, description_path: string | null) => void
}

export abstract class PluginClass {

    // Own properties of RygelCore-2.6.RygelCore.PluginClass

    static name: string
}

export interface PluginPrivate {
}

export class PluginPrivate {

    // Own properties of RygelCore-2.6.RygelCore.PluginPrivate

    static name: string
}

export interface ResourceInfoClass {
}

export abstract class ResourceInfoClass {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfoClass

    static name: string
}

export interface ResourceInfoPrivate {
}

export class ResourceInfoPrivate {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfoPrivate

    static name: string
}

export interface MediaDeviceClass {
}

export abstract class MediaDeviceClass {

    // Own properties of RygelCore-2.6.RygelCore.MediaDeviceClass

    static name: string
}

export interface MediaDevicePrivate {
}

export class MediaDevicePrivate {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevicePrivate

    static name: string
}

export interface BaseConfigurationClass {

    // Own fields of RygelCore-2.6.RygelCore.BaseConfigurationClass

    get_interface: (self: BaseConfiguration) => string | null
    get_interfaces: (self: BaseConfiguration) => string[]
    get_port: (self: BaseConfiguration) => number
    get_transcoding: (self: BaseConfiguration) => boolean
    get_allow_upload: (self: BaseConfiguration) => boolean
    get_allow_deletion: (self: BaseConfiguration) => boolean
    get_log_levels: (self: BaseConfiguration) => string | null
    get_plugin_path: (self: BaseConfiguration) => string | null
    get_engine_path: (self: BaseConfiguration) => string | null
    get_media_engine: (self: BaseConfiguration) => string | null
    get_video_upload_folder: (self: BaseConfiguration) => string | null
    get_music_upload_folder: (self: BaseConfiguration) => string | null
    get_picture_upload_folder: (self: BaseConfiguration) => string | null
    get_enabled: (self: BaseConfiguration, section: string | null) => boolean
    get_title: (self: BaseConfiguration, section: string | null) => string | null
    get_string: (self: BaseConfiguration, section: string | null, key: string | null) => string | null
    get_string_list: (self: BaseConfiguration, section: string | null, key: string | null) => Gee.ArrayList
    get_int: (self: BaseConfiguration, section: string | null, key: string | null, min: number, max: number) => number
    get_int_list: (self: BaseConfiguration, section: string | null, key: string | null) => Gee.ArrayList
    get_bool: (self: BaseConfiguration, section: string | null, key: string | null) => boolean
}

export abstract class BaseConfigurationClass {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfigurationClass

    static name: string
}

export interface BaseConfigurationPrivate {
}

export class BaseConfigurationPrivate {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfigurationPrivate

    static name: string
}

export interface CmdlineConfigClass {
}

export abstract class CmdlineConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfigClass

    static name: string
}

export interface CmdlineConfigPrivate {
}

export class CmdlineConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfigPrivate

    static name: string
}

export interface EnvironmentConfigClass {
}

export abstract class EnvironmentConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfigClass

    static name: string
}

export interface EnvironmentConfigPrivate {
}

export class EnvironmentConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfigPrivate

    static name: string
}

export interface UserConfigClass {
}

export abstract class UserConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.UserConfigClass

    static name: string
}

export interface UserConfigPrivate {
}

export class UserConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.UserConfigPrivate

    static name: string
}

export interface V1HacksClass {
}

export abstract class V1HacksClass {

    // Own properties of RygelCore-2.6.RygelCore.V1HacksClass

    static name: string
}

export interface V1HacksPrivate {
}

export class V1HacksPrivate {

    // Own properties of RygelCore-2.6.RygelCore.V1HacksPrivate

    static name: string
}

export interface IconInfoClass {
}

export abstract class IconInfoClass {

    // Own properties of RygelCore-2.6.RygelCore.IconInfoClass

    static name: string
}

export interface IconInfoPrivate {
}

export class IconInfoPrivate {

    // Own properties of RygelCore-2.6.RygelCore.IconInfoPrivate

    static name: string
}

export interface XMLUtilsClass {
}

export abstract class XMLUtilsClass {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsClass

    static name: string
}

export interface XMLUtilsPrivate {
}

export class XMLUtilsPrivate {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsPrivate

    static name: string
}

export interface XMLUtilsIteratorClass {
}

export abstract class XMLUtilsIteratorClass {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsIteratorClass

    static name: string
}

export interface XMLUtilsIteratorPrivate {
}

export class XMLUtilsIteratorPrivate {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsIteratorPrivate

    static name: string
}

export interface XMLUtilsChildIteratorClass {
}

export abstract class XMLUtilsChildIteratorClass {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsChildIteratorClass

    static name: string
}

export interface XMLUtilsChildIteratorPrivate {
}

export class XMLUtilsChildIteratorPrivate {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsChildIteratorPrivate

    static name: string
}

export interface PluginInformationClass {
}

export abstract class PluginInformationClass {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformationClass

    static name: string
}

export interface PluginInformationPrivate {
}

export class PluginInformationPrivate {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformationPrivate

    static name: string
}

export interface DBusInterfaceIface {

    // Own fields of RygelCore-2.6.RygelCore.DBusInterfaceIface

    shutdown: (self: DBusInterface) => void
}

export abstract class DBusInterfaceIface {

    // Own properties of RygelCore-2.6.RygelCore.DBusInterfaceIface

    static name: string
}

export interface DBusAclProviderIface {

    // Own fields of RygelCore-2.6.RygelCore.DBusAclProviderIface

    is_allowed: (self: DBusAclProvider, device: GLib.HashTable, service: GLib.HashTable, path: string | null, address: string | null, agent: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    is_allowed_finish: (self: DBusAclProvider, _res_: Gio.AsyncResult) => boolean
}

export abstract class DBusAclProviderIface {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProviderIface

    static name: string
}

export interface ConfigurationIface {

    // Own fields of RygelCore-2.6.RygelCore.ConfigurationIface

    get_interface: (self: Configuration) => string | null
    get_interfaces: (self: Configuration) => string[]
    get_port: (self: Configuration) => number
    get_transcoding: (self: Configuration) => boolean
    get_allow_upload: (self: Configuration) => boolean
    get_allow_deletion: (self: Configuration) => boolean
    get_log_levels: (self: Configuration) => string | null
    get_plugin_path: (self: Configuration) => string | null
    get_engine_path: (self: Configuration) => string | null
    get_media_engine: (self: Configuration) => string | null
    get_video_upload_folder: (self: Configuration) => string | null
    get_music_upload_folder: (self: Configuration) => string | null
    get_picture_upload_folder: (self: Configuration) => string | null
    get_enabled: (self: Configuration, section: string | null) => boolean
    get_title: (self: Configuration, section: string | null) => string | null
    get_string: (self: Configuration, section: string | null, key: string | null) => string | null
    get_string_list: (self: Configuration, section: string | null, key: string | null) => Gee.ArrayList
    get_int: (self: Configuration, section: string | null, key: string | null, min: number, max: number) => number
    get_int_list: (self: Configuration, section: string | null, key: string | null) => Gee.ArrayList
    get_bool: (self: Configuration, section: string | null, key: string | null) => boolean
}

export abstract class ConfigurationIface {

    // Own properties of RygelCore-2.6.RygelCore.ConfigurationIface

    static name: string
}

export interface StateMachineIface {

    // Own fields of RygelCore-2.6.RygelCore.StateMachineIface

    run: (self: StateMachine, _callback_: Gio.AsyncReadyCallback | null) => void
    run_finish: (self: StateMachine, _res_: Gio.AsyncResult) => void
    get_cancellable: (self: StateMachine) => Gio.Cancellable
    set_cancellable: (self: StateMachine, value: Gio.Cancellable) => void
}

export abstract class StateMachineIface {

    // Own properties of RygelCore-2.6.RygelCore.StateMachineIface

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