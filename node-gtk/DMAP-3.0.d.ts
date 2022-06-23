// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DMAP-3.0
 */

import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
function contentCodeName(code: ContentCode): string
function contentCodeReadFromBuffer(buf: string): ContentCode
function contentCodeString(code: ContentCode): string
function contentCodeStringAsInt32(str: string): number
function contentCodes(number: number): ContentCodeDefinition
function hashGenerate(versionMajor: number, url: number, hashSelect: number, out: number, requestId: number): void
function hashProgressiveFinal(context: HashContext, digest: number): void
function hashProgressiveInit(context: HashContext): void
function hashProgressiveToString(digest: number, string: string): void
function hashProgressiveUpdate(context: HashContext, buffer: number, length: number): void
function mdnsBrowserErrorQuark(): GLib.Quark
function mdnsPublisherErrorQuark(): GLib.Quark
function mimeToFormat(transcodeMimetype: string): string
function structureDestroy(structure: GLib.Node): void
function structureGetSize(structure: GLib.Node): number
function structureIncreaseByPredictedSize(structure: GLib.Node, size: number): void
function structurePrint(structure: GLib.Node): void
function structureSerialize(structure: GLib.Node, length: number): string
interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
interface ContainerDb_ConstructProps extends GObject.Object_ConstructProps {
}

interface ContainerDb {

    // Owm methods of DMAP-3.0.DMAP.ContainerDb

    /**
     * Add a record to the database.
     * @param record A record.
     */
    add(record: ContainerRecord): void
    count(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerDb

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContainerDb extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerDb

    static name: string
    static $gtype: GObject.GType<ContainerDb>

    // Constructors of DMAP-3.0.DMAP.ContainerDb

    constructor(config?: ContainerDb_ConstructProps) 
    _init(config?: ContainerDb_ConstructProps): void
}

interface ContainerRecord_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of DMAP-3.0.DMAP.ContainerRecord

    name?: string | null
}

interface ContainerRecord {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    name: string

    // Owm methods of DMAP-3.0.DMAP.ContainerRecord

    /**
     * Add a record to the database. It is assumed that the record is placed
     * directly into the database (not copied) and not freed.
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContainerRecord extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    static name: string
    static $gtype: GObject.GType<ContainerRecord>

    // Constructors of DMAP-3.0.DMAP.ContainerRecord

    constructor(config?: ContainerRecord_ConstructProps) 
    _init(config?: ContainerRecord_ConstructProps): void
}

interface Db_ConstructProps extends GObject.Object_ConstructProps {
}

interface Db {

    // Owm methods of DMAP-3.0.DMAP.Db

    /**
     * Add a record to the database.
     * @param record A database record.
     */
    add(record: Record): number
    /**
     * Create a record and add it to the database.
     * @param path A path to an appropriate media file.
     */
    addPath(path: string): number
    /**
     * Add a record to the database and assign it the given ID.
     * @param record A database record.
     * @param id A database record ID.
     */
    addWithId(record: Record, id: number): number
    count(): number
    lookupIdByLocation(location: string): number

    // Class property signals of DMAP-3.0.DMAP.Db

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Db extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Db

    static name: string
    static $gtype: GObject.GType<Db>

    // Constructors of DMAP-3.0.DMAP.Db

    constructor(config?: Db_ConstructProps) 
    _init(config?: Db_ConstructProps): void
}

interface Record_ConstructProps extends GObject.Object_ConstructProps {
}

interface Record {

    // Owm methods of DMAP-3.0.DMAP.Record

    setFromBlob(blob: Uint8Array): boolean

    // Class property signals of DMAP-3.0.DMAP.Record

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Record extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Record

    static name: string
    static $gtype: GObject.GType<Record>

    // Constructors of DMAP-3.0.DMAP.Record

    constructor(config?: Record_ConstructProps) 
    _init(config?: Record_ConstructProps): void
}

interface RecordFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface RecordFactory {

    // Class property signals of DMAP-3.0.DMAP.RecordFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RecordFactory extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.RecordFactory

    static name: string
    static $gtype: GObject.GType<RecordFactory>

    // Constructors of DMAP-3.0.DMAP.RecordFactory

    constructor(config?: RecordFactory_ConstructProps) 
    _init(config?: RecordFactory_ConstructProps): void
}

