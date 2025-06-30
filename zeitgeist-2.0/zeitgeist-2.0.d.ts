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
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Zeitgeist {
    /**
     * Zeitgeist-2.0
     */

    export namespace ResultType {
        export const $gtype: GObject.GType<ResultType>;
    }

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

    export namespace RelevantResultType {
        export const $gtype: GObject.GType<RelevantResultType>;
    }

    enum RelevantResultType {
        RECENT,
        RELATED,
    }

    export namespace StorageState {
        export const $gtype: GObject.GType<StorageState>;
    }

    enum StorageState {
        NOT_AVAILABLE,
        AVAILABLE,
        ANY,
    }
    class EngineError extends GLib.Error {
        static $gtype: GObject.GType<EngineError>;

        // Static fields

        static BACKUP_FAILED: number;
        static DATABASE_BUSY: number;
        static DATABASE_CANTOPEN: number;
        static DATABASE_CORRUPT: number;
        static DATABASE_ERROR: number;
        static DATABASE_RETIRE_FAILED: number;
        static EXISTING_INSTANCE: number;
        static INVALID_ARGUMENT: number;
        static INVALID_EVENT: number;
        static INVALID_KEY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class DataModelError extends GLib.Error {
        static $gtype: GObject.GType<DataModelError>;

        // Static fields

        static INVALID_SIGNATURE: number;
        static NULL_EVENT: number;
        static TOO_MANY_RESULTS: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
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
    function data_sources_to_variant(
        sources: { [key: string]: any } | GLib.HashTable<string, DataSource>,
    ): GLib.Variant;
    function events_from_variant(vevents: GLib.Variant): Event[];
    function events_to_variant(events: Event[]): GLib.Variant;
    function events_to_variant_with_limit(events: Event[], limit: number): GLib.Variant;
    function timestamp_from_timeval(timeval: GLib.TimeVal): number;
    function timestamp_to_timeval(timestamp: number): GLib.TimeVal;
    function timestamp_from_now(): number;
    function timestamp_from_iso8601(datetime: string): number;
    function timestamp_to_iso8601(timestamp: number): string;
    function timestamp_from_date(date: GLib.Date): number;
    function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth | null, year: GLib.DateYear): number;
    function timestamp_to_date(timestamp: number): GLib.Date;
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
    function utils_parse_negation(val: string): [boolean, string];
    function utils_parse_noexpand(val: string): [boolean, string];
    function utils_parse_wildcard(val: string): [boolean, string];
    function utils_is_empty_string(s?: string | null): boolean;
    function utils_log_may_read_directly(): boolean;
    function result_type_is_sort_order_asc(result_type: ResultType | null): boolean;
    function register_mimetype(mimetype: string, interpretation_uri: string): void;
    function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void;
    function interpretation_for_mimetype(mimetype?: string | null): string | null;
    function register_uri_scheme(uri_scheme: string, manifestation_type: string): void;
    function manifestation_for_uri(uri: string): string | null;
    namespace DataSourceRegistry {
        // Signal signatures
        interface SignalSignatures extends QueuedProxyWrapper.SignalSignatures {
            'source-disconnected': (arg0: DataSource) => void;
            'source-enabled': (arg0: string, arg1: boolean) => void;
            'source-registered': (arg0: DataSource) => void;
            'notify::proxy-created': (pspec: GObject.ParamSpec) => void;
            'notify::is-connected': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends QueuedProxyWrapper.ConstructorProps {}
    }

    class DataSourceRegistry extends QueuedProxyWrapper {
        static $gtype: GObject.GType<DataSourceRegistry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataSourceRegistry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataSourceRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DataSourceRegistry;

        // Signals

        connect<K extends keyof DataSourceRegistry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataSourceRegistry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DataSourceRegistry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataSourceRegistry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DataSourceRegistry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataSourceRegistry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_data_sources(cancellable?: Gio.Cancellable | null): globalThis.Promise<DataSource[]>;
        get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        get_data_sources(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DataSource[]> | void;
        get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[];
        get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<DataSource>;
        get_data_source_from_id(
            unique_id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DataSource> | void;
        get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource;
        register_data_source(
            data_source: DataSource,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        register_data_source(
            data_source: DataSource,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        register_data_source(
            data_source: DataSource,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        register_data_source_finish(_res_: Gio.AsyncResult): boolean;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<void>;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
    }

    namespace Index {
        // Signal signatures
        interface SignalSignatures extends QueuedProxyWrapper.SignalSignatures {
            'notify::proxy-created': (pspec: GObject.ParamSpec) => void;
            'notify::is-connected': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends QueuedProxyWrapper.ConstructorProps {}
    }

    class Index extends QueuedProxyWrapper {
        static $gtype: GObject.GType<Index>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Index.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Index.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Index;

        // Signals

        connect<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Index.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Index.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Index.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        search(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            offset: number,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<ResultSet>;
        search(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            offset: number,
            num_events: number,
            result_type: ResultType | null,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            offset: number,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ResultSet> | void;
        search_finish(_res_: Gio.AsyncResult): ResultSet;
        search_with_relevancies(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            offset: number,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[ResultSet, number[]]>;
        search_with_relevancies(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            offset: number,
            num_events: number,
            result_type: ResultType | null,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search_with_relevancies(
            query: string,
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            offset: number,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[ResultSet, number[]]> | void;
        search_with_relevancies_finish(_res_: Gio.AsyncResult): [ResultSet, number[]];
    }

    namespace Log {
        // Signal signatures
        interface SignalSignatures extends QueuedProxyWrapper.SignalSignatures {
            'notify::proxy-created': (pspec: GObject.ParamSpec) => void;
            'notify::is-connected': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends QueuedProxyWrapper.ConstructorProps {}
    }

    class Log extends QueuedProxyWrapper {
        static $gtype: GObject.GType<Log>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Log.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Log.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Log;

        // Signals

        connect<K extends keyof Log.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Log.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Log.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Log.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): Log;

        // Methods

        insert_event(event: Event, cancellable?: Gio.Cancellable | null): globalThis.Promise<number[]>;
        insert_event(
            event: Event,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        insert_event(
            event: Event,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number[]> | void;
        insert_event_finish(_res_: Gio.AsyncResult): number[];
        insert_events(events: Event[], cancellable?: Gio.Cancellable | null): globalThis.Promise<number[]>;
        insert_events(
            events: Event[],
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        insert_events(
            events: Event[],
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number[]> | void;
        insert_events_finish(_res_: Gio.AsyncResult): number[];
        insert_event_no_reply(event: Event): void;
        insert_events_no_reply(events: Event[]): void;
        find_events(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<ResultSet>;
        find_events(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: ResultType | null,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_events(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ResultSet> | void;
        find_events_finish(_res_: Gio.AsyncResult): ResultSet;
        find_event_ids(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number[]>;
        find_event_ids(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: ResultType | null,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_event_ids(
            time_range: TimeRange,
            event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: ResultType | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number[]> | void;
        find_event_ids_finish(_res_: Gio.AsyncResult): number[];
        get_events(event_ids: number[], cancellable?: Gio.Cancellable | null): globalThis.Promise<ResultSet>;
        get_events(
            event_ids: number[],
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ResultSet> | void;
        get_events_finish(_res_: Gio.AsyncResult): ResultSet;
        find_related_uris(
            time_range: TimeRange,
            event_templates: Event[],
            result_event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: RelevantResultType | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string[]>;
        find_related_uris(
            time_range: TimeRange,
            event_templates: Event[],
            result_event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: RelevantResultType | null,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_related_uris(
            time_range: TimeRange,
            event_templates: Event[],
            result_event_templates: Event[],
            storage_state: StorageState | null,
            num_events: number,
            result_type: RelevantResultType | null,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        find_related_uris_finish(_res_: Gio.AsyncResult): string[];
        delete_events(event_ids: number[], cancellable?: Gio.Cancellable | null): globalThis.Promise<TimeRange>;
        delete_events(
            event_ids: number[],
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<TimeRange> | void;
        delete_events_finish(_res_: Gio.AsyncResult): TimeRange;
        quit(cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        quit(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        quit_finish(_res_: Gio.AsyncResult): void;
        install_monitor(monitor: Monitor): void;
        remove_monitor(monitor: Monitor): void;
        get_version(): [number, number, number];
        get_extensions(): string[];
        datapath(): string;
    }

    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'events-inserted': (arg0: TimeRange, arg1: ResultSet) => void;
            'events-deleted': (arg0: TimeRange, arg1: number[]) => void;
            'notify::time-range': (pspec: GObject.ParamSpec) => void;
            'notify::event-templates': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, RemoteMonitor.ConstructorProps {
            time_range: TimeRange;
            timeRange: TimeRange;
            event_templates: Event[];
            eventTemplates: Event[];
        }
    }

    class Monitor extends GObject.Object implements RemoteMonitor {
        static $gtype: GObject.GType<Monitor>;

        // Properties

        get time_range(): TimeRange;
        set time_range(val: TimeRange);
        get timeRange(): TimeRange;
        set timeRange(val: TimeRange);
        get event_templates(): Event[];
        set event_templates(val: Event[]);
        get eventTemplates(): Event[];
        set eventTemplates(val: Event[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Monitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](time_range: TimeRange, event_templates: Event[]): Monitor;

        // Signals

        connect<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Monitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_templates(): Event[];
        get_path(): never;
        get_time_range(): TimeRange;
        set_time_range(value: TimeRange): void;
        get_event_templates(): Event[];
        set_event_templates(value: Event[]): void;

        // Inherited methods
        notify_insert(time_range: GLib.Variant, events: GLib.Variant): globalThis.Promise<void>;
        notify_insert(
            time_range: GLib.Variant,
            events: GLib.Variant,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        notify_insert(
            time_range: GLib.Variant,
            events: GLib.Variant,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        notify_insert_finish(_res_: Gio.AsyncResult): void;
        notify_delete(time_range: GLib.Variant, event_ids: number[]): globalThis.Promise<void>;
        notify_delete(
            time_range: GLib.Variant,
            event_ids: number[],
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        notify_delete(
            time_range: GLib.Variant,
            event_ids: number[],
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        notify_delete_finish(_res_: Gio.AsyncResult): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace QueuedProxyWrapper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::proxy-created': (pspec: GObject.ParamSpec) => void;
            'notify::is-connected': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            proxy_created: boolean;
            proxyCreated: boolean;
            is_connected: boolean;
            isConnected: boolean;
        }
    }

    abstract class QueuedProxyWrapper extends GObject.Object {
        static $gtype: GObject.GType<QueuedProxyWrapper>;

        // Properties

        get proxy_created(): boolean;
        set proxy_created(val: boolean);
        get proxyCreated(): boolean;
        set proxyCreated(val: boolean);
        get is_connected(): boolean;
        set is_connected(val: boolean);
        get isConnected(): boolean;
        set isConnected(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: QueuedProxyWrapper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<QueuedProxyWrapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof QueuedProxyWrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QueuedProxyWrapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof QueuedProxyWrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QueuedProxyWrapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof QueuedProxyWrapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<QueuedProxyWrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_on_connection_established(): void;
        vfunc_on_connection_lost(): void;

        // Methods

        proxy_acquired(proxy: GObject.Object): void;
        proxy_unavailable(err: Gio.IOErrorEnum | null): void;
        process_queued_methods(): void;
        name_owner_changed(pspec: GObject.ParamSpec): void;
        on_connection_established(): void;
        on_connection_lost(): void;
        wait_for_proxy(): globalThis.Promise<void>;
        wait_for_proxy(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        wait_for_proxy(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        wait_for_proxy_finish(_res_: Gio.AsyncResult): void;
        get_proxy_created(): boolean;
        get_is_connected(): boolean;
    }

    namespace QueuedProxyWrapperQueuedMethod {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    class QueuedProxyWrapperQueuedMethod {
        static $gtype: GObject.GType<QueuedProxyWrapperQueuedMethod>;

        // Fields

        ref_count: number;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod;

        // Signals

        connect<K extends keyof QueuedProxyWrapperQueuedMethod.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QueuedProxyWrapperQueuedMethod.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof QueuedProxyWrapperQueuedMethod.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, QueuedProxyWrapperQueuedMethod.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof QueuedProxyWrapperQueuedMethod.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<QueuedProxyWrapperQueuedMethod.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_queued_method(): [GLib.SourceFunc, any];
    }

    namespace DataSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::unique-id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::event-templates': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::running': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            unique_id: string;
            uniqueId: string;
            name: string;
            description: string;
            event_templates: Event[];
            eventTemplates: Event[];
            enabled: boolean;
            running: boolean;
            timestamp: number;
        }
    }

    class DataSource extends GObject.Object {
        static $gtype: GObject.GType<DataSource>;

        // Properties

        get unique_id(): string;
        set unique_id(val: string);
        get uniqueId(): string;
        set uniqueId(val: string);
        get name(): string;
        set name(val: string);
        get description(): string;
        set description(val: string);
        get event_templates(): Event[];
        set event_templates(val: Event[]);
        get eventTemplates(): Event[];
        set eventTemplates(val: Event[]);
        get enabled(): boolean;
        set enabled(val: boolean);
        get running(): boolean;
        set running(val: boolean);
        get timestamp(): number;
        set timestamp(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DataSource;

        static full(unique_id: string, name: string, description: string, templates?: Event[] | null): DataSource;

        static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource;

        // Signals

        connect<K extends keyof DataSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DataSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DataSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::actor': (pspec: GObject.ParamSpec) => void;
            'notify::interpretation': (pspec: GObject.ParamSpec) => void;
            'notify::manifestation': (pspec: GObject.ParamSpec) => void;
            'notify::subjects': (pspec: GObject.ParamSpec) => void;
            'notify::payload': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
            timestamp: number;
            origin: string;
            actor: string;
            interpretation: string;
            manifestation: string;
            subjects: Subject[];
            payload: GLib.ByteArray;
        }
    }

    class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Properties

        get id(): number;
        set id(val: number);
        get timestamp(): number;
        set timestamp(val: number);
        get origin(): string;
        set origin(val: string);
        get actor(): string;
        set actor(val: string);
        get interpretation(): string;
        set interpretation(val: string);
        get manifestation(): string;
        set manifestation(val: string);
        get subjects(): Subject[];
        set subjects(val: Subject[]);
        get payload(): GLib.ByteArray;
        set payload(val: GLib.ByteArray);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Event.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Event.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static from_variant(event_variant: GLib.Variant): Event;

        static ['new'](): Event;

        // Signals

        connect<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Event.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace Subject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::storage': (pspec: GObject.ParamSpec) => void;
            'notify::current-uri': (pspec: GObject.ParamSpec) => void;
            'notify::current-origin': (pspec: GObject.ParamSpec) => void;
            'notify::mimetype': (pspec: GObject.ParamSpec) => void;
            'notify::interpretation': (pspec: GObject.ParamSpec) => void;
            'notify::manifestation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    class Subject extends GObject.Object {
        static $gtype: GObject.GType<Subject>;

        // Properties

        get uri(): string;
        set uri(val: string);
        get origin(): string;
        set origin(val: string);
        get text(): string;
        set text(val: string);
        get storage(): string;
        set storage(val: string);
        get current_uri(): string;
        set current_uri(val: string);
        get currentUri(): string;
        set currentUri(val: string);
        get current_origin(): string;
        set current_origin(val: string);
        get currentOrigin(): string;
        set currentOrigin(val: string);
        get mimetype(): string;
        set mimetype(val: string);
        get interpretation(): string;
        set interpretation(val: string);
        get manifestation(): string;
        set manifestation(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Subject.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Subject.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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

        // Signals

        connect<K extends keyof Subject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Subject.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Subject.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Subject.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Subject.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Subject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace TimeRange {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::start': (pspec: GObject.ParamSpec) => void;
            'notify::end': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            start: number;
            end: number;
        }
    }

    class TimeRange extends GObject.Object {
        static $gtype: GObject.GType<TimeRange>;

        // Properties

        get start(): number;
        set start(val: number);
        get end(): number;
        set end(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TimeRange.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TimeRange.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](start_msec: number, end_msec: number): TimeRange;

        static anytime(): TimeRange;

        static to_now(): TimeRange;

        static from_now(): TimeRange;

        static from_variant(variant: GLib.Variant): TimeRange;

        // Signals

        connect<K extends keyof TimeRange.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TimeRange.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TimeRange.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TimeRange.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TimeRange.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TimeRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        to_variant(): GLib.Variant;
        intersect(time_range: TimeRange): TimeRange | null;
        get_start(): number;
        get_end(): number;
    }

    namespace SimpleResultSet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, ResultSet.ConstructorProps {}
    }

    class SimpleResultSet extends GObject.Object implements ResultSet {
        static $gtype: GObject.GType<SimpleResultSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SimpleResultSet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SimpleResultSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](events: Event[]): SimpleResultSet;

        static with_num_matches(events: Event[], matches: number): SimpleResultSet;

        // Signals

        connect<K extends keyof SimpleResultSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleResultSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SimpleResultSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SimpleResultSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SimpleResultSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SimpleResultSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        size(): number;
        estimated_matches(): number;
        next_value(): Event | null;
        has_next(): boolean;
        tell(): number;
        reset(): void;
        iterator(): ResultSet;
        vfunc_size(): number;
        vfunc_estimated_matches(): number;
        vfunc_next_value(): Event | null;
        vfunc_has_next(): boolean;
        vfunc_tell(): number;
        vfunc_reset(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    type DataSourceRegistryClass = typeof DataSourceRegistry;
    abstract class DataSourceRegistryPrivate {
        static $gtype: GObject.GType<DataSourceRegistryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type IndexClass = typeof Index;
    abstract class IndexPrivate {
        static $gtype: GObject.GType<IndexPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type LogClass = typeof Log;
    abstract class LogPrivate {
        static $gtype: GObject.GType<LogPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MonitorClass = typeof Monitor;
    abstract class MonitorPrivate {
        static $gtype: GObject.GType<MonitorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type QueuedProxyWrapperClass = typeof QueuedProxyWrapper;
    abstract class QueuedProxyWrapperPrivate {
        static $gtype: GObject.GType<QueuedProxyWrapperPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type QueuedProxyWrapperQueuedMethodClass = typeof QueuedProxyWrapperQueuedMethod;
    abstract class QueuedProxyWrapperQueuedMethodPrivate {
        static $gtype: GObject.GType<QueuedProxyWrapperQueuedMethodPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DataSourceClass = typeof DataSource;
    abstract class DataSourcePrivate {
        static $gtype: GObject.GType<DataSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EventClass = typeof Event;
    abstract class EventPrivate {
        static $gtype: GObject.GType<EventPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SubjectClass = typeof Subject;
    abstract class SubjectPrivate {
        static $gtype: GObject.GType<SubjectPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TimeRangeClass = typeof TimeRange;
    abstract class TimeRangePrivate {
        static $gtype: GObject.GType<TimeRangePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SimpleResultSetClass = typeof SimpleResultSet;
    abstract class SimpleResultSetPrivate {
        static $gtype: GObject.GType<SimpleResultSetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RemoteRegistryIface = typeof RemoteRegistry;
    type RemoteLogIface = typeof RemoteLog;
    type RemoteMonitorIface = typeof RemoteMonitor;
    type RemoteSimpleIndexerIface = typeof RemoteSimpleIndexer;
    type NetworkManagerDBusIface = typeof NetworkManagerDBus;
    type ConnmanManagerDBusIface = typeof ConnmanManagerDBus;
    type ResultSetIface = typeof ResultSet;
    class VersionStruct {
        static $gtype: GObject.GType<VersionStruct>;

        // Fields

        major: number;
        minor: number;
        micro: number;

        // Constructors

        constructor(
            properties?: Partial<{
                major: number;
                minor: number;
                micro: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    namespace RemoteRegistry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteRegistryNamespace {
        $gtype: GObject.GType<RemoteRegistry>;
        prototype: RemoteRegistry;
    }
    interface RemoteRegistry extends GObject.Object {
        // Methods

        get_data_sources(cancellable?: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;
        get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        get_data_sources(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant> | void;
        get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;
        register_data_source(
            unique_id: string,
            name: string,
            description: string,
            event_templates: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<boolean>;
        register_data_source(
            unique_id: string,
            name: string,
            description: string,
            event_templates: GLib.Variant,
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        register_data_source(
            unique_id: string,
            name: string,
            description: string,
            event_templates: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        register_data_source_finish(_res_: Gio.AsyncResult): boolean;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<void>;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_data_source_enabled(
            unique_id: string,
            enabled: boolean,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
        get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Variant>;
        get_data_source_from_id(
            unique_id: string,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_data_source_from_id(
            unique_id: string,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant> | void;
        get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;

        // Virtual methods

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
            sender?: never | null,
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

    export const RemoteRegistry: RemoteRegistryNamespace & {
        new (): RemoteRegistry; // This allows `obj instanceof RemoteRegistry`
    };

    namespace RemoteLog {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteLogNamespace {
        $gtype: GObject.GType<RemoteLog>;
        prototype: RemoteLog;
    }
    interface RemoteLog extends GObject.Object {
        // Methods

        delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<GLib.Variant>;
        delete_events(
            event_ids: number[],
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant> | void;
        delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        find_event_ids(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<number[]>;
        find_event_ids(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_event_ids(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number[]> | void;
        find_event_ids_finish(_res_: Gio.AsyncResult): number[];
        find_events(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<GLib.Variant>;
        find_events(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_events(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant> | void;
        find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        find_related_uris(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            result_event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<string[]>;
        find_related_uris(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            result_event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        find_related_uris(
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            result_event_templates: GLib.Variant,
            storage_state: number,
            num_events: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        find_related_uris_finish(_res_: Gio.AsyncResult): string[];
        get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<GLib.Variant>;
        get_events(
            event_ids: number[],
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Variant> | void;
        get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        insert_events(
            events: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
        ): globalThis.Promise<number[]>;
        insert_events(
            events: GLib.Variant,
            cancellable: Gio.Cancellable | null,
            sender: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        insert_events(
            events: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number[]> | void;
        insert_events_finish(_res_: Gio.AsyncResult): number[];
        install_monitor(
            monitor_path: never,
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            owner?: never | null,
        ): globalThis.Promise<void>;
        install_monitor(
            monitor_path: never,
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            owner: never | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        install_monitor(
            monitor_path: never,
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            owner?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        install_monitor_finish(_res_: Gio.AsyncResult): void;
        remove_monitor(monitor_path: never, owner?: never | null): globalThis.Promise<void>;
        remove_monitor(monitor_path: never, owner: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        remove_monitor(
            monitor_path: never,
            owner?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        remove_monitor_finish(_res_: Gio.AsyncResult): void;
        quit(cancellable?: Gio.Cancellable | null): globalThis.Promise<void>;
        quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        quit(
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        quit_finish(_res_: Gio.AsyncResult): void;
        get_extensions(): string[];
        get_version(): VersionStruct;
        get_datapath(): string;

        // Virtual methods

        vfunc_delete_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
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
            sender?: never | null,
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
            sender?: never | null,
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
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[];
        vfunc_get_events(
            event_ids: number[],
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;
        vfunc_insert_events(
            events: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            sender?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[];
        vfunc_install_monitor(
            monitor_path: never,
            time_range: GLib.Variant,
            event_templates: GLib.Variant,
            owner?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void;
        vfunc_remove_monitor(
            monitor_path: never,
            owner?: never | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void;
        vfunc_quit(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_quit_finish(_res_: Gio.AsyncResult): void;
        vfunc_get_extensions(): string[];
        vfunc_get_version(): VersionStruct;
        vfunc_get_datapath(): string;
    }

    export const RemoteLog: RemoteLogNamespace & {
        new (): RemoteLog; // This allows `obj instanceof RemoteLog`
    };

    namespace RemoteMonitor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteMonitorNamespace {
        $gtype: GObject.GType<RemoteMonitor>;
        prototype: RemoteMonitor;
    }
    interface RemoteMonitor extends GObject.Object {
        // Methods

        notify_insert(time_range: GLib.Variant, events: GLib.Variant): globalThis.Promise<void>;
        notify_insert(
            time_range: GLib.Variant,
            events: GLib.Variant,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        notify_insert(
            time_range: GLib.Variant,
            events: GLib.Variant,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        notify_insert_finish(_res_: Gio.AsyncResult): void;
        notify_delete(time_range: GLib.Variant, event_ids: number[]): globalThis.Promise<void>;
        notify_delete(
            time_range: GLib.Variant,
            event_ids: number[],
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        notify_delete(
            time_range: GLib.Variant,
            event_ids: number[],
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<void> | void;
        notify_delete_finish(_res_: Gio.AsyncResult): void;

        // Virtual methods

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

    export const RemoteMonitor: RemoteMonitorNamespace & {
        new (): RemoteMonitor; // This allows `obj instanceof RemoteMonitor`
    };

    namespace RemoteSimpleIndexer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteSimpleIndexerNamespace {
        $gtype: GObject.GType<RemoteSimpleIndexer>;
        prototype: RemoteSimpleIndexer;
    }
    interface RemoteSimpleIndexer extends GObject.Object {
        // Methods

        search(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[void, GLib.Variant, number]>;
        search(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            offset: number,
            count: number,
            result_type: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
        search(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[void, GLib.Variant, number]> | void;
        search_finish(_res_: Gio.AsyncResult): [GLib.Variant, number];
        search_with_relevancies(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            storage_state: number,
            offset: number,
            count: number,
            result_type: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[void, GLib.Variant, number[], number]>;
        search_with_relevancies(
            query_string: string,
            time_range: GLib.Variant,
            filter_templates: GLib.Variant,
            storage_state: number,
            offset: number,
            count: number,
            result_type: number,
            cancellable: Gio.Cancellable | null,
            _callback_: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<[void, GLib.Variant, number[], number]> | void;
        search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant, number[], number];

        // Virtual methods

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
        vfunc_search_finish(_res_: Gio.AsyncResult): [GLib.Variant, number];
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
        vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant, number[], number];
    }

    export const RemoteSimpleIndexer: RemoteSimpleIndexerNamespace & {
        new (): RemoteSimpleIndexer; // This allows `obj instanceof RemoteSimpleIndexer`
    };

    namespace NetworkManagerDBus {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface NetworkManagerDBusNamespace {
        $gtype: GObject.GType<NetworkManagerDBus>;
        prototype: NetworkManagerDBus;
    }
    interface NetworkManagerDBus extends GObject.Object {
        // Methods

        state(): number;

        // Virtual methods

        vfunc_state(): number;
    }

    export const NetworkManagerDBus: NetworkManagerDBusNamespace & {
        new (): NetworkManagerDBus; // This allows `obj instanceof NetworkManagerDBus`
    };

    namespace ConnmanManagerDBus {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConnmanManagerDBusNamespace {
        $gtype: GObject.GType<ConnmanManagerDBus>;
        prototype: ConnmanManagerDBus;
    }
    interface ConnmanManagerDBus extends GObject.Object {
        // Methods

        get_state(): string;

        // Virtual methods

        vfunc_get_state(): string;
    }

    export const ConnmanManagerDBus: ConnmanManagerDBusNamespace & {
        new (): ConnmanManagerDBus; // This allows `obj instanceof ConnmanManagerDBus`
    };

    namespace ResultSet {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ResultSetNamespace {
        $gtype: GObject.GType<ResultSet>;
        prototype: ResultSet;
    }
    interface ResultSet extends GObject.Object {
        // Methods

        size(): number;
        estimated_matches(): number;
        next_value(): Event | null;
        has_next(): boolean;
        tell(): number;
        reset(): void;
        iterator(): ResultSet;

        // Virtual methods

        vfunc_size(): number;
        vfunc_estimated_matches(): number;
        vfunc_next_value(): Event | null;
        vfunc_has_next(): boolean;
        vfunc_tell(): number;
        vfunc_reset(): void;
    }

    export const ResultSet: ResultSetNamespace & {
        new (): ResultSet; // This allows `obj instanceof ResultSet`
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

export default Zeitgeist;

// END
