
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-soupgnome-2.4-import.d.ts';
    
/**
 * SoupGNOME-2.4
 */

import type Soup from '@girs/node-soup-2.4';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace SoupGNOME {

const COOKIE_JAR_SQLITE_FILENAME: string
function gnomeFeatures226GetType(): GObject.GType
module CookieJarSqlite {

    // Constructor properties interface

    interface ConstructorProperties extends Soup.SessionFeature.ConstructorProperties, Soup.CookieJarDB.ConstructorProperties {
    }

}

interface CookieJarSqlite extends Soup.SessionFeature {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    __gtype__: number

    // Own fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    parent: Soup.CookieJarDB & Soup.CookieJar & GObject.Object & GObject.Object

    // Class property signals of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CookieJarSqlite extends Soup.CookieJarDB {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    static name: string

    // Constructors of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    constructor(config?: CookieJarSqlite.ConstructorProperties) 
    constructor(filename: string, readOnly: boolean) 
    static new(filename: string, readOnly: boolean): CookieJarSqlite

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
     * @param readOnly %TRUE if `filename` is read-only
     * @returns the new #SoupCookieJar
     */
    static new(filename: string, readOnly: boolean): Soup.CookieJarDB
    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     * @returns a new #SoupCookieJar
     */
    static new(): Soup.CookieJar
    _init(config?: CookieJarSqlite.ConstructorProperties): void
}

module PasswordManagerGNOME {

    // Constructor properties interface

    interface ConstructorProperties extends Soup.SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface PasswordManagerGNOME extends Soup.SessionFeature {

    // Own properties of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    __gtype__: number

    // Class property signals of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

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

class PasswordManagerGNOME extends GObject.Object {

    // Own properties of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    static name: string

    // Constructors of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    constructor(config?: PasswordManagerGNOME.ConstructorProperties) 
    _init(config?: PasswordManagerGNOME.ConstructorProperties): void
}

module ProxyResolverGNOME {

    // Constructor properties interface

    interface ConstructorProperties extends Soup.ProxyURIResolver.ConstructorProperties, Soup.SessionFeature.ConstructorProperties, Soup.ProxyResolverDefault.ConstructorProperties {
    }

}

interface ProxyResolverGNOME extends Soup.ProxyURIResolver, Soup.SessionFeature {

    // Own properties of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    __gtype__: number

    // Class property signals of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gproxy-resolver", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProxyResolverGNOME extends Soup.ProxyResolverDefault {

    // Own properties of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    static name: string

    // Constructors of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    constructor(config?: ProxyResolverGNOME.ConstructorProperties) 
    _init(config?: ProxyResolverGNOME.ConstructorProperties): void
}

interface CookieJarSqliteClass {

    // Own fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass

    parentClass: Soup.CookieJarDBClass
}

abstract class CookieJarSqliteClass {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass

    static name: string
}

}

export default SoupGNOME;
// END