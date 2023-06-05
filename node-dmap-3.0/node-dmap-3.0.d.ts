
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-dmap-3.0-import.d.ts';
    
/**
 * DMAP-3.0
 */

import type Soup from '@girs/node-soup-2.4';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
function contentCodeDmapType(code: ContentCode): Type
function contentCodeName(code: ContentCode): string | null
function contentCodeReadFromBuffer(buf: string | null): ContentCode
function contentCodeString(code: ContentCode): string | null
function contentCodeStringAsInt32(str: string | null): number
function contentCodes(number: number): ContentCodeDefinition
function hashGenerate(versionMajor: number, url: number, hashSelect: number, out: number, requestId: number): void
function hashProgressiveFinal(context: HashContext, digest: number): void
function hashProgressiveInit(context: HashContext): void
function hashProgressiveToString(digest: number, string: string | null): void
function hashProgressiveUpdate(context: HashContext, buffer: number, length: number): void
function mdnsBrowserErrorQuark(): GLib.Quark
function mdnsPublisherErrorQuark(): GLib.Quark
function mimeToFormat(transcodeMimetype: string | null): string | null
function structureDestroy(structure: GLib.Node): void
function structureGetSize(structure: GLib.Node): number
function structureIncreaseByPredictedSize(structure: GLib.Node, size: number): void
function structurePrint(structure: GLib.Node): void
function structureSerialize(structure: GLib.Node, length: number): string | null
interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string | null): boolean
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

    // Own properties of DMAP-3.0.DMAP.ContainerDb

    __gtype__: number

    // Owm methods of DMAP-3.0.DMAP.ContainerDb

    // Has conflict: add(record: ContainerRecord): void
    // Has conflict: count(): number

    // Own virtual methods of DMAP-3.0.DMAP.ContainerDb

    /**
     * Add a record to the database.
     * @virtual 
     * @param record A record.
     */
    add(record: ContainerRecord): void
    count(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerDb

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
    disconnect(id: number): void
}

class ContainerDb extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerDb

    static name: string

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
    __gtype__: number

    // Owm methods of DMAP-3.0.DMAP.ContainerRecord

    // Has conflict: addEntry(record: Record, id: number): void
    // Has conflict: getEntryCount(): number
    // Has conflict: getId(): number

    // Own virtual methods of DMAP-3.0.DMAP.ContainerRecord

    /**
     * Add a record to the database. It is assumed that the record is placed
     * directly into the database (not copied) and not freed.
     * @virtual 
     * @param record A DMAPRecord.
     * @param id The record's ID.
     */
    addEntry(record: Record, id: number): void
    getEntryCount(): number
    getId(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerRecord

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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
    disconnect(id: number): void
}

class ContainerRecord extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    static name: string

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

    // Own properties of DMAP-3.0.DMAP.Db

    __gtype__: number

    // Owm methods of DMAP-3.0.DMAP.Db

    // Has conflict: add(record: Record): number
    // Has conflict: addPath(path: string | null): number
    // Has conflict: addWithId(record: Record, id: number): number
    // Has conflict: count(): number
    // Has conflict: lookupIdByLocation(location: string | null): number

    // Own virtual methods of DMAP-3.0.DMAP.Db

    /**
     * Add a record to the database.
     * @virtual 
     * @param record A database record.
     * @returns The ID for the newly added record. A reference to the record will be retained by the database (if required; an adapter-type implementation may not want to retain a reference as the record data may be placed elsewhere). In all cases, the record should be unrefed by the calling code.
     */
    add(record: Record): number
    /**
     * Create a record and add it to the database.
     * @virtual 
     * @param path A path to an appropriate media file.
     * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
     */
    addPath(path: string | null): number
    /**
     * Add a record to the database and assign it the given ID.
     * @virtual 
     * @param record A database record.
     * @param id A database record ID.
     * @returns The ID for the newly added record. See also the notes for dmap_db_add regarding reference counting.
     */
    addWithId(record: Record, id: number): number
    count(): number
    lookupIdByLocation(location: string | null): number

    // Class property signals of DMAP-3.0.DMAP.Db

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
    disconnect(id: number): void
}

class Db extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Db

    static name: string

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

    // Own properties of DMAP-3.0.DMAP.Record

    __gtype__: number

    // Owm methods of DMAP-3.0.DMAP.Record

    // Has conflict: setFromBlob(blob: Uint8Array): boolean

    // Own virtual methods of DMAP-3.0.DMAP.Record

    setFromBlob(blob: Uint8Array): boolean

    // Class property signals of DMAP-3.0.DMAP.Record

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
    disconnect(id: number): void
}

class Record extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Record

    static name: string

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

    // Own properties of DMAP-3.0.DMAP.RecordFactory

    __gtype__: number

    // Class property signals of DMAP-3.0.DMAP.RecordFactory

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
    disconnect(id: number): void
}

