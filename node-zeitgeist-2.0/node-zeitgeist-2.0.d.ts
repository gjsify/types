
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-zeitgeist-2.0-import.d.ts';
    
/**
 * Zeitgeist-2.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';

export namespace Zeitgeist {

enum ResultType {
    MOST_RECENT_EVENTS,
    LEAST_RECENT_EVENTS,
    MOST_RECENT_SUBJECTS,
    LEAST_RECENT_SUBJECTS,
    MOST_POPULAR_SUBJECTS,
    LEAST_POPULAR_SUBJECTS,
    MOST_POPULAR_ACTOR,
    LEAST_POPULAR_ACTOR,
    MOST_RECENT_ACTOR,
    LEAST_RECENT_ACTOR,
    MOST_RECENT_ORIGIN,
    LEAST_RECENT_ORIGIN,
    MOST_POPULAR_ORIGIN,
    LEAST_POPULAR_ORIGIN,
    OLDEST_ACTOR,
    MOST_RECENT_SUBJECT_INTERPRETATION,
    LEAST_RECENT_SUBJECT_INTERPRETATION,
    MOST_POPULAR_SUBJECT_INTERPRETATION,
    LEAST_POPULAR_SUBJECT_INTERPRETATION,
    MOST_RECENT_MIMETYPE,
    LEAST_RECENT_MIMETYPE,
    MOST_POPULAR_MIMETYPE,
    LEAST_POPULAR_MIMETYPE,
    MOST_RECENT_CURRENT_URI,
    LEAST_RECENT_CURRENT_URI,
    MOST_POPULAR_CURRENT_URI,
    LEAST_POPULAR_CURRENT_URI,
    MOST_RECENT_EVENT_ORIGIN,
    LEAST_RECENT_EVENT_ORIGIN,
    MOST_POPULAR_EVENT_ORIGIN,
    LEAST_POPULAR_EVENT_ORIGIN,
    MOST_RECENT_CURRENT_ORIGIN,
    LEAST_RECENT_CURRENT_ORIGIN,
    MOST_POPULAR_CURRENT_ORIGIN,
    LEAST_POPULAR_CURRENT_ORIGIN,
    RELEVANCY,
}
enum RelevantResultType {
    RECENT,
    RELATED,
}
enum StorageState {
    NOT_AVAILABLE,
    AVAILABLE,
    ANY,
}
enum EngineError {
    BACKUP_FAILED,
    DATABASE_BUSY,
    DATABASE_CANTOPEN,
    DATABASE_CORRUPT,
    DATABASE_ERROR,
    DATABASE_RETIRE_FAILED,
    EXISTING_INSTANCE,
    INVALID_ARGUMENT,
    INVALID_EVENT,
    INVALID_KEY,
}
enum DataModelError {
    INVALID_SIGNATURE,
    NULL_EVENT,
    TOO_MANY_RESULTS,
}
const DataSourcesSIG_DATASOURCES: string | null
const TimestampSECOND: number
const TimestampMINUTE: number
const TimestampHOUR: number
const TimestampDAY: number
const TimestampWEEK: number
const TimestampYEAR: number
const NCALALARM: string | null
const NCALATTACHMENT: string | null
const NCALCALENDAR: string | null
const NCALCALENDAR_DATA_OBJECT: string | null
const NCALEVENT: string | null
const NCALFREEBUSY: string | null
const NCALJOURNAL: string | null
const NCALTIMEZONE: string | null
const NCALTODO: string | null
const NCOCONTACT: string | null
const NCOCONTACT_GROUP: string | null
const NCOCONTACT_LIST: string | null
const NCOCONTACT_LIST_DATA_OBJECT: string | null
const NCOORGANIZATION_CONTACT: string | null
const NCOPERSON_CONTACT: string | null
const NFOAPPLICATION: string | null
const NFOARCHIVE: string | null
const NFOARCHIVE_ITEM: string | null
const NFOATTACHMENT: string | null
const NFOAUDIO: string | null
const NFOBOOKMARK: string | null
const NFOBOOKMARK_FOLDER: string | null
const NFOCURSOR: string | null
const NFODATA_CONTAINER: string | null
const NFODELETED_RESOURCE: string | null
const NFODOCUMENT: string | null
const NFOEMBEDDED_FILE_DATA_OBJECT: string | null
const NFOEXECUTABLE: string | null
const NFOFILESYSTEM: string | null
const NFOFILESYSTEM_IMAGE: string | null
const NFOFILE_DATA_OBJECT: string | null
const NFOFOLDER: string | null
const NFOFONT: string | null
const NFOHARD_DISK_PARTITION: string | null
const NFOHTML_DOCUMENT: string | null
const NFOICON: string | null
const NFOIMAGE: string | null
const NFOMEDIA: string | null
const NFOMEDIA_LIST: string | null
const NFOMEDIA_STREAM: string | null
const NFOMIND_MAP: string | null
const NFOOPERATING_SYSTEM: string | null
const NFOPAGINATED_TEXT_DOCUMENT: string | null
const NFOPLAIN_TEXT_DOCUMENT: string | null
const NFOPRESENTATION: string | null
const NFORASTER_IMAGE: string | null
const NFOREMOTE_DATA_OBJECT: string | null
const NFOREMOTE_PORT_ADDRESS: string | null
const NFOSOFTWARE: string | null
const NFOSOFTWARE_ITEM: string | null
const NFOSOFTWARE_SERVICE: string | null
const NFOSOURCE_CODE: string | null
const NFOSPREADSHEET: string | null
const NFOTEXT_DOCUMENT: string | null
const NFOTRASH: string | null
const NFOVECTOR_IMAGE: string | null
const NFOVIDEO: string | null
const NFOVISUAL: string | null
const NFOWEBSITE: string | null
const NFOWEB_DATA_OBJECT: string | null
const NIEDATA_OBJECT: string | null
const NIEINFORMATION_ELEMENT: string | null
const NMMMOVIE: string | null
const NMMMUSIC_ALBUM: string | null
const NMMMUSIC_PIECE: string | null
const NMMTVSERIES: string | null
const NMMTVSHOW: string | null
const NMOEMAIL: string | null
const NMOIMMESSAGE: string | null
const NMOMAILBOX: string | null
const NMOMAILBOX_DATA_OBJECT: string | null
const NMOMESSAGE: string | null
const NMOMIME_ENTITY: string | null
const ZGACCEPT_EVENT: string | null
const ZGACCESS_EVENT: string | null
const ZGAPPLICATION_ACTION: string | null
const ZGCREATE_EVENT: string | null
const ZGDELETE_EVENT: string | null
const ZGDENY_EVENT: string | null
const ZGEVENT_INTERPRETATION: string | null
const ZGEVENT_MANIFESTATION: string | null
const ZGEXPIRE_EVENT: string | null
const ZGHEURISTIC_ACTIVITY: string | null
const ZGLEAVE_EVENT: string | null
const ZGMODIFY_EVENT: string | null
const ZGMOVE_EVENT: string | null
const ZGRECEIVE_EVENT: string | null
const ZGSCHEDULED_ACTIVITY: string | null
const ZGSEND_EVENT: string | null
const ZGSYSTEM_NOTIFICATION: string | null
const ZGUSER_ACTIVITY: string | null
const ZGWORLD_ACTIVITY: string | null
const UtilsENGINE_DBUS_NAME: string | null
const UtilsENGINE_DBUS_PATH: string | null
const UtilsSIG_EVENT: string | null
const UtilsMAX_DBUS_RESULT_SIZE: number
const UtilsCACHE_SIZE: number
function dataSourcesFromVariant(sourcesVariant: GLib.Variant): DataSource[]
function dataSourcesToVariant(sources: GLib.HashTable): GLib.Variant
function eventsFromVariant(vevents: GLib.Variant): Event[]
function eventsToVariant(events: Event[]): GLib.Variant
function eventsToVariantWithLimit(events: Event[], limit: number): GLib.Variant
function timestampFromTimeval(timeval: GLib.TimeVal): number
function timestampToTimeval(timestamp: number): /* result */ GLib.TimeVal
function timestampFromNow(): number
function timestampFromIso8601(datetime: string | null): number
function timestampToIso8601(timestamp: number): string | null
function timestampFromDate(date: GLib.Date): number
function timestampFromDmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
function timestampToDate(timestamp: number): /* result */ GLib.Date
function timestampNextMidnight(timestamp: number): number
function timestampPrevMidnight(timestamp: number): number
function symbolGetDisplayName(symbolUri: string | null): string | null
function symbolGetDescription(symbolUri: string | null): string | null
function symbolGetAllParents(symbolUri: string | null): string[]
function symbolGetAllChildren(symbolUri: string | null): string[]
function symbolGetChildren(symbolUri: string | null): string[]
function symbolGetParents(symbolUri: string | null): string[]
function symbolIsA(symbolUri: string | null, parentUri: string | null): boolean
function utilsGetDataPath(): string | null
function utilsGetDefaultDataPath(): string | null
function utilsGetDatabaseFilePath(): string | null
function utilsSetDatabaseFilePath(path: string | null): void
function utilsGetDatabaseFileBackupPath(): string | null
function utilsGetDatabaseFileRetireName(): string | null
function utilsGetLocalExtensionsPath(): string | null
function utilsUsingInMemoryDatabase(): boolean
function utilsBackupDatabase(): void
function utilsParseNegation(val: string | null): [ /* returnType */ boolean, /* val */ string | null ]
function utilsParseNoexpand(val: string | null): [ /* returnType */ boolean, /* val */ string | null ]
function utilsParseWildcard(val: string | null): [ /* returnType */ boolean, /* val */ string | null ]
function utilsIsEmptyString(s: string | null): boolean
function utilsLogMayReadDirectly(): boolean
function resultTypeIsSortOrderAsc(resultType: ResultType): boolean
function registerMimetype(mimetype: string | null, interpretationUri: string | null): void
function registerMimetypeRegex(mimetypeRegex: string | null, interpretationUri: string | null): void
function interpretationForMimetype(mimetype: string | null): string | null
function registerUriScheme(uriScheme: string | null, manifestationType: string | null): void
function manifestationForUri(uri: string | null): string | null
module RemoteRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-source-disconnected`
     */
    interface DataSourceDisconnectedSignalCallback {
        (dataSource: GLib.Variant): void
    }

    /**
     * Signal callback interface for `data-source-enabled`
     */
    interface DataSourceEnabledSignalCallback {
        (uniqueId: string | null, enabled: boolean): void
    }

    /**
     * Signal callback interface for `data-source-registered`
     */
    interface DataSourceRegisteredSignalCallback {
        (dataSource: GLib.Variant): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteRegistry extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    // Has conflict: getDataSources(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: registerDataSource(uniqueId: string | null, name: string | null, description: string | null, eventTemplates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: registerDataSourceFinish(res: Gio.AsyncResult): boolean
    // Has conflict: setDataSourceEnabled(uniqueId: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    // Has conflict: getDataSourceFromId(uniqueId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    getDataSources(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    registerDataSource(uniqueId: string | null, name: string | null, description: string | null, eventTemplates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    getDataSourceFromId(uniqueId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant

    // Own signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    connect(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): number
    on(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-source-disconnected", ...args: any[]): void
    connect(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): number
    on(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-source-enabled", enabled: boolean, ...args: any[]): void
    connect(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): number
    on(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "data-source-registered", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

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
}

class RemoteRegistry {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    constructor(config?: RemoteRegistry.ConstructorProperties) 
    _init(config?: RemoteRegistry.ConstructorProperties): void
}

module RemoteLog {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteLog extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLog

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteLog

    // Has conflict: deleteEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: deleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: findEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findEventIdsFinish(res: Gio.AsyncResult): number[]
    // Has conflict: findEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findEventsFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: findRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    // Has conflict: getEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getEventsFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: insertEvents(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: insertEventsFinish(res: Gio.AsyncResult): number[]
    // Has conflict: installMonitor(monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: installMonitorFinish(res: Gio.AsyncResult): void
    // Has conflict: removeMonitor(monitorPath: string, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeMonitorFinish(res: Gio.AsyncResult): void
    // Has conflict: quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: quitFinish(res: Gio.AsyncResult): void
    // Has conflict: getExtensions(): string[]
    // Has conflict: getVersion(): /* result */ VersionStruct
    // Has conflict: getDatapath(): string | null

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteLog

    deleteEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    findEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    getEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): GLib.Variant
    insertEvents(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    installMonitor(monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    installMonitorFinish(res: Gio.AsyncResult): void
    removeMonitor(monitorPath: string, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    removeMonitorFinish(res: Gio.AsyncResult): void
    quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    getExtensions(): string[]
    getVersion(): /* result */ VersionStruct
    getDatapath(): string | null

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteLog

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
}

class RemoteLog {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLog

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteLog

    constructor(config?: RemoteLog.ConstructorProperties) 
    _init(config?: RemoteLog.ConstructorProperties): void
}

module RemoteMonitor {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteMonitor extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    // Has conflict: notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: notifyInsertFinish(res: Gio.AsyncResult): void
    // Has conflict: notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: notifyDeleteFinish(res: Gio.AsyncResult): void

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback: Gio.AsyncReadyCallback | null): void
    notifyInsertFinish(res: Gio.AsyncResult): void
    notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback: Gio.AsyncReadyCallback | null): void
    notifyDeleteFinish(res: Gio.AsyncResult): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

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
}

class RemoteMonitor {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    constructor(config?: RemoteMonitor.ConstructorProperties) 
    _init(config?: RemoteMonitor.ConstructorProperties): void
}

module RemoteSimpleIndexer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteSimpleIndexer extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    // Has conflict: search(queryString: string | null, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: searchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    // Has conflict: searchWithRelevancies(queryString: string | null, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    search(queryString: string | null, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies(queryString: string | null, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

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
}

class RemoteSimpleIndexer {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    constructor(config?: RemoteSimpleIndexer.ConstructorProperties) 
    _init(config?: RemoteSimpleIndexer.ConstructorProperties): void
}

module NetworkManagerDBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        (state: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface NetworkManagerDBus extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    // Has conflict: state(): number

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    state(): number

    // Own signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    connect(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

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
}

class NetworkManagerDBus {

    // Own properties of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    constructor(config?: NetworkManagerDBus.ConstructorProperties) 
    _init(config?: NetworkManagerDBus.ConstructorProperties): void
}

module ConnmanManagerDBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        (state: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ConnmanManagerDBus extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    // Has conflict: getState(): string | null

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    getState(): string | null

    // Own signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    connect(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

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
}

class ConnmanManagerDBus {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    constructor(config?: ConnmanManagerDBus.ConstructorProperties) 
    _init(config?: ConnmanManagerDBus.ConstructorProperties): void
}

module ResultSet {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ResultSet extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ResultSet

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.ResultSet

    // Has conflict: size(): number
    // Has conflict: estimatedMatches(): number
    // Has conflict: nextValue(): Event | null
    // Has conflict: hasNext(): boolean
    // Has conflict: tell(): number
    // Has conflict: reset(): void
    iterator(): ResultSet

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.ResultSet

    size(): number
    estimatedMatches(): number
    nextValue(): Event | null
    hasNext(): boolean
    tell(): number
    reset(): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.ResultSet

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
}

class ResultSet {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ResultSet

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.ResultSet

    constructor(config?: ResultSet.ConstructorProperties) 
    _init(config?: ResultSet.ConstructorProperties): void
}

module DataSourceRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `source-disconnected`
     */
    interface SourceDisconnectedSignalCallback {
        (dataSource: DataSource): void
    }

    /**
     * Signal callback interface for `source-enabled`
     */
    interface SourceEnabledSignalCallback {
        (uniqueId: string | null, enabled: boolean): void
    }

    /**
     * Signal callback interface for `source-registered`
     */
    interface SourceRegisteredSignalCallback {
        (dataSource: DataSource): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

interface DataSourceRegistry {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    getDataSources(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): DataSource[]
    getDataSourceFromId(uniqueId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): DataSource
    registerDataSource(dataSource: DataSource, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void

    // Own signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    connect(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): number
    on(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-disconnected", ...args: any[]): void
    connect(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): number
    on(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-enabled", enabled: boolean, ...args: any[]): void
    connect(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): number
    on(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-registered", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::proxy-created", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DataSourceRegistry extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    constructor(config?: DataSourceRegistry.ConstructorProperties) 
    constructor() 
    static new(): DataSourceRegistry
    _init(config?: DataSourceRegistry.ConstructorProperties): void
}

module Index {

    // Constructor properties interface

    interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

interface Index {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Index

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Index

    search(query: string | null, timeRange: TimeRange, eventTemplates: Event[], offset: number, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): ResultSet
    searchWithRelevancies(query: string | null, timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, offset: number, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Index

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::proxy-created", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Index extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Index

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Index

    constructor(config?: Index.ConstructorProperties) 
    constructor() 
    static new(): Index
    _init(config?: Index.ConstructorProperties): void
}

module Log {

    // Constructor properties interface

    interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

interface Log {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Log

    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Log

    insertEvent(event: Event, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    insertEventFinish(res: Gio.AsyncResult): number[]
    insertEvents(events: Event[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    insertEventNoReply(event: Event): void
    insertEventsNoReply(events: Event[]): void
    findEvents(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): ResultSet
    findEventIds(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    getEvents(eventIds: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): ResultSet
    findRelatedUris(timeRange: TimeRange, eventTemplates: Event[], resultEventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: RelevantResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    deleteEvents(eventIds: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): TimeRange
    quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    installMonitor(monitor: Monitor): void
    removeMonitor(monitor: Monitor): void
    getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    getExtensions(): string[]
    datapath(): string | null

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Log

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::proxy-created", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Log extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Log

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Log

    constructor(config?: Log.ConstructorProperties) 
    constructor() 
    static new(): Log
    _init(config?: Log.ConstructorProperties): void
    static getDefault(): Log
}

module Monitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events-inserted`
     */
    interface EventsInsertedSignalCallback {
        (timeRange: TimeRange, events: ResultSet): void
    }

    /**
     * Signal callback interface for `events-deleted`
     */
    interface EventsDeletedSignalCallback {
        (timeRange: TimeRange, eventIds: number[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends RemoteMonitor.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Monitor

        timeRange?: TimeRange | null
        eventTemplates?: Event[] | null
    }

}

interface Monitor extends RemoteMonitor {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Monitor

    timeRange: TimeRange
    eventTemplates: Event[]
    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Monitor

    getTemplates(): Event[]
    getPath(): string
    getTimeRange(): TimeRange
    setTimeRange(value: TimeRange): void
    getEventTemplates(): Event[]
    setEventTemplates(value: Event[]): void

    // Own signals of Zeitgeist-2.0.Zeitgeist.Monitor

    connect(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): number
    on(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "events-inserted", events: ResultSet, ...args: any[]): void
    connect(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): number
    on(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "events-deleted", eventIds: number[], ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Monitor

    connect(sigName: "notify::time-range", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-range", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-range", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-range", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-range", ...args: any[]): void
    connect(sigName: "notify::event-templates", callback: (...args: any[]) => void): number
    on(sigName: "notify::event-templates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::event-templates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::event-templates", ...args: any[]): void
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
}

class Monitor extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Monitor

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Monitor

    constructor(config?: Monitor.ConstructorProperties) 
    constructor(timeRange: TimeRange, eventTemplates: Event[]) 
    static new(timeRange: TimeRange, eventTemplates: Event[]): Monitor
    _init(config?: Monitor.ConstructorProperties): void
}

module QueuedProxyWrapper {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

        proxyCreated?: boolean | null
        isConnected?: boolean | null
    }

}

