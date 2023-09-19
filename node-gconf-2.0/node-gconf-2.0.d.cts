
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gconf-2.0-import.d.ts';
    
/**
 * GConf-2.0
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum ClientErrorHandlingMode {
    HANDLE_NONE,
    HANDLE_UNRETURNED,
    HANDLE_ALL,
}
export enum ClientPreloadType {
    PRELOAD_NONE,
    PRELOAD_ONELEVEL,
    PRELOAD_RECURSIVE,
}
export enum Error {
    SUCCESS,
    FAILED,
    NO_SERVER,
    NO_PERMISSION,
    BAD_ADDRESS,
    BAD_KEY,
    PARSE_ERROR,
    CORRUPT,
    TYPE_MISMATCH,
    IS_DIR,
    IS_KEY,
    OVERRIDDEN,
    OAF_ERROR,
    LOCAL_ENGINE,
    LOCK_FAILED,
    NO_WRITABLE_DATABASE,
    IN_SHUTDOWN,
}
export enum ValueType {
    INVALID,
    STRING,
    INT,
    FLOAT,
    BOOL,
    SCHEMA,
    LIST,
    PAIR,
}
export enum UnsetFlags {
    NAMES,
}
export function concatDirAndKey(dir: string | null, key: string | null): string | null
/**
 * Detach from the config server and release
 * all related resources
 */
export function debugShutdown(): number
export function enumToString(lookupTable: EnumStringPair, enumValue: number): string | null
export function errorQuark(): GLib.Quark
/**
 * Escape `arbitrary_text` such that it's a valid key element (i.e. one
 * part of the key path). The escaped key won't pass gconf_valid_key()
 * because it isn't a whole key (i.e. it doesn't have a preceding
 * slash), but prepending a slash to the escaped text should always
 * result in a valid key.
 * @param arbitraryText some text in any encoding or format
 * @param len length of `arbitrary_text` in bytes, or -1 if `arbitrary_text` is nul-terminated
 * @returns a nul-terminated valid GConf key
 */
export function escapeKey(arbitraryText: string | null, len: number): string | null
export function init(argc: number, argv: string | null): boolean
export function isInitialized(): boolean
export function keyIsBelow(above: string | null, below: string | null): boolean
export function postinit(app: any | null, modInfo: any | null): void
export function preinit(app: any | null, modInfo: any | null): void
export function stringToEnum(lookupTable: EnumStringPair, str: string | null, enumValueRetloc: number): boolean
/**
 * Converts a string escaped with gconf_escape_key() back into its original
 * form.
 * @param escapedKey a key created with gconf_escape_key()
 * @param len length of `escaped_key` in bytes, or -1 if `escaped_key` is nul-terminated
 * @returns the original string that was escaped to create @escaped_key
 */
