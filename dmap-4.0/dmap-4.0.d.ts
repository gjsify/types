
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
     * @gir-type Enum
     */
    export namespace ConnectionState {
        export const $gtype: GObject.GType<ConnectionState>;
    }

    /**
     * Enumeration of connection states.
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    export namespace ContentCode {
        export const $gtype: GObject.GType<ContentCode>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    export namespace ControlPlayState {
        export const $gtype: GObject.GType<ControlPlayState>;
    }

    /**
     * @gir-type Enum
     */
    enum ControlPlayState {
        STOPPED,
        PAUSED,
        PLAYING,
    }


    /**
     * @gir-type Enum
     */
    export namespace ControlRepeatState {
        export const $gtype: GObject.GType<ControlRepeatState>;
    }

    /**
     * @gir-type Enum
     */
    enum ControlRepeatState {
        NONE,
        SINGLE,
        ALL,
    }


    /**
     * @gir-type Enum
     */
    export namespace DbId {
        export const $gtype: GObject.GType<DbId>;
    }

    /**
     * Special DmapDb ID values.
     * @gir-type Enum
     */
    enum DbId {
        /**
         * the value which represents a bad DmapDb ID.
         */
        BAD,
    }


    /**
     * Errors inside the libdmapsharing library.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Struct
     */
    class MdnsBrowserError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NOT_RUNNING: number;

        static FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Struct
     */
    class MdnsPublisherError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static NOT_RUNNING: number;

        static FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace MdnsServiceTransportProtocol {
        export const $gtype: GObject.GType<MdnsServiceTransportProtocol>;
    }

    /**
     * @gir-type Enum
     */
    enum MdnsServiceTransportProtocol {
        TCP,
        UDP,
        LAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace MdnsServiceType {
        export const $gtype: GObject.GType<MdnsServiceType>;
    }

    /**
     * Enum values used to specify the service type.
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    export namespace MediaKind {
        export const $gtype: GObject.GType<MediaKind>;
    }

    /**
     * @gir-type Enum
     */
    enum MediaKind {
        MUSIC,
        MOVIE,
        PODCAST,
        TV_SHOW,
    }


    /**
     * @gir-type Enum
     */
    export namespace ShareAuthMethod {
        export const $gtype: GObject.GType<ShareAuthMethod>;
    }

    /**
     * @gir-type Enum
     */
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
    function av_record_cmp_by_album(a: null, b: null, db: Db): number;

    function error_quark(): GLib.Quark;

    /**
     * @param version_major 
     * @param url 
     * @param hash_select 
     * @param out 
     * @param request_id 
     */
    function md5_generate(version_major: number, url: number, hash_select: number, out: number, request_id: number): void;

    /**
     * @param context 
     * @param digest 
     */
    function md5_progressive_final(context: HashContext, digest: number): void;

    /**
     * @param context 
     */
    function md5_progressive_init(context: HashContext): void;

    /**
     * @param digest 
     * @param string 
     */
    function md5_progressive_to_string(digest: number, string: string): void;

    /**
     * @param context 
     * @param buffer 
     * @param length 
     */
    function md5_progressive_update(context: HashContext, buffer: number, length: number): void;

    function mdns_browser_error_quark(): GLib.Quark;

    function mdns_publisher_error_quark(): GLib.Quark;

    /**
     * @param transcode_mimetype a string representing a MIME type (e.g., "audio/wav").
     * @returns a string representing the corresponding type  (e.g., "wav").
     */
    function utils_mime_to_format(transcode_mimetype: string): string;

    /**
     * @gir-type Callback
     */
    interface ConnectionFunc {
        (connection: Connection, result: boolean, reason: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface IdContainerRecordFunc {
        (id: number, record: ContainerRecord): void;
    }

    /**
     * @gir-type Callback
     */
    interface IdRecordFunc {
        (id: number, record: Record): void;
    }

    namespace AvConnection {
        // Signal signatures
        interface SignalSignatures extends Connection.SignalSignatures {
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::database-id": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::dmap-version": (pspec: GObject.ParamSpec) => void;
            "notify::factory": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Connection.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AvConnection extends Connection {
        static $gtype: GObject.GType<AvConnection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AvConnection.SignalSignatures;

        // Fields
        dmap_connection_instance: Connection;

        // Constructors
        constructor(properties?: Partial<AvConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, host: string, port: number, db: Db, factory: RecordFactory): AvConnection;

        // Signals
        /** @signal */
        connect<K extends keyof AvConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AvConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AvConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AvConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AvConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AvConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace AvShare {
        // Signal signatures
        interface SignalSignatures extends Share.SignalSignatures {
            "notify::auth-method": (pspec: GObject.ParamSpec) => void;
            "notify::container-db": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::server": (pspec: GObject.ParamSpec) => void;
            "notify::transcode-mimetype": (pspec: GObject.ParamSpec) => void;
            "notify::txt-records": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Share.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AvShare extends Share {
        static $gtype: GObject.GType<AvShare>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AvShare.SignalSignatures;

        // Fields
        dmap_share_instance: Share;

        // Constructors
        constructor(properties?: Partial<AvShare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, password: string | null, db: Db, container_db: ContainerDb, transcode_mimetype: string | null): AvShare;

        // Signals
        /** @signal */
        connect<K extends keyof AvShare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AvShare.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AvShare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AvShare.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AvShare.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AvShare.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            authenticate: (arg0: string, arg1: Soup.Session, arg2: Soup.Message, arg3: Soup.Auth, arg4: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            connected: () => void;
            /**
             * @signal
             * @run-last
             */
            connecting: (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @run-last
             */
            disconnected: () => void;
            /**
             * @signal
             * @run-first
             */
            error: (arg0: null) => void;
            /**
             * @signal
             * @run-first
             */
            "operation-done": () => void;
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::database-id": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::dmap-version": (pspec: GObject.ParamSpec) => void;
            "notify::factory": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties
        get base_uri(): GLib.Uri;
        set base_uri(val: GLib.Uri);

        get baseUri(): GLib.Uri;
        set baseUri(val: GLib.Uri);

        /**
         * @default 0
         */
        get database_id(): number;
        set database_id(val: number);

        /**
         * @default 0
         */
        get databaseId(): number;
        set databaseId(val: number);

        /**
         * @construct-only
         */
        get db(): Db;

        /**
         * @default 0
         */
        get dmap_version(): number;
        set dmap_version(val: number);

        /**
         * @default 0
         */
        get dmapVersion(): number;
        set dmapVersion(val: number);

        /**
         * @construct-only
         */
        get factory(): RecordFactory;

        /**
         * @construct-only
         * @default null
         */
        get host(): string;

        /**
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * @write-only
         * @default null
         */
        set password(val: string);

        /**
         * @construct-only
         * @default 0
         */
        get port(): number;

        /**
         * @default 0
         */
        get revision_number(): number;
        set revision_number(val: number);

        /**
         * @default 0
         */
        get revisionNumber(): number;
        set revisionNumber(val: number);

        /**
         * @default 0
         */
        get session_id(): number;
        set session_id(val: number);

        /**
         * @default 0
         */
        get sessionId(): number;
        set sessionId(val: number);

        /**
         * @construct-only
         * @default libdmapsharing
         */
        get username(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Connection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Connection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Connection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param name 
         * @virtual
         */
        vfunc_authenticate(name: string): string;

        /**
         * @virtual
         */
        vfunc_connected(): void;

        /**
         * @param state 
         * @param progress 
         * @virtual
         */
        vfunc_connecting(state: ConnectionState, progress: number): void;

        /**
         * @virtual
         */
        vfunc_disconnected(): void;

        /**
         * @virtual
         */
        vfunc_get_protocol_version_cc(): ContentCode;

        /**
         * @virtual
         */
        vfunc_get_query_metadata(): string;

        /**
         * @virtual
         */
        vfunc_operation_done(): void;

        // Methods
        /**
         * Attach an authentication credential to a request. This
         * method should be called by a function that is connected to the
         * {@link Dmap.Connection.SignalSignatures.authenticate | Dmap.Connection::authenticate} signal. The signal will provide the
         * connection, session, message and auth to that function. That function
         * should obtain a password and provide it to this method.
         * @param session A {@link Soup.Session}
         * @param message A {@link Soup.Message}
         * @param auth A {@link Soup.Auth}
         * @param password A password
         */
        authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;

        /**
         * @param uri 
         */
        get_headers(uri: string): Soup.MessageHeaders;

        /**
         * Get the playlists associated with a {@link Dmap.Connection} instance.
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


    namespace ControlConnection {
        // Signal signatures
        interface SignalSignatures extends Connection.SignalSignatures {
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::database-id": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::dmap-version": (pspec: GObject.ParamSpec) => void;
            "notify::factory": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Connection.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ControlConnection extends Connection {
        static $gtype: GObject.GType<ControlConnection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlConnection.SignalSignatures;

        // Fields
        dmap_connection_instance: Connection;

        // Constructors
        constructor(properties?: Partial<ControlConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, host: string, port: number, db: Db, factory: RecordFactory): ControlConnection;

        // Signals
        /** @signal */
        connect<K extends keyof ControlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ControlConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ControlConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ControlConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ControlShare {
        // Signal signatures
        interface SignalSignatures extends Share.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "add-guid": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            "lookup-guid": (arg0: string) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            "remote-found": (arg0: string, arg1: string) => void;
            /**
             * @signal
             * @run-last
             */
            "remote-lost": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            "remote-paired": (arg0: string, arg1: boolean) => void;
            "notify::library-name": (pspec: GObject.ParamSpec) => void;
            "notify::player": (pspec: GObject.ParamSpec) => void;
            "notify::auth-method": (pspec: GObject.ParamSpec) => void;
            "notify::container-db": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::server": (pspec: GObject.ParamSpec) => void;
            "notify::transcode-mimetype": (pspec: GObject.ParamSpec) => void;
            "notify::txt-records": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Share.ConstructorProps {
            library_name: string;
            libraryName: string;
            player: GObject.Object;
        }
    }

    /**
     * @gir-type Class
     */
    class ControlShare extends Share {
        static $gtype: GObject.GType<ControlShare>;

        // Properties
        /**
         * @default null
         */
        get library_name(): string;
        set library_name(val: string);

        /**
         * @default null
         */
        get libraryName(): string;
        set libraryName(val: string);

        /**
         * @construct-only
         */
        get player(): GObject.Object;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ControlShare.SignalSignatures;

        // Fields
        dmap_av_share_instance: AvShare;

        // Constructors
        constructor(properties?: Partial<ControlShare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](library_name: string, player: ControlPlayer, db: Db, container_db: ContainerDb): ControlShare;

        // Signals
        /** @signal */
        connect<K extends keyof ControlShare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlShare.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ControlShare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ControlShare.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ControlShare.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ControlShare.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param guid 
         * @virtual
         */
        vfunc_add_guid(guid: string): void;

        /**
         * @param guid 
         * @virtual
         */
        vfunc_lookup_guid(guid: string): boolean;

        /**
         * @param service_name 
         * @param remote_name 
         * @virtual
         */
        vfunc_remote_found(service_name: string, remote_name: string): void;

        /**
         * @param service_name 
         * @virtual
         */
        vfunc_remote_lost(service_name: string): void;

        /**
         * @param service_name 
         * @param connected 
         * @virtual
         */
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
         * Start looking up for DACP remotes. Connect to {@link Dmap.ControlShare.SignalSignatures.remote_found | Dmap.ControlShare::remote-found} signal
         * to detect new remotes. Be aware that when a {@link Dmap.ControlShare} is created, only
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


    namespace ImageConnection {
        // Signal signatures
        interface SignalSignatures extends Connection.SignalSignatures {
            "notify::base-uri": (pspec: GObject.ParamSpec) => void;
            "notify::database-id": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::dmap-version": (pspec: GObject.ParamSpec) => void;
            "notify::factory": (pspec: GObject.ParamSpec) => void;
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Connection.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ImageConnection extends Connection {
        static $gtype: GObject.GType<ImageConnection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageConnection.SignalSignatures;

        // Fields
        dmap_connection_instance: Connection;

        // Constructors
        constructor(properties?: Partial<ImageConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, host: string, port: number, db: Db, factory: RecordFactory): ImageConnection;

        // Signals
        /** @signal */
        connect<K extends keyof ImageConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageConnection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ImageConnection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageConnection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImageConnection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageConnection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ImageShare {
        // Signal signatures
        interface SignalSignatures extends Share.SignalSignatures {
            "notify::auth-method": (pspec: GObject.ParamSpec) => void;
            "notify::container-db": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::server": (pspec: GObject.ParamSpec) => void;
            "notify::transcode-mimetype": (pspec: GObject.ParamSpec) => void;
            "notify::txt-records": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Share.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ImageShare extends Share {
        static $gtype: GObject.GType<ImageShare>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageShare.SignalSignatures;

        // Fields
        dmap_share_instance: Share;

        // Constructors
        constructor(properties?: Partial<ImageShare.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, password: string | null, db: null, container_db: null, transcode_mimetype: string | null): ImageShare;

        // Signals
        /** @signal */
        connect<K extends keyof ImageShare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageShare.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ImageShare.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageShare.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImageShare.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageShare.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace MdnsBrowser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted each time a service becomes available to `browser`
             * @signal
             * @run-last
             */
            "service-added": (arg0: MdnsService) => void;
            /**
             * @signal
             * @run-last
             */
            "service-removed": (arg0: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MdnsBrowser extends GObject.Object {
        static $gtype: GObject.GType<MdnsBrowser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MdnsBrowser.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<MdnsBrowser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: MdnsServiceType): MdnsBrowser;

        // Signals
        /** @signal */
        connect<K extends keyof MdnsBrowser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsBrowser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MdnsBrowser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsBrowser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MdnsBrowser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MdnsBrowser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param service 
         * @virtual
         */
        vfunc_service_added(service: MdnsService): void;

        /**
         * @param service 
         * @virtual
         */
        vfunc_service_removed(service: MdnsService): void;

        // Methods
        get_service_type(): MdnsServiceType;

        /**
         * @returns services available to `browser`.
         */
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


    namespace MdnsPublisher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "name-collision": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            published: (arg0: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MdnsPublisher extends GObject.Object {
        static $gtype: GObject.GType<MdnsPublisher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MdnsPublisher.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<MdnsPublisher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MdnsPublisher;

        // Signals
        /** @signal */
        connect<K extends keyof MdnsPublisher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsPublisher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MdnsPublisher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsPublisher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MdnsPublisher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MdnsPublisher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param name 
         * @virtual
         */
        vfunc_name_collision(name: string): void;

        /**
         * @param name 
         * @virtual
         */
        vfunc_published(name: string): void;

        // Methods
        /**
         * @param name 
         * @param port 
         * @param type_of_service 
         * @param password_required 
         * @param txt_records 
         */
        publish(name: string, port: number, type_of_service: string, password_required: boolean, txt_records: string): boolean;

        /**
         * @param port 
         * @param name 
         */
        rename_at_port(port: number, name: string): boolean;

        /**
         * @param port 
         */
        withdraw(port: number): boolean;
    }


    namespace MdnsService {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::host": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::pair": (pspec: GObject.ParamSpec) => void;
            "notify::password-protected": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::service-name": (pspec: GObject.ParamSpec) => void;
            "notify::transport-protocol": (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class MdnsService extends GObject.Object {
        static $gtype: GObject.GType<MdnsService>;

        // Properties
        /**
         * @default null
         */
        get host(): string;
        set host(val: string);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * @default null
         */
        get pair(): string;
        set pair(val: string);

        /**
         * @default false
         */
        get password_protected(): boolean;
        set password_protected(val: boolean);

        /**
         * @default false
         */
        get passwordProtected(): boolean;
        set passwordProtected(val: boolean);

        /**
         * @default 0
         */
        get port(): number;
        set port(val: number);

        /**
         * @default null
         */
        get service_name(): string;
        set service_name(val: string);

        /**
         * @default null
         */
        get serviceName(): string;
        set serviceName(val: string);

        /**
         * @default 0
         */
        get transport_protocol(): number;
        set transport_protocol(val: number);

        /**
         * @default 0
         */
        get transportProtocol(): number;
        set transportProtocol(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MdnsService.SignalSignatures;

        // Fields
        object: GObject.Object;

        // Constructors
        constructor(properties?: Partial<MdnsService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MdnsService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsService.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MdnsService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MdnsService.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MdnsService.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MdnsService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Share {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            error: (arg0: null) => void;
            "notify::auth-method": (pspec: GObject.ParamSpec) => void;
            "notify::container-db": (pspec: GObject.ParamSpec) => void;
            "notify::db": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::revision-number": (pspec: GObject.ParamSpec) => void;
            "notify::server": (pspec: GObject.ParamSpec) => void;
            "notify::transcode-mimetype": (pspec: GObject.ParamSpec) => void;
            "notify::txt-records": (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    abstract class Share extends GObject.Object {
        static $gtype: GObject.GType<Share>;

        // Properties
        /**
         * @default 0
         */
        get auth_method(): number;
        set auth_method(val: number);

        /**
         * @default 0
         */
        get authMethod(): number;
        set authMethod(val: number);

        /**
         * @construct-only
         */
        get container_db(): ContainerDb;

        /**
         * @construct-only
         */
        get containerDb(): ContainerDb;

        /**
         * @construct-only
         */
        get db(): Db;

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * @default null
         */
        get password(): string;
        set password(val: string);

        /**
         * @default 0
         */
        get revision_number(): number;
        set revision_number(val: number);

        /**
         * @default 0
         */
        get revisionNumber(): number;
        set revisionNumber(val: number);

        /**
         * @read-only
         */
        get server(): Soup.Server;

        /**
         * @construct-only
         * @default null
         */
        get transcode_mimetype(): string;

        /**
         * @construct-only
         * @default null
         */
        get transcodeMimetype(): string;

        get txt_records(): string[];
        set txt_records(val: string[]);

        get txtRecords(): string[];
        set txtRecords(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Share.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Share.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Share.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Share.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Share.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Share.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Share.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Share.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Free the given filter list.
         * @param filter The filter list to free.
         */
        static free_filter(filter: GLib.SList[]): void;

        // Virtual methods
        /**
         * @param message 
         * @param path 
         * @virtual
         */
        vfunc_content_codes(message: Soup.ServerMessage, path: string): void;

        /**
         * @param message 
         * @param path 
         * @param query 
         * @virtual
         */
        vfunc_ctrl_int(message: Soup.ServerMessage, path: string, query: never): void;

        /**
         * @param server 
         * @param message 
         * @param path 
         * @param query 
         * @virtual
         */
        vfunc_databases(server: Soup.Server, message: Soup.ServerMessage, path: string, query: never): void;

        /**
         * @param msg 
         * @param path 
         * @param query 
         * @virtual
         */
        vfunc_databases_browse_xxx(msg: Soup.ServerMessage, path: string, query: never): void;

        /**
         * @param server 
         * @param msg 
         * @param path 
         * @virtual
         */
        vfunc_databases_items_xxx(server: Soup.Server, msg: Soup.ServerMessage, path: string): void;

        /**
         * @virtual
         */
        vfunc_get_desired_port(): number;

        /**
         * @virtual
         */
        vfunc_get_meta_data_map(): null;

        /**
         * @virtual
         */
        vfunc_get_type_of_service(): string;

        /**
         * @param message 
         * @param path 
         * @param query 
         * @virtual
         */
        vfunc_login(message: Soup.ServerMessage, path: string, query: never): void;

        /**
         * @param message 
         * @param path 
         * @param query 
         * @virtual
         */
        vfunc_logout(message: Soup.ServerMessage, path: string, query: never): void;

        /**
         * @param msg 
         * @virtual
         */
        vfunc_message_add_standard_headers(msg: Soup.ServerMessage): void;

        /**
         * @param publisher 
         * @param name 
         * @virtual
         */
        vfunc_name_collision(publisher: MdnsPublisher, name: string): void;

        /**
         * @param publisher 
         * @param name 
         * @virtual
         */
        vfunc_published(publisher: MdnsPublisher, name: string): void;

        /**
         * @param message 
         * @param path 
         * @virtual
         */
        vfunc_server_info(message: Soup.ServerMessage, path: string): void;

        /**
         * @param message 
         * @param path 
         * @param query 
         * @virtual
         */
        vfunc_update(message: Soup.ServerMessage, path: string, query: never): void;

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


    namespace TranscodeStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class TranscodeStream extends Gio.InputStream implements Gio.Seekable {
        static $gtype: GObject.GType<TranscodeStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TranscodeStream.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TranscodeStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](transcode_mimetype: string, src_stream: Gio.InputStream): TranscodeStream;

        // Signals
        /** @signal */
        connect<K extends keyof TranscodeStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TranscodeStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TranscodeStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TranscodeStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TranscodeStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TranscodeStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_kill_pipeline(): void;

        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @returns `true` if `seekable` can be seeked. `false` otherwise.
         */
        can_seek(): boolean;

        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @returns `true` if the stream can be truncated, `false` otherwise.
         */
        can_truncate(): boolean;

        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
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
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        seek(offset: bigint | number, type: GLib.SeekType, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;

        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        truncate(offset: bigint | number, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @virtual
         */
        vfunc_can_seek(): boolean;

        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @virtual
         */
        vfunc_can_truncate(): boolean;

        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
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
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Tells the current position within the stream.
         * @virtual
         */
        vfunc_tell(): bigint | number;

        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         * 
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_truncate_fn(offset: number, cancellable: Gio.Cancellable | null): boolean;
    }


    /**
     * @gir-type Alias
     */
    type AvConnectionClass = typeof AvConnection;

    /**
     * @gir-type Struct
     */
    abstract class AvConnectionPrivate {
        static $gtype: GObject.GType<AvConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AvRecordInterface = typeof AvRecord;

    /**
     * @gir-type Alias
     */
    type AvShareClass = typeof AvShare;

    /**
     * @gir-type Struct
     */
    abstract class AvSharePrivate {
        static $gtype: GObject.GType<AvSharePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ConnectionClass = typeof Connection;

    /**
     * @gir-type Struct
     */
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ContainerDbInterface = typeof ContainerDb;

    /**
     * @gir-type Alias
     */
    type ContainerRecordInterface = typeof ContainerRecord;

    /**
     * @gir-type Alias
     */
    type ControlConnectionClass = typeof ControlConnection;

    /**
     * @gir-type Struct
     */
    abstract class ControlConnectionPrivate {
        static $gtype: GObject.GType<ControlConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ControlPlayerInterface = typeof ControlPlayer;

    /**
     * @gir-type Alias
     */
    type ControlShareClass = typeof ControlShare;

    /**
     * @gir-type Struct
     */
    abstract class ControlSharePrivate {
        static $gtype: GObject.GType<ControlSharePrivate>;
    }


    /**
     * @gir-type Struct
     */
    class DbFilterDefinition {
        static $gtype: GObject.GType<DbFilterDefinition>;

        // Fields
        key: string;

        value: string;

        negate: boolean;

        // Constructors

        constructor(properties?: Partial<{
            key: string;
            value: string;
            negate: boolean;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type DbInterface = typeof Db;

    /**
     * @gir-type Struct
     */
    class HashContext {
        static $gtype: GObject.GType<HashContext>;

        // Fields
        buf: number[];

        bits: number[];

        "in": Uint8Array;

        version: number;

        // Constructors

        constructor(properties?: Partial<{
            buf: number[];
            bits: number[];
            "in": Uint8Array;
            version: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type ImageConnectionClass = typeof ImageConnection;

    /**
     * @gir-type Struct
     */
    abstract class ImageConnectionPrivate {
        static $gtype: GObject.GType<ImageConnectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ImageRecordInterface = typeof ImageRecord;

    /**
     * @gir-type Alias
     */
    type ImageShareClass = typeof ImageShare;

    /**
     * @gir-type Struct
     */
    abstract class ImageSharePrivate {
        static $gtype: GObject.GType<ImageSharePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MdnsBrowserClass = typeof MdnsBrowser;

    /**
     * @gir-type Struct
     */
    abstract class MdnsBrowserPrivate {
        static $gtype: GObject.GType<MdnsBrowserPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MdnsPublisherClass = typeof MdnsPublisher;

    /**
     * @gir-type Struct
     */
    abstract class MdnsPublisherPrivate {
        static $gtype: GObject.GType<MdnsPublisherPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MdnsServiceClass = typeof MdnsService;

    /**
     * @gir-type Struct
     */
    abstract class MdnsServicePrivate {
        static $gtype: GObject.GType<MdnsServicePrivate>;
    }


    /**
     * @gir-type Struct
     */
    class MetaDataMap {
        static $gtype: GObject.GType<MetaDataMap>;

        // Fields
        tag: string;

        md: number;

        // Constructors

        constructor(properties?: Partial<{
            tag: string;
            md: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class MlclBits {
        static $gtype: GObject.GType<MlclBits>;

        // Fields
        bits: Bits;

        share: Share;
    }


    /**
     * @gir-type Struct
     */
    class Playlist {
        static $gtype: GObject.GType<Playlist>;

        // Fields
        name: string;

        id: number;

        uris: null[];

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            id: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type RecordFactoryInterface = typeof RecordFactory;

    /**
     * @gir-type Alias
     */
    type RecordInterface = typeof Record;

    /**
     * @gir-type Alias
     */
    type ShareClass = typeof Share;

    /**
     * @gir-type Struct
     */
    abstract class SharePrivate {
        static $gtype: GObject.GType<SharePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TranscodeStreamClass = typeof TranscodeStream;

    /**
     * @gir-type Struct
     */
    abstract class TranscodeStreamPrivate {
        static $gtype: GObject.GType<TranscodeStreamPrivate>;
    }


    namespace AvRecord {
        /**
         * Interface for implementing AvRecord.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_itunes_compat(): boolean;

            /**
             * @virtual
             */
            vfunc_read(): Gio.InputStream;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bitrate: number;
            disc: number;
            duration: number;
            filesize: bigint | number;
            firstseen: number;
            format: string;
            has_video: boolean;
            hasVideo: boolean;
            hash: never[];
            location: string;
            mediakind: MediaKind;
            mtime: number;
            rating: number;
            songalbum: string;
            songalbumid: bigint | number;
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
        cmp_by_album(a: null, b: null, db: Db): number;
    }
    /**
     * @gir-type Interface
     */
    interface AvRecord extends GObject.Object, AvRecord.Interface {

        // Properties
        /**
         * @default 0
         */
        get bitrate(): number;
        set bitrate(val: number);

        /**
         * @default 0
         */
        get disc(): number;
        set disc(val: number);

        /**
         * @default 0
         */
        get duration(): number;
        set duration(val: number);

        /**
         * @default 0
         */
        get filesize(): number;
        set filesize(val: bigint | number);

        /**
         * @default 0
         */
        get firstseen(): number;
        set firstseen(val: number);

        /**
         * @default Unknown
         */
        get format(): string;
        set format(val: string);

        /**
         * @default false
         */
        get has_video(): boolean;
        set has_video(val: boolean);

        /**
         * @default false
         */
        get hasVideo(): boolean;
        set hasVideo(val: boolean);

        get hash(): null[];
        set hash(val: never[]);

        /**
         * @default null
         */
        get location(): string;
        set location(val: string);

        /**
         * @default Dmap.MediaKind.MUSIC
         */
        get mediakind(): MediaKind;
        set mediakind(val: MediaKind);

        /**
         * @default 0
         */
        get mtime(): number;
        set mtime(val: number);

        /**
         * @default 0
         */
        get rating(): number;
        set rating(val: number);

        /**
         * @default Unknown
         */
        get songalbum(): string;
        set songalbum(val: string);

        /**
         * @default 0
         */
        get songalbumid(): number;
        set songalbumid(val: bigint | number);

        /**
         * @default Unknown
         */
        get songartist(): string;
        set songartist(val: string);

        /**
         * @default Unknown
         */
        get songgenre(): string;
        set songgenre(val: string);

        /**
         * @default Unknown
         */
        get sort_album(): string;
        set sort_album(val: string);

        /**
         * @default Unknown
         */
        get sortAlbum(): string;
        set sortAlbum(val: string);

        /**
         * @default Unknown
         */
        get sort_artist(): string;
        set sort_artist(val: string);

        /**
         * @default Unknown
         */
        get sortArtist(): string;
        set sortArtist(val: string);

        /**
         * @default Unknown
         */
        get title(): string;
        set title(val: string);

        /**
         * @default 0
         */
        get track(): number;
        set track(val: number);

        /**
         * @default 0
         */
        get year(): number;
        set year(val: number);

        // Methods
        /**
         * @returns TRUE if record is compatible with iTunes, else FALSE.
         */
        itunes_compat(): boolean;

        /**
         * @returns A GInputStream that provides read-only access to the data stream associated with record.
         */
        read(): Gio.InputStream;
    }


    export const AvRecord: AvRecordNamespace & {
        new (): AvRecord; // This allows `obj instanceof AvRecord`
    };

    namespace ContainerDb {
        /**
         * Interface for implementing ContainerDb.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a record to the database.
             * @param record A record.
             * @virtual
             */
            vfunc_add(record: ContainerRecord): void;

            /**
             * @virtual
             */
            vfunc_count(): bigint | number;

            /**
             * Apply a function to each record in a container database.
             * @param func The function to apply to each record in the database.
             * @virtual
             */
            vfunc_foreach(func: IdContainerRecordFunc): void;

            /**
             * @param id A record ID.
             * @virtual
             */
            vfunc_lookup_by_id(id: number): ContainerRecord;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ContainerDbNamespace {
        $gtype: GObject.GType<ContainerDb>;
        prototype: ContainerDb;
    }
    /**
     * @gir-type Interface
     */
    interface ContainerDb extends GObject.Object, ContainerDb.Interface {

        // Methods
        /**
         * Add a record to the database.
         * @param record A record.
         */
        add(record: ContainerRecord): void;

        /**
         * @returns the number of records in the database.
         */
        count(): number;

        /**
         * Apply a function to each record in a container database.
         * @param func The function to apply to each record in the database.
         */
        foreach(func: IdContainerRecordFunc): void;

        /**
         * @param id A record ID.
         * @returns the database record corresponding to `id`. This record should be unrefed when no longer required.
         */
        lookup_by_id(id: number): ContainerRecord;
    }


    export const ContainerDb: ContainerDbNamespace & {
        new (): ContainerDb; // This allows `obj instanceof ContainerDb`
    };

    namespace ContainerRecord {
        /**
         * Interface for implementing ContainerRecord.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a record to the database. It is assumed that the record is placed
             * directly into the database (not copied) and not freed.
             * @param record A DmapRecord.
             * @param id The record's ID.
             * @virtual
             */
            vfunc_add_entry(record: Record, id: number): void;

            /**
             * @virtual
             */
            vfunc_get_entries(): Db;

            /**
             * @virtual
             */
            vfunc_get_entry_count(): bigint | number;

            /**
             * @virtual
             */
            vfunc_get_id(): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    export interface ContainerRecordNamespace {
        $gtype: GObject.GType<ContainerRecord>;
        prototype: ContainerRecord;
    }
    /**
     * @gir-type Interface
     */
    interface ContainerRecord extends GObject.Object, ContainerRecord.Interface {

        // Properties
        /**
         * @default null
         */
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

        /**
         * @returns A pointer to a DmapDb containing the entries contained in record.
         */
        get_entries(): Db;

        /**
         * @returns the number of records in the container record.
         */
        get_entry_count(): number;

        /**
         * @returns the ID for the given record.
         */
        get_id(): number;
    }


    export const ContainerRecord: ContainerRecordNamespace & {
        new (): ContainerRecord; // This allows `obj instanceof ContainerRecord`
    };

    namespace ControlPlayer {
        /**
         * Interface for implementing ControlPlayer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_cue_clear(): void;

            /**
             * @param records a list of records
             * @param index an index
             * @virtual
             */
            vfunc_cue_play(records: Record[], index: number): void;

            /**
             * @virtual
             */
            vfunc_next_item(): void;

            /**
             * @param width width
             * @param height height
             * @virtual
             */
            vfunc_now_playing_artwork(width: number, height: number): string;

            /**
             * @virtual
             */
            vfunc_now_playing_record(): AvRecord;

            /**
             * @virtual
             */
            vfunc_pause(): void;

            /**
             * @virtual
             */
            vfunc_play_pause(): void;

            /**
             * @virtual
             */
            vfunc_prev_item(): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            play_state: ControlPlayState;
            playState: ControlPlayState;
            playing_time: bigint | number;
            playingTime: bigint | number;
            repeat_state: ControlRepeatState;
            repeatState: ControlRepeatState;
            shuffle_state: boolean;
            shuffleState: boolean;
            volume: bigint | number;
        }
    }

    export interface ControlPlayerNamespace {
        $gtype: GObject.GType<ControlPlayer>;
        prototype: ControlPlayer;
    }
    /**
     * @gir-type Interface
     */
    interface ControlPlayer extends GObject.Object, ControlPlayer.Interface {

        // Properties
        /**
         * @default Dmap.ControlPlayState.STOPPED
         */
        get play_state(): ControlPlayState;
        set play_state(val: ControlPlayState);

        /**
         * @default Dmap.ControlPlayState.STOPPED
         */
        get playState(): ControlPlayState;
        set playState(val: ControlPlayState);

        /**
         * @default 0
         */
        get playing_time(): number;
        set playing_time(val: bigint | number);

        /**
         * @default 0
         */
        get playingTime(): number;
        set playingTime(val: bigint | number);

        /**
         * @default Dmap.ControlRepeatState.NONE
         */
        get repeat_state(): ControlRepeatState;
        set repeat_state(val: ControlRepeatState);

        /**
         * @default Dmap.ControlRepeatState.NONE
         */
        get repeatState(): ControlRepeatState;
        set repeatState(val: ControlRepeatState);

        /**
         * @default false
         */
        get shuffle_state(): boolean;
        set shuffle_state(val: boolean);

        /**
         * @default false
         */
        get shuffleState(): boolean;
        set shuffleState(val: boolean);

        /**
         * @default 0
         */
        get volume(): number;
        set volume(val: bigint | number);

        // Methods
        cue_clear(): void;

        /**
         * @param records a list of records
         * @param index an index
         */
        cue_play(records: Record[], index: number): void;

        next_item(): void;

        /**
         * @param width width
         * @param height height
         * @returns artwork for the currently playing record.
         */
        now_playing_artwork(width: number, height: number): string;

        /**
         * @returns the currently playing record.
         */
        now_playing_record(): AvRecord;

        pause(): void;

        play_pause(): void;

        prev_item(): void;
    }


    export const ControlPlayer: ControlPlayerNamespace & {
        new (): ControlPlayer; // This allows `obj instanceof ControlPlayer`
    };

    namespace Db {
        /**
         * Interface for implementing Db.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Add a record to the database.
             * @param record A database record.
             * @virtual
             */
            vfunc_add(record: Record): number;

            /**
             * Create a record and add it to the database.
             * @param path A path to an appropriate media file.
             * @virtual
             */
            vfunc_add_path(path: string): number;

            /**
             * Add a record to the database and assign it the given ID. `id` cannot be
             * `DMAP_DB_ID_BAD`.
             * @param record A database record.
             * @param id A database record ID.
             * @virtual
             */
            vfunc_add_with_id(record: Record, id: number): number;

            /**
             * @virtual
             */
            vfunc_count(): bigint | number;

            /**
             * Apply a function to each record in a media database.
             * @param func The function to apply to each record in the database.
             * @virtual
             */
            vfunc_foreach(func: IdRecordFunc): void;

            /**
             * @param id A record ID.
             * @virtual
             */
            vfunc_lookup_by_id(id: number): Record;

            /**
             * @param location A record location.
             * @virtual
             */
            vfunc_lookup_id_by_location(location: string): number;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DbNamespace {
        $gtype: GObject.GType<Db>;
        prototype: Db;
    }
    /**
     * @gir-type Interface
     */
    interface Db extends GObject.Object, Db.Interface {

        // Methods
        /**
         * Add a record to the database.
         * @param record A database record.
         * @returns The ID for the newly added record or `DMAP_DB_ID_BAD` on failure. A reference to the record will be retained by the database (if required; an adapter-type implementation might not want to retain a reference as the record data may be placed elsewhere). In all cases, a returned record should be unrefed by the calling code.
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

        /**
         * @param filter_def A series of filter definitions.
         * @returns the records which satisfy a record in `filter_def`.
         */
        apply_filter(filter_def: DbFilterDefinition[]): { [key: number]: Record };

        /**
         * @returns the number of records in the database.
         */
        count(): number;

        /**
         * Apply a function to each record in a media database.
         * @param func The function to apply to each record in the database.
         */
        foreach(func: IdRecordFunc): void;

        /**
         * @param id A record ID.
         * @returns the database record corresponding to `id`. `id` cannot be DMAP_DB_ID_BAD. The returned record should be unrefed by the calling code when no longer required. If you are implementing a full database using this API, then you probably want to increment the reference count before returning a record pointer. On the other hand, if you are implementing an adapter class and the records are stored elsewhere, then you will probably return a transient record. That is, once the user is done using it, the returned record should be free'd because it is a adapter copy of the real record. In this case, the reference count should not be incremented before returning a record pointer.
         */
        lookup_by_id(id: number): Record;

        /**
         * @param location A record location.
         * @returns the database id for the record corresponding to `path` or DMAP_DB_ID_BAD if such a record does not exist.
         */
        lookup_id_by_location(location: string): number;
    }


    export const Db: DbNamespace & {
        new (): Db; // This allows `obj instanceof Db`
    };

    namespace ImageRecord {
        /**
         * Interface for implementing ImageRecord.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @virtual
             */
            vfunc_read(): Gio.InputStream;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            aspect_ratio: string;
            aspectRatio: string;
            comments: string;
            creation_date: number;
            creationDate: number;
            filename: string;
            format: string;
            hash: never[];
            large_filesize: number;
            largeFilesize: number;
            location: string;
            pixel_height: number;
            pixelHeight: number;
            pixel_width: number;
            pixelWidth: number;
            rating: number;
            thumbnail: never[];
        }
    }

    export interface ImageRecordNamespace {
        $gtype: GObject.GType<ImageRecord>;
        prototype: ImageRecord;
    }
    /**
     * @gir-type Interface
     */
    interface ImageRecord extends GObject.Object, ImageRecord.Interface {

        // Properties
        /**
         * @default null
         */
        get aspect_ratio(): string;
        set aspect_ratio(val: string);

        /**
         * @default null
         */
        get aspectRatio(): string;
        set aspectRatio(val: string);

        /**
         * @default null
         */
        get comments(): string;
        set comments(val: string);

        /**
         * @default 0
         */
        get creation_date(): number;
        set creation_date(val: number);

        /**
         * @default 0
         */
        get creationDate(): number;
        set creationDate(val: number);

        /**
         * @default null
         */
        get filename(): string;
        set filename(val: string);

        /**
         * @default null
         */
        get format(): string;
        set format(val: string);

        get hash(): null[];
        set hash(val: never[]);

        /**
         * @default 0
         */
        get large_filesize(): number;
        set large_filesize(val: number);

        /**
         * @default 0
         */
        get largeFilesize(): number;
        set largeFilesize(val: number);

        /**
         * @default null
         */
        get location(): string;
        set location(val: string);

        /**
         * @default 0
         */
        get pixel_height(): number;
        set pixel_height(val: number);

        /**
         * @default 0
         */
        get pixelHeight(): number;
        set pixelHeight(val: number);

        /**
         * @default 0
         */
        get pixel_width(): number;
        set pixel_width(val: number);

        /**
         * @default 0
         */
        get pixelWidth(): number;
        set pixelWidth(val: number);

        /**
         * @default 0
         */
        get rating(): number;
        set rating(val: number);

        get thumbnail(): null[];
        set thumbnail(val: never[]);

        // Methods
        /**
         * @returns a GInputStream that provides read-only access to the data stream associated with record.
         */
        read(): Gio.InputStream;
    }


    export const ImageRecord: ImageRecordNamespace & {
        new (): ImageRecord; // This allows `obj instanceof ImageRecord`
    };

    namespace Record {
        /**
         * Interface for implementing Record.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param blob A byte array representation of a record.
             * @virtual
             */
            vfunc_set_from_blob(blob: Uint8Array): boolean;

            /**
             * @virtual
             */
            vfunc_to_blob(): Uint8Array | string;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordNamespace {
        $gtype: GObject.GType<Record>;
        prototype: Record;
    }
    /**
     * @gir-type Interface
     */
    interface Record extends GObject.Object, Record.Interface {

        // Methods
        /**
         * @param blob A byte array representation of a record.
         * @returns True on success, else false.
         */
        set_from_blob(blob: Uint8Array | string): boolean;

        /**
         * @returns A byte array representation of the record.
         */
        to_blob(): Uint8Array;
    }


    export const Record: RecordNamespace & {
        new (): Record; // This allows `obj instanceof Record`
    };

    namespace RecordFactory {
        /**
         * Interface for implementing RecordFactory.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param user_data Some piece of data that may be used to initialize return value.
             * @virtual
             */
            vfunc_create(user_data: null): Record;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RecordFactoryNamespace {
        $gtype: GObject.GType<RecordFactory>;
        prototype: RecordFactory;
    }
    /**
     * @gir-type Interface
     */
    interface RecordFactory extends GObject.Object, RecordFactory.Interface {

        // Methods
        /**
         * @param user_data Some piece of data that may be used to initialize return value.
         * @returns a new DmapRecord, else NULL with error set.
         */
        create(user_data: null): Record;
    }


    export const RecordFactory: RecordFactoryNamespace & {
        new (): RecordFactory; // This allows `obj instanceof RecordFactory`
    };

    /**
     * @gir-type Alias
     */
    type Bits = bigint | number;

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
