
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-rygelcore-2.6-import.d.ts';
    
/**
 * RygelCore-2.6
 */

import type GLib from '@girs/node-glib-2.0';
import type Gee from '@girs/node-gee-0.8';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GUPnP from '@girs/node-gupnp-1.2';
import type libxml2 from '@girs/node-libxml2-2.0';
import type Soup from '@girs/node-soup-2.4';
import type GSSDP from '@girs/node-gssdp-1.2';

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
export function getPrettyHostName(): string | null
export module DBusInterface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DBusInterface extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.DBusInterface

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.DBusInterface

    // Has conflict: shutdown(): void

    // Own virtual methods of RygelCore-2.6.RygelCore.DBusInterface

    shutdown(): void

    // Class property signals of RygelCore-2.6.RygelCore.DBusInterface

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DBusInterface {

    // Own properties of RygelCore-2.6.RygelCore.DBusInterface

    static name: string

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

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProvider

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.DBusAclProvider

    // Has conflict: isAllowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: isAllowedFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.DBusAclProvider

    isAllowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, callback: Gio.AsyncReadyCallback | null): void
    isAllowedFinish(res: Gio.AsyncResult): boolean

    // Class property signals of RygelCore-2.6.RygelCore.DBusAclProvider

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DBusAclProvider {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProvider

    static name: string

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
        (entry: ConfigurationEntry): void
    }

    /**
     * Signal callback interface for `section-changed`
     */
    export interface SectionChangedSignalCallback {
        (section: string, entry: SectionEntry): void
    }

    /**
     * Signal callback interface for `setting-changed`
     */
    export interface SettingChangedSignalCallback {
        (section: string, key: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Configuration extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.Configuration

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.Configuration

    // Has conflict: getInterface(): string | null
    // Has conflict: getInterfaces(): string[]
    // Has conflict: getPort(): number
    // Has conflict: getTranscoding(): boolean
    // Has conflict: getAllowUpload(): boolean
    // Has conflict: getAllowDeletion(): boolean
    // Has conflict: getLogLevels(): string | null
    // Has conflict: getPluginPath(): string | null
    // Has conflict: getEnginePath(): string | null
    // Has conflict: getMediaEngine(): string | null
    // Has conflict: getVideoUploadFolder(): string | null
    // Has conflict: getMusicUploadFolder(): string | null
    // Has conflict: getPictureUploadFolder(): string | null
    // Has conflict: getEnabled(section: string): boolean
    // Has conflict: getTitle(section: string): string | null
    // Has conflict: getString(section: string, key: string): string | null
    // Has conflict: getStringList(section: string, key: string): Gee.ArrayList
    // Has conflict: getInt(section: string, key: string, min: number, max: number): number
    // Has conflict: getIntList(section: string, key: string): Gee.ArrayList
    // Has conflict: getBool(section: string, key: string): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.Configuration

    getInterface(): string | null
    getInterfaces(): string[]
    getPort(): number
    getTranscoding(): boolean
    getAllowUpload(): boolean
    getAllowDeletion(): boolean
    getLogLevels(): string | null
    getPluginPath(): string | null
    getEnginePath(): string | null
    getMediaEngine(): string | null
    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean
    getTitle(section: string): string | null
    getString(section: string, key: string): string | null
    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean

    // Own signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: "configuration-changed", callback: Configuration.ConfigurationChangedSignalCallback): number
    on(sigName: "configuration-changed", callback: Configuration.ConfigurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configuration-changed", callback: Configuration.ConfigurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configuration-changed", callback: Configuration.ConfigurationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "configuration-changed", ...args: any[]): void
    connect(sigName: "section-changed", callback: Configuration.SectionChangedSignalCallback): number
    on(sigName: "section-changed", callback: Configuration.SectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "section-changed", callback: Configuration.SectionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "section-changed", callback: Configuration.SectionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "section-changed", entry: SectionEntry, ...args: any[]): void
    connect(sigName: "setting-changed", callback: Configuration.SettingChangedSignalCallback): number
    on(sigName: "setting-changed", callback: Configuration.SettingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: Configuration.SettingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: Configuration.SettingChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "setting-changed", key: string, ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.Configuration

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Configuration {

    // Own properties of RygelCore-2.6.RygelCore.Configuration

    static name: string

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
        (): void
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
    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.StateMachine

    // Has conflict: run(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: runFinish(res: Gio.AsyncResult): void
    // Has conflict: getCancellable(): Gio.Cancellable
    // Has conflict: setCancellable(value: Gio.Cancellable): void

    // Own virtual methods of RygelCore-2.6.RygelCore.StateMachine

    run(callback: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void

    // Own signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "completed", callback: StateMachine.CompletedSignalCallback): number
    on(sigName: "completed", callback: StateMachine.CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "completed", callback: StateMachine.CompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "completed", callback: StateMachine.CompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "completed", ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.StateMachine

    connect(sigName: "notify::cancellable", callback: (...args: any[]) => void): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StateMachine {

    // Own properties of RygelCore-2.6.RygelCore.StateMachine

    static name: string

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

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManager

    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManager

    sinkProtocolInfo: string | null
    connectionIds: string | null
    sourceProtocolInfo: string | null
    rcsId: number
    avTransportId: number
    direction: string | null

    // Owm methods of RygelCore-2.6.RygelCore.ConnectionManager

    // Has conflict: getCurrentProtocolInfo(): string | null

    // Own virtual methods of RygelCore-2.6.RygelCore.ConnectionManager

    getCurrentProtocolInfo(): string | null

    // Class property signals of RygelCore-2.6.RygelCore.ConnectionManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class ConnectionManager extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.ConnectionManager

    static name: string

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

    maxHistorySize: number
    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Own fields of RygelCore-2.6.RygelCore.BasicManagement

    deviceStatus: string | null

    // Owm methods of RygelCore-2.6.RygelCore.BasicManagement

    getMaxHistorySize(): number
    setMaxHistorySize(value: number): void

    // Class property signals of RygelCore-2.6.RygelCore.BasicManagement

    connect(sigName: "notify::max-history-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-history-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-history-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-history-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-history-size", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class BasicManagement extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.BasicManagement

    static name: string

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

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFile

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.DescriptionFile

    setDeviceType(deviceType: string): void
    setModelDescription(modelDescription: string): void
    setModelName(modelName: string): void
    setModelNumber(modelNumber: string): void
    setFriendlyName(friendlyName: string): void
    getFriendlyName(): string | null
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

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DescriptionFile extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.DescriptionFile

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.DescriptionFile

    constructor(config?: DescriptionFile.ConstructorProperties) 
    constructor(templateFile: string) 
    static new(templateFile: string): DescriptionFile
    static fromXmlDocument(doc: GUPnP.XMLDoc): DescriptionFile
    _init(config?: DescriptionFile.ConstructorProperties): void
}

export interface DLNAProfile {

    // Own fields of RygelCore-2.6.RygelCore.DLNAProfile

    refCount: number
    mime: string | null
    name: string | null
}

export class DLNAProfile {

    // Own properties of RygelCore-2.6.RygelCore.DLNAProfile

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.DLNAProfile

    constructor(name: string, mime: string) 
    static new(name: string, mime: string): DLNAProfile
    static compareByName(a: DLNAProfile, b: DLNAProfile): number
}

export module EnergyManagement {

    // Constructor properties interface

    export interface ConstructorProperties extends GUPnP.Service.ConstructorProperties {
    }

}

export interface EnergyManagement {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagement

    __gtype__: number

    // Conflicting properties

    parentInstance: any

    // Class property signals of RygelCore-2.6.RygelCore.EnergyManagement

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class EnergyManagement extends GUPnP.Service {

    // Own properties of RygelCore-2.6.RygelCore.EnergyManagement

    static name: string

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
    __gtype__: number

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class RootDevice extends GUPnP.RootDevice {

    // Own properties of RygelCore-2.6.RygelCore.RootDevice

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.RootDevice

    constructor(config?: RootDevice.ConstructorProperties) 
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
     * @returns A new @GUPnPRootDevice object.
     */
    static new(context: GUPnP.Context, descriptionPath: string, descriptionDir: string): GUPnP.RootDevice
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
    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.RootDeviceFactory

    create(plugin: Plugin): RootDevice
    getContext(): GUPnP.Context

    // Class property signals of RygelCore-2.6.RygelCore.RootDeviceFactory

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RootDeviceFactory extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.RootDeviceFactory

    static name: string

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

    // Own properties of RygelCore-2.6.RygelCore.LogHandler

    __gtype__: number

    // Class property signals of RygelCore-2.6.RygelCore.LogHandler

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LogHandler extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.LogHandler

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.LogHandler

    constructor(config?: LogHandler.ConstructorProperties) 
    _init(config?: LogHandler.ConstructorProperties): void
    static getDefault(): LogHandler
}

export module MetaConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MetaConfig extends Configuration {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfig

    __gtype__: number

    // Class property signals of RygelCore-2.6.RygelCore.MetaConfig

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MetaConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.MetaConfig

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.MetaConfig

    constructor(config?: MetaConfig.ConstructorProperties) 
    constructor() 
    static new(): MetaConfig
    _init(config?: MetaConfig.ConstructorProperties): void
    static getDefault(): MetaConfig
    static registerConfiguration(config: Configuration): void
    static cleanup(): void
}

export module PluginLoader {

    // Signal callback interfaces

    /**
     * Signal callback interface for `plugin-available`
     */
    export interface PluginAvailableSignalCallback {
        (plugin: Plugin): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends RecursiveModuleLoader.ConstructorProperties {
    }

}

export interface PluginLoader {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoader

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.PluginLoader

    pluginDisabled(name: string): boolean
    addPlugin(plugin: Plugin): void
    getPluginByName(name: string): Plugin | null
    listPlugins(): Gee.Collection

    // Own signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "plugin-available", callback: PluginLoader.PluginAvailableSignalCallback): number
    on(sigName: "plugin-available", callback: PluginLoader.PluginAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-available", callback: PluginLoader.PluginAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-available", callback: PluginLoader.PluginAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "plugin-available", ...args: any[]): void

    // Class property signals of RygelCore-2.6.RygelCore.PluginLoader

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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
    disconnect(id: number): void
}

export class PluginLoader extends RecursiveModuleLoader {

    // Own properties of RygelCore-2.6.RygelCore.PluginLoader

    static name: string

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

    basePath: string | null
    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    loadModules(): void
    loadModulesSync(cancellable: Gio.Cancellable | null): void
    // Has conflict: loadModuleFromFile(file: Gio.File): boolean
    // Has conflict: loadModuleFromInfo(info: PluginInformation): boolean
    getBasePath(): string
    setBasePath(value: string): void

    // Own virtual methods of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    loadModuleFromFile(file: Gio.File): boolean
    loadModuleFromInfo(info: PluginInformation): boolean

    // Class property signals of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    connect(sigName: "notify::base-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RecursiveModuleLoader extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.RecursiveModuleLoader

    static name: string

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
    readonly descPath: string | null
    active: boolean
    resourceInfos: Gee.ArrayList
    iconInfos: Gee.ArrayList
    defaultIcons: Gee.ArrayList
    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.Plugin

    addResource(resourceInfo: ResourceInfo): void
    addIcon(iconInfo: IconInfo): void
    // Has conflict: applyHacks(device: RootDevice, descriptionPath: string): void
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

    // Own virtual methods of RygelCore-2.6.RygelCore.Plugin

    applyHacks(device: RootDevice, descriptionPath: string): void

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Plugin extends GUPnP.ResourceFactory {

    // Own properties of RygelCore-2.6.RygelCore.Plugin

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    constructor(descPath: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities) 
    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin

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

    refCount: number
    upnpType: string | null
    upnpId: string | null
    descriptionPath: string | null
    type: GObject.GType
}

export class ResourceInfo {

    // Own properties of RygelCore-2.6.RygelCore.ResourceInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.ResourceInfo

    constructor(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.GType) 
    static new(upnpId: string, upnpType: string, descriptionPath: string, type: GObject.GType): ResourceInfo
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
    __gtype__: number

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MediaDevice extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.MediaDevice

    static name: string

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

    // Own properties of RygelCore-2.6.RygelCore.BaseConfiguration

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.BaseConfiguration

    // Has conflict: getInterface(): string | null
    // Has conflict: getInterfaces(): string[]
    // Has conflict: getPort(): number
    // Has conflict: getTranscoding(): boolean
    // Has conflict: getAllowUpload(): boolean
    // Has conflict: getAllowDeletion(): boolean
    // Has conflict: getLogLevels(): string | null
    // Has conflict: getPluginPath(): string | null
    // Has conflict: getEnginePath(): string | null
    // Has conflict: getMediaEngine(): string | null
    // Has conflict: getVideoUploadFolder(): string | null
    // Has conflict: getMusicUploadFolder(): string | null
    // Has conflict: getPictureUploadFolder(): string | null
    // Has conflict: getEnabled(section: string): boolean
    // Has conflict: getTitle(section: string): string | null
    // Has conflict: getString(section: string, key: string): string | null
    // Has conflict: getStringList(section: string, key: string): Gee.ArrayList
    // Has conflict: getInt(section: string, key: string, min: number, max: number): number
    // Has conflict: getIntList(section: string, key: string): Gee.ArrayList
    // Has conflict: getBool(section: string, key: string): boolean

    // Own virtual methods of RygelCore-2.6.RygelCore.BaseConfiguration

    getInterface(): string | null

    // Overloads of getInterface

    getInterface(): string | null
    getInterfaces(): string[]

    // Overloads of getInterfaces

    getInterfaces(): string[]
    getPort(): number

    // Overloads of getPort

    getPort(): number
    getTranscoding(): boolean

    // Overloads of getTranscoding

    getTranscoding(): boolean
    getAllowUpload(): boolean

    // Overloads of getAllowUpload

    getAllowUpload(): boolean
    getAllowDeletion(): boolean

    // Overloads of getAllowDeletion

    getAllowDeletion(): boolean
    getLogLevels(): string | null

    // Overloads of getLogLevels

    getLogLevels(): string | null
    getPluginPath(): string | null

    // Overloads of getPluginPath

    getPluginPath(): string | null
    getEnginePath(): string | null

    // Overloads of getEnginePath

    getEnginePath(): string | null
    getMediaEngine(): string | null

    // Overloads of getMediaEngine

    getMediaEngine(): string | null
    getVideoUploadFolder(): string | null

    // Overloads of getVideoUploadFolder

    getVideoUploadFolder(): string | null
    getMusicUploadFolder(): string | null

    // Overloads of getMusicUploadFolder

    getMusicUploadFolder(): string | null
    getPictureUploadFolder(): string | null

    // Overloads of getPictureUploadFolder

    getPictureUploadFolder(): string | null
    getEnabled(section: string): boolean

    // Overloads of getEnabled

    getEnabled(section: string): boolean
    getTitle(section: string): string | null

    // Overloads of getTitle

    getTitle(section: string): string | null
    getString(section: string, key: string): string | null

    // Overloads of getString

    getString(section: string, key: string): string | null
    getStringList(section: string, key: string): Gee.ArrayList

    // Overloads of getStringList

    getStringList(section: string, key: string): Gee.ArrayList
    getInt(section: string, key: string, min: number, max: number): number

    // Overloads of getInt

    getInt(section: string, key: string, min: number, max: number): number
    getIntList(section: string, key: string): Gee.ArrayList

    // Overloads of getIntList

    getIntList(section: string, key: string): Gee.ArrayList
    getBool(section: string, key: string): boolean

    // Overloads of getBool

    getBool(section: string, key: string): boolean

    // Class property signals of RygelCore-2.6.RygelCore.BaseConfiguration

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BaseConfiguration extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.BaseConfiguration

    static name: string

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

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfig

    __gtype__: number

    // Owm methods of RygelCore-2.6.RygelCore.CmdlineConfig

    getConfigFile(): string | null

    // Class property signals of RygelCore-2.6.RygelCore.CmdlineConfig

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CmdlineConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.CmdlineConfig

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.CmdlineConfig

    constructor(config?: CmdlineConfig.ConstructorProperties) 
    constructor() 
    static new(): CmdlineConfig
    _init(config?: CmdlineConfig.ConstructorProperties): void
    static getDefault(): CmdlineConfig
    static parseArgs(args: string[]): /* args */ string[]
}

export module EnvironmentConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EnvironmentConfig extends Configuration {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfig

    __gtype__: number

    // Class property signals of RygelCore-2.6.RygelCore.EnvironmentConfig

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EnvironmentConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.EnvironmentConfig

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.EnvironmentConfig

    constructor(config?: EnvironmentConfig.ConstructorProperties) 
    constructor() 
    static new(): EnvironmentConfig
    _init(config?: EnvironmentConfig.ConstructorProperties): void
    static getDefault(): EnvironmentConfig
}

export module UserConfig {

    // Constructor properties interface

    export interface ConstructorProperties extends Configuration.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface UserConfig extends Configuration {

    // Own properties of RygelCore-2.6.RygelCore.UserConfig

    __gtype__: number

    // Own fields of RygelCore-2.6.RygelCore.UserConfig

    keyFile: GLib.KeyFile
    sysKeyFile: GLib.KeyFile
    keyFileMonitor: Gio.FileMonitor
    sysKeyFileMonitor: Gio.FileMonitor

    // Class property signals of RygelCore-2.6.RygelCore.UserConfig

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class UserConfig extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.UserConfig

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.UserConfig

    constructor(config?: UserConfig.ConstructorProperties) 
    constructor(localPath: string) 
    static new(localPath: string): UserConfig
    static withPaths(localPath: string, systemPath: string): UserConfig
    _init(config?: UserConfig.ConstructorProperties): void
    static getDefault(): UserConfig
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

    deviceType: string | null
    readonly serviceTypes: string[]
    __gtype__: number

    // Own fields of RygelCore-2.6.RygelCore.V1Hacks

    descriptionPath: string | null

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class V1Hacks extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.V1Hacks

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.V1Hacks

    constructor(config?: V1Hacks.ConstructorProperties) 
    constructor(deviceType: string, serviceTypes: string[]) 
    static new(deviceType: string, serviceTypes: string[]): V1Hacks
    _init(config?: V1Hacks.ConstructorProperties): void
}

export interface IconInfo {

    // Own fields of RygelCore-2.6.RygelCore.IconInfo

    refCount: number
    mimeType: string | null
    uri: string | null
    fileExtension: string | null
    size: number
    width: number
    height: number
    depth: number
}

export class IconInfo {

    // Own properties of RygelCore-2.6.RygelCore.IconInfo

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.IconInfo

    constructor(mimeType: string, fileExtension: string) 
    static new(mimeType: string, fileExtension: string): IconInfo
}

export interface XMLUtils {

    // Own fields of RygelCore-2.6.RygelCore.XMLUtils

    refCount: number
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

    refCount: number

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

    readonly modulePath: string | null
    readonly name: string | null
    readonly conflicts: any
    moduleLoaded: boolean
    __gtype__: number

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
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class PluginInformation extends GObject.Object {

    // Own properties of RygelCore-2.6.RygelCore.PluginInformation

    static name: string

    // Constructors of RygelCore-2.6.RygelCore.PluginInformation

    constructor(config?: PluginInformation.ConstructorProperties) 
    _init(config?: PluginInformation.ConstructorProperties): void
    static newFromFile(file: Gio.File): PluginInformation
}

export interface ConnectionManagerClass {

    // Own fields of RygelCore-2.6.RygelCore.ConnectionManagerClass

    getCurrentProtocolInfo: (self: ConnectionManager) => string | null
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

    loadModuleFromFile: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    loadModuleFromInfo: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
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

    applyHacks: (self: Plugin, device: RootDevice, descriptionPath: string) => void
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

    getInterface: (self: BaseConfiguration) => string | null
    getInterfaces: (self: BaseConfiguration) => string[]
    getPort: (self: BaseConfiguration) => number
    getTranscoding: (self: BaseConfiguration) => boolean
    getAllowUpload: (self: BaseConfiguration) => boolean
    getAllowDeletion: (self: BaseConfiguration) => boolean
    getLogLevels: (self: BaseConfiguration) => string | null
    getPluginPath: (self: BaseConfiguration) => string | null
    getEnginePath: (self: BaseConfiguration) => string | null
    getMediaEngine: (self: BaseConfiguration) => string | null
    getVideoUploadFolder: (self: BaseConfiguration) => string | null
    getMusicUploadFolder: (self: BaseConfiguration) => string | null
    getPictureUploadFolder: (self: BaseConfiguration) => string | null
    getEnabled: (self: BaseConfiguration, section: string) => boolean
    getTitle: (self: BaseConfiguration, section: string) => string | null
    getString: (self: BaseConfiguration, section: string, key: string) => string | null
    getStringList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getInt: (self: BaseConfiguration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    getBool: (self: BaseConfiguration, section: string, key: string) => boolean
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

    isAllowed: (self: DBusAclProvider, device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent: string | null, callback: Gio.AsyncReadyCallback | null) => void
    isAllowedFinish: (self: DBusAclProvider, res: Gio.AsyncResult) => boolean
}

export abstract class DBusAclProviderIface {

    // Own properties of RygelCore-2.6.RygelCore.DBusAclProviderIface

    static name: string
}

export interface ConfigurationIface {

    // Own fields of RygelCore-2.6.RygelCore.ConfigurationIface

    getInterface: (self: Configuration) => string | null
    getInterfaces: (self: Configuration) => string[]
    getPort: (self: Configuration) => number
    getTranscoding: (self: Configuration) => boolean
    getAllowUpload: (self: Configuration) => boolean
    getAllowDeletion: (self: Configuration) => boolean
    getLogLevels: (self: Configuration) => string | null
    getPluginPath: (self: Configuration) => string | null
    getEnginePath: (self: Configuration) => string | null
    getMediaEngine: (self: Configuration) => string | null
    getVideoUploadFolder: (self: Configuration) => string | null
    getMusicUploadFolder: (self: Configuration) => string | null
    getPictureUploadFolder: (self: Configuration) => string | null
    getEnabled: (self: Configuration, section: string) => boolean
    getTitle: (self: Configuration, section: string) => string | null
    getString: (self: Configuration, section: string, key: string) => string | null
    getStringList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getInt: (self: Configuration, section: string, key: string, min: number, max: number) => number
    getIntList: (self: Configuration, section: string, key: string) => Gee.ArrayList
    getBool: (self: Configuration, section: string, key: string) => boolean
}

export abstract class ConfigurationIface {

    // Own properties of RygelCore-2.6.RygelCore.ConfigurationIface

    static name: string
}

export interface StateMachineIface {

    // Own fields of RygelCore-2.6.RygelCore.StateMachineIface

    run: (self: StateMachine, callback: Gio.AsyncReadyCallback | null) => void
    runFinish: (self: StateMachine, res: Gio.AsyncResult) => void
    getCancellable: (self: StateMachine) => Gio.Cancellable
    setCancellable: (self: StateMachine, value: Gio.Cancellable) => void
}

export abstract class StateMachineIface {

    // Own properties of RygelCore-2.6.RygelCore.StateMachineIface

    static name: string
}

// END