interface QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    proxyCreated: boolean
    isConnected: boolean
    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    // Has conflict: onConnectionEstablished(): void
    // Has conflict: onConnectionLost(): void
    waitForProxy(callback: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    onConnectionEstablished(): void
    onConnectionLost(): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    connect(sigName: "notify::proxy-created", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-created", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-created", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-connected", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-connected", ...args: any[]): void
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
}

class QueuedProxyWrapper extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    constructor(config?: QueuedProxyWrapper.ConstructorProperties) 
    _init(config?: QueuedProxyWrapper.ConstructorProperties): void
}

interface QueuedProxyWrapperQueuedMethod {

    // Own fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    refCount: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    getQueuedMethod(): [ /* returnType */ GLib.SourceFunc, /* resultTarget */ any ]
}

class QueuedProxyWrapperQueuedMethod {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    constructor(callback: GLib.SourceFunc) 
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
}

module DataSource {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.DataSource

        uniqueId?: string | null
        name?: string | null
        description?: string | null
        eventTemplates?: Event[] | null
        enabled?: boolean | null
        running?: boolean | null
        timestamp?: number | null
    }

}

interface DataSource {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSource

    uniqueId: string | null
    name: string | null
    description: string | null
    eventTemplates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number
    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.DataSource

    toVariant(): GLib.Variant
    getUniqueId(): string | null
    setUniqueId(value: string | null): void
    getName(): string | null
    setName(value: string | null): void
    getDescription(): string | null
    setDescription(value: string | null): void
    getEventTemplates(): Event[] | null
    setEventTemplates(value: Event[] | null): void
    getEnabled(): boolean
    setEnabled(value: boolean): void
    getRunning(): boolean
    setRunning(value: boolean): void
    getTimestamp(): number
    setTimestamp(value: number): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.DataSource

