// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SoupGNOME-2.4
 */

import type * as Gjs from './Gjs';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace SoupGNOME {

const COOKIE_JAR_SQLITE_FILENAME: string
function gnome_features_2_26_get_type(): GObject.GType
interface CookieJarSqlite_ConstructProps extends Soup.SessionFeature_ConstructProps, Soup.CookieJarDB_ConstructProps {
}

interface CookieJarSqlite extends Soup.SessionFeature {

    // Own fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    parent: Soup.CookieJarDB

    // Class property signals of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    connect(sigName: "notify::filename", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: CookieJarSqlite, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CookieJarSqlite extends Soup.CookieJarDB {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    static name: string
    static $gtype: GObject.GType<CookieJarSqlite>

    // Constructors of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    constructor(config?: CookieJarSqlite_ConstructProps) 
    constructor(filename: string, read_only: boolean) 
    static new(filename: string, read_only: boolean): CookieJarSqlite

    // Overloads of new

    /**
     * Creates a #SoupCookieJarDB.
     * 
     * `filename` will be read in at startup to create an initial set of
     * cookies. If `read_only` is %FALSE, then the non-session cookies will
     * be written to `filename` when the 'changed' signal is emitted from
     * the jar. (If `read_only` is %TRUE, then the cookie jar will only be
     * used for this session, and changes made to it will be lost when the
     * jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from, or %NULL
     * @param read_only %TRUE if `filename` is read-only
     */
    static new(filename: string, read_only: boolean): Soup.CookieJarDB
    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     */
    static new(): Soup.CookieJar
    _init(config?: CookieJarSqlite_ConstructProps): void
}

interface PasswordManagerGNOME_ConstructProps extends Soup.SessionFeature_ConstructProps, GObject.Object_ConstructProps {
}

interface PasswordManagerGNOME extends Soup.SessionFeature {

    // Class property signals of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PasswordManagerGNOME extends GObject.Object {

    // Own properties of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    static name: string
    static $gtype: GObject.GType<PasswordManagerGNOME>

    // Constructors of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    constructor(config?: PasswordManagerGNOME_ConstructProps) 
    _init(config?: PasswordManagerGNOME_ConstructProps): void
}

interface ProxyResolverGNOME_ConstructProps extends Soup.ProxyURIResolver_ConstructProps, Soup.SessionFeature_ConstructProps, Soup.ProxyResolverDefault_ConstructProps {
}

interface ProxyResolverGNOME extends Soup.ProxyURIResolver, Soup.SessionFeature {

    // Class property signals of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    connect(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gproxy-resolver", callback: (($obj: ProxyResolverGNOME, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gproxy-resolver", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProxyResolverGNOME extends Soup.ProxyResolverDefault {

    // Own properties of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    static name: string
    static $gtype: GObject.GType<ProxyResolverGNOME>

    // Constructors of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    constructor(config?: ProxyResolverGNOME_ConstructProps) 
    _init(config?: ProxyResolverGNOME_ConstructProps): void
}

interface CookieJarSqliteClass {

    // Own fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass

    parent_class: Soup.CookieJarDBClass
}

abstract class CookieJarSqliteClass {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass

    static name: string
}

}
export default SoupGNOME;