interface Connection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of DMAP-3.0.DMAP.Connection

    baseUri?: object | null
    databaseId?: number | null
    db?: object | null
    dmapVersion?: number | null
    factory?: object | null
    host?: string | null
    name?: string | null
    password?: string | null
    port?: number | null
    revisionNumber?: number | null
    sessionId?: number | null
    username?: string | null
}

/**
 * Signal callback interface for `authenticate`
 */
interface Connection_AuthenticateSignalCallback {
    (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
}

/**
 * Signal callback interface for `connected`
 */
interface Connection_ConnectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `connecting`
 */
interface Connection_ConnectingSignalCallback {
    (object: number, p0: number): void
}

/**
 * Signal callback interface for `disconnected`
 */
interface Connection_DisconnectedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `operation-done`
 */
interface Connection_OperationDoneSignalCallback {
    (): void
}

interface Connection {

    // Own properties of DMAP-3.0.DMAP.Connection

    baseUri: object
    databaseId: number
    readonly db: object
    dmapVersion: number
    readonly factory: object
    readonly host: string
    readonly name: string
    password: string
    readonly port: number
    revisionNumber: number
    sessionId: number
    readonly username: string

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
    authenticateMessage(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    getHeaders(uri: string): Soup.MessageHeaders
    isConnected(): boolean
    setup(): void

    // Own signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "authenticate", callback: Connection_AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Connection_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Connection_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Connection_AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean, ...args: any[]): void
    connect(sigName: "connected", callback: Connection_ConnectedSignalCallback): number
    on(sigName: "connected", callback: Connection_ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: Connection_ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: Connection_ConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "connecting", callback: Connection_ConnectingSignalCallback): number
    on(sigName: "connecting", callback: Connection_ConnectingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connecting", callback: Connection_ConnectingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connecting", callback: Connection_ConnectingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connecting", p0: number, ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection_DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Connection_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Connection_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Connection_DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "operation-done", callback: Connection_OperationDoneSignalCallback): number
    on(sigName: "operation-done", callback: Connection_OperationDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: Connection_OperationDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: Connection_OperationDoneSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Connection extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of DMAP-3.0.DMAP.Connection

    constructor(config?: Connection_ConstructProps) 
    _init(config?: Connection_ConstructProps): void
}

interface GstInputStream_ConstructProps extends Gio.Seekable_ConstructProps, Gio.InputStream_ConstructProps {
}

interface GstInputStream extends Gio.Seekable {

    // Own fields of DMAP-3.0.DMAP.GstInputStream

    parent: Gio.InputStream
    priv: GstInputStreamPrivate

    // Class property signals of DMAP-3.0.DMAP.GstInputStream

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GstInputStream extends Gio.InputStream {

    // Own properties of DMAP-3.0.DMAP.GstInputStream

    static name: string
    static $gtype: GObject.GType<GstInputStream>

    // Constructors of DMAP-3.0.DMAP.GstInputStream

    constructor(config?: GstInputStream_ConstructProps) 
    constructor(transcodeMimetype: string, srcStream: Gio.InputStream) 
    static new(transcodeMimetype: string, srcStream: Gio.InputStream): GstInputStream
    _init(config?: GstInputStream_ConstructProps): void
}

interface MdnsBrowser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `service-added`
 */
interface MdnsBrowser_ServiceAddedSignalCallback {
    (service: object): void
}

/**
 * Signal callback interface for `service-removed`
 */
interface MdnsBrowser_ServiceRemovedSignalCallback {
    (object: string): void
}

interface MdnsBrowser {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowser

    object: GObject.Object
    priv: MdnsBrowserPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsBrowser

    getServiceType(): MdnsBrowserServiceType
    /**
     * Starts a DMAPMdnsBrowser.
     */
    start(): boolean
    /**
     * Stops a DMAPMdnsBrowser.
     */
    stop(): boolean

    // Own signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: "service-added", callback: MdnsBrowser_ServiceAddedSignalCallback): number
    on(sigName: "service-added", callback: MdnsBrowser_ServiceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-added", callback: MdnsBrowser_ServiceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-added", callback: MdnsBrowser_ServiceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-added", ...args: any[]): void
    connect(sigName: "service-removed", callback: MdnsBrowser_ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: MdnsBrowser_ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-removed", callback: MdnsBrowser_ServiceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-removed", callback: MdnsBrowser_ServiceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-removed", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MdnsBrowser extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowser

    static name: string
    static $gtype: GObject.GType<MdnsBrowser>

    // Constructors of DMAP-3.0.DMAP.MdnsBrowser

    constructor(config?: MdnsBrowser_ConstructProps) 
    /**
     * Creates a new mDNS browser.
     * @constructor 
     * @param type The type of service to browse.
     */
    constructor(type: MdnsBrowserServiceType) 
    /**
     * Creates a new mDNS browser.
     * @constructor 
     * @param type The type of service to browse.
     */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    _init(config?: MdnsBrowser_ConstructProps): void
}

interface MdnsPublisher_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `name-collision`
 */
interface MdnsPublisher_NameCollisionSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `published`
 */
interface MdnsPublisher_PublishedSignalCallback {
    (object: string): void
}

interface MdnsPublisher {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisher

    object: GObject.Object
    priv: MdnsPublisherPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsPublisher

    publish(name: string, port: number, typeOfService: string, passwordRequired: boolean, txtRecords: string): boolean
    renameAtPort(port: number, name: string): boolean
    withdraw(port: number): boolean

    // Own signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: "name-collision", callback: MdnsPublisher_NameCollisionSignalCallback): number
    on(sigName: "name-collision", callback: MdnsPublisher_NameCollisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-collision", callback: MdnsPublisher_NameCollisionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-collision", callback: MdnsPublisher_NameCollisionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-collision", ...args: any[]): void
    connect(sigName: "published", callback: MdnsPublisher_PublishedSignalCallback): number
    on(sigName: "published", callback: MdnsPublisher_PublishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "published", callback: MdnsPublisher_PublishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "published", callback: MdnsPublisher_PublishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "published", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MdnsPublisher extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisher

    static name: string
    static $gtype: GObject.GType<MdnsPublisher>

    // Constructors of DMAP-3.0.DMAP.MdnsPublisher

    constructor(config?: MdnsPublisher_ConstructProps) 
    constructor() 
    static new(): MdnsPublisher
    _init(config?: MdnsPublisher_ConstructProps): void
}

interface Share_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of DMAP-3.0.DMAP.Share

    authMethod?: number | null
    containerDb?: object | null
    db?: object | null
    name?: string | null
    password?: string | null
    revisionNumber?: number | null
    transcodeMimetype?: string | null
    txtRecords?: string[] | null
}

interface Share {

    // Own properties of DMAP-3.0.DMAP.Share

    authMethod: number
    readonly containerDb: object
    readonly db: object
    name: string
    password: string
    revisionNumber: number
    readonly serverIpv4: Soup.Server
    readonly serverIpv6: Soup.Server
    readonly transcodeMimetype: string
    txtRecords: string[]

    // Own fields of DMAP-3.0.DMAP.Share

    parent: GObject.Object
    priv: SharePrivate

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Share extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Share

    static name: string
    static $gtype: GObject.GType<Share>

    // Constructors of DMAP-3.0.DMAP.Share

    constructor(config?: Share_ConstructProps) 
    _init(config?: Share_ConstructProps): void
}

interface ConnectionClass {

    // Own fields of DMAP-3.0.DMAP.ConnectionClass

    parent: GObject.ObjectClass
    getProtocolVersionCc: (connection: Connection) => ContentCode
    getQueryMetadata: (connection: Connection) => string
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string) => string
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

    key: string
    value: string
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
    addPath: (db: Db, path: string) => number
    lookupIdByLocation: (db: Db, location: string) => number
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

    serviceName: string
    name: string
    host: string
    port: number
    passwordProtected: boolean
    pair: string
    transportProtocol: MdnsBrowserTransportProtocol
}

class MdnsBrowserService {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserService

    static name: string
}

interface MdnsPublisherClass {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisherClass

    parentClass: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    nameCollision: (publisher: MdnsPublisher, name: string) => void
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

    tag: string
    md: number
}

class MetaDataMap {

    // Own properties of DMAP-3.0.DMAP.MetaDataMap

    static name: string
}

interface Playlist {

    // Own fields of DMAP-3.0.DMAP.Playlist

    name: string
    id: number
    uris: object[]
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
    getTypeOfService: (share: Share) => string
    messageAddStandardHeaders: (share: Share, msg: Soup.Message) => void
    addEntryToMlcl: (id: object, record: Record, mb: object) => void
    databasesBrowseXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    databasesItemsXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    serverInfo: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    contentCodes: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrlInt: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string) => void
    nameCollision: (share: Share, publisher: MdnsPublisher, name: string) => void
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