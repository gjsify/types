// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GConf-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GConf {

enum ClientErrorHandlingMode {
    HANDLE_NONE,
    HANDLE_UNRETURNED,
    HANDLE_ALL,
}
enum ClientPreloadType {
    PRELOAD_NONE,
    PRELOAD_ONELEVEL,
    PRELOAD_RECURSIVE,
}
enum Error {
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
enum ValueType {
    INVALID,
    STRING,
    INT,
    FLOAT,
    BOOL,
    SCHEMA,
    LIST,
    PAIR,
}
enum UnsetFlags {
    NAMES,
}
function concat_dir_and_key(dir: string, key: string): string
/**
 * Detach from the config server and release
 * all related resources
 */
function debug_shutdown(): number
function enum_to_string(lookup_table: EnumStringPair, enum_value: number): string
function error_quark(): GLib.Quark
/**
 * Escape `arbitrary_text` such that it's a valid key element (i.e. one
 * part of the key path). The escaped key won't pass gconf_valid_key()
 * because it isn't a whole key (i.e. it doesn't have a preceding
 * slash), but prepending a slash to the escaped text should always
 * result in a valid key.
 * @param arbitrary_text some text in any encoding or format
 * @param len length of `arbitrary_text` in bytes, or -1 if `arbitrary_text` is nul-terminated
 */
function escape_key(arbitrary_text: string, len: number): string
function init(argc: number, argv: string): boolean
function is_initialized(): boolean
function key_is_below(above: string, below: string): boolean
function postinit(app: object | null, mod_info: object | null): void
function preinit(app: object | null, mod_info: object | null): void
function string_to_enum(lookup_table: EnumStringPair, str: string, enum_value_retloc: number): boolean
/**
 * Converts a string escaped with gconf_escape_key() back into its original
 * form.
 * @param escaped_key a key created with gconf_escape_key()
 * @param len length of `escaped_key` in bytes, or -1 if `escaped_key` is nul-terminated
 */
function unescape_key(escaped_key: string, len: number): string
function unique_key(): string
function valid_key(key: string, why_invalid: string): boolean
function value_decode(encoded: string): Value
interface ChangeSetForeachFunc {
    (cs: ChangeSet, key: string, value: Value): void
}
interface ClientErrorHandlerFunc {
    (client: Client, error: GLib.Error): void
}
interface ClientNotifyFunc {
    (client: Client, cnxn_id: number, entry: Entry): void
}
interface ListenersForeach {
    (location: string, cnxn_id: number, listener_data: object | null): void
}
interface ListenersPredicate {
    (location: string, cnxn_id: number, listener_data: object | null): boolean
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `error`
 */
interface Client_ErrorSignalCallback {
    ($obj: Client, object: object | null): void
}

/**
 * Signal callback interface for `unreturned-error`
 */
interface Client_UnreturnedErrorSignalCallback {
    ($obj: Client, object: object | null): void
}

/**
 * Signal callback interface for `value-changed`
 */
interface Client_ValueChangedSignalCallback {
    ($obj: Client, object: string, p0: object | null): void
}

interface Client {

    // Own fields of GConf-2.0.GConf.Client

    object: GObject.Object

    // Owm methods of GConf-2.0.GConf.Client

