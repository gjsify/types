// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tracker-1.0
 */

import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';

export namespace Tracker {

enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
const DBUS_SERVICE: string
const DBUS_INTERFACE_RESOURCES: string
const DBUS_OBJECT_RESOURCES: string
const DBUS_INTERFACE_STATISTICS: string
const DBUS_OBJECT_STATISTICS: string
const DBUS_INTERFACE_STATUS: string
const DBUS_OBJECT_STATUS: string
const DBUS_INTERFACE_STEROIDS: string
const DBUS_OBJECT_STEROIDS: string
function sparqlEscapeUri(uri: string): string
function sparqlEscapeString(literal: string): string
function sparqlGetUuidUrn(): string
interface SparqlBuilder_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-1.0.Tracker.SparqlBuilder

    length?: number | null
}

interface SparqlBuilder {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilder

    readonly result: string
    length: number
    readonly state: SparqlBuilderState

    // Own fields of Tracker-1.0.Tracker.SparqlBuilder

    parentInstance: GObject.Object
    priv: SparqlBuilderPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlBuilder

    insertOpen(graph?: string | null): void
    insertSilentOpen(graph?: string | null): void
    insertClose(): void
    deleteOpen(graph?: string | null): void
    deleteClose(): void
    graphOpen(graph: string): void
    graphClose(): void
    whereOpen(): void
    whereClose(): void
    subjectVariable(varName: string): void
    objectVariable(varName: string): void
    subjectIri(iri: string): void
    subject(s: string): void
    predicateIri(iri: string): void
    predicate(s: string): void
    objectIri(iri: string): void
    object(s: string): void
    objectString(literal: string): void
    objectUnvalidated(value: string): void
    objectBoolean(literal: boolean): void
    objectInt64(literal: number): void
    objectDate(literal: number): /* literal */ number
    objectDouble(literal: number): void
    objectBlankOpen(): void
    objectBlankClose(): void
    prepend(raw: string): void
    append(raw: string): void
    getResult(): string
    getLength(): number
    getState(): SparqlBuilderState

    // Class property signals of Tracker-1.0.Tracker.SparqlBuilder

    connect(sigName: "notify::result", callback: (...args: any[]) => void): number
    on(sigName: "notify::result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::result", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::result", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::result", ...args: any[]): void
    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SparqlBuilder extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilder

    static name: string
    static $gtype: GObject.GType<SparqlBuilder>

    // Constructors of Tracker-1.0.Tracker.SparqlBuilder

    constructor(config?: SparqlBuilder_ConstructProps) 
    static update(): SparqlBuilder
    static embeddedInsert(): SparqlBuilder
    constructor() 
    static new(): SparqlBuilder
    _init(config?: SparqlBuilder_ConstructProps): void
}

interface SparqlConnection_ConstructProps extends GObject.Object_ConstructProps {
}

interface SparqlConnection {

    // Own fields of Tracker-1.0.Tracker.SparqlConnection

    parentInstance: GObject.Object
    priv: SparqlConnectionPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlConnection

    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): SparqlCursor
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    updateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(res: Gio.AsyncResult): void
    updateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): any[] | null
    updateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    updateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    loadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    statisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    statisticsFinish(res: Gio.AsyncResult): SparqlCursor | null

    // Class property signals of Tracker-1.0.Tracker.SparqlConnection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlConnection

    static name: string
    static $gtype: GObject.GType<SparqlConnection>

    // Constructors of Tracker-1.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection_ConstructProps) 
    _init(config?: SparqlConnection_ConstructProps): void
    static getAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): SparqlConnection
    static get(cancellable?: Gio.Cancellable | null): SparqlConnection
    static getDirectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getDirectFinish(res: Gio.AsyncResult): SparqlConnection
    static getDirect(cancellable?: Gio.Cancellable | null): SparqlConnection
    static remoteNew(uriBase: string): SparqlConnection
}

interface SparqlCursor_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Tracker-1.0.Tracker.SparqlCursor

    connection?: SparqlConnection | null
}

