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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GConf {
    /**
     * GConf-2.0
     */

    export namespace ClientErrorHandlingMode {
        export const $gtype: GObject.GType<ClientErrorHandlingMode>;
    }

    enum ClientErrorHandlingMode {
        HANDLE_NONE,
        HANDLE_UNRETURNED,
        HANDLE_ALL,
    }

    export namespace ClientPreloadType {
        export const $gtype: GObject.GType<ClientPreloadType>;
    }

    enum ClientPreloadType {
        PRELOAD_NONE,
        PRELOAD_ONELEVEL,
        PRELOAD_RECURSIVE,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        static SUCCESS: number;
        static FAILED: number;
        static NO_SERVER: number;
        static NO_PERMISSION: number;
        static BAD_ADDRESS: number;
        static BAD_KEY: number;
        static PARSE_ERROR: number;
        static CORRUPT: number;
        static TYPE_MISMATCH: number;
        static IS_DIR: number;
        static IS_KEY: number;
        static OVERRIDDEN: number;
        static OAF_ERROR: number;
        static LOCAL_ENGINE: number;
        static LOCK_FAILED: number;
        static NO_WRITABLE_DATABASE: number;
        static IN_SHUTDOWN: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace ValueType {
        export const $gtype: GObject.GType<ValueType>;
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
    function concat_dir_and_key(dir: string, key: string): string;
    /**
     * Detach from the config server and release
     * all related resources
     */
    function debug_shutdown(): number;
    function enum_to_string(lookup_table: EnumStringPair, enum_value: number): string;
    function error_quark(): GLib.Quark;
    /**
     * Escape `arbitrary_text` such that it's a valid key element (i.e. one
     * part of the key path). The escaped key won't pass gconf_valid_key()
     * because it isn't a whole key (i.e. it doesn't have a preceding
     * slash), but prepending a slash to the escaped text should always
     * result in a valid key.
     * @param arbitrary_text some text in any encoding or format
     * @param len length of @arbitrary_text in bytes, or -1 if @arbitrary_text is nul-terminated
     * @returns a nul-terminated valid GConf key
     */
    function escape_key(arbitrary_text: string, len: number): string;
    function init(argc: number, argv: string): boolean;
    function is_initialized(): boolean;
    function key_is_below(above: string, below: string): boolean;
    function postinit(app?: any | null, mod_info?: any | null): void;
    function preinit(app?: any | null, mod_info?: any | null): void;
    function string_to_enum(lookup_table: EnumStringPair, str: string, enum_value_retloc: number): boolean;
    /**
     * Converts a string escaped with gconf_escape_key() back into its original
     * form.
     * @param escaped_key a key created with gconf_escape_key()
     * @param len length of @escaped_key in bytes, or -1 if @escaped_key is nul-terminated
     * @returns the original string that was escaped to create @escaped_key
     */
    function unescape_key(escaped_key: string, len: number): string;
    function unique_key(): string;
    function valid_key(key: string, why_invalid: string): boolean;
    function value_decode(encoded: string): Value;
    interface ChangeSetForeachFunc {
        (cs: ChangeSet, key: string, value: Value): void;
    }
    interface ClientErrorHandlerFunc {
        (client: Client, error: GLib.Error): void;
    }
    interface ClientNotifyFunc {
        (client: Client, cnxn_id: number, entry: Entry): void;
    }
    interface ListenersForeach {
        (location: string, cnxn_id: number, listener_data?: any | null): void;
    }
    interface ListenersPredicate {
        (location: string, cnxn_id: number, listener_data?: any | null): boolean;
    }

    export namespace UnsetFlags {
        export const $gtype: GObject.GType<UnsetFlags>;
    }

    enum UnsetFlags {
        NAMES,
    }
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            error: (arg0: any | null) => void;
            'unreturned-error': (arg0: any | null) => void;
            'value-changed': (arg0: string, arg1: any | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new #GConfClient using the default #GConfEngine. Normally this is the
         * engine you want. If someone else is already using the default
         * #GConfClient, this function returns the same one they're using, but
         * with the reference count incremented. So you have to unref either way.
         */
        static get_default(): Client;

        // Virtual methods

        vfunc_error(error: GLib.Error): void;
        vfunc_unreturned_error(error: GLib.Error): void;
        vfunc_value_changed(key: string, value: Value): void;

        // Methods

        add_dir(dir: string, preload: ClientPreloadType | null): void;
        /**
         * Lists the subdirectories in `dir`. The returned list contains
         * allocated strings. Each string is the absolute path of a
         * subdirectory. You should g_free() each string in the list, then
         * g_slist_free() the list itself.  Just like gconf_engine_all_dirs(),
         * but uses #GConfClient caching and error-handling features.
         * @param dir directory to get subdirectories from.
         * @returns List of allocated subdirectory names.
         */
        all_dirs(dir: string): string[];
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
        all_entries(dir: string): Entry[];
        change_set_from_currentv(keys: string): ChangeSet;
        clear_cache(): void;
        commit_change_set(cs: ChangeSet, remove_committed: boolean): boolean;
        dir_exists(dir: string): boolean;
        error(error: GLib.Error): void;
        get(key: string): Value;
        get_bool(key: string): boolean;
        get_default_from_schema(key: string): Value;
        get_entry(key: string, locale: string, use_schema_default: boolean): Entry;
        get_float(key: string): number;
        get_int(key: string): number;
        get_pair(
            key: string,
            car_type: ValueType | null,
            cdr_type: ValueType | null,
            car_retloc?: any | null,
            cdr_retloc?: any | null,
        ): boolean;
        get_string(key: string): string;
        get_without_default(key: string): Value;
        key_is_writable(key: string): boolean;
        notify(key: string): void;
        notify_add(namespace_section: string, func: ClientNotifyFunc, destroy_notify: GLib.FreeFunc): number;
        notify_remove(cnxn: number): void;
        preload(dirname: string, type: ClientPreloadType | null): void;
        recursive_unset(key: string, flags: UnsetFlags | null): boolean;
        remove_dir(dir: string): void;
        reverse_change_set(cs: ChangeSet): ChangeSet;
        set(key: string, val: Value): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        set_bool(key: string, val: boolean): boolean;
        set_error_handling(mode: ClientErrorHandlingMode | null): void;
        set_float(key: string, val: number): boolean;
        set_int(key: string, val: number): boolean;
        set_pair(
            key: string,
            car_type: ValueType | null,
            cdr_type: ValueType | null,
            address_of_car?: any | null,
            address_of_cdr?: any | null,
        ): boolean;
        set_string(key: string, val: string): boolean;
        suggest_sync(): void;
        unreturned_error(error: GLib.Error): void;
        unset(key: string): boolean;
        value_changed(key: string, value: Value): void;
    }

    class ChangeSet {
        static $gtype: GObject.GType<ChangeSet>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ChangeSet;

        // Methods

        check_value(key: string, value_retloc: Value): boolean;
        clear(): void;
        /**
         * Iterates over a #GConfChangeSet by calling a
         * #GConfChangeSetForeachFunc for each change in the set. See the
         * description of #GConfChangeSetForeachFunc for details.  You may not
         * call gconf_change_set_remove() during the iteration, because you'll
         * confuse the internal data structures and cause memory corruption.
         * @param func function to call for each change in the change set.
         */
        foreach(func: ChangeSetForeachFunc): void;
        ref(): ChangeSet;
        remove(key: string): void;
        set(key: string, value: Value): void;
        set_bool(key: string, val: boolean): void;
        set_float(key: string, val: number): void;
        set_int(key: string, val: number): void;
        set_nocopy(key: string, value: Value): void;
        set_pair(
            key: string,
            car_type: ValueType | null,
            cdr_type: ValueType | null,
            address_of_car?: any | null,
            address_of_cdr?: any | null,
        ): void;
        set_string(key: string, val: string): void;
        size(): number;
        unref(): void;
        unset(key: string): void;
    }

    type ClientClass = typeof Client;
    class Entry {
        static $gtype: GObject.GType<Entry>;

        // Fields

        key: string;

        // Constructors

        constructor(key: string, val: Value);
        _init(...args: any[]): void;

        static ['new'](key: string, val: Value): Entry;

        static new_nocopy(key: string, val: Value): Entry;

        // Methods

        copy(): Entry;
        equal(b: Entry): boolean;
        free(): void;
        get_is_default(): boolean;
        get_is_writable(): boolean;
        get_key(): string;
        get_schema_name(): string;
        get_value(): Value;
        ref(): Entry;
        set_is_default(is_default: boolean): void;
        set_is_writable(is_writable: boolean): void;
        set_schema_name(name: string): void;
        set_value(val: Value): void;
        set_value_nocopy(val: Value): void;
        steal_value(): Value;
        unref(): void;
    }

    class EnumStringPair {
        static $gtype: GObject.GType<EnumStringPair>;

        // Fields

        enum_value: number;
        str: string;

        // Constructors

        constructor(
            properties?: Partial<{
                enum_value: number;
                str: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Value {
        static $gtype: GObject.GType<Value>;

        // Fields

        type: ValueType;

        // Constructors

        constructor(type: ValueType);
        _init(...args: any[]): void;

        static ['new'](type: ValueType): Value;

        static new_from_string(type: ValueType, str: string): Value;

        // Static methods

        static decode(encoded: string): Value;

        // Methods

        compare(value_b: Value): number;
        copy(): Value;
        encode(): string;
        free(): void;
        get_bool(): boolean;
        get_car(): Value;
        get_cdr(): Value;
        get_float(): number;
        get_int(): number;
        /**
         * Returns a #GSList containing #GConfValue objects. Each #GConfValue in
         * the returned list will have the type returned by
         * gconf_value_get_list_type(). Remember that the empty #GSList is equal to
         * <symbol>NULL</symbol>.  The list is not a copy; it is "owned" by the
         * #GConfValue and will be destroyed when the #GConfValue is destroyed.
         * @returns a #GList.
         */
        get_list(): Value[];
        get_list_type(): ValueType;
        get_string(): string;
        set_bool(the_bool: boolean): void;
        set_car(car: Value): void;
        set_car_nocopy(car: Value): void;
        set_cdr(cdr: Value): void;
        set_cdr_nocopy(cdr: Value): void;
        set_float(the_float: number): void;
        set_int(the_int: number): void;
        set_list_type(type: ValueType | null): void;
        set_string(the_str: string): void;
        to_string(): string;
    }

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

export default GConf;

// END