    add_dir(dir: string, preload: ClientPreloadType): void
    /**
     * Lists the subdirectories in `dir`. The returned list contains
     * allocated strings. Each string is the absolute path of a
     * subdirectory. You should g_free() each string in the list, then
     * g_slist_free() the list itself.  Just like gconf_engine_all_dirs(),
     * but uses #GConfClient caching and error-handling features.
     * @param dir directory to get subdirectories from.
     */
    all_dirs(dir: string): string[]
    /**
     * Lists the key-value pairs in `dir`. Does not list subdirectories; for
     * that use gconf_client_all_dirs(). The returned list contains #GConfEntry
     * objects. A #GConfEntry contains an <emphasis>absolute</emphasis> key
     * and a value. The list is not recursive, it contains only the immediate
     * children of `dir`.  To free the returned list, gconf_entry_free()
     * each list element, then g_slist_free() the list itself.
     * Just like gconf_engine_all_entries (), but uses #GConfClient caching and error-handling features.
     * @param dir directory to list.
     */
    all_entries(dir: string): Entry[]
    change_set_from_currentv(keys: string): ChangeSet
    clear_cache(): void
    commit_change_set(cs: ChangeSet, remove_committed: boolean): boolean
    dir_exists(dir: string): boolean
    error(error: GLib.Error): void
    get(key: string): Value
    get_bool(key: string): boolean
    get_default_from_schema(key: string): Value
    get_entry(key: string, locale: string, use_schema_default: boolean): Entry
    get_float(key: string): number
    get_int(key: string): number
    get_pair(key: string, car_type: ValueType, cdr_type: ValueType, car_retloc: object | null, cdr_retloc: object | null): boolean
    get_string(key: string): string
    get_without_default(key: string): Value
    key_is_writable(key: string): boolean
    notify(key: string): void
    notify_add(namespace_section: string, func: ClientNotifyFunc): number
    notify_remove(cnxn: number): void
    preload(dirname: string, type: ClientPreloadType): void
    recursive_unset(key: string, flags: UnsetFlags): boolean
    remove_dir(dir: string): void
    reverse_change_set(cs: ChangeSet): ChangeSet
    set(key: string, val: Value): void
    set_bool(key: string, val: boolean): boolean
    set_error_handling(mode: ClientErrorHandlingMode): void
    set_float(key: string, val: number): boolean
    set_int(key: string, val: number): boolean
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car: object | null, address_of_cdr: object | null): boolean
    set_string(key: string, val: string): boolean
    suggest_sync(): void
    unreturned_error(error: GLib.Error): void
    unset(key: string): boolean
    value_changed(key: string, value: Value): void

    // Own virtual methods of GConf-2.0.GConf.Client

    vfunc_error(error: GLib.Error): void
    vfunc_unreturned_error(error: GLib.Error): void
    vfunc_value_changed(key: string, value: Value): void

    // Own signals of GConf-2.0.GConf.Client

    connect(sigName: "error", callback: Client_ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Client_ErrorSignalCallback): number
    emit(sigName: "error", object: object | null, ...args: any[]): void
    connect(sigName: "unreturned-error", callback: Client_UnreturnedErrorSignalCallback): number
    connect_after(sigName: "unreturned-error", callback: Client_UnreturnedErrorSignalCallback): number
    emit(sigName: "unreturned-error", object: object | null, ...args: any[]): void
    connect(sigName: "value-changed", callback: Client_ValueChangedSignalCallback): number
    connect_after(sigName: "value-changed", callback: Client_ValueChangedSignalCallback): number
    emit(sigName: "value-changed", object: string, p0: object | null, ...args: any[]): void

    // Class property signals of GConf-2.0.GConf.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of GConf-2.0.GConf.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of GConf-2.0.GConf.Client

    constructor(config?: Client_ConstructProps) 
    _init(config?: Client_ConstructProps): void
    /**
     * Creates a new #GConfClient using the default #GConfEngine. Normally this is the
     * engine you want. If someone else is already using the default
     * #GConfClient, this function returns the same one they're using, but
     * with the reference count incremented. So you have to unref either way.
     */
    static get_default(): Client
}

interface ChangeSet {

    // Owm methods of GConf-2.0.GConf.ChangeSet

    check_value(key: string, value_retloc: Value): boolean
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
    remove(key: string): void
    set(key: string, value: Value): void
    set_bool(key: string, val: boolean): void
    set_float(key: string, val: number): void
    set_int(key: string, val: number): void
    set_nocopy(key: string, value: Value): void
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car: object | null, address_of_cdr: object | null): void
    set_string(key: string, val: string): void
    size(): number
    unref(): void
    unset(key: string): void
}

class ChangeSet {

    // Own properties of GConf-2.0.GConf.ChangeSet

    static name: string

    // Constructors of GConf-2.0.GConf.ChangeSet

    constructor() 
    static new(): ChangeSet
}

interface ClientClass {

    // Own fields of GConf-2.0.GConf.ClientClass