    connect(sigName: "notify::unique-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::unique-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unique-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unique-id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::event-templates", callback: (...args: any[]) => void): number
    on(sigName: "notify::event-templates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::event-templates", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::event-templates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::event-templates", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::running", callback: (...args: any[]) => void): number
    on(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
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
}

class DataSource extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSource

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    constructor() 
    static new(): DataSource
    static full(uniqueId: string | null, name: string | null, description: string | null, templates: Event[] | null): DataSource
    static fromVariant(variant: GLib.Variant, resetRunning: boolean): DataSource
    _init(config?: DataSource.ConstructorProperties): void
}

module Event {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Event

        id?: number | null
        timestamp?: number | null
        origin?: string | null
        actor?: string | null
        interpretation?: string | null
        manifestation?: string | null
        subjects?: Subject[] | null
        payload?: any | null
    }

}

interface Event {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Event

    id: number
    timestamp: number
    origin: string | null
    actor: string | null
    interpretation: string | null
    manifestation: string | null
    subjects: Subject[]
    payload: any
    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Event

    getSubject(index: number): Subject
    numSubjects(): number
    addSubject(subject: Subject): void
    takeSubject(subject: Subject): void
    setActorFromAppInfo(info: Gio.AppInfo): void
    toVariant(): GLib.Variant
    debugPrint(): void
    matchesTemplate(templateEvent: Event): boolean
    getId(): number
    setId(value: number): void
    getTimestamp(): number
    setTimestamp(value: number): void
    getOrigin(): string | null
    setOrigin(value: string | null): void
    getActor(): string | null
    setActor(value: string | null): void
    getInterpretation(): string | null
    setInterpretation(value: string | null): void
    getManifestation(): string | null
    setManifestation(value: string | null): void
    getSubjects(): Subject[]
    setSubjects(value: Subject[]): void
    getPayload(): any | null
    setPayload(value: any | null): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Event

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::actor", callback: (...args: any[]) => void): number
    on(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actor", ...args: any[]): void
    connect(sigName: "notify::interpretation", callback: (...args: any[]) => void): number
    on(sigName: "notify::interpretation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interpretation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interpretation", ...args: any[]): void
    connect(sigName: "notify::manifestation", callback: (...args: any[]) => void): number
    on(sigName: "notify::manifestation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manifestation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manifestation", ...args: any[]): void
    connect(sigName: "notify::subjects", callback: (...args: any[]) => void): number
    on(sigName: "notify::subjects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subjects", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subjects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subjects", ...args: any[]): void
    connect(sigName: "notify::payload", callback: (...args: any[]) => void): number
    on(sigName: "notify::payload", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::payload", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::payload", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::payload", ...args: any[]): void
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
}

class Event extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Event

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Event

    constructor(config?: Event.ConstructorProperties) 
    static fromVariant(eventVariant: GLib.Variant): Event
    constructor() 
    static new(): Event
    _init(config?: Event.ConstructorProperties): void
}

module Subject {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Subject

        uri?: string | null
        origin?: string | null
        text?: string | null
        storage?: string | null
        currentUri?: string | null
        currentOrigin?: string | null
        mimetype?: string | null
        interpretation?: string | null
        manifestation?: string | null
    }

}

interface Subject {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Subject

