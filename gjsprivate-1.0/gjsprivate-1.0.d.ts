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
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GjsPrivate {
    /**
     * GjsPrivate-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace LocaleCategory {
        export const $gtype: GObject.GType<LocaleCategory>;
    }

    /**
     * @gir-type Enum
     */
    enum LocaleCategory {
        ALL,
        COLLATE,
        CTYPE,
        MESSAGES,
        MONETARY,
        NUMERIC,
        TIME,
    }

    /**
     * @param domain
     * @param location
     */
    function bindtextdomain(domain: string, location: string): void;
    function clear_terminal(): void;
    /**
     * @param n
     */
    function format_int_alternative_output(n: number): string;
    /**
     * @param source
     * @param source_property
     * @param target
     * @param target_property
     * @param flags
     * @param to_callback
     * @param from_callback
     */
    function g_binding_group_bind_full(
        source: GObject.BindingGroup,
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags,
        to_callback: BindingTransformFunc,
        from_callback: BindingTransformFunc,
    ): void;
    /**
     * @param source
     * @param source_property
     * @param target
     * @param target_property
     * @param flags
     * @param to_callback
     * @param from_callback
     */
    function g_object_bind_property_full(
        source: GObject.Object,
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags,
        to_callback: BindingTransformFunc,
        from_callback: BindingTransformFunc,
    ): GObject.Binding;
    /**
     * @param container
     * @param child
     * @param property
     * @param value
     */
    function gtk_container_child_set_property(
        container: GObject.Object,
        child: GObject.Object,
        property: string,
        value: GObject.Value | any,
    ): void;
    /**
     * @param sort_func
     */
    function gtk_custom_sorter_new<T = GObject.Object>(sort_func: CompareDataFunc): T;
    /**
     * @param sorter
     * @param sort_func
     */
    function gtk_custom_sorter_set_sort_func(sorter: GObject.Object, sort_func: CompareDataFunc): void;
    /**
     * @param store
     * @param item
     * @param compare_func
     */
    function list_store_insert_sorted(
        store: Gio.ListStore,
        item: GObject.Object,
        compare_func: CompareDataFunc,
    ): number;
    /**
     * @param store
     * @param compare_func
     */
    function list_store_sort(store: Gio.ListStore, compare_func: CompareDataFunc): void;
    function log_set_writer_default(): void;
    /**
     * @param func
     */
    function log_set_writer_func(func: GLogWriterFunc): void;
    /**
     * @param pspec
     */
    function param_spec_get_flags(pspec: GObject.ParamSpec): GObject.ParamFlags;
    /**
     * @param pspec
     */
    function param_spec_get_owner_type(pspec: GObject.ParamSpec): GObject.GType;
    /**
     * @param pspec
     */
    function param_spec_get_value_type(pspec: GObject.ParamSpec): GObject.GType;
    /**
     * @param regex
     * @param s
     * @param match_options
     */
    function regex_match(regex: GLib.Regex, s: string, match_options: GLib.RegexMatchFlags): [boolean, MatchInfo];
    /**
     * @param regex
     * @param s
     * @param match_options
     */
    function regex_match_all(regex: GLib.Regex, s: string, match_options: GLib.RegexMatchFlags): [boolean, MatchInfo];
    /**
     * @param regex
     * @param bytes
     * @param start_position
     * @param match_options
     */
    function regex_match_all_full(
        regex: GLib.Regex,
        bytes: Uint8Array | string,
        start_position: number,
        match_options: GLib.RegexMatchFlags,
    ): [boolean, MatchInfo];
    /**
     * @param regex
     * @param bytes
     * @param start_position
     * @param match_options
     */
    function regex_match_full(
        regex: GLib.Regex,
        bytes: Uint8Array | string,
        start_position: number,
        match_options: GLib.RegexMatchFlags,
    ): [boolean, MatchInfo];
    /**
     * @param category
     * @param locale
     */
    function setlocale(category: LocaleCategory, locale: string): string;
    /**
     * @param domain
     */
    function textdomain(domain: string): void;
    /**
     * @gir-type Callback
     */
    interface BindingTransformFunc {
        (binding: GObject.Binding, from_value: unknown): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface CompareDataFunc<A = GObject.Object, B = GObject.Object> {
        (a: A, b: B): number;
    }
    /**
     * @gir-type Callback
     */
    interface GLogWriterFunc {
        (level: GLib.LogLevelFlags, fields: GLib.Variant): GLib.LogWriterOutput;
    }
    namespace DBusImplementation {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            /**
             * @signal
             * @run-LAST
             */
            'handle-method-call': (arg0: string, arg1: GLib.Variant, arg2: Gio.DBusMethodInvocation) => void;
            /**
             * @signal
             * @run-LAST
             */
            'handle-property-get': (arg0: string) => GLib.Variant;
            /**
             * @signal
             * @run-LAST
             */
            'handle-property-set': (arg0: string, arg1: GLib.Variant) => void;
            'notify::g-interface-info': (pspec: GObject.ParamSpec) => void;
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps {
            g_interface_info: Gio.DBusInterfaceInfo;
            gInterfaceInfo: Gio.DBusInterfaceInfo;
        }
    }

    /**
     * @gir-type Class
     */
    class DBusImplementation extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface {
        static $gtype: GObject.GType<DBusImplementation>;

        // Properties

        /**
         * @construct-only
         */
        set g_interface_info(val: Gio.DBusInterfaceInfo);
        /**
         * @construct-only
         */
        set gInterfaceInfo(val: Gio.DBusInterfaceInfo);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DBusImplementation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DBusImplementation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DBusImplementation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusImplementation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DBusImplementation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusImplementation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DBusImplementation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DBusImplementation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param property
         * @param newvalue
         */
        emit_property_changed(property: string, newvalue: GLib.Variant): void;
        /**
         * @param signal_name
         * @param parameters
         */
        emit_signal(signal_name: string, parameters: GLib.Variant): void;
        unexport(): void;
        /**
         * @param connection
         */
        unexport_from_connection(connection: Gio.DBusConnection): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }

    /**
     * @gir-type Struct
     */
    class DBusImplementationClass {
        static $gtype: GObject.GType<DBusImplementationClass>;
    }

    /**
     * @gir-type Struct
     */
    class DBusImplementationPrivate {
        static $gtype: GObject.GType<DBusImplementationPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class MatchInfo {
        static $gtype: GObject.GType<MatchInfo>;

        // Methods

        /**
         * @param string_to_expand
         */
        expand_references(string_to_expand: string): string;
        /**
         * @param match_num
         */
        fetch(match_num: number): string;
        fetch_all(): string[];
        /**
         * @param name
         */
        fetch_named(name: string): string;
        /**
         * @param name
         */
        fetch_named_pos(name: string): [boolean, number, number];
        /**
         * @param match_num
         */
        fetch_pos(match_num: number): [boolean, number, number];
        free(): void;
        get_match_count(): number;
        get_regex(): GLib.Regex;
        get_string(): string;
        is_partial_match(): boolean;
        matches(): boolean;
        next(): boolean;
        ref(): MatchInfo;
        unref(): void;
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

export default GjsPrivate;

// END