    parent_class: GObject.ObjectClass
    value_changed: (client: Client, key: string, value: Value) => void
    unreturned_error: (client: Client, error: GLib.Error) => void
    error: (client: Client, error: GLib.Error) => void
    pad1: GLib.Func
    pad2: GLib.Func
    pad3: GLib.Func
}

abstract class ClientClass {

    // Own properties of GConf-2.0.GConf.ClientClass

    static name: string
}

interface Engine {

    // Owm methods of GConf-2.0.GConf.Engine

    /**
     * Lists the subdirectories in `dir`. The returned list contains
     * allocated strings. Each string is the absolute path of a
     * subdirectory. You should g_free() each string in the list, then
     * g_slist_free() the list itself.
     * @param dir Directory to get subdirectories from.
     */
    all_dirs(dir: string): string[]
    /**
     * Lists the key-value pairs in `dir`. Does not list subdirectories; for
     * that use gconf_engine_all_dirs(). The returned list contains #GConfEntry
     * objects. A #GConfEntry contains an <emphasis>absolute</emphasis> key
     * and a value. The list is not recursive, it contains only the immediate
     * children of `dir`.  To free the returned list, gconf_entry_free()
     * each list element, then g_slist_free() the list itself.
     * @param dir Directory to list.
     */
    all_entries(dir: string): Entry[]
    associate_schema(key: string, schema_key: string): boolean
    change_set_from_current(err: GLib.Error, first_key: string, ...args: any): ChangeSet
    change_set_from_currentv(keys: string): ChangeSet
    commit_change_set(cs: ChangeSet, remove_committed: boolean): boolean
    dir_exists(dir: string): boolean
    get(key: string): Value
    get_bool(key: string): boolean
    get_default_from_schema(key: string): Value
    get_entry(key: string, locale: string, use_schema_default: boolean): Entry
    get_float(key: string): number
    get_full(key: string, locale: string, use_schema_default: boolean, is_default_p: boolean, is_writable_p: boolean): Value
    get_int(key: string): number
    get_pair(key: string, car_type: ValueType, cdr_type: ValueType, car_retloc: object | null, cdr_retloc: object | null): boolean
    get_string(key: string): string
    get_user_data(): object | null
    get_with_locale(key: string, locale: string): Value
    get_without_default(key: string): Value
    key_is_writable(key: string): boolean
    notify_remove(cnxn: number): void
    ref(): void
    remove_dir(dir: string): void
    reverse_change_set(cs: ChangeSet): ChangeSet
    set(key: string, value: Value): boolean
    set_bool(key: string, val: boolean): boolean
    set_float(key: string, val: number): boolean
    set_int(key: string, val: number): boolean
    set_list(key: string, list_type: ValueType, list: object[]): boolean
    set_pair(key: string, car_type: ValueType, cdr_type: ValueType, address_of_car: object | null, address_of_cdr: object | null): boolean
    set_string(key: string, val: string): boolean
    set_user_data(data: object | null, dnotify: GLib.DestroyNotify): void
    suggest_sync(): void
    unref(): void
    unset(key: string): boolean
}

/**
 * An opaque data type representing one or more configuration sources.
 * @record 
 */
class Engine {

    // Own properties of GConf-2.0.GConf.Engine

    static name: string
}

interface Entry {

    // Own fields of GConf-2.0.GConf.Entry

    key: string
    value: Value

    // Owm methods of GConf-2.0.GConf.Entry

    copy(): Entry
    equal(b: Entry): boolean
    free(): void
    get_is_default(): boolean
    get_is_writable(): boolean
    get_key(): string
    get_schema_name(): string
    get_value(): Value
    ref(): Entry
    set_is_default(is_default: boolean): void
    set_is_writable(is_writable: boolean): void
    set_schema_name(name: string): void
    set_value(val: Value): void
    set_value_nocopy(val: Value): void
    steal_value(): Value
    unref(): void
}

class Entry {

    // Own properties of GConf-2.0.GConf.Entry

    static name: string

    // Constructors of GConf-2.0.GConf.Entry

    constructor(key: string, val: Value) 
    static new(key: string, val: Value): Entry
    static new_nocopy(key: string, val: Value): Entry
}

interface EnumStringPair {

