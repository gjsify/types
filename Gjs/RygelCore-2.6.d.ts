// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelCore-2.6
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GUPnP from './GUPnP-1.2';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type GSSDP from './GSSDP-1.2';

export namespace RygelCore {

enum LogLevel {
    INVALID,
    ERROR,
    CRITICAL,
    WARNING,
    INFO,
    DEFAULT,
    DEBUG,
}
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
enum SectionEntry {
    TITLE,
    ENABLED,
}
enum ConfigurationError {
    NO_VALUE_SET,
    VALUE_OUT_OF_RANGE,
}
enum CmdlineConfigError {
    VERSION_ONLY,
}
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
function get_pretty_host_name(): string
interface DBusInterface_ConstructProps extends GObject.Object_ConstructProps {
}

interface DBusInterface extends GObject.Object {

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

class DBusInterface {

    // Own properties of RygelCore-2.6.RygelCore.DBusInterface

    static name: string
    static $gtype: GObject.GType<DBusInterface>

    // Constructors of RygelCore-2.6.RygelCore.DBusInterface

    constructor(config?: DBusInterface_ConstructProps) 
    _init(config?: DBusInterface_ConstructProps): void
}

interface DBusAclProvider_ConstructProps extends GObject.Object_ConstructProps {
}

interface DBusAclProvider extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.DBusAclProvider

    is_allowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, _callback_: Gio.AsyncReadyCallback | null): void
    is_allowed_finish(_res_: Gio.AsyncResult): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.DBusAclProvider

    vfunc_is_allowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, _callback_: Gio.AsyncReadyCallback | null): void
    vfunc_is_allowed_finish(_res_: Gio.AsyncResult): boolean

    // Class property signals of RygelCore-2.6.RygelCore.DBusAclProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DBusAclProvider {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProvider

    static name: string
    static $gtype: GObject.GType<DBusAclProvider>

    // Constructors of RygelCore-2.6.RygelCore.DBusAclProvider

    constructor(config?: DBusAclProvider_ConstructProps) 
    _init(config?: DBusAclProvider_ConstructProps): void
}

interface Configuration_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `configuration-changed`
 */
interface Configuration_ConfigurationChangedSignalCallback {
    ($obj: Configuration, entry: ConfigurationEntry): void
}

/**
 * Signal callback interface for `section-changed`
 */
interface Configuration_SectionChangedSignalCallback {
    ($obj: Configuration, section: string, entry: SectionEntry): void
}

/**
 * Signal callback interface for `setting-changed`
 */
interface Configuration_SettingChangedSignalCallback {
    ($obj: Configuration, section: string, key: string): void
}

interface Configuration extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.Configuration

    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.Configuration

    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean

    // Own signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: "configuration-changed", callback: Configuration_ConfigurationChangedSignalCallback): number
    connect_after(sigName: "configuration-changed", callback: Configuration_ConfigurationChangedSignalCallback): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry, ...args: any[]): void
    connect(sigName: "section-changed", callback: Configuration_SectionChangedSignalCallback): number
    connect_after(sigName: "section-changed", callback: Configuration_SectionChangedSignalCallback): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry, ...args: any[]): void
    connect(sigName: "setting-changed", callback: Configuration_SettingChangedSignalCallback): number
    connect_after(sigName: "setting-changed", callback: Configuration_SettingChangedSignalCallback): number
    emit(sigName: "setting-changed", section: string, key: string, ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Configuration {

    // Own properties of RygelCore-2.6.RygelCore.Configuration

    static name: string
    static $gtype: GObject.GType<Configuration>

    // Constructors of RygelCore-2.6.RygelCore.Configuration

    constructor(config?: Configuration_ConstructProps) 
    _init(config?: Configuration_ConstructProps): void
}

interface StateMachine_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.StateMachine

    cancellable?: Gio.Cancellable | null
}

/**
 * Signal callback interface for `completed`
 */
interface StateMachine_CompletedSignalCallback {
    ($obj: StateMachine): void
}

