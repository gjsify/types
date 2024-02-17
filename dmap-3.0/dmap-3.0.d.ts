
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
enum MdnsBrowserError {
    NOT_RUNNING,
    FAILED,
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
enum MdnsPublisherError {
    NOT_RUNNING,
    FAILED,
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
const HASH_SIZE: number
const STATUS_OK: number
function content_code_dmap_type(code: ContentCode): Type
function content_code_name(code: ContentCode): string
function content_code_read_from_buffer(buf: string): ContentCode
function content_code_string(code: ContentCode): string
function content_code_string_as_int32(str: string): number
function content_codes(number: number): ContentCodeDefinition
function hash_generate(version_major: number, url: number, hash_select: number, out: number, request_id: number): void
function hash_progressive_final(context: HashContext, digest: number): void
function hash_progressive_init(context: HashContext): void
function hash_progressive_to_string(digest: number, string: string | null): void
function hash_progressive_update(context: HashContext, buffer: number, length: number): void
function mdns_browser_error_quark(): GLib.Quark
function mdns_publisher_error_quark(): GLib.Quark
function mime_to_format(transcode_mimetype: string): string | null
function structure_destroy(structure: GLib.Node): void
function structure_get_size(structure: GLib.Node): number
function structure_increase_by_predicted_size(structure: GLib.Node, size: number): void
function structure_print(structure: GLib.Node): void
function structure_serialize(structure: GLib.Node, length: number): string | null
interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
module ContainerDb {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ContainerDb {

    // Owm methods of DMAP-3.0.DMAP.ContainerDb

    /**
     * Add a record to the database.
     * @param record A record.
     */
    add(record: ContainerRecord): void
    count(): number

    // Own virtual methods of DMAP-3.0.DMAP.ContainerDb

    /**
     * Add a record to the database.
     * @virtual 
     * @param record A record.
     */
    vfunc_add(record: ContainerRecord): void
    vfunc_count(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerDb

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContainerDb extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerDb

    static name: string
    static $gtype: GObject.GType<ContainerDb>

    // Constructors of DMAP-3.0.DMAP.ContainerDb

    constructor(config?: ContainerDb.ConstructorProperties) 
    _init(config?: ContainerDb.ConstructorProperties): void
}

module ContainerRecord {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of DMAP-3.0.DMAP.ContainerRecord

        name?: string | null
    }

}

interface ContainerRecord {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    name: string | null

    // Owm methods of DMAP-3.0.DMAP.ContainerRecord

    /**
     * Add a record to the database. It is assumed that the record is placed
     * directly into the database (not copied) and not freed.
     * @param record A DMAPRecord.
     * @param id The record's ID.
     */
    add_entry(record: Record, id: number): void
    get_entry_count(): number
    get_id(): number

    // Own virtual methods of DMAP-3.0.DMAP.ContainerRecord