    // Own fields of GConf-2.0.GConf.EnumStringPair

    enum_value: number
    str: string
}

class EnumStringPair {

    // Own properties of GConf-2.0.GConf.EnumStringPair

    static name: string
}

interface Listeners {

    // Owm methods of GConf-2.0.GConf.Listeners

    add(listen_point: string, listener_data: object | null, destroy_notify: GLib.FreeFunc): number
    count(): number
    foreach(callback: ListenersForeach): void
    free(): void
    get_data(cnxn_id: number, listener_data_p: object | null, location_p: string): boolean
    notify(all_above: string, callback: any): void
    remove(cnxn_id: number): void
    remove_if(predicate: ListenersPredicate): void
}

/**
 * The #GConfListeners structure contains nothing other than a dummy pointer. Internally
 * the data about listeners is maintained through a listener table structure,
 * LTable which contains data like the namespace, an array to hold the listeners, count of
 * active listeners,value to be given to the next connection and the list of connection indices
 * to be recycled. There is also a Listener structure maintaining data pertaining to listeners.
 * @record 
 */
class Listeners {

    // Own properties of GConf-2.0.GConf.Listeners

    static name: string
}

interface MetaInfo {

    // Own fields of GConf-2.0.GConf.MetaInfo

    schema: string
    mod_user: string
    mod_time: GLib.Time

    // Owm methods of GConf-2.0.GConf.MetaInfo

    free(): void
    get_mod_user(): string
    get_schema(): string
    set_mod_time(mod_time: GLib.Time): void
    set_mod_user(mod_user: string): void
    set_schema(schema_name: string): void
}

class MetaInfo {

    // Own properties of GConf-2.0.GConf.MetaInfo

    static name: string
}

interface Schema {

    // Owm methods of GConf-2.0.GConf.Schema

    free(): void
    get_car_type(): ValueType
    get_cdr_type(): ValueType
    get_default_value(): Value
    get_list_type(): ValueType
    get_locale(): string
    get_long_desc(): string
    get_owner(): string
    get_short_desc(): string
    get_type(): ValueType
    set_car_type(type: ValueType): void
    set_cdr_type(type: ValueType): void
    set_default_value(val: Value): void
    set_default_value_nocopy(val: Value): void
    set_list_type(type: ValueType): void
    set_locale(locale: string): void
    set_long_desc(desc: string): void
    set_owner(owner: string): void
    set_short_desc(desc: string): void
    set_type(type: ValueType): void
}

/**
 * An opaque data type representing a description of a key-value pair.
 * @record 
 */
class Schema {

    // Own properties of GConf-2.0.GConf.Schema

    static name: string
}

interface Value {

    // Own fields of GConf-2.0.GConf.Value

    type: ValueType

    // Owm methods of GConf-2.0.GConf.Value

    compare(value_b: Value): number
    copy(): Value
    encode(): string
    free(): void
    get_bool(): boolean
    get_car(): Value
    get_cdr(): Value
    get_float(): number
    get_int(): number
    /**
     * Returns a #GSList containing #GConfValue objects. Each #GConfValue in
     * the returned list will have the type returned by
     * gconf_value_get_list_type(). Remember that the empty #GSList is equal to
     * <symbol>NULL</symbol>.  The list is not a copy; it is "owned" by the
     * #GConfValue and will be destroyed when the #GConfValue is destroyed.
     */
    get_list(): Value[]
    get_list_type(): ValueType
    get_string(): string
    set_bool(the_bool: boolean): void
    set_car(car: Value): void
    set_car_nocopy(car: Value): void
    set_cdr(cdr: Value): void
    set_cdr_nocopy(cdr: Value): void
    set_float(the_float: number): void
    set_int(the_int: number): void
    set_list_type(type: ValueType): void
    set_string(the_str: string): void
    to_string(): string
}

class Value {

    // Own properties of GConf-2.0.GConf.Value

    static name: string

    // Constructors of GConf-2.0.GConf.Value

    constructor(type: ValueType) 
    static new(type: ValueType): Value
    static new_from_string(type: ValueType, str: string): Value
    static decode(encoded: string): Value
}

}
export default GConf;