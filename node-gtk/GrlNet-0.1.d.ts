// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GrlNet-0.1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GrlNet {

/**
 * These constants identify all the available errors managed by
 * the web client.
 */
enum WcError {
    UNAVAILABLE,
    PROTOCOL_ERROR,
    AUTHENTICATION_REQUIRED,
    NOT_FOUND,
    CONFLICT,
    FORBIDDEN,
    NETWORK_ERROR,
    PROXY_ERROR,
    CANCELLED,
}
interface Wc_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GrlNet-0.1.GrlNet.Wc

    cache?: boolean | null
    cacheSize?: number | null
    loglevel?: number | null
    throttling?: number | null
}

interface Wc {

    // Own properties of GrlNet-0.1.GrlNet.Wc

    cache: boolean
    cacheSize: number
    loglevel: number
    throttling: number

    // Own fields of GrlNet-0.1.GrlNet.Wc

    parent: GObject.Object

    // Owm methods of GrlNet-0.1.GrlNet.Wc

    /**
     * This method will flush all the pending request in the queue.
     */
    flushDelayedRequests(): void
    /**
     * Request the fetching of a web resource given the `uri`. This request is
     * asynchronous, thus the result will be returned within the `callback`.
     * @param uri The URI of the resource to request
     * @param cancellable a #GCancellable instance or %NULL to ignore
     * @param callback The callback when the result is ready
     */
    requestAsync(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous load of the file's contents.
     * The contents are placed in contents, and length is set to the size of the
     * contents string.
     * 
     * The content address will be invalidated at the next request. So if you
     * want to keep it, please copy it into another address.
     * @param result The result of the request
     * @param content The contents of the resource
     * @param length The length of the contents or %NULL if it is not needed
     */
    requestFinish(result: Gio.AsyncResult, content: string, length?: number | null): boolean
    /**
     * Sets if cache must be used. Note that this will only work if caching is
     * supporting.  If sets %TRUE, a new cache will be created. If sets to %FALSE,
     * current cache is clean and removed.
     * @param useCache if cache must be used or not
     */
    setCache(useCache: boolean): void
    /**
     * Sets the new maximum size of cache, in Megabytes. Default value is 10. Using
     * 0 means no cache will be done.
     * @param cacheSize size of cache (in Mb)
     */
    setCacheSize(cacheSize: number): void
    /**
     * Setting the log level the logger feature is added into
     * the libsoup session.
     * @param logLevel the libsoup log level to set [0,3]
     */
    setLogLevel(logLevel: number): void
    /**
     * Setting this property, the #GrlNetWc will queue all the requests and
     * will dispatch them with a pause between them of this value.
     * @param throttling the number of seconds to wait between requests
     */
    setThrottling(throttling: number): void

    // Class property signals of GrlNet-0.1.GrlNet.Wc

    connect(sigName: "notify::cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::cache-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-size", ...args: any[]): void
    connect(sigName: "notify::loglevel", callback: (...args: any[]) => void): number
    on(sigName: "notify::loglevel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::loglevel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::loglevel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::loglevel", ...args: any[]): void
    connect(sigName: "notify::throttling", callback: (...args: any[]) => void): number
    on(sigName: "notify::throttling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::throttling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::throttling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::throttling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Wc extends GObject.Object {

    // Own properties of GrlNet-0.1.GrlNet.Wc

    static name: string
    static $gtype: GObject.GType<Wc>

    // Constructors of GrlNet-0.1.GrlNet.Wc

    constructor(config?: Wc_ConstructProps) 
    /**
     * Creates a new #GrlNetWc.
     * 
     * use it.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GrlNetWc.
     * 
     * use it.
     * @constructor 
     */
    static new(): Wc
    _init(config?: Wc_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface WcClass {

    // Own fields of GrlNet-0.1.GrlNet.WcClass

    parentClass: GObject.ObjectClass
}

/**
 * Grilo web client helper class.
 * 
 * It's a simple and thin web client for be used by the sources.
 * @record 
 */
abstract class WcClass {

    // Own properties of GrlNet-0.1.GrlNet.WcClass

    static name: string
}

interface WcPrivate {
}

class WcPrivate {

    // Own properties of GrlNet-0.1.GrlNet.WcPrivate

    static name: string
}

}
export default GrlNet;