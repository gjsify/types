// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelCore-2.6
 */

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
function getPrettyHostName(): string
interface DBusInterface_ConstructProps extends GObject.Object_ConstructProps {
}

interface DBusInterface extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.DBusInterface

    shutdown(): void

    // Class property signals of RygelCore-2.6.RygelCore.DBusInterface

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    isAllowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, callback: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean

    // Class property signals of RygelCore-2.6.RygelCore.DBusAclProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (entry: ConfigurationEntry): void
}

/**
 * Signal callback interface for `section-changed`
 */
interface Configuration_SectionChangedSignalCallback {
    (section: string, entry: SectionEntry): void
}

/**
 * Signal callback interface for `setting-changed`
 */
interface Configuration_SettingChangedSignalCallback {
    (section: string, key: string): void
}

interface Configuration extends GObject.Object {

    // Owm methods of RygelCore-2.6.RygelCore.Configuration

    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean

    // Own signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: "configuration-changed", callback: Configuration_ConfigurationChangedSignalCallback): number
    on(sigName: "configuration-changed", callback: Configuration_ConfigurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: Configuration_ConfigurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: Configuration_ConfigurationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", ...args: any[]): void
    connect(sigName: "section-changed", callback: Configuration_SectionChangedSignalCallback): number
    on(sigName: "section-changed", callback: Configuration_SectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: Configuration_SectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: Configuration_SectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "section-changed", entry: SectionEntry, ...args: any[]): void
    connect(sigName: "setting-changed", callback: Configuration_SettingChangedSignalCallback): number
    on(sigName: "setting-changed", callback: Configuration_SettingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: Configuration_SettingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: Configuration_SettingChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "setting-changed", key: string, ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    (): void
}

interface StateMachine extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.StateMachine

    cancellable: Gio.Cancellable

    // Owm methods of RygelCore-2.6.RygelCore.StateMachine

    run(callback: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void

    // Own signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "completed", callback: StateMachine_CompletedSignalCallback): number
    on(sigName: "completed", callback: StateMachine_CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: StateMachine_CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: StateMachine_CompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "completed", ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentInstance: any

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManager

    sinkProtocolInfo: string
    connectionIds: string
    sourceProtocolInfo: string
    rcsId: number
    avTransportId: number
    direction: string

    // Owm methods of RygelCore-2.6.RygelCore.ConnectionManager

    getCurrentProtocolInfo(): string

    // Class property signals of RygelCore-2.6.RygelCore.ConnectionManager

    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    maxHistorySize?: number | null
}

interface BasicManagement {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagement

    maxHistorySize: number

    // Conflicting properties

    parentInstance: any

    // Own fields of RygelCore-2.6.RygelCore.BasicManagement

    deviceStatus: string

    // Owm methods of RygelCore-2.6.RygelCore.BasicManagement

    getMaxHistorySize(): number
    setMaxHistorySize(value: number): void

    // Class property signals of RygelCore-2.6.RygelCore.BasicManagement

    connect(sigName: "notify::max-history-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-history-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-history-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-history-size", ...args: any[]): void
    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    setDeviceType(deviceType: string): void
    setModelDescription(modelDescription: string): void
    setModelName(modelName: string): void
    setModelNumber(modelNumber: string): void
    setFriendlyName(friendlyName: string): void
    getFriendlyName(): string
    setUdn(udn: string): void
    getUdn(): string | null
    setSerialNumber(serial: string): void
    setDlnaCaps(capabilities: PluginCapabilities): void
    clearServiceList(): void
    addDlnaDocElement(dlnadocXpath: string, dlnadocNonXpath: string, devCap: string): void
    removeDlnaDocElement(dlnadocXpath: string): void
    addService(deviceName: string, resourceInfo: ResourceInfo): void
    clearIconList(): void
    addIcon(deviceName: string, iconInfo: IconInfo, url: string): void
    modifyServiceType(oldType: string, newType: string): void
    save(path: string): void

    // Class property signals of RygelCore-2.6.RygelCore.DescriptionFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DescriptionFile extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFile

    static name: string
    static $gtype: GObject.GType<DescriptionFile>

    // Constructors of RygelCore-2.6.RygelCore.DescriptionFile

    constructor(config?: DescriptionFile_ConstructProps) 
    constructor(templateFile: string) 
    static new(templateFile: string): DescriptionFile
    static fromXmlDocument(doc: GUPnP.XMLDoc): DescriptionFile
    _init(config?: DescriptionFile_ConstructProps): void
}

interface DLNAProfile {

    // Own fields of RygelCore-2.6.RygelCore.DLNAProfile

    refCount: number
    mime: string
    name: string
}

class DLNAProfile {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfile

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.DLNAProfile

    constructor(name: string, mime: string) 
    static new(name: string, mime: string): DLNAProfile
    static compareByName(a: DLNAProfile, b: DLNAProfile): number
}

interface EnergyManagement_ConstructProps extends GUPnP.Service_ConstructProps {
}

interface EnergyManagement {

    // Conflicting properties

    parentInstance: any

    // Class property signals of RygelCore-2.6.RygelCore.EnergyManagement

    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentInstance: any

    // Owm methods of RygelCore-2.6.RygelCore.RootDevice

    getServices(): Gee.ArrayList

    // Class property signals of RygelCore-2.6.RygelCore.RootDevice

    connect(sigName: "notify::services", callback: (...args: any[]) => void): number
    on(sigName: "notify::services", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::services", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::services", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::services", ...args: any[]): void
    connect(sigName: "notify::available", callback: (...args: any[]) => void): number
    on(sigName: "notify::available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::description-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-dir", ...args: any[]): void
    connect(sigName: "notify::description-doc", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-doc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-doc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-doc", ...args: any[]): void
    connect(sigName: "notify::description-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::description-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description-path", ...args: any[]): void
    connect(sigName: "notify::root-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root-device", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::document", callback: (...args: any[]) => void): number
    on(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::location", callback: (...args: any[]) => void): number
    on(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::resource-factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-factory", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: "notify::url-base", callback: (...args: any[]) => void): number
    on(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url-base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url-base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url-base", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RootDevice extends GUPnP.RootDevice {

    // Own properties of RygelCore-2.6.RygelCore.RootDevice

    static name: string
    static $gtype: GObject.GType<RootDevice>

    // Constructors of RygelCore-2.6.RygelCore.RootDevice

    constructor(config?: RootDevice_ConstructProps) 
    constructor(context: GUPnP.Context, plugin: Plugin, descriptionDoc: GUPnP.XMLDoc, descriptionPath: string, descriptionDir: string) 
    static new(context: GUPnP.Context, plugin: Plugin, descriptionDoc: GUPnP.XMLDoc, descriptionPath: string, descriptionDir: string): RootDevice

    // Overloads of new

    /**
     * Create a new #GUPnPRootDevice object, automatically loading and parsing
     * device description document from `description_path`.
     * @constructor 
     * @param context The #GUPnPContext
     * @param descriptionPath Path to device description document. This could either be an absolute path or path relative to `description_dir`.
     * @param descriptionDir Path to directory where description documents are provided.
     */
    static new(context: GUPnP.Context, descriptionPath: string, descriptionDir: string): GUPnP.RootDevice
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
    getContext(): GUPnP.Context

    // Class property signals of RygelCore-2.6.RygelCore.RootDeviceFactory

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class LogHandler extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.LogHandler

    static name: string
    static $gtype: GObject.GType<LogHandler>

    // Constructors of RygelCore-2.6.RygelCore.LogHandler

    constructor(config?: LogHandler_ConstructProps) 
    _init(config?: LogHandler_ConstructProps): void
    static getDefault(): LogHandler
}

interface MetaConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface MetaConfig extends Configuration {

    // Class property signals of RygelCore-2.6.RygelCore.MetaConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getDefault(): MetaConfig
    static registerConfiguration(config: Configuration): void
    static cleanup(): void
}

interface PluginLoader_ConstructProps extends RecursiveModuleLoader_ConstructProps {
}

/**
 * Signal callback interface for `plugin-available`
 */
interface PluginLoader_PluginAvailableSignalCallback {
    (plugin: Plugin): void
}

interface PluginLoader {

    // Owm methods of RygelCore-2.6.RygelCore.PluginLoader

    pluginDisabled(name: string): boolean
    addPlugin(plugin: Plugin): void
    getPluginByName(name: string): Plugin | null
    listPlugins(): Gee.Collection

    // Own signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "plugin-available", callback: PluginLoader_PluginAvailableSignalCallback): number
    on(sigName: "plugin-available", callback: PluginLoader_PluginAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-available", callback: PluginLoader_PluginAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-available", callback: PluginLoader_PluginAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "plugin-available", ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "notify::base-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    basePath?: string | null
}

interface RecursiveModuleLoader {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    basePath: string

    // Owm methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    loadModules(): void
    loadModulesSync(cancellable: Gio.Cancellable | null): void
    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void

    // Class property signals of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    connect(sigName: "notify::base-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    descPath?: string | null
    active?: boolean | null
    resourceInfos?: Gee.ArrayList | null
    iconInfos?: Gee.ArrayList | null
    defaultIcons?: Gee.ArrayList | null
}

interface Plugin {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    capabilities: PluginCapabilities
    readonly name: string
    title: string
    readonly description: string
    readonly descPath: string
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList

    // Owm methods of RygelCore-2.6.RygelCore.Plugin

    addResource(resourceInfo: ResourceInfo): void
    addIcon(iconInfo: IconInfo): void
    applyHacks(device: RootDevice, descriptionPath: string): void
    getCapabilities(): PluginCapabilities
    setCapabilities(value: PluginCapabilities): void
    getName(): string
    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    getDescPath(): string
    getActive(): boolean
    setActive(value: boolean): void
    getResourceInfos(): Gee.ArrayList
    getIconInfos(): Gee.ArrayList
    getDefaultIcons(): Gee.ArrayList

    // Class property signals of RygelCore-2.6.RygelCore.Plugin

    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::desc-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desc-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desc-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-infos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-infos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-icons", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Plugin extends GUPnP.ResourceFactory {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of RygelCore-2.6.RygelCore.Plugin

    constructor(config?: Plugin_ConstructProps) 
    constructor(descPath: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities) 
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin

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

    refCount: number
    upnpType: string
    upnpId: string
    descriptionPath: string
    type: GObject.GType
}

class ResourceInfo {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.ResourceInfo

    constructor(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.GType) 
    static new(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.GType): ResourceInfo
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

    addInterface(iface: string): void
    removeInterface(iface: string): void
    getInterfaces(): string[]
    getPlugin(): Plugin
    setPlugin(value: Plugin): void
    getTitle(): string
    getCapabilities(): PluginCapabilities

    // Class property signals of RygelCore-2.6.RygelCore.MediaDevice

    connect(sigName: "notify::plugin", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getInterface(): string
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string
    getPluginPath(): string
    getEnginePath(): string
    getMediaEngine(): string
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string
    getString(section: string, key: string): string
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean

    // Class property signals of RygelCore-2.6.RygelCore.BaseConfiguration

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    getConfigFile(): string

    // Class property signals of RygelCore-2.6.RygelCore.CmdlineConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getDefault(): CmdlineConfig
    static parseArgs(args: string[]): /* args */ string[]
}

interface EnvironmentConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface EnvironmentConfig extends Configuration {

    // Class property signals of RygelCore-2.6.RygelCore.EnvironmentConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static getDefault(): EnvironmentConfig
}

interface UserConfig_ConstructProps extends Configuration_ConstructProps, GObject.Object_ConstructProps {
}

interface UserConfig extends Configuration {

    // Own fields of RygelCore-2.6.RygelCore.UserConfig

    keyFile: GLib.KeyFile
    sysKeyFile: GLib.KeyFile
    keyFileMonitor: Gio.FileMonitor
    sysKeyFileMonitor: Gio.FileMonitor

    // Class property signals of RygelCore-2.6.RygelCore.UserConfig

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.UserConfig

    static name: string
    static $gtype: GObject.GType<UserConfig>

    // Constructors of RygelCore-2.6.RygelCore.UserConfig

    constructor(config?: UserConfig_ConstructProps) 
    constructor(localPath: string) 
    static new(localPath: string): UserConfig
    static withPaths(localPath: string, systemPath: string): UserConfig
    _init(config?: UserConfig_ConstructProps): void
    static getDefault(): UserConfig
}

interface V1Hacks_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of RygelCore-2.6.RygelCore.V1Hacks

    deviceType?: string | null
    serviceTypes?: string[] | null
}

interface V1Hacks {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    deviceType: string
    readonly serviceTypes: string[]

    // Own fields of RygelCore-2.6.RygelCore.V1Hacks

    descriptionPath: string

    // Owm methods of RygelCore-2.6.RygelCore.V1Hacks

    applyOnDevice(device: RootDevice, templatePath: string | null): void
    getDeviceType(): string
    setDeviceType(value: string): void
    getServiceTypes(): string[]

    // Class property signals of RygelCore-2.6.RygelCore.V1Hacks

    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::service-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class V1Hacks extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    static name: string
    static $gtype: GObject.GType<V1Hacks>

    // Constructors of RygelCore-2.6.RygelCore.V1Hacks

    constructor(config?: V1Hacks_ConstructProps) 
    constructor(deviceType: string, serviceTypes: string[]) 
    static new(deviceType: string, serviceTypes: string[]): V1Hacks
    _init(config?: V1Hacks_ConstructProps): void
}

interface IconInfo {

    // Own fields of RygelCore-2.6.RygelCore.IconInfo

    refCount: number
    mimeType: string
    uri: string
    fileExtension: string
    size: number
    width: number
    height: number
    depth: number
}

class IconInfo {

    // Own properties of RygelCore-2.6.RygelCore.IconInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.IconInfo

    constructor(mimeType: string, fileExtension: string) 
    static new(mimeType: string, fileExtension: string): IconInfo
}

interface XMLUtils {

    // Own fields of RygelCore-2.6.RygelCore.XMLUtils

    refCount: number
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

    refCount: number

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

    modulePath?: string | null
    name?: string | null
    conflicts?: any | null
    moduleLoaded?: boolean | null
}

interface PluginInformation {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    readonly modulePath: string
    readonly name: string
    readonly conflicts: any
    moduleLoaded: boolean

    // Owm methods of RygelCore-2.6.RygelCore.PluginInformation

    getModulePath(): string
    getName(): string
    getConflicts(): any
    getModuleLoaded(): boolean
    setModuleLoaded(value: boolean): void

    // Class property signals of RygelCore-2.6.RygelCore.PluginInformation

    connect(sigName: "notify::module-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::module-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::module-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::module-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::module-path", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::conflicts", callback: (...args: any[]) => void): number
    on(sigName: "notify::conflicts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::conflicts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::conflicts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::conflicts", ...args: any[]): void
    connect(sigName: "notify::module-loaded", callback: (...args: any[]) => void): number
    on(sigName: "notify::module-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::module-loaded", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::module-loaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::module-loaded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PluginInformation extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    static name: string
    static $gtype: GObject.GType<PluginInformation>

    // Constructors of RygelCore-2.6.RygelCore.PluginInformation

    constructor(config?: PluginInformation_ConstructProps) 
    _init(config?: PluginInformation_ConstructProps): void
    static newFromFile(file: Gio.File): PluginInformation
}

interface ConnectionManagerClass {

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManagerClass

    getCurrentProtocolInfo: (self: ConnectionManager) => string
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

    loadModuleFromFile: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    loadModuleFromInfo: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
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

    applyHacks: (self: Plugin, device: RootDevice, descriptionPath: string) => void
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

    getInterface: (self: BaseConfiguration) => string
    getInterfaces: (self: BaseConfiguration) => string[]
    getPort: (self: BaseConfiguration) => number
    getTranscoding: (self: BaseConfiguration) => boolean
    getAllowUpload: (self: BaseConfiguration) => boolean
    getAllowDeletion: (self: BaseConfiguration) => boolean
    getLogLevels: (self: BaseConfiguration) => string
    getPluginPath: (self: BaseConfiguration) => string
    getEnginePath: (self: BaseConfiguration) => string
    getMediaEngine: (self: BaseConfiguration) => string
    getVideoUploadFolder: (self: BaseConfiguration) => string | null
    getMusicUploadFolder: (self: BaseConfiguration) => string | null
    getPictureUploadFolder: (self: BaseConfiguration) => string | null
    getEnabled: (self: BaseConfiguration, section: string) => boolean
    getTitle: (self: BaseConfiguration, section: string) => string
    getString: (self: BaseConfiguration, section: string, key: string) => string
    getStringList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getInt: (self: BaseConfiguration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getBool: (self: BaseConfiguration, section: string, key: string) => boolean
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

    isAllowed: (self: DBusAclProvider, device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, callback: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: DBusAclProvider, res: Gio.AsyncResult) => boolean
}

abstract class DBusAclProviderIface {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProviderIface

    static name: string
}

interface ConfigurationIface {

    // Own fields of RygelCore-2.6.RygelCore.ConfigurationIface

    getInterface: (self: Configuration) => string
    getInterfaces: (self: Configuration) => string[]
    getPort: (self: Configuration) => number
    getTranscoding: (self: Configuration) => boolean
    getAllowUpload: (self: Configuration) => boolean
    getAllowDeletion: (self: Configuration) => boolean
    getLogLevels: (self: Configuration) => string
    getPluginPath: (self: Configuration) => string
    getEnginePath: (self: Configuration) => string
    getMediaEngine: (self: Configuration) => string
    getVideoUploadFolder: (self: Configuration) => string | null
    getMusicUploadFolder: (self: Configuration) => string | null
    getPictureUploadFolder: (self: Configuration) => string | null
    getEnabled: (self: Configuration, section: string) => boolean
    getTitle: (self: Configuration, section: string) => string
    getString: (self: Configuration, section: string, key: string) => string
    getStringList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getInt: (self: Configuration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getBool: (self: Configuration, section: string, key: string) => boolean
}

abstract class ConfigurationIface {

    // Own properties of RygelCore-2.6.RygelCore.ConfigurationIface

    static name: string
}

interface StateMachineIface {

    // Own fields of RygelCore-2.6.RygelCore.StateMachineIface

    run: (self: StateMachine, callback: Gio.AsyncReadyCallback | null) => void
    runFinish: (self: StateMachine, res: Gio.AsyncResult) => void
    getCancellable: (self: StateMachine) => Gio.Cancellable
    setCancellable: (self: StateMachine, value: Gio.Cancellable) => void
}

abstract class StateMachineIface {

    // Own properties of RygelCore-2.6.RygelCore.StateMachineIface

    static name: string
}

}
export default RygelCore;