interface StateMachine extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.StateMachine

    cancellable: Gio.Cancellable

    // Owm methods of RygelCore-2.6.RygelCore.StateMachine

    run(_callback_: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void

    // Own virtual methods of RygelCore-2.6.RygelCore.StateMachine

    vfunc_run(_callback_: Gio.AsyncReadyCallback | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void

    // Own signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "completed", callback: StateMachine_CompletedSignalCallback): number
    connect_after(sigName: "completed", callback: StateMachine_CompletedSignalCallback): number
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

class StateMachine {

    // Own properties of RygelCore-2.6.RygelCore.StateMachine

    static name: string
    static $gtype: GObject.GType<StateMachine>

    // Constructors of RygelCore-2.6.RygelCore.StateMachine

    constructor(config?: StateMachine_ConstructProps) 
    _init(config?: StateMachine_ConstructProps): void
}

interface ConnectionManager_ConstructProps extends GUPnP.Service_ConstructProps {
}

interface ConnectionManager {

    // Conflicting properties

    parent_instance: any

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManager

    sink_protocol_info: string
    connection_ids: string
    source_protocol_info: string
    rcs_id: number
    av_transport_id: number
    direction: string

    // Owm methods of RygelCore-2.6.RygelCore.ConnectionManager

    get_current_protocol_info(): string

    // Own virtual methods of RygelCore-2.6.RygelCore.ConnectionManager

    vfunc_get_current_protocol_info(): string

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

class ConnectionManager extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManager

    static name: string
    static $gtype: GObject.GType<ConnectionManager>

    // Constructors of RygelCore-2.6.RygelCore.ConnectionManager

    constructor(config?: ConnectionManager_ConstructProps) 
    constructor() 
    static new(): ConnectionManager
    _init(config?: ConnectionManager_ConstructProps): void
}

interface BasicManagement_ConstructProps extends GUPnP.Service_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.BasicManagement

    max_history_size?: number | null
}

interface BasicManagement {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagement

    max_history_size: number

    // Conflicting properties

    parent_instance: any

    // Own fields of RygelCore-2.6.RygelCore.BasicManagement

    device_status: string

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

class BasicManagement extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagement

    static name: string
    static $gtype: GObject.GType<BasicManagement>

    // Constructors of RygelCore-2.6.RygelCore.BasicManagement

    constructor(config?: BasicManagement_ConstructProps) 
    constructor() 
    static new(): BasicManagement
    _init(config?: BasicManagement_ConstructProps): void
}

interface DescriptionFile_ConstructProps extends GObject.Object_ConstructProps {
}

interface DescriptionFile {

    // Owm methods of RygelCore-2.6.RygelCore.DescriptionFile

    set_device_type(device_type: string): void
    set_model_description(model_description: string): void
    set_model_name(model_name: string): void
    set_model_number(model_number: string): void
    set_friendly_name(friendly_name: string): void
    get_friendly_name(): string
    set_udn(udn: string): void
    get_udn(): string | null
    set_serial_number(serial: string): void
    set_dlna_caps(capabilities: PluginCapabilities): void
    clear_service_list(): void
    add_dlna_doc_element(dlnadoc_xpath: string, dlnadoc_non_xpath: string, dev_cap: string): void
    remove_dlna_doc_element(dlnadoc_xpath: string): void
    add_service(device_name: string, resource_info: ResourceInfo): void
    clear_icon_list(): void
    add_icon(device_name: string, icon_info: IconInfo, url: string): void
    modify_service_type(old_type: string, new_type: string): void
    save(path: string): void

    // Class property signals of RygelCore-2.6.RygelCore.DescriptionFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DescriptionFile extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFile

    static name: string
    static $gtype: GObject.GType<DescriptionFile>

    // Constructors of RygelCore-2.6.RygelCore.DescriptionFile

    constructor(config?: DescriptionFile_ConstructProps) 
    constructor(template_file: string) 
    static new(template_file: string): DescriptionFile
    static from_xml_document(doc: GUPnP.XMLDoc): DescriptionFile
    _init(config?: DescriptionFile_ConstructProps): void
}

interface DLNAProfile {

    // Own fields of RygelCore-2.6.RygelCore.DLNAProfile

    ref_count: number
    mime: string
    name: string
}

class DLNAProfile {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfile

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.DLNAProfile

    constructor(name: string, mime: string) 
    static new(name: string, mime: string): DLNAProfile
    static compare_by_name(a: DLNAProfile, b: DLNAProfile): number
}

interface EnergyManagement_ConstructProps extends GUPnP.Service_ConstructProps {
}

interface EnergyManagement {

    // Conflicting properties

    parent_instance: any

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

class EnergyManagement extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagement

    static name: string
    static $gtype: GObject.GType<EnergyManagement>

    // Constructors of RygelCore-2.6.RygelCore.EnergyManagement

    constructor(config?: EnergyManagement_ConstructProps) 
    constructor() 
    static new(): EnergyManagement
    _init(config?: EnergyManagement_ConstructProps): void
}

interface RootDevice_ConstructProps extends Gio.Initable_ConstructProps, GUPnP.RootDevice_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.RootDevice

    services?: Gee.ArrayList | null
}

