
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './zeitgeist-2.0-ambient.d.ts';
import './zeitgeist-2.0-import.d.ts';
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
function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[]
function data_sources_to_variant(sources: GLib.HashTable): GLib.Variant
function events_from_variant(vevents: GLib.Variant): Event[]
function events_to_variant(events: Event[]): GLib.Variant
function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant
function timestamp_from_timeval(timeval: GLib.TimeVal): number
function timestamp_to_timeval(timestamp: number): /* result */ GLib.TimeVal
function timestamp_from_now(): number
function timestamp_from_iso8601(datetime: string | null): number
function timestamp_to_iso8601(timestamp: number): string | null
function timestamp_from_date(date: GLib.Date): number
function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
function timestamp_to_date(timestamp: number): /* result */ GLib.Date
function timestamp_next_midnight(timestamp: number): number
function timestamp_prev_midnight(timestamp: number): number
function symbol_get_display_name(symbol_uri: string | null): string | null
function symbol_get_description(symbol_uri: string | null): string | null
function symbol_get_all_parents(symbol_uri: string | null): string[]
function symbol_get_all_children(symbol_uri: string | null): string[]
function symbol_get_children(symbol_uri: string | null): string[]
function symbol_get_parents(symbol_uri: string | null): string[]
function symbol_is_a(symbol_uri: string | null, parent_uri: string | null): boolean
function utils_get_data_path(): string | null
function utils_get_default_data_path(): string | null
function utils_get_database_file_path(): string | null
function utils_set_database_file_path(path: string | null): void
function utils_get_database_file_backup_path(): string | null
function utils_get_database_file_retire_name(): string | null
function utils_get_local_extensions_path(): string | null
function utils_using_in_memory_database(): boolean
function utils_backup_database(): void
function utils_parse_negation(val: string | null): [ /* returnType */ boolean, /* val */ string | null ]
function utils_parse_noexpand(val: string | null): [ /* returnType */ boolean, /* val */ string | null ]
function utils_parse_wildcard(val: string | null): [ /* returnType */ boolean, /* val */ string | null ]
function utils_is_empty_string(s: string | null): boolean
function utils_log_may_read_directly(): boolean
function result_type_is_sort_order_asc(result_type: ResultType): boolean
function register_mimetype(mimetype: string | null, interpretation_uri: string | null): void
function register_mimetype_regex(mimetype_regex: string | null, interpretation_uri: string | null): void
function interpretation_for_mimetype(mimetype: string | null): string | null
function register_uri_scheme(uri_scheme: string | null, manifestation_type: string | null): void
function manifestation_for_uri(uri: string | null): string | null
module RemoteRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-source-disconnected`
     */
    interface DataSourceDisconnectedSignalCallback {
        ($obj: RemoteRegistry, data_source: GLib.Variant): void
    }

    /**
     * Signal callback interface for `data-source-enabled`
     */
    interface DataSourceEnabledSignalCallback {
        ($obj: RemoteRegistry, unique_id: string | null, enabled: boolean): void
    }

    /**
     * Signal callback interface for `data-source-registered`
     */
    interface DataSourceRegisteredSignalCallback {
        ($obj: RemoteRegistry, data_source: GLib.Variant): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteRegistry extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant
    register_data_source(unique_id: string | null, name: string | null, description: string | null, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    register_data_source_finish(_res_: Gio.AsyncResult): boolean
    set_data_source_enabled(unique_id: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    get_data_source_from_id(unique_id: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    vfunc_get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_register_data_source(unique_id: string | null, name: string | null, description: string | null, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_register_data_source_finish(_res_: Gio.AsyncResult): boolean
    vfunc_set_data_source_enabled(unique_id: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_set_data_source_enabled_finish(_res_: Gio.AsyncResult): void
    vfunc_get_data_source_from_id(unique_id: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant

    // Own signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    connect(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): number
    connect_after(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): number
    emit(sigName: "data-source-disconnected", data_source: GLib.Variant, ...args: any[]): void
    connect(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): number
    connect_after(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): number
    emit(sigName: "data-source-enabled", unique_id: string | null, enabled: boolean, ...args: any[]): void
    connect(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): number
    connect_after(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): number
    emit(sigName: "data-source-registered", data_source: GLib.Variant, ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteRegistry {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    static name: string
    static $gtype: GObject.GType<RemoteRegistry>

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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteLog

    delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    get_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    insert_events_finish(_res_: Gio.AsyncResult): number[]
    install_monitor(monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    install_monitor_finish(_res_: Gio.AsyncResult): void
    remove_monitor(monitor_path: string, owner: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    remove_monitor_finish(_res_: Gio.AsyncResult): void
    quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    quit_finish(_res_: Gio.AsyncResult): void
    get_extensions(): string[]
    get_version(): /* result */ VersionStruct
    get_datapath(): string | null

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteLog

    vfunc_delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    vfunc_find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_find_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    vfunc_get_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant
    vfunc_insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[]
    vfunc_install_monitor(monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void
    vfunc_remove_monitor(monitor_path: string, owner: string | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void
    vfunc_quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_quit_finish(_res_: Gio.AsyncResult): void
    vfunc_get_extensions(): string[]
    vfunc_get_version(): /* result */ VersionStruct
    vfunc_get_datapath(): string | null

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteLog

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteLog {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLog

    static name: string
    static $gtype: GObject.GType<RemoteLog>

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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback<this> | null): void
    notify_insert_finish(_res_: Gio.AsyncResult): void
    notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback<this> | null): void
    notify_delete_finish(_res_: Gio.AsyncResult): void

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void
    vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteMonitor {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    static name: string
    static $gtype: GObject.GType<RemoteMonitor>

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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    search(query_string: string | null, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    search_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    search_with_relevancies(query_string: string | null, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    vfunc_search(query_string: string | null, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_search_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    vfunc_search_with_relevancies(query_string: string | null, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteSimpleIndexer {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    static name: string
    static $gtype: GObject.GType<RemoteSimpleIndexer>

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
        ($obj: NetworkManagerDBus, state: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface NetworkManagerDBus extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    state(): number

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    vfunc_state(): number

    // Own signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    connect(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): number
    emit(sigName: "state-changed", state: number, ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NetworkManagerDBus {

    // Own properties of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    static name: string
    static $gtype: GObject.GType<NetworkManagerDBus>

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
        ($obj: ConnmanManagerDBus, state: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ConnmanManagerDBus extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    get_state(): string | null

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    vfunc_get_state(): string | null

    // Own signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    connect(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): number
    emit(sigName: "state-changed", state: string | null, ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ConnmanManagerDBus {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    static name: string
    static $gtype: GObject.GType<ConnmanManagerDBus>

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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.ResultSet

    size(): number
    estimated_matches(): number
    next_value(): Event | null
    has_next(): boolean
    tell(): number
    reset(): void
    iterator(): ResultSet

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.ResultSet

    vfunc_size(): number
    vfunc_estimated_matches(): number
    vfunc_next_value(): Event | null
    vfunc_has_next(): boolean
    vfunc_tell(): number
    vfunc_reset(): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.ResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResultSet {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ResultSet

    static name: string
    static $gtype: GObject.GType<ResultSet>

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
        ($obj: DataSourceRegistry, data_source: DataSource): void
    }

    /**
     * Signal callback interface for `source-enabled`
     */
    interface SourceEnabledSignalCallback {
        ($obj: DataSourceRegistry, unique_id: string | null, enabled: boolean): void
    }

    /**
     * Signal callback interface for `source-registered`
     */
    interface SourceRegisteredSignalCallback {
        ($obj: DataSourceRegistry, data_source: DataSource): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

interface DataSourceRegistry {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[]
    get_data_source_from_id(unique_id: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource
    register_data_source(data_source: DataSource, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    register_data_source_finish(_res_: Gio.AsyncResult): boolean
    set_data_source_enabled(unique_id: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    set_data_source_enabled_finish(_res_: Gio.AsyncResult): void

    // Own signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    connect(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): number
    connect_after(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): number
    emit(sigName: "source-disconnected", data_source: DataSource, ...args: any[]): void
    connect(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): number
    connect_after(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): number
    emit(sigName: "source-enabled", unique_id: string | null, enabled: boolean, ...args: any[]): void
    connect(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): number
    connect_after(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): number
    emit(sigName: "source-registered", data_source: DataSource, ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    connect(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: DataSourceRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataSourceRegistry extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    static name: string
    static $gtype: GObject.GType<DataSourceRegistry>

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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Index

    search(query: string | null, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    search_finish(_res_: Gio.AsyncResult): ResultSet
    search_with_relevancies(query: string | null, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    search_with_relevancies_finish(_res_: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Index

    connect(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Index extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Index

    static name: string
    static $gtype: GObject.GType<Index>

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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Log

    insert_event(event: Event, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    insert_event_finish(_res_: Gio.AsyncResult): number[]
    insert_events(events: Event[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    insert_events_finish(_res_: Gio.AsyncResult): number[]
    insert_event_no_reply(event: Event): void
    insert_events_no_reply(events: Event[]): void
    find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_events_finish(_res_: Gio.AsyncResult): ResultSet
    find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_event_ids_finish(_res_: Gio.AsyncResult): number[]
    get_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    get_events_finish(_res_: Gio.AsyncResult): ResultSet
    find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    find_related_uris_finish(_res_: Gio.AsyncResult): string[]
    delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    delete_events_finish(_res_: Gio.AsyncResult): TimeRange
    quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void
    quit_finish(_res_: Gio.AsyncResult): void
    install_monitor(monitor: Monitor): void
    remove_monitor(monitor: Monitor): void
    get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    get_extensions(): string[]
    datapath(): string | null

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Log

    connect(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: Log, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Log extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Log

    static name: string
    static $gtype: GObject.GType<Log>

    // Constructors of Zeitgeist-2.0.Zeitgeist.Log

    constructor(config?: Log.ConstructorProperties) 
    constructor() 
    static new(): Log
    _init(config?: Log.ConstructorProperties): void
    static get_default(): Log
}

module Monitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events-inserted`
     */
    interface EventsInsertedSignalCallback {
        ($obj: Monitor, time_range: TimeRange, events: ResultSet): void
    }

    /**
     * Signal callback interface for `events-deleted`
     */
    interface EventsDeletedSignalCallback {
        ($obj: Monitor, time_range: TimeRange, event_ids: number[]): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends RemoteMonitor.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Monitor

        time_range?: TimeRange | null
        event_templates?: Event[] | null
    }

}

