/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gst from '@girs/gst-1.0';

export namespace Dmap {
    /**
     * Dmap-4.0
     */

    /**
     * Enumeration of connection states.
     */

    /**
     * Enumeration of connection states.
     */
    export namespace ConnectionState {
        export const $gtype: GObject.GType<ConnectionState>;
    }

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

    export namespace ContentCode {
        export const $gtype: GObject.GType<ContentCode>;
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

    export namespace ControlPlayState {
        export const $gtype: GObject.GType<ControlPlayState>;
    }

    enum ControlPlayState {
        STOPPED,
        PAUSED,
        PLAYING,
    }

    export namespace ControlRepeatState {
        export const $gtype: GObject.GType<ControlRepeatState>;
    }

    enum ControlRepeatState {
        NONE,
        SINGLE,
        ALL,
    }
    /**
     * Special DmapDb ID values.
     */

    /**
     * Special DmapDb ID values.
     */
    export namespace DbId {
        export const $gtype: GObject.GType<DbId>;
    }

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
        static $gtype: GObject.GType<Error>;

        // Static fields

        static OK: number;
        static FAILED: number;
        static INVALID_CONTENT_CODE: number;
        static INVALID_CONTENT_CODE_SIZE: number;
        static RESPONSE_TOO_SHORT: number;
        static BAD_FORMAT: number;
        static BAD_BROWSE_CATEGORY: number;
        static RECORD_MISSING_FIELD: number;
        static DB_BAD_ID: number;
        static OPEN_FAILED: number;
        static CLOSE_FAILED: number;
        static SEEK_FAILED: number;
        static NUM_ERRORS: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    class MdnsBrowserError extends GLib.Error {
        static $gtype: GObject.GType<MdnsBrowserError>;

        // Static fields

        static NOT_RUNNING: number;
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    class MdnsPublisherError extends GLib.Error {
        static $gtype: GObject.GType<MdnsPublisherError>;

        // Static fields

        static NOT_RUNNING: number;
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace MdnsServiceTransportProtocol {
        export const $gtype: GObject.GType<MdnsServiceTransportProtocol>;
    }

    enum MdnsServiceTransportProtocol {
        TCP,
        UDP,
        LAST,
    }
    /**
     * Enum values used to specify the service type.
     */

    /**
     * Enum values used to specify the service type.
     */
    export namespace MdnsServiceType {
        export const $gtype: GObject.GType<MdnsServiceType>;
    }

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

    export namespace MediaKind {
        export const $gtype: GObject.GType<MediaKind>;
    }

    enum MediaKind {
        MUSIC,
        MOVIE,
        PODCAST,
        TV_SHOW,
    }

    export namespace ShareAuthMethod {
        export const $gtype: GObject.GType<ShareAuthMethod>;
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

        interface ConstructorProps extends Connection.ConstructorProps {}
    }

    class AvConnection extends Connection {
        static $gtype: GObject.GType<AvConnection>;

        // Fields

        dmap_connection_instance: Connection;

        // Constructors

        constructor(properties?: Partial<AvConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, host: string, port: number, db: Db, factory: RecordFactory): AvConnection;
    }

    module AvShare {
        // Constructor properties interface

        interface ConstructorProps extends Share.ConstructorProps {}
    }

    class AvShare extends Share {
        static $gtype: GObject.GType<AvShare>;

        // Fields

        dmap_share_instance: Share;

        // Constructors

        constructor(properties?: Partial<AvShare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties

        get base_uri(): GLib.Uri;
        set base_uri(val: GLib.Uri);
        get baseUri(): GLib.Uri;
        set baseUri(val: GLib.Uri);
        get database_id(): number;
        set database_id(val: number);
        get databaseId(): number;
        set databaseId(val: number);
        get db(): Db;
        get dmap_version(): number;
        set dmap_version(val: number);
        get dmapVersion(): number;
        set dmapVersion(val: number);
        get factory(): RecordFactory;
        get host(): string;
        get name(): string;
        set password(val: string);
        get port(): number;
        get revision_number(): number;
        set revision_number(val: number);
        get revisionNumber(): number;
        set revisionNumber(val: number);
        get session_id(): number;
        set session_id(val: number);
        get sessionId(): number;
        set sessionId(val: number);
        get username(): string;

        // Constructors

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'authenticate',
            callback: (
                _source: this,
                object: string,
                p0: Soup.Session,
                p1: Soup.Message,
                p2: Soup.Auth,
                p3: boolean,
            ) => void,
        ): number;
        connect_after(
            signal: 'authenticate',
            callback: (
                _source: this,
                object: string,
                p0: Soup.Session,
                p1: Soup.Message,
                p2: Soup.Auth,
                p3: boolean,
            ) => void,
        ): number;
        emit(
            signal: 'authenticate',
            object: string,
            p0: Soup.Session,
            p1: Soup.Message,
            p2: Soup.Auth,
            p3: boolean,
        ): void;
        connect(signal: 'connected', callback: (_source: this) => void): number;
        connect_after(signal: 'connected', callback: (_source: this) => void): number;
        emit(signal: 'connected'): void;
        connect(signal: 'connecting', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(signal: 'connecting', callback: (_source: this, object: number, p0: number) => void): number;
        emit(signal: 'connecting', object: number, p0: number): void;
        connect(signal: 'disconnected', callback: (_source: this) => void): number;
        connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
        emit(signal: 'disconnected'): void;
        connect(signal: 'error', callback: (_source: this, object: any | null) => void): number;
        connect_after(signal: 'error', callback: (_source: this, object: any | null) => void): number;
        emit(signal: 'error', object?: any | null): void;
        connect(signal: 'operation-done', callback: (_source: this) => void): number;
        connect_after(signal: 'operation-done', callback: (_source: this) => void): number;
        emit(signal: 'operation-done'): void;

        // Virtual methods

        vfunc_authenticate(name: string): string;
        vfunc_connected(): void;
        vfunc_connecting(state: ConnectionState, progress: number): void;
        vfunc_disconnected(): void;
        vfunc_get_protocol_version_cc(): ContentCode;
        vfunc_get_query_metadata(): string;
        vfunc_operation_done(): void;

        // Methods

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

        interface ConstructorProps extends Connection.ConstructorProps {}
    }

    class ControlConnection extends Connection {
        static $gtype: GObject.GType<ControlConnection>;

        // Fields

        dmap_connection_instance: Connection;

        // Constructors

        constructor(properties?: Partial<ControlConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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

        interface ConstructorProps extends Share.ConstructorProps {
            library_name: string;
            libraryName: string;
            player: GObject.Object;
        }
    }

    class ControlShare extends Share {
        static $gtype: GObject.GType<ControlShare>;

        // Properties

        get library_name(): string;
        set library_name(val: string);
        get libraryName(): string;
        set libraryName(val: string);
        get player(): GObject.Object;

        // Fields

        dmap_av_share_instance: AvShare;

        // Constructors

        constructor(properties?: Partial<ControlShare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](library_name: string, player: ControlPlayer, db: Db, container_db: ContainerDb): ControlShare;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'add-guid', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'add-guid', callback: (_source: this, object: string) => void): number;
        emit(signal: 'add-guid', object: string): void;
        connect(signal: 'lookup-guid', callback: (_source: this, object: string) => boolean): number;
        connect_after(signal: 'lookup-guid', callback: (_source: this, object: string) => boolean): number;
        emit(signal: 'lookup-guid', object: string): void;
        connect(signal: 'remote-found', callback: (_source: this, object: string, p0: string) => void): number;
        connect_after(signal: 'remote-found', callback: (_source: this, object: string, p0: string) => void): number;
        emit(signal: 'remote-found', object: string, p0: string): void;
        connect(signal: 'remote-lost', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'remote-lost', callback: (_source: this, object: string) => void): number;
        emit(signal: 'remote-lost', object: string): void;
        connect(signal: 'remote-paired', callback: (_source: this, object: string, p0: boolean) => void): number;
        connect_after(signal: 'remote-paired', callback: (_source: this, object: string, p0: boolean) => void): number;
        emit(signal: 'remote-paired', object: string, p0: boolean): void;

        // Virtual methods

        vfunc_add_guid(guid: string): void;
        vfunc_lookup_guid(guid: string): boolean;
        vfunc_remote_found(service_name: string, remote_name: string): void;
        vfunc_remote_lost(service_name: string): void;
        vfunc_remote_paired(service_name: string, connected: boolean): void;

        // Methods

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

        interface ConstructorProps extends Connection.ConstructorProps {}
    }

    class ImageConnection extends Connection {
        static $gtype: GObject.GType<ImageConnection>;

        // Fields

        dmap_connection_instance: Connection;

        // Constructors

        constructor(properties?: Partial<ImageConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, host: string, port: number, db: Db, factory: RecordFactory): ImageConnection;
    }

    module ImageShare {
        // Constructor properties interface

        interface ConstructorProps extends Share.ConstructorProps {}
    }

    class ImageShare extends Share {
        static $gtype: GObject.GType<ImageShare>;

        // Fields

        dmap_share_instance: Share;

        // Constructors

        constructor(properties?: Partial<ImageShare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MdnsBrowser extends GObject.Object {
        static $gtype: GObject.GType<MdnsBrowser>;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<MdnsBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: MdnsServiceType): MdnsBrowser;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'service-added', callback: (_source: this, service: MdnsService) => void): number;
        connect_after(signal: 'service-added', callback: (_source: this, service: MdnsService) => void): number;
        emit(signal: 'service-added', service: MdnsService): void;
        connect(signal: 'service-removed', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'service-removed', callback: (_source: this, object: string) => void): number;
        emit(signal: 'service-removed', object: string): void;

        // Virtual methods

        vfunc_service_added(service: MdnsService): void;
        vfunc_service_removed(service: MdnsService): void;

        // Methods

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class MdnsPublisher extends GObject.Object {
        static $gtype: GObject.GType<MdnsPublisher>;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<MdnsPublisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MdnsPublisher;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'name-collision', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'name-collision', callback: (_source: this, object: string) => void): number;
        emit(signal: 'name-collision', object: string): void;
        connect(signal: 'published', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'published', callback: (_source: this, object: string) => void): number;
        emit(signal: 'published', object: string): void;

        // Virtual methods

        vfunc_name_collision(name: string): void;
        vfunc_published(name: string): void;

        // Methods

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    class MdnsService extends GObject.Object {
        static $gtype: GObject.GType<MdnsService>;

        // Properties

        get host(): string;
        set host(val: string);
        get name(): string;
        set name(val: string);
        get pair(): string;
        set pair(val: string);
        get password_protected(): boolean;
        set password_protected(val: boolean);
        get passwordProtected(): boolean;
        set passwordProtected(val: boolean);
        get port(): number;
        set port(val: number);
        get service_name(): string;
        set service_name(val: string);
        get serviceName(): string;
        set serviceName(val: string);
        get transport_protocol(): number;
        set transport_protocol(val: number);
        get transportProtocol(): number;
        set transportProtocol(val: number);

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<MdnsService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Share {
        // Signal callback interfaces

        interface Error {
            (object?: any | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auth_method: number;
            authMethod: number;
            container_db: ContainerDb;
            containerDb: ContainerDb;
            db: Db;
            name: string;
            password: string;
            revision_number: number;
            revisionNumber: number;
            server: Soup.Server;
            transcode_mimetype: string;
            transcodeMimetype: string;
            txt_records: string[];
            txtRecords: string[];
        }
    }

    abstract class Share extends GObject.Object {
        static $gtype: GObject.GType<Share>;

        // Properties

        get auth_method(): number;
        set auth_method(val: number);
        get authMethod(): number;
        set authMethod(val: number);
        get container_db(): ContainerDb;
        get containerDb(): ContainerDb;
        get db(): Db;
        get name(): string;
        set name(val: string);
        get password(): string;
        set password(val: string);
        get revision_number(): number;
        set revision_number(val: number);
        get revisionNumber(): number;
        set revisionNumber(val: number);
        get server(): Soup.Server;
        get transcode_mimetype(): string;
        get transcodeMimetype(): string;
        get txt_records(): string[];
        set txt_records(val: string[]);
        get txtRecords(): string[];
        set txtRecords(val: string[]);

        // Constructors

        constructor(properties?: Partial<Share.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'error', callback: (_source: this, object: any | null) => void): number;
        connect_after(signal: 'error', callback: (_source: this, object: any | null) => void): number;
        emit(signal: 'error', object?: any | null): void;

        // Static methods

        /**
         * Free the given filter list.
         * @param filter The filter list to free.
         */
        static free_filter(filter: GLib.SList[]): void;

        // Virtual methods

        vfunc_content_codes(message: Soup.ServerMessage, path: string): void;
        vfunc_ctrl_int(
            message: Soup.ServerMessage,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
        ): void;
        vfunc_databases(
            server: Soup.Server,
            message: Soup.ServerMessage,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
        ): void;
        vfunc_databases_browse_xxx(
            msg: Soup.ServerMessage,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
        ): void;
        vfunc_databases_items_xxx(server: Soup.Server, msg: Soup.ServerMessage, path: string): void;
        vfunc_get_desired_port(): number;
        vfunc_get_meta_data_map(): any | null;
        vfunc_get_type_of_service(): string;
        vfunc_login(
            message: Soup.ServerMessage,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
        ): void;
        vfunc_logout(
            message: Soup.ServerMessage,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
        ): void;
        vfunc_message_add_standard_headers(msg: Soup.ServerMessage): void;
        vfunc_name_collision(publisher: MdnsPublisher, name: string): void;
        vfunc_published(publisher: MdnsPublisher, name: string): void;
        vfunc_server_info(message: Soup.ServerMessage, path: string): void;
        vfunc_update(
            message: Soup.ServerMessage,
            path: string,
            query: { [key: string]: any } | GLib.HashTable<any, any>,
        ): void;

        // Methods

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

        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    class TranscodeStream extends Gio.InputStream implements Gio.Seekable {
        static $gtype: GObject.GType<TranscodeStream>;

        // Constructors

        constructor(properties?: Partial<TranscodeStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](transcode_mimetype: string, src_stream: Gio.InputStream): TranscodeStream;

        // Virtual methods

        vfunc_kill_pipeline(): void;

        // Inherited methods
        /**
         * Tests if the stream supports the #GSeekableIface.
         * @returns %TRUE if @seekable can be seeked. %FALSE otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         * @returns %TRUE if the stream can be truncated, %FALSE otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error     has occurred, this function will return %FALSE and set @error     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the #GSeekableIface.
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * g_seekable_truncate().
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset,` modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
         * @param offset a #goffset.
         * @param type a #GSeekType.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset,` the extra data is discarded. If the stream was
         * previously shorter than `offset,` it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not %NULL, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for @seekable, in bytes.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type AvConnectionClass = typeof AvConnection;
    abstract class AvConnectionPrivate {
        static $gtype: GObject.GType<AvConnectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AvRecordInterface = typeof AvRecord;
    type AvShareClass = typeof AvShare;
    abstract class AvSharePrivate {
        static $gtype: GObject.GType<AvSharePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContainerDbInterface = typeof ContainerDb;
    type ContainerRecordInterface = typeof ContainerRecord;
    type ControlConnectionClass = typeof ControlConnection;
    abstract class ControlConnectionPrivate {
        static $gtype: GObject.GType<ControlConnectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ControlPlayerInterface = typeof ControlPlayer;
    type ControlShareClass = typeof ControlShare;
    abstract class ControlSharePrivate {
        static $gtype: GObject.GType<ControlSharePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class DbFilterDefinition {
        static $gtype: GObject.GType<DbFilterDefinition>;

        // Fields

        key: string;
        value: string;
        negate: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                key: string;
                value: string;
                negate: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DbInterface = typeof Db;
    class HashContext {
        static $gtype: GObject.GType<HashContext>;

        // Fields

        buf: number[];
        bits: number[];
        'in': Uint8Array;
        version: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buf: number[];
                bits: number[];
                in: Uint8Array;
                version: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ImageConnectionClass = typeof ImageConnection;
    abstract class ImageConnectionPrivate {
        static $gtype: GObject.GType<ImageConnectionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ImageRecordInterface = typeof ImageRecord;
    type ImageShareClass = typeof ImageShare;
    abstract class ImageSharePrivate {
        static $gtype: GObject.GType<ImageSharePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MdnsBrowserClass = typeof MdnsBrowser;
    abstract class MdnsBrowserPrivate {
        static $gtype: GObject.GType<MdnsBrowserPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MdnsPublisherClass = typeof MdnsPublisher;
    abstract class MdnsPublisherPrivate {
        static $gtype: GObject.GType<MdnsPublisherPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MdnsServiceClass = typeof MdnsService;
    abstract class MdnsServicePrivate {
        static $gtype: GObject.GType<MdnsServicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class MetaDataMap {
        static $gtype: GObject.GType<MetaDataMap>;

        // Fields

        tag: string;
        md: number;

        // Constructors

        constructor(
            properties?: Partial<{
                tag: string;
                md: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class MlclBits {
        static $gtype: GObject.GType<MlclBits>;

        // Fields

        bits: Bits;
        share: Share;

        // Constructors

        _init(...args: any[]): void;
    }

    class Playlist {
        static $gtype: GObject.GType<Playlist>;

        // Fields

        name: string;
        id: number;
        uris: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                id: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type RecordFactoryInterface = typeof RecordFactory;
    type RecordInterface = typeof Record;
    type ShareClass = typeof Share;
    abstract class SharePrivate {
        static $gtype: GObject.GType<SharePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TranscodeStreamClass = typeof TranscodeStream;
    abstract class TranscodeStreamPrivate {
        static $gtype: GObject.GType<TranscodeStreamPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    module AvRecord {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    export interface AvRecordNamespace {
        $gtype: GObject.GType<AvRecord>;
        prototype: AvRecord;

        /**
         * Compares the two records associated with the provided keys according
         * to album. Suitable to sort lists of albums.
         * @param a first ID.
         * @param b second ID.
         * @param db A DmapDb for which a and b are valid ID's.
         */
        cmp_by_album(a: any | null, b: any | null, db: Db): number;
    }
    interface AvRecord extends GObject.Object {
        // Properties

        get bitrate(): number;
        set bitrate(val: number);
        get disc(): number;
        set disc(val: number);
        get duration(): number;
        set duration(val: number);
        get filesize(): number;
        set filesize(val: number);
        get firstseen(): number;
        set firstseen(val: number);
        get format(): string;
        set format(val: string);
        get has_video(): boolean;
        set has_video(val: boolean);
        get hasVideo(): boolean;
        set hasVideo(val: boolean);
        get hash(): any[];
        set hash(val: any[]);
        get location(): string;
        set location(val: string);
        get mediakind(): MediaKind;
        set mediakind(val: MediaKind);
        get mtime(): number;
        set mtime(val: number);
        get rating(): number;
        set rating(val: number);
        get songalbum(): string;
        set songalbum(val: string);
        get songalbumid(): number;
        set songalbumid(val: number);
        get songartist(): string;
        set songartist(val: string);
        get songgenre(): string;
        set songgenre(val: string);
        get sort_album(): string;
        set sort_album(val: string);
        get sortAlbum(): string;
        set sortAlbum(val: string);
        get sort_artist(): string;
        set sort_artist(val: string);
        get sortArtist(): string;
        set sortArtist(val: string);
        get title(): string;
        set title(val: string);
        get track(): number;
        set track(val: number);
        get year(): number;
        set year(val: number);

        // Methods

        itunes_compat(): boolean;
        read(): Gio.InputStream;

        // Virtual methods

        vfunc_itunes_compat(): boolean;
        vfunc_read(): Gio.InputStream;
    }

    export const AvRecord: AvRecordNamespace;

    module ContainerDb {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ContainerDbNamespace {
        $gtype: GObject.GType<ContainerDb>;
        prototype: ContainerDb;
    }
    interface ContainerDb extends GObject.Object {
        // Methods

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

        // Virtual methods

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

    export const ContainerDb: ContainerDbNamespace;

    module ContainerRecord {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    export interface ContainerRecordNamespace {
        $gtype: GObject.GType<ContainerRecord>;
        prototype: ContainerRecord;
    }
    interface ContainerRecord extends GObject.Object {
        // Properties

        get name(): string;
        set name(val: string);

        // Methods

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

        // Virtual methods

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

    export const ContainerRecord: ContainerRecordNamespace;

    module ControlPlayer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            play_state: ControlPlayState;
            playState: ControlPlayState;
            playing_time: number;
            playingTime: number;
            repeat_state: ControlRepeatState;
            repeatState: ControlRepeatState;
            shuffle_state: boolean;
            shuffleState: boolean;
            volume: number;
        }
    }

    export interface ControlPlayerNamespace {
        $gtype: GObject.GType<ControlPlayer>;
        prototype: ControlPlayer;
    }
    interface ControlPlayer extends GObject.Object {
        // Properties

        get play_state(): ControlPlayState;
        set play_state(val: ControlPlayState);
        get playState(): ControlPlayState;
        set playState(val: ControlPlayState);
        get playing_time(): number;
        set playing_time(val: number);
        get playingTime(): number;
        set playingTime(val: number);
        get repeat_state(): ControlRepeatState;
        set repeat_state(val: ControlRepeatState);
        get repeatState(): ControlRepeatState;
        set repeatState(val: ControlRepeatState);
        get shuffle_state(): boolean;
        set shuffle_state(val: boolean);
        get shuffleState(): boolean;
        set shuffleState(val: boolean);
        get volume(): number;
        set volume(val: number);

        // Methods

        cue_clear(): void;
        cue_play(records: Record[], index: number): void;
        next_item(): void;
        now_playing_artwork(width: number, height: number): string;
        now_playing_record(): AvRecord;
        pause(): void;
        play_pause(): void;
        prev_item(): void;

        // Virtual methods

        vfunc_cue_clear(): void;
        vfunc_cue_play(records: Record[], index: number): void;
        vfunc_next_item(): void;
        vfunc_now_playing_artwork(width: number, height: number): string;
        vfunc_now_playing_record(): AvRecord;
        vfunc_pause(): void;
        vfunc_play_pause(): void;
        vfunc_prev_item(): void;
    }

    export const ControlPlayer: ControlPlayerNamespace;

    module Db {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DbNamespace {
        $gtype: GObject.GType<Db>;
        prototype: Db;
    }
    interface Db extends GObject.Object {
        // Methods

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

        // Virtual methods

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

    export const Db: DbNamespace;

    module ImageRecord {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
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
        }
    }

    export interface ImageRecordNamespace {
        $gtype: GObject.GType<ImageRecord>;
        prototype: ImageRecord;
    }
    interface ImageRecord extends GObject.Object {
        // Properties

        get aspect_ratio(): string;
        set aspect_ratio(val: string);
        get aspectRatio(): string;
        set aspectRatio(val: string);
        get comments(): string;
        set comments(val: string);
        get creation_date(): number;
        set creation_date(val: number);
        get creationDate(): number;
        set creationDate(val: number);
        get filename(): string;
        set filename(val: string);
        get format(): string;
        set format(val: string);
        get hash(): any[];
        set hash(val: any[]);
        get large_filesize(): number;
        set large_filesize(val: number);
        get largeFilesize(): number;
        set largeFilesize(val: number);
        get location(): string;
        set location(val: string);
        get pixel_height(): number;
        set pixel_height(val: number);
        get pixelHeight(): number;
        set pixelHeight(val: number);
        get pixel_width(): number;
        set pixel_width(val: number);
        get pixelWidth(): number;
        set pixelWidth(val: number);
        get rating(): number;
        set rating(val: number);
        get thumbnail(): any[];
        set thumbnail(val: any[]);

        // Methods

        read(): Gio.InputStream;

        // Virtual methods

        vfunc_read(): Gio.InputStream;
    }

    export const ImageRecord: ImageRecordNamespace;

    module Record {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordNamespace {
        $gtype: GObject.GType<Record>;
        prototype: Record;
    }
    interface Record extends GObject.Object {
        // Methods

        set_from_blob(blob: Uint8Array | string): boolean;
        to_blob(): Uint8Array;

        // Virtual methods

        vfunc_set_from_blob(blob: Uint8Array | string): boolean;
        vfunc_to_blob(): Uint8Array;
    }

    export const Record: RecordNamespace;

    module RecordFactory {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordFactoryNamespace {
        $gtype: GObject.GType<RecordFactory>;
        prototype: RecordFactory;
    }
    interface RecordFactory extends GObject.Object {
        // Methods

        create(user_data?: any | null): Record;

        // Virtual methods

        vfunc_create(): Record;
    }

    export const RecordFactory: RecordFactoryNamespace;

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