    /**
     * Add a record to the database. It is assumed that the record is placed
     * directly into the database (not copied) and not freed.
     * @virtual 
     * @param record A DMAPRecord.
     * @param id The record's ID.
     */
    vfunc_add_entry(record: Record, id: number): void
    vfunc_get_entry_count(): number
    vfunc_get_id(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerRecord

    connect(sigName: "notify::name", callback: (($obj: ContainerRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ContainerRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ContainerRecord extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    static name: string
    static $gtype: GObject.GType<ContainerRecord>

    // Constructors of DMAP-3.0.DMAP.ContainerRecord

    constructor(config?: ContainerRecord.ConstructorProperties) 
    _init(config?: ContainerRecord.ConstructorProperties): void
}

module Db {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Db {

    // Owm methods of DMAP-3.0.DMAP.Db

    /**
     * Add a record to the database.
     * @param record A database record.
     * @returns The ID for the newly added record. A reference to the record will be retained by the database (if required; an adapter-type implementation may not want to retain a reference as the record data may be placed elsewhere). In all cases, the record should be unrefed by the calling code.
     */
    add(record: Record): number
    /**
     * Create a record and add it to the database.
     * @param path A path to an appropriate media file.
     * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
     */
    add_path(path: string): number
    /**
     * Add a record to the database and assign it the given ID.
     * @param record A database record.
     * @param id A database record ID.
     * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
     */
    add_with_id(record: Record, id: number): number
    count(): number
    lookup_id_by_location(location: string): number

    // Own virtual methods of DMAP-3.0.DMAP.Db

    /**
     * Add a record to the database.
     * @virtual 
     * @param record A database record.
     * @returns The ID for the newly added record. A reference to the record will be retained by the database (if required; an adapter-type implementation may not want to retain a reference as the record data may be placed elsewhere). In all cases, the record should be unrefed by the calling code.
     */
    vfunc_add(record: Record): number
    /**
     * Create a record and add it to the database.
     * @virtual 
     * @param path A path to an appropriate media file.
     * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
     */
    vfunc_add_path(path: string): number
    /**
     * Add a record to the database and assign it the given ID.
     * @virtual 
     * @param record A database record.
     * @param id A database record ID.
     * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
     */
    vfunc_add_with_id(record: Record, id: number): number
    vfunc_count(): number
    vfunc_lookup_id_by_location(location: string): number

    // Class property signals of DMAP-3.0.DMAP.Db

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Db extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Db

    static name: string
    static $gtype: GObject.GType<Db>

    // Constructors of DMAP-3.0.DMAP.Db

    constructor(config?: Db.ConstructorProperties) 
    _init(config?: Db.ConstructorProperties): void
}

module Record {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Record {

    // Owm methods of DMAP-3.0.DMAP.Record

    set_from_blob(blob: Uint8Array): boolean

    // Own virtual methods of DMAP-3.0.DMAP.Record

    vfunc_set_from_blob(blob: Uint8Array): boolean

    // Class property signals of DMAP-3.0.DMAP.Record

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Record extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Record

    static name: string
    static $gtype: GObject.GType<Record>

    // Constructors of DMAP-3.0.DMAP.Record

    constructor(config?: Record.ConstructorProperties) 
    _init(config?: Record.ConstructorProperties): void
}

module RecordFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RecordFactory {

    // Class property signals of DMAP-3.0.DMAP.RecordFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RecordFactory extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.RecordFactory

    static name: string
    static $gtype: GObject.GType<RecordFactory>

    // Constructors of DMAP-3.0.DMAP.RecordFactory

    constructor(config?: RecordFactory.ConstructorProperties) 
    _init(config?: RecordFactory.ConstructorProperties): void
}

module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    interface AuthenticateSignalCallback {
        ($obj: Connection, object: string | null, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    }

    /**
     * Signal callback interface for `connected`
     */
    interface ConnectedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `connecting`
     */
    interface ConnectingSignalCallback {
        ($obj: Connection, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        ($obj: Connection): void
    }

    /**
     * Signal callback interface for `operation-done`
     */
    interface OperationDoneSignalCallback {
        ($obj: Connection): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of DMAP-3.0.DMAP.Connection

        baseUri?: any | null
        databaseId?: number | null
        db?: any | null
        dmapVersion?: number | null
        factory?: any | null
        host?: string | null
        name?: string | null
        password?: string | null
        port?: number | null
        revisionNumber?: number | null
        sessionId?: number | null
        username?: string | null
    }

}

interface Connection {

    // Own properties of DMAP-3.0.DMAP.Connection

    baseUri: any
    databaseId: number
    readonly db: any
    dmapVersion: number
    readonly factory: any
    readonly host: string | null
    readonly name: string | null
    password: string | null
    readonly port: number
    revisionNumber: number
    sessionId: number
    readonly username: string | null

    // Own fields of DMAP-3.0.DMAP.Connection

    parent: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of DMAP-3.0.DMAP.Connection

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
    authenticate_message(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    get_headers(uri: string): Soup.MessageHeaders
    is_connected(): boolean
    setup(): void

    // Own virtual methods of DMAP-3.0.DMAP.Connection

    vfunc_authenticate(name: string): string | null
    vfunc_connected(): void
    vfunc_connecting(state: ConnectionState, progress: number): void
    vfunc_disconnected(): void
    vfunc_get_protocol_version_cc(): ContentCode
    vfunc_get_query_metadata(): string | null
    vfunc_operation_done(): void

    // Own signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): number
    connect_after(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): number
    emit(sigName: "authenticate", object: string | null, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean, ...args: any[]): void
    connect(sigName: "connected", callback: Connection.ConnectedSignalCallback): number
    connect_after(sigName: "connected", callback: Connection.ConnectedSignalCallback): number
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "connecting", callback: Connection.ConnectingSignalCallback): number
    connect_after(sigName: "connecting", callback: Connection.ConnectingSignalCallback): number
    emit(sigName: "connecting", object: number, p0: number, ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): number
    connect_after(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): number
    emit(sigName: "operation-done", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "notify::base-uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::database-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::database-id", ...args: any[]): void
    connect(sigName: "notify::db", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::db", ...args: any[]): void
    connect(sigName: "notify::dmap-version", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dmap-version", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dmap-version", ...args: any[]): void
    connect(sigName: "notify::factory", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factory", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::revision-number", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision-number", ...args: any[]): void
    connect(sigName: "notify::session-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session-id", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Connection extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of DMAP-3.0.DMAP.Connection

    constructor(config?: Connection.ConstructorProperties) 
    _init(config?: Connection.ConstructorProperties): void
}

module GstInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Gio.InputStream.ConstructorProperties {
    }

}

interface GstInputStream extends Gio.Seekable {

    // Own fields of DMAP-3.0.DMAP.GstInputStream

    parent: Gio.InputStream
    priv: GstInputStreamPrivate

    // Own virtual methods of DMAP-3.0.DMAP.GstInputStream

    vfunc_kill_pipeline(): void

    // Class property signals of DMAP-3.0.DMAP.GstInputStream

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GstInputStream extends Gio.InputStream {

    // Own properties of DMAP-3.0.DMAP.GstInputStream

    static name: string
    static $gtype: GObject.GType<GstInputStream>

    // Constructors of DMAP-3.0.DMAP.GstInputStream

    constructor(config?: GstInputStream.ConstructorProperties) 
    constructor(transcode_mimetype: string, src_stream: Gio.InputStream) 
    static new(transcode_mimetype: string, src_stream: Gio.InputStream): GstInputStream
    _init(config?: GstInputStream.ConstructorProperties): void
}

module MdnsBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `service-added`
     */
    interface ServiceAddedSignalCallback {
        ($obj: MdnsBrowser, service: any): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    interface ServiceRemovedSignalCallback {
        ($obj: MdnsBrowser, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MdnsBrowser {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowser

    object: GObject.Object
    priv: MdnsBrowserPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsBrowser

    get_service_type(): MdnsBrowserServiceType
    /**
     * Starts a DMAPMdnsBrowser.
     * @returns TRUE on success, else FALSE.
     */
    start(): boolean
    /**
     * Stops a DMAPMdnsBrowser.
     * @returns TRUE on success, else FALSE.
     */
    stop(): boolean

    // Own virtual methods of DMAP-3.0.DMAP.MdnsBrowser

    vfunc_service_added(service: MdnsBrowserService): void
    vfunc_service_removed(service: MdnsBrowserService): void

    // Own signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): number
    connect_after(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): number
    emit(sigName: "service-added", service: any, ...args: any[]): void
    connect(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): number
    connect_after(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): number
    emit(sigName: "service-removed", object: string | null, ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MdnsBrowser extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowser

    static name: string
    static $gtype: GObject.GType<MdnsBrowser>

    // Constructors of DMAP-3.0.DMAP.MdnsBrowser

    constructor(config?: MdnsBrowser.ConstructorProperties) 
    /**
     * Creates a new mDNS browser.
     * @constructor 
     * @param type The type of service to browse.
     * @returns a pointer to a DMAPMdnsBrowser.
     */
    constructor(type: MdnsBrowserServiceType) 
    /**
     * Creates a new mDNS browser.
     * @constructor 
     * @param type The type of service to browse.
     * @returns a pointer to a DMAPMdnsBrowser.
     */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    _init(config?: MdnsBrowser.ConstructorProperties): void
}

module MdnsPublisher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `name-collision`
     */
    interface NameCollisionSignalCallback {
        ($obj: MdnsPublisher, object: string | null): void
    }

    /**
     * Signal callback interface for `published`
     */
    interface PublishedSignalCallback {
        ($obj: MdnsPublisher, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MdnsPublisher {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisher

    object: GObject.Object
    priv: MdnsPublisherPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsPublisher

    publish(name: string, port: number, type_of_service: string, password_required: boolean, txt_records: string | null): boolean
    rename_at_port(port: number, name: string): boolean
    withdraw(port: number): boolean

    // Own virtual methods of DMAP-3.0.DMAP.MdnsPublisher

    vfunc_name_collision(name: string): void
    vfunc_published(name: string): void

    // Own signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): number
    connect_after(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): number
    emit(sigName: "name-collision", object: string | null, ...args: any[]): void
    connect(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): number
    connect_after(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): number
    emit(sigName: "published", object: string | null, ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MdnsPublisher extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisher

    static name: string
    static $gtype: GObject.GType<MdnsPublisher>

    // Constructors of DMAP-3.0.DMAP.MdnsPublisher

    constructor(config?: MdnsPublisher.ConstructorProperties) 
    constructor() 
    static new(): MdnsPublisher
    _init(config?: MdnsPublisher.ConstructorProperties): void
}

module Share {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of DMAP-3.0.DMAP.Share

        authMethod?: number | null
        containerDb?: any | null
        db?: any | null
        name?: string | null
        password?: string | null
        revisionNumber?: number | null
        transcodeMimetype?: string | null
        txtRecords?: string[] | null
    }

}

interface Share {

    // Own properties of DMAP-3.0.DMAP.Share

    authMethod: number
    readonly containerDb: any
    readonly db: any
    name: string | null
    password: string | null
    revisionNumber: number
    readonly serverIpv4: Soup.Server
    readonly serverIpv6: Soup.Server
    readonly transcodeMimetype: string | null
    txtRecords: string[]

    // Own fields of DMAP-3.0.DMAP.Share

    parent: GObject.Object
    priv: SharePrivate

    // Own virtual methods of DMAP-3.0.DMAP.Share

    vfunc_content_codes(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_ctrl_int(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_databases(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfunc_databases_browse_xxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfunc_databases_items_xxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    vfunc_get_desired_port(): number
    vfunc_get_type_of_service(): string
    vfunc_login(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_logout(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_message_add_standard_headers(msg: Soup.Message): void
    vfunc_name_collision(publisher: MdnsPublisher, name: string): void
    vfunc_published(publisher: MdnsPublisher, name: string): void
    vfunc_server_info(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    vfunc_update(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void

    // Class property signals of DMAP-3.0.DMAP.Share

    connect(sigName: "notify::auth-method", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-method", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auth-method", ...args: any[]): void
    connect(sigName: "notify::container-db", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container-db", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::container-db", ...args: any[]): void
    connect(sigName: "notify::db", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::db", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::revision-number", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision-number", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision-number", ...args: any[]): void
    connect(sigName: "notify::server-ipv4", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv4", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-ipv4", ...args: any[]): void
    connect(sigName: "notify::server-ipv6", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-ipv6", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-ipv6", ...args: any[]): void
    connect(sigName: "notify::transcode-mimetype", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transcode-mimetype", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transcode-mimetype", ...args: any[]): void
    connect(sigName: "notify::txt-records", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::txt-records", callback: (($obj: Share, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::txt-records", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Share extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Share

    static name: string
    static $gtype: GObject.GType<Share>

    // Constructors of DMAP-3.0.DMAP.Share

    constructor(config?: Share.ConstructorProperties) 
    _init(config?: Share.ConstructorProperties): void
}

interface ConnectionClass {

    // Own fields of DMAP-3.0.DMAP.ConnectionClass

    parent: GObject.ObjectClass
    get_protocol_version_cc: (connection: Connection) => ContentCode
    get_query_metadata: (connection: Connection) => string | null
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string) => string | null
    connecting: (connection: Connection, state: ConnectionState, progress: number) => void
    operation_done: (connection: Connection) => void
}

abstract class ConnectionClass {

    // Own properties of DMAP-3.0.DMAP.ConnectionClass

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of DMAP-3.0.DMAP.ConnectionPrivate

    static name: string
}

interface ContainerDbIface {

    // Own fields of DMAP-3.0.DMAP.ContainerDbIface

    parent: GObject.TypeInterface
    add: (db: ContainerDb, record: ContainerRecord) => void
    count: (db: ContainerDb) => number
}

abstract class ContainerDbIface {

    // Own properties of DMAP-3.0.DMAP.ContainerDbIface

    static name: string
}

interface ContainerRecordIface {

    // Own fields of DMAP-3.0.DMAP.ContainerRecordIface

    parent: GObject.TypeInterface
    get_id: (record: ContainerRecord) => number
    add_entry: (container_record: ContainerRecord, record: Record, id: number) => void
    get_entry_count: (record: ContainerRecord) => number
}

abstract class ContainerRecordIface {

    // Own properties of DMAP-3.0.DMAP.ContainerRecordIface

    static name: string
}

interface ContentCodeDefinition {

    // Own fields of DMAP-3.0.DMAP.ContentCodeDefinition

    code: ContentCode
    int_code: number
    name: string
    string: string
    type: Type
}

class ContentCodeDefinition {

    // Own properties of DMAP-3.0.DMAP.ContentCodeDefinition

    static name: string
}

interface DbFilterDefinition {

    // Own fields of DMAP-3.0.DMAP.DbFilterDefinition

    key: string | null
    value: string | null
    negate: boolean
}

class DbFilterDefinition {

    // Own properties of DMAP-3.0.DMAP.DbFilterDefinition

    static name: string
}

interface DbIface {

    // Own fields of DMAP-3.0.DMAP.DbIface

    parent: GObject.TypeInterface
    add: (db: Db, record: Record) => number
    add_with_id: (db: Db, record: Record, id: number) => number
    add_path: (db: Db, path: string) => number
    lookup_id_by_location: (db: Db, location: string) => number
    count: (db: Db) => number
}

abstract class DbIface {

    // Own properties of DMAP-3.0.DMAP.DbIface

    static name: string
}

interface GstInputStreamClass {

    // Own fields of DMAP-3.0.DMAP.GstInputStreamClass

    parent: Gio.InputStreamClass
    kill_pipeline: (arg0: GstInputStream) => void
}

abstract class GstInputStreamClass {

    // Own properties of DMAP-3.0.DMAP.GstInputStreamClass

    static name: string
}

interface GstInputStreamPrivate {
}

class GstInputStreamPrivate {

    // Own properties of DMAP-3.0.DMAP.GstInputStreamPrivate

    static name: string
}

interface HashContext {

    // Own fields of DMAP-3.0.DMAP.HashContext

    buf: number[]
    bits: number[]
    in_: number[]
    version: number
}

class HashContext {

    // Own properties of DMAP-3.0.DMAP.HashContext

    static name: string
}

interface MdnsBrowserClass {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowserClass

    parent_class: GObject.ObjectClass
    service_added: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    service_removed: (browser: MdnsBrowser, service: MdnsBrowserService) => void
}

abstract class MdnsBrowserClass {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserClass

    static name: string
}

interface MdnsBrowserPrivate {
}

class MdnsBrowserPrivate {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserPrivate

    static name: string
}

interface MdnsBrowserService {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowserService

    service_name: string | null
    name: string | null
    host: string | null
    port: number
    password_protected: boolean
    pair: string | null
    transport_protocol: MdnsBrowserTransportProtocol
}

class MdnsBrowserService {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserService

    static name: string
}

interface MdnsPublisherClass {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisherClass

    parent_class: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    name_collision: (publisher: MdnsPublisher, name: string) => void
}

abstract class MdnsPublisherClass {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisherClass

    static name: string
}

interface MdnsPublisherPrivate {
}

class MdnsPublisherPrivate {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisherPrivate

    static name: string
}

interface MetaDataMap {

    // Own fields of DMAP-3.0.DMAP.MetaDataMap

    tag: string | null
    md: number
}

class MetaDataMap {

    // Own properties of DMAP-3.0.DMAP.MetaDataMap

    static name: string
}

interface Playlist {

    // Own fields of DMAP-3.0.DMAP.Playlist

    name: string | null
    id: number
    uris: any[]
}

class Playlist {

    // Own properties of DMAP-3.0.DMAP.Playlist

    static name: string
}

interface RecordFactoryIface {

    // Own fields of DMAP-3.0.DMAP.RecordFactoryIface

    parent: GObject.TypeInterface
}

abstract class RecordFactoryIface {

    // Own properties of DMAP-3.0.DMAP.RecordFactoryIface

    static name: string
}

interface RecordIface {

    // Own fields of DMAP-3.0.DMAP.RecordIface

    parent: GObject.TypeInterface
    set_from_blob: (record: Record, blob: Uint8Array) => boolean
}

abstract class RecordIface {

    // Own properties of DMAP-3.0.DMAP.RecordIface

    static name: string
}

interface ShareClass {

    // Own fields of DMAP-3.0.DMAP.ShareClass

    parent: GObject.ObjectClass
    get_desired_port: (share: Share) => number
    get_type_of_service: (share: Share) => string
    message_add_standard_headers: (share: Share, msg: Soup.Message) => void
    add_entry_to_mlcl: (id: any, record: Record, mb: any) => void
    databases_browse_xxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    databases_items_xxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    server_info: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    content_codes: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrl_int: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string) => void
    name_collision: (share: Share, publisher: MdnsPublisher, name: string) => void
    databases: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
}

abstract class ShareClass {

    // Own properties of DMAP-3.0.DMAP.ShareClass

    static name: string
}

interface SharePrivate {
}

class SharePrivate {

    // Own properties of DMAP-3.0.DMAP.SharePrivate

    static name: string
}

interface StructureItem {

    // Own fields of DMAP-3.0.DMAP.StructureItem

    content_code: ContentCode
    content: any
    size: number
}

class StructureItem {

    // Own properties of DMAP-3.0.DMAP.StructureItem

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

export default DMAP;
// END