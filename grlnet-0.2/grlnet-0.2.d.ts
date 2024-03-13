/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './grlnet-0.2-ambient.d.ts';
import './grlnet-0.2-import.d.ts';
/**
 * GrlNet-0.2
 */

import type Soup from '@girs/soup-2.4';
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
         * TBD
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
         * Cannot connect to the proxy server
         */
        PROXY_ERROR,
        /**
         * The operation has been cancelled (see #GCancellable)
         */
        CANCELLED,
    }
    module Wc {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cache: boolean;
            cache_size: number;
            cacheSize: number;
            loglevel: number;
            throttling: number;
            user_agent: string;
            userAgent: string;
        }
    }

    class Wc extends GObject.Object {
        // Own properties of GrlNet.Wc

        get cache(): boolean;
        set cache(val: boolean);
        get cache_size(): number;
        set cache_size(val: number);
        get cacheSize(): number;
        set cacheSize(val: number);
        get loglevel(): number;
        set loglevel(val: number);
        get throttling(): number;
        set throttling(val: number);
        get user_agent(): string;
        set user_agent(val: string);
        get userAgent(): string;
        set userAgent(val: string);

        // Constructors of GrlNet.Wc

        constructor(properties?: Partial<Wc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Wc;

        // Own static methods of GrlNet.Wc

        static error_quark(): GLib.Quark;

        // Own methods of GrlNet.Wc

        /**
         * This method will flush all the pending request in the queue.
         */
        flush_delayed_requests(): void;
        /**
         * Request the fetching of a web resource given the `uri`. This request is
         * asynchronous, thus the result will be returned within the `callback`.
         * @param uri The URI of the resource to request
         * @param cancellable a #GCancellable instance or %NULL to ignore
         * @param callback The callback when the result is ready
         */
        request_async(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        request_finish(result: Gio.AsyncResult): [boolean, string, number];
        /**
         * Request the fetching of a web resource given the `uri`. This request is
         * asynchronous, thus the result will be returned within the `callback`.
         * @param uri The URI of the resource to request
         * @param headers a set of additional HTTP headers for this request or %NULL to ignore
         * @param cancellable a #GCancellable instance or %NULL to ignore
         * @param callback The callback when the result is ready
         */
        request_with_headers_async(
            uri: string,
            headers?: GLib.HashTable<string, string> | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sets if cache must be used. Note that this will only work if caching is
         * supporting.  If sets %TRUE, a new cache will be created. If sets to %FALSE,
         * current cache is clean and removed.
         * @param use_cache if cache must be used or not
         */
        set_cache(use_cache: boolean): void;
        /**
         * Sets the new maximum size of cache, in Megabytes. Default value is 10. Using
         * 0 means no cache will be done.
         * @param cache_size size of cache (in Mb)
         */
        set_cache_size(cache_size: number): void;
        /**
         * Setting the log level the logger feature is added into
         * the libsoup session.
         * @param log_level the libsoup log level to set [0,3]
         */
        set_log_level(log_level: number): void;
        /**
         * Setting this property, the #GrlNetWc will queue all the requests and
         * will dispatch them with a pause between them of this value.
         * @param throttling the number of seconds to wait between requests
         */
        set_throttling(throttling: number): void;
    }

    type WcClass = typeof Wc;
    abstract class WcPrivate {
        // Constructors of GrlNet.WcPrivate

        _init(...args: any[]): void;
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

export default GrlNet;
// END