    uri: string | null
    origin: string | null
    text: string | null
    storage: string | null
    currentUri: string | null
    currentOrigin: string | null
    mimetype: string | null
    interpretation: string | null
    manifestation: string | null
    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Subject

    toVariant(): GLib.Variant
    matchesTemplate(templateSubject: Subject): boolean
    getUri(): string | null
    setUri(value: string | null): void
    getOrigin(): string | null
    setOrigin(value: string | null): void
    getText(): string | null
    setText(value: string | null): void
    getStorage(): string | null
    setStorage(value: string | null): void
    getCurrentUri(): string | null
    setCurrentUri(value: string | null): void
    getCurrentOrigin(): string | null
    setCurrentOrigin(value: string | null): void
    getMimetype(): string | null
    setMimetype(value: string | null): void
    getInterpretation(): string | null
    setInterpretation(value: string | null): void
    getManifestation(): string | null
    setManifestation(value: string | null): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Subject

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::storage", callback: (...args: any[]) => void): number
    on(sigName: "notify::storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::current-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-uri", ...args: any[]): void
    connect(sigName: "notify::current-origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-origin", ...args: any[]): void
    connect(sigName: "notify::mimetype", callback: (...args: any[]) => void): number
    on(sigName: "notify::mimetype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mimetype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mimetype", ...args: any[]): void
    connect(sigName: "notify::interpretation", callback: (...args: any[]) => void): number
    on(sigName: "notify::interpretation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interpretation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interpretation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interpretation", ...args: any[]): void
    connect(sigName: "notify::manifestation", callback: (...args: any[]) => void): number
    on(sigName: "notify::manifestation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manifestation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manifestation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manifestation", ...args: any[]): void
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
}

class Subject extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Subject

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Subject

