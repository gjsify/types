/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './soupgnome-2.4-ambient.d.ts';
import './soupgnome-2.4-import.d.ts';
/**
 * SoupGNOME-2.4
 */

import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace SoupGNOME {
    const COOKIE_JAR_SQLITE_FILENAME: string;
    function gnome_features_2_26_get_type(): GObject.GType;
    module CookieJarSqlite {
        // Constructor properties interface
    }

    class CookieJarSqlite extends Soup.CookieJarDB {
        // Constructors of SoupGNOME-2.4.CookieJarSqlite

        static ['new'](filename: string, read_only: boolean): CookieJarSqlite;
    }

    module PasswordManagerGNOME {
        // Constructor properties interface
    }

    class PasswordManagerGNOME extends GObject.Object {}

    module ProxyResolverGNOME {
        // Constructor properties interface
    }

    class ProxyResolverGNOME extends Soup.ProxyResolverDefault {}

    class CookieJarSqliteClass {}

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

export default SoupGNOME;
// END