interface SparqlCursor {

    // Own properties of Tracker-1.0.Tracker.SparqlCursor

    connection: SparqlConnection
    readonly nColumns: number

    // Own fields of Tracker-1.0.Tracker.SparqlCursor

    parentInstance: GObject.Object
    priv: SparqlCursorPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlCursor

    getValueType(column: number): SparqlValueType
    getVariableName(column: number): string | null
    getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    getInteger(column: number): number
    getDouble(column: number): number
    getBoolean(column: number): boolean
    isBound(column: number): boolean
    getConnection(): SparqlConnection
    setConnection(value: SparqlConnection): void
    getNColumns(): number

    // Class property signals of Tracker-1.0.Tracker.SparqlCursor

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::n-columns", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlCursor

    static name: string
    static $gtype: GObject.GType<SparqlCursor>

    // Constructors of Tracker-1.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor_ConstructProps) 
    _init(config?: SparqlCursor_ConstructProps): void
}

interface SparqlBuilderClass {

    // Own fields of Tracker-1.0.Tracker.SparqlBuilderClass

    parentClass: GObject.ObjectClass
}

abstract class SparqlBuilderClass {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilderClass

    static name: string
}

interface SparqlBuilderPrivate {
}

class SparqlBuilderPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilderPrivate

    static name: string
}

interface SparqlConnectionClass {

    // Own fields of Tracker-1.0.Tracker.SparqlConnectionClass

    parentClass: GObject.ObjectClass
    query: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null) => SparqlCursor
    queryAsync: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    queryFinish: (self: SparqlConnection, res: Gio.AsyncResult) => SparqlCursor
    update: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    updateAsync: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateFinish: (self: SparqlConnection, res: Gio.AsyncResult) => void
    updateArrayAsync: (self: SparqlConnection, sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateArrayFinish: (self: SparqlConnection, res: Gio.AsyncResult) => any[] | null
    updateBlank: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    updateBlankAsync: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateBlankFinish: (self: SparqlConnection, res: Gio.AsyncResult) => GLib.Variant | null
    load: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    loadAsync: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    loadFinish: (self: SparqlConnection, res: Gio.AsyncResult) => void
    statistics: (self: SparqlConnection, cancellable?: Gio.Cancellable | null) => SparqlCursor | null
    statisticsAsync: (self: SparqlConnection, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    statisticsFinish: (self: SparqlConnection, res: Gio.AsyncResult) => SparqlCursor | null
}

abstract class SparqlConnectionClass {

    // Own properties of Tracker-1.0.Tracker.SparqlConnectionClass

    static name: string
}

interface SparqlConnectionPrivate {
}

class SparqlConnectionPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlConnectionPrivate

    static name: string
}

interface SparqlCursorClass {

    // Own fields of Tracker-1.0.Tracker.SparqlCursorClass

    parentClass: GObject.ObjectClass
    getValueType: (self: SparqlCursor, column: number) => SparqlValueType
    getVariableName: (self: SparqlCursor, column: number) => string | null
    getString: (self: SparqlCursor, column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: (self: SparqlCursor, cancellable?: Gio.Cancellable | null) => boolean
    nextAsync: (self: SparqlCursor, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    nextFinish: (self: SparqlCursor, res: Gio.AsyncResult) => boolean
    rewind: (self: SparqlCursor) => void
    close: (self: SparqlCursor) => void
    getInteger: (self: SparqlCursor, column: number) => number
    getDouble: (self: SparqlCursor, column: number) => number
    getBoolean: (self: SparqlCursor, column: number) => boolean
    isBound: (self: SparqlCursor, column: number) => boolean
}

abstract class SparqlCursorClass {

    // Own properties of Tracker-1.0.Tracker.SparqlCursorClass

    static name: string
}

interface SparqlCursorPrivate {
}

class SparqlCursorPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlCursorPrivate

    static name: string
}

}
export default Tracker;