    constructor(config?: Subject.ConstructorProperties) 
    static full(uri: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, origin: string | null, text: string | null, storage: string | null): Subject
    static moveEvent(sourceUri: string | null, sourceOrigin: string | null, destinationUri: string | null, destinationOrigin: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, text: string | null, storage: string | null): Subject
    static fromVariant(subjectVariant: GLib.Variant): Subject
    constructor() 
    static new(): Subject
    _init(config?: Subject.ConstructorProperties): void
}

module TimeRange {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.TimeRange

        start?: number | null
        end?: number | null
    }

}

interface TimeRange {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRange

    start: number
    end: number
    __gtype__: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.TimeRange

    toVariant(): GLib.Variant
    intersect(timeRange: TimeRange): TimeRange | null
    getStart(): number
    getEnd(): number

    // Class property signals of Zeitgeist-2.0.Zeitgeist.TimeRange

    connect(sigName: "notify::start", callback: (...args: any[]) => void): number
    on(sigName: "notify::start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start", ...args: any[]): void
    connect(sigName: "notify::end", callback: (...args: any[]) => void): number
    on(sigName: "notify::end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end", ...args: any[]): void
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
}

class TimeRange extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRange

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.TimeRange

    constructor(config?: TimeRange.ConstructorProperties) 
    constructor(startMsec: number, endMsec: number) 
    static new(startMsec: number, endMsec: number): TimeRange
    static anytime(): TimeRange
    static toNow(): TimeRange
    static fromNow(): TimeRange
    static fromVariant(variant: GLib.Variant): TimeRange
    _init(config?: TimeRange.ConstructorProperties): void
}

