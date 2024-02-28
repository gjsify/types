/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dmap-3.0-ambient.d.ts';
import './dmap-3.0-import.d.ts';
/**
 * DMAP-3.0
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace DMAP {
    enum ConnectionState {
        GET_INFO,
        LOGIN,
        GET_REVISION_NUMBER,
        GET_DB_INFO,
        GET_SONGS,
        GET_PLAYLISTS,
        GET_PLAYLIST_ENTRIES,
        LOGOUT,
        DONE,
    }
    enum ContentCode {
        CC_INVALID,
        RAW,
        CC_MDCL,
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
        CC_AESV,
        CC_AEHV,
        CC_AESP,
        CC_AEPP,
        CC_AEPS,
        CC_AESG,
        CC_AEMK,
        CC_AEFP,
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
    class MdnsBrowserError extends GLib.Error {
        // Own fields of DMAP-3.0.MdnsBrowserError

        NOT_RUNNING: number;
        FAILED: number;

        // Constructors of DMAP-3.0.MdnsBrowserError

        constructor(options: { message: string; code: number });

        // Owm methods of DMAP-3.0.MdnsBrowserError

        static quark(): GLib.Quark;
    }

    enum MdnsBrowserServiceType {
        INVALID,
        DAAP,
        DPAP,
        DACP,
        RAOP,
        LAST,
    }
    enum MdnsBrowserTransportProtocol {
        TCP,
        UDP,
        LAST,
    }
    class MdnsPublisherError extends GLib.Error {
        // Own fields of DMAP-3.0.MdnsPublisherError

        NOT_RUNNING: number;
        FAILED: number;

        // Constructors of DMAP-3.0.MdnsPublisherError

        constructor(options: { message: string; code: number });

        // Owm methods of DMAP-3.0.MdnsPublisherError

        static quark(): GLib.Quark;
    }

    enum MediaKind {
        MUSIC,
        MOVIE,
        PODCAST,
        TV_SHOW,
    }
    enum Type {
        BYTE,
        SIGNED_INT,
        SHORT,
        INT,
        INT64,
        STRING,
        DATE,
        VERSION,
        CONTAINER,
        POINTER,
    }
    const HASH_SIZE: number;
    const STATUS_OK: number;
    function content_code_dmap_type(code: ContentCode): Type;
    function content_code_name(code: ContentCode): string;
    function content_code_read_from_buffer(buf: string): ContentCode;
    function content_code_string(code: ContentCode): string;
    function content_code_string_as_int32(str: string): number;
    function content_codes(number: number): ContentCodeDefinition;
    function hash_generate(
        version_major: number,
        url: number,
        hash_select: number,
        out: number,
        request_id: number,
    ): void;
    function hash_progressive_final(context: HashContext, digest: number): void;
    function hash_progressive_init(context: HashContext): void;
    function hash_progressive_to_string(digest: number, string: string): void;
    function hash_progressive_update(context: HashContext, buffer: number, length: number): void;
    function mdns_browser_error_quark(): GLib.Quark;
    function mdns_publisher_error_quark(): GLib.Quark;
    function mime_to_format(transcode_mimetype: string): string;
    function structure_destroy(structure: GLib.Node): void;
    function structure_get_size(structure: GLib.Node): number;
    function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void;
    function structure_print(structure: GLib.Node): void;
    function structure_serialize(structure: GLib.Node, length: number): string;
    interface ConnectionCallback {
        (connection: Connection, result: boolean, reason: string): boolean;
    }
    interface ResponseHandler {
        (connection: Connection, status: number, structure: GLib.Node): void;
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

        interface OperationDone {
            (): void;
        }

        // Constructor properties interface
    }

    class Connection extends GObject.Object {
        // Own properties of DMAP-3.0.Connection

        base_uri: any;
        baseUri: any;
        database_id: number;
        databaseId: number;
        db: any;
        dmap_version: number;
        dmapVersion: number;
        factory: any;
        host: string;
        name: string;
        password: string;
        port: number;
        revision_number: number;
        revisionNumber: number;
        session_id: number;
        sessionId: number;
        username: string;

        // Owm methods of DMAP-3.0.Connection

        /**
         * Attach an authentication credential to a request. This
         * method should be called by a function that is connected to the
         * #DMAPConnection::authenticate signal. The signal will provide the
         * connection, session, message and auth to that function. That function
         * should obtain a password and provide it to this method.
         * @param session A #SoupSession
         * @param message A #SoupMessage
         * @param auth A #SoupAuth
         * @param password A password
         */
        authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void;
        get_headers(uri: string): Soup.MessageHeaders;
        is_connected(): boolean;
        setup(): void;
    }

    module GstInputStream {
        // Constructor properties interface
    }

    class GstInputStream extends Gio.InputStream {
        // Constructors of DMAP-3.0.GstInputStream

        static ['new'](transcode_mimetype: string, src_stream: Gio.InputStream): GstInputStream;
    }

    module MdnsBrowser {
        // Signal callback interfaces

        interface ServiceAdded {
            (service: any): void;
        }

        interface ServiceRemoved {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class MdnsBrowser extends GObject.Object {
        // Own fields of DMAP-3.0.MdnsBrowser

        object: GObject.Object;

        // Constructors of DMAP-3.0.MdnsBrowser

        static ['new'](type: MdnsBrowserServiceType): MdnsBrowser;

        // Owm methods of DMAP-3.0.MdnsBrowser

        get_service_type(): MdnsBrowserServiceType;
        /**
         * Starts a DMAPMdnsBrowser.
         * @returns TRUE on success, else FALSE.
         */
        start(): boolean;
        /**
         * Stops a DMAPMdnsBrowser.
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
        // Own fields of DMAP-3.0.MdnsPublisher

        object: GObject.Object;

        // Constructors of DMAP-3.0.MdnsPublisher

        static ['new'](): MdnsPublisher;

        // Owm methods of DMAP-3.0.MdnsPublisher

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

    module Share {
        // Constructor properties interface
    }

    abstract class Share extends GObject.Object {
        // Own properties of DMAP-3.0.Share

        auth_method: number;
        authMethod: number;
        container_db: any;
        containerDb: any;
        db: any;
        name: string;
        password: string;
        revision_number: number;
        revisionNumber: number;
        readonly server_ipv4: Soup.Server;
        readonly serverIpv4: Soup.Server;
        readonly server_ipv6: Soup.Server;
        readonly serverIpv6: Soup.Server;
        transcode_mimetype: string;
        transcodeMimetype: string;
        txt_records: string[];
        txtRecords: string[];
    }

    class ConnectionClass {}

    class ConnectionPrivate {}

    class ContainerDbIface {}

    class ContainerRecordIface {}

    class ContentCodeDefinition {
        // Own fields of DMAP-3.0.ContentCodeDefinition

        code: ContentCode;
        int_code: number;
        name: string;
        string: string;
        type: Type;
    }

    class DbFilterDefinition {
        // Own fields of DMAP-3.0.DbFilterDefinition

        key: string;
        value: string;
        negate: boolean;

        // Constructors of DMAP-3.0.DbFilterDefinition

        constructor(
            properties?: Partial<{
                key: string;
                value: string;
                negate: boolean;
            }>,
        );
    }

    class DbIface {}

    class GstInputStreamClass {}

    class GstInputStreamPrivate {}

    class HashContext {
        // Own fields of DMAP-3.0.HashContext

        buf: number[];
        bits: number[];
        'in': number[];
        version: number;

        // Constructors of DMAP-3.0.HashContext

        constructor(
            properties?: Partial<{
                buf: number[];
                bits: number[];
                in: number[];
                version: number;
            }>,
        );
    }

    class MdnsBrowserClass {}

    class MdnsBrowserPrivate {}

    class MdnsBrowserService {
        // Own fields of DMAP-3.0.MdnsBrowserService

        service_name: string;
        name: string;
        host: string;
        port: number;
        password_protected: boolean;
        pair: string;
        transport_protocol: MdnsBrowserTransportProtocol;
    }

    class MdnsPublisherClass {}

    class MdnsPublisherPrivate {}

    class MetaDataMap {
        // Own fields of DMAP-3.0.MetaDataMap

        tag: string;
        md: number;

        // Constructors of DMAP-3.0.MetaDataMap

        constructor(
            properties?: Partial<{
                tag: string;
                md: number;
            }>,
        );
    }

    class Playlist {
        // Own fields of DMAP-3.0.Playlist

        name: string;
        id: number;
        uris: any[];

        // Constructors of DMAP-3.0.Playlist

        constructor(
            properties?: Partial<{
                name: string;
                id: number;
            }>,
        );
    }

    class RecordFactoryIface {}

    class RecordIface {}

    class ShareClass {}

    class SharePrivate {}

    class StructureItem {
        // Own fields of DMAP-3.0.StructureItem

        content_code: ContentCode;
        size: number;
    }

    interface ContainerDb {
        // Owm methods of DMAP-3.0.ContainerDb

        /**
         * Add a record to the database.
         * @param record A record.
         */
        add(record: ContainerRecord): void;
        count(): number;

        // Own virtual methods of DMAP-3.0.ContainerDb

        /**
         * Add a record to the database.
         * @param record A record.
         */
        vfunc_add(record: ContainerRecord): void;
        vfunc_count(): number;
    }

    interface ContainerRecord {
        // Own properties of DMAP-3.0.ContainerRecord

        name: string;

        // Owm methods of DMAP-3.0.ContainerRecord

        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DMAPRecord.
         * @param id The record's ID.
         */
        add_entry(record: Record, id: number): void;
        get_entry_count(): number;
        get_id(): number;

        // Own virtual methods of DMAP-3.0.ContainerRecord

        /**
         * Add a record to the database. It is assumed that the record is placed
         * directly into the database (not copied) and not freed.
         * @param record A DMAPRecord.
         * @param id The record's ID.
         */
        vfunc_add_entry(record: Record, id: number): void;
        vfunc_get_entry_count(): number;
        vfunc_get_id(): number;
    }

    interface Db {
        // Owm methods of DMAP-3.0.Db

        /**
         * Add a record to the database.
         * @param record A database record.
         * @returns The ID for the newly added record. A reference to the record will be retained by the database (if required; an adapter-type implementation may not want to retain a reference as the record data may be placed elsewhere). In all cases, the record should be unrefed by the calling code.
         */
        add(record: Record): number;
        /**
         * Create a record and add it to the database.
         * @param path A path to an appropriate media file.
         * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
         */
        add_path(path: string): number;
        /**
         * Add a record to the database and assign it the given ID.
         * @param record A database record.
         * @param id A database record ID.
         * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
         */
        add_with_id(record: Record, id: number): number;
        count(): number;
        lookup_id_by_location(location: string): number;

        // Own virtual methods of DMAP-3.0.Db

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
         * Add a record to the database and assign it the given ID.
         * @param record A database record.
         * @param id A database record ID.
         */
        vfunc_add_with_id(record: Record, id: number): number;
        vfunc_count(): number;
        vfunc_lookup_id_by_location(location: string): number;
    }

    interface Record {
        // Owm methods of DMAP-3.0.Record

        set_from_blob(blob: Uint8Array): boolean;

        // Own virtual methods of DMAP-3.0.Record

        vfunc_set_from_blob(blob: Uint8Array): boolean;
    }

    interface RecordFactory {}

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

export default DMAP;
// END