interface RootDevice extends Gio.Initable {

    // Own properties of RygelCore-2.6.RygelCore.RootDevice

    services: Gee.ArrayList

    // Conflicting properties

    parent_instance: any

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

class RootDevice extends GUPnP.RootDevice {

    // Own properties of RygelCore-2.6.RygelCore.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of RygelCore-2.6.RygelCore.RootDevice

    constructor(config?: RootDevice_ConstructProps) 
    constructor(context: GUPnP.Context, plugin: Plugin, description_doc: GUPnP.XMLDoc, description_path: string, description_dir: string) 
    static new(context: GUPnP.Context, plugin: Plugin, description_doc: GUPnP.XMLDoc, description_path: string, description_dir: string): RootDevice

    // Overloads of new

    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param description_path Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param description_dir Path to directory where description documents are provided.
     */
    static new(context: GUPnP.Context, description_path: string, description_dir: string): GUPnP.RootDevice
    _init(config?: RootDevice_ConstructProps): void
}

interface RootDeviceFactory_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.RootDeviceFactory

    context?: GUPnP.Context | null
}

interface RootDeviceFactory extends Gio.Initable {

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

class RootDeviceFactory extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactory

    static name: string
    static $gtype: GObject.GType<RootDeviceFactory>

    // Constructors of RygelCore-2.6.RygelCore.RootDeviceFactory

    constructor(config?: RootDeviceFactory_ConstructProps) 
    constructor(context: GUPnP.Context) 
    static new(context: GUPnP.Context): RootDeviceFactory
    _init(config?: RootDeviceFactory_ConstructProps): void
}

interface LogHandler_ConstructProps extends GObject.Object_ConstructProps {
}

interface LogHandler {

    // Class property signals of RygelCore-2.6.RygelCore.LogHandler

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class LogHandler extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.LogHandler

    static name: string
    static $gtype: GObject.GType<LogHandler>

    // Constructors of RygelCore-2.6.RygelCore.LogHandler

    constructor(config?: LogHandler_ConstructProps) 
    _init(config?: LogHandler_ConstructProps): void
    static get_default(): LogHandler
}

interface MetaConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface MetaConfig extends Configuration {

    // Class property signals of RygelCore-2.6.RygelCore.MetaConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetaConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfig

    static name: string
    static $gtype: GObject.GType<MetaConfig>

    // Constructors of RygelCore-2.6.RygelCore.MetaConfig

    constructor(config?: MetaConfig_ConstructProps) 
    constructor() 
    static new(): MetaConfig
    _init(config?: MetaConfig_ConstructProps): void
    static get_default(): MetaConfig
    static register_configuration(config: Configuration): void
    static cleanup(): void
}

interface PluginLoader_ConstructProps extends RecursiveModuleLoader_ConstructProps {
}

/**
 * Signal callback interface for `plugin-available`
 */
interface PluginLoader_PluginAvailableSignalCallback {
    ($obj: PluginLoader, plugin: Plugin): void
}

interface PluginLoader {

    // Owm methods of RygelCore-2.6.RygelCore.PluginLoader