module SimpleResultSet {

    // Constructor properties interface

    interface ConstructorProperties extends ResultSet.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SimpleResultSet extends ResultSet {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    __gtype__: number

    // Class property signals of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

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
}

class SimpleResultSet extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    constructor(config?: SimpleResultSet.ConstructorProperties) 
    constructor(events: Event[]) 
    static new(events: Event[]): SimpleResultSet
    static withNumMatches(events: Event[], matches: number): SimpleResultSet
    _init(config?: SimpleResultSet.ConstructorProperties): void
}

interface DataSourceRegistryClass {
}

abstract class DataSourceRegistryClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistryClass

    static name: string
}

interface DataSourceRegistryPrivate {
}

class DataSourceRegistryPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistryPrivate

    static name: string
}

interface IndexClass {
}

abstract class IndexClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.IndexClass

    static name: string
}

interface IndexPrivate {
}

class IndexPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.IndexPrivate

    static name: string
}

interface LogClass {
}

abstract class LogClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.LogClass

    static name: string
}

interface LogPrivate {
}

class LogPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.LogPrivate

    static name: string
}

interface MonitorClass {
}

abstract class MonitorClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.MonitorClass

    static name: string
}

interface MonitorPrivate {
}

class MonitorPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.MonitorPrivate

    static name: string
}

