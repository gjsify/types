
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
import type Vda from '@girs/vda-1';
import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';

export namespace Vgda {

    /**
     * Vgda-1
     */


    namespace GProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::parameters": (pspec: GObject.ParamSpec) => void;
            "notify::is-opened": (pspec: GObject.ParamSpec) => void;
            "notify::connection-string": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Vda.Connection.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class GProvider extends GObject.Object implements Vda.Connection {
        static $gtype: GObject.GType<GProvider>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GProvider;

        // Signals
        /** @signal */
        connect<K extends keyof GProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @read-only
          * @category Inherited from Vda.Connection
         */
        get status(): Vda.ConnectionStatus;

        /** @category Inherited from Vda.Connection */
        get parameters(): Vda.ConnectionParameters;
        set parameters(val: Vda.ConnectionParameters);

        /**
         * @read-only
          * @category Inherited from Vda.Connection
         */
        get is_opened(): boolean;

        /**
         * @read-only
          * @category Inherited from Vda.Connection
         */
        get isOpened(): boolean;

        /**
         * @read-only
          * @category Inherited from Vda.Connection
         */
        get connection_string(): string;

        /**
         * @read-only
          * @category Inherited from Vda.Connection
         */
        get connectionString(): string;

        close(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        close(_callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _callback_ 
         */
        close(_callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        close_finish(_res_: Gio.AsyncResult): void;

        open(): globalThis.Promise<Vda.ConnectionStatus>;

        /**
         * @param _callback_ 
         */
        open(_callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _callback_ 
         */
        open(_callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<Vda.ConnectionStatus> | void);

        /**
         * @param _res_ 
         */
        open_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus;

        /**
         * @param cnc_string 
         */
        open_from_string(cnc_string: string): globalThis.Promise<Vda.ConnectionStatus>;

        /**
         * @param cnc_string 
         * @param _callback_ 
         */
        open_from_string(cnc_string: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param cnc_string 
         * @param _callback_ 
         */
        open_from_string(cnc_string: string, _callback_?: Gio.AsyncReadyCallback<this>): (globalThis.Promise<Vda.ConnectionStatus> | void);

        /**
         * @param _res_ 
         */
        open_from_string_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus;

        /**
         * @param sql 
         */
        parse_string(sql: string): Vda.Query;

        /**
         * @param name 
         * @param sql 
         */
        parse_string_prepared(name: string, sql: string): Vda.PreparedQuery;

        /**
         * @param name 
         */
        get_prepared_query(name: string): Vda.PreparedQuery;

        /**
         * @param cmd 
         * @param name 
         */
        query_from_command(cmd: Vda.SqlCommand, name: string): Vda.PreparedQuery;

        /**
         * @param v 
         */
        value_to_quoted_string(v: Vda.SqlValue): string;

        /**
         * @param category 
         */
        locale(category: string): string;

        get_status(): Vda.ConnectionStatus;

        get_parameters(): Vda.ConnectionParameters;

        /**
         * @param value 
         */
        set_parameters(value: Vda.ConnectionParameters): void;

        get_is_opened(): boolean;

        get_connection_string(): string;

        /**
         * @param _callback_ 
         * @virtual
         */
        vfunc_close(_callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_close_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param _callback_ 
         * @virtual
         */
        vfunc_open(_callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_open_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus;

        /**
         * @param cnc_string 
         * @param _callback_ 
         * @virtual
         */
        vfunc_open_from_string(cnc_string: string, _callback_: Gio.AsyncReadyCallback<this>): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_open_from_string_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus;

        /**
         * @param sql 
         * @virtual
         */
        vfunc_parse_string(sql: string): Vda.Query;

        /**
         * @param name 
         * @param sql 
         * @virtual
         */
        vfunc_parse_string_prepared(name: string, sql: string): Vda.PreparedQuery;

        /**
         * @param name 
         * @virtual
         */
        vfunc_get_prepared_query(name: string): Vda.PreparedQuery;

        /**
         * @param cmd 
         * @param name 
         * @virtual
         */
        vfunc_query_from_command(cmd: Vda.SqlCommand, name: string): Vda.PreparedQuery;

        /**
         * @param v 
         * @virtual
         */
        vfunc_value_to_quoted_string(v: Vda.SqlValue): string;

        /**
         * @param category 
         * @virtual
         */
        vfunc_locale(category: string): string;

        /**
         * @virtual
         */
        vfunc_get_status(): Vda.ConnectionStatus;

        /**
         * @virtual
         */
        vfunc_get_parameters(): Vda.ConnectionParameters;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_parameters(value: Vda.ConnectionParameters): void;

        /**
         * @virtual
         */
        vfunc_get_is_opened(): boolean;

        /**
         * @virtual
         */
        vfunc_get_connection_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type GProviderClass = typeof GProvider;

    /**
     * @gir-type Struct
     */
    abstract class GProviderPrivate {
        static $gtype: GObject.GType<GProviderPrivate>;
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

export default Vgda;

// END