    plugin_disabled(name: string): boolean
    add_plugin(plugin: Plugin): void
    get_plugin_by_name(name: string): Plugin | null
    list_plugins(): Gee.Collection

    // Own signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "plugin-available", callback: PluginLoader_PluginAvailableSignalCallback): number
    connect_after(sigName: "plugin-available", callback: PluginLoader_PluginAvailableSignalCallback): number
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

class PluginLoader extends RecursiveModuleLoader {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoader

    static name: string
    static $gtype: GObject.GType<PluginLoader>

    // Constructors of RygelCore-2.6.RygelCore.PluginLoader

    constructor(config?: PluginLoader_ConstructProps) 
    constructor() 
    static new(): PluginLoader
    _init(config?: PluginLoader_ConstructProps): void
}

interface RecursiveModuleLoader_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    base_path?: string | null
}

interface RecursiveModuleLoader {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    base_path: string

    // Owm methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    load_modules(): void
    load_modules_sync(cancellable: Gio.Cancellable | null): void
    load_module_from_file(file: Gio.File): boolean
    load_module_from_info(info: PluginInformation): boolean
    get_base_path(): string
    set_base_path(value: string): void

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

class RecursiveModuleLoader extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    static name: string
    static $gtype: GObject.GType<RecursiveModuleLoader>

    // Constructors of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    constructor(config?: RecursiveModuleLoader_ConstructProps) 
    _init(config?: RecursiveModuleLoader_ConstructProps): void
}

interface Plugin_ConstructProps extends GUPnP.ResourceFactory_ConstructProps {

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

interface Plugin {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    capabilities: PluginCapabilities
    readonly name: string
    title: string
    readonly description: string
    readonly desc_path: string
    active: boolean
    resource_infos: Gee.ArrayList
    icon_infos: Gee.ArrayList
    default_icons: Gee.ArrayList

    // Owm methods of RygelCore-2.6.RygelCore.Plugin

    add_resource(resource_info: ResourceInfo): void
    add_icon(icon_info: IconInfo): void
    apply_hacks(device: RootDevice, description_path: string): void
    get_capabilities(): PluginCapabilities
    set_capabilities(value: PluginCapabilities): void
    get_name(): string
    get_title(): string
    set_title(value: string): void
    get_description(): string
    get_desc_path(): string
    get_active(): boolean
    set_active(value: boolean): void
    get_resource_infos(): Gee.ArrayList
    get_icon_infos(): Gee.ArrayList
    get_default_icons(): Gee.ArrayList

    // Own virtual methods of RygelCore-2.6.RygelCore.Plugin

    vfunc_apply_hacks(device: RootDevice, description_path: string): void

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

class Plugin extends GUPnP.ResourceFactory {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of RygelCore-2.6.RygelCore.Plugin

    constructor(config?: Plugin_ConstructProps) 
    constructor(desc_path: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities) 
    static new(desc_path: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin

    // Overloads of new

    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     */
    static new(): GUPnP.ResourceFactory
    _init(config?: Plugin_ConstructProps): void
}

interface ResourceInfo {

    // Own fields of RygelCore-2.6.RygelCore.ResourceInfo

    ref_count: number
    upnp_type: string
    upnp_id: string
    description_path: string
    type: GObject.GType
}

class ResourceInfo {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.ResourceInfo

    constructor(upnp_id: string, upnp_type: string, description_path: string, type: GObject.GType) 
    static new(upnp_id: string, upnp_type: string, description_path: string, type: GObject.GType): ResourceInfo
}

interface MediaDevice_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.MediaDevice

    plugin?: Plugin | null
    title?: string | null
    capabilities?: PluginCapabilities | null
}

interface MediaDevice {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevice

    plugin: Plugin
    readonly title: string
    readonly capabilities: PluginCapabilities

    // Owm methods of RygelCore-2.6.RygelCore.MediaDevice

    add_interface(iface: string): void
    remove_interface(iface: string): void
    get_interfaces(): string[]
    get_plugin(): Plugin
    set_plugin(value: Plugin): void
    get_title(): string
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

class MediaDevice extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevice

    static name: string
    static $gtype: GObject.GType<MediaDevice>

    // Constructors of RygelCore-2.6.RygelCore.MediaDevice

    constructor(config?: MediaDevice_ConstructProps) 
    _init(config?: MediaDevice_ConstructProps): void
}

interface BaseConfiguration_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface BaseConfiguration extends Configuration {

    // Owm methods of RygelCore-2.6.RygelCore.BaseConfiguration

    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.BaseConfiguration

    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean

    // Class property signals of RygelCore-2.6.RygelCore.BaseConfiguration

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BaseConfiguration extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfiguration

    static name: string
    static $gtype: GObject.GType<BaseConfiguration>

    // Constructors of RygelCore-2.6.RygelCore.BaseConfiguration

    constructor(config?: BaseConfiguration_ConstructProps) 
    constructor() 
    static new(): BaseConfiguration
    _init(config?: BaseConfiguration_ConstructProps): void
}

interface CmdlineConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface CmdlineConfig extends Configuration {

    // Owm methods of RygelCore-2.6.RygelCore.CmdlineConfig

    get_config_file(): string

    // Class property signals of RygelCore-2.6.RygelCore.CmdlineConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CmdlineConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfig

    static name: string
    static $gtype: GObject.GType<CmdlineConfig>

    // Constructors of RygelCore-2.6.RygelCore.CmdlineConfig

    constructor(config?: CmdlineConfig_ConstructProps) 
    constructor() 
    static new(): CmdlineConfig
    _init(config?: CmdlineConfig_ConstructProps): void
    static get_default(): CmdlineConfig
    static parse_args(args: string[]): /* args */ string[]
}

interface EnvironmentConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface EnvironmentConfig extends Configuration {

    // Class property signals of RygelCore-2.6.RygelCore.EnvironmentConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EnvironmentConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfig

    static name: string
    static $gtype: GObject.GType<EnvironmentConfig>

    // Constructors of RygelCore-2.6.RygelCore.EnvironmentConfig

    constructor(config?: EnvironmentConfig_ConstructProps) 
    constructor() 
    static new(): EnvironmentConfig
    _init(config?: EnvironmentConfig_ConstructProps): void
    static get_default(): EnvironmentConfig
}

interface UserConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface UserConfig extends Configuration {

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

class UserConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.UserConfig

    static name: string
    static $gtype: GObject.GType<UserConfig>

    // Constructors of RygelCore-2.6.RygelCore.UserConfig

    constructor(config?: UserConfig_ConstructProps) 
    constructor(local_path: string) 
    static new(local_path: string): UserConfig
    static with_paths(local_path: string, system_path: string): UserConfig
    _init(config?: UserConfig_ConstructProps): void
    static get_default(): UserConfig
}

interface V1Hacks_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.V1Hacks

    device_type?: string | null
    service_types?: string[] | null
}

interface V1Hacks {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    device_type: string
    readonly service_types: string[]

    // Own fields of RygelCore-2.6.RygelCore.V1Hacks

    description_path: string

    // Owm methods of RygelCore-2.6.RygelCore.V1Hacks

    apply_on_device(device: RootDevice, template_path: string | null): void
    get_device_type(): string
    set_device_type(value: string): void
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

class V1Hacks extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    static name: string
    static $gtype: GObject.GType<V1Hacks>

    // Constructors of RygelCore-2.6.RygelCore.V1Hacks

    constructor(config?: V1Hacks_ConstructProps) 
    constructor(device_type: string, service_types: string[]) 
    static new(device_type: string, service_types: string[]): V1Hacks
    _init(config?: V1Hacks_ConstructProps): void
}

interface IconInfo {

    // Own fields of RygelCore-2.6.RygelCore.IconInfo

    ref_count: number
    mime_type: string
    uri: string
    file_extension: string
    size: number
    width: number
    height: number
    depth: number
}

class IconInfo {

    // Own properties of RygelCore-2.6.RygelCore.IconInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.IconInfo

    constructor(mime_type: string, file_extension: string) 
    static new(mime_type: string, file_extension: string): IconInfo
}

interface XMLUtils {