interface QueuedProxyWrapperClass {

    // Own fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperClass

    onConnectionEstablished: (self: QueuedProxyWrapper) => void
    onConnectionLost: (self: QueuedProxyWrapper) => void
}

abstract class QueuedProxyWrapperClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperClass

    static name: string
}

interface QueuedProxyWrapperPrivate {
}

class QueuedProxyWrapperPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperPrivate

    static name: string
}

interface QueuedProxyWrapperQueuedMethodClass {
}

abstract class QueuedProxyWrapperQueuedMethodClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethodClass

    static name: string
}

interface QueuedProxyWrapperQueuedMethodPrivate {
}

class QueuedProxyWrapperQueuedMethodPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethodPrivate

    static name: string
}

interface DataSourceClass {
}

abstract class DataSourceClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceClass

    static name: string
}

interface DataSourcePrivate {
}

class DataSourcePrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourcePrivate

    static name: string
}

interface EventClass {
}

abstract class EventClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.EventClass

    static name: string
}

interface EventPrivate {
}

class EventPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.EventPrivate

    static name: string
}

interface SubjectClass {
}

abstract class SubjectClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SubjectClass

    static name: string
}

interface SubjectPrivate {
}

class SubjectPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SubjectPrivate

    static name: string
}