class RecordFactory extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.RecordFactory

    static name: string

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
        (object: string | null, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    }

    /**
     * Signal callback interface for `connected`
     */
    interface ConnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `connecting`
     */
    interface ConnectingSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `operation-done`
     */
    interface OperationDoneSignalCallback {
        (): void
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
    __gtype__: number

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
    authenticateMessage(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string | null): void
    getHeaders(uri: string | null): Soup.MessageHeaders
    isConnected(): boolean
    setup(): void

    // Own virtual methods of DMAP-3.0.DMAP.Connection

    authenticate(name: string | null): string | null
    connected(): void
    connecting(state: ConnectionState, progress: number): void
    disconnected(): void
    getProtocolVersionCc(): ContentCode
    getQueryMetadata(): string | null
    operationDone(): void

    // Own signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean, ...args: any[]): void
    connect(sigName: "connected", callback: Connection.ConnectedSignalCallback): number
    on(sigName: "connected", callback: Connection.ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: Connection.ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: Connection.ConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "connecting", callback: Connection.ConnectingSignalCallback): number
    on(sigName: "connecting", callback: Connection.ConnectingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connecting", callback: Connection.ConnectingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connecting", callback: Connection.ConnectingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connecting", p0: number, ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): number
    on(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "operation-done", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "notify::base-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::database-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::database-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::database-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::database-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::database-id", ...args: any[]): void
    connect(sigName: "notify::db", callback: (...args: any[]) => void): number
    on(sigName: "notify::db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::db", ...args: any[]): void
    connect(sigName: "notify::dmap-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::dmap-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dmap-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dmap-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dmap-version", ...args: any[]): void
    connect(sigName: "notify::factory", callback: (...args: any[]) => void): number
    on(sigName: "notify::factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::factory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::factory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::revision-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision-number", ...args: any[]): void
    connect(sigName: "notify::session-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-id", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
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
    disconnect(id: number): void
}

class Connection extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Connection

    static name: string

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

    // Own properties of DMAP-3.0.DMAP.GstInputStream

    __gtype__: number

    // Own fields of DMAP-3.0.DMAP.GstInputStream

    parent: Gio.InputStream
    priv: GstInputStreamPrivate

    // Own virtual methods of DMAP-3.0.DMAP.GstInputStream

    killPipeline(): void

    // Class property signals of DMAP-3.0.DMAP.GstInputStream

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
    disconnect(id: number): void
}

class GstInputStream extends Gio.InputStream {

    // Own properties of DMAP-3.0.DMAP.GstInputStream

    static name: string

    // Constructors of DMAP-3.0.DMAP.GstInputStream

    constructor(config?: GstInputStream.ConstructorProperties) 
    constructor(transcodeMimetype: string | null, srcStream: Gio.InputStream) 
    static new(transcodeMimetype: string | null, srcStream: Gio.InputStream): GstInputStream
    _init(config?: GstInputStream.ConstructorProperties): void
}

module MdnsBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `service-added`
     */
    interface ServiceAddedSignalCallback {
        (service: any): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    interface ServiceRemovedSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MdnsBrowser {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowser

    __gtype__: number

    // Own fields of DMAP-3.0.DMAP.MdnsBrowser

    object: GObject.Object
    priv: MdnsBrowserPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsBrowser

    getServiceType(): MdnsBrowserServiceType
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

    serviceAdded(service: MdnsBrowserService): void
    serviceRemoved(service: MdnsBrowserService): void

    // Own signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): number
    on(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-added", ...args: any[]): void
    connect(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-removed", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsBrowser

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
    disconnect(id: number): void
}

class MdnsBrowser extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowser

    static name: string

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
        (object: string | null): void
    }

    /**
     * Signal callback interface for `published`
     */
    interface PublishedSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MdnsPublisher {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisher

    __gtype__: number

    // Own fields of DMAP-3.0.DMAP.MdnsPublisher

    object: GObject.Object
    priv: MdnsPublisherPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsPublisher

    publish(name: string | null, port: number, typeOfService: string | null, passwordRequired: boolean, txtRecords: string | null): boolean
    renameAtPort(port: number, name: string | null): boolean
    withdraw(port: number): boolean

    // Own virtual methods of DMAP-3.0.DMAP.MdnsPublisher

    nameCollision(name: string | null): void
    published(name: string | null): void

    // Own signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): number
    on(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-collision", ...args: any[]): void
    connect(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): number
    on(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "published", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsPublisher

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
    disconnect(id: number): void
}

class MdnsPublisher extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisher

    static name: string

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
    __gtype__: number

    // Own fields of DMAP-3.0.DMAP.Share

    parent: GObject.Object
    priv: SharePrivate

    // Own virtual methods of DMAP-3.0.DMAP.Share

    contentCodes(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext): void
    ctrlInt(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext): void
    databases(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, context: Soup.ClientContext): void
    databasesBrowseXxx(server: Soup.Server, msg: Soup.Message, path: string | null, query: GLib.HashTable, context: Soup.ClientContext): void
    databasesItemsXxx(server: Soup.Server, msg: Soup.Message, path: string | null, query: GLib.HashTable, context: Soup.ClientContext): void
    getDesiredPort(): number
    getTypeOfService(): string | null
    login(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext): void
    logout(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext): void
    messageAddStandardHeaders(msg: Soup.Message): void
    nameCollision(publisher: MdnsPublisher, name: string | null): void
    published(publisher: MdnsPublisher, name: string | null): void
    serverInfo(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext): void
    update(server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext): void

    // Class property signals of DMAP-3.0.DMAP.Share

    connect(sigName: "notify::auth-method", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-method", ...args: any[]): void
    connect(sigName: "notify::container-db", callback: (...args: any[]) => void): number
    on(sigName: "notify::container-db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::container-db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::container-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::container-db", ...args: any[]): void
    connect(sigName: "notify::db", callback: (...args: any[]) => void): number
    on(sigName: "notify::db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::db", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::db", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::revision-number", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision-number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision-number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision-number", ...args: any[]): void
    connect(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): number
    on(sigName: "notify::server-ipv4", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server-ipv4", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server-ipv4", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server-ipv4", ...args: any[]): void
    connect(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): number
    on(sigName: "notify::server-ipv6", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server-ipv6", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server-ipv6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server-ipv6", ...args: any[]): void
    connect(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void): number
    on(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transcode-mimetype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transcode-mimetype", ...args: any[]): void
    connect(sigName: "notify::txt-records", callback: (...args: any[]) => void): number
    on(sigName: "notify::txt-records", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::txt-records", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::txt-records", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::txt-records", ...args: any[]): void
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
    disconnect(id: number): void
}

class Share extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Share

    static name: string

    // Constructors of DMAP-3.0.DMAP.Share

    constructor(config?: Share.ConstructorProperties) 
    _init(config?: Share.ConstructorProperties): void
}

interface ConnectionClass {

    // Own fields of DMAP-3.0.DMAP.ConnectionClass

    parent: GObject.ObjectClass
    getProtocolVersionCc: (connection: Connection) => ContentCode
    getQueryMetadata: (connection: Connection) => string | null
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string | null) => string | null
    connecting: (connection: Connection, state: ConnectionState, progress: number) => void
    operationDone: (connection: Connection) => void
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
    getId: (record: ContainerRecord) => number
    addEntry: (containerRecord: ContainerRecord, record: Record, id: number) => void
    getEntryCount: (record: ContainerRecord) => number
}

abstract class ContainerRecordIface {

    // Own properties of DMAP-3.0.DMAP.ContainerRecordIface

    static name: string
}

interface ContentCodeDefinition {

    // Own fields of DMAP-3.0.DMAP.ContentCodeDefinition

    code: ContentCode
    intCode: number
    name: string | null
    string: string | null
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
    addWithId: (db: Db, record: Record, id: number) => number
    addPath: (db: Db, path: string | null) => number
    lookupIdByLocation: (db: Db, location: string | null) => number
    count: (db: Db) => number
}

abstract class DbIface {

    // Own properties of DMAP-3.0.DMAP.DbIface

    static name: string
}

interface GstInputStreamClass {

    // Own fields of DMAP-3.0.DMAP.GstInputStreamClass

    parent: Gio.InputStreamClass
    killPipeline: (arg0: GstInputStream) => void
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

    parentClass: GObject.ObjectClass
    serviceAdded: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    serviceRemoved: (browser: MdnsBrowser, service: MdnsBrowserService) => void
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

    serviceName: string | null
    name: string | null
    host: string | null
    port: number
    passwordProtected: boolean
    pair: string | null
    transportProtocol: MdnsBrowserTransportProtocol
}

class MdnsBrowserService {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserService

    static name: string
}

interface MdnsPublisherClass {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisherClass

    parentClass: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string | null) => void
    nameCollision: (publisher: MdnsPublisher, name: string | null) => void
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
    setFromBlob: (record: Record, blob: Uint8Array) => boolean
}

abstract class RecordIface {

    // Own properties of DMAP-3.0.DMAP.RecordIface

    static name: string
}

interface ShareClass {

    // Own fields of DMAP-3.0.DMAP.ShareClass

    parent: GObject.ObjectClass
    getDesiredPort: (share: Share) => number
    getTypeOfService: (share: Share) => string | null
    messageAddStandardHeaders: (share: Share, msg: Soup.Message) => void
    addEntryToMlcl: (id: any, record: Record, mb: any) => void
    databasesBrowseXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string | null, query: GLib.HashTable, context: Soup.ClientContext) => void
    databasesItemsXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string | null, query: GLib.HashTable, context: Soup.ClientContext) => void
    serverInfo: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    contentCodes: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrlInt: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string | null) => void
    nameCollision: (share: Share, publisher: MdnsPublisher, name: string | null) => void
    databases: (share: Share, server: Soup.Server, message: Soup.Message, path: string | null, query: GLib.HashTable, context: Soup.ClientContext) => void
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

    contentCode: ContentCode
    content: any
    size: number
}

class StructureItem {

    // Own properties of DMAP-3.0.DMAP.StructureItem

    static name: string
}

}

export default DMAP;
// END