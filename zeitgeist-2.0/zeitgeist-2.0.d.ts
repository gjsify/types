
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


    /**
     * @gir-type Enum
     */
    export namespace ResultType {
        export const $gtype: GObject.GType<ResultType>;
    }

    /**
     * @gir-type Enum
     */
    enum ResultType {
        MOST_RECENT_EVENTS = 0,
        LEAST_RECENT_EVENTS = 1,
        MOST_RECENT_SUBJECTS = 2,
        LEAST_RECENT_SUBJECTS = 3,
        MOST_POPULAR_SUBJECTS = 4,
        LEAST_POPULAR_SUBJECTS = 5,
        MOST_POPULAR_ACTOR = 6,
        LEAST_POPULAR_ACTOR = 7,
        MOST_RECENT_ACTOR = 8,
        LEAST_RECENT_ACTOR = 9,
        MOST_RECENT_ORIGIN = 10,
        LEAST_RECENT_ORIGIN = 11,
        MOST_POPULAR_ORIGIN = 12,
        LEAST_POPULAR_ORIGIN = 13,
        OLDEST_ACTOR = 14,
        MOST_RECENT_SUBJECT_INTERPRETATION = 15,
        LEAST_RECENT_SUBJECT_INTERPRETATION = 16,
        MOST_POPULAR_SUBJECT_INTERPRETATION = 17,
        LEAST_POPULAR_SUBJECT_INTERPRETATION = 18,
        MOST_RECENT_MIMETYPE = 19,
        LEAST_RECENT_MIMETYPE = 20,
        MOST_POPULAR_MIMETYPE = 21,
        LEAST_POPULAR_MIMETYPE = 22,
        MOST_RECENT_CURRENT_URI = 23,
        LEAST_RECENT_CURRENT_URI = 24,
        MOST_POPULAR_CURRENT_URI = 25,
        LEAST_POPULAR_CURRENT_URI = 26,
        MOST_RECENT_EVENT_ORIGIN = 27,
        LEAST_RECENT_EVENT_ORIGIN = 28,
        MOST_POPULAR_EVENT_ORIGIN = 29,
        LEAST_POPULAR_EVENT_ORIGIN = 30,
        MOST_RECENT_CURRENT_ORIGIN = 31,
        LEAST_RECENT_CURRENT_ORIGIN = 32,
        MOST_POPULAR_CURRENT_ORIGIN = 33,
        LEAST_POPULAR_CURRENT_ORIGIN = 34,
        RELEVANCY = 100,
    }


    /**
     * @gir-type Enum
     */
    export namespace RelevantResultType {
        export const $gtype: GObject.GType<RelevantResultType>;
    }

    /**
     * @gir-type Enum
     */
    enum RelevantResultType {
        RECENT = 0,
        RELATED = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace StorageState {
        export const $gtype: GObject.GType<StorageState>;
    }

    /**
     * @gir-type Enum
     */
    enum StorageState {
        NOT_AVAILABLE = 0,
        AVAILABLE = 1,
        ANY = 2,
    }


    /**
     * @gir-type Struct
     */
    class EngineError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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
    }


    /**
     * @gir-type Struct
     */
    class DataModelError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static INVALID_SIGNATURE: number;

        static NULL_EVENT: number;

        static TOO_MANY_RESULTS: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @default (null)
     */
    const DataSourcesSIG_DATASOURCES: string;

    /**
     * @default 1000
     */
    const TimestampSECOND: number;

    /**
     * @default 60000
     */
    const TimestampMINUTE: number;

    /**
     * @default 3600000
     */
    const TimestampHOUR: number;

    /**
     * @default 86400000
     */
    const TimestampDAY: number;

    /**
     * @default 604800000
     */
    const TimestampWEEK: number;

    /**
     * @default 31556952000
     */
    const TimestampYEAR: number;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Alarm
     */
    const NCALALARM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Attachment
     */
    const NCALATTACHMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Calendar
     */
    const NCALCALENDAR: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#CalendarDataObject
     */
    const NCALCALENDAR_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Event
     */
    const NCALEVENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Freebusy
     */
    const NCALFREEBUSY: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Journal
     */
    const NCALJOURNAL: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Timezone
     */
    const NCALTIMEZONE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/04/02/ncal#Todo
     */
    const NCALTODO: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nco#Contact
     */
    const NCOCONTACT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nco#ContactGroup
     */
    const NCOCONTACT_GROUP: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nco#ContactList
     */
    const NCOCONTACT_LIST: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nco#ContactListDataObject
     */
    const NCOCONTACT_LIST_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nco#OrganizationContact
     */
    const NCOORGANIZATION_CONTACT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nco#PersonContact
     */
    const NCOPERSON_CONTACT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Application
     */
    const NFOAPPLICATION: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Archive
     */
    const NFOARCHIVE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#ArchiveItem
     */
    const NFOARCHIVE_ITEM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Attachment
     */
    const NFOATTACHMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Audio
     */
    const NFOAUDIO: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Bookmark
     */
    const NFOBOOKMARK: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#BookmarkFolder
     */
    const NFOBOOKMARK_FOLDER: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Cursor
     */
    const NFOCURSOR: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#DataContainer
     */
    const NFODATA_CONTAINER: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#DeletedResource
     */
    const NFODELETED_RESOURCE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Document
     */
    const NFODOCUMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#EmbeddedFileDataObject
     */
    const NFOEMBEDDED_FILE_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Executable
     */
    const NFOEXECUTABLE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Filesystem
     */
    const NFOFILESYSTEM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#FilesystemImage
     */
    const NFOFILESYSTEM_IMAGE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#FileDataObject
     */
    const NFOFILE_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Folder
     */
    const NFOFOLDER: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Font
     */
    const NFOFONT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#HardDiskPartition
     */
    const NFOHARD_DISK_PARTITION: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#HtmlDocument
     */
    const NFOHTML_DOCUMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Icon
     */
    const NFOICON: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Image
     */
    const NFOIMAGE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Media
     */
    const NFOMEDIA: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#MediaList
     */
    const NFOMEDIA_LIST: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#MediaStream
     */
    const NFOMEDIA_STREAM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#MindMap
     */
    const NFOMIND_MAP: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#OperatingSystem
     */
    const NFOOPERATING_SYSTEM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#PaginatedTextDocument
     */
    const NFOPAGINATED_TEXT_DOCUMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#PlainTextDocument
     */
    const NFOPLAIN_TEXT_DOCUMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Presentation
     */
    const NFOPRESENTATION: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#RasterImage
     */
    const NFORASTER_IMAGE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#RemoteDataObject
     */
    const NFOREMOTE_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#RemotePortAddress
     */
    const NFOREMOTE_PORT_ADDRESS: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Software
     */
    const NFOSOFTWARE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#SoftwareItem
     */
    const NFOSOFTWARE_ITEM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#SoftwareService
     */
    const NFOSOFTWARE_SERVICE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#SourceCode
     */
    const NFOSOURCE_CODE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Spreadsheet
     */
    const NFOSPREADSHEET: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#TextDocument
     */
    const NFOTEXT_DOCUMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Trash
     */
    const NFOTRASH: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#VectorImage
     */
    const NFOVECTOR_IMAGE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Video
     */
    const NFOVIDEO: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Visual
     */
    const NFOVISUAL: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#Website
     */
    const NFOWEBSITE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#WebDataObject
     */
    const NFOWEB_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/01/19/nie#DataObject
     */
    const NIEDATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/01/19/nie#InformationElement
     */
    const NIEINFORMATION_ELEMENT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2009/02/19/nmm#Movie
     */
    const NMMMOVIE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2009/02/19/nmm#MusicAlbum
     */
    const NMMMUSIC_ALBUM: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2009/02/19/nmm#MusicPiece
     */
    const NMMMUSIC_PIECE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2009/02/19/nmm#TVSeries
     */
    const NMMTVSERIES: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2009/02/19/nmm#TVShow
     */
    const NMMTVSHOW: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#Email
     */
    const NMOEMAIL: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#IMMessage
     */
    const NMOIMMESSAGE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#Mailbox
     */
    const NMOMAILBOX: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#MailboxDataObject
     */
    const NMOMAILBOX_DATA_OBJECT: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#Message
     */
    const NMOMESSAGE: string;

    /**
     * @default http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#MimeEntity
     */
    const NMOMIME_ENTITY: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#AcceptEvent
     */
    const ZGACCEPT_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#AccessEvent
     */
    const ZGACCESS_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#ApplicationAction
     */
    const ZGAPPLICATION_ACTION: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#CreateEvent
     */
    const ZGCREATE_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#DeleteEvent
     */
    const ZGDELETE_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#DenyEvent
     */
    const ZGDENY_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#EventInterpretation
     */
    const ZGEVENT_INTERPRETATION: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#EventManifestation
     */
    const ZGEVENT_MANIFESTATION: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#ExpireEvent
     */
    const ZGEXPIRE_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#HeuristicActivity
     */
    const ZGHEURISTIC_ACTIVITY: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#LeaveEvent
     */
    const ZGLEAVE_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#ModifyEvent
     */
    const ZGMODIFY_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#MoveEvent
     */
    const ZGMOVE_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#ReceiveEvent
     */
    const ZGRECEIVE_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#ScheduledActivity
     */
    const ZGSCHEDULED_ACTIVITY: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#SendEvent
     */
    const ZGSEND_EVENT: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#SystemNotification
     */
    const ZGSYSTEM_NOTIFICATION: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#UserActivity
     */
    const ZGUSER_ACTIVITY: string;

    /**
     * @default http://www.zeitgeist-project.com/ontologies/2010/01/27/zg#WorldActivity
     */
    const ZGWORLD_ACTIVITY: string;

    /**
     * @default org.gnome.zeitgeist.Engine
     */
    const UtilsENGINE_DBUS_NAME: string;

    /**
     * @default /org/gnome/zeitgeist/log/activity
     */
    const UtilsENGINE_DBUS_PATH: string;

    /**
     * @default asaasay
     */
    const UtilsSIG_EVENT: string;

    /**
     * @default (null)
     */
    const UtilsMAX_DBUS_RESULT_SIZE: number;

    /**
     * @default 0
     */
    const UtilsCACHE_SIZE: number;

    /**
     * @param sources_variant 
     * @throws GLib.Error
     */
    function data_sources_from_variant(sources_variant: GLib.Variant): DataSource[];

    /**
     * @param sources 
     */
    function data_sources_to_variant(sources: { [key: string]: DataSource }): GLib.Variant;

    /**
     * @param vevents 
     * @throws GLib.Error
     */
    function events_from_variant(vevents: GLib.Variant): Event[];

    /**
     * @param events 
     */
    function events_to_variant(events: Event[]): GLib.Variant;

    /**
     * @param events 
     * @param limit 
     * @throws GLib.Error
     */
    function events_to_variant_with_limit(events: Event[], limit: bigint | number): GLib.Variant;

    /**
     * @param timeval 
     */
    function timestamp_from_timeval(timeval: GLib.TimeVal): number;

    /**
     * @param timestamp 
     */
    function timestamp_to_timeval(timestamp: bigint | number): GLib.TimeVal;

    function timestamp_from_now(): number;

    /**
     * @param datetime 
     */
    function timestamp_from_iso8601(datetime: string): number;

    /**
     * @param timestamp 
     */
    function timestamp_to_iso8601(timestamp: bigint | number): string;

    /**
     * @param date 
     */
    function timestamp_from_date(date: GLib.Date): number;

    /**
     * @param day 
     * @param month 
     * @param year 
     */
    function timestamp_from_dmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number;

    /**
     * @param timestamp 
     */
    function timestamp_to_date(timestamp: bigint | number): GLib.Date;

    /**
     * @param timestamp 
     */
    function timestamp_next_midnight(timestamp: bigint | number): number;

    /**
     * @param timestamp 
     */
    function timestamp_prev_midnight(timestamp: bigint | number): number;

    /**
     * @param symbol_uri 
     */
    function symbol_get_display_name(symbol_uri: string): string;

    /**
     * @param symbol_uri 
     */
    function symbol_get_description(symbol_uri: string): string;

    /**
     * @param symbol_uri 
     */
    function symbol_get_all_parents(symbol_uri: string): string[];

    /**
     * @param symbol_uri 
     */
    function symbol_get_all_children(symbol_uri: string): string[];

    /**
     * @param symbol_uri 
     */
    function symbol_get_children(symbol_uri: string): string[];

    /**
     * @param symbol_uri 
     */
    function symbol_get_parents(symbol_uri: string): string[];

    /**
     * @param symbol_uri 
     * @param parent_uri 
     */
    function symbol_is_a(symbol_uri: string | null, parent_uri: string | null): boolean;

    function utils_get_data_path(): string;

    function utils_get_default_data_path(): string;

    function utils_get_database_file_path(): string;

    /**
     * @param path 
     */
    function utils_set_database_file_path(path: string): void;

    function utils_get_database_file_backup_path(): string;

    function utils_get_database_file_retire_name(): string;

    function utils_get_local_extensions_path(): string;

    function utils_using_in_memory_database(): boolean;

    /**
     * @throws GLib.Error
     */
    function utils_backup_database(): void;

    /**
     * @param val 
     */
    function utils_parse_negation(val: string): [boolean, string];

    /**
     * @param val 
     */
    function utils_parse_noexpand(val: string): [boolean, string];

    /**
     * @param val 
     */
    function utils_parse_wildcard(val: string): [boolean, string];

    /**
     * @param s 
     */
    function utils_is_empty_string(s: string | null): boolean;

    function utils_log_may_read_directly(): boolean;

    /**
     * @param result_type 
     */
    function result_type_is_sort_order_asc(result_type: ResultType): boolean;

    /**
     * @param mimetype 
     * @param interpretation_uri 
     */
    function register_mimetype(mimetype: string, interpretation_uri: string): void;

    /**
     * @param mimetype_regex 
     * @param interpretation_uri 
     */
    function register_mimetype_regex(mimetype_regex: string, interpretation_uri: string): void;

    /**
     * @param mimetype 
     */
    function interpretation_for_mimetype(mimetype: string | null): string | null;

    /**
     * @param uri_scheme 
     * @param manifestation_type 
     */
    function register_uri_scheme(uri_scheme: string, manifestation_type: string): void;

    /**
     * @param uri 
     */
    function manifestation_for_uri(uri: string): string | null;

    namespace DataSourceRegistry {
        // Signal signatures
        interface SignalSignatures extends QueuedProxyWrapper.SignalSignatures {
            /**
             * @signal
             */
            "source-disconnected": (data_source: DataSource) => void;
            /**
             * @signal
             */
            "source-enabled": (unique_id: string, enabled: boolean) => void;
            /**
             * @signal
             */
            "source-registered": (data_source: DataSource) => void;
            "notify::proxy-created": (pspec: GObject.ParamSpec) => void;
            "notify::is-connected": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends QueuedProxyWrapper.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](): DataSourceRegistry;

        // Signals
        /** @signal */
        connect<K extends keyof DataSourceRegistry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataSourceRegistry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataSourceRegistry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataSourceRegistry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataSourceRegistry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataSourceRegistry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param cancellable 
         */
        get_data_sources(cancellable: Gio.Cancellable | null): globalThis.Promise<DataSource[]>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_sources(cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<DataSource[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        get_data_sources_finish(_res_: Gio.AsyncResult): DataSource[];

        /**
         * @param unique_id 
         * @param cancellable 
         */
        get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<DataSource>;

        /**
         * @param unique_id 
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param unique_id 
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<DataSource> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        get_data_source_from_id_finish(_res_: Gio.AsyncResult): DataSource;

        /**
         * @param data_source 
         * @param cancellable 
         */
        register_data_source(data_source: DataSource, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * @param data_source 
         * @param cancellable 
         * @param _callback_ 
         */
        register_data_source(data_source: DataSource, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param data_source 
         * @param cancellable 
         * @param _callback_ 
         */
        register_data_source(data_source: DataSource, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        register_data_source_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param unique_id 
         * @param enabled 
         * @param cancellable 
         */
        set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * @param unique_id 
         * @param enabled 
         * @param cancellable 
         * @param _callback_ 
         */
        set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param unique_id 
         * @param enabled 
         * @param cancellable 
         * @param _callback_ 
         */
        set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;
    }


    namespace Index {
        // Signal signatures
        interface SignalSignatures extends QueuedProxyWrapper.SignalSignatures {
            "notify::proxy-created": (pspec: GObject.ParamSpec) => void;
            "notify::is-connected": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends QueuedProxyWrapper.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](): Index;

        // Signals
        /** @signal */
        connect<K extends keyof Index.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Index.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Index.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Index.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Index.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param query 
         * @param time_range 
         * @param event_templates 
         * @param offset 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         */
        search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null): globalThis.Promise<ResultSet>;

        /**
         * @param query 
         * @param time_range 
         * @param event_templates 
         * @param offset 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param query 
         * @param time_range 
         * @param event_templates 
         * @param offset 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search(query: string, time_range: TimeRange, event_templates: Event[], offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ResultSet> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        search_finish(_res_: Gio.AsyncResult): ResultSet;

        /**
         * @param query 
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param offset 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         */
        search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null): globalThis.Promise<[ResultSet, number[]]>;

        /**
         * @param query 
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param offset 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param query 
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param offset 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search_with_relevancies(query: string, time_range: TimeRange, event_templates: Event[], storage_state: StorageState, offset: number, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[ResultSet, number[]]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        search_with_relevancies_finish(_res_: Gio.AsyncResult): [ResultSet, number[]];
    }


    namespace Log {
        // Signal signatures
        interface SignalSignatures extends QueuedProxyWrapper.SignalSignatures {
            "notify::proxy-created": (pspec: GObject.ParamSpec) => void;
            "notify::is-connected": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends QueuedProxyWrapper.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](): Log;

        // Signals
        /** @signal */
        connect<K extends keyof Log.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Log.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Log.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Log.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static get_default(): Log;

        // Methods
        /**
         * @param event 
         * @param cancellable 
         */
        insert_event(event: Event, cancellable: Gio.Cancellable | null): globalThis.Promise<number[]>;

        /**
         * @param event 
         * @param cancellable 
         * @param _callback_ 
         */
        insert_event(event: Event, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param event 
         * @param cancellable 
         * @param _callback_ 
         */
        insert_event(event: Event, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        insert_event_finish(_res_: Gio.AsyncResult): number[];

        /**
         * @param events 
         * @param cancellable 
         */
        insert_events(events: Event[], cancellable: Gio.Cancellable | null): globalThis.Promise<number[]>;

        /**
         * @param events 
         * @param cancellable 
         * @param _callback_ 
         */
        insert_events(events: Event[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param events 
         * @param cancellable 
         * @param _callback_ 
         */
        insert_events(events: Event[], cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        insert_events_finish(_res_: Gio.AsyncResult): number[];

        /**
         * @param event 
         * @throws GLib.Error
         */
        insert_event_no_reply(event: Event): void;

        /**
         * @param events 
         * @throws GLib.Error
         */
        insert_events_no_reply(events: Event[]): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         */
        find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null): globalThis.Promise<ResultSet>;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        find_events(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ResultSet> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        find_events_finish(_res_: Gio.AsyncResult): ResultSet;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         */
        find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null): globalThis.Promise<number[]>;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        find_event_ids(time_range: TimeRange, event_templates: Event[], storage_state: StorageState, num_events: number, result_type: ResultType, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        find_event_ids_finish(_res_: Gio.AsyncResult): number[];

        /**
         * @param event_ids 
         * @param cancellable 
         */
        get_events(event_ids: number[], cancellable: Gio.Cancellable | null): globalThis.Promise<ResultSet>;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param _callback_ 
         */
        get_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param _callback_ 
         */
        get_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ResultSet> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        get_events_finish(_res_: Gio.AsyncResult): ResultSet;

        /**
         * @param time_range 
         * @param event_templates 
         * @param result_event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         */
        find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>;

        /**
         * @param time_range 
         * @param event_templates 
         * @param result_event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param result_event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        find_related_uris(time_range: TimeRange, event_templates: Event[], result_event_templates: Event[], storage_state: StorageState, num_events: number, result_type: RelevantResultType, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        find_related_uris_finish(_res_: Gio.AsyncResult): string[];

        /**
         * @param event_ids 
         * @param cancellable 
         */
        delete_events(event_ids: number[], cancellable: Gio.Cancellable | null): globalThis.Promise<TimeRange>;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param _callback_ 
         */
        delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param _callback_ 
         */
        delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<TimeRange> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        delete_events_finish(_res_: Gio.AsyncResult): TimeRange;

        /**
         * @param cancellable 
         */
        quit(cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        quit(cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        quit_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param monitor 
         * @throws GLib.Error
         */
        install_monitor(monitor: Monitor): void;

        /**
         * @param monitor 
         * @throws GLib.Error
         */
        remove_monitor(monitor: Monitor): void;

        get_version(): [number, number, number];

        get_extensions(): string[];

        datapath(): string;
    }


    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "events-inserted": (time_range: TimeRange, events: ResultSet) => void;
            /**
             * @signal
             */
            "events-deleted": (time_range: TimeRange, event_ids: number[]) => void;
            "notify::time-range": (pspec: GObject.ParamSpec) => void;
            "notify::event-templates": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, RemoteMonitor.ConstructorProps {
            time_range: TimeRange;
            timeRange: TimeRange;
            event_templates: Event[];
            eventTemplates: Event[];
        }
    }

    /**
     * @gir-type Class
     */
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

        static ["new"](time_range: TimeRange, event_templates: Event[]): Monitor;

        // Signals
        /** @signal */
        connect<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Monitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_templates(): Event[];

        get_path(): never;

        get_time_range(): TimeRange;

        /**
         * @param value 
         */
        set_time_range(value: TimeRange): void;

        get_event_templates(): Event[];

        /**
         * @param value 
         */
        set_event_templates(value: Event[]): void;

        /**
         * @param time_range 
         * @param events 
         */
        notify_insert(time_range: GLib.Variant, events: GLib.Variant): globalThis.Promise<void>;

        /**
         * @param time_range 
         * @param events 
         * @param _callback_ 
         */
        notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param events 
         * @param _callback_ 
         */
        notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        notify_insert_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param time_range 
         * @param event_ids 
         */
        notify_delete(time_range: GLib.Variant, event_ids: number[]): globalThis.Promise<void>;

        /**
         * @param time_range 
         * @param event_ids 
         * @param _callback_ 
         */
        notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_ids 
         * @param _callback_ 
         */
        notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        notify_delete_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param time_range 
         * @param events 
         * @param _callback_ 
         * @virtual
         */
        vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param time_range 
         * @param event_ids 
         * @param _callback_ 
         * @virtual
         */
        vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void;
    }


    namespace QueuedProxyWrapper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::proxy-created": (pspec: GObject.ParamSpec) => void;
            "notify::is-connected": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            proxy_created: boolean;
            proxyCreated: boolean;
            is_connected: boolean;
            isConnected: boolean;
        }
    }

    /**
     * @gir-type Class
     */
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
        /** @signal */
        connect<K extends keyof QueuedProxyWrapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, QueuedProxyWrapper.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof QueuedProxyWrapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, QueuedProxyWrapper.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof QueuedProxyWrapper.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<QueuedProxyWrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_on_connection_established(): void;

        /**
         * @virtual
         */
        vfunc_on_connection_lost(): void;

        // Methods
        /**
         * @param proxy 
         */
        proxy_acquired(proxy: GObject.Object): void;

        /**
         * @param err 
         */
        proxy_unavailable(err: Gio.IOErrorEnum): void;

        process_queued_methods(): void;

        /**
         * @param pspec 
         */
        name_owner_changed(pspec: GObject.ParamSpec): void;

        on_connection_established(): void;

        on_connection_lost(): void;

        wait_for_proxy(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        wait_for_proxy(_callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param _callback_ 
         */
        wait_for_proxy(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        wait_for_proxy_finish(_res_: Gio.AsyncResult): void;

        get_proxy_created(): boolean;

        get_is_connected(): boolean;
    }


    namespace QueuedProxyWrapperQueuedMethod {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class QueuedProxyWrapperQueuedMethod {
        static $gtype: GObject.GType<QueuedProxyWrapperQueuedMethod>;

        // Fields
        ref_count: number;

        // Constructors
        _init(...args: any[]): void;

        static ["new"](callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod;

        // Signals
        /** @signal */
        connect<K extends keyof QueuedProxyWrapperQueuedMethod.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, QueuedProxyWrapperQueuedMethod.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof QueuedProxyWrapperQueuedMethod.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, QueuedProxyWrapperQueuedMethod.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof QueuedProxyWrapperQueuedMethod.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<QueuedProxyWrapperQueuedMethod.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_queued_method(): [GLib.SourceFunc, null];
    }


    namespace DataSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::unique-id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::event-templates": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
            "notify::running": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            unique_id: string;
            uniqueId: string;
            name: string;
            description: string;
            event_templates: Event[] | null;
            eventTemplates: Event[];
            enabled: boolean;
            running: boolean;
            timestamp: bigint | number;
        }
    }

    /**
     * @gir-type Class
     */
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

        get event_templates(): Event[] | null;
        set event_templates(val: Event[] | null);

        get eventTemplates(): Event[];
        set eventTemplates(val: Event[]);

        get enabled(): boolean;
        set enabled(val: boolean);

        get running(): boolean;
        set running(val: boolean);

        get timestamp(): number;
        set timestamp(val: bigint | number);

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

        static ["new"](): DataSource;

        static full(unique_id: string, name: string, description: string, templates: Event[] | null): DataSource;

        static from_variant(variant: GLib.Variant, reset_running: boolean): DataSource;

        // Signals
        /** @signal */
        connect<K extends keyof DataSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        to_variant(): GLib.Variant;

        get_unique_id(): string;

        /**
         * @param value 
         */
        set_unique_id(value: string): void;

        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_description(): string;

        /**
         * @param value 
         */
        set_description(value: string): void;

        get_event_templates(): Event[] | null;

        /**
         * @param value 
         */
        set_event_templates(value: Event[] | null): void;

        get_enabled(): boolean;

        /**
         * @param value 
         */
        set_enabled(value: boolean): void;

        get_running(): boolean;

        /**
         * @param value 
         */
        set_running(value: boolean): void;

        get_timestamp(): number;

        /**
         * @param value 
         */
        set_timestamp(value: bigint | number): void;
    }


    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
            "notify::origin": (pspec: GObject.ParamSpec) => void;
            "notify::actor": (pspec: GObject.ParamSpec) => void;
            "notify::interpretation": (pspec: GObject.ParamSpec) => void;
            "notify::manifestation": (pspec: GObject.ParamSpec) => void;
            "notify::subjects": (pspec: GObject.ParamSpec) => void;
            "notify::payload": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: number;
            timestamp: bigint | number;
            origin: string | null;
            actor: string | null;
            interpretation: string | null;
            manifestation: string | null;
            subjects: Subject[];
            payload: GLib.ByteArray | null;
        }
    }

    /**
     * @gir-type Class
     */
    class Event extends GObject.Object {
        static $gtype: GObject.GType<Event>;

        // Properties
        get id(): number;
        set id(val: number);

        get timestamp(): number;
        set timestamp(val: bigint | number);

        get origin(): string | null;
        set origin(val: string | null);

        get actor(): string | null;
        set actor(val: string | null);

        get interpretation(): string | null;
        set interpretation(val: string | null);

        get manifestation(): string | null;
        set manifestation(val: string | null);

        get subjects(): Subject[];
        set subjects(val: Subject[]);

        get payload(): GLib.ByteArray | null;
        set payload(val: GLib.ByteArray | null);

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

        static ["new"](): Event;

        // Signals
        /** @signal */
        connect<K extends keyof Event.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Event.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Event.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param index 
         */
        get_subject(index: number): Subject;

        num_subjects(): number;

        /**
         * @param subject 
         */
        add_subject(subject: Subject): void;

        /**
         * @param subject 
         */
        take_subject(subject: Subject): void;

        /**
         * @param info 
         */
        set_actor_from_app_info(info: Gio.AppInfo): void;

        to_variant(): GLib.Variant;

        debug_print(): void;

        /**
         * @param template_event 
         */
        matches_template(template_event: Event): boolean;

        get_id(): number;

        /**
         * @param value 
         */
        set_id(value: number): void;

        get_timestamp(): number;

        /**
         * @param value 
         */
        set_timestamp(value: bigint | number): void;

        get_origin(): string | null;

        /**
         * @param value 
         */
        set_origin(value: string | null): void;

        get_actor(): string | null;

        /**
         * @param value 
         */
        set_actor(value: string | null): void;

        get_interpretation(): string | null;

        /**
         * @param value 
         */
        set_interpretation(value: string | null): void;

        get_manifestation(): string | null;

        /**
         * @param value 
         */
        set_manifestation(value: string | null): void;

        get_subjects(): Subject[];

        /**
         * @param value 
         */
        set_subjects(value: Subject[]): void;

        get_payload(): GLib.ByteArray | null;

        /**
         * @param value 
         */
        set_payload(value: GLib.ByteArray | null): void;
    }


    namespace Subject {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::origin": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::storage": (pspec: GObject.ParamSpec) => void;
            "notify::current-uri": (pspec: GObject.ParamSpec) => void;
            "notify::current-origin": (pspec: GObject.ParamSpec) => void;
            "notify::mimetype": (pspec: GObject.ParamSpec) => void;
            "notify::interpretation": (pspec: GObject.ParamSpec) => void;
            "notify::manifestation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string | null;
            origin: string | null;
            text: string | null;
            storage: string | null;
            current_uri: string | null;
            currentUri: string;
            current_origin: string | null;
            currentOrigin: string;
            mimetype: string | null;
            interpretation: string | null;
            manifestation: string | null;
        }
    }

    /**
     * @gir-type Class
     */
    class Subject extends GObject.Object {
        static $gtype: GObject.GType<Subject>;

        // Properties
        get uri(): string | null;
        set uri(val: string | null);

        get origin(): string | null;
        set origin(val: string | null);

        get text(): string | null;
        set text(val: string | null);

        get storage(): string | null;
        set storage(val: string | null);

        get current_uri(): string | null;
        set current_uri(val: string | null);

        get currentUri(): string;
        set currentUri(val: string);

        get current_origin(): string | null;
        set current_origin(val: string | null);

        get currentOrigin(): string;
        set currentOrigin(val: string);

        get mimetype(): string | null;
        set mimetype(val: string | null);

        get interpretation(): string | null;
        set interpretation(val: string | null);

        get manifestation(): string | null;
        set manifestation(val: string | null);

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

        static full(uri: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, origin: string | null, text: string | null, storage: string | null): Subject;

        static move_event(source_uri: string | null, source_origin: string | null, destination_uri: string | null, destination_origin: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, text: string | null, storage: string | null): Subject;

        static from_variant(subject_variant: GLib.Variant): Subject;

        static ["new"](): Subject;

        // Signals
        /** @signal */
        connect<K extends keyof Subject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Subject.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Subject.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Subject.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Subject.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Subject.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        to_variant(): GLib.Variant;

        /**
         * @param template_subject 
         */
        matches_template(template_subject: Subject): boolean;

        get_uri(): string | null;

        /**
         * @param value 
         */
        set_uri(value: string | null): void;

        get_origin(): string | null;

        /**
         * @param value 
         */
        set_origin(value: string | null): void;

        get_text(): string | null;

        /**
         * @param value 
         */
        set_text(value: string | null): void;

        get_storage(): string | null;

        /**
         * @param value 
         */
        set_storage(value: string | null): void;

        get_current_uri(): string | null;

        /**
         * @param value 
         */
        set_current_uri(value: string | null): void;

        get_current_origin(): string | null;

        /**
         * @param value 
         */
        set_current_origin(value: string | null): void;

        get_mimetype(): string | null;

        /**
         * @param value 
         */
        set_mimetype(value: string | null): void;

        get_interpretation(): string | null;

        /**
         * @param value 
         */
        set_interpretation(value: string | null): void;

        get_manifestation(): string | null;

        /**
         * @param value 
         */
        set_manifestation(value: string | null): void;
    }


    namespace TimeRange {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::start": (pspec: GObject.ParamSpec) => void;
            "notify::end": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            start: bigint | number;
            end: bigint | number;
        }
    }

    /**
     * @gir-type Class
     */
    class TimeRange extends GObject.Object {
        static $gtype: GObject.GType<TimeRange>;

        // Properties
        get start(): number;
        set start(val: bigint | number);

        get end(): number;
        set end(val: bigint | number);

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

        static ["new"](start_msec: bigint | number, end_msec: bigint | number): TimeRange;

        static anytime(): TimeRange;

        static to_now(): TimeRange;

        static from_now(): TimeRange;

        static from_variant(variant: GLib.Variant): TimeRange;

        // Signals
        /** @signal */
        connect<K extends keyof TimeRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimeRange.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TimeRange.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimeRange.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TimeRange.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TimeRange.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        to_variant(): GLib.Variant;

        /**
         * @param time_range 
         */
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

    /**
     * @gir-type Class
     */
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

        static ["new"](events: Event[]): SimpleResultSet;

        static with_num_matches(events: Event[], matches: number): SimpleResultSet;

        // Signals
        /** @signal */
        connect<K extends keyof SimpleResultSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleResultSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SimpleResultSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SimpleResultSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SimpleResultSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SimpleResultSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        size(): number;

        estimated_matches(): number;

        next_value(): Event | null;

        has_next(): boolean;

        tell(): number;

        reset(): void;

        iterator(): ResultSet;

        /**
         * @virtual
         */
        vfunc_size(): number;

        /**
         * @virtual
         */
        vfunc_estimated_matches(): number;

        /**
         * @virtual
         */
        vfunc_next_value(): Event | null;

        /**
         * @virtual
         */
        vfunc_has_next(): boolean;

        /**
         * @virtual
         */
        vfunc_tell(): number;

        /**
         * @virtual
         */
        vfunc_reset(): void;
    }


    /**
     * @gir-type Alias
     */
    type DataSourceRegistryClass = typeof DataSourceRegistry;

    /**
     * @gir-type Struct
     */
    abstract class DataSourceRegistryPrivate {
        static $gtype: GObject.GType<DataSourceRegistryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type IndexClass = typeof Index;

    /**
     * @gir-type Struct
     */
    abstract class IndexPrivate {
        static $gtype: GObject.GType<IndexPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LogClass = typeof Log;

    /**
     * @gir-type Struct
     */
    abstract class LogPrivate {
        static $gtype: GObject.GType<LogPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MonitorClass = typeof Monitor;

    /**
     * @gir-type Struct
     */
    abstract class MonitorPrivate {
        static $gtype: GObject.GType<MonitorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type QueuedProxyWrapperClass = typeof QueuedProxyWrapper;

    /**
     * @gir-type Struct
     */
    abstract class QueuedProxyWrapperPrivate {
        static $gtype: GObject.GType<QueuedProxyWrapperPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type QueuedProxyWrapperQueuedMethodClass = typeof QueuedProxyWrapperQueuedMethod;

    /**
     * @gir-type Struct
     */
    abstract class QueuedProxyWrapperQueuedMethodPrivate {
        static $gtype: GObject.GType<QueuedProxyWrapperQueuedMethodPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataSourceClass = typeof DataSource;

    /**
     * @gir-type Struct
     */
    abstract class DataSourcePrivate {
        static $gtype: GObject.GType<DataSourcePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EventClass = typeof Event;

    /**
     * @gir-type Struct
     */
    abstract class EventPrivate {
        static $gtype: GObject.GType<EventPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SubjectClass = typeof Subject;

    /**
     * @gir-type Struct
     */
    abstract class SubjectPrivate {
        static $gtype: GObject.GType<SubjectPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TimeRangeClass = typeof TimeRange;

    /**
     * @gir-type Struct
     */
    abstract class TimeRangePrivate {
        static $gtype: GObject.GType<TimeRangePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SimpleResultSetClass = typeof SimpleResultSet;

    /**
     * @gir-type Struct
     */
    abstract class SimpleResultSetPrivate {
        static $gtype: GObject.GType<SimpleResultSetPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RemoteRegistryIface = typeof RemoteRegistry;

    /**
     * @gir-type Alias
     */
    type RemoteLogIface = typeof RemoteLog;

    /**
     * @gir-type Alias
     */
    type RemoteMonitorIface = typeof RemoteMonitor;

    /**
     * @gir-type Alias
     */
    type RemoteSimpleIndexerIface = typeof RemoteSimpleIndexer;

    /**
     * @gir-type Alias
     */
    type NetworkManagerDBusIface = typeof NetworkManagerDBus;

    /**
     * @gir-type Alias
     */
    type ConnmanManagerDBusIface = typeof ConnmanManagerDBus;

    /**
     * @gir-type Alias
     */
    type ResultSetIface = typeof ResultSet;

    /**
     * @gir-type Struct
     */
    class VersionStruct {
        static $gtype: GObject.GType<VersionStruct>;

        // Fields
        major: number;

        minor: number;

        micro: number;

        // Constructors

        constructor(properties?: Partial<{
            major: number;
            minor: number;
            micro: number;
        }>);
    }


    namespace RemoteRegistry {
        // Signal signatures
        interface SignalSignatures {
            /**
             * @signal
             */
            "data-source-disconnected": (data_source: GLib.Variant) => void;
            /**
             * @signal
             */
            "data-source-enabled": (unique_id: string, enabled: boolean) => void;
            /**
             * @signal
             */
            "data-source-registered": (data_source: GLib.Variant) => void;
        }
        /**
         * Interface for implementing RemoteRegistry.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param cancellable 
             * @param _callback_ 
             * @virtual
             */
            vfunc_get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;

            /**
             * @param unique_id 
             * @param name 
             * @param description 
             * @param event_templates 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_register_data_source_finish(_res_: Gio.AsyncResult): boolean;

            /**
             * @param unique_id 
             * @param enabled 
             * @param cancellable 
             * @param _callback_ 
             * @virtual
             */
            vfunc_set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;

            /**
             * @param unique_id 
             * @param cancellable 
             * @param _callback_ 
             * @virtual
             */
            vfunc_get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteRegistryNamespace {
        $gtype: GObject.GType<RemoteRegistry>;
        prototype: RemoteRegistry;
    }
    /**
     * @gir-type Interface
     */
    interface RemoteRegistry extends GObject.Object, RemoteRegistry.Interface {

        // Methods
        /**
         * @param cancellable 
         */
        get_data_sources(cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_sources(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_sources(cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        get_data_sources_finish(_res_: Gio.AsyncResult): GLib.Variant;

        /**
         * @param unique_id 
         * @param name 
         * @param description 
         * @param event_templates 
         * @param cancellable 
         * @param sender 
         */
        register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<boolean>;

        /**
         * @param unique_id 
         * @param name 
         * @param description 
         * @param event_templates 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param unique_id 
         * @param name 
         * @param description 
         * @param event_templates 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        register_data_source(unique_id: string, name: string, description: string, event_templates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        register_data_source_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param unique_id 
         * @param enabled 
         * @param cancellable 
         */
        set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * @param unique_id 
         * @param enabled 
         * @param cancellable 
         * @param _callback_ 
         */
        set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param unique_id 
         * @param enabled 
         * @param cancellable 
         * @param _callback_ 
         */
        set_data_source_enabled(unique_id: string, enabled: boolean, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        set_data_source_enabled_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param unique_id 
         * @param cancellable 
         */
        get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;

        /**
         * @param unique_id 
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param unique_id 
         * @param cancellable 
         * @param _callback_ 
         */
        get_data_source_from_id(unique_id: string, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        get_data_source_from_id_finish(_res_: Gio.AsyncResult): GLib.Variant;
    }


    export const RemoteRegistry: RemoteRegistryNamespace & {
        new (): RemoteRegistry; // This allows `obj instanceof RemoteRegistry`
    };

    namespace RemoteLog {
        /**
         * Interface for implementing RemoteLog.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param event_ids 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

            /**
             * @param time_range 
             * @param event_templates 
             * @param storage_state 
             * @param num_events 
             * @param result_type 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_find_event_ids_finish(_res_: Gio.AsyncResult): number[];

            /**
             * @param time_range 
             * @param event_templates 
             * @param storage_state 
             * @param num_events 
             * @param result_type 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

            /**
             * @param time_range 
             * @param event_templates 
             * @param result_event_templates 
             * @param storage_state 
             * @param num_events 
             * @param result_type 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_find_related_uris_finish(_res_: Gio.AsyncResult): string[];

            /**
             * @param event_ids 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_get_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

            /**
             * @param events 
             * @param cancellable 
             * @param sender 
             * @param _callback_ 
             * @virtual
             */
            vfunc_insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_insert_events_finish(_res_: Gio.AsyncResult): number[];

            /**
             * @param monitor_path 
             * @param time_range 
             * @param event_templates 
             * @param owner 
             * @param _callback_ 
             * @virtual
             */
            vfunc_install_monitor(monitor_path: never, time_range: GLib.Variant, event_templates: GLib.Variant, owner: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_install_monitor_finish(_res_: Gio.AsyncResult): void;

            /**
             * @param monitor_path 
             * @param owner 
             * @param _callback_ 
             * @virtual
             */
            vfunc_remove_monitor(monitor_path: never, owner: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_remove_monitor_finish(_res_: Gio.AsyncResult): void;

            /**
             * @param cancellable 
             * @param _callback_ 
             * @virtual
             */
            vfunc_quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_quit_finish(_res_: Gio.AsyncResult): void;

            /**
             * @virtual
             */
            vfunc_get_extensions(): string[];

            /**
             * @virtual
             */
            vfunc_get_version(): VersionStruct;

            /**
             * @virtual
             */
            vfunc_get_datapath(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteLogNamespace {
        $gtype: GObject.GType<RemoteLog>;
        prototype: RemoteLog;
    }
    /**
     * @gir-type Interface
     */
    interface RemoteLog extends GObject.Object, RemoteLog.Interface {

        // Methods
        /**
         * @param event_ids 
         * @param cancellable 
         * @param sender 
         */
        delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<GLib.Variant>;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        delete_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        delete_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         */
        find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<number[]>;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        find_event_ids(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        find_event_ids_finish(_res_: Gio.AsyncResult): number[];

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         */
        find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<GLib.Variant>;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        find_events(time_range: GLib.Variant, event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        find_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

        /**
         * @param time_range 
         * @param event_templates 
         * @param result_event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         */
        find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<string[]>;

        /**
         * @param time_range 
         * @param event_templates 
         * @param result_event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_templates 
         * @param result_event_templates 
         * @param storage_state 
         * @param num_events 
         * @param result_type 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        find_related_uris(time_range: GLib.Variant, event_templates: GLib.Variant, result_event_templates: GLib.Variant, storage_state: number, num_events: number, result_type: number, cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        find_related_uris_finish(_res_: Gio.AsyncResult): string[];

        /**
         * @param event_ids 
         * @param cancellable 
         * @param sender 
         */
        get_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<GLib.Variant>;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        get_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param event_ids 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        get_events(event_ids: number[], cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        get_events_finish(_res_: Gio.AsyncResult): GLib.Variant;

        /**
         * @param events 
         * @param cancellable 
         * @param sender 
         */
        insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null): globalThis.Promise<number[]>;

        /**
         * @param events 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param events 
         * @param cancellable 
         * @param sender 
         * @param _callback_ 
         */
        insert_events(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number[]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        insert_events_finish(_res_: Gio.AsyncResult): number[];

        /**
         * @param monitor_path 
         * @param time_range 
         * @param event_templates 
         * @param owner 
         */
        install_monitor(monitor_path: never, time_range: GLib.Variant, event_templates: GLib.Variant, owner: never | null): globalThis.Promise<void>;

        /**
         * @param monitor_path 
         * @param time_range 
         * @param event_templates 
         * @param owner 
         * @param _callback_ 
         */
        install_monitor(monitor_path: never, time_range: GLib.Variant, event_templates: GLib.Variant, owner: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param monitor_path 
         * @param time_range 
         * @param event_templates 
         * @param owner 
         * @param _callback_ 
         */
        install_monitor(monitor_path: never, time_range: GLib.Variant, event_templates: GLib.Variant, owner: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        install_monitor_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param monitor_path 
         * @param owner 
         */
        remove_monitor(monitor_path: never, owner: never | null): globalThis.Promise<void>;

        /**
         * @param monitor_path 
         * @param owner 
         * @param _callback_ 
         */
        remove_monitor(monitor_path: never, owner: never | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param monitor_path 
         * @param owner 
         * @param _callback_ 
         */
        remove_monitor(monitor_path: never, owner: never | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        remove_monitor_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param cancellable 
         */
        quit(cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        quit(cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param cancellable 
         * @param _callback_ 
         */
        quit(cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        quit_finish(_res_: Gio.AsyncResult): void;

        get_extensions(): string[];

        get_version(): VersionStruct;

        get_datapath(): string;
    }


    export const RemoteLog: RemoteLogNamespace & {
        new (): RemoteLog; // This allows `obj instanceof RemoteLog`
    };

    namespace RemoteMonitor {
        /**
         * Interface for implementing RemoteMonitor.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param time_range 
             * @param events 
             * @param _callback_ 
             * @virtual
             */
            vfunc_notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_notify_insert_finish(_res_: Gio.AsyncResult): void;

            /**
             * @param time_range 
             * @param event_ids 
             * @param _callback_ 
             * @virtual
             */
            vfunc_notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_notify_delete_finish(_res_: Gio.AsyncResult): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteMonitorNamespace {
        $gtype: GObject.GType<RemoteMonitor>;
        prototype: RemoteMonitor;
    }
    /**
     * @gir-type Interface
     */
    interface RemoteMonitor extends GObject.Object, RemoteMonitor.Interface {

        // Methods
        /**
         * @param time_range 
         * @param events 
         */
        notify_insert(time_range: GLib.Variant, events: GLib.Variant): globalThis.Promise<void>;

        /**
         * @param time_range 
         * @param events 
         * @param _callback_ 
         */
        notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param events 
         * @param _callback_ 
         */
        notify_insert(time_range: GLib.Variant, events: GLib.Variant, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        notify_insert_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param time_range 
         * @param event_ids 
         */
        notify_delete(time_range: GLib.Variant, event_ids: number[]): globalThis.Promise<void>;

        /**
         * @param time_range 
         * @param event_ids 
         * @param _callback_ 
         */
        notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param time_range 
         * @param event_ids 
         * @param _callback_ 
         */
        notify_delete(time_range: GLib.Variant, event_ids: number[], _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        notify_delete_finish(_res_: Gio.AsyncResult): void;
    }


    export const RemoteMonitor: RemoteMonitorNamespace & {
        new (): RemoteMonitor; // This allows `obj instanceof RemoteMonitor`
    };

    namespace RemoteSimpleIndexer {
        /**
         * Interface for implementing RemoteSimpleIndexer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param query_string 
             * @param time_range 
             * @param filter_templates 
             * @param offset 
             * @param count 
             * @param result_type 
             * @param cancellable 
             * @param _callback_ 
             * @virtual
             */
            vfunc_search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_search_finish(_res_: Gio.AsyncResult): [GLib.Variant, number];

            /**
             * @param query_string 
             * @param time_range 
             * @param filter_templates 
             * @param storage_state 
             * @param offset 
             * @param count 
             * @param result_type 
             * @param cancellable 
             * @param _callback_ 
             * @virtual
             */
            vfunc_search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

            /**
             * @param _res_ 
             * @virtual
             */
            vfunc_search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant, number[], number];
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RemoteSimpleIndexerNamespace {
        $gtype: GObject.GType<RemoteSimpleIndexer>;
        prototype: RemoteSimpleIndexer;
    }
    /**
     * @gir-type Interface
     */
    interface RemoteSimpleIndexer extends GObject.Object, RemoteSimpleIndexer.Interface {

        // Methods
        /**
         * @param query_string 
         * @param time_range 
         * @param filter_templates 
         * @param offset 
         * @param count 
         * @param result_type 
         * @param cancellable 
         */
        search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[void, GLib.Variant, number]>;

        /**
         * @param query_string 
         * @param time_range 
         * @param filter_templates 
         * @param offset 
         * @param count 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param query_string 
         * @param time_range 
         * @param filter_templates 
         * @param offset 
         * @param count 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[void, GLib.Variant, number]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        search_finish(_res_: Gio.AsyncResult): [GLib.Variant, number];

        /**
         * @param query_string 
         * @param time_range 
         * @param filter_templates 
         * @param storage_state 
         * @param offset 
         * @param count 
         * @param result_type 
         * @param cancellable 
         */
        search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[void, GLib.Variant, number[], number]>;

        /**
         * @param query_string 
         * @param time_range 
         * @param filter_templates 
         * @param storage_state 
         * @param offset 
         * @param count 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * @param query_string 
         * @param time_range 
         * @param filter_templates 
         * @param storage_state 
         * @param offset 
         * @param count 
         * @param result_type 
         * @param cancellable 
         * @param _callback_ 
         */
        search_with_relevancies(query_string: string, time_range: GLib.Variant, filter_templates: GLib.Variant, storage_state: number, offset: number, count: number, result_type: number, cancellable: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[void, GLib.Variant, number[], number]> | void;

        /**
         * @param _res_ 
         * @throws GLib.Error
         */
        search_with_relevancies_finish(_res_: Gio.AsyncResult): [GLib.Variant, number[], number];
    }


    export const RemoteSimpleIndexer: RemoteSimpleIndexerNamespace & {
        new (): RemoteSimpleIndexer; // This allows `obj instanceof RemoteSimpleIndexer`
    };

    namespace NetworkManagerDBus {
        // Signal signatures
        interface SignalSignatures {
            /**
             * @signal
             */
            "state-changed": (state: number) => void;
        }
        /**
         * Interface for implementing NetworkManagerDBus.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_state(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface NetworkManagerDBusNamespace {
        $gtype: GObject.GType<NetworkManagerDBus>;
        prototype: NetworkManagerDBus;
    }
    /**
     * @gir-type Interface
     */
    interface NetworkManagerDBus extends GObject.Object, NetworkManagerDBus.Interface {

        // Methods
        /**
         * @throws GLib.Error
         */
        state(): number;
    }


    export const NetworkManagerDBus: NetworkManagerDBusNamespace & {
        new (): NetworkManagerDBus; // This allows `obj instanceof NetworkManagerDBus`
    };

    namespace ConnmanManagerDBus {
        // Signal signatures
        interface SignalSignatures {
            /**
             * @signal
             */
            "state-changed": (state: string) => void;
        }
        /**
         * Interface for implementing ConnmanManagerDBus.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_get_state(): string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ConnmanManagerDBusNamespace {
        $gtype: GObject.GType<ConnmanManagerDBus>;
        prototype: ConnmanManagerDBus;
    }
    /**
     * @gir-type Interface
     */
    interface ConnmanManagerDBus extends GObject.Object, ConnmanManagerDBus.Interface {

        // Methods
        /**
         * @throws GLib.Error
         */
        get_state(): string;
    }


    export const ConnmanManagerDBus: ConnmanManagerDBusNamespace & {
        new (): ConnmanManagerDBus; // This allows `obj instanceof ConnmanManagerDBus`
    };

    namespace ResultSet {
        /**
         * Interface for implementing ResultSet.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_size(): number;

            /**
             * @virtual
             */
            vfunc_estimated_matches(): number;

            /**
             * @virtual
             */
            vfunc_next_value(): Event | null;

            /**
             * @virtual
             */
            vfunc_has_next(): boolean;

            /**
             * @virtual
             */
            vfunc_tell(): number;

            /**
             * @virtual
             */
            vfunc_reset(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ResultSetNamespace {
        $gtype: GObject.GType<ResultSet>;
        prototype: ResultSet;
    }
    /**
     * @gir-type Interface
     */
    interface ResultSet extends GObject.Object, ResultSet.Interface {

        // Methods
        size(): number;

        estimated_matches(): number;

        next_value(): Event | null;

        has_next(): boolean;

        tell(): number;

        reset(): void;

        iterator(): ResultSet;
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