interface TimeRangeClass {
}

abstract class TimeRangeClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRangeClass

    static name: string
}

interface TimeRangePrivate {
}

class TimeRangePrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRangePrivate

    static name: string
}

interface SimpleResultSetClass {
}

abstract class SimpleResultSetClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSetClass

    static name: string
}

interface SimpleResultSetPrivate {
}

class SimpleResultSetPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSetPrivate

    static name: string
}

interface RemoteRegistryIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface

    getDataSources: (self: RemoteRegistry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getDataSourcesFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => GLib.Variant
    registerDataSource: (self: RemoteRegistry, uniqueId: string | null, name: string | null, description: string | null, eventTemplates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    registerDataSourceFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => boolean
    setDataSourceEnabled: (self: RemoteRegistry, uniqueId: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    setDataSourceEnabledFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => void
    getDataSourceFromId: (self: RemoteRegistry, uniqueId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getDataSourceFromIdFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => GLib.Variant
}

abstract class RemoteRegistryIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface

    static name: string
}

interface RemoteLogIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteLogIface

    deleteEvents: (self: RemoteLog, eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    deleteEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    findEventIds: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    findEventIdsFinish: (self: RemoteLog) => [ /* returnType */ number[], /* resultLength1 */ number ]
    findEvents: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    findEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    findRelatedUris: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    findRelatedUrisFinish: (self: RemoteLog) => [ /* returnType */ string[], /* resultLength1 */ number ]
    getEvents: (self: RemoteLog, eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    getEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    insertEvents: (self: RemoteLog, events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    insertEventsFinish: (self: RemoteLog) => [ /* returnType */ number[], /* resultLength1 */ number ]
    installMonitor: (self: RemoteLog, monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner: string | null, callback: Gio.AsyncReadyCallback | null) => void
    installMonitorFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    removeMonitor: (self: RemoteLog, monitorPath: string, owner: string | null, callback: Gio.AsyncReadyCallback | null) => void
    removeMonitorFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    quit: (self: RemoteLog, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    quitFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    getExtensions: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getVersion: (self: RemoteLog) => /* result */ VersionStruct
    getDatapath: (self: RemoteLog) => string | null
}

abstract class RemoteLogIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLogIface

    static name: string
}

interface RemoteMonitorIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface

    notifyInsert: (self: RemoteMonitor, timeRange: GLib.Variant, events: GLib.Variant, callback: Gio.AsyncReadyCallback | null) => void
    notifyInsertFinish: (self: RemoteMonitor, res: Gio.AsyncResult) => void
    notifyDelete: (self: RemoteMonitor, timeRange: GLib.Variant, eventIds: number[], callback: Gio.AsyncReadyCallback | null) => void
    notifyDeleteFinish: (self: RemoteMonitor, res: Gio.AsyncResult) => void
}

abstract class RemoteMonitorIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface

    static name: string
}

interface RemoteSimpleIndexerIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface

    search: (self: RemoteSimpleIndexer, queryString: string | null, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: RemoteSimpleIndexer, res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies: (self: RemoteSimpleIndexer, queryString: string | null, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    searchWithRelevanciesFinish: (self: RemoteSimpleIndexer, res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
}

abstract class RemoteSimpleIndexerIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface

    static name: string
}

interface NetworkManagerDBusIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface

    state: (self: NetworkManagerDBus) => number
}

abstract class NetworkManagerDBusIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface

    static name: string
}

interface ConnmanManagerDBusIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface

    getState: (self: ConnmanManagerDBus) => string | null
}

abstract class ConnmanManagerDBusIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface

    static name: string
}

interface ResultSetIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.ResultSetIface

    size: (self: ResultSet) => number
    estimatedMatches: (self: ResultSet) => number
    nextValue: (self: ResultSet) => Event | null
    hasNext: (self: ResultSet) => boolean
    tell: (self: ResultSet) => number
    reset: (self: ResultSet) => void
}

abstract class ResultSetIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ResultSetIface

    static name: string
}

interface VersionStruct {

    // Own fields of Zeitgeist-2.0.Zeitgeist.VersionStruct

    major: number
    minor: number
    micro: number
}

class VersionStruct {

    // Own properties of Zeitgeist-2.0.Zeitgeist.VersionStruct

    static name: string
}

}

export default Zeitgeist;
// END