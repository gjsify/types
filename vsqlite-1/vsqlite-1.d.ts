/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './vsqlite-1-ambient.d.ts';
import './vsqlite-1-import.d.ts';
/**
 * Vsqlite-1
 */

import type Vda from '@girs/vda-1';
import type GCalc from '@girs/gcalc-2';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Json from '@girs/json-1.0';
import type GXml from '@girs/gxml-0.20';
import type libxml2 from '@girs/libxml2-2.0';

export namespace Vsqlite {
    class ConnectionError extends GLib.Error {
        // Own fields of Vsqlite-1.ConnectionError

        INVALID_FILE_ERROR: number;

        // Constructors of Vsqlite-1.ConnectionError

        constructor(options: { message: string; code: number });
    }

    module Connection {
        // Constructor properties interface
    }

    class Connection extends GObject.Object {
        // Constructors of Vsqlite-1.Connection

        static ['new'](): Connection;

        // Owm methods of Vsqlite-1.Connection

        type_to_gtype(t: number): GObject.GType;
    }

    class ConnectionClass {}

    class ConnectionPrivate {}

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

export default Vsqlite;
// END
