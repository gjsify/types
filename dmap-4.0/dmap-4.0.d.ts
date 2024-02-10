/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dmap-4.0-ambient.d.ts';
import './dmap-4.0-import.d.ts';
/**
 * Dmap-4.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gst from '@girs/gst-1.0';

export namespace Dmap {
    /**
     * Enumeration of connection states.
     */
    enum ConnectionState {
        /**
         * getting DMAP server information
         */
        GET_INFO,
        /**
         * logging in to DMAP server
         */
        LOGIN,
        /**
         * getting server's database revision number
         */
        GET_REVISION_NUMBER,
        /**
         * getting DMAP database information
         */
        GET_DB_INFO,
        /**
         * getting DMAP media listing
         */
        GET_MEDIA,
        /**
         * getting DMAP playlists
         */
        GET_PLAYLISTS,
        /**
         * getting entries in playlist
         */
        GET_PLAYLIST_ENTRIES,
        /**
         * logging out of DMAP server
         */
        LOGOUT,
        /**
         * done
         */
        DONE,
    }
    enum ContentCode {
        CC_INVALID,
        RAW,
        CC_MDCL,
        CC_MEDS,
        CC_MSTT,
        CC_MIID,
        CC_MINM,
        CC_MIKD,
        CC_MPER,
        CC_MCON,
        CC_MCTI,
        CC_MPCO,
        CC_MSTS,
        CC_MIMC,
        CC_MCTC,
        CC_MRCO,
        CC_MTCO,
        CC_MLCL,
        CC_MLIT,
        CC_MBCL,
        CC_MSRV,
        CC_MSAU,
        CC_MSLR,
        CC_MPRO,
        CC_MSAL,
        CC_MSUP,
        CC_MSPI,
        CC_MSEX,
        CC_MSBR,
        CC_MSQY,
        CC_MSIX,
        CC_MSRS,
        CC_MSTM,
        CC_MSDC,
        CC_MCCR,
        CC_MCNM,
        CC_MCNA,
        CC_MCTY,
        CC_MLOG,
        CC_MLID,
        CC_MUPD,
        CC_MUSR,
        CC_MUTY,
        CC_MUDL,
        CC_MSMA,
        CC_FQUESCH,
        CC_MDBK,
        CC_APRO,
        CC_AVDB,
        CC_ABRO,
        CC_ABAL,
        CC_ABAR,
        CC_ABCP,
        CC_ABGN,
        CC_ADBS,
        CC_ASAL,
        CC_ASAI,
        CC_ASAA,
        CC_ASAR,
        CC_ASBT,
        CC_ASBR,
        CC_ASCM,
        CC_ASCO,
        CC_ASDA,
        CC_ASDM,
        CC_ASDC,
        CC_ASDN,
        CC_ASDB,
        CC_ASEQ,
        CC_ASFM,
        CC_ASGN,
        CC_ASDT,
        CC_ASRV,
        CC_ASSR,
        CC_ASSZ,
        CC_ASST,
        CC_ASSP,
        CC_ASTM,
        CC_ASTC,
        CC_ASTN,
        CC_ASUR,
        CC_ASYR,
        CC_ASDK,
        CC_ASUL,
        CC_ASSU,
        CC_ASSA,
        CC_APLY,
        CC_ABPL,
        CC_APSO,
        CC_PRSV,
        CC_ARIF,
        CC_MSAS,
        CC_AGRP,
        CC_AGAL,
        CC_ASCP,
        CC_PPRO,
        CC_PASP,
        CC_PFDT,
        CC_PICD,
        CC_PIMF,
        CC_PFMT,
        CC_PIFS,
        CC_PLSZ,
        CC_PHGT,
        CC_PWTH,
        CC_PRAT,
        CC_PCMT,
        CC_PRET,
        CC_AECS,
        CC_AESV,
        CC_AEHV,
        CC_AESP,
        CC_AEPP,
        CC_AEPS,
        CC_AESG,
        CC_AEMK,
        CC_AEMK2,
        CC_AEFP,
        CC_ATED,
        CC_ASGR,
        CC_AEMQ,
        CC_AESL,
        CC_AESR,
        CC_AETR,
        CC_MSED,
        CC_CMPA,
        CC_CMNM,
        CC_CMTY,
        CC_CMPG,
        CC_CACI,
        CC_CAPS,
        CC_CASH,
        CC_CARP,
        CC_CAAS,
        CC_CAAR,
        CC_CAIA,
        CC_CANP,
        CC_CANN,
        CC_CANA,
        CC_CANL,
        CC_CANG,
        CC_CANT,
        CC_CASP,
        CC_CASS,
        CC_CAST,
        CC_CASU,
        CC_CASG,
        CC_CACR,
        CC_CMCP,
        CC_CMGT,
        CC_CMIK,
        CC_CMSP,
        CC_CMST,
        CC_CMSV,
        CC_CMSR,
        CC_CMMK,
        CC_CMVO,
        CC_CMPR,
        CC_CAPR,
        CC_AEFR,
        CC_CAOV,
        CC_CMRL,
        CC_CAHP,
        CC_CAIV,
        CC_CAVC,
    }
    enum ControlPlayState {
        STOPPED,
        PAUSED,
        PLAYING,
    }
    enum ControlRepeatState {
        NONE,
        SINGLE,
        ALL,
    }
    /**
     * Special DmapDb ID values.
     */
    enum DbId {
        /**
         * the value which represents a bad DmapDb ID.
         */
        BAD,
    }
    /**
     * Errors inside the libdmapsharing library.
     */
    class Error extends GLib.Error {
        // Own fields of Dmap-4.0.Error

        OK: number;
        FAILED: number;
        INVALID_CONTENT_CODE: number;
        INVALID_CONTENT_CODE_SIZE: number;
        RESPONSE_TOO_SHORT: number;
        BAD_FORMAT: number;
        BAD_BROWSE_CATEGORY: number;
        RECORD_MISSING_FIELD: number;
        DB_BAD_ID: number;
        OPEN_FAILED: number;
        CLOSE_FAILED: number;
        SEEK_FAILED: number;
        NUM_ERRORS: number;

        // Constructors of Dmap-4.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Dmap-4.0.Error

        static quark(): GLib.Quark;
    }

    class MdnsBrowserError extends GLib.Error {
        // Own fields of Dmap-4.0.MdnsBrowserError

        NOT_RUNNING: number;
        FAILED: number;

        // Constructors of Dmap-4.0.MdnsBrowserError

        constructor(options: { message: string; code: number });

        // Owm methods of Dmap-4.0.MdnsBrowserError

        static quark(): GLib.Quark;
    }

    class MdnsPublisherError extends GLib.Error {
        // Own fields of Dmap-4.0.MdnsPublisherError

        NOT_RUNNING: number;
        FAILED: number;

        // Constructors of Dmap-4.0.MdnsPublisherError

        constructor(options: { message: string; code: number });

        // Owm methods of Dmap-4.0.MdnsPublisherError

        static quark(): GLib.Quark;
    }

    enum MdnsServiceTransportProtocol {
        TCP,
        UDP,
        LAST,
    }
    /**
     * Enum values used to specify the service type.
     */
    enum MdnsServiceType {
        /**
         * an invalid service type
         */
        INVALID,
        /**
         * a DAAP service type
         */
        DAAP,
        /**
         * a DPAP service type
         */
        DPAP,
        /**
         * a DACP service type
         */
        DACP,
        /**
         * a RAOP service type
         */
        RAOP,
        /**
         * an invalid service type
         */
        LAST,
    }
    enum MediaKind {
        MUSIC,
        MOVIE,
        PODCAST,
        TV_SHOW,
    }
    enum ShareAuthMethod {
        NONE,
        NAME_AND_PASSWORD,
        PASSWORD,
    }
    const HASH_SIZE: number;
    /**
     * Compares the two records associated with the provided keys according
     * to album. Suitable to sort lists of albums.
     * @param a first ID.
     * @param b second ID.
     * @param db A DmapDb for which a and b are valid ID's.
     */
    function av_record_cmp_by_album(a: any | null, b: any | null, db: Db): number;
    function error_quark(): GLib.Quark;
    function md5_generate(
        version_major: number,
        url: number,
        hash_select: number,
        out: number,
        request_id: number,
    ): void;
    function md5_progressive_final(context: HashContext, digest: number): void;
    function md5_progressive_init(context: HashContext): void;
    function md5_progressive_to_string(digest: number, string: string): void;
    function md5_progressive_update(context: HashContext, buffer: number, length: number): void;
    function mdns_browser_error_quark(): GLib.Quark;
    function mdns_publisher_error_quark(): GLib.Quark;
    function utils_mime_to_format(transcode_mimetype: string): string;
    interface ConnectionFunc {
        (connection: Connection, result: boolean, reason: string): void;
    }
    interface IdContainerRecordFunc {
        (id: number, record: ContainerRecord): void;
    }
    interface IdRecordFunc {
        (id: number, record: Record): void;
    }
    module AvConnection {
        // Constructor properties interface
    }

    class AvConnection extends Connection {
        // Own fields of Dmap-4.0.AvConnection

        dmap_connection_instance: Connection;

        // Constructors of Dmap-4.0.AvConnection

        static ['new'](name: string, host: string, port: number, db: Db, factory: RecordFactory): AvConnection;
    }

    module AvShare {
        // Constructor properties interface
    }

    class AvShare extends Share {
        // Own fields of Dmap-4.0.AvShare

        dmap_share_instance: Share;

        // Constructors of Dmap-4.0.AvShare

        static ['new'](
            name: string,
            password: string | null,
            db: Db,
            container_db: ContainerDb,
            transcode_mimetype?: string | null,
        ): AvShare;
    }

    module Connection {
        // Signal callback interfaces

        interface Authenticate {
            (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void;
        }

        interface Connected {
            (): void;
        }

        interface Connecting {
            (object: number, p0: number): void;
        }

        interface Disconnected {
            (): void;
        }

        interface Error {
            (object?: any | null): void;
        }

        interface OperationDone {
            (): void;
        }

        // Constructor properties interface
    }

    class Connection extends GObject.Object {
        // Own properties of Dmap-4.0.Connection

        base_uri: GLib.Uri;
        baseUri: GLib.Uri;
        database_id: number;
        databaseId: number;
        db: Db;
        dmap_version: number;
        dmapVersion: number;
        factory: RecordFactory;
        host: string;
        name: string;
        password: string;
        port: number;
        revision_number: number;
        revisionNumber: number;
        session_id: number;
        sessionId: number;
        username: string;

        // Owm methods of Dmap-4.0.Connection

        /**
         * Attach an authentication credential to a request. This
         * method should be called by a function that is connected to the
         * #DmapConnection::authenticate signal. The signal will provide the
         * connection, session, message and auth to that function. That function
         * should obtain a password and provide it to this method.
         * @param session A #SoupSession
         * @param message A #SoupMessage
         * @param auth A #SoupAuth
         * @param password A password
         */
        authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;
        get_headers(uri: string): Soup.MessageHeaders;
        /**
         * Get the playlists associated with a #DmapConnection instance.
         * @returns pointer to a list of playlists.
         */
        get_playlists(): Playlist[];
        /**
         * Returns TRUE if the connection is presently connected.
         */
        is_connected(): boolean;
        /**
         * Connect to the remote DMAP share.
         * @param callback The function to call once the connection is complete.
         */
        start(callback: ConnectionFunc): void;
        /**
         * Disconnect from the remote DMAP share.
         * @param callback The function to call once the connection is complete.
         */
        stop(callback: ConnectionFunc): void;
    }

    module ControlConnection {
        // Constructor properties interface
    }

    class ControlConnection extends Connection {
        // Own fields of Dmap-4.0.ControlConnection

        dmap_connection_instance: Connection;

        // Constructors of Dmap-4.0.ControlConnection

        static ['new'](name: string, host: string, port: number, db: Db, factory: RecordFactory): ControlConnection;
    }

    module ControlShare {
        // Signal callback interfaces

        interface AddGuid {
            (object: string): void;
        }

        interface LookupGuid {
            (object: string): boolean;
        }

        interface RemoteFound {
            (object: string, p0: string): void;
        }

        interface RemoteLost {
            (object: string): void;
        }

        interface RemotePaired {
            (object: string, p0: boolean): void;
        }

        // Constructor properties interface
    }

    class ControlShare extends Share {
        // Own properties of Dmap-4.0.ControlShare

        library_name: string;
        libraryName: string;
        player: GObject.Object;

        // Own fields of Dmap-4.0.ControlShare

        dmap_av_share_instance: AvShare;

        // Constructors of Dmap-4.0.ControlShare

        static ['new'](library_name: string, player: ControlPlayer, db: Db, container_db: ContainerDb): ControlShare;

        // Owm methods of Dmap-4.0.ControlShare

        /**
         * Pairs a DACP client (Remote) with this server. If the passcode is
         * correct (the same as shown on the remote), the remote will start connecting
         * to this server.
         * @param service_name DACP client (remote) service identifier.
         * @param passcode 4-Digit PIN code entered by the user.
         */
        pair(service_name: string, passcode: string): void;
        player_updated(): void;
        /**
         * Start looking up for DACP remotes. Connect to #DmapControlShare::remote-found signal
         * to detect new remotes. Be aware that when a #DmapControlShare is created, only
         * after calling this function is that it starts looking up for Remotes on the
         * network.
         * @returns TRUE on success, else FALSE with error set.
         */
        start_lookup(): boolean;
        /**
         * Stop looking up for DACP remotes.
         */
        stop_lookup(): boolean;
    }

    module ImageConnection {
        // Constructor properties interface
    }

    class ImageConnection extends Connection {
        // Own fields of Dmap-4.0.ImageConnection

        dmap_connection_instance: Connection;

        // Constructors of Dmap-4.0.ImageConnection

        static ['new'](name: string, host: string, port: number, db: Db, factory: RecordFactory): ImageConnection;
    }

    module ImageShare {
        // Constructor properties interface
    }

    class ImageShare extends Share {
        // Own fields of Dmap-4.0.ImageShare

        dmap_share_instance: Share;

        // Constructors of Dmap-4.0.ImageShare

        static ['new'](
            name: string,
            password?: string | null,
            db?: any | null,
            container_db?: any | null,
            transcode_mimetype?: string | null,
        ): ImageShare;
    }

    module MdnsBrowser {
        // Signal callback interfaces

        interface ServiceAdded {
            (service: MdnsService): void;
        }

        interface ServiceRemoved {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class MdnsBrowser extends GObject.Object {
        // Own fields of Dmap-4.0.MdnsBrowser

        object: GObject.Object;

        // Constructors of Dmap-4.0.MdnsBrowser

        static ['new'](type: MdnsServiceType): MdnsBrowser;

        // Owm methods of Dmap-4.0.MdnsBrowser

        get_service_type(): MdnsServiceType;
        get_services(): MdnsService[];
        /**
         * Starts a DmapMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         */
        start(): boolean;
        /**
         * Stops a DmapMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         */
        stop(): boolean;
    }

    module MdnsPublisher {
        // Signal callback interfaces

        interface NameCollision {
            (object: string): void;
        }

        interface Published {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class MdnsPublisher extends GObject.Object {
        // Own fields of Dmap-4.0.MdnsPublisher

        object: GObject.Object;

        // Constructors of Dmap-4.0.MdnsPublisher

        static ['new'](): MdnsPublisher;

        // Owm methods of Dmap-4.0.MdnsPublisher

        publish(
            name: string,
            port: number,
            type_of_service: string,
            password_required: boolean,
            txt_records: string,
        ): boolean;
        rename_at_port(port: number, name: string): boolean;
        withdraw(port: number): boolean;
    }

    module MdnsService {
        // Constructor properties interface
    }

    class MdnsService extends GObject.Object {
        // Own properties of Dmap-4.0.MdnsService

        host: string;
        name: string;
        pair: string;
        password_protected: boolean;
        passwordProtected: boolean;
        port: number;
        service_name: string;
        serviceName: string;
        transport_protocol: number;
        transportProtocol: number;

        // Own fields of Dmap-4.0.MdnsService

        object: GObject.Object;
    }

    module Share {
        // Signal callback interfaces

        interface Error {
            (object?: any | null): void;
        }

        // Constructor properties interface
    }

    abstract class Share extends GObject.Object {
        // Own properties of Dmap-4.0.Share

        auth_method: number;
        authMethod: number;
        container_db: ContainerDb;
        containerDb: ContainerDb;
        db: Db;
        name: string;
        password: string;
        revision_number: number;
        revisionNumber: number;
        readonly server: Soup.Server;
        transcode_mimetype: string;
        transcodeMimetype: string;
        txt_records: string[];
        txtRecords: string[];

        // Owm methods of Dmap-4.0.Share

        /**
         * Free the given filter list.
         * @param filter The filter list to free.
         */
        static free_filter(filter: GLib.SList[]): void;

        // Owm methods of Dmap-4.0.Share

        /**
         * Publish the availability of the given share using mDNS-SD.
         * @returns TRUE if publishing succeeds, else FALSE.
         */
        publish(): boolean;
        /**
         * Begin serving the service defined by share. A program will normally also
         * call dmap_share_publish.
         * @returns TRUE if serving succeeds, else FALSE with error set.
         */
        serve(): boolean;
    }

    module TranscodeStream {
        // Constructor properties interface
    }

    class TranscodeStream extends Gio.InputStream {
        // Constructors of Dmap-4.0.TranscodeStream

        static ['new'](transcode_mimetype: string, src_stream: Gio.InputStream): TranscodeStream;
    }

    class AvConnectionClass {}

    class AvConnectionPrivate {}

    class AvRecordInterface {}

    class AvShareClass {}

    class AvSharePrivate {}

    class ConnectionClass {}

    class ConnectionPrivate {}

    class ContainerDbInterface {}

    class ContainerRecordInterface {}

    class ControlConnectionClass {}

    class ControlConnectionPrivate {}

    class ControlPlayerInterface {}

    class ControlShareClass {}

    class ControlSharePrivate {}

    class DbFilterDefinition {
        // Own fields of Dmap-4.0.DbFilterDefinition

        key: string;
        value: string;
        negate: boolean;

        // Constructors of Dmap-4.0.DbFilterDefinition

        constructor(
            properties?: Partial<{
                key: string;
                value: string;
                negate: boolean;
            }>,
        );
    }

    class DbInterface {}

    class HashContext {
        // Own fields of Dmap-4.0.HashContext

        buf: number[];
        bits: number[];
        'in': Uint8Array;
        version: number;

        // Constructors of Dmap-4.0.HashContext

        constructor(
            properties?: Partial<{
                buf: number[];
                bits: number[];
                in: Uint8Array;
                version: number;
            }>,
        );
    }

    class ImageConnectionClass {}

    class ImageConnectionPrivate {}

    class ImageRecordInterface {}

    class ImageShareClass {}

    class ImageSharePrivate {}

    class MdnsBrowserClass {}

    class MdnsBrowserPrivate {}

    class MdnsPublisherClass {}

    class MdnsPublisherPrivate {}

    class MdnsServiceClass {}

    class MdnsServicePrivate {}

    class MetaDataMap {
        // Own fields of Dmap-4.0.MetaDataMap

        tag: string;
        md: number;

        // Constructors of Dmap-4.0.MetaDataMap

        constructor(
            properties?: Partial<{
                tag: string;
                md: number;
            }>,
        );
    }

    class MlclBits {
        // Own fields of Dmap-4.0.MlclBits

        bits: Bits;
        share: Share;
    }

    class Playlist {
        // Own fields of Dmap-4.0.Playlist

        name: string;
        id: number;
        uris: any[];

        // Constructors of Dmap-4.0.Playlist

        constructor(
            properties?: Partial<{
                name: string;
                id: number;
            }>,
        );
    }

    class RecordFactoryInterface {}

    class RecordInterface {}

    class ShareClass {}

    class SharePrivate {}

    class TranscodeStreamClass {}

    class TranscodeStreamPrivate {}

    interface AvRecord {
        // Own properties of Dmap-4.0.AvRecord

        bitrate: number;
        disc: number;
        duration: number;
        filesize: number;
        firstseen: number;
        format: string;
        has_video: boolean;
        hasVideo: boolean;
        hash: any[];
        location: string;
        mediakind: MediaKind;
        mtime: number;
        rating: number;
        songalbum: string;
        songalbumid: number;
        songartist: string;
        songgenre: string;
        sort_album: string;
        sortAlbum: string;
        sort_artist: string;
        sortArtist: string;
        title: string;
        track: number;
        year: number;

        // Owm methods of Dmap-4.0.AvRecord

        itunes_compat(): boolean;
        read(): Gio.InputStream;

        // Own virtual methods of Dmap-4.0.AvRecord

        vfunc_itunes_compat(): boolean;
        vfunc_read(): Gio.InputStream;
    }

    interface ContainerDb {
        // Owm methods of Dmap-4.0.ContainerDb

        /**
         * Add a record to the database.
         * @param record A record.
         */
        add(record: ContainerRecord): void;
        count(): number;
        /**
         * Apply a function to each record in a container database.
         * @param func The function to apply to each record in the database.
         */
        foreach(func: IdContainerRecordFunc): void;
        lookup_by_id(id: number): ContainerRecord;

        // Own virtual methods of Dmap-4.0.ContainerDb

        /**
         * Add a record to the database.
         * @param record A record.
         */
        vfunc_add(record: ContainerRecord): void;
        vfunc_count(): number;
        /**
         * Apply a function to each record in a container database.
         * @param func The function to apply to each record in the database.
         */
        vfunc_foreach(func: IdContainerRecordFunc): void;
        vfunc_lookup_by_id(id: number): ContainerRecord;
    }

    interface ContainerRecord {
        // Own properties of Dmap-4.0.ContainerRecord

        name: string;

        // Owm methods of Dmap-4.0.ContainerRecord

        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DmapRecord.
         * @param id The record's ID.
         */
        add_entry(record: Record, id: number): void;
        get_entries(): Db;
        get_entry_count(): number;
        get_id(): number;

        // Own virtual methods of Dmap-4.0.ContainerRecord

        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DmapRecord.
         * @param id The record's ID.
         */
        vfunc_add_entry(record: Record, id: number): void;
        vfunc_get_entries(): Db;
        vfunc_get_entry_count(): number;
        vfunc_get_id(): number;
    }

    interface ControlPlayer {
        // Own properties of Dmap-4.0.ControlPlayer

        play_state: ControlPlayState;
        playState: ControlPlayState;
        playing_time: number;
        playingTime: number;
        repeat_state: ControlRepeatState;
        repeatState: ControlRepeatState;
        shuffle_state: boolean;
        shuffleState: boolean;
        volume: number;

        // Owm methods of Dmap-4.0.ControlPlayer

        cue_clear(): void;
        cue_play(records: Record[], index: number): void;
        next_item(): void;
        now_playing_artwork(width: number, height: number): string;
        now_playing_record(): AvRecord;
        pause(): void;
        play_pause(): void;
        prev_item(): void;

        // Own virtual methods of Dmap-4.0.ControlPlayer

        vfunc_cue_clear(): void;
        vfunc_cue_play(records: Record[], index: number): void;
        vfunc_next_item(): void;
        vfunc_now_playing_artwork(width: number, height: number): string;
        vfunc_now_playing_record(): AvRecord;
        vfunc_pause(): void;
        vfunc_play_pause(): void;
        vfunc_prev_item(): void;
    }

    interface Db {
        // Owm methods of Dmap-4.0.Db

        /**
         * Add a record to the database.
         * @param record A database record.
         * @returns The ID for the newly added record or @DMAP_DB_ID_BAD on failure. A reference to the record will be retained by the database (if required; an adapter-type implementation might not want to retain a reference as the record data may be placed elsewhere). In all cases, a returned record should be unrefed by the calling code.
         */
        add(record: Record): number;
        /**
         * Create a record and add it to the database.
         * @param path A path to an appropriate media file.
         * @returns The ID for the newly added record or DMAP_DB_ID_BAD on failure. See also the notes for dmap_db_add regarding reference counting.
         */
        add_path(path: string): number;
        /**
         * Add a record to the database and assign it the given ID. `id` cannot be
         * `DMAP_DB_ID_BAD`.
         * @param record A database record.
         * @param id A database record ID.
         * @returns The ID for the newly added record or DMAP_DB_ID_BAD on failure. See also the notes for dmap_db_add regarding reference counting.
         */
        add_with_id(record: Record, id: number): number;
        apply_filter(filter_def: DbFilterDefinition[]): GLib.HashTable<number, Record>;
        count(): number;
        /**
         * Apply a function to each record in a media database.
         * @param func The function to apply to each record in the database.
         */
        foreach(func: IdRecordFunc): void;
        lookup_by_id(id: number): Record;
        lookup_id_by_location(location: string): number;

        // Own virtual methods of Dmap-4.0.Db

        /**
         * Add a record to the database.
         * @param record A database record.
         */
        vfunc_add(record: Record): number;
        /**
         * Create a record and add it to the database.
         * @param path A path to an appropriate media file.
         */
        vfunc_add_path(path: string): number;
        /**
         * Add a record to the database and assign it the given ID. `id` cannot be
         * `DMAP_DB_ID_BAD`.
         * @param record A database record.
         * @param id A database record ID.
         */
        vfunc_add_with_id(record: Record, id: number): number;
        vfunc_count(): number;
        /**
         * Apply a function to each record in a media database.
         * @param func The function to apply to each record in the database.
         */
        vfunc_foreach(func: IdRecordFunc): void;
        vfunc_lookup_by_id(id: number): Record;
        vfunc_lookup_id_by_location(location: string): number;
    }

    interface ImageRecord {
        // Own properties of Dmap-4.0.ImageRecord

        aspect_ratio: string;
        aspectRatio: string;
        comments: string;
        creation_date: number;
        creationDate: number;
        filename: string;
        format: string;
        hash: any[];
        large_filesize: number;
        largeFilesize: number;
        location: string;
        pixel_height: number;
        pixelHeight: number;
        pixel_width: number;
        pixelWidth: number;
        rating: number;
        thumbnail: any[];

        // Owm methods of Dmap-4.0.ImageRecord

        read(): Gio.InputStream;

        // Own virtual methods of Dmap-4.0.ImageRecord

        vfunc_read(): Gio.InputStream;
    }

    interface Record {
        // Owm methods of Dmap-4.0.Record

        set_from_blob(blob: Uint8Array): boolean;
        to_blob(): Uint8Array;

        // Own virtual methods of Dmap-4.0.Record

        vfunc_set_from_blob(blob: Uint8Array): boolean;
        vfunc_to_blob(): Uint8Array;
    }

    interface RecordFactory {
        // Owm methods of Dmap-4.0.RecordFactory

        create(user_data?: any | null): Record;

        // Own virtual methods of Dmap-4.0.RecordFactory

        vfunc_create(): Record;
    }

    type Bits = number;
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

export default Dmap;
// END
