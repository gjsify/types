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
    class EngineError extends GLib.Error {
        // Own fields of Zeitgeist-2.0.EngineError

        BACKUP_FAILED: number;
        DATABASE_BUSY: number;
        DATABASE_CANTOPEN: number;
        DATABASE_CORRUPT: number;
        DATABASE_ERROR: number;
        DATABASE_RETIRE_FAILED: number;
        EXISTING_INSTANCE: number;
        INVALID_ARGUMENT: number;
        INVALID_EVENT: number;
        INVALID_KEY: number;

        // Constructors of Zeitgeist-2.0.EngineError

        constructor(options: { message: string; code: number });
    }

    class DataModelError extends GLib.Error {
        // Own fields of Zeitgeist-2.0.DataModelError

        INVALID_SIGNATURE: number;
        NULL_EVENT: number;
        TOO_MANY_RESULTS: number;

        // Constructors of Zeitgeist-2.0.DataModelError

        constructor(options: { message: string; code: number });
    }

    const DataSourcesSIG_DATASOURCES: string;
    const TimestampSECOND: number;
    const TimestampMINUTE: number;
    const TimestampHOUR: number;
    const TimestampDAY: number;
    const TimestampWEEK: number;
    const TimestampYEAR: number;
    const NCALALARM: string;
    const NCALATTACHMENT: string;
    const NCALCALENDAR: string;
    const NCALCALENDAR_DATA_OBJECT: string;
    const NCALEVENT: string;
    const NCALFREEBUSY: string;
    const NCALJOURNAL: string;
    const NCALTIMEZONE: string;
    const NCALTODO: string;
    const NCOCONTACT: string;
    const NCOCONTACT_GROUP: string;
    const NCOCONTACT_LIST: string;
    const NCOCONTACT_LIST_DATA_OBJECT: string;
    const NCOORGANIZATION_CONTACT: string;
    const NCOPERSON_CONTACT: string;
    const NFOAPPLICATION: string;
    const NFOARCHIVE: string;
    const NFOARCHIVE_ITEM: string;
    const NFOATTACHMENT: string;
    const NFOAUDIO: string;
    const NFOBOOKMARK: string;
    const NFOBOOKMARK_FOLDER: string;
    const NFOCURSOR: string;
    const NFODATA_CONTAINER: string;
    const NFODELETED_RESOURCE: string;
    const NFODOCUMENT: string;
    const NFOEMBEDDED_FILE_DATA_OBJECT: string;
    const NFOEXECUTABLE: string;
    const NFOFILESYSTEM: string;
    const NFOFILESYSTEM_IMAGE: string;
    const NFOFILE_DATA_OBJECT: string;
    const NFOFOLDER: string;
    const NFOFONT: string;
    const NFOHARD_DISK_PARTITION: string;
    const NFOHTML_DOCUMENT: string;
    const NFOICON: string;
    const NFOIMAGE: string;
    const NFOMEDIA: string;
    const NFOMEDIA_LIST: string;
    const NFOMEDIA_STREAM: string;
    const NFOMIND_MAP: string;
    const NFOOPERATING_SYSTEM: string;
    const NFOPAGINATED_TEXT_DOCUMENT: string;
    const NFOPLAIN_TEXT_DOCUMENT: string;
    const NFOPRESENTATION: string;
    const NFORASTER_IMAGE: string;
    const NFOREMOTE_DATA_OBJECT: string;
    const NFOREMOTE_PORT_ADDRESS: string;
    const NFOSOFTWARE: string;
    const NFOSOFTWARE_ITEM: string;
    const NFOSOFTWARE_SERVICE: string;
    const NFOSOURCE_CODE: string;
    const NFOSPREADSHEET: string;
    const NFOTEXT_DOCUMENT: string;
    const NFOTRASH: string;
    const NFOVECTOR_IMAGE: string;
    const NFOVIDEO: string;
    const NFOVISUAL: string;
    const NFOWEBSITE: string;
    const NFOWEB_DATA_OBJECT: string;
    const NIEDATA_OBJECT: string;
    const NIEINFORMATION_ELEMENT: string;
    const NMMMOVIE: string;
    const NMMMUSIC_ALBUM: string;
    const NMMMUSIC_PIECE: string;
    const NMMTVSERIES: string;
    const NMMTVSHOW: string;
    const NMOEMAIL: string;
    const NMOIMMESSAGE: string;
    const NMOMAILBOX: string;
    const NMOMAILBOX_DATA_OBJECT: string;
    const NMOMESSAGE: string;
    const NMOMIME_ENTITY: string;
    const ZGACCEPT_EVENT: string;
    const ZGACCESS_EVENT: string;
    const ZGAPPLICATION_ACTION: string;
    const ZGCREATE_EVENT: string;
    const ZGDELETE_EVENT: string;
    const ZGDENY_EVENT: string;
    const ZGEVENT_INTERPRETATION: string;
    const ZGEVENT_MANIFESTATION: string;
    const ZGEXPIRE_EVENT: string;
    const ZGHEURISTIC_ACTIVITY: string;
    const ZGLEAVE_EVENT: string;
    const ZGMODIFY_EVENT: string;
    const ZGMOVE_EVENT: string;
    const ZGRECEIVE_EVENT: string;
    const ZGSCHEDULED_ACTIVITY: string;
    const ZGSEND_EVENT: string;
    const ZGSYSTEM_NOTIFICATION: string;
    const ZGUSER_ACTIVITY: string;
    const ZGWORLD_ACTIVITY: string;
    const UtilsENGINE_DBUS_NAME: string;
    const UtilsENGINE_DBUS_PATH: string;
    const UtilsSIG_EVENT: string;
    const UtilsMAX_DBUS_RESULT_SIZE: number;
    const UtilsCACHE_SIZE: number;
    function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[];
    function data_sources_to_variant(sources: GLib.HashTable<string, DataSource>): GLib.Variant;
    function events_from_variant(vevents: GLib.Variant): Event[];
    function events_to_variant(events: Event[]): GLib.Variant;
    function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant;
    function timestamp_from_timeval(timeval: GLib.TimeVal): number;
    function timestamp_to_timeval(timestamp: number): void;
    function timestamp_from_now(): number;
    function timestamp_from_iso8601(datetime: string): number;
    function timestamp_to_iso8601(timestamp: number): string;
    function timestamp_from_date(date: GLib.Date): number;
    function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number;
    function timestamp_to_date(timestamp: number): void;
    function timestamp_next_midnight(timestamp: number): number;
    function timestamp_prev_midnight(timestamp: number): number;
    function symbol_get_display_name(symbol_uri: string): string;
    function symbol_get_description(symbol_uri: string): string;
    function symbol_get_all_parents(symbol_uri: string): string[];
    function symbol_get_all_children(symbol_uri: string): string[];
    function symbol_get_children(symbol_uri: string): string[];
    function symbol_get_parents(symbol_uri: string): string[];
    function symbol_is_a(symbol_uri?: string | null, parent_uri?: string | null): boolean;
    function utils_get_data_path(): string;
    function utils_get_default_data_path(): string;
    function utils_get_database_file_path(): string;
    function utils_set_database_file_path(path: string): void;
    function utils_get_database_file_backup_path(): string;
    function utils_get_database_file_retire_name(): string;
    function utils_get_local_extensions_path(): string;
    function utils_using_in_memory_database(): boolean;
    function utils_backup_database(): void;
    function utils_parse_negation(val: string): boolean;
    function utils_parse_noexpand(val: string): boolean;
    function utils_parse_wildcard(val: string): boolean;
    function utils_is_empty_string(s?: string | null): boolean;
    function utils_log_may_read_directly(): boolean;
    function result_type_is_sort_order_asc(result_type: ResultType): boolean;
    function register_mimetype(mimetype: string, interpretation_uri: string): void;
    function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void;
    function interpretation_for_mimetype(mimetype?: string | null): string | null;
    function register_uri_scheme(uri_scheme: string, manifestation_type: string): void;
    function manifestation_for_uri(uri: string): string | null;
    module DataSourceRegistry {
        // Signal callback interfaces

        interface SourceDisconnected {
            (data_source: DataSource): void;
        }

        interface SourceEnabled {
            (unique_id: string, enabled: boolean): void;
        }

        interface SourceRegistered {
            (data_source: DataSource): void;
        }

        // Constructor properties interface
    }

    class DataSourceRegistry extends QueuedProxyWrapper {
        // Constructors of Zeitgeist-2.0.DataSourceRegistry

        static ['new'](): DataSourceRegistry;

        // Owm methods of Zeitgeist-2.0.DataSourceRegistry

        get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[];
        get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource;
        register_data_source(
            data_source: DataSource,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        register_data_source_finish(_res_: Gio.AsyncResult): boolean;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
    }

    module Index {
        // Constructor properties interface
    }

    class Index extends QueuedProxyWrapper {
        // Constructors of Zeitgeist-2.0.Index

        static ['new'](): Index;

        // Owm methods of Zeitgeist-2.0.Index

        search(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            offset: number,
            num_events: number,
            result_type: ResultType,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_finish(_res_: Gio.AsyncResult): ResultSet;
        search_with_relevancies(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState,
            offset: number,
            num_events: number,
            result_type: ResultType,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_with_relevancies_finish(_res_: Gio.AsyncResult): ResultSet;
    }

    module Log {
        // Constructor properties interface
    }

    class Log extends QueuedProxyWrapper {
        // Constructors of Zeitgeist-2.0.Log

        static ['new'](): Log;

        // Owm methods of Zeitgeist-2.0.Log

        static get_default(): Log;

        // Owm methods of Zeitgeist-2.0.Log

        insert_event(
            event: Event,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        insert_event_finish(_res_: Gio.AsyncResult): number[];
        insert_events(
            events: Event[],
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        insert_events_finish(_res_: Gio.AsyncResult): number[];
        insert_event_no_reply(event: Event): void;
        insert_events_no_reply(events: Event[]): void;
        find_events(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState,
            num_events: number,
            result_type: ResultType,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_events_finish(_res_: Gio.AsyncResult): ResultSet;
        find_event_ids(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState,
            num_events: number,
            result_type: ResultType,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_event_ids_finish(_res_: Gio.AsyncResult): number[];
        get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_events_finish(_res_: Gio.AsyncResult): ResultSet;
        find_related_uris(
            time_range: TimeRange,
            event_templates: Event[],
            result_event_templates: Event[],
            storage_state: StorageState,
            num_events: number,
            result_type: RelevantResultType,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_related_uris_finish(_res_: Gio.AsyncResult): string[];
        delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        delete_events_finish(_res_: Gio.AsyncResult): TimeRange;
        quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        quit_finish(_res_: Gio.AsyncResult): void;
        install_monitor(monitor: Monitor): void;
        remove_monitor(monitor: Monitor): void;
        get_version(): void;
        get_extensions(): string[];
        datapath(): string;
    }

    module Monitor {
        // Signal callback interfaces

        interface EventsInserted {
            (time_range: TimeRange, events: ResultSet): void;
        }

        interface EventsDeleted {
            (time_range: TimeRange, event_ids: number[]): void;
        }

        // Constructor properties interface
    }

    class Monitor extends GObject.Object {
        // Own properties of Zeitgeist-2.0.Monitor

        time_range: TimeRange;
        timeRange: TimeRange;
        event_templates: Event[];
        eventTemplates: Event[];

        // Constructors of Zeitgeist-2.0.Monitor

        static ['new'](time_range: TimeRange, event_templates: Event[]): Monitor;

        // Owm methods of Zeitgeist-2.0.Monitor

        get_templates(): Event[];
        get_path(): GLib.ObjectPath;
        get_time_range(): TimeRange;
        set_time_range(value: TimeRange): void;
        get_event_templates(): Event[];
        set_event_templates(value: Event[]): void;
    }

    module QueuedProxyWrapper {
        // Constructor properties interface
    }

    abstract class QueuedProxyWrapper extends GObject.Object {
        // Own properties of Zeitgeist-2.0.QueuedProxyWrapper

        proxy_created: boolean;
        proxyCreated: boolean;
        is_connected: boolean;
        isConnected: boolean;

        // Owm methods of Zeitgeist-2.0.QueuedProxyWrapper

        proxy_acquired(proxy: GObject.Object): void;
        proxy_unavailable(err: Gio.IOErrorEnum): void;
        process_queued_methods(): void;
        name_owner_changed(pspec: GObject.ParamSpec): void;
        on_connection_established(): void;
        on_connection_lost(): void;
        wait_for_proxy(_callback_?: Gio.AsyncReadyCallback<this> | null): void;
        wait_for_proxy_finish(_res_: Gio.AsyncResult): void;
        get_proxy_created(): boolean;
        get_is_connected(): boolean;
    }

    class QueuedProxyWrapperQueuedMethod {
        // Own fields of Zeitgeist-2.0.QueuedProxyWrapperQueuedMethod

        ref_count: number;

        // Constructors of Zeitgeist-2.0.QueuedProxyWrapperQueuedMethod

        static ['new'](callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod;

        // Owm methods of Zeitgeist-2.0.QueuedProxyWrapperQueuedMethod

        get_queued_method(): GLib.SourceFunc;
    }

    module DataSource {
        // Constructor properties interface
    }

    class DataSource extends GObject.Object {
        // Own properties of Zeitgeist-2.0.DataSource

        unique_id: string;
        uniqueId: string;
        name: string;
        description: string;
        event_templates: Event[];
        eventTemplates: Event[];
        enabled: boolean;
        running: boolean;
        timestamp: number;

        // Constructors of Zeitgeist-2.0.DataSource

        static ['new'](): DataSource;

        static full(unique_id: string, name: string, description: string, templates?: Event[] | null): DataSource;

        static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource;

        // Owm methods of Zeitgeist-2.0.DataSource

        to_variant(): GLib.Variant;
        get_unique_id(): string;
        set_unique_id(value: string): void;
        get_name(): string;
        set_name(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_event_templates(): Event[] | null;
        set_event_templates(value?: Event[] | null): void;
        get_enabled(): boolean;
        set_enabled(value: boolean): void;
        get_running(): boolean;
        set_running(value: boolean): void;
        get_timestamp(): number;
        set_timestamp(value: number): void;
    }

    module Event {
        // Constructor properties interface
    }

    class Event extends GObject.Object {
        // Own properties of Zeitgeist-2.0.Event

        id: number;
        timestamp: number;
        origin: string;
        actor: string;
        interpretation: string;
        manifestation: string;
        subjects: Subject[];
        payload: GLib.ByteArray;

        // Constructors of Zeitgeist-2.0.Event

        static from_variant(event_variant: GLib.Variant): Event;

        static ['new'](): Event;

        // Owm methods of Zeitgeist-2.0.Event

        get_subject(index: number): Subject;
        num_subjects(): number;
        add_subject(subject: Subject): void;
        take_subject(subject: Subject): void;
        set_actor_from_app_info(info: Gio.AppInfo): void;
        to_variant(): GLib.Variant;
        debug_print(): void;
        matches_template(template_event: Event): boolean;
        get_id(): number;
        set_id(value: number): void;
        get_timestamp(): number;
        set_timestamp(value: number): void;
        get_origin(): string | null;
        set_origin(value?: string | null): void;
        get_actor(): string | null;
        set_actor(value?: string | null): void;
        get_interpretation(): string | null;
        set_interpretation(value?: string | null): void;
        get_manifestation(): string | null;
        set_manifestation(value?: string | null): void;
        get_subjects(): Subject[];
        set_subjects(value: Subject[]): void;
        get_payload(): GLib.ByteArray | null;
        set_payload(value?: GLib.ByteArray | null): void;
    }

    module Subject {
        // Constructor properties interface
    }

    class Subject extends GObject.Object {
        // Own properties of Zeitgeist-2.0.Subject

        uri: string;
        origin: string;
        text: string;
        storage: string;
        current_uri: string;
        currentUri: string;
        current_origin: string;
        currentOrigin: string;
        mimetype: string;
        interpretation: string;
        manifestation: string;

        // Constructors of Zeitgeist-2.0.Subject

        static full(
            uri?: string | null,
            interpretation?: string | null,
            manifestation?: string | null,
            mimetype?: string | null,
            origin?: string | null,
            text?: string | null,
            storage?: string | null,
        ): Subject;

        static move_event(
            source_uri?: string | null,
            source_origin?: string | null,
            destination_uri?: string | null,
            destination_origin?: string | null,
            interpretation?: string | null,
            manifestation?: string | null,
            mimetype?: string | null,
            text?: string | null,
            storage?: string | null,
        ): Subject;

        static from_variant(subject_variant: GLib.Variant): Subject;

        static ['new'](): Subject;

        // Owm methods of Zeitgeist-2.0.Subject

        to_variant(): GLib.Variant;
        matches_template(template_subject: Subject): boolean;
        get_uri(): string | null;
        set_uri(value?: string | null): void;
        get_origin(): string | null;
        set_origin(value?: string | null): void;
        get_text(): string | null;
        set_text(value?: string | null): void;
        get_storage(): string | null;
        set_storage(value?: string | null): void;
        get_current_uri(): string | null;
        set_current_uri(value?: string | null): void;
        get_current_origin(): string | null;
        set_current_origin(value?: string | null): void;
        get_mimetype(): string | null;
        set_mimetype(value?: string | null): void;
        get_interpretation(): string | null;
        set_interpretation(value?: string | null): void;
        get_manifestation(): string | null;
        set_manifestation(value?: string | null): void;
    }

    module TimeRange {
        // Constructor properties interface
    }

    class TimeRange extends GObject.Object {
        // Own properties of Zeitgeist-2.0.TimeRange

        start: number;
        end: number;

        // Constructors of Zeitgeist-2.0.TimeRange

        static ['new'](start_msec: number, end_msec: number): TimeRange;

        static anytime(): TimeRange;

        static to_now(): TimeRange;

        static from_now(): TimeRange;

        static from_variant(variant: GLib.Variant): TimeRange;

        // Owm methods of Zeitgeist-2.0.TimeRange

        to_variant(): GLib.Variant;
        intersect(time_range: TimeRange): TimeRange | null;
        get_start(): number;
        get_end(): number;
    }

    module SimpleResultSet {
        // Constructor properties interface
    }

    class SimpleResultSet extends GObject.Object {
        // Constructors of Zeitgeist-2.0.SimpleResultSet

        static ['new'](events: Event[]): SimpleResultSet;

        static with_num_matches(events: Event[], matches: number): SimpleResultSet;
    }

    class DataSourceRegistryClass {}

    class DataSourceRegistryPrivate {}

    class IndexClass {}

    class IndexPrivate {}

    class LogClass {}

    class LogPrivate {}

    class MonitorClass {}

    class MonitorPrivate {}

    class QueuedProxyWrapperClass {}

    class QueuedProxyWrapperPrivate {}

    class QueuedProxyWrapperQueuedMethodClass {}

    class QueuedProxyWrapperQueuedMethodPrivate {}

    class DataSourceClass {}

    class DataSourcePrivate {}

    class EventClass {}

    class EventPrivate {}

    class SubjectClass {}

    class SubjectPrivate {}

    class TimeRangeClass {}

    class TimeRangePrivate {}

    class SimpleResultSetClass {}

    class SimpleResultSetPrivate {}

    class RemoteRegistryIface {}

    class RemoteLogIface {}

    class RemoteMonitorIface {}

    class RemoteSimpleIndexerIface {}

    class NetworkManagerDBusIface {}

    class ConnmanManagerDBusIface {}

    class ResultSetIface {}

    class VersionStruct {
        // Own fields of Zeitgeist-2.0.VersionStruct

        major: number;
        minor: number;
        micro: number;

        // Constructors of Zeitgeist-2.0.VersionStruct

        constructor(
            properties?: Partial<{
                major: number;
                minor: number;
                micro: number;
            }>,
        );
    }

    interface RemoteRegistry {
        // Owm methods of Zeitgeist-2.0.RemoteRegistry

        get_data_sources(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;
        register_data_source(
            unique_id: string,
            name: string,
            description: string,
            event_templates: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        register_data_source_finish(_res_: Gio.AsyncResult): boolean;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
        get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;

        // Own virtual methods of Zeitgeist-2.0.RemoteRegistry

        vfunc_get_data_sources(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;
        vfunc_register_data_source(
            unique_id: string,
            name: string,
            description: string,
            event_templates: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_register_data_source_finish(_res_: Gio.AsyncResult): boolean;
        vfunc_set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;
    }

    interface RemoteLog {
        // Owm methods of Zeitgeist-2.0.RemoteLog

        delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        find_event_ids(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_event_ids_finish(_res_: Gio.AsyncResult): number[];
        find_events(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        find_related_uris(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            result_event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_related_uris_finish(_res_: Gio.AsyncResult): string[];
        get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        insert_events(
            events: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        insert_events_finish(_res_: Gio.AsyncResult): number[];
        install_monitor(
            monitor_path: GLib.ObjectPath,
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            owner?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        install_monitor_finish(_res_: Gio.AsyncResult): void;
        remove_monitor(
            monitor_path: GLib.ObjectPath,
            owner?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        remove_monitor_finish(_res_: Gio.AsyncResult): void;
        quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        quit_finish(_res_: Gio.AsyncResult): void;
        get_extensions(): string[];
        get_version(): void;
        get_datapath(): string;

        // Own virtual methods of Zeitgeist-2.0.RemoteLog

        vfunc_delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        vfunc_find_event_ids(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_find_event_ids_finish(_res_: Gio.AsyncResult): number[];
        vfunc_find_events(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        vfunc_find_related_uris(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            result_event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[];
        vfunc_get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        vfunc_insert_events(
            events: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[];
        vfunc_install_monitor(
            monitor_path: GLib.ObjectPath,
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            owner?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_monitor(
            monitor_path: GLib.ObjectPath,
            owner?: GLib.BusName | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void;
        vfunc_quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_quit_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_extensions(): string[];
        vfunc_get_version(): void;
        vfunc_get_datapath(): string;
    }

    interface RemoteMonitor {
        // Owm methods of Zeitgeist-2.0.RemoteMonitor

        notify_insert(
            time_range: GLib.Variant,
            events: GLib.Variant,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        notify_insert_finish(_res_: Gio.AsyncResult): void;
        notify_delete(
            time_range: GLib.Variant,
            event_ids: number[],
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        notify_delete_finish(_res_: Gio.AsyncResult): void;

        // Own virtual methods of Zeitgeist-2.0.RemoteMonitor

        vfunc_notify_insert(
            time_range: GLib.Variant,
            events: GLib.Variant,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void;
        vfunc_notify_delete(
            time_range: GLib.Variant,
            event_ids: number[],
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void;
    }

    interface RemoteSimpleIndexer {
        // Owm methods of Zeitgeist-2.0.RemoteSimpleIndexer

        search(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_finish(_res_: Gio.AsyncResult): void;
        search_with_relevancies(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            storage_state: number,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_with_relevancies_finish(_res_: Gio.AsyncResult): void;

        // Own virtual methods of Zeitgeist-2.0.RemoteSimpleIndexer

        vfunc_search(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_search_finish(_res_: Gio.AsyncResult): void;
        vfunc_search_with_relevancies(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            storage_state: number,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): void;
    }

    interface NetworkManagerDBus {
        // Owm methods of Zeitgeist-2.0.NetworkManagerDBus

        state(): number;

        // Own virtual methods of Zeitgeist-2.0.NetworkManagerDBus

        vfunc_state(): number;
    }

    interface ConnmanManagerDBus {
        // Owm methods of Zeitgeist-2.0.ConnmanManagerDBus

        get_state(): string;

        // Own virtual methods of Zeitgeist-2.0.ConnmanManagerDBus

        vfunc_get_state(): string;
    }

    interface ResultSet {
        // Owm methods of Zeitgeist-2.0.ResultSet

        size(): number;
        estimated_matches(): number;
        next_value(): Event | null;
        has_next(): boolean;
        tell(): number;
        reset(): void;
        iterator(): ResultSet;

        // Own virtual methods of Zeitgeist-2.0.ResultSet

        vfunc_size(): number;
        vfunc_estimated_matches(): number;
        vfunc_next_value(): Event | null;
        vfunc_has_next(): boolean;
        vfunc_tell(): number;
        vfunc_reset(): void;
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

export default Zeitgeist;
// END