export function unescapeKey(escapedKey: string | null, len: number): string | null
export function uniqueKey(): string | null
export function validKey(key: string | null, whyInvalid: string | null): boolean
export function valueDecode(encoded: string | null): Value
export interface ChangeSetForeachFunc {
    (cs: ChangeSet, key: string | null, value: Value): void
}
export interface ClientErrorHandlerFunc {
    (client: Client, error: GLib.Error): void
}
export interface ClientNotifyFunc {
    (client: Client, cnxnId: number, entry: Entry): void
}
export interface ListenersForeach {
    (location: string | null, cnxnId: number, listenerData: any | null): void
}
export interface ListenersPredicate {
    (location: string | null, cnxnId: number, listenerData: any | null): boolean
}
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (object: any | null): void
    }

    /**
     * Signal callback interface for `unreturned-error`
     */
    export interface UnreturnedErrorSignalCallback {
        (object: any | null): void
    }

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (object: string | null, p0: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Client {

    // Own properties of GConf-2.0.GConf.Client

    __gtype__: number

    // Own fields of GConf-2.0.GConf.Client

    object: GObject.Object

    // Owm methods of GConf-2.0.GConf.Client

    addDir(dir: string | null, preload: ClientPreloadType): void
    /**
     * Lists the subdirectories in `dir`. The returned list contains
     * allocated strings. Each string is the absolute path of a
     * subdirectory. You should g_free() each string in the list, then
     * g_slist_free() the list itself.  Just like gconf_engine_all_dirs(),
     * but uses #GConfClient caching and error-handling features.
     * @param dir directory to get subdirectories from.
     * @returns List of allocated subdirectory names.
     */
    allDirs(dir: string | null): string[]
    /**
     * Lists the key-value pairs in `dir`. Does not list subdirectories; for
     * that use gconf_client_all_dirs(). The returned list contains #GConfEntry
     * objects. A #GConfEntry contains an <emphasis>absolute</emphasis> key
     * and a value. The list is not recursive, it contains only the immediate
     * children of `dir`.  To free the returned list, gconf_entry_free()
     * each list element, then g_slist_free() the list itself.
     * Just like gconf_engine_all_entries (), but uses #GConfClient caching and error-handling features.
     * @param dir directory to list.
     * @returns List of #GConfEntry.
     */
    allEntries(dir: string | null): Entry[]
    changeSetFromCurrentv(keys: string | null): ChangeSet
    clearCache(): void
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string | null): boolean
    // Has conflict: error(error: GLib.Error): void
    get(key: string | null): Value
    getBool(key: string | null): boolean
    getDefaultFromSchema(key: string | null): Value
    getEntry(key: string | null, locale: string | null, useSchemaDefault: boolean): Entry
    getFloat(key: string | null): number
    getInt(key: string | null): number
    getPair(key: string | null, carType: ValueType, cdrType: ValueType, carRetloc: any | null, cdrRetloc: any | null): boolean
    getString(key: string | null): string | null
    getWithoutDefault(key: string | null): Value
    keyIsWritable(key: string | null): boolean
    notify(key: string | null): void

    // Overloads of notify

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
     * @virtual 
     * @param pspec 
     */
    notify(pspec: GObject.ParamSpec): void
    notifyAdd(namespaceSection: string | null, func: ClientNotifyFunc): number
    notifyRemove(cnxn: number): void
    preload(dirname: string | null, type: ClientPreloadType): void
    recursiveUnset(key: string | null, flags: UnsetFlags): boolean
    removeDir(dir: string | null): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string | null, val: Value): void
    setBool(key: string | null, val: boolean): boolean
    setErrorHandling(mode: ClientErrorHandlingMode): void
    setFloat(key: string | null, val: number): boolean
    setInt(key: string | null, val: number): boolean
    setPair(key: string | null, carType: ValueType, cdrType: ValueType, addressOfCar: any | null, addressOfCdr: any | null): boolean
    setString(key: string | null, val: string | null): boolean
    suggestSync(): void
    // Has conflict: unreturnedError(error: GLib.Error): void
    unset(key: string | null): boolean
    // Has conflict: valueChanged(key: string | null, value: Value): void

    // Own virtual methods of GConf-2.0.GConf.Client

    error(error: GLib.Error): void
    unreturnedError(error: GLib.Error): void
    valueChanged(key: string | null, value: Value): void

    // Own signals of GConf-2.0.GConf.Client

    connect(sigName: "error", callback: Client.ErrorSignalCallback): number
    on(sigName: "error", callback: Client.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Client.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Client.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "unreturned-error", callback: Client.UnreturnedErrorSignalCallback): number
    on(sigName: "unreturned-error", callback: Client.UnreturnedErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unreturned-error", callback: Client.UnreturnedErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unreturned-error", callback: Client.UnreturnedErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unreturned-error", ...args: any[]): void
    connect(sigName: "value-changed", callback: Client.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Client.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: Client.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: Client.ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", p0: any | null, ...args: any[]): void

    // Class property signals of GConf-2.0.GConf.Client

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

export class Client extends GObject.Object {

    // Own properties of GConf-2.0.GConf.Client

    static name: string

    // Constructors of GConf-2.0.GConf.Client

    constructor(config?: Client.ConstructorProperties) 
    _init(config?: Client.ConstructorProperties): void
    /**
     * Creates a new #GConfClient using the default #GConfEngine. Normally this is the
     * engine you want. If someone else is already using the default
     * #GConfClient, this function returns the same one they're using, but
     * with the reference count incremented. So you have to unref either way.
     * @returns a new #GConfClient. g_object_unref() when you're done.
     */
    static getDefault(): Client
}

export interface ChangeSet {

    // Owm methods of GConf-2.0.GConf.ChangeSet

    checkValue(key: string | null, valueRetloc: Value): boolean
    clear(): void
    /**
     * Iterates over a #GConfChangeSet by calling a
     * #GConfChangeSetForeachFunc for each change in the set. See the
     * description of #GConfChangeSetForeachFunc for details.  You may not
     * call gconf_change_set_remove() during the iteration, because you'll
     * confuse the internal data structures and cause memory corruption.
     * @param func function to call for each change in the change set.
     */
    foreach(func: ChangeSetForeachFunc): void
    ref(): ChangeSet
    remove(key: string | null): void
    set(key: string | null, value: Value): void
    setBool(key: string | null, val: boolean): void
    setFloat(key: string | null, val: number): void
    setInt(key: string | null, val: number): void
    setNocopy(key: string | null, value: Value): void
    setPair(key: string | null, carType: ValueType, cdrType: ValueType, addressOfCar: any | null, addressOfCdr: any | null): void
    setString(key: string | null, val: string | null): void
    size(): number
    unref(): void
    unset(key: string | null): void
}

export class ChangeSet {

    // Own properties of GConf-2.0.GConf.ChangeSet

    static name: string

    // Constructors of GConf-2.0.GConf.ChangeSet

    constructor() 
    static new(): ChangeSet
}

export interface ClientClass {

    // Own fields of GConf-2.0.GConf.ClientClass

    parentClass: GObject.ObjectClass
    valueChanged: (client: Client, key: string | null, value: Value) => void
    unreturnedError: (client: Client, error: GLib.Error) => void
    error: (client: Client, error: GLib.Error) => void
    pad1: GLib.Func
    pad2: GLib.Func
    pad3: GLib.Func
}

export abstract class ClientClass {

    // Own properties of GConf-2.0.GConf.ClientClass

    static name: string
}

export interface Engine {

    // Owm methods of GConf-2.0.GConf.Engine

    /**
     * Lists the subdirectories in `dir`. The returned list contains
     * allocated strings. Each string is the absolute path of a
     * subdirectory. You should g_free() each string in the list, then
     * g_slist_free() the list itself.
     * @param dir Directory to get subdirectories from.
     * @returns List of allocated subdirectory names.
     */
    allDirs(dir: string | null): string[]
    /**
     * Lists the key-value pairs in `dir`. Does not list subdirectories; for
     * that use gconf_engine_all_dirs(). The returned list contains #GConfEntry
     * objects. A #GConfEntry contains an <emphasis>absolute</emphasis> key
     * and a value. The list is not recursive, it contains only the immediate
     * children of `dir`.  To free the returned list, gconf_entry_free()
     * each list element, then g_slist_free() the list itself.
     * @param dir Directory to list.
     * @returns List of #GConfEntry.
     */
    allEntries(dir: string | null): Entry[]
    associateSchema(key: string | null, schemaKey: string | null): boolean
    changeSetFromCurrent(err: GLib.Error, firstKey: string | null, ...args: any): ChangeSet
    changeSetFromCurrentv(keys: string | null): ChangeSet
    commitChangeSet(cs: ChangeSet, removeCommitted: boolean): boolean
    dirExists(dir: string | null): boolean
    get(key: string | null): Value
    getBool(key: string | null): boolean
    getDefaultFromSchema(key: string | null): Value
    getEntry(key: string | null, locale: string | null, useSchemaDefault: boolean): Entry
    getFloat(key: string | null): number
    getFull(key: string | null, locale: string | null, useSchemaDefault: boolean, isDefaultP: boolean, isWritableP: boolean): Value
    getInt(key: string | null): number
    getPair(key: string | null, carType: ValueType, cdrType: ValueType, carRetloc: any | null, cdrRetloc: any | null): boolean
    getString(key: string | null): string | null
    getUserData(): any | null
    getWithLocale(key: string | null, locale: string | null): Value
    getWithoutDefault(key: string | null): Value
    keyIsWritable(key: string | null): boolean
    notifyRemove(cnxn: number): void
    ref(): void
    removeDir(dir: string | null): void
    reverseChangeSet(cs: ChangeSet): ChangeSet
    set(key: string | null, value: Value): boolean
    setBool(key: string | null, val: boolean): boolean
    setFloat(key: string | null, val: number): boolean
    setInt(key: string | null, val: number): boolean
    setList(key: string | null, listType: ValueType, list: any[]): boolean
    setPair(key: string | null, carType: ValueType, cdrType: ValueType, addressOfCar: any | null, addressOfCdr: any | null): boolean
    setString(key: string | null, val: string | null): boolean
    setUserData(data: any | null, dnotify: GLib.DestroyNotify): void
    suggestSync(): void
    unref(): void
    unset(key: string | null): boolean
}

/**
 * An opaque data type representing one or more configuration sources.
 * @record 
 */
export class Engine {

    // Own properties of GConf-2.0.GConf.Engine

    static name: string
}

export interface Entry {

    // Own fields of GConf-2.0.GConf.Entry

    key: string | null
    value: Value

    // Owm methods of GConf-2.0.GConf.Entry

    copy(): Entry
    equal(b: Entry): boolean
    free(): void
    getIsDefault(): boolean
    getIsWritable(): boolean
    getKey(): string | null
    getSchemaName(): string | null
    getValue(): Value
    ref(): Entry
    setIsDefault(isDefault: boolean): void
    setIsWritable(isWritable: boolean): void
    setSchemaName(name: string | null): void
    setValue(val: Value): void
    setValueNocopy(val: Value): void
    stealValue(): Value
    unref(): void
}

export class Entry {

    // Own properties of GConf-2.0.GConf.Entry

    static name: string

    // Constructors of GConf-2.0.GConf.Entry

    constructor(key: string | null, val: Value) 
    static new(key: string | null, val: Value): Entry
    static newNocopy(key: string | null, val: Value): Entry
}

export interface EnumStringPair {

    // Own fields of GConf-2.0.GConf.EnumStringPair

    enumValue: number
    str: string | null
}

export class EnumStringPair {

    // Own properties of GConf-2.0.GConf.EnumStringPair

    static name: string
}

export interface Listeners {

    // Owm methods of GConf-2.0.GConf.Listeners

    add(listenPoint: string | null, listenerData: any | null, destroyNotify: GLib.FreeFunc): number
    count(): number
    foreach(callback: ListenersForeach): void
    free(): void
    getData(cnxnId: number, listenerDataP: any | null, locationP: string | null): boolean
    notify(allAbove: string | null, callback: any): void
    remove(cnxnId: number): void
    removeIf(predicate: ListenersPredicate): void
}

/**
 * The #GConfListeners structure contains nothing other than a dummy pointer. Internally
 * the data about listeners is maintained through a listener table structure,
 * LTable which contains data like the namespace, an array to hold the listeners, count of
 * active listeners,value to be given to the next connection and the list of connection indices
 * to be recycled. There is also a Listener structure maintaining data pertaining to listeners.
 * @record 
 */
export class Listeners {

    // Own properties of GConf-2.0.GConf.Listeners

    static name: string
}

export interface MetaInfo {

    // Own fields of GConf-2.0.GConf.MetaInfo

    schema: string | null
    modUser: string | null
    modTime: GLib.Time

    // Owm methods of GConf-2.0.GConf.MetaInfo

    free(): void
    getModUser(): string | null
    getSchema(): string | null
    setModTime(modTime: GLib.Time): void
    setModUser(modUser: string | null): void
    setSchema(schemaName: string | null): void
}

export class MetaInfo {

    // Own properties of GConf-2.0.GConf.MetaInfo

    static name: string
}

export interface Schema {

    // Owm methods of GConf-2.0.GConf.Schema

    free(): void
    getCarType(): ValueType
    getCdrType(): ValueType
    getDefaultValue(): Value
    getListType(): ValueType
    getLocale(): string | null
    getLongDesc(): string | null
    getOwner(): string | null
    getShortDesc(): string | null
    getType(): ValueType
    setCarType(type: ValueType): void
    setCdrType(type: ValueType): void
    setDefaultValue(val: Value): void
    setDefaultValueNocopy(val: Value): void
    setListType(type: ValueType): void
    setLocale(locale: string | null): void
    setLongDesc(desc: string | null): void
    setOwner(owner: string | null): void
    setShortDesc(desc: string | null): void
    setType(type: ValueType): void
}

/**
 * An opaque data type representing a description of a key-value pair.
 * @record 
 */
export class Schema {

    // Own properties of GConf-2.0.GConf.Schema

    static name: string
}

export interface Value {

    // Own fields of GConf-2.0.GConf.Value

    type: ValueType

    // Owm methods of GConf-2.0.GConf.Value

    compare(valueB: Value): number
    copy(): Value
    encode(): string | null
    free(): void
    getBool(): boolean
    getCar(): Value
    getCdr(): Value
    getFloat(): number
    getInt(): number
    /**
     * Returns a #GSList containing #GConfValue objects. Each #GConfValue in
     * the returned list will have the type returned by
     * gconf_value_get_list_type(). Remember that the empty #GSList is equal to
     * <symbol>NULL</symbol>.  The list is not a copy; it is "owned" by the
     * #GConfValue and will be destroyed when the #GConfValue is destroyed.
     * @returns a #GList.
     */
    getList(): Value[]
    getListType(): ValueType
    getString(): string | null
    setBool(theBool: boolean): void
    setCar(car: Value): void
    setCarNocopy(car: Value): void
    setCdr(cdr: Value): void
    setCdrNocopy(cdr: Value): void
    setFloat(theFloat: number): void
    setInt(theInt: number): void
    setListType(type: ValueType): void
    setString(theStr: string | null): void
    toString(): string | null
}

export class Value {

    // Own properties of GConf-2.0.GConf.Value

    static name: string

    // Constructors of GConf-2.0.GConf.Value

    constructor(type: ValueType) 
    static new(type: ValueType): Value
    static newFromString(type: ValueType, str: string | null): Value
    static decode(encoded: string | null): Value
}

// END