interface Monitor extends RemoteMonitor {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Monitor

    time_range: TimeRange
    event_templates: Event[]

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Monitor

    get_templates(): Event[]
    get_path(): string
    get_time_range(): TimeRange
    set_time_range(value: TimeRange): void
    get_event_templates(): Event[]
    set_event_templates(value: Event[]): void

    // Own signals of Zeitgeist-2.0.Zeitgeist.Monitor

    connect(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): number
    connect_after(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): number
    emit(sigName: "events-inserted", time_range: TimeRange, events: ResultSet, ...args: any[]): void
    connect(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): number
    connect_after(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): number
    emit(sigName: "events-deleted", time_range: TimeRange, event_ids: number[], ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Monitor

    connect(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-range", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-range", ...args: any[]): void
    connect(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-templates", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Monitor extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Monitor

    static name: string
    static $gtype: GObject.GType<Monitor>

    // Constructors of Zeitgeist-2.0.Zeitgeist.Monitor

    constructor(config?: Monitor.ConstructorProperties) 
    constructor(time_range: TimeRange, event_templates: Event[]) 
    static new(time_range: TimeRange, event_templates: Event[]): Monitor
    _init(config?: Monitor.ConstructorProperties): void
}

module QueuedProxyWrapper {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

        proxy_created?: boolean | null
        is_connected?: boolean | null
    }

}

interface QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    proxy_created: boolean
    is_connected: boolean