    // Own fields of RygelCore-2.6.RygelCore.XMLUtils

    ref_count: number
}

class XMLUtils {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtils

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.XMLUtils

    constructor() 
    static new(): XMLUtils
}

interface XMLUtilsIterator {

    // Own fields of RygelCore-2.6.RygelCore.XMLUtilsIterator

    ref_count: number

    // Owm methods of RygelCore-2.6.RygelCore.XMLUtilsIterator

    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
}

class XMLUtilsIterator {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsIterator

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.XMLUtilsIterator

    constructor(node: object | null) 
    static new(node: object | null): XMLUtilsIterator
}

interface XMLUtilsChildIterator {
}

class XMLUtilsChildIterator extends XMLUtilsIterator {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsChildIterator

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.XMLUtilsChildIterator

    constructor(node: object | null) 
    static new(node: object | null): XMLUtilsChildIterator

    // Overloads of new

    static new(node: object | null): XMLUtilsIterator
}

interface PluginInformation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.PluginInformation

    module_path?: string | null
    name?: string | null
    conflicts?: any | null
    module_loaded?: boolean | null
}

interface PluginInformation {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    readonly module_path: string
    readonly name: string
    readonly conflicts: any
    module_loaded: boolean

    // Owm methods of RygelCore-2.6.RygelCore.PluginInformation

    get_module_path(): string
    get_name(): string
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

class PluginInformation extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    static name: string
    static $gtype: GObject.GType<PluginInformation>

    // Constructors of RygelCore-2.6.RygelCore.PluginInformation

    constructor(config?: PluginInformation_ConstructProps) 
    _init(config?: PluginInformation_ConstructProps): void
    static new_from_file(file: Gio.File): PluginInformation
}

interface ConnectionManagerClass {

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManagerClass

    get_current_protocol_info: (self: ConnectionManager) => string
}

abstract class ConnectionManagerClass {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManagerClass

    static name: string
}

interface ConnectionManagerPrivate {
}

class ConnectionManagerPrivate {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManagerPrivate

    static name: string
}

interface BasicManagementClass {
}

abstract class BasicManagementClass {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagementClass

    static name: string
}

interface BasicManagementPrivate {
}

class BasicManagementPrivate {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagementPrivate

    static name: string
}

interface DescriptionFileClass {
}

abstract class DescriptionFileClass {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFileClass

    static name: string
}

interface DescriptionFilePrivate {
}

class DescriptionFilePrivate {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFilePrivate

    static name: string
}

interface DLNAProfileClass {
}

abstract class DLNAProfileClass {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfileClass

    static name: string
}

interface DLNAProfilePrivate {
}

class DLNAProfilePrivate {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfilePrivate

    static name: string
}

interface EnergyManagementClass {
}

abstract class EnergyManagementClass {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagementClass

    static name: string
}

interface EnergyManagementPrivate {
}

class EnergyManagementPrivate {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagementPrivate

    static name: string
}

interface RootDeviceClass {
}

abstract class RootDeviceClass {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceClass

    static name: string
}

interface RootDevicePrivate {
}

class RootDevicePrivate {

    // Own properties of RygelCore-2.6.RygelCore.RootDevicePrivate

    static name: string
}

interface RootDeviceFactoryClass {
}

abstract class RootDeviceFactoryClass {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactoryClass

    static name: string
}

interface RootDeviceFactoryPrivate {
}

class RootDeviceFactoryPrivate {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactoryPrivate

    static name: string
}

interface LogHandlerClass {
}

abstract class LogHandlerClass {

    // Own properties of RygelCore-2.6.RygelCore.LogHandlerClass

    static name: string
}

interface LogHandlerPrivate {
}

class LogHandlerPrivate {

    // Own properties of RygelCore-2.6.RygelCore.LogHandlerPrivate

    static name: string
}

interface MetaConfigClass {
}

abstract class MetaConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfigClass

    static name: string
}

interface MetaConfigPrivate {
}

class MetaConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfigPrivate

    static name: string
}

interface PluginLoaderClass {
}

abstract class PluginLoaderClass {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoaderClass

    static name: string
}

interface PluginLoaderPrivate {
}

class PluginLoaderPrivate {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoaderPrivate

    static name: string
}

interface RecursiveModuleLoaderClass {

    // Own fields of RygelCore-2.6.RygelCore.RecursiveModuleLoaderClass

    load_module_from_file: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    load_module_from_info: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
}

abstract class RecursiveModuleLoaderClass {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoaderClass

    static name: string
}

interface RecursiveModuleLoaderPrivate {
}

class RecursiveModuleLoaderPrivate {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoaderPrivate

    static name: string
}

interface PluginClass {

    // Own fields of RygelCore-2.6.RygelCore.PluginClass

    apply_hacks: (self: Plugin, device: RootDevice, description_path: string) => void
}

abstract class PluginClass {

    // Own properties of RygelCore-2.6.RygelCore.PluginClass

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of RygelCore-2.6.RygelCore.PluginPrivate

    static name: string
}

interface ResourceInfoClass {
}

abstract class ResourceInfoClass {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfoClass

    static name: string
}

interface ResourceInfoPrivate {
}

class ResourceInfoPrivate {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfoPrivate

    static name: string
}

interface MediaDeviceClass {
}

abstract class MediaDeviceClass {

    // Own properties of RygelCore-2.6.RygelCore.MediaDeviceClass

    static name: string
}

interface MediaDevicePrivate {
}

class MediaDevicePrivate {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevicePrivate

    static name: string
}

interface BaseConfigurationClass {

    // Own fields of RygelCore-2.6.RygelCore.BaseConfigurationClass

    get_interface: (self: BaseConfiguration) => string
    get_interfaces: (self: BaseConfiguration) => string[]
    get_port: (self: BaseConfiguration) => number
    get_transcoding: (self: BaseConfiguration) => boolean
    get_allow_upload: (self: BaseConfiguration) => boolean
    get_allow_deletion: (self: BaseConfiguration) => boolean
    get_log_levels: (self: BaseConfiguration) => string
    get_plugin_path: (self: BaseConfiguration) => string
    get_engine_path: (self: BaseConfiguration) => string
    get_media_engine: (self: BaseConfiguration) => string
    get_video_upload_folder: (self: BaseConfiguration) => string | null
    get_music_upload_folder: (self: BaseConfiguration) => string | null
    get_picture_upload_folder: (self: BaseConfiguration) => string | null
    get_enabled: (self: BaseConfiguration, section: string) => boolean
    get_title: (self: BaseConfiguration, section: string) => string
    get_string: (self: BaseConfiguration, section: string, key: string) => string
    get_string_list: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    get_int: (self: BaseConfiguration, section: string, key: string, min: number, max: number) => number
    get_int_list: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    get_bool: (self: BaseConfiguration, section: string, key: string) => boolean
}

abstract class BaseConfigurationClass {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfigurationClass

    static name: string
}

interface BaseConfigurationPrivate {
}

class BaseConfigurationPrivate {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfigurationPrivate

    static name: string
}

interface CmdlineConfigClass {
}

abstract class CmdlineConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfigClass

    static name: string
}

interface CmdlineConfigPrivate {
}

class CmdlineConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfigPrivate

    static name: string
}

interface EnvironmentConfigClass {
}

abstract class EnvironmentConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfigClass

    static name: string
}

interface EnvironmentConfigPrivate {
}

class EnvironmentConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfigPrivate

    static name: string
}

interface UserConfigClass {
}

abstract class UserConfigClass {

    // Own properties of RygelCore-2.6.RygelCore.UserConfigClass

    static name: string
}

interface UserConfigPrivate {
}

class UserConfigPrivate {

    // Own properties of RygelCore-2.6.RygelCore.UserConfigPrivate

    static name: string
}

interface V1HacksClass {
}

abstract class V1HacksClass {

    // Own properties of RygelCore-2.6.RygelCore.V1HacksClass

    static name: string
}

interface V1HacksPrivate {
}

class V1HacksPrivate {

    // Own properties of RygelCore-2.6.RygelCore.V1HacksPrivate

    static name: string
}

interface IconInfoClass {
}

