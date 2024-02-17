
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './grlnet-0.3-ambient.d.ts';
import './grlnet-0.3-import.d.ts';
/**
 * GrlNet-0.3
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GrlNet {

/**
 * These constants identify all the available errors managed by
 * the web client.
 */
enum WcError {
    /**
     * Deprecated. For generic errors, you
     * should check for G_IO_ERROR_FAILED from G_IO_ERROR domain.
     */
    UNAVAILABLE,
    /**
     * Invalid URI or header
     */
    PROTOCOL_ERROR,
    /**
     * Required authentication
     */
    AUTHENTICATION_REQUIRED,
    /**
     * Request resource not found
     */
    NOT_FOUND,
    /**
     * The entry has been modified since is was
     * downloaded
     */
    CONFLICT,
    /**
     * TBD
     */
    FORBIDDEN,
    /**
     * Cannot connect to the server
     */
    NETWORK_ERROR,
    /**
     * Deprecated. You should check for
     * G_IO_ERROR_PROXY_FAILED from G_IO_ERROR domain.
     */
    PROXY_ERROR,
    /**
     * Deprecated. You should check for
     * G_IO_ERROR_CANCELLED from G_IO_ERROR domain.
     */
    CANCELLED,
}
module Wc {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GrlNet-0.3.GrlNet.Wc

        cache?: boolean | null
        cacheSize?: number | null
        loglevel?: number | null
        throttling?: number | null
        userAgent?: string | null
    }

}

interface Wc {

    // Own properties of GrlNet-0.3.GrlNet.Wc

    cache: boolean
    cacheSize: number
    loglevel: number
    throttling: number
    userAgent: string | null

    // Owm methods of GrlNet-0.3.GrlNet.Wc

    /**
     * This method will flush all the pending request in the queue.
     */
    flush_delayed_requests(): void
    /**
     * Request the fetching of a web resource given the `uri`. This request is
     * asynchronous, thus the result will be returned within the `callback`.
     * @param uri The URI of the resource to request
     * @param cancellable a #GCancellable instance or %NULL to ignore
     * @param callback The callback when the result is ready
     */
    request_async(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of request_async

    /**
     * Promisified version of {@link request_async}
     * 
     * Request the fetching of a web resource given the `uri`. This request is
     * asynchronous, thus the result will be returned within the `callback`.
     * @param uri The URI of the resource to request
     * @param cancellable a #GCancellable instance or %NULL to ignore
     * @returns A Promise of: %TRUE if the request was successfull. If %FALSE an error occurred.
     */
    request_async(uri: string, cancellable: Gio.Cancellable | null): globalThis.Promise</* content */ Uint8Array>
    /**
     * Finishes an asynchronous load of the file's contents.
     * The contents are placed in contents, and length is set to the size of the
     * contents string.
     * 
     * The content address will be invalidated at the next request. So if you
     * want to keep it, please copy it into another address.
     * @param result The result of the request
     * @returns %TRUE if the request was successfull. If %FALSE an error occurred.
     */
    request_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* content */ Uint8Array ]
    /**
     * Request the fetching of a web resource given the `uri`. This request is
     * asynchronous, thus the result will be returned within the `callback`.
     * @param uri The URI of the resource to request
     * @param headers a set of additional HTTP headers for this request or %NULL to ignore
     * @param cancellable a #GCancellable instance or %NULL to ignore
     * @param callback The callback when the result is ready
     */
    request_with_headers_async(uri: string, headers: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Sets if cache must be used. Note that this will only work if caching is
     * supporting.  If sets %TRUE, a new cache will be created. If sets to %FALSE,
     * current cache is clean and removed.
     * @param use_cache if cache must be used or not
     */
    set_cache(use_cache: boolean): void
    /**
     * Sets the new maximum size of cache, in Megabytes. Default value is 10. Using
     * 0 means no cache will be done.
     * @param cache_size size of cache (in Mb)
     */
    set_cache_size(cache_size: number): void
    /**
     * Setting the log level the logger feature is added into
     * the libsoup session.
     * @param log_level the libsoup log level to set [0,3]
     */
    set_log_level(log_level: number): void
    /**
     * Setting this property, the #GrlNetWc will queue all the requests and
     * will dispatch them with a pause between them of this value.
     * 
     * Note that if the grl-net library was compiled against libsoup3, changing
     * the throttling configuration will show a warning if done after the first
     * request.
     * @param throttling the number of seconds to wait between requests
     */
    set_throttling(throttling: number): void

    // Class property signals of GrlNet-0.3.GrlNet.Wc

    connect(sigName: "notify::cache", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::cache-size", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-size", ...args: any[]): void
    connect(sigName: "notify::loglevel", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loglevel", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loglevel", ...args: any[]): void
    connect(sigName: "notify::throttling", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttling", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttling", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Wc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Wc extends GObject.Object {

    // Own properties of GrlNet-0.3.GrlNet.Wc

    static name: string
    static $gtype: GObject.GType<Wc>

    // Constructors of GrlNet-0.3.GrlNet.Wc

    constructor(config?: Wc.ConstructorProperties) 
    /**
     * Creates a new #GrlNetWc.
     * @constructor 
     * @returns a new allocated instance of #GrlNetWc. Do g_object_unref() after use it.
     */
    constructor() 
    /**
     * Creates a new #GrlNetWc.
     * @constructor 
     * @returns a new allocated instance of #GrlNetWc. Do g_object_unref() after use it.
     */
    static new(): Wc
    _init(config?: Wc.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

interface WcClass {

    // Own fields of GrlNet-0.3.GrlNet.WcClass

    /**
     * the parent class structure
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * Grilo web client helper class.
 * 
 * It's a simple and thin web client to be used by the sources to download
 * content from Internet.
 * @record 
 */
abstract class WcClass {

    // Own properties of GrlNet-0.3.GrlNet.WcClass

    static name: string
}

interface WcPrivate {
}

class WcPrivate {

    // Own properties of GrlNet-0.3.GrlNet.WcPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GrlNet;
// END