    // Owm methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    proxy_acquired(proxy: GObject.Object): void
    proxy_unavailable(err: Gio.IOErrorEnum): void
    process_queued_methods(): void
    name_owner_changed(pspec: GObject.ParamSpec): void
    on_connection_established(): void
    on_connection_lost(): void
    wait_for_proxy(_callback_: Gio.AsyncReadyCallback<this> | null): void
    wait_for_proxy_finish(_res_: Gio.AsyncResult): void
    get_proxy_created(): boolean
    get_is_connected(): boolean

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    vfunc_on_connection_established(): void
    vfunc_on_connection_lost(): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    connect(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-created", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-connected", callback: (($obj: QueuedProxyWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class QueuedProxyWrapper extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    static name: string
    static $gtype: GObject.GType<QueuedProxyWrapper>

    // Constructors of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    constructor(config?: QueuedProxyWrapper.ConstructorProperties) 
    _init(config?: QueuedProxyWrapper.ConstructorProperties): void
}

interface QueuedProxyWrapperQueuedMethod {

    // Own fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    ref_count: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    get_queued_method(): [ /* returnType */ GLib.SourceFunc, /* result_target */ any ]
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

        unique_id?: string | null
        name?: string | null
        description?: string | null
        event_templates?: Event[] | null
        enabled?: boolean | null
        running?: boolean | null
        timestamp?: number | null
    }

}

interface DataSource {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSource

    unique_id: string | null
    name: string | null
    description: string | null
    event_templates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.DataSource

    to_variant(): GLib.Variant
    get_unique_id(): string | null
    set_unique_id(value: string | null): void
    get_name(): string | null
    set_name(value: string | null): void
    get_description(): string | null
    set_description(value: string | null): void
    get_event_templates(): Event[] | null
    set_event_templates(value: Event[] | null): void
    get_enabled(): boolean
    set_enabled(value: boolean): void
    get_running(): boolean
    set_running(value: boolean): void
    get_timestamp(): number
    set_timestamp(value: number): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.DataSource

    connect(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-id", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unique-id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::event-templates", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::event-templates", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: DataSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataSource extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSource

    static name: string
    static $gtype: GObject.GType<DataSource>

    // Constructors of Zeitgeist-2.0.Zeitgeist.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    constructor() 
    static new(): DataSource
    static full(unique_id: string | null, name: string | null, description: string | null, templates: Event[] | null): DataSource
    static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource
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
        payload?: Uint8Array | null
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
    payload: Uint8Array

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Event

    get_subject(index: number): Subject
    num_subjects(): number
    add_subject(subject: Subject): void
    take_subject(subject: Subject): void
    set_actor_from_app_info(info: Gio.AppInfo): void
    to_variant(): GLib.Variant
    debug_print(): void
    matches_template(template_event: Event): boolean
    get_id(): number
    set_id(value: number): void
    get_timestamp(): number
    set_timestamp(value: number): void
    get_origin(): string | null
    set_origin(value: string | null): void
    get_actor(): string | null
    set_actor(value: string | null): void
    get_interpretation(): string | null
    set_interpretation(value: string | null): void
    get_manifestation(): string | null
    set_manifestation(value: string | null): void
    get_subjects(): Subject[]
    set_subjects(value: Subject[]): void
    get_payload(): Uint8Array | null
    set_payload(value: Uint8Array | null): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Event

    connect(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actor", ...args: any[]): void
    connect(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpretation", ...args: any[]): void
    connect(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manifestation", ...args: any[]): void
    connect(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subjects", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subjects", ...args: any[]): void
    connect(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::payload", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::payload", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Event extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Event

    static name: string
    static $gtype: GObject.GType<Event>

    // Constructors of Zeitgeist-2.0.Zeitgeist.Event

    constructor(config?: Event.ConstructorProperties) 
    static from_variant(event_variant: GLib.Variant): Event
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
        current_uri?: string | null
        current_origin?: string | null
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
    current_uri: string | null
    current_origin: string | null
    mimetype: string | null
    interpretation: string | null
    manifestation: string | null

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Subject

    to_variant(): GLib.Variant
    matches_template(template_subject: Subject): boolean
    get_uri(): string | null
    set_uri(value: string | null): void
    get_origin(): string | null
    set_origin(value: string | null): void
    get_text(): string | null
    set_text(value: string | null): void
    get_storage(): string | null
    set_storage(value: string | null): void
    get_current_uri(): string | null
    set_current_uri(value: string | null): void
    get_current_origin(): string | null
    set_current_origin(value: string | null): void
    get_mimetype(): string | null
    set_mimetype(value: string | null): void
    get_interpretation(): string | null
    set_interpretation(value: string | null): void
    get_manifestation(): string | null
    set_manifestation(value: string | null): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Subject

    connect(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-uri", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-uri", ...args: any[]): void
    connect(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-origin", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-origin", ...args: any[]): void
    connect(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mimetype", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mimetype", ...args: any[]): void
    connect(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interpretation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interpretation", ...args: any[]): void
    connect(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manifestation", callback: (($obj: Subject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manifestation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Subject extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Subject

    static name: string
    static $gtype: GObject.GType<Subject>

    // Constructors of Zeitgeist-2.0.Zeitgeist.Subject

    constructor(config?: Subject.ConstructorProperties) 
    static full(uri: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, origin: string | null, text: string | null, storage: string | null): Subject
    static move_event(source_uri: string | null, source_origin: string | null, destination_uri: string | null, destination_origin: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, text: string | null, storage: string | null): Subject
    static from_variant(subject_variant: GLib.Variant): Subject
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

    // Owm methods of Zeitgeist-2.0.Zeitgeist.TimeRange

    to_variant(): GLib.Variant
    intersect(time_range: TimeRange): TimeRange | null
    get_start(): number
    get_end(): number

    // Class property signals of Zeitgeist-2.0.Zeitgeist.TimeRange

    connect(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start", ...args: any[]): void
    connect(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end", callback: (($obj: TimeRange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::end", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TimeRange extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRange

    static name: string
    static $gtype: GObject.GType<TimeRange>

    // Constructors of Zeitgeist-2.0.Zeitgeist.TimeRange

    constructor(config?: TimeRange.ConstructorProperties) 
    constructor(start_msec: number, end_msec: number) 
    static new(start_msec: number, end_msec: number): TimeRange
    static anytime(): TimeRange
    static to_now(): TimeRange
    static from_now(): TimeRange
    static from_variant(variant: GLib.Variant): TimeRange
    _init(config?: TimeRange.ConstructorProperties): void
}

module SimpleResultSet {

    // Constructor properties interface

    interface ConstructorProperties extends ResultSet.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface SimpleResultSet extends ResultSet {

    // Class property signals of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleResultSet extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    static name: string
    static $gtype: GObject.GType<SimpleResultSet>

    // Constructors of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    constructor(config?: SimpleResultSet.ConstructorProperties) 
    constructor(events: Event[]) 
    static new(events: Event[]): SimpleResultSet
    static with_num_matches(events: Event[], matches: number): SimpleResultSet
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

    on_connection_established: (self: QueuedProxyWrapper) => void
    on_connection_lost: (self: QueuedProxyWrapper) => void
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

    get_data_sources: (self: RemoteRegistry, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    get_data_sources_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => GLib.Variant
    register_data_source: (self: RemoteRegistry, unique_id: string | null, name: string | null, description: string | null, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    register_data_source_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => boolean
    set_data_source_enabled: (self: RemoteRegistry, unique_id: string | null, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    set_data_source_enabled_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => void
    get_data_source_from_id: (self: RemoteRegistry, unique_id: string | null, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    get_data_source_from_id_finish: (self: RemoteRegistry, _res_: Gio.AsyncResult) => GLib.Variant
}

abstract class RemoteRegistryIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface

    static name: string
}

interface RemoteLogIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteLogIface

    delete_events: (self: RemoteLog, event_ids: number[], cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    delete_events_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => GLib.Variant
    find_event_ids: (self: RemoteLog, time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    find_event_ids_finish: (self: RemoteLog) => [ /* returnType */ number[], /* result_length1 */ number ]
    find_events: (self: RemoteLog, time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    find_events_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => GLib.Variant
    find_related_uris: (self: RemoteLog, time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    find_related_uris_finish: (self: RemoteLog) => [ /* returnType */ string[], /* result_length1 */ number ]
    get_events: (self: RemoteLog, event_ids: number[], cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    get_events_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => GLib.Variant
    insert_events: (self: RemoteLog, events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    insert_events_finish: (self: RemoteLog) => [ /* returnType */ number[], /* result_length1 */ number ]
    install_monitor: (self: RemoteLog, monitor_path: string, time_range: GLib.Variant, event_templates: GLib.Variant, owner: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    install_monitor_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => void
    remove_monitor: (self: RemoteLog, monitor_path: string, owner: string | null, _callback_: Gio.AsyncReadyCallback | null) => void
    remove_monitor_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => void
    quit: (self: RemoteLog, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    quit_finish: (self: RemoteLog, _res_: Gio.AsyncResult) => void
    get_extensions: () => [ /* returnType */ string[], /* result_length1 */ number ]
    get_version: (self: RemoteLog) => /* result */ VersionStruct
    get_datapath: (self: RemoteLog) => string | null
}

abstract class RemoteLogIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLogIface

    static name: string
}

interface RemoteMonitorIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface

    notify_insert: (self: RemoteMonitor, time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback | null) => void
    notify_insert_finish: (self: RemoteMonitor, _res_: Gio.AsyncResult) => void
    notify_delete: (self: RemoteMonitor, time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback | null) => void
    notify_delete_finish: (self: RemoteMonitor, _res_: Gio.AsyncResult) => void
}

abstract class RemoteMonitorIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface

    static name: string
}

interface RemoteSimpleIndexerIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface

    search: (self: RemoteSimpleIndexer, query_string: string | null, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    search_finish: (self: RemoteSimpleIndexer, _res_: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    search_with_relevancies: (self: RemoteSimpleIndexer, query_string: string | null, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null) => void
    search_with_relevancies_finish: (self: RemoteSimpleIndexer, _res_: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
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

    get_state: (self: ConnmanManagerDBus) => string | null
}

abstract class ConnmanManagerDBusIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface

    static name: string
}

interface ResultSetIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.ResultSetIface

    size: (self: ResultSet) => number
    estimated_matches: (self: ResultSet) => number
    next_value: (self: ResultSet) => Event | null
    has_next: (self: ResultSet) => boolean
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Zeitgeist;
// END