abstract class IconInfoClass {

    // Own properties of RygelCore-2.6.RygelCore.IconInfoClass

    static name: string
}

interface IconInfoPrivate {
}

class IconInfoPrivate {

    // Own properties of RygelCore-2.6.RygelCore.IconInfoPrivate

    static name: string
}

interface XMLUtilsClass {
}

abstract class XMLUtilsClass {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsClass

    static name: string
}

interface XMLUtilsPrivate {
}

class XMLUtilsPrivate {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsPrivate

    static name: string
}

interface XMLUtilsIteratorClass {
}

abstract class XMLUtilsIteratorClass {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsIteratorClass

    static name: string
}

interface XMLUtilsIteratorPrivate {
}

class XMLUtilsIteratorPrivate {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsIteratorPrivate

    static name: string
}

interface XMLUtilsChildIteratorClass {
}

abstract class XMLUtilsChildIteratorClass {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsChildIteratorClass

    static name: string
}

interface XMLUtilsChildIteratorPrivate {
}

class XMLUtilsChildIteratorPrivate {

    // Own properties of RygelCore-2.6.RygelCore.XMLUtilsChildIteratorPrivate

    static name: string
}

interface PluginInformationClass {
}

abstract class PluginInformationClass {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformationClass

    static name: string
}

interface PluginInformationPrivate {
}

class PluginInformationPrivate {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformationPrivate

    static name: string
}

interface DBusInterfaceIface {

    // Own fields of RygelCore-2.6.RygelCore.DBusInterfaceIface

    shutdown: (self: DBusInterface) => void
}

abstract class DBusInterfaceIface {

    // Own properties of RygelCore-2.6.RygelCore.DBusInterfaceIface

    static name: string
}

interface DBusAclProviderIface {

    // Own fields of RygelCore-2.6.RygelCore.DBusAclProviderIface

    is_allowed: (self: DBusAclProvider, device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    is_allowed_finish: (self: DBusAclProvider, _res_: Gio.AsyncResult) => boolean
}

abstract class DBusAclProviderIface {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProviderIface

    static name: string
}

interface ConfigurationIface {

    // Own fields of RygelCore-2.6.RygelCore.ConfigurationIface

    get_interface: (self: Configuration) => string
    get_interfaces: (self: Configuration) => string[]
    get_port: (self: Configuration) => number
    get_transcoding: (self: Configuration) => boolean
    get_allow_upload: (self: Configuration) => boolean
    get_allow_deletion: (self: Configuration) => boolean
    get_log_levels: (self: Configuration) => string
    get_plugin_path: (self: Configuration) => string
    get_engine_path: (self: Configuration) => string
    get_media_engine: (self: Configuration) => string
    get_video_upload_folder: (self: Configuration) => string | null
    get_music_upload_folder: (self: Configuration) => string | null
    get_picture_upload_folder: (self: Configuration) => string | null
    get_enabled: (self: Configuration, section: string) => boolean
    get_title: (self: Configuration, section: string) => string
    get_string: (self: Configuration, section: string, key: string) => string
    get_string_list: (self: Configuration, section: string, key: string) => Gee.ArrayList
    get_int: (self: Configuration, section: string, key: string, min: number, max: number) => number
    get_int_list: (self: Configuration, section: string, key: string) => Gee.ArrayList
    get_bool: (self: Configuration, section: string, key: string) => boolean
}

abstract class ConfigurationIface {

    // Own properties of RygelCore-2.6.RygelCore.ConfigurationIface

    static name: string
}

interface StateMachineIface {

    // Own fields of RygelCore-2.6.RygelCore.StateMachineIface

    run: (self: StateMachine, _callback_: Gio.AsyncReadyCallback | null) => void
    run_finish: (self: StateMachine, _res_: Gio.AsyncResult) => void
    get_cancellable: (self: StateMachine) => Gio.Cancellable
    set_cancellable: (self: StateMachine, value: Gio.Cancellable) => void
}

abstract class StateMachineIface {

    // Own properties of RygelCore-2.6.RygelCore.StateMachineIface

    static name: string
}

}
export